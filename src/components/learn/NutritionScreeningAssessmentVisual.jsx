export const nutritionScreeningAssessmentVisualTypes = [
  "nutrition-screening-flow",
  "nutrition-history-trajectory",
  "nutrition-anthropometrics",
  "nutrition-physical-function",
  "nutrition-diagnostic-frameworks",
  "nutrition-care-loop",
];

const diagrams = {
  "nutrition-screening-flow": {
    eyebrow: "Clinical workflow", title: "Risk identification becomes useful only when the loop closes", accent: "#d6ac73",
    columns: [["Screen", "Identify current risk", "Use a validated tool that fits the population and care setting."], ["Assess", "Explain the problem", "Reconstruct intake, trajectory, tissue, function, disease, and confounders."], ["Act", "Assign the next decision", "Document referral, intervention, reassessment interval, and ownership."]],
  },
  "nutrition-history-trajectory": {
    eyebrow: "Clinical trajectory", title: "Magnitude, duration, and mechanism turn history into evidence", accent: "#aa8b79",
    columns: [["Measure", "Quantify change", "Compare usual and current intake, weight, symptoms, and function over a defined interval."], ["Explain", "Locate the mechanism", "Separate access, appetite, swallowing, absorption, losses, inflammation, and demand."], ["Context", "Expose confounders", "Review medicines, fluid shifts, procedures, anatomy, mood, and social conditions."]],
  },
  "nutrition-anthropometrics": {
    eyebrow: "Body measurement", title: "The number is interpretable only when its conditions are visible", accent: "#7f9fa4",
    columns: [["Baseline", "Choose a credible comparator", "Record whether prior height and weight were measured, reported, or estimated."], ["Calculate", "Show the equation", "Percent loss uses usual weight; BMI uses kilograms divided by meters squared."], ["Correct", "Account for hidden tissue loss", "Edema, ascites, obesity, amputation, and measurement conditions can distort inference."]],
  },
  "nutrition-physical-function": {
    eyebrow: "Bedside evidence", title: "Name the tissue, the site, the degree, and the competing cause", accent: "#9c867a",
    columns: [["Inspect", "Fat and muscle compartments", "Use defined bilateral sites and compare with age, habitus, mobility, and prior function."], ["Separate", "Fluid from tissue", "Edema and ascites can conceal depletion and should be documented as distinct findings."], ["Test", "Use function in context", "Grip, transfers, and mobility support assessment but remain sensitive to pain and illness."]],
  },
  "nutrition-diagnostic-frameworks": {
    eyebrow: "Diagnostic reasoning", title: "Use one framework transparently instead of blending unrelated thresholds", accent: "#9b8cad",
    columns: [["GLIM", "Phenotype plus etiology", "Diagnosis follows screening and requires evidence from both sides of the framework."], ["Academy and ASPEN", "Two clinical characteristics", "Interpret intake, weight, muscle, fat, fluid, and function within the etiologic context."], ["Exclude", "Do not diagnose from albumin", "Inflammation and fluid biology make visceral proteins risk markers, not tissue inventories."]],
  },
  "nutrition-care-loop": {
    eyebrow: "Implementation", title: "Every intervention needs a measure, interval, threshold, and owner", accent: "#89a083",
    columns: [["Prioritize", "Treat the causal barrier", "Address swallowing, symptoms, medicines, access, restriction, and disease burden."], ["Monitor", "Pair benefit with safety", "Track intake, weight, volume, function, symptoms, laboratories, and refeeding risk."], ["Revise", "Close the decision loop", "State what success means, when to reassess, what triggers escalation, and who acts."]],
  },
};

export default function NutritionScreeningAssessmentVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  return <figure className="chol-visual nutrition-screening-visual" style={{ "--chol-accent": diagram.accent }} aria-label={diagram.title}>
    <figcaption><span>{diagram.eyebrow}</span><strong>{diagram.title}</strong></figcaption>
    <div className="chol-visual__grid">{diagram.columns.map(([name, action, detail], index) => <div key={`${name}-${action}`}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><em>{action}</em><p>{detail}</p></div>)}</div>
  </figure>;
}
