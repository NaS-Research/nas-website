export const pharmacyIsotonicityCalculationsQuestionBank = [
  {
    "id": "iso-calc-001",
    "question": "Under the supplied-book 80% dissociation model, which factor i applies to a compound producing two ions?",
    "choices": [
      "1.8",
      "2",
      "0.8",
      "1"
    ],
    "answer": 0,
    "explanation": "The table uses i = 1 + 0.8(2 - 1) = 1.8. Use that factor for this E-value model, rather than the idealized integer count.",
    "reviewHref": "#dissociation-e-value"
  },
  {
    "id": "iso-calc-002",
    "question": "Using the book table, what factor i applies to a compound producing four ions under the stated 80% model?",
    "choices": [
      "4",
      "3.4",
      "2.6",
      "1.8"
    ],
    "answer": 1,
    "explanation": "i = 1 + 0.8(4 - 1) = 3.4.",
    "reviewHref": "#dissociation-e-value"
  },
  {
    "id": "iso-calc-003",
    "question": "What dissociation factor i is used for a nonionic compound in the book E-value calculation?",
    "choices": [
      "0",
      "1.8",
      "1",
      "2"
    ],
    "answer": 2,
    "explanation": "A nonionic compound does not dissociate; i is one, not zero.",
    "reviewHref": "#dissociation-e-value"
  },
  {
    "id": "iso-calc-004",
    "question": "An original exercise specifies MW 200 g/mol and i = 1. Use E = 58.5i/(MW x 1.8). What E is reported to the nearest hundredth?",
    "choices": [
      "0.29",
      "0.90",
      "0.02",
      "0.16"
    ],
    "answer": 3,
    "explanation": "58.5/(200 x 1.8) = 0.1625, rounded to 0.16.",
    "reviewHref": "#dissociation-e-value"
  },
  {
    "id": "iso-calc-005",
    "question": "For a compound with MW 150 g/mol and i = 1.8, what E follows from E = 58.5i/(MW x 1.8)?",
    "choices": [
      "0.39",
      "0.70",
      "0.26",
      "2.56"
    ],
    "answer": 0,
    "explanation": "The matching 1.8 factors cancel: E = 58.5/150 = 0.39.",
    "reviewHref": "#dissociation-e-value"
  },
  {
    "id": "iso-calc-006",
    "question": "A compound has MW 300 g/mol and i = 2.6. Using E = 58.5i/(MW x 1.8), what E is reported to the nearest hundredth?",
    "choices": [
      "0.51",
      "0.28",
      "0.20",
      "0.10"
    ],
    "answer": 1,
    "explanation": "58.5 x 2.6/(300 x 1.8) = 0.281666..., or 0.28.",
    "reviewHref": "#dissociation-e-value"
  },
  {
    "id": "iso-calc-007",
    "question": "In a sodium chloride equivalent exercise, what does E = 0.20 mean for 1 g of the specified compound?",
    "choices": [
      "It contains 0.20 g of actual NaCl",
      "It requires 0.20 g of NaCl regardless of final volume",
      "It represents an osmotic contribution equivalent to 0.20 g NaCl in the stated model",
      "It has a concentration of 20% w/v"
    ],
    "answer": 2,
    "explanation": "E is a mass-equivalence relationship in the supplied calculation model. It is neither actual sodium chloride content nor the final amount to add.",
    "reviewHref": "#dissociation-e-value"
  },
  {
    "id": "iso-calc-008",
    "question": "Under the supplied-book 80% model, which i applies to a compound producing five ions?",
    "choices": [
      "5",
      "3.4",
      "2.6",
      "4.2"
    ],
    "answer": 3,
    "explanation": "The table increases by 0.8 for each additional ion: i = 1 + 0.8(5 - 1) = 4.2.",
    "reviewHref": "#dissociation-e-value"
  },
  {
    "id": "iso-calc-009",
    "question": "For a stated final 40 mL and the 0.9% w/v NaCl reference, what total NaCl-equivalent target is used?",
    "choices": [
      "0.36 g",
      "3.6 g",
      "0.036 g",
      "36 g"
    ],
    "answer": 0,
    "explanation": "0.9 g/100 mL x 40 mL = 0.36 g. This is the target before subtracting other solute contributions.",
    "reviewHref": "#nacl-adjustment"
  },
  {
    "id": "iso-calc-010",
    "question": "An exercise specifies a final 40 mL, 0.50 g Compound A and supplied E = 0.20. Using a 0.9% w/v NaCl reference, how much NaCl is added?",
    "choices": [
      "0.36 g",
      "0.26 g",
      "0.46 g",
      "0.10 g"
    ],
    "answer": 1,
    "explanation": "Target = 0.36 g; Compound A contribution = 0.50 x 0.20 = 0.10 g. Additional NaCl = 0.36 - 0.10 = 0.26 g.",
    "reviewHref": "#nacl-adjustment"
  },
  {
    "id": "iso-calc-011",
    "question": "A stated final 20 mL contains Compound A at 1.5% w/v, with supplied E = 0.12. Using the 0.9% w/v reference, how much NaCl is added in milligrams?",
    "choices": [
      "180 mg",
      "36 mg",
      "144 mg",
      "216 mg"
    ],
    "answer": 2,
    "explanation": "Compound mass = 1.5 g/100 mL x 20 mL = 0.30 g = 300 mg. Target = 180 mg; equivalent = 300 x 0.12 = 36 mg. Add 144 mg.",
    "reviewHref": "#nacl-adjustment"
  },
  {
    "id": "iso-calc-012",
    "question": "What NaCl-equivalent contribution comes from 250 mg of Compound A with supplied E = 0.18?",
    "choices": [
      "0.045 mg",
      "250 mg",
      "1,389 mg",
      "45 mg"
    ],
    "answer": 3,
    "explanation": "250 mg x 0.18 = 45 mg NaCl equivalent. Keep the mass unit consistent.",
    "reviewHref": "#nacl-adjustment"
  },
  {
    "id": "iso-calc-013",
    "question": "Why must the compound contribution be subtracted from the full 0.9% NaCl-equivalent target?",
    "choices": [
      "The compound already contributes to the modeled osmotic effect",
      "The compound mass is always zero",
      "The final volume must be increased automatically",
      "The reference target is an electrical charge"
    ],
    "answer": 0,
    "explanation": "The source method accounts for the solute contribution already present, rather than adding the full reference amount on top of it.",
    "reviewHref": "#nacl-adjustment"
  },
  {
    "id": "iso-calc-014",
    "question": "An original exercise states final 30 mL, 0.30 g A with E 0.20 and 0.40 g B with E 0.15. Using the 0.9% reference and adding the stated contributions, how much NaCl is added?",
    "choices": [
      "0.27 g",
      "0.15 g",
      "0.12 g",
      "0.39 g"
    ],
    "answer": 1,
    "explanation": "Target = 0.27 g. Equivalents = 0.30 x 0.20 + 0.40 x 0.15 = 0.12 g. Add 0.27 - 0.12 = 0.15 g.",
    "reviewHref": "#nacl-adjustment"
  },
  {
    "id": "iso-calc-015",
    "question": "An exercise states final 20 mL, 0.20 g A with E 0.10, and 0.050 g NaCl already present. Using the 0.9% reference, how much additional NaCl is needed?",
    "choices": [
      "0.18 g",
      "0.16 g",
      "0.11 g",
      "0.25 g"
    ],
    "answer": 2,
    "explanation": "Target = 0.18 g; A equivalent = 0.020 g; existing NaCl = 0.050 g. Additional amount = 0.18 - 0.020 - 0.050 = 0.11 g.",
    "reviewHref": "#nacl-adjustment"
  },
  {
    "id": "iso-calc-016",
    "question": "A final 20 mL exercise contains 0.90 g A with E 0.20. Using the 0.9% reference, how much additional NaCl is calculated?",
    "choices": [
      "0.18 g",
      "0.36 g",
      "0.90 g",
      "0 g"
    ],
    "answer": 3,
    "explanation": "Target = 0.18 g and A equivalent = 0.90 x 0.20 = 0.18 g. The difference is zero.",
    "reviewHref": "#nacl-adjustment"
  },
  {
    "id": "iso-calc-017",
    "question": "An exercise has a target of 0.18 g NaCl equivalent, but its stated solutes already contribute 0.27 g. What is the arithmetic conclusion?",
    "choices": [
      "Contributions exceed the target; recheck rather than treat the negative difference as a positive NaCl addition",
      "Add 0.09 g NaCl to reduce the contribution",
      "Add the full 0.18 g NaCl",
      "Ignore all solute contributions"
    ],
    "answer": 0,
    "explanation": "Target minus existing contribution is -0.09 g. Adding a positive NaCl amount cannot lower the modeled total to the target.",
    "reviewHref": "#nacl-adjustment"
  },
  {
    "id": "iso-calc-018",
    "question": "An original exercise requests final 20 mL at 1.5% w/v Compound A using stock at 30 mg/mL. What stock volume supplies the specified compound mass?",
    "choices": [
      "1 mL",
      "10 mL",
      "20 mL",
      "100 mL"
    ],
    "answer": 1,
    "explanation": "1.5 g/100 mL x 20 mL = 300 mg. Stock volume = 300/30 = 10 mL. The specified finished volume remains 20 mL.",
    "reviewHref": "#stock-final-volume"
  },
  {
    "id": "iso-calc-019",
    "question": "A final 30 mL exercise contains 2% w/v A made from 60 mg/mL stock; supplied E is 0.10. Using the 0.9% NaCl reference, how much NaCl is added in milligrams?",
    "choices": [
      "270 mg",
      "60 mg",
      "210 mg",
      "330 mg"
    ],
    "answer": 2,
    "explanation": "Compound mass = 600 mg, supplied by 10 mL stock. Target = 270 mg; equivalent = 600 x 0.10 = 60 mg. Add 210 mg. The target uses final 30 mL, not the 10 mL stock volume.",
    "reviewHref": "#stock-final-volume"
  },
  {
    "id": "iso-calc-020",
    "question": "In an original exercise, the instruction is to add water qs to a final 30 mL. What does the 30 mL specify?",
    "choices": [
      "30 mL water added beyond the stock",
      "30 g of final product",
      "The initial stock volume",
      "The final volume including stock and other ingredients"
    ],
    "answer": 3,
    "explanation": "The prescription volume is the finished-product volume. The stock and other ingredients are included when bringing the preparation to that volume.",
    "reviewHref": "#stock-final-volume"
  },
  {
    "id": "iso-calc-021",
    "question": "An exercise computes E = 0.1625 and directs retaining intermediate precision. With 0.40 g A in a final 20 mL and a 0.9% reference, what NaCl addition is reported to three decimal places?",
    "choices": [
      "0.115 g",
      "0.116 g",
      "0.180 g",
      "0.065 g"
    ],
    "answer": 0,
    "explanation": "Target = 0.180 g; equivalent = 0.40 x 0.1625 = 0.065 g. Add 0.115 g. Replacing E with 0.16 would change the result.",
    "reviewHref": "#stock-final-volume"
  },
  {
    "id": "iso-calc-022",
    "question": "A separate exercise explicitly supplies E = 0.16 for 0.40 g A in final 20 mL. Using the supplied E and a 0.9% reference, what NaCl addition is reported to three decimal places?",
    "choices": [
      "0.115 g",
      "0.116 g",
      "0.244 g",
      "0.064 g"
    ],
    "answer": 1,
    "explanation": "Use the supplied value: equivalent = 0.40 x 0.16 = 0.064 g. Target = 0.180 g, so add 0.116 g.",
    "reviewHref": "#stock-final-volume"
  },
  {
    "id": "iso-calc-023",
    "question": "If only stock concentration changes while the final compound mass, final volume and supplied E remain fixed, what happens to the calculated NaCl-equivalent subtraction?",
    "choices": [
      "It doubles automatically",
      "It becomes zero",
      "It remains based on the same final compound mass",
      "It uses the new stock volume as the final volume"
    ],
    "answer": 2,
    "explanation": "Stock concentration changes the volume needed to supply the mass. E is multiplied by the final compound mass, which is unchanged in the stated exercise.",
    "reviewHref": "#stock-final-volume"
  },
  {
    "id": "iso-calc-024",
    "question": "For MW 200 g/mol and i = 1, what unrounded E follows from 58.5i/(MW x 1.8)?",
    "choices": [
      "0.16",
      "0.2925",
      "0.0900",
      "0.1625"
    ],
    "answer": 3,
    "explanation": "58.5/(200 x 1.8) = 58.5/360 = 0.1625. Retain it when the exercise requests unrounded intermediate values.",
    "reviewHref": "#stock-final-volume"
  },
  {
    "id": "iso-calc-025",
    "question": "An original exercise states final 40 mL at 0.5% w/v A, MW 150 g/mol, i = 1.8 and stock 10 mg/mL. Using E = 58.5i/(MW x 1.8) and the 0.9% NaCl reference, what NaCl addition is needed in milligrams?",
    "choices": [
      "282 mg",
      "360 mg",
      "78 mg",
      "438 mg"
    ],
    "answer": 0,
    "explanation": "E = 0.39. Final A mass = 200 mg, supplied by 20 mL stock. Equivalent = 200 x 0.39 = 78 mg. Target = 360 mg; add 360 - 78 = 282 mg.",
    "reviewHref": "#stock-final-volume"
  }
];
