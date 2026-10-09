import styles from "./PharmacyUnitConversionVisual.module.css";

const examples = {
  "osmcalc-particles-and-units": {
    "title": "Count particles, not electrical charge.",
    "equation": "One CaCl2 formula unit -> 1 calcium ion + 2 chloride ions",
    "steps": [
      [
        "Nonionic",
        "Dextrose: 1",
        "A molecule remains one particle"
      ],
      [
        "Formula unit",
        "CaCl2: 3",
        "One calcium plus two chloride"
      ],
      [
        "Specified ion",
        "Ca2+: 1",
        "Charge +2 is not two particles"
      ]
    ]
  },
  "osmcalc-osmolarity-per-liter": {
    "title": "Normalize concentration to one liter.",
    "equation": "15 g/L / 58.5 g/mol x 2 x 1,000 = 512.8205... mOsmol/L",
    "steps": [
      [
        "Strength",
        "1.5% w/v NaCl",
        "1.5 g/100 mL = 15 g/L"
      ],
      [
        "Inputs",
        "MW 58.5; particles 2",
        "Book calculation model"
      ],
      [
        "Rounded",
        "513 mOsmol/L",
        "Nearest whole number"
      ]
    ]
  },
  "osmcalc-total-milliosmoles": {
    "title": "Amount and concentration have different units.",
    "equation": "120 mOsmol / 0.200 L = 600 mOsmol/L",
    "steps": [
      [
        "Mass",
        "4.44 g CaCl2",
        "MW 111; particles 3"
      ],
      [
        "Amount",
        "120 mOsmol",
        "4.44 / 111 x 3 x 1,000"
      ],
      [
        "Concentration",
        "600 mOsmol/L",
        "Final volume: 200 mL"
      ]
    ]
  },
  "osmcalc-mixtures-and-reverse": {
    "title": "Sum the amount, then use final volume.",
    "equation": "(50 + 100) mOsmol / 0.500 L = 300 mOsmol/L",
    "steps": [
      [
        "Mannitol",
        "50 mOsmol",
        "9.1 g / 182 x 1 x 1,000"
      ],
      [
        "NaCl",
        "100 mOsmol",
        "2.925 g / 58.5 x 2 x 1,000"
      ],
      [
        "Finished",
        "300 mOsmol/L",
        "150 mOsmol in final 0.500 L"
      ]
    ]
  }
};

export default function PharmacyOsmolarityVisual({ type }) {
  const example = examples[type];
  if (!example) return null;
  return <figure className={`pn-calc-visual ${styles.figure}`} aria-label={example.title}>
    <figcaption><span>Particle calculation</span><strong>{example.title}</strong></figcaption>
    <div className="pn-calc-visual__rail">
      {example.steps.map(([label, value, detail]) => <div className="pn-calc-visual__step" key={label}>
        <span>{label}</span><strong>{value}</strong><p>{detail}</p>
      </div>)}
    </div>
    <div className="pn-calc-visual__formula">{example.equation}</div>
  </figure>;
}
