const cards = {
  "acid-buffer": {
    title: "One ratio, two organs",
    content: <div className="acid-visual__buffer">
      <div><span>Lungs</span><strong>CO₂</strong><small>Ventilation changes the acid component within minutes.</small></div>
      <div className="acid-visual__equation"><strong>pH ∝ HCO₃⁻ / PaCO₂</strong><small>The ratio matters more than either value alone.</small></div>
      <div><span>Kidneys</span><strong>HCO₃⁻</strong><small>Reabsorption and net acid excretion change the base component over hours to days.</small></div>
    </div>,
  },
  "acid-sequence": {
    title: "Interpret every gas in the same order",
    content: <div className="acid-visual__sequence">{[
      ["01", "Clinical context"], ["02", "pH direction"], ["03", "Primary process"], ["04", "Expected compensation"], ["05", "Anion gap and mixed states"], ["06", "Cause and treatment"],
    ].map(([n, text]) => <div key={n}><span>{n}</span><strong>{text}</strong></div>)}</div>,
  },
  "acid-matrix": {
    title: "The four primary processes",
    content: <div className="acid-visual__matrix">
      <div><span>Metabolic acidosis</span><strong>HCO₃⁻ ↓</strong><small>Expected PaCO₂ ↓</small></div>
      <div><span>Metabolic alkalosis</span><strong>HCO₃⁻ ↑</strong><small>Expected PaCO₂ ↑</small></div>
      <div><span>Respiratory acidosis</span><strong>PaCO₂ ↑</strong><small>Expected HCO₃⁻ ↑</small></div>
      <div><span>Respiratory alkalosis</span><strong>PaCO₂ ↓</strong><small>Expected HCO₃⁻ ↓</small></div>
    </div>,
  },
  "acid-gap": {
    title: "Account for what is not measured",
    content: <div className="acid-visual__gap">
      <div><span>Measured cation</span><strong>Na⁺</strong></div><i aria-hidden="true">−</i><div><span>Measured anions</span><strong>Cl⁻ + HCO₃⁻</strong></div><i aria-hidden="true">=</i><div><span>Unmeasured balance</span><strong>Anion gap</strong></div>
    </div>,
  },
  "acid-treatment": {
    title: "Treat the mechanism, not the pH alone",
    content: <div className="acid-visual__treatment">
      {["Stabilize immediate threats", "Reverse the cause", "Restore ventilation or perfusion", "Replace what was lost", "Use alkali only for a defined indication", "Measure the response and complications"].map((text, index) => <div key={text}><span>{String(index + 1).padStart(2, "0")}</span><strong>{text}</strong></div>)}
    </div>,
  },
  "acid-integrated": {
    title: "Protect ventilation while treating the cause",
    content: <div className="acid-visual__sequence">{[
      ["01", "Identify the ventilatory problem"], ["02", "Stabilize oxygenation and airway"], ["03", "Compare measured and expected compensation"], ["04", "Reverse the driver"], ["05", "Preserve compensatory minute ventilation"], ["06", "Recheck the complete physiology"],
    ].map(([n, text]) => <div key={n}><span>{n}</span><strong>{text}</strong></div>)}</div>,
  },
};

export default function AcidBaseVisual({ type }) {
  const card = cards[type];
  if (!card) return null;
  return <figure className={`acid-visual acid-visual--${type}`} aria-labelledby={`${type}-title`}>
    <figcaption><span>Reasoning map</span><strong id={`${type}-title`}>{card.title}</strong></figcaption>
    {card.content}
  </figure>;
}
