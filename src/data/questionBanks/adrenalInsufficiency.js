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

const originalAdrenalInsufficiencyQuestionBank = concepts.map((concept, index) => {
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

originalAdrenalInsufficiencyQuestionBank.push({
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

originalAdrenalInsufficiencyQuestionBank.push({
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

originalAdrenalInsufficiencyQuestionBank.push({
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

originalAdrenalInsufficiencyQuestionBank.push({
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

originalAdrenalInsufficiencyQuestionBank.push({
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

const sourceReviewedReplacementQuestions = {
  "adrenal-insufficiency-17-case": {
    "rationale": "Exogenous glucocorticoids can produce Cushing-like effects, including weight gain and fragile skin that bruises easily. The book also lists increased blood pressure and directs monitoring of weight and blood pressure. These findings warrant review of the replacement exposure and clinical adverse effects before any dose escalation; an appropriate reduction must preserve needed cortisol replacement."
  }
};
const priorFormulationReviewQuestionBank = originalAdrenalInsufficiencyQuestionBank.map((question) => sourceReviewedReplacementQuestions[question.id] ? { ...question, ...sourceReviewedReplacementQuestions[question.id] } : question);

const sourceReviewedHydrocortisoneFormulationQuestions = {
  "adrenal-insufficiency-21-case": {
    "rationale": "Teach and check the exact granule instructions before relying on the switch. For Alkindi Sprinkle, open the capsule, keep the capsule dry, give all granules directly or by the labeled spoon or soft-food method, do not crush or chew them, and follow promptly with fluid. The label calls for close monitoring after a switch because prior manipulated preparations may have delivered a different exposure despite the same total daily milligrams. Return demonstration checks understanding of these steps; it is an educational safeguard rather than a claim that FDA mandates a particular competency test. Ingredient identity does not make preparation methods interchangeable, remove the need for counseling, or justify an unexplained dose change."
  },
  "adrenal-insufficiency-22-case": {
    "rationale": "An unexpired vial is not proof that the patient or caregiver can prepare the prescribed injection. For the dispensed Act-O-Vial, check that training covers activation, gentle mixing, exposure and disinfection of the stopper, and withdrawal of the verified dose. Return demonstration checks the labeled preparation steps before an emergency; a written prescription or waiting for crisis does not establish that skill. Use the actual device, strength, route and current storage instructions. This is a practical training safeguard, not a claim that the label requires a named assessment method or that possession of the kit guarantees timely treatment."
  },
  "adrenal-insufficiency-granule-tube": {
    "rationale": "Alkindi Sprinkle labeling prohibits mixing the granules into liquid because the delivered dose can be reduced and the taste-masking cover can dissolve. It also prohibits nasogastric or gastric tube administration because granules may block the tube. Crushing the granules and swallowing the capsule shell are also contrary to the instructions. A sip of fluid after giving the granules is permitted; making a liquid mixture before administration is a different method. Arrange an appropriate product and route with the treating team rather than improvising a tube protocol or assuming every hydrocortisone product is compatible."
  },
  "adrenal-insufficiency-actovial-volume": {
    "rationale": "The manufacturer label identifies the mixed 100 mg Act-O-Vial as 100 mg hydrocortisone equivalent in 2 mL: 100 mg / 2 mL = 50 mg/mL. A verified 25 mg order requires 25 mg / 50 mg/mL = 0.5 mL. At this concentration, 0.25 mL supplies 12.5 mg, 1 mL supplies 50 mg, and 2 mL supplies 100 mg. Confirm the actual presentation and complete labeled activation before withdrawal; the plain vial has no packaged diluent, and other Act-O-Vial strengths have different concentrations. The stated dose is a verified order for this calculation, not a new clinical dosing recommendation. No additional salt-to-hydrocortisone conversion is needed."
  }
};
const priorAdultReplacementQuestionBank = priorFormulationReviewQuestionBank.map((question) => sourceReviewedHydrocortisoneFormulationQuestions[question.id] ? { ...question, ...sourceReviewedHydrocortisoneFormulationQuestions[question.id] } : question);

const sourceReviewedAdultReplacementRationales = {
  "adrenal-insufficiency-15-case": "The stated doses total 20 mg daily (10 + 5 + 5), within the suggested adult primary-adrenal-insufficiency hydrocortisone range. Retain the largest dose on waking and individualize later timing to clinical response while limiting late-evening exposure. Moving all treatment to bedtime or removing the morning dose contradicts that rhythm. Dexamethasone is not interchangeable milligram for milligram and is discouraged for routine primary-adrenal replacement because titration and excess are concerns. The schedule is an example, not a fixed prescription for every patient.",
  "adrenal-insufficiency-16-case": "After reviewing the adherence problem, a clinician may consider prednisolone 3 to 5 mg daily in one or two doses for selected adults with primary adrenal insufficiency. Monitor clinical response and excess; the guideline notes limited long-term comparative safety evidence. High-dose dexamethasone is not physiologic substitution, omitted replacement can leave the patient cortisol-deficient, and fludrocortisone alone supplies mineralocorticoid rather than cortisol replacement. This adult alternative does not establish a pediatric plan.",
  "adrenal-insufficiency-20-case": "At a changed concentration, the old mL volume can deliver a different milligram dose. Verify the prescribed dose and new mg/mL concentration, then calculate mL = mg divided by mg/mL and confirm a suitable calibrated device. Do not assume concentrations are interchangeable, estimate with a household spoon, or change the prescribed dose just to preserve the old volume. This is a measurement safeguard for an appropriately verified preparation, not a hydrocortisone compounding recipe.",
  "adrenal-insufficiency-23-case": "Persistent inability to retain fluids makes oral medication unreliable despite improved blood pressure. Continue the clinically required parenteral glucocorticoid coverage and reassess the patient, cause and fluid needs; the primary-adrenal guideline makes reduction and oral transition depend on clinical state. Do not switch solely for one improved vital sign, stop needed cortisol coverage or substitute fludrocortisone alone. Oral therapy resumes when retention and absorption are dependable, with stress exposure adjusted to the remaining illness."
};
export const adrenalInsufficiencyQuestionBank = priorAdultReplacementQuestionBank.map((question) => sourceReviewedAdultReplacementRationales[question.id] ? { ...question, rationale: sourceReviewedAdultReplacementRationales[question.id] } : question);


// Preserve stable case IDs and keyed choices while explaining every alternative.
for (const [id, updates] of Object.entries({
  "adrenal-insufficiency-01-case": {
    "id": "adrenal-insufficiency-01-case",
    "question": "A patient has low cortisol, high ACTH, hyperkalemia, and salt craving. Which response is best?",
    "choices": [
      "Classify primary adrenal insufficiency and assess aldosterone deficiency.",
      "Classify central insufficiency because cortisol is low, without considering ACTH.",
      "Exclude mineralocorticoid deficiency because ACTH is elevated.",
      "Treat the pattern as isolated glucocorticoid excess."
    ],
    "answer": 0,
    "rationale": "Low cortisol with high ACTH favors primary cortical failure; hyperkalemia and salt craving support possible mineralocorticoid loss. Assess renin and aldosterone together. Low cortisol alone cannot distinguish primary from central disease, so ignoring ACTH misclassifies the pattern. Elevated ACTH does not exclude aldosterone deficiency. Glucocorticoid excess does not explain this low-cortisol pattern; confirm the clinical and hormonal assessment rather than treating the case as an isolated cortisol value.",
    "reviewHref": "#levels-of-failure",
    "difficulty": "application"
  },
  "adrenal-insufficiency-02-case": {
    "id": "adrenal-insufficiency-02-case",
    "question": "A patient with weight loss and postural symptoms develops darkening of old scars and oral mucosa. Which response is best?",
    "choices": [
      "Exclude adrenal disease because pigmentation is a skin finding.",
      "Prioritize evaluation for primary adrenal insufficiency.",
      "Confirm Addison disease from pigmentation alone without hormonal evaluation.",
      "Attribute the pigmentation to low ACTH as the defining mechanism."
    ],
    "answer": 1,
    "rationale": "Weight loss and postural symptoms with scar and oral-mucosal darkening warrant evaluation for primary adrenal insufficiency. Increased ACTH and related melanocortin signaling after loss of cortisol feedback can explain pigmentation. Dismissing it as skin-only disease misses the systemic clues. Pigmentation alone cannot confirm Addison disease, and low ACTH is not its defining mechanism. Arrange hormonal evaluation and assess urgency from the overall presentation.",
    "reviewHref": "#primary-adrenal-insufficiency",
    "difficulty": "application"
  },
  "adrenal-insufficiency-03-case": {
    "id": "adrenal-insufficiency-03-case",
    "question": "A patient with pituitary disease has low cortisol and low ACTH but normal potassium and renin. Which response is best?",
    "choices": [
      "Add fludrocortisone automatically to every low-cortisol regimen.",
      "Use fludrocortisone alone instead of glucocorticoid replacement.",
      "Replace glucocorticoid without routine fludrocortisone.",
      "Withhold cortisol replacement because potassium is normal."
    ],
    "answer": 2,
    "rationale": "Pituitary disease with low cortisol and low ACTH supports central adrenal insufficiency. RAAS generally preserves aldosterone, so replace glucocorticoid without routine fludrocortisone. Adding fludrocortisone automatically is inappropriate, and fludrocortisone alone cannot replace cortisol. Normal potassium and renin do not exclude cortisol deficiency or justify withholding needed glucocorticoid replacement.",
    "reviewHref": "#levels-of-failure",
    "difficulty": "application"
  },
  "adrenal-insufficiency-04-case": {
    "id": "adrenal-insufficiency-04-case",
    "question": "A young adult has confirmed primary adrenal insufficiency without infection, hemorrhage, or metastatic disease. Which response is best?",
    "choices": [
      "Exclude autoimmunity because no other autoimmune disease is yet diagnosed.",
      "Assume cortisol replacement removes the need for etiologic evaluation.",
      "Diagnose infection solely because adrenal insufficiency is present.",
      "Test for autoimmune adrenalitis and arrange periodic screening for associated autoimmune disease."
    ],
    "answer": 3,
    "rationale": "Investigate autoimmune adrenalitis with a validated 21-hydroxylase antibody assay and arrange periodic assessment for associated autoimmunity when autoimmune origin has not been excluded. Another autoimmune diagnosis need not already be present. Cortisol replacement does not remove the need to establish etiology, and primary insufficiency alone does not prove infection. The guideline permits annual screening but states that the optimal interval is unknown.",
    "reviewHref": "#primary-adrenal-insufficiency",
    "difficulty": "application"
  },
  "adrenal-insufficiency-05-case": {
    "id": "adrenal-insufficiency-05-case",
    "question": "An anticoagulated patient with sepsis develops sudden flank pain, hypotension, hyponatremia, and hyperkalemia. Which response is best?",
    "choices": [
      "Treat possible adrenal crisis and evaluate for bilateral adrenal hemorrhage.",
      "Wait for antibody testing before treating the shock.",
      "Exclude adrenal injury because the patient is taking an anticoagulant.",
      "Assume chronic autoimmune disease is the only possible cause."
    ],
    "answer": 0,
    "rationale": "Sepsis and anticoagulation with sudden pain, shock and this electrolyte pattern raise concern for acute bilateral adrenal hemorrhage and possible adrenal crisis. Begin appropriate parenteral glucocorticoids and fluid resuscitation while evaluating the cause; obtain useful samples only if doing so is safe and does not delay treatment. Waiting for antibodies delays urgent care. Anticoagulation does not exclude adrenal injury, and chronic autoimmunity is not the only cause of primary failure. The pattern raises concern; it does not establish hemorrhage without evaluation.",
    "reviewHref": "#primary-adrenal-insufficiency",
    "difficulty": "application"
  },
  "adrenal-insufficiency-06-case": {
    "id": "adrenal-insufficiency-06-case",
    "question": "A patient with unproven adrenal recovery stops repeated joint injections while using high-dose inhaled and potent topical steroids, then develops a febrile illness. The patient is hemodynamically stable and can retain oral medication. Which response is best?",
    "choices": [
      "Ignore nonoral products when reconstructing the exposure.",
      "Assess cumulative glucocorticoid exposure and provide stress coverage when recovery is unproven.",
      "Assume a local injection can never enter systemic circulation.",
      "Prescribe fludrocortisone alone as protection against cortisol deficiency."
    ],
    "answer": 1,
    "rationale": "Repeated joint injections plus inhaled and topical steroids can produce cumulative systemic exposure. During the specified febrile illness, current or recent use with unproven adrenal recovery warrants stress coverage; oral coverage is suitable for minor stress when stable and able to retain and absorb medication. More severe stress, instability or impaired oral delivery changes the route to parenteral treatment. Ignoring nonoral products or assuming injections never enter the circulation misses suppression risk. Fludrocortisone alone does not replace missing cortisol.",
    "reviewHref": "#central-glucocorticoid-induced",
    "difficulty": "application"
  },
  "adrenal-insufficiency-07-case": {
    "id": "adrenal-insufficiency-07-case",
    "question": "A patient completes seven days of prednisone without prior chronic exposure or Cushing features. Which response is best?",
    "choices": [
      "Extend every seven-day course with a mandatory month-long taper.",
      "Require stimulation testing before stopping any isolated short course.",
      "Do not prolong treatment solely to taper for HPA protection.",
      "Diagnose permanent adrenal failure based on the seven-day duration alone."
    ],
    "answer": 2,
    "rationale": "A seven-day isolated prednisone course falls below the guideline\u2019s three-to-four-week short-course boundary. It usually does not require tapering or stimulation testing solely for HPA protection, regardless of dose, when the treatment indication no longer requires the drug. A mandatory month-long taper and universal stimulation testing add requirements the guideline does not support. Seven days alone does not establish permanent adrenal failure. Prior exposure, clinical features and the underlying disease still matter.",
    "reviewHref": "#central-glucocorticoid-induced",
    "difficulty": "application"
  },
  "adrenal-insufficiency-08-case": {
    "id": "adrenal-insufficiency-08-case",
    "question": "A patient using inhaled fluticasone develops Cushing features after a strong CYP3A4 inhibitor is started. Which response is best?",
    "choices": [
      "Assume CYP3A4 inhibition accelerates steroid clearance.",
      "Exclude HPA suppression because the steroid was inhaled.",
      "Interpret Cushing features as proof of normal endogenous stress reserve.",
      "Suspect increased systemic glucocorticoid exposure and HPA suppression."
    ],
    "answer": 3,
    "rationale": "A strong CYP3A4 inhibitor can reduce steroid metabolism, increasing systemic fluticasone exposure and HPA suppression. In a current or previous glucocorticoid user with exogenous Cushing features, the 2024 guideline advises assuming glucocorticoid-induced adrenal insufficiency. Inhibition does not accelerate clearance; inhalation does not eliminate systemic exposure. Cushing features from exogenous treatment do not prove an intact endogenous stress response. Review the interaction, underlying treatment need and adrenal-protection plan rather than abruptly stopping therapy.",
    "reviewHref": "#central-glucocorticoid-induced",
    "difficulty": "application"
  }
})) {
  Object.assign(adrenalInsufficiencyQuestionBank.find((question) => question.id === id), updates);
}


// Explain every alternative while preserving stable question IDs and keyed choices.
for (const [id, updates] of Object.entries({
  "adrenal-insufficiency-09-case": {
    "id": "adrenal-insufficiency-09-case",
    "question": "During recovery testing, morning cortisol is greater than 10 micrograms per deciliter under appropriate conditions. Which response is best?",
    "choices": [
      "Treat the result as evidence of HPA recovery and stop replacement when clinically appropriate.",
      "Require indefinite replacement despite valid evidence of recovery.",
      "Use this result to diagnose primary adrenal destruction.",
      "Require routine dynamic testing for every taper regardless of the valid recovery sample."
    ],
    "answer": 0,
    "rationale": "A properly obtained recovery cortisol above 10 micrograms/dL supports HPA-axis recovery in the stated stable patient who has reached a physiologic dose and no longer needs glucocorticoids for the underlying disease. The clinician can use that result to support discontinuation. Indefinite replacement is not automatically required. This result does not prove primary adrenal destruction. Routine dynamic testing for every taper is not recommended; interpret the value with assay, timing and clinical context.",
    "reviewHref": "#morning-cortisol-testing",
    "difficulty": "application"
  },
  "adrenal-insufficiency-10-case": {
    "id": "adrenal-insufficiency-10-case",
    "question": "A stable patient at physiologic dosing has a properly timed recovery cortisol of 7 micrograms per deciliter after a clinician-planned medication hold. Which response is best?",
    "choices": [
      "Stop all cortisol coverage immediately because the value exceeds 5.",
      "Continue physiologic coverage and repeat testing later.",
      "Diagnose primary Addison disease from the recovery value alone.",
      "Add fludrocortisone instead of continuing glucocorticoid coverage."
    ],
    "answer": 1,
    "rationale": "The specified recovery cortisol of 7 micrograms/dL is intermediate, between 5 and 10. Continue the physiologic glucocorticoid dose and repeat morning cortisol after an appropriate interval, usually weeks to months. Being above 5 is not sufficient to justify immediate cessation. One recovery value does not establish primary adrenal failure. Fludrocortisone alone cannot provide cortisol replacement and is not routine treatment for glucocorticoid-induced adrenal insufficiency.",
    "reviewHref": "#morning-cortisol-testing",
    "difficulty": "application"
  },
  "adrenal-insufficiency-11-case": {
    "id": "adrenal-insufficiency-11-case",
    "question": "A patient at physiologic hydrocortisone dosing has a properly timed recovery cortisol of 3 micrograms per deciliter after a clinician-planned medication hold. Which response is best?",
    "choices": [
      "Stop replacement to force the axis to recover more quickly.",
      "Interpret the result as confirmed recovery because it is measurable.",
      "Continue replacement and repeat recovery assessment after additional time.",
      "Replace hydrocortisone with fludrocortisone alone."
    ],
    "answer": 2,
    "rationale": "A properly timed recovery cortisol of 3 micrograms/dL is below the 5-microgram/dL guide and supports persistent suppression. Continue physiologic glucocorticoid replacement and reassess recovery later, generally after a few months. Stopping replacement to force recovery can leave the patient unprotected. A measurable value is not the same as adequate reserve, and fludrocortisone alone does not replace cortisol. Avoid chronic over-replacement while maintaining a safe clinician-directed recovery plan.",
    "reviewHref": "#morning-cortisol-testing",
    "difficulty": "application"
  },
  "adrenal-insufficiency-12-case": {
    "id": "adrenal-insufficiency-12-case",
    "question": "A stable adult outpatient has compatible symptoms and equivocal basal cortisol testing. Which response is best?",
    "choices": [
      "Use an unplanned midnight sample as a direct substitute.",
      "Treat every basal value as definitive without considering the clinical question.",
      "Use aldosterone alone to establish cortisol reserve.",
      "Perform an appropriately interpreted standard corticotropin stimulation test."
    ],
    "answer": 3,
    "rationale": "For this stable adult outpatient with compatible symptoms and an equivocal basal result, a properly planned corticotropin stimulation test assesses adrenal cortisol reserve. An unplanned midnight sample does not substitute for the appropriate assessment. An equivocal basal cortisol is not automatically definitive, and aldosterone testing evaluates mineralocorticoid physiology rather than stimulated cortisol reserve. Interpret the stimulation result with the laboratory assay and disease timing; recent central failure can still produce a normal response before adrenal atrophy.",
    "reviewHref": "#morning-cortisol-testing",
    "difficulty": "application"
  },
  "adrenal-insufficiency-13-case": {
    "id": "adrenal-insufficiency-13-case",
    "question": "Blood can be drawn immediately in a hypotensive patient with suspected adrenal crisis without delaying treatment. Which approach best preserves diagnostic information?",
    "choices": [
      "Collect cortisol and ACTH, then give hydrocortisone at once.",
      "Delay emergency treatment until cortisol results return.",
      "Give hydrocortisone and later label the post-treatment sample as pretreatment.",
      "Complete a stimulation test before beginning treatment of hypotension."
    ],
    "answer": 0,
    "rationale": "With suspected adrenal crisis, immediately obtainable pretreatment cortisol and ACTH preserve diagnostic information, but parenteral hydrocortisone and resuscitation must not wait for the results. Delaying treatment until laboratory results return is unsafe. Hydrocortisone can confound a subsequently drawn cortisol, so that sample cannot be labeled pretreatment. Completing stimulation testing before emergency treatment also delays necessary care. Draw useful samples only when doing so is safe and causes no treatment delay.",
    "reviewHref": "#clinical-patterns",
    "difficulty": "application"
  },
  "adrenal-insufficiency-14-case": {
    "id": "adrenal-insufficiency-14-case",
    "question": "A patient has primary adrenal insufficiency, postural symptoms, salt craving, high renin, and low aldosterone. Which response is best?",
    "choices": [
      "Increase glucocorticoid indefinitely without assessing aldosterone replacement.",
      "Begin and titrate fludrocortisone with clinical and biochemical monitoring.",
      "Use a mineralocorticoid antagonist to correct salt wasting.",
      "Ignore renin and aldosterone because sodium retention is unrelated to them."
    ],
    "answer": 1,
    "rationale": "Confirmed primary disease with salt craving, postural symptoms, high renin and low aldosterone supports mineralocorticoid deficiency. Start fludrocortisone and titrate with clinical volume status, blood pressure, electrolytes and renin assessment. Repeatedly increasing glucocorticoid alone does not specifically correct the missing aldosterone action. A mineralocorticoid antagonist would oppose the needed action. Ignoring renin and aldosterone loses useful information about this deficiency; monitor for both persistent salt loss and excess replacement.",
    "reviewHref": "#clinical-patterns",
    "difficulty": "application"
  },
  "adrenal-insufficiency-diagnosis-versus-recovery": {
    "id": "adrenal-insufficiency-diagnosis-versus-recovery",
    "question": "A stable adult being evaluated for new pituitary-related adrenal insufficiency has an 8 AM cortisol of 11 micrograms/dL. No recent steroid exposure confounds testing. Which interpretation is appropriate?",
    "choices": [
      "Treat it as confirmed recovery using the steroid-taper threshold",
      "Evaluate adrenal reserve with an appropriately interpreted stimulation test",
      "Diagnose primary Addison disease from cortisol alone",
      "Use a random midnight cortisol as definitive confirmation"
    ],
    "answer": 1,
    "rationale": "In this stable adult with new pituitary disease, an unconfounded 8 AM cortisol of 11 micrograms/dL is within the 2016 central-diagnostic intermediate range of 3 to 15, supporting appropriately planned corticotropin testing. The greater-than-10 guide for recovery after a glucocorticoid taper answers a different question and cannot establish recovery here. Cortisol alone does not diagnose primary failure, and an unplanned midnight sample is not a definitive substitute. Use assay-specific stimulated interpretation and remember that recent central disease can retain an apparently normal adrenal response.",
    "reviewHref": "#morning-cortisol-testing",
    "difficulty": "clinical"
  }
})) {
  Object.assign(adrenalInsufficiencyQuestionBank.find((question) => question.id === id), updates);
}
