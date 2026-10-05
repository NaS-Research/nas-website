import { cirrhosisDecompensatedLiverDiseaseQuestionBank } from "@/data/questionBanks/cirrhosisDecompensatedLiverDisease";
const check=(question,choices,rationale,slug)=>({question,choices,answer:0,rationale,reviewHref:`#${slug}`});
const section=(slug,title,summary,concepts,application,lesson,keyPoints,quiz)=>({slug,title,visual:`cirrhosis-decompensated-${slug}`,summary,concepts,application,lesson:lesson.map(([heading,body])=>({heading,body})),keyPoints,check:quiz});

export const cirrhosisDecompensatedLiverDiseaseModule={
  slug:"cirrhosis-decompensated-liver-disease",number:"207",title:"Cirrhosis and Decompensated Liver Disease",
  source:"RxPrep 2023 liver disease, portal hypertension, variceal bleeding, hepatic encephalopathy, ascites, spontaneous bacterial peritonitis, and hepatorenal syndrome material, reconciled with current AASLD guidance, current AASLD educational updates, and current FDA labeling",
  description:"Connect portal hypertension to ascites, infection, kidney failure, bleeding, encephalopathy, nutrition, medication safety, surveillance, and transplant-aware care.",
  topics:["Portal hypertension","Ascites","SBP","HRS-AKI","Varices","Hepatic encephalopathy","Albumin","Terlipressin","Nutrition","Transplant referral"],
  outcomes:["Distinguish compensated from decompensated cirrhosis.","Interpret severity scores and clinical trajectory.","Diagnose and classify ascites.","Design safe ascites therapy.","Use paracentesis and albumin correctly.","Diagnose, treat, and prevent SBP.","Evaluate and treat HRS-AKI.","Prevent portal hypertensive bleeding.","Coordinate acute variceal hemorrhage care.","Diagnose and treat hepatic encephalopathy.","Protect nutrition and medication safety.","Build longitudinal surveillance and referral plans."],
  submodules:[
    section("compensation-portal","Map Function, Fibrosis, Pressure, and Decompensation","Cirrhosis is not one static state. Loss of hepatocyte function, scar architecture, portal pressure, and organ reserve create different trajectories and treatment windows.",["Hepatocyte function","Fibrosis","CSPH","Decompensation","Recompensation"],"Start every case with cause, current and prior decompensating events, portal-hypertension evidence, organ function, and trajectory.",[["Start with normal liver work","Hepatocytes process carbohydrate, lipid, protein, hormones, drugs, and bilirubin. The liver also produces albumin and clotting proteins, forms and exports bile, and supports immune clearance and nutrient storage. Cirrhosis disrupts these jobs unevenly, so no single test captures the whole organ."],["Define the states","Ascites, overt encephalopathy, and portal hypertensive bleeding define decompensation. A prior event remains clinically important even after it resolves."],["Explain portal pressure","Fibrosis and dynamic vascular tone increase resistance. Splanchnic vasodilation and collateral formation then alter effective arterial volume and systemic circulation."],["Connect the complications","Varices reflect collateral flow, ascites reflects sodium retention and pressure, HE reflects liver insufficiency and shunting, and HRS reflects severe circulatory and renal vasoconstriction."],["Treat the cause in parallel","Viral cure, alcohol abstinence, metabolic treatment, autoimmune control, and removal of hepatotoxins can slow further injury and may improve fibrosis in selected disease states. Established cirrhosis and prior complications still require surveillance and active care."]],["The liver performs many metabolic and synthetic jobs.","History defines liver state.","CSPH precedes many complications.","Etiologic control does not end surveillance."],check("Which event establishes decompensated cirrhosis?",["A prior episode of ascites","An isolated mild ALT elevation","A normal ultrasound","Successful viral cure"],"Ascites is a decompensation-defining event.","compensation-portal")),
    section("severity-assessment","Use Laboratory Patterns and Scores Without Losing the Patient","Injury markers, functional markers, Child-Pugh, MELD 3.0, symptoms, frailty, and event history answer complementary questions.",["AST and ALT","Bilirubin","Albumin and INR","Child-Pugh","MELD 3.0","Trajectory"],"Identify what each laboratory value measures, calculate scores accurately, then state what the score misses and what action the clinical trajectory requires.",[["Separate injury from function","AST and ALT primarily indicate hepatocellular injury, while alkaline phosphatase and gamma-glutamyl transferase help characterize a cholestatic pattern. Albumin, clotting factors reflected by PT or INR, and bilirubin more directly inform functional reserve, but each can also change for nonhepatic reasons."],["Trace bilirubin before interpreting it","Heme breakdown produces lipid-soluble unconjugated bilirubin that travels bound to albumin. Hepatocytes take it up, conjugate it into a water-soluble form, and excrete it into bile. Conjugated bilirubin can appear in urine when it refluxes into blood, while unconjugated bilirubin is not normally filtered by the kidney."],["Read synthetic function in context","Low albumin can reflect inflammation, kidney or gastrointestinal loss, nutrition, or dilution as well as reduced synthesis. INR can reflect liver dysfunction, vitamin K deficiency, anticoagulants, and laboratory variation. Interpret both with the clinical state and trend."],["Use Child-Pugh carefully","Child-Pugh combines laboratory and clinical variables but includes subjective ascites and encephalopathy grading. Verify whether treatment has modified those findings."],["Use MELD 3.0 correctly","MELD supports mortality and allocation discussions but depends on exact current inputs and does not fully capture refractory ascites, frailty, or recurrent HE."],["Refer from events, not score alone","Jaundice, clinically significant ascites, HRS, bleeding, HE, HCC, or repeated admission can justify transplant evaluation before an extreme score appears."]],["Enzymes and function are not interchangeable.","Bilirubin fractionation localizes part of the pathway.","Scores complement judgment.","Decompensation prompts referral."],check("Which result most directly reflects hepatocellular injury rather than liver synthetic reserve?",["ALT elevation","Falling albumin","Prolonged INR","Rising direct bilirubin"],"ALT is primarily an injury marker, while albumin and clotting factors inform synthetic function and bilirubin reflects processing and excretion.","severity-assessment")),
    section("ascites-diagnosis","Diagnose the Fluid Before Treating It","Ascites is a finding with multiple causes, and infection can be clinically silent.",["Paracentesis","SAAG","Total protein","PMN","Culture"],"Perform prompt diagnostic paracentesis for new ascites and non-elective admission with cirrhosis and ascites.",[["Collect the right sample","Send cell count with differential, albumin, total protein, and culture. Inoculate adequate fluid directly into blood-culture bottles at the bedside to improve yield."],["Calculate SAAG","Subtract ascites albumin from paired serum albumin. A value at least 1.1 g/dL strongly supports portal hypertension, while lower values prompt alternate causes."],["Detect SBP","A PMN count at least 250 cells per cubic millimeter supports treatment even with a negative culture. Symptoms may be absent or limited to AKI or encephalopathy."],["Search mixed etiologies","Cardiac disease, malignancy, tuberculosis, pancreatitis, thrombosis, and nephrotic disease can coexist with chronic liver disease and change the plan."]],["New fluid needs diagnosis.","SAAG classifies pressure context.","PMN drives SBP action.","Silent infection is common enough to test."],check("Ascites WBC is 800 with 40% PMNs. What is the PMN count?",["320 cells per cubic millimeter","200 cells per cubic millimeter","80 cells per cubic millimeter","32 cells per cubic millimeter"],"800 multiplied by 0.40 equals 320, which meets the SBP treatment threshold.","ascites-diagnosis")),
    section("ascites-treatment","Remove Sodium Without Removing Perfusion","Ascites therapy must reduce retained sodium while preserving kidney function, electrolytes, pressure, and nutrition.",["Sodium restriction","Spironolactone","Furosemide","Weight","Hyponatremia"],"Create a daily feedback loop using weight, intake, edema, pressure, kidney function, sodium, potassium, symptoms, and adherence.",[["Remove aggravators","Avoid NSAIDs and other kidney or sodium-retaining drugs. Review hidden dietary sodium, supplements, alcohol, and prescriptions at every transition."],["Use paired diuresis","A common starting relationship is spironolactone 100 mg with furosemide 40 mg. Titrate according to the individual and do not treat the ratio as a substitute for monitoring."],["Set a safe pace","Weight-loss goals depend on edema and tolerance. Excess loss, hypotension, AKI, severe hyponatremia, potassium disturbance, cramps, or HE require reassessment."],["Restrict water selectively","Routine fluid restriction is unnecessary for most ascites. Reserve it for clinically important dilutional hyponatremia according to current guidance and symptoms."]],["Stop sodium-retaining harm.","Aldosterone blockade is central.","Weight is a safety signal.","Fluid restriction is selective."],check("Which regimen best reflects typical paired diuresis?",["Spironolactone 100 mg with furosemide 40 mg, adjusted to response","Furosemide alone without monitoring","Routine water restriction for every patient","An NSAID plus loop diuretic"],"The paired regimen addresses sodium retention and potassium balance while requiring close monitoring.","ascites-treatment")),
    section("paracentesis-refractory","Escalate Refractory Ascites Safely","Repeated tense or refractory ascites changes prognosis and demands more than progressively unsafe diuretic doses.",["Large-volume paracentesis","Albumin","Refractory ascites","TIPS","Transplant"],"Relieve symptoms today while building the prevention, TIPS, transplant, and goals-of-care pathway.",[["Use paracentesis for relief","Large-volume paracentesis rapidly treats tense ascites and can be repeated when diuretics are ineffective or unsafe."],["Replace effective volume","When more than 5 L is removed, give albumin according to guidance, commonly 6 to 8 g per liter removed, to reduce circulatory dysfunction."],["Define refractory disease","Confirm sodium adherence, medication exposure, diuretic dose and response, urine sodium context, kidney function, pressure, and alternate cause before labeling failure."],["Select advanced options","TIPS may help selected patients but requires cardiac, pulmonary, liver, infection, and HE assessment. Refractory ascites should accelerate transplant evaluation."]],["Paracentesis is treatment, not failure.","Albumin protects circulation.","Confirm true refractory disease.","TIPS selection is multidimensional."],check("After removing 8 L of ascites, what protects against post-paracentesis circulatory dysfunction?",["Guidance-based intravenous albumin","An NSAID","Routine sedative therapy","Stopping all follow-up"],"Albumin is recommended after large-volume removal above the threshold.","paracentesis-refractory")),
    section("sbp","Treat Infection Before Culture Certainty","SBP can present with pain, fever, AKI, HE, shock, or no obvious symptom.",["PMN 250","Empiric antibiotic","Albumin","Resistance","Prophylaxis"],"Treat the PMN result promptly, then refine therapy using culture, source, exposure, local resistance, response, and secondary-cause evaluation.",[["Treat neutrocytic ascites","PMN at least 250 cells per cubic millimeter is sufficient for empiric treatment, including culture-negative neutrocytic ascites."],["Choose context-aware coverage","Third-generation cephalosporins remain common for community-acquired disease, but healthcare exposure and resistant-organism history can require broader empiric coverage."],["Use albumin when indicated","The classic regimen uses 1.5 g/kg on day 1 and 1 g/kg on day 3 in eligible patients to reduce renal failure and mortality."],["Prevent recurrence deliberately","SBP survivors usually need secondary prophylaxis. Primary prophylaxis is restricted to defined high-risk settings and must account for resistance and adverse effects."]],["PMN can be decisive.","Local ecology matters.","Albumin protects kidneys.","Prophylaxis is risk based."],check("What should happen when ascites PMN is 310 and culture is pending?",["Start empiric SBP therapy promptly","Wait for a positive culture","Discharge without follow-up","Give a laxative only"],"A PMN count of at least 250 supports immediate treatment.","sbp")),
    section("hrs-aki","Separate HRS-AKI From Other Kidney Injury","HRS-AKI is a circulatory kidney syndrome in advanced liver disease, not a label for every creatinine rise.",["AKI","Volume assessment","Albumin","Terlipressin","Respiratory failure"],"Exclude shock, nephrotoxins, obstruction, infection, and structural injury while initiating time-sensitive liver and kidney care.",[["Recognize creatinine limitations","Low muscle mass can mask severe kidney dysfunction. Use change from baseline, urine output, clinical context, urinalysis, sediment, imaging, and hemodynamics."],["Reverse correctable causes","Stop NSAIDs and other nephrotoxins, evaluate infection and bleeding, reassess diuretics and beta blockers, and use an albumin challenge only within the proper diagnostic pathway."],["Use terlipressin safely","Terlipressin plus albumin can reverse HRS kidney dysfunction. Baseline hypoxia, worsening respiratory symptoms, active ischemia, severe volume overload, and ACLF severity change eligibility and risk."],["Protect the transplant pathway","Monitor oxygen continuously, creatinine response, ischemia, and volume. Coordinate transplant evaluation because pharmacologic reversal does not cure the liver disease."]],["Not every AKI is HRS.","Correct precipitants first.","Terlipressin has a respiratory boxed warning.","Transplant remains definitive."],check("Which finding contraindicates starting terlipressin?",["Current hypoxia","A normal oxygen saturation","Early specialist consultation","A plan for continuous monitoring"],"Current labeling contraindicates use during hypoxia or worsening respiratory symptoms.","hrs-aki")),
    section("portal-varices","Prevent the First Bleed and Decompensation","The modern portal strategy begins with clinically significant portal hypertension, not only visible large varices.",["CSPH","Carvedilol","Propranolol","Nadolol","EVL"],"Confirm the indication, choose NSBB or endoscopic strategy, and titrate to the patient's hemodynamic window.",[["Identify CSPH","Liver stiffness, platelets, imaging, endoscopy, and prior events can establish clinically significant portal hypertension without invasive pressure measurement."],["Use NSBB deliberately","Carvedilol is often preferred in compensated CSPH because beta blockade and alpha-1 blockade lower portal pressure. Propranolol and nadolol remain important in selected contexts."],["Use endoscopy when needed","Patients who cannot take empiric NSBB need endoscopic screening and surveillance. Endoscopic variceal ligation is an alternative for selected high-risk varices."],["Reassess tolerance","Hypotension, AKI, severe infection, hyponatremia, refractory ascites, or poor perfusion may require dose reduction or temporary interruption."]],["CSPH can be noninvasive.","Carvedilol has dual portal effects.","Endoscopy remains necessary for some.","Perfusion limits dosing."],check("Which drug is often preferred for compensated cirrhosis with CSPH?",["Carvedilol","Metoprolol","Amlodipine","Hydrochlorothiazide"],"Carvedilol is a nonselective beta blocker with additional alpha-1 blockade.","portal-varices")),
    section("acute-bleeding","Run Acute Variceal Bleeding as a Protocol","Mortality falls when resuscitation, vasoactive therapy, antibiotics, endoscopy, and escalation happen in parallel.",["Airway","Restrictive transfusion","Octreotide","Ceftriaxone","Endoscopy"],"Assign each urgent action an owner and start likely-beneficial therapy before endoscopic confirmation when variceal bleeding is suspected.",[["Stabilize without overfilling","Protect airway when cognition or hematemesis threatens it. Use cautious access and a generally restrictive red-cell strategy while individualizing shock and cardiac disease."],["Start portal therapy early","Begin octreotide or another recommended vasoactive agent promptly and continue for the guidance-directed duration after control."],["Prevent infection","Short-course antibiotic prophylaxis, commonly ceftriaxone in many settings, reduces infection, rebleeding, and mortality."],["Control and escalate","Urgent endoscopic ligation is first-line for esophageal varices. High-risk patients may need preemptive TIPS, while uncontrolled bleeding requires rescue pathways."]],["Treat before confirmation when suspicion is high.","Avoid reflex overtransfusion.","Antibiotics improve survival.","TIPS timing is risk based."],check("Which bundle best treats suspected acute variceal hemorrhage?",["Resuscitation, vasoactive therapy, antibiotics, and urgent endoscopy","High-volume transfusion alone","Oral beta blocker alone","Observation until culture results"],"The acute bundle addresses perfusion, portal flow, infection, and definitive hemostasis.","acute-bleeding")),
    section("encephalopathy","Treat the Precipitant and Protect the Brain","HE is a clinical syndrome with many mimics and triggers. A laboratory ammonia value cannot replace examination.",["West Haven","Precipitant","Lactulose","Rifaximin","Ammonia"],"Stabilize the patient, exclude dangerous mimics, reverse the trigger, then titrate therapy without causing dehydration.",[["Diagnose clinically","Assess baseline cognition, timing, medications, focal findings, glucose, infection, bleeding, kidney function, electrolytes, constipation, and substance exposure."],["Use lactulose to response","Treat overt HE with lactulose and then titrate to about 2 to 3 soft bowel movements daily. Route depends on airway and gastrointestinal access."],["Add rifaximin for recurrence","Rifaximin 550 mg twice daily is labeled to reduce recurrence in adults and is commonly added to lactulose after recurrent overt HE."],["Do not chase ammonia","A normal ammonia value may prompt reconsideration, but serial levels do not reliably grade HE or direct dose escalation. Follow cognition, function, stool, hydration, and the precipitant."]],["HE is clinical.","Find the trigger.","Lactulose is titrated, not maximized blindly.","Rifaximin prevents recurrence."],check("A patient on lactulose has eight watery stools and rising sodium. What is the best response?",["Reduce excess catharsis and reassess hydration, electrolytes, cognition, and precipitant","Increase lactulose automatically","Chase the ammonia result only","Stop all evaluation"],"Excess diarrhea can precipitate dehydration and recurrent HE.","encephalopathy")),
    section("longitudinal-care","Protect Muscle, Medicines, and Surveillance","Survival and function depend on nutrition, medication stewardship, prevention, HCC surveillance, and reliable access.",["Protein","Sarcopenia","NSAIDs","HCC","Vaccines"],"Turn every outpatient visit into a review of muscle, food, medication, fluid, cognition, bleeding, cancer, infection, and referral risk.",[["Feed the patient","Avoid routine protein restriction. Many adults need about 1.2 to 1.5 g/kg/day protein, adequate energy, vegetable or dairy sources when helpful, and a late-evening snack to reduce fasting."],["Deprescribe harm","Avoid NSAIDs, minimize benzodiazepines and sedatives, adjust renally and hepatically cleared drugs, and inspect supplements and hidden sodium."],["Continue prevention","Use ultrasound with AFP about every six months when indicated, current vaccination guidance, bone and micronutrient assessment, and alcohol and metabolic care."],["Teach the escalation signs","New confusion, bleeding, fever, reduced urine, rapid weight gain, dyspnea, severe diarrhea, jaundice, or medication interruption requires prompt action."],["Address alcohol-associated malnutrition","Alcohol cessation and adequate nutrition belong in the same plan. Review vitamin and trace-mineral needs, including thiamine, folate, pyridoxine, vitamins A and D, and zinc. Thiamine deficiency can cause Wernicke\u2019s encephalopathy or Korsakoff syndrome; thiamine is used to prevent and treat these complications."]],["Protein restriction is outdated.","Muscle is metabolic reserve.","Medication review prevents decompensation.","Surveillance continues after etiologic control."],check("Which nutrition plan is most appropriate for many adults with cirrhosis?",["Adequate calories and roughly 1.2 to 1.5 g/kg/day protein with minimized fasting","Routine severe protein restriction","Prolonged fasting","Sodium-rich processed food"],"Adequate protein protects muscle and is not routinely restricted for HE.","longitudinal-care")),
    section("integrated-case","Build a Closed-Loop Cirrhosis Plan","Every complication changes the safety of the others. The plan must link acute stabilization to prevention and definitive care.",["Precipitant","Hemodynamics","Recurrence","Surveillance","Transplant"],"Document what happens now, what is stopped, what is monitored, who owns each result, and what triggers escalation.",[["Name the liver state","Record cause, compensation history, Child-Pugh and MELD context, frailty, portal evidence, HCC status, transplant status, and goals."],["Map active complications","For ascites, SBP, AKI, HE, and bleeding, identify precipitant, exact treatment, response criteria, toxicity, and recurrence prevention."],["Protect transitions","Reconcile every drug, secure lactulose, rifaximin, diuretics, prophylaxis, or antiviral supply, and provide written weight, stool, pressure, and symptom actions."],["Close the loop","Schedule liver clinic, laboratory review, imaging, endoscopy when needed, nutrition, vaccines, transplant evaluation, and palliative support with named ownership."]],["One event can trigger another.","Every treatment needs a safety endpoint.","Transitions are high risk.","Referral and symptom care can coexist."],check("Which discharge plan is strongest after HE with ascites and AKI?",["A precipitant plan, titrated medicines, safety monitoring, recurrence prevention, surveillance, and transplant-aware follow-up","A medication list without dates","An ammonia recheck alone","No follow-up after mental status improves"],"Closed-loop care links the acute event to prevention, monitoring, and definitive liver planning.","integrated-case")),
  ],
  references:[
    {label:"AASLD Ascites, SBP, and HRS Practice Guidance",href:"https://www.aasld.org/practice-guidelines/diagnosis-evaluation-and-management-ascites-spontaneous-bacterial-peritonitis"},
    {label:"AASLD Outpatient Management of Cirrhosis",href:"https://www.aasld.org/liver-fellow-network/core-series/back-basics/back-basics-outpatient-management-cirrhosis"},
    {label:"AASLD Timing of Diagnostic Paracentesis",href:"https://www.aasld.org/liver-fellow-network/core-series/why-series/why-timing-matters-paracentesis-admission-cirrhosis"},
    {label:"AASLD Hepatic Encephalopathy Guidance",href:"https://www.aasld.org/sites/default/files/2022-07/Hepatic%20Encephalopathy%20in%20Chronic%20Liver%20Disease%202014.pdf"},
    {label:"Current TERLIVAZ Prescribing Information",href:"https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/022231s004lbl.pdf"},
    {label:"Current XIFAXAN Prescribing Information",href:"https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/021361s031lbl.pdf"},
  ],
  disclaimer:"This module supports advanced education about cirrhosis and its complications. It reconciles a 2023 course source with current AASLD materials and current FDA labeling. The formal AASLD hepatic encephalopathy guideline is from 2014, so current clinical updates and labeling are identified separately. Patient care requires current guidance, local resistance data, specialist consultation, and patient-specific evidence.",
  questionBank:cirrhosisDecompensatedLiverDiseaseQuestionBank,
};

