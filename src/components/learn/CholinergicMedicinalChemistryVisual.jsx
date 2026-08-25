const diagrams = {
  "medchem-choline-pharmacophore": { eyebrow: "Cholinergic pharmacophore", title: "Cation, spacing, ester, response.", accent: "#d2a56e", columns: [["Cation", "Anchors binding", "Permanent or protonated charge"], ["Spacer", "Positions groups", "Two-carbon choline geometry"], ["Ester", "Recognition + cleavage", "Acetate or carbamate"], ["Substitution", "Changes fit", "Selectivity and stability"]] },
  "medchem-choline-esters": { eyebrow: "Choline ester series", title: "Two substitutions reshape the whole profile.", accent: "#cc887b", columns: [["ACh", "Acetate + no beta methyl", "Fast hydrolysis, M + N"], ["Methacholine", "Acetate + beta methyl", "Muscarinic bias"], ["Carbachol", "Carbamate + no beta methyl", "Hydrolysis resistant, M + N"], ["Bethanechol", "Carbamate + beta methyl", "Hydrolysis resistant, M bias"]] },
  "medchem-direct-agonists": { eyebrow: "Agonist comparison", title: "Structure predicts access, duration, and use.", accent: "#7fa8c0", columns: [["Choline esters", "Quaternary", "Peripheral and poorly lipid soluble"], ["Pilocarpine", "Tertiary alkaloid", "Membrane and CNS access"], ["Cevimeline", "Heterocyclic agonist", "Secretory therapy"], ["Route", "Constrains exposure", "Eye, airway, oral, or local"]] },
  "medchem-ache-binding": { eyebrow: "Enzyme inhibition", title: "Recognition, residence, and recovery.", accent: "#83aa91", columns: [["Noncovalent", "Short residence", "Rapidly reversible"], ["Carbamate", "Carbamylated enzyme", "Intermediate recovery"], ["Organophosphate", "Phosphorylated enzyme", "Prolonged inhibition"], ["Aging", "Bond stabilizes", "Oxime rescue narrows"]] },
  "medchem-ache-access": { eyebrow: "Distribution map", title: "Charge decides which synapses are reached.", accent: "#a592c6", columns: [["Neostigmine", "Quaternary", "Peripheral AChE"], ["Pyridostigmine", "Quaternary", "Peripheral AChE"], ["Physostigmine", "Tertiary", "Peripheral + central"], ["Dementia agents", "CNS accessible", "Central symptomatic therapy"]] },
  "medchem-design-integration": { eyebrow: "Design workflow", title: "From structure to a defensible clinical prediction.", accent: "#d1b46d", columns: [["Identify", "Ionization + scaffold", "Access and target family"], ["Compare", "Substituents", "Affinity and metabolism"], ["Predict", "Route + exposure", "Onset, duration, organ pattern"], ["Verify", "Label + patient", "Use, monitoring, safety"]] },
};

export default function CholinergicMedicinalChemistryVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  return <figure className="chol-visual" style={{ "--chol-accent": diagram.accent }} aria-label={diagram.title}>
    <figcaption><span>{diagram.eyebrow}</span><strong>{diagram.title}</strong></figcaption>
    <div className="chol-visual__grid">{diagram.columns.map(([name, action, detail], index) => <div key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><em>{action}</em><p>{detail}</p></div>)}</div>
  </figure>;
}
