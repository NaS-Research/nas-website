const concepts = [
  { name: "standardized patient preparation", lesson: "standardized-blood-pressure-measurement", principle: "Rest, posture, silence, bladder state, and recent activity can materially change measured pressure.", action: "Repeat measurement after standardized preparation before changing chronic treatment when the situation is not emergent.", assessment: "Document rest, back and feet support, arm height, talking, pain, bladder, caffeine, nicotine, and exercise.", hazard: "Treating a biased reading can cause unnecessary polypharmacy and symptomatic hypotension.", why: "Measurement conditions are part of the blood pressure result." },
  { name: "correct blood pressure cuff size", lesson: "standardized-blood-pressure-measurement", principle: "The cuff bladder must match arm circumference to transmit pressure accurately.", action: "Measure the arm and use a validated upper-arm cuff of the correct size.", assessment: "Verify device validation, cuff range, arm circumference, placement, clothing, and arm support.", hazard: "An undersized cuff commonly overestimates pressure and can create a false diagnosis.", why: "Cuff geometry changes the pressure required to occlude the artery." },
  { name: "repeated blood pressure average", lesson: "standardized-blood-pressure-measurement", principle: "Blood pressure varies, so repeated values across an accepted protocol estimate usual exposure better than one reading.", action: "Average repeated readings and confirm across occasions or structured home data.", assessment: "Review all values, timing, technique, heart rhythm, symptoms, medication timing, and calculated average.", hazard: "Selecting only the highest or lowest value distorts diagnosis and treatment response.", why: "Sampling several standardized readings reduces random and situational error." },
  { name: "white-coat hypertension", lesson: "standardized-blood-pressure-measurement", principle: "In untreated adults, office pressure is high while out-of-office averages are below the applicable threshold.", action: "Confirm with home or ambulatory monitoring and continue longitudinal risk assessment.", assessment: "Compare standardized office and out-of-office averages, organ damage, risk, and measurement technique.", hazard: "Assuming the pattern is harmless or treating it as sustained hypertension without confirmation can both cause harm.", why: "Setting-specific pressure requires outside-office evidence and ongoing surveillance." },
  { name: "masked hypertension", lesson: "standardized-blood-pressure-measurement", principle: "In untreated adults, office pressure is below the hypertension threshold while home or ambulatory pressure is high.", action: "Use validated outside-office measurement when risk, organ damage, or symptoms conflict with clinic readings.", assessment: "Review home or ambulatory averages, work and sleep timing, adherence, cuff accuracy, and organ damage.", hazard: "Relying only on normal clinic pressure can leave substantial cardiovascular risk untreated.", why: "The office setting can conceal usual daily pressure exposure." },
  { name: "secondary hypertension signal", lesson: "standardized-blood-pressure-measurement", principle: "Abrupt, severe, early, resistant, hypokalemic, or clinically discordant hypertension can indicate a reversible disease or exposure.", action: "Confirm the pressure pattern, then investigate the specific kidney, endocrine, sleep, vascular, medication, or substance clue.", assessment: "Review onset, age, potassium, kidney trend, sleep symptoms, episodic symptoms, pulses, medicines, supplements, alcohol, stimulants, and decongestants.", hazard: "Adding medicines without identifying the driver can leave a treatable cause active and increase adverse effects.", why: "Secondary evaluation is most useful when a clinical clue points to a mechanism that can change management." },
  { name: "stage 1 blood pressure classification", lesson: "blood-pressure-risk-and-targets", principle: "Average systolic 130 to 139 or diastolic 80 to 89 meets stage 1 classification only when neither component meets stage 2 criteria.", action: "Combine stage 1 pressure with cardiovascular disease, CKD, diabetes, prior stroke, and PREVENT risk to choose medication timing.", assessment: "Confirm average, risk factors, comorbidities, organ damage, lifestyle trial, and patient preference.", hazard: "Classification alone does not determine the same treatment plan for every patient.", why: "Medication thresholds depend on both pressure and total risk." },
  { name: "stage 2 blood pressure classification", lesson: "blood-pressure-risk-and-targets", principle: "Average systolic at least 140 or diastolic at least 90 meets stage 2 classification.", action: "Begin lifestyle plus two complementary first-line agents for most adults, preferably in one pill, after individual assessment.", assessment: "Confirm average, symptoms, organ damage, secondary clues, comorbidities, baseline labs, and treatment access.", hazard: "Delaying treatment or using one low-intensity agent can prolong high-risk exposure.", why: "Stage 2 pressure generally requires prompt multidrug control." },
  { name: "cardiac output and vascular resistance", lesson: "blood-pressure-risk-and-targets", principle: "Arterial pressure emerges from cardiac output and systemic vascular resistance, while sodium, volume, neurohormonal signaling, and vascular structure shape both.", action: "Use the clinical context to identify whether volume, sympathetic drive, RAAS activity, vascular tone, or another mechanism may be dominating.", assessment: "Evaluate pulse, volume status, kidney function, sodium exposure, medicines, vascular disease, endocrine clues, and pressure pattern.", hazard: "Treating every pressure phenotype as the same physiology can produce poor selection and missed secondary disease.", why: "Different mechanisms can generate the same cuff value and may require different diagnostic or therapeutic emphasis." },
  { name: "PREVENT risk threshold", lesson: "blood-pressure-risk-and-targets", principle: "Ten-year total cardiovascular risk at least 7.5 percent supports medication for selected stage 1 primary-prevention adults.", action: "Use the validated PREVENT calculator with confirmed pressure and shared decision-making.", assessment: "Verify calculator inputs, clinical CVD, diabetes, CKD, prior stroke, average pressure, and patient goals.", hazard: "Using an obsolete or incorrect calculator can change the treatment threshold.", why: "The 2025 guideline ties stage 1 treatment to the contemporary PREVENT framework." },
  { name: "blood pressure goal below 130/80", lesson: "blood-pressure-risk-and-targets", principle: "The overarching adult treatment goal is below 130 over 80 with specified individual considerations.", action: "Pursue the goal while adjusting for symptoms, pregnancy, institutional care, limited lifespan, perfusion, and preferences.", assessment: "Track home and office average, orthostasis, falls, perfusion, kidney trend, cognition, and treatment burden.", hazard: "Forcing a numerical goal despite intolerance can cause syncope, ischemia, or kidney injury.", why: "A population goal must remain safe for the individual." },
  { name: "DASH-like dietary pattern", lesson: "lifestyle-blood-pressure-therapy", principle: "A plant-rich, minimally processed dietary pattern with appropriate dairy and lower saturated fat supports pressure reduction.", action: "Adapt the pattern to culture, budget, food access, diabetes, kidney function, and patient preference.", assessment: "Use dietary recall, sodium, potassium context, food insecurity, weight trend, and achievable substitutions.", hazard: "Rigid advice detached from access and culture is unlikely to be sustained.", why: "Dietary efficacy depends on both nutrient pattern and real-world adherence." },
  { name: "dietary sodium reduction", lesson: "lifestyle-blood-pressure-therapy", principle: "Reducing excess sodium lowers pressure and can improve medication response, with variable individual sensitivity.", action: "Identify major sodium sources and set a measurable reduction plan rather than giving vague avoidance advice.", assessment: "Review processed food, restaurant intake, labels, urinary data when used, volume status, and pressure trend.", hazard: "Overly restrictive plans can reduce nutrition quality or cause volume problems in susceptible patients.", why: "Sodium intervention must balance pressure benefit with the whole diet and physiology." },
  { name: "dietary potassium caution", lesson: "lifestyle-blood-pressure-therapy", principle: "Potassium-rich foods may support pressure control but can be dangerous when excretion or medication balance is impaired.", action: "Review kidney function and potassium-raising medicines before recommending supplements or salt substitutes.", assessment: "Check potassium, eGFR, ACEi or ARB, MRA, ENaC blocker, trimethoprim, supplements, and diet.", hazard: "Unsupervised potassium salt substitutes can cause life-threatening hyperkalemia.", why: "Dietary advice changes total potassium burden and must respect renal reserve." },
  { name: "physical activity prescription", lesson: "lifestyle-blood-pressure-therapy", principle: "Regular aerobic and resistance activity lowers pressure and cardiovascular risk when sustained.", action: "Specify type, frequency, duration, intensity, progression, and a barrier plan.", assessment: "Review baseline capacity, symptoms, unstable disease, pressure, falls, environment, and follow-up adherence.", hazard: "Generic advice or unsafe rapid progression can lead to abandonment or injury.", why: "A measurable, individualized dose converts advice into treatment." },
  { name: "thiazide-type first-line therapy", lesson: "thiazide-product-selection-safety", principle: "Distal NCC inhibition and longer vascular adaptation provide effective chronic pressure lowering.", action: "Select the exact product by duration, evidence, kidney function, and comorbidity.", assessment: "Monitor electrolytes, kidney function, volume and pressure; assess urate, glucose and other risks as appropriate, and lithium levels if lithium is used.", hazard: "Hyponatremia or hypokalemia can develop after apparently routine initiation.", why: "First-line efficacy carries predictable renal and metabolic monitoring needs." },
  { name: "ACE inhibitor therapy", lesson: "raas-product-selection-safety", principle: "ACE inhibition reduces angiotensin II formation and bradykinin breakdown.", action: "Use for an appropriate indication with potassium, kidney, cough, angioedema, and pregnancy review.", assessment: "Check baseline and follow-up potassium and creatinine, pressure, volume, pregnancy potential, cough, and swelling.", hazard: "Angioedema or fetal toxicity can be life threatening.", why: "ACE inhibition changes both RAAS and bradykinin biology." },
  { name: "ARB therapy", lesson: "arb-product-selection-safety", principle: "AT1 receptor blockade interrupts angiotensin II signaling without directly inhibiting bradykinin breakdown.", action: "Use as an alternative RAAS blocker when appropriate, but never assume zero angioedema or pregnancy risk.", assessment: "Monitor potassium, creatinine, pressure, volume, pregnancy, prior angioedema, and interacting potassium burden.", hazard: "Combining with ACE inhibition or direct renin inhibition increases kidney and hyperkalemia harm.", why: "ARBs share major RAAS consequences despite a different target." },
  { name: "dihydropyridine calcium-channel blocker", lesson: "dihydropyridine-product-selection-safety", principle: "Long-acting vascular L-type calcium-channel blockade reduces arteriolar resistance.", action: "Choose the exact product and schedule, and counsel about edema, flushing, headache, and gingival effects.", assessment: "Track pressure, dependent edema, heart rate, gingiva, interactions, adherence, and alternative edema causes.", hazard: "Treating vasodilatory edema with escalating loop diuresis can add volume depletion without resolving the mechanism.", why: "Precapillary dilation raises dependent capillary hydrostatic pressure." },
  { name: "beta blocker indication-specific use", lesson: "beta-blocker-product-selection-safety", principle: "Beta blockers are selected for product-specific cardiac or other indications rather than uncomplicated hypertension by default.", action: "Match molecule and formulation to coronary disease, heart failure, arrhythmia, or another validated need.", assessment: "Review pulse, conduction, airway disease, heart failure stability, formulation, interactions, and withdrawal plan.", hazard: "Class-wide substitution or abrupt cessation can cause decompensation or ischemia.", why: "Beta blockers differ and their best role often comes from a comorbid indication." },
  { name: "stage 2 single-pill combination", lesson: "combination-and-comorbidity-selection", principle: "Two first-line mechanisms in one pill can improve adherence and speed control.", action: "Prefer an appropriate fixed-dose combination while preserving titration and safety monitoring.", assessment: "Confirm every ingredient, baseline labs, pressure gap, comorbidities, cost, supply, and adverse effects.", hazard: "Hidden duplicate ingredients can cause excessive RAAS, diuretic, or calcium-channel exposure.", why: "Combination efficiency depends on ingredient-level reconciliation." },
  { name: "complementary RAAS and calcium-channel therapy", lesson: "combination-and-comorbidity-selection", principle: "A RAAS blocker and dihydropyridine CCB lower pressure through different pathways and can offset selected adverse effects.", action: "Use when the patient can tolerate both mechanisms and monitoring is feasible.", assessment: "Track pressure, potassium, creatinine, edema, cough or swelling, pregnancy, and adherence.", hazard: "Calling the combination complementary does not eliminate each component's contraindications.", why: "Mechanistic complementarity improves efficacy but preserves component safety obligations." },
  { name: "albuminuric CKD RAAS blockade", lesson: "combination-and-comorbidity-selection", principle: "ACE inhibitor or ARB therapy can reduce intraglomerular pressure and albuminuria in appropriate CKD.", action: "Use one RAAS blocker and monitor potassium and kidney function after initiation or titration.", assessment: "Trend albuminuria, creatinine, potassium, pressure, volume, NSAIDs, renal artery clues, and adherence.", hazard: "Dual RAAS blockade increases hyperkalemia and acute kidney injury risk.", why: "Kidney benefit comes from appropriate single-pathway blockade and surveillance." },
  { name: "RAAS blocker pregnancy risk", lesson: "combination-and-comorbidity-selection", principle: "Drugs acting directly on the RAAS can cause fetal injury and should not be used in pregnancy.", action: "Stop and transition through urgent clinician-guided pregnancy care when exposure is identified.", assessment: "Review pregnancy status and plans, contraception context, gestational timing, kidney function, and alternatives.", hazard: "Continuing exposure can harm fetal kidney development and survival.", why: "Fetal RAAS function is essential to renal development and amniotic fluid homeostasis." },
  { name: "apparent resistant hypertension audit", lesson: "combination-and-comorbidity-selection", principle: "Persistent pressure on multiple agents may reflect measurement error, white-coat effect, nonuse, inadequate regimens, interfering substances, or secondary disease before true resistance is established.", action: "Confirm outside-office pressure and adherence, reconcile active ingredients and doses, optimize complementary therapy, remove contributors, and evaluate secondary causes before escalation.", assessment: "Review technique, home average, refill and use barriers, sodium, alcohol, NSAIDs, stimulants, decongestants, kidney function, potassium, sleep apnea, and regimen quality.", hazard: "Premature escalation can create polypharmacy and hypotension while the actual cause remains untreated.", why: "Resistant hypertension is a diagnosis reached after pseudoresistance and reversible drivers are systematically addressed." },
  { name: "structured home blood pressure monitoring", lesson: "hypertension-monitoring-and-access", principle: "Validated home averages reveal usual pressure and treatment response when collected through a consistent protocol.", action: "Teach rest, posture, repeated readings, timing, recording, and when to seek help.", assessment: "Validate cuff, compare with clinic device, inspect technique, average readings, symptoms, and medication timing.", hazard: "Chasing isolated home readings with extra medication can cause dangerous variability and hypotension.", why: "Trends and averages guide chronic therapy more safely than individual fluctuations." },
  { name: "class-specific laboratory monitoring", lesson: "hypertension-monitoring-and-access", principle: "Safety measurements must match the transport, hormonal, and hemodynamic effects of the chosen medicine.", action: "Schedule potassium, sodium, magnesium, and kidney checks according to class, patient risk, and titration.", assessment: "Review baseline values, follow-up timing, intercurrent illness, interacting drugs, symptoms, and response.", hazard: "A generic annual panel can miss early hyperkalemia, hyponatremia, or kidney decline.", why: "Different classes produce different early biochemical risks." },
  { name: "orthostatic blood pressure assessment", lesson: "hypertension-monitoring-and-access", principle: "A sustained fall of at least 20 systolic or 10 diastolic within three minutes of standing supports orthostatic hypotension when measured correctly.", action: "Measure resting and standing pressure with pulse, document associated symptoms safely, and address the cause rather than abandoning needed treatment automatically.", assessment: "Review timing, symptoms, falls, pulse response, volume, anemia, autonomic disease, meals, heat, and vasodilating, diuretic, or rate-slowing medicines.", hazard: "Ignoring orthostasis can cause falls and hypoperfusion, while overreacting to one poor measurement can leave cardiovascular risk uncontrolled.", why: "Position changes expose whether vascular, volume, and autonomic compensation can preserve perfusion." },
  { name: "nonjudgmental adherence assessment", lesson: "hypertension-monitoring-and-access", principle: "Medication use reflects cost, side effects, beliefs, schedule, cognition, language, access, and regimen design.", action: "Ask open questions about missed doses and solve the barrier before intensifying.", assessment: "Review refill access, costs, adverse effects, routines, literacy, mental health, work, transportation, and preference.", hazard: "Adding therapy to an unaddressed use problem increases complexity and adverse effects without control.", why: "The cause of nonuse determines the effective intervention." },
];