// Reconcile the complete nutrition body and embedded assessment.
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "longitudinal-care").lesson.find((body) => body.heading === "Feed the patient"), {
  "heading": "Feed the patient",
  "body": "Avoid routine protein restriction for hepatic encephalopathy. For clinically stable adults with cirrhosis, AASLD recommends 1.2 to 1.5 g/kg ideal body weight/day protein alongside adequate energy; assess the weight basis rather than using an ascites-increased scale weight indiscriminately. Encourage varied protein sources, including vegetable and dairy options, and reduce prolonged fasting with an individualized late-evening snack. Review muscle loss, actual intake, food access, sodium-related palatability, alcohol, micronutrient risks and barriers to safe eating with the nutrition team. Swallowing symptoms require appropriate assessment. Obesity does not exclude malnutrition; these stable-adult targets are not a universal prescription for children or critical illness."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "longitudinal-care").check, {
  "question": "Which nutrition plan is most appropriate for many adults with cirrhosis?",
  "choices": [
    "Adequate energy and roughly 1.2 to 1.5 g/kg ideal body weight/day protein in stable adults, with minimized fasting",
    "Severe protein restriction whenever hepatic encephalopathy is present",
    "Long overnight fasting despite inadequate daytime intake",
    "Vitamin supplementation in place of adequate calories and protein"
  ],
  "answer": 0,
  "rationale": "For clinically stable adults, identify the weight basis and preserve adequate protein and energy. Routine restriction can worsen muscle loss; shorter fasting and individualized snacks support intake. Vitamins do not replace calories or protein.",
  "reviewHref": "#longitudinal-care"
});
cirrhosisDecompensatedLiverDiseaseModule.references.push(...[
  {
    "label": "AASLD 2021: Malnutrition, frailty and sarcopenia",
    "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9134787/"
  },
  {
    "label": "ACG 2025: Nutrition in liver disease",
    "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12191863/"
  },
  {
    "label": "ESPEN 2021: Nutrition and swallowing assessment",
    "href": "https://www.espen.org/files/ESPEN-Guidelines/ESPEN_guideline_on_hospital_nutrition.pdf"
  }
]);

