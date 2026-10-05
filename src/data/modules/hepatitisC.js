import { hepatitisCQuestionBank } from "@/data/questionBanks/hepatitisC";
const check=(question,choices,rationale,slug)=>({question,choices,answer:0,rationale,reviewHref:`#${slug}`});
const rows=(...items)=>items.map(([heading,body])=>({heading,body}));
const section=(slug,title,summary,concepts,application,content,keyPoints,quiz)=>({slug,title,visual:`hepatitis-c-${slug}`,summary,concepts,application,lesson:rows(...content),keyPoints,check:quiz});

export const hepatitisCModule={
  slug:"hepatitis-c",number:"206",title:"Hepatitis C",
  source:"RxPrep 2023 hepatitis C, direct-acting antiviral, interaction, ribavirin, and monitoring material on printed pages 296 through 300, reconciled with May 2026 AASLD and IDSA HCV Guidance, current CDC testing recommendations, and current FDA labeling",
  description:"Move from reflex diagnosis and fibrosis staging to pangenotypic therapy, interaction engineering, sustained virologic response, cirrhosis surveillance, retreatment, and reinfection prevention.",
  topics:["HCV RNA","FIB-4","NS3/4A","NS5A","NS5B","Mavyret","Epclusa","Drug interactions","SVR12","Cirrhosis","Retreatment","Reinfection"],
  outcomes:["Explain HCV replication, transmission, and natural history.","Diagnose current infection with reflex RNA testing.","Stage fibrosis and liver compensation before treatment.","Identify simplified-treatment eligibility and exclusions.","Connect DAA name stems to viral targets.","Select and administer current pangenotypic regimens.","Engineer a safe pretreatment interaction plan.","Monitor adherence, safety, glucose, and anticoagulation.","Confirm cure with SVR12 testing.","Continue cirrhosis surveillance after cure.","Recognize retreatment and special-population pathways.","Build a closed-loop prevention and follow-up plan."],
  submodules:[
    section("virus-natural-history","Follow HCV From Exposure to Fibrosis","HCV is a positive-sense RNA virus whose error-prone replication produces genetic diversity. Acute infection can clear, but persistent viremia can drive decades of inflammation and fibrosis.",["RNA virus","Quasispecies","Chronicity","Fibrosis","HCC"],"Use exposure timing, RNA, fibrosis, alcohol, metabolic disease, HIV, and immune context to estimate progression and treatment urgency.",[
      ["Map replication","The viral polyprotein is processed by NS3/4A protease, the NS5A complex organizes replication and assembly, and NS5B polymerase copies viral RNA. These targets explain modern combination therapy."],
      ["Map transmission","Blood exposure dominates, especially shared injection equipment. Perinatal, occupational, unsafe procedural, and selected sexual exposure also matter. There is no vaccine."],
      ["Map progression","Persistent inflammation can produce fibrosis, cirrhosis, portal hypertension, decompensation, and hepatocellular carcinoma. Alcohol, metabolic liver disease, HIV, and older age accelerate risk."],
      ["Treat acute infection","Current guidance uses a test-and-treat approach for confirmed acute viremia rather than waiting solely for spontaneous clearance. Immediate linkage reduces transmission and loss to follow-up."],
    ],["HCV is an RNA virus.","Modern drugs target three nonstructural systems.","Chronic infection can be silent.","Confirmed acute infection is treated."],check("Which viral protein is the RNA-dependent RNA polymerase?",["NS5B","NS5A","NS3/4A","HBsAg"],"NS5B copies the HCV RNA genome.","virus-natural-history")),

    section("screening-diagnosis","Separate Exposure From Current Infection","HCV antibody documents exposure, while HCV RNA documents current infection. Reflex testing prevents a second-visit diagnostic gap.",["HCV antibody","Reflex RNA","Current infection","Pregnancy","Reinfection"],"Name what each test answers and ensure a reactive antibody automatically reaches RNA confirmation.",[
      ["Screen broadly","CDC recommends one-time screening for all adults and testing during every pregnancy, with periodic testing for ongoing exposure and testing for anyone who requests it."],
      ["Use reflex diagnosis","Begin with an FDA-approved HCV antibody test and automatically perform nucleic-acid testing for HCV RNA when reactive. A reactive antibody with undetectable RNA does not establish current infection."],
      ["Handle early exposure","RNA can become detectable before antibody. After recent exposure or in severe immunosuppression, use RNA or repeat testing according to the timeline."],
      ["Diagnose reinfection with RNA","Antibody usually remains reactive after spontaneous clearance or cure. Use RNA for new infection when exposure continues or liver tests rise."],
    ],["Antibody means exposure.","RNA means current viremia.","Reflex testing improves linkage.","Reinfection requires RNA testing."],check("What confirms current HCV infection after a reactive antibody?",["Detectable HCV RNA","A second antibody alone","Normal ALT","Hepatitis B surface antigen"],"Current infection requires evidence of viremia.","screening-diagnosis")),

    section("fibrosis-eligibility","Stage Before Selecting the Pathway","Fibrosis and compensation determine whether simplified therapy applies and what follow-up survives cure.",["FIB-4","Elastography","Platelets","Child-Pugh","Simplified treatment"],"Calculate FIB-4, look for cirrhosis from multiple sources, and route exclusions to specialty guidance rather than withholding cure.",[
      ["Calculate FIB-4","FIB-4 uses age, AST, ALT, and platelet count. Current guidance accepts it as an initial noninvasive tool for simplified-treatment selection."],
      ["Integrate cirrhosis evidence","Use elastography, imaging nodularity or splenomegaly, low platelets, validated serum tests, clinical findings, and prior biopsy. Biopsy is not routinely required."],
      ["Separate compensation","Child-Pugh B or C, current or prior ascites, encephalopathy, or variceal bleeding excludes protease-inhibitor therapy and simplified pathways."],
      ["Read exclusions correctly","Prior treatment, pregnancy, HBsAg positivity, HCC, transplant, severe renal disease in selected pathways, and decompensation require another guidance section, not therapeutic abandonment."],
    ],["Stage fibrosis before treatment.","Biopsy is not routinely necessary.","Prior decompensation matters.","Simplified exclusion is not treatment exclusion."],check("Which finding excludes an NS3 protease inhibitor?",["Prior hepatic decompensation","Reactive HCV antibody","Normal platelet count","Noncirrhotic status"],"Protease inhibitors are unsafe with current or prior decompensation.","fibrosis-eligibility")),

    section("daa-mechanisms","Build Complementary Antiviral Pressure","DAA name stems reveal the replication target and help detect incomplete, redundant, or unsafe combinations.",["Previr","Asvir","Buvir","Protease","Polymerase"],"Identify every active component and explain why the combination blocks more than one replication function.",[
      ["Block protease","Glecaprevir, grazoprevir, and voxilaprevir inhibit NS3/4A processing. The previr stem is a useful clue, but liver compensation determines safety."],
      ["Block the replication complex","Pibrentasvir, velpatasvir, and ledipasvir inhibit NS5A. These potent drugs also create important resistance context after treatment failure."],
      ["Block polymerase","Sofosbuvir is a nucleotide analog NS5B polymerase inhibitor. Dasabuvir is a nonnucleoside NS5B inhibitor. Sofosbuvir monotherapy is not adequate."],
      ["Prefer pangenotypic design","Current initial therapy often uses pangenotypic combinations, reducing the need for genotype-specific selection in eligible patients while preserving genotype testing for defined cirrhosis and retreatment contexts."],
    ],["Previr targets protease.","Asvir targets NS5A.","Buvir targets NS5B.","Combination therapy prevents incomplete pressure."],check("Which pairing uses complementary targets?",["Glecaprevir plus pibrentasvir","Sofosbuvir alone","Two NS5A inhibitors alone","Ribavirin alone"],"Mavyret combines NS3/4A and NS5A inhibition.","daa-mechanisms")),

    section("initial-regimens","Deliver the Current Pangenotypic Regimen","For eligible treatment-naive adults, glecaprevir and pibrentasvir or sofosbuvir and velpatasvir anchor simplified therapy.",["Glecaprevir/pibrentasvir","Sofosbuvir/velpatasvir","Food","Eight weeks","Twelve weeks"],"Verify the exact 2026 pathway, formulation, duration, liver status, interactions, and complete supply before the first dose.",[
      ["Use Mavyret correctly","Adults generally take three 100 mg and 40 mg tablets together once daily with food. Current labeling includes acute or chronic genotypes 1 through 6 in patients age 3 years or older without cirrhosis or with Child-Pugh A, using age-appropriate formulation."],
      ["Use Epclusa correctly","Adults generally take one 400 mg and 100 mg tablet daily with or without food for 12 weeks in simplified treatment. Genotype 3 with compensated cirrhosis requires baseline NS5A resistance context."],
      ["Respect liver boundaries","Mavyret is contraindicated with Child-Pugh B or C or any prior hepatic decompensation. Sofosbuvir and velpatasvir can be used with ribavirin in selected decompensated disease under expert care."],
      ["Do not preserve retired clutter","Viekira Pak and interferon-era combinations from older course material are not routine current initial regimens. Teach them as historical context, not default choices."],["Keep meal instructions tied to the product","For adult tablets, glecaprevir/pibrentasvir is taken as three tablets together once daily with food, whereas sofosbuvir/velpatasvir and ledipasvir/sofosbuvir can be taken with or without food. Elbasvir/grazoprevir is another exception to the protease-inhibitor-with-food mnemonic. These oral tablet instructions do not establish crushing, feeding-tube delivery, or a pediatric formulation method."],
    ],["Mavyret is taken with food.","Epclusa is pangenotypic.","Prior decompensation excludes Mavyret.","Current guidance replaces legacy tables."],check("What is the adult Mavyret administration rule?",["Three tablets together once daily with food","One tablet weekly fasting","Three tablets divided without food","Sofosbuvir monotherapy"],"The adult daily dose is taken together with food.","initial-regimens")),

    section("pretreatment-safety","Engineer Safety Before the First Dose","A short regimen can still fail from a missed cirrhosis diagnosis, interaction, HBV reactivation, incomplete supply, or untreated coinfection.",["Medication reconciliation","HBV triple panel","HIV","Pregnancy","HCV RNA"],"Resolve every pretreatment question and document the reason the selected pathway applies.",[
      ["Collect baseline evidence","Obtain CBC, hepatic panel, kidney function, quantitative HCV RNA, and INR when cirrhosis or full monitoring guidance requires it. Add genotype when the chosen pathway needs it."],
      ["Screen coinfections","Test HIV and the HBV triple panel. If HBsAg positive, obtain HBV DNA and start indicated treatment or create prophylaxis or monitoring before DAA therapy."],
      ["Reconcile everything","Include prescriptions, over-the-counter products, supplements, acid suppressants, statins, anticoagulants, antiarrhythmics, antiseizure drugs, antiretrovirals, transplant drugs, and substances."],
      ["Confirm delivery","Verify pregnancy context, coverage, complete duration, formulation, food rule, swallowing needs, refill path, adherence routine, and a contact for any new medication."],
    ],["Pretreatment staging is essential.","HBV testing uses the triple panel.","Every medication matters.","Complete supply is a safety requirement."],check("Which infection panel is required before DAA therapy?",["HBsAg, anti-HBs, and total anti-HBc","HCV antibody only","Influenza antibody","No coinfection testing"],"The HBV triple panel identifies current and prior infection relevant to reactivation.","pretreatment-safety")),

    section("interaction-engineering","Design Around the Interaction Network","DAA exposure depends on gastric pH, transporters, enzymes, liver function, and every concurrent medication.",["Acid suppression","P-gp","CYP","Statins","Amiodarone"],"Use the exact product label and a validated interaction checker, then write a concrete hold, switch, dose, timing, or monitoring plan.",[
      ["Control gastric pH","Ledipasvir and velpatasvir need an acidic environment. Antacid separation and H2 blocker or PPI rules are product-specific, so do not invent one universal schedule."],
      ["Remove strong inducers","Rifampin, carbamazepine, phenytoin, phenobarbital, and St. John's wort can reduce exposure. Time separation does not reverse persistent induction."],
      ["Protect interacting drugs","Statins, calcineurin inhibitors, antiretrovirals, anticoagulants, and other transporter or enzyme substrates may need a hold, substitution, dose limit, or intensified monitoring."],
      ["Avoid the bradycardia stack","Sofosbuvir with amiodarone can cause serious symptomatic bradycardia. Avoid when possible or use label-directed specialist monitoring if no alternative exists."],
    ],["Acid rules are product-specific.","Induction cannot be timed away.","Statin exposure can rise.","Amiodarone plus sofosbuvir is dangerous."],check("Why is separating carbamazepine from Epclusa by four hours inadequate?",["Enzyme and transporter induction persists beyond the dosing window","Carbamazepine raises gastric acidity","Epclusa is injected","The drugs never interact"],"Induction is not a local absorption event that simple separation fixes.","interaction-engineering")),

    section("monitoring-delivery","Protect Every Dose and Detect Early Harm","Many uncomplicated ribavirin-free patients need focused support rather than intensive routine laboratories, while cirrhosis and interacting drugs change the plan.",["Adherence","Hypoglycemia","INR","ALT","Decompensation"],"Monitor according to risk and create immediate actions for missed supply, new medication, liver injury, or decompensation.",[
      ["Support adherence","Review administration, missed doses, access, nausea, fatigue, new products, and injection or housing barriers without judgment. Do not wait until the end to discover a gap."],
      ["Monitor metabolic change","Improved hepatic function can lower glucose requirements and change warfarin response. Warn patients and actively monitor glucose or INR during and after treatment."],
      ["Respond to liver injury","A tenfold ALT rise, symptomatic hepatitis, increasing bilirubin or INR, jaundice, ascites, or encephalopathy requires urgent evaluation and guidance-directed interruption or escalation."],
      ["Monitor ribavirin separately","When used in selected decompensated or retreatment cases, ribavirin requires CBC and reproductive safety planning because hemolytic anemia and teratogenicity are central risks."],
    ],["Monitoring is risk-based.","Glucose can fall.","INR can change.","Decompensation requires urgent action."],check("Which patient needs proactive glucose review during DAA therapy?",["A patient using insulin","A patient with no medications","Only a patient taking an antacid","No one because DAAs cannot affect glycemia"],"Rapid viral response can improve glucose metabolism and cause hypoglycemia.","monitoring-delivery")),

    section("svr-follow-up","Prove Cure and Preserve What Cure Cannot Undo","SVR12 confirms cure, but fibrosis, cirrhosis, metabolic disease, alcohol exposure, and reinfection risk still determine follow-up.",["SVR12","HCV RNA","Cure","Cirrhosis","Reinfection"],"Schedule the cure test before treatment ends and define the post-cure pathway from fibrosis and exposure risk.",[
      ["Confirm SVR","Obtain quantitative HCV RNA and a hepatic panel 12 weeks or later after therapy. End-of-treatment negativity is encouraging but is not the cure endpoint."],
      ["Follow noncirrhotic cure","Patients without cirrhosis usually need no HCV-specific liver follow-up after SVR unless liver tests stay abnormal or another liver disease remains."],
      ["Follow cirrhotic cure","Continue HCC ultrasound with or without AFP about every six months and portal-hypertension care according to current guidance. Cure lowers but does not erase risk."],
      ["Detect reinfection","Use HCV RNA, not antibody, at least annually with ongoing risk and whenever liver tests rise. Pair testing with sterile equipment, safer sex, and harm-reduction access."],
    ],["SVR12 confirms cure.","Antibody remains reactive.","Cirrhosis survives cure.","Reinfection remains possible."],check("Which test confirms cure?",["Undetectable HCV RNA at least 12 weeks after therapy","Reactive HCV antibody","Normal bilirubin on the last treatment day","Negative HBV surface antigen"],"SVR12 is the accepted virologic cure endpoint.","svr-follow-up")),

    section("cirrhosis-special","Keep Protease Inhibitors Out of Decompensation","Compensated and decompensated cirrhosis are different therapeutic states, not neighboring points on one simplified checklist.",["Child-Pugh A","Child-Pugh B or C","Protease inhibitor","Ribavirin","HCC"],"Use history and current findings to determine the worst liver state, then select the expert pathway.",[
      ["Treat compensated disease carefully","Eligible treatment-naive Child-Pugh A patients can use simplified pangenotypic therapy after ultrasound, CTP calculation, fibrosis confirmation, laboratory review, and genotype-specific checks where required."],
      ["Exclude protease inhibitors","Glecaprevir, grazoprevir, and voxilaprevir should not be used in decompensated liver disease. Prior decompensation remains relevant even if symptoms later improve."],
      ["Use expert decompensated regimens","Sofosbuvir and velpatasvir with ribavirin is a current labeled option for selected patients. Ribavirin ineligibility, transplant timing, kidney function, and anemia require specialist design."],
      ["Maintain surveillance","Obtain HCC evaluation before therapy and continue surveillance after SVR. Address ascites, encephalopathy, varices, nutrition, transplant candidacy, and medication toxicity in parallel."],
    ],["Child-Pugh A can use defined simplified care.","B or C excludes protease inhibitors.","Prior decompensation matters.","Cure does not end cirrhosis care."],check("Which regimen component is inappropriate in Child-Pugh C cirrhosis?",["Voxilaprevir","Specialist-selected sofosbuvir/velpatasvir","Careful ribavirin assessment","Transplant evaluation"],"Voxilaprevir is an NS3 protease inhibitor and is not used in decompensated disease.","cirrhosis-special")),

    section("retreatment-prevention","Reconstruct Failure and Prevent Reinfection","DAA failure is uncommon and informative. The prior regimen, resistance, interaction, adherence, liver status, and exposure history determine salvage.",["Prior DAA","NS5A resistance","Vosevi","Adherence","Harm reduction"],"Build a treatment-history timeline before choosing salvage and pair cure with durable prevention resources.",[
      ["Reconstruct the first course","Record every component, duration, start and stop date, missed doses, interruption, food and acid rules, interacting drugs, genotype, fibrosis, and RNA response."],
      ["Use current salvage guidance","Vosevi combines sofosbuvir, velpatasvir, and voxilaprevir and has defined adult indications after selected NS5A or sofosbuvir-containing failures. It is taken once daily with food and is not used in decompensation."],
      ["Do not repeat blindly","Resistance-associated substitutions and the failed drug classes matter. Expert consultation is appropriate when the best combination or duration is unclear."],
      ["Prevent reinfection","Offer syringe services, medications for opioid use disorder, safer injection and sex counseling, wound and infection care, vaccination for HAV and HBV when susceptible, and ongoing RNA testing."],
    ],["Failure needs reconstruction.","Vosevi is a defined salvage regimen.","Decompensation excludes voxilaprevir.","Harm reduction protects cure."],check("What is the first step after DAA treatment failure?",["Reconstruct prior drugs, adherence, interactions, fibrosis, genotype, and response","Repeat the same regimen automatically","Use HCV antibody to measure failure","Stop all follow-up"],"Retreatment depends on why and how the original regimen failed.","retreatment-prevention")),

    section("integrated-case","Close the HCV Cure Loop","A complete pathway moves from reflex diagnosis to staged treatment, uninterrupted delivery, SVR12, and the right lifelong follow-up.",["RNA","Fibrosis","Regimen","Interactions","SVR12"],"Give every pending result, medication change, supply step, cure test, and surveillance study a named owner and date.",[
      ["Define infection and liver state","Document antibody and RNA, acute or chronic context, FIB-4, cirrhosis evidence, Child-Pugh status, HCC evaluation, prior treatment, kidney function, pregnancy, HIV, and HBV."],
      ["Engineer the regimen","State eligibility, exact products, targets, formulation, food rule, duration, genotype or RAS need, interaction resolutions, complete supply, adherence plan, and alternative."],
      ["Engineer monitoring","Plan clinical contact, glucose, INR, liver and ribavirin safety when applicable, new-medication review, and urgent decompensation actions."],
      ["Engineer the cure transition","Schedule SVR12 RNA, HCC and portal surveillance for cirrhosis, evaluation of persistent ALT elevation, reinfection RNA testing, vaccination, and harm reduction."],
    ],["Reflex RNA establishes infection.","Fibrosis determines the pathway.","Interactions are designed out.","SVR12 must be documented."],check("Which plan best demonstrates closed-loop HCV care?",["Reflex RNA, fibrosis staging, current regimen, interaction plan, complete supply, SVR12, and risk-based follow-up","A reactive antibody and immediate discharge","A DAA prescription without medication reconciliation","End-of-treatment antibody testing"],"Cure requires a connected diagnostic, treatment, and follow-up system.","integrated-case")),
  ],
  references:[
    {label:"AASLD and IDSA HCV Guidance",href:"https://www.hcvguidelines.org/"},
    {label:"May 2026 Initial Treatment Guidance",href:"https://www.hcvguidelines.org/wp-content/uploads/2026/05/AASLD-IDSA_HCVGuidance_InitTreat_20260513_protected.pdf"},
    {label:"CDC Clinical Screening and Diagnosis for Hepatitis C",href:"https://www.cdc.gov/hepatitis-c/hcp/diagnosis-testing/index.html"},
    {label:"Current MAVYRET Prescribing Information",href:"https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7bf99777-0401-9095-8645-16c6e907fcc0"},
    {label:"Current EPCLUSA Prescribing Information",href:"https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7f30631a-ee3b-4cfe-866b-964df3f0a44f"},
    {label:"Current VOSEVI Prescribing Information",href:"https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=17ffc094-8ca7-45d2-80d8-fd043bc9a221&type=display"},
  ],
  disclaimer:"This module supports advanced education about hepatitis C. Regimens and eligibility change rapidly, so treatment requires the current AASLD and IDSA HCV Guidance, current labeling, specialist input when excluded from simplified care, and patient-specific evidence.",
  questionBank:hepatitisCQuestionBank,
};

