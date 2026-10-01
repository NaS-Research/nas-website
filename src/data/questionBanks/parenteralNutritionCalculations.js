const q = (id, question, choices, answer, rationale, lesson, extra = {}) => ({ id: `pncalc-${id}`, question, choices, answer, rationale, reviewHref: `#${lesson}`, ...extra });

const core = [
  q("001", "Which conversion is used to change pounds to kilograms?", ["Divide pounds by 2.2", "Multiply pounds by 2.2", "Divide pounds by 703", "Multiply pounds by 2.54"], 0, "One kilogram is approximately 2.2 pounds.", "calculation-foundations"),
  q("002", "Which adult BMI formula uses metric units?", ["kg divided by m squared", "kg divided by cm", "lb divided by inches", "kg multiplied by m squared"], 0, "Adult BMI equals weight in kilograms divided by height in meters squared.", "calculation-foundations"),
  q("003", "How should BMI be interpreted in nutrition assessment?", ["As a screening measure combined with other clinical information", "As a direct measurement of muscle mass", "As proof of adequate nutrition", "As a replacement for weight history"], 0, "BMI is a screening measure and does not directly measure body composition or nutrition reserve.", "calculation-foundations"),
  q("004", "Which condition can make a current measured weight misleading for nutrition calculations?", ["Marked edema", "Stable eyeglass prescription", "Remote appendectomy", "Normal room temperature"], 0, "Fluid accumulation can make measured weight overstate metabolically active tissue.", "calculation-foundations"),
  q("005", "What is the main limitation of a classroom ideal body weight equation?", ["It is a convention and not a direct physiologic measurement", "It cannot use height", "It always equals actual weight", "It measures intracellular water"], 0, "Ideal body weight formulas are estimation conventions and should be used only when appropriate for the task.", "calculation-foundations"),
  q("006", "What does the common adjusted body weight equation attempt to do?", ["Include a fraction of weight above ideal body weight", "Replace height with age", "Measure edema directly", "Calculate nitrogen balance"], 0, "Adjusted body weight commonly adds 40 percent of the difference between actual and ideal weight to ideal weight.", "calculation-foundations"),
  q("007", "A patient receives 18 mL/hour of propofol for 10 hours. Using 1.1 kcal/mL, how much energy must be added to the daily ledger?", ["198 kcal", "180 kcal", "110 kcal", "19.8 kcal"], 0, "The patient receives 180 mL, and 180 mL multiplied by 1.1 kcal/mL equals 198 kcal.", "lipid-energy-ledger"),
  q("008", "A PN prescription provides 500 kcal from lipid, and propofol adds 330 kcal. What lipid-derived energy belongs in the complete daily ledger?", ["830 kcal", "500 kcal", "330 kcal", "1,500 kcal"], 0, "All lipid-containing sources must be reconciled, so 500 plus 330 equals 830 kcal.", "lipid-energy-ledger"),
  q("009", "Why should intermediate PN calculations retain extra precision until the final order is audited?", ["Early rounding can compound error across ingredients and rates", "It changes kilograms into liters", "It removes the need for units", "It guarantees clinical accuracy"], 0, "Rounding at each step can produce a larger final discrepancy than rounding once at the clinically appropriate endpoint.", "rate-final-audit"),
  q("010", "Which documentation makes a weight-based PN calculation reproducible during final-order review?", ["The weight value, weight type, dose, units, date, and calculation path", "The final number alone", "The patient's room number only", "A verbal estimate without units"], 0, "The full calculation basis allows another clinician to reproduce the result and reconcile it with the order, label, and pump schedule.", "rate-final-audit"),

  q("011", "How is a daily amino acid target calculated?", ["Calculation weight multiplied by prescribed g/kg/day", "Height multiplied by BMI", "Calories divided by infusion minutes", "Final volume multiplied by lipid concentration"], 0, "Protein grams per day equal the selected weight times the prescribed dose.", "protein-energy-targets"),
  q("012", "How many kilocalories are conventionally assigned to one gram of amino acids?", ["4 kcal", "3.4 kcal", "7 kcal", "9 kcal"], 0, "Amino acids conventionally provide 4 kcal per gram.", "protein-energy-targets"),
  q("013", "Which calories are included in nonprotein calories?", ["Dextrose and lipid calories", "Amino acid calories only", "Trace-element calories", "Sterile-water calories"], 0, "Nonprotein calories come from carbohydrate and fat.", "protein-energy-targets"),
  q("014", "How are grams of nitrogen commonly estimated from amino acid grams?", ["Divide amino acid grams by 6.25", "Multiply amino acid grams by 6.25", "Divide amino acid grams by 3.4", "Multiply amino acid grams by 9"], 0, "Protein is commonly treated as about 16 percent nitrogen, so grams divided by 6.25 estimate nitrogen.", "protein-energy-targets"),
  q("015", "Why must propofol be included in an energy calculation?", ["Its lipid vehicle provides about 1.1 kcal/mL", "It provides 4 kcal per gram of protein", "It contains all trace elements", "It has no nutritional energy"], 0, "The lipid emulsion used in propofol contributes clinically meaningful calories.", "protein-energy-targets"),
  q("016", "Which value best reflects actual propofol energy delivered?", ["The documented volume infused", "The maximum possible rate for 24 hours", "The vial size ordered", "The patient's height"], 0, "Energy reconciliation should use the volume actually delivered whenever available.", "protein-energy-targets"),
  q("017", "What is the best response when calculated calories fit the target but protein is too low?", ["Redesign the macronutrient distribution rather than accepting inadequate protein", "Reduce protein further", "Count sterile water as protein", "Ignore the protein target"], 0, "Energy arithmetic should not displace the patient-specific protein goal.", "protein-energy-targets"),
  q("018", "Which statement about a calculated energy target is most accurate?", ["It is a starting estimate that must be monitored", "It is exact for the entire admission", "It never changes with illness", "It replaces clinical assessment"], 0, "Energy estimates require reassessment against response and actual delivery.", "protein-energy-targets"),

  q("019", "How many kilocalories does one gram of intravenous dextrose provide?", ["3.4 kcal", "4 kcal", "7 kcal", "9 kcal"], 0, "Hydrated intravenous dextrose provides 3.4 kcal per gram.", "dextrose-gir"),
  q("020", "Which units belong to glucose infusion rate?", ["mg/kg/min", "g/mL/hour", "kcal/kg/day", "mEq/L/day"], 0, "GIR expresses milligrams of glucose delivered per kilogram per minute.", "dextrose-gir"),
  q("021", "What happens to GIR when the same dextrose grams are infused over 12 rather than 24 hours?", ["It doubles", "It is halved", "It is unchanged", "It becomes zero"], 0, "Halving the infusion time doubles the delivery rate.", "dextrose-gir"),
  q("022", "Which input is required to calculate GIR?", ["Dextrose grams, calculation weight, and infusion minutes", "Lipid grams only", "Serum sodium only", "Final pH only"], 0, "All three terms are present in the GIR equation.", "dextrose-gir"),
  q("023", "Why does GIR not replace glucose monitoring?", ["It calculates delivery, not the patient's metabolic response", "It measures blood glucose continuously", "It predicts every insulin dose", "It excludes infusion time"], 0, "A delivery rate cannot reveal the full effect of illness, insulin, or other glucose sources.", "dextrose-gir"),
  q("024", "Which finding can support concern for excessive carbohydrate delivery?", ["Hyperglycemia with rising carbon dioxide production", "Improved strength", "Stable triglycerides", "A clean catheter site"], 0, "Excess dextrose can worsen glycemia, lipogenesis, and carbon dioxide production.", "dextrose-gir"),

  q("025", "An exercise specifies a lipid emulsion at 20 percent w/v. What is its concentration?", ["0.2 g/mL", "2 g/mL", "0.02 g/mL", "20 g/mL"], 0, "Twenty grams per 100 mL of finished product equals 0.2 g/mL. The exercise explicitly states a w/v basis.", "lipid-energy-ledger"),
  q("026", "How should the calorie content of a lipid injectable emulsion be determined?", ["Use the exact product label", "Assume every product is identical", "Use amino acid calories", "Ignore emulsifier energy"], 0, "The final formulation and labeled energy value are product specific.", "lipid-energy-ledger"),
  q("027", "A product label states 2 kcal/mL. How many calories are in 250 mL?", ["500 kcal", "250 kcal", "750 kcal", "2,250 kcal"], 0, "Two kilocalories per milliliter multiplied by 250 mL equals 500 kcal.", "lipid-energy-ledger"),
  q("028", "What additional check is required after calculating the correct lipid volume?", ["Product-specific dose, rate, tolerance, and total energy", "Only the bag color", "Only patient height", "No further check"], 0, "Correct volume alone does not establish clinical safety.", "lipid-energy-ledger"),

  q("029", "What does 70 percent dextrose mean in weight per volume terms?", ["70 g per 100 mL", "70 mg per 100 mL", "7 g per 1,000 mL", "0.07 g per 100 mL"], 0, "A 70 percent weight per volume solution contains 70 g in 100 mL.", "stock-solutions-additives"),
  q("030", "An exercise specifies an amino acid solution at 10 percent w/v. What is its concentration?", ["0.1 g/mL", "1 g/mL", "10 g/mL", "0.01 g/mL"], 0, "Ten grams per 100 mL of finished product equals 0.1 g/mL. The exercise explicitly states a w/v basis.", "stock-solutions-additives"),
  q("031", "Which equation converts an ordered amount to source volume?", ["Ordered amount divided by stock concentration", "Stock concentration divided by ordered amount", "Ordered amount multiplied by final volume", "Final volume divided by infusion time"], 0, "When units match, amount divided by amount per milliliter equals milliliters.", "stock-solutions-additives"),
  q("032", "Why must phosphate salt contributions be reviewed twice?", ["The product contributes phosphate plus sodium or potassium", "Phosphate provides protein", "It changes pounds to kilograms", "It removes all calcium"], 0, "The counterion contributes to the final electrolyte total.", "stock-solutions-additives"),
  q("033", "An additive is labeled 4 mEq/mL. What volume supplies 24 mEq?", ["6 mL", "4 mL", "8 mL", "96 mL"], 0, "Twenty-four mEq divided by 4 mEq/mL equals 6 mL.", "stock-solutions-additives"),
  q("034", "What must equal the ordered final volume?", ["All ingredient source volumes plus sterile water", "Dextrose volume alone", "Amino acid volume alone", "Electrolyte volume alone"], 0, "Every liquid source and the added water contribute to the final volume.", "stock-solutions-additives"),

  q("035", "How is a constant infusion rate calculated?", ["Total volume divided by infusion hours", "Infusion hours divided by total volume", "Total calories divided by kilograms", "Dextrose grams divided by lipid grams"], 0, "For a constant rate, mL divided by hours gives mL/hour.", "rate-final-audit"),
  q("036", "Why is total volume divided by plateau hours wrong for a tapered cyclic schedule?", ["Some volume is delivered during the taper periods", "Tapering removes all fluid", "The final volume is unknown", "Plateau rate never uses time"], 0, "Ramp-up and ramp-down volumes must be subtracted before calculating the plateau rate.", "rate-final-audit"),
  q("037", "Which calculation acts as a useful independent checksum?", ["Recalculate calories from final labeled grams", "Read only the prior day's rate", "Ignore non-PN calories", "Assume the compounding record is correct"], 0, "A separate path can reveal transcription or unit errors.", "rate-final-audit"),
  q("038", "Which set should agree before PN release?", ["Order, worksheet, compounding record, label, and pump schedule", "BMI and room number only", "Bag size and patient age only", "Serum sodium and brand name only"], 0, "The complete medication-use system must describe the same prescription.", "rate-final-audit"),
  q("039", "A patient receives only 80 percent of the ordered bag because of interruptions. Which amount belongs in the nutrition assessment?", ["The amount actually delivered", "The full ordered amount automatically", "Zero calories", "Only amino acid calories"], 0, "Clinical assessment depends on actual delivery, not just the prescription.", "rate-final-audit"),
  q("040", "What is the final step after all PN arithmetic is correct?", ["Assess whether the complete prescription is clinically plausible today", "Release the order without monitoring", "Delete the calculation weight", "Round every value to the nearest hundred"], 0, "Mathematical consistency does not prove that the treatment fits the current patient.", "rate-final-audit"),
];

