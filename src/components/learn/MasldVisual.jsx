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
  const fibrosisViews = {
  "fib4-screening": {
    "eyebrow": "Initial fibrosis assessment",
    "heading": "Calculate, qualify and reassess",
    "nodes": [
      [
        "Calculate",
        "Correct inputs",
        "Use years, U/L and platelets in 10⁹/L."
      ],
      [
        "Qualify",
        "Age and stability",
        "Acute illness limits interpretation."
      ],
      [
        "Refine risk",
        "Secondary assessment",
        "Follow age-appropriate thresholds."
      ],
      [
        "Reassess",
        "Continuing risk",
        "Set follow-up from metabolic risk."
      ]
    ]
  },
  "secondary-assessment": {
    "eyebrow": "Sequential fibrosis assessment",
    "heading": "Measure, reconcile and refer",
    "nodes": [
      [
        "Measure",
        "VCTE or ELF",
        "Choose the test in context."
      ],
      [
        "Check",
        "Reliability and agreement",
        "Stiffness can rise without scar."
      ],
      [
        "Resolve",
        "MRE or selective biopsy",
        "Match the method to uncertainty."
      ],
      [
        "Refer",
        "Persistent or high risk",
        "Connect findings with specialist care."
      ]
    ]
  }
};
  const fibrosisView = fibrosisViews[key];
  if (fibrosisView) return <figure className="chol-visual masld-visual" aria-label={fibrosisView.heading}><figcaption><span>{fibrosisView.eyebrow}</span><strong>{fibrosisView.heading}</strong></figcaption><div className="chol-visual__grid">{fibrosisView.nodes.map(([verb,focus,detail],index)=><div key={verb}><span>{String(index+1).padStart(2,"0")}</span><strong>{verb}</strong><em style={{fontSize:"0.875rem"}}>{focus}</em><p style={{fontSize:"0.875rem"}}>{detail}</p></div>)}</div></figure>;
  const foundationViews = {
  "nomenclature-spectrum": {
    "eyebrow": "Separate clinical dimensions",
    "heading": "Name the phenotype and stage",
    "nodes": [
      [
        "Identify",
        "Steatosis",
        "Establish hepatic fat."
      ],
      [
        "Classify",
        "Metabolic criteria",
        "At least one of five."
      ],
      [
        "Distinguish",
        "Activity and scar",
        "MASH is not a fibrosis stage."
      ],
      [
        "Quantify",
        "Alcohol exposure",
        "Amount and pattern matter."
      ]
    ]
  },
  "pathobiology": {
    "eyebrow": "Interacting mechanisms",
    "heading": "Connect metabolic load to scar",
    "nodes": [
      [
        "Supply",
        "Fatty-acid load",
        "Delivery and synthesis."
      ],
      [
        "Stress",
        "Lipid handling",
        "Storage differs from injury."
      ],
      [
        "Respond",
        "Hepatocytes and immunity",
        "Cell stress drives signaling."
      ],
      [
        "Deposit",
        "Extracellular matrix",
        "Stellate cells form scar."
      ]
    ]
  },
  "risk-secondary-causes": {
    "eyebrow": "Structured initial evaluation",
    "heading": "Confirm, assess and reconcile",
    "nodes": [
      [
        "Confirm",
        "Positive criteria",
        "Steatosis and metabolic risk."
      ],
      [
        "Assess",
        "Whole-patient context",
        "Glucose, lipids and pressure."
      ],
      [
        "Reconcile",
        "Exposure timeline",
        "Alcohol, drugs and supplements."
      ],
      [
        "Investigate",
        "Additional causes",
        "Test according to the phenotype."
      ]
    ]
  }
};
  const foundationView = foundationViews[key];
  if (foundationView) return <figure className="chol-visual masld-visual" aria-label={foundationView.heading}><figcaption><span>{foundationView.eyebrow}</span><strong>{foundationView.heading}</strong></figcaption><div className="chol-visual__grid">{foundationView.nodes.map(([verb,focus,detail],index)=><div key={verb}><span>{String(index+1).padStart(2,"0")}</span><strong>{verb}</strong><em style={{fontSize:"0.875rem"}}>{focus}</em><p style={{fontSize:"0.875rem"}}>{detail}</p></div>)}</div></figure>;
  const lifestyleCardiometabolicViews = {
  "lifestyle": {
    "eyebrow": "Measurable lifestyle therapy",
    "heading": "Plan for benefit and durability",
    "nodes": [
      [
        "Set goals",
        "Name the outcome",
        "Weight targets do not prove scar regression."
      ],
      [
        "Choose",
        "Nutrition and activity",
        "Adapt to needs, ability and preferences."
      ],
      [
        "Address",
        "Alcohol and fibrosis",
        "F2 or greater: complete abstinence."
      ],
      [
        "Support",
        "Continuing follow-up",
        "Build access, behavior and maintenance."
      ]
    ]
  },
  "cardiometabolic-care": {
    "eyebrow": "Coordinated risk reduction",
    "heading": "Match the treatment to the outcome",
    "nodes": [
      [
        "Protect",
        "Cardiovascular health",
        "Use indicated therapy in clinical context."
      ],
      [
        "Match",
        "Product and population",
        "Glucose and organ benefits differ."
      ],
      [
        "Check",
        "Safety and liver stage",
        "Heart failure and cirrhosis change decisions."
      ],
      [
        "Review",
        "Whole-patient response",
        "Connect monitoring and follow-up."
      ]
    ]
  }
};
  const lifestyleCardiometabolicView = lifestyleCardiometabolicViews[key];
  if (lifestyleCardiometabolicView) return <figure className="chol-visual masld-visual" aria-label={lifestyleCardiometabolicView.heading}><figcaption><span>{lifestyleCardiometabolicView.eyebrow}</span><strong>{lifestyleCardiometabolicView.heading}</strong></figcaption><div className="chol-visual__grid">{lifestyleCardiometabolicView.nodes.map(([verb,focus,detail],index)=><div key={verb}><span>{String(index+1).padStart(2,"0")}</span><strong>{verb}</strong><em style={{fontSize:"0.875rem"}}>{focus}</em><p style={{fontSize:"0.875rem"}}>{detail}</p></div>)}</div></figure>;
  const resmetiromView = {
  "eyebrow": "Resmetirom treatment decisions",
  "heading": "Confirm, dose, reconcile, monitor",
  "nodes": [
    [
      "Confirm",
      "Adult noncirrhotic F2-F3 MASH",
      "Continue nutrition and activity."
    ],
    [
      "Dose",
      "Actual weight plus CYP2C8",
      "Clopidogrel changes the daily dose."
    ],
    [
      "Reconcile",
      "Statin limits and full regimen",
      "20 mg or 40 mg limits depend on the statin."
    ],
    [
      "Monitor",
      "Liver and gallbladder safety",
      "Stop or interrupt as the clinical concern requires."
    ]
  ]
};
  if (key === "resmetirom") return <figure className="chol-visual masld-visual" aria-label={resmetiromView.heading}><figcaption><span>{resmetiromView.eyebrow}</span><strong>{resmetiromView.heading}</strong></figcaption><div className="chol-visual__grid">{resmetiromView.nodes.map(([verb,focus,detail],index)=><div key={verb}><span>{String(index+1).padStart(2,"0")}</span><strong>{verb}</strong><em style={{fontSize:"0.875rem"}}>{focus}</em><p style={{fontSize:"0.875rem"}}>{detail}</p></div>)}</div></figure>;
  const semaglutideView = {
  "eyebrow": "Semaglutide for MASH",
  "heading": "Match the product, then plan the course",
  "nodes": [
    [
      "Confirm",
      "Adult noncirrhotic F2-F3 MASH",
      "Use the MASH-specific injection regimen."
    ],
    [
      "Titrate",
      "0.25 to 2.4 mg weekly",
      "Escalate in four-week steps as tolerated."
    ],
    [
      "Counsel",
      "Device, storage, and missed doses",
      "Restart lower after two missed injections."
    ],
    [
      "Monitor",
      "Symptoms and treatment response",
      "Assess safety; one ALT does not establish cure."
    ]
  ]
};
  if (key === "semaglutide") return <figure className="chol-visual masld-visual" aria-label={semaglutideView.heading}><figcaption><span>{semaglutideView.eyebrow}</span><strong>{semaglutideView.heading}</strong></figcaption><div className="chol-visual__grid">{semaglutideView.nodes.map(([verb,focus,detail],index)=><div key={verb}><span>{String(index+1).padStart(2,"0")}</span><strong>{verb}</strong><em style={{fontSize:"0.875rem"}}>{focus}</em><p style={{fontSize:"0.875rem"}}>{detail}</p></div>)}</div></figure>;
  const finalMasldViews = {
  "selection-monitoring": {
    "eyebrow": "Select and monitor",
    "heading": "Eligibility, fit, safety, response",
    "nodes": [
      [
        "Confirm",
        "Adult noncirrhotic F2-F3 MASH",
        "Resolve uncertain stage before prescribing."
      ],
      [
        "Choose",
        "Product and patient fit",
        "Review goals, route, interactions, and access."
      ],
      [
        "Monitor",
        "Product-specific safety",
        "Act on symptoms and concerning results."
      ],
      [
        "Reassess",
        "A pattern over time",
        "ALT alone does not establish histologic cure."
      ]
    ]
  },
  "cirrhosis-boundary": {
    "eyebrow": "Cirrhosis changes care",
    "heading": "Recognize F4 and activate its pathway",
    "nodes": [
      [
        "Recognize",
        "Symptoms may be absent",
        "Interpret clinical, imaging, and fibrosis evidence."
      ],
      [
        "Surveil",
        "Eligible patients: HCC care",
        "Usually ultrasound plus AFP every six months."
      ],
      [
        "Coordinate",
        "Portal risk and complications",
        "Plan specialist care and earlier contact."
      ],
      [
        "Distinguish",
        "Labels and development status",
        "F2-F3 approval does not establish F4 use."
      ]
    ]
  },
  "integrated-case": {
    "eyebrow": "Longitudinal case",
    "heading": "Calculate, assess, reconcile, follow through",
    "nodes": [
      [
        "Calculate",
        "FIB-4 = 1.30",
        "52 x 40 / (200 x square root of 64)."
      ],
      [
        "Assess",
        "Secondary testing or referral",
        "The score does not assign a fibrosis stage."
      ],
      [
        "Reconcile",
        "Exact indication and regimen",
        "Carry interactions, titration, and pending results."
      ],
      [
        "Follow through",
        "Dates and named responsibility",
        "Define earlier contact for concerning changes."
      ]
    ]
  }
};
  const finalMasldView = finalMasldViews[key];
  if (finalMasldView) return <figure className="chol-visual masld-visual" aria-label={finalMasldView.heading}><figcaption><span>{finalMasldView.eyebrow}</span><strong>{finalMasldView.heading}</strong></figcaption><div className="chol-visual__grid">{finalMasldView.nodes.map(([verb,focus,detail],index)=><div key={verb}><span>{String(index+1).padStart(2,"0")}</span><strong>{verb}</strong><em style={{fontSize:"0.875rem"}}>{focus}</em><p style={{fontSize:"0.875rem"}}>{detail}</p></div>)}</div></figure>;
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
