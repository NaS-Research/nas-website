import { pharmacyConcentrationsSpecificGravityQuestionBank } from "@/data/questionBanks/pharmacyConcentrationsSpecificGravity";

export const pharmacyConcentrationsSpecificGravityModule = {
  "slug": "pharmacy-concentrations-specific-gravity",
  "number": "229",
  "title": "Pharmacy Concentrations and Specific Gravity",
  "area": "Calculations & Nutrition",
  "source": "Original NaS teaching based on RxPrep 2023, Chapter 1 formula checklist and Chapter 10 concentration calculations",
  "description": "Calculate percentage and ratio strengths, ppm and ppb quantities, and mass-volume relationships while keeping the concentration basis and final-product denominator visible.",
  "topics": [
    "Percentage strength",
    "Final product and stock quantity",
    "Ratio strength",
    "Parts per million and billion",
    "Specific gravity and density"
  ],
  "outcomes": [
    "Distinguish w/v, w/w, and v/v percentages and use the finished product as denominator.",
    "Calculate ingredient and stock quantities, including ingredient already present and added mass.",
    "Convert percentage and ratio strengths without changing their basis.",
    "Convert percentages, ppm, and ppb and keep the stated mass or volume denominator.",
    "Distinguish dimensionless specific gravity from density and calculate mass or volume using the book water reference."
  ],
  "disclaimer": "These original arithmetic exercises are for education and are not patient-specific medical advice. Their calculated quantities do not establish an appropriate clinical dose, formulation, compatibility, stability, sterility, or administration plan.",
  "referenceHeading": "Book source and calculation scope.",
  "referenceIntroduction": "The cited pages support the concentration methods and specific-gravity calculations. Examples and questions are original. Historical book definitions do not establish contemporary labeling or prescribing guidance.",
  "references": [
    {
      "label": "RxPrep 2023 Course Book",
      "locator": "Chapter 1, required-formulas checklist, printed page 7 (PDF page 19); Chapter 10, percentage strength, ratio strength, parts per million/billion, and specific gravity, printed pages 128-135 (PDF pages 136-143)."
    }
  ],
  "submodules": [
    {
      "slug": "percentage-basis",
      "title": "Percentage Strength: Name Both Units",
      "summary": "Read a percentage as an ingredient quantity per 100 units of finished product, with its stated mass or volume basis.",
      "concepts": [
        "Weight in volume (w/v)",
        "Weight in weight (w/w)",
        "Volume in volume (v/v)",
        "Percent to mass per volume"
      ],
      "visual": "strength-percentage-basis",
      "application": "Read a percentage as an ingredient quantity per 100 units of finished product, with its stated mass or volume basis.",
      "lesson": [
        {
          "heading": "A percent needs a basis",
          "body": "The book distinguishes three concentration expressions. A 2% w/v product contains 2 g of ingredient in each 100 mL of finished product. A 2% w/w product contains 2 g in each 100 g of finished product. A 2% v/v product contains 2 mL in each 100 mL of finished product. The number 2 does not establish whether the numerator is grams or milliliters. Keep w/v, w/w, or v/v visible throughout the calculation."
        },
        {
          "heading": "The denominator is the finished product",
          "body": "For an original w/v example, 6 g of Ingredient A in a final volume of 300 mL gives (6 g / 300 mL) x 100 mL = 2 g per 100 mL, or 2% w/v. The final 300 mL includes the ingredient. It does not mean adding the ingredient to 300 mL of solvent. Likewise, 4% w/w means 4 g in 100 g of total product, rather than 4 g added to 100 g of base."
        },
        {
          "heading": "Convert percent w/v to mg/mL",
          "body": "For a stated w/v basis, 1% = 1 g/100 mL = 1,000 mg/100 mL = 10 mg/mL. Thus 0.8% w/v = 8 mg/mL. Reverse the calculation by dividing mg/mL by 10 to obtain the numerical percentage on a w/v basis: 35 mg/mL = 3.5% w/v. This conversion cannot be used to turn a w/w percentage into mg/mL without the needed mass-to-volume information."
        },
        {
          "heading": "Read each ingredient separately",
          "body": "The book lists fluid names whose percentages refer to different ingredients. NS contains 0.9% w/v sodium chloride; half-normal saline contains 0.45%; quarter-normal saline contains 0.225%. D5W contains 5% w/v dextrose, and D20W contains 20%. D5NS identifies 5% dextrose and 0.9% sodium chloride separately; D5 half-normal saline identifies 5% dextrose and 0.45% sodium chloride. These source definitions support concentration arithmetic; they do not establish a fluid choice, clinical dose, or administration plan."
        },
        {
          "heading": "Calculate ingredient in a measured volume",
          "body": "For an original arithmetic exercise, a 0.4% w/v liquid contains 4 mg/mL. A stated measured volume of 0.3 mL therefore contains 4 mg/mL x 0.3 mL = 1.2 mg of ingredient. If an exercise defines each drop as 0.04 mL, three drops occupy 0.12 mL; three such measurements total 0.36 mL and contain 1.44 mg. Use a drop volume supplied in the exercise rather than assuming one universal drop size. These are amount calculations, not a dose or administration recommendation."
        }
      ],
      "keyPoints": [
        "State w/v, w/w, or v/v rather than leaving the basis implicit.",
        "The denominator includes the ingredient as part of the finished product.",
        "On a w/v basis, numerical percent x 10 gives mg/mL.",
        "A product containing two ingredients has a separate concentration for each."
      ],
      "check": {
        "question": "What does 3% w/w mean?",
        "choices": [
          "3 g in 100 mL of finished product",
          "3 mL in 100 mL of finished product",
          "3 g in 100 g of finished product",
          "3 g added to 100 g of base"
        ],
        "answer": 2,
        "rationale": "Weight in weight means 3 g of ingredient per 100 g of total finished product.",
        "reviewHref": "#percentage-basis"
      }
    },
    {
      "slug": "finished-product",
      "title": "Ingredient Quantity and the Final Total",
      "summary": "Convert the ingredient units first, then calculate against the full finished mass or volume.",
      "concepts": [
        "Ingredient quantity",
        "Base quantity",
        "Ingredient already present",
        "Stock volume"
      ],
      "visual": "strength-finished-product",
      "application": "Convert the ingredient units first, then calculate against the full finished mass or volume.",
      "lesson": [
        {
          "heading": "Calculate a required ingredient quantity",
          "body": "An original exercise requests 240 mL of a 1.5% w/v mixture. The ingredient mass is 1.5 g/100 mL x 240 mL = 3.6 g. If an exercise instead requests 80 g of a 2.5% w/w product, the ingredient mass is 2 g and the remaining base mass is 78 g. In both cases the denominator is the requested final product. A mathematical result alone does not validate an actual compounded preparation."
        },
        {
          "heading": "Count all components in the denominator",
          "body": "Suppose an exercise combines 8 g of Ingredient A, 3 g of a second component, and 29 g of base. The total is 40 g, so Ingredient A is (8/40) x 100 = 20% w/w. If 40 g of base were used instead, the total would be 51 g and the concentration would be different. Add the components that the problem says constitute the final product."
        },
        {
          "heading": "Include ingredient already in the starting product",
          "body": "A 100 g product at 2% w/w contains 2 g of Ingredient A. Adding 3 g of pure Ingredient A gives 5 g of Ingredient A in 103 g of finished product. The final strength is (5/103) x 100 = 4.854368...%, or 4.85% w/w to the nearest hundredth. Dividing by 100 g would omit the added mass; using only the added 3 g would omit the ingredient already present."
        },
        {
          "heading": "Separate stock volume from final product quantity",
          "body": "An original exercise specifies a final 40 g product containing 0.3% w/w Ingredient A and a stock containing 60 mg/mL. The required mass is 40 g x 0.3/100 = 0.12 g = 120 mg. The stock volume supplying that mass is 120 mg / 60 mg/mL = 2 mL. The calculation determines stock volume only. It does not establish the final base mass without stock mass or density, and it does not establish compatibility, stability, or suitability of the preparation."
        },
        {
          "heading": "Fractional percentages and ingredient from units",
          "body": "A fractional percentage is still a quantity per hundred. In an original example, 1/8% w/v equals 0.125 g/100 mL, so 800 mL contains 1 g of ingredient. Preserve full intermediate precision for repeating fractions and round only the final answer. In another arithmetic exercise, four units each containing 300 mg supply 1,200 mg = 1.2 g of Ingredient A. If the stated final product volume is 80 mL, the strength is (1.2 g / 80 mL) x 100 mL = 1.5% w/v, equivalent to 15 mg/mL. The stated ingredient amount and final volume determine the arithmetic; the calculation does not establish whether a real product can be used in a formulation."
        }
      ],
      "keyPoints": [
        "Use the full finished quantity in the denominator.",
        "Add the ingredient already present before calculating a new strength.",
        "Adding pure ingredient also increases the final mass.",
        "Convert grams to milligrams before dividing by a stock concentration in mg/mL."
      ],
      "check": {
        "question": "A 100 g mixture at 2% w/w contains Ingredient A. After adding 3 g of pure A, what is the final strength, rounded to the nearest hundredth?",
        "choices": [
          "3.00% w/w",
          "5.00% w/w",
          "4.85% w/w",
          "2.91% w/w"
        ],
        "answer": 2,
        "rationale": "Initially 2 g is present. Final A mass = 2 + 3 = 5 g; final product mass = 103 g. (5/103) x 100 = 4.85% w/w.",
        "reviewHref": "#finished-product"
      }
    },
    {
      "slug": "ratio-strength",
      "title": "Ratio Strength: One Part in the Total",
      "summary": "Keep the same concentration basis when converting between a percentage and a ratio strength.",
      "concepts": [
        "One part in total parts",
        "Percent to 1:N",
        "1:N to percent",
        "Explicit units"
      ],
      "visual": "strength-ratio-strength",
      "application": "Keep the same concentration basis when converting between a percentage and a ratio strength.",
      "lesson": [
        {
          "heading": "Read the total correctly",
          "body": "A ratio strength of 1:500 w/w means 1 g of ingredient in 500 g of finished product. It does not mean 1 g added to 500 g of base. On a w/v basis, 1:500 means 1 g in 500 mL of finished product; on a v/v basis, it means 1 mL in 500 mL. State the basis because the bare ratio does not tell you which quantities are being compared."
        },
        {
          "heading": "Convert percentage to ratio and back",
          "body": "Write the ratio as 1:N. The numerical percentage is 100/N, and N is 100 divided by the numerical percentage. For example, 0.08% w/v gives N = 100/0.08 = 1,250, so the ratio is 1:1,250 w/v. In reverse, 1:2,000 w/v gives 100/2,000 = 0.05% w/v. The percentage number is 0.08 in the first conversion, not its decimal fraction 0.0008."
        },
        {
          "heading": "Convert the numerator into the required unit",
          "body": "An original exercise contains 120 mg of Ingredient A in 60 mL of finished product. Convert 120 mg to 0.12 g. Then 60/0.12 = 500 mL per gram, giving 1:500 w/v. For a stated 1:800 w/w product, 24 g of final product contains 24/800 = 0.03 g = 30 mg. The milligram and gram steps are essential to the interpretation."
        },
        {
          "heading": "Keep the calculation expression clear",
          "body": "The book warns that ratio expressions can be confused. For learning, show the basis and the equivalent units alongside the ratio. In an exercise combining 0.2 g of Ingredient A with 9.8 g of base, the total is 10 g: 10/0.2 = 50, giving 1:50 w/w or 2% w/w. This module teaches the book calculation and does not make a new claim about current labeling rules."
        }
      ],
      "keyPoints": [
        "1:N refers to total finished product, not N parts of base plus one part of ingredient.",
        "Preserve the w/v, w/w, or v/v basis.",
        "Use 100/N for the numerical percent and 100/percent for N.",
        "Convert ingredient milligrams to grams when expressing a w/v ratio."
      ],
      "check": {
        "question": "Express 0.08% w/v as ratio strength.",
        "choices": [
          "1:125 w/v",
          "1:1,250 w/v",
          "1:12,500 w/v",
          "1:0.08 w/v"
        ],
        "answer": 1,
        "rationale": "N = 100/0.08 = 1,250. The same w/v basis gives 1 g in 1,250 mL of finished product.",
        "reviewHref": "#ratio-strength"
      }
    },
    {
      "slug": "ppm-ppb",
      "title": "Parts per Million and Billion",
      "summary": "Retain the stated basis while converting very dilute concentrations and calculating an ingredient quantity.",
      "concepts": [
        "Parts per million",
        "Parts per billion",
        "Percent conversions",
        "Mass versus volume denominator"
      ],
      "visual": "strength-ppm-ppb",
      "application": "Retain the stated basis while converting very dilute concentrations and calculating an ingredient quantity.",
      "lesson": [
        {
          "heading": "Parts are measured against the whole",
          "body": "The book defines ppm as parts of ingredient per 1,000,000 parts of whole product and ppb as parts per 1,000,000,000. As with percentage strength, identify w/w, w/v, or v/v. On the book's w/v convention, 1 ppm is 1 g per 1,000,000 mL, which equals 1 mg/L. On a w/w basis, 1 ppm is 1 g per 1,000,000 g, which equals 1 mg/kg. A w/w ppm value cannot simply be labeled mg/L without the information needed to relate mass to volume."
        },
        {
          "heading": "Convert percentage and ppm on the same basis",
          "body": "To convert the numerical percent to ppm, multiply by 10,000. To convert ppm to numerical percent, divide by 10,000. Thus 0.00036% w/v = 3.6 ppm w/v; 18 ppm w/w = 0.0018% w/w. There are 1,000 ppb per ppm on the same basis, so 0.7 ppm w/w = 700 ppb w/w. Changing the denominator scale does not change the mass or volume basis."
        },
        {
          "heading": "Calculate mass from stated w/v ppm",
          "body": "An original exercise explicitly gives 0.12 ppm w/v and 2.5 L of finished liquid. Under the book's w/v convention, this is 0.12 mg/L. The ingredient mass is 0.12 mg/L x 2.5 L = 0.30 mg = 300 mcg. In reverse, an exercise with 0.6 ppm w/v contains 0.6 mcg/mL; 90 mcg therefore occupies 90/0.6 = 150 mL. The basis is stated rather than inferred from the word liquid."
        },
        {
          "heading": "Use the mass denominator for w/w",
          "body": "A stated 4 ppm w/w mixture contains 4 mg of ingredient per kilogram of finished product. A 0.75 kg sample therefore contains 3 mg. If a question gives only a ppm number and asks for mass in a volume, first check the basis and any density information. Without enough information, do not silently equate every ppm value with mg/L."
        }
      ],
      "keyPoints": [
        "ppm uses a denominator of one million; ppb uses one billion.",
        "Percent x 10,000 gives ppm on the same basis.",
        "For the book's stated w/v convention, ppm equals mg/L numerically.",
        "For w/w, ppm equals mg/kg numerically; retain the mass denominator."
      ],
      "check": {
        "question": "An exercise states 0.12 ppm w/v under the book convention. How much ingredient is in 2.5 L?",
        "choices": [
          "30 mcg",
          "300 mcg",
          "3,000 mcg",
          "0.30 mcg"
        ],
        "answer": 1,
        "rationale": "0.12 mg/L x 2.5 L = 0.30 mg. Multiplying by 1,000 mcg/mg gives 300 mcg.",
        "reviewHref": "#ppm-ppb"
      }
    },
    {
      "slug": "specific-gravity",
      "title": "Specific Gravity and Mass-Volume Conversion",
      "summary": "Use the book's water reference explicitly and distinguish a dimensionless density ratio from density in g/mL.",
      "concepts": [
        "Equal-volume comparison",
        "Dimensionless ratio",
        "Mass from volume",
        "Volume from mass"
      ],
      "visual": "strength-specific-gravity",
      "application": "Use the book's water reference explicitly and distinguish a dimensionless density ratio from density in g/mL.",
      "lesson": [
        {
          "heading": "A ratio of densities has no unit",
          "body": "Specific gravity compares a substance's density with the density of water. Equivalently, it compares the masses of equal volumes of the substance and water. The units cancel, leaving a dimensionless ratio. The book calculation convention treats water as 1 g/mL. Under that stated convention, a substance with specific gravity 1.25 has a numerical density of 1.25 g/mL. The ratio and the density have the same numerical value here, but only density carries g/mL."
        },
        {
          "heading": "Interpret less than or greater than one",
          "body": "For equal volumes under the book convention, specific gravity below 1 means the substance has less mass than water, and specific gravity above 1 means more mass than water. A 200 mL sample with mass 160 g has density 0.8 g/mL and specific gravity 0.8. This does not imply that 200 mL of every liquid has mass 200 g."
        },
        {
          "heading": "Find mass or volume with density units",
          "body": "Given specific gravity 1.25 under the book's 1 g/mL water convention, 80 mL has mass 80 mL x 1.25 g/mL = 100 g. Conversely, 45 g occupies 45 g / 1.25 g/mL = 36 mL. Convert liters to milliliters and milligrams to grams before using a density in g/mL. For example, 0.4 L is 400 mL; at a density of 1.1 g/mL, its mass is 440 g."
        },
        {
          "heading": "Check the direction and final precision",
          "body": "Multiplying volume by g/mL leaves grams; dividing grams by g/mL leaves milliliters. For 35 g at a density of 1.2 g/mL, the volume is 29.1666... mL, or 29.17 mL to the nearest hundredth. Keep intermediate precision and apply the question's rounding instruction at the end. Do not replace the supplied density with 1 g/mL for a substance other than the book's water reference."
        }
      ],
      "keyPoints": [
        "Specific gravity is a dimensionless density ratio.",
        "The book assumes water density of 1 g/mL for these exercises.",
        "Multiply mL by density in g/mL to obtain g.",
        "Divide g by density in g/mL to obtain mL."
      ],
      "check": {
        "question": "Using the book's water reference of 1 g/mL, a liquid has specific gravity 1.25. What volume has a mass of 45 g?",
        "choices": [
          "56.25 mL",
          "45 mL",
          "36 mL",
          "0.036 mL"
        ],
        "answer": 2,
        "rationale": "The corresponding density is 1.25 g/mL. Volume = 45 g / 1.25 g/mL = 36 mL.",
        "reviewHref": "#specific-gravity"
      }
    }
  ]
,
  questionBank: pharmacyConcentrationsSpecificGravityQuestionBank,
};