// Reconcile whole HCV treatment, interaction and monitoring lessons with dated primary sources.
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "initial-regimens").lesson.find((body) => body.heading === "Use Mavyret correctly"), {
  "heading": "Use Mavyret correctly",
  "body": "Each adult Mavyret tablet contains glecaprevir 100 mg and pibrentasvir 40 mg. Take three tablets together once daily with food, for a total of 300 mg/120 mg. Eligible treatment-naive adults in the simplified chronic-HCV pathways use eight weeks. The June 2025 U.S. label also includes acute infection and patients aged three years or older without cirrhosis or with Child-Pugh A; pediatric formulation and dosing are age- and weight-specific. Prior treatment and transplant contexts require their own duration review. The label defines treatment-naive for the current infection, whereas the simplified adult pathway excludes prior HCV treatment; assess the applicable pathway rather than treating these definitions as interchangeable."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "initial-regimens").lesson.find((body) => body.heading === "Use Epclusa correctly"), {
  "heading": "Use Epclusa correctly",
  "body": "Epclusa combines the NS5B nucleotide prodrug sofosbuvir with the NS5A inhibitor velpatasvir. Adults take one 400 mg/100 mg tablet once daily with or without food; eligible simplified chronic-HCV treatment uses twelve weeks. Genotype 3 compensated cirrhosis requires baseline NS5A resistance-associated substitution testing when choosing Epclusa: without Y93H, twelve weeks fits the simplified pathway; if Y93H is present, follow the other guidance recommendations. Epclusa needs no renal dose adjustment, including dialysis, but this does not establish simplified-pathway eligibility or ribavirin dosing."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "initial-regimens").lesson.find((body) => body.heading === "Respect liver boundaries"), {
  "heading": "Respect liver boundaries",
  "body": "Mavyret is contraindicated in Child-Pugh B or C and with any prior hepatic decompensation, even if the current liver score improves. In compensated cirrhosis or advanced liver disease, use clinically indicated hepatic laboratory monitoring and review new jaundice, ascites, encephalopathy or variceal bleeding promptly. The Epclusa label includes combination treatment with ribavirin for decompensated cirrhosis; this requires expert assessment of ribavirin eligibility, renal function, anemia, reproductive safety and the overall care plan."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "initial-regimens").lesson.find((body) => body.heading === "Do not preserve retired clutter"), {
  "heading": "Do not preserve retired clutter",
  "body": "The book’s older interferon and Viekira-era regimens provide historical context. The reviewed simplified adult pathways instead specify glecaprevir/pibrentasvir or sofosbuvir/velpatasvir for eligible initial treatment. Do not use an older table or pangenotypic activity alone to establish a current default regimen, retreatment plan or duration. Match the patient to the applicable guidance and the exact product label."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "initial-regimens"), {
  "summary": "Eligible treatment-naive adults with chronic HCV can use defined simplified glecaprevir/pibrentasvir or sofosbuvir/velpatasvir pathways; liver state, prior treatment and product instructions still govern the choice.",
  "application": "Verify the applicable pathway, exact formulation, dose, food rule, duration, liver history, interactions and medication supply before treatment.",
  "keyPoints": [
    "Adult Mavyret is three tablets together daily with food.",
    "Simplified Mavyret and Epclusa durations are eight and twelve weeks, respectively.",
    "Genotype 3 compensated cirrhosis needs Epclusa resistance review.",
    "Any prior decompensation excludes Mavyret."
  ]
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "initial-regimens").check, {
  "question": "What is the adult Mavyret administration rule?",
  "choices": [
    "Three tablets together once daily with food",
    "One tablet weekly fasting",
    "Three tablets divided without food",
    "Sofosbuvir monotherapy"
  ],
  "answer": 0,
  "rationale": "Three adult tablets containing 100 mg glecaprevir and 40 mg pibrentasvir each are taken together once daily with food, totaling 300 mg/120 mg. Pediatric dose and formulation require age- and weight-specific review.",
  "reviewHref": "#initial-regimens"
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "interaction-engineering").lesson.find((body) => body.heading === "Control gastric pH"), {
  "heading": "Control gastric pH",
  "body": "Raised gastric pH lowers ledipasvir and velpatasvir solubility and can reduce antiviral exposure. Harvoni and Epclusa both separate antacids by four hours and permit H2 blockers simultaneously or twelve hours apart up to a famotidine 40 mg twice-daily equivalent. Their PPI rules differ: Epclusa coadministration is not recommended; if medically necessary, take Epclusa with food four hours before omeprazole 20 mg, and other PPIs have not been studied. Harvoni permits a PPI dose up to omeprazole 20 mg equivalent simultaneously under fasted conditions. Review the exact products before writing the schedule."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "interaction-engineering").lesson.find((body) => body.heading === "Remove strong inducers"), {
  "heading": "Remove strong inducers",
  "body": "Rifampin, carbamazepine, phenytoin, phenobarbital and St. John’s wort can lower exposure to specified DAAs through induction of transporters or metabolic enzymes. Epclusa does not recommend these combinations. Mavyret contraindicates rifampin and does not recommend carbamazepine; other combinations require exact-label review. These systemic effects explain why antacid-style dose spacing is not an established solution. Coordinate an alternative medication or HCV regimen with the treating team; do not independently stop essential therapy or invent a universal washout interval."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "interaction-engineering").lesson.find((body) => body.heading === "Protect interacting drugs"), {
  "heading": "Protect interacting drugs",
  "body": "Read each product’s interaction table rather than applying one rule to all statins, transplant drugs, antiretrovirals or anticoagulants. Mavyret and Epclusa limit rosuvastatin to 10 mg, whereas Harvoni does not recommend it. Mavyret is not recommended with stable cyclosporine doses above 100 mg/day; this is not a blanket restriction on every dose or calcineurin inhibitor. Epclusa can raise tenofovir exposure with TDF-containing regimens, requiring renal safety review. Direct pharmacokinetic effects differ from changes in medication response during hepatic recovery, which may still require glucose, INR or selected drug-level monitoring."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "interaction-engineering").lesson.find((body) => body.heading === "Avoid the bradycardia stack"), {
  "heading": "Avoid the bradycardia stack",
  "body": "Sofosbuvir-containing therapy with amiodarone can cause serious symptomatic bradycardia; the mechanism is unknown. Beta blockers, underlying cardiac disease and advanced liver disease can increase risk. Epclusa coadministration is not recommended. If no viable alternative exists, its label recommends inpatient cardiac monitoring for the first 48 hours, then daily outpatient or self-monitoring of heart rate through at least the first two weeks; symptoms require immediate medical evaluation. Amiodarone persists after stopping: AASLD/IDSA advises at least six months off it before sofosbuvir, while the label also describes monitoring after recent discontinuation. Coordinate the choice and monitoring with the treating teams."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "interaction-engineering"), {
  "summary": "Gastric pH and transporter or enzyme effects require exact-product interaction plans; changes accompanying hepatic recovery also affect concomitant-medication monitoring.",
  "application": "Check the exact DAA and concomitant products, then coordinate the indicated alternative, dose, timing or monitoring plan with the treating team.",
  "keyPoints": [
    "Epclusa and Harvoni have different PPI instructions.",
    "Inducer interactions are not solved by antacid-style spacing.",
    "Statin and transplant-drug restrictions depend on the combination.",
    "Amiodarone with sofosbuvir requires avoidance or a specialist cardiac plan."
  ]
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "interaction-engineering").check, {
  "question": "Why is separating carbamazepine from Epclusa by four hours inadequate?",
  "choices": [
    "Carbamazepine induces transporters or enzymes that can lower antiviral exposure; the Epclusa label does not recommend the combination",
    "Carbamazepine binds Epclusa locally, so every four-hour gap fully prevents the interaction",
    "Epclusa contains no active antiviral medicine",
    "The presence of food guarantees that the combination is safe"
  ],
  "answer": 0,
  "rationale": "The label identifies induction that can lower sofosbuvir or velpatasvir concentrations and does not recommend carbamazepine coadministration. Systemic induction explains why the antacid four-hour separation rule is not an established solution. Coordinate alternatives with the treating team.",
  "reviewHref": "#interaction-engineering"
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "monitoring-delivery").lesson.find((body) => body.heading === "Support adherence"), {
  "heading": "Support adherence",
  "body": "Review administration, missed doses, medication access, symptoms and new products without judgment, and address barriers as they occur. For an interruption, record its timing and length and use the applicable guidance rather than automatically declaring failure or restarting every course. The AASLD/IDSA panel considers a gap shorter than seven days unlikely to affect SVR12 in the stated treatment-naive acute or chronic HCV context without cirrhosis or with compensated cirrhosis, receiving glecaprevir/pibrentasvir or sofosbuvir/velpatasvir. Evidence is limited; prior DAA treatment, other regimens, transplant and decompensated disease need expert input."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "monitoring-delivery").lesson.find((body) => body.heading === "Monitor metabolic change"), {
  "heading": "Monitor metabolic change",
  "body": "HCV clearance can change hepatic function and the response to concomitant medicines. Patients taking diabetes medicines can develop hypoglycemia and may need changes to glucose-lowering treatment. Patients taking warfarin need INR monitoring for subtherapeutic anticoagulation. Counsel and monitor during and after DAA therapy, with individualized dose decisions based on measured results. These changes do not automatically establish a direct DAA enzyme interaction or a universal dose reduction."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "monitoring-delivery").lesson.find((body) => body.heading === "Respond to liver injury"), {
  "heading": "Respond to liver injury",
  "body": "AASLD/IDSA recommends discontinuation for an ALT rise of at least tenfold from that patient’s baseline. A smaller rise accompanied by weakness, nausea, vomiting, jaundice or significantly increased bilirubin, alkaline phosphatase or INR also prompts discontinuation. An asymptomatic rise below tenfold from baseline calls for repeat testing every two weeks; persistent elevation prompts consideration of discontinuation. These are baseline-relative thresholds, not one universal multiple of the upper limit of normal. New jaundice, ascites, encephalopathy or other decompensation findings need urgent evaluation and specialist care."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "monitoring-delivery").lesson.find((body) => body.heading === "Monitor ribavirin separately"), {
  "heading": "Monitor ribavirin separately",
  "body": "When ribavirin is used in selected specialist regimens, add CBC and hemoglobin assessment because hemolytic anemia is a central risk. Reproductive safety requires review of the exact ribavirin product’s contraindications, pregnancy testing and prevention instructions for the patient and relevant partner. Kidney function can require ribavirin dose changes even when Epclusa itself needs no renal adjustment. Do not transfer a ribavirin-free simplified monitoring plan to a ribavirin-containing regimen or invent one universal renal dose or contraception schedule."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "monitoring-delivery"), {
  "summary": "Eligible simplified noncirrhotic patients generally need no other routine on-treatment laboratory monitoring beyond indicated glucose or INR review; cirrhosis, ribavirin, HBV and other clinical risks change the plan.",
  "application": "Support adherence and medication access, review new products, arrange risk-based monitoring, and act promptly on liver injury or decompensation.",
  "keyPoints": [
    "Assess the actual gap before deciding how to manage missed treatment.",
    "Monitor glucose and INR during and after treatment when indicated.",
    "ALT stopping thresholds use the patient’s baseline.",
    "Ribavirin adds anemia and reproductive safety requirements."
  ]
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "monitoring-delivery").check, {
  "question": "Which patient needs proactive glucose review during DAA therapy?",
  "choices": [
    "A patient using insulin",
    "A patient taking only an antacid without diabetes",
    "A patient without diabetes who uses no glucose-lowering medicines",
    "No patient because HCV clearance cannot change glucose control"
  ],
  "answer": 0,
  "rationale": "Patients taking diabetes medicines, including insulin, can develop hypoglycemia as HCV clearance changes hepatic function and glucose control. Counsel and monitor during and after treatment, and coordinate medication adjustment according to the measured response.",
  "reviewHref": "#monitoring-delivery"
});
Object.assign(hepatitisCModule.references.find((reference) => reference.label === "May 2026 Initial Treatment Guidance"), {
  "label": "AASLD/IDSA: initial treatment, reviewed January 2025",
  "href": "https://www.hcvguidelines.org/wp-content/uploads/2026/05/AASLD-IDSA_HCVGuidance_InitTreat_20260513_protected.pdf"
});
Object.assign(hepatitisCModule.references.find((reference) => reference.label === "Current MAVYRET Prescribing Information"), {
  "label": "Mavyret: U.S. label revised June 2025",
  "href": "https://www.rxabbvie.com/pdf/mavyret_pi.pdf"
});
Object.assign(hepatitisCModule.references.find((reference) => reference.label === "Current EPCLUSA Prescribing Information"), {
  "label": "Epclusa: U.S. label revised April 2022",
  "href": "https://www.gilead.com/-/media/files/pdfs/medicines/liver-disease/epclusa/epclusa_pi.pdf"
});
hepatitisCModule.references.push(...[
  {
    "label": "Harvoni: U.S. label revised December 2024",
    "href": "https://www.gilead.com/-/media/files/pdfs/medicines/liver-disease/harvoni/harvoni_pi.pdf"
  },
  {
    "label": "AASLD/IDSA: simplified treatment without cirrhosis",
    "href": "https://www.hcvguidelines.org/guidance/simplified-hcv-treatment-for-treatment-naive-adults-without-cirrhosis/"
  },
  {
    "label": "AASLD/IDSA: simplified treatment with compensated cirrhosis",
    "href": "https://www.hcvguidelines.org/guidance/simplified-hcv-treatment-algorithm-for-treatment-naive-adults-with-compensated-cirrhosis/"
  },
  {
    "label": "AASLD/IDSA: treatment monitoring and incomplete adherence",
    "href": "https://www.hcvguidelines.org/guidance/monitoring-patients-who-are-starting-hcv-treatment-are-on-treatment-or-have-completed-therapy/"
  }
]);

