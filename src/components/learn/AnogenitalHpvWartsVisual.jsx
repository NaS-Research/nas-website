export const anogenitalHpvWartsVisualTypes = ["biology-natural-history", "diagnosis-differential", "shared-selection", "imiquimod", "patient-applied-options", "provider-therapy", "special-sites", "special-populations", "vaccination-prevention", "counseling-followup"].map((type) => `anogenital-hpv-${type}`);

const diagrams = {
  "biology-natural-history": ["Separate the HPV outcomes", "Exposure", "Clearance", "Persistence", "Condition"],
  "diagnosis-differential": ["Decide when tissue matters", "Inspect", "Classify", "Biopsy", "Confirm"],
  "shared-selection": ["Choose around anatomy and goals", "Map", "Discuss", "Select", "Reassess"],
  imiquimod: ["Control local immune activation", "Strength", "Schedule", "Wash", "Respond"],
  "patient-applied-options": ["Keep home therapy in bounds", "Identify", "Measure", "Cycle", "Protect"],
  "provider-therapy": ["Remove lesions with tissue safety", "Prepare", "Destroy", "Control plume", "Heal"],
  "special-sites": ["Let anatomy set the pathway", "External", "Canal", "Cervix", "Specialist"],
  "special-populations": ["Protect the high risk host", "Immune status", "Atypia", "Pregnancy", "Delivery"],
  "vaccination-prevention": ["Build the valid vaccine series", "Start age", "Immune status", "Intervals", "Complete"],
  "counseling-followup": ["Close care without blame", "Explain", "Prevent", "Screen", "Return"]
};
const notes = ["Define the state", "Select the evidence", "Deliver the intervention", "Secure the next decision"];

export default function AnogenitalHpvWartsVisual({ type }) {
  const data = diagrams[type.replace("anogenital-hpv-", "")];
  if (!data) return null;
  return <figure className="chol-visual anogenital-hpv-visual" aria-label={data[0]}><figcaption><span>Clinical pathway</span><strong>{data[0]}</strong></figcaption><div className="chol-visual__grid">{data.slice(1).map((label, index) => <div key={label}><span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong><em>{notes[index]}</em><p>Connect epithelial biology, lesion anatomy, treatment fit, prevention, and follow-up.</p></div>)}</div></figure>;
}
