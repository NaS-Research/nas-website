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


// Complete influenza life-cycle target reconciliation against authorized sources.
Object.assign(influenzaAntiviralPharmacologyModule.submodules.find((lesson) => lesson.slug === "influenza-life-cycle-targets"), {
  "slug": "influenza-life-cycle-targets",
  "title": "Interrupt Viral Release or Transcription",
  "visual": "influenza-antiviral-influenza-life-cycle-targets",
  "summary": "Distinguish neuraminidase-mediated release, PA-dependent transcription and historical M2 inhibition; interpret susceptibility evidence without equating persistent illness with resistance.",
  "concepts": [
    "Neuraminidase and sialic acid",
    "PA endonuclease and cap snatching",
    "Historical M2 inhibition",
    "Target-specific susceptibility",
    "Clinical failure assessment"
  ],
  "application": "Identify the viral target and active drug, then assess the patient and actual drug exposure before attributing nonresponse to resistance.",
  "lesson": [
    {
      "heading": "Block progeny release",
      "body": "Oseltamivir carboxylate, zanamivir and peramivir inhibit influenza A and B neuraminidase. The book emphasizes inhibition of new viral-particle release. Neuraminidase cleaves terminal sialic acid; inhibiting that activity limits release and spread of progeny virions. Oseltamivir phosphate is the administered prodrug, while oseltamivir carboxylate is its active inhibitor. Distinguish this release mechanism from PA-dependent transcription and M2-mediated uncoating."
    },
    {
      "heading": "Block cap snatching",
      "body": "Baloxavir marboxil is hydrolyzed to active baloxavir, which inhibits the endonuclease activity of the influenza polymerase acidic (PA) protein. During cap snatching, host capped RNA is cleaved to provide primers for viral messenger RNA transcription. Inhibiting PA interrupts this transcription step rather than neuraminidase-mediated release. Both influenza A and B are susceptible targets, but the mechanism alone does not establish eligibility for every patient or care setting."
    },
    {
      "heading": "Retire the adamantanes",
      "body": "Amantadine and rimantadine inhibit the influenza A M2 proton channel, disrupting a process needed for viral uncoating. They are distinct from neuraminidase inhibitors and baloxavir. The book and current CDC guidance do not recommend adamantanes for seasonal influenza treatment or prophylaxis because of widespread resistance among circulating influenza A viruses. A historical influenza indication or an amantadine prescription for Parkinson disease does not establish current influenza protection."
    },
    {
      "heading": "Place resistance in context",
      "body": "Changes in neuraminidase can reduce susceptibility to neuraminidase inhibitors, while PA substitutions can reduce susceptibility to baloxavir. The effect depends on the virus, substitution and drug; do not assume every inhibitor of one target has identical susceptibility. Different targets do not guarantee that a virus cannot resist multiple drug classes. Label microbiology describes laboratory susceptibility, whose relationship to an individual clinical outcome may be uncertain; use current surveillance and appropriate testing rather than a universal cross-resistance rule."
    },
    {
      "heading": "Reassess before assigning resistance",
      "body": "Failure to improve or deterioration does not by itself prove resistant influenza. Reassess the diagnosis, illness trajectory, treatment timing, actual dose, adherence, absorption and delivery, host immune status and complications, including bacterial disease. CDC notes that deterioration during oseltamivir or peramivir treatment is often related to lung injury or other complications. Persistent replication in an immunocompromised host increases concern for resistance, but can also occur without resistance."
    },
    {
      "heading": "Investigate selected resistance concerns",
      "body": "IDSA supports considering neuraminidase-inhibitor resistance testing for laboratory-confirmed influenza during or immediately after prophylaxis, inadvertent subtherapeutic dosing, or persistent replication with ongoing illness in an immunocompromised or severely ill patient. Its examples of persistent replication use seven to ten days; that is not a reason to postpone urgent reassessment. Review current surveillance and seek appropriate infectious-disease or public-health expertise. Choose any alternative from susceptibility evidence and patient-specific route, safety and indication constraints."
    }
  ],
  "keyPoints": [
    "Neuraminidase inhibitors limit release and spread of progeny influenza virions.",
    "Active baloxavir inhibits PA endonuclease required for viral transcription.",
    "Adamantanes target M2 but are not recommended for seasonal influenza.",
    "Persistent illness requires reassessment; resistance needs contextual evidence."
  ],
  "check": {
    "question": "Which process is directly inhibited by baloxavir?",
    "choices": [
      "PA endonuclease activity required for cap snatching",
      "Neuraminidase-mediated virion release",
      "M2 ion conduction only",
      "Bacterial cell-wall synthesis"
    ],
    "answer": 0,
    "rationale": "Active baloxavir inhibits PA cap-dependent endonuclease and viral transcription. Neuraminidase-mediated release is the target of oseltamivir carboxylate, zanamivir and peramivir; M2 is the historical adamantane target. Influenza antiviral treatment does not inhibit bacterial cell-wall synthesis.",
    "reviewHref": "#influenza-life-cycle-targets"
  }
});
influenzaAntiviralPharmacologyModule.references.push(...[
  {
    "label": "Primary study: influenza cap-snatching endonuclease substrate specificity, 2021",
    "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7897473/"
  },
  {
    "label": "Primary study: amantadine and the influenza A M2 proton channel, 2007",
    "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC1914427/"
  },
  {
    "label": "Primary study: influenza neuraminidase and progeny release, 2012",
    "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3445474/"
  }
]);


// Complete influenza selection and timing reconciliation against authorized sources.
Object.assign(influenzaAntiviralPharmacologyModule.submodules.find((lesson) => lesson.slug === "influenza-selection-timing"), {
  "slug": "influenza-selection-timing",
  "title": "Match Drug to Patient and Setting",
  "visual": "influenza-antiviral-influenza-selection-timing",
  "summary": "Treat priority patients promptly, interpret the two-day window in context, and match the antiviral to setting, age, route and evidence limits.",
  "concepts": [
    "Timing and treatment priority",
    "Hospitalized oseltamivir",
    "Unreliable enteral absorption",
    "Age and route eligibility",
    "Baloxavir population limits"
  ],
  "application": "Choose an antiviral from the patient\u2019s treatment priority, setting and delivery needs; verify product-specific eligibility, safety and interactions before selecting for convenience.",
  "lesson": [
    {
      "heading": "Use time and priority together",
      "body": "Benefit is greatest when treatment starts early, ideally within two days of symptom onset. The book and CDC support prompt treatment for hospitalized patients, severe or progressive illness, and patients at higher risk of complications even when more than 48 hours have passed. Do not delay treatment in these priority groups while awaiting influenza test results. For an otherwise healthy outpatient without higher-risk features, CDC permits consideration of early treatment based on clinical judgment when it can start within two days; this is not a requirement to treat every uncomplicated illness."
    },
    {
      "heading": "Prefer oseltamivir in hospitalized influenza",
      "body": "CDC recommends oral or enterically administered oseltamivir as soon as possible for hospitalized patients with suspected or confirmed influenza, including those presenting after two days. Inhaled zanamivir, IV peramivir and oral baloxavir are not routinely recommended for hospitalized influenza because evidence of clinical benefit is insufficient. A single-dose outpatient indication or an IV route does not establish a preferred hospital regimen. These hospital recommendations draw on evidence beyond the acute uncomplicated influenza indications in FDA labeling."
    },
    {
      "heading": "Assess an unreliable enteral route",
      "body": "Hospitalization or a feeding tube alone does not mean oseltamivir cannot be delivered or absorbed. Evaluate actual enteral tolerance and absorption. CDC states that IV peramivir may be considered when a hospitalized patient cannot tolerate or absorb oral or enteric oseltamivir, such as with gastric stasis, malabsorption or gastrointestinal bleeding. This is a qualified alternative, not proof of routine inpatient efficacy: the Rapivab label states that efficacy could not be established in serious influenza requiring hospitalization. Review renal function and the clinical context rather than automatically substituting a single outpatient dose."
    },
    {
      "heading": "Verify treatment age and route",
      "body": "For eligible uncomplicated outpatients presenting within two days, CDC lists oral oseltamivir, inhaled zanamivir, IV peramivir and oral baloxavir. Verify each product: FDA treatment ages are at least two weeks for oseltamivir, seven years for zanamivir, six months for peramivir and five years for baloxavir. CDC and AAP also recommend oseltamivir treatment in younger infants outside that labeled age. Treatment ages differ from prophylaxis ages. Zanamivir requires correct Diskhaler use and is not recommended with underlying airway disease because of serious bronchospasm risk; milk-protein allergy is a labeled contraindication. Check renal dosing needs for oseltamivir and peramivir and verify the specific formulation, weight-based dose and access."
    },
    {
      "heading": "Respect baloxavir population limits",
      "body": "The current Xofluza label permits treatment of acute uncomplicated influenza within 48 hours in patients at least five years old who are otherwise healthy or at high risk of complications. CDC does not recommend baloxavir during pregnancy or breastfeeding because relevant human efficacy and safety data are unavailable; oral oseltamivir is the preferred influenza treatment during pregnancy. CDC also does not recommend baloxavir monotherapy in severely immunosuppressed patients, where prolonged replication raises resistance concerns. Do not broaden that wording to every immune condition or assume its outpatient high-risk indication establishes efficacy for hospitalized or complicated/progressive illness. These evidence-based recommendations are distinct from the label\u2019s hypersensitivity contraindication."
    },
    {
      "heading": "Make delivery part of selection",
      "body": "A convenient schedule cannot overcome poor delivery, an unsuitable population or a clinically important interaction. Relenza is a dry powder for oral inhalation through the supplied Diskhaler, not a powder to place in a nebulizer or ventilator. Assess the patient\u2019s ability to use the device and provide instruction. Xofluza has oral suspension presentations for swallowing difficulty or enteral administration; follow the instructions for the actual presentation. Avoid taking baloxavir with dairy products, calcium-fortified beverages, or polyvalent-cation-containing antacids, laxatives or oral supplements because these can reduce exposure. Availability of a suspension or feeding-tube route does not change its population or illness-setting limits."
    }
  ],
  "keyPoints": [
    "Start priority patients promptly; more than 48 hours does not rule out treatment.",
    "Oral or enteric oseltamivir is the routine hospitalized choice.",
    "Verify product-specific age, delivery, safety and renal dosing requirements.",
    "Baloxavir convenience does not overcome its evidence limits or cation interactions."
  ],
  "check": {
    "question": "What routine antiviral does CDC recommend for hospitalized influenza?",
    "choices": [
      "Oral or enterically administered oseltamivir",
      "Single-dose baloxavir",
      "Inhaled zanamivir for every patient",
      "No therapy after 48 hours"
    ],
    "answer": 0,
    "rationale": "CDC recommends oral or enterically administered oseltamivir promptly for hospitalized influenza, including presentation after 48 hours. Baloxavir and inhaled zanamivir are not routine hospitalized choices; zanamivir also requires airway and device suitability. The two-day window is not a reason to withhold treatment from a hospitalized patient.",
    "reviewHref": "#influenza-selection-timing"
  }
});


