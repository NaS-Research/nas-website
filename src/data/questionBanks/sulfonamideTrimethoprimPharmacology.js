const c = (name, lesson, principle, action, assessment, hazard, why) => ({ name, lesson, principle, action, assessment, hazard, why });

const concepts = [
  c("sulfamethoxazole mechanism", "folate-mechanism", "Sulfamethoxazole competes with para-aminobenzoic acid at bacterial dihydropteroate synthase", "Connect the PABA analog to reduced bacterial dihydrofolate production", "Assess organism, susceptibility, pathway target, exposure, and resistance", "Calling sulfamethoxazole a human folate antagonist only", "Its intended antibacterial target is the microbial folate pathway"),
  c("trimethoprim mechanism", "folate-mechanism", "Trimethoprim preferentially inhibits bacterial dihydrofolate reductase and reduces tetrahydrofolate regeneration", "Use the second blockade to explain sequential pathway inhibition", "Assess organism, susceptibility, renal exposure, folate reserve, and interacting antifolates", "Calling trimethoprim a cell-wall inhibitor", "Trimethoprim acts downstream in microbial folate metabolism"),
  c("sequential folate blockade", "folate-mechanism", "Combining sulfamethoxazole and trimethoprim blocks two consecutive bacterial folate steps", "Use the fixed combination only when the syndrome and organism support both components", "Assess diagnosis, site, susceptibility, resistance, dose, and host toxicity", "Assuming dual targets guarantee bactericidal activity in every organism", "Pharmacodynamic effect remains organism and exposure specific"),
  c("five-to-one product ratio", "product-dosing", "Commercial TMP-SMX products contain a five-to-one sulfamethoxazole-to-trimethoprim milligram ratio", "Calculate and prescribe clinical doses by the trimethoprim component when guidance does so", "Assess product strength, trimethoprim milligrams, total daily dose, frequency, route, and indication", "Dosing severe infection from the combined tablet mass", "The trimethoprim component anchors many weight-based regimens"),
  c("single- and double-strength tablets", "product-dosing", "A single-strength tablet contains 80 mg TMP with 400 mg SMX and a double-strength tablet contains 160 mg TMP with 800 mg SMX", "Convert the intended trimethoprim dose into the exact tablet or liquid amount", "Assess strength, tablet count, suspension concentration, swallowing, and adherence", "Treating DS as twice the total milligrams without checking components", "Both active ingredients must be translated correctly"),
  c("high-dose weight calculation", "product-dosing", "PCP and selected severe infections use weight-based daily dosing expressed as trimethoprim milligrams", "Calculate the daily TMP target, divide it by interval, then verify SMX exposure and dosage form", "Assess dosing weight, kidney function, severity, route, interval, maximum, and toxicity", "Using one DS tablet twice daily for every severe infection", "High-intensity regimens differ substantially from routine outpatient dosing"),
  c("Pneumocystis treatment", "clinical-selection", "TMP-SMX remains preferred therapy for PCP, with severity, oxygenation, renal function, and toxicity guiding route and adjunctive care", "Use current NIH treatment and corticosteroid criteria", "Assess PaO2, A-a gradient, HIV status, pregnancy, renal function, G6PD context, and tolerance", "Adding leucovorin routinely to prevent marrow toxicity", "Concurrent leucovorin during PCP treatment has been associated with treatment failure and excess mortality"),
  c("Pneumocystis prophylaxis", "clinical-selection", "PCP prophylaxis depends on current immune and virologic criteria rather than a permanent drug label", "Start, continue, or stop prophylaxis using current NIH criteria", "Assess CD4 count, HIV RNA, ART response, prior PCP, toxoplasma status, adherence, and toxicity", "Continuing prophylaxis indefinitely after immune recovery without review", "Prophylaxis should follow current risk criteria"),
  c("urinary infection", "clinical-selection", "TMP-SMX can treat selected susceptible urinary infections when local resistance, culture, patient factors, and renal function support use", "Use current syndrome guidance and susceptibility rather than historical familiarity", "Assess upper versus lower tract, severity, pregnancy, kidney function, local resistance, culture, and alternatives", "Using TMP-SMX empirically wherever it once worked", "Resistance and patient risk can invalidate a familiar regimen"),
  c("purulent skin infection", "clinical-selection", "TMP-SMX can cover selected susceptible community-associated MRSA but has unreliable streptococcal activity", "Pair drainage and phenotype assessment with appropriate streptococcal coverage when needed", "Assess abscess, purulence, cellulitis pattern, systemic illness, culture, source control, and alternatives", "Using TMP-SMX monotherapy for every nonpurulent cellulitis", "Syndrome phenotype determines whether additional coverage is needed"),
  c("Stenotrophomonas infection", "clinical-selection", "Current 2026 IDSA guidance treats TMP-SMX as an alternative component for invasive S. maltophilia rather than automatic preferred monotherapy", "Distinguish colonization from infection and follow current combination or preferred-agent guidance", "Assess invasive disease, site, source, susceptibility, illness severity, organ function, and active partners", "Carrying forward the older preferred-monotherapy shortcut", "Current evidence and guidance have changed the treatment hierarchy"),
  c("Nocardia and other specialized uses", "clinical-selection", "Nocardia, toxoplasmosis-related pathways, and other specialized uses require organism, site, immune status, and specialist guidance", "Use susceptibility and disease-specific regimens rather than one universal TMP-SMX dose", "Assess organism identification, CNS involvement, immune status, severity, combination needs, and duration", "Borrowing a UTI dose for disseminated nocardiosis", "Specialized infections require different intensity and duration"),
  c("renal elimination", "renal-pk", "Both components rely substantially on renal handling and exposure rises as kidney function declines", "Use the exact label and current renal assessment to adjust dose or interval", "Assess creatinine trend, estimated clearance, dialysis, urine output, indication, and toxicity", "Using a stale serum creatinine for high-dose therapy", "Changing renal function can rapidly change exposure"),
  c("pseudo-creatinine rise", "renal-pk", "Trimethoprim inhibits tubular creatinine secretion and can raise serum creatinine without an equivalent fall in filtration", "Compare timing, urine findings, cystatin C when useful, potassium, volume, and the whole kidney picture", "Assess baseline and repeat creatinine, urine output, urinalysis, potassium, cystatin C, and nephrotoxins", "Calling every creatinine rise harmless pseudo-AKI", "TMP-SMX can also cause true kidney injury"),
  c("true kidney injury", "renal-pk", "TMP-SMX can cause true renal injury through volume loss, interstitial nephritis, crystal-related injury, or other mechanisms", "Stop and investigate when the clinical pattern supports true injury", "Assess volume, rash, fever, eosinophilia, urine sediment, crystals, obstruction, nephrotoxins, and trend", "Attributing oliguria and active sediment to secretion inhibition", "Pseudo-creatinine rise does not cause oliguria or inflammatory urine findings"),
  c("hyperkalemia", "electrolytes", "Trimethoprim can reduce distal potassium secretion through an amiloride-like effect", "Check potassium early in high-risk patients and change therapy when risk is unacceptable", "Assess baseline potassium, kidney function, dose, ACE inhibitor, ARB, MRA, potassium products, and follow-up time", "Waiting until the end of therapy to monitor a high-risk combination", "Severe hyperkalemia can develop within a short course"),
  c("hyponatremia", "electrolytes", "High-dose trimethoprim can promote natriuresis and clinically important hyponatremia", "Monitor sodium and volume status during high-intensity therapy", "Assess sodium trend, volume, dose, renal function, diuretics, intake, and neurologic symptoms", "Assuming every low sodium value is SIADH", "Trimethoprim can produce a salt-losing pattern"),
  c("fluid and crystalluria plan", "electrolytes", "Adequate hydration and renal monitoring help reduce concentrated urinary exposure and crystal risk", "Create an individualized fluid plan and avoid automatic overhydration in heart or kidney failure", "Assess intake, urine output, volume status, heart failure, kidney function, route, and dose", "Giving a universal large fluid load regardless of congestion", "Hydration must fit the whole patient"),
  c("bone-marrow suppression", "hematologic-safety", "Folate antagonism and idiosyncratic toxicity can cause leukopenia, thrombocytopenia, or megaloblastic change", "Obtain timed CBC monitoring for high dose, prolonged therapy, folate deficiency, renal dysfunction, or interacting myelotoxins", "Assess baseline counts, trend, bruising, infection, folate status, dose, duration, and interacting drugs", "Waiting for pancytopenia before checking a high-risk patient", "Exposure and host reserve determine marrow risk"),
  c("immune thrombocytopenia", "hematologic-safety", "TMP-SMX can cause abrupt immune-mediated thrombocytopenia that may be life threatening", "Stop the drug and urgently evaluate bleeding or a severe platelet decline", "Assess petechiae, mucosal bleeding, platelet trend, timing, prior exposure, coagulation, and alternatives", "Continuing through new purpura", "Re-exposure can intensify immune destruction"),
  c("G6PD-related hemolysis", "hematologic-safety", "Sulfonamide exposure can precipitate dose-related hemolysis in susceptible G6PD-deficient patients", "Choose an alternative or monitor according to disease need and patient risk", "Assess G6PD status, ancestry, dose, hemoglobin, bilirubin, LDH, haptoglobin, and symptoms", "Assuming a normal baseline hemoglobin eliminates risk", "Oxidative hemolysis can emerge after exposure"),
  c("HLH signal", "hematologic-safety", "Current BACTRIM labeling reports hemophagocytic lymphohistiocytosis as a rare life-threatening immune activation syndrome", "Stop and urgently evaluate compatible systemic inflammation", "Assess persistent fever, cytopenias, hepatosplenomegaly, ferritin, triglycerides, liver tests, and coagulation", "Calling persistent fever with cytopenias a routine drug rash", "HLH requires rapid recognition and specialist care"),
  c("severe cutaneous reaction", "hypersensitivity", "TMP-SMX can cause SJS, TEN, DRESS, AGEP, and other severe hypersensitivity reactions", "Stop immediately and arrange urgent evaluation for mucosal, blistering, facial, febrile, or organ-involved reactions", "Assess rash morphology, mucosa, fever, facial edema, eosinophilia, liver, kidney, lung, and timing", "Rechallenging after SJS or TEN", "Life-threatening reactions require permanent avoidance"),
  c("sulfonamide allergy history", "hypersensitivity", "A reported sulfonamide allergy requires phenotype, timing, severity, culprit, and tolerance history", "Distinguish mild remote exanthem from anaphylaxis, severe cutaneous reaction, organ injury, or unknown history", "Assess culprit, symptoms, latency, treatment, hospitalization, mucosa, organs, and later exposures", "Using the word sulfa as a complete allergy assessment", "The reaction phenotype determines risk and next steps"),
  c("antibiotic and nonantibiotic sulfonamides", "hypersensitivity", "Allergy to a sulfonamide antibiotic does not automatically predict immunologic cross-reactivity with every nonantibiotic sulfonamide", "Evaluate the exact structure, prior reaction, alternative, and patient risk", "Assess culprit class, arylamine features, reaction severity, current drug, and alternatives", "Banning all thiazides, loops, and sulfonylureas solely from the word sulfa", "Broad avoidance can deny useful therapy without evidence of universal cross-reactivity"),
  c("warfarin interaction", "interactions", "Sulfamethoxazole inhibits CYP2C9 and TMP-SMX can markedly increase warfarin effect and bleeding risk", "Choose an alternative when possible or arrange an active INR and dose-management plan", "Assess indication, baseline INR, bleeding, diet, liver function, duration, and anticoagulation ownership", "Telling the patient only to watch for bruising", "A high-risk interaction requires timed monitoring and action thresholds"),
  c("methotrexate interaction", "interactions", "TMP-SMX can increase methotrexate exposure and add antifolate and marrow toxicity", "Avoid concurrent use when possible and urgently evaluate cytopenia, mucositis, or kidney injury", "Assess methotrexate indication, dose, timing, renal function, counts, mucosa, and alternatives", "Using TMP-SMX routinely for infection prophylaxis without reconciling methotrexate", "Combined transport and antifolate effects can be life threatening"),
  c("dofetilide interaction", "interactions", "Trimethoprim raises dofetilide exposure through renal transporter inhibition and the combination is contraindicated", "Choose another anti-infective before the first dose", "Assess dofetilide, QTc, renal function, rhythm history, electrolytes, and alternatives", "Relying on ECG monitoring to permit a contraindicated combination", "Excess dofetilide can cause torsade de pointes"),
  c("phenytoin and glucose interactions", "interactions", "TMP-SMX can increase phenytoin exposure and potentiate selected glucose-lowering drugs", "Plan concentration, neurologic, and glucose monitoring or choose an alternative", "Assess phenytoin level and symptoms, diabetes drugs, intake, renal function, glucose, and duration", "Ignoring falls or hypoglycemia during therapy", "CYP and transporter inhibition can turn a short course into toxicity"),
  c("special-population synthesis", "special-populations", "Infant, pregnancy, lactation, older-adult, kidney, liver, folate, and G6PD decisions are product and disease specific", "Use current narrative labeling and syndrome guidance to compare exposure with untreated disease risk", "Assess age, developmental or gestational timing, infant factors, organ function, folate reserve, G6PD, interactions, and alternatives", "Applying one obsolete category or blanket rule to every patient", "The exact disease and exposure determine benefit and risk"),
  c("developmental and reproductive risk plan", "special-populations", "Pregnancy, lactation, and early infancy require separate TMP-SMX decisions because folate antagonism, bilirubin displacement concerns, infant maturity, G6PD status, disease severity, and the evidence for alternatives differ by timing and patient", "Define the maternal or infant syndrome, exact exposure window, product and dose, untreated-disease risk, folate plan when supported, fetal or infant monitoring, feeding context, and the reason the selected alternative is adequate or inadequate", "Using a retired pregnancy letter or one blanket class prohibition can either expose a vulnerable infant unnecessarily or withhold effective treatment for a serious maternal infection such as PCP", "A pregnant patient with hypoxemic PCP needs treatment, and an old reference says TMP-SMX is always forbidden in pregnancy", "Use current NIH disease guidance and coordinated maternal-fetal care to treat the life-threatening infection while managing timing-specific folate and fetal considerations", "Developmental safety is a disease, timing, dose, and alternative comparison rather than a universal class verdict"),
  c("complete TMP-SMX plan", "integration", "A complete plan aligns diagnosis, susceptibility, TMP-based dose, renal function, electrolytes, blood counts, interactions, allergy phenotype, monitoring, and exit criteria", "Reassess at culture, response, toxicity, kidney change, and end date", "Assess the whole medication list, laboratories, administration feasibility, special populations, and follow-up", "Writing the tablet count without a monitoring plan", "Safe therapy requires selection and execution to remain connected"),
  c("definitive TMP-SMX reassessment", "integration", "The first useful culture, response, or laboratory checkpoint should confirm that the syndrome and susceptible target still justify TMP-SMX and that the patient is receiving a safe trimethoprim-based exposure", "Verify diagnosis, source control, susceptibility, dose and adherence, then classify creatinine change, potassium and sodium effects, blood counts, rash, interacting-drug exposure, and clinical response before continuing, narrowing, changing, or stopping", "Assess culture quality, infection site, severity, source control, TMP milligrams, renal trajectory, urine findings, potassium, sodium, CBC, allergy findings, interaction monitoring, symptom trajectory, duration, and alternatives", "Calling every creatinine rise pseudo-AKI or every persistent symptom resistance can conceal true kidney injury, toxicity, inadequate source control, missing coverage, or a different diagnosis", "Definitive therapy remains appropriate only when microbiologic purpose, reproducible exposure, patient safety, and a documented endpoint remain aligned"),
];

