const views = {
  "diagnosis-differential": ["Symptoms", "Function", "Exclusions", "Episode"],
  "suicide-safety": ["Thoughts", "Intent", "Means", "Action"],
  "measurement-psychotherapy": ["Baseline", "Preference", "Intervention", "Review"],
  "ssri-selection": ["Serotonin", "Fit", "Safety", "Follow-up"],
  "snri-selection": ["Serotonin", "Norepinephrine", "Pressure", "Taper"],
  "other-antidepressants": ["Sleep", "Weight", "Sexual effects", "Seizures"],
  "tca-maoi": ["Receptors", "Toxicity", "Washout", "Diet"],
  "toxicity-discontinuation": ["Clonus", "Timing", "Support", "Prevention"],
  "perinatal-postpartum": ["Illness risk", "Pregnancy", "Lactation", "Support"],
  "inadequate-response": ["Diagnosis", "Adherence", "Dose", "Strategy"],
  "advanced-treatment": ["Augment", "Esketamine", "TMS", "ECT"],
  "recovery-plan": ["Remission", "Function", "Maintenance", "Relapse plan"],
};
export const majorDepressiveDisorderVisualTypes = Object.keys(views).map((key) => `major-depressive-disorder-${key}`);

export default function MajorDepressiveDisorderVisual({ type }) {
  const key = type.replace("major-depressive-disorder-", "");
  const labels = views[key] || views["diagnosis-differential"];
  return <figure className="chol-visual major-depressive-disorder-visual" aria-label={`Major depressive disorder visual: ${key.replaceAll("-", " ")}`}>
    <div className="chol-visual__copy"><span>Clinical reasoning</span><h3>{key.replaceAll("-", " ")}</h3><p>Connect diagnosis, safety, treatment fit, and measured recovery.</p></div>
    <div className="chol-visual__stage" aria-hidden="true"><svg viewBox="0 0 620 300">
      <defs><radialGradient id={`mdd-${key}`}><stop stopColor="#efcf96" stopOpacity=".48"/><stop offset="1" stopColor="#111" stopOpacity=".08"/></radialGradient></defs>
      <circle cx="310" cy="150" r="92" fill={`url(#mdd-${key})`} stroke="#d2a261" strokeOpacity=".32"/>
      <path d="M248 165 C245 104 277 70 323 76 C364 81 384 111 377 146 C370 180 348 194 336 226 L278 226 C275 197 251 190 248 165Z" fill="none" stroke="#f0d39d" strokeWidth="3" strokeOpacity=".65"/>
      <path d="M278 118 Q313 91 350 120 M270 151 Q310 130 363 153 M279 184 Q314 165 348 188" fill="none" stroke="#b16c63" strokeOpacity=".7"/>
      {labels.map((label,index)=>{const p=[[80,55],[540,55],[80,245],[540,245]][index];return <g key={label}><path d={`M${p[0]} ${p[1]} Q310 150 310 150`} fill="none" stroke="#c99a62" strokeOpacity=".3"/><circle cx={p[0]} cy={p[1]} r="5" fill={index===0?"#f2d59d":"#9f5e58"}/><text x={p[0]} y={p[1]-15} textAnchor="middle" fill="#f3eee6" fontSize="14">{label}</text></g>})}
    </svg></div>
  </figure>;
}
