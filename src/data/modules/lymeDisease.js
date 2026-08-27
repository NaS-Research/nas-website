import { lymeDiseaseQuestionBank } from "@/data/questionBanks/lymeDisease";

const check = (question, choices, rationale, slug) => ({ question, choices, answer: 0, rationale, reviewHref: `#${slug}` });
const rows = (...items) => items.map(([heading, body]) => ({ heading, body }));
const section = (slug, title, summary, concepts, application, lesson, keyPoints, quiz) => ({ slug, title, visual: `lyme-${slug}`, summary, concepts, application, lesson: rows(...lesson), keyPoints, check: quiz });

export const lymeDiseaseModule = {
  slug: "lyme-disease",
  number: "176",
  title: "Lyme Disease",
  source: "RxPrep 2023 Chapter 23, reconciled with current CDC clinical care, diagnostic, prevention, and prolonged symptom resources plus AAN, ACR, and IDSA Lyme disease guidance",
  description: "Move from tick exposure to stage specific care, use serology within its limits, match therapy to skin, neurologic, cardiac, and joint disease, and protect patients from both undertreatment and unsupported prolonged treatment.",
  topics: ["Ixodes exposure", "Prophylaxis", "Erythema migrans", "Serology", "Oral therapy", "Neurologic disease", "Carditis", "Arthritis", "Coinfection", "Follow-up"],
  outcomes: [
    "Estimate Lyme risk from vector, geography, attachment, engorgement, and timing.",
    "Apply the complete high risk bite criteria and calculate single dose prophylaxis.",
    "Recognize erythema migrans across variable appearances and distinguish major mimics.",
    "Use standard and modified two tier serology within the antibody response window.",
    "Select and calculate adult and pediatric localized disease regimens.",
    "Differentiate cranial neuropathy, meningitis, radiculoneuritis, and parenchymal CNS disease.",
    "Triage carditis from symptoms and conduction risk and use reversible pacing logic.",
    "Treat initial, incompletely responsive, and postantibiotic Lyme arthritis correctly.",
    "Individualize care for children, pregnancy, lactation, allergy, and administration barriers.",
    "Recognize coinfection, reinfection, and prolonged symptoms without misusing antibiotics."
  ],
  submodules: [
    section(
      "ecology-prevention",
      "Turn a Tick Bite Into a Measured Decision",
      "Most tick bites do not become Lyme disease. Vector identity, endemicity, engorgement, attachment duration, and time since removal determine whether observation or prophylaxis is appropriate.",
      ["Ixodes", "Endemicity", "Attachment", "Engorgement", "Prophylaxis"],
      "Record the exposure timeline, remove the tick safely, decide whether every high risk criterion is met, and teach symptom surveillance even when prophylaxis is given.",
      [
        ["Start with the vector and place", "In the United States, blacklegged Ixodes ticks transmit the Borrelia species that cause Lyme disease. Risk varies across and within states, so use current local public health data rather than a national stereotype."],
        ["Remove first and assess second", "Use fine tipped tweezers close to the skin and pull upward with steady pressure. Do not burn, twist, crush, smother, or delay removal while seeking perfect identification."],
        ["Reserve prophylaxis for high risk bites", "A high risk decision integrates an Ixodes tick, exposure in a highly endemic area, engorgement or attachment of at least 36 hours, treatment within 72 hours of removal, and doxycycline safety."],
        ["Calculate the single dose", "Eligible adults receive doxycycline 200 mg once. Children of any age receive 4.4 mg/kg once to a maximum of 200 mg. Prophylaxis does not prevent every Ixodes transmitted infection."]
      ],
      ["Most bites use observation, not antibiotics.", "Prompt mechanical removal is preferred.", "Every high risk criterion must be assessed.", "Surveillance remains necessary after prophylaxis."],
      check("Which bite most strongly supports Lyme prophylaxis?", ["An engorged Ixodes bite in a highly endemic area removed 24 hours ago after at least 36 hours of attachment", "A brief mosquito bite", "An asymptomatic flea bite", "An Ixodes bite removed 10 days ago"], "The vector, location, attachment, and treatment window all support prophylaxis.", "ecology-prevention")
    ),
    section(
      "clinical-stages-em",
      "Recognize the Rash Without Requiring a Bullseye",
      "Erythema migrans is an expanding lesion with variable color and shape. Multiple lesions or neurologic and cardiac symptoms indicate dissemination beyond the original skin site.",
      ["Expansion", "Variable morphology", "Mimics", "Dissemination", "Objective arthritis"],
      "Photograph and measure the lesion, map its evolution, screen for extracutaneous disease, and compare the full pattern with common annular and inflammatory mimics.",
      [
        ["Look for expansion, not one perfect shape", "Erythema migrans often expands over days and commonly exceeds 5 cm. It may be uniformly red, target shaped, vesicular, crusted, or faint, and it does not require central clearing."],
        ["Distinguish common mimics", "A local bite reaction is usually smaller and appears soon after the bite. Tinea often has scale. Cellulitis is often tender and warm. Drug eruptions, erythema multiforme, and STARI require exposure and morphology context."],
        ["Screen for early dissemination", "Multiple lesions, facial palsy, meningitis, radicular pain, palpitations, syncope, dyspnea, or chest pain move the case beyond uncomplicated localized disease."],
        ["Define late objective disease", "Lyme arthritis produces obvious swelling of one or a few large joints, often the knee. Arthralgia without objective synovitis is not the same manifestation."]
      ],
      ["Central clearing is not required.", "Lesion evolution helps separate mimics.", "Multiple lesions indicate dissemination.", "Objective swelling defines Lyme arthritis."],
      check("Which feature is most important for recognizing erythema migrans?", ["Progressive expansion after credible exposure", "A mandatory perfect bullseye", "A positive acute test in every case", "Intense scale at the edge"], "Expansion and exposure are more reliable than a stereotyped bullseye appearance.", "clinical-stages-em")
    ),
    section(
      "diagnosis-serology",
      "Use Serology for the Question It Can Answer",
      "Typical erythema migrans is a clinical diagnosis. Other compatible manifestations use FDA cleared standard or modified two tier serology interpreted through illness duration and pretest probability.",
      ["Clinical diagnosis", "Two tier testing", "Window period", "IgM boundary", "No test of cure"],
      "Decide whether testing is indicated, document illness day and prior treatment, use the complete validated algorithm, and never treat persistent antibody as a cure marker.",
      [
        ["Treat typical erythema migrans clinically", "Acute serology can be falsely negative when the rash appears. In a credible exposure setting, a typical lesion should receive prompt treatment without requiring laboratory confirmation."],
        ["Use the complete two tier algorithm", "Standard two tier testing uses an EIA followed by immunoblot when indicated. Modified two tier testing uses a second FDA cleared EIA. A stand alone immunoblot or unvalidated specialty assay is not equivalent."],
        ["Respect the antibody window", "Serologic tests can be falsely negative during the first 4 to 6 weeks. When an atypical early lesion remains suspicious, acute and convalescent testing can clarify the trajectory."],
        ["Do not use antibody as microbial burden", "IgM should not drive diagnosis after more than 30 days of illness. IgG can remain positive for years after treatment, so repeat titers do not prove cure, failure, or reinfection."]
      ],
      ["Typical erythema migrans does not need serologic proof.", "Use FDA cleared two tier testing.", "Early negative results can be nondiagnostic.", "Persistent antibody is not persistent infection."],
      check("A typical erythema migrans lesion is present, but early serology is negative. What is appropriate?", ["Treat the clinical diagnosis", "Exclude Lyme disease", "Wait for IgG before treatment", "Repeat testing daily as a cure marker"], "Antibody production can lag behind the rash and treatment window.", "diagnosis-serology")
    ),
    section(
      "localized-treatment",
      "Match the Oral Regimen to the Patient and Stage",
      "Doxycycline, amoxicillin, and cefuroxime are effective for uncomplicated erythema migrans. Regimen choice must preserve exact dose, duration, administration, and patient fit.",
      ["Doxycycline", "Amoxicillin", "Cefuroxime", "Pediatric calculation", "Administration"],
      "Confirm that disease is localized, choose the narrow supported course, calculate children from current weight, and protect adherence and absorption.",
      [
        ["Use the adult regimens precisely", "Adults can receive doxycycline 100 mg twice daily for 10 days, amoxicillin 500 mg three times daily for 14 days, or cefuroxime 500 mg twice daily for 14 days. Azithromycin is less effective and reserved for patients unable to use the preferred agents."],
        ["Calculate pediatric exposure", "Children can receive doxycycline 4.4 mg/kg/day divided twice daily, amoxicillin 50 mg/kg/day divided three times daily, or cefuroxime 30 mg/kg/day divided twice daily, each within its maximum dose."],
        ["Protect doxycycline delivery", "Separate polyvalent cations and interacting tube feeds. Use adequate water and upright posture to reduce esophageal injury, and counsel about photosensitivity."],
        ["Interpret early worsening carefully", "A mild transient inflammatory worsening can occur during the first 24 hours. Severe hypotension, respiratory compromise, mucosal disease, persistent deterioration, or later symptoms require evaluation for allergy, sepsis, or another cause."]
      ],
      ["Use the shortest effective supported course.", "Do not confuse daily and per dose pediatric amounts.", "Cations can reduce doxycycline absorption.", "Not every postdose reaction is benign."],
      check("Which adult regimen is appropriate for uncomplicated erythema migrans?", ["Doxycycline 100 mg twice daily for 10 days", "Doxycycline 100 mg once weekly", "Ceftriaxone indefinitely", "Rifampin alone for 60 days"], "Ten days of twice daily doxycycline is a supported localized disease regimen.", "localized-treatment")
    ),
    section(
      "neurologic-lyme",
      "Separate Peripheral and Meningeal Disease From Brain or Cord Injury",
      "Facial palsy, radiculoneuritis, and meningitis are common neurologic patterns. Objective parenchymal brain or spinal cord disease is uncommon and changes the route of therapy.",
      ["Facial palsy", "Corneal protection", "Radiculoneuritis", "Meningitis", "Parenchymal CNS"],
      "Localize the lesion, protect immediate function, use two tier serum testing, decide whether CSF changes care, and select oral or IV treatment from severity and anatomy.",
      [
        ["Protect the eye in facial palsy", "Lyme facial palsy can affect one or both sides. When eyelid closure is impaired, lubrication, patching, or taping protects the cornea while antibiotics treat infection."],
        ["Recognize radiculoneuritis and meningitis", "Severe shooting limb or truncal pain, weakness, headache, photophobia, fever, and neck stiffness should trigger focused neurologic and meningitis evaluation."],
        ["Choose route from the patient", "Meningitis, cranial neuropathy, or radiculoneuritis without parenchymal CNS disease can use oral doxycycline or IV ceftriaxone, cefotaxime, or penicillin G for 14 to 21 days. Oral and IV routes can be changed as the patient stabilizes."],
        ["Escalate parenchymal disease", "Objective encephalitis, myelitis, or other brain or spinal cord parenchymal involvement receives specialist directed IV therapy and a broad neurologic differential."]
      ],
      ["Facial palsy requires eye protection when closure fails.", "Neurologic symptoms do not all mean CNS parenchymal disease.", "Oral doxycycline can treat selected meningitis and radiculoneuritis.", "Parenchymal disease uses IV therapy."],
      check("A patient has Lyme facial palsy and cannot close the affected eye. What is needed now?", ["Corneal lubrication and closure protection with antibiotic therapy", "Permanent pacing", "No eye care", "Joint aspiration"], "Loss of eyelid closure can injure the cornea.", "neurologic-lyme")
    ),
    section(
      "lyme-carditis",
      "Treat Conduction Risk as a Reversible Emergency",
      "Lyme carditis can progress rapidly through atrioventricular block. Symptoms, PR duration, block degree, rhythm, and myocardial findings determine outpatient or monitored care.",
      ["Symptom screen", "PR interval", "Telemetry", "Ceftriaxone", "Temporary pacing"],
      "Ask every suspected patient about cardiac symptoms, obtain an ECG when indicated, hospitalize high risk conduction disease, and reassess frequently as the block reverses.",
      [
        ["Screen for cardiac involvement", "Palpitations, lightheadedness, syncope, dyspnea, chest pain, edema, or exercise intolerance warrant ECG and cardiac evaluation. Routine ECG is not required in every asymptomatic patient."],
        ["Treat mild disease orally", "First degree block with PR below 300 milliseconds and no severe features can use doxycycline, amoxicillin, or cefuroxime for 14 to 21 days with close follow-up."],
        ["Hospitalize severe carditis", "Symptoms, PR at least 300 milliseconds, second or third degree block, another significant arrhythmia, or myopericarditis requires continuous monitoring and initial IV ceftriaxone. Treatment should not wait for serology."],
        ["Use reversible pacing logic", "Temporary pacing is preferred when symptomatic bradycardia requires pacing. After high grade block and symptoms resolve, transition to an effective oral agent can complete a total 14 to 21 day course."]
      ],
      ["Cardiac symptoms trigger ECG evaluation.", "PR at least 300 milliseconds is a high risk marker.", "Severe disease needs monitoring and IV therapy.", "Temporary pacing protects a reversible process."],
      check("Syncope and a PR interval of 340 milliseconds occur with suspected Lyme disease. What is appropriate?", ["Hospital admission, continuous monitoring, and IV ceftriaxone", "Routine unmonitored oral care", "Wait for serology", "Permanent pacing for every patient"], "Symptoms and marked PR prolongation signal severe carditis risk.", "lyme-carditis")
    ),
    section(
      "lyme-arthritis",
      "Treat the Joint, Then Recognize When Infection Is No Longer the Driver",
      "Lyme arthritis produces objective swelling, usually in a large joint. Initial antimicrobial care, response guided retreatment, and postantibiotic inflammatory care are distinct phases.",
      ["Objective synovitis", "Twenty eight days", "Response grade", "IV ceftriaxone", "Postantibiotic arthritis"],
      "Confirm objective arthritis, protect against missed septic disease, treat the initial episode, and let swelling response determine observation, a second course, or rheumatology care.",
      [
        ["Define objective disease", "Obvious swelling of one or a few large joints, often a knee, is the core manifestation. Serum two tier serology is highly sensitive at this stage."],
        ["Protect against septic arthritis", "Fever, severe pain, inability to bear weight, critical illness, immunocompromise, or another high risk feature can require urgent arthrocentesis with cell count, Gram stain, culture, and crystals."],
        ["Treat and grade response", "Initial Lyme arthritis receives 28 days of oral doxycycline, amoxicillin, or cefuroxime. Partial improvement can be observed or receive a second oral course. Minimal response can receive IV ceftriaxone for 14 to 28 days after reassessment."],
        ["Stop antibiotics after adequate oral and IV care", "Persistent synovitis after an adequate oral course and an adequate IV course is managed as postantibiotic inflammatory arthritis with rheumatology, not repeated antimicrobial cycles."]
      ],
      ["Objective swelling matters more than diffuse pain.", "Septic arthritis remains an emergency differential.", "Response determines the second treatment step.", "Postantibiotic synovitis needs rheumatologic care."],
      check("Synovitis persists after adequate oral and IV Lyme therapy. What is the next direction?", ["Rheumatologic management rather than additional antibiotics", "Indefinite ceftriaxone", "Daily serology", "No symptom management"], "Additional antibiotics do not improve postantibiotic inflammatory arthritis.", "lyme-arthritis")
    ),
    section(
      "special-populations",
      "Individualize Exposure Without Sacrificing Effective Care",
      "Age, pregnancy, lactation, allergy, dosage form, and adherence change regimen selection. They do not justify leaving objective Lyme disease untreated.",
      ["Children", "Pregnancy", "Lactation", "Allergy", "Formulation"],
      "Name the exact manifestation, compare supported regimens, calculate exposure, and use current narrative benefit risk reasoning rather than obsolete pregnancy categories or age slogans.",
      [
        ["Use current pediatric reasoning", "Doxycycline can be used in children when the manifestation and regimen support it. Amoxicillin and cefuroxime remain effective alternatives for many uncomplicated presentations."],
        ["Use narrative pregnancy and lactation reasoning", "Amoxicillin or cefuroxime is often preferred for uncomplicated early disease when effective and tolerated. Doxycycline decisions are individualized from manifestation, duration, allergy, maternal risk, and alternatives."],
        ["Clarify allergy before narrowing care", "Separate intolerance, delayed rash, immediate hypersensitivity, and severe cutaneous reactions. The phenotype determines whether another beta lactam, doxycycline, challenge, desensitization, or specialist input is appropriate."],
        ["Make the regimen executable", "Confirm suspension concentration, tablet swallowing, dosing frequency, cation separation, sun exposure, school or work schedule, cost, and the person responsible for follow-up."]
      ],
      ["Children need exact weight based dosing.", "Pregnancy letters are obsolete.", "Allergy phenotype changes options.", "A prescribed regimen must be deliverable."],
      check("What is the best pregnancy approach for uncomplicated erythema migrans?", ["Choose an effective manifestation specific regimen such as amoxicillin or cefuroxime using narrative benefit risk reasoning", "Leave the infection untreated", "Use an obsolete pregnancy letter", "Assume every antibiotic is contraindicated"], "Effective treatment can be selected without obsolete categorical labeling.", "special-populations")
    ),
    section(
      "coinfection-followup",
      "Keep New Evidence From Becoming More Unnecessary Antibiotics",
      "Persistent fever, cytopenias, or hemolysis can signal coinfection. Persistent nonspecific symptoms after adequate treatment require validation and a broad care plan, not unsupported antimicrobial extension.",
      ["Anaplasma", "Babesia", "Reinfection", "Post treatment symptoms", "Shared goals"],
      "Audit the original diagnosis and treatment, search for objective new disease and alternate causes, recognize vector coinfection, and build a respectful symptom and function plan.",
      [
        ["Look for coinfection", "High fever, leukopenia, thrombocytopenia, transaminitis, hemolytic anemia, jaundice, or persistent fever should trigger evaluation for Anaplasma, Babesia, and other locally relevant pathogens. Doxycycline does not treat Babesia."],
        ["Recognize reinfection", "Prior disease and persistent antibody do not create reliable immunity. A new exposure with a new expanding lesion or another new objective manifestation can represent reinfection."],
        ["Evaluate prolonged symptoms broadly", "Fatigue, pain, cognitive difficulty, sleep disturbance, and exercise intolerance deserve a structured evaluation for medication, endocrine, mood, sleep, infectious, inflammatory, and other causes."],
        ["Do not use unsupported prolonged antibiotics", "Without objective evidence of reinfection or treatment failure, additional antibiotics do not improve prolonged nonspecific symptoms and can cause catheter infection, allergy, diarrhea, and other serious harm. Care should remain compassionate and functional."]
      ],
      ["Ixodes can transmit more than Borrelia.", "Babesiosis needs separate treatment.", "Persistent antibody does not prevent reinfection.", "Evidence boundaries do not justify dismissing symptoms."],
      check("Fatigue and cognitive difficulty persist after correct treatment without new objective disease. What is appropriate?", ["Evaluate other causes and support symptoms without more antibiotics", "Assume viable persistent Borrelia", "Use indefinite IV ceftriaxone", "Wait for serology to turn negative"], "Extended antibiotics have not improved nonspecific post treatment symptoms and can cause serious harm.", "coinfection-followup")
    ),
    section(
      "integrated-cases",
      "Use Stage, Anatomy, and Physiology to Choose the Next Move",
      "Lyme care becomes reliable when each decision begins with the manifestation, threat level, test window, prior therapy, and exact exposure rather than one positive result or one remembered bite.",
      ["Stage", "Anatomy", "Severity", "Testing", "Ownership"],
      "Write a one line problem representation, identify the most dangerous supported manifestation, select the evidence matched regimen, and assign the next checkpoint.",
      [
        ["Lead with the manifestation", "An expanding rash, facial palsy, meningitis, carditis, and objective arthritis have different testing and treatment pathways even when the organism is the same."],
        ["Let physiology determine setting", "Syncope, high grade block, encephalomyelitis, sepsis physiology, or threatened joint safety requires urgent monitored or procedural care."],
        ["Use tests to reduce uncertainty", "Testing should answer a defined question. Typical erythema migrans is clinical, later objective disease uses two tier serology, and selected CSF or synovial testing supports rather than replaces the clinical pathway."],
        ["Close the loop", "Document dose, duration, administration, red flags, follow-up date, who reviews pending results, and what finding triggers escalation or a different diagnosis."]
      ],
      ["Manifestation defines the pathway.", "Physiology defines the setting.", "Testing must answer a clinical question.", "Every plan needs a named checkpoint."],
      check("What is the safest first step in a complex Lyme case?", ["Define the manifestation, severity, test window, and prior therapy before selecting treatment", "Treat the antibody number", "Ignore anatomy", "Use one regimen for every stage"], "Stage and organ involvement determine the correct diagnostic and therapeutic pathway.", "integrated-cases")
    )
  ],
  references: [
    { label: "CDC Clinical Care of Lyme Disease", href: "https://www.cdc.gov/lyme/hcp/clinical-care/index.html" },
    { label: "CDC Lyme Disease Testing and Diagnosis", href: "https://www.cdc.gov/lyme/hcp/diagnosis-testing/index.html" },
    { label: "CDC Erythema Migrans Treatment", href: "https://www.cdc.gov/lyme/hcp/clinical-care/erythema-migrans-rash.html" },
    { label: "CDC Neurologic Lyme Disease", href: "https://www.cdc.gov/lyme/hcp/clinical-care/neurologic-lyme-disease.html" },
    { label: "CDC Lyme Carditis", href: "https://www.cdc.gov/lyme/hcp/clinical-care/lyme-carditis.html" },
    { label: "CDC Lyme Arthritis", href: "https://www.cdc.gov/lyme/hcp/clinical-care/lyme-arthritis.html" },
    { label: "AAN, ACR, and IDSA Lyme Disease Guideline", href: "https://www.idsociety.org/practice-guideline/lyme-disease/" },
    { label: "CDC Chronic Symptoms and Lyme Disease", href: "https://www.cdc.gov/lyme/signs-symptoms/chronic-symptoms-and-lyme-disease.html" }
  ],
  questionBank: lymeDiseaseQuestionBank
};
