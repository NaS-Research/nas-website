const c = (name, lesson, principle, action, assessment, hazard, why) => ({ name, lesson, principle, action, assessment, hazard, why });

const concepts = [
  c("incomplete classic triad", "emergency-syndrome", "Absence of fever, neck stiffness, or altered mental status does not safely exclude bacterial meningitis", "Use the total syndrome, host, tempo, and objective findings to decide urgent management", "Assess headache, fever, stiffness, cognition, rash, seizure, focal signs, age, immune state, and prior antibiotics", "Rejecting meningitis because one classic feature is absent", "Presentation varies across age, immune state, disease stage, and prior treatment."),
  c("meningeal inflammatory injury", "emergency-syndrome", "Bacterial products and host inflammation can produce edema, vasculopathy, impaired cerebrospinal fluid flow, and reduced cerebral perfusion", "Treat the pathogen while preventing hypoxemia, hypotension, seizure, and secondary neurologic injury", "Trend mental status, pupils, focal findings, seizure, perfusion, oxygenation, and systemic severity", "Treating the infection while ignoring evolving cerebral physiology", "Secondary injury can continue even after an active antibiotic is started."),
  c("meningococcemia", "emergency-syndrome", "Meningococcal bloodstream disease may present with rapidly progressive rash and shock with or without prominent meningismus", "Start sepsis stabilization and effective empiric therapy immediately", "Inspect the entire skin, perfusion, lactate, coagulation, limb pain, mental status, and hemodynamic trajectory", "Waiting for neck stiffness before treating a purpuric shock syndrome", "Meningococcemia can progress rapidly and can be fatal before a complete meningeal syndrome appears."),
  c("unstable presentation", "emergency-syndrome", "Airway compromise, shock, uncontrolled seizure, or rapidly spreading purpura takes priority over lumbar puncture", "Stabilize, obtain blood cultures if feasible, and administer empiric therapy without procedural delay", "Assess airway protection, ventilation, perfusion, seizure control, bleeding risk, and rash progression", "Sending an unstable patient to lumbar puncture before stabilization", "The procedure cannot justify delaying life-saving resuscitation and antibiotics."),

  c("blood cultures before antibiotics", "diagnostic-sequence", "Blood cultures collected promptly before therapy can identify the organism when cerebrospinal fluid is delayed or sterilized", "Collect adequate blood culture sets immediately without allowing collection difficulty to postpone therapy", "Document collection time, number and volume of cultures, prior antibiotics, and antibiotic start time", "Delaying antibiotics indefinitely to obtain perfect cultures", "Diagnostic yield matters, but it remains subordinate to time-critical treatment."),
  c("lumbar puncture timing", "diagnostic-sequence", "Lumbar puncture is the diagnostic mainstay and should occur promptly before antibiotics when safe and immediately feasible", "Perform lumbar puncture early, but begin antibiotics if safety evaluation, imaging, or logistics create meaningful delay", "Review airway, respiratory status, shock, seizure, focal findings, consciousness, pupils, bleeding risk, and purpura", "Treating lumbar puncture completion as a mandatory gate before antibiotics", "Current guidance explicitly protects antibiotic timing when lumbar puncture is deferred."),
  c("selective neuroimaging", "diagnostic-sequence", "Computed tomography before lumbar puncture is selective rather than routine", "Image first only when defined clinical findings raise concern for mass effect or unsafe puncture, while continuing empiric treatment", "Assess focal deficit, pupils, severe consciousness impairment, seizure context, mass lesion history, and other local criteria", "Ordering routine imaging for every suspected case and waiting to treat", "Routine imaging can create harmful delay without improving safety for low-risk patients."),
  c("diagnosis after pretreatment", "diagnostic-sequence", "Antibiotics can reduce culture yield without immediately normalizing every cerebrospinal fluid or molecular marker", "Interpret cell profile, glucose ratio, protein, blood cultures, molecular testing, and clinical course together", "Document exact antimicrobial exposure and sampling times before interpreting negative cultures", "Calling all post-antibiotic cerebrospinal fluid sterile and nondiagnostic", "Pretreatment changes test sensitivity but does not erase the syndrome or all diagnostic evidence."),

  c("paired cerebrospinal fluid glucose", "csf-reasoning", "Cerebrospinal fluid glucose is interpreted against a paired blood glucose because systemic glucose changes the absolute value", "Obtain blood glucose near lumbar puncture and interpret the relationship rather than one isolated number", "Review timing, systemic glucose, cerebrospinal fluid glucose, protein, and cell profile", "Using one universal cerebrospinal fluid glucose cutoff without serum context", "A ratio preserves meaning across different systemic glucose concentrations."),
  c("neutrophilic pleocytosis", "csf-reasoning", "Neutrophilic pleocytosis supports bacterial inflammation but is not perfectly specific or universally present", "Use the differential as one component of a pattern and retain suspicion when host or timing can alter it", "Assess total cells, differential, age, immune state, prior antibiotics, glucose, protein, and organism tests", "Excluding bacterial disease because lymphocytes predominate", "Early, partially treated, organism-specific, or immunocompromised presentations can vary."),
  c("culture and susceptibility", "csf-reasoning", "Culture provides organism identification and susceptibility data that molecular detection alone may not supply", "Preserve culture collection while using validated molecular assays to accelerate identification", "Review Gram stain, culture, susceptibility, polymerase chain reaction, blood cultures, and antibiotic timing", "Narrowing to penicillin from organism name alone without susceptibility", "Resistance can change definitive therapy even when the species is known."),
  c("discordant cerebrospinal fluid", "csf-reasoning", "A discordant or initially near-normal cerebrospinal fluid profile does not automatically exclude early or host-modified bacterial meningitis", "Continue urgent therapy when clinical suspicion remains high and seek expert review for repeat or expanded evaluation", "Reassess timing, immune state, prior therapy, traumatic tap, molecular tests, imaging, and clinical evolution", "Closing the diagnosis from one unexpected cerebrospinal fluid value", "Bayesian interpretation requires the pretest syndrome and all available evidence."),

  c("core community pathogens", "host-pathogens", "Pneumococcus, meningococcus, and Haemophilus influenzae remain core community-acquired considerations shaped by age and vaccination", "Start broad enough for the plausible core pathogens, then refine with organism and susceptibility data", "Review age, vaccination, otologic or sinus source, outbreak, immune state, and local epidemiology", "Assuming vaccination makes invasive bacterial disease impossible", "Vaccination changes probability but does not eliminate every serotype or organism."),
  c("Listeria risk factors", "host-pathogens", "Current WHO guidance identifies age over 60 years, pregnancy, and immunocompromise as major Listeria risk factors", "Add intravenous ampicillin or amoxicillin to the empiric anchor when one of these factors is present", "Assess exact age, pregnancy, malignancy, transplant, immunosuppressants, HIV, and other immune deficits", "Using the older age over 50 cutoff without noting updated guidance", "The module reconciles RxPrep with the current WHO threshold and risk framework."),
  c("neonatal pathway", "host-pathogens", "Neonatal meningitis has distinct organisms, dosing, bilirubin, calcium, and developmental safety issues", "Use a neonatal infection protocol and specialist team rather than scaling an adult regimen", "Review gestational and postnatal age, birth history, group B streptococcal and gram-negative risk, bilirubin, calcium infusions, and renal function", "Treating a neonate as a small adult", "Pathogens, pharmacokinetics, and ceftriaxone hazards differ materially in neonates."),
  c("healthcare-associated meningitis", "host-pathogens", "Neurosurgery, penetrating trauma, shunts, drains, and hardware change the organism set and empiric regimen", "Route the patient to the current healthcare-associated ventriculitis and meningitis pathway", "Assess surgery, device type, manipulation, wound, leak, hospital flora, prior antibiotics, and culture access", "Applying the community-acquired regimen without device or resistant gram-negative review", "Hardware and healthcare exposure create a different microbiologic problem."),

  c("third-generation cephalosporin anchor", "empiric-therapy", "WHO strongly recommends intravenous ceftriaxone or cefotaxime as the empiric anchor for children and adults with suspected acute bacterial meningitis", "Give an indication-specific meningitis regimen promptly", "Verify age, weight, allergy, renal and hepatic context, line access, dose, interval, and administration time", "Using a lower dose memorized from a non-central nervous system infection", "Central nervous system infection requires the correct high-exposure regimen."),
  c("ampicillin addition", "empiric-therapy", "Ampicillin or amoxicillin adds Listeria coverage that ceftriaxone or cefotaxime does not reliably provide", "Add it when current Listeria risk factors are present and remove it when evidence safely excludes the need", "Review host risk, allergy phenotype, renal function, organism testing, and susceptibility", "Replacing rather than supplementing the cephalosporin empiric anchor", "Listeria coverage answers an additional organism gap rather than the entire empiric spectrum."),
  c("vancomycin addition", "empiric-therapy", "WHO conditionally supports vancomycin where resistant pneumococcus makes penicillin or third-generation cephalosporin activity uncertain", "Follow current local resistance and institutional meningitis policy, then monitor exposure and toxicity", "Review local pneumococcal susceptibility, prior resistant isolate, recent antibiotics, kidney function, body size, and nephrotoxins", "Adding vancomycin without defining the resistance problem or monitoring plan", "Vancomycin has a specific resistance role and measurable toxicity."),
  c("severe beta-lactam allergy", "empiric-therapy", "A severe immediate or severe delayed beta-lactam reaction requires an expert alternative pathway rather than a generic substitution", "Clarify the phenotype and obtain urgent infectious diseases or allergy guidance without delaying effective therapy", "Identify culprit, timing, symptoms, treatment, organ injury, later tolerated drugs, pregnancy, age, and local susceptibility", "Treating nausea, anaphylaxis, and severe cutaneous reactions as one allergy category", "Alternative selection depends on both immunologic risk and required central nervous system coverage."),

  c("dexamethasone timing", "dexamethasone", "Dexamethasone works best when given with or before the first antibiotic dose", "Administer it immediately under protocol while ensuring antibiotics are not delayed", "Record exact dexamethasone and antibiotic times, age, suspected organism, glucose, and gastrointestinal risk", "Holding antibiotics until dexamethasone arrives", "The adjunct is timing-sensitive but cannot outrank antimicrobial treatment."),
  c("delayed dexamethasone", "dexamethasone", "NICE supports giving delayed dexamethasone as soon as possible within 12 hours, with specialist judgment after a longer delay", "Calculate elapsed time from the first antibiotic and route the decision accordingly", "Verify the first antibiotic timestamp, age, organism evidence, clinical course, and contraindications", "Using an arbitrary delay threshold without the actual administration time", "The decision depends on timing and expected benefit, not the current clock alone."),
  c("organism-guided steroid continuation", "dexamethasone", "NICE recommends continuing dexamethasone for pneumococcus or Haemophilus influenzae type b and stopping it for other identified organisms", "Reassess the steroid plan as soon as reliable organism data arrive", "Review culture, molecular result, susceptibility, age, response, adverse effects, and specialist advice", "Leaving dexamethasone on autopilot after meningococcus is identified", "Adjunctive benefit is organism-dependent and continued exposure has costs."),
  c("dexamethasone safety", "dexamethasone", "Short-course dexamethasone still requires glucose, gastrointestinal, mental-status, and infection-course monitoring", "Track adverse effects and document that meningitis use follows an off-label evidence-based protocol", "Assess diabetes, gastrointestinal bleeding risk, concomitant antithrombotics, agitation, infection trajectory, and enteral status", "Calling a short course risk-free", "Even brief corticosteroid exposure can complicate a critically ill patient's care."),

  c("susceptibility-guided meningococcal narrowing", "definitive-therapy", "Penicillin G or ampicillin is used for meningococcal disease only after susceptibility is confirmed", "Continue ceftriaxone or cefotaxime until the isolate supports narrowing", "Review minimum inhibitory concentrations, beta-lactamase, laboratory method, clinical response, and public health data", "Narrowing from species identification alone", "Recent resistant and beta-lactamase-producing meningococci make susceptibility essential."),
  c("organism-specific duration", "definitive-therapy", "Typical treatment duration differs by organism and must be adjusted for complications and response", "Set an expected duration at identification and revise it when source, resistance, abscess, or recovery changes", "Review organism, susceptibility, start date, clinical stability, neurologic findings, source control, and repeat cultures", "Applying one fixed duration to pneumococcus, meningococcus, Haemophilus, and Listeria", "Their biology and outcome evidence support different typical courses."),
  c("treatment failure", "definitive-therapy", "Worsening or nonresponse can reflect resistance, wrong diagnosis, poor exposure, abscess, parameningeal source, endocarditis, hardware, or secondary injury", "Reopen the differential and treatment system rather than reflexively extending the same regimen", "Assess adherence, dose, infusion, organ function, levels, susceptibility, imaging, source, complications, and alternative diagnoses", "Calling persistent fever a simple need for more days without reassessment", "Failure is a diagnostic signal, not merely a duration decision."),
  c("meningococcal carriage eradication", "definitive-therapy", "Ceftriaxone clears meningococcal nasopharyngeal carriage, while other treatment regimens may require an eradication dose before discharge", "Review the definitive antibiotic and provide rifampin, ciprofloxacin, or ceftriaxone when CDC criteria are met", "Confirm treatment agents, susceptibility, age, pregnancy, interactions, local resistance, and discharge timing", "Assuming clinical cure always clears carriage", "Preventing onward transmission requires a separate carriage assessment."),

  c("meningitis dosing", "dosing-safety", "Meningitis regimens are indication-specific high-dose intravenous regimens", "Verify the current protocol and product information rather than carrying over a routine infection dose", "Review drug, indication, age, weight, interval, renal and hepatic function, route, and infusion", "Using a pneumonia or urinary infection regimen for central nervous system disease", "Adequate systemic and cerebrospinal fluid exposure depends on the correct regimen."),
  c("vancomycin exposure monitoring", "dosing-safety", "Vancomycin dosing must account for body size, renal function, critical illness, changing volume, nephrotoxins, and institutional exposure monitoring", "Create a sampling and reassessment plan at initiation and after physiologic change", "Track creatinine, urine output, dialysis, weight, fluid balance, doses, infusion, serum data, and concurrent nephrotoxins", "Copying an admission dose forward while kidney function changes", "Both underexposure and nephrotoxicity can emerge rapidly in critical illness."),
  c("ceftriaxone neonatal contraindications", "dosing-safety", "Current labeling contraindicates ceftriaxone in premature or hyperbilirubinemic neonates and in neonates requiring calcium-containing intravenous solutions", "Use the neonatal protocol and a suitable alternative such as protocol-directed cefotaxime where available", "Review gestational age, postnatal age, bilirubin, intravenous calcium and nutrition, renal function, and product availability", "Giving ceftriaxone through a different line and assuming that removes neonatal calcium risk", "The neonatal calcium contraindication applies even when separate lines are used."),
  c("dynamic dose reassessment", "dosing-safety", "Renal function, extracorporeal support, fluid balance, and inflammation can change antimicrobial exposure during the course", "Recalculate after major physiologic transitions and document the new plan", "Trend kidney and liver function, weight, fluid balance, dialysis settings, response, and serum concentrations when used", "Treating dosing as a one-time admission task", "Critical illness is dynamic, so exposure and toxicity risk are dynamic."),

  c("sepsis support", "support-complications", "Antibiotics must be paired with airway, oxygenation, perfusion, and shock management", "Apply current sepsis care while avoiding hypotension and hypoxemia that worsen cerebral injury", "Monitor airway, oxygenation, blood pressure, lactate, capillary refill, urine output, vasopressors, and fluid response", "Focusing on lumbar puncture while shock remains untreated", "Systemic and cerebral perfusion are immediate determinants of outcome."),
  c("neurologic deterioration", "support-complications", "New anisocoria, focal deficit, declining consciousness, or recurrent seizure requires urgent reassessment for secondary neurologic injury", "Escalate to critical care and neurologic evaluation with targeted imaging and intervention", "Trend Glasgow Coma Scale, pupils, focal signs, seizure, blood pressure, ventilation, sodium, and imaging", "Giving routine osmotic therapy without identifying the cause", "Deterioration can reflect edema, infarction, hydrocephalus, seizure, abscess, or herniation risk."),
  c("fluid strategy", "support-complications", "Routine fluid restriction below maintenance is not recommended for confirmed bacterial meningitis", "Diagnose shock, dehydration, SIADH, cerebral salt wasting, or renal dysfunction and treat the actual disorder", "Assess volume status, sodium trend, urine output, urine studies when needed, perfusion, kidney function, and intake", "Restricting every patient solely because meningitis can cause hyponatremia", "Different sodium and volume disorders require opposing treatments."),
  c("hearing and neurologic follow-up", "support-complications", "Hearing loss and neurologic or cognitive disability can persist after microbiologic cure", "Arrange hearing assessment and individualized neurologic, cognitive, communication, mobility, school, work, and rehabilitation follow-up", "Assess hearing, cranial nerves, cognition, behavior, speech, mobility, daily function, family needs, and access", "Ending follow-up when antibiotics stop", "Survival does not define complete recovery from meningitis."),

  c("droplet precautions", "public-health-followup", "Suspected or confirmed meningococcal disease requires droplet precautions until 24 hours of effective therapy", "Initiate precautions promptly and document when the effective-treatment clock permits discontinuation", "Verify suspected organism, therapy activity, first effective dose time, respiratory procedures, and exposed personnel", "Stopping isolation immediately after the first dose", "Transmission risk declines after effective therapy but not instantaneously."),
  c("close contact definition", "public-health-followup", "Meningococcal prophylaxis is for household, childcare, and direct oral or respiratory secretion exposure rather than casual contact", "Build the contact list with public health and explain why each person does or does not qualify", "Assess sleeping household, intimate contact, shared secretions, childcare, airway procedures, dates, and symptom onset", "Offering antibiotics to everyone who entered the room", "Exposure intensity and secretion contact define risk more accurately than proximity alone."),
  c("prophylaxis timing", "public-health-followup", "Meningococcal prophylaxis should begin as soon as possible, ideally within 24 hours of index identification", "Coordinate same-day public health outreach and treatment for eligible contacts", "Record index onset, identification time, last exposure, contact eligibility, agent, dose, and completion", "Waiting for contact symptoms or throat cultures before prophylaxis", "Prophylaxis prevents secondary disease and loses value when delayed."),
  c("prophylaxis agent selection", "public-health-followup", "Rifampin, ceftriaxone, and ciprofloxacin are accepted options, but pregnancy, age, interactions, adherence, and local resistance determine choice", "Use current CDC and public health guidance, with ceftriaxone favored in pregnancy and ciprofloxacin avoided where resistance makes it unreliable", "Review age, pregnancy, contraception, anticoagulants, antiseizure drugs, allergy, resistance alerts, and injection feasibility", "Selecting ciprofloxacin without checking recent local resistance", "A convenient single dose is not effective when the organism is resistant."),
  c("recurrence risk", "public-health-followup", "Recurrent meningococcal disease can signal complement deficiency, complement inhibitor exposure, asplenia, HIV, or another immune risk", "Refer for immune and anatomic evaluation and update vaccination and preventive planning", "Review prior episodes, vaccines, complement inhibitors, spleen status, HIV, cerebrospinal fluid leak, and family history", "Treating recurrence as random without investigating predisposition", "Identifying the underlying risk can prevent another invasive infection."),
];

