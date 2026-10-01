import styles from "./PharmacyUnitConversionVisual.module.css";

const examples = {
  "strength-percentage-basis": {
    "title": "The basis determines both units.",
    "equation": "2% w/v = 2 g/100 mL = 20 mg/mL",
    "steps": [
      [
        "w/v",
        "2 g / 100 mL",
        "Ingredient mass in finished volume"
      ],
      [
        "w/w",
        "2 g / 100 g",
        "Ingredient mass in finished mass"
      ],
      [
        "v/v",
        "2 mL / 100 mL",
        "Ingredient volume in finished volume"
      ]
    ]
  },
  "strength-finished-product": {
    "title": "Count the ingredient and the final mass.",
    "equation": "(2 g + 3 g) / (100 g + 3 g) x 100 = 4.85% w/w",
    "steps": [
      [
        "Starting",
        "2 g in 100 g",
        "2% w/w product"
      ],
      [
        "Added",
        "3 g of pure A",
        "Increases ingredient and total mass"
      ],
      [
        "Finished",
        "5 g in 103 g",
        "Round only the final percentage"
      ]
    ]
  },
  "strength-ratio-strength": {
    "title": "The ratio refers to the whole.",
    "equation": "0.08% w/v: N = 100 / 0.08 = 1,250; ratio = 1:1,250 w/v",
    "steps": [
      [
        "Percent",
        "0.08 g / 100 mL",
        "State the w/v basis"
      ],
      [
        "Scale",
        "100 / 0.08",
        "Find mL per gram"
      ],
      [
        "Ratio",
        "1 g / 1,250 mL",
        "Ingredient is within the total"
      ]
    ]
  },
  "strength-ppm-ppb": {
    "title": "Keep the denominator attached.",
    "equation": "0.12 ppm w/v x 2.5 L = 0.30 mg = 300 mcg",
    "steps": [
      [
        "w/v",
        "1 ppm = 1 mg/L",
        "Book w/v convention"
      ],
      [
        "w/w",
        "1 ppm = 1 mg/kg",
        "Mass denominator"
      ],
      [
        "Scale",
        "1 ppm = 1,000 ppb",
        "Same basis throughout"
      ]
    ]
  },
  "strength-specific-gravity": {
    "title": "A density ratio becomes a conversion factor.",
    "equation": "45 g / 1.25 g/mL = 36 mL",
    "steps": [
      [
        "Reference",
        "Water: 1 g/mL",
        "Book calculation convention"
      ],
      [
        "Ratio",
        "Specific gravity: 1.25",
        "Dimensionless"
      ],
      [
        "Density",
        "1.25 g/mL",
        "Carries mass-per-volume units"
      ]
    ]
  }
};

export default function PharmacyConcentrationVisual({ type }) {
  const example = examples[type];
  if (!example) return null;
  return <figure className={`pn-calc-visual ${styles.figure}`} aria-label={example.title}>
    <figcaption><span>Worked concentration</span><strong>{example.title}</strong></figcaption>
    <div className="pn-calc-visual__rail">
      {example.steps.map(([label, value, detail]) => <div className="pn-calc-visual__step" key={label}>
        <span>{label}</span><strong>{value}</strong><p>{detail}</p>
      </div>)}
    </div>
    <div className="pn-calc-visual__formula">{example.equation}</div>
  </figure>;
}
