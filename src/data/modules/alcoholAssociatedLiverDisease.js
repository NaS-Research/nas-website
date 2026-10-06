import { alcoholAssociatedLiverDiseaseQuestionBank } from "@/data/questionBanks/alcoholAssociatedLiverDisease";
const q=(question,choices,rationale,slug)=>({question,choices,answer:0,rationale,reviewHref:`#${slug}`});
const s=(slug,title,summary,concepts,application,lesson,keyPoints,check)=>({slug,title,visual:`alcohol-associated-liver-disease-${slug}`,summary,concepts,application,lesson:lesson.map(([heading,body])=>({heading,body})),keyPoints,check});
export const alcoholAssociatedLiverDiseaseModule={slug:"alcohol-associated-liver-disease",number:"208",title:"Alcohol-Associated Liver Disease",source:"RxPrep 2023 alcohol-associated liver disease, withdrawal, AUD medication, and nutrition material, reconciled with the 2024 ACG guideline, 2019 AASLD guidance, 2020 ASAM withdrawal guideline, and current medication labeling",description:"Move from alcohol exposure and hepatic injury to safe withdrawal, evidence-based AUD treatment, alcohol-associated hepatitis, nutrition, transplant selection, and sustained recovery.",topics:["ALD spectrum","AUD screening","Withdrawal","Thiamine","Acamprosate","Naltrexone","Baclofen","Alcohol-associated hepatitis","MELD","Lille","Nutrition","Transplant"],outcomes:["Explain alcohol metabolism and liver injury.","Screen for AUD and fibrosis without stigma.","Build an integrated recovery plan.","Assess and treat withdrawal safely.","Prevent Wernicke encephalopathy and malnutrition.","Select AUD medication for liver and kidney status.","Diagnose alcohol-associated hepatitis.","Use MELD and Lille to govern corticosteroids.","Integrate NAC, nutrition, and organ support.","Manage cirrhosis complications in parallel.","Explain modern transplant selection.","Build closed-loop longitudinal care."],submodules:[
  s("spectrum-mechanism","Follow Alcohol From Metabolism to Fibrosis","The same exposure can produce reversible steatosis, inflammatory hepatitis, progressive fibrosis, or decompensated cirrhosis depending on host and coexisting disease.",["ADH","ALDH","Acetaldehyde","NADH","Fibrosis"],"Explain the phenotype from exposure pattern, host susceptibility, metabolic injury, inflammation, and fibrosis rather than dose alone.",[["Map metabolism","Alcohol dehydrogenase converts ethanol to acetaldehyde, and aldehyde dehydrogenase converts acetaldehyde to acetate. Excess NADH shifts lipid metabolism toward hepatic fat accumulation."],["Map cellular injury","Acetaldehyde adducts, oxidative stress, mitochondrial dysfunction, endotoxin signaling, cytokines, and immune activation injure hepatocytes and activate fibrogenesis."],["Name the spectrum","Steatosis may improve with abstinence. Steatohepatitis, alcohol-associated hepatitis, fibrosis, cirrhosis, and ACLF reflect progressively different risk states."],["Identify modifiers","Female sex, obesity, diabetes, smoking, gastric bypass, genetic susceptibility, malnutrition, and viral or metabolic liver disease increase progression risk."]],["Metabolism changes redox state.","Acetaldehyde is directly toxic.","Steatosis can reverse.","Host factors change risk."],q("What metabolic shift promotes steatosis?",["Excess NADH after ethanol metabolism","Loss of all hepatic NADH","Exclusive renal oxidation","Inhibition of every cytokine"],"Ethanol metabolism raises NADH and favors lipid accumulation.","spectrum-mechanism")),
  s("screening-staging","Screen Without Stigma and Stage Without Guessing","Neutral questions, validated tools, and context-aware fibrosis testing produce better evidence than appearance or assumptions.",["AUDIT-C","Standard drink","PEth","FIB-4","Elastography"],"Document amount, pattern, consequences, last use, withdrawal history, control, supports, fibrosis, and decompensation.",[["Use validated screening","AUDIT-C is a brief screen, while the full AUDIT adds consequences and dependence features. A positive screen prompts assessment rather than automatic diagnosis."],["Quantify the pattern","Translate beverage size and alcohol content into standard drinks. Capture binge pattern, duration, periods of abstinence, and recent change."],["Use biomarkers transparently","PEth, urine EtG or EtS, and other markers have different windows. Explain purpose, consent, false interpretations, and how results will affect care."],["Stage fibrosis carefully","FIB-4 and transient elastography are useful, but active inflammation and alcohol-related thrombocytopenia can inflate estimates. Repeat or escalate uncertain results."]],["Language affects disclosure.","Pattern matters beyond average volume.","Biomarkers need context.","Inflammation can distort stiffness."],q("What is the best response to a positive AUDIT-C?",["Complete a nonjudgmental diagnostic and safety assessment","Label the patient from the score alone","Assume liver disease is present","Ignore withdrawal history"],"A screening result identifies the need for assessment.","screening-staging")),
  s("recovery-system","Treat Alcohol Use Disorder as the Disease Driver","Withdrawal management is only the first transition in recovery, not the end of treatment.",["Motivational care","Medication","Behavioral therapy","Community support","Harm reduction"],"Offer a recovery pathway at every encounter and make re-entry easy after recurrence.",[["Center abstinence without blame","Sustained abstinence gives the liver its best chance to recover. Use person-first language and frame recurrence as a signal to intensify treatment rather than discharge the patient."],["Use brief intervention","Ask permission, connect alcohol to the patient's goals, assess readiness, offer choices, and agree on a specific next step."],["Combine treatments","Medication, cognitive or motivational therapies, peer support, contingency approaches, and social services can reinforce one another."],["Close the handoff","Schedule addiction and hepatology follow-up, provide medication supply, address transportation and cost, and name an urgent-contact pathway."]],["Abstinence changes prognosis.","Stigma blocks care.","Medication and behavior are complementary.","Warm handoffs prevent loss."],q("Which plan best treats AUD in ALD?",["Integrated medication, behavioral, hepatology, and social care","Detoxification alone","A warning without follow-up","Exclusion after recurrence"],"Integrated care treats the driver and the liver consequences together.","recovery-system")),
  s("withdrawal","Prevent Seizure, Delirium, and Oversedation","Withdrawal severity and treatment setting must be predicted before symptoms peak.",["CIWA-Ar","Seizure","Delirium","Benzodiazepine","Phenobarbital"],"Choose the level of care from prior complicated withdrawal, current severity, medical disease, cognition, supports, and monitoring capacity.",[["Stratify risk","Prior seizure or delirium, repeated withdrawals, older age, severe medical illness, concurrent sedatives, pregnancy, unstable vitals, and poor support increase risk."],["Use scales within limits","CIWA-Ar supports symptom-triggered care in communicative patients but is unreliable in delirium, severe illness, intubation, or overlapping HE."],["Use benzodiazepines first line","Benzodiazepines prevent seizures and delirium. In significant liver dysfunction, lorazepam or oxazepam reduces dependence on oxidative hepatic metabolism."],["Reserve advanced regimens","Phenobarbital requires experienced clinicians and close monitoring. Clonidine, dexmedetomidine, and beta blockers are adjuncts and do not prevent seizures alone."]],["Predict severity early.","CIWA-Ar is not universal.","Liver function changes benzodiazepine choice.","Adjuncts do not replace GABA therapy."],q("Which benzodiazepine is often favored in significant liver dysfunction?",["Lorazepam","Chlordiazepoxide without monitoring","A chronic outpatient diazepam supply","No medication during severe withdrawal"],"Lorazepam relies less on oxidative hepatic metabolism.","withdrawal")),
  s("thiamine-nutrition","Protect the Brain and Rebuild Metabolic Reserve","Thiamine deficiency, electrolyte depletion, sarcopenia, and refeeding risk can coexist before the liver diagnosis is complete.",["Wernicke encephalopathy","Thiamine","Magnesium","Phosphate","Protein"],"Give urgent vitamin support while assessing intake, weight change, muscle, swallowing, electrolytes, and refeeding risk.",[["Do not wait for the triad","Confusion, ataxia, and ocular findings are the classic Wernicke triad, but many patients do not show all three. Treat promptly when risk and findings support it."],["Choose the route from risk","Parenteral thiamine is preferred with malnutrition, malabsorption, critical illness, severe withdrawal, or suspected Wernicke disease. Prevention and treatment doses are not interchangeable."],["Correct partners selectively","Check magnesium because it supports thiamine-dependent enzymes. Correct documented severe phosphate, potassium, and magnesium abnormalities with monitoring."],["Feed adequately","Many patients need about 35 kcal/kg/day and 1.2 to 1.5 g/kg/day protein. Add supplements and enteral nutrition when oral intake remains inadequate."]],["The complete triad is uncommon.","Route and dose depend on purpose.","Magnesium supports thiamine biology.","Protein restriction is not recovery."],q("Should urgent glucose be delayed until thiamine is given?",["No, give glucose when needed and administer thiamine promptly","Yes, always delay glucose","Only if PEth is positive","Thiamine is never needed"],"Current withdrawal guidance permits thiamine and glucose in either order or concurrently.","thiamine-nutrition")),
  s("aud-medications","Select Recovery Medication Through Organ Function","The older list of naltrexone, acamprosate, and disulfiram is not a safe menu for every patient with liver disease.",["Acamprosate","Naltrexone","Baclofen","Gabapentin","Topiramate"],"Match the medication to the recovery goal, compensation, kidney function, opioids, cognition, adherence, pregnancy potential, and patient preference.",[["Use acamprosate for abstinence support","Acamprosate is renally eliminated and taken three times daily. Reduce the dose in moderate renal impairment and avoid it when creatinine clearance is 30 mL/min or less."],["Use naltrexone for heavy-drinking reduction","Oral or extended-release naltrexone can be considered in appropriate compensated ALD. Exclude opioids, acute hepatitis or liver failure, and create a pain plan."],["Use baclofen deliberately","Baclofen is off label but has ALD-specific evidence. Start low, titrate gradually, adjust for kidney function, and monitor sedation, falls, and cognition."],["Avoid disulfiram in ALD","Current ACG guidance advises against disulfiram across ALD because of hepatotoxicity and limited benefit. Gabapentin or topiramate may be selected off label with CNS and renal safeguards."]],["Kidney function governs acamprosate.","Opioids govern naltrexone.","Baclofen is off label.","Disulfiram is not an ALD option."],q("Which medication should be avoided across the ALD spectrum?",["Disulfiram","Carefully selected acamprosate","Specialist-selected baclofen","Appropriate naltrexone in compensated disease"],"Disulfiram can cause hepatotoxicity and is discouraged by current ACG guidance.","aud-medications")),
  s("hepatitis-diagnosis","Diagnose Alcohol-Associated Hepatitis as a Syndrome","Acute jaundice after sustained heavy exposure is a clinical pattern that still requires exclusion of competing causes and infection.",["Jaundice","Bilirubin","AST and ALT","Infection","Biopsy"],"Establish timing, phenotype, severity, organ failures, infection, and diagnostic confidence before disease-specific treatment.",[["Recognize the phenotype","Typical AH includes recent onset or worsening jaundice, bilirubin elevation, AST greater than ALT with usually moderate enzyme values, and sustained heavy alcohol exposure."],["Exclude alternatives","Review drugs and supplements, viral hepatitis, biliary obstruction, ischemia, autoimmune disease, sepsis, vascular disease, and metabolic injury."],["Search complications","Assess ascites with diagnostic paracentesis when indicated, cultures and imaging from presentation, AKI, bleeding, HE, nutrition, and ACLF."],["Use biopsy selectively","Biopsy is not required for a classic high-confidence presentation but may be useful when uncertainty would change corticosteroid or transplant decisions."]],["AH is clinical, not one laboratory ratio.","Infection can coexist.","Organ failures drive prognosis.","Biopsy resolves consequential uncertainty."],q("Does AST greater than ALT prove alcohol-associated hepatitis?",["No, it supports the pattern but alternate causes must be excluded","Yes, it is diagnostic alone","Only when bilirubin is normal","It excludes infection"],"The biochemical pattern is supportive rather than definitive.","hepatitis-diagnosis")),
  s("steroid-lille","Make Corticosteroid Exposure Earn Its Risk","Prednisolone benefits a selected severe-AH subgroup only when contraindications are controlled and early response is demonstrated.",["MELD","Maddrey DF","Prednisolone","Lille","Infection"],"Calculate severity before therapy and schedule the stop decision before the first dose.",[["Use current severity framing","Current ACG guidance uses MELD above 20 to define severe AH for corticosteroid consideration. Maddrey DF remains familiar but is laboratory dependent."],["Screen contraindications","Evaluate uncontrolled infection, active GI bleeding, severe kidney failure, pancreatitis, and other steroid hazards. Treated infection may permit later reassessment."],["Give the selected regimen","Prednisolone 40 mg daily is the common oral regimen for up to 4 weeks when appropriate. Do not use pentoxifylline as a substitute."],["Stop nonresponse","Calculate Lille at day 4 or 7. A score at least 0.45 indicates poor response and generally supports stopping corticosteroids to reduce infection risk."]],["MELD identifies severe disease.","Eligibility is not severity alone.","Pentoxifylline is obsolete.","Lille limits futile exposure."],q("A day-7 Lille score is 0.62. What is the usual action?",["Stop corticosteroids because response is poor","Continue automatically for 28 days","Add pentoxifylline","Ignore infection risk"],"A Lille score at least 0.45 identifies nonresponse.","steroid-lille")),
  s("nac-support","Combine Disease Therapy With Organ Support","NAC, nutrition, infection surveillance, kidney protection, and AUD treatment operate alongside corticosteroid selection.",["NAC","Nutrition","AKI","Infection","ACLF"],"Build one daily plan for liver response, organ function, intake, infection, and recovery engagement.",[["Use NAC as an adjunct","The 2024 ACG guideline recommends intravenous NAC with corticosteroids in severe AH. It is adjunctive rather than a stand-alone cure."],["Feed early","Oral nutrition and supplements are preferred. Use enteral feeding when intake remains inadequate, including with stable varices when there is no active bleeding or recent banding contraindication."],["Avoid universal antibiotics","Screen carefully and treat documented or strongly suspected infection, but do not give prophylactic antibiotics universally to every severe-AH admission."],["Track organ failure","Creatinine, oxygenation, pressure, mental status, infection, bleeding, sodium, and bilirubin trajectory determine ICU, transplant, and palliative pathways."]],["NAC complements steroids.","Nutrition is active treatment.","Antibiotics require indication.","Organ failures change prognosis."],q("What is the current role of IV NAC in severe AH?",["Adjunct to corticosteroids in selected patients","Universal monotherapy","Replacement for AUD treatment","A reason to omit nutrition"],"Current ACG guidance recommends NAC as an adjunct.","nac-support")),
  s("cirrhosis-complications","Treat Established Cirrhosis in Parallel","Abstinence can improve prognosis, but portal hypertension, ascites, HE, HRS, bleeding, and HCC risk still require full cirrhosis care.",["Ascites","SBP","Varices","HE","HCC"],"Connect the ALD plan to the existing cirrhosis pathway and never let the addiction diagnosis obscure urgent complications.",[["Manage fluid and infection","Use diagnostic paracentesis for new or admitted ascites, sodium and diuretic plans, albumin with large-volume paracentesis, and SBP treatment or prophylaxis when indicated."],["Prevent bleeding","Assess CSPH and variceal risk for nonselective beta blockade or endoscopic strategy, and use the acute bleeding bundle when hemorrhage occurs."],["Protect cognition and kidneys","Treat HE precipitants with lactulose and selected rifaximin, avoid sedative accumulation, and distinguish HRS-AKI from shock or structural kidney disease."],["Continue surveillance","Provide HCC surveillance about every 6 months, vaccines, nutrition, bone health, medication stewardship, and timely transplant referral."]],["Abstinence and cirrhosis care coexist.","Infection may be silent.","Sedatives can mimic HE.","Cancer risk persists."],q("Does abstinence end HCC surveillance in established cirrhosis?",["No, surveillance continues","Yes, immediately","Only when AST is elevated","Only after detoxification"],"Established cirrhosis carries residual HCC risk despite etiologic control.","cirrhosis-complications")),
  s("transplant-ethics","Select Transplant Candidates With Evidence, Not a Calendar","Early transplant can be lifesaving for selected severe-AH nonresponders, and modern evaluation is multidimensional.",["Early transplant","Relapse risk","Support","Insight","Equity"],"Assess medical urgency and sustained recovery capacity without using stigma or a rigid abstinence duration as a shortcut.",[["Move beyond six months alone","A fixed six-month abstinence rule does not accurately predict relapse and can exclude patients who will die before reaching it."],["Use multidisciplinary evidence","Evaluate prior treatment, relapse pattern, insight, psychiatric disease, other substances, social support, housing, adherence, coping, and willingness to engage."],["Plan post-transplant recovery","Continue AUD medication when appropriate, behavioral care, biomarker monitoring with transparency, family support, and rapid intervention for recurrence."],["Protect equity","Apply documented center criteria consistently and separate moral judgment from medical and psychosocial risk assessment."]],["Time alone predicts poorly.","Selection is multidisciplinary.","Recovery care continues after transplant.","Consistency protects equity."],q("What should transplant candidacy not depend on alone?",["A rigid six-month abstinence interval","Medical urgency","Multidisciplinary assessment","Recovery support"],"Current practice considers broader relapse and support evidence.","transplant-ethics")),
  s("integrated-case","Build a Closed-Loop Liver and Recovery Plan","The highest-quality plan treats withdrawal, AUD, liver injury, nutrition, complications, and social conditions as one system.",["Withdrawal","AUD medication","Liver state","Nutrition","Follow-up"],"Name the acute risk, disease driver, exact treatment, safety monitoring, ownership, and next contact before transition.",[["Stabilize immediate risk","Assess withdrawal, suicidality, intoxication, trauma, infection, bleeding, glucose, electrolytes, thiamine need, and level of care."],["Define liver disease","Document AH confidence, fibrosis, compensation, MELD, organ failures, infection, HCC status, and transplant indication."],["Start recovery treatment","Choose medication through liver, kidney, opioid, cognition, and goal context. Add behavioral care and practical support before discharge."],["Measure what matters","Track alcohol goals, adherence, recurrence, liver function, nutrition, complications, quality of life, and re-entry without punitive discharge."]],["Withdrawal is not AUD treatment.","Liver and addiction care share ownership.","Medication needs organ-specific selection.","Recurrence invites intensification."],q("Which discharge plan is strongest after alcohol withdrawal with ALD?",["AUD medication, behavioral care, liver follow-up, nutrition, safety monitoring, and a warm handoff","Detoxification only","A warning without treatment","Discharge from care after recurrence"],"Closed-loop care treats both the driver and the organ disease.","integrated-case")),
],references:[{label:"2024 ACG Clinical Guideline for Alcohol-Associated Liver Disease",href:"https://pmc.ncbi.nlm.nih.gov/articles/PMC11040545/"},{label:"AASLD Alcohol-Associated Liver Disease Practice Guidance",href:"https://www.aasld.org/practice-guidelines/alcohol-associated-liver-disease"},{label:"ASAM Alcohol Withdrawal Management Guideline",href:"https://www.asam.org/quality-care/clinical-guidelines/alcohol-withdrawal-management-guideline"},{label:"AASLD Steroids, Maddrey, and Lille Review",href:"https://www.aasld.org/liver-fellow-network/core-series/why-series/why-do-we-use-steroids-maddreys-discriminant-function"},{label:"Current CAMPRAL Prescribing Information",href:"https://www.accessdata.fda.gov/drugsatfda_docs/label/2004/21431lbl.pdf"}],disclaimer:"This module supports advanced education about alcohol-associated liver disease and alcohol use disorder. It reconciles a brief 2023 course source with the 2024 ACG guideline, the 2019 AASLD guidance, the 2020 ASAM withdrawal guideline, and current labeling. Some guidance documents remain older but active, and care requires current protocols, specialist consultation, and patient-specific evidence.",questionBank:alcoholAssociatedLiverDiseaseQuestionBank};


