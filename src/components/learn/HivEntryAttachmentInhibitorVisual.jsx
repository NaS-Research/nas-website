export const hivEntryAttachmentInhibitorVisualTypes = [
  "entry-target-map", "salvage-resistance", "maraviroc-tropism", "maraviroc-dosing-safety", "fostemsavir", "ibalizumab", "enfuvirtide", "delivery-continuity", "safety-monitoring", "integrated-selection",
].map((type) => `hiv-entry-${type}`);

const diagrams = {
  "entry-target-map": { eyebrow: "Entry sequence", title: "Follow the virus to the membrane", nodes: ["gp120 to CD4", "CCR5 or CXCR4", "gp41 refolding", "Fusion"], notes: ["Attachment", "Coreceptor", "Membrane pull", "Cytoplasmic entry"] },
  "salvage-resistance": { eyebrow: "Regimen reconstruction", title: "Protect every remaining active mechanism", nodes: ["History", "Susceptibility", "Active partners", "Early HIV RNA"], notes: ["All prior ART", "Genotype and phenotype", "Prefer two or more", "4 to 8 weeks"] },
  "maraviroc-tropism": { eyebrow: "Host coreceptor", title: "Verify the CCR5 door", nodes: ["Tropism assay", "CCR5 only", "MVC binds host", "Entry blocked"], notes: ["Before selection", "No CXCR4 detected", "Allosteric change", "gp120 cannot engage"] },
  "maraviroc-dosing-safety": { eyebrow: "Exposure system", title: "Dose from interactions and organs", nodes: ["CYP3A", "Kidney", "Blood pressure", "Liver and rash"], notes: ["Inhibitor or inducer", "CrCl and dialysis", "Orthostasis", "Urgent pattern"] },
  fostemsavir: { eyebrow: "gp120 attachment", title: "Lock the viral envelope before CD4", nodes: ["Fostemsavir", "Temsavir", "gp120 locked", "Attachment stops"], notes: ["Prodrug", "Active moiety", "Viral target", "Before CD4"] },
  ibalizumab: { eyebrow: "CD4 post-attachment", title: "Block the next conformational step", nodes: ["Load 2,000 mg", "CD4 domain 2", "Entry arrested", "800 mg every 2 weeks"], notes: ["IV start", "Host target", "After attachment", "Maintain exposure"] },
  enfuvirtide: { eyebrow: "gp41 fusion", title: "Keep the membranes apart", nodes: ["gp41 exposed", "T-20 binds", "Bundle blocked", "No fusion"], notes: ["After coreceptor", "Heptad repeat", "No membrane pull", "No entry"] },
  "delivery-continuity": { eyebrow: "Exposure delivery", title: "Make the route survivable", nodes: ["Oral BID", "IV every 2 weeks", "SC BID", "Continuity proof"], notes: ["MVC and FTR", "IBA", "T-20", "Refills and visits"] },
  "safety-monitoring": { eyebrow: "Mechanism of symptoms", title: "Separate toxicity from recovery", nodes: ["Time course", "HIV RNA", "Organ data", "Clinical response"], notes: ["Immediate or delayed", "Falling or rising", "Liver, BP, sites", "Toxicity, IRIS, failure"] },
  "integrated-selection": { eyebrow: "Clinical synthesis", title: "Align target, regimen, person, and delivery", nodes: ["Virus", "Active ART", "Person", "Follow-up"], notes: ["Tropism and resistance", "Protect the novel drug", "Safety and feasibility", "Response ownership"] },
};

export default function HivEntryAttachmentInhibitorVisual({ type }) {
  const data = diagrams[type.replace("hiv-entry-", "")];
  if (!data) return null;
  return <figure className="chol-visual hiv-entry-visual" aria-label={data.title}>
    <figcaption><span>{data.eyebrow}</span><strong>{data.title}</strong></figcaption>
    <div className="chol-visual__grid">{data.nodes.map((label, index) => <div key={`${label}-${index}`}>
      <span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong><em>{data.notes[index]}</em>
      <p>{index < data.nodes.length - 1 ? "Carry this evidence forward." : "Own the next clinical action."}</p>
    </div>)}</div>
  </figure>;
}