// Reconcile HCV pretreatment, cure and follow-up against the book and approved guidance.
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "pretreatment-safety").lesson.find((body) => body.heading === "Collect baseline evidence"), {
  "heading": "Collect baseline evidence",
  "body": "Confirm current HCV infection and stage fibrosis before choosing the pathway. General AASLD/IDSA monitoring guidance calls for CBC, INR, hepatic function panel and eGFR within six months before DAAs, with HCV RNA before treatment. Simplified pathways have their own laboratory windows and requirements; use the selected pathway rather than adding INR or genotype to every patient automatically. Genotype and resistance testing depend on the regimen and clinical context, including genotype 3 compensated cirrhosis when choosing Epclusa."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "pretreatment-safety").lesson.find((body) => body.heading === "Screen coinfections"), {
  "heading": "Screen coinfections",
  "body": "Assess HIV and obtain HBsAg, total anti-HBc and anti-HBs before DAAs. HBsAg positivity requires baseline HBV DNA and a coordinated HBV plan; it excludes simplified HCV treatment but does not contraindicate HCV treatment itself. Start indicated HBV treatment before or with DAAs. If HBV DNA is low or undetectable and does not meet treatment criteria, choose prophylaxis through twelve weeks after DAAs or monthly HBV DNA monitoring during and immediately after treatment. With monitoring, start HBV therapy for a rise greater than tenfold above baseline or a level above 1,000 IU/mL when baseline DNA was undetectable or unquantifiable. Resolved or isolated-core infection has no established universal DNA schedule; consider reactivation with unexplained aminotransferase elevation during or after DAAs."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "pretreatment-safety").lesson.find((body) => body.heading === "Reconcile everything"), {
  "heading": "Reconcile everything",
  "body": "Review prescription medicines, over-the-counter products and herbal or dietary supplements before DAAs and whenever a medicine changes. Include acid suppressants, statins, anticoagulants, antiarrhythmics, antiseizure drugs, antiretrovirals and transplant medicines. Use the exact DAA and concomitant-product labels and an appropriate interaction resource, then coordinate the actual substitution, dose, timing or monitoring plan. Medication reconciliation is more than recording that an interaction check occurred."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "pretreatment-safety").lesson.find((body) => body.heading === "Confirm delivery"), {
  "heading": "Confirm delivery",
  "body": "Before the first dose, review pregnancy and breastfeeding context, prior treatment, formulation, swallowing needs, food instructions, planned duration and medication access. Offer pregnancy testing and counseling when applicable; current pregnancy is outside simplified treatment, and ribavirin has separate reproductive contraindications and prevention requirements. Teach administration, missed-dose actions and how to contact the treating team about new medicines or supply gaps. A prescription alone does not establish that the course can be delivered."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "pretreatment-safety"), {
  "summary": "Pretreatment assessment connects current infection, fibrosis, the selected laboratory pathway, interactions, coinfections and medication delivery.",
  "application": "Document why the pathway applies, complete the indicated testing, and assign a concrete HBV, interaction and supply plan before DAAs.",
  "keyPoints": [
    "Use the selected pathway’s laboratory requirements.",
    "HBsAg positivity needs HBV DNA and a coordinated plan.",
    "Review prescribed and nonprescription products.",
    "Pregnancy and ribavirin require separate safety assessment."
  ]
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "pretreatment-safety").check, {
  "question": "Which HBV panel is needed before DAA therapy?",
  "choices": [
    "HBsAg, anti-HBs and total anti-HBc",
    "HBsAg alone because prior infection cannot reactivate",
    "HCV antibody alone without HBV testing",
    "Anti-HBs alone as proof that HBV reactivation is impossible"
  ],
  "answer": 0,
  "rationale": "The three markers assess current and prior HBV infection. HBsAg-positive patients need HBV DNA and an indicated treatment, prophylaxis or monitoring plan; resolved or isolated-core infection still matters when unexplained liver-test elevations occur.",
  "reviewHref": "#pretreatment-safety"
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "svr-follow-up").lesson.find((body) => body.heading === "Confirm SVR"), {
  "heading": "Confirm SVR",
  "body": "Quantitative HCV RNA twelve or more weeks after treatment documents SVR12; undetectable or nonquantifiable RNA is consistent with cure. The simplified pathways also assess a hepatic panel to evaluate transaminase normalization. Current AASLD/IDSA guidance permits SVR4 as an alternative measure in patients without cirrhosis and without prior DAA exposure, particularly when barriers may prevent an SVR12 assessment. This four-week option is not a universal replacement or end-of-treatment test. Beyond SVR4, repeat RNA can be considered if ALT rises above the upper limit of normal."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "svr-follow-up").lesson.find((body) => body.heading === "Follow noncirrhotic cure"), {
  "heading": "Follow noncirrhotic cure",
  "body": "After cure, patients without cirrhosis receive standard medical care unless ongoing exposure or another liver disease requires follow-up. Persistently abnormal liver tests need evaluation for other causes, including alcohol-related or steatotic liver disease. Do not schedule routine HCC surveillance solely because a noncirrhotic patient previously had HCV, and do not dismiss abnormal liver tests merely because RNA is negative."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "svr-follow-up").lesson.find((body) => body.heading === "Follow cirrhotic cure"), {
  "heading": "Follow cirrhotic cure",
  "body": "Cirrhosis still requires HCC and portal-hypertension surveillance after SVR. HCV Guidance describes liver ultrasound, with or without AFP, every six months; implement surveillance through the current HCC guidance and the patient’s specialist plan. Continue indicated variceal surveillance and other cirrhosis care. Viral eradication lowers liver risk, but it does not prove that cirrhosis or HCC risk has disappeared."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "svr-follow-up").lesson.find((body) => body.heading === "Detect reinfection"), {
  "heading": "Detect reinfection",
  "body": "Cure does not provide immunity. With ongoing HCV exposure risk, test HCV RNA at least annually; a new aminotransferase flare or unexplained hepatic dysfunction warrants prompt evaluation for recurrence and other causes. Antibody remains positive in most people after cure and cannot distinguish new infection. Pair follow-up with risk-reduction counseling, sterile injection equipment and access to prevention services."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "svr-follow-up"), {
  "summary": "SVR12 documents cure; a limited SVR4 alternative can reduce loss to follow-up. Cirrhosis, other liver disease and ongoing exposure determine continuing care.",
  "application": "Schedule the appropriate post-treatment RNA test, record its result, and assign follow-up for cirrhosis, abnormal liver tests and exposure risk.",
  "keyPoints": [
    "SVR12 uses RNA twelve or more weeks after treatment.",
    "SVR4 is a limited option without cirrhosis or prior DAA exposure.",
    "Cirrhosis surveillance continues after cure.",
    "Ongoing exposure requires RNA testing for recurrence."
  ]
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "svr-follow-up").check, {
  "question": "Which result documents SVR12?",
  "choices": [
    "Undetectable or nonquantifiable HCV RNA twelve or more weeks after therapy",
    "Reactive HCV antibody twelve weeks after therapy",
    "Normal bilirubin on the last treatment day",
    "Undetectable RNA on the last treatment day alone"
  ],
  "answer": 0,
  "rationale": "SVR12 is a post-treatment RNA endpoint, not an antibody or end-of-treatment result. Current guidance also permits SVR4 as a limited alternative for patients without cirrhosis or prior DAA exposure, especially when access barriers threaten SVR12 follow-up.",
  "reviewHref": "#svr-follow-up"
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "integrated-case").lesson.find((body) => body.heading === "Define infection and liver state"), {
  "heading": "Define infection and liver state",
  "body": "A reactive antibody establishes possible exposure, not current infection; confirm with HCV RNA and link the patient to care. Document fibrosis, current and prior decompensation, prior HCV treatment, kidney function, HIV, HBV and pregnancy context before selecting the pathway. Use HCC assessment when the cirrhosis pathway requires it. Each finding should change the plan where appropriate rather than become an unreviewed checklist entry."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "integrated-case").lesson.find((body) => body.heading === "Engineer the regimen"), {
  "heading": "Engineer the regimen",
  "body": "Document why the exact regimen and pathway fit the patient. Verify all active components, dose, formulation, food instructions, duration, genotype or resistance needs and interactions. Coordinate changes with the treating team, arrange medication access, and teach administration and missed-dose actions. A pathway exclusion requires an appropriate alternative assessment; it does not establish that HCV must remain untreated."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "integrated-case").lesson.find((body) => body.heading === "Engineer monitoring"), {
  "heading": "Engineer monitoring",
  "body": "Assign clinically indicated contact to review adherence, symptoms and new medicines. Arrange glucose or INR monitoring during and after DAAs when indicated; add the appropriate HBV, hepatic and ribavirin safety plan. Record the response to a treatment interruption from its actual timing, length and regimen. New decompensation findings need urgent evaluation; medication supply or a negative RNA result does not replace safety follow-up."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "integrated-case").lesson.find((body) => body.heading === "Engineer the cure transition"), {
  "heading": "Engineer the cure transition",
  "body": "Before the course ends, assign a post-treatment RNA date and a clinician to review the result. SVR12 remains the standard assessment; SVR4 can be considered in the defined noncirrhotic group without prior DAA exposure when follow-up barriers matter. Continue cirrhosis surveillance, evaluate persistent liver-test abnormalities and arrange RNA testing with ongoing risk. Review HAV and HBV vaccination when susceptible and prevention services. At a change of clinician or care setting, transfer the regimen, remaining supply, interruption history, pending results and follow-up plan explicitly."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "integrated-case"), {
  "summary": "Complete care links RNA-confirmed infection, staged treatment, medication delivery, safety monitoring, documented cure and risk-based follow-up.",
  "application": "Assign a clinician and date for pending tests, interaction changes, supply problems, cure assessment and indicated surveillance.",
  "keyPoints": [
    "RNA establishes current infection.",
    "Fibrosis and prior treatment determine the pathway.",
    "Interactions and supply need concrete plans.",
    "Document cure and transfer follow-up responsibility."
  ]
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "integrated-case").check, {
  "question": "Which plan best completes HCV treatment and follow-up?",
  "choices": [
    "Confirm infection with RNA, stage fibrosis, deliver the appropriate regimen, document post-treatment cure testing and arrange risk-based follow-up",
    "Stop follow-up when the last tablet is taken because completion proves cure",
    "Use a reactive antibody after treatment as the cure test",
    "Cancel cirrhosis surveillance after an early negative RNA"
  ],
  "answer": 0,
  "rationale": "Treatment completion alone does not prove cure. Plan post-treatment RNA assessment, evaluate ongoing liver disease and exposure risk, and continue indicated cirrhosis surveillance. A limited SVR4 option does not remove those follow-up responsibilities.",
  "reviewHref": "#integrated-case"
});

