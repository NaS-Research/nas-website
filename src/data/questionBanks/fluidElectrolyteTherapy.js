const q = (id, question, choices, answer, rationale, lesson, extra = {}) => ({
  id: `fluid-electrolyte-${id}`,
  question,
  choices,
  answer,
  rationale,
  reviewHref: `#${lesson}`,
  ...extra,
});

const coreQuestions = [
  q("001", "Which statement best distinguishes serum sodium from total body sodium?", ["Serum sodium is a concentration governed strongly by water balance", "Serum sodium directly equals exchangeable body sodium", "Serum sodium measures intravascular volume", "Serum sodium is independent of glucose"], 0, "Serum sodium is a concentration and must be interpreted with water balance, tonicity, and volume status.", "fluid-physiology-assessment"),
  q("002", "Which solute contributes to calculated osmolality but is excluded from effective tonicity?", ["Urea nitrogen", "Sodium", "Glucose", "Mannitol"], 0, "Urea crosses cell membranes relatively freely and contributes little sustained transcellular water shift.", "fluid-physiology-assessment"),
  q("003", "Why can a patient with marked edema still have reduced effective circulating volume?", ["Fluid can be retained outside the vascular space while perfusion remains inadequate", "Edema proves plasma volume is high", "Interstitial water cannot exchange with plasma", "Edema eliminates neurohormonal activation"], 0, "Total body fluid excess does not guarantee adequate effective arterial circulation.", "fluid-physiology-assessment"),
  q("004", "Which measurement is most useful for detecting a new water diuresis during correction of hyponatremia?", ["Urine output trend", "Serum albumin", "LDL cholesterol", "Platelet count"], 0, "An abrupt rise in dilute urine output can precede unexpectedly rapid sodium correction.", "fluid-physiology-assessment"),
  q("005", "A measured osmolality is substantially greater than the calculated osmolality. What does the difference suggest?", ["An osmolar gap that may reflect an unmeasured osmole", "Definitive SIADH", "Normal effective tonicity", "A direct measure of dehydration"], 0, "The osmolar gap prompts assessment for unmeasured osmoles and analytic context.", "fluid-physiology-assessment"),
  q("006", "Why is daily weight often more informative than a single intake and output total?", ["It integrates net changes that may be missed by incomplete fluid records", "It measures serum tonicity directly", "It identifies every source of edema", "It replaces physical examination"], 0, "Fluid records are frequently incomplete, while a comparable daily weight can reveal the net trajectory.", "fluid-physiology-assessment"),
  q("007", "Which finding most directly supports impaired perfusion rather than isolated interstitial edema?", ["Delayed capillary refill with cool extremities", "Bilateral ankle swelling alone", "A low serum albumin alone", "Stable body weight"], 0, "Peripheral perfusion findings help identify circulatory compromise, although the full clinical context remains necessary.", "fluid-physiology-assessment"),
  q("008", "Hyperglycemia lowers measured sodium primarily through which mechanism?", ["Water shifts from cells into extracellular fluid", "Sodium enters cells with glucose", "Urea becomes an effective osmole", "The kidney immediately loses all sodium"], 0, "Extracellular glucose raises tonicity and draws water out of cells, diluting extracellular sodium.", "fluid-physiology-assessment"),
  q("009", "Which design best tests whether a dynamic fluid protocol improves care across hospital wards?", ["A pragmatic cluster randomized trial with patient-centered and safety outcomes", "A case report of one successful bolus", "A cross-sectional survey of clinician preference", "An in vitro crystalloid comparison alone"], 0, "A pragmatic cluster trial can evaluate a workflow while limiting contamination between clinicians.", "fluid-physiology-assessment"),
  q("010", "What is the strongest reason to document the intended response before administering IV fluid?", ["It creates a measurable stopping or revision point", "It guarantees the fluid is harmless", "It eliminates the need for reassessment", "It converts maintenance into resuscitation"], 0, "A fluid order is safer when its clinical goal and stopping rule are explicit.", "fluid-physiology-assessment"),

  q("011", "Which of the Five Rs describes fluid given to match abnormal gastrointestinal drainage?", ["Replacement", "Resuscitation", "Routine maintenance", "Redistribution"], 0, "Replacement addresses ongoing abnormal losses and should reflect their volume and composition.", "iv-fluid-selection"),
  q("012", "Why is dextrose 5 percent in water unsuitable as a primary resuscitation fluid?", ["After glucose metabolism it behaves mainly as electrolyte-free water", "It remains entirely intravascular", "It contains excessive chloride", "It cannot deliver any water"], 0, "Dextrose metabolism leaves water that distributes widely and provides poor durable intravascular expansion.", "iv-fluid-selection"),
  q("013", "Which prescription best follows the NICE approach to adult IV fluid resuscitation?", ["A crystalloid containing sodium 130 to 154 mmol/L with rapid reassessment", "Dextrose 5 percent in water without reassessment", "Routine tetrastarch for every patient", "A fixed daily volume regardless of response"], 0, "NICE recommends a sodium-containing crystalloid bolus with prompt clinical reassessment.", "iv-fluid-selection"),
  q("014", "What is the main physiologic concern with large volumes of 0.9 percent sodium chloride?", ["A high chloride load can contribute to hyperchloremic acidosis", "It always causes severe hypernatremia", "It contains no sodium", "It acts as free water"], 0, "The chloride concentration is higher than plasma and can produce hyperchloremic metabolic acidosis in some settings.", "iv-fluid-selection"),
  q("015", "Which statement best represents the current balanced crystalloid evidence?", ["Results differ across populations, so fluid choice remains context dependent", "Balanced fluids improve every outcome in every patient", "Saline is superior in every clinical setting", "Solution composition has no physiologic effect"], 0, "Large trials have produced mixed results, supporting contextual rather than absolute claims.", "iv-fluid-selection"),
  q("016", "A stable adult receives nutrition and substantial water through a feeding tube. How should this affect IV maintenance?", ["Enteral intake must be included and IV fluid reduced or stopped as appropriate", "Enteral water should be ignored", "IV maintenance must always remain at 30 mL/kg/day", "The patient requires immediate resuscitation"], 0, "All sources of water and electrolytes must be included to prevent overprescribing.", "iv-fluid-selection"),
  q("017", "Which patient is most likely to need an initial adult maintenance estimate below 25 to 30 mL/kg/day?", ["An older adult with heart failure and renal impairment", "A healthy adult with high-output diarrhea", "A patient in hemorrhagic shock", "An athlete drinking normally"], 0, "Older, frail, cardiac, renal, and refeeding-risk patients often need lower initial maintenance volumes.", "iv-fluid-selection"),
  q("018", "Why should hydroxyethyl starch not be selected for routine fluid resuscitation?", ["Contemporary guidance advises against it because of safety concerns", "It is identical to oral water", "It contains too little glucose", "It is the preferred maintenance solution"], 0, "NICE advises against tetrastarch, and starch solutions have important kidney and safety concerns.", "iv-fluid-selection"),
  q("019", "Which element is missing from the order 'normal saline at 100 mL/hour'?", ["An indication, duration, monitoring plan, and stopping rule", "A brand logo", "The patient's preferred flavor", "A requirement to continue indefinitely"], 0, "A rate alone is not a complete fluid prescription.", "iv-fluid-selection"),
  q("020", "What is the best endpoint after a resuscitation fluid challenge?", ["A predefined change in perfusion with assessment for harm", "Completion of the bag regardless of response", "A rise in body weight", "Development of edema"], 0, "The response and adverse effects determine whether additional fluid is justified.", "iv-fluid-selection"),

  q("021", "What is the first laboratory classification step for hyponatremia?", ["Determine whether plasma is hypotonic, isotonic, or hypertonic", "Assume SIADH", "Classify by age", "Give isotonic saline to every patient"], 0, "Tonicity distinguishes true hypotonic hyponatremia from important mimics and translocational states.", "sodium-water-disorders"),
  q("022", "Which pattern is most compatible with SIADH after adrenal and thyroid causes are excluded?", ["Hypotonic hyponatremia with inappropriately concentrated urine and clinical euvolemia", "Hypertonic hypernatremia with dilute urine", "Hypotonic hyponatremia with clear gastrointestinal volume loss", "Isotonic sodium with polyuria"], 0, "SIADH produces impaired water excretion despite hypotonicity, usually in a clinically euvolemic patient.", "sodium-water-disorders"),
  q("023", "What is the immediate treatment objective in severe symptomatic hypotonic hyponatremia?", ["Achieve a small controlled sodium rise that relieves cerebral edema", "Normalize sodium in one hour", "Cause maximal water diuresis", "Delay therapy until every cause is proven"], 0, "The immediate goal is symptom reversal with a limited rise, not rapid normalization.", "sodium-water-disorders"),
  q("024", "After an initial 5 mmol/L rise improves severe hyponatremic symptoms, which limit aligns with the cited European guidance?", ["No more than 10 mmol/L in the first 24 hours and 8 mmol/L per 24 hours thereafter", "At least 20 mmol/L every 24 hours", "No correction limit is needed", "Exactly 1 mmol/L every hour for two days"], 0, "The guideline limits cumulative correction to reduce osmotic demyelination risk.", "sodium-water-disorders"),
  q("025", "Which factor increases concern for osmotic demyelination during sodium correction?", ["Very low sodium with malnutrition, alcohol use disorder, liver disease, or hypokalemia", "Mild isolated hyperlipidemia", "A normal neurologic examination only", "High urine sodium by itself"], 0, "Several chronic and metabolic vulnerabilities increase risk and support a more conservative correction plan.", "sodium-water-disorders"),
  q("026", "Why can sodium rise unexpectedly after isotonic saline treats hypovolemic hyponatremia?", ["Restored volume suppresses antidiuretic hormone and triggers water diuresis", "Saline directly destroys antidiuretic hormone", "All administered chloride remains intracellular", "Glucose becomes an effective osmole"], 0, "Removing the hypovolemic stimulus can abruptly restore water excretion.", "sodium-water-disorders"),
  q("027", "Which statement about tolvaptan is most accurate?", ["It must be initiated or reinitiated in hospital and is not a routine emergency substitute for hypertonic saline", "It is indicated for hypovolemic hyponatremia", "It should be combined automatically with hypertonic saline", "It has no liver-related limitation"], 0, "The label requires hospital initiation and includes important indication, correction, interaction, and liver precautions.", "sodium-water-disorders"),
  q("028", "A patient with shock and hypernatremia has poor perfusion. Which priority is most appropriate?", ["Restore circulation first, then address the free-water deficit with close monitoring", "Give only oral free water despite shock", "Lower sodium immediately to normal", "Withhold all fluid"], 0, "Circulatory stabilization takes priority, followed by controlled water replacement.", "sodium-water-disorders"),
  q("029", "Which finding supports central diabetes insipidus?", ["Inappropriately dilute urine with hypernatremia that responds to desmopressin", "Concentrated urine during hypernatremia", "Hyponatremia after excess desmopressin", "Low urine output with edema"], 0, "Central diabetes insipidus reflects deficient antidiuretic hormone and typically responds to desmopressin.", "sodium-water-disorders"),
  q("030", "Which study design would most directly compare two sodium correction protocols while protecting high-risk participants?", ["A monitored randomized trial with prespecified rescue rules and neurologic safety outcomes", "An uncontrolled retrospective narrative", "A survey of preferred formulas", "A laboratory study without clinical outcomes"], 0, "Protocol comparison requires prospective safeguards, rescue criteria, and clinically meaningful outcomes.", "sodium-water-disorders"),

  q("031", "Which treatment protects the myocardium in hyperkalemia without changing serum potassium?", ["IV calcium", "Insulin with glucose", "Albuterol", "Hemodialysis"], 0, "Calcium antagonizes membrane toxicity but does not shift or remove potassium.", "potassium-disorders"),
  q("032", "Why is glucose monitoring required after insulin treatment for hyperkalemia?", ["Hypoglycemia can occur after the potassium-shifting effect is initiated", "Insulin always causes hypernatremia", "Glucose predicts ECG normalization", "Monitoring is needed only in diabetes"], 0, "Insulin can produce delayed hypoglycemia even when given with dextrose.", "potassium-disorders"),
  q("033", "Which intervention lowers total body potassium most reliably in severe hyperkalemia with kidney failure?", ["Hemodialysis", "IV calcium", "Insulin alone", "Nebulized albuterol alone"], 0, "Dialysis removes potassium from the body, while calcium protects and shifting therapies are temporary.", "potassium-disorders"),
  q("034", "Why should patiromer or sodium zirconium cyclosilicate not be the only treatment for life-threatening hyperkalemia?", ["Their onset is delayed relative to the urgency of the emergency", "They always raise potassium first", "They are IV calcium products", "They cannot lower potassium at all"], 0, "Both labels caution against emergency monotherapy because delayed onset cannot address immediate arrhythmic risk.", "potassium-disorders"),
  q("035", "Which acid-base context makes sodium bicarbonate more physiologically plausible as an adjunct in hyperkalemia?", ["Clinically important metabolic acidemia", "Respiratory alkalosis", "Normal acid-base status in every patient", "Metabolic alkalosis"], 0, "Bicarbonate is not a universal shifting agent and is most rational when acidemia is present.", "potassium-disorders"),
  q("036", "A patient has persistent hypokalemia despite replacement. What should be assessed next?", ["Magnesium concentration and ongoing renal or gastrointestinal losses", "Only serum sodium", "Whether the tablet is a preferred color", "Whether the patient has edema alone"], 0, "Magnesium depletion and ongoing losses can make potassium replacement ineffective.", "potassium-disorders"),
  q("037", "Which potassium administration practice is unsafe?", ["Giving concentrated potassium chloride by IV push", "Using a controlled infusion device", "Confirming kidney function", "Repeating the serum concentration"], 0, "Concentrated potassium chloride must be diluted and controlled. IV push can be fatal.", "potassium-disorders"),
  q("038", "What is the central limitation of estimating that 10 mEq of potassium raises serum potassium by 0.1 mEq/L?", ["The response varies with deficit, shifts, losses, kidney function, and ongoing treatment", "The estimate is exact in every adult", "Serum potassium never changes after replacement", "Only sodium affects the response"], 0, "The relationship is too variable to serve as an exact patient-specific dosing rule.", "potassium-disorders"),
  q("039", "Which drug combination creates the greatest immediate concern for potassium accumulation?", ["An ACE inhibitor plus a potassium-sparing diuretic in kidney impairment", "A proton pump inhibitor plus an antacid", "Acetaminophen plus a topical moisturizer", "A statin plus saline nasal spray"], 0, "RAAS inhibition, potassium retention, and reduced renal elimination can combine to cause hyperkalemia.", "potassium-disorders"),
  q("040", "What best distinguishes redistribution from total body potassium depletion?", ["Redistribution changes serum potassium without necessarily changing total stores", "Redistribution always indicates diarrhea", "Total depletion causes hyperkalemia only", "The two terms are identical"], 0, "Insulin, beta agonists, pH, and cell injury can change distribution independently of total body stores.", "potassium-disorders"),

  q("041", "Which electrolyte deficiency can contribute to both refractory hypokalemia and torsades risk?", ["Magnesium", "Chloride", "Bicarbonate", "Sodium alone"], 0, "Magnesium deficiency promotes potassium wasting and can increase ventricular arrhythmia risk.", "magnesium-disorders"),
  q("042", "Why does advanced kidney impairment increase magnesium replacement risk?", ["Magnesium elimination is primarily renal", "Magnesium is metabolized only by the liver", "Kidney disease prevents all absorption", "Magnesium cannot affect blood pressure"], 0, "Reduced renal elimination can cause accumulation, hypotension, neuromuscular depression, and conduction toxicity.", "magnesium-disorders"),
  q("043", "Which finding is most concerning for clinically important hypermagnesemia?", ["Loss of deep tendon reflexes with hypotension", "Mild thirst", "Isolated elevated LDL", "Increased bowel sounds"], 0, "Neuromuscular and cardiovascular depression are characteristic of significant magnesium toxicity.", "magnesium-disorders"),
  q("044", "What is a common limitation of oral magnesium replacement?", ["Dose-limiting diarrhea", "Immediate ventricular standstill in every patient", "Complete lack of absorption", "Severe hypernatremia"], 0, "Oral magnesium salts can cause gastrointestinal intolerance, especially diarrhea.", "magnesium-disorders"),
  q("045", "Which therapy can antagonize serious cardiovascular and neuromuscular effects of magnesium toxicity?", ["IV calcium", "Tolvaptan", "Patiromer", "Desmopressin"], 0, "IV calcium can provide temporary physiologic antagonism while magnesium sources are stopped and elimination is addressed.", "magnesium-disorders"),
  q("046", "Which medication exposure is a recognized contributor to magnesium wasting?", ["Cisplatin", "Topical petrolatum", "Inhaled saline", "Oral glucose alone"], 0, "Cisplatin can cause renal magnesium wasting.", "magnesium-disorders"),
  q("047", "Why should a laboratory magnesium value be interpreted with units and the local reference range?", ["Reported units and ranges differ, and unit confusion can change clinical interpretation", "All laboratories use the same units", "Magnesium values are qualitative", "Reference ranges are irrelevant"], 0, "Older sources can mix units, so explicit unit checking is essential.", "magnesium-disorders"),
  q("048", "Which approach is most appropriate for stable mild asymptomatic hypomagnesemia with intact gastrointestinal function?", ["Consider oral replacement while addressing the cause and monitoring response", "Administer an uncontrolled rapid IV bolus", "Start dialysis", "Give no follow-up"], 0, "Oral replacement is often appropriate in stable mild deficiency if tolerated.", "magnesium-disorders"),
  q("049", "What is the most important cofactor when choosing an IV magnesium dose and rate?", ["Kidney function and clinical urgency", "Hair color", "Serum albumin alone", "Tablet imprint"], 0, "Renal elimination and symptom severity strongly determine safe exposure and monitoring.", "magnesium-disorders"),
  q("050", "A patient with severe magnesium toxicity and kidney failure does not improve after stopping magnesium. What removal strategy is most definitive?", ["Dialysis", "Fluid restriction alone", "Oral calcium carbonate", "A thiazide alone"], 0, "Dialysis can remove magnesium when renal clearance is inadequate and toxicity is severe.", "magnesium-disorders"),

  q("051", "What makes a fluid calculation clinically defensible?", ["The formula, units, assumptions, monitoring plan, and adjustment criteria are explicit", "The answer contains many decimal places", "The largest possible volume is chosen", "The same formula is used for every patient"], 0, "Transparent assumptions and a feedback plan connect arithmetic to safe care.", "calculations-monitoring"),
  q("052", "Which factor most directly invalidates using actual body weight without adjustment for routine maintenance in severe obesity?", ["Adipose tissue has lower water content and a simple estimate may overprescribe", "Obesity always causes shock", "Actual weight cannot be measured", "All patients with obesity require fluid restriction"], 0, "NICE advises considering ideal body weight and clinical context in obesity.", "calculations-monitoring"),
  q("053", "A fluid order is mathematically correct but omits ongoing ostomy losses. What kind of error is this?", ["A model specification error caused by missing a major input", "A rounding error only", "A randomization error", "A unit conversion success"], 0, "The equation answered the wrong clinical model because a major source of loss was excluded.", "calculations-monitoring"),
  q("054", "When should a resuscitation response be reassessed?", ["Immediately after the intervention and repeatedly according to instability", "Only at discharge", "After a fixed 24 hours in every patient", "Never if the prescribed volume was given"], 0, "Resuscitation requires rapid feedback to detect benefit, nonresponse, or overload.", "calculations-monitoring"),
  q("055", "Which outcome best measures whether a maintenance-fluid protocol reduces harm?", ["Patient-centered fluid complications plus electrolyte and kidney safety outcomes", "The number of bags ordered", "Clinician satisfaction alone", "The fluid label color"], 0, "Implementation volume alone does not establish safer patient outcomes.", "calculations-monitoring"),
  q("056", "Which approach best handles uncertainty in a weight-based fluid estimate?", ["Start with a justified range, choose a patient-specific prescription, and reassess", "Select the upper bound automatically", "Report an exact value without assumptions", "Avoid measuring response"], 0, "A range and explicit reassessment acknowledge biologic and clinical uncertainty.", "calculations-monitoring"),
  q("057", "Why should potassium concentration and infusion rate be checked independently?", ["A safe total dose can still be delivered at an unsafe concentration or rate", "They are always mathematically identical", "Only total volume affects toxicity", "Infusion rate matters only for glucose"], 0, "Dose, concentration, access, and rate create separate safety constraints.", "calculations-monitoring"),
  q("058", "Which result should prompt immediate revision of a sodium correction plan?", ["The sodium trajectory is exceeding the prespecified limit", "The calculation used kilograms", "The patient has a documented baseline", "Urine output is being measured"], 0, "Unexpectedly rapid correction requires prompt action to prevent neurologic harm.", "calculations-monitoring"),
  q("059", "What is the strongest reason to link each test question to a lesson section?", ["It turns an incorrect response into targeted retrieval and remediation", "It guarantees a perfect score", "It removes the need for explanations", "It makes every question easier"], 0, "Targeted remediation strengthens learning and makes assessment feedback actionable.", "calculations-monitoring"),
  q("060", "Which statement best reflects expert fluid stewardship?", ["Use the least invasive route and smallest justified exposure while measuring effect", "Continue IV therapy after oral intake is adequate", "Treat every abnormal value with a bolus", "Use one solution for every indication"], 0, "Fluid is a medicine and should have an indication, dose, duration, monitoring plan, and stop point.", "calculations-monitoring"),
];

