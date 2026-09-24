const c = (name, lesson, principle, action, hazard, caseStem, caseAnswer, why) => ({ name, lesson, principle, action, hazard, caseStem, caseAnswer, why });

const concepts = [
  c("primary versus central adrenal insufficiency", "levels-of-failure", "Primary disease damages the adrenal cortex, while central disease reduces ACTH drive.", "Use ACTH and mineralocorticoid findings to classify confirmed cortisol deficiency.", "Treating every low cortisol result as Addison disease hides the level of failure.", "A patient has low cortisol, high ACTH, hyperkalemia, and salt craving.", "Classify primary adrenal insufficiency and assess aldosterone deficiency.", "High ACTH and mineralocorticoid loss point to adrenal cortical failure."),
  c("ACTH and hyperpigmentation", "primary-adrenal-insufficiency", "Loss of cortisol feedback raises POMC-derived ACTH and melanocortin signaling in primary disease.", "Look for new pigmentation in scars, pressure areas, palmar creases, and oral mucosa.", "Using pigmentation alone to exclude central disease confuses a useful clue with a required finding.", "A patient with weight loss and postural symptoms develops darkening of old scars and oral mucosa.", "Prioritize evaluation for primary adrenal insufficiency.", "Excess ACTH signaling can increase pigmentation in primary disease."),
  c("aldosterone preservation in central disease", "levels-of-failure", "The renin-angiotensin-aldosterone system usually preserves aldosterone in central adrenal insufficiency.", "Do not add mineralocorticoid replacement unless a separate aldosterone disorder is established.", "Routine fludrocortisone in central disease can cause hypertension, edema, and hypokalemia.", "A patient with pituitary disease has low cortisol and low ACTH but normal potassium and renin.", "Replace glucocorticoid without routine fludrocortisone.", "Central disease reduces ACTH but generally leaves RAAS regulation intact."),
  c("autoimmune Addison disease", "primary-adrenal-insufficiency", "Autoimmune adrenalitis is a major cause of primary adrenal insufficiency and can be supported by 21-hydroxylase antibodies.", "Evaluate for autoimmune adrenalitis and associated autoimmune disease when the phenotype fits.", "Stopping after cortisol replacement can miss thyroid, diabetes, celiac, or gonadal autoimmune disease.", "A young adult has confirmed primary adrenal insufficiency without infection, hemorrhage, or metastatic disease.", "Test for autoimmune adrenalitis and arrange periodic screening for associated autoimmune disease.", "Autoimmune adrenal destruction commonly clusters with other organ-specific autoimmunity."),
  c("bilateral adrenal injury", "primary-adrenal-insufficiency", "Hemorrhage, infarction, infection, infiltration, and metastases can destroy enough bilateral cortex to cause primary failure.", "Use tempo, anticoagulation, sepsis, malignancy, infection risk, and imaging to investigate nonautoimmune causes.", "Attributing abrupt shock and abdominal pain to chronic autoimmune disease can delay recognition of adrenal hemorrhage.", "An anticoagulated patient with sepsis develops sudden flank pain, hypotension, hyponatremia, and hyperkalemia.", "Treat possible adrenal crisis and evaluate for bilateral adrenal hemorrhage.", "Acute bilateral cortical injury can cause rapid primary adrenal failure."),
  c("glucocorticoid-induced adrenal insufficiency", "central-glucocorticoid-induced", "Sustained exogenous glucocorticoid feedback can suppress CRH, ACTH, and adrenal responsiveness.", "Reconstruct cumulative exposure across oral, injected, inhaled, nasal, topical, ocular, and intra-articular routes.", "Counting only tablets can miss clinically important suppression from combined nonoral exposure.", "A patient stops repeated joint injections while using high-dose inhaled and potent topical steroids.", "Assess cumulative glucocorticoid exposure and provide stress coverage when recovery is unproven.", "Multiple routes can add enough systemic exposure to suppress the HPA axis."),
  c("glucocorticoid exposure thresholds", "central-glucocorticoid-induced", "Risk generally becomes expected when therapy lasts at least three to four weeks and exceeds physiologic daily equivalents.", "Consider dose, duration, potency, timing, route, interacting drugs, and patient susceptibility together.", "Applying an old fourteen-day taper rule to every regimen ignores current risk thresholds and clinical context.", "A patient completes seven days of prednisone without prior chronic exposure or Cushing features.", "Do not prolong treatment solely to taper for HPA protection.", "Short courses under three to four weeks usually do not require tapering solely for HPA recovery."),
  c("CYP3A4 and hidden exposure", "central-glucocorticoid-induced", "Strong CYP3A4 inhibitors can raise systemic exposure to susceptible glucocorticoids.", "Review boosters, azoles, macrolides, and other inhibitors when assessing nonoral steroid toxicity.", "Assuming an inhaled product cannot cause systemic suppression can miss a major interaction.", "A patient using inhaled fluticasone develops Cushing features after a strong CYP3A4 inhibitor is started.", "Suspect increased systemic glucocorticoid exposure and HPA suppression.", "Metabolic inhibition can transform a local regimen into substantial systemic exposure."),
  c("morning cortisol continuum", "morning-cortisol-testing", "Morning cortisol is interpreted as a continuum rather than a universal binary cutoff.", "When tapering glucocorticoids, measure morning cortisol near physiologic dosing and use assay-aware thresholds.", "Dynamic testing every time a taper reaches physiologic dose adds burden without being routinely necessary.", "During recovery testing, morning cortisol is greater than 10 micrograms per deciliter under appropriate conditions.", "Treat the result as evidence of HPA recovery and stop replacement when clinically appropriate.", "Current guidance uses greater than 10 micrograms per deciliter as a practical recovery threshold."),
  c("indeterminate recovery cortisol", "morning-cortisol-testing", "A morning cortisol from 5 to 10 micrograms per deciliter suggests possible recovery but remains indeterminate.", "Continue physiologic replacement and repeat the morning cortisol after weeks to months.", "Stopping replacement immediately can expose a patient with incomplete recovery to crisis.", "A stable patient at physiologic dosing has a properly timed recovery cortisol of 7 micrograms per deciliter after a clinician-planned medication hold.", "Continue physiologic coverage and repeat testing later.", "The value lies in the intermediate recovery range."),
  c("low recovery cortisol", "morning-cortisol-testing", "A morning cortisol below 5 micrograms per deciliter suggests persistent glucocorticoid-induced adrenal insufficiency.", "Continue physiologic replacement and reassess after several months.", "Provoking withdrawal by stopping therapy despite a clearly low result creates avoidable risk.", "A patient at physiologic hydrocortisone dosing has a properly timed recovery cortisol of 3 micrograms per deciliter after a clinician-planned medication hold.", "Continue replacement and repeat recovery assessment after additional time.", "The low value indicates that HPA recovery is not yet demonstrated."),
  c("standard corticotropin stimulation", "morning-cortisol-testing", "The standard 250 microgram corticotropin test measures adrenal cortisol response to synthetic ACTH.", "Use the test to confirm suspected primary adrenal insufficiency when the patient is stable enough and assay-specific interpretation is available.", "Delaying emergency hydrocortisone to complete stimulation testing can be fatal.", "A stable adult outpatient has compatible symptoms and equivocal basal cortisol testing.", "Perform an appropriately interpreted standard corticotropin stimulation test.", "Dynamic stimulation can assess adrenal reserve when immediate treatment is not required."),
  c("ACTH classification", "clinical-patterns", "ACTH should be interpreted with cortisol to locate confirmed adrenal insufficiency.", "Obtain ACTH before glucocorticoid treatment when doing so does not delay urgent care.", "Drawing ACTH after hydrocortisone and assuming it reflects baseline physiology can misclassify disease.", "Blood can be drawn immediately in a hypotensive patient without delaying treatment.", "Collect cortisol and ACTH, then give hydrocortisone at once.", "A pre-treatment sample can aid classification, but treatment takes priority."),
  c("renin and aldosterone pattern", "clinical-patterns", "High renin with low or inappropriately normal aldosterone supports mineralocorticoid deficiency in primary disease.", "Measure renin and aldosterone when evaluating confirmed primary adrenal insufficiency.", "Using potassium alone to decide mineralocorticoid status can miss evolving deficiency.", "A patient has primary adrenal insufficiency, postural symptoms, salt craving, high renin, and low aldosterone.", "Begin and titrate fludrocortisone with clinical and biochemical monitoring.", "The pattern demonstrates inadequate aldosterone effect."),
  c("hydrocortisone circadian replacement", "glucocorticoid-replacement", "Hydrocortisone replacement is divided with the largest dose on waking to approximate normal cortisol timing.", "Use the lowest effective physiologic regimen and reassess symptoms, weight, blood pressure, glucose, and signs of excess.", "Giving the largest dose at bedtime can worsen sleep and produce nonphysiologic exposure.", "A patient takes hydrocortisone 10 mg on waking, 5 mg at midday, and 5 mg in late afternoon.", "Keep the largest dose on waking and tailor later doses to symptoms and exposure.", "Morning-weighted dosing better approximates circadian physiology."),
  c("prednisolone alternative", "glucocorticoid-replacement", "Low-dose prednisolone can be an alternative when adherence to multiple hydrocortisone doses is difficult.", "Use approximately 3 to 5 mg daily and monitor carefully for chronic over-replacement.", "Choosing long-acting dexamethasone routinely makes physiologic titration and recovery assessment harder.", "A patient repeatedly misses afternoon hydrocortisone despite education.", "Consider a carefully monitored low-dose prednisolone regimen.", "A longer-acting alternative may improve adherence while limiting exposure."),
  c("clinical replacement monitoring", "glucocorticoid-replacement", "Routine glucocorticoid replacement is primarily titrated by clinical response rather than serum hormone targets.", "Look for under-replacement, over-replacement, timing problems, adherence, and quality-of-life effects.", "Escalating dose until serum cortisol appears normal can cause iatrogenic Cushing physiology.", "A patient gains weight, develops hypertension, and bruises easily while taking replacement hydrocortisone.", "Assess for glucocorticoid over-replacement and reduce exposure if appropriate.", "Clinical toxicity is more useful than chasing a routine cortisol target."),
  c("fludrocortisone indication", "mineralocorticoid-replacement", "Fludrocortisone replaces aldosterone action in confirmed primary adrenal insufficiency.", "Start an adult near 50 to 100 micrograms daily and titrate to symptoms, blood pressure, electrolytes, and renin.", "Using fludrocortisone as a substitute for glucocorticoid replacement leaves cortisol deficiency untreated.", "A patient with autoimmune primary adrenal insufficiency has salt craving, high renin, and postural hypotension.", "Add fludrocortisone while continuing glucocorticoid replacement.", "Primary disease can require replacement of both cortisol and aldosterone actions."),
  c("fludrocortisone monitoring", "mineralocorticoid-replacement", "Mineralocorticoid replacement is monitored with postural symptoms, salt craving, edema, blood pressure, potassium, sodium, and renin.", "Lower the dose if hypertension, edema, hypokalemia, or suppressed renin indicates excess.", "Increasing fludrocortisone solely because one blood pressure is low can worsen volume and potassium toxicity.", "A patient on fludrocortisone develops edema, hypertension, hypokalemia, and suppressed renin.", "Reduce mineralocorticoid exposure and reassess volume status.", "The combined pattern indicates over-replacement."),
  c("liquid hydrocortisone measurement", "formulations-administration", "A liquid hydrocortisone dose must be expressed in milligrams and linked to the verified product concentration.", "Calculate the required volume from the labeled concentration and measure it with a calibrated oral device.", "Prescribing only a volume without confirming concentration can produce a clinically important dosing error.", "A caregiver receives a new liquid hydrocortisone concentration but continues the old milliliter volume.", "Stop and recalculate the volume from the prescribed milligram dose and new concentration.", "The same volume can deliver a different dose when the concentration changes."),
  c("granule and caregiver technique", "formulations-administration", "Small-dose formulations can improve dose precision only when their product-specific administration instructions are followed.", "Teach the exact labeled technique and confirm caregiver return demonstration.", "Assuming all granules, liquids, and tablets can be administered identically can change delivered exposure.", "A child changes from tablets to granules and the caregiver has not received administration teaching.", "Provide product-specific counseling and observe a return demonstration before relying on the new regimen.", "The formulation changes the administration steps even when the prescribed milligram dose is unchanged."),
  c("emergency injection readiness", "formulations-administration", "An emergency hydrocortisone kit is useful only when the drug is current, accessible, and users can prepare and inject the exact product.", "Review storage and expiration, rehearse activation or reconstitution, and verify a complete return demonstration.", "Providing written instructions without hands-on practice can leave the patient untreated during vomiting or collapse.", "A patient's kit is unexpired, but neither the patient nor family can activate the vial system.", "Retrain with the dispensed device and confirm successful return demonstration.", "Time-critical emergency treatment depends on operational skill, not possession alone."),
  c("parenteral to oral transition", "formulations-administration", "Parenteral stress coverage continues until hemodynamics and gastrointestinal absorption are reliable.", "Step down to oral stress dosing, then physiologic replacement, as the trigger resolves under clinical supervision.", "Switching to tablets during persistent vomiting can recreate cortisol deficiency despite a correct written dose.", "A patient treated for adrenal crisis remains nauseated and cannot retain fluids despite improved blood pressure.", "Continue parenteral coverage until oral absorption is dependable.", "A swallowed dose cannot protect the patient when it is not retained or absorbed."),
  c("minor illness stress dosing", "sick-day-preparedness", "Patients with adrenal insufficiency need increased oral glucocorticoid during minor febrile illness when absorption is reliable.", "Follow a personalized sick-day plan and return to baseline after recovery.", "Continuing the usual dose through fever without a stress plan can create relative cortisol deficiency.", "A stable patient with influenza has fever but can eat, drink, and keep tablets down.", "Use the prescribed oral sick-day dose and monitor for worsening.", "Minor stress can usually be covered orally when hemodynamics and absorption are intact."),
  c("vomiting and parenteral coverage", "sick-day-preparedness", "Vomiting, severe diarrhea, major stress, anesthesia, or hemodynamic instability requires parenteral glucocorticoid coverage.", "Use the emergency injection and seek urgent medical care when oral absorption is unreliable.", "Repeatedly redosing oral hydrocortisone during persistent vomiting delays effective treatment.", "A patient with known adrenal insufficiency vomits twice and cannot retain medication.", "Inject emergency hydrocortisone and obtain urgent care.", "Oral therapy cannot protect the patient when it is not absorbed."),
  c("emergency identification and kit", "sick-day-preparedness", "Every patient should carry emergency identification and have an accessible injection kit with trained users.", "Teach the patient and close contacts when and how to inject, then verify technique periodically.", "Providing a kit without training creates false reassurance during a time-critical emergency.", "A family member is unsure how to use the patient's emergency hydrocortisone kit.", "Provide hands-on retraining and confirm a return demonstration.", "Prepared people and equipment shorten time to life-saving treatment."),
  c("adrenal crisis recognition", "adrenal-crisis", "Adrenal crisis can present with hypotension, volume depletion, gastrointestinal symptoms, fever, confusion, weakness, or hypoglycemia.", "Treat immediately when crisis is suspected, especially with known risk or recent glucocorticoid exposure.", "Waiting for the full classic electrolyte pattern can miss central or early crisis.", "A patient recently stopped chronic prednisone and now has vomiting, confusion, and shock.", "Treat suspected adrenal crisis immediately.", "Recent glucocorticoid exposure plus hemodynamic collapse warrants urgent stress treatment."),
  c("adrenal crisis treatment", "adrenal-crisis", "Initial adult treatment is hydrocortisone 100 mg IV or IM plus rapid isotonic saline, followed by 200 mg over 24 hours or 50 mg every six hours.", "Draw diagnostic blood only if it does not delay hydrocortisone and fluid resuscitation.", "Waiting for cortisol results before treating shock is the most dangerous diagnostic error.", "A hypotensive adult with known primary adrenal insufficiency arrives confused and dehydrated.", "Give hydrocortisone 100 mg immediately, start isotonic saline, and continue stress dosing.", "Crisis treatment is safe, time critical, and should precede diagnostic certainty."),
  c("post-crisis transition", "special-populations-follow-up", "After stabilization, treatment transitions to oral replacement with cause evaluation, trigger correction, and renewed prevention education.", "Review why the crisis occurred, replenish the kit, update the sick-day plan, and arrange endocrine follow-up.", "Discharge after blood pressure recovers without prevention review invites recurrence.", "A patient stabilizes after a crisis caused by gastroenteritis and delayed injection.", "Rebuild the emergency plan and confirm injection competence before discharge.", "Most future crises are better prevented by correcting the failed preparedness step."),
  c("pregnancy and labor", "special-populations-follow-up", "Hydrocortisone is preferred in pregnancy, replacement needs are reassessed each trimester, and labor requires stress dosing.", "Monitor clinically, often increase replacement in later pregnancy, and coordinate delivery planning.", "Routine dexamethasone replacement exposes the fetus because placental inactivation is limited.", "A pregnant patient with primary adrenal insufficiency enters active labor.", "Provide labor stress-dose hydrocortisone and coordinated obstetric-endocrine care.", "Labor is a major physiologic stress and requires parenteral coverage."),
];

