const diagrams = {
  "chol-classification": { eyebrow: "Mechanistic map", title: "Two ways to increase cholinergic signaling.", accent: "#d1a878", columns: [["Direct", "Bind receptor", "Muscarinic, nicotinic, or both"], ["Indirect", "Inhibit AChE", "Amplify endogenous ACh"], ["Access", "Charge + route", "Peripheral or central"], ["Outcome", "Receptor geography", "Benefit and toxicity"]] },
  "chol-direct-agonists": { eyebrow: "Direct agonism", title: "Selectivity is relative. Distribution is decisive.", accent: "#c98578", columns: [["Bethanechol", "M receptors", "Bladder and gastrointestinal smooth muscle"], ["Pilocarpine", "M receptors", "Glands, eye, systemic tissues"], ["Cevimeline", "M receptors", "Salivary secretion"], ["Methacholine", "M dominant", "Controlled airway challenge"]] },
  "chol-clinical-selection": { eyebrow: "Clinical decision", title: "Indication, route, reserve, response.", accent: "#d0b56f", columns: [["Verify", "Correct mechanism", "No obstruction or unsafe reserve"], ["Deliver", "Right product", "Route and administration"], ["Measure", "Functional goal", "Voiding, saliva, spirometry, vision"], ["Reassess", "Benefit versus burden", "Continue, adjust, or stop"]] },
  "chol-peripheral-inhibitors": { eyebrow: "Peripheral enzyme inhibition", title: "More acetylcholine at muscle and viscera.", accent: "#83aa93", columns: [["AChE ↓", "ACh persists", "Nicotinic + muscarinic sites"], ["NMJ", "Competition shifts", "Transmission or block reversal"], ["Viscera", "Muscarinic burden", "Pair protection when indicated"], ["Monitor", "Function + ventilation", "Not dose alone"]] },
  "chol-central-inhibitors": { eyebrow: "Cognitive therapy", title: "Titrate, observe, preserve function.", accent: "#91a9cb", columns: [["Select", "Diagnosis + indication", "Agent and formulation"], ["Start", "Lowest labeled dose", "Tolerability first"], ["Follow", "Cognition + function", "Pulse, weight, GI, skin"], ["Decide", "Meaningful benefit", "Goals and caregiver input"]] },
  "chol-safety": { eyebrow: "Cholinergic excess", title: "Secretions, weakness, brain, breathing.", accent: "#b091c4", columns: [["Muscarinic", "Wet physiology", "Secretions, gut, bladder, bradycardia"], ["Nicotinic", "Motor junction", "Fasciculation, weakness, paralysis"], ["Central", "Brain exposure", "Confusion, seizure, coma"], ["Priority", "Airway + ventilation", "Stabilize before classification"]] },
};

export default function CholinergicAgonistsVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  return <figure className="chol-visual" style={{ "--chol-accent": diagram.accent }} aria-label={diagram.title}>
    <figcaption><span>{diagram.eyebrow}</span><strong>{diagram.title}</strong></figcaption>
    <div className="chol-visual__grid">{diagram.columns.map(([name, action, detail], index) => <div key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><em>{action}</em><p>{detail}</p></div>)}</div>
  </figure>;
}
