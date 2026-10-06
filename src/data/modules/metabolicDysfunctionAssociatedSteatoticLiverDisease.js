import { metabolicDysfunctionAssociatedSteatoticLiverDiseaseQuestionBank } from "@/data/questionBanks/metabolicDysfunctionAssociatedSteatoticLiverDisease";

const check=(question,choices,rationale,slug)=>({question,choices,answer:0,rationale,reviewHref:`#${slug}`});
const section=(slug,title,summary,concepts,application,lesson,keyPoints,quiz)=>({slug,title,visual:`masld-${slug}`,summary,concepts,application,lesson:lesson.map(([heading,body])=>({heading,body})),keyPoints,check:quiz});

export const metabolicDysfunctionAssociatedSteatoticLiverDiseaseModule={
  slug:"metabolic-dysfunction-associated-steatotic-liver-disease",number:"220",title:"Metabolic Dysfunction-Associated Steatotic Liver Disease",
  source:"Current AASLD MASLD practice guidance and updates, current FDA prescribing information for resmetirom and semaglutide, and contemporary noninvasive fibrosis assessment guidance",
  description:"Trace metabolic liver injury from steatosis through fibrosis, stage risk without reflex biopsy, and select longitudinal and disease-directed care for MASLD and MASH.",
  topics:["MASLD","MASH","Fibrosis","FIB-4","Elastography","Resmetirom","Semaglutide","Cardiometabolic risk","Cirrhosis prevention"],
  outcomes:["Use current steatotic liver disease nomenclature.","Explain insulin resistance, lipotoxicity, inflammation, and fibrosis.","Identify metabolic risk and competing liver disease.","Calculate and interpret FIB-4.","Choose secondary fibrosis assessment and referral.","Prescribe measurable nutrition, activity, and weight goals.","Treat cardiovascular and metabolic risk.","Use resmetirom safely in an eligible patient.","Use semaglutide safely for its MASH indication.","Choose and monitor disease-directed therapy.","Recognize cirrhosis and surveillance boundaries.","Build an integrated longitudinal plan."],
  submodules:[
    section("nomenclature-spectrum","Name the Disease and Its Stage","Steatotic liver disease is an umbrella. MASLD requires hepatic steatosis plus cardiometabolic risk, while MASH adds hepatocellular injury and inflammation that can drive fibrosis.",["SLD","MASLD","MASH","MetALD","Fibrosis stage"],"Describe steatosis, inflammatory phenotype, fibrosis stage, alcohol exposure, metabolic criteria, and any competing cause instead of using fatty liver as a complete diagnosis.",[["Use current terms","MASLD and MASH replace historical NAFLD and NASH terminology. Older trials and labels may retain the historical terms, so translate them without changing the studied population."],["Separate activity from stage","Steatosis and inflammatory activity can fluctuate, while fibrosis is the strongest liver-related prognostic feature. Normal aminotransferases do not exclude advanced disease."],["Classify alcohol explicitly","Quantify amount, pattern, and time course. MetALD describes metabolic disease with alcohol exposure in a defined range, while greater exposure can shift the primary classification."],["Name what changes care","Document F0 through F4 fibrosis context, current decompensation, cardiometabolic disease, and whether treatment eligibility has been established."]],["Use current nomenclature.","Fibrosis predicts outcome.","Normal ALT is not clearance.","Alcohol history is quantitative."],check("Which feature most strongly predicts liver-related outcomes in MASLD?",["Fibrosis stage","One normal ALT value","Ultrasound brightness alone","Body weight alone"],"Fibrosis stage is the principal liver-related prognostic feature.","nomenclature-spectrum")),
    section("pathobiology","Follow Metabolic Stress to Fibrosis","Insulin resistance increases fatty-acid delivery and hepatic lipid production. Lipotoxicity, oxidative stress, cell injury, immune signaling, and stellate-cell activation connect metabolism to scar.",["Insulin resistance","De novo lipogenesis","Lipotoxicity","Inflammation","Stellate cells"],"Use the mechanism to explain why liver care and cardiometabolic care must proceed together.",[["Build the substrate load","Adipose insulin resistance increases free-fatty-acid flux, while hyperinsulinemia and carbohydrate excess promote hepatic de novo lipogenesis."],["Distinguish storage from injury","Neutral triglyceride storage is not identical to toxic lipid signaling. Lipotoxic species, mitochondrial stress, and endoplasmic-reticulum stress can promote cell injury."],["Connect injury to scar","Damaged hepatocytes and immune signaling activate stellate cells, which deposit extracellular matrix and remodel sinusoidal architecture."],["Recognize heterogeneity","Genetics, visceral adiposity, diabetes, sleep apnea, diet, activity, medicines, alcohol, and social context alter progression even at similar body mass."]],["Insulin resistance supplies substrate.","Lipotoxicity drives injury.","Stellate cells create fibrosis.","Phenotype is heterogeneous."],check("What directly produces hepatic fibrosis?",["Activated stellate cells depositing extracellular matrix","Triglyceride storage alone","A single elevated glucose","Ultrasound attenuation"],"Stellate-cell activation links chronic injury to scar formation.","pathobiology")),
    section("risk-secondary-causes","Confirm the Phenotype and Competing Causes","Steatosis can coexist with viral, alcohol-related, autoimmune, genetic, endocrine, nutritional, and medication-related injury.",["Metabolic criteria","Alcohol exposure","Viral hepatitis","Medication review","Genetic disease"],"Confirm the metabolic phenotype while actively testing plausible alternatives and contributors.",[["Inventory metabolic risk","Assess adiposity, waist distribution, blood pressure, glucose status, lipids, sleep apnea, kidney disease, cardiovascular disease, and family history."],["Quantify exposures","Review alcohol in standard drinks and grams, supplements, corticosteroids, amiodarone, tamoxifen, methotrexate, valproate, and other context-dependent contributors."],["Exclude by probability","Use history, examination, hepatitis testing, iron studies, autoimmune evaluation, and age-specific genetic testing when clinical probability supports them."],["Avoid a diagnosis of exclusion only","Positive metabolic criteria and steatosis establish MASLD, but coexistence matters because another disease can change urgency and treatment."]],["Phenotype the whole patient.","Quantify alcohol.","Review medicines and supplements.","Coexisting disease is common."],check("What is the best first response to steatosis with elevated enzymes?",["Define metabolic risk and evaluate plausible competing causes","Assume MASLD explains everything","Use ALT alone to stage fibrosis","Delay all evaluation until symptoms occur"],"MASLD can coexist with other liver injury and requires structured evaluation.","risk-secondary-causes")),
    section("fib4-screening","Start With a Simple Fibrosis Risk Gate","FIB-4 uses age, AST, ALT, and platelets to identify patients who can remain in primary care surveillance and those who need a second test.",["Age","AST","ALT","Platelets","FIB-4"],"Use FIB-4 as a triage tool, not a diagnosis, and avoid interpreting it during acute illness.",[["Calculate correctly","FIB-4 equals age multiplied by AST, divided by platelet count multiplied by the square root of ALT. Confirm units and current stable values."],["Use common thresholds","In many adults, a value below 1.3 has useful negative predictive value. A value at least 1.3 generally prompts secondary assessment, while values above 2.67 increase concern."],["Adapt for age","FIB-4 performs poorly below age 35. In adults older than 65, a higher lower threshold, commonly 2.0, reduces false positives."],["Set reassessment cadence","Higher metabolic risk, especially type 2 diabetes or multiple risk factors, supports more frequent reassessment than a low-risk phenotype."]],["FIB-4 is triage.","Do not use it in acute illness.","Age changes interpretation.","Risk determines follow-up cadence."],check("A stable 52-year-old with MASLD has FIB-4 of 1.6. What follows?",["Secondary fibrosis assessment","No further evaluation ever","Immediate transplant listing","Diagnosis of cirrhosis from FIB-4 alone"],"A FIB-4 at or above 1.3 generally requires a secondary noninvasive test.","fib4-screening")),
    section("secondary-assessment","Resolve Risk With Elastography or ELF","Vibration-controlled transient elastography and ELF are common second-line tools. Magnetic resonance elastography and biopsy answer selected unresolved questions.",["VCTE","ELF","MRE","Biopsy","Referral"],"Escalate testing according to uncertainty, fibrosis probability, technical quality, and whether the result changes management.",[["Choose a second test","VCTE measures liver stiffness and can include steatosis assessment. ELF uses serum fibrosis markers. Interpret either within validated cutoffs and clinical context."],["Check quality and confounders","Inflammation, congestion, cholestasis, recent food intake, body habitus, and technical reliability can distort stiffness."],["Reserve advanced tools","MRE is highly accurate when uncertainty persists. Biopsy is useful for discordant tests, diagnostic uncertainty, or when histology will change a consequential decision."],["Refer deliberately","High or discordant noninvasive risk, persistent enzyme elevation, suspected advanced fibrosis, or another liver disease warrants hepatology involvement."]],["Use sequential testing.","Quality metrics matter.","Biopsy is selective.","Discordance needs resolution."],check("What is appropriate after FIB-4 of 1.7?",["VCTE or ELF as secondary assessment","Label F4 disease immediately","Repeat ultrasound only","Ignore the result if ALT is normal"],"Sequential noninvasive testing improves fibrosis risk classification.","secondary-assessment")),
    section("lifestyle","Prescribe Lifestyle as Measurable Therapy","Nutrition, activity, sleep, alcohol reduction, and durable weight loss improve metabolic health and liver disease, but advice must become a supported plan.",["Weight loss","Mediterranean pattern","Exercise","Alcohol","Behavior support"],"Set a specific behavior, measurement, support, and reassessment date rather than advising the patient to try harder.",[["Match weight loss to outcome","Even modest loss can reduce steatosis. Greater sustained loss, often above 10 percent, is more likely to improve MASH and fibrosis, although benefit is not limited to patients with obesity."],["Build the eating pattern","Favor minimally processed foods, unsaturated fats, fiber, vegetables, legumes, whole grains, and reduced sugar-sweetened beverages within cultural and financial reality."],["Prescribe activity","Aerobic and resistance activity can reduce liver fat and improve cardiometabolic fitness independent of major weight loss. Start from function and progress safely."],["Design maintenance","Use dietitian access, behavioral treatment, anti-obesity therapy, bariatric evaluation when appropriate, sleep care, and scheduled follow-up to protect durability."]],["Make goals measurable.","Food quality matters.","Exercise helps without weight loss.","Maintenance requires support."],check("Which lifestyle plan is strongest?",["A measurable nutrition and activity plan with support and reassessment","A one-time instruction to lose weight","Prolonged fasting for everyone","Exercise only after ALT rises"],"Durable change requires a specific supported plan and follow-up.","lifestyle")),
    section("cardiometabolic-care","Treat the Major Competing Risk","Cardiovascular disease is a leading cause of death in MASLD. Lipids, blood pressure, diabetes, kidney disease, sleep apnea, tobacco, and obesity are liver care.",["ASCVD","Statins","Diabetes","Obesity","Sleep apnea"],"Treat cardiovascular and metabolic risk to evidence-based targets instead of withholding effective therapy because steatosis is present.",[["Use statins appropriately","Statins are generally safe across the MASLD spectrum, including compensated cirrhosis when indicated. Monitor according to the drug and clinical context rather than avoiding treatment reflexively."],["Choose diabetes therapy deliberately","Select glucose-lowering therapy for cardiovascular, kidney, weight, and liver context. Insulin may be necessary even though it can promote weight gain."],["Treat obesity as disease","Combine behavior, pharmacotherapy, and metabolic surgery assessment when indicated. Weight loss can improve multiple causal drivers at once."],["Protect the entire system","Address blood pressure, sleep apnea, tobacco, kidney disease, vaccination, reproductive goals, and access barriers in the same longitudinal plan."]],["ASCVD risk is central.","Statins are usually safe.","Diabetes therapy is individualized.","Obesity treatment is longitudinal."],check("What is the best response to an indicated statin in MASLD?",["Use it with appropriate monitoring","Avoid every statin because steatosis exists","Wait for cirrhosis","Replace it with an unregulated supplement"],"MASLD alone is not a reason to withhold indicated statin therapy.","cardiometabolic-care")),
    section("resmetirom","Use Resmetirom as Targeted Thyroid-Hormone Biology","Resmetirom is a liver-directed thyroid hormone receptor beta agonist approved under accelerated approval for adults with noncirrhotic MASH and moderate-to-advanced fibrosis consistent with F2 to F3.",["THR-beta","F2 to F3","Weight-based dose","CYP2C8","OATP"],"Confirm noncirrhotic F2 to F3 eligibility, then reconcile interacting drugs, statin exposure, liver tests, thyroid context, and gallbladder risk.",[["Connect mechanism to effect","Selective hepatic THR-beta activation changes lipid metabolism, lowers hepatic fat and atherogenic lipids, and avoids intentional systemic THR-alpha stimulation."],["Dose by actual body weight","The labeled dose is 80 mg once daily below 100 kg and 100 mg once daily at or above 100 kg, with or without food. Tablets are swallowed whole."],["Screen interactions","Avoid strong CYP2C8 inhibitors such as gemfibrozil and OATP1B1 or OATP1B3 inhibitors such as cyclosporine. A moderate CYP2C8 inhibitor such as clopidogrel requires label-directed dose reduction."],["Monitor the labeled risks","Watch for hepatotoxicity and gallbladder-related events. Resmetirom can increase exposure to selected statins, so follow labeled statin dose limits and assess liver or muscle toxicity."]],["Confirm F2 to F3 noncirrhotic disease.","Dose at the 100 kg boundary.","CYP2C8 and OATP interactions matter.","Monitor liver, gallbladder, and statin safety."],check("What is the labeled resmetirom dose for an eligible 104 kg adult without an interacting drug?",["100 mg once daily","80 mg once weekly","2.4 mg once weekly","100 mg twice daily"],"Adults weighing at least 100 kg receive 100 mg once daily.","resmetirom")),
    section("semaglutide","Use Semaglutide for MASH and Metabolic Benefit","Wegovy is approved under accelerated approval for adults with noncirrhotic MASH and F2 to F3 fibrosis, alongside diet and increased physical activity.",["GLP-1 receptor","F2 to F3","Titration","2.4 mg weekly","Boxed warning"],"Match the exact product and indication, titrate gradually, and plan around gastrointestinal, gallbladder, pancreatic, glycemic, renal, reproductive, and peri-procedural risk.",[["Use the labeled population","The MASH indication is for adults with noncirrhotic disease and moderate-to-advanced fibrosis consistent with F2 to F3. Do not assume a weight-loss indication proves MASH eligibility."],["Titrate to maintenance","Start 0.25 mg subcutaneously weekly for four weeks, then increase every four weeks through 0.5, 1, and 1.7 mg to 2.4 mg weekly. The label permits 1.7 mg if 2.4 mg is not tolerated."],["Apply major safety screens","Avoid use with personal or family history of medullary thyroid carcinoma, MEN2, or serious hypersensitivity. Review pancreatitis, gallbladder disease, severe gastrointestinal symptoms, hypoglycemia risk with insulin or secretagogues, and dehydration-related kidney injury."],["Counsel across transitions","Teach injection, missed-dose rules, symptom escalation, glucose monitoring when relevant, aspiration risk before procedures, and reproductive planning according to current labeling."]],["Use the MASH-specific indication.","Titrate every four weeks.","Target 2.4 mg weekly.","Screen boxed-warning and GI risks."],check("What is the Wegovy maintenance dose for MASH?",["2.4 mg subcutaneously once weekly","100 mg orally daily","0.25 mg weekly indefinitely","2.4 mg orally daily"],"The labeled MASH maintenance dose is 2.4 mg once weekly, with 1.7 mg allowed if 2.4 mg is not tolerated.","semaglutide")),
    section("selection-monitoring","Choose Therapy by Phenotype and Follow Response","Resmetirom and semaglutide share an F2 to F3 noncirrhotic treatment boundary but differ in mechanism, route, metabolic effects, interactions, and adverse-effect profile.",["Eligibility","Shared decision","Baseline","Response","Persistence"],"Choose therapy through fibrosis confidence, metabolic goals, contraindications, interactions, patient preference, access, and a predefined monitoring plan.",[["Confirm before prescribing","Verify adult noncirrhotic MASH with F2 to F3 fibrosis using appropriate noninvasive or histologic evidence and resolve discordant results."],["Match phenotype","Semaglutide may align with obesity, diabetes, and cardiovascular goals. Resmetirom is oral and liver-directed but requires careful interaction and statin management."],["Define baseline and follow-up","Record weight, waist, liver tests, glucose, lipids, fibrosis tests, symptoms, medicines, thyroid context when relevant, and treatment-specific safety variables."],["Interpret response as a pattern","Follow adherence, tolerability, metabolic response, liver biochemistry, and validated fibrosis or imaging measures. Do not declare histologic cure from one enzyme value."]],["Eligibility comes first.","Mechanism and phenotype guide choice.","Monitoring is therapy specific.","One ALT value is not response."],check("What should precede either approved disease-directed therapy?",["Confirmation of noncirrhotic MASH with F2 to F3 fibrosis","Ultrasound steatosis alone","One elevated ALT value","Patient age alone"],"Both current indications require a defined noncirrhotic F2 to F3 population.","selection-monitoring")),
    section("cirrhosis-boundary","Recognize the Cirrhosis Boundary","F4 disease changes surveillance, portal-hypertension assessment, medication evidence, procedure risk, and transplant awareness. Disease-directed F2 to F3 labels should not be stretched across that boundary.",["F4","HCC surveillance","Portal hypertension","Decompensation","Investigational therapy"],"If cirrhosis is suspected, confirm stage and activate cirrhosis care rather than simply continuing an earlier-stage pathway.",[["Do not miss advanced disease","Platelets, splenomegaly, nodular morphology, stiffness, collaterals, synthetic dysfunction, and prior decompensation can reveal cirrhosis even when symptoms are mild."],["Activate surveillance","Cirrhosis generally requires HCC surveillance and portal-hypertension assessment, plus vaccination, nutrition, medication safety, and decompensation education."],["Respect label boundaries","Resmetirom and semaglutide MASH approvals specify noncirrhotic F2 to F3 disease. Cirrhosis requires specialist decisions and evidence appropriate to that population."],["Separate pipeline from practice","Agents such as efruxifermin remain investigational unless and until regulatory approval and current labeling establish a clinical role."]],["F4 changes the pathway.","Cirrhosis triggers surveillance.","Do not extend labels casually.","Investigational is not approved."],check("How should efruxifermin be described in current clinical teaching?",["Investigational","FDA approved for every MASLD stage","Equivalent to resmetirom labeling","Standard cirrhosis therapy"],"Trial activity does not establish regulatory approval or routine clinical use.","cirrhosis-boundary")),
    section("integrated-case","Build a Longitudinal MASLD Plan","A durable plan connects diagnostic certainty, fibrosis risk, metabolic disease, treatment eligibility, safety, behavior support, and ownership of future results.",["Stage","Drivers","Therapy","Monitoring","Ownership"],"Write the plan so another clinician can see what is known, what is uncertain, what happens next, and who owns each result.",[["State the phenotype","Record current nomenclature, fibrosis evidence, alcohol exposure, competing causes, metabolic diseases, and cardiovascular risk."],["Sequence the work","Move from FIB-4 to secondary testing when indicated, resolve discordance, and refer without waiting for decompensation."],["Layer treatment","Use supported lifestyle care and cardiometabolic therapy for everyone, then add eligible disease-directed treatment with exact dosing and safety controls."],["Close the loop","Assign dates and owners for laboratory monitoring, weight and metabolic follow-up, fibrosis reassessment, adverse-effect review, surveillance if cirrhosis emerges, and access barriers."]],["Name stage and drivers.","Use sequential testing.","Layer treatment.","Assign ownership."],check("What makes a MASLD plan closed loop?",["Dated monitoring and named ownership for each next action","A diagnosis without staging","Lifestyle advice without follow-up","A prescription without safety review"],"A closed-loop plan defines timing, thresholds, and responsibility.","integrated-case")),
  ],
  questionBank:metabolicDysfunctionAssociatedSteatoticLiverDiseaseQuestionBank,
  references:[
    {label:"AASLD MASLD practice guidance and updates",href:"https://www.aasld.org/practice-guidelines/clinical-assessment-and-management-metabolic-dysfunction-associated-steatotic"},
    {label:"FDA Rezdiffra prescribing information",href:"https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/217785s002s004s005lbl.pdf"},
    {label:"FDA Wegovy prescribing information",href:"https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/215256s024lbl.pdf"},
    {label:"AASLD noninvasive MASLD assessment",href:"https://www.aasld.org/liver-fellow-network/core-series/clinical-pearls/spare-me-jab-noninvasive-assessment-patients-masld"},
  ],
};


