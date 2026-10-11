const concepts = [
  ["syndrome", "Candidemia is bloodstream infection with Candida, while invasive candidiasis also includes deep-organ disease that may occur with or without a positive blood culture.", "Define bloodstream, source, and every suspected deep compartment before selecting duration or step-down.", "Using a negative blood culture to exclude deep invasive candidiasis can delay source control."],
  ["risk", "Central venous catheters, broad-spectrum antibiotics, parenteral nutrition, abdominal surgery or leak, ICU illness, renal replacement, neutropenia, transplantation, malignancy, and injection drug use increase risk.", "Use cumulative and time-varying risk rather than one isolated factor to set pretest probability.", "Treating colonization alone without a compatible invasive syndrome creates unnecessary antifungal exposure."],
  ["blood-culture", "Blood culture remains central for candidemia but has imperfect sensitivity for deep-seated candidiasis.", "Obtain adequate cultures before therapy when feasible and repeat daily or every other day after candidemia is found.", "Failure to document clearance makes duration and persistent-source assessment unreliable."],
  ["beta-glucan", "Beta-D-glucan is an adjunctive fungal marker that is not Candida-specific and has important false-positive contexts.", "Interpret the result with host risk, syndrome, cultures, source, prior antifungals, and clinical exposures.", "Calling a positive beta-D-glucan proof of candidemia ignores organism and site uncertainty."],
  ["species", "Candida species differ in expected azole and echinocandin susceptibility, so species identification and susceptibility testing guide definitive therapy.", "Request azole susceptibility for bloodstream and clinically relevant isolates and consider echinocandin testing after prior exposure or with selected species.", "Assuming every Candida isolate is fluconazole susceptible can produce ineffective step-down."],
  ["initial-echinocandin", "An echinocandin is recommended initial therapy for most adults with candidemia, especially critical illness, prior azole exposure, or resistance concern.", "Start an appropriately loaded and dosed echinocandin, then refine after species, susceptibility, source, clearance, and compartment data.", "Treating initial drug choice as the entire management plan ignores source and metastatic disease."],
  ["caspofungin", "Adult caspofungin treatment uses 70 mg IV once followed by 50 mg IV daily for most candidemia regimens.", "Verify the loading dose, liver function, interacting inducers, source, and response before altering maintenance.", "Omitting the loading dose delays useful exposure."],
  ["micafungin", "Adult micafungin treatment of candidemia and invasive candidiasis uses 100 mg IV daily in current labeling.", "Distinguish invasive-disease dosing from esophageal treatment and prophylaxis roles.", "Using one micafungin dose for every indication confuses distinct exposures."],
  ["anidulafungin", "Adult anidulafungin treatment uses 200 mg IV once followed by 100 mg IV daily.", "Preserve the load and monitor infusion, liver, source, culture clearance, and transition readiness.", "Using the lower esophageal regimen for candidemia risks underexposure."],
  ["rezafungin", "Rezafungin is a once-weekly echinocandin labeled for patients age 12 years or older with limited or no alternatives for candidemia and invasive candidiasis.", "Verify the restricted indication and the four-dose safety boundary before choosing weekly therapy.", "Selecting rezafungin only for convenience disregards limited evidence and label restrictions."],
  ["fluconazole-initial", "Fluconazole can be initial therapy in selected noncritically ill adults when fluconazole resistance is unlikely.", "Use an 800 mg loading dose followed by 400 mg daily, with renal, interaction, QT, liver, species, and susceptibility review.", "Starting un-loaded low-dose fluconazole in septic candidemia can provide inadequate early exposure."],
  ["stepdown", "Step-down from an echinocandin to fluconazole requires clinical stability, a susceptible isolate, and documented negative repeat blood cultures.", "Confirm oral absorption, loading history, renal adjustment, interactions, source control, and follow-up before transition.", "Ability to swallow alone is not a step-down criterion."],
  ["clearance-duration", "Uncomplicated candidemia is generally treated for 14 days after documented bloodstream clearance and symptom resolution.", "Start the duration clock from the first negative culture that remains negative, after excluding metastatic complications.", "Counting 14 days from the first positive culture can shorten therapy."],
  ["catheter-source", "Central venous catheter removal is recommended as early as possible in nonneutropenic candidemia when the catheter is the presumed source and removal is safe.", "Individualize removal in neutropenia and balance line necessity, source probability, culture persistence, and procedural risk.", "Leaving a removable infected catheter in place can sustain fungemia and biofilm."],
  ["persistent-fungemia", "Persistent candidemia suggests an uncontrolled catheter or abdominal source, endocarditis, thrombophlebitis, deep abscess, resistant isolate, or inadequate exposure.", "Rebuild source, species, susceptibility, compartment, device, dose, and exposure assessment rather than simply extending the same plan.", "Persistent positive cultures should not be normalized as slow clearance."],
  ["persistence-timeline", "The timing and pattern of persistent blood cultures can distinguish an uncleared source, delayed drug activity, inadequate exposure, or a previously unrecognized deep compartment.", "Build a dated timeline of every culture, antifungal dose, line decision, procedure, susceptibility result, and clinical change before declaring pharmacologic failure.", "Escalating therapy without reconstructing the culture and source-control timeline can add toxicity while leaving the true driver unchanged."],
  ["eye-conflict", "The 2016 IDSA guideline recommends routine dilated eye examination, while later ophthalmology guidance questions routine screening in asymptomatic patients because yield is low.", "Flag the conflict and use current institutional guidance, symptoms, host risk, candidemia persistence, and specialist input.", "Presenting either position as universally uncontested conceals a meaningful guideline conflict."],
  ["endophthalmitis", "Candida chorioretinitis or endophthalmitis requires ophthalmologic staging and an antifungal that reaches the posterior eye, with intravitreal therapy or surgery when indicated.", "Use lesion location, vitritis, species, susceptibility, systemic infection, and serial examination to design therapy.", "An echinocandin-only bloodstream regimen may not provide adequate vitreous exposure."],
  ["endocarditis", "Candida endocarditis usually requires valve or device surgery plus prolonged high-dose echinocandin or lipid amphotericin with flucytosine, followed by susceptible azole step-down and sometimes chronic suppression.", "Engage cardiac surgery and infectious-disease expertise early and assess embolic and metastatic sites.", "Treating fungal endocarditis as uncomplicated 14-day candidemia risks relapse and embolic harm."],
  ["intraabdominal", "Intra-abdominal candidiasis requires source control plus antifungal therapy selected using candidemia principles and local specimen significance.", "Drain abscesses, repair leaks, remove infected material, and distinguish a sterile-site specimen from a chronic drain culture.", "Antifungal escalation cannot compensate for an undrained abscess or ongoing anastomotic leak."],
  ["urinary", "Echinocandins have poor urinary concentrations, so Candida cystitis, pyelonephritis, fungus balls, obstruction, and candidemia require separate site-specific plans.", "Remove or replace urinary devices, relieve obstruction, identify species, and select a urine-active agent when treatment is indicated.", "Using an echinocandin because it treats candidemia does not guarantee urinary-site efficacy."],
  ["cns-bone", "Candida CNS infection, osteomyelitis, septic arthritis, and hepatosplenic disease require compartment-active therapy and much longer durations than uncomplicated candidemia.", "Use site imaging, culture or tissue, surgery, immune status, and serial response to define treatment.", "Applying a universal 14-day course to a deep site is unsafe."],
  ["neutropenia", "Neutropenic candidemia requires echinocandin or appropriate alternative therapy, source evaluation, clearance cultures, and treatment through clinical and bloodstream resolution with attention to neutrophil recovery.", "Coordinate antifungal therapy with hematologic recovery and evaluate hepatosplenic or other deep disease.", "Assuming fever resolution before neutrophil recovery proves cure can miss persistent disease."],
  ["neonate", "Neonatal candidemia differs in drug choice, CNS and urinary evaluation, catheter management, dosing, and developmental pharmacology.", "Use neonatal expertise, blood and urine cultures, lumbar puncture when feasible, eye assessment, and current age-specific labeling.", "Copying an adult echinocandin regimen into a neonate can produce the wrong exposure and miss CNS disease."],
  ["candida-auris", "Candida auris clinical infection is treated initially with an echinocandin in most patients older than two months, while colonization without infection is not treated.", "Report cases as required, maintain infection-control precautions, obtain susceptibility testing, and communicate status during transfer.", "Treating an asymptomatic screening swab does not eradicate colonization and adds resistance pressure."],
  ["candida-auris-transfer", "Candida auris colonization can persist and spread across healthcare settings even when no active infection requires antifungal treatment.", "Communicate colonization or infection status before transfer and preserve current contact precautions, environmental cleaning, screening, and public-health coordination.", "Omitting Candida auris status from a handoff can expose the receiving facility before appropriate precautions begin."],
  ["device-prevention", "Central lines, urinary devices, parenteral nutrition, abdominal leaks, and other modifiable exposures should be reassessed because prevention begins with reducing avoidable portals and sources.", "Review daily device necessity, insertion and maintenance quality, nutrition route, antimicrobial pressure, wound or anastomotic integrity, and removal opportunities.", "Using prophylactic antifungals as a substitute for device and source stewardship preserves the conditions that produce invasive infection."],
  ["antifungal-stewardship", "Antifungal stewardship aligns diagnostic probability, local epidemiology, agent spectrum, dose, source control, susceptibility, duration, toxicity, and de-escalation.", "Set a review point for every empiric regimen and document the evidence required to stop, narrow, continue, or redirect therapy.", "Continuing broad antifungal therapy without a diagnostic and source reassessment adds toxicity and selection pressure without proving benefit."],
  ["closed-loop", "Complete invasive candidiasis care links host risk, cultures, species, susceptibility, source control, exact antifungal, clearance, deep-site assessment, duration, and infection prevention.", "Assign ownership for cultures, line decisions, imaging, procedures, eye strategy, dose, transition, resistance, and follow-up.", "A prescription without clearance and source ownership leaves treatment failure invisible."],
  ["transition-ownership", "Invasive candidiasis care crosses laboratory, inpatient, procedural, pharmacy, outpatient, and infection-prevention teams, so every transition can alter exposure or lose a pending result.", "At transfer or discharge, reconcile the exact agent, dose, route, renal plan, interaction plan, duration anchor, pending cultures, procedures, and named follow-up owner.", "A discharge prescription without culture, source, and duration ownership can hide recurrence or stop therapy from the wrong date."],
];

