export const integraseStrandTransferInhibitorVisualTypes = [
  "integration-mechanism", "barrier-resistance", "bictegravir", "dolutegravir", "dolutegravir-lamivudine", "raltegravir", "elvitegravir", "cabotegravir-long-acting", "cation-interactions", "safety-pregnancy", "integrated-selection",
].map((type) => `insti-${type}`);

const diagrams = {
  "integration-mechanism": { eyebrow: "Catalytic complex", title: "Trap viral DNA before host insertion", nodes: ["Processed viral DNA", "Integrase and Mg", "INSTI binding", "No strand transfer"], notes: ["Ready in nucleus", "Active site", "Metal coordination", "No new provirus"] },
  "barrier-resistance": { eyebrow: "Resistance architecture", title: "Read the full integrase history", nodes: ["Prior INSTI", "Genotype", "Barrier", "Active regimen"], notes: ["Including CAB-LA", "Mutation pathway", "BIC and DTG", "Protect the anchor"] },
  bictegravir: { eyebrow: "Complete regimen", title: "Read all of Biktarvy", nodes: ["BIC", "FTC", "TAF", "One complete plan"], notes: ["High-barrier INSTI", "HIV and HBV", "HIV and HBV", "Once daily"] },
  dolutegravir: { eyebrow: "Exposure and resistance", title: "Make frequency evidence-based", nodes: ["Genotype", "Inducers", "Once or twice daily", "Response"], notes: ["INSTI pathway", "UGT1A1 and CYP3A", "Exact context", "HIV RNA"] },
  "dolutegravir-lamivudine": { eyebrow: "Two-drug boundary", title: "Require the missing information", nodes: ["RNA at most 500,000", "3TC susceptible", "No untreated HBV", "CAB history clear"], notes: ["Initial limit", "Genotype available", "Full HBV plan", "INSTI genotype if exposed"] },
  raltegravir: { eyebrow: "Formulation precision", title: "Do not interchange the schedules", nodes: ["Isentress", "Isentress HD", "Rifampin", "Muscle safety"], notes: ["400 mg twice daily", "1,200 mg daily", "HD not used", "CPK and symptoms"] },
  elvitegravir: { eyebrow: "Boosted legacy option", title: "Account for cobicistat and food", nodes: ["EVG", "COBI", "FTC plus TAF or TDF", "Current position"], notes: ["INSTI", "Interaction driver", "Complete regimen", "Approved, nonpreferred"] },
  "cabotegravir-long-acting": { eyebrow: "Long-acting care", title: "Build the system around every injection", nodes: ["Eligibility", "Initiation", "Target dates", "Tail protection"], notes: ["Suppressed and susceptible", "Lead-in optional", "Monthly or every 2 months", "Bridge or replace"] },
  "cation-interactions": { eyebrow: "Absorption chemistry", title: "Prevent a chelation failure", nodes: ["Find minerals", "Name the INSTI", "Use food and timing", "Verify exposure"], notes: ["Antacid or supplement", "Rules differ", "Repeatable schedule", "HIV RNA"] },
  "safety-pregnancy": { eyebrow: "Longitudinal interpretation", title: "Classify the signal before acting", nodes: ["Creatinine", "Weight and mood", "Muscle and liver", "Pregnancy"], notes: ["Secretion or injury", "Trend and context", "Agent specific", "BIC and DTG preferred"] },
  "integrated-selection": { eyebrow: "Clinical synthesis", title: "Align virus, regimen, person, and delivery", nodes: ["Resistance", "Complete ART", "Feasibility", "Follow-up"], notes: ["Including integrase", "HBV and companions", "Cations and access", "RNA and ownership"] },
};

export default function IntegraseStrandTransferInhibitorVisual({ type }) {
  const data = diagrams[type.replace("insti-", "")];
  if (!data) return null;
  return <figure className="chol-visual insti-visual" aria-label={data.title}>
    <figcaption><span>{data.eyebrow}</span><strong>{data.title}</strong></figcaption>
    <div className="chol-visual__grid">{data.nodes.map((label, index) => <div key={`${label}-${index}`}>
      <span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong><em>{data.notes[index]}</em>
      <p>{index < data.nodes.length - 1 ? "Carry this evidence forward." : "Own the next clinical action."}</p>
    </div>)}</div>
  </figure>;
}
