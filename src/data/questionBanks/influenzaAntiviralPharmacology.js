const c=(name,lesson,principle,action,assessment,hazard,why)=>({name,lesson,principle,action,assessment,hazard,why});
const concepts=[
  c("influenza A and B syndrome","influenza-biology-triage","Influenza A and B cause acute respiratory illness whose severity reflects viral injury, host response, age, pregnancy, immunity, and comorbidity","Identify influenza probability, severity, time from onset, host risk, and competing respiratory diagnoses before choosing therapy","Assess fever, cough, myalgia, dyspnea, oxygenation, hydration, mental status, pregnancy, age, immune status, comorbidity, and exposure","Treating every respiratory illness as influenza","COVID-19, bacterial pneumonia, and other infections can coexist with or resemble influenza"),
  c("priority treatment groups","influenza-biology-triage","Hospitalization, severe or progressive illness, and high risk for complications trigger treatment as soon as possible","Start empiric antiviral therapy promptly in a priority patient without waiting for laboratory confirmation","Assess hospitalization, progression, pneumonia, pregnancy, age, chronic disease, immune status, onset, and ability to receive medicine","Waiting for a test result in a high-risk patient before treating","Delay can sacrifice benefit while treatment decisions can be made from the syndrome and risk state"),
  c("secondary bacterial infection","influenza-biology-triage","Influenza antivirals do not treat or reliably prevent secondary bacterial infection","Reassess new fever, focal lung findings, hypoxemia, hypotension, or deterioration and treat a bacterial complication when indicated","Assess biphasic illness, sputum, chest findings, oxygenation, imaging, cultures, hemodynamics, and inflammatory trajectory","Assuming antiviral exposure excludes bacterial pneumonia","Bacterial disease can coexist with influenza or emerge during recovery"),
  c("vaccination boundary","influenza-biology-triage","Antiviral treatment and prophylaxis are adjuncts rather than substitutes for seasonal influenza vaccination","Preserve annual vaccination and infection-control planning while treating the acute episode","Assess vaccine history, product type, timing, immune status, exposure, outbreak, and contraindications","Using a completed antiviral course as permanent influenza prevention","Drug exposure is time limited and does not replace seasonal immune preparation"),

  c("viral neuraminidase","influenza-life-cycle-targets","Viral neuraminidase cleaves terminal sialic acid and enables release and spread of progeny influenza virions","Use a neuraminidase inhibitor to block release when agent, host, route, timing, and susceptibility fit","Assess viral type, symptom onset, disease setting, route, renal function, airway disease, age, and resistance context","Describing neuraminidase inhibitors as entry blockers","Their principal target is virion release from infected cells"),
  c("PA endonuclease cap snatching","influenza-life-cycle-targets","The influenza polymerase acidic endonuclease cleaves host capped RNA fragments needed to prime viral messenger RNA transcription","Use baloxavir to inhibit cap-dependent endonuclease activity in an eligible uncomplicated outpatient","Assess age, weight, onset, pregnancy, lactation, immune status, hospitalization, cations, and susceptibility","Calling baloxavir a neuraminidase inhibitor","Baloxavir interrupts viral transcription upstream of virion release"),
  c("adamantane resistance","influenza-life-cycle-targets","Amantadine and rimantadine target the influenza A M2 ion channel but are not recommended because circulating viruses have widespread resistance","Exclude adamantanes from routine seasonal influenza treatment and prophylaxis in the United States","Assess current CDC susceptibility guidance, virus type, historical exposure, indication, and alternative","Selecting amantadine from an old influenza list without checking current resistance","An approved historical indication does not establish current clinical utility"),
  c("target-specific resistance","influenza-life-cycle-targets","Neuraminidase and PA substitutions can reduce susceptibility to their respective inhibitor classes","Investigate persistent replication or clinical failure in the context of host, adherence, absorption, compartment, and surveillance data","Assess immune status, duration, treatment exposure, viral testing, susceptibility signals, and public-health context","Assuming all failure is viral resistance","Wrong diagnosis, late disease, poor delivery, host factors, and bacterial complications are often more likely"),

  c("forty-eight-hour principle","influenza-selection-timing","Clinical benefit is greatest when influenza antiviral treatment begins as early as possible, especially within 48 hours","Treat an eligible uncomplicated outpatient promptly and do not use the window to delay a priority patient","Assess onset estimate, symptom trajectory, exposure, high-risk state, severity, and access to medication","Turning 48 hours into an absolute stop for every patient","Hospitalized, severe, progressive, and high-risk patients can benefit from treatment started later"),
  c("hospitalized treatment selection","influenza-selection-timing","Oral or enterically administered oseltamivir is the recommended routine antiviral for hospitalized suspected or confirmed influenza","Start oseltamivir as soon as possible and evaluate absorption, route, complications, and coinfection","Assess enteral access, gastric stasis, malabsorption, bleeding, organ function, respiratory status, and testing","Routinely substituting single-dose baloxavir for hospitalized influenza","Evidence supporting outpatient licensure does not establish routine benefit in hospitalized disease"),
  c("uncomplicated outpatient options","influenza-selection-timing","Oseltamivir, zanamivir, peramivir, or baloxavir can be options for eligible uncomplicated outpatients within two days","Choose by age, route, airway disease, renal function, pregnancy, lactation, immune status, weight, interactions, and availability","Assess exact age, weight, swallowing, inspiratory flow, IV need, kidneys, cations, reproductive context, and cost","Choosing solely by dose count","Single-dose convenience can be outweighed by a contraindication or evidence limitation"),
  c("baloxavir population boundary","influenza-selection-timing","CDC does not recommend baloxavir monotherapy for pregnant, breastfeeding, immunocompromised, hospitalized, complicated, or progressive influenza","Use an evidence-supported alternative, commonly oseltamivir in pregnancy and hospitalized disease","Assess pregnancy, lactation, immune status, hospitalization, complication, progression, age, and symptom onset","Generalizing the outpatient single-dose regimen to unstudied or unsupported populations","A labeled uncomplicated-outpatient indication has important population boundaries"),

  c("oseltamivir prodrug activation","oseltamivir-mechanism-pk","Oseltamivir phosphate is an orally absorbed ester prodrug converted predominantly by hepatic esterases to oseltamivir carboxylate","Connect oral product administration to active systemic neuraminidase inhibition","Assess product, dose, absorption, hepatic esterase activation, active metabolite, kidneys, and timing","Calling the administered parent compound the final active species","Most systemic exposure is the active carboxylate metabolite"),
  c("oseltamivir neuraminidase inhibition","oseltamivir-mechanism-pk","Oseltamivir carboxylate inhibits influenza A and B neuraminidase and limits progeny virion release","Use the target to explain early reduction of viral spread without claiming eradication of existing tissue injury","Assess onset, replication phase, viral type, host response, symptom trajectory, and complications","Promising reversal of established epithelial damage","Blocking new release cannot immediately restore already injured respiratory tissue"),
  c("oseltamivir renal elimination","oseltamivir-mechanism-pk","Oseltamivir carboxylate is eliminated unchanged in urine through filtration and tubular secretion","Adjust treatment and prophylaxis regimens to the exact adult renal and dialysis category","Assess creatinine clearance, dialysis type and timing, indication, age, dose, course, and changing kidney function","Using the standard 75 mg regimen across severe renal impairment","Reduced elimination increases active-metabolite exposure"),
  c("oseltamivir CYP boundary","oseltamivir-mechanism-pk","Oseltamivir and its active metabolite are not clinically meaningful CYP substrates or inhibitors","Prioritize renal disposition and exact documented interactions rather than inventing a broad CYP interaction list","Assess kidney function, probenecid context, vaccine timing, formulation ingredients, and complete medication list","Assigning routine CYP3A4 dose adjustments","Esterase activation and renal elimination dominate disposition"),

  c("oseltamivir adult treatment","oseltamivir-dosing-administration","The standard adult uncomplicated-influenza treatment regimen is 75 mg twice daily for five days","Start as early as possible and adjust for renal function, dialysis, setting, and current guidance","Assess indication, onset, age, renal function, dialysis, enteral route, adherence, and vomiting","Confusing once-daily prophylaxis with twice-daily treatment","Treatment and prevention use different frequencies"),
  c("oseltamivir pediatric weight bands","oseltamivir-dosing-administration","Current labeling uses 3 mg/kg twice daily from 2 weeks to less than 1 year and weight bands from 1 through 12 years","Calculate from kilograms and verify the 6 mg/mL suspension volume or capsule strength","Assess age, weight, prematurity, concentration, milligrams, milliliters, device, renal function, and course","Using an adult age cutoff from older study material","Current pediatric eligibility and dosing begin far earlier than adolescence"),
  c("oseltamivir suspension calculation","oseltamivir-dosing-administration","The constituted commercial suspension contains 6 mg/mL, so a 45 mg dose requires 7.5 mL","Divide ordered milligrams by concentration and measure with an oral dosing device","Assess concentration, prescribed milligrams, calculated milliliters, device markings, caregiver technique, and total volume","Confusing the 6 mg/mL concentration with a 6 mL dose","Dose volume must be calculated from the ordered mass"),
  c("oseltamivir storage and food","oseltamivir-dosing-administration","Capsules and suspension may be taken with or without food, food can improve tolerability, and constituted suspension has product-specific storage limits","Shake the suspension, measure accurately, use within the labeled storage interval, and consider food for nausea","Assess constitution date, refrigeration, room temperature, expiration label, shaking, device, food, and vomiting","Applying emergency-compounded storage rules to the commercial suspension","Commercial and emergency preparations have different validated stability"),

  c("oseltamivir gastrointestinal effects","oseltamivir-safety-populations","Nausea and vomiting are common early effects and may be reduced by taking oseltamivir with food","Support hydration and food administration while reassessing severe or persistent symptoms","Assess timing, dose, food, hydration, retained doses, severity, abdominal findings, and alternative illness","Automatically stopping an otherwise tolerable course after one mild episode","Early gastrointestinal effects often resolve while food improves tolerability"),
  c("oseltamivir neuropsychiatric monitoring","oseltamivir-safety-populations","Influenza itself and uncommon postmarketing events can involve delirium, hallucinations, abnormal behavior, or self-injury","Monitor closely, protect the patient from injury, and evaluate the illness and benefit-risk of continued therapy","Assess onset, fever, encephalopathy, seizures, medication timing, behavior, supervision, and immediate safety","Assigning causality to the drug without evaluating influenza encephalopathy","The contribution of oseltamivir is not established and the infection can cause the same syndrome"),
  c("oseltamivir serious reactions and sorbitol","oseltamivir-safety-populations","Serious skin or hypersensitivity reactions require withdrawal, and the suspension can deliver harmful sorbitol in hereditary fructose intolerance","Stop for serious immune findings and verify hereditary fructose intolerance before using the suspension","Assess rash, mucosa, swelling, airway, hereditary fructose intolerance, dosage form, and alternatives","Treating hereditary fructose intolerance as ordinary dietary preference","A 75 mg suspension dose delivers 2 grams of sorbitol according to current labeling"),
  c("oseltamivir pregnancy and lactation","oseltamivir-safety-populations","CDC recommends oseltamivir during pregnancy because human experience is greatest, and human-milk exposure is low","Treat suspected or confirmed influenza promptly in any trimester and use current lactation data in shared assessment","Assess pregnancy trimester, severity, onset, maternal risk, lactation, infant health, renal function, and access","Using an obsolete pregnancy letter or withholding therapy solely because of pregnancy","Influenza itself creates substantial maternal and fetal risk while available data support oseltamivir use"),

  c("zanamivir inhaled delivery","zanamivir-pharmacology-safety","Zanamivir is a neuraminidase inhibitor delivered as inhalation powder through the Diskhaler, with two 5 mg inhalations making a 10 mg dose","Demonstrate device loading, piercing, inhalation, and dose counting before use","Assess age, inspiratory flow, cognition, dexterity, supervision, device technique, and airway disease","Putting Diskhaler powder into a nebulizer or other device","The formulation and breath-activated device are a single delivery system"),
  c("zanamivir treatment regimen","zanamivir-pharmacology-safety","Treatment is 10 mg by oral inhalation twice daily for five days in patients age 7 years and older","Give two doses on day one when possible with at least two hours between them, then dose about 12 hours apart","Assess age, onset, first-day timing, technique, adherence, symptoms, and respiratory function","Counting one 5 mg blister as the full 10 mg dose","Each labeled dose requires two separate 5 mg inhalations"),
  c("zanamivir bronchospasm boundary","zanamivir-pharmacology-safety","Zanamivir is not recommended in underlying airway disease and can cause serious or fatal bronchospasm","Choose another antiviral for asthma or COPD and stop immediately for bronchospasm or declining respiratory function","Assess asthma, COPD, wheeze, spirometry context, rescue inhaler, dyspnea, and route alternatives","Using an inhaled product because the patient already uses inhalers","Influenza and zanamivir can both worsen respiratory function in a vulnerable airway"),
  c("zanamivir milk protein and vaccine","zanamivir-pharmacology-safety","The lactose excipient contains milk proteins, and zanamivir timing can interfere with intranasal live attenuated influenza vaccine","Exclude true milk-protein allergy and maintain the two-week-before and 48-hour-after LAIV separation unless medically indicated","Assess allergy phenotype, lactose intolerance distinction, vaccine product, vaccine date, drug dates, and alternatives","Equating lactose intolerance with milk-protein anaphylaxis or ignoring LAIV timing","Formulation allergy and live-virus replication are separate but clinically important controls"),

  c("peramivir intravenous role","peramivir-pharmacology-administration","Peramivir is an intravenous neuraminidase inhibitor approved as a single dose for acute uncomplicated influenza within two days","Use it for an eligible patient when intravenous delivery is clinically appropriate and do not generalize it to routine hospitalized monotherapy","Assess age, onset, uncomplicated status, enteral feasibility, IV access, renal function, and evidence setting","Assuming intravenous route proves superiority in severe hospitalized influenza","The serious-hospitalized trial did not show benefit and CDC does not recommend routine use there"),
  c("peramivir adult and pediatric dose","peramivir-pharmacology-administration","Adults and adolescents at least 13 years receive 600 mg once, while patients 6 months through 12 years receive 12 mg/kg once up to 600 mg","Calculate pediatric mass from kilograms and cap the result at 600 mg before renal adjustment","Assess exact age, weight, calculated dose, cap, renal function, concentration, infusion, and onset","Giving 12 mg/kg without applying the 600 mg maximum","Weight-based dosing still has a labeled ceiling"),
  c("peramivir renal adjustment","peramivir-pharmacology-administration","Peramivir is eliminated largely unchanged by the kidneys and the adult dose falls to 200 mg at creatinine clearance 30 to 49 and 100 mg at 10 to 29 mL/min","Calculate creatinine clearance, reduce the single dose, and administer after hemodialysis","Assess baseline and changing renal function, age, dialysis, indication, dose, infusion, and follow-up","Treating a single intravenous dose as exempt from renal adjustment","Severe renal impairment increases peramivir exposure several fold"),
  c("peramivir preparation and safety","peramivir-pharmacology-administration","The 10 mg/mL vial must be diluted to 1 to 6 mg/mL and infused over 15 to 30 minutes without mixing or co-infusing other intravenous drugs","Verify concentration, diluent, final volume, line, duration, renal dose, and hypersensitivity monitoring","Assess particulates, discoloration, diluent, concentration, compatibility, line, infusion reaction, skin, behavior, and bacterial complication","Administering the undiluted vial as a rapid intravenous push","Preparation and infusion controls protect exposure and tolerability"),

  c("baloxavir prodrug and active form","baloxavir-target-dosing","Baloxavir marboxil is a lipophilic ester prodrug converted by hydrolysis to active baloxavir","Connect the single oral prodrug dose to sustained inhibition of viral PA endonuclease","Assess product, weight, formulation, absorption, active metabolite, cations, onset, and susceptibility","Calling marboxil an inactive excipient","The prodrug architecture enables oral delivery of the active antiviral system"),
  c("baloxavir endonuclease inhibition","baloxavir-target-dosing","Active baloxavir inhibits the polymerase acidic cap-dependent endonuclease needed for viral messenger RNA transcription","Use the distinct target to explain why baloxavir is not cross-class identical to neuraminidase inhibitors","Assess transcription, cap snatching, PA substitutions, timing, viral type, host, and response","Describing baloxavir as blocking virion release","Its principal action is interruption of viral RNA transcription"),
  c("baloxavir current age and weight dosing","baloxavir-target-dosing","Current labeling covers treatment and post-exposure prophylaxis from age 5 with a single weight-based dose","Use 40 mg from 20 to less than 80 kg, 80 mg at 80 kg or more, and the appropriate suspension presentation below 20 kg","Assess age, exact weight, product presentation, swallowing, enteral route, onset or exposure, and dose","Preserving the older age-12 cutoff from RxPrep 2023","The current label expanded eligibility and added pediatric formulations"),
  c("baloxavir suspension calculation","baloxavir-target-dosing","The bottle suspension is 2 mg/mL, so a 14 kg child prescribed 2 mg/kg requires 28 mg or 14 mL","Multiply weight by milligrams per kilogram, then divide by concentration and measure with an oral syringe","Assess kilograms, age, milligrams per kilogram, total milligrams, concentration, milliliters, bottle count, and device","Stopping after the milligram calculation without converting to volume","A correct weight-based dose still requires a deliverable formulation volume"),

  c("baloxavir cation chelation","baloxavir-administration-safety","Baloxavir can chelate polyvalent cations, lowering exposure and potentially reducing efficacy","Avoid dairy, calcium-fortified beverages, cation-containing antacids, laxatives, and oral mineral supplements with the dose","Assess meal, dairy, fortified drinks, calcium, iron, magnesium, selenium, zinc, antacids, and laxatives","Assuming with-or-without-food means with any food or supplement","Food flexibility does not override the specific polyvalent-cation interaction"),
  c("baloxavir suspension handling","baloxavir-administration-safety","Bottle suspension is prepared to 2 mg/mL, gently swirled rather than shaken, and administered within 10 hours because it lacks preservative","Label the expiration time, use the correct syringe, deliver the full dose, and follow enteral-tube flushing instructions","Assess presentation, water volume, swirl technique, time, storage, syringe, bottle count, tube size, and flush","Using oseltamivir suspension storage rules for baloxavir","Different formulations have different preparation and stability systems"),
  c("baloxavir hypersensitivity and resistance","baloxavir-administration-safety","Anaphylaxis, angioedema, urticaria, and erythema multiforme require action, while treatment-emergent PA resistance is more frequent below age 5","Stop for serious immune reactions and do not use baloxavir below age 5","Assess age, reaction timing, airway, skin, mucosa, prior baloxavir, immune status, response, and susceptibility","Extending the adult single-dose product to a younger child","The current age boundary reflects both evidence and a higher observed resistance incidence"),
  c("baloxavir reproductive and population limits","baloxavir-administration-safety","Human pregnancy and lactation data are limited, and CDC does not recommend monotherapy in pregnancy, breastfeeding, immunocompromise, hospitalization, or complicated disease","Select an evidence-supported alternative and use current narrative reproductive information","Assess pregnancy, lactation, immune status, disease setting, complication, onset, age, and alternatives","Using animal reassurance as proof of preferred human use","Limited human evidence and setting-specific effectiveness determine the current boundary"),

  c("post-exposure prophylaxis selection","integrated-influenza-system","Prophylaxis depends on exposure, timing, host risk, age, product indication, outbreak context, vaccination, and public-health guidance","Choose the exact drug, dose, duration, and follow-up rather than borrowing a treatment regimen","Assess source case, last exposure, household or outbreak setting, age, risk, vaccine status, renal function, and symptoms","Using prophylaxis to treat a patient who is already symptomatic","Treatment and prevention answer different clinical questions"),
  c("live attenuated vaccine timing","integrated-influenza-system","Influenza antivirals can inhibit replication of intranasal live attenuated vaccine and reduce vaccine effectiveness","Verify vaccine product and dates and follow product-specific separation guidance","Assess whether vaccine was live intranasal or inactivated, antiviral agent, start and stop dates, immune status, and urgency","Applying live-vaccine spacing to every inactivated influenza vaccine","The interaction depends on replication of the live vaccine virus"),
  c("failure and deterioration audit","integrated-influenza-system","Worsening illness can reflect late viral injury, bacterial pneumonia, another pathogen, poor absorption, delivery failure, resistance, or host decompensation","Reassess the syndrome urgently and treat the actionable complication rather than automatically repeating antiviral doses","Assess oxygenation, hemodynamics, chest findings, testing, adherence, route, renal dose, immune status, and resistance context","Calling every deterioration antiviral resistance","Clinical decline has many urgent and more common explanations"),
  c("educational boundary","integrated-influenza-system","This module supports antiviral verification and clinical reasoning but does not replace patient-specific diagnosis or prescribing","Use current seasonal CDC guidance, product labeling, local policy, patient data, and qualified judgment","Assess season, circulating susceptibility, syndrome, host, severity, product, route, dose, interaction, and follow-up","Turning a study regimen into an unsupervised standing prescription","Influenza recommendations change with evidence, resistance, product labeling, and patient context")
];

