const diagrams = {
  "pituitary-axis": {
    accent: "#a78cae",
    eyebrow: "Endocrine control",
    title: "Read every result as an axis, not an isolated number",
    columns: [
      ["Hypothalamus", "Release or restraint", "CRH, TRH, GnRH, GHRH, somatostatin, and dopamine"],
      ["Pituitary", "Signal and pulse", "ACTH, TSH, LH, FSH, GH, prolactin, and posterior release"],
      ["Target", "Hormone and feedback", "Cortisol, thyroid hormone, gonadal steroids, IGF-1, and water balance"],
    ],
  },
  "pituitary-acromegaly": {
    accent: "#c3a06c",
    eyebrow: "GH and IGF-1",
    title: "Control secretion, action, tumor, and systemic disease",
    columns: [
      ["Resect", "Expert surgery", "Remove resectable tumor and decompress threatened anatomy"],
      ["Suppress", "Somatostatin receptors", "Injectable or oral ligands lower GH with product-specific use"],
      ["Block", "GH receptor", "Pegvisomant lowers IGF-1 despite persistent GH secretion"],
    ],
  },
  "pituitary-prolactin": {
    accent: "#c8899f",
    eyebrow: "Dopamine restraint",
    title: "Explain the elevation before treating the prolactin",
    columns: [
      ["Confirm", "Result and context", "Pregnancy, stress, macroprolactin, dilution, and assay fit"],
      ["Exclude", "Secondary causes", "Medication, hypothyroidism, kidney disease, and stalk effect"],
      ["Treat", "D2 receptor", "Cabergoline lowers secretion and usually reduces tumor volume"],
    ],
  },
  "pituitary-replacement": {
    accent: "#8ea29a",
    eyebrow: "Replacement sequence",
    title: "Protect the essential axis before optimizing the others",
    columns: [
      ["First", "Cortisol safety", "Glucocorticoid coverage and emergency stress planning"],
      ["Then", "Target-gland hormone", "Free T4, sex steroids, fertility therapy, and clinical goals"],
      ["Revisit", "Dynamic pituitary state", "Retest after surgery, tumor response, radiation, and illness"],
    ],
  },
  "pituitary-vasopressin": {
    accent: "#77a7b2",
    eyebrow: "Water balance",
    title: "Replace antidiuresis without trapping excess free water",
    columns: [
      ["Prove", "Hypotonic polyuria", "Measure urine volume and concentration and exclude solute diuresis"],
      ["Replace", "V2-selective signal", "Use product-specific desmopressin dose, route, and timing"],
      ["Release", "Permit aquaresis", "Monitor sodium and allow retained water to clear when appropriate"],
    ],
  },
  "pituitary-emergencies": {
    accent: "#c47770",
    eyebrow: "Sellar urgency",
    title: "Vision, perfusion, cortisol, and sodium define the emergency",
    columns: [
      ["Detect", "Apoplexy or compression", "Sudden headache, visual loss, ophthalmoplegia, and instability"],
      ["Protect", "Cortisol and anatomy", "Stress-dose steroid and urgent multidisciplinary evaluation"],
      ["Follow", "Postoperative transitions", "Urine, sodium, vision, imaging, and every pituitary axis"],
    ],
  },
};

export default function PituitaryPharmacologyVisual({ type }) {
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
