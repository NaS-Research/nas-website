export const hivFoundationsCareVisualTypes = [
  "hiv-virology-pathogenesis",
  "hiv-life-cycle-targets",
  "hiv-transmission-prevention",
  "hiv-clinical-course",
  "hiv-diagnostic-algorithm",
  "hiv-linkage-rapid-start",
  "hiv-baseline-evaluation",
  "hiv-resistance-special-tests",
  "hiv-monitoring-response",
  "hiv-art-principles",
  "hiv-initial-regimen-logic",
  "hiv-person-centered-care",
].map((type) => `hiv-foundations-${type}`);

const diagrams = {
  "hiv-virology-pathogenesis": { eyebrow: "Viral architecture", title: "Read structure as a treatment map", nodes: ["Envelope", "RNA genome", "Viral enzymes", "CD4 injury"], notes: ["gp120 and gp41", "Diverse template", "RT, integrase, protease", "Immune loss"] },
  "hiv-life-cycle-targets": { eyebrow: "Replication sequence", title: "Follow the targets in order", nodes: ["Enter", "Copy", "Integrate", "Mature"], notes: ["Attachment and fusion", "RNA to DNA", "Provirus", "Protease cleavage"] },
  "hiv-transmission-prevention": { eyebrow: "Exposure logic", title: "Define route, time, and suppression", nodes: ["Fluid", "Route", "Timing", "Prevention"], notes: ["Infectious source", "Susceptible tissue", "Recent or ongoing", "PEP, PrEP, U equals U"] },
  "hiv-clinical-course": { eyebrow: "Disease course", title: "Separate symptoms from biology", nodes: ["Acute", "Chronic", "Immune decline", "Stage 3"], notes: ["Intense viremia", "Ongoing replication", "CD4 trajectory", "Count or condition"] },
  "hiv-diagnostic-algorithm": { eyebrow: "Laboratory algorithm", title: "Resolve every result branch", nodes: ["Ag/Ab", "Differentiate", "HIV-1 NAT", "Interpret"], notes: ["Initial assay", "HIV-1 versus HIV-2", "Resolve discordance", "Link to care"] },
  "hiv-linkage-rapid-start": { eyebrow: "Care activation", title: "Begin treatment without losing the person", nodes: ["Confirm", "Collect", "Start", "Link"], notes: ["Diagnostic evidence", "Baseline samples", "Robust ART", "Access and follow-up"] },
  "hiv-baseline-evaluation": { eyebrow: "Decision baseline", title: "Collect what can change care", nodes: ["Virus", "Immunity", "Organ state", "Context"], notes: ["HIV RNA", "CD4", "Safety and coinfection", "Exposure and access"] },
  "hiv-resistance-special-tests": { eyebrow: "Precision testing", title: "Match the test to the drug question", nodes: ["Genotype", "Integrase", "HLA-B*5701", "Tropism"], notes: ["RT and protease", "CAB-LA concern", "Abacavir safety", "Maraviroc eligibility"] },
  "hiv-monitoring-response": { eyebrow: "Longitudinal signal", title: "Monitor the decision", nodes: ["HIV RNA", "CD4", "Safety", "Response"], notes: ["Virologic effect", "Immune function", "Regimen specific", "Trend and act"] },
  "hiv-art-principles": { eyebrow: "Regimen integrity", title: "Protect complete suppression", nodes: ["Potency", "Combination", "Continuity", "Durability"], notes: ["Active regimen", "No monotherapy", "No supply gaps", "Resistance barrier"] },
  "hiv-initial-regimen-logic": { eyebrow: "Initial selection", title: "Choose for known and pending data", nodes: ["Default", "HBV", "Resistance", "Refine"], notes: ["Second-generation INSTI", "Dual HBV activity", "Prior exposure", "Review results"] },
  "hiv-person-centered-care": { eyebrow: "Care system", title: "Make treatment livable", nodes: ["Listen", "Select", "Deliver", "Sustain"], notes: ["Find the barrier", "Shared choice", "Access and privacy", "Respectful follow-up"] },
};

export default function HivFoundationsCareVisual({ type }) {
  const data = diagrams[type.replace("hiv-foundations-", "")];
  if (!data) return null;

  return (
    <figure className="chol-visual hiv-foundations-visual" aria-label={data.title}>
      <figcaption>
        <span>{data.eyebrow}</span>
        <strong>{data.title}</strong>
      </figcaption>
      <div className="chol-visual__grid">
        {data.nodes.map((label, index) => (
          <div key={label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{label}</strong>
            <em>{data.notes[index]}</em>
            <p>{index < data.nodes.length - 1 ? "Carry the verified input forward." : "Own the next clinical action."}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}