// Source-reconciled cirrhosis care continues alongside alcohol recovery.
const verifiedAldCirrhosisLesson = {
  "metadata": {
    "summary": "Alcohol recovery improves prognosis while ascites, infection, bleeding, HE, kidney injury and HCC risk still require indication-specific cirrhosis care.",
    "concepts": [
      "Recovery care",
      "Ascites and infection",
      "Bleeding and HE",
      "Medication safety",
      "HCC surveillance"
    ],
    "application": "Coordinate liver and AUD care, reconcile every product, and assign complication monitoring, surveillance and referral without waiting for a fixed abstinence interval.",
    "keyPoints": [
      "Abstinence and complication care continue together.",
      "Infection can present without fever.",
      "Kidney function, electrolytes and cognition govern medicine safety.",
      "HCC surveillance depends on treatment eligibility, not AST alone."
    ]
  },
  "bodies": [
    {
      "heading": "Continue recovery and cirrhosis care together",
      "body": "Sustained alcohol abstinence and treatment of alcohol use disorder improve the disease course, but stopping alcohol does not immediately remove established portal hypertension, ascites, infection, encephalopathy or cancer risk. Coordinate hepatology and addiction care while treating each complication according to its current indication. Reassess prevention medicines as the disease state changes; neither the end of withdrawal nor a report of abstinence independently authorizes stopping cirrhosis care."
    },
    {
      "heading": "Manage ascites without sacrificing nutrition",
      "body": "Evaluate new ascites and perform prompt diagnostic paracentesis in a patient with cirrhotic ascites admitted urgently, even without fever. A sodium plan around 2 g/day and spironolactone with or without furosemide are usual first-line measures for moderate ascites. Monitor weight, blood pressure, creatinine, sodium and potassium; avoid excessive diuresis and balance sodium restriction against poor intake. Fluid restriction is not routine ascites treatment and should follow an individualized hyponatremia assessment. Tense or refractory ascites may need large-volume paracentesis. After removal of more than 5 L, give protocol-directed albumin, commonly 6 to 8 g per liter of the total fluid removed: a 7 L procedure corresponds to 42 to 56 g, not just replacement for the volume beyond 5 L. Repeated drainage provides relief while advanced liver options are assessed."
    },
    {
      "heading": "Keep infection treatment and prevention distinct",
      "body": "SBP may first present as confusion, kidney injury or hypotension without fever. Sample ascitic fluid for cell count, differential and culture when indicated and start active treatment promptly when SBP is suspected; sampling must not delay urgent antibiotics in an unstable patient. Assess albumin and a secondary abdominal source as appropriate. A survivor of SBP with ongoing risk needs an individualized secondary-prophylaxis plan, including review of resistance, adverse effects and continuing indication. Acute gastrointestinal bleeding has a separate short-term antibiotic-prevention indication. These indications must not be confused with giving antibiotics universally for severe alcohol-associated hepatitis or with assuming HE-dose rifaximin substitutes for active SBP treatment."
    },
    {
      "heading": "Prevent bleeding and recognize an emergency",
      "body": "Assess clinically significant portal hypertension and variceal risk. Nonselective beta blockers can prevent decompensation in compensated cirrhosis with clinically significant portal hypertension and prevent variceal bleeding when indicated. An endoscopic prevention strategy is needed when appropriate, including persistent intolerance to beta blockade. Ascites alone is not an automatic permanent contraindication, but hypotension or kidney deterioration requires prompt dose and hemodynamic reassessment. Hematemesis, melena with instability or suspected acute variceal hemorrhage requires urgent monitored care, resuscitation and airway assessment, early vasoactive therapy and short-term antibiotic prophylaxis, followed by timely endoscopy; esophageal variceal band ligation is the recommended endoscopic treatment. An outpatient beta blocker alone is not the acute bleeding bundle."
    },
    {
      "heading": "Protect cognition and examine competing causes",
      "body": "Evaluate altered mental status clinically rather than attributing all confusion to either alcohol withdrawal or HE. Infection, bleeding, dehydration, electrolyte abnormalities, sedatives, neurological disease and Wernicke encephalopathy may contribute; withdrawal and HE can coexist. Severe impaired consciousness needs urgent airway and treatment-route assessment. Treat HE precipitants and use lactulose, titrated to about 2 to 3 soft stools daily without harmful diarrhea. Rifaximin 550 mg orally twice daily is used for adult overt HE recurrence prevention and is added for recurrent episodes despite tolerated lactulose maintenance. Clinical cognition, function, recurrence, adherence and bowel safety guide follow-up; an ammonia value alone should not determine treatment. Do not replace HE care with routine protein restriction."
    },
    {
      "heading": "Investigate kidney deterioration promptly",
      "body": "New kidney injury calls for assessment of volume loss, infection, bleeding, shock, nephrotoxic medicines and intrinsic kidney disease. Do not diagnose HRS-AKI from one creatinine result or automatically continue every previous diuretic and blood-pressure medicine. HRS physiology and other kidney injuries can coexist, and the liver team should apply the current diagnostic and treatment pathway. Review potassium and sodium as well as creatinine, blood pressure, weight and intake. Hyperkalemia during spironolactone therapy requires prompt treatment assessment and dose reduction or discontinuation by the treating team, not automatic continuation. Systemic NSAIDs, ACE inhibitors and ARBs should be avoided in cirrhosis with ascites because of renal-perfusion risk; indication-specific diuretics and beta blockers require reassessment rather than indiscriminate permanent discontinuation."
    },
    {
      "heading": "Choose pain treatment through the liver-safety plan",
      "body": "Reconcile prescriptions, over-the-counter products and supplements at each transition. Systemic NSAIDs can worsen kidney function, bleeding and ascites and should be avoided in cirrhosis. AASLD guidance favors local measures for localized pain and, when systemic treatment is appropriate, acetaminophen up to 2 g/day in most patients with cirrhosis. Count acetaminophen in every combination product. For example, 500 mg four times daily already totals 2,000 mg; adding two 650 mg doses produces 3,300 mg/day and exceeds that plan. Active alcohol use, malnutrition, acute liver injury and other patient factors require individual review; a general cirrhosis ceiling is not permission to self-treat an overdose or ignore a lower prescribed limit."
    },
    {
      "heading": "Separate supervised withdrawal care from routine sedative use",
      "body": "Benzodiazepines can precipitate or worsen HE, sedation and falls, but monitored benzodiazepine therapy can still be necessary for severe alcohol withdrawal. Review the actual indication, timing, dose, hepatic and renal function, other sedatives and mental status. A newly added bedtime sedative in a patient with prior HE and increasing drowsiness needs prompt clinical and medication assessment, including competing precipitants, rather than automatic dose escalation. Chronic benzodiazepines are generally avoided for sleep in decompensated cirrhosis; dependence and withdrawal risk require a supervised change. Selected end-of-life comfort goals may justify a different risk-benefit decision. Cirrhosis does not create a universal ban on every sedative in every setting."
    },
    {
      "heading": "Continue appropriate HCC surveillance",
      "body": "In established alcohol-associated cirrhosis, abstinence alone is not a reason to end hepatocellular carcinoma surveillance. AASLD recommends ultrasound plus alpha-fetoprotein about every 6 months in eligible patients, with a different imaging plan when ultrasound visualization is inadequate. Surveillance is intended for patients who could benefit from HCC-directed treatment: Child-Pugh C patients who are not transplant eligible and people with life-limiting comorbidity that cannot be remedied by transplantation or directed therapy generally do not benefit. Confirm eligibility, the next surveillance date and who follows the result. A normal AST does not replace surveillance, and AFP alone is not the routine surveillance strategy."
    },
    {
      "heading": "Maintain supportive care and timely referral",
      "body": "Assess nutritional intake and muscle loss, maintain adequate individualized protein, reduce prolonged fasting and correct identified vitamin or mineral deficiencies, including thiamine risk. Review vaccination status and age- and risk-appropriate immunizations, and assess bone health. Continue medication stewardship and caregiver education with clear instructions for new confusion, bleeding, fever, poor intake or reduced urine output. Decompensated alcohol-associated cirrhosis, recurrent or refractory ascites and other medically significant complications warrant timely hepatology and transplant evaluation while AUD treatment continues. Referral is not guaranteed eligibility, and a single abstinence report does not substitute for multidisciplinary medical and psychosocial assessment."
    }
  ],
  "check": {
    "question": "An abstinent patient has established Child-Pugh B alcohol-associated cirrhosis and remains eligible for HCC-directed treatment. What surveillance plan is best?",
    "choices": [
      "Continue ultrasound plus AFP about every 6 months under the liver-care plan.",
      "End surveillance immediately because alcohol use has stopped.",
      "Obtain surveillance only when AST rises.",
      "Use AFP alone as the routine surveillance strategy."
    ],
    "rationale": "Abstinence improves prognosis but does not itself remove HCC risk in established cirrhosis. AASLD recommends ultrasound plus AFP at approximately six-month intervals in eligible patients. AST is not a surveillance gate, and AFP alone is insufficient; limited ultrasound visualization may require alternative imaging."
  }
};
for (const lesson of alcoholAssociatedLiverDiseaseModule.submodules) {
  if (lesson.slug === "cirrhosis-complications") {
    Object.assign(lesson, verifiedAldCirrhosisLesson.metadata);
    lesson.lesson = verifiedAldCirrhosisLesson.bodies;
    Object.assign(lesson.check, verifiedAldCirrhosisLesson.check);
  }
}
alcoholAssociatedLiverDiseaseModule.references.push(...[
  {
    "label": "NIDDK official cirrhosis complications: bone health and nutrition.",
    "href": "https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis/definition-facts"
  },
  {
    "label": "ADQI-ICA primary AKI and HRS consensus (2024).",
    "href": "https://doi.org/10.1016/j.jhep.2024.03.031"
  },
  {
    "label": "Spironolactone CaroSpir US label: potassium and renal precautions.",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c4f70a04-7d89-4b73-8b02-17d43471bf08"
  },
  {
    "label": "AASLD 2021 primary ascites, SBP and HRS practice guidance.",
    "href": "https://doi.org/10.1002/hep.31884"
  },
  {
    "label": "Baveno VII primary consensus on portal hypertension (2022).",
    "href": "https://doi.org/10.1016/j.jhep.2021.12.022"
  },
  {
    "label": "ACG primary hepatic encephalopathy guideline (2026).",
    "href": "https://doi.org/10.14309/ajg.0000000000003899"
  },
  {
    "label": "AASLD primary HCC surveillance guidance (2023).",
    "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10663390/"
  },
  {
    "label": "AASLD primary palliative and symptom-management guidance (2022).",
    "href": "https://doi.org/10.1002/hep.32378"
  }
]);


