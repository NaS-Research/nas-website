const modeLabels = {
  pharmacology: { eyebrow: "Mechanism pathway", marker: "Target to response" },
  clinical: { eyebrow: "Clinical sequence", marker: "Assess to follow-up" },
  safety: { eyebrow: "Safety surveillance", marker: "Recognize and respond" },
  interactions: { eyebrow: "Interaction network", marker: "Map combined effects" },
};

function PharmacologyVisual({ content }) {
  const pathway = ["Drug class", ...content.items.slice(0, 3)];
  return (
    <div className="mode-pathway" aria-label="Pharmacology pathway">
      {pathway.map((item, index) => (
        <div className="mode-pathway__step" key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{item}</strong>
        </div>
      ))}
    </div>
  );
}

function ClinicalVisual({ content }) {
  const stages = ["Assess", "Define the goal", "Select therapy", "Monitor"];
  return (
    <div className="mode-clinical" aria-label="Clinical reasoning sequence">
      {stages.map((stage, index) => (
        <div className="mode-clinical__step" key={stage}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div><strong>{stage}</strong><small>{content.items[index] || content.items[0]}</small></div>
        </div>
      ))}
    </div>
  );
}

function SafetyVisual({ content }) {
  return (
    <div className="mode-safety" aria-label="Safety surveillance priorities">
      {content.items.map((item, index) => (
        <div className="mode-safety__signal" key={item}>
          <span>{index < 2 ? "Priority signal" : "Monitor"}</span>
          <strong>{item}</strong>
          <i aria-hidden="true" />
        </div>
      ))}
    </div>
  );
}

function InteractionVisual({ system, content }) {
  return (
    <div className="mode-network" aria-label="Interaction relationship network">
      <div className="mode-network__center" style={{ "--system-accent": system.accent }}>
        <span>Active system</span>
        <strong>{system.shortLabel}</strong>
      </div>
      {content.items.map((item, index) => (
        <div className={`mode-network__node mode-network__node--${index + 1}`} key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{item}</strong>
        </div>
      ))}
    </div>
  );
}

export default function PharmacyModeWorkspace({ mode, systems, activeSystem, onSelectSystem, system, content }) {
  const labels = modeLabels[mode.id];

  return (
    <section className={`pharmacy-mode-workspace pharmacy-mode-workspace--${mode.id}`}>
      <nav className="pharmacy-mode-workspace__systems" aria-label="Choose organ system">
        {systems.map((item) => (
          <button
            type="button"
            className={activeSystem === item.id ? "is-active" : ""}
            style={{ "--system-accent": item.accent }}
            aria-pressed={activeSystem === item.id}
            onClick={() => onSelectSystem(item.id)}
            key={item.id}
          >
            <span aria-hidden="true" />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="pharmacy-mode-workspace__grid">
        <div className="pharmacy-mode-workspace__visual">
          <header>
            <p>{labels.eyebrow}</p>
            <span>{labels.marker}</span>
          </header>
          {mode.id === "pharmacology" && <PharmacologyVisual content={content} />}
          {mode.id === "clinical" && <ClinicalVisual content={content} />}
          {mode.id === "safety" && <SafetyVisual content={content} />}
          {mode.id === "interactions" && <InteractionVisual system={system} content={content} />}
        </div>

        <article className="pharmacy-mode-workspace__detail" aria-live="polite">
          <div className="pharmacy-explorer__detail-kicker">
            <span style={{ "--system-accent": system.accent }} />
            {system.label} · {mode.label}
          </div>
          <h3>{content.title}</h3>
          <p>{content.summary}</p>
          <div className="pharmacy-mode-workspace__related">
            <span>Connected concepts</span>
            <div>{content.links.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </article>
      </div>
    </section>
  );
}
