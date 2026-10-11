const concepts = [
  { name: "clinical definition of heart failure", lesson: "heart-failure-definition-and-staging", principle: "Heart failure is a clinical syndrome caused by structural or functional cardiac abnormality and supported by elevated filling pressures, natriuretic peptides, or objective congestion when the diagnosis is uncertain.", action: "Combine symptoms and signs with structural, functional, biomarker, or hemodynamic evidence rather than diagnosing from dyspnea alone.", assessment: "Review symptoms, examination, ECG, chest imaging, natriuretic peptide context, echocardiography, filling-pressure evidence, and competing pulmonary, renal, hepatic, hematologic, and deconditioning causes.", hazard: "Calling every edema or dyspnea presentation heart failure can miss important cardiac and noncardiac mimics.", why: "The syndrome requires clinical and objective evidence in the correct context." },
  { name: "ACC and AHA heart failure stages", lesson: "heart-failure-definition-and-staging", principle: "Stages A through D describe progressive disease from risk, to pre-heart failure, to symptomatic disease, to advanced refractory illness and do not move backward after symptoms occur.", action: "Assign stage from risk factors, structural or biomarker evidence, symptom history, and advanced-disease features.", assessment: "Review cardiovascular risk, cardiotoxic exposure, ventricular structure and function, biomarkers, current and prior symptoms, hospitalizations, treatment tolerance, and advanced-therapy needs.", hazard: "Equating a symptom-free interval after treatment with return from stage C to stage B erases the history of symptomatic disease.", why: "Stage records disease progression and prior symptomatic heart failure remains clinically important." },
  { name: "ejection-fraction phenotypes", lesson: "heart-failure-definition-and-staging", principle: "Current phenotypes include HFrEF at 40 percent or less, HFmrEF at 41 to 49 percent, HFpEF at 50 percent or greater, and HFimpEF after prior ejection fraction of 40 percent or less rises above 40 percent.", action: "Document the current ejection fraction, prior nadir, measurement method, timing, and clinical syndrome before assigning phenotype.", assessment: "Review serial ejection fractions, image quality, loading conditions, symptoms, filling pressures, structural disease, and treatment history.", hazard: "Calling improved ejection fraction cured can lead to withdrawal of disease-modifying therapy and relapse.", why: "Recovery of the measured fraction does not prove elimination of the cardiomyopathic substrate." },
  { name: "limitations of ejection fraction", lesson: "heart-failure-definition-and-staging", principle: "Ejection fraction is load dependent and measures the proportion of end-diastolic volume ejected, not contractility, stroke volume, filling pressure, or tissue health by itself.", action: "Interpret ejection fraction alongside ventricular size, stroke volume, strain, wall thickness, valve disease, hemodynamics, and clinical context.", assessment: "Review end-diastolic and end-systolic volumes, blood pressure, valve lesions, image quality, strain, stroke volume, filling indices, and serial change.", hazard: "A preserved ejection fraction can coexist with low stroke volume, high filling pressure, severe stiffness, or infiltrative disease.", why: "A ratio can remain preserved despite abnormal chamber size, loading, and myocardial mechanics." },
  { name: "pressure-volume loop foundations", lesson: "pump-mechanics-and-remodeling", principle: "The pressure-volume loop integrates filling, isovolumic contraction, ejection, and relaxation, with stroke volume represented by loop width and stroke work by enclosed area.", action: "Use loop changes to separate altered preload, afterload, contractility, compliance, and valve behavior.", assessment: "Review end-diastolic and end-systolic volume and pressure, loop width, end-systolic pressure-volume relation, diastolic pressure-volume relation, and valve timing.", hazard: "Attributing every change in stroke volume to contractility ignores load and compliance.", why: "Stroke volume emerges from interacting preload, afterload, contractility, and diastolic properties." },
  { name: "preload", lesson: "pump-mechanics-and-remodeling", principle: "Preload reflects myocardial fiber stretch near end diastole and is influenced by venous return, blood volume, filling time, ventricular compliance, and atrial contribution.", action: "Interpret filling pressure as an imperfect surrogate and distinguish useful filling from congestion.", assessment: "Review volume status, venous pressure, filling pressures, ventricular compliance, rhythm, valve disease, diastolic filling, and response to position or therapy.", hazard: "Assuming a higher filling pressure always means greater effective preload ignores a stiff ventricle and venous congestion.", why: "Pressure can rise sharply with little volume increase when compliance is low." },
  { name: "afterload", lesson: "pump-mechanics-and-remodeling", principle: "Afterload is the load opposing ventricular ejection and reflects arterial pressure, vascular resistance, impedance, valve obstruction, chamber geometry, and wall stress.", action: "Identify the dominant vascular, valvular, or geometric contributor before predicting the effect on stroke volume and oxygen demand.", assessment: "Review blood pressure, systemic vascular resistance, aortic valve gradient, arterial stiffness, ventricular radius and wall thickness, and forward output.", hazard: "Treating afterload as identical to cuff blood pressure can miss aortic stenosis or arterial impedance.", why: "The ventricle ejects against a composite load rather than one measured pressure." },
  { name: "contractility and Frank-Starling response", lesson: "pump-mechanics-and-remodeling", principle: "Contractility describes load-independent myocardial force generation, while Frank-Starling recruitment increases stroke volume with filling only within the ventricle's functional range.", action: "Distinguish reduced inotropy from inadequate filling, excessive afterload, valve disease, or stiffness before interpreting low output.", assessment: "Review end-systolic relationship, ejection pattern, stroke volume, blood pressure, filling, ischemia, metabolic state, and response to load change.", hazard: "Giving more fluid after the Starling curve has flattened can worsen congestion without restoring output.", why: "Advanced dysfunction can convert added filling pressure into edema rather than meaningful stroke volume." },
  { name: "systolic dysfunction", lesson: "pump-mechanics-and-remodeling", principle: "Systolic dysfunction reflects impaired force generation or ejection, often with increased end-systolic volume, reduced stroke volume, neurohormonal activation, and progressive dilation.", action: "Identify ischemic, genetic, inflammatory, toxic, valvular, tachycardic, and loading causes while defining reversibility.", assessment: "Review ejection fraction, volumes, strain, wall motion, coronary disease, valve lesions, rhythm burden, family history, toxins, myocarditis, and hemodynamics.", hazard: "Using reduced ejection fraction as the final diagnosis can miss the etiology that determines recovery and family risk.", why: "HFrEF is a phenotype produced by multiple disease mechanisms." },
  { name: "diastolic dysfunction", lesson: "pump-mechanics-and-remodeling", principle: "Diastolic dysfunction can arise from impaired relaxation, increased chamber stiffness, loss of atrial contribution, tachycardia, ischemia, hypertrophy, or infiltration and produces pressure-sensitive filling.", action: "Integrate symptoms, rhythm, blood pressure, echo indices, natriuretic peptides, exercise response, and mimics rather than relying on one diastolic variable.", assessment: "Review left atrial size, tissue Doppler, transmitral flow, tricuspid velocity, ventricular geometry, rhythm, filling pressure, exercise findings, and structural mimics.", hazard: "A normal resting pressure or natriuretic peptide does not exclude exercise-induced HFpEF, especially with obesity.", why: "Abnormal filling pressure can emerge only during stress and biomarkers can be suppressed by adiposity." },
  { name: "sympathetic nervous system activation", lesson: "neurohormonal-compensation", principle: "Reduced effective perfusion and baroreceptor signaling increase sympathetic tone, initially supporting rate, contractility, and pressure but chronically driving tachycardia, vasoconstriction, arrhythmia, ischemia, and remodeling.", action: "Recognize cold extremities, tachycardia, vasoconstriction, arrhythmia, and high catecholamine states as compensatory signals with long-term cost.", assessment: "Review heart rate, blood pressure, perfusion, rhythm, ischemia, beta-agonist exposure, sleep and stress state, and chronic remodeling.", hazard: "Calling persistent sympathetic activation beneficial because it raises pressure ignores myocardial oxygen demand and toxicity.", why: "Short-term compensation becomes a long-term disease amplifier." },
  { name: "renin-angiotensin-aldosterone activation", lesson: "neurohormonal-compensation", principle: "Reduced renal perfusion, sympathetic drive, and sodium delivery activate RAAS, increasing vasoconstriction, sodium retention, potassium loss, fibrosis, and remodeling.", action: "Connect renal sodium avidity and vascular tone to congestion, afterload, potassium, kidney function, and progressive myocardial fibrosis.", assessment: "Review blood pressure, sodium and water balance, potassium, kidney function, venous congestion, perfusion, diuretic response, and remodeling phenotype.", hazard: "Interpreting all creatinine rise as simple underperfusion can miss venous-pressure-driven kidney dysfunction.", why: "Cardiorenal physiology reflects both arterial delivery and venous back pressure." },
  { name: "natriuretic peptide system", lesson: "neurohormonal-compensation", principle: "BNP and NT-proBNP reflect myocardial wall stress and support diagnosis and prognosis, while age, atrial fibrillation, kidney disease, obesity, acute timing, and therapy alter their values.", action: "Interpret the peptide as contextual evidence and trend it only when the clinical question and assay are appropriate.", assessment: "Review assay type, age, body size, rhythm, kidney function, acute versus chronic state, prior values, filling pressure, and neprilysin-inhibitor exposure.", hazard: "Using one universal cutoff across obesity, AF, kidney dysfunction, and acute disease can create false reassurance or false certainty.", why: "Concentration reflects production, clearance, phenotype, and treatment context." },
  { name: "ventricular remodeling", lesson: "neurohormonal-compensation", principle: "Remodeling changes chamber size, shape, wall stress, extracellular matrix, myocyte biology, and electrical substrate in response to injury and chronic load.", action: "Track serial structure and function while treating the cause and neurohormonal drivers rather than only relieving symptoms.", assessment: "Review serial volumes, ejection fraction, strain, wall thickness, valve regurgitation, scar, rhythm, blood pressure, and clinical trajectory.", hazard: "Symptom improvement without structural follow-up can miss progressive remodeling.", why: "Congestion and symptoms can fluctuate while the myocardial substrate continues to change." },
  { name: "pulmonary congestion", lesson: "congestion-and-cardiorenal-physiology", principle: "Elevated left-sided filling pressure transmits to the pulmonary circulation, increasing hydrostatic filtration and causing interstitial then alveolar edema when lymphatic reserve is exceeded.", action: "Distinguish pressure-driven congestion from pneumonia, ARDS, pulmonary vascular disease, and low-oncotic states while assessing oxygenation and perfusion.", assessment: "Review dyspnea, orthopnea, oxygenation, lung examination, imaging, ultrasound B-lines, natriuretic peptides, filling pressure, valve disease, and infection evidence.", hazard: "A clear lung examination does not exclude elevated filling pressure, particularly in chronic compensated disease or obesity.", why: "Physical signs vary with timing, body habitus, and distribution of fluid." },
  { name: "systemic venous congestion", lesson: "congestion-and-cardiorenal-physiology", principle: "Elevated right atrial and venous pressures impair renal filtration gradient, hepatic drainage, gut absorption, and lymphatic return and can drive edema and organ dysfunction.", action: "Assess venous congestion directly and do not reduce cardiorenal reasoning to forward flow alone.", assessment: "Review jugular venous pressure, edema, ascites, liver tests, kidney function, abdominal symptoms, tricuspid disease, right ventricular function, and venous ultrasound context.", hazard: "Attributing rising creatinine only to low cardiac output can miss renal venous hypertension.", why: "High downstream pressure can reduce effective filtration even when arterial pressure is preserved." },
  { name: "cardiorenal syndrome", lesson: "congestion-and-cardiorenal-physiology", principle: "Heart and kidney dysfunction interact through perfusion, venous pressure, neurohormonal signaling, inflammation, intra-abdominal pressure, and treatment effects.", action: "Interpret kidney changes against decongestion, perfusion, urine output, electrolytes, blood pressure, and the full trajectory.", assessment: "Review creatinine trend, cystatin context when available, urine output, congestion, blood pressure, diuretic response, electrolytes, nephrotoxins, urinalysis, and intrinsic kidney clues.", hazard: "Stopping effective decongestion for every small creatinine rise can leave harmful venous congestion untreated.", why: "A functional filtration change during successful decongestion is not identical to structural kidney injury." },
  { name: "low-output physiology", lesson: "congestion-and-cardiorenal-physiology", principle: "Low cardiac output reduces organ perfusion and can present with cool extremities, narrow pulse pressure, altered mentation, oliguria, lactate elevation, and hepatic injury, with or without congestion.", action: "Determine whether shock is present and separate low output from isolated congestion before selecting urgent support.", assessment: "Review blood pressure, pulse pressure, mentation, skin temperature, urine output, lactate, liver tests, oxygenation, filling pressure, cardiac index, and mechanical causes.", hazard: "Normal blood pressure can coexist with low output when vasoconstriction preserves pressure.", why: "Pressure is the product of flow and resistance and does not measure flow alone." },
  { name: "right ventricular failure", lesson: "congestion-and-cardiorenal-physiology", principle: "Right ventricular failure is highly sensitive to preload, pulmonary vascular load, ischemia, rhythm, interventricular dependence, and mechanical ventilation.", action: "Identify the cause and balance filling, pulmonary afterload, perfusion pressure, rhythm, oxygenation, and ventilation carefully.", assessment: "Review jugular pressure, edema, liver and kidney function, RV size and function, tricuspid regurgitation, pulmonary pressure, PE, infarction, hypoxia, acidemia, and ventilator settings.", hazard: "Reflexive large fluid loading can dilate the RV, shift the septum, and reduce left-sided filling.", why: "An overdistended RV can worsen both right and left ventricular output." },
  { name: "HFrEF phenotype", lesson: "phenotypes-and-diagnostic-reasoning", principle: "HFrEF combines symptomatic heart failure with ejection fraction of 40 percent or less and commonly reflects impaired systolic mechanics, dilation, neurohormonal activation, and secondary valve dysfunction.", action: "Determine the etiology, reversibility, stage, congestion, perfusion, rhythm, device considerations, and treatment gaps rather than stopping at the ejection fraction.", assessment: "Review coronary disease, genetics, toxins, inflammation, valves, rhythm burden, blood pressure, volumes, scar, iron, thyroid, and family history.", hazard: "Assuming every dilated low-ejection-fraction heart is ischemic can miss genetic, inflammatory, toxic, and tachycardic disease.", why: "Etiology determines recovery potential, family screening, and disease-specific treatment." },
  { name: "HFpEF phenotype", lesson: "phenotypes-and-diagnostic-reasoning", principle: "HFpEF is a heterogeneous syndrome of symptoms and signs with ejection fraction at least 50 percent and objective evidence supporting elevated filling pressure or structural and functional abnormality.", action: "Use a structured probability approach and actively search for mimics and specific cardiomyopathies.", assessment: "Review obesity, hypertension, diabetes, AF, kidney disease, sleep apnea, echo structure and filling, natriuretic peptides, exercise hemodynamics, valves, pericardium, and infiltrative disease.", hazard: "Diagnosing HFpEF from age, edema, and preserved ejection fraction alone can miss venous disease, lung disease, anemia, obesity, and deconditioning.", why: "Preserved ejection fraction is necessary for the phenotype but not sufficient for the diagnosis." },
  { name: "HF with improved ejection fraction", lesson: "phenotypes-and-diagnostic-reasoning", principle: "HFimpEF identifies prior ejection fraction of 40 percent or less that later exceeds 40 percent, signaling response or remission rather than guaranteed cure.", action: "Continue disease-modifying care unless a specialist-supported reason changes the plan and monitor for relapse or recurrent triggers.", assessment: "Review prior nadir and cause, treatment, serial imaging, symptoms, biomarkers, arrhythmia, blood pressure, adherence, pregnancy plans, and recurrent exposure.", hazard: "Withdrawing therapy solely because ejection fraction normalized can precipitate recurrent dysfunction.", why: "The underlying susceptibility can persist after reverse remodeling." },
  { name: "heart failure biomarkers", lesson: "phenotypes-and-diagnostic-reasoning", principle: "Natriuretic peptides support diagnosis and prognosis, while troponin can reflect myocardial injury and other biomarkers may clarify kidney, iron, inflammatory, or infiltrative context.", action: "Order biomarkers to answer a defined diagnostic, prognostic, or treatment question and interpret them with phenotype and trajectory.", assessment: "Review assay, trend, timing, kidney function, rhythm, obesity, ischemia, inflammation, iron studies, thyroid testing, and suspected amyloid or other specific cause.", hazard: "A biomarker cannot replace etiologic evaluation or a clinical congestion and perfusion assessment.", why: "Biomarkers describe biologic signals but rarely identify the complete cause alone." },
  { name: "imaging and hemodynamic confirmation", lesson: "phenotypes-and-diagnostic-reasoning", principle: "Echocardiography defines structure and function, cardiac MRI characterizes tissue, and invasive or exercise hemodynamics can resolve uncertain filling-pressure physiology.", action: "Escalate testing according to the unresolved question rather than repeating the same low-yield study.", assessment: "Review image quality, chamber size and function, valves, strain, filling indices, scar, infiltration, pericardium, pressure estimates, exercise response, and coronary anatomy.", hazard: "A normal resting echocardiogram does not exclude exercise-induced filling-pressure elevation or early infiltrative disease.", why: "Different modalities reveal different parts of the syndrome." },
  { name: "decompensation triggers", lesson: "phenotypes-and-diagnostic-reasoning", principle: "Acute worsening often reflects infection, ischemia, arrhythmia, uncontrolled pressure, medication or diet change, kidney injury, anemia, thyroid disease, pulmonary embolism, or progression of the cardiac substrate.", action: "Search for and treat the trigger while stabilizing congestion and perfusion.", assessment: "Review symptom timeline, adherence and access, diet and fluids, medications, infection, ECG and rhythm, troponin context, blood pressure, kidney function, blood count, thyroid, PE risk, and valve or mechanical complications.", hazard: "Labeling every admission volume overload without identifying the trigger invites recurrent hospitalization.", why: "The precipitant often determines urgent treatment and prevention." },
  { name: "longitudinal heart failure trajectory", lesson: "heart-failure-trajectory", principle: "Trajectory integrates recurrent admissions, functional decline, escalating diuretic need, falling pressure, treatment intolerance, organ dysfunction, arrhythmia, device events, frailty, and nutrition across time rather than relying on one visit.", action: "Compare each encounter with the prior baseline and escalate evaluation when multiple high-risk signals persist or accumulate.", assessment: "Trend symptoms, function, admissions, congestion, perfusion, blood pressure, kidney and liver function, sodium, diuretic requirement, treatment tolerance, rhythm, device events, frailty, nutrition, support, and patient goals.", hazard: "Interpreting temporary symptom improvement as durable recovery can conceal a progressive substrate and delay specialist care.", why: "Direction across time reveals progression that a single pressure, ejection fraction, or examination cannot show." },
  { name: "advanced heart failure physiology", lesson: "heart-failure-trajectory", principle: "Advanced heart failure features persistent severe symptoms, recurrent admissions, escalating diuretic needs, intolerance of disease therapy, end-organ dysfunction, low output, or dependence on specialized support.", action: "Refer early for multidisciplinary advanced-therapy and goals-of-care evaluation before irreversible organ failure or frailty closes options.", assessment: "Review trajectory, hospitalizations, functional capacity, peak oxygen use when appropriate, hemodynamics, kidney and liver function, nutrition, frailty, arrhythmias, devices, therapy tolerance, competing disease, support, and patient goals.", hazard: "Waiting for overt shock before referral can miss the window for transplant, mechanical support, shared advanced-care planning, or structured palliative support.", why: "Advanced therapies and preference-concordant planning require time, multidisciplinary evaluation, and sufficient organ reserve." },
  { name: "time-dependent compensation", lesson: "neurohormonal-compensation", principle: "Sympathetic tone, vasoconstriction, and fluid retention can preserve pressure and perfusion briefly, while persistent activation raises oxygen demand, afterload, congestion, arrhythmia risk, fibrosis, and remodeling.", action: "For each compensatory response, separate its immediate hemodynamic benefit from its chronic myocardial and organ cost.", assessment: "Review perfusion, blood pressure, heart rate, vascular tone, filling pressure, sodium balance, oxygen demand, rhythm, kidney function, and serial chamber remodeling.", hazard: "Calling a compensatory pathway uniformly beneficial or uniformly harmful ignores why it activates and how its consequences change with duration.", why: "Heart failure progression is driven partly by survival responses that become maladaptive when they remain active." },
  { name: "vasopressin and dilutional hyponatremia", lesson: "neurohormonal-compensation", principle: "Nonosmotic vasopressin release increases collecting-duct free-water reabsorption and can contribute to dilutional hyponatremia in congested or advanced heart failure.", action: "Interpret low sodium with volume status, osmolality context, kidney function, intake, diuretic exposure, congestion, and the overall trajectory before choosing a response.", assessment: "Review sodium trend, glucose, volume status, urine output, kidney function, congestion, fluid intake, diuretics, neurologic symptoms, and other causes of hyponatremia.", hazard: "Treating every low sodium value as sodium depletion can worsen congestion when excess free water is the dominant mechanism.", why: "Serum sodium is a concentration, so water retention can lower it even when total body sodium is not depleted." },
  { name: "medication-related decompensation", lesson: "phenotypes-and-diagnostic-reasoning", principle: "Medicines can worsen heart failure through sodium retention, kidney hemodynamic effects, myocardial depression, rhythm disturbance, increased vascular load, or interference with effective therapy.", action: "Reconcile prescription drugs, nonprescription products, supplements, recent additions, dose changes, missed treatment, and access barriers, then connect each exposure to a plausible mechanism and timeline.", assessment: "Review medication and supplement lists, fill and adherence history, NSAID exposure, agents that affect rhythm or contractility, blood pressure, kidney function, potassium, sodium, weight, edema, and symptom timing.", hazard: "Using a memorized avoid list without checking dose, indication, phenotype, alternatives, and temporal relationship can miss both the true precipitant and necessary therapy.", why: "Medication risk depends on pharmacology, patient substrate, exposure, and timing rather than a drug name alone." },
];