// Source-reconciled adult fibrosis-risk assessment and escalation pathway.
const verifiedMasldFibrosisLessons = {
  "fib4-screening": {
    "metadata": {
      "summary": "Calculate FIB-4 with the correct units, then qualify the result by age, clinical stability, metabolic risk, and the need for secondary testing.",
      "concepts": [
        "Formula and units",
        "Age limits",
        "Stable values",
        "Risk thresholds",
        "Reassessment"
      ],
      "application": "Use the adult MASLD pathway to decide on follow-up, secondary assessment, or referral; do not turn a FIB-4 result into a fibrosis-stage diagnosis.",
      "keyPoints": [
        "Use years, U/L, and platelet counts in 10⁹/L.",
        "FIB-4 is a risk assessment, not a histologic stage.",
        "Age and acute illness limit interpretation.",
        "Low risk still requires appropriate follow-up."
      ]
    },
    "bodies": [
      {
        "heading": "Calculate correctly",
        "body": "FIB-4 = [age in years × AST in U/L] ÷ [platelets in 10⁹/L × √(ALT in U/L)]. The platelet value 200 × 10⁹/L is entered as 200, not 200,000. Put the entire platelet-times-square-root product in the denominator. Confirm the units and use values that represent the patient’s stable clinical state."
      },
      {
        "heading": "Use common thresholds",
        "body": "In a stable adult aged 35 through 65, FIB-4 below 1.3 generally supports follow-up in primary care when clinical findings agree. FIB-4 at least 1.3 calls for secondary fibrosis assessment, usually VCTE or ELF, or referral for risk stratification. FIB-4 above 2.67 supports direct gastroenterology or hepatology referral. These are risk categories, not exact histologic stages; a result alone does not diagnose MASH or cirrhosis."
      },
      {
        "heading": "Adapt for age",
        "body": "FIB-4 has low accuracy below age 35. Consider secondary assessment in a younger adult with increased metabolic risk or elevated liver chemistries, even when FIB-4 is low. For adults older than 65, the AASLD pathway uses a higher lower cutoff of 2.0, with a value above 2.0 prompting further assessment. Do not apply the usual 1.3 cutoff mechanically across every age or treat an age-adjusted low result as conclusive when clinical concern persists."
      },
      {
        "heading": "Set reassessment cadence",
        "body": "For a low-risk result consistent with the clinical picture, consider repeating FIB-4 every 1-2 years in patients with prediabetes, type 2 diabetes, or at least two metabolic risk factors. Adults without prediabetes or type 2 diabetes and with fewer than two metabolic risk factors can generally be reassessed every 2-3 years. New clinical concern can warrant earlier evaluation; a low result does not end longitudinal care."
      },
      {
        "heading": "Recognize situations where the score misleads",
        "body": "Do not use FIB-4 to stage fibrosis during acute illness. Acute changes in aminotransferases or platelets can distort a score built from those variables. Assess the acute problem and revisit fibrosis risk when appropriate. Normal AST or ALT, few symptoms, or a low FIB-4 should not override evidence that raises concern for advanced disease."
      },
      {
        "heading": "Work through a stable-patient calculation",
        "body": "A stable 50-year-old has AST 60 U/L, ALT 100 U/L, and platelets 200 × 10⁹/L. FIB-4 = (50 × 60) ÷ (200 × √100) = 3,000 ÷ 2,000 = 1.50. In this age group, the result meets the threshold for secondary assessment. It does not establish F2, F3, or F4 disease or make biopsy automatic."
      },
      {
        "heading": "Read the pathway in context",
        "body": "The thresholds and intervals here follow the adult AASLD 2023 guidance and the subsequent MASLD nomenclature update. Use the fibrosis assessment algorithm for its intended population and setting. A formula reference developed for HIV/HCV may display different interpretation thresholds; verify the MASLD pathway rather than transferring those cutoffs into this lesson."
      }
    ],
    "check": {
      "question": "A stable 52-year-old with MASLD has FIB-4 of 1.6 and no acute illness. What follows?",
      "choices": [
        "Arrange VCTE or ELF, or referral for secondary fibrosis risk assessment.",
        "Assign cirrhosis solely from the FIB-4 value.",
        "Stop fibrosis follow-up if ALT is within the laboratory reference range.",
        "Require liver biopsy before any other risk assessment."
      ],
      "rationale": "At age 52, FIB-4 of 1.6 meets the usual 1.3 threshold for secondary assessment. VCTE or ELF, or referral for risk stratification, can refine risk. FIB-4 alone does not establish cirrhosis, normal ALT does not exclude advanced fibrosis, and biopsy is selective."
    }
  },
  "secondary-assessment": {
    "metadata": {
      "summary": "Use VCTE or ELF to refine fibrosis risk, check reliability and clinical agreement, and select specialist testing or biopsy when uncertainty matters.",
      "concepts": [
        "VCTE and CAP",
        "ELF purpose",
        "Test reliability",
        "MRE",
        "Selective biopsy"
      ],
      "application": "Resolve intermediate, high, or discordant results with an appropriate next test or specialist review; match each cutoff to its test and purpose.",
      "keyPoints": [
        "VCTE stiffness and CAP answer different questions.",
        "Inflammation or congestion can increase stiffness.",
        "VCTE and MRE cutoffs are not interchangeable.",
        "Discordance needs resolution; biopsy is selective."
      ]
    },
    "bodies": [
      {
        "heading": "Choose a second test",
        "body": "After an elevated or indeterminate FIB-4, VCTE or ELF is usually an initial secondary assessment in primary care or endocrinology. VCTE measures liver stiffness; its controlled attenuation parameter, CAP, assesses steatosis rather than fibrosis stage. ELF is a blood-based fibrosis-marker panel and can be useful when elastography is unavailable. Choose the method according to access and clinical context."
      },
      {
        "heading": "Check quality and confounders",
        "body": "Liver stiffness can increase with marked inflammation, passive congestion, or infiltrative disease as well as fibrosis. Check the examination’s technical reliability and whether the result agrees with the patient’s clinical findings. A questionable measurement or an acute confounder should prompt reassessment or another appropriate test rather than a confident stage assignment."
      },
      {
        "heading": "Reserve advanced tools",
        "body": "MRE can help resolve indeterminate noninvasive tests or persistent suspicion of more advanced disease in specialist care. Its stiffness scale differs from VCTE even though both report kPa; do not transfer a VCTE cutoff directly to MRE. Consider biopsy selectively for indeterminate or discordant assessment, competing diagnoses, persistent liver-chemistry elevation, or when histology will clarify a consequential decision."
      },
      {
        "heading": "Refer deliberately",
        "body": "Consider direct gastroenterology or hepatology referral for FIB-4 above 2.67 or aminotransferases persistently above normal for more than six months. Refer for further evaluation when secondary testing remains intermediate or high risk, tests are discordant, advanced disease is suspected, or another liver disease may be present. Normal ALT alone does not cancel the need to resolve fibrosis risk."
      },
      {
        "heading": "Interpret VCTE as a risk assessment",
        "body": "In the AASLD adult pathway, VCTE liver stiffness below 8 kPa helps exclude advanced fibrosis when used sequentially and the clinical picture agrees. Values between 8 and 12 kPa need further interpretation, and values above 12 kPa raise concern for advanced fibrosis. A high stiffness result has limited positive predictive value and must be assessed in context; it is not automatically a diagnosis of cirrhosis."
      },
      {
        "heading": "Keep ELF purpose and cutoff together",
        "body": "ELF can provide secondary risk assessment, but its thresholds depend on the clinical question. In confirmed or suspected advanced fibrosis, an ELF value at least 11.3 predicts future liver-related events; that prognostic use differs from merely screening for fibrosis. Do not call 11.3 the universal threshold for every ELF decision, or convert the score directly into a histologic stage."
      },
      {
        "heading": "Resolve a discordant case",
        "body": "A patient’s FIB-4 is low, but other clinical or imaging findings suggest advanced disease. Reconcile the findings with a specialist instead of accepting the low score as definitive. Additional noninvasive testing, including MRE when appropriate, or selective biopsy may resolve uncertainty. Conversely, if cirrhosis is sufficiently supported by noninvasive tests, clinical data, or imaging, cirrhosis-based care can begin without making biopsy mandatory."
      }
    ],
    "check": {
      "question": "A stable 48-year-old with suspected MASLD has FIB-4 of 1.7. Which initial secondary assessment is appropriate?",
      "choices": [
        "VCTE or ELF, interpreted with clinical findings and test limitations.",
        "Use CAP alone to assign a fibrosis stage.",
        "Apply VCTE stiffness thresholds directly to an MRE result.",
        "Assign F4 disease from FIB-4 without further assessment."
      ],
      "rationale": "VCTE or ELF can refine risk after this FIB-4 result. CAP assesses steatosis, VCTE and MRE have different stiffness scales, and FIB-4 alone cannot assign F4 disease."
    }
  }
};
for (const lesson of metabolicDysfunctionAssociatedSteatoticLiverDiseaseModule.submodules) {
  const verified = verifiedMasldFibrosisLessons[lesson.slug];
  if (verified) {
    Object.assign(lesson, verified.metadata);
    lesson.lesson = verified.bodies;
    Object.assign(lesson.check, verified.check);
  }
}
metabolicDysfunctionAssociatedSteatoticLiverDiseaseModule.references.push(...[
  {
    "label": "AASLD adult NAFLD practice guidance (2023): fibrosis assessment pathway and test interpretation",
    "href": "https://doi.org/10.1097/HEP.0000000000000323"
  },
  {
    "label": "AASLD MASLD nomenclature update (2024): application of the adult pathway",
    "href": "https://pubmed.ncbi.nlm.nih.gov/38445559/"
  },
  {
    "label": "University of Washington FIB-4 formula and input units; use MASLD-specific thresholds for this lesson",
    "href": "https://www.hepatitisc.uw.edu/page/clinical-calculators/fib-4"
  }
]);


