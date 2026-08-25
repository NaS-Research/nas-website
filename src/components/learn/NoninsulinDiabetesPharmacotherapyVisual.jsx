const diagrams = {
  "noninsulin-selection": {
    accent: "#d9ab72",
    eyebrow: "Treatment architecture",
    title: "Choose for the outcome, then test the fit",
    columns: [
      ["Goal", "What must change", "Glucose, ASCVD, heart failure, kidney, weight, liver, or burden"],
      ["Fit", "Who will use it", "Organ function, adverse effects, hypoglycemia, route, schedule, and access"],
      ["Review", "What happened", "Efficacy, tolerance, outcome, cost, persistence, and revised goals"],
    ],
  },
  "noninsulin-metformin": {
    accent: "#8fa792",
    eyebrow: "Biguanide",
    title: "Restrain hepatic output while protecting safe clearance",
    columns: [
      ["Lower", "Hepatic glucose production", "Reduce fasting glucose without directly forcing insulin secretion"],
      ["Titrate", "Gut tolerance", "Start low, use meals, and consider extended release when appropriate"],
      ["Pause", "Accumulation risk", "Kidney decline, hypoxia, acute illness, and selected contrast exposure"],
    ],
  },
  "noninsulin-sglt2": {
    accent: "#73a8b8",
    eyebrow: "Renal glucose handling",
    title: "Move glucose and sodium while protecting heart and kidney",
    columns: [
      ["Filter", "Proximal tubule", "Increase glucosuria and natriuresis through SGLT2 inhibition"],
      ["Protect", "Heart and kidney", "Use demonstrated outcome benefit independently from A1C when indicated"],
      ["Interrupt", "Fasting and illness", "Prevent ketoacidosis through ketone awareness and procedure planning"],
    ],
  },
  "noninsulin-glp1": {
    accent: "#b68ba6",
    eyebrow: "Incretin pharmacology",
    title: "Increase glucose-dependent signaling and reduce intake",
    columns: [
      ["Signal", "Islet and glucagon", "Increase glucose-dependent insulin and reduce inappropriate glucagon"],
      ["Slow", "Stomach and appetite", "Delay gastric emptying to varying degrees and strengthen satiety"],
      ["Scale", "Dose and outcome", "Titrate for tolerance and use product-specific cardiovascular or kidney evidence"],
    ],
  },
  "noninsulin-dpp4": {
    accent: "#8b9db5",
    eyebrow: "Endogenous incretin",
    title: "Preserve the native signal without duplicating GLP-1 therapy",
    columns: [
      ["Preserve", "Block DPP-4", "Extend endogenous GLP-1 and GIP activity with modest glucose lowering"],
      ["Adjust", "Kidney clearance", "Dose most products by eGFR while linagliptin generally remains unchanged"],
      ["Watch", "Product safety", "Heart failure, pancreatitis, arthralgia, hypersensitivity, and blistering disease"],
    ],
  },
  "noninsulin-secretagogues": {
    accent: "#d7a765",
    eyebrow: "Beta-cell secretion",
    title: "Rapid glucose lowering carries meal and hypoglycemia risk",
    columns: [
      ["Close", "KATP channel", "Stimulate insulin secretion with less dependence on current glucose"],
      ["Time", "Meal exposure", "Match meglitinides to meals and distinguish longer sulfonylurea action"],
      ["Reduce", "Hypoglycemia burden", "Reassess dose with kidney decline, low intake, and stronger add-on therapy"],
    ],
  },
  "noninsulin-tzd": {
    accent: "#bd8a72",
    eyebrow: "Insulin sensitization",
    title: "Transcription improves sensitivity but can retain fluid",
    columns: [
      ["Activate", "PPAR-gamma", "Change gene expression in adipose and insulin-responsive tissue"],
      ["Wait", "Delayed effect", "Assess response over weeks rather than correcting the dose each day"],
      ["Protect", "Heart and bone", "Monitor edema, weight, heart failure, fracture, eye, liver, and bladder risk"],
    ],
  },
  "noninsulin-other": {
    accent: "#9aa487",
    eyebrow: "Narrow mechanisms",
    title: "Exact timing turns a niche medicine into useful therapy",
    columns: [
      ["Digest", "Alpha-glucosidase", "Delay carbohydrate absorption with the first bite of a meal"],
      ["Replace", "Amylin", "Pair pramlintide with reduced mealtime insulin and intensive monitoring"],
      ["Target", "Selective use", "Fit colesevelam or bromocriptine-QR to a defined goal and burden"],
    ],
  },
  "noninsulin-outcomes": {
    accent: "#c9857c",
    eyebrow: "Outcome integration",
    title: "Treat the organ risk even when glucose is near target",
    columns: [
      ["Vessels", "ASCVD", "Use a GLP-1 receptor agonist and/or SGLT2 inhibitor with demonstrated benefit"],
      ["Pump and filter", "Heart failure and CKD", "Prioritize SGLT2 inhibition and layer product-specific evidence"],
      ["Metabolism", "Weight and liver", "Choose high-efficacy therapy when obesity or metabolic liver disease is a goal"],
    ],
  },
  "noninsulin-combination": {
    accent: "#c2a66f",
    eyebrow: "Regimen design",
    title: "Add complementary value and remove unnecessary burden",
    columns: [
      ["Combine", "Distinct contribution", "Close the efficacy gap with mechanisms and outcomes that complement"],
      ["Hold", "Transition safety", "Plan for fasting, procedures, illness, contrast, dehydration, and missed meals"],
      ["Simplify", "Benefit-risk review", "Remove redundancy, hypoglycemia, cost, intolerance, and low-value burden"],
    ],
  },
};

export default function NoninsulinDiabetesPharmacotherapyVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;

  return (
    <figure className="chol-visual" style={{ "--chol-accent": diagram.accent }} aria-label={diagram.title}>
      <figcaption><span>{diagram.eyebrow}</span><strong>{diagram.title}</strong></figcaption>
      <div className="chol-visual__grid">
        {diagram.columns.map(([label, mechanism, explanation], index) => (
          <div key={label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{label}</strong>
            <em>{mechanism}</em>
            <p>{explanation}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}
