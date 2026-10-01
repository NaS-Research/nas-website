import styles from "./PharmacyUnitConversionVisual.module.css";

const examples = {
  "meqcalc-valence-and-particles": {
    "title": "Charge and particle count answer different questions.",
    "equation": "For CaCl2: mEq = mmol x 2; dissociation particles = 3",
    "steps": [
      [
        "Positive",
        "One Ca2+",
        "Total positive charge: 2"
      ],
      [
        "Negative",
        "Two Cl-",
        "Total negative charge magnitude: 2"
      ],
      [
        "Factors",
        "Valence 2; particles 3",
        "Use one charge side for mEq"
      ]
    ]
  },
  "meqcalc-mass-and-equivalents": {
    "title": "Match salt mass, form and valence.",
    "equation": "301 mg x 2 / 120.4 = 5 mEq magnesium",
    "steps": [
      [
        "Compound",
        "0.301 g = 301 mg",
        "Anhydrous MgSO4"
      ],
      [
        "Inputs",
        "MW 120.4; factor 2",
        "Use the specified salt form"
      ],
      [
        "Equivalent",
        "5 mEq magnesium",
        "Reverse: 5 x 120.4 / 2 = 301 mg salt"
      ]
    ]
  },
  "meqcalc-solution-equivalents": {
    "title": "Strength supplies mass before charge conversion.",
    "equation": "8.4 g/100 mL x 10 mL x 1,000 mg/g / 84 = 10 mEq sodium",
    "steps": [
      [
        "Strength",
        "8.4% w/v NaHCO3",
        "Stated volume: 10 mL"
      ],
      [
        "Mass",
        "0.84 g = 840 mg",
        "MW 84 g/mol; factor 1"
      ],
      [
        "Amount",
        "10 mEq sodium",
        "840 mg x 1 / 84"
      ]
    ]
  },
  "meqcalc-formulation-conversions": {
    "title": "Use the stated formulation ratio.",
    "equation": "600 mg carbonate/day x 5 mL syrup/300 mg carbonate = 10 mL syrup/day",
    "steps": [
      [
        "Daily amount",
        "300 mg twice daily",
        "600 mg carbonate/day"
      ],
      [
        "Supplied ratio",
        "300 mg carbonate : 5 mL syrup",
        "Also 8 mEq lithium ion"
      ],
      [
        "Daily volume",
        "10 mL syrup/day",
        "Ratio method: 16 mEq lithium/day"
      ]
    ]
  }
};

export default function PharmacyMilliequivalentVisual({ type }) {
  const example = examples[type];
  if (!example) return null;
  return <figure className={`pn-calc-visual ${styles.figure}`} aria-label={example.title}>
    <figcaption><span>Milliequivalents</span><strong>{example.title}</strong></figcaption>
    <div className="pn-calc-visual__rail">
      {example.steps.map(([label, value, detail]) => <div className="pn-calc-visual__step" key={label}>
        <span>{label}</span><strong>{value}</strong><p>{detail}</p>
      </div>)}
    </div>
    <div className="pn-calc-visual__formula">{example.equation}</div>
  </figure>;
}