const appliedDistractors = [
  [
    "Classify central insufficiency because cortisol is low, without considering ACTH.",
    "Exclude mineralocorticoid deficiency because ACTH is elevated.",
    "Treat the pattern as isolated glucocorticoid excess."
  ],
  [
    "Exclude adrenal disease because pigmentation is a skin finding.",
    "Confirm Addison disease from pigmentation alone without hormonal evaluation.",
    "Attribute the pigmentation to low ACTH as the defining mechanism."
  ],
  [
    "Add fludrocortisone automatically to every low-cortisol regimen.",
    "Use fludrocortisone alone instead of glucocorticoid replacement.",
    "Withhold cortisol replacement because potassium is normal."
  ],
  [
    "Exclude autoimmunity because no other autoimmune disease is yet diagnosed.",
    "Assume cortisol replacement removes the need for etiologic evaluation.",
    "Diagnose infection solely because adrenal insufficiency is present."
  ],
  [
    "Wait for antibody testing before treating the shock.",
    "Exclude adrenal injury because the patient is taking an anticoagulant.",
    "Assume chronic autoimmune disease is the only possible cause."
  ],
  [
    "Ignore nonoral products when reconstructing the exposure.",
    "Assume a local injection can never enter systemic circulation.",
    "Prescribe fludrocortisone alone as protection against cortisol deficiency."
  ],
  [
    "Extend every seven-day course with a mandatory month-long taper.",
    "Require stimulation testing before stopping any isolated short course.",
    "Diagnose permanent adrenal failure based on the seven-day duration alone."
  ],
  [
    "Assume CYP3A4 inhibition accelerates steroid clearance.",
    "Exclude HPA suppression because the steroid was inhaled.",
    "Interpret Cushing features as proof of normal endogenous stress reserve."
  ],
  [
    "Require indefinite replacement despite valid evidence of recovery.",
    "Use this result to diagnose primary adrenal destruction.",
    "Require routine dynamic testing for every taper regardless of the valid recovery sample."
  ],
  [
    "Stop all cortisol coverage immediately because the value exceeds 5.",
    "Diagnose primary Addison disease from the recovery value alone.",
    "Add fludrocortisone instead of continuing glucocorticoid coverage."
  ],
  [
    "Stop replacement to force the axis to recover more quickly.",
    "Interpret the result as confirmed recovery because it is measurable.",
    "Replace hydrocortisone with fludrocortisone alone."
  ],
  [
    "Use an unplanned midnight sample as a direct substitute.",
    "Treat every basal value as definitive without considering the clinical question.",
    "Use aldosterone alone to establish cortisol reserve."
  ],
  [
    "Delay emergency treatment until cortisol results return.",
    "Give hydrocortisone and later label the post-treatment sample as pretreatment.",
    "Complete a stimulation test before beginning treatment of hypotension."
  ],
  [
    "Increase glucocorticoid indefinitely without assessing aldosterone replacement.",
    "Use a mineralocorticoid antagonist to correct salt wasting.",
    "Ignore renin and aldosterone because sodium retention is unrelated to them."
  ],
  [
    "Move the entire daily dose to bedtime regardless of symptoms.",
    "Replace hydrocortisone with the same milligram dose of dexamethasone.",
    "Eliminate the morning dose to mimic the normal waking peak."
  ],
  [
    "Use high-dose dexamethasone as the routine physiologic substitute.",
    "Stop replacement on days when the afternoon dose is difficult.",
    "Use fludrocortisone alone to simplify the cortisol regimen."
  ],
  [
    "Increase hydrocortisone until a random cortisol reaches a chosen target.",
    "Dismiss the symptoms because replacement can never cause glucocorticoid excess.",
    "Assume bruising and weight gain always indicate cortisol deficiency."
  ],
  [
    "Stop glucocorticoid replacement once fludrocortisone begins.",
    "Use spironolactone to restore aldosterone action.",
    "Withhold mineralocorticoid assessment because primary disease never affects aldosterone."
  ],
  [
    "Increase fludrocortisone to correct the low potassium.",
    "Ignore the pattern because replacement doses cannot cause toxicity.",
    "Stop all cortisol replacement to treat mineralocorticoid excess."
  ],
  [
    "Keep the old volume because hydrocortisone concentrations are interchangeable.",
    "Choose a household spoon and estimate the volume.",
    "Adjust the prescribed milligram dose solely to preserve the old volume."
  ],
  [
    "Assume granules always use the same preparation method as crushed tablets.",
    "Change the dose without reviewing the product instructions.",
    "Skip counseling because the parent drug name is unchanged."
  ],
  [
    "Rely on the unexpired date as proof that the kit can be used correctly.",
    "Wait until a crisis to learn how to activate the vial.",
    "Substitute a written prescription for a return demonstration."
  ],
  [
    "Switch to tablets solely because blood pressure has improved.",
    "Stop glucocorticoid coverage until nausea resolves.",
    "Use fludrocortisone alone while oral absorption is unreliable."
  ],
  [
    "Continue the usual dose without checking the sick-day plan.",
    "Stop glucocorticoids because fever always indicates steroid toxicity.",
    "Add only fludrocortisone to replace the stress cortisol requirement."
  ],
  [
    "Continue repeated oral redosing despite inability to retain medication.",
    "Wait until the next routine appointment.",
    "Stop all steroids until the stomach settles."
  ],
  [
    "Assume possession of the kit proves injection competence.",
    "Delay training until the next emergency.",
    "Check the expiration date but leave the technique problem unresolved."
  ],
  [
    "Wait for hyperkalemia before considering crisis.",
    "Exclude crisis because the original treatment was prednisone.",
    "Delay treatment until a stimulation test confirms deficiency."
  ],
  [
    "Await cortisol results before treating shock.",
    "Use fludrocortisone alone for the acute cortisol deficit.",
    "Use only the usual oral maintenance dose despite shock."
  ],
  [
    "Discharge without reviewing the cause once blood pressure normalizes.",
    "Remove the injection kit because the current crisis has resolved.",
    "Advise only oral redosing during future persistent vomiting."
  ],
  [
    "Continue only baseline oral replacement through active labor.",
    "Use fludrocortisone alone for labor stress.",
    "Switch routinely to dexamethasone because it is inactivated by the placenta."
  ]
];

