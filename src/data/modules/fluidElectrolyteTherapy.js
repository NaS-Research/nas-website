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

// Source-reconciled potassium disorders lesson.
Object.assign(fluidElectrolyteTherapyModule.submodules.find(s => s.slug === "potassium-disorders"), {
  "slug": "potassium-disorders",
  "title": "Potassium Disorders",
  "summary": "Potassium emergencies are electrical and physiologic problems. The serum value, ECG, acid-base state, kidney function, medications, and ongoing shifts all matter.",
  "concepts": [
    "Hypokalemia and magnesium",
    "ECG toxicity",
    "Intracellular redistribution",
    "Definitive potassium removal"
  ],
  "visual": "potassium",
  "application": "For hyperkalemia, write separate orders for myocardial protection, intracellular shifting, potassium removal, and monitoring. For hypokalemia, identify the loss or shift and correct magnesium when needed.",
  "lesson": [
    {
      "heading": "Separate concentration, stores and distribution",
      "body": "Hypokalemia is serum potassium below 3.5 mEq/L. A low concentration can reflect potassium depletion, movement into cells or both. Gastrointestinal loss, renal wasting and insufficient intake differ from the intracellular shifts caused by insulin or beta agonists. Interpret potassium with symptoms, ECG, glucose, acid-base status, kidney function and medicines. A deficit estimate or the familiar 10 mEq for a 0.1 mEq/L rise is an approximation: ongoing losses, changing distribution and renal elimination make the individual response variable. Repeat measurements guide replacement."
    },
    {
      "heading": "Investigate persistent hypokalemia",
      "body": "Check magnesium when potassium remains low despite replacement. Magnesium depletion can aggravate renal potassium wasting, so potassium alone may not correct the problem. Replace deficient magnesium as part of the plan while continuing urgent potassium care when indicated. Review diarrhea, vomiting, diuretics, amphotericin and recent insulin or beta-agonist treatment. Urinary potassium assessment and acid-base findings help distinguish renal wasting from gastrointestinal loss or redistribution. Treat the cause and account for ongoing losses rather than repeatedly escalating a fixed replacement schedule."
    },
    {
      "heading": "Match oral potassium to the actual formulation",
      "body": "Oral replacement is generally preferred when the patient is stable and can use the gastrointestinal route. The reviewed Upsher-Smith 8 and 10 mEq extended-release tablets have a typical treatment range of 40 to 100 mEq/day, divided so no dose exceeds 40 mEq; prophylaxis is typically 20 mEq/day. These are product instructions, not a universal schedule. Take these tablets whole with a meal and liquid; do not crush, chew or suck them. Solid potassium can injure the gastrointestinal tract: consider a liquid formulation for significant swallowing or motility problems. This label directs IV replacement below 2.5 mEq/L and contraindicates concomitant amiloride or triamterene."
    },
    {
      "heading": "Distinguish an IV concentrate from a ready-to-use bag",
      "body": "Potassium chloride must never be given by IV push. The Hospira 2 mEq/mL concentrate requires dilution and complete mixing before infusion; undiluted injection can cause fatal arrhythmia or cardiac arrest. The reviewed ICU Medical 100 to 400 mEq/L bags are specifically labeled ready to use with a calibrated infusion device. Their existence does not authorize injecting the vial concentrate directly. The bag label recommends central administration whenever possible and requires central access for its 300 and 400 mEq/L concentrations. Verify the product, access, prescribed concentration, rate, ECG monitoring and repeat testing before administration. Renal failure or potassium retention can be labeled contraindications; obtain product-specific clinical review."
    },
    {
      "heading": "Calculate both infusion concentration and potassium rate",
      "body": "For routine use when potassium exceeds 2.5 mEq/L, the reviewed concentrate label gives a ceiling of 10 mEq/hour and 40 mEq/L after dilution. Ready-to-use products have separate concentration and access instructions. For a specified bag containing 40 mEq in 100 mL, concentration is 400 mEq/L; at 50 mL/hour it delivers 20 mEq/hour. Correct arithmetic alone does not make that order appropriate: the reviewed bag requires central access and monitoring, and the rate exceeds its usual 10 mEq/hour limit. Rare urgent label exceptions for profound hypokalemia require specialist care, continuous ECG and frequent potassium measurements. Never apply them as routine peripheral replacement."
    },
    {
      "heading": "Confirm a high result while assessing urgency",
      "body": "A hemolyzed or poorly handled sample can produce a falsely elevated potassium result. If the value conflicts with the clinical picture, arrange a prompt, carefully collected repeat and discuss laboratory confirmation. A normal ECG does not exclude severe hyperkalemia. Evaluate the concentration and rate of rise alongside perfusion, symptoms, kidney function and potassium exposure. UK Kidney Association guidance calls for an urgent ECG at 6.0 mmol/L or above in hospitalized adults and continuous monitoring in severe disease or other high-risk circumstances. Suspected hyperkalemic arrhythmia requires emergency treatment while confirmation proceeds; repeating a sample must not delay rescue."
    },
    {
      "heading": "Protect the heart when ECG toxicity is present",
      "body": "IV calcium antagonizes hyperkalemic cardiac toxicity; it neither lowers serum potassium nor removes potassium from the body. The July 2026 UK Kidney Association update retains a suggestion to give calcium for hyperkalemic ECG changes, while downgrading the evidence grade to 2C. Clinical outcome evidence is limited, so do not describe a guaranteed mortality benefit. Use the local emergency protocol to select the calcium salt, dose, secure access and ECG reassessment. A normal ECG in moderate hyperkalemia does not automatically warrant calcium. Shifting and removal treatment must address the potassium itself."
    },
    {
      "heading": "Shift potassium and prevent insulin-related hypoglycemia",
      "body": "Insulin moves potassium into cells temporarily; glucose reduces the associated hypoglycemia risk. In the cited UK adult protocol, severe hyperkalemia is treated with 10 units soluble insulin in 25 g glucose by IV infusion, with a suggestion for moderate disease. When pretreatment glucose is below 7.0 mmol/L, that protocol follows treatment with 10 percent glucose at 50 mL/hour for five hours. Check the local regimen and pretreatment glucose rather than treating this as a universal order. Nebulized albuterol, called salbutamol in UK guidance, is an adjunct; it is not adequate monotherapy for severe hyperkalemia."
    },
    {
      "heading": "Use bicarbonate for a specific acid-base indication",
      "body": "Metabolic acidemia can make bicarbonate a physiologically reasonable adjunct, but it is not a reliable universal potassium-shifting treatment. UK guidance advises against routine IV bicarbonate for acute hyperkalemia. Consider the cause and severity of acidemia, sodium and volume burden, and the patient’s ability to tolerate treatment. Its use does not replace indicated cardiac protection, insulin-based shifting or definitive potassium removal. Metabolic alkalosis or a normal acid-base state does not justify giving bicarbonate automatically for an elevated potassium."
    },
    {
      "heading": "Plan removal before temporary shifts wear off",
      "body": "Insulin and beta agonists redistribute potassium without reducing total stores. Removal requires urinary excretion, gastrointestinal elimination or dialysis. A loop diuretic depends on kidney function and urine production; an anuric patient cannot be expected to excrete potassium simply because furosemide is prescribed. Severe persistent hyperkalemia with kidney failure needs urgent nephrology or critical-care assessment for renal replacement therapy. Continue indicated emergency medical treatment while dialysis is arranged. Reassess after treatment because redistribution can wear off and potassium can rebound."
    },
    {
      "heading": "Distinguish binder labeling from an emergency pathway",
      "body": "The U.S. LOKELMA and VELTASSA labels explicitly exclude emergency treatment of life-threatening hyperkalemia because onset is delayed. This limitation is broader than merely saying not to use them alone. UK guidance includes selected binders alongside other treatments in its acute pathway; that recommendation does not change U.S. labeling. Do not substitute an oral binder for urgent cardiac assessment, indicated stabilization, rapid shifting and timely dialysis assessment. State the jurisdiction and protocol when discussing an adjunctive acute role."
    },
    {
      "heading": "Apply LOKELMA dosing and sodium precautions",
      "body": "For adults not using the chronic hemodialysis schedule, the reviewed U.S. LOKELMA label starts at 10 g three times daily for up to 48 hours, then recommends 10 g daily for continued treatment. Maintenance titration uses 5 g increments at intervals of at least a week; the range is 5 g every other day to 15 g daily. Chronic hemodialysis uses a distinct non-dialysis-day regimen. Each 5 g contains about 400 mg sodium, with uncertain absorption, so monitor edema and fluid status. Avoid use in severe constipation or obstruction. Generally separate other oral medicines by two hours; the label provides a pH-dependent-solubility exception."
    },
    {
      "heading": "Apply VELTASSA dosing and magnesium precautions",
      "body": "The reviewed U.S. VELTASSA label covers adults and patients aged 12 years or older. Adults start at 8.4 g daily and titrate in 8.4 g increments at intervals of at least a week, to a maximum 25.2 g daily. The adolescent starting dose and increments are 4 g, with the same maximum. Prepare a suspension; do not heat it or take dry powder. Separate other oral medicines by three hours unless a clinically important interaction has been excluded as described in the label; levothyroxine requires separation. Monitor potassium and magnesium, and avoid use with severe constipation or obstruction."
    },
    {
      "heading": "Recognize sodium polystyrene sulfonate limitations",
      "body": "Sodium polystyrene sulfonate removes potassium through the gut, but its effect is variable and may take hours to days. Its label warns of intestinal necrosis and other serious bowel injury; assess bowel function, obstruction, constipation and relevant risk factors. The supplied book’s suggestion that gastrointestinal toxicity confines use to emergencies should not be interpreted as an emergency preference. The reviewed SPS suspension label advises considering other definitive measures, including dialysis, for severe emergency presentations. It does not establish rectal administration as a dependable rapid rescue."
    },
    {
      "heading": "Monitor response, hypoglycemia and recurrence",
      "body": "Record pretreatment potassium and glucose, the intervention times and the follow-up plan. In the cited UK protocol, glucose checks after insulin-glucose occur at baseline and 30, 60, 90, 120, 180, 240, 300 and 360 minutes; giving dextrose does not remove the need for monitoring. Suggested potassium checks are at least 1, 2, 4, 6 and 24 hours, with additional testing as the clinical course requires. Review ACE inhibitors, ARBs, potassium-sparing diuretics, trimethoprim, supplements and potassium-containing fluids. Address reversible causes and plan individualized long-term medication management rather than assuming that the first improved value completes treatment."
    }
  ],
  "keyPoints": [
    "Choose potassium formulation, concentration and rate separately.",
    "Correct magnesium deficiency and identify ongoing losses.",
    "A normal ECG does not exclude dangerous hyperkalemia.",
    "Calcium, temporary shifting and removal have different purposes.",
    "Binder labels and national acute guidelines have distinct scopes.",
    "Monitor glucose after insulin and potassium for rebound."
  ],
  "check": {
    "question": "A patient with confirmed hyperkalemia has a widened QRS. Which treatment is used for cardiac protection without shifting or removing potassium?",
    "choices": [
      "IV calcium under the monitored emergency protocol",
      "Insulin with glucose to reduce total body potassium",
      "Nebulized albuterol to eliminate potassium through the gut",
      "Hemodialysis to protect the myocardium without removing potassium"
    ],
    "answer": 0,
    "rationale": "Calcium antagonizes hyperkalemic cardiac toxicity while shifting and removal are arranged. Insulin and albuterol move potassium into cells without reducing stores; dialysis removes it. The July 2026 UK guidance retains a calcium suggestion for ECG changes with limited outcome evidence, not a guaranteed mortality benefit.",
    "reviewHref": "#potassium-disorders"
  }
});
fluidElectrolyteTherapyModule.references[4] = {"label": "FDA label: AstraZeneca LOKELMA prescribing information", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=90bf8e28-748d-4e4b-a19f-9cf483370eff"};
fluidElectrolyteTherapyModule.references[6] = {"label": "FDA label: Hospira potassium chloride for injection concentrate", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=559a0a8c-a8fe-40a5-b196-21f9308780ab"};
fluidElectrolyteTherapyModule.references.push(...[
  {
    "label": "UK Kidney Association: adult hyperkalemia guideline, July 2026 update",
    "href": "https://www.ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults-0"
  },
  {
    "label": "FDA label: VELTASSA (patiromer), dosing and interactions",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bf002984-d6c9-46df-aecb-a07733f763c1"
  },
  {
    "label": "FDA label: ICU Medical ready-to-use potassium chloride injection",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=eb56a807-ea94-4edb-9811-a04b19568468"
  },
  {
    "label": "FDA label: Upsher-Smith 8 and 10 mEq potassium chloride extended-release tablets",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=616f0de7-8843-44a1-8fa6-274d889286aa"
  },
  {
    "label": "Kardalas et al. 2018: hypokalemia evaluation and treatment review",
    "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5881435/"
  },
  {
    "label": "FDA label: SPS suspension, bowel toxicity and emergency limitations",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=12d48dcf-07bd-4b06-bd6c-7543f1be8357"
  }
]);

// Source-reconciled magnesium disorders lesson.
Object.assign(fluidElectrolyteTherapyModule.submodules.find(s => s.slug === "magnesium-disorders"), {
  "slug": "magnesium-disorders",
  "title": "Magnesium Disorders",
  "summary": "Magnesium influences neuromuscular function, cardiac repolarization, and potassium handling. Renal function changes both the cause and the safety of treatment.",
  "concepts": [
    "Hypomagnesemia",
    "Refractory hypokalemia",
    "IV magnesium safety",
    "Hypermagnesemia"
  ],
  "visual": "magnesium",
  "application": "Choose route and intensity by symptoms, concentration, gastrointestinal tolerance, kidney function, and the urgency of associated arrhythmia or electrolyte disturbance.",
  "lesson": [
    {
      "heading": "Check magnesium units before interpreting the result",
      "body": "The supplied book gives a magnesium reference range of 1.3 to 2.1 mEq/L and defines hypomagnesemia below 1.3 mEq/L. Other laboratories and guidelines use different ranges: UK SPS defines deficiency below 0.7 mmol/L and severe deficiency below 0.5 mmol/L. Magnesium is divalent, so 1 mmol/L equals 2 mEq/L; neither unit is interchangeable with mg/dL. Use the reported units and local reference range, then assess symptoms and trajectory. A serum concentration also does not directly measure total body stores."
    },
    {
      "heading": "Identify gastrointestinal loss, renal wasting and medicines",
      "body": "Low intake, chronic alcohol use, vomiting, diarrhea and malabsorption can contribute to deficiency. Review loop or thiazide diuretics, aminoglycosides, amphotericin B, cisplatin and proton pump inhibitors. These exposures do not all have the same mechanism: several drugs promote renal magnesium loss, while reduced intestinal absorption is implicated with PPIs. Cisplatin-related wasting can persist after treatment. Address the cause and consider a clinically appropriate medicine change; replacing magnesium without reviewing continued losses may be inadequate."
    },
    {
      "heading": "Correct associated potassium and calcium problems",
      "body": "Magnesium deficiency can coexist with hypokalemia and hypocalcemia and contribute to neuromuscular irritability, seizures and ventricular arrhythmias. Check magnesium when potassium remains low despite replacement; depletion can promote renal potassium wasting. Correct confirmed deficiencies together with their causes. The book emphasizes magnesium replacement when both magnesium and potassium are low, but urgent potassium or arrhythmia treatment must not be postponed until a magnesium course is completed."
    },
    {
      "heading": "Use a tolerated oral product for stable deficiency",
      "body": "Oral replacement is reasonable for many patients with mild, asymptomatic deficiency and adequate gastrointestinal absorption. The book commonly uses magnesium oxide, but formulation choice should follow the local formulary and tolerance. Verify the labeled elemental magnesium content rather than equating the mass of a salt with the mass of magnesium. Oral salts can cause dose-limiting diarrhea, which can itself sustain losses. Divided doses with meals, dose adjustment or a different product may improve tolerance; severe symptoms, poor absorption or persistent intolerance may require IV treatment."
    },
    {
      "heading": "Choose IV treatment and duration by clinical need",
      "body": "Severe or symptomatic deficiency requires monitored hospital treatment with IV magnesium sulfate; seizures or an associated dangerous rhythm need urgent care. The book uses magnesium below 1 mEq/L to identify severe presentations, while contemporary guidance also weighs symptoms, absorption and kidney function. Select a product-specific regimen and reassess after each IV dose. The book\u2019s five-day course is not a universal duration: serum levels can recover before intracellular stores, and ongoing losses may require further replacement. Plan repeat magnesium, potassium and calcium testing."
    },
    {
      "heading": "Separate sulfate grams, magnesium equivalents and pump rate",
      "body": "The reviewed Hospira 50% concentrate contains 0.5 g magnesium sulfate heptahydrate and 4.06 mEq magnesium per mL. One gram of this salt supplies approximately 8.12 mEq magnesium, not one gram of elemental magnesium. For a specified 2 g order made to a final volume of 100 mL and infused over two hours, withdraw 4 mL concentrate, dilute to the final volume, and use 50 mL/hour: the delivery is 1 g/hour at 2% w/v. These calculations verify an order; they do not independently authorize its dose, route or rate. The 50% product must be diluted before IV use, with this label requiring 20% or less; local peripheral-access limits may be lower."
    },
    {
      "heading": "Review contraindications, interactions and special indications",
      "body": "The reviewed parenteral label contraindicates use in heart block or myocardial damage. CNS depressants and neuromuscular blocking agents can increase depression or blockade; digitalis exposure also requires particular caution. Review the actual product, indication, access and monitoring plan before administration. Obstetric seizure regimens have a separate indication and supervision requirements and should not be borrowed for routine deficiency. Continuous maternal use beyond five to seven days carries a fetal bone-abnormality warning; a fixed replacement course is not automatically appropriate in pregnancy."
    },
    {
      "heading": "Account for kidney function and monitor exposure",
      "body": "Renal elimination is central to magnesium balance. Advanced CKD, acute kidney injury and dialysis require specialist replacement advice; a standard schedule or a nominally small dose does not guarantee safety. Lower or less frequent IV exposure may be needed, guided by the product and repeat results. Review all oral and parenteral magnesium sources. During IV treatment assess blood pressure, breathing, reflexes, urine output, kidney function and serum magnesium; ECG monitoring is particularly important with severe symptoms or arrhythmias. Impaired kidneys do not prove that magnesium must already be high."
    },
    {
      "heading": "Distinguish torsades treatment from immediate rhythm rescue",
      "body": "Torsades de pointes is polymorphic ventricular tachycardia associated with a prolonged QT interval. The 2025 AHA guideline allows consideration of magnesium for recurrent episodes, while sustained polymorphic VT requires immediate unsynchronized shock; pulseless patients need the cardiac-arrest response. Magnesium must not delay indicated defibrillation. Correct contributing electrolyte abnormalities and review QT-prolonging medicines. Magnesium is not routine treatment for every ventricular rhythm: AHA advises against routine magnesium for polymorphic VT with a normal QT interval. Use the emergency protocol and expert assessment."
    },
    {
      "heading": "Recognize magnesium toxicity from the whole presentation",
      "body": "Excess magnesium can depress reflexes, blood pressure, respiration and cardiac conduction. Kidney impairment and magnesium-containing antacids, laxatives, supplements or infusions increase concern. Confirm the laboratory units: a value expressed in mg/dL is not the same numerical exposure in mEq/L. The reviewed label describes reduced reflexes above 4 mEq/L and possible absent reflexes near 10 mEq/L, where respiratory paralysis can occur; individual signs are variable. Hypotension, absent reflexes or respiratory depression demand urgent assessment rather than waiting for a particular threshold."
    },
    {
      "heading": "Antagonize toxicity and arrange actual removal",
      "body": "Stop magnesium exposure and support ventilation and circulation when clinically important toxicity is present. Protocol-directed IV calcium can temporarily antagonize neuromuscular and cardiovascular effects; it does not remove the magnesium. Fluids and loop diuresis depend on renal clearance and the ability to tolerate volume, so they are not a dependable elimination plan in anuria. Severe toxicity with inadequate kidney clearance needs urgent nephrology or critical-care assessment for dialysis. Continue monitoring magnesium, ECG, respiration and other electrolytes, including calcium during dialysis."
    }
  ],
  "keyPoints": [
    "Confirm units and the local reference range before grading severity.",
    "Correct magnesium and associated potassium or calcium deficiencies together.",
    "Check elemental content, sulfate concentration and delivery rate separately.",
    "Renal impairment requires individualized exposure and close monitoring.",
    "Magnesium for torsades does not replace indicated defibrillation.",
    "IV calcium antagonizes toxicity; elimination requires renal clearance or dialysis."
  ],
  "check": {
    "question": "Why can aggressive magnesium replacement be hazardous in advanced kidney failure?",
    "choices": [
      "Reduced renal elimination can cause accumulation and neuromuscular or cardiac toxicity",
      "A corrected potassium value proves that additional magnesium cannot accumulate",
      "Using the oral route eliminates accumulation risk regardless of exposure",
      "Diluting an IV dose guarantees that renal function no longer affects safety"
    ],
    "answer": 0,
    "rationale": "Kidney impairment reduces magnesium elimination. Route, dilution and a potassium response do not establish safe cumulative exposure. Review the actual dose, clinical need and all magnesium sources, obtain specialist advice in advanced disease, and monitor serum magnesium and clinical effects.",
    "reviewHref": "#magnesium-disorders"
  }
});
fluidElectrolyteTherapyModule.references[7] = {"label": "FDA label: RemedyRepack magnesium sulfate 50% concentrate", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=8c6b8b3d-9c04-4ed7-86b8-89065b6bf50d&type=display"};
fluidElectrolyteTherapyModule.references.push(...[
  {
    "label": "FDA label: Hospira magnesium sulfate 50% concentrate",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e175d329-315f-4f3b-bb4c-06ad4e042967"
  },
  {
    "label": "NHS SPS: treating acute hypomagnesaemia in adults",
    "href": "https://sps.nhs.uk/articles/treating-acute-hypomagnesaemia-in-adults/"
  },
  {
    "label": "AHA 2025 adult advanced life support: polymorphic VT and torsades",
    "href": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-advanced-life-support"
  },
  {
    "label": "Aal-Hamad et al. 2023: hypermagnesemia in clinical practice",
    "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10384947/"
  },
  {
    "label": "Liamis et al. 2021: drug-induced hypomagnesemia",
    "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8287009/"
  }
]);

// Source-reconciled fluid calculations and monitoring lesson.
Object.assign(fluidElectrolyteTherapyModule.submodules.find(s => s.slug === "calculations-monitoring"), {
  "slug": "calculations-monitoring",
  "title": "Calculations, Administration, and Monitoring",
  "summary": "A calculation becomes clinically useful only when units, assumptions, administration constraints, monitoring, and the next decision are explicit.",
  "concepts": [
    "Estimated osmolality",
    "Weight-based maintenance",
    "Infusion rate and units",
    "Reassessment and escalation"
  ],
  "visual": "monitoring",
  "application": "Show the formula, substitute units, state the result with a sensible precision, and explain what patient-specific factor could invalidate the estimate.",
  "lesson": [
    {
      "heading": "Identify the formula and its clinical context",
      "body": "The supplied book estimates daily fluid needs for nutrition planning, at weights above 20 kg, as 1,500 mL/day + 20 mL/kg/day \u00d7 (weight in kg \u2212 20 kg). It generally uses measured total body weight for its PN calculations unless the problem specifies otherwise. This is a starting estimate, not a complete prescription or a resuscitation dose. The book also describes institutional adult estimates of 30 to 40 mL/kg/day; these should not be silently substituted for a different guideline\u2019s routine-maintenance approach. State the method and weight assumption before calculating."
    },
    {
      "heading": "Work the book\u2019s fluid estimate with units",
      "body": "Using the book\u2019s method at 65 kg gives 1,500 + 20 \u00d7 (65 \u2212 20) = 2,400 mL/day. A specified 154 lb weight converts to 70 kg using the book\u2019s 2.2 lb/kg factor; the same method gives 2,500 mL/day. Carry units through the calculation and round the final result sensibly. Neither answer automatically determines additional IV volume: heart or kidney dysfunction, accumulation, oral intake, nutrition and medication volumes can change the actual plan."
    },
    {
      "heading": "Distinguish adult routine maintenance from nutrition estimates",
      "body": "For routine maintenance alone, NICE CG174 starts with 25 to 30 mL/kg/day of water, adjusted to the patient. At 72 kg this is 1,800 to 2,160 mL/day. NICE uses ideal body weight in obesity with lower per-kg volumes, and suggests considering 20 to 25 mL/kg/day for older or frail patients, renal impairment, cardiac failure or refeeding risk. These are contextual starting ranges, not automatic restrictions for every diagnosis. The book\u2019s nutrition calculation and this adult maintenance method are not interchangeable; neither replaces assessment of shock, deficits or ongoing losses."
    },
    {
      "heading": "Build a complete intake and loss budget",
      "body": "Count oral and enteral fluids, PN, IV medicines and their carriers, blood products and other infusions toward total intake. Account separately for existing deficits or excesses, abnormal losses and redistribution. For a selected total water target of 1,800 mL/day with 600 mL usable oral intake and 400 mL from IV medicines, the arithmetic remaining allowance is 800 mL/day before further clinical adjustments. An ostomy loss cannot simply disappear from the plan because the maintenance multiplication was correct; assess its amount and composition and plan appropriate replacement."
    },
    {
      "heading": "Check electrolyte and glucose provision separately",
      "body": "A water-volume result does not establish adequate or safe electrolyte provision. NICE\u2019s routine-maintenance starting estimates include about 1 mmol/kg/day each of sodium, potassium and chloride and 50 to 100 g/day of glucose to limit starvation ketosis; that glucose is not complete nutritional support. Adjust to actual laboratory results, kidney function, other intake and losses. Concentration in mmol/L multiplied by volume in liters gives the amount supplied: a specified 154 mmol/L sodium solution supplies 38.5 mmol in 250 mL. Use approved prepared products and authorized pharmacy procedures; do not add concentrated potassium to a bag at the bedside."
    },
    {
      "heading": "Separate total dose, concentration and delivery rate",
      "body": "For a specified final preparation containing 20 mEq potassium in 500 mL over two hours, concentration is 20 \u00f7 0.5 = 40 mEq/L, pump rate is 500 \u00f7 2 = 250 mL/hour, and potassium delivery is 20 \u00f7 2 = 10 mEq/hour. A specified 1,000 mL over eight hours is 125 mL/hour. These answers solve different questions and must retain their units. Verify the actual product, dilution, access, renal status, monitoring and authorized dose and rate; correct arithmetic alone does not establish safety, and concentrated potassium must not be injected undiluted."
    },
    {
      "heading": "Interpret fluid-balance records as part of the assessment",
      "body": "Recorded balance equals recorded intake minus recorded output over the same interval. With 2,200 mL intake and 1,600 mL output, the recorded balance is +600 mL. This chart may omit insensible losses or contain measurement errors; it does not directly measure intravascular expansion. Compare the record with weight trends, perfusion, breathing, edema, kidney function and the clinical history. A normal single laboratory value does not establish that the next scheduled bag remains necessary."
    },
    {
      "heading": "Keep concentration estimates separate from volume assessment",
      "body": "Use the osmolality and tonicity distinctions in the fluid-physiology lesson when interpreting sodium, glucose and urea. Confirm units and the chosen equation rather than treating calculated osmolality, measured osmolality and effective tonicity as identical. A serum concentration does not by itself specify circulating volume or a replacement dose. State which patient-specific assumptions may fail and interpret the result with symptoms, fluid distribution and ongoing losses."
    },
    {
      "heading": "Set reassessment frequency by the intervention",
      "body": "During resuscitation, reassess the response promptly and monitor breathing, circulation and perfusion continuously according to the emergency protocol. A completed bolus is not proof of benefit or permission for automatic repetition. For ongoing stable IV therapy, NICE initially calls for at least daily review of fluid status, urea, creatinine, electrolytes and balance charts, with weight twice weekly; replacement, redistribution or instability may need more frequent checks. Follow local protocols and the actual risk, and document any justified reduction in monitoring for longer-term stable therapy."
    },
    {
      "heading": "Escalate when a calculation reaches its limits",
      "body": "Seek experienced help for shock, severe sodium abnormalities, complex redistribution, oliguria or significant renal, liver or cardiac impairment. New breathlessness, pulmonary edema, dangerous ECG findings or a correction trajectory beyond the planned limit require prompt reassessment. In hyponatremia, overrapid correction can cause osmotic demyelination; follow the risk-specific sodium plan and review changes in urine output rather than assuming an infusion formula predicts the whole response. Do not wait for routine daily labs when the patient is deteriorating."
    },
    {
      "heading": "Document the plan, handoff and stop point",
      "body": "An IV-fluid order needs the fluid type, volume, rate, indication and assessment plan. Review the next 24-hour prescription and all other intake, and reassess on transfer to another care setting. Explain relevant symptoms the patient should report. Use oral or enteral routes when they can meet the need and stop unnecessary IV therapy as soon as feasible. Document the reason for continuing, modifying or stopping treatment so that the next clinician can reassess the same assumptions."
    }
  ],
  "keyPoints": [
    "Name the formula, weight assumption and intended use.",
    "Keep nutrition estimates and routine-maintenance ranges distinct.",
    "Count all intake and assess deficits, losses and redistribution.",
    "Carry units through volume, concentration and delivery-rate calculations.",
    "Match monitoring and escalation to instability and the treatment risk.",
    "Review the indication, next prescription and stop point."
  ],
  "check": {
    "question": "Using a selected 25 mL/kg/day routine-maintenance estimate, what is the initial total water target for a stable 72 kg adult before other intake and clinical adjustments?",
    "choices": [
      "1,800 mL/day",
      "2,160 mL/day",
      "2,540 mL/day",
      "75 mL/day"
    ],
    "answer": 0,
    "rationale": "72 kg \u00d7 25 mL/kg/day = 1,800 mL/day. The 2,160 mL result uses 30 mL/kg/day; 2,540 mL uses the book\u2019s different nutrition formula. Dividing 1,800 by 24 gives 75 mL/hour, not per day. Account for other intake, losses and clinical factors before prescribing additional IV fluid.",
    "reviewHref": "#calculations-monitoring"
  }
});

// Source-reconciled phosphate lesson; retain all prior lessons and cumulative origins.
{ const lesson = {
  "slug": "phosphate-replacement",
  "title": "Phosphate Replacement and Salt Selection",
  "summary": "A phosphate prescription also delivers another electrolyte. Check the complete formulation before choosing the dose.",
  "concepts": [
    "Phosphorus dose",
    "Potassium load",
    "Renal restrictions",
    "Repeat laboratory assessment"
  ],
  "visual": "phosphate",
  "application": "Write both the phosphorus amount and the accompanying electrolyte load in the replacement plan.",
  "lesson": [
    {
      "heading": "Recognize the deficit and its cause",
      "body": "Assess symptoms alongside the phosphorus result. Severe depletion can cause marked weakness and respiratory failure; the book describes severe hypophosphatemia below 1 mg/dL. Causes include reduced intake or absorption, phosphate-binding medicines, alcohol-related illness, renal phosphate loss and movement into cells during refeeding. Hyperparathyroidism can contribute to renal loss. A serum concentration alone does not establish total-body stores. Review associated potassium and magnesium deficits and address ongoing causes rather than repeatedly treating an isolated result."
    },
    {
      "heading": "Select the route for the patient",
      "body": "Stable patients with less severe deficiency and usable gastrointestinal absorption may be managed with oral replacement and follow-up. Oral phosphate can cause diarrhea, and sodium and potassium content vary by product. Severe symptoms, major depletion, critical illness or inability to use an adequate oral or enteral route may require monitored IV treatment. The cited potassium-phosphates concentrate is labeled for correction when oral or enteral replacement is impossible, insufficient or contraindicated. Route selection requires clinical judgment; every low result does not mandate IV therapy."
    },
    {
      "heading": "Connect replacement with the refeeding plan",
      "body": "When nutrition resumes after inadequate intake, phosphate, potassium and magnesium can fall as metabolism changes. Review the nutrition history and other refeeding risk factors rather than assuming one replacement dose solves the problem. At-risk nutrition support needs coordinated feeding, thiamine provision, fluid assessment and electrolyte monitoring under an appropriate clinical plan. NICE CG32 links low baseline phosphorus, potassium or magnesium with refeeding risk. Arrange a complete, individualized nutrition-support plan for refeeding risk."
    },
    {
      "heading": "Read the actual concentrate label",
      "body": "The cited Civica and Fresenius Kabi potassium-phosphates concentrates provide 3 mmol phosphorus and 4.4 mEq potassium per mL. They require dilution or admixture before infusion; never administer an undiluted vial or IV push. The label specifies normal saline or D5W for dilution in IV replacement. Product name alone does not establish the accompanying potassium content, presentation or administration rules. Verify the actual product and account for other phosphorus and potassium sources; do not borrow a different concentrate or premixed bag\u2019s instructions."
    },
    {
      "heading": "Calculate both electrolyte quantities",
      "body": "For this specified 3 mmol/mL phosphorus and 4.4 mEq/mL potassium concentrate, 30 mmol phosphorus requires 30 \u00f7 3 = 10 mL and supplies 10 \u00d7 4.4 = 44 mEq potassium. At 15 mmol phosphorus, the corresponding 5 mL supplies 22 mEq potassium. Millimoles of phosphorus are not interchangeable with milliequivalents of potassium. State both amounts in the review; these calculations do not by themselves authorize the dose, dilution or infusion."
    },
    {
      "heading": "Check eligibility before selecting a dose",
      "body": "Check renal function, serum potassium and calcium and the full product eligibility criteria before administration; normalize calcium as directed by the label. The cited potassium-phosphates concentrate is contraindicated with hyperkalemia, hyperphosphatemia, hypercalcemia, significant hypocalcemia, eGFR below 30 mL/min/1.73 m\u00b2 or end-stage renal disease. At eGFR 30 to below 60, start at the low end of its dose range. That adjustment is not a workaround for a contraindication. Resolve discrepancies in laboratory units or product instructions with pharmacy and the prescriber before approval. Review medicines that raise potassium and all other potassium sources."
    },
    {
      "heading": "Apply the product-specific initial dose range and cap",
      "body": "For adult IV replacement, the cited concentrate\u2019s general initial or single-dose ranges are 0.16 to 0.31 mmol phosphorus/kg at phosphorus 1.8 mg/dL to the lower reference limit, 0.32 to 0.43 mmol/kg at 1 to 1.7 mg/dL, and 0.44 to 0.64 mmol/kg below 1 mg/dL. Use the actual assay\u2019s reference range and individualize the factor. The label uses actual body weight and suggests considering adjusted weight when substantially above ideal weight. Cap an initial or single dose at 45 mmol phosphorus, accompanying 66 mEq potassium. For a specified appropriate 90 kg weight and selected 0.64 mmol/kg factor, 57.6 mmol before the cap does not override that ceiling."
    },
    {
      "heading": "Keep book examples and product instructions in context",
      "body": "The supplied book describes a lower weight-based IV phosphate example diluted over six hours. This older teaching example is not the same as the current product\u2019s severity-based ranges, dose cap, access limits or renal contraindications. Neither example is a universal regimen, and this lesson does not authorize direct substitution between them. Use the actual formulation, current approved local protocol and patient-specific review. Published adult IV studies vary in dose and response and do not establish one replacement regimen for every patient."
    },
    {
      "heading": "Check concentration and delivery rate separately",
      "body": "For adults, the cited potassium-phosphates labels give maximum peripheral concentration of 6.8 mmol phosphorus/100 mL, accompanying 10 mEq potassium/100 mL, and maximum peripheral rate of 6.8 mmol phosphorus/hour, accompanying 10 mEq potassium/hour. Central limits are 18 mmol phosphorus/100 mL with 26.4 mEq potassium/100 mL, and 15 mmol phosphorus/hour with 22 mEq potassium/hour. These are product-specific ceilings, not default targets or pediatric instructions. For an adult potassium rate above 10 mEq/hour, the labels recommend central access and continuous ECG monitoring. Verify the final preparation, access, fluid tolerance and clinical monitoring independently of dose arithmetic."
    },
    {
      "heading": "Work both checks for the final preparation",
      "body": "A specified 18 mmol phosphorus dose in a FINAL 150 mL volume over three hours delivers 6 mmol phosphorus/hour and 8.8 mEq potassium/hour. Concentration is 12 mmol phosphorus/100 mL with 17.6 mEq potassium/100 mL. The rates fit the cited adult peripheral ceilings, but the concentrations exceed them. Slowing the infusion reduces the rates without changing either concentration. Revise the preparation or access through clinical and pharmacy review before administration; recommended diluent volumes cannot replace a concentration check. Compatibility and the actual product\u2019s stability limit also need review for the entire planned preparation and administration interval."
    },
    {
      "heading": "Calculate the sodium alternative without assuming safety",
      "body": "The cited Glenmark sodium-phosphates concentrate provides 3 mmol phosphorus and 4 mEq sodium per mL. A specified 30 mmol phosphorus dose requires 10 mL and contributes 40 mEq sodium. Avoiding potassium does not eliminate risk: the label contraindicates hypernatremia and conditions with high phosphorus or low calcium, and calls for particular caution with sodium retention, heart failure or severe renal impairment. It requires dilution and mixing. Review sodium, phosphorus, calcium and the patient\u2019s fluid tolerance; the potassium product\u2019s dose and administration ceilings cannot automatically be assigned to this formulation."
    },
    {
      "heading": "Distinguish calcium co-infusion from PN compatibility",
      "body": "Do not infuse the cited potassium-phosphates product with calcium-containing IV fluids. A clear-looking solution or a shared pump does not establish compatibility. Adding calcium and phosphate within a compounded PN formulation is a separate pharmacy compatibility and stability assessment, influenced by pH, temperature and the relative ion concentrations. Excess addition can form calcium-phosphate precipitates and cause serious harm. Check the full formulation and inspect as directed; PN admixture instructions do not authorize calcium co-infusion during replacement."
    },
    {
      "heading": "Reassess before another dose",
      "body": "Monitor phosphorus, potassium, calcium and magnesium with renal function and the clinical response. Before additional potassium-phosphates doses, assess the patient, obtain phosphorus, calcium and potassium levels, and adjust the plan. Severe or unstable illness and IV replacement may need checks more often than routine nutrition monitoring. NICE CG32 calls for baseline magnesium and phosphate and daily checks with refeeding risk, followed by reduced frequency when stable; that schedule is not an adequate universal rule for acute severe replacement. Review recurrent causes and all ongoing electrolyte sources. Pulmonary distress during the infusion requires stopping it and prompt medical evaluation under the product instructions."
    }
  ],
  "keyPoints": [
    "Match the route and product to the patient and cause.",
    "Calculate phosphorus and the accompanying potassium or sodium separately.",
    "Check eligibility, the initial dose cap, final concentration and delivery rate.",
    "Slowing an infusion does not dilute its preparation.",
    "Keep calcium co-infusion restrictions separate from compounded PN compatibility.",
    "Reassess the clinical response and laboratory results before repeating."
  ],
  "check": {
    "question": "A concentrate contains 3 mmol phosphorus/mL and 4.4 mEq potassium/mL. How much potassium accompanies 15 mmol phosphorus?",
    "choices": [
      "5 mEq",
      "15 mEq",
      "22 mEq",
      "66 mEq"
    ],
    "answer": 2,
    "rationale": "15 mmol phosphorus \u00f7 3 mmol/mL = 5 mL; 5 mL \u00d7 4.4 mEq potassium/mL = 22 mEq potassium. Five is the vial volume, not the potassium amount; 15 confuses the phosphorus dose with potassium, and 66 mEq accompanies 45 mmol phosphorus. This arithmetic does not authorize administration without product and patient checks.",
    "reviewHref": "#phosphate-replacement"
  }
}; const old = fluidElectrolyteTherapyModule.submodules.findIndex(s => s.slug === lesson.slug); if (old >= 0) fluidElectrolyteTherapyModule.submodules[old] = lesson; else fluidElectrolyteTherapyModule.submodules.splice(fluidElectrolyteTherapyModule.submodules.findIndex(s => s.slug === "calculations-monitoring"), 0, lesson); }
fluidElectrolyteTherapyModule.cumulativeQuestionIds = ["fluid-electrolyte-001", "fluid-electrolyte-026", "fluid-electrolyte-051", "fluid-electrolyte-075", "fluid-electrolyte-0910", "fluid-electrolyte-phosphate-load", "fluid-electrolyte-phosphate-access"];
if (!fluidElectrolyteTherapyModule.references.some(r => r.href === "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7702b2f-d0d1-4696-896d-571607fc0dc8")) fluidElectrolyteTherapyModule.references.push({"label": "Civica potassium-phosphates concentrate prescribing information, revised April 2026", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7702b2f-d0d1-4696-896d-571607fc0dc8"});
if (!fluidElectrolyteTherapyModule.references.some(r => r.href === "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=475f5cd7-45bd-412a-b419-9962585d6cda")) fluidElectrolyteTherapyModule.references.push({"label": "Fresenius Kabi potassium-phosphates concentrate prescribing information, revised February 2025", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=475f5cd7-45bd-412a-b419-9962585d6cda"});
if (!fluidElectrolyteTherapyModule.references.some(r => r.href === "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c968f70b-a670-4aef-a7e0-89468ad62d9c")) fluidElectrolyteTherapyModule.references.push({"label": "Glenmark sodium-phosphates concentrate prescribing information, revised January 2026", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c968f70b-a670-4aef-a7e0-89468ad62d9c"});
if (!fluidElectrolyteTherapyModule.references.some(r => r.href === "https://pmc.ncbi.nlm.nih.gov/articles/PMC3319220/")) fluidElectrolyteTherapyModule.references.push({"label": "Imel and Econs 2012: approach to the hypophosphatemic patient", "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3319220/"});
if (!fluidElectrolyteTherapyModule.references.some(r => r.href === "https://www.nice.org.uk/guidance/cg32/chapter/Recommendations")) fluidElectrolyteTherapyModule.references.push({"label": "NICE CG32: nutrition support, refeeding risk and biochemical monitoring", "href": "https://www.nice.org.uk/guidance/cg32/chapter/Recommendations"});
