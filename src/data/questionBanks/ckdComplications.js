const concepts = [
  { name: "risk-based complication surveillance", lesson: "surveillance-and-systems-thinking", principle: "Complication monitoring becomes more frequent as GFR falls, progression accelerates, abnormalities appear, or treatment changes.", action: "Choose tests and intervals according to risk, consequence, and whether the result changes care.", assessment: "Review G category, trajectory, prior abnormalities, symptoms, medications, comorbidity, and upcoming treatment decisions.", hazard: "Using one fixed laboratory panel and interval for every CKD stage creates both missed risk and unnecessary testing.", why: "Surveillance value depends on the probability and consequence of an actionable abnormality." },
  { name: "trend interpretation", lesson: "surveillance-and-systems-thinking", principle: "Serial hemoglobin, iron, mineral, electrolyte, weight, and symptom patterns are more informative than one isolated value.", action: "Confirm unexpected results and reconstruct the clinical and treatment timeline before intervening.", assessment: "Review assay and sample quality, prior values, illness, inflammation, volume, nutrition, blood loss, medicines, and symptoms.", hazard: "Treating biologic or analytic variation can cause unnecessary medication and obscure the real mechanism.", why: "CKD complication markers vary with several nonkidney influences." },
  { name: "diagnostic closure in CKD", lesson: "surveillance-and-systems-thinking", principle: "CKD raises the probability of complications but does not prove that every anemia, electrolyte, or symptom abnormality is kidney-mediated.", action: "Maintain a differential and investigate findings that are rapid, severe, disproportionate, or mechanistically inconsistent.", assessment: "Review bleeding, malignancy, marrow and endocrine disease, infection, liver disease, medications, nutrition, and kidney trajectory.", hazard: "Attributing rapid severe anemia to erythropoietin deficiency can miss gastrointestinal bleeding or marrow disease.", why: "A common comorbidity should not replace causal reasoning." },
  { name: "integrated complication management", lesson: "surveillance-and-systems-thinking", principle: "Anemia, iron, potassium, acidosis, volume, nutrition, bone, cardiovascular risk, and medications interact.", action: "Sequence interventions and monitoring so that treatment of one complication does not worsen another.", assessment: "Review shared mechanisms, treatment interactions, symptom priority, patient goals, access, and responsible clinicians.", hazard: "Treating each laboratory value independently can create contradictory restrictions and medication changes.", why: "CKD complications form a connected physiologic and care system." },
  { name: "anemia differential in CKD", lesson: "anemia-and-iron-management", principle: "CKD anemia can reflect erythropoietin deficiency, iron restriction, inflammation, blood loss, shortened red-cell survival, nutrition, medications, or another disease.", action: "Confirm and characterize anemia before selecting iron or erythropoiesis therapy.", assessment: "Review CBC indices, reticulocytes, ferritin, TSAT, B12, folate, blood loss, hemolysis, inflammation, thyroid, medicines, and marrow clues.", hazard: "Starting an ESA without evaluating a new microcytic anemia can delay diagnosis of ongoing blood loss.", why: "Kidney disease is one contributor within a broad anemia differential." },
  { name: "ferritin and TSAT", lesson: "anemia-and-iron-management", principle: "Ferritin estimates iron stores and is inflammation-sensitive, while TSAT estimates circulating iron available for erythropoiesis.", action: "Interpret both markers with hemoglobin, inflammation, dialysis status, symptoms, and treatment response.", assessment: "Review ferritin, TSAT, CRP or illness context, blood loss, iron exposure, ESA or HIF-PHI use, and serial response.", hazard: "Using ferritin alone can miss functional iron restriction during inflammation.", why: "Storage and availability are distinct parts of iron physiology." },
  { name: "iron initiation without hemodialysis", lesson: "anemia-and-iron-management", principle: "KDIGO 2026 suggests iron when ferritin is below 100 ng/mL with TSAT below 40%, or ferritin is 100 to 300 ng/mL with TSAT below 25%, in anemia with CKD not receiving hemodialysis.", action: "Individualize oral or IV therapy by severity, tolerance, efficacy, access, preference, and goals.", assessment: "Review hemoglobin, ferritin, TSAT, symptoms, prior oral response, GI tolerance, infection, venous access, cost, and follow-up.", hazard: "Applying hemodialysis thresholds and route automatically to nondialysis CKD ignores setting-specific evidence and values.", why: "Iron thresholds and delivery differ by kidney replacement setting." },
  { name: "iron therapy boundaries", lesson: "anemia-and-iron-management", principle: "Routine iron is generally withheld when ferritin exceeds 700 ng/mL or TSAT is at least 40%, with individualized exceptions.", action: "Pause, reassess inflammation, iron exposure, response, blood loss, and the need for continued therapy.", assessment: "Review trends, recent iron doses, ESA need, infection, transfusions, liver disease, and laboratory timing.", hazard: "Continuing automatic iron despite high indices can increase exposure without a defined benefit.", why: "Iron therapy should meet an erythropoietic goal while limiting potential excess." },
  { name: "ESA strategy", lesson: "anemia-and-iron-management", principle: "ESA decisions balance symptoms and transfusion avoidance against cardiovascular, thrombotic, stroke, malignancy, and access risks.", action: "Correct reversible causes, individualize initiation, and use the lowest effective dose without targeting normal hemoglobin.", assessment: "Review symptoms, hemoglobin trajectory, iron, transfusion risk, transplant candidacy, pressure, thrombosis, stroke, cancer, and treatment setting.", hazard: "Pursuing a normal hemoglobin with high ESA exposure can increase serious cardiovascular and thrombotic harm.", why: "Higher hemoglobin targets have not produced a favorable benefit-risk balance in CKD." },
  { name: "HIF-PHI use", lesson: "anemia-and-iron-management", principle: "HIF-PHIs stimulate an endogenous hypoxia response but have product-specific indications and safety limitations.", action: "Use current labeling and guideline criteria rather than treating the class as interchangeable with ESAs.", assessment: "Review dialysis duration, thrombotic and cardiovascular risk, malignancy, liver status, interactions, hemoglobin, iron, and alternatives.", hazard: "Using daprodustat in a nondialysis patient in the United States falls outside its labeled population.", why: "The current US indication is restricted to adults receiving dialysis for at least four months." },
  { name: "CKD-MBD physiology", lesson: "mineral-bone-and-vascular-disorder", principle: "Phosphate retention, FGF23, reduced active vitamin D, calcium balance, and PTH alter bone turnover and calcification as CKD progresses.", action: "Interpret the linked pathway before treating one biochemical value.", assessment: "Review calcium, phosphate, PTH, alkaline phosphatase, vitamin D, GFR, diet, binders, calcification, fractures, and trends.", hazard: "Treating one PTH value without calcium and phosphate context can push bone turnover in the wrong direction.", why: "CKD-MBD is a coupled endocrine, skeletal, and vascular disorder." },
  { name: "CKD-MBD monitoring", lesson: "mineral-bone-and-vascular-disorder", principle: "Calcium, phosphate, PTH, and alkaline phosphatase monitoring begins by CKD G3a and intensifies with stage, abnormality, and progression.", action: "Set an interval based on the pattern and expected consequence of treatment.", assessment: "Review G category, prior values, treatment, symptoms, fracture risk, calcification, nutrition, and planned interventions.", hazard: "Applying dialysis-frequency monitoring to stable G3a disease can add burden without changing care.", why: "Monitoring frequency should track the probability and pace of CKD-MBD change." },
  { name: "secondary hyperparathyroidism", lesson: "mineral-bone-and-vascular-disorder", principle: "A rising PTH in nondialysis CKD should prompt evaluation of phosphate, calcium, vitamin D, intake, and CKD progression before routine active vitamin D therapy.", action: "Correct modifiable drivers and follow the trend rather than normalizing one value immediately.", assessment: "Review serial PTH, calcium, phosphate, alkaline phosphatase, 25-hydroxyvitamin D, diet, binders, and GFR.", hazard: "Routine calcitriol for a modest isolated PTH elevation can increase calcium and phosphate without proven outcome benefit.", why: "Adaptive PTH change and modifiable drivers must be separated from severe progressive hyperparathyroidism." },
  { name: "phosphate-lowering therapy", lesson: "mineral-bone-and-vascular-disorder", principle: "Phosphate-lowering therapy targets progressively or persistently elevated phosphate rather than preemptively treating normal values.", action: "Address source-aware diet and use binders or dialysis clearance when indicated, while monitoring calcium load and nutrition.", assessment: "Review serial phosphate, calcium, PTH, food additives, protein intake, binder timing and adherence, dialysis, and calcification.", hazard: "Severe dietary restriction can reduce protein intake and worsen nutrition while phosphate remains driven by additives or dialysis limits.", why: "Therapy should correct overt excess without trading it for malnutrition or calcium harm." },
  { name: "bone and fracture assessment", lesson: "mineral-bone-and-vascular-disorder", principle: "DXA predicts fracture in CKD and is useful when its result will change prevention or treatment.", action: "Assess falls, fractures, bone density, turnover clues, and whether biopsy is needed before a high-stakes choice.", assessment: "Review fracture history, DXA, calcium, phosphate, PTH, alkaline phosphatase, vitamin D, steroids, menopause, falls, and treatment risk.", hazard: "Assuming every low BMD result reveals the type of renal osteodystrophy confuses density with turnover.", why: "DXA estimates fracture risk but does not classify bone histology." },
  { name: "acute versus chronic hyperkalemia", lesson: "potassium-and-acid-base-disorders", principle: "Severe, rapidly rising, symptomatic, or ECG-associated hyperkalemia requires acute stabilization and removal, while chronic control addresses recurrence.", action: "Confirm artifact when possible without delaying cardiac stabilization in a dangerous presentation.", assessment: "Review potassium trend, hemolysis, ECG, weakness, glucose, acid-base state, tissue breakdown, drugs, excretion, and access to emergency care.", hazard: "A normal ECG does not exclude serious risk from severe or rapidly changing potassium.", why: "ECG sensitivity is incomplete and chronic measures act too slowly for immediate danger." },
  { name: "chronic hyperkalemia contributors", lesson: "potassium-and-acid-base-disorders", principle: "RAAS drugs, MRA therapy, NSAIDs, trimethoprim, supplements, salt substitutes, constipation, acidosis, hyperglycemia, and reduced excretion can combine.", action: "Correct reversible contributors and preserve outcome-improving therapy when safe measures can control potassium.", assessment: "Review full medication and diet history, bowel pattern, glucose, bicarbonate, volume, GFR, urine, and serial potassium.", hazard: "Permanently stopping RAAS therapy after one mild result can sacrifice kidney and cardiovascular benefit.", why: "Potassium risk can often be mitigated through several complementary mechanisms." },
  { name: "potassium dietary counseling", lesson: "potassium-and-acid-base-disorders", principle: "Dietary management should target actual sources, processing, portions, and salt substitutes while preserving fiber and nutritional quality.", action: "Use a dietitian and individualized substitutions rather than banning all plant foods.", assessment: "Review dietary recall, processed foods, additives, cultural foods, constipation, food access, diabetes, nutrition, and potassium trajectory.", hazard: "Indiscriminate restriction can worsen constipation and diet quality, which may undermine potassium control and health.", why: "Potassium bioavailability and nutritional value vary by food source and processing." },
  { name: "metabolic acidosis in CKD", lesson: "potassium-and-acid-base-disorders", principle: "Reduced net acid excretion can cause hyperchloremic metabolic acidosis and contribute to muscle, bone, potassium, and progression problems.", action: "Confirm the disorder and consider diet or pharmacologic alkali for clinically important acidosis with monitored response.", assessment: "Review repeat bicarbonate, blood gas when needed, anion gap, potassium, diarrhea, medications, nutrition, pressure, volume, and respiratory compensation.", hazard: "Treating one low total CO2 without confirming the acid-base disorder can miss respiratory alkalosis or sample error.", why: "Serum total CO2 is a screening measure and the mechanism must be established." },
  { name: "alkali therapy safety", lesson: "potassium-and-acid-base-disorders", principle: "Oral alkali can improve bicarbonate but adds sodium and can affect pressure, volume, potassium, and pill burden.", action: "Select and titrate therapy with explicit bicarbonate, weight, edema, pressure, and electrolyte follow-up.", assessment: "Review sodium sensitivity, heart failure, edema, pressure, potassium, GI tolerance, medication burden, and dietary acid load.", hazard: "Escalating sodium bicarbonate without volume monitoring can worsen congestion.", why: "Correction of acidosis must not destabilize cardiovascular volume status." },
  { name: "CKD volume assessment", lesson: "volume-nutrition-and-metabolic-health", principle: "Congestion is diagnosed from symptoms, examination, weight, pressure, cardiac context, intake, urine, and response rather than edema alone.", action: "Define the volume phenotype and a measurable decongestion target before escalating diuretics.", assessment: "Review orthopnea, JVP, edema, weight trend, lungs, pressure, sodium intake, cardiac function, urine, and diuretic exposure.", hazard: "Assuming every edema patient is intravascularly overloaded can harm patients with low effective arterial volume.", why: "Interstitial edema and effective circulatory volume are related but not identical." },
  { name: "diuretic resistance in CKD", lesson: "volume-nutrition-and-metabolic-health", principle: "Poor response can reflect underdosing, reduced absorption, nonadherence, sodium intake, low perfusion, distal adaptation, or incorrect diagnosis.", action: "Measure urine and weight response, optimize loop delivery, and add sequential blockade selectively with electrolyte monitoring.", assessment: "Review dose, route, timing, adherence, gut edema, sodium, urine output, weight, pressure, GFR, electrolytes, and interacting drugs.", hazard: "Calling resistance without measuring response can trigger unsafe dose escalation.", why: "A mechanism-specific assessment identifies whether delivery, nephron response, or diagnosis is limiting." },
  { name: "protein-energy wasting", lesson: "volume-nutrition-and-metabolic-health", principle: "Poor intake, inflammation, acidosis, dialysis losses, restrictions, depression, and social barriers can produce muscle and energy depletion.", action: "Use a multidimensional nutrition and function assessment and correct modifiable drivers.", assessment: "Review weight and intake trends, muscle and fat stores, strength, appetite, symptoms, inflammation, acidosis, dialysis, dental health, depression, and food access.", hazard: "Using serum albumin alone as a nutrition diagnosis confuses inflammation and volume with intake.", why: "Protein-energy wasting is a clinical syndrome requiring several domains of evidence." },
  { name: "uremic syndrome", lesson: "uremia-symptoms-and-advanced-care", principle: "Uremia is a clinical syndrome of toxin accumulation and systemic dysfunction rather than a specific BUN or eGFR threshold.", action: "Assess symptom trajectory, reversible causes, failed homeostasis, nutrition, function, and kidney replacement options.", assessment: "Review nausea, appetite, weight, cognition, neuropathy, pruritus, sleep, bleeding, pericarditis, volume, electrolytes, medications, and goals.", hazard: "Waiting for an arbitrary laboratory threshold can delay kidney replacement in a symptomatic patient.", why: "The need for kidney support follows clinical consequences and patient priorities." },
  { name: "advanced CKD supportive care", lesson: "uremia-symptoms-and-advanced-care", principle: "Comprehensive conservative kidney management actively treats symptoms, volume, anemia, acidosis, medications, nutrition, psychosocial needs, and future decisions without dialysis.", action: "Offer it alongside transplant and dialysis education with prognosis and patient values made explicit.", assessment: "Review symptom burden, function, frailty, comorbidity, prognosis, home support, cognition, treatment burden, caregiver needs, and goals.", hazard: "Presenting conservative care as no care prevents an informed values-based choice.", why: "Supportive kidney care is an active, structured treatment pathway." },
  { name: "iron initiation in hemodialysis", lesson: "anemia-and-iron-management", principle: "KDIGO 2026 suggests initiating iron in anemia with CKD G5 hemodialysis when ferritin is 500 ng/mL or lower and TSAT is 30% or lower.", action: "Confirm iron indices and clinical context, favor IV delivery in most hemodialysis patients, and monitor response and withholding boundaries.", assessment: "Review hemoglobin, ferritin, TSAT, ESA or HIF-PHI exposure, blood loss, recent iron, infection, hypersensitivity history, access, and treatment goals.", hazard: "Applying nondialysis thresholds to hemodialysis can withhold useful iron or create an incoherent route and monitoring plan.", why: "Iron initiation thresholds and preferred delivery route differ according to kidney replacement setting." },
  { name: "red-cell transfusion strategy in CKD", lesson: "anemia-and-iron-management", principle: "Transfusion decisions should respond to clinical need rather than a universal hemoglobin number and should account for transplant sensitization and volume risk.", action: "Stabilize urgent symptomatic anemia, identify the cause, and weigh transfusion against iron or erythropoiesis therapy and future transplant plans.", assessment: "Review symptoms, hemodynamics, active bleeding, hemoglobin trajectory, cardiovascular disease, volume, alloimmunization history, transplant candidacy, and time to alternative response.", hazard: "Repeated avoidable transfusions can cause sensitization and complicate future kidney transplantation.", why: "Red-cell transfusion offers rapid oxygen-carrying capacity but has immunologic and volume consequences." },
  { name: "cardiovascular risk in advanced CKD", lesson: "cardiovascular-and-cutaneous-burden", principle: "Atherosclerotic disease, heart failure, arrhythmia, stroke, and sudden death are major competing risks across CKD progression.", action: "Build a coordinated plan for pressure, volume, lipids, diabetes, tobacco exposure, anemia, mineral metabolism, and established cardiovascular disease.", assessment: "Review symptoms, ASCVD, heart failure, rhythm, pressure, volume, diabetes, lipids, smoking, anemia, calcium and phosphate, dialysis status, and medications.", hazard: "Focusing only on kidney failure can miss the outcome most likely to cause morbidity or death first.", why: "Kidney dysfunction amplifies several cardiovascular mechanisms and treatment tradeoffs." },
  { name: "CKD-associated pruritus", lesson: "cardiovascular-and-cutaneous-burden", principle: "CKD-associated pruritus is a diagnosis made after characterizing itch and evaluating dermatologic, systemic, neurologic, medication, and dialysis contributors.", action: "Optimize skin and dialysis care, treat modifiable drivers, and choose renally appropriate symptom therapy based on severity and risk.", assessment: "Review distribution, timing, sleep, excoriations, skin disease, liver and thyroid disease, neuropathy, iron, phosphate, medications, dialysis adequacy, falls, and cognition.", hazard: "Escalating sedating antihistamines or gabapentinoids without renal adjustment can worsen confusion, falls, and respiratory risk.", why: "Pruritus in CKD has several possible mechanisms, while commonly used symptom medicines can accumulate." },
  { name: "calciphylaxis recognition", lesson: "cardiovascular-and-cutaneous-burden", principle: "Severe pain followed by retiform purpura, induration, plaques, or necrotic ulceration in advanced CKD requires urgent evaluation for calciphylaxis.", action: "Coordinate wound, infection, pain, mineral exposure, medication, and kidney replacement assessment without waiting for a single confirmatory laboratory threshold.", assessment: "Review lesion evolution, pain, infection, calcium and phosphate exposure, PTH, warfarin, obesity, diabetes, nutrition, dialysis, and biopsy risk and value.", hazard: "Dismissing severe pain before visible necrosis can delay treatment of a high-mortality disorder.", why: "Pain can precede the classic skin findings, and diagnosis is clinical with selective pathology support." },
];

