const concepts=[
  ["nomenclature","MASLD requires steatosis plus cardiometabolic risk, while MASH adds hepatocellular injury and inflammation.","Use current terms while translating historical NAFLD and NASH evidence accurately.","Using fatty liver as a complete diagnosis hides fibrosis stage and competing causes.","nomenclature-spectrum"],
  ["fibrosis-prognosis","Fibrosis stage is the strongest liver-related prognostic feature in MASLD.","Risk-stratify fibrosis even when symptoms or aminotransferases are reassuring.","A normal ALT cannot exclude advanced fibrosis.","nomenclature-spectrum"],
  ["alcohol-classification","Alcohol amount, pattern, and timing determine whether MASLD, MetALD, or alcohol-related disease best describes the phenotype.","Quantify exposure in standard drinks and grams and reassess it longitudinally.","A vague social-use label cannot classify steatotic liver disease.","nomenclature-spectrum"],
  ["insulin-resistance","Adipose insulin resistance and hepatic de novo lipogenesis increase liver fatty-acid exposure.","Treat metabolic drivers together with liver disease.","Triglyceride storage alone does not explain inflammatory injury.","pathobiology"],
  ["lipotoxicity-fibrosis","Lipotoxic stress and hepatocyte injury activate immune pathways and stellate-cell matrix deposition.","Connect metabolic stress to inflammation and scar when explaining progression.","Equating steatosis with fibrosis misreads disease biology.","pathobiology"],
  ["secondary-causes","MASLD can coexist with viral, alcohol-related, autoimmune, genetic, endocrine, nutritional, or medication-related injury.","Evaluate plausible alternatives according to phenotype and probability.","Attributing every abnormal test to MASLD can miss treatable disease.","risk-secondary-causes"],
  ["medication-exposure","Amiodarone, tamoxifen, methotrexate, valproate, corticosteroids, and supplements can matter in context.","Reconcile duration, dose, indication, alternatives, and competing mechanisms.","Stopping every medicine on a historical list without causal assessment can create harm.","risk-secondary-causes"],
  ["fib4-formula","FIB-4 uses age, AST, ALT, and platelet count as an initial fibrosis-risk gate.","Calculate from stable current values and state its limits.","FIB-4 is unreliable during acute illness and is not a fibrosis-stage diagnosis.","fib4-screening"],
  ["fib4-threshold","A FIB-4 below 1.3 often supports primary-care follow-up, while at least 1.3 usually prompts secondary testing.","Adjust interpretation for age and metabolic risk.","Ignoring an intermediate result because ALT is normal can delay fibrosis recognition.","fib4-screening"],
  ["fib4-age","FIB-4 has low accuracy below age 35, and adults older than 65 commonly use 2.0 as the lower concern threshold.","Choose alternative assessment when age limits performance.","Applying one cutoff across every age creates false reassurance or false alarms.","fib4-screening"],
  ["vcte-elf","VCTE or ELF can refine risk after an elevated or indeterminate FIB-4.","Use validated cutoffs, quality metrics, and clinical context.","One technically poor stiffness result should not drive irreversible decisions.","secondary-assessment"],
  ["mre-biopsy","MRE and selective biopsy resolve important uncertainty or discordance.","Escalate only when the result can change diagnosis or management.","Routine biopsy for every patient adds risk without proportional value.","secondary-assessment"],
  ["lifestyle-dose","Modest weight loss reduces steatosis, while greater sustained loss is more likely to improve MASH and fibrosis.","Set measurable nutrition, activity, and maintenance supports.","A one-time instruction to lose weight is not a treatment program.","lifestyle"],
  ["exercise","Aerobic and resistance activity can reduce liver fat and improve fitness even without major weight loss.","Prescribe activity from current function and progress safely.","Withholding activity advice until weight changes misses independent benefit.","lifestyle"],
  ["cardiovascular-risk","Cardiovascular disease is a leading competing cause of death in MASLD.","Treat blood pressure, lipids, glucose, kidney risk, sleep apnea, tobacco, and obesity.","Focusing on ALT while leaving major ASCVD risk untreated is unsafe.","cardiometabolic-care"],
  ["statins","Statins are generally safe and indicated cardiovascular therapy should not be withheld solely because MASLD is present.","Select intensity by ASCVD risk and monitor in clinical context.","Avoiding every statin can expose the patient to preventable cardiovascular events.","cardiometabolic-care"],
  ["resmetirom-eligibility","Resmetirom is approved for adults with noncirrhotic MASH and F2 to F3 fibrosis under accelerated approval.","Confirm fibrosis and absence of cirrhosis before treatment.","Ultrasound steatosis alone does not establish eligibility.","resmetirom"],
  ["resmetirom-dose","Resmetirom is 80 mg daily below 100 kg and 100 mg daily at or above 100 kg.","Use actual weight and current interaction information to select dose.","Confusing the 100 kg boundary can produce the wrong regimen.","resmetirom"],
  ["resmetirom-interactions","Resmetirom is affected by CYP2C8 and OATP inhibitors and can increase exposure to selected statins.","Avoid strong CYP2C8 and OATP inhibitors, reduce dose with moderate CYP2C8 inhibition, and follow statin limits.","Ignoring gemfibrozil, cyclosporine, clopidogrel, or statin exposure can increase toxicity.","resmetirom"],
  ["resmetirom-safety","Hepatotoxicity and gallbladder events require symptom education and clinical monitoring.","Stop and evaluate suspected serious liver injury and assess biliary symptoms promptly.","Calling every enzyme change disease progression without drug assessment can miss toxicity.","resmetirom"],
  ["semaglutide-eligibility","Wegovy is approved for adults with noncirrhotic MASH and F2 to F3 fibrosis under accelerated approval.","Confirm the MASH population instead of borrowing eligibility from obesity alone.","A weight-loss indication is not proof of MASH treatment eligibility.","semaglutide"],
  ["semaglutide-titration","Wegovy starts at 0.25 mg weekly and escalates every four weeks to 2.4 mg weekly for MASH.","Delay escalation when tolerability requires and follow the exact product label.","Starting directly at maintenance dose greatly increases avoidable gastrointestinal toxicity.","semaglutide"],
  ["semaglutide-safety","Semaglutide requires screening for MTC or MEN2, hypersensitivity, pancreatic, gallbladder, gastrointestinal, glycemic, renal, and procedural risk.","Coordinate sick-day, peri-procedural, glucose, and reproductive counseling.","Ignoring persistent vomiting and dehydration can lead to serious complications.","semaglutide"],
  ["therapy-selection","Resmetirom and semaglutide differ in route, mechanism, metabolic benefit, interactions, and adverse effects despite a shared F2 to F3 boundary.","Use phenotype, contraindications, preference, access, and monitoring feasibility in shared selection.","Declaring one universally first-line ignores clinically meaningful heterogeneity.","selection-monitoring"],
  ["response-monitoring","Treatment response is a pattern of adherence, tolerability, metabolic change, liver tests, and validated fibrosis or imaging measures.","Define baseline, timing, targets, and stopping or escalation criteria.","One lower ALT value does not prove fibrosis resolution.","selection-monitoring"],
  ["cirrhosis-boundary","F4 disease changes surveillance, portal-hypertension care, treatment evidence, and transplant awareness.","Activate cirrhosis pathways and specialist management when F4 is suspected.","Extending F2 to F3 labels casually into cirrhosis exceeds current evidence.","cirrhosis-boundary"],
  ["investigational-agents","Efruxifermin and other pipeline agents remain investigational until approval and current labeling establish use.","Describe trial phase, population, endpoint, and regulatory status precisely.","Promising histology data are not equivalent to approval.","cirrhosis-boundary"],
  ["integrated-plan","MASLD care links staging, metabolic drivers, behavior support, therapy, monitoring, and ownership.","Document what is known, what happens next, when, and who owns each result.","A diagnosis without staged follow-up is an open loop.","integrated-case"],
  ["transition-reconciliation","A safe transition preserves the fibrosis stage, treatment indication, exact regimen, interaction plan, and pending results.","Reconcile every medicine and assign laboratory, imaging, referral, and adverse-effect follow-up to a named clinician.","A discharge list without indication, thresholds, or ownership can interrupt effective treatment or conceal toxicity.","integrated-case"],
  ["longitudinal-escalation","Longitudinal care must define when metabolic change, noninvasive fibrosis progression, treatment intolerance, or signs of cirrhosis trigger escalation.","Set dated reassessment and explicit thresholds for hepatology review, therapy change, or cirrhosis care.","Open-ended follow-up without dates or escalation criteria allows progression to remain invisible.","integrated-case"],
];

