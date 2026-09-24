const c = (name, lesson, principle, action, hazard, caseStem, caseAnswer, why) => ({ name, lesson, principle, action, hazard, caseStem, caseAnswer, why });

const concepts = [
  c("Cushing disease terminology", "recognition", "Cushing disease is pituitary ACTH-driven Cushing syndrome.", "Reserve the term disease for a pituitary ACTH source.", "Calling every form of cortisol excess Cushing disease obscures the causal pathway.", "A patient has autonomous cortisol production from an adrenal adenoma.", "Describe endogenous Cushing syndrome, not Cushing disease.", "Pituitary ACTH secretion defines Cushing disease."),
  c("exogenous glucocorticoid reconstruction", "recognition", "Prescribed and hidden glucocorticoid exposure is excluded before testing for endogenous disease.", "Review oral, injected, inhaled, nasal, topical, ocular, and supplemented products.", "Ignoring nonoral products can trigger unnecessary endocrine localization.", "A patient uses high-potency skin steroid, repeated joint injections, and an inhaler.", "Quantify cumulative exogenous exposure before biochemical testing.", "Multiple routes can create systemic glucocorticoid effects."),
  c("discriminating phenotype", "recognition", "Progressive proximal weakness, easy bruising, facial plethora, osteoporosis, and wide violaceous striae are more discriminating than obesity alone.", "Build pretest probability from clustered progressive catabolic findings.", "Screening every patient with isolated obesity creates many false-positive results.", "A young adult develops proximal weakness, vertebral fracture, bruising, and new diabetes.", "Proceed with validated testing for cortisol excess.", "The clustered progressive pattern has meaningful pretest probability."),
  c("late-night salivary cortisol", "biochemical-confirmation", "Late-night salivary cortisol tests loss of the normal nocturnal cortisol nadir.", "Use repeated late-night samples only when the sleep schedule supports valid interpretation; select another test when night-shift work makes the cortisol nadir unreliable.", "Using a daytime sample as a late-night test destroys its physiologic meaning.", "A night-shift worker sleeps during the day.", "Choose an appropriate alternative test with endocrine guidance rather than assuming daytime saliva is equivalent.", "Night-shift work can disrupt the cortisol nadir, so merely changing the collection clock time does not establish validity."),
  c("urine free cortisol", "biochemical-confirmation", "Twenty-four-hour urine free cortisol estimates integrated unbound cortisol excretion.", "Verify complete repeated collections and consider renal function.", "Trusting an incomplete collection can falsely lower the result.", "A patient with low creatinine clearance has a normal urine free cortisol despite high suspicion.", "Use complementary testing because urinary reliability may be reduced.", "Renal filtration and collection quality affect urine free cortisol."),
  c("dexamethasone suppression testing", "biochemical-confirmation", "Failure to suppress morning cortisol after dexamethasone can support endogenous hypercortisolism.", "Review estrogen status and CYP3A4 modifiers when interpreting the result.", "Assuming dexamethasone exposure was adequate despite a strong inducer can create a false positive.", "A patient taking a potent CYP3A4 inducer fails an overnight suppression test.", "Question dexamethasone exposure and repeat with an appropriate strategy.", "Drug metabolism can alter the feedback probe."),
  c("cyclic hypercortisolism", "biochemical-confirmation", "Cyclic disease can produce normal testing between active phases.", "Repeat appropriate tests during symptomatic periods when suspicion remains high.", "One normal result permanently excluding cyclic disease can delay diagnosis.", "Progressive Cushing features fluctuate and testing is discordant.", "Coordinate repeated expert testing during active symptoms.", "Intermittent cortisol excess requires temporal sampling."),
  c("suppressed ACTH branch", "acth-classification", "Low ACTH after confirmed hypercortisolism supports ACTH-independent adrenal cortisol production.", "Proceed to adrenal source evaluation after biochemical confirmation.", "Ordering pituitary imaging first reverses the physiologic branch.", "Repeated ACTH is suppressed in confirmed endogenous hypercortisolism.", "Localize an adrenal source.", "Autonomous adrenal cortisol suppresses hypothalamic and pituitary drive."),
  c("measurable ACTH branch", "acth-classification", "Normal or elevated ACTH after confirmed hypercortisolism supports pituitary or ectopic ACTH secretion.", "Differentiate pituitary and ectopic sources with directed testing.", "Calling measurable ACTH an adrenal-independent result misclassifies the disease.", "ACTH remains clearly elevated despite excess cortisol.", "Evaluate ACTH-dependent Cushing syndrome.", "The ACTH signal is driving adrenal cortisol output."),
  c("pituitary imaging concordance", "source-localization", "Pituitary MRI supports localization only when it fits ACTH-dependent biochemistry.", "Interpret lesion size and imaging through the full endocrine evidence.", "Treating a tiny incidental lesion as proof can misdirect surgery.", "MRI shows a 3 mm lesion but biochemical localization is discordant.", "Resolve the source before assigning pituitary causality.", "Small incidental pituitary lesions occur."),
  c("inferior petrosal sinus sampling", "source-localization", "Inferior petrosal sinus sampling can distinguish pituitary from ectopic ACTH secretion in selected unresolved cases.", "Use an experienced center when noninvasive localization is negative or discordant.", "Using the procedure before confirming ACTH-dependent hypercortisolism exposes the patient without a valid question.", "ACTH-dependent disease is confirmed but pituitary MRI is equivocal.", "Consider expert bilateral inferior petrosal sinus sampling.", "Central-to-peripheral ACTH gradients can identify a pituitary source."),
  c("ectopic ACTH tempo", "source-localization", "Rapid severe hypercortisolism, hypokalemia, and high ACTH can raise concern for ectopic secretion.", "Control cortisol urgently while performing a directed source search.", "Waiting for perfect localization despite life-threatening cortisol toxicity can be dangerous.", "A patient has severe infection, profound hypokalemia, and rapidly progressive ACTH-dependent disease.", "Begin urgent cortisol control during ectopic-source evaluation.", "Severe cortisol toxicity requires parallel treatment and localization."),
  c("infection risk", "severity-comorbidity", "Cortisol excess impairs immune defense and can blunt ordinary inflammatory signs.", "Investigate infection aggressively when clinical deterioration is unexplained.", "Reassurance from absent fever alone can miss serious infection.", "A severely hypercortisolemic patient becomes weak and confused without fever.", "Evaluate promptly for occult infection.", "Hypercortisolism can mask and worsen infection."),
  c("thrombotic risk", "severity-comorbidity", "Cushing syndrome creates a clinically important prothrombotic state.", "Assess perioperative and patient-specific thrombosis prevention needs.", "Assuming endocrine surgery eliminates immediate thrombotic risk overlooks persistent physiology.", "A patient with active Cushing syndrome is preparing for surgery.", "Include individualized venous thromboembolism prevention planning.", "Thrombotic risk can remain elevated around treatment."),
  c("cortisol mineralocorticoid effect", "severity-comorbidity", "Severe cortisol excess can overwhelm 11-beta-HSD2 and activate mineralocorticoid receptors.", "Treat potassium and blood pressure while reducing cortisol exposure.", "Correcting potassium without controlling cortisol ignores the driver.", "Hypertension and hypokalemia worsen as cortisol rises.", "Address cortisol-mediated mineralocorticoid receptor activation.", "Excess cortisol can escape prereceptor protection."),
  c("cause-directed surgery", "surgery-remission", "Resection of the ACTH- or cortisol-secreting tumor is first-line when feasible.", "Match transsphenoidal, adrenal, or ectopic-source surgery to the established cause.", "Using indefinite medication without considering curative surgery may leave the source untreated.", "A resectable ACTH-secreting pituitary tumor is localized.", "Refer for expert transsphenoidal surgery.", "Cause-directed surgery offers the best opportunity for durable remission."),
  c("postoperative hypocortisolism", "surgery-remission", "Low cortisol after successful tumor resection often supports remission and requires temporary replacement.", "Provide glucocorticoid replacement and adrenal-insufficiency education until recovery is demonstrated.", "Stopping replacement before HPA recovery can precipitate crisis.", "Cortisol is low after successful pituitary surgery.", "Begin replacement and monitor HPA recovery.", "The previously suppressed normal axis needs time to recover."),
  c("recurrence surveillance", "surgery-remission", "Cushing disease can recur years after apparent remission.", "Maintain long-term clinical and biochemical follow-up.", "Declaring permanent cure after one postoperative result can miss late recurrence.", "A patient was in remission for six years and redevelops proximal weakness and bruising.", "Repeat validated testing for recurrent hypercortisolism.", "Recurrence remains possible after prolonged remission."),
  c("azole heme coordination", "medicinal-chemistry", "An imidazole nitrogen in ketoconazole-derived therapy can coordinate steroidogenic CYP heme iron.", "Connect broad CYP binding with cortisol suppression, interaction burden, and imperfect enzyme selectivity.", "Treating azole steroidogenesis inhibition as perfectly selective can hide clinically important interactions.", "A patient receiving levoketoconazole starts a sensitive CYP substrate.", "Reassess the interaction because the same chemistry that blocks steroidogenesis can affect drug metabolism.", "Heme coordination is mechanistically useful but not confined to one adrenal CYP enzyme."),
  c("CYP11B1 pathway position", "medicinal-chemistry", "CYP11B1 catalyzes the terminal conversion of 11-deoxycortisol to cortisol.", "Predict a fall in cortisol and a rise in 11-deoxycortisol when the enzyme is inhibited.", "Expecting every steroid precursor to fall after terminal blockade reverses the pathway logic.", "Cortisol falls after osilodrostat while 11-deoxycortisol rises.", "Interpret the pattern as expected target engagement while monitoring precursor-mediated toxicity.", "Blocking a terminal step causes its immediate substrate to accumulate."),
  c("metyrapone pyridine scaffold", "medicinal-chemistry", "Metyrapone uses pyridine nitrogens to support CYP11B1 inhibition.", "Relate its nonsteroidal heterocyclic scaffold to enzyme inhibition rather than receptor agonism.", "Describing metyrapone as a replacement corticosteroid confuses enzyme inhibition with receptor activation.", "A learner assumes every Cushing medicine resembles cortisol and binds its receptor.", "Use metyrapone to show that a nonsteroidal nitrogen heterocycle can inhibit steroidogenic CYP chemistry.", "Its therapeutic action is enzyme blockade, not glucocorticoid receptor activation."),
  c("osilodrostat precursor diversion", "medicinal-chemistry", "Potent CYP11B1 inhibition can divert accumulated precursors toward mineralocorticoid and androgen pathways.", "Monitor potassium, pressure, edema, and androgenic effects alongside cortisol.", "Following cortisol alone can miss mechanism-linked precursor toxicity.", "Cortisol normalizes but hypertension, edema, and hypokalemia emerge during treatment.", "Evaluate precursor accumulation and the treatment regimen rather than assuming disease progression alone.", "The biochemical branch above CYP11B1 remains active."),
  c("mifepristone steroid receptor scaffold", "medicinal-chemistry", "Mifepristone is a steroidal antagonist at glucocorticoid and progesterone receptors.", "Connect receptor blockade with clinical cortisol antagonism and reproductive safety.", "Ignoring progesterone receptor antagonism separates pregnancy risk from the drug's core pharmacology.", "A patient who could become pregnant is being evaluated for mifepristone.", "Exclude pregnancy and plan nonhormonal contraception before treatment.", "The antagonist scaffold acts at both glucocorticoid and progesterone receptors."),
  c("receptor endpoint distinction", "medicinal-chemistry", "Synthesis inhibition is followed biochemically, while glucocorticoid receptor antagonism is followed mainly by clinical response and toxicity.", "Choose monitoring endpoints from the molecular target.", "Titrating mifepristone to normalize cortisol can drive harmful overtreatment.", "Glucose and symptoms improve during mifepristone therapy while cortisol remains high.", "Continue clinical assessment rather than using cortisol normalization as the goal.", "Receptor blockade does not stop cortisol synthesis."),
  c("historical synthesis inhibitors", "medicinal-chemistry", "Aminoglutethimide and trilostane illustrate upstream steroidogenesis inhibition but are not routine contemporary Cushing therapies.", "Use older agents to understand pathway chemistry without presenting them as preferred current treatment.", "A historical mechanism diagram should not override current treatment guidance.", "A learner selects aminoglutethimide solely because an older steroid pathway source depicts it.", "Reframe it as historical mechanism context and choose a current therapy from patient and disease factors.", "Mechanistic relevance and contemporary clinical role are different questions."),
  c("relacorilant indication boundary", "medicinal-chemistry", "Relacorilant is a selective glucocorticoid receptor antagonist, but its current US approval is an oncology indication rather than endogenous Cushing syndrome.", "Separate molecular mechanism, investigational Cushing study, and approved indication.", "Calling every approved relacorilant use Cushing treatment misstates current labeling.", "A learner sees relacorilant described as a glucocorticoid receptor antagonist approved in the United States.", "Verify the labeled indication before placing it in a Cushing treatment plan.", "Approval of a molecule for one disease does not approve it for another."),
  c("CYP11B1 inhibition", "steroidogenesis-inhibitors", "Osilodrostat and metyrapone inhibit 11-beta-hydroxylase and lower cortisol synthesis.", "Monitor cortisol, potassium, blood pressure, edema, and relevant precursor effects during titration.", "Ignoring upstream steroid accumulation can miss mechanism-based toxicity.", "Cortisol falls but hypertension and hypokalemia worsen after enzyme blockade.", "Assess precursor-driven mineralocorticoid activity and overtreatment.", "CYP11B1 blockade diverts steroid precursors."),
  c("levoketoconazole safety", "steroidogenesis-inhibitors", "Levoketoconazole inhibits steroidogenic CYP enzymes but can cause serious hepatic injury and QT prolongation.", "Review liver tests, ECG, electrolytes, and interactions before and during treatment.", "Starting despite active liver disease without risk review can cause preventable harm.", "A patient has elevated transaminases and takes several QT-prolonging drugs.", "Choose another strategy or resolve the safety constraints.", "The label requires careful hepatic and cardiac risk management."),
  c("block and replace", "steroidogenesis-inhibitors", "Block-and-replace therapy suppresses endogenous cortisol synthesis while adding physiologic glucocorticoid replacement.", "Reserve the strategy for selected severe or variable disease under experienced supervision.", "Adding replacement without confirming adequate synthesis blockade can worsen hypercortisolism.", "Rapid biochemical control is needed and cortisol varies widely despite titration.", "Consider expert block-and-replace management.", "The strategy trades fine endogenous titration for controlled replacement."),
  c("intravenous etomidate bridge", "severity-comorbidity", "Intravenous etomidate can rapidly inhibit adrenal cortisol synthesis in critically ill patients when oral therapy is not feasible.", "Use it in a closely monitored inpatient setting, usually intensive care, with expert endocrine oversight, cortisol and electrolyte monitoring, and glucocorticoid replacement readiness.", "Treating etomidate as routine outpatient therapy ignores its intravenous route, narrow titration task, and risk of profound cortisol suppression.", "A patient with life-threatening hypercortisolism is intubated and cannot receive oral medication.", "Consider monitored intravenous etomidate as a bridge while definitive control is organized.", "Its rapid parenteral steroidogenesis inhibition fills a specific critical-care gap."),
  c("pasireotide", "pituitary-receptor-therapy", "Pasireotide reduces ACTH secretion in selected pituitary Cushing disease but frequently worsens glycemia.", "Optimize and monitor glucose plus liver, gallbladder, ECG, potassium, magnesium, and cortisol status.", "Using pasireotide without a glucose plan can sharply worsen diabetes.", "A patient with uncontrolled diabetes is being considered for pasireotide.", "Improve glycemic control and reassess treatment fit before initiation.", "Hyperglycemia is a central mechanism-linked toxicity."),
  c("mifepristone monitoring", "pituitary-receptor-therapy", "Mifepristone blocks glucocorticoid action, so cortisol concentration does not measure therapeutic response or adrenal insufficiency.", "Monitor clinical response, potassium, pressure, reproductive risk, endometrial effects, QT, and interactions.", "Escalating solely because cortisol remains high can produce receptor-blockade toxicity.", "Glucose improves on mifepristone while cortisol remains elevated.", "Judge response clinically rather than targeting cortisol normalization.", "Receptor antagonism does not require reduced cortisol production."),
  c("bilateral adrenalectomy", "definitive-long-term", "Bilateral adrenalectomy rapidly controls adrenal cortisol production but creates permanent primary adrenal insufficiency.", "Provide lifelong glucocorticoid and mineralocorticoid replacement, stress dosing, and emergency education.", "Describing the operation as follow-up free ignores lifelong replacement and crisis risk.", "Medical therapy fails during life-threatening ACTH-dependent hypercortisolism.", "Consider urgent bilateral adrenalectomy within expert multidisciplinary care.", "Removing both adrenal glands is rapid and definitive for cortisol production."),
  c("post-adrenalectomy corticotroph surveillance", "definitive-long-term", "Known pituitary Cushing disease and presumed occult ectopic ACTH secretion require ACTH and pituitary imaging surveillance after bilateral adrenalectomy.", "Track corticotroph tumor progression while maintaining adrenal replacement.", "Assuming adrenal removal cures the pituitary tumor can miss aggressive progression.", "ACTH rises and pigmentation increases after bilateral adrenalectomy for Cushing disease.", "Evaluate corticotroph tumor progression.", "The upstream pituitary source remains after adrenal removal."),
];