const osmolalityCases = [
  [140, 90, 14], [132, 540, 28], [128, 108, 11], [150, 126, 35], [136, 360, 21],
  [145, 72, 42], [125, 900, 18], [138, 180, 56], [142, 234, 25], [130, 450, 7],
].map(([sodium, glucose, bun], index) => {
  const result = Math.round((2 * sodium + glucose / 18 + bun / 2.8) * 10) / 10;
  return q(`06${index + 1}`, `Using 2(Na) + glucose/18 + BUN/2.8, what is the estimated serum osmolality for Na ${sodium} mmol/L, glucose ${glucose} mg/dL, and BUN ${bun} mg/dL?`, [`${result} mOsm/kg`, `${Math.round(result - 20)} mOsm/kg`, `${Math.round(result + 35)} mOsm/kg`, `${Math.round(result / 2)} mOsm/kg`], 0, `Substitution gives approximately ${result} mOsm/kg. The estimate should be compared with measured osmolality and the clinical context.`, "fluid-physiology-assessment");
});

const maintenanceCases = [
  [52, 25, false], [64, 30, false], [72, 25, false], [80, 30, false], [90, 25, false],
  [48, 20, true], [60, 22, true], [70, 20, true], [76, 25, true], [84, 20, true],
].map(([weight, rate, highRisk], index) => {
  const result = weight * rate;
  const context = highRisk ? "with frailty, cardiac disease, or renal risk" : "who is clinically stable";
  return q(`07${index + 1}`, `Using ${rate} mL/kg/day, what is the initial water estimate for a ${weight} kg adult ${context}?`, [`${result.toLocaleString()} mL/day`, `${(weight * 10).toLocaleString()} mL/day`, `${(result + 750).toLocaleString()} mL/day`, `${Math.round(result / 24).toLocaleString()} mL/day`], 0, `${weight} kg multiplied by ${rate} mL/kg/day equals ${result.toLocaleString()} mL/day before adjustment for all other intake, losses, and clinical factors.`, "calculations-monitoring");
});

