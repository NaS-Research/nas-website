const concepts = [
  {
    name: "person-centered treatment selection",
    lesson: "noninsulin-selection-architecture",
    principle: "Drug selection should address glucose, cardiovascular, kidney, heart-failure, weight, liver, hypoglycemia, burden, access, and personal goals as separate but interacting domains.",
    action: "Name the dominant treatment objective, then compare efficacy, outcome evidence, organ function, adverse effects, route, schedule, cost, and preference.",
    hazard: "Selecting therapy only from the current A1C can leave an independent heart, kidney, or weight indication untreated.",
    caseStem: "A patient with type 2 diabetes has A1C at goal but established ASCVD and albuminuric CKD.",
    caseAnswer: "Consider therapies with demonstrated cardiovascular and kidney benefit despite the near-target A1C.",
    why: "Modern diabetes pharmacotherapy treats clinical outcomes directly rather than using A1C as the only decision variable.",
  },
  {
    name: "severe hyperglycemia and insulin need",
    lesson: "noninsulin-selection-architecture",
    principle: "Symptoms, catabolism, crisis, A1C above 10 percent, or glucose at least 300 mg/dL can require insulin rather than slow serial noninsulin escalation.",
    action: "Assess ketones, acid-base status, hydration, catabolism, symptoms, and insulin deficiency before adding another modest noninsulin drug.",
    hazard: "Delaying insulin in severe metabolic decompensation can allow ketoacidosis, hyperosmolar illness, dehydration, and tissue catabolism to progress.",
    caseStem: "A patient has polyuria, weight loss, glucose of 356 mg/dL, and ketones while taking two oral agents.",
    caseAnswer: "Evaluate urgently for hyperglycemic crisis and initiate insulin-based treatment rather than routine outpatient oral escalation.",
    why: "Severe insulin deficiency and metabolic crisis need rapidly titratable insulin and stabilization.",
  },
  {
    name: "metformin mechanism and titration",
    lesson: "metformin-pharmacotherapy",
    principle: "Metformin primarily reduces hepatic glucose production and improves insulin sensitivity without directly forcing beta-cell insulin release.",
    action: "Start at a low dose with food and titrate gradually, using an extended-release formulation when it improves tolerance and fits the label.",
    hazard: "Starting at the maximum dose on an empty stomach can create avoidable gastrointestinal intolerance and early discontinuation.",
    caseStem: "A patient stopped immediate-release metformin after diarrhea began during rapid dose escalation.",
    caseAnswer: "After excluding a contraindication, consider slower titration with meals and an appropriate extended-release formulation.",
    why: "Gastrointestinal tolerability often improves with gradual exposure and formulation adjustment.",
  },
  {
    name: "metformin kidney and contrast safety",
    lesson: "metformin-pharmacotherapy",
    principle: "Metformin is contraindicated below eGFR 30 mL/min/1.73 m2 and initiation is not recommended from eGFR 30 to 45 under current labeling.",
    action: "Reassess continued use if eGFR falls below 45 and interrupt for selected contrast studies or acute conditions that raise accumulation and hypoxia risk.",
    hazard: "Continuing metformin through acute kidney injury, shock, and hypoxia can increase accumulation and lactic-acidosis risk.",
    caseStem: "A patient taking metformin develops sepsis, hypotension, hypoxia, and an abrupt creatinine rise.",
    caseAnswer: "Hold metformin during the unstable illness and reconsider restart only after clinical and kidney recovery.",
    why: "Major hypoxia and impaired clearance create the physiologic setting in which metformin accumulation becomes dangerous.",
  },
  {
    name: "metformin vitamin B12 and lactic-acidosis monitoring",
    lesson: "metformin-pharmacotherapy",
    principle: "Long-term metformin can reduce vitamin B12 absorption, while lactic acidosis remains rare but serious in accumulation and physiologic stress.",
    action: "Assess B12 when anemia, neuropathy, malabsorption, or prolonged exposure raises concern and educate about urgent systemic symptoms.",
    hazard: "Attributing new neuropathy automatically to diabetes can miss treatable vitamin B12 deficiency during chronic metformin therapy.",
    caseStem: "A long-term metformin user develops macrocytic anemia and worsening symmetric sensory symptoms.",
    caseAnswer: "Evaluate vitamin B12 status rather than assuming every neurologic symptom is diabetic neuropathy.",
    why: "Metformin-associated B12 deficiency can contribute to anemia and neurologic injury and is treatable.",
  },
  {
    name: "SGLT2 renal mechanism and outcome benefit",
    lesson: "sglt2-inhibitor-pharmacotherapy",
    principle: "SGLT2 inhibition increases urinary glucose and sodium excretion, while heart-failure and kidney benefits can persist even when glucose lowering declines with eGFR.",
    action: "Match the chosen product to its glucose, heart-failure, CKD, or cardiovascular indication and assess renal function and volume before use.",
    hazard: "Stopping an SGLT2 inhibitor solely because the A1C effect is smaller at low eGFR can discard cardiorenal benefit when current guidance supports continued use.",
    caseStem: "A patient with CKD has modest glucose response to an SGLT2 inhibitor but stable tolerance and a product-specific kidney indication.",
    caseAnswer: "Evaluate continued therapy through kidney outcome benefit and labeling rather than glucose response alone.",
    why: "Glycemic efficacy and cardiorenal outcome efficacy do not decline in parallel.",
  },
  {
    name: "SGLT2 ketoacidosis and procedure interruption",
    lesson: "sglt2-inhibitor-pharmacotherapy",
    principle: "SGLT2-associated ketoacidosis can occur without extreme hyperglycemia and is promoted by fasting, surgery, illness, dehydration, low carbohydrate intake, alcohol, and insulin deficiency.",
    action: "Use product-specific preprocedure holds, assess ketones and acid-base status when symptoms occur, and restart only after stability and oral intake return.",
    hazard: "Excluding ketoacidosis because glucose is below 250 mg/dL can delay treatment of an SGLT2-associated emergency.",
    caseStem: "Two days after surgery, an SGLT2-treated patient has vomiting, dyspnea, anion-gap acidosis, and glucose of 184 mg/dL.",
    caseAnswer: "Treat this as possible SGLT2-associated ketoacidosis and evaluate ketones immediately.",
    why: "The class can shift ketoacidosis toward lower glucose concentrations, so acid-base and ketone evidence is decisive.",
  },
  {
    name: "SGLT2 volume and genitourinary safety",
    lesson: "sglt2-inhibitor-pharmacotherapy",
    principle: "Osmotic diuresis and natriuresis can contribute to volume depletion, while glucosuria increases genital mycotic infection risk.",
    action: "Correct volume depletion, review diuretics and blood pressure, counsel on genital symptoms, and escalate serious urinary or perineal infection urgently.",
    hazard: "Adding an SGLT2 inhibitor to aggressive diuresis without volume review can worsen hypotension, falls, and kidney perfusion.",
    caseStem: "An older adult on a loop diuretic develops orthostasis and a creatinine increase shortly after SGLT2 initiation.",
    caseAnswer: "Assess volume status and the entire diuretic and hemodynamic plan before assuming intrinsic kidney toxicity.",
    why: "The combined natriuretic and diuretic burden can reduce effective circulating volume.",
  },
  {
    name: "GLP-1 and dual GIP/GLP-1 mechanism and titration",
    lesson: "glp1-gip-pharmacotherapy",
    principle: "GLP-1-based therapy increases glucose-dependent insulin, reduces inappropriate glucagon, slows gastric emptying to varying degrees, and increases satiety.",
    action: "Begin with the product's initiation dose and titrate no faster than labeling permits, delaying escalation when gastrointestinal intake or hydration is impaired.",
    hazard: "Rapidly escalating through persistent vomiting can cause dehydration, kidney injury, malnutrition, and avoidable treatment discontinuation.",
    caseStem: "A patient has persistent nausea and poor intake after the first GLP-1 dose increase but is scheduled for another increase today.",
    caseAnswer: "Delay escalation and reassess symptoms, hydration, nutrition, and serious gastrointestinal or gallbladder causes.",
    why: "Dose escalation is designed around tolerability, and persistent symptoms signal that the next increase is not yet safe.",
  },
  {
    name: "GLP-1-based contraindications and serious safety",
    lesson: "glp1-gip-pharmacotherapy",
    principle: "Current semaglutide and tirzepatide labeling contraindicates use with personal or family medullary thyroid carcinoma or MEN 2 and warns about several serious gastrointestinal and procedural risks.",
    action: "Screen the exact product label for MTC and MEN 2, pancreatitis, gallbladder disease, retinopathy context, severe gastrointestinal symptoms, dehydration, and anesthesia planning.",
    hazard: "Using a product despite a personal history of medullary thyroid carcinoma conflicts with current boxed-warning contraindications.",
    caseStem: "A patient seeking tirzepatide reports a prior medullary thyroid carcinoma.",
    caseAnswer: "Do not use tirzepatide because the history meets a labeled contraindication.",
    why: "The current product label explicitly contraindicates use with personal or family MTC or MEN 2.",
  },
  {
    name: "GLP-1 product instructions and DPP-4 redundancy",
    lesson: "glp1-gip-pharmacotherapy",
    principle: "Daily, weekly, injectable, and oral GLP-1 products have distinct food, water, timing, missed-dose, device, and interaction instructions.",
    action: "Teach the exact formulation and stop a DPP-4 inhibitor when GLP-1-based therapy is used because the combination adds no meaningful glucose lowering.",
    hazard: "Applying one missed-dose or administration rule to every semaglutide or GLP-1 product can cause incorrect dosing or absorption.",
    caseStem: "A patient begins weekly semaglutide while continuing sitagliptin because both were listed as diabetes medicines.",
    caseAnswer: "Discontinue the DPP-4 inhibitor unless an unusual specialist rationale exists because the incretin combination is redundant.",
    why: "DPP-4 and GLP-1-based therapies overlap mechanistically without clinically useful added glucose lowering.",
  },
  {
    name: "DPP-4 inhibitor differentiation",
    lesson: "dpp4-inhibitor-pharmacotherapy",
    principle: "DPP-4 inhibitors offer modest, weight-neutral glucose lowering with low intrinsic hypoglycemia but differ in renal dosing, interactions, and heart-failure warnings.",
    action: "Dose sitagliptin, saxagliptin, and alogliptin by kidney function while recognizing that linagliptin generally requires no renal adjustment.",
    hazard: "Using a full renal-cleared DPP-4 dose in advanced CKD can increase exposure and adverse-effect risk.",
    caseStem: "A patient with advanced CKD needs a modest oral add-on and cannot reliably manage dose changes across kidney decline.",
    caseAnswer: "Linagliptin may simplify renal dosing if its efficacy, coverage, and other safety factors fit.",
    why: "Linagliptin is primarily eliminated through nonrenal pathways and generally does not require eGFR-based dose reduction.",
  },
  {
    name: "DPP-4 heart failure and uncommon adverse effects",
    lesson: "dpp4-inhibitor-pharmacotherapy",
    principle: "Saxagliptin and alogliptin carry heart-failure warnings, and the class has reported pancreatitis, severe arthralgia, hypersensitivity, and bullous pemphigoid.",
    action: "Use outcome-directed alternatives for heart failure and evaluate blistering skin disease, severe joint pain, or pancreatitis symptoms promptly.",
    hazard: "Treating a new tense blistering eruption as routine dry skin can delay recognition of DPP-4-associated bullous pemphigoid.",
    caseStem: "A patient taking sitagliptin develops tense bullae and erosions without an obvious contact trigger.",
    caseAnswer: "Evaluate urgently for bullous pemphigoid and reassess the DPP-4 inhibitor.",
    why: "Bullous pemphigoid is a recognized serious class safety signal requiring direct evaluation.",
  },
  {
    name: "sulfonylurea mechanism and hypoglycemia",
    lesson: "insulin-secretagogue-pharmacotherapy",
    principle: "Sulfonylureas close beta-cell KATP channels and stimulate insulin secretion with less dependence on current glucose, producing hypoglycemia and weight gain.",
    action: "Review meals, kidney and liver function, alcohol, cognition, driving, glucose monitoring, and rescue capacity before and after use.",
    hazard: "Continuing glyburide in an older adult with declining kidney function can cause prolonged recurrent hypoglycemia.",
    caseStem: "An older adult with CKD has repeated overnight lows while taking glyburide.",
    caseAnswer: "Stop or replace the high-risk secretagogue rather than simply adding bedtime calories.",
    why: "Glyburide and its active metabolites can produce prolonged hypoglycemia, particularly with impaired clearance.",
  },
  {
    name: "meglitinide meal timing and interactions",
    lesson: "insulin-secretagogue-pharmacotherapy",
    principle: "Meglitinides are rapid, short-acting secretagogues taken with meals, so the dose generally follows whether the meal occurs.",
    action: "Skip the corresponding dose when a meal is skipped and avoid repaglinide with gemfibrozil.",
    hazard: "Taking repaglinide during fasting or with gemfibrozil can create preventable severe hypoglycemia.",
    caseStem: "A patient taking repaglinide is prescribed gemfibrozil for triglycerides.",
    caseAnswer: "Avoid the combination and select a safer lipid or glucose strategy.",
    why: "Gemfibrozil substantially increases repaglinide exposure and hypoglycemia risk.",
  },
  {
    name: "thiazolidinedione mechanism and delayed effect",
    lesson: "thiazolidinedione-pharmacotherapy",
    principle: "Pioglitazone activates PPAR-gamma to alter gene transcription and improve insulin sensitivity over weeks rather than hours.",
    action: "Allow adequate time to assess glycemic response while monitoring weight, edema, and concurrent therapy instead of daily dose chasing.",
    hazard: "Escalating pioglitazone every few days because glucose has not changed ignores its delayed transcriptional effect and increases toxicity.",
    caseStem: "A patient has taken pioglitazone for five days without an appreciable A1C change and asks to double the dose immediately.",
    caseAnswer: "Explain the delayed onset and follow the labeled titration and monitoring plan rather than rapidly escalating.",
    why: "Gene-transcription effects develop gradually and cannot be judged from a few days of A1C or glucose data.",
  },
  {
    name: "pioglitazone heart-failure and long-term risks",
    lesson: "thiazolidinedione-pharmacotherapy",
    principle: "Pioglitazone can cause fluid retention, heart-failure worsening, weight gain, fractures, macular edema, hepatic injury, and bladder concerns.",
    action: "Avoid initiation in NYHA III or IV heart failure and monitor edema, weight, dyspnea, bone, vision, liver symptoms, and bladder history.",
    hazard: "Treating new edema and orthopnea only with more diuretic while continuing the causative insulin sensitizer can worsen heart failure.",
    caseStem: "A patient develops rapid weight gain, ankle edema, and orthopnea two weeks after pioglitazone initiation.",
    caseAnswer: "Evaluate for drug-related fluid retention and heart failure and reassess pioglitazone immediately.",
    why: "Fluid retention is a mechanism-based toxicity that can precipitate or worsen heart failure.",
  },
  {
    name: "alpha-glucosidase inhibitor use",
    lesson: "other-noninsulin-agents",
    principle: "Acarbose and miglitol delay intestinal carbohydrate digestion and must be taken with the first bite of each main meal.",
    action: "Counsel about gastrointestinal effects and use glucose rather than sucrose to treat hypoglycemia caused by concomitant insulin or secretagogues.",
    hazard: "Treating a low with table sugar alone can delay recovery because alpha-glucosidase inhibition slows sucrose breakdown.",
    caseStem: "A patient taking acarbose and insulin becomes hypoglycemic and has glucose tablets and table sugar available.",
    caseAnswer: "Use the glucose tablets for prompt treatment.",
    why: "Glucose is directly absorbable, while sucrose requires enzymatic breakdown that the medicine inhibits.",
  },
  {
    name: "pramlintide with mealtime insulin",
    lesson: "other-noninsulin-agents",
    principle: "Pramlintide replaces amylin effects but substantially increases severe hypoglycemia risk when added to mealtime insulin.",
    action: "Reduce mealtime insulin by 50 percent at initiation, monitor frequently, inject separately, and exclude gastroparesis and hypoglycemia unawareness.",
    hazard: "Starting pramlintide without reducing mealtime insulin can cause severe hypoglycemia within the early postmeal period.",
    caseStem: "A patient using mealtime insulin is about to begin pramlintide and plans to keep every insulin dose unchanged.",
    caseAnswer: "Reduce mealtime insulin by 50 percent initially and use close glucose monitoring and guided retitration.",
    why: "The labeled initiation strategy reduces the known risk of severe insulin-associated hypoglycemia.",
  },
  {
    name: "colesevelam and bromocriptine-QR",
    lesson: "other-noninsulin-agents",
    principle: "Colesevelam and bromocriptine-QR provide modest glucose lowering and are useful only when their additional effects, timing, and burden fit a defined need.",
    action: "Review triglycerides, constipation, binding interactions, pill burden, morning timing, orthostasis, psychiatric context, and formulation-specific instructions.",
    hazard: "Using colesevelam in severe hypertriglyceridemia can worsen the lipid abnormality while adding high pill burden.",
    caseStem: "A patient with severe hypertriglyceridemia and chronic constipation requests colesevelam for a modest A1C reduction.",
    caseAnswer: "Choose another strategy because triglyceride and gastrointestinal risks outweigh the narrow benefit.",
    why: "Colesevelam can raise triglycerides and worsen constipation.",
  },
  {
    name: "ASCVD-directed glucose-lowering therapy",
    lesson: "cardiorenal-weight-integration",
    principle: "Established or high-risk ASCVD supports a GLP-1 receptor agonist and/or SGLT2 inhibitor with demonstrated cardiovascular benefit irrespective of A1C.",
    action: "Select a product with outcome evidence for the relevant population and continue comprehensive lipid, pressure, tobacco, antiplatelet, nutrition, and activity care.",
    hazard: "Assuming glucose control alone replaces standard vascular prevention leaves major modifiable risk untreated.",
    caseStem: "A patient with prior myocardial infarction has type 2 diabetes and A1C of 6.8 percent on metformin alone.",
    caseAnswer: "Consider an agent with demonstrated cardiovascular benefit despite the current A1C.",
    why: "Cardiovascular risk reduction is an independent indication and does not require an elevated A1C.",
  },
  {
    name: "heart-failure-directed therapy",
    lesson: "cardiorenal-weight-integration",
    principle: "Type 2 diabetes with HFrEF or HFpEF supports an SGLT2 inhibitor to reduce heart-failure hospitalization irrespective of A1C.",
    action: "Assess eGFR, volume, diuretics, blood pressure, ketoacidosis risk, and product labeling while preserving guideline-directed heart-failure therapy.",
    hazard: "Choosing pioglitazone for a person with symptomatic heart failure can worsen fluid retention while failing to provide the desired outcome benefit.",
    caseStem: "A patient with type 2 diabetes and HFrEF needs additional therapy but has recurrent congestion.",
    caseAnswer: "Prioritize an SGLT2 inhibitor with heart-failure benefit and avoid a fluid-retaining thiazolidinedione.",
    why: "The SGLT2 class has demonstrated heart-failure benefit, while thiazolidinediones can worsen congestion.",
  },
  {
    name: "CKD-directed glucose-lowering therapy",
    lesson: "cardiorenal-weight-integration",
    principle: "CKD therapy integrates eGFR, albuminuria, progression risk, glucose need, and product-specific kidney evidence rather than relying on A1C alone.",
    action: "Layer kidney-protective therapy with blood-pressure and renin-angiotensin management while monitoring volume, potassium, eGFR, and albuminuria.",
    hazard: "Using a declining glycemic effect as proof of absent kidney benefit can lead to premature loss of protective treatment.",
    caseStem: "A patient with albuminuric CKD has eGFR decline and less glucosuria on an SGLT2 inhibitor but remains within the product's kidney indication.",
    caseAnswer: "Evaluate continued kidney-protective use through current evidence and labeling rather than A1C response alone.",
    why: "Cardiorenal effects remain clinically relevant even as glucose-lowering potency diminishes with lower filtration.",
  },
  {
    name: "weight, HFpEF, and metabolic liver goals",
    lesson: "cardiorenal-weight-integration",
    principle: "Weight and metabolic liver disease are independent treatment goals that can direct selection toward high-efficacy GLP-1-based or other evidence-supported therapy.",
    action: "Match the exact product and population evidence to obesity, symptomatic HFpEF, or MASLD and MASH while monitoring nutrition, tolerability, and fibrosis risk.",
    hazard: "Using a low-efficacy weight-gaining agent without considering obesity, HFpEF, or liver goals can work against the dominant treatment objective.",
    caseStem: "A patient with type 2 diabetes, obesity, and symptomatic HFpEF needs greater glucose and weight control.",
    caseAnswer: "Consider dual GIP/GLP-1 or GLP-1 therapy with demonstrated HFpEF and weight benefit alongside heart-failure care.",
    why: "Current ADA guidance recognizes selected GLP-1-based therapy for obesity with symptomatic HFpEF irrespective of A1C.",
  },
  {
    name: "rational combination and deintensification",
    lesson: "combination-deintensification-special-settings",
    principle: "Each drug in a combination should add complementary glycemic or outcome value that exceeds its adverse effects, hypoglycemia, cost, and burden.",
    action: "Remove DPP-4 and GLP-1 redundancy and reduce secretagogue or insulin exposure when a stronger low-hypoglycemia therapy is added.",
    hazard: "Stacking every previous medicine indefinitely can preserve hypoglycemia, weight gain, cost, and burden after its value has disappeared.",
    caseStem: "A patient on metformin, glipizide, sitagliptin, and basal insulin starts tirzepatide and develops recurrent lows.",
    caseAnswer: "Stop sitagliptin and reassess glipizide and insulin doses while monitoring the new regimen.",
    why: "The DPP-4 inhibitor is redundant, and the hypoglycemia-producing therapies require active dose review.",
  },
  {
    name: "transition, procedure, and access planning",
    lesson: "combination-deintensification-special-settings",
    principle: "Fasting, surgery, contrast, acute illness, missed meals, dehydration, and loss of access require a written medication hold and restart plan.",
    action: "Specify which drugs pause, when they pause, monitoring and ketone triggers, backup therapy, and the clinical criteria for restart.",
    hazard: "A vague instruction to stop all diabetes medicines can produce hyperglycemia, while continuing all agents can cause ketoacidosis, hypoglycemia, or accumulation.",
    caseStem: "A patient taking metformin, empagliflozin, and glipizide is scheduled for surgery with prolonged fasting.",
    caseAnswer: "Create an agent-specific plan for SGLT2 hold timing, meal-linked secretagogue interruption, metformin context, glucose monitoring, and restart criteria.",
    why: "Each class creates a different fasting or procedure risk, so one universal instruction is unsafe.",
  },
  {
    name: "diabetes self-management support with pharmacotherapy",
    lesson: "noninsulin-selection-architecture",
    principle: "Nutrition, physical activity, glucose monitoring when indicated, and diabetes self-management education remain active parts of treatment after medication begins.",
    action: "Pair medication selection with an achievable nutrition, activity, monitoring, access, and follow-up plan that reflects the person's priorities and resources.",
    hazard: "Presenting medication as a replacement for education and self-management can leave the patient unable to recognize adverse effects, missed-dose problems, or changing glucose patterns.",
    caseStem: "A patient receives three new diabetes prescriptions but no plan for meals, monitoring, sick days, or follow-up.",
    caseAnswer: "Add structured diabetes self-management support and a practical monitoring and follow-up plan rather than treating the prescriptions as a complete intervention.",
    why: "Medication works within daily behavior, access, monitoring, and self-management, so treatment design must include all of them.",
  },
  {
    name: "fasting and postprandial pattern selection",
    lesson: "noninsulin-selection-architecture",
    principle: "Fasting and postprandial glucose patterns can identify the remaining glycemic gap, but they do not replace outcome, safety, and comorbidity priorities.",
    action: "Review paired glucose or CGM patterns, then choose a complementary mechanism while preserving therapies needed for cardiovascular, kidney, heart-failure, or weight benefit.",
    hazard: "Choosing solely from one postmeal value can ignore hypoglycemia, overnight patterns, kidney function, and independent cardiorenal indications.",
    caseStem: "A patient has near-target fasting glucose but repeated postmeal excursions while taking a therapy that is required for heart-failure benefit.",
    caseAnswer: "Preserve the outcome-directed therapy and add or adjust a complementary strategy targeted to the postprandial pattern after reviewing the full regimen.",
    why: "Glucose pattern and outcome indication answer different questions and should be integrated rather than substituted for each other.",
  },
  {
    name: "class efficacy and weight tradeoffs",
    lesson: "noninsulin-selection-architecture",
    principle: "Noninsulin classes differ meaningfully in glucose-lowering strength, durability, weight effect, hypoglycemia risk, route, and outcome evidence.",
    action: "Estimate the glucose and weight change needed, then choose a class likely to meet both goals without unacceptable hypoglycemia, organ risk, cost, or treatment burden.",
    hazard: "Adding a modest-efficacy agent for a large glycemic gap can prolong symptomatic hyperglycemia and delay an adequately effective regimen.",
    caseStem: "A patient needs a substantial A1C reduction and clinically important weight loss but is offered a modest, weight-neutral agent solely because it is oral.",
    caseAnswer: "Reassess the efficacy and weight requirements and discuss higher-efficacy options, route preferences, safety, and access before selecting therapy.",
    why: "The expected treatment effect must be large enough to meet the defined goal, and route is only one component of that decision.",
  },
  {
    name: "scheduled efficacy and safety reassessment",
    lesson: "combination-deintensification-special-settings",
    principle: "Every initiation or dose change needs a defined interval for reassessing glucose response, adverse effects, hypoglycemia, organ function, access, burden, and continued indication.",
    action: "Document the intended contribution of the drug, the measures and symptoms to review, and the decision point for continuation, titration, substitution, or deintensification.",
    hazard: "Adding medicines without a reassessment date can preserve ineffective, unaffordable, or harmful therapy indefinitely.",
    caseStem: "A patient has accumulated five glucose-lowering medicines over two years, but no one can state which goals each drug serves or when effectiveness was last reviewed.",
    caseAnswer: "Perform structured medication reconciliation and schedule goal-based reassessment for efficacy, safety, access, and deintensification.",
    why: "A rational regimen is maintained through repeated evaluation, not only through the decision made on the day a drug is started.",
  },
];

