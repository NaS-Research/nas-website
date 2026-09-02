const diagrams = {
  "tox-exposure-pathway": { eyebrow: "Exposure pathway", title: "Source, route, enzyme, synapse.", accent: "#d0a16e", columns: [["Expose", "Skin, lung, gut, eye", "Agent and formulation matter"], ["Inhibit", "AChE activity falls", "Acetylcholine accumulates"], ["Amplify", "M + N + CNS", "Secretions, weakness, seizures"], ["Evolve", "Redistribution + aging", "Time changes risk"]] },
  "tox-syndrome-domains": { eyebrow: "Cholinergic syndrome", title: "Read the receptor domains before the mnemonic.", accent: "#c98678", columns: [["Muscarinic", "Wet physiology", "Bronchorrhea and gastrointestinal activity"], ["Nicotinic", "Motor + ganglia", "Fasciculation, weakness, paralysis"], ["Central", "Brain", "Confusion, seizure, coma"], ["Contrast", "Muscarinic blockade", "Dryness, retention, mydriasis, heat"]] },
  "tox-decontamination": { eyebrow: "Responder safety", title: "Protect, remove, contain, reassess.", accent: "#7ea8c0", columns: [["Protect", "PPE + scene control", "Prevent secondary exposure"], ["Remove", "Clothing + source", "Stop ongoing absorption"], ["Clean", "Agent-specific process", "Avoid spreading contamination"], ["Reassess", "Delayed absorption", "Skin, lung, and clothing"]] },
  "tox-atropine": { eyebrow: "Muscarinic control", title: "Treat the airway endpoint, not the pupil.", accent: "#82aa91", columns: [["Load", "Repeat rapidly by protocol", "Severe exposure may need large amounts"], ["Target", "Drying + oxygenation", "Bronchospasm and secretion improve"], ["Maintain", "Infusion or repeated dose", "Prevent recurrence"], ["Watch", "Over-atropinization", "Temperature, ileus, retention, delirium"]] },
  "tox-oxime": { eyebrow: "Enzyme reactivation", title: "Oxime benefit depends on chemistry and exposure.", accent: "#a492c5", columns: [["Reactivate", "Nonaged enzyme", "Agent compatibility matters"], ["Administer", "Slow product-specific rate", "Avoid transient worsening"], ["Clear", "Renal elimination", "Kidney function changes exposure"], ["Interpret", "Overlapping findings", "Poison, atropine, and oxime"]] },
  "tox-postacute": { eyebrow: "Beyond resuscitation", title: "Recurrence, weakness, neuropathy, recovery.", accent: "#cfb16b", columns: [["Observe", "Recurrent cholinergic signs", "Redistribution and ongoing absorption"], ["Test", "Respiratory + neuromuscular", "Intermediate weakness"], ["Follow", "Delayed neuropathy", "Agent-specific risk"], ["Prevent", "Exposure review", "Occupational and mental-health safety"]] },
};

export default function CholinergicToxicologyVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  return <figure className="chol-visual" style={{ "--chol-accent": diagram.accent }} aria-label={diagram.title}>
    <figcaption><span>{diagram.eyebrow}</span><strong>{diagram.title}</strong></figcaption>
    <div className="chol-visual__grid">{diagram.columns.map(([name, action, detail], index) => <div key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><em>{action}</em><p>{detail}</p></div>)}</div>
  </figure>;
}
