const diagrams = {
  "adr-antagonist-occupancy": { eyebrow: "Competitive blockade", title: "Block the receptor, then predict the reflex.", accent: "#c89475", columns: [["Antagonist", "Occupies receptor", "Agonist response falls"], ["Alpha 1 block", "Resistance falls", "Orthostasis and reflex rate"], ["Beta 1 block", "Rate and force fall", "Conduction and renin slow"], ["System response", "Tone + reserve", "Direct and reflex effects combine"]] },
  "adr-alpha-blockers": { eyebrow: "Alpha blockade", title: "Vascular and urinary targets share a receptor family.", accent: "#b69a70", columns: [["Prazosin family", "Alpha 1 blockade", "Pressure and urinary smooth muscle"], ["Tamsulosin", "Alpha 1A preference", "Urinary symptoms with orthostasis risk"], ["First dose", "Venous pooling", "Syncope and falls"], ["Eye surgery", "Iris behavior", "Disclose current or prior exposure"]] },
  "adr-beta-diversity": { eyebrow: "Beta blocker diversity", title: "Selectivity is relative, not absolute.", accent: "#81a2bd", columns: [["Beta 1 selective", "Metoprolol or esmolol", "Cardiac preference at lower exposure"], ["Nonselective", "Propranolol", "Beta 1 and beta 2 blockade"], ["ISA", "Partial agonism", "Less resting blockade, different fit"], ["Membrane effect", "Sodium channels", "Toxicity at high exposure"]] },
  "adr-cardiac-selection": { eyebrow: "Clinical selection", title: "Match the exact product to the exact indication.", accent: "#8baa93", columns: [["Heart failure", "Evidence-specific products", "Stable initiation and slow titration"], ["Rate control", "AV nodal slowing", "Rhythm, pressure, conduction"], ["Ischemia", "Demand reduction", "Never stop abruptly"], ["Mixed blockade", "Carvedilol or labetalol", "Beta plus alpha 1 physiology"]] },
  "adr-antagonist-safety": { eyebrow: "Safety map", title: "Reserve determines whether blockade protects or harms.", accent: "#a88dbd", columns: [["Airway", "Beta 2 blockade", "Bronchospasm and rescue interference"], ["Conduction", "Beta 1 blockade", "Bradycardia and AV block"], ["Metabolic", "Counterregulation", "Hypoglycemia signs may change"], ["Withdrawal", "Receptor adaptation", "Rebound ischemia or tachycardia"]] },
  "adr-antagonist-toxicity": { eyebrow: "Acute toxicity", title: "Support perfusion while identifying the blocker phenotype.", accent: "#c9796b", columns: [["Core", "Bradycardia + shock", "Airway, rhythm, glucose, perfusion"], ["Lipophilic", "Central exposure", "Seizures and depressed consciousness"], ["Membrane stabilizing", "Sodium channel block", "Wide QRS and severe instability"], ["Escalate", "Poison center protocol", "Agent-specific antidotal support"]] },
};

export default function AdrenergicAntagonistsVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  return <figure className="chol-visual" style={{ "--chol-accent": diagram.accent }} aria-label={diagram.title}>
    <figcaption><span>{diagram.eyebrow}</span><strong>{diagram.title}</strong></figcaption>
    <div className="chol-visual__grid">{diagram.columns.map(([name, action, detail], index) => <div key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><em>{action}</em><p>{detail}</p></div>)}</div>
  </figure>;
}