const reviewLessonByConcept = {
  syndrome: "risk-pathogenesis",
  risk: "risk-pathogenesis",
  "blood-culture": "diagnostic-evidence",
  "beta-glucan": "diagnostic-evidence",
  species: "diagnostic-evidence",
  "initial-echinocandin": "initial-therapy",
  caspofungin: "initial-therapy",
  micafungin: "initial-therapy",
  anidulafungin: "initial-therapy",
  rezafungin: "initial-therapy",
  "clearance-duration": "clearance-source",
  "catheter-source": "clearance-source",
  "fluconazole-initial": "stepdown-exposure",
  stepdown: "stepdown-exposure",
  "persistent-fungemia": "persistent-fungemia",
  "persistence-timeline": "persistent-fungemia",
  "eye-conflict": "eye-endocardial",
  endophthalmitis: "eye-endocardial",
  endocarditis: "eye-endocardial",
  intraabdominal: "deep-compartments",
  urinary: "deep-compartments",
  "cns-bone": "deep-compartments",
  neutropenia: "neutropenia-neonate",
  neonate: "neutropenia-neonate",
  "candida-auris": "candida-auris",
  "candida-auris-transfer": "candida-auris",
  "device-prevention": "prevention-stewardship",
  "antifungal-stewardship": "prevention-stewardship",
  "closed-loop": "integrated-case",
  "transition-ownership": "integrated-case",
};

