import { pharmacyMilliequivalentCalculationsQuestionBank } from "@/data/questionBanks/pharmacyMilliequivalentCalculations";

export const pharmacyMilliequivalentCalculationsModule = {
  "slug": "pharmacy-milliequivalent-calculations",
  "number": "234",
  "title": "Pharmacy Milliequivalent Calculations",
  "area": "Calculations & Nutrition",
  "source": "Original NaS teaching based on RxPrep 2023, Chapter 1 formula checklist, required-formula conversion sheet and Chapter 10 milliequivalents subsection",
  "description": "Distinguish valence from particle count, calculate mEq from compound mass and solution strength, and convert stated potassium and lithium formulations with explicit ratios and rounding.",
  "topics": [
    "Milliequivalents",
    "Valence and ionic charge",
    "Molecular weight",
    "Solution strength",
    "Potassium and lithium formulation ratios"
  ],
  "outcomes": [
    "Select the source valence factor without substituting particle count or summing both charge sides.",
    "Convert compound mass, mEq and solution amounts with the specified MW and form.",
    "Use supplied formulation ratios and distinguish daily amount, portion amount and MW-method rounding."
  ],
  "disclaimer": "Original calculation exercises are for education and not patient-specific medical advice, a dose selection or a formulation-switch or administration plan.",
  "referenceHeading": "Book source and calculation assumptions.",
  "referenceIntroduction": "Original teaching and exercises apply the supplied-book mEq formulas and explicitly stated salt forms, molecular weights, concentrations and formulation ratios.",
  "references": [
    {
      "label": "RxPrep 2023 Course Book",
      "locator": "Chapter 1, required-formulas checklist, printed page 7 (PDF page 19), and required-formula conversion sheet, printed page 23 (PDF page 35), oral KCl and lithium rows; Chapter 10, Milliequivalents, printed pages 146-148 (PDF pages 154-156), through the chapter end."
    }
  ],
  "submodules": [
    {
      "slug": "valence-and-particles",
      "title": "Distinguish Valence from Particle Count",
      "summary": "Count electrical charge on one side of the compound before using the mEq relationship.",
      "concepts": [
        "Ionic charge",
        "Compound factor",
        "Dissociation particles",
        "mEq and mmol"
      ],
      "visual": "meqcalc-valence-and-particles",
      "application": "Count electrical charge on one side of the compound before using the mEq relationship.",
      "lesson": [
        {
          "heading": "Count charges on one side",
          "body": "The source relates milliequivalents to ionic charge. For a compound, separate its positive and negative components and count total positive charge, or total negative charge magnitude. Cation and anion mEq are equal for the compound. Do not add both charge magnitudes to obtain the book valence factor. NaCl has one Na+ and one Cl-, so its factor is 1; CaCl2 has one Ca2+ balanced by two Cl-, so its factor is 2."
        },
        {
          "heading": "Keep valence separate from dissociation particles",
          "body": "The book figure shows NaCl with two dissociation particles but valence factor 1, and CaCl2 with three particles but factor 2. Particle count serves the preceding osmolarity method; valence serves mEq. Lithium carbonate, Li2CO3, has two monovalent Li+ ions and one carbonate ion of charge -2, giving compound factor 2. This does not make each lithium ion divalent."
        },
        {
          "heading": "Read the complete source valence table",
          "body": "The book table groups ammonium chloride (NH4Cl), potassium chloride (KCl), potassium gluconate (KC6H11O7), sodium acetate (NaC2H3O2), sodium bicarbonate (NaHCO3) and sodium chloride (NaCl) under factor 1. Calcium carbonate (CaCO3), calcium chloride (CaCl2), ferrous sulfate (FeSO4), lithium carbonate (Li2CO3) and magnesium sulfate (MgSO4) use factor 2. The source uses divalent calcium, magnesium and iron as a memory cue in its chelation-interaction reminder; this calculation lesson does not supply a drug-specific interaction or administration rule."
        },
        {
          "heading": "Convert mEq and mmol for the stated species",
          "body": "The formula is mEq = mmol x valence; reverse it as mmol = mEq/valence. For an original 7 mmol Mg2+ amount, 7 x 2 = 14 mEq magnesium. For an original 28 mEq calcium amount, 28/2 = 14 mmol Ca2+. Monovalent ions have equal numerical mmol and mEq values. Identify whether the requested amount is for an ion or a compound formula unit before selecting the factor."
        }
      ],
      "keyPoints": [
        "Count charge on either side, without summing both sides.",
        "Valence and dissociation-particle count are different factors.",
        "mEq = mmol x valence; identify the stated species."
      ],
      "check": {
        "question": "For CaCl2 in the supplied-book model, which factors are used for mEq and particle-count calculations?",
        "choices": [
          "mEq factor 2; dissociation particles 3",
          "mEq factor 3; dissociation particles 2",
          "mEq factor 4; dissociation particles 3",
          "mEq factor 1; dissociation particles 1"
        ],
        "answer": 0,
        "rationale": "One Ca2+ is balanced by two Cl-. Charge on either side gives factor 2; counting the three ions gives three particles.",
        "reviewHref": "#valence-and-particles"
      }
    },
    {
      "slug": "mass-and-equivalents",
      "title": "Convert Compound Mass and Milliequivalents",
      "summary": "Use the supplied compound mass, molecular weight and charge factor in both directions.",
      "concepts": [
        "Mass in mg",
        "Specified form/MW",
        "Charge factor",
        "Reverse mass"
      ],
      "visual": "meqcalc-mass-and-equivalents",
      "application": "Use the supplied compound mass, molecular weight and charge factor in both directions.",
      "lesson": [
        {
          "heading": "Apply the formula with milligrams",
          "body": "The book formula is mEq = [compound mass in mg x valence]/MW, using the supplied numerical MW in g/mol. In an original KCl example, 0.745 g = 745 mg; MW 74.5 and factor 1 give 745/74.5 = 10 mEq potassium. Using grams directly in this mg formula would miss the thousand-fold conversion."
        },
        {
          "heading": "Use the stated salt form and distinguish salt mass from ion charge",
          "body": "For an original 0.301 g anhydrous MgSO4 sample, use the specified MW 120.4 and factor 2. The mass is 301 mg and the result is 301 x 2/120.4 = 5 mEq magnesium. This input is magnesium sulfate mass, not elemental magnesium mass. A different specified form requires its own supplied MW; do not silently reuse the anhydrous value."
        },
        {
          "heading": "Reverse the formula to find compound mass",
          "body": "Rearrange to mg = mEq x MW/valence. For an original 6 mEq calcium target supplied by a stated CaCl2 form with MW 147 and factor 2, compound mass = 6 x 147/2 = 441 mg. That mass is the specified calcium chloride compound. Check in reverse: 441 x 2/147 = 6 mEq calcium."
        },
        {
          "heading": "Retain precision until the requested answer",
          "body": "An original 0.50 g anhydrous MgSO4 calculation with MW 120.4 and factor 2 gives 500 x 2/120.4 = 8.305647... mEq magnesium. It becomes 8.3 mEq when the nearest tenth is requested. Carry the unrounded value through a later step if the exercise instructs you to retain intermediate precision."
        }
      ],
      "keyPoints": [
        "Use mg in mEq = mg x valence/MW.",
        "Use the MW for the stated compound form.",
        "Reverse to mg = mEq x MW/valence, then verify."
      ],
      "check": {
        "question": "What mass of a specified CaCl2 form supplies 6 mEq calcium, using MW 147 g/mol and factor 2?",
        "choices": [
          "882 mg",
          "441 mg",
          "6 mg",
          "220.5 mg"
        ],
        "answer": 1,
        "rationale": "Compound mass = 6 x 147/2 = 441 mg CaCl2.",
        "reviewHref": "#mass-and-equivalents"
      }
    },
    {
      "slug": "solution-equivalents",
      "title": "Calculate Equivalents in a Solution",
      "summary": "Find the total compound mass or labeled mEq amount in the stated volume.",
      "concepts": [
        "Percent w/v",
        "Mass concentration",
        "mEq/mL",
        "Total versus concentration"
      ],
      "visual": "meqcalc-solution-equivalents",
      "application": "Find the total compound mass or labeled mEq amount in the stated volume.",
      "lesson": [
        {
          "heading": "Find mass from percentage strength first",
          "body": "For an original 10 mL of 8.4% w/v NaHCO3, mass = 8.4 g/100 mL x 10 mL = 0.84 g = 840 mg. With MW 84 and factor 1, the amount is 10 mEq sodium. The source method first finds mass in the requested volume, then converts to mEq; it does not put the percentage number alone into the MW formula."
        },
        {
          "heading": "Convert mass-per-volume or mEq-per-volume labels",
          "body": "An original NH4Cl solution contains 5.35 mg/mL in 200 mL, with MW 53.5 and factor 1. Total mass = 1,070 mg and total mEq = 1,070/53.5 = 20. If a different stated KCl container already supplies 2 mEq potassium/mL in 15 mL, multiply the label by volume to obtain 30 mEq. Using MW 74.5 and factor 1, that represents 2,235 mg, or 2.235 g KCl."
        },
        {
          "heading": "Keep amount, concentration and volume distinct",
          "body": "A stated stock at 2 mEq/mL supplies an original 18 mEq amount in 9 mL: 18/2 = 9. Conversely, 40 mEq in a finished 200 mL is 0.2 mEq/mL. A label in mEq/mL gives concentration; mEq alone gives total amount. These arithmetic results do not determine clinical dose suitability, route, dilution or infusion rate."
        }
      ],
      "keyPoints": [
        "Percent w/v and mg/mL must first supply total compound mass.",
        "A stated mEq/mL label can be scaled directly.",
        "Total mEq, mEq/mL and mL answer different questions."
      ],
      "check": {
        "question": "An exercise specifies 10 mL of 8.4% w/v NaHCO3, MW 84 g/mol and factor 1. How many mEq sodium are present?",
        "choices": [
          "84 mEq",
          "0.01 mEq",
          "10 mEq",
          "8.4 mEq"
        ],
        "answer": 2,
        "rationale": "Mass = 0.84 g = 840 mg. 840 x 1/84 = 10 mEq sodium.",
        "reviewHref": "#solution-equivalents"
      }
    },
    {
      "slug": "formulation-conversions",
      "title": "Use Stated Formulation Ratios",
      "summary": "Convert a total daily amount with the specified formulation ratio and rounding method.",
      "concepts": [
        "Oral KCl ratio",
        "Lithium ratio",
        "Daily versus portion amount",
        "Ratio versus MW method"
      ],
      "visual": "meqcalc-formulation-conversions",
      "application": "Convert a total daily amount with the specified formulation ratio and rounding method.",
      "lesson": [
        {
          "heading": "Use the supplied oral potassium ratio",
          "body": "The source conversion sheet gives oral KCl 10% solution as 20 mEq potassium per 15 mL. For an original 30 mEq amount, use the stated formulation ratio: 30 x 15/20 = 22.5 mL. If an arithmetic exercise specifies 10 mEq per portion three times per day, the daily total is 30 mEq and the corresponding daily liquid volume is 22.5 mL; one portion is 7.5 mL."
        },
        {
          "heading": "Use the supplied lithium formulation relationship",
          "body": "The source gives 5 mL lithium citrate syrup = 300 mg lithium carbonate = 8 mEq lithium ion for its conversion exercises. An original carbonate amount of 300 mg per portion twice daily totals 600 mg/day. Using that supplied formulation ratio gives 600 x 5/300 = 10 mL syrup/day and 600 x 8/300 = 16 mEq lithium/day. Calculate the daily total before interpreting a per-portion result."
        },
        {
          "heading": "Do not silently exchange the ratio and molecular-weight methods",
          "body": "The source final example demonstrates both a supplied formulation ratio and an MW calculation. With the original 600 mg carbonate amount, an exercise requiring MW 74 and compound factor 2 instead gives 600 x 2/74 = 16.216216... mEq lithium. Using 8 mEq/5 mL gives 10.135135... mL, rounded to 10.1 mL at one decimal place. The separate 300 mg:5 mL formulation ratio gives 10 mL. These stated numerical approximations differ slightly; use the specified method and precision. Similarly, the supplied KCl 20 mEq/15 mL ratio is a rounded formulation relationship rather than an exact identity to every % w/v calculation with MW 74.5."
        },
        {
          "heading": "Check the conversion target and the exercise boundary",
          "body": "Reverse-check the original lithium ratio: 10 mL x 300 mg/5 mL = 600 mg carbonate equivalent. Reverse-check the original oral KCl ratio: 22.5 mL x 20 mEq/15 mL = 30 mEq potassium. The exercises explicitly supply their concentrations and ratios. A calculated equivalent amount is not a direction to switch a patient formulation, select a schedule or administer an electrolyte preparation."
        }
      ],
      "keyPoints": [
        "Convert the total daily amount before reporting daily volume.",
        "Use the ratio or MW method requested by the exercise.",
        "Label syrup volume, carbonate mass and lithium-ion mEq separately."
      ],
      "check": {
        "question": "Using only the supplied ratio 300 mg lithium carbonate = 5 mL lithium citrate syrup, what total syrup volume corresponds to 300 mg carbonate per portion twice daily?",
        "choices": [
          "5 mL/day",
          "16 mL/day",
          "20 mL/day",
          "10 mL/day"
        ],
        "answer": 3,
        "rationale": "Daily carbonate amount = 600 mg. 600 x 5/300 = 10 mL syrup/day.",
        "reviewHref": "#formulation-conversions"
      }
    }
  ]
,
  questionBank: pharmacyMilliequivalentCalculationsQuestionBank,
};
