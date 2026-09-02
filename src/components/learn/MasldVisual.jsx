const views={
  "nomenclature-spectrum":["Steatosis","MASH","F2 to F3","Cirrhosis"],
  pathobiology:["Insulin resistance","Lipotoxicity","Inflammation","Fibrosis"],
  "risk-secondary-causes":["Metabolic risk","Alcohol","Medicines","Other disease"],
  "fib4-screening":["Age and AST","ALT","Platelets","Risk gate"],
  "secondary-assessment":["FIB-4","VCTE or ELF","MRE","Selective biopsy"],
  lifestyle:["Nutrition","Activity","Weight","Maintenance"],
  "cardiometabolic-care":["ASCVD","Diabetes","Obesity","Sleep"],
  resmetirom:["THR-beta","Hepatic fat","F2 to F3","Safety"],
  semaglutide:["GLP-1","Titration","2.4 mg weekly","Safety"],
  "selection-monitoring":["Confirm stage","Match phenotype","Measure baseline","Follow response"],
  "cirrhosis-boundary":["F4","Portal pressure","HCC surveillance","Specialist care"],
  "integrated-case":["Phenotype","Stage","Treat","Close the loop"],
};
export const masldVisualTypes=Object.keys(views).map((key)=>`masld-${key}`);
export default function MasldVisual({type}){
  const key=type.replace("masld-","");
  const labels=views[key]||views["integrated-case"];
  return <figure className="chol-visual masld-visual" aria-label={`MASLD visual: ${key.replaceAll("-"," ")}`}>
    <div className="chol-visual__copy"><span>Metabolic liver disease</span><h3>{key.replaceAll("-"," ")}</h3><p>Connect metabolic load, liver injury, fibrosis risk, and treatment as one changing trajectory.</p></div>
    <div className="chol-visual__stage" aria-hidden="true"><svg viewBox="0 0 620 300">
      <defs><linearGradient id={`masld-${key}`} x1="0" x2="1"><stop stopColor="#e6bd78" stopOpacity=".74"/><stop offset=".52" stopColor="#a86638" stopOpacity=".52"/><stop offset="1" stopColor="#63312c" stopOpacity=".3"/></linearGradient></defs>
      <path d="M180 80 C234 36 379 43 451 92 C480 112 488 151 463 180 C425 225 336 245 230 229 C178 221 143 190 144 145 C145 118 156 96 180 80Z" fill={`url(#masld-${key})`} stroke="#e5bf83" strokeOpacity=".42"/>
      <path d="M317 61 C296 100 298 164 328 229 M159 150 C238 128 375 132 468 158" fill="none" stroke="#f2d39f" strokeOpacity=".22"/>
      {labels.map((label,index)=>{const p=[[88,54],[532,54],[88,250],[532,250]][index];const target=[[218,112],[389,105],[225,190],[396,188]][index];return <g key={label}><path d={`M${p[0]} ${p[1]} L${target[0]} ${target[1]}`} fill="none" stroke="#d1a36b" strokeOpacity=".45"/><circle cx={target[0]} cy={target[1]} r="6" fill={index<2?"#efc887":"#9b4e3b"}/><text x={p[0]} y={p[1]-12} textAnchor="middle" fill="#f5efe5" fontSize="14">{label}</text></g>})}
    </svg></div>
  </figure>;
}
