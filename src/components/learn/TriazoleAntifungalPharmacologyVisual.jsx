export const triazoleAntifungalPharmacologyVisualTypes=["azole-target-sar","spectrum-clinical-role","fluconazole-exposure","itraconazole-formulations","voriconazole-precision","posaconazole-delivery","isavuconazole-system","interactions-electrophysiology","tdm-organ-monitoring","integration-transition"].map((type)=>`triazole-antifungal-${type}`);

const diagrams={
  "azole-target-sar":["Interrupt ergosterol synthesis","Azole nitrogen","CYP51 target","Sterol change","Membrane effects"],
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

const posaconazoleSteps=[
  ["Name the exact product","Verify indication, age, weight, and dosage form before selecting the regimen."],
  ["Follow product instructions","Swallow tablets whole; use the conventional suspension meal plan or PowderMix food and kit instructions."],
  ["Review intake and interactions","Severe diarrhea or vomiting and suspension NG-tube delivery warrant breakthrough monitoring."],
  ["Monitor blood pressure and potassium","Review new hypertension or hypokalemia and correct electrolyte disturbances."]
];

const itraconazoleSteps=[["Verify the exact formulation","Conventional capsule, solution and TOLSURA have distinct strengths, indications and regimens."],["Write food and pH instructions","Use the full-meal capsule rule, solution without food when possible, or TOLSURA food and interaction plan."],["Identify the reported analyte","Parent itraconazole and metabolite-sensitive measurements are different quantities; keep assay context visible."],["Act on heart-failure symptoms","Promptly assess edema, dyspnea or sudden weight gain and apply the exact product warning."]];

const voriconazoleSteps=[["Adjust incrementally","Adult saturable metabolism can produce a disproportionate exposure rise; review dosing before an individualized change."],["Interpret the sample","Verify concentration timing, actual administration, interactions and clinical response before acting on a result."],["Assess the individual","Use available CYP2C19 information with measured exposure; demographic categories alone do not assign metabolism."],["Reassess safety over time","Evaluate visual or CNS changes promptly; longer treatment requires skin, vision, bone-symptom and continuing-need review."]];

const fluconazoleSteps=[["Verify oral delivery","High intrinsic bioavailability does not overcome vomiting, missed doses or inability to swallow."],["Separate loading and maintenance","Preserve the infection-specific initial exposure plan; assess ongoing clearance separately."],["Review renal function and dialysis","Repeated maintenance dosing and dialysis timing need product- and indication-specific review."],["Confirm organism and transition readiness","For candidemia step-down, verify stability, a susceptible isolate, negative repeat cultures and reliable oral delivery."]];

const isavuconazoleSteps=[["State the mass convention","372 mg isavuconazonium sulfate is equivalent to 200 mg active isavuconazole; identify which amount the order uses."],["Verify the adult load","Confirm six doses every eight hours; start maintenance 12 to 24 hours after the last loading dose."],["Preserve the route-switch schedule","IV and oral formulations are bioequivalent; a verified switch does not automatically restart loading."],["Check QT and other safety risks","Familial short QT syndrome is contraindicated; review interacting medicines, liver status and the clinical indication."]];

const monitoringSteps=[["Define an actionable question", "Identify the agent, product and a relevant exposure, efficacy or toxicity concern."], ["Document dosing and sampling", "Record actual administration, last dose, sample time and steady-state context."], ["Interpret with the clinical picture", "Use the appropriate assay and agent-specific target with response, adverse effects and interactions."], ["Assign the next action", "Reassess delivery or treatment as indicated and specify follow-up ownership."]];

const interactionSteps=[["Check both medicines", "Identify how the triazole and co-medication can change each other\u2019s exposure."], ["Apply the exact restriction", "Distinguish contraindication, avoidance and a product-specific monitored plan."], ["Reassess at discontinuation", "Previously reduced substrates may need concentration-guided dose reassessment."], ["Assign follow-up ownership", "Document who reviews levels, symptoms and the next dose or monitoring change."]];

const spectrumSteps=[["Identify the fungus", "Use organism and syndrome evidence rather than the shared azole name."], ["Check site-specific delivery", "In vitro activity does not establish clinical exposure in every compartment."], ["Name the disease phase", "Verify treatment, prophylaxis or transition requirements for the actual syndrome."], ["Assess host and product", "Check patient risks, feasible formulation and the exact safety restrictions."]];

const integrationSteps=[["Verify the clinical baseline", "Confirm syndrome, organism, site, source and the exact product plan."], ["Protect delivery", "Review actual administration, adherence and interacting medicines."], ["Reassess response and safety", "Evaluate symptoms and appropriate exposure evidence; breakthrough needs prompt clinical review."], ["Secure the transition", "Apply syndrome-specific readiness criteria and assign follow-up responsibility."]];

const sarSteps=[["Identify nitrogen-heme binding", "The deposited posaconazole-Candida CYP51 complex provides one compound-specific example."], ["Locate the sterol target", "CYP51 inhibition changes sterol synthesis; it is not direct ergosterol binding."], ["Follow the membrane effect", "Reduced ergosterol and accumulated methylated precursors alter the fungal membrane."], ["Keep clinical interpretation separate", "Shared target binding does not guarantee coverage, host CYP safety or the cause of failure."]];

export default function TriazoleAntifungalPharmacologyVisual({type}){
  const data=diagrams[type.replace("triazole-antifungal-","")];
  if(!data)return null;
  const productSteps=type==="triazole-antifungal-posaconazole-delivery"?posaconazoleSteps:type==="triazole-antifungal-itraconazole-formulations"?itraconazoleSteps:type==="triazole-antifungal-voriconazole-precision"?voriconazoleSteps:type==="triazole-antifungal-fluconazole-exposure"?fluconazoleSteps:type==="triazole-antifungal-isavuconazole-system"?isavuconazoleSteps:type==="triazole-antifungal-tdm-organ-monitoring"?monitoringSteps:type==="triazole-antifungal-interactions-electrophysiology"?interactionSteps:type==="triazole-antifungal-spectrum-clinical-role"?spectrumSteps:type==="triazole-antifungal-integration-transition"?integrationSteps:type==="triazole-antifungal-azole-target-sar"?sarSteps:null;
  return <figure className="chol-visual triazole-antifungal-visual" aria-label={data[0]}>
    <figcaption><span>{type==="triazole-antifungal-azole-target-sar"?"Conceptual target map":"Systemic azole map"}</span><strong>{data[0]}</strong></figcaption>
    <div className="chol-visual__grid">
      {data.slice(1).map((label,index)=><div key={label}><span>{String(index+1).padStart(2,"0")}</span><strong>{label}</strong><em>{productSteps?productSteps[index][0]:notes[index]}</em><p>{productSteps?productSteps[index][1]:"Keep target, formulation, exposure, organism, toxicity, and ownership connected."}</p></div>)}
    </div>
  </figure>;
}
