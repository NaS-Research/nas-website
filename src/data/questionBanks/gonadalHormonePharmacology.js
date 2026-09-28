const c = (name, lesson, principle, action, hazard, caseStem, caseAnswer, why) => ({ name, lesson, principle, action, hazard, caseStem, caseAnswer, why });

const concepts = [
  c("pulsatile GnRH signaling", "hpg-axis", "Pulsatile GnRH preserves pituitary LH and FSH secretion, while continuous stimulation eventually desensitizes the receptor.", "Interpret gonadotropins through the pattern and duration of GnRH exposure.", "Treating continuous GnRH agonism as permanent stimulation reverses the expected chronic effect.", "A patient begins a depot GnRH agonist and later has low LH and FSH.", "Explain that sustained receptor stimulation produced pituitary desensitization.", "GnRH pulse pattern determines whether pituitary gonadotropin output is supported or suppressed."),
  c("gonadal negative feedback", "hpg-axis", "Testosterone, estradiol, progesterone, and inhibin restrain hypothalamic or pituitary signaling through feedback loops.", "Interpret a downstream hormone together with LH and FSH rather than alone.", "Ignoring feedback can make appropriate compensatory gonadotropin elevation look like a primary pituitary problem.", "Testosterone is low and LH and FSH are markedly elevated.", "Classify the pattern as primary testicular failure.", "Loss of gonadal feedback raises gonadotropin drive when the pituitary is intact."),
  c("LH and Leydig cells", "testicular-physiology", "LH stimulates Leydig-cell steroidogenesis and testosterone production.", "Use LH direction to help distinguish testicular failure from central signaling failure.", "Assigning FSH as the main direct driver of Leydig testosterone production confuses testicular cell roles.", "A loss-of-function mutation prevents LH receptor signaling in the testis.", "Predict reduced Leydig-cell testosterone synthesis.", "Leydig cells depend on LH receptor signaling for gonadal androgen production."),
  c("FSH and Sertoli cells", "testicular-physiology", "FSH supports Sertoli-cell function, inhibin B production, and spermatogenesis.", "Evaluate FSH, sperm parameters, and testicular context when spermatogenic failure is suspected.", "A normal serum testosterone concentration does not prove that spermatogenesis is intact.", "A patient has azoospermia with evidence of seminiferous-tubule injury.", "Evaluate Sertoli and germ-cell function rather than relying on serum testosterone alone.", "Spermatogenesis depends on Sertoli support and high local testosterone, not only circulating androgen."),
  c("exogenous testosterone and fertility", "testicular-physiology", "Exogenous testosterone suppresses LH and FSH and can lower intratesticular testosterone enough to reduce sperm production.", "Discuss fertility before therapy and use a reproductive pathway when near-term conception is desired.", "Starting testosterone solely to treat infertility can worsen the mechanism being treated.", "A man with confirmed hypogonadism wants to conceive within six months.", "Avoid routine exogenous testosterone and refer for fertility-preserving evaluation.", "Serum replacement can suppress the gonadotropins required for spermatogenesis."),
  c("two-cell ovarian steroidogenesis", "ovarian-cycle", "LH stimulates theca androgen substrate and FSH stimulates granulosa aromatase to create estradiol.", "Trace both cell types when explaining ovarian estrogen production.", "Assigning the complete pathway to one ovarian cell hides the coordinated physiology.", "Granulosa aromatase activity is markedly reduced.", "Predict impaired conversion of theca-derived androgen to estradiol.", "The ovarian follicle uses theca substrate and granulosa aromatization."),
  c("estradiol positive feedback", "ovarian-cycle", "Sustained high estradiol from the dominant follicle can switch to positive feedback and trigger the LH surge.", "Use cycle timing when interpreting high estradiol and LH.", "Assuming estrogen feedback is always negative makes ovulation physiology impossible to explain.", "A dominant follicle produces sustained high estradiol near mid-cycle.", "Predict an LH surge followed by ovulation if the axis is intact.", "Mid-cycle estradiol positive feedback is the physiologic trigger for the LH surge."),
  c("corpus luteum progesterone", "ovarian-cycle", "The corpus luteum produces progesterone after ovulation and supports the secretory endometrium.", "Use luteal progesterone as a cycle-dependent marker rather than a fixed reference value.", "Interpreting luteal progesterone with a follicular-phase reference can misclassify normal physiology.", "Progesterone rises after a documented LH surge.", "Interpret the rise as evidence of luteal corpus-luteum function.", "Ovulation creates the progesterone-producing corpus luteum."),
  c("cholesterol entry into steroidogenesis", "steroidogenesis-metabolism", "StAR-mediated cholesterol transport and CYP11A1 activity initiate steroid-hormone synthesis.", "Locate early pathway defects before comparing downstream sex steroids.", "Treating estradiol and testosterone synthesis as unrelated pathways ignores their shared precursor system.", "A defect prevents cholesterol movement into the mitochondrial steroidogenic pathway.", "Predict broad impairment of gonadal steroid synthesis.", "All major gonadal steroids share the early cholesterol-to-pregnenolone pathway."),
  c("5-alpha-reductase and DHT", "steroidogenesis-metabolism", "5-alpha-reductase converts testosterone to the more potent androgen DHT in selected tissues.", "Predict tissue-specific effects when the enzyme is inhibited.", "Assuming serum testosterone must fall substantially after enzyme inhibition misses local DHT pharmacology.", "A drug inhibits 5-alpha-reductase in prostate and skin.", "Predict reduced local DHT formation.", "The enzyme modifies testosterone action locally rather than serving as the only source of circulating androgen."),
  c("aromatase and estradiol", "steroidogenesis-metabolism", "Aromatase converts androgen substrate to estrogen in gonadal and peripheral tissues.", "Anticipate lower estrogen action and altered feedback when aromatase is inhibited.", "Describing aromatase inhibition as direct estrogen receptor blockade confuses synthesis with signaling.", "An aromatase inhibitor is started and estradiol falls.", "Expect altered estrogen feedback and tissue effects without direct receptor antagonism.", "Aromatase controls hormone production upstream of the estrogen receptor."),
  c("androgen receptor signaling", "receptor-signaling", "The androgen receptor is a ligand-regulated transcription factor activated by testosterone or DHT.", "Connect receptor occupancy to tissue gene regulation and clinical response.", "Treating androgen action as an immediate membrane-only event ignores its major genomic mechanism.", "A receptor mutation prevents DNA-dependent androgen signaling despite normal testosterone.", "Predict androgen resistance at responsive tissues.", "Normal hormone concentration cannot overcome a nonfunctional receptor pathway."),
  c("selective estrogen receptor modulation", "receptor-signaling", "Selective estrogen receptor modulators recruit different regulatory complexes across tissues.", "Judge each modulator by tissue-specific benefits and risks rather than a global agonist label.", "Calling a selective modulator purely estrogenic or antiestrogenic hides clinically important tissue differences.", "A drug supports bone while opposing estrogen action in breast tissue.", "Explain the pattern through tissue-specific receptor co-regulators.", "Ligand-bound receptor conformation interacts with a different regulatory environment in each tissue."),
  c("sex-hormone binding globulin", "hypogonadism-diagnosis", "SHBG changes the relationship between total hormone concentration and biologically available hormone.", "Consider SHBG-altering states when total testosterone and the clinical picture disagree.", "Interpreting total testosterone without binding-protein context can misclassify patients with altered SHBG.", "A patient has a condition that markedly raises SHBG and a borderline total testosterone result.", "Use an appropriate free-testosterone assessment when indicated.", "Binding-protein changes can shift total hormone without a proportional change in available hormone."),
  c("hypogonadism diagnostic agreement", "hypogonadism-diagnosis", "Male hypogonadism requires compatible symptoms or signs plus unequivocally and consistently low testosterone.", "Repeat an accurate morning testosterone measurement under appropriate conditions before diagnosing.", "Starting lifelong therapy from one low afternoon result during illness creates avoidable misdiagnosis.", "A patient has nonspecific fatigue and one low testosterone result drawn at 4 PM during influenza.", "Repeat fasting morning testing after recovery before diagnosing hypogonadism.", "Symptoms and valid repeated biochemical evidence must agree."),
  c("primary versus central hypogonadism", "hypogonadism-diagnosis", "High gonadotropins with low gonadal hormone support primary failure, while low or inappropriately normal gonadotropins support central disease.", "Measure LH and FSH after confirming the hormone deficit.", "Prescribing replacement before locating central disease can delay evaluation of a pituitary cause.", "Testosterone is repeatedly low and LH is inappropriately normal with elevated prolactin.", "Evaluate central hypogonadism and the pituitary pathway.", "The gonadotropin response is inadequate for the degree of testosterone deficiency."),
  c("reversible testosterone suppression", "hypogonadism-diagnosis", "Obesity, acute illness, sleep disruption, opioids, glucocorticoids, and systemic disease can reduce testosterone.", "Treat reversible contributors and repeat valid testing before committing to long-term replacement when appropriate.", "Labeling every obesity-associated low value as irreversible testicular disease bypasses first-line management.", "A man with obesity, severe untreated sleep apnea, and borderline low testosterone seeks therapy.", "Address reversible contributors and confirm persistent biochemical deficiency.", "The clinical context can suppress the axis without permanent gonadal failure."),
  c("testosterone formulation differences", "testosterone-formulations", "Testosterone products differ in kinetics, administration, monitoring time, and transfer or injection risks.", "Use the exact product label when initiating, monitoring, or switching formulations.", "Converting products milligram for milligram without label guidance can create underexposure or toxicity.", "A patient switches from daily gel to a long-acting injection.", "Rebuild dosing and monitoring from the new product instructions.", "Formulation-specific pharmacokinetics prevent direct dose equivalence."),
  c("topical testosterone transfer", "testosterone-formulations", "Topical testosterone can transfer through skin contact and expose another person.", "Wash hands, allow the site to dry, cover it, and follow product-specific contact precautions.", "Treating gel as harmless after application can expose children or partners.", "A child has skin contact with an unwashed testosterone-gel application site.", "Stop the contact, wash the exposed skin with soap and water, and reinforce transfer precautions.", "Secondary exposure is a known product-specific hazard of topical testosterone."),
  c("testosterone erythrocytosis monitoring", "testosterone-safety", "Testosterone can raise hematocrit and increase blood viscosity risk.", "Measure hematocrit at baseline and during therapy according to current guidance and the product label.", "Ignoring a marked hematocrit rise while escalating the dose prioritizes a number over patient safety.", "A patient taking testosterone has a confirmed hematocrit of 55%.", "Stop therapy and evaluate hypoxia or sleep apnea before considering a reduced dose after recovery.", "A value of 55% exceeds the Endocrine Society stopping threshold of 54%; continuing or escalating without evaluation is inappropriate."),
  c("testosterone blood pressure safety", "testosterone-safety", "Current product labeling warns that testosterone can increase blood pressure.", "Measure blood pressure periodically and reconsider therapy when hypertension is uncontrolled.", "Relying on the removal of an older cardiovascular boxed warning to claim no cardiovascular monitoring is needed is unsafe.", "A patient has worsening uncontrolled hypertension after starting testosterone.", "Reassess the product, exposure, and cardiovascular risk before continuing unchanged.", "FDA labeling changes did not remove the need to monitor testosterone-associated blood-pressure elevation."),
  c("testosterone prostate monitoring", "testosterone-safety", "Prostate evaluation is individualized by age, baseline risk, symptoms, shared decision-making, and current guidance.", "Investigate a confirmed clinically important PSA change or abnormal examination rather than assuming it is benign.", "Using testosterone as a substitute for evaluating new obstructive or cancer-related findings can delay diagnosis.", "A patient has a confirmed PSA increase greater than 1.4 ng/mL above baseline during the first year.", "Arrange urologic evaluation while reassessing therapy.", "Current endocrine guidance identifies this change as a reason for urologic consultation."),
  c("estrogen route and hepatic exposure", "estrogen-progestogen-foundations", "Oral estrogen produces greater first-pass hepatic exposure than transdermal estradiol and can more strongly affect hepatic protein synthesis.", "Choose the molecule and route from the indication, patient risk, desired exposure, and condition-specific guidance rather than assuming equal systemic effects.", "Treating oral and transdermal estrogen as pharmacologically interchangeable can hide route-dependent thrombotic, lipid, and binding-protein effects.", "A patient considering menopausal hormone therapy asks whether oral estrogen and transdermal estradiol have identical first-pass hepatic effects.", "Compare route-specific benefits and risks using the relevant condition guideline before selecting therapy.", "Avoiding gastrointestinal absorption and first-pass hepatic delivery changes the exposure pattern of transdermal estradiol."),
  c("endometrial protection", "estrogen-progestogen-foundations", "Systemic estrogen can drive endometrial proliferation when the uterus is present, and a progestogen can provide opposition.", "Determine uterus status and regimen before selecting systemic estrogen therapy.", "Ignoring the endometrium during prolonged unopposed systemic estrogen exposure creates avoidable hyperplasia risk.", "A patient with an intact uterus is considering prolonged systemic estrogen therapy.", "Assess the need for an endometrial-protective progestogen regimen.", "Progestogen opposition reduces unrestrained estrogen-driven endometrial stimulation."),
  c("GnRH agonist flare", "pathway-directed-therapy", "A continuous GnRH agonist initially increases gonadotropins and gonadal steroids before desensitization suppresses them.", "Plan for flare when the clinical indication makes transient hormone stimulation consequential.", "Expecting immediate suppression from an agonist can leave a vulnerable patient unprotected during the first phase.", "Testosterone rises transiently after the first depot GnRH agonist dose.", "Recognize the expected flare before chronic suppression develops.", "Agonists stimulate the receptor before continuous exposure desensitizes it."),
  c("GnRH antagonist suppression", "pathway-directed-therapy", "A GnRH receptor antagonist directly lowers LH and FSH without an agonist flare.", "Choose direct antagonism when rapid suppression without transient stimulation is important and the indication supports it.", "Adding flare prophylaxis automatically to every antagonist confuses its mechanism with agonist therapy.", "A patient requires prompt gonadal suppression without an initial testosterone rise.", "Use an appropriate GnRH antagonist strategy.", "Direct receptor blockade avoids the stimulation phase of an agonist."),
  c("AndroGel pump dose", "testosterone-formulations", "Product-specific pump output determines the dose.", "Distinguish priming from treatment.", "Count discarded priming gel as a dose.", "After correctly priming a new AndroGel 1.62% pump, a patient is prescribed 40.5 mg each morning.", "Use two pump actuations for the prescribed daily dose.", "Each actuation supplies 20.25 mg; two supply 40.5 mg. The three discarded initial priming actuations are separate."),
  c("AndroGel bathing interval", "testosterone-formulations", "Absorption instructions vary by product.", "Follow the labeled bathing interval.", "Wash off shortly after application.", "A patient using AndroGel 1.62% plans to shower 30 minutes after application.", "Wait at least two hours after application before showering.", "The selected product requires at least two hours before swimming, showering or washing the application area."),
  c("free testosterone assay choice", "hypogonadism-diagnosis", "Assay method matters.", "Use an accurate free-testosterone method.", "Use an inaccurate direct analog assay.", "A symptomatic patient with altered SHBG needs free-testosterone assessment. The order specifies a direct analog immunoassay.", "Request equilibrium dialysis or a validated calculation using total testosterone, SHBG and albumin.", "The Endocrine Society advises against direct analog free-testosterone immunoassays because they are inaccurate."),
  c("requested label revision", "testosterone-safety", "Regulatory requests are not universal product implementation.", "Read the current product label and assess the patient.", "Assume every restriction has already disappeared.", "A patient reads the June 2026 FDA request and concludes that every testosterone label now permits use without prostate evaluation.", "Explain that the request does not establish universal implementation or remove the need for assessment and monitoring.", "FDA requested revisions; current product instructions and individualized evaluation still matter. Long-term prostate safety is not established by the announcement."),
  c("Aveed observation", "testosterone-formulations", "Observation applies to every injection.", "Remain in the certified setting.", "Assume prior tolerance removes the risk.", "After a third uneventful Aveed injection, a patient asks to leave immediately.", "Remain for the required 30-minute observation.", "Pulmonary oil microembolism and anaphylaxis may occur after any injection, so prior tolerance does not remove observation."),
  c("Jatenzo sampling", "testosterone-formulations", "Sampling depends on the product.", "Use the post-dose time.", "Use gel trough timing.", "After ten days on unchanged Jatenzo, a patient takes the morning dose with breakfast at 8 AM.", "Arrange the dose-adjustment blood draw at 2 PM.", "Jatenzo uses a six-hour post-morning-dose sample after at least seven days on the dose; 8 AM plus six hours is 2 PM."),
  c("Jatenzo hematocrit interval", "testosterone-safety", "Product-specific intervals can be more frequent.", "Follow the selected product label.", "Apply annual monitoring to every product.", "A patient stable on Jatenzo is offered hematocrit testing only once yearly.", "Use the product-specific schedule of approximately every three months.", "The oral product requires more frequent hematocrit surveillance than the general annual maintenance schedule."),
];