// Purpose-specific thiamine and individualized, monitored nutrition support.
const verifiedAldNutritionLesson = {
  "metadata": {
    "summary": "Recognize Wernicke risk, distinguish preventive and treatment regimens, and rebuild nutrition through individualized goals and monitored feeding.",
    "concepts": [
      "Wernicke assessment",
      "Purpose-specific thiamine",
      "Magnesium and phosphate",
      "Energy and protein",
      "Refeeding monitoring"
    ],
    "application": "Treat neurological and glucose emergencies promptly, calculate the prescribed nutrition goal, and coordinate monitored feeding and recovery follow-up.",
    "keyPoints": [
      "A missing classic finding does not exclude Wernicke encephalopathy.",
      "A preventive thiamine dose does not establish adequate neurological treatment.",
      "Urgent glucose must not wait for thiamine.",
      "An eventual calorie goal is not a first-day refeeding prescription."
    ]
  },
  "bodies": [
    {
      "heading": "Recognize risk before the full triad appears",
      "body": "Thiamine deficiency can injure the brain in people with prolonged poor intake and alcohol dependence, including those who are still drinking. Confusion, gait ataxia and abnormal eye movements are important Wernicke encephalopathy findings, but absence of one finding does not exclude the condition. New confusion with malnutrition or ataxia warrants urgent assessment and parenteral thiamine when Wernicke encephalopathy is suspected. Evaluate hypoglycemia, withdrawal, HE, infection, medicines and other neurological causes at the same time; do not attribute every altered mental state to one liver diagnosis or wait for all three classic findings."
    },
    {
      "heading": "Separate prevention from neurological treatment",
      "body": "The route and regimen depend on the purpose, nutritional risk and ability to absorb oral treatment. ASAM withdrawal guidance prefers IV or IM thiamine for poor nutrition, malabsorption or severe withdrawal complications and describes a typical preventive regimen of 100 mg IV or IM daily for 3 to 5 days; oral thiamine can also be offered in appropriate circumstances. This preventive example is not an adequate-treatment rule for newly suspected Wernicke encephalopathy. Other hospital guidance uses higher preventive doses for high-risk patients. Follow the relevant hospital protocol and reassess risk and symptoms rather than applying one dose to every patient."
    },
    {
      "heading": "Treat suspected Wernicke encephalopathy promptly",
      "body": "Suspected Wernicke encephalopathy requires hospital care and a parenteral treatment regimen, usually IV, with daily neurological review. As one clearly identified treatment example, UK alcohol-care guidance published in 2025 recommends IV thiamine 300 to 500 mg three times daily for 3 to 5 days, with further parenteral therapy when symptoms persist and improvement continues. NICE CG100 recommends at least 5 days of parenteral treatment unless Wernicke encephalopathy is excluded, followed by oral thiamine. These are purpose-specific guideline examples, not instructions to combine protocols or stop automatically on day 3. Use the treating service’s regimen, assess competing causes and administer parenteral therapy where trained staff can manage hypersensitivity reactions."
    },
    {
      "heading": "Do not delay urgent glucose",
      "body": "Symptomatic hypoglycemia needs prompt glucose treatment. ASAM permits glucose and thiamine in either order or concurrently; waiting for a thiamine dose must not postpone urgently needed glucose. Give thiamine promptly as well, particularly when malnutrition or Wernicke risk is present. Thiamine is not a substitute for glucose, and correcting the glucose value does not complete vitamin or nutrition care. For planned feeding, arrange thiamine support before and during nutrition when feasible under the refeeding protocol, while keeping emergency hypoglycemia treatment immediate."
    },
    {
      "heading": "Correct electrolyte partners with monitoring",
      "body": "Check and recheck magnesium when Wernicke encephalopathy is suspected: low magnesium can impair activation and effectiveness of thiamine. Correct documented deficiency with the treating team and monitor kidney function and the clinical response. Review potassium and phosphate as well, especially during nutrition initiation. Replacement dose, route and monitoring depend on severity, renal function and the care setting. This is a reason to identify and treat deficiencies, not to administer unrestricted magnesium to every patient or to stop thiamine because early improvement is incomplete."
    },
    {
      "heading": "Assess nutrition beyond the albumin value",
      "body": "Assess current intake, recent weight change, fluid retention, muscle loss, function and the ability to swallow and obtain food. Involve a dietitian and address nausea, confusion and other barriers to eating. Ascites and edema can distort measured weight; low albumin reflects disease and does not independently measure protein intake or nutritional recovery. Thiamine, vitamin B12 and zinc deficits are common in alcohol-associated hepatitis; evaluate and replete clinically relevant deficiencies. Vitamins and minerals do not provide the calories and protein needed to rebuild reserve, and a generic supplement list does not establish a safe dose for every patient."
    },
    {
      "heading": "Calculate a qualified nutrition goal",
      "body": "ACG recommends a goal of 35 kcal/kg/day and 1.2 to 1.5 g/kg/day of protein for alcohol-associated hepatitis. AASLD adult cirrhosis guidance also recommends 1.2 to 1.5 g/kg/day of protein and uses ideal body weight pragmatically for protein calculations; energy needs depend on the patient, body composition and illness. For a worked non-obese example, assume the dietitian has selected 70 kg as the appropriate weight for both prescribed calculations: 35 × 70 = 2,450 kcal/day, and 1.2 × 70 to 1.5 × 70 = 84 to 105 g protein/day. This is the eventual prescribed goal, not an automatic first-day feed in a depleted patient. Fluid overload, obesity, critical illness, kidney disease and measured energy expenditure can require a different individualized plan."
    },
    {
      "heading": "Preserve protein and shorten fasting",
      "body": "Do not routinely restrict protein because a patient with cirrhosis has HE. Maintain the individualized protein goal while treating HE and its precipitants; restriction can worsen muscle catabolism. Encourage varied protein sources, including vegetable and dairy foods, rather than imposing a universal meat ban. Small meals or snacks about every 3 to 4 waking hours and an early breakfast or late-evening snack can reduce long fasting periods. Match the snack and meal plan to intake needs and tolerance; branched-chain amino acid products are not a universal substitute for adequate daily protein."
    },
    {
      "heading": "Recognize and monitor refeeding risk",
      "body": "Prolonged negligible intake, substantial weight loss and low phosphate, potassium or magnesium before feeding identify refeeding risk. NICE includes little or no intake for more than 10 days or low baseline electrolytes among its high-risk criteria. Use a trained nutrition team and the relevant refeeding protocol to select the initial intake and advance it with monitoring, rather than immediately delivering the eventual full calorie target. Provide thiamine and appropriate micronutrients, assess fluid balance and check electrolytes, glucose and kidney function at baseline and frequently during initiation; NICE recommends daily phosphate and magnesium checks when refeeding risk is present, with frequency adapted to clinical instability. New weakness, an arrhythmia, worsening fluid overload or falling phosphate needs prompt assessment and correction, not automatic feed escalation. Refeeding problems can occur with oral, enteral or parenteral nutrition."
    },
    {
      "heading": "Escalate support and assign follow-up",
      "body": "When safe oral intake cannot meet the plan, add oral nutritional supplements and measure whether intake improves. For alcohol-associated hepatitis, ACG recommends enteral nutrition when oral intake remains inadequate despite supplements. The team should assess gastrointestinal function, swallowing and airway safety, hemodynamic stability and suitable access; ALD alone does not mandate parenteral nutrition or exclude enteral feeding. Plan nutrition support through the appropriate service when the gastrointestinal route is insufficient or unusable. Before discharge, assign follow-up for intake, weight interpreted with fluid status, electrolytes, vitamin therapy and access to food alongside continuing liver and AUD care. Completion of withdrawal is not completion of recovery treatment."
    }
  ],
  "check": {
    "question": "A malnourished adult with alcohol dependence is confused and has symptomatic hypoglycemia. IV glucose is ready, but thiamine has not yet arrived. Which action is best?",
    "choices": [
      "Treat the hypoglycemia promptly and administer thiamine as soon as possible.",
      "Wait for thiamine before giving any glucose, despite the symptomatic hypoglycemia.",
      "Give thiamine alone because it directly replaces the missing glucose.",
      "Give glucose now and omit further thiamine assessment because glucose correction excludes Wernicke risk."
    ],
    "rationale": "Treat symptomatic hypoglycemia without delay. ASAM permits glucose and thiamine in either order or concurrently, so waiting for thiamine must not postpone emergency glucose. Give thiamine promptly as well. Thiamine does not replace glucose, and glucose correction does not remove the patient’s nutritional or Wernicke risk."
  }
};
for (const lesson of alcoholAssociatedLiverDiseaseModule.submodules) {
  if (lesson.slug === "thiamine-nutrition") {
    Object.assign(lesson, verifiedAldNutritionLesson.metadata);
    lesson.lesson = verifiedAldNutritionLesson.bodies;
    Object.assign(lesson.check, verifiedAldNutritionLesson.check);
  }
}
alcoholAssociatedLiverDiseaseModule.references.push(...[
  {
    "label": "AASLD primary malnutrition, frailty and sarcopenia guidance (2021).",
    "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9134787/"
  },
  {
    "label": "NICE CG100: Wernicke prevention and parenteral treatment.",
    "href": "https://www.nice.org.uk/guidance/cg100/resources/alcoholuse-disorders-diagnosis-and-management-of-physical-complications-pdf-35109322251973"
  },
  {
    "label": "NICE CG32: nutrition support, refeeding risk and monitoring.",
    "href": "https://www.nice.org.uk/guidance/cg32/resources/nutrition-support-for-adults-oral-nutrition-support-enteral-tube-feeding-and-parenteral-nutrition-pdf-975383198917"
  },
  {
    "label": "UK alcohol-care guidance: purpose-specific thiamine and magnesium assessment.",
    "href": "https://www.gov.uk/guidance/clinical-guidelines-for-alcohol-treatment/16-alcohol-care-in-acute-hospitals"
  }
]);


