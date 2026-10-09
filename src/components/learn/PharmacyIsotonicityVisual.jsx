import styles from "./PharmacyUnitConversionVisual.module.css";

const examples = {
  "isocalc-dissociation-e-value": {
    "title": "Use the stated dissociation model.",
    "equation": "E = (58.5 x 1.8) / (150 x 1.8) = 0.39",
    "steps": [
      [
        "Two ions",
        "i = 1.8",
        "Book 80% dissociation model"
      ],
      [
        "Compound",
        "MW = 150 g/mol",
        "NaCl reference: MW 58.5; i 1.8"
      ],
      [
        "Equivalent",
        "E = 0.39",
        "1 g A represents 0.39 g NaCl equivalent"
      ]
    ]
  },
  "isocalc-nacl-adjustment": {
    "title": "Subtract the contribution already present.",
    "equation": "0.45 g target - 0.12 g equivalent = 0.33 g NaCl added",
    "steps": [
      [
        "Target",
        "50 mL x 9 mg/mL",
        "450 mg NaCl equivalent"
      ],
      [
        "Compound",
        "0.60 g A x E 0.20",
        "120 mg NaCl equivalent"
      ],
      [
        "Additional",
        "330 mg NaCl",
        "330 + 120 = 450 mg target"
      ]
    ]
  },
  "isocalc-stock-final-volume": {
    "title": "Stock volume is not final volume.",
    "equation": "225 mg target - 30 mg equivalent = 195 mg NaCl added",
    "steps": [
      [
        "Stock",
        "10 mL at 25 mg/mL",
        "Supplies 250 mg A"
      ],
      [
        "Finished",
        "25 mL at 1% w/v A",
        "Target = 225 mg NaCl equivalent"
      ],
      [
        "Additional",
        "195 mg NaCl",
        "A: 250 mg x E 0.12 = 30 mg equivalent"
      ]
    ]
  }
};

export default function PharmacyIsotonicityVisual({ type }) {
  const example = examples[type];
  if (!example) return null;
  return <figure className={`pn-calc-visual ${styles.figure}`} aria-label={example.title}>
    <figcaption><span>NaCl equivalent</span><strong>{example.title}</strong></figcaption>
    <div className="pn-calc-visual__rail">
      {example.steps.map(([label, value, detail]) => <div className="pn-calc-visual__step" key={label}>
        <span>{label}</span><strong>{value}</strong><p>{detail}</p>
      </div>)}
    </div>
    <div className="pn-calc-visual__formula">{example.equation}</div>
  </figure>;
}