// Complete oseltamivir mechanism and pharmacokinetics reconciliation against authorized sources.
Object.assign(influenzaAntiviralPharmacologyModule.submodules.find((lesson) => lesson.slug === "oseltamivir-mechanism-pk"), {
  "slug": "oseltamivir-mechanism-pk",
  "title": "Activate the Oseltamivir Prodrug",
  "visual": "influenza-antiviral-oseltamivir-mechanism-pk",
  "summary": "Follow the orally absorbed ester prodrug through hepatic esterase activation, influenza neuraminidase inhibition and renal elimination of oseltamivir carboxylate.",
  "concepts": [
    "Ester prodrug activation",
    "Active carboxylate exposure",
    "Neuraminidase inhibition",
    "Filtration and tubular secretion",
    "Documented interaction boundaries"
  ],
  "application": "Identify the active species and its elimination route, then review kidney function, indication and documented interactions without inferring a dose from one pharmacokinetic number.",
  "lesson": [
    {
      "heading": "Read the prodrug and exposure",
      "body": "Oseltamivir phosphate is an ethyl ester prodrug absorbed from the gastrointestinal tract and converted predominantly by hepatic esterases to oseltamivir carboxylate. The carboxylate is the active neuraminidase inhibitor. Tamiflu labeling reports that at least 75% of an oral dose reaches systemic circulation as the carboxylate, while less than 5% reaches circulation as oseltamivir. These percentages describe fractions of the administered dose, not the percentage of plasma molecules in one sample. Ester hydrolysis, rather than a CYP3A4 conversion, produces the active form."
    },
    {
      "heading": "Connect the active form to the target",
      "body": "Oseltamivir carboxylate inhibits influenza A and B neuraminidase, affecting release of progeny viral particles. This matches the release mechanism described in the book. It is distinct from baloxavir inhibition of PA endonuclease and from historical M2 inhibition. Blocking further viral release is not a mechanism for immediately repairing established respiratory epithelial injury. Greatest benefit with early treatment does not make two days a universal treatment cutoff; retain the priority-patient and setting assessment in the selection lesson."
    },
    {
      "heading": "Follow active-metabolite elimination",
      "body": "Oseltamivir carboxylate is not further metabolized and is eliminated unchanged through renal excretion. Its renal clearance includes glomerular filtration and active tubular secretion through an organic anion transport pathway. The label reports renal excretion of more than 99% of the active metabolite; this does not mean every milligram of the administered prodrug is excreted unchanged. Reduced renal function increases active-metabolite exposure. Review the indication and exact renal or dialysis regimen in the dosing lesson instead of transferring a standard schedule to every patient. Label half-lives in most subjects are one to three hours for oseltamivir and six to ten hours for the carboxylate; these ranges alone do not prescribe a treatment schedule."
    },
    {
      "heading": "Separate activation from CYP assumptions",
      "body": "Tamiflu labeling states that neither oseltamivir nor oseltamivir carboxylate is a substrate for, or inhibitor of, cytochrome P450 isoforms. Do not invent routine CYP3A4-based dose changes or describe the active carboxylate as a CYP product. Hepatic esterase activation also does not mean every degree of liver impairment requires dose reduction: no adjustment is required in mild to moderate hepatic impairment, while severe hepatic impairment has not been evaluated for safety and pharmacokinetics. Lack of a CYP interaction does not exclude transport-mediated or vaccine interactions."
    },
    {
      "heading": "Review food and documented interactions",
      "body": "Food has no significant effect on active-metabolite exposure in the label\u2019s pharmacokinetic study; administration with food may improve tolerability. Probenecid reduces active anionic tubular secretion and approximately doubles exposure to oseltamivir carboxylate. The label does not require a dose adjustment solely for this coadministration, but kidney function and the independently indicated regimen still require review. Intranasal live attenuated influenza vaccine can be affected by antiviral inhibition of vaccine-virus replication, so check vaccine timing. Inactivated influenza vaccine may be given at any time relative to Tamiflu. A low CYP interaction burden is not permission to omit the medication and formulation review."
    }
  ],
  "keyPoints": [
    "Hepatic esterases convert oseltamivir phosphate to active oseltamivir carboxylate.",
    "The carboxylate inhibits neuraminidase-mediated viral-particle release.",
    "Unchanged active metabolite leaves through renal filtration and tubular secretion.",
    "CYP findings do not eliminate renal, probenecid or live-vaccine review."
  ],
  "check": {
    "question": "Which species directly inhibits influenza neuraminidase after oral oseltamivir?",
    "choices": [
      "Oseltamivir carboxylate",
      "Oseltamivir phosphate only",
      "Sorbitol",
      "A CYP3A4 metabolite"
    ],
    "answer": 0,
    "rationale": "Oseltamivir carboxylate is the active neuraminidase inhibitor formed by esterase hydrolysis of the prodrug. The administered phosphate salt is not the final active species, and activation is not through CYP3A4. Sorbitol is an ingredient in the commercial suspension, not the antiviral metabolite.",
    "reviewHref": "#oseltamivir-mechanism-pk"
  }
});


