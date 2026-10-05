import { chronicHepatitisBQuestionBank } from "@/data/questionBanks/chronicHepatitisB";
const check=(question,choices,rationale,slug)=>({question,choices,answer:0,rationale,reviewHref:`#${slug}`});
const rows=(...items)=>items.map(([heading,body])=>({heading,body}));
const section=(slug,title,summary,concepts,application,content,keyPoints,quiz)=>({slug,title,visual:`chronic-hepatitis-b-${slug}`,summary,concepts,application,lesson:rows(...content),keyPoints,check:quiz});

export const chronicHepatitisBModule={
  slug:"chronic-hepatitis-b",number:"205",title:"Chronic Hepatitis B",
  source:"RxPrep 2023 hepatitis B background, serology, polymerase-inhibitor, interferon, monitoring, vaccine, and coinfection material, reconciled with 2025 AASLD and IDSA guidance, 2024 and 2026 WHO guidance, current CDC recommendations, and current FDA labeling",
  description:"Move from universal screening and serology interpretation to disease staging, treatment selection, viral suppression, pregnancy and coinfection care, reactivation prevention, and lifelong liver protection.",
  topics:["HBV serology","HBV DNA","Fibrosis","Tenofovir","Entecavir","Peginterferon","Pregnancy","Reactivation","Vaccination","HCC surveillance"],
  outcomes:["Explain HBV replication, immune injury, and chronicity.","Interpret the CDC triple panel and follow-up markers.","Stage dynamic chronic HBV using viral, biochemical, and fibrosis evidence.","Apply current treatment eligibility frameworks.","Compare TDF, TAF, entecavir, and peginterferon.","Adapt therapy for kidney, bone, liver, resistance, and HIV context.","Prevent perinatal transmission.","Monitor response, adherence, toxicity, and post-treatment flare.","Prevent HBV reactivation during immunosuppression.","Use current vaccination guidance.","Plan HCC surveillance and longitudinal care.","Build a closed-loop patient plan."],
  submodules:[
    section("virus-natural-history","Follow HBV From Entry to Liver Injury","HBV persists in hepatocytes through covalently closed circular DNA. Most liver injury reflects the host immune response rather than direct viral cytotoxicity.",["Partially double-stranded DNA","cccDNA","Immune injury","Chronicity","HCC"],"Use age at acquisition, immune function, viral activity, inflammation, and fibrosis to explain why two infected people can have different trajectories.",[
      ["Map replication","HBV enters hepatocytes, converts relaxed circular DNA into nuclear cccDNA, transcribes viral RNA, and uses reverse transcription to produce new viral DNA. Current polymerase inhibitors suppress replication but rarely eliminate cccDNA."],
      ["Map injury","Cytotoxic immune responses against infected hepatocytes drive inflammation and fibrosis. ALT reflects injury but can fluctuate and cannot stage disease by itself."],
      ["Map chronicity","The probability of chronic infection is highest after perinatal acquisition and falls with later acquisition. Immune suppression can permit reactivation after apparent control."],
      ["Map consequences","Persistent inflammation and integration-related biology can lead to cirrhosis, decompensation, and hepatocellular carcinoma. Cancer risk can persist despite viral suppression or HBsAg loss in selected patients."],
    ],["cccDNA sustains persistence.","Immune response drives much injury.","Age at acquisition affects chronicity.","Suppression reduces but does not erase cancer risk."],check("What is the main obstacle to routine virologic cure with current HBV polymerase inhibitors?",["Persistent nuclear cccDNA","Lack of any antiviral target","Exclusive replication in red blood cells","Absence of viral DNA"],"Current drugs suppress replication but do not reliably eradicate cccDNA.","virus-natural-history")),

    section("screening-serology","Read the Entire Serologic Pattern","CDC now recommends one-time screening of every adult with HBsAg, anti-HBs, and total anti-HBc. This replaces the older RxPrep statement that routine healthy-adult screening is unnecessary.",["HBsAg","Anti-HBs","Total anti-HBc","IgM anti-HBc","HBV DNA"],"Translate each marker pattern into current infection, resolved infection, vaccine immunity, susceptibility, or unresolved uncertainty.",[
      ["Use the triple panel","HBsAg indicates current infection, anti-HBs usually indicates immunity, and total anti-HBc indicates current or prior natural infection. Vaccine immunity produces anti-HBs without anti-HBc."],
      ["Separate acute from chronic","IgM anti-HBc supports recent acute infection but may also appear during severe chronic flares. HBsAg persisting at least six months supports chronic infection."],
      ["Resolve isolated core antibody","Isolated total anti-HBc may reflect remote resolved infection with waned anti-HBs, false positivity, window-period infection, or occult HBV. Use exposure, immune status, repeat testing, and HBV DNA as needed."],
      ["Complete the baseline","For HBsAg-positive patients, assess HBV DNA, HBeAg and anti-HBe, ALT and other liver tests, fibrosis, HIV, HCV, HDV context, pregnancy, family history, medications, alcohol, metabolic disease, and HCC risk."],
    ],["Screen adults with the triple panel.","Vaccination does not produce anti-HBc.","IgM anti-HBc needs context.","Discordant results require resolution."],check("Which pattern best supports immunity from vaccination?",["HBsAg negative, anti-HBs positive, total anti-HBc negative","All three markers positive","HBsAg positive alone","Total anti-HBc positive with no other marker"],"Vaccination produces surface antibody without core antibody.","screening-serology")),

    section("phase-staging","Stage a Dynamic Disease","HBeAg, HBV DNA, ALT, and fibrosis interact over time. No single result defines the whole phase or treatment need.",["HBeAg","HBV DNA","ALT","Fibrosis","Cirrhosis"],"Build a longitudinal phase map and label uncertainty rather than forcing every patient into a static category.",[
      ["Trend viral activity","Interpret HBV DNA and HBeAg over time. HBeAg-negative disease can remain highly replicative because precore or basal-core-promoter variants do not require HBeAg production."],
      ["Trend inflammation","Use serial ALT and clinical context. A normal value does not exclude significant fibrosis, and elevation requires evaluation for HBV activity and competing liver injury."],
      ["Stage fibrosis","Use validated noninvasive scores, elastography, imaging, laboratory evidence, and biopsy when needed. Cirrhosis changes treatment thresholds and surveillance."],
      ["Name the phase carefully","Current guidance recognizes immune-active, inactive, immune-tolerant, and indeterminate patterns. Age, fibrosis, family history, comorbidity, coinfection, and transmission risk can alter action within a phase."],
    ],["Disease phase changes.","HBeAg negativity does not prove inactivity.","ALT alone is insufficient.","Fibrosis can make treatment urgent."],check("Which patient can have clinically important HBV despite a normal ALT?",["A patient with high HBV DNA and significant fibrosis","Only a patient with negative HBsAg","No patient with normal ALT","Only a vaccinated patient"],"Normal ALT does not exclude active replication or established fibrosis.","phase-staging")),

    section("treatment-decision","Treat Risk, Not One Threshold","The 2025 AASLD and 2024 WHO frameworks expanded and clarified treatment decisions beyond the compact 2023 textbook table.",["Cirrhosis","Immune active","Indeterminate","Transmission","Shared decision"],"State which current framework applies, then show how viral activity, fibrosis, host risk, and prevention goals produce the decision.",[
      ["Treat advanced disease","Cirrhosis with detectable HBV DNA and significant fibrosis generally favor therapy even when ALT is not elevated. Decompensation requires specialist treatment and transplant-aware care."],
      ["Treat immune-active disease","HBV DNA, ALT, inflammation, and fibrosis support treatment. Exact thresholds and special populations differ across AASLD and WHO settings."],
      ["Handle indeterminate disease","Current AASLD guidance emphasizes age, fibrosis, inflammation, family history, comorbidity, and shared decision-making rather than passive indefinite observation."],
      ["Use prevention indications","Pregnancy with high HBV DNA, HIV coinfection, immunosuppression, household or horizontal transmission risk, and selected pediatric contexts can create treatment or prophylaxis indications."],
    ],["Cirrhosis lowers the treatment threshold.","Current guidance is broader than RxPrep 2023.","Indeterminate does not mean irrelevant.","Prevention can be a treatment goal."],check("What is the best treatment decision method for chronic HBV?",["Apply current guidance to HBV DNA, ALT, fibrosis, cirrhosis, age, coinfection, and patient goals","Use ALT alone","Treat only HBeAg-positive disease","Follow a 2023 table without checking updates"],"Treatment eligibility requires a current, multidimensional framework.","treatment-decision")),

    section("polymerase-therapy","Choose a High-Barrier Polymerase Inhibitor","TDF, TAF, and entecavir are central oral options. Their shared antiviral goal does not make their renal, bone, food, liver, resistance, or coinfection profiles interchangeable.",["TDF","TAF","Entecavir","Polymerase","Resistance barrier"],"Name the exact product, dose context, administration, organ constraints, prior resistance, and HIV plan.",[
      ["Use TDF deliberately","TDF 300 mg daily is potent and high barrier, but requires renal dose adjustment and surveillance for proximal tubular injury, kidney decline, and bone effects."],
      ["Use TAF within its label","Vemlidy 25 mg daily with food has lower plasma tenofovir exposure and generally less renal and bone toxicity. Current U.S. labeling covers compensated liver disease and defined pediatric age and weight criteria."],
      ["Use entecavir correctly","Nucleoside-naive adults generally receive 0.5 mg daily on an empty stomach. Lamivudine resistance or decompensated disease uses a different 1 mg context, and kidney impairment requires adjustment. Keep entecavir at least 2 hours before or after a meal. Food reduces its exposure, so the fasting instruction must be built into the daily schedule separately from dose selection."],
      ["Avoid low-barrier shortcuts","Lamivudine, adefovir, and telbivudine have resistance or toxicity disadvantages. Prior exposure and resistance must shape salvage therapy."],
    ],["TDF has renal and bone liabilities.","TAF is not every TAF product.","Entecavir uses fasting administration.","Prior resistance changes selection."],check("Which factor most strongly favors considering TAF over TDF?",["High renal and bone toxicity risk with compensated liver disease","A desire to ignore kidney function","Need for an HIV regimen without other agents","Decompensated disease outside the label"],"TAF generally reduces renal and bone exposure concerns, while current labeling still defines its use.","polymerase-therapy")),

    section("peginterferon-selection","Use Immune Therapy Only for a Selected Patient","Peginterferon can offer finite therapy without polymerase resistance, but response is limited and toxicity is substantial.",["Pegylation","Finite course","Immune modulation","Depression","Decompensation"],"Balance the appeal of a finite course against response likelihood, contraindications, monitoring burden, and patient preference.",[
      ["Explain the mechanism","Peginterferon enhances antiviral immune activity and has antiproliferative effects. Pegylation prolongs exposure and enables weekly administration."],
      ["Select the phenotype","A compensated patient with favorable viral and host predictors, reliable monitoring, and a strong preference for finite therapy may be considered under current specialist guidance."],
      ["Screen exclusions","Decompensated cirrhosis, severe uncontrolled psychiatric disease, major autoimmune disease, cytopenias, uncontrolled thyroid disease, pregnancy, and other product-specific risks can exclude treatment."],
      ["Monitor the whole patient","Track blood counts, liver tests, thyroid, mood, infection, autoimmune symptoms, vision, glucose, and virologic response. Flu-like symptoms do not represent the full safety burden."],
    ],["Peginterferon is finite but toxic.","Selection drives value.","Decompensated cirrhosis is unsafe.","Monitoring spans multiple organ systems."],check("Which patient is the poorest peginterferon candidate?",["A patient with decompensated cirrhosis and uncontrolled depression","A compensated patient with reliable monitoring","A patient requesting discussion of finite therapy","A patient receiving specialist evaluation"],"Decompensation and uncontrolled psychiatric disease create major risk.","peginterferon-selection")),

    section("special-populations","Adapt Therapy to Organ and Viral Context","Kidney disease, bone disease, HIV, HCV, HDV, prior resistance, and decompensated liver disease can change both drug and monitoring.",["Renal function","Bone health","HIV","HDV","HCV"],"Design one coordinated regimen rather than treating each virus or organ in isolation.",[
      ["Protect kidney and bone","Review eGFR or creatinine clearance, phosphorus and urine markers when indicated, dialysis, fractures, osteoporosis, steroids, and nephrotoxins before choosing and during therapy."],
      ["Protect HIV treatment","Test for HIV before HBV monotherapy. Coinfection generally requires a fully suppressive HIV regimen with tenofovir plus emtricitabine or lamivudine as dual HBV-active coverage."],
      ["Find viral coinfection","Use current guidance for HDV testing in HBsAg-positive patients. Before HCV direct-acting antivirals, define HBV status and create prophylaxis or monitoring for reactivation risk."],
      ["Escalate decompensation","Avoid peginterferon, use a potent oral agent appropriate to organ function, monitor closely, and coordinate transplant-capable hepatology care."],
    ],["Organ risk changes selection.","HIV requires complete combination therapy.","HDV worsens prognosis.","HCV cure can expose HBV reactivation."],check("Why must HIV testing precede entecavir monotherapy?",["Entecavir can select HIV resistance when HIV is untreated","Entecavir is an HIV cure","HBV never coexists with HIV","The test determines tablet color"],"HBV-active monotherapy can compromise future HIV treatment.","special-populations")),

    section("pregnancy-infant","Break Perinatal Transmission","Maternal viral suppression and newborn immunoprophylaxis are complementary, not competing strategies.",["HBV DNA","TDF","TAF","Vaccine","HBIG"],"Create a dated maternal and infant pathway beginning in pregnancy and ending with post-vaccination serology.",[
      ["Screen every pregnancy","Test HBsAg during each pregnancy and obtain HBV DNA for an HBsAg-positive patient. Link the parent to liver care and the perinatal prevention program."],
      ["Use maternal prophylaxis when indicated","Current AASLD guidance supports TDF or selected TAF beginning around week 28 for high viral load under specialist care. WHO guidance also expands prophylaxis eligibility in some settings."],
      ["Protect the newborn immediately","An infant born to an HBsAg-positive parent needs vaccine and HBIG within 12 hours. Unknown status requires urgent vaccine and status-directed HBIG action."],
      ["Prove protection","Complete the vaccine series and obtain post-vaccination serologic testing at the recommended age. Document the result and revaccination or infection pathway if protection failed."],
    ],["Screen each pregnancy.","Maternal therapy reduces but does not replace infant protection.","The first 12 hours matter.","PVST closes the loop."],check("What does an infant born to an HBsAg-positive parent need within 12 hours?",["Hepatitis B vaccine plus HBIG","Oral entecavir only","No intervention if asymptomatic","Anti-HBs testing before prophylaxis"],"Immediate active and passive immunoprophylaxis prevents perinatal infection.","pregnancy-infant")),

    section("monitoring-stopping","Suppress Replication Without Losing the Follow-up","HBV therapy is often long term. Adherence, response, safety, and surveillance remain active even when DNA becomes undetectable.",["HBV DNA","ALT","Adherence","Renal safety","Post-treatment flare"],"Give every monitoring result a due date, threshold, and action.",[
      ["Monitor effectiveness","Trend HBV DNA and ALT, evaluate serologic transitions when relevant, and reassess fibrosis and clinical status. Persistent viremia first demands an adherence and interaction audit."],
      ["Monitor safety","Track kidney and bone parameters for tenofovir according to agent and risk, and use broader product-specific monitoring for peginterferon."],
      ["Prevent treatment gaps","Refill access, insurance, travel, transitions, hospitalization, and antiretroviral changes can interrupt HBV-active therapy. Treat continuity as a safety requirement."],
      ["Stop only through a guideline pathway","Current AASLD guidance is restrictive about discontinuation and emphasizes HBsAg loss. Any stop requires exclusion of cirrhosis, explicit relapse criteria, and close laboratory and clinical monitoring for severe flare."],
    ],["Undetectable DNA is not discharge.","Adherence is a diagnostic test.","Safety monitoring is agent-specific.","Unplanned discontinuation can cause liver failure."],check("What is the safest response to an impending HBV medication access gap?",["Resolve continuity before doses are missed and plan urgent monitoring if interruption occurs","Treat it as a harmless holiday","Stop without informing the care team","Wait for jaundice"],"Post-treatment hepatitis exacerbation can be severe.","monitoring-stopping")),

    section("reactivation","Prevent HBV Reactivation Before Immunosuppression","B-cell depletion and other potent immunosuppression can reactivate chronic or resolved HBV, sometimes after therapy ends.",["HBsAg","Anti-HBc","B-cell depletion","Prophylaxis","Monitoring"],"Screen before immunosuppression and make the antiviral decision before the immune-modifying drug is given.",[
      ["Screen with the triple panel","HBsAg alone misses patients with resolved infection who remain anti-HBc positive. Complete serology allows risk classification."],
      ["Rank regimen risk","Anti-CD20 therapy, stem-cell transplantation, many cancer regimens, solid-organ transplantation, high-dose corticosteroids, and selected targeted agents create different reactivation risks."],
      ["Choose prophylaxis or monitoring","HBsAg-positive patients and high-risk anti-HBc-positive patients commonly need prophylaxis with a high-barrier agent. Lower-risk contexts may use frequent ALT, HBsAg, and HBV DNA monitoring when follow-up is reliable."],
      ["Continue beyond immunosuppression","Reactivation can be delayed. Duration after therapy depends on immune regimen, HBV status, antiviral, and current specialty guidance."],
    ],["Screen before immunosuppression.","Anti-HBc matters.","Risk depends on the immune regimen.","Delayed reactivation requires extended planning."],check("Which baseline test set best identifies HBV reactivation risk?",["HBsAg, anti-HBs, and total anti-HBc","ALT alone","HBsAg alone","HBV vaccine record alone"],"The triple panel identifies both current and resolved infection.","reactivation")),

    section("prevention-surveillance","Prevent Infection and Detect Cancer Early","Vaccination, contact protection, safer exposure practices, and HCC surveillance extend care beyond the prescription.",["Vaccination","Household contacts","Birth dose","Ultrasound","AFP"],"Use live CDC and AASLD guidance because vaccine products and infant timing changed after the 2023 book.",[
      ["Vaccinate susceptible people","CDC recommends HepB vaccination for adults age 19 through 59 and older adults with risk factors or who request protection. Vaccinate susceptible household and sexual contacts."],
      ["Use the current infant schedule","December 2025 CDC guidance retained vaccine within 12 hours for infants of HBsAg-positive or unknown-status parents and moved confirmed-negative-parent birth timing to shared clinical decision-making."],
      ["Reduce exposure","Cover wounds, do not share needles or blood-contaminated personal items, use safer sex and injection practices, and clean blood spills appropriately. HBV is not spread through ordinary casual contact."],
      ["Continue HCC surveillance","Current AASLD criteria use cirrhosis and demographic, family, ancestry, and coinfection risk. When indicated, ultrasound with AFP about every six months remains standard even during suppression."],
    ],["Vaccination prevents HBV.","Contacts need testing and vaccination.","The infant recommendation changed in 2025.","Suppression does not erase HCC risk."],check("Which patient may still need HCC surveillance despite undetectable HBV DNA?",["A patient with cirrhosis","Every vaccinated adolescent","A susceptible person with negative serology","No one after viral suppression"],"Cirrhosis sustains HCC risk despite antiviral response.","prevention-surveillance")),

    section("integrated-case","Close the Chronic HBV Loop","Complete care links screening, serology, staging, treatment, prevention, monitoring, surveillance, and every life transition.",["Screen","Stage","Treat","Prevent","Own"],"Assign a named owner and date to every result, refill, referral, pregnancy action, surveillance study, and contact-protection step.",[
      ["Define infection and phase","Document the full triple panel, chronicity, HBV DNA, HBeAg status, ALT trend, fibrosis, cirrhosis, symptoms, coinfections, pregnancy, family history, and HCC risk."],
      ["Engineer treatment","State the current guideline indication, exact drug and dose, organ adjustment, food rule, resistance history, interaction review, adherence plan, and alternative."],
      ["Engineer prevention","Vaccinate susceptible contacts, address blood and sexual exposure, plan pregnancy and newborn prophylaxis, and protect against immunosuppression-related reactivation."],
      ["Engineer continuity","Schedule virologic and safety labs, fibrosis reassessment, HCC surveillance, refill continuity, transfer communication, and urgent actions for interruption, flare, or decompensation."],
    ],["Use complete serology.","Treatment follows current risk.","Prevention includes contacts and infants.","Longitudinal ownership prevents invisible failure."],check("Which plan best demonstrates closed-loop HBV care?",["Triple-panel interpretation, staging, current-guideline therapy, monitoring, prevention, surveillance, and dated ownership","A prescription without follow-up","HBsAg alone with no fibrosis assessment","Stopping therapy when DNA first becomes undetectable"],"HBV care is a longitudinal system rather than a single drug decision.","integrated-case")),
  ],
  references:[
    {label:"2025 AASLD and IDSA Chronic Hepatitis B Practice Guideline",href:"https://www.aasld.org/practice-guidelines/hepatitis-b"},
    {label:"CDC Clinical Testing and Diagnosis for Hepatitis B",href:"https://www.cdc.gov/hepatitis-b/hcp/diagnosis-testing/index.html"},
    {label:"WHO 2024 Chronic Hepatitis B Guideline",href:"https://www.who.int/publications/i/item/9789240090903"},
    {label:"CDC Clinical Overview of Perinatal Hepatitis B",href:"https://www.cdc.gov/hepatitis-b/hcp/perinatal-provider-overview/index.html"},
    {label:"Current VEMLIDY Prescribing Information",href:"https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=72e6b33c-0351-4070-9172-eeaa186c01d2"},
    {label:"Current VIREAD Prescribing Information",href:"https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=1fdae465-2c01-4030-a73c-fd2f13368453&type=display"},
  ],
  disclaimer:"This module supports advanced education about chronic hepatitis B. It reconciles an older 2023 course source with current screening, treatment, pregnancy, vaccination, and surveillance guidance. Decisions require current guidelines, current labeling, local resources, specialist consultation, and patient-specific evidence.",
  questionBank:chronicHepatitisBQuestionBank,
};