// Source-reconciled adult SLD phenotype, mechanisms and competing causes.
const verifiedMasldFoundationLessons = {
  "nomenclature-spectrum": {
    "metadata": {
      "summary": "Name the cause of steatosis, distinguish MASH activity from fibrosis, and classify alcohol exposure quantitatively.",
      "concepts": [
        "SLD umbrella",
        "Positive metabolic criteria",
        "MASH activity",
        "Fibrosis stage",
        "MetALD"
      ],
      "application": "Describe metabolic criteria, alcohol exposure, inflammatory phenotype, fibrosis evidence, and coexisting liver disease as separate parts of the assessment.",
      "keyPoints": [
        "Steatosis plus at least one metabolic criterion supports MASLD.",
        "MASH and fibrosis describe different features.",
        "Fibrosis is central to liver-related prognosis.",
        "Alcohol categories do not define a safe intake."
      ]
    },
    "bodies": [
      {
        "heading": "Use current terms",
        "body": "Steatotic liver disease, SLD, includes several causes of hepatic fat accumulation. MASLD replaces the historical NAFLD name, and MASH replaces NASH. When interpreting an older trial, retain its actual inclusion criteria and alcohol limits; a new name does not expand the population studied or establish treatment eligibility."
      },
      {
        "heading": "Establish the metabolic phenotype",
        "body": "In an adult with hepatic steatosis, MASLD requires at least one of five cardiometabolic criteria involving adiposity, glucose, blood pressure, triglycerides, or HDL cholesterol. Obesity and diabetes are not both mandatory. Evaluate alcohol exposure and other discernible causes before assigning the final SLD subtype; metabolic and other liver disease can coexist."
      },
      {
        "heading": "Separate activity from stage",
        "body": "MASH describes steatosis with hepatocellular injury, including ballooning, and inflammation. It can occur with or without fibrosis. Fibrosis describes scar and is the main determinant of liver-related prognosis. Steatosis on imaging or an elevated ALT alone does not establish the full histologic MASH phenotype or a particular fibrosis stage."
      },
      {
        "heading": "Classify alcohol explicitly",
        "body": "Record grams consumed, drinking pattern, frequency, duration, and changes over time. In the adult nomenclature, MetALD combines metabolic steatotic disease with approximately 140-350 g/week in females or 210-420 g/week in males, corresponding to 20-50 or 30-60 g/day. Higher intake favors primarily alcohol-associated liver disease. These are classification ranges, not safe-drinking limits; lower intake can still contribute to progression."
      },
      {
        "heading": "Name what changes care",
        "body": "Record fibrosis evidence and its certainty rather than using fatty liver as the complete diagnosis. F3 denotes bridging fibrosis and F4 denotes cirrhosis; cirrhosis can be compensated before decompensation develops. Distinguish inflammation, scar, and complications. Liver-related risk rises with fibrosis, while cardiovascular and other competing risks remain relevant."
      },
      {
        "heading": "Do not use normal enzymes as clearance",
        "body": "Aminotransferases reflect aspects of injury and may be normal in advanced disease. One normal ALT or the absence of symptoms cannot rule out clinically important fibrosis. Assess fibrosis risk with the appropriate pathway and reconcile any disagreement between laboratory results, imaging, and clinical findings."
      }
    ],
    "check": {
      "question": "Which feature most strongly informs liver-related prognosis in MASLD?",
      "choices": [
        "Fibrosis stage, interpreted with the clinical findings.",
        "One normal ALT value that permanently excludes progression.",
        "Ultrasound steatosis alone, which establishes a fibrosis stage.",
        "Body weight alone, regardless of other findings."
      ],
      "rationale": "Fibrosis is the main determinant of liver-related outcomes. ALT, the presence of steatosis, and body weight do not independently establish the amount of scar or exclude advanced disease."
    }
  },
  "pathobiology": {
    "metadata": {
      "summary": "Connect fatty-acid supply and lipid handling to hepatocyte stress, immune signaling, and stellate-cell scar formation without assuming uniform progression.",
      "concepts": [
        "Substrate supply",
        "De novo lipogenesis",
        "Lipid species",
        "Hepatocyte injury",
        "Stellate cells"
      ],
      "application": "Explain why the liver phenotype reflects metabolic load, tissue responses, and modifying factors rather than the amount of stored triglyceride alone.",
      "keyPoints": [
        "Adipose insulin resistance increases fatty-acid delivery.",
        "Lipid storage and lipotoxic injury differ.",
        "Immune and stellate-cell responses link injury to scar.",
        "Progression varies between patients."
      ]
    },
    "bodies": [
      {
        "heading": "Build the substrate load",
        "body": "Adipose insulin resistance impairs normal restraint of lipolysis, increasing free-fatty-acid delivery to the liver. Excess carbohydrate supply can promote hepatic de novo lipogenesis, the synthesis of new fatty acids. The resulting phenotype depends on delivery, utilization, oxidation, storage, and export, not on one pathway acting in isolation."
      },
      {
        "heading": "Distinguish storage from injury",
        "body": "Triglyceride in lipid droplets represents steatosis but is not equivalent to inflammatory injury or fibrosis. Lipotoxic lipid species and disturbed lipid handling can contribute to hepatocyte stress. Mitochondrial dysfunction, endoplasmic-reticulum stress, and inflammatory signaling are linked pathways; the amount of visible fat alone cannot describe their activity."
      },
      {
        "heading": "Connect injury to scar",
        "body": "Stressed or injured hepatocytes and resident immune-cell responses contribute to inflammatory signaling and stellate-cell activation. Activated hepatic stellate cells deposit extracellular matrix, linking chronic injury to scar formation. Steatosis, inflammation, and fibrosis are related features, but their presence and severity are not interchangeable."
      },
      {
        "heading": "Recognize heterogeneity",
        "body": "Genetic variation, visceral adiposity, diabetes, dietary exposures, activity, alcohol, and environmental or social conditions influence disease course. Similar BMI or liver-fat measurements can therefore coexist with different injury and fibrosis risk. MASLD can occur in people without obesity; body size alone does not exclude a metabolic phenotype."
      },
      {
        "heading": "Keep the model within its evidence",
        "body": "These mechanisms describe interacting contributors, not a fixed timetable through which every patient progresses. AASLD notes that oxidative-stress markers are consistently observed in NASH, while the precise causal role of oxidative stress in humans remains uncertain. Genetic associations do not justify routine gene-based risk stratification for every patient. Use clinical fibrosis assessment rather than inferring a stage from a mechanistic explanation."
      }
    ],
    "check": {
      "question": "Which cellular response most directly links chronic hepatocyte injury to hepatic scar formation?",
      "choices": [
        "Activated hepatic stellate cells depositing extracellular matrix.",
        "Triglyceride storage alone assigning an F4 stage.",
        "A single glucose measurement creating a histologic stage.",
        "Ultrasound brightness measuring stellate-cell activity directly."
      ],
      "rationale": "Stellate-cell activation and extracellular-matrix deposition produce scar in the injury response. Stored lipid, glucose values, and ultrasound steatosis do not themselves establish a fibrosis stage."
    }
  },
  "risk-secondary-causes": {
    "metadata": {
      "summary": "Measure the adult metabolic criteria, quantify exposures, and investigate plausible competing causes before attributing steatosis or abnormal liver tests to MASLD.",
      "concepts": [
        "Five metabolic criteria",
        "Alcohol history",
        "Medication timeline",
        "Initial evaluation",
        "Atypical phenotype"
      ],
      "application": "Build a positive metabolic assessment and a targeted search for additional disease, with clear follow-up for abnormal findings.",
      "keyPoints": [
        "At least one metabolic criterion is needed with steatosis.",
        "Risk criteria are not treatment targets.",
        "Other causes can coexist.",
        "Medication exposure requires clinical causal assessment."
      ]
    },
    "bodies": [
      {
        "heading": "Inventory metabolic risk",
        "body": "Assess weight history, central adiposity, blood pressure, glucose status, lipids, sleep-apnea risk, kidney and cardiovascular disease, and family history. Diabetes and multiple metabolic abnormalities increase concern for progressive liver disease. Normal BMI does not exclude MASLD; document the measured metabolic criteria rather than assuming that appearance establishes or rules out disease. Selected endocrine conditions may coexist; hypothyroidism associations remain mixed, and steatosis alone does not justify routine hormone screening."
      },
      {
        "heading": "Apply adiposity and glucose criteria",
        "body": "The adult adiposity criterion is BMI at least 25 kg/m², or at least 23 kg/m² for Asian populations, or waist circumference above 94 cm in males or 80 cm in females, with ethnicity-adjusted thresholds where appropriate. The glucose criterion includes fasting glucose at least 100 mg/dL, two-hour post-load glucose at least 140 mg/dL, HbA1c at least 5.7%, type 2 diabetes, or its treatment. These are alternatives within each criterion; all measurements need not be abnormal."
      },
      {
        "heading": "Apply blood-pressure and lipid criteria",
        "body": "The remaining adult criteria are blood pressure at least 130/85 mmHg or specific antihypertensive treatment; triglycerides at least 150 mg/dL or lipid-lowering treatment; and HDL cholesterol at most 40 mg/dL in males or 50 mg/dL in females, or lipid-lowering treatment. Steatosis plus at least one of the five criteria supports the metabolic phenotype. These classification thresholds are not individual treatment targets and do not determine fibrosis stage."
      },
      {
        "heading": "Quantify exposures",
        "body": "Take an alcohol history in grams as well as beverage amount, pattern, and duration. Reconcile prescribed drugs, nonprescription products, and supplements with start dates, dose changes, indications, and the laboratory timeline. AASLD identifies amiodarone, tamoxifen, methotrexate, corticosteroids, 5-fluorouracil, and irinotecan as potential contributors to steatosis or steatohepatitis. Valproate is another potential hepatotoxic exposure. These exposures can involve different injury mechanisms; a list alone does not establish causality."
      },
      {
        "heading": "Evaluate plausible alternatives",
        "body": "Initial assessment includes history, examination, a hepatic panel, CBC with platelets, glucose and HbA1c, lipids, kidney assessment, and appropriate viral-hepatitis evaluation. Persistently abnormal liver chemistries or an atypical presentation can support additional autoimmune serologies, transferrin saturation, ceruloplasmin, or alpha-1 antitrypsin testing according to the clinical question. Use the phenotype and test results to refine the evaluation rather than ordering every rare-disease test indiscriminately."
      },
      {
        "heading": "Recognize a nutritional or genetic clue",
        "body": "Steatosis in a patient with marked malnutrition, short bowel, or prior bypass surgery warrants consideration of nutrient deficiencies such as choline or carnitine. Young age with neuropsychiatric findings and low ceruloplasmin can raise concern for Wilson disease. Marked LDL elevation, low HDL, and unusually early fibrosis can suggest lysosomal acid lipase deficiency. These clues prompt directed testing; they do not establish the diagnosis by themselves."
      },
      {
        "heading": "Assess medicines in context",
        "body": "A patient with steatosis and a potentially implicated medicine needs a causal assessment, not automatic attribution to MASLD or automatic withdrawal of every drug. Review the timing, biochemical pattern, alternative causes, therapeutic need, and appropriate safety information with the treating clinician. If drug-induced liver injury is suspected, the response depends on its severity and clinical context; do not derive a universal stopping threshold or a class-wide prohibition from a historical list."
      },
      {
        "heading": "Avoid a diagnosis of exclusion only",
        "body": "MASLD uses positive steatosis and cardiometabolic criteria, but positive criteria do not close the differential diagnosis. Viral hepatitis, alcohol, medications, autoimmune disease, and selected genetic or nutritional conditions may add to the liver phenotype and change management. Record what is established, what remains uncertain, which results need follow-up, and whether findings warrant specialist assessment."
      }
    ],
    "check": {
      "question": "A patient has hepatic steatosis and elevated liver enzymes. What is the best initial approach?",
      "choices": [
        "Define metabolic criteria and exposures, then evaluate plausible competing or coexisting causes.",
        "Assume MASLD explains every abnormality without reviewing history or medicines.",
        "Assign a fibrosis stage solely from the ALT concentration.",
        "Delay evaluation until jaundice or other symptoms appear."
      ],
      "rationale": "Positive metabolic criteria support MASLD, while the history, examination, laboratory pattern, and exposure timeline guide evaluation for additional liver injury. ALT alone cannot stage fibrosis, and symptom absence does not close the evaluation."
    }
  }
};
for (const lesson of metabolicDysfunctionAssociatedSteatoticLiverDiseaseModule.submodules) {
  const verified = verifiedMasldFoundationLessons[lesson.slug];
  if (verified) {
    Object.assign(lesson, verified.metadata);
    lesson.lesson = verified.bodies;
    Object.assign(lesson.check, verified.check);
  }
}
metabolicDysfunctionAssociatedSteatoticLiverDiseaseModule.references.push(...[
  {
    "label": "AASLD SLD nomenclature and adult cardiometabolic criteria",
    "href": "https://www.aasld.org/new-masld-nomenclature"
  }
] );


