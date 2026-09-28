const concepts = [
  { name: "apparent treatment-resistant hypertension", lesson: "confirming-true-resistant-hypertension", principle: "Resistance remains apparent when adherence, dose, or outside-office pressure has not been verified.", action: "Label the phenotype apparent and complete confirmation before escalating.", assessment: "Review standardized pressure, home or ambulatory average, exact drugs, doses, duration, and medication exposure.", hazard: "Calling apparent resistance true resistance can trigger unnecessary polypharmacy and an unfocused workup.", why: "The definition requires reliable pressure and regimen evidence." },
  { name: "true resistant hypertension", lesson: "confirming-true-resistant-hypertension", principle: "Pressure remains above goal on three complementary agents at maximally tolerated doses, commonly including a long-acting CCB, RAAS blocker, and diuretic, after excluding pseudoresistance.", action: "Begin targeted secondary-cause evaluation and optimize resistant-hypertension therapy.", assessment: "Confirm out-of-office elevation, adherence, regimen composition, dose, lifestyle contributors, interactions, and organ damage.", hazard: "Skipping confirmation can confuse white-coat effect or nonuse with treatment failure.", why: "True resistance is a verified phenotype, not a medication count alone." },
  { name: "controlled resistant hypertension", lesson: "confirming-true-resistant-hypertension", principle: "Pressure at goal that requires at least four agents remains a resistant phenotype.", action: "Continue surveillance for safety, contributors, and secondary causes rather than removing the label solely because the value is controlled.", assessment: "Track home average, orthostasis, laboratory safety, adherence, treatment burden, and organ damage.", hazard: "Ignoring controlled resistance can miss high treatment burden or an actionable cause.", why: "The number of required mechanisms is part of the definition." },
  { name: "white-coat effect during treatment", lesson: "confirming-true-resistant-hypertension", principle: "Office pressure is high while structured out-of-office pressure is controlled.", action: "Use validated home monitoring or ABPM before increasing chronic therapy.", assessment: "Compare standardized office and outside-office averages with timing, technique, symptoms, and organ damage.", hazard: "Escalation based only on office pressure can cause out-of-office hypotension.", why: "Treatment should follow usual pressure exposure rather than a setting-specific rise." },
  { name: "inaccurate measurement as pseudoresistance", lesson: "confirming-true-resistant-hypertension", principle: "Poor preparation, wrong cuff size, unsupported posture, or selective readings can create false uncontrolled pressure.", action: "Repeat using a validated standardized protocol before changing the regimen.", assessment: "Audit device validation, cuff fit, rest, posture, arm height, talking, repeated values, and average.", hazard: "A biased measurement can initiate a cascade of unnecessary treatment and testing.", why: "Pressure accuracy is upstream of every resistant-hypertension decision." },
  { name: "nonjudgmental medication exposure assessment", lesson: "contributors-and-pseudoresistance", principle: "Use is shaped by cost, adverse effects, beliefs, complexity, work, memory, and access.", action: "Ask how medicines are actually taken and solve the identified barrier before intensifying.", assessment: "Use conversation, refill history, pill review, timing, adverse effects, costs, and selected biochemical testing when justified.", hazard: "Assuming adherence can lead to unsafe escalation when exposure suddenly improves.", why: "The cause of missed exposure determines the useful intervention." },
  { name: "suboptimal three-drug foundation", lesson: "contributors-and-pseudoresistance", principle: "Three agents do not establish resistance when mechanisms, duration, or doses are inadequate.", action: "Optimize a complementary base that commonly includes a long-acting DHP CCB, ACE inhibitor or ARB, and effective diuretic.", assessment: "Verify active ingredients, formulations, doses, tolerability, kidney function, sodium balance, and response.", hazard: "Counting weak or duplicative therapy can falsely label the patient resistant.", why: "Resistance is defined against an optimized regimen." },
  { name: "medication-induced blood pressure elevation", lesson: "contributors-and-pseudoresistance", principle: "NSAIDs, sympathomimetics, stimulants, selected hormones, calcineurin inhibitors, erythropoiesis-stimulating agents, and other exposures can raise pressure.", action: "Reconcile prescription, nonprescription, supplement, substance, and intermittent exposures and remove or replace when feasible.", assessment: "Review timing of pressure change relative to every exposure, dose, indication, alternatives, and withdrawal risk.", hazard: "Adding antihypertensives without addressing the driver increases burden and may not control pressure.", why: "The treatment list must include medicines that oppose blood pressure control." },
  { name: "mechanism-specific pressure-raising therapy review", lesson: "contributors-and-pseudoresistance", principle: "NSAIDs, sympathomimetics, estrogen-containing therapy, calcineurin inhibitors, erythropoiesis-stimulating therapy, and vascular endothelial growth factor pathway inhibitors can raise pressure through different renal, neural, hormonal, or endothelial mechanisms.", action: "Identify the exact exposure and mechanism, then coordinate dose, replacement, monitoring, or discontinuation with the clinician managing its indication.", assessment: "Review onset, dose, route, sodium and volume, kidney function, sympathetic symptoms, cancer or transplant context, hemoglobin target, alternatives, and withdrawal risk.", hazard: "Treating all exposure-related hypertension as simple nonadherence can miss organ toxicity or make abrupt withdrawal unsafe.", why: "Mechanism and indication determine whether the safest response is removal, substitution, dose adaptation, or intensified monitoring." },
  { name: "high sodium and volume contribution", lesson: "contributors-and-pseudoresistance", principle: "Sodium retention and extracellular volume expansion commonly sustain resistant hypertension.", action: "Assess dietary sodium, edema, kidney function, diuretic delivery, and adherence before escalating.", assessment: "Review diet, weight trend, edema, orthostasis, urine and kidney data, NSAIDs, and diuretic response.", hazard: "Escalating vasodilators without treating volume biology can worsen edema and complexity.", why: "Volume excess can blunt multiple antihypertensive mechanisms." },
  { name: "secondary hypertension screening architecture", lesson: "secondary-hypertension-screening-architecture", principle: "Age at onset, tempo, severity, potassium, kidney and urine findings, sleep symptoms, medication exposure, examination, and target-organ injury establish pretest probability before testing.", action: "Build the phenotype, prioritize common actionable causes, and order only tests whose results can change management.", assessment: "Document onset and trajectory, standardized and out-of-office pressure, medicines and substances, electrolytes, kidney function, urinalysis, albuminuria, sleep pattern, endocrine clues, vascular findings, and organ damage.", hazard: "An indiscriminate endocrine and imaging panel creates borderline results, incidental findings, and invasive cascades without a coherent clinical question.", why: "Focused testing improves interpretability because every test follows a documented clue and downstream decision." },
  { name: "resistant hypertension secondary-cause screening", lesson: "secondary-hypertension-screening-architecture", principle: "Verified resistant hypertension increases the probability of secondary causes and warrants a more detailed evaluation after pseudoresistance and interfering exposures are addressed.", action: "Screen for primary aldosteronism regardless of potassium and pursue kidney disease, sleep apnea, renovascular disease, endocrine disease, or structural disease according to the phenotype.", assessment: "Confirm true resistance, then review aldosterone and renin, kidney and urine data, sleep testing indications, vascular clues, endocrine symptoms, limb pressures, and the actionability of each result.", hazard: "Requiring hypokalemia before primary-aldosteronism screening misses a common treatable cause of resistant hypertension.", why: "The 2025 AHA and ACC guideline recommends primary-aldosteronism screening in resistant hypertension whether or not hypokalemia is present." },
  { name: "primary aldosteronism screening architecture", lesson: "primary-aldosteronism", principle: "Screening uses aldosterone and renin with an aldosterone-to-renin ratio, while potassium supports accurate interpretation.", action: "Obtain prepared aldosterone, renin, ratio, and potassium measurements under a protocol that accounts for interfering medicines.", assessment: "Record potassium, sodium context, posture, time, kidney function, medications, assay method, and pretest probability.", hazard: "An unprepared ratio can be falsely positive or negative and misdirect care.", why: "Both hormones and the conditions of sampling shape the screening result." },
  { name: "hypokalemia in primary aldosteronism", lesson: "primary-aldosteronism", principle: "Hypokalemia strengthens suspicion but is absent in many affected patients.", action: "Do not wait for low potassium to consider screening, and correct low potassium before interpreting aldosterone when possible.", assessment: "Trend potassium, magnesium, diuretic exposure, renin, aldosterone, acid-base status, and urinary losses when needed.", hazard: "Requiring spontaneous hypokalemia misses many cases.", why: "Primary aldosteronism exists across a spectrum of potassium balance." },
  { name: "primary aldosteronism subtype-directed therapy", lesson: "primary-aldosteronism", principle: "Unilateral disease may be surgically treatable, while bilateral or nonsurgical disease is generally treated with mineralocorticoid receptor blockade.", action: "Refer for expert confirmation and subtype evaluation before choosing surgery versus medical therapy.", assessment: "Review biochemical certainty, imaging, adrenal venous sampling candidacy, surgical fitness, potassium, kidney function, and preference.", hazard: "Using imaging alone to assign laterality can lead to inappropriate adrenal surgery.", why: "Incidental adrenal nodules do not prove the source of aldosterone excess." },
  { name: "mineralocorticoid receptor antagonist monitoring", lesson: "primary-aldosteronism", principle: "Spironolactone and eplerenone reduce aldosterone signaling but can raise potassium and alter kidney function.", action: "Use a monitored dose with pregnancy, kidney, potassium, endocrine adverse-effect, and interaction review.", assessment: "Check potassium, creatinine, pressure, volume, pregnancy context, concomitant RAAS therapy, and product-specific effects.", hazard: "Unmonitored therapy can cause severe hyperkalemia, especially with CKD or other potassium-raising drugs.", why: "Blocking sodium retention also reduces potassium excretion." },
  { name: "renal parenchymal disease", lesson: "clue-directed-secondary-causes", principle: "Kidney disease can cause or amplify hypertension through sodium retention, RAAS activation, and impaired vascular regulation.", action: "Use kidney function, urinalysis, albuminuria, history, and selected imaging to define the renal phenotype.", assessment: "Trend creatinine, eGFR, urine albumin, sediment, potassium, volume, nephrotoxins, and structural history.", hazard: "Calling every creatinine change the cause can miss renovascular, medication, or hemodynamic explanations.", why: "Renal hypertension requires the specific kidney process to be characterized." },
  { name: "renovascular hypertension", lesson: "clue-directed-secondary-causes", principle: "Abrupt onset or worsening, flash pulmonary edema, asymmetric kidney findings, or diffuse vascular disease can raise suspicion.", action: "Use anatomy-appropriate noninvasive imaging when the phenotype and potential management consequence justify it.", assessment: "Review onset, abdominal bruit, vascular disease, kidney asymmetry, pulmonary edema, creatinine response to RAAS blockade, and imaging risk.", hazard: "Routine imaging without a compatible phenotype finds incidental disease and may lead to harmful procedures.", why: "Testing is most useful when pretest probability and actionability are meaningful." },
  { name: "obstructive sleep apnea", lesson: "clue-directed-secondary-causes", principle: "Intermittent hypoxemia, arousal, and sympathetic activation can contribute to difficult pressure control.", action: "Screen for a compatible sleep phenotype and obtain diagnostic sleep testing when indicated.", assessment: "Ask about snoring, witnessed apnea, sleepiness, resistant pressure, obesity, neck anatomy, sleep schedule, and safety-sensitive driving.", hazard: "Assuming fatigue alone proves OSA can miss other sleep, medication, or medical causes.", why: "OSA diagnosis requires clinical suspicion followed by appropriate testing." },
  { name: "pheochromocytoma and paraganglioma clues", lesson: "clue-directed-secondary-causes", principle: "Episodic headache, palpitations, diaphoresis, labile pressure, adrenal findings, or genetic context may support catecholamine testing.", action: "Use properly collected biochemical testing when the phenotype supports it and avoid unprepared indiscriminate screening.", assessment: "Review episodes, triggers, medications, sleep apnea, acute illness, sampling conditions, tumor history, and family history.", hazard: "False positive catecholamine results can trigger anxiety, imaging, and invasive workup.", why: "Biochemical specificity depends on pretest probability and collection conditions." },
  { name: "cortisol excess clues", lesson: "clue-directed-secondary-causes", principle: "Progressive cushingoid features, adrenal findings, unusual osteoporosis, diabetes, or proximal weakness can support targeted cortisol testing.", action: "Choose an accepted screening test that fits sleep schedule, medicines, renal status, and clinical context.", assessment: "Review exogenous glucocorticoids, phenotype, sleep timing, estrogen exposure, alcohol, depression, kidney function, and test limitations.", hazard: "Random serum cortisol is not a reliable universal screen for autonomous cortisol excess.", why: "Cortisol testing must account for circadian and binding physiology." },
  { name: "thyroid-related hypertension", lesson: "clue-directed-secondary-causes", principle: "Both thyroid hormone excess and deficiency can alter pressure through different hemodynamic pathways.", action: "Measure TSH with reflex thyroid testing when symptoms, examination, or unexplained hypertension supports it.", assessment: "Review weight, temperature tolerance, bowel pattern, tremor, pulse, rhythm, neck, thyroid medicine, biotin, and pituitary context.", hazard: "Interpreting TSH without assay and medication context can misclassify thyroid status.", why: "Thyroid-driven pressure should be treated through the actual thyroid disorder." },
  { name: "hypercalcemia and parathyroid clues", lesson: "clue-directed-secondary-causes", principle: "Confirmed hypercalcemia with compatible kidney, skeletal, gastrointestinal, or neurocognitive findings can support a parathyroid-focused secondary-hypertension evaluation.", action: "Repeat and interpret calcium with albumin or ionized calcium as appropriate, then use parathyroid hormone and related testing to classify the disorder.", assessment: "Review calcium confirmation, albumin, kidney function, phosphate, parathyroid hormone, vitamin D, medicines, stones, fractures, bone disease, and volume status.", hazard: "Ordering a broad endocrine panel from one unconfirmed calcium result can create an incidental cascade and miss medication or volume effects.", why: "A verified calcium phenotype provides the clinical bridge to targeted parathyroid testing." },
  { name: "coarctation of the aorta", lesson: "clue-directed-secondary-causes", principle: "Upper-lower extremity pressure differences and delayed femoral pulses can reveal an anatomic cause, especially with young onset.", action: "Compare limb pressure and pulses and obtain definitive imaging when the examination is suspicious.", assessment: "Check bilateral arm pressure, leg pressure, femoral timing, murmur, age at onset, congenital history, and associated disease.", hazard: "Measuring only one arm can miss a vascular pattern that changes the entire workup.", why: "The physical examination can localize an anatomic pressure gradient." },
  { name: "long-acting thiazide-like optimization", lesson: "stepwise-resistant-treatment", principle: "An effective long-acting thiazide-like diuretic strengthens the resistant-hypertension base when clinically appropriate.", action: "Select and titrate the exact diuretic according to kidney function, volume, electrolytes, urate, interactions, and response.", assessment: "Track sodium, potassium, magnesium, creatinine, urate, glucose context, orthostasis, volume, and home pressure.", hazard: "Intensification without laboratory follow-up can cause hyponatremia, hypokalemia, or kidney injury.", why: "The diuretic must reach an effective site and dose without destabilizing physiology." },
  { name: "spironolactone as common fourth-line therapy", lesson: "stepwise-resistant-treatment", principle: "A mineralocorticoid receptor antagonist often provides strong add-on control after an optimized three-drug foundation.", action: "Add when potassium, kidney function, pregnancy status, and interacting therapy permit, then monitor early.", assessment: "Review baseline and follow-up potassium, creatinine, pressure, volume, endocrine effects, adherence, and RAAS burden.", hazard: "Use in advanced renal impairment, hyperkalemia, or pregnancy can cause serious harm.", why: "Aldosterone-mediated sodium retention is common in resistant phenotypes." },
  { name: "aprocitentan add-on therapy", lesson: "stepwise-resistant-treatment", principle: "Dual endothelin receptor antagonism is an approved add-on option for adults not adequately controlled on other drugs.", action: "Reserve product-specific use for an appropriate patient after optimized standard therapy and full safety review.", assessment: "Review pregnancy testing and prevention, edema, fluid retention, hemoglobin, liver context, kidney function, and interacting therapy.", hazard: "Embryo-fetal toxicity and fluid retention can cause major harm.", why: "A newer mechanism does not replace foundational confirmation and monitoring." },
  { name: "renal denervation evaluation", lesson: "stepwise-resistant-treatment", principle: "Renal denervation is an adjunctive device option, not a substitute for diagnosis, lifestyle care, or medication reconciliation.", action: "Use a multidisciplinary team, confirm office and out-of-office hypertension, evaluate secondary causes and anatomy, and conduct shared decision-making.", assessment: "Review expected pressure effect, vascular anatomy, kidney function, medications, secondary causes, procedural risk, preference, and follow-up.", hazard: "Offering a procedure before confirming the phenotype can expose a patient without addressing the actual cause.", why: "Device therapy requires careful selection and continues alongside longitudinal care." },
  { name: "hypertension specialist referral", lesson: "stepwise-resistant-treatment", principle: "Persistent uncontrolled pressure after confirmation and optimized complementary therapy warrants specialist-level evaluation.", action: "Refer with organized pressure data, regimen history, adherence evidence, laboratory trends, secondary workup, and adverse effects.", assessment: "Provide home or ABPM results, all prior agents and doses, intolerances, kidney and electrolyte trends, organ damage, and testing already completed.", hazard: "An unstructured referral can duplicate testing and delay a focused plan.", why: "High-quality transfer of evidence improves advanced decision-making." },
];