const dimensions=[["principle","Which principle best characterizes"],["action","Which clinical action best applies to"],["assessment","Which assessment is most appropriate for"],["hazard","Which reasoning hazard is most important to prevent with"]];
const distractors=(index,field)=>[10,20,30].map(offset=>concepts[(index+offset)%concepts.length][field]);
const generated=concepts.flatMap((item,index)=>dimensions.map(([field,stem],dimension)=>({id:`influenza-antiviral-pharmacology-${String(index*4+dimension+1).padStart(3,"0")}`,lesson:item.lesson,question:`${stem} ${item.name}?`,choices:[item[field],...distractors(index,field)],answer:0,rationale:item.why,reviewHref:`#${item.lesson}`})));
const caseRows=[
  ["influenza-biology-triage","A pregnant patient at high risk presents with suspected influenza. Testing will take hours. What is the priority?",["Start empiric oseltamivir as soon as possible","Wait for confirmation before treating","Use baloxavir monotherapy","Use an adamantane"],"Priority patients should receive prompt empiric treatment without waiting for laboratory confirmation."],
  ["influenza-life-cycle-targets","Which viral process is directly inhibited by baloxavir?",["PA endonuclease activity required for cap snatching","Neuraminidase-mediated virion release","M2 proton conductance only","Host ribosomal translation"],"Baloxavir blocks the influenza polymerase acidic cap-dependent endonuclease."],
  ["influenza-selection-timing","A hospitalized patient has had symptoms for four days. What routine antiviral does CDC recommend?",["Oral or enterically administered oseltamivir","No treatment because 48 hours passed","Single-dose baloxavir","Inhaled zanamivir regardless of airway disease"],"Hospitalized influenza should receive oseltamivir as soon as possible even when treatment starts later than 48 hours."],
  ["oseltamivir-mechanism-pk","Which form directly inhibits influenza neuraminidase after oral oseltamivir?",["Oseltamivir carboxylate","Oseltamivir phosphate salt only","An active CYP3A4 metabolite","Sorbitol"],"Hepatic esterases convert the prodrug to oseltamivir carboxylate."],
  ["oseltamivir-dosing-administration","A 45 mg oseltamivir dose is ordered from a 6 mg/mL suspension. What volume is required?",["7.5 mL","45 mL","6 mL","2.7 mL"],"Forty-five milligrams divided by 6 mg per mL equals 7.5 mL."],
  ["oseltamivir-dosing-administration","What is the standard adult uncomplicated-influenza treatment regimen?",["75 mg twice daily for five days","75 mg once daily for five days","600 mg intravenously once","40 mg orally once for every weight"],"Treatment uses twice-daily oseltamivir for five days before renal adjustment."],
  ["oseltamivir-safety-populations","Why is oseltamivir preferred during pregnancy?",["It has the greatest supportive human experience and CDC recommends it","It has no systemic exposure","Pregnancy eliminates influenza risk","Baloxavir is contraindicated by an FDA boxed warning"],"CDC favors oseltamivir because available pregnancy experience supports benefit and safety."],
  ["zanamivir-pharmacology-safety","A patient with asthma asks for inhaled zanamivir. What is the best response?",["Choose another antiviral because of bronchospasm risk","Use zanamivir because asthma improves inhalation","Nebulize the Diskhaler powder","Double the first dose"],"Zanamivir is not recommended with underlying airway disease."],
  ["zanamivir-pharmacology-safety","How is one 10 mg zanamivir dose delivered?",["Two separate 5 mg Diskhaler inhalations","One 10 mg tablet","One 10 mg intravenous push","Four 2.5 mg nasal sprays"],"Each dose uses two 5 mg blisters through the Diskhaler."],
  ["peramivir-pharmacology-administration","What single peramivir dose is calculated for a 30 kg child with normal renal function?",["360 mg","600 mg","30 mg","12 mg"],"Twelve milligrams per kilogram multiplied by 30 kg equals 360 mg."],
  ["peramivir-pharmacology-administration","What adult peramivir dose is labeled when creatinine clearance is 35 mL/min?",["200 mg once","600 mg once","100 mg once","No adjustment"],"The labeled adult dose is reduced to 200 mg for creatinine clearance 30 to 49 mL/min."],
  ["baloxavir-target-dosing","A 14 kg child is prescribed baloxavir bottle suspension at 2 mg/kg. The concentration is 2 mg/mL. What volume is needed?",["14 mL","28 mL","7 mL","2 mL"],"The 28 mg dose divided by 2 mg per mL equals 14 mL."],
  ["baloxavir-target-dosing","What is the current baloxavir dose for a 65 kg patient age 12?",["40 mg once","80 mg once","20 mg once","75 mg twice daily"],"Current tablet dosing uses 40 mg once from 20 to less than 80 kg."],
  ["baloxavir-administration-safety","Which same-time exposure can reduce baloxavir efficacy?",["A calcium-containing antacid","Plain water","An oral syringe","An inactivated vaccine"],"Polyvalent cations can chelate baloxavir and reduce exposure."],
  ["integrated-influenza-system","A patient improves, then develops new fever, hypoxemia, and focal crackles. What is the priority?",["Evaluate urgently for secondary bacterial pneumonia","Repeat baloxavir automatically","Assume antiviral resistance only","Ignore symptoms because treatment was completed"],"A biphasic decline with focal findings can signal bacterial complication."],
  ["integrated-influenza-system","What is the correct educational boundary for this module?",["Use it to structure verification, then apply current seasonal guidance and patient-specific judgment","Use each regimen as a standing prescription","Ignore current susceptibility data","Replace vaccination with prophylaxis"],"Influenza decisions change with season, resistance, labeling, and patient context."]
];
const cases=caseRows.map((item,index)=>({id:`influenza-antiviral-pharmacology-${String(generated.length+index+1).padStart(3,"0")}`,lesson:item[0],question:item[1],choices:item[2],answer:0,rationale:item[3],reviewHref:`#${item[0]}`}));
const sourceReviewedAdministrationQuestions = {
  "influenza-antiviral-pharmacology-065": {
    "choices": [
      "The standard adult uncomplicated-influenza treatment regimen is 75 mg twice daily for five days",
      "Adults receive 75 mg once daily for five days as the standard treatment course",
      "Adults receive 75 mg twice daily for one day as the standard treatment course",
      "Adults receive 600 mg intravenously once as the standard oseltamivir treatment course"
    ],
    "rationale": "The book specifies oral oseltamivir 75 mg twice daily for five days for adult treatment. Once-daily dosing belongs to its prophylaxis schedule, and 600 mg intravenously once is its adult peramivir regimen. Renal impairment requires separate adjustment."
  },
  "influenza-antiviral-pharmacology-068": {
    "choices": [
      "Confusing once-daily prophylaxis with twice-daily treatment",
      "Confirming a twice-daily treatment interval",
      "Recording the five-day treatment duration",
      "Separating the treatment order from a prevention order"
    ],
    "rationale": "The book gives oseltamivir 75 mg twice daily for five days for adult treatment and 75 mg once daily for ten days for prophylaxis. Importing the once-daily prevention interval into a treatment order confuses the two purposes; checking the interval, duration and indication prevents that error."
  },
  "influenza-antiviral-pharmacology-073": {
    "choices": [
      "The constituted commercial suspension contains 6 mg/mL, so a 45 mg dose requires 7.5 mL",
      "The constituted suspension contains 6 mg/mL, so a 45 mg dose requires 45 mL",
      "The constituted suspension contains 6 mg/mL, so a 45 mg dose requires 6 mL",
      "The constituted suspension contains 6 mg/mL, so a 45 mg dose requires 2.7 mL"
    ],
    "rationale": "The book lists a 6 mg/mL oseltamivir suspension. Divide the prescribed 45 mg by 6 mg/mL to obtain 7.5 mL. The alternatives would deliver 270 mg, 36 mg and 16.2 mg, respectively."
  },
  "influenza-antiviral-pharmacology-074": {
    "choices": [
      "Divide ordered milligrams by concentration and measure with an oral dosing device",
      "Use the ordered milligram number as the milliliter number without division",
      "Use the concentration number as the dose volume for every prescription",
      "Divide concentration by the ordered milligrams and record that result as milliliters"
    ],
    "rationale": "Volume equals ordered mass divided by concentration: 45 mg divided by 6 mg/mL is 7.5 mL. Measuring that calculated oral volume is the practical application of the book concentration; a concentration is not itself a dose volume."
  },
  "influenza-antiviral-pharmacology-075": {
    "choices": [
      "Assess concentration, prescribed milligrams, calculated milliliters, device markings, caregiver technique, and total volume",
      "Review the ordered milligrams alone and omit concentration and milliliters",
      "Review bottle capacity alone and omit the dose and measuring device",
      "Assume every suspension uses the same concentration and skip the calculation"
    ],
    "rationale": "An accurate oral delivery review connects the book 6 mg/mL concentration to the prescribed mass and calculated volume. Device markings, caregiver technique and available volume help establish whether the calculated dose can be measured and delivered accurately."
  },
  "influenza-antiviral-pharmacology-076": {
    "choices": [
      "Confusing the 6 mg/mL concentration with a 6 mL dose",
      "Dividing 45 mg by 6 mg/mL to obtain 7.5 mL",
      "Keeping concentration units separate from dose-volume units",
      "Checking the calculated volume against the prescribed mass"
    ],
    "rationale": "The book concentration of 6 mg/mL describes mass per volume. It does not mean every dose is 6 mL: 6 mL would contain 36 mg, while an ordered 45 mg requires 7.5 mL. The other actions preserve that distinction."
  },
  "influenza-antiviral-pharmacology-152": {
    "choices": [
      "Using oseltamivir suspension storage rules for baloxavir",
      "Recording the baloxavir preparation time and its ten-hour administration limit",
      "Keeping the book baloxavir suspension at room temperature within its specified window",
      "Recognizing that oseltamivir and baloxavir have different suspension storage limits"
    ],
    "rationale": "The book gives reconstituted oseltamivir suspension ten days at room temperature or seventeen days refrigerated, but reconstituted baloxavir suspension must be administered within ten hours at room temperature. These drug-specific clocks cannot be exchanged."
  }
};
export const influenzaAntiviralPharmacologyQuestionBank = [...generated,...cases].map((question) => sourceReviewedAdministrationQuestions[question.id] ? { ...question, ...sourceReviewedAdministrationQuestions[question.id] } : question);
if(influenzaAntiviralPharmacologyQuestionBank.length<100)throw new Error(`Influenza antiviral pharmacology bank must contain at least 100 questions, found ${influenzaAntiviralPharmacologyQuestionBank.length}.`);