const bmiCases = [
  [55, 1.60], [68, 1.70], [72, 1.75], [80, 1.80], [90, 1.65],
  [100, 1.90], [62, 1.55], [85, 1.72], [110, 1.78], [48, 1.68],
].map(([kg, meters], index) => {
  const bmi = Math.round((kg / (meters ** 2)) * 10) / 10;
  return q(`05${index}`, `An adult weighs ${kg} kg and is ${meters.toFixed(2)} m tall. What is the BMI?`, [`${bmi} kg/m²`, `${Math.round((bmi + 5) * 10) / 10} kg/m²`, `${Math.round((bmi - 4) * 10) / 10} kg/m²`, `${Math.round((bmi * 2) * 10) / 10} kg/m²`], 0, `${kg} divided by ${meters.toFixed(2)} squared equals ${bmi} kg/m².`, "calculation-foundations");
});

const ibwCases = [
  ["man", 64], ["woman", 63], ["man", 68], ["woman", 66], ["man", 71],
  ["woman", 70], ["man", 74], ["woman", 69], ["man", 66], ["woman", 72],
].map(([sex, inches], index) => {
  const base = sex === "man" ? 50 : 45.5;
  const ibw = Math.round((base + 2.3 * (inches - 60)) * 10) / 10;
  return q(`06${index}`, `Using the classroom convention of ${base} kg at 5 feet plus 2.3 kg per inch above 5 feet, what is the estimated ideal body weight for a ${sex} who is ${Math.floor(inches / 12)} ft ${inches % 12} in?`, [`${ibw} kg`, `${Math.round((ibw + 6.9) * 10) / 10} kg`, `${Math.round((ibw - 4.6) * 10) / 10} kg`, `${inches} kg`], 0, `${inches - 60} inches above 5 feet multiplied by 2.3 kg is added to ${base} kg. This is a convention, not a direct body-composition measure.`, "calculation-foundations");
});