const dimensions = [["principle", "Which principle best characterizes"], ["action", "Which clinical action best applies to"], ["assessment", "Which assessment is most appropriate for"], ["hazard", "Which reasoning hazard is most important to prevent with"]];
const distractors = (index, field) => [7, 13, 19].map((offset) => concepts[(index + offset) % concepts.length][field]);
const generated = concepts.flatMap((item, index) => dimensions.map(([field, stem], dimension) => ({ id: `sulfonamide-trimethoprim-pharmacology-${String(index * 4 + dimension + 1).padStart(3, "0")}`, lesson: item.lesson, question: `${stem} ${item.name}?`, choices: [item[field], ...distractors(index, field)], answer: 0, rationale: item.why, reviewHref: `#${item.lesson}` })));

const cases = [
  ["133", "product-dosing", "A 70 kg patient needs TMP 15 mg/kg/day divided every eight hours. How much TMP is due per dose?", ["350 mg TMP per dose", "175 mg TMP per dose", "1,050 mg TMP per dose", "5,250 mg TMP per dose"], "The daily TMP target is 1,050 mg, divided into three doses of 350 mg."],
  ["134", "electrolytes", "A patient with CKD takes lisinopril and spironolactone. TMP-SMX is proposed. What is the most important immediate safety plan?", ["Choose an alternative when possible or arrange early potassium and renal monitoring", "Wait until therapy ends to measure potassium", "Add potassium supplementation", "Double spironolactone"], "Kidney disease and two potassium-raising drugs create a dangerous hyperkalemia stack."],
  ["135", "renal-pk", "Serum creatinine rises after TMP-SMX, but urine output is stable, urinalysis is bland, potassium is normal, and cystatin C is unchanged. What is most likely?", ["Trimethoprim-related inhibition of tubular creatinine secretion", "Obstructive anuria", "Immune thrombocytopenia", "Torsade de pointes"], "Trimethoprim can increase serum creatinine without an equivalent decline in filtration."],
  ["136", "clinical-selection", "An older note lists TMP-SMX as preferred monotherapy for invasive S. maltophilia. What should the learner do?", ["Use current 2026 IDSA guidance, which places TMP-SMX as an alternative component rather than automatic preferred monotherapy", "Keep the older hierarchy without review", "Treat colonization automatically", "Use ceftazidime regardless of susceptibility"], "Current guidance has changed and must supersede the legacy shortcut."],
].map(([id, lesson, question, choices, rationale]) => ({ id: `sulfonamide-trimethoprim-pharmacology-${id}`, lesson, question, choices, answer: 0, rationale, reviewHref: `#${lesson}` }));

