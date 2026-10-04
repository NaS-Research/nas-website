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

const oralAdministrationRepairs = {
  "lefamulin-pharmacology-073": {
    "choices": [
      "Lefamulin tablets are taken at least one hour before a meal or two hours after a meal",
      "The meal interval is reversed: take the tablet two hours before or one hour after a meal",
      "Take the tablet with a meal whenever nausea occurs",
      "Only the morning dose requires a fasting window"
    ],
    "rationale": "Each oral dose uses the labeled interval of at least one hour before or two hours after a meal. Reversing those intervals, routinely taking the dose with food, or exempting the evening dose does not follow the label. The single-dose high-fat, high-calorie meal study found lower peak concentration and overall exposure; it does not measure a universal effect for every meal or enteral-feed regimen."
  },
  "lefamulin-pharmacology-074": {
    "choices": [
      "Build dose times around meals before discharge",
      "Choose convenient dose times first and ask the patient to fit meals around them later",
      "Give both daily tablets at breakfast to avoid two fasting windows",
      "Recommend taking every tablet with food to manage nausea"
    ],
    "rationale": "Plan the twice-daily dose times and labeled meal intervals together before discharge. Deferring that planning can leave an impractical schedule, combining both tablets is not every-12-hour dosing, and taking each dose with food conflicts with the oral instructions. Nausea warrants assessment without automatically replacing the fasting rule."
  },
  "lefamulin-pharmacology-075": {
    "choices": [
      "Assess meal schedule, enteral feeds, adherence, nausea, dose times, and caregiver support",
      "Check the clock times only; meal and feeding schedules cannot affect administration feasibility",
      "Review meals but assume any swallowing or tube-delivery problem is solved by crushing",
      "Keep the nutrition schedule unchanged and instruct every dose to be taken with the next meal"
    ],
    "rationale": "Assess the actual meals or feeds, dose times, adherence barriers, nausea and available support. Clock times alone do not establish fasting feasibility, crushing the tablet is prohibited, and with-meal dosing conflicts with the labeled interval. Reviewing enteral feeds is a feasibility assessment; the meal study does not establish a tested continuous-feed interruption or crushed-tube protocol."
  },
  "lefamulin-pharmacology-076": {
    "choices": [
      "Writing take with food to reduce nausea",
      "Writing take at least one hour before a meal for each prescribed oral dose",
      "Writing take at least two hours after a meal for each prescribed oral dose",
      "Arranging prescribed every-12-hour doses around feasible meal intervals"
    ],
    "rationale": "The error is substituting routine with-food counseling for the product-specific fasting instructions. At least one hour before a meal, at least two hours after a meal, and a feasible every-12-hour schedule all follow the oral administration requirements. Assess nausea without automatically changing those requirements."
  },
  "lefamulin-pharmacology-077": {
    "choices": [
      "The 600 mg tablet is swallowed whole with 6 to 8 ounces of water and is not crushed or divided",
      "The tablet can be crushed if the full 600 mg is recovered",
      "Dividing the tablet is permitted even though crushing is prohibited",
      "The whole-tablet instruction replaces the need for a fasting window"
    ],
    "rationale": "The labeled 600 mg tablet is swallowed whole with 6 to 8 ounces of water and is neither crushed nor divided. Recovering the nominal milligram amount does not authorize crushing, dividing is also prohibited, and an intact tablet still requires the labeled meal interval."
  },
  "lefamulin-pharmacology-078": {
    "choices": [
      "Confirm swallowing ability before choosing oral therapy",
      "Select oral tablets first and solve dysphagia by crushing later",
      "Confirm total milligrams but omit the ability to swallow an intact tablet",
      "Substitute half-tablets whenever the patient reports swallowing difficulty"
    ],
    "rationale": "Check that the patient can swallow the intact tablet with the specified water before selecting the oral plan. Choosing first and crushing later, checking milligrams alone, or dividing tablets does not meet the labeled technique. A swallowing problem requires a feasible alternative plan, not an assumed manipulation method."
  },
  "lefamulin-pharmacology-079": {
    "choices": [
      "Assess dysphagia, feeding tube, water access, tablet manipulation, aspiration risk, and alternatives",
      "Assess tube access but assume the oral tablet is crushable for every device",
      "Assess water access alone without checking whole-tablet swallowing",
      "Assess total daily milligrams and treat divided tablets as equivalent administration"
    ],
    "rationale": "Assess swallowing, aspiration concerns, tube dependence, water availability, proposed manipulation and alternatives. The label requires an intact tablet with 6 to 8 ounces of water and prohibits crushing or dividing. Tube access, water access or matching total milligrams alone does not establish a feasible labeled oral technique; no crushed-tablet tube method is established here."
  },
  "lefamulin-pharmacology-080": {
    "choices": [
      "Crushing the tablet for a feeding tube",
      "Swallowing the tablet intact with 6 to 8 ounces of water",
      "Reviewing another feasible treatment plan when the patient cannot swallow the tablet",
      "Keeping the intact tablet dose within the labeled fasting window"
    ],
    "rationale": "Crushing the tablet for a feeding tube violates the explicit tablet instructions. Intact swallowing with the specified water, reassessing the plan when that is impossible, and observing the meal interval are appropriate actions. The label does not provide a workaround that makes crushing acceptable."
  },
  "lefamulin-pharmacology-081": {
    "choices": [
      "A missed dose may be taken only when at least eight hours remain before the next scheduled dose",
      "A missed dose should be taken whenever at least six hours remain before the next dose",
      "A missed dose is taken only when at least twelve hours remain before the next dose",
      "A missed dose is added to the next scheduled tablet"
    ],
    "rationale": "Take a missed dose as soon as possible if at least eight hours remain before the next scheduled dose. Six hours is below the cutoff; twelve hours is not the required threshold. When fewer than eight hours remain, skip the missed dose and resume the usual schedule rather than adding it to the next tablet. This is the labeled scheduling rule, not a measured concentration calculation."
  },
  "lefamulin-pharmacology-082": {
    "choices": [
      "Skip the missed dose when fewer than eight hours remain and resume the schedule",
      "Take the missed dose when six hours remain and postpone the next tablet by two hours",
      "Double the next scheduled dose to replace the omitted tablet",
      "Restart the entire five-day course whenever a tablet is missed"
    ],
    "rationale": "When fewer than eight hours remain, the label directs skipping the missed dose and resuming at the next scheduled dose. Taking it with only six hours left, doubling the next dose, or automatically restarting the course is not that instruction. Questions about treatment adequacy require reassessment rather than an invented catch-up regimen."
  },
  "lefamulin-pharmacology-083": {
    "choices": [
      "Assess current time, scheduled next dose, meal window, symptoms, and total exposure",
      "Count tablets remaining without checking the next scheduled dose time",
      "Use the time since the previous dose alone and ignore the next scheduled dose",
      "Check the meal interval but ignore whether the next dose is fewer than eight hours away"
    ],
    "rationale": "Establish the current time, next scheduled dose, meal interval and doses already taken, while assessing symptoms that may need follow-up. Tablet count, time since the previous dose or meal timing alone cannot determine whether at least eight hours remain. Total exposure here means reconciling actual doses; it does not require a plasma concentration estimate or an automatic dose conversion."
  },
  "lefamulin-pharmacology-084": {
    "choices": [
      "Doubling the next dose",
      "Skipping the missed dose when fewer than eight hours remain",
      "Taking an eligible missed dose promptly when at least eight hours remain",
      "Resuming the next scheduled dose after an ineligible missed dose is skipped"
    ],
    "rationale": "Doubling the next dose creates a catch-up regimen that the label does not recommend. The supported actions are to take an eligible missed dose promptly when at least eight hours remain, or otherwise skip it and resume the next scheduled dose. Do not substitute dose doubling for the eight-hour decision."
  },
  "lefamulin-pharmacology-085": {
    "choices": [
      "Every oral course requires alignment of twice-daily timing, fasting windows, whole-tablet swallowing, and interaction avoidance",
      "A five-day course makes meal timing unnecessary",
      "Keeping tablets intact removes the need to review interacting medications",
      "Once the daily milligram total is correct, both tablets can be taken together"
    ],
    "rationale": "The labeled oral course combines every-12-hour timing, fasting intervals, intact-tablet swallowing and medication-interaction review. Five days does not waive meal rules, intact tablets do not neutralize CYP or QT interactions, and matching daily milligrams does not authorize combining the doses. Build a plan the patient can actually follow."
  },
  "lefamulin-pharmacology-086": {
    "choices": [
      "Test the real daily schedule before prescribing",
      "Assume a twice-daily prescription is feasible without discussing meals or sleep",
      "Choose a convenient with-meal schedule before reviewing the fasting requirement",
      "Delay swallowing and interaction review until the course has already started"
    ],
    "rationale": "Test the actual daily schedule before prescribing: every-12-hour doses must fit the meal intervals, intact-tablet technique and medication safety plan. A twice-daily label alone does not prove feasibility. A convenient with-meal schedule conflicts with administration instructions, and swallowing or interaction problems should be addressed before treatment begins."
  },
  "lefamulin-pharmacology-087": {
    "choices": [
      "Assess work, meals, sleep, other medications, swallowing, cost, access, and follow-up",
      "Assess the number of tablets only; work and meals cannot affect adherence",
      "Assess the meal schedule but defer medication and swallowing review",
      "Assess swallowing alone and assume cost, access and follow-up cannot interrupt the prescribed course"
    ],
    "rationale": "Assess the practical ability to obtain and complete the prescribed course as well as the labeled dose schedule, meal intervals, whole-tablet technique and medication interactions. Tablet count, meal timing or swallowing alone leaves other delivery barriers unchecked. Arrange the dose schedule and confirm access and follow-up so the patient can complete the prescribed course."
  },
  "lefamulin-pharmacology-088": {
    "choices": [
      "Calling a five-day course simple without testing feasibility",
      "Testing whether every-12-hour doses can fit the actual meal schedule",
      "Verifying whole-tablet swallowing and access to the prescribed course",
      "Reviewing interacting medications before the first oral dose"
    ],
    "rationale": "A five-day course can still fail operationally if the patient cannot obtain it or follow its administration constraints. Calling it simple without testing feasibility is the hazard. Checking the actual schedule, swallowing and access, and interacting medicines are appropriate planning steps; short duration does not remove those requirements."
  },
  "lefamulin-pharmacology-case-158": {
    "rationale": "Six hours is fewer than the labeled eight-hour cutoff, so skip the missed tablet and resume at the next scheduled time. Taking two tablets, taking the ineligible missed dose with a meal, or stopping the entire prescribed course is not the missed-dose instruction. The label does not call for a doubled dose or an automatic course restart."
  }
};

export const lefamulinPharmacologyQuestionBank = [...generated, ...cases].map((question) => {
  const repair = oralAdministrationRepairs[question.id];
  return repair ? { ...question, ...repair } : question;
});