export const adrenalInsufficiencyQuestionBank = concepts.map((concept, index) => {
  const answer = index % 4;
  const choices = [...appliedDistractors[index]];
  choices.splice(answer, 0, concept.caseAnswer);
  return {
    id: `adrenal-insufficiency-${String(index + 1).padStart(2, "0")}-case`,
    question: `${concept.caseStem} Which response is best?`,
    choices, answer, rationale: concept.why,
    reviewHref: `#${concept.lesson}`, difficulty: "application",
  };
});

adrenalInsufficiencyQuestionBank.push({
  "id": "adrenal-insufficiency-granule-tube",
  "question": "A caregiver plans to mix Alkindi Sprinkle granules into liquid and deliver them through a gastric tube. Which correction follows the label?",
  "choices": [
    "Proceed because every hydrocortisone formulation is tube-compatible",
    "Crush the granules first",
    "Do not use this method; arrange a suitable product and administration plan",
    "Swallow the intact capsule instead"
  ],
  "answer": 2,
  "rationale": "The granules should not be mixed into liquid or delivered through nasogastric or gastric tubes. Product-specific selection is needed to preserve dose delivery and avoid tube blockage.",
  "reviewHref": "#formulations-administration",
  "difficulty": "clinical"
});

adrenalInsufficiencyQuestionBank.push({
  "id": "adrenal-insufficiency-diagnosis-versus-recovery",
  "question": "A stable adult being evaluated for new pituitary-related adrenal insufficiency has an 8 AM cortisol of 11 micrograms/dL. No recent steroid exposure confounds testing. Which interpretation is appropriate?",
  "choices": [
    "Treat it as confirmed recovery using the steroid-taper threshold",
    "Evaluate adrenal reserve with an appropriately interpreted stimulation test",
    "Diagnose primary Addison disease from cortisol alone",
    "Use a random midnight cortisol as definitive confirmation"
  ],
  "answer": 1,
  "rationale": "The central-diagnosis guideline uses an intermediate morning range of 3-15 micrograms/dL for stimulation testing. A threshold used to assess recovery after a steroid taper answers a different question.",
  "reviewHref": "#morning-cortisol-testing",
  "difficulty": "clinical"
});

