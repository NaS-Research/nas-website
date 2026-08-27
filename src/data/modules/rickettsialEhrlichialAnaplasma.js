import { rickettsialEhrlichialAnaplasmaQuestionBank } from "@/data/questionBanks/rickettsialEhrlichialAnaplasma";

const check = (question, choices, rationale, slug) => ({ question, choices, answer: 0, rationale, reviewHref: `#${slug}` });
const rows = (...items) => items.map(([heading, body]) => ({ heading, body }));
const section = (slug, title, summary, concepts, application, lesson, keyPoints, quiz) => ({ slug, title, visual: `rickettsial-${slug}`, summary, concepts, application, lesson: rows(...lesson), keyPoints, check: quiz });

export const rickettsialEhrlichialAnaplasmaModule = {
  slug: "rickettsial-ehrlichial-anaplasma-infections",
  number: "175",
  title: "Rickettsial, Ehrlichial, and Anaplasma Infections",
  source: "RxPrep 2023 Chapter 23, reconciled with CDC RMSF, ehrlichiosis, anaplasmosis, diagnostic, treatment, and tickborne disease guidance",
  description: "Recognize a nonspecific tickborne syndrome before confirmation, distinguish endothelial from leukocyte infection, deliver doxycycline without delay, and close diagnosis, duration, coinfection, prevention, and reporting.",
  topics: ["Exposure", "RMSF", "Ehrlichiosis", "Anaplasmosis", "Severity", "PCR", "Paired serology", "Doxycycline", "Special populations", "Prevention"],
  outcomes: [
    "Build an exposure and illness timeline even when no tick bite is remembered.",
    "Connect RMSF endothelial infection to vasculitis, capillary leak, and organ injury.",
    "Differentiate ehrlichial monocyte infection from anaplasma granulocyte infection.",
    "Recognize severe findings that require hospitalization, IV delivery, and organ support.",
    "Use PCR, paired IgG IFA, biopsy, and blood smear within their timing limits.",
    "Start empiric doxycycline in patients of every age without waiting for confirmation.",
    "Calculate adult and pediatric doses and protect enteral absorption.",
    "Choose duration from disease, defervescence, response, and coinfection risk.",
    "Use current narrative reasoning for children, pregnancy, and severe allergy.",
    "Apply tick prevention, symptom surveillance, and public health reporting correctly."
  ],
  submodules: [
    section(
      "syndrome-ecology",
      "Recognize the Syndrome Before the Test Can",
      "Early fever, headache, malaise, myalgia, and gastrointestinal symptoms are nonspecific. Exposure context and evolving laboratory patterns create the actionable signal.",
      ["Season", "Geography", "Exposure", "Intracellular biology", "Illness day"],
      "Construct a dated timeline from possible exposure to symptom onset, then integrate host risk, geography, examination, CBC, sodium, liver tests, and organ function.",
      [
        ["Do not require a remembered bite", "Ticks can be small and attach in hidden locations. Ask about outdoor activity, travel, pets, yard work, occupation, and household exposures rather than one recalled event."],
        ["Use ecology without turning it into exclusion", "Species and geography guide probability, but vector ranges overlap and change. A compatible syndrome after exposure deserves clinical consideration."],
        ["Connect tropism to the laboratory pattern", "RMSF targets vascular endothelium. Ehrlichia and Anaplasma infect leukocytes, which helps explain cytopenias and supports the differential."],
        ["Treat illness day as a clinical variable", "Rash, antibodies, cytopenias, and organ injury appear on different timelines. Record the day of fever and every specimen date."]
      ],
      ["No recalled bite does not exclude disease.", "Exposure history is broader than geography.", "Cellular tropism helps organize findings.", "Timing changes what tests and signs can show."],
      check("Why is a remembered tick bite not required for suspicion?", ["Many patients never notice the attached tick", "Ticks always leave a permanent scar", "Serology identifies every bite", "Only pets transmit these infections"], "Early recognition depends on the broader exposure and syndrome, not one recalled event.", "syndrome-ecology")
    ),
    section(
      "rmsf",
      "Treat RMSF Before Vasculitis Becomes Irreversible",
      "Rickettsia rickettsii infects endothelium, producing systemic vasculitis, capillary leak, tissue ischemia, and rapidly progressive multiorgan disease.",
      ["Endothelium", "Capillary leak", "Rash timing", "Hyponatremia", "Thrombocytopenia"],
      "Use fever day, exposure, headache, rash evolution, sodium, platelets, transaminases, and organ findings to support an immediate treatment decision.",
      [
        ["Understand the vascular mechanism", "Endothelial infection and inflammation disrupt vascular integrity. Brain, lungs, kidneys, skin, heart, and extremities can all be injured."],
        ["Do not wait for the classic rash", "Rash often begins 2 to 4 days after fever and can spread from wrists and ankles toward trunk, palms, and soles. It can be absent when treatment matters most."],
        ["Use laboratories as support, not permission", "Thrombocytopenia, mild transaminase elevation, and hyponatremia can support RMSF but may be normal early. Trend them while treatment proceeds."],
        ["Recognize advanced vascular injury", "Encephalitis, ARDS, shock, renal failure, DIC, necrosis, and limb ischemia signal severe disease and demand hospital level care."]
      ],
      ["RMSF is an endothelial infection.", "Rash can be late or absent.", "Early laboratories can be normal.", "Treatment delay permits irreversible vascular injury."],
      check("A patient has fever, headache, thrombocytopenia, and tick exposure but no rash. What is the priority?", ["Start doxycycline for suspected RMSF", "Wait for petechiae", "Use amoxicillin alone", "Wait for convalescent serology"], "Early RMSF can lack rash, and delayed therapy increases severe outcomes.", "rmsf")
    ),
    section(
      "ehrlichiosis-anaplasmosis",
      "Read the Leukocyte Pattern Without Overreading It",
      "Ehrlichia commonly infects monocytes, while Anaplasma infects granulocytes. Both can produce fever, cytopenias, transaminitis, and severe organ dysfunction.",
      ["Monocytes", "Granulocytes", "Cytopenias", "Transaminitis", "Coinfection"],
      "Use exposure ecology, PCR, rash pattern, immune status, CBC, liver tests, and coinfection findings to distinguish overlapping syndromes.",
      [
        ["Recognize ehrlichiosis", "Fever, headache, myalgia, gastrointestinal symptoms, leukopenia, thrombocytopenia, and transaminitis are common. Rash is more frequent in children than adults."],
        ["Recognize anaplasmosis", "Fever, severe headache, malaise, myalgia, leukopenia, thrombocytopenia, and transaminitis are common. Rash is uncommon and can suggest coinfection or another cause."],
        ["Identify high risk ehrlichiosis", "Age extremes, immune compromise, and delayed treatment increase risk for meningoencephalitis, ARDS, shock, renal or hepatic failure, and coagulopathy."],
        ["Look for Ixodes coinfection", "Anaplasma, Borrelia, and Babesia can share a vector. Hemolysis, erythema migrans, facial palsy, conduction disease, arthritis, or persistent fever should widen the workup."]
      ],
      ["Ehrlichia and Anaplasma infect different leukocytes.", "Cytopenias and transaminitis support both syndromes.", "Anaplasma rash is uncommon.", "Doxycycline does not treat Babesia."],
      check("Which finding should raise concern for Babesia coinfection in anaplasmosis?", ["Hemolytic anemia", "A normal bilirubin", "Wart recurrence", "Isolated otalgia"], "Babesia can share the Ixodes vector and produces hemolysis that doxycycline does not treat.", "ehrlichiosis-anaplasmosis")
    ),
    section(
      "severity-triage",
      "Triage the Physiology, Not the Label",
      "Shock, respiratory failure, neurologic change, major bleeding, severe cytopenia, organ failure, or inability to absorb oral medication changes the care setting immediately.",
      ["Shock", "CNS", "Respiratory failure", "Organ injury", "Oral reliability"],
      "Stabilize airway, breathing, circulation, and organs while preserving empiric coverage for rickettsial disease and other lethal diagnoses still in the differential.",
      [
        ["Choose hospital care from physiology", "Hemodynamic instability, hypoxemia, altered mental status, major bleeding, renal or hepatic failure, severe laboratory abnormalities, or unreliable follow-up require escalation."],
        ["Use IV delivery when oral exposure is unreliable", "Vomiting, ileus, obtundation, severe disease, or critical care can justify IV doxycycline. Oral and IV routes share the same antimicrobial target."],
        ["Treat dangerous alternatives concurrently", "Meningococcemia, bacterial sepsis, TTP, vasculitis, pneumonia, and meningoencephalitis can mimic these infections. Doxycycline does not replace other necessary empiric therapy."],
        ["Use response as new evidence", "Fever generally improves within 24 to 48 hours with early effective treatment. Persistent fever should trigger a diagnostic, delivery, complication, and coinfection audit."]
      ],
      ["Physiology determines care setting.", "IV route protects delivery when absorption fails.", "Doxycycline does not cover every lethal mimic.", "Nonresponse changes the differential."],
      check("Fever persists 72 hours after correctly dosed doxycycline. What should happen?", ["Reassess diagnosis, coinfection, complications, and drug delivery", "Assume resistance and extend indefinitely", "Ignore the fever", "Stop all evaluation"], "Expected defervescence is usually rapid, so persistent fever needs a structured audit.", "severity-triage")
    ),
    section(
      "diagnosis-timing",
      "Use Each Test Inside Its Time Window",
      "Confirmation matters for diagnosis and surveillance, but no available test is reliable enough early to justify delaying treatment.",
      ["PCR", "Paired IgG IFA", "Skin biopsy", "Morulae", "Acute negative"],
      "Collect the best specimen before doxycycline when practical, give the first dose on time, and arrange the convalescent evidence pathway before discharge.",
      [
        ["Use early whole blood PCR selectively", "Whole blood PCR is useful early for ehrlichiosis and anaplasmosis because organisms circulate in leukocytes. Sensitivity falls after doxycycline begins."],
        ["Know the RMSF blood limitation", "RMSF whole blood PCR is less sensitive because infection centers in endothelium. Rash or eschar biopsy PCR or immunostaining can be more useful when tissue is available."],
        ["Confirm with paired IgG IFA", "Collect acute and convalescent serum about 2 to 4 weeks apart. A fourfold rise supports acute infection, while one elevated titer can reflect prior exposure."],
        ["Use microscopy as a clue", "Morulae in monocytes or granulocytes can support ehrlichiosis or anaplasmosis, but low sensitivity and operator dependence make a negative smear unhelpful for exclusion."]
      ],
      ["Specimen collection cannot delay therapy.", "RMSF whole blood PCR can miss disease.", "Early serology is often negative.", "One elevated titer does not prove acute infection."],
      check("What does a negative acute RMSF IgG result on day 4 mean?", ["It does not exclude RMSF", "RMSF is ruled out", "Doxycycline must stop", "The patient is immune"], "Antibody production often lags behind the early treatment window.", "diagnosis-timing")
    ),
    section(
      "empiric-doxycycline",
      "Deliver Doxycycline Without Delay or Absorption Failure",
      "Doxycycline is the treatment of choice for suspected RMSF, ehrlichiosis, and anaplasmosis in adults and children of every age.",
      ["Every age", "Every 12 hours", "Weight calculation", "Thirty S ribosome", "Cation separation"],
      "Calculate the exact dose, choose a reliable route, separate cations and feeds, and prevent esophageal injury while confirmation proceeds.",
      [
        ["Dose adults and larger children", "Adults and patients at least 45 kg receive doxycycline 100 mg orally or IV every 12 hours."],
        ["Calculate the pediatric dose", "Children below 45 kg receive 2.2 mg/kg per dose every 12 hours, with a maximum of 100 mg per dose. The weight based amount is per dose, not per day."],
        ["Connect mechanism to organism biology", "Doxycycline reversibly binds the bacterial 30S ribosomal subunit and blocks aminoacyl tRNA entry, interrupting protein synthesis in intracellular pathogens."],
        ["Protect exposure", "Separate iron, calcium, magnesium, aluminum, bismuth, and interacting tube feeds. Give with water, maintain upright posture, and counsel about photosensitivity."]
      ],
      ["Do not wait for confirmation.", "Adult exposure is every 12 hours.", "Pediatric dosing is 2.2 mg/kg per dose.", "Chelation can undermine enteral treatment."],
      check("What is the doxycycline dose for a 30 kg child with suspected RMSF?", ["66 mg every 12 hours", "66 mg once daily", "220 mg every 12 hours", "No doxycycline before age eight"], "Multiply 30 kg by 2.2 mg/kg for each twice daily dose.", "empiric-doxycycline")
    ),
    section(
      "duration-response",
      "Let Disease and Recovery Define the Stop Point",
      "Duration differs by disease and possible coinfection. Defervescence and clinical improvement matter more than one fixed calendar date.",
      ["Afebrile interval", "Minimum course", "Anaplasma duration", "Response audit", "No test of cure"],
      "Write the earliest possible stop rule, required recovery criteria, and the owner of reassessment when fever or organ injury persists.",
      [
        ["Treat RMSF and ehrlichiosis through recovery", "Continue for at least 3 days after fever resolves and clinical improvement is evident, with a minimum total course of 5 to 7 days."],
        ["Treat anaplasmosis for the coinfection window", "Use 10 to 14 days to cover possible concurrent Borrelia infection, then evaluate any Lyme or babesiosis findings directly."],
        ["Audit nonresponse instead of extending blindly", "Recheck diagnosis, dangerous mimics, coinfection, organ complications, dose, cation exposure, vomiting, adherence, and source when fever persists beyond 48 hours."],
        ["Do not follow antibodies as cure markers", "Antibodies can persist for months or years. Clinical recovery, not seroreversion, defines response."]
      ],
      ["RMSF and ehrlichiosis extend beyond defervescence.", "Anaplasmosis commonly uses 10 to 14 days.", "Persistent fever demands reassessment.", "Serology does not monitor cure."],
      check("Why is suspected anaplasmosis commonly treated for 10 to 14 days?", ["To cover possible concurrent Borrelia infection", "To clear a latent liver stage", "Because doxycycline is inactive for nine days", "To prevent HPV"], "The Ixodes vector can transmit both Anaplasma and Borrelia.", "duration-response")
    ),
    section(
      "special-populations",
      "Replace Blanket Doxycycline Avoidance With Disease Risk",
      "Children, pregnancy, and severe allergy require current benefit risk reasoning. For life threatening rickettsial disease, ineffective delay is the largest avoidable exposure.",
      ["Children", "Pregnancy", "Short course", "Desensitization", "Rifampin boundary"],
      "Name the exact disease probability and severity, then compare doxycycline evidence with the narrower and less reliable alternative pathway.",
      [
        ["Treat children of every age", "CDC and pediatric guidance recommend doxycycline for suspected rickettsial disease in all children. Short recommended courses have not shown permanent tooth staining."],
        ["Use doxycycline for suspected RMSF in pregnancy", "Untreated RMSF can be fatal. Counsel with current narrative evidence, involve specialists when possible, and do not substitute an inferior regimen by reflex."],
        ["Manage severe allergy as an emergency", "Life threatening doxycycline allergy with suspected RMSF can warrant inpatient rapid desensitization. Chloramphenicol has worse RMSF outcomes and does not cover ehrlichiosis or anaplasmosis."],
        ["Keep rifampin in its narrow role", "Expert guided rifampin can be considered for selected mild anaplasmosis when doxycycline cannot be used. It does not treat RMSF or possible Borrelia coinfection."]
      ],
      ["Age below eight does not delay doxycycline.", "Pregnancy requires disease-specific benefit risk reasoning.", "Desensitization can preserve effective RMSF therapy.", "Rifampin is not an undifferentiated substitute."],
      check("What is recommended for suspected RMSF during pregnancy?", ["Prompt doxycycline with benefit risk counseling", "Routine rifampin monotherapy", "Delay until convalescent serology", "No treatment"], "Disease lethality and current evidence support prompt doxycycline.", "special-populations")
    ),
    section(
      "coinfection-differential",
      "Keep One Positive Clue From Closing the Case",
      "Tickborne infection can coexist with another vectorborne disease or a nonvector emergency. Treatment must match every dangerous process still supported by the evidence.",
      ["Borrelia", "Babesia", "Meningococcemia", "TTP", "Sepsis"],
      "Use persistent fever, hemolysis, focal findings, rash phenotype, exposure, and treatment response to reopen the differential before organ injury progresses.",
      [
        ["Look for Lyme disease", "Erythema migrans, facial palsy, meningitis, atrioventricular block, or objective arthritis can signal Borrelia coinfection and determine testing and duration."],
        ["Look for babesiosis", "Hemolytic anemia, thrombocytopenia, jaundice, elevated bilirubin and LDH, low haptoglobin, or parasites on smear require babesiosis evaluation and separate therapy."],
        ["Cover lethal bacterial mimics", "Purpura, meningismus, shock, and sepsis physiology can require immediate additional antibacterial therapy while doxycycline covers rickettsial disease."],
        ["Recognize hematologic mimics", "Thrombocytopenia with hemolysis, schistocytes, renal injury, and neurologic findings can indicate TTP or DIC and requires parallel emergency management."]
      ],
      ["One tick can transmit multiple pathogens.", "Doxycycline does not treat Babesia.", "Empiric doxycycline does not cover meningococcus.", "Treatment response is diagnostic evidence."],
      check("Which finding most strongly supports Babesia coinfection?", ["Hemolytic anemia with parasites on blood smear", "Erythema migrans alone", "A normal platelet count", "Isolated wart recurrence"], "Babesia infects erythrocytes and needs its own treatment pathway.", "coinfection-differential")
    ),
    section(
      "prevention-public-health",
      "Prevent the Next Exposure and Close Surveillance",
      "There is no recommended antibiotic prophylaxis after an asymptomatic bite for RMSF, ehrlichiosis, or anaplasmosis. Prevention centers on avoiding bites and recognizing illness early.",
      ["Repellent", "Permethrin", "Tick checks", "Prompt removal", "Reporting"],
      "Teach prevention and a 2-week symptom watch, then assign convalescent testing and public health reporting before the patient leaves care.",
      [
        ["Use layered bite prevention", "Use EPA registered repellent, permethrin treated clothing and gear, protective clothing, exposure reduction, pet protection, full tick checks, and showering after exposure."],
        ["Remove ticks mechanically", "Use fine tipped tweezers close to the skin and pull upward with steady pressure. Clean the bite and hands. Do not burn, twist, smother, or crush the tick against skin."],
        ["Do not prescribe rickettsial prophylaxis", "After an asymptomatic bite, teach monitoring for fever, rash, headache, and other illness for about 2 weeks. Lyme prophylaxis criteria do not apply to every pathogen."],
        ["Complete the reporting loop", "Spotted fever rickettsioses, ehrlichiosis, and anaplasmosis are nationally notifiable. Document probable exposure location and arrange paired testing and local or state reporting."]
      ],
      ["Prevention is layered.", "Prompt mechanical removal is preferred.", "Rickettsial prophylaxis is not recommended.", "Treatment and surveillance run on different timelines."],
      check("What is appropriate after an asymptomatic tick bite when RMSF prevention is the question?", ["No antibiotic prophylaxis, symptom surveillance, and prompt evaluation if illness develops", "Thirty days of doxycycline", "Daily acute serology", "Rifampin automatically"], "Available evidence does not support rickettsial prophylaxis after an asymptomatic bite.", "prevention-public-health")
    )
  ],
  references: [
    { label: "CDC Tickborne Rickettsial Disease Practical Guide", href: "https://www.cdc.gov/mmwr/volumes/65/rr/rr6502a1-2.htm" },
    { label: "CDC RMSF Clinical Care", href: "https://www.cdc.gov/rocky-mountain-spotted-fever/hcp/clinical-care/index.html" },
    { label: "CDC Ehrlichiosis Diagnosis and Testing", href: "https://www.cdc.gov/ehrlichiosis/hcp/diagnosis-testing/index.html" },
    { label: "CDC Anaplasmosis Clinical Care", href: "https://www.cdc.gov/anaplasmosis/hcp/clinical-care/index.html" }
  ],
  questionBank: rickettsialEhrlichialAnaplasmaQuestionBank
};

export const rickettsialEhrlichialAnaplasmaVisualTypes = ["syndrome-ecology", "rmsf", "ehrlichiosis-anaplasmosis", "severity-triage", "diagnosis-timing", "empiric-doxycycline", "duration-response", "special-populations", "coinfection-differential", "prevention-public-health"].map((type) => `rickettsial-${type}`);