const dimensions = [
  ["principle", "Which principle best characterizes"],
  ["action", "Which clinical action best applies to"],
  ["assessment", "Which monitoring or assessment plan is most appropriate for"],
  ["hazard", "Which hazard is most important to prevent with"],
];

function distractors(index, field) {
  return [3, 8, 15].map((offset) => concepts[(index + offset) % concepts.length][field]);
}

const generatedHypertensionFoundationsQuestions = concepts.flatMap((concept, conceptIndex) =>
  dimensions.map(([field, prefix], dimensionIndex) => ({
    id: `hypertension-foundations-${String(conceptIndex * 4 + dimensionIndex + 1).padStart(3, "0")}`,
    question: `${prefix} ${concept.name}?`,
    choices: [concept[field], ...distractors(conceptIndex, field)],
    answer: 0,
    rationale: concept.why,
    reviewHref: `#${concept.lesson}`,
  })),
);

const reviewedHypertensionCases = {
  "hypertension-foundations-094": {"question": "Pregnancy is newly confirmed in a patient taking losartan for hypertension. Which action follows its boxed warning?", "choices": ["Continue until the third trimester", "Discontinue losartan as soon as possible and promptly coordinate an appropriate pregnancy treatment plan", "Replace it with lisinopril without further assessment", "Wait for abnormal fetal testing before changing therapy"], "answer": 1, "rationale": "The label directs discontinuation as soon as pregnancy is detected. Maternal hypertension still requires appropriate care; another RAS blocker does not solve the fetal-risk problem.", "reviewHref": "#combination-and-comorbidity-selection"},
  "hypertension-foundations-095": {"question": "A patient reports losartan exposure before recognizing pregnancy. Which assessment and counseling approach is appropriate?", "choices": ["State that exposure proves fetal injury", "Assume early exposure needs no medication review", "Review exposure timing and dose, pregnancy status and maternal treatment needs with the obstetric team without predicting an individual outcome from exposure alone", "Use the PREVENT score to decide whether fetal evaluation is needed"], "answer": 2, "rationale": "Exposure requires prompt review, discontinuation of losartan and pregnancy-specific care. Timing and clinical findings inform evaluation; exposure alone neither proves injury nor guarantees safety.", "reviewHref": "#combination-and-comorbidity-selection"},

  "hypertension-foundations-059": {"question": "Before increasing exercise intensity, a patient reports new chest pressure during exertion. What is the appropriate next step?", "choices": ["Increase intensity to test whether it improves", "Ignore the symptom because exercise lowers blood pressure", "Use extra antihypertensive doses before exercise", "Stop exertion and obtain medical evaluation before progressing"], "answer": 3, "rationale": "New exertional chest symptoms require assessment rather than routine exercise progression. Ongoing or concerning acute symptoms require emergency evaluation.", "reviewHref": "#lifestyle-blood-pressure-therapy"},
  "hypertension-foundations-073": {"rationale": "Dihydropyridines inhibit vascular L-type calcium channels, relaxing arteriolar smooth muscle and reducing peripheral resistance. This explains pressure lowering; edema is a separate consequence of altered capillary pressures."},
  "hypertension-foundations-076": {"question": "After assessment excludes systemic congestion and other causes, ankle edema is attributed to amlodipine. Why might simply escalating a loop diuretic be a poor response?", "choices": ["Every ankle swelling proves left-ventricular failure", "Drug-related precapillary dilation is not primarily total-body volume excess, so additional diuresis may cause depletion", "Amlodipine edema establishes permanent kidney failure", "Loop diuretics directly reverse L-type calcium-channel blockade"], "answer": 1, "rationale": "Amlodipine-related edema reflects altered capillary hydrostatic pressure. Reassess the causative regimen rather than assuming that edema alone requires more diuresis. Other edema causes must first be considered.", "reviewHref": "#dihydropyridine-product-selection-safety"},

  "hypertension-foundations-028": {"question": "Two adults have the same confirmed stage 1 blood-pressure average. One has established cardiovascular disease and the other has low primary-prevention risk. Which conclusion is appropriate?", "choices": ["The same category guarantees the same timing of medication", "Clinical disease and overall risk influence treatment timing even when the category matches", "Neither can receive medication until stage 2 develops", "The lower-risk patient never needs medication"], "answer": 1, "rationale": "Classification describes the pressure range. Clinical CVD, CKD, diabetes and estimated risk affect when medication is indicated; persistent lower-risk stage 1 pressure can also warrant medication after a lifestyle trial.", "reviewHref": "#blood-pressure-risk-and-targets"},
  "hypertension-foundations-035": {"question": "Two patients have the same cuff pressure. Can that pressure alone establish that their cardiac output, vascular resistance and volume status are identical?", "choices": ["Yes, the systolic value independently measures cardiac output", "Yes, equal diastolic values prove equal blood volume", "No, different hemodynamic combinations can produce the same pressure", "Yes, the pulse-pressure difference directly measures systemic vascular resistance"], "answer": 2, "rationale": "Cuff pressure does not separately measure flow, resistance or circulating volume. Clinical examination, history and appropriate investigations are needed to understand the mechanism.", "reviewHref": "#blood-pressure-risk-and-targets"},
  "hypertension-foundations-039": {"question": "For a primary-prevention treatment decision under the 2025 hypertension guideline, which PREVENT result should be compared with the 7.5% threshold?", "choices": ["Thirty-year ASCVD risk", "Ten-year heart-failure risk alone", "Thirty-year total CVD risk", "Ten-year total CVD risk"], "answer": 3, "rationale": "The threshold uses PREVENT ten-year total cardiovascular disease risk. Changing either the time horizon or outcome changes the quantity being compared.", "reviewHref": "#blood-pressure-risk-and-targets"},
  "hypertension-foundations-025": {"rationale": "Stage 1 requires systolic 130 to 139 or diastolic 80 to 89 without either component reaching stage 2. When the components fall in different categories, use the higher category."},

  "hypertension-foundations-031": {
    "question": "A nonpregnant adult has a confirmed average pressure of 126/92 mm Hg. Which category applies?",
    "choices": [
      "Normal",
      "Elevated",
      "Stage 1 hypertension",
      "Stage 2 hypertension"
    ],
    "answer": 3,
    "rationale": "The diastolic average reaches stage 2. Use the higher category when systolic and diastolic classifications differ.",
    "reviewHref": "#blood-pressure-risk-and-targets"
  },
  "hypertension-foundations-032": {
    "question": "A nonpregnant adult has confirmed average pressure of 144/76 mm Hg. Which interpretation avoids undertreatment?",
    "choices": [
      "The systolic component meets the stage 2 medication threshold despite the diastolic value",
      "Both values must be elevated before medication is considered",
      "The normal diastolic value cancels the systolic finding",
      "A low PREVENT score makes stage 2 a lifestyle-only category"
    ],
    "answer": 0,
    "rationale": "Either pressure component can qualify. Medication plus lifestyle is recommended at this confirmed systolic level, with individualized selection and tolerability assessment.",
    "reviewHref": "#blood-pressure-risk-and-targets"
  },
  "hypertension-foundations-079": {
    "question": "A patient taking metoprolol succinate extended-release also receives verapamil. Which shared effect requires particular attention?",
    "choices": [
      "Increased uric acid",
      "Slower heart rate and AV conduction",
      "Loss of potassium through the urine",
      "Increased thyroid hormone synthesis"
    ],
    "answer": 1,
    "rationale": "Both drugs can slow cardiac conduction and rate, increasing bradycardia risk. Review the combination and monitor accordingly.",
    "reviewHref": "#beta-blocker-product-selection-safety"
  },
  "hypertension-foundations-080": {
    "question": "A stable patient with coronary disease wants to electively stop chronic metoprolol succinate extended-release. What should counseling emphasize?",
    "choices": [
      "Stop immediately once pressure is controlled",
      "Use extra doses on alternate days",
      "Arrange clinician-supervised gradual withdrawal and monitoring",
      "Replace it with potassium supplements"
    ],
    "answer": 2,
    "rationale": "Abrupt beta-blocker withdrawal can worsen myocardial ischemia. Planned discontinuation needs a supervised taper; urgent adverse reactions require separate immediate assessment.",
    "reviewHref": "#beta-blocker-product-selection-safety"
  },
  "hypertension-foundations-018": {
    "question": "An untreated adult has consistently normal office readings but elevated readings from a validated home cuff. Which evaluation most directly clarifies this discordance?",
    "choices": [
      "Repeat only the office measurement next year",
      "Assess out-of-office averages using a structured home or ambulatory protocol",
      "Discard every home reading because the office value is normal",
      "Diagnose sustained hypertension from the single highest home value"
    ],
    "answer": 1,
    "rationale": "Both settings matter. Reliable out-of-office data can identify a masked pattern; isolated readings do not establish the usual pressure.",
    "reviewHref": "#standardized-blood-pressure-measurement"
  },
  "hypertension-foundations-019": {
    "question": "An untreated adult has office averages below the hypertension threshold and confirmed awake ambulatory averages above the applicable threshold. What is this pattern called?",
    "choices": [
      "White-coat hypertension",
      "Controlled hypertension on treatment",
      "Masked hypertension",
      "White-coat effect during treatment"
    ],
    "answer": 2,
    "rationale": "Masked hypertension describes high out-of-office pressure despite office values below threshold in someone not taking antihypertensive medication.",
    "reviewHref": "#standardized-blood-pressure-measurement"
  },
  "hypertension-foundations-020": {
    "question": "Why should confirmed elevated out-of-office pressure not be dismissed when office readings are normal?",
    "choices": [
      "Normal office readings prove that the cuff cannot be used at home",
      "The pattern proves a specific endocrine diagnosis",
      "Home measurements replace all future clinical assessment",
      "Usual pressure exposure and associated risk may be missed by office measurements alone"
    ],
    "answer": 3,
    "rationale": "A normal office result can conceal high pressure during daily life. The pattern requires clinical assessment rather than reassurance based only on the office value.",
    "reviewHref": "#standardized-blood-pressure-measurement"
  },
  "hypertension-foundations-098": {
    "question": "A patient is prescribed three complementary antihypertensives, but use is uncertain and no home or ambulatory measurements exist. What must be addressed before calling this true resistant hypertension?",
    "choices": [
      "Confirm actual medication use and out-of-office pressure, with review of technique and regimen adequacy",
      "Assume prescriptions prove daily ingestion",
      "Classify resistance from the number of tablets alone",
      "Use the lowest office value to declare control"
    ],
    "answer": 0,
    "rationale": "Apparent resistance can reflect nonuse, measurement error or a white-coat effect. Establish what therapy is actually taken and what pressure persists outside the office.",
    "reviewHref": "#combination-and-comorbidity-selection"
  },
  "hypertension-foundations-099": {
    "question": "A patient with apparent resistant hypertension mentions taking a nonprescription pain medicine every day. Which next question best evaluates a potentially interfering exposure?",
    "choices": [
      "What color is the bottle?",
      "Which active ingredient, dose and frequency are you using?",
      "Does the package say natural?",
      "Was the medicine bought without a prescription?"
    ],
    "answer": 1,
    "rationale": "Ingredient-level review can reveal an NSAID or another contributor. Dose and frequency help assess exposure; packaging and purchase location do not identify the pharmacology.",
    "reviewHref": "#combination-and-comorbidity-selection"
  },
  "hypertension-foundations-100": {
    "question": "A patient prescribed three blood-pressure medicines takes only one because two are unaffordable. What is the main problem with adding a fourth before resolving access?",
    "choices": [
      "It confirms that all prior drugs have failed",
      "It proves an endocrine cause",
      "It may add burden without correcting the reason the prescribed regimen was not taken",
      "It makes outside-office measurement unnecessary"
    ],
    "answer": 2,
    "rationale": "Escalation based on a regimen that is not actually being taken can misclassify resistance. Resolve the specific access barrier and reassess the effective regimen.",
    "reviewHref": "#combination-and-comorbidity-selection"
  },
  "hypertension-foundations-102": {
    "question": "A patient asks how to record repeated home readings. Which instruction best supports interpretation of the prescribed monitoring protocol?",
    "choices": [
      "Keep only the lowest reading each day",
      "Keep only readings above goal",
      "Replace the cuff with an unvalidated smartwatch",
      "Record all protocol readings, including their timing"
    ],
    "answer": 3,
    "rationale": "Selective recording distorts the apparent response. A complete log allows the care team to assess averages and patterns.",
    "reviewHref": "#hypertension-monitoring-and-access"
  },
  "hypertension-foundations-103": {
    "question": "A home log is consistently higher than clinic measurements. Before interpreting it as a treatment failure, which step most directly checks measurement validity?",
    "choices": [
      "Observe cuff fit and technique and review the device validation and complete log",
      "Increase all doses based on the highest logged value",
      "Ignore the home device permanently",
      "Recalculate the log using only readings that match the clinic"
    ],
    "answer": 0,
    "rationale": "Measurement technique and device suitability must be checked before interpreting discordant values. Valid persistent out-of-office elevation still requires clinical attention.",
    "reviewHref": "#hypertension-monitoring-and-access"
  },
  "hypertension-foundations-104": {
    "question": "A patient with a prescribed fixed daily regimen takes extra tablets after isolated high home readings, then feels faint. Which behavior needs correction?",
    "choices": [
      "Recording medication times",
      "Unsupervised extra dosing in response to individual readings",
      "Using the prescribed cuff size",
      "Sharing the complete log with the clinician"
    ],
    "answer": 1,
    "rationale": "The episode needs prompt assessment. Treatment changes should follow the agreed care plan; repeated extra doses can accumulate and produce hypotension.",
    "reviewHref": "#hypertension-monitoring-and-access"
  },
  "hypertension-foundations-107": {
    "question": "Spironolactone has just been started. The first planned potassium check is four weeks away. Which change best follows its prescribing information?",
    "choices": [
      "Wait until the annual physical",
      "Check only sodium at four weeks",
      "Arrange potassium testing within one week, with more frequent checks when risk warrants",
      "Omit testing if home pressure improves"
    ],
    "answer": 2,
    "rationale": "Spironolactone labeling calls for potassium within one week after initiation or titration and regularly afterward. The general guideline interval does not override an earlier product-specific check.",
    "reviewHref": "#hypertension-monitoring-and-access"
  },
  "hypertension-foundations-114": {
    "question": "A patient misses doses because the pharmacy closes before their shift ends. Which response directly addresses the reported barrier?",
    "choices": [
      "Add another daily medication first",
      "Repeat the same adherence warning",
      "Assume the missed doses are deliberate",
      "Work with the patient and pharmacy on an accessible pickup or delivery arrangement"
    ],
    "answer": 3,
    "rationale": "The stated problem is access. A feasible supply arrangement targets the cause and should be followed by reassessment of actual use.",
    "reviewHref": "#hypertension-monitoring-and-access"
  },
  "hypertension-foundations-115": {
    "question": "Refills appear regular, but a patient says dizziness makes them skip doses. What should the clinician assess next?",
    "choices": [
      "Symptoms, pressure, timing and the medicines actually taken",
      "Only whether the refill date is correct",
      "Only the number of tablets prescribed",
      "Whether a more expensive brand is available"
    ],
    "answer": 0,
    "rationale": "Refill records do not prove ingestion or tolerability. Understand the symptoms and actual dosing before deciding how to modify treatment.",
    "reviewHref": "#hypertension-monitoring-and-access"
  },
  "hypertension-foundations-110": {
    "question": "An older adult is being assessed in person using the CDC STEADI orthostatic protocol. Which sequence matches that protocol?",
    "choices": [
      "Seated measurement immediately after walking, then another seated measurement",
      "Five minutes lying down, then measurements at one and three minutes standing",
      "One standing reading without a baseline",
      "Ten minutes standing before the first pressure measurement"
    ],
    "answer": 1,
    "rationale": "The protocol includes a resting supine baseline and repeat standing pressure and pulse measurements. Record symptoms and support safe positioning.",
    "reviewHref": "#hypertension-monitoring-and-access"
  },
  "hypertension-foundations-111": {
    "question": "After appropriate supine rest, pressure is 148/84 mm Hg. It is 124/80 at one minute standing and 122/78 at three minutes. Which interpretation is supported?",
    "choices": [
      "No orthostatic fall because the diastolic decrease is less than 10",
      "Stage 2 hypertension is excluded by the standing readings",
      "The sustained systolic decrease meets the conventional orthostatic criterion",
      "Both systolic and diastolic thresholds must be met"
    ],
    "answer": 2,
    "rationale": "The systolic decreases are 24 and 26 mm Hg. Either the systolic or diastolic criterion can establish the conventional pressure-drop finding; symptoms and clinical context guide management.",
    "reviewHref": "#hypertension-monitoring-and-access"
  },
  "hypertension-foundations-112": {
    "question": "During a supervised standing assessment, a patient develops marked lightheadedness before a complete set of readings is obtained. What is the immediate priority?",
    "choices": [
      "Keep the patient standing until all measurements are complete",
      "Give an extra antihypertensive dose before reassessment",
      "Dismiss the symptom unless the diastolic change reaches 10 mm Hg",
      "Help the patient into a safe supported position and assess the symptoms"
    ],
    "answer": 3,
    "rationale": "Fall prevention and clinical assessment take priority over finishing the measurement schedule. Symptoms must not be ignored solely because a numerical criterion has not yet been documented.",
    "reviewHref": "#hypertension-monitoring-and-access"
  },
  "hypertension-foundations-082": {
    "question": "A nonpregnant adult has confirmed stage 2 hypertension and can tolerate two first-line drugs. An appropriate single-pill combination is affordable and available. Which initial strategy is preferred by the 2025 guideline?",
    "choices": [
      "Lifestyle treatment alone until a six-month trial is complete",
      "Lifestyle treatment plus two first-line classes in the single-pill combination",
      "Two drugs from the same first-line class to simplify monitoring",
      "A beta blocker alone solely because the pressure is stage 2"
    ],
    "answer": 1,
    "rationale": "For stage 2 hypertension, the guideline prefers two different first-line classes in one pill when appropriate. Lifestyle treatment continues alongside medication; product suitability and tolerability still matter.",
    "reviewHref": "#combination-and-comorbidity-selection"
  },
  "hypertension-foundations-083": {
    "question": "A patient is changing from separate tablets to a fixed-dose antihypertensive combination. Which reconciliation step most directly prevents accidental continuation of a replaced drug?",
    "choices": [
      "Compare tablet colors with the old prescription bottles",
      "Keep all old prescriptions active until the next annual visit",
      "Match each active ingredient and dose and document which old prescriptions are replaced",
      "Confirm only that the new brand name differs from the old names"
    ],
    "answer": 2,
    "rationale": "Combination products must be reconciled by ingredient and dose. A new brand name can conceal a drug already prescribed separately; explicit replacement instructions reduce duplication.",
    "reviewHref": "#combination-and-comorbidity-selection"
  },
  "hypertension-foundations-084": {
    "question": "A patient starts losartan/hydrochlorothiazide 50/12.5 mg daily but also continues hydrochlorothiazide 12.5 mg daily from the old regimen. The plan was to replace the separate tablet. What unintended daily hydrochlorothiazide exposure results?",
    "choices": [
      "6.25 mg",
      "12.5 mg",
      "50 mg",
      "25 mg"
    ],
    "answer": 3,
    "rationale": "The combination supplies 12.5 mg and the separate tablet supplies another 12.5 mg, totaling 25 mg daily. Reconcile the unintended duplication with the prescribed plan; being within a labeled dose range does not make an unintended dose correct.",
    "reviewHref": "#combination-and-comorbidity-selection"
  },
  "hypertension-foundations-086": {
    "question": "For uncomplicated hypertension requiring two agents, which option pairs an ARB with a dihydropyridine calcium-channel blocker?",
    "choices": [
      "Losartan plus amlodipine",
      "Losartan plus lisinopril",
      "Losartan plus aliskiren",
      "Losartan plus valsartan"
    ],
    "answer": 0,
    "rationale": "Amlodipine supplies a different first-line mechanism. The other options duplicate or combine renin-angiotensin system blockade and are not appropriate substitutes for this complementary pair.",
    "reviewHref": "#combination-and-comorbidity-selection"
  },
  "hypertension-foundations-087": {
    "question": "A patient taking amlodipine is now starting losartan. Which laboratory pair most directly monitors the added drug's potassium and kidney safety?",
    "choices": [
      "Hemoglobin and platelet count",
      "Serum potassium and creatinine",
      "TSH and free thyroxine",
      "ALT and bilirubin"
    ],
    "answer": 1,
    "rationale": "Losartan can increase potassium and alter kidney function. Potassium and creatinine monitoring addresses those risks; pressure, symptoms and other patient-specific assessments remain necessary.",
    "reviewHref": "#combination-and-comorbidity-selection"
  },
  "hypertension-foundations-088": {
    "question": "A patient with diabetes takes losartan and amlodipine. A prescription for aliskiren is added for further pressure reduction. Which finding requires correction of the regimen?",
    "choices": [
      "The calcium-channel blocker prevents aliskiren from lowering pressure",
      "Aliskiren and losartan should be combined only at bedtime",
      "Aliskiren with losartan is contraindicated in patients with diabetes",
      "Amlodipine must always be replaced by a second ARB"
    ],
    "answer": 2,
    "rationale": "Losartan labeling contraindicates coadministration with aliskiren in diabetes. Amlodipine does not remove that restriction. Select a safer regimen rather than attempting to solve the interaction by spacing doses.",
    "reviewHref": "#combination-and-comorbidity-selection"
  },
  "hypertension-foundations-042": {
  "question": "A patient develops recurrent near-syncope after antihypertensive intensification. What should happen before further dose escalation?",
  "choices": [
    "Ignore symptoms if the seated number is above goal",
    "Evaluate standing pressure, volume, medicines, and clinical tolerance",
    "Double every drug simultaneously",
    "Use an unvalidated watch instead of a cuff"
  ],
  "answer": 1,
  "rationale": "A target requires individual tolerability. Near-syncope warrants assessment for hypotension and other causes before intensification.",
  "reviewHref": "#blood-pressure-risk-and-targets"
},
  "hypertension-foundations-043": {
  "question": "Which follow-up finding most directly signals that a pressure-lowering regimen may be poorly tolerated?",
  "choices": [
    "A complete home log",
    "A correctly fitted cuff",
    "New fainting after dose escalation",
    "An affordable refill"
  ],
  "answer": 2,
  "rationale": "New syncope requires prompt clinical evaluation rather than assuming that reaching a numerical goal proves safety.",
  "reviewHref": "#blood-pressure-risk-and-targets"
},
  "hypertension-foundations-044": {
  "question": "A patient takes extra antihypertensive tablets whenever a single home reading is above goal. What is the main concern?",
  "choices": [
    "It guarantees better long-term control",
    "It removes the need for follow-up",
    "It makes cuff size irrelevant",
    "Unsupervised extra doses can cause excessive pressure reduction"
  ],
  "answer": 3,
  "rationale": "Chronic treatment is guided by valid averages and a prescribed plan. Dose stacking in response to individual readings can create hypotension.",
  "reviewHref": "#blood-pressure-risk-and-targets"
},
  "hypertension-foundations-046": {
  "question": "A patient cannot afford the fresh foods listed in a dietary handout. What is the most useful next step?",
  "choices": [
    "Develop affordable substitutions that preserve the dietary goals",
    "Declare the patient unwilling to change",
    "Require the same shopping list regardless of access",
    "Stop all medication until the list can be purchased"
  ],
  "answer": 0,
  "rationale": "A workable food plan must account for access and preferences. Practical substitutions preserve the intervention rather than abandoning it.",
  "reviewHref": "#lifestyle-blood-pressure-therapy"
},
  "hypertension-foundations-047": {
  "question": "A patient wants to lower sodium from packaged meals. Which information best supports choosing between products?",
  "choices": [
    "Package color",
    "Sodium per serving and the number of servings actually eaten",
    "Advertising claims alone",
    "The price without looking at the label"
  ],
  "answer": 1,
  "rationale": "The consumed amount depends on both sodium per serving and portion size. Package-level impressions can conceal a large sodium load.",
  "reviewHref": "#lifestyle-blood-pressure-therapy"
},
  "hypertension-foundations-048": {
  "question": "A container has two servings, each with 650 mg sodium. The patient eats the entire container. How much sodium was consumed?",
  "choices": [
    "325 mg",
    "650 mg",
    "1,300 mg",
    "2,600 mg"
  ],
  "answer": 2,
  "rationale": "Two servings times 650 mg per serving equals 1,300 mg. Counseling should use the portion consumed, not only the front-label serving value.",
  "reviewHref": "#lifestyle-blood-pressure-therapy"
},
  "hypertension-foundations-051": {
  "question": "A usual meal contains 1,200 mg sodium; an acceptable replacement contains 700 mg. With the same portion frequency, how much sodium is removed per meal?",
  "choices": [
    "500 mg",
    "700 mg",
    "1,200 mg",
    "1,900 mg"
  ],
  "answer": 0,
  "rationale": "Subtract the replacement from the original: 1,200 minus 700 equals 500 mg less sodium per meal. The complete daily intake still matters.",
  "reviewHref": "#lifestyle-blood-pressure-therapy"
},
  "hypertension-foundations-052": {
  "question": "A patient with severe symptomatic orthostatic hypotension asks whether to adopt the strictest sodium restriction automatically. What is the best response?",
  "choices": [
    "Apply the same restriction without assessment",
    "Individualize the sodium plan with the clinician based on the orthostatic condition",
    "Increase every antihypertensive first",
    "Assume symptoms establish normal kidney function"
  ],
  "answer": 1,
  "rationale": "Severe symptomatic orthostasis can modify usual sodium-reduction advice. The exception needs clinical assessment rather than a universal instruction.",
  "reviewHref": "#lifestyle-blood-pressure-therapy"
},
  "hypertension-foundations-054": {
  "question": "A patient with CKD taking losartan and spironolactone wants a potassium-chloride salt substitute. What should occur first?",
  "choices": [
    "Start unlimited use because it is not sodium",
    "Stop all medicines without consultation",
    "Review potassium, kidney function, and the combined potassium burden",
    "Assume salt substitutes contain no active minerals"
  ],
  "answer": 2,
  "rationale": "Impaired excretion and potassium-raising medicines can make added potassium hazardous. Review the actual product and laboratory context first.",
  "reviewHref": "#lifestyle-blood-pressure-therapy"
},
  "hypertension-foundations-055": {
  "question": "Which laboratory pair is most directly relevant before recommending added potassium to a patient with possible impaired excretion?",
  "choices": [
    "INR and bilirubin only",
    "Troponin and lactate only",
    "LDL and HDL only",
    "Serum potassium and creatinine-based kidney-function assessment"
  ],
  "answer": 3,
  "rationale": "Potassium and kidney function help assess accumulation risk; medication and dietary review are also necessary.",
  "reviewHref": "#lifestyle-blood-pressure-therapy"
},
  "hypertension-foundations-067": {
  "question": "An adult with hypertension has creatinine clearance 20 mL/min and is starting lisinopril. What initial dose follows the cited renal-adjustment label?",
  "choices": [
    "20 mg daily",
    "5 mg daily",
    "40 mg twice daily",
    "No ACE inhibitor can ever be used at this clearance"
  ],
  "answer": 1,
  "rationale": "For clearance 10 to 30 mL/min, halve the usual hypertension starting dose: 10 mg becomes 5 mg. Eligibility, volume, pressure, potassium, and subsequent kidney response still require assessment.",
  "reviewHref": "#raas-product-selection-safety"
},
  "hypertension-foundations-074": {
  "question": "A fragile older adult is beginning amlodipine for hypertension. Which starting dose is specifically permitted by the label for this situation?",
  "choices": [
    "20 mg daily",
    "10 mg every four hours",
    "2.5 mg daily",
    "50 mg daily"
  ],
  "answer": 2,
  "rationale": "The label permits a lower 2.5 mg starting dose in small, fragile, or older adults and in hepatic insufficiency. Titration follows response and tolerance.",
  "reviewHref": "#dihydropyridine-product-selection-safety"
},
  "hypertension-foundations-075": {
  "question": "A stable patient started amlodipine yesterday. There is no urgent indication for faster titration. What interval generally allows assessment before the next dose adjustment under the label?",
  "choices": [
    "Every hour",
    "After each isolated home reading",
    "Exactly six months in every patient",
    "7 to 14 days"
  ],
  "answer": 3,
  "rationale": "The usual interval is 7 to 14 days. Faster titration is reserved for clinically warranted situations with frequent assessment; severe hepatic impairment calls for slow titration.",
  "reviewHref": "#dihydropyridine-product-selection-safety"
},
  "hypertension-foundations-070": {
  "question": "A patient on lithium starts losartan. Which additional monitoring is specifically supported by the interaction warning?",
  "choices": [
    "Serum lithium concentration",
    "Weekly visual acuity alone",
    "No monitoring because only thiazides interact",
    "Daily INR in every patient"
  ],
  "answer": 0,
  "rationale": "Losartan can increase lithium concentration and toxicity risk. Arrange lithium monitoring rather than assuming the interaction is confined to diuretics.",
  "reviewHref": "#arb-product-selection-safety"
},
  "hypertension-foundations-071": {
  "question": "An older adult taking losartan and a diuretic is volume depleted and begins regular ibuprofen. Which risk should prompt medication and kidney-function review?",
  "choices": [
    "Guaranteed improvement in filtration",
    "Kidney injury and reduced antihypertensive effect",
    "Permanent elimination of hyperkalemia risk",
    "An interaction prevented by taking ibuprofen at bedtime"
  ],
  "answer": 1,
  "rationale": "NSAIDs can worsen renal function in susceptible patients receiving an ARB, including those with volume depletion or diuretic exposure. They may also blunt pressure lowering.",
  "reviewHref": "#arb-product-selection-safety"
},
  "hypertension-foundations-072": {
  "question": "Which proposed hypertension combination duplicates RAS blockade and should generally be avoided?",
  "choices": [
    "Losartan plus amlodipine",
    "Losartan plus chlorthalidone",
    "Losartan plus lisinopril",
    "Amlodipine plus chlorthalidone"
  ],
  "answer": 2,
  "rationale": "Combining an ARB and ACE inhibitor increases kidney, potassium, and hypotension harms. Different first-line mechanisms can be complementary when individually appropriate.",
  "reviewHref": "#arb-product-selection-safety"
},
  "hypertension-foundations-062": {
  "question": "A patient taking dofetilide receives a new hydrochlorothiazide prescription. Potassium is normal. What should the pharmacist do?",
  "choices": [
    "Dispense because potassium is normal",
    "Separate the drugs by two hours",
    "Resolve the contraindicated combination with the prescriber before dispensing",
    "Recommend grapefruit juice"
  ],
  "answer": 2,
  "rationale": "Hydrochlorothiazide raises dofetilide exposure and QT effects. Normal potassium or separating administration times does not remove the contraindication; combination tablets containing hydrochlorothiazide also count.",
  "reviewHref": "#thiazide-product-selection-safety"
},
  "hypertension-foundations-066": {
  "question": "The last lisinopril dose was Monday at 08:00. Assuming all other eligibility checks pass, when is the earliest sacubitril/valsartan dose that satisfies the required washout?",
  "choices": [
    "Monday at 20:00",
    "Tuesday at 08:00",
    "Tuesday at 12:00",
    "Tuesday at 20:00"
  ],
  "answer": 3,
  "rationale": "At least 36 hours must separate an ACE inhibitor and sacubitril/valsartan. Monday 08:00 plus 24 hours is Tuesday 08:00; another 12 hours reaches Tuesday 20:00. The interval reduces angioedema risk and applies in either direction.",
  "reviewHref": "#raas-product-selection-safety"
},
  "hypertension-foundations-002": {
  "question": "A patient arrives after brisk walking and immediately has a high reading. There are no acute symptoms. What should occur before using that value to intensify chronic therapy?",
  "choices": [
    "Diagnose resistant hypertension from this value",
    "Repeat under standardized resting conditions",
    "Double the medication immediately",
    "Use only the pulse pressure"
  ],
  "answer": 1,
  "rationale": "Recent activity can bias measurement. Repeat with proper preparation before making a chronic treatment decision; acute symptoms would require a different pathway.",
  "reviewHref": "#standardized-blood-pressure-measurement"
},
  "hypertension-foundations-003": {
  "question": "Which observation identifies a preparation error during routine seated blood-pressure measurement?",
  "choices": [
    "The back is supported",
    "The arm is supported at heart level",
    "The patient talks throughout measurement",
    "Both feet rest on the floor"
  ],
  "answer": 2,
  "rationale": "Talking interferes with standardized measurement. The other listed positions are appropriate.",
  "reviewHref": "#standardized-blood-pressure-measurement"
},
  "hypertension-foundations-004": {
  "question": "Why can increasing medication solely because of a poorly obtained high reading be harmful?",
  "choices": [
    "It makes all future measurements invalid",
    "It guarantees renal artery stenosis",
    "It prevents home monitoring",
    "It may overtreat the actual pressure and cause symptomatic hypotension"
  ],
  "answer": 3,
  "rationale": "A biased reading can exaggerate the treatment requirement. Confirm technique and the pressure pattern rather than equating one flawed result with chronic exposure.",
  "reviewHref": "#standardized-blood-pressure-measurement"
},
  "hypertension-foundations-007": {
  "question": "A cuff is being selected for a patient with a large upper arm. Which information directly determines whether that cuff fits?",
  "choices": [
    "The measured arm circumference and the manufacturer cuff range",
    "The patient age alone",
    "The most recent potassium level",
    "The color of the cuff"
  ],
  "answer": 0,
  "rationale": "Cuff selection must match measured arm size to the device cuff range; age and laboratory values do not establish fit.",
  "reviewHref": "#standardized-blood-pressure-measurement"
},
  "hypertension-foundations-010": {
  "question": "Two valid measurements are 138/84 and 132/80 mm Hg. What is their session average?",
  "choices": [
    "138/84",
    "132/80",
    "135/82",
    "270/164"
  ],
  "answer": 2,
  "rationale": "Average each component separately: (138+132)/2=135 and (84+80)/2=82. This session average alone does not replace confirmation across occasions.",
  "reviewHref": "#standardized-blood-pressure-measurement"
},
  "hypertension-foundations-011": {
  "question": "A home log includes several valid high and low readings. Which approach best preserves an unbiased average?",
  "choices": [
    "Keep only the lowest values",
    "Include all protocol-valid readings instead of selecting by value",
    "Delete high values until the mean reaches goal",
    "Keep only the first value each month"
  ],
  "answer": 1,
  "rationale": "Selection based on the result distorts the average. Technique and protocol determine validity, not whether a reading is convenient.",
  "reviewHref": "#standardized-blood-pressure-measurement"
},
  "hypertension-foundations-015": {
  "question": "An untreated adult has high office readings. Which comparison is essential to determine whether the pattern is white-coat hypertension?",
  "choices": [
    "Office pulse versus weight",
    "Two office readings taken seconds apart only",
    "Office average versus validated out-of-office averages and their thresholds",
    "Office pressure versus serum sodium"
  ],
  "answer": 2,
  "rationale": "The distinction depends on setting-specific pressure averages. A lower out-of-office value can still be hypertensive.",
  "reviewHref": "#standardized-blood-pressure-measurement"
},
  "hypertension-foundations-016": {
  "question": "A patient has confirmed white-coat hypertension. Which conclusion should be avoided?",
  "choices": [
    "Future blood-pressure follow-up is unnecessary",
    "Technique should remain standardized",
    "Cardiovascular risk still needs assessment",
    "Out-of-office readings can detect a changing pattern"
  ],
  "answer": 0,
  "rationale": "White-coat hypertension can progress to sustained hypertension. Confirmation is not a lifetime exemption from surveillance.",
  "reviewHref": "#standardized-blood-pressure-measurement"
},
  "hypertension-foundations-022": {
  "question": "A patient develops abrupt hypertension after starting an over-the-counter stimulant. What best addresses the suspected secondary contributor?",
  "choices": [
    "Ignore nonprescription products",
    "Assume all hypertension is inherited",
    "Label resistance before checking actual medication use",
    "Review the exposure and pressure pattern and arrange a clinician-guided plan"
  ],
  "answer": 3,
  "rationale": "A plausible medication or substance trigger needs explicit evaluation. It should not be obscured by reflexive escalation of antihypertensives.",
  "reviewHref": "#standardized-blood-pressure-measurement"
},
  "hypertension-foundations-023": {
  "question": "Which finding most directly strengthens the reason to evaluate a secondary cause in a patient with hypertension?",
  "choices": [
    "A preference for morning appointments",
    "Unexplained hypokalemia",
    "A correctly sized cuff",
    "A normal resting pulse"
  ],
  "answer": 1,
  "rationale": "Unexplained hypokalemia is a clue to causes such as primary aldosteronism. It prompts evaluation rather than establishing a diagnosis by itself.",
  "reviewHref": "#standardized-blood-pressure-measurement"
},
  "hypertension-foundations-024": {
  "question": "Why investigate a suspected secondary contributor rather than only adding another antihypertensive?",
  "choices": [
    "Every secondary cause resolves without treatment",
    "Testing guarantees that medicines can be stopped",
    "An untreated driver may persist while additional drugs add adverse effects",
    "Secondary hypertension cannot coexist with cardiovascular disease"
  ],
  "answer": 2,
  "rationale": "Identifying the driver can change management. Medication escalation alone may leave the cause active and increase treatment burden.",
  "reviewHref": "#standardized-blood-pressure-measurement"
},

  "hypertension-foundations-090": {
    "question": "Two weeks after starting an ACE inhibitor for albuminuric CKD, creatinine rises from 1.20 to 1.44 mg/dL. Potassium is normal, pressure is tolerated, and there are no acute illness or volume-depletion findings. What is the best interpretation?",
    "choices": [
      "The 20% rise alone requires permanent withdrawal",
      "The 20% rise alone does not mandate stopping; continue the clinical and laboratory follow-up",
      "The creatinine has risen 44%",
      "Add an ARB to reverse the change"
    ],
    "answer": 1,
    "rationale": "The change is (1.44 minus 1.20)/1.20 times 100 = 20%. KDIGO does not make this isolated change an automatic stopping indication; potassium, symptoms and clinical context remain important.",
    "reviewHref": "#combination-and-comorbidity-selection"
  },
  "hypertension-foundations-091": {
    "question": "An ACE inhibitor dose is increased in a stable adult with CKD. Which routine follow-up plan matches KDIGO guidance?",
    "choices": [
      "Wait one year for creatinine and potassium",
      "Check only the pulse the next morning",
      "Recheck pressure, creatinine and potassium within two to four weeks, adjusting timing to kidney function and potassium risk",
      "Stop all laboratory monitoring if home pressure improves"
    ],
    "answer": 2,
    "rationale": "KDIGO specifies this follow-up after initiation or dose increase. Symptoms or clinical instability require earlier assessment.",
    "reviewHref": "#combination-and-comorbidity-selection"
  }
,
  "hypertension-foundations-026": {
    "question": "A nonpregnant adult has confirmed average pressure 128/84 mm Hg, CKD, and no acute symptoms. Does the systolic value below 130 rule out medication under the 2025 guideline?",
    "choices": [
      "Yes; both components must cross the threshold",
      "No; CKD and average diastolic pressure at least 80 support medication plus lifestyle",
      "Yes; only systolic pressure guides treatment",
      "Yes; treatment must wait until diastolic pressure reaches 100"
    ],
    "answer": 1,
    "rationale": "Either pressure component can meet the treatment threshold. CKD supports initiation at average systolic at least 130 or diastolic at least 80; both need not be elevated.",
    "reviewHref": "#blood-pressure-risk-and-targets"
  },
  "hypertension-foundations-027": {
    "question": "A nonpregnant 50-year-old without CVD, diabetes or CKD has PREVENT ten-year total CVD risk 4%. After six months of lifestyle treatment, confirmed average pressure remains 134/82 mm Hg. What follows the 2025 recommendation?",
    "choices": [
      "Wait until both values exceed 160/100",
      "Stop lifestyle treatment",
      "Add antihypertensive medication while continuing lifestyle treatment",
      "Treat only individual high readings with extra doses"
    ],
    "answer": 2,
    "rationale": "Persistent average systolic at least 130 or diastolic at least 80 after a three- to six-month lifestyle trial supports adding medication in this lower-risk group.",
    "reviewHref": "#blood-pressure-risk-and-targets"
  },
  "hypertension-foundations-038": {
    "question": "An 83-year-old has persistent stage 1 hypertension. A PREVENT calculator will not accept that age. What is the appropriate response?",
    "choices": [
      "Enter 79 to force a score",
      "Assume zero cardiovascular risk",
      "Automatically deny treatment because a score is unavailable",
      "Use clinical benefit-harm assessment and goals of care without falsifying age"
    ],
    "answer": 3,
    "rationale": "PREVENT is validated for ages 30 to 79. Outside that range, an invented input does not establish risk; individualized clinical assessment guides treatment.",
    "reviewHref": "#blood-pressure-risk-and-targets"
  }
};