// Reconcile longitudinal medication stewardship, prevention and escalation teaching.
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "longitudinal-care").lesson.find((body) => body.heading === "Deprescribe harm"), {
  "heading": "Deprescribe harm",
  "body": "Avoid systemic NSAIDs because they can worsen kidney function, bleeding and ascites. Review benzodiazepines and other sedatives, nephrotoxins, supplements, sodium-containing products and each medicine’s current renal and hepatic dosing guidance with the treating team. Chronic benzodiazepines are generally avoided in decompensated cirrhosis, although selected indications require individualized care. Do not stop essential medicines indiscriminately. An elevated INR from cirrhosis does not establish protection from thrombosis or measure bleeding risk by itself: both procoagulant and anticoagulant factors change."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "longitudinal-care").lesson.find((body) => body.heading === "Continue prevention"), {
  "heading": "Continue prevention",
  "body": "For patients with cirrhosis who could benefit from HCC treatment, AASLD recommends ultrasound plus AFP about every six months. Continue indicated surveillance after HCV cure or other etiologic control; AFP alone does not replace imaging. Child-Pugh C patients generally require transplant eligibility for surveillance, and life-limiting comorbidities can make surveillance inappropriate. Coordinate specialist review of inadequate imaging or abnormal findings. Review current vaccination indications and prior doses, bone and micronutrient health, variceal prevention, alcohol cessation and metabolic care rather than treating a normal liver-enzyme result as resolution of risk."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "longitudinal-care").lesson.find((body) => body.heading === "Teach the escalation signs"), {
  "heading": "Teach the escalation signs",
  "body": "Give the patient and caregiver an explicit contact and emergency plan. Vomiting blood, black tarry stools, new marked confusion or inappropriate sleepiness, and fever or severe new abdominal pain with ascites require emergency assessment. Promptly report reduced urine, rapid weight gain, worsening dyspnea, jaundice, severe diarrhea or interrupted medicines; severity and the agreed plan determine urgency. Excess lactulose-related diarrhea can cause dehydration and worsen encephalopathy. Review adherence and prescribed adjustments with the team instead of assuming that more diarrhea means better treatment."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "longitudinal-care"), {
  "summary": "Longitudinal care links nutrition, medication stewardship, prevention, indicated HCC surveillance, and reliable access.",
  "keyPoints": [
    "Do not routinely restrict protein for hepatic encephalopathy.",
    "Muscle supports nutritional and metabolic reserve.",
    "Medication review can reduce avoidable harm.",
    "Continue indicated surveillance after etiologic control."
  ]
});
cirrhosisDecompensatedLiverDiseaseModule.references.push(...[
  {
    "label": "AASLD 2023: HCC surveillance guidance",
    "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10663390/"
  },
  {
    "label": "AASLD 2022: Symptom and medication safety",
    "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9942270/"
  },
  {
    "label": "AASLD 2024: INR and bleeding-risk assessment",
    "href": "https://www.aasld.org/liver-fellow-network/core-series/clinical-pearls/peri-procedural-management-bleeding-risk-cirrhosis"
  },
  {
    "label": "AASLD 2024: Coagulation in cirrhosis",
    "href": "https://www.aasld.org/liver-fellow-network/core-series/back-basics/back-basics-conundrum-coagulopathy-cirrhosis"
  },
  {
    "label": "CDC: Adult vaccination indications",
    "href": "https://www.cdc.gov/vaccines/hcp/imz-schedules/adult-notes.html"
  },
  {
    "label": "Michigan Medicine 2022: Cirrhosis toolkit",
    "href": "https://www.uofmhealth.org/sites/default/files/2025-05/CirrhosisToolkit.pdf"
  }
]);

