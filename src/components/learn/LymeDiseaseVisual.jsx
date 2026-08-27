export const lymeDiseaseVisualTypes = ["ecology-prevention", "clinical-stages-em", "diagnosis-serology", "localized-treatment", "neurologic-lyme", "lyme-carditis", "lyme-arthritis", "special-populations", "coinfection-followup", "integrated-cases"].map((type) => `lyme-${type}`);

const diagrams = {
  "ecology-prevention": ["Measure the exposure before prescribing", "Vector", "Attachment", "Window", "Decision"],
  "clinical-stages-em": ["Read stage from anatomy", "Skin", "Dissemination", "Organ", "Stage"],
  "diagnosis-serology": ["Place the test on the antibody clock", "Probability", "Window", "Tier one", "Tier two"],
  "localized-treatment": ["Protect a complete oral course", "Confirm", "Select", "Calculate", "Deliver"],
  "neurologic-lyme": ["Localize before choosing route", "Cranial", "Radicular", "Meningeal", "Parenchymal"],
  "lyme-carditis": ["Follow conduction risk", "Symptoms", "PR", "Monitor", "Recover"],
  "lyme-arthritis": ["Separate infection from inflammation", "Synovitis", "Oral", "Response", "Rheumatology"],
  "special-populations": ["Individualize without undertreating", "Age", "Weight", "Exposure", "Regimen"],
  "coinfection-followup": ["Reopen the case with new evidence", "Fever", "Cytopenia", "Hemolysis", "Function"],
  "integrated-cases": ["Choose from stage and threat", "Manifestation", "Severity", "Evidence", "Checkpoint"]
};

const notes = ["Define the clinical state", "Locate the decision boundary", "Match the intervention", "Secure the next checkpoint"];

export default function LymeDiseaseVisual({ type }) {
  const data = diagrams[type.replace("lyme-", "")];
  if (!data) return null;
  return <figure className="chol-visual lyme-visual" aria-label={data[0]}><figcaption><span>Clinical pathway</span><strong>{data[0]}</strong></figcaption><div className="chol-visual__grid">{data.slice(1).map((label, index) => <div key={label}><span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong><em>{notes[index]}</em><p>Connect exposure, stage, testing, treatment, and follow-up without losing the patient context.</p></div>)}</div></figure>;
}
