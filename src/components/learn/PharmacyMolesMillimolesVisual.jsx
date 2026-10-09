import styles from "./PharmacyUnitConversionVisual.module.css";

const examples = {
  "molcalc-mass-to-moles": {
    "title": "Match the mass and amount units.",
    "equation": "1,800 mg / 120 mg per mmol = 15 mmol",
    "steps": [
      [
        "Mass",
        "1.8 g = 1,800 mg",
        "Specified compound; MW 120 g/mol"
      ],
      [
        "Moles",
        "0.015 mol",
        "1.8 g / 120 g per mol"
      ],
      [
        "Millimoles",
        "15 mmol",
        "0.015 mol x 1,000 mmol/mol"
      ]
    ]
  },
  "molcalc-solution-to-millimoles": {
    "title": "Volume determines the total solute amount.",
    "equation": "4 g/100 mL x 25 mL x 1,000 mg/g / 200 mg per mmol = 5 mmol",
    "steps": [
      [
        "Strength",
        "4% w/v A",
        "4 g A in each 100 mL"
      ],
      [
        "Mass",
        "1 g = 1,000 mg",
        "Contained in the stated 25 mL"
      ],
      [
        "Amount",
        "5 mmol A",
        "Specified MW 200 g/mol"
      ]
    ]
  },
  "molcalc-millimoles-to-mass": {
    "title": "Scale the full target before finding mass.",
    "equation": "90 mL x 0.8 mmol/6 mL x 150 mg/mmol = 1,800 mg = 1.8 g",
    "steps": [
      [
        "Portion",
        "0.8 mmol per 6 mL",
        "Specified compound; MW 150 g/mol"
      ],
      [
        "Total",
        "12 mmol in 90 mL",
        "90 mL x 0.8 mmol/6 mL"
      ],
      [
        "Mass",
        "1.8 g",
        "12 mmol x 150 mg/mmol"
      ]
    ]
  }
};

export default function PharmacyMolesMillimolesVisual({ type }) {
  const example = examples[type];
  if (!example) return null;
  return <figure className={`pn-calc-visual ${styles.figure}`} aria-label={example.title}>
    <figcaption><span>Moles and millimoles</span><strong>{example.title}</strong></figcaption>
    <div className="pn-calc-visual__rail">
      {example.steps.map(([label, value, detail]) => <div className="pn-calc-visual__step" key={label}>
        <span>{label}</span><strong>{value}</strong><p>{detail}</p>
      </div>)}
    </div>
    <div className="pn-calc-visual__formula">{example.equation}</div>
  </figure>;
}