// Complete oseltamivir safety and population reconciliation against authorized sources.
Object.assign(influenzaAntiviralPharmacologyModule.submodules.find((lesson) => lesson.slug === "oseltamivir-safety-populations"), {
  "slug": "oseltamivir-safety-populations",
  "title": "Monitor the Host and Formulation",
  "visual": "influenza-antiviral-oseltamivir-safety-populations",
  "summary": "Assess gastrointestinal tolerance, serious hypersensitivity, abnormal behavior, secondary infection and the exact formulation, then apply qualified pregnancy and lactation evidence.",
  "concepts": [
    "Gastrointestinal tolerance",
    "Serious hypersensitivity",
    "Behavior and infection assessment",
    "Suspension sorbitol",
    "Pregnancy and lactation evidence"
  ],
  "application": "Separate a mild tolerability problem from a suspected serious reaction, evaluate influenza complications and formulation ingredients, and explain pregnancy or lactation recommendations without claiming zero risk.",
  "lesson": [
    {
      "heading": "Improve gastrointestinal tolerance",
      "body": "The book lists headache, nausea, vomiting, diarrhea and abdominal pain among oseltamivir adverse effects. In Tamiflu adult and adolescent trials, many common reactions occurred early and resolved within one to two days. Food may improve tolerability, although administration with food is not required. Assess hydration, the ability to retain oral treatment and persistent or severe symptoms rather than assuming every gastrointestinal complaint is either harmless or caused by the drug. A single mild nausea episode without serious reaction findings does not by itself require abandoning treatment."
    },
    {
      "heading": "Stop suspected serious hypersensitivity",
      "body": "Anaphylaxis and serious skin reactions, including Stevens-Johnson syndrome, toxic epidermal necrolysis and erythema multiforme, have been reported after marketing. Tamiflu labeling directs discontinuation and appropriate treatment if an allergic-like reaction occurs or is suspected. Known serious hypersensitivity to oseltamivir or a product component is a contraindication. A progressive skin or mucosal reaction, facial or tongue swelling, or breathing difficulty warrants prompt assessment and treatment; taking the next dose with food is not the response to suspected serious hypersensitivity."
    },
    {
      "heading": "Monitor behavior without assigning causality",
      "body": "Influenza itself can cause hallucinations, delirium and abnormal behavior, with or without obvious severe disease or associated encephalitis or encephalopathy. Postmarketing reports during Tamiflu use include abnormal behavior leading to injury, primarily in children. The contribution of oseltamivir has not been established, and voluntary reports cannot provide a reliable event rate. Closely monitor behavior, protect the patient from injury and evaluate the illness and treatment together. Report confusion, seizures or hallucinations to a clinician right away, as directed in the patient information. If neuropsychiatric symptoms occur, assess the risks and benefits of continuing oseltamivir for that individual instead of applying an automatic continuation or withdrawal rule."
    },
    {
      "heading": "Look for bacterial complications",
      "body": "Oseltamivir acts against influenza viruses and has not been shown to prevent secondary bacterial complications. A bacterial infection may resemble influenza initially, coexist with it or develop during its course. Continued or worsening illness requires assessment for complications and appropriate treatment when identified. An antiviral prescription does not establish that a new bacterial infection is covered, nor does every persistent symptom prove an adverse drug reaction."
    },
    {
      "heading": "Check the exact suspension ingredients",
      "body": "The labeled commercial Tamiflu powder for oral suspension contains sorbitol. Its label states that a 75 mg dose delivers 2 g of sorbitol, exceeding the stated daily maximum for patients with hereditary fructose intolerance and potentially causing dyspepsia or diarrhea. Screen for hereditary fructose intolerance and review the exact product ingredients before selecting a formulation. This is an excipient warning, not an adverse effect of oseltamivir carboxylate itself or a preference about ordinary dietary sweetness. Do not transfer this amount to every generic or compounded preparation; a substitute formulation and its vehicle require their own ingredient review."
    },
    {
      "heading": "Treat influenza promptly during pregnancy",
      "body": "The book identifies oseltamivir as preferred during pregnancy. CDC recommends oral oseltamivir for suspected or confirmed influenza of any severity during any trimester and up to two weeks postpartum, including after pregnancy loss, because it has the most supportive human experience. Start promptly without waiting for laboratory confirmation; greatest early benefit does not exclude later treatment in a priority patient. The Tamiflu label describes reassuring observational birth-defect findings but also study limitations that prevent a definitive risk assessment. Explain the treatment benefit and evidence limits using the current narrative pregnancy section rather than treating an old letter category as proof of safety or a contraindication. CDC does not recommend baloxavir during pregnancy because efficacy and safety data are unavailable."
    },
    {
      "heading": "Use qualified lactation evidence",
      "body": "Tamiflu labeling describes limited published data showing low levels of oseltamivir and its active carboxylate in human milk, considered unlikely to cause infant toxicity. That finding does not mean absent milk transfer or proven safety for every infant, and effects on milk production are unknown. Consider breastfeeding benefits, the mother\u2019s need for treatment and potential effects of the drug or maternal illness on the child. CDC does not recommend baloxavir while breastfeeding because the relevant human milk and infant data are unavailable. Maternal oseltamivir treatment is not a substitute for evaluating or prescribing treatment for an ill infant."
    }
  ],
  "keyPoints": [
    "Food may improve gastrointestinal tolerance; persistent or severe symptoms still need assessment.",
    "Stop oseltamivir and treat suspected serious hypersensitivity; assess behavioral symptoms without assuming drug causality.",
    "Commercial Tamiflu suspension sorbitol requires a hereditary fructose intolerance screen.",
    "CDC prefers prompt oseltamivir treatment in pregnancy; pregnancy and lactation evidence retain important limits."
  ],
  "check": {
    "question": "Why is oseltamivir preferred for influenza treatment during pregnancy?",
    "choices": [
      "It has the greatest supportive human experience and CDC recommends it",
      "It never reaches systemic circulation",
      "Pregnancy prevents severe influenza",
      "Baloxavir has more pregnancy evidence"
    ],
    "answer": 0,
    "rationale": "CDC prefers oseltamivir because it has the most supportive human pregnancy experience and the available benefit-risk evidence favors prompt treatment. It does reach systemic circulation, and pregnancy raises rather than removes the risk of severe influenza. Baloxavir has insufficient pregnancy evidence; supportive oseltamivir data do not establish zero risk.",
    "reviewHref": "#oseltamivir-safety-populations"
  }
});
influenzaAntiviralPharmacologyModule.references.push(...[
  {
    "label": "CDC: antiviral treatment and prevention during pregnancy and postpartum",
    "href": "https://www.cdc.gov/flu/hcp/antivirals/treatment_obstetric.html"
  }
]);


