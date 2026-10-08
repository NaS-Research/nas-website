const concepts = [
  {name:"four-pillar HFrEF therapy",lesson:"hf-treatment-framework",principle:"Core chronic HFrEF therapy combines ARNI or another indicated RAS inhibitor, an evidence-based beta blocker, an MRA, and an SGLT2 inhibitor because each modifies a different disease pathway.",action:"Start low doses of all tolerated pillars early and titrate with close follow-up rather than maximizing one class before introducing the others.",assessment:"Review congestion, perfusion, blood pressure, heart rate, potassium, kidney function, prior angioedema, diabetes and ketoacidosis risk, access, and adherence.",hazard:"Sequentially maximizing one drug can leave patients without the early complementary benefit of the other pillars.",why:"Broad early pathway coverage generally provides more benefit than isolated maximal therapy."},
  {name:"rapid sequencing",lesson:"hf-treatment-framework",principle:"No single sequence fits every patient, but early initiation and movement toward maximally tolerated therapy within about three months is a contemporary HFrEF goal.",action:"Use phenotype, vital signs, congestion, kidney function, potassium, and access to choose the next safe pillar and schedule early reassessment.",assessment:"Review current doses, missed opportunities, symptoms, weight, blood pressure, pulse, labs, volume status, adverse effects, affordability, and follow-up capacity.",hazard:"Waiting months between each low-dose initiation prolongs exposure to undertreated disease.",why:"Benefits begin early and arise from complementary mechanisms."},
  {name:"sacubitril valsartan",lesson:"ras-neprilysin-and-mra",principle:"ARNI combines angiotensin-receptor blockade with neprilysin inhibition to reduce harmful RAAS signaling while augmenting endogenous vasoactive peptides.",action:"Use in appropriate symptomatic HFrEF, respect blood pressure, kidney and potassium status, angioedema history, pregnancy risk, and required ACE-inhibitor separation.",assessment:"Review prior ACE inhibitor timing, angioedema, blood pressure, potassium, kidney function, volume status, pregnancy potential, and interactions.",hazard:"Overlapping an ACE inhibitor with ARNI increases bradykinin-mediated angioedema risk.",why:"Dual bradykinin effects require a washout interval."},
  {name:"ACE inhibitor to ARNI washout",lesson:"ras-neprilysin-and-mra",principle:"At least 36 hours must separate an ACE inhibitor from sacubitril valsartan because overlapping neprilysin and ACE inhibition raises angioedema risk.",action:"Document the last ACE-inhibitor dose and schedule ARNI initiation after the required interval.",assessment:"Review the exact last dose, medication reconciliation, prior angioedema, blood pressure, kidney function, and potassium.",hazard:"Relying on the prescription discontinuation date instead of the actual last dose can create unintended overlap.",why:"The biologic exposure persists beyond removal from the medication list."},
  {name:"ACE inhibitors and ARBs",lesson:"ras-neprilysin-and-mra",principle:"ACE inhibitors or ARBs remain disease-modifying alternatives when ARNI is not feasible, but routine combination of ACE inhibitor, ARB, and ARNI is unsafe.",action:"Choose one RAS pathway regimen and monitor pressure, kidney function, potassium, cough, angioedema, and pregnancy risk.",assessment:"Review ARNI feasibility, prior cough or angioedema, blood pressure, potassium, kidney function, pregnancy potential, and duplicate therapy.",hazard:"Stacking RAS inhibitors increases hypotension, kidney injury, hyperkalemia, and angioedema without a routine benefit.",why:"More blockade is not the same as safer or more effective blockade."},
  {name:"mineralocorticoid receptor antagonists",lesson:"ras-neprilysin-and-mra",principle:"Spironolactone and eplerenone reduce mortality and hospitalization in eligible symptomatic HFrEF by blocking aldosterone-mediated sodium retention, fibrosis, and remodeling.",action:"Initiate when kidney function and potassium meet current criteria and arrange early and repeated laboratory monitoring.",assessment:"Review eGFR, potassium, blood pressure, concurrent RAS drugs, potassium supplements, NSAIDs, endocrine adverse effects, and follow-up reliability.",hazard:"Starting an MRA without a laboratory follow-up plan can turn an effective therapy into preventable hyperkalemia.",why:"Risk changes rapidly with kidney function, diet, illness, and interacting drugs."},
  {name:"MRA hyperkalemia management",lesson:"ras-neprilysin-and-mra",principle:"MRA continuation depends on potassium trajectory, kidney function, interacting exposures, diet, volume state, and the ability to mitigate risk.",action:"Confirm the value, remove avoidable potassium sources and interacting drugs, adjust therapy by severity, and monitor promptly.",assessment:"Review repeat potassium, hemolysis, eGFR trend, supplements, salt substitutes, NSAIDs, trimethoprim, RAS therapy, diet, and symptoms.",hazard:"Stopping all disease therapy after one unconfirmed mild elevation can sacrifice benefit without addressing the cause.",why:"Risk mitigation should be proportional and mechanism based."},
  {name:"evidence-based beta blockers",lesson:"beta-blockers-and-rate",principle:"Carvedilol, metoprolol succinate, and bisoprolol have outcome evidence in HFrEF and are not interchangeable with every beta blocker.",action:"Start when the patient is compensated and titrate according to heart rate, pressure, symptoms, congestion, conduction, and tolerance.",assessment:"Review volume status, pulse, blood pressure, PR interval, bronchospasm, perfusion, arrhythmia, dose formulation, and adherence.",hazard:"Using metoprolol tartrate as a direct substitute for the evidence-based succinate regimen can misapply trial evidence.",why:"Formulation and agent-specific evidence matter."},
  {name:"beta blocker during decompensation",lesson:"beta-blockers-and-rate",principle:"Beta-blocker initiation or up-titration should wait until congestion and perfusion are stabilized, while continuation of established therapy depends on shock and tolerance.",action:"Avoid reflexive escalation during active decompensation and avoid reflexive withdrawal when the patient remains perfused and stable.",assessment:"Review congestion, cardiac output, shock, inotrope need, heart rate, blood pressure, kidney function, and the reason for deterioration.",hazard:"Abruptly stopping chronic beta blockade without hemodynamic need can produce adrenergic rebound.",why:"The correct response depends on compensation and perfusion rather than hospitalization alone."},
  {name:"ivabradine",lesson:"beta-blockers-and-rate",principle:"Ivabradine inhibits the sinus-node If current and can reduce hospitalization in selected symptomatic HFrEF with sinus rhythm and an elevated resting heart rate despite maximally tolerated beta blockade.",action:"Confirm sinus rhythm, qualifying ejection fraction and heart rate, beta-blocker optimization or intolerance, and monitor bradycardia and atrial fibrillation.",assessment:"Review rhythm, resting heart rate, ejection fraction, symptom class, beta-blocker dose, conduction disease, CYP3A interactions, and visual symptoms.",hazard:"Using ivabradine in atrial fibrillation ignores its sinus-node-dependent mechanism.",why:"Its target requires organized sinus-node activity."},
  {name:"SGLT2 inhibitors in HFrEF",lesson:"sglt2-and-congestion",principle:"Dapagliflozin and empagliflozin reduce worsening HF events across diabetes status through effects that extend beyond glucose lowering.",action:"Initiate in eligible stable HFrEF while reviewing kidney thresholds, volume state, genital infection risk, ketoacidosis risk, and perioperative holds.",assessment:"Review eGFR, diabetes, insulin deficiency, recent fasting or illness, volume status, diuretic dose, genital infection history, blood pressure, and access.",hazard:"Calling SGLT2 therapy a diabetes drug can wrongly exclude patients without diabetes.",why:"Heart-failure benefit is not dependent on glucose lowering or diabetes diagnosis."},
  {name:"SGLT2 ketoacidosis prevention",lesson:"sglt2-and-congestion",principle:"SGLT2 inhibitors can contribute to ketoacidosis with only modest glucose elevation during fasting, surgery, acute illness, insulin deficiency, or low-carbohydrate intake.",action:"Provide sick-day and perioperative instructions and evaluate ketones when compatible symptoms occur despite a nonsevere glucose value.",assessment:"Review nausea, vomiting, abdominal pain, breathing, anion gap, ketones, glucose, insulin use, fasting, surgery, alcohol, and acute illness.",hazard:"A glucose value below classic DKA ranges can falsely exclude SGLT2-associated ketoacidosis.",why:"Glycosuria can limit hyperglycemia while ketogenesis progresses."},
  {name:"loop diuretics",lesson:"sglt2-and-congestion",principle:"Loop diuretics relieve congestion but are titrated to euvolemia and do not substitute for disease-modifying HFrEF pillars.",action:"Use the lowest effective maintenance regimen after decongestion and adjust using weight, symptoms, examination, urine response, electrolytes, kidney trajectory, and access.",assessment:"Review daily weight pattern, edema, orthopnea, jugular pressure, blood pressure, urine output, sodium, potassium, magnesium, creatinine, adherence, and NSAIDs.",hazard:"Equating a higher loop dose with stronger disease modification confuses symptom control with mortality-directed therapy.",why:"Diuresis changes volume but does not replace neurohormonal and metabolic treatment."},
  {name:"diuretic resistance",lesson:"sglt2-and-congestion",principle:"Poor diuretic response can reflect inadequate dose delivery, gut edema, kidney dysfunction, low perfusion, high sodium intake, NSAIDs, nephron adaptation, or inaccurate congestion assessment.",action:"Confirm true congestion and adherence, quantify response, correct delivery and interactions, and use sequential nephron blockade only with close monitoring.",assessment:"Review oral absorption, timing, urine sodium or output when used, kidney function, blood pressure, sodium intake, NSAIDs, edema, albumin, and urinary obstruction.",hazard:"Adding multiple diuretics without confirming congestion can cause severe electrolyte and volume depletion.",why:"Apparent resistance has several mechanisms and sometimes reflects the wrong diagnosis."},
  {name:"hydralazine and isosorbide dinitrate",lesson:"additional-hf-therapies",principle:"The fixed vasodilator combination is added for selected self-identified Black patients with advanced symptomatic HFrEF on optimal therapy and can be used when RAS inhibition is not feasible in selected patients.",action:"Use the evidence-based combination and monitor headache, hypotension, adherence burden, hydralazine immune toxicity, and nitrate interactions.",assessment:"Review symptom class, current pillars, RAS tolerance, blood pressure, pill burden, phosphodiesterase-5 inhibitors, lupus symptoms, and adherence.",hazard:"Substituting nitrate monotherapy for the studied combination does not reproduce the evidence.",why:"The outcome evidence belongs to a specific paired regimen and population context."},
  {name:"digoxin in chronic HFrEF",lesson:"additional-hf-therapies",principle:"Digoxin can reduce hospitalization in selected symptomatic HFrEF but has a narrow exposure-response relationship and no established mortality benefit.",action:"Use selectively with kidney, age, body size, electrolyte, rhythm, concentration-timing, and P-gp interaction safeguards.",assessment:"Review renal function, potassium, magnesium, heart rate, AV conduction, dose timing, concentration context, amiodarone and other P-gp inhibitors, and toxicity symptoms.",hazard:"Chasing a high historical concentration range increases toxicity without improving the treatment goal.",why:"Lower exposure is generally favored and the goal is symptom or hospitalization reduction."},
  {name:"vericiguat",lesson:"additional-hf-therapies",principle:"Vericiguat stimulates soluble guanylate cyclase and may be considered in selected high-risk HFrEF after recent worsening despite foundational therapy.",action:"Confirm the recent worsening phenotype, optimize core therapy, assess blood pressure and pregnancy risk, and avoid inappropriate nitrate or PDE interactions per labeling.",assessment:"Review recent hospitalization or IV diuretic use, current pillars, blood pressure, anemia, pregnancy potential, nitrate-related therapies, and adherence.",hazard:"Using vericiguat before establishing foundational therapy reverses the evidence hierarchy.",why:"It is an additional option for selected residual risk, not a replacement for the core pillars."},
  {name:"iron deficiency in HFrEF",lesson:"additional-hf-therapies",principle:"Iron deficiency can worsen exercise capacity and quality of life with or without anemia and requires ferritin plus transferrin-saturation interpretation.",action:"Screen symptomatic patients and use evidence-based intravenous iron when indicated while investigating the cause of deficiency.",assessment:"Review ferritin, transferrin saturation, hemoglobin, bleeding, kidney disease, inflammation, symptoms, prior iron therapy, and hypersensitivity risk.",hazard:"A normal or elevated ferritin during inflammation can mask low available iron.",why:"Ferritin is an acute-phase reactant and must be interpreted with transferrin saturation."},
  {name:"HFmrEF pharmacotherapy",lesson:"preserved-and-improved-ef",principle:"HFmrEF overlaps reduced and preserved phenotypes, with strongest contemporary support for SGLT2 inhibition and selected use of other HFrEF therapies, especially toward the lower ejection-fraction range.",action:"Confirm the syndrome and cause, relieve congestion, use SGLT2 therapy when eligible, and individualize other therapies by ejection fraction, comorbidity, and prior HFrEF.",assessment:"Review current and prior ejection fraction, filling pressures, congestion, blood pressure, kidney function, potassium, ischemia, AF, and prior therapy.",hazard:"Treating 41 to 49 percent as an isolated number ignores prior reduced function and the phenotype continuum.",why:"Historical trajectory and clinical context shape therapy."},
  {name:"HFpEF foundational management",lesson:"preserved-and-improved-ef",principle:"HFpEF management combines accurate diagnosis, decongestion, SGLT2 therapy, blood-pressure control, and aggressive treatment of obesity, diabetes, CKD, AF, sleep apnea, coronary disease, and phenotype-specific causes.",action:"Build a multisystem plan rather than searching for one universal HFpEF drug.",assessment:"Review congestion, pressure, obesity, diabetes, kidney disease, AF, sleep apnea, ischemia, exercise capacity, frailty, and specific mimics or cardiomyopathies.",hazard:"Using a normal ejection fraction as permission for generic diuretic-only care misses outcome and comorbidity targets.",why:"HFpEF is a heterogeneous multisystem syndrome."},
  {name:"SGLT2 inhibitors in HFpEF",lesson:"preserved-and-improved-ef",principle:"SGLT2 inhibitors reduce worsening heart-failure events across preserved and mildly reduced ejection-fraction phenotypes in eligible patients.",action:"Initiate once stable while using the same volume, kidney, infection, fasting, surgery, and ketoacidosis safeguards applied elsewhere.",assessment:"Review eGFR, volume status, diuretics, diabetes and insulin status, genital infection risk, fasting or surgery plans, blood pressure, and access.",hazard:"Waiting for diabetes before offering an indicated SGLT2 inhibitor misreads the heart-failure evidence.",why:"Benefit extends beyond glycemic control."},
  {name:"obesity-related HFpEF",lesson:"preserved-and-improved-ef",principle:"Visceral adiposity, inflammation, volume expansion, sleep apnea, impaired reserve, and metabolic disease can form a treatable HFpEF phenotype.",action:"Combine HF therapy with structured weight, exercise, sleep, metabolic, renal, and incretin-based strategies when clinically appropriate.",assessment:"Review body composition, symptoms, functional status, sleep apnea, diabetes, kidney disease, nutrition, frailty, congestion, and medication eligibility.",hazard:"Reducing obesity-related HFpEF to willpower ignores a complex biologic and social disease.",why:"Effective treatment requires medical, behavioral, and systems support."},
  {name:"HF with improved ejection fraction therapy",lesson:"preserved-and-improved-ef",principle:"Patients whose ejection fraction improves after prior HFrEF generally continue disease-modifying therapy because relapse risk persists.",action:"Maintain tolerated core therapy, monitor the original cause and recurrent triggers, and use shared specialist decisions for any proposed withdrawal.",assessment:"Review prior nadir, etiology, current function, therapy, arrhythmia, blood pressure, pregnancy plans, adherence, and serial imaging.",hazard:"Calling reverse remodeling cure can lead to withdrawal and recurrent dysfunction.",why:"The susceptible substrate may remain despite improved imaging."},
  {name:"hypotension during HFrEF therapy",lesson:"preserved-and-improved-ef",principle:"Low blood pressure must be interpreted with symptoms, perfusion, congestion, orthostasis, dose timing, non-HF drugs, and the relative outcome value of each therapy.",action:"Correct reversible causes and reduce low-value pressure-lowering agents or excess diuresis before sacrificing foundational therapy when possible.",assessment:"Review seated and standing pressure, symptoms, perfusion, weight, congestion, dose timing, alpha blockers, nitrates, calcium blockers, diuretics, and recent illness.",hazard:"Responding to one asymptomatic pressure value by stopping all pillars can destabilize disease.",why:"Tolerance is clinical and therapies differ in pressure effect and survival value."},
  {name:"kidney function during HFrEF therapy",lesson:"preserved-and-improved-ef",principle:"A modest early eGFR decline can accompany effective RAS, MRA, or SGLT2 therapy and should be interpreted against potassium, perfusion, congestion, volume, and trajectory.",action:"Repeat and contextualize labs, correct volume or interaction problems, and preserve disease therapy when the change is expected and safe.",assessment:"Review creatinine and eGFR trend, potassium, blood pressure, volume, diuretic response, NSAIDs, illness, urinary findings, and medication timing.",hazard:"Stopping beneficial therapy for every small creatinine rise can worsen long-term cardiorenal outcomes.",why:"Functional hemodynamic change is not identical to progressive structural injury."},
  {name:"adherence and access",lesson:"preserved-and-improved-ef",principle:"Medication benefit depends on the patient's ability to obtain, understand, schedule, tolerate, and sustain a complex regimen.",action:"Use team-based education, simplification, synchronized fills, cost support, monitoring access, and shared decisions tailored to the identified barrier.",assessment:"Review refill history, cost, insurance, health literacy, cognition, transportation, language, pill burden, adverse effects, beliefs, housing, and caregiver support.",hazard:"Labeling nonadherence without identifying the barrier converts a systems problem into blame.",why:"Different barriers require different interventions."},

  {name:"digoxin concentration interpretation",lesson:"beta-blockers-and-rate",principle:"A digoxin concentration is interpretable only when collection timing, dose, steady state, kidney function, electrolytes, rhythm, symptoms, and interacting drugs are known.",action:"When measurement is clinically needed, collect at least 6 hours after a dose and preferably 12 hours or more afterward, then interpret a usual heart-failure target of 0.5 to 0.9 ng/mL in clinical context.",assessment:"Document the exact last dose and draw time, current dose, kidney trajectory, potassium, magnesium, heart rate, conduction, P-gp inhibitors, nausea, confusion, vision change, and arrhythmia.",hazard:"Reacting to an early post-dose value as though it were an equilibrated concentration can produce an unnecessary dose reduction or a false diagnosis of toxicity.",why:"Distribution timing and patient-specific exposure determine whether the number reflects clinically relevant digoxin burden."},

  {name:"medications that worsen chronic heart failure",lesson:"hf-treatment-framework",principle:"NSAIDs, thiazolidinediones, nondihydropyridine calcium-channel blockers in reduced ejection fraction, selected antiarrhythmics, excess sodium products, and other exposures can worsen heart failure through fluid retention, hemodynamic effects, renal injury, or negative inotropy.",action:"Reconcile prescriptions, over-the-counter products, supplements, infusions, and recent medication changes whenever congestion or exercise tolerance worsens.",assessment:"Review timing, dose, indication, sodium content, kidney function, weight, edema, blood pressure, rhythm, and safer alternatives for every suspected exposure.",hazard:"Escalating diuretics without identifying an avoidable medication trigger can treat the consequence while preserving the cause.",why:"Medication-related decompensation is often reversible when the mechanism and timing are recognized."},

  {name:"heart failure self-monitoring and action plan",lesson:"hf-treatment-framework",principle:"A chronic heart-failure plan pairs medication decisions with symptom, weight, pressure, pulse, laboratory, and follow-up ownership tailored to the individual patient.",action:"Define what to monitor, how often, who reviews the result, and when worsening dyspnea, edema, dizziness, syncope, or rapid weight change requires contact or urgent care.",assessment:"Review baseline and recent weight, symptom trajectory, orthopnea, edema, home pressure and pulse when useful, laboratory schedule, health literacy, equipment, caregiver support, and contact access.",hazard:"Giving a universal numeric threshold without the patient's baseline or an assigned response pathway can create false reassurance or unnecessary alarm.",why:"Monitoring improves care only when the signal is individualized and connected to a timely action."},

  {name:"post-discharge heart failure implementation",lesson:"preserved-and-improved-ef",principle:"The transition after hospitalization is a high-risk therapeutic interval that requires medication reconciliation, tested oral volume control, early laboratory review, symptom surveillance, and clear ownership.",action:"Confirm the discharge regimen and access before departure, communicate changes, arrange early follow-up, and specify who will review chemistry, weight, pressure, symptoms, and titration opportunities.",assessment:"Review the precipitating cause, discharge weight, oral diuretic response, four-pillar status, kidney function, potassium, pending tests, affordability, refill supply, transportation, cognition, and follow-up dates.",hazard:"Treating discharge as the end of decongestion rather than the start of longitudinal implementation leaves medication gaps and early deterioration unrecognized.",why:"Clinical status and treatment tolerance can change quickly after hospitalization."},
];
const dimensions=[["principle","Which principle best characterizes"],["action","Which clinical action best applies to"],["assessment","Which assessment is most appropriate for"],["hazard","Which reasoning hazard is most important to prevent with"]];
function distractors(i,f){return [5,11,17].map(o=>concepts[(i+o)%concepts.length][f]);}
export const chronicHeartFailureQuestionBank=concepts.flatMap((c,i)=>dimensions.map(([f,p],j)=>({id:`chronic-heart-failure-${String(i*4+j+1).padStart(3,"0")}`,question:`${p} ${c.name}?`,choices:[c[f],...distractors(i,f)],answer:0,rationale:c.why,reviewHref:`#${c.lesson}`})));

