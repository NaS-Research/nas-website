const diagrams = {
  "adr-receptor-map": { eyebrow: "Receptor signaling", title: "Five receptor families, distinct cellular programs.", accent: "#d1a16d", columns: [["Alpha 1", "Gq to calcium", "Smooth-muscle contraction"], ["Alpha 2", "Gi lowers cAMP", "Release and central tone fall"], ["Beta 1", "Gs raises cAMP", "Rate, force, renin"], ["Beta 2 + 3", "Gs dominant", "Relaxation and metabolic effects"]] },
  "adr-transmitter-actions": { eyebrow: "Agonist spectrum", title: "Receptor profile changes with drug and concentration.", accent: "#c98779", columns: [["Epinephrine", "Alpha + beta", "Dose and route reshape response"], ["Norepinephrine", "Alpha + beta 1", "Vascular tone with reflex effects"], ["Dopamine", "Dose-dependent profile", "Unpredictable renal benefit"], ["Indirect", "Release or reuptake", "Requires neuronal stores"]] },
  "adr-vasopressors": { eyebrow: "Hemodynamic reasoning", title: "Pressure is flow times resistance.", accent: "#7ea7c0", columns: [["MAP", "CO x SVR", "Target depends on perfusion"], ["Alpha 1", "Resistance rises", "Afterload and ischemia risk"], ["Beta 1", "Flow may rise", "Arrhythmia and oxygen demand"], ["Monitor", "Perfusion + rhythm", "Line, tissue, lactate, urine"]] },
  "adr-beta2": { eyebrow: "Airway beta 2", title: "Local bronchodilation with systemic spillover.", accent: "#82aa91", columns: [["Deliver", "Inhaled product", "Technique controls dose"], ["Signal", "Gs to cAMP", "Airway smooth muscle relaxes"], ["Spillover", "Heart + muscle + potassium", "Tremor, tachycardia, hypokalemia"], ["Reassess", "Frequent rescue use", "Signals unstable disease"]] },
  "adr-alpha-applications": { eyebrow: "Alpha agonism", title: "Localize the vascular or central target.", accent: "#a592c5", columns: [["Phenylephrine", "Alpha 1", "Vasoconstriction and reflex slowing"], ["Midodrine", "Peripheral alpha 1", "Standing pressure with supine risk"], ["Clonidine", "Central alpha 2", "Sympathetic outflow falls"], ["Dexmedetomidine", "Central alpha 2", "Monitored sedation"]] },
  "adr-safety": { eyebrow: "Safety integration", title: "Receptor effect, reserve, route, and time.", accent: "#cfb16b", columns: [["Heart", "Rate + rhythm + demand", "Ischemia and arrhythmia"], ["Vessels", "Excess constriction", "Digital, mesenteric, or extravasation injury"], ["Metabolic", "Glucose + potassium", "Dose and beta 2 burden"], ["Withdrawal", "Rebound signaling", "Central alpha 2 agents need planning"]] },
};

export default function AdrenergicAgonistsVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  return <figure className="chol-visual" style={{ "--chol-accent": diagram.accent }} aria-label={diagram.title}>
    <figcaption><span>{diagram.eyebrow}</span><strong>{diagram.title}</strong></figcaption>
    <div className="chol-visual__grid">{diagram.columns.map(([name, action, detail], index) => <div key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><em>{action}</em><p>{detail}</p></div>)}</div>
  </figure>;
}