// Reconcile compensation, portal mechanisms and severity assessment.
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "compensation-portal").lesson.find((body) => body.heading === "Start with normal liver work"), {
  "body": "The liver makes albumin, procoagulant and anticoagulant proteins, and bile; processes medicines and metabolic waste; and helps regulate and store nutrients and energy. Cirrhosis replaces normal architecture with fibrosis and disrupts these functions unevenly. Albumin synthesis, bilirubin excretion, hepatocyte injury and portal pressure require different assessments; no single blood test describes the entire organ."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "compensation-portal").lesson.find((body) => body.heading === "Define the states"), {
  "body": "Compensated cirrhosis has not yet produced a decompensating event. Cirrhosis-related ascites, overt hepatic encephalopathy or variceal hemorrhage marks decompensation. Varices without bleeding can occur during compensation. Record the prior event and the current clinical state: resolution on medicines does not by itself establish recompensation, and historical severity alone does not describe the current trajectory."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "compensation-portal").lesson.find((body) => body.heading === "Explain portal pressure"), {
  "body": "Fibrosis and increased intrahepatic vascular tone resist portal flow. Collateral vessels develop, while splanchnic vasodilation lowers effective arterial filling despite excess total-body fluid. Neurohormonal responses promote sodium and water retention. Systemic blood pressure measures a different circulation and cannot rule out portal hypertension."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "compensation-portal").lesson.find((body) => body.heading === "Connect the complications"), {
  "body": "Collateral flow produces gastroesophageal varices; rupture can cause life-threatening bleeding. Portal pressure and sodium retention contribute to ascites. Liver insufficiency and portosystemic shunting contribute to encephalopathy. Severe circulatory dysfunction can reduce kidney perfusion and lead to HRS-AKI. These mechanisms interact; a new complication requires evaluation rather than attribution to one laboratory value."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "compensation-portal").lesson.find((body) => body.heading === "Treat the cause in parallel"), {
  "body": "Treat the underlying disease while managing its complications. HCV cure, sustained HBV suppression and sustained alcohol abstinence can improve the course, although the degree of recovery varies. Address metabolic disease, autoimmune disease and hepatotoxic exposures as appropriate. Improvement does not automatically remove residual portal or cancer risk; continue prevention and surveillance according to the current specialist assessment."
});
cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "compensation-portal").lesson.push(...[
  {
    "heading": "Recognize and confirm liver disease",
    "body": "Fatigue, appetite loss, nausea, right-upper-quadrant discomfort, jaundice, dark urine or pale stools can prompt investigation but do not individually diagnose cirrhosis. Combine history, examination, laboratory patterns and imaging, including elastography when appropriate. Biopsy can resolve uncertain diagnosis or cause; it is not mandatory in every patient. Identify viral, alcohol, metabolic, autoimmune and medicine-related causes."
  },
  {
    "heading": "Establish portal-hypertension evidence",
    "body": "In viral or alcohol-related cirrhosis, a hepatic venous pressure gradient (HVPG) of at least 10 mmHg defines clinically significant portal hypertension. Validated noninvasive assessment also uses transient elastography and platelets, with imaging or endoscopic evidence as appropriate. Thresholds depend on method, etiology and patient population; a generic stiffness cutoff is not universal. Varices and portosystemic collaterals are important evidence even when systemic pressure is normal."
  },
  {
    "heading": "Assess recompensation explicitly",
    "body": "Baveno VII defines recompensation by expert consensus: control of the primary cause; ascites resolved off diuretics and encephalopathy resolved off lactulose/rifaximin, with no recurrent variceal hemorrhage for at least 12 months; and sustained improvement in albumin, INR and bilirubin. Symptom control alone is insufficient. Portal hypertension can persist after recompensation. Recovery alone is not a reason to stop nonselective beta blockers while clinically significant portal hypertension persists; reassess safety and tolerance with the treating team."
  }
]);
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "compensation-portal"), {
  "keyPoints": [
    "Assess liver function and portal pressure separately.",
    "Record both prior decompensation and the current state.",
    "Systemic pressure does not exclude portal hypertension.",
    "Recompensation requires more than symptom control."
  ]
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "compensation-portal").check, {
  "rationale": "Cirrhosis-related ascites establishes a history of decompensation. A mild ALT elevation, normal ultrasound or viral cure does not do so. Record the history and current state; later recompensation requires explicit criteria rather than symptom improvement alone."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "severity-assessment").lesson.find((body) => body.heading === "Separate injury from function"), {
  "body": "ALT and AST primarily reflect hepatocellular injury, not remaining synthetic reserve. AST also has extrahepatic sources. ALP and GGT help identify a cholestatic pattern; an isolated ALP rise may originate in bone, so clarify the source. Albumin and PT/INR inform synthesis, while bilirubin reflects processing and excretion. Interpret the pattern and trend with symptoms, medicines and competing causes; enzyme height alone does not measure severity."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "severity-assessment").lesson.find((body) => body.heading === "Trace bilirubin before interpreting it"), {
  "body": "Heme breakdown produces water-insoluble unconjugated bilirubin, transported mainly bound to albumin. The liver conjugates it into a water-soluble form for biliary excretion. Conjugated bilirubin in blood can appear in urine; unconjugated bilirubin is not normally excreted in urine. Hemolysis or impaired uptake/conjugation can raise the indirect fraction. Impaired hepatic excretion or biliary obstruction can raise the direct fraction. Fractionate an isolated elevation; dark urine and pale stools help guide further assessment."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "severity-assessment").lesson.find((body) => body.heading === "Read synthetic function in context"), {
  "body": "Low albumin can reflect reduced liver synthesis, inflammation, malnutrition, protein loss or fluid dilution. A prolonged INR can reflect liver disease, vitamin K deficiency, anticoagulants or other coagulation disorders. Review these causes and the trajectory before assigning the result to cirrhosis. Cirrhosis changes both clotting and anticlotting proteins; INR alone neither measures bleeding risk nor establishes protection from thrombosis."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "severity-assessment").lesson.find((body) => body.heading === "Use Child-Pugh carefully"), {
  "body": "Child-Pugh assigns 1 to 3 points to each of five components: bilirubin, albumin, PT prolongation or INR, ascites and encephalopathy. Use one validated version and do not count PT and INR twice. Total scores are 5 to 15: class A is 5 to 6, B is 7 to 9 and C is 10 to 15. Clinical grading is partly subjective and treatment-dependent. Drug decisions require the medicine\u2019s own current hepatic-impairment instructions, not an automatic dose reduction for every drug."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "severity-assessment").lesson.find((body) => body.heading === "Use MELD 3.0 correctly"), {
  "body": "Use the current OPTN calculator for allocation-related MELD. It requires bilirubin and creatinine in mg/dL, INR, sodium in mEq/L, albumin in g/dL, age at registration and sex for adult registration. Confirm recent dialysis and the applicable age formula. OPTN applies input limits and dialysis rules, then rounds the calculated score within 6 to 40. MELD estimates mortality risk and informs allocation; it does not fully describe symptoms, recurrent complications or nutritional and functional burden."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "severity-assessment").lesson.find((body) => body.heading === "Refer from events, not score alone"), {
  "body": "Decompensation should prompt timely hepatology and transplant consideration, including clinically significant ascites, encephalopathy or variceal bleeding. Review HRS-AKI, jaundice, HCC, recurrent admissions and functional decline as part of the trajectory. Evaluation is not guaranteed listing. Stabilize urgent bleeding, infection, encephalopathy and kidney injury while referral proceeds; do not await an extreme MELD score."
});
cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "severity-assessment").lesson.push(...[
  {
    "heading": "Work a Child-Pugh example",
    "body": "Using the standard INR-based table, bilirubin 2.5 mg/dL earns 2 points, albumin 3.0 g/dL earns 2, INR 1.8 earns 2, mild diuretic-responsive ascites earns 2 and absent encephalopathy earns 1. The total is 2 + 2 + 2 + 2 + 1 = 9, class B. The laboratory middle bands are bilirubin 2 to 3, albumin 2.8 to 3.5 and INR 1.7 to 2.3 in these units. Specify the ascites and encephalopathy grades rather than inferring them from a lab value."
  },
  {
    "heading": "Pair definitive planning with symptom care",
    "body": "Palliative care can begin alongside disease-directed treatment and transplant evaluation. Address symptoms, psychosocial needs, caregiver burden and the patient\u2019s goals; it is not synonymous with hospice or withdrawal of treatment. Discuss and document preferences and a surrogate decision maker, and revisit them as illness changes. Coordinate support for treatment access and follow-up rather than assuming a referral alone closes the loop."
  }
]);
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "severity-assessment"), {
  "keyPoints": [
    "Injury, synthesis and excretion are different measurements.",
    "Child-Pugh scores run from 5 to 15.",
    "Use current MELD inputs, units and dialysis rules.",
    "Referral and symptom care can proceed together."
  ]
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "severity-assessment").check, {
  "rationale": "ALT primarily reflects hepatocellular injury. Albumin and clotting-factor production reflected by INR provide information about synthesis; bilirubin reflects processing and excretion. Each result still requires clinical context and assessment of other causes."
});
cirrhosisDecompensatedLiverDiseaseModule.references.push(...[
  {
    "label": "Baveno VII 2022: Portal hypertension and recompensation",
    "href": "https://apef.com.pt/wp-content/uploads/2021/07/PIIS0168827821022996.pdf"
  },
  {
    "label": "NIDDK 2023: Diagnosis of cirrhosis",
    "href": "https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis/diagnosis"
  },
  {
    "label": "NIDDK 2023: Treating cirrhosis and its causes",
    "href": "https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis/treatment"
  },
  {
    "label": "AASLD 2025: Interpreting liver enzymes",
    "href": "https://www.aasld.org/liver-fellow-network/core-series/back-basics/how-approach-elevated-liver-enzymes"
  },
  {
    "label": "Merck Manual 2025: Liver tests and bilirubin",
    "href": "https://www.merckmanuals.com/professional/hepatic-and-biliary-disorders/testing-for-hepatic-and-biliary-disorders/laboratory-tests-of-the-liver-and-gallbladder"
  },
  {
    "label": "University of Washington: Child-Pugh calculator",
    "href": "https://www.hepatitisc.uw.edu/page/clinical-calculators/ctp"
  },
  {
    "label": "HRSA/OPTN: Current MELD calculator",
    "href": "https://www.hrsa.gov/optn/data-calculators/allocation-calculators/meld-calculator"
  },
  {
    "label": "OPTN policies, October 1, 2026: MELD section 9.1.D",
    "href": "https://www.hrsa.gov/sites/default/files/hrsa/optn/optn_policies.pdf"
  }
]);