const appliedDistractors = [
  [
    "Call it pituitary Cushing disease because cortisol is elevated.",
    "Diagnose Addison disease from the adrenal location.",
    "Exclude endogenous disease because ACTH is not the tumor source."
  ],
  [
    "Ignore all nonoral steroids.",
    "Order pituitary surgery before reconstructing exposure.",
    "Assume each local product has no systemic effect."
  ],
  [
    "Attribute every finding to obesity without further evaluation.",
    "Use a random ACTH level as the only screening test.",
    "Begin cortisol blockade before establishing the diagnosis."
  ],
  [
    "Collect daytime saliva and automatically apply midnight reference values.",
    "Use clock midnight regardless of shift schedule.",
    "Diagnose Cushing syndrome from night-shift work alone."
  ],
  [
    "Exclude disease permanently because urine cortisol is normal.",
    "Ignore renal function when choosing a cortisol test.",
    "Order adrenal surgery solely because creatinine clearance is low."
  ],
  [
    "Diagnose disease without reviewing dexamethasone exposure.",
    "Assume CYP3A4 induction increases dexamethasone exposure.",
    "Use the failed suppression test to prove a pituitary source."
  ],
  [
    "Exclude disease after one normal result between symptomatic episodes.",
    "Use imaging alone to settle discordant cortisol tests.",
    "Assume fluctuating symptoms always prove exogenous steroid use."
  ],
  [
    "Assign a pituitary source despite repeatedly suppressed ACTH.",
    "Diagnose ectopic ACTH secretion from suppressed ACTH alone.",
    "Treat ACTH as unnecessary for source classification."
  ],
  [
    "Classify this as ACTH-independent adrenal cortisol production.",
    "Assume elevated ACTH proves a pituitary tumor without localization.",
    "Ignore ectopic secretion because cortisol is high."
  ],
  [
    "Send the patient to pituitary surgery on lesion size alone.",
    "Assume every 3 mm pituitary lesion secretes ACTH.",
    "Use MRI to replace biochemical confirmation."
  ],
  [
    "Use the procedure as population screening for isolated obesity.",
    "Assume the procedure perfectly lateralizes every tumor.",
    "Assign an adrenal source solely because pituitary MRI is equivocal."
  ],
  [
    "Delay cortisol treatment until the source is perfectly localized.",
    "Treat potassium alone and ignore infection and cortisol toxicity.",
    "Assume rapid progression excludes ectopic secretion."
  ],
  [
    "Exclude infection because fever is absent.",
    "Wait for a classic inflammatory response before evaluation.",
    "Assume cortisol excess protects against infection."
  ],
  [
    "Assume surgery immediately eliminates thrombosis risk.",
    "Omit risk assessment because this is an endocrine disorder.",
    "Treat every patient with indefinite full-dose anticoagulation without assessment."
  ],
  [
    "Assume high cortisol cannot activate mineralocorticoid receptors.",
    "Treat hypokalemia as proof of cortisol deficiency.",
    "Ignore cortisol control after one potassium replacement dose."
  ],
  [
    "Use bilateral adrenalectomy as the automatic first operation.",
    "Observe without treatment until more comorbidities develop.",
    "Choose adrenal surgery solely because the adrenal glands produce cortisol."
  ],
  [
    "Stop all steroids despite postoperative hypocortisolism.",
    "Treat low cortisol as proof that surgery failed.",
    "Use fludrocortisone alone to replace cortisol action."
  ],
  [
    "Exclude recurrence because remission lasted more than five years.",
    "Assume symptoms prove recurrence without testing.",
    "End endocrine follow-up after one normal postoperative value."
  ],
  [
    "Ignore the interaction because the inhibitor is prescribed for adrenal disease.",
    "Assume CYP inhibition affects steroid hormones but never drug clearance.",
    "Increase the substrate dose automatically."
  ],
  [
    "Expect 11-deoxycortisol to fall whenever CYP11B1 is inhibited.",
    "Interpret lower cortisol as failure of enzyme inhibition.",
    "Assume the precursor has become the glucocorticoid receptor antagonist."
  ],
  [
    "Describe metyrapone as replacement cortisol.",
    "Classify every cortisol-lowering drug as a receptor agonist.",
    "Assume a nonsteroidal molecule cannot affect steroid synthesis."
  ],
  [
    "Ignore new potassium and blood-pressure abnormalities because cortisol normalized.",
    "Increase osilodrostat automatically without investigating toxicity.",
    "Treat the pattern as proof that no adrenal precursors remain."
  ],
  [
    "Use a hormonal contraceptive as the sole prevention plan.",
    "Start treatment before excluding pregnancy.",
    "Assume glucocorticoid antagonism eliminates progesterone effects."
  ],
  [
    "Escalate treatment until serum cortisol normalizes.",
    "Declare treatment failure solely from persistent cortisol elevation.",
    "Assume high serum cortisol excludes excessive receptor blockade."
  ],
  [
    "Choose the oldest diagrammed drug as preferred therapy automatically.",
    "Assume an upstream target guarantees superior safety.",
    "Ignore current availability and guidance when selecting treatment."
  ],
  [
    "Assume any US approval establishes a Cushing indication.",
    "Treat receptor selectivity as proof of regulatory approval.",
    "Ignore the indication because the mechanism is relevant."
  ],
  [
    "Ignore precursor effects because cortisol has fallen.",
    "Assume the new hypokalemia proves adrenal insufficiency alone.",
    "Escalate without assessing blood pressure or potassium."
  ],
  [
    "Start immediately and postpone liver and ECG review.",
    "Assume azole stereochemistry eliminates hepatic injury.",
    "Ignore additive QT risk because treatment lowers cortisol."
  ],
  [
    "Add replacement without confirming sufficient cortisol suppression.",
    "Use block-and-replace without monitoring for adrenal insufficiency.",
    "Assume replacement removes the need for stress-dose education."
  ],
  [
    "Prescribe outpatient etomidate tablets.",
    "Wait for oral access despite life-threatening deterioration.",
    "Use an unmonitored infusion because cortisol suppression is always safe."
  ],
  [
    "Start without a glucose-monitoring plan.",
    "Assume cortisol reduction always prevents pasireotide hyperglycemia.",
    "Use uncontrolled diabetes as evidence that glycemic treatment is unnecessary."
  ],
  [
    "Increase the dose solely to normalize cortisol.",
    "Dismiss receptor-blockade toxicity whenever cortisol is elevated.",
    "Stop monitoring potassium once glucose improves."
  ],
  [
    "Promise permanent cure without hormone replacement.",
    "Perform surgery without an adrenal-crisis prevention plan.",
    "Assume removal of both adrenals removes the upstream ACTH tumor."
  ],
  [
    "Assume adrenal removal prevents pituitary tumor growth.",
    "Ignore rising ACTH because adrenal cortisol production has stopped.",
    "Stop replacement to investigate the pigmentation."
  ]
];