// Reconcile full HBV polymerase lesson bodies and product-specific dosing limits.
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "polymerase-therapy").lesson.find((body) => body.heading === "Use TDF deliberately"), {
  "heading": "Use TDF deliberately",
  "body": "TDF is a high-resistance-barrier HBV polymerase inhibitor. The usual adult Viread tablet dose is 300 mg once daily without regard to food when creatinine clearance is at least 50 mL/min; lower clearance requires label-directed interval adjustment. Before and during therapy, assess serum creatinine, estimated creatinine clearance, urine glucose and urine protein, adding phosphorus in chronic kidney disease. Review nephrotoxins, proximal tubular symptoms and bone risk; consider bone-density assessment when fracture history or other risk warrants it. Viral suppression does not replace toxicity monitoring. Avoid unplanned discontinuation and arrange close liver follow-up if treatment stops."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "polymerase-therapy").lesson.find((body) => body.heading === "Use TAF within its label"), {
  "heading": "Use TAF within its label",
  "body": "Vemlidy is single-agent TAF for chronic HBV with compensated liver disease in adults and children at least six years old weighing at least 25 kg: 25 mg once daily with food. TAF achieves efficient hepatocyte delivery with lower systemic exposure than TDF; HBV trials generally show smaller renal biomarker and bone-density changes, not an absence of toxicity. Adult renal labeling permits use at estimated creatinine clearance at least 15 mL/min or with ESRD receiving chronic hemodialysis, with dosing after dialysis on dialysis days. It is not recommended in ESRD without chronic hemodialysis or Child-Pugh B or C hepatic impairment. Pediatric renal dosing is not established. Continue renal monitoring and HIV/product review."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "polymerase-therapy").lesson.find((body) => body.heading === "Use entecavir correctly"), {
  "heading": "Use entecavir correctly",
  "body": "For nucleoside-naive adults with compensated disease and creatinine clearance at least 50 mL/min, the usual entecavir dose is 0.5 mg daily. The label specifies 1 mg daily for defined lamivudine-refractory or resistant infection and for adult decompensated liver disease, with renal adjustment below 50 mL/min. This dose distinction does not establish preferred drug selection: lamivudine or telbivudine resistance raises entecavir resistance risk, and AASLD favors a tenofovir strategy in those patterns. Take entecavir at least two hours after a meal and two hours before the next meal. Test for HIV and avoid entecavir monotherapy in untreated HIV coinfection."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "polymerase-therapy").lesson.find((body) => body.heading === "Avoid low-barrier shortcuts"), {
  "heading": "Avoid low-barrier shortcuts",
  "body": "Lamivudine, adefovir and telbivudine are nonpreferred oral HBV options because of resistance or toxicity disadvantages. Reconstruct prior antiviral exposure and check adherence before attributing rising HBV DNA to resistance. AASLD resistance guidance favors a high-barrier tenofovir strategy for several resistant patterns, including lamivudine resistance; account for cross-resistance, renal and liver status, and HIV treatment with specialist input. Do not restart lamivudine alone after documented resistance or assume that increasing entecavir to its labeled 1 mg dose resolves lamivudine-related cross-resistance."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "polymerase-therapy").check, {
  "question": "Which factor most strongly favors considering TAF over TDF?",
  "choices": [
    "High renal and bone toxicity risk in a patient eligible for Vemlidy under its hepatic and renal labeling",
    "A desire to eliminate all kidney monitoring",
    "A need to treat HIV with Vemlidy alone",
    "An assumption that Vemlidy is routinely labeled for Child-Pugh B or C hepatic impairment"
  ],
  "answer": 0,
  "rationale": "TAF may be considered when renal or bone risk makes TDF less suitable, provided the exact product and patient fit the label. HBV trials generally show smaller renal biomarker and bone-density changes, while long-term clinical significance is uncertain. Renal monitoring remains necessary; HIV coinfection requires an appropriate combination regimen.",
  "reviewHref": "#polymerase-therapy"
});
Object.assign(chronicHepatitisBModule.references.find((reference) => reference.label === "Current VEMLIDY Prescribing Information"), {
  "label": "Vemlidy: U.S. label revised March 2024",
  "href": "https://www.gilead.com/-/media/files/pdfs/medicines/liver-disease/vemlidy/vemlidy_pi.pdf"
});
Object.assign(chronicHepatitisBModule.references.find((reference) => reference.label === "Current VIREAD Prescribing Information"), {
  "label": "Viread: U.S. label revised April 2019",
  "href": "https://www.gilead.com/-/media/files/pdfs/medicines/hiv/viread/viread_pi.pdf"
});
chronicHepatitisBModule.references.push(...[
  {
    "label": "Baraclude: U.S. label revised November 2019",
    "href": "https://packageinserts.bms.com/pi/pi_baraclude.pdf"
  },
  {
    "label": "AASLD 2018: HBV drug and resistance guidance",
    "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5975958/"
  },
  {
    "label": "AASLD 2025: HBV treatment teaching slides",
    "href": "https://www.aasld.org/sites/default/files/2025-11/CHB%20Educational%20Slide%20Set%20Final%202.pdf"
  }
]);

