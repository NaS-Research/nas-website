import { influenzaAntiviralPharmacologyQuestionBank } from "@/data/questionBanks/influenzaAntiviralPharmacology";

const check=(question,choices,rationale,slug)=>({question,choices,answer:0,rationale,reviewHref:`#${slug}`});
const rows=(...items)=>items.map(([heading,body])=>({heading,body}));
const section=(slug,title,summary,concepts,application,lesson,keyPoints,quiz)=>({slug,title,visual:`influenza-antiviral-${slug}`,summary,concepts,application,lesson:rows(...lesson),keyPoints,check:quiz});

export const influenzaAntiviralPharmacologyModule={
  slug:"influenza-antiviral-pharmacology",number:"184",title:"Influenza Antiviral Pharmacology",
  source:"RxPrep 2023 influenza antiviral content, reconciled with March 2026 CDC clinical guidance and current oseltamivir, zanamivir, peramivir, and baloxavir labeling",
  description:"Connect influenza biology to neuraminidase and polymerase-acidic endonuclease inhibition. Select, calculate, administer, monitor, and reassess oseltamivir, zanamivir, peramivir, and baloxavir across age, setting, organ function, pregnancy, exposure, and resistance.",
  topics:["Influenza triage","Viral targets","Treatment selection","Oseltamivir mechanism","Oseltamivir dosing","Oseltamivir safety","Zanamivir","Peramivir","Baloxavir target","Baloxavir administration","Integrated prevention"],
  outcomes:[
    "Identify priority treatment groups, complications, mimics, bacterial superinfection, and vaccination boundaries.",
    "Distinguish neuraminidase inhibition, PA endonuclease inhibition, M2 resistance, and target-specific escape.",
    "Select an antiviral by onset, severity, setting, age, route, host, organ function, and current CDC guidance.",
    "Connect oseltamivir prodrug chemistry to esterase activation, neuraminidase inhibition, and renal elimination.",
    "Apply adult, pediatric, suspension, renal, dialysis, administration, and storage principles for oseltamivir.",
    "Manage oseltamivir gastrointestinal, immune, neuropsychiatric, formulation, pregnancy, and lactation concerns.",
    "Verify zanamivir dose, device, airway, milk-protein, hypersensitivity, neuropsychiatric, and vaccine constraints.",
    "Calculate, adjust, prepare, infuse, and monitor single-dose intravenous peramivir.",
    "Connect baloxavir prodrug architecture and PA endonuclease inhibition to age and weight-based dosing.",
    "Protect baloxavir administration from cations, preparation errors, hypersensitivity, resistance, and population overreach.",
    "Integrate prophylaxis, live-vaccine timing, deterioration review, resistance, public-health guidance, and follow-up."
  ],
  submodules:[
    section("influenza-biology-triage","Recognize the Influenza Decision State","Influenza A and B create an acute respiratory syndrome whose urgency depends on host, severity, trajectory, setting, and competing diagnoses rather than a test result alone.",["Influenza A and B","High-risk host","Hospitalization","Bacterial complication","Vaccination"],"Define the patient state quickly enough to preserve early benefit without missing a competing emergency.",[
      ["Recognize the syndrome","Abrupt fever, cough, myalgia, headache, fatigue, chills, and sore throat can support influenza, but presentation varies. COVID-19, bacterial pneumonia, and other respiratory pathogens can coexist or resemble it."],
      ["Treat priority patients now","Hospitalized patients, patients with severe or progressive illness, and patients at high risk for complications should receive empiric treatment as soon as possible. Do not wait for laboratory confirmation when influenza is suspected."],
      ["Detect deterioration","Dyspnea, hypoxemia, dehydration, hypotension, altered mental status, chest pain, or a biphasic new fever deserves urgent reassessment. Influenza antivirals do not treat bacterial pneumonia or other complications."],
      ["Preserve prevention","Antiviral treatment or prophylaxis does not replace seasonal vaccination, source control, respiratory hygiene, or outbreak planning. Confirm which vaccine product was used because live intranasal vaccine has antiviral timing concerns."]
    ],["Priority treatment should not wait for testing.","Influenza has important mimics and coinfections.","New focal decline can signal bacterial disease.","Antivirals do not replace vaccination."],check("Which patient should receive empiric influenza antiviral treatment without waiting for confirmation?",["A hospitalized patient with suspected influenza","A low-risk asymptomatic person without exposure","A patient seeking permanent vaccine replacement","Every person with seasonal allergies"],"Hospitalized, severe, progressive, and high-risk patients should be treated promptly when influenza is suspected.","influenza-biology-triage")),

    section("influenza-life-cycle-targets","Interrupt Viral Release or Transcription","Recommended influenza antivirals act at two distinct viral systems: neuraminidase-mediated release and polymerase-acidic endonuclease-mediated transcription.",["Sialic acid","Neuraminidase","Cap snatching","PA endonuclease","Resistance substitution"],"Use target position to distinguish drug classes, predict boundaries, and investigate failure.",[
      ["Block progeny release","Oseltamivir carboxylate, zanamivir, and peramivir inhibit influenza A and B neuraminidase. Blocking cleavage of terminal sialic acid limits release and spread of newly formed virions."],
      ["Block cap snatching","Active baloxavir inhibits the polymerase acidic endonuclease that cleaves capped host RNA fragments used to prime viral messenger RNA transcription. This target acts before virion assembly and release."],
      ["Retire the adamantanes","Amantadine and rimantadine inhibit the M2 ion channel of influenza A but are not recommended in the United States because circulating seasonal viruses have widespread resistance."],
      ["Place resistance in context","Neuraminidase substitutions and PA substitutions can reduce susceptibility. Persistent illness still requires a broader audit of diagnosis, timing, absorption, delivery, host, compartment, and bacterial complication before resistance is assigned."]
    ],["Neuraminidase inhibitors block virion release.","Baloxavir blocks PA endonuclease and transcription.","Adamantanes are not currently recommended.","Clinical failure is not synonymous with resistance."],check("Which process is directly inhibited by baloxavir?",["PA endonuclease activity required for cap snatching","Neuraminidase-mediated virion release","M2 ion conduction only","Bacterial cell-wall synthesis"],"Baloxavir inhibits the influenza polymerase acidic cap-dependent endonuclease.","influenza-life-cycle-targets")),

    section("influenza-selection-timing","Match Drug to Patient and Setting","Benefit is greatest when treatment begins early, but the 48-hour principle does not exclude later treatment in hospitalized, severe, progressive, or high-risk disease.",["Early treatment","Hospitalized oseltamivir","Uncomplicated outpatient","Route fit","Baloxavir boundary"],"Choose the complete product system from setting, host, route, evidence, and timing rather than convenience alone.",[
      ["Use time correctly","Treat eligible uncomplicated outpatients as early as possible, ideally within two days. Do not turn 48 hours into a universal cutoff for hospitalized, severe, progressive, or high-risk patients."],
      ["Protect hospitalized selection","CDC recommends oral or enterically administered oseltamivir as soon as possible for hospitalized suspected or confirmed influenza. Inhaled zanamivir, peramivir, and baloxavir are not routinely recommended there because clinical-benefit evidence is insufficient."],
      ["Compare outpatient options","Oseltamivir, zanamivir, peramivir, and baloxavir can treat eligible uncomplicated outpatients within two days. Age, weight, airway disease, swallowing, inspiratory flow, IV need, renal function, pregnancy, lactation, immune status, interactions, and access decide fit."],
      ["Respect baloxavir limits","CDC does not recommend baloxavir monotherapy in pregnancy, breastfeeding, immunocompromise, hospitalization, complicated illness, or progressive illness. Current approval begins at age 5 for eligible uncomplicated disease."]
    ],["Earlier treatment usually yields greater benefit.","Hospitalized influenza routinely uses oseltamivir.","Outpatient selection is product and patient specific.","Baloxavir has important evidence boundaries."],check("What routine antiviral does CDC recommend for hospitalized influenza?",["Oral or enterically administered oseltamivir","Single-dose baloxavir","Inhaled zanamivir for every patient","No therapy after 48 hours"],"Oseltamivir should begin as soon as possible in hospitalized suspected or confirmed influenza.","influenza-selection-timing")),

    section("oseltamivir-mechanism-pk","Activate the Oseltamivir Prodrug","Oseltamivir phosphate is an orally absorbed ester prodrug converted predominantly by hepatic esterases to oseltamivir carboxylate, an influenza neuraminidase inhibitor eliminated in urine.",["Ester prodrug","Hepatic esterase","Active carboxylate","Neuraminidase","Renal secretion"],"Connect molecular conversion to dose frequency, renal adjustment, and a restrained interaction model.",[
      ["Read the prodrug scaffold","The ethyl ester improves oral delivery. Hepatic esterases convert absorbed oseltamivir to the polar carboxylate, and at least three quarters of an oral dose reaches systemic circulation as active metabolite."],
      ["Inhibit neuraminidase","Oseltamivir carboxylate limits release of influenza A and B progeny virions. Early use restricts new spread but does not instantly restore respiratory epithelium already damaged by infection."],
      ["Follow elimination","The active metabolite is not further metabolized and is eliminated unchanged in urine through filtration and tubular secretion. Falling renal function raises exposure and requires indication-specific adjustment."],
      ["Avoid an invented CYP list","Neither oseltamivir nor its active metabolite is a clinically meaningful CYP substrate or inhibitor. Vaccine timing, renal function, formulation ingredients, and exact documented interactions deserve more attention than broad CYP warnings."]
    ],["Oseltamivir phosphate is a prodrug.","The active species is oseltamivir carboxylate.","The target is viral neuraminidase.","Active metabolite elimination is renal."],check("Which species directly inhibits influenza neuraminidase after oral oseltamivir?",["Oseltamivir carboxylate","Oseltamivir phosphate only","Sorbitol","A CYP3A4 metabolite"],"Hepatic esterases convert the prodrug to active oseltamivir carboxylate.","oseltamivir-mechanism-pk")),

    section("oseltamivir-dosing-administration","Calculate Oseltamivir Exposure","Treatment, prophylaxis, age, weight, concentration, renal function, dialysis, formulation, food, and storage must be verified independently.",["75 mg twice daily","Pediatric weight band","6 mg per mL","Renal adjustment","Storage interval"],"Translate the ordered milligrams into a deliverable product and preserve the correct calendar.",[
      ["Separate treatment from prophylaxis","Standard adult uncomplicated-influenza treatment is 75 mg twice daily for five days. Prophylaxis commonly uses 75 mg once daily, with duration set by exposure or outbreak context and current guidance."],
      ["Use current pediatric dosing","Label treatment begins at 2 weeks with 3 mg/kg twice daily before age 1, then weight bands from age 1 through 12. CDC also recommends selected off-label treatment below 14 days and prophylaxis from 3 months through 1 year."],
      ["Calculate suspension volume","The constituted commercial suspension is 6 mg/mL. A 45 mg dose requires 7.5 mL. Shake well, use a milliliter-calibrated oral device, and make sure the caregiver can deliver the full course."],
      ["Adjust and store precisely","Adult treatment falls to 30 mg twice daily at creatinine clearance above 30 through 60 mL/min and 30 mg once daily above 10 through 30 mL/min, with dialysis-specific regimens. Commercial suspension is used within 17 refrigerated days or 10 room-temperature days."]
    ],["Treatment and prophylaxis use different frequencies.","Current pediatric eligibility begins in infancy.","A 45 mg dose at 6 mg/mL is 7.5 mL.","Renal and dialysis regimens are product-label specific."],check("What volume of 6 mg/mL oseltamivir suspension provides 45 mg?",["7.5 mL","45 mL","6 mL","2.7 mL"],"Divide 45 mg by 6 mg per mL.","oseltamivir-dosing-administration")),

    section("oseltamivir-safety-populations","Monitor the Host and Formulation","Oseltamivir safety joins common gastrointestinal effects to rare immune reactions, neurologic symptoms of uncertain attribution, bacterial complications, formulation sorbitol, pregnancy, and lactation.",["Nausea and vomiting","Skin reaction","Neuropsychiatric event","Sorbitol","Pregnancy"],"Counsel common effects without minimizing emergency findings or the risk of untreated influenza.",[
      ["Improve gastrointestinal tolerance","Nausea and vomiting commonly occur early and may improve when oseltamivir is taken with food. Protect hydration, determine whether doses were retained, and reassess severe or persistent symptoms."],
      ["Stop serious reactions","Anaphylaxis, angioedema, and severe skin or mucosal reactions require immediate withdrawal and appropriate treatment. Do not continue through a progressive immune syndrome."],
      ["Monitor behavior safely","Influenza can cause delirium, hallucinations, seizures, encephalopathy, and abnormal behavior. Uncommon events have also been reported during therapy. Protect the patient from injury and evaluate infection and treatment together rather than assuming causality."],
      ["Protect special populations","A 75 mg suspension dose delivers 2 grams of sorbitol and can harm a patient with hereditary fructose intolerance. CDC prefers oseltamivir in pregnancy; human milk levels are low, and current narrative evidence replaces obsolete pregnancy letters."]
    ],["Food can improve gastrointestinal tolerability.","Serious immune reactions require withdrawal.","Influenza itself can cause neuropsychiatric symptoms.","Pregnancy treatment should not be delayed."],check("Why is oseltamivir preferred for influenza treatment during pregnancy?",["It has the greatest supportive human experience and CDC recommends it","It never reaches systemic circulation","Pregnancy prevents severe influenza","Baloxavir has more pregnancy evidence"],"Oseltamivir has the strongest human pregnancy experience among recommended influenza antivirals.","oseltamivir-safety-populations")),

    section("zanamivir-pharmacology-safety","Verify the Zanamivir Device and Airway","Zanamivir is an inhaled neuraminidase inhibitor whose efficacy and safety depend on the Diskhaler, inspiratory delivery, airway health, milk-protein allergy, and live-vaccine timing.",["Diskhaler","Two inhalations","Bronchospasm","Milk protein","LAIV timing"],"Treat formulation and device technique as part of the drug rather than optional counseling.",[
      ["Build the labeled dose","Treatment from age 7 is 10 mg twice daily for five days. Each 10 mg dose requires two separate 5 mg blister inhalations. When possible, give two first-day doses at least two hours apart, then about 12 hours apart."],
      ["Demonstrate the device","Load the Rotadisk, pierce only when ready, exhale away from the device, inhale through the mouthpiece, and confirm both blisters. Never nebulize or mechanically transfer the powder."],
      ["Protect vulnerable airways","Zanamivir is not recommended with asthma or COPD. Serious and fatal bronchospasm has occurred. Stop for wheeze or declining respiratory function and provide immediate respiratory treatment when needed."],
      ["Check allergy and vaccine timing","The lactose excipient contains milk proteins and is contraindicated in true milk-protein allergy. Keep intranasal live attenuated vaccine at least two weeks before or 48 hours after zanamivir unless medically indicated."]
    ],["One dose requires two 5 mg inhalations.","The Diskhaler is part of the delivery system.","Asthma and COPD make zanamivir a poor choice.","Milk-protein allergy differs from lactose intolerance."],check("Why should a patient with asthma usually receive an alternative to zanamivir?",["Zanamivir can cause serious bronchospasm","Asthma prevents influenza infection","The drug is renally toxic in every patient","The Diskhaler contains an antibiotic"],"Underlying airway disease increases concern for serious bronchospasm.","zanamivir-pharmacology-safety")),

    section("peramivir-pharmacology-administration","Build the Peramivir Infusion","Peramivir is a renally eliminated intravenous neuraminidase inhibitor delivered as one diluted infusion for eligible acute uncomplicated influenza.",["Single infusion","12 mg per kg","600 mg maximum","Renal reduction","Dilution"],"Calculate, prepare, infuse, and monitor the one-dose system without expanding its evidence beyond the labeled setting.",[
      ["Define the clinical role","Peramivir is approved from age 6 months for acute uncomplicated influenza within two days. It is not used for prophylaxis, and routine monotherapy is not recommended for hospitalized serious influenza."],
      ["Calculate age and weight","Adults and adolescents at least 13 years receive 600 mg once. Patients 6 months through 12 years receive 12 mg/kg once, capped at 600 mg. A 30 kg child receives 360 mg before renal adjustment."],
      ["Protect renal exposure","The adult single dose falls to 200 mg at creatinine clearance 30 to 49 mL/min and 100 mg at 10 to 29 mL/min. Pediatric proportional reductions apply from age 2, while data are insufficient below age 2 with clearance below 50."],
      ["Prepare and monitor","Dilute the 10 mg/mL vial to a final concentration of 1 to 6 mg/mL in a compatible diluent and infuse over 15 to 30 minutes. Do not mix or co-infuse other intravenous drugs. Stop for anaphylaxis or serious skin reaction."]
    ],["Peramivir treats eligible uncomplicated disease.","Pediatric dosing is 12 mg/kg up to 600 mg.","Renal function changes the single dose.","The vial requires dilution and controlled infusion."],check("What peramivir dose is calculated for a 30 kg child with normal renal function?",["360 mg","600 mg","30 mg","12 mg"],"Twelve milligrams per kilogram multiplied by 30 kg equals 360 mg.","peramivir-pharmacology-administration")),

    section("baloxavir-target-dosing","Block Viral Transcription with Baloxavir","Baloxavir marboxil is a lipophilic ester prodrug hydrolyzed to active baloxavir, which inhibits the influenza polymerase acidic cap-dependent endonuclease.",["Marboxil prodrug","Active baloxavir","PA endonuclease","Single dose","Weight band"],"Connect target chemistry to the current age, weight, formulation, and resistance boundaries.",[
      ["Activate the prodrug","Hydrolysis converts baloxavir marboxil to baloxavir. The prodrug architecture supports oral delivery while the active species inhibits an influenza-specific polymerase function."],
      ["Interrupt transcription","Baloxavir blocks PA endonuclease and prevents cap snatching required for viral messenger RNA transcription. This mechanism is distinct from neuraminidase inhibition."],
      ["Use the current label","Treatment and post-exposure prophylaxis begin at age 5. Tablets use 40 mg once from 20 to less than 80 kg and 80 mg once at 80 kg or more. Current RxPrep age-12 language is outdated."],
      ["Calculate the pediatric liquid","Bottle suspension is 2 mg/mL. Below 20 kg, use 2 mg/kg. A 14 kg child requires 28 mg, which equals 14 mL. Confirm the presentation because packets and bottles have different delivery rules."]
    ],["Baloxavir marboxil is a prodrug.","The target is PA endonuclease.","Current eligibility begins at age 5.","Below 20 kg, bottle suspension uses 2 mg/kg."],check("What current single baloxavir tablet dose applies to a 65 kg eligible patient?",["40 mg","80 mg","20 mg","75 mg"],"Patients from 20 to less than 80 kg receive 40 mg once.","baloxavir-target-dosing")),

    section("baloxavir-administration-safety","Protect the Baloxavir Single Dose","One-dose convenience requires exact cation separation, formulation preparation, age, setting, allergy, resistance, pregnancy, lactation, and immune-status verification.",["Polyvalent cation","Ten-hour stability","Hypersensitivity","Age 5 boundary","Population limit"],"Prevent a preventable single-dose exposure failure because there is no later scheduled dose to compensate.",[
      ["Avoid chelation","Do not administer with dairy products, calcium-fortified beverages, cation-containing antacids or laxatives, or oral calcium, iron, magnesium, selenium, or zinc supplements. Cations can reduce baloxavir exposure."],
      ["Keep suspension storage limits distinct", "The book gives reconstituted oseltamivir suspension 10 days at room temperature or 17 days refrigerated. Reconstituted baloxavir suspension must be administered within 10 hours at room temperature, and a dose may require more than one bottle. Record preparation and expiry times using the correct drug: an oseltamivir storage interval does not extend the baloxavir window."],
      ["Prepare the bottle correctly","Reconstitute to 2 mg/mL, gently swirl rather than shake, label the time, and administer within 10 hours because the product lacks preservative. Use an oral or enteral syringe and the required tube flush."],
      ["Recognize serious reactions","Anaphylaxis, angioedema, urticaria, erythema multiforme, severe gastrointestinal bleeding syndromes, and abnormal behavior have been reported. Stop and evaluate serious immune findings."],
      ["Respect evidence limits","Do not use below age 5 because treatment-emergent resistance was more frequent. CDC does not recommend monotherapy in pregnancy, breastfeeding, immunocompromise, hospitalization, complicated disease, or progressive disease."]
    ],["Polyvalent cations can lower baloxavir exposure.","Bottle suspension expires 10 hours after preparation.","Serious hypersensitivity requires action.","Single-dose convenience does not override evidence limits."],check("Which exposure should be avoided with the baloxavir dose?",["A calcium-containing antacid","Plain water","An oral syringe","An inactivated vaccine"],"Polyvalent cations can chelate baloxavir and reduce systemic exposure.","baloxavir-administration-safety")),

    section("integrated-influenza-system","Close the Influenza Treatment Loop","A safe influenza plan connects syndrome, host, severity, setting, onset, drug target, route, dose, organ function, vaccine timing, response, complication, resistance, and ownership.",["Treatment","Prophylaxis","LAIV","Deterioration","Public health"],"Make the initial choice quickly, then keep reassessment and seasonal guidance active throughout the course.",[
      ["Separate treatment and prevention","A symptomatic patient needs a treatment decision. Post-exposure prophylaxis requires exposure timing, host risk, age, vaccine status, outbreak context, product indication, and a distinct regimen."],
      ["Coordinate live vaccine timing","Antivirals can suppress replication of intranasal live attenuated vaccine. Verify the product and dates and follow agent-specific spacing. Inactivated vaccine is not governed by the same live-virus mechanism."],
      ["Audit worsening illness","Reassess oxygenation, hemodynamics, bacterial pneumonia, COVID-19, adherence, absorption, device or infusion delivery, renal dose, immune status, and resistance. Do not automatically repeat a single dose."],
      ["Use current evidence","CDC recommendations change with circulating susceptibility and evidence. This module supports verification but does not replace patient-specific diagnosis, current seasonal guidance, labeling, local policy, or qualified prescribing."]
    ],["Treatment and prophylaxis are distinct decisions.","LAIV timing depends on live viral replication.","Deterioration requires a broad urgent audit.","Seasonal guidance and patient context govern application."],check("A treated patient develops new fever, hypoxemia, and focal crackles. What is the priority?",["Evaluate urgently for secondary bacterial pneumonia","Repeat baloxavir automatically","Assume resistance without reassessment","Ignore the change because treatment ended"],"A biphasic decline with focal findings can signal a serious bacterial complication.","integrated-influenza-system"))
  ],
  references:[
    {label:"CDC Influenza Antiviral Medications: Summary for Clinicians, March 2026",href:"https://www.cdc.gov/flu/hcp/antivirals/summary-clinicians.html"},
    {label:"DailyMed Tamiflu, current label",href:"https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee3c9555-60f2-4f82-a760-11983c86e97b"},
    {label:"DailyMed Relenza, revised October 2023",href:"https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d7c3bcc3-0c0d-4068-fd80-88cf54a376ef"},
    {label:"DailyMed Rapivab",href:"https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fe04f6cd-e71c-4bd4-abac-97720bba2a0d"},
    {label:"DailyMed Xofluza, updated December 2025",href:"https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e49e1a61-1b7c-4be5-ac84-af6240b511e7&version=30"}
  ],
  questionBank:influenzaAntiviralPharmacologyQuestionBank
};


