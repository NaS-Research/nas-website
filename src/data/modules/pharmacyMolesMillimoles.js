import { pharmacyMolesMillimolesQuestionBank } from "@/data/questionBanks/pharmacyMolesMillimoles";

export const pharmacyMolesMillimolesModule = {
  "slug": "pharmacy-moles-millimoles",
  "number": "233",
  "title": "Pharmacy Moles and Millimoles",
  "area": "Calculations & Nutrition",
  "source": "Original NaS teaching based on RxPrep 2023, Chapter 1 formula checklist and Chapter 10 moles and millimoles subsection",
  "description": "Convert compound mass to moles or millimoles, find total amount from solution strength, and reverse the calculation for a stated per-volume target.",
  "topics": [
    "Moles",
    "Millimoles",
    "Molecular weight",
    "Mass and solution strength",
    "Reverse mass calculations"
  ],
  "outcomes": [
    "Use the stated molecular weight with matched mass and amount units.",
    "Find total millimoles from percentage or mass-per-volume strength.",
    "Calculate required mass from a mole or millimole target and verify the result in reverse."
  ],
  "disclaimer": "Original calculation exercises are for education and not patient-specific medical advice or a complete formulation or administration plan.",
  "referenceHeading": "Book source and calculation assumptions.",
  "referenceIntroduction": "Original lessons and quantities apply the supplied-book mass-to-mole and reverse-mass methods with explicitly stated molecular weights and solution strengths.",
  "references": [
    {
      "label": "RxPrep 2023 Course Book",
      "locator": "Chapter 1, required-formulas checklist, printed page 7 (PDF page 19); Chapter 10, Moles and Millimoles, printed pages 144-146 (PDF pages 152-154), ending before Milliequivalents."
    }
  ],
  "submodules": [
    {
      "slug": "mass-to-moles",
      "title": "Convert Mass to Moles and Millimoles",
      "summary": "Match grams with moles and milligrams with millimoles using the supplied molecular weight.",
      "concepts": [
        "Molecular weight",
        "mol and mmol",
        "g and mg",
        "Specified compound form"
      ],
      "visual": "molcalc-mass-to-moles",
      "application": "Match grams with moles and milligrams with millimoles using the supplied molecular weight.",
      "lesson": [
        {
          "heading": "Read the molecular weight as a mass relationship",
          "body": "The book expresses the mass of one mole through molecular weight, MW, in g/mol. For a stated MW of 160 g/mol, 160 g represents 1 mol of that specified substance. A millimole is one-thousandth of a mole: 1 mol = 1,000 mmol. The same numerical MW is 160 mg per mmol. Moles and millimoles describe amount of the specified substance; grams and milligrams describe its mass."
        },
        {
          "heading": "Use the mass unit that matches the requested amount",
          "body": "The source formulas are mol = g/MW and mmol = mg/MW, using the supplied numerical MW in g/mol. In an original example, 32 g of a compound with MW 160 gives 32/160 = 0.20 mol. Another example, 480 mg with MW 160, gives 480/160 = 3 mmol. Dividing milligrams by that numerical MW gives mmol, not mol."
        },
        {
          "heading": "Convert the units and verify by a second path",
          "body": "For an original 1.8 g sample with MW 120, convert 1.8 g to 1,800 mg and divide by 120 to obtain 15 mmol. A second path gives 1.8/120 = 0.015 mol, followed by 0.015 x 1,000 = 15 mmol. Keep intermediate precision until the requested final rounding. For 0.72 g with MW 175, 0.0041142857... mol becomes 0.004 mol when three decimal places are requested."
        },
        {
          "heading": "Use the stated form without adding a particle or charge factor",
          "body": "The book examples supply a molecular weight for the compound form being calculated. Use that value; do not replace it with a different form or multiply by dissociation particles when asked for mmol of the compound. The book notes that mEq and mmol are numerically equal for monovalent species. General charge-based mEq calculations are addressed separately; equality must not be assumed for every compound."
        }
      ],
      "keyPoints": [
        "mol = g/MW; mmol = mg/MW.",
        "1 mol = 1,000 mmol; 1 g = 1,000 mg.",
        "Use the supplied form and MW, then apply the requested final rounding."
      ],
      "check": {
        "question": "How many millimoles are in 1.8 g of a specified compound with MW 120 g/mol?",
        "choices": [
          "0.015 mmol",
          "15 mmol",
          "150 mmol",
          "1,800 mmol"
        ],
        "answer": 1,
        "rationale": "1.8 g = 1,800 mg. 1,800/120 = 15 mmol.",
        "reviewHref": "#mass-to-moles"
      }
    },
    {
      "slug": "solution-to-millimoles",
      "title": "Find Millimoles in a Solution",
      "summary": "Calculate solute mass in the stated volume before converting it to mmol.",
      "concepts": [
        "Percent w/v",
        "mg/mL",
        "Total amount",
        "Amount per volume"
      ],
      "visual": "molcalc-solution-to-millimoles",
      "application": "Calculate solute mass in the stated volume before converting it to mmol.",
      "lesson": [
        {
          "heading": "Start with the solute mass",
          "body": "A % w/v strength gives grams per 100 mL of finished solution. In an original example, 4% w/v Compound A in 25 mL contains 4 g/100 mL x 25 mL = 1 g. With stated MW 200, 1,000 mg/200 = 5 mmol of A. The volume first determines solute mass; it does not replace mass in the MW formula."
        },
        {
          "heading": "Use a mass concentration directly when it is supplied",
          "body": "An original solution contains 12 mg/mL A, MW 120, in 50 mL. Total mass = 12 x 50 = 600 mg; total amount = 600/120 = 5 mmol. The concentration is 5 mmol/50 mL = 0.1 mmol/mL. These are different answers to different requests: 5 mmol is an amount, while 0.1 mmol/mL is an amount per volume."
        },
        {
          "heading": "Scale an amount-per-volume statement",
          "body": "If an original exercise specifies 1.2 mmol of A in each 4 mL, a total 60 mL contains 60 mL x 1.2 mmol/4 mL = 18 mmol. Cancel mL in the proportion. Dividing 1.2 by 4 first gives 0.3 mmol/mL; multiplying that concentration by the total volume gives the same 18 mmol."
        },
        {
          "heading": "Check concentration and total amount separately",
          "body": "For an original 3% w/v solution with MW 150 in final 40 mL, mass is 1.2 g = 1,200 mg and total amount is 8 mmol. Its concentration is 8/40 = 0.2 mmol/mL. Reverse the calculation: 0.2 mmol/mL x 40 mL x 150 mg/mmol = 1,200 mg. Increasing volume at an unchanged strength increases total amount while leaving the concentration unchanged."
        }
      ],
      "keyPoints": [
        "Find mass from strength and the stated finished volume.",
        "Convert that mass to mg before using mmol = mg/MW.",
        "Label total mmol separately from mmol/mL."
      ],
      "check": {
        "question": "A 4% w/v solution has stated MW 200 g/mol. How many millimoles of the compound are in 25 mL?",
        "choices": [
          "0.005 mmol",
          "50 mmol",
          "5 mmol",
          "200 mmol"
        ],
        "answer": 2,
        "rationale": "4 g/100 mL x 25 mL = 1 g = 1,000 mg. 1,000/200 = 5 mmol.",
        "reviewHref": "#solution-to-millimoles"
      }
    },
    {
      "slug": "millimoles-to-mass",
      "title": "Convert Moles or Millimoles Back to Mass",
      "summary": "Reverse the MW relationship and scale a per-volume target to the entire preparation.",
      "concepts": [
        "Reverse calculation",
        "mg and g",
        "Per-volume target",
        "Stock volume"
      ],
      "visual": "molcalc-millimoles-to-mass",
      "application": "Reverse the MW relationship and scale a per-volume target to the entire preparation.",
      "lesson": [
        {
          "heading": "Multiply amount by molecular weight",
          "body": "Rearrange the book equations: g = mol x MW, and mg = mmol x MW. An original 0.25 mmol target with MW 160 requires 40 mg. An original 0.012 mol target with MW 100 requires 1.2 g. Do not divide the amount by MW when finding mass; division is used in the opposite direction."
        },
        {
          "heading": "Scale the whole preparation before finding mass",
          "body": "An original calculation specifies final 90 mL with 0.8 mmol A per 6 mL and MW 150. The total amount is 90 x 0.8/6 = 12 mmol. Total mass = 12 x 150 = 1,800 mg = 1.8 g. Using only the amount in one 6 mL portion would find the mass for a single portion rather than the complete preparation."
        },
        {
          "heading": "Connect the required mass to a stated stock concentration",
          "body": "For that original 12 mmol target and MW 150, a stock at 30 mg/mL supplies the 1,800 mg in 60 mL. This is the stock volume needed to supply the mass. It does not replace the specified final 90 mL volume. The source calculation establishes the required mass; stock-volume division applies the already-reviewed concentration method to explicitly supplied inputs."
        },
        {
          "heading": "Verify the result with units and the original target",
          "body": "Check 1.8 g = 1,800 mg; 1,800/150 = 12 mmol. Dividing by the final 90 mL gives 0.133333... mmol/mL; multiplying by 6 mL returns the original 0.8 mmol per portion. Keep intermediate precision and round only as instructed. These original exercises teach mass and amount relationships and do not determine a patient dose or establish a complete clinical formulation."
        }
      ],
      "keyPoints": [
        "mg = mmol x MW; g = mol x MW.",
        "Find total amount from the per-volume instruction first.",
        "Verify mass, total amount and portion amount in reverse."
      ],
      "check": {
        "question": "A calculation specifies final 90 mL containing 0.8 mmol A per 6 mL, MW 150 g/mol. What total mass of A is required in grams?",
        "choices": [
          "0.12 g",
          "12 g",
          "180 g",
          "1.8 g"
        ],
        "answer": 3,
        "rationale": "Total = 90 x 0.8/6 = 12 mmol. Mass = 12 x 150 = 1,800 mg = 1.8 g.",
        "reviewHref": "#millimoles-to-mass"
      }
    }
  ]
,
  questionBank: pharmacyMolesMillimolesQuestionBank,
};
