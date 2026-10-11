const c = (name, lesson, principle, action, assessment, hazard, why) => ({ name, lesson, principle, action, assessment, hazard, why });

const concepts = [
  c("pleuromutilin scaffold", "structure-mechanism", "Lefamulin is a semisynthetic systemic pleuromutilin built around the mutilin core", "Connect scaffold and induced-fit ribosomal binding before predicting activity", "Assess class, salt form, route, ribosomal target, spectrum, and resistance", "Calling lefamulin a macrolide because both act at the 50S subunit", "Shared ribosomal territory does not make chemically distinct classes interchangeable"),
  c("peptidyl transferase center", "structure-mechanism", "Lefamulin binds A and P sites of the peptidyl transferase center in domain V of 23S rRNA", "Trace binding through incorrect tRNA positioning and protein-synthesis inhibition", "Assess target, subunit, RNA domain, tRNA placement, and downstream translation", "Placing the target at the 30S decoding center", "The induced pocket closes around the mutilin core in the 50S subunit"),
  c("induced fit", "structure-mechanism", "Hydrogen bonds, hydrophobic interactions, and van der Waals forces close the ribosomal pocket around lefamulin", "Use induced fit to explain high target engagement and a distinct resistance profile", "Assess target conformation, contact sites, competing mechanisms, and organism phenotype", "Reducing mechanism to nonspecific ribosomal binding", "The pocket changes around the drug and prevents correct tRNA positioning"),
  c("organism-dependent effect", "structure-mechanism", "Lefamulin is bactericidal in vitro against selected pneumococcal, Haemophilus, and Mycoplasma isolates but bacteriostatic against selected staphylococci and streptococci", "Avoid one class-wide static or cidal claim", "Assess organism, MIC, site, exposure, immune status, burden, and source", "Calling lefamulin uniformly bactericidal", "The pharmacodynamic effect depends on the organism"),

  c("labeled CABP pathogens", "spectrum-resistance", "The adult CABP label includes susceptible S. pneumoniae, MSSA, H. influenzae, Legionella, Mycoplasma, and Chlamydophila", "Keep use inside a compatible adult CABP syndrome", "Assess age, syndrome, severity, likely pathogen, cultures, local susceptibility, and competing diagnoses", "Extending the label to every respiratory pathogen", "The approved pathogen list defines the clinical evidence boundary"),
  c("atypical coverage", "spectrum-resistance", "Lefamulin includes activity against Legionella, Mycoplasma, and Chlamydophila in adult CABP", "Use the complete syndrome and risk profile rather than adding redundant atypical therapy automatically", "Assess exposure history, diagnostics, severity, QT risks, local pathway, and companion needs", "Assuming atypical activity covers Pseudomonas or Enterobacterales", "Atypical coverage does not erase major gram-negative gaps"),
  c("gram-negative gap", "spectrum-resistance", "Lefamulin is not active against Enterobacterales or Pseudomonas aeruginosa", "Choose another regimen when these organisms require empiric or directed coverage", "Assess prior isolation, recent IV antibiotics, structural lung disease, hospitalization, cultures, and severity", "Using lefamulin monotherapy for a patient with prior Pseudomonas pneumonia", "The label explicitly preserves these spectrum exclusions"),
  c("MRSA boundary", "spectrum-resistance", "MRSA may show in vitro susceptibility, but clinical efficacy for MRSA CABP is not established in adequate controlled trials", "Use evidence-supported MRSA therapy when MRSA pneumonia coverage is required", "Assess MRSA history, nasal PCR, cultures, necrosis, post-influenza disease, severity, and current guidance", "Converting in vitro activity into a proven MRSA pneumonia indication", "Laboratory activity and clinical efficacy are different evidence levels"),
  c("resistance mechanisms", "spectrum-resistance", "ABC-F protection, Cfr methylation, and L3 or L4 ribosomal changes can reduce lefamulin activity", "Interpret susceptibility in the context of target protection and modification", "Assess organism, MIC, prior exposure, phenotype, resistance genes, site, and response", "Assuming every macrolide-resistant isolate is lefamulin resistant", "Some macrolide-resistant isolates remain susceptible because resistance pathways differ"),

  c("adult CABP indication", "cabp-selection", "Lefamulin is approved for community-acquired bacterial pneumonia in adults", "Confirm bacterial pneumonia before selecting the agent", "Assess age, symptoms, imaging, oxygenation, severity score, viral testing, bacterial probability, and disposition", "Using lefamulin for uncomplicated viral bronchitis", "Antibacterial exposure needs a proven or strongly suspected bacterial syndrome"),
  c("nonsevere alternative role", "cabp-selection", "The IDSA CAP pathway lists lefamulin as an option for nonsevere hospitalized CAP when beta-lactams, macrolides, or fluoroquinolones are unsuitable", "Reserve it for a clearly reasoned alternative role rather than default use", "Assess severity, allergy phenotype, QT risk, interactions, prior antibiotics, local formulary, and oral access", "Calling lefamulin the preferred regimen for every hospitalized CAP patient", "The pathway positions it as an alternative in selected nonsevere disease"),
  c("severe CAP boundary", "cabp-selection", "Current adult severe CAP pathways use broader combination strategies rather than lefamulin monotherapy", "Follow severe CAP, sepsis, MRSA, and Pseudomonas pathways when those risks are present", "Assess shock, ventilation, oxygenation, multilobar disease, cultures, resistant-pathogen risks, and organ failure", "Using a narrow alternative regimen in septic shock", "Severity and resistant-pathogen risk change the required regimen"),
  c("diagnostic reassessment", "cabp-selection", "Daily CAP review should confirm bacterial disease and search for complications or noninfectious mimics when improvement is absent", "Reassess diagnosis before simply extending lefamulin", "Assess fever, heart rate, respiratory rate, oxygenation, blood pressure, mental status, imaging, cultures, and viral results", "Treating every persistent opacity as antibiotic failure", "Clinical nonresponse can reflect wrong diagnosis, complication, resistance, or inadequate source management"),

  c("oral regimen", "dosing-route", "Adult oral CABP dosing is lefamulin 600 mg every 12 hours for five days", "Verify dose, interval, duration, fasting technique, and interaction suitability", "Assess age, diagnosis, hepatic function, oral tolerance, food timing, interacting drugs, and adherence", "Confusing 600 mg every 12 hours with 600 mg total daily", "The labeled oral course uses two 600 mg doses each day"),
  c("intravenous regimen", "dosing-route", "Adult IV CABP dosing is lefamulin 150 mg every 12 hours infused over 60 minutes for five to seven days", "Use the full infusion time and define oral transition criteria", "Assess severity, access, dose, interval, infusion duration, hepatic function, QT risk, and stability", "Giving 150 mg as an IV push", "Rate-related concentration can increase QT effects and the label requires a 60-minute infusion"),
  c("IV to oral transition", "dosing-route", "IV lefamulin can transition to 600 mg oral every 12 hours to complete the course", "Switch only after stability, absorption, interaction, hepatic, and fasting criteria are met", "Assess hemodynamics, oxygenation, oral tolerance, hepatic class, medication list, food schedule, and adherence", "Assuming every IV patient can receive oral lefamulin", "The oral formulation has administration and interaction restrictions not shared identically by IV therapy"),
  c("renal impairment", "dosing-route", "No lefamulin dose adjustment is required for renal impairment including hemodialysis", "Preserve QT and metabolic assessment despite unchanged dosing", "Assess kidney function, dialysis, potassium, magnesium, ECG, interacting drugs, and response", "Equating no renal adjustment with no renal-failure safety concern", "Dialysis-associated metabolic disturbances can still increase QT risk"),
  c("hepatic route split", "dosing-route", "Severe hepatic impairment changes IV dosing to every 24 hours, while oral tablets are not recommended in Child-Pugh B or C disease", "Choose route and interval from the exact hepatic class", "Assess Child-Pugh class, liver tests, QT risks, route, exposure, and alternatives", "Applying the IV Child-Pugh C adjustment to oral tablets", "Oral and IV hepatic recommendations differ"),

  c("oral fasting window", "oral-administration", "Lefamulin tablets are taken at least one hour before a meal or two hours after a meal", "Build dose times around meals before discharge", "Assess meal schedule, enteral feeds, adherence, nausea, dose times, and caregiver support", "Writing take with food to reduce nausea", "Food reduces oral exposure and the label requires fasting administration"),
  c("tablet technique", "oral-administration", "The 600 mg tablet is swallowed whole with 6 to 8 ounces of water and is not crushed or divided", "Confirm swallowing ability before choosing oral therapy", "Assess dysphagia, feeding tube, water access, tablet manipulation, aspiration risk, and alternatives", "Crushing the tablet for a feeding tube", "The label specifically prohibits crushing or dividing the tablet"),
  c("missed dose rule", "oral-administration", "A missed dose may be taken only when at least eight hours remain before the next scheduled dose", "Skip the missed dose when fewer than eight hours remain and resume the schedule", "Assess current time, scheduled next dose, meal window, symptoms, and total exposure", "Doubling the next dose", "The eight-hour rule avoids excessive concentration and preserves the schedule"),
  c("oral adherence design", "oral-administration", "Every oral course requires alignment of twice-daily timing, fasting windows, whole-tablet swallowing, and interaction avoidance", "Test the real daily schedule before prescribing", "Assess work, meals, sleep, other medications, swallowing, cost, access, and follow-up", "Calling a five-day course simple without testing feasibility", "Multiple administration constraints can undermine an otherwise active regimen"),

  c("IV dilution", "iv-preparation", "The entire 150 mg in 15 mL vial is diluted into the supplied 250 mL citrate-buffered normal saline bag", "Use aseptic technique, mix thoroughly, and inspect before infusion", "Assess vial, diluent identity, volume, clarity, container integrity, timing, and labeling", "Infusing the undiluted vial", "The product requires dilution in the supplied buffered bag"),
  c("IV compatibility", "iv-preparation", "Other additives should not be added and the bag should not be used in series connections", "Use a dedicated prepared bag and verify line compatibility", "Assess concurrent infusions, line access, additives, series setup, particles, and container damage", "Adding another antibiotic to the same bag", "Compatibility has not been established for added products"),
  c("diluted storage", "iv-preparation", "Diluted lefamulin is stored up to 24 hours at room temperature or 48 hours refrigerated", "Label preparation and beyond-use times from the actual storage condition", "Assess preparation time, temperature, refrigeration, transport, infusion start, and discard time", "Using the refrigerated 48-hour limit at room temperature", "Storage condition determines the permitted interval"),
  c("infusion rate", "iv-preparation", "Each IV dose is infused over 60 minutes and the rate should not be exceeded", "Program the pump and monitor the site and cardiac risk", "Assess 250 mL volume, 60-minute duration, pump rate, line, QT risks, and infusion reaction", "Shortening infusion to 30 minutes for convenience", "Higher concentrations and faster infusion may increase QT prolongation"),

  c("baseline QT risk", "qt-safety", "Lefamulin can prolong QT and should be avoided with known QT prolongation or ventricular arrhythmia including torsades", "Choose another antibiotic when baseline risk is unacceptable", "Assess ECG, QTc, rhythm history, syncope, structural heart disease, and alternatives", "Starting lefamulin without reviewing a documented long QT syndrome", "The label identifies established QT disease as an avoidance condition"),
  c("electrolyte risk", "qt-safety", "Hypokalemia, hypomagnesemia, bradycardia, organ failure, and interacting drugs can increase torsades risk", "Correct modifiable factors and obtain ECG monitoring when use cannot be avoided", "Assess potassium, magnesium, calcium, heart rate, kidney and liver function, diuretics, and ECG", "Treating QT risk as a medication-list problem only", "Patient physiology and drug exposure combine to determine repolarization risk"),
  c("QT drug combinations", "qt-safety", "Class IA and III antiarrhythmics and other QT-prolonging drugs should generally not be combined with lefamulin", "Replace one component or choose another CABP regimen", "Assess antiarrhythmics, antipsychotics, macrolides, fluoroquinolones, tricyclics, QTc, and alternatives", "Adding lefamulin to moxifloxacin for broader atypical coverage", "Additive repolarization effects can increase torsades risk"),
  c("concentration-rate relationship", "qt-safety", "QT prolongation can increase with higher lefamulin concentrations or a faster IV infusion rate", "Preserve dose, interval, hepatic restrictions, interaction review, and infusion duration", "Assess formulation, dose, infusion rate, hepatic function, inhibitors, ECG, and symptoms", "Viewing the 60-minute infusion as optional", "Exposure and administration rate directly influence the safety signal"),

  c("CYP3A inducers", "cyp-interactions", "Strong or moderate CYP3A and P-gp inducers reduce oral and IV lefamulin exposure and may reduce efficacy", "Avoid the combination unless benefit clearly outweighs risk", "Assess rifamycins, anticonvulsants, herbal inducers, route, duration, infection severity, and alternatives", "Increasing lefamulin empirically without evidence", "Induction can substantially lower exposure, especially with oral therapy"),
  c("oral CYP3A inhibitors", "cyp-interactions", "Strong CYP3A or P-gp inhibitors markedly increase oral lefamulin exposure", "Avoid strong inhibitors and monitor closely with moderate inhibitors", "Assess azoles, macrolides, boosters, calcium-channel blockers, route, QTc, and adverse effects", "Applying the oral interaction magnitude to IV therapy without distinction", "Oral first-pass CYP3A interactions create a route-specific exposure change"),
  c("oral sensitive CYP3A substrates", "cyp-interactions", "Oral lefamulin can increase sensitive CYP3A substrate exposure, while IV lefamulin does not show the same substrate effect", "Avoid QT-prolonging sensitive substrates and monitor other sensitive substrates", "Assess pimozide, simvastatin, alprazolam, diltiazem, verapamil, vardenafil, route, and toxicity", "Assuming oral and IV lefamulin have identical perpetrator effects", "Intestinal exposure makes the oral formulation a clinically important CYP3A inhibitor"),
  c("contraindicated oral combination", "cyp-interactions", "Oral lefamulin is contraindicated with sensitive CYP3A substrates that prolong QT, such as pimozide", "Select another antibacterial or remove the contraindicated substrate safely", "Assess exact substrate, QT effect, CYP3A sensitivity, route, alternatives, and withdrawal risks", "Treating the combination as a minor monitor-only interaction", "Increased substrate exposure can provoke QT prolongation and torsades"),

  c("embryo-fetal toxicity", "organ-reproductive-safety", "Animal findings support a potential for fetal harm with lefamulin", "Verify pregnancy status and choose a better-supported alternative when possible", "Assess pregnancy status, gestational timing, infection severity, alternatives, fetal risk, and follow-up", "Using a retired pregnancy letter as the entire assessment", "Current labeling uses evidence and clinical context rather than letter categories"),
  c("contraception interval", "organ-reproductive-safety", "Females of reproductive potential should use effective contraception during therapy and for two days after the final dose", "Document testing, counseling, method, and post-dose interval", "Assess pregnancy possibility, contraception, adherence, final dose date, and access", "Stopping contraception with the last tablet", "The label extends pregnancy prevention for two days after exposure"),
  c("lactation interval", "organ-reproductive-safety", "Human milk should be pumped and discarded during therapy and for two days after the final dose", "Build a feeding plan before the first dose", "Assess infant age and health, milk supply, stored milk, course duration, final dose, and resumption time", "Resuming breastfeeding immediately after treatment", "Potential serious infant adverse effects support the defined interruption"),
  c("adverse-effect pattern", "organ-reproductive-safety", "Oral therapy commonly causes diarrhea, nausea, and vomiting, while IV therapy adds administration-site reactions and can raise liver enzymes", "Monitor route-specific tolerance and distinguish expected effects from CDAD or organ injury", "Assess stool pattern, hydration, infusion site, liver tests, bleeding, ECG symptoms, and timing", "Calling every post-antibiotic diarrhea benign", "Common adverse effects and dangerous syndromes can begin with similar symptoms"),

  c("closed-loop lefamulin plan", "integration", "A complete lefamulin plan links adult CABP diagnosis, severity, pathogen risk, route, dosing, administration, QT and CYP safety, organ function, reproductive counseling, response, and exit", "Reassess at diagnostics, daily stability review, route transition, toxicity, and planned completion", "Assess the complete pneumonia, patient, product, regimen, monitoring ownership, follow-up, and alternative trigger", "Writing lefamulin without a reason it is preferred over standard CAP options", "Closed-loop prescribing makes every decision reconstructable"),
  c("definitive lefamulin reassessment", "integration", "Definitive reassessment determines whether the adult still has a supported CABP syndrome, is responding, remains free of an uncovered pathogen or complication, and can safely continue the current route", "Use updated diagnostics and clinical stability to continue, transition from IV to oral, select another regimen, or complete therapy with an explicit endpoint", "Assess temperature, heart rate, respiratory rate, oxygenation, blood pressure, mental status, oral intake, imaging and microbiology, MRSA or Pseudomonas risk, ECG and electrolytes, interacting drugs, hepatic function, fasting feasibility, adverse effects, and doses completed", "Extending lefamulin or switching routes automatically without revisiting diagnosis, spectrum, QT and CYP risk, organ function, oral constraints, and the planned duration", "A definitive reassessment converts daily pneumonia, exposure, safety, and feasibility evidence into a documented continue, transition, change, or stop decision"),
];