const caseDistractors = [
  [
    "Assume continuous exposure keeps LH and FSH permanently high.",
    "Diagnose gonadal autonomy from low gonadotropins alone.",
    "Interpret the fall as direct destruction of gonadal cells."
  ],
  [
    "Classify the pattern as isolated hypothalamic suppression.",
    "Assume high LH proves excess testosterone action.",
    "Dismiss low testosterone because the pituitary is responding."
  ],
  [
    "Predict increased Leydig testosterone despite loss of LH signaling.",
    "Assign LH its principal action in Sertoli cells.",
    "Expect only granulosa aromatase to change."
  ],
  [
    "Rule out a male factor because serum testosterone is normal.",
    "Use testosterone alone as a complete semen-function test.",
    "Assume azoospermia always reflects low circulating testosterone."
  ],
  [
    "Start testosterone to increase intratesticular testosterone directly.",
    "Assume a normal serum level guarantees sperm production.",
    "Use a larger testosterone dose to preserve gonadotropins."
  ],
  [
    "Predict increased estradiol synthesis from the same substrate.",
    "Expect aromatase to convert estradiol back to androgen.",
    "Assume theca cells completely replace granulosa aromatization."
  ],
  [
    "Expect estradiol feedback to remain exclusively negative.",
    "Predict an FSH-independent progesterone surge before ovulation.",
    "Assume high estradiol permanently shuts down every LH pulse."
  ],
  [
    "Interpret any progesterone rise as proof of pregnancy.",
    "Compare only with an early follicular reference interval.",
    "Conclude that the corpus luteum is inactive."
  ],
  [
    "Predict isolated DHT loss with every other steroid preserved.",
    "Expect estradiol synthesis to bypass cholesterol completely.",
    "Predict increased pregnenolone despite blocked cholesterol delivery."
  ],
  [
    "Predict direct estrogen-receptor blockade.",
    "Require serum testosterone to become undetectable.",
    "Expect greater conversion of testosterone to DHT."
  ],
  [
    "Describe the drug as a direct estrogen-receptor antagonist.",
    "Predict increased conversion of androgen to estrogen.",
    "Assume estrogen feedback cannot change."
  ],
  [
    "Exclude androgen resistance because the hormone is normal.",
    "Assume receptor function is irrelevant at normal concentrations.",
    "Predict normal transcription despite loss of the required receptor function."
  ],
  [
    "Call the drug a full estrogen agonist in every tissue.",
    "Assume it acts without binding estrogen receptors.",
    "Explain the pattern by elimination of all circulating estrogen."
  ],
  [
    "Diagnose deficiency solely from total testosterone.",
    "Ignore the binding-protein abnormality.",
    "Use SHBG alone as a direct measurement of androgen action."
  ],
  [
    "Start lifelong treatment from the single afternoon value.",
    "Diagnose primary failure without gonadotropin testing.",
    "Ignore acute illness as a testing confounder."
  ],
  [
    "Diagnose primary testicular failure from the normal LH.",
    "Ignore the prolactin result and prescribe immediately.",
    "Assume normal-range LH always excludes central disease."
  ],
  [
    "Start therapy before assessing the untreated apnea.",
    "Assume obesity proves irreversible testicular failure.",
    "Escalate testosterone solely to treat nonspecific fatigue."
  ],
  [
    "Convert gel milligrams directly to injection milligrams.",
    "Keep the old sampling schedule regardless of formulation.",
    "Assume all ester products have identical intervals."
  ],
  [
    "Continue contact because gel cannot transfer after application.",
    "Only wipe the child with a dry towel.",
    "Apply extra gel to compensate for transfer."
  ],
  [
    "Increase the dose to improve symptoms despite the hematocrit.",
    "Ignore hematocrit if testosterone is in range.",
    "Stop measuring hematocrit after the first normal result."
  ],
  [
    "Stop blood-pressure checks because the old boxed warning changed.",
    "Continue unchanged because hypertension is unrelated to testosterone.",
    "Increase the dose to treat the blood-pressure rise."
  ],
  [
    "Wait indefinitely because PSA changes are always harmless.",
    "Increase testosterone to normalize the PSA.",
    "Ignore the result because baseline PSA was normal."
  ],
  [
    "Treat every estrogen route as having identical hepatic exposure.",
    "Assume transdermal estrogen removes every thrombotic risk.",
    "Choose only by milligram equivalence across products."
  ],
  [
    "Ignore uterus status when selecting systemic estrogen.",
    "Assume all estrogen doses permanently protect the endometrium.",
    "Use estrogen alone specifically to prevent hyperplasia."
  ],
  [
    "Treat the initial rise as proof of permanent treatment failure.",
    "Expect an agonist to block the receptor immediately.",
    "Assume the flare persists indefinitely during continuous therapy."
  ],
  [
    "Use continuous agonism because it has no initial stimulation.",
    "Add testosterone to directly block pituitary GnRH receptors.",
    "Use a GnRH agonist and promise immediate suppression."
  ],
  ["Use only the three discarded priming actuations as treatment.", "Use four actuations because 1.62% means half-strength gel.", "Convert the dose using another brand pump."],
  ["Shower immediately because the gel dries quickly.", "Use another brand bathing interval without checking.", "Apply double the next dose to compensate for early showering."],
  ["Accept the direct analog result as the preferred method.", "Use SHBG alone as the free-testosterone result.", "Ignore all biochemical testing when symptoms are present."],
  ["Assume all prostate assessment is now unnecessary.", "Treat the request as proof of zero long-term cancer risk.", "Ignore the selected product label because its wording may differ."],
  ["Leave immediately because only the first dose requires observation.", "Replace observation with a phone call tomorrow.", "Self-administer future doses subcutaneously at home."],
  ["Draw before the morning dose using the gel schedule.", "Draw at 8:30 AM because all oral drugs peak then.", "Skip monitoring because the dose is unchanged."],
  ["Keep annual testing because all formulations use the same schedule.", "Stop hematocrit testing once symptoms improve.", "Measure only testosterone instead of hematocrit."]
];

export const gonadalHormonePharmacologyQuestionBank = concepts.map((concept, index) => {
  const answer = index % 4;
  const choices = [...caseDistractors[index]];
  choices.splice(answer, 0, concept.caseAnswer);
  return {
    id: `gonadal-case-${index + 1}`,
    conceptGroup: concept.name, lesson: concept.lesson,
    question: `${concept.caseStem} Which response is best?`,
    choices, answer, explanation: concept.why,
    reviewHref: `#${concept.lesson}`, difficulty: "application",
  };
});
