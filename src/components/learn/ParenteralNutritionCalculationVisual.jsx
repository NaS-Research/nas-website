const diagrams = {
  "pn-calc-foundations": {
    eyebrow: "Calculation foundation",
    title: "Patient data becomes a defensible estimate.",
    steps: [["01", "Measure", "Weight, height, history, fluid status"], ["02", "Convert", "kg, cm, m, and consistent units"], ["03", "Select", "Calculation weight and equation"], ["04", "Interpret", "Estimate plus clinical context"]],
    formula: "BMI = kg ÷ m²",
  },
  "pn-calc-protein-energy": {
    eyebrow: "Energy ledger",
    title: "Every calorie has an address.",
    steps: [["AA", "Protein", "g/kg/day × calculation weight"], ["4", "AA energy", "amino acid grams × 4 kcal"], ["NPC", "Nonprotein", "dextrose energy plus lipid energy"], ["Σ", "Total", "PN plus medicines plus intake"]],
    formula: "Protein g/day = kg × g/kg/day",
  },
  "pn-calc-dextrose": {
    eyebrow: "Glucose delivery",
    title: "Grams are not enough. Time matters.",
    steps: [["g", "Dextrose", "Daily grams prescribed"], ["×", "Convert", "grams × 1,000 mg/g"], ["÷", "Normalize", "divide by kg and minutes"], ["GIR", "Interpret", "mg/kg/min with glucose trends"]],
    formula: "GIR = dextrose g × 1,000 ÷ kg ÷ minutes",
  },
  "pn-calc-lipid": {
    eyebrow: "Lipid ledger",
    title: "Dose, volume, energy, tolerance.",
    steps: [["1", "Dose", "kg × ordered g/kg"], ["2", "Volume", "grams ÷ product g/mL"], ["3", "Energy", "mL × labeled kcal/mL"], ["4", "Audit", "add propofol and other lipid"]],
    formula: "20% lipid = 0.2 g/mL",
  },
  "pn-calc-stock": {
    eyebrow: "Compounding translation",
    title: "The order becomes source volume.",
    steps: [["Rx", "Ordered", "grams, mEq, or mmol"], ["C", "Concentration", "amount per mL"], ["V", "Source volume", "ordered amount ÷ concentration"], ["Bag", "Final", "sources plus water equal volume"]],
    formula: "Volume = ordered amount ÷ stock concentration",
  },
  "pn-calc-audit": {
    eyebrow: "Independent verification",
    title: "Rebuild the order before release.",
    steps: [["A", "Daily totals", "grams, calories, electrolytes"], ["B", "Container", "source volumes and final volume"], ["C", "Pump", "hours, taper, mL/hour, GIR"], ["D", "Patient", "plausibility and monitoring"]],
    formula: "Constant rate = total mL ÷ infusion hours",
  },
};

export default function ParenteralNutritionCalculationVisual({ type }) {
  const diagram = diagrams[type];
  if (!diagram) return null;
  return (
    <figure className={`pn-calc-visual pn-calc-visual--${type}`} aria-label={diagram.title}>
      <figcaption><span>{diagram.eyebrow}</span><strong>{diagram.title}</strong></figcaption>
      <div className="pn-calc-visual__rail">
        {diagram.steps.map(([index, heading, detail], itemIndex) => <div className="pn-calc-visual__step" key={heading}>
          <span>{index}</span><strong>{heading}</strong><p>{detail}</p>{itemIndex < diagram.steps.length - 1 && <i aria-hidden="true">→</i>}
        </div>)}
      </div>
      <div className="pn-calc-visual__formula">{diagram.formula}</div>
    </figure>
  );
}