const dimensions=[
  ["principle","Which statement is most accurate?",0,"foundational"],
  ["application","Which action best applies the evidence?",1,"applied"],
  ["case","Which plan demonstrates the strongest clinical reasoning?",1,"advanced"],
  ["hazard","Which error creates the greatest avoidable risk?",2,"advanced"],
];
const distractors=["Use a single aminotransferase value without fibrosis assessment, medication review, or longitudinal context.","Assume symptom absence proves low risk and eliminates the need for follow-up.","Apply an older algorithm without checking current terminology, guidance, FDA labeling, or patient factors."];

export const metabolicDysfunctionAssociatedSteatoticLiverDiseaseQuestionBank=concepts.flatMap(([slug,principle,action,hazard,lesson],conceptIndex)=>dimensions.map(([dimension,stem,answerType,difficulty],dimensionIndex)=>{
  const correct=[principle,action,hazard][answerType];
  const choices=dimension==="hazard"?[hazard,principle,action,distractors[(conceptIndex+dimensionIndex)%3]]:[correct,hazard,distractors[(conceptIndex+dimensionIndex)%3],distractors[(conceptIndex+dimensionIndex+1)%3]];
  return {id:`masld-${String(conceptIndex*4+dimensionIndex+1).padStart(3,"0")}`,question:`${stem} Focus: ${slug.replaceAll("-"," ")}.`,choices,answer:0,rationale:`${principle} ${action}`,reviewHref:`#${lesson}`,difficulty};
}));


