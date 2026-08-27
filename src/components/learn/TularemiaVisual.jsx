export const tularemiaVisualTypes = ["ecology-transmission", "clinical-forms", "severity-triage", "diagnosis-laboratory-safety", "first-line-treatment", "dosing-administration-monitoring", "meningitis-complications", "special-populations", "prophylaxis-bioterrorism", "response-followup-public-health"].map((type) => `tularemia-${type}`);

const diagrams = {
  "ecology-transmission": ["Trace exposure into anatomy", "Source", "Portal", "Incubation", "Form"],
  "clinical-forms": ["Read the disease from its portal", "Skin", "Eye or throat", "Lung", "Systemic"],
  "severity-triage": ["Let physiology define urgency", "Perfusion", "Oxygen", "Neurologic", "Source"],
  "diagnosis-laboratory-safety": ["Protect people while finding proof", "Alert", "Specimen", "Direct test", "Paired serum"],
  "first-line-treatment": ["Match active exposure to threat", "Ciprofloxacin", "Levofloxacin", "Gentamicin", "Doxycycline"],
  "dosing-administration-monitoring": ["Preserve exposure from order to response", "Deliver", "Absorb", "Monitor", "Reassess"],
  "meningitis-complications": ["Treat the nervous system as a distinct compartment", "Two classes", "CSF", "Ten days", "Twenty one days"],
  "special-populations": ["Individualize without undertreating", "Age", "Weight", "Organ function", "Delivery"],
  "prophylaxis-bioterrorism": ["Name the state before selecting exposure", "Natural", "Occupational", "Intentional", "Illness"],
  "response-followup-public-health": ["Close every clinical loop", "Patient", "Laboratory", "Public health", "Checkpoint"]
};

const notes = ["Define the starting state", "Locate the decision boundary", "Match the intervention", "Secure the next checkpoint"];

export default function TularemiaVisual({ type }) {
  const data = diagrams[type.replace("tularemia-", "")];
  if (!data) return null;
  return <figure className="chol-visual tularemia-visual" aria-label={data[0]}><figcaption><span>Clinical system</span><strong>{data[0]}</strong></figcaption><div className="chol-visual__grid">{data.slice(1).map((label, index) => <div key={label}><span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong><em>{notes[index]}</em><p>Connect exposure, anatomy, evidence, active therapy, and ownership without losing the patient context.</p></div>)}</div></figure>;
}
