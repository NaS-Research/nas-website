import { tularemiaQuestionBank } from "@/data/questionBanks/tularemia";

const check = (question, choices, rationale, slug) => ({ question, choices, answer: 0, rationale, reviewHref: `#${slug}` });
const rows = (...items) => items.map(([heading, body]) => ({ heading, body }));
const section = (slug, title, summary, concepts, application, lesson, keyPoints, quiz) => ({ slug, title, visual: `tularemia-${slug}`, summary, concepts, application, lesson: rows(...lesson), keyPoints, check: quiz });

export const tularemiaModule = {
  slug: "tularemia",
  number: "177",
  title: "Tularemia",
  source: "RxPrep 2023 Chapter 23, reconciled with CDC 2025 tularemia treatment and prophylaxis recommendations, current CDC clinical, diagnostic, laboratory safety, occupational exposure, prevention, and surveillance resources",
  description: "Recognize Francisella exposure across portals, protect the laboratory, match current antimicrobial exposure to severity and anatomy, and coordinate follow-up from one patient to a possible public health event.",
  topics: ["Exposure ecology", "Clinical forms", "Severity", "Laboratory safety", "First line therapy", "Dosing", "Neuroinvasion", "Special populations", "Prophylaxis", "Public health"],
  outcomes: [
    "Connect vector, animal, water, aerosol, ingestion, eye, and laboratory exposures to disease probability.",
    "Differentiate ulceroglandular, glandular, oculoglandular, oropharyngeal, pneumonic, and typhoidal disease.",
    "Triage severe physiology, deep infection, suppurative nodes, and dangerous mimics without delaying care.",
    "Select the specimen and alert the laboratory before culture or aerosol generating work.",
    "Apply the 2025 first line framework instead of repeating the older aminoglycoside only model.",
    "Preserve exact adult, pediatric, treatment, prophylaxis, and monitoring exposures.",
    "Treat neuroinvasive disease with active combination therapy and a complete 21 day course.",
    "Individualize care for pregnancy, lactation, neonates, children, older adults, and immune compromise.",
    "Separate routine prevention, natural exposure decisions, occupational PEP, and intentional release response.",
    "Assign result ownership, response checkpoints, laboratory safety actions, and public health communication."
  ],
  submodules: [
    section(
      "ecology-transmission",
      "Build the Exposure Route Before Naming the Syndrome",
      "Tularemia begins at a portal. Tick, fly, animal, water, eye, ingestion, inhalation, and laboratory exposures lead to different anatomic clues even though the organism is the same.",
      ["Francisella biology", "Vectors", "Animal reservoirs", "Aerosol", "Incubation"],
      "Write the exposure as a timeline, identify the likely portal, and ask what tissue and lymphatic basin should become abnormal next.",
      [
        ["Begin with an unusual organism", "Francisella tularensis is a fastidious, highly infectious, intracellular gram negative coccobacillus. A low inoculum can cause disease, which matters for aerosol exposure, laboratory safety, and intentional release planning."],
        ["Use the correct vector map", "Dermacentor variabilis, Dermacentor andersoni, and Amblyomma americanum can transmit tularemia in the United States. Deer flies matter in some regions. This is not the Ixodes only pathway used for Lyme risk."],
        ["Ask beyond the tick", "Rabbits, hares, rodents, cats, hunting, skinning, bites, scratches, contaminated water, farming, mowing, aerosol, and laboratory material can all create exposure. The denied tick bite should not close the history."],
        ["Place symptoms on the clock", "Symptoms usually begin after several days, although the range is broader. Person to person transmission has not been demonstrated, so routine household contact is not the exposure that drives prophylaxis decisions."]
      ],
      ["A very low inoculum can cause disease.", "Vector ecology differs from Lyme disease.", "The portal predicts anatomy.", "Routine person to person spread is not expected."],
      check("Which exposure can cause pneumonic tularemia without a recognized tick bite?", ["Mowing over contaminated animal material", "Routine conversation with a patient", "A healed paper cut with no exposure", "Eating fully cooked food from a safe source"], "Aerosolized contaminated material can deliver Francisella to the respiratory tract.", "ecology-transmission")
    ),
    section(
      "clinical-forms",
      "Read the Portal in the Clinical Form",
      "Clinical forms are not separate diseases. They are the anatomy left behind by inoculation, ingestion, inhalation, ocular exposure, or systemic spread.",
      ["Ulceroglandular", "Glandular", "Oculoglandular", "Oropharyngeal", "Pneumonic", "Typhoidal"],
      "Examine the skin, draining nodes, eyes, mouth, throat, chest, abdomen, and neurologic state rather than waiting for one classic lesion.",
      [
        ["Find the inoculation pattern", "Ulceroglandular disease combines a skin ulcer or eschar with regional lymphadenopathy. Glandular disease produces the node pattern without an obvious skin lesion."],
        ["Follow eye and ingestion portals", "Oculoglandular disease can cause painful conjunctivitis and preauricular nodes. Oropharyngeal disease can cause pharyngitis, oral lesions, cervical nodes, abdominal pain, vomiting, or diarrhea after ingestion."],
        ["Recognize inhalational disease", "Pneumonic tularemia can produce fever, cough, dyspnea, pleuritic pain, infiltrates, pleural fluid, and hilar adenopathy. It can follow primary inhalation or dissemination from another form."],
        ["Do not require a localizing sign", "Typhoidal tularemia is a systemic febrile illness that can lack a portal lesion. Older adults and people with chronic illness can have gastrointestinal symptoms, hepatosplenomegaly, altered mental status, or sepsis."]
      ],
      ["Skin plus regional node suggests ulceroglandular disease.", "An absent ulcer does not exclude glandular disease.", "Eye and ingestion routes have distinct anatomy.", "Severe disease can be nonlocalizing."],
      check("Fever, a hand ulcer, and painful axillary nodes after skinning a rabbit most strongly suggest what?", ["Ulceroglandular tularemia", "Isolated pneumonic tularemia", "Typhoidal disease without a portal", "Routine viral conjunctivitis"], "The ulcer and its draining regional node identify an inoculation pattern.", "clinical-forms")
    ),
    section(
      "severity-triage",
      "Let Physiology Set the Care Environment",
      "A small ulcer can coexist with dangerous systemic infection. Hemodynamics, oxygenation, neurologic function, organ injury, source control, and reliability decide whether care can remain outpatient.",
      ["Sepsis", "Respiratory failure", "Neuroinvasion", "Suppuration", "Mimics"],
      "Name the most dangerous supported manifestation, stabilize it, collect safe specimens, and begin active therapy before delayed confirmation.",
      [
        ["Define severe infection", "Hemodynamic instability, end organ dysfunction, respiratory support, sepsis, neuroinvasion, or other critical physiology marks severe disease. These patients need hospital care and prompt effective treatment."],
        ["Consider combination therapy", "For severe disease, initial aminoglycoside therapy has the deepest clinical experience. Two active classes, such as gentamicin plus ciprofloxacin or gentamicin plus doxycycline, can be considered while the case is clarified."],
        ["Examine persistent nodes", "Lymph nodes can suppurate and may require aspiration or drainage. A fluctuant enlarging node after systemic improvement is an anatomy problem to reassess, not automatic proof that every active drug failed."],
        ["Keep dangerous alternatives visible", "Plague, anthrax, rickettsial disease, brucellosis, tuberculosis, lymphoma, bacterial pneumonia, and routine skin infection can overlap. Isolation, laboratory, public health, and empiric treatment needs may differ."]
      ],
      ["Treat critical physiology before confirmation.", "Severe disease can justify two active classes.", "Suppurative nodes may need a procedure.", "A zoonotic differential remains mandatory."],
      check("Which finding most clearly makes tularemia severe?", ["Hemodynamic instability with end organ dysfunction", "A small stable ulcer alone", "A remote healed tick bite", "A positive antibody from years ago"], "Critical physiology defines severe infection and changes setting and therapy.", "severity-triage")
    ),
    section(
      "diagnosis-laboratory-safety",
      "Protect the Laboratory While You Build the Diagnosis",
      "Francisella can be slow to reveal itself and dangerous to handle. The safest diagnostic plan pairs direct laboratory communication with a specimen selected from the involved compartment.",
      ["Laboratory alert", "Culture", "PCR", "Paired serology", "Specimen selection"],
      "Call microbiology before culture work, state the suspected organism and exposure, and assign ownership for both early and convalescent testing.",
      [
        ["Alert before the specimen arrives", "Tell the microbiology laboratory that tularemia is suspected before culture or aerosol generating work. The warning changes biosafety handling and protects staff from a recognized laboratory acquired infection hazard."],
        ["Match specimen to form", "Ulcer material, conjunctival swab, node aspirate or biopsy, blood, respiratory material, and pleural fluid can be considered according to anatomy and laboratory guidance. Prior therapy and lesion age affect yield."],
        ["Use direct methods within their limits", "Culture can confirm infection but is slow and hazardous. Validated PCR, immunohistochemistry, or sequencing can support or confirm the diagnosis depending on specimen and public health criteria."],
        ["Respect the antibody window", "Antibodies often are not detectable until two to three weeks after symptom onset. A negative early result does not exclude disease. Paired acute and convalescent specimens can demonstrate seroconversion, while persistent antibody is not a test of cure."]
      ],
      ["Microbiology needs advance warning.", "Anatomy determines the specimen.", "Early serology can be negative.", "Pending results need a named owner."],
      check("What is the most important safety step before culturing a specimen from suspected tularemia?", ["Alert the microbiology laboratory directly", "Send it through routine open bench workflow", "Wait three weeks before communicating", "Use only a home antibody test"], "Advance warning permits appropriate biosafety practices.", "diagnosis-laboratory-safety")
    ),
    section(
      "first-line-treatment",
      "Use the Current First Line Framework",
      "The older aminoglycoside centered summary has changed. CDC now recognizes ciprofloxacin, levofloxacin, gentamicin, and doxycycline as first line treatment options, with selection driven by severity and delivery.",
      ["Ciprofloxacin", "Levofloxacin", "Gentamicin", "Doxycycline", "Treatment delay"],
      "Separate treatment from prophylaxis, preserve the exact dose and duration, and escalate route or combination when physiology or tissue penetration requires it.",
      [
        ["Use the adult fluoroquinolone regimens", "Ciprofloxacin is 400 mg IV every 8 hours or 750 mg orally every 12 hours for 10 days. Levofloxacin is 750 mg IV or orally every 24 hours for 10 days. These are active treatment doses, not PEP doses."],
        ["Use extended interval gentamicin", "Adults receive gentamicin 6 mg/kg IV or IM every 24 hours for 10 days. Drug levels and renal function should be monitored during at least the initial treatment days."],
        ["Load and continue doxycycline", "Adults receive doxycycline 200 mg once, then 100 mg IV or orally every 12 hours for 14 to 21 days. The longer duration and loading dose should remain visible in the order."],
        ["Account for delay and severity", "When treatment is delayed, ciprofloxacin, levofloxacin, or gentamicin is preferred over doxycycline because relapse concern is greater. Severe illness favors initial aminoglycoside exposure and can justify two active classes."]
      ],
      ["Treatment and PEP doses differ.", "Fluoroquinolone treatment lasts 10 days.", "Doxycycline lasts 14 to 21 days.", "Streptomycin is now third tier rather than the routine first choice."],
      check("Which adult oral regimen matches current treatment guidance?", ["Ciprofloxacin 750 mg every 12 hours for 10 days", "Ciprofloxacin 500 mg once", "Doxycycline 100 mg once weekly", "Amoxicillin for 3 days"], "Ciprofloxacin 750 mg twice daily for 10 days is a current active disease regimen.", "first-line-treatment")
    ),
    section(
      "dosing-administration-monitoring",
      "Protect Drug Exposure From Order to Follow-Up",
      "The right antimicrobial can still fail when dose, interval, absorption, concentration monitoring, renal adjustment, or source control is wrong.",
      ["Chelation", "QT", "Tendon", "Renal function", "Drug levels", "Response"],
      "Build an administration schedule, identify toxicity risks before the first dose, and define the clinical and laboratory response checkpoint.",
      [
        ["Deliver fluoroquinolones safely", "Separate iron, calcium, magnesium, aluminum, and interacting feeds. Review QT, tendon, neuropathy, glycemic, central nervous system, and aortic risks without losing sight of the need for effective treatment."],
        ["Deliver doxycycline safely", "Use adequate water and upright posture to reduce esophageal injury. Separate polyvalent cations and interacting feeds, plan for photosensitivity, and address nausea without pairing the dose with an interfering mineral product."],
        ["Interpret gentamicin levels correctly", "Use a local extended interval protocol. Document dose and sample times, follow creatinine and urine output, review nephrotoxins, and ask about hearing, tinnitus, balance, and neuromuscular symptoms."],
        ["Audit delayed response", "Persistent fever, organ injury, abscess, or slow recovery triggers review of diagnosis, source control, exact exposure, absorption, adherence, complication, and coinfection before automatic extension."]
      ],
      ["Administration changes exposure.", "Concentration timing gives a level meaning.", "Renal function can change during therapy.", "Slow response requires a structured audit."],
      check("What information is essential for interpreting a gentamicin concentration?", ["Dose time and sample time", "Tablet color", "The patient's favorite food", "Only the medication name"], "A concentration has meaning only in relation to dose and collection timing.", "dosing-administration-monitoring")
    ),
    section(
      "meningitis-complications",
      "Treat Neuroinvasion as Its Own Compartment",
      "Tularemia meningitis is rare, potentially fatal, and the major exception to using the same core regimen for every clinical form.",
      ["Gentamicin", "Fluoroquinolone", "CSF penetration", "Twenty one days", "Deep foci"],
      "Use two active agents, preserve adequate aminoglycoside exposure, continue an active oral agent to 21 total days, and investigate other deep compartments.",
      [
        ["Use active combination therapy", "Neuroinvasive tularemia should receive gentamicin plus ciprofloxacin or levofloxacin. Gentamicin plus doxycycline is an alternative when fluoroquinolones are unavailable or contraindicated."],
        ["Complete the duration", "Successful regimens generally include at least 10 days of aminoglycoside therapy. When gentamicin stops, continue an active oral agent so the total effective course reaches 21 days."],
        ["Do not rely on routine beta lactams", "Penicillins, cephalosporins, carbapenems, glycopeptides, polymyxins, and sulfonamides are ineffective for tularemia. A familiar bacterial meningitis regimen is not automatically active against Francisella."],
        ["Search for focal complications", "Endocarditis, osteomyelitis, septic arthritis, pericarditis, mastoiditis, and other focal infections require site specific imaging, specimens, source management, and expert duration decisions."]
      ],
      ["Neuroinvasion needs two active agents.", "Gentamicin continues for at least 10 days.", "Total effective therapy reaches 21 days.", "Deep complications need individualized care."],
      check("Which regimen is preferred for neuroinvasive tularemia?", ["Gentamicin plus ciprofloxacin or levofloxacin", "Ceftriaxone alone", "Vancomycin alone", "Trimethoprim sulfamethoxazole alone"], "Gentamicin plus a fluoroquinolone supplies two active classes and appropriate CNS strategy.", "meningitis-complications")
    ),
    section(
      "special-populations",
      "Individualize Without Sacrificing Effective Therapy",
      "Age, pregnancy, lactation, immune status, organ function, and formulation change how therapy is delivered, not whether serious infection deserves active treatment.",
      ["Pregnancy", "Lactation", "Children", "Neonates", "Immune compromise"],
      "Select from current active drugs, calculate exact exposure, and use narrative benefit risk reasoning rather than obsolete pregnancy categories or age slogans.",
      [
        ["Prioritize cure during pregnancy", "Ciprofloxacin, levofloxacin, or gentamicin can be used as first line treatment during pregnancy. Choice uses severity, route, organ function, interactions, and available alternatives rather than obsolete pregnancy letters."],
        ["Support lactation safely", "Lactation can usually continue. A breast ulcer should be covered, and direct feeding from the affected side may need to pause when a lesion is close to the nipple until it heals."],
        ["Calculate pediatric regimens", "Children at least one month old can use weight based ciprofloxacin, gentamicin, doxycycline, or age specific levofloxacin. Use current kilogram weight, maximums, exact concentration, and caregiver teach back."],
        ["Protect neonates and higher risk adults", "Neonates use ciprofloxacin or gentamicin as first line options. Older adults and immunocompromised patients use active therapy with closer attention to typhoidal disease, organ function, interactions, setting, and response."]
      ],
      ["Pregnancy letters are obsolete.", "Children need exact weight based exposure.", "Neonates have a distinct pathway.", "Higher risk adults need closer monitoring, not weaker treatment."],
      check("What is the best pregnancy principle for active tularemia?", ["Use effective treatment with narrative patient specific risk assessment", "Withhold every active drug", "Use an obsolete letter as the only decision", "Wait for spontaneous cure"], "Maternal cure is prioritized through contemporary benefit risk reasoning.", "special-populations")
    ),
    section(
      "prophylaxis-bioterrorism",
      "Separate Prevention From Treatment",
      "Natural contact, recognized occupational exposure, intentional release, and active illness are different states. Each has a different antimicrobial objective.",
      ["Occupational PEP", "Natural exposure", "Intentional release", "No routine PrEP", "Engineered resistance"],
      "First decide whether the person is exposed and well or already ill. Then match dose, duration, number of active classes, and public health response to that state.",
      [
        ["Use occupational PEP precisely", "Adults can receive ciprofloxacin 500 mg orally every 12 hours for 7 days, levofloxacin 500 mg orally every 24 hours for 7 days, or doxycycline 100 mg orally every 12 hours for 10 to 14 days after a recognized high risk exposure."],
        ["Do not medicate every natural contact", "PEP is not routine after every outdoor or animal encounter. It can be considered after direct contact with a known infected animal, needlestick, bite, scratch, or infectious tissue exposure, with public health input or a reliable fever watch."],
        ["Respond differently to intentional release", "Exposed asymptomatic persons should receive PEP as soon as possible, ideally within 48 hours. Symptomatic patients receive treatment, and initial dual active classes are recommended while engineered resistance is assessed."],
        ["Avoid routine pre-exposure antibiotics", "First responders, health care workers using standard precautions, and the general public do not need routine antimicrobial PrEP because person to person transmission risk is low."]
      ],
      ["PEP and treatment use different exposure.", "Symptoms move the patient into treatment.", "Intentional release raises engineered resistance concern.", "Routine caregiving does not require prophylaxis."],
      check("Which adult regimen is a current occupational PEP option?", ["Ciprofloxacin 500 mg orally every 12 hours for 7 days", "Ciprofloxacin 750 mg orally every 12 hours for 21 days", "Gentamicin indefinitely", "Ceftriaxone once"], "The adult ciprofloxacin PEP regimen is 500 mg twice daily for 7 days.", "prophylaxis-bioterrorism")
    ),
    section(
      "response-followup-public-health",
      "Close the Clinical and Public Health Loop",
      "Tularemia care continues after the first prescription. Culture, serology, occupational exposure, animal events, cluster detection, toxicity, source control, and response all require named ownership.",
      ["Result ownership", "Reporting", "Source control", "Response audit", "Counseling"],
      "Document the medication, execution plan, red flags, next assessment, pending result owner, laboratory communication, and public health contact in one closing plan.",
      [
        ["Assign every pending result", "Name who reviews culture, PCR, paired serology, susceptibility information, and exposure investigation. Give the patient a direct route for reporting worsening symptoms or medication toxicity."],
        ["Coordinate early with public health", "Tularemia is nationally notifiable and jurisdictional reporting applies. Early consultation supports confirmation, laboratory safety, occupational management, animal investigation, and recognition of a shared source or intentional event."],
        ["Reopen failures systematically", "Audit diagnosis, treatment delay, dose, route, absorption, cations, adherence, renal adjustment, abscess, deep focus, alternate pathogen, and resistance context before adding or extending therapy."],
        ["Make counseling executable", "Use teach back for the dosing schedule, cation separation, hydration, sun protection, tendon or neurologic symptoms, hearing or balance changes, fever recurrence, respiratory red flags, and follow-up timing."]
      ],
      ["A prescription is not the end of care.", "Public health and microbiology are part of the team.", "Failure audits start with exposure and anatomy.", "Teach back turns advice into delivery."],
      check("Which plan best closes a tularemia visit?", ["Document dose, administration, toxicity warnings, pending result ownership, reassessment, and public health actions", "Provide only the drug name", "Wait for antibody to disappear", "Avoid laboratory communication"], "Safe care requires execution, result ownership, and a clear checkpoint.", "response-followup-public-health")
    )
  ],
  references: [
    { label: "CDC Tularemia Antimicrobial Treatment and Prophylaxis Recommendations, 2025", href: "https://www.cdc.gov/mmwr/volumes/74/rr/rr7402a1.htm" },
    { label: "CDC Clinical Care of Tularemia", href: "https://www.cdc.gov/tularemia/hcp/clinical-care/index.html" },
    { label: "CDC Clinical Signs and Symptoms of Tularemia", href: "https://www.cdc.gov/tularemia/hcp/clinical-signs/index.html" },
    { label: "CDC Testing and Diagnosis for Tularemia", href: "https://www.cdc.gov/tularemia/hcp/diagnosis-testing/index.html" },
    { label: "CDC Managing Occupational Exposures to Francisella tularensis", href: "https://www.cdc.gov/tularemia/hcp/occupational-exposure/index.html" },
    { label: "CDC Infection Control and Environmental Decontamination", href: "https://www.cdc.gov/tularemia/hcp/clinical-care/infection-control-and-environmental-decontamination.html" },
    { label: "CDC 2026 Tularemia Case Definition", href: "https://ndc.services.cdc.gov/case-definitions/tularemia/" }
  ],
  questionBank: tularemiaQuestionBank
};
