const diagrams = {
  "pah-hemodynamics": { accent: "#71a7b7", eyebrow: "Pressure and flow", title: "Classify the circuit before naming the disease", columns: [["Pressure", "mPAP above 20", "Confirms pulmonary hypertension by right-heart catheterization"], ["Wedge", "PAWP at or below 15", "Supports a precapillary rather than left-sided filling pattern"], ["Resistance", "PVR above 2 WU", "Shows a pathologic pressure cost for each unit of pulmonary flow"]] },
  "pah-diagnosis": { accent: "#8f9ebc", eyebrow: "Diagnostic sequence", title: "Suspect, detect, confirm, and phenotype", columns: [["Suspect", "Clinical signal", "Dyspnea, syncope, right-heart findings, or a high-risk condition"], ["Detect", "Echo probability", "Velocity plus right-heart, septal, arterial, and venous signs"], ["Confirm", "Complete RHC", "Pressure, wedge, output, resistance, saturation, and cause"]] },
  "pah-risk": { accent: "#c59c70", eyebrow: "Right-heart reserve", title: "Risk emerges from several converging signals", columns: [["Function", "WHO class and walk", "Symptoms and exercise reveal daily reserve"], ["Stress", "BNP or NT-proBNP", "Myocardial strain adds biologic trajectory"], ["Flow", "RV and hemodynamics", "Imaging and output show compensation or failure"]] },
  "pah-pharmacology": { accent: "#8cad93", eyebrow: "Four pathways", title: "Reduce tone, oppose growth, and restore balance", columns: [["Dilate", "NO and prostacyclin", "Increase cyclic signaling through PDE5, sGC, or IP pathways"], ["Block", "Endothelin", "Reduce a potent vasoconstrictive and proliferative signal"], ["Rebalance", "Activin signaling", "Sotatercept modifies a remodeling pathway beyond vasodilation"]] },
  "pah-strategy": { accent: "#d1ae68", eyebrow: "Risk-directed care", title: "Intensity follows the right ventricle, not pressure alone", columns: [["Low or intermediate", "Initial dual oral", "ERA plus PDE5 inhibition for many patients without major comorbidity"], ["High", "Parenteral pathway", "Bring intravenous or subcutaneous prostacyclin forward"], ["Follow-up", "Escalate to low risk", "Add pathways, consider sotatercept, and refer for transplant early"]] },
  "pah-special": { accent: "#c87972", eyebrow: "High-consequence exceptions", title: "Recognize the phenotype that changes the plan", columns: [["Responder", "Vasoreactivity", "Only selected positive patients receive high-dose calcium channel blockade"], ["Vulnerable", "Pregnancy or PVOD", "Prevent fetal exposure and recognize vasodilator-associated pulmonary edema"], ["Unstable", "Right-heart failure", "Restore perfusion, treat triggers, and escalate through an expert center"]] },
};

export default function PulmonaryArterialHypertensionVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  return <figure className="chol-visual" style={{ "--chol-accent": diagram.accent }} aria-label={diagram.title}>
    <figcaption><span>{diagram.eyebrow}</span><strong>{diagram.title}</strong></figcaption>
    <div className="chol-visual__grid">{diagram.columns.map(([name, mechanism, explanation], index) => <div key={name}>
      <span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><em>{mechanism}</em><p>{explanation}</p>
    </div>)}</div>
  </figure>;
}