// Verified lifestyle outcomes and product-specific cardiometabolic decisions.
const verifiedMasldLifestyleCardiometabolicLessons = {
  "lifestyle": {
    "metadata": {
      "summary": "Translate nutrition, activity, alcohol counseling, and appropriate weight management into a supported plan with measurable goals and follow-up.",
      "concepts": [
        "Outcome-specific weight goals",
        "Food quality",
        "Physical activity",
        "Alcohol abstinence with F2 or greater",
        "Long-term support"
      ],
      "application": "Agree on a feasible nutrition change and activity schedule, document the outcome being targeted, arrange support, and set a reassessment date.",
      "keyPoints": [
        "Modest weight loss can improve steatosis; fibrosis improvement generally requires greater loss.",
        "Activity can benefit the liver without weight loss.",
        "Clinically significant fibrosis warrants complete alcohol abstinence.",
        "Tailor the plan to nutrition, function, access, and preferences."
      ]
    },
    "bodies": [
      {
        "heading": "Match weight loss to outcome",
        "body": "For an adult with overweight or obesity, an individualized calorie deficit can support weight reduction. AASLD describes 3-5% weight loss as improving steatosis, while greater sustained loss, generally above 10%, is needed to improve steatohepatitis and fibrosis. These are outcome-specific associations, not guaranteed responses or proof that a particular patient’s scar has resolved. A lean patient can benefit from diet quality and activity without automatically needing weight loss."
      },
      {
        "heading": "Work the percentage correctly",
        "body": "Weight loss (%) = (starting weight - current weight) / starting weight × 100. A change from 100 kg to 96 kg is 4%: (100 - 96) / 100 × 100 = 4. This fits the modest-loss range associated with steatosis improvement; it does not demonstrate MASH resolution or fibrosis regression. Keep the same units and starting-weight denominator when following the trend."
      },
      {
        "heading": "Build the eating pattern",
        "body": "Favor fiber-rich vegetables, legumes, whole grains, and unsaturated fats while reducing excess saturated fat, refined carbohydrates, and sugar-sweetened beverages. A Mediterranean-style pattern has cardiovascular benefits and can reduce liver fat, but superiority over every other sustainable dietary approach is not established. Adapt food choices to culture, preferences, affordability, and nutritional needs rather than prescribing one universal restrictive diet."
      },
      {
        "heading": "Prescribe activity",
        "body": "Physical activity has liver and cardiometabolic benefits independent of weight loss. Tailor aerobic and resistance activity to the patient’s abilities and preferences. A practical moderate aerobic target is at least 150 minutes per week when feasible; five 30-minute sessions total 150 minutes. Start from current function and progress safely. A stable scale weight or normal ALT is not a reason to defer activity."
      },
      {
        "heading": "Address alcohol explicitly",
        "body": "Reassess the amount and pattern of alcohol use over time. Alcohol can contribute to liver disease progression, and a nomenclature boundary is not a safe-drinking limit. AASLD recommends complete abstinence for clinically significant fibrosis, F2 or greater. A general diabetes recommendation to avoid or moderate alcohol must not override this fibrosis-specific advice."
      },
      {
        "heading": "Design maintenance",
        "body": "Arrange continuing dietitian and behavioral support, assess social and psychological barriers, and schedule follow-up. Review weight trajectory, activity, diet, metabolic measures, and liver-risk assessment in context. Consider anti-obesity pharmacotherapy or metabolic surgery assessment when indicated; these support sustained treatment rather than replace nutrition and activity. Discuss sleep symptoms and connect suspected sleep apnea with appropriate evaluation."
      },
      {
        "heading": "Respect nutrition and cirrhosis boundaries",
        "body": "Metabolic surgery can benefit eligible patients without cirrhosis, but eligibility and procedure selection require an individualized assessment. Compensated cirrhosis calls for expert benefit-risk review; decompensated cirrhosis is not a routine weight-loss surgery indication. In cirrhosis, prioritize adequate protein, muscle function, and avoidance of malnutrition, with activity adapted to physical limitations. Do not apply a calorie deficit indiscriminately to a frail or malnourished patient."
      }
    ],
    "check": {
      "question": "An adult with obesity and MASLD has lost 4% of starting weight. Which counseling statement is most accurate?",
      "choices": [
        "This can improve steatosis, while MASH and fibrosis outcomes require separate assessment and generally greater sustained loss.",
        "A 4% loss proves complete fibrosis regression.",
        "Any loss below 10% provides no liver benefit.",
        "The percentage must be calculated using current weight as the denominator."
      ],
      "rationale": "AASLD links modest 3-5% loss with steatosis improvement and generally greater than 10% loss with improvement in steatohepatitis and fibrosis. Neither a weight target nor its achievement proves an individual histologic response. Calculate percentage change from starting weight."
    }
  },
  "cardiometabolic-care": {
    "metadata": {
      "summary": "Treat cardiovascular, kidney, diabetes, obesity, and sleep-related risk alongside fibrosis care, using evidence for the exact product and patient population.",
      "concepts": [
        "ASCVD prevention",
        "Statins and cirrhosis context",
        "Cardiorenal diabetes therapy",
        "Pioglitazone safety",
        "Coordinated longitudinal care"
      ],
      "application": "Connect each medicine to its intended outcome, verify product-specific eligibility and safety, and document who will reassess cardiometabolic and liver findings.",
      "keyPoints": [
        "MASLD alone does not justify withholding an indicated statin.",
        "Compensated and decompensated cirrhosis require different risk assessment.",
        "Glucose, heart failure, kidney, weight, and MASH benefits are separate claims.",
        "Pioglitazone’s possible liver benefit does not remove its heart-failure risk."
      ]
    },
    "bodies": [
      {
        "heading": "Use statins appropriately",
        "body": "Cardiovascular disease is a leading competing cause of death in MASLD. Select statin therapy and intensity according to lipid findings and ASCVD risk, with monitoring matched to the drug and clinical context. MASLD alone does not justify withholding an indicated statin; statins are generally safe in compensated cirrhosis. Decompensated cirrhosis requires greater caution, an individualized benefit-risk decision, and careful monitoring. Suspected drug-induced liver injury still needs evaluation."
      },
      {
        "heading": "Separate cardiovascular and liver outcomes",
        "body": "A statin treats cardiovascular risk; it is not a treatment for MASH histology. Similarly, metformin and DPP-4 inhibitors may serve a glycemic indication but should not be selected as MASH-directed treatment on the assumption that glucose lowering proves histologic benefit. Continue appropriate comorbidity treatment while assessing liver disease separately."
      },
      {
        "heading": "Choose diabetes therapy deliberately",
        "body": "For adults with type 2 diabetes, consider ASCVD, heart failure, kidney disease, weight goals, hypoglycemia risk, cost, and preferences alongside A1C. Current ADA guidance recommends agents with demonstrated cardiovascular or kidney benefits in the relevant population irrespective of A1C. SGLT2 glucose lowering declines as kidney function falls, while cardiorenal benefit can persist; check the exact product’s indication, kidney-use criteria, volume status, and safety rather than treating every product as interchangeable."
      },
      {
        "heading": "Match incretin evidence to the phenotype",
        "body": "ADA recommends selected GLP-1 or dual GIP/GLP-1 therapy with demonstrated benefit for adults with type 2 diabetes, obesity, and symptomatic HFpEF, irrespective of A1C. For type 2 diabetes with MASLD and overweight or obesity, consider agents with demonstrated or potential MASH benefit as part of glycemic and weight management. Distinguish evidence, approved indication, formulation, and fibrosis stage. Wegovy injection has a specific FDA indication for adults with noncirrhotic MASH and F2-F3 fibrosis under accelerated approval based on histologic improvement, with clinical benefit subject to confirmatory verification. This does not confer a MASH indication on every incretin product or dose."
      },
      {
        "heading": "Weigh pioglitazone benefit against harm",
        "body": "Pioglitazone is a PPAR-gamma agonist that improves insulin sensitivity. It can be considered for selected adults with type 2 diabetes and MASH, but its FDA indication is glycemic control in type 2 diabetes. Weight gain, edema, heart-failure exacerbation, and fracture risk affect selection. The label does not recommend use in symptomatic heart failure and contraindicates initiation in NYHA class III or IV heart failure. Assess baseline liver tests and investigate suspected injury; potential liver benefit is not a safety exemption."
      },
      {
        "heading": "Reconcile other pioglitazone precautions",
        "body": "Do not use pioglitazone in active bladder cancer; a prior history calls for caution and consideration of benefit versus uncertain recurrence risk, rather than being described as the same contraindication. Review bone health and symptoms of fluid retention. Pioglitazone may restore ovulation in some premenopausal anovulatory patients, so discuss reproductive goals and unintended pregnancy risk. Check concomitant therapy and the exact label before prescribing."
      },
      {
        "heading": "Treat obesity and severe hyperglycemia",
        "body": "Use sustained behavioral support and consider weight-management pharmacotherapy or metabolic surgery assessment when indicated. Insulin can promote weight gain and hypoglycemia, but may still be needed for severe or symptomatic hyperglycemia; do not withhold necessary insulin solely because MASLD or obesity is present. Individualize glucose monitoring, hypoglycemia prevention, and treatment adjustment as nutritional intake and weight change."
      },
      {
        "heading": "Protect the entire system",
        "body": "Address blood pressure, lipids, smoking, kidney disease, and sleep apnea within coordinated follow-up. AASLD advises screening for sleep apnea in patients with metabolic steatotic liver disease who have overweight or obesity and considering sleep studies when risk is high. Keep indicated preventive care, reproductive goals, and access barriers in view. Assign responsibility for follow-up so liver, primary-care, diabetes, and cardiovascular plans remain connected."
      }
    ],
    "check": {
      "question": "An adult with MASLD and compensated cirrhosis has an established cardiovascular indication for a statin and no suspected drug-induced injury. What is the best approach?",
      "choices": [
        "Use an appropriate statin for cardiovascular risk with monitoring matched to the drug and clinical context.",
        "Withhold all statins because MASLD is present.",
        "Prescribe the statin as a proven treatment for MASH histology.",
        "Apply the same safety assessment to every patient with decompensated cirrhosis."
      ],
      "rationale": "MASLD and compensated cirrhosis do not automatically preclude an indicated statin. Its purpose is cardiovascular risk reduction, not MASH histologic treatment. Decompensation requires a more cautious individualized assessment."
    }
  }
};
for (const lesson of metabolicDysfunctionAssociatedSteatoticLiverDiseaseModule.submodules) {
  const verified = verifiedMasldLifestyleCardiometabolicLessons[lesson.slug];
  if (verified) {
    Object.assign(lesson, verified.metadata);
    lesson.lesson = verified.bodies;
    Object.assign(lesson.check, verified.check);
  }
}
metabolicDysfunctionAssociatedSteatoticLiverDiseaseModule.references.push(...[
  {
    "label": "ADA 2026: glucose-lowering treatment, cardiorenal and metabolic comorbidities",
    "href": "https://doi.org/10.2337/dc26-S009"
  },
  {
    "label": "ACTOS (pioglitazone) prescribing information: indication and safety",
    "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=d2ddc491-88a9-4063-9150-443b4fa4330c&type=display"
  }
]);


