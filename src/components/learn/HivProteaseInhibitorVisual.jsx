export const hivProteaseInhibitorVisualTypes = [
  "pi-mechanism-structure", "pi-positioning-resistance", "darunavir", "atazanavir", "pi-boosting", "cobicistat-clinical", "pi-interactions", "pi-toxicity", "pi-legacy", "pi-selection-monitoring",
].map((type) => `hiv-pi-${type}`);

const diagrams = {
  "pi-mechanism-structure": { eyebrow: "Maturation pharmacology", title: "Stop cleavage, release an immature virion", nodes: ["Polyprotein", "Protease", "Cleavage blocked", "Noninfectious"], notes: ["Gag and gag-pol", "Catalytic pocket", "Unprocessed proteins", "Failed maturation"] },
  "pi-positioning-resistance": { eyebrow: "Barrier and activity", title: "Build around verified susceptibility", nodes: ["History", "Genotype", "Boosted DRV", "Active partners"], notes: ["Every regimen", "PI and INSTI", "High barrier", "Complete suppression"] },
  darunavir: { eyebrow: "Current PI anchor", title: "Make every darunavir condition explicit", nodes: ["Resistance", "Booster", "Food", "Dose"], notes: ["RAM review", "RTV or COBI", "With food", "Once or twice daily"] },
  atazanavir: { eyebrow: "Absorption and organ effects", title: "Separate exposure from toxicity", nodes: ["Food", "Acid", "Bilirubin", "Kidney and rhythm"], notes: ["Required", "pH dependent", "Indirect rise", "Stones and PR"] },
  "pi-boosting": { eyebrow: "Pharmacokinetic enhancement", title: "Treat the booster as part of the dose", nodes: ["RTV or COBI", "CYP3A", "PI exposure", "Interaction map"], notes: ["Not interchangeable", "Clearance inhibited", "Higher and longer", "Every medicine"] },
  "cobicistat-clinical": { eyebrow: "Enhancer interpretation", title: "Read creatinine and pregnancy correctly", nodes: ["Baseline", "Secretion", "Pregnancy", "Alternative"], notes: ["Renal context", "SCr may rise", "Exposure falls", "Current guidance"] },
  "pi-interactions": { eyebrow: "Interaction engineering", title: "Map both exposure directions", nodes: ["Medication list", "Substrate", "Inhibitor or inducer", "Safe plan"], notes: ["Every route", "Narrow margin", "Magnitude", "Avoid, adjust, monitor"] },
  "pi-toxicity": { eyebrow: "Longitudinal safety", title: "Track organ and metabolic burden", nodes: ["Liver", "Glucose", "Lipids", "Symptoms"], notes: ["Hepatitis risk", "Insulin resistance", "ASCVD context", "GI and rash"] },
  "pi-legacy": { eyebrow: "Source reconciliation", title: "Separate history from current practice", nodes: ["Discontinued", "Uncommon", "Archived toxicity", "Current option"], notes: ["IDV and SQV", "FPV, LPV/r, NFV, TPV", "Resistance and harm", "Boosted DRV"] },
  "pi-selection-monitoring": { eyebrow: "Clinical synthesis", title: "Close the complete PI loop", nodes: ["Virus", "Person", "Regimen", "Follow-up"], notes: ["Resistance", "Organs and pregnancy", "Food and interactions", "RNA and safety"] },
};

export default function HivProteaseInhibitorVisual({ type }) {
  const data = diagrams[type.replace("hiv-pi-", "")];
  if (!data) return null;
  return <figure className="chol-visual hiv-pi-visual" aria-label={data.title}>
    <figcaption><span>{data.eyebrow}</span><strong>{data.title}</strong></figcaption>
    <div className="chol-visual__grid">{data.nodes.map((label, index) => <div key={`${label}-${index}`}>
      <span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong><em>{data.notes[index]}</em>
      <p>{index < data.nodes.length - 1 ? "Carry the verified input forward." : "Own the next clinical action."}</p>
    </div>)}</div>
  </figure>;
}