// Distinct fibrosis cases retain stable assessment IDs, keys and anchors.
const verifiedMasldFibrosisQuestions = {
  "masld-029": {
    "question": "Which expression correctly calculates FIB-4?",
    "choices": [
      "(Age × AST) ÷ (platelets × √ALT), using years, U/L, and platelets in 10⁹/L.",
      "(Age × ALT) ÷ (platelets × √AST), using the same units.",
      "(Age × AST × platelets) ÷ √ALT, using the same units.",
      "(Age × AST) ÷ (platelets × ALT), using the same units."
    ],
    "rationale": "Age and AST form the numerator. The denominator is the platelet count in 10⁹/L multiplied by the square root of ALT in U/L; reversing enzymes, multiplying by platelets, or omitting the square root changes the formula."
  },
  "masld-030": {
    "question": "A platelet result is reported as 220 × 10⁹/L, equivalent to 220,000/µL. What platelet number belongs in the usual FIB-4 formula?",
    "choices": [
      "220",
      "220,000",
      "0.220",
      "22"
    ],
    "rationale": "The formula expects the platelet count in 10⁹/L, so enter 220. Entering the per-microliter count without conversion changes the score by a factor of 1,000."
  },
  "masld-031": {
    "question": "A stable 55-year-old has AST 72 U/L, ALT 81 U/L, and platelets 220 × 10⁹/L. What is the FIB-4 result and appropriate risk-assessment step?",
    "choices": [
      "2.00; arrange secondary fibrosis assessment or referral for risk stratification.",
      "0.22; end fibrosis follow-up permanently.",
      "2.00; diagnose cirrhosis without other evidence.",
      "18.00; the square root can be omitted without affecting interpretation."
    ],
    "rationale": "FIB-4 = (55 × 72) ÷ (220 × √81) = 3,960 ÷ 1,980 = 2.00. At age 55, this meets the 1.3 threshold for secondary assessment, but it does not diagnose cirrhosis. Preserve the square root and interpret the score in clinical context."
  },
  "masld-032": {
    "question": "During an acute illness, a patient’s AST and platelet count change markedly. Which approach to FIB-4 is appropriate?",
    "choices": [
      "Address the acute problem and reassess fibrosis risk when clinically appropriate rather than staging fibrosis from the acute score.",
      "Assign a permanent fibrosis stage from the acute score.",
      "Treat any increase in FIB-4 during acute illness as proof of new cirrhosis.",
      "Use acute FIB-4 in place of evaluating the cause of the laboratory changes."
    ],
    "rationale": "AASLD advises against using FIB-4 in acutely ill patients. Acute changes in its laboratory inputs can distort interpretation; evaluate the illness and revisit fibrosis assessment in an appropriate clinical state."
  },
  "masld-033": {
    "question": "A stable 46-year-old with suspected MASLD has FIB-4 of exactly 1.30. What does the usual adult pathway support?",
    "choices": [
      "Secondary assessment with VCTE or ELF, or referral for further risk stratification.",
      "Treat the result as below the 1.3 threshold.",
      "Diagnose a specific histologic fibrosis stage from FIB-4 alone.",
      "Exclude advanced fibrosis solely because symptoms are absent."
    ],
    "rationale": "The usual secondary-assessment threshold is FIB-4 at least 1.3, so equality meets it. This is a triage decision, not a histologic stage or a guarantee based on symptoms."
  },
  "masld-034": {
    "question": "A stable 58-year-old has MASLD, FIB-4 of 1.8, and ALT within the laboratory reference range. Which plan is appropriate?",
    "choices": [
      "Obtain secondary fibrosis assessment despite the normal ALT.",
      "Cancel further fibrosis assessment because ALT is normal.",
      "Diagnose cirrhosis solely from FIB-4 of 1.8.",
      "Wait for jaundice before assessing fibrosis risk."
    ],
    "rationale": "FIB-4 of 1.8 meets the usual threshold for secondary assessment at age 58. Normal aminotransferases cannot exclude clinically significant or advanced fibrosis and should not cancel the next step."
  },
  "masld-035": {
    "question": "A stable adult with MASLD and type 2 diabetes has a low-risk FIB-4 consistent with the clinical findings. Which reassessment interval does the AASLD pathway suggest considering?",
    "choices": [
      "Every 1-2 years, with earlier evaluation if new concern arises.",
      "No further fibrosis assessment after one low result.",
      "Every 2-3 years because diabetes places the patient in the lower metabolic-risk group.",
      "Only after symptoms of decompensation appear."
    ],
    "rationale": "Prediabetes, type 2 diabetes, or at least two metabolic risk factors support considering FIB-4 reassessment every 1-2 years. A low score does not end surveillance, and new concern may warrant earlier assessment."
  },
  "masld-036": {
    "question": "A stable 57-year-old with suspected MASLD has FIB-4 of 3.1. Which next step is supported?",
    "choices": [
      "Consider direct gastroenterology or hepatology referral for further evaluation.",
      "Treat the value as a low-risk result requiring no further evaluation.",
      "Assign F4 cirrhosis from the score alone.",
      "Delay evaluation until a liver-related complication occurs."
    ],
    "rationale": "AASLD supports considering direct referral when FIB-4 is above 2.67 because clinically significant fibrosis is more likely. The score remains a risk assessment rather than a definitive F4 diagnosis."
  },
  "masld-037": {
    "question": "A 29-year-old with type 2 diabetes and elevated liver chemistries has FIB-4 of 0.7. How should age affect the plan?",
    "choices": [
      "Consider secondary assessment because FIB-4 has low accuracy below age 35 despite the low result.",
      "Exclude advanced fibrosis from the low score alone.",
      "Apply an elderly-adult threshold to eliminate the need for further assessment.",
      "Diagnose cirrhosis solely because the patient is younger than 35."
    ],
    "rationale": "FIB-4 has low accuracy below age 35. Increased metabolic risk or elevated liver chemistries in this younger patient supports considering secondary assessment; the low score alone is insufficient reassurance."
  },
  "masld-038": {
    "question": "A stable 72-year-old with suspected MASLD has FIB-4 of 1.8 and no conflicting clinical findings. Which interpretation is appropriate?",
    "choices": [
      "Use the higher age-adjusted lower cutoff of 2.0 and plan appropriate follow-up in context.",
      "Use 1.3 as an unchanged lower cutoff for every adult age.",
      "Treat the result as a definitive F4 diagnosis.",
      "Stop all future liver-risk reassessment because an age-adjusted result can never miss disease."
    ],
    "rationale": "For adults older than 65, AASLD uses a higher lower cutoff of 2.0. A result of 1.8 is below that cutoff, but the clinical picture and continuing risk still determine follow-up; age adjustment does not guarantee absence of disease."
  },
  "masld-039": {
    "question": "A stable 74-year-old with suspected MASLD has FIB-4 of 2.3. Which plan fits the age-adjusted pathway?",
    "choices": [
      "Arrange further fibrosis assessment because the score exceeds the older-adult lower cutoff of 2.0.",
      "Treat 2.3 as below the age-adjusted lower cutoff.",
      "Diagnose cirrhosis from FIB-4 alone.",
      "Ignore the result unless ALT becomes markedly elevated."
    ],
    "rationale": "A score of 2.3 is above the higher 2.0 lower cutoff used for adults older than 65, supporting further risk assessment. It does not diagnose cirrhosis, and ALT alone cannot resolve fibrosis risk."
  },
  "masld-040": {
    "question": "Which use of FIB-4 creates an interpretation error?",
    "choices": [
      "Applying the same 1.3 cutoff without considering age or clinical context to every patient.",
      "Considering secondary assessment in a high-risk adult younger than 35 despite a low FIB-4.",
      "Using the higher lower cutoff of 2.0 in an adult older than 65.",
      "Avoiding fibrosis staging from FIB-4 during acute illness."
    ],
    "rationale": "Age and clinical state limit FIB-4 performance. A universal 1.3 rule can produce misleading reassurance or false-positive concern; the other choices reflect appropriate safeguards."
  },
  "masld-041": {
    "question": "A stable 49-year-old with suspected MASLD has FIB-4 of 1.9. Which pair consists of usual initial secondary fibrosis-assessment tools?",
    "choices": [
      "VCTE and ELF.",
      "CAP alone and a single normal ALT.",
      "Symptoms alone and an unqualified FIB-4 stage assignment.",
      "MRE interpreted with VCTE cutoffs and mandatory biopsy for every patient."
    ],
    "rationale": "VCTE or ELF is usually an initial secondary assessment after an elevated FIB-4 in primary care or endocrinology. CAP measures steatosis, normal ALT or symptoms do not exclude fibrosis, and MRE cutoffs and biopsy decisions require their own context."
  },
  "masld-042": {
    "question": "A VCTE report includes liver stiffness in kPa and a CAP result. Which interpretation is appropriate?",
    "choices": [
      "Liver stiffness informs fibrosis risk; CAP assesses steatosis and does not by itself assign a fibrosis stage.",
      "CAP alone establishes the histologic fibrosis stage.",
      "CAP and liver stiffness are interchangeable measurements of the same feature.",
      "A high CAP result alone establishes cirrhosis."
    ],
    "rationale": "VCTE stiffness and CAP answer different questions: stiffness is used for fibrosis risk assessment, while CAP is a semiquantitative measure of steatosis. Neither CAP nor the presence of steatosis alone establishes cirrhosis."
  },
  "masld-043": {
    "question": "A patient has low FIB-4 but clinical and imaging findings that suggest advanced liver disease. Which plan best resolves the disagreement?",
    "choices": [
      "Refer for specialist reconciliation and consider additional noninvasive assessment or selective biopsy.",
      "Accept the low FIB-4 as definitive and dismiss the other findings.",
      "Average the FIB-4 and imaging numbers to assign a histologic stage.",
      "Require biopsy for every patient before considering any further noninvasive assessment."
    ],
    "rationale": "Discordant noninvasive and clinical findings warrant specialist evaluation. MRE or selective biopsy can help when appropriate; a low FIB-4 should not override concern for advanced disease, and biopsy is not universally mandatory."
  },
  "masld-044": {
    "question": "Which interpretation of an unreliable VCTE result creates an avoidable error?",
    "choices": [
      "Assigning a definitive fibrosis stage without checking reliability, confounders, or clinical agreement.",
      "Checking whether marked inflammation or congestion could raise liver stiffness.",
      "Considering repeat or alternative assessment when the examination is questionable.",
      "Interpreting the stiffness result alongside the clinical findings."
    ],
    "rationale": "Technical limitations and nonfibrotic causes of increased stiffness can mislead. Resolve reliability and clinical discordance before making a confident stage assignment; the other choices are appropriate checks."
  },
  "masld-045": {
    "question": "A specialist needs to clarify indeterminate noninvasive fibrosis assessment in a patient with suspected MASLD. Which statement about MRE is appropriate?",
    "choices": [
      "MRE can help resolve uncertainty, but its stiffness cutoffs differ from VCTE despite both reporting kPa.",
      "Apply the VCTE stiffness cutoffs directly to MRE because their units match.",
      "MRE and VCTE always produce the same numerical value in the same patient.",
      "A CAP result can replace MRE whenever the fibrosis assessment is indeterminate."
    ],
    "rationale": "MRE can support further risk stratification when other noninvasive tests are indeterminate or do not match clinical concern. AASLD notes that the stiffness scales differ between MRE and VCTE even though both use kPa; CAP assesses steatosis."
  },
  "masld-046": {
    "question": "In a patient with confirmed or suspected advanced fibrosis, what does the AASLD pathway associate with ELF of at least 11.3?",
    "choices": [
      "Prediction of future liver-related events in this clinical context.",
      "A universal diagnostic threshold for every use of ELF in every population.",
      "An exact histologic fibrosis stage obtained without clinical interpretation.",
      "Proof that no further liver follow-up is needed."
    ],
    "rationale": "ELF of at least 11.3 has an approved prognostic use for future liver-related events in confirmed or suspected advanced fibrosis. That purpose is distinct from initial fibrosis screening; match a cutoff to the test’s clinical use rather than treating it as a universal stage assignment."
  },
  "masld-047": {
    "question": "After elevated FIB-4, a technically reliable VCTE result is 7.2 kPa and agrees with the clinical findings. Which interpretation is appropriate?",
    "choices": [
      "The result helps exclude advanced fibrosis and supports an appropriate follow-up plan.",
      "The result proves that no fibrosis of any stage is present.",
      "The result establishes cirrhosis because it follows an elevated FIB-4.",
      "The VCTE result can be interpreted using MRE cutoffs without adjustment."
    ],
    "rationale": "VCTE below 8 kPa helps exclude advanced fibrosis in the sequential AASLD pathway when clinical findings agree. It does not prove that every degree of fibrosis is absent or eliminate follow-up; VCTE and MRE cutoffs differ."
  },
  "masld-048": {
    "question": "Noninvasive tests, imaging, and clinical findings sufficiently support cirrhosis in a patient with MASLD. Which approach is appropriate?",
    "choices": [
      "Begin cirrhosis-based care without making biopsy mandatory; consider biopsy selectively if uncertainty remains.",
      "Delay all cirrhosis care until every patient has a liver biopsy.",
      "Treat one low aminotransferase result as sufficient to cancel cirrhosis-based care.",
      "Use CAP alone as the sole evidence for a cirrhosis diagnosis."
    ],
    "rationale": "AASLD allows cirrhosis-based management to begin without biopsy when noninvasive tests, clinical data, or imaging support the diagnosis. Biopsy is considered selectively when uncertainty or competing diagnoses need resolution; it is not a prerequisite for all care."
  }
};
for (const item of metabolicDysfunctionAssociatedSteatoticLiverDiseaseQuestionBank) {
  if (verifiedMasldFibrosisQuestions[item.id]) Object.assign(item, verifiedMasldFibrosisQuestions[item.id]);
}