const dimensions = [
  ["principle", "Which principle best characterizes"],
  ["action", "Which clinical action best applies to"],
  ["assessment", "Which assessment is most appropriate for"],
  ["hazard", "Which reasoning hazard is most important to prevent with"],
];

const distractors = (index, field) => [9, 17, 29].map((offset) => concepts[(index + offset) % concepts.length][field]);
const generated = concepts.flatMap((item, index) => dimensions.map(([field, stem], dimension) => ({
  id: `acute-bacterial-meningitis-${String(index * 4 + dimension + 1).padStart(3, "0")}`,
  lesson: item.lesson,
  question: `${stem} ${item.name}?`,
  choices: [item[field], ...distractors(index, field)],
  answer: 0,
  rationale: item.why,
  reviewHref: `#${item.lesson}`,
})));

const cases = [
  { lesson: "diagnostic-sequence", question: "A patient with suspected bacterial meningitis needs computed tomography before lumbar puncture, but imaging will be delayed. Blood cultures are already collected. What should happen next?", choices: ["Begin empiric intravenous antibiotics now", "Wait for imaging and lumbar puncture before treatment", "Discharge with oral antibiotics", "Repeat the neurologic examination in six hours"], answer: 0, rationale: "Imaging and lumbar puncture must not postpone time-critical empiric therapy." },
  { lesson: "host-pathogens", question: "A 64-year-old with suspected community-acquired bacterial meningitis has no known immune disorder. Which addition addresses the current WHO age-based organism gap?", choices: ["Intravenous ampicillin or amoxicillin for Listeria", "Oral azithromycin for atypical bacteria", "Metronidazole for every anaerobe", "No additional organism coverage"], answer: 0, rationale: "WHO identifies age over 60 years as a Listeria risk factor." },
  { lesson: "dexamethasone", question: "Dexamethasone becomes available 20 minutes after the first antibiotic dose. Which response best matches current guidance?", choices: ["Give it as soon as possible under the protocol", "Withhold all further antibiotics", "Wait 12 hours before deciding", "Continue it for every organism without reassessment"], answer: 0, rationale: "A delay under 12 hours should be corrected as soon as possible, and antibiotics must not be delayed." },
  { lesson: "definitive-therapy", question: "Cerebrospinal fluid polymerase chain reaction identifies Neisseria meningitidis, but susceptibility is pending. Which definitive step is safest now?", choices: ["Continue ceftriaxone or cefotaxime until susceptibility supports narrowing", "Switch immediately to oral penicillin", "Stop therapy because the organism is known", "Add indefinite vancomycin regardless of results"], answer: 0, rationale: "Current CDC guidance requires confirmed susceptibility before switching meningococcus to penicillin or ampicillin." },
  { lesson: "dosing-safety", question: "A 12-day-old premature neonate receives calcium-containing parenteral nutrition. Which ceftriaxone statement is correct?", choices: ["Ceftriaxone is contraindicated in this setting", "Separate intravenous lines eliminate the contraindication", "Only oral calcium matters", "The combination is preferred for meningitis"], answer: 0, rationale: "Current labeling contraindicates ceftriaxone in premature neonates and in neonates requiring calcium-containing intravenous solutions." },
  { lesson: "support-complications", question: "A patient with bacterial meningitis develops hyponatremia and hypotension with poor urine output. What is the best initial reasoning?", choices: ["Assess volume, perfusion, renal function, and the cause before selecting a fluid strategy", "Restrict every fluid immediately", "Assume SIADH without examination", "Ignore sodium until discharge"], answer: 0, rationale: "Shock, dehydration, SIADH, cerebral salt wasting, and renal dysfunction require different treatments." },
  { lesson: "public-health-followup", question: "A respiratory therapist performed unprotected intubation on a patient later confirmed to have meningococcal disease. What should occur?", choices: ["Prompt occupational and public health evaluation for chemoprophylaxis", "No action because the exposure occurred in a hospital", "Wait for symptoms", "Use a throat culture to decide"], answer: 0, rationale: "Direct airway and respiratory secretion exposure is a qualifying healthcare exposure." },
  { lesson: "public-health-followup", question: "A pregnant household contact needs meningococcal prophylaxis. Which option is preferred in current CDC guidance?", choices: ["Single-dose intramuscular ceftriaxone", "Rifampin without interaction review", "Ciprofloxacin despite any resistance pattern", "No prophylaxis because of pregnancy"], answer: 0, rationale: "CDC identifies ceftriaxone as the preferred prophylaxis option in pregnancy." },
].map((item, index) => ({ ...item, id: `acute-bacterial-meningitis-${String(generated.length + index + 1).padStart(3, "0")}`, reviewHref: `#${item.lesson}` }));