// Whole resmetirom teaching reconciled to the current product label.
const verifiedMasldResmetiromLesson = {
  "metadata": {
    "summary": "Confirm adult noncirrhotic F2-F3 MASH, select the exact weight and interaction-adjusted dose, and monitor liver, gallbladder, statin, and thyroid findings.",
    "concepts": [
      "Accelerated approval",
      "THR-beta partial agonism",
      "Actual-weight dosing",
      "CYP2C8 and statin interactions",
      "Safety and response"
    ],
    "application": "Verify indication and stage, reconcile the regimen, document the exact dose and statin limits, and teach administration, missed doses, and symptoms requiring prompt contact.",
    "keyPoints": [
      "Use 80 mg daily below 100 kg or 100 mg daily at or above 100 kg before interaction adjustment.",
      "Clopidogrel requires 60 or 80 mg daily by the same weight boundary.",
      "Rosuvastatin/simvastatin: at most 20 mg daily; atorvastatin/pravastatin: at most 40 mg daily.",
      "Suspected hepatotoxicity requires discontinuation; a suspected acute gallbladder event requires interruption.",
      "Histologic improvement does not guarantee an individual response or confirmed clinical benefit."
    ]
  },
  "bodies": [
    {
      "heading": "Confirm the labeled population",
      "body": "Resmetirom (Rezdiffra) is used with diet and exercise for adults with noncirrhotic MASH and moderate-to-advanced fibrosis consistent with F2-F3. Steatosis on ultrasound alone does not establish this treatment population. Its accelerated approval rests on improvement in MASH and fibrosis; continued approval may depend on confirmation of clinical benefit. Do not describe it as an established treatment for every MASLD stage or as proven to prevent clinical liver events."
    },
    {
      "heading": "Connect mechanism to effect",
      "body": "Resmetirom is a partial agonist of thyroid hormone receptor beta (THR-beta), the predominant thyroid hormone receptor in the liver. Hepatic THR-beta stimulation reduces intrahepatic triglycerides. Relative preference for this receptor does not mean zero THR-alpha activity or absence of thyroid effects. This is targeted MASH therapy, not routine thyroid hormone replacement or a substitute for indicated cardiovascular treatment."
    },
    {
      "heading": "Dose by actual body weight",
      "body": "Without a relevant dose-modifying interaction, use 80 mg orally once daily below 100 kg and 100 mg orally once daily at or above 100 kg. Exactly 100 kg belongs in the 100 mg group. Use actual body weight rather than ideal weight or a mg/kg calculation. Tablets are available in 60, 80, and 100 mg strengths; the 60 mg strength supports the reduced-dose regimen."
    },
    {
      "heading": "Teach administration and missed doses",
      "body": "Take the tablet once daily with or without food and swallow it whole; do not split, crush, or chew it. If a dose is missed, skip that dose and resume at the next scheduled time. Do not double the next dose. Store at controlled room temperature, 20-25 degrees C, and keep medicines out of children’s reach. A patient unable to swallow the tablet needs a suitable treatment plan rather than improvised tablet manipulation."
    },
    {
      "heading": "Screen CYP2C8 interactions",
      "body": "Resmetirom is a CYP2C8 substrate. Concomitant strong CYP2C8 inhibitors, such as gemfibrozil, are not recommended. If a moderate inhibitor such as clopidogrel is used, reduce resmetirom to 60 mg once daily below 100 kg or 80 mg once daily at or above 100 kg. For example, an eligible 104 kg adult taking clopidogrel receives the reduced 80 mg daily regimen rather than the usual 100 mg daily regimen. Resmetirom is also a weak CYP2C8 inhibitor: monitor susceptible concomitant substrates more frequently for adverse reactions when small exposure changes could cause serious harm."
    },
    {
      "heading": "Reconcile statins and transporter evidence",
      "body": "Resmetirom increases exposure to atorvastatin, pravastatin, rosuvastatin, and simvastatin. Limit rosuvastatin and simvastatin to 20 mg daily, and atorvastatin and pravastatin to 40 mg daily; monitor for liver-test elevations, myopathy, and rhabdomyolysis. The July 2026 label reports no clinically significant resmetirom pharmacokinetic difference with cyclosporine, an OATP1B1/1B3 and BCRP inhibitor. Do not infer a blanket avoidance rule solely from an in vitro transporter relationship. Reconcile the complete regimen and each medicine’s own risks."
    },
    {
      "heading": "Act on liver and gallbladder symptoms",
      "body": "Monitor liver tests and symptoms during treatment. If hepatotoxicity is suspected, discontinue resmetirom and continue evaluation and monitoring; jaundice, fatigue, nausea, vomiting, fever, rash, or right upper quadrant pain warrant prompt attention. Restarting after tests return to baseline requires a benefit-risk decision, not an automatic rechallenge. Gallstones, acute cholecystitis, and gallstone-related obstructive pancreatitis occurred more often with treatment. Investigate suspected gallstones; interrupt treatment during a suspected acute gallbladder event until it resolves."
    },
    {
      "heading": "Interpret tolerability and thyroid findings",
      "body": "Common adverse reactions include diarrhea, nausea, itching, vomiting, constipation, abdominal pain, and dizziness. Diarrhea and nausea often began early and were leading reasons for discontinuation in trials; assess persistent or troublesome symptoms rather than treating every complaint as disease progression. Free T4 fell in the trials, with minimal changes in T3 or TSH and no associated clinical findings. Review the thyroid context and interpret laboratory changes clinically; a free-T4 change alone is not proof of a clinical thyroid disorder. Liver-test changes likewise require assessment rather than automatic reassurance."
    },
    {
      "heading": "Separate renal, hepatic, and reproductive decisions",
      "body": "The label uses the same recommended dosage in mild, moderate, and severe renal impairment; this does not remove weight-based dosing, interaction adjustments, or monitoring. Avoid use with moderate or severe hepatic impairment (Child-Pugh B or C) and with decompensated cirrhosis. No adjustment for mild hepatic impairment (Child-Pugh A) does not establish safety or effectiveness in MASH cirrhosis. Pediatric safety and effectiveness are not established. Pregnancy outcome data are unavailable, and milk transfer and infant effects are unknown; discuss pregnancy plans and breastfeeding through an individualized benefit-risk assessment and the labeled pregnancy safety study."
    },
    {
      "heading": "Read efficacy without promising cure",
      "body": "The labeled trial analysis included 888 adults with biopsy-confirmed F2-F3 MASH. At month 12, both doses improved the two histologic endpoints versus placebo: MASH resolution without worsening fibrosis, and at least one stage of fibrosis improvement without worsening MASH. Two pathologists read the biopsies independently. For one reading of MASH resolution, 27% at 80 mg versus 13% with placebo is a 14 percentage-point difference, not proof that every patient responds. Histologic endpoints, lower liver fat, improved stiffness, and a lower ALT are not interchangeable with confirmed long-term clinical benefit. Continue assessment of adherence, tolerability, metabolic care, and liver risk."
    }
  ],
  "check": {
    "question": "An eligible 104 kg adult with noncirrhotic F3 MASH takes clopidogrel. What resmetirom regimen matches the label?",
    "choices": [
      "80 mg orally once daily because the moderate CYP2C8 inhibitor requires dose reduction.",
      "100 mg once daily without considering the interaction.",
      "60 mg once weekly because the patient weighs at least 100 kg.",
      "100 mg twice daily to overcome CYP2C8 inhibition."
    ],
    "rationale": "At or above 100 kg, the usual regimen is 100 mg daily, but clopidogrel is a moderate CYP2C8 inhibitor requiring reduction to 80 mg daily. The below-100 kg reduced dose is 60 mg daily. Do not substitute a weekly schedule or increase exposure."
  }
};
for (const lesson of metabolicDysfunctionAssociatedSteatoticLiverDiseaseModule.submodules) {
  if (lesson.slug === "resmetirom") {
    Object.assign(lesson, verifiedMasldResmetiromLesson.metadata);
    lesson.lesson = verifiedMasldResmetiromLesson.bodies;
    Object.assign(lesson.check, verifiedMasldResmetiromLesson.check);
  }
}
const resmetiromReference = metabolicDysfunctionAssociatedSteatoticLiverDiseaseModule.references.find((reference) => reference.label === "FDA Rezdiffra prescribing information");
Object.assign(resmetiromReference, {
  "label": "FDA Rezdiffra prescribing information (July 2026)",
  "href": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/217785s006lbl.pdf"
});
