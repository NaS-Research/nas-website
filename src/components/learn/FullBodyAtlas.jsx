"use client";

import { useEffect, useRef, useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

const bodyLayers = [
  { id: "muscular", name: "Muscular", shortName: "Muscles", color: "#9f4b43", description: "The muscular envelope that produces movement and shapes the exterior form." },
  { id: "skeleton", name: "Skeletal", shortName: "Skeleton", color: "#e8dfc8", description: "The structural framework of bones, joints, and protected spaces." },
  { id: "cardiovascular", name: "Cardiovascular", shortName: "Cardiovascular", color: "#b94a40", description: "The heart and vascular network that distribute blood throughout the body." },
  { id: "nervous", name: "Nervous system", shortName: "Nervous", color: "#d7bd62", description: "The brain, spinal cord, and peripheral pathways that coordinate signaling." },
  { id: "visceral", name: "Internal organs", shortName: "Organs", color: "#b87965", description: "The organ systems responsible for respiration, digestion, metabolism, and elimination." },
];

const allLayerIds = bodyLayers.map((layer) => layer.id);

function cleanStructureName(name = "") {
  return name
    .replace(/[_-]+/g, " ")
    .replace(/\.\d+$/g, "")
    .replace(/\b(l|r)\b$/i, (side) => side.toLowerCase() === "l" ? "left" : "right")
    .replace(/\s+/g, " ")
    .trim() || "Anatomical structure";
}

export default function FullBodyAtlas({ initialFocus = null, onOpenHeart }) {
  const frameRef = useRef(null);
  const [viewerReady, setViewerReady] = useState(false);
  const [visibleLayers, setVisibleLayers] = useState(() => new Set(["muscular", "skeleton"]));
  const [focusedLayer, setFocusedLayer] = useState(initialFocus);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    function receiveAtlasMessage(event) {
      if (event.origin !== window.location.origin || event.source !== frameRef.current?.contentWindow) return;
      if (event.data?.type === "nas-atlas-ready") setViewerReady(true);
      if (event.data?.type === "nas-atlas-select") setSelected(event.data.selection);
    }

    window.addEventListener("message", receiveAtlasMessage);
    return () => window.removeEventListener("message", receiveAtlasMessage);
  }, []);

  useEffect(() => {
    if (!initialFocus) return;
    setFocusedLayer(initialFocus);
    setVisibleLayers((current) => new Set(current).add(initialFocus));
  }, [initialFocus]);

  useEffect(() => {
    if (!viewerReady || !frameRef.current?.contentWindow) return;
    frameRef.current.contentWindow.postMessage({
      type: "nas-atlas-state",
      state: { visibleLayers: [...visibleLayers], focusedLayer },
    }, window.location.origin);
  }, [focusedLayer, viewerReady, visibleLayers]);

  const selectedLayer = selected ? bodyLayers.find((layer) => layer.id === selected.layerId) : null;

  function toggleLayer(layerId) {
    setVisibleLayers((current) => {
      const next = new Set(current);
      if (next.has(layerId)) {
        if (next.size === 1) return next;
        next.delete(layerId);
        if (focusedLayer === layerId) setFocusedLayer(null);
      } else {
        next.add(layerId);
      }
      return next;
    });
    setSelected(null);
  }

  function focusLayer(layerId) {
    setVisibleLayers((current) => new Set(current).add(layerId));
    setFocusedLayer((current) => current === layerId ? null : layerId);
    setSelected(null);
  }

  function resetBody() {
    setVisibleLayers(new Set(["muscular", "skeleton"]));
    setFocusedLayer(null);
    setSelected(null);
  }

  return (
    <div className="full-body-atlas">
      <div className="full-body-atlas__stage">
        <div className="full-body-atlas__stage-heading">
          <span>3D body map</span>
          <strong>{focusedLayer ? bodyLayers.find((layer) => layer.id === focusedLayer)?.name : "Whole body"}</strong>
        </div>
        <iframe ref={frameRef} src="/learn/body-atlas/index.html" className="full-body-atlas__viewer" title="Interactive layered three dimensional human body" />
        <div className="full-body-atlas__instructions" aria-hidden="true">
          <span>Drag to rotate</span><i /><span>Scroll or pinch to zoom</span><i /><span>Select a structure</span>
        </div>
      </div>

      <aside className="full-body-atlas__panel" aria-label="Body layers">
        <header>
          <p>Visual Atlas</p>
          <h3>Body systems</h3>
          <span>Combine layers for context or isolate one system for a clearer view.</span>
        </header>

        <div className="full-body-atlas__panel-actions">
          <button type="button" onClick={() => { setVisibleLayers(new Set(allLayerIds)); setFocusedLayer(null); setSelected(null); }}>Show all</button>
          <button type="button" onClick={() => { const first = focusedLayer || "skeleton"; setVisibleLayers(new Set([first])); setFocusedLayer(first); setSelected(null); }}>Isolate</button>
        </div>

        <div className="full-body-atlas__layers">
          {bodyLayers.map((layer) => {
            const isVisible = visibleLayers.has(layer.id);
            const isFocused = focusedLayer === layer.id;
            return (
              <div className={`full-body-atlas__layer ${isFocused ? "is-focused" : ""}`} key={layer.id}>
                <button type="button" className="full-body-atlas__layer-main" onClick={() => focusLayer(layer.id)}>
                  <span style={{ "--layer-color": layer.color }} aria-hidden="true" />
                  <div><strong>{layer.shortName}</strong><small>{layer.description}</small></div>
                </button>
                <button type="button" className="full-body-atlas__layer-visibility" aria-label={`${isVisible ? "Hide" : "Show"} ${layer.name}`} aria-pressed={isVisible} onClick={() => toggleLayer(layer.id)}>
                  {isVisible ? <IconEye size={15} stroke={1.8} aria-hidden="true" /> : <IconEyeOff size={15} stroke={1.8} aria-hidden="true" />}
                  <span>{isVisible ? "Visible" : "Hidden"}</span>
                </button>
              </div>
            );
          })}
        </div>

        {focusedLayer === "cardiovascular" && (
          <button type="button" className="full-body-atlas__heart-entry" onClick={onOpenHeart}>
            <span><small>Detailed model</small><strong>Enter the human heart</strong></span><i aria-hidden="true">↗</i>
          </button>
        )}

        <div className="full-body-atlas__panel-footer">
          <div className="full-body-atlas__selection" aria-live="polite">
            <span>Selected structure</span>
            {selected ? <><strong>{cleanStructureName(selected.meshName)}</strong><small>{selectedLayer?.name}</small></> : <p>Select any visible structure to identify it.</p>}
          </div>
          <div className="full-body-atlas__panel-meta">
            <button type="button" className="full-body-atlas__reset" onClick={resetBody}>Reset body map</button>
            <p className="full-body-atlas__credit">Anatomical models from Z-Anatomy and BodyParts3D, adapted under CC BY-SA 4.0.</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