// Source-reconciled NAC adjunct, infusion safety and coordinated organ support.
const verifiedAldNacLesson = {
  "metadata": {
    "summary": "Use NAC with an eligible severe-hepatitis plan while protecting nutrition, infusion safety, infection care and organ function.",
    "concepts": [
      "Adjunctive NAC",
      "Indication and dilution",
      "Infusion safety",
      "Nutrition and infection",
      "Response and recovery"
    ],
    "application": "Reconcile the disease-treatment order and fluid plan, measure intake, evaluate deterioration, and assign response monitoring and recovery follow-up.",
    "keyPoints": [
      "NAC is a specialist-managed adjunct, with qualified survival evidence.",
      "Concentrate volume is not final infusion volume.",
      "Serious infusion reactions require immediate treatment.",
      "Nutrition, infection care and response assessment proceed together."
    ]
  },
  "bodies": [
    {
      "heading": "Confirm eligibility before adding an adjunct",
      "body": "Severe alcohol-associated hepatitis (AH) requires hospital assessment of the syndrome, competing causes and organ function. The 2024 ACG guideline uses MELD greater than 20 to identify severe AH and recommends corticosteroids when no contraindication is present. Active infection, uncontrolled diabetes, gastrointestinal bleeding and severe renal failure require assessment and control before steroid eligibility is reconsidered. Adding N-acetylcysteine (NAC) does not make an unsafe steroid plan acceptable."
    },
    {
      "heading": "Use IV NAC alongside selected disease therapy",
      "body": "ACG recommends intravenous NAC as an adjunct to corticosteroids in severe AH; its guidance describes a five-day infusion course within specialist management. NAC does not replace corticosteroid eligibility assessment, nutrition, infection treatment or alcohol use disorder (AUD) care. Oral supplement products and inhaled preparations are not interchangeable substitutes for a prescribed IV regimen. A patient ineligible for corticosteroids needs an individualized liver-team plan rather than an assumption that NAC alone is established definitive treatment."
    },
    {
      "heading": "Explain the survival evidence accurately",
      "body": "In the 2011 randomized trial by Nguyen-Khac and colleagues, five days of IV NAC added to prednisolone improved one-month survival, but the primary outcome of six-month survival was not significantly improved. ACG also describes divergent adjunctive-study results and limitations in their interpretation. This supports an evidence-qualified adjunctive role rather than a claim of proven durable survival benefit, a guaranteed individual response or a cure. NAC monotherapy has not demonstrated the same established role as the guideline-recommended combination."
    },
    {
      "heading": "Match the infusion to its indication",
      "body": "The US ACETADOTE label concerns prevention or reduction of hepatic injury after potentially toxic acetaminophen ingestion. Its overdose regimens and stopping rules should not automatically replace a severe-AH protocol. AH use is outside that labeled indication. Confirm the clinical purpose, weight, product concentration, dose, infusion schedule, compatible diluent and total fluid plan with the prescribing team and pharmacy. The original AH trial used five days of IV NAC, including 100 mg/kg/day on days 2 through 5; a historical trial is not an instruction to copy every preparation or infusion rate into every patient."
    },
    {
      "heading": "Calculate concentrate separately from final fluid",
      "body": "Worked example: a verified severe-AH protocol order specifies NAC 100 mg/kg for day 2 in a 70 kg adult. The available injectable concentrate is 200 mg/mL. The daily dose is 70 kg × 100 mg/kg = 7,000 mg; the volume drawn from the concentrate is 7,000 mg ÷ 200 mg/mL = 35 mL. That is not the final infusion volume. IV NAC requires dilution and a verified rate. Pharmacy should reconcile the protocol with product instructions and the individual fluid plan, especially if fluid restriction is required; cirrhosis or ascites alone does not establish that restriction."
    },
    {
      "heading": "Monitor infusion reactions and fluid safety",
      "body": "Check the product contraindications and reaction history before treatment: ACETADOTE lists previous hypersensitivity to acetylcysteine as a contraindication. Observe during and after infusion; asthma requires close monitoring. New urticaria with wheezing or hypotension can signal a serious hypersensitivity reaction. Immediately stop the infusion and initiate urgent appropriate treatment. Do not merely slow the pump and wait or restart during unresolved acute symptoms. Any later regimen decision needs supervised reassessment after treatment and symptom resolution. Include NAC diluent in total IV fluid accounting and monitor fluid balance and sodium; excessive volume can cause dangerous hyponatremia."
    },
    {
      "heading": "Feed according to intake and clinical safety",
      "body": "Measure actual intake and involve the nutrition team. Add oral nutrition supplements when food alone is insufficient; use enteral support when requirements remain unmet and the gastrointestinal route is feasible. Esophageal varices alone are not an absolute contraindication to an enteric feeding tube. Active bleeding requires urgent assessment; if a tube is required after recent variceal banding, AASLD advises close monitoring for rebleeding rather than a blanket permanent prohibition. Assess airway and aspiration safety, minimize avoidable fasting, provide indicated thiamine and micronutrients, and follow the individualized refeeding plan. Reserve parenteral nutrition for situations in which oral and enteral routes are insufficient or cannot be used."
    },
    {
      "heading": "Distinguish infection treatment from prevention",
      "body": "Do not give prophylactic antibiotics universally just because severe AH is present. Continue infection surveillance and treat documented or strongly suspected infection promptly. Cirrhotic ascites with new pain, AKI or confusion warrants prompt SBP assessment even without fever. Ascitic PMNs at least 250 cells/mm³ support active antibiotics without waiting for a positive culture; assess albumin, local resistance and clues to a secondary abdominal source. Obtain indicated samples promptly, without delaying urgent treatment in an unstable patient. Acute gastrointestinal bleeding and secondary prevention after prior SBP have separate antibiotic indications. Control an active infection before the team reassesses corticosteroid eligibility."
    },
    {
      "heading": "Reassess organ function, response and recovery together",
      "body": "Track blood pressure, oxygenation, mental status, bleeding, kidney function, electrolytes, fluid balance, intake and liver trajectory. New kidney injury needs review of infection, volume loss, bleeding, shock and medicine toxicity; one creatinine result does not establish HRS-AKI. Review response to corticosteroids with the Lille score at day 4 or 7; ACG recommends stopping corticosteroids in nonresponders with a score greater than 0.45. Organ deterioration may require intensive care and timely hepatology or transplant assessment. Goals-of-care and symptom support should reflect prognosis, eligibility and patient preferences. Continue AUD treatment and a concrete recovery and nutrition follow-up plan after the acute infusion ends."
    }
  ],
  "check": {
    "question": "A severe-AH order specifies a five-day IV NAC adjunctive course. A handoff proposes stopping solely because 21 hours have elapsed, citing the acetaminophen-overdose label. What is the best response?",
    "choices": [
      "Clarify the indication and verified AH protocol with the prescribing team and pharmacy, while reviewing current safety and eligibility.",
      "Automatically stop every AH course at 21 hours because all NAC indications share one regimen.",
      "Continue indefinitely because NAC guarantees long-term survival.",
      "Replace the infusion with an oral supplement without reviewing the order."
    ],
    "rationale": "AH adjunctive treatment and labeled acetaminophen-overdose treatment have different clinical purposes and regimens. ACG describes a five-day IV adjunctive course in severe AH; the overdose label does not automatically govern that course. Reconcile the order with the team, patient safety and protocol rather than changing treatment by assumption. NAC does not guarantee durable survival, and oral supplements do not substitute for a prescribed IV preparation."
  }
};
for (const lesson of alcoholAssociatedLiverDiseaseModule.submodules) {
  if (lesson.slug === "nac-support") {
    Object.assign(lesson, verifiedAldNacLesson.metadata);
    lesson.lesson = verifiedAldNacLesson.bodies;
    Object.assign(lesson.check, verifiedAldNacLesson.check);
  }
}
alcoholAssociatedLiverDiseaseModule.references.push(...[
  {
    "label": "Primary randomized trial of prednisolone plus NAC in severe AH (2011).",
    "href": "https://www.nejm.org/doi/full/10.1056/NEJMoa1101214"
  },
  {
    "label": "ACETADOTE US prescribing information: indication, dilution and infusion safety.",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=472f158a-5ab9-4308-8e49-1116e6ea3d39"
  },
  {
    "label": "ACG official 2024 ALD guideline highlights: five-day NAC adjunct and response assessment.",
    "href": "https://webfiles.gi.org/links/journals/ACG-Alcohol-Associated-Liver-Disease-Guidelines-Highlights-2024.pdf"
  },
  {
    "label": "AASLD official clinical teaching: prompt paracentesis and the inclusive SBP PMN threshold.",
    "href": "https://www.aasld.org/liver-fellow-network/core-series/why-series/why-timing-matters-paracentesis-admission-cirrhosis"
  }
]);


