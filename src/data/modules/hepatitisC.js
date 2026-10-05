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