// Whole oseltamivir questions reviewed, with stable IDs and keyed indices.
for (const [id, updates] of Object.entries({
  "influenza-antiviral-pharmacology-065": {
    "id": "influenza-antiviral-pharmacology-065",
    "lesson": "oseltamivir-dosing-administration",
    "question": "Which principle best characterizes oseltamivir adult treatment?",
    "choices": [
      "The standard adult uncomplicated-influenza treatment regimen is 75 mg twice daily for five days",
      "Adults receive 75 mg once daily for five days as the standard treatment course",
      "Adults receive 75 mg twice daily for one day as the standard treatment course",
      "Adults receive 600 mg intravenously once as the standard oseltamivir treatment course"
    ],
    "answer": 0,
    "rationale": "The book specifies oral oseltamivir 75 mg twice daily for five days for adult treatment. Once-daily dosing belongs to its prophylaxis schedule, and 600 mg intravenously once is its adult peramivir regimen. Renal impairment requires separate adjustment.",
    "reviewHref": "#oseltamivir-dosing-administration"
  },
  "influenza-antiviral-pharmacology-066": {
    "id": "influenza-antiviral-pharmacology-066",
    "lesson": "oseltamivir-dosing-administration",
    "question": "A hospitalized adult has suspected influenza, symptoms for four days and impaired renal function. Which action best fits oseltamivir treatment?",
    "choices": [
      "Start as early as possible and adjust for renal function, dialysis, setting, and current guidance",
      "Withhold oseltamivir solely because symptoms began more than 48 hours ago",
      "Use the once-daily prophylaxis interval regardless of kidney function",
      "Automatically double the standard dose because every hospitalized patient needs more drug"
    ],
    "answer": 0,
    "rationale": "CDC recommends prompt oral or enteric oseltamivir for hospitalized suspected or confirmed influenza even after 48 hours. Check renal function, dialysis and actual illness course; neither a prophylaxis schedule nor automatic higher dosing substitutes for that review.",
    "reviewHref": "#oseltamivir-dosing-administration"
  },
  "influenza-antiviral-pharmacology-067": {
    "id": "influenza-antiviral-pharmacology-067",
    "lesson": "oseltamivir-dosing-administration",
    "question": "Before delivering oseltamivir through an enteral route to an adult with influenza, which assessment best addresses dose and delivery?",
    "choices": [
      "Assess indication, onset, age, renal function, dialysis, enteral route, adherence, and vomiting",
      "Review the capsule color alone and use a standard dose despite renal failure",
      "Check onset alone and ignore whether the complete dose can be delivered",
      "Assume tube delivery proves absorption and omit review of vomiting or intolerance"
    ],
    "answer": 0,
    "rationale": "CDC supports enteric oseltamivir, while the dose and schedule depend on indication, renal function and dialysis. Verify the actual formulation, route and ability to deliver and absorb the ordered dose. A tube does not remove the need to assess intolerance or supply; no universal feeding hold or flush is established by these sources.",
    "reviewHref": "#oseltamivir-dosing-administration"
  },
  "influenza-antiviral-pharmacology-068": {
    "id": "influenza-antiviral-pharmacology-068",
    "lesson": "oseltamivir-dosing-administration",
    "question": "Which reasoning hazard is most important to prevent with oseltamivir adult treatment?",
    "choices": [
      "Confusing once-daily prophylaxis with twice-daily treatment",
      "Confirming a twice-daily treatment interval",
      "Recording the five-day treatment duration",
      "Separating the treatment order from a prevention order"
    ],
    "answer": 0,
    "rationale": "The book gives oseltamivir 75 mg twice daily for five days for adult treatment and 75 mg once daily for ten days for prophylaxis. Importing the once-daily prevention interval into a treatment order confuses the two purposes; checking the interval, duration and indication prevents that error.",
    "reviewHref": "#oseltamivir-dosing-administration"
  },
  "influenza-antiviral-pharmacology-069": {
    "id": "influenza-antiviral-pharmacology-069",
    "lesson": "oseltamivir-dosing-administration",
    "question": "Which statement matches the Tamiflu label for pediatric influenza treatment before any individualized adjustment?",
    "choices": [
      "Current labeling uses 3 mg/kg twice daily from 2 weeks to less than 1 year and weight bands from 1 through 12 years",
      "The adult dose row means oseltamivir treatment is prohibited below age 13",
      "Every infant receives 75 mg twice daily regardless of weight or prematurity",
      "Treatment and prophylaxis are both labeled from birth with the same twice-daily interval"
    ],
    "answer": 0,
    "rationale": "The label gives 3 mg/kg per dose twice daily from 2 weeks to less than 1 year and weight-band treatment from ages 1 through 12. CDC recommendations for younger infants and AAP/prematurity regimens are distinct from this labeled rule; labeled prophylaxis starts at age 1.",
    "reviewHref": "#oseltamivir-dosing-administration"
  },
  "influenza-antiviral-pharmacology-070": {
    "id": "influenza-antiviral-pharmacology-070",
    "lesson": "oseltamivir-dosing-administration",
    "question": "After selecting an age-appropriate oseltamivir regimen, which action best converts it into a measurable pediatric dose?",
    "choices": [
      "Calculate from kilograms and verify the 6 mg/mL suspension volume or capsule strength",
      "Use pounds as kilograms without conversion",
      "Treat a 45 mg order as 45 mL regardless of concentration",
      "Use one fixed adult capsule dose for every child below age 13"
    ],
    "answer": 0,
    "rationale": "Use current kilograms for the infant calculation or child weight band, then verify the actual concentration or capsule strength. At 6 mg/mL, 45 mg is 7.5 mL. Pounds, milligrams and milliliters cannot be substituted for one another.",
    "reviewHref": "#oseltamivir-dosing-administration"
  },
  "influenza-antiviral-pharmacology-071": {
    "id": "influenza-antiviral-pharmacology-071",
    "lesson": "oseltamivir-dosing-administration",
    "question": "Which assessment is most appropriate before choosing an oseltamivir dose for an infant or child?",
    "choices": [
      "Assess age, weight, prematurity, concentration, milligrams, milliliters, device, renal function, and course",
      "Use the infant weight alone and omit postmenstrual age in premature infants",
      "Choose a dose from bottle size without confirming age or indication",
      "Apply the adult renal table to every infant without an individualized plan"
    ],
    "answer": 0,
    "rationale": "The label separates infant mg/kg doses from child weight bands and adult renal schedules. CDC identifies postmenstrual-age dosing in premature infants and additional infant recommendations. Verify the dose, concentration, device and course; the label does not supply a general pediatric renal-adjustment table.",
    "reviewHref": "#oseltamivir-dosing-administration"
  },
  "influenza-antiviral-pharmacology-072": {
    "id": "influenza-antiviral-pharmacology-072",
    "lesson": "oseltamivir-dosing-administration",
    "question": "Which error is most important to avoid when interpreting the book adult oseltamivir dose row?",
    "choices": [
      "Treating the adult-dose age row as the minimum age for all oseltamivir treatment",
      "Recognizing that the label includes treatment from age 2 weeks",
      "Checking postmenstrual age before dosing a premature infant",
      "Separating labeled infant dosing from CDC and AAP recommendations"
    ],
    "answer": 0,
    "rationale": "The book also says pediatric doses are weight based; its adult row is not a prohibition on all younger patients. The current label and CDC provide distinct infant and premature-infant guidance. The other actions preserve those distinctions.",
    "reviewHref": "#oseltamivir-dosing-administration"
  },
  "influenza-antiviral-pharmacology-073": {
    "id": "influenza-antiviral-pharmacology-073",
    "lesson": "oseltamivir-dosing-administration",
    "question": "Which principle best characterizes oseltamivir suspension calculation?",
    "choices": [
      "The constituted commercial suspension contains 6 mg/mL, so a 45 mg dose requires 7.5 mL",
      "The constituted suspension contains 6 mg/mL, so a 45 mg dose requires 45 mL",
      "The constituted suspension contains 6 mg/mL, so a 45 mg dose requires 6 mL",
      "The constituted suspension contains 6 mg/mL, so a 45 mg dose requires 2.7 mL"
    ],
    "answer": 0,
    "rationale": "The book lists a 6 mg/mL oseltamivir suspension. Divide the prescribed 45 mg by 6 mg/mL to obtain 7.5 mL. The alternatives would deliver 270 mg, 36 mg and 16.2 mg, respectively.",
    "reviewHref": "#oseltamivir-dosing-administration"
  },
  "influenza-antiviral-pharmacology-074": {
    "id": "influenza-antiviral-pharmacology-074",
    "lesson": "oseltamivir-dosing-administration",
    "question": "Which clinical action best applies to oseltamivir suspension calculation?",
    "choices": [
      "Divide ordered milligrams by concentration and measure with an oral dosing device",
      "Use the ordered milligram number as the milliliter number without division",
      "Use the concentration number as the dose volume for every prescription",
      "Divide concentration by the ordered milligrams and record that result as milliliters"
    ],
    "answer": 0,
    "rationale": "Volume equals ordered mass divided by concentration: 45 mg divided by 6 mg/mL is 7.5 mL. Measuring that calculated oral volume is the practical application of the book concentration; a concentration is not itself a dose volume.",
    "reviewHref": "#oseltamivir-dosing-administration"
  },
  "influenza-antiviral-pharmacology-075": {
    "id": "influenza-antiviral-pharmacology-075",
    "lesson": "oseltamivir-dosing-administration",
    "question": "Which assessment is most appropriate for oseltamivir suspension calculation?",
    "choices": [
      "Assess concentration, prescribed milligrams, calculated milliliters, device markings, caregiver technique, and total volume",
      "Review the ordered milligrams alone and omit concentration and milliliters",
      "Review bottle capacity alone and omit the dose and measuring device",
      "Assume every suspension uses the same concentration and skip the calculation"
    ],
    "answer": 0,
    "rationale": "An accurate oral delivery review connects the book 6 mg/mL concentration to the prescribed mass and calculated volume. Device markings, caregiver technique and available volume help establish whether the calculated dose can be measured and delivered accurately.",
    "reviewHref": "#oseltamivir-dosing-administration"
  },
  "influenza-antiviral-pharmacology-076": {
    "id": "influenza-antiviral-pharmacology-076",
    "lesson": "oseltamivir-dosing-administration",
    "question": "Which reasoning hazard is most important to prevent with oseltamivir suspension calculation?",
    "choices": [
      "Confusing the 6 mg/mL concentration with a 6 mL dose",
      "Dividing 45 mg by 6 mg/mL to obtain 7.5 mL",
      "Keeping concentration units separate from dose-volume units",
      "Checking the calculated volume against the prescribed mass"
    ],
    "answer": 0,
    "rationale": "The book concentration of 6 mg/mL describes mass per volume. It does not mean every dose is 6 mL: 6 mL would contain 36 mg, while an ordered 45 mg requires 7.5 mL. The other actions preserve that distinction.",
    "reviewHref": "#oseltamivir-dosing-administration"
  },
  "influenza-antiviral-pharmacology-077": {
    "id": "influenza-antiviral-pharmacology-077",
    "lesson": "oseltamivir-dosing-administration",
    "question": "Which statement correctly describes oral oseltamivir administration and suspension storage?",
    "choices": [
      "Capsules and suspension may be taken with or without food, food can improve tolerability, and constituted suspension has product-specific storage limits",
      "All oseltamivir doses require fasting and permanent avoidance of dairy products",
      "Commercial and emergency suspensions have identical stability because both contain 6 mg/mL",
      "Constituted commercial suspension may be frozen to extend the expiration date"
    ],
    "answer": 0,
    "rationale": "Food is optional and may improve tolerability. Commercial constituted Tamiflu suspension is used within 17 refrigerated days or 10 days at controlled room temperature and must not be frozen. The labeled emergency capsule preparation instead has five-week refrigerated or five-day room-temperature stability.",
    "reviewHref": "#oseltamivir-dosing-administration"
  },
  "influenza-antiviral-pharmacology-078": {
    "id": "influenza-antiviral-pharmacology-078",
    "lesson": "oseltamivir-dosing-administration",
    "question": "Which action best applies to a bottle of constituted commercial Tamiflu suspension?",
    "choices": [
      "Shake the suspension, measure accurately, use within the labeled storage interval, and consider food for nausea",
      "Skip shaking because the calculated concentration guarantees a uniform dose",
      "Extend the commercial expiration to five weeks refrigerated by borrowing the emergency-batch rule",
      "Measure each dose with an uncalibrated household spoon"
    ],
    "answer": 0,
    "rationale": "The product label requires shaking and a suitable milliliter dosing device. Use the commercial preparation storage interval, not the emergency preparation interval. Taking a dose with food may reduce gastrointestinal upset.",
    "reviewHref": "#oseltamivir-dosing-administration"
  },
  "influenza-antiviral-pharmacology-079": {
    "id": "influenza-antiviral-pharmacology-079",
    "lesson": "oseltamivir-dosing-administration",
    "question": "Which assessment best verifies commercial oseltamivir suspension handling and tolerability?",
    "choices": [
      "Assess constitution date, refrigeration, room temperature, expiration label, shaking, device, food, and vomiting",
      "Review drug name alone and assume every suspension has the same expiration",
      "Use refrigeration as proof that a bottle remains usable indefinitely",
      "Check taste alone and omit the preparation date and measured volume"
    ],
    "answer": 0,
    "rationale": "Link the exact preparation and date to its storage history and labeled expiration. Shaking and the calibrated device help deliver the calculated volume; food and vomiting identify tolerability or delivery concerns. Refrigeration does not remove the finite storage limit.",
    "reviewHref": "#oseltamivir-dosing-administration"
  },
  "influenza-antiviral-pharmacology-080": {
    "id": "influenza-antiviral-pharmacology-080",
    "lesson": "oseltamivir-dosing-administration",
    "question": "Which error most directly threatens an accurate oseltamivir suspension expiration label?",
    "choices": [
      "Applying emergency-compounded storage rules to the commercial suspension",
      "Identifying whether the suspension came from commercial powder or an emergency capsule preparation",
      "Using the commercial 17-day refrigerated limit for constituted branded powder",
      "Using the emergency five-day room-temperature limit for its labeled capsule preparation"
    ],
    "answer": 0,
    "rationale": "The same 6 mg/mL concentration does not make the preparations interchangeable. Commercial powder suspension has 17-day refrigerated or 10-day room-temperature limits; the specified emergency preparation has five-week refrigerated or five-day room-temperature limits. Identify the preparation before assigning its expiration.",
    "reviewHref": "#oseltamivir-dosing-administration"
  },
  "influenza-antiviral-pharmacology-181": {
    "id": "influenza-antiviral-pharmacology-181",
    "lesson": "oseltamivir-dosing-administration",
    "question": "A 45 mg oseltamivir dose is ordered from a 6 mg/mL suspension. What volume is required?",
    "choices": [
      "7.5 mL",
      "45 mL",
      "6 mL",
      "2.7 mL"
    ],
    "answer": 0,
    "rationale": "Forty-five milligrams divided by 6 mg per mL equals 7.5 mL.",
    "reviewHref": "#oseltamivir-dosing-administration"
  },
  "influenza-antiviral-pharmacology-182": {
    "id": "influenza-antiviral-pharmacology-182",
    "lesson": "oseltamivir-dosing-administration",
    "question": "What is the standard adult uncomplicated-influenza treatment regimen?",
    "choices": [
      "75 mg twice daily for five days",
      "75 mg once daily for five days",
      "600 mg intravenously once",
      "40 mg orally once for every weight"
    ],
    "answer": 0,
    "rationale": "Treatment uses twice-daily oseltamivir for five days before renal adjustment.",
    "reviewHref": "#oseltamivir-dosing-administration"
  }
})) {
  Object.assign(influenzaAntiviralPharmacologyQuestionBank.find((question) => question.id === id), updates);
}


