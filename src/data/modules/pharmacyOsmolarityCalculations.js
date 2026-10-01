import { pharmacyOsmolarityCalculationsQuestionBank } from "@/data/questionBanks/pharmacyOsmolarityCalculations";

export const pharmacyOsmolarityCalculationsModule = {
  "slug": "pharmacy-osmolarity-calculations",
  "number": "231",
  "title": "Pharmacy Osmolarity and Milliosmole Calculations",
  "area": "Calculations & Nutrition",
  "source": "Original NaS teaching based on RxPrep 2023, Chapter 1 checklist and Chapter 10 osmolarity subsection",
  "description": "Count solute particles, distinguish total milliosmoles from per-liter concentration, convert strengths and combine component contributions on a stated final-volume basis.",
  "topics": [
    "Particle counts",
    "Osmolarity",
    "Osmolality units",
    "Total milliosmoles",
    "Compound mass and mixed solutions"
  ],
  "outcomes": [
    "Select the correct amount or concentration equation and unit.",
    "Apply stated molecular weight and particle count after converting strength to g/L.",
    "Calculate total particles from actual solute mass or portion volume.",
    "Sum components and solve reverse mass problems on a common final-volume basis."
  ],
  "disclaimer": "Original arithmetic exercises are educational and not patient-specific medical advice. A calculated particle amount does not establish a product, compatibility, stability, route or treatment plan.",
  "referenceHeading": "Book source and calculation scope.",
  "referenceIntroduction": "Original lessons and exercises apply the supplied book calculation model and stated molecular weights. Clinical serum-osmolality assessment and isotonicity adjustment are separate topics.",
  "references": [
    {
      "label": "RxPrep 2023 Course Book",
      "locator": "Chapter 1, required-formulas checklist, printed page 7 (PDF page 19); Chapter 10, Osmolarity, printed pages 139-142 (PDF pages 147-150), ending before Isotonicity."
    }
  ],
  "submodules": [
    {
      "slug": "particles-and-units",
      "title": "Count Particles and Name the Unit",
      "summary": "Distinguish solute particles, electrical charge, concentration and total amount.",
      "concepts": [
        "Particle counts",
        "Ions versus formula units",
        "Osmolarity and osmolality",
        "Supplied molecular weight"
      ],
      "visual": "osmcalc-particles-and-units",
      "application": "Distinguish solute particles, electrical charge, concentration and total amount.",
      "lesson": [
        {
          "heading": "Start with the requested unit",
          "body": "The book defines osmolarity as osmotic particle amount per liter, commonly mOsmol/L. A total milliosmole amount is mOsmol without a volume denominator. Osmolality uses a kilogram basis, mOsmol/kg. Name the requested unit before selecting the equation; do not replace a total particle answer with a per-liter concentration. The book relates particle number to osmotic pressure and distinguishes the temperature dependence of volume from a kilogram basis. It notes that osmolarity and osmolality can have similar numerical values in dilute solutions; their units remain distinct."
        },
        {
          "heading": "Use the book particle table",
          "body": "In the supplied calculation model, dextrose and mannitol each count as one particle. KCl, NaCl, sodium acetate and MgSO4 each count as two. CaCl2 counts as three; sodium citrate, Na3C6H5O7, counts as four. This follows the formula-unit dissociation used in the book exercises. These counts are the model inputs for the original exercises here."
        },
        {
          "heading": "One specified ion is one particle",
          "body": "A problem that supplies sodium ions already specifies the dissociated species, so use one particle per ion. The same applies to a specified calcium ion: its +2 charge does not make it two particles. Distinguish one Ca2+ ion from a CaCl2 formula unit, which supplies one calcium and two chloride ions in the book model."
        },
        {
          "heading": "Match the molecular weight to the stated form",
          "body": "Use the molecular weight supplied for the stated compound form. The source uses 198 g/mol for one dextrose exercise and 180 g/mol when it specifies anhydrous dextrose. Do not silently substitute a remembered value. The book also permits calculating formula-unit molecular weight from supplied atomic values; one Na plus one Cl gives 23 + 35.5 = 58.5 g/mol."
        }
      ],
      "keyPoints": [
        "Count the supplied species: an ion and a formula unit are different inputs.",
        "Electrical charge is not the number of particles.",
        "Use the stated solute form and molecular weight."
      ],
      "check": {
        "question": "What particle count applies to an already specified calcium ion, rather than calcium chloride?",
        "choices": [
          "2 because calcium is divalent",
          "3 because chloride is implied",
          "1 for the individual ion",
          "4 because calcium is ionic"
        ],
        "answer": 2,
        "reviewHref": "#particles-and-units",
        "rationale": "One specified calcium ion is one particle. Electrical charge is not the particle count."
      }
    },
    {
      "slug": "osmolarity-per-liter",
      "title": "Calculate Osmolarity per Liter",
      "summary": "Convert strength to grams per liter before applying the molecular weight and particle count.",
      "concepts": [
        "Grams per liter",
        "Molecular weight",
        "Particle multiplier",
        "Rounding"
      ],
      "visual": "osmcalc-osmolarity-per-liter",
      "application": "Convert strength to grams per liter before applying the molecular weight and particle count.",
      "lesson": [
        {
          "heading": "Build the per-liter equation",
          "body": "For the book model, osmolarity in mOsmol/L = [concentration in g/L divided by molecular weight in g/mol] x particle count x 1,000. The ratio first gives mol/L; multiplying by particles gives Osmol/L and by 1,000 gives mOsmol/L. The molecular weight belongs in the denominator."
        },
        {
          "heading": "Convert a percentage before dividing",
          "body": "An original exercise states 1.5% w/v NaCl, MW 58.5 g/mol, and two particles per formula unit. Since 1.5 g/100 mL = 15 g/L, osmolarity = (15/58.5) x 2 x 1,000 = 512.8205... mOsmol/L, or 513 to the nearest whole number. Using 1.5 as though it were already g/L causes a tenfold error."
        },
        {
          "heading": "Handle mg/L and nonionic substances",
          "body": "Another original exercise gives 1,170 mg/L NaCl. Convert to 1.17 g/L, then (1.17/58.5) x 2 x 1,000 = 40 mOsmol/L. A nonionic solute still contributes one particle per molecule: 9.1 g/L mannitol at MW 182 gives 50 mOsmol/L, not zero."
        },
        {
          "heading": "Retain precision until the requested answer",
          "body": "For an original 3% w/v dextrose exercise with supplied MW 198 g/mol and particle count one, 30/198 x 1,000 = 151.5151... mOsmol/L. To the nearest tenth, report 151.5 mOsmol/L. Convert strength and units first, retain intermediate precision, then apply the requested final rounding."
        }
      ],
      "keyPoints": [
        "Convert percentage strength or mg/L into g/L first.",
        "Divide by molecular weight, multiply by particles and by 1,000.",
        "Round only the requested final concentration."
      ],
      "check": {
        "question": "A 1.5% w/v NaCl exercise supplies MW 58.5 g/mol and 2 particles per formula unit. What is osmolarity to the nearest whole number?",
        "choices": [
          "51 mOsmol/L",
          "5,128 mOsmol/L",
          "513 mOsmol/L",
          "256 mOsmol/L"
        ],
        "answer": 2,
        "reviewHref": "#osmolarity-per-liter",
        "rationale": "1.5% w/v = 15 g/L. (15/58.5) x 2 x 1,000 = 512.8205..., or 513 mOsmol/L."
      }
    },
    {
      "slug": "total-milliosmoles",
      "title": "Calculate Total Milliosmoles",
      "summary": "Use the mass actually present or multiply osmolarity by the actual volume in liters.",
      "concepts": [
        "Total grams",
        "Actual volume",
        "Milliosmoles",
        "Concentration versus amount"
      ],
      "visual": "osmcalc-total-milliosmoles",
      "application": "Use the mass actually present or multiply osmolarity by the actual volume in liters.",
      "lesson": [
        {
          "heading": "Use total mass for total particles",
          "body": "Total mOsmol = [total solute grams divided by MW in g/mol] x particle count x 1,000. An original exercise contains 4.44 g CaCl2 in 200 mL, MW 111 and particle count three. Total amount = 4.44/111 x 3 x 1,000 = 120 mOsmol. The corresponding concentration is 120/0.200 = 600 mOsmol/L; these are different requested quantities."
        },
        {
          "heading": "Multiply a concentration by actual liters",
          "body": "A 250 mL portion at 120 mOsmol/L contains 120 x 0.250 = 30 mOsmol. Conversely, 75 mOsmol in 500 mL gives 75/0.500 = 150 mOsmol/L. Convert mL to L before multiplying or dividing. A one-liter example can give the same numerical value for amount and concentration while retaining different units."
        },
        {
          "heading": "Convert ion mass and count the stated species",
          "body": "An original problem specifies 460 mg sodium ions in 400 mL, MW 23 g/mol. Total mass is 0.460 g and the specified ion is one particle: 0.460/23 x 1,000 = 20 mOsmol. For 160 mg specified calcium ions, MW 40, the total is 0.160/40 x 1,000 = 4 mOsmol. Valence is not used as the particle multiplier in either specified-ion calculation."
        },
        {
          "heading": "Do not normalize an amount answer unnecessarily",
          "body": "If an original exercise specifies 18 g anhydrous dextrose, MW 180 and one particle, its total amount is 100 mOsmol regardless of the stated container volume. Volume becomes necessary if concentration is requested. With final volume 300 mL, the concentration would be 100/0.300 = 333.3333... mOsmol/L, or 333.3 to the nearest tenth."
        }
      ],
      "keyPoints": [
        "Total mOsmol uses the mass actually present.",
        "Multiply mOsmol/L by actual liters to obtain total mOsmol.",
        "Divide total mOsmol by final liters to obtain concentration."
      ],
      "check": {
        "question": "How many total milliosmoles are in 250 mL of a solution whose osmolarity is 120 mOsmol/L?",
        "choices": [
          "30 mOsmol",
          "120 mOsmol",
          "480 mOsmol",
          "30,000 mOsmol"
        ],
        "answer": 0,
        "reviewHref": "#total-milliosmoles",
        "rationale": "Amount = 120 mOsmol/L x 0.250 L = 30 mOsmol."
      }
    },
    {
      "slug": "mixtures-and-reverse",
      "title": "Combine Components and Solve for Mass",
      "summary": "Put every component on the same final-volume basis and reverse the particle equation when mass is requested.",
      "concepts": [
        "Component contributions",
        "Shared final volume",
        "Reverse equation",
        "mEq is not particle count"
      ],
      "visual": "osmcalc-mixtures-and-reverse",
      "application": "Put every component on the same final-volume basis and reverse the particle equation when mass is requested.",
      "lesson": [
        {
          "heading": "Add particle amounts then divide once",
          "body": "An original mixture has final volume 0.500 L, 9.1 g mannitol at MW 182 with one particle, and 2.925 g NaCl at MW 58.5 with two particles. Their contributions are 50 and 100 mOsmol. Total amount is 150 mOsmol; divide by the stated final volume to obtain 300 mOsmol/L. Adding 50 and 100 and labeling the result per liter would omit the final-volume conversion."
        },
        {
          "heading": "Use the same final-volume basis",
          "body": "The source adds dextrose, saline and KCl contributions for the same final one-liter example. Original component values may be added directly in mOsmol/L only when each is expressed for the same finished solution. If 100 and 80 mOsmol/L are specified for a final 1.0 L and 12 mmol KCl is present, the book particle model adds 24 mOsmol/L from KCl, giving 204 mOsmol/L total."
        },
        {
          "heading": "Reverse the equation for required grams",
          "body": "Required mass in grams = target mOsmol/L x final volume in L x MW in g/mol divided by [particle count x 1,000]. An original KCl exercise specifies 200 mOsmol/L in final 300 mL, MW 74.5, and two particles. Required total is 60 mOsmol; mass = 60 x 74.5/2,000 = 2.235 g, or 2.24 g to the nearest hundredth. A reverse check with the unrounded mass returns 200 mOsmol/L."
        },
        {
          "heading": "Separate equivalents from particles",
          "body": "The source converts monovalent KCl equivalents to compound amount, then counts both resulting particles. In an original exercise, 10 mEq KCl is explicitly supplied as 10 mmol KCl in a final 500 mL. Ten mmol formula units x two particles = 20 mOsmol; 20/0.500 = 40 mOsmol/L. Do not use an electrical-equivalent number as though it were automatically the total particle amount. These arithmetic totals alone do not establish compatibility, stability, route or clinical suitability."
        }
      ],
      "keyPoints": [
        "Add component amounts before dividing by final liters.",
        "Direct concentration sums require the same finished-volume basis.",
        "For reverse mass problems, divide by particle count and 1,000."
      ],
      "check": {
        "question": "How many grams of KCl supply a target 200 mOsmol/L in a final 300 mL? Use MW 74.5 g/mol and 2 particles; round to the nearest hundredth.",
        "choices": [
          "2.24 g",
          "7.45 g",
          "4.47 g",
          "0.22 g"
        ],
        "answer": 0,
        "reviewHref": "#mixtures-and-reverse",
        "rationale": "Target amount = 200 x 0.300 = 60 mOsmol. Mass = 60 x 74.5/(2 x 1,000) = 2.235 g, or 2.24 g."
      }
    }
  ]
,
  questionBank: pharmacyOsmolarityCalculationsQuestionBank,
};