const dimensions = [
  { key: "principle", prompt: (concept) => `Which statement best explains ${concept.name}?`, correct: "principle" },
  { key: "application", prompt: (concept) => `Which action best applies ${concept.name}?`, correct: "action" },
  { key: "safety", prompt: (concept) => `Which error creates the clearest safety problem in ${concept.name}?`, correct: "hazard" },
  { key: "case", prompt: (concept) => `${concept.caseStem} Which response is best?`, correct: "caseAnswer" },
];

const offsets = [6, 12, 18];

export const noninsulinDiabetesPharmacotherapyQuestionBank = concepts.flatMap((concept, conceptIndex) =>
  dimensions.map((dimension, dimensionIndex) => {
    const correct = concept[dimension.correct];
    const distractors = offsets.map((offset) => concepts[(conceptIndex + offset) % concepts.length][dimension.correct]);
    return {
      id: `noninsulin-diabetes-${String(conceptIndex + 1).padStart(2, "0")}-${dimension.key}`,
      question: dimension.prompt(concept),
      choices: [correct, ...distractors],
      answer: 0,
      rationale: concept.why,
      reviewHref: `#${concept.lesson}`,
      difficulty: ["foundational", "application", "advanced", "clinical"][dimensionIndex],
    };
  }),
);


// Whole source-reviewed cases retain stable IDs, keys and review links.
const verifiedMasldLifestyleCardiometabolicQuestions = {
  "noninsulin-diabetes-06-application": {
    "question": "An adult with type 2 diabetes and CKD has reduced glucose lowering from an SGLT2 inhibitor as kidney function falls. Which interpretation is best?",
    "choices": [
      "Reduced glucose lowering does not necessarily eliminate cardiorenal benefit; reassess the exact product’s indication, kidney-use criteria, volume status, and safety.",
      "Every decline in glucose lowering proves that all cardiorenal benefit has disappeared.",
      "Kidney function and volume status are irrelevant to every SGLT2 prescription.",
      "All SGLT2 products have identical indications at every level of kidney function."
    ],
    "rationale": "SGLT2 glucose-lowering efficacy declines with reduced kidney function, while benefits for selected cardiovascular and kidney outcomes can persist in studied populations. Check the chosen product and clinical context rather than equating glycemic response with every outcome."
  },
  "noninsulin-diabetes-12-application": {
    "question": "Which DPP-4 inhibitor kidney-use distinction is correct?",
    "choices": [
      "Sitagliptin, saxagliptin, and alogliptin require kidney-based dose adjustment; linagliptin does not require a renal dose adjustment.",
      "Linagliptin always requires the same renal adjustment as sitagliptin.",
      "Every DPP-4 inhibitor has identical renal elimination and adjustment rules.",
      "Renal dose adjustment establishes that the drug is a proven MASH histologic treatment."
    ],
    "rationale": "The supplied book differentiates the renal adjustment requirements, and the linagliptin label confirms no renal dosage adjustment. Linagliptin is primarily eliminated through nonrenal pathways. These pharmacokinetic distinctions do not establish a MASH treatment indication."
  },
  "noninsulin-diabetes-18-application": {
    "question": "An alert patient who can swallow develops mild hypoglycemia while using acarbose with a sulfonylurea. Which oral carbohydrate is appropriate for rapid treatment?",
    "choices": [
      "Glucose (dextrose).",
      "Sucrose, because acarbose accelerates its breakdown.",
      "Acarbose itself, because it raises glucose directly.",
      "No carbohydrate, because acarbose makes sulfonylurea-associated hypoglycemia impossible."
    ],
    "rationale": "Acarbose does not usually cause hypoglycemia alone, but concomitant insulin or a secretagogue can. Glucose is directly absorbable; sucrose requires hydrolysis that acarbose delays and is unsuitable for rapid correction. Severe hypoglycemia requires a different rescue approach."
  },
  "noninsulin-diabetes-24-application": {
    "question": "An adult with type 2 diabetes, obesity, and symptomatic HFpEF is at their A1C goal. Which treatment reasoning best reflects current ADA guidance?",
    "choices": [
      "Consider a GLP-1 or dual GIP/GLP-1 agent with demonstrated benefit for the specific HFpEF population, irrespective of A1C, while checking product-specific eligibility and tolerability.",
      "Exclude all incretin therapy solely because A1C is at goal.",
      "Assume every incretin product has identical HFpEF evidence and FDA indications.",
      "Choose a DPP-4 inhibitor’s renal dose solely as proof of improved HFpEF symptoms."
    ],
    "rationale": "ADA 2026 recommendations distinguish selected GLP-1 and dual GIP/GLP-1 therapies with demonstrated benefits for adults with type 2 diabetes, obesity, and symptomatic HFpEF. A1C does not replace the relevant outcome indication; exact product and population evidence, safety, and tolerability matter."
  }
};
for (const item of noninsulinDiabetesPharmacotherapyQuestionBank) {
  if (verifiedMasldLifestyleCardiometabolicQuestions[item.id]) Object.assign(item, verifiedMasldLifestyleCardiometabolicQuestions[item.id]);
}