const dimensions = [
  ["principle", "Which principle best characterizes"],
  ["action", "Which clinical action best applies to"],
  ["assessment", "Which assessment is most appropriate for"],
  ["hazard", "Which reasoning hazard is most important to prevent with"],
];

const distractors = (index, field) => [7, 13, 21].map((offset) => concepts[(index + offset) % concepts.length][field]);
const generated = concepts.flatMap((item, index) => dimensions.map(([field, stem], dimension) => ({
  id: `lefamulin-pharmacology-${String(index * 4 + dimension + 1).padStart(3, "0")}`,
  lesson: item.lesson,
  question: `${stem} ${item.name}?`,
  choices: [item[field], ...distractors(index, field)],
  answer: 0,
  rationale: item.why,
  reviewHref: `#${item.lesson}`,
})));

const cases = [
  ["157", "dosing-route", "What is the labeled oral lefamulin regimen for an adult with CABP?", ["600 mg orally every 12 hours for five days", "150 mg orally once daily for ten days", "600 mg orally with every meal", "300 mg orally once"], "The adult oral CABP regimen is 600 mg every 12 hours for five days."],
  ["158", "oral-administration", "A patient remembers a missed lefamulin tablet with six hours remaining before the next dose. What should the patient do?", ["Skip the missed dose and resume at the next scheduled time", "Take two tablets now", "Take the missed dose with a meal", "Stop the entire course"], "The missed dose is skipped when fewer than eight hours remain before the next scheduled dose."],
  ["159", "dosing-route", "A patient with Child-Pugh C hepatic impairment requires IV lefamulin. Which regimen follows the label?", ["150 mg IV over 60 minutes every 24 hours", "600 mg orally every 12 hours", "150 mg IV push every 12 hours", "No adjustment is required"], "Severe hepatic impairment extends the IV interval to every 24 hours, while oral tablets are not recommended."],
  ["160", "iv-preparation", "A diluted 250 mL lefamulin bag must infuse over 60 minutes. What pump rate is required?", ["250 mL per hour", "125 mL per hour", "500 mL per hour", "60 mL per hour"], "A 250 mL volume delivered over one hour requires 250 mL per hour."],
  ["161", "qt-safety", "A patient takes sotalol and has a prolonged baseline QTc. Which action is most appropriate?", ["Select an alternative to lefamulin", "Add oral lefamulin without review", "Shorten the IV infusion", "Correct the QT risk by doubling the dose"], "Known QT prolongation and Class III antiarrhythmic therapy are label-based avoidance conditions."],
  ["162", "cyp-interactions", "Why is oral lefamulin contraindicated with pimozide?", ["It can increase a sensitive CYP3A substrate and compound QT and torsades risk", "It prevents all lefamulin absorption", "It produces nephrolithiasis", "It causes a harmless color change"], "Oral lefamulin can raise pimozide exposure, increasing QT prolongation and torsades risk."],
  ["163", "spectrum-resistance", "A patient with pneumonia previously grew Pseudomonas aeruginosa. Why is lefamulin monotherapy inappropriate empiric therapy?", ["Lefamulin does not provide Pseudomonas coverage", "Lefamulin only treats fungi", "Pseudomonas is always a contaminant", "Atypical coverage guarantees Pseudomonas activity"], "The label explicitly states that lefamulin is not active against Pseudomonas aeruginosa."],
  ["164", "integration", "Which plan best represents complete lefamulin use?", ["Confirmed adult nonsevere CABP with a reason standard options are unsuitable, exact route and regimen, QT and CYP review, hepatic and reproductive assessment, response monitoring, transition, and exit criteria", "Lefamulin for any cough", "Oral therapy with meals and no interaction review", "A rapid IV push for severe Pseudomonas pneumonia"], "A complete plan aligns syndrome, evidence position, exposure, safety, response, and exit."],
].map(([id, lesson, question, choices, rationale]) => ({ id: `lefamulin-pharmacology-case-${id}`, lesson, question, choices, answer: 0, rationale, reviewHref: `#${lesson}` }));

