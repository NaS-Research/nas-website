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