// Whole influenza triage questions reviewed, with stable IDs and keyed indices.
for (const [id, updates] of Object.entries({
  "influenza-antiviral-pharmacology-001": {
    "id": "influenza-antiviral-pharmacology-001",
    "lesson": "influenza-biology-triage",
    "question": "Which statement best describes influenza A and B for initial clinical triage?",
    "choices": [
      "Either type can cause an acute respiratory illness that becomes severe, especially in a high-risk host",
      "Influenza B cannot cause hospitalization or severe respiratory illness",
      "Influenza requires fever in every patient before it can be suspected",
      "A typical influenza symptom pattern excludes every other respiratory pathogen"
    ],
    "answer": 0,
    "rationale": "The book identifies both A and B as causes of potentially severe illness. Symptoms vary, fever can be absent, and mimics or coinfections remain possible.",
    "reviewHref": "#influenza-biology-triage"
  },
  "influenza-antiviral-pharmacology-002": {
    "id": "influenza-antiviral-pharmacology-002",
    "lesson": "influenza-biology-triage",
    "question": "Which approach best guides initial assessment of suspected influenza?",
    "choices": [
      "Assess onset, severity, host risk, care setting and competing respiratory diagnoses",
      "Choose treatment from cough intensity alone without assessing the host",
      "Treat a positive SARS-CoV-2 result as proof that influenza is absent",
      "Exclude influenza solely because the patient received this season's vaccine"
    ],
    "answer": 0,
    "rationale": "Triage connects illness probability and trajectory to treatment urgency. Neither SARS-CoV-2 detection nor prior influenza vaccination excludes influenza infection.",
    "reviewHref": "#influenza-biology-triage"
  },
  "influenza-antiviral-pharmacology-003": {
    "id": "influenza-antiviral-pharmacology-003",
    "lesson": "influenza-biology-triage",
    "question": "Which assessment best identifies the influenza decision state?",
    "choices": [
      "Assess respiratory symptoms, oxygenation, hydration, mental status, onset and high-risk conditions",
      "Assess only the measured temperature and stop if fever is absent",
      "Record only a rapid antigen test result and omit the clinical examination",
      "Assess age alone and ignore pregnancy, immune status and chronic disease"
    ],
    "answer": 0,
    "rationale": "Symptoms, severity and host factors jointly determine the decision. Fever and rapid antigen results cannot independently exclude influenza or define treatment urgency.",
    "reviewHref": "#influenza-biology-triage"
  },
  "influenza-antiviral-pharmacology-004": {
    "id": "influenza-antiviral-pharmacology-004",
    "lesson": "influenza-biology-triage",
    "question": "Which interpretation of respiratory symptoms is most likely to cause a triage error?",
    "choices": [
      "Treating every respiratory illness as influenza without considering mimics or coinfection",
      "Considering COVID-19 when influenza and SARS-CoV-2 are circulating",
      "Assessing oxygenation when a patient reports breathing difficulty",
      "Reviewing chronic disease and pregnancy when estimating complication risk"
    ],
    "answer": 0,
    "rationale": "Influenza overlaps with other respiratory infections and can coexist with them. The other actions retain appropriate differential and risk assessment.",
    "reviewHref": "#influenza-biology-triage"
  },
  "influenza-antiviral-pharmacology-005": {
    "id": "influenza-antiviral-pharmacology-005",
    "lesson": "influenza-biology-triage",
    "question": "Which statement correctly defines priority influenza treatment groups?",
    "choices": [
      "Hospitalization, severe or progressive illness, or high complication risk supports treatment as soon as possible",
      "A priority patient must always have a positive rapid antigen test before treatment",
      "Only otherwise healthy adults with symptoms for less than 24 hours qualify",
      "Symptoms beyond 48 hours exclude treatment in every hospitalized patient"
    ],
    "answer": 0,
    "rationale": "The book and CDC retain hospitalized, severely ill and high-risk patients for treatment even after 48 hours. CDC also directs empiric treatment without waiting for confirmation.",
    "reviewHref": "#influenza-biology-triage"
  },
  "influenza-antiviral-pharmacology-006": {
    "id": "influenza-antiviral-pharmacology-006",
    "lesson": "influenza-biology-triage",
    "question": "A hospitalized patient has suspected influenza and a negative rapid antigen test. What best fits current guidance?",
    "choices": [
      "Start empiric antiviral treatment promptly and arrange molecular influenza testing",
      "Withhold treatment because a negative rapid antigen result excludes influenza",
      "Wait for molecular confirmation before giving any influenza antiviral",
      "Stop infection-control measures because the antigen result is negative"
    ],
    "answer": 0,
    "rationale": "CDC recommends molecular testing in hospitalized patients and prompt empiric treatment. A negative rapid antigen result does not exclude influenza or remove infection-control needs.",
    "reviewHref": "#influenza-biology-triage"
  },
  "influenza-antiviral-pharmacology-007": {
    "id": "influenza-antiviral-pharmacology-007",
    "lesson": "influenza-biology-triage",
    "question": "Which host assessment best identifies a patient needing prompt influenza treatment consideration?",
    "choices": [
      "Review pregnancy or recent postpartum status, age, chronic disease, immune status and illness severity",
      "Classify every adult younger than 65 as low risk regardless of other history",
      "Exclude every vaccinated person from high-risk assessment",
      "Use symptom duration alone and omit hospitalization or worsening illness"
    ],
    "answer": 0,
    "rationale": "Host risk includes more than older age. Pregnancy, the early postpartum period, immunocompromise and relevant chronic disease matter, alongside severity and care setting.",
    "reviewHref": "#influenza-biology-triage"
  },
  "influenza-antiviral-pharmacology-008": {
    "id": "influenza-antiviral-pharmacology-008",
    "lesson": "influenza-biology-triage",
    "question": "Which action is the clearest avoidable delay in a high-risk patient with suspected influenza?",
    "choices": [
      "Waiting for laboratory confirmation before starting indicated empiric treatment",
      "Collecting a respiratory specimen while treatment is started",
      "Reviewing renal function when choosing an oseltamivir regimen",
      "Reassessing hypoxemia and a competing diagnosis while treating influenza"
    ],
    "answer": 0,
    "rationale": "CDC advises treatment as soon as possible without waiting for laboratory confirmation in priority groups. Testing, dosing review and parallel complication evaluation remain appropriate.",
    "reviewHref": "#influenza-biology-triage"
  },
  "influenza-antiviral-pharmacology-009": {
    "id": "influenza-antiviral-pharmacology-009",
    "lesson": "influenza-biology-triage",
    "question": "Which statement correctly describes bacterial coinfection during influenza?",
    "choices": [
      "Bacterial infection can coexist with influenza or appear later despite antiviral treatment",
      "A positive influenza result excludes simultaneous bacterial pneumonia",
      "An influenza antiviral directly treats the usual bacterial causes of pneumonia",
      "Finishing an antiviral course guarantees that secondary bacterial infection cannot occur"
    ],
    "answer": 0,
    "rationale": "The book directs attention to secondary bacterial infection. IDSA confirms coinfection may be present initially or emerge later; influenza antiviral exposure does not treat bacterial disease or exclude it.",
    "reviewHref": "#influenza-biology-triage"
  },
  "influenza-antiviral-pharmacology-010": {
    "id": "influenza-antiviral-pharmacology-010",
    "lesson": "influenza-biology-triage",
    "question": "A patient treated for influenza improves, then develops recurrent fever, dyspnea and worsening oxygenation. What is the best next action?",
    "choices": [
      "Urgently reassess and investigate bacterial coinfection and other complications, adding antibacterial treatment when indicated",
      "Assume expected recovery and defer evaluation until the antiviral course ends",
      "Automatically double the antiviral dose instead of investigating the decline",
      "Exclude bacterial disease because the patient has already received an influenza antiviral"
    ],
    "answer": 0,
    "rationale": "Deterioration after initial improvement warrants prompt investigation and empiric treatment of bacterial coinfection under IDSA guidance, while other causes and influenza treatment are assessed.",
    "reviewHref": "#influenza-biology-triage"
  },
  "influenza-antiviral-pharmacology-011": {
    "id": "influenza-antiviral-pharmacology-011",
    "lesson": "influenza-biology-triage",
    "question": "Which assessment best addresses possible bacterial pneumonia complicating influenza?",
    "choices": [
      "Assess illness trajectory, respiratory and circulatory severity, chest examination, and indicated imaging or microbiology",
      "Use sputum color alone as definitive proof of a bacterial cause",
      "Use a positive influenza test as proof that chest imaging is never relevant",
      "Assess antiviral adherence alone and omit new oxygenation or blood-pressure changes"
    ],
    "answer": 0,
    "rationale": "Coinfection evaluation follows the severity and course of illness. Neither sputum appearance nor viral detection settles the diagnosis; examination and appropriate investigations inform management.",
    "reviewHref": "#influenza-biology-triage"
  },
  "influenza-antiviral-pharmacology-012": {
    "id": "influenza-antiviral-pharmacology-012",
    "lesson": "influenza-biology-triage",
    "question": "Which assumption most risks missing bacterial coinfection in influenza?",
    "choices": [
      "Assuming antiviral treatment excludes bacterial pneumonia",
      "Investigating bacterial infection when severe pneumonia and hypotension are present",
      "Reassessing fever that returns after initial improvement",
      "Considering another cause when illness deteriorates during antiviral treatment"
    ],
    "answer": 0,
    "rationale": "Antivirals act against influenza, not bacterial pathogens. IDSA recommends investigation and treatment in severe initial disease or deterioration after improvement, with broader cause evaluation as needed.",
    "reviewHref": "#influenza-biology-triage"
  },
  "influenza-antiviral-pharmacology-013": {
    "id": "influenza-antiviral-pharmacology-013",
    "lesson": "influenza-biology-triage",
    "question": "Which statement correctly describes the relationship between influenza antivirals and vaccination?",
    "choices": [
      "Treatment and prophylaxis complement seasonal vaccination rather than replacing it",
      "A completed treatment course supplies permanent influenza immunity",
      "Prophylaxis removes the need for future seasonal vaccination",
      "Influenza vaccination guarantees that later respiratory illness cannot be influenza"
    ],
    "answer": 0,
    "rationale": "The book identifies seasonal vaccination as the principal prevention measure. Drug exposure is limited in duration, and vaccination does not completely exclude infection.",
    "reviewHref": "#influenza-biology-triage"
  },
  "influenza-antiviral-pharmacology-014": {
    "id": "influenza-antiviral-pharmacology-014",
    "lesson": "influenza-biology-triage",
    "question": "What prevention plan best fits an adult being treated for influenza?",
    "choices": [
      "Retain seasonal vaccination planning and appropriate respiratory infection-control measures",
      "Replace future seasonal vaccination with the current antiviral course",
      "Stop respiratory precautions as soon as the first antiviral dose is taken",
      "Assume vaccine history makes assessment of current influenza unnecessary"
    ],
    "answer": 0,
    "rationale": "Antivirals do not replace vaccination or appropriate infection-control measures. The book describes transmission around symptom onset, and vaccination history does not rule out current influenza.",
    "reviewHref": "#influenza-biology-triage"
  },
  "influenza-antiviral-pharmacology-015": {
    "id": "influenza-antiviral-pharmacology-015",
    "lesson": "influenza-biology-triage",
    "question": "Which history best informs influenza vaccination and antiviral counseling?",
    "choices": [
      "Review vaccine product and timing, antiviral exposure, immune status and relevant contraindications",
      "Record only that a vaccine was given and assume all product timing rules are identical",
      "Treat live intranasal vaccine and inactivated vaccine as having identical antiviral interactions",
      "Omit vaccine history because the patient has started an antiviral"
    ],
    "answer": 0,
    "rationale": "The live intranasal product has antiviral timing concerns. Product-specific history is therefore needed; treatment does not remove the need to preserve seasonal prevention.",
    "reviewHref": "#influenza-biology-triage"
  },
  "influenza-antiviral-pharmacology-016": {
    "id": "influenza-antiviral-pharmacology-016",
    "lesson": "influenza-biology-triage",
    "question": "Which prevention claim should be corrected after an influenza antiviral course?",
    "choices": [
      "The completed course is a permanent substitute for seasonal influenza vaccination",
      "Seasonal vaccination remains part of prevention when there is no contraindication",
      "A vaccinated patient can still develop influenza",
      "Antiviral treatment is an adjunct to influenza vaccination"
    ],
    "answer": 0,
    "rationale": "Antiviral exposure does not confer permanent seasonal protection. Vaccination remains central, while incomplete protection means symptomatic vaccinated patients still require appropriate assessment.",
    "reviewHref": "#influenza-biology-triage"
  },
  "influenza-antiviral-pharmacology-177": {
    "id": "influenza-antiviral-pharmacology-177",
    "lesson": "influenza-biology-triage",
    "question": "A pregnant patient at high risk presents with suspected influenza. Testing will take hours. What is the priority?",
    "choices": [
      "Start empiric oseltamivir as soon as possible",
      "Wait for confirmation before treating",
      "Use baloxavir monotherapy",
      "Use an adamantane"
    ],
    "answer": 0,
    "rationale": "Pregnancy is a high-risk state; the book and CDC prefer oseltamivir and CDC recommends prompt empiric treatment without waiting for confirmation. CDC does not recommend baloxavir in pregnancy, and adamantanes are not recommended for influenza because of resistance.",
    "reviewHref": "#influenza-biology-triage"
  }
})) {
  Object.assign(influenzaAntiviralPharmacologyQuestionBank.find((question) => question.id === id), updates);
}