// Source-reviewed HBV natural history, serology and staging.
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "virus-natural-history").lesson.find((body) => body.heading === "Map replication"), {
  "heading": "Map replication",
  "body": "HBV carries partially double-stranded DNA into hepatocytes. Repair in the nucleus creates covalently closed circular DNA (cccDNA), a template for viral RNA; the viral polymerase then reverse-transcribes pregenomic RNA into new DNA. Nucleos(t)ide analogs interrupt this replication step without reliably removing the nuclear reservoir. An undetectable serum HBV DNA result is evidence of suppression, not proof that every infected hepatocyte or cccDNA molecule has disappeared."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "virus-natural-history").lesson.find((body) => body.heading === "Map injury"), {
  "heading": "Map injury",
  "body": "Much of HBV-associated liver injury results from the host response to infected hepatocytes rather than direct viral cytotoxicity. Inflammation can lead to fibrosis over time. ALT is a marker of liver injury, not a direct measurement of viral load, liver function or fibrosis. Review its trend alongside HBV DNA and fibrosis assessment; a single normal ALT does not establish an inactive infection or an undamaged liver."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "virus-natural-history").lesson.find((body) => body.heading === "Map chronicity"), {
  "heading": "Map chronicity",
  "body": "Acquisition in infancy, especially around birth, is much more likely to become chronic than acquisition in an immunocompetent adult. Symptoms do not determine persistence: chronic HBV may remain clinically silent. Document timing and serial HBsAg results rather than inferring clearance from improved symptoms. Residual cccDNA after apparent control or resolved infection can support reactivation during immunosuppression, so a negative HBsAg result does not erase the relevance of prior core antibody."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "virus-natural-history").lesson.find((body) => body.heading === "Map consequences"), {
  "heading": "Map consequences",
  "body": "Chronic HBV can cause cirrhosis, hepatic decompensation and hepatocellular carcinoma (HCC). Antiviral suppression lowers progression risk but does not guarantee that existing cirrhosis reverses or cancer risk disappears. HBV-associated HCC can occur without cirrhosis. Assess surveillance eligibility using the patient’s liver stage and risk factors; after HBsAg loss, surveillance may still be indicated, including in people with cirrhosis or other persistent high-risk features."
});
chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "virus-natural-history").lesson.push({
  "heading": "Connect transmission to prevention",
  "body": "Exposure to infected blood or body fluids can transmit HBV through sex, shared injection equipment, needlesticks or birth. Household risk includes blood-contaminated personal items such as razors and toothbrushes; ordinary hugging or sharing food is not the mechanism. People without jaundice can transmit infection. Assess vaccination of susceptible contacts, safer injection and sexual practices, blood precautions and appropriate postexposure care. Pregnancy care and infant vaccine plus HBIG when indicated reduce perinatal transmission; maternal antiviral therapy does not replace indicated infant immunoprophylaxis."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "virus-natural-history"), {
  "summary": "Connect HBV’s persistent nuclear reservoir with immune-mediated injury, age-dependent chronicity, blood and body-fluid transmission, and continuing liver risk.",
  "application": "Explain why symptoms, normal ALT and suppressed serum DNA each answer different questions and cannot independently establish clearance or remove prevention needs.",
  "keyPoints": [
    "cccDNA can persist despite serum DNA suppression.",
    "ALT reflects injury; fibrosis and viral activity need separate assessment.",
    "Infant acquisition carries greater chronicity risk.",
    "Asymptomatic infection can transmit, and suppression does not erase every HCC risk."
  ]
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "virus-natural-history").check, {
  "question": "Why does undetectable serum HBV DNA during nucleos(t)ide analog therapy not establish eradication of HBV?",
  "choices": [
    "Nuclear cccDNA can persist despite suppressed replication",
    "HBV has no drug-sensitive replication step",
    "HBV replicates exclusively in red blood cells",
    "A normal ALT proves all infected hepatocytes have disappeared"
  ],
  "answer": 0,
  "rationale": "Polymerase-directed treatment suppresses new viral DNA production without reliably eliminating cccDNA in hepatocytes. Serum DNA and ALT therefore cannot prove eradication; persistence also explains potential reactivation under immunosuppression.",
  "reviewHref": "#virus-natural-history"
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "screening-serology").lesson.find((body) => body.heading === "Use the triple panel"), {
  "heading": "Use the triple panel",
  "body": "CDC recommends screening every adult aged eighteen or older at least once with HBsAg, anti-HBs and total anti-HBc. Interpret antigen, surface antibody and core antibody together; core antibody reflects natural infection, not vaccination alone. Susceptible people with ongoing exposure risk need periodic testing tailored to that risk. Test HBsAg during every pregnancy; a previously completed triple panel without subsequent risk can inform which repeat tests are needed. Screening must not delay indicated vaccination."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "screening-serology").lesson.find((body) => body.heading === "Separate acute from chronic"), {
  "heading": "Separate acute from chronic",
  "body": "HBsAg identifies current infection but does not date its onset. Persistence for at least six months establishes chronicity. Order IgM anti-HBc when acute infection is suspected: it supports recent infection, but can also be positive during severe chronic flares or reactivation. Review earlier tests, exposure timing, symptoms, liver tests and HBV DNA rather than labeling every IgM-positive result a first acute infection. Recent vaccination can transiently produce a positive HBsAg test and requires timing context."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "screening-serology").lesson.find((body) => body.heading === "Resolve isolated core antibody"), {
  "heading": "Resolve isolated core antibody",
  "body": "HBsAg negative, anti-HBs negative and total anti-HBc positive is an isolated-core pattern, not one diagnosis. Possibilities include remote infection with waned surface antibody, a false-positive core result, occult infection with detectable HBV DNA, a window-period acute infection or an HBsAg variant missed by the assay. Consider exposure and immune status; repeat core testing when false positivity is plausible and obtain HBV DNA when occult infection or immunosuppression is relevant. Suspected acute infection needs IgM testing. Do not equate isolated core antibody with vaccination or guaranteed absence of reactivation risk."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "screening-serology").lesson.find((body) => body.heading === "Complete the baseline"), {
  "heading": "Complete the baseline",
  "body": "Link confirmed HBsAg-positive patients to HBV care and establish a baseline before deciding on treatment. Include quantitative HBV DNA, HBeAg/anti-HBe, ALT and other liver tests, blood count, kidney function and liver-stage assessment. Review HIV and HCV, HDV testing indications, HAV immunity, pregnancy, prior HBV therapy, family history of cirrhosis/HCC, alcohol, metabolic disease and medicines. These data support treatment eligibility, drug safety, vaccination and cancer-surveillance decisions; the screening panel alone does not provide them."
});
chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "screening-serology").lesson.push({
  "heading": "Translate patterns into next steps",
  "body": "With HBsAg negative, positive anti-HBs plus negative total anti-HBc supports vaccine immunity when a completed series is documented; positive anti-HBs plus positive core antibody supports resolved natural infection and warrants reactivation counseling. All three negative generally indicates susceptibility when there is no completed vaccine history. Anti-HBs can wane in immunocompetent vaccine responders, so a later negative titer alone does not automatically require revaccination. HBsAg plus core antibody positivity supports infection and linkage to care; IgM and the timeline help classify acuity."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "screening-serology"), {
  "summary": "Use CDC’s adult triple-panel screening and the complete marker pattern to distinguish infection, resolved infection, vaccine immunity, susceptibility and uncertainty.",
  "application": "Read HBsAg, anti-HBs and total anti-HBc together, check the timing and vaccine record, and choose the follow-up needed for the clinical question.",
  "keyPoints": [
    "Adults need at least one triple-panel screen.",
    "Positive core antibody is not produced by vaccination alone.",
    "IgM can appear in severe chronic flares; HBsAg persistence establishes chronicity.",
    "Resolved infection and isolated core results require appropriate reactivation assessment."
  ]
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "screening-serology").check, {
  "question": "Which pattern best supports immunity from a documented completed hepatitis B vaccine series?",
  "choices": [
    "HBsAg negative, anti-HBs positive, total anti-HBc negative",
    "HBsAg negative, anti-HBs positive, total anti-HBc positive",
    "HBsAg positive, anti-HBs negative, total anti-HBc positive",
    "HBsAg negative, anti-HBs negative, total anti-HBc positive"
  ],
  "answer": 0,
  "rationale": "Vaccination produces surface antibody without core antibody. Surface and core antibodies together, with negative HBsAg, support resolved natural infection; HBsAg plus core antibody supports infection. An isolated-core pattern needs contextual evaluation rather than being labeled vaccine immunity.",
  "reviewHref": "#screening-serology"
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "phase-staging").lesson.find((body) => body.heading === "Trend viral activity"), {
  "heading": "Trend viral activity",
  "body": "Quantitative HBV DNA measures circulating viral activity; HBeAg and anti-HBe provide additional context. HBeAg-negative disease can remain highly replicative because precore or basal-core-promoter variants reduce or abolish e-antigen production without preventing replication. Neither negative HBeAg nor positive anti-HBe alone proves inactivity or noninfectiousness. Compare serial DNA and ALT with previous results, treatment exposure and liver stage before assigning a phase."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "phase-staging").lesson.find((body) => body.heading === "Trend inflammation"), {
  "heading": "Trend inflammation",
  "body": "Use serial ALT and evaluate other causes of elevation, including alcohol, metabolic liver disease and medicines. Normal ALT does not exclude significant fibrosis. AASLD uses ALT upper limits of 35 U/L for men and 25 U/L for women in HBV management, which may differ from the laboratory’s range. Do not transfer another guideline’s thresholds without identifying the framework, or treat a single value near a cutoff as a complete disease assessment."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "phase-staging").lesson.find((body) => body.heading === "Stage fibrosis"), {
  "heading": "Stage fibrosis",
  "body": "Use an appropriate combination of examination, blood tests, validated noninvasive fibrosis assessment, elastography, imaging and biopsy when needed. ALT and DNA cannot independently measure fibrosis; prior staging can become outdated. AASLD notes that liver stiffness may be overestimated during significant inflammation, so interpret elastography in context. Cirrhosis changes treatment decisions and HCC surveillance even when ALT is normal; signs of decompensation need prompt specialist assessment."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "phase-staging").lesson.find((body) => body.heading === "Name the phase carefully"), {
  "heading": "Name the phase carefully",
  "body": "AASLD’s 2025 teaching framework distinguishes immune-tolerant, immune-active, inactive and indeterminate chronic HBV, plus HBsAg loss. Immune-tolerant patterns have positive HBeAg, very high DNA and normal ALT; inactive patterns have negative HBeAg, low DNA and persistently normal ALT. Active patterns combine replication with inflammation, while indeterminate results fall outside the defined patterns. These are changing clinical patterns, not permanent labels or standalone treatment orders. Fibrosis, age, family history, coinfection and transmission context can change management."
});
chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "phase-staging").lesson.push({
  "heading": "Work through an indeterminate pattern",
  "body": "A patient with established chronic HBV is HBeAg negative, has HBV DNA 8,000 IU/mL and ALT 22 U/L on one visit. AASLD’s inactive pattern requires HBV DNA below 2,000 IU/mL and persistently normal ALT, so these data do not support an inactive label. Normal ALT also does not establish absence of fibrosis. Review prior DNA/ALT, treatment history and fibrosis assessment; this discordant pattern fits indeterminate disease and requires individualized treatment evaluation and follow-up rather than dismissal or automatic use of one numeric cutoff."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "phase-staging"), {
  "summary": "Separate viral activity, inflammation and fibrosis, then interpret their trends within a defined HBV phase framework.",
  "application": "Use a DNA/ALT timeline and liver-stage evidence to distinguish a supported phase from an indeterminate pattern before evaluating treatment.",
  "keyPoints": [
    "HBeAg negativity does not establish inactivity.",
    "A normal ALT does not exclude fibrosis.",
    "Phase definitions depend on combined, repeated measurements.",
    "Indeterminate disease and cirrhosis require treatment assessment."
  ]
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "phase-staging").check, {
  "question": "Which finding demonstrates why a normal ALT alone cannot dismiss clinically important chronic HBV?",
  "choices": [
    "High HBV DNA together with significant fibrosis",
    "Documented vaccine immunity with negative HBsAg and core antibody",
    "Negative HBeAg by itself proving viral clearance",
    "A single ALT value proving no liver fibrosis"
  ],
  "answer": 0,
  "rationale": "ALT is a marker of injury, not a fibrosis or viral-load assay. Replication and significant fibrosis may be present with normal ALT. Vaccine immunity is a different serologic state; negative HBeAg alone does not prove clearance.",
  "reviewHref": "#phase-staging"
});
chronicHepatitisBModule.references.push(...[
  {
    "label": "CDC 2023: universal HBV screening and serology interpretation",
    "href": "https://www.cdc.gov/mmwr/volumes/72/rr/rr7201a1.htm"
  },
  {
    "label": "CDC Pink Book: HBV pathogenesis and transmission",
    "href": "https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-10-hepatitis-b.html"
  },
  {
    "label": "University of Washington: HBV diagnosis and marker limitations",
    "href": "https://www.hepatitisb.uw.edu/go/hbv/diagnosis-hbv/core-concept/all"
  },
  {
    "label": "University of Washington: initial HBV evaluation",
    "href": "https://www.hepatitisb.uw.edu/go/hbv/initial-evaluation-counseling/core-concept/all"
  },
  {
    "label": "University of Washington: HBV persistence and reactivation biology",
    "href": "https://www.hepatitisb.uw.edu/go/hbv/hepatitis-b-reactivation-setting-immunosuppression/core-concept/all"
  }
]);