const dimensions = [
  ["principle", "Which principle best characterizes"],
  ["action", "Which clinical action best applies to"],
  ["assessment", "Which monitoring or assessment plan is most appropriate for"],
  ["hazard", "Which hazard is most important to prevent with"],
];

function distractors(index, field) {
  return [4, 9, 16].map((offset) => concepts[(index + offset) % concepts.length][field]);
}

const generatedQuestions = concepts.flatMap((concept, conceptIndex) =>
  dimensions.map(([field, prefix], dimensionIndex) => ({
    id: `resistant-secondary-hypertension-${String(conceptIndex * 4 + dimensionIndex + 1).padStart(3, "0")}`,
    question: `${prefix} ${concept.name}?`,
    choices: [concept[field], ...distractors(conceptIndex, field)],
    answer: 0,
    rationale: concept.why,
    reviewHref: `#${concept.lesson}`,
  })),
);

// Preserve stable question IDs while replacing generic prompts with clinical decisions.
const reviewedCases = {
  "resistant-secondary-hypertension-062": {
    question: "Eplerenone is proposed solely for hypertension in a patient with creatinine clearance 42 mL/min and potassium 4.3 mEq/L. Which label restriction controls this decision?",
    choices: ["Normal potassium removes all renal restrictions", "Only clearance at or below 30 matters", "Hypertension use is contraindicated below 50 mL/min", "A smaller dose eliminates the contraindication"],
    answer: 2,
    rationale: "Eplerenone has an additional hypertension-specific renal exclusion. Criteria for another indication must not replace it.",
    reviewHref: "#stepwise-resistant-treatment",
  },
  "resistant-secondary-hypertension-102": {
    question: "A patient without HFrEF has confirmed resistant hypertension and eGFR 38 mL/min/1.73 m2. How should the 2025 AHA/ACC routine MRA add-on recommendation be interpreted?",
    choices: ["Its stated eGFR criterion is at least 45; individualize care with specialist input", "Every patient above 30 automatically qualifies", "Kidney function is irrelevant", "All MRA use below 45 is universally contraindicated"],
    answer: 0,
    rationale: "The recommendation's population and a drug-label contraindication are different. Review the indication, exact product, potassium and kidney risk before selecting treatment.",
  },
  "resistant-secondary-hypertension-004": {
    question: "A chart labels a patient resistant after one office reading taken with an undersized cuff. Which error needs correction first?",
    choices: ["Failure to order adrenal imaging", "Failure to add a fifth medicine", "Using an unreliable measurement to classify treatment failure", "Continuing home monitoring"],
    answer: 2,
    rationale: "Cuff fit and standardized repeat measurements must be addressed before using the reading to classify resistance.",
  },
  "resistant-secondary-hypertension-007": {
    question: "Adherence and tolerated doses are documented, but high office readings are the only pressure data. Which missing evidence helps distinguish true resistance from a treated white-coat effect?",
    choices: ["Validated home or ambulatory pressure", "Another prescription count", "A normal potassium alone", "An adrenal CT regardless of biochemical findings"],
    answer: 0,
    rationale: "Out-of-office pressure determines whether the elevation persists beyond the clinic. Drug counts and potassium do not answer that question.",
  },
  "resistant-secondary-hypertension-010": {
    question: "Pressure is controlled on four necessary complementary drugs. A clinician proposes deleting the resistant-hypertension diagnosis solely because today's reading is at goal. Which response is appropriate?",
    choices: ["Control on four drugs rules out resistance", "Stop two medicines to test the diagnosis", "The phenotype requires uncontrolled pressure at every visit", "Control requiring four or more drugs remains a resistant phenotype"],
    answer: 3,
    rationale: "Successful control does not erase the treatment requirement. Continue individualized safety and contributor review.",
  },
  "resistant-secondary-hypertension-011": {
    question: "A patient controlled on four agents reports dizziness after a dose change. Which follow-up best addresses the new concern?",
    choices: ["Ignore symptoms because the office value is at goal", "Assess orthostatic pressure, home readings and the exact regimen change", "Automatically add another agent", "Stop all monitoring because control was achieved"],
    answer: 1,
    rationale: "Treatment success includes tolerability. Symptoms require pressure and medication reassessment rather than reliance on one office value.",
  },
  "resistant-secondary-hypertension-012": {
    question: "Which statement about controlled resistant hypertension is incorrect?",
    choices: ["Treatment burden still matters", "Secondary causes may remain relevant", "A controlled reading proves there is no secondary cause", "Medication safety still needs follow-up"],
    answer: 2,
    rationale: "Response to several drugs does not exclude an underlying contributor or secondary cause.",
  },
  "resistant-secondary-hypertension-078": {
    question: "A patient with episodic headache, sweating and palpitations is being evaluated for a catecholamine-secreting tumor. Which initial biochemical test fits?",
    choices: ["Aldosterone alone", "Random serum cortisol", "Plasma free metanephrines or urinary fractionated metanephrines", "TSH alone"],
    answer: 2,
    rationale: "Fractionated metanephrines are the recommended initial biochemical tests. Plasma collection needs appropriate preparation and posture-matched reference intervals; a result must be interpreted in context.",
  },
  "resistant-secondary-hypertension-082": {
    question: "A patient being assessed for cortisol excess works rotating night shifts. Why reconsider a routine late-night salivary cortisol protocol?",
    choices: ["Shift work proves Cushing syndrome", "The assumed sleep-related cortisol nadir may not fit the schedule", "A random cortisol always resolves the issue", "Adrenal imaging replaces biochemical testing"],
    answer: 1,
    rationale: "Variable sleep timing can undermine this test. Select a suitable screening strategy with endocrine input rather than treating a clock-time sample as definitive.",
  },
  "resistant-secondary-hypertension-002": {
    question: "A stable, asymptomatic outpatient has modest office elevation on three drugs, but adherence and home readings are unknown. What should happen before routine escalation?",
    choices: ["Confirm usual pressure and actual medication exposure", "Diagnose true resistance from the prescription count", "Assume home pressure matches office pressure", "Replace all three agents without reviewing doses"],
    answer: 0,
    rationale: "Missing exposure and out-of-office evidence leaves apparent resistance unconfirmed.",
  },
  "resistant-secondary-hypertension-003": {
    question: "A patient fills every prescription but reports taking tablets only on workdays. What does the refill history establish?",
    choices: ["Daily adherence", "Availability, without proving daily ingestion", "True drug resistance", "White-coat effect"],
    answer: 1,
    rationale: "Dispensing records support access assessment; they do not prove ingestion. Clarify the routine before escalating.",
  },
  "resistant-secondary-hypertension-006": {
    question: "Sustained elevation is confirmed despite tolerated, optimized complementary therapy and verified use. Which next approach fits true resistance?",
    choices: ["Stop investigating because adherence is confirmed", "Treat the office readings as white-coat effect", "Evaluate secondary causes and optimize add-on treatment", "Remove the diuretic to reduce the drug count"],
    answer: 2,
    rationale: "Confirmation permits cause-directed evaluation and treatment optimization; it does not end the workup.",
  },
  "resistant-secondary-hypertension-008": {
    question: "Why can adding drugs during unrecognized intermittent medication use cause harm when regular use resumes?",
    choices: ["Adherence makes every agent ineffective", "Refills automatically change the prescribed dose", "Resuming treatment proves an endocrine cause", "Combined exposure may lower pressure excessively"],
    answer: 3,
    rationale: "A regimen intensified during missed doses may become excessive with full exposure. Review use and response together.",
  },
  "resistant-secondary-hypertension-110": {
    question: "A patient referred for Paradise renal denervation has a stented renal artery. What should the team recognize?",
    choices: ["The stent guarantees procedural safety", "This is a listed device contraindication", "Stenting removes the need for anatomy review", "The device replaces all medicines afterward"],
    answer: 1,
    rationale: "FDA device information lists a stented renal artery among contraindications. Selection requires the exact device labeling; renal denervation remains adjunctive.",
  },
  "resistant-secondary-hypertension-049": {
    question: "A patient with resistant hypertension has a negative aldosterone-renin screen while potassium is 2.9 mEq/L. What is the best interpretation?",
    choices: ["Primary aldosteronism is excluded", "Correct potassium and repeat screening under appropriate conditions", "Low potassium confirms unilateral disease", "Proceed directly to adrenalectomy"],
    answer: 1,
    rationale: "Hypokalemia can suppress aldosterone and produce a false-negative result. Correct it and reassess; neither potassium nor this screen establishes laterality.",
  },
  "resistant-secondary-hypertension-050": {
    question: "An aldosterone-renin ratio is borderline positive during beta-blocker treatment. What should the reviewer consider?",
    choices: ["The medicine makes the result definitive", "Stop every antihypertensive immediately", "Medication-related renin suppression may cause a false positive", "A CT nodule would eliminate medication interference"],
    answer: 2,
    rationale: "Beta blockers can lower renin. Review hormone values and clinical probability; arrange safe medication adjustment and repeat testing when appropriate. Do not abruptly stop treatment or use imaging to validate the ratio.",
  },
  "resistant-secondary-hypertension-105": {
    question: "An adult taking Tryvio 12.5 mg daily asks to double the dose because a trial used 25 mg. Which response is correct?",
    choices: ["Use 25 mg whenever pressure remains high", "Alternate 12.5 and 25 mg", "Use 25 mg only with food", "The approved dose remains 12.5 mg daily; reassess the treatment plan"],
    answer: 3,
    rationale: "The 25 mg dose is not approved. It did not meaningfully improve pressure reduction over 12.5 mg and increased edema or fluid-retention risk.",
  },
  "resistant-secondary-hypertension-106": {
    question: "Aprocitentan is proposed for an adult with NYHA class III heart failure. What does its label support?",
    choices: ["Use is not recommended in this population", "Heart failure is its preferred indication", "Normal potassium removes the concern", "Start at 25 mg to improve congestion"],
    answer: 0,
    rationale: "Patients with NYHA III or IV heart failure were not studied and use is not recommended. Fluid retention is a relevant safety concern; normal potassium does not resolve it.",
  },
};

export const resistantSecondaryHypertensionQuestionBank = generatedQuestions.map((question) => ({
  ...question,
  ...reviewedCases[question.id],
}));
