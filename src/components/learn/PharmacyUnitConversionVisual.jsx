import styles from "./PharmacyUnitConversionVisual.module.css";

const examples = {
  "units-volume": {
    title: "One volume, two units.",
    equation: "0.75 L x 1,000 mL/L = 750 mL",
    steps: [["Given", "0.75 L", "Starting volume"], ["Factor", "1,000 mL/L", "Liters cancel"], ["Result", "750 mL", "The amount is preserved"]],
  },
  "units-mass-height": {
    title: "Convert feet and inches before centimeters.",
    equation: "67 inches x 2.54 cm/inch = 170.18 cm",
    steps: [["Feet", "5 x 12 = 60 in", "Convert feet to inches"], ["Total", "60 + 7 = 67 in", "Add the remaining inches"], ["Height", "170.18 cm", "Apply the centimeter factor"]],
  },
  "units-charge": {
    title: "The ion determines the conversion.",
    equation: "For calcium: 18 mEq x 0.5 mmol/mEq = 9 mmol",
    steps: [["Ion", "Potassium", "18 mEq = 18 mmol"], ["Ion", "Calcium", "18 mEq = 9 mmol"], ["Check", "Calcium reverse", "9 mmol x 2 = 18 mEq"]],
  },
  "units-rounding": {
    title: "Keep precision until the final instruction.",
    equation: "2.75 mL x 6 = 16.5 mL; nearest whole mL = 17 mL",
    steps: [["Given", "2.75 mL", "Do not round this first"], ["Total", "16.5 mL", "Complete the multiplication"], ["Final", "17 mL", "Apply the stated rounding"]],
  },
};

export default function PharmacyUnitConversionVisual({ type }) {
  const example = examples[type];
  if (!example) return null;
  return <figure className={`pn-calc-visual ${styles.figure}`} aria-label={example.title}>
    <figcaption><span>Worked conversion</span><strong>{example.title}</strong></figcaption>
    <div className="pn-calc-visual__rail">
      {example.steps.map(([label, value, detail]) => <div className="pn-calc-visual__step" key={label + value}>
        <span>{label}</span><strong>{value}</strong><p>{detail}</p>
      </div>)}
    </div>
    <div className="pn-calc-visual__formula">{example.equation}</div>
  </figure>;
}