const fluidDecisionCases = [
  ["A stable fasting patient cannot drink for 24 hours and has no abnormal losses", "Routine maintenance", "iv-fluid-selection"],
  ["A patient has hypotension, cool extremities, and a history suggesting acute volume loss", "Resuscitation with rapid reassessment", "iv-fluid-selection"],
  ["A nasogastric tube is producing a measured high output", "Replacement based on the loss", "iv-fluid-selection"],
  ["A patient with cirrhosis has ascites, edema, and suspected reduced effective circulation", "Complex redistribution assessment", "iv-fluid-selection"],
  ["A patient is drinking and eating adequately after surgery", "Stop unnecessary IV maintenance", "iv-fluid-selection"],
  ["A patient with traumatic brain injury needs extracellular volume support", "Select a solution with attention to tonicity and neurocritical protocol", "iv-fluid-selection"],
  ["A frail older adult with heart failure needs temporary maintenance", "Use a lower initial weight-based estimate and reassess", "iv-fluid-selection"],
  ["A patient develops dyspnea and crackles during an infusion", "Stop and reassess for fluid-related harm", "iv-fluid-selection"],
  ["A patient with severe symptomatic hypotonic hyponatremia has a seizure", "Urgent monitored hypertonic saline strategy", "sodium-water-disorders"],
  ["A shocked patient with hypernatremia has inadequate perfusion", "Restore circulation before controlled free-water correction", "sodium-water-disorders"],
].map(([caseText, correct, lesson], index) => q(`08${index + 1}`, `${caseText}. Which action best matches the clinical purpose?`, [correct, "Give dextrose 5 percent in water as rapid resuscitation", "Use a fixed indefinite infusion without monitoring", "Treat the laboratory value without assessing the patient"], 0, `The scenario calls for: ${correct.toLowerCase()}.`, lesson));

const electrolyteDecisionCases = [
  ["Potassium 6.9 mmol/L with a widened QRS complex", "Give IV calcium while initiating shifting and removal therapies", "potassium-disorders"],
  ["Potassium 2.7 mmol/L that remains low after repeated replacement", "Assess magnesium and ongoing losses", "potassium-disorders"],
  ["Severe hyperkalemia with anuria despite temporary shifting therapy", "Arrange definitive extracorporeal removal", "potassium-disorders"],
  ["Potassium 6.4 mmol/L with metabolic acidemia", "Use the full emergency sequence and consider bicarbonate only as an acidemia-directed adjunct", "potassium-disorders"],
  ["Magnesium deficiency with torsades de pointes", "Use urgent IV magnesium with appropriate monitoring", "magnesium-disorders"],
  ["Magnesium 4.8 mg/dL with hypotension and absent reflexes in kidney failure", "Stop magnesium, give IV calcium for toxicity, and evaluate dialysis", "magnesium-disorders"],
  ["Chronic hypotonic hyponatremia rises 9 mmol/L in 12 hours", "Stop and urgently revise the plan to prevent further overcorrection", "sodium-water-disorders"],
  ["Hypernatremia with polyuria and urine that remains very dilute", "Evaluate a water diuresis such as diabetes insipidus", "sodium-water-disorders"],
  ["Euvolemic hypotonic hyponatremia begins after a new implicated medicine", "Remove the cause when possible and evaluate an SIADH pattern", "sodium-water-disorders"],
  ["A clinician proposes tolvaptan for hypovolemic hyponatremia", "Reject the plan because hypovolemic hyponatremia is a labeled contraindication", "sodium-water-disorders"],
].map(([caseText, correct, lesson], index) => q(`09${index + 1}`, `${caseText}. What is the best next clinical action?`, [correct, "Ignore the trajectory and repeat testing tomorrow", "Use an oral potassium binder as the only emergency intervention", "Normalize every value immediately without a correction limit"], 0, correct, lesson));

export const fluidElectrolyteTherapyQuestionBank = [
  ...coreQuestions,
  ...osmolalityCases,
  ...maintenanceCases,
  ...fluidDecisionCases,
  ...electrolyteDecisionCases,
];

if (fluidElectrolyteTherapyQuestionBank.length !== 100) {
  throw new Error(`Fluid and electrolyte question bank must contain 100 questions, found ${fluidElectrolyteTherapyQuestionBank.length}.`);
}

// Reconcile enteral intake and gastric-loss fluid assessments.
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-016"), {
  "choices": [
    "Enteral intake must be included and IV fluid reduced or stopped as appropriate",
    "Continue the full IV maintenance volume because tube water counts only toward nutrition",
    "Stop every IV fluid as soon as any enteral feeding begins",
    "Replace the formula volume with additional IV water without counting water already delivered"
  ],
  "rationale": "Count the fluid and electrolytes actually received from tube feeds, water flushes, oral intake, medicines and other IV sources. NICE advises IV fluid only when oral or enteral routes cannot meet the need, so reduce or stop unnecessary IV maintenance after reassessment. Starting a feed does not prove that hydration is sufficient, and adding a full IV allowance without counting enteral water can overprescribe fluid. The stem does not select a fixed daily volume."
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-083"), {
  "choices": [
    "Replacement based on the loss",
    "Treat measured gastric drainage as already covered by the ordinary maintenance allowance",
    "Replace all drainage with feeding formula without assessing fluid and electrolyte needs",
    "Continue the same daily IV order as drainage changes, without reassessing intake or fluid balance"
  ],
  "rationale": "Measured gastric drainage is an abnormal ongoing loss. Review its quantity and composition, the patient’s fluid status, laboratory trends and all intake, then adjust replacement alongside any maintenance requirement. Ordinary maintenance does not automatically cover this loss; formula is not an interchangeable loss-replacement prescription, and a changing output requires reassessment. The stem does not establish a resuscitation bolus or an exact replacement solution, rate or volume."
});

