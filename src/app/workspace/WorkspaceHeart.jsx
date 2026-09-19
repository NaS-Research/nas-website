"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const modelId = "3f8072336ce94d18b3d0d055a1ece089";
export default function WorkspaceHeart() {
  const host = useRef(null);
  const frame = useRef(null);
  const apiRef = useRef(null);
  const initialCamera = useRef(null);
  const [active, setActive] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    // Prewarm several screens ahead, while visitors are still at the opening.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setActive(true); observer.disconnect(); }
    }, { rootMargin: "10000px" });
    observer.observe(host.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!active) return;
    // Start on page mount so the opening gives the detailed model time to load.
    let cancelled = false;
    const timeout = window.setTimeout(() => { if (!cancelled) setFailed(true); }, 45000);
    const fail = () => { if (!cancelled) { setFailed(true); window.clearTimeout(timeout); } };
    function initialize() {
      if (cancelled || !frame.current || !window.Sketchfab) return;
      const client = new window.Sketchfab("1.12.1", frame.current);
      client.init(modelId, {
        autostart: 1, camera: 0, dnt: 1, preload: 0,
        ui_controls: 0, ui_help: 0, ui_hint: 0, ui_infos: 0, ui_settings: 0, ui_stop: 0,
        success(api) {
          if (cancelled) return;
          api.addEventListener("viewerready", () => {
            if (cancelled) return;
            api.setBackground({ color: [0, 0, 0] });
            api.getCameraLookAt((error, camera) => {
              if (cancelled) return;
              if (error) { fail(); return; }
              initialCamera.current = camera;
              apiRef.current = api;
              window.clearTimeout(timeout);
              setFailed(false);
              setReady(true);
            });
          });
          api.start();
        }, error: fail,
      });
    }
    let script = document.getElementById("sketchfab-viewer-api");
    if (window.Sketchfab) initialize();
    else {
      if (!script) {
        script = document.createElement("script");
        script.id = "sketchfab-viewer-api";
        script.src = "https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js";
        script.async = true;
        document.head.appendChild(script);
      }
      script.addEventListener("load", initialize);
      script.addEventListener("error", fail);
    }
    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      script?.removeEventListener("load", initialize);
      script?.removeEventListener("error", fail);
      apiRef.current = null;
    };
  }, [active, attempt]);
  function move(angle = 0, scale = 1) {
    const api = apiRef.current;
    if (!api) return;
    api.getCameraLookAt((error, camera) => {
      if (error) return;
      const offset = camera.position.map((n, i) => n - camera.target[i]);
      const rotated = [offset[0] * Math.cos(angle) - offset[1] * Math.sin(angle), offset[0] * Math.sin(angle) + offset[1] * Math.cos(angle), offset[2]];
      api.setCameraLookAt(rotated.map((n, i) => camera.target[i] + n * scale), camera.target, 0.45);
    });
  }
  return <div className="workspace-heart-interactive" ref={host}>
    <div className="workspace-heart-stage">
      {active && <iframe key={attempt} ref={frame} title="Rotate and zoom the realistic human heart" allow="autoplay; fullscreen" allowFullScreen />}
      <div className="workspace-heart-poster" data-ready={ready && !failed} aria-hidden={ready && !failed}><Image src="/learn/models/realistic-heart-black.png" alt="Realistic human heart" fill loading="eager" sizes="(max-width: 700px) 100vw, 55vw" />{failed && <p role="status">The 3D viewer could not load. <button onClick={() => { setFailed(false); setReady(false); setAttempt(n => n + 1); }}>Try again</button></p>}</div>
    </div>
    <div className="workspace-heart-toolbar" aria-label="Heart view controls">
      <span>{ready && !failed ? "Drag to rotate · Pinch or scroll to zoom" : "Interactive 3D preview"}</span>
      <div><button disabled={!ready || failed} onClick={() => move(-Math.PI / 6)} aria-label="Rotate heart left">↶</button><button disabled={!ready || failed} onClick={() => move(Math.PI / 6)} aria-label="Rotate heart right">↷</button><button disabled={!ready || failed} onClick={() => move(0, 0.85)} aria-label="Zoom into heart">+</button><button disabled={!ready || failed} onClick={() => move(0, 1.18)} aria-label="Zoom out from heart">−</button><button disabled={!ready || failed} onClick={() => { const c = initialCamera.current; if (c) apiRef.current?.setCameraLookAt(c.position, c.target, 0.6); }}>Reset</button></div>
    </div>
  </div>;
}