const beforeHistoricalLefamulinQuestionBank = [...generated, ...cases];

const historicalLefamulinQuestionOverrides = {
  "lefamulin-pharmacology-023": {
    "id": "lefamulin-pharmacology-023",
    "lesson": "spectrum-resistance",
    "question": "Which assessment is most appropriate for atypical coverage?",
    "choices": [
      "Assess exposure history, diagnostics, severity, QT risks, local pathway, and companion needs",
      "Assume atypical activity also supplies Pseudomonas coverage without reviewing pathogen risks",
      "Use the likely atypical pathogen as the only selection criterion and omit QT and interaction review",
      "Ignore culture and susceptibility results once an atypical pathogen has been considered"
    ],
    "answer": 0,
    "rationale": "Assess the pneumonia syndrome, likely pathogens, diagnostic evidence, severity and medication risks together. Lefamulin has labeled activity against Legionella, Mycoplasma and Chlamydophila, but that does not supply Pseudomonas coverage. A possible atypical pathogen does not waive QT or interaction review, and available culture and susceptibility findings still inform treatment.",
    "reviewHref": "#spectrum-resistance"
  },
  "lefamulin-pharmacology-027": {
    "id": "lefamulin-pharmacology-027",
    "lesson": "spectrum-resistance",
    "question": "Which assessment is most appropriate for gram-negative gap?",
    "choices": [
      "Assess prior isolation, recent IV antibiotics, structural lung disease, hospitalization, cultures, and severity",
      "Assume the CABP indication guarantees activity against every gram-negative respiratory isolate",
      "Exclude Pseudomonas risk whenever the patient can swallow oral tablets",
      "Review cultures only after choosing lefamulin and disregard a prior Pseudomonas isolate"
    ],
    "answer": 0,
    "rationale": "Assess prior organisms, recent hospitalization and parenteral antibiotics, structural lung disease, current microbiology and illness severity before relying on lefamulin. Its CABP indication does not provide universal gram-negative coverage, and it is not active against Pseudomonas. Swallowing ability does not determine the pathogen, and prior isolation must inform the coverage decision rather than be ignored.",
    "reviewHref": "#spectrum-resistance"
  },
  "lefamulin-pharmacology-028": {
    "id": "lefamulin-pharmacology-028",
    "lesson": "spectrum-resistance",
    "question": "Which reasoning hazard is most important to prevent with gram-negative gap?",
    "choices": [
      "Using lefamulin monotherapy for a patient whose pneumonia requires Pseudomonas coverage",
      "Reviewing a prior Pseudomonas isolate before choosing pneumonia coverage",
      "Selecting a regimen with Pseudomonas activity when that coverage is required",
      "Reassessing coverage when current cultures identify an organism outside lefamulin activity"
    ],
    "answer": 0,
    "rationale": "The hazard is relying on lefamulin alone when Pseudomonas coverage is required: the label states that lefamulin is not active against that organism. Reviewing prior isolates, selecting adequate coverage when needed, and reassessing with current microbiology are appropriate safeguards. A historical isolate informs risk assessment; it does not by itself prove the cause of every later pneumonia.",
    "reviewHref": "#spectrum-resistance"
  },
  "lefamulin-pharmacology-047": {
    "id": "lefamulin-pharmacology-047",
    "lesson": "cabp-selection",
    "question": "Which assessment is most appropriate for severe CAP boundary?",
    "choices": [
      "Assess shock, ventilation, oxygenation, multilobar disease, cultures, resistant-pathogen risks, and organ failure",
      "Classify pneumonia as nonsevere whenever an oral tablet can be swallowed",
      "Choose lefamulin monotherapy before assessing respiratory support or hemodynamic instability",
      "Use the meal schedule to decide whether severe CAP combination therapy is needed"
    ],
    "answer": 0,
    "rationale": "Assess severe CAP physiology and resistant-pathogen risks before selecting treatment. The pathway uses shock, respiratory failure and other severity criteria, and separates severe from nonsevere regimens. Oral swallowing or meal timing cannot classify disease severity. Lefamulin is listed as an alternative for selected nonsevere patients, so selecting monotherapy before this assessment bypasses the severity decision.",
    "reviewHref": "#cabp-selection"
  },
  "lefamulin-pharmacology-051": {
    "id": "lefamulin-pharmacology-051",
    "lesson": "cabp-selection",
    "question": "Which assessment is most appropriate for diagnostic reassessment?",
    "choices": [
      "Assess fever, heart rate, respiratory rate, oxygenation, blood pressure, mental status, imaging, cultures, and viral results",
      "Use the tablet count alone to decide whether the pneumonia diagnosis remains supported",
      "Assess nausea only and omit respiratory status, hemodynamics, and diagnostic results",
      "Assume nonresponse confirms the original diagnosis and continue without checking complications"
    ],
    "answer": 0,
    "rationale": "Reassess clinical progression, respiratory and circulatory stability, mentation and diagnostic evidence. Tablet count or nausea alone cannot establish pneumonia response or confirm the diagnosis. Lack of improvement warrants assessment for complications and a renewed diagnostic review, rather than assuming that the original diagnosis must remain correct.",
    "reviewHref": "#cabp-selection"
  },
  "lefamulin-pharmacology-052": {
    "id": "lefamulin-pharmacology-052",
    "lesson": "cabp-selection",
    "question": "Which reasoning hazard is most important to prevent with diagnostic reassessment?",
    "choices": [
      "Continuing the original pneumonia plan despite nonresponse without reassessing diagnosis or complications",
      "Reviewing vital signs and oxygenation to assess clinical improvement",
      "Assessing for pneumonia complications when clinical improvement is absent",
      "Using updated microbiology to reconsider pathogen-directed treatment"
    ],
    "answer": 0,
    "rationale": "The hazard is continuing automatically despite nonresponse. The pathway calls for diagnostic and clinical progression review, complication assessment when there is no improvement, and pathogen-directed decisions based on available tests. Reviewing stability, complications or microbiology supports that reassessment rather than bypassing it.",
    "reviewHref": "#cabp-selection"
  },
  "lefamulin-pharmacology-151": {
    "id": "lefamulin-pharmacology-151",
    "lesson": "organ-reproductive-safety",
    "question": "Which assessment is most appropriate for adverse-effect pattern?",
    "choices": [
      "Assess stool pattern, hydration, infusion site, liver tests, bleeding, ECG symptoms, and timing",
      "Assume every episode of diarrhea is harmless intolerance and omit C. difficile assessment",
      "Check only the infusion site because oral therapy cannot cause gastrointestinal or hepatic adverse effects",
      "Ignore palpitations and medication timing once the first lefamulin dose was tolerated"
    ],
    "answer": 0,
    "rationale": "Assess symptoms, timing and relevant safety findings rather than presuming a benign reaction. The label identifies gastrointestinal and hepatic adverse reactions, infusion-site reactions, QT risk and less common thrombocytopenia. Diarrhea requires consideration of C. difficile; oral therapy still has adverse effects, and tolerating one dose does not eliminate later cardiac symptoms or interaction risk. Bleeding is a symptom to assess, not a claim that it is a common labeled reaction.",
    "reviewHref": "#organ-reproductive-safety"
  },
  "lefamulin-pharmacology-155": {
    "id": "lefamulin-pharmacology-155",
    "lesson": "integration",
    "question": "Which assessment is most appropriate for closed-loop lefamulin plan?",
    "choices": [
      "Assess the complete pneumonia, patient, product, regimen, monitoring ownership, follow-up, and alternative trigger",
      "Confirm the CABP indication but omit route feasibility, medication risks, and follow-up",
      "Check QT risk alone and assume that this establishes adequate coverage and treatment response",
      "Confirm that the tablet is intact and defer all diagnosis and interaction review until discharge"
    ],
    "answer": 0,
    "rationale": "A complete plan combines the supported pneumonia indication and pathogen coverage with the patient-specific regimen, administration feasibility, safety review, response monitoring and follow-up. The indication alone does not settle route or safety, QT review does not prove coverage or response, and intact tablets do not remove the need for diagnosis and interaction checks. Assigning follow-up and a reassessment trigger makes these required decisions actionable.",
    "reviewHref": "#integration"
  },
  "lefamulin-pharmacology-156": {
    "id": "lefamulin-pharmacology-156",
    "lesson": "integration",
    "question": "Which reasoning hazard is most important to prevent with closed-loop lefamulin plan?",
    "choices": [
      "Choosing lefamulin without assessing why standard CAP options are unsuitable",
      "Documenting why standard options are unsuitable before choosing the pathway alternative",
      "Reviewing diagnosis, coverage, QT and interaction risks before selecting lefamulin",
      "Arranging response review and follow-up for the selected treatment"
    ],
    "answer": 0,
    "rationale": "The hazard is selecting the pathway alternative without assessing why standard options are unsuitable. The IDSA pathway lists lefamulin as an option for selected nonsevere patients who are not candidates for beta-lactams, macrolides or fluoroquinolones; that positioning is distinct from its labeled adult CABP indication. Documenting the selection rationale, reviewing coverage and safety, and arranging follow-up support a complete plan.",
    "reviewHref": "#integration"
  }
};
export const lefamulinPharmacologyQuestionBank = beforeHistoricalLefamulinQuestionBank.map(q => historicalLefamulinQuestionOverrides[q.id] ?? q);