const dimensions = [["principle", "Which principle best characterizes"], ["action", "Which clinical action best applies to"], ["assessment", "Which assessment is most appropriate for"], ["hazard", "Which reasoning hazard is most important to prevent with"]];
function distractors(index, field) { return [5, 11, 17].map((offset) => concepts[(index + offset) % concepts.length][field]); }
const generatedCkdComplicationsQuestions = concepts.flatMap((concept, conceptIndex) => dimensions.map(([field, prompt], dimensionIndex) => ({
  id: `ckd-complications-${String(conceptIndex * 4 + dimensionIndex + 1).padStart(3, "0")}`,
  question: `${prompt} ${concept.name}?`, choices: [concept[field], ...distractors(conceptIndex, field)], answer: 0, rationale: concept.why, reviewHref: `#${concept.lesson}`,
})));

const reviewedElectrolyteQuestions = [
  {
    "id": "ckd-complications-061",
    "question": "Which principle distinguishes acute treatment from chronic control of hyperkalemia?",
    "choices": [
      "Severe, rapidly rising, symptomatic, or ECG-associated hyperkalemia requires acute stabilization and removal, while chronic control addresses recurrence.",
      "A chronic diet plan provides immediate cardiac stabilization in a dangerous presentation.",
      "Insulin permanently removes excess potassium from the body.",
      "A fall in potassium after shifting eliminates the need to assess recurrence."
    ],
    "answer": 0,
    "rationale": "Acute danger requires prompt stabilization when indicated, potassium shifting and an appropriate removal plan. Chronic measures address recurrence. Calcium does not lower potassium, and shifting does not remove it, so the response must be reassessed.",
    "reviewHref": "#potassium-and-acid-base-disorders"
  },
  {
    "id": "ckd-complications-062",
    "question": "A patient with CKD has a potentially dangerous potassium result. Which action is appropriate?",
    "choices": [
      "Confirm artifact when possible without delaying cardiac stabilization in a dangerous presentation.",
      "Delay all assessment until a repeat sample is available, regardless of symptoms.",
      "Treat every unexpected sample as artifact and discharge the patient.",
      "Use a long-term diet change as the only response to an unstable presentation."
    ],
    "answer": 0,
    "rationale": "Check for artifact and obtain appropriate confirmation while assessing and treating immediate danger. Confirmation is important, but it must not delay stabilization when the presentation is dangerous. Chronic dietary counseling cannot replace acute care.",
    "reviewHref": "#potassium-and-acid-base-disorders"
  },
  {
    "id": "ckd-complications-063",
    "question": "Which assessment best informs urgency and mechanism when potassium is elevated?",
    "choices": [
      "Review potassium trend, hemolysis, ECG, weakness, glucose, acid-base state, tissue breakdown, drugs, excretion, and access to emergency care.",
      "Use the potassium concentration alone and omit symptoms and kidney function.",
      "Review only dietary potassium without checking medications or sample validity.",
      "Assess the ECG once and omit the potassium trend and clinical setting."
    ],
    "answer": 0,
    "rationale": "Interpret the result with its trajectory, symptoms, sample validity, kidney excretion, medicines, glucose and acid-base status. These factors help distinguish artifact, impaired elimination and redistribution. Neither dietary history nor one ECG supplies the entire assessment.",
    "reviewHref": "#potassium-and-acid-base-disorders"
  },
  {
    "id": "ckd-complications-064",
    "question": "Which statement best prevents unsafe interpretation of an ECG in a patient with severe hyperkalemia?",
    "choices": [
      "A normal ECG does not exclude serious risk from severe or rapidly changing potassium.",
      "A normal ECG proves that severe hyperkalemia is harmless.",
      "Absence of weakness rules out dangerous hyperkalemia.",
      "Chronic dietary measures make urgent reassessment unnecessary."
    ],
    "answer": 0,
    "rationale": "The ECG has limited sensitivity: severe hyperkalemia can be present without typical changes. Assess the confirmed potassium result and clinical context rather than using a normal ECG or absent symptoms to dismiss risk. Chronic control does not substitute for urgent assessment.",
    "reviewHref": "#potassium-and-acid-base-disorders"
  },
  {
    "id": "ckd-complications-065",
    "question": "Which principle best explains multiple contributors to chronic hyperkalemia in CKD?",
    "choices": [
      "RAAS drugs, MRA therapy, NSAIDs, trimethoprim, supplements, salt substitutes, constipation, acidosis, hyperglycemia, and reduced excretion can combine.",
      "Diet is the only possible cause when potassium is elevated.",
      "A prescribed medicine cannot contribute if its dose has not recently changed.",
      "Constipation and glucose-related shifts are irrelevant to potassium assessment."
    ],
    "answer": 0,
    "rationale": "Reduced excretion can combine with medicine effects, dietary or supplemental potassium, bowel function, acidosis and glucose-related changes. Review interacting drivers rather than attributing every result to food or assuming a stable prescription cannot contribute.",
    "reviewHref": "#potassium-and-acid-base-disorders"
  },
  {
    "id": "ckd-complications-066",
    "question": "For a stable nonemergent potassium elevation during indicated ACE inhibitor therapy, which action is appropriate?",
    "choices": [
      "Correct reversible contributors and preserve outcome-improving therapy when safe measures can control potassium.",
      "Permanently stop every kidney-protective medicine after one mild result.",
      "Continue unchanged despite uncontrolled hyperkalemia and omit follow-up.",
      "Prescribe a binder and disregard any product-specific withholding rules."
    ],
    "answer": 0,
    "rationale": "Correct reversible contributors and consider appropriate measures that permit safe continuation of an indicated medicine. This approach still requires repeat testing and action on uncontrolled hyperkalemia; a mitigation plan does not waive medicine-specific hold rules.",
    "reviewHref": "#potassium-and-acid-base-disorders"
  },
  {
    "id": "ckd-complications-067",
    "question": "Which assessment best identifies chronic hyperkalemia contributors and a monitored response?",
    "choices": [
      "Review full medication and diet history, bowel pattern, glucose, bicarbonate, volume, GFR, urine, and serial potassium.",
      "Review diet alone and omit nonprescription supplements and salt substitutes.",
      "Review creatinine alone and omit serial potassium, glucose and bowel function.",
      "Review the last potassium result but omit volume, medicines and follow-up."
    ],
    "answer": 0,
    "rationale": "A complete review includes prescribed and nonprescription exposures, diet, bowel function, kidney excretion, glucose, acid-base and volume status, and potassium trajectory. Narrow review can leave a reversible contributor or a monitoring need unidentified.",
    "reviewHref": "#potassium-and-acid-base-disorders"
  },
  {
    "id": "ckd-complications-068",
    "question": "Which statement identifies a reasoning hazard in managing a mild potassium increase during indicated RAAS therapy?",
    "choices": [
      "Permanently stopping RAAS therapy after one mild result can sacrifice kidney and cardiovascular benefit.",
      "Assign repeat potassium testing and a clinician responsible for the result.",
      "Review medicines and salt substitutes before deciding the long-term plan.",
      "Assess whether suitable mitigation can permit safe continuation."
    ],
    "answer": 0,
    "rationale": "Reflex permanent withdrawal after one mild result may sacrifice an indicated treatment before reversible causes are addressed. The other choices describe appropriate follow-up or assessment. Preservation of benefit still depends on controlling potassium safely.",
    "reviewHref": "#potassium-and-acid-base-disorders"
  },
  {
    "id": "ckd-complications-069",
    "question": "Which principle should guide potassium dietary counseling in CKD?",
    "choices": [
      "Dietary management should target actual sources, processing, portions, and salt substitutes while preserving fiber and nutritional quality.",
      "All foods with the same potassium content have identical bioavailability.",
      "Replace every fruit and vegetable with highly processed foods regardless of additives.",
      "Ignore salt substitutes because they cannot contain potassium."
    ],
    "answer": 0,
    "rationale": "Assess actual intake and the bioavailability associated with food sources and processing, including potassium-containing additives and salt substitutes. Individualized substitutions should preserve nutrition and fiber rather than imposing a universal plant-food ban.",
    "reviewHref": "#potassium-and-acid-base-disorders"
  },
  {
    "id": "ckd-complications-070",
    "question": "Which action best supports individualized potassium dietary management?",
    "choices": [
      "Use a dietitian and individualized substitutions rather than banning all plant foods.",
      "Ban all plant foods without reviewing measured potassium or current intake.",
      "Recommend unrestricted potassium-containing salt substitutes to reduce sodium.",
      "Use one fixed food list for every person without reviewing nutritional needs."
    ],
    "answer": 0,
    "rationale": "Renal dietitian support and individualized substitutions can address readily absorbable potassium while preserving diet quality. Broad plant-food bans, unchecked potassium salt substitutes and fixed lists can overlook the actual source, risk and nutritional consequences.",
    "reviewHref": "#potassium-and-acid-base-disorders"
  },
  {
    "id": "ckd-complications-071",
    "question": "Which dietary assessment is most useful when planning chronic potassium management?",
    "choices": [
      "Review dietary recall, processed foods, additives, cultural foods, constipation, food access, diabetes, nutrition, and potassium trajectory.",
      "Count fruit servings only and omit processed foods and additives.",
      "Review the food list alone without considering bowel function or access to food.",
      "Assume salt substitutes are potassium-free without reading their composition."
    ],
    "answer": 0,
    "rationale": "Review the actual pattern, sources, additives and salt substitutes with nutrition, bowel function, diabetes, access and potassium trend. These factors make counseling actionable; counting one food group or assuming product composition can misidentify the problem.",
    "reviewHref": "#potassium-and-acid-base-disorders"
  },
  {
    "id": "ckd-complications-072",
    "question": "Which statement identifies a reasoning hazard in potassium dietary counseling?",
    "choices": [
      "Indiscriminate restriction can worsen constipation and diet quality, which may undermine potassium control and health.",
      "Review potassium additives and salt-substitute composition.",
      "Use a renal dietitian to plan substitutions that preserve nutrition.",
      "Consider bowel function and the measured potassium trajectory."
    ],
    "answer": 0,
    "rationale": "Indiscriminate restriction can reduce fiber and diet quality and worsen constipation, a relevant contributor to impaired potassium elimination. The other choices describe appropriate assessment and individualized counseling rather than that hazard.",
    "reviewHref": "#potassium-and-acid-base-disorders"
  },
  {
    "id": "ckd-complications-073",
    "question": "Which statement most accurately describes chronic metabolic acidosis and alkali evidence in CKD?",
    "choices": [
      "Declining hydrogen-ion excretion and bicarbonate generation can cause chronic metabolic acidosis; observed adverse-outcome associations do not prove that alkali prevents kidney failure.",
      "A higher bicarbonate after treatment proves that kidney failure has been prevented.",
      "Every low bicarbonate result proves that CKD is the only cause.",
      "A fixed bicarbonate target removes the need to assess blood pressure or fluid status."
    ],
    "answer": 0,
    "rationale": "As GFR falls, hydrogen-ion excretion and bicarbonate generation can decrease. Adverse outcomes are associated with acidosis, but that does not establish causation or demonstrate that oral alkali prevents kidney failure. Diagnose the disorder and monitor treatment rather than equating biochemical response with clinical benefit.",
    "reviewHref": "#potassium-and-acid-base-disorders"
  },
  {
    "id": "ckd-complications-074",
    "question": "Which action is appropriate for a low bicarbonate result in a person with CKD?",
    "choices": [
      "Confirm the disorder and consider diet or pharmacologic alkali for clinically important acidosis with monitored response.",
      "Treat one low total CO2 result as a complete diagnosis without clinical review.",
      "Escalate alkali regardless of fluid retention or rising blood pressure.",
      "Present the KDIGO below-18 example as a mandatory boundary for every adult."
    ],
    "answer": 0,
    "rationale": "Confirm and characterize the disorder before selecting individualized dietary or pharmacologic treatment. KDIGO gives bicarbonate below 18 mmol/L in adults as an example of acidosis with potential clinical implications; treatment still needs context and monitoring for bicarbonate excess, blood pressure, potassium and fluid effects.",
    "reviewHref": "#potassium-and-acid-base-disorders"
  },
  {
    "id": "ckd-complications-075",
    "question": "Which assessment best characterizes a possible metabolic acidosis before and during treatment?",
    "choices": [
      "Review repeat bicarbonate, blood gas when needed, anion gap, potassium, diarrhea, medications, nutrition, pressure, volume, and respiratory compensation.",
      "Use total CO2 alone and omit pH, PaCO2 and clinical context when the disorder is uncertain.",
      "Review sodium alone and omit diarrhea, medicines and kidney function.",
      "Review symptoms only and omit the bicarbonate trend and treatment-related volume effects."
    ],
    "answer": 0,
    "rationale": "Use the bicarbonate trend and clinical context, with blood gas assessment when needed, to distinguish metabolic and respiratory processes or a mixed disorder. Anion gap, potassium, gastrointestinal losses, medicines, nutrition, blood pressure and volume inform cause and safety. One isolated measure is not the whole diagnosis.",
    "reviewHref": "#potassium-and-acid-base-disorders"
  },
  {
    "id": "ckd-complications-076",
    "question": "Which statement identifies a reasoning hazard when a low serum total CO2 is found?",
    "choices": [
      "Treating one low total CO2 as a complete acid-base diagnosis can miss chronic respiratory alkalosis or a mixed disorder.",
      "Use the blood gas and clinical history when the acid-base disorder is uncertain.",
      "Consider gastrointestinal losses and medication effects as possible causes.",
      "Assess the bicarbonate trend and treatment-related blood pressure or volume effects."
    ],
    "answer": 0,
    "rationale": "A low bicarbonate or total CO2 result does not by itself prove metabolic acidosis: chronic respiratory alkalosis or a mixed disorder can also lower bicarbonate. Sample and clinical assessment are important. The other choices support confirmation, a differential or safety monitoring.",
    "reviewHref": "#potassium-and-acid-base-disorders"
  },
  {
    "id": "ckd-complications-077",
    "question": "Which principle best describes the safety of sodium-containing oral alkali in CKD?",
    "choices": [
      "Sodium-containing oral alkali can improve bicarbonate but adds sodium and can affect blood pressure, fluid status, potassium and treatment burden.",
      "Sodium bicarbonate cannot affect fluid status because it is used to treat acidosis.",
      "All oral alkali formulations have identical sodium content and monitoring needs.",
      "A rise in bicarbonate removes the need to monitor potassium or blood pressure."
    ],
    "answer": 0,
    "rationale": "Sodium-containing alkali can improve bicarbonate while adding sodium burden. Monitor the response alongside blood pressure, potassium and fluid status; avoid bicarbonate above the upper limit of normal. Formulation and patient factors matter, so neither a biochemical response nor a class label establishes safety.",
    "reviewHref": "#potassium-and-acid-base-disorders"
  },
  {
    "id": "ckd-complications-078",
    "question": "Which action best supports safe selection and titration of oral sodium bicarbonate?",
    "choices": [
      "Select and titrate therapy with explicit bicarbonate, weight, edema, pressure, and electrolyte follow-up.",
      "Increase the dose until bicarbonate exceeds the upper limit of normal.",
      "Check bicarbonate alone and disregard rising weight or edema.",
      "Continue the same dose without reassessment after blood pressure worsens."
    ],
    "answer": 0,
    "rationale": "Define follow-up for bicarbonate, potassium, blood pressure and fluid status, including weight and edema where relevant. Biochemical correction must not overshoot the normal range or worsen congestion and pressure control; titration requires reassessment of benefit and harm.",
    "reviewHref": "#potassium-and-acid-base-disorders"
  },
  {
    "id": "ckd-complications-079",
    "question": "Which assessment best identifies risks and practical limits of sodium-containing alkali treatment?",
    "choices": [
      "Review sodium sensitivity, heart failure, edema, pressure, potassium, GI tolerance, medication burden, and dietary acid load.",
      "Review bicarbonate alone and assume heart failure has no relevance.",
      "Omit tolerance and medicine burden because they cannot affect continuation.",
      "Assume dietary acid load and potassium needs are the same for every patient."
    ],
    "answer": 0,
    "rationale": "Review sodium sensitivity, heart failure, edema, blood pressure, potassium, tolerance, treatment burden and dietary context. These factors help select an individualized, monitored plan. A bicarbonate value alone does not capture cardiovascular volume risk or practical treatment limits.",
    "reviewHref": "#potassium-and-acid-base-disorders"
  },
  {
    "id": "ckd-complications-080",
    "question": "Which statement identifies a reasoning hazard when escalating sodium bicarbonate in CKD?",
    "choices": [
      "Escalating sodium bicarbonate without volume monitoring can worsen congestion.",
      "Reassess fluid status and blood pressure when the dose is adjusted.",
      "Monitor serum bicarbonate to avoid exceeding the upper limit of normal.",
      "Review potassium and tolerability as part of the treatment response."
    ],
    "answer": 0,
    "rationale": "Sodium bicarbonate adds sodium, so escalation without volume surveillance can worsen fluid retention or congestion. The other choices describe appropriate reassessment. A bicarbonate increase is only one part of judging the response.",
    "reviewHref": "#potassium-and-acid-base-disorders"
  }
];
const reviewedElectrolyteById = new Map(reviewedElectrolyteQuestions.map((item) => [item.id, item]));
export const ckdComplicationsQuestionBank = generatedCkdComplicationsQuestions.map((item) => reviewedElectrolyteById.get(item.id) ?? item);
