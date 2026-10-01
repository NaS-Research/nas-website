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

// Preserve unreviewed rows while applying individually reviewed feeding repairs.
const feedingQuestionRepairs = {
  "tetracycline-pharmacology-057": {
    "choices": [
      "Immediate-release, delayed-release, capsule, tablet, suspension, and intravenous products can have different instructions",
      "The active ingredient name is enough to determine every formulation's preparation instructions",
      "An oral liquid is always compatible with every feeding tube",
      "Modified-release products can be crushed whenever the same total milligram dose is given"
    ],
    "rationale": "Formulation changes how a dose is prepared and delivered. Tetracycline products include oral and injectable formulations, and long-acting dosage forms need verified manipulation instructions. The ingredient name or total milligrams alone does not establish tube compatibility or preserve release design."
  },
  "tetracycline-pharmacology-058": {
    "choices": [
      "Verify formulation before calculating or counseling",
      "Calculate the milligram dose first and assume that every formulation can be prepared the same way",
      "Replace a tablet with any liquid product without checking strength or tube suitability",
      "Use the feeding formula as the preparation liquid so the product does not need a separate review"
    ],
    "rationale": "Verify the exact product before calculation and counseling. Strength, release design, preparation, and administration instructions can differ, and liquids are not automatically tube-compatible. Medication should not be mixed directly into the feeding formula."
  },
  "tetracycline-pharmacology-059": {
    "choices": [
      "Assess strength, release design, ability to swallow, tube access, food instructions, and substitution",
      "Check the brand name and dose, but omit release design, swallowing ability, and tube access",
      "Check the infection indication only, and assume food and preparation instructions are interchangeable",
      "Check whether a liquid is available, and substitute it without reviewing strength or product instructions"
    ],
    "rationale": "Review strength and release design together with the patient's administration pathway. Swallowing ability, feeding access, food instructions, and the proposed substitution affect whether a product can be delivered as intended. Brand, indication, or liquid availability alone is insufficient."
  },
  "tetracycline-pharmacology-060": {
    "choices": [
      "Crushing a modified-release product without verification",
      "Checking the release design before deciding whether a product can be manipulated",
      "Reviewing product instructions before replacing a tablet with a liquid",
      "Confirming a compatible preparation and delivery route before administration"
    ],
    "rationale": "Unverified crushing of a modified-release product is the hazard. Long-acting dosage forms may release medication too quickly when damaged. The other choices are appropriate verification steps and do not justify crushing an unsuitable product."
  },
  "tetracycline-pharmacology-061": {
    "choices": [
      "Calcium, magnesium, aluminum, iron, bismuth, and other polyvalent cations can reduce absorption through chelation",
      "Mineral products improve tetracycline absorption because they are useful nutrients",
      "Chelation occurs only after the antibiotic has reached the bloodstream",
      "A water flush removes all absorption effects of concurrent mineral-containing feeds"
    ],
    "rationale": "Polyvalent cations in antacids, mineral products, and feeding formulas can chelate tetracyclines and reduce bioavailability. Nutritional value does not prevent this interaction, and tube flushing is not evidence that absorption interference has been eliminated."
  },
  "tetracycline-pharmacology-062": {
    "choices": [
      "Separate products according to the exact label and clinical plan",
      "Give the antibiotic with the interacting mineral product and compensate with a larger dose",
      "Apply the same separation schedule to every tetracycline and every mineral product",
      "Ignore mineral-containing feeds because only separate supplement tablets can interact"
    ],
    "rationale": "Separate the interacting products using instructions for the exact antibiotic and product. Food instructions and cation or binder schedules differ by product. Do not replace a verified schedule with dose escalation, one class-wide interval, or omission of feed minerals."
  },
  "tetracycline-pharmacology-063": {
    "choices": [
      "Assess antacids, supplements, dairy, tube feeds, enteral formulas, timing, and adherence",
      "Review prescription medicines only, and omit supplements, dairy, and formula minerals",
      "Review calcium tablets only, and ignore antacids, iron, and magnesium products",
      "Review feed calories and dose adherence, but omit actual antibiotic and mineral administration times"
    ],
    "rationale": "Assess all potential cation sources and their timing, including nonprescription products, dairy, and feeds. Product food instructions can differ, and adherence to the dose alone does not establish an appropriate absorption plan."
  },
  "tetracycline-pharmacology-064": {
    "choices": [
      "Using one spacing interval for the entire class",
      "Checking the named product's food and cation instructions",
      "Identifying minerals in supplements, antacids, and the feeding formula",
      "Coordinating and documenting the antibiotic and interacting-product schedule"
    ],
    "rationale": "A single interval for the whole class is the hazard. The reviewed book gives distinct food and interaction instructions, so the exact product and interacting source must be identified. The other choices are appropriate steps for building the schedule."
  },
  "tetracycline-pharmacology-070": {
    "choices": [
      "Confirm tube compatibility and a product-specific feed plan",
      "Select a liquid solely because it is easier to push through the tube",
      "Mix the medicine into the formula so feeds can continue without a separate dose",
      "Preserve the usual oral schedule without checking formula minerals or tube compatibility"
    ],
    "rationale": "Confirm the dosage form and feeding-tube preparation instructions, then coordinate a product-specific feeding plan. Solids and liquids may be unsuitable for a feeding tube, and tetracyclines interact with feed cations. Liquid availability, direct formula mixing, or an unchanged oral schedule does not resolve those issues."
  },
  "tetracycline-pharmacology-071": {
    "choices": [
      "Assess tube site, formulation, crushing suitability, formula minerals, flushes, and timing",
      "Assess the prescribed dose only, and omit tube site and formulation",
      "Assess formula calories, and use them instead of checking mineral content and drug timing",
      "Assess tube patency after the dose, and omit preparation and crushing suitability"
    ],
    "rationale": "A tube plan needs the delivery site, dosage form, manipulation suitability, formula minerals, flushing, and actual timing. These checks address tube-compatibility and cation-interaction risks without prescribing a universal feed-hold interval. Dose, calorie content, or patency alone is incomplete."
  },
  "tetracycline-pharmacology-072": {
    "choices": [
      "Crushing and mixing the drug directly into formula",
      "Reviewing the exact dosage form before deciding whether it can be manipulated",
      "Preparing a verified compatible dose separately from the nutrition formula",
      "Using appropriate water flushing and a verified medicine-feed schedule"
    ],
    "rationale": "Mixing medication directly into the formula is the hazard and does not follow appropriate feeding-tube administration. Appropriate crushing, if supported for the exact product, does not permit formula mixing. The other choices are protective verification, preparation, and timing steps."
  }
};

export const tetracyclinePharmacologyQuestionBank = [...generated, ...cases].map((question) => {
  const repair = feedingQuestionRepairs[question.id];
  return repair ? { ...question, ...repair } : question;
});
