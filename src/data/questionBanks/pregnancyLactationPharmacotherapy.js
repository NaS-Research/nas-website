const c = (name, lesson, principle, action, hazard, caseStem, caseAnswer, why) => ({ name, lesson, principle, action, hazard, caseStem, caseAnswer, why });

const concepts = [
  c("gestational exposure history", "pregnancy-context", "Medication risk assessment requires the indication, gestational age, exposure dates, dose, route, and duration.", "Build an exact exposure timeline before interpreting evidence.", "Using trimester alone can hide a short exposure that occurred during a specific developmental window.", "A patient calls after taking a medicine but provides no dates or dose.", "Clarify the exposure and pregnancy timeline before estimating risk.", "The biologic meaning of exposure depends on timing, amount, and clinical context."),
  c("untreated maternal disease", "pregnancy-context", "The correct comparator for treatment is often the risk of untreated or undertreated maternal disease, not an imaginary zero-risk state.", "Compare each reasonable therapy with the consequences of delaying or withholding care.", "Stopping an effective chronic medicine abruptly can cause relapse, withdrawal, or maternal and fetal harm.", "A stable patient discovers a pregnancy and asks whether to stop every medicine today.", "Review each medicine and condition urgently without making blanket abrupt changes.", "Pregnancy decisions require benefit and risk analysis on both sides."),
  c("baseline pregnancy risk", "pregnancy-context", "Every pregnancy has a background risk of loss and congenital conditions independent of medication exposure.", "Use baseline rates when communicating any observed increase in risk.", "Attributing every adverse outcome to one exposure creates false causality.", "A patient asks whether any birth defect would prove that a past dose caused it.", "Explain baseline risk and the limits of causal inference.", "Background events occur even without the exposure."),
  c("expanded distribution", "maternal-pharmacokinetics", "Expanded plasma volume and body water can increase the apparent distribution volume of hydrophilic drugs.", "Interpret concentrations and loading needs using drug-specific pregnancy data.", "Assuming pregnancy changes every drug concentration in the same direction ignores physicochemical differences.", "A hydrophilic drug has a lower measured concentration late in pregnancy.", "Assess distribution and clearance changes before labeling the patient nonadherent.", "Physiologic expansion can dilute and redistribute hydrophilic medicines."),
  c("lower albumin", "maternal-pharmacokinetics", "Lower albumin can decrease total concentration while increasing the unbound fraction of a highly bound drug.", "Use free concentrations or validated pregnancy-adjusted interpretation when clinically available.", "Increasing a dose solely to normalize a total concentration can cause toxicity.", "A highly protein-bound drug has a low total level but expected clinical effect.", "Consider altered protein binding before escalating the dose.", "Total concentration can misrepresent active unbound exposure."),
  c("increased renal clearance", "maternal-pharmacokinetics", "Increased renal blood flow and GFR can increase clearance of renally eliminated drugs during pregnancy.", "Monitor drug response and validated concentrations, then reassess after delivery.", "Keeping a pregnancy-increased dose unchanged postpartum can increase toxicity.", "A renally cleared drug required escalation during pregnancy.", "Plan postpartum reassessment as renal physiology returns toward baseline.", "Clearance and dose requirements can change again after delivery."),
  c("placental diffusion", "placental-transfer", "Small, lipophilic, nonionized, weakly bound drugs often cross by passive diffusion more readily.", "Evaluate structure together with maternal concentration, transport, placental physiology, and dose.", "Declaring a drug safe only because it is large ignores active transport and imperfect barriers.", "A learner states that a molecular-weight cutoff proves zero fetal exposure.", "Correct the statement and assess all transfer mechanisms.", "Molecular weight influences transfer but is not an absolute gate."),
  c("exposure versus toxicity", "placental-transfer", "Fetal exposure does not by itself prove a toxic or teratogenic effect.", "Connect exposure magnitude and timing to a biologically plausible outcome and the available human evidence.", "Equating detection in cord blood with congenital-malformation causation overstates the data.", "A study detects a medicine in fetal circulation without outcome data.", "Report exposure while acknowledging that clinical effect remains uncertain.", "Exposure and harm are distinct scientific questions."),
  c("developmental timing", "placental-transfer", "The outcome associated with an exposure depends partly on the developmental process active at that time.", "Map the exposure dates to implantation, organogenesis, fetal growth, and neonatal adaptation as relevant.", "Assuming all trimesters create the same type of risk loses developmental specificity.", "A medicine was used only near delivery.", "Assess neonatal adaptation and toxicity in addition to structural outcomes.", "Late exposure can affect function and neonatal transition even after organogenesis."),
  c("FDA PLLR", "evidence-labeling", "The FDA PLLR replaced pregnancy letter categories with narrative risk summaries, clinical considerations, and data.", "Read current sections 8.1, 8.2, and 8.3 for the exact product.", "Using A, B, C, D, and X categories can misrepresent current evidence and clinical context.", "A learner calls a drug safe because an old source lists category B.", "Replace the letter with current labeling and evidence review.", "The old categories were retired because they oversimplified benefit and risk."),
  c("pregnancy registries", "evidence-labeling", "Pregnancy registries can identify outcome patterns but remain vulnerable to selection, loss to follow-up, confounding, and limited power.", "Combine registry findings with comparator data, timing, mechanism, and other studies.", "Treating a small registry with no observed events as proof of no risk overstates precision.", "A registry reports zero events among a small number of exposures.", "Explain the confidence limits and integrate other evidence.", "Absence of observed events in a small cohort is not proof of zero risk."),
  c("absolute risk communication", "evidence-labeling", "Absolute event rates and the comparison group are more interpretable than a relative statement alone.", "State baseline and exposed rates when data permit, plus uncertainty and exposure timing.", "Saying risk doubled without giving that it changed from one to two per thousand can distort perception.", "In a hypothetical study, an outcome occurs in 1 per 1,000 unexposed pregnancies and the exposed group has a relative risk of 2.", "Explain an estimated 2 per 1,000 exposed pregnancies, an absolute increase of 1 per 1,000, and the study uncertainty.", "2 times 1/1,000 = 2/1,000 (0.2%); subtracting 1/1,000 (0.1%) gives a 0.1-percentage-point absolute increase. These fictional figures are not a drug-specific risk estimate and do not establish causation."),
  c("nausea and vomiting", "common-symptoms", "Pyridoxine can be tried first for typical nausea and vomiting of pregnancy, with doxylamine added if needed.", "Screen for severity and alternate causes before escalating therapy.", "Treating dehydration, weight loss, electrolyte disturbance, or abdominal pain as routine morning sickness can delay urgent care.", "A pregnant patient cannot keep liquids down and feels faint.", "Escalate for clinical assessment rather than recommend only self-care.", "Severe symptoms can represent hyperemesis or another condition requiring treatment."),
  c("pregnancy reflux", "common-symptoms", "Reflux care combines meal and position strategies with an appropriate current antacid or acid-suppressive medicine when needed.", "Review renal function, sodium load, interacting medicines, and product ingredients.", "Equating market approval with pregnancy suitability skips the clinical assessment.", "A patient asks for the reflux medicine highlighted in an outdated source.", "Verify current product status and pregnancy-specific evidence before selecting therapy.", "Reformulated ranitidine received FDA approval in November 2025; approval alone does not establish preferred use in pregnancy."),
  c("constipation triage", "common-symptoms", "Hydration, fiber, activity, and selected bulk-forming or osmotic agents can support uncomplicated constipation.", "Ask about severe pain, vomiting, bleeding, fever, obstruction symptoms, and duration first.", "Recommending repeated stimulant use without symptom assessment can miss a serious diagnosis.", "A patient reports constipation with severe abdominal pain and vomiting.", "Refer for prompt evaluation rather than routine self-treatment.", "Red flags change a common symptom into a diagnostic problem."),
  c("GDM targets", "diabetes-pregnancy", "Common ADA pregnancy glucose targets are fasting below 95 mg/dL, one hour below 140, and two hours below 120.", "Link each value to its sampling time and individualize with the care team.", "Comparing a one-hour value with a fasting target creates false treatment decisions.", "A patient reports 135 mg/dL one hour after eating.", "Interpret it against the one-hour target rather than the fasting target.", "Pregnancy glucose targets are time specific."),
  c("GDM medication", "diabetes-pregnancy", "Insulin is the preferred medication for gestational diabetes when nutrition and behavioral therapy do not meet targets.", "Select and titrate insulin to the glucose pattern with hypoglycemia education.", "Calling metformin or glyburide universal first-line replacements ignores placental transfer and current ADA guidance.", "A patient with gestational diabetes has persistent fasting values above target despite nutrition and behavioral therapy.", "Initiate an individualized insulin plan with monitoring.", "Insulin is effective and does not cross the placenta like oral agents."),
  c("postpartum diabetes screening", "diabetes-pregnancy", "After gestational diabetes, a 75 g oral glucose tolerance test is recommended at 4 to 12 weeks postpartum with lifelong screening every one to three years.", "Arrange testing before the patient leaves postpartum care and communicate long-term risk.", "A normal glucose value immediately after delivery does not remove future diabetes risk.", "A patient with GDM has normal inpatient postpartum glucose.", "Schedule the postpartum OGTT and long-term screening.", "GDM predicts persistent and future dysglycemia."),
  c("preeclampsia severe features", "hypertension-preeclampsia", "Preeclampsia can be diagnosed without proteinuria when new hypertension occurs with qualifying end-organ findings.", "Evaluate platelets, renal and hepatic function, pulmonary symptoms, neurologic symptoms, and fetal status.", "Waiting for proteinuria despite severe symptoms can delay life-saving treatment.", "A patient after 20 weeks has hypertension, severe headache, visual symptoms, and no proteinuria yet.", "Treat this as urgent possible preeclampsia with severe features.", "Proteinuria is not required when qualifying end-organ findings are present."),
  c("aspirin prevention", "hypertension-preeclampsia", "Under ACOG guidance, eligible high-risk patients receive aspirin 81 mg daily beginning 12 to 28 weeks, optimally before 16 weeks, through delivery.", "Use high-risk and moderate-risk criteria with obstetric guidance.", "Starting aspirin without assessing indication and bleeding context is not person-specific care.", "A high-risk patient following the ACOG aspirin protocol presents at 14 weeks without a contraindication.", "Discuss and initiate 81 mg daily with the obstetric team.", "This timing matches ACOG prevention guidance."),
  c("magnesium sulfate", "hypertension-preeclampsia", "Magnesium sulfate prevents or treats eclamptic seizures in indicated patients but is not the primary chronic antihypertensive.", "Monitor reflexes, respiration, renal function, urine output, and toxicity risk according to protocol.", "Using magnesium alone to control acute severe blood pressure leaves vascular risk untreated.", "A patient has preeclampsia with severe features and persistent severe blood pressure.", "Address seizure prophylaxis and urgently treat severe blood pressure with pregnancy-appropriate therapy.", "The two interventions address different immediate dangers."),
  c("LMWH in pregnancy", "vte-anticoagulation", "Low-molecular-weight heparin is commonly preferred for pregnancy VTE because it is effective and does not cross the placenta.", "Dose for prophylaxis or treatment and account for renal function, weight, bleeding, and delivery plans.", "Claiming LMWH allows neuraxial procedures at any time ignores serious bleeding risk.", "A patient on therapeutic LMWH approaches a planned delivery.", "Create a documented interruption, anesthesia, delivery, and restart plan.", "Peripartum timing is dose and protocol specific."),
  c("phase-specific anticoagulation plan", "vte-anticoagulation", "Anticoagulant selection and timing can change across pregnancy, labor, neuraxial procedures, postpartum recovery, and breastfeeding because placental transfer, reversibility, bleeding risk, renal function, and milk compatibility differ by phase.", "Document the indication and dose intensity, last-dose timing, delivery and anesthesia contingencies, mechanical protection when appropriate, postpartum restart criteria, treatment duration, breastfeeding plan, and responsible clinicians.", "Stopping anticoagulation for delivery without a coordinated restart and postpartum plan can exchange procedural bleeding risk for preventable maternal thrombosis during a high-risk period.", "A patient treated for pregnancy-associated VTE delivers after a planned LMWH interruption and intends to breastfeed.", "Reassess hemostasis and procedural factors, restart anticoagulation at a protocol-appropriate time, and select a breastfeeding-compatible ongoing regimen with explicit follow-up.", "For pregnancy-associated VTE, RCOG requires at least six weeks postpartum and at least three months total treatment. Check both minimums and ongoing risk before stopping; hemostasis and neuraxial factors separately determine restart timing."),
  c("relative infant dose", "lactation-exposure", "Relative infant dose compares the estimated infant dose through milk with the maternal weight-normalized dose.", "Use it with toxicity, oral absorption, metabolites, infant age, and observed effects.", "Treating ten percent as a universal safe or unsafe boundary can misclassify potent or toxic drugs.", "A medicine has a low relative infant dose but a highly toxic active metabolite.", "Do not rely on the percentage alone; assess drug-specific toxicity and alternatives.", "Relative infant dose is a screening tool, not a verdict."),
  c("vulnerable breastfed infant", "lactation-exposure", "Prematurity, neonatal age and illness can reduce drug clearance. At the same milk concentration, a larger milk intake increases the ingested drug dose; exclusive feeding alone does not establish impaired clearance.", "Adjust the risk assessment and monitoring plan to infant age, health, and feeding volume.", "Applying adult clearance assumptions to a premature newborn can underestimate accumulation.", "A premature newborn is exposed through milk to a renally cleared medicine.", "Use heightened drug-specific assessment and monitoring.", "Immature renal clearance can increase accumulation."),
  c("lactation resources and opioids", "lactation-care", "NIH LactMed and current FDA labeling provide drug-specific lactation evidence, and FDA recommends against codeine and tramadol while breastfeeding.", "Choose safer alternatives and define infant monitoring when maternal treatment is needed.", "Assuming dose timing after a feed eliminates active-metabolite risk is unsafe.", "A breastfeeding patient is prescribed codeine for pain.", "Recommend an appropriate alternative and explain the infant respiratory risk.", "Variable metabolism can produce dangerous infant opioid exposure."),
  c("complete lactation medication plan", "lactation-care", "A defensible lactation plan treats maternal disease while integrating the exact product and dose, milk transfer, oral bioavailability, active metabolites, treatment duration, infant age and health, feeding pattern, milk-production effects, alternatives, and monitoring.", "Use current drug-specific evidence, preserve effective maternal treatment when possible, minimize exposure through a clinically sound regimen, and give the caregiver concrete infant warning signs and an escalation pathway.", "Advising routine pumping and discarding or abrupt maternal treatment interruption without comparing safer alternatives and untreated-disease risk can harm both patient and infant.", "A premature exclusively breastfed infant becomes unusually sleepy and feeds poorly after the lactating parent starts a sedating medicine.", "Arrange prompt infant and maternal assessment, review the exact exposure and infant clearance risk, and change or interrupt therapy and feeding only through a coordinated drug-specific plan.", "Lactation decisions require simultaneous protection of maternal health, infant safety, and feeding goals rather than a blanket continue-or-stop rule."),
];