export const cushingSyndromeQuestionBank = concepts.map((concept, index) => {
  const answer = index % 4;
  const choices = [...appliedDistractors[index]];
  choices.splice(answer, 0, concept.caseAnswer);
  return {
    id: `cushing-${String(index + 1).padStart(2, "0")}-case`,
    question: `${concept.caseStem} Which response is best?`,
    choices, answer, rationale: concept.why,
    reviewHref: `#${concept.lesson}`, difficulty: "application",
  };
});

cushingSyndromeQuestionBank.push({
  "id": "cushing-osilodrostat-interaction",
  "question": "A strong CYP3A4 inhibitor is added to osilodrostat. What dose adjustment does its label specify?",
  "choices": [
    "Double it",
    "Halve it",
    "Always stop permanently",
    "No adjustment"
  ],
  "answer": 1,
  "rationale": "Reduced clearance increases exposure. The label specifies a 50% dose reduction.",
  "reviewHref": "#steroidogenesis-inhibitors",
  "difficulty": "clinical"
});

cushingSyndromeQuestionBank.push({
  "id": "cushing-recorlev-qtc",
  "question": "Baseline QTcF is 490 ms before planned Recorlev initiation. What is appropriate?",
  "choices": [
    "Start without monitoring",
    "Double the starting dose",
    "Do not start; the baseline QT contraindication applies",
    "Ignore QT if cortisol is high"
  ],
  "answer": 2,
  "rationale": "The labeled baseline exclusion is QTcF above 470 ms.",
  "reviewHref": "#steroidogenesis-inhibitors",
  "difficulty": "clinical"
});

