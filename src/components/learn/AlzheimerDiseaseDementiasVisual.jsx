const views = {
  "cognitive-syndrome": ["Memory", "Language", "Executive", "Function"],
  "diagnostic-workup": ["History", "Collateral", "Testing", "Imaging"],
  "biology-biomarkers": ["Amyloid", "Tau", "Synapse", "Reserve"],
  "cholinergic-system": ["ACh", "AChE", "Synapse", "Signal"],
  "symptomatic-therapy": ["Donepezil", "Rivastigmine", "Galantamine", "Memantine"],
  "medication-safety": ["Pulse", "Weight", "Falls", "Burden"],
  "anti-amyloid-selection": ["Early stage", "Amyloid", "MRI", "Decision"],
  "aria-monitoring": ["Baseline", "MRI", "Symptoms", "Hold"],
  "behavioral-care": ["Trigger", "Need", "Environment", "Response"],
  "function-safety": ["Home", "Driving", "Medicines", "Future"],
  "care-partner-system": ["Observe", "Support", "Respite", "Plan"],
  "longitudinal-care": ["Biology", "Function", "Safety", "Values"],
};
export const alzheimerDiseaseDementiasVisualTypes = Object.keys(views).map((key) => `alzheimer-disease-dementias-${key}`);

export default function AlzheimerDiseaseDementiasVisual({ type }) {
  const key = type.replace("alzheimer-disease-dementias-", "");
  const labels = views[key] || views["cognitive-syndrome"];
  const points = [[105, 82], [245, 218], [375, 82], [515, 218]];
  return <figure className="chol-visual alzheimer-disease-dementias-visual" aria-label={`Alzheimer disease and dementias visual: ${key.replaceAll("-", " ")}`}>
    <div className="chol-visual__copy"><span>Cognition and care</span><h3>{key.replaceAll("-", " ")}</h3><p>Connect biology, clinical stage, function, safety, and the decisions each result changes.</p></div>
    <div className="chol-visual__stage" aria-hidden="true"><svg viewBox="0 0 620 300">
      <path d="M90 150 C150 55 230 245 310 150 C390 55 470 245 530 150" fill="none" stroke="#efd19a" strokeWidth="4" strokeOpacity=".58" />
      <ellipse cx="310" cy="150" rx="92" ry="58" fill="#c99a62" fillOpacity=".09" stroke="#efd19a" strokeOpacity=".42" />
      <path d="M310 92 C278 118 278 182 310 208 C342 182 342 118 310 92" fill="none" stroke="#a45f58" strokeWidth="3" strokeOpacity=".48" />
      {labels.map((label, index) => <g key={label}><path d={`M310 150 L${points[index][0]} ${points[index][1]}`} stroke="#c99a62" strokeOpacity=".24" /><circle cx={points[index][0]} cy={points[index][1]} r="6" fill={index === 0 ? "#f2d59d" : "#9f5e58"} /><text x={points[index][0]} y={points[index][1] - 16} textAnchor="middle" fill="#f3eee6" fontSize="14">{label}</text></g>)}
    </svg></div>
  </figure>;
}
