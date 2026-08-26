export const anemiaVisualTypes = [
  "anemia-framework", "diagnostic-patterns", "iron-diagnosis", "oral-iron", "intravenous-iron",
  "b12-folate", "ckd-anemia", "hemolysis-marrow", "integration",
];

const diagrams = {
  "anemia-framework": ["Clinical frame", "Read oxygen delivery, time course, and marrow response together", ["Stabilize", "Perfusion first", "Treat active bleeding, instability, ischemia, and hypoxemia immediately"], ["Classify", "Production, loss, or destruction", "Use history, reticulocytes, smear, and laboratory pattern"], ["Measure", "Tempo and reserve", "A rapid fall can be dangerous before the number reaches a fixed threshold"], ["Explain", "Cause before replacement", "Name the disease process that produced the anemia"]],
  "diagnostic-patterns": ["Pattern map", "Cell size narrows the field but never closes it", ["Microcytic", "Iron and globin", "Separate deficiency, restriction, thalassemia, toxin, and sideroblast patterns"], ["Normocytic", "Reticulocyte branch", "Divide underproduction from blood loss or destruction"], ["Macrocytic", "Megaloblastic or not", "Protect against B12 neurologic injury while evaluating other causes"], ["Mixed", "Average can mislead", "Use RDW, smear, and parallel nutrient testing"]],
  "iron-diagnosis": ["Iron system", "Stores, transport, inflammation, and loss create one diagnostic story", ["Store", "Ferritin", "Interpret with inflammation, liver disease, infection, malignancy, and recent iron"], ["Deliver", "TSAT", "Estimate iron available to erythropoiesis in the current setting"], ["Find", "Source of loss", "Investigate menstrual, gastrointestinal, dietary, and malabsorptive causes"], ["Verify", "Response checkpoint", "Confirm exposure, marrow response, and source control"]],
  "oral-iron": ["Oral replacement", "Design a regimen the patient can absorb and continue", ["Calculate", "Elemental iron", "Do not confuse salt mass with active iron content"], ["Schedule", "Absorption and tolerance", "Balance fasting exposure, food, acid, and a realistic routine"], ["Separate", "Chelation interactions", "Protect levothyroxine, antibiotics, bisphosphonates, and integrase inhibitors"], ["Audit", "Failure", "Check cause, dose, adherence, absorption, and ongoing loss before changing route"]],
  "intravenous-iron": ["Infusion plan", "Product identity controls dose, visits, monitoring, and risk", ["Select", "Exact label", "Match indication, weight, total course, concentration, and pediatric boundary"], ["Prepare", "Reaction readiness", "Use trained staff, emergency treatment, and product-specific observation"], ["Protect", "Phosphate and pressure", "Track ferric carboxymaltose risk and product-specific toxicity"], ["Reassess", "Timed response", "Avoid misleading early iron studies and automatic repeat courses"]],
  "b12-folate": ["Macrocytic recovery", "Protect the nervous system while restoring DNA synthesis", ["Detect", "B12 deficiency", "Use symptoms, methylmalonic acid, homocysteine, and cause"], ["Load", "Reliable exposure", "Use parenteral therapy when severity or absorption requires it"], ["Separate", "Folate pathway", "Never let folate mask untreated B12 neurologic disease"], ["Maintain", "Cause-linked duration", "Lifelong replacement belongs to persistent causes, not every low result"]],
  "ckd-anemia": ["Kidney pathway", "Correct causes, manage iron, then individualize erythropoiesis support", ["Evaluate", "Not CKD alone", "Exclude bleeding, nutrients, inflammation, hemolysis, and marrow disease"], ["Apply", "2026 iron algorithm", "Use dialysis status, ferritin, TSAT, symptoms, and current treatment"], ["Balance", "ESA value and risk", "Reduce transfusion exposure without normalizing hemoglobin"], ["Investigate", "Hyporesponse", "Treat iron restriction, inflammation, loss, nutrition, dialysis, or marrow disease"]],
  "hemolysis-marrow": ["High-risk branch", "Separate accelerated destruction from marrow failure", ["Recognize", "Hemolysis pattern", "Combine reticulocytes, bilirubin, LDH, haptoglobin, smear, and DAT"], ["Trace", "Trigger and timing", "Connect medicines, infection, transfusion, and inherited vulnerability"], ["Escalate", "Pancytopenia", "Aplastic anemia is not an isolated nutrient problem"], ["Support", "Transfusion decision", "Use symptoms, instability, bleeding, reserve, and patient values"]],
  "integration": ["Longitudinal plan", "Every treatment needs a cause, checkpoint, failure rule, and owner", ["Reconcile", "Medication causes", "Find bleeding, suppression, hemolysis, depletion, and absorption effects"], ["Teach", "Exact use and warnings", "Use teach back for products, schedules, interactions, and danger signs"], ["Measure", "Decision-linked follow-up", "Time CBC and cause-specific studies to the expected response"], ["Refer", "Defined escalation", "Act on unexplained anemia, abnormal smear, pancytopenia, hemolysis, or failure"]],
};

export default function AnemiaVisual({ type }) {
  const item = diagrams[type];
  if (!item) return null;
  const [eyebrow, title, ...nodes] = item;
  return (
    <figure className="chol-visual anemia-visual" aria-label={title}>
      <figcaption><span>{eyebrow}</span><strong>{title}</strong></figcaption>
      <div className="chol-visual__grid">
        {nodes.map(([verb, focus, detail], index) => (
          <div key={focus}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{verb}</strong>
            <em>{focus}</em>
            <p>{detail}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}