const bookAdministrationRepairs = {
  "acute-bacterial-meningitis-081": {
    "choices": [
      "Dexamethasone works best when given with or before the first antibiotic dose",
      "Dexamethasone should replace the first antibiotic dose",
      "Dexamethasone should begin only after the antibiotic course is completed",
      "Dexamethasone timing is unrelated to the first antibiotic dose"
    ],
    "rationale": "The meningitis section places dexamethasone before or with the first antibiotic dose to reduce selected pneumococcal neurologic complications. It is an adjunct to antibiotics, not a replacement. Starting it after the completed course or ignoring the first-dose timing does not follow that sequence."
  },
  "acute-bacterial-meningitis-082": {
    "choices": [
      "Administer it immediately under protocol while ensuring antibiotics are not delayed",
      "Wait for final culture results before starting any treatment",
      "Give dexamethasone alone instead of empiric antibiotics",
      "Withhold antibiotics whenever lumbar puncture is delayed"
    ],
    "rationale": "The book describes urgent treatment, dexamethasone before or with the first antibiotic dose, and antibiotic initiation when lumbar puncture is delayed. These instructions support coordinating the adjunct without postponing urgent antimicrobial therapy. Steroid monotherapy and waiting for a procedure or final cultures fail to treat the emergency."
  },
  "acute-bacterial-meningitis-084": {
    "choices": [
      "Holding antibiotics until dexamethasone arrives",
      "Coordinating dexamethasone with the first antibiotic dose",
      "Initiating antibiotics when lumbar puncture is delayed",
      "Reassessing dexamethasone when the pathogen is identified"
    ],
    "rationale": "The book treats bacterial meningitis as an emergency and places dexamethasone before or with the first antibiotic dose. The timing goal should be coordinated without turning the adjunct into a reason to postpone urgent antibiotics. The other choices describe compatible treatment or reassessment steps, not the timing hazard."
  },
  "acute-bacterial-meningitis-096": {
    "choices": [
      "Calling a short course risk-free",
      "Reviewing mood and sleep during systemic corticosteroid treatment",
      "Monitoring blood glucose during higher-dose systemic corticosteroid treatment",
      "Recognizing indigestion as a possible short-term steroid effect"
    ],
    "rationale": "The systemic corticosteroid table lists short-term effects including mood changes, insomnia, indigestion, fluid retention, and higher-dose increases in blood pressure and glucose. A brief course therefore does not establish absence of risk. The other choices recognize or monitor described effects; they do not assume the course is harmless."
  }
};