const adjustedWeightCases = [
  [60, 90], [55, 85], [70, 110], [65, 95], [50, 80],
  [75, 125], [62, 102], [58, 78], [68, 118], [72, 97],
].map(([ideal, actual], index) => {
  const adjusted = Math.round((ideal + 0.4 * (actual - ideal)) * 10) / 10;
  return q(`07${index}`, `A protocol calls for adjusted body weight = IBW + 0.4(actual weight minus IBW). If IBW is ${ideal} kg and actual weight is ${actual} kg, what is the adjusted body weight?`, [`${adjusted} kg`, `${Math.round((ideal + 0.6 * (actual - ideal)) * 10) / 10} kg`, `${ideal} kg`, `${actual} kg`], 0, `${ideal} + 0.4(${actual} minus ${ideal}) equals ${adjusted} kg. The protocol must also justify using this convention.`, "calculation-foundations");
});

const mifflinCases = [
  ["man", 70, 175, 40], ["woman", 60, 165, 35], ["man", 90, 180, 55], ["woman", 80, 170, 50], ["man", 65, 168, 25],
  ["woman", 72, 160, 68], ["man", 100, 190, 30], ["woman", 55, 158, 45], ["man", 78, 172, 62], ["woman", 95, 175, 28],
].map(([sex, kg, cm, age], index) => {
  const offset = sex === "man" ? 5 : -161;
  const ree = Math.round(10 * kg + 6.25 * cm - 5 * age + offset);
  return q(`08${index}`, `Using Mifflin St Jeor, calculate resting energy expenditure for a ${age}-year-old ${sex}, ${kg} kg and ${cm} cm. Use 10W + 6.25H minus 5A ${sex === "man" ? "plus 5" : "minus 161"}.`, [`${ree} kcal/day`, `${ree + 250} kcal/day`, `${ree - 180} kcal/day`, `${ree + 500} kcal/day`], 0, `Substitution into the stated equation gives approximately ${ree} kcal/day. This is an estimate that requires clinical interpretation.`, "calculation-foundations");
});

