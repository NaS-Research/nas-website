const diagrams = {
  "ckd-definition": { accent: "#bb8d63", eyebrow: "Diagnostic frame", title: "Abnormality plus time plus health impact", columns: [["Abnormality", "Structure or function", "eGFR, albumin, sediment, imaging, histology, transplant"], ["Chronicity", "At least 3 months", "Prior records, repeat testing, imaging, or pathology"], ["Cause", "Explain the phenotype", "History, urine, serology, imaging, genetics, or biopsy"]] },
  "ckd-cga": { accent: "#d0a86f", eyebrow: "CGA map", title: "Three dimensions, one risk profile", columns: [["C", "Cause", "Diabetic, vascular, glomerular, inherited, obstructive, or other"], ["G", "GFR category", "G1 through G5 describe filtration severity"], ["A", "Albuminuria category", "A1 through A3 add independent prognostic information"]] },
  "ckd-risk": { accent: "#c5a37b", eyebrow: "Longitudinal risk", title: "Status, trajectory, and probability", columns: [["Status", "CGA today", "Defines the current kidney phenotype"], ["Trajectory", "Slope over time", "Separates stable disease from sustained progression"], ["Probability", "KFRE", "Connects absolute kidney failure risk to action"]] },
  "ckd-foundations": { accent: "#d6b57b", eyebrow: "Protection layer", title: "Reduce pressure on the nephron and the person", columns: [["Hemodynamics", "Pressure and RAAS", "Standardized measurement and tolerated blockade"], ["Behavior", "Sodium, activity, tobacco", "A feasible plan that preserves nutrition"], ["Cardiovascular", "Lipids and comorbidity", "Treat the competing risk, not creatinine alone"]] },
  "ckd-therapy": { accent: "#d6a35d", eyebrow: "Disease modification", title: "Layer complementary mechanisms", columns: [["RAAS", "Lower intraglomerular pressure", "ACE inhibitor or ARB for the indicated phenotype"], ["SGLT2", "Tubuloglomerular signaling", "Kidney and heart benefit beyond glycemia"], ["Additions", "MRA and GLP-1", "Select by diabetes, albuminuria, potassium, and cardiovascular need"]] },
  "ckd-stewardship": { accent: "#ae9276", eyebrow: "Medication system", title: "Estimate, prescribe, monitor, close the loop", columns: [["Estimate", "Use the required metric", "Verify eGFR, creatinine clearance, stability, and context"], ["Prescribe", "Dose for the goal", "Balance exposure, benefit, toxicity, and alternatives"], ["Follow", "Name the owner", "Set timing, thresholds, hold and restart criteria"]] },
};

export default function ChronicKidneyDiseaseVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  return <figure className="chol-visual" style={{ "--chol-accent": diagram.accent }} aria-label={diagram.title}>
    <figcaption><span>{diagram.eyebrow}</span><strong>{diagram.title}</strong></figcaption>
    <div className="chol-visual__grid">{diagram.columns.map(([name, mechanism, explanation], index) => <div key={name}>
      <span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><em>{mechanism}</em><p>{explanation}</p>
    </div>)}</div>
  </figure>;
}
