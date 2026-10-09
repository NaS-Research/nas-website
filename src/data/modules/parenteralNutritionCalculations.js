import { parenteralNutritionCalculationsQuestionBank } from "@/data/questionBanks/parenteralNutritionCalculations";

export const parenteralNutritionCalculationsModule = {
  slug: "parenteral-nutrition-calculations",
  number: "07",
  title: "Parenteral Nutrition Calculations",
  source: "Clinical nutrition calculations",
  description: "Translate an adult nutrition assessment into a complete, traceable parenteral nutrition prescription and verify every unit before the order reaches the patient.",
  topics: ["Fluid requirements", "Weights and energy", "Harris-Benedict BEE and TEE", "Protein and total energy", "Nitrogen intake and NPC:N", "Dextrose and GIR", "Lipid and non-PN calories", "Stock solutions and additives", "Rate and final audit"],
  outcomes: [
    "Convert anthropometric data accurately and select a defensible calculation weight.",
    "Estimate energy and protein targets while recognizing the limits of predictive equations.",
    "Calculate dextrose energy, glucose infusion rate, lipid dose, and all non-PN calories.",
    "Convert ordered grams, milliequivalents, millimoles, and percentages into stock-solution volumes.",
    "Reconcile final volume, infusion time, hourly rate, concentration, and the complete order before verification.",
  ],
  submodules: [
    {
  "slug": "fluid-requirements",
  "title": "Estimate Fluid Needs and Count All Sources",
  "summary": "Calculate the book estimate for a patient above 20 kg, then reconcile medicines and other fluids against the stated daily allowance.",
  "concepts": [
    "Daily fluid estimate",
    "Total body weight",
    "Alternative stated method",
    "Medication-volume ledger"
  ],
  "visual": "pn-calc-fluid",
  "application": "Identify the requested method, convert weight to kilograms and count all concurrent fluids before interpreting the remaining PN allowance.",
  "lesson": [
    {
      "heading": "Apply the formula only within its stated scope",
      "body": "The book first estimates fluid requirements when designing PN. For weight above 20 kg, its daily estimate is 1,500 mL + [20 mL/kg x (weight in kg - 20 kg)]. The extra 20 mL/kg applies only to weight above 20 kg. This particular source formula does not supply a method for a patient at or below 20 kg."
    },
    {
      "heading": "Use the specified weight and consistent units",
      "body": "The book uses total body weight, meaning scale weight, for most PN calculations unless the question specifies otherwise. Convert pounds to kg before substitution. An original 88 lb example is 40 kg using 2.2 lb/kg, giving 1,500 + 20(40 - 20) = 1,900 mL/day. Do not silently substitute ideal or adjusted weight."
    },
    {
      "heading": "Calculate the daily total before dividing by time",
      "body": "For an original 52 kg example, the book method gives 1,500 + 20(52 - 20) = 2,140 mL/day. That is a daily amount, not mL/hour and not a complete infusion prescription. Retain precision through the steps and use the rounding instruction given in the exercise."
    },
    {
      "heading": "Keep the alternative estimate separate",
      "body": "The book also describes an institutional adult estimate of 30 to 40 mL/kg/day. For an original 60 kg adult, that method gives a range of 1,800 to 2,400 mL/day. It is an alternative starting estimate; do not add it to the 1,500-plus-increment result. Use the method requested by the exercise or stated clinical plan."
    },
    {
      "heading": "Include fluids supplied outside PN",
      "body": "The book includes medication fluids, including intravenous piggybacks, in overall daily volume. If an original arithmetic plan sets total allowance at 2,140 mL/day and explicitly supplies 290 mL/day through medicines with no other fluids, the remaining allowance is 1,850 mL/day. Count each stated fluid once. A remaining allowance is not automatically the volume of a clinically suitable PN bag."
    },
    {
      "heading": "Tailor the estimate to fluid tolerance",
      "body": "The book states that fluid volume must be tailored and reduced when fluid accumulation is a concern, including heart failure or renal dysfunction. It does not specify one fixed percentage reduction in this section. If concurrent fluids already exceed a stated allowance, review the whole plan; a negative subtraction result is not an instruction to prepare negative PN volume."
    }
  ],
  "keyPoints": [
    "For weight above 20 kg, apply the increment only above 20 kg.",
    "Use total body weight unless the exercise specifies another basis.",
    "Subtract other stated fluids from a total allowance; do not double count.",
    "An estimate requires tailoring and is not a complete prescription."
  ],
  "check": {
    "question": "An exercise uses the book formula for an adult weighing 52 kg. Medicines supply 290 mL/day and there are no other fluids. What remains from the calculated daily allowance?",
    "choices": [
      "2,140 mL/day",
      "1,850 mL/day",
      "2,430 mL/day",
      "1,040 mL/day"
    ],
    "answer": 1,
    "rationale": "Total estimate = 1,500 + 20(52 - 20) = 2,140 mL/day. Subtract 290 mL/day already supplied to leave 1,850 mL/day.",
    "reviewHref": "#fluid-requirements"
  }
},
    {
      "slug": "calculation-foundations",
      "title": "Units, Weights, and Requirement Estimates",
      "summary": "Reliable parenteral nutrition calculations begin with clean units, measured anthropometrics, and an explicit decision about which body weight belongs in each equation.",
      "concepts": [
        "Metric conversion and dimensional analysis",
        "BMI and interpretation",
        "Ideal and adjusted body weight conventions",
        "Energy and fluid estimation"
      ],
      "visual": "pn-calc-foundations",
      "application": "Write the units at every step. Record actual weight, height, BMI, weight history, and the weight used for each calculation. A correct number without a defensible weight choice is not a complete answer.",
      "lesson": [
        {
          "heading": "Build a conversion line",
          "body": "Use the book conversions of pounds / 2.2 for kilograms and inches x 2.54 for centimeters. For adult BMI, use kg / height in meters squared. Its alternate formula is pounds / inches squared x 703. In an original example, 176 lb is 80 kg; at 1.80 m, BMI is 24.7 kg/m² to the nearest tenth. Follow the exercise rounding instruction."
        },
        {
          "heading": "Read BMI together with its limitations",
          "body": "The book lists adult BMI below 18.5 as underweight, 18.5 to 24.9 as normal weight, 25 to 29.9 as overweight and at least 30 as obese. It notes that BMI can overestimate body fat in muscular adults and underestimate it in frail older adults or others who have lost muscle. Height and weight do not directly identify which tissue contributed to the result."
        },
        {
          "heading": "Use the stated waist comparison",
          "body": "The book uses waist circumference alongside BMI because abdominal fat distribution changes disease risk. Its high-risk comparison is a waist greater than 35 inches for women or greater than 40 inches for men. An original arithmetic comparison of 36 inches against the supplied female threshold is above it; exactly 35 inches does not satisfy a strict greater-than instruction. This comparison does not replace the rest of the assessment."
        },
        {
          "heading": "Calculate ideal and adjusted weight without changing their scope",
          "body": "The source ideal-weight equations start at 50 kg for a man or 45.5 kg for a woman at 5 feet, then add 2.3 kg for each inch above 5 feet. The book notes alternate methods for children and adults below 5 feet; do not extrapolate this above-height equation to them. Its adjusted-weight equation is IBW + 0.4(TBW - IBW). For an original woman at 5 feet 6 inches with actual weight 90 kg, IBW is 59.3 kg and the stated adjusted formula gives 71.58 kg. Neither result automatically replaces the weight requested for a different calculation."
        },
        {
          "heading": "Keep nutrition and drug-weight instructions distinct",
          "body": "Chapter 12 selects weights for drug calculations with drug-specific exceptions. Chapter 11 uses total body weight, meaning scale weight, for most PN calculations unless the exercise specifies another basis. Some protein exercises explicitly request IBW. Record the requested basis; do not import a drug-dosing weight rule into a PN exercise or substitute adjusted weight solely because its formula is available."
        },
        {
          "heading": "Name the book energy method",
          "body": "The PN energy method taught here is the book Harris-Benedict BEE equation, followed by supplied activity and stress factors when TEE is requested. The separate basal-and-total-energy lesson gives both source coefficient sets. BEE and TEE are different endpoints; using an available equation does not justify adding factors to a question asking only for BEE."
        }
      ],
      "keyPoints": [
        "BMI uses height squared and the requested units.",
        "BMI has source-described limits when muscle mass differs.",
        "Use the requested weight; do not apply a drug-weight rule automatically to PN.",
        "Use the book BEE/TEE method and exercise rounding instructions."
      ],
      "check": {
        "question": "A patient weighs 176 lb. What is the approximate weight in kilograms?",
        "choices": [
          "80 kg",
          "64 kg",
          "97 kg",
          "118 kg"
        ],
        "answer": 0,
        "rationale": "176 divided by 2.2 equals 80 kg.",
        "reviewHref": "#calculation-foundations"
      }
    },
    {
      "slug": "caloric-needs",
      "title": "Basal and Total Energy Expenditure",
      "summary": "Apply the supplied Harris-Benedict equation, distinguish BEE from TEE and follow the exercise instructions for factors and rounding.",
      "concepts": [
        "Harris-Benedict BEE",
        "Kilograms and centimeters",
        "Activity and stress factors",
        "Explicit rounding"
      ],
      "visual": "pn-calc-energy",
      "application": "Write the requested endpoint, equation, units and factors before calculating. A supplied BEE is not already a TEE.",
      "lesson": [
        {
          "heading": "Identify the requested endpoint",
          "body": "The book defines basal energy expenditure (BEE), also called basal metabolic rate, as energy expenditure at rest excluding eating and activity. Its Harris-Benedict equations estimate this value. Total energy expenditure (TEE) additionally accounts for metabolic demands, feeding and activity. Calculate the endpoint requested by the exercise; do not apply activity or stress factors when it asks only for BEE."
        },
        {
          "heading": "Use the source coefficients and units",
          "body": "For the source male equation: BEE = 66.47 + 13.75W + 5H - 6.76A. For the source female equation: BEE = 655.1 + 9.6W + 1.85H - 4.68A. W is weight in kg, H is height in cm and A is age in years. The book uses total body weight unless the exercise specifies otherwise. Convert pounds by dividing by 2.2 and inches by multiplying by 2.54 before substitution. Do not exchange coefficients between equations."
        },
        {
          "heading": "Work the male and female equations separately",
          "body": "In an original male example, W = 70 kg, H = 175 cm and A = 45 years: 66.47 + 962.5 + 875 - 304.2 = 1,599.77 kcal/day, or 1,600 when rounded to a whole number. In an original female example, W = 60 kg, H = 165 cm and A = 40 years: 655.1 + 576 + 305.25 - 187.2 = 1,349.15 kcal/day, or 1,349. These are BEE estimates, without activity or stress multiplication."
        },
        {
          "heading": "Multiply for the stated total-energy plan",
          "body": "The source calculation is TEE = BEE x activity factor x stress factor. Its activity factors are 1.2 for confinement to bed and 1.3 for being out of bed. The source stress table lists 1.2 for minor surgery, 1.4 for infection, 1.5 for major trauma, sepsis or burns up to 30% of body surface area, and 1.5 to 2 for burns over 30%. These are the book calculation values; use the patient-specific factor supplied by an exercise rather than inventing a value inside a range. An original plan explicitly supplying BEE 1,600, activity 1.2 and stress 1.4 gives 2,688 kcal/day."
        },
        {
          "heading": "Make intermediate rounding explicit",
          "body": "Keep precision unless the exercise directs otherwise. The book examples round BEE and then use that rounded BEE for the next TEE step when the exercise refers back to that answer. A new exercise that explicitly supplies BEE 1,349 with factors 1.2 and 1.7 gives 2,751.96, or 2,752 kcal/day. Do not silently replace a supplied rounded input with another value or change the stated rounding path."
        },
        {
          "heading": "Distinguish a rough estimate and fever adjustment",
          "body": "The book describes 15 to 25 kcal/kg/day as an adult BEE estimate, useful as a rough comparison with the equation result. This range is not automatically a TEE prescription. It also states that energy requirements increase 12% for each degree of fever over 37 C. An exercise should state the baseline and how its adjustment is to be applied alongside other factors. For an original exercise explicitly requesting one 12% increase to a 1,250 kcal/day baseline at 38 C, the result is 1,400 kcal/day; do not add the same adjustment twice."
        }
      ],
      "keyPoints": [
        "BEE and TEE are different endpoints.",
        "Use kg, cm and years with the stated coefficients.",
        "TEE multiplies BEE by the supplied factors.",
        "Follow explicit intermediate-rounding and adjustment instructions."
      ],
      "check": {
        "question": "A calculation exercise supplies BEE 1,600 kcal/day, activity factor 1.2 and stress factor 1.4. What is TEE?",
        "choices": [
          "1,600 kcal/day",
          "2,688 kcal/day",
          "2,080 kcal/day",
          "4,160 kcal/day"
        ],
        "answer": 1,
        "rationale": "TEE = 1,600 x 1.2 x 1.4 = 2,688 kcal/day. The factors multiply.",
        "reviewHref": "#caloric-needs"
      }
    },
    {
      "slug": "protein-energy-targets",
      "title": "Protein and Total Energy Targets",
      "summary": "Protein is prescribed in grams per kilogram, while the energy plan reconciles amino acid, dextrose, lipid, and every calorie delivered outside the PN bag.",
      "concepts": [
        "Protein target and calculation weight",
        "Amino acid energy",
        "Total versus nonprotein energy",
        "Energy reconciliation"
      ],
      "visual": "pn-calc-protein-energy",
      "application": "Show protein grams per day, the weight and dose used, amino acid calories, total energy target, and the energy remaining for dextrose and lipid. Then compare the result with organ function, losses, metabolic stress, and the care goal.",
      "lesson": [
        {
          "heading": "Use the stated protein requirement and weight",
          "body": "The book gives 0.8 to 1 g/kg/day for a non-stressed ambulatory patient and 1.2 to 2 g/kg/day for hospitalized or malnourished patients. Multiply the selected requirement by the weight explicitly requested by the exercise. Some source orders use ideal body weight. An original order specifying 55 kg IBW and 1.6 g/kg IBW/day gives 88 g/day; do not replace that specified basis with a different weight."
        },
        {
          "heading": "Clarify whether the energy goal includes protein",
          "body": "The book discusses a protein-sparing approach in which the planned energy goal is assigned to dextrose and lipid, and notes differing conventions for whether amino acid calories are included in the target. State the convention rather than silently changing it. If an original exercise explicitly calls 2,000 kcal/day the NPC goal and adds 100 g amino acids at 4 kcal/g, NPC remains 2,000 and total delivered energy is 2,400. If its 2,000 goal explicitly includes those amino acid calories, the remaining NPC allowance is 1,600. These are different stated calculation plans."
        },
        {
          "heading": "Calculate protein directly",
          "body": "Multiply the selected calculation weight by the prescribed grams per kilogram per day. Amino acids conventionally contribute 4 kcal per gram, but their primary purpose is protein delivery. Do not reduce or increase the protein target merely to make the calorie arithmetic look tidy."
        },
        {
          "heading": "Separate total and nonprotein calories",
          "body": "Total PN energy includes amino acid, dextrose, and lipid energy. Nonprotein calories include dextrose and lipid only. The nonprotein calorie to nitrogen ratio is calculated by dividing nonprotein calories by grams of nitrogen, where nitrogen grams are commonly estimated as amino acid grams divided by 6.25."
        },
        {
          "heading": "Count energy outside the bag",
          "body": "The book directs counting calories from lipid-containing propofol and clevidipine alongside PN. Its critical-care propofol table gives 1.1 kcal/mL. Use the stated or actually delivered medication volume. Reconcile separately infused lipid, intravenous dextrose and stated oral/enteral intake with the same daily energy basis rather than counting only the PN container."
        },
        {
          "heading": "Keep the target provisional",
          "body": "The book requires careful PN monitoring, including glucose intolerance and refeeding risk, particularly phosphate shifts. It tailors fluid to accumulation concerns and electrolytes to patient needs; lipid frequency may be reduced when triglycerides are high. A calculation meets the supplied arithmetic plan, while clinical review must still consider these source-described issues."
        }
      ],
      "keyPoints": [
        "Protein grams equal calculation weight times the selected dose.",
        "Amino acids provide 4 kcal per gram.",
        "Nonprotein calories exclude amino acid energy.",
        "Medication and enteral calories belong in the same energy ledger."
      ],
      "check": {
        "question": "A 70 kg patient is prescribed 1.4 g/kg/day of amino acids. How many grams are required?",
        "choices": [
          "98 g",
          "70 g",
          "50 g",
          "140 g"
        ],
        "answer": 0,
        "rationale": "70 kg multiplied by 1.4 g/kg/day equals 98 g/day.",
        "reviewHref": "#protein-energy-targets"
      }
    },
    {
      "slug": "nitrogen-intake-ratios",
      "title": "Nitrogen Intake and Nonprotein Calorie Ratios",
      "summary": "Convert amino acid solution into protein and nitrogen, then calculate NPC:N with a consistent daily calorie basis.",
      "concepts": [
        "Protein grams from stock solution",
        "Nitrogen intake",
        "Nonprotein calorie numerator",
        "NPC:N ratio"
      ],
      "visual": "pn-calc-nitrogen",
      "application": "Show protein grams, nitrogen grams and nonprotein calories as separate daily totals before dividing.",
      "lesson": [
        {
          "heading": "Calculate delivered protein before nitrogen",
          "body": "A specified percent w/v amino acid solution contains that many grams per 100 mL. In an original example, 700 mL/day of a 10% w/v solution supplies 70 g/day. The book describes amino acids as the protein source in PN and assigns 4 kcal per gram, so those 70 g also supply 280 kcal/day. A solution volume alone is not a protein amount."
        },
        {
          "heading": "Convert intake with the source factor",
          "body": "The book uses 1 g nitrogen for each 6.25 g protein. Nitrogen intake in g/day = protein intake in g/day divided by 6.25. The original 70 g/day example therefore supplies 11.2 g nitrogen/day. Nitrogen intake is one part of nitrogen balance, which compares gains with losses; intake alone does not establish positive, negative or neutral balance."
        },
        {
          "heading": "Keep amino acid calories out of NPC",
          "body": "Nonprotein calories (NPC) are dextrose plus lipid calories. For an original daily plan, 200 g of PN dextrose supplies 680 kcal using 3.4 kcal/g; a stated lipid allowance supplies 440 kcal. NPC is 1,120 kcal/day. Adding 280 amino acid kcal yields total energy of 1,400 kcal/day, but it does not change NPC to 1,400. Use the specified sources and count each once."
        },
        {
          "heading": "Express the result as a ratio to one",
          "body": "Divide daily NPC by daily nitrogen intake, then express the result as x:1. With 1,120 NPC and 11.2 g nitrogen, NPC:N = 100:1. Both inputs must describe the same time period. Use the full nitrogen value through division unless the exercise explicitly tells you to round it earlier."
        },
        {
          "heading": "Attribute the source comparison values",
          "body": "The book lists desirable NPC:N values of 80:1 for the most severely stressed, 100:1 for severely stressed and 150:1 for unstressed patients. They are source comparison values for this calculation discussion. A correct ratio does not alone approve a PN prescription or replace the stated protein and energy requirements."
        },
        {
          "heading": "Connect protein stock volume, calories and nitrogen",
          "body": "For an original order of 102 g protein from a specified 8.5% w/v amino acid solution, concentration is 0.085 g/mL and volume is 102/0.085 = 1,200 mL. Protein energy is 102 x 4 = 408 kcal and nitrogen intake is 102/6.25 = 16.32 g. These are separate outputs from the same protein order, not three additional ingredients."
        }
      ],
      "keyPoints": [
        "Nitrogen g/day = protein g/day divided by 6.25.",
        "NPC excludes amino acid calories.",
        "Divide NPC by nitrogen and state the result as x:1.",
        "Intake alone is not a nitrogen-balance result."
      ],
      "check": {
        "question": "A daily exercise supplies 70 g amino acids and 1,120 nonprotein kcal. What is NPC:N?",
        "choices": [
          "100:1",
          "16:1",
          "20:1",
          "125:1"
        ],
        "answer": 0,
        "rationale": "70/6.25 = 11.2 g nitrogen/day; 1,120/11.2 = 100, giving 100:1.",
        "reviewHref": "#nitrogen-intake-ratios"
      }
    },
    {
      "slug": "dextrose-gir",
      "title": "Dextrose and Glucose Infusion Rate",
      "summary": "Dextrose calculations must agree in grams, calories, stock volume, infusion time, and milligrams per kilogram per minute.",
      "concepts": [
        "Dextrose energy",
        "Glucose infusion rate",
        "Time and delivery rate",
        "Source limits and glucose intolerance"
      ],
      "visual": "pn-calc-dextrose",
      "application": "Calculate dextrose grams, multiply by 3.4 kcal per gram, then calculate GIR as grams times 1000 divided by kilograms and total infusion minutes. Recalculate whenever weight, dose, or infusion duration changes.",
      "lesson": [
        {
          "heading": "Allocate a stated nonprotein calorie goal",
          "body": "The book describes a usual NPC distribution of 70 to 85% from carbohydrate and 15 to 30% from lipid. Use the exercise-selected proportion within its stated plan. In an original exercise assigning 80% of 1,530 NPC to PN dextrose, dextrose supplies 1,224 kcal, or 360 g at 3.4 kcal/g. A 50% w/v stock supplies this amount in 720 mL. These are calorie, mass and volume outputs from one allocation; do not add them together."
        },
        {
          "heading": "Keep the two source delivery limits distinct",
          "body": "The book gives a conservative dextrose figure of 4 mg/kg/min and notes an alternate figure of 7 g/kg/day. They are not equivalent units for the same limit: 4 x 1,440/1,000 = 5.76 g/kg/day, while 7 x 1,000/1,440 is about 4.86 mg/kg/min. An arithmetic exercise must identify which limit it supplies. Passing that arithmetic comparison does not establish a patient-specific maximum or approve the prescription."
        },
        {
          "heading": "Preserve dextrose grams when changing stock",
          "body": "The book source-volume exercises preserve the ordered dextrose amount when a different concentration is used. An original order of 420 mL of 50% w/v dextrose contains 210 g. At 70% w/v, the same amount requires 300 mL and still supplies 714 kcal. This changes source volume; it does not by itself establish final bag volume, which must be reconciled separately."
        },
        {
          "heading": "Calculate a mixed concentration from total grams",
          "body": "For an original arithmetic mixture of 300 mL D20% and 200 mL D5%, both explicitly w/v, the contributions are 60 and 10 g. Seventy grams in a stated additive total volume of 500 mL gives 14% w/v. Average the contributed mass over total volume; do not simply average 20 and 5 without considering their volumes."
        },
        {
          "heading": "Use the stated substrate energy value",
          "body": "The source distinguishes food/EN carbohydrate at 4 kcal/g, PN dextrose monohydrate at 3.4 kcal/g and glycerol at 4.3 kcal/g. Its glycerol discussion is a different substrate calculation. For a stated original glycerol exercise, 50 g at 4.3 kcal/g supplies 215 kcal; do not reuse the dextrose conversion for it."
        },
        {
          "heading": "Convert grams to energy",
          "body": "Intravenous dextrose provides 3.4 kcal per gram. This differs from the conventional 4 kcal per gram used for oral carbohydrate because hydrated intravenous dextrose has a different energy value."
        },
        {
          "heading": "Calculate glucose infusion rate",
          "body": "GIR in mg/kg/min equals dextrose grams per day times 1000, divided by calculation weight in kilograms, divided by infusion time in minutes. The formula is a delivery-rate calculation, not a substitute for glucose monitoring or a patient-specific maximum."
        },
        {
          "heading": "Recalculate when cycling",
          "body": "Compressing the same grams into fewer hours increases the calculated delivery rate. A stated 240 g over 24 hours produces half the GIR of 240 g over 12 hours at the same weight. The source discusses PN being titrated on and off to facilitate glucose regulation. This rate comparison does not prescribe a start/stop protocol or insulin adjustment."
        },
        {
          "heading": "Interpret the number clinically",
          "body": "The book treats the stated dextrose figures as conservative limits, requires assessment of glucose intolerance and discusses reducing dextrose load or increasing insulin when hyperglycemia is present. A rate calculation describes delivery; it does not measure blood glucose or specify an insulin order. Compare only against the limit explicitly supplied by the exercise."
        }
      ],
      "keyPoints": [
        "PN dextrose provides 3.4 kcal per gram.",
        "GIR uses milligrams, kilograms, and minutes.",
        "A shorter infusion raises GIR when grams stay constant.",
        "The calculated GIR must be paired with clinical tolerance."
      ],
      "check": {
        "question": "A 70 kg patient receives 252 g of dextrose over 24 hours. What is the GIR?",
        "choices": [
          "2.5 mg/kg/min",
          "1.25 mg/kg/min",
          "3.4 mg/kg/min",
          "6 mg/kg/min"
        ],
        "answer": 0,
        "rationale": "252,000 mg divided by 70 kg and 1,440 minutes equals 2.5 mg/kg/min.",
        "reviewHref": "#dextrose-gir"
      }
    },
    {
      "slug": "lipid-energy-ledger",
      "title": "Lipid and the Complete Energy Ledger",
      "summary": "Calculate lipid mass, volume and energy using the stated product, schedule and medication lipid contributions.",
      "concepts": [
        "Grams per kilogram",
        "Concentration and volume",
        "Lipid energy",
        "Propofol and other non-PN calories"
      ],
      "visual": "pn-calc-lipid",
      "application": "Calculate ordered grams and source volume with explicit concentration units, then reconcile lipid calories and the supplied schedule with medication lipid calories.",
      "lesson": [
        {
          "heading": "Distinguish source emulsion energy from food fat",
          "body": "The book assigns 9 kcal/g to food/EN fat, but uses kcal/mL for injectable emulsions because other emulsion components also contribute energy. Its calculation values are 1.1 kcal/mL for 10%, 2 for 20% and 3 for 30%. An original source-method exercise using 190 mL of 30% emulsion gives 570 kcal. These source examples do not override the exact product labeling already required in this lesson."
        },
        {
          "heading": "Calculate a weekly average without changing the schedule",
          "body": "When a lipid dose is supplied once weekly, divide its weekly calories by seven to express average daily calories. An original exercise gives 280 mL of 10% emulsion at 1.1 kcal/mL: 308 kcal per dose and 44 kcal/day averaged over seven days. If the stated schedule instead gives that same dose three times weekly, average energy is 308 x 3/7 = 132 kcal/day. An average is not a new instruction to infuse the weekly dose every day."
        },
        {
          "heading": "Subtract against the explicit calorie convention",
          "body": "If an original exercise explicitly assigns an NPC goal of 2,100 kcal/day and 1,530 kcal/day to dextrose, 570 kcal/day remains for lipid. Separately stated amino acid calories are not subtracted from an NPC goal. At a supplied 2 kcal/mL, 570 kcal requires 285 mL. For a goal explicitly including protein, the subtraction would use that different stated total-energy basis."
        },
        {
          "heading": "Move between dose, grams, and volume",
          "body": "For a stated arithmetic order, multiply kilograms by ordered g/kg to obtain grams. A concentration explicitly expressed as 20% w/v contains 0.2 g/mL, so grams / 0.2 gives source milliliters. The book distinguishes traditional soybean-oil emulsion from the four-oil Smoflipid formulation and warns they are not interchangeable; identify the supplied product and units."
        },
        {
          "heading": "Use the labeled energy value",
          "body": "Many 20 percent adult lipid emulsions provide about 2 kcal per mL, but the exact product label governs. A 250 mL container at 2 kcal per mL contributes 500 kcal. Do not apply the 9 kcal per gram food-fat value directly to an intravenous emulsion without accounting for its formulation."
        },
        {
          "heading": "Audit the lipid already present",
          "body": "Propofol and clevidipine use lipid vehicles and can contribute substantial daily energy. Lipid may also be delivered separately from a two-in-one PN formulation. Add all sources before deciding whether the PN lipid dose and total energy remain appropriate."
        },
        {
          "heading": "Pair arithmetic with safety",
          "body": "The book notes that lipid administration may be reduced to three times weekly or once weekly when triglycerides are high. Count the prescribed schedule and calories from propofol or clevidipine before interpreting the daily average. A correct stock-volume result alone does not determine whether that product and schedule fit the patient."
        }
      ],
      "keyPoints": [
        "For a stated 20% w/v emulsion, concentration is 0.2 g/mL.",
        "Use the supplied product energy value.",
        "Count medication lipid in the daily total.",
        "Correct arithmetic does not determine the patient-specific schedule."
      ],
      "check": {
        "question": "An arithmetic exercise prescribes 1 g/kg for a 75 kg adult using a lipid emulsion explicitly labeled 20% w/v. What volume supplies 75 g?",
        "choices": [
          "375 mL",
          "150 mL",
          "250 mL",
          "750 mL"
        ],
        "answer": 0,
        "rationale": "Seventy-five grams divided by 0.2 g/mL equals 375 mL.",
        "reviewHref": "#lipid-energy-ledger"
      }
    },
    {
      "slug": "stock-solutions-additives",
      "title": "Stock Solutions, Additives, and Final Volume",
      "summary": "Every ordered nutrient must be translated into the volume of a specific source product, and every source volume must fit inside the final container.",
      "concepts": [
        "Percent strength",
        "Grams per milliliter",
        "mEq and mmol conversion",
        "Final volume and concentration"
      ],
      "visual": "pn-calc-stock",
      "application": "For each source, write ordered amount / stock concentration with matching units. Count each stated ingredient volume and water toward the final container; count separately infused solutions in the overall fluid plan.",
      "lesson": [
        {
          "heading": "Carry amino acid grams across source strengths",
          "body": "The book amino acid stock examples include 5%, 8.5%, 10% and 15%; their protein energy is 4 kcal/g. In an original w/v exercise, 600 mL of 10% supplies 60 g. The same protein amount requires 400 mL of 15% and supplies the same 240 kcal. Final volume still requires reconciliation after the stock-volume change."
        },
        {
          "heading": "Account for sodium supplied with acetate",
          "body": "An original exercise requests 90 mEq sodium and 50 mEq acetate. Its sodium acetate stock supplies 2 mEq of each ion per mL; sodium chloride supplies 4 mEq sodium/mL. First provide acetate using 25 mL sodium acetate, which also supplies 50 mEq sodium. The remaining 40 mEq sodium requires 10 mL sodium chloride. Recheck both totals rather than ordering 90 mEq sodium chloride in addition."
        },
        {
          "heading": "Account for potassium supplied with phosphate",
          "body": "An original exercise requests 24 mmol phosphate and 60 mEq potassium. It supplies potassium phosphate containing 3 mmol phosphate and 4.4 mEq potassium per mL, plus potassium chloride at 2 mEq potassium/mL. Eight mL phosphate stock supplies 24 mmol phosphate and 35.2 mEq potassium. The remaining 24.8 mEq potassium requires 12.4 mL potassium chloride. If the first stock already exceeds the potassium target, revise the stated plan instead of assigning negative potassium chloride volume. Use the supplied stock values; a phosphate formulation has no universal counterion factor."
        },
        {
          "heading": "Separate source screening arithmetic from compatibility proof",
          "body": "The book includes a combined calcium/phosphate screening calculation, using matching units, an explicitly supplied phosphate conversion and final liters. For an original exercise supplying 15 mmol phosphate, 2 mEq/mmol, 8 mEq calcium and final volume 1 L, the combined number is 38 mEq/L. The source discusses a 45 mEq/L screen, but a number below that screen alone does not demonstrate compatibility. Retain the validated formulation, product, process and solubility checks already required for the actual bag."
        },
        {
          "heading": "Keep corrected calcium as an exercise estimate",
          "body": "For the book corrected-calcium arithmetic, calculated mg/dL = reported calcium + 0.8(4 - albumin), with calcium in mg/dL and albumin in g/dL. A supplied original example of calcium 7.9 and albumin 2.5 yields 9.1 mg/dL. This is a calculated estimate, not a measured ionized calcium result or an automatic replacement order. The full clinical interpretation remains part of the corresponding calcium/fluid module review."
        },
        {
          "heading": "Match calcium and mass-based additive units",
          "body": "An original order for 9.3 mEq calcium from a supplied calcium gluconate stock of 0.465 mEq/mL requires 20 mL. For a separate stated sodium chloride exercise with MW 58.5 and valence 1, 35 mEq requires 2,047.5 mg, or 2.0475 g. A 23.4% w/v stock supplies that in 8.75 mL, agreeing with a supplied 4 mEq/mL concentration. Compound grams, ionic mEq and milliliters are different quantities."
        },
        {
          "heading": "Translate percent into concentration",
          "body": "A percent weight per volume solution contains that many grams in 100 mL. Dextrose 70 percent contains 0.7 g/mL, amino acids 10 percent contain 0.1 g/mL, and a 20 percent lipid emulsion contains 0.2 g/mL. Ordered grams divided by grams per milliliter gives the required source volume."
        },
        {
          "heading": "Respect the labeled unit",
          "body": "Electrolyte products may be labeled in mEq/mL, mmol/mL, mEq per vial, or a combination. Ordered amount divided by concentration gives volume only when the units match. Phosphate products can contribute both phosphate and sodium or potassium, so both ions must be included in the final electrolyte total."
        },
        {
          "heading": "Reconcile the container",
          "body": "Add the volume of amino acid, dextrose, lipid when admixed, electrolytes, vitamins, trace elements, medications when permitted, and sterile water. The result must fit the ordered final volume while satisfying validated concentration, compatibility, and container limits."
        },
        {
          "heading": "Use independent checks",
          "body": "Reconstruct the stated order from nutrient amounts, source concentrations, final volume and delivery time. The book exercises require these quantities to agree, and Chapter 12 distinguishes volume added to a diluent from quantity sufficient to a final volume. Resolve a unit or final-volume discrepancy in the exercise before treating the calculated result as its answer."
        }
      ],
      "keyPoints": [
        "Percent weight per volume means grams per 100 mL.",
        "Match units before dividing.",
        "Count every ion contributed by a salt.",
        "Source volumes plus water must equal the final volume."
      ],
      "check": {
        "question": "How much dextrose 70 percent is required to provide 350 g?",
        "choices": [
          "500 mL",
          "245 mL",
          "350 mL",
          "700 mL"
        ],
        "answer": 0,
        "rationale": "Dextrose 70 percent contains 0.7 g/mL. Three hundred fifty grams divided by 0.7 g/mL equals 500 mL.",
        "reviewHref": "#stock-solutions-additives"
      }
    },
    {
      "slug": "rate-final-audit",
      "title": "Infusion Rate and Final Order Audit",
      "summary": "The final verification reconstructs the whole order from the patient outward and tests whether the prescription, container, pump, and monitoring plan agree.",
      "concepts": [
        "mL per hour",
        "Stated rate segments",
        "Actual daily delivery",
        "Independent calculation checks"
      ],
      "visual": "pn-calc-audit",
      "application": "Reconstruct the stated weight, daily grams, calorie basis, source volumes, final volume, rate and duration. Keep arithmetic verification separate from the book clinical monitoring and compounding requirements.",
      "lesson": [
        {
          "heading": "Read both percentages and the delivered volume",
          "body": "A source premixed PN form specifies amino acid and dextrose percentages separately, along with rate or volume. In an original exercise, a 5% amino acid/15% dextrose w/v solution at a constant 60 mL/hour for 24 hours delivers 1,440 mL. It supplies 72 g amino acids and 216 g dextrose, or 288 and 734.4 kcal. Total energy including both is 1,022.4 kcal. Count a separately supplied lipid source only if the exercise includes one."
        },
        {
          "heading": "Convert a calorie requirement into final solution volume",
          "body": "For an original stated 5% amino acid/20% dextrose w/v solution, each mL supplies 0.05 x 4 + 0.20 x 3.4 = 0.88 kcal including protein. A 1,584 kcal requirement on that same basis requires 1,800 mL. State whether protein is included before solving. A percent is grams per 100 mL, not kcal per 100 mL."
        },
        {
          "heading": "Use all calories in a total-energy percentage",
          "body": "An original daily plan supplies 200 g dextrose, 75 g amino acids and 125 mL lipid at a stated 2 kcal/mL. Energy is 680 + 300 + 250 = 1,230 kcal. Protein represents 300/1,230 x 100, or about 24% when rounded to a whole percent. A total-energy denominator includes protein; an NPC denominator does not."
        },
        {
          "heading": "Reconcile delivery and quantity sufficient to final volume",
          "body": "The book includes calculations based on delivered volume and an order made quantity sufficient to a final volume. If an original 5%/15% solution actually runs at 50 mL/hour for a stated 18 hours, 900 mL supplies 180 amino acid kcal plus 459 dextrose kcal, totaling 639. Do not assume a full 24-hour delivery. In a separate original bag exercise with final volume 1,200 mL and ingredient volumes 300, 750 and 50 mL, the remaining water allowance is 100 mL. Quantity sufficient to final volume does not mean adding the full final volume as water."
        },
        {
          "heading": "Calculate the base rate",
          "body": "For a constant infusion, divide total volume by infusion hours. An original 2,160 mL over 18 hours gives 120 mL/hour. If an arithmetic schedule explicitly supplies different rate segments, count each segment volume. For a stated total of 1,600 mL with 200 mL delivered in start/end segments and a 10-hour plateau, the plateau rate is (1,600 - 200) / 10 = 140 mL/hour. This supplied-segment exercise does not set a clinical taper protocol."
        },
        {
          "heading": "Reconcile daily and hourly delivery",
          "body": "Use the actual stated duration and volume to calculate delivered grams and calories. If the schedule has specified segments, sum their volumes; if some ordered volume was not delivered, do not count it as intake. The book actual-delivery example uses the amount received after an enteral spill rather than the full prescribed container."
        },
        {
          "heading": "Use a calculation checksum",
          "body": "Recalculate total calories from the final grams and compare them with the intended target. Recalculate source volumes from the final label and compare them with the final volume. Recalculate GIR from the final dextrose grams and infusion time. These independent paths expose transcription and unit errors."
        },
        {
          "heading": "Finish with clinical plausibility",
          "body": "The book requires monitoring of glucose intolerance and refeeding risk, patient-tailored fluid and electrolytes, and counting medication lipid calories. Check that the arithmetic reflects the stated weight, calorie convention, ingredients and actual delivery. Agreement among numbers does not remove these source-described clinical considerations."
        }
      ],
      "keyPoints": [
        "Volume / hours gives the constant rate.",
        "Count every supplied rate segment and actual delivered volume.",
        "Use more than one calculation path as a checksum.",
        "The book clinical considerations still require review."
      ],
      "check": {
        "question": "A 2,400 mL PN bag infuses at a constant rate over 20 hours. What is the rate?",
        "choices": [
          "120 mL/hour",
          "100 mL/hour",
          "144 mL/hour",
          "200 mL/hour"
        ],
        "answer": 0,
        "rationale": "2,400 mL divided by 20 hours equals 120 mL/hour.",
        "reviewHref": "#rate-final-audit"
      }
    },
  ],
  referenceHeading: "Source for this calculation module.",
  referenceIntroduction: "Calculation methods and teaching use the RxPrep 2023 course book. Examples use original values; source estimates and exercise inputs do not establish patient-specific orders.",
  references: [
    { label: "RxPrep 2023: Nutrition calculations", locator: "Chapter 11, Parenteral and Enteral Nutrition, printed pages 149-168 (PDF pages 157-176); original examples use the book methods with stated units and exercise limits." },
    { label: "RxPrep 2023: Clinical calculation methods", locator: "Chapter 12, body mass index, weight formulas and flow-rate/final-volume methods, printed pages 169-174 (PDF pages 177-182)." },
    { label: "RxPrep 2023: Propofol calorie contribution", locator: "Chapter 53, Acute and Critical Care Medicine, propofol table, printed page 716 (PDF page 724): medication-emulsion calorie contribution." },
  ],
  questionBank: parenteralNutritionCalculationsQuestionBank,
};