// Whole influenza life-cycle questions reviewed with stable IDs and keyed indices.
for (const [id, updates] of Object.entries({
  "influenza-antiviral-pharmacology-017": {
    "id": "influenza-antiviral-pharmacology-017",
    "lesson": "influenza-life-cycle-targets",
    "question": "Which action of influenza neuraminidase supports spread of progeny virions?",
    "choices": [
      "Cleaving terminal sialic acid to facilitate release from infected cells",
      "Cleaving capped host RNA to prime viral messenger RNA transcription",
      "Conducting protons through the M2 channel during uncoating",
      "Directly synthesizing the viral RNA genome"
    ],
    "answer": 0,
    "rationale": "Neuraminidase cleaves terminal sialic acid and facilitates progeny release. Host cap cleavage is a PA endonuclease function, proton conductance is an M2 function, and RNA synthesis is a polymerase function.",
    "reviewHref": "#influenza-life-cycle-targets"
  },
  "influenza-antiviral-pharmacology-018": {
    "id": "influenza-antiviral-pharmacology-018",
    "lesson": "influenza-life-cycle-targets",
    "question": "Which set of drugs shares inhibition of influenza neuraminidase?",
    "choices": [
      "Oseltamivir carboxylate, zanamivir and peramivir",
      "Baloxavir, amantadine and rimantadine",
      "Oseltamivir carboxylate, baloxavir and amantadine",
      "Zanamivir, baloxavir and rimantadine"
    ],
    "answer": 0,
    "rationale": "The three named neuraminidase inhibitors share the release target. Baloxavir inhibits PA endonuclease; amantadine and rimantadine target M2, so each other set mixes different mechanisms.",
    "reviewHref": "#influenza-life-cycle-targets"
  },
  "influenza-antiviral-pharmacology-019": {
    "id": "influenza-antiviral-pharmacology-019",
    "lesson": "influenza-life-cycle-targets",
    "question": "Which description best distinguishes oseltamivir phosphate from its active inhibitor?",
    "choices": [
      "The administered prodrug is hydrolyzed to oseltamivir carboxylate, which inhibits neuraminidase",
      "Oseltamivir carboxylate is converted into baloxavir before acting",
      "Oseltamivir phosphate acts by directly blocking host cap binding",
      "The active metabolite is an M2 proton-channel inhibitor"
    ],
    "answer": 0,
    "rationale": "Tamiflu labeling identifies ester hydrolysis to active oseltamivir carboxylate. It is a neuraminidase inhibitor, not baloxavir, a host cap-binding inhibitor or an M2 inhibitor.",
    "reviewHref": "#influenza-life-cycle-targets"
  },
  "influenza-antiviral-pharmacology-020": {
    "id": "influenza-antiviral-pharmacology-020",
    "lesson": "influenza-life-cycle-targets",
    "question": "Which proposed mechanism of neuraminidase inhibitors should be corrected?",
    "choices": [
      "Their principal effect is blocking M2 proton conductance during uncoating",
      "They inhibit an influenza enzyme involved in progeny release",
      "Oseltamivir carboxylate inhibits influenza neuraminidase",
      "Zanamivir and peramivir share a neuraminidase target"
    ],
    "answer": 0,
    "rationale": "M2 proton conductance is the historical adamantane target. The other statements correctly describe neuraminidase inhibition and the release mechanism.",
    "reviewHref": "#influenza-life-cycle-targets"
  },
  "influenza-antiviral-pharmacology-021": {
    "id": "influenza-antiviral-pharmacology-021",
    "lesson": "influenza-life-cycle-targets",
    "question": "What role does PA endonuclease have in influenza cap snatching?",
    "choices": [
      "Cleaving host capped RNA to produce primers for viral messenger RNA transcription",
      "Removing sialic acid from the infected-cell surface to release progeny",
      "Conducting protons into the virion during uncoating",
      "Producing a permanent protective antibody response"
    ],
    "answer": 0,
    "rationale": "PA supplies the endonuclease activity used to obtain capped RNA primers. Sialic-acid cleavage belongs to neuraminidase and proton conductance to M2; none of these enzyme functions generates permanent immunity.",
    "reviewHref": "#influenza-life-cycle-targets"
  },
  "influenza-antiviral-pharmacology-022": {
    "id": "influenza-antiviral-pharmacology-022",
    "lesson": "influenza-life-cycle-targets",
    "question": "Which pairing correctly identifies the active inhibitor produced from baloxavir marboxil?",
    "choices": [
      "Active baloxavir and PA endonuclease",
      "Oseltamivir carboxylate and PA endonuclease",
      "Active baloxavir and neuraminidase",
      "Rimantadine and neuraminidase"
    ],
    "answer": 0,
    "rationale": "Baloxavir marboxil is hydrolyzed to baloxavir, the PA endonuclease inhibitor. Oseltamivir carboxylate inhibits neuraminidase; rimantadine is a separate adamantane targeting M2.",
    "reviewHref": "#influenza-life-cycle-targets"
  },
  "influenza-antiviral-pharmacology-023": {
    "id": "influenza-antiviral-pharmacology-023",
    "lesson": "influenza-life-cycle-targets",
    "question": "How should the life-cycle position of baloxavir be interpreted?",
    "choices": [
      "It interrupts viral transcription, a different step from neuraminidase-mediated progeny release",
      "It releases viral RNA by stimulating the M2 channel",
      "It substitutes for neuraminidase by cleaving terminal sialic acid",
      "It directly stops bacterial cell-wall synthesis"
    ],
    "answer": 0,
    "rationale": "Baloxavir inhibits PA-dependent viral gene transcription. It does not stimulate M2, perform neuraminidase cleavage or treat bacterial pathogens through cell-wall inhibition.",
    "reviewHref": "#influenza-life-cycle-targets"
  },
  "influenza-antiviral-pharmacology-024": {
    "id": "influenza-antiviral-pharmacology-024",
    "lesson": "influenza-life-cycle-targets",
    "question": "Which classification of baloxavir should be corrected?",
    "choices": [
      "A neuraminidase inhibitor with the same direct target as zanamivir",
      "A cap-dependent endonuclease inhibitor",
      "An inhibitor of the influenza PA protein endonuclease",
      "An antiviral whose active form interferes with viral transcription"
    ],
    "answer": 0,
    "rationale": "Baloxavir targets PA endonuclease rather than neuraminidase. The other classifications describe its correct mechanism.",
    "reviewHref": "#influenza-life-cycle-targets"
  },
  "influenza-antiviral-pharmacology-025": {
    "id": "influenza-antiviral-pharmacology-025",
    "lesson": "influenza-life-cycle-targets",
    "question": "Which statement correctly identifies the historical adamantane target?",
    "choices": [
      "Amantadine and rimantadine inhibit the influenza A M2 proton channel",
      "Amantadine and rimantadine inhibit influenza PA endonuclease",
      "Amantadine is converted to oseltamivir carboxylate",
      "Rimantadine cleaves terminal sialic acid to inhibit influenza"
    ],
    "answer": 0,
    "rationale": "Adamantanes inhibit M2 proton conductance, a process involved in influenza A uncoating. PA and neuraminidase are different targets, and amantadine is not an oseltamivir prodrug.",
    "reviewHref": "#influenza-life-cycle-targets"
  },
  "influenza-antiviral-pharmacology-026": {
    "id": "influenza-antiviral-pharmacology-026",
    "lesson": "influenza-life-cycle-targets",
    "question": "Why should amantadine and rimantadine be excluded from routine seasonal influenza treatment and prophylaxis under current CDC guidance?",
    "choices": [
      "High resistance among circulating influenza A viruses makes them nonrecommended choices",
      "They have become the preferred PA endonuclease inhibitors",
      "They are preferred for influenza B because they lack M2 activity",
      "They supply lifelong immunity after one treatment course"
    ],
    "answer": 0,
    "rationale": "CDC does not recommend adamantanes because of resistance. Their historical mechanism is influenza A M2 inhibition, not PA inhibition or a preferred influenza B mechanism; treatment does not confer lifelong immunity.",
    "reviewHref": "#influenza-life-cycle-targets"
  },
  "influenza-antiviral-pharmacology-027": {
    "id": "influenza-antiviral-pharmacology-027",
    "lesson": "influenza-life-cycle-targets",
    "question": "A medication list includes amantadine for Parkinson disease. What should be concluded about seasonal influenza protection?",
    "choices": [
      "The prescription does not establish recommended influenza prophylaxis; assess exposure, illness and current guidance",
      "The prescription guarantees protection against influenza A and B",
      "The prescription removes the need to assess symptoms after exposure",
      "The prescription proves the circulating virus is susceptible to adamantanes"
    ],
    "answer": 0,
    "rationale": "The book distinguishes ongoing Parkinson use from the obsolete influenza role. A prescription cannot establish protection, rule out illness or demonstrate viral susceptibility.",
    "reviewHref": "#influenza-life-cycle-targets"
  },
  "influenza-antiviral-pharmacology-028": {
    "id": "influenza-antiviral-pharmacology-028",
    "lesson": "influenza-life-cycle-targets",
    "question": "Which use of an older influenza drug list is most likely to cause an error?",
    "choices": [
      "Choosing an adamantane for seasonal influenza because an old list gives it an influenza indication",
      "Checking current CDC recommendations before selecting a drug",
      "Distinguishing an M2 inhibitor from a neuraminidase inhibitor",
      "Recognizing that amantadine has a separate Parkinson disease use"
    ],
    "answer": 0,
    "rationale": "Historical indication does not overcome current resistance-based recommendations. Checking guidance, distinguishing targets and recognizing other indications are appropriate actions.",
    "reviewHref": "#influenza-life-cycle-targets"
  },
  "influenza-antiviral-pharmacology-029": {
    "id": "influenza-antiviral-pharmacology-029",
    "lesson": "influenza-life-cycle-targets",
    "question": "Which interpretation of an influenza resistance-associated substitution is defensible?",
    "choices": [
      "Interpret the specific viral protein, substitution, drug and susceptibility evidence together",
      "Any PA substitution proves resistance to every neuraminidase inhibitor",
      "Every neuraminidase substitution guarantees resistance to baloxavir",
      "One drug-class resistance result proves resistance to all influenza antivirals"
    ],
    "answer": 0,
    "rationale": "Susceptibility changes are target-, substitution- and drug-dependent. PA and neuraminidase results cannot be universally extended to the other target or every drug; a virus can also carry separate resistance changes.",
    "reviewHref": "#influenza-life-cycle-targets"
  },
  "influenza-antiviral-pharmacology-030": {
    "id": "influenza-antiviral-pharmacology-030",
    "lesson": "influenza-life-cycle-targets",
    "question": "A hospitalized patient deteriorates during oseltamivir treatment. What is the best next approach?",
    "choices": [
      "Reassess illness, drug exposure, host factors and complications while considering resistance when evidence supports it",
      "Diagnose resistance from deterioration alone and omit investigation of complications",
      "Assume an adequate prescription proves adequate absorption and delivery",
      "Exclude bacterial disease because an influenza antiviral has been given"
    ],
    "answer": 0,
    "rationale": "CDC and IDSA support broad reassessment. Deterioration alone does not establish resistance, the prescription does not prove actual exposure, and an antiviral does not exclude bacterial coinfection.",
    "reviewHref": "#influenza-life-cycle-targets"
  },
  "influenza-antiviral-pharmacology-031": {
    "id": "influenza-antiviral-pharmacology-031",
    "lesson": "influenza-life-cycle-targets",
    "question": "Which scenario supports consideration of neuraminidase-inhibitor resistance testing under IDSA guidance?",
    "choices": [
      "An immunocompromised patient remains ill with documented persistent influenza replication during treatment",
      "A fully recovered patient has no evidence of ongoing influenza infection",
      "A patient has a single uncomplicated symptom without evidence of persistent infection",
      "A person has no influenza exposure, symptoms or positive test"
    ],
    "answer": 0,
    "rationale": "Persistent replication with ongoing illness in an immunocompromised host is one IDSA testing context. The other scenarios do not establish a resistance-testing indication; urgent clinical reassessment should not wait for a fixed calendar.",
    "reviewHref": "#influenza-life-cycle-targets"
  },
  "influenza-antiviral-pharmacology-032": {
    "id": "influenza-antiviral-pharmacology-032",
    "lesson": "influenza-life-cycle-targets",
    "question": "Which inference about persistent influenza illness should be corrected?",
    "choices": [
      "Persistent symptoms prove resistance regardless of diagnosis, exposure or host factors",
      "Persistent replication can occur in an immunocompromised patient without resistance",
      "Drug delivery and absorption matter when interpreting nonresponse",
      "Lung injury and bacterial complications can explain deterioration"
    ],
    "answer": 0,
    "rationale": "Symptoms alone do not prove resistance. IDSA and CDC retain nonresistance explanations, including persistent replication in immunocompromised hosts, inadequate exposure and complications.",
    "reviewHref": "#influenza-life-cycle-targets"
  },
  "influenza-antiviral-pharmacology-178": {
    "id": "influenza-antiviral-pharmacology-178",
    "lesson": "influenza-life-cycle-targets",
    "question": "Which viral process is directly inhibited by baloxavir?",
    "choices": [
      "PA endonuclease activity required for cap snatching",
      "Neuraminidase-mediated virion release",
      "M2 proton conductance only",
      "Host ribosomal translation"
    ],
    "answer": 0,
    "rationale": "Baloxavir inhibits PA endonuclease required for cap snatching and viral transcription. Neuraminidase-mediated release is the target of oseltamivir carboxylate, zanamivir and peramivir; M2 proton conductance is the historical adamantane target. Baloxavir does not directly inhibit host ribosomal translation.",
    "reviewHref": "#influenza-life-cycle-targets"
  }
})) {
  Object.assign(influenzaAntiviralPharmacologyQuestionBank.find((question) => question.id === id), updates);
}


