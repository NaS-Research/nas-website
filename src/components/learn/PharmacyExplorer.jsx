"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import {
  IconActivity,
  IconBrain,
  IconDroplet,
  IconHeart,
  IconLungs,
  IconPill,
} from "@tabler/icons-react";
import { explorerModes, explorerSources, explorerSystems } from "@/data/pharmacyExplorer";

const HeartModelViewer = dynamic(() => import("./HeartModelViewer"), {
  ssr: false,
  loading: () => (
    <div className="heart-lab heart-lab--loading" role="status">
      <span />
      Preparing the 3D anatomy lab
    </div>
  ),
});

const FullBodyAtlas = dynamic(() => import("./FullBodyAtlas"), {
  ssr: false,
  loading: () => (
    <div className="full-body-atlas full-body-atlas--loading" role="status">
      <span />
      Preparing the whole body atlas
    </div>
  ),
});

const icons = {
  activity: IconActivity,
  brain: IconBrain,
  heart: IconHeart,
  kidneys: IconDroplet,
  lungs: IconLungs,
  stomach: IconPill,
};

export default function PharmacyExplorer() {
  const [activeMode, setActiveMode] = useState("anatomy");
  const [activeSystem, setActiveSystem] = useState("cardiovascular");
  const [atlasLevel, setAtlasLevel] = useState("body");
  const [bodyFocus, setBodyFocus] = useState(null);
  const mode = explorerModes.find((item) => item.id === activeMode);
  const system = explorerSystems.find((item) => item.id === activeSystem);
  const content = system.modes[activeMode];

  return (
    <section className="pharmacy-explorer" aria-labelledby="pharmacy-explorer-title">
      <header className="pharmacy-explorer__heading">
        <div>
          <p className="nas-section-label">Interactive pharmacy</p>
          <h2 id="pharmacy-explorer-title">Explore the body through the medicine.</h2>
        </div>
        <p>
          Choose a system, then change the lens. Anatomy becomes mechanism, clinical reasoning, safety, and interaction knowledge without leaving the map.
        </p>
      </header>

      <div className="pharmacy-explorer__modes" role="tablist" aria-label="Explorer modes">
        {explorerModes.map((item) => (
          <button
            type="button"
            role="tab"
            aria-selected={activeMode === item.id}
            className={activeMode === item.id ? "is-active" : ""}
            onClick={() => setActiveMode(item.id)}
            key={item.id}
          >
            <span>{String(explorerModes.indexOf(item) + 1).padStart(2, "0")}</span>
            {item.label}
          </button>
        ))}
      </div>

      <div className="pharmacy-explorer__mode-summary" aria-live="polite">
        <strong>{mode.label}</strong>
        <p>{mode.description}</p>
      </div>

      {atlasLevel === "body" ? (
        <FullBodyAtlas
          initialFocus={bodyFocus}
          onOpenHeart={() => {
            setActiveSystem("cardiovascular");
            setAtlasLevel("heart");
          }}
        />
      ) : (
      <div className="pharmacy-explorer__workspace">
        <nav className="pharmacy-explorer__systems" aria-label="Organ systems">
          <p>Choose a system</p>
          <button
            type="button"
            className="pharmacy-explorer__systems-overview"
            onClick={() => {
              setBodyFocus(null);
              setAtlasLevel("body");
            }}
          >
            <span aria-hidden="true" />
            Whole body
          </button>
          {explorerSystems.map((item) => (
            <button
              type="button"
              className={activeSystem === item.id ? "is-active" : ""}
              aria-pressed={activeSystem === item.id}
              onClick={() => {
                setActiveSystem(item.id);
                if (item.id !== "cardiovascular") {
                  const bodyLayer = item.id === "nervous" ? "nervous" : "visceral";
                  setBodyFocus(bodyLayer);
                  setAtlasLevel("body");
                }
              }}
              key={item.id}
            >
              <span style={{ "--system-accent": item.accent }} aria-hidden="true" />
              {item.label}
            </button>
          ))}
        </nav>

        {activeSystem === "cardiovascular" ? (
          <HeartModelViewer activeMode={activeMode} />
        ) : (
          <div className="pharmacy-body-map" aria-label="Interactive body system map">
            <div className="pharmacy-body-map__figure" aria-hidden="true">
              <span className="pharmacy-body-map__head" />
              <span className="pharmacy-body-map__neck" />
              <span className="pharmacy-body-map__torso" />
              <span className="pharmacy-body-map__pelvis" />
              <span className="pharmacy-body-map__leg pharmacy-body-map__leg--left" />
              <span className="pharmacy-body-map__leg pharmacy-body-map__leg--right" />
            </div>
            {explorerSystems.map((item) => {
              const Icon = icons[item.icon];
              return (
                <button
                  type="button"
                  className={`pharmacy-body-node pharmacy-body-node--${item.position} ${activeSystem === item.id ? "is-active" : ""}`}
                  style={{ "--system-accent": item.accent }}
                  aria-label={`Explore ${item.label}`}
                  aria-pressed={activeSystem === item.id}
                  onClick={() => setActiveSystem(item.id)}
                  key={item.id}
                >
                  <Icon size={22} stroke={1.5} aria-hidden="true" />
                  <span>{item.shortLabel}</span>
                </button>
              );
            })}
            <div className="pharmacy-body-map__orbit pharmacy-body-map__orbit--one" aria-hidden="true" />
            <div className="pharmacy-body-map__orbit pharmacy-body-map__orbit--two" aria-hidden="true" />
          </div>
        )}

        <article className="pharmacy-explorer__detail" aria-live="polite">
          <div className="pharmacy-explorer__detail-kicker">
            <span style={{ "--system-accent": system.accent }} />
            {system.label} · {mode.label}
          </div>
          <h3>{content.title}</h3>
          <p>{content.summary}</p>

          <div className="pharmacy-explorer__focus">
            <span>Examine</span>
            <ul>{content.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>

          <div className="pharmacy-explorer__connections">
            <span>Connected knowledge</span>
            <div>{content.links.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </article>
      </div>
      )}

      <p className="pharmacy-explorer__note">
        The explorer is an educational relationship map. Medication specific decisions require current labeling, clinical guidance, and patient specific assessment.
      </p>
      <div className="pharmacy-explorer__sources" aria-label="Explorer sources">
        <span>Reference framework</span>
        <div>
          {explorerSources.map((source) => (
            <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
              {source.title} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
