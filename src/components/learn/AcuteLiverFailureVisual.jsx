const views = {
  "definition-tempo": ["Injury", "INR", "Encephalopathy", "Tempo"],
  "etiology-workup": ["Toxin", "Virus", "Immune", "Vascular"],
  "acetaminophen-rescue": ["Exposure", "NAPQI", "NAC", "Recovery"],
  "icu-transfer": ["Recognize", "Stabilize", "Transfer", "Evaluate"],
  "brain-ammonia": ["Encephalopathy", "Ammonia", "Osmotherapy", "CRRT"],
  "organ-support": ["Perfusion", "Glucose", "Kidney", "Infection"],
  "coagulation-procedures": ["INR", "Bleeding", "Procedure", "Targeted support"],
  "cause-specific-treatment": ["Acyclovir", "Steroid trial", "Delivery", "Transplant"],
  "prognosis-transplant": ["Cause", "Lactate", "Organ failure", "Listing"],
  "medication-stewardship": ["Dose", "Route", "Clearance", "Daily review"],
  "integrated-case": ["Definition", "Cause", "Support", "Rescue"],
  "closed-loop": ["Trend", "Owner", "Family", "Transition"],
};
export const acuteLiverFailureVisualTypes = Object.keys(views).map((key) => `acute-liver-failure-${key}`);
export default function AcuteLiverFailureVisual({ type }) {
  const key = type.replace("acute-liver-failure-", ""); const labels = views[key] || views["integrated-case"];
  return <figure className="chol-visual acute-liver-failure-visual" aria-label={`Acute liver failure visual: ${key.replaceAll("-", " ")}`}><div className="chol-visual__copy"><span>Critical pathway</span><h3>{key.replaceAll("-", " ")}</h3><p>Connect rapid diagnosis, organ support, cause-specific rescue, and transplant timing.</p></div><div className="chol-visual__stage" aria-hidden="true"><svg viewBox="0 0 620 300"><defs><linearGradient id={`alf-${key}`} x1="0" x2="1"><stop stopColor="#edce96" stopOpacity=".52"/><stop offset="1" stopColor="#6e3030" stopOpacity=".16"/></linearGradient></defs><path d="M170 183 C159 128 203 76 274 67 C351 57 436 84 452 139 C469 195 408 236 335 241 C254 247 184 225 170 183Z" fill={`url(#alf-${key})`} stroke="#d3a263" strokeOpacity=".45"/><path d="M299 72 C281 119 288 188 322 239" fill="none" stroke="#f2d6a3" strokeOpacity=".28"/>{labels.map((label,index)=>{const p=[[88,58],[532,58],[88,245],[532,245]][index];return <g key={label}><path d={`M${p[0]} ${p[1]} Q310 150 310 150`} fill="none" stroke="#c99a62" strokeOpacity=".3"/><circle cx={p[0]} cy={p[1]} r="5" fill={index===0?"#f2d59d":"#94423d"}/><text x={p[0]} y={p[1]-15} textAnchor="middle" fill="#f3eee6" fontSize="14">{label}</text></g>})}</svg></div></figure>;
}
