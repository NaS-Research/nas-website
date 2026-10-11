const c = (name, lesson, principle, action, assessment, hazard, why) => ({ name, lesson, principle, action, assessment, hazard, why });

const concepts = [
  c("tetracycline scaffold", "structure-mechanism", "Tetracycline rings position substituents that determine ribosomal affinity, resistance evasion, disposition, and tolerability", "Connect the exact agent and structure to exposure and clinical role", "Assess agent, formulation, organism, site, organ function, and resistance", "Treating every tetracycline as interchangeable", "Shared rings do not erase agent-specific pharmacology"),
  c("30S A-site binding", "structure-mechanism", "Tetracyclines reversibly bind the bacterial 30S subunit and obstruct aminoacyl-tRNA entry at the A site", "Use the mechanism to explain inhibition of protein synthesis", "Assess susceptibility, exposure, site, and response", "Calling the class a DNA gyrase inhibitor", "The class acts at the bacterial ribosome"),
  c("bacteriostatic effect", "structure-mechanism", "Tetracyclines are usually bacteriostatic and depend on host defense, organism, site, and exposure", "Match the drug to syndrome severity and source control", "Assess immune status, burden, site, susceptibility, and trajectory", "Assuming one mechanism guarantees cure", "Clinical efficacy requires more than target binding"),
  c("doxycycline differentiation", "agent-differences", "Doxycycline has broad oral utility, high bioavailability, and generally avoids routine renal adjustment", "Use an exact product and disease-supported regimen", "Assess indication, formulation, cations, esophageal risk, photosensitivity, and intracranial hypertension", "Applying one doxycycline schedule to every disease", "Regimens and counseling are indication and product specific"),
  c("minocycline differentiation", "agent-differences", "Minocycline has useful tissue penetration but prominent vestibular, pigmentation, autoimmune, and hypersensitivity liabilities", "Reserve it for an appropriate indication after comparing safer active options", "Assess dizziness, pigmentation, liver injury, lupus symptoms, rash, and product indication", "Treating acne extended-release products as universal anti-infectives", "Minocycline products and risks differ from doxycycline"),
  c("omadacycline differentiation", "agent-differences", "Omadacycline is an aminomethylcycline labeled for adult CABP and ABSSSI with demanding oral fasting instructions", "Use only when its spectrum, route, label, and patient plan justify it", "Assess indication, oral timing, cations, hepatic status, nausea, and alternatives", "Carrying forward the removed CABP mortality warning", "The May 2026 label removed the former mortality-imbalance warning"),
  c("eravacycline differentiation", "agent-differences", "Eravacycline is an intravenous fluorocycline labeled for adult complicated intra-abdominal infection", "Use it for a supported cIAI plan with source control", "Assess infection site, source control, hepatic function, strong CYP3A inducers, and alternatives", "Using eravacycline for urinary infection or as an oral substitute", "Its label, route, and exposure do not support those shortcuts"),
  c("rickettsial disease", "clinical-selection", "Doxycycline is first-line presumptive therapy for RMSF and other tickborne rickettsial disease in patients of all ages", "Start promptly without waiting for confirmatory testing", "Assess fever, rash, exposure, timing, severity, sodium, platelets, liver tests, and pregnancy", "Delaying doxycycline because a child is younger than eight", "Delay increases severe illness and death"),
  c("chlamydial infection", "clinical-selection", "Doxycycline is the recommended regimen for uncomplicated chlamydial infection in nonpregnant adolescents and adults", "Treat promptly and complete partner, abstinence, and retesting steps", "Assess infection site, pregnancy, adherence, partners, coinfection, and follow-up", "Using a prescription without a transmission-control plan", "Clinical cure and reinfection prevention are connected"),
  c("selected MRSA skin infection", "clinical-selection", "Doxycycline can be an oral option for selected susceptible purulent skin infections but has unreliable streptococcal coverage", "Use drainage and syndrome-appropriate companion coverage when needed", "Assess purulence, severity, source control, streptococcal concern, culture, and systemic illness", "Using doxycycline monotherapy for every cellulitis", "Nonpurulent streptococcal disease requires different coverage reasoning"),
  c("Lyme disease", "clinical-selection", "Doxycycline has roles in selected Lyme disease presentations and prophylaxis only when current criteria are met", "Match regimen to manifestation, timing, age, pregnancy, and guideline criteria", "Assess tick species, attachment duration, geography, symptoms, neurologic or cardiac features, and exposure timing", "Using prophylaxis for every tick bite", "Disease stage and exposure criteria determine whether doxycycline is appropriate"),
  c("acne and inflammation", "clinical-selection", "Doxycycline, minocycline, and sarecycline products have distinct acne indications and stewardship considerations", "Use the narrowest effective plan with topical partners and a defined duration", "Assess severity, scarring, pregnancy, prior therapy, resistance, adverse risks, and product label", "Using chronic antibiotic monotherapy without reassessment", "Acne therapy should limit unnecessary antimicrobial exposure"),
  c("renal disposition", "pk-dosing", "Doxycycline generally does not require renal dose adjustment, while older tetracycline and individual newer agents have different rules", "Apply the exact current label rather than a class rule", "Assess kidney trend, dialysis, agent, route, indication, and toxicity", "Reducing every tetracycline automatically in kidney disease", "Elimination differs substantially across the class"),
  c("hepatic disposition", "pk-dosing", "Hepatic impairment and interacting pathways matter differently for omadacycline, eravacycline, tigecycline, and other agents", "Use product-specific hepatic guidance and monitor when risk is meaningful", "Assess liver disease, enzymes, bilirubin, interacting drugs, route, and duration", "Assuming biliary agents have identical adjustment rules", "Agent-specific metabolism and excretion determine exposure"),
  c("dosage forms", "pk-dosing", "Immediate-release, delayed-release, capsule, tablet, suspension, and intravenous products can have different instructions", "Verify formulation before calculating or counseling", "Assess strength, release design, ability to swallow, tube access, food instructions, and substitution", "Crushing a modified-release product without verification", "Dosage-form design changes delivery and safety"),
  c("cation chelation", "administration", "Calcium, magnesium, aluminum, iron, bismuth, and other polyvalent cations can reduce absorption through chelation", "Separate products according to the exact label and clinical plan", "Assess antacids, supplements, dairy, tube feeds, enteral formulas, timing, and adherence", "Using one spacing interval for the entire class", "Food and cation instructions vary by product"),
  c("esophageal injury", "administration", "Doxycycline and related oral products can cause esophagitis and esophageal ulceration", "Give with sufficient fluid and avoid taking immediately before lying down", "Assess dysphagia, odynophagia, chest pain, bedtime use, water volume, and prior disease", "Repeating the dose despite painful swallowing", "Local pill contact can produce serious mucosal injury"),
  c("feeding-tube administration", "administration", "Enteral formulas and dosage-form design can alter tetracycline delivery through chelation, adsorption, or unsafe manipulation", "Confirm tube compatibility and a product-specific feed plan", "Assess tube site, formulation, crushing suitability, formula minerals, flushes, and timing", "Crushing and mixing the drug directly into formula", "A complete tube plan protects both dose delivery and tube function"),
  c("photosensitivity", "common-safety", "Tetracyclines can produce exaggerated sunburn reactions", "Use sun protection and stop for a clinically significant phototoxic reaction", "Assess ultraviolet exposure, occupation, skin type, concurrent photosensitizers, and symptoms", "Relying on sunscreen as permission for intense exposure", "Exposure reduction remains central to prevention"),
  c("gastrointestinal effects", "common-safety", "Nausea, vomiting, diarrhea, and abdominal discomfort can impair adherence and can overlap with serious toxicity", "Separate manageable intolerance from dehydration, C difficile, pancreatitis, or liver injury", "Assess timing, severity, stool pattern, hydration, pain, fever, and organ symptoms", "Calling all diarrhea expected and harmless", "Antimicrobial-associated colitis requires a different response"),
  c("intracranial hypertension", "serious-safety", "Tetracyclines can cause intracranial hypertension with headache, visual symptoms, and possible permanent vision loss", "Stop the suspected drug and arrange urgent evaluation for concerning symptoms", "Assess headache pattern, visual obscurations, diplopia, papilledema, isotretinoin, and prior history", "Combining doxycycline with isotretinoin without risk review", "Both can increase intracranial hypertension risk"),
  c("minocycline vestibular toxicity", "serious-safety", "Minocycline can cause dizziness, vertigo, and impaired coordination", "Counsel about driving and reassess whether the agent remains appropriate", "Assess symptom timing, falls, occupation, dose, renal or hepatic function, and alternatives", "Calling new vertigo unrelated without review", "Vestibular toxicity is a recognized differentiator"),
  c("minocycline autoimmune toxicity", "serious-safety", "Prolonged minocycline exposure can cause drug-induced lupus, autoimmune hepatitis, DRESS, and pigmentation", "Stop and evaluate compatible systemic findings", "Assess fever, rash, facial edema, arthralgia, liver tests, eosinophilia, and pigmentation", "Continuing therapy through systemic rash", "Immune injury can progress with continued exposure"),
  c("Eversense CGM interference", "common-safety", "Tetracycline-class medicines can falsely lower Eversense 365 sensor glucose readings", "Identify the exact CGM and use fingerstick blood glucose for treatment decisions during tetracycline-class therapy when the current device guide requires it", "Assess the CGM model, tetracycline agent, treatment dates, sensor trend, symptoms, blood glucose, insulin plan, and device instructions", "Assuming every low sensor value is physiologic or applying an Eversense-specific rule to every CGM", "Device-specific medication interference can turn a correct prescription into an unsafe glucose decision"),
  c("pediatric use", "special-populations", "Pediatric decisions are drug, disease, dose, and duration specific rather than governed by a blanket class prohibition", "Use doxycycline promptly for suspected rickettsial disease in children of all ages", "Assess disease severity, alternative efficacy, developmental stage, dose, duration, and follow-up", "Withholding life-saving therapy because of outdated tooth-staining shorthand", "Current CDC guidance prioritizes effective early treatment"),
  c("pregnancy", "special-populations", "Pregnancy decisions require current narrative labeling and disease-specific benefit-risk reasoning", "Compare maternal and fetal disease risk with agent-specific exposure evidence", "Assess gestational timing, syndrome, severity, alternatives, dose, duration, and counseling", "Using obsolete pregnancy letters or one class-wide rule", "Risk changes with the exact drug, timing, and untreated disease"),
  c("lactation", "special-populations", "Lactation recommendations differ by agent, dose, duration, infant age, and current label", "Use the exact product narrative and an executable feeding plan", "Assess infant age, prematurity, exposure duration, milk instructions, alternatives, and follow-up", "Applying doxycycline data to omadacycline", "Newer agents may have explicit interruption intervals"),
  c("efflux resistance", "resistance-stewardship", "Efflux pumps can reduce intracellular tetracycline exposure", "Use susceptibility data and avoid extending inactive therapy", "Assess organism, MIC, tet genes, site, prior exposure, and response", "Increasing duration to overcome established efflux", "Longer inactive exposure selects resistance without restoring activity"),
  c("ribosomal protection", "resistance-stewardship", "Tet(M) and related proteins can protect the ribosome from older tetracyclines", "Differentiate agent activity using current AST and validated breakpoints", "Assess organism, mechanism, agent, MIC, site, and laboratory method", "Assuming class resistance predicts every newer agent identically", "Some newer structures evade selected mechanisms but not all resistance"),
  c("stewardship", "resistance-stewardship", "Tetracycline use needs a defined syndrome, active agent, duration, source-control plan, and reassessment", "Narrow, stop, or change therapy when new evidence arrives", "Assess cultures, response, adverse effects, adherence, duration, and alternatives", "Continuing because the drug is broadly active", "Broad spectrum is not a substitute for a current indication"),
  c("complete tetracycline plan", "clinical-integration", "A complete plan aligns diagnosis, organism, agent, product, dose, administration, safety, monitoring, and exit criteria", "Close the loop at response, culture, toxicity, and end date", "Assess the whole medication list, organ function, special populations, administration feasibility, and follow-up", "Writing the prescription without an administration or monitoring plan", "Safe use requires coordinated selection and execution"),
  c("definitive tetracycline reassessment", "clinical-integration", "Early reassessment distinguishes expected recovery from inactive therapy, inadequate source control, impaired administration, nonadherence, and drug toxicity", "Use the updated syndrome, microbiology, exposure, tolerance, and clinical trajectory to continue, narrow, change, or stop therapy", "Assess vital signs, symptoms, source control, cultures and susceptibility, administration timing, cation exposure, adherence, organ function, toxicity, and planned duration", "Extending or escalating a tetracycline without identifying why the initial plan is failing", "A definitive reassessment converts new evidence into an explicit treatment and follow-up decision"),
];