// Reconcile the complete ascites diagnosis lesson and its initial/recurrent test distinctions.
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "ascites-diagnosis").lesson.find((body) => body.heading === "Collect the right sample"), {
  "body": "For an initial diagnostic tap, obtain an ascitic cell count with differential, albumin and total protein, plus a paired serum albumin. For hospitalized patients or suspected infection, send an ascitic culture: inoculate fluid into aerobic and anaerobic blood-culture bottles at the bedside before antibiotics when feasible. The PMN count guides immediate infection management; culture identifies organisms and helps tailor therapy. Do not delay urgent antibiotics in an unstable patient while waiting for a procedure or culture result."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "ascites-diagnosis").lesson.find((body) => body.heading === "Calculate SAAG"), {
  "body": "The serum-ascites albumin gradient (SAAG) equals serum albumin minus ascitic albumin from samples obtained together. Use matching units. A SAAG of at least 1.1 g/dL supports portal hypertension; it does not prove cirrhosis or exclude a second cause. For serum albumin 3.1 g/dL and ascitic albumin 1.3 g/dL, SAAG = 1.8 g/dL. A result of 11 g/L equals 1.1 g/dL and meets the same threshold. A lower gradient prompts evaluation for other causes, such as peritoneal malignancy or tuberculosis."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "ascites-diagnosis").lesson.find((body) => body.heading === "Detect SBP"), {
  "body": "An ascitic absolute polymorphonuclear leukocyte (PMN) count of at least 250 cells/mm³ should prompt empiric treatment for spontaneous bacterial peritonitis (SBP) when there is no identifiable intra-abdominal source requiring separate treatment. A negative culture does not cancel an elevated PMN count. Fever and pain can be absent; acute kidney injury or encephalopathy may be the presenting change. Guarding, polymicrobial culture or an atypical course should raise concern for secondary peritonitis and prompt investigation of an intra-abdominal source."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "ascites-diagnosis").lesson.find((body) => body.heading === "Search mixed etiologies"), {
  "body": "Interpret SAAG together with ascitic total protein, history, examination and imaging. With a high SAAG, protein below 2.5 g/dL commonly fits cirrhosis, whereas protein at least 2.5 g/dL should prompt consideration of cardiac or other postsinusoidal disease. These patterns are clues, not definitive diagnoses. Heart failure, malignancy, tuberculosis, pancreatic disease, vascular thrombosis or nephrotic disease can coexist with liver disease. Order targeted testing, such as cytology or amylase, when the clinical context supports it."
});
cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "ascites-diagnosis").lesson.push(...[
  {
    "heading": "Decide when to sample",
    "body": "Ascites is fluid in the peritoneal cavity. Evaluate new-onset ascites that is accessible for sampling with diagnostic paracentesis. Patients with cirrhosis and ascites admitted non-electively also need prompt diagnostic sampling, even when the admission is for an unrelated problem and there is no fever or abdominal pain. New deterioration or suspected infection warrants reassessment. A therapeutic tap removes fluid for symptom relief; the decision to drain a large volume does not replace the need for diagnostic fluid testing."
  },
  {
    "heading": "Match testing to the setting",
    "body": "An initial evaluation also includes history, examination, liver and kidney tests, electrolytes and abdominal ultrasound with Doppler as appropriate. For stable recurrent ascites undergoing routine outpatient therapeutic taps, a cell count with differential remains important, but SAAG and the entire initial panel need not be repeated automatically. Hospital admission or suspected infection calls for cell count and culture. Repeat or extend other tests when the cause is uncertain, prophylaxis decisions require protein measurement or secondary peritonitis is suspected."
  },
  {
    "heading": "Calculate the absolute PMN count",
    "body": "When the laboratory reports total ascitic leukocytes and a PMN percentage, multiply the count by the percentage as a decimal. For 800 cells/mm³ with 40% PMNs, 800 × 0.40 = 320 PMNs/mm³. For 1,000 cells/mm³ with 25% PMNs, the result is exactly 250 PMNs/mm³ and meets the treatment threshold. One mm³ equals one microliter, so cells/mm³ and cells/µL express the same concentration. Use the absolute PMN count, not total leukocytes alone, to interpret the threshold."
  }
]);
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "ascites-diagnosis"), {
  "summary": "Diagnostic paracentesis separates the cause of ascites from the urgent question of infection.",
  "concepts": [
    "Sampling indications",
    "Paired SAAG",
    "Ascitic protein",
    "Absolute PMN count",
    "Bedside culture"
  ],
  "application": "Arrange prompt diagnostic sampling for accessible new ascites or non-elective admission with cirrhosis and ascites; interpret paired albumin, PMNs and indicated cultures before choosing the treatment pathway.",
  "keyPoints": [
    "New ascites and non-elective admission require diagnostic assessment.",
    "SAAG ≥1.1 g/dL supports portal hypertension, including cardiac causes.",
    "Absolute PMNs ≥250 cells/mm³ prompt empiric treatment when no secondary source is identified.",
    "A negative culture or absence of fever does not exclude SBP.",
    "Recurrent outpatient taps and initial diagnostic taps require different test panels."
  ]
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "ascites-diagnosis").check, {
  "question": "Ascitic leukocytes are 1,000 cells/mm³ with 25% PMNs. There is no identifiable secondary intra-abdominal source. Which interpretation is correct?",
  "choices": [
    "250 PMNs/mm³; the count meets the threshold for empiric SBP treatment.",
    "25 PMNs/mm³; the count is below the threshold for SBP treatment.",
    "1,000 PMNs/mm³; all leukocytes should be counted as neutrophils.",
    "250 PMNs/mm³; treatment requires a count strictly greater than 250."
  ],
  "rationale": "1,000 × 0.25 = 250 PMNs/mm³. The inclusive threshold is ≥250, so this result supports empiric SBP treatment in the stated setting. Culture results guide later tailoring but are not required to begin treatment."
});
cirrhosisDecompensatedLiverDiseaseModule.references.push(...[
  {
    "label": "AASLD 2021: Ascites diagnostic tables and guidance",
    "href": "https://onlinelibrary.wiley.com/doi/full/10.1002/hep.31884"
  },
  {
    "label": "University of Washington: Ascites diagnosis and fluid analysis",
    "href": "https://www.hepatitisc.uw.edu/go/management-cirrhosis-related-complications/ascites-diagnosis-management/core-concept/1/1/"
  }
]);