// Complete oseltamivir dosing and delivery reconciliation against authorized sources.
for (const [slug, updates] of Object.entries({
  "oseltamivir-dosing-administration": {
    "slug": "oseltamivir-dosing-administration",
    "title": "Calculate Oseltamivir Exposure",
    "visual": "influenza-antiviral-oseltamivir-dosing-administration",
    "summary": "Choose the indication and calendar, verify age and weight, adjust for kidney function and dialysis, then deliver and store the exact oseltamivir preparation.",
    "concepts": [
      "Treatment versus prophylaxis",
      "Age and weight dosing",
      "6 mg/mL conversion",
      "Renal and dialysis schedule",
      "Commercial versus emergency suspension"
    ],
    "application": "Write the dose, interval, duration, route and preparation explicitly; show that the measured volume and available supply can deliver the complete course.",
    "lesson": [
      {
        "heading": "Separate treatment from prophylaxis",
        "body": "For adults and adolescents at least 13 years old with uncomplicated influenza and no renal adjustment, treatment is 75 mg twice daily for five days. The same 75 mg dose is used once daily for prophylaxis. Start treatment promptly: the label describes uncomplicated illness within 48 hours, while the book and CDC support later treatment for hospitalized, severe, progressive or high-risk illness. Hospitalized or prolonged severe illness can require an individualized duration; do not automatically double the dose or apply a five-day outpatient course to every admission."
      },
      {
        "heading": "Use current pediatric dosing",
        "body": "Under the Tamiflu label, infants from 2 weeks to less than 1 year receive 3 mg/kg per dose twice daily for five days. For children 1 through 12 years, each treatment dose is 30 mg at 15 kg or less, 45 mg above 15 through 23 kg, 60 mg above 23 through 40 kg, and 75 mg above 40 kg, given twice daily. Labeled prophylaxis starts at age 1 year and uses those same weight-band doses once daily. Verify age, current kilograms, indication and renal context before converting milligrams into volume."
      },
      {
        "heading": "Calculate suspension volume",
        "body": "The commercial constituted suspension contains 6 mg/mL. Divide the ordered milligrams by 6 mg/mL: 30, 45, 60 and 75 mg require 5, 7.5, 10 and 12.5 mL respectively. A 45 mg twice-daily five-day course requires ten doses, or 75 mL; one commercial bottle delivers 60 mL, so it is insufficient for that course. Shake well and use a suitable milliliter-marked oral device. Check the concentration, individual dose, measuring technique and total course supply together."
      },
      {
        "heading": "Adjust and store precisely",
        "body": "Adult renal adjustment uses estimated creatinine clearance and the indication. Above 60 mL/min, use the standard regimen. Above 30 through 60 mL/min, treatment is 30 mg twice daily for five days and prophylaxis is 30 mg once daily. Above 10 through 30 mL/min, treatment is 30 mg once daily for five days and prophylaxis is 30 mg every other day. Exactly 30 mL/min belongs to the lower-dose band. Pediatric renal dosing is not supplied in the Tamiflu label; obtain an appropriate individualized plan rather than applying the adult table indiscriminately. Storage also depends on the exact preparation, as described below."
      },
      {
        "heading": "Name the prophylaxis calendar",
        "body": "The book gives a ten-day post-exposure course; the Tamiflu label specifies at least ten days after close contact for adults and ten days for children. CDC guidance recommends seven days after the last known exposure. For institutional outbreaks, CDC recommends at least two weeks and continuation through one week after the last known case. The label separately allows community-outbreak prophylaxis for up to six weeks, or up to twelve weeks in immunocompromised patients. Identify the setting, exposure endpoint and chosen guidance when documenting the duration; these different calendars are not interchangeable."
      },
      {
        "heading": "Distinguish term and premature infants",
        "body": "CDC recommends treatment even below the labeled age of 14 days and prophylaxis from age 3 months to less than 1 year at 3 mg/kg once daily. Below 3 months, prophylaxis is generally avoided unless the situation is critical. CDC notes the AAP treatment recommendation of 3.5 mg/kg twice daily for infants 9 to 11 months, distinct from the label dose. Premature infants require postmenstrual age, calculated as gestational plus chronological age: CDC treatment doses are 1 mg/kg twice daily below 38 weeks, 1.5 mg/kg twice daily at 38 through 40 weeks, and 3 mg/kg twice daily above 40 weeks. Do not apply the full-term infant dose without that assessment."
      },
      {
        "heading": "Choose a deliverable formulation",
        "body": "Capsules and suspension can be taken with or without food; food may reduce stomach upset. Suspension is preferred when capsules cannot be swallowed. If the commercial suspension is unavailable, the label permits opening an appropriate-strength capsule and mixing its contents with a specified sweetened liquid under pharmacist or clinician instructions. CDC recommends oral or enterically administered oseltamivir for hospitalized influenza, but impaired absorption or tolerance requires reassessment. Verify the exact product, prescribed dose and local tube-delivery procedure; the oral label does not establish a universal feeding hold, dilution or flushing schedule. Vomiting or an incompletely delivered dose needs clinical review rather than automatic redosing."
      },
      {
        "heading": "Link dialysis doses to the actual schedule",
        "body": "For adults with end-stage renal disease on hemodialysis, the label gives 30 mg immediately, then 30 mg after each hemodialysis cycle for treatment, over no more than five days. Prophylaxis uses 30 mg immediately and after alternate cycles. The initial treatment dose does not replace the dose after the next dialysis session. For continuous ambulatory peritoneal dialysis, labeled treatment is one 30 mg dose; CDC specifies immediately after an exchange. Labeled prophylaxis is 30 mg immediately and then once weekly. These CAPD data do not define every dialysis modality, and oseltamivir is not recommended in end-stage renal disease without dialysis."
      },
      {
        "heading": "Label the commercial suspension",
        "body": "For the branded Tamiflu powder bottle, the pharmacist adds 55 mL water and shakes for 15 seconds, producing a usable 60 mL of 6 mg/mL suspension. The water added is not the final deliverable volume. Label the preparation date, expiration and shaking instructions. Use this constituted commercial product within 17 days at 2 to 8 degrees C without freezing, or within ten days at controlled room temperature, 25 degrees C. Confirm the instructions for the actual dispensed product rather than transferring branded preparation instructions to a different product."
      },
      {
        "heading": "Keep emergency preparation separate",
        "body": "When the commercial suspension and suitable capsule strengths are unavailable in an emergency, the label supplies a pharmacist preparation from 75 mg Tamiflu capsules to 6 mg/mL. Follow its complete capsule, water, vehicle and volume tables; the studied vehicles are Cherry Syrup, Ora-Sweet SF or simple syrup, with glass or PET containers. This emergency preparation is stable for five weeks refrigerated at 2 to 8 degrees C or five days at 25 degrees C. Its calendar differs from the commercial powder suspension even though both contain 6 mg/mL. Do not improvise a batch recipe from the concentration alone; label the formulation and discard remaining suspension after the course."
      }
    ],
    "keyPoints": [
      "Treatment and prophylaxis use different frequencies and may use different duration guidance.",
      "Infant, premature-infant and pediatric weight-band regimens require separate assessment.",
      "A 45 mg dose at 6 mg/mL is 7.5 mL; ten doses require 75 mL.",
      "Match renal/dialysis dosing and storage to the indication and exact preparation."
    ],
    "check": {
      "question": "What volume of 6 mg/mL oseltamivir suspension provides 45 mg?",
      "choices": [
        "7.5 mL",
        "45 mL",
        "6 mL",
        "2.7 mL"
      ],
      "answer": 0,
      "rationale": "Divide 45 mg by 6 mg per mL.",
      "reviewHref": "#oseltamivir-dosing-administration"
    }
  }
})) {
  Object.assign(influenzaAntiviralPharmacologyModule.submodules.find((lesson) => lesson.slug === slug), updates);
}


