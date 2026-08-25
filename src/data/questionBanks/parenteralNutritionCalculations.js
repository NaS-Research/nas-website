const q = (id, question, choices, answer, rationale, lesson, extra = {}) => ({ id: `pncalc-${id}`, question, choices, answer, rationale, reviewHref: `#${lesson}`, ...extra });

const core = [
  q("001", "Which conversion is used to change pounds to kilograms?", ["Divide pounds by 2.2", "Multiply pounds by 2.2", "Divide pounds by 703", "Multiply pounds by 2.54"], 0, "One kilogram is approximately 2.2 pounds.", "calculation-foundations"),
  q("002", "Which adult BMI formula uses metric units?", ["kg divided by m squared", "kg divided by cm", "lb divided by inches", "kg multiplied by m squared"], 0, "Adult BMI equals weight in kilograms divided by height in meters squared.", "calculation-foundations"),
  q("003", "How should BMI be interpreted in nutrition assessment?", ["As a screening measure combined with other clinical information", "As a direct measurement of muscle mass", "As proof of adequate nutrition", "As a replacement for weight history"], 0, "BMI is a screening measure and does not directly measure body composition or nutrition reserve.", "calculation-foundations"),
  q("004", "Which condition can make a current measured weight misleading for nutrition calculations?", ["Marked edema", "Stable eyeglass prescription", "Remote appendectomy", "Normal room temperature"], 0, "Fluid accumulation can make measured weight overstate metabolically active tissue.", "calculation-foundations"),
  q("005", "What is the main limitation of a classroom ideal body weight equation?", ["It is a convention and not a direct physiologic measurement", "It cannot use height", "It always equals actual weight", "It measures intracellular water"], 0, "Ideal body weight formulas are estimation conventions and should be used only when appropriate for the task.", "calculation-foundations"),
  q("006", "What does the common adjusted body weight equation attempt to do?", ["Include a fraction of weight above ideal body weight", "Replace height with age", "Measure edema directly", "Calculate nitrogen balance"], 0, "Adjusted body weight commonly adds 40 percent of the difference between actual and ideal weight to ideal weight.", "calculation-foundations"),
  q("007", "Which method directly measures energy expenditure when technically valid and available?", ["Indirect calorimetry", "BMI", "Ideal body weight", "Serum albumin"], 0, "Indirect calorimetry measures gas exchange to estimate energy expenditure.", "calculation-foundations"),
  q("008", "What does the Mifflin St Jeor equation estimate?", ["Resting energy expenditure", "Glucose infusion rate", "Creatinine clearance", "Nitrogen balance"], 0, "The equation estimates resting energy expenditure from weight, height, age, and sex.", "calculation-foundations"),
  q("009", "Why should intermediate calculations retain extra precision?", ["Early rounding can compound error", "It changes kilograms into liters", "It removes the need for units", "It guarantees clinical accuracy"], 0, "Rounding at each step can produce a larger final error than rounding once at the end.", "calculation-foundations"),
  q("010", "Which documentation makes a weight-based PN calculation most reproducible?", ["The weight value, weight type, dose, units, and date", "The final number alone", "The patient's room number only", "A verbal estimate without units"], 0, "The complete calculation basis allows another clinician to reproduce and audit the result.", "calculation-foundations"),

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

  q("025", "What concentration is present in a 20 percent lipid emulsion?", ["0.2 g/mL", "2 g/mL", "0.02 g/mL", "20 g/mL"], 0, "Twenty grams per 100 mL equals 0.2 g/mL.", "lipid-energy-ledger"),
  q("026", "How should the calorie content of a lipid injectable emulsion be determined?", ["Use the exact product label", "Assume every product is identical", "Use amino acid calories", "Ignore emulsifier energy"], 0, "The final formulation and labeled energy value are product specific.", "lipid-energy-ledger"),
  q("027", "A product label states 2 kcal/mL. How many calories are in 250 mL?", ["500 kcal", "250 kcal", "750 kcal", "2,250 kcal"], 0, "Two kilocalories per milliliter multiplied by 250 mL equals 500 kcal.", "lipid-energy-ledger"),
  q("028", "What additional check is required after calculating the correct lipid volume?", ["Product-specific dose, rate, tolerance, and total energy", "Only the bag color", "Only patient height", "No further check"], 0, "Correct volume alone does not establish clinical safety.", "lipid-energy-ledger"),

  q("029", "What does 70 percent dextrose mean in weight per volume terms?", ["70 g per 100 mL", "70 mg per 100 mL", "7 g per 1,000 mL", "0.07 g per 100 mL"], 0, "A 70 percent weight per volume solution contains 70 g in 100 mL.", "stock-solutions-additives"),
  q("030", "What concentration is present in 10 percent amino acids?", ["0.1 g/mL", "1 g/mL", "10 g/mL", "0.01 g/mL"], 0, "Ten grams per 100 mL equals 0.1 g/mL.", "stock-solutions-additives"),
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
  return q(`10${index}`, `${label} is the selected source. What volume provides ${amount} ${unit}?`, [`${volume} mL`, `${Math.round((volume + 7) * 100) / 100} mL`, `${Math.round((volume * 1.5) * 100) / 100} mL`, `${Math.round((volume * 2.25) * 100) / 100} mL`], 0, `${amount} ${unit} divided by ${concentration} ${unit}/mL equals ${volume} mL. Product selection and all contributed ions still require verification.`, lesson);
});

export const parenteralNutritionCalculationsQuestionBank = [...core, ...bmiCases, ...ibwCases, ...adjustedWeightCases, ...mifflinCases, ...girCases, ...compoundCases];

if (parenteralNutritionCalculationsQuestionBank.length !== 100) {
  throw new Error(`Parenteral nutrition calculations question bank must contain 100 questions, found ${parenteralNutritionCalculationsQuestionBank.length}.`);
}