// Reconcile HCV diagnosis, natural history and staging with approved sources.
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "virus-natural-history").lesson.find((body) => body.heading === "Map replication"), {
  "heading": "Map replication",
  "body": "HCV has a positive-sense, single-stranded RNA genome translated into a polyprotein. NS3/4A protease processes viral proteins, NS5A supports RNA replication and virion assembly, and NS5B is the RNA-dependent RNA polymerase. Error-prone copying produces closely related variants within a host, termed quasispecies. These distinct targets explain combination DAA therapy; genetic diversity alone does not establish the patient’s fibrosis stage or prognosis."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "virus-natural-history").lesson.find((body) => body.heading === "Map transmission"), {
  "heading": "Map transmission",
  "body": "HCV is transmitted primarily through blood exposure, particularly shared injection equipment. Perinatal, occupational, unsafe health-care procedures and some sexual exposures also transmit infection. There is no HCV vaccine. Pair diagnosis and treatment with sterile equipment, blood-exposure precautions, prevention services and repeat testing when exposure continues; cure does not confer immunity."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "virus-natural-history").lesson.find((body) => body.heading === "Map progression"), {
  "heading": "Map progression",
  "body": "Acute infection may clear spontaneously or persist. Persistent infection can cause inflammation and progressive fibrosis, leading to cirrhosis, portal hypertension, decompensation and hepatocellular carcinoma. Progression varies and is not necessarily linear; alcohol, metabolic disease or steatosis, HIV coinfection, immunosuppression and older age at infection can increase risk. Normal ALT or absence of symptoms does not exclude significant fibrosis, and the HCV RNA level does not measure liver-disease severity."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "virus-natural-history").lesson.find((body) => body.heading === "Treat acute infection"), {
  "heading": "Treat acute infection",
  "body": "For acute HCV with quantifiable RNA, AASLD/IDSA recommends treatment without waiting solely for spontaneous clearance. Select a regimen recommended for chronic infection that fits the patient’s liver state and other eligibility criteria; do not shorten the course merely because infection is acute. Assess hepatic severity, counsel about transmission and link promptly to treatment and prevention services. A single undetectable RNA result does not establish spontaneous clearance when acute infection is suspected, because viremia may be transiently suppressed."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "virus-natural-history"), {
  "summary": "HCV is a positive-sense RNA virus with related variants within a host. Acute infection can clear, while persistent infection can cause progressive liver injury.",
  "application": "Connect exposure history and serial testing with fibrosis and clinical context. Treat confirmed acute viremia through an appropriate pathway rather than waiting solely for clearance.",
  "keyPoints": [
    "NS5B copies viral RNA; NS3/4A and NS5A have different functions.",
    "No HCV vaccine exists, and cure does not confer immunity.",
    "Symptoms, ALT and viral load cannot substitute for fibrosis assessment.",
    "Confirmed acute viremia uses treatment without a clearance waiting period."
  ]
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "virus-natural-history").check, {
  "question": "Which HCV protein is the RNA-dependent RNA polymerase?",
  "choices": [
    "NS5B",
    "NS5A, which supports replication and assembly",
    "NS3/4A, which processes viral proteins",
    "HBsAg, a hepatitis B surface marker"
  ],
  "answer": 0,
  "rationale": "NS5B copies the HCV RNA genome. NS3/4A is a protease, NS5A supports replication and assembly, and HBsAg is an HBV marker rather than the HCV polymerase.",
  "reviewHref": "#virus-natural-history"
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "screening-diagnosis").lesson.find((body) => body.heading === "Screen broadly"), {
  "heading": "Screen broadly",
  "body": "CDC recommends at least one HCV screen for adults aged eighteen or older and screening during every pregnancy, except in settings where HCV RNA prevalence is below 0.1%. Test people with specified risk factors regardless of setting prevalence. Repeat testing periodically with ongoing risk, including current sharing of injection equipment or maintenance hemodialysis, and test anyone who requests it. Begin routine screening with antibody and reflex RNA when reactive; recent exposure and impaired antibody response can require RNA directly."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "screening-diagnosis").lesson.find((body) => body.heading === "Use reflex diagnosis"), {
  "heading": "Use reflex diagnosis",
  "body": "Automatically perform HCV RNA nucleic-acid testing after a reactive antibody result, ideally from a sample collected at the same visit. Reactive antibody can reflect current infection, resolved infection or a biologic false-positive result. Detectable RNA establishes current infection and prompts linkage to care; CDC recommends confirming RNA positivity in a subsequent blood sample before antiviral treatment. Reactive antibody with undetectable RNA means no current infection in most cases. Repeat RNA when recent exposure, clinical disease or specimen concerns warrant it; a different antibody assay can help distinguish resolved infection from false positivity when needed."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "screening-diagnosis").lesson.find((body) => body.heading === "Handle early exposure"), {
  "heading": "Handle early exposure",
  "body": "RNA usually becomes detectable about one to two weeks after exposure; antibody commonly takes eight to eleven weeks. With possible exposure in the past six months, obtain RNA even if antibody is negative, and consider RNA when immunocompromise could impair antibody detection. RNA positivity with negative antibody or documented antibody seroconversion supports acute infection; RNA positivity alone does not distinguish acute from chronic infection. Repeat RNA if suspicion remains despite a negative result, because early infection can show fluctuating or transiently undetectable viremia."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "screening-diagnosis").lesson.find((body) => body.heading === "Diagnose reinfection with RNA"), {
  "heading": "Diagnose reinfection with RNA",
  "body": "Antibody usually remains reactive after spontaneous clearance or cure. Use RNA to evaluate reinfection after a new exposure or unexplained liver-test elevation. Arrange at least annual RNA testing when exposure risk continues after cure, with earlier evaluation for a new aminotransferase flare or hepatic dysfunction. A persistently reactive antibody is neither proof of reinfection nor evidence that treatment failed."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "screening-diagnosis"), {
  "summary": "Reactive antibody may indicate current infection, resolved infection or false positivity. RNA identifies current viremia; timing and prior tests help establish acute infection.",
  "application": "Arrange reflex RNA and follow the result through care linkage. Use exposure timing, immune status and prior results to decide when a negative test needs repeat RNA.",
  "keyPoints": [
    "Reactive antibody alone does not confirm current infection.",
    "RNA can precede antibody after recent exposure.",
    "RNA positivity alone does not distinguish acute from chronic infection.",
    "Use RNA to evaluate reinfection after clearance or cure."
  ]
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "screening-diagnosis").check, {
  "question": "What establishes current HCV infection after a reactive antibody result?",
  "choices": [
    "Detectable HCV RNA",
    "A second reactive antibody without RNA testing",
    "Normal ALT without RNA testing",
    "HBsAg positivity without HCV RNA testing"
  ],
  "answer": 0,
  "rationale": "Detectable HCV RNA establishes current infection. Reactive antibody can reflect resolved infection or false positivity; CDC recommends repeat RNA in a subsequent sample before antiviral therapy. RNA positivity alone does not establish whether infection is acute or chronic.",
  "reviewHref": "#screening-diagnosis"
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "fibrosis-eligibility").lesson.find((body) => body.heading === "Calculate FIB-4"), {
  "heading": "Calculate FIB-4",
  "body": "FIB-4 = age in years × AST in U/L ÷ (platelet count in 10^9/L × √ALT in U/L). For age sixty, AST sixty-five, ALT sixty-four and platelets 150 × 10^9/L, the result is 60 × 65 ÷ (150 × 8) = 3.25. The simplified algorithms presume cirrhosis when FIB-4 is greater than 3.25; equality does not meet that specific criterion. A value at or below the threshold does not exclude cirrhosis established by other evidence. Use the correct platelet units and assess the result in context."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "fibrosis-eligibility").lesson.find((body) => body.heading === "Integrate cirrhosis evidence"), {
  "heading": "Integrate cirrhosis evidence",
  "body": "The simplified algorithms presume cirrhosis from FIB-4 greater than 3.25 or other evidence: transient-elastography stiffness greater than 12.5 kPa, a proprietary serum test above its cirrhosis cutoff, imaging nodularity or splenomegaly, platelets below 150,000/mm³, or prior biopsy showing cirrhosis. These are alternative qualifying findings, not a requirement that every test be positive. Biopsy is not routinely required. Normal bilirubin or a low FIB-4 cannot override documented cirrhosis evidence."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "fibrosis-eligibility").lesson.find((body) => body.heading === "Separate compensation"), {
  "heading": "Separate compensation",
  "body": "Assess both the current Child-Turcotte-Pugh score and any history of hepatic decompensation. Child-Pugh A can qualify for the compensated-cirrhosis simplified pathway when other criteria are met; current or prior decompensation or a score of seven or more excludes that pathway. AASLD/IDSA advises against NS3 protease-inhibitor regimens with current or prior decompensation or a current score of seven or more. Mavyret specifically contraindicates Child-Pugh B or C and any prior hepatic decompensation. A currently improved score does not erase a history of ascites, hepatic encephalopathy or variceal bleeding."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "fibrosis-eligibility").lesson.find((body) => body.heading === "Read exclusions correctly"), {
  "heading": "Read exclusions correctly",
  "body": "Choose the exact simplified pathway before applying its exclusions. Prior HCV treatment, current pregnancy, HBsAg positivity, known or suspected HCC and prior liver transplant require another approach. The compensated-cirrhosis simplified algorithm also excludes eGFR below 30 mL/min/1.73 m²; both simplified algorithms require another approach for HIV treated with a tenofovir disoproxil fumarate-containing regimen when eGFR is below 60. These pathway limits are not universal DAA renal contraindications: Mavyret needs no renal dose adjustment, including dialysis. Route excluded patients to the relevant guidance and specialist assessment rather than assuming HCV cannot be treated."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "fibrosis-eligibility"), {
  "summary": "Fibrosis evidence, current compensation and prior decompensation determine the appropriate treatment pathway and continuing liver care.",
  "application": "Calculate FIB-4 with correct units, integrate other cirrhosis evidence, and document why the chosen pathway applies. Arrange an alternative assessment for exclusions.",
  "keyPoints": [
    "FIB-4 greater than 3.25 is one cirrhosis criterion.",
    "Other evidence can establish cirrhosis despite a lower FIB-4.",
    "Current and prior decompensation matter for protease inhibitors.",
    "A simplified-pathway exclusion does not prohibit all HCV treatment."
  ]
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "fibrosis-eligibility").check, {
  "question": "Which finding excludes Mavyret even if the current Child-Pugh score is in class A?",
  "choices": [
    "A history of hepatic decompensation",
    "Reactive HCV antibody alone",
    "Normal platelet count alone",
    "Noncirrhotic status"
  ],
  "answer": 0,
  "rationale": "Mavyret is contraindicated with any prior hepatic decompensation as well as current Child-Pugh B or C. Current improvement does not erase that history; antibody reactivity, normal platelets and noncirrhotic status are not those contraindications.",
  "reviewHref": "#fibrosis-eligibility"
});
hepatitisCModule.references.push({
  "label": "AASLD/IDSA: management of acute HCV infection",
  "href": "https://www.hcvguidelines.org/guidance/management-of-acute-hcv-infection/"
});
hepatitisCModule.references.push({
  "label": "AASLD/IDSA: treatment timing and fibrosis progression",
  "href": "https://www.hcvguidelines.org/guidance/when-and-in-whom-to-initiate-hcv-therapy/"
});
hepatitisCModule.references.push({
  "label": "University of Washington: HCV RNA genome",
  "href": "https://www.hepatitisc.uw.edu/page/structure/hcv-rna"
});
hepatitisCModule.references.push({
  "label": "Blackard et al.: HCV quasispecies, 2010",
  "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3020841/"
});

