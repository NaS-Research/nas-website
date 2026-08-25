const diagrams = {
  "htn-measurement": { eyebrow: "Measurement", title: "Diagnosis begins with a standardized average, not one number.", accent: "#7ca7bc", columns: [["Prepare", "Rest + posture + no talking", "Remove predictable measurement bias"], ["Fit", "Validated upper-arm cuff", "Correct bladder and arm position"], ["Repeat", "Multiple readings", "Average across occasions or home data"], ["Confirm", "Outside office when needed", "Detect white-coat and masked patterns"]] },
  "htn-risk-goal": { eyebrow: "Risk and goal", title: "Pressure, disease, and PREVENT risk define treatment intensity.", accent: "#c28770", columns: [["Classify", "Average BP", "Normal, elevated, stage 1, stage 2"], ["Risk", "CVD + CKD + diabetes", "PREVENT adds primary-prevention context"], ["Goal", "Generally below 130/80", "Individual considerations still matter"], ["Reassess", "Response + tolerance", "Goal is not safe if perfusion fails"]] },
  "htn-lifestyle": { eyebrow: "Foundational treatment", title: "Lifestyle changes are active therapies with measurable doses.", accent: "#8fa57c", columns: [["Pattern", "DASH-like eating", "Food quality, fiber, and minerals"], ["Sodium", "Reduce excess", "Response varies with baseline intake"], ["Activity", "Aerobic + resistance", "Progress gradually and sustain"], ["Context", "Weight + alcohol + sleep", "Address stress and structural barriers"]] },
  "htn-first-line": { eyebrow: "First-line selection", title: "Use thiazide-like, ACEi or ARB, and long-acting CCB pathways deliberately.", accent: "#c2a061", columns: [["Thiazide-like", "NCC + vascular adaptation", "Sodium, potassium, urate, glucose"], ["ACEi or ARB", "RAAS interruption", "Potassium, creatinine, pregnancy"], ["DHP CCB", "Arteriolar calcium block", "Edema, headache, gingiva"], ["Choose", "Comorbidity + evidence", "Product, dose, access, and monitoring"]] },
  "htn-combination": { eyebrow: "Combination strategy", title: "Complementary mechanisms control pressure with less inertia.", accent: "#9b8dbb", columns: [["Stage 2", "Two first-line agents", "Single-pill combination preferred"], ["Complement", "RAAS + CCB or thiazide", "Different pathways and adverse effects"], ["Avoid", "ACEi + ARB + renin inhibitor", "No dual RAAS blockade in CKD"], ["Comorbidity", "Albuminuria, CAD, HF, pregnancy", "Evidence changes the preferred product"]] },
  "htn-monitoring": { eyebrow: "Longitudinal control", title: "Home averages, labs, symptoms, access, and team care sustain control.", accent: "#c77c6e", columns: [["Home", "Validated cuff + protocol", "Average, do not chase each reading"], ["Labs", "Class-specific", "Potassium, sodium, kidney function"], ["Adherence", "Access + burden + belief", "Ask without blame"], ["Team", "Pharmacist + clinician + community", "Titrate with shared protocol"]] },
};

export default function HypertensionFoundationsVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  return <figure className="chol-visual" style={{ "--chol-accent": diagram.accent }} aria-label={diagram.title}>
    <figcaption><span>{diagram.eyebrow}</span><strong>{diagram.title}</strong></figcaption>
    <div className="chol-visual__grid">{diagram.columns.map(([name, action, detail], index) => <div key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><em>{action}</em><p>{detail}</p></div>)}</div>
  </figure>;
}