// Complete zanamivir dose, device and safety reconciliation against authorized sources.
Object.assign(influenzaAntiviralPharmacologyModule.submodules.find((lesson) => lesson.slug === "zanamivir-pharmacology-safety"), {
  "slug": "zanamivir-pharmacology-safety",
  "title": "Verify the Zanamivir Device and Airway",
  "visual": "influenza-antiviral-zanamivir-pharmacology-safety",
  "summary": "Link inhaled neuraminidase inhibition to the labeled two-blister dose, demonstrated Diskhaler technique, airway and ingredient screening, and the separate treatment, prophylaxis and live-vaccine calendars.",
  "concepts": [
    "Two-blister dose",
    "Diskhaler technique",
    "Airway warning",
    "Milk-protein allergy",
    "Prophylaxis and LAIV calendars"
  ],
  "application": "Verify the indication, full two-inhalation dose and demonstrated delivery, then distinguish an airway warning, a true ingredient-allergy contraindication and a live-vaccine timing interaction.",
  "lesson": [
    {
      "heading": "Build the labeled treatment dose",
      "body": "Zanamivir inhibits influenza neuraminidase, limiting release of viral particles from infected cells and their spread in the respiratory tract. Relenza is labeled for uncomplicated influenza A or B in patients aged 7 years and older who have been symptomatic for no more than two days. Treatment is 10 mg twice daily for five days, with each dose delivered as two separate 5 mg blister inhalations through the supplied Diskhaler. Give two doses on the first day when possible, at least two hours apart; subsequent doses are approximately 12 hours apart. The labeled dose uses the blister strength, not an independently estimated amount deposited in the airway. Priority-patient treatment decisions and later presentation require the separate clinical selection assessment."
    },
    {
      "heading": "Keep prophylaxis calendars distinct",
      "body": "The book and Relenza label describe 10 mg once daily for prophylaxis: ten days after household exposure in adults and children aged 5 years and older, or 28 days during a community outbreak in adults and adolescents. Current CDC guidance instead describes seven days after the last known exposure for ordinary chemoprophylaxis. For institutional outbreaks, CDC recommends at least two weeks, continuing up to one week after the last known case is identified. Identify whether the plan follows a labeled household or community regimen or a CDC exposure or outbreak protocol, including its starting and stopping clock. Do not interchange treatment\u2019s twice-daily schedule with prophylaxis\u2019s once-daily schedule, or apply the adult/adolescent community regimen to every child simply because the general prophylaxis indication begins at age 5. The label states that prophylaxis efficacy has not been proven in the nursing-home setting; keep that evidence limitation distinct from CDC\u2019s institutional outbreak recommendation."
    },
    {
      "heading": "Load and pierce the Rotadisk",
      "body": "Demonstrate the supplied device and have the patient or caregiver show the steps. Remove the blue cover and check that the mouthpiece is clear. Pull out the white tray, press its side ridges to remove it, place the Rotadisk on the wheel with its flat side up and the four blisters fitted underneath, and slide the tray fully back in. Keep the Diskhaler level. Only when ready to inhale, raise the piercing flap fully upright to pierce the upper and lower foil of the positioned blister, then close the flap. A partly raised flap or pierced blister stored for later does not demonstrate correct preparation."
    },
    {
      "heading": "Deliver both inhalations",
      "body": "Exhale before placing the mouthpiece in the mouth, keeping exhaled air away from the powder. Seal the lips around the mouthpiece without covering its side air holes, inhale steadily and deeply through the mouth, and hold the breath for a few seconds. Pull the tray out and push it back without removing it to advance to the next blister; pierce and inhale again to finish the second 5 mg inhalation. Replace the cover afterward. One four-blister Rotadisk supplies two complete 10 mg doses. A standard five-day twice-daily treatment course therefore uses ten doses, or twenty blisters, equal to five Rotadisks. Assess device ability and inspiratory delivery rather than assuming age eligibility proves successful use; children need supervision by an adult trained in the device."
    },
    {
      "heading": "Preserve the labeled route and device",
      "body": "Relenza inhalation powder is administered by oral inhalation only through the supplied Diskhaler. Do not prepare an improvised solution for a nebulizer or mechanical ventilation. The label describes a fatal report in which lactose from such a solution obstructed equipment. A patient who cannot operate the device or deliver the inhalation needs assessment of another suitable antiviral route; converting this powder into an intravenous, nasal or nebulized preparation is not an administration workaround."
    },
    {
      "heading": "Protect vulnerable airways",
      "body": "Zanamivir is not recommended for treatment or prophylaxis in people with underlying airway disease such as asthma or COPD because of serious bronchospasm risk. Serious and fatal bronchospasm has also been reported without a prior airway history; postmarketing reports do not establish the drug\u2019s contribution in every case. Stop Relenza for bronchospasm or declining respiratory function and obtain immediate treatment; hospital care may be required. If a clinician nevertheless considers use in underlying airway disease, the label calls for weighing benefit and risk, close monitoring and appropriate support including a fast-acting inhaled bronchodilator. When a scheduled inhaled bronchodilator is taken at the same time, administer it before Relenza. Bronchodilator availability or sequence does not remove the warning or make zanamivir the routine asthma choice."
    },
    {
      "heading": "Identify true ingredient allergy",
      "body": "The lactose vehicle contains milk proteins. A history of an allergic reaction to any Relenza ingredient, including milk proteins, is a contraindication. Milk-protein allergy differs from digestive lactose intolerance; neither a digestive symptom alone nor a sugar-free preference establishes the contraindication. Clarify the reaction and exact product ingredients rather than guaranteeing suitability from a vague intolerance history. Allergic reactions including oropharyngeal swelling, serious skin reactions and anaphylaxis have been reported. Stop treatment and provide appropriate care if an allergic reaction develops or is suspected."
    },
    {
      "heading": "Separate the live-vaccine intervals",
      "body": "Zanamivir may interfere with replication of live attenuated influenza vaccine virus. Unless medically indicated, do not give zanamivir until at least two weeks after intranasal LAIV, and do not give LAIV until at least 48 hours after zanamivir has been stopped. The latter interval starts after the final dose, not the first dose of a continuing course. The Relenza label permits trivalent inactivated influenza vaccine at any time relative to the drug. Antiviral use does not replace seasonal influenza vaccination."
    },
    {
      "heading": "Monitor symptoms without assuming their cause",
      "body": "The book lists headache, throat pain and cough among zanamivir adverse effects. Trial reactions must be interpreted in context: both Relenza and placebo groups inhaled lactose vehicle, and a new cough with worsening breathing requires the airway warning response rather than routine reassurance. Influenza itself can cause seizures, hallucinations, delirium and abnormal behavior. Neuropsychiatric events have been reported during neuraminidase-inhibitor treatment, primarily in children; the drug\u2019s contribution is not established and voluntary reports cannot supply a reliable frequency. Closely monitor behavior, report confusion, seizures or hallucinations promptly to the clinician, and assess continuation benefits and risks individually. Relenza has not been shown to prevent bacterial complications; persistent or worsening illness needs reassessment for coexisting or secondary infection."
    }
  ],
  "keyPoints": [
    "One 10 mg dose requires two separate 5 mg inhalations through the supplied Diskhaler.",
    "Keep treatment, labeled prophylaxis and CDC exposure-based calendars distinct.",
    "Avoid routine zanamivir selection in asthma or COPD; stop for bronchospasm or respiratory decline.",
    "True ingredient allergy is a contraindication; time LAIV from the relevant vaccine date or final antiviral dose."
  ],
  "check": {
    "question": "Why should a patient with asthma usually receive an alternative to zanamivir?",
    "choices": [
      "Zanamivir can cause serious bronchospasm",
      "Asthma prevents influenza infection",
      "The drug is renally toxic in every patient",
      "The Diskhaler contains an antibiotic"
    ],
    "answer": 0,
    "rationale": "Serious bronchospasm risk makes zanamivir not recommended in underlying airway disease such as asthma. Asthma does not prevent influenza infection. The label does not claim renal toxicity in every patient, and the Diskhaler delivers an antiviral rather than an antibiotic.",
    "reviewHref": "#zanamivir-pharmacology-safety"
  }
});


