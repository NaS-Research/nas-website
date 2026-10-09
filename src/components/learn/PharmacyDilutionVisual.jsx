import styles from "./PharmacyUnitConversionVisual.module.css";

const examples = {
  "mix-quantity-concentration": {
    "title": "Preserve the ingredient amount.",
    "equation": "75 mL x 12 g/100 mL = 300 mL x 3 g/100 mL = 9 g",
    "steps": [
      [
        "Starting",
        "75 mL at 12% w/v",
        "9 g of Ingredient A"
      ],
      [
        "Final",
        "300 mL at 3% w/v",
        "The same 9 g"
      ],
      [
        "Check",
        "Q1C1 = Q2C2",
        "Matched volume and basis"
      ]
    ]
  },
  "mix-final-versus-added": {
    "title": "Final product is not added diluent.",
    "equation": "300 mL final - 75 mL starting = 225 mL added",
    "steps": [
      [
        "Starting",
        "75 mL",
        "Already present"
      ],
      [
        "Final",
        "300 mL",
        "Includes the starting liquid"
      ],
      [
        "Added",
        "225 mL",
        "Ingredient-free diluent; additive volumes"
      ]
    ]
  },
  "mix-alligation-parts": {
    "title": "Label higher and lower before scaling.",
    "equation": "45 g x 12% + 105 g x 2% = 150 g x 5%",
    "steps": [
      [
        "Higher stock",
        "12%: 3 parts",
        "5 - 2 = 3; amount = 45 g"
      ],
      [
        "Lower stock",
        "2%: 7 parts",
        "12 - 5 = 7; amount = 105 g"
      ],
      [
        "Finished",
        "150 g at 5% w/w",
        "10 parts; 15 g per part"
      ]
    ]
  },
  "mix-unknown-final-volume": {
    "title": "The added stock changes the denominator.",
    "equation": "40x = 4(180 + x); x = 20 mL; final = 200 mL",
    "steps": [
      [
        "Diluent",
        "180 mL",
        "0 mg/mL of Ingredient A"
      ],
      [
        "Stock",
        "20 mL at 40 mg/mL",
        "800 mg of Ingredient A"
      ],
      [
        "Finished",
        "800 mg / 200 mL",
        "4 mg/mL; volumes add"
      ]
    ]
  }
};

export default function PharmacyDilutionVisual({ type }) {
  const example = examples[type];
  if (!example) return null;
  return <figure className={`pn-calc-visual ${styles.figure}`} aria-label={example.title}>
    <figcaption><span>Worked mixture</span><strong>{example.title}</strong></figcaption>
    <div className="pn-calc-visual__rail">
      {example.steps.map(([label, value, detail]) => <div className="pn-calc-visual__step" key={label}>
        <span>{label}</span><strong>{value}</strong><p>{detail}</p>
      </div>)}
    </div>
    <div className="pn-calc-visual__formula">{example.equation}</div>
  </figure>;
}