// Reconcile complete ascites treatment and paracentesis lessons with formulation and total-volume distinctions.
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "ascites-treatment").lesson.find((body) => body.heading === "Remove aggravators"), {
  "body": "Ascites reflects portal hypertension, vasodilation and neurohormonal sodium retention; visible fluid excess can coexist with reduced effective arterial volume. Avoid NSAIDs, which promote sodium retention and kidney injury. Review ACE inhibitors, ARBs and other drugs that can worsen perfusion, as well as supplements, alcohol and hidden dietary sodium. Reconcile prescribed and nonprescribed drugs before increasing diuretics."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "ascites-treatment").lesson.find((body) => body.heading === "Use paired diuresis"), {
  "body": "A common initial tablet regimen is spironolactone 100 mg/day with furosemide 40 mg/day. Aldosterone blockade alone may suffice for a first episode; longstanding ascites often responds better to the combination. If both drugs are increased while preserving the 100:40 relationship, 200 mg/day pairs with 80 mg/day. Titrate to response and tolerance, not the ratio alone. Guidance uses conventional ascites ceilings of spironolactone 400 mg/day and furosemide 160 mg/day; these are not mandatory targets. Allow at least 72 hours between spironolactone dose increases to assess its delayed effect."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "ascites-treatment").lesson.find((body) => body.heading === "Set a safe pace"), {
  "body": "Measure weight daily at the same time and assess edema, blood pressure, symptoms, kidney function, sodium and potassium. Without peripheral edema, limit weight loss to about 0.5 kg/day; with peripheral edema, up to 1 kg/day may be tolerated if circulation, kidneys and electrolytes remain stable. A loss of 0.8 kg/day without edema exceeds the usual safety limit. Hypotension, AKI, important sodium or potassium disturbances, severe cramps or worsening encephalopathy require prompt reassessment and possible dose reduction or interruption. Once ascites is controlled, taper to the lowest effective doses."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "ascites-treatment").lesson.find((body) => body.heading === "Restrict water selectively"), {
  "body": "Routine fluid restriction is unnecessary when ascites is accompanied by normal serum sodium. Consider it for dilutional, hypervolemic hyponatremia, particularly at serum sodium ≤125 mmol/L, with the volume target and other treatment individualized to severity and symptoms. Low sodium from excessive diuresis with hypovolemia instead calls for stopping the cause and restoring volume under clinical supervision. Severe or symptomatic hyponatremia requires urgent assessment and controlled correction; do not automatically prescribe the same water limit for every low sodium result."
});
cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "ascites-treatment").lesson.push(...[
  {
    "heading": "Balance sodium and nutrition",
    "body": "Aim for moderate sodium restriction of about 2 g/day, with practical advice on prepared foods, added salt and label reading. Preserve adequate calories and protein; an excessively unpalatable diet can worsen intake and malnutrition. A dietitian can help make sodium restriction achievable. Sodium restriction targets retained sodium, whereas fluid restriction targets selected hyponatremia; they are not interchangeable instructions."
  },
  {
    "heading": "Distinguish the suspension",
    "body": "CaroSpir oral suspension contains 25 mg/5 mL, or 5 mg/mL, and is not therapeutically equivalent to Aldactone tablets. Its label recommends an initial daily dose of 75 mg (15 mL) for edema associated with hepatic cirrhosis, initiated in a hospital setting and titrated slowly. If it is the sole diuretic, allow at least five days before increasing the dose. Use another formulation if more than 100 mg is required. Take it consistently with respect to food; do not copy the tablet dose schedule into a suspension order."
  },
  {
    "heading": "Make monitoring actionable",
    "body": "Check sodium, potassium and kidney function regularly, especially early in treatment and after changes. The CaroSpir label calls for potassium measurement within one week of initiation or titration and regularly thereafter, with closer monitoring for impaired renal function or interacting drugs. Hyperkalemia requires dose reduction or discontinuation and treatment. Avoid potassium supplements and potassium-containing salt substitutes unless specifically directed. CaroSpir is contraindicated with hyperkalemia, Addison disease or concomitant eplerenone. Spironolactone can cause gynecomastia; report troublesome effects so the regimen can be reassessed."
  }
]);
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "ascites-treatment"), {
  "summary": "Reduce retained sodium while protecting perfusion, electrolytes and nutrition; match the diuretic plan to the patient and formulation.",
  "concepts": [
    "Sodium and nutrition",
    "Tablet diuresis",
    "Weight-loss limits",
    "Selective fluid restriction",
    "CaroSpir dosing"
  ],
  "application": "Use daily weight and edema with blood pressure, kidney function, sodium, potassium and medication review to adjust treatment safely; verify the formulation before prescribing.",
  "keyPoints": [
    "Aim for about 2 g/day of sodium while preserving nutrition.",
    "A common tablet pair is spironolactone 100 mg/day and furosemide 40 mg/day.",
    "Weight-loss limits differ with and without peripheral edema.",
    "Fluid restriction depends on hyponatremia and volume status.",
    "CaroSpir has distinct dosing and monitoring instructions."
  ]
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "ascites-treatment").check, {
  "question": "A patient without peripheral edema loses 0.8 kg/day on diuretics and develops dizziness with rising creatinine. What is the best next step?",
  "choices": [
    "Promptly reassess volume and kidney function and reduce or interrupt diuretics as indicated.",
    "Continue unchanged because any weight loss confirms safe ascites treatment.",
    "Increase both diuretics until their maximum doses are reached.",
    "Add routine severe water restriction without assessing sodium or volume status."
  ],
  "rationale": "Without peripheral edema, usual weight loss should not exceed about 0.5 kg/day. Dizziness and rising creatinine add concern for volume contraction and kidney injury. The regimen requires reassessment; a fixed dose ratio or visible fluid excess does not establish adequate perfusion."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "paracentesis-refractory").lesson.find((body) => body.heading === "Use paracentesis for relief"), {
  "body": "Large-volume paracentesis with indicated albumin is the initial treatment for tense, grade 3 ascites and first-line symptom relief for refractory ascites. It need not wait for an unsafe trial of maximum diuretics. Diagnostic fluid testing remains a separate requirement when indicated; symptom relief does not exclude infection. Repeated taps may be appropriate when diuretics are ineffective or poorly tolerated, while a longer-term plan addresses recurrence."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "paracentesis-refractory").lesson.find((body) => body.heading === "Replace effective volume"), {
  "body": "When more than 5 L of ascites is removed, administer intravenous albumin at 6 to 8 g for every liter of the total volume removed to reduce post-paracentesis circulatory dysfunction. Five liters is the usual trigger for replacement, not an amount to subtract before calculating the dose. Circulatory dysfunction can lead to renal impairment and dilutional hyponatremia. For smaller-volume taps, albumin may still be appropriate with hypotension, AKI or hyponatremia; the threshold does not replace individual risk assessment."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "paracentesis-refractory").lesson.find((body) => body.heading === "Define refractory disease"), {
  "body": "Refractory ascites cannot be adequately mobilized, or recurs early after drainage despite medical therapy. Distinguish diuretic-resistant disease, with inadequate response despite appropriate sodium restriction and tolerated treatment, from diuretic-intractable disease, in which adverse effects prevent effective dosing. Confirm sodium exposure, medication use, dose and response, kidney function, blood pressure and competing causes. Urine sodium can help assess sodium balance, but interpret it with intake, renal function and collection quality. Do not force maximum doses through hypotension, AKI or severe electrolyte abnormalities."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "paracentesis-refractory").lesson.find((body) => body.heading === "Select advanced options"), {
  "body": "A transjugular intrahepatic portosystemic shunt (TIPS) reduces portal pressure and can improve ascites control in carefully selected patients. Assess liver severity, cardiac function, pulmonary pressures, infection, encephalopathy risk and support for follow-up. Severe heart failure, severe untreated valvular disease, moderate or severe pulmonary hypertension despite optimization, uncontrolled systemic infection or refractory overt encephalopathy can preclude elective TIPS. Use multidisciplinary assessment rather than one absolute MELD cutoff. Refractory ascites should prompt liver-transplant referral; symptom relief is not a reason to defer evaluation."
});
cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "paracentesis-refractory").lesson.push(...[
  {
    "heading": "Calculate albumin from the total",
    "body": "For a tap removing 8 L, the 6 to 8 g/L recommendation gives 8 × 6 = 48 g to 8 × 8 = 64 g of albumin. Calculating only the 3 L above the 5 L trigger would give 18 to 24 g and underdose this regimen. Specify grams in the order and use the selected product concentration to determine the infusion volume. The 6 to 8 g/L recommendation is based on expert guidance; it is not a precisely established dose-response optimum for every patient."
  },
  {
    "heading": "Assess procedure safety",
    "body": "For paracentesis, an elevated INR or low platelet count from cirrhosis alone does not routinely require prophylactic plasma or platelet transfusion. These findings are not automatic contraindications to a needed tap. Evaluate actual bleeding risk and special situations such as disseminated intravascular coagulation or uremia with thrombocytopenia with the procedural team. Review blood pressure, symptoms, sodium and kidney function after drainage and albumin administration; fluid removal still requires clinical follow-up."
  },
  {
    "heading": "Plan beyond the next tap",
    "body": "Continue achievable sodium restriction and individualize diuretics according to tolerance and response. Recurrent need for drainage should trigger hepatology review: North American TIPS recommendations support consideration in selected patients needing at least three large-volume taps for tense ascites in a year despite optimal medical therapy. TIPS response may take weeks to months, so follow-up remains necessary. Coordinate transplant evaluation, nutrition, recurrence management and the patient’s goals. Routine long-term albumin solely for recurrent ascites is a different intervention from replacement after a large-volume tap and is not established by this dosing rule."
  }
]);
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "paracentesis-refractory"), {
  "summary": "Relieve tense or refractory ascites, calculate albumin from the total drained volume and plan safely for recurrence, TIPS and transplant assessment.",
  "concepts": [
    "Tense ascites relief",
    "Total-volume albumin",
    "Resistant versus intractable",
    "TIPS selection",
    "Transplant referral"
  ],
  "application": "Pair drainage with indicated albumin and follow-up, confirm the reason for treatment failure and coordinate hepatology, TIPS and transplant evaluation.",
  "keyPoints": [
    "Tense and refractory ascites can require prompt paracentesis.",
    "After removal of more than 5 L, dose albumin for the total liters removed.",
    "Adverse effects can make ascites diuretic-intractable before maximum doses.",
    "Cirrhosis-related INR or platelets alone do not require routine pre-tap transfusion.",
    "TIPS candidacy requires assessment beyond one score."
  ]
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "paracentesis-refractory").check, {
  "question": "A therapeutic tap removes 8 L of ascites. Using the recommended 6 to 8 g/L albumin regimen, which dose range is correct?",
  "choices": [
    "48 to 64 g, calculated from all 8 L removed.",
    "18 to 24 g, calculated only from the 3 L above 5 L.",
    "6 to 8 g total, regardless of the volume removed.",
    "No albumin because the first 5 L are excluded from replacement."
  ],
  "rationale": "8 L × 6 to 8 g/L = 48 to 64 g. Removal of more than 5 L triggers the usual replacement recommendation; the dose uses the total volume drained. Subtracting 5 L would underdose the stated regimen."
});
cirrhosisDecompensatedLiverDiseaseModule.references.push(...[
  {
    "label": "CaroSpir: Current DailyMed dosing and safety label",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c4f70a04-7d89-4b73-8b02-17d43471bf08"
  },
  {
    "label": "FDA CaroSpir label: Formulation and cirrhosis dosing",
    "href": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/209478s006lbl.pdf"
  },
  {
    "label": "ALTA: North American TIPS recommendations",
    "href": "https://doi.org/10.1016/j.cgh.2021.07.018"
  }
]);

