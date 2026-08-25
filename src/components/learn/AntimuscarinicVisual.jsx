const diagrams = {
  "antimuscarinic-mechanism": { eyebrow: "Receptor blockade", title: "Less muscarinic signaling, tissue by tissue.", accent: "#d5a475", columns: [["Target", "M1 through M5", "Competitive receptor antagonism"], ["Access", "Charge and polarity", "Peripheral or central exposure"], ["Response", "Parasympathetic tone falls", "Drying, relaxation, faster nodal rate"], ["Risk", "Reserve and burden", "Benefit can become toxicity"]] },
  "antimuscarinic-burden": { eyebrow: "Whole-patient map", title: "One mechanism can burden many organs.", accent: "#ca8a78", columns: [["Brain", "Attention and memory", "Confusion, delirium, falls"], ["Eye", "Mydriasis", "Blur and angle-closure risk"], ["Gut + bladder", "Motility and contraction fall", "Constipation and retention"], ["Skin", "Sweating falls", "Heat intolerance"]] },
  "antimuscarinic-bladder": { eyebrow: "Storage phase", title: "Reduce urgency without trapping urine.", accent: "#80a8c5", columns: [["Assess", "Symptoms + cause", "Exclude retention and obstruction"], ["Select", "Agent + formulation", "CNS access and interactions"], ["Measure", "Urgency + leakage", "Voids, residual when indicated"], ["Reassess", "Benefit versus burden", "Cognition, bowel, mouth, vision"]] },
  "antimuscarinic-airway": { eyebrow: "Local delivery", title: "Block vagal bronchomotor tone in the airway.", accent: "#81ad96", columns: [["Deliver", "Inhaled product", "Technique determines exposure"], ["Effect", "Airway M3 blockade", "Bronchodilation"], ["Protect", "Eyes + urinary tract", "Avoid spray exposure and retention"], ["Maintain", "Device-specific use", "Rescue and maintenance differ"]] },
  "antimuscarinic-applications": { eyebrow: "Clinical matching", title: "Route and access define the use.", accent: "#b59ac8", columns: [["Eye", "Atropine or tropicamide", "Mydriasis and cycloplegia"], ["GI", "Dicyclomine", "Antispasmodic use"], ["CNS", "Benztropine", "Selected movement symptoms"], ["Motion", "Scopolamine patch", "Vestibular signaling"]] },
  "antimuscarinic-safety": { eyebrow: "Safety escalation", title: "Dry, retained, hot, fast, confused.", accent: "#d2b36b", columns: [["Recognize", "Syndrome pattern", "Peripheral plus central signs"], ["Stabilize", "Airway + circulation", "Temperature and agitation"], ["Remove", "Ongoing exposure", "Medication reconciliation"], ["Escalate", "Poison expertise", "Antidote decisions are contextual"]] },
};

export default function AntimuscarinicVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  return <figure className="chol-visual" style={{ "--chol-accent": diagram.accent }} aria-label={diagram.title}>
    <figcaption><span>{diagram.eyebrow}</span><strong>{diagram.title}</strong></figcaption>
    <div className="chol-visual__grid">{diagram.columns.map(([name, action, detail], index) => <div key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><em>{action}</em><p>{detail}</p></div>)}</div>
  </figure>;
}