// Reconcile HCV mechanisms, special cirrhosis and retreatment with approved sources.
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "daa-mechanisms").lesson.find((body) => body.heading === "Block protease"), {
  "heading": "Block protease",
  "body": "Glecaprevir, grazoprevir and voxilaprevir inhibit HCV NS3/4A protease, which cleaves the viral polyprotein into proteins needed for replication. The previr stem is a target clue, not proof of regimen eligibility. Review current Child-Pugh status and any prior hepatic decompensation before an NS3 inhibitor regimen; a currently improved score does not erase prior decompensation. Identify the full combination rather than treating the protease inhibitor alone as a complete course."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "daa-mechanisms").lesson.find((body) => body.heading === "Block the replication complex"), {
  "heading": "Block the replication complex",
  "body": "Pibrentasvir, velpatasvir and ledipasvir inhibit NS5A, a protein involved in viral RNA replication and assembly. The asvir stem helps distinguish this class from protease and polymerase inhibitors. Prior DAA exposure can select resistance-associated substitutions, especially in NS5A. Reconstruct the failed regimen and use its retreatment guidance; prior NS5A exposure does not mean that all subsequent NS5A-containing combinations are ineffective or that every salvage course requires a resistance assay."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "daa-mechanisms").lesson.find((body) => body.heading === "Block polymerase"), {
  "heading": "Block polymerase",
  "body": "Sofosbuvir is a nucleotide analog NS5B polymerase inhibitor: its active intracellular triphosphate is incorporated into viral RNA and terminates the chain. Dasabuvir is a nonnucleoside NS5B inhibitor, illustrated in older combinations. Both target NS5B; different drug names do not make sofosbuvir plus dasabuvir an appropriate complete regimen. Sofosbuvir is used with other indicated agents, not as HCV monotherapy. In older ritonavir-boosted combinations, ritonavir increases exposure to paritaprevir and is not an HCV-active DAA."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "daa-mechanisms").lesson.find((body) => body.heading === "Prefer pangenotypic design"), {
  "heading": "Prefer pangenotypic design",
  "body": "Glecaprevir/pibrentasvir pairs NS3/4A and NS5A inhibition; sofosbuvir/velpatasvir pairs NS5B and NS5A inhibition. These pangenotypic combinations treat multiple HCV genotypes, but their eligibility, food instructions and duration still differ. Genotype testing remains relevant in defined settings, including the compensated-cirrhosis simplified pathway when sofosbuvir/velpatasvir is selected and in retreatment. Complementary targets do not override contraindications, prior failure or interactions; choose a recommended full regimen for the actual patient."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "daa-mechanisms"), {
  "summary": "Map each HCV-active component to NS3/4A, NS5A or NS5B, then confirm that the complete combination fits the patient.",
  "application": "Explain the distinct targets in a recommended combination, and check liver state, prior treatment and interactions before accepting it.",
  "keyPoints": [
    "Previr identifies an NS3/4A protease inhibitor.",
    "Asvir identifies an NS5A inhibitor.",
    "Sofosbuvir and dasabuvir both target NS5B.",
    "Complementary targets still require a safe, recommended regimen."
  ]
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "daa-mechanisms").check, {
  "question": "Which listed option combines an NS3/4A inhibitor with an NS5A inhibitor?",
  "choices": [
    "Glecaprevir plus pibrentasvir",
    "Sofosbuvir alone",
    "Two NS5A inhibitors alone",
    "Ribavirin alone"
  ],
  "answer": 0,
  "rationale": "Glecaprevir inhibits NS3/4A and pibrentasvir inhibits NS5A. Sofosbuvir targets NS5B; neither a single agent nor two drugs from the same NS5A class constitute this complementary pairing. Regimen eligibility still requires liver-state and interaction review.",
  "reviewHref": "#daa-mechanisms"
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "cirrhosis-special").lesson.find((body) => body.heading === "Treat compensated disease carefully"), {
  "heading": "Treat compensated disease carefully",
  "body": "Treatment-naive adults with Child-Pugh A cirrhosis can use the compensated-cirrhosis simplified pathway only when every eligibility requirement is met. Calculate the current Child-Turcotte-Pugh score, document any prior ascites, encephalopathy or variceal bleeding, and obtain the required laboratory and ultrasound assessment. Genotype-specific testing applies when choosing sofosbuvir/velpatasvir. Prior decompensation requires another pathway even if the current score has improved; a normal bilirubin alone does not establish compensation or exclude cirrhosis."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "cirrhosis-special").lesson.find((body) => body.heading === "Exclude protease inhibitors"), {
  "heading": "Exclude protease inhibitors",
  "body": "Do not use NS3/4A protease-inhibitor regimens such as glecaprevir-, grazoprevir- or voxilaprevir-containing therapy in decompensated cirrhosis. AASLD/IDSA also advises against these regimens with prior decompensation or a current CTP score of seven or more. Product wording matters: Mavyret contraindicates Child-Pugh B or C and any prior hepatic decompensation, while Vosevi is not recommended in those settings. Renal dosing instructions do not override hepatic restrictions. Use the decompensated-cirrhosis guidance and expert care."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "cirrhosis-special").lesson.find((body) => body.heading === "Use expert decompensated regimens"), {
  "heading": "Use expert decompensated regimens",
  "body": "Refer Child-Pugh B or C disease to a clinician experienced in decompensated cirrhosis, ideally at a transplant center. AASLD/IDSA recommends sofosbuvir 400 mg/velpatasvir 100 mg daily with weight-based ribavirin for twelve weeks when ribavirin eligible, or twenty-four weeks without ribavirin when ineligible. For Child-Pugh C, start ribavirin at 600 mg/day and increase as tolerated under expert supervision. Prior sofosbuvir- or NS5A-based failure has a separate twenty-four-week sofosbuvir/velpatasvir-plus-ribavirin recommendation. Review renal function, anemia and pregnancy-related ribavirin risks; these are distinct pathways, not one universal twelve-week course."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "cirrhosis-special").lesson.find((body) => body.heading === "Maintain surveillance"), {
  "heading": "Maintain surveillance",
  "body": "Assess for hepatocellular carcinoma before therapy and continue cirrhosis surveillance after sustained virologic response. Cure does not necessarily resolve portal hypertension, ascites, encephalopathy or transplant need. Continue management of these complications, varices, nutrition and medicine safety alongside antiviral care. Transplant assessment and treatment timing need expert coordination; do not assume that viral clearance guarantees recovery of liver function or permits an NS3 inhibitor after prior decompensation."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "cirrhosis-special"), {
  "summary": "Current compensation and any prior decompensation govern hepatic safety. Decompensated disease needs expert care and a regimen matched to ribavirin eligibility and prior failure.",
  "application": "Document current CTP status and prior decompensation, apply the correct hepatic restriction, and coordinate antiviral treatment with continuing cirrhosis care.",
  "keyPoints": [
    "Child-Pugh A requires full simplified-pathway eligibility.",
    "Current or prior decompensation excludes NS3-inhibitor regimens.",
    "Ribavirin eligibility and prior failure change the regimen and duration.",
    "SVR does not end cirrhosis surveillance or transplant assessment."
  ]
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "cirrhosis-special").check, {
  "question": "Which listed choice should be avoided in Child-Pugh C cirrhosis?",
  "choices": [
    "A voxilaprevir-containing regimen",
    "Expert-directed sofosbuvir/velpatasvir treatment",
    "Assessment of ribavirin eligibility and anemia risk",
    "Transplant-center evaluation"
  ],
  "answer": 0,
  "rationale": "Voxilaprevir is an NS3/4A protease inhibitor, and Vosevi is not recommended in Child-Pugh B or C or with prior hepatic decompensation. Expert-directed nonprotease treatment, ribavirin assessment and transplant evaluation are appropriate parts of care.",
  "reviewHref": "#cirrhosis-special"
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "retreatment-prevention").lesson.find((body) => body.heading === "Reconstruct the first course"), {
  "heading": "Reconstruct the first course",
  "body": "Confirm the RNA result and reconstruct every prior HCV agent, duration, start and stop date, missed doses, interruption, food instructions, acid suppression and other interacting medicines. Review genotype, fibrosis, current and prior hepatic decompensation, and the timing of RNA responses, documented cure and subsequent exposures. Recurrent viremia can represent relapse or reinfection; reactive antibody alone cannot distinguish them. A new reinfection after cure follows initial-treatment guidance rather than automatically becoming a prior-DAA-failure salvage case."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "retreatment-prevention").lesson.find((body) => body.heading === "Use current salvage guidance"), {
  "heading": "Use current salvage guidance",
  "body": "Vosevi contains sofosbuvir 400 mg, velpatasvir 100 mg and voxilaprevir 100 mg in one daily tablet taken with food. Its twelve-week adult label covers genotype 1 through 6 after an NS5A-containing regimen, or genotype 1a or 3 after sofosbuvir without an NS5A inhibitor, without cirrhosis or with Child-Pugh A cirrhosis. AASLD/IDSA recommendations are categorized by the failed regimen and may add ribavirin or use another combination. For example, genotype 3 with cirrhosis after sofosbuvir-based failure adds weight-based ribavirin unless contraindicated. Vosevi is not recommended with Child-Pugh B or C or any prior hepatic decompensation."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "retreatment-prevention").lesson.find((body) => body.heading === "Do not repeat blindly"), {
  "heading": "Do not repeat blindly",
  "body": "Use the specific failed-regimen guidance rather than automatically repeating the same course or assigning Vosevi to every recurrence. After glecaprevir/pibrentasvir failure without decompensation, guidance includes glecaprevir/pibrentasvir plus sofosbuvir and weight-based ribavirin for sixteen weeks, or sofosbuvir/velpatasvir/voxilaprevir for twelve weeks; the latter adds ribavirin with compensated cirrhosis. Resistance context can matter, especially after multiple DAA failures, but a resistance assay is not universally required for every salvage regimen. Seek expert assessment for complex failure, decompensation, contraindications or uncertain duration."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "retreatment-prevention").lesson.find((body) => body.heading === "Prevent reinfection"), {
  "heading": "Prevent reinfection",
  "body": "Use HCV RNA to assess reinfection after clearance because antibody is expected to remain reactive. Guidance recommends at least annual RNA testing after clearance or successful treatment in people who inject drugs with recent injection use, with earlier assessment when new exposure or clinical concern warrants it. Offer sterile injection equipment, syringe services, medications for opioid use disorder, naloxone and safer-sex counseling; vaccinate against HAV and HBV when susceptible. Active or recent drug use or concern about reinfection is not a contraindication to DAA treatment. Treat confirmed reinfection through the appropriate initial-treatment pathway."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "retreatment-prevention"), {
  "summary": "Recurrent viremia needs an RNA-based assessment of prior response and new exposure. Salvage after DAA failure and treatment of reinfection follow different guidance.",
  "application": "Build the treatment and RNA-response timeline, distinguish failure from reinfection, and match therapy to the relevant guidance while providing prevention services.",
  "keyPoints": [
    "Reconstruct agents, interactions, adherence and RNA response.",
    "Salvage recommendations depend on the failed regimen and liver state.",
    "Reinfection after cure uses initial-treatment guidance.",
    "RNA testing and harm reduction continue; drug use alone does not exclude treatment."
  ]
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "retreatment-prevention").check, {
  "question": "What is the appropriate first assessment after RNA-confirmed recurrence following a DAA course?",
  "choices": [
    "Review prior agents, adherence, interactions, liver state, RNA response and subsequent exposure",
    "Repeat the same regimen automatically",
    "Use reactive antibody alone to classify relapse versus reinfection",
    "Stop follow-up because a DAA course was completed"
  ],
  "answer": 0,
  "rationale": "Reconstruct the prior course and RNA-response timeline, and assess new exposure and liver state. Failure and reinfection require different pathways; reactive antibody can persist after cure and cannot classify recurrence. Do not repeat a course or abandon follow-up without that assessment.",
  "reviewHref": "#retreatment-prevention"
});
hepatitisCModule.references.push({
  "label": "AASLD/IDSA: decompensated cirrhosis",
  "href": "https://www.hcvguidelines.org/guidance/patients-with-decompensated-cirrhosis/"
});
hepatitisCModule.references.push({
  "label": "AASLD/IDSA: retreatment after prior therapy failure",
  "href": "https://www.hcvguidelines.org/guidance/retreatment-of-persons-in-whom-prior-therapy-failed/"
});
hepatitisCModule.references.push({
  "label": "AASLD/IDSA: sofosbuvir-based treatment failures",
  "href": "https://www.hcvguidelines.org/guidance/sofosbuvir-based-and-elbasvir-grazoprevir-treatment-failures/"
});
hepatitisCModule.references.push({
  "label": "AASLD/IDSA: glecaprevir/pibrentasvir treatment failures",
  "href": "https://www.hcvguidelines.org/guidance/glecaprevir-pibrentasvir-treatment-failures/"
});
hepatitisCModule.references.push({
  "label": "AASLD/IDSA: HCV care for people who inject drugs",
  "href": "https://www.hcvguidelines.org/guidance/key-populations-identification-and-management-of-hcv-in-people-who-inject-drugs/"
});
hepatitisCModule.references.push({
  "label": "Viekira Pak: archived FDA label, mechanism section (2019)",
  "href": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/206619s020lbl.pdf"
});
Object.assign(hepatitisCModule.references.find((reference) => reference.href === "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=17ffc094-8ca7-45d2-80d8-fd043bc9a221&type=display"), {
  "label": "Vosevi: U.S. label revised November 2019",
  "href": "https://www.gilead.com/-/media/files/pdfs/medicines/liver-disease/vosevi/vosevi_pi.pdf"
});

