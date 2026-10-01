import { pharmacyDilutionAlligationQuestionBank } from "@/data/questionBanks/pharmacyDilutionAlligation";

export const pharmacyDilutionAlligationModule = {
  "slug": "pharmacy-dilution-alligation",
  "number": "230",
  "title": "Pharmacy Dilution, Concentration, and Alligation",
  "area": "Calculations & Nutrition",
  "source": "Original NaS teaching based on RxPrep 2023, Chapter 1 formula checklist and Chapter 10 dilution/alligation calculations",
  "description": "Preserve ingredient amounts, distinguish final product from added diluent, label high and low alligation parts, and account for added stock when final volume is unknown.",
  "topics": [
    "Q1C1 = Q2C2",
    "Dilution and concentration",
    "Final versus added quantity",
    "Alligation",
    "Unknown final volume"
  ],
  "outcomes": [
    "Match quantity, concentration basis, and units in ingredient-conservation calculations.",
    "Distinguish final product quantity from added diluent or removed solvent.",
    "Allocate two stock strengths by labeled alligation and verify the weighted concentration.",
    "Solve unknown final-quantity problems while counting added stock in the denominator."
  ],
  "disclaimer": "Original arithmetic exercises are for education and are not patient-specific medical advice. Calculated quantities do not establish an appropriate dose, product, preparation, stability, compatibility, or administration plan.",
  "referenceHeading": "Book source and calculation scope.",
  "referenceIntroduction": "These original lessons and questions teach the methods on the cited pages. Formulation suitability and clinical decisions are separate from the arithmetic.",
  "references": [
    {
      "label": "RxPrep 2023 Course Book",
      "locator": "Chapter 1, required-formulas checklist, printed page 7 (PDF page 19); Chapter 10, dilution, concentration, alligation and unknown final volume, printed pages 136-139 (PDF pages 144-147), through the extra-credit box before Osmolarity."
    }
  ],
  "submodules": [
    {
      "slug": "quantity-concentration",
      "title": "Match Quantity and Concentration",
      "summary": "Keep the amount of the selected ingredient constant while changing the product quantity or strength.",
      "concepts": [
        "Q1C1 = Q2C2",
        "Matching concentration units",
        "Matching quantity units",
        "Ingredient conservation"
      ],
      "visual": "mix-quantity-concentration",
      "application": "Keep the amount of the selected ingredient constant while changing the product quantity or strength.",
      "lesson": [
        {
          "heading": "Name the four inputs",
          "body": "The book uses Q1 x C1 = Q2 x C2 when the amount of an ingredient is unchanged between a starting product and a final product. Q1 is the starting quantity, C1 the starting concentration, Q2 the final quantity, and C2 the final concentration. For w/v concentrations, use matched volume quantities; for w/w concentrations, use matched mass quantities. Both sides must use the same concentration basis and compatible units."
        },
        {
          "heading": "Solve for the requested quantity",
          "body": "An original exercise starts with 75 mL at 12% w/v and requests the final volume at 3% w/v. Q2 = (75 x 12)/3 = 300 mL. The ingredient mass is unchanged: 75 mL x 12 g/100 mL = 9 g, and 300 mL x 3 g/100 mL = 9 g. A lower concentration requires a larger final quantity when the ingredient amount is preserved."
        },
        {
          "heading": "Convert units before inserting values",
          "body": "An original exercise specifies 1.2 L of final product at 2 mg/mL and a stock at 1% w/v. Convert 1.2 L to 1,200 mL and 1% w/v to 10 mg/mL. Required stock volume = (1,200 mL x 2 mg/mL)/(10 mg/mL) = 240 mL. Putting 1 and 2 directly into the same concentration ratio would compare a percentage number with mg/mL and give an incorrect result."
        },
        {
          "heading": "Equivalent ingredient amount does not establish interchangeability",
          "body": "For arithmetic, 60 mL at 8% w/v contains the same ingredient mass as 120 mL at 4% w/v: each contains 4.8 g. The book uses this relationship when changing an available source strength. Matching ingredient amount alone does not establish a product choice, compatible preparation, dose, or administration plan."
        }
      ],
      "keyPoints": [
        "Use the same concentration basis on both sides.",
        "Convert liters to milliliters and percentages to mass/volume when needed.",
        "Q2 is the final product quantity.",
        "Check the ingredient amount by a second calculation."
      ],
      "check": {
        "question": "An exercise starts with 75 mL at 12% w/v and asks for the final volume at 3% w/v, preserving the ingredient amount. What is Q2?",
        "choices": [
          "75 mL",
          "225 mL",
          "300 mL",
          "900 mL"
        ],
        "answer": 2,
        "rationale": "Q2 = 75 x 12/3 = 300 mL. Both quantities are volumes and both concentrations use w/v.",
        "reviewHref": "#quantity-concentration"
      }
    },
    {
      "slug": "final-versus-added",
      "title": "Final Product Versus Added Diluent",
      "summary": "Identify whether the question asks for the final product, the amount added, or the amount removed.",
      "concepts": [
        "Final quantity",
        "Added diluent",
        "Concentration by evaporation",
        "0% and 100% of a selected ingredient"
      ],
      "visual": "mix-final-versus-added",
      "application": "Identify whether the question asks for the final product, the amount added, or the amount removed.",
      "lesson": [
        {
          "heading": "Subtract what is already present",
          "body": "For the preceding original example, the final volume is 300 mL and the starting volume is 75 mL. If the exercise states volumes are additive and the diluent contains none of the selected ingredient, the added diluent is 300 - 75 = 225 mL. Reporting 300 mL would answer a question about final volume, not the quantity to add."
        },
        {
          "heading": "Use the same reasoning for finished mass",
          "body": "An exercise starts with 90 g at 10% w/w and asks for a 6% w/w product by adding ingredient-free base. The final mass is (90 x 10)/6 = 150 g, and the added base is 150 - 90 = 60 g. The original 9 g of ingredient is still present; 9 g in 150 g is 6% w/w. Do not subtract a volume from a mass."
        },
        {
          "heading": "Concentrate by removing ingredient-free solvent",
          "body": "The book also applies the equation to an evaporation exercise. If a problem states that all ingredient remains while solvent is removed, an original starting volume of 600 mL at 4% w/v becomes 200 mL at 12% w/v. The removed volume is 600 - 200 = 400 mL. This is a supplied arithmetic assumption, not a recommendation to evaporate an actual product. Apply the requested rounding to the final answer after retaining intermediate precision."
        },
        {
          "heading": "Zero percent refers to the selected ingredient",
          "body": "A diluent may contain other substances while containing 0% of the ingredient being tracked. For a calculation about Ingredient A, its absence makes the diluent 0% A. Pure Ingredient A is 100% A. The word pure and the 0% statement must refer to the selected ingredient; they do not imply that every component of a vehicle is absent. If pure A is added, both the numerator and the final product quantity must reflect that addition."
        }
      ],
      "keyPoints": [
        "Final product quantity and added diluent are different answers.",
        "Keep mass and volume quantities matched.",
        "Removing ingredient-free solvent raises concentration if ingredient amount is preserved.",
        "0% and 100% refer to the ingredient in the calculation."
      ],
      "check": {
        "question": "An exercise starts with 90 g at 10% w/w and adds ingredient-free base to reach 6% w/w. What mass of base is added?",
        "choices": [
          "150 g",
          "60 g",
          "54 g",
          "9 g"
        ],
        "answer": 1,
        "rationale": "Final product = 90 x 10/6 = 150 g. Added base = 150 - 90 = 60 g.",
        "reviewHref": "#final-versus-added"
      }
    },
    {
      "slug": "alligation-parts",
      "title": "Alligation: Label the Parts",
      "summary": "Calculate how much of two available strengths produces a target between them, then verify the weighted result.",
      "concepts": [
        "Two stocks and one target",
        "High and low parts",
        "Known final quantity",
        "Midpoint and ingredient check"
      ],
      "visual": "mix-alligation-parts",
      "application": "Calculate how much of two available strengths produces a target between them, then verify the weighted result.",
      "lesson": [
        {
          "heading": "Place the target between the stock strengths",
          "body": "The book uses alligation for three concentrations: higher stock H, lower stock L, and desired strength T between them. Convert all three to the same basis and unit. The number of higher-stock parts is T - L; the number of lower-stock parts is H - T. Carry the higher and lower labels with their parts rather than treating the differences as unassigned numbers."
        },
        {
          "heading": "Use total parts to scale the mixture",
          "body": "For an original w/w exercise, H = 12%, L = 2%, and T = 5%. Higher-stock parts = 5 - 2 = 3; lower-stock parts = 12 - 5 = 7. The high-to-low ratio is 3:7, totaling 10 parts. For 150 g of final product, each part is 15 g. Use 45 g of the 12% stock and 105 g of the 2% stock."
        },
        {
          "heading": "Verify both total and ingredient",
          "body": "In that exercise, 45 + 105 = 150 g. Ingredient A mass is (45 x 12/100) + (105 x 2/100) = 5.4 + 2.1 = 7.5 g. Then (7.5/150) x 100 = 5% w/w. Switching the stock labels would preserve the total mass but give the wrong concentration. The weighted ingredient check detects that error."
        },
        {
          "heading": "Use equal quantities only at the midpoint",
          "body": "A target exactly halfway between two stock strengths requires equal amounts on the matched basis. For example, 4% and 10% w/w have midpoint 7%; 80 g of final product uses 40 g of each. A target of 5% from those same stocks is not their midpoint, so equal quantities would not meet it. A desired strength outside the two stock strengths cannot be obtained by mixing just those two stocks with nonnegative quantities."
        }
      ],
      "keyPoints": [
        "Higher-stock parts = target minus lower strength.",
        "Lower-stock parts = higher strength minus target.",
        "Divide the final quantity by total parts before allocating stock quantities.",
        "Verify both final quantity and weighted ingredient amount."
      ],
      "check": {
        "question": "An exercise uses 12% and 2% w/w stocks to make 150 g at 5% w/w. How much of the 12% stock is needed?",
        "choices": [
          "105 g",
          "75 g",
          "45 g",
          "15 g"
        ],
        "answer": 2,
        "rationale": "Higher-stock parts = 5 - 2 = 3; lower-stock parts = 12 - 5 = 7. Higher-stock amount = 150 x 3/10 = 45 g.",
        "reviewHref": "#alligation-parts"
      }
    },
    {
      "slug": "unknown-final-volume",
      "title": "When Final Volume Is Unknown",
      "summary": "Include the added stock in the final volume and solve by labeled alligation or an ingredient balance.",
      "concepts": [
        "Known stock quantity",
        "Unknown final volume",
        "Concentration units",
        "Algebra and reverse check"
      ],
      "visual": "mix-unknown-final-volume",
      "application": "Include the added stock in the final volume and solve by labeled alligation or an ingredient balance.",
      "lesson": [
        {
          "heading": "A known diluent volume is not final volume",
          "body": "An original exercise adds x mL of 40 mg/mL Ingredient A stock to 180 mL of diluent containing 0 mg/mL A, targeting 4 mg/mL. The exercise states volumes add. Final volume is 180 + x mL. The ingredient equation is 40x + (180 x 0) = 4(180 + x), not 40x = 4 x 180. Solving gives 36x = 720, so x = 20 mL and final volume = 200 mL."
        },
        {
          "heading": "The alligation ratio gives the same stock amount",
          "body": "For that same exercise, higher-stock parts = 4 - 0 = 4 and lower-stock parts = 40 - 4 = 36. The ratio is 4:36, or 1:9. If 180 mL is the nine-part diluent quantity, one stock part is 20 mL. Check in reverse: 20 mL x 40 mg/mL = 800 mg; 800 mg/200 mL = 4 mg/mL."
        },
        {
          "heading": "A known lower stock can also determine a higher quantity",
          "body": "In another original exercise, 80 mL of a 5 mg/mL stock is combined with a 20 mg/mL stock to reach 10 mg/mL, with additive volumes. Higher-stock parts = 10 - 5 = 5; lower-stock parts = 20 - 10 = 10. The 1:2 ratio means 40 mL of higher stock is needed for 80 mL of lower stock. Final volume is 120 mL. Ingredient mass is 400 + 800 = 1,200 mg; 1,200/120 = 10 mg/mL."
        },
        {
          "heading": "Pure ingredient is a stock at 100%",
          "body": "For an original w/w exercise, add x g of pure A to 60 g of a 5% w/w product to reach 10% w/w. The balance is 3 g + x g = 0.10(60 g + x g). This gives 0.90x = 3 g, so x = 3.3333... g, or 3.33 g to the nearest hundredth. This final answer is rounded after solving; the exact unrounded final mass is 63.3333... g. If a question supplies a particular stock quantity or upper bound, check that the calculated requirement fits it."
        }
      ],
      "keyPoints": [
        "The added stock belongs in the final quantity.",
        "Use 0 only for absence of the ingredient being tracked.",
        "Labeled alligation and ingredient-balance algebra should agree.",
        "Keep intermediate precision and check stock availability."
      ],
      "check": {
        "question": "An exercise adds 40 mg/mL stock to 180 mL of ingredient-free diluent, targeting 4 mg/mL. Volumes add. What stock volume is needed?",
        "choices": [
          "18 mL",
          "20 mL",
          "200 mL",
          "4.5 mL"
        ],
        "answer": 1,
        "rationale": "40x = 4(180 + x), so 36x = 720 and x = 20 mL. The final volume is 200 mL, not 180 mL.",
        "reviewHref": "#unknown-final-volume"
      }
    }
  ]
,
  questionBank: pharmacyDilutionAlligationQuestionBank,
};
