const views = {
  "compensation-portal": ["Hepatocyte work", "Fibrosis", "Portal pressure", "Decompensation"],
  "severity-assessment": ["Injury markers", "Bilirubin", "Albumin + INR", "Trajectory"],
  "ascites-diagnosis": ["Paracentesis", "SAAG", "PMN count", "Culture"],
  "ascites-treatment": ["Sodium", "Spironolactone", "Furosemide", "Weight"],
  "paracentesis-refractory": ["Large volume", "Albumin", "TIPS", "Transplant"],
  "sbp": ["PMN 250", "Antibiotic", "Albumin", "Prophylaxis"],
  "hrs-aki": ["AKI screen", "Albumin", "Terlipressin", "Oxygenation"],
  "portal-varices": ["CSPH", "Carvedilol", "Endoscopy", "Ligation"],
  "acute-bleeding": ["Resuscitate", "Vasoactive", "Antibiotic", "Endoscopy"],
  "encephalopathy": ["Precipitant", "Lactulose", "Rifaximin", "Recovery"],
  "longitudinal-care": ["Nutrition", "Medication safety", "HCC", "Vaccines"],
  "integrated-case": ["Stabilize", "Treat cause", "Prevent recurrence", "Refer"],
};
export const cirrhosisDecompensatedVisualTypes = Object.keys(views).map((key) => `cirrhosis-decompensated-${key}`);
export default function CirrhosisDecompensatedVisual({ type }) {
  const key = type.replace("cirrhosis-decompensated-", "");
  const labels = views[key] || views["integrated-case"];
  return <figure className="chol-visual cirrhosis-decompensated-visual" aria-label={`Cirrhosis visual: ${key.replaceAll("-", " ")}`}>
    <div className="chol-visual__copy"><span>Advanced liver disease</span><h3>{key.replaceAll("-", " ")}</h3><p>Follow pressure, fluid, infection, perfusion, cognition, and long-term liver protection as one connected system.</p></div>
    <div className="chol-visual__stage" aria-hidden="true"><svg viewBox="0 0 620 300">
      <defs><radialGradient id={`cirr-${key}`}><stop stopColor="#e7bd79" stopOpacity=".58"/><stop offset="1" stopColor="#702f2d" stopOpacity=".06"/></radialGradient></defs>
      <path d="M196 71 C260 42 382 54 439 113 C470 145 450 214 380 239 C306 265 194 231 169 174 C150 130 157 91 196 71Z" fill={`url(#cirr-${key})`} stroke="#d2a261" strokeOpacity=".42"/>
      <path d="M298 70 C275 105 273 173 303 232 M183 145 C252 127 363 132 439 155" fill="none" stroke="#efcd93" strokeOpacity=".24"/>
      {[0,1,2,3].map((index)=>{const p=[[96,61],[523,61],[96,242],[523,242]][index];return <g key={labels[index]}><path d={`M${p[0]} ${p[1]} Q310 150 310 150`} fill="none" stroke="#c99a62" strokeOpacity=".3"/><circle cx={p[0]} cy={p[1]} r="5" fill={index===0?"#efd19a":"#9f4a43"}/><text x={p[0]} y={p[1]-15} textAnchor="middle" fill="#f3eee6" fontSize="14">{labels[index]}</text></g>})}
    </svg></div>
  </figure>;
}
