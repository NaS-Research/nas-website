const nodes = {
  "enteral-decision": {
    eyebrow: "Route decision",
    title: "Need, gut, perfusion, route.",
    items: [
      ["01", "Need", "Oral intake cannot safely meet the target"],
      ["02", "Gut", "Digestion and absorption are usable"],
      ["03", "Perfusion", "Resuscitation is complete and stable"],
      ["04", "Route", "Choose oral, gastric, or postpyloric delivery"],
    ],
  },
  "access-route": {
    eyebrow: "Access map",
    title: "Choose the tip before the tube.",
    items: [
      ["Nasal", "Shorter course", "Gastric or postpyloric"],
      ["Gastric", "Reservoir", "Bolus, intermittent, continuous"],
      ["Postpyloric", "Bypass", "Controlled small bowel delivery"],
      ["Percutaneous", "Longer support", "Gastrostomy or jejunostomy"],
    ],
  },
  "delivery-prescription": {
    eyebrow: "Delivery engine",
    title: "Rate is only half the order.",
    items: [
      ["Volume", "Daily target", "What must reach the patient"],
      ["Rate", "mL per hour", "Volume divided by running hours"],
      ["Schedule", "Hours on", "Continuous, cyclic, intermittent, bolus"],
      ["Audit", "Actually delivered", "Account for every interruption"],
    ],
  },
  "formula-selection": {
    eyebrow: "Formula logic",
    title: "Composition follows physiology.",
    items: [
      ["Intact", "Polymeric", "Use when digestion and absorption work"],
      ["Hydrolyzed", "Peptide based", "Use for a defined absorption problem"],
      ["Density", "Energy per mL", "Trade volume for free water"],
      ["Water", "Total sources", "Formula plus flushes plus other intake"],
    ],
  },
  "medication-administration": {
    eyebrow: "Medication sequence",
    title: "Review, separate, flush, verify.",
    items: [
      ["Review", "Dosage form", "Crushability, release, hazard"],
      ["Verify", "Tube tip", "Gastric conditions and absorption site"],
      ["Separate", "One drug at a time", "Never mix into formula"],
      ["Flush", "Before, between, after", "Protect dose and tube patency"],
    ],
  },
  "monitoring-complications": {
    eyebrow: "Tolerance matrix",
    title: "Find the system that failed.",
    items: [
      ["GI", "Pain, stool, emesis", "Assess rate, disease, infection, drugs"],
      ["Metabolic", "Glucose and electrolytes", "Watch refeeding and hydration"],
      ["Mechanical", "Position and patency", "Migration, clogging, leakage"],
      ["Delivery", "Ordered versus received", "Audit holds, pump, preparation"],
    ],
  },
};

export default function EnteralNutritionVisual({ type }) {
  const visual = nodes[type];
  if (!visual) return null;

  return (
    <figure className={`enteral-visual enteral-visual--${type}`} aria-label={visual.title}>
      <figcaption>
        <span>{visual.eyebrow}</span>
        <strong>{visual.title}</strong>
      </figcaption>
      <div className="enteral-visual__rail" aria-hidden="true" />
      <div className="enteral-visual__grid">
        {visual.items.map(([index, heading, detail], itemIndex) => (
          <div className="enteral-visual__node" key={heading}>
            <span className="enteral-visual__index">{index}</span>
            <div>
              <strong>{heading}</strong>
              <p>{detail}</p>
            </div>
            {itemIndex < visual.items.length - 1 && <span className="enteral-visual__arrow">↘</span>}
          </div>
        ))}
      </div>
    </figure>
  );
}
