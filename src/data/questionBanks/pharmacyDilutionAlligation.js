export const pharmacyDilutionAlligationQuestionBank = [
  {
    "id": "mix-001",
    "question": "Which condition is required for Q1C1 = Q2C2 in these dilution exercises?",
    "choices": [
      "The amount of the selected ingredient is preserved",
      "The starting and final volumes are equal",
      "Both concentrations are always 100%",
      "Concentration units may be different without conversion"
    ],
    "answer": 0,
    "explanation": "The two sides track the same ingredient amount when basis and units match. For numerical percentage strengths, the common per-100 factor cancels from the equation.",
    "reviewHref": "#quantity-concentration"
  },
  {
    "id": "mix-002",
    "question": "An exercise starts with 120 mL at 10% w/v and dilutes to 4% w/v. What is the final volume?",
    "choices": [
      "180 mL",
      "300 mL",
      "48 mL",
      "1,200 mL"
    ],
    "answer": 1,
    "explanation": "Q2 = 120 x 10/4 = 300 mL. This is final volume.",
    "reviewHref": "#quantity-concentration"
  },
  {
    "id": "mix-003",
    "question": "How much 15% w/v stock supplies the ingredient amount in a final 450 mL product at 2% w/v?",
    "choices": [
      "30 mL",
      "67.5 mL",
      "60 mL",
      "450 mL"
    ],
    "answer": 2,
    "explanation": "Stock volume = 450 x 2/15 = 60 mL. Ingredient mass is 9 g on either side.",
    "reviewHref": "#quantity-concentration"
  },
  {
    "id": "mix-004",
    "question": "An exercise uses 2% w/v stock for a final 0.8 L product at 5 mg/mL. What stock volume is required?",
    "choices": [
      "2,000 mL",
      "20 mL",
      "80 mL",
      "200 mL"
    ],
    "answer": 3,
    "explanation": "0.8 L = 800 mL; 2% w/v = 20 mg/mL. Stock = 800 x 5/20 = 200 mL.",
    "reviewHref": "#quantity-concentration"
  },
  {
    "id": "mix-005",
    "question": "What final strength results when 160 mL at 6% w/v is diluted to 480 mL, preserving ingredient amount?",
    "choices": [
      "2% w/v",
      "18% w/v",
      "3% w/v",
      "0.2% w/v"
    ],
    "answer": 0,
    "explanation": "C2 = 160 x 6/480 = 2% w/v.",
    "reviewHref": "#quantity-concentration"
  },
  {
    "id": "mix-006",
    "question": "How much 5% w/v product contains the same ingredient amount as 90 mL at 10% w/v?",
    "choices": [
      "45 mL",
      "180 mL",
      "90 mL",
      "900 mL"
    ],
    "answer": 1,
    "explanation": "Q2 = 90 x 10/5 = 180 mL. Equivalent ingredient amount does not establish clinical interchangeability.",
    "reviewHref": "#quantity-concentration"
  },
  {
    "id": "mix-007",
    "question": "Before using Q1C1 = Q2C2 with 1% w/v and 4 mg/mL, what is necessary?",
    "choices": [
      "Treat the numbers 1 and 4 as already matching",
      "Convert every volume to grams without density",
      "Express both concentrations in matching units",
      "Replace both concentrations with zero"
    ],
    "answer": 2,
    "explanation": "1% w/v = 10 mg/mL. A numerical percentage and mg/mL cannot be inserted as though they were the same unit.",
    "reviewHref": "#quantity-concentration"
  },
  {
    "id": "mix-008",
    "question": "Starting with 120 mL at 10% w/v, an exercise reaches 4% w/v using ingredient-free diluent and additive volumes. How much diluent is added?",
    "choices": [
      "300 mL",
      "48 mL",
      "120 mL",
      "180 mL"
    ],
    "answer": 3,
    "explanation": "Final volume = 120 x 10/4 = 300 mL. Added diluent = 300 - 120 = 180 mL.",
    "reviewHref": "#final-versus-added"
  },
  {
    "id": "mix-009",
    "question": "How much ingredient-free base is added to 80 g at 9% w/w to make 6% w/w?",
    "choices": [
      "40 g",
      "120 g",
      "53.33 g",
      "7.2 g"
    ],
    "answer": 0,
    "explanation": "Final mass = 80 x 9/6 = 120 g. Added base = 120 - 80 = 40 g.",
    "reviewHref": "#final-versus-added"
  },
  {
    "id": "mix-010",
    "question": "An exercise removes ingredient-free solvent from 750 mL at 4% w/v to reach 10% w/v. What is the final volume?",
    "choices": [
      "450 mL",
      "300 mL",
      "1,875 mL",
      "75 mL"
    ],
    "answer": 1,
    "explanation": "If all ingredient remains, Q2 = 750 x 4/10 = 300 mL.",
    "reviewHref": "#final-versus-added"
  },
  {
    "id": "mix-011",
    "question": "An exercise removes ingredient-free solvent from 750 mL at 4% w/v to reach 10% w/v. How much volume is removed?",
    "choices": [
      "300 mL",
      "1,050 mL",
      "450 mL",
      "75 mL"
    ],
    "answer": 2,
    "explanation": "Final volume = 300 mL. Removed volume = 750 - 300 = 450 mL.",
    "reviewHref": "#final-versus-added"
  },
  {
    "id": "mix-012",
    "question": "In an Ingredient A balance, a vehicle contains other substances but no A. What concentration of A belongs in the equation?",
    "choices": [
      "100%",
      "The sum of every other ingredient percentage",
      "It cannot be represented in the equation",
      "0"
    ],
    "answer": 3,
    "explanation": "Zero refers to absence of the selected ingredient A, not absence of all substances in the vehicle.",
    "reviewHref": "#final-versus-added"
  },
  {
    "id": "mix-013",
    "question": "What concentration represents pure Ingredient A on a w/w basis in an A calculation?",
    "choices": [
      "100% w/w",
      "0% w/w",
      "1% w/w",
      "10% w/w"
    ],
    "answer": 0,
    "explanation": "Pure A contributes 100 g of A per 100 g of the pure ingredient.",
    "reviewHref": "#final-versus-added"
  },
  {
    "id": "mix-014",
    "question": "A dilution exercise gives an unrounded final mass of 225.6666... g from a starting 70 g. What added-base mass is reported to the nearest tenth?",
    "choices": [
      "225.7 g",
      "155.7 g",
      "155.6 g",
      "156 g"
    ],
    "answer": 1,
    "explanation": "Added base = 225.6666... - 70 = 155.6666... g. Round the final added-base answer to 155.7 g.",
    "reviewHref": "#final-versus-added"
  },
  {
    "id": "mix-015",
    "question": "For 14% and 4% w/w stocks with a target of 8% w/w, what is the higher-stock to lower-stock parts ratio?",
    "choices": [
      "6:4",
      "14:4",
      "4:6",
      "8:10"
    ],
    "answer": 2,
    "explanation": "Higher-stock parts = 8 - 4 = 4; lower-stock parts = 14 - 8 = 6.",
    "reviewHref": "#alligation-parts"
  },
  {
    "id": "mix-016",
    "question": "How much 14% w/w stock is needed with 4% w/w stock to make 200 g at 8% w/w?",
    "choices": [
      "120 g",
      "100 g",
      "40 g",
      "80 g"
    ],
    "answer": 3,
    "explanation": "The higher-stock fraction is (8 - 4)/(14 - 4) = 4/10. 200 x 4/10 = 80 g.",
    "reviewHref": "#alligation-parts"
  },
  {
    "id": "mix-017",
    "question": "How much 4% w/w stock is needed with 14% w/w stock to make 200 g at 8% w/w?",
    "choices": [
      "120 g",
      "80 g",
      "100 g",
      "60 g"
    ],
    "answer": 0,
    "explanation": "The lower-stock fraction is (14 - 8)/(14 - 4) = 6/10. 200 x 6/10 = 120 g.",
    "reviewHref": "#alligation-parts"
  },
  {
    "id": "mix-018",
    "question": "Mix 80 g at 14% w/w with 120 g at 4% w/w. What strength does an ingredient check give?",
    "choices": [
      "10% w/w",
      "8% w/w",
      "9% w/w",
      "16% w/w"
    ],
    "answer": 1,
    "explanation": "Ingredient mass = 80 x 0.14 + 120 x 0.04 = 16 g. 16 g/200 g x 100 = 8% w/w.",
    "reviewHref": "#alligation-parts"
  },
  {
    "id": "mix-019",
    "question": "How much of each 3% and 9% w/w stock makes 120 g at 6% w/w?",
    "choices": [
      "40 g of 9% and 80 g of 3%",
      "80 g of 9% and 40 g of 3%",
      "60 g of each",
      "120 g of each"
    ],
    "answer": 2,
    "explanation": "6% is the midpoint of 3% and 9%, so equal masses supply the 120 g total.",
    "reviewHref": "#alligation-parts"
  },
  {
    "id": "mix-020",
    "question": "Can a 12% w/w product be made by mixing only 3% and 9% w/w stocks with nonnegative quantities?",
    "choices": [
      "Yes; use equal masses",
      "Yes; use three times as much 3% stock",
      "Yes; ignore the target percentage",
      "No; the target is outside the available strengths"
    ],
    "answer": 3,
    "explanation": "Alligation mixtures lie between the two stock strengths. 12% exceeds the higher 9% stock.",
    "reviewHref": "#alligation-parts"
  },
  {
    "id": "mix-021",
    "question": "An exercise combines 2% and 8% w/v stocks to obtain 500 mL at 5% w/v, assuming additive volumes. How much 8% stock is needed?",
    "choices": [
      "250 mL",
      "125 mL",
      "375 mL",
      "500 mL"
    ],
    "answer": 0,
    "explanation": "5% is the midpoint of 2% and 8%, so each stock supplies half of 500 mL.",
    "reviewHref": "#alligation-parts"
  },
  {
    "id": "mix-022",
    "question": "An exercise adds 30 mg/mL stock to 160 mL of ingredient-free diluent to reach 6 mg/mL. Volumes add. What stock volume is needed?",
    "choices": [
      "32 mL",
      "40 mL",
      "200 mL",
      "5.33 mL"
    ],
    "answer": 1,
    "explanation": "30x = 6(160 + x); 24x = 960, so x = 40 mL. Final volume = 200 mL.",
    "reviewHref": "#unknown-final-volume"
  },
  {
    "id": "mix-023",
    "question": "An exercise adds 30 mg/mL stock to 160 mL of ingredient-free diluent to reach 6 mg/mL. What is the final volume if volumes add?",
    "choices": [
      "160 mL",
      "40 mL",
      "200 mL",
      "192 mL"
    ],
    "answer": 2,
    "explanation": "The required stock is 40 mL, so final volume = 160 + 40 = 200 mL.",
    "reviewHref": "#unknown-final-volume"
  },
  {
    "id": "mix-024",
    "question": "An exercise combines 100 mL at 4 mg/mL with 16 mg/mL stock to reach 8 mg/mL, with additive volumes. What volume of higher stock is needed?",
    "choices": [
      "25 mL",
      "100 mL",
      "200 mL",
      "50 mL"
    ],
    "answer": 3,
    "explanation": "Higher:lower parts = (8 - 4):(16 - 8) = 4:8 = 1:2. For 100 mL lower stock, use 50 mL higher stock.",
    "reviewHref": "#unknown-final-volume"
  },
  {
    "id": "mix-025",
    "question": "An exercise supplies a lower stock at 40 mg/5 mL and a higher stock at 25 mg/mL. What higher:lower ratio gives 15 mg/mL?",
    "choices": [
      "7:10",
      "10:7",
      "25:40",
      "15:25"
    ],
    "answer": 0,
    "explanation": "Lower stock = 40/5 = 8 mg/mL. Higher parts = 15 - 8 = 7; lower parts = 25 - 15 = 10.",
    "reviewHref": "#unknown-final-volume"
  },
  {
    "id": "mix-027",
    "question": "An exercise requires 50 mL of higher stock by alligation, but only 35 mL is available. What does the arithmetic establish?",
    "choices": [
      "35 mL automatically produces the target",
      "The target can be ignored",
      "The available higher-stock quantity is insufficient for the stated target and fixed lower-stock quantity",
      "The lower-stock quantity never matters"
    ],
    "answer": 2,
    "explanation": "The 50 mL requirement cannot be met with 35 mL under the stated conditions. Do not substitute a smaller stock amount and claim the same target concentration.",
    "reviewHref": "#unknown-final-volume"
  },
  {
    "id": "mix-026",
    "question": "Add pure A to 80 g at 5% w/w to reach 10% w/w. What mass of pure A is added to the nearest hundredth?",
    "choices": [
      "4.00 g",
      "4.44 g",
      "8.00 g",
      "84.44 g"
    ],
    "answer": 1,
    "explanation": "Starting A = 4 g. 4 + x = 0.10(80 + x), so 0.90x = 4 and x = 4.4444... g, rounded to 4.44 g.",
    "reviewHref": "#unknown-final-volume"
  }
];