// Complete peramivir dose, preparation and safety reconciliation against authorized sources.
Object.assign(influenzaAntiviralPharmacologyModule.submodules.find((lesson) => lesson.slug === "peramivir-pharmacology-administration"), {
  "slug": "peramivir-pharmacology-administration",
  "title": "Build the Peramivir Infusion",
  "visual": "influenza-antiviral-peramivir-pharmacology-administration",
  "summary": "Match intravenous neuraminidase inhibition to the eligible illness, age-specific dose and renal table, then verify stock volume, final concentration, infusion-volume limits, administration and qualified safety evidence.",
  "concepts": [
    "Clinical setting",
    "Age and renal dose",
    "Stock and final volume",
    "Controlled infusion",
    "Safety and vaccine timing"
  ],
  "application": "Verify age, illness and renal function before converting the selected dose into a diluted infusion; check both concentration and total-volume limits and recognize reactions or complications that need reassessment.",
  "lesson": [
    {
      "heading": "Define the clinical role",
      "body": "Peramivir inhibits influenza neuraminidase, limiting release of viral particles from infected cells. Rapivab is labeled for acute uncomplicated influenza in patients aged 6 months and older with symptoms for no more than two days. Its efficacy trials predominantly enrolled influenza A, with limited influenza B enrollment; that evidence limit is not a claim that the drug has no activity against influenza B. CDC does not recommend peramivir for chemoprophylaxis because data are unavailable. Intravenous delivery does not establish superior efficacy in severe hospitalized influenza. CDC recommends oral or enteric oseltamivir routinely in hospitalized patients; peramivir may be considered when that drug cannot be tolerated or absorbed, rather than selected routinely. The label\u2019s serious-influenza trial used daily peramivir for five days plus standard care and did not improve median clinical-resolution time over standard care plus placebo. Do not turn the uncomplicated single-dose regimen into a proven severe-illness regimen."
    },
    {
      "heading": "Calculate the age-specific dose",
      "body": "With normal renal function, adults and adolescents aged 13 years and older receive 600 mg once. Patients aged 6 months through 12 years receive 12 mg/kg once, up to 600 mg. An eligible 30 kg child therefore receives 12 mg/kg \u00d7 30 kg = 360 mg; a 60 kg patient aged 12 years calculates to 720 mg before the 600 mg ceiling is applied. Verify kilograms and exact age rather than treating every child as an adult or applying the pediatric weight formula beyond its age range. The book\u2019s adult 600 mg single dose remains valid; current labeling supplies the younger-patient regimen. Safety and effectiveness below age 6 months have not been established."
    },
    {
      "heading": "Use the correct renal table",
      "body": "Peramivir is not significantly metabolized and is cleared mainly through the kidneys as unchanged drug, so a single intravenous dose still requires renal assessment. For patients aged 13 years and older, the labeled dose is 600 mg at creatinine clearance at least 50 mL/min, 200 mg at 30 to 49, and 100 mg at 10 to 29. For ages 2 through 12, the corresponding table doses are 12, 4 and 2 mg/kg, with the table\u2019s 600 mg maximum. Use that pediatric table directly rather than mechanically dividing an already capped adult dose. For a 6-year-old weighing 30 kg with documented clearance of 35 mL/min, 4 mg/kg \u00d7 30 kg = 120 mg. The label cannot recommend a renal adjustment for ages 6 months to less than 2 years with clearance below 50; this is a data gap, not permission to extrapolate the older-child table. In chronic renal impairment on hemodialysis, administer after dialysis at the renal-adjusted dose. Do not invent a below-10 mL/min, peritoneal-dialysis or continuous-replacement schedule from these table rows."
    },
    {
      "heading": "Check concentration and total volume together",
      "body": "Each single-use vial contains 200 mg in 20 mL, or 10 mg/mL. Dilute the selected dose in 0.9% or 0.45% sodium chloride, 5% dextrose, or lactated Ringer\u2019s to a final concentration of 1 to 6 mg/mL. Also obey the label\u2019s maximum total infusion volume, which includes drug solution and diluent. Its infant category, described as 6 months to 1 year, has a 25 mL maximum. For adults and pediatric patients aged 1 year and older, the weight categories are 5 to less than 10 kg: 25 mL; 10 to less than 15 kg: 50 mL; 15 to less than 20 kg: 75 mL; and at least 20 kg: 100 mL. Check the actual labeled category rather than assuming concentration alone makes a preparation acceptable. For a 600 mg adult dose at weight at least 20 kg, 60 mL of stock plus 40 mL of compatible diluent gives 100 mL total at 6 mg/mL. For the 30 kg child\u2019s 360 mg dose, 36 mL of stock plus 64 mL of diluent gives 100 mL total at 3.6 mg/mL. Adding stock to an unchanged 100 mL bag would exceed that total-volume limit."
    },
    {
      "heading": "Prepare aseptically and control the infusion",
      "body": "Rapivab contains no preservative or bacteriostatic agent. Use aseptic preparation, reject a broken or missing vial seal, and inspect for particulates or discoloration. Administer the diluted solution as one intravenous infusion over 15 to 30 minutes; the stock vial is not a rapid intravenous push. Do not mix or co-infuse other intravenous medicines with Rapivab, even though the listed diluents and common administration materials are compatible. Give the diluted solution immediately or refrigerate it at 2\u00b0C to 8\u00b0C for up to 24 hours. If refrigerated, let it reach room temperature and administer immediately. Discard unused diluted solution after 24 hours; refrigerated storage is not permission for an additional 24 hours at room temperature."
    },
    {
      "heading": "Respond to serious allergic or skin reactions",
      "body": "Known serious hypersensitivity or anaphylaxis to peramivir or a product component is a contraindication. The book warns about serious skin reactions including Stevens-Johnson syndrome and toxic epidermal necrolysis; current Rapivab labeling specifically describes Stevens-Johnson syndrome and erythema multiforme, as well as anaphylaxis. Discontinue Rapivab and initiate appropriate treatment if anaphylaxis or a serious skin reaction occurs or is suspected. Stop any ongoing infusion and obtain immediate medical attention rather than finishing the dose or merely reducing its rate. A voluntary postmarketing report does not provide a reliable population frequency or establish causality in every case."
    },
    {
      "heading": "Interpret adverse effects in their trial setting",
      "body": "The book lists hypertension, insomnia, increased glucose, diarrhea, constipation, neutropenia and increased AST or ALT. Keep those effects in their evidence context. Diarrhea was the most commonly observed reaction in adult uncomplicated-influenza trials; the label\u2019s ALT, glucose and neutrophil findings are treatment-emergent laboratory abnormalities. Constipation, insomnia, increased AST and hypertension were reported more often than placebo in a subset of patients with serious hospitalized influenza. Those findings do not establish that every outpatient infusion causes these effects or that rates from different trials can be compared directly. Pediatric trial findings included vomiting and dipstick proteinuria; those observations likewise do not prove universal renal injury or justify ignoring dose and renal assessment."
    },
    {
      "heading": "Monitor behavior and competing illness",
      "body": "Influenza itself can cause hallucinations, delirium and abnormal behavior, including in uncomplicated illness. Postmarketing reports during neuraminidase-inhibitor use, including peramivir, describe abrupt behavioral events and injury primarily in children. Voluntary reports do not establish a reliable frequency, and peramivir\u2019s contribution has not been established. Closely monitor behavior, protect the patient from injury and contact the clinician promptly if abnormal behavior occurs after treatment. Peramivir is not an antibiotic and has not been shown to prevent coexisting or secondary bacterial complications. Persistent or worsening illness requires assessment and appropriate treatment when another infection or complication is found."
    },
    {
      "heading": "Separate label and CDC vaccine timing",
      "body": "Antivirals can inhibit replication of intranasal live attenuated influenza vaccine virus. Rapivab labeling advises avoiding LAIV within two weeks before or 48 hours after its administration unless medically indicated. Current CDC guidance uses a longer interval: LAIV should not be given if peramivir was administered within the preceding five days. CDC also warns that antiviral use within two weeks after LAIV may reduce vaccine effectiveness and calls for revaccination with another appropriate influenza vaccine in that situation. Identify the vaccine product, dates and guidance being followed; do not silently equate the label\u2019s 48-hour interval with CDC\u2019s five-day interval. Inactivated influenza vaccine can be administered at any time relative to peramivir."
    },
    {
      "heading": "Keep population evidence qualified",
      "body": "Rapivab pregnancy data are insufficient to determine a drug-associated risk of adverse developmental outcomes, while influenza itself poses maternal and fetal risks. Animal findings do not establish zero human risk or a preferred pregnancy treatment. The label has no data on peramivir in human milk, effects on the breastfed infant or effects on milk production; rat milk findings do not prove absent human transfer. Consider breastfeeding benefits, the mother\u2019s clinical need and possible effects of the drug or underlying illness on the child. The book\u2019s preference for oseltamivir during pregnancy and the separate clinical-selection lesson remain relevant when comparing antivirals."
    }
  ],
  "keyPoints": [
    "Use the labeled uncomplicated-illness regimen and distinguish routine hospitalized treatment from selected alternatives.",
    "Age and renal category determine the dose; the under-2 renal data gap prevents automatic extrapolation.",
    "Check stock volume, final concentration and the age/weight maximum total infusion volume.",
    "Infuse over 15 to 30 minutes, act on suspected serious reactions and distinguish CDC from label LAIV timing."
  ],
  "check": {
    "question": "What peramivir dose is calculated for a 30 kg child with normal renal function?",
    "choices": [
      "360 mg",
      "600 mg",
      "30 mg",
      "12 mg"
    ],
    "answer": 0,
    "rationale": "For an eligible child aged 6 months through 12 years with normal renal function, 12 mg/kg \u00d7 30 kg = 360 mg, below the 600 mg ceiling. The ceiling is not the automatic dose for every child; 30 mg confuses weight with dose, and 12 mg omits multiplication by kilograms.",
    "reviewHref": "#peramivir-pharmacology-administration"
  }
});


