export const toxoplasmaEncephalitisVisualTypes = ["biology-risk", "presentation-imaging", "diagnostic-strategy", "primary-prophylaxis", "acute-treatment", "alternatives-safety", "response-failure", "art-iris", "maintenance", "integrated-case"].map((type) => `toxoplasma-encephalitis-${type}`);

const diagrams = {
  "biology-risk": ["Latent tissue cyst", "CD4 decline", "Brain reactivation", "Focal inflammation"],
  "presentation-imaging": ["Subacute headache", "Focal deficit or seizure", "Contrast MRI", "Lesion and edema map"],
  "diagnostic-strategy": ["IgG and immune context", "Imaging pattern", "CSF when safe", "Response or tissue diagnosis"],
  "primary-prophylaxis": ["IgG positive", "CD4 below 100", "TMP-SMX DS daily", "Stop after recovery"],
  "acute-treatment": ["Full-dose induction", "Leucovorin rescue", "Measure response", "Treat at least 6 weeks"],
  "alternatives-safety": ["Define intolerance", "Preserve TE activity", "Preserve PCP coverage", "Monitor exposure"],
  "response-failure": ["Baseline examination", "Days 10 to 14", "Repeat imaging", "Biopsy if nonresponse"],
  "art-iris": ["Establish TE therapy", "Start ART in 2 to 3 weeks", "Watch inflammation", "Keep diagnostic discipline"],
  "maintenance": ["Complete induction", "Suppress latent infection", "CD4 above 200 for 6 months", "Restart below 200"],
  "integrated-case": ["Recognize", "Treat", "Restore immunity", "Prevent relapse"],
};

export default function ToxoplasmaEncephalitisVisual({ type }) {
  const key = type.replace("toxoplasma-encephalitis-", "");
  const nodes = diagrams[key];
  if (!nodes) return null;
  return <figure className="chol-visual toxoplasma-encephalitis-visual" aria-label="Toxoplasma encephalitis clinical pathway">
    <figcaption><span>CNS evidence pathway</span><strong>{nodes[0]} to {nodes[3]}</strong></figcaption>
    <div className="chol-visual__grid">{nodes.map((label, index) => <div key={label}><span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong><em>{index === 0 ? "Define the starting evidence" : index === 3 ? "Own the next decision" : "Carry the evidence forward"}</em><p>{index < 3 ? "Do not lose diagnostic context." : "Document the clinical action."}</p></div>)}</div>
  </figure>;
}
