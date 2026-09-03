const diagrams = {
  "ddi-framework": ["Interaction model", "Move from mechanism to a patient-specific decision", "#b98a63", [["Object", "What changes?", "Exposure or response"], ["Precipitant", "What causes it?", "Drug, food, disease, or behavior"], ["Consequence", "Why does it matter?", "Toxicity or loss of benefit"], ["Plan", "How is risk controlled?", "Action, timing, threshold, owner"]]],
  "ddi-pharmacodynamic": ["Response stack", "Several effects can converge without changing concentration", "#a66d70", [["Brain", "Sedation and ventilation", "Depressant burden"], ["Blood", "Bleeding and thrombosis", "Hemostasis balance"], ["Heart", "QT and bradycardia", "Electrical reserve"], ["Kidney", "Potassium and perfusion", "Laboratory surveillance"]]],
  "ddi-absorption": ["Before systemic entry", "Administration determines how much of the dose arrives", "#b59a62", [["Bind", "Chelation or adsorption", "Separate when supported"], ["Dissolve", "pH and formulation", "Verify exact product"], ["Feed", "Meal and enteral nutrition", "Use label conditions"], ["Deliver", "Tube, crush, or route", "Protect dosage-form design"]]],
  "ddi-enzymes": ["Metabolic pathways", "Active species determines the direction of an enzyme interaction", "#8b739d", [["Substrate", "Object drug", "Clearance or activation"], ["Inhibit", "Pathway activity falls", "Often rapid onset"], ["Induce", "Pathway expression rises", "Delayed onset and offset"], ["Verify", "Human evidence and label", "Magnitude guides action"]]],
  "ddi-transport": ["Transport and distribution", "Location and direction determine the exposure effect", "#648c87", [["Intestine", "Efflux and uptake", "Absorption"], ["Liver", "Uptake and export", "Clearance"], ["Kidney", "Secretion and reabsorption", "Elimination"], ["Plasma", "Binding and free drug", "Interpret with clearance"]]],
  "ddi-elimination": ["Elimination system", "Separate reduced clearance from organ injury", "#66859b", [["Filter", "Glomerular filtration", "Current renal state"], ["Secrete", "Active transport", "Competition or inhibition"], ["Reabsorb", "Ionization and urine pH", "Selected toxicology use"], ["Measure", "Concentration and response", "Interpretable timing"]]],
  "ddi-exposures": ["Everyday exposures", "Diet, products, alcohol, and smoke belong in reconciliation", "#9d8063", [["Food", "Meal and nutrient pattern", "Drug-specific instructions"], ["Supplement", "Exact ingredients and dose", "Evidence and quality"], ["Alcohol", "Acute and chronic context", "Sedation and organ risk"], ["Smoke", "Combustion-driven induction", "Reassess after change"]]],
  "ddi-disease": ["Patient reserve", "Disease changes both exposure and tolerance", "#9b7262", [["Organ", "Kidney and liver function", "Clearance"], ["System", "Heart, lung, brain", "Response"], ["Reserve", "Frailty and prior harm", "Consequence"], ["Trajectory", "Stable or changing", "Repeat assessment"]]],
  "ddi-evidence": ["Evidence ladder", "A warning becomes useful when its basis and limits are visible", "#777e9d", [["Label", "Product-specific operation", "Restrictions and dosing"], ["Human data", "Magnitude and timing", "Population and route"], ["Mechanism", "Biologic prediction", "Direction and uncertainty"], ["Tool", "Database triage", "Never the final decision"]]],
  "ddi-management": ["Closed-loop management", "Every interaction plan ends with a measurable handoff", "#a88655", [["Choose", "Avoid, substitute, or adapt", "Preserve treatment goals"], ["Specify", "Dose, timing, endpoint", "Make the plan executable"], ["Own", "Reviewer and threshold", "Act on results"], ["Reconcile", "Start, stop, and transition", "Manage the offset"]]],
};

export const clinicalDrugInteractionsVisualTypes = Object.keys(diagrams);

export default function ClinicalDrugInteractionsVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  const [eyebrow, title, accent, columns] = diagram;
  return <figure className="chol-visual clinical-ddi-visual" style={{ "--chol-accent": accent }} aria-label={title}>
    <figcaption><span>{eyebrow}</span><strong>{title}</strong></figcaption>
    <div className="chol-visual__grid">{columns.map(([name, mechanism, decision], index) => <div key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><em>{mechanism}</em><p>{decision}</p></div>)}</div>
  </figure>;
}