// Complete baloxavir target and presentation-specific dosing reconciliation.
Object.assign(influenzaAntiviralPharmacologyModule.submodules.find((lesson) => lesson.slug === "baloxavir-target-dosing"), {
  "slug": "baloxavir-target-dosing",
  "title": "Block Viral Transcription with Baloxavir",
  "visual": "influenza-antiviral-baloxavir-target-dosing",
  "summary": "Baloxavir marboxil is a carbonate-containing oral prodrug hydrolyzed to active baloxavir, which inhibits PA cap-dependent endonuclease. Match the eligible patient to the exact tablet, bottle or packet regimen.",
  "concepts": [
    "Prodrug activation",
    "PA endonuclease",
    "Age and timing",
    "Product-specific dose",
    "Resistance boundaries"
  ],
  "application": "Verify age, illness or exposure timing, exact weight and the supplied presentation before selecting a dose; distinguish bottle milligrams and milliliters from fixed-dose packets and assess the limits of the evidence.",
  "lesson": [
    {
      "heading": "Activate the prodrug",
      "body": "Baloxavir marboxil is a lipophilic oral prodrug containing a hydrolyzable carbonate group. Hydrolysis converts it to the active metabolite, baloxavir. Marboxil is part of the prodrug molecule, not a separate inactive excipient in the formulation. This prodrug architecture supports oral delivery of the active antiviral system. The labeled Xofluza dose is expressed in milligrams of baloxavir marboxil; use that product dose rather than inventing an active-baloxavir milligram conversion. Tablets, bottle suspension and packets deliver the same prodrug but have distinct labeled dose and preparation instructions."
    },
    {
      "heading": "Interrupt transcription",
      "body": "Influenza uses capped host RNA fragments as primers for viral messenger RNA transcription. In this cap-snatching process, the polymerase acidic protein, PA, supplies cap-dependent endonuclease activity. Active baloxavir inhibits that enzyme and interrupts viral RNA transcription. Neuraminidase inhibitors instead interfere with release of new viral particles; M2 blockers act at a different viral step. Baloxavir is not an antibiotic or a proven means of preventing secondary bacterial infection. Laboratory activity against influenza A and B does not establish identical clinical effectiveness for every strain or patient."
    },
    {
      "heading": "Use the current age and timing limits",
      "body": "Current labeling covers acute uncomplicated influenza in patients aged 5 years and older who are otherwise healthy or at high risk of influenza-related complications and have had symptoms for no more than 48 hours. Post-exposure prophylaxis is also labeled from age 5; give its single dose as soon as possible within 48 hours after contact with an individual who has influenza. The symptom-onset and exposure clocks answer different questions. Both indications use one weight-based dose, rather than borrowing an oseltamivir five-day treatment or daily prophylaxis schedule. The book\u2019s age-12 boundary is historical. Safety and effectiveness below age 5 have not been established, and the label identifies a higher incidence of treatment-emergent resistance in younger children. CDC does not routinely recommend baloxavir for hospitalized, complicated or progressive influenza. Evidence supporting later neuraminidase-inhibitor treatment in priority patients does not establish later baloxavir treatment in outpatients."
    },
    {
      "heading": "Select the tablet weight band",
      "body": "For an eligible patient weighing 20 kg to less than 80 kg, the tablet dose is 40 mg once. At 80 kg or more, it is 80 mg once. Exactly 20 kg enters the 40 mg band, and exactly 80 kg enters the 80 mg band. A 65 kg eligible patient receives 40 mg once. Current tablets are 40 mg and 80 mg; the book\u2019s older presentation listing must not be treated as the current product description. The tablet table does not provide a below-20 kg regimen. Confirm swallowing ability and the actual product instead of splitting a tablet to invent an unsupported pediatric dose."
    },
    {
      "heading": "Calculate the bottle dose and volume",
      "body": "Constituted bottle suspension contains 2 mg/mL, with 40 mg in a 20 mL bottle. For an eligible patient below 20 kg, its labeled dose is 2 mg/kg once. A 14 kg child\u2019s prescribed dose is 2 mg/kg \u00d7 14 kg = 28 mg; 28 mg \u00f7 2 mg/mL = 14 mL. This uses less than a full bottle. At 20 kg to less than 80 kg, the bottle dose is 40 mg or 20 mL. At 80 kg or more, it is 80 mg or 40 mL, requiring two constituted bottles. Measure the ordered volume with an oral syringe; more than one withdrawal may be needed depending on syringe capacity. Bottle count and withdrawal count are different checks. A correct milligram calculation is incomplete until concentration, milliliters and the available bottle quantity are verified."
    },
    {
      "heading": "Distinguish packets from bottles",
      "body": "Packets use fixed doses: 15 kg to less than 20 kg receives one 30 mg packet; 20 kg to less than 80 kg receives one 40 mg packet; 80 kg or more receives two 40 mg packets for 80 mg total. For a patient below 15 kg, the label recommends bottle suspension. In an eligible 16 kg patient, the bottle regimen calculates to 32 mg or 16 mL, while the packet regimen is a fixed 30 mg dose. These are distinct labeled presentation regimens, not a reason to substitute milliliters between them. Mix each packet with approximately 15 to 20 mL of drinking water and administer its entire mixture immediately. When two packets are prescribed, prepare and take each separately. This variable mixing-water volume does not create a standardized 2 mg/mL packet suspension; do not use the bottle formula to withdraw a fraction of a packet mixture."
    },
    {
      "heading": "Verify preparation and actual supply",
      "body": "The label\u2019s bottle preparation uses 20 mL of drinking or sterile water to produce 2 mg/mL suspension. Gently swirl; do not shake. Use the constituted bottle suspension within 10 hours and discard it after that interval. The ordered dose may be less than one bottle, one bottle or two bottles; do not interpret bottle preparation as an instruction to give every child the entire bottle. Packet mixtures are taken immediately, so the bottle\u2019s 10-hour interval is not a packet storage rule. A labeled presentation does not guarantee local supply. CDC\u2019s current clinician page states that baloxavir suspension is unavailable in the United States, while current labeling describes bottles and packets. Verify actual availability and the exact presentation before planning liquid delivery. The worked calculations explain labeled regimens and do not establish that a product is obtainable."
    },
    {
      "heading": "Keep pharmacokinetic limits explicit",
      "body": "The active metabolite is primarily metabolized by UGT1A3, with CYP3A4 contributing secondarily. The adult/adolescent pharmacokinetic table reports a mean apparent terminal half-life of 79.1 hours; this is a study estimate, not a promise of the same half-life or clinical response in every patient. Current labeling found no clinically significant pharmacokinetic differences with creatinine clearance of at least 50 mL/min or moderate hepatic impairment, Child-Pugh B. Effects of severe renal or hepatic impairment have not been evaluated. Preserve the book\u2019s caution about limited organ-impairment data: do not turn these findings into an all-severity no-adjustment rule or copy an oseltamivir or peramivir renal table onto baloxavir. Persistent symptoms do not, by themselves, establish a need to repeat the single dose."
    },
    {
      "heading": "Interpret target resistance carefully",
      "body": "PA substitutions, including I38T, can reduce susceptibility to baloxavir. The label\u2019s higher treatment-emergent resistance incidence in children below age 5 helps explain the age boundary; it does not mean every older patient is protected from resistance or every younger patient develops it. Because the target differs from neuraminidase and M2, cross-resistance with those classes is not expected, but target distinction alone does not prove that every clinical failure will respond to another drug. Consider current susceptibility information, the illness trajectory, delivery and interactions, as well as other causes of worsening illness. Reassess complications and clinical fit rather than automatically repeating baloxavir or escalating its dose. Use the separate clinical-selection and administration/safety lessons for the complete patient-specific comparison."
    }
  ],
  "keyPoints": [
    "Hydrolysis activates the marboxil prodrug; baloxavir inhibits PA endonuclease and viral transcription.",
    "Current eligibility begins at age 5, with distinct symptom-onset and post-exposure timing checks.",
    "Tablet, bottle and packet tables differ; a packet mixture is not the standardized 2 mg/mL bottle suspension.",
    "Check dose, delivery and actual supply while keeping organ-impairment and resistance evidence qualified."
  ],
  "check": {
    "question": "What current single baloxavir tablet dose applies to a 65 kg eligible patient?",
    "choices": [
      "40 mg",
      "80 mg",
      "20 mg",
      "75 mg"
    ],
    "answer": 0,
    "rationale": "An eligible 65 kg patient is in the 20-to-less-than-80 kg tablet band and receives 40 mg once. The 80 mg dose begins at 80 kg; 20 mg is not the current dose for this band, and 75 mg is not a labeled baloxavir tablet dose.",
    "reviewHref": "#baloxavir-target-dosing"
  }
});