const dimensions = [["principle", "Which principle best characterizes"], ["action", "Which clinical action best applies to"], ["assessment", "Which assessment is most appropriate for"], ["hazard", "Which reasoning hazard is most important to prevent with"]];
function distractors(index, field) { return [5, 11, 17].map((offset) => concepts[(index + offset) % concepts.length][field]); }
const generatedHeartFailurePathophysiologyQuestionBank = concepts.flatMap((concept, index) => dimensions.map(([field, prompt], dimensionIndex) => ({
  id: `heart-failure-pathophysiology-${String(index * 4 + dimensionIndex + 1).padStart(3, "0")}`,
  question: `${prompt} ${concept.name}?`,
  choices: [concept[field], ...distractors(index, field)],
  answer: 0,
  rationale: concept.why,
  reviewHref: `#${concept.lesson}`,
})));

const reviewedNeurohormonalQuestions = {
  "heart-failure-pathophysiology-041": {
    "id": "heart-failure-pathophysiology-041",
    "question": "Which principle best characterizes sympathetic nervous system activation?",
    "choices": [
      "Reduced effective perfusion and baroreceptor signaling increase sympathetic tone, initially supporting rate, contractility, and pressure but chronically driving tachycardia, vasoconstriction, arrhythmia, ischemia, and remodeling.",
      "Persistent sympathetic activation lowers myocardial oxygen demand while increasing heart rate.",
      "Chronic catecholamine exposure prevents ventricular remodeling and arrhythmia.",
      "Sympathetic activation improves pressure only by increasing sodium excretion."
    ],
    "answer": 0,
    "rationale": "Sympathetic activation supports rate, contractility and vascular tone initially. Persistent activation can increase oxygen demand, arrhythmia and remodeling; it does not prevent those complications or act through natriuresis.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-042": {
    "id": "heart-failure-pathophysiology-042",
    "question": "Which clinical action best applies to sympathetic nervous system activation?",
    "choices": [
      "Recognize cold extremities, tachycardia, vasoconstriction, arrhythmia, and high catecholamine states as compensatory signals with long-term cost.",
      "Treat a rise in blood pressure during persistent sympathetic activation as proof that myocardial stress has resolved.",
      "Ignore tachycardia and arrhythmia when the arterial pressure is maintained.",
      "Interpret persistent vasoconstriction as evidence that long-term catecholamine effects are protective."
    ],
    "answer": 0,
    "rationale": "The correct action connects observable perfusion and rhythm signals with the chronic cost of catecholamine activation. Maintained pressure does not eliminate myocardial oxygen demand or arrhythmia risk.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-043": {
    "id": "heart-failure-pathophysiology-043",
    "question": "Which assessment is most appropriate for sympathetic nervous system activation?",
    "choices": [
      "Review heart rate, blood pressure, perfusion, rhythm, ischemia, beta-agonist exposure, sleep and stress state, and chronic remodeling.",
      "Assess only the blood pressure and assume a maintained value excludes adverse sympathetic effects.",
      "Assess only heart rate and omit rhythm, perfusion and ischemia.",
      "Assess only chamber size and disregard the current perfusion and catecholamine context."
    ],
    "answer": 0,
    "rationale": "An integrated assessment is needed because sympathetic activation changes rate, rhythm, vascular tone and myocardial workload. A single pressure, rate or chamber measurement cannot describe the whole response.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-044": {
    "id": "heart-failure-pathophysiology-044",
    "question": "Which reasoning hazard is most important to prevent with sympathetic nervous system activation?",
    "choices": [
      "Calling persistent sympathetic activation beneficial because it raises pressure ignores myocardial oxygen demand and toxicity.",
      "Interpreting persistent catecholamine stimulation as harmful despite an initial pressure benefit.",
      "Considering oxygen demand when tachycardia accompanies sympathetic activation.",
      "Recognizing that arrhythmia risk can persist despite maintained arterial pressure."
    ],
    "answer": 0,
    "rationale": "The hazard is mistaking the immediate pressure benefit for lasting protection. The other choices describe appropriate recognition of the chronic costs of sympathetic activation.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-045": {
    "id": "heart-failure-pathophysiology-045",
    "question": "Which principle best characterizes renin-angiotensin-aldosterone activation?",
    "choices": [
      "Reduced renal perfusion and sympathetic drive activate RAAS; angiotensin II causes vasoconstriction, while aldosterone promotes sodium retention and potassium excretion, contributing to congestion and remodeling.",
      "Angiotensin II primarily causes vasodilation and suppresses aldosterone release.",
      "Aldosterone promotes sodium excretion and potassium retention.",
      "Persistent RAAS activation reduces afterload and prevents ventricular fibrosis."
    ],
    "answer": 0,
    "rationale": "Angiotensin II promotes vasoconstriction and aldosterone release. Aldosterone promotes renal sodium retention and potassium excretion; net serum potassium still depends on kidney function and treatment. Persistent activation contributes to congestion and remodeling.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-046": {
    "id": "heart-failure-pathophysiology-046",
    "question": "Which clinical action best applies to renin-angiotensin-aldosterone activation?",
    "choices": [
      "Connect renal sodium avidity and vascular tone to congestion, afterload, potassium, kidney function, and progressive myocardial fibrosis.",
      "Infer that persistent sodium retention protects the failing heart from congestion.",
      "Ignore potassium and kidney function because RAAS affects only vascular tone.",
      "Interpret rising vascular resistance as evidence that ventricular afterload has fallen."
    ],
    "answer": 0,
    "rationale": "RAAS links vascular tone and renal sodium handling with congestion, potassium balance and remodeling. Its effects extend beyond pressure alone and do not make sodium retention uniformly protective.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-047": {
    "id": "heart-failure-pathophysiology-047",
    "question": "Which assessment is most appropriate for renin-angiotensin-aldosterone activation?",
    "choices": [
      "Review blood pressure, sodium and water balance, potassium, kidney function, venous congestion, perfusion, diuretic response, and remodeling phenotype.",
      "Review blood pressure alone and omit potassium, kidney function and congestion.",
      "Review serum potassium alone and infer the entire sodium and water balance from that value.",
      "Review edema alone and disregard perfusion, venous pressure and diuretic response."
    ],
    "answer": 0,
    "rationale": "The correct assessment follows both the vascular and renal consequences of RAAS activation. Single measurements of pressure, potassium or edema leave important components of the response unexamined.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-048": {
    "id": "heart-failure-pathophysiology-048",
    "question": "Which reasoning hazard is most important to prevent with renin-angiotensin-aldosterone activation?",
    "choices": [
      "Interpreting all creatinine rise as simple underperfusion can miss venous-pressure-driven kidney dysfunction.",
      "Considering venous congestion as well as arterial perfusion when kidney function worsens.",
      "Reviewing the creatinine trend alongside decongestion and urine output.",
      "Considering intrinsic kidney disease and nephrotoxic exposure as alternative contributors."
    ],
    "answer": 0,
    "rationale": "The hazard is assuming that every creatinine rise means isolated low forward perfusion. Venous back pressure and other kidney contributors require consideration; the other choices are appropriate contextual assessments.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-049": {
    "id": "heart-failure-pathophysiology-049",
    "question": "Which principle best characterizes natriuretic peptide system?",
    "choices": [
      "BNP and NT-proBNP reflect myocardial wall stress and support diagnosis and prognosis, while age, atrial fibrillation, kidney disease, obesity, acute timing, and therapy alter their values.",
      "BNP and NT-proBNP diagnose heart failure independently of symptoms, imaging and clinical context.",
      "Obesity, atrial fibrillation and kidney disease have no effect on natriuretic-peptide interpretation.",
      "A single universal BNP or NT-proBNP cutoff has identical meaning in every acute and chronic presentation."
    ],
    "answer": 0,
    "rationale": "BNP and NT-proBNP are contextual markers, not stand-alone diagnoses. Assay, patient characteristics and clinical setting affect interpretation; the peptide system also counteracts sodium retention and vasoconstriction.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-050": {
    "id": "heart-failure-pathophysiology-050",
    "question": "Which clinical action best applies to natriuretic peptide system?",
    "choices": [
      "Interpret the peptide as contextual evidence and trend it only when the clinical question and assay are appropriate.",
      "Use an isolated peptide result to replace the clinical and imaging evaluation.",
      "Repeat peptide measurements without defining a clinical question or checking assay context.",
      "Interpret every rise in BNP or NT-proBNP as definitive evidence of one cardiac cause."
    ],
    "answer": 0,
    "rationale": "The test should answer a defined question and supplement the clinical assessment. Repeated or isolated values do not remove the need to consider assay, comorbidity, phenotype and trajectory.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-051": {
    "id": "heart-failure-pathophysiology-051",
    "question": "Which assessment is most appropriate for natriuretic peptide system?",
    "choices": [
      "Review assay type, age, body size, rhythm, kidney function, acute versus chronic state, prior values, filling pressure, and neprilysin-inhibitor exposure.",
      "Compare peptide values without checking assay, rhythm, kidney function or body size.",
      "Interpret peptide levels solely from ejection fraction and omit the acute or chronic setting.",
      "Ignore medication exposure and assume all peptide assays respond identically to treatment."
    ],
    "answer": 0,
    "rationale": "Peptide interpretation requires the assay and clinical context, including kidney function, rhythm, body size and therapy. Ejection fraction alone does not account for those influences.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-052": {
    "id": "heart-failure-pathophysiology-052",
    "question": "Which reasoning hazard is most important to prevent with natriuretic peptide system?",
    "choices": [
      "Using one universal cutoff across obesity, AF, kidney dysfunction, and acute disease can create false reassurance or false certainty.",
      "Accounting for obesity and kidney dysfunction when interpreting a peptide value.",
      "Distinguishing an acute dyspnea evaluation from a chronic follow-up assessment.",
      "Checking rhythm and treatment context before attributing a peptide change to heart failure alone."
    ],
    "answer": 0,
    "rationale": "The reasoning error is imposing one cutoff on different patients and settings. The other choices appropriately account for factors that change the meaning of a peptide result.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-053": {
    "id": "heart-failure-pathophysiology-053",
    "question": "Which principle best characterizes ventricular remodeling?",
    "choices": [
      "Remodeling changes chamber size, shape, wall stress, extracellular matrix, myocyte biology, and electrical substrate in response to injury and chronic load.",
      "Remodeling changes symptoms only, without altering myocardial cells or chamber structure.",
      "Remodeling is limited to fluid accumulation and cannot affect the electrical substrate.",
      "Remodeling always resolves completely when edema improves."
    ],
    "answer": 0,
    "rationale": "Remodeling involves myocardial cells, matrix and chamber geometry, with mechanical and electrical consequences. Symptom or fluid improvement alone does not establish reversal of those changes.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-054": {
    "id": "heart-failure-pathophysiology-054",
    "question": "Which clinical action best applies to ventricular remodeling?",
    "choices": [
      "Reassess structure and function when a clinical change or treatment decision warrants it, while treating the cause and neurohormonal drivers rather than only relieving symptoms.",
      "Stop structural follow-up once congestion improves, regardless of the underlying cardiac cause.",
      "Treat edema relief as proof that the myocardial substrate has normalized.",
      "Assess symptoms alone and omit the cause, chamber function and neurohormonal drivers."
    ],
    "answer": 0,
    "rationale": "Symptoms and structural remodeling are related but distinct. Reassessment is useful after a significant clinical change or for relevant treatment or device decisions; routine repeat imaging without a clinical indication is not recommended.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-055": {
    "id": "heart-failure-pathophysiology-055",
    "question": "Which assessment is most appropriate for ventricular remodeling?",
    "choices": [
      "Review serial volumes, ejection fraction, strain, wall thickness, valve regurgitation, scar, rhythm, blood pressure, and clinical trajectory.",
      "Assess current edema alone and infer that chamber structure is unchanged.",
      "Compare symptom scores alone without considering serial cardiac structure or function.",
      "Use one ejection-fraction value to exclude changes in chamber geometry, valves and rhythm."
    ],
    "answer": 0,
    "rationale": "Remodeling is assessed through serial structural, functional and clinical information. Edema, symptom scores or one ejection fraction cannot characterize all chamber, valve and electrical changes.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-056": {
    "id": "heart-failure-pathophysiology-056",
    "question": "Which reasoning hazard is most important to prevent with ventricular remodeling?",
    "choices": [
      "Assuming symptom improvement proves reversal of remodeling can miss persistent structural disease and its clinical consequences.",
      "Reassessing structure and function when a significant clinical change or treatment decision warrants it.",
      "Considering valve and rhythm consequences when evaluating remodeling.",
      "Distinguishing decongestion from reversal of the myocardial substrate."
    ],
    "answer": 0,
    "rationale": "The hazard is assuming that symptom improvement removes the need to assess the underlying structure. The other choices explicitly preserve that distinction.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-109": {
    "id": "heart-failure-pathophysiology-109",
    "question": "Which principle best characterizes time-dependent compensation?",
    "choices": [
      "Sympathetic tone, vasoconstriction, and fluid retention can preserve pressure and perfusion briefly, while persistent activation raises oxygen demand, afterload, congestion, arrhythmia risk, fibrosis, and remodeling.",
      "A response that preserves pressure initially cannot contribute to chronic myocardial injury.",
      "Persistent sympathetic and RAAS activation are uniformly protective throughout heart failure.",
      "Short-term compensation and chronic remodeling are unrelated processes."
    ],
    "answer": 0,
    "rationale": "The book distinguishes a temporary hemodynamic benefit from chronic myocyte damage and remodeling. Persistent sodium retention, vascular load and catecholamine exposure can amplify disease rather than provide lasting protection.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-110": {
    "id": "heart-failure-pathophysiology-110",
    "question": "Which clinical action best applies to time-dependent compensation?",
    "choices": [
      "For each compensatory response, separate its immediate hemodynamic benefit from its chronic myocardial and organ cost.",
      "Judge each pathway only by whether it raises arterial pressure immediately.",
      "Assume that every compensatory response has the same effects regardless of duration.",
      "Ignore chronic congestion and remodeling when an immediate perfusion benefit is present."
    ],
    "answer": 0,
    "rationale": "The appropriate action separates immediate benefit from later cost. Neither maintained pressure nor the label compensatory establishes that persistent activation is beneficial.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-111": {
    "id": "heart-failure-pathophysiology-111",
    "question": "Which assessment is most appropriate for time-dependent compensation?",
    "choices": [
      "Review perfusion, blood pressure, heart rate, vascular tone, filling pressure, sodium balance, oxygen demand, rhythm, kidney function, and serial chamber remodeling.",
      "Review blood pressure alone at one visit and omit congestion, rhythm and serial structure.",
      "Assess current heart rate alone and infer that the long-term response is protective.",
      "Review edema alone without considering vascular tone, perfusion or myocardial remodeling."
    ],
    "answer": 0,
    "rationale": "Evaluating compensation over time requires both current hemodynamic signals and longitudinal organ and chamber information. One pressure, rate or edema measurement cannot show the complete trajectory.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-112": {
    "id": "heart-failure-pathophysiology-112",
    "question": "Which reasoning hazard is most important to prevent with time-dependent compensation?",
    "choices": [
      "Calling a compensatory pathway uniformly beneficial or uniformly harmful ignores why it activates and how its consequences change with duration.",
      "Separating the initial pressure benefit of RAAS from its chronic volume and remodeling costs.",
      "Recognizing that a short-term sympathetic response can become harmful if it persists.",
      "Considering duration and patient physiology when interpreting compensatory activation."
    ],
    "answer": 0,
    "rationale": "The hazard is treating a pathway as uniformly helpful or harmful. The other choices appropriately distinguish the sensed disturbance, initial response and consequences of persistent activation.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-113": {
    "id": "heart-failure-pathophysiology-113",
    "question": "Which principle best characterizes vasopressin and dilutional hyponatremia?",
    "choices": [
      "Nonosmotic vasopressin release increases collecting-duct free-water reabsorption and can contribute to dilutional hyponatremia in congested or advanced heart failure.",
      "Low serum sodium proves total-body sodium depletion even when the patient is congested.",
      "Congestion guarantees suppression of vasopressin and normal free-water excretion.",
      "Vasopressin raises serum sodium primarily by increasing urinary water loss."
    ],
    "answer": 0,
    "rationale": "Reduced effective circulation can sustain vasopressin despite edema. Collecting-duct water retention can dilute serum sodium even when total-body sodium is increased; low sodium is not automatically sodium depletion.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-114": {
    "id": "heart-failure-pathophysiology-114",
    "question": "Which clinical action best applies to vasopressin and dilutional hyponatremia?",
    "choices": [
      "Interpret low sodium with volume status, osmolality context, kidney function, intake, diuretic exposure, congestion, and the overall trajectory before choosing a response.",
      "Give sodium and fluid to every congested patient with low serum sodium before assessing the mechanism.",
      "Classify low sodium from its numerical value alone, without volume or osmolality assessment.",
      "Assume vasopressin is the only possible contributor and disregard diuretics, intake and kidney function."
    ],
    "answer": 0,
    "rationale": "Confirm the clinical and osmolality context, then consider volume status and contributing factors. Heart failure can produce dilutional hyponatremia, but diuretics, intake and other causes must still be assessed before choosing a response.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-115": {
    "id": "heart-failure-pathophysiology-115",
    "question": "Which assessment is most appropriate for vasopressin and dilutional hyponatremia?",
    "choices": [
      "Review sodium trend, glucose, volume status, urine output, kidney function, congestion, fluid intake, diuretics, neurologic symptoms, and other causes of hyponatremia.",
      "Review sodium alone and omit glucose, neurologic symptoms and the direction of change.",
      "Review edema alone and assume it excludes every alternative cause of low sodium.",
      "Review ejection fraction alone to determine whether the sodium reflects water retention or sodium loss."
    ],
    "answer": 0,
    "rationale": "The integrated assessment addresses severity, trajectory and mechanism. Sodium, edema or ejection fraction alone cannot distinguish impaired water excretion from other contributors to hyponatremia.",
    "reviewHref": "#neurohormonal-compensation"
  },
  "heart-failure-pathophysiology-116": {
    "id": "heart-failure-pathophysiology-116",
    "question": "Which reasoning hazard is most important to prevent with vasopressin and dilutional hyponatremia?",
    "choices": [
      "Treating every low sodium value as sodium depletion can worsen congestion when excess free water is the dominant mechanism.",
      "Considering that excess water can dilute sodium in a congested patient.",
      "Reviewing volume status and osmolality before choosing a sodium-directed response.",
      "Considering both diuretic-related sodium loss and heart-failure-related water retention."
    ],
    "answer": 0,
    "rationale": "The hazard is equating a low sodium concentration with sodium depletion in every patient. The other choices appropriately consider dilution and competing mechanisms before treatment.",
    "reviewHref": "#neurohormonal-compensation"
  }
};

export const heartFailurePathophysiologyQuestionBank = generatedHeartFailurePathophysiologyQuestionBank.map((question) => reviewedNeurohormonalQuestions[question.id] ?? question);