adrenalInsufficiencyQuestionBank.push({
  "id": "adrenal-insufficiency-pediatric-crisis-dose",
  "question": "A small child needs emergency hydrocortisone for suspected adrenal crisis. Which dosing principle is correct?",
  "choices": [
    "Apply the fixed adult 100 mg dose to every child",
    "Wait for a cortisol result before selecting any dose",
    "Use the pediatric age/body-size emergency protocol without delaying treatment",
    "Use only fludrocortisone for pediatric crisis"
  ],
  "answer": 2,
  "rationale": "Children require an age/body-size-specific emergency regimen. The lesson cites 50 mg/m\u00b2 initially from the primary-insufficiency guideline; adult fixed doses and fluid volumes must not be applied indiscriminately.",
  "reviewHref": "#adrenal-crisis",
  "difficulty": "clinical"
});

adrenalInsufficiencyQuestionBank.push({
  "id": "adrenal-insufficiency-actovial-volume",
  "question": "A prepared 100 mg Solu-Cortef Act-O-Vial contains 2 mL. A verified order calls for 25 mg. What volume corresponds to that dose?",
  "choices": [
    "0.25 mL",
    "1 mL",
    "2 mL",
    "0.5 mL"
  ],
  "answer": 3,
  "rationale": "The concentration is 100 mg divided by 2 mL, or 50 mg/mL. A 25 mg dose therefore occupies 0.5 mL. Confirm the actual product concentration; other presentations differ.",
  "reviewHref": "#formulations-administration",
  "difficulty": "clinical"
});

adrenalInsufficiencyQuestionBank.push({
  "id": "adrenal-insufficiency-salt-restriction",
  "question": "An adult with aldosterone-deficient primary adrenal insufficiency takes fludrocortisone and asks whether all replacement patients must restrict salt. Which response is appropriate?",
  "choices": [
    "Routine salt restriction is not the default; review symptoms, pressure and electrolytes with the replacement plan",
    "All patients must eliminate dietary sodium",
    "Salt intake removes the need for cortisol replacement",
    "Fludrocortisone dosing never changes with clinical findings"
  ],
  "answer": 0,
  "rationale": "Mineralocorticoid replacement treats salt loss. The primary-insufficiency guideline advises against routine salt restriction; individual findings still guide treatment.",
  "reviewHref": "#mineralocorticoid-replacement",
  "difficulty": "clinical"
});