// Source-verified HBV treatment-decision review.
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "treatment-decision").lesson.find((body) => body.heading === "Treat advanced disease"), {
  "heading": "Treat advanced disease",
  "body": "Assess cirrhosis and decompensation before applying noncirrhotic laboratory thresholds. AASLD recommends indefinite oral antiviral therapy for HBsAg-positive adults with decompensated cirrhosis regardless of HBV DNA, HBeAg or ALT, alongside transplant evaluation when eligible. Compensated cirrhosis with low-level viremia also supports treatment despite normal ALT. Peginterferon is contraindicated in decompensation. Choose the oral product using renal function, prior resistance and hepatic labeling; suppression does not remove the need for indicated cancer surveillance."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "treatment-decision").lesson.find((body) => body.heading === "Treat immune-active disease"), {
  "heading": "Treat immune-active disease",
  "body": "The AASLD framework uses ALT upper limits of 35 U/L for males and 25 U/L for females. Without cirrhosis, immune-active patterns include ALT at least twice that limit with HBV DNA at least 20,000 IU/mL when HBeAg-positive or at least 2,000 IU/mL when HBeAg-negative. Significant histologic disease can also support treatment. These sufficient patterns do not exclude treatment below their thresholds: assess fibrosis, other causes of liver injury and additional indications."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "treatment-decision").lesson.find((body) => body.heading === "Handle indeterminate disease"), {
  "heading": "Handle indeterminate disease",
  "body": "For HBsAg-positive, HBeAg-negative adults without cirrhosis in an indeterminate phase, the 2025 AASLD/IDSA guideline conditionally suggests treatment through shared decision-making; evidence certainty is very low. Discuss fibrosis, age, sex, treatment burden and follow-up. If treatment is deferred, reassess at each visit. The recommendation text specifies ALT and HBV DNA every 3-6 months in the first year, then every six months; its diagram uses three-month testing initially for the elevated-DNA subgroup."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "treatment-decision").lesson.find((body) => body.heading === "Use prevention indications"), {
  "heading": "Use prevention indications",
  "body": "Separate treatment for liver disease from antiviral prophylaxis. Pregnancy, HIV coinfection and immunosuppression require their own coordinated pathways. For a viremic person without a liver-disease indication, AASLD conditionally supports discussing antivirals in selected high-risk horizontal-transmission settings. This does not make ordinary household contact a treatment requirement. Vaccination of susceptible contacts, safer exposure practices and appropriate infant protection remain necessary."
});
chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "treatment-decision").lesson.push({
  "heading": "Set measurable treatment goals",
  "body": "Oral nucleos(t)ide analogs inhibit HBV polymerase. Follow HBV DNA suppression and biochemical response while aiming to reduce liver complications. Suppression does not establish eradication of the persistent nuclear cccDNA reservoir, guarantee elimination of cancer risk or authorize stopping therapy. Explain the expected duration, adherence, product-specific monitoring and ongoing surveillance when indicated before starting treatment."
});
chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "treatment-decision").lesson.push({
  "heading": "Revisit immune-tolerant eligibility",
  "body": "In a persistently HBeAg-positive pattern with HBV DNA above 10 million IU/mL and normal ALT, 2025 AASLD/IDSA Recommendation 3 suggests treatment when age is over 40, inflammation is at least grade 2, or fibrosis is at least F2. These are alternative considerations. This is conditional guidance with very low-certainty evidence. Younger patients may also discuss earlier treatment; observation requires continued monitoring."
});
chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "treatment-decision").lesson.push({
  "heading": "Keep the WHO pathway distinct",
  "body": "The WHO 2024 criteria, retained in its 2026 handbook, recommend treatment for adults and adolescents aged at least 12 with significant fibrosis or cirrhosis regardless of ALT or DNA; HBV DNA above 2,000 IU/mL plus ALT above the WHO upper limit; or qualifying coinfection, family history, immunosuppression, comorbidity or extrahepatic disease. WHO uses ALT upper limits of 30 U/L for males and 19 U/L for females. When DNA testing is unavailable, persistently abnormal ALT is another conditional pathway. Adult fibrosis markers include APRI above 0.5 or elastography above 7 kPa for significant fibrosis; these cutoffs are not fully validated in children or adolescents. Apply the named framework and local protocol, then select a suitable regimen."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "treatment-decision"), {
  "summary": "Treatment decisions combine viral activity, liver stage, host risk and prevention goals. Identify the AASLD/IDSA or WHO framework before applying its thresholds.",
  "application": "Document the indication, the named framework, fibrosis and viral findings, patient preferences, regimen constraints, and the follow-up plan if treatment is deferred.",
  "keyPoints": [
    "Decompensated cirrhosis warrants treatment regardless of HBV DNA or ALT.",
    "AASLD immune-tolerant age, inflammation and fibrosis considerations use OR.",
    "Shared decisions include treatment burden and continued monitoring.",
    "WHO and AASLD use different ALT thresholds.",
    "DNA suppression does not prove eradication or end indicated surveillance."
  ]
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "treatment-decision").check, {
  "question": "An HBsAg-positive adult has decompensated cirrhosis, normal ALT and low HBV DNA. Which treatment decision is best?",
  "choices": [
    "Arrange potent oral antiviral treatment and specialist care, including transplant evaluation when eligible",
    "Defer therapy until ALT reaches twice the upper limit of normal",
    "Use peginterferon to avoid long-term oral treatment",
    "Exclude treatment because HBeAg is negative"
  ],
  "answer": 0,
  "rationale": "AASLD recommends indefinite oral antiviral therapy in HBsAg-positive adults with decompensated cirrhosis regardless of HBV DNA, HBeAg or ALT. Peginterferon is contraindicated. Normal ALT and low DNA do not justify deferral; choose the oral agent for the patient and coordinate specialist care.",
  "reviewHref": "#treatment-decision"
});
chronicHepatitisBModule.references.push({
  "label": "WHO 2026: consolidated viral hepatitis implementation handbook",
  "href": "https://www.who.int/publications/i/item/9789240119529"
});

