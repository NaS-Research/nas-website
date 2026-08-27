export const nonNucleosideReverseTranscriptaseInhibitorVisualTypes = [
  "nnrti-mechanism", "nnrti-resistance", "doravirine", "rilpivirine-oral", "rilpivirine-long-acting", "efavirenz", "etravirine", "nevirapine-legacy", "nnrti-safety-selection",
].map((type) => `nnrti-${type}`);

const diagrams = {
  "nnrti-mechanism": { eyebrow: "Allosteric pharmacology", title: "Distort the polymerase", nodes: ["Enter", "Bind pocket", "Shift shape", "Stop DNA"], notes: ["No phosphorylation", "Near active site", "Noncompetitive", "Before integration"] },
  "nnrti-resistance": { eyebrow: "Pocket resistance", title: "Read the complete genotype", nodes: ["History", "Mutation", "Cross-resistance", "Active regimen"], notes: ["Every exposure", "Pocket geometry", "Agent specific", "Protect all drugs"] },
  doravirine: { eyebrow: "Current oral option", title: "Fit doravirine to the regimen", nodes: ["Genotype", "CYP3A", "Daily dose", "Monitor"], notes: ["Verify activity", "Avoid strong inducers", "With or without food", "RNA and safety"] },
  "rilpivirine-oral": { eyebrow: "Absorption pathway", title: "Protect oral exposure", nodes: ["Meal", "Acid", "Thresholds", "Adherence"], notes: ["Real food", "No PPI", "RNA and CD4", "Daily continuity"] },
  "rilpivirine-long-acting": { eyebrow: "Depot pharmacology", title: "Plan every injection and exit", nodes: ["Suppress", "Inject", "Schedule", "Bridge"], notes: ["Verify eligibility", "Two active drugs", "Protect visits", "Cover the tail"] },
  efavirenz: { eyebrow: "CNS exposure", title: "Lower avoidable neurotoxicity", nodes: ["Empty stomach", "Bedtime", "Screen", "Reassess"], notes: ["Limit exposure", "Reduce disruption", "Mood and QT", "Function and safety"] },
  etravirine: { eyebrow: "Experienced-care option", title: "Join genotype to interaction", nodes: ["Mutations", "Meal", "Twice daily", "CYP map"], notes: ["Weighted pattern", "After food", "Adherence", "Both directions"] },
  "nevirapine-legacy": { eyebrow: "Historical safety", title: "Recognize early severe injury", nodes: ["Lead-in", "Rash", "Liver", "Current options"], notes: ["Legacy protocol", "Mucosa and systemic", "Early vigilance", "Prefer safer agents"] },
  "nnrti-safety-selection": { eyebrow: "Clinical synthesis", title: "Build one accountable plan", nodes: ["Virus", "Regimen", "Person", "Follow-up"], notes: ["Resistance", "Complete activity", "Food, organs, access", "RNA and toxicity"] },
};

export default function NonNucleosideReverseTranscriptaseInhibitorVisual({ type }) {
  const data = diagrams[type.replace("nnrti-", "")];
  if (!data) return null;
  return <figure className="chol-visual nnrti-visual" aria-label={data.title}>
    <figcaption><span>{data.eyebrow}</span><strong>{data.title}</strong></figcaption>
    <div className="chol-visual__grid">{data.nodes.map((label, index) => <div key={`${label}-${index}`}>
      <span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong><em>{data.notes[index]}</em>
      <p>{index < data.nodes.length - 1 ? "Carry the verified input forward." : "Own the next clinical action."}</p>
    </div>)}</div>
  </figure>;
}
