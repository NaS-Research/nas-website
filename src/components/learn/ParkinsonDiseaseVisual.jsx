const views = {
  "motor-circuit": ["Substantia nigra", "Striatum", "Direct path", "Indirect path"],
  diagnosis: ["Bradykinesia", "Rigidity", "Rest tremor", "Trajectory"],
  "nonmotor-system": ["Sleep", "Autonomic", "Mood", "Cognition"],
  "levodopa-system": ["Gut", "Blood", "Brain", "Dopamine"],
  "dose-timing": ["Dose", "On", "Wearing off", "Rescue"],
  "adjunct-map": ["MAO-B", "COMT", "Agonist", "Amantadine"],
  dyskinesia: ["Off dystonia", "Rising", "Peak dose", "Falling"],
  "advanced-therapy": ["Oral plan", "Infusion", "DBS", "Support"],
  psychosis: ["Delirium", "Burden", "Perception", "Motor safety"],
  autonomic: ["Supine", "Standing", "Volume", "Falls"],
  "hospital-safety": ["Right drug", "Right time", "Swallow", "Avoid blockers"],
  recovery: ["Mobility", "Nonmotor", "Safety", "Life"],
};
export const parkinsonDiseaseVisualTypes = Object.keys(views).map((key) => `parkinson-disease-${key}`);

export default function ParkinsonDiseaseVisual({ type }) {
  const key = type.replace("parkinson-disease-", "");
  const labels = views[key] || views["motor-circuit"];
  const points = [[105, 82], [245, 218], [375, 82], [515, 218]];
  return <figure className="chol-visual parkinson-disease-visual" aria-label={`Parkinson disease visual: ${key.replaceAll("-", " ")}`}>
    <div className="chol-visual__copy"><span>Movement system</span><h3>{key.replaceAll("-", " ")}</h3><p>Follow dopamine, timing, function, and treatment burden through one connected circuit.</p></div>
    <div className="chol-visual__stage" aria-hidden="true"><svg viewBox="0 0 620 300">
      <path d="M105 82 C180 25 220 255 310 150 C400 45 440 275 515 218" fill="none" stroke="#efd19a" strokeWidth="4" strokeOpacity=".62" />
      <path d="M105 218 C205 250 218 50 310 150 C402 250 415 50 515 82" fill="none" stroke="#a45f58" strokeWidth="2" strokeOpacity=".34" />
      <circle cx="310" cy="150" r="37" fill="#c99a62" fillOpacity=".12" stroke="#efd19a" strokeOpacity=".55" />
      {labels.map((label, index) => <g key={label}><path d={`M310 150 L${points[index][0]} ${points[index][1]}`} stroke="#c99a62" strokeOpacity=".25" /><circle cx={points[index][0]} cy={points[index][1]} r="6" fill={index === 0 ? "#f2d59d" : "#9f5e58"} /><text x={points[index][0]} y={points[index][1] - 16} textAnchor="middle" fill="#f3eee6" fontSize="14">{label}</text></g>)}
    </svg></div>
  </figure>;
}