// Reviewed RAS/MRA items retain their existing identities, order, keys and correct-choice text.
const hfRasMraReviewOverrides = [
  {
    "id": "chronic-heart-failure-009",
    "question": "Which principle best characterizes sacubitril valsartan?",
    "choices": [
      "ARNI combines angiotensin-receptor blockade with neprilysin inhibition to reduce harmful RAAS signaling while augmenting endogenous vasoactive peptides.",
      "ARNI inhibits ACE directly and should routinely be layered onto an ACE inhibitor.",
      "Sacubitril/valsartan replaces valsartan with a beta blocker to slow the sinus node.",
      "Neprilysin inhibition alone makes kidney and potassium monitoring unnecessary."
    ],
    "answer": 0,
    "rationale": "The correct option describes the two mechanisms. ARNI contains an ARB rather than an ACE inhibitor or beta blocker. ACE overlap is contraindicated; neither component removes the need for pressure, kidney and potassium assessment.",
    "reviewHref": "#ras-neprilysin-and-mra"
  },
  {
    "id": "chronic-heart-failure-010",
    "question": "Which clinical action best applies to sacubitril valsartan?",
    "choices": [
      "Use in appropriate symptomatic HFrEF, respect blood pressure, kidney and potassium status, angioedema history, pregnancy risk, and required ACE-inhibitor separation.",
      "Start ARNI immediately after an ACE dose if both prescriptions have been reconciled.",
      "Use ARNI after ACE/ARB-related angioedema if the starting dose is halved.",
      "Continue a separate ARB with ARNI to complete the RAS regimen."
    ],
    "answer": 0,
    "rationale": "Appropriate selection requires the listed assessments. ACE-to-ARNI transition requires at least 36 hours after the actual last dose, not just a medication-list change. Prior ACE/ARB-related angioedema is a labeled exclusion, and ARNI already contains valsartan.",
    "reviewHref": "#ras-neprilysin-and-mra"
  },
  {
    "id": "chronic-heart-failure-011",
    "question": "Which assessment is most appropriate for sacubitril valsartan?",
    "choices": [
      "Review prior ACE inhibitor timing, angioedema, blood pressure, potassium, kidney function, volume status, pregnancy potential, and interactions.",
      "Verify EF alone because a qualifying phenotype removes interaction and laboratory risks.",
      "Use the prescription discontinuation date instead of asking when the last ACE dose was taken.",
      "Review potassium only after the maximum ARNI dose is reached."
    ],
    "answer": 0,
    "rationale": "Review the actual exposure, contraindications, pressure, kidney function, potassium and volume before initiation and during titration. EF alone does not establish safe use, a list date does not establish washout, and monitoring cannot wait until a target dose.",
    "reviewHref": "#ras-neprilysin-and-mra"
  },
  {
    "id": "chronic-heart-failure-012",
    "question": "Which statement correctly identifies a safety or reasoning hazard involving sacubitril/valsartan?",
    "choices": [
      "Overlapping an ACE inhibitor with ARNI increases bradykinin-mediated angioedema risk.",
      "ACE inhibitor overlap is safe if sacubitril/valsartan is given with food.",
      "A separate ARB should routinely remain active because ARNI contains no ARB.",
      "Removing an ACE prescription from the list immediately ends its biologic exposure."
    ],
    "answer": 0,
    "rationale": "The correct statement identifies the angioedema hazard. Food does not cancel ACE overlap, ARNI contains valsartan, and medication-list changes do not replace the interval from the actual last dose.",
    "reviewHref": "#ras-neprilysin-and-mra"
  },
  {
    "id": "chronic-heart-failure-013",
    "question": "Which principle best characterizes ACE inhibitor to ARNI washout?",
    "choices": [
      "At least 36 hours must separate an ACE inhibitor from sacubitril valsartan because overlapping neprilysin and ACE inhibition raises angioedema risk.",
      "A 12-hour gap is sufficient if the ACE inhibitor was taken once daily.",
      "The 36-hour interval is required only when switching from ARNI back to an ACE inhibitor.",
      "An ARB-to-ARNI transition always requires the same 36-hour interval as an ACE transition."
    ],
    "answer": 0,
    "rationale": "At least 36 hours separates ACE inhibition and ARNI in either direction. Dosing frequency does not shorten this period. A separate ARB must be stopped, but the ACE-specific washout rule is not applied automatically to an ARB transition.",
    "reviewHref": "#ras-neprilysin-and-mra"
  },
  {
    "id": "chronic-heart-failure-014",
    "question": "Which clinical action best applies to ACE inhibitor to ARNI washout?",
    "choices": [
      "Document the last ACE-inhibitor dose and schedule ARNI initiation after the required interval.",
      "Begin ARNI when the ACE prescription is cancelled, regardless of the actual last dose.",
      "Give a final ACE dose with the first ARNI dose to prevent rebound RAS activity.",
      "Use a shorter interval after low-dose ACE therapy because angioedema is then excluded."
    ],
    "answer": 0,
    "rationale": "Document the actual last ACE dose and schedule the first ARNI dose after at least 36 hours. Prescription cancellation does not prove clearance, overlap is contraindicated, and a low dose does not remove the washout requirement.",
    "reviewHref": "#ras-neprilysin-and-mra"
  },
  {
    "id": "chronic-heart-failure-015",
    "question": "Which assessment is most appropriate for ACE inhibitor to ARNI washout?",
    "choices": [
      "Review the exact last dose, medication reconciliation, prior angioedema, blood pressure, kidney function, and potassium.",
      "Use the bottle dispense date as the last-dose time and omit medication reconciliation.",
      "Assess blood pressure alone because washout determines all other ARNI risks.",
      "Assume an absent prior angioedema episode permits ACE overlap."
    ],
    "answer": 0,
    "rationale": "The actual last dose and complete reconciliation are needed along with clinical and laboratory eligibility. Dispensing does not establish ingestion, pressure alone does not establish safety, and no prior angioedema does not authorize overlap.",
    "reviewHref": "#ras-neprilysin-and-mra"
  },
  {
    "id": "chronic-heart-failure-016",
    "question": "Which statement correctly identifies a safety or reasoning hazard involving ACE inhibitor to ARNI washout?",
    "choices": [
      "Relying on the prescription discontinuation date instead of the actual last dose can create unintended overlap.",
      "A discontinuation date always proves when the final ACE dose was taken.",
      "The washout begins only after the patient reaches the ARNI target dose.",
      "A patient can eliminate the overlap risk by taking an ACE inhibitor and ARNI at different meals."
    ],
    "answer": 0,
    "rationale": "The medication-list date may differ from the actual last dose. Washout occurs before ARNI initiation after ACE therapy, and meal separation cannot supply the required interval or remove concomitant exposure.",
    "reviewHref": "#ras-neprilysin-and-mra"
  },
  {
    "id": "chronic-heart-failure-017",
    "question": "Which principle best characterizes ACE inhibitors and ARBs?",
    "choices": [
      "ACE inhibitors or ARBs remain disease-modifying alternatives when ARNI is not feasible, but routine combination of ACE inhibitor, ARB, and ARNI is unsafe.",
      "Combine an ACE inhibitor and ARNI routinely to maximize outcome benefit.",
      "Replace a tolerated RAS strategy with two MRAs to avoid all kidney monitoring.",
      "ARNI infeasibility eliminates the outcome role of every ACE inhibitor and ARB."
    ],
    "answer": 0,
    "rationale": "ACE inhibitors or ARBs remain alternatives when ARNI is not feasible. Routine RAS stacking adds harm; an MRA is a separate indicated pillar, not a duplicate RAS strategy or a replacement that removes monitoring.",
    "reviewHref": "#ace-arb-selection-and-dosing"
  },
  {
    "id": "chronic-heart-failure-018",
    "question": "Which clinical action best applies to ACE inhibitors and ARBs?",
    "choices": [
      "Choose one RAS pathway regimen and monitor pressure, kidney function, potassium, cough, angioedema, and pregnancy risk.",
      "Add an ARB to an ACE inhibitor routinely whenever EF remains reduced.",
      "Apply a hypertension dosing frequency to every HF prescription of the same medicine.",
      "Continue RAS therapy without reassessment when pregnancy is detected."
    ],
    "answer": 0,
    "rationale": "Select one appropriate ARNI, ACE inhibitor or ARB strategy and monitor the listed risks. An indicated MRA may be added with safeguards. Routine dual RAS therapy, importing another indication’s regimen and ignoring pregnancy are unsafe.",
    "reviewHref": "#ace-arb-selection-and-dosing"
  },
  {
    "id": "chronic-heart-failure-019",
    "question": "Which assessment is most appropriate for ACE inhibitors and ARBs?",
    "choices": [
      "Review ARNI feasibility, prior cough or angioedema, blood pressure, potassium, kidney function, pregnancy potential, and duplicate therapy.",
      "Assess the target blood pressure alone and disregard pregnancy or duplicate therapy.",
      "Assume an ARB has zero angioedema risk after an ACE-inhibitor reaction.",
      "Treat the guideline target dose as mandatory despite patient-specific renal or hepatic restrictions."
    ],
    "answer": 0,
    "rationale": "Feasibility, intolerance, pregnancy, pressure, potassium, renal function and duplication all matter. An ARB after ACE intolerance requires individual assessment, and a target range does not override product-specific precautions or tolerance.",
    "reviewHref": "#ace-arb-selection-and-dosing"
  },
  {
    "id": "chronic-heart-failure-020",
    "question": "Which statement correctly identifies a safety or reasoning hazard involving ACE inhibitors and ARBs?",
    "choices": [
      "Stacking RAS inhibitors increases hypotension, kidney injury, hyperkalemia, and angioedema without a routine benefit.",
      "A routinely stacked ACE inhibitor, ARB and ARNI regimen improves safety by distributing the dose.",
      "An indicated MRA can never be used with any RAS inhibitor.",
      "A normal baseline creatinine makes repeat kidney and potassium assessment unnecessary."
    ],
    "answer": 0,
    "rationale": "Routine RAS stacking creates the listed risks without routine benefit. This does not prohibit an indicated MRA with one selected RAS strategy; that combination still needs eligibility and follow-up, even when baseline results are normal.",
    "reviewHref": "#ace-arb-selection-and-dosing"
  },
  {
    "id": "chronic-heart-failure-021",
    "question": "Which principle best characterizes mineralocorticoid receptor antagonists?",
    "choices": [
      "Spironolactone and eplerenone reduce mortality and hospitalization in eligible symptomatic HFrEF by blocking aldosterone-mediated sodium retention, fibrosis, and remodeling.",
      "Spironolactone and eplerenone are used solely for immediate loop-diuretic decongestion.",
      "Every symptomatic HFrEF patient should start an MRA regardless of potassium or kidney function.",
      "Combining spironolactone with eplerenone is required to obtain the remodeling benefit."
    ],
    "answer": 0,
    "rationale": "MRAs have an outcome role in eligible symptomatic HFrEF. They do not merely replace loop decongestion. The 2022 US guideline requires eGFR above 30 and potassium below 5.0 for initiation; use one MRA, not both.",
    "reviewHref": "#mra-selection-dosing-and-monitoring"
  },
  {
    "id": "chronic-heart-failure-022",
    "question": "Which clinical action best applies to mineralocorticoid receptor antagonists?",
    "choices": [
      "Initiate when kidney function and potassium meet current criteria and arrange early and repeated laboratory monitoring.",
      "Begin an MRA with potassium 5.2 because the eplerenone label excludes only values above 5.5.",
      "Start an MRA now and wait three months before the first potassium measurement.",
      "Substitute CaroSpir for an Aldactone tablet milligram for milligram without reviewing the order."
    ],
    "answer": 0,
    "rationale": "Initiation and early repeat testing are essential. The guideline initiation threshold is potassium below 5.0, distinct from an eplerenone label exclusion. Monitoring must be early, and the suspension is not therapeutically equivalent to Aldactone tablets.",
    "reviewHref": "#mra-selection-dosing-and-monitoring"
  },
  {
    "id": "chronic-heart-failure-023",
    "question": "Which assessment is most appropriate for mineralocorticoid receptor antagonists?",
    "choices": [
      "Review eGFR, potassium, blood pressure, concurrent RAS drugs, potassium supplements, NSAIDs, endocrine adverse effects, and follow-up reliability.",
      "Review potassium alone because kidney trajectory and interacting medicines cannot alter MRA risk.",
      "Assume eplerenone’s selectivity excludes all endocrine adverse effects and interactions.",
      "Review potassium supplements but disregard potassium-containing salt substitutes and NSAIDs."
    ],
    "answer": 0,
    "rationale": "Review the complete eligibility and monitoring plan. Renal change and potassium-raising exposures matter, salt substitutes and NSAIDs can contribute, and eplerenone selectivity does not eliminate reported endocrine effects or CYP3A interactions.",
    "reviewHref": "#mra-selection-dosing-and-monitoring"
  },
  {
    "id": "chronic-heart-failure-024",
    "question": "Which statement correctly identifies a safety or reasoning hazard involving mineralocorticoid receptor antagonists?",
    "choices": [
      "Starting an MRA without a laboratory follow-up plan can turn an effective therapy into preventable hyperkalemia.",
      "A normal baseline potassium makes later laboratory follow-up optional.",
      "Endocrine adverse effects are the only safety concern during MRA therapy.",
      "A suspension formulation removes the need for potassium and kidney monitoring."
    ],
    "answer": 0,
    "rationale": "Failure to arrange early and repeated laboratory assessment can cause preventable hyperkalemia. Baseline safety is not durable during illness, renal change or interactions; formulation and receptor selectivity do not remove the monitoring obligation.",
    "reviewHref": "#mra-selection-dosing-and-monitoring"
  },
  {
    "id": "chronic-heart-failure-025",
    "question": "Which principle best characterizes MRA hyperkalemia management?",
    "choices": [
      "MRA continuation depends on potassium trajectory, kidney function, interacting exposures, diet, volume state, and the ability to mitigate risk.",
      "MRA continuation is independent of kidney changes once the patient tolerates the first dose.",
      "A potassium result of 5.2 always proves eligibility to initiate an MRA under the 2022 US guideline.",
      "Every potassium elevation requires permanent withdrawal of every HF medicine."
    ],
    "answer": 0,
    "rationale": "Continuation depends on the stated trajectory and mitigation plan. Initiation requires potassium below 5.0 under the guideline. Adjust or withhold the selected MRA by the result and clinical context, and discontinue it if potassium cannot be maintained below 5.5; avoid reflexively stopping all HF therapy.",
    "reviewHref": "#mra-selection-dosing-and-monitoring"
  },
  {
    "id": "chronic-heart-failure-026",
    "question": "Which clinical action best applies to MRA hyperkalemia management?",
    "choices": [
      "Confirm the value, remove avoidable potassium sources and interacting drugs, adjust therapy by severity, and monitor promptly.",
      "Continue the unchanged MRA and potassium salt substitute until the next routine visit.",
      "Increase the MRA dose to reverse the potassium rise through stronger aldosterone blockade.",
      "Wait for repeat sampling before addressing any suspected dangerous hyperkalemia."
    ],
    "answer": 0,
    "rationale": "Promptly assess the value, clinical severity, kidney trajectory and reversible exposures. MRA dose reduction, withholding or discontinuation may be required. Potassium sources should be addressed; increasing aldosterone blockade can worsen the problem, and urgent treatment must not wait for routine confirmation.",
    "reviewHref": "#mra-selection-dosing-and-monitoring"
  },
  {
    "id": "chronic-heart-failure-027",
    "question": "Which assessment is most appropriate for MRA hyperkalemia management?",
    "choices": [
      "Review repeat potassium, hemolysis, eGFR trend, supplements, salt substitutes, NSAIDs, trimethoprim, RAS therapy, diet, and symptoms.",
      "Review diet alone because medicines and a hemolysed sample cannot explain potassium elevation.",
      "Check only the last creatinine value and ignore the trend and current illness.",
      "Assume every abnormal result is hemolysis and omit symptom or urgency assessment."
    ],
    "answer": 0,
    "rationale": "The complete review distinguishes a sample issue from true hyperkalemia and identifies contributing exposures. A single old creatinine or diet history is insufficient, and possible hemolysis does not exclude a dangerous result or justify delayed assessment.",
    "reviewHref": "#mra-selection-dosing-and-monitoring"
  },
  {
    "id": "chronic-heart-failure-028",
    "question": "Which statement correctly identifies a safety or reasoning hazard involving MRA hyperkalemia management?",
    "choices": [
      "Stopping all disease therapy after one unconfirmed mild elevation can sacrifice benefit without addressing the cause.",
      "One unconfirmed mild elevation proves that all disease-modifying HF medicines are permanently contraindicated.",
      "Any potassium elevation is harmless if the patient reports no symptoms.",
      "An unsafe MRA must always be continued to preserve its HF outcome benefit."
    ],
    "answer": 0,
    "rationale": "An unexpected mild result merits prompt confirmation and cause-directed review, rather than permanent withdrawal of all beneficial pathways. Symptoms alone do not establish safety, and potassium severity or inability to maintain it below 5.5 can require stopping the MRA. This proportional approach never delays urgent treatment.",
    "reviewHref": "#mra-selection-dosing-and-monitoring"
  }
];
for (const reviewed of hfRasMraReviewOverrides) {
  const existing = chronicHeartFailureQuestionBank.find(item => item.id === reviewed.id);
  if (!existing || existing.answer !== reviewed.answer || existing.choices[existing.answer] !== reviewed.choices[reviewed.answer]) throw new Error("HF RAS/MRA review identity mismatch");
  Object.assign(existing, reviewed);
}