// Reconcile the complete SBP lesson with diagnostic timing, response and indication-specific prevention.
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "sbp"), {
  "summary": "Recognize infected ascites even without fever, treat a PMN count of at least 250 cells/mm³ promptly, protect kidney perfusion with albumin, and distinguish treatment from selected prophylaxis.",
  "concepts": [
    "Diagnostic paracentesis",
    "PMN ≥250 cells/mm³",
    "Acquisition and resistance",
    "Adjunctive albumin",
    "Secondary peritonitis",
    "Selected prophylaxis"
  ],
  "application": "Sample ascites promptly, begin active empiric antibiotics without awaiting culture, assess albumin and clinical response, investigate secondary-source clues in parallel, and document an individualized prevention plan after recovery.",
  "lesson": [
    {
      "heading": "Sample promptly, even without fever",
      "body": "SBP can present with abdominal pain or fever, but new encephalopathy, AKI, hypotension or otherwise unexplained deterioration may be the first clue. Perform diagnostic paracentesis promptly in patients with cirrhosis and ascites admitted urgently or non-electively, even if abdominal symptoms are absent. Obtain ascitic cell count with differential and culture before antibiotics when feasible; inoculate blood-culture bottles at the bedside and obtain blood cultures. Sampling must not delay urgent active therapy in an unstable patient."
    },
    {
      "heading": "Treat neutrocytic ascites",
      "body": "Use the absolute ascitic polymorphonuclear leukocyte count, not the total white-cell count or neutrophil percentage alone. A PMN count ≥250 cells/mm³ warrants prompt empiric treatment for suspected SBP while evaluating for other causes and a surgically treatable source. Culture-negative neutrocytic ascites is treated similarly. A negative culture, absence of fever or pending susceptibility report does not justify withholding treatment."
    },
    {
      "heading": "Interpret culture-positive low-PMN fluid",
      "body": "A positive culture with PMNs below 250 cells/mm³ requires clinical context. An asymptomatic patient with monomicrobial bacterascites may be observed with prompt repeat paracentesis and clinical reassessment, rather than automatic immediate antibiotics or dismissal of the result. Fever, abdominal pain, unexplained encephalopathy or other concerning infection findings justify empiric treatment even below the usual PMN threshold. Worsening physiology requires urgent reassessment."
    },
    {
      "heading": "Choose context-aware coverage",
      "body": "For community-acquired SBP without major resistance risk, an IV third-generation cephalosporin is a common initial choice; ceftriaxone 2 g every 24 hours is one academic-guidance regimen. A usual course is 5 to 7 days, individualized to organism and response. Hospital acquisition, critical illness, recent antibiotics, prior resistant isolates or prophylaxis can require broader local coverage. Review allergy, kidney function and susceptibility results, then narrow when appropriate. A prophylactic oral dose is not treatment for active SBP."
    },
    {
      "heading": "Use albumin when indicated",
      "body": "IV albumin is an adjunct to active antibiotics that reduces circulatory and kidney complications; AASLD guidance recommends albumin with SBP treatment, with particular benefit in patients with AKI or marked jaundice. The established regimen is 1.5 g/kg on day 1 and 1 g/kg on day 3. For an 80 kg patient using the stated dosing weight, those doses are 120 g and 80 g. Confirm the protocol and dosing weight and monitor respiratory and volume status. This regimen differs from albumin dosing per liter after large-volume paracentesis and does not replace antibiotics."
    },
    {
      "heading": "Reassess antibiotic response",
      "body": "Follow symptoms, blood pressure, kidney function, cultures and overall trajectory. Repeat ascitic PMNs at about 48 hours when response is uncertain or resistance or secondary peritonitis is a concern. A decline of less than 25% from the pretreatment count suggests failure and calls for reassessment of active coverage and a secondary source. Repeat tapping may be unnecessary when the patient improves and a recovered organism is susceptible to the administered drug. A falling count alone does not override clinical deterioration."
    },
    {
      "heading": "Exclude a secondary source",
      "body": "SBP has no surgically treatable intra-abdominal source. Focal peritoneal findings, polymicrobial growth, free air, very high PMNs or poor response should prompt urgent imaging and procedural consultation while antibiotics and stabilization continue. Ascitic protein >1 g/dL, glucose <50 mg/dL and LDH above the serum upper limit are supporting clues when at least two are present; they neither prove a perforation nor reliably exclude one when absent. A perforation or abscess may need source control and antimicrobial coverage including anaerobes."
    },
    {
      "heading": "Prevent recurrence deliberately",
      "body": "After recovery from SBP, arrange specialist-directed secondary prophylaxis, with individual review of resistance, adverse effects and whether ascites persists. Common US oral options are ciprofloxacin 500 mg daily or trimethoprim-sulfamethoxazole one double-strength tablet daily; select and adjust the regimen to the patient and local guidance. Primary prophylaxis without prior SBP is considered only in selected high-risk patients, such as ascitic protein <1.5 g/dL together with renal dysfunction or advanced liver failure. Low protein alone is not an instruction to treat every patient indefinitely. Reassess the indication and monitor antibiotic harms."
    },
    {
      "heading": "Separate bleeding prophylaxis from long-term prevention",
      "body": "Cirrhosis with acute upper gastrointestinal hemorrhage is a distinct short-course prophylaxis indication. IV ceftriaxone 1 g every 24 hours for up to 7 days is an AASLD regimen. This preventive dose and duration should not be confused with treatment of established SBP or long-term daily oral secondary prophylaxis. Alcohol-associated hepatitis alone does not justify universal prophylactic antibiotics, but a separate SBP or bleeding indication must still be recognized."
    }
  ],
  "keyPoints": [
    "Treat suspected SBP with PMNs ≥250 cells/mm³ before culture certainty.",
    "Sample promptly; absent fever does not exclude infection.",
    "Albumin supports kidney and circulatory protection alongside antibiotics.",
    "Poor response or secondary-source clues require renewed evaluation.",
    "Distinguish active treatment, short-course bleeding prophylaxis and selected long-term prevention."
  ]
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "sbp").check, {
  "question": "A patient with cirrhosis has ascitic PMNs of 310 cells/mm³; cultures are pending and no secondary source is apparent. Which action is best?",
  "choices": [
    "Begin active empiric antibiotics promptly and assess adjunctive albumin.",
    "Wait for a positive ascitic culture before starting antibiotics.",
    "Use only a prophylactic oral antibiotic dose.",
    "Withhold antibiotics because fever is absent."
  ],
  "rationale": "PMNs ≥250 cells/mm³ warrant prompt treatment of suspected SBP. Culture results guide later adjustment; they are not a prerequisite. Assess albumin alongside treatment. A preventive oral dose or absence of fever does not provide adequate management of this episode."
});
cirrhosisDecompensatedLiverDiseaseModule.references.push(...[
  {
    "label": "University of Washington: SBP recognition and management (2024)",
    "href": "https://www.hepatitisc.uw.edu/go/management-cirrhosis-related-complications/spontaneous-bacterial-peritonitis-recognition-management/core-concept/all/"
  },
  {
    "label": "AASLD: SBP prophylaxis benefits, uncertainties and harms (2025)",
    "href": "https://www.aasld.org/liver-fellow-network/core-series/why-series/antibiotics-sbp-prophylaxis-why-or-why-not"
  }
]);

