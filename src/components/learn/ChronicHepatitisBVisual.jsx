const views = {
  "virus-natural-history": ["HBV entry", "cccDNA", "Immune injury", "Fibrosis"],
  "screening-serology": ["HBsAg", "Anti-HBs", "Anti-HBc", "HBV DNA"],
  "phase-staging": ["ALT trend", "DNA trend", "HBeAg", "Fibrosis"],
  "treatment-decision": ["Cirrhosis", "Immune active", "Indeterminate", "Shared decision"],
  "polymerase-therapy": ["TDF", "TAF", "Entecavir", "Resistance"],
  "peginterferon-selection": ["Finite course", "Immune effect", "Toxicity", "Compensation"],
  "special-populations": ["Kidney", "Bone", "HIV", "Coinfection"],
  "pregnancy-infant": ["Maternal DNA", "Antiviral", "Vaccine and HBIG", "PVST"],
  "monitoring-stopping": ["DNA suppression", "Safety", "Adherence", "Flare"],
  "reactivation": ["Triple panel", "Immunosuppression", "Prophylaxis", "Monitoring"],
  "prevention-surveillance": ["Vaccination", "Contacts", "HCC surveillance", "Linkage"],
  "integrated-case": ["Screen", "Stage", "Treat", "Follow"],
};
export const chronicHepatitisBVisualTypes = Object.keys(views).map((key) => `chronic-hepatitis-b-${key}`);
export default function ChronicHepatitisBVisual({ type }) {
  const key = type.replace("chronic-hepatitis-b-", "");
  const labels = views[key] || views["integrated-case"];
  return <figure className="chol-visual chronic-hepatitis-b-visual" aria-label={`Chronic hepatitis B visual: ${key.replaceAll("-", " ")}`}>
    <div className="chol-visual__copy"><span>Viral liver disease</span><h3>{key.replaceAll("-", " ")}</h3><p>Connect viral replication, immune injury, fibrosis, treatment, prevention, and long-term surveillance.</p></div>
    <div className="chol-visual__stage" aria-hidden="true"><svg viewBox="0 0 620 300">
      <defs><radialGradient id={`hbv-${key}`}><stop stopColor="#e7bd79" stopOpacity=".55"/><stop offset="1" stopColor="#6b342e" stopOpacity=".04"/></radialGradient></defs>
      <path d="M222 65 C286 44 390 68 426 121 C462 175 419 233 340 242 C270 250 199 226 175 180 C154 140 166 86 222 65Z" fill={`url(#hbv-${key})`} stroke="#d1a061" strokeOpacity=".34"/>
      <path d="M295 71 C306 112 307 176 294 232" fill="none" stroke="#d7a667" strokeOpacity=".35"/>
      {[0,1,2,3,4,5,6].map((index)=><g key={index} transform={`translate(${230 + (index%4)*48} ${106 + Math.floor(index/4)*72})`}><circle r="15" fill="#9f4a43" fillOpacity=".54" stroke="#efca8e" strokeOpacity=".46"/><circle r="5" fill="#efd19a"/><path d="M-18 0H18M0-18V18" stroke="#d8aa6e" strokeOpacity=".28"/></g>)}
      {labels.map((label,index)=>{const p=[[86,56],[534,56],[86,247],[534,247]][index];return <g key={label}><line x1={p[0]} y1={p[1]} x2="310" y2="150" stroke="#c99a62" strokeOpacity=".22"/><circle cx={p[0]} cy={p[1]} r="5" fill={index===0?"#efd19a":"#9f4a43"}/><text x={p[0]} y={p[1]-15} textAnchor="middle" fill="#f3eee6" fontSize="14">{label}</text></g>})}
    </svg></div>
  </figure>;
}
