const views = {
  "virus-natural-history": ["RNA genome", "Replication", "Inflammation", "Fibrosis"],
  "screening-diagnosis": ["Antibody", "Reflex RNA", "Current infection", "Linkage"],
  "fibrosis-eligibility": ["FIB-4", "Elastography", "Child-Pugh", "Pathway"],
  "daa-mechanisms": ["NS3/4A", "NS5A", "NS5B", "Pangenotypic"],
  "initial-regimens": ["Mavyret", "Epclusa", "Food", "Duration"],
  "pretreatment-safety": ["Medication list", "HBV", "HIV", "Pregnancy"],
  "interaction-engineering": ["Acid", "Inducers", "Statins", "Amiodarone"],
  "monitoring-delivery": ["Adherence", "Glucose", "INR", "Liver injury"],
  "svr-follow-up": ["End therapy", "SVR12", "Cure", "Reinfection"],
  "cirrhosis-special": ["Compensated", "Decompensated", "HCC", "Transplant"],
  "retreatment-prevention": ["Prior DAA", "Resistance", "Salvage", "Harm reduction"],
  "integrated-case": ["Diagnose", "Stage", "Treat", "Confirm cure"],
};
export const hepatitisCVisualTypes = Object.keys(views).map((key) => `hepatitis-c-${key}`);
export default function HepatitisCVisual({ type }) {
  const key = type.replace("hepatitis-c-", "");
  const labels = views[key] || views["integrated-case"];
  return <figure className="chol-visual hepatitis-c-visual" aria-label={`Hepatitis C visual: ${key.replaceAll("-", " ")}`}>
    <div className="chol-visual__copy"><span>Curable viral infection</span><h3>{key.replaceAll("-", " ")}</h3><p>Connect viral targets, fibrosis, regimen delivery, sustained response, and lifelong liver risk.</p></div>
    <div className="chol-visual__stage" aria-hidden="true"><svg viewBox="0 0 620 300">
      <defs><radialGradient id={`hcv-${key}`}><stop stopColor="#e7bd79" stopOpacity=".52"/><stop offset="1" stopColor="#5b2f43" stopOpacity=".03"/></radialGradient></defs>
      <path d="M215 65 C275 40 390 62 430 121 C466 174 421 231 343 242 C269 252 196 226 173 178 C152 135 166 85 215 65Z" fill={`url(#hcv-${key})`} stroke="#d1a061" strokeOpacity=".32"/>
      <path d="M245 112 C270 82 306 150 331 116 C358 82 390 148 409 116 M232 157 C269 123 298 194 337 157 C366 129 395 188 420 153 M230 198 C263 170 300 223 337 193 C372 165 399 211 423 187" fill="none" stroke="#cc7c70" strokeWidth="4" strokeOpacity=".58"/>
      {labels.map((label,index)=>{const p=[[86,56],[534,56],[86,247],[534,247]][index];return <g key={label}><line x1={p[0]} y1={p[1]} x2="310" y2="150" stroke="#c99a62" strokeOpacity=".22"/><circle cx={p[0]} cy={p[1]} r="5" fill={index===0?"#efd19a":"#a85365"}/><text x={p[0]} y={p[1]-15} textAnchor="middle" fill="#f3eee6" fontSize="14">{label}</text></g>})}
    </svg></div>
  </figure>;
}
