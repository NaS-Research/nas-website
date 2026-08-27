const views = {
  "syndrome-map": ["Threat", "Arousal", "Avoidance", "Impairment"],
  "differential-risk": ["Medical", "Substance", "Mood", "Safety"],
  "cbt-exposure": ["Predict", "Approach", "Learn", "Repeat"],
  "stepped-care": ["Educate", "Skills", "Therapy", "Specialist"],
  "ssri-snri": ["Start", "Activation", "Response", "Continue"],
  "buspirone": ["5-HT1A", "CYP3A4", "Schedule", "Delay"],
  "benzodiazepines": ["GABA-A", "Relief", "Dependence", "Taper"],
  "panic-disorder": ["Sensation", "Meaning", "Fear", "Avoidance"],
  "social-anxiety": ["Scrutiny", "Prediction", "Exposure", "Function"],
  "special-populations": ["Older adult", "Pregnancy", "Liver", "Substance"],
  "nonresponse": ["Diagnosis", "Exposure", "Comorbidity", "Fidelity"],
  "integrated-recovery": ["Symptoms", "Approach", "Function", "Relapse plan"],
};
export const anxietyDisordersVisualTypes = Object.keys(views).map((key) => `anxiety-disorders-${key}`);

export default function AnxietyDisordersVisual({ type }) {
  const key = type.replace("anxiety-disorders-", "");
  const labels = views[key] || views["syndrome-map"];
  return <figure className="chol-visual anxiety-visual" aria-label={`Anxiety disorders visual: ${key.replaceAll("-", " ")}`}>
    <div className="chol-visual__copy"><span>Threat learning system</span><h3>{key.replaceAll("-", " ")}</h3><p>Separate adaptive alarm from a self-reinforcing cycle of fear and avoidance.</p></div>
    <div className="chol-visual__stage" aria-hidden="true"><svg viewBox="0 0 620 300">
      <circle cx="310" cy="150" r="92" fill="none" stroke="#efd19a" strokeWidth="3" strokeOpacity=".48" />
      <path d="M310 58 A92 92 0 0 1 402 150" fill="none" stroke="#9f5f59" strokeWidth="8" strokeLinecap="round" />
      <path d="M402 150 A92 92 0 0 1 310 242" fill="none" stroke="#c99a62" strokeWidth="8" strokeLinecap="round" opacity=".72" />
      {labels.map((label, index) => { const p = [[310,42],[432,150],[310,266],[188,150]][index]; return <g key={label}><circle cx={p[0]} cy={p[1]} r="5" fill={index === 0 ? "#f2d59d" : "#9f5f59"}/><text x={p[0]} y={p[1] + (index === 2 ? 25 : -14)} textAnchor="middle" fill="#f3eee6" fontSize="14">{label}</text></g>; })}
    </svg></div>
  </figure>;
}
