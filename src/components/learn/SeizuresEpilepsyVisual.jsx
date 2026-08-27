const views = {
  "seizure-epilepsy": ["Event", "Cause", "Recurrence", "Disease"],
  "classification-diagnosis": ["Focal", "Generalized", "Unknown", "Unclassified"],
  "network-pharmacology": ["Na channel", "Ca channel", "GABA", "SV2A"],
  "drug-selection": ["Seizure", "Patient", "Product", "Goal"],
  "broad-spectrum": ["Lamotrigine", "Levetiracetam", "Topiramate", "Valproate"],
  "focused-agents": ["Carbamazepine", "Oxcarbazepine", "Lacosamide", "Ethosuximide"],
  "phenytoin-levels": ["Dose", "Binding", "Level", "Toxicity"],
  "interactions-safety": ["Enzymes", "Sodium", "Rash", "Mood"],
  "reproductive-care": ["Plan", "Control", "Folate", "Monitor"],
  "status-epilepticus": ["Stabilize", "Benzodiazepine", "Load", "Escalate"],
  "rescue-first-aid": ["Protect", "Time", "Rescue", "Escalate"],
  "longitudinal-care": ["Freedom", "Function", "Safety", "Future"],
};
export const seizuresEpilepsyVisualTypes = Object.keys(views).map((key) => `seizures-epilepsy-${key}`);

export default function SeizuresEpilepsyVisual({ type }) {
  const key = type.replace("seizures-epilepsy-", "");
  const labels = views[key] || views["seizure-epilepsy"];
  const points = [[98, 72], [244, 224], [376, 72], [522, 224]];
  return <figure className="chol-visual seizures-epilepsy-visual" aria-label={`Seizures and epilepsy visual: ${key.replaceAll("-", " ")}`}>
    <div className="chol-visual__copy"><span>Neural excitability</span><h3>{key.replaceAll("-", " ")}</h3><p>Trace the event from network physiology through classification, treatment, safety, and recovery.</p></div>
    <div className="chol-visual__stage" aria-hidden="true"><svg viewBox="0 0 620 300">
      <path d="M56 150 C94 150 96 92 132 92 S168 222 204 222 S240 118 276 118 S312 182 348 182 S384 64 420 64 S456 236 492 236 S528 150 566 150" fill="none" stroke="#efd19a" strokeWidth="4" strokeOpacity=".62" />
      <path d="M70 150 H550" fill="none" stroke="#9f5e58" strokeOpacity=".24" strokeDasharray="5 8" />
      <circle cx="310" cy="150" r="68" fill="#c99a62" fillOpacity=".06" stroke="#efd19a" strokeOpacity=".3" />
      {labels.map((label, index) => <g key={label}><path d={`M310 150 L${points[index][0]} ${points[index][1]}`} stroke="#c99a62" strokeOpacity=".2" /><circle cx={points[index][0]} cy={points[index][1]} r="6" fill={index === 0 ? "#f2d59d" : "#a45f58"} /><text x={points[index][0]} y={points[index][1] - 16} textAnchor="middle" fill="#f3eee6" fontSize="14">{label}</text></g>)}
    </svg></div>
  </figure>;
}
