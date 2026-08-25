const diagrams = {
  "glaucoma-flow-map": { eyebrow: "Aqueous humor", title: "Pressure reflects production, conventional outflow, and uveoscleral outflow.", accent: "#79a6bc", columns: [["Produce", "Ciliary epithelium", "Carbonic anhydrase, beta, and alpha 2 targets"], ["Trabecular", "Meshwork to Schlemm canal", "Major pressure-dependent pathway"], ["Uveoscleral", "Ciliary muscle spaces", "Prostaglandin analog pathway"], ["Damage", "Optic nerve", "Pressure interacts with susceptibility and time"]] },
  "glaucoma-prostaglandins": { eyebrow: "Outflow first", title: "Prostaglandin pathway remodeling increases uveoscleral flow.", accent: "#c58a71", columns: [["Latanoprost family", "FP receptor signaling", "Once-daily product-specific use"], ["Bimatoprost", "Prostamide-related profile", "Hyperemia and adnexal changes"], ["Local effects", "Iris + lashes + orbit", "Pigmentation and periorbital change"], ["Safety", "Inflammation + macula + herpes", "Risk assessment before selection"]] },
  "glaucoma-production": { eyebrow: "Reduce production", title: "Three classes converge on ciliary epithelial secretion.", accent: "#91a97d", columns: [["Timolol", "Nonselective beta block", "Systemic heart and airway effects"], ["Brimonidine", "Alpha 2 agonism", "CNS depression and allergy"], ["Dorzolamide", "Carbonic anhydrase block", "Sulfonamide and corneal considerations"], ["Technique", "Punctal occlusion", "Reduce nasolacrimal systemic exposure"]] },
  "glaucoma-outflow": { eyebrow: "Conventional outflow", title: "Rho kinase and cholinergic pathways change the drainage apparatus.", accent: "#a18dbb", columns: [["Netarsudil", "Rho kinase inhibition", "Trabecular outflow and hyperemia"], ["Pilocarpine", "M3 contraction", "Meshwork tension with miosis"], ["Laser", "Trabecular target", "Medication alternative or partner"], ["Surgery", "New drainage route", "Escalate when progression outruns control"]] },
  "glaucoma-selection": { eyebrow: "Selection", title: "Treat progression risk, not an isolated pressure number.", accent: "#c3a062", columns: [["Target", "Individualized pressure range", "Baseline damage and rate"], ["Measure", "Fields + nerve + pressure", "Structure and function over time"], ["Choose", "Efficacy + safety + burden", "Comorbidity and adherence"], ["Escalate", "Add, laser, or surgery", "Progression changes the plan"]] },
  "glaucoma-technique": { eyebrow: "Administration", title: "One drop, closed lid, punctal pressure, separated products.", accent: "#c77d6f", columns: [["Prepare", "Hands + contacts + bottle", "Avoid tip contamination"], ["Deliver", "One conjunctival drop", "More volume adds spillover"], ["Contain", "Close lid + punctal occlusion", "Reduce nasolacrimal absorption"], ["Separate", "Product-specific interval", "Prevent washout and dosing error"]] },
};

export default function GlaucomaPharmacotherapyVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  return <figure className="chol-visual" style={{ "--chol-accent": diagram.accent }} aria-label={diagram.title}>
    <figcaption><span>{diagram.eyebrow}</span><strong>{diagram.title}</strong></figcaption>
    <div className="chol-visual__grid">{diagram.columns.map(([name, action, detail], index) => <div key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><em>{action}</em><p>{detail}</p></div>)}</div>
  </figure>;
}
