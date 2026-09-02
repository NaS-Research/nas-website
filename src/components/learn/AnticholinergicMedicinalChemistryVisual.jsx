const diagrams = {
  "antichol-medchem-pharmacophore": { eyebrow: "Antagonist pharmacophore", title: "A spatial pattern, not one required formula.", accent: "#d1a36f", columns: [["Nitrogen", "Cationic anchor", "Tertiary or quaternary"], ["Spacer", "Usually short", "Two to four atoms in classical scaffolds"], ["Hydrophobes", "Occupy lipophilic space", "Often two bulky cyclic regions"], ["Linker", "Positions the groups", "Ester, ether, amide, or another solution"]] },
  "antichol-medchem-tropanes": { eyebrow: "Tropane family", title: "A rigid scaffold carries different access and duration.", accent: "#ca8979", columns: [["Atropine", "Racemic tropate ester", "Tertiary and systemically accessible"], ["Scopolamine", "Epoxide bridge", "Central vestibular effects"], ["Ipratropium", "Quaternized atropine", "Localized inhaled exposure"], ["Tiotropium", "Quaternary + kinetic design", "Prolonged airway action"]] },
  "antichol-medchem-access": { eyebrow: "Access engineering", title: "Quaternization trades membrane access for localization.", accent: "#7ea8c2", columns: [["Tertiary", "Uncharged fraction", "CNS and broad tissue access"], ["Quaternary", "Permanent charge", "Limited passive CNS entry"], ["Local route", "High target concentration", "Airway, eye, skin"], ["Systemic escape", "Still possible", "Peripheral burden remains"]] },
  "antichol-medchem-duration": { eyebrow: "Airway residence", title: "Duration is receptor kinetics plus lung exposure.", accent: "#82aa91", columns: [["Ipratropium", "Shorter residence", "Short-acting inhaled antagonist"], ["Tiotropium", "Slow M1 and M3 dissociation", "Long-acting profile"], ["Aclidinium", "Rapid plasma hydrolysis", "Limits systemic persistence"], ["Revefenacin", "Nebulized once daily", "Local maintenance exposure"]] },
  "antichol-medchem-bladder": { eyebrow: "Urinary scaffolds", title: "Different structures converge on detrusor M3 blockade.", accent: "#a593c6", columns: [["Oxybutynin", "Tertiary amino ester", "Formulation changes exposure"], ["Tolterodine", "Parent plus active metabolite", "CYP2D6 phenotype changes the balance"], ["Fesoterodine", "Esterase-activated prodrug", "Directly forms 5-hydroxymethyl tolterodine"], ["Trospium", "Quaternary and renal", "Limited passive central access"]] },
  "antichol-medchem-integration": { eyebrow: "Structure to clinic", title: "Predict, verify, and measure.", accent: "#d0b36c", columns: [["Annotate", "Charge + scaffold", "Access and binding pattern"], ["Map", "Metabolic liabilities", "Duration and interactions"], ["Place", "Route + formulation", "Target versus systemic exposure"], ["Verify", "Label + response", "Benefit, burden, uncertainty"]] },
};

export default function AnticholinergicMedicinalChemistryVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  return <figure className="chol-visual" style={{ "--chol-accent": diagram.accent }} aria-label={diagram.title}>
    <figcaption><span>{diagram.eyebrow}</span><strong>{diagram.title}</strong></figcaption>
    <div className="chol-visual__grid">{diagram.columns.map(([name, action, detail], index) => <div key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><em>{action}</em><p>{detail}</p></div>)}</div>
  </figure>;
}
