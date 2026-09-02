const diagrams = {
  "adr-receptor-map": { eyebrow: "Receptor signaling", title: "Distinct receptors, shared physiologic systems.", accent: "#d1a16d", columns: [["Alpha 1", "Gq to calcium", "Smooth-muscle contraction"], ["Alpha 2", "Gi lowers cAMP", "Release and central tone fall"], ["Beta", "Gs raises cAMP", "Cardiac, smooth-muscle, and metabolic effects"], ["D1-like", "Gs raises cAMP", "Selected vascular relaxation"]] },
  "adr-transmitter-actions": { eyebrow: "Agonist spectrum", title: "Direct, indirect, and mixed routes to sympathetic effect.", accent: "#c98779", columns: [["Epinephrine", "Direct alpha + beta", "Dose and route reshape response"], ["Dopamine", "Dopamine + adrenergic", "No fixed renal-protection zone"], ["Ephedrine", "Direct + NE release", "Repeated doses can lose effect"], ["Indirect", "Release or reuptake", "Requires transmitter handling"]] },
  "adr-vasopressors": { eyebrow: "Hemodynamic reasoning", title: "Direct action meets reflex compensation.", accent: "#7ea7c0", columns: [["Pressor", "Resistance rises", "Pressure and afterload increase"], ["Baroreceptor", "Stretch signal rises", "Central sympathetic drive falls"], ["Heart", "Vagal influence rises", "Reflex slowing may appear"], ["Verify", "Perfusion + output", "Do not read pressure alone"]] },
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