// Complete presentation-specific baloxavir administration and safety reconciliation.
Object.assign(influenzaAntiviralPharmacologyModule.submodules.find((lesson) => lesson.slug === "baloxavir-administration-safety"), {
  "slug": "baloxavir-administration-safety",
  "title": "Protect the Baloxavir Single Dose",
  "visual": "influenza-antiviral-baloxavir-administration-safety",
  "summary": "Protect the single dose by checking cation exposure, the exact bottle or packet instructions, allergy history, age, illness setting and population-specific evidence.",
  "concepts": [
    "Cation exposure",
    "Bottle versus packet",
    "Complete delivery",
    "Serious reactions",
    "Patient and vaccine fit"
  ],
  "application": "Confirm the prescribed presentation and deliver its complete dose with the correct preparation and storage instructions; reassess reactions or worsening illness without automatically repeating baloxavir.",
  "lesson": [
    {
      "heading": "Avoid cation coadministration",
      "body": "Baloxavir may be taken with or without food, but avoid coadministration with dairy products, calcium-fortified beverages and polyvalent cation-containing laxatives, antacids or oral supplements, including calcium, iron, magnesium, selenium and zinc. Check the actual ingredients in medicines, supplements and planned intake rather than only the product category. Chelation can decrease baloxavir exposure and may reduce efficacy. The label\u2019s cation pharmacokinetic evidence includes an animal study; it does not give a human probability of treatment failure. The FDA label and CDC summary do not supply one universal two-hour or four-hour separation rule. Follow the coadministration warning and arrange a patient-specific administration plan; do not invent a spacing interval or automatically repeat the single dose after a suspected interaction."
    },
    {
      "heading": "Constitute a bottle correctly",
      "body": "A healthcare provider prepares bottle suspension at dispensing. Tap the bottle bottom to loosen the granules, add 20 mL of drinking or sterile water and gently swirl until evenly suspended. Do not shake. This produces 40 mg in 20 mL, or 2 mg/mL. Write the preparation date and time and the 10-hour administration limit on the bottle. The suspension contains no preservative. Preparation concentration does not determine every patient\u2019s dose: the prescribed amount may be less than one bottle, one bottle or two bottles. The dose table and the specific ordered volume govern administration."
    },
    {
      "heading": "Measure the prescribed bottle volume",
      "body": "Before use, gently swirl the prepared bottle well without shaking. Open the child-resistant cap by pushing down and turning; use the supplied oral syringe to withdraw and give the prescribed volume. Repeat withdrawals and delivery as needed to give the entire ordered dose, accounting for syringe capacity and any second bottle. Do not substitute a full bottle for a smaller measured pediatric dose. Close the bottle and discard remaining suspension and the syringe after dosing as instructed. Contact the pharmacist if the supplied product is not liquid or the oral syringe is missing; an expired preparation requires replacement instructions rather than guessing a new dose."
    },
    {
      "heading": "Give the whole packet and its residue",
      "body": "For packets, wash and dry hands and check the prescribed packet dose, expiration and packaging. Tap granules to one side before opening, then empty every granule into approximately 15 to 20 mL of room-temperature drinking water. Gently swirl for one minute or until fully dispersed. Drink the entire mixture immediately. Refill the container with another 15 to 20 mL of water, swirl to collect residue and drink it immediately; repeat this rinse once more if granules remain. This first residue rinse is part of complete delivery, not an optional substitute for the initial mixture. When two 40 mg packets are prescribed, prepare and take each separately through the same sequence. Discard the packet, wash the container with soap and water and wash hands. Do not store a packet mixture for the bottle\u2019s 10-hour window or withdraw a fractional dose using the bottle\u2019s 2 mg/mL formula."
    },
    {
      "heading": "Complete enteral delivery and rinsing",
      "body": "Both labeled liquid presentations can use an enteral syringe and a feeding tube of 4 French or larger, with 1 mL of water before and after administration. For a bottle, measure and deliver the prescribed suspension volume. For a packet, prepare the whole mixture as directed, draw it into the enteral syringe immediately before settling causes incomplete transfer, and push it slowly through the tube. Refill the preparation container with 15 to 20 mL of water, swirl to collect residue and use that water to flush the tube; repeat this residue rinse once more if granules remain. The 1 mL pre- and post-flushes do not replace the packet-container residue rinse. Prepare and deliver each packet separately when two are prescribed, and clean the enteral syringe according to its manufacturer\u2019s instructions. As a water-planning example for one packet, 20 mL for mixing plus 20 mL for the required residue rinse plus 1 mL before and 1 mL after equals 42 mL of supplied water. A second 20 mL residue rinse, if needed, raises that example to 62 mL. These totals describe chosen water volumes, not an exact final suspension volume or a universal fluid requirement; reconcile delivery with the patient\u2019s fluid plan."
    },
    {
      "heading": "Use the presentation-specific storage clock",
      "body": "The book distinguishes oseltamivir suspension storage, 10 days at room temperature or 17 days refrigerated, from baloxavir bottle suspension\u2019s 10-hour interval. Current Xofluza labeling specifies constituted bottles at 20 to 25 degrees C for no more than 10 hours; discard if unused by that limit or stored above 25 degrees C. Refrigeration does not establish an extended labeled clock. Packet mixtures must be given immediately. Before constitution, keep tablets in their original blister and dry bottles or packets in their original packaging at 20 to 25 degrees C; the permitted 15-to-30-degree excursions apply to these unconstituted products, not the constituted bottle. Current labeling describes bottles and packets while CDC states suspension is unavailable in the United States. Verify actual supply and exact presentation before planning liquid delivery."
    },
    {
      "heading": "Recognize hypersensitivity and act",
      "body": "A history of hypersensitivity to baloxavir marboxil or any ingredient is a labeled contraindication; it is not limited to a prior episode of anaphylaxis. Anaphylaxis, angioedema, urticaria and erythema multiforme have been reported. Breathing difficulty, face, throat or mouth swelling, hives, blistering rash or marked dizziness after administration requires emergency medical help. Initiate appropriate treatment when an allergic-like reaction occurs or is suspected. Do not finish remaining administration or give additional baloxavir while a suspected reaction is being assessed. Because this is usually a single dose, advice to stop an ongoing course alone may miss the need to act after the dose has already been taken."
    },
    {
      "heading": "Interpret adverse reports and worsening illness",
      "body": "Diarrhea remains a useful book-listed adverse-event counseling point. Adult and adolescent trials also reported bronchitis, nausea, sinusitis and headache; these trial events were recorded regardless of causality and should not all be described as proven drug-caused disease. Vomiting and diarrhea were reported in the pediatric trial. Postmarketing reports include hematochezia, melena and colitis, as well as delirium, abnormal behavior and hallucinations. Voluntary reports from an uncertain population cannot reliably establish their frequency or causal relationship to baloxavir. New bleeding, concerning neurologic symptoms or deterioration requires assessment rather than an assumed drug mechanism or automatic repeat dose. Serious bacterial infection may mimic, coexist with or complicate influenza, and baloxavir has not been shown to prevent it; evaluate and treat a suspected bacterial complication appropriately."
    },
    {
      "heading": "Respect the age and resistance boundary",
      "body": "Current eligibility starts at age 5. Safety and effectiveness below age 5 have not been established, and the label identifies a higher incidence of treatment-emergent viral substitutions associated with reduced baloxavir susceptibility in younger children. This supports the age boundary without claiming that every younger child develops resistance or that older patients cannot. Weight-based liquid calculations do not erase the age restriction. Being age-eligible also does not establish suitability for every illness severity, pregnancy status or immune condition. Preserve the distinct age, presentation, timing and patient-fit checks instead of treating single-dose convenience as a universal choice."
    },
    {
      "heading": "Keep pregnancy and lactation evidence qualified",
      "body": "The FDA label lacks adequate well-controlled human pregnancy studies to inform drug-associated risk. Animal findings do not prove zero human risk, and influenza itself poses maternal and fetal risks. CDC does not recommend baloxavir during pregnancy; oral oseltamivir is the preferred influenza treatment in pregnancy. For lactation, human milk concentrations, effects on the breastfed infant and effects on milk production are unknown. Baloxavir and related metabolites were present in rat milk, which neither quantifies human transfer nor proves its absence. CDC also does not recommend baloxavir while breastfeeding because efficacy, safety and human milk data are lacking. Distinguish these evidence-based treatment recommendations from a labeled history-of-allergy contraindication."
    },
    {
      "heading": "Match immune status and illness setting",
      "body": "CDC does not recommend baloxavir monotherapy in severely immunosuppressed persons: clinical efficacy, safety and resistance data are lacking, and prolonged viral replication raises concern about resistance. This is not a blanket FDA contraindication for every degree of immunocompromise. Current labeling still includes otherwise healthy or high-risk patients aged 5 and older with acute uncomplicated influenza within 48 hours. For hospitalized influenza, CDC recommends oral or enterically administered oseltamivir promptly; baloxavir is not routinely recommended because clinical-benefit data are insufficient. For severe, complicated or progressive outpatient illness, oseltamivir is recommended. Do not transfer evidence supporting later neuraminidase-inhibitor treatment to later baloxavir use in outpatients."
    },
    {
      "heading": "Separate live-vaccine timing from cation exposure",
      "body": "The FDA label notes that concurrent live attenuated influenza vaccine, LAIV, use with baloxavir has not been studied; an antiviral may inhibit vaccine-virus replication and reduce vaccine effectiveness. CDC supplies the timing rule: do not give LAIV if baloxavir was administered within the preceding 17 days. This is a baloxavir-specific look-back interval, not the oseltamivir 48-hour or peramivir five-day interval. Antivirals administered within two weeks after LAIV may also reduce its effectiveness; CDC advises revaccination with another appropriate vaccine, such as an inactivated or recombinant product. Inactivated influenza vaccine is not a polyvalent-cation exposure, but the Xofluza label says its interactions have not been studied. Do not turn that absence of studies into proof that FDA interaction trials established no effect."
    }
  ],
  "keyPoints": [
    "Avoid cation coadministration; do not invent a universal separation interval.",
    "Constituted bottles have a 10-hour limit; packet mixtures and their residue rinses are given immediately.",
    "Check allergy history, serious symptoms, age, pregnancy, lactation, immune status and illness severity.",
    "CDC\u2019s LAIV look-back after baloxavir is 17 days; keep evidence gaps distinct from contraindications."
  ],
  "check": {
    "question": "Which exposure should be avoided with the baloxavir dose?",
    "choices": [
      "A calcium-containing antacid",
      "Plain water",
      "An oral syringe",
      "An inactivated vaccine"
    ],
    "answer": 0,
    "rationale": "A calcium-containing antacid is a polyvalent-cation exposure to avoid with baloxavir because it may reduce exposure and efficacy. Plain water and a correctly used oral syringe support labeled delivery and do not supply that cation interaction. Inactivated influenza vaccine is not this cation exposure; its interactions with Xofluza have not been studied, while live-vaccine interference is a separate issue.",
    "reviewHref": "#baloxavir-administration-safety"
  }
});


