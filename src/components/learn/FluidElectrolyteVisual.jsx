const visualCopy = {
  compartments: {
    title: "Where the water is",
    note: "The diagram is proportional in concept, not a patient-specific measurement.",
  },
  fluids: {
    title: "Choose by clinical purpose",
    note: "Reassess after every meaningful intervention. The bag is not the treatment endpoint.",
  },
  sodium: {
    title: "Classify before treating",
    note: "Severe neurologic symptoms require urgent monitored care before a complete etiologic workup is finished.",
  },
  potassium: {
    title: "Three different jobs",
    note: "Membrane stabilization, intracellular shifting, and potassium removal are complementary, not interchangeable.",
  },
  monitoring: {
    title: "Prescribe a feedback loop",
    note: "The monitoring interval must match the acuity, intervention, and risk of overshoot.",
  },
};

export default function FluidElectrolyteVisual({ type }) {
  const copy = visualCopy[type];
  if (!copy) return null;

  return (
    <figure className={`fluid-visual fluid-visual--${type}`} aria-labelledby={`fluid-visual-${type}`}>
      <figcaption>
        <span>Concept map</span>
        <strong id={`fluid-visual-${type}`}>{copy.title}</strong>
      </figcaption>

      {type === "compartments" && <div className="fluid-visual__compartments">
        <div className="fluid-visual__body-water"><span>Total body water</span><strong>100%</strong></div>
        <div className="fluid-visual__branch" aria-hidden="true" />
        <div className="fluid-visual__compartment-grid">
          <div><span>Intracellular</span><strong>about ⅔</strong><small>Water inside cells</small></div>
          <div><span>Extracellular</span><strong>about ⅓</strong><small>Interstitial plus intravascular</small></div>
        </div>
      </div>}

      {type === "fluids" && <div className="fluid-visual__steps">
        {[['01', 'Resuscitation', 'Restore perfusion when hypovolemia is present'], ['02', 'Maintenance', 'Meet ordinary water and electrolyte needs'], ['03', 'Replacement', 'Match abnormal ongoing losses'], ['04', 'Redistribution', 'Account for edema, ascites, and third spacing'], ['05', 'Reassessment', 'Measure response and stop or revise']].map(([n, label, text]) => <div key={label}><span>{n}</span><strong>{label}</strong><small>{text}</small></div>)}
      </div>}

      {type === "sodium" && <div className="fluid-visual__pathway">
        <div><span>Step 1</span><strong>Confirm tonicity</strong><small>Hypotonic, isotonic, or hypertonic</small></div>
        <i aria-hidden="true">→</i>
        <div><span>Step 2</span><strong>Assess symptoms</strong><small>Neurologic severity determines urgency</small></div>
        <i aria-hidden="true">→</i>
        <div><span>Step 3</span><strong>Assess volume</strong><small>Hypovolemic, euvolemic, or hypervolemic</small></div>
        <i aria-hidden="true">→</i>
        <div><span>Step 4</span><strong>Treat and measure</strong><small>Cause, correction, urine output, and trend</small></div>
      </div>}

      {type === "potassium" && <div className="fluid-visual__potassium">
        <div><span>Protect</span><strong>Stabilize the myocardium</strong><small>IV calcium when indicated by ECG toxicity</small></div>
        <div><span>Shift</span><strong>Move potassium into cells</strong><small>Insulin with glucose and an inhaled beta agonist</small></div>
        <div><span>Remove</span><strong>Lower total body potassium</strong><small>Kidney, gastrointestinal, or extracorporeal removal</small></div>
      </div>}

      {type === "monitoring" && <div className="fluid-visual__loop">
        {['Assess', 'Prescribe', 'Administer', 'Measure', 'Revise'].map((label, index) => <div key={label}><span>{String(index + 1).padStart(2, '0')}</span><strong>{label}</strong></div>)}
      </div>}

      <p>{copy.note}</p>
    </figure>
  );
}