// Focused selection cases preserve existing IDs, keys and review anchors.
const verifiedSelectionQuestions = {
  "noninsulin-diabetes-01-principle": {
    "question": "Which statement best describes treatment selection for a stable adult with type 2 diabetes?",
    "choices": [
      "Compare glucose and outcome goals with safety, burden, access and the person’s preferences.",
      "Use A1C alone to rank every treatment benefit.",
      "Treat route preference as sufficient evidence of cardiovascular protection.",
      "Use the same regimen for everyone who has the same A1C."
    ],
    "rationale": "A1C does not describe every outcome goal. Route and A1C cannot replace comorbidity, efficacy, safety, feasibility and shared decisions."
  },
  "noninsulin-diabetes-01-application": {
    "question": "Before choosing an add-on for a stable adult with type 2 diabetes, which assessment best supports a useful comparison?",
    "choices": [
      "Identify the treatment goal, comorbidities, organ function, safety risks, access and preferences.",
      "Choose the largest advertised A1C reduction before reviewing comorbidities.",
      "Choose solely from the lowest tablet price before reviewing safety.",
      "Choose solely from the most convenient schedule before reviewing efficacy."
    ],
    "rationale": "Efficacy, cost and schedule matter within a full assessment. Each isolated approach can miss an independent outcome goal or a safety restriction."
  },
  "noninsulin-diabetes-01-safety": {
    "question": "An adult with type 2 diabetes and HF is at A1C goal. Which decision risks leaving the HF treatment objective unaddressed?",
    "choices": [
      "Rejecting an otherwise suitable therapy with demonstrated HF benefit solely because A1C is at goal.",
      "Checking kidney function before selecting therapy.",
      "Reviewing volume status and concurrent medicines before selecting therapy.",
      "Discussing coverage and adverse effects before selecting therapy."
    ],
    "rationale": "The A1C-only exclusion ignores HF as a separate objective. Kidney, volume, medication, access and safety review help establish suitability rather than create that error."
  },
  "noninsulin-diabetes-01-case": {
    "question": "A stable adult with type 2 diabetes has A1C at goal, established ASCVD and albuminuric CKD. What is the best next treatment discussion?",
    "choices": [
      "Review suitable agents with demonstrated cardiovascular and kidney benefit despite the A1C result.",
      "Exclude outcome-directed agents until A1C rises above goal.",
      "Replace all medicines with lifestyle advice because A1C is at goal.",
      "Assume every glucose-lowering class provides equivalent kidney protection."
    ],
    "rationale": "Near-target glycemia does not resolve ASCVD or CKD risk. Select evidence-supported treatments for the population and reassess safety; neither treatment withdrawal nor class-wide equivalence follows from this A1C."
  },
  "noninsulin-diabetes-02-principle": {
    "question": "Which finding should prompt consideration of insulin in an adult with type 2 diabetes?",
    "choices": [
      "Symptomatic hyperglycemia, A1C above 10%, or glucose at least 300 mg/dL.",
      "A1C 7.1% alone in an asymptomatic person with a 7.0% goal.",
      "Preference for an oral medicine alone in a stable person.",
      "Every single above-target postmeal result, regardless of the overall pattern."
    ],
    "rationale": "ADA identifies symptoms and marked hyperglycemia as reasons to consider insulin. A small isolated gap, route preference or one postmeal value does not alone establish that need; crisis requires urgent assessment."
  },
  "noninsulin-diabetes-02-application": {
    "question": "An adult with type 2 diabetes has marked hyperglycemia and unexpected weight loss. Before routine outpatient noninsulin escalation, which assessment has priority?",
    "choices": [
      "Assess symptoms, hydration, ketones and acid-base status for metabolic decompensation.",
      "Compare tablet sizes before reviewing metabolic stability.",
      "Wait for the next routine A1C before asking about ketosis symptoms.",
      "Assume noninsulin therapy excludes severe insulin deficiency."
    ],
    "rationale": "Catabolism and marked hyperglycemia can signal insulin deficiency or crisis. Tablet convenience does not establish stability, waiting can delay care, and prior noninsulin treatment cannot exclude decompensation."
  },
  "noninsulin-diabetes-02-safety": {
    "question": "An adult with suspected DKA is waiting for treatment. Which plan creates the clearest immediate risk?",
    "choices": [
      "Postpone urgent assessment while trying another routine outpatient noninsulin add-on.",
      "Arrange urgent ketone and acid-base assessment.",
      "Assess hydration and electrolytes during urgent evaluation.",
      "Escalate to a setting able to provide crisis stabilization."
    ],
    "rationale": "Suspected DKA needs urgent assessment and stabilization. Ketone, acid-base, fluid and electrolyte evaluation and escalation support that care; a routine add-on cannot substitute for it."
  },
  "noninsulin-diabetes-02-case": {
    "question": "An adult taking two oral diabetes agents has polyuria, weight loss, glucose 356 mg/dL and ketones. Which response is best?",
    "choices": [
      "Arrange urgent evaluation for hyperglycemic crisis and insulin-based stabilization as indicated.",
      "Increase a modest-efficacy oral agent and wait three months.",
      "Exclude crisis because the person already takes two medicines.",
      "Diagnose HHS solely from the glucose value without further assessment."
    ],
    "rationale": "Symptoms, catabolism and ketones require urgent evaluation. Prior medicines do not establish stability, serial outpatient escalation can delay care, and this glucose value alone does not diagnose HHS."
  },
  "noninsulin-diabetes-27-principle": {
    "question": "Which statement correctly describes self-management support after a diabetes medicine is started?",
    "choices": [
      "Nutrition, activity, education and appropriate monitoring remain active parts of treatment.",
      "Medication eliminates the need to understand adverse effects.",
      "Every person can use the same meal and work-schedule plan.",
      "A prescription proves that the person can obtain and correctly use the medicine."
    ],
    "rationale": "The book treats lifestyle measures as essential with or without medicines. Education, feasibility and individualized support remain necessary; prescribing alone does not establish access or understanding."
  },
  "noninsulin-diabetes-27-application": {
    "question": "A person works rotating shifts and cannot reliably obtain regular meals. Which approach best supports a new diabetes regimen?",
    "choices": [
      "Adapt the medication, nutrition, monitoring and follow-up plan to the person’s resources and schedule.",
      "Use an identical fixed plan without asking about meals or shifts.",
      "Assume prescription coverage guarantees access to food.",
      "Provide the prescription without discussing how to use it during changing intake."
    ],
    "rationale": "Implementation depends on meals, schedule and resources. Insurance does not guarantee food access, and a rigid or unexplained plan can be unsuitable; shared planning makes the regimen usable."
  },
  "noninsulin-diabetes-27-safety": {
    "question": "Which omission most directly leaves a person unprepared to use a newly prescribed diabetes regimen safely?",
    "choices": [
      "Providing no education about use, adverse effects, monitoring or how to obtain help.",
      "Asking the person to explain how they will use the regimen.",
      "Discussing practical barriers to obtaining the medicine.",
      "Setting an individualized follow-up plan."
    ],
    "rationale": "Education and self-management support are part of treatment. Checking understanding, access and follow-up helps resolve those risks rather than causing them."
  },
  "noninsulin-diabetes-27-case": {
    "question": "A person receives three new diabetes prescriptions with no discussion of meals, monitoring, illness or follow-up. What should be added?",
    "choices": [
      "A practical self-management and follow-up plan matched to the person’s regimen and circumstances.",
      "An assurance that medicines replace nutrition and activity measures.",
      "A statement that the next prescription refill is sufficient safety review.",
      "The same monitoring instructions for every regimen, without checking hypoglycemia risk."
    ],
    "rationale": "Prescriptions alone leave implementation and safety gaps. Lifestyle care continues, refill timing is not a complete review, and monitoring must fit the medicines and risks."
  },
  "noninsulin-diabetes-28-principle": {
    "question": "Repeated fasting and postmeal glucose measurements serve which purpose in treatment selection?",
    "choices": [
      "They help identify a remaining glycemic pattern while outcome and safety goals are also considered.",
      "They replace the need to assess heart and kidney comorbidities.",
      "One high postmeal result proves that every current medicine is ineffective.",
      "They prove that a class has a cardiovascular outcome indication."
    ],
    "rationale": "Patterns help locate the glycemic gap. They cannot replace comorbidity assessment, establish failure from one value or prove outcome benefits."
  },
  "noninsulin-diabetes-28-application": {
    "question": "A stable person’s fasting glucose is near target but postmeal values are repeatedly high. What is the best next assessment?",
    "choices": [
      "Review repeated glucose patterns, meals, hypoglycemia and the full regimen before selecting a complementary change.",
      "Increase all glucose-lowering doses from one postmeal value.",
      "Ignore postmeal values whenever fasting glucose is near target.",
      "Stop an otherwise suitable HF-benefit therapy solely because postmeal glucose is high."
    ],
    "rationale": "Reviewing the pattern and regimen supports a focused change. A near-target fasting value does not erase postmeal excursions, one value does not justify increasing every dose, and an outcome-directed medicine can still contribute benefit."
  },
  "noninsulin-diabetes-28-safety": {
    "question": "Which approach to a remaining postmeal glucose problem most risks an incomplete treatment decision?",
    "choices": [
      "Choose solely from one postmeal value without reviewing low glucose, other patterns, organ function or outcome indications.",
      "Review repeated glucose measurements before adjusting therapy.",
      "Check whether treatment is causing low glucose.",
      "Reassess comorbidities and medication suitability."
    ],
    "rationale": "A single glucose result is insufficient for the full decision. Repeated patterns, hypoglycemia and clinical context help prevent an inappropriate or unsafe change."
  },
  "noninsulin-diabetes-28-case": {
    "question": "A stable adult has near-target fasting glucose and repeated postmeal excursions while receiving a tolerated therapy for demonstrated HF benefit. Which approach is best?",
    "choices": [
      "Reassess safety and the full regimen, preserve appropriate HF therapy, and address the postmeal gap with a complementary plan.",
      "Stop HF-directed therapy solely because postmeal glucose remains high.",
      "Ignore postmeal excursions because fasting glucose is near target.",
      "Assume the HF-benefit indication guarantees full postmeal control."
    ],
    "rationale": "Heart-failure benefit and postmeal control are different goals. Remaining excursions do not automatically cancel outcome benefit or become irrelevant; assess suitability and add complementary value."
  },
  "noninsulin-diabetes-29-principle": {
    "question": "Why should noninsulin classes be compared before selecting an add-on?",
    "choices": [
      "They differ in glycemic efficacy, weight effects, hypoglycemia, outcome evidence, safety and burden.",
      "All classes provide the same A1C reduction in every person.",
      "Oral administration establishes that a drug provides weight loss.",
      "The newest drug is always the best option irrespective of access."
    ],
    "rationale": "The book and ADA comparison distinguish class effects and clinical fit. Route, novelty and average efficacy cannot establish an identical response or replace safety and access review."
  },
  "noninsulin-diabetes-29-application": {
    "question": "A stable adult has A1C 9.1% and an individualized goal of 7.0%. Which interpretation best supports selection?",
    "choices": [
      "The 2.1-percentage-point gap supports considering combination treatment or a more potent agent after reviewing safety and outcome goals.",
      "The gap is 1.1 percentage points, so it is below the 1.5-point comparison threshold.",
      "The gap guarantees that any added oral agent will reach the goal.",
      "The A1C value alone makes insulin mandatory in every case."
    ],
    "rationale": "9.1 minus 7.0 equals 2.1 percentage points, exceeding the ADA 1.5-point efficacy discussion threshold. Responses vary, and A1C 9.1% alone does not meet the greater-than-10% insulin-consideration criterion or establish mandatory insulin."
  },
  "noninsulin-diabetes-29-safety": {
    "question": "A stable adult remains well above an individualized A1C goal. Which selection error can prolong inadequate glycemic treatment?",
    "choices": [
      "Repeatedly choosing a modest-efficacy option without comparing the required reduction or reassessing response.",
      "Comparing expected efficacy against the individualized goal.",
      "Reviewing hypoglycemia and tolerability before choosing an agent.",
      "Discussing an accessible higher-efficacy option with the person."
    ],
    "rationale": "Treatment must offer enough efficacy for the goal and be reassessed. Efficacy, safety and access comparisons support an effective plan; repeatedly ignoring the gap can delay adequate treatment."
  },
  "noninsulin-diabetes-29-case": {
    "question": "An adult needs substantial A1C reduction and weight loss but is offered a modest, weight-neutral agent solely because it is oral. What is the best response?",
    "choices": [
      "Compare higher-efficacy and weight-directed options with the person’s route preferences, safety and access.",
      "Assume every oral drug causes clinically important weight loss.",
      "Exclude higher-efficacy options without discussing the person’s preferences.",
      "Treat oral administration as proof that both treatment goals will be met."
    ],
    "rationale": "Route preference matters within a shared comparison. A modest weight-neutral option may not meet both goals; oral administration neither proves weight benefit nor resolves the efficacy requirement."
  }
};
for (const item of noninsulinDiabetesPharmacotherapyQuestionBank) {
  if (verifiedSelectionQuestions[item.id]) Object.assign(item, verifiedSelectionQuestions[item.id]);
}