const dimensions = [["principle", "Which principle best characterizes"], ["action", "Which clinical action best applies to"], ["assessment", "Which assessment is most appropriate for"], ["hazard", "Which reasoning hazard is most important to prevent with"]];
const distractors = (index, field) => [7, 13, 19].map((offset) => concepts[(index + offset) % concepts.length][field]);
const generated = concepts.flatMap((item, index) => dimensions.map(([field, stem], dimension) => ({ id: `tetracycline-pharmacology-${String(index * 4 + dimension + 1).padStart(3, "0")}`, lesson: item.lesson, question: `${stem} ${item.name}?`, choices: [item[field], ...distractors(index, field)], answer: 0, rationale: item.why, reviewHref: `#${item.lesson}` })));

const cases = [
  ["129", "clinical-selection", "A 6-year-old has fever, rash, thrombocytopenia, and a recent tick exposure. RMSF is suspected. What is the best next step?", ["Start doxycycline promptly without waiting for confirmatory testing", "Withhold doxycycline until age eight", "Wait for convalescent serology", "Use a sulfonamide"], "CDC recommends prompt doxycycline for suspected RMSF in patients of all ages."],
  ["130", "administration", "A patient takes doxycycline at bedtime with a sip of water and now reports painful swallowing. What is the best response?", ["Evaluate for pill esophagitis and reinforce sufficient fluid and upright administration", "Double the next dose", "Take it while lying flat", "Add iron at the same time"], "Doxycycline can injure the esophagus when tablets remain in contact with mucosa."],
  ["131", "serious-safety", "A patient taking doxycycline and isotretinoin develops severe headache and transient visual obscurations. What is the best response?", ["Stop the suspected drugs and arrange urgent evaluation for intracranial hypertension", "Reassure and continue both", "Add vitamin A", "Increase doxycycline"], "The combination and symptoms raise concern for vision-threatening intracranial hypertension."],
  ["132", "agent-differences", "A legacy note says omadacycline carries a CABP mortality-imbalance warning. What should the learner do?", ["Use the current May 2026 label, which removed that warning, while retaining all current labeled precautions", "Keep the old warning forever", "Ignore all safety information", "Substitute eravacycline orally"], "Educational content must reconcile historical warnings with the current label."],
].map(([id, lesson, question, choices, rationale]) => ({ id: `tetracycline-pharmacology-${id}`, lesson, question, choices, answer: 0, rationale, reviewHref: `#${lesson}` }));