const dimensions = [["principle", "Which statement is most accurate?", 0], ["action", "Which action best applies the evidence?", 1], ["assessment", "Which plan demonstrates the strongest clinical reasoning?", 1], ["hazard", "Which error creates the greatest avoidable risk?", 2]];
const generic = ["Use one isolated result without considering source, species, site, host, or prior antifungal exposure.", "Continue the same plan despite persistent fungemia and no source reassessment.", "Assume every Candida species, echinocandin, and body compartment is interchangeable."];

const generatedInvasiveCandidiasisQuestionBank = concepts.flatMap(([slug, principle, action, hazard], conceptIndex) => dimensions.map(([dimension, stem, answerType], dimensionIndex) => {
  const correct = [principle, action, hazard][answerType];
  const choices = dimension === "hazard" ? [hazard, principle, action, generic[(conceptIndex + dimensionIndex) % 3]] : [correct, hazard, generic[(conceptIndex + dimensionIndex) % 3], generic[(conceptIndex + dimensionIndex + 1) % 3]];
  return { id: `invasive-candidiasis-${String(conceptIndex * 4 + dimensionIndex + 1).padStart(3, "0")}`, question: `${stem} Focus: ${slug.replaceAll("-", " ")}.`, choices, answer: 0, rationale: `${principle} ${action}`, reviewHref: `#${reviewLessonByConcept[slug]}`, difficulty: dimensionIndex < 2 ? "foundational" : "advanced" };
}));