// Distinct phenotype, mechanism and competing-cause cases retain stable IDs.
const verifiedMasldFoundationQuestions = {
  "masld-001": {
    "question": "Which combination supports the adult metabolic phenotype of MASLD?",
    "choices": [
      "Hepatic steatosis plus at least one defined cardiometabolic criterion, with alcohol and other causes assessed.",
      "Elevated ALT alone, without evidence of steatosis or a metabolic criterion.",
      "Obesity alone, without evidence of hepatic steatosis.",
      "Hepatic steatosis alone, regardless of metabolic criteria or other causes."
    ],
    "rationale": "MASLD requires steatosis with at least one of five cardiometabolic criteria. Alcohol exposure and other discernible causes help classify SLD and identify coexisting injury; ALT, obesity, or steatosis alone is insufficient."
  },
  "masld-002": {
    "question": "An older trial enrolled patients using NAFLD and NASH terminology. How should it be interpreted after the nomenclature change?",
    "choices": [
      "Translate the terms while retaining the trial’s actual metabolic, alcohol, and fibrosis inclusion criteria.",
      "Assume every person with any SLD subtype was included in the older trial.",
      "Ignore the original alcohol exclusions because NAFLD is now called MASLD.",
      "Treat the name change as proof that the intervention is approved for every fibrosis stage."
    ],
    "rationale": "Updated terminology does not change who was studied or establish treatment approval. The original eligibility criteria remain necessary when applying historical evidence."
  },
  "masld-003": {
    "question": "An adult with BMI 22 kg/m² has imaging-confirmed steatosis and type 2 diabetes, drinks no alcohol, and has no other identified cause. Which interpretation is appropriate?",
    "choices": [
      "The metabolic phenotype can meet MASLD criteria despite the BMI.",
      "MASLD is excluded because obesity is mandatory.",
      "Diabetes alone proves cirrhosis regardless of other findings.",
      "Steatosis automatically establishes histologic MASH."
    ],
    "rationale": "Type 2 diabetes satisfies the glucose criterion; obesity is not mandatory when steatosis and another defined metabolic criterion are present. Neither diabetes nor steatosis alone establishes cirrhosis or histologic MASH."
  },
  "masld-004": {
    "question": "Which conclusion exceeds what an ultrasound report of steatosis and one elevated ALT can establish?",
    "choices": [
      "Calling the findings definitive histologic MASH with a specific fibrosis stage.",
      "Confirming that the report describes hepatic fat accumulation.",
      "Assessing metabolic criteria and alcohol exposure.",
      "Planning appropriate fibrosis-risk assessment."
    ],
    "rationale": "Steatosis imaging and ALT do not show all histologic features of MASH or determine the amount of scar. Metabolic, exposure, and fibrosis assessment remain appropriate."
  },
  "masld-005": {
    "question": "Which feature most strongly informs liver-related prognosis in MASLD?",
    "choices": [
      "Fibrosis stage.",
      "One normal ALT value.",
      "Ultrasound brightness alone.",
      "Body weight alone."
    ],
    "rationale": "Fibrosis is the main determinant of liver-related outcomes. ALT, the presence of steatosis, and body weight do not independently establish fibrosis severity or eliminate liver-related risk."
  },
  "masld-006": {
    "question": "Which statement correctly distinguishes MASH activity from fibrosis?",
    "choices": [
      "MASH includes hepatocellular injury and inflammation and may occur with or without fibrosis.",
      "MASH always means F4 cirrhosis.",
      "Fibrosis and steatosis are interchangeable terms.",
      "An elevated ALT directly provides a histologic fibrosis stage."
    ],
    "rationale": "MASH describes steatohepatitis, including injury and inflammation. Scar is assessed separately; steatohepatitis need not be accompanied by fibrosis and does not automatically mean cirrhosis."
  },
  "masld-007": {
    "question": "A patient has an established F3 fibrosis assessment but ALT within the laboratory reference range. Which interpretation is appropriate?",
    "choices": [
      "Normal ALT does not negate the fibrosis finding or eliminate the need for follow-up.",
      "Normal ALT proves that F3 has resolved.",
      "A single ALT value can replace every fibrosis assessment.",
      "The absence of enzyme elevation makes advanced fibrosis impossible."
    ],
    "rationale": "Aminotransferases can be normal in advanced disease. An established fibrosis assessment must be interpreted with the clinical picture rather than canceled by one normal enzyme value."
  },
  "masld-008": {
    "question": "A record lists F4 cirrhosis with no previous decompensation. Which interpretation avoids a staging error?",
    "choices": [
      "Cirrhosis can be compensated; F4 and decompensation describe different aspects of disease.",
      "F4 proves that decompensation has already occurred in every patient.",
      "Compensated status means that no cirrhosis is present.",
      "Absence of symptoms converts F4 into a steatosis-only diagnosis."
    ],
    "rationale": "F4 denotes cirrhosis. Compensated cirrhosis can precede decompensation, so document stage and complications separately instead of treating symptom absence as proof that scar is absent."
  },
  "masld-009": {
    "question": "A female adult with hepatic steatosis and type 2 diabetes regularly consumes 210 g of alcohol per week. Which SLD classification range fits this exposure?",
    "choices": [
      "MetALD, with metabolic and alcohol contributions assessed together.",
      "Pure MASLD because any amount of alcohol is irrelevant when diabetes is present.",
      "Primarily ALD because any alcohol intake exceeds the female MetALD range.",
      "Cryptogenic SLD because no metabolic criterion is present."
    ],
    "rationale": "The female MetALD range is approximately 140-350 g/week. This patient has a metabolic criterion and an exposure inside that range. The category does not establish a safe intake or exclude other contributors."
  },
  "masld-010": {
    "question": "An alcohol history says only social drinking. What information best supports SLD classification?",
    "choices": [
      "Quantified grams, beverage amounts, pattern, frequency, duration, and changes over time.",
      "The phrase social drinking without a quantity or pattern.",
      "Only the type of beverage, without amount or frequency.",
      "A normal ALT used instead of the alcohol history."
    ],
    "rationale": "Alcohol classification requires quantitative exposure and its pattern and time course. A vague descriptor, beverage type alone, or an enzyme result cannot provide that history."
  },
  "masld-011": {
    "question": "A male adult with steatosis and a metabolic criterion regularly consumes 490 g of alcohol per week. Which interpretation follows the adult nomenclature?",
    "choices": [
      "The exposure is above the male MetALD range and favors primarily alcohol-associated liver disease.",
      "The exposure is below the male MetALD range.",
      "Diabetes makes the alcohol amount irrelevant to classification.",
      "MetALD applies only when no metabolic criterion exists."
    ],
    "rationale": "The male MetALD range is approximately 210-420 g/week. A value of 490 g/week is above its upper limit. Metabolic disease may still coexist and should remain part of the assessment."
  },
  "masld-012": {
    "question": "Which interpretation of the MASLD and MetALD alcohol ranges creates an error?",
    "choices": [
      "Calling an intake below a classification boundary guaranteed safe for liver disease.",
      "Recording alcohol exposure in grams and reassessing it over time.",
      "Considering combined alcohol and metabolic contributions.",
      "Evaluating other plausible liver disease alongside metabolic criteria."
    ],
    "rationale": "Classification ranges organize SLD terminology; they are not safe-drinking limits. Alcohol can contribute to progression below a category boundary, and individual susceptibility varies."
  },
  "masld-013": {
    "question": "How does adipose insulin resistance contribute to hepatic lipid exposure?",
    "choices": [
      "It increases free-fatty-acid release through impaired restraint of adipose lipolysis.",
      "It suppresses fasting fatty-acid release more strongly than normal insulin action.",
      "It removes the contribution of hepatic de novo lipogenesis.",
      "It lowers fatty-acid delivery regardless of dietary substrate and lipid disposal."
    ],
    "rationale": "Adipose insulin resistance increases lipolysis and fatty-acid delivery. Hepatic supply and disposal interact; the mechanism cannot itself establish a fibrosis stage."
  },
  "masld-014": {
    "question": "What does hepatic de novo lipogenesis mean?",
    "choices": [
      "Synthesis of new fatty acids, which can increase with excess carbohydrate supply.",
      "Direct measurement of fibrosis from ultrasound brightness.",
      "Removal of all stored triglyceride by immune cells.",
      "Formation of cirrhotic nodules whenever blood glucose rises once."
    ],
    "rationale": "De novo lipogenesis is fatty-acid synthesis. Excess substrate can promote this pathway, but it is distinct from fibrosis assessment, complete lipid clearance, or proof of cirrhosis."
  },
  "masld-015": {
    "question": "Two adults have the same BMI but different liver fibrosis assessments. Which explanation is supported?",
    "choices": [
      "Visceral adiposity, metabolic factors, genetic variation, and exposures can differ despite similar BMI.",
      "Identical BMI requires identical fibrosis in every patient.",
      "BMI directly measures stellate-cell activation.",
      "One normal glucose value proves that all metabolic pathways are identical."
    ],
    "rationale": "Body size does not capture all drivers of injury and progression. Fat distribution, diabetes, genetics, alcohol, and other exposures can alter disease course, and fibrosis still needs clinical assessment."
  },
  "masld-016": {
    "question": "Which interpretation of hepatic triglyceride storage is incorrect?",
    "choices": [
      "Treating stored triglyceride alone as proof of inflammatory injury and a specific fibrosis stage.",
      "Recognizing lipid droplets as part of steatosis.",
      "Distinguishing lipotoxic signaling from the amount of stored fat.",
      "Considering lipid utilization and disposal alongside delivery."
    ],
    "rationale": "Stored triglyceride and visible steatosis are not equivalent to MASH activity or scar. Lipid handling, hepatocyte injury, and tissue responses must be distinguished."
  },
  "masld-017": {
    "question": "Which cellular response most directly contributes to hepatic scar formation after chronic injury?",
    "choices": [
      "Activated hepatic stellate cells depositing extracellular matrix.",
      "Hepatocytes exporting triglyceride in VLDL without a fibrogenic response.",
      "Adipocytes storing neutral triglyceride without a hepatic injury response.",
      "Lipid droplets alone serving as the direct source of all extracellular matrix."
    ],
    "rationale": "Stellate-cell activation links chronic injury responses to extracellular-matrix deposition. Imaging steatosis, glucose, and lipid storage are not direct measurements or automatic causes of a particular scar stage."
  },
  "masld-018": {
    "question": "Which relationship correctly connects lipotoxic injury to fibrosis?",
    "choices": [
      "Hepatocyte stress and immune signaling can contribute to stellate-cell activation and matrix deposition.",
      "Steatosis and fibrosis are synonyms.",
      "Every patient follows an identical timetable from fat accumulation to cirrhosis.",
      "Hepatic lipid delivery has no relationship to inflammatory injury."
    ],
    "rationale": "Interacting hepatocyte and immune responses contribute to fibrogenesis. Fat accumulation and scar remain distinct, and modifying factors produce heterogeneous progression."
  },
  "masld-019": {
    "question": "A patient asks whether an oxidative-stress marker proves the cause and stage of their liver disease. Which response fits the AASLD evidence?",
    "choices": [
      "Such markers are observed in NASH, but their precise causal role in humans remains uncertain and they do not assign fibrosis stage.",
      "The marker proves oxidative stress is the sole cause of every case of MASH.",
      "The marker directly establishes F4 without clinical assessment.",
      "The marker guarantees that a treatment targeting it will reverse all fibrosis."
    ],
    "rationale": "AASLD describes consistent oxidative-stress findings but uncertainty about their precise human causal role. A mechanistic marker does not establish a scar stage or guarantee therapeutic benefit."
  },
  "masld-020": {
    "question": "Which statement overextends a genetic association in MASLD?",
    "choices": [
      "Routine gene-based risk stratification is required for every patient solely because variants affect lipid handling.",
      "Genetic variation can contribute to heterogeneous disease course.",
      "Clinical metabolic and fibrosis assessment remain relevant.",
      "Selected unusual phenotypes can warrant evaluation for rare genetic disease."
    ],
    "rationale": "AASLD does not recommend routine gene-based risk stratification in all patients. This differs from considering a specific rare disorder when clinical clues justify directed evaluation."
  },
  "masld-021": {
    "question": "A patient has hepatic steatosis and type 2 diabetes, but testing also supports chronic viral hepatitis. Which interpretation is appropriate?",
    "choices": [
      "Metabolic and viral liver disease can coexist and both require evaluation.",
      "The metabolic criterion excludes any viral cause of liver injury.",
      "Steatosis proves that the viral finding is irrelevant.",
      "ALT alone identifies which disease explains every abnormality."
    ],
    "rationale": "Positive metabolic criteria do not close the differential. Viral and metabolic disease can coexist and change management; steatosis or one enzyme result cannot dismiss the viral evidence."
  },
  "masld-022": {
    "question": "An adult has hepatic steatosis and HbA1c of 5.8% but no obesity. How does the adult metabolic criterion apply?",
    "choices": [
      "HbA1c at least 5.7% meets the glucose criterion; steatosis and this criterion can support the metabolic phenotype.",
      "Only obesity can provide a metabolic criterion.",
      "HbA1c must be at least 9% for any metabolic criterion to apply.",
      "HbA1c of 5.8% independently establishes cirrhosis."
    ],
    "rationale": "The glucose criterion includes HbA1c at least 5.7%; obesity and established diabetes are not both required. Alcohol and competing causes still need assessment, and the criterion does not assign a fibrosis stage."
  },
  "masld-023": {
    "question": "A young adult with steatosis has neuropsychiatric findings and low ceruloplasmin. What is the best next interpretation?",
    "choices": [
      "Evaluate for Wilson disease with appropriate directed testing rather than assigning all findings to MASLD.",
      "Diagnose MASLD as the sole cause without further evaluation.",
      "Treat low ceruloplasmin as proof of an F4 fibrosis stage.",
      "Exclude genetic disease because steatosis is present."
    ],
    "rationale": "This pattern raises suspicion for Wilson disease and supports directed evaluation. The clues are not a diagnosis or stage by themselves; steatosis does not exclude another liver disorder."
  },
  "masld-024": {
    "question": "A patient with short bowel and marked malnutrition develops steatosis. Which contributor deserves consideration?",
    "choices": [
      "Nutrient deficiency, including choline or carnitine, assessed in the clinical context.",
      "A guarantee of obesity-associated MASLD despite the nutritional history.",
      "An exact fibrosis stage obtained from the presence of fat alone.",
      "Exclusion of any nutritional contribution because the liver contains fat."
    ],
    "rationale": "AASLD lists nutrient deficiency in settings including short bowel, anorexia, and bypass surgery as a less common cause to consider. Steatosis does not establish metabolic obesity or fibrosis stage."
  },
  "masld-025": {
    "question": "AASLD lists amiodarone as a potential contributor to steatosis or steatohepatitis. What does that listing establish for an individual patient?",
    "choices": [
      "A reason for clinical causal assessment using the exposure timeline and other causes.",
      "Proof that amiodarone caused the patient’s steatosis regardless of timing.",
      "Evidence that all listed drugs cause injury by an identical mechanism.",
      "A requirement to stop amiodarone automatically whenever steatosis is reported."
    ],
    "rationale": "AASLD lists amiodarone among potential contributors. An association on a list does not establish causality in a particular patient; timing, pattern, other causes, and therapeutic context still matter."
  },
  "masld-026": {
    "question": "A patient taking tamoxifen is found to have steatosis. Which evaluation is most appropriate?",
    "choices": [
      "Review timing, metabolic factors, laboratory pattern, other exposures, and the treatment indication with the clinician.",
      "Assume the drug caused every abnormality solely because it appears on a list.",
      "Assume MASLD excludes any medication contribution.",
      "Stop every prescribed medicine without assessing therapeutic need or causality."
    ],
    "rationale": "Tamoxifen can contribute to steatosis or steatohepatitis, sometimes alongside metabolic risk. Clinical causal assessment should guide management rather than list-based attribution or indiscriminate withdrawal."
  },
  "masld-027": {
    "question": "A patient receiving corticosteroids develops worsening glucose control and steatosis. Which interpretation fits the AASLD evidence?",
    "choices": [
      "Corticosteroids can exacerbate metabolic factors and contribute to steatosis; assess the full clinical and exposure context.",
      "Corticosteroids invariably produce the same histologic fibrosis stage in every patient.",
      "The metabolic changes rule out a medication contribution.",
      "One elevated glucose result proves cirrhosis."
    ],
    "rationale": "AASLD includes corticosteroids among drugs with potential mechanistic links to steatosis, including worsening metabolic comorbidities. This does not establish individual causality or assign a fibrosis stage."
  },
  "masld-028": {
    "question": "Which response to a historical list of hepatotoxic medicines creates an avoidable error?",
    "choices": [
      "Stopping every listed medicine automatically without evaluating suspected injury, causality, severity, or therapeutic need.",
      "Reconciling prescription and supplement start dates and dose changes.",
      "Considering coexisting metabolic and other liver disease.",
      "Reviewing suspected drug-induced injury with the treating clinician."
    ],
    "rationale": "Potential hepatotoxicity warrants assessment in context. Lists do not justify indiscriminate withdrawal or a universal stopping threshold; suspected injury requires a severity-appropriate clinical response."
  }
};
for (const item of metabolicDysfunctionAssociatedSteatoticLiverDiseaseQuestionBank) {
  if (verifiedMasldFoundationQuestions[item.id]) Object.assign(item, verifiedMasldFoundationQuestions[item.id]);
}
