const diagrams = {
  "antiarrhythmic-framework": {
    eyebrow: "Electrophysiologic framework",
    title: "Choose antiarrhythmic therapy by mechanism, substrate, treatment goal, organ handling, and measurable toxicity rather than class number alone.",
    accent: "#b8876f",
    columns: [["Rhythm", "Define circuit and urgency", "Treat instability first"], ["Substrate", "Structure, function, conduction", "Exclude unsafe agents"], ["Exposure", "Dose, organ function, interactions", "Predict concentration"], ["Response", "ECG, burden, symptoms, toxicity", "Reassess the goal"]],
  },
  "antiarrhythmic-sodium": {
    eyebrow: "Sodium-channel pharmacology",
    title: "Binding state, recovery kinetics, tissue voltage, rate, and molecular access shape the different behaviors of class IA, IB, and IC agents.",
    accent: "#829db4",
    columns: [["IA", "Moderate sodium plus potassium block", "QRS and QT"], ["IB", "Fast recovery in ventricular tissue", "Lidocaine and mexiletine"], ["IC", "Slow recovery and strong use dependence", "Flecainide and propafenone"], ["Chemistry", "Hydrophobe, linker, ionizable amine", "Access and binding"]],
  },
  "antiarrhythmic-potassium": {
    eyebrow: "Repolarization control",
    title: "IKr blockade can maintain or restore rhythm, but kidney exposure, bradycardia, electrolytes, interacting drugs, and reverse use dependence govern torsades risk.",
    accent: "#a68ab7",
    columns: [["Dofetilide", "Selective IKr block", "Renal dose and monitored start"], ["Sotalol", "Beta plus IKr block", "Rate, kidney, QT"], ["Ibutilide", "IV conversion", "Post-dose telemetry"], ["Torsades", "Pause-dependent repolarization failure", "Prevent before treating"]],
  },
  "antiarrhythmic-multichannel": {
    eyebrow: "Multichannel and nodal agents",
    title: "Amiodarone, dronedarone, adenosine, beta blockers, calcium-channel blockers, and digoxin act through distinct combinations of channels, receptors, transport, and autonomic tone.",
    accent: "#8ba47d",
    columns: [["Amiodarone", "Broad channel and receptor effects", "High efficacy, high surveillance"], ["Dronedarone", "Redesigned multichannel scaffold", "Distinct contraindications"], ["Adenosine", "Transient A1 receptor effect", "AV nodal interruption"], ["Nodal control", "Autonomic and calcium pathways", "Match function and circuit"]],
  },
  "antiarrhythmic-selection": {
    eyebrow: "Substrate-directed selection",
    title: "The same arrhythmia name can require a different drug or ablation strategy when ischemic scar, ventricular dysfunction, preexcitation, bradycardia, or long QT is present.",
    accent: "#c0995d",
    columns: [["Normal structure", "Broader rhythm options", "Still screen ECG and organs"], ["Scar or MI", "Avoid harmful conduction slowing", "Protect against ventricular risk"], ["Heart failure", "Respect contractility and mortality", "Use proven pathways"], ["Ablation", "Modify circuit or focus", "Do not prolong failed toxicity"]],
  },
  "antiarrhythmic-monitoring": {
    eyebrow: "Safety operating system",
    title: "Safe antiarrhythmic use is a longitudinal process connecting dose and clearance to ECG intervals, electrolytes, toxicity, recurrence, interaction changes, and patient goals.",
    accent: "#bb716b",
    columns: [["Before", "ECG, structure, organs, drugs", "Establish suitability"], ["Initiate", "Protocol, telemetry, serial ECG", "Catch early proarrhythmia"], ["Maintain", "Rhythm and organ surveillance", "Measure benefit and burden"], ["Escalate", "Toxicity, recurrence, new disease", "Change drug, ablate, or stop"]],
  },
};

export default function AntiarrhythmicPharmacologyVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  return (
    <figure className="chol-visual" style={{ "--chol-accent": diagram.accent }} aria-label={diagram.title}>
      <figcaption><span>{diagram.eyebrow}</span><strong>{diagram.title}</strong></figcaption>
      <div className="chol-visual__grid">
        {diagram.columns.map(([name, mechanism, decision], index) => (
          <div key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><em>{mechanism}</em><p>{decision}</p></div>
        ))}
      </div>
    </figure>
  );
}
