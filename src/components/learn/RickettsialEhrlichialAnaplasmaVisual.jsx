export const rickettsialEhrlichialAnaplasmaVisualTypes = ["syndrome-ecology", "rmsf", "ehrlichiosis-anaplasmosis", "severity-triage", "diagnosis-timing", "empiric-doxycycline", "duration-response", "special-populations", "coinfection-differential", "prevention-public-health"].map((type) => `rickettsial-${type}`);

const diagrams = {
  "syndrome-ecology": ["Build the exposure signal", "Exposure", "Illness day", "Host", "Pattern"],
  rmsf: ["Interrupt vascular injury", "Endothelium", "Leak", "Ischemia", "Treat"],
  "ehrlichiosis-anaplasmosis": ["Read the leukocyte pattern", "Vector", "Cell", "Laboratory", "Coinfection"],
  "severity-triage": ["Triage the physiology", "Perfusion", "Lungs", "Brain", "Delivery"],
  "diagnosis-timing": ["Use the diagnostic clock", "Acute", "PCR", "Treat", "Convalescent"],
  "empiric-doxycycline": ["Protect the first dose", "Weigh", "Calculate", "Deliver", "Absorb"],
  "duration-response": ["Let recovery set duration", "Defervesce", "Improve", "Complete", "Audit"],
  "special-populations": ["Compare disease and exposure risk", "Child", "Pregnancy", "Allergy", "Alternative"],
  "coinfection-differential": ["Keep the case open", "Signal", "Compare", "Cover", "Reassess"],
  "prevention-public-health": ["Close exposure and surveillance", "Prevent", "Remove", "Watch", "Report"]
};
const notes = ["Define the state", "Select the evidence", "Deliver the intervention", "Secure the next decision"];

export default function RickettsialEhrlichialAnaplasmaVisual({ type }) {
  const data = diagrams[type.replace("rickettsial-", "")];
  if (!data) return null;
  return <figure className="chol-visual rickettsial-visual" aria-label={data[0]}><figcaption><span>Clinical pathway</span><strong>{data[0]}</strong></figcaption><div className="chol-visual__grid">{data.slice(1).map((label, index) => <div key={label}><span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong><em>{notes[index]}</em><p>Connect exposure, intracellular biology, diagnostic timing, treatment, and recovery.</p></div>)}</div></figure>;
}