const caseDistractors = [
  [
    "Estimate risk from the medicine name alone.",
    "Assume all first-trimester exposures have identical effects.",
    "Wait until delivery before obtaining the dose history."
  ],
  [
    "Stop all prescriptions immediately while continuing supplements.",
    "Continue every product unchanged without reviewing indications.",
    "Replace chronic therapy with an herbal product before assessment."
  ],
  [
    "Attribute any later defect to the most recent medicine.",
    "Promise no birth defect if the medicine is stopped now.",
    "Use temporal association alone to establish causation."
  ],
  [
    "Diagnose nonadherence from the concentration alone.",
    "Double the dose before reviewing sampling time or physiology.",
    "Assume distribution volume is unchanged throughout pregnancy."
  ],
  [
    "Escalate solely to restore the nonpregnant total concentration.",
    "Assume a low total level proves low unbound exposure.",
    "Stop monitoring because symptoms are currently controlled."
  ],
  [
    "Keep the increased dose indefinitely without reassessment.",
    "Stop the drug immediately after delivery regardless of indication.",
    "Assume pregnancy-related clearance persists permanently."
  ],
  [
    "Guarantee no transfer above a single molecular-weight threshold.",
    "Use lipid solubility alone to declare the drug harmless.",
    "Equate high protein binding with complete placental exclusion."
  ],
  [
    "Conclude that the drug causes congenital malformations.",
    "Conclude that the drug has no fetal effects.",
    "Assume detection establishes the magnitude of clinical risk."
  ],
  [
    "Ignore exposure because organogenesis is complete.",
    "Evaluate only first-trimester structural malformations.",
    "Assume a short course near birth cannot affect the newborn."
  ],
  [
    "Treat category B as proof of safety in every trimester.",
    "Rank drugs solely by their historical letter.",
    "Assume an OTC product has a more favorable FDA pregnancy category."
  ],
  [
    "Conclude that the true risk is zero.",
    "Treat the registry as a randomized controlled trial.",
    "Ignore uncertainty because no events were recorded."
  ],
  [
    "Tell the patient that two percent of pregnancies will be affected.",
    "Interpret doubling as a two-percentage-point increase without a baseline.",
    "Report only the relative estimate and omit the comparator."
  ],
  [
    "Recommend dietary changes alone and reassess in a month.",
    "Reassure that faintness is expected and needs no evaluation.",
    "Recommend withholding all fluids to reduce vomiting."
  ],
  [
    "Choose solely from the outdated source.",
    "Assume new market approval establishes pregnancy preference.",
    "Select an acid suppressant without checking the formulation or interactions."
  ],
  [
    "Increase fiber without evaluating possible obstruction.",
    "Recommend repeated laxative doses before assessing the pain.",
    "Wait until the next routine prenatal visit despite vomiting."
  ],
  [
    "Compare it with the fasting threshold and diagnose treatment failure.",
    "Treat it as a two-hour reading despite the recorded timing.",
    "Stop glucose monitoring because one reading is within target."
  ],
  [
    "Start glyburide as the universal preferred first-line medicine.",
    "Use metformin for every patient without discussing placental transfer.",
    "Defer medication until delivery despite persistent above-target glucose."
  ],
  [
    "Cancel testing because inpatient glucose normalized.",
    "Wait five years before any repeat screening.",
    "Use only an immediate postpartum glucose value to exclude future diabetes."
  ],
  [
    "Exclude preeclampsia because proteinuria has not appeared.",
    "Wait for a routine visit before evaluating visual symptoms.",
    "Attribute severe headache to pregnancy without assessment."
  ],
  [
    "Wait until labor to start prevention.",
    "Use 325 mg daily instead of the recommended low-dose plan.",
    "Avoid aspirin solely because all NSAID use is assumed forbidden."
  ],
  [
    "Use magnesium alone and leave severe blood pressure untreated.",
    "Treat blood pressure but ignore the seizure-prevention indication.",
    "Delay both interventions until proteinuria is documented."
  ],
  [
    "Continue therapeutic LMWH until any neuraxial procedure without a timing review.",
    "Stop anticoagulation indefinitely once labor planning starts.",
    "Use one interruption interval regardless of dose or renal function."
  ],
  [
    "Omit postpartum anticoagulation because the pregnancy has ended.",
    "Restart the previous regimen immediately without assessing hemostasis.",
    "Choose therapy from pregnancy placental-transfer risk alone without lactation review."
  ],
  [
    "Declare it safe solely because relative infant dose is below ten percent.",
    "Ignore the metabolite because only the parent drug was measured.",
    "Assume timing immediately after a feed eliminates all risk."
  ],
  [
    "Apply adult renal-clearance assumptions.",
    "Treat prematurity as irrelevant when the maternal dose is standard.",
    "Use milk concentration alone without infant monitoring."
  ],
  [
    "Assume a low codeine dose eliminates infant respiratory risk.",
    "Time codeine after feeding as the only risk-reduction step.",
    "Switch to tramadol as a universally safe lactation substitute."
  ],
  [
    "Continue unchanged because all milk exposure is negligible.",
    "Wait several days to see whether feeding recovers.",
    "Attribute the change to prematurity without reviewing the new medicine."
  ]
];