const mineralocorticoidAntagonistCases = [
  {
    "id": "hypertension-foundations-117",
    "question": "A prescription specifies CaroSpir 20 mg daily at 25 mg/5 mL. What volume supplies the prescribed dose?",
    "choices": [
      "4 mL",
      "5 mL",
      "20 mL",
      "25 mL"
    ],
    "answer": 0,
    "rationale": "The concentration is 5 mg/mL, so 20 divided by 5 equals 4 mL. This calculation assumes the prescribed suspension dose is already clinically appropriate.",
    "reviewHref": "#mineralocorticoid-antagonist-safety"
  },
  {
    "id": "hypertension-foundations-118",
    "question": "A tablet-to-CaroSpir substitution is requested. What must be checked before dispensing?",
    "choices": [
      "Whether the liquids have the same color",
      "The formulation-specific dosing plan rather than assuming tablet equivalence",
      "Whether all doses can be rounded to a tablespoon",
      "Only the patient age"
    ],
    "answer": 1,
    "rationale": "CaroSpir is not therapeutically equivalent to Aldactone tablets. Verify the intended product and dose; matching ingredient names is insufficient.",
    "reviewHref": "#mineralocorticoid-antagonist-safety"
  },
  {
    "id": "hypertension-foundations-119",
    "question": "Which pre-existing condition is a labeled contraindication to spironolactone?",
    "choices": [
      "Controlled dyslipidemia",
      "Seasonal rhinitis",
      "Addison disease",
      "Stable osteoarthritis"
    ],
    "answer": 2,
    "rationale": "Addison disease is an explicit spironolactone contraindication, alongside hyperkalemia and concurrent eplerenone.",
    "reviewHref": "#mineralocorticoid-antagonist-safety"
  },
  {
    "id": "hypertension-foundations-120",
    "question": "Which proposal should be rejected for a patient already taking spironolactone?",
    "choices": [
      "Check potassium within one week of a dose change",
      "Review potassium-containing supplements",
      "Assess renal function",
      "Add eplerenone without stopping spironolactone"
    ],
    "answer": 3,
    "rationale": "Concurrent eplerenone is contraindicated by spironolactone labeling. Two MRAs do not create a safe complementary regimen.",
    "reviewHref": "#mineralocorticoid-antagonist-safety"
  },
  {
    "id": "hypertension-foundations-121",
    "question": "For hypertension, can eplerenone be used in type 2 diabetes with microalbuminuria?",
    "choices": [
      "No; this is a labeled contraindication for that indication",
      "Yes, whenever the potassium result is normal",
      "Yes, if taken with food",
      "Yes, after spacing it from the ACE inhibitor"
    ],
    "answer": 0,
    "rationale": "The hypertension-specific exclusion applies even when a separate risk factor appears acceptable.",
    "reviewHref": "#mineralocorticoid-antagonist-safety"
  },
  {
    "id": "hypertension-foundations-122",
    "question": "An eligible patient taking a moderate CYP3A inhibitor needs eplerenone for hypertension. Which labeled starting dose applies?",
    "choices": [
      "50 mg twice daily",
      "25 mg daily",
      "100 mg daily",
      "25 mg four times daily"
    ],
    "answer": 1,
    "rationale": "Moderate inhibition requires the lower hypertension starting dose. A strong inhibitor would instead be contraindicated.",
    "reviewHref": "#mineralocorticoid-antagonist-safety"
  },
  {
    "id": "hypertension-foundations-123",
    "question": "A patient develops breast symptoms while taking eplerenone. Which statement is accurate?",
    "choices": [
      "Eplerenone cannot cause endocrine symptoms",
      "Symptoms prove nonadherence",
      "Symptoms need evaluation; greater selectivity does not guarantee absence of endocrine effects",
      "The dose should automatically be doubled"
    ],
    "answer": 2,
    "rationale": "The label reports gynecomastia and abnormal vaginal bleeding; an absolute no-effect claim is inaccurate.",
    "reviewHref": "#mineralocorticoid-antagonist-safety"
  },
  {
    "id": "hypertension-foundations-124",
    "question": "Spironolactone tablets at 100 mg daily have not achieved the desired hypertension response. Which principle should guide reassessment?",
    "choices": [
      "Every patient should be escalated immediately to 400 mg",
      "The hypertension dose range is identical for every formulation",
      "Potassium monitoring can stop at this dose",
      "Reassess the regimen and causes; doses above 100 mg usually add little pressure reduction"
    ],
    "answer": 3,
    "rationale": "The tablet hypertension label does not support assuming higher doses will keep improving pressure. Review the whole treatment plan and safety before changing therapy.",
    "reviewHref": "#mineralocorticoid-antagonist-safety"
  }
];