// Individually reviewed fluid physiology cases; retain existing question IDs.
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-001"), {
  "id": "fluid-electrolyte-001",
  "question": "Which statement best distinguishes serum sodium from total body sodium?",
  "choices": [
    "Serum sodium is a concentration governed strongly by water balance",
    "Serum sodium directly equals exchangeable body sodium",
    "Serum sodium measures intravascular volume",
    "Serum sodium is independent of glucose"
  ],
  "answer": 0,
  "rationale": "Serum sodium describes concentration relative to water, rather than the amount of sodium in the body. Interpret it with tonicity and the clinical volume assessment. Hyperglycemia can change measured sodium by moving water into extracellular fluid.",
  "reviewHref": "#fluid-physiology-assessment"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-002"), {
  "id": "fluid-electrolyte-002",
  "question": "Which solute contributes to calculated osmolality but is excluded from effective tonicity?",
  "choices": [
    "Urea nitrogen",
    "Sodium",
    "Glucose",
    "Mannitol"
  ],
  "answer": 0,
  "rationale": "Urea contributes to total osmolality, but readily crosses cell membranes and is excluded from the simplified effective-tonicity estimate. Sodium salts, glucose and mannitol can act as effective extracellular osmoles; BUN is the reported nitrogen component of urea.",
  "reviewHref": "#fluid-physiology-assessment"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-003"), {
  "id": "fluid-electrolyte-003",
  "question": "Why can a patient with marked edema still have reduced effective circulating volume?",
  "choices": [
    "Fluid can be retained outside the vascular space while perfusion remains inadequate",
    "Edema proves plasma volume is high",
    "Interstitial water cannot exchange with plasma",
    "Edema eliminates neurohormonal activation"
  ],
  "answer": 0,
  "rationale": "Interstitial fluid accumulation does not guarantee adequate effective circulation. Fluid compartments exchange water, and disorders with reduced effective circulation can activate water-retaining mechanisms despite edema. Assess perfusion and congestion together.",
  "reviewHref": "#fluid-physiology-assessment"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-004"), {
  "id": "fluid-electrolyte-004",
  "question": "Which measurement is most useful for detecting a new water diuresis during correction of hyponatremia?",
  "choices": [
    "Urine output trend",
    "Body weight measured only at discharge",
    "A repeat serum sodium without recording urine output",
    "The amount of saline already prescribed"
  ],
  "answer": 0,
  "rationale": "A sudden increase in dilute urine output can signal rising free-water clearance and precede unexpectedly rapid sodium correction. Track output with serial sodium measurements; sodium must still be checked, but it does not directly record the emerging diuresis.",
  "reviewHref": "#fluid-physiology-assessment"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-005"), {
  "id": "fluid-electrolyte-005",
  "question": "A measured osmolality is substantially greater than the calculated osmolality. What does the difference suggest?",
  "choices": [
    "An osmolar gap that may reflect an unmeasured osmole",
    "Definitive SIADH",
    "Normal effective tonicity",
    "A direct measure of dehydration"
  ],
  "answer": 0,
  "rationale": "Measured minus calculated osmolality is the osmolal gap. An unexpectedly positive gap may reflect an osmole omitted from the formula or analytic context. Check the same-sample measurements, units and exposures; the gap alone does not diagnose SIADH, prove normal tonicity or quantify volume depletion.",
  "reviewHref": "#fluid-physiology-assessment"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-006"), {
  "id": "fluid-electrolyte-006",
  "question": "The intake/output chart suggests neutral balance, but comparable weights rise and examination shows new edema. What is the best interpretation?",
  "choices": [
    "Reconcile the chart with the weight and examination before revising the fluid plan",
    "The chart rules out fluid accumulation despite the examination",
    "The weight trend alone proves hypotonic hyponatremia",
    "The weights identify the cause of the edema without further assessment"
  ],
  "answer": 0,
  "rationale": "Discordant findings require reconciliation. Weight is one part of the fluid assessment, alongside intake/output, examination, medicines and laboratory trends. Neither a chart nor a weight trend establishes tonicity or the cause by itself; a daily-weight schedule is not required for every patient.",
  "reviewHref": "#fluid-physiology-assessment"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-007"), {
  "id": "fluid-electrolyte-007",
  "question": "Which finding most directly supports impaired perfusion rather than isolated interstitial edema?",
  "choices": [
    "Delayed capillary refill with cool extremities",
    "Bilateral ankle swelling alone",
    "A low serum albumin alone",
    "Stable body weight"
  ],
  "answer": 0,
  "rationale": "Delayed capillary refill and cool extremities are clinical indicators of possible impaired circulation. Ankle edema and low albumin do not by themselves establish perfusion, and stable weight does not exclude an acute problem. Use the full assessment before selecting therapy.",
  "reviewHref": "#fluid-physiology-assessment"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-008"), {
  "id": "fluid-electrolyte-008",
  "question": "Hyperglycemia lowers measured sodium primarily through which mechanism?",
  "choices": [
    "Water shifts from cells into extracellular fluid",
    "Sodium enters cells with glucose",
    "Urea becomes an effective osmole",
    "The kidney immediately loses all sodium"
  ],
  "answer": 0,
  "rationale": "In hyperglycemia, extracellular glucose can act as an effective osmole and draw water from cells into extracellular fluid, lowering measured sodium by dilution. This is not simply sodium moving into cells, conversion of urea into an effective osmole or immediate loss of all renal sodium.",
  "reviewHref": "#fluid-physiology-assessment"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-009"), {
  "id": "fluid-electrolyte-009",
  "question": "A patient has ankle edema, cool extremities and delayed capillary refill. What assessment best avoids assuming that edema proves adequate circulation?",
  "choices": [
    "Assess perfusion and congestion together, using history, examination and trends",
    "Treat ankle edema as proof that effective circulation is adequate",
    "Infer circulating volume from serum sodium alone",
    "Use low albumin alone to select an albumin infusion"
  ],
  "answer": 0,
  "rationale": "Edema and inadequate effective circulation can coexist. The fluid assessment combines examination, history, input/output, weight and laboratory trends. Neither sodium concentration nor albumin alone establishes circulating volume or an infusion indication.",
  "reviewHref": "#fluid-physiology-assessment"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-010"), {
  "id": "fluid-electrolyte-010",
  "question": "What is the strongest reason to document the intended response before administering IV fluid?",
  "choices": [
    "It creates a measurable stopping or revision point",
    "It guarantees the fluid is harmless",
    "It eliminates the need for reassessment",
    "It converts maintenance into resuscitation"
  ],
  "answer": 0,
  "rationale": "An explicit intended response and monitoring plan make reassessment actionable, including stopping or revising fluid when it does not help or causes harm. Documentation does not make any fluid harmless, remove monitoring or change the indication from maintenance to resuscitation.",
  "reviewHref": "#fluid-physiology-assessment"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-061"), {
  "id": "fluid-electrolyte-061",
  "question": "Using 2(Na) + glucose/18 + BUN/2.8, what is the estimated serum osmolality for Na 140 mmol/L, glucose 90 mg/dL, and BUN 14 mg/dL?",
  "choices": [
    "290 mOsm/kg",
    "270 mOsm/kg",
    "325 mOsm/kg",
    "145 mOsm/kg"
  ],
  "answer": 0,
  "rationale": "2 x 140 + 90/18 + 14/2.8 = 280 + 5 + 5 = 290 mOsm/kg. Sodium is in mmol/L and glucose/BUN in mg/dL. The other choices reflect incorrect substitution or arithmetic. This is an estimate of total osmolality, not a measured result or a direct volume assessment.",
  "reviewHref": "#fluid-physiology-assessment"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-062"), {
  "id": "fluid-electrolyte-062",
  "question": "Using 2(Na) + glucose/18 for effective tonicity, what is the estimate for sodium 132 mmol/L, glucose 540 mg/dL and BUN 28 mg/dL?",
  "choices": [
    "294 mOsm/kg",
    "304 mOsm/kg",
    "274 mOsm/kg",
    "264 mOsm/kg"
  ],
  "answer": 0,
  "rationale": "Effective tonicity is 2 x 132 + 540/18 = 264 + 30 = 294 mOsm/kg. Adding BUN/2.8 would give total osmolality 304; urea is omitted from effective tonicity. 274 omits much of the glucose contribution, and 264 omits it entirely.",
  "reviewHref": "#fluid-physiology-assessment"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-063"), {
  "id": "fluid-electrolyte-063",
  "question": "An adult has sodium 128 mmol/L and measured serum osmolality 266 mOsm/kg. What classification follows from the measured osmolality?",
  "choices": [
    "Hypotonic hyponatremia; assess symptoms and cause next",
    "Hypertonic hyponatremia caused by the low sodium itself",
    "Confirmed SIADH without further assessment",
    "Proven intravascular depletion from the sodium alone"
  ],
  "answer": 0,
  "rationale": "Measured osmolality below 275 mOsm/kg with hyponatremia establishes hypotonicity. It does not establish SIADH or volume depletion; symptom severity and the broader diagnostic assessment remain necessary.",
  "reviewHref": "#fluid-physiology-assessment"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-064"), {
  "id": "fluid-electrolyte-064",
  "question": "For sodium 150 mmol/L, glucose 126 mg/dL and BUN 35 mg/dL, which pair correctly gives estimated TOTAL osmolality and EFFECTIVE tonicity using this lesson's formulas?",
  "choices": [
    "319.5 and 307 mOsm/kg",
    "307 and 319.5 mOsm/kg",
    "319.5 and 319.5 mOsm/kg",
    "300 and 300 mOsm/kg"
  ],
  "answer": 0,
  "rationale": "Total = 300 + 7 + 12.5 = 319.5 mOsm/kg; effective = 300 + 7 = 307. The reversed pair places effective above total; equal 319.5 values incorrectly include urea in tonicity, while 300 values omit glucose and, for total, BUN.",
  "reviewHref": "#fluid-physiology-assessment"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-065"), {
  "id": "fluid-electrolyte-065",
  "question": "A colleague enters a UREA result reported in mg/dL into the BUN/2.8 term. Which response is appropriate?",
  "choices": [
    "Verify the analyte and convert units or use the appropriate laboratory formula before calculating",
    "Accept it because urea mass and BUN mass are interchangeable",
    "Use the same number but label the result mL/kg",
    "Double the sodium term again to compensate"
  ],
  "answer": 0,
  "rationale": "BUN reports the nitrogen component of urea, not the full urea mass. The divisor 2.8 applies to BUN in mg/dL. Correct the analyte/unit mismatch before calculation; changing the output label or sodium multiplier cannot fix it.",
  "reviewHref": "#fluid-physiology-assessment"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-066"), {
  "id": "fluid-electrolyte-066",
  "question": "Calculated osmolality is available, but measured osmolality was not obtained. What can be concluded about the osmolal gap?",
  "choices": [
    "It cannot be determined without measured osmolality",
    "It must be zero because the calculation was completed",
    "It equals the BUN contribution alone",
    "It proves that no unmeasured effective osmole is present"
  ],
  "answer": 0,
  "rationale": "The gap is measured minus calculated osmolality. A calculation alone cannot provide the missing measured value or exclude an unmeasured osmole. BUN is already represented in the total-osmolality formula.",
  "reviewHref": "#fluid-physiology-assessment"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-067"), {
  "id": "fluid-electrolyte-067",
  "question": "An adult has sodium 125 mmol/L and glucose 900 mg/dL. Using 2(Na) + glucose/18, effective tonicity is 300 mOsm/kg. What interpretation is most defensible?",
  "choices": [
    "Low sodium alone does not establish hypotonicity when glucose raises effective tonicity",
    "The sodium value alone confirms hypotonic SIADH",
    "Glucose lowers tonicity by drawing water into cells",
    "The result directly establishes total body sodium depletion"
  ],
  "answer": 0,
  "rationale": "2 x 125 + 900/18 = 250 + 50 = 300 mOsm/kg. Hyperglycemic water movement can lower measured sodium while raising effective tonicity. Neither the sodium nor this estimate alone proves SIADH or total sodium depletion; it also does not establish a complete hyperglycemic-crisis diagnosis.",
  "reviewHref": "#fluid-physiology-assessment"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-068"), {
  "id": "fluid-electrolyte-068",
  "question": "Sodium is 138 mmol/L, glucose is ALREADY reported as 10 mmol/L and BUN is 56 mg/dL. Which substitution correctly estimates total osmolality?",
  "choices": [
    "2 x 138 + 10 + 56/2.8 = 306 mOsm/kg",
    "2 x 138 + 10/18 + 56/2.8 = 296.6 mOsm/kg",
    "138 + 10 + 56/2.8 = 168 mOsm/kg",
    "2 x 138 + 10 + 56 = 342 mOsm/kg"
  ],
  "answer": 0,
  "rationale": "Glucose in mmol/L is already in the form needed for the calculation, so do not divide it by 18. BUN remains in mg/dL and contributes 56/2.8 = 20. Total = 276 + 10 + 20 = 306 mOsm/kg. The alternatives repeat a conversion, omit the sodium multiplier or fail to convert BUN.",
  "reviewHref": "#fluid-physiology-assessment"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-069"), {
  "id": "fluid-electrolyte-069",
  "question": "The same sample has measured osmolality 326 mOsm/kg and calculated osmolality 305.9 mOsm/kg. What is the osmolal gap, and what does it establish?",
  "choices": [
    "20.1 mOsm/kg; investigate the formula, measurements and unmeasured osmoles",
    "-20.1 mOsm/kg; subtraction order does not matter",
    "20.1 mOsm/kg; this identifies methanol as the cause",
    "631.9 mOsm/kg; adding the two values gives the gap"
  ],
  "answer": 0,
  "rationale": "The gap is measured minus calculated: 326 - 305.9 = 20.1 mOsm/kg. It is a reason to investigate, not a substance-specific diagnosis. Reverse subtraction changes the sign; addition does not calculate a gap. Interpret with the laboratory's validated method and clinical findings.",
  "reviewHref": "#fluid-physiology-assessment"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find((question) => question.id === "fluid-electrolyte-0610"), {
  "id": "fluid-electrolyte-0610",
  "question": "A patient has low sodium and high BUN, with measured total osmolality above 275 mOsm/kg. Which conclusion is safest?",
  "choices": [
    "Assess effective tonicity because high urea can raise total osmolality without a sustained transcellular osmotic effect",
    "The total osmolality guarantees hypertonic plasma regardless of the solutes present",
    "High BUN proves that sodium was diluted by urea drawing water from cells",
    "The measured total osmolality alone diagnoses SIADH"
  ],
  "answer": 0,
  "rationale": "Urea raises total measured osmolality but is relatively ineffective at producing sustained water shifts across cell membranes. A total result above 275 does not by itself establish effective tonicity when ineffective osmoles are present. Review glucose and other osmoles; SIADH still requires an appropriate pattern and exclusions.",
  "reviewHref": "#fluid-physiology-assessment"
});