export const pregnancyLactationPharmacotherapyQuestionBank = concepts.map((concept, index) => {
  const answer = index % 4;
  const choices = [...caseDistractors[index]];
  choices.splice(answer, 0, concept.caseAnswer);
  return {
    id: `pregnancy-lactation-case-${index + 1}`,
    conceptGroup: concept.name, lesson: concept.lesson,
    question: `${concept.caseStem} Which response is best?`,
    choices, answer, explanation: concept.why,
    reviewHref: `#${concept.lesson}`, difficulty: "application",
  };
}).concat([
{
  "id": "pregnancy-lactation-hyperemesis-ketones",
  "lesson": "common-symptoms",
  "question": "At ten weeks, a patient cannot retain fluids. Urine ketones are absent. What should happen next?",
  "choices": [
    "Delay care until ketones appear.",
    "Require documented electrolyte abnormalities before assessment.",
    "Assess promptly despite the negative ketone result.",
    "Repeat only a home pregnancy test."
  ],
  "answer": 2,
  "explanation": "Absent ketonuria does not exclude severe illness. Inability to retain fluids warrants assessment.",
  "reviewHref": "#common-symptoms",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-gas-combination",
  "lesson": "common-symptoms",
  "question": "A pregnant patient asks whether any antacid combination containing simethicone is suitable because simethicone is not orally absorbed. What is the best response?",
  "choices": [
    "Approve every combination on that basis.",
    "Check each ingredient, formulation, interaction and patient-specific restriction.",
    "Assume every combination has the same pregnancy evidence.",
    "Use a higher dose to compensate for poor absorption."
  ],
  "answer": 1,
  "explanation": "Simethicone acts locally, but its absorption profile does not establish the suitability of other ingredients. Antacid combinations have their own pregnancy, renal, mineral-load and interaction considerations.",
  "reviewHref": "#common-symptoms",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-dose-normalized",
  "lesson": "maternal-pharmacokinetics",
  "question": "In a fictional monitoring example, concentration rises from 6 to 12 mg/L while daily dose stays at 300 mg. How does dose-normalized concentration change?",
  "choices": [
    "It halves.",
    "It is unchanged.",
    "It doubles, requiring clinical interpretation before a dose decision.",
    "It proves the dose must immediately be halved for every patient."
  ],
  "answer": 2,
  "explanation": "6/300 = 0.020 day/L and 12/300 = 0.040 day/L. The ratio is two; sample timing and clinical context still determine the response.",
  "reviewHref": "#maternal-pharmacokinetics",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-iron-stores",
  "lesson": "common-symptoms",
  "question": "A patient treated for iron-deficiency anemia reaches hemoglobin 11.4 g/dL at 34 weeks. Under FIGO guidance, what is the appropriate next plan?",
  "choices": [
    "Stop all iron immediately because stores are necessarily normal.",
    "Continue the initial treatment dose indefinitely without reassessment.",
    "Reduce to the preventive elemental-iron dose and continue for the longer of three months or six weeks postpartum.",
    "Stop at delivery regardless of treatment duration."
  ],
  "answer": 2,
  "explanation": "Normalization of hemoglobin does not establish replenishment of iron stores; FIGO recommends a lower continued dose with a defined duration and follow-up.",
  "reviewHref": "#common-symptoms",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-inadvertent-chc",
  "lesson": "reproductive-drugs-pregnancy",
  "question": "A patient discovers pregnancy after continuing a combined oral contraceptive for several weeks and fears that fetal injury is certain. Which response fits CDC guidance?",
  "choices": [
    "All hormonal exposure proves fetal injury.",
    "No known harm from inadvertent combined contraceptive use has been established; stop the unnecessary contraceptive and review the exposure with prenatal care.",
    "Continue it as pregnancy-support progesterone.",
    "Assume every other hormone product has the same evidence."
  ],
  "answer": 1,
  "explanation": "CDC distinguishes inadvertent combined contraceptive use from known teratogenic exposures. Reassurance should remain product-specific and should not turn contraception into a pregnancy treatment.",
  "reviewHref": "#reproductive-drugs-pregnancy",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-phenobarbital-monitoring",
  "lesson": "lactation-care",
  "question": "An exclusively breastfed newborn becomes unusually sleepy and gains weight poorly while the parent takes phenobarbital with another sedating medicine. What is the best next step?",
  "choices": [
    "Reassure because a prescribed maternal dose excludes toxicity.",
    "Stop maternal antiseizure medicines abruptly.",
    "Arrange prompt infant assessment and a coordinated medication and feeding review.",
    "Only move every dose to immediately after a feed."
  ],
  "answer": 2,
  "explanation": "Sedation, feeding problems and poor growth warrant evaluation for drug exposure and other causes. Infant phenobarbital measurement may assist. A coordinated plan protects the infant while preserving maternal seizure control.",
  "reviewHref": "#lactation-care",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-imaging-agent",
  "lesson": "lactation-care",
  "question": "A breastfeeding patient is scheduled for a CT with intravenous iodinated contrast. Which instruction best fits ACR guidance?",
  "choices": [
    "Always end breastfeeding permanently.",
    "Breastfeeding can continue; routine interruption is not required.",
    "Apply the therapeutic I-131 feeding restriction.",
    "Avoid all contact with the infant for one month."
  ],
  "answer": 1,
  "explanation": "Ordinary iodinated contrast is distinct from radioactive iodine. ACR supports continued breastfeeding after intravascular contrast with informed counseling.",
  "reviewHref": "#lactation-care",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-pcp-folate",
  "lesson": "infections-pregnancy",
  "question": "A patient at nine weeks with HIV-associated PCP receives TMP-SMX. Which proposed addition needs correction?",
  "choices": [
    "Individualized toxicity monitoring",
    "Folic acid after specialist assessment",
    "Leucovorin substituted for folic acid",
    "A fetal anatomy assessment plan"
  ],
  "answer": 2,
  "explanation": "Leucovorin is not a substitute for folic acid and can compromise TMP-SMX treatment of PCP. Pregnancy alone does not justify withholding preferred active-disease treatment.",
  "reviewHref": "#infections-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-parity-twins",
  "lesson": "pregnancy-context",
  "question": "A patient is eight weeks pregnant after a previous twin delivery at 36 weeks and a separate miscarriage at nine weeks. Using the stated U.S. G/P convention, what is the history?",
  "choices": [
    "G3 P1",
    "G4 P2",
    "G3 P2",
    "G2 P1"
  ],
  "answer": 0,
  "explanation": "There are three pregnancies including the current one. Only one completed pregnancy reached at least 20 weeks; the twin delivery counts once for parity. Living children are recorded separately.",
  "reviewHref": "#pregnancy-context",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-positive-hcg-location",
  "lesson": "pregnancy-context",
  "question": "A patient with a positive pregnancy test and no pregnancy yet identified on ultrasound develops severe abdominal pain and shoulder-tip pain. What is the appropriate response?",
  "choices": [
    "Wait for the next routine hCG because the positive test proves a normal pregnancy.",
    "Arrange urgent evaluation for a potentially dangerous pregnancy complication, including ectopic pregnancy.",
    "Assume the pregnancy is nonviable from the positive test alone.",
    "Recommend an antacid and reassess in one week."
  ],
  "answer": 1,
  "explanation": "A positive hCG does not establish pregnancy location. Pregnancy of unknown location needs follow-up, and severe pain or shoulder-tip pain requires urgent evaluation rather than waiting for serial testing.",
  "reviewHref": "#pregnancy-context",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-developmental-clock",
  "lesson": "placental-transfer",
  "question": "A patient reports a brief exposure one week after estimated conception and asks whether the all-or-none concept proves there is no risk. What is the best response?",
  "choices": [
    "Guarantee safety because every early exposure follows the same rule.",
    "Assume one week after conception means one gestational week.",
    "Explain the usual early developmental pattern, verify the dating and persistence of exposure, and assess the specific drug because exceptions exist.",
    "Predict a major malformation solely from the exposure date."
  ],
  "answer": 2,
  "explanation": "Postconception and gestational weeks are different clocks. The early all-or-none pattern is useful for counseling but is not a universal guarantee; continuing or persistent exposure may extend beyond that period.",
  "reviewHref": "#placental-transfer",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-testosterone-transfer",
  "lesson": "reproductive-drugs-pregnancy",
  "question": "A pregnant patient has direct skin contact with a partner's unwashed, uncovered testosterone-gel application site. What is the appropriate immediate advice?",
  "choices": [
    "Wait for signs of fetal virilization before taking action.",
    "Wash the exposed skin promptly with soap and water, obtain exposure-specific advice, and correct the partner's transfer-prevention routine.",
    "Apply more gel to make the exposure consistent.",
    "Assume topical treatment cannot transfer or affect pregnancy."
  ],
  "answer": 1,
  "explanation": "Testosterone gel can transfer through skin contact. Prompt washing reduces further exposure; prevention requires the product's handwashing, covering and site-washing instructions. Accidental contact warrants assessment rather than a claim of inevitable fetal injury.",
  "reviewHref": "#reproductive-drugs-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-lomitapide-diarrhea",
  "lesson": "cardiometabolic-drugs-pregnancy",
  "question": "A patient taking lomitapide and an oral contraceptive reports that diarrhea resolved yesterday. Which reproductive precaution follows the lomitapide label?",
  "choices": [
    "No precaution is needed once the first normal stool occurs.",
    "Use an effective alternative contraceptive method until seven days after symptoms resolve.",
    "Stop contraception because lomitapide prevents pregnancy.",
    "Apply the selected-patient statin pregnancy exception to lomitapide."
  ],
  "answer": 1,
  "explanation": "Lomitapide can compromise oral contraceptive effectiveness when vomiting or diarrhea occurs. The label extends alternative contraception through seven days after symptom resolution; pregnancy remains contraindicated.",
  "reviewHref": "#cardiometabolic-drugs-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-unbound-phenytoin",
  "lesson": "neurologic-drugs-pregnancy",
  "question": "During pregnancy, a seizure-free patient has a low total phenytoin concentration. What should guide the next dosing decision?",
  "choices": [
    "Increase the dose until total phenytoin reaches the usual range, regardless of other findings.",
    "Stop phenytoin immediately because every exposed fetus is harmed.",
    "Assess unbound phenytoin and clinical control before adjusting the dose, and plan postpartum reassessment.",
    "Ignore all concentrations until after delivery."
  ],
  "answer": 2,
  "explanation": "Pregnancy can change phenytoin clearance and protein binding. The label directs concentration monitoring based on the unbound fraction; a low total level alone does not prove inadequate active exposure.",
  "reviewHref": "#neurologic-drugs-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-tirzepatide-escalation",
  "lesson": "cardiometabolic-drugs-pregnancy",
  "question": "A patient using an oral contraceptive completed four weeks of added barrier contraception after starting Zepbound. The dose is increased today. What does its label recommend?",
  "choices": [
    "No additional precaution because the first four weeks are complete.",
    "Use a non-oral contraceptive method or add a barrier method for four weeks after this dose increase.",
    "Stop contraception because tirzepatide prevents ovulation.",
    "Double each contraceptive pill dose for one day."
  ],
  "answer": 1,
  "explanation": "The oral-contraceptive precaution applies for four weeks after initiation and again after each dose escalation. Tirzepatide can alter absorption through delayed gastric emptying; this is not a general loss of effectiveness of non-oral methods.",
  "reviewHref": "#cardiometabolic-drugs-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-era-rems-change",
  "lesson": "cardiometabolic-drugs-pregnancy",
  "question": "A patient says that removal of the ambrisentan REMS means contraception is no longer needed. Which counseling is correct?",
  "choices": [
    "The REMS change did not remove the pregnancy contraindication; use effective contraception before and during treatment and for one month afterward.",
    "Contraception is now optional because fetal safety has been established.",
    "Only the bosentan liver-safety REMS determines whether ambrisentan can be used in pregnancy.",
    "A pregnancy test before the first dose replaces contraception for the entire course."
  ],
  "answer": 0,
  "explanation": "FDA removed the ERA pregnancy-related REMS requirements while retaining pregnancy risk information in labeling. Ambrisentan remains contraindicated in pregnancy, with product-specific testing and contraception precautions.",
  "reviewHref": "#cardiometabolic-drugs-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-lenalidomide-vasectomy",
  "lesson": "immune-hematology-pregnancy",
  "question": "A male patient taking lenalidomide had a successful vasectomy and asks whether condoms are still required with a partner who can become pregnant. Which answer matches the label?",
  "choices": [
    "Vasectomy removes every reproductive precaution.",
    "Condoms are needed only before the first dose.",
    "A latex or synthetic condom remains required during treatment, interruptions and for four weeks afterward because the drug enters semen.",
    "The partner should take lenalidomide to prevent exposure."
  ],
  "answer": 2,
  "explanation": "Vasectomy prevents sperm transport but does not remove drug from semen. The product-specific exposure precautions still apply.",
  "reviewHref": "#immune-hematology-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-ribavirin-label-interval",
  "lesson": "infections-pregnancy",
  "question": "A female patient completed the cited Aurobindo ribavirin capsules seven months ago. Their label specifies nine months of post-treatment contraception, but a generic handout says six. What is the appropriate counseling?",
  "choices": [
    "Confirm the product and specialist plan, and do not shorten the nine-month label interval based on the generic handout.",
    "All ribavirin labels have the same six-month instruction.",
    "A negative pregnancy test eliminates the remaining interval.",
    "Only male exposure requires post-treatment precautions."
  ],
  "answer": 0,
  "explanation": "The reviewed sources differ. Seven months has not completed this product label\u2019s nine-month interval; a generic summary cannot replace product-specific reproductive counseling.",
  "reviewHref": "#infections-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-misoprostol-indication",
  "lesson": "reproductive-drugs-pregnancy",
  "question": "A learner concludes that the Cytotec ulcer-prevention pregnancy warning makes every use of misoprostol for pregnancy loss inappropriate. What is the best correction?",
  "choices": [
    "The warning applies only to intravenous misoprostol.",
    "Any gastrointestinal dosing schedule is suitable for pregnancy loss.",
    "Ulcer prevention in pregnancy is inappropriate, while evidence-based reproductive regimens use misoprostol for different indications with their own assessment and dosing requirements.",
    "Misoprostol has no uterine effects."
  ],
  "answer": 2,
  "explanation": "The indication changes the intended effect and regimen. A pregnancy warning for ulcer prevention cannot be converted into a blanket rejection of evidence-based pregnancy-loss or abortion care.",
  "reviewHref": "#reproductive-drugs-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-aminoglycoside-risk",
  "lesson": "infections-pregnancy",
  "question": "A pregnant inpatient needs an aminoglycoside for a serious susceptible infection after suitable alternatives are reviewed. Which statement best supports counseling?",
  "choices": [
    "Streptomycin hearing-loss reports prove gentamicin always causes fetal deafness.",
    "Every aminoglycoside is interchangeable during pregnancy.",
    "Topical eye-drop exposure and prolonged injected treatment have identical systemic exposure.",
    "Use an agent-specific benefit-risk and monitoring plan; gentamicin has more pregnancy experience, but fetal safety is not guaranteed."
  ],
  "answer": 3,
  "explanation": "The evidence differs by drug and route. Greater pregnancy experience supports selection when treatment is needed, while renal, concentration and toxicity monitoring remain important.",
  "reviewHref": "#infections-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-fluconazole-exposure",
  "lesson": "infections-pregnancy",
  "question": "A patient reports one accidental fluconazole 150 mg dose early in pregnancy. Which response best communicates the evidence?",
  "choices": [
    "This proves the infant will have the high-dose malformation pattern.",
    "A single dose is proven to have no possible risk.",
    "Review the exposure with obstetrics; it differs from prolonged high-dose exposure, while future pregnancy vaginal-candidiasis treatment should follow the topical-azole recommendation.",
    "Repeat oral fluconazole weekly without assessment."
  ],
  "answer": 2,
  "explanation": "Dose and duration affect interpretation. Neither inevitable harm nor zero risk is supported; exposure counseling and selection of future therapy are separate decisions.",
  "reviewHref": "#infections-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-dronedarone-feeding",
  "lesson": "lactation-care",
  "question": "A patient receiving dronedarone asks when the label permits resuming breastfeeding after treatment ends. Which instruction is correct?",
  "choices": [
    "Resume immediately after the last tablet.",
    "Avoid breastfeeding during treatment and for five days after the final dose.",
    "Use the same interval for every antiarrhythmic.",
    "Timing each feed before a dose eliminates the restriction."
  ],
  "answer": 1,
  "explanation": "The MULTAQ label specifies five days after the final dose. This drug-specific instruction must not be generalized to amiodarone or replaced by feed timing.",
  "reviewHref": "#lactation-care",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-lithium-fetal-assessment",
  "lesson": "mental-health-pregnancy",
  "question": "A patient with bipolar disorder reports lithium exposure during the first trimester. Which fetal assessment matches ACOG guidance?",
  "choices": [
    "Assume a cardiac malformation is present without imaging.",
    "Arrange a detailed second-trimester ultrasound focused on cardiac anatomy; consider fetal echocardiography where available.",
    "Skip fetal assessment if the maternal lithium level was therapeutic.",
    "Use maternal thyroid testing as a substitute for fetal imaging."
  ],
  "answer": 1,
  "explanation": "Exposure calls for appropriate fetal assessment, not a diagnosis of injury. Maternal laboratory monitoring serves a different purpose and does not replace imaging.",
  "reviewHref": "#mental-health-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-benzodiazepine-withdrawal",
  "lesson": "mental-health-pregnancy",
  "question": "A patient who has taken alprazolam nightly for several months discovers pregnancy and plans to stop immediately. What is the best counseling?",
  "choices": [
    "Stop every dose tonight because withdrawal cannot affect pregnancy.",
    "Replace alprazolam with alcohol temporarily.",
    "Use the same rapid taper for every patient.",
    "Contact the treating team promptly for an individualized plan; abrupt cessation can cause dangerous withdrawal."
  ],
  "answer": 3,
  "explanation": "Pregnancy warrants a medication review, but regular benzodiazepine exposure can produce dependence. A supervised reduction balances withdrawal and relapse against ongoing exposure risks.",
  "reviewHref": "#mental-health-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-ssri-before-delivery",
  "lesson": "mental-health-pregnancy",
  "question": "A stable patient taking an effective SSRI asks to stop it before delivery only to prevent neonatal adaptation symptoms. Which plan matches ACOG guidance?",
  "choices": [
    "Routinely stop every SSRI at 36 weeks.",
    "Halve the dose without reviewing symptoms.",
    "Continue individualized treatment and arrange newborn assessment rather than a routine pre-delivery taper for this reason.",
    "Guarantee that the newborn cannot have medication-related symptoms."
  ],
  "answer": 2,
  "explanation": "Routine reduction solely to prevent neonatal adaptation is not recommended. Review maternal stability and the newborn observation plan with the treating team.",
  "reviewHref": "#mental-health-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-dutasteride-handling",
  "lesson": "skin-drug-exposure",
  "question": "A pregnant household member gets liquid from a leaking dutasteride capsule on their hand. What is the appropriate immediate response?",
  "choices": [
    "Wait for symptoms before washing.",
    "Wash immediately with soap and water and obtain exposure-specific advice.",
    "Apply another capsule to dilute the exposure.",
    "Assume brief skin contact cannot lead to exposure."
  ],
  "answer": 1,
  "explanation": "Dutasteride can be absorbed through skin. Labeling calls for immediate washing after contact with a leaking capsule; pregnant or potentially pregnant people should not handle these capsules.",
  "reviewHref": "#skin-drug-exposure",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-leflunomide-clearance",
  "lesson": "immune-hematology-pregnancy",
  "question": "After leflunomide elimination, teriflunomide measures 0.015 mg/L and 0.018 mg/L seven days apart. Has the labeled verification requirement been met?",
  "choices": [
    "No; the two tests must be at least 14 days apart.",
    "Yes; both concentrations are below the threshold.",
    "Yes; eleven treatment days always prove clearance.",
    "No; every patient must wait two years regardless of testing."
  ],
  "answer": 0,
  "explanation": "Both values are below 0.02 mg/L, but the sampling interval is too short. Arrange verification using the labeled interval and continue the pregnancy-prevention plan.",
  "reviewHref": "#immune-hematology-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-methotrexate-exposure-role",
  "lesson": "immune-hematology-pregnancy",
  "question": "A couple planning pregnancy asks whether the same methotrexate rule applies to the person carrying the pregnancy and the male partner. Which response best reconciles the cited sources?",
  "choices": [
    "EULAR permits maternal methotrexate throughout pregnancy.",
    "Paternal low-dose guidance proves maternal exposure is safe.",
    "Both sources use identical post-treatment contraception intervals.",
    "Separate exposure roles: maternal treatment must stop before conception; EULAR permits selected paternal low-dose use while U.S. labeling specifies contraception precautions."
  ],
  "answer": 3,
  "explanation": "Maternal and paternal exposure are different clinical questions. EULAR and U.S. labeling differ, so document the applicable source and specialist plan instead of treating the recommendations as interchangeable.",
  "reviewHref": "#immune-hematology-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-lisinopril-exposure",
  "lesson": "hypertension-preeclampsia",
  "question": "A patient taking lisinopril discovers pregnancy. Which plan best follows its fetal-toxicity labeling?",
  "choices": [
    "Wait until the third trimester to change treatment.",
    "Arrange prompt discontinuation and clinician-directed replacement while maintaining blood-pressure care.",
    "Continue until ultrasound shows reduced amniotic fluid.",
    "Assume early exposure guarantees fetal injury."
  ],
  "answer": 1,
  "explanation": "The label calls for stopping lisinopril promptly when pregnancy is identified. Treatment of maternal hypertension still matters; neither waiting for a scan abnormality nor declaring inevitable injury is appropriate.",
  "reviewHref": "#hypertension-preeclampsia",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-valproate-seizure-control",
  "lesson": "neurologic-drugs-pregnancy",
  "question": "A patient with epilepsy controlled by valproate discovers pregnancy. What is the best immediate counseling?",
  "choices": [
    "Stop all doses without contacting the treating team.",
    "Continue indefinitely without reviewing fetal risk.",
    "Arrange prompt specialist review; avoid abrupt withdrawal that may provoke dangerous seizures.",
    "Replace it with oxcarbazepine at the same milligram dose."
  ],
  "answer": 2,
  "explanation": "Valproate has substantial fetal risks, but abrupt withdrawal in epilepsy can precipitate status epilepticus. A specialist must balance alternatives with seizure control.",
  "reviewHref": "#neurologic-drugs-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-valproate-indication",
  "lesson": "neurologic-drugs-pregnancy",
  "question": "Which statement reflects valproate pregnancy labeling?",
  "choices": [
    "Migraine prevention and refractory epilepsy have identical exceptions.",
    "Migraine prevention is contraindicated; epilepsy use requires a stringent benefit-risk assessment when alternatives fail or are unacceptable.",
    "Folic acid eliminates all valproate fetal risk.",
    "A low dose is proven risk-free."
  ],
  "answer": 1,
  "explanation": "The indication changes the treatment decision. Valproate is contraindicated for migraine prevention in pregnancy, and no risk-free dose is established.",
  "reviewHref": "#neurologic-drugs-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-isotretinoin-pregnancy",
  "lesson": "skin-drug-exposure",
  "question": "Pregnancy is confirmed during oral isotretinoin treatment. What is the immediate medication action?",
  "choices": [
    "Continue until the next routine visit.",
    "Reduce the dose by half.",
    "Stop isotretinoin and arrange specialist evaluation and counseling.",
    "Switch to another oral retinoid."
  ],
  "answer": 2,
  "explanation": "Oral isotretinoin is contraindicated in pregnancy; labeling calls for immediate discontinuation and reproductive-toxicity evaluation.",
  "reviewHref": "#skin-drug-exposure",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-topical-retinoid-exposure",
  "lesson": "skin-drug-exposure",
  "question": "A patient used topical tretinoin on a small intact facial area before recognizing pregnancy. Best counseling?",
  "choices": [
    "The risk is proven identical to oral isotretinoin.",
    "Stop further use and review the exposure; lower absorption and reassuring studies do not establish zero risk.",
    "Continue because no topical drug can be absorbed.",
    "A birth defect is inevitable."
  ],
  "answer": 1,
  "explanation": "Topical tretinoin is avoided in pregnancy, but its exposure and evidence differ from oral isotretinoin. Assess the product, amount, skin integrity and timing.",
  "reviewHref": "#skin-drug-exposure",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-anemia-threshold",
  "lesson": "common-symptoms",
  "question": "At 22 weeks, hemoglobin is 10.7 g/dL before any applicable adjustment. Which interpretation is accurate?",
  "choices": [
    "Below both WHO 2024 and FIGO 2025 second-trimester anemia cutoffs.",
    "Meets FIGO anemia criteria but is above the WHO second-trimester cutoff; investigate iron status separately.",
    "Proves iron deficiency regardless of ferritin or history.",
    "Excludes all causes of anemia and any need for follow-up."
  ],
  "answer": 1,
  "explanation": "10.7 is below 11 but above 10.5 g/dL. The organizations use different second-trimester cutoffs; hemoglobin classification alone does not identify the cause.",
  "reviewHref": "#common-symptoms",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-iron-dose-units",
  "lesson": "common-symptoms",
  "question": "A prescribed regimen specifies 65 mg elemental iron. The selected tablet label states ferrous sulfate 325 mg, equivalent to 65 mg elemental iron. How many tablets supply the prescribed amount?",
  "choices": [
    "One tablet",
    "Five tablets",
    "One-fifth tablet",
    "325 tablets"
  ],
  "answer": 0,
  "explanation": "Use elemental content: 65 mg divided by 65 mg per tablet equals one tablet. Salt mass is not elemental iron. Verify the actual product and prescribed regimen.",
  "reviewHref": "#common-symptoms",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-asthma-controller",
  "lesson": "common-symptoms",
  "question": "A patient with controlled asthma discovers pregnancy and wants to stop the prescribed ICS-containing inhaler. Best response?",
  "choices": [
    "Stop the controller and use albuterol alone.",
    "Continue effective control and arrange pregnancy follow-up every 4 to 6 weeks.",
    "Wait until an emergency before reassessment.",
    "Replace the inhaler with an oral decongestant."
  ],
  "answer": 1,
  "explanation": "Pregnancy does not justify removing ICS protection. GINA recommends closer follow-up because uncontrolled asthma and attacks threaten maternal and fetal health.",
  "reviewHref": "#common-symptoms",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-allergy-sedation",
  "lesson": "common-symptoms",
  "question": "An oral antihistamine is needed for allergic rhinitis during pregnancy. Which statement matches NHS SPS guidance?",
  "choices": [
    "A sedating first-generation drug is required in every pregnancy.",
    "Loratadine or cetirizine is generally preferred; review individual risks and response.",
    "All second-generation agents are contraindicated throughout pregnancy.",
    "Add pseudoephedrine routinely to every antihistamine."
  ],
  "answer": 1,
  "explanation": "NHS SPS favors less-sedating options when oral treatment is needed; sedation and anticholinergic burden remain relevant.",
  "reviewHref": "#common-symptoms",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-allergy-decongestant",
  "lesson": "common-symptoms",
  "question": "A patient at eight weeks of pregnancy selects loratadine plus pseudoephedrine. What requires correction?",
  "choices": [
    "Loratadine always requires a decongestant.",
    "The combination must be continued until the second trimester.",
    "Pseudoephedrine should be avoided during the first three months under ACOG advice; select treatment without it.",
    "The combination is acceptable if taken only at bedtime."
  ],
  "answer": 2,
  "explanation": "Evaluate each active ingredient. The antihistamine and added decongestant do not share the same pregnancy recommendation.",
  "reviewHref": "#common-symptoms",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-antacid-prenatal-spacing",
  "lesson": "common-symptoms",
  "question": "A pregnant patient takes an iron/folic-acid supplement with an antacid every evening. Which counseling addresses absorption?",
  "choices": [
    "Take them together to improve iron absorption.",
    "Separate the antacid and supplements by at least two hours, and review other medicine-specific intervals.",
    "Stop the prenatal supplement whenever reflux occurs.",
    "Double the iron dose to compensate without assessment."
  ],
  "answer": 1,
  "explanation": "NHS pregnancy guidance advises at least two hours between antacids and iron or folic acid. Check other products separately rather than applying this interval to every interaction.",
  "reviewHref": "#common-symptoms",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-constipation-next-step",
  "lesson": "common-symptoms",
  "question": "A pregnant patient has persistent hard stools despite diet, adequate fluids and a tolerated bulk-forming laxative. There are no alarm symptoms. Which option is reasonable to discuss?",
  "choices": [
    "Escalate fiber indefinitely without assessing response.",
    "Stop prescribed iron permanently without reviewing its indication.",
    "Consider an osmotic laxative such as polyethylene glycol or lactulose with product-specific directions.",
    "Treat all osmotic laxatives as contraindicated in pregnancy."
  ],
  "answer": 2,
  "explanation": "UKTIS describes osmotic agents as usual next options after bulk-forming treatment. Reassess symptoms, contributing medicines and the selected formulation.",
  "reviewHref": "#common-symptoms",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-covid-pregnancy-guidance",
  "lesson": "vaccination-pregnancy",
  "question": "A pregnant 29-year-old reads a CDC pregnancy page describing the 2025-2026 COVID-19 season. Which statement correctly reconciles it with CDC clinical guidance dated September 23, 2026?",
  "choices": [
    "Pregnancy is a contraindication for all COVID-19 vaccines.",
    "Only postpartum vaccination is permitted.",
    "The newer 2026-2027 guidance recommends vaccination for all adults; assess the current product and patient factors.",
    "Vaccination requires stopping breastfeeding after delivery."
  ],
  "answer": 2,
  "explanation": "The sources refer to different seasons. CDC's September 23 clinical page recommends the 2026-2027 vaccine for adults aged 18 years or older. The older individual-decision wording was not a pregnancy contraindication either. Check product eligibility, prior doses and immune status.",
  "reviewHref": "#vaccination-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-rabies-pregnancy",
  "lesson": "vaccination-pregnancy",
  "question": "Public health determines rabies post-exposure prophylaxis is indicated at 12 weeks of pregnancy. What is the appropriate response?",
  "choices": [
    "Delay prophylaxis until the second trimester.",
    "Proceed with wound care and the indicated regimen based on prior vaccination and immune status.",
    "Use wound care alone because vaccine is contraindicated.",
    "Give immune globulin alone regardless of vaccination history."
  ],
  "answer": 1,
  "explanation": "Pregnancy is not a contraindication to rabies PEP. The regimen depends on prior vaccination and immune status; do not defer needed prophylaxis for pregnancy.",
  "reviewHref": "#vaccination-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-tdap-earlier",
  "lesson": "vaccination-pregnancy",
  "question": "Tdap was appropriately given for wound care at 18 weeks. At 28 weeks of the same pregnancy, what is recommended?",
  "choices": [
    "Repeat Tdap because the first dose preceded week 27.",
    "Do not repeat Tdap in this pregnancy.",
    "Repeat only if the prior dose was Adacel.",
    "Repeat at delivery instead of week 28."
  ],
  "answer": 1,
  "explanation": "CDC recommends one Tdap dose per pregnancy; an indicated earlier dose is not repeated in the routine 27 to 36 week window.",
  "reviewHref": "#vaccination-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-rsv-birth-interval",
  "lesson": "vaccination-pregnancy",
  "question": "An infant is born in November in a continental U.S. location using the usual October-through-March RSV schedule, eight days after maternal Abrysvo vaccination. Which plan follows CDC infant RSV guidance?",
  "choices": [
    "Omit infant antibody because any maternal dose is sufficient.",
    "Give Abrysvo directly to the newborn.",
    "Coordinate nirsevimab or clesrovimab during the birth hospitalization.",
    "Defer all RSV protection until the second season."
  ],
  "answer": 2,
  "explanation": "Eight days is less than the 14-day maternal vaccination-to-birth interval needed to rely on maternal protection. An eligible newborn should receive an infant antibody, ideally within the first week during the season.",
  "reviewHref": "#vaccination-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-rsv-repeat",
  "lesson": "vaccination-pregnancy",
  "question": "A patient received Abrysvo in a prior pregnancy. Current CDC approach?",
  "choices": [
    "Repeat at every pregnancy.",
    "Use Arexvy instead.",
    "Arrange infant protection rather than repeat maternal RSV vaccination.",
    "Assume the prior dose protects every future infant."
  ],
  "answer": 2,
  "explanation": "Maternal RSV repeat dosing is not currently recommended.",
  "reviewHref": "#vaccination-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-yellow-fever",
  "lesson": "vaccination-pregnancy",
  "question": "Unavoidable yellow-fever exposure is anticipated during pregnancy. Best approach?",
  "choices": [
    "Apply an absolute ban on every live vaccine.",
    "Compare infection and vaccine risks with a travel specialist.",
    "Vaccinate without assessment.",
    "Use maternal RSV vaccine instead."
  ],
  "answer": 1,
  "explanation": "Pregnancy is a precaution for yellow-fever vaccine, permitting a risk-based exception.",
  "reviewHref": "#vaccination-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-tdap-timing",
  "lesson": "vaccination-pregnancy",
  "question": "A patient received Tdap before conception and is now 28 weeks pregnant. Routine CDC recommendation?",
  "choices": [
    "No dose until ten years pass.",
    "Tdap during this pregnancy.",
    "Use live nasal influenza vaccine instead.",
    "Wait until breastfeeding ends."
  ],
  "answer": 1,
  "explanation": "Tdap is recommended each pregnancy, preferably early in weeks 27 to 36.",
  "reviewHref": "#vaccination-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-folate-recurrence",
  "lesson": "pregnancy-context",
  "question": "After an NTD-affected pregnancy, a patient plans conception. Which CDC recurrence-prevention regimen should be coordinated with the clinician?",
  "choices": [
    "400 mcg DFE daily starting after the first trimester.",
    "4,000 mcg folic acid daily starting one month before conception through the first three months.",
    "4,000 mg folic acid daily.",
    "600 mcg DFE daily only after a positive test."
  ],
  "answer": 1,
  "explanation": "CDC specifies 4,000 mcg, or 4 mg, for recurrence prevention; this differs from routine folate intake and requires preconception planning.",
  "reviewHref": "#pregnancy-context",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-rmsf-treatment",
  "lesson": "infections-pregnancy",
  "question": "RMSF is strongly suspected during pregnancy. Which plan follows CDC guidance?",
  "choices": [
    "Delay treatment until convalescent serology.",
    "Start prompt doxycycline with benefit-risk counseling.",
    "Substitute a routine beta-lactam solely because of pregnancy.",
    "Treat only after the rash becomes characteristic."
  ],
  "answer": 1,
  "explanation": "CDC recommends presumptive doxycycline in pregnancy; treatment delay and inferior substitutes can cause harm.",
  "reviewHref": "#infections-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-progesterone-art",
  "lesson": "reproductive-drugs-pregnancy",
  "question": "After embryo transfer, a patient considers stopping prescribed vaginal progesterone because a general list labels hormones dangerous in pregnancy. Best response?",
  "choices": [
    "Stop all hormone products immediately.",
    "Maintain the prescribed plan while clarifying concerns with the fertility team; progesterone has specific ART uses.",
    "Replace it with any oral progestogen at the same milligram dose.",
    "Use the miscarriage regimen instead."
  ],
  "answer": 1,
  "explanation": "Product and indication determine progesterone use; a blanket hormone warning should not override prescribed ART support.",
  "reviewHref": "#reproductive-drugs-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-progesterone-nice",
  "lesson": "reproductive-drugs-pregnancy",
  "question": "Which presentation matches NICE NG126 progesterone eligibility?",
  "choices": [
    "Positive pregnancy test alone.",
    "Previous miscarriage without current bleeding.",
    "Bleeding, previous miscarriage, and scan-confirmed intrauterine pregnancy.",
    "Suspected ectopic pregnancy without ultrasound assessment."
  ],
  "answer": 2,
  "explanation": "The NICE recommendation requires this defined combination; it is not universal pregnancy supplementation.",
  "reviewHref": "#reproductive-drugs-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-statin-exposure",
  "lesson": "cardiometabolic-drugs-pregnancy",
  "question": "A patient discovers pregnancy after early atorvastatin exposure. Best counseling?",
  "choices": [
    "Fetal harm is certain.",
    "Every statin is now routinely recommended.",
    "Reassure without guaranteeing safety and review the treatment plan promptly.",
    "Exposure history is irrelevant."
  ],
  "answer": 2,
  "explanation": "FDA considers unintended early exposure unlikely to harm the fetus; most pregnant patients still discontinue statins.",
  "reviewHref": "#cardiometabolic-drugs-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-statin-exception",
  "lesson": "cardiometabolic-drugs-pregnancy",
  "question": "A pregnant patient with homozygous familial hypercholesterolemia asks whether statins are absolutely forbidden. Best response?",
  "choices": [
    "Specialist review may support an exception.",
    "All lipid medicines are interchangeable.",
    "Continue every prior dose automatically.",
    "The contraindication remains absolute."
  ],
  "answer": 0,
  "explanation": "FDA removed the blanket contraindication to permit individualized decisions in very-high-risk patients.",
  "reviewHref": "#cardiometabolic-drugs-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-magnesium-pump",
  "lesson": "hypertension-preeclampsia",
  "question": "An order specifies magnesium 1 g/hour from 20 g/500 mL. Pump rate?",
  "choices": [
    "2.5 mL/hour",
    "25 mL/hour",
    "50 mL/hour",
    "250 mL/hour"
  ],
  "answer": 1,
  "explanation": "20/500 = 0.04 g/mL; 1/0.04 = 25 mL/hour.",
  "reviewHref": "#hypertension-preeclampsia",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-magnesium-toxicity",
  "lesson": "hypertension-preeclampsia",
  "question": "During magnesium infusion, reflexes disappear and breathing slows. Best response?",
  "choices": [
    "Continue pending labs.",
    "Increase infusion.",
    "Stop infusion and activate urgent respiratory/toxicity treatment.",
    "Give another bolus."
  ],
  "answer": 2,
  "explanation": "Stop magnesium and activate emergency respiratory support and antidote treatment without waiting for a level. The AHRQ example uses calcium gluconate 1 g IV over five minutes for respiratory depression; verify the institutional protocol. Calcium does not replace necessary ventilation.",
  "reviewHref": "#hypertension-preeclampsia",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-magnesium-contraindication",
  "lesson": "hypertension-preeclampsia",
  "question": "Which history specifically contraindicates the cited magnesium product?",
  "choices": [
    "Prior cesarean",
    "Myasthenia gravis",
    "Gestational diabetes alone",
    "Prior uncomplicated delivery"
  ],
  "answer": 1,
  "explanation": "Magnesium can precipitate myasthenic crisis.",
  "reviewHref": "#hypertension-preeclampsia",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-aspirin-guidelines",
  "lesson": "hypertension-preeclampsia",
  "question": "A patient with preexisting diabetes is prescribed 162 mg aspirin under an obstetric protocol but read an 81 mg recommendation. Best response?",
  "choices": [
    "Automatically reduce to 81 mg.",
    "Confirm the protocol: ADA and ACOG recommendations differ.",
    "Stop aspirin until delivery.",
    "Assume a dispensing error."
  ],
  "answer": 1,
  "explanation": "ADA 2026 allows 162 mg for preexisting diabetes; ACOG/SMFM specifies 81 mg. Clarify the intended regimen.",
  "reviewHref": "#hypertension-preeclampsia",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-severe-pressure",
  "lesson": "hypertension-preeclampsia",
  "question": "Postpartum BP is 168/104 and remains severe on prompt repeat measurement. Best response?",
  "choices": [
    "Wait four hours.",
    "Treat only if diastolic pressure reaches 110.",
    "Activate urgent antihypertensive treatment.",
    "Give aspirin instead."
  ],
  "answer": 2,
  "explanation": "Either systolic or diastolic severe-range pressure qualifies; postpartum severe hypertension needs urgent treatment.",
  "reviewHref": "#hypertension-preeclampsia",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-chronic-pressure",
  "lesson": "hypertension-preeclampsia",
  "question": "A pregnant patient with chronic hypertension has persistent 146/94. Which ACOG CHAP-based approach applies?",
  "choices": [
    "Wait until 160/110.",
    "Evaluate initiation or titration now.",
    "Treat 140/90 as the required exact achieved pressure.",
    "Use magnesium as maintenance therapy."
  ],
  "answer": 1,
  "explanation": "For chronic hypertension, ACOG uses 140/90 mm Hg as the threshold for initiating or titrating treatment. Persistent 146/94 meets that threshold. It is neither a required exact achieved pressure nor the separate severe-hypertension emergency threshold.",
  "reviewHref": "#hypertension-preeclampsia",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-postpartum-a1c",
  "lesson": "diabetes-pregnancy",
  "question": "Six weeks after GDM, a normal A1C is offered instead of the planned OGTT. Best response?",
  "choices": [
    "Accept A1C alone.",
    "Keep the OGTT; recent red-cell changes can lower A1C.",
    "Delay testing five years.",
    "Use pregnancy diagnostic thresholds."
  ],
  "answer": 1,
  "explanation": "ADA recommends a 75 g OGTT at 4 to 12 weeks postpartum using nonpregnancy criteria. Pregnancy-related red-cell turnover and delivery blood loss can lower A1C, so a normal A1C does not replace that test.",
  "reviewHref": "#diabetes-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-dka-recognition",
  "lesson": "diabetes-pregnancy",
  "question": "A pregnant patient with type 1 diabetes has vomiting, abdominal pain, ketones, and glucose 185 mg/dL. Best action?",
  "choices": [
    "Exclude DKA below 250.",
    "Wait for routine follow-up.",
    "Arrange urgent DKA assessment.",
    "Stop insulin."
  ],
  "answer": 2,
  "explanation": "Pregnancy DKA can occur at lower glucose levels. Vomiting, abdominal pain and ketones in a patient with type 1 diabetes require urgent assessment of acid-base status and other findings; glucose 185 mg/dL does not exclude DKA.",
  "reviewHref": "#diabetes-pregnancy",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-doac-evidence",
  "lesson": "vte-anticoagulation",
  "question": "A breastfeeding patient with VTE asks why the 2018 ASH guideline and a 2026 LactMed rivaroxaban entry differ. Which explanation best supports a treatment discussion?",
  "choices": [
    "The older guideline has been formally replaced by a recommendation for all DOACs.",
    "Low milk transfer proves rivaroxaban has no infant risk.",
    "Newer drug-specific exposure evidence informs individualized selection, while the older guideline advises against the class.",
    "Anticoagulation should be withheld until all sources agree."
  ],
  "answer": 2,
  "explanation": "ASH 2018 and current LactMed reflect different dates and evidence. Low rivaroxaban milk exposure supports a drug-specific discussion; it does not establish universal safety or justify interrupting necessary therapy.",
  "reviewHref": "#vte-anticoagulation",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-apixaban-transfer",
  "lesson": "vte-anticoagulation",
  "question": "A clinician considers apixaban for a parent nursing a premature newborn because rivaroxaban has low reported milk transfer. What is the strongest response?",
  "choices": [
    "Review an alternative: apixaban has higher milk transfer, and rivaroxaban findings cannot be applied across the class.",
    "Use apixaban because all factor Xa inhibitors have identical milk concentrations.",
    "Continue apixaban because no published infant outcomes proves absence of risk.",
    "Use a single maternal trough concentration to establish infant safety."
  ],
  "answer": 0,
  "explanation": "LactMed prefers an alternative to apixaban, especially for newborn or premature infants. Milk measurements and modeling suggest concern, while actual infant outcome evidence is lacking.",
  "reviewHref": "#vte-anticoagulation",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-vte-anti-xa",
  "lesson": "vte-anticoagulation",
  "question": "A pregnant patient receives therapeutic LMWH for VTE, with stable renal function and no extreme body weight. Is routine anti-Xa-guided adjustment required for every such patient?",
  "choices": [
    "Yes, pregnancy alone always requires it.",
    "No; ASH conditionally recommends against routine monitoring in this setting.",
    "No monitoring of any kind is needed.",
    "The recommendation also eliminates mechanical-valve monitoring."
  ],
  "answer": 1,
  "explanation": "The ASH recommendation concerns routine anti-Xa monitoring for VTE treatment, with low-certainty evidence and defined scope.",
  "reviewHref": "#vte-anticoagulation",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-mechanical-valve-monitoring",
  "lesson": "vte-anticoagulation",
  "question": "A pregnant patient receives LMWH for a mechanical valve. Can the routine-VTE anti-Xa recommendation be used to omit monitoring?",
  "choices": [
    "Yes, all LMWH indications have identical targets.",
    "Yes, if one dose was tolerated.",
    "No; valve anticoagulation requires its own dose-adjustment and monitoring plan.",
    "Switch to a DOAC to avoid monitoring."
  ],
  "answer": 2,
  "explanation": "Mechanical-valve thrombosis prevention is a distinct indication with specialized monitoring.",
  "reviewHref": "#vte-anticoagulation",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-mechanical-valve-warfarin",
  "lesson": "vte-anticoagulation",
  "question": "A pregnant patient with a mechanical valve is taking warfarin under specialist care. What is the appropriate response to fetal-risk concerns?",
  "choices": [
    "Stop it immediately without replacement.",
    "Replace it with aspirin alone.",
    "Guarantee fetal safety at every dose.",
    "Urgently review the maternal/fetal tradeoff with the valve-obstetric team and coordinate any transition."
  ],
  "answer": 3,
  "explanation": "Warfarin may be used in selected mechanical-valve regimens; fetal risk and maternal thrombosis risk both require consideration.",
  "reviewHref": "#vte-anticoagulation",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-nutrition-iron-volume",
  "lesson": "feeding-nutrition",
  "question": "A pediatric plan prescribes elemental iron 1 mg/kg/day for a 7.5 kg infant. The label states 15 mg elemental iron/mL. What daily volume supplies the dose?",
  "choices": [
    "0.05 mL",
    "0.5 mL",
    "5 mL",
    "7.5 mL"
  ],
  "answer": 1,
  "explanation": "7.5 kg times 1 mg/kg/day = 7.5 mg/day; divided by 15 mg/mL = 0.5 mL/day. Confirm elemental content and use the appropriate measuring device.",
  "reviewHref": "#feeding-nutrition",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-nutrition-vitamin-d",
  "lesson": "feeding-nutrition",
  "question": "A family changes from vitamin D 400 IU/mL to 400 IU/drop. What should be taught?",
  "choices": [
    "Continue 1 mL automatically.",
    "Give 400 drops.",
    "Use one drop for 400 IU and follow the new product instructions.",
    "The concentration change does not affect measurement."
  ],
  "answer": 2,
  "explanation": "The amount per drop differs from the amount per mL. Recheck the dose and device.",
  "reviewHref": "#feeding-nutrition",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-nutrition-iron-duration",
  "lesson": "feeding-nutrition",
  "question": "A healthy term breastfed six-month-old takes recommended iron but eats only tiny amounts of iron-poor solids. What is the best plan?",
  "choices": [
    "Stop solely because the infant is six months old.",
    "Reassess intake with the pediatric team and continue supplementation until dietary iron is adequate.",
    "Give an adult iron tablet.",
    "Replace all feeds with water."
  ],
  "answer": 1,
  "explanation": "The stopping decision depends on adequate iron-containing complementary intake, not age alone.",
  "reviewHref": "#feeding-nutrition",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-nutrition-maternal-energy",
  "lesson": "feeding-nutrition",
  "question": "A well-nourished breastfeeding parent asks whether everyone must add 500 kcal/day. What matches current CDC guidance?",
  "choices": [
    "Use a fixed 500 kcal for everyone.",
    "Avoid all added calories regardless of feeding.",
    "Add calories only if all supplements are stopped.",
    "Start from about 330 to 400 kcal above pre-pregnancy intake and individualize."
  ],
  "answer": 3,
  "explanation": "Energy needs vary with body size, activity and feeding pattern.",
  "reviewHref": "#feeding-nutrition",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-metronidazole-lactation",
  "lesson": "lactation-care",
  "question": "A parent is told that every metronidazole regimen requires discarding milk for 24 hours. Which response is most accurate?",
  "choices": [
    "Apply that rule to all routes and doses.",
    "Check the regimen and product: some interruption advice concerns a single 2 g dose, not all lower-dose courses.",
    "Guarantee that all vaginal products have identical instructions.",
    "Replace infection treatment with milk disposal."
  ],
  "answer": 1,
  "explanation": "Lactation guidance varies with regimen, formulation and clinical context.",
  "reviewHref": "#lactation-care",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-lithium-lactation",
  "lesson": "lactation-care",
  "question": "A parent taking lithium asks about breastfeeding a healthy full-term three-month-old. What is the appropriate framework?",
  "choices": [
    "Guarantee safety without infant follow-up.",
    "Stop lithium abruptly to avoid discussion.",
    "Consider a specialist-supervised plan with infant monitoring rather than a blanket verdict.",
    "Use dose timing alone to prevent toxicity."
  ],
  "answer": 2,
  "explanation": "Selected full-term infants may breastfeed during maternal lithium therapy, but variability and toxicity require coordinated assessment.",
  "reviewHref": "#lactation-care",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-lithium-dehydration",
  "lesson": "lactation-care",
  "question": "A breastfed infant exposed to maternal lithium develops poor feeding and dehydration. What is the priority?",
  "choices": [
    "Wait until the next routine visit.",
    "Assume unchanged maternal dosing excludes toxicity.",
    "Add maternal lithium to restore milk supply.",
    "Arrange urgent infant assessment and review exposure, hydration and renal clearance."
  ],
  "answer": 3,
  "explanation": "Reduced elimination can increase lithium toxicity risk; a previously stable feeding plan needs immediate reassessment.",
  "reviewHref": "#lactation-care",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-rid-calculation",
  "lesson": "lactation-exposure",
  "question": "A fictional medicine averages 1 mg/L in milk. Assume milk intake 0.15 L/kg/day and a parent taking 200 mg/day at 50 kg. What is the RID?",
  "choices": [
    "0.0375 percent",
    "3.75 percent",
    "15 percent",
    "37.5 percent"
  ],
  "answer": 1,
  "explanation": "Infant dose=0.15 mg/kg/day; maternal dose=4 mg/kg/day;0.15/4 times100=3.75 percent.",
  "reviewHref": "#lactation-exposure",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-rid-mixed-feeding",
  "lesson": "lactation-exposure",
  "question": "An estimated RID is 6 percent at 150 mL/kg/day of breast milk. If actual breast-milk intake is 75 mL/kg/day and concentration is unchanged, what is the estimated RID?",
  "choices": [
    "3 percent",
    "6 percent",
    "12 percent",
    "75 percent"
  ],
  "answer": 0,
  "explanation": "Halving milk intake halves ingested drug dose. This does not by itself establish clinical safety.",
  "reviewHref": "#lactation-exposure",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-rid-meaning",
  "lesson": "lactation-exposure",
  "question": "Does a calculated RID of 6 percent mean the infant has a 6 percent chance of an adverse effect?",
  "choices": [
    "Yes, RID measures event probability.",
    "Yes, if the infant is full term.",
    "No; it compares weight-adjusted ingested doses, not event probabilities.",
    "No; it instead measures infant blood concentration."
  ],
  "answer": 2,
  "explanation": "RID is an exposure estimate. Toxicity requires drug-specific and infant-specific assessment.",
  "reviewHref": "#lactation-exposure",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-thyroid-minerals",
  "lesson": "thyroid-pregnancy",
  "question": "A patient takes levothyroxine together with a prenatal vitamin containing iron and calcium. What administration change is appropriate?",
  "choices": [
    "Stop replacement throughout pregnancy.",
    "Separate these products by at least four hours.",
    "Crush both products together.",
    "Add an extra tablet after every prenatal dose."
  ],
  "answer": 1,
  "explanation": "Minerals can reduce levothyroxine absorption; protect dose separation and reassess thyroid tests.",
  "reviewHref": "#thyroid-pregnancy",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-thyroid-weekly-dose",
  "lesson": "thyroid-pregnancy",
  "question": "A clinician changes 75 mcg levothyroxine daily to nine 75 mcg doses weekly. What is the new average daily dose?",
  "choices": [
    "75 mcg",
    "96.4 mcg",
    "150 mcg",
    "675 mcg"
  ],
  "answer": 1,
  "explanation": "Nine times 75 =675 mcg/week; 675/7 =96.4 mcg/day. Average dose is not tablet strength.",
  "reviewHref": "#thyroid-pregnancy",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-thyroid-subclinical",
  "lesson": "thyroid-pregnancy",
  "question": "A patient treated before conception for subclinical hypothyroidism asks whether every positive pregnancy test requires a 25 percent dose increase. What does ATA 2026 support?",
  "choices": [
    "An automatic increase for all treated patients.",
    "Stopping treatment without testing.",
    "Individual adjustment and thyroid testing rather than a universal increase.",
    "A fixed 50 percent increase instead."
  ],
  "answer": 2,
  "explanation": "The guideline distinguishes subclinical disease from established overt hypothyroidism.",
  "reviewHref": "#thyroid-pregnancy",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-thyroid-later-atd",
  "lesson": "thyroid-pregnancy",
  "question": "At 18 weeks, Graves disease still requires an antithyroid drug. What principle matches ATA 2026?",
  "choices": [
    "PTU must always be stopped on a fixed day.",
    "Methimazole is prohibited throughout pregnancy.",
    "Radioiodine replaces drug treatment.",
    "Choose individually; no preferred agent is established after 16 weeks."
  ],
  "answer": 3,
  "explanation": "Balance adverse effects, disease control and switching risk with close laboratory follow-up.",
  "reviewHref": "#thyroid-pregnancy",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-empiric-ampicillin",
  "lesson": "infections-pregnancy",
  "question": "Before culture results, a pregnant patient with cystitis is offered ampicillin solely because penicillins have a familiar pregnancy record. What is missing?",
  "choices": [
    "Local resistance and likely activity against E. coli.",
    "The assumption that all penicillins cause fetal harm.",
    "A requirement to leave every cystitis untreated.",
    "A reason to avoid obtaining culture."
  ],
  "answer": 0,
  "explanation": "Pregnancy compatibility and antibacterial susceptibility are separate questions; avoid routine empiric ampicillin.",
  "reviewHref": "#infections-pregnancy",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-nitrofurantoin-term",
  "lesson": "infections-pregnancy",
  "question": "At 39 weeks, a patient presents a new Macrobid prescription. What product-specific issue requires resolution?",
  "choices": [
    "The label requires doubling the dose at term.",
    "The label contraindicates use at term and during or near labor.",
    "Nitrofurantoin is contraindicated throughout all pregnancy.",
    "Taking it with food removes neonatal hemolysis risk."
  ],
  "answer": 1,
  "explanation": "The term restriction reflects neonatal hemolysis risk and applies even if lower-tract susceptibility is favorable.",
  "reviewHref": "#infections-pregnancy",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-vvc-course",
  "lesson": "infections-pregnancy",
  "question": "A pregnant patient with confirmed VVC asks for a one-dose oral fluconazole regimen. Which alternative follows CDC guidance?",
  "choices": [
    "One-day topical therapy regardless of strength.",
    "Monthly oral fluconazole prophylaxis.",
    "Seven days of topical azole therapy.",
    "No treatment for symptomatic infection."
  ],
  "answer": 2,
  "explanation": "Pregnancy guidance specifies the topical route and seven-day duration.",
  "reviewHref": "#infections-pregnancy",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-toxoplasmosis-prevention",
  "lesson": "infections-pregnancy",
  "question": "A pregnant patient avoids cat litter but eats undercooked meat and gardens barehanded. Which counseling fills the gap?",
  "choices": [
    "Litter avoidance eliminates all exposure.",
    "Only petting cats transmits this parasite.",
    "Raw meat is safe if frozen briefly on the counter.",
    "Address safe cooking, produce washing and gloves plus handwashing for soil contact."
  ],
  "answer": 3,
  "explanation": "Toxoplasma exposure also occurs through food and contaminated soil; prevention must cover these routes.",
  "reviewHref": "#infections-pregnancy",
  "difficulty": "application"
},
{
  "id": "pregnancy-lactation-upper-tract-treatment",
  "lesson": "infections-pregnancy",
  "question": "A pregnant patient with urinary symptoms develops fever and flank pain. Why is simply adding nitrofurantoin inadequate?",
  "choices": [
    "It has inadequate renal-tissue exposure for suspected pyelonephritis.",
    "All antibiotics are forbidden during pregnancy.",
    "Fever proves the culture is contaminated.",
    "Only the tablet count needs adjustment."
  ],
  "answer": 0,
  "explanation": "Escalate for inpatient evaluation and renal-tissue-active treatment.",
  "reviewHref": "#infections-pregnancy",
  "difficulty": "application"
},
  {
    id: "pregnancy-lactation-acetaminophen-evidence", lesson: "common-symptoms",
    question: "A patient says a reported association proves acetaminophen causes autism and plans to ignore a high fever. Which response best reflects the reviewed guidance?",
    choices: ["The association establishes causation.", "All fever should remain untreated.", "There is no possible uncertainty about any exposure.", "Causation has not been established; assess the fever promptly and discuss indicated treatment with the obstetric team."], answer: 3,
    explanation: "FDA acknowledges conflicting evidence and no established causal relationship. High fever also warrants clinical assessment; an observational association does not justify blanket treatment avoidance.", reviewHref: "#common-symptoms", difficulty: "clinical",
  },
  {
    id: "pregnancy-lactation-diclegis-titration", lesson: "common-symptoms",
    question: "Diclegis two tablets nightly has not controlled afternoon nausea on day 2. What is the labeled next titration step?",
    choices: ["Take four tablets together tonight.", "Keep two tonight; on day 3 add one morning tablet.", "Switch to as-needed half tablets.", "Add two morning tablets immediately."], answer: 1,
    explanation: "Day 3 uses three tablets split morning/bedtime. A fourth mid-afternoon tablet can follow on day 4 if needed.", reviewHref: "#common-symptoms", difficulty: "application",
  },
  {
    id: "pregnancy-lactation-bonjesta-count", lesson: "common-symptoms",
    question: "A Bonjesta prescription copies Diclegis's four-tablet daily maximum. What needs correction?",
    choices: ["Bonjesta also allows four tablets.", "Bonjesta should be split to mimic Diclegis.", "Bonjesta's maximum is two tablets daily, morning and bedtime.", "Both products should be used only when vomiting starts."], answer: 2,
    explanation: "Bonjesta contains 20/20 mg per extended-release tablet; product-specific tablet counts differ.", reviewHref: "#common-symptoms", difficulty: "application",
  },
  {
    id: "pregnancy-lactation-nsaid-duration", lesson: "common-symptoms",
    question: "At 24 weeks, a specialist judges an NSAID necessary for more than 48 hours. What precaution is appropriate?",
    choices: ["Consider amniotic-fluid ultrasound and minimize dose/duration.", "Monitor only after 30 weeks.", "Use a larger dose to avoid renal effects.", "Assume normal fluid before treatment excludes later oligohydramnios."], answer: 0,
    explanation: "FDA recommends considering ultrasound after 48 hours; discontinue if oligohydramnios develops.", reviewHref: "#common-symptoms", difficulty: "clinical",
  },
  {
    id: "pregnancy-lactation-aspirin-exception", lesson: "common-symptoms",
    question: "At 25 weeks, a patient prescribed aspirin 81 mg for preeclampsia prevention reads the NSAID warning. What is the appropriate interpretation?",
    choices: ["Replace it with ibuprofen.", "Stop aspirin automatically at 20 weeks.", "Increase aspirin to an analgesic dose.", "The warning has an exception for clinician-directed aspirin 81 mg; retain the obstetric plan."], answer: 3,
    explanation: "The exception concerns prescribed low-dose aspirin, not unrestricted NSAID use.", reviewHref: "#common-symptoms", difficulty: "application",
  },
  {
    id: "pregnancy-lactation-folate-units", lesson: "pregnancy-context",
    question: "A prenatal serving provides 400 mcg folic acid taken with food. Using 0.6 mcg folic acid per 1 mcg DFE, approximately how much DFE does this provide?",
    choices: ["240 mcg DFE", "400 mcg DFE", "667 mcg DFE", "6,667 mcg DFE"], answer: 2,
    explanation: "400 / 0.6 = 666.7 mcg DFE. Multiplying by 0.6 reverses the conversion; folic-acid mass and DFE are different units.",
    reviewHref: "#pregnancy-context", difficulty: "application",
  },
  {
    id: "pregnancy-lactation-prenatal-label", lesson: "pregnancy-context",
    question: "A pregnant 17-year-old takes a prenatal gummy with no calcium. Which interpretation of the calcium recommendation is correct?",
    choices: ["The prenatal name guarantees adequate calcium.", "The total daily calcium target is 1,300 mg; assess dietary and supplemental intake together.", "Every patient should add 1,300 mg calcium regardless of food intake.", "Use the adult 1,000 mg target because pregnancy removes age differences."], answer: 1,
    explanation: "The pregnancy calcium target at ages 14 to 18 is 1,300 mg from all sources. Prenatal formulations vary, and the target is not an automatic added supplement dose.",
    reviewHref: "#pregnancy-context", difficulty: "application",
  },
  {
    id: "pregnancy-lactation-hiv-feeding",
    lesson: "lactation-care",
    question: "A parent with HIV has taken ART consistently and maintained HIV RNA below 50 copies/mL for four months before delivery. What counseling is appropriate?",
    choices: ["Discuss formula, banked pasteurized donor milk and supported breastfeeding with its residual risk and monitoring needs.", "Guarantee that breastfeeding cannot transmit HIV.", "Stop ART to prevent drug exposure through milk.", "Deny discussion of breastfeeding regardless of suppression."],
    answer: 0,
    explanation: "Current NIH guidance supports shared decisions after sustained suppression; breastfeeding risk is reduced, not zero.",
    reviewHref: "#lactation-care",
    difficulty: "clinical",
  },
  {
  "id": "pregnancy-lactation-alcohol-early-exposure",
  "lesson": "pregnancy-context",
  "question": "A patient drank wine before recognizing pregnancy and asks whether a healthy prior pregnancy means wine is safe this time. What is the best counseling?",
  "choices": [
    "Prior pregnancy outcomes establish the safe amount for this pregnancy.",
    "Avoid further alcohol, discuss the exposure with prenatal care, and explain that prior use does not prove fetal injury.",
    "Only alcohol use during the first trimester matters.",
    "Changing from wine to beer removes the fetal risk."
  ],
  "answer": 1,
  "explanation": "CDC identifies no known safe amount or timing. Outcomes vary between pregnancies, and stopping further exposure is beneficial; counseling should not predict injury from exposure alone.",
  "reviewHref": "#pregnancy-context",
  "difficulty": "clinical"
},
  {
  "id": "pregnancy-lactation-tobacco-evidence",
  "lesson": "pregnancy-context",
  "question": "A pregnant patient has not quit smoking after counseling. A learner says the USPSTF insufficient-evidence statement means every cessation medicine is contraindicated. How should this be corrected?",
  "choices": [
    "Use the usual nonpregnant medication regimen without further review.",
    "Replace cigarettes with vaping because pregnancy safety is established.",
    "Continue behavioral support and discuss individualized medication benefits and risks with the prenatal team.",
    "Stop offering treatment because counseling has not worked."
  ],
  "answer": 2,
  "explanation": "Insufficient evidence is not proof of harm or a blanket contraindication. Behavioral interventions remain recommended, and pregnancy-specific medication decisions require individualized assessment.",
  "reviewHref": "#pregnancy-context",
  "difficulty": "clinical"
},
  {
  "id": "pregnancy-lactation-cannabis-route",
  "lesson": "pregnancy-context",
  "question": "A pregnant patient uses cannabis for nausea and plans to switch from smoking to edibles. Which response best addresses the clinical question?",
  "choices": [
    "Edibles remove smoke exposure but do not establish pregnancy safety; discuss stopping cannabis and evidence-supported nausea care.",
    "Edibles have demonstrated fetal safety because combustion is absent.",
    "CBD can be substituted because absent pregnancy studies prove safety.",
    "Cannabis is safe if symptoms improve after each dose."
  ],
  "answer": 0,
  "explanation": "CDC recommends avoiding cannabis in pregnancy regardless of route. The indication still needs treatment, and uncertainty about CBD is not evidence of safety.",
  "reviewHref": "#pregnancy-context",
  "difficulty": "clinical"
},
  {
  "id": "pregnancy-lactation-oud-maintenance",
  "lesson": "pregnancy-context",
  "question": "A patient stable on prescribed buprenorphine discovers pregnancy and wants to stop immediately to prevent neonatal withdrawal. What is the best plan?",
  "choices": [
    "Stop today and restart only if withdrawal becomes severe.",
    "Replace medication treatment with counseling alone for the rest of pregnancy.",
    "Continue only until delivery, then stop automatically.",
    "Continue prescribed treatment while promptly coordinating prenatal and addiction care, including newborn monitoring."
  ],
  "answer": 3,
  "explanation": "Methadone or buprenorphine is recommended for OUD during pregnancy. Avoid abrupt withdrawal; possible neonatal withdrawal calls for pediatric planning, not withholding effective maternal treatment.",
  "reviewHref": "#pregnancy-context",
  "difficulty": "clinical"
},
  {
  "id": "pregnancy-lactation-gbs-low-count",
  "lesson": "infections-pregnancy",
  "question": "An asymptomatic pregnant patient has 20,000 CFU/mL of GBS in urine. What does this finding mean under ACOG guidance?",
  "choices": [
    "Give a prolonged antibiotic course now solely to eliminate colonization.",
    "No antepartum treatment is required solely for this low count, but document the GBS finding for intrapartum prophylaxis planning.",
    "Ignore the result because it has no delivery implications.",
    "A later negative culture necessarily cancels the prophylaxis indication."
  ],
  "answer": 1,
  "explanation": "Low-count asymptomatic GBS bacteriuria differs from a symptomatic UTI. Any GBS bacteriuria informs intrapartum prophylaxis planning; delivery circumstances, including prelabor cesarean with intact membranes, still matter.",
  "reviewHref": "#infections-pregnancy",
  "difficulty": "clinical"
},
  {
  "id": "pregnancy-lactation-asthma-acute-steroid",
  "lesson": "common-symptoms",
  "question": "A pregnant adult has a moderate asthma exacerbation despite initial inhaled albuterol. Should systemic corticosteroids be withheld solely because of pregnancy?",
  "choices": [
    "Yes; continue bronchodilator alone regardless of response.",
    "No; provide indicated acute treatment and reassessment while protecting maternal and fetal oxygenation.",
    "Yes; antibiotics routinely replace corticosteroids in pregnancy.",
    "Wait until after delivery before treating airway inflammation."
  ],
  "answer": 1,
  "explanation": "GINA recommends treating pregnancy exacerbations as in other adults. Indicated systemic corticosteroids should not be withheld solely because of pregnancy; worsening or severe illness requires escalation.",
  "reviewHref": "#common-symptoms",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-magnesium-cumulative",
  "lesson": "hypertension-preeclampsia",
  "question": "A fictional order gives magnesium sulfate 4 g as a loading dose, then 2 g/hour for a full 24 hours. What should the pharmacist recognize when comparing the order with the cited product maximum of 30 to 40 g per 24 hours?",
  "choices": [
    "The total is only 2 g because that is the hourly rate",
    "The total is 52 g; clarify the timeline, cumulative limit and protocol rather than accepting the hourly rate alone",
    "The total is 28 g and no further review is needed",
    "A correct pump rate guarantees a clinically appropriate course"
  ],
  "answer": 1,
  "explanation": "Maintenance contributes 2 times 24 = 48 g; adding the 4 g loading dose gives 52 g. The maintenance alone already exceeds 40 g over 24 hours. This is a product-label comparison; ACOG describes an obstetric regimen that can differ. Verify the exact timeline, product, renal function and selected protocol rather than declaring toxicity or independently interrupting indicated treatment.",
  "reviewHref": "#hypertension-preeclampsia",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-acute-nifedipine",
  "lesson": "hypertension-preeclampsia",
  "question": "A postpartum patient has confirmed persistent severe hypertension and no IV access yet. The team selects the ACOG CO767 oral nifedipine pathway. Which preparation and administration are appropriate?",
  "choices": [
    "Immediate-release nifedipine capsule swallowed orally, with protocol-directed blood-pressure reassessment",
    "An immediate-release capsule punctured under the tongue",
    "An extended-release tablet substituted without changing the acute protocol",
    "Magnesium alone while waiting several hours for IV access"
  ],
  "answer": 0,
  "explanation": "The acute pathway uses immediate-release oral nifedipine. Sublingual administration is avoided because of hypotension risk, and extended-release maintenance formulations are not interchangeable with this protocol. Severe pressure needs prompt treatment and reassessment; magnesium addresses seizure risk.",
  "reviewHref": "#hypertension-preeclampsia",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-magnesium-renal-eligibility",
  "lesson": "hypertension-preeclampsia",
  "question": "An obstetric patient has moderate-to-severe renal failure. A learner sees a reduced magnesium dose in a product label and concludes that this establishes eligibility for routine seizure prophylaxis. What is the best correction?",
  "choices": [
    "A lower labeled dose removes every guideline contraindication.",
    "Use the standard infusion without monitoring because the loading dose is brief.",
    "Reconcile the product instructions with ACOG renal contraindications and obtain a specialist seizure-prevention plan.",
    "Renal function affects antihypertensives but never magnesium."
  ],
  "answer": 2,
  "explanation": "ACOG lists moderate-to-severe renal failure among magnesium contraindications, while the cited product provides severe-renal-impairment dosing instructions. These source statements differ. A dose table alone cannot establish obstetric suitability; the team must resolve eligibility and select appropriate seizure prevention.",
  "reviewHref": "#hypertension-preeclampsia",
  "difficulty": "clinical"
},
{
  "id": "pregnancy-lactation-magnesium-renal-monitoring",
  "lesson": "hypertension-preeclampsia",
  "question": "During magnesium treatment, a patient with renal dysfunction has a serum magnesium of 10.2 mg/dL. Under the ACOG Practice Bulletin 222 monitoring pathway taught here, what is the appropriate response?",
  "choices": [
    "Continue unchanged until the next routine four-hour result.",
    "Stop the infusion, assess for toxicity, and follow the two-hour magnesium reassessment pathway.",
    "Increase the infusion because renal dysfunction accelerates magnesium elimination.",
    "Restart immediately at the same rate once a repeat result is below 10.2 mg/dL."
  ],
  "answer": 1,
  "explanation": "This result exceeds the ACOG stopping threshold of 9.6 mg/dL. Its renal pathway calls for two-hour measurements after stopping, with a lower-rate restart considered only below 8.4 mg/dL and with clinical reassessment. Respiratory depression or other significant toxicity requires immediate emergency treatment rather than waiting for laboratory reassessment.",
  "reviewHref": "#hypertension-preeclampsia",
  "difficulty": "clinical"
},
]);