// Source-reconciled AH diagnosis, confidence and competing-cause assessment.
const verifiedAldDiagnosisLesson = {
  "metadata": {
    "summary": "Diagnose the recent-jaundice syndrome, evaluate competing causes, distinguish confidence from severity, and coordinate urgent care.",
    "concepts": [
      "Exposure and jaundice timeline",
      "Supportive laboratory pattern",
      "Competing causes",
      "Diagnostic confidence",
      "Severity and acute care"
    ],
    "application": "Explain why a presentation supports probable or possible AH, identify the remaining differential, and decide whether selective confirmation would change management.",
    "keyPoints": [
      "An AST:ALT ratio supports AH but does not prove it.",
      "Infection and AH can coexist.",
      "Biopsy is selective when diagnostic uncertainty matters.",
      "Severity assessment follows diagnosis and does not establish the cause."
    ]
  },
  "bodies": [
    {
      "heading": "Recognize the acute clinical syndrome",
      "body": "Alcohol-associated hepatitis (AH) is a clinical syndrome of recent onset or worsening jaundice in a person with a compatible history of heavy alcohol exposure. It differs from alcohol-related steatosis and from the chronic structural changes of cirrhosis, although these conditions can coexist. Established cirrhosis or every feature of decompensation is not required for AH. First establish the time course and evaluate the patient, rather than assigning the diagnosis from the presence of alcohol use alone."
    },
    {
      "heading": "Reconstruct the exposure and jaundice timeline",
      "body": "Ask respectfully about the amount and duration of alcohol use, the last drink and the onset of jaundice. The 2024 ACG guideline Table 5 describes probable AH using recent jaundice within 60 days of heavy use, more than 50 g of alcohol per day for at least six months, the compatible laboratory pattern and no other cause of acute hepatitis. Earlier AASLD guidance describes the original consensus exposure thresholds as more than 40 g/day for women or 60 g/day for men, with less than 60 days of abstinence before jaundice. Identify the definition being applied rather than blending these criteria. These diagnostic criteria do not define a safe amount of alcohol for a person with liver disease. An uncertain exposure history lowers diagnostic confidence and deserves further evaluation."
    },
    {
      "heading": "Interpret the pattern and its limitations",
      "body": "The ACG probable-AH pattern includes bilirubin greater than 3 mg/dL, AST 50 to 400 U/L and an AST:ALT ratio greater than 1.5. Worked example: AST 180 U/L and ALT 90 U/L give 180 ÷ 90 = 2, a supportive ratio. With recent jaundice, bilirubin 6 mg/dL, compatible exposure and no competing cause, this supports probable AH. The ratio alone does not prove the diagnosis. AST and ALT reflect injury; bilirubin, INR, albumin and the clinical course provide different information about liver function and illness. Markedly atypical aminotransferases, such as values in the thousands, require evaluation for alternative or additional causes rather than an automatic AH label."
    },
    {
      "heading": "Actively evaluate competing causes",
      "body": "Review prescribed drugs, recent changes, nonprescription medicines, supplements and toxins. Evaluate viral hepatitis, biliary obstruction, ischemic injury and autoimmune disease when indicated by the history, examination and investigations. Consider other vascular or metabolic causes in the appropriate context. Recent shock or a temporally plausible drug exposure can confound the diagnosis; neither alcohol history nor an abnormal ratio removes that possibility. Obtain indicated laboratory testing and imaging, and document which alternatives have been assessed and which remain unresolved."
    },
    {
      "heading": "Search for infection and acute complications",
      "body": "AH can produce systemic inflammatory features without infection, and infection can also coexist. Leukocytosis, tachycardia or a negative initial culture does not settle that distinction. Examine for infection sources and obtain indicated cultures, imaging and other investigations while reassessing the patient. Cirrhosis with ascites requires particular attention: new AKI, confusion or an emergent admission may warrant prompt diagnostic paracentesis even without fever. Address bleeding, encephalopathy, kidney injury, unstable circulation and poor intake urgently. Do not postpone necessary treatment of a strongly suspected infection in an unstable patient while waiting for every result."
    },
    {
      "heading": "Assign confidence and use biopsy selectively",
      "body": "Probable AH is a compatible clinical syndrome without a major diagnostic confounder. Possible AH has an uncertain exposure history, atypical findings or another plausible cause that limits confidence. Definite AH adds compatible histologic confirmation to the clinical diagnosis. A classic presentation without confounders does not require routine liver biopsy. When uncertainty persists and confirmation could change a treatment decision, discuss selective biopsy with hepatology; the ACG algorithm uses transjugular biopsy in this setting. Biopsy is part of clinical correlation and does not replace the exposure history or the assessment of competing causes."
    },
    {
      "heading": "Assess severity after establishing the syndrome",
      "body": "Diagnostic confidence and severity answer different questions. The 2024 ACG guideline classifies AH as severe with an original MELD score greater than 20 and moderate at 20 or below. A supplied original MELD of 21 therefore falls in the severe group; 20 does not cross that threshold. Confirm the score version and the correct laboratory units instead of treating MELD, MELD-Na and other versions as automatically interchangeable. A severity score does not establish the cause of hepatitis or make corticosteroids automatically appropriate. Severe AH requires assessment of contraindications, infection and organ function before the liver team selects disease-directed therapy."
    },
    {
      "heading": "Communicate a coordinated initial plan",
      "body": "A useful handoff states the jaundice and exposure timeline, laboratory pattern, diagnostic confidence, competing causes, severity and urgent complications. Arrange nutrition assessment, indicated supplementation and alcohol use disorder treatment alongside the acute liver evaluation. Continue serial assessment of mental status, circulation, kidney function, electrolytes, liver trajectory and intake. Uncertainty about the final cause does not suspend supportive care or treatment of acute complications. Recovery follow-up should include hepatology, nutrition and a concrete alcohol cessation and AUD care plan."
    }
  ],
  "check": {
    "question": "In a patient being evaluated for AH, AST falls while INR rises and kidney function worsens. Which interpretation is most appropriate?",
    "choices": [
      "Reassess liver function, organ deterioration and complications; a falling injury marker alone does not establish recovery.",
      "Declare recovery solely because AST has fallen.",
      "Disregard kidney function because it is unrelated to severity assessment.",
      "Use the AST decline to exclude every competing cause of hepatitis."
    ],
    "rationale": "AST is an injury marker and its trajectory cannot independently establish recovery. INR, kidney function and the clinical course provide separate information relevant to function and severity. Worsening organ function warrants prompt reassessment of complications and competing causes. Neither the AST trend nor one isolated laboratory result excludes the differential."
  }
};
for (const lesson of alcoholAssociatedLiverDiseaseModule.submodules) {
  if (lesson.slug === "hepatitis-diagnosis") {
    Object.assign(lesson, verifiedAldDiagnosisLesson.metadata);
    lesson.lesson = verifiedAldDiagnosisLesson.bodies;
    Object.assign(lesson.check, verifiedAldDiagnosisLesson.check);
  }
}
alcoholAssociatedLiverDiseaseModule.references.push(...[
  {
    "label": "AASLD primary ALD practice guidance (2019): AH diagnostic confidence and selective biopsy.",
    "href": "https://doi.org/10.1002/hep.30866"
  }
]);


