import { pharmacyIsotonicityCalculationsQuestionBank } from "@/data/questionBanks/pharmacyIsotonicityCalculations";

export const pharmacyIsotonicityCalculationsModule = {
  "slug": "pharmacy-isotonicity-calculations",
  "number": "232",
  "title": "Pharmacy Isotonicity and Sodium Chloride Equivalents",
  "area": "Calculations & Nutrition",
  "source": "Original NaS teaching based on RxPrep 2023, Chapter 1 formula checklist and Chapter 10 isotonicity subsection",
  "description": "Use the stated dissociation factor and sodium chloride equivalent to calculate a final-volume target, subtract existing contributions and distinguish stock volume from finished volume.",
  "topics": [
    "Isotonicity calculations",
    "Dissociation factor",
    "Sodium chloride equivalent",
    "E value",
    "Final volume and rounding"
  ],
  "outcomes": [
    "Select the stated dissociation factor and calculate or interpret E.",
    "Calculate the NaCl reference target and subtract solute contributions with matched mass units.",
    "Integrate stock strength, final compound mass, final volume and explicit rounding instructions."
  ],
  "disclaimer": "Original arithmetic exercises are for education and not patient-specific medical advice. A NaCl-equivalent result does not establish a complete formulation, clinical suitability, compatibility, stability, sterility or administration plan.",
  "referenceHeading": "Book source and calculation assumptions.",
  "referenceIntroduction": "Original lessons apply the supplied-book sodium chloride equivalent method and stated inputs. The exercises identify their reference target, final volume, E values and rounding conventions.",
  "references": [
    {
      "label": "RxPrep 2023 Course Book",
      "locator": "Chapter 1, required-formulas checklist, printed page 7 (PDF page 19); Chapter 10, Isotonicity, printed pages 142-144 (PDF pages 150-152), ending before Moles and Millimoles."
    }
  ],
  "submodules": [
    {
      "slug": "dissociation-e-value",
      "title": "Dissociation Factors and E Values",
      "summary": "Use the book dissociation model and molecular weight to calculate a sodium chloride equivalent.",
      "concepts": [
        "Tonicity reference",
        "80% dissociation model",
        "Molecular weight",
        "Sodium chloride equivalent"
      ],
      "visual": "isocalc-dissociation-e-value",
      "application": "Select the factor and mass-equivalence relationship stated by the exercise.",
      "lesson": [
        {
          "heading": "Name the calculation model",
          "body": "The source introduces tonicity through osmotic-pressure differences, water movement toward higher solute concentrations, and the desire for isotonic eye and nasal preparations. Its calculation method uses an osmotic reference equivalent to 0.9% sodium chloride. These original exercises adopt that specified reference and final volume; their arithmetic alone does not establish a complete preparation or patient-specific treatment."
        },
        {
          "heading": "Use the dissociation factor supplied by the model",
          "body": "The book table uses i = 1 for a nonionic compound. Under its stated 80% dissociation model, compounds producing two, three, four and five ions have i values of 1.8, 2.6, 3.4 and 4.2. The table adds 0.8 for each additional ion beyond one. This is distinct from the idealized integer particle counts used in the preceding osmolarity exercises. Follow the factor specified by the problem rather than switching models silently."
        },
        {
          "heading": "Interpret the sodium chloride equivalent",
          "body": "The sodium chloride equivalent, E, compares the compound contribution with the mass of sodium chloride producing the same modeled osmotic effect. E = 0.20 means 1 g of the specified compound represents 0.20 g NaCl equivalent. It does not mean that the compound contains actual sodium chloride or that 0.20 g must always be added. Multiply compound mass by E to obtain its equivalent contribution, using grams with grams or milligrams with milligrams."
        },
        {
          "heading": "Calculate E with the stated molecular weight",
          "body": "The book formula is E = (58.5 x i)/(MW x 1.8), where MW is the molecular weight of the specified compound in g/mol. The sodium chloride reference uses MW 58.5 and factor 1.8. In an original exercise with MW 150 and i 1.8, E = 58.5/150 = 0.39. For a nonionic compound with MW 250 and i one, E = 58.5/(250 x 1.8) = 0.13."
        },
        {
          "heading": "Keep computed and supplied E values distinct",
          "body": "If an exercise gives E, use that supplied value. If it asks you to compute E and then report E to two decimal places, round the requested E answer. If a combined exercise directs retaining intermediate precision, carry the calculated E through the mass subtraction before rounding the final NaCl answer. The source rounds E before using it in its final worked example; the original exercises here state the rounding convention explicitly."
        }
      ],
      "keyPoints": [
        "The book E-value model uses a NaCl factor of 1.8.",
        "E is a mass-equivalence ratio, not a percentage or actual salt content.",
        "Use the stated compound form, MW and rounding instructions."
      ],
      "check": {
        "question": "An original nonionic-compound exercise supplies MW 250 g/mol and i = 1. What E follows from 58.5i/(MW x 1.8)?",
        "choices": [
          "0.13",
          "0.23",
          "0.25",
          "1.30"
        ],
        "answer": 0,
        "rationale": "58.5/(250 x 1.8) = 0.13.",
        "reviewHref": "#dissociation-e-value"
      }
    },
    {
      "slug": "nacl-adjustment",
      "title": "Calculate Additional Sodium Chloride",
      "summary": "Find the final-volume reference target, subtract solute equivalents, and check the finished balance.",
      "concepts": [
        "0.9% reference target",
        "Final compound mass",
        "Equivalent subtraction",
        "Consistent mass units"
      ],
      "visual": "isocalc-nacl-adjustment",
      "application": "Account for the contribution already present before calculating additional NaCl.",
      "lesson": [
        {
          "heading": "Calculate the target for final volume",
          "body": "The first book step is the amount of NaCl represented by the 0.9% reference in the desired final volume. In grams, target = 0.009 g/mL x final mL; in milligrams, target = 9 mg/mL x final mL. An original final 50 mL exercise therefore has target 0.45 g, or 450 mg. This is the full reference target before subtracting the compound contribution."
        },
        {
          "heading": "Subtract the compound contribution",
          "body": "If that original 50 mL exercise contains 0.60 g A with supplied E 0.20, A represents 0.60 x 0.20 = 0.12 g NaCl equivalent. Additional NaCl = 0.45 - 0.12 = 0.33 g. Verify in reverse: 0.33 g NaCl plus 0.12 g equivalent = 0.45 g target. Adding the full 0.45 g would ignore the contribution already present."
        },
        {
          "heading": "Convert strength to final mass and keep units matched",
          "body": "For an original final 20 mL at 1.5% w/v, compound mass is 1.5 g/100 mL x 20 mL = 0.30 g, or 300 mg. With E 0.12, its equivalent is 36 mg. Target = 180 mg and additional NaCl = 144 mg. Do not subtract 0.036 g from 180 mg without first matching units. If an exercise specifies multiple solute equivalents or NaCl already present, account for each stated contribution before taking the difference."
        },
        {
          "heading": "Check zero and negative differences",
          "body": "The subtraction can give zero when the existing equivalent equals the target. If the stated contribution exceeds the target, the arithmetic difference is negative. A positive NaCl addition cannot reduce that modeled contribution. Recheck the inputs and the requested task rather than reporting the absolute value as salt to add. This is an arithmetic feasibility check; the lesson does not prescribe a clinical reformulation."
        }
      ],
      "keyPoints": [
        "The full target uses final volume: 0.009 g/mL or 9 mg/mL.",
        "Additional NaCl is target minus contributions already present.",
        "Check the finished equivalent sum and the sign of the result."
      ],
      "check": {
        "question": "An exercise states final 50 mL, 0.60 g A and supplied E 0.20. Using the 0.9% NaCl reference, how much NaCl is added?",
        "choices": [
          "0.45 g",
          "0.33 g",
          "0.57 g",
          "0.12 g"
        ],
        "answer": 1,
        "rationale": "Target = 0.45 g; A equivalent = 0.12 g. Add 0.45 - 0.12 = 0.33 g.",
        "reviewHref": "#nacl-adjustment"
      }
    },
    {
      "slug": "stock-final-volume",
      "title": "Stock Strength, Final Volume, and Rounding",
      "summary": "Connect the selected stock volume to final compound mass without replacing the prescribed final-volume target.",
      "concepts": [
        "Stock volume",
        "Final product volume",
        "Computed versus supplied E",
        "Original integrated calculation"
      ],
      "visual": "isocalc-stock-final-volume",
      "application": "Keep stock quantity, compound mass and NaCl-equivalent subtraction in their separate roles.",
      "lesson": [
        {
          "heading": "Find compound mass before stock volume",
          "body": "An original exercise specifies final 25 mL at 1% w/v A and stock at 25 mg/mL. Required A mass = 1 g/100 mL x 25 mL = 0.25 g = 250 mg. Required stock = 250 mg/(25 mg/mL) = 10 mL. The stock volume supplies the final compound mass; it does not replace the stated final 25 mL volume."
        },
        {
          "heading": "Use the finished volume in the NaCl target",
          "body": "For that exercise, with supplied E 0.12, the A equivalent is 250 x 0.12 = 30 mg. The final-volume reference target is 25 mL x 9 mg/mL = 225 mg. Additional NaCl = 225 - 30 = 195 mg. Using the 10 mL stock volume would instead produce an incorrect 90 mg target. Water qs to the final volume includes the stock and other ingredients; it does not mean adding the full final-volume number as extra water."
        },
        {
          "heading": "State intermediate rounding explicitly",
          "body": "An original compound has MW 200 and i one, giving E = 0.1625. For 0.40 g A in final 20 mL, retaining that E gives equivalent 0.065 g and NaCl addition 0.180 - 0.065 = 0.115 g. A different exercise that explicitly supplies E 0.16 gives equivalent 0.064 g and addition 0.116 g. Both follow their stated inputs; do not silently substitute a rounded E when the exercise asks for intermediate precision."
        },
        {
          "heading": "Verify all three quantities in an integrated exercise",
          "body": "An original exercise requests final 40 mL at 0.5% w/v A, with MW 150, i 1.8, and stock 10 mg/mL. E = 0.39; final A mass = 200 mg and required stock = 20 mL. The equivalent is 78 mg, target 360 mg, and NaCl addition 282 mg. Reverse check: 78 + 282 = 360 mg. A changed stock concentration would change stock volume while leaving the specified final mass and E subtraction unchanged. These calculations do not establish sterility, stability, compatibility, administration suitability or a clinical product choice."
        }
      ],
      "keyPoints": [
        "Stock volume supplies the mass; final volume sets the reference target.",
        "Use the E value and rounding convention specified in the exercise.",
        "Check stock mass and the final equivalent sum independently."
      ],
      "check": {
        "question": "An original final 25 mL exercise contains 1% w/v A, stock 25 mg/mL and supplied E 0.12. Using the 0.9% NaCl reference, how much NaCl is added in milligrams?",
        "choices": [
          "225 mg",
          "30 mg",
          "195 mg",
          "60 mg"
        ],
        "answer": 2,
        "rationale": "Final A mass = 250 mg, supplied by 10 mL stock. Equivalent = 30 mg; final-volume target = 225 mg. Add 195 mg.",
        "reviewHref": "#stock-final-volume"
      }
    }
  ]
,
  questionBank: pharmacyIsotonicityCalculationsQuestionBank,
};