const potassiumChannelBlockerCases = [
  {
    "id": "hypertension-foundations-125",
    "question": "At amiloride 10 mg daily, potassium is normal but blood pressure remains high. Which interpretation of the label is correct?",
    "choices": [
      "The listed 20 mg dose is an automatic blood-pressure target",
      "Normal potassium proves the regimen needs no review",
      "Escalation above 10 mg is described for persistent hypokalemia, not automatic pressure titration",
      "The next dose must be 40 mg"
    ],
    "answer": 2,
    "rationale": "Reassess the hypertension regimen. The label qualifies escalation to 15 and 20 mg by persistent hypokalemia and monitoring.",
    "reviewHref": "#potassium-sparing-channel-blockers"
  },
  {
    "id": "hypertension-foundations-126",
    "question": "What total daily amounts are supplied by two triamterene/HCTZ 37.5/25 mg tablets?",
    "choices": [
      "75 mg triamterene and 50 mg HCTZ",
      "37.5 mg triamterene and 50 mg HCTZ",
      "75 mg triamterene and 25 mg HCTZ",
      "125 mg of each ingredient"
    ],
    "answer": 0,
    "rationale": "Multiply each component separately by two. The reviewed tablet label gives the two tablets together as one daily dose.",
    "reviewHref": "#potassium-sparing-channel-blockers"
  },
  {
    "id": "hypertension-foundations-127",
    "question": "A patient taking triamterene/HCTZ has a normal ECG. Which conclusion is justified?",
    "choices": [
      "Hyperkalemia has been excluded",
      "Potassium testing can stop",
      "The HCTZ guarantees normal potassium",
      "Serum potassium still requires measurement"
    ],
    "answer": 3,
    "rationale": "An ECG can remain normal with hyperkalemia. The combination can also leave some patients hypokalemic.",
    "reviewHref": "#potassium-sparing-channel-blockers"
  },
  {
    "id": "hypertension-foundations-128",
    "question": "A patient taking spironolactone is prescribed amiloride for diuretic-related potassium loss. What needs correction?",
    "choices": [
      "All diuretics must be taken at bedtime",
      "Concurrent potassium-sparing therapy conflicts with amiloride labeling",
      "Amiloride should simply be doubled",
      "The drugs become safe if spaced twelve hours apart"
    ],
    "answer": 1,
    "rationale": "Amiloride labeling excludes concurrent potassium-conserving agents such as spironolactone; spacing does not resolve potassium retention.",
    "reviewHref": "#potassium-sparing-channel-blockers"
  }
];