// Source-reconciled steroid eligibility, regimens and timed AH response review.
const verifiedAldSteroidLesson = {
  "metadata": {
    "summary": "Select corticosteroids for eligible severe AH, verify the regimen, reassess with Lille on day 4 or 7, and stop ineffective or unsafe exposure.",
    "concepts": [
      "Original MELD and modified Maddrey DF",
      "Eligibility and regimen",
      "Ongoing safety",
      "Timed Lille response",
      "Course completion and continuing care"
    ],
    "application": "Calculate mDF with verified inputs, identify unresolved contraindications, and assign the response and safety reviews before treatment begins.",
    "keyPoints": [
      "Severity and eligibility require separate assessment.",
      "mDF uses PT minus laboratory control PT and bilirubin in mg/dL.",
      "Lille is a timed treatment-response assessment.",
      "Nonresponse and new serious hazards require action."
    ]
  },
  "bodies": [
    {
      "heading": "Establish the syndrome and estimate severity",
      "body": "Confirm a compatible alcohol-associated hepatitis (AH) syndrome and evaluate competing causes before using a prognostic score to select treatment. The 2024 ACG guideline uses original MELD greater than 20 to define severe AH; the score alone does not establish the cause or corticosteroid eligibility. Benefit is not a simple function of increasing severity. ACG identifies the greatest corticosteroid benefit in the MELD 25 to 39 range and calls for careful risk-benefit review above 50. Very severe illness warrants urgent multidisciplinary assessment, not an automatic higher steroid dose."
    },
    {
      "heading": "Calculate modified Maddrey DF with the correct inputs",
      "body": "The historical modified Maddrey discriminant function (mDF) is 4.6 × [patient prothrombin time − laboratory control prothrombin time] + total bilirubin. Use PT values in seconds and bilirubin in mg/dL; do not substitute INR for the PT difference or silently insert bilirubin reported in another unit. Worked example: patient PT 18 seconds, control PT 12 seconds and bilirubin 12 mg/dL give 4.6 × (18 − 12) + 12 = 39.6. The result exceeds the historical severe-AH threshold of at least 32. This complements clinical assessment; it neither proves AH nor overrides a contraindication. Laboratory-dependent PT limits comparisons across centers."
    },
    {
      "heading": "Control hazards before starting treatment",
      "body": "Assess active infection, including untreated hepatitis B infection, uncontrolled diabetes, gastrointestinal bleeding and severe renal failure. These are corticosteroid contraindications in the ACG AH framework. Treat or control the problem and let the liver team reassess eligibility; adequately controlled infection, bleeding or renal dysfunction may permit later reconsideration rather than a permanent exclusion. Review other clinical hazards and the overall trajectory. Do not interpret an elevated MELD or mDF as permission to start steroids through an unresolved contraindication."
    },
    {
      "heading": "Select an oral regimen within the liver-team plan",
      "body": "Prednisolone 40 mg orally each day is the commonly studied regimen for an eligible adult with severe AH, with a planned course of four weeks if response and safety permit. ACG also describes prednisone 40 mg/day, while noting that prednisolone has been more extensively studied and is generally used. The prescription needs an explicit response-review date and ongoing safety checks. Four weeks is a planned duration for appropriate responders, not a commitment to continue despite nonresponse or a new serious complication. Explain that the evidence concerns a selected short-term survival benefit rather than a guaranteed cure or lasting benefit from steroids alone."
    },
    {
      "heading": "Match the alternative drug and route deliberately",
      "body": "For an eligible patient who cannot take oral medication, ACG describes IV methylprednisolone 32 mg/day as an alternative. This is a different drug-dose-route combination from oral prednisolone 40 mg/day. Verify the exact product and order with pharmacy and the prescribing team; do not copy the oral number into an IV order by assumption. Reconcile the indication, route and administration plan when the patient can resume oral treatment. Neither a route change nor an adjunct such as NAC removes the need for eligibility and response assessment."
    },
    {
      "heading": "Monitor safety throughout corticosteroid exposure",
      "body": "Continue surveillance for infection, including fungal infection, and follow glucose control, bleeding, kidney function, mental status, liver trajectory and intake. A reassuring earlier response does not erase a newly developed hazard. New infection, gastrointestinal bleeding or organ deterioration requires prompt clinical assessment and reconsideration of continued treatment. Do not prescribe prophylactic antibiotics universally solely because severe AH or steroid treatment is present; active infection and separate cirrhosis-related prevention indications have their own management plans. Nutrition and AUD care continue alongside the steroid plan."
    },
    {
      "heading": "Schedule a dynamic response assessment",
      "body": "Lille assesses early response after corticosteroid treatment has begun, unlike the baseline severity scores. Arrange calculation at day 4 or day 7 using the corresponding validated timing and a verified calculator. Check the treatment start date, baseline and follow-up bilirubin, age, baseline albumin, PT and renal information, and the units the calculator requires. A single bilirubin value or a pretreatment Lille estimate does not replace this dynamic assessment. Document who will obtain the follow-up results and act on the score; do not wait until the planned four-week course ends to discover nonresponse."
    },
    {
      "heading": "Stop nonresponse and handle the boundary carefully",
      "body": "ACG key concept 27 and its official guideline summary recommend stopping corticosteroids in nonresponders with Lille greater than 0.45 at day 4 or 7. A verified score of 0.58 therefore supports stopping the AH steroid course while continuing other care and reassessing the patient. Some guideline diagrams and earlier guidance use at least 0.45 at the boundary. If a result is reported only as 0.45 after rounding, verify the unrounded score, calculation and liver-team protocol rather than declaring response or nonresponse from that display alone. A value clearly below the cutoff supports response assessment but does not guarantee safety or survival."
    },
    {
      "heading": "Plan the end of the course with the prescriber",
      "body": "For a patient who responds and remains suitable for treatment, continue only the clinician-directed course with ongoing reassessment. At the planned end, provide a clear prescribing and follow-up plan. ACG states that evidence does not establish a benefit of rapid versus slow tapering after the four-week AH course; do not invent one mandatory taper for every patient. The liver team must reconcile the individual treatment history, clinical state and any other steroid indication. A response score is not permission for indefinite therapy or for a patient to change the regimen without guidance."
    },
    {
      "heading": "Continue care when steroids stop or cannot be used",
      "body": "Stopping an ineffective or unsafe AH steroid course does not end care. Continue nutrition, alcohol cessation and AUD treatment, infection management and organ support. ACG recommends against pentoxifylline for severe AH, including its use as a supposed rescue for steroid nonresponse. Discuss specialist assessment, appropriate clinical-trial options and timely transplant evaluation for highly selected patients whose severe AH is unresponsive to medical management. Supportive and goals-of-care discussions should reflect clinical urgency, eligibility and patient preferences; neither a high score nor nonresponse alone dictates one outcome."
    }
  ],
  "check": {
    "question": "An adult who responded to the prescribed four-week AH corticosteroid course is preparing for discharge. A handoff says every patient must use the same slow taper, regardless of treatment history. What is the best response?",
    "choices": [
      "Obtain an individualized end-of-course plan from the prescriber; ACG does not establish a benefit of rapid versus slow tapering after this course.",
      "Extend corticosteroids indefinitely because a favorable Lille score guarantees continuing benefit.",
      "Tell the patient to double the daily dose whenever jaundice returns.",
      "Ignore the treatment history because one taper schedule is proven best for every patient."
    ],
    "rationale": "ACG does not identify evidence favoring rapid over slow tapering after the four-week AH regimen. The prescribing team should reconcile the individual course, clinical condition and any other steroid indication and provide clear instructions and follow-up. A response score does not justify indefinite treatment, unsupervised dose changes or a universal taper claim."
  }
};
for (const lesson of alcoholAssociatedLiverDiseaseModule.submodules) {
  if (lesson.slug === "steroid-lille") {
    Object.assign(lesson, verifiedAldSteroidLesson.metadata);
    lesson.lesson = verifiedAldSteroidLesson.bodies;
    Object.assign(lesson.check, verifiedAldSteroidLesson.check);
  }
}