cushingSyndromeQuestionBank.push({
  "id": "cushing-signifor-formulation",
  "question": "A twice-daily subcutaneous Signifor order is replaced with a depot product on the same schedule. What should the pharmacist do?",
  "choices": [
    "Clarify the formulation-specific regimen before dispensing",
    "Accept the same schedule for every formulation",
    "Use both products together",
    "Convert milligrams directly to injection frequency"
  ],
  "answer": 0,
  "rationale": "Route and release formulation determine the regimen; they are not interchangeable by schedule.",
  "reviewHref": "#pituitary-receptor-therapy",
  "difficulty": "clinical"
});

cushingSyndromeQuestionBank.push({
  "id": "cushing-korlym-rescue",
  "question": "A patient on Korlym has suspected adrenal insufficiency despite elevated cortisol. Which response is appropriate?",
  "choices": [
    "Exclude the diagnosis",
    "Increase Korlym",
    "Wait for cortisol to fall",
    "Stop Korlym and initiate urgent glucocorticoid rescue"
  ],
  "answer": 3,
  "rationale": "Serum cortisol does not measure receptor blockade. Suspected insufficiency requires prompt treatment.",
  "reviewHref": "#pituitary-receptor-therapy",
  "difficulty": "clinical"
});

cushingSyndromeQuestionBank.push({
  "id": "cushing-ipss-active-phase",
  "question": "A patient with cyclic cortisol excess is scheduled for IPSS during a currently normal biochemical phase. What needs attention?",
  "choices": [
    "Confirm active hypercortisolism before localization sampling",
    "Assume a prior abnormal test establishes current activity",
    "Use IPSS to screen for cortisol excess",
    "Infer laterality from symptoms alone"
  ],
  "answer": 0,
  "rationale": "IPSS interpretation requires active hypercortisolism; testing between active phases can mislead.",
  "reviewHref": "#source-localization",
  "difficulty": "clinical"
});

cushingSyndromeQuestionBank.push({
  "id": "cushing-cabergoline-behavior",
  "question": "A patient taking cabergoline develops new compulsive gambling. What is appropriate?",
  "choices": [
    "Dismiss it as unrelated to treatment",
    "Promptly evaluate a possible dopamine-agonist adverse effect",
    "Escalate cabergoline automatically",
    "Use cortisol alone to exclude drug toxicity"
  ],
  "answer": 1,
  "rationale": "New impulse-control behavior can occur with cabergoline and requires clinical review.",
  "reviewHref": "#pituitary-receptor-therapy",
  "difficulty": "clinical"
});