// Reconcile HRS-AKI assessment and treatment with current consensus and US labeling.
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "hrs-aki"), {
  "summary": "Recognize acute kidney injury early, evaluate competing and coexisting causes, apply current HRS-AKI criteria, and use vasoconstrictors with careful albumin, respiratory and transplant assessment.",
  "concepts": [
    "Creatinine trajectory and urine output",
    "Volume and competing causes",
    "Current HRS-AKI criteria",
    "Vasoconstrictor plus albumin",
    "US terlipressin dosing",
    "Respiratory and ischemic safety",
    "Transplant and kidney follow-up"
  ],
  "application": "Assess volume, infection, medications and kidney findings promptly; establish the likely AKI phenotype, begin indicated specialist treatment, and monitor response, oxygenation and volume while preserving the transplant pathway.",
  "lesson": [
    {
      "heading": "Explain the circulatory syndrome",
      "body": "Advanced cirrhosis and portal hypertension can produce splanchnic vasodilation and reduced effective arterial circulation despite ascites. Compensatory renin-angiotensin-aldosterone and sympathetic activation contributes to renal vasoconstriction and impaired perfusion. Infection, bleeding, nephrotoxins and volume depletion can precipitate or worsen kidney dysfunction. HRS-AKI is one phenotype of AKI in cirrhosis with ascites; it may coexist with tubular injury or chronic kidney disease rather than being a guarantee of structurally normal kidneys."
    },
    {
      "heading": "Recognize creatinine limitations",
      "body": "Low muscle mass can make a seemingly modest serum creatinine misleading. Compare with a reliable prior baseline and follow urine output and the clinical course. Current ADQI-ICA criteria recognize AKI with a creatinine rise ≥0.3 mg/dL within 48 hours, a rise ≥50% known or presumed within 7 days, and/or urine output ≤0.5 mL/kg/hour for at least 6 hours. A rise from 0.8 to 1.1 mg/dL in 48 hours meets the absolute-rise criterion even though the increase is only 37.5%. This establishes AKI, not its cause."
    },
    {
      "heading": "Reverse correctable causes",
      "body": "Assess blood pressure and circulation, volume losses or overload, recent bleeding, infection and medication exposure. Stop nephrotoxins such as NSAIDs and reassess diuretics and other drugs that worsen perfusion according to current physiology. Treat infection and correct true volume depletion promptly; choose and reassess fluids from the clinical context. Urinalysis, sediment, proteinuria, kidney imaging and specialist assessment can identify obstruction or structural injury. Septic shock requiring vasopressors is strong evidence for another primary cause; infection without shock can also precipitate HRS-AKI."
    },
    {
      "heading": "Use current HRS-AKI criteria",
      "body": "The 2024 ADQI-ICA consensus requires cirrhosis with ascites, an AKI trajectory, no improvement in creatinine and/or urine output within 24 hours after adequate volume resuscitation when clinically indicated, and no strong evidence that another process is the primary cause. Assess volume in every case. A routine 48-hour albumin infusion is no longer a prerequisite and is inappropriate in a euvolemic or overloaded patient. Pre-existing CKD or proteinuria does not automatically exclude superimposed HRS-AKI; evaluate possible mixed injury and revise the diagnosis as evidence changes."
    },
    {
      "heading": "Pair vasoconstriction with individualized albumin",
      "body": "Once HRS-AKI is established, initiate specialist-directed vasoconstrictor treatment promptly with adjunctive 20% to 25% albumin when appropriate. Terlipressin is a preferred agent when the patient is eligible. A commonly recommended albumin amount during treatment is 20 to 40 g/day, but optimal dosing is uncertain: reassess volume daily, adjust to the patient and withhold albumin if overload or pulmonary edema develops. Albumin alone is not equivalent to vasoconstrictor treatment, and the HRS regimen should not be copied from SBP day-1/day-3 or paracentesis per-liter dosing."
    },
    {
      "heading": "Choose alternatives in the right care setting",
      "body": "If terlipressin is unavailable or contraindicated, norepinephrine with albumin is an alternative requiring ICU monitoring and central venous infusion in the consensus pathway. Midodrine plus octreotide with albumin is a less effective fallback when preferred treatment cannot be used and ICU transfer for norepinephrine is not possible. The review book lists this combination, but it should not be presented as an equally preferred substitute. Select the regimen with liver and kidney specialists, and monitor circulation, organ function and adverse effects."
    },
    {
      "heading": "Use terlipressin safely",
      "body": "The US TERLIVAZ label applies to adults with HRS and rapidly worsening kidney function. Obtain baseline oxygen saturation and assess volume and acute-on-chronic liver failure severity. Do not start during hypoxia, including SpO₂ <90%, or worsening respiratory symptoms; ongoing coronary, peripheral or mesenteric ischemia is also a contraindication. Avoid use in ACLF grade 3. Creatinine >5 mg/dL is a limitation because benefit is unlikely, rather than a listed absolute contraindication. For highly prioritized transplant candidates, including MELD ≥35, benefit may not outweigh risk. Discuss fetal harm risk when pregnancy is relevant."
    },
    {
      "heading": "Administer the US formulation correctly",
      "body": "For US TERLIVAZ, record the last available pretreatment creatinine as the dosing baseline. Give 0.85 mg IV every 6 hours over 2 minutes on days 1 to 3. One vial contains 0.85 mg terlipressin, equivalent to 1 mg terlipressin acetate; these mass expressions must not be mistaken for different vial doses. Reconstitute a vial with 5 mL of 0.9% sodium chloride and inspect the solution. A peripheral or central line can be used without a dedicated central line; flush afterward. International consensus infusion and titration protocols differ from this US labeled bolus schedule."
    },
    {
      "heading": "Adjust the US regimen on day 4",
      "body": "Compare day-4 creatinine with the pretreatment dosing baseline. If it has fallen by at least 30%, continue 0.85 mg every 6 hours. If it is below baseline but the decline is less than 30%, the dose may be increased to 1.7 mg every 6 hours after safety assessment. If it is at or above baseline, discontinue rather than escalating. A fall from 3.0 to 2.1 mg/dL is (3.0 − 2.1) ÷ 3.0 × 100 = 30%, so the continuation branch applies. The US day-4 30% rule is distinct from the consensus 25% titration criterion and the SBP PMN-response rule."
    },
    {
      "heading": "Monitor and stop treatment promptly",
      "body": "Use continuous pulse oximetry and regular respiratory assessment while following creatinine, urine output, blood pressure, volume and ischemic symptoms. Discontinue TERLIVAZ if SpO₂ falls below 90% or hypoxia, increased respiratory symptoms or ischemia develops; a creatinine response does not cancel these safety rules. Manage overload by reassessing albumin and other fluids and adjusting treatment with the team. Under the US label, continue only until 24 hours after the second of two consecutive creatinine values ≤1.5 mg/dL, at least 2 hours apart, or a maximum of 14 days. The consensus also calls for stopping for severe adverse reactions, need for kidney replacement therapy or failure on maximum tolerated therapy; do not combine its different response endpoints into one dosing algorithm."
    },
    {
      "heading": "Protect the transplant pathway",
      "body": "Pharmacologic improvement can bridge to kidney recovery or liver transplantation but does not cure advanced cirrhosis. Coordinate timely transplant evaluation regardless of vasoconstrictor response; respiratory failure or ischemia can jeopardize candidacy. Kidney replacement therapy is individualized to complications, trajectory and goals, and can provide a bridge for transplant candidates. Arrange liver and kidney follow-up after AKI with medication reconciliation, kidney recovery assessment and a plan to prevent another insult. Discuss symptom relief and goals of care alongside disease-directed treatment."
    }
  ],
  "keyPoints": [
    "A small creatinine rise can meet AKI criteria; AKI does not establish HRS.",
    "Current HRS-AKI assessment does not require routine albumin for 48 hours.",
    "CKD and structural injury can coexist with HRS-AKI.",
    "Individualize albumin and watch for pulmonary edema.",
    "Use the US terlipressin day-4 dose algorithm and respiratory stopping rules.",
    "Kidney improvement does not remove the need for transplant assessment."
  ]
});
Object.assign(cirrhosisDecompensatedLiverDiseaseModule.submodules.find((lesson) => lesson.slug === "hrs-aki").check, {
  "question": "A patient receiving TERLIVAZ has improving creatinine but new dyspnea and an SpO₂ of 88%. Which action is best?",
  "choices": [
    "Discontinue TERLIVAZ and urgently assess respiratory and volume status.",
    "Continue because kidney improvement overrides the oxygen threshold.",
    "Give more albumin automatically without assessing volume.",
    "Wait until day 4 before responding to hypoxia."
  ],
  "rationale": "The US label requires discontinuation when SpO₂ falls below 90% and with hypoxia or increased respiratory symptoms. Improving creatinine does not override respiratory safety. Assess oxygenation, volume and other causes urgently; albumin must be reassessed rather than automatically increased."
});
cirrhosisDecompensatedLiverDiseaseModule.references.push(...[
  {
    "label": "ADQI-ICA 2024: AKI and HRS-AKI diagnostic and treatment consensus",
    "href": "https://doi.org/10.1016/j.jhep.2024.03.031"
  }
]);