// Stable question IDs, answer keys and review anchors retained.
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-011"), {
  "id": "fluid-electrolyte-011",
  "question": "Which of the Five Rs describes fluid given to match abnormal gastrointestinal drainage?",
  "choices": [
    "Replacement",
    "Resuscitation",
    "Routine maintenance",
    "Redistribution"
  ],
  "answer": 0,
  "rationale": "Replacement matches abnormal ongoing drainage according to measured volume and composition. Resuscitation addresses impaired perfusion, maintenance ordinary daily requirements, and redistribution complex shifts. A patient may need more than one component; replacement does not mean an unassessed fixed-volume order.",
  "reviewHref": "#iv-fluid-selection"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-012"), {
  "id": "fluid-electrolyte-012",
  "question": "Why is dextrose 5 percent in water unsuitable as a primary resuscitation fluid?",
  "choices": [
    "After glucose metabolism it behaves mainly as electrolyte-free water",
    "It remains entirely intravascular",
    "It contains excessive chloride",
    "It cannot deliver any water"
  ],
  "answer": 0,
  "rationale": "After glucose metabolism, D5W supplies electrolyte-free water that distributes beyond the vascular space. It does not remain entirely intravascular, has no excessive chloride load and does deliver water; it provides poor durable volume expansion for primary resuscitation. A dextrose-saline combination is a different product.",
  "reviewHref": "#iv-fluid-selection"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-013"), {
  "id": "fluid-electrolyte-013",
  "question": "Under NICE CG174 general adult IV resuscitation guidance, with suspected sepsis handled by its separate guideline, which starting prescription matches recommendation 1.3.1?",
  "choices": [
    "A sodium 130 to 154 mmol/L crystalloid, 500 mL over less than 15 minutes, with reassessment",
    "D5W, 500 mL over less than 15 minutes, as equivalent extracellular volume expansion",
    "A sodium-containing crystalloid continued at a maintenance rate until perfusion is reassessed the next day",
    "A 500 mL crystalloid bolus repeated automatically until a fixed total is reached"
  ],
  "answer": 0,
  "rationale": "CG174 retains the sodium range and 500 mL bolus recommendation. D5W is not an equivalent resuscitation fluid, a maintenance rate with delayed reassessment does not address acute perfusion needs, and repeat boluses require benefit/harm assessment. NG253 has a distinct initial 250 mL recommendation for its suspected-sepsis population; do not conflate the two.",
  "reviewHref": "#iv-fluid-selection"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-014"), {
  "id": "fluid-electrolyte-014",
  "question": "What is the main physiologic concern with large volumes of 0.9 percent sodium chloride?",
  "choices": [
    "A high chloride load can contribute to hyperchloremic acidosis",
    "It always causes severe hypernatremia",
    "It contains no sodium",
    "It acts as free water"
  ],
  "answer": 0,
  "rationale": "Normal saline has sodium and chloride at 154 mmol/L each. Large volumes can contribute to hyperchloremic metabolic acidosis. This is a risk, not inevitable severe hypernatremia; saline contains sodium and is an extracellular electrolyte solution rather than electrolyte-free water.",
  "reviewHref": "#iv-fluid-selection"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-015"), {
  "id": "fluid-electrolyte-015",
  "question": "Which statement best represents the current balanced crystalloid evidence?",
  "choices": [
    "Results differ across populations, so fluid choice remains context dependent",
    "Balanced fluids improve every outcome in every patient",
    "Saline is superior in every clinical setting",
    "Solution composition has no physiologic effect"
  ],
  "answer": 0,
  "rationale": "ESICM conditionally favors balanced crystalloids for general adult critical-care volume expansion, with low certainty of evidence. Outcomes and populations differ, and traumatic brain injury has a separate recommendation. Neither balanced fluids nor saline improve every outcome in every setting; composition affects chloride exposure and acid-base physiology.",
  "reviewHref": "#iv-fluid-selection"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-017"), {
  "id": "fluid-electrolyte-017",
  "question": "Which patient is most likely to need an initial adult maintenance estimate below 25 to 30 mL/kg/day?",
  "choices": [
    "An older adult with heart failure and renal impairment",
    "A healthy adult with high-output diarrhea",
    "A patient in hemorrhagic shock",
    "An athlete drinking normally"
  ],
  "answer": 0,
  "rationale": "NICE suggests considering a lower initial maintenance volume, such as 20 to 25 mL/kg/day, for older or frail adults and people with cardiac or renal impairment. High-output diarrhea requires separate loss replacement; hemorrhagic shock is a resuscitation problem. An athlete drinking adequately does not automatically require IV maintenance.",
  "reviewHref": "#iv-fluid-selection"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-018"), {
  "id": "fluid-electrolyte-018",
  "question": "Which statement best explains why hydroxyethyl starch should not be selected for routine resuscitation?",
  "choices": [
    "FDA warns of mortality, kidney injury and excess bleeding, and restricts use when adequate alternatives are available",
    "Its oncotic effect establishes better clinical outcomes than crystalloid in every patient",
    "Its starch content makes it a complete nutritional replacement for low serum albumin",
    "A smaller infusion volume eliminates the need to monitor kidney function or bleeding"
  ],
  "answer": 0,
  "rationale": "The FDA safety warning directs that HES should not be used unless adequate alternative treatment is unavailable. Oncotic volume expansion is not proof of superior outcomes. HES is not a nutritional substitute, and a smaller volume does not remove its safety concerns or monitoring needs.",
  "reviewHref": "#iv-fluid-selection"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-019"), {
  "id": "fluid-electrolyte-019",
  "question": "An IV order says 'normal saline at 100 mL/hour' with no other fluid plan. What is the most appropriate next step?",
  "choices": [
    "Clarify the indication, total volume/duration, response, monitoring and stopping rule",
    "Infer from the rate that the prescription is complete resuscitation for any adult",
    "Add a full maintenance allowance without counting this infusion",
    "Continue until oral intake resumes without assessing fluid status or losses"
  ],
  "answer": 0,
  "rationale": "A rate alone does not establish the purpose or duration. At 100 mL/hour a 24-hour infusion would provide 2,400 mL, which must be counted in total intake. The rate does not prove a resuscitation indication; adding uncounted maintenance or continuing without reassessment risks an inappropriate prescription.",
  "reviewHref": "#iv-fluid-selection"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-020"), {
  "id": "fluid-electrolyte-020",
  "question": "What is the best endpoint after a resuscitation fluid challenge?",
  "choices": [
    "A predefined change in perfusion with assessment for harm",
    "Completion of the bag regardless of response",
    "A rise in body weight",
    "Development of edema"
  ],
  "answer": 0,
  "rationale": "A fluid challenge should assess a predefined perfusion response and potential harm to guide the next decision. Bag completion is not a clinical endpoint; weight gain or edema does not establish useful resuscitation and may accompany fluid accumulation.",
  "reviewHref": "#iv-fluid-selection"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-081"), {
  "id": "fluid-electrolyte-081",
  "question": "A stable 70 kg adult needs routine IV maintenance alone, cannot drink and has no abnormal losses or reason for a lower initial estimate. Under NICE 25 to 30 mL/kg/day, what total daily water range is estimated before counting other intake?",
  "choices": [
    "1,750 to 2,100 mL/day",
    "1,400 to 1,750 mL/day",
    "2,100 to 2,800 mL/day",
    "25 to 30 mL/day"
  ],
  "answer": 0,
  "rationale": "70 x 25 = 1,750 and 70 x 30 = 2,100 mL/day. 1,400 to 1,750 uses the lower 20 to 25 range; 2,100 to 2,800 uses 30 to 40. 25 to 30 omits multiplication by weight. This estimates maintenance water, not losses or resuscitation, and other intake still counts.",
  "reviewHref": "#iv-fluid-selection"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-082"), {
  "id": "fluid-electrolyte-082",
  "question": "A nonpregnant adult, not recently pregnant, has high-risk suspected sepsis in hospital. Fluid resuscitation is indicated and no contraindication is identified. Under NICE NG253, which initial action is appropriate?",
  "choices": [
    "Give an isotonic balanced crystalloid 250 mL bolus, ideally over 10 to 15 minutes, then reassess",
    "Give 1,000 mL without reassessment because it is a required minimum total",
    "Give D5W 250 mL as equivalent extracellular volume support",
    "Defer the indicated resuscitation until the routine next-day fluid review"
  ],
  "answer": 0,
  "rationale": "NG253 uses an initial 250 mL isotonic electrolyte crystalloid bolus, ideally over 10 to 15 minutes, with reassessment after each bolus. Use saline if a balanced solution is unavailable. Further boluses are conditional on need; 1,000 mL is not a mandatory minimum. D5W is not equivalent, and high-risk indicated resuscitation should not be deferred to next-day review.",
  "reviewHref": "#iv-fluid-selection"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-084"), {
  "id": "fluid-electrolyte-084",
  "question": "A patient with cirrhosis has ascites, edema and suspected reduced effective circulation. What is the best next fluid-planning approach?",
  "choices": [
    "Assess complex redistribution and seek expert input using perfusion, congestion, intake and laboratory findings",
    "Treat edema as proof that effective circulating volume is adequate",
    "Select albumin solely because serum albumin is low",
    "Apply an unchanged maintenance volume based only on scale weight"
  ],
  "answer": 0,
  "rationale": "NICE recommends expert input for complex redistribution and significant liver disease. Edema can coexist with reduced effective circulation; assess both. Low albumin alone does not establish an albumin infusion indication, and weight alone does not determine a safe prescription. Selected albumin indications require the full clinical context.",
  "reviewHref": "#iv-fluid-selection"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-085"), {
  "id": "fluid-electrolyte-085",
  "question": "A stable adult has a specified total water target of 1,750 mL/day, receives 800 mL of oral water plus 450 mL of medication fluid, and has no other intake or abnormal losses. What IV WATER allowance remains before a separate electrolyte plan?",
  "choices": [
    "500 mL/day",
    "950 mL/day",
    "1,750 mL/day",
    "3,000 mL/day"
  ],
  "answer": 0,
  "rationale": "Other intake totals 800 + 450 = 1,250 mL/day; 1,750 − 1,250 = 500 mL/day. 950 subtracts only oral water, 1,750 ignores both sources and 3,000 adds them to the target. This water accounting does not specify the IV formulation or prove that electrolyte requirements have been met.",
  "reviewHref": "#iv-fluid-selection"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-086"), {
  "id": "fluid-electrolyte-086",
  "question": "An adult critically ill patient with traumatic brain injury needs volume expansion. Which approach best reflects the 2024 ESICM recommendation?",
  "choices": [
    "Consider isotonic saline rather than balanced crystalloid or albumin, and follow the neurocritical protocol",
    "Apply the general balanced-fluid preference without considering brain injury or tonicity",
    "Select albumin because every colloid provides better clinical outcomes",
    "Use D5W because its glucose makes it a durable intravascular volume expander"
  ],
  "answer": 0,
  "rationale": "For this population, ESICM conditionally suggests isotonic saline over balanced crystalloids or albumin, with very low certainty of evidence. More hypotonic Ringer's lactate is discouraged in TBI. A general balanced preference does not apply automatically, colloid expansion does not prove superior outcomes, and metabolized D5W acts as free water. This question does not select osmotic therapy for intracranial pressure.",
  "reviewHref": "#iv-fluid-selection"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-087"), {
  "id": "fluid-electrolyte-087",
  "question": "A frail 60 kg older adult with heart failure needs temporary routine maintenance alone. A clinician chooses NICE's lower initial 20 to 25 mL/kg/day estimate. What total water range follows before subtracting other intake?",
  "choices": [
    "1,200 to 1,500 mL/day",
    "1,500 to 1,800 mL/day",
    "2,100 to 2,400 mL/day",
    "20 to 25 mL/day"
  ],
  "answer": 0,
  "rationale": "60 x 20 = 1,200 and 60 x 25 = 1,500 mL/day. 1,500 to 1,800 uses 25 to 30; 2,100 to 2,400 does not use the specified range. 20 to 25 omits weight. Tailor the initial estimate after counting intake and reassessing congestion, kidney function and electrolytes; it is not a bolus or a fixed ongoing mandate.",
  "reviewHref": "#iv-fluid-selection"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-088"), {
  "id": "fluid-electrolyte-088",
  "question": "New dyspnea and crackles develop during an IV fluid infusion. What is the best immediate fluid-related response?",
  "choices": [
    "Stop the infusion and urgently reassess for possible harm and the ongoing indication",
    "Complete the prescribed bag before reviewing the new respiratory findings",
    "Give a further bolus automatically because crackles demonstrate inadequate volume",
    "Continue at the same rate if the most recent serum sodium was normal"
  ],
  "answer": 0,
  "rationale": "New respiratory findings can indicate fluid-related harm and require stopping and urgent clinical reassessment. They are not proof of one diagnosis or a reason to complete the bag or give more fluid automatically. Normal sodium does not exclude overload or remove the need to assess the patient.",
  "reviewHref": "#iv-fluid-selection"
});

