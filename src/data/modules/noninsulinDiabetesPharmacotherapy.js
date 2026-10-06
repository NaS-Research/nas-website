import { noninsulinDiabetesPharmacotherapyQuestionBank } from "@/data/questionBanks/noninsulinDiabetesPharmacotherapy";

export const noninsulinDiabetesPharmacotherapyModule = {
  slug: "noninsulin-diabetes-pharmacotherapy",
  number: "60",
  title: "Noninsulin Diabetes Pharmacotherapy",
  source: "Diabetes Therapeutics lecture, pages 38 to 70 and 105 to 114, reconciled with ADA Standards of Care in Diabetes 2026 and current FDA labeling",
  description: "Select, combine, monitor, and deintensify noninsulin glucose-lowering therapy through glycemic efficacy, cardiovascular and kidney outcomes, weight, hypoglycemia, adverse effects, access, and the person who must use the plan.",
  topics: ["Treatment selection", "Metformin", "SGLT2 inhibitors", "Incretin-based therapy", "Secretagogues", "Cardiorenal and weight strategy"],
  outcomes: [
    "Build a person-centered treatment plan that separates glucose, cardiovascular, kidney, weight, liver, and heart-failure goals.",
    "Compare mechanisms, effectiveness, administration, adverse effects, interactions, monitoring, and counseling across noninsulin drug classes.",
    "Use current kidney function, comorbidity, hypoglycemia risk, cost, and treatment burden to select and dose therapy.",
    "Apply product-specific safety rules for fasting, procedures, dehydration, gastrointestinal symptoms, and serious adverse reactions.",
    "Construct rational combinations while avoiding redundant mechanisms and preventable hypoglycemia.",
    "Recognize when insulin is required and when treatment should be simplified, reduced, or redirected.",
  ],
  submodules: [
    {
      slug: "noninsulin-selection-architecture",
      title: "Person-Centered Selection and Sequencing",
      visual: "noninsulin-selection",
      summary: "The best glucose-lowering medicine is defined by the goal it must achieve and the risks, burdens, and access constraints it introduces. A1C is one axis within a multidimensional decision.",
      concepts: ["Independent treatment goals", "Comorbidity-directed selection", "Efficacy and durability", "Hypoglycemia and weight", "Access and shared decisions"],
      application: "Name the dominant objective before choosing a class, then verify contraindications, kidney and liver function, hypoglycemia risk, weight effect, route, schedule, cost, and ability to sustain treatment.",
      lesson: [
        { heading: "Separate treatment objectives", body: "A glucose-lowering plan may need to reduce A1C, protect the kidney, reduce atherosclerotic events, prevent heart-failure hospitalization, improve obesity or metabolic liver disease, avoid hypoglycemia, or reduce burden. These objectives overlap but are not interchangeable. Cardiorenal or weight-directed therapy can be indicated irrespective of current A1C. Nutrition, physical activity, diabetes self-management education, and medication access remain part of the treatment architecture rather than preliminary steps that disappear when pharmacotherapy begins." },
        { heading: "Use comorbidity before habit", body: "Established or high-risk ASCVD supports a GLP-1 receptor agonist and/or SGLT2 inhibitor with demonstrated benefit. Heart failure supports an SGLT2 inhibitor, while symptomatic HFpEF with obesity can also support GLP-1-based therapy with demonstrated benefit. CKD selection incorporates eGFR, albuminuria, glycemic need, and current product or guideline thresholds." },
        { heading: "Match efficacy and timing to the gap", body: "Higher-efficacy GLP-1-based therapies and rational combinations are more likely to close a large glycemic gap than a low-efficacy add-on. Fasting-predominant and postprandial-predominant patterns can help explain which mechanism is most likely to close the remaining gap, but outcome indications and safety still lead the choice. Initial combination therapy can shorten time above goal. Symptoms of hyperglycemia, catabolism, crisis, A1C above 10 percent, or glucose at least 300 mg/dL can require insulin rather than serial noninsulin escalation." },
        { heading: "Make implementation part of selection", body: "Confirm coverage, out-of-pocket cost, supply, route, dexterity, cognition, schedule, food access, gastrointestinal tolerance, monitoring, and willingness. Reassess efficacy, adverse effects, hypoglycemia, burden, and adherence after initiation. A drug that cannot be obtained or continued is not an effective choice." },
      ],
      keyPoints: ["Name the treatment objective first.", "Cardiorenal benefit can be independent of A1C.", "Large glycemic gaps may require combination therapy.", "Access is a clinical variable."],
      check: { question: "Which factor should lead treatment selection in a person with type 2 diabetes and symptomatic heart failure?", choices: ["A therapy with demonstrated heart-failure benefit, considered alongside the full clinical context", "The tablet with the smallest package", "A class selected only from current A1C", "The newest product regardless of evidence or access"], answer: 0, rationale: "Heart failure is an independent treatment objective and should direct selection toward agents with demonstrated benefit.", reviewHref: "#noninsulin-selection-architecture" },
    },
    {
      slug: "metformin-pharmacotherapy",
      title: "Metformin",
      visual: "noninsulin-metformin",
      summary: "Metformin remains effective, inexpensive, familiar, and weight neutral or modestly weight lowering, but kidney thresholds, gastrointestinal tolerance, vitamin B12, hypoxic stress, and contrast context determine safe use.",
      concepts: ["Hepatic glucose production", "Renal thresholds", "Gastrointestinal titration", "Lactic acidosis risk", "Vitamin B12 and contrast"],
      application: "Use metformin when its effectiveness, cost, and safety fit the person, then titrate through gastrointestinal tolerance and reassess kidney function and interrupting conditions over time.",
      lesson: [
        { heading: "Connect mechanism to the fasting pattern", body: "Metformin primarily reduces hepatic glucose production and improves insulin sensitivity without directly forcing beta-cell insulin release. It therefore has low intrinsic hypoglycemia risk. Immediate-release and extended-release products differ in schedule and gastrointestinal tolerability, and formulations should not be assumed interchangeable milligram for milligram without checking the label." },
        { heading: "Start low and titrate with food", body: "Gradual titration reduces nausea, diarrhea, abdominal discomfort, and early discontinuation. Immediate-release metformin is commonly taken with meals, while many extended-release products are taken with the evening meal. A tablet shell can appear in stool with some extended-release systems without representing loss of the dose." },
        { heading: "Apply kidney and acute-illness safeguards", body: "Current labeling contraindicates metformin when eGFR is below 30 mL/min/1.73 m2 and does not recommend starting it when eGFR is 30 to 45. If eGFR later falls below 45, reassess benefit and risk. Temporarily interrupt treatment during selected iodinated-contrast studies and clinical states that increase hypoxia, dehydration, hemodynamic instability, or acute kidney injury risk, then restart only after stability and renal function are confirmed." },
        { heading: "Monitor what chronic use can change", body: "Long-term therapy can reduce vitamin B12 absorption, so periodic assessment is appropriate when anemia, neuropathy, malabsorption, or prolonged exposure raises concern. Lactic acidosis is rare but serious and is linked to accumulation and major physiologic stress rather than routine mild gastrointestinal symptoms. Education should distinguish common intolerance from emergency symptoms." },
      ],
      keyPoints: ["Metformin lowers hepatic glucose output.", "Titrate gradually with meals.", "Do not use below eGFR 30.", "Review B12 and interrupting illness."],
      check: { question: "What is the correct response when eGFR is 27 mL/min/1.73 m2 in a patient taking metformin?", choices: ["Discontinue metformin because current labeling contraindicates use below eGFR 30", "Double the dose because renal clearance is lower", "Continue without reviewing acute illness or kidney trajectory", "Replace kidney assessment with A1C alone"], answer: 0, rationale: "Metformin is contraindicated when eGFR is below 30 mL/min/1.73 m2.", reviewHref: "#metformin-pharmacotherapy" },
    },
    {
      slug: "sglt2-inhibitor-pharmacotherapy",
      title: "SGLT2 Inhibitors",
      visual: "noninsulin-sglt2",
      summary: "SGLT2 inhibition changes proximal-tubule glucose and sodium handling. Its glycemic, kidney, and heart-failure effects must be interpreted separately, especially as kidney function declines.",
      concepts: ["Glucosuria and natriuresis", "Heart-failure and kidney benefit", "Euglycemic ketoacidosis", "Volume and genitourinary safety", "Procedure interruption"],
      application: "Select an agent with evidence and labeling for the intended glucose, heart-failure, CKD, or cardiovascular goal, then teach hydration, genital care, sick-day risk, ketone symptoms, and procedure interruption.",
      lesson: [
        { heading: "Trace the proximal-tubule mechanism", body: "SGLT2 inhibitors reduce renal glucose and sodium reabsorption, increasing urinary glucose and modest natriuresis. Glucose lowering diminishes as eGFR declines, but kidney and heart-failure benefits can persist within current evidence and labeling. The class has low intrinsic hypoglycemia risk unless paired with insulin or a secretagogue." },
        { heading: "Use outcome evidence by indication", body: "An SGLT2 inhibitor is recommended in type 2 diabetes with heart failure, irrespective of A1C. CKD use follows eGFR, albuminuria, progression risk, and the chosen product's indications. Established cardiovascular and kidney benefits are product and population specific, so one class label should not be used as proof for every agent and outcome." },
        { heading: "Recognize ketoacidosis without extreme glucose", body: "SGLT2-associated ketoacidosis can occur with glucose below the level expected in classic DKA. Risk rises with insulin deficiency, acute illness, fasting, surgery, low-carbohydrate intake, dehydration, alcohol excess, and insulin dose reduction. Nausea, vomiting, abdominal pain, malaise, or dyspnea require ketone and acid-base assessment even when glucose is not markedly high." },
        { heading: "Prevent volume and infection complications", body: "Assess volume status, kidney function, diuretics, blood pressure, and frailty before initiation. Genital mycotic infection is common enough to counsel proactively. Serious urinary infection and necrotizing fasciitis of the perineum are uncommon but urgent. Foot and amputation risk should be reviewed through current product labeling and the individual's vascular, neuropathic, wound, and infection risk." },
        { heading: "Pause for fasting and procedures", body: "Withhold empagliflozin and several other agents for at least three days before surgery or procedures with prolonged fasting, and ertugliflozin for at least four days, when possible. Restart only after clinical stability and oral intake return and ketoacidosis risk has resolved. Acute illness may require earlier interruption and direct clinical guidance." },
      ],
      keyPoints: ["Glycemic and cardiorenal effects are distinct.", "DKA can occur without extreme glucose.", "Review volume and infection risk.", "Use agent-specific procedure holds."],
      check: { question: "A patient taking empagliflozin develops nausea, abdominal pain, and rapid breathing during prolonged fasting with glucose of 176 mg/dL. What is the priority?", choices: ["Assess for ketoacidosis despite the modest glucose elevation", "Exclude ketoacidosis because glucose is below 200 mg/dL", "Take an extra dose of empagliflozin", "Treat only for genital candidiasis"], answer: 0, rationale: "SGLT2-associated ketoacidosis can present without marked hyperglycemia and requires urgent ketone and acid-base assessment.", reviewHref: "#sglt2-inhibitor-pharmacotherapy" },
    },
    {
      slug: "glp1-gip-pharmacotherapy",
      title: "GLP-1 and Dual GIP/GLP-1 Therapy",
      visual: "noninsulin-glp1",
      summary: "GLP-1-based therapy can provide high glycemic efficacy, weight reduction, and selected cardiovascular, kidney, liver, and HFpEF benefits. Product selection and slow titration preserve those benefits through tolerability and safety.",
      concepts: ["Glucose-dependent incretin effects", "Weight and outcome benefits", "Dose escalation", "Gastrointestinal and gallbladder safety", "Product-specific administration"],
      application: "Choose the exact molecule and product for the intended indication, start at its initiation dose, titrate no faster than labeling permits, and reassess nutrition, hydration, bowel function, vision risk, and interacting oral drugs.",
      lesson: [
        { heading: "Connect incretin signaling to clinical effect", body: "GLP-1 receptor agonists enhance glucose-dependent insulin secretion, reduce inappropriate glucagon, slow gastric emptying to varying degrees, and increase satiety. Tirzepatide activates both GIP and GLP-1 receptors. Intrinsic hypoglycemia risk is low, but insulin or secretagogue doses may need reduction when glycemia improves." },
        { heading: "Select for more than A1C", body: "High-potency GLP-1 receptor agonists and dual GIP/GLP-1 therapy can produce substantial glucose and weight effects. Selected products have demonstrated cardiovascular, kidney, HFpEF, or metabolic liver benefits in defined populations. Use the evidence and approved indication for the chosen product rather than transferring every outcome across the entire class." },
        { heading: "Titrate for durability", body: "Initiation doses are often intended for tolerability rather than full glycemic effect. Increase only after the product-specific interval and delay escalation when nausea, vomiting, poor intake, dehydration, or constipation remains clinically important. Counsel on smaller meals, stopping when full, hydration, and when persistent or severe symptoms require evaluation." },
        { heading: "Screen serious and procedural risks", body: "Current semaglutide and tirzepatide labeling includes a boxed warning about thyroid C-cell tumors in rodents and contraindicates use with a personal or family history of medullary thyroid carcinoma or MEN 2. Evaluate suspected pancreatitis and gallbladder disease promptly. Severe gastrointestinal disease, dehydration-related kidney injury, diabetic retinopathy progression with rapid glycemic improvement, and aspiration risk around anesthesia require individualized planning." },
        { heading: "Teach the exact formulation", body: "Weekly injections, daily injections, and oral semaglutide have different missed-dose, food, water, timing, and device instructions. Pens must never be shared. Delayed gastric emptying can influence oral drug absorption, especially when a medication has a narrow therapeutic window or strict timing. Do not combine a DPP-4 inhibitor with GLP-1-based therapy because added glucose lowering is not meaningful." },
      ],
      keyPoints: ["Effects are glucose dependent.", "Outcome evidence is product specific.", "Titration protects tolerability.", "DPP-4 combination is not recommended."],
      check: { question: "Why is a DPP-4 inhibitor generally stopped when a GLP-1 receptor agonist is started?", choices: ["The combination adds little glucose lowering because both act through the incretin pathway", "The combination always causes type 1 diabetes", "DPP-4 inhibition prevents every GLP-1 adverse effect", "Both medicines are insulin products"], answer: 0, rationale: "Current ADA guidance does not recommend concurrent DPP-4 and GLP-1-based therapy because it does not add meaningful glucose lowering.", reviewHref: "#glp1-gip-pharmacotherapy" },
    },
    {
      slug: "dpp4-inhibitor-pharmacotherapy",
      title: "DPP-4 Inhibitors",
      visual: "noninsulin-dpp4",
      summary: "DPP-4 inhibition prolongs endogenous incretin activity with modest glucose lowering, weight neutrality, low intrinsic hypoglycemia, and important product differences in renal dosing and heart-failure warnings.",
      concepts: ["Endogenous incretin preservation", "Renal dose adjustment", "Heart-failure warnings", "Pancreatitis and arthralgia", "Bullous pemphigoid"],
      application: "Use a DPP-4 inhibitor when an oral, generally well-tolerated, weight-neutral option fits the modest glycemic need, then select by kidney function, heart-failure risk, interactions, and access.",
      lesson: [
        { heading: "Preserve endogenous incretins", body: "DPP-4 inhibitors slow degradation of endogenous GLP-1 and GIP, increasing glucose-dependent insulin secretion and reducing glucagon. Their A1C effect is generally modest, weight effect is neutral, and intrinsic hypoglycemia risk is low. They do not reproduce the pharmacologic exposure, weight reduction, or outcome profile of GLP-1 receptor agonists." },
        { heading: "Distinguish products by clearance", body: "Sitagliptin, saxagliptin, and alogliptin require kidney-based dose adjustment, while linagliptin generally does not. Verify the current eGFR and exact product before prescribing. Strong CYP3A4 or P-glycoprotein interactions can alter saxagliptin exposure and required dosing." },
        { heading: "Keep heart failure product specific", body: "Heart-failure hospitalization signals led to warnings for saxagliptin and alogliptin. In a person with heart failure, use a class with demonstrated heart-failure benefit rather than choosing DPP-4 inhibition for that objective. Do not assume a neutral glycemic drug is a cardiorenal outcome drug." },
        { heading: "Recognize uncommon class safety signals", body: "Pancreatitis, serious hypersensitivity, severe disabling arthralgia, and bullous pemphigoid have been reported. A blistering or erosive eruption requires prompt evaluation and drug review. Reduce insulin or secretagogue exposure when improved glycemia raises hypoglycemia risk." },
      ],
      keyPoints: ["Glucose lowering is modest.", "Most products need renal adjustment.", "HF warnings differ by product.", "Watch for blistering skin disease."],
      check: { question: "Which DPP-4 inhibitor generally does not require kidney-based dose adjustment?", choices: ["Linagliptin", "Sitagliptin", "Alogliptin", "Saxagliptin"], answer: 0, rationale: "Linagliptin is primarily eliminated through nonrenal pathways and generally does not require renal dose adjustment.", reviewHref: "#dpp4-inhibitor-pharmacotherapy" },
    },
    {
      slug: "insulin-secretagogue-pharmacotherapy",
      title: "Sulfonylureas and Meglitinides",
      visual: "noninsulin-secretagogues",
      summary: "Insulin secretagogues can lower glucose quickly and inexpensively, but they require functioning beta cells and trade that effect for hypoglycemia, weight gain, meal dependence, and limited cardiorenal benefit.",
      concepts: ["KATP channel closure", "Sulfonylurea duration", "Meglitinide meal timing", "Hypoglycemia prevention", "Kidney and interaction risk"],
      application: "Use a secretagogue only when cost, speed, and expected efficacy outweigh hypoglycemia and weight risks, then align the dose with meals, kidney function, and the rest of the regimen.",
      lesson: [
        { heading: "Force beta-cell secretion", body: "Sulfonylureas and meglitinides close the beta-cell ATP-sensitive potassium channel and stimulate insulin release with less dependence on current glucose than incretin-based therapy. They therefore can cause hypoglycemia and weight gain. Effectiveness declines as beta-cell reserve diminishes." },
        { heading: "Distinguish long and short exposure", body: "Second-generation sulfonylureas include glipizide, glimepiride, and glyburide. Glyburide has active metabolites and a greater prolonged-hypoglycemia concern in kidney impairment and older adults. Meglitinides act more rapidly and briefly and are dosed with meals, so a skipped meal generally means a skipped dose." },
        { heading: "Prevent predictable hypoglycemia", body: "Review meal timing, food access, alcohol, exercise, kidney and liver function, cognition, driving, and recognition of low glucose. When adding a more effective therapy, reassess and often reduce or stop the secretagogue. Recurrent hypoglycemia is a reason to change the regimen, not merely to add snacks indefinitely." },
        { heading: "Check high-impact interactions", body: "Repaglinide and gemfibrozil should not be combined because exposure and hypoglycemia can rise substantially. Other enzyme inhibitors or inducers can change secretagogue exposure. Beta blockers can alter adrenergic warning symptoms without eliminating every manifestation of hypoglycemia." },
      ],
      keyPoints: ["Secretion is less glucose dependent.", "Glyburide can cause prolonged hypoglycemia.", "Meglitinides follow meals.", "Avoid repaglinide with gemfibrozil."],
      check: { question: "A patient taking repaglinide skips lunch. What is the usual medication principle?", choices: ["Skip the corresponding repaglinide dose", "Take two doses at dinner", "Take the dose despite fasting to prevent hypoglycemia", "Replace it with glyburide for that meal"], answer: 0, rationale: "Meglitinides are meal-linked secretagogues, so a dose is generally skipped when the associated meal is skipped.", reviewHref: "#insulin-secretagogue-pharmacotherapy" },
    },
    {
      slug: "thiazolidinedione-pharmacotherapy",
      title: "Thiazolidinediones",
      visual: "noninsulin-tzd",
      summary: "Thiazolidinediones improve insulin sensitivity through nuclear-receptor signaling and can provide durable glucose lowering, but delayed onset, fluid retention, weight gain, fractures, and heart-failure risk sharply shape selection.",
      concepts: ["PPAR-gamma signaling", "Delayed clinical effect", "Fluid retention and heart failure", "Fracture and weight risk", "Pioglitazone-specific cautions"],
      application: "Consider pioglitazone when insulin sensitization, durability, affordability, and selected metabolic benefits fit, then exclude symptomatic heart failure and monitor fluid, weight, bone, eye, liver, and bladder concerns.",
      lesson: [
        { heading: "Change transcription, not acute secretion", body: "Pioglitazone activates PPAR-gamma and changes gene transcription related to adipocyte function and insulin sensitivity. It does not directly trigger insulin release and has low intrinsic hypoglycemia risk. Because the mechanism is transcriptional, full glucose effect develops over weeks rather than hours." },
        { heading: "Treat fluid retention as a mechanism", body: "Thiazolidinediones can cause sodium and fluid retention, edema, weight gain, and new or worsening heart failure. Product labeling carries a boxed heart-failure warning, and initiation is contraindicated in NYHA class III or IV heart failure. Dyspnea, rapid weight gain, orthopnea, or edema requires prompt reassessment rather than automatic diuretic escalation around the culprit." },
        { heading: "Screen long-term harms", body: "Fracture risk, particularly in women, macular edema, hepatic injury, and weight gain influence selection and follow-up. Pioglitazone labeling advises against use in active bladder cancer and requires careful benefit-risk consideration with prior bladder cancer. Improved insulin sensitivity can restore ovulation in some anovulatory patients, so reproductive counseling may be relevant." },
        { heading: "Use selected benefits without overgeneralizing", body: "Pioglitazone may be useful in selected people with metabolic liver disease or prior cerebrovascular risk based on the applicable evidence and full clinical context. These potential benefits do not erase fluid, fracture, weight, or bladder concerns. Review concurrent insulin because edema and heart-failure risk can increase." },
      ],
      keyPoints: ["Onset is delayed.", "Fluid retention is central toxicity.", "Avoid initiation in NYHA III or IV HF.", "Monitor bone, eye, liver, and bladder risk."],
      check: { question: "Which new symptom is most concerning after starting pioglitazone?", choices: ["Rapid weight gain with edema and orthopnea", "A transient metallic taste", "Mild injection-site discomfort", "A brief increase in urination from glucosuria"], answer: 0, rationale: "Pioglitazone can cause fluid retention and worsen heart failure, so rapid weight gain, edema, and orthopnea require prompt evaluation.", reviewHref: "#thiazolidinedione-pharmacotherapy" },
    },
    {
      slug: "other-noninsulin-agents",
      title: "Alpha-Glucosidase Inhibitors, Pramlintide, and Other Agents",
      visual: "noninsulin-other",
      summary: "Less frequently used agents remain valuable when their narrow mechanism, dosage form, adverse-effect profile, and cost match a specific need. Their practical instructions often determine success.",
      concepts: ["Alpha-glucosidase inhibition", "Pramlintide and mealtime insulin", "Colesevelam", "Bromocriptine-QR", "Mechanism-specific counseling"],
      application: "Use these agents for a defined reason, teach their exact timing, and avoid treating modest efficacy or unusual administration as interchangeable with higher-efficacy therapies.",
      lesson: [
        { heading: "Delay carbohydrate absorption", body: "Acarbose and miglitol inhibit intestinal alpha-glucosidases and blunt postprandial glucose when taken with the first bite of each main meal. Gas, abdominal discomfort, and diarrhea limit use. If hypoglycemia occurs from concomitant insulin or a secretagogue, treat with glucose rather than relying on sucrose, whose breakdown is delayed." },
        { heading: "Replace the amylin signal", body: "Pramlintide slows gastric emptying, suppresses postprandial glucagon, and increases satiety in people already using mealtime insulin. Initiation requires a 50 percent reduction in mealtime insulin, frequent glucose monitoring, and careful retitration. It is injected separately from insulin and is contraindicated in confirmed gastroparesis and hypoglycemia unawareness." },
        { heading: "Use colesevelam for a narrow combined goal", body: "Colesevelam can produce modest glucose and LDL lowering but can worsen triglycerides, cause constipation, and bind other medicines. Review triglycerides, bowel disease, swallowing, pill burden, and administration spacing. It is not a substitute for therapies with established high-efficacy glucose or cardiorenal outcomes." },
        { heading: "Fit bromocriptine-QR to its schedule and risks", body: "Quick-release bromocriptine is taken in the morning shortly after waking and produces modest glucose lowering through central dopaminergic mechanisms that are not fully defined. Nausea, dizziness, orthostatic hypotension, syncope, psychiatric context, and drug interactions shape use. The diabetes formulation and schedule should not be confused with other bromocriptine products." },
      ],
      keyPoints: ["Acarbose and miglitol begin with the first bite.", "Treat lows with glucose when alpha-glucosidase is blocked.", "Pramlintide requires mealtime insulin reduction.", "Other agents have narrow use cases."],
      check: { question: "How should hypoglycemia be treated in a patient taking acarbose with insulin?", choices: ["Use glucose because sucrose breakdown is delayed", "Use only table sugar because it is absorbed unchanged", "Take another acarbose dose", "Avoid treating until the next meal"], answer: 0, rationale: "Alpha-glucosidase inhibition delays sucrose digestion, so glucose is preferred for prompt treatment.", reviewHref: "#other-noninsulin-agents" },
    },
    {
      slug: "cardiorenal-weight-integration",
      title: "Cardiorenal, Weight, Liver, and HFpEF Integration",
      visual: "noninsulin-outcomes",
      summary: "Modern type 2 diabetes pharmacotherapy treats organs and outcomes directly. A near-target A1C does not remove an indication for evidence-based cardiovascular, kidney, heart-failure, weight, or liver treatment.",
      concepts: ["ASCVD risk reduction", "Heart failure", "CKD", "Obesity and HFpEF", "MASLD and MASH"],
      application: "Build an outcome map for each person, then choose products with demonstrated benefit for the exact population and continue independent risk-factor care.",
      lesson: [
        { heading: "Treat ASCVD risk irrespective of A1C", body: "In established or high-risk ASCVD, include a GLP-1 receptor agonist and/or SGLT2 inhibitor with demonstrated cardiovascular benefit. Selection still considers kidney function, heart failure, weight, adverse effects, route, and access. Glucose lowering does not replace statin, blood-pressure, tobacco, antiplatelet, nutrition, or activity care." },
        { heading: "Use SGLT2 inhibition for heart failure", body: "Type 2 diabetes with heart failure, whether reduced or preserved ejection fraction, supports an SGLT2 inhibitor to reduce heart-failure hospitalization irrespective of A1C. Assess volume status and diuretic context. In obesity with symptomatic HFpEF, selected dual GIP/GLP-1 or GLP-1 therapy with demonstrated symptom or event benefit can address an additional mechanism." },
        { heading: "Preserve kidney function as its own goal", body: "CKD treatment selection incorporates eGFR, albuminuria, progression risk, potassium, blood pressure, and existing renin-angiotensin and mineralocorticoid therapy. SGLT2 and selected GLP-1 receptor agonist benefits can extend beyond glucose. Glycemic efficacy and kidney outcome efficacy should not be assumed to decline in parallel." },
        { heading: "Treat weight and liver disease intentionally", body: "Weight is a distinct treatment outcome. High-potency GLP-1-based therapies can support substantial weight reduction when access and tolerability permit. MASLD or MASH can influence selection toward therapies with applicable evidence, but diagnosis, fibrosis risk, nutrition, physical activity, lipid care, and specialist involvement remain necessary." },
      ],
      keyPoints: ["A1C does not define every indication.", "SGLT2 inhibitors are central in HF.", "Kidney and glucose effects can diverge.", "Weight is an independent treatment goal."],
      check: { question: "A patient with type 2 diabetes, heart failure, and A1C at goal is not receiving an SGLT2 inhibitor. Which principle applies?", choices: ["Heart-failure benefit can justify an SGLT2 inhibitor irrespective of A1C", "No therapy can be changed when A1C is at goal", "Only sulfonylureas reduce heart-failure hospitalization", "A1C replaces assessment of volume and kidney function"], answer: 0, rationale: "Current ADA guidance recommends an SGLT2 inhibitor in type 2 diabetes with heart failure irrespective of A1C.", reviewHref: "#cardiorenal-weight-integration" },
    },
    {
      slug: "combination-deintensification-special-settings",
      title: "Combination Strategy, Deintensification, and Special Settings",
      visual: "noninsulin-combination",
      summary: "A regimen should contain complementary mechanisms with a reason for every medicine. Initiation, escalation, simplification, fasting, procedures, acute illness, and transitions all require active medication reconciliation.",
      concepts: ["Rational combination", "Redundant therapy", "Hypoglycemia reduction", "Procedure and illness planning", "Cost and deintensification"],
      application: "At every transition, state what each agent contributes, what harm it can create, what must be held, and which medication should be reduced first if goals or circumstances change.",
      lesson: [
        { heading: "Combine complementary mechanisms", body: "Initial or early combination therapy can improve time to goal when one agent is unlikely to provide enough efficacy. Favor combinations that address independent glucose and outcome needs without duplicating the same pathway. Fixed-dose products can reduce pill burden but can also make titration, interruption, cost, and culprit identification harder." },
        { heading: "Remove mechanistic redundancy", body: "Do not combine a DPP-4 inhibitor with a GLP-1 receptor agonist or dual GIP/GLP-1 therapy because meaningful added glucose lowering is absent. When adding an effective low-hypoglycemia therapy, reassess sulfonylurea, meglitinide, and insulin doses rather than stacking every prior medicine indefinitely." },
        { heading: "Plan for fasting, illness, and procedures", body: "Use a written plan for SGLT2 interruption, GLP-1-related anesthesia risk, metformin contrast or acute-illness interruption, secretagogue meal dependence, hydration, ketone assessment, and the point at which insulin or emergency care is required. Restarting should follow recovered intake, kidney function, hemodynamic stability, and product-specific guidance." },
        { heading: "Deintensify deliberately", body: "Reduce or stop therapy when ineffectiveness, hypoglycemia, intolerance, contraindication, cost, burden, weight loss, organ decline, or revised goals change the benefit-risk balance. Preferentially remove agents that add harm or burden without cardiovascular, kidney, weight, liver, or glycemic benefit needed by that person. Document the new goal and monitoring plan." },
        { heading: "Know when noninsulin escalation has ended", body: "Symptoms of hyperglycemia, catabolism, crisis, or very high A1C or glucose can require insulin. Postoperative, critical illness, and selected transplant settings also favor insulin because it is rapidly titratable. Adding another modest oral agent should not delay treatment of severe insulin deficiency or metabolic decompensation." },
      ],
      keyPoints: ["Every medicine needs a defined contribution.", "Avoid DPP-4 and GLP-1 redundancy.", "Transitions require written hold plans.", "Severe hyperglycemia can require insulin."],
      check: { question: "Which regimen change most directly reduces redundant incretin therapy?", choices: ["Stop the DPP-4 inhibitor when starting a GLP-1 receptor agonist", "Add a second DPP-4 inhibitor", "Combine two GLP-1 receptor agonists", "Continue every prior drug without reassessment"], answer: 0, rationale: "DPP-4 inhibition should not be combined with GLP-1-based therapy because it adds no meaningful glucose-lowering benefit.", reviewHref: "#combination-deintensification-special-settings" },
    },
  ],
  questionBank: noninsulinDiabetesPharmacotherapyQuestionBank,
  references: [
    { label: "ADA 2026 pharmacologic approaches to glycemic treatment", href: "https://diabetesjournals.org/care/article/49/Supplement_1/S183/163934/9-Pharmacologic-Approaches-to-Glycemic-Treatment" },
    { label: "ADA 2026 obesity and weight-management standards", href: "https://diabetesjournals.org/care/article/49/Supplement_1/S166/163915/8-Obesity-and-Weight-Management-for-the-Prevention" },
    { label: "FDA Jardiance prescribing information", href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/204629s063lbl.pdf" },
    { label: "FDA Ozempic prescribing information", href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/209637s025lbl.pdf" },
    { label: "FDA Mounjaro prescribing information", href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/215866s031lbl.pdf" },
    { label: "FDA prescribing information database", href: "https://www.accessdata.fda.gov/scripts/cder/daf/" },
  ],
};


// Complete selection lesson source-reviewed with its linked assessment items.
Object.assign(noninsulinDiabetesPharmacotherapyModule.submodules.find(item => item.slug === "noninsulin-selection-architecture"), {
  "slug": "noninsulin-selection-architecture",
  "title": "Person-Centered Selection and Sequencing",
  "visual": "noninsulin-selection",
  "summary": "Choose treatment for the person’s glucose and organ-risk goals, then check safety, feasibility and follow-up. A near-target A1C does not settle every treatment decision.",
  "concepts": [
    "Glucose and outcome goals",
    "Comorbidity and product evidence",
    "Efficacy and combination treatment",
    "Insulin and crisis boundaries",
    "Self-management and follow-up"
  ],
  "application": "Identify urgent insulin needs first. For a stable adult with type 2 diabetes, name the glucose and outcome goals, compare options with the person, and document how response, safety and access will be reassessed.",
  "lesson": [
    {
      "heading": "Separate the glucose goal from outcome goals",
      "body": "An A1C target describes average glycemic control. It does not, by itself, establish whether cardiovascular, heart-failure, kidney, weight or liver goals have been addressed. Identify the relevant conditions and choose therapy with evidence for that population. Outcome-directed treatment can be appropriate when A1C is already at goal, but that does not mean every drug in a class has the same evidence, approved indications or eligibility rules. Nutrition, physical activity and diabetes self-management education remain part of care after medication starts."
    },
    {
      "heading": "Let comorbidity guide the next comparison",
      "body": "For an adult with type 2 diabetes and established or high-risk ASCVD, consider a GLP-1 receptor agonist and/or SGLT2 inhibitor with demonstrated cardiovascular benefit. Heart failure favors an SGLT2 inhibitor with demonstrated benefit. Current ADA guidance also identifies selected GLP-1 or dual GIP/GLP-1 therapies for adults with type 2 diabetes, obesity and symptomatic HFpEF. CKD decisions require current kidney function, albuminuria and product-specific use criteria. A MASH-related choice requires its own liver evidence and safety assessment; a lower A1C alone is not proof of liver benefit."
    },
    {
      "heading": "Place metformin in the clinical context",
      "body": "Metformin remains a commonly used, inexpensive option when glucose lowering is the principal need and it is suitable for the person. Metformin is often used early, while established heart or kidney indications can support an outcome-directed medicine regardless of A1C, with or without metformin. Do not postpone an indicated outcome-directed medicine solely to demonstrate metformin failure. Check contraindications, kidney function, tolerance and the exact product before prescribing; neither affordability nor a familiar first-line role cancels a safety restriction."
    },
    {
      "heading": "Estimate the gap before choosing an add-on",
      "body": "Different classes provide different glucose and weight effects. Select GLP-1-based therapies and rational combinations can offer greater glucose lowering than a modest-efficacy option, but route, tolerance, organ function, hypoglycemia risk and access still matter. ADA guidance supports considering combination treatment or a more potent agent when A1C is at least 1.5 percentage points above the individualized goal. For A1C 9.1% and a goal of 7.0%, the gap is 2.1 percentage points: 9.1 minus 7.0. This supports an efficacy discussion, not a promised response or an automatic insulin mandate."
    },
    {
      "heading": "Recognize when noninsulin sequencing must give way",
      "body": "Consider insulin when hyperglycemic symptoms are present or A1C exceeds 10% or glucose is at least 300 mg/dL. Weight loss, ketosis and other catabolic features increase concern. Suspected DKA or HHS requires urgent assessment and stabilization rather than another routine outpatient add-on; glucose alone does not diagnose either crisis. In stable type 2 diabetes without severe hyperglycemia or crisis, current ADA guidance generally prefers GLP-1-based therapy to insulin for initial or add-on glucose lowering. These thresholds prompt clinical assessment and do not make insulin permanent after recovery. Type 1 diabetes requires insulin."
    },
    {
      "heading": "Use glucose patterns without losing the wider goal",
      "body": "Review repeated fasting and postmeal measurements or suitable CGM patterns before adjusting treatment. A near-target fasting value can coexist with repeated postmeal excursions; one isolated measurement may misrepresent the overall pattern. Also look for low glucose, meal changes and medicines contributing to hypoglycemia. A therapy used for heart or kidney benefit may remain useful despite a remaining glycemic gap. Reassess its safety and tolerability, then address the gap with a complementary plan instead of assuming that the original therapy has no value."
    },
    {
      "heading": "Make the plan usable with the person",
      "body": "Discuss the person’s priorities, food access, work schedule, route preferences, dexterity, vision, cognition, gastrointestinal tolerance and capacity to monitor treatment. Confirm coverage, cost and supply before relying on a medicine that cannot be obtained. Pair prescriptions with achievable nutrition and activity goals, glucose monitoring when indicated, practical self-management education and a way to obtain help for adverse effects or illness. Adapt the plan with the person; a medication list alone does not establish that treatment can be implemented."
    },
    {
      "heading": "Set a reassessment point and reduce preventable harm",
      "body": "Document what each medicine is intended to achieve and when glucose response, adverse effects, hypoglycemia, weight, organ function, access and medication-taking will be reviewed. ADA recommends regular medication-plan reassessment, for example every three to six months, and timely adjustment when goals are unmet. That interval is not permission to wait through serious symptoms or an early safety problem. When adding treatment, reassess insulin or secretagogue doses to reduce hypoglycemia and burden. Intensification, substitution or deintensification should follow the current benefits, risks and the person’s goals."
    }
  ],
  "keyPoints": [
    "A1C and organ outcomes answer different questions.",
    "Match efficacy to the individualized gap.",
    "Suspected crisis needs urgent assessment.",
    "Access, education and reassessment are treatment decisions."
  ],
  "check": {
    "question": "An adult with type 2 diabetes and symptomatic heart failure has A1C at goal. Which selection approach is appropriate?",
    "choices": [
      "Compare an SGLT2 inhibitor with demonstrated HF benefit against the person’s eligibility, safety and access.",
      "Wait for A1C to rise before considering HF-directed diabetes therapy.",
      "Assume every noninsulin drug provides the same HF benefit.",
      "Use an A1C-lowering rank as the sole measure of HF protection."
    ],
    "answer": 0,
    "rationale": "Heart-failure benefit is a separate treatment objective. A near-target A1C does not remove it; evidence and suitability for the exact treatment still matter.",
    "reviewHref": "#noninsulin-selection-architecture"
  }
});


// Complete metformin lesson source-reviewed with its linked assessment items.
Object.assign(noninsulinDiabetesPharmacotherapyModule.submodules.find(item => item.slug === "metformin-pharmacotherapy"), {
  "slug": "metformin-pharmacotherapy",
  "title": "Metformin",
  "visual": "noninsulin-metformin",
  "summary": "Metformin lowers glucose without directly stimulating insulin secretion. Choose the exact formulation, titrate for tolerance, and reassess kidney function, vitamin B12 and conditions that increase lactic-acidosis risk.",
  "concepts": [
    "Hepatic glucose production",
    "Product-specific dosing and handling",
    "Renal and acute-illness safeguards",
    "FDA and ACR contrast protocols",
    "Vitamin B12 and lactic-acidosis risk"
  ],
  "application": "Confirm the product, dose and renal eligibility before prescribing. Teach meals, titration, formulation handling and illness precautions; document the contrast protocol and how safety and response will be reassessed.",
  "lesson": [
    {
      "heading": "Connect the mechanism to glucose control",
      "body": "Metformin reduces hepatic glucose production, decreases intestinal glucose absorption and improves peripheral insulin sensitivity. It does not directly stimulate insulin secretion, so hypoglycemia risk is low when used alone; insulin or a secretagogue can still cause hypoglycemia when combined with it. It is commonly used for type 2 diabetes alongside nutrition and activity, with an approximate A1C reduction of 1 to 2 percentage points rather than a guaranteed individual response. Weight is usually neutral or may decrease modestly. Selected prediabetes prevention use is separate from its labeled type 2 diabetes indication."
    },
    {
      "heading": "Dose immediate-release metformin with meals",
      "body": "For the referenced immediate-release tablet label, the adult starting dose is 500 mg twice daily or 850 mg once daily with meals. Increase by 500 mg weekly or 850 mg every two weeks according to glucose response and tolerance, up to 2,550 mg/day in divided doses. Doses above 2,000 mg/day may be better tolerated across three meals. For children aged 10 years or older with type 2 diabetes, this IR label starts at 500 mg twice daily, increases by 500 mg weekly, and limits treatment to 2,000 mg/day divided twice daily. Adult and pediatric ceilings differ; neither is a target everyone must reach."
    },
    {
      "heading": "Check the extended-release product before switching",
      "body": "The referenced Ascend ER tablet starts at 500 mg once daily with the evening meal and increases by 500 mg weekly to 2,000 mg once daily. Its label permits a trial of 1,000 mg twice daily if 2,000 mg once daily is inadequate. GLUMETZA starts at 500 mg with the evening meal, increases by 500 mg every one to two weeks, and has a 2,000 mg once-daily ceiling. An IR-to-ER switch can use the same total daily dose when the selected label permits it and the dose is within its ceiling; the cited once-daily switches are limited to 2,000 mg. Do not transfer the IR 2,550 mg ceiling or one ER product’s divided-dose instruction to every ER product. Swallow ER tablets whole without crushing, cutting or chewing. An inactive shell or soft mass may appear in stool without loss of the therapeutic effect; do not take an extra dose for it."
    },
    {
      "heading": "Distinguish the oral solution from the ER suspension",
      "body": "RIOMET immediate-release solution contains 500 mg/5 mL, or 100 mg/mL. Its adult starting and titration schedules follow the referenced IR label, with a 2,550 mg/day ceiling in divided doses. RIOMET ER is a separate suspension: after reconstitution it also contains 500 mg/5 mL, but starts at 500 mg once daily with the evening meal and increases by 500 mg weekly to 2,000 mg once daily. Its adult label permits a 1,000 mg twice-daily trial when 2,000 mg once daily is inadequate; pediatric dosing from age 10 has a 2,000 mg once-daily ceiling. For either 100 mg/mL liquid, a prescribed 1,000 mg dose equals 10 mL: 1,000 mg divided by 100 mg/mL. Equal concentration does not establish equal release or frequency. Use the supplied product-specific dosing cup. The pharmacist reconstitutes RIOMET ER with its accompanying diluent before dispensing; shake it for at least 10 seconds before each dose. Keep the reconstituted suspension in its original bottle at 20 to 25°C, and discard unused suspension after 100 days."
    },
    {
      "heading": "Respond to intolerance without overlooking illness",
      "body": "Nausea, diarrhea, gas and abdominal discomfort are common, especially during initiation or rapid escalation. Taking doses with food and increasing gradually can help; a suitable ER product may improve tolerance. Reassess the dose and formulation when symptoms interfere with use rather than pushing through escalation. Persistent vomiting, diarrhea, poor intake or dehydration calls for prompt clinical and kidney assessment and a temporary interruption when volume depletion or renal impairment is a concern. Mild early gastrointestinal intolerance alone does not diagnose lactic acidosis, and severe systemic symptoms must not be dismissed as routine intolerance."
    },
    {
      "heading": "Separate initiation from continued renal use",
      "body": "Obtain eGFR before treatment and at least annually during use, more often with older age or other risk for kidney decline. The cited labels contraindicate metformin below eGFR 30 mL/min/1.73 m² and do not recommend initiating it at eGFR 30 to 45. If a person already taking it later falls below 45, reassess the benefit and risk of continuing; a stable value of 38 is not the same decision as starting treatment at 38. Discontinue if eGFR falls below 30. Acute or chronic metabolic acidosis, including DKA, and hypersensitivity are also contraindications. A small A1C improvement does not override any of these restrictions."
    },
    {
      "heading": "State which contrast protocol applies",
      "body": "FDA labeling calls for interruption at or before iodinated contrast when eGFR is 30 to 60 mL/min/1.73 m², with a history of liver disease, alcoholism or heart failure, or for intra-arterial iodinated contrast. Recheck eGFR after 48 hours and restart only if renal function is stable and use remains appropriate. ACR guidance is less restrictive: with no AKI and eGFR at least 30, IV iodinated contrast does not itself require holding metformin or an obligatory renal recheck. ACR calls for interruption for AKI, eGFR below 30, or arterial catheter studies that may embolize the renal arteries, with a 48-hour hold and renal reassessment before resumption. Persistent eGFR below 30 remains a metformin contraindication. Usual-dose gadolinium does not itself require a metformin hold under ACR guidance. Specify FDA-label or ACR-based institutional policy and coordinate the instructions; a blanket rule for every contrast study hides these differences."
    },
    {
      "heading": "Monitor vitamin B12 as well as glycemia",
      "body": "Metformin can lower vitamin B12 absorption. The cited labels recommend annual hematologic testing and B12 measurement every two to three years, with abnormalities managed. New anemia or sensory symptoms require evaluation sooner; do not attribute every neuropathy automatically to diabetes or wait for the next scheduled interval. Deficiency can contribute to anemia and neurologic problems and can be treated with B12 replacement. Monitoring and treatment of identified deficiency are more precise than assuming that every long-term user needs an identical supplement plan. Reassess glucose response and tolerance alongside these safety checks."
    },
    {
      "heading": "Interrupt treatment when clearance or oxygen delivery fails",
      "body": "Acute kidney injury, shock, sepsis, hypoxemia and acute heart failure with hypoperfusion can increase accumulation or lactic-acidosis risk. Stop metformin during such unstable illness and reassess clinical recovery and renal eligibility before restarting. Restricted food and fluid intake around procedures can also require temporary interruption. Avoid use with hepatic impairment and warn against excessive alcohol intake. Current labels do not recommend metformin in mitochondrial diseases such as MELAS or maternally inherited diabetes and deafness (MIDD). Unexplained malaise, muscle pain, respiratory distress, unusual somnolence or abdominal pain, especially with risk factors, warrants prompt assessment. Suspected metformin-associated lactic acidosis requires immediate discontinuation and hospital treatment; the label recommends prompt hemodialysis for diagnosis or strong suspicion. Do not diagnose it from one symptom alone."
    },
    {
      "heading": "Review interactions that change different risks",
      "body": "Topiramate and other carbonic anhydrase inhibitors can disturb acid-base balance and increase lactic-acidosis risk; consider more frequent monitoring. Drugs that reduce renal tubular metformin clearance, including cimetidine, dolutegravir, ranolazine and vandetanib, can increase exposure; assess the combination’s benefits, risks and current product instructions. These interactions are different from insulin or secretagogues, for which a lower concomitant dose may be needed to reduce hypoglycemia. Review medicines and alcohol whenever the regimen changes, rather than treating every adverse-effect risk as the same mechanism."
    }
  ],
  "keyPoints": [
    "Use the exact product’s titration and dose ceiling.",
    "Do not use below eGFR 30; reassess continued use below 45.",
    "Name the contrast protocol before advising a hold.",
    "Monitor B12 and distinguish intolerance from urgent systemic illness."
  ],
  "check": {
    "question": "A metformin user has stable eGFR 52 mL/min/1.73 m² and no AKI. The imaging service follows FDA labeling for IV iodinated contrast. Which plan matches that protocol?",
    "choices": [
      "Hold at or before contrast; recheck eGFR after 48 hours and restart only if renal function is stable and use remains appropriate.",
      "Continue without a hold because the ACR IV-contrast threshold must override the stated FDA-label protocol.",
      "Restart automatically after 24 hours without reassessing renal function.",
      "Permanently stop metformin solely because eGFR is below 60."
    ],
    "answer": 0,
    "rationale": "The FDA-label iodinated-contrast hold includes eGFR 30 to 60. It requires a 48-hour renal reassessment before restart. ACR is less restrictive for IV contrast without AKI, but this question specifies FDA labeling; stable eGFR 52 alone is not a permanent contraindication.",
    "reviewHref": "#metformin-pharmacotherapy"
  }
});
noninsulinDiabetesPharmacotherapyModule.references.push(...[
  {
    "label": "DailyMed metformin IR tablet prescribing information",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4ac6d01a-af26-44e7-ae2e-3618de0080aa"
  },
  {
    "label": "DailyMed Ascend metformin ER tablet prescribing information",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a944a167-e3ac-4084-af1c-22b48713471c"
  },
  {
    "label": "DailyMed GLUMETZA prescribing information",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fb832474-88d9-4e29-95cd-fbc446944cc4"
  },
  {
    "label": "DailyMed RIOMET oral solution prescribing information",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=05d4df4b-dfe8-4828-b423-a3d4f2c4114a"
  },
  {
    "label": "FDA RIOMET ER prescribing information, August 2026",
    "href": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/212595s002lbl.pdf"
  },
  {
    "label": "ACR Manual on Contrast Media: metformin guidance",
    "href": "https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Contrast-Manual"
  }
]);


// Complete SGLT2 lesson reviewed with exact product labels and linked assessments.
Object.assign(noninsulinDiabetesPharmacotherapyModule.submodules.find(item => item.slug === "sglt2-inhibitor-pharmacotherapy"), {
  "slug": "sglt2-inhibitor-pharmacotherapy",
  "title": "SGLT2 Inhibitors",
  "visual": "noninsulin-sglt2",
  "summary": "SGLT2 inhibitors increase urinary glucose and alter renal sodium handling. Match the exact product, indication, dose and kidney-use criteria; prevent volume depletion and recognize ketoacidosis even without marked hyperglycemia.",
  "concepts": [
    "Proximal-tubule glucose and sodium handling",
    "Product-specific outcomes, doses and renal limits",
    "Ketoacidosis and fasting interruption",
    "Volume, infection and foot safety",
    "Interactions and monitoring"
  ],
  "application": "Document the intended glucose or cardiorenal outcome, renal eligibility, volume assessment and exact dose. Teach infection and ketoacidosis symptoms, product-specific fasting holds and clinical restart criteria.",
  "lesson": [
    {
      "heading": "Trace the proximal-tubule mechanism",
      "body": "SGLT2 inhibition reduces proximal-tubule glucose reabsorption and increases urinary glucose. It also reduces renal sodium reabsorption, increasing distal sodium delivery; osmotic diuresis and natriuresis can affect circulating volume. Glucose lowering diminishes as kidney function declines, while selected kidney and heart-failure benefits can persist within studied populations and product labeling. The book gives an approximate A1C reduction of 0.7 to 1 percentage point with weight loss, rather than a guaranteed individual response. In adults, intrinsic hypoglycemia risk is low without insulin or a secretagogue; combination treatment and pediatric labeling require separate review."
    },
    {
      "heading": "Match the outcome to the product and population",
      "body": "In type 2 diabetes with heart failure or CKD, treatment selection can prioritize proven outcomes irrespective of A1C. Empagliflozin and dapagliflozin have adult heart-failure and CKD indications that do not require diabetes. Empagliflozin also reduces cardiovascular death in adults with type 2 diabetes and established cardiovascular disease. Dapagliflozin reduces heart-failure hospitalization in adults with type 2 diabetes and established cardiovascular disease or multiple cardiovascular risk factors. Canagliflozin reduces major cardiovascular events in adults with type 2 diabetes and established cardiovascular disease; its kidney-outcome indication is for adults with type 2 diabetes and diabetic nephropathy with albuminuria above 300 mg/day. These are distinct indications, populations and outcomes. Do not transfer them to ertugliflozin, whose cited label is for adult type 2 diabetes glucose control."
    },
    {
      "heading": "Use empagliflozin dosing and renal evidence precisely",
      "body": "JARDIANCE is dosed at 10 mg once daily in the morning, with or without food, for its adult cardiorenal indications and for glucose control. A person tolerating 10 mg may increase to 25 mg for additional glucose lowering; 25 mg is not required for the heart-failure or CKD indication. Glucose-control use is not recommended below eGFR 30 mL/min/1.73 m². Its heart-failure trials enrolled adults with eGFR at least 20, and its CKD trial enrolled eGFR 20 to 90. Trials did not initially enroll people below 20 or on dialysis; allowing some enrolled patients to continue after kidney decline or dialysis initiation does not establish unrestricted initiation in those settings."
    },
    {
      "heading": "Separate dapagliflozin initiation from continuation",
      "body": "For FARXIGA glucose control, start at 5 mg once daily and increase to 10 mg if additional control is needed; this use is not recommended below eGFR 45 mL/min/1.73 m² because glucose lowering is likely ineffective. For its other adult indications, the dose is 10 mg once daily. These indications permit initiation at eGFR at least 25. Initiation below 25 is not recommended, but a person already taking 10 mg whose eGFR later falls below 25 may continue it for the labeled kidney and cardiovascular outcomes if clinically appropriate. A stable fall below an initiation threshold differs from AKI, symptomatic volume depletion or suspected ketoacidosis. Both dapagliflozin and empagliflozin have specific CKD exclusions, including polycystic kidney disease and specified immunosuppressive treatment for kidney disease; check the exact label before generalizing CKD eligibility."
    },
    {
      "heading": "Apply canagliflozin’s usual renal dose limits",
      "body": "INVOKANA starts at 100 mg once daily before the first meal. For additional glucose lowering, a person tolerating 100 mg with eGFR at least 60 mL/min/1.73 m² may increase to 300 mg daily. Without a UGT-inducer interaction, eGFR 30 to below 60 limits the dose to 100 mg daily. The other adult indications use 100 mg daily. Do not initiate below eGFR 30; adults already taking it with albuminuria above 300 mg/day may continue 100 mg daily for the specified diabetic-nephropathy outcomes. Glucose-control use below 30 is not recommended. The separate UGT-inducer dose adjustment is described below and must not be confused with the usual renal table."
    },
    {
      "heading": "Keep ertugliflozin’s indication and schedule distinct",
      "body": "STEGLATRO starts at 5 mg once daily in the morning, with or without food, for adults with type 2 diabetes. Increase to 15 mg daily only when tolerated and additional glucose control is needed. Use is not recommended below eGFR 45 mL/min/1.73 m². Its cited label does not establish a heart-failure or CKD indication, and its preprocedure fasting hold is four days rather than the three days used for the other three products reviewed here. A shared mechanism does not establish an identical dose, outcome indication or renal-use boundary."
    },
    {
      "heading": "Assess volume before and after initiation",
      "body": "Check kidney function, blood pressure, orthostatic symptoms and volume status before treatment; correct volume depletion first. Older age, impaired kidney function and loop diuretics increase the risk of hypotension and volume loss. Review the entire regimen, including other diuretics, renin-angiotensin system medicines and NSAIDs, when dehydration or impaired perfusion is a concern. Increased urination and thirst can occur, but dizziness, poor intake, persistent fluid losses or a substantial creatinine rise need assessment. An early eGFR dip can reflect hemodynamic changes; it does not prove intrinsic kidney toxicity, and it does not justify ignoring symptomatic hypotension or possible AKI. Reassess the SGLT2 inhibitor and accompanying medicines and interrupt treatment when acute volume depletion or metabolic risk makes continued use unsafe."
    },
    {
      "heading": "Recognize ketoacidosis without extreme glucose",
      "body": "Nausea, vomiting, abdominal pain, malaise or difficulty breathing during SGLT2 use can signal ketoacidosis even when glucose is below 250 mg/dL. Risk factors include missed or reduced insulin, pancreatic disease or insulin deficiency, acute illness, prolonged fasting, surgery, ketogenic diets, dehydration and excess alcohol. Stop the SGLT2 inhibitor if ketoacidosis is suspected and obtain urgent clinical evaluation, including ketones and acid-base status. Symptoms alone do not confirm the diagnosis; glucose below a conventional threshold does not exclude it. Treat confirmed ketoacidosis and monitor its resolution before considering restart. Glucosuria and ketoacidosis can persist after discontinuation, so a recent hold does not remove the need to investigate concerning symptoms."
    },
    {
      "heading": "Write an agent-specific fasting and restart plan",
      "body": "When possible, withhold empagliflozin, dapagliflozin and canagliflozin for at least three days before surgery or procedures involving prolonged fasting; withhold ertugliflozin for at least four days. A one-day or same-morning hold does not match these labels. Acute illness or other ketoacidosis risks may require temporary interruption even outside scheduled surgery. Resume only when clinically stable and oral intake has returned; after suspected or confirmed ketoacidosis, document resolution before restart. Persistent vomiting, dehydration or insulin deficiency is not resolved by the calendar alone. Coordinate urgent procedures and the rest of the diabetes regimen with the clinical team. For a missed routine dose, follow the product instructions and do not double the next dose."
    },
    {
      "heading": "Distinguish genital infection from urgent perineal disease",
      "body": "Glucosuria increases genital mycotic infection risk in both males and females. Counsel on genital itching, irritation and other infection symptoms, with assessment and treatment when indicated. Serious urinary infections, including pyelonephritis and urosepsis, require prompt evaluation. Perineal or genital pain, redness or swelling together with fever or malaise raises concern for Fournier gangrene, a rare life-threatening infection. If suspected, stop the SGLT2 inhibitor and urgently obtain medical and surgical evaluation. Treating that systemic pattern as uncomplicated candidiasis with a delayed follow-up can miss an emergency."
    },
    {
      "heading": "Review foot and fracture risk without equating every product",
      "body": "Canagliflozin’s label describes increased lower-limb amputation risk observed in CANVAS, with greatest risk among people with prior amputation, peripheral vascular disease or neuropathy. Review foot history and teach preventive foot care and prompt reporting of pain, infection, sores or ulcers. Empagliflozin and ertugliflozin labels also direct lower-limb monitoring; that does not establish identical trial results or risk estimates for all agents. Canagliflozin’s label separately reports increased fracture risk observed in CANVAS and advises assessing contributing risk factors before initiation. Weigh the selected product’s benefits and these individual risks; neither an A1C improvement nor an absence of symptoms eliminates the need for monitoring."
    },
    {
      "heading": "Review interactions before changing doses",
      "body": "UGT inducers such as rifampin, phenytoin, phenobarbital and ritonavir reduce canagliflozin exposure. Its current label specifies that a person tolerating 100 mg with eGFR at least 60 mL/min/1.73 m² increases to 200 mg daily; 300 mg may follow if 200 mg is tolerated and more glucose lowering is needed. With eGFR below 60, the inducer adjustment has a 200 mg daily maximum for someone tolerating 100 mg. Renal eligibility and the full product instructions still apply; this exception is not permission to initiate below 30. Canagliflozin can increase digoxin exposure, requiring monitoring for dose adjustment. The cited empagliflozin, dapagliflozin and canagliflozin labels warn that an SGLT2 inhibitor may decrease serum lithium concentrations; monitor lithium more frequently during initiation or dose changes. Insulin or secretagogue doses may need individualized reduction to prevent hypoglycemia, but abrupt insulin withdrawal can increase ketoacidosis risk."
    },
    {
      "heading": "Choose monitoring that remains interpretable",
      "body": "Follow blood glucose or A1C, kidney function, volume status, blood pressure and symptoms according to the treatment goal and clinical risk. A positive urine-glucose test is expected during SGLT2 inhibition and should not be used to judge glucose control. The 1,5-anhydroglucitol assay is also unreliable for that purpose. Use alternative glycemic measures. The book describes increases in magnesium and phosphate; the ertugliflozin label reports serum phosphate changes. Canagliflozin labeling describes potassium increases in a moderate-renal-impairment study, particularly with 300 mg. Interpret electrolytes with kidney function and concomitant medicines rather than treating these observations as a universal class-wide monitoring schedule or a reason to exceed renal dose limits."
    },
    {
      "heading": "Check age, pregnancy and product contraindications",
      "body": "The cited empagliflozin, dapagliflozin and canagliflozin labels permit glucose-control use in type 2 diabetes from age 10; their adult cardiorenal indications do not establish pediatric outcome indications. The ertugliflozin indication reviewed here is adult glucose control. Empagliflozin’s pediatric trial showed higher hypoglycemia risk regardless of insulin use, so the usual adult low-intrinsic-risk shorthand needs qualification. These products are not recommended for type 1 diabetes glucose control. Check pregnancy and lactation precautions: for example, empagliflozin is not recommended during the second or third trimester or during breastfeeding because of potential renal-development risk. Product hypersensitivity is a labeled contraindication. In advanced kidney disease or dialysis, use exact initiation, continuation and evidence boundaries rather than the book’s older blanket dialysis contraindication summary."
    }
  ],
  "keyPoints": [
    "Match product, indication, dose and renal-use criteria.",
    "Stop and urgently assess suspected ketoacidosis at any glucose level.",
    "Correct volume depletion and assess concerning infection or foot symptoms.",
    "Use three-day or four-day fasting holds and clinical restart criteria."
  ],
  "check": {
    "question": "An empagliflozin user develops nausea, abdominal pain and rapid breathing during prolonged fasting with glucose 176 mg/dL. What is the priority?",
    "choices": [
      "Stop empagliflozin and obtain urgent ketone and acid-base evaluation for possible ketoacidosis.",
      "Continue empagliflozin and reassess only if glucose rises above 250 mg/dL.",
      "Hold today’s dose but postpone ketone evaluation until after the next A1C result.",
      "Treat the symptoms as expected osmotic diuresis and resume once a glass of water is tolerated."
    ],
    "answer": 0,
    "rationale": "Fasting and these symptoms warrant urgent evaluation for SGLT2-associated ketoacidosis even at glucose 176. A 250 mg/dL threshold cannot exclude it; holding a dose and waiting for A1C delays assessment, and hydration alone neither excludes acidosis nor establishes safe restart.",
    "reviewHref": "#sglt2-inhibitor-pharmacotherapy"
  }
});
noninsulinDiabetesPharmacotherapyModule.references.push(...[
  {
    "label": "DailyMed JARDIANCE prescribing information",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=faf3dd6a-9cd0-39c2-0d2e-232cb3f67565"
  },
  {
    "label": "DailyMed FARXIGA prescribing information",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72ad22ae-efe6-4cd6-a302-98aaee423d69"
  },
  {
    "label": "DailyMed INVOKANA prescribing information",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b9057d3b-b104-4f09-8a61-c61ef9d4a3f3"
  },
  {
    "label": "DailyMed STEGLATRO prescribing information",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e6f3e718-bb99-48f1-ab94-b9f0af05fed6"
  }
]);


// Complete GLP-1/GIP lesson reviewed against exact product labels and linked assessments.
Object.assign(noninsulinDiabetesPharmacotherapyModule.submodules.find(item => item.slug === "glp1-gip-pharmacotherapy"), {
  "slug": "glp1-gip-pharmacotherapy",
  "title": "GLP-1 and Dual GIP/GLP-1 Therapy",
  "visual": "noninsulin-glp1",
  "summary": "GLP-1 receptor agonists and dual GIP/GLP-1 agonism improve glucose control through incretin signaling. Match the exact product, population, titration, administration and safety instructions; selected outcome indications belong to individual products.",
  "concepts": [
    "GLP-1 and dual GIP/GLP-1 signaling",
    "Product-specific indications and dose escalation",
    "Oral semaglutide and injection administration",
    "Renal limits, contraindications and urgent symptoms",
    "Gastric interactions and complementary combinations"
  ],
  "application": "Record the exact brand and formulation, indication, age, starting dose, escalation interval and missed-dose plan. Review kidney function, GI tolerance, hydration, MTC/MEN2 history, vision, oral medicines and contraception; arrange presentation-specific training.",
  "lesson": [
    {
      "heading": "Trace incretin signaling without equating every product",
      "body": "GLP-1 receptor agonists increase glucose-dependent insulin release, reduce inappropriate glucagon secretion, delay gastric emptying to varying degrees and promote satiety. Tirzepatide activates both GIP and GLP-1 receptors. These effects can improve glucose control and reduce weight, but an individual response is not guaranteed. In adults, intrinsic hypoglycemia risk is low without insulin or a secretagogue; adding these medicines to insulin or a sulfonylurea can require individualized dose reduction and glucose monitoring. Pediatric safety needs separate review: liraglutide labeling reports greater hypoglycemia risk in pediatric patients regardless of concomitant insulin or metformin. Do not turn the adult shorthand into a universal pediatric rule."
    },
    {
      "heading": "Match cardiovascular, kidney and liver outcomes precisely",
      "body": "Selected cardiovascular indications differ: injectable Ozempic and Victoza reduce major cardiovascular events in adults with type 2 diabetes and established cardiovascular disease; Trulicity includes established disease or multiple risk factors. Current Ozempic tablets, Rybelsus and Mounjaro labels include adults with type 2 diabetes at high cardiovascular risk. Injectable Ozempic also has a kidney-outcome indication in adults with type 2 diabetes and CKD, using its specified maintenance dose. These indications do not transfer automatically to every incretin product. Wegovy injection has a separate indication for adults with noncirrhotic MASH and F2-F3 fibrosis under accelerated approval based on histologic improvement; continued approval depends on confirming clinical benefit. This is not an indication for every GLP-1 product, every fatty liver condition or cirrhosis. Weight-management products and diabetes products require their own indications and schedules."
    },
    {
      "heading": "Use injectable semaglutide’s staged doses",
      "body": "Ozempic injection starts at 0.25 mg subcutaneously once weekly for four weeks, then 0.5 mg weekly. For additional glucose control, increase to 1 mg after at least four weeks at 0.5 mg and to 2 mg after at least four weeks at 1 mg; the maximum is 2 mg weekly. For the labeled type 2 diabetes and CKD outcome indication, increase to the 1 mg weekly maintenance dose after at least four weeks at 0.5 mg. The initiation dose does not establish the maintenance schedule for every indication. Administer with or without meals. If missed, give within five days; after more than five days, skip and resume on the scheduled day. Injectable and oral Ozempic are different formulations, not interchangeable milligram doses."
    },
    {
      "heading": "Distinguish both diabetes tablet formulations",
      "body": "Oral semaglutide currently has two diabetes tablet formulations. Rybelsus starts at 3 mg daily on days 1-30, then 7 mg on days 31-60, with 14 mg from day 61 if additional glucose control is needed. Ozempic tablets start at 1.5 mg daily on days 1-30, then 4 mg on days 31-60, with 9 mg from day 61 if needed. The 3 mg and 1.5 mg initiation doses are not effective for glycemic control. The formulations are not substitutable milligram for milligram. After initiation, the labeled daily switch pairs are Rybelsus 7 mg with Ozempic tablets 4 mg and Rybelsus 14 mg with Ozempic tablets 9 mg, starting the replacement the day after stopping the prior tablet. Do not apply these switching instructions during the first 30 days or infer a conversion for every injectable dose."
    },
    {
      "heading": "Protect oral semaglutide absorption",
      "body": "Take the prescribed diabetes tablet once each morning on an empty stomach with no more than four ounces of plain water. Swallow one tablet whole; do not split, crush, chew or dissolve it. Wait at least 30 minutes before food, beverages or other oral medicines. A missed tablet is skipped, with the next dose taken the following day; do not double it. Review medicines whose effect depends on a narrow concentration range or monitoring threshold. Oral semaglutide increased levothyroxine exposure in the cited interaction study, so clinical monitoring may be needed. Its fasting and water requirements differ from meal-independent injectable semaglutide and cannot be replaced by a generic instruction to take diabetes medicine with breakfast."
    },
    {
      "heading": "Use tirzepatide’s current age-specific schedule",
      "body": "Mounjaro starts at 2.5 mg subcutaneously once weekly. Its current label permits increases in 2.5 mg increments after at least four weeks at the current dose if additional glycemic control is needed. The maximum is 15 mg weekly in adults and 10 mg weekly in pediatric patients age 10 and older; the cardiovascular indication is adult. Do not transfer the adult maximum to a child or escalate early to meet a target. Give with or without meals. A missed dose can be given within four days, or 96 hours; after more than four days, skip it. If changing the weekly administration day, keep at least 72 hours between doses. These instructions differ from Ozempic’s five-day missed-dose window."
    },
    {
      "heading": "Keep dulaglutide and liraglutide schedules distinct",
      "body": "Trulicity starts at 0.75 mg subcutaneously once weekly. Adults may increase to 1.5 mg after four weeks; further increases are in 1.5 mg increments after at least four weeks at the current dose, up to 4.5 mg weekly. Pediatric patients age 10 and older have a 1.5 mg weekly maximum. A missed dose can be given only if at least 72 hours remain until the next scheduled dose; otherwise skip it. Victoza is daily: adults start at 0.6 mg for one week, then 1.2 mg; if needed, increase to 1.8 mg after at least another week. Pediatric dosing begins at 0.6 mg and increases in 0.6 mg increments after at least a week when needed, to a 1.8 mg maximum. Both products are meal independent. Skip a missed Victoza dose; if more than three days have elapsed since the last dose, restart at 0.6 mg and arrange appropriate retitration."
    },
    {
      "heading": "Separate immediate-release from extended-release exenatide",
      "body": "Byetta starts at 5 micrograms subcutaneously twice daily, increasing to 10 micrograms twice daily after one month according to response. Give each dose within 60 minutes before the morning and evening meals or the two main meals approximately six hours or more apart; do not give after a meal. Skip a missed dose and resume at the next scheduled dose. Bydureon BCise instead delivers 2 mg subcutaneously once weekly, with or without meals. If a dose is missed, give it only when at least three days remain before the next scheduled dose; skip when only one or two days remain. Milligrams and micrograms, daily and weekly timing, and the two formulations’ devices must remain distinct. Neither exenatide formulation should be combined with another exenatide product."
    },
    {
      "heading": "Read the book’s lixisenatide entry with its own label",
      "body": "The Adlyxin label used for the book’s lixisenatide entry starts at 10 micrograms subcutaneously daily for 14 days, then 20 micrograms daily from day 15. Give within one hour before the first meal, preferably the same meal each day. If missed, give within one hour before the next meal. This is a product-specific instruction from the June 2022 label; it does not establish current commercial availability. It also does not justify giving Byetta after meals or applying a weekly missed-dose rule to lixisenatide. Check the prescribed product and current access before choosing treatment."
    },
    {
      "heading": "Distinguish kidney dose adjustment from dehydration safety",
      "body": "Injectable and oral semaglutide, tirzepatide, dulaglutide and liraglutide do not require dose adjustment for renal impairment under their cited labels, but experience and monitoring precautions still differ; dulaglutide labeling calls for caution in end-stage renal disease. Gastrointestinal fluid loss can cause acute kidney injury even when no routine renal dose adjustment is required. Byetta is not recommended with creatinine clearance below 30 mL/min or end-stage renal disease; Bydureon BCise is not recommended below eGFR 45 mL/min/1.73 m² or in end-stage renal disease. The cited Adlyxin label does not recommend use below eGFR 15; severe impairment has limited experience and needs close monitoring. Do not swap creatinine clearance and eGFR units or assume that all GLP-1 products have one renal boundary."
    },
    {
      "heading": "Apply thyroid contraindications to the exact formulation",
      "body": "Semaglutide, tirzepatide, dulaglutide, liraglutide and extended-release exenatide carry thyroid C-cell tumor boxed warnings and are contraindicated with a personal or family history of medullary thyroid carcinoma or MEN2. The animal finding does not establish that these medicines cause MTC in humans, and routine calcitonin testing or thyroid ultrasound has uncertain value for early detection. Report a neck mass, persistent hoarseness, trouble swallowing or breathing. Byetta and Adlyxin do not share that boxed warning and MTC/MEN2 contraindication in their cited labels; this does not establish suitability for every patient. Avoid the inaccurate shortcut that every thyroid disorder or every thyroid cancer has the same formal contraindication. Check each product’s serious hypersensitivity contraindication and the complete clinical history."
    },
    {
      "heading": "Respond to pancreatitis and severe gastrointestinal symptoms",
      "body": "Severe, persistent abdominal pain that can radiate to the back, with or without vomiting, needs prompt evaluation for pancreatitis; stop the suspected medicine when pancreatitis is suspected. Abdominal symptoms can also reflect gallbladder disease and need appropriate evaluation. These symptoms should not be dismissed as routine titration nausea. Severe gastroparesis is a product-specific limitation or reason not to initiate treatment under the cited labels, rather than an indication to slow gastric emptying further. Review persistent vomiting, diarrhea, poor intake, dehydration and kidney function. A history of pancreatitis requires careful product-specific assessment; it is not the same as the formal MTC/MEN2 contraindication."
    },
    {
      "heading": "Titrate with tolerance and nutrition in view",
      "body": "Start with the exact product’s initiation dose and observe its minimum escalation interval. Reassess tolerability before each planned increase; persistent nausea, vomiting, inability to maintain intake or dehydration warrants clinical review rather than automatic escalation. Smaller meals and stopping when full can reduce meal-related burden, while hydration and adequate nutrition remain essential. Significant hypoglycemia, severe abdominal pain or other urgent symptoms need assessment rather than a diet-only response. For tube-fed or otherwise nutritionally vulnerable patients, review actual intake, gastrointestinal symptoms and the whole glucose-lowering regimen; the gastric effects of an incretin medicine do not establish a universal formula, route or feeding schedule."
    },
    {
      "heading": "Monitor vision and plan anesthesia with the team",
      "body": "Semaglutide and tirzepatide labels describe retinopathy precautions: rapid improvement in glucose can temporarily worsen diabetic retinopathy, so patients with a history need monitoring and new vision symptoms need evaluation. This is not proof that every change in vision is caused by the drug. Delayed gastric emptying also matters during general anesthesia or deep sedation: aspiration has been reported despite preprocedure fasting. Tell the procedure and anesthesia teams about treatment and follow an individualized plan. The cited labels state that available data are insufficient to establish whether changing fasting instructions or temporarily stopping treatment reduces retained gastric contents. Do not present a fixed class-wide hold duration as a proven label instruction."
    },
    {
      "heading": "Review oral interactions and contraception by product",
      "body": "Gastric slowing can affect absorption of oral medicines, particularly medicines with a narrow therapeutic index or threshold-dependent effectiveness. For Mounjaro, patients using oral hormonal contraception should switch to a nonoral method or add a barrier method for four weeks after initiation and four weeks after every dose escalation. Simply moving the pill an hour earlier does not satisfy that instruction. Byetta’s threshold-dependent oral medicines, such as contraceptives or antibiotics, should be taken at least one hour before its injection; if food is required, use a meal or snack when Byetta is not being given. Adlyxin’s cited label places oral contraceptives at least one hour before or at least 11 hours after injection. Monitor warfarin and similar narrow-index medicines as required by the exact product; do not assume every incretin raises INR in every patient."
    },
    {
      "heading": "Train for the actual injection presentation",
      "body": "Use the product’s current instructions for injection sites, preparation, needles, storage and disposal. Do not mix incretin injections with insulin; administer separately and avoid adjacent injection sites when using the same body region. Pens are never shared, even with a new needle. Ozempic has multiple-dose pens and single-dose prefilled syringes; Mounjaro has different pen and vial presentations, including a multiple-dose KwikPen. Dose volume, needle supply and administration steps cannot be inferred from the brand alone. For Bydureon BCise specifically, allow 15 minutes at room temperature before mixing, shake vigorously for at least 15 seconds and inspect for a uniform cloudy suspension with no residual medicine on the inspection window; inject immediately after preparation. This is not a universal warm-up or shaking rule for other products."
    },
    {
      "heading": "Recognize exenatide-specific serious reactions",
      "body": "Prior exenatide-induced immune-mediated thrombocytopenia is a contraindication for Byetta and Bydureon BCise. Suspected immune-mediated thrombocytopenia requires immediate discontinuation and avoidance of re-exposure to exenatide, rather than merely reducing the dose. Extended-release exenatide also has reports of serious injection-site reactions, including abscess, cellulitis and necrosis. A worsening, painful or infected injection site needs evaluation and should not automatically be dismissed as an expected small nodule. These product-specific warnings do not establish identical reactions or risk estimates for all incretin medicines."
    },
    {
      "heading": "Avoid redundant incretin treatment and review reproductive plans",
      "body": "Combining a DPP-4 inhibitor with a GLP-1 receptor agonist adds little glucose-lowering benefit because both act through the incretin pathway; reassess the DPP-4 inhibitor rather than keeping it automatically. This redundancy is different from complementary treatment with metformin or an appropriately selected SGLT2 inhibitor. Insulin and sulfonylurea combinations require hypoglycemia review. Discuss pregnancy and breastfeeding using the exact product label: semaglutide should be discontinued at least two months before a planned pregnancy, and oral semaglutide is not recommended during breastfeeding. Those instructions are not a universal washout interval or lactation decision for every GLP-1/GIP medicine."
    }
  ],
  "keyPoints": [
    "Match brand, formulation, indication, age and exact titration.",
    "Use product-specific missed-dose, meal and oral-interaction instructions.",
    "Apply MTC/MEN2 and renal restrictions to the exact product.",
    "Evaluate severe GI symptoms, dehydration, vision changes and procedure risks."
  ],
  "check": {
    "question": "An adult starts weekly semaglutide while taking sitagliptin. Why should the sitagliptin prescription be reassessed?",
    "choices": [
      "The incretin overlap offers little additional glucose lowering and can add treatment burden.",
      "Sitagliptin is required to prevent semaglutide-related pancreatitis.",
      "Both medicines must be retained because they lower glucose through unrelated pathways.",
      "Sitagliptin makes rapid semaglutide dose escalation safe despite persistent vomiting."
    ],
    "answer": 0,
    "rationale": "DPP-4 inhibition and GLP-1 receptor agonism overlap in the incretin pathway, with little added glucose-lowering benefit from the combination. Sitagliptin does not prevent pancreatitis or justify escalating through vomiting; these mechanisms are not unrelated. Reassess its contribution and the whole regimen.",
    "reviewHref": "#glp1-gip-pharmacotherapy"
  }
});
noninsulinDiabetesPharmacotherapyModule.references.push(...[
  {
    "label": "Novo Nordisk Ozempic injection prescribing information (May 2026)",
    "href": "https://www.novo-pi.com/ozempic.pdf"
  },
  {
    "label": "Novo Nordisk Rybelsus and Ozempic tablets prescribing information (January 2026)",
    "href": "https://www.novo-pi.com/rybelsus.pdf"
  },
  {
    "label": "DailyMed Mounjaro prescribing information (August 2026)",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d2d7da5d-ad07-4228-955f-cf7e355c8cc0"
  },
  {
    "label": "DailyMed Trulicity prescribing information (April 2026)",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=463050bd-2b1c-40f5-b3c3-0a04bb433309"
  },
  {
    "label": "Novo Nordisk Victoza prescribing information (October 2025)",
    "href": "https://www.novo-pi.com/victoza.pdf"
  },
  {
    "label": "DailyMed Byetta prescribing information (September 2025)",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=53d03c03-ebf7-418d-88a8-533eabd2ee4f"
  },
  {
    "label": "DailyMed Bydureon BCise prescribing information (May 2025)",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2d18cfc4-e0de-4814-a712-c1b7c504bff5"
  },
  {
    "label": "Sanofi Adlyxin prescribing information (June 2022)",
    "href": "https://products.sanofi.us/Adlyxin/Adlyxin.pdf"
  },
  {
    "label": "Novo Nordisk Wegovy prescribing information (June 2026)",
    "href": "https://www.novo-pi.com/wegovy.pdf"
  }
]);


// Whole DPP-4 lesson reviewed against the book and exact product labels.
Object.assign(noninsulinDiabetesPharmacotherapyModule.submodules.find(item => item.slug === "dpp4-inhibitor-pharmacotherapy"), {
  "slug": "dpp4-inhibitor-pharmacotherapy",
  "title": "DPP-4 Inhibitors",
  "visual": "noninsulin-dpp4",
  "summary": "DPP-4 inhibition prolongs endogenous incretin activity with modest glucose lowering, weight neutrality, low intrinsic hypoglycemia, and important product differences in renal dosing and heart-failure warnings.",
  "concepts": [
    "Endogenous GLP-1 and GIP preservation",
    "Product-specific eGFR and creatinine-clearance dosing",
    "Saxagliptin inhibitors and linagliptin inducers",
    "Heart-failure and alogliptin liver warnings",
    "Pancreatitis, hypersensitivity, arthralgia and blistering disease"
  ],
  "application": "Use a DPP-4 inhibitor when an oral, generally well-tolerated, weight-neutral option fits the modest glycemic need, then select by kidney function, heart-failure risk, interactions, and access.",
  "lesson": [
    {
      "heading": "Preserve endogenous incretins",
      "body": "DPP-4 inhibitors slow the breakdown of endogenous GLP-1 and GIP. These incretins increase glucose-dependent insulin release and reduce glucagon secretion, thereby reducing hepatic glucose production. The book describes an approximate A1C decrease of 0.5-0.8 percentage points, weight neutrality and low intrinsic hypoglycemia risk. Response varies; this is not the weight-loss or outcome profile of a GLP-1 receptor agonist. Low intrinsic hypoglycemia does not mean that a regimen containing insulin or a sulfonylurea is free of that risk."
    },
    {
      "heading": "Match the clinical purpose and combination",
      "body": "The cited single-agent labels indicate these oral medicines as adjuncts to diet and exercise for glucose control in adults with type 2 diabetes; they are not treatments for type 1 diabetes. A modest oral, weight-neutral option may fit a patient whose glucose needs, tolerability, access and preferences support it. Do not select DPP-4 inhibition to obtain the proven heart-failure or kidney benefits of an outcome-directed alternative. Avoid combining a DPP-4 inhibitor with a GLP-1 receptor agonist: their overlapping incretin mechanisms do not justify routine duplication. Check each component of a combination tablet separately, because the partner medicine can impose additional renal or administration limits."
    },
    {
      "heading": "Dose sitagliptin at the exact eGFR boundary",
      "body": "Januvia is taken once daily with or without food. Its usual dose is 100 mg daily when eGFR is at least 45 mL/min/1.73 m². At eGFR at least 30 but below 45, use 50 mg daily; below 30, including end-stage renal disease requiring hemodialysis or peritoneal dialysis, use 25 mg daily. Dialysis timing does not determine administration. Assess renal function before initiation and periodically thereafter. An eGFR exactly 45 belongs to the usual-dose category, not the 50 mg category; exactly 30 belongs to the 50 mg category. The book’s abbreviated 30-45 table entry needs these precise label boundaries."
    },
    {
      "heading": "Use linagliptin without a renal dose reduction",
      "body": "Tradjenta is 5 mg once daily with or without food and requires no renal dose adjustment. Its predominantly nonrenal elimination can simplify dosing during kidney decline, but it does not remove other safety considerations or guarantee efficacy. Strong P-glycoprotein or CYP3A4 inducers, such as rifampin, can reduce linagliptin exposure and effectiveness; the label strongly recommends an alternative treatment. The book also lists carbamazepine, phenytoin and St. John’s wort as strong-inducer concerns. Do not compensate by inventing a higher linagliptin dose or applying saxagliptin’s inhibitor-based 2.5 mg rule."
    },
    {
      "heading": "Separate saxagliptin renal and interaction rules",
      "body": "Onglyza is 2.5 mg or 5 mg once daily with or without meals. When eGFR is below 45 mL/min/1.73 m², including end-stage renal disease requiring hemodialysis, the dose is 2.5 mg daily; administer after hemodialysis. At eGFR at least 45, the usual dosing options apply unless another restriction requires 2.5 mg. Strong CYP3A4/5 inhibitors, including clarithromycin, itraconazole, ketoconazole, atazanavir and ritonavir, increase exposure and limit the dose to 2.5 mg daily even when renal function is adequate. Assess kidney function before initiation and as clinically indicated. Peritoneal dialysis has not been studied. Do not cut, crush or chew the tablets; after a missed dose, resume with the next dose rather than taking an extra dose."
    },
    {
      "heading": "Dose alogliptin by creatinine clearance",
      "body": "Nesina is usually 25 mg once daily with or without food when creatinine clearance is at least 60 mL/min. At creatinine clearance at least 30 but below 60, use 12.5 mg daily; below 30, including end-stage renal disease requiring hemodialysis, use 6.25 mg daily. Hemodialysis timing does not determine administration, and peritoneal dialysis has not been studied. Assess renal function before initiation and periodically thereafter. Creatinine clearance is expressed in mL/min, whereas the sitagliptin and saxagliptin eGFR thresholds use mL/min/1.73 m²; do not substitute one threshold or unit for another. Do not split Nesina tablets or double the next dose after a missed dose."
    },
    {
      "heading": "Keep heart-failure warnings product specific",
      "body": "The book identifies heart-failure hospitalization signals with saxagliptin and alogliptin and notes that warnings extend across the class. The cited sitagliptin and linagliptin labels refer to heart failure observed with two other DPP-4 inhibitors; that wording does not prove an identical trial result for every member. Consider risks and benefits in patients with heart failure or renal impairment, monitor symptoms and counsel patients to report new breathlessness, swelling or other concerning changes promptly. If heart failure develops, evaluate and manage it and consider discontinuing the DPP-4 inhibitor. A safety warning is not evidence of heart-failure benefit, and it is not a universal formal contraindication equivalent to serious product hypersensitivity."
    },
    {
      "heading": "Respond to pancreatitis and renal deterioration",
      "body": "Pancreatitis has been reported with DPP-4 inhibitors. Severe persistent abdominal pain, sometimes radiating to the back and with or without vomiting, requires prompt assessment; discontinue the suspected medicine when pancreatitis is suspected and initiate appropriate management. The cited labels do not establish whether prior pancreatitis increases recurrence risk during use, so do not describe that history as either risk free or an identical formal contraindication for all products. Sitagliptin also has postmarketing reports of acute renal failure, including some patients with renal impairment who received inappropriate doses. Monitor renal function and match the dose; a report alone does not establish that every episode of kidney injury is drug caused."
    },
    {
      "heading": "Evaluate alogliptin hepatic symptoms",
      "body": "The book identifies an alogliptin hepatotoxicity warning. The current Nesina label describes fatal and nonfatal hepatic failure reports while noting that some reports lack enough information to establish the cause. Fatigue, poor appetite, right upper abdominal discomfort, dark urine or jaundice warrants prompt liver testing and clinical evaluation. In that setting, clinically significant enzyme elevations with persistent or worsening abnormalities call for interrupting treatment and investigating the cause; do not restart without another explanation for the abnormalities. Do not reduce this warning to routine reassurance or infer a mandatory baseline-test instruction that the cited current label does not state."
    },
    {
      "heading": "Act on serious hypersensitivity",
      "body": "A history of a serious hypersensitivity reaction to the exact product or its relevant ingredients is a labeled contraindication. Anaphylaxis, angioedema and severe skin reactions have been reported, sometimes after the first dose. If a serious hypersensitivity reaction is suspected, stop the medicine, evaluate other causes and arrange alternative diabetes treatment. A history of angioedema with a different DPP-4 inhibitor requires caution because cross-predisposition is uncertain; do not turn that caution into proof that switching is safe or an identical formal contraindication in every label. Common nasopharyngitis or respiratory symptoms described in the book do not explain away airway swelling or severe skin disease."
    },
    {
      "heading": "Recognize disabling joint pain and blistering disease",
      "body": "Severe disabling arthralgia can begin from one day to years after starting a DPP-4 inhibitor. Consider the medicine as a possible cause and discontinue it when appropriate; recurrence has been reported after restarting the same or a different member, so switching does not guarantee resolution. Bullous pemphigoid is a separate serious warning: new blisters or erosions require prompt assessment. If bullous pemphigoid is suspected, discontinue the DPP-4 inhibitor and consider dermatology referral for diagnosis and treatment. Do not treat tense bullae as ordinary dry skin or rely on a dose reduction while delaying evaluation."
    },
    {
      "heading": "Reassess the whole regimen",
      "body": "Track glucose response, A1C, renal function where required, heart-failure symptoms, adverse effects, access and continued need. Adding a DPP-4 inhibitor to insulin or a secretagogue can increase hypoglycemia, so an individualized reduction of the insulin or secretagogue may be needed with monitoring; there is no universal percentage reduction for this class. During disrupted feeding or poor intake, reconcile the whole glucose-lowering regimen rather than assuming that low intrinsic DPP-4 hypoglycemia makes every accompanying medicine safe. Product administration instructions remain specific: do not apply the no-cut/no-crush Onglyza instruction as proof that every other tablet is suitable for crushing or tube delivery. Check the exact formulation and an appropriate administration reference before changing its dosage form."
    }
  ],
  "keyPoints": [
    "Modest glucose lowering and weight neutrality do not establish cardiorenal outcome benefit.",
    "Use exact renal thresholds and units; linagliptin requires no renal dose adjustment.",
    "Strong CYP3A4/5 inhibitors limit saxagliptin to 2.5 mg daily; strong inducers favor an alternative to linagliptin.",
    "Suspected pancreatitis, serious hypersensitivity or bullous pemphigoid requires stopping the suspected medicine and prompt evaluation."
  ],
  "check": {
    "question": "Which DPP-4 inhibitor generally does not require kidney-based dose adjustment?",
    "choices": [
      "Linagliptin",
      "Sitagliptin",
      "Alogliptin",
      "Saxagliptin"
    ],
    "answer": 0,
    "rationale": "Linagliptin is primarily eliminated through nonrenal pathways and generally does not require renal dose adjustment.",
    "reviewHref": "#dpp4-inhibitor-pharmacotherapy"
  }
});
noninsulinDiabetesPharmacotherapyModule.references.push(...[
  {
    "label": "Merck Januvia prescribing information (July 2023)",
    "href": "https://www.merck.com/product/usa/pi_circulars/j/januvia/januvia_pi.pdf"
  },
  {
    "label": "DailyMed Tradjenta prescribing information (June 2023)",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c797ea5c-cab7-494b-9044-27eba0cfe40f"
  },
  {
    "label": "FDA Onglyza prescribing information (October 2024)",
    "href": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/022350s026lbl.pdf"
  },
  {
    "label": "DailyMed Nesina prescribing information (February 2025)",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a3768c7e-aa4c-44d3-bc53-43bb7346c0b0"
  }
]);


// Whole secretagogue lesson reviewed against the book and exact product labels.
Object.assign(noninsulinDiabetesPharmacotherapyModule.submodules.find(item => item.slug === "insulin-secretagogue-pharmacotherapy"), {
  "slug": "insulin-secretagogue-pharmacotherapy",
  "title": "Sulfonylureas and Meglitinides",
  "visual": "noninsulin-secretagogues",
  "summary": "Sulfonylureas and meglitinides stimulate insulin release from functioning beta cells. Formulation-specific dosing, meal timing, kidney and liver function, and interacting medicines determine their substantial hypoglycemia risk.",
  "concepts": [
    "Beta-cell potassium-channel closure and glucose dependence",
    "Immediate-release versus extended-release glipizide",
    "Conventional versus micronized glyburide",
    "Meal-linked glinide dosing and product-specific interactions",
    "Hypoglycemia prevention, rescue and regimen reassessment"
  ],
  "application": "Balance cost and glucose lowering against hypoglycemia, weight gain and meal reliability. Identify the exact product and formulation, reconcile kidney function and interactions, and reduce treatment burden when recurrent lows outweigh benefit.",
  "lesson": [
    {
      "heading": "Stimulate functioning beta cells",
      "body": "Sulfonylureas bind beta-cell sulfonylurea receptors and close ATP-sensitive potassium channels, stimulating insulin release. Meglitinides also act through beta-cell potassium channels and require functioning beta cells. The repaglinide and nateglinide labels describe their insulin release as glucose dependent and diminished at low glucose; do not describe every secretagogue as equally glucose independent. Both groups nevertheless cause hypoglycemia and weight gain. The book describes declining sulfonylurea effectiveness as beta-cell function falls and faster, shorter meal-linked action with glinides."
    },
    {
      "heading": "Match the treatment purpose and expected response",
      "body": "These medicines are adjuncts to diet and exercise for glucose control in adults with type 2 diabetes, not substitutes for insulin in type 1 diabetes or diabetic ketoacidosis. The book gives approximate A1C reductions of 1-2 percentage points with sulfonylureas and 0.5-1.5 with glinides; individual response varies. Lower-cost glucose lowering can be useful, but do not infer established cardiorenal outcome benefit from an A1C response. The book advises avoiding older first-generation sulfonylureas such as chlorpropamide, tolazamide and tolbutamide because of prolonged hypoglycemia, and identifies glyburide and glimepiride as unfavorable choices in older adults."
    },
    {
      "heading": "Dose immediate-release glipizide before meals",
      "body": "Glucotrol immediate-release generally starts at 5 mg about 30 minutes before breakfast; older patients or those with liver disease may start at 2.5 mg. Adjust in 2.5-5 mg increments with at least several days between changes, using glucose response. The maximum recommended once-daily dose is 15 mg. Higher daily doses are generally divided before meals with adequate calories; the maximum total is 40 mg per day. A 20 mg daily prescription therefore requires review of divided administration rather than treating 20 mg as a routine single morning dose. These instructions apply to immediate-release glipizide, not XL."
    },
    {
      "heading": "Keep extended-release glipizide intact",
      "body": "Glucotrol XL generally starts at 5 mg once daily with breakfast or the first main meal; start at 2.5 mg in patients at increased hypoglycemia risk, including older patients and those with hepatic insufficiency. Its maximum is 20 mg once daily. Swallow the tablet whole: do not divide, chew, crush or dissolve it, including for tube delivery. The empty shell may appear in stool after medicine release and does not by itself indicate failed absorption. Avoid XL in preexisting severe gastrointestinal narrowing. The label permits an IR-to-XL switch at the nearest equivalent total daily dose, but XL’s 20 mg ceiling still applies; the 40 mg IR ceiling is not an XL dose."
    },
    {
      "heading": "Start glimepiride conservatively",
      "body": "Glimepiride starts at 1 or 2 mg once daily with breakfast or the first main meal. Start at 1 mg in patients at increased hypoglycemia risk, including older adults and those with renal impairment. After reaching 2 mg daily, further increases are 1 or 2 mg no more often than every 1-2 weeks, with conservative titration in high-risk patients. The maximum is 8 mg once daily. Kidney impairment does not make usual initiation appropriate merely because a higher maintenance dose is available. A transition from a long-acting sulfonylurea can produce overlapping effects, so monitor for hypoglycemia."
    },
    {
      "heading": "Distinguish the two glyburide formulations",
      "body": "Conventional glyburide generally starts at 2.5-5 mg daily with breakfast or the first main meal; patients more sensitive to hypoglycemia may start at 1.25 mg. Its maximum is 20 mg per day. Micronized Glynase PresTab starts at 1.5-3 mg daily, or 0.75 mg in more sensitive patients, with a maximum of 12 mg per day. Conventional and micronized products are not bioequivalent substitutes: reassess and retitrate rather than exchange milligram for milligram. Renal or hepatic insufficiency increases the risk of serious, prolonged hypoglycemia; the book advises avoiding glyburide in older adults. The cited labels describe weak metabolite activity and no significant expected human hypoglycemic contribution, so do not present clinically important active metabolites as a settled explanation for that risk."
    },
    {
      "heading": "Link repaglinide to actual meals",
      "body": "Repaglinide starts at 0.5 mg before each meal when A1C is below 8%, or 1-2 mg when A1C is at least 8%, unless a renal or interaction restriction requires a lower start. The labeled range is 0.5-4 mg per meal, with a total maximum of 16 mg daily. Allow at least one week to assess each dose change. Take it within 30 minutes before meals; two, three or four daily doses follow the meal pattern. Skip the corresponding dose when a meal is skipped, and reduce dosing when hypoglycemia occurs. Do not add the omitted dose to dinner or take a fasting dose to preserve a fixed daily count. The book’s abbreviated 0.5-2 mg range is not the full labeled per-meal range."
    },
    {
      "heading": "Use repaglinide renal and hepatic limits",
      "body": "At creatinine clearance 20-40 mL/min, initiate repaglinide at 0.5 mg before each meal and titrate carefully. Initial adjustment is not required for the label’s mild-to-moderate range of 40-80 mL/min. Studies did not include creatinine clearance below 20 mL/min or renal failure requiring hemodialysis, so do not claim unrestricted dialysis use. These are creatinine-clearance criteria in mL/min, not an interchangeable eGFR table. Moderate-to-severe liver impairment can produce higher and more prolonged exposure; use caution and longer intervals between dose adjustments to assess the response."
    },
    {
      "heading": "Give nateglinide before each meal",
      "body": "Nateglinide is usually 120 mg three times daily before meals, or 60 mg three times daily when the patient is near the glycemic goal at initiation. Take it 1-30 minutes before meals and skip the dose if the meal is skipped. The cited label recommends no dosage adjustment for mild-to-severe renal impairment, but renal impairment can still increase hypoglycemia risk. Mild hepatic impairment requires no adjustment; moderate-to-severe hepatic impairment has not been studied and calls for caution. Do not transfer repaglinide’s renal starting dose or interaction ceilings to nateglinide."
    },
    {
      "heading": "Apply the exact repaglinide interaction rule",
      "body": "Gemfibrozil markedly increases repaglinide exposure, and the combination is contraindicated; separating administration or merely reducing the dose does not remove that prohibition. Avoid repaglinide with clopidogrel. If that combination cannot be avoided, the label specifies initiation at 0.5 mg before meals, a maximum total of 4 mg daily and increased glucose monitoring. With cyclosporine, the repaglinide maximum total is 6 mg daily with increased monitoring. Other CYP2C8 or CYP3A4 inhibitors and inducers may require dose review and closer monitoring. Distinguish per-meal doses from total daily ceilings."
    },
    {
      "heading": "Check sulfonylurea interactions and warning symptoms",
      "body": "CYP2C9 inhibition can increase sulfonylurea exposure: fluconazole may increase glimepiride concentrations, whereas rifampin may reduce them and worsen glucose control. Oral miconazole with sulfonylureas has been associated with severe hypoglycemia. Glucotrol XL, glimepiride and glyburide labels specify administration at least four hours before colesevelam to avoid reduced absorption. Alcohol can worsen hypoglycemia risk. Beta-blockers can blunt warning symptoms such as tremor or palpitations, particularly with nonselective agents; the book notes that sweating and hunger can remain. Absence of a racing pulse does not exclude a low glucose value."
    },
    {
      "heading": "Respect product-specific contraindications and G6PD warnings",
      "body": "Check the exact label and allergy history. Hypersensitivity to the prescribed drug or relevant ingredients is a contraindication. Glucotrol XL and the cited glimepiride label also list hypersensitivity to sulfonamide derivatives; the book’s discussion of unlikely cross-reactivity does not authorize bypassing those product contraindications. Sulfonylureas can cause hemolytic anemia in G6PD deficiency: the XL label says to avoid use, whereas the cited IR glipizide, glimepiride and glyburide labels advise caution and considering a non-sulfonylurea alternative. Glyburide with bosentan is contraindicated because of increased liver-enzyme risk. Suspected serious hypersensitivity requires stopping the suspected medicine and prompt clinical assessment."
    },
    {
      "heading": "Prevent predictable hypoglycemia during disrupted intake",
      "body": "Review meal timing, food access, alcohol, exercise, kidney and liver function, cognition, symptom awareness, driving and every accompanying glucose-lowering medicine. Glinides are explicitly meal linked: omit the dose when the meal is omitted. A longer-acting sulfonylurea can continue exerting an effect even after a later dose is withheld. Poor intake or interrupted feeding calls for prompt review of dosing and a clear individualized monitoring and restart plan; do not extrapolate one fixed hold interval to every product. Patients and caregivers need a practical recognition and rescue plan, and glucose monitoring becomes especially important when symptoms are blunted."
    },
    {
      "heading": "Treat a low glucose value and anticipate recurrence",
      "body": "For an alert person who can swallow safely, the book recommends 15-20 g of rapidly absorbed carbohydrate or glucose, followed by a glucose recheck after 15 minutes and repeat treatment if still low. Once glucose normalizes, a meal or snack helps prevent another episode; high-fat foods delay the initial response. Severe hypoglycemia with inability to swallow safely, unconsciousness, seizure or marked neurologic impairment requires emergency treatment with intravenous glucose or an appropriate glucagon product, not oral food or fluid. Secretagogue-related hypoglycemia can recur after apparent recovery, so continued observation and regimen review may be necessary. A brief improvement does not establish lasting resolution."
    },
    {
      "heading": "Reassess benefit, combinations and recurrent lows",
      "body": "Follow glucose trends, A1C, weight, kidney and liver changes, adverse effects and continued need. Adding more glucose-lowering treatment may require reducing or stopping the secretagogue. Recurrent overnight lows in an older adult taking glyburide call for treatment reassessment and often replacement, rather than routinely adding calories to preserve the same dose. Insulin combinations increase hypoglycemia risk; the book advises avoiding sulfonylurea-insulin and glinide-insulin combinations, but the labels do not make every such combination an identical formal contraindication. Repaglinide specifically is not indicated with NPH insulin because of serious cardiovascular adverse-event signals. Sulfonylurea cardiovascular-mortality label warnings originate from the UGDP tolbutamide study; do not portray its result as an identical trial finding for every modern member."
    }
  ],
  "keyPoints": [
    "Both groups can cause hypoglycemia and weight gain despite differences in duration and glucose dependence.",
    "Glucotrol IR and XL have different timing and dose ceilings; swallow XL whole.",
    "Conventional and micronized glyburide are not bioequivalent substitutes; retitrate when switching.",
    "Skip a glinide dose when its meal is skipped; repaglinide with gemfibrozil is contraindicated."
  ],
  "check": {
    "question": "An adult skips lunch while taking repaglinide before meals. Which plan best follows its administration instruction?",
    "choices": [
      "Skip the repaglinide dose corresponding to lunch.",
      "Take the lunch dose without food because short action eliminates hypoglycemia risk.",
      "Add the missed lunch dose to the usual dinner dose.",
      "Take the lunch dose at bedtime without a meal to preserve three daily doses."
    ],
    "answer": 0,
    "rationale": "Repaglinide is meal linked: skip its dose when the corresponding meal is skipped. Short action does not eliminate hypoglycemia. A skipped dose should not be added to another meal or taken at bedtime without food.",
    "reviewHref": "#insulin-secretagogue-pharmacotherapy"
  }
});
noninsulinDiabetesPharmacotherapyModule.references.push(...[
  {
    "label": "Pfizer Glucotrol immediate-release prescribing information (August 2023)",
    "href": "https://labeling.pfizer.com/ShowLabeling.aspx?format=PDF&id=579"
  },
  {
    "label": "Pfizer Glucotrol XL prescribing information (August 2023)",
    "href": "https://labeling.pfizer.com/ShowLabeling.aspx?format=PDF&id=585"
  },
  {
    "label": "DailyMed Teva conventional glyburide prescribing information",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=50d16f1d-c814-4411-8749-62561321ecce"
  },
  {
    "label": "DailyMed Glynase PresTab prescribing information (August 2023)",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a7fce80a-2f13-43cc-8e1c-561f7d3ec3d5"
  },
  {
    "label": "DailyMed Aurobindo glimepiride prescribing information (March 2026)",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=28eefc95-d92e-4555-b6c5-2933860b0610"
  },
  {
    "label": "DailyMed Northstar/Macleods repaglinide prescribing information",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7f3118ce-fcbb-4f8b-b1ba-d8cd95e5b665"
  },
  {
    "label": "DailyMed Rising/USV nateglinide prescribing information (December 2024)",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b41f4180-96a7-411d-b827-5021e534f556"
  }
]);
