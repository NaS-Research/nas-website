const sets={
  "environment-biology":["Moist soil","Conidia","Lung","Broad-based yeast"],
  "syndromes-sites":["Pulmonary","Skin","Bone","CNS"],
  "diagnosis":["Microscopy","Pathology","Culture","Antigen limits"],
  "mild-treatment":["Itraconazole","Load","TDM","6 to 12 months"],
  "severe-treatment":["Amphotericin","1 to 2 weeks","Improvement","Step-down"],
  "cns-treatment":["L-AmB 5 mg/kg","4 to 6 weeks","CNS azole","At least 12 months"],
  "exposure-safety":["Formulation","Kidney","Liver","Interactions"],
  "special-hosts":["Immune host","Pregnancy","Bone","Surgery"],
  "response-relapse":["Oxygenation","Imaging","Site healing","Surveillance"],
  "integrated-case":["Exposure","Compartment","Therapy","Ownership"],
};
export const blastomycosisVisualTypes=Object.keys(sets).map(k=>`blastomycosis-${k}`);
export default function BlastomycosisVisual({type}){const key=type.replace("blastomycosis-","");const labels=sets[key]||sets["integrated-case"];return <figure className="chol-visual blasto-visual" aria-label={`Blastomycosis visual: ${key.replaceAll("-"," ")}`}><div className="chol-visual__copy"><span>Dimorphic system</span><h3>{key.replaceAll("-"," ")}</h3><p>Follow environmental exposure through tissue morphology, organ spread, treatment phase, and recovery.</p></div><div className="chol-visual__stage" aria-hidden="true"><svg viewBox="0 0 620 300"><defs><radialGradient id={`blasto-${key}`}><stop stopColor="#e9c996"/><stop offset="1" stopColor="#6f422a"/></radialGradient></defs><circle cx="295" cy="150" r="82" fill={`url(#blasto-${key})`} fillOpacity=".45" stroke="#d5a76f" strokeOpacity=".45"/><circle cx="365" cy="137" r="43" fill={`url(#blasto-${key})`} fillOpacity=".38" stroke="#d5a76f" strokeOpacity=".45"/><path d="M340 123 C350 113 362 108 376 110" fill="none" stroke="#f0d5aa" strokeWidth="7" strokeLinecap="round"/><path d="M62 238 C168 182 226 240 320 196 C404 156 477 174 560 108" fill="none" stroke="#a87347" strokeOpacity=".25"/>{labels.map((label,i)=>{const p=[[100,65],[520,65],[100,235],[520,235]][i];return <g key={label}><line x1={p[0]} y1={p[1]} x2={i%2===0?260:375} y2={i<2?122:180} stroke="#c9975b" strokeOpacity=".3"/><circle cx={p[0]} cy={p[1]} r="6" fill={i===0?"#efcf9a":"#945b38"}/><text x={p[0]} y={p[1]-16} textAnchor="middle" fill="#f3eee6" fontSize="14">{label}</text></g>})}</svg></div></figure>}