// Source-reconciled sodium questions; stable IDs, answer keys and anchors retained.
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-021"), {
  "id": "fluid-electrolyte-021",
  "question": "A clinically stable patient has a low measured sodium before an etiology is assigned. What laboratory distinction should guide the next diagnostic steps?",
  "choices": [
    "Determine effective tonicity using glucose, serum osmolality and the clinical context",
    "Assign SIADH solely because the measured sodium is below 135 mmol/L",
    "Use the urine sodium alone to exclude pseudohyponatremia",
    "Interpret a high total osmolality as proof that hypotonicity is impossible"
  ],
  "answer": 0,
  "rationale": "Glucose, effective osmoles and measurement artifact can change interpretation of a low sodium. Total osmolality includes ineffective osmoles such as urea, so a higher total result does not alone exclude low effective tonicity. Urine sodium does not identify a serum measurement artifact, and low sodium alone does not establish SIADH. Severe symptoms would require urgent care alongside testing.",
  "reviewHref": "#sodium-water-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-022"), {
  "id": "fluid-electrolyte-022",
  "question": "A patient has effective serum osmolality 260 mOsm/kg, urine osmolality 420 mOsm/kg, urine sodium 55 mmol/L on usual intake and clinical euvolemia. Adrenal, thyroid, pituitary and renal insufficiency and recent diuretic use have been excluded. Which interpretation fits best?",
  "choices": [
    "The findings support an SIADH pattern while its cause is investigated",
    "The concentrated urine proves central diabetes insipidus",
    "The urine sodium establishes gastrointestinal hypovolemia regardless of examination",
    "The low sodium is necessarily a lipid-related measurement artifact"
  ],
  "answer": 0,
  "rationale": "The stated hypotonicity, antidiuresis, urine sodium above 30 and exclusions fit the European essential SIAD criteria. They do not identify the underlying cause. Central DI typically produces dilute urine during water loss; a high urine sodium does not prove gastrointestinal volume loss. A measured hypotonic pattern is not explained simply by a lipid artifact.",
  "reviewHref": "#sodium-water-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-023"), {
  "id": "fluid-electrolyte-023",
  "question": "During urgent monitored treatment of severe symptomatic hypotonic hyponatremia, what is the initial sodium objective?",
  "choices": [
    "A small controlled rise sufficient to relieve dangerous cerebral edema, followed by reassessment",
    "Immediate normalization to 135 mmol/L before reassessing symptoms",
    "The largest possible water diuresis before the next sodium measurement",
    "Completion of every endocrine test before starting symptom-directed treatment"
  ],
  "answer": 0,
  "rationale": "European guidance aims for an initial rise of about 5 mmol/L; US/Irish experts describe 4 to 6 mmol/L over the early treatment period. Both emphasize a limited symptom-relieving rise rather than immediate normalization. Uncontrolled aquaresis risks overshoot, and severe symptoms should not wait for the full diagnostic workup.",
  "reviewHref": "#sodium-water-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-024"), {
  "id": "fluid-electrolyte-024",
  "question": "Under the cited European general first-day limit, sodium rises from 116 to 121 mmol/L and severe symptoms improve. Which statement correctly accounts for the initial response?",
  "choices": [
    "The 5 mmol/L rise is included within the total first-day 10 mmol/L limit; later 24-hour limits are 8 mmol/L",
    "The first 5 mmol/L is excluded, allowing a total 15 mmol/L rise during the first day",
    "The first-day limit is a target requiring sodium to reach exactly 126 mmol/L",
    "The daily limit can be reset each time a saline bolus finishes"
  ],
  "answer": 0,
  "rationale": "The original baseline and elapsed time govern the cumulative change. The initial 5 counts within 10; it does not create an additional allowance. A ceiling is not a mandatory target, and a new bolus does not reset the clock. High-risk patients require a stricter limit, such as the US/Irish maximum of 8 mmol/L in any 24 hours.",
  "reviewHref": "#sodium-water-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-025"), {
  "id": "fluid-electrolyte-025",
  "question": "An adult with chronic sodium 108 mmol/L has malnutrition and alcohol use disorder. Which correction plan best reflects the high-risk US/Irish recommendations discussed by Sterns and colleagues?",
  "choices": [
    "Aim for 4 to 6 mmol/L/day and do not exceed 8 mmol/L in any 24 hours",
    "Use the general European 10 mmol/L first-day ceiling as a required minimum",
    "Target 12 mmol/L/day because a product label warns about rises above 12",
    "Remove the daily limit if the neurologic examination is initially normal"
  ],
  "answer": 0,
  "rationale": "Malnutrition and alcohol use disorder increase demyelination risk even with an initially normal examination. The high-risk recommendations use a daily goal of 4 to 6 and a ceiling of 8 in any 24 hours. Neither a general ceiling nor a label warning is a required target or permission for faster correction in this patient.",
  "reviewHref": "#sodium-water-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-026"), {
  "id": "fluid-electrolyte-026",
  "question": "After isotonic saline restores volume in hypovolemic hypotonic hyponatremia, urine output abruptly increases and sodium rises faster than predicted. Which mechanism best explains the change?",
  "choices": [
    "The hypovolemic vasopressin stimulus resolves, allowing increased electrolyte-free water excretion",
    "Saline chemically destroys vasopressin before it reaches the kidney",
    "Chloride moves entirely into cells and independently raises serum sodium",
    "The saline becomes an electrolyte-free solution after its sodium is metabolized"
  ],
  "answer": 0,
  "rationale": "Restoring circulation can suppress non-osmotic vasopressin release and produce water diuresis. Saline does not chemically destroy the hormone or become free water by sodium metabolism; its chloride is not entirely intracellular. Monitor sodium and urine output closely because correction can accelerate beyond the calculated saline effect.",
  "reviewHref": "#sodium-water-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-027"), {
  "id": "fluid-electrolyte-027",
  "question": "A specialist selects SAMSCA for a hospitalized adult with persistent clinically significant euvolemic hyponatremia, without an urgent neurologic indication or contraindication. Which initiation safeguard follows its label?",
  "choices": [
    "Avoid fluid restriction in the first 24 hours, allow fluid in response to thirst and monitor sodium and volume closely",
    "Start outside hospital if the first dose is only 15 mg",
    "Maintain strict fluid restriction during the first day to prevent excessive correction",
    "Add hypertonic saline automatically whenever tolvaptan is started"
  ],
  "answer": 0,
  "rationale": "SAMSCA initiation and reinitiation require hospital monitoring. Restriction during the first 24 hours can increase rapid-correction risk; the label advises avoiding it and allowing thirst-directed intake. Concomitant hypertonic saline is not recommended. The approved role does not make tolvaptan an emergency treatment for serious neurologic symptoms.",
  "reviewHref": "#sodium-water-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-028"), {
  "id": "fluid-electrolyte-028",
  "question": "An adult has sodium 158 mmol/L, hypotension and poor perfusion after gastrointestinal losses. What is the immediate fluid priority?",
  "choices": [
    "Restore circulation with an appropriate isotonic crystalloid, then plan monitored free-water replacement",
    "Use D5W alone as equivalent durable intravascular resuscitation",
    "Lower sodium to 140 mmol/L before addressing circulation",
    "Avoid all sodium-containing fluid because sodium is elevated"
  ],
  "answer": 0,
  "rationale": "Shock or hypotension requires isotonic saline or an appropriate balanced crystalloid to restore circulation despite hypernatremia. D5W is not equivalent durable extracellular volume support. Immediate normalization is not the initial objective. After stabilization, choose a controlled water-replacement plan that includes losses and repeat sodium measurements.",
  "reviewHref": "#sodium-water-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-029"), {
  "id": "fluid-electrolyte-029",
  "question": "An adult with hypernatremia and polyuria has urine osmolality 120 mOsm/kg. Under supervised testing, desmopressin produces a substantial rise in urine osmolality and reduces urine volume. Which mechanism is most supported?",
  "choices": [
    "Central vasopressin deficiency causing diabetes insipidus",
    "Complete renal resistance to vasopressin with no expected desmopressin response",
    "SIADH causing water retention despite low effective tonicity",
    "Normal maximal urine concentration in response to hypernatremia"
  ],
  "answer": 0,
  "rationale": "Dilute urine during hypernatremia indicates impaired water conservation. A substantial concentrating response to desmopressin supports central DI; complete nephrogenic resistance would respond poorly. SIADH describes inappropriate antidiuresis during hypotonicity. The initial urine is not maximally concentrated. Partial disorders require fuller specialist interpretation.",
  "reviewHref": "#sodium-water-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-030"), {
  "id": "fluid-electrolyte-030",
  "question": "For a specified water-deficit estimate, a 70 kg adult has sodium 154 mmol/L and the chosen total-body-water fraction is 0.50. Using TBW x (Na/140 − 1), which result and interpretation are correct?",
  "choices": [
    "3.5 L estimated deficit; ongoing losses and the monitored correction schedule still require assessment",
    "7.0 L estimated deficit, using total body weight directly as liters of water",
    "35 L estimated deficit, equal to the total-body-water estimate itself",
    "3.5 L that must be infused immediately to normalize sodium"
  ],
  "answer": 0,
  "rationale": "TBW = 70 x 0.50 = 35 L; 154/140 − 1 = 0.10; deficit = 35 x 0.10 = 3.5 L. Using weight directly doubles the result, and 35 L is TBW rather than deficit. The result is a simplifying estimate, not an immediate infusion order; body-water assumptions, losses, intake and serial sodium measurements still matter.",
  "reviewHref": "#sodium-water-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-089"), {
  "id": "fluid-electrolyte-089",
  "question": "An adult with confirmed hypotonic hyponatremia develops a seizure plausibly related to the sodium disorder. Which response best addresses the immediate danger?",
  "choices": [
    "Use the local monitored hypertonic-saline emergency protocol while diagnostic assessment proceeds",
    "Use tolvaptan first because any sodium-raising drug is equivalent in this emergency",
    "Delay symptom-directed treatment until SIADH is fully confirmed",
    "Give D5W to raise sodium rapidly without repeated measurements"
  ],
  "answer": 0,
  "rationale": "Severe neurologic symptoms attributable to hypotonic hyponatremia require urgent controlled hypertonic saline and reassessment. SAMSCA is excluded for urgent serious neurologic indications, and a full etiologic diagnosis must not delay emergency care. D5W supplies free water and does not raise sodium as proposed; treatment requires repeated monitoring.",
  "reviewHref": "#sodium-water-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-0810"), {
  "id": "fluid-electrolyte-0810",
  "question": "After isotonic resuscitation restores perfusion in a hypernatremic adult with no current congestion, which next plan best addresses the sodium disorder?",
  "choices": [
    "Assess duration and ongoing losses, choose suitable water replacement and adjust it using serial sodium and fluid findings",
    "Continue isotonic boluses until sodium reaches 140 regardless of perfusion response",
    "Give the entire calculated water deficit in one hour without considering duration",
    "Use urine volume alone to set treatment without checking sodium again"
  ],
  "answer": 0,
  "rationale": "After circulation is restored, treatment must address water balance and the correction schedule, including ongoing losses and intake. Continuing unneeded isotonic boluses can add volume and sodium; rapid unmonitored delivery ignores chronicity and risk. Urine output is useful but does not replace sodium and clinical reassessment.",
  "reviewHref": "#sodium-water-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-097"), {
  "id": "fluid-electrolyte-097",
  "question": "A patient with chronic hypotonic hyponatremia, malnutrition and alcohol use disorder rises from sodium 109 to 118 mmol/L in 12 hours during treatment. What is the best next action?",
  "choices": [
    "Stop active correction and obtain urgent expert management of overcorrection, with frequent sodium and urine monitoring",
    "Continue because the high-risk daily ceiling is not exceeded until the rise reaches 12 mmol/L",
    "Treat 118 as a fresh baseline and allow a further 8 mmol/L rise",
    "Wait for neurologic deficits before changing the correction plan"
  ],
  "answer": 0,
  "rationale": "118 − 109 = 9 mmol/L in 12 hours, exceeding the high-risk maximum of 8 in any 24 hours. Stop active correction and urgently assess expert-guided relowering or prevention of further rise. Resetting the baseline or using 12 as this patient’s limit is incorrect. Neurologic injury may be delayed; do not wait for deficits to respond to the trajectory.",
  "reviewHref": "#sodium-water-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-098"), {
  "id": "fluid-electrolyte-098",
  "question": "An adult has sodium 151 mmol/L, urine output 5 L/day and urine osmolality 90 mOsm/kg. Which next diagnostic approach is most appropriate?",
  "choices": [
    "Evaluate hypotonic water diuresis, including central or nephrogenic DI, with medication, electrolyte and specialist assessment",
    "Diagnose central DI from the sodium value alone and disregard renal resistance",
    "Assign SIADH because all polyuria reflects excess vasopressin activity",
    "Assume fever-related water loss explains the dilute urine without further assessment"
  ],
  "answer": 0,
  "rationale": "Polyuria with inappropriately dilute urine during hypernatremia suggests impaired renal water conservation. DI is a possibility, but distinguishing vasopressin deficiency from resistance needs fuller assessment; medication causes, potassium, calcium and other mechanisms matter. SIADH is inappropriate antidiuresis, and pure extrarenal loss normally stimulates urine concentration.",
  "reviewHref": "#sodium-water-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-099"), {
  "id": "fluid-electrolyte-099",
  "question": "A stable adult develops hypotonic hyponatremia after starting an implicated medicine. Urine is concentrated and examination suggests euvolemia. What is the best next cause-directed approach?",
  "choices": [
    "Review and withdraw or replace the implicated medicine when feasible, while checking the full SIADH criteria and exclusions",
    "Confirm SIADH solely from the new medicine and concentrated urine",
    "Give isotonic saline automatically because every low sodium reflects depleted circulation",
    "Start demeclocycline routinely because the book describes an off-label SIADH use"
  ],
  "answer": 0,
  "rationale": "Medication review and cause removal are appropriate, but adrenal, thyroid, pituitary and renal disorders and diuretics must be considered before assigning SIADH. Concentrated urine is not diagnostic by itself; universal saline is inappropriate. Off-label mention does not establish a preferred therapy, and the European guideline recommends against demeclocycline in moderate or profound SIADH.",
  "reviewHref": "#sodium-water-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-0910"), {
  "id": "fluid-electrolyte-0910",
  "question": "SAMSCA is proposed for a volume-depleted patient with hypotonic hyponatremia after gastrointestinal losses. Which assessment is correct?",
  "choices": [
    "Hypovolemic hyponatremia is a labeled contraindication; address the volume problem with monitored cause-specific care",
    "Hospital initiation removes the hypovolemic contraindication",
    "A 15 mg dose is permitted in any low-sodium state because it is the labeled starting dose",
    "V2 blockade restores depleted circulating volume and prevents water diuresis"
  ],
  "answer": 0,
  "rationale": "SAMSCA is contraindicated in hypovolemic hyponatremia. Hospital monitoring and a labeled dose do not override that restriction. V2 blockade increases water excretion and can worsen depletion; assess and restore volume as indicated while monitoring for aquaresis and rapid sodium correction.",
  "reviewHref": "#sodium-water-disorders"
});