// Complete influenza prevention, vaccine timing and reassessment reconciliation.
Object.assign(influenzaAntiviralPharmacologyModule.submodules.find((lesson) => lesson.slug === "integrated-influenza-system"), {
  "slug": "integrated-influenza-system",
  "title": "Close the Influenza Treatment Loop",
  "visual": "influenza-antiviral-integrated-influenza-system",
  "summary": "Close the influenza care loop by distinguishing symptomatic treatment from selected prophylaxis, naming the regimen and exposure calendar, coordinating live vaccination and responding to deterioration.",
  "concepts": [
    "Treatment versus prevention",
    "Exposure and outbreak clocks",
    "Live-vaccine timing",
    "Deterioration and resistance",
    "Current evidence and follow-up"
  ],
  "application": "Document the treatment or prevention goal, exact product and regimen, relevant dates, delivery checks, warning signs and reassessment owner; update the plan when symptoms, exposures or current guidance change.",
  "lesson": [
    {
      "heading": "Separate treatment and prevention",
      "body": "A symptomatic patient needs a treatment assessment, not an automatic once-daily prophylaxis regimen. Hospitalized patients, those with severe or progressive illness and high-risk patients should receive appropriate treatment promptly without waiting for influenza test results. Post-exposure prophylaxis is a separate decision for an asymptomatic exposed person. In a noninstitutional setting, IDSA describes selected circumstances such as a very-high-risk household contact when vaccination is contraindicated, unavailable or expected to work poorly; it does not recommend routine prophylaxis for every community contact. Assess age, host risk, vaccine status, drug suitability and the time since exposure. Start selected post-exposure prophylaxis as soon as possible, ideally within 48 hours of exposure. If that window has passed, IDSA advises against starting once-daily neuraminidase-inhibitor prophylaxis and instead arranging rapid full-dose treatment if symptoms develop and treatment is indicated. Education and ready access to early treatment can be an alternative to prophylaxis. Symptoms developing during prophylaxis require testing and a switch to a treatment regimen; IDSA favors an agent with a different resistance profile when appropriate and not contraindicated."
    },
    {
      "heading": "Name the product and prevention calendar",
      "body": "Do not transfer one antiviral\u2019s frequency or prevention duration to another. For an adult with normal renal function, the Tamiflu label uses oseltamivir 75 mg once daily for at least 10 days after close contact, versus 75 mg twice daily for five days for uncomplicated treatment. Current CDC and IDSA nonoutbreak prophylaxis guidance instead uses seven days after the most recent exposure. State which source and setting govern the plan, and re-evaluate when exposure continues. The Relenza label uses zanamivir 10 mg, two 5 mg inhalations, once daily for 10 days in the household setting from age 5; its adult/adolescent community-outbreak regimen is once daily for 28 days. Those are distinct from its twice-daily five-day treatment course from age 7. Check its airway, milk-protein allergy and device restrictions. Current baloxavir labeling permits a single weight-based post-exposure dose from age 5 within 48 hours of contact; it is not a daily seven-day course. CDC does not recommend intravenous peramivir for chemoprophylaxis because data are lacking. Product age, renal function, delivery and population limits still apply; a prevention goal does not override them."
    },
    {
      "heading": "Use an outbreak clock and surveillance",
      "body": "A declared institutional outbreak requires an outbreak-control plan and active surveillance. CDC recommends oral oseltamivir or inhaled zanamivir prophylaxis for a minimum of two weeks, continuing up to one week after the last known case is identified; exposed asymptomatic residents are included even if vaccinated. IDSA recommends prophylaxis for exposed asymptomatic residents or patients in the affected unit regardless of vaccination history. Symptomatic residents need prompt treatment assessment rather than being placed only on a prevention dose. Drug selection remains individual: the Relenza label states prophylaxis efficacy in nursing homes has not been proven, while CDC includes inhaled zanamivir in outbreak guidance, so document the setting and source rather than treating this as a universal label claim. For a calendar example, start on Day 1 and use a plan with both a minimum through Day 14 and seven days after the last identified case. If that case is identified on Day 10, the later endpoint is max(14, 10 + 7) = Day 17. A newer case requires a new endpoint review. This example illustrates the selected outbreak plan, not a standing prescription; reconcile ongoing exposure, actual dates, local public-health direction and clinical suitability."
    },
    {
      "heading": "Coordinate live-vaccine timing",
      "body": "Antivirals may inhibit replication of the live attenuated influenza vaccine, LAIV, and reduce its effectiveness. CDC advises against giving LAIV when oseltamivir or zanamivir was administered in the preceding 48 hours, peramivir in the preceding five days, or baloxavir in the preceding 17 days. These look-back intervals are agent-specific. If an antiviral is given within two weeks after LAIV, CDC advises revaccination with another appropriate influenza vaccine, such as an inactivated or recombinant product. A patient needing urgent antiviral treatment should receive appropriate care promptly; do not withhold needed treatment merely to protect a vaccine interval. Arrange the vaccine follow-up. Inactivated vaccine does not rely on replication of live vaccine virus, but the Xofluza label states that its interactions with inactivated influenza vaccines have not been evaluated. Avoid turning this evidence gap into a claim of proven absence of every interaction. Vaccination remains central to prevention and is not replaced by antiviral prophylaxis."
    },
    {
      "heading": "Audit worsening illness urgently",
      "body": "New fever, hypoxemia and focal chest findings after initial improvement raise concern for secondary bacterial pneumonia and require urgent assessment. IDSA recommends investigating and empirically treating bacterial coinfection in patients who deteriorate after initial improvement, as well as those initially presenting with severe disease such as extensive pneumonia, respiratory failure or hypotension. Continue to address the influenza treatment plan and the appropriate level of care. In a patient without improvement after three to five days of antiviral treatment, consider investigating bacterial coinfection; this is not an instruction to wait several days when red flags appear earlier. Evaluate oxygenation, hemodynamics, pneumonia and other complications. Automatic repeat baloxavir, an assumption of resistance or dismissal because the antiviral course has ended can all delay needed care."
    },
    {
      "heading": "Reassess infection and delivery together",
      "body": "A positive SARS-CoV-2 result does not exclude influenza, and a positive influenza result does not exclude COVID-19. During co-circulation, assess possible coinfection without delaying empiric influenza treatment in priority groups while awaiting results. Also review adherence, absorption and the actual delivered dose: a feeding-tube problem, incorrect inhaler use or cation exposure with baloxavir can undermine a plan. Recheck organ function and the exact drug\u2019s dosing instructions when renal status changes. Review illness severity, immune status and whether the chosen route still works. Intravenous administration does not by itself establish treatment superiority or a prophylaxis indication. Do not replace this assessment with automatic higher doses or another single dose."
    },
    {
      "heading": "Investigate selected resistance concerns",
      "body": "Deterioration or persistent cough alone does not establish antiviral resistance. IDSA recommends considering neuraminidase-inhibitor resistance testing in selected circumstances, including an immunocompromised patient who remains ill with persistent viral replication, for example a positive RT-PCR or culture after seven to ten days, during or after treatment. Severe illness that fails to improve with persistent replication, laboratory-confirmed influenza arising during or immediately after neuraminidase-inhibitor prophylaxis, or inadvertent subtherapeutic dosing are other situations to assess. A positive result in this context supports considering testing; it does not prove a resistance mutation before testing. Consult infectious-disease and public-health expertise as appropriate. These neuraminidase-inhibitor recommendations do not establish an automatic baloxavir repeat-dose or resistance-testing rule. Use current CDC and WHO susceptibility surveillance; the older adamantanes remain unrecommended because circulating influenza A viruses have widespread resistance."
    },
    {
      "heading": "Use current evidence and assign follow-up",
      "body": "The educational framework supports verification and clinical reasoning; it is not a patient-specific standing prescription. Reconcile the book\u2019s historical statements with current FDA labeling, CDC seasonal guidance, IDSA recommendations and local outbreak advice. Name any label-versus-guideline difference rather than silently combining them. Record the chosen goal, drug, dose, route, start date, last exposure or outbreak case, planned endpoint and follow-up owner. Give clear instructions for new symptoms, worsening breathing, serious reactions or delivery failure, and update the plan when the context changes. Keep annual vaccination and infection-control measures in the prevention plan. Neither prophylaxis nor completion of an antiviral course removes the need for reassessment or current susceptibility information."
    }
  ],
  "keyPoints": [
    "Symptomatic treatment and selected asymptomatic prophylaxis use different decisions, frequencies and clocks.",
    "Distinguish FDA label durations, nonoutbreak guidance and institutional outbreak endpoints.",
    "CDC LAIV look-backs are 48 hours for oseltamivir/zanamivir, five days for peramivir and 17 days for baloxavir.",
    "Act promptly on deterioration; investigate coinfection, delivery and selected resistance concerns using current evidence."
  ],
  "check": {
    "question": "A treated patient develops new fever, hypoxemia, and focal crackles. What is the priority?",
    "choices": [
      "Evaluate urgently for secondary bacterial pneumonia",
      "Repeat baloxavir automatically",
      "Assume resistance without reassessment",
      "Ignore the change because treatment ended"
    ],
    "answer": 0,
    "rationale": "New fever, hypoxemia and focal crackles require urgent assessment for secondary bacterial pneumonia and the appropriate level of care. IDSA recommends investigating and empirically treating bacterial coinfection when a patient deteriorates after initial improvement. Repeating baloxavir automatically does not treat a bacterial complication; resistance is not established without reassessment, and finishing an antiviral course does not make new warning signs safe to ignore.",
    "reviewHref": "#integrated-influenza-system"
  }
});