const girCases = [
  [180, 60, 24], [210, 70, 24], [240, 80, 24], [250, 75, 20], [300, 90, 24],
  [160, 55, 20], [280, 85, 18], [220, 65, 16], [190, 70, 12], [260, 100, 24],
].map(([grams, weight, hours], index) => {
  const gir = Math.round((grams * 1000 / weight / (hours * 60)) * 100) / 100;
  return q(`09${index}`, `A ${weight} kg adult receives ${grams} g of dextrose over ${hours} hours. What is the GIR?`, [`${gir} mg/kg/min`, `${Math.round((gir + 1) * 100) / 100} mg/kg/min`, `${Math.round((gir * 2) * 100) / 100} mg/kg/min`, `${Math.round((gir / 2) * 100) / 100} mg/kg/min`], 0, `${grams * 1000} mg divided by ${weight} kg and ${hours * 60} minutes equals ${gir} mg/kg/min.`, "dextrose-gir");
});

const compoundCases = [
  ["Dextrose 70 percent", 0.7, 280, "g", "stock-solutions-additives"],
  ["Dextrose 70 percent", 0.7, 350, "g", "stock-solutions-additives"],
  ["Amino acids 10 percent", 0.1, 90, "g", "stock-solutions-additives"],
  ["Amino acids 15 percent", 0.15, 105, "g", "stock-solutions-additives"],
  ["Lipid 20 percent", 0.2, 60, "g", "lipid-energy-ledger"],
  ["Lipid 20 percent", 0.2, 80, "g", "lipid-energy-ledger"],
  ["Potassium source labeled 2 mEq/mL", 2, 40, "mEq", "stock-solutions-additives"],
  ["Magnesium source labeled 4 mEq/mL", 4, 24, "mEq", "stock-solutions-additives"],
  ["Phosphate source labeled 3 mmol/mL", 3, 30, "mmol", "stock-solutions-additives"],
  ["Sodium source labeled 4 mEq/mL", 4, 60, "mEq", "stock-solutions-additives"],
].map(([label, concentration, amount, unit, lesson], index) => {
  const volume = Math.round((amount / concentration) * 100) / 100;
  return q(`10${index}`, `${label} is the stated source concentration (${concentration} ${unit}/mL). What volume provides ${amount} ${unit}?`, [`${volume} mL`, `${Math.round((volume + 7) * 100) / 100} mL`, `${Math.round((volume * 1.5) * 100) / 100} mL`, `${Math.round((volume * 2.25) * 100) / 100} mL`], 0, `${amount} ${unit} divided by the stated ${concentration} ${unit}/mL equals ${volume} mL. Product selection and all contributed ions still require verification.`, lesson);
});