// Source-reconciled potassium questions; stable IDs, answer keys and anchors retained.
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-031"), {
  "id": "fluid-electrolyte-031",
  "question": "Which treatment is used for hyperkalemic ECG toxicity without lowering serum potassium?",
  "choices": [
    "IV calcium",
    "IV insulin with glucose",
    "Nebulized albuterol",
    "Hemodialysis"
  ],
  "answer": 0,
  "rationale": "Calcium antagonizes cardiac toxicity without shifting or removing potassium. Insulin and albuterol shift it into cells; hemodialysis removes it. Calcium use and reassessment follow the emergency protocol, and clinical outcome evidence remains limited.",
  "reviewHref": "#potassium-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-032"), {
  "id": "fluid-electrolyte-032",
  "question": "An adult receives insulin with dextrose for hyperkalemia. Why are subsequent glucose checks still required?",
  "choices": [
    "Hypoglycemia can occur despite the administered dextrose, including after the initial response",
    "The dextrose guarantees protection once the first glucose result is normal",
    "Only patients with known diabetes can become hypoglycemic",
    "Potassium normalization proves that glucose has remained safe"
  ],
  "answer": 0,
  "rationale": "Dextrose reduces risk but does not eliminate insulin-related hypoglycemia. Monitoring applies to all treated patients, including those without diabetes. A potassium result does not establish the glucose concentration. The cited UK protocol checks glucose repeatedly through six hours, with further monitoring as indicated.",
  "reviewHref": "#potassium-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-033"), {
  "id": "fluid-electrolyte-033",
  "question": "An anuric adult has persistent severe hyperkalemia despite temporary shifting treatment. Which intervention can remove potassium definitively?",
  "choices": [
    "Urgently arranged renal replacement therapy, with modality and timing selected by the specialist",
    "Repeated calcium doses as the sole potassium-lowering treatment",
    "Insulin alone as proof that total body potassium has fallen",
    "Furosemide alone with an assumption of urinary removal despite anuria"
  ],
  "answer": 0,
  "rationale": "Renal replacement therapy removes potassium; urgent nephrology or critical-care assessment selects the appropriate method. Calcium does not lower potassium, and insulin only redistributes it. Anuria prevents the assumed urinary removal. Continue indicated emergency medical care while definitive treatment is arranged.",
  "reviewHref": "#potassium-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-034"), {
  "id": "fluid-electrolyte-034",
  "question": "How should the U.S. LOKELMA and VELTASSA limitations be interpreted for life-threatening hyperkalemia?",
  "choices": [
    "Their labels exclude emergency treatment because onset is delayed; urgent rescue must not be replaced by a binder",
    "Both labels authorize emergency rescue whenever another drug is also given",
    "A reported onset within an hour guarantees immediate protection from arrhythmia",
    "The UK acute pathway automatically changes the U.S. approved labeling"
  ],
  "answer": 0,
  "rationale": "Both U.S. labels say the products should not be used as emergency treatment for life-threatening hyperkalemia. This is broader than a monotherapy-only warning. National guideline recommendations can discuss adjunctive roles but do not rewrite U.S. labeling. Reported potassium changes do not guarantee immediate cardiac protection.",
  "reviewHref": "#potassium-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-035"), {
  "id": "fluid-electrolyte-035",
  "question": "Which finding provides a possible acid-base indication to consider bicarbonate as an adjunct during hyperkalemia care?",
  "choices": [
    "Clinically important metabolic acidemia, assessed with its cause and sodium/volume burden",
    "Metabolic alkalosis with no bicarbonate deficit",
    "A normal acid-base state in every patient with high potassium",
    "Respiratory alkalosis used as proof of a metabolic bicarbonate deficiency"
  ],
  "answer": 0,
  "rationale": "Bicarbonate may be considered for clinically important metabolic acidemia, but its potassium effect is variable and routine acute use is not recommended by UK guidance. Metabolic or respiratory alkalosis and a normal acid-base state do not establish this indication. It does not replace other required emergency measures.",
  "reviewHref": "#potassium-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-036"), {
  "id": "fluid-electrolyte-036",
  "question": "Potassium remains low during replacement in an adult receiving a loop diuretic. Which assessment addresses a frequent reason for failure?",
  "choices": [
    "Check magnesium and ongoing renal or gastrointestinal potassium losses",
    "Assume each replacement dose must have raised potassium by an identical amount",
    "Treat the low potassium as proof that there can be no renal wasting",
    "Check sodium alone and stop investigating the replacement response"
  ],
  "answer": 0,
  "rationale": "Magnesium deficiency can aggravate renal potassium wasting, and ongoing losses can offset replacement. Serum response is variable; repeated low results do not exclude renal loss. Sodium alone does not assess magnesium or explain potassium balance. Correct identified deficits and causes with continued monitoring.",
  "reviewHref": "#potassium-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-037"), {
  "id": "fluid-electrolyte-037",
  "question": "Which order involving Hospira potassium chloride for injection concentrate, 2 mEq/mL, requires immediate correction?",
  "choices": [
    "Direct IV push of the undiluted concentrate",
    "Dilution and complete mixing into an appropriate infusion solution",
    "Product-specific renal and cardiac safety assessment before prescribing",
    "Controlled infusion with appropriate repeat potassium measurements"
  ],
  "answer": 0,
  "rationale": "The vial is a concentrate requiring dilution before infusion. Direct undiluted injection can cause fatal arrhythmia or cardiac arrest; IV push is unsafe. The other actions are necessary safeguards. A separately labeled ready-to-use bag does not authorize direct injection of this vial.",
  "reviewHref": "#potassium-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-038"), {
  "id": "fluid-electrolyte-038",
  "question": "A specified ready-to-use bag contains 40 mEq potassium chloride in 100 mL and is proposed at 50 mL/hour. Which review is correct?",
  "choices": [
    "It contains 400 mEq/L and delivers 20 mEq/hour; central access, monitoring and justification beyond routine limits require review",
    "It contains 40 mEq/L and delivers 2 mEq/hour, suitable for routine peripheral use",
    "It delivers 50 mEq/hour because the pump displays 50 mL/hour",
    "Correct calculation alone proves that the rate and peripheral route are appropriate"
  ],
  "answer": 0,
  "rationale": "40/0.100 = 400 mEq/L; 40/100 x 50 = 20 mEq/hour. The reviewed ICU Medical label requires central access for 400 mEq/L and continuous monitoring for these concentrated products; 20 exceeds its usual 10 mEq/hour rate. Pump volume is not a potassium dose, and arithmetic does not independently authorize an order.",
  "reviewHref": "#potassium-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-039"), {
  "id": "fluid-electrolyte-039",
  "question": "Which combination most directly combines reduced renal potassium elimination with medicines that promote retention?",
  "choices": [
    "Kidney impairment with an ACE inhibitor and a potassium-sparing diuretic",
    "Normal kidney function with diarrhea and a loop diuretic",
    "Normal kidney function with insulin and nebulized albuterol",
    "Vomiting with alkalosis and thiazide treatment"
  ],
  "answer": 0,
  "rationale": "Kidney impairment reduces elimination; RAAS inhibition and potassium-sparing diuretics can further promote retention. The other scenarios primarily favor losses or movement into cells rather than this combined retention mechanism. Review supplements, trimethoprim and other contributors as well.",
  "reviewHref": "#potassium-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-040"), {
  "id": "fluid-electrolyte-040",
  "question": "After insulin and nebulized albuterol, serum potassium falls. What does this response demonstrate?",
  "choices": [
    "Movement into cells can lower the serum concentration without proving removal of total body potassium",
    "The measured fall proves that insulin has excreted potassium through the kidneys",
    "Albuterol has necessarily removed potassium through the gastrointestinal tract",
    "Total stores and serum concentration are interchangeable measurements"
  ],
  "answer": 0,
  "rationale": "Insulin and beta agonists change distribution. They do not prove urinary or gastrointestinal elimination; total stores and the serum concentration are distinct. Arrange removal when indicated and monitor for rebound as the shifting effect wanes.",
  "reviewHref": "#potassium-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-091"), {
  "id": "fluid-electrolyte-091",
  "question": "An adult has confirmed potassium 6.9 mmol/L and a new widened QRS. Which response best addresses the immediate problem?",
  "choices": [
    "Give protocol-directed IV calcium and promptly initiate shifting, removal assessment and monitoring",
    "Treat with an oral binder alone and await its effect on the QRS",
    "Delay rescue until a second sample tomorrow proves the same value",
    "Give calcium and stop all further care when the first ECG improves"
  ],
  "answer": 0,
  "rationale": "Hyperkalemic ECG toxicity calls for prompt monitored cardiac protection while the potassium is addressed. A binder cannot replace immediate rescue; delaying until tomorrow is inappropriate. Calcium does not lower potassium, so improvement in the tracing does not complete treatment.",
  "reviewHref": "#potassium-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-092"), {
  "id": "fluid-electrolyte-092",
  "question": "An adult has persistent potassium 2.7 mmol/L after repeated replacement, without current paralysis or arrhythmia. What should the ongoing treatment review include?",
  "choices": [
    "Magnesium, continued losses, medicines, kidney function and repeat potassium-directed adjustment",
    "Automatic rapid infusion of an undiluted concentrate because prior doses failed",
    "A potassium binder to improve absorption of the replacement",
    "A fixed prediction that the next 10 mEq must raise potassium by exactly 0.1 mEq/L"
  ],
  "answer": 0,
  "rationale": "Investigate refractory hypokalemia while adjusting replacement safely. Magnesium deficiency, losses and medicines may explain failure. Undiluted rapid infusion is dangerous; a binder removes potassium and can worsen depletion. The serum response is not an exact fixed conversion.",
  "reviewHref": "#potassium-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-093"), {
  "id": "fluid-electrolyte-093",
  "question": "An anuric adult still has potassium 7.1 mmol/L after an initial shifting response. Which next plan is most appropriate?",
  "choices": [
    "Obtain urgent nephrology or critical-care assessment for renal replacement therapy while continuing indicated monitored emergency treatment",
    "Use repeated insulin alone as a durable removal plan",
    "Use a loop diuretic and assume substantial urinary potassium loss despite anuria",
    "Wait for an oral binder without urgent specialist assessment"
  ],
  "answer": 0,
  "rationale": "Persistent severe hyperkalemia with anuria requires urgent consideration of definitive extracorporeal removal. Shifts are temporary, urinary removal cannot be assumed without urine, and an oral binder must not delay rescue or specialist escalation. The specialist determines timing and modality.",
  "reviewHref": "#potassium-disorders"
});
Object.assign(fluidElectrolyteTherapyQuestionBank.find(q => q.id === "fluid-electrolyte-094"), {
  "id": "fluid-electrolyte-094",
  "question": "An acutely ill adult has potassium 6.4 mmol/L and significant metabolic acidemia, with no hyperkalemic ECG changes on the initial tracing. Which approach is most appropriate?",
  "choices": [
    "Use monitored potassium-lowering care guided by acuity and trajectory; consider bicarbonate for the acidemia without replacing shifting or removal",
    "Give calcium automatically because every potassium above 6.0 requires it regardless of ECG or setting",
    "Use bicarbonate alone and assume an immediate, predictable potassium response",
    "Use an oral binder alone and omit glucose and potassium follow-up"
  ],
  "answer": 0,
  "rationale": "Moderate hyperkalemia requires context-based acute assessment and monitored treatment. UK guidance suggests insulin-glucose in this range and advises against routine bicarbonate for hyperkalemia. Acidemia can provide a separate reason to consider bicarbonate, but it is not sole rescue. The initial normal ECG does not exclude risk or mandate calcium automatically; follow-up remains essential.",
  "reviewHref": "#potassium-disorders"
});