const electrolyteQuestionRepairs = {
  "sulfonamide-trimethoprim-pharmacology-061": {
    "id": "sulfonamide-trimethoprim-pharmacology-061",
    "lesson": "electrolytes",
    "question": "Which renal effect explains trimethoprim-associated hyperkalemia?",
    "choices": [
      "Trimethoprim can reduce distal potassium secretion through an amiloride-like effect",
      "Trimethoprim directly increases distal potassium secretion",
      "Hyperkalemia occurs only when the infecting organism is resistant",
      "Recommended antibiotic doses prevent any effect on renal potassium handling"
    ],
    "answer": 0,
    "rationale": "The amiloride-like distal sodium-channel effect reduces potassium secretion. This is a renal drug effect rather than evidence of bacterial resistance. The current label warns that susceptible patients can develop hyperkalemia even at recommended doses.",
    "reviewHref": "#electrolytes"
  },
  "sulfonamide-trimethoprim-pharmacology-062": {
    "id": "sulfonamide-trimethoprim-pharmacology-062",
    "lesson": "electrolytes",
    "question": "Which clinical action best manages TMP-SMX potassium risk in a high-risk patient?",
    "choices": [
      "Check potassium early in high-risk patients and change therapy when risk is unacceptable",
      "Measure potassium only after the antibiotic course ends",
      "Keep treatment unchanged despite a significant potassium abnormality",
      "Add a potassium supplement routinely to counter the antibiotic effect"
    ],
    "answer": 0,
    "rationale": "Plan potassium follow-up while the patient is receiving treatment, review kidney function and interacting medicines, and act on significant abnormalities. Waiting until the final dose, continuing through a significant abnormality or adding potassium does not address potassium-retention risk.",
    "reviewHref": "#electrolytes"
  },
  "sulfonamide-trimethoprim-pharmacology-063": {
    "id": "sulfonamide-trimethoprim-pharmacology-063",
    "lesson": "electrolytes",
    "question": "Which assessment best addresses TMP-SMX-associated hyperkalemia risk?",
    "choices": [
      "Assess baseline potassium, kidney function, dose, ACE inhibitor, ARB, MRA, potassium products, and follow-up time",
      "Use the prescribed tablet strength alone to determine potassium safety",
      "Review creatinine but omit baseline potassium and potassium-raising medicines",
      "Confirm a normal baseline potassium and omit any follow-up plan"
    ],
    "answer": 0,
    "rationale": "Potassium risk reflects the result, kidney function, dose and combined medicines or products. A tablet name, creatinine alone or one normal baseline cannot replace the full assessment and a timed follow-up plan.",
    "reviewHref": "#electrolytes"
  },
  "sulfonamide-trimethoprim-pharmacology-064": {
    "id": "sulfonamide-trimethoprim-pharmacology-064",
    "lesson": "electrolytes",
    "question": "Which monitoring error is most important to prevent in a high-risk TMP-SMX potassium combination?",
    "choices": [
      "Waiting until the end of therapy to monitor a high-risk combination",
      "Reviewing kidney function and baseline potassium before treatment",
      "Arranging repeat potassium during the antibiotic course",
      "Assigning a clinician to review and act on follow-up results"
    ],
    "answer": 0,
    "rationale": "The error is postponing surveillance until treatment is finished. Risk assessment, testing during exposure and clear review ownership help detect harm while the plan can still be changed.",
    "reviewHref": "#electrolytes"
  },
  "sulfonamide-trimethoprim-pharmacology-065": {
    "id": "sulfonamide-trimethoprim-pharmacology-065",
    "lesson": "electrolytes",
    "question": "Which principle best explains a possible sodium effect during high-dose trimethoprim therapy?",
    "choices": [
      "High-dose trimethoprim can promote natriuresis and clinically important hyponatremia",
      "Every low sodium result during TMP-SMX proves SIADH",
      "Trimethoprim cannot affect sodium excretion because it is an antibiotic",
      "Higher trimethoprim exposure guarantees that serum sodium stays normal"
    ],
    "answer": 0,
    "rationale": "Primary transport evidence and clinical observations support a sodium-losing effect, and the label warns about serious hyponatremia. A low sodium result still requires a clinical assessment; neither SIADH nor a trimethoprim salt-losing mechanism follows from the drug name alone.",
    "reviewHref": "#electrolytes"
  },
  "sulfonamide-trimethoprim-pharmacology-066": {
    "id": "sulfonamide-trimethoprim-pharmacology-066",
    "lesson": "electrolytes",
    "question": "Which clinical action best addresses sodium risk during high-intensity TMP-SMX therapy?",
    "choices": [
      "Monitor sodium and volume status during high-intensity therapy",
      "Diagnose SIADH from the first low sodium value without reviewing volume",
      "Wait until treatment ends before evaluating symptomatic hyponatremia",
      "Apply the same fluid restriction to every TMP-SMX sodium abnormality"
    ],
    "answer": 0,
    "rationale": "Follow sodium together with symptoms and volume status. The current label requires evaluation and appropriate correction for symptomatic hyponatremia. A fixed diagnosis or universal fluid restriction can overlook a salt-losing presentation.",
    "reviewHref": "#electrolytes"
  },
  "sulfonamide-trimethoprim-pharmacology-067": {
    "id": "sulfonamide-trimethoprim-pharmacology-067",
    "lesson": "electrolytes",
    "question": "Which assessment best evaluates a falling sodium result during TMP-SMX treatment?",
    "choices": [
      "Assess sodium trend, volume, dose, renal function, diuretics, intake, and neurologic symptoms",
      "Use one sodium value and assume the antibiotic proves the mechanism",
      "Review diuretic names but omit sodium trend, intake and volume",
      "Review kidney function only and disregard neurologic symptoms"
    ],
    "answer": 0,
    "rationale": "Use the sodium trajectory and complete dose, renal, medicine, intake, symptom and volume context. One value or one category of data cannot distinguish the relevant mechanisms or determine urgency.",
    "reviewHref": "#electrolytes"
  },
  "sulfonamide-trimethoprim-pharmacology-068": {
    "id": "sulfonamide-trimethoprim-pharmacology-068",
    "lesson": "electrolytes",
    "question": "Which diagnostic error should be avoided when sodium falls during TMP-SMX therapy?",
    "choices": [
      "Assuming every low sodium value is SIADH",
      "Reviewing the sodium trajectory and volume status",
      "Considering a trimethoprim-related sodium-losing effect",
      "Evaluating symptoms and other sodium-altering medicines"
    ],
    "answer": 0,
    "rationale": "Automatically labeling every low sodium result SIADH ignores alternative mechanisms. Considering drug-related salt loss, reviewing the trajectory and medicines, and assessing symptoms and volume are appropriate parts of the evaluation.",
    "reviewHref": "#electrolytes"
  },
  "sulfonamide-trimethoprim-pharmacology-069": {
    "id": "sulfonamide-trimethoprim-pharmacology-069",
    "lesson": "electrolytes",
    "question": "Which principle best supports a TMP-SMX fluid and crystalluria plan?",
    "choices": [
      "Adequate hydration and renal monitoring help reduce concentrated urinary exposure and crystal risk",
      "A large fixed fluid load is appropriate regardless of congestion",
      "A normal baseline creatinine eliminates the need to assess urine output",
      "Adequate water intake makes electrolyte follow-up unnecessary"
    ],
    "answer": 0,
    "rationale": "The book identifies crystalluria and advises water; the label specifies adequate fluid intake and urine output. Hydration advice should fit volume and kidney context, and it does not eliminate the need for electrolyte or renal surveillance.",
    "reviewHref": "#electrolytes"
  },
  "sulfonamide-trimethoprim-pharmacology-070": {
    "id": "sulfonamide-trimethoprim-pharmacology-070",
    "lesson": "electrolytes",
    "question": "Which clinical action best applies to TMP-SMX hydration counseling?",
    "choices": [
      "Create an individualized fluid plan and avoid automatic overhydration in heart or kidney failure",
      "Prescribe a universal large fluid volume without assessing congestion",
      "Withhold all fluid automatically from every patient with CKD",
      "Replace the potassium and sodium plan with advice to drink more water"
    ],
    "answer": 0,
    "rationale": "Make adequate hydration compatible with the patient's intake, output, kidney reserve and volume constraints. Neither indiscriminate loading nor automatic total fluid avoidance is an individualized plan; water advice cannot replace laboratory follow-up.",
    "reviewHref": "#electrolytes"
  },
  "sulfonamide-trimethoprim-pharmacology-071": {
    "id": "sulfonamide-trimethoprim-pharmacology-071",
    "lesson": "electrolytes",
    "question": "Which assessment best informs TMP-SMX hydration and crystalluria counseling?",
    "choices": [
      "Assess intake, urine output, volume status, heart failure, kidney function, route, and dose",
      "Use the tablet name alone and omit volume or kidney assessment",
      "Check reported thirst only and omit urine output and congestion",
      "Treat a normal initial potassium as proof that any fluid load is suitable"
    ],
    "answer": 0,
    "rationale": "Review actual intake, urine output, volume status, heart failure and kidney function alongside product route and exposure. Tablet identity, thirst alone or potassium alone does not establish a suitable fluid plan.",
    "reviewHref": "#electrolytes"
  },
  "sulfonamide-trimethoprim-pharmacology-072": {
    "id": "sulfonamide-trimethoprim-pharmacology-072",
    "lesson": "electrolytes",
    "question": "Which error should be prevented in TMP-SMX fluid counseling?",
    "choices": [
      "Giving a universal large fluid load regardless of congestion",
      "Checking congestion and urine output before advising fluid intake",
      "Reconciling the fluid advice with kidney function and prescribed exposure",
      "Keeping potassium and sodium follow-up in the treatment plan"
    ],
    "answer": 0,
    "rationale": "An automatic large fluid load disregards congestion and limited kidney reserve. Checking volume and output, reconciling exposure and maintaining electrolyte surveillance are appropriate safeguards.",
    "reviewHref": "#electrolytes"
  },
  "sulfonamide-trimethoprim-pharmacology-134": {
    "id": "sulfonamide-trimethoprim-pharmacology-134",
    "lesson": "electrolytes",
    "question": "A patient with CKD takes lisinopril and spironolactone. TMP-SMX is proposed. What is the most important immediate safety plan?",
    "choices": [
      "Choose an alternative when possible or arrange early potassium and renal monitoring",
      "Wait until therapy ends to measure potassium",
      "Add potassium supplementation",
      "Double spironolactone"
    ],
    "answer": 0,
    "rationale": "CKD, lisinopril and spironolactone create a strong potassium-retention risk when TMP-SMX is proposed. Review an effective alternative when feasible, or arrange potassium and renal follow-up during treatment with a named reviewer and escalation plan. Recommended antibiotic dosing does not remove the risk. The current label requires action on significant electrolyte or renal abnormalities.",
    "reviewHref": "#electrolytes"
  }
};

export const sulfonamideTrimethoprimPharmacologyQuestionBank = [...generated, ...cases].map((q) => electrolyteQuestionRepairs[q.id] || q);