// Complete influenza biology and triage reconciliation against authorized sources.
Object.assign(influenzaAntiviralPharmacologyModule.submodules.find((lesson) => lesson.slug === "influenza-biology-triage"), {
  "slug": "influenza-biology-triage",
  "title": "Recognize the Influenza Decision State",
  "visual": "influenza-antiviral-influenza-biology-triage",
  "summary": "Recognize suspected influenza, identify priority treatment groups, interpret testing limits and reassess complications while preserving seasonal prevention.",
  "concepts": [
    "Influenza A and B syndrome",
    "High-risk host and severity",
    "Empiric treatment",
    "Testing and coinfection",
    "Deterioration and prevention"
  ],
  "application": "Record onset, host risk, illness trajectory and care setting; arrange prompt treatment and testing without delaying evaluation of respiratory or circulatory danger.",
  "lesson": [
    {
      "heading": "Recognize the syndrome",
      "body": "Influenza A and B commonly cause human seasonal influenza and can each cause severe respiratory illness. Abrupt fever or chills, cough, myalgia, headache, fatigue and sore throat support the syndrome, but fever may be absent. COVID-19 and other respiratory infections can resemble or coexist with influenza. The book describes contagiousness beginning about one day before symptoms and lasting five to seven days after illness begins; do not use that summary as an individualized isolation order."
    },
    {
      "heading": "Identify the high-risk host",
      "body": "The book highlights pregnancy, immunocompromise, children younger than 5 years, adults 65 years or older, diabetes, asthma and cardiovascular disease. CDC further emphasizes children younger than 2 years and risk through two weeks after pregnancy ends. Its risk groups also include chronic lung, neurologic, blood, endocrine, renal, hepatic or metabolic disease; severe obesity with BMI at least 40 kg/m2; long-term salicylate use below age 19; long-term-care residence; and conditions that impair coughing, swallowing or airway clearance. Assess the actual history rather than age alone."
    },
    {
      "heading": "Treat priority patients now",
      "body": "Hospitalization, severe or complicated or progressive illness, and high risk for complications support empiric antiviral treatment as soon as possible when influenza is suspected. Do not wait for laboratory confirmation. The greatest benefit is with early treatment, but passing 48 hours does not exclude these priority patients. CDC recommends oral or enteric oseltamivir for hospitalized patients and prefers oral oseltamivir during pregnancy. A stable, otherwise healthy outpatient within two days can be considered for treatment by clinical judgment; that is a different decision from the priority groups."
    },
    {
      "heading": "Interpret testing without delaying care",
      "body": "The book distinguishes molecular assays from antigen detection. A negative rapid antigen test does not exclude influenza, especially during high community activity; a rapid antigen test is not the same as a rapid molecular assay. Hospitalized patients should have molecular influenza testing while empiric treatment proceeds. During influenza and SARS-CoV-2 co-circulation, a positive result for either virus does not exclude the other. Symptoms, vaccination history and a single negative rapid antigen result must not replace assessment of risk, severity and competing diagnoses."
    },
    {
      "heading": "Detect deterioration",
      "body": "Breathing difficulty, hypoxemia, persistent chest pain, confusion, dehydration or circulatory instability needs urgent clinical reassessment. Fever or cough that improves and then returns or worsens can signal a complication. Influenza pneumonia can be viral, bacterial or mixed; an antiviral does not treat bacterial infection. IDSA recommends investigating and empirically treating bacterial coinfection when influenza presents with severe disease or when a patient deteriorates after initial improvement, alongside influenza treatment. Consider bacterial investigation if improvement fails after three to five antiviral-treatment days. Select examination, imaging and microbiology for the clinical setting; no single symptom proves a bacterial cause."
    },
    {
      "heading": "Preserve prevention",
      "body": "Seasonal vaccination remains the main prevention measure and is recommended from age 6 months when there is no contraindication. An antiviral course does not provide permanent immunity, and prior vaccination does not rule out influenza in a symptomatic patient. Continue respiratory hygiene and appropriate infection-control or outbreak measures. Confirm the vaccine product and antiviral timing because live intranasal vaccine has interaction concerns; do not assume the same timing rule applies to every vaccine product."
    }
  ],
  "keyPoints": [
    "Treat suspected influenza promptly in hospitalized, severe, progressive or high-risk patients.",
    "A negative rapid antigen test and prior vaccination do not rule out influenza.",
    "New deterioration requires evaluation for bacterial disease and other complications.",
    "Antivirals complement seasonal vaccination and infection-control measures."
  ],
  "check": {
    "question": "Which patient has a priority indication for prompt empiric influenza treatment while confirmatory testing is arranged?",
    "choices": [
      "A hospitalized patient with suspected influenza whose test result is pending",
      "A healthy asymptomatic adult without known influenza exposure",
      "A low-risk adult whose only symptom is unchanged chronic allergic rhinitis",
      "A recovered adult asking for an antiviral course as a substitute for seasonal vaccination"
    ],
    "answer": 0,
    "rationale": "Suspected influenza in a hospitalized patient warrants prompt treatment without waiting for confirmation. The other scenarios do not establish a priority treatment indication.",
    "reviewHref": "#influenza-biology-triage"
  }
});
influenzaAntiviralPharmacologyModule.references.push(...[
  {
    "label": "CDC Signs and Symptoms of Flu",
    "href": "https://www.cdc.gov/flu/signs-symptoms/index.html"
  },
  {
    "label": "CDC People at Increased Risk for Flu Complications",
    "href": "https://www.cdc.gov/flu/highrisk/index.htm"
  },
  {
    "label": "CDC Rapid Influenza Diagnostic Tests, June 2026",
    "href": "https://www.cdc.gov/flu/hcp/testing-methods/clinician_guidance_ridt.html"
  },
  {
    "label": "IDSA Seasonal Influenza Guideline, 2018: bacterial coinfection",
    "href": "https://www.idsociety.org/practice-guideline/influenza/"
  }
]);