const fluidRequirementCases = [
  {
    "id": "pncalc-fluid-001",
    "question": "Which weight range is explicitly covered by the book formula 1,500 mL + 20 mL/kg x (weight - 20 kg)?",
    "choices": [
      "Weight above 20 kg",
      "Every weight including newborns",
      "Weight below 10 kg only",
      "Exactly 20 kg only"
    ],
    "answer": 0,
    "rationale": "The source labels this formula for weight above 20 kg. It does not provide the lower-weight method in this section.",
    "reviewHref": "#fluid-requirements"
  },
  {
    "id": "pncalc-fluid-002",
    "question": "Unless an exercise specifies otherwise, what weight does the book use for most PN calculations?",
    "choices": [
      "Ideal weight selected without explanation",
      "Total body weight measured on the scale",
      "Adjusted weight automatically",
      "Weight in pounds substituted directly"
    ],
    "answer": 1,
    "rationale": "The book footnote specifies total body weight for most PN calculations unless the question specifies otherwise.",
    "reviewHref": "#fluid-requirements"
  },
  {
    "id": "pncalc-fluid-003",
    "question": "Using the book formula for weight above 20 kg, what daily fluid estimate results for 52 kg?",
    "choices": [
      "1,040 mL/day",
      "2,540 mL/day",
      "2,140 mL/day",
      "214 mL/day"
    ],
    "answer": 2,
    "rationale": "1,500 + 20(52 - 20) = 2,140 mL/day. The increment applies to the 32 kg above 20 kg.",
    "reviewHref": "#fluid-requirements"
  },
  {
    "id": "pncalc-fluid-004",
    "question": "An exercise specifies 88 lb and 2.2 lb/kg. What daily estimate results from the book formula for weight above 20 kg?",
    "choices": [
      "3,260 mL/day",
      "800 mL/day",
      "2,300 mL/day",
      "1,900 mL/day"
    ],
    "answer": 3,
    "rationale": "88/2.2 = 40 kg; 1,500 + 20(40 - 20) = 1,900 mL/day.",
    "reviewHref": "#fluid-requirements"
  },
  {
    "id": "pncalc-fluid-005",
    "question": "Using the book formula for weight above 20 kg without intermediate rounding, what daily estimate results for 36.5 kg?",
    "choices": [
      "1,830 mL/day",
      "1,730 mL/day",
      "2,230 mL/day",
      "730 mL/day"
    ],
    "answer": 0,
    "rationale": "1,500 + 20(36.5 - 20) = 1,830 mL/day.",
    "reviewHref": "#fluid-requirements"
  },
  {
    "id": "pncalc-fluid-006",
    "question": "Using the book formula for weight above 20 kg, what daily fluid estimate results for 75 kg?",
    "choices": [
      "1,500 mL/day",
      "2,600 mL/day",
      "3,000 mL/day",
      "1,100 mL/day"
    ],
    "answer": 1,
    "rationale": "The increment is 20 x 55 = 1,100 mL; add 1,500 mL to obtain 2,600 mL/day.",
    "reviewHref": "#fluid-requirements"
  },
  {
    "id": "pncalc-fluid-007",
    "question": "An exercise explicitly requests the alternative adult estimate of 30 to 40 mL/kg/day for 60 kg. What range results?",
    "choices": [
      "30 to 40 mL/day",
      "600 to 800 mL/day",
      "1,800 to 2,400 mL/day",
      "3,300 to 3,900 mL/day"
    ],
    "answer": 2,
    "rationale": "60 x 30 = 1,800 and 60 x 40 = 2,400 mL/day. Do not add this alternative to the other formula.",
    "reviewHref": "#fluid-requirements"
  },
  {
    "id": "pncalc-fluid-008",
    "question": "A stated plan uses 32 mL/kg/day for a 75 kg adult. What daily volume does that supplied plan yield?",
    "choices": [
      "2,600 mL/day",
      "32 mL/day",
      "750 mL/day",
      "2,400 mL/day"
    ],
    "answer": 3,
    "rationale": "75 kg x 32 mL/kg/day = 2,400 mL/day. This exercise supplies the selected method; it does not ask for the separate 1,500-plus-increment formula.",
    "reviewHref": "#fluid-requirements"
  },
  {
    "id": "pncalc-fluid-009",
    "question": "An exercise calculates a total daily allowance of 2,140 mL. Medicines supply 290 mL/day and there are no other fluids. What remaining allowance is available?",
    "choices": [
      "1,850 mL/day",
      "2,140 mL/day",
      "2,430 mL/day",
      "290 mL/day"
    ],
    "answer": 0,
    "rationale": "Subtract fluids already supplied: 2,140 - 290 = 1,850 mL/day.",
    "reviewHref": "#fluid-requirements"
  },
  {
    "id": "pncalc-fluid-010",
    "question": "A stated total allowance is 2,600 mL/day. Four medication piggybacks supply 125 mL each per day, with no other concurrent fluids. What remains for PN?",
    "choices": [
      "2,475 mL/day",
      "2,100 mL/day",
      "500 mL/day",
      "3,100 mL/day"
    ],
    "answer": 1,
    "rationale": "The four piggybacks supply 500 mL/day. 2,600 - 500 = 2,100 mL/day remains as an arithmetic allowance.",
    "reviewHref": "#fluid-requirements"
  },
  {
    "id": "pncalc-fluid-011",
    "question": "A daily fluid ledger lists PN 1,800 mL, medication fluids 350 mL and another stated infusion 200 mL. What is the total?",
    "choices": [
      "1,800 mL/day",
      "2,150 mL/day",
      "2,350 mL/day",
      "550 mL/day"
    ],
    "answer": 2,
    "rationale": "Count each stated source once: 1,800 + 350 + 200 = 2,350 mL/day.",
    "reviewHref": "#fluid-requirements"
  },
  {
    "id": "pncalc-fluid-012",
    "question": "Concurrent fluids already exceed a stated daily allowance before PN is added. What is the appropriate interpretation of a negative remaining allowance?",
    "choices": [
      "Prepare PN with negative volume",
      "Ignore the concurrent fluids",
      "Add another full allowance",
      "Review and revise the whole fluid plan"
    ],
    "answer": 3,
    "rationale": "A negative subtraction shows that the stated plan exceeds the allowance. It is not an instruction to compound negative PN volume.",
    "reviewHref": "#fluid-requirements"
  },
  {
    "id": "pncalc-fluid-013",
    "question": "An exercise specifies total body weight 82 kg and also lists ideal weight 60 kg, without instructing use of ideal weight. What estimate follows the book formula for weight above 20 kg?",
    "choices": [
      "2,740 mL/day",
      "2,300 mL/day",
      "1,640 mL/day",
      "3,140 mL/day"
    ],
    "answer": 0,
    "rationale": "Use total body weight unless otherwise specified: 1,500 + 20(82 - 20) = 2,740 mL/day. The supplied ideal weight is not the instructed basis.",
    "reviewHref": "#fluid-requirements"
  },
  {
    "id": "pncalc-fluid-014",
    "question": "For two weights both above 20 kg, what change in the book formula estimate follows a 5 kg increase?",
    "choices": [
      "5 mL/day",
      "100 mL/day",
      "1,500 mL/day",
      "400 mL/day"
    ],
    "answer": 1,
    "rationale": "The fixed term does not change. The added increment is 20 mL/kg/day x 5 kg = 100 mL/day. This describes the arithmetic, not an automatic clinical increase.",
    "reviewHref": "#fluid-requirements"
  },
  {
    "id": "pncalc-fluid-015",
    "question": "Which statement best follows the book discussion of fluid accumulation in heart failure or renal dysfunction?",
    "choices": [
      "Use the estimate unchanged for everyone",
      "Always reduce by exactly 50 percent",
      "Tailor and reduce the fluid plan; this section supplies no single fixed reduction",
      "Ignore medication fluid"
    ],
    "answer": 2,
    "rationale": "The source calls for tailoring and reduction with fluid accumulation. It does not prescribe a universal percentage reduction.",
    "reviewHref": "#fluid-requirements"
  },
  {
    "id": "pncalc-fluid-016",
    "question": "A stated daily allowance is 2.14 L. Medication fluids supply 290 mL/day, with no other concurrent fluids. What remaining allowance is expressed in liters per day?",
    "choices": [
      "2.43 L/day",
      "2.14 L/day",
      "0.29 L/day",
      "1.85 L/day"
    ],
    "answer": 3,
    "rationale": "Convert 290 mL to 0.29 L, then subtract: 2.14 - 0.29 = 1.85 L/day. Keep the volume units consistent.",
    "reviewHref": "#fluid-requirements"
  }
];

export const parenteralNutritionCalculationsQuestionBank = [...core, ...bmiCases, ...ibwCases, ...adjustedWeightCases, ...mifflinCases, ...girCases, ...compoundCases, ...fluidRequirementCases];

if (parenteralNutritionCalculationsQuestionBank.length !== 116) {
  throw new Error(`Parenteral nutrition calculations question bank must contain 116 questions, found ${parenteralNutritionCalculationsQuestionBank.length}.`);
}
