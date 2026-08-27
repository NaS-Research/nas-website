const views = {
  "tests-patterns": ["ALT and AST", "Alkaline phosphatase", "Bilirubin and INR", "R ratio"],
  "diagnostic-thresholds": ["Threshold", "Symptoms", "Trajectory", "Context"],
  "timeline-causality": ["Start", "Latency", "Dechallenge", "Alternatives"],
  "severity-hys-law": ["Hepatocellular", "Bilirubin", "No cholestasis", "Escalate"],
  "acetaminophen": ["Time", "Concentration", "NAC", "Recovery criteria"],
  "supplements": ["Exact product", "Lot", "Phenotype", "Report"],
  "drug-signatures": ["Cholestatic", "Hepatocellular", "Autoimmune-like", "Chronic"],
  "management": ["Stop", "Support", "Monitor", "Replace"],
  "rechallenge": ["Benefit", "Alternatives", "Recurrence", "Specialist plan"],
  "special-populations": ["Baseline disease", "Pregnancy", "Oncology", "Transplant"],
  "case-workup": ["Pattern", "Differential", "Culprit", "Severity"],
  "closed-loop": ["Counsel", "Trend", "Communicate", "Prevent"],
};

export const drugInducedLiverInjuryVisualTypes = Object.keys(views).map((key) => `drug-induced-liver-injury-${key}`);

export default function DrugInducedLiverInjuryVisual({ type }) {
  const key = type.replace("drug-induced-liver-injury-", "");
  const labels = views[key] || views["case-workup"];
  return <figure className="chol-visual drug-induced-liver-injury-visual" aria-label={`Drug-induced liver injury visual: ${key.replaceAll("-", " ")}`}>
    <div className="chol-visual__copy"><span>Diagnostic reasoning</span><h3>{key.replaceAll("-", " ")}</h3><p>Move from exposure and biochemical pattern to causality, severity, intervention, and prevention.</p></div>
    <div className="chol-visual__stage" aria-hidden="true"><svg viewBox="0 0 620 300">
      <defs><linearGradient id={`dili-${key}`} x1="0" x2="1"><stop stopColor="#efcf96" stopOpacity=".52"/><stop offset="1" stopColor="#8b3f39" stopOpacity=".15"/></linearGradient></defs>
      <path d="M171 184 C159 130 199 78 272 67 C349 56 437 84 453 139 C469 194 409 235 335 241 C255 247 185 226 171 184Z" fill={`url(#dili-${key})`} stroke="#d2a261" strokeOpacity=".45"/>
      <path d="M298 72 C280 119 287 189 322 239" fill="none" stroke="#f2d6a3" strokeOpacity=".28"/>
      {labels.map((label, index) => { const p = [[88, 58], [532, 58], [88, 245], [532, 245]][index]; return <g key={label}><path d={`M${p[0]} ${p[1]} Q310 150 310 150`} fill="none" stroke="#c99a62" strokeOpacity=".3"/><circle cx={p[0]} cy={p[1]} r="5" fill={index === 0 ? "#f2d59d" : "#a64b43"}/><text x={p[0]} y={p[1] - 15} textAnchor="middle" fill="#f3eee6" fontSize="14">{label}</text></g>; })}
    </svg></div>
  </figure>;
}