const supportComplicationsRepairs = {
  "acute-bacterial-meningitis-129": {
    "question": "A patient with bacterial meningitis has hypoxemia and shock. Why is an effective antibiotic alone insufficient?",
    "choices": [
      "Antibiotics must be paired with airway, oxygenation, perfusion, and shock management",
      "Treating the pathogen reliably reverses shock before supportive treatment is needed",
      "Respiratory and circulatory support should be withheld until the organism is identified",
      "Supportive treatment is indicated only when cerebrospinal fluid remains culture-positive"
    ],
    "answer": 0,
    "rationale": "WHO identifies hemodynamic, respiratory and metabolic support as components of urgent meningitis care. An antibiotic targets infection but does not immediately correct hypoxemia or shock. Neither organism identification nor persistent culture positivity is a prerequisite for treating unstable physiology."
  },
  "acute-bacterial-meningitis-130": {
    "question": "An adult receiving empiric treatment for bacterial meningitis remains hypotensive and hypoxemic. Which supportive-care approach is appropriate?",
    "choices": [
      "Apply current sepsis care while avoiding hypotension and hypoxemia that worsen cerebral injury",
      "Give repeated fluid boluses until lactate normalizes, irrespective of fluid responsiveness",
      "Defer oxygen and circulatory support until lumbar puncture is completed",
      "Restrict fluids below maintenance solely because meningitis may cause cerebral edema"
    ],
    "answer": 0,
    "rationale": "Support infection treatment with prompt respiratory and hemodynamic care. The 2026 adult sepsis recommendations call for repeated assessment and individualized fluids, using dynamic measures and lactate trends in context; lactate normalization is not a mandate for continued fluid loading. A diagnostic procedure or the meningitis label must not defer stabilization."
  },
  "acute-bacterial-meningitis-131": {
    "question": "An adult with meningitis-associated septic shock is being reassessed after initial resuscitation. Which monitoring plan best evaluates ongoing perfusion and respiratory support?",
    "choices": [
      "Monitor airway, oxygenation, blood pressure, lactate, capillary refill, urine output, vasopressors, and fluid response",
      "Use a single serum lactate value as the sole measure of fluid responsiveness",
      "Use the antibiotic start time as the sole indicator that shock has resolved",
      "Use fever resolution as the sole criterion for stopping circulatory monitoring"
    ],
    "answer": 0,
    "rationale": "Repeated physiologic assessment is required. The 2026 adult sepsis recommendations support oxygenation and blood-pressure monitoring, dynamic assessment of fluid response, serial lactate interpreted in context, and capillary refill as an adjunct. Urine output is also interpreted with renal function and the fluid balance. A single lactate value, an administered antibiotic, or a lower temperature does not establish restored perfusion."
  },
  "acute-bacterial-meningitis-132": {
    "question": "An adult with suspected bacterial meningitis is in shock. Which action creates a preventable supportive-care delay?",
    "choices": [
      "Focusing on lumbar puncture while shock remains untreated",
      "Providing respiratory support for hypoxemia while antibiotics are arranged",
      "Reassessing perfusion and response during circulatory support",
      "Correcting a clinically important metabolic disturbance during stabilization"
    ],
    "answer": 0,
    "rationale": "Shock requires urgent treatment alongside empiric antibiotics. Prioritizing lumbar puncture while shock remains untreated delays life-saving support. Respiratory care, serial perfusion assessment, and correction of metabolic disturbances are appropriate parallel actions under WHO general-management guidance."
  },
  "acute-bacterial-meningitis-133": {
    "question": "During bacterial meningitis treatment, a patient develops a new pupil abnormality and rapidly declining consciousness. Which principle should guide the response?",
    "choices": [
      "New anisocoria, focal deficit, declining consciousness, or recurrent seizure requires urgent reassessment for secondary neurologic injury",
      "These changes can be assumed to be expected recovery after antibiotics begin",
      "A known pathogen excludes a new intracranial complication",
      "Neurologic assessment can wait until a follow-up visit if fever is improving"
    ],
    "answer": 0,
    "rationale": "Rapid consciousness or pupil change may indicate increased intracranial pressure and impending herniation. WHO treats this as a medical emergency requiring prompt assessment and intensive care management. Antibiotic administration, organism identification, or an improving fever does not make new deterioration safe to defer."
  },
  "acute-bacterial-meningitis-134": {
    "question": "A patient with bacterial meningitis has rapidly worsening consciousness and loss of pupillary reaction. Which action is appropriate?",
    "choices": [
      "Escalate immediately for critical-care and neurologic management, with emergency support and targeted imaging as appropriate",
      "Postpone emergency support until the complete cause has been established by imaging",
      "Give glycerol routinely as the definitive response to any neurologic decline",
      "Continue ward observation because antimicrobial therapy has already started"
    ],
    "answer": 0,
    "rationale": "Urgent critical-care and neurologic evaluation must accompany emergency stabilization. WHO allows selected non-glycerol osmotic agents as a temporary measure for increased intracranial pressure and impending herniation while more durable management is arranged. Imaging should support diagnosis without becoming a gate before emergency care; glycerol is not a routine adjunct or a definitive solution."
  },
  "acute-bacterial-meningitis-135": {
    "question": "A patient receiving bacterial meningitis treatment is becoming less responsive. Which reassessment best addresses evolving neurologic injury?",
    "choices": [
      "Trend Glasgow Coma Scale, pupils, focal signs, seizure, blood pressure, ventilation, sodium, and imaging",
      "Record temperature alone and assume defervescence excludes intracranial deterioration",
      "Record antimicrobial doses alone and defer pupil and consciousness checks",
      "Review a single prior examination and treat the neurologic state as unchanged"
    ],
    "answer": 0,
    "rationale": "Consciousness, pupils, focal findings and seizures require repeated assessment, alongside respiratory and circulatory status and relevant metabolic abnormalities. A change may need targeted imaging and urgent intervention. Temperature, dose records, and an earlier examination cannot substitute for reassessing the current neurologic state."
  },
  "acute-bacterial-meningitis-136": {
    "question": "A patient with bacterial meningitis is awake, hemodynamically stable, and has no signs of increased intracranial pressure. Which proposed plan is a reasoning error?",
    "choices": [
      "Giving routine osmotic therapy without identifying the cause",
      "Monitoring consciousness and pupils for a new neurologic change",
      "Reassessing sodium and volume abnormalities when they arise",
      "Arranging hearing and neurologic follow-up before discharge"
    ],
    "answer": 0,
    "rationale": "A meningitis diagnosis alone does not justify routine osmotic treatment. WHO advises against routine glycerol and distinguishes routine adjunct use from selected non-glycerol temporizing therapy for impending herniation. Monitoring neurology, investigating fluid disorders, and planning recovery are appropriate; an emergency herniation situation would require immediate reassessment and treatment rather than this stable-patient reasoning."
  },
  "acute-bacterial-meningitis-137": {
    "question": "A patient with confirmed bacterial meningitis is stable and has no specific indication for restriction. Which maintenance-fluid principle is supported?",
    "choices": [
      "Routine fluid restriction below maintenance is not recommended for confirmed bacterial meningitis",
      "The meningitis diagnosis requires half-maintenance fluids in every patient",
      "Maintenance hydration should be stopped until the cerebrospinal fluid is sterile",
      "All maintenance fluids should be replaced with an osmotic agent"
    ],
    "answer": 0,
    "rationale": "WHO recommends against routine fluid restriction in acute bacterial meningitis, a conditional recommendation based on very-low-certainty evidence. Oral or enteric maintenance is preferred when feasible; isotonic intravenous maintenance may be used when needed. Blanket restriction, withholding hydration until culture clearance, and substituting osmotic therapy do not follow that principle."
  },
  "acute-bacterial-meningitis-138": {
    "question": "An adult with bacterial meningitis develops hyponatremia. Which approach should guide the fluid decision?",
    "choices": [
      "Diagnose shock, dehydration, SIADH, cerebral salt wasting, or renal dysfunction and treat the actual disorder",
      "Diagnose SIADH from the low serum sodium alone and restrict immediately",
      "Diagnose cerebral salt wasting from the meningitis label alone and give unmonitored fluid",
      "Apply the same restriction regimen whether the patient is shocked or euvolemic"
    ],
    "answer": 0,
    "rationale": "Fluid decisions depend on the disorder and the current physiology. WHO permits considering moderate restriction for SIADH only without shock or hypovolemia. The dated joint adult hyponatraemia guideline describes SIAD as a diagnosis of exclusion and warns that cerebral salt wasting can be overdiagnosed. Assess the cause and treat urgent instability concurrently; neither serum sodium nor the meningitis label establishes a universal fluid regimen."
  },
  "acute-bacterial-meningitis-139": {
    "question": "An adult with meningitis develops hypotonic hyponatremia. Which assessment best supports choosing a cause-specific fluid plan?",
    "choices": [
      "Assess volume status, sodium trend, urine output, urine studies when needed, perfusion, kidney function, and intake",
      "Use serum sodium alone to distinguish SIADH from volume depletion",
      "Use urine sodium alone to diagnose SIADH despite kidney dysfunction or diuretic use",
      "Use one bedside volume examination to establish the cause without laboratory context"
    ],
    "answer": 0,
    "rationale": "Assess perfusion and fluid balance while using appropriate paired blood and urine studies. The joint adult hyponatraemia guideline prioritizes urine osmolality and urine sodium in the diagnostic work-up, but cautions that bedside volume assessment can misclassify patients and kidney dysfunction or diuretics can confound urine findings. No isolated finding establishes SIADH; severe symptoms or shock require immediate treatment alongside the investigation."
  },
  "acute-bacterial-meningitis-140": {
    "question": "Several patients with meningitis have different volume states and sodium results. Which policy would create a fluid-management error?",
    "choices": [
      "Restricting every patient solely because meningitis can cause hyponatremia",
      "Consider moderate restriction for suggestive SIADH only when shock and hypovolemia are absent",
      "Use isotonic intravenous maintenance when oral or enteric maintenance cannot be given",
      "Monitor volume and electrolytes and reassess when the clinical state changes"
    ],
    "answer": 0,
    "rationale": "WHO advises against routine restriction based on meningitis alone. Suggestive SIADH without shock or hypovolemia may justify moderate restriction with clinical judgement, but dehydrated or shocked patients need a different approach. Oral or enteric maintenance is preferred when possible, and isotonic intravenous maintenance and serial volume/electrolyte review are appropriate when indicated."
  },
  "acute-bacterial-meningitis-141": {
    "question": "A patient completes treatment for bacterial meningitis and the infection has resolved. Which recovery principle remains important?",
    "choices": [
      "Hearing loss and neurologic or cognitive disability can persist after microbiologic cure",
      "Microbiologic cure excludes subsequent cognitive or hearing problems",
      "Finishing antibiotics establishes that rehabilitation is unnecessary",
      "A normal discharge hearing screen guarantees that later hearing loss cannot occur"
    ],
    "answer": 0,
    "rationale": "WHO describes lasting neurologic and cognitive impairment, hearing loss, and after-effects that may be subtle or emerge later. Antibiotic completion does not establish full functional recovery. WHO also calls for a second formal audiological screen after a normal predischarge result, without specifying a universal repeat interval in that recommendation."
  },
  "acute-bacterial-meningitis-142": {
    "question": "A meningitis survivor is preparing for discharge. Which plan best addresses recovery needs?",
    "choices": [
      "Arrange hearing assessment and individualized neurologic, cognitive, communication, mobility, school, work, and rehabilitation follow-up",
      "Wait for the patient to report hearing loss before offering formal audiological screening",
      "Schedule the first sequelae assessment at six months regardless of current deficits",
      "Delay rehabilitation until all possible long-term problems have become permanent"
    ],
    "answer": 0,
    "rationale": "WHO calls for sequelae review before discharge and at least once within four weeks, with subsequent care individualized to persistent problems. Formal hearing screening should occur before discharge, or within four weeks if it cannot occur beforehand. Rehabilitation should begin as soon as possible when sequelae are identified; waiting for a complaint, a fixed late visit, or permanent disability creates avoidable delay."
  },
  "acute-bacterial-meningitis-143": {
    "question": "At follow-up after meningitis, which assessment best evaluates functional recovery?",
    "choices": [
      "Assess hearing, cranial nerves, cognition, behavior, speech, mobility, daily function, family needs, and access",
      "Limit the review to fever and antibiotic completion because infection clearance proves recovery",
      "Assess only gross motor strength and omit hearing, cognition and communication",
      "Use the absence of a spontaneous complaint as proof that sequelae are absent"
    ],
    "answer": 0,
    "rationale": "WHO highlights hearing, focal neurologic and neuropsychological impairments, subtle after-effects, daily function, and coordinated family support. A review should examine relevant domains and access to ongoing care. Fever resolution, gross motor strength alone, and absence of an unsolicited complaint do not exclude hearing, cognitive, communication or participation difficulties."
  },
  "acute-bacterial-meningitis-144": {
    "question": "A patient has completed antibiotics for meningitis but still has hearing and mobility difficulties. Which plan is a recovery-care error?",
    "choices": [
      "Ending follow-up when antibiotics stop",
      "Refer promptly for rehabilitation directed at the identified deficits",
      "Coordinate follow-up and support with the patient and caregivers",
      "Continue individualized review when sequelae persist beyond the first month"
    ],
    "answer": 0,
    "rationale": "Antibiotic completion is not an endpoint for sequelae care. WHO recommends assessment before discharge and at follow-up, rehabilitation as soon as possible when deficits are identified, and ongoing individualized visits for persistent sequelae. Prompt referrals, coordination with caregivers, and continued review are appropriate."
  },
  "acute-bacterial-meningitis-170": {
    "question": "An adult with bacterial meningitis develops hyponatremia, hypotension, and poor urine output. Which initial approach is appropriate?",
    "choices": [
      "Treat impaired perfusion urgently while assessing volume, renal function, and the cause to guide the fluid plan",
      "Restrict fluids immediately because any meningitis-associated hyponatremia establishes SIADH",
      "Diagnose cerebral salt wasting from the low sodium alone and use an unmonitored fluid plan",
      "Complete all sodium studies before treating the hypotension or impaired perfusion"
    ],
    "answer": 0,
    "rationale": "Urgently address hypotension and impaired perfusion while assessing volume, renal function, fluid balance, and the cause of hyponatremia. WHO does not support routine restriction, and its SIADH restriction remark applies only without shock or hypovolemia. The joint adult hyponatraemia guideline warns that SIAD is a diagnosis of exclusion and cerebral salt wasting can be overdiagnosed. Investigation must accompany emergency stabilization rather than postpone it."
  }
};

export const acuteBacterialMeningitisQuestionBank = [...generated, ...cases].map(question => ({ ...question, ...(bookAdministrationRepairs[question.id] || {}), ...(supportComplicationsRepairs[question.id] || {}) }));

if (acuteBacterialMeningitisQuestionBank.length < 100) {
  throw new Error(`Acute bacterial meningitis question bank must contain at least 100 questions, found ${acuteBacterialMeningitisQuestionBank.length}.`);
}