const thiazideProductCases = [
  {
    "id": "hypertension-foundations-130",
    "question": "An eligible adult is starting Thalitone specifically for hypertension. Which schedule matches the reviewed label?",
    "choices": [
      "100 mg daily, increased every day",
      "15 mg daily with food, with possible increase to 25 mg after two weeks",
      "25 mg every six hours",
      "Any chlorthalidone product can be substituted at an equal dose without review"
    ],
    "answer": 1,
    "rationale": "Thalitone has product-specific dosing and a substitution warning. Its hypertension label does not expect additional pressure lowering above 25 mg daily.",
    "reviewHref": "#thiazide-product-selection-safety"
  },
  {
    "id": "hypertension-foundations-131",
    "question": "An older woman starts indapamide 1.25 mg for hypertension. Which follow-up plan is appropriate?",
    "choices": [
      "Increase to 5 mg after two days if one home reading remains high",
      "Monitor potassium only because sodium cannot fall",
      "Omit laboratory follow-up because the starting dose is low",
      "Reassess pressure, symptoms, sodium, potassium and renal function before titration"
    ],
    "answer": 3,
    "rationale": "Indapamide can cause severe sodium and potassium disturbances. Low-dose initiation does not replace safety monitoring; the label uses four-week hypertension titration intervals.",
    "reviewHref": "#thiazide-product-selection-safety"
  }
];

const diureticSafetyCases = [
  {
    "id": "hypertension-foundations-132",
    "question": "A patient develops sudden eye pain and blurred vision several days after starting HCTZ. What is the best response?",
    "choices": [
      "Arrange urgent evaluation and prompt HCTZ discontinuation for possible drug-associated acute angle closure",
      "Wait four weeks for the next routine visit",
      "Move the same dose to bedtime",
      "Increase HCTZ because the symptoms establish uncontrolled hypertension"
    ],
    "answer": 0,
    "rationale": "The label identifies this potentially sight-threatening reaction. Prompt withdrawal and eye assessment are needed; stopping the drug alone may not resolve elevated eye pressure.",
    "reviewHref": "#thiazide-product-selection-safety"
  },
  {
    "id": "hypertension-foundations-133",
    "question": "Metolazone is added to furosemide for refractory edema in a patient with hypertension. Which risk requires a specific follow-up plan?",
    "choices": [
      "The drugs cancel each other\u2019s diuretic effect",
      "The combination guarantees normal potassium",
      "Unusually large or prolonged fluid and electrolyte losses",
      "Renal monitoring becomes unnecessary because urine output rises"
    ],
    "answer": 2,
    "rationale": "The combination can intensify diuresis. Track volume, symptoms, electrolytes, and renal function; increased urine output does not prove renal safety.",
    "reviewHref": "#thiazide-product-selection-safety"
  }
];