const riskDeviceQuestionOverrides = {
  "invasive-candidiasis-005": {
    "id": "invasive-candidiasis-005",
    "question": "An adult ICU patient receives parenteral nutrition through a central venous catheter after abdominal surgery and has recent broad-spectrum antibiotic exposure. How should these exposures affect invasive Candida assessment?",
    "choices": [
      "They are recognized risk factors to consider with the clinical presentation.",
      "They establish candidemia even without compatible clinical or microbiologic findings.",
      "Parenteral nutrition rules out invasive Candida infection.",
      "Central venous access makes recent surgery and antibiotic exposure irrelevant."
    ],
    "answer": 0,
    "rationale": "Parenteral nutrition, central venous access, abdominal surgery, and broad-spectrum antibiotics contribute to risk assessment. Risk factors raise suspicion but do not independently establish candidemia.",
    "reviewHref": "#risk-pathogenesis",
    "difficulty": "foundational"
  },
  "invasive-candidiasis-006": {
    "id": "invasive-candidiasis-006",
    "question": "Parenteral nutrition and a central venous catheter are the only information available about a patient. Which next step avoids mistaking risk factors for a diagnosis?",
    "choices": [
      "Assess the clinical syndrome and relevant microbiologic evidence before labeling invasive Candida disease.",
      "Diagnose candidemia solely because parenteral nutrition is prescribed.",
      "Exclude candidemia solely because the catheter is still needed.",
      "Ignore parenteral nutrition and catheter exposure in the assessment."
    ],
    "answer": 0,
    "rationale": "Nutrition and device exposures inform risk assessment. Their presence alone cannot establish or exclude invasive infection; assessment must incorporate the clinical situation and microbiologic evidence.",
    "reviewHref": "#risk-pathogenesis",
    "difficulty": "foundational"
  },
  "invasive-candidiasis-007": {
    "id": "invasive-candidiasis-007",
    "question": "A critically ill patient with recent abdominal surgery, parenteral nutrition, and broad-spectrum antibiotic exposure develops unexplained fever. Candida colonization is also detected. Which reasoning best guides assessment for invasive candidiasis?",
    "choices": [
      "Integrate the illness, exposures, and microbiologic findings rather than making the decision from colonization alone.",
      "Use colonization alone to establish bloodstream infection.",
      "Ignore the clinical illness whenever a colonization result is available.",
      "Assume a single risk factor reliably determines whether invasive infection is present."
    ],
    "answer": 0,
    "rationale": "IDSA emphasizes clinical assessment of risk factors and microbiologic information in critically ill patients with unexplained fever. Colonization alone is an inadequate basis for an empiric treatment decision.",
    "reviewHref": "#risk-pathogenesis",
    "difficulty": "advanced"
  },
  "invasive-candidiasis-008": {
    "id": "invasive-candidiasis-008",
    "question": "A clinically stable patient has Candida colonization from a nonsterile site without a compatible invasive syndrome. Which decision relies on colonization alone rather than a clinical indication?",
    "choices": [
      "Start systemic antifungal treatment solely because colonization was detected.",
      "Reassess for a compatible invasive syndrome if new symptoms appear.",
      "Consider specimen source when interpreting the result.",
      "Review relevant host and device exposures alongside the clinical presentation."
    ],
    "answer": 0,
    "rationale": "Colonization must be interpreted in its clinical and specimen context. A colonization result alone does not provide an adequate basis for systemic antifungal treatment.",
    "reviewHref": "#risk-pathogenesis",
    "difficulty": "advanced"
  },
  "invasive-candidiasis-105": {
    "id": "invasive-candidiasis-105",
    "question": "A central venous catheter is being used for necessary parenteral nutrition. Which general prevention principle should guide ongoing catheter use?",
    "choices": [
      "Reassess whether the catheter remains essential and use appropriate insertion and maintenance practices.",
      "Keep the catheter permanently because it was once needed for nutrition.",
      "Replace every functioning catheter on a fixed calendar solely to prevent infection.",
      "Add unnecessary lumens because nutrition is being infused."
    ],
    "answer": 0,
    "rationale": "Catheter prevention includes appropriate care, the minimum essential lumens, and removal when access is no longer essential. Necessary access should be reassessed; routine calendar replacement is not a prevention strategy.",
    "reviewHref": "#prevention-stewardship",
    "difficulty": "foundational"
  },
  "invasive-candidiasis-106": {
    "id": "invasive-candidiasis-106",
    "question": "Parenteral nutrition has stopped, and the central venous catheter is no longer essential for any patient care. Which action follows catheter-prevention guidance?",
    "choices": [
      "Arrange prompt removal of the no-longer-essential catheter.",
      "Keep it indefinitely for possible future nutrition.",
      "Keep it until a bloodstream infection occurs.",
      "Replace it with another central catheter despite no access requirement."
    ],
    "answer": 0,
    "rationale": "CDC recommends prompt removal of intravascular catheters that are no longer essential. A prior nutrition indication does not justify continued unnecessary central access.",
    "reviewHref": "#prevention-stewardship",
    "difficulty": "foundational"
  },
  "invasive-candidiasis-107": {
    "id": "invasive-candidiasis-107",
    "question": "A functioning central venous catheter remains essential, and there is no evidence of infection. A fixed weekly replacement is proposed solely to prevent infection. Which plan is appropriate?",
    "choices": [
      "Continue indicated catheter care and necessity review without routine calendar replacement.",
      "Replace every functioning central catheter weekly regardless of indication.",
      "Use routine guidewire exchanges as the default infection-prevention method.",
      "Stop all maintenance practices because replacement is unnecessary."
    ],
    "answer": 0,
    "rationale": "CDC advises against routine replacement of central venous catheters solely to prevent infection. Avoiding unnecessary replacement does not remove the need for catheter care and ongoing necessity review.",
    "reviewHref": "#prevention-stewardship",
    "difficulty": "advanced"
  },
  "invasive-candidiasis-108": {
    "id": "invasive-candidiasis-108",
    "question": "Which proposed infection-prevention policy conflicts with general central-catheter replacement guidance?",
    "choices": [
      "Use routine guidewire exchanges of non-tunneled central catheters solely to prevent infection.",
      "Remove a catheter promptly when it is no longer essential.",
      "Use only the number of catheter lumens essential for care.",
      "Reassess the ongoing need for central access."
    ],
    "answer": 0,
    "rationale": "CDC advises against routine guidewire exchanges of non-tunneled catheters solely for infection prevention. Necessary-lumen selection and removal of nonessential access address avoidable catheter exposure.",
    "reviewHref": "#prevention-stewardship",
    "difficulty": "advanced"
  }
};
export const invasiveCandidiasisQuestionBank = generatedInvasiveCandidiasisQuestionBank.map(q => riskDeviceQuestionOverrides[q.id] ?? q);
