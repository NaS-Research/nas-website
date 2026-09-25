const c = (name, lesson, principle, action, hazard, caseStem, caseAnswer, why) => ({ name, lesson, principle, action, hazard, caseStem, caseAnswer, why });

const concepts = [
  c("timing an infertility evaluation", "evaluation-timing", "Evaluation generally begins after 12 months of regular unprotected intercourse when the female partner is younger than 35, after 6 months at age 35 or older, and sooner when age exceeds 40 or a known risk is present.", "Start promptly when irregular cycles, suspected tubal disease, endometriosis, male-factor risk, sexual dysfunction, chemotherapy exposure, or another known cause is present.", "Applying the 12-month threshold to every patient can waste clinically important time.", "A 38-year-old female partner has had regular unprotected intercourse with a sperm-producing partner for 7 months without conception.", "Begin an infertility evaluation now.", "Current guidance shortens the interval at age 35 and above because fertility declines with age."),
  c("parallel partner evaluation", "evaluation-timing", "Infertility can reflect female factors, male factors, both, or remain unexplained, so both partners are evaluated in parallel when applicable.", "Obtain reproductive histories and initiate the semen and female evaluations together.", "Completing months of female testing before asking about the male partner delays diagnosis.", "A couple presents after 14 months and only the female partner has been scheduled for testing.", "Begin both evaluations concurrently.", "Parallel evaluation is faster and avoids assuming which partner contributes."),
  c("fertile-window timing", "fertile-window", "The fertile window is the six-day interval ending on ovulation, with the highest probability near the final days.", "Recommend intercourse every one to two days during the fertile window without imposing a single required position or postcoital routine.", "Telling patients that one position or prolonged supine rest is required adds burden without evidence.", "A patient asks whether intercourse must occur in one specific position.", "Explain that position has not been shown to improve fertility and focus on timing and frequency.", "Sperm reach the cervical canal rapidly, and sexual position has not been shown to change fecundability."),
  c("confirming ovulation", "fertile-window", "Regular cycles of 21 to 35 days usually support ovulation and often need no additional confirmation unless other findings raise concern.", "Use cycle history first and add a correctly timed luteal progesterone or other targeted assessment only when needed.", "Calling a fixed cycle day 21 progesterone valid for every cycle ignores variation in ovulation timing.", "A patient has consistent 32-day cycles and no hirsutism.", "Treat the history as evidence of ovulation unless another indication for testing emerges.", "Cycle regularity is often sufficient, and testing should be timed relative to expected menses rather than a universal calendar day."),
  c("female evaluation structure", "female-evaluation", "Female evaluation addresses ovulation, uterine and tubal anatomy, reproductive history, age, and condition-specific risks.", "Use history and examination to select imaging and laboratory tests rather than ordering every available assay.", "A broad untargeted panel can create false positives without answering the core fertility questions.", "A patient with regular cycles and prior pelvic infection begins evaluation.", "Prioritize tubal patency while completing the standard evaluation.", "The history raises the probability of tubal disease even though ovulation appears likely."),
  c("tubal patency testing", "female-evaluation", "Hysterosalpingography or sonographic approaches can assess tubal patency and uterine-cavity contour.", "Select HSG or sonohysterographic testing when tubal disease or cavity pathology must be assessed.", "Routine diagnostic laparoscopy is too invasive for initial tubal screening without another indication.", "A patient with infertility has a history of treated chlamydial infection.", "Assess tubal patency with an appropriate imaging study.", "Prior pelvic infection increases concern for tubal damage."),
  c("ovarian reserve interpretation", "female-evaluation", "AMH, antral follicle count, and related measures estimate ovarian response or quantity, not egg quality or natural fertility in isolation.", "Use ovarian reserve testing as an adjunct for counseling and treatment planning in an infertility evaluation.", "Using a single AMH value as a pass-fail fertility test can falsely reassure or alarm a patient.", "A healthy patient without infertility asks for AMH testing to guarantee future conception.", "Explain that AMH cannot guarantee natural fertility or measure egg quality.", "Ovarian reserve markers are strongest for predicting response to stimulation, not spontaneous conception."),
  c("semen analysis", "male-evaluation", "Semen analysis evaluates volume, concentration, motility, morphology, and related parameters, but no single value is a binary fertility diagnosis.", "Obtain one or more properly collected analyses and interpret abnormalities with the reproductive history and specialist evaluation.", "Declaring permanent sterility from one mildly abnormal specimen ignores biological variability.", "One semen analysis shows reduced motility after a febrile illness.", "Repeat and interpret the analysis in clinical context.", "Semen parameters vary, and reversible illness can alter a specimen."),
  c("male endocrine testing", "male-evaluation", "Hormonal testing is targeted to oligospermia, azoospermia, impaired libido, erectile dysfunction, testicular atrophy, or another endocrine clue.", "Use FSH and testosterone, with additional tests when indicated, to localize a suspected endocrine cause.", "Ordering a large endocrine panel for every normal semen analysis is not a substitute for clinical reasoning.", "A patient has azoospermia and small testes.", "Obtain targeted hormonal evaluation and specialist assessment.", "The pattern suggests impaired testicular or hypothalamic-pituitary function."),
  c("exogenous testosterone", "male-evaluation", "Exogenous testosterone suppresses LH and FSH, lowers intratesticular testosterone, and can cause severe oligospermia or azoospermia.", "Ask directly about prescribed and nonprescribed androgen exposure when fertility is desired.", "Starting testosterone replacement in a patient actively trying to conceive can worsen the fertility problem.", "A patient on testosterone gel wants to father a child and has a low sperm count.", "Refer for fertility-preserving management and reassess exogenous testosterone.", "Serum androgen improvement does not preserve the intratesticular environment required for sperm production."),
  c("letrozole in PCOS", "pcos-oral-induction", "Letrozole is the preferred first-line pharmacologic ovulation-induction treatment for anovulatory infertility in PCOS when no other infertility factor is present.", "Confirm that pregnancy is not present, counsel that fertility use is often off-label, and arrange cycle-specific monitoring.", "Automatically calling clomiphene first line for PCOS reflects older guidance.", "A patient with PCOS has anovulatory infertility, patent tubes and an acceptable partner semen analysis. Pregnancy is excluded and no other infertility factor is identified.", "Offer letrozole as first-line oral ovulation induction.", "The international PCOS guideline favors letrozole for ovulation, pregnancy, and live-birth outcomes."),
  c("letrozole mechanism", "pcos-oral-induction", "Aromatase inhibition transiently lowers estrogen synthesis, reduces negative feedback, and increases endogenous FSH recruitment.", "Connect the short early-cycle exposure to follicular response and cycle monitoring.", "Describing letrozole as a direct FSH injection confuses its mechanism and risks.", "A learner asks how an aromatase inhibitor can induce ovulation.", "Explain that reduced estrogen feedback permits greater endogenous gonadotropin stimulation.", "The drug changes hypothalamic-pituitary feedback rather than replacing FSH directly."),
  c("clomiphene pharmacology", "clomiphene-metformin", "Clomiphene is a selective estrogen receptor modulator that blocks estrogen feedback at the hypothalamus and increases gonadotropin release.", "Use a limited monitored course and stop for concerning visual symptoms or ovarian enlargement.", "Continuing indefinitely after repeated failure increases exposure without a sound strategy.", "A patient taking clomiphene reports flashes and blurred vision.", "Stop the drug and obtain prompt ophthalmologic evaluation.", "Visual adverse effects are a labeled reason to discontinue and evaluate."),
  c("metformin in PCOS infertility", "clomiphene-metformin", "Metformin can improve metabolic health and may support ovulation in selected PCOS patients, but it is less effective than first-line ovulation agents for fertility outcomes.", "Use metformin for metabolic indications or selected fertility contexts rather than presenting it as universally superior induction therapy.", "Substituting metformin alone for effective ovulation induction without a reason can reduce the chance of pregnancy.", "A patient with PCOS, impaired glucose tolerance, and anovulatory infertility asks about metformin.", "Use metformin for the metabolic indication while selecting fertility therapy through shared planning.", "Metabolic benefit and ovulation-induction efficacy are related but not identical treatment goals."),
  c("gonadotropin stimulation", "gonadotropin-monitoring", "Exogenous FSH with or without LH activity directly recruits follicles and requires individualized specialist dosing.", "Monitor follicular development and estradiol response, then adjust or cancel the cycle when safety thresholds are crossed.", "Publishing one fixed self-directed dose ignores product, protocol, ovarian reserve, and response differences.", "A patient on gonadotropins develops an excessive multifollicular response.", "Withhold the trigger and follow the clinic's cancellation and OHSS-prevention plan.", "Avoiding the ovulatory trigger and unsafe conception exposure can reduce severe complications."),
  c("multiple gestation risk", "gonadotropin-monitoring", "Recruiting multiple mature follicles increases multiple-gestation risk, especially with gonadotropin treatment.", "Use conservative dosing, ultrasound monitoring, and explicit cancellation criteria.", "Calling a high-order multiple pregnancy a success ignores major maternal and neonatal risk.", "Ultrasound shows too many mature follicles before planned timed intercourse.", "Cancel or modify the cycle according to the specialist safety protocol.", "The number of mature follicles directly changes multiple-gestation risk."),
  c("hCG trigger", "trigger-protocol-control", "hCG acts at the LH receptor to complete final follicular maturation and trigger ovulation, or to time oocyte retrieval in ART.", "Administer only when follicular development and the planned procedure support the trigger.", "Using hCG despite an unsafe excessive response can worsen OHSS.", "A patient at high OHSS risk has an excessive follicular response before the planned hCG dose.", "Reassess the trigger and use an OHSS-prevention strategy rather than proceeding automatically.", "hCG exposure can amplify luteinization and vascular-permeability pathways involved in OHSS."),
  c("GnRH antagonist protocols", "trigger-protocol-control", "Ganirelix or cetrorelix prevents a premature LH surge during controlled ovarian stimulation without an agonist flare.", "Use the product as part of a synchronized specialist protocol rather than as stand-alone infertility treatment.", "Starting and stopping an antagonist without coordinating follicular monitoring can permit premature ovulation.", "A stimulated IVF cycle needs rapid prevention of a premature LH surge.", "Use the prescribed GnRH antagonist protocol.", "Direct pituitary receptor blockade provides rapid reversible suppression."),
  c("luteal progesterone", "trigger-protocol-control", "Progesterone supports the endometrium after ovarian stimulation and oocyte retrieval when luteal function is disrupted by the protocol.", "Use the clinic's route, dose, timing, and duration, and teach correct product-specific administration.", "Assuming oral, vaginal, and intramuscular products are interchangeable can change exposure and effectiveness.", "A patient after IVF asks to substitute an oral product for the prescribed vaginal progesterone.", "Do not substitute without the reproductive team's approval.", "ART luteal support is protocol and formulation specific."),
  c("IUI selection", "assisted-reproduction", "Intrauterine insemination places prepared sperm in the uterus and may be paired with natural-cycle or stimulated treatment in selected cases.", "Confirm at least one usable tube, reasonable indication, sperm preparation, and timing before IUI.", "Using IUI when both tubes are occluded cannot overcome the anatomic barrier.", "Imaging confirms bilateral tubal occlusion.", "Do not expect IUI to bypass the obstruction and discuss an ART pathway.", "IUI still requires sperm and oocyte to meet through a patent tube."),
  c("IVF and ICSI", "assisted-reproduction", "IVF fertilizes oocytes outside the body, while ICSI injects a single sperm into an oocyte for selected fertilization problems.", "Match IVF or ICSI to the diagnosed barriers instead of assuming every patient needs the most intensive procedure.", "Describing ICSI as a treatment for uterine-cavity disease confuses fertilization with implantation anatomy.", "Severe male-factor infertility makes conventional fertilization unlikely.", "Discuss IVF with possible ICSI through reproductive endocrinology.", "ICSI can address selected sperm-oocyte fertilization barriers."),
  c("OHSS risk recognition", "ohss-prevention", "PCOS, high AMH, high anticipated oocyte yield, and an excessive stimulation response increase OHSS risk.", "Identify risk before stimulation and update it as follicles and estradiol change.", "Waiting for respiratory distress before recognizing risk forfeits prevention opportunities.", "A patient with PCOS and high AMH is beginning an IVF cycle.", "Use an OHSS-conscious protocol from the outset.", "Baseline risk should influence protocol, dose, trigger, and transfer planning."),
  c("OHSS prevention", "ohss-prevention", "GnRH antagonist protocols, individualized lower gonadotropin exposure, GnRH agonist trigger in suitable cycles, cabergoline, and freeze-all strategies can reduce OHSS risk.", "Combine prevention measures according to response and reproductive plan.", "Using lower-dose hCG alone or aspirin as the primary prevention strategy is not supported.", "A high-responder in an antagonist cycle has many follicles before retrieval.", "Consider an agonist trigger and freeze-all strategy with the specialist team.", "Avoiding prolonged endogenous hCG exposure after fresh transfer can reduce late OHSS."),
  c("severe OHSS", "ohss-prevention", "Rapid weight gain, tense ascites, oliguria, dyspnea, hemoconcentration, thrombosis, or renal dysfunction can signal severe OHSS.", "Escalate urgently and assess volume distribution, respiratory status, renal function, electrolytes, and thrombotic risk.", "Telling a dyspneic patient to simply drink more water can delay emergency care.", "One week after retrieval, a patient has shortness of breath, marked abdominal distension, and low urine output.", "Arrange urgent evaluation for severe OHSS.", "The presentation suggests clinically important third spacing and organ compromise."),
  c("psychosocial and longitudinal care", "ohss-prevention", "Infertility care can create grief, anxiety, relationship strain, financial burden, medication toxicity, and repeated decision points.", "Define follow-up, medication monitoring, emotional support, stopping rules, and alternatives before treatment begins.", "Reducing success to a positive test ignores patient burden and treatment complications.", "A patient is overwhelmed after repeated unsuccessful cycles and wants to pause.", "Support a pause, reassess goals and burden, and offer counseling resources.", "Patient autonomy and psychological safety remain part of high-quality fertility care."),
  c("Menopur missed dose", "gonadotropin-monitoring", "Missed-dose management requires clinic instructions.", "Call the clinic without doubling.", "Double the next dose.", "A patient missed a scheduled Menopur injection and asks how to catch up.", "Contact the clinic for instructions; do not double the next dose.", "The Menopur label directs patients to call the prescriber rather than double a missed dose."),
  c("Follistim opened cartridge", "gonadotropin-monitoring", "First puncture starts the 28-day in-use limit.", "Discard an over-age cartridge.", "Extend the in-use limit because solution remains.", "A Follistim AQ cartridge was first punctured 35 days ago and has been refrigerated.", "Discard it and obtain an appropriate replacement through the clinic or pharmacy.", "Refrigeration does not extend the labeled 28-day limit after puncture."),
  c("Ovidrel and pregnancy testing", "trigger-protocol-control", "Exogenous hCG can interfere with pregnancy-test interpretation.", "Follow the clinic testing schedule.", "Call any early positive proof of conception.", "A patient has a positive home pregnancy test shortly after an Ovidrel trigger.", "Explain possible drug interference and follow the clinic confirmation schedule.", "The test may detect administered hCG; this early result alone does not prove a new pregnancy."),
  c("hCG product storage", "trigger-protocol-control", "Handling differs between products.", "Check the exact label.", "Transfer the Pregnyl limit to Novarel.", "A patient has refrigerated Novarel reconstituted with its supplied diluent 45 days ago. They recall a 60-day limit from prior Pregnyl use.", "Discard the Novarel and arrange replacement; its labeled refrigerated limit is 30 days.", "Pregnyl and Novarel do not share the same reconstituted storage limit."),
  c("Gonal-f pen identity", "gonadotropin-monitoring", "Redi-ject is a prefilled pen.", "Use presentation-specific instructions.", "Apply vial mixing instructions to a pen.", "A patient receives Gonal-f RFF Redi-ject but has old instructions for mixing a Gonal-f vial.", "Teach the Redi-ject pen instructions before use instead of applying the vial preparation steps.", "The active ingredient does not make different delivery systems interchangeable."),
  c("folic acid before conception", "evaluation-timing", "Prevention starts before pregnancy recognition.", "Check folic acid intake now.", "Wait for a positive pregnancy test.", "A person planning pregnancy asks when to start routine folic-acid prevention.", "Start before conception and ensure 400 mcg of folic acid daily under CDC guidance.", "Neural-tube development occurs early, often before pregnancy is recognized."),
  c("temperature tracking limitations", "fertile-window", "Temperature rise is usually retrospective.", "Explain its timing limitations.", "Call the rise a reliable advance forecast.", "A patient waits for a sustained basal-temperature rise before beginning intercourse each cycle.", "Explain that the rise generally follows ovulation and may miss the most fertile days.", "Temperature charting is not a reliable prospective ovulation predictor or routine infertility test."),
  c("LH kit uncertainty", "fertile-window", "Urinary LH is indirect evidence.", "Interpret alongside the clinical context.", "Treat a positive result as proof of ovulation.", "A patient with PCOS repeatedly has positive urinary LH tests without a clear cycle pattern.", "Consider elevated basal LH and arrange appropriate assessment rather than assuming repeated ovulation.", "PCOS can produce false-positive urinary LH results; the kit alone cannot establish follicle rupture."),
  c("metformin OHSS protocol distinction", "ohss-prevention", "Prevention evidence depends on protocol.", "Use supported prevention measures.", "Add metformin solely for antagonist-cycle OHSS prevention.", "A patient in an antagonist IVF cycle asks to add metformin solely to prevent OHSS, without a separate metabolic indication.", "Explain that ASRM does not recommend metformin for that sole purpose in antagonist cycles.", "This differs from selected PCOS agonist protocols; prevention cannot be generalized across protocols."),
  c("clomiphene response-based dose", "clomiphene-metformin", "Escalation is for failed ovulation.", "Do not increase an effective ovulatory dose.", "Increase merely because conception has not occurred.", "A patient ovulated after a labeled 50 mg clomiphene course but did not conceive and requests a higher dose automatically.", "Explain that successful ovulation does not justify automatic dose escalation; reassess the treatment plan.", "The label finds no advantage to increasing a dose that already produces ovulation."),
  c("clomiphene reassessment", "clomiphene-metformin", "Repeated ovulatory cycles without pregnancy require reassessment.", "Reevaluate instead of continuing indefinitely.", "Treat six cycles as a mandatory minimum.", "Three clomiphene cycles produced ovulation without pregnancy. The patient assumes three more cycles are automatically required.", "Reevaluate now rather than automatically continuing clomiphene.", "The labeled stopping rule after three ovulatory responses without pregnancy is not erased by the overall limit of about six cycles."),
  c("clomiphene liver history", "clomiphene-metformin", "Past liver dysfunction is a labeled contraindication.", "Review the history before prescribing.", "Ignore prior dysfunction because current tests are normal.", "A patient requests clomiphene and has a documented history of liver dysfunction, although current liver tests are normal.", "Flag the labeled contraindication and arrange an alternative specialist plan.", "The contraindication covers liver disease or a history of liver dysfunction."),
  c("Endometrin vaginal products", "trigger-protocol-control", "Vaginal coadministration can alter exposure.", "Ask the clinic before adding a vaginal product.", "Assume every local product is compatible.", "A patient using Endometrin after retrieval wants to add an over-the-counter vaginal antifungal.", "Contact the fertility team before adding it.", "Other vaginal products may change Endometrin release or absorption; the label discourages concomitant use."),
  c("ICSI without male factor", "assisted-reproduction", "Routine ICSI is not supported for all IVF cycles.", "Identify a specific indication.", "Promise higher live birth solely from age.", "A 39-year-old starting IVF has no male factor, no prior fertilization failure and no other specific ICSI indication. ICSI is proposed solely because of age.", "Explain that age alone does not establish benefit from ICSI over conventional insemination.", "ASRM 2026 does not recommend ICSI solely for advanced maternal age in the absence of male factor."),
  c("preconception medication review", "evaluation-timing", "Disease control and medicine risk must be considered together.", "Plan changes with the treating team.", "Stop all treatment without review.", "A patient planning pregnancy intends to stop every prescription and supplement tonight without contacting the treating clinicians.", "Arrange a medication and disease-control review before making changes.", "Stopping necessary treatment can create avoidable relapse or withdrawal risk; review all products and select an individualized plan."),
  c("MMR conception interval", "evaluation-timing", "MMR requires a preconception interval.", "Use the specific vaccine interval.", "Assume immediate conception is the recommended plan.", "A nonpregnant patient receives an indicated MMR dose and plans to begin trying to conceive tomorrow.", "Advise avoiding conception for 28 days after the vaccine.", "CDC recommends a 28-day interval after MMR. This is not a rule to terminate a pregnancy after inadvertent exposure."),
  c("preconception alcohol counseling", "evaluation-timing", "Counsel before pregnancy recognition.", "Recommend stopping alcohol while trying to conceive.", "Restrict advice to heavy drinking only.", "A patient trying to conceive says they will stop alcohol only after a positive pregnancy test.", "Recommend stopping now and offer support if this is difficult.", "Preconception prevention begins before pregnancy is recognized; advice is not limited to excessive drinking."),
];