// Focused metformin cases preserve existing IDs, keys and review anchors.
const verifiedMetforminQuestions = {
  "noninsulin-diabetes-03-principle": {
    "question": "Which mechanism best explains metformin’s low intrinsic hypoglycemia risk?",
    "choices": [
      "It reduces hepatic glucose output and improves insulin sensitivity without directly stimulating insulin secretion.",
      "It forces pancreatic insulin release regardless of glucose.",
      "It lowers glucose by blocking renal SGLT2.",
      "It blocks intestinal alpha-glucosidase activity."
    ],
    "rationale": "Metformin does not directly stimulate insulin secretion. Forced insulin release, renal SGLT2 blockade and intestinal alpha-glucosidase inhibition describe other glucose-lowering mechanisms, not metformin’s mechanism."
  },
  "noninsulin-diabetes-03-application": {
    "question": "An eligible adult starts the referenced metformin IR tablet at 500 mg twice daily with meals. Which titration matches its label if glucose and tolerance support escalation?",
    "choices": [
      "Increase the total daily dose by 500 mg weekly, within the 2,550 mg/day divided-dose ceiling.",
      "Increase by 500 mg every day until 2,550 mg/day.",
      "Use the adult 2,550 mg/day ceiling for every child aged 10 or older.",
      "Require 2,550 mg/day even when a lower dose meets the treatment goal."
    ],
    "rationale": "The IR adult label permits 500 mg weekly increments based on response and tolerance. Daily escalation is too rapid; the pediatric ceiling is 2,000 mg/day, and a ceiling is not a mandatory dose."
  },
  "noninsulin-diabetes-03-safety": {
    "question": "An adult taking metformin IR 1,000 mg twice daily is switching to GLUMETZA. Which prescription matches the cited GLUMETZA switching instruction?",
    "choices": [
      "GLUMETZA 2,000 mg once daily with the evening meal, after confirming suitability.",
      "GLUMETZA 2,550 mg once daily because that is the IR adult ceiling.",
      "GLUMETZA 1,000 mg twice daily because every ER formulation permits that schedule.",
      "GLUMETZA 2,000 mg once daily crushed into food."
    ],
    "rationale": "The daily IR total is 2,000 mg, within GLUMETZA’s same-total-dose once-daily switch limit. Its ceiling is not 2,550 mg; another ER product’s divided-dose option does not establish GLUMETZA dosing, and its tablets must remain whole."
  },
  "noninsulin-diabetes-03-case": {
    "question": "An adult stopped metformin IR after diarrhea during rapid escalation. There is no dehydration, AKI or other contraindication. Which response is best?",
    "choices": [
      "Reassess the regimen and consider slower titration with meals and an appropriate ER product.",
      "Restart at the maximum IR dose on an empty stomach.",
      "Crush an ER tablet to improve tolerance.",
      "Diagnose lactic acidosis solely from mild diarrhea without further assessment."
    ],
    "rationale": "Food, gradual titration and a suitable ER formulation can improve GI tolerance. Maximum-dose fasting use worsens the tolerability problem; ER tablets must remain whole, and mild diarrhea alone does not establish lactic acidosis."
  },
  "noninsulin-diabetes-04-principle": {
    "question": "Which renal decision agrees with the cited metformin labels?",
    "choices": [
      "Do not initiate at eGFR 30 to 45; reassess continued use if it later falls below 45; discontinue below 30 mL/min/1.73 m².",
      "Initiate routinely at eGFR 38 because the value is above 30.",
      "Continue at eGFR 27 whenever A1C improves.",
      "Treat every stable eGFR below 60 as a permanent contraindication."
    ],
    "rationale": "Initiation at 30 to 45 is not recommended, continued use below 45 needs benefit-risk review, and below 30 is contraindicated. Neither improved A1C nor a threshold of 60 changes those rules."
  },
  "noninsulin-diabetes-04-application": {
    "question": "A metformin user has no AKI and stable eGFR 52 mL/min/1.73 m². Under an explicitly ACR-based protocol, what does IV iodinated contrast alone require?",
    "choices": [
      "No metformin interruption or obligatory postprocedure renal recheck for this Category I situation.",
      "A universal 48-hour metformin hold because every contrast protocol is identical.",
      "Permanent discontinuation because eGFR is below 60.",
      "Hold metformin only after contrast and restart before renal reassessment."
    ],
    "rationale": "ACR Category I permits continued metformin with no AKI and eGFR at least 30 for IV iodinated contrast. FDA labeling is stricter, so the protocol must be specified. Permanent withdrawal and a postprocedure-only hold with early restart do not match this Category I guidance."
  },
  "noninsulin-diabetes-04-safety": {
    "question": "A metformin user develops sepsis, hypotension, hypoxia and an abrupt creatinine rise. Which action best addresses the immediate safety problem?",
    "choices": [
      "Hold metformin during the unstable illness and reassess clinical recovery and renal eligibility before restart.",
      "Continue metformin unchanged because it does not directly stimulate insulin.",
      "Continue at a reduced dose until the next routine kidney check.",
      "Restart on a fixed date regardless of persistent AKI or hypoxia."
    ],
    "rationale": "Sepsis, hypoxia and impaired clearance increase lactic-acidosis risk. The low intrinsic hypoglycemia risk does not resolve this risk; reduced-dose continuation can still leave accumulation risk during unstable illness, and restart depends on recovery rather than the calendar."
  },
  "noninsulin-diabetes-04-case": {
    "question": "A person’s eGFR remains 27 mL/min/1.73 m² 48 hours after an arterial catheter study. Which metformin plan is appropriate?",
    "choices": [
      "Keep metformin discontinued because persistent eGFR below 30 is a contraindication.",
      "Restart automatically because the 48-hour interval has elapsed.",
      "Restart at a lower dose because every level of renal impairment can be managed by dose reduction.",
      "Use an improving A1C as the only restart criterion."
    ],
    "rationale": "A 48-hour contrast hold is not automatic permission to restart. Persistent eGFR 27 is below the labeled contraindication threshold; dose reduction or A1C improvement cannot establish eligibility below the contraindication threshold."
  },
  "noninsulin-diabetes-05-principle": {
    "question": "Which routine monitoring schedule is specified in the cited metformin labels?",
    "choices": [
      "Hematologic testing annually and vitamin B12 every two to three years, with earlier evaluation of concerning symptoms.",
      "B12 only after ten years of exposure, regardless of anemia or sensory symptoms.",
      "A1C alone, because metformin cannot affect vitamin absorption.",
      "The same mandatory supplement dose for every user without assessment."
    ],
    "rationale": "The labels specify annual hematologic parameters and B12 every two to three years, with abnormalities managed. Symptoms warrant earlier assessment; A1C alone misses B12 effects, and this labeling does not prescribe a universal supplement dose."
  },
  "noninsulin-diabetes-05-application": {
    "question": "A prescription is for RIOMET IR solution 1,000 mg per dose. The concentration is 500 mg/5 mL. Which volume is correct?",
    "choices": [
      "10 mL, measured with the supplied product-specific dosing cup.",
      "5 mL, measured with the supplied product-specific dosing cup.",
      "20 mL, measured with the supplied product-specific dosing cup.",
      "1 mL, measured with the supplied product-specific dosing cup."
    ],
    "rationale": "500 mg divided by 5 mL equals 100 mg/mL; 1,000 mg divided by 100 mg/mL equals 10 mL. Five mL supplies 500 mg, 20 mL supplies 2,000 mg, and 1 mL supplies 100 mg."
  },
  "noninsulin-diabetes-05-safety": {
    "question": "Which statement best explains the safety review when topiramate is added to metformin?",
    "choices": [
      "Carbonic anhydrase inhibition can lower bicarbonate and increase lactic-acidosis risk with metformin.",
      "Separating the medicines by two hours eliminates the interaction.",
      "Normal baseline eGFR removes the need to reassess acid-base effects.",
      "The main concern is glucose-independent insulin release caused by metformin."
    ],
    "rationale": "Topiramate is a carbonic anhydrase inhibitor that can produce metabolic acidosis and increase metformin-associated lactic-acidosis risk; labeling advises considering more frequent monitoring. Dose separation does not remove the acid-base effect, normal baseline kidney function does not eliminate it, and metformin does not directly stimulate insulin release."
  },
  "noninsulin-diabetes-05-case": {
    "question": "A long-term metformin user develops macrocytic anemia and worsening symmetric sensory symptoms. What should be included in the evaluation?",
    "choices": [
      "Vitamin B12 status, rather than automatically assigning the symptoms to diabetic neuropathy.",
      "Waiting for the next routine B12 interval despite new symptoms.",
      "Assuming diabetes explains every anemia and sensory symptom.",
      "Treating with folic acid alone without evaluating vitamin B12 status."
    ],
    "rationale": "Metformin can lower B12, and deficiency can contribute to anemia and neurologic problems. New symptoms warrant assessment now; neither an automatic diabetes attribution nor folate alone evaluates possible B12 deficiency."
  }
};
for (const item of noninsulinDiabetesPharmacotherapyQuestionBank) {
  if (verifiedMetforminQuestions[item.id]) Object.assign(item, verifiedMetforminQuestions[item.id]);
}
