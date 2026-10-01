export const pharmacyConcentrationsSpecificGravityQuestionBank = [
  {
    "id": "strength-001",
    "question": "What does 1.2% w/v mean?",
    "choices": [
      "1.2 g in 100 mL of finished product",
      "1.2 mg in 100 mL of finished product",
      "1.2 mL in 100 g of finished product",
      "1.2 g added to 100 mL of solvent"
    ],
    "answer": 0,
    "explanation": "Weight in volume means grams per 100 mL of total finished product.",
    "reviewHref": "#percentage-basis"
  },
  {
    "id": "strength-002",
    "question": "What does 4% v/v mean?",
    "choices": [
      "4 g in 100 mL of finished product",
      "4 mL in 100 mL of finished product",
      "4 mL added to 100 mL of solvent",
      "4 g in 100 g of finished product"
    ],
    "answer": 1,
    "explanation": "Both numerator and denominator are volumes; the denominator is the finished product.",
    "reviewHref": "#percentage-basis"
  },
  {
    "id": "strength-003",
    "question": "An exercise contains 9 g of Ingredient A in a final 450 mL product. What is its strength?",
    "choices": [
      "0.02% w/v",
      "20% w/v",
      "2% w/v",
      "2% w/w"
    ],
    "answer": 2,
    "explanation": "(9 g / 450 mL) x 100 mL = 2 g per 100 mL, or 2% w/v.",
    "reviewHref": "#percentage-basis"
  },
  {
    "id": "strength-004",
    "question": "Convert 0.65% w/v to mg/mL.",
    "choices": [
      "0.65 mg/mL",
      "65 mg/mL",
      "0.065 mg/mL",
      "6.5 mg/mL"
    ],
    "answer": 3,
    "explanation": "0.65 g/100 mL = 650 mg/100 mL = 6.5 mg/mL.",
    "reviewHref": "#percentage-basis"
  },
  {
    "id": "strength-005",
    "question": "Express 28 mg/mL as percentage strength.",
    "choices": [
      "2.8% w/v",
      "28% w/v",
      "0.28% w/v",
      "2.8% w/w"
    ],
    "answer": 0,
    "explanation": "28 mg/mL x 100 mL = 2,800 mg = 2.8 g per 100 mL, or 2.8% w/v.",
    "reviewHref": "#percentage-basis"
  },
  {
    "id": "strength-006",
    "question": "Using the book definition of half-normal saline (0.45% w/v sodium chloride), how much sodium chloride is in 400 mL?",
    "choices": [
      "18 g",
      "1.8 g",
      "0.18 g",
      "4.5 g"
    ],
    "answer": 1,
    "explanation": "0.45 g/100 mL x 400 mL = 1.8 g. This is concentration arithmetic, not a fluid-selection recommendation.",
    "reviewHref": "#percentage-basis"
  },
  {
    "id": "strength-007",
    "question": "According to the book fluid definitions, what concentrations does D5NS identify?",
    "choices": [
      "5% w/v sodium chloride and 0.9% w/v dextrose",
      "5% w/v dextrose and 0.45% w/v sodium chloride",
      "5% w/v dextrose and 0.9% w/v sodium chloride",
      "One combined 5.9% strength for each ingredient"
    ],
    "answer": 2,
    "explanation": "Read each ingredient separately: D5 is 5% dextrose and NS is 0.9% sodium chloride.",
    "reviewHref": "#percentage-basis"
  },
  {
    "id": "strength-033",
    "question": "An exercise specifies a 0.3% w/v liquid. How much ingredient is contained in a measured 0.4 mL portion?",
    "choices": [
      "1.2 mg",
      "12 mg",
      "0.12 mg",
      "120 mg"
    ],
    "answer": 0,
    "explanation": "0.3% w/v = 3 mg/mL. 3 mg/mL x 0.4 mL = 1.2 mg.",
    "reviewHref": "#percentage-basis"
  },
  {
    "id": "strength-034",
    "question": "A calculation specifies 0.6% w/v and 0.03 mL per drop. What ingredient mass is in five drops?",
    "choices": [
      "9 mg",
      "0.9 mg",
      "0.09 mg",
      "3 mg"
    ],
    "answer": 1,
    "explanation": "Five drops x 0.03 mL/drop = 0.15 mL. 0.6% w/v = 6 mg/mL; 6 x 0.15 = 0.9 mg.",
    "reviewHref": "#percentage-basis"
  },
  {
    "id": "strength-008",
    "question": "How much Ingredient A is needed in an arithmetic exercise for a final 180 mL product at 2.5% w/v?",
    "choices": [
      "45 g",
      "0.45 g",
      "2.5 g",
      "4.5 g"
    ],
    "answer": 3,
    "explanation": "2.5 g/100 mL x 180 mL = 4.5 g. The 180 mL is final product volume.",
    "reviewHref": "#finished-product"
  },
  {
    "id": "strength-009",
    "question": "An exercise specifies 90 g of a 4% w/w product using only pure Ingredient A and base. What base mass is required?",
    "choices": [
      "86.4 g",
      "90 g",
      "3.6 g",
      "93.6 g"
    ],
    "answer": 0,
    "explanation": "Ingredient mass = 90 x 4/100 = 3.6 g. Base mass = 90 - 3.6 = 86.4 g.",
    "reviewHref": "#finished-product"
  },
  {
    "id": "strength-010",
    "question": "An exercise combines 6 g of Ingredient A, 4 g of Ingredient B, and 30 g of base. What is the strength of A?",
    "choices": [
      "20% w/w",
      "15% w/w",
      "13.64% w/w",
      "6% w/w"
    ],
    "answer": 1,
    "explanation": "Total product = 6 + 4 + 30 = 40 g. A strength = (6/40) x 100 = 15% w/w.",
    "reviewHref": "#finished-product"
  },
  {
    "id": "strength-011",
    "question": "A 200 g product at 1% w/w contains A. Add 4 g of pure A. What is the final strength to the nearest hundredth?",
    "choices": [
      "3.00% w/w",
      "1.96% w/w",
      "2.94% w/w",
      "2.00% w/w"
    ],
    "answer": 2,
    "explanation": "Initially 2 g is present. Final A = 6 g; final product = 204 g. (6/204) x 100 = 2.941176...%, rounded to 2.94%.",
    "reviewHref": "#finished-product"
  },
  {
    "id": "strength-012",
    "question": "An arithmetic exercise requires a final 60 g product at 0.2% w/w A. A stock contains 30 mg/mL A. What stock volume supplies the required ingredient?",
    "choices": [
      "0.004 mL",
      "40 mL",
      "2 mL",
      "4 mL"
    ],
    "answer": 3,
    "explanation": "60 g x 0.2/100 = 0.12 g = 120 mg. 120 mg / 30 mg/mL = 4 mL. This does not establish final base mass.",
    "reviewHref": "#finished-product"
  },
  {
    "id": "strength-013",
    "question": "An exercise mixes 12 g of a 6% w/w product containing A with 18 g of ingredient-free base. What is the final strength?",
    "choices": [
      "2.4% w/w",
      "4% w/w",
      "6% w/w",
      "0.24% w/w"
    ],
    "answer": 0,
    "explanation": "A mass = 12 x 6/100 = 0.72 g. Final mass = 30 g. (0.72/30) x 100 = 2.4% w/w.",
    "reviewHref": "#finished-product"
  },
  {
    "id": "strength-032",
    "question": "An exercise specifies 1/4% w/v Ingredient A. What mass is contained in a final 600 mL product?",
    "choices": [
      "15 g",
      "0.15 g",
      "2.4 g",
      "1.5 g"
    ],
    "answer": 3,
    "explanation": "1/4% = 0.25 g per 100 mL. 0.25/100 x 600 = 1.5 g.",
    "reviewHref": "#finished-product"
  },
  {
    "id": "strength-035",
    "question": "In an arithmetic exercise, five units each supply 200 mg of A to a final 50 mL product. What is the strength?",
    "choices": [
      "20% w/v",
      "0.2% w/v",
      "2% w/v",
      "2% w/w"
    ],
    "answer": 2,
    "explanation": "Five x 200 mg = 1,000 mg = 1 g of A. (1 g / 50 mL) x 100 mL = 2 g per 100 mL, or 2% w/v.",
    "reviewHref": "#finished-product"
  },
  {
    "id": "strength-014",
    "question": "What does 1:600 w/w mean?",
    "choices": [
      "1 g of ingredient added to 600 g of base",
      "1 g of ingredient in 600 g of finished product",
      "1 g of ingredient in 600 mL of finished product",
      "600 g of ingredient in 1 g of finished product"
    ],
    "answer": 1,
    "explanation": "The w/w ratio compares ingredient mass with total finished mass. The ingredient is included in the 600 g.",
    "reviewHref": "#ratio-strength"
  },
  {
    "id": "strength-015",
    "question": "Convert 0.02% w/v to ratio strength.",
    "choices": [
      "1:500 w/v",
      "1:50,000 w/v",
      "1:5,000 w/v",
      "1:0.02 w/v"
    ],
    "answer": 2,
    "explanation": "For 1:N, N = 100/0.02 = 5,000. Keep the w/v basis.",
    "reviewHref": "#ratio-strength"
  },
  {
    "id": "strength-016",
    "question": "Convert 1:2,500 w/w to percentage strength.",
    "choices": [
      "0.4% w/w",
      "4% w/w",
      "0.004% w/w",
      "0.04% w/w"
    ],
    "answer": 3,
    "explanation": "Numerical percent = 100/2,500 = 0.04. Keep the w/w basis.",
    "reviewHref": "#ratio-strength"
  },
  {
    "id": "strength-017",
    "question": "An exercise contains 80 mg of A in 40 mL of finished product. What is the ratio strength?",
    "choices": [
      "1:500 w/v",
      "1:0.5 w/v",
      "1:50 w/v",
      "1:5,000 w/v"
    ],
    "answer": 0,
    "explanation": "80 mg = 0.08 g. 40 mL / 0.08 g = 500 mL per gram, or 1:500 w/v.",
    "reviewHref": "#ratio-strength"
  },
  {
    "id": "strength-018",
    "question": "How much A is present in 36 g of a 1:1,200 w/w product?",
    "choices": [
      "3 mg",
      "30 mg",
      "300 mg",
      "0.03 mg"
    ],
    "answer": 1,
    "explanation": "36/1,200 = 0.03 g; 0.03 g x 1,000 mg/g = 30 mg.",
    "reviewHref": "#ratio-strength"
  },
  {
    "id": "strength-019",
    "question": "An exercise combines 0.3 g of pure A with 14.7 g of base. What is the ratio strength?",
    "choices": [
      "1:49 w/w",
      "1:5 w/w",
      "1:50 w/w",
      "1:500 w/w"
    ],
    "answer": 2,
    "explanation": "Total mass = 15 g. 15/0.3 = 50, giving 1:50 w/w. Using only base in the denominator would incorrectly give 1:49.",
    "reviewHref": "#ratio-strength"
  },
  {
    "id": "strength-020",
    "question": "Convert 0.00048% w/v to ppm on the same basis.",
    "choices": [
      "0.48 ppm w/v",
      "48 ppm w/v",
      "0.048 ppm w/v",
      "4.8 ppm w/v"
    ],
    "answer": 3,
    "explanation": "Multiply numerical percent by 10,000: 0.00048 x 10,000 = 4.8 ppm w/v.",
    "reviewHref": "#ppm-ppb"
  },
  {
    "id": "strength-021",
    "question": "Convert 24 ppm w/w to percentage strength.",
    "choices": [
      "0.0024% w/w",
      "0.024% w/w",
      "0.00024% w/w",
      "0.24% w/w"
    ],
    "answer": 0,
    "explanation": "24/10,000 = 0.0024% w/w. The denominator scale changes, while the basis remains w/w.",
    "reviewHref": "#ppm-ppb"
  },
  {
    "id": "strength-022",
    "question": "Convert 0.35 ppm w/w to ppb on the same basis.",
    "choices": [
      "35 ppb w/w",
      "350 ppb w/w",
      "3,500 ppb w/w",
      "0.00035 ppb w/w"
    ],
    "answer": 1,
    "explanation": "There are 1,000 ppb per ppm on the same basis. 0.35 x 1,000 = 350 ppb w/w.",
    "reviewHref": "#ppm-ppb"
  },
  {
    "id": "strength-023",
    "question": "An exercise states 0.16 ppm w/v under the book convention. How much A is in 3 L?",
    "choices": [
      "48 mcg",
      "4,800 mcg",
      "480 mcg",
      "0.48 mcg"
    ],
    "answer": 2,
    "explanation": "0.16 ppm w/v = 0.16 mg/L. 0.16 x 3 = 0.48 mg = 480 mcg.",
    "reviewHref": "#ppm-ppb"
  },
  {
    "id": "strength-024",
    "question": "An exercise states 0.8 ppm w/v under the book convention. What volume contains 120 mcg of A?",
    "choices": [
      "15 mL",
      "1,500 mL",
      "96 mL",
      "150 mL"
    ],
    "answer": 3,
    "explanation": "0.8 ppm w/v = 0.8 mg/L = 0.8 mcg/mL. 120 mcg / 0.8 mcg/mL = 150 mL.",
    "reviewHref": "#ppm-ppb"
  },
  {
    "id": "strength-025",
    "question": "A product is specified as 6 ppm w/w. How much ingredient is in 0.5 kg of finished product?",
    "choices": [
      "3 mg",
      "3 mg/L",
      "0.3 mg",
      "30 mg"
    ],
    "answer": 0,
    "explanation": "6 ppm w/w = 6 mg/kg. 6 mg/kg x 0.5 kg = 3 mg. Retain the mass denominator; do not substitute mg/L.",
    "reviewHref": "#ppm-ppb"
  },
  {
    "id": "strength-026",
    "question": "Which statement correctly distinguishes specific gravity from density?",
    "choices": [
      "Both must be expressed in g/mL",
      "Specific gravity is dimensionless; density can be expressed in g/mL",
      "Specific gravity has mL/g units; density has no units",
      "A liquid always has specific gravity 1"
    ],
    "answer": 1,
    "explanation": "Specific gravity is a density ratio, so its units cancel. Density expresses mass per volume.",
    "reviewHref": "#specific-gravity"
  },
  {
    "id": "strength-027",
    "question": "Using the book water reference of 1 g/mL, a 250 mL liquid sample has mass 300 g. What is its specific gravity?",
    "choices": [
      "0.8333",
      "1.2 g/mL",
      "1.2",
      "0.0012"
    ],
    "answer": 2,
    "explanation": "An equal 250 mL volume of reference water has mass 250 g. Specific gravity = 300/250 = 1.2, with no units.",
    "reviewHref": "#specific-gravity"
  },
  {
    "id": "strength-028",
    "question": "A liquid has specific gravity 0.85 using the book water reference of 1 g/mL. What is the mass of 120 mL?",
    "choices": [
      "141.18 g",
      "120 g",
      "10.2 g",
      "102 g"
    ],
    "answer": 3,
    "explanation": "The corresponding density is 0.85 g/mL. 120 mL x 0.85 g/mL = 102 g.",
    "reviewHref": "#specific-gravity"
  },
  {
    "id": "strength-029",
    "question": "Using the book water reference of 1 g/mL, a liquid has specific gravity 1.4. What volume has a mass of 56 g?",
    "choices": [
      "40 mL",
      "78.4 mL",
      "56 mL",
      "0.04 mL"
    ],
    "answer": 0,
    "explanation": "The corresponding density is 1.4 g/mL. 56 g / 1.4 g/mL = 40 mL.",
    "reviewHref": "#specific-gravity"
  },
  {
    "id": "strength-030",
    "question": "Using the book water reference of 1 g/mL, a liquid has specific gravity 1.05. What is the mass of 0.6 L?",
    "choices": [
      "0.63 g",
      "630 g",
      "571.43 g",
      "600 g"
    ],
    "answer": 1,
    "explanation": "0.6 L = 600 mL. 600 mL x 1.05 g/mL = 630 g.",
    "reviewHref": "#specific-gravity"
  },
  {
    "id": "strength-031",
    "question": "A liquid density is 1.3 g/mL. What volume has mass 25 g, rounded to the nearest hundredth?",
    "choices": [
      "32.50 mL",
      "19.20 mL",
      "19.23 mL",
      "0.01923 mL"
    ],
    "answer": 2,
    "explanation": "25 g / 1.3 g/mL = 19.230769... mL; round the final result to 19.23 mL.",
    "reviewHref": "#specific-gravity"
  }
];
