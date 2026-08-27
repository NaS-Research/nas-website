export const triazoleAntifungalPharmacologyVisualTypes=["azole-target-sar","spectrum-clinical-role","fluconazole-exposure","itraconazole-formulations","voriconazole-precision","posaconazole-delivery","isavuconazole-system","interactions-electrophysiology","tdm-organ-monitoring","integration-transition"].map((type)=>`triazole-antifungal-${type}`);

const diagrams={
  "azole-target-sar":["Interrupt ergosterol synthesis","Azole ring","CYP51 heme","Sterol shift","Membrane failure"],
  "spectrum-clinical-role":["Define the antifungal role","Organism","Site","Disease phase","Host"],
  "fluconazole-exposure":["Preserve reliable exposure","Oral access","Loading","Renal maintenance","Susceptibility"],
  "itraconazole-formulations":["Treat formulation as the drug","Product","Food and pH","Concentration","Cardiac safety"],
  "voriconazole-precision":["Control nonlinear variability","Dose","Trough","CYP2C19","Toxicity"],
  "posaconazole-delivery":["Choose product before dose","Formulation","Administration","Exposure","Electrolytes"],
  "isavuconazole-system":["Translate prodrug to active exposure","Prodrug mass","Loading","Route switch","QT direction"],
  "interactions-electrophysiology":["Own the interaction lifecycle","Start","Steady state","Stop","Follow-up"],
  "tdm-organ-monitoring":["Measure only with an action","Question","Timing","Result","Response"],
  "integration-transition":["Close the triazole loop","Verify","Deliver","Monitor","Transition"]
};

const notes=["Define the input","Protect the conversion","Measure the state","Own the next action"];

export default function TriazoleAntifungalPharmacologyVisual({type}){
  const data=diagrams[type.replace("triazole-antifungal-","")];
  if(!data)return null;
  return <figure className="chol-visual triazole-antifungal-visual" aria-label={data[0]}>
    <figcaption><span>Systemic azole map</span><strong>{data[0]}</strong></figcaption>
    <div className="chol-visual__grid">
      {data.slice(1).map((label,index)=><div key={label}><span>{String(index+1).padStart(2,"0")}</span><strong>{label}</strong><em>{notes[index]}</em><p>Keep target, formulation, exposure, organism, toxicity, and ownership connected.</p></div>)}
    </div>
  </figure>;
}