// Product-specific ribavirin safety and historical HCV treatment context.
hepatitisCModule.submodules.splice(hepatitisCModule.submodules.findIndex((lesson) => lesson.slug === "initial-regimens") + 1, 0, {
  "slug": "other-daa-products",
  "title": "Identify Other DAA Products and Their Limits",
  "visual": "hepatitis-c-other-daa-products",
  "summary": "The complete product, genotype, treatment history and liver state govern use. Distinguish currently labeled products from historical regimen examples.",
  "concepts": [
    "Harvoni",
    "Sovaldi",
    "Zepatier",
    "Viekira Pak",
    "Product labels"
  ],
  "application": "Verify the full combination and its precise label before applying a dose, resistance test or interaction rule.",
  "lesson": [
    {
      "heading": "Distinguish a combination from one component",
      "body": "Harvoni combines ledipasvir 90 mg, an NS5A inhibitor, with sofosbuvir 400 mg, an NS5B inhibitor, in the usual adult tablet taken once daily with or without food. Sovaldi supplies sofosbuvir 400 mg once daily with or without food as one component of an indicated combination; it is not a complete HCV monotherapy regimen. The Sovaldi label retains older genotype-specific ribavirin and interferon combinations. Those labeled historical courses do not replace current AASLD/IDSA initial-treatment recommendations or establish a universal duration."
    },
    {
      "heading": "Apply Zepatier genotype and resistance requirements",
      "body": "Zepatier pairs elbasvir, an NS5A inhibitor, with grazoprevir, an NS3/4A inhibitor. The adult 50 mg/100 mg tablet is taken once daily with or without food for indicated genotype 1 or 4 infection; it is not pangenotypic. Before genotype 1a treatment, assess baseline NS5A resistance-associated substitutions at positions 28, 30, 31 and 93. For treatment-naive or prior peginterferon/ribavirin-experienced genotype 1a adults, the label specifies twelve weeks without these substitutions, or sixteen weeks plus ribavirin when present. This defined label pathway is not a universal salvage plan after any DAA failure."
    },
    {
      "heading": "Keep Zepatier safety specific",
      "body": "Zepatier is contraindicated in Child-Pugh B or C and with any history of hepatic decompensation. It needs no renal dose adjustment, including during hemodialysis, but accompanying ribavirin has separate renal restrictions. Obtain hepatic tests before treatment and at week eight; a sixteen-week course adds week-twelve testing. Contraindicated combinations include OATP1B1/3 inhibitors such as cyclosporine and specified HIV protease inhibitors, strong CYP3A inducers and efavirenz. Tacrolimus is a different case: the label calls for frequent whole-blood concentrations, renal-function assessment and adverse-effect monitoring. Do not convert every interaction into the same avoidance rule."
    },
    {
      "heading": "Recognize historical Viekira Pak administration",
      "body": "The archived December 2019 Viekira Pak label describes a genotype 1 regimen with two ombitasvir/paritaprevir/ritonavir 12.5 mg/75 mg/50 mg tablets each morning and one dasabuvir 250 mg tablet twice daily, taken with meals. Ombitasvir inhibits NS5A, paritaprevir inhibits NS3/4A, and dasabuvir is a nonnucleoside NS5B inhibitor; ritonavir boosts paritaprevir exposure. Genotype, cirrhosis and prior treatment determine whether ribavirin and a longer course are required. Recognize this older combination without inferring present market availability or making it a default initial regimen."
    },
    {
      "heading": "Interpret historical Viekira interactions precisely",
      "body": "The archived Viekira Pak label contraindicates Child-Pugh B or C, ethinyl estradiol-containing products, gemfibrozil and specified interacting drugs. Ethinyl estradiol is stopped before the course and may be restarted approximately two weeks after completion; arrange suitable alternative contraception, particularly if ribavirin is used. Gemfibrozil strongly inhibits CYP2C8 and increases dasabuvir exposure. CYP3A-related examples include oral midazolam, triazolam, selected statins and sildenafil used for pulmonary arterial hypertension; the colchicine contraindication applies with renal or hepatic impairment. These product-specific historical rules do not establish a universal ban on every estrogen, statin or CYP3A substrate."
    }
  ],
  "keyPoints": [
    "Harvoni is a combination; Sovaldi is one component.",
    "Zepatier genotype 1a requires the defined baseline NS5A assessment.",
    "Zepatier tacrolimus use requires frequent monitoring.",
    "Historical Viekira Pak instructions remain product specific."
  ],
  "check": {
    "question": "Which listed adult product has a once-daily tablet that may be taken with or without food and requires baseline NS5A assessment in genotype 1a?",
    "choices": [
      "Elbasvir/grazoprevir (Zepatier)",
      "Sofosbuvir alone as complete monotherapy",
      "Glecaprevir/pibrentasvir without food",
      "The archived Viekira Pak regimen as one once-daily tablet"
    ],
    "answer": 0,
    "rationale": "Zepatier is elbasvir/grazoprevir, taken once daily with or without food. Its genotype 1a pathway requires baseline NS5A resistance assessment. The other choices misstate regimen completeness, food requirements or historical Viekira Pak administration.",
    "reviewHref": "#other-daa-products"
  }
});
hepatitisCModule.submodules.splice(hepatitisCModule.submodules.findIndex((lesson) => lesson.slug === "monitoring-delivery") + 1, 0, {
  "slug": "ribavirin-safety",
  "title": "Match Ribavirin Safety to the Actual Product",
  "visual": "hepatitis-c-ribavirin-safety",
  "summary": "Ribavirin is an adjunct with early hemolysis and serious reproductive risks. The reviewed tablet and capsule labels have different renal and post-treatment pregnancy instructions.",
  "concepts": [
    "Hemolysis",
    "Hemoglobin",
    "CrCl",
    "Pregnancy",
    "Product identity"
  ],
  "application": "Identify the dispensed product, cardiac history, hemoglobin trend and renal function; document the exact dose and pregnancy-prevention plan.",
  "lesson": [
    {
      "heading": "Use an adjunct with product-specific administration",
      "body": "Oral ribavirin is a nucleoside analog used with other indicated HCV agents, not as HCV monotherapy. Its clinical mechanism in combination treatment is not fully understood; do not classify it as a substitute complete NS5B regimen. Take the reviewed tablets or capsules with food, and do not open, crush or break the reviewed capsules. Dose depends on the actual product, regimen, weight, renal function and tolerance. Peginterferon-combination contraindications must not be transferred uncritically to expert-directed DAA plus ribavirin treatment of selected decompensated patients."
    },
    {
      "heading": "Detect early hemolysis",
      "body": "Ribavirin can cause hemolytic anemia within the first one to two weeks and aggravate cardiac disease. Check hemoglobin before treatment and at weeks two and four, with further testing as clinically indicated. In the reviewed adult labels, patients without cardiac disease require dose reduction when hemoglobin is below 10 g/dL and discontinuation below 8.5 g/dL. Apply the exact product and regimen reduction schedule rather than guessing a new dose. Significant or unstable cardiac disease is a reason not to treat with ribavirin; hemoglobinopathies such as sickle-cell anemia or thalassemia are contraindications. New chest pain or other concerning symptoms need prompt assessment."
    },
    {
      "heading": "Use the separate stable-cardiac thresholds",
      "body": "For an adult with a history of stable cardiac disease, the reviewed labels use a hemoglobin fall of at least 2 g/dL during any four-week treatment period as a dose-reduction trigger. Hemoglobin below 12 g/dL despite four weeks at the reduced dose requires discontinuation. A fall from 13.1 to 10.9 g/dL is 2.2 g/dL and reaches the reduction trigger even though the result remains above 10 g/dL. Verify the product and combination instructions for the actual reduction; do not apply the no-cardiac threshold alone to this patient."
    },
    {
      "heading": "Resolve the renal formulation difference",
      "body": "The reviewed Aurobindo capsule label revised July 2023 contraindicates creatinine clearance below 50 mL/min. The reviewed Aurobindo tablet label revised May 2023 instead specifies a reduced dose when clearance is 50 mL/min or less: for 30 to 50 mL/min, alternate 200 mg one day with 400 mg the next; below 30 mL/min or during hemodialysis, use 200 mg daily under the labeled combination plan and close monitoring. Alternating 200 and 400 mg is not an instruction to give 300 mg every day. Identify the prescribed product and expert regimen before reconciling these instructions; a DAA partner needing no renal adjustment does not clear ribavirin."
    },
    {
      "heading": "Document the exact reproductive precautions",
      "body": "Ribavirin is embryotoxic and teratogenic and is contraindicated in pregnant patients and male patients whose partners are pregnant. Establish a negative pregnancy test immediately before treatment. The reviewed May 2023 Aurobindo tablet label requires at least two reliable contraceptive methods and monthly pregnancy testing during treatment and for six months afterward. The reviewed July 2023 Aurobindo capsule label requires effective contraception and periodic pregnancy testing during treatment, with nine months of avoidance after treatment for female patients and six months for female partners of male patients. These are exact reviewed-product instructions, not interchangeable rules for all manufacturers. Resolve differences with the current dispensed ribavirin label and specialist; do not automatically shorten a nine-month requirement using an older partner-drug label."
    },
    {
      "heading": "Review didanosine and overlapping toxicity",
      "body": "Didanosine with ribavirin is contraindicated: increased exposure to its active metabolite can cause fatal hepatic failure, peripheral neuropathy, pancreatitis and symptomatic hyperlactatemia or lactic acidosis. Zidovudine is a different interaction, associated with more severe anemia and neutropenia during peginterferon/ribavirin therapy; consider an appropriate alternative antiretroviral plan and monitor blood counts with the HIV clinician. The reviewed tablet label also warns of azathioprine-related myelotoxicity and pancytopenia. Review the actual co-treatment and clinical state rather than calling every nucleoside antiretroviral contraindicated."
    }
  ],
  "keyPoints": [
    "Early hemolysis needs baseline and early hemoglobin testing.",
    "Stable cardiac disease has a separate hemoglobin-trend rule.",
    "The reviewed capsules and tablets differ in renal instructions.",
    "Pregnancy avoidance depends on the exact ribavirin product.",
    "Didanosine is contraindicated; other overlapping toxicities require specific review."
  ],
  "check": {
    "question": "An adult without cardiac disease has hemoglobin 9.4 g/dL during a reviewed ribavirin combination course. Which action follows the labeled threshold?",
    "choices": [
      "Arrange the product-specific ribavirin dose reduction and continued assessment",
      "Continue the original dose solely because hemoglobin exceeds 8.5 g/dL",
      "Replace HCV RNA testing with antibody to diagnose the anemia",
      "Use the stable-cardiac four-week rule as the only criterion"
    ],
    "answer": 0,
    "rationale": "Below 10 g/dL triggers dose reduction for adults without cardiac disease in the reviewed labels; below 8.5 g/dL triggers discontinuation. The exact product and combination determine the reduction schedule. Cardiac-history rules and virologic testing do not replace this anemia assessment.",
    "reviewHref": "#ribavirin-safety"
  }
});
hepatitisCModule.submodules.splice(hepatitisCModule.submodules.findIndex((lesson) => lesson.slug === "ribavirin-safety") + 1, 0, {
  "slug": "interferon-context",
  "title": "Understand Interferon Without Making It the Default",
  "visual": "hepatitis-c-interferon-context",
  "summary": "Peginterferon teaches host antiviral signaling and a distinct toxicity profile. Historical sustained response is possible, while current HCV pathways generally favor interferon-free DAAs.",
  "concepts": [
    "Host response",
    "Pegylation",
    "Weekly injection",
    "Neuropsychiatric risk",
    "Blood counts"
  ],
  "application": "Distinguish historical interferon use from the current DAA pathway and recognize monitoring and urgent toxicity actions.",
  "lesson": [
    {
      "heading": "Connect host signaling and pegylation",
      "body": "Interferon alfa stimulates host antiviral responses rather than directly inhibiting an HCV NS3, NS5A or NS5B target. Attaching polyethylene glycol prolongs exposure and permits weekly administration compared with more frequent historical nonpegylated injections. The reviewed Pegasys label lists the usual adult chronic-hepatitis-C dose as peginterferon alfa-2a 180 mcg subcutaneously once weekly, with patient-specific modifications and combination requirements. This label example does not establish a current first-line HCV regimen or a universal dose for every interferon product, child or renal state."
    },
    {
      "heading": "Recognize historical sustained response",
      "body": "Interferon-based HCV treatment could achieve sustained virologic response. The reviewed Pegasys clinical-study tables used RNA response sustained twenty-four weeks after treatment; a blanket statement that interferon cannot produce cure is inaccurate. Current AASLD/IDSA initial-treatment pathways generally use interferon-free DAA combinations. Historical trial durations and cure assessments do not replace current regimen selection or the current RNA-based follow-up plan. Cost or older course notes alone do not justify substituting an interferon regimen without a patient-specific specialist assessment."
    },
    {
      "heading": "Act on serious toxicity",
      "body": "Peginterferon can cause or worsen serious neuropsychiatric, autoimmune, ischemic and infectious disorders. Flu-like symptoms, fatigue and injection-related effects can occur, but severe depression, suicidal thoughts or other severe psychiatric symptoms require immediate clinical intervention; the reviewed Pegasys label calls for immediate withdrawal and psychiatric intervention in severe cases. Autoimmune hepatitis, hepatic decompensation in cirrhosis, specified hypersensitivity and use in neonates or infants are contraindications. A ribavirin-containing combination adds ribavirin contraindications and reproductive precautions. Do not dismiss persistent fever, bleeding, new visual symptoms or worsening liver function as ordinary flu-like intolerance."
    },
    {
      "heading": "Monitor beyond flu-like symptoms",
      "body": "Before peginterferon, assess CBC with differential and platelets, biochemical and hepatic tests, renal function, thyroid and glucose status, relevant psychiatric and autoimmune history, and pregnancy status when applicable. The reviewed label calls for hematological tests at weeks two and four and biochemical tests at week four, followed by periodic testing. Thyroid, glucose, ocular and other reassessment depends on the label, baseline risks and symptoms; a trial measurement schedule is not automatically a universal clinical interval. New visual symptoms warrant prompt ophthalmic evaluation. Continue RNA-response assessment and evaluate serious infection, marrow suppression, thyroid dysfunction, pancreatitis or hepatic decompensation when suspected."
    }
  ],
  "keyPoints": [
    "Peginterferon acts through host antiviral responses.",
    "Pegylation supports weekly administration.",
    "Historical interferon-based therapy could achieve sustained response.",
    "Current HCV pathways generally favor interferon-free DAAs.",
    "Severe psychiatric toxicity requires urgent action."
  ],
  "check": {
    "question": "What best explains why pegylated interferon can be administered weekly?",
    "choices": [
      "Polyethylene glycol prolongs exposure to the host-response treatment",
      "Pegylation turns interferon into a direct NS5A inhibitor",
      "Weekly injection eliminates neuropsychiatric risk",
      "Pegylation makes every HCV course a single injection"
    ],
    "answer": 0,
    "rationale": "Pegylation prolongs exposure and supports weekly dosing. It does not turn interferon into a DAA, remove serious adverse effects or make one injection a complete HCV course.",
    "reviewHref": "#interferon-context"
  }
});
hepatitisCModule.submodules.find((lesson) => lesson.slug === "initial-regimens").lesson.push({
  "heading": "Explain expected effects and warning symptoms",
  "body": "Headache and fatigue are common in the reviewed modern DAA labels; gastrointestinal effects and other adverse reactions depend on the regimen and population. Ribavirin-containing treatment adds important anemia risk and may change tolerability. Counsel using the actual combination rather than comparing percentages across unrelated trials. Jaundice, new abdominal swelling, confusion, unusual bleeding or other worsening-liver symptoms need prompt assessment, particularly with advanced liver disease; do not dismiss them as routine fatigue."
});
hepatitisCModule.submodules.find((lesson) => lesson.slug === "initial-regimens").lesson.push({
  "heading": "Preserve product-specific storage",
  "body": "The reviewed Harvoni, Epclusa, Vosevi and Sovaldi adult tablet labels specify storage below 30 degrees C in the original container. The reviewed Mavyret label specifies at or below 30 degrees C and lists multiple tablet package presentations, including wallets and a bottle. Follow the exact dispensed product instructions rather than inventing a universal blister-only rule. Oral pellets have their own packaging and administration instructions. Temperature and container counseling does not establish that tablets may be crushed or given through a feeding tube."
});
hepatitisCModule.submodules.find((lesson) => lesson.slug === "interaction-engineering").lesson.push({
  "heading": "Distinguish Mavyret estrogen doses",
  "body": "The reviewed June 2025 Mavyret label permits use with products containing 20 mcg or less of ethinyl estradiol; products containing more than 20 mcg are not recommended because of ALT-elevation risk. Do not translate this into a ban on every estrogen product or import the archived Viekira Pak rule. Verify the actual hormone, dose and product, coordinate an appropriate alternative when necessary, and maintain the exact ribavirin pregnancy-prevention requirements if ribavirin is used."
});
hepatitisCModule.submodules.find((lesson) => lesson.slug === "interaction-engineering").lesson.push({
  "heading": "Differentiate Mavyret HIV and statin rules",
  "body": "With Mavyret, atazanavir is contraindicated, whereas darunavir, lopinavir, ritonavir and efavirenz are not recommended in the reviewed label. Atorvastatin, lovastatin and simvastatin are not recommended because increased statin exposure can cause myopathy or rhabdomyolysis; pravastatin requires a 50 percent dose reduction, and rosuvastatin must not exceed 10 mg daily. These are named product-specific actions. Coordinate HIV and lipid-treatment changes with the responsible clinician rather than stopping effective co-treatment without a plan or calling every agent contraindicated."
});
Object.assign(hepatitisCModule.submodules.find((lesson) => lesson.slug === "initial-regimens").lesson.find((body) => body.heading === "Do not preserve retired clutter"), {
  "heading": "Separate historical and current use",
  "body": "The book’s older interferon and Viekira-era regimens provide historical context. The reviewed simplified adult pathways instead specify glecaprevir/pibrentasvir or sofosbuvir/velpatasvir for eligible initial treatment. Do not use an older table or pangenotypic activity alone to establish a current default regimen, retreatment plan or duration. Match the patient to the applicable guidance and the exact product label."
});
Object.assign(hepatitisCModule, {
  "description": "Move from reflex diagnosis and fibrosis staging to pangenotypic therapy, interaction engineering, sustained virologic response, cirrhosis surveillance, retreatment, and reinfection prevention. Includes product-specific ribavirin safety and carefully distinguished historical interferon and DAA examples.",
  "topics": [
    "HCV RNA",
    "FIB-4",
    "NS3/4A",
    "NS5A",
    "NS5B",
    "Mavyret",
    "Epclusa",
    "Drug interactions",
    "SVR12",
    "Cirrhosis",
    "Retreatment",
    "Reinfection",
    "Other DAA products",
    "Ribavirin hemolysis",
    "Ribavirin product precautions",
    "Interferon context"
  ],
  "outcomes": [
    "Explain HCV replication, transmission, and natural history.",
    "Diagnose current infection with reflex RNA testing.",
    "Stage fibrosis and liver compensation before treatment.",
    "Identify simplified-treatment eligibility and exclusions.",
    "Connect DAA name stems to viral targets.",
    "Select and administer current pangenotypic regimens.",
    "Engineer a safe pretreatment interaction plan.",
    "Monitor adherence, safety, glucose, and anticoagulation.",
    "Confirm cure with SVR12 testing.",
    "Continue cirrhosis surveillance after cure.",
    "Recognize retreatment and special-population pathways.",
    "Build a closed-loop prevention and follow-up plan.",
    "Distinguish complete DAA combinations, individual components and historical examples.",
    "Apply ribavirin anemia, cardiac, renal and reproductive precautions to the exact product.",
    "Recognize peginterferon host-response activity, historical sustained response and serious toxicity."
  ],
  "cumulativeQuestionIds": [
    "hepatitis-c-001",
    "hepatitis-c-028",
    "hepatitis-c-055",
    "hepatitis-c-081",
    "hepatitis-c-108"
  ]
});
hepatitisCModule.references.push({
  "label": "Ribavirin tablets: Aurobindo U.S. label revised May 2023",
  "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=eee304d0-c2ea-44f4-97d9-92a414d31b6c"
});
hepatitisCModule.references.push({
  "label": "Ribavirin capsules: Aurobindo U.S. label revised July 2023",
  "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=35f99f76-f2ef-4a81-91ff-285419664be3"
});
hepatitisCModule.references.push({
  "label": "Pegasys: U.S. label revised December 2023",
  "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9290e5b-6d40-2318-e053-2995a90a9916"
});
hepatitisCModule.references.push({
  "label": "Zepatier: U.S. label revised March 2026",
  "href": "https://www.merck.com/product/usa/pi_circulars/z/zepatier/zepatier_pi.pdf"
});
hepatitisCModule.references.push({
  "label": "Sovaldi: U.S. label revised December 2024",
  "href": "https://www.gilead.com/-/media/files/pdfs/medicines/liver-disease/sovaldi/sovaldi_pi.pdf"
});
Object.assign(hepatitisCModule.references.find((reference) => reference.href === "https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/206619s020lbl.pdf"), {
  "label": "Viekira Pak: archived FDA historical regimen and mechanisms label (2019)",
  "href": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/206619s020lbl.pdf"
});
