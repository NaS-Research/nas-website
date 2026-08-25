const diagrams = {
  "ans-architecture": {
    eyebrow: "Control loop",
    title: "Sense, integrate, command, adapt.",
    accent: "#c89b75",
    nodes: [["Afferent", "Organ state", "Pressure, chemistry, stretch"], ["CNS", "Integration", "Spinal cord, brainstem, hypothalamus"], ["Ganglion", "Relay", "Preganglionic ACh to nicotinic receptor"], ["Effector", "Response", "Muscle, gland, metabolism"]],
  },
  "ans-transmitter-map": {
    eyebrow: "Peripheral map",
    title: "One ganglionic rule, distinct effectors.",
    accent: "#d0b56f",
    lanes: [["Sympathetic", "ACh → Nn", "NE → α or β", "Most organs"], ["Parasympathetic", "ACh → Nn", "ACh → M", "Target organs"], ["Sweat", "ACh → Nn", "ACh → M", "Eccrine gland"], ["Adrenal", "ACh → Nn", "Epi + NE → blood", "Distributed"]],
  },
  "ans-receptor-signaling": {
    eyebrow: "Signal grammar",
    title: "Receptor family predicts the intracellular route.",
    accent: "#89a8c8",
    receptors: [["Nn, Nm", "Ion channel", "Na+ and K+ flux", "Rapid depolarization"], ["M1, M3, M5, α1", "Gq", "PLC → IP3 + DAG", "Ca2+ signaling"], ["M2, M4, α2", "Gi", "↓ adenylyl cyclase", "↓ cAMP"], ["β1, β2, β3", "Gs", "↑ adenylyl cyclase", "↑ cAMP"]],
  },
  "ans-cholinergic-cycle": {
    eyebrow: "Cholinergic terminal",
    title: "Build, store, release, signal, recycle.",
    accent: "#77aa91",
    cycle: [["01", "Uptake", "Choline transporter"], ["02", "Synthesis", "ChAT + acetyl-CoA"], ["03", "Storage", "VAChT + H+ gradient"], ["04", "Release", "Ca2+ + SNARE fusion"], ["05", "Signal", "Nicotinic or muscarinic"], ["06", "Hydrolysis", "AChE → choline"]],
  },
  "ans-adrenergic-cycle": {
    eyebrow: "Noradrenergic terminal",
    title: "Synthesis and retrieval shape the signal.",
    accent: "#b291c5",
    cycle: [["01", "Tyrosine", "TH → L-DOPA"], ["02", "Dopamine", "AADC"], ["03", "Vesicle", "VMAT2 → NE"], ["04", "Release", "Ca2+ + fusion"], ["05", "Receptors", "α and β"], ["06", "Recovery", "NET → reuse or MAO"]],
  },
  "ans-reflex-integration": {
    eyebrow: "Baroreflex",
    title: "The final response includes compensation.",
    accent: "#d08a7f",
    nodes: [["Pressure ↑", "More arterial stretch", "Carotid sinus and aortic arch"], ["Afferents ↑", "CN IX and X", "Nucleus tractus solitarius"], ["Output shifts", "Vagal ↑, sympathetic ↓", "Heart and vessels"], ["Pressure ↓", "Rate, force, resistance fall", "Acute buffering"]],
  },
};

function Flow({ items }) {
  return <div className="ans-visual__flow">{items.map(([index, heading, detail], itemIndex) => <div className="ans-visual__node" key={`${index}-${heading}`}><span>{index}</span><strong>{heading}</strong><p>{detail}</p>{itemIndex < items.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div>;
}

export default function AutonomicNervousSystemVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;

  return <figure className={`ans-visual ans-visual--${type}`} style={{ "--ans-accent": diagram.accent }} aria-label={diagram.title}>
    <figcaption><span>{diagram.eyebrow}</span><strong>{diagram.title}</strong></figcaption>
    {diagram.nodes && <Flow items={diagram.nodes} />}
    {diagram.lanes && <div className="ans-visual__lanes">{diagram.lanes.map(([branch, ganglion, effector, target]) => <div key={branch}><strong>{branch}</strong><span>{ganglion}</span><i aria-hidden="true">→</i><span>{effector}</span><em>{target}</em></div>)}</div>}
    {diagram.receptors && <div className="ans-visual__receptors">{diagram.receptors.map(([receptor, family, pathway, response]) => <div key={receptor}><strong>{receptor}</strong><span>{family}</span><p>{pathway}</p><em>{response}</em></div>)}</div>}
    {diagram.cycle && <div className="ans-visual__cycle">{diagram.cycle.map(([index, heading, detail]) => <div key={index}><span>{index}</span><strong>{heading}</strong><p>{detail}</p></div>)}</div>}
  </figure>;
}
