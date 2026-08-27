const views = {
  "biology-syndromes": ["Airborne conidia", "Airway", "Cavity", "Tissue invasion"],
  "host-prevention": ["Neutropenia", "Transplant", "Steroids", "Protected environment"],
  "diagnostic-evidence": ["Chest CT", "BAL", "Galactomannan", "Histopathology"],
  "syndrome-separation": ["Allergic", "Colonization", "Chronic", "Invasive"],
  "primary-treatment": ["Voriconazole", "Isavuconazole", "Liposomal AmB", "Early therapy"],
  "voriconazole-system": ["Load", "Trough", "CYP", "Toxicity"],
  "alternatives-salvage": ["Isavuconazole", "Liposomal AmB", "Echinocandin", "Resistance"],
  "site-source-control": ["Lung", "CNS", "Sinus", "Surgery"],
  "chronic-allergic": ["Aspergilloma", "CCPA", "ABPA", "Hemoptysis"],
  "response-resistance": ["Immune recovery", "Imaging", "Exposure", "Susceptibility"],
  "transplant-prevention": ["Target risk", "Agent", "Interaction", "Stewardship"],
  "integrated-case": ["Syndrome", "Evidence", "Therapy", "Follow-through"],
};

export const aspergillosisVisualTypes = Object.keys(views).map((key) => `aspergillosis-${key}`);

export default function AspergillosisVisual({ type }) {
  const key = type.replace("aspergillosis-", "");
  const labels = views[key] || views["integrated-case"];
  return <figure className="chol-visual aspergillosis-visual" aria-label={`Aspergillosis visual: ${key.replaceAll("-", " ")}`}>
    <div className="chol-visual__copy">
      <span>Mold systems</span>
      <h3>{key.replaceAll("-", " ")}</h3>
      <p>Separate exposure, airway disease, chronic cavities, and tissue invasion before selecting evidence and therapy.</p>
    </div>
    <div className="chol-visual__stage" aria-hidden="true">
      <svg viewBox="0 0 620 300">
        <defs>
          <radialGradient id={`asper-center-${key}`}><stop stopColor="#e6c383" stopOpacity=".7"/><stop offset="1" stopColor="#513924" stopOpacity=".08"/></radialGradient>
          <linearGradient id={`asper-lung-${key}`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#9d6b43" stopOpacity=".42"/><stop offset="1" stopColor="#d5b27c" stopOpacity=".12"/></linearGradient>
        </defs>
        <path d="M302 62 C258 61 220 99 207 153 C196 198 214 237 252 248 C282 257 299 231 300 191 Z" fill={`url(#asper-lung-${key})`} stroke="#d2a66c" strokeOpacity=".38"/>
        <path d="M318 62 C362 61 400 99 413 153 C424 198 406 237 368 248 C338 257 321 231 320 191 Z" fill={`url(#asper-lung-${key})`} stroke="#d2a66c" strokeOpacity=".38"/>
        <path d="M310 48 V140 M310 95 L262 145 M310 95 L358 145 M262 145 L238 185 M262 145 L282 190 M358 145 L382 185 M358 145 L338 190" fill="none" stroke="#e2bd83" strokeOpacity=".5" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="355" cy="128" r="58" fill={`url(#asper-center-${key})`} stroke="#d7ac72" strokeOpacity=".32"/>
        {[0,1,2,3,4].map((n) => <g key={n} transform={`translate(${350 + n * 3} ${132 - n * 4}) rotate(${n * 27})`}><path d="M0 0 L28 -20 M13 -9 L28 2 M20 -14 L32 -9" fill="none" stroke="#f0d29b" strokeOpacity=".8" strokeWidth="2"/><circle r="3" fill="#f0d29b"/></g>)}
        {labels.map((label, index) => { const points = [[100,64],[520,64],[100,242],[520,242]][index]; return <g key={label}><path d={`M${points[0]} ${points[1]} Q310 150 310 150`} fill="none" stroke="#c89b62" strokeOpacity=".25"/><circle cx={points[0]} cy={points[1]} r="5" fill={index === 0 ? "#efd19a" : "#92633f"}/><text x={points[0]} y={points[1] - 15} textAnchor="middle" fill="#f3eee6" fontSize="14">{label}</text></g>; })}
      </svg>
    </div>
  </figure>;
}
