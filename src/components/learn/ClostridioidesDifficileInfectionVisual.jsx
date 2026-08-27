export const clostridioidesDifficileInfectionVisualTypes = [
  "pathogenesis-microbiome", "diagnostic-stewardship", "severity-complications", "initial-nonfulminant", "fulminant-disease", "first-recurrence", "multiple-recurrences", "infection-prevention", "special-populations", "monitoring-stewardship",
].map((type) => `cdi-${type}`);

const labels = {
  "pathogenesis-microbiome": ["From exposure to disease", "Spores", "Disruption", "Toxins", "Colitis"],
  "diagnostic-stewardship": ["Test the right patient", "Symptoms", "Specimen", "Algorithm", "Interpret"],
  "severity-complications": ["Grade and escalate", "Nonsevere", "Severe", "Fulminant", "Surgery"],
  "initial-nonfulminant": ["Treat the first episode", "Stop drivers", "Fidaxomicin", "Vancomycin", "Follow"],
  "fulminant-disease": ["Stabilize fulminant CDI", "Resuscitate", "Enteral drug", "IV support", "Operate"],
  "first-recurrence": ["Break the first recurrence", "Confirm", "Fidaxomicin", "Taper option", "Risk plan"],
  "multiple-recurrences": ["Restore colonization resistance", "Antibiotic", "Microbiota", "Eligibility", "Prevent"],
  "infection-prevention": ["Interrupt transmission", "Isolate", "Gloves and gown", "Sporicide", "Steward"],
  "special-populations": ["Individualize the risk", "Pregnancy", "Children", "IBD", "Immunity"],
  "monitoring-stewardship": ["Own the full course", "Response", "Toxicity", "Recurrence", "Handoff"],
};

export default function ClostridioidesDifficileInfectionVisual({ type }) {
  const data = labels[type.replace("cdi-", "")];
  if (!data) return null;
  return <figure className="chol-visual clostridioides-difficile-visual" aria-label={data[0]}>
    <figcaption><span>Clinical pathway</span><strong>{data[0]}</strong></figcaption>
    <div className="chol-visual__grid">{data.slice(1).map((label, index) => <div key={label}>
      <span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong>
      <em>{["Define the state", "Choose the intervention", "Check the boundary", "Own the next decision"][index]}</em>
      <p>Connect this step to symptoms, exposure, recurrence risk, organ function, and the next reassessment.</p>
    </div>)}</div>
  </figure>;
}