const caseDistractors = [
  [
    "Wait until twelve months regardless of age.",
    "Start stimulation without evaluating possible causes.",
    "Delay evaluation until age forty."
  ],
  [
    "Complete all female testing before obtaining a semen analysis.",
    "Evaluate only the partner with no previous pregnancies.",
    "Assume a previous pregnancy excludes a current male factor."
  ],
  [
    "Require two hours of bed rest after intercourse.",
    "Choose a single position as the main intervention.",
    "Avoid intercourse until after a sustained temperature rise."
  ],
  [
    "Diagnose anovulation because the cycle exceeds 28 days.",
    "Require progesterone testing on day 21 in every cycle.",
    "Begin induction solely because the cycle lasts 32 days."
  ],
  [
    "Assume regular cycles exclude every female factor.",
    "Use AMH alone to rule out tubal disease.",
    "Begin induction without considering the prior infection."
  ],
  [
    "Use serum progesterone to establish tubal patency.",
    "Use AMH to exclude tubal obstruction.",
    "Order diagnostic laparoscopy routinely before less invasive assessment."
  ],
  [
    "Interpret a normal AMH as a guarantee of later pregnancy.",
    "Use AMH as a direct embryo chromosome test.",
    "Diagnose permanent infertility from one low AMH value."
  ],
  [
    "Diagnose permanent sterility from this specimen alone.",
    "Ignore the result because febrile illness cannot affect semen.",
    "Start testosterone solely to improve motility."
  ],
  [
    "Begin testosterone without considering its effect on fertility.",
    "Reassure that azoospermia needs no further evaluation.",
    "Rely on a home motility test to localize the endocrine problem."
  ],
  [
    "Increase testosterone until the sperm count recovers.",
    "Assume a normal serum testosterone guarantees normal spermatogenesis.",
    "Continue unchanged because topical testosterone cannot suppress gonadotropins."
  ],
  [
    "Use metformin as universally superior fertility treatment.",
    "Choose clomiphene automatically because it must precede letrozole.",
    "Use contraceptive-dose combined hormones to induce ovulation."
  ],
  [
    "It replaces FSH by directly stimulating the FSH receptor.",
    "It supplies estrogen to maintain negative feedback.",
    "It activates the LH receptor as an hCG substitute."
  ],
  [
    "Continue until the current course is finished before reporting symptoms.",
    "Reduce the dose without an eye evaluation.",
    "Reassure that visual effects are always rapidly reversible."
  ],
  [
    "Promise that metformin alone is the most effective induction agent.",
    "Ignore impaired glucose tolerance because the visit concerns fertility.",
    "Treat one withdrawal bleed as proof that metabolic follow-up is unnecessary."
  ],
  [
    "Increase the dose because more follicles always improve safety.",
    "Proceed automatically with the planned trigger.",
    "Let the patient adjust the dose without ultrasound follow-up."
  ],
  [
    "Proceed because multiple gestation is an acceptable marker of response.",
    "Increase the trigger dose to select a single follicle.",
    "Disregard follicle count if the patient feels well."
  ],
  [
    "Give hCG automatically because the prescription was already dispensed.",
    "Increase hCG to reduce the excessive response.",
    "Use symptoms alone and disregard follicular monitoring."
  ],
  [
    "Use ganirelix as progesterone replacement after transfer.",
    "Expect an initial agonist flare before suppression.",
    "Use hCG to block the pituitary LH surge."
  ],
  [
    "Substitute equal milligram doses regardless of route.",
    "Stop progesterone because all luteal support is optional.",
    "Switch to an estrogen-only product without contacting the clinic."
  ],
  [
    "Proceed with IUI because it bypasses both tubes.",
    "Use urinary LH testing to reopen the tubes.",
    "Increase the sperm volume to overcome bilateral occlusion."
  ],
  [
    "Use ICSI to correct uterine-cavity abnormalities.",
    "Promise implantation whenever ICSI is used.",
    "Assume timed intercourse bypasses severe sperm-oocyte fertilization problems."
  ],
  [
    "Wait for respiratory symptoms before modifying risk management.",
    "Use a fixed high starting dose regardless of expected response.",
    "Assume baseline risk disappears once stimulation begins."
  ],
  [
    "Rely on aspirin alone for prevention.",
    "Use lower-dose hCG alone as the preferred prevention strategy.",
    "Proceed with fresh transfer regardless of response."
  ],
  [
    "Advise water intake alone and wait until the next visit.",
    "Give an additional unmonitored hCG dose.",
    "Reassure that dyspnea and oliguria are expected harmless effects."
  ],
  [
    "Require another cycle before discussing stopping.",
    "Treat a treatment pause as nonadherence requiring discharge.",
    "Ignore burden because a positive pregnancy test is the only outcome."
  ],
  [
    "Double the next injection.",
    "Skip all remaining injections without calling.",
    "Take the medication orally instead."
  ],
  [
    "Keep it until empty because it was refrigerated.",
    "Freeze it to restart the storage clock.",
    "Use a larger dose to compensate for its age."
  ],
  [
    "Confirm a new pregnancy from this test alone.",
    "Give another trigger to confirm the result.",
    "Stop all prescribed luteal support without contacting the clinic."
  ],
  [
    "Use it because all hCG products have a 60-day limit.",
    "Freeze it to extend its life.",
    "Double the dose because it is older."
  ],
  [
    "Add the old vial diluent to the pen.",
    "Use a Follistim cartridge inside the Redi-ject.",
    "Share another patient's pen if the dose matches."
  ],
  [
    "Wait until the second trimester.",
    "Wait for a positive pregnancy test.",
    "Use any amount of dietary folate as an exact substitute for 400 mcg folic acid."
  ],
  [
    "Continue waiting because the rise reliably predicts ovulation several days ahead.",
    "Diagnose infertility from one chart alone.",
    "Require temperature charting instead of all other clinical evaluation."
  ],
  [
    "Count each positive test as a separate ovulation.",
    "Start unmonitored gonadotropins based on the test alone.",
    "Assume every positive test confirms pregnancy."
  ],
  [
    "Add it because all stimulation protocols have identical evidence.",
    "Replace the monitoring plan with metformin.",
    "Use aspirin alone instead of established prevention."
  ],
  [
    "Automatically double the dose after every nonpregnant cycle.",
    "Extend the current course without reassessment.",
    "Use the largest dose tolerated regardless of ovulation."
  ],
  [
    "Complete at least six cycles before any reassessment.",
    "Continue indefinitely as long as ovulation occurs.",
    "Increase the dose solely because conception did not occur."
  ],
  [
    "Prescribe because only current test abnormalities matter.",
    "Ignore the history if the initial dose is low.",
    "Use a longer course to reduce liver risk."
  ],
  ["Add it without review because vaginal products never interact.", "Stop progesterone permanently to permit self-treatment.", "Double Endometrin to offset any interaction."],
  ["ICSI guarantees a live birth at this age.", "Age alone requires ICSI in every IVF cycle.", "ICSI reverses age-related oocyte changes."]
  , ["Stop every medicine immediately, regardless of indication.", "Review prescriptions only and ignore supplements.", "Assume all OTC products are safe in pregnancy."]
  , ["Try tomorrow because the vaccine has no preconception interval.", "Avoid conception permanently after MMR.", "End any pregnancy occurring within that interval automatically."]
  , ["Continue until a pregnancy test becomes positive.", "Limit counseling to heavy drinking only.", "Replace alcohol with smoking to avoid withdrawal concerns."]
];

export const infertilityOvulationInductionQuestionBank = concepts.map((concept, index) => {
  const answer = index % 4;
  const choices = [...caseDistractors[index]];
  choices.splice(answer, 0, concept.caseAnswer);
  return {
    id: `infertility-case-${index + 1}`,
    conceptGroup: concept.name,
    lesson: concept.lesson,
    question: `${concept.caseStem} Which response is best?`,
    choices, answer, explanation: concept.why,
    reviewHref: `#${concept.lesson}`,
    difficulty: "application",
  };
});