const diureticRouteAndAllergyCases = [
  {
    "id": "hypertension-foundations-135",
    "question": "The reviewed chlorothiazide sodium 500 mg vial is being prepared. Which instruction agrees with its label?",
    "choices": [
      "Give it intramuscularly if venous access is difficult",
      "Use 5 mL of water to match the oral suspension concentration",
      "Save the unused solution for the next day",
      "Reconstitute with 18 mL Sterile Water for Injection and discard unused solution"
    ],
    "answer": 3,
    "rationale": "This product is IV-only and preservative-free. The reviewed label requires at least 18 mL for reconstitution and immediate use; oral-product concentrations do not apply.",
    "reviewHref": "#thiazide-product-selection-safety"
  },
  {
    "id": "hypertension-foundations-136",
    "question": "A chart records a remote rash to trimethoprim-sulfamethoxazole, with no known thiazide exposure. What is the best interpretation when HCTZ is considered?",
    "choices": [
      "The patient is proven allergic to every sulfonamide-containing drug",
      "Clarify the reaction and reconcile labeling with the low expected antibiotic-to-nonantibiotic cross-reactivity",
      "The allergy history can be deleted without assessment",
      "Every patient needs an unsupervised home drug challenge"
    ],
    "answer": 1,
    "rationale": "The allergy parameter distinguishes these drug groups. A vague antibiotic allergy does not establish HCTZ allergy, but the actual history and product warning still require review.",
    "reviewHref": "#thiazide-product-selection-safety"
  }
];

const nifedipineFormulationCases = [
  {
    "id": "hypertension-foundations-137",
    "question": "A prescription changes between two extended-release nifedipine products. What must be verified before carrying forward the instructions?",
    "choices": [
      "Only that both tablet names contain nifedipine",
      "Only that the tablet colors match",
      "The exact formulation, dose, food instructions, and appropriate substitution status",
      "Whether the tablet can be crushed to make either product immediate release"
    ],
    "answer": 2,
    "rationale": "The reviewed labels differ in starting doses, dose ceilings and food instructions. A shared ingredient and extended-release designation do not establish identical use instructions.",
    "reviewHref": "#dihydropyridine-product-selection-safety"
  },
  {
    "id": "hypertension-foundations-138",
    "question": "A patient taking Procardia XL notices a tablet-like shell in stool, has no gastrointestinal symptoms, and maintains the expected pressure response. What is the best explanation?",
    "choices": [
      "The empty release-system shell can pass after the medicine has been released",
      "The entire dose was necessarily lost",
      "The next dose must be doubled",
      "Crushing future tablets will improve their release"
    ],
    "answer": 0,
    "rationale": "The shell may remain after controlled drug release. Continue whole-tablet administration; a shell alone differs from new symptoms suggesting obstruction.",
    "reviewHref": "#dihydropyridine-product-selection-safety"
  }
];

const additionalDhpProductCases = [
  {
    "id": "hypertension-foundations-139",
    "question": "An adult with hepatic impairment is starting felodipine ER. Which starting plan matches the reviewed label?",
    "choices": [
      "10 mg daily with a heavy meal",
      "2.5 mg daily with close blood-pressure monitoring",
      "5 mg twice daily without follow-up",
      "20 mg daily followed by rapid reduction"
    ],
    "answer": 1,
    "rationale": "The lower starting dose accounts for increased exposure; subsequent adjustment follows response and tolerance.",
    "reviewHref": "#dihydropyridine-product-selection-safety"
  },
  {
    "id": "hypertension-foundations-140",
    "question": "Isradipine 5 mg twice daily has not adequately controlled pressure after four weeks. Which interpretation should guide the next review?",
    "choices": [
      "The labeled maximum guarantees benefit from doubling the dose",
      "The dose must be increased every day until control occurs",
      "All twice-daily doses are inappropriate",
      "Above 10 mg/day, most patients gain no extra response and adverse effects increase"
    ],
    "answer": 3,
    "rationale": "Distinguish the permitted maximum from the dose-response evidence when reassessing the regimen.",
    "reviewHref": "#dihydropyridine-product-selection-safety"
  },
  {
    "id": "hypertension-foundations-141",
    "question": "A patient finishes breakfast at 8:00 AM and plans no further food before taking Sular. Which administration time meets the reviewed food instructions?",
    "choices": [
      "8:00 AM with breakfast",
      "8:30 AM",
      "10:00 AM",
      "9:00 AM"
    ],
    "answer": 2,
    "rationale": "Two hours after the meal meets the fasting interval; keep the tablet intact.",
    "reviewHref": "#dihydropyridine-product-selection-safety"
  }
];

const amlodipineLiquidCases = [
  {
    "id": "hypertension-foundations-143",
    "question": "Which counseling correctly distinguishes the reviewed amlodipine liquids?",
    "choices": [
      "Katerzia: shake and use room temperature; Norliqva: refrigerate",
      "Katerzia: shake and refrigerate; Norliqva: also refrigerate",
      "Katerzia: shake and refrigerate; Norliqva: labeled room temperature",
      "Katerzia: no shaking, room temperature; Norliqva: refrigerate"
    ],
    "answer": 2,
    "rationale": "A matching drug concentration does not establish matching storage and preparation instructions.",
    "reviewHref": "#dihydropyridine-product-selection-safety"
  },
  {
    "id": "hypertension-foundations-144",
    "question": "A patient prescribed amlodipine also takes simvastatin 40 mg daily. What issue needs resolution?",
    "choices": [
      "The simvastatin dose exceeds the 20 mg/day limit with amlodipine",
      "Amlodipine must always be increased to offset simvastatin",
      "Separating the doses removes the interaction limit",
      "Simvastatin 40 mg can continue unchanged if there are no muscle symptoms"
    ],
    "answer": 0,
    "rationale": "Review the lipid-lowering regimen with the prescriber; amlodipine increases simvastatin exposure.",
    "reviewHref": "#dihydropyridine-product-selection-safety"
  },
  {
    "id": "hypertension-foundations-145",
    "question": "A verified prescription calls for amlodipine 2.5 mg daily. The oral liquid contains 1 mg/mL. What volume delivers one dose?",
    "choices": [
      "0.25 mL",
      "1 mL",
      "25 mL",
      "2.5 mL"
    ],
    "answer": 3,
    "rationale": "Volume = dose ÷ concentration = 2.5 mg ÷ 1 mg/mL = 2.5 mL. Confirm the bottle and use a suitable oral measuring device.",
    "reviewHref": "#dihydropyridine-product-selection-safety"
  }
];

const nonDhpSafetyCases = [
  {
    "id": "hypertension-foundations-146",
    "question": "Which Cardizem LA maximum matches the reviewed hypertension label?",
    "choices": [
      "360 mg/day, copied from its angina regimen",
      "540 mg/day, with individualized response and safety review",
      "120 mg/day for every patient",
      "Any dose producing a normal pulse"
    ],
    "answer": 1,
    "rationale": "The product has indication-specific dose limits; tolerability still governs titration.",
    "reviewHref": "#nondihydropyridine-selection-safety"
  },
  {
    "id": "hypertension-foundations-147",
    "question": "Which indication is listed in the reviewed immediate-release Cardizem tablet label?",
    "choices": [
      "Chronic stable or coronary-spasm angina",
      "Uncomplicated hypertension only",
      "Hypertensive emergency by oral loading",
      "Heart failure with reduced ejection fraction"
    ],
    "answer": 0,
    "rationale": "Do not infer a labeled indication from placement in a textbook table.",
    "reviewHref": "#nondihydropyridine-selection-safety"
  },
  {
    "id": "hypertension-foundations-148",
    "question": "Which patient has a verapamil-specific contraindication beyond a routine pulse check?",
    "choices": [
      "A patient with controlled cholesterol",
      "A patient using home pressure monitoring",
      "A patient with atrial fibrillation and an accessory bypass tract",
      "A patient with uncomplicated reflux"
    ],
    "answer": 2,
    "rationale": "This rhythm substrate is an exclusion; a normal pulse at one visit does not establish eligibility.",
    "reviewHref": "#nondihydropyridine-selection-safety"
  }
];

const nonDhpInteractionCases = [
  {
    "id": "hypertension-foundations-149",
    "question": "A patient taking verapamil is prescribed lovastatin 40 mg daily. Which finding requires reconciliation?",
    "choices": [
      "The lovastatin label limits this combination to 20 mg/day",
      "The combination requires at least 40 mg/day",
      "The statin limit applies only when both doses are swallowed together",
      "No dose restriction applies if the patient has no muscle symptoms"
    ],
    "answer": 0,
    "rationale": "Use the stricter lovastatin labeling when resolving the discordant product instructions.",
    "reviewHref": "#nondihydropyridine-selection-safety"
  },
  {
    "id": "hypertension-foundations-150",
    "question": "Verapamil is added to a regimen containing digoxin. Which plan addresses the exposure interaction?",
    "choices": [
      "Check blood pressure alone",
      "Consider digoxin dose reduction and monitor its level along with clinical findings",
      "Increase digoxin automatically",
      "Wait for a slow pulse before reviewing the regimen"
    ],
    "answer": 1,
    "rationale": "The interaction affects digoxin exposure and conduction; clinical and concentration monitoring serve different purposes.",
    "reviewHref": "#nondihydropyridine-selection-safety"
  },
  {
    "id": "hypertension-foundations-151",
    "question": "A patient taking ivabradine is being considered for Cardizem LA. Which action matches the reviewed label?",
    "choices": [
      "Separate the drugs by two hours",
      "Proceed if today\u2019s pulse is normal",
      "Avoid the combination and resolve the treatment plan",
      "Combine them without further review at low doses"
    ],
    "answer": 2,
    "rationale": "Diltiazem increases ivabradine exposure and can worsen bradycardia and conduction disturbance.",
    "reviewHref": "#nondihydropyridine-selection-safety"
  }
];

const nonDhpFormulationCases = [
  {
    "id": "hypertension-foundations-152",
    "question": "Which Tiazac administration preserves the labeled sprinkle method?",
    "choices": [
      "Crush the beads into warm food",
      "Divide the beads into two smaller doses",
      "Place all contents on non-hot applesauce and swallow immediately without chewing",
      "Prepare several applesauce doses for the week"
    ],
    "answer": 2,
    "rationale": "Use the complete contents and preserve the beads; the mixture is for immediate use.",
    "reviewHref": "#nondihydropyridine-selection-safety"
  },
  {
    "id": "hypertension-foundations-153",
    "question": "A patient takes diltiazem ER 120 mg twice daily. What must be checked before replacing it with a 240 mg once-daily product?",
    "choices": [
      "Only whether the daily milligram total matches",
      "Only whether both capsules say ER",
      "Only whether the capsule colors match",
      "The exact release formulation, authorized substitution and new schedule"
    ],
    "answer": 3,
    "rationale": "The 12-hour and once-daily products cannot be treated as identical instructions merely because their daily totals match.",
    "reviewHref": "#nondihydropyridine-selection-safety"
  },
  {
    "id": "hypertension-foundations-154",
    "question": "Which instruction matches Calan SR rather than automatically borrowing from Verelan PM?",
    "choices": [
      "Take with food on the prescribed morning or divided schedule",
      "Always use the Verelan PM bedtime schedule",
      "Take only on an empty stomach",
      "Divide a capsule\u2019s pellets to obtain the starting dose"
    ],
    "answer": 0,
    "rationale": "Calan SR has its own food and scheduling instructions.",
    "reviewHref": "#nondihydropyridine-selection-safety"
  },
  {
    "id": "hypertension-foundations-155",
    "question": "Cardizem CD mentions studies at 540 mg/day but its hypertension dosing paragraph describes doses up to 480 mg/day. What should the learner conclude?",
    "choices": [
      "540 mg is required before adding another medicine",
      "Distinguish trial exposure from the product\u2019s dosing instructions",
      "Every diltiazem ER product has a 540 mg maximum",
      "The capsule strength alone defines the maximum daily dose"
    ],
    "answer": 1,
    "rationale": "Read the indication-specific dosing paragraph and safety context rather than converting every studied dose into a prescribing recommendation.",
    "reviewHref": "#nondihydropyridine-selection-safety"
  }
];