const beforeHistoricalAntibioticQuestionBank = [...generated, ...cases];

const historicalAntibioticQuestionOverrides = {
  "tetracycline-pharmacology-011": {
    "id": "tetracycline-pharmacology-011",
    "lesson": "structure-mechanism",
    "question": "How should the primarily bacteriostatic action of tetracyclines be interpreted clinically?",
    "choices": [
      "Interpret inhibition of bacterial growth together with organism susceptibility, infection site, host factors, exposure, and response.",
      "Conclude that inhibition of bacterial growth guarantees treatment failure in every patient.",
      "Describe tetracyclines as inhibitors of DNA gyrase rather than bacterial protein synthesis.",
      "Assume the bacteriostatic label establishes a suitable regimen for every infection site."
    ],
    "answer": 0,
    "rationale": "Tetracyclines inhibit bacterial protein synthesis, and doxycycline binds the 30S ribosomal subunit. Primarily bacteriostatic action describes an antimicrobial effect; it does not alone predict clinical success or failure. Organism, site, host factors, effective exposure, and response remain part of the assessment.",
    "reviewHref": "#structure-mechanism"
  },
  "tetracycline-pharmacology-017": {
    "id": "tetracycline-pharmacology-017",
    "lesson": "agent-differences",
    "question": "Which safety assessment is specifically important when considering minocycline?",
    "choices": [
      "Review dizziness or vertigo, pigmentation changes, and reported autoimmune or serious hypersensitivity reactions alongside the exact product and patient risks.",
      "Assume minocycline cannot cause vestibular symptoms because it belongs to the tetracycline class.",
      "Dismiss new rash, fever, and systemic symptoms because only mild gastrointestinal effects are possible.",
      "Assume minocycline and doxycycline have identical adverse-effect profiles and product instructions."
    ],
    "answer": 0,
    "rationale": "Minocycline labeling reports dizziness and vertigo, pigmentation changes, lupus-like syndromes, autoimmune hepatitis, and serious hypersensitivity reactions. These reports warrant product-specific assessment and appropriate action when symptoms emerge; they do not establish that every listed reaction is common or that all tetracyclines share identical risks.",
    "reviewHref": "#agent-differences"
  },
  "tetracycline-pharmacology-035": {
    "id": "tetracycline-pharmacology-035",
    "lesson": "clinical-selection",
    "question": "Which assessment best supports a complete chlamydial-infection plan when doxycycline is being considered?",
    "choices": [
      "Review the infection site, pregnancy, adherence, partner management, coinfection testing, and appropriate follow-up.",
      "Ignore pregnancy because one antibiotic regimen fits every patient.",
      "Treat the patient while omitting partner evaluation and reinfection prevention.",
      "Use symptom resolution as the only reason to omit all follow-up considerations."
    ],
    "answer": 0,
    "rationale": "Chlamydia care includes effective treatment and prevention of reinfection and transmission. The CDC guidance distinguishes pregnancy-related treatment and follow-up, addresses anatomic sites and adherence, and includes partner management and testing for other sexually transmitted infections. Symptom improvement alone does not complete that plan.",
    "reviewHref": "#clinical-selection"
  },
  "tetracycline-pharmacology-041": {
    "id": "tetracycline-pharmacology-041",
    "lesson": "clinical-selection",
    "question": "Which principle correctly distinguishes doxycycline treatment from Lyme-disease prophylaxis?",
    "choices": [
      "Choose treatment for the actual Lyme presentation; consider prophylaxis only for an eligible high-risk tick exposure under current guidance.",
      "Give prophylaxis automatically after every tick bite regardless of risk or eligibility.",
      "Use a prophylaxis regimen as complete treatment for every established Lyme manifestation.",
      "Assume one oral regimen is appropriate for every neurologic or cardiac presentation."
    ],
    "answer": 0,
    "rationale": "Treatment depends on the Lyme manifestation and patient context. The AAN/ACR/IDSA guideline limits prophylaxis to defined high-risk exposures and distinguishes treatment by presentation, including circumstances requiring intravenous therapy. A prophylaxis decision does not substitute for treatment of established disease.",
    "reviewHref": "#clinical-selection"
  },
  "tetracycline-pharmacology-115": {
    "id": "tetracycline-pharmacology-115",
    "lesson": "resistance-stewardship",
    "question": "How should ribosomal-protection resistance be assessed when a tetracycline-class agent is considered?",
    "choices": [
      "Use organism- and agent-specific susceptibility evidence and the infection site; interpret mechanism data within its stated evidence limits.",
      "Assume a newer tetracycline is clinically active against every ribosomal-protection mechanism.",
      "Assume in-vitro activity proves clinical efficacy at every infection site.",
      "Ignore agent-specific susceptibility because all tetracyclines have the same resistance pattern."
    ],
    "answer": 0,
    "rationale": "Ribosomal protection can reduce the activity of tetracyclines, and individual agents differ in resistance patterns. NUZYRA labeling reports omadacycline activity in vitro against organisms expressing TetM but explicitly states that the clinical significance of these resistance data is unknown. Mechanism information does not replace organism-specific susceptibility and evidence for the intended site.",
    "reviewHref": "#resistance-stewardship"
  },
  "tetracycline-pharmacology-121": {
    "id": "tetracycline-pharmacology-121",
    "lesson": "clinical-integration",
    "question": "Which plan best coordinates tetracycline selection, administration, and follow-up?",
    "choices": [
      "Define the diagnosis and site, choose an active agent and exact product, specify an appropriate regimen and administration instructions, and set monitoring and reassessment criteria.",
      "Write a drug name without checking the infection, product, or administration requirements.",
      "Apply one food and mineral-spacing rule to every tetracycline formulation.",
      "Continue indefinitely without reviewing response, toxicity, or the ongoing indication."
    ],
    "answer": 0,
    "rationale": "A complete plan connects the treatable infection and active agent with the exact product and regimen. Product-specific absorption and administration instructions, cation interactions, esophageal precautions, adverse effects, clinical response, and ongoing need require coordinated review. A class name alone is not an executable prescription.",
    "reviewHref": "#clinical-integration"
  }
};
export const tetracyclinePharmacologyQuestionBank = beforeHistoricalAntibioticQuestionBank.map(q => historicalAntibioticQuestionOverrides[q.id] ?? q);
