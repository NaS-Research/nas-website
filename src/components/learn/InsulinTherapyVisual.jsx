const diagrams = {
  "insulin-physiology": ["Regimen architecture", "Recreate the physiologic signal", ["Basal", "Between meals", "Restrain hepatic glucose output"], ["Prandial", "Nutrient exposure", "Match food, timing, and active insulin"], ["Correction", "Above target", "Return glucose without stacking"]],
  "insulin-profiles": ["Time-action profile", "Choose the curve that fits the job", ["Fast", "Meal insulin", "Rapid, ultra-rapid, regular, or inhaled"], ["Background", "Basal insulin", "NPH, long acting, or ultra-long acting"], ["Concentrated", "Dose and device", "Verify U-100, U-200, U-300, or U-500"]],
  "insulin-calculations": ["Dose mathematics", "Estimate, calculate, then validate", ["TDD", "Weight and context", "Create a cautious starting estimate"], ["Bolus", "Carbohydrate and correction", "Account for food, target, and active insulin"], ["Supply", "Units and containers", "Calculate total need and round containers up"]],
  "insulin-type1": ["Continuous replacement", "Protect basal, then shape each bolus", ["Always", "Basal continuity", "Prevent fasting and pump-interruption ketosis"], ["Meals", "Carbohydrate coverage", "Adjust for food, trend, activity, and timing"], ["Patterns", "Component adjustment", "Change the dose that explains the pattern"]],
  "insulin-basal": ["Basal initiation", "Control fasting glucose without overbasalization", ["Start", "Conservative estimate", "Use weight, severity, and current therapy"], ["Titrate", "Fasting pattern", "Review several days and nocturnal safety"], ["Stop escalating", "Prandial problem", "Fasting at goal redirects the plan"]],
  "insulin-intensification": ["Treatment expansion", "Match complexity to the glucose pattern", ["Basal plus", "Largest excursion", "Add one targeted meal dose"], ["Basal-bolus", "Maximum flexibility", "Adjust meals independently"], ["Premixed", "Lower decision burden", "Accept fixed proportions and meal regularity"]],
  "insulin-devices": ["Delivery ecosystem", "Technology works through training and backup", ["Deliver", "Pen or pump", "Match device to skill, preference, and access"], ["Sense", "CGM", "Use trend and pattern data"], ["Automate", "AID plus backup", "Understand settings, failure, ketones, and injections"]],
  "insulin-administration": ["Dose integrity", "Protect the medicine from pen to tissue", ["Prepare", "Prime and verify", "Product, concentration, units, and device"], ["Inject", "Healthy tissue", "Rotate sites and avoid lipohypertrophy"], ["Store", "Product-specific stability", "Track open date, temperature, and discard date"]],
  "insulin-safety": ["Safety network", "Prevent lows without permitting ketosis", ["Recognize", "Glucose and symptoms", "Confirm, treat, and find the cause"], ["Rescue", "Glucagon", "Keep ready-to-use rescue with trained supporters"], ["Adapt", "Exercise and illness", "Change monitoring, food, and insulin deliberately"]],
  "insulin-transitions": ["Care transitions", "Reconcile physiology, nutrition, and every device", ["Hospital", "Scheduled coverage", "Basal, prandial, and individualized correction"], ["Procedure", "Fasting plan", "Preserve basal and prevent duplicate dosing"], ["Discharge", "Product-level reconciliation", "Insulin, concentration, supplies, rescue, and follow-up"]],
};

export default function InsulinTherapyVisual({ type }) {
  const item = diagrams[type];
  if (!item) return null;
  const [eyebrow, title, ...columns] = item;
  return <figure className="chol-visual" aria-label={title}>
    <figcaption><span>{eyebrow}</span><strong>{title}</strong></figcaption>
    <div className="chol-visual__flow">{columns.map(([name, focus, detail], index) => <div className="chol-visual__node" key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><em>{focus}</em><p>{detail}</p></div>)}</div>
  </figure>;
}
