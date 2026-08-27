export const hivPreventionPrepPepVisualTypes = [
  "prevention-continuum", "hiv-testing", "oral-prep", "taf-prep", "cabotegravir-prep", "lenacapavir-prep", "oral-safety", "prep-follow-up", "exposure-triage", "nonoccupational-pep", "occupational-pep", "pep-to-prep",
].map((type) => `hiv-prevention-${type}`);

const diagrams = {
  "prevention-continuum": { eyebrow: "Prevention continuum", title: "Match protection to the moment", nodes: ["ART and U equals U", "PrEP before exposure", "PEP after exposure", "Testing and continuity"], notes: ["Sustained suppression", "Chosen modality", "Urgent 28 days", "No gaps"] },
  "hiv-testing": { eyebrow: "Diagnostic gate", title: "Exclude acute HIV before prevention", nodes: ["Exposure and symptoms", "Ag or Ab", "HIV-1 RNA", "Resolve discordance"], notes: ["Define the window", "Laboratory test", "Acute detection", "No blind dosing"] },
  "oral-prep": { eyebrow: "Daily oral PrEP", title: "Fit F/TDF to the person", nodes: ["Broad exposure routes", "eCrCl at least 60", "HBV plan", "Daily exposure"], notes: ["Sex and injection", "Cockcroft-Gault", "Protect the liver", "Tissue timing"] },
  "taf-prep": { eyebrow: "F/TAF boundary", title: "Know where Descovy fits", nodes: ["Sexual prevention", "Not receptive vaginal sex", "eCrCl at least 30", "Lipids and weight"], notes: ["Approved route", "Evidence boundary", "Renal option", "Metabolic tradeoff"] },
  "cabotegravir-prep": { eyebrow: "Long-acting INSTI", title: "Build around every injection", nodes: ["Negative HIV tests", "Month 0 and 1", "Every 2 months", "Protect the tail"], notes: ["Ag or Ab plus RNA", "Initiation", "Target dates", "Alternative PrEP"] },
  "lenacapavir-prep": { eyebrow: "Long-acting capsid inhibitor", title: "Engineer a 26-week cycle", nodes: ["Day 1 load", "Day 2 oral dose", "Every 26 weeks", "Tail and interactions"], notes: ["SC plus oral", "Complete loading", "Plus or minus 2 weeks", "Year-long evidence"] },
  "oral-safety": { eyebrow: "Oral prevention safety", title: "Protect kidney, bone, liver, and continuity", nodes: ["Calculate eCrCl", "Test HBV", "Choose TDF or TAF", "Monitor and counsel"], notes: ["Correct equation", "Plan stopping", "Tradeoffs", "Longitudinal fit"] },
  "prep-follow-up": { eyebrow: "Longitudinal care", title: "Every refill is a clinical decision", nodes: ["Exclude HIV", "Verify delivery", "Screen by exposure", "Renew the plan"], notes: ["Ag or Ab plus RNA", "Pills or injections", "STI and pregnancy", "Switch without gaps"] },
  "exposure-triage": { eyebrow: "Emergency triage", title: "Route, fluid, source, clock", nodes: ["Portal of entry", "Relevant fluid", "Source evidence", "Start before 72 hours"], notes: ["Needle or mucosa", "Blood or infectious fluid", "HIV and suppression", "Ideally within 24"] },
  "nonoccupational-pep": { eyebrow: "2025 nPEP", title: "Start complete treatment now", nodes: ["First dose now", "Three active drugs", "Complete 28 days", "Test at 4 to 6 and 12 weeks"], notes: ["Do not await labs", "BIC or DTG anchor", "Secure supply", "Ag or Ab plus RNA"] },
  "occupational-pep": { eyebrow: "Workplace exposure", title: "Report, assess, protect, follow", nodes: ["Immediate first aid", "Source evaluation", "Preferred PEP", "Modern follow-up"], notes: ["Wash and report", "HIV and suppression", "BIC or DTG", "Focused testing"] },
  "pep-to-prep": { eyebrow: "Prevention handoff", title: "Do not create a new gap", nodes: ["Finish PEP", "Exclude HIV", "Start chosen PrEP", "Own every result"], notes: ["28 days", "Ag or Ab plus RNA", "Immediate transition", "Closed loop"] },
};

export default function HivPreventionPrepPepVisual({ type }) {
  const data = diagrams[type.replace("hiv-prevention-", "")];
  if (!data) return null;
  return <figure className="chol-visual hiv-prevention-visual" aria-label={data.title}>
    <figcaption><span>{data.eyebrow}</span><strong>{data.title}</strong></figcaption>
    <div className="chol-visual__grid">{data.nodes.map((label, index) => <div key={`${label}-${index}`}>
      <span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong><em>{data.notes[index]}</em>
      <p>{index < data.nodes.length - 1 ? "Carry this evidence forward." : "Own the next clinical action."}</p>
    </div>)}</div>
  </figure>;
}