// Source-verified HBV peginterferon review.
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "peginterferon-selection").lesson.find((body) => body.heading === "Explain the mechanism"), {
  "heading": "Explain the mechanism",
  "body": "Peginterferon alfa-2a induces antiviral immune activity; interferons also have antiproliferative effects. Attaching polyethylene glycol prolongs exposure and permits weekly injection. This immune-based approach differs from direct HBV polymerase inhibition. A finite course is possible, but it does not guarantee a sustained response or elimination of the persistent viral reservoir."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "peginterferon-selection").lesson.find((body) => body.heading === "Select the phenotype"), {
  "heading": "Select the phenotype",
  "body": "PEGASYS is labeled for adults with HBeAg-positive or HBeAg-negative chronic HBV, compensated liver disease, viral replication and liver inflammation. Consider response likelihood, reliable follow-up and patient preference with a specialist. Higher ALT, lower HBV DNA and genotypes A or B are associated with better response; they do not guarantee success. A preference for finite therapy cannot override contraindications or make peginterferon the best choice for every compensated patient."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "peginterferon-selection").lesson.find((body) => body.heading === "Screen exclusions"), {
  "heading": "Screen exclusions",
  "body": "The label contraindicates PEGASYS in autoimmune hepatitis, decompensated cirrhosis, relevant hypersensitivity, and neonates or infants. Severe psychiatric illness, marrow suppression, other autoimmune disease, poorly controlled seizures and cardiopulmonary disease are important clinical exclusions or precautions. Do not start with thyroid or glucose disorders that cannot be controlled with medication. Interferon is not advised for HBV during pregnancy; the label warns of fetal harm and requires pretreatment pregnancy testing and effective contraception during therapy. Ribavirin is not part of this HBV regimen; its combination-specific pregnancy restrictions must not be imported as an HBV dosing plan."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "peginterferon-selection").lesson.find((body) => body.heading === "Monitor the whole patient"), {
  "heading": "Monitor the whole patient",
  "body": "Before treatment, assess CBC with differential and platelets, hepatic and renal panels, thyroid function, HBV DNA and HBeAg/anti-HBe; screen for coinfections, review mental health and obtain a baseline eye examination. The label specifies hematologic testing at weeks 2 and 4 and biochemical testing at week 4, followed by periodic testing. UW HBV guidance describes ongoing CBC every 1-2 months, ALT every 1-3 months and TSH every three months, with closer testing for abnormalities. These ongoing intervals do not replace the early label checks. Review mood, sleep, infection, autoimmune symptoms, glucose and vision, alongside virologic response."
});
chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "peginterferon-selection").lesson.push({
  "heading": "Verify the dose and presentation",
  "body": "For adult HBV, the labeled dose is 180 mcg subcutaneously in the thigh or abdomen once weekly for 48 weeks. At creatinine clearance below 30 mL/min, including hemodialysis, the recommended dose is 135 mcg weekly; 30-50 mL/min retains 180 mcg with careful monitoring. Toxicity may require further adjustment or discontinuation. Verify concentration: 180 mcg is 1 mL from the 180 mcg/mL vial, but 0.5 mL from the 180 mcg/0.5 mL prefilled syringe. Train for the specific device, discard unused single-dose product, refrigerate at 2-8°C, protect from light and do not freeze or shake."
});
chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "peginterferon-selection").lesson.push({
  "heading": "Act on serious toxicity",
  "body": "Common flu-like symptoms do not explain every fever or new symptom. Persistent high fever requires infection assessment, especially with neutropenia. Severe depression or suicidal thoughts require immediate cessation and psychiatric intervention. New or worsening eye disorders require stopping treatment and prompt evaluation. For HBV ALT above five times the upper limit of normal, intensify liver monitoring and consider dose reduction or a temporary hold. Discontinue immediately for hepatic decompensation, ALT that keeps rising despite a dose reduction, or an ALT increase accompanied by a bilirubin rise. Apply the product tables for cytopenias and other dose changes rather than improvising a schedule."
});
chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "peginterferon-selection").lesson.push({
  "heading": "Plan response and follow-up",
  "body": "Assess HBV DNA and serologic response during treatment and after completion. HBeAg loss with anti-HBe development is a response only in a patient initially HBeAg-positive. Sustained HBsAg loss with undetectable HBV DNA off therapy is a functional-cure outcome; it is uncommon and does not establish sterilizing eradication. A sustained off-treatment peginterferon virologic response is generally defined as HBV DNA below 2,000 IU/mL for at least 12 months. Hepatitis flares can occur after the last dose, so arrange follow-up and continue liver-cancer surveillance when indicated."
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "peginterferon-selection"), {
  "summary": "Peginterferon alfa-2a offers a finite weekly course for selected patients with compensated HBV. Response is variable, and monitoring must address serious toxicity during and after treatment.",
  "concepts": [
    "Immune activity",
    "Patient selection",
    "Weekly dosing",
    "Safety monitoring",
    "Off-treatment response"
  ],
  "application": "Assess eligibility and response likelihood, verify the dose and device, and agree on laboratory visits, symptom escalation and follow-up before the first injection.",
  "keyPoints": [
    "Adult HBV dosing is weekly, usually for 48 weeks.",
    "Decompensated cirrhosis and autoimmune hepatitis are contraindications.",
    "Severe renal impairment requires a lower starting dose.",
    "Early blood-count checks complement ongoing laboratory and symptom reviews.",
    "Finite treatment does not guarantee cure or end indicated surveillance."
  ]
});
Object.assign(chronicHepatitisBModule.submodules.find((lesson) => lesson.slug === "peginterferon-selection").check, {
  "question": "Which adult HBV patient is the poorest peginterferon candidate?",
  "choices": [
    "A patient with decompensated cirrhosis and uncontrolled depression",
    "A compensated patient with genotype A and dependable monitoring",
    "A compensated patient with higher ALT, lower HBV DNA and no identified contraindication",
    "A compensated patient discussing a finite course with a specialist"
  ],
  "answer": 0,
  "rationale": "Decompensated cirrhosis is a labeled contraindication, and uncontrolled depression adds serious neuropsychiatric risk. The other patients may discuss peginterferon after full eligibility assessment; favorable predictors or a treatment preference do not guarantee response.",
  "reviewHref": "#peginterferon-selection"
});
chronicHepatitisBModule.references.push({
  "label": "PEGASYS: current U.S. prescribing information and device instructions",
  "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9290e5b-6d40-2318-e053-2995a90a9916"
});
chronicHepatitisBModule.references.push({
  "label": "University of Washington: choosing an HBV regimen",
  "href": "https://www.hepatitisb.uw.edu/go/hbv/medications-used-to-treat-hbv/core-concept/all"
});
chronicHepatitisBModule.references.push({
  "label": "University of Washington: monitoring on and off HBV therapy",
  "href": "https://www.hepatitisb.uw.edu/go/hbv/monitoring-persons-on-hbv-therapy/core-concept/all"
});