export const hypertensionFoundationsQuestionBank = [
  {"id": "hypertension-foundations-200", "question": "A patient recovering from an acute myocardial infarction wants L-arginine for blood-pressure and heart protection because it supports nitric-oxide synthesis. Which response best fits the evidence?", "choices": ["The mechanism establishes improved survival", "It can replace prescribed antihypertensives after one normal reading", "Do not recommend it after acute MI; a randomized trial found no measured vascular or ventricular benefit and raised a mortality concern", "Every supplement that lowers pressure has proven cardiovascular benefit"], "answer": 2, "rationale": "Biologic plausibility and a pressure effect are not evidence of improved clinical outcomes. The VINTAGE MI trial supports avoiding this recommendation after acute myocardial infarction.", "reviewHref": "#lifestyle-blood-pressure-therapy"},
  {"id": "hypertension-foundations-198", "question": "A patient previously taking terazosin 10 mg daily has taken none for several days. Which plan follows the reviewed label?", "choices": ["Resume 10 mg because tolerance always persists", "Double the first dose to replace missed exposure", "Contact the prescriber and restart the initial 1 mg bedtime regimen with retitration", "Replace terazosin with 10 mg prazosin"], "answer": 2, "rationale": "First-dose hypotension can recur after interruption. The label directs restarting the initial regimen rather than the former maintenance dose.", "reviewHref": "#combination-and-comorbidity-selection"},
  {"id": "hypertension-foundations-199", "question": "Which statement correctly distinguishes doxazosin products?", "choices": ["Cardura XL is not labeled for hypertension, and its BPH starting instructions differ from immediate release", "Cardura XL and immediate release always have identical starting doses", "Both products have a 16 mg BPH maximum", "The XL tablet removes postural hypotension risk"], "answer": 0, "rationale": "Immediate-release Cardura has separate hypertension and BPH regimens. XL is a BPH product with a 4 mg breakfast start; release formulation changes the instructions.", "reviewHref": "#combination-and-comorbidity-selection"},

  {"id": "hypertension-foundations-195", "question": "A patient on prolonged hydralazine therapy has a positive ANA but no compatible symptoms or other abnormalities. What is the appropriate interpretation?", "choices": ["Assess the clinical picture and treatment benefit; ANA positivity alone does not establish lupus", "Diagnose drug-induced lupus from ANA positivity alone", "Ignore future fever or arthralgia because ANA is already positive", "Increase hydralazine to suppress the antibody"], "answer": 0, "rationale": "ANA positivity alone does not diagnose clinical lupus. The label requires weighing the result against clinical findings and benefit; systemic symptoms or blood abnormalities need further action.", "reviewHref": "#direct-vasodilator-selection-monitoring"},
  {"id": "hypertension-foundations-196", "question": "A patient receiving oral minoxidil develops new dyspnea and rapid weight gain. What is the safest assessment?", "choices": ["Reassure because hypertrichosis predicts only cosmetic effects", "Assume all symptoms reflect harmless ankle edema", "Promptly assess volume and cardiac complications, including possible pericardial effusion", "Wait until the next routine annual visit"], "answer": 2, "rationale": "Minoxidil can cause serious fluid retention and pericardial effusion. New cardiopulmonary symptoms require prompt assessment; echocardiography is indicated when pericardial disease is suspected.", "reviewHref": "#direct-vasodilator-selection-monitoring"},
  {"id": "hypertension-foundations-197", "question": "Which routine adult minoxidil dosing statement matches the reviewed hypertension label?", "choices": ["Start 100 mg daily and reduce after one week", "Start 5 mg daily, with ordinary dose adjustments at least three days apart", "Use topical foam to replace a missed tablet dose", "Increase the dose every six hours without monitored care"], "answer": 1, "rationale": "The adult initial dose is 5 mg/day; the label ordinarily allows at least three days between changes. Rapid adjustments described for carefully monitored care are not a routine outpatient instruction.", "reviewHref": "#direct-vasodilator-selection-monitoring"},

  {"id": "hypertension-foundations-193", "question": "A patient taking methyldopa develops a positive direct Coombs test. What does this finding establish?", "choices": ["Definite hemolytic anemia", "A need to assess for hemolysis; positivity alone is not diagnostic of anemia", "A lifelong contraindication to every central agonist", "A reason to increase methyldopa"], "answer": 1, "rationale": "Coombs positivity may occur without hemolysis. Evaluate blood counts and evidence of red-cell destruction. Methyldopa-related hemolytic anemia requires stopping the medicine without rechallenge.", "reviewHref": "#central-alpha-agonist-product-safety"},
  {"id": "hypertension-foundations-194", "question": "Methyldopa is being added to a non-thiazide antihypertensive. What initial daily limit does the reviewed tablet label specify?", "choices": ["3 g once daily", "2 g in four doses", "750 mg in three doses", "500 mg in divided doses"], "answer": 3, "rationale": "The add-on instruction limits initiation to 500 mg/day in divided doses with non-thiazide antihypertensives. The general starting range and maximum maintenance dose do not override this instruction.", "reviewHref": "#central-alpha-agonist-product-safety"},

  {"id": "hypertension-foundations-190", "question": "A patient applies the first Catapres-TTS patch. Which transition instruction is appropriate?", "choices": ["Stop all prior antihypertensives immediately", "Arrange prescribed overlap or gradual reduction because initial effect may take 2 to 3 days", "Use only the adhesive cover for the first day", "Treat the daily patch rate as an exact oral dose conversion"], "answer": 1, "rationale": "Initial transdermal effect is delayed. Prior treatment may need to continue during a monitored transition; abrupt oral clonidine withdrawal is hazardous.", "reviewHref": "#central-alpha-agonist-product-safety"},
  {"id": "hypertension-foundations-191", "question": "Which instruction correctly describes the Catapres-TTS adhesive cover?", "choices": ["It supplies an extra clonidine dose", "It replaces the patch before MRI", "It can be worn alone for seven days", "It helps secure a loosening medicated patch but contains no drug"], "answer": 3, "rationale": "The cover supports adhesion only. A significantly loosened or detached patch needs replacement, and the aluminum-containing system must be removed before MRI.", "reviewHref": "#central-alpha-agonist-product-safety"},
  {"id": "hypertension-foundations-192", "question": "Which statement about guanfacine withdrawal is accurate?", "choices": ["The ER label uses reductions no greater than 1 mg every 3 to 7 days with pressure and pulse monitoring", "Every formulation must be stopped within exactly 2 days", "IR and ER are interchangeable at the same milligram dose", "No pressure change on the first day proves withdrawal is safe"], "answer": 0, "rationale": "Formulation matters. The ER label specifies this taper, while immediate-release withdrawal can produce a delayed pressure rise. A universal central-agonist taper is inappropriate.", "reviewHref": "#central-alpha-agonist-product-safety"},

  {"id": "hypertension-foundations-188", "question": "Does pindolol partial agonist activity establish safety in bronchospastic disease?", "choices": ["Yes, it eliminates pulmonary risk", "No, the label does not support that inference", "Yes, if resting pulse is normal", "Yes, at any antihypertensive dose"], "answer": 1, "rationale": "ISA does not remove the relevant contraindications or prove protection from bronchospasm.", "reviewHref": "#beta-blocker-product-selection-safety"},
  {"id": "hypertension-foundations-189", "question": "A patient taking labetalol develops jaundice and laboratory evidence of liver injury. What does the reviewed warning direct?", "choices": ["Continue until the next annual visit", "Increase the dose", "Stop, do not restart, and urgently assess", "Rechallenge after one missed dose"], "answer": 2, "rationale": "Labetalol-associated liver injury can be severe. Assess urgently and arrange alternative care.", "reviewHref": "#beta-blocker-product-selection-safety"},

  {"id": "hypertension-foundations-186", "question": "Which instruction belongs to Inderal XL for hypertension?", "choices": ["Start 80 mg at bedtime with consistent food timing", "Use the LA dose ceiling automatically", "Start 640 mg daily", "Alternate fasting and fed doses"], "answer": 0, "rationale": "XL uses its own bedtime regimen, beginning at 80 mg and increasing to 120 mg if needed.", "reviewHref": "#beta-blocker-product-selection-safety"},
  {"id": "hypertension-foundations-187", "question": "Which nadolol interval matches the reviewed renal table at creatinine clearance 8 mL/min/1.73 m2?", "choices": ["Every 6 hours", "Every 12 hours", "Every 24 hours without review", "Every 40 to 60 hours"], "answer": 3, "rationale": "The lowest clearance category extends the interval. The prescribed dose and exact schedule still require individual review.", "reviewHref": "#beta-blocker-product-selection-safety"},

  {"id": "hypertension-foundations-185", "question": "A calculation exercise applies a 75% reduction to an acebutolol regimen of 800 mg/day. What daily amount remains before checking the clinical prescription?", "choices": ["600 mg", "400 mg", "100 mg", "200 mg"], "answer": 3, "rationale": "800 multiplied by 0.25 equals 200 mg/day. A percentage calculation still requires review of organ function, indication, formulation and clinical response.", "reviewHref": "#beta-blocker-product-selection-safety"},
  {"id": "hypertension-foundations-183", "question": "Using the reviewed atenolol renal table, which daily maximum applies at creatinine clearance 12 mL/min/1.73 m2?", "choices": ["100 mg", "50 mg", "25 mg", "200 mg"], "answer": 2, "rationale": "Below 15, the table limits atenolol to 25 mg/day; assess tolerability and the actual clinical setting.", "reviewHref": "#beta-blocker-product-selection-safety"},
  {"id": "hypertension-foundations-184", "question": "Which nebivolol starting dose follows labeling for moderate hepatic impairment?", "choices": ["40 mg daily", "20 mg daily", "5 mg twice daily", "2.5 mg daily"], "answer": 3, "rationale": "Use the lower start and slow titration. Severe hepatic impairment instead excludes treatment.", "reviewHref": "#beta-blocker-product-selection-safety"},

  {"id": "hypertension-foundations-182", "question": "An adult needs another first-line agent alongside losartan for confirmed hypertension. Which option adds a complementary mechanism without duplicating RAAS blockade?", "choices": ["Lisinopril", "Aliskiren", "Amlodipine", "A second ARB"], "answer": 2, "rationale": "Amlodipine adds long-acting dihydropyridine calcium-channel blockade. The other choices duplicate RAAS pathways and add avoidable harm. Review the patient before selecting a dose.", "reviewHref": "#first-line-antihypertensive-therapy"},
  {"id": "hypertension-foundations-180", "question": "Which Coreg CR instruction is supported?", "choices": ["Save sprinkled beads overnight", "Chew the beads", "Use hot applesauce", "Consume all beads on non-warm applesauce immediately"], "answer": 3, "rationale": "The capsule may be opened, but its modified-release beads and immediate-use instructions must be preserved.", "reviewHref": "#beta-blocker-product-selection-safety"},
  {"id": "hypertension-foundations-181", "question": "Which Kapspargo tube setup matches labeling?", "choices": ["A 6 French tube with crushed pellets", "A 12 French or larger nasogastric tube with the specified water preparation", "Any tube with dry pellets", "A syringe without water"], "answer": 1, "rationale": "Use the product-specific 15 mL water preparation and deliver promptly, ensuring all pellets are administered.", "reviewHref": "#beta-blocker-product-selection-safety"},

  {"id": "hypertension-foundations-178", "question": "A Toprol-XL dose requires half a scored tablet. Which instruction is correct?", "choices": ["Crush the half", "Chew the half", "Swallow the half without crushing or chewing", "Replace it with any beta blocker"], "answer": 2, "rationale": "Scoring permits division without destroying the extended-release tablet by chewing or crushing.", "reviewHref": "#beta-blocker-product-selection-safety"},
  {"id": "hypertension-foundations-179", "question": "Carvedilol is being titrated solely for hypertension. Which daily ceiling matches the reviewed tablet label?", "choices": ["50 mg/day", "100 mg/day", "200 mg/day", "No ceiling if pulse is normal"], "answer": 0, "rationale": "The hypertension regimen stops at 25 mg twice daily. Other indications must not supply its dose limit.", "reviewHref": "#beta-blocker-product-selection-safety"},

  {"id": "hypertension-foundations-177", "question": "Itraconazole is proposed for someone taking aliskiren. Which response fits labeling?", "choices": ["Separate doses by two hours", "Avoid the combination", "Double aliskiren", "Change only meal timing"], "answer": 1, "rationale": "Itraconazole increases aliskiren exposure; spacing is not the labeled solution.", "reviewHref": "#raas-product-selection-safety"},
  {"id": "hypertension-foundations-174", "question": "Valsartan solution is 4 mg/mL. A prescription specifies 40 mg twice daily. What is the volume per dose and total daily volume?", "choices": ["10 mL per dose; 20 mL/day", "20 mL per dose; 40 mL/day", "40 mL per dose; 80 mL/day", "5 mL per dose; 10 mL/day"], "answer": 0, "rationale": "40 mg divided by 4 mg/mL equals 10 mL. Two doses total 20 mL/day. This calculation does not authorize tablet substitution.", "reviewHref": "#arb-product-selection-safety"},
  {"id": "hypertension-foundations-175", "question": "A patient requests replacement of Diovan tablets with the reviewed valsartan solution using the same once-daily schedule. What needs review?", "choices": ["Only the flavor", "Only the bottle size", "The solution is not therapeutically equivalent and has its own dosing instructions", "Nothing if the daily milligram total matches"], "answer": 2, "rationale": "Higher peak exposure and formulation-specific instructions require review of both dose and frequency.", "reviewHref": "#arb-product-selection-safety"},
  {"id": "hypertension-foundations-176", "question": "Which Atacand starting dose follows the reviewed adult hypertension label in moderate hepatic insufficiency?", "choices": ["32 mg daily", "16 mg twice daily", "No hepatic consideration is needed", "8 mg daily"], "answer": 3, "rationale": "Moderate hepatic insufficiency has a lower labeled start. Severe hepatic insufficiency lacks a dosing recommendation.", "reviewHref": "#arb-product-selection-safety"},

  {"id": "hypertension-foundations-171", "question": "Colesevelam is scheduled at 12:00. Which olmesartan time provides the reviewed interaction spacing?", "choices": ["08:00", "10:00", "12:00", "13:00"], "answer": 0, "rationale": "Give olmesartan at least four hours before colesevelam.", "reviewHref": "#arb-product-selection-safety"},
  {"id": "hypertension-foundations-172", "question": "Which packaging plan follows the reviewed Edarbi label?", "choices": ["Repackage into clear weekly bags", "Dispense and store in its original container", "Remove all tablets from the bottle before storage", "Crush tablets into a month of food portions"], "answer": 1, "rationale": "Original-container storage protects the product from light and moisture.", "reviewHref": "#arb-product-selection-safety"},
  {"id": "hypertension-foundations-173", "question": "A patient taking digoxin stops telmisartan. What monitoring remains relevant?", "choices": ["None because only starting causes interactions", "Only platelet counts", "Digoxin levels as the interacting regimen changes", "Only a yearly ECG"], "answer": 2, "rationale": "The reviewed label calls for digoxin-level monitoring when telmisartan is initiated, adjusted or discontinued.", "reviewHref": "#arb-product-selection-safety"},

  {"id": "hypertension-foundations-168", "question": "A patient with hepatic cirrhosis is starting trandolapril for hypertension. Which initial regimen follows the reviewed label?", "choices": ["0.5 mg daily", "4 mg twice daily", "8 mg daily", "The full dose because only renal function matters"], "answer": 0, "rationale": "Hepatic cirrhosis changes the labeled starting dose even without severe renal impairment.", "reviewHref": "#raas-product-selection-safety"},
  {"id": "hypertension-foundations-169", "question": "Why should the reviewed quinapril tablet be checked when tetracycline is prescribed?", "choices": ["Quinapril reliably increases tetracycline absorption", "All ACE inhibitors have the same excipients", "Tablet magnesium can reduce tetracycline absorption", "Tetracycline eliminates ACE inhibitor angioedema risk"], "answer": 2, "rationale": "The formulation can cause an absorption interaction. Review product-specific coadministration instructions.", "reviewHref": "#raas-product-selection-safety"},
  {"id": "hypertension-foundations-170", "question": "A hospitalized patient is changing from IV enalaprilat to oral enalapril. What is the appropriate approach?", "choices": ["Copy each IV dose and interval to the oral order", "Use the label\u2019s route-conversion instructions with renal function and response review", "Multiply the IV daily dose by ten automatically", "Use the highest book dose because oral absorption is incomplete"], "answer": 1, "rationale": "The route-specific regimen depends on renal function and the effective IV dose; this is not a one-to-one substitution.", "reviewHref": "#raas-product-selection-safety"},

  {"id": "hypertension-foundations-165", "question": "A patient takes fosinopril at 08:00 and needs the aluminum/magnesium/simethicone antacid described in its label. Which time provides the recommended separation?", "choices": ["08:00", "08:30", "10:00", "09:00"], "answer": 2, "rationale": "The label advises a two-hour interval because the antacid may reduce fosinopril absorption.", "reviewHref": "#raas-product-selection-safety"},
  {"id": "hypertension-foundations-166", "question": "An adult with creatinine clearance 25 mL/min is being considered for perindopril erbumine. Which response follows the reviewed label?", "choices": ["Use its usual 16 mg maximum without adjustment", "The product is not recommended below creatinine clearance 30 mL/min", "Start at 8 mg twice daily", "Give the whole weekly dose after dialysis"], "answer": 1, "rationale": "This product has a renal-use restriction, not merely a universal ACE inhibitor dose reduction.", "reviewHref": "#raas-product-selection-safety"},
  {"id": "hypertension-foundations-167", "question": "Breakfast is at 08:00. Which instruction matches moexipril administration?", "choices": ["Take it at 08:00 with breakfast", "Take it at 08:30 after breakfast", "Meal timing never matters", "Take it at 07:00, one hour before breakfast"], "answer": 3, "rationale": "Moexipril has a premeal administration requirement. Do not transfer another ACE inhibitor\u2019s food instructions.", "reviewHref": "#raas-product-selection-safety"},

  {"id": "hypertension-foundations-162", "question": "Which preparation instruction matches the reviewed Epaned bottle?", "choices": ["Add water to reconstitute a powder", "Use the supplied 1 mg/mL solution without reconstitution", "Concentrate it before measuring each dose", "Convert the dose using 0.764 mg/mL rather than its labeled strength"], "answer": 1, "rationale": "The reviewed product is ready to use. Its labeled dose concentration is 1 mg/mL of enalapril maleate.", "reviewHref": "#raas-product-selection-safety"},
  {"id": "hypertension-foundations-163", "question": "A patient with renal impairment starts captopril. Which additional monitoring follows its neutropenia warning?", "choices": ["Only annual hemoglobin", "No blood count unless potassium rises", "Weekly platelet counts alone", "Baseline white-cell count with differential, about every two weeks for three months, then periodically"], "answer": 3, "rationale": "Renal impairment increases concern for neutropenia; infection symptoms require prompt evaluation.", "reviewHref": "#raas-product-selection-safety"},
  {"id": "hypertension-foundations-164", "question": "Which initial ramipril dose follows the reviewed hypertension label for creatinine clearance 25 mL/min?", "choices": ["1.25 mg once daily", "5 mg twice daily", "10 mg once daily", "20 mg once daily"], "answer": 0, "rationale": "Renal impairment changes the initial dose and ceiling; the usual maximum should not be carried over unchanged.", "reviewHref": "#raas-product-selection-safety"},

  {"id": "hypertension-foundations-159", "question": "Two equal-strength oral ER products under the same Orange Book heading have only AB1 and AB2 ratings, respectively. What does this establish?", "choices": ["They are equivalent because both begin with AB", "The numbered groups do not establish equivalence to each other", "The larger number identifies the preferred product", "Equal milligrams override the different codes"], "answer": 1, "rationale": "Numbered AB codes distinguish equivalence groups. Check the exact product rather than treating the ER abbreviation as proof of interchangeability.", "reviewHref": "#nondihydropyridine-selection-safety"},
  {"id": "hypertension-foundations-160", "question": "Which statement correctly reconciles the reviewed grapefruit instructions?", "choices": ["All CCB labels prohibit grapefruit identically", "A verapamil interaction study proves grapefruit is safe with nifedipine", "Only the dosing time matters", "Procardia XL directs avoidance; Verelan PM describes increased exposure with different clinical wording"], "answer": 3, "rationale": "Counsel using the exact product label and patient context. Neither a universal prohibition nor universal reassurance accurately represents these labels.", "reviewHref": "#nondihydropyridine-selection-safety"},
  {"id": "hypertension-foundations-161", "question": "A patient stopped an ACE inhibitor eight weeks ago after angioedema and has no history of ARB-related angioedema. Which statement reflects the 2025 hypertension guideline?", "choices": ["An ARB can be considered after individualized review, with counseling about recurrent angioedema", "Restarting the same ACE inhibitor is preferred after six weeks", "An ARB carries no angioedema risk", "The 36-hour ARNI washout proves that an ARB was safe immediately"], "answer": 0, "rationale": "The guideline permits an ARB beginning six weeks after ACE inhibitor discontinuation. This is an option requiring benefit-risk review, not proof of zero risk or permission to restart the ACE inhibitor.", "reviewHref": "#raas-product-selection-safety"},

  {"id": "hypertension-foundations-156", "question": "A patient takes verapamil IR 80 mg three times daily. Under the reviewed morning SR capsule label, what total daily dose can be used for an initial conversion with reassessment?", "choices": ["80 mg", "120 mg", "240 mg", "480 mg"], "answer": 2, "rationale": "80 mg multiplied by three doses equals 240 mg/day. The specific morning SR label permits the same total daily dose on conversion, with individualized titration.", "reviewHref": "#nondihydropyridine-selection-safety"},
  {"id": "hypertension-foundations-157", "question": "A patient with HFrEF and an ejection fraction of 35% needs better blood-pressure control. Which conclusion about verapamil is correct?", "choices": ["It is suitable because EF is above 30%", "A pacemaker would eliminate all ventricular-function concerns", "Changing to immediate release removes the heart-failure concern", "The current hypertension guideline advises against non-DHP CCBs in HFrEF"], "answer": 3, "rationale": "The guideline boundary applies to HFrEF, not only the severe dysfunction example highlighted in some labels.", "reviewHref": "#nondihydropyridine-selection-safety"},
  {"id": "hypertension-foundations-158", "question": "Blood pressure improves on verapamil, but malaise and right-upper-quadrant pain occur with elevated transaminases. What is the best response?", "choices": ["Continue without review because blood pressure improved", "Evaluate possible drug-related liver injury", "Treat the findings as evidence of inadequate antihypertensive dosing", "Change the dosing time without further evaluation"], "answer": 1, "rationale": "Verapamil labeling describes hepatocellular injury and recommends periodic liver-function monitoring. Blood-pressure benefit does not exclude toxicity.", "reviewHref": "#nondihydropyridine-selection-safety"},

  ...generatedHypertensionFoundationsQuestions.map((item) => ({
    ...item,
    ...(reviewedHypertensionCases[item.id] || {}),
  })),
  ...mineralocorticoidAntagonistCases,
  ...potassiumChannelBlockerCases,
  ...thiazideProductCases,
  ...diureticSafetyCases,
  ...diureticRouteAndAllergyCases,
  ...nifedipineFormulationCases,
  ...additionalDhpProductCases,
  ...amlodipineLiquidCases,
  ...nonDhpSafetyCases,
  ...nonDhpInteractionCases,
  ...nonDhpFormulationCases,
  {"id": "hypertension-foundations-142", "question": "Which readings best assess the dose-interval effect when starting oral nicardipine?", "choices": ["Only immediately before swallowing", "One to two hours after dosing and at the eight-hour trough", "Only once each month", "Only during sleep"], "answer": 1, "rationale": "Peak and trough checks assess both early hypotension and persistence of pressure control.", "reviewHref": "#dihydropyridine-product-selection-safety"},
  {
    "id": "hypertension-foundations-134",
    "question": "Diuril suspension is 250 mg/5 mL. A patient is prescribed 500 mg twice daily. What is the total daily volume?",
    "choices": [
      "10 mL",
      "20 mL",
      "40 mL",
      "100 mL"
    ],
    "answer": 1,
    "rationale": "Each 500 mg dose is 10 mL at 50 mg/mL. Two doses equal 20 mL daily, delivering 1,000 mg total. Do not confuse each-dose volume with the daily total.",
    "reviewHref": "#thiazide-product-selection-safety"
  },
  {
    "id": "hypertension-foundations-129",
    "question": "Which statement correctly distinguishes standalone Dyrenium capsules from triamterene/HCTZ tablets?",
    "choices": [
      "Every triamterene formulation uses the same starting dose",
      "Dyrenium 100 mg twice daily is routine first-line hypertension treatment",
      "Dyrenium has labeled edema indications; its standalone dose must not be transferred to the combination tablet",
      "The combination tablet has no potassium restrictions"
    ],
    "answer": 2,
    "rationale": "Product and indication determine the regimen. Dyrenium labeling describes edema treatment; the reviewed combination tablet has a separate single-daily-dose schedule.",
    "reviewHref": "#potassium-sparing-channel-blockers"
  },
  {"id": "hypertension-foundations-201", "question": "A prescription changes from one Tenoretic 50 tablet daily to one Tenoretic 100 tablet daily. Which component change should the pharmacist identify?", "choices": ["Both atenolol and chlorthalidone double", "Atenolol rises from 50 to 100 mg; chlorthalidone remains 25 mg", "Chlorthalidone rises from 25 to 50 mg; atenolol remains 50 mg", "The total daily dose of each component is unchanged"], "answer": 1, "rationale": "The two strengths contain atenolol/chlorthalidone 50/25 mg and 100/25 mg. Read each ingredient rather than interpreting the product number as the total combination dose.", "reviewHref": "#combination-and-comorbidity-selection"},
  {"id": "hypertension-foundations-202", "question": "A clinician considers potassium replacement for severe hypokalemia in a patient taking triamterene/HCTZ capsules. Which response best follows the reviewed capsule label?", "choices": ["Potassium supplements are safe without laboratory follow-up", "Potassium-containing salt substitutes are an equivalent substitute", "A monitored exception may be considered; verify the exact product and treatment plan", "Every triamterene product prohibits potassium replacement under all circumstances"], "answer": 2, "rationale": "The reviewed capsule label allows supplementation for severe hypokalemia with careful potassium monitoring. Do not generalize this exception to every formulation or routine supplementation.", "reviewHref": "#potassium-sparing-channel-blockers"},
  {"id": "hypertension-foundations-203", "question": "A clinician has selected Micardis HCT 160/25 mg daily under its reviewed US label. Which tablet calculation supplies that total?", "choices": ["Two 80/25 mg tablets", "One 80/25 mg tablet", "Two 80/12.5 mg tablets", "Four 40/12.5 mg tablets"], "answer": 2, "rationale": "Two tablets each containing telmisartan 80 mg and HCTZ 12.5 mg supply 160/25 mg. Two 80/25 mg tablets or four 40/12.5 mg tablets supply HCTZ 50 mg instead. This checks a prescribed total; it is not an initial-treatment recommendation.", "reviewHref": "#combination-and-comorbidity-selection"},
  {"id": "hypertension-foundations-204", "question": "An eligible 30 kg child is prescribed an initial Qbrelis dose of 0.07 mg/kg once daily. The bottle contains 1 mg/mL. What volume delivers the calculated dose?", "choices": ["0.21 mL", "2.1 mL", "5 mL", "21 mL"], "answer": 1, "rationale": "0.07 mg/kg multiplied by 30 kg equals 2.1 mg, below the 5 mg initial cap. Dividing by 1 mg/mL gives 2.1 mL. Check age, renal eligibility and the prescription before administration.", "reviewHref": "#raas-product-selection-safety"},
  {"id": "hypertension-foundations-205", "question": "An eligible 30 kg child is prescribed losartan 0.7 mg/kg once daily. The pharmacy dispenses the labeled 2.5 mg/mL suspension. What volume supplies each dose?", "choices": ["0.84 mL", "8.4 mL", "21 mL", "52.5 mL"], "answer": 1, "rationale": "The dose is 30 × 0.7 = 21 mg, below the 50 mg initial cap. At 2.5 mg/mL, 21 ÷ 2.5 = 8.4 mL. Verify the actual dispensed concentration, shake as directed and use an oral dosing device.", "reviewHref": "#arb-product-selection-safety"},
];
