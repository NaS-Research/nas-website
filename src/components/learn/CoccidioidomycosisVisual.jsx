const sets = {
  "environment-biology": ["Arid soil", "Arthroconidia", "Lung", "Spherule"],
  "syndromes-risk": ["Focal lung", "Diffuse lung", "Disseminated", "Meningitis"],
  "diagnosis-serology": ["IgM and IgG", "CF titer", "Culture", "Tissue"],
  "focal-treatment": ["Fluconazole", "Itraconazole", "3 to 6 months", "Immune recovery"],
  "severe-disseminated": ["Amphotericin", "Clinical improvement", "Triazole", "At least 12 months"],
  "meningitis": ["Fluconazole high dose", "Hydrocephalus", "CSF", "Lifelong"],
  "exposure-safety": ["Renal", "Liver", "QT", "Interactions"],
  "art-prevention": ["ART", "CD4 250", "Serology", "Prophylaxis"],
  "pregnancy-special": ["Trimester", "Amphotericin", "Azole", "Specialist"],
  "integrated-case": ["Geography", "Syndrome", "Therapy", "Follow-through"],
};
export const coccidioidomycosisVisualTypes = Object.keys(sets).map((key) => `coccidioidomycosis-${key}`);
export default function CoccidioidomycosisVisual({ type }) {
  const key = type.replace("coccidioidomycosis-", "");
  const labels = sets[key] || sets["integrated-case"];
  return <figure className="chol-visual cocci-visual" aria-label={`Coccidioidomycosis visual: ${key.replaceAll("-", " ")}`}>
    <div className="chol-visual__copy"><span>Desert mycology</span><h3>{key.replaceAll("-", " ")}</h3><p>Trace exposure, tissue form, clinical compartment, and treatment across one connected disease system.</p></div>
    <div className="chol-visual__stage" aria-hidden="true"><svg viewBox="0 0 620 300">
      <defs><radialGradient id={`cocci-${key}`}><stop stopColor="#e6c383" /><stop offset="1" stopColor="#78472a" /></radialGradient></defs>
      <path d="M70 225 C150 152 205 185 270 112 C335 38 415 78 550 48" fill="none" stroke="#b9824d" strokeOpacity=".28" />
      <path d="M60 248 C180 208 246 252 330 182 C410 116 480 152 560 112" fill="none" stroke="#b9824d" strokeOpacity=".2" />
      <circle cx="310" cy="150" r="82" fill={`url(#cocci-${key})`} fillOpacity=".34" stroke="#d9ad70" strokeOpacity=".45" />
      {[[-28,-14,9],[3,-29,7],[26,-4,11],[-6,16,8],[22,24,6]].map(([x,y,r], i) => <circle key={i} cx={310+x} cy={150+y} r={r} fill="#f0d39d" fillOpacity=".82" />)}
      {labels.map((label,index)=>{const p=[[105,70],[515,70],[105,235],[515,235]][index];return <g key={label}><line x1={p[0]} y1={p[1]} x2="310" y2="150" stroke="#d0a065" strokeOpacity=".3"/><circle cx={p[0]} cy={p[1]} r="6" fill={index===0?"#efd19a":"#9c6138"}/><text x={p[0]} y={p[1]-16} textAnchor="middle" fill="#f3eee6" fontSize="14">{label}</text></g>})}
    </svg></div>
  </figure>;
}
