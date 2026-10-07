import { fluidElectrolyteTherapyQuestionBank } from "@/data/questionBanks/fluidElectrolyteTherapy";

export const fluidElectrolyteTherapyModule = {
  slug: "fluid-electrolyte-therapy",
  number: "02",
  title: "Fluid and Electrolyte Therapy",
  source: "NaS synthesis of current fluid and electrolyte guidance",
  description: "Reason from compartments, tonicity, symptoms, and organ function to a fluid or electrolyte plan that can be measured and revised.",
  topics: ["IV fluid therapy", "Sodium and water", "Potassium", "Magnesium and monitoring"],
  outcomes: [
    "Distinguish resuscitation, maintenance, replacement, and redistribution needs.",
    "Classify sodium disorders by tonicity, symptoms, and volume status.",
    "Sequence urgent potassium treatment by stabilization, redistribution, and removal.",
    "Calculate common fluid needs and build a safe monitoring plan.",
  ],
  submodules: [
    {
      slug: "fluid-physiology-assessment",
      title: "Fluid Physiology and Assessment",
      summary: "A serum value describes concentration. A bedside assessment explains perfusion, congestion, losses, and the compartment in which water is moving.",
      concepts: ["Intracellular and extracellular water", "Osmolality and effective tonicity", "Perfusion versus congestion", "Input, output, weight, and trend"],
      visual: "compartments",
      application: "Before ordering fluid, name the problem being treated, the evidence supporting it, the expected physiologic response, and the finding that will stop or change the plan.",
      lesson: [
        { heading: "Separate concentration from volume", body: "Sodium is primarily a water-balance concentration, not a direct measurement of total body sodium. A patient may be hyponatremic while intravascularly depleted, clinically euvolemic, or edematous. Volume assessment integrates history, examination, urine output, weight, hemodynamics, kidney function, and the direction of change." },
        { heading: "Use osmolality to explain water movement", body: "Estimated serum osmolality can be calculated as two times sodium plus glucose divided by 18 plus blood urea nitrogen divided by 2.8, with values entered in conventional US units. Effective tonicity excludes urea because urea crosses cell membranes relatively freely. Hyperglycemia can therefore pull water from cells and lower measured sodium while increasing tonicity." },
        { heading: "Treat the trajectory", body: "A single measurement can be misleading. Acute intake, gastrointestinal losses, diuretics, fever, drains, edema, changes in weight, and urine output create the clinical story. Repeated measurements obtained under comparable conditions are more informative than isolated values." },
      ],
      keyPoints: ["Do not infer volume status from sodium alone.", "Distinguish measured osmolality from calculated osmolality and effective tonicity.", "Document the indication for fluid and the response target before administration."],
      check: { question: "A patient with decompensated heart failure has edema and a sodium of 128 mmol/L. Which interpretation is best?", choices: ["The patient may have hypervolemic hypotonic hyponatremia", "The low sodium proves total body sodium depletion", "Edema excludes a water-balance disorder", "Serum sodium directly measures intravascular volume"], answer: 0, rationale: "Edematous states can retain both sodium and water, with proportionally greater water retention producing hypervolemic hyponatremia.", reviewHref: "#fluid-physiology-assessment" },
    },
    {
      slug: "iv-fluid-selection",
      title: "IV Fluid Selection and the Five Rs",
      summary: "The correct fluid depends on the job. Resuscitation, routine maintenance, replacement, redistribution, and reassessment require different prescriptions.",
      concepts: ["Crystalloids and albumin", "Resuscitation versus maintenance", "Ongoing loss replacement", "Balanced solutions and saline"],
      visual: "fluids",
      application: "Use IV fluid only when oral or enteral routes cannot meet the need. Specify the type, rate, volume, duration, monitoring plan, and stopping rule.",
      lesson: [
        { heading: "Name the indication", body: "Resuscitation treats impaired circulation from hypovolemia. Routine maintenance supplies ordinary water, electrolyte, and limited glucose needs when intake is inadequate. Replacement matches abnormal losses such as gastrointestinal drainage. Redistribution addresses difficult states in which total body water may be high while effective circulating volume is low." },
        { heading: "Understand what the bag becomes", body: "Dextrose 5 percent in water is near isotonic in the bag, but after dextrose is metabolized it behaves as electrolyte-free water. It is not a resuscitation fluid. Isotonic crystalloids expand extracellular volume. Hypertonic saline is a monitored therapy for selected sodium emergencies, not a routine volume replacement." },
        { heading: "Use evidence without pretending one fluid fits every patient", body: "Balanced crystalloids reduce chloride exposure and are reasonable in many settings. Large pragmatic trials have produced mixed outcome results across populations, so solution choice should reflect the indication, electrolyte and acid-base context, brain injury considerations, compatibility, and local protocol. Hydroxyethyl starch solutions should not be used for routine resuscitation." },
        { heading: "Calculate maintenance conservatively", body: "NICE suggests 25 to 30 mL per kilogram per day of water for routine adult maintenance, with lower initial volumes of 20 to 25 mL per kilogram per day for older or frail adults and people with renal impairment, cardiac failure, or refeeding risk. Maintenance is a starting prescription, not a substitute for daily reassessment." },
      ],
      keyPoints: ["Use the Five Rs as a prescribing checklist.", "Stop IV fluid as soon as the need can be met enterally.", "Do not manually add potassium to an IV bag at the bedside.", "Consider ideal body weight and expert review when obesity or complex redistribution makes simple weight-based estimates unreliable."],
      check: { question: "Which prescription most clearly represents routine adult maintenance rather than resuscitation?", choices: ["A daily water and electrolyte plan for a stable patient who cannot drink", "A rapid crystalloid bolus for shock", "Three percent saline for seizure from hyponatremia", "Matched replacement of high-output ostomy losses"], answer: 0, rationale: "Maintenance replaces normal daily requirements in a stable patient, while the other choices serve resuscitation, emergency correction, or replacement purposes.", reviewHref: "#iv-fluid-selection" },
    },
    {
      slug: "sodium-water-disorders",
      title: "Sodium and Water Disorders",
      summary: "The safest sodium plan begins with tonicity and symptoms, then integrates volume status, cause, chronicity, urine studies, and correction trajectory.",
      concepts: ["Hypotonic hyponatremia", "Severe neurologic symptoms", "Hypernatremia and water deficit", "SIADH and diabetes insipidus"],
      visual: "sodium",
      application: "In a sodium emergency, state both the immediate neurologic goal and the maximum acceptable correction trajectory. Measure often enough to detect an unexpected water diuresis before overshoot occurs.",
      lesson: [
        { heading: "Classify hyponatremia in order", body: "Confirm that hyponatremia is hypotonic. Isotonic results may reflect measurement artifact from marked lipids or proteins, while hypertonic hyponatremia may occur with glucose or another effective osmole. For hypotonic hyponatremia, severe symptoms determine urgency and clinical volume status narrows the cause." },
        { heading: "Correct symptoms without creating osmotic injury", body: "European guidance for severe symptomatic hyponatremia targets an initial rise of about 5 mmol/L, then limits the total increase to 10 mmol/L in the first 24 hours and 8 mmol/L in each 24 hours thereafter. People at high risk for osmotic demyelination may require a more conservative ceiling under specialist guidance. An older ceiling above 12 mmol/L per day is not used in this module." },
        { heading: "Treat cause and water balance", body: "Hypovolemic hypotonic hyponatremia often responds to isotonic volume restoration, but the resulting suppression of antidiuretic hormone can accelerate correction. SIADH management begins with the cause, medication review, and fluid restriction when appropriate. Tolvaptan has a narrow labeled role, must be initiated or reinitiated in hospital, and is limited by liver injury risk and other contraindications." },
        { heading: "Approach hypernatremia as a water problem", body: "Assess duration, symptoms, access to water, renal and extrarenal losses, urine concentration, and volume status. Restore circulation first when shock is present, then replace free water gradually with repeated sodium measurements. Central diabetes insipidus may respond to desmopressin. Nephrogenic disease requires removal of the cause and a tailored strategy." },
      ],
      keyPoints: ["A sodium concentration must be interpreted with tonicity.", "Neurologic severity, not the number alone, determines the immediate hyponatremia response.", "Urine output can reveal emerging water diuresis and correction risk.", "Do not combine tolvaptan casually with hypertonic saline."],
      check: { question: "A patient with severe symptomatic hypotonic hyponatremia improves after an initial 5 mmol/L rise. What becomes the central safety priority?", choices: ["Prevent excessive cumulative correction with frequent sodium and urine-output monitoring", "Continue raising sodium without a daily limit", "Switch immediately to free water in every patient", "Ignore the duration of hyponatremia"], answer: 0, rationale: "Once the immediate neurologic goal is achieved, avoiding overcorrection and osmotic demyelination becomes central.", reviewHref: "#sodium-water-disorders" },
    },
    {
      slug: "potassium-disorders",
      title: "Potassium Disorders",
      summary: "Potassium emergencies are electrical and physiologic problems. The serum value, ECG, acid-base state, kidney function, medications, and ongoing shifts all matter.",
      concepts: ["Hypokalemia and magnesium", "ECG toxicity", "Intracellular redistribution", "Definitive potassium removal"],
      visual: "potassium",
      application: "For hyperkalemia, write separate orders for myocardial protection, intracellular shifting, potassium removal, and monitoring. For hypokalemia, identify the loss or shift and correct magnesium when needed.",
      lesson: [
        { heading: "Replace potassium safely", body: "Oral replacement is preferred when the situation is not urgent and the gastrointestinal route is usable. IV potassium is reserved for severe, symptomatic, or otherwise unsuitable cases and must be diluted and delivered by a controlled infusion. Potassium chloride is never administered by IV push. Concentration, access, rate, ECG monitoring, kidney function, and repeat levels follow the product and institutional protocol." },
        { heading: "Look for magnesium and ongoing losses", body: "Hypomagnesemia can promote renal potassium wasting and make hypokalemia difficult to correct. Diuretics, gastrointestinal losses, insulin, beta agonists, alkalosis, and poor intake can contribute through different mechanisms. A fixed claim that every 10 mEq changes serum potassium by exactly 0.1 mEq/L is too imprecise for individual dosing." },
        { heading: "Sequence acute hyperkalemia treatment", body: "When ECG toxicity is present, IV calcium protects the myocardium but does not lower potassium. Insulin with glucose and an inhaled beta agonist shift potassium into cells. Definitive reduction requires urinary, gastrointestinal, or extracorporeal removal. Dialysis is the most reliable rapid removal strategy when kidney failure or refractory severe hyperkalemia is present." },
        { heading: "Know what delayed therapies cannot do", body: "Sodium zirconium cyclosilicate and patiromer can lower potassium over time, but their labels state that they should not be used as emergency monotherapy for life-threatening hyperkalemia because onset is delayed. Sodium bicarbonate is not a universal shifting therapy and is generally considered when clinically important metabolic acidemia is present, with attention to sodium and volume load." },
      ],
      keyPoints: ["Calcium protects the heart but does not remove potassium.", "Every temporary shift needs a plan for rebound and definitive removal.", "Monitor glucose after insulin treatment.", "Do not use a potassium binder as the only treatment for life-threatening hyperkalemia."],
      check: { question: "Which treatment lowers immediate arrhythmic risk from hyperkalemia without lowering the serum potassium concentration?", choices: ["IV calcium", "Insulin with glucose", "Hemodialysis", "A loop diuretic"], answer: 0, rationale: "IV calcium stabilizes cardiac membranes. It does not shift or remove potassium.", reviewHref: "#potassium-disorders" },
    },
    {
      slug: "magnesium-disorders",
      title: "Magnesium Disorders",
      summary: "Magnesium influences neuromuscular function, cardiac repolarization, and potassium handling. Renal function changes both the cause and the safety of treatment.",
      concepts: ["Hypomagnesemia", "Refractory hypokalemia", "IV magnesium safety", "Hypermagnesemia"],
      visual: "magnesium",
      application: "Choose route and intensity by symptoms, concentration, gastrointestinal tolerance, kidney function, and the urgency of associated arrhythmia or electrolyte disturbance.",
      lesson: [
        { heading: "Recognize deficiency and its partners", body: "Diarrhea, malabsorption, alcohol use disorder, proton pump inhibitors, aminoglycosides, cisplatin, and renal wasting can lower magnesium. Deficiency may coexist with hypokalemia and hypocalcemia and can contribute to tremor, weakness, seizures, and ventricular arrhythmia." },
        { heading: "Match replacement to risk", body: "Oral magnesium is reasonable for many stable asymptomatic patients but can worsen diarrhea. IV magnesium is used for severe or symptomatic deficiency and selected arrhythmias. Because magnesium is eliminated by the kidneys, impaired renal function increases the risk of accumulation and requires lower exposure, slower administration, and closer monitoring." },
        { heading: "Treat excess by severity", body: "Hypermagnesemia can cause diminished reflexes, hypotension, bradycardia, respiratory depression, and conduction abnormalities. Stop magnesium sources, give IV calcium for clinically important toxicity, support elimination when kidney function permits, and use dialysis when severe toxicity cannot be cleared." },
      ],
      keyPoints: ["Check magnesium when hypokalemia is difficult to correct.", "Oral products differ in elemental magnesium and gastrointestinal tolerance.", "Renal impairment changes the replacement plan.", "Loss of deep tendon reflexes can signal clinically important magnesium toxicity."],
      check: { question: "Why can aggressive magnesium replacement be hazardous in advanced kidney failure?", choices: ["Reduced renal elimination can cause magnesium accumulation", "Magnesium is eliminated only by the lungs", "Kidney failure always causes severe hypomagnesemia", "IV magnesium cannot affect conduction"], answer: 0, rationale: "The kidneys are the primary route of magnesium elimination, so reduced function increases toxicity risk.", reviewHref: "#magnesium-disorders" },
    },
    {
      slug: "calculations-monitoring",
      title: "Calculations, Administration, and Monitoring",
      summary: "A calculation becomes clinically useful only when units, assumptions, administration constraints, monitoring, and the next decision are explicit.",
      concepts: ["Estimated osmolality", "Weight-based maintenance", "Infusion rate and units", "Reassessment and escalation"],
      visual: "monitoring",
      application: "Show the formula, substitute units, state the result with a sensible precision, and explain what patient-specific factor could invalidate the estimate.",
      lesson: [
        { heading: "Make assumptions visible", body: "Weight-based maintenance is an estimate. Edema, obesity, frailty, kidney failure, cardiac failure, fever, ongoing losses, nutrition support, and oral intake can make a simple result inappropriate. Calculations should support, not replace, a clinical prescription." },
        { heading: "Monitor the effect you intended", body: "A fluid plan should define clinical targets such as perfusion, symptoms, urine output, weight, or correction trajectory and safety targets such as respiratory status, edema, glucose, electrolytes, and kidney function. Reassessment may be measured in minutes during resuscitation and hours or days during stable maintenance." },
        { heading: "Escalate complexity", body: "Seek experienced help for severe sodium abnormalities, shock, complex redistribution, oliguric kidney failure, significant heart or liver disease, dangerous ECG findings, or correction that is moving faster than intended. A safe clinician recognizes when a formula has reached its limits." },
      ],
      keyPoints: ["Carry units through every calculation.", "Round only after the clinical result is understood.", "Every infusion requires a stopping or reassessment point.", "Local protocols and product labeling govern concentration, access, and maximum administration rates."],
      check: { question: "Using 25 mL/kg/day, what is the initial routine maintenance water estimate for a stable 72 kg adult before patient-specific adjustment?", choices: ["1,800 mL/day", "720 mL/day", "2,880 mL/day", "7,200 mL/day"], answer: 0, rationale: "Seventy-two kilograms multiplied by 25 mL/kg/day equals 1,800 mL/day.", reviewHref: "#calculations-monitoring" },
    },
  ],
  references: [
    { label: "NICE CG174: Intravenous fluid therapy in adults", href: "https://www.nice.org.uk/guidance/cg174/chapter/recommendations" },
    { label: "European clinical practice guideline on hyponatremia", href: "https://academic.oup.com/ejendo/article/170/3/G1/6668028" },
    { label: "Society for Endocrinology emergency guidance for severe symptomatic hyponatremia", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5314809/" },
    { label: "KDIGO conference report on acute hyperkalemia", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7448835/" },
    { label: "FDA label: Sodium zirconium cyclosilicate", href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8833d6e6-33ab-4ea9-b78f-3ec30a904ef8" },
    { label: "FDA label: Tolvaptan", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5526617c-c7b9-4556-886d-729bbabbc566" },
    { label: "FDA label: Potassium chloride injection", href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/019904Orig1s025lbl.pdf" },
    { label: "FDA label: Magnesium sulfate injection", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=8c6b8b3d-9c04-4ed7-86b8-89065b6bf50d&type=display" },
  ],
  questionBank: fluidElectrolyteTherapyQuestionBank,
};

// Account for received enteral intake and measured gastric losses.
fluidElectrolyteTherapyModule.submodules.find((lesson) => lesson.slug === "iv-fluid-selection").lesson.push({
  "heading": "Count intake and replace abnormal losses",
  "body": "For a stable hospitalized adult, assess the water and electrolytes actually received from oral intake, tube feeds, prescribed water flushes, medication fluids and other IV sources before adding IV maintenance. Reduce or stop IV fluid when oral or enteral delivery meets the need; starting a feed alone does not establish adequate hydration. A tube used for gastric drainage instead removes fluid: measure the loss, review its composition and adjust the prescription for abnormal losses alongside ordinary maintenance needs. Reassess fluid balance, clinical status, kidney function and electrolyte trends as intake or output changes. These principles do not select one fixed daily volume or an exact replacement solution for every patient."
});
fluidElectrolyteTherapyModule.references.push({
  "label": "NICE CG174 full guidance: adult IV fluids, including December 2025 update",
  "href": "https://www.nice.org.uk/guidance/cg174/resources/intravenous-fluid-therapy-in-adults-in-hospital-pdf-35109752233669"
});

// Source-reviewed fluid physiology and assessment.
Object.assign(fluidElectrolyteTherapyModule.submodules.find((lesson) => lesson.slug === "fluid-physiology-assessment"), {
  "slug": "fluid-physiology-assessment",
  "title": "Fluid Physiology and Assessment",
  "summary": "A serum value describes concentration. A bedside assessment explains perfusion, congestion, losses, and the compartment in which water is moving.",
  "concepts": [
    "Intracellular and extracellular water",
    "Osmolality and effective tonicity",
    "Perfusion versus congestion",
    "Input, output, weight, and trend"
  ],
  "visual": "compartments",
  "application": "Before ordering fluid, name the problem being treated, the evidence supporting it, the expected physiologic response, and the finding that will stop or change the plan.",
  "lesson": [
    {
      "heading": "Locate the water compartments",
      "body": "A useful approximate adult model places about two-thirds of total body water inside cells and one-third outside them. Extracellular water includes interstitial and intravascular water; the small transcellular spaces are omitted from this simplified diagram. These fractions describe a model, not the percentage of body weight that is water or a measurement in this patient. Water moves between compartments according to effective osmotic gradients, while a large interstitial volume does not prove that tissue perfusion is adequate."
    },
    {
      "heading": "Separate concentration from volume",
      "body": "Sodium is primarily a water-balance concentration, not a direct measurement of total body sodium. A patient may be hyponatremic while intravascularly depleted, clinically euvolemic, or edematous. Volume assessment integrates history, examination, urine output, weight, hemodynamics, kidney function, and the direction of change."
    },
    {
      "heading": "Use osmolality to explain water movement",
      "body": "For this lesson, estimate total serum osmolality as 2 x sodium + glucose/18 + BUN/2.8, using sodium in mmol/L and glucose and blood urea nitrogen (BUN) in mg/dL; the result is approximately mOsm/kg. If glucose is already in mmol/L, use that value directly instead of dividing by 18. BUN is not the same as a urea mass concentration. Estimate effective tonicity as 2 x sodium + glucose/18 in these units, leaving out BUN because urea crosses cell membranes readily. With sodium 140 mmol/L, glucose 90 mg/dL and BUN 14 mg/dL, total osmolality is 280 + 5 + 5 = 290 mOsm/kg, while effective tonicity is 285 mOsm/kg. These are estimates, not laboratory measurements; unmeasured osmoles and the laboratory's validated formula can change their interpretation. Extracellular glucose can increase tonicity, draw water out of cells and lower measured sodium."
    },
    {
      "heading": "Treat the trajectory",
      "body": "Combine serial intake and output records with comparable weights, examination and laboratory trends. Review limited intake, gastrointestinal losses, drains, medicines, urine output, edema and kidney function. A discrepancy between the fluid chart and the patient's weight or examination calls for reconciliation, not automatic acceptance of either number. NICE recommends at least daily reassessment of clinical status, urea, creatinine, electrolytes and fluid balance initially during ongoing adult IV therapy, with weight twice weekly; replacement or redistribution problems can need more frequent monitoring, and stable longer-term therapy may need less. A monitoring interval must match the clinical situation."
    },
    {
      "heading": "Assess perfusion alongside congestion",
      "body": "Examine pulse, blood pressure, capillary refill, peripheral temperature, jugular venous pressure and pulmonary or peripheral edema. Cold extremities or delayed capillary refill may support circulatory compromise, but no isolated sign establishes the full diagnosis or the correct fluid dose. Edema and reduced effective circulating volume can coexist. Document the clinical purpose, expected response and signs of harm, then reassess; do not prescribe a bolus from sodium, edema or a low albumin value alone."
    },
    {
      "heading": "Investigate a measured-to-calculated gap",
      "body": "The osmolal gap is measured serum osmolality minus the calculated estimate. Compare measurements from the same sample and verify the units and the laboratory's calculation method. An unexpected positive gap can reflect substances omitted from that formula, but it does not identify a particular substance, prove SIADH or directly measure volume depletion. Review exposures and the clinical and acid-base findings. A low calculated value alone does not exclude an unmeasured effective osmole; measured osmolality below 275 mOsm/kg in a hyponatremic patient establishes hypotonicity."
    },
    {
      "heading": "Watch for an unexpected water diuresis",
      "body": "During treatment of hyponatremia, a sudden increase in dilute urine output may accelerate the sodium rise even after a saline infusion stops. Restoration of circulating volume can suppress vasopressin and increase free-water clearance. Track urine output with serial sodium measurements and urgently reassess an unexpectedly rapid rise under the applicable correction protocol. Urine output is an early warning, not a substitute for measuring sodium or a reason to normalize it rapidly."
    }
  ],
  "keyPoints": [
    "Do not infer volume status from sodium alone.",
    "Distinguish measured osmolality from calculated osmolality and effective tonicity.",
    "Document the indication for fluid and the response target before administration."
  ],
  "check": {
    "question": "A patient with decompensated heart failure has edema, sodium 128 mmol/L and measured serum osmolality 260 mOsm/kg. Which interpretation is best?",
    "choices": [
      "The patient may have hypervolemic hypotonic hyponatremia",
      "The low sodium proves total body sodium depletion",
      "Edema excludes a water-balance disorder",
      "Serum sodium directly measures intravascular volume"
    ],
    "answer": 0,
    "rationale": "The low measured osmolality establishes hypotonicity. Heart failure with edema is compatible with hypervolemic hyponatremia, in which water retention is proportionally greater than sodium retention. Serum sodium is a concentration; it neither directly measures total body sodium nor establishes effective circulating volume.",
    "reviewHref": "#fluid-physiology-assessment"
  }
});
fluidElectrolyteTherapyModule.references.push(...[
  {
    "label": "ADA/EASD 2024 hyperglycemic-crisis consensus: total and effective osmolality formulas",
    "href": "https://link.springer.com/article/10.1007/s00125-024-06183-8"
  },
  {
    "label": "Asim et al. 2019: body fluid compartments and volume depletion",
    "href": "https://www.wjgnet.com/2220-6124/full/v8/i1/23.htm"
  },
  {
    "label": "University of Iowa clinical laboratory: osmolal-gap calculation and interpretation",
    "href": "https://www.healthcare.uiowa.edu/path_handbook/appendix/chem/osmo_gap.html"
  }
]);

// Source-reconciled IV fluid selection lesson.
Object.assign(fluidElectrolyteTherapyModule.submodules.find(s => s.slug === "iv-fluid-selection"), {
  "slug": "iv-fluid-selection",
  "title": "IV Fluid Selection and the Five Rs",
  "summary": "The correct fluid depends on the job. Resuscitation, routine maintenance, replacement, redistribution, and reassessment require different prescriptions.",
  "concepts": [
    "Crystalloids and albumin",
    "Resuscitation versus maintenance",
    "Ongoing loss replacement",
    "Balanced solutions and saline"
  ],
  "visual": "fluids",
  "application": "Use IV fluid only when oral or enteral routes cannot meet the need. Specify the type, rate, volume, duration, monitoring plan, and stopping rule.",
  "lesson": [
    {
      "heading": "Name the indication",
      "body": "Use all Five Rs: resuscitation, routine maintenance, replacement, redistribution and reassessment. Resuscitation treats impaired circulation from hypovolemia. Routine maintenance supplies ordinary water, electrolyte and limited glucose needs when intake is inadequate. Replacement matches abnormal losses such as gastrointestinal drainage. Redistribution addresses complex states in which edema can coexist with reduced effective circulation. Reassessment closes the loop: decide whether the treatment helped, caused harm or is still needed. Oral or enteral delivery is preferred when it can meet the requirement."
    },
    {
      "heading": "Understand what the bag becomes",
      "body": "Dextrose 5 percent in water (D5W) contains 50 g of dextrose per liter. The reviewed Baxter label gives a calculated osmolarity of 252 mOsm/L; after glucose metabolism, the solution behaves physiologically as electrolyte-free water. It supplies water and limited calories, but no sodium, potassium or chloride replacement, and does not provide durable intravascular expansion for resuscitation. Dextrose combined with saline is a different formulation: read both components. Isotonic electrolyte crystalloids primarily expand extracellular volume. Hypertonic saline serves selected monitored sodium emergencies rather than routine volume replacement."
    },
    {
      "heading": "Use evidence without pretending one fluid fits every patient",
      "body": "The 2024 ESICM guideline conditionally favors balanced crystalloids over isotonic saline for volume expansion in adult critically ill patients in general, with low certainty of evidence. This does not establish improvement in every outcome or every population. Composition, electrolyte and acid-base findings, brain injury, compatibility, availability and the local protocol still matter. Balanced fluid may be prioritized when large volumes or hyperchloremia/acidosis are concerns; saline can be appropriate when balanced fluid is unavailable or when hypochloremia or metabolic alkalosis informs the choice. These recommendations concern volume expansion, not the complete maintenance prescription."
    },
    {
      "heading": "Calculate maintenance conservatively",
      "body": "For routine adult maintenance alone, NICE CG174 suggests an initial water allowance of 25 to 30 mL/kg/day. A stable 70 kg adult without abnormal losses has an estimated total daily water requirement of 1,750 to 2,100 mL, before counting water already received by other routes. Consider 20 to 25 mL/kg/day for older or frail patients, renal impairment, cardiac failure or refeeding risk: at 60 kg this is 1,200 to 1,500 mL/day. In obesity, NICE uses ideal body weight and the lower end of the range, with expert advice for BMI above 40 kg/m². These estimates address maintenance alone; acute resuscitation and abnormal losses require separate assessment."
    },
    {
      "heading": "Count intake and replace abnormal losses",
      "body": "For a stable hospitalized adult, assess the water and electrolytes actually received from oral intake, tube feeds, prescribed water flushes, medication fluids and other IV sources before adding IV maintenance. Reduce or stop IV fluid when oral or enteral delivery meets the need; starting a feed alone does not establish adequate hydration. A tube used for gastric drainage instead removes fluid: measure the loss, review its composition and adjust the prescription for abnormal losses alongside ordinary maintenance needs. Reassess fluid balance, clinical status, kidney function and electrolyte trends as intake or output changes. These principles do not select one fixed daily volume or an exact replacement solution for every patient."
    },
    {
      "heading": "Plan electrolytes and limited glucose separately",
      "body": "NICE's initial maintenance framework includes approximately 1 mmol/kg/day each of sodium, potassium and chloride, plus 50 to 100 g/day of glucose to limit starvation ketosis. That glucose amount does not meet nutritional needs. For a 70 kg adult, the initial electrolyte estimate is about 70 mmol/day of each, before clinical adjustment and all other intake are counted. Do not infer that one bag automatically supplies the whole prescription. Use available prepared electrolyte-containing solutions and the authorized pharmacy process; do not manually add potassium at the bedside. Kidney function, laboratory trends and available products govern the final plan."
    },
    {
      "heading": "Compare composition rather than bag names",
      "body": "Normal saline contains sodium and chloride at 154 mmol/L each. Large-volume administration can contribute to hyperchloremic metabolic acidosis. Balanced crystalloids replace some chloride with other anions, such as lactate, acetate or gluconate, and differ in potassium, calcium and magnesium content. Lactated Ringer's contains potassium and calcium as well as sodium, chloride and lactate; lactate metabolism can provide an alkalinizing effect. Verify the actual formulation and label for electrolyte content, contraindications and compatibility. Balanced products are not interchangeable, and lower chloride does not make any volume harmless."
    },
    {
      "heading": "Distinguish colloid expansion from a clinical indication",
      "body": "The book distinguishes small-solute crystalloids from protein or starch colloids, which exert oncotic effects and generally produce greater intravascular expansion for a given volume. Greater expansion does not itself establish better clinical outcomes. Albumin has selected indications, including some cirrhosis-related circumstances; low serum albumin or edema alone does not select an infusion, and albumin is not nutritional supplementation. Hydroxyethyl starch carries FDA boxed warnings for mortality, kidney injury and excess bleeding. FDA directs that it should not be used unless adequate alternative treatment is unavailable; it is not a routine resuscitation choice."
    },
    {
      "heading": "Match a bolus recommendation to its population",
      "body": "NICE CG174 retains a general adult resuscitation recommendation for a crystalloid containing sodium 130 to 154 mmol/L, 500 mL over less than 15 minutes. It directs suspected sepsis to separate guidance. In NICE NG253 for people aged 16 or over who are not pregnant or recently pregnant, high-risk suspected sepsis warrants a prompt IV bolus unless contraindicated. For those needing fluid resuscitation, use an isotonic balanced electrolyte crystalloid, or 0.9 percent saline if balanced fluid is unavailable, starting with 250 mL ideally over 10 to 15 minutes. Reassess after each bolus; further 250 mL boluses may be given if needed up to 1,000 mL total, including prior fluids. If improvement remains insufficient after that total, obtain senior clinical advice. The total is not a requirement to give fluid despite harm. Apply the appropriate local emergency protocol and monitor during treatment."
    },
    {
      "heading": "Keep the book calculation in its stated setting",
      "body": "The book's PN fluid estimate for weight above 20 kg is 1,500 mL/day + 20 mL/kg/day x (weight in kg − 20 kg), using total body weight unless specified otherwise. At 70 kg it gives 2,500 mL/day. Its alternative adult estimate is 30 to 40 mL/kg/day, with adjustment for fluid accumulation and medication volumes. NICE's routine adult IV maintenance range gives 1,750 to 2,100 mL/day at the same weight. Name the method and setting rather than treating these different starting estimates as interchangeable mandates. Tailor delivery to the patient and count all sources. For example, a specified total water target of 1,750 mL/day minus 800 mL of oral water and 450 mL of medication fluid leaves 500 mL for an IV water allowance, before a separate electrolyte plan and any loss adjustments."
    },
    {
      "heading": "Treat brain injury as a separate fluid context",
      "body": "For volume expansion in adult critically ill patients with traumatic brain injury, ESICM conditionally suggests isotonic saline rather than balanced crystalloids or albumin, with very low certainty of evidence. The guideline advises avoiding more hypotonic balanced fluids such as Ringer's lactate in this context. Do not transfer a general balanced-fluid preference to every patient with brain injury, or use D5W for extracellular volume support. This volume-expansion decision does not itself establish an indication or regimen for hypertonic saline; follow the neurocritical care assessment and protocol."
    },
    {
      "heading": "Write and reassess a complete prescription",
      "body": "Document the indication, solution, rate, total volume, duration, expected response, monitoring and stopping rule, with a 24-hour management plan. During resuscitation, repeatedly assess circulation and signs of benefit or harm. New dyspnea or crackles during an infusion require stopping and urgent reassessment for possible fluid-related harm rather than reflexively completing the bag. Initially, ongoing adult IV therapy needs at least daily clinical, kidney-function, electrolyte and fluid-balance reassessment; monitoring is more frequent when the patient or losses are unstable. With chloride-rich fluids, review chloride and acid-base trends and revise the prescription when necessary. Stop unnecessary IV fluid when oral or enteral intake meets the need."
    }
  ],
  "keyPoints": [
    "Use the Five Rs as a prescribing checklist.",
    "Stop IV fluid as soon as the need can be met enterally.",
    "Do not manually add potassium to an IV bag at the bedside.",
    "Consider ideal body weight and expert review when obesity or complex redistribution makes simple weight-based estimates unreliable."
  ],
  "check": {
    "question": "Which prescription most clearly represents routine adult maintenance rather than resuscitation?",
    "choices": [
      "A daily water and electrolyte plan for a stable patient who cannot drink",
      "A rapid crystalloid bolus for shock",
      "Three percent saline for seizure from hyponatremia",
      "Matched replacement of high-output ostomy losses"
    ],
    "answer": 0,
    "rationale": "Maintenance replaces normal daily requirements in a stable patient, while the other choices serve resuscitation, emergency correction, or replacement purposes.",
    "reviewHref": "#iv-fluid-selection"
  }
});
fluidElectrolyteTherapyModule.references.push(...[
  {
    "label": "ESICM 2024 fluid guideline, Part 1: resuscitation fluid choice",
    "href": "https://link.springer.com/article/10.1007/s00134-024-07369-9"
  },
  {
    "label": "NICE NG253: adult suspected-sepsis IV fluid recommendations",
    "href": "https://www.nice.org.uk/guidance/ng253/chapter/managing-suspected-sepsis"
  },
  {
    "label": "FDA safety communication: hydroxyethyl starch",
    "href": "https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/labeling-changes-mortality-kidney-injury-and-excess-bleeding-hydroxyethyl-starch-products"
  },
  {
    "label": "FDA-approved Baxter 5% dextrose label",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=36e9478c-5df0-4b47-b97d-de3626d7cb29"
  },
  {
    "label": "FDA-approved B. Braun lactated Ringer’s label",
    "href": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f6d82772-638c-4584-b9d3-8833669f5963"
  }
]);

// Source-reconciled sodium and water disorders lesson.
Object.assign(fluidElectrolyteTherapyModule.submodules.find(s => s.slug === "sodium-water-disorders"), {
  "slug": "sodium-water-disorders",
  "title": "Sodium and Water Disorders",
  "summary": "The safest sodium plan begins with tonicity and symptoms, then integrates volume status, cause, chronicity, urine studies, and correction trajectory.",
  "concepts": [
    "Hypotonic hyponatremia",
    "Severe neurologic symptoms",
    "Hypernatremia and water deficit",
    "SIADH and diabetes insipidus"
  ],
  "visual": "sodium",
  "application": "In a sodium emergency, state both the immediate neurologic goal and the maximum acceptable correction trajectory. Measure often enough to detect an unexpected water diuresis before overshoot occurs.",
  "lesson": [
    {
      "heading": "Recognize urgency while confirming tonicity",
      "body": "Hyponatremia means serum sodium below 135 mmol/L; the number alone does not identify its mechanism or urgency. Check glucose and measured serum osmolality, and consider other effective osmoles. Marked lipid or protein concentrations can cause pseudohyponatremia with some laboratory methods; hyperglycemia can cause a water shift with non-hypotonic hyponatremia. A measured osmolality below 275 mOsm/kg confirms hypotonicity, but a higher total osmolality does not by itself exclude low effective tonicity when ineffective osmoles such as urea are present. Severe neurologic symptoms plausibly attributable to hypotonic hyponatremia require immediate monitored treatment while testing proceeds. Do not wait for the complete etiologic workup."
    },
    {
      "heading": "Use urine studies with the clinical assessment",
      "body": "For hypotonic hyponatremia, obtain contemporaneous serum and spot urine samples when feasible. The European diagnostic approach starts with urine osmolality: 100 mOsm/kg or less suggests excess water intake relative to solute, including low-solute intake. When urine osmolality exceeds 100, interpret urine sodium alongside circulation, extracellular volume, medications and kidney function. Urine sodium 30 mmol/L or less supports low effective arterial volume; edema in heart failure or cirrhosis can coexist with this state. A value above 30 does not establish SIADH. Diuretics and kidney disease can confound the result, and clinical volume assessment alone can misclassify patients. Emergency symptom treatment takes priority over this diagnostic sequence."
    },
    {
      "heading": "Establish an SIADH pattern by exclusion",
      "body": "SIADH, also termed SIAD, involves persistent antidiuresis despite hypotonicity. The European criteria include effective serum osmolality below 275 mOsm/kg, urine osmolality above 100, clinical euvolemia and urine sodium above 30 mmol/L with usual salt and water intake. Exclude adrenal, thyroid, pituitary and renal insufficiency and recent diuretic use before assigning the diagnosis. Review pulmonary and central nervous system disorders, malignancy and implicated medicines, such as SSRIs or carbamazepine. Urine concentration alone is insufficient: hypovolemia also stimulates vasopressin, and adrenal insufficiency can resemble SIADH."
    },
    {
      "heading": "Relieve severe symptoms with a limited initial rise",
      "body": "Seizures, coma or other severe symptoms attributable to hypotonic hyponatremia call for urgent monitored hypertonic saline under an emergency protocol. The European guideline uses 150 mL of 3 percent saline over 20 minutes, checking sodium after the bolus and repeating with reassessment until an initial rise of about 5 mmol/L is achieved. Its advice includes considering weight-based volume in markedly different body composition. The immediate aim is to reduce dangerous cerebral edema, not to normalize sodium in an hour. If symptoms improve after this initial rise, stop the hypertonic infusion and move to cause-specific care and prevention of excessive cumulative correction. Persistent symptoms require expert reassessment of treatment and alternative causes."
    },
    {
      "heading": "Count the initial rise within the daily limit",
      "body": "European guidance limits the total rise to 10 mmol/L during the first 24 hours and 8 mmol/L during each 24 hours thereafter in the relevant moderate or profound hyponatremia settings. The initial symptom-relieving rise counts toward the total; it is not a separate allowance. For example, sodium 116 to 121 mmol/L is already a 5 mmol/L rise. Under that first-day ceiling, 126 mmol/L would represent the total 10 mmol/L increase, not a target that must be reached. Treat unknown duration cautiously as chronic unless evidence supports an acute process. Record the starting sodium, timestamps, cumulative change and risk-specific limits, and aim below the ceiling to allow for measurement uncertainty and unexpected water losses."
    },
    {
      "heading": "Use a stricter plan for high demyelination risk",
      "body": "The US/Irish expert recommendations discussed by Sterns and colleagues use a maximum rise of 8 mmol/L in any 24 hours for patients at high risk of osmotic demyelination, with a daily goal of 4 to 6 mmol/L. Risk factors include sodium 105 mmol/L or lower, alcohol use disorder, severe hypokalemia, malnutrition and advanced liver disease. A normal neurologic examination does not remove these risks. A high-risk patient whose sodium rises from 108 to 114 has already increased by 6 mmol/L; further rise is not required to reach the ceiling. These risk-specific recommendations are more conservative than the general European first-day limit. A label warning about rises above 12 mmol/L/day is not permission to target 12 in a vulnerable patient."
    },
    {
      "heading": "Detect water diuresis before correction overshoots",
      "body": "Restoring circulation in hypovolemic hyponatremia can suppress the non-osmotic vasopressin stimulus and abruptly increase electrolyte-free water excretion. Sodium may then rise faster than predicted from the saline dose. Follow urine output, fluid balance, sodium and neurologic status throughout correction; potassium replacement also contributes to sodium correction and must be considered. The European guideline flags a sudden urine-output increase above 100 mL/hour and advises sodium checks every 2 hours until stable in this situation. If correction exceeds the applicable limit, stop the active correction and obtain urgent expert guidance. Carefully monitored electrolyte-free water and/or desmopressin may be used to prevent or reverse overshoot; they are not automatic treatment for every initial 5 mmol/L rise."
    },
    {
      "heading": "Match longer-term hyponatremia treatment to the cause",
      "body": "Hypovolemic hypotonic hyponatremia generally requires isotonic volume restoration; unstable circulation requires immediate resuscitation with close biochemical monitoring. For chronic SIADH without severe symptoms, address the cause, withdraw contributing treatment when feasible and consider fluid restriction. The European guideline lists urea or low-dose loop diuretic plus oral sodium chloride as possible second-line choices, with low-certainty recommendations. The book describes off-label demeclocycline, but the European guideline recommends against demeclocycline and lithium in moderate or profound SIADH. Expanded-volume states need management of the underlying disease and congestion. Do not treat every low sodium with saline, salt tablets or water restriction without identifying the physiology."
    },
    {
      "heading": "Separate a vaptan indication from a routine preference",
      "body": "Vaptans increase electrolyte-free water excretion by opposing vasopressin activity: oral tolvaptan blocks V2 receptors, while IV conivaptan blocks V1a and V2 receptors. US labels allow selected euvolemic or hypervolemic hyponatremia treatment, whereas the European guideline advises against vaptans in its moderate or profound SIADH and expanded-volume recommendations. An approved indication does not establish a preferred treatment for every patient or a proven symptomatic benefit. Both drugs can cause rapid correction, thirst and volume depletion, and are unsuitable for hypovolemic hyponatremia. Choose only within the applicable label, clinical guidance and specialist plan; tolvaptan must not replace urgent hypertonic saline for serious neurologic symptoms."
    },
    {
      "heading": "Apply the SAMSCA safeguards",
      "body": "SAMSCA is labeled for clinically significant euvolemic or hypervolemic hyponatremia: sodium below 125 mEq/L, or less marked symptomatic hyponatremia that has resisted fluid restriction. Initiate and reinitiate only in hospital with close monitoring. The labeled starting dose is 15 mg once daily; titration to 30 mg requires at least 24 hours, with a maximum of 60 mg/day. Limit treatment to 30 days and avoid underlying liver disease, including cirrhosis. Avoid fluid restriction in the first 24 hours and allow drinking in response to thirst. Contraindications include inability to sense or respond to thirst, hypovolemic hyponatremia, anuria and strong CYP3A inhibitors. Concomitant hypertonic saline is not recommended; review other interactions, including moderate CYP3A inhibitors and V2 agonists such as desmopressin. Use at CrCl below 10 mL/min is not recommended."
    },
    {
      "heading": "Apply the distinct VAPRISOL regimen",
      "body": "The manufacturer-linked VAPRISOL label describes hospital IV treatment starting with conivaptan 20 mg over 30 minutes, then 20 mg/day by continuous infusion; after the first day the infusion may increase to 40 mg/day. Infusion after the loading dose must not exceed 4 days. Moderate or severe hepatic impairment uses a lower 10 mg loading dose and 10 mg/day, titratable to 20 mg/day. Severe renal impairment with CrCl below 30 mL/min is not recommended; mild or moderate impairment does not require adjustment. Hypovolemic hyponatremia, potent CYP3A inhibitors and anuria are contraindications. Use a large vein, change the infusion site every 24 hours and monitor sodium, circulation and infusion reactions. Stop for hypovolemia, hypotension or an undesirable correction rate. Its regimen and renal threshold are not interchangeable with SAMSCA."
    },
    {
      "heading": "Stabilize hypernatremia and identify the balance problem",
      "body": "Hypernatremia means sodium above 145 mmol/L and reflects water deficit relative to sodium, caused by water loss, inadequate water access or hypertonic sodium gain. Review duration, symptoms, intake, fever, gastrointestinal losses, urine volume and concentration, medicines and volume status. Shock or hypotension requires isotonic saline or an appropriate balanced crystalloid to restore circulation before a controlled free-water plan. Once stable, oral or enteral water when feasible, or a suitable hypotonic IV solution, can address the deficit. A saline-containing solution supplies less free water than an equal volume of D5W. Hypervolemic sodium gain needs a plan for both water replacement and sodium removal rather than automatic additional isotonic fluid."
    },
    {
      "heading": "Estimate water deficit without turning it into an order",
      "body": "A starting estimate is water deficit in liters = estimated total body water in liters x (serum sodium / 140 − 1). Total body water fractions vary with age, sex, body composition and water depletion; state the fraction used. In a specified 70 kg example using 0.50, total body water is 35 L. At sodium 154 mmol/L, 35 x (154/140 − 1) = 3.5 L. This estimates the positive water balance needed to reach 140 under simplifying assumptions, not a command to deliver 3.5 L immediately. Account for ongoing renal, gastrointestinal and insensible losses, current intake, electrolyte replacement and the chosen correction schedule. Repeated sodium measurements and fluid reassessment are essential because the estimate cannot predict all changes."
    },
    {
      "heading": "Tailor hypernatremia correction to duration and evidence",
      "body": "Chronic or unknown-duration hypernatremia is traditionally lowered cautiously, commonly below 0.5 mmol/L/hour and about 12 mmol/L/day, as described in the 2023 clinical review. Much of the neurologic rationale comes from pediatric data, and the optimal adult rate remains uncertain. Adult observational studies have reported different outcome associations; the 2025 Kidney360 cohort explicitly cannot establish causation or an optimal treatment rate. Do not claim that faster correction is universally safe or that one numerical ceiling guarantees safety. Document a monitored, patient-specific plan that avoids both uncontrolled rapid change and ineffective prolonged correction. Acute symptomatic sodium loading is a distinct specialist emergency and should not be treated by applying a chronic protocol automatically."
    },
    {
      "heading": "Distinguish vasopressin deficiency from renal resistance",
      "body": "Hypernatremia with polyuria and inappropriately dilute urine suggests a water diuresis such as diabetes insipidus. Central disease reflects vasopressin deficiency and generally responds to desmopressin; nephrogenic disease reflects renal resistance. A substantial rise in urine osmolality after supervised desmopressin supports central disease, but partial disorders and osmotic diuresis can complicate interpretation. Evaluate glucose, urine studies, potassium, calcium and implicated medicines rather than diagnosing from sodium alone. Nephrogenic treatment includes addressing causes such as lithium exposure and electrolyte abnormalities, with a tailored specialist regimen. Desmopressin and water replacement in central disease require sodium, intake and urine-output monitoring to avoid switching from water loss to excess water retention."
    }
  ],
  "keyPoints": [
    "Urgent symptom treatment and diagnostic testing proceed together.",
    "The initial sodium rise counts within the risk-specific daily correction limit.",
    "New water diuresis can cause overshoot even after an appropriate saline prescription.",
    "Vaptan labels and clinical guideline preferences have different scopes.",
    "A water-deficit estimate needs an ongoing-loss and monitoring plan."
  ],
  "check": {
    "question": "An adult with severe symptomatic hypotonic hyponatremia improves as sodium rises from 116 to 121 mmol/L. The clinician is using the European first-day 10 mmol/L limit and has assessed additional risk factors. What is the next safety priority?",
    "choices": [
      "Stop the hypertonic infusion after symptom improvement and monitor the cumulative rise, urine output and cause-specific plan",
      "Treat 121 as a new baseline and permit a further 10 mmol/L rise in the same first 24 hours",
      "Continue hypertonic saline until 135 mmol/L because symptoms have improved",
      "Automatically give desmopressin and D5W after any 5 mmol/L rise regardless of trajectory"
    ],
    "answer": 0,
    "rationale": "The initial rise is 121 − 116 = 5 mmol/L and counts toward the first-day limit. After symptom improvement, European guidance stops the hypertonic infusion and shifts to cause-specific care and close monitoring. Resetting the baseline or normalizing immediately could cause excessive correction. Relowering measures require a risk- and trajectory-based expert decision; a 5 mmol/L initial response alone does not mandate them.",
    "reviewHref": "#sodium-water-disorders"
  }
});
fluidElectrolyteTherapyModule.references.push(...[
  {
    "label": "Sterns et al. 2024: hyponatremia correction limits and high-risk safeguards",
    "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10843202/"
  },
  {
    "label": "European 2014 hyponatremia guideline: published correction",
    "href": "https://academic.oup.com/ejendo/article/171/1/X1/6661472"
  },
  {
    "label": "VAPRISOL full prescribing information, manufacturer-linked September 2017 label",
    "href": "https://www.vaprisol.com/pdf/vaprisol-pi-sept2017.pdf"
  },
  {
    "label": "Yun et al. 2023: evaluation and management of adult hypernatremia",
    "href": "https://www.kjim.org/journal/view.php?doi=10.3904/kjim.2022.346"
  },
  {
    "label": "Chacon-Palma et al. 2025: observational hypernatremia correction outcomes",
    "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12407122/"
  }
]);