// Whole influenza selection questions reviewed with stable IDs and keyed indices.
for (const [id, updates] of Object.entries({
  "influenza-antiviral-pharmacology-033": {
    "id": "influenza-antiviral-pharmacology-033",
    "lesson": "influenza-selection-timing",
    "question": "A patient hospitalized with suspected influenza presents four days after symptoms began. What should the timing decision be?",
    "choices": [
      "Start recommended antiviral treatment promptly rather than applying a universal 48-hour cutoff",
      "Withhold all influenza antivirals because two days have passed",
      "Delay treatment until symptoms have lasted seven days",
      "Treat only if the patient was not vaccinated"
    ],
    "answer": 0,
    "rationale": "Hospitalized influenza is a treatment-priority condition even after two days. There is no seven-day waiting requirement, and vaccination history does not remove the treatment indication.",
    "reviewHref": "#influenza-selection-timing"
  },
  "influenza-antiviral-pharmacology-034": {
    "id": "influenza-antiviral-pharmacology-034",
    "lesson": "influenza-selection-timing",
    "question": "An otherwise healthy outpatient without higher-risk features has uncomplicated influenza symptoms for one day. How does CDC frame antiviral treatment?",
    "choices": [
      "It may be considered on clinical judgment when it can start within two days",
      "It is mandatory for every uncomplicated illness regardless of clinical judgment",
      "It should be delayed until the third day",
      "It requires hospitalization before it can be considered"
    ],
    "answer": 0,
    "rationale": "CDC allows early treatment consideration in non-high-risk outpatients based on clinical judgment. It does not require universal treatment, delayed initiation or admission.",
    "reviewHref": "#influenza-selection-timing"
  },
  "influenza-antiviral-pharmacology-035": {
    "id": "influenza-antiviral-pharmacology-035",
    "lesson": "influenza-selection-timing",
    "question": "A high-risk outpatient has suspected influenza and treatment is indicated. Which action best reflects CDC treatment priority?",
    "choices": [
      "Begin treatment promptly without waiting for influenza laboratory confirmation",
      "Wait for laboratory confirmation before any treatment in every case",
      "Wait until the patient becomes hospitalized",
      "Withhold treatment solely because symptoms exceed 48 hours"
    ],
    "answer": 0,
    "rationale": "Priority patients should be treated promptly without awaiting test confirmation. Hospitalization is not required, and elapsed time beyond two days alone does not exclude treatment of high-risk patients.",
    "reviewHref": "#influenza-selection-timing"
  },
  "influenza-antiviral-pharmacology-036": {
    "id": "influenza-antiviral-pharmacology-036",
    "lesson": "influenza-selection-timing",
    "question": "Which interpretation of the early influenza treatment window should be corrected?",
    "choices": [
      "The greatest benefit within two days means no patient can benefit from later treatment",
      "Early treatment generally provides the greatest benefit",
      "Hospitalized patients should still receive recommended treatment after two days",
      "Timing must be interpreted with severity and risk of complications"
    ],
    "answer": 0,
    "rationale": "An early-benefit window is not a universal exclusion rule. Early treatment is preferable, but hospital, severity and high-risk context support later treatment.",
    "reviewHref": "#influenza-selection-timing"
  },
  "influenza-antiviral-pharmacology-037": {
    "id": "influenza-antiviral-pharmacology-037",
    "lesson": "influenza-selection-timing",
    "question": "Which regimen is CDC\u2019s routine preferred antiviral approach for a hospitalized patient with suspected influenza?",
    "choices": [
      "Oral or enterically administered oseltamivir started promptly",
      "Single-dose baloxavir chosen solely for convenience",
      "Inhaled zanamivir regardless of airway disease or device ability",
      "IV peramivir for every admission because intravenous delivery proves superior benefit"
    ],
    "answer": 0,
    "rationale": "CDC recommends oral or enteric oseltamivir for hospitalized influenza. Baloxavir, zanamivir and peramivir are not routinely recommended there because clinical-benefit evidence is insufficient; convenience or an IV route does not establish superiority.",
    "reviewHref": "#influenza-selection-timing"
  },
  "influenza-antiviral-pharmacology-038": {
    "id": "influenza-antiviral-pharmacology-038",
    "lesson": "influenza-selection-timing",
    "question": "Why are baloxavir, inhaled zanamivir and IV peramivir not routinely recommended for hospitalized influenza?",
    "choices": [
      "Evidence of clinical benefit in hospitalized patients is insufficient",
      "All three are FDA contraindicated in every hospitalized patient",
      "All three have no antiviral activity against influenza",
      "Every hospitalized patient is unable to absorb oseltamivir"
    ],
    "answer": 0,
    "rationale": "CDC cites insufficient hospitalized clinical-benefit evidence, not universal FDA contraindications or lack of antiviral activity. Hospitalization alone does not establish failed enteral absorption.",
    "reviewHref": "#influenza-selection-timing"
  },
  "influenza-antiviral-pharmacology-039": {
    "id": "influenza-antiviral-pharmacology-039",
    "lesson": "influenza-selection-timing",
    "question": "A hospitalized patient has gastric stasis and cannot absorb enteric oseltamivir. Which statement fits CDC guidance?",
    "choices": [
      "IV peramivir may be considered as a qualified alternative after clinical and renal assessment",
      "Peramivir is proven superior for all hospitalized influenza",
      "Use a single outpatient peramivir dose without assessing the hospitalized illness",
      "Replace oseltamivir with baloxavir solely because both have oral suspension options"
    ],
    "answer": 0,
    "rationale": "CDC allows consideration of IV peramivir when oral or enteric oseltamivir cannot be tolerated or absorbed. Inpatient benefit is not established generally, an outpatient regimen cannot be automatically transferred, and a baloxavir suspension does not solve a setting-evidence problem.",
    "reviewHref": "#influenza-selection-timing"
  },
  "influenza-antiviral-pharmacology-040": {
    "id": "influenza-antiviral-pharmacology-040",
    "lesson": "influenza-selection-timing",
    "question": "A hospitalized patient receives medications through a functioning feeding tube and has no identified malabsorption. Which inference should be corrected?",
    "choices": [
      "A feeding tube alone proves oseltamivir cannot be absorbed and requires routine peramivir",
      "Enteric oseltamivir remains CDC\u2019s routine hospitalized option",
      "Delivery and absorption should be assessed individually",
      "An IV route alone does not prove better clinical benefit"
    ],
    "answer": 0,
    "rationale": "A functioning tube does not by itself establish failed enteral delivery or absorption. Individual assessment and the routine enteric oseltamivir recommendation remain appropriate; intravenous delivery alone is not superiority evidence.",
    "reviewHref": "#influenza-selection-timing"
  },
  "influenza-antiviral-pharmacology-041": {
    "id": "influenza-antiviral-pharmacology-041",
    "lesson": "influenza-selection-timing",
    "question": "Which age statement correctly describes the FDA treatment indication for inhaled zanamivir?",
    "choices": [
      "Acute uncomplicated influenza treatment is indicated from seven years of age; the prophylaxis age differs",
      "Its treatment indication begins at five years because that is its prophylaxis age",
      "Its treatment indication begins at six months because peramivir is approved then",
      "There is no need to check age for an inhaled antiviral"
    ],
    "answer": 0,
    "rationale": "Relenza treatment begins at seven years; prophylaxis begins at five years. Peramivir\u2019s six-month treatment age cannot be applied to zanamivir, and age must be verified.",
    "reviewHref": "#influenza-selection-timing"
  },
  "influenza-antiviral-pharmacology-042": {
    "id": "influenza-antiviral-pharmacology-042",
    "lesson": "influenza-selection-timing",
    "question": "An outpatient with asthma is being considered for influenza therapy. What is the appropriate interpretation of inhaled zanamivir?",
    "choices": [
      "It is not recommended with underlying airway disease because of serious bronchospasm risk",
      "It is preferred because all inhaled medicines improve asthma",
      "Its dry powder should be mixed into a nebulizer to eliminate risk",
      "Only milk-protein allergy matters; airway disease can be ignored"
    ],
    "answer": 0,
    "rationale": "The book, CDC and Relenza labeling identify bronchospasm risk with underlying airway disease. Inhalation does not imply asthma benefit; the supplied powder must not be nebulized. Milk-protein allergy is a separate contraindication and does not replace airway assessment.",
    "reviewHref": "#influenza-selection-timing"
  },
  "influenza-antiviral-pharmacology-043": {
    "id": "influenza-antiviral-pharmacology-043",
    "lesson": "influenza-selection-timing",
    "question": "Which statement correctly separates oseltamivir\u2019s FDA treatment age from CDC/AAP recommendations?",
    "choices": [
      "FDA labeling begins at two weeks, while CDC/AAP also recommend treatment in younger infants",
      "FDA labeling begins at one year because that is the prophylaxis age",
      "CDC prohibits treatment in all infants younger than two weeks",
      "The baloxavir five-year age can be applied to oseltamivir"
    ],
    "answer": 0,
    "rationale": "Tamiflu labeling permits treatment from two weeks, with younger-infant treatment recommended by CDC/AAP outside that labeled age. Prophylaxis and other-drug ages cannot be substituted.",
    "reviewHref": "#influenza-selection-timing"
  },
  "influenza-antiviral-pharmacology-044": {
    "id": "influenza-antiviral-pharmacology-044",
    "lesson": "influenza-selection-timing",
    "question": "An eligible outpatient is considering baloxavir while taking an oral calcium supplement. What should be addressed?",
    "choices": [
      "Avoid concomitant use with polyvalent-cation-containing supplements and verify the product-specific dose and presentation",
      "Take the supplement with baloxavir to improve absorption",
      "Use a dairy beverage to avoid the cation interaction",
      "Assume one-dose convenience removes the need to review interactions"
    ],
    "answer": 0,
    "rationale": "Xofluza labeling advises avoiding concomitant polyvalent cations because exposure can be reduced. Dairy and calcium-fortified beverages are also included; a single dose still requires interaction and formulation review.",
    "reviewHref": "#influenza-selection-timing"
  },
  "influenza-antiviral-pharmacology-045": {
    "id": "influenza-antiviral-pharmacology-045",
    "lesson": "influenza-selection-timing",
    "question": "Which immune-host statement accurately reflects CDC\u2019s baloxavir monotherapy recommendation?",
    "choices": [
      "It is not recommended in severely immunosuppressed patients because prolonged replication raises resistance concern",
      "It is prohibited for every patient with any immune condition regardless of severity",
      "It is preferred in severe immunosuppression solely because it is one dose",
      "Its uncomplicated high-risk indication proves efficacy for every immunosuppressed hospitalized patient"
    ],
    "answer": 0,
    "rationale": "CDC specifies severely immunosuppressed patients for this monotherapy recommendation. Do not broaden it to every immune condition or infer universal severe-host inpatient benefit from convenience or an outpatient high-risk indication.",
    "reviewHref": "#influenza-selection-timing"
  },
  "influenza-antiviral-pharmacology-046": {
    "id": "influenza-antiviral-pharmacology-046",
    "lesson": "influenza-selection-timing",
    "question": "Why does CDC not recommend baloxavir during pregnancy or breastfeeding?",
    "choices": [
      "Relevant human efficacy and safety data are unavailable; this recommendation is distinct from the label\u2019s hypersensitivity contraindication",
      "The FDA label lists pregnancy as an absolute hypersensitivity contraindication",
      "Animal data alone establish proven human safety in both settings",
      "Being oral makes baloxavir the preferred treatment in pregnancy"
    ],
    "answer": 0,
    "rationale": "CDC cites unavailable relevant human data. The labeled contraindication concerns hypersensitivity, and animal results do not establish human pregnancy or lactation safety. Oral oseltamivir is preferred during pregnancy.",
    "reviewHref": "#influenza-selection-timing"
  },
  "influenza-antiviral-pharmacology-047": {
    "id": "influenza-antiviral-pharmacology-047",
    "lesson": "influenza-selection-timing",
    "question": "Which patient fits the current Xofluza labeled treatment population, subject to the remaining safety and dosing checks?",
    "choices": [
      "An otherwise healthy six-year-old with acute uncomplicated influenza beginning yesterday",
      "A four-year-old selected solely because suspension is available",
      "A hospitalized adult with complicated influenza selected solely for a one-dose schedule",
      "An adult with uncomplicated influenza beginning five days ago selected under the within-48-hour label"
    ],
    "answer": 0,
    "rationale": "The label permits acute uncomplicated treatment from five years within 48 hours, including otherwise healthy patients. A suspension does not lower the age, and convenience does not extend the labeled setting or symptom window.",
    "reviewHref": "#influenza-selection-timing"
  },
  "influenza-antiviral-pharmacology-048": {
    "id": "influenza-antiviral-pharmacology-048",
    "lesson": "influenza-selection-timing",
    "question": "A patient cannot swallow tablets. Which statement about a baloxavir suspension is correct?",
    "choices": [
      "An appropriate suspension presentation may address delivery, but age, illness setting and interactions still must be checked",
      "Suspension availability establishes routine efficacy in hospitalized influenza",
      "Suspension eliminates interactions with calcium products",
      "Every suspension presentation has identical preparation instructions"
    ],
    "answer": 0,
    "rationale": "The label provides suspension presentations for swallowing difficulty and enteral administration. Delivery options do not establish hospital efficacy or remove cation interactions, and instructions differ by presentation.",
    "reviewHref": "#influenza-selection-timing"
  },
  "influenza-antiviral-pharmacology-179": {
    "id": "influenza-antiviral-pharmacology-179",
    "lesson": "influenza-selection-timing",
    "question": "A hospitalized patient has had symptoms for four days. What routine antiviral does CDC recommend?",
    "choices": [
      "Oral or enterically administered oseltamivir",
      "No treatment because 48 hours passed",
      "Single-dose baloxavir",
      "Inhaled zanamivir regardless of airway disease"
    ],
    "answer": 0,
    "rationale": "CDC recommends oral or enterically administered oseltamivir promptly for hospitalized influenza, including four days after symptom onset. The 48-hour window does not exclude treatment here. Baloxavir and inhaled zanamivir are not routine hospitalized choices, and zanamivir also requires assessment of airway disease and device suitability.",
    "reviewHref": "#influenza-selection-timing"
  }
})) {
  Object.assign(influenzaAntiviralPharmacologyQuestionBank.find((question) => question.id === id), updates);
}
