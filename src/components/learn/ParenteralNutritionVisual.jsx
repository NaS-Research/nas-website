const diagrams = {
  "pn-decision": {
    eyebrow: "Route threshold",
    title: "Need plus an unusable gut.",
    columns: [
      ["01", "Need", "Oral and enteral intake cannot meet the clinical target"],
      ["02", "Function", "Digestion, absorption, or intestinal access is inadequate"],
      ["03", "Timing", "Nutrition risk and expected duration justify intravenous support"],
      ["04", "Readiness", "Hemodynamics and metabolic abnormalities can be managed safely"],
    ],
  },
  "venous-access": {
    eyebrow: "Access architecture",
    title: "Concentration determines the route.",
    columns: [
      ["Peripheral", "Short bridge", "Lower osmolarity, larger volume, frequent site review"],
      ["PICC", "Intermediate access", "Central tip with insertion and thrombosis considerations"],
      ["Tunneled", "Long horizon", "Durable external access for selected home therapy"],
      ["Port", "Implanted access", "Intermittent access with needle and care requirements"],
    ],
  },
  "macronutrient-design": {
    eyebrow: "Prescription engine",
    title: "Protein first, then safe energy.",
    columns: [
      ["AA", "4 kcal per gram", "Match protein to illness, losses, organ support, and goals"],
      ["Dextrose", "3.4 kcal per gram", "Check glucose infusion rate and glycemic tolerance"],
      ["Lipid", "Product specific", "Account for essential fatty acids and non-PN calories"],
      ["Volume", "All sources", "Fit the nutrient plan inside the fluid prescription"],
    ],
  },
  "micronutrient-balance": {
    eyebrow: "Daily balance",
    title: "Replace what the patient loses.",
    columns: [
      ["Electrolytes", "Trend and context", "Kidney function, acid base state, losses, and medicines"],
      ["Vitamins", "Daily provision", "Use an age-appropriate complete parenteral product when available"],
      ["Trace elements", "Adjust selectively", "Cholestasis, kidney failure, wounds, diarrhea, and duration matter"],
      ["Shortages", "Protect essentials", "Use current ASPEN and ASHP guidance, not a permanent workaround"],
    ],
  },
  "compounding-safety": {
    eyebrow: "Compatibility chain",
    title: "Every ingredient changes the system.",
    columns: [
      ["Order", "Independent review", "Dose, units, route, sequence, allergies, and clinical fit"],
      ["Admix", "Validated limits", "Product-specific calcium, phosphate, pH, and emulsion compatibility"],
      ["Inspect", "Before release", "Particles, precipitate, oiling, leakage, label, and final composition"],
      ["Filter", "1.2 micron", "Current ASPEN recommendation for all PN formulations"],
    ],
  },
  "monitoring-transition": {
    eyebrow: "Closed loop",
    title: "Prescribe, observe, revise, transition.",
    columns: [
      ["Early", "Glucose and shifts", "Watch phosphate, potassium, magnesium, fluid, and glycemia"],
      ["Ongoing", "Efficacy and toxicity", "Weight, intake, output, liver, kidney, triglycerides, and line"],
      ["Cycle", "Patient specific", "Change hourly exposure carefully and monitor starts and stops"],
      ["Transition", "Use the gut", "Reduce PN as oral or enteral delivery becomes reliable"],
    ],
  },
};

export default function ParenteralNutritionVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;

  return (
    <figure className={`pn-visual pn-visual--${type}`} aria-label={diagram.title}>
      <figcaption><span>{diagram.eyebrow}</span><strong>{diagram.title}</strong></figcaption>
      <div className="pn-visual__flow">
        {diagram.columns.map(([index, heading, detail], itemIndex) => (
          <div className="pn-visual__step" key={heading}>
            <span>{index}</span>
            <strong>{heading}</strong>
            <p>{detail}</p>
            {itemIndex < diagram.columns.length - 1 && <i aria-hidden="true">→</i>}
          </div>
        ))}
      </div>
    </figure>
  );
}
