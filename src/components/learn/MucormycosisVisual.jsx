const views = {
  "organism-angioinvasion": ["Mucorales", "Broad hyphae", "Vessel invasion", "Necrosis"],
  "host-risk": ["Diabetes", "Neutropenia", "Steroids", "Trauma"],
  "rhino-orbital-cerebral": ["Sinus", "Orbit", "Cranial nerve", "Brain"],
  "pulmonary-other-sites": ["Lung", "Skin", "GI", "Disseminated"],
  "diagnostic-evidence": ["Deep tissue", "Pathology", "Culture", "Molecular"],
  "immediate-treatment": ["Liposomal AmB", "Debridement", "Host reversal", "No delay"],
  "amphotericin-system": ["Dose", "Kidney", "Potassium", "Magnesium"],
  "azole-transition": ["Isavuconazole", "Posaconazole", "Loading", "Exposure"],
  "surgery-source-control": ["Margins", "Repeat", "Reconstruct", "Preserve function"],
  "response-duration": ["Imaging", "Necrosis", "Immune recovery", "Months"],
  "breakthrough-prevention": ["Prior azole", "Spectrum", "Species", "Local ecology"],
  "integrated-case": ["Host", "Tissue", "Drug", "Surgery"],
};

export const mucormycosisVisualTypes = Object.keys(views).map((key) => `mucormycosis-${key}`);

export default function MucormycosisVisual({ type }) {
  const key = type.replace("mucormycosis-", "");
  const labels = views[key] || views["integrated-case"];
  return <figure className="chol-visual mucormycosis-visual" aria-label={`Mucormycosis visual: ${key.replaceAll("-", " ")}`}>
    <div className="chol-visual__copy"><span>Angioinvasive mold</span><h3>{key.replaceAll("-", " ")}</h3><p>Track vessel invasion, tissue perfusion, active antifungal delivery, and surgical control as one emergency system.</p></div>
    <div className="chol-visual__stage" aria-hidden="true"><svg viewBox="0 0 620 300">
      <defs><radialGradient id={`mucor-core-${key}`}><stop stopColor="#e6c383" stopOpacity=".56"/><stop offset="1" stopColor="#4c1f18" stopOpacity=".04"/></radialGradient></defs>
      <path d="M82 152 C168 106 218 201 309 150 C397 100 452 194 540 145" fill="none" stroke="#b65f48" strokeWidth="22" strokeOpacity=".18"/>
      <path d="M82 152 C168 106 218 201 309 150 C397 100 452 194 540 145" fill="none" stroke="#d2a068" strokeWidth="3" strokeOpacity=".52"/>
      <circle cx="310" cy="150" r="84" fill={`url(#mucor-core-${key})`} stroke="#d0a268" strokeOpacity=".26"/>
      {[0,1,2,3].map((n) => <g key={n} transform={`translate(${250 + n * 38} ${125 + (n%2)*34}) rotate(${n*31})`}><path d="M0 0 C20 -24 32 8 54 -18 M20 -12 L8 -38 M35 -4 L58 18" fill="none" stroke="#efd09b" strokeWidth="7" strokeLinecap="round" strokeOpacity=".72"/><circle cx="54" cy="-18" r="8" fill="#b65f48" fillOpacity=".8"/></g>)}
      {labels.map((label, index) => { const p = [[102,62],[518,62],[102,244],[518,244]][index]; return <g key={label}><line x1={p[0]} y1={p[1]} x2="310" y2="150" stroke="#cb9a61" strokeOpacity=".24"/><circle cx={p[0]} cy={p[1]} r="5" fill={index === 0 ? "#efd19a" : "#a95f47"}/><text x={p[0]} y={p[1]-15} textAnchor="middle" fill="#f3eee6" fontSize="14">{label}</text></g>; })}
    </svg></div>
  </figure>;
}
