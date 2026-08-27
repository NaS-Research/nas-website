const views = {
  "risk-pathogenesis": ["Barrier", "Catheter", "Gut", "Bloodstream"],
  "diagnostic-evidence": ["Cultures", "Species", "Susceptibility", "Deep site"],
  "initial-therapy": ["Caspofungin", "Micafungin", "Anidulafungin", "Fluconazole"],
  "clearance-source": ["Repeat culture", "Catheter", "Drain", "14 days"],
  "stepdown-exposure": ["Stable", "Susceptible", "Cleared", "Oral exposure"],
  "persistent-fungemia": ["Biofilm", "Endocarditis", "Abscess", "Resistance"],
  "eye-endocardial": ["Retina", "Vitreous", "Valve", "Surgery"],
  "deep-compartments": ["Abdomen", "Urine", "CNS", "Bone"],
  "neutropenia-neonate": ["Neutrophils", "CNS", "Urine", "Age dosing"],
  "candida-auris": ["Clinical infection", "Colonization", "Resistance", "Infection control"],
  "prevention-stewardship": ["Line care", "Antibiotics", "Source", "Prophylaxis"],
  "integrated-case": ["Culture", "Source", "Drug", "Follow-through"],
};
export const invasiveCandidiasisVisualTypes = Object.keys(views).map((key) => `invasive-candidiasis-${key}`);
export default function InvasiveCandidiasisVisual({ type }) {
  const key = type.replace("invasive-candidiasis-", "");
  const labels = views[key] || views["integrated-case"];
  return <figure className="chol-visual invasive-candidiasis-visual" aria-label={`Invasive candidiasis visual: ${key.replaceAll("-", " ")}`}>
    <div className="chol-visual__copy"><span>Bloodstream yeast</span><h3>{key.replaceAll("-", " ")}</h3><p>Connect barrier failure, bloodstream clearance, source control, species, and every seeded compartment.</p></div>
    <div className="chol-visual__stage" aria-hidden="true"><svg viewBox="0 0 620 300">
      <defs><radialGradient id={`candida-core-${key}`}><stop stopColor="#efd19a" stopOpacity=".62"/><stop offset="1" stopColor="#6c4032" stopOpacity=".06"/></radialGradient></defs>
      <path d="M64 150 C150 105 220 198 310 150 C400 102 470 195 556 150" fill="none" stroke="#b95d57" strokeWidth="18" strokeOpacity=".14"/>
      <path d="M64 150 C150 105 220 198 310 150 C400 102 470 195 556 150" fill="none" stroke="#d3a268" strokeWidth="2.5" strokeOpacity=".52"/>
      <circle cx="310" cy="150" r="84" fill={`url(#candida-core-${key})`} stroke="#d4a76e" strokeOpacity=".3"/>
      {[[-35,-18,16],[4,-32,13],[35,-3,18],[-12,22,15],[29,31,12]].map(([x,y,r], index) => <g key={index}><ellipse cx={310+x} cy={150+y} rx={r*.72} ry={r} transform={`rotate(${index*29} ${310+x} ${150+y})`} fill="#e8c189" fillOpacity=".74"/><circle cx={318+x} cy={140+y} r="5" fill="#f5dfb4" fillOpacity=".8"/></g>)}
      {labels.map((label,index)=>{const p=[[102,62],[518,62],[102,244],[518,244]][index];return <g key={label}><line x1={p[0]} y1={p[1]} x2="310" y2="150" stroke="#c99a62" strokeOpacity=".24"/><circle cx={p[0]} cy={p[1]} r="5" fill={index===0?"#efd19a":"#ad5c56"}/><text x={p[0]} y={p[1]-15} textAnchor="middle" fill="#f3eee6" fontSize="14">{label}</text></g>})}
    </svg></div>
  </figure>;
}
