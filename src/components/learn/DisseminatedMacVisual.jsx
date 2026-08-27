export const disseminatedMacVisualTypes = [
  "biology-risk", "presentation-diagnosis", "primary-prophylaxis", "macrolide-ethambutol", "initial-treatment", "art-interactions", "response-duration", "iris", "special-populations", "integrated-case",
].map((type) => `disseminated-mac-${type}`);

const diagrams = {
  "biology-risk": { eyebrow: "Host and pathogen", title: "Immune loss permits dissemination", nodes: ["Environmental MAC", "Mucosal entry", "CD4 below 50", "Multiorgan spread"], notes: ["Food, water, soil", "Airway or GI tract", "Often with viremia", "Blood and tissue"] },
  "presentation-diagnosis": { eyebrow: "Diagnostic architecture", title: "Move from signal to sterile-site proof", nodes: ["Systemic syndrome", "Anemia and alkaline phosphatase", "Blood or sterile tissue culture", "Species and susceptibility"], notes: ["Fever and weight loss", "Supportive pattern", "Confirm disease", "Protect the macrolide"] },
  "primary-prophylaxis": { eyebrow: "Prevention gate", title: "CD4 is necessary but not sufficient", nodes: ["CD4 below 50", "No effective ART", "Exclude active MAC", "Select prophylaxis"], notes: ["Define immune risk", "Absent or viremic", "Avoid monotherapy", "Macrolide preferred"] },
  "macrolide-ethambutol": { eyebrow: "Core pharmacology", title: "Two roles protect one regimen", nodes: ["Macrolide activity", "Ethambutol partner", "Interaction review", "Visual monitoring"], notes: ["Clarithro or azithro", "Reduces relapse", "Prefer cleaner fit", "Acuity and color"] },
  "initial-treatment": { eyebrow: "Disease burden", title: "Intensify only when the evidence demands it", nodes: ["Two active drugs", "Assess severity", "Add rifabutin", "Reserve salvage agents"], notes: ["Minimum backbone", "Burden and resistance", "Third drug", "Expert directed"] },
  "art-interactions": { eyebrow: "Dual treatment", title: "Restore immunity without losing exposure", nodes: ["Start ART now", "Map CYP pathways", "Adjust the regimen", "Verify suppression"], notes: ["Prefer concurrent start", "Rifabutin and clarithro", "Avoid incompatible pairs", "Close the loop"] },
  "response-duration": { eyebrow: "Longitudinal control", title: "Symptoms, cultures, and immunity set the endpoint", nodes: ["Response by 2 to 4 weeks", "Failure at 4 to 8 weeks", "Treat at least 12 months", "CD4 above 100 for 6 months"], notes: ["Track the signal", "Repeat culture", "Not calendar alone", "Sustained recovery"] },
  "iris": { eyebrow: "Immune recovery", title: "Separate inflammation from microbiologic failure", nodes: ["Begin ART", "Unmask or worsen", "Recheck cultures", "Control inflammation"], notes: ["Rapid viral decline", "Two IRIS patterns", "Exclude resistance", "NSAID or steroid"] },
  "special-populations": { eyebrow: "Pregnancy", title: "Use current evidence, not letter categories", nodes: ["Immediate ART", "Azithromycin preferred", "Add ethambutol", "Escalate for severity"], notes: ["Primary prevention", "When needed", "Treatment backbone", "Rifabutin if needed"] },
  "integrated-case": { eyebrow: "Closed-loop practice", title: "Every result needs an owner", nodes: ["Recognize", "Confirm", "Treat and suppress", "Monitor to recovery"], notes: ["Syndrome and risk", "Culture and resistance", "MAC plus ART", "Toxicity and duration"] },
};

export default function DisseminatedMacVisual({ type }) {
  const data = diagrams[type.replace("disseminated-mac-", "")];
  if (!data) return null;
  return <figure className="chol-visual disseminated-mac-visual" aria-label={data.title}>
    <figcaption><span>{data.eyebrow}</span><strong>{data.title}</strong></figcaption>
    <div className="chol-visual__grid">{data.nodes.map((label, index) => <div key={`${label}-${index}`}>
      <span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong><em>{data.notes[index]}</em>
      <p>{index < data.nodes.length - 1 ? "Carry this evidence forward." : "Own the next clinical action."}</p>
    </div>)}</div>
  </figure>;
}