// Source-reconciled AUD medication selection, regimens and organ-function precautions.
const verifiedAldAudLesson = {
  "metadata": {
    "summary": "Select AUD medication by liver status, kidney function, opioid exposure, cognition and the recovery plan; verify the exact product and follow-up.",
    "concepts": [
      "Abstinence and integrated care",
      "Acamprosate renal dosing",
      "Naltrexone and opioid exposure",
      "Baclofen and CNS safety",
      "Gabapentin and topiramate",
      "Disulfiram in ALD"
    ],
    "application": "Verify liver compensation, renal function, opioid history and relevant safety risks before selecting a product, dose and follow-up plan.",
    "keyPoints": [
      "AUD medication complements behavioral and liver care.",
      "Acamprosate is contraindicated at CrCl 30 mL/min or less.",
      "Naltrexone requires opioid and pain-plan review.",
      "Off-label options need neurologic and renal safeguards.",
      "Avoid disulfiram throughout ALD."
    ]
  },
  "bodies": [
    {
      "heading": "Treat AUD as part of liver care",
      "body": "Sustained alcohol abstinence is a central goal in ALD. Combine medication with behavioral treatment, supportive follow-up and management of liver complications. First distinguish acute alcohol withdrawal from longer-term AUD treatment: a relapse-prevention prescription does not replace urgent withdrawal assessment. The 2024 ACG recommendations for baclofen, acamprosate, naltrexone, gabapentin and topiramate specify compensated ALD. Decompensated disease or acute AH needs individual specialist review rather than automatic extension of those recommendations. Acamprosate and naltrexone are FDA-approved for alcohol dependence; baclofen, gabapentin and topiramate use for AUD is off label."
    },
    {
      "heading": "Use acamprosate for abstinence support",
      "body": "Acamprosate is indicated to maintain abstinence in a patient who is already abstinent when treatment starts, after withdrawal has been managed. It is not a treatment for acute alcohol withdrawal and does not cause a disulfiram-like alcohol reaction. Its exact abstinence-support mechanism is not completely understood. It does not undergo hepatic metabolism and is eliminated through the kidneys, so a liver-focused review must still assess kidney function. Pair the prescription with psychosocial treatment and an adherence plan."
    },
    {
      "heading": "Verify the acamprosate dose and renal boundary",
      "body": "The usual adult oral dose is 666 mg, supplied as two 333 mg delayed-release tablets, three times daily. That is six tablets and 1,998 mg per day. With creatinine clearance above 30 through 50 mL/min, use the labeled reduced dose of 333 mg three times daily. At 30 mL/min or less, acamprosate is contraindicated, including the exact boundary of 30. The label describes moderate impairment as 30 to 50 while separately contraindicating 30 or less; give the contraindication priority. Confirm the actual clearance estimate and reassess changing kidney function rather than inferring suitability from normal liver tests."
    },
    {
      "heading": "Follow acamprosate use over time",
      "body": "Plan how three daily doses will fit the patient’s routine, assess tolerability and monitor depression or suicidal thinking. The label advises maintaining treatment if alcohol use recurs; recurrence should prompt renewed clinical and psychosocial assessment rather than automatic abandonment of recovery care. Ongoing renal decline can still change eligibility or dose. Neither absence of hepatic metabolism nor a prior response establishes that the same prescription remains appropriate indefinitely."
    },
    {
      "heading": "Select naltrexone within the liver and recovery plan",
      "body": "Naltrexone blocks opioid receptors and can support reduced alcohol consumption and relapse prevention. ACG allows consideration of oral or extended-release naltrexone in early ALD or compensated cirrhosis and advises avoiding it in decompensated cirrhosis or liver failure. Do not assume established safety for acute AH. Assess liver status, kidney function, concurrent medicines, mood, opioid exposure and foreseeable pain needs. The labels warn about hepatic injury and advise discontinuation with symptoms or signs of acute hepatitis. A compensated diagnosis permits consideration, not a guarantee of suitability."
    },
    {
      "heading": "Verify opioid exposure before naltrexone",
      "body": "Do not start naltrexone in a patient receiving opioid analgesics, currently dependent on opioids, or in acute opioid withdrawal. Review prescribed and nonprescribed opioids, including tramadol, buprenorphine and methadone. For someone previously dependent on short-acting opioids, the labels recommend an opioid-free interval of at least 7 to 10 days; vulnerability after buprenorphine or methadone may persist for as long as two weeks. A negative urine test or tolerated naloxone challenge does not fully exclude precipitated withdrawal. The prescriber must verify readiness and have an appropriate management plan; this precaution also applies when treating AUD."
    },
    {
      "heading": "Distinguish oral and injectable naltrexone",
      "body": "The oral label recommends 50 mg once daily for most patients treated for alcohol dependence. VIVITROL is a separate extended-release preparation: 380 mg by deep intramuscular gluteal injection every four weeks or once a month, prepared and administered by a healthcare provider. It must not be given intravenously or subcutaneously. For its alcohol indication, the patient should be able to abstain before initiation and should not be actively drinking at the first injection. Oral pretreatment is not required by that label. Reconcile product, eligibility, administration, access and follow-up rather than choosing solely for convenience."
    },
    {
      "heading": "Plan pain care and naltrexone follow-up",
      "body": "Explain opioid blockade before treatment and tell the patient to inform clinicians about naltrexone during urgent pain care. Use a coordinated pain plan; opioid analgesia, if required, needs appropriately trained staff and close monitoring. Do not try to overcome blockade with extra opioids. After opioid detoxification, reduced tolerance can increase overdose risk as blockade wanes, after a missed injection or after treatment stops. Discuss access to an opioid overdose reversal agent and emergency response as directed by the product label. Review mood and liver symptoms, and assess concerning VIVITROL injection-site reactions promptly."
    },
    {
      "heading": "Use baclofen deliberately",
      "body": "Baclofen is a GABA-B receptor agonist used off label for AUD; ACG recommends it as an option in compensated ALD and describes substantial ALD-specific experience. Its guideline regimen begins at 5 mg three times daily, with increases at three- to five-day intervals according to tolerance, up to 15 mg three times daily. This is a specialist-directed AUD approach, not an instruction to titrate every patient to the maximum. Review kidney function because baclofen is predominantly renally excreted and dose reduction may be needed. Assess sedation, balance, cognition and other CNS depressants before escalation."
    },
    {
      "heading": "Recognize baclofen toxicity and discontinuation risks",
      "body": "New somnolence, impaired balance or cognitive change during baclofen treatment requires reassessment of the medicine, kidney function, coexposures and the patient’s overall condition. Do not label every mental-status change as hepatic encephalopathy or treat favorable liver tests as proof of safety. Baclofen’s CNS effects can add to those of alcohol and other depressants. Except where serious adverse reactions require urgent action, discontinuation should be gradual under the prescriber’s plan: abrupt withdrawal can cause hallucinations or seizures. Explain this distinction when prescribing and at care transitions."
    },
    {
      "heading": "Select gabapentin with renal and respiratory safeguards",
      "body": "Gabapentin is an off-label AUD option suggested by ACG for selected patients with compensated ALD. Its usual labeled indications do not establish an AUD dose for every patient. Review renal function and choose the regimen deliberately; renal impairment requires adjustment. Monitor dizziness, somnolence, balance and mood. Coexposure to opioids or other CNS depressants, or underlying respiratory impairment, increases concern for respiratory depression. An AUD indication does not cancel this risk. Do not substitute different gabapentin preparations or stop ongoing therapy abruptly without reviewing the product and prescribing plan."
    },
    {
      "heading": "Select topiramate with cognitive and metabolic safeguards",
      "body": "Topiramate is another off-label option suggested for selected compensated ALD. Choose a gradual, patient-specific plan, accounting for kidney function and other indications; an epilepsy or migraine regimen is not automatically an AUD regimen. The label requires renal dose adjustment and warns about difficulty with concentration, memory or word finding. Check baseline and periodic serum bicarbonate because metabolic acidosis can occur, and reassess persistent abnormalities. Review mood, kidney-stone risk and new visual symptoms; acute eye pain or sudden reduced vision warrants urgent assessment. Topiramate should ordinarily be withdrawn gradually, with medically necessary rapid withdrawal monitored."
    },
    {
      "heading": "Discuss topiramate reproductive risks",
      "body": "Topiramate can cause fetal harm, including oral clefts and small-for-gestational-age birth. Before an elective off-label AUD plan, discuss pregnancy potential, pregnancy plans, risks and appropriate alternatives with the prescriber. Do not present it as risk-free because the liver disease is compensated or because it also treats migraine. A patient who becomes pregnant needs prompt clinical review, including the indication and ongoing regimen; avoid unsupervised changes, especially when another indication such as epilepsy is present."
    },
    {
      "heading": "Avoid disulfiram throughout ALD",
      "body": "Disulfiram blocks alcohol metabolism at the acetaldehyde stage and causes an aversive alcohol reaction. Its label also reports severe hepatic injury, including liver failure, in patients with or without previously abnormal liver tests. ACG advises against disulfiram along any spectrum of ALD. A normal transaminase result or compensated disease does not remove that recommendation, and monitoring does not turn it into a preferred ALD option. Review safer suitable AUD options and continue integrated recovery care. FDA approval for alcohol dependence does not mean that every approved drug is appropriate for a patient with liver disease."
    }
  ],
  "check": {
    "question": "A patient taking extended-release naltrexone needs emergency pain care and proposes using extra opioid doses to overcome the blockade. What is the best response?",
    "choices": [
      "Notify the treating team about naltrexone and obtain a coordinated, monitored pain plan; do not self-escalate opioids.",
      "Increase the home opioid dose until pain stops without telling the team.",
      "Assume the injection eliminates overdose risk as it wears off.",
      "Cancel all pain care because regional and non-opioid options are unavailable."
    ],
    "rationale": "Naltrexone changes opioid response. The team should know the product and timing and coordinate analgesia, using appropriate expertise and monitoring if opioids are required. Attempts to overcome blockade can be fatal, and reduced opioid tolerance creates risk as blockade wanes. The label permits coordinated regional or non-opioid approaches; treatment does not mean abandoning pain care."
  }
};
for (const lesson of alcoholAssociatedLiverDiseaseModule.submodules) {
  if (lesson.slug === "aud-medications") {
    Object.assign(lesson, verifiedAldAudLesson.metadata);
    lesson.lesson = verifiedAldAudLesson.bodies;
    Object.assign(lesson.check, verifiedAldAudLesson.check);
  }
}
alcoholAssociatedLiverDiseaseModule.references[4] = {
  "label": "Acamprosate calcium US prescribing information: abstinence support and renal dosing.",
  "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=91769a96-3182-4e38-90c3-b22c1beae398"
};
alcoholAssociatedLiverDiseaseModule.references.push(...[
  {
    "label": "Oral naltrexone US prescribing information: opioid precautions and alcohol-dependence regimen.",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=69cb8573-08c1-4957-a768-6cd383f6a3f4"
  },
  {
    "label": "VIVITROL US prescribing information: injection, readiness and opioid safety.",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd11c435-b0f0-4bb9-ae78-60f101f3703f"
  },
  {
    "label": "Oral baclofen US prescribing information: renal, CNS and discontinuation precautions.",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1a9db542-d2b0-141a-e063-6394a90acc11"
  },
  {
    "label": "Gabapentin tablet US prescribing information: renal adjustment and respiratory precautions.",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=25cf6c40-a239-4dd0-9cad-28da84d285db"
  },
  {
    "label": "Topiramate US prescribing information: cognitive, metabolic and fetal precautions.",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2f5b1b0b-fd8a-4c4e-a85a-519ca841a0db"
  },
  {
    "label": "Disulfiram US prescribing information: alcohol reaction and hepatic injury.",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=40f5497f-fe84-43b2-8ff4-32d59edf3917"
  }
]);
