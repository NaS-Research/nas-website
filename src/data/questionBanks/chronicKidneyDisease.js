const concepts = [
  { name: "CKD definition", lesson: "definition-chronicity-and-cause", principle: "CKD requires an abnormality of kidney structure or function for at least three months with implications for health.", action: "Identify the qualifying marker and establish its duration with prior or repeat evidence.", assessment: "Review serial eGFR, albuminuria, sediment, imaging, pathology, transplant status, and the clinical timeline.", hazard: "Diagnosing CKD from one abnormal creatinine during acute illness can misclassify AKI or AKD.", why: "Both the kidney abnormality and chronicity must be demonstrated." },
  { name: "markers of kidney damage", lesson: "definition-chronicity-and-cause", principle: "Albuminuria, urine sediment abnormalities, persistent hematuria, tubular disorders, histology, imaging abnormalities, or transplantation can establish CKD even with preserved eGFR.", action: "Confirm the marker and investigate its cause rather than relying on filtration alone.", assessment: "Review urine ACR, microscopy, electrolytes, imaging, pathology, history, and persistence.", hazard: "Calling G1 or G2 CKD without another marker overdiagnoses disease.", why: "Kidney damage and filtration are related but distinct dimensions." },
  { name: "CKD chronicity", lesson: "definition-chronicity-and-cause", principle: "Prior values, repeated measurements beyond three months, pathology, or chronic structural imaging can establish chronicity.", action: "Repeat testing at a clinically appropriate interval while urgently evaluating red flags.", assessment: "Review earlier records, trajectory, kidney size and structure, pathology, acute illness, obstruction, and medication changes.", hazard: "Waiting three months despite active sediment or rapid decline can delay urgent treatment.", why: "Duration establishes CKD, but dangerous phenotypes require immediate evaluation." },
  { name: "cause evaluation", lesson: "definition-chronicity-and-cause", principle: "CGA classification begins with cause, not only GFR and albuminuria.", action: "Build a focused etiologic evaluation from history, examination, urine, laboratory, imaging, family history, and biopsy when needed.", assessment: "Review diabetes, pressure, systemic disease, drugs, stones, infections, obstruction, inheritance, sediment, protein pattern, and imaging.", hazard: "Attributing CKD automatically to diabetes or hypertension can miss a treatable glomerular, obstructive, or inherited cause.", why: "Common comorbidities are risk factors but do not always prove etiology." },
  { name: "GFR categories", lesson: "cga-classification-and-measurement", principle: "GFR categories are G1 at 90 or greater, G2 at 60 to 89, G3a at 45 to 59, G3b at 30 to 44, G4 at 15 to 29, and G5 below 15 mL/min/1.73 m2.", action: "Assign the category from a confirmed eGFR and pair it with cause and albuminuria.", assessment: "Review estimate method, chronicity, body composition, trajectory, and whether another kidney marker exists.", hazard: "Calling G2 alone CKD ignores the requirement for a marker of kidney damage.", why: "GFR category describes filtration severity but does not independently diagnose early CKD." },
  { name: "albuminuria categories", lesson: "cga-classification-and-measurement", principle: "A1 is below 30 mg/g, A2 is 30 to 300 mg/g, and A3 is above 300 mg/g urine ACR.", action: "Confirm an unexpected abnormal result with a quantitative sample and address reversible confounders.", assessment: "Review first-morning ACR, exercise, fever, urinary infection, menstruation, hyperglycemia, pressure, and persistence.", hazard: "Treating one transient dipstick result as persistent A3 disease can distort risk and therapy.", why: "Albumin excretion varies and a quantitative confirmed ACR improves classification." },
  { name: "CGA risk integration", lesson: "cga-classification-and-measurement", principle: "Cause, GFR category, and albuminuria category jointly predict kidney and cardiovascular outcomes.", action: "Report all three dimensions and use their intersection to guide monitoring and treatment intensity.", assessment: "Review etiology, G category, A category, trajectory, age, comorbidity, cardiovascular disease, and patient priorities.", hazard: "Using eGFR alone underestimates risk in severe albuminuria and overgeneralizes patients with the same filtration estimate.", why: "Albuminuria adds independent prognostic information at every GFR category." },
  { name: "creatinine and cystatin C", lesson: "cga-classification-and-measurement", principle: "Combined creatinine and cystatin C eGFR can improve precision when creatinine is biased or a threshold changes care.", action: "Obtain cystatin C when better precision will alter diagnosis, dosing, referral, or eligibility.", assessment: "Review muscle mass, diet, amputation, inflammation, thyroid status, steroids, assay context, and the decision threshold.", hazard: "Ordering cystatin C without knowing how the result changes management adds cost without clinical value.", why: "The biomarkers have different non-GFR determinants and can improve estimation when combined." },
  { name: "eGFR trajectory", lesson: "progression-risk-and-referral", principle: "A plotted trajectory is more informative than two isolated eGFR values.", action: "Confirm a sustained decline and investigate acute illness, treatment effects, obstruction, adherence, and disease activity.", assessment: "Review serial dates and values, albuminuria, pressure, medications, intercurrent illness, volume, and analytic variability.", hazard: "Calculating a slope across an acute reversible event can falsely label chronic progression.", why: "Progression is a sustained directional change after expected variability and acute effects are considered." },
  { name: "Kidney Failure Risk Equation", lesson: "progression-risk-and-referral", principle: "The common four-variable KFRE uses age, sex, eGFR, and urine ACR to estimate two-year and five-year kidney failure risk.", action: "Use a validated implementation and connect the estimated risk to monitoring, referral, or preparation.", assessment: "Review population validity, current eGFR and ACR, time horizon, competing risk, comorbidity, and patient goals.", hazard: "Applying KFRE to an unvalidated population or treating it as a diagnosis can misdirect care.", why: "A prediction equation estimates probability within the context in which it was validated." },
  { name: "CKD monitoring frequency", lesson: "progression-risk-and-referral", principle: "eGFR and albuminuria should be assessed at least annually and more often as risk or treatment intensity rises.", action: "Set a specific monitoring interval based on CGA risk, trajectory, therapy, and what result will change care.", assessment: "Review G and A categories, recent decline, pressure, potassium, diabetes, medication changes, and access.", hazard: "Using the same annual interval for advanced or rapidly changing CKD can miss actionable deterioration.", why: "Monitoring value rises when progression risk and treatment consequences are greater." },
  { name: "nephrology referral", lesson: "progression-risk-and-referral", principle: "Referral is indicated by diagnostic uncertainty, active sediment, marked albuminuria, rapid progression, refractory disorders, inherited disease, advanced CKD, or meaningful kidney failure risk.", action: "State the referral question and urgency while continuing appropriate kidney-protective care.", assessment: "Review cause, trajectory, sediment, ACR, pressure, potassium, acid-base status, stones, inheritance, eGFR, KFRE, and goals.", hazard: "Waiting for G5 before referral can forfeit diagnostic and preparation opportunities.", why: "Specialty input is most useful before irreversible complications or kidney failure occur." },
  { name: "standardized blood pressure", lesson: "foundations-of-kidney-protection", principle: "A systolic target below 120 mm Hg applies to many adults with CKD only when tolerated and measured with standardized technique.", action: "Confirm measurement quality, assess symptoms and frailty, and individualize the target.", assessment: "Review rest period, cuff size, repeated readings, home data, orthostasis, falls, medications, and comorbidity.", hazard: "Applying a standardized-trial target to casual office readings can cause overtreatment.", why: "The numeric target is inseparable from the method used to obtain it." },
  { name: "ACE inhibitor or ARB therapy", lesson: "foundations-of-kidney-protection", principle: "A maximally tolerated ACE inhibitor or ARB is foundational for appropriate albuminuric CKD phenotypes.", action: "Start or titrate one RAAS blocker and recheck pressure, creatinine, and potassium.", assessment: "Review indication, pregnancy potential, volume, NSAIDs, potassium, renal artery disease, cough or angioedema, and follow-up.", hazard: "Combining an ACE inhibitor and ARB increases adverse events without routine net benefit.", why: "Single-agent RAAS blockade lowers intraglomerular pressure and albuminuria while dual blockade adds toxicity." },
  { name: "early creatinine change with RAAS blockade", lesson: "foundations-of-kidney-protection", principle: "A modest early creatinine rise can reflect the expected hemodynamic effect of RAAS inhibition rather than structural injury.", action: "Reassess magnitude, timing, volume, pressure, NSAIDs, potassium, obstruction, and renal artery disease before deciding.", assessment: "Review baseline and follow-up creatinine, percentage change, potassium, symptoms, diuretics, intake, illness, and interacting drugs.", hazard: "Stopping after any small creatinine rise can remove long-term kidney and cardiovascular benefit.", why: "Efferent arteriolar dilation can lower intraglomerular pressure and produce an initial filtration change." },
  { name: "lifestyle kidney protection", lesson: "foundations-of-kidney-protection", principle: "Sodium reduction, physical activity, tobacco cessation, healthy weight, and an appropriate dietary pattern support kidney and cardiovascular health.", action: "Create a feasible plan that preserves nutrition and respects culture, access, comorbidity, and CKD stage.", assessment: "Review intake, food security, weight trajectory, activity, tobacco, potassium and phosphorus laboratories, protein need, and dietitian access.", hazard: "Universal severe restriction can worsen nutrition and adherence without correcting a measured problem.", why: "Lifestyle therapy works only when it is safe, specific, and sustainable." },
  { name: "CKD cardiovascular prevention", lesson: "foundations-of-kidney-protection", principle: "CKD raises cardiovascular risk and requires coordinated lipid, pressure, diabetes, tobacco, activity, and heart failure care.", action: "Use statin-based and other preventive therapy according to CKD stage, age, dialysis status, and indication.", assessment: "Review ASCVD, lipids, diabetes, pressure, smoking, dialysis and transplant status, interactions, frailty, and goals.", hazard: "Focusing only on progression can overlook the higher competing risk of cardiovascular morbidity and death.", why: "Kidney and cardiovascular disease share mechanisms and strongly influence each other's outcomes." },
  { name: "SGLT2 inhibitor kidney protection", lesson: "disease-modifying-pharmacotherapy", principle: "SGLT2 inhibitors reduce CKD progression and cardiovascular events in qualifying CKD populations, including many without diabetes.", action: "Confirm indication and eGFR, assess volume and infection risk, initiate, and monitor clinical tolerance.", assessment: "Review eGFR, ACR, heart failure, diabetes, volume, diuretics, genital infection history, ketoacidosis risk, fasting, and procedures.", hazard: "Viewing SGLT2 inhibitors only as glucose-lowering drugs can deny kidney benefit when glycemic efficacy is small.", why: "Their kidney and heart benefits extend beyond glucose reduction." },
  { name: "SGLT2 eGFR dip", lesson: "disease-modifying-pharmacotherapy", principle: "A small reversible early eGFR decline after SGLT2 initiation often reflects reduced intraglomerular pressure.", action: "Continue with follow-up when the patient is stable, while investigating a large or symptomatic decline.", assessment: "Review magnitude and timing, pressure, orthostasis, intake, diuretics, NSAIDs, illness, obstruction, potassium, and trajectory.", hazard: "Automatically stopping for an expected dip removes therapy that slows long-term decline.", why: "The acute hemodynamic effect differs from progressive structural injury." },
  { name: "finerenone", lesson: "disease-modifying-pharmacotherapy", principle: "Finerenone reduces kidney and cardiovascular events in qualifying adults with CKD associated with type 2 diabetes on tolerated RAAS inhibition.", action: "Verify eGFR and potassium eligibility, screen interactions, select the starting dose, and recheck potassium around four weeks.", assessment: "Review eGFR, potassium, ACR, RAAS therapy, CYP3A4 inhibitors or inducers, volume, heart failure phenotype, and follow-up.", hazard: "Starting with potassium above the label threshold or a strong CYP3A4 inhibitor increases preventable harm.", why: "Finerenone exposure and mineralocorticoid blockade can increase hyperkalemia risk." },
  { name: "GLP-1 receptor agonists in CKD", lesson: "disease-modifying-pharmacotherapy", principle: "Long-acting GLP-1 receptor agonists can improve glycemia and cardiovascular outcomes and support weight management in type 2 diabetes with CKD.", action: "Choose an agent with outcome evidence, titrate gradually, and adjust insulin or secretagogue therapy when needed.", assessment: "Review glycemic goal, ASCVD, weight, GI disease, gallbladder and pancreatitis history, retinopathy context, hypoglycemia drugs, and access.", hazard: "Escalating insulin without accounting for reduced intake during GLP-1 titration can cause hypoglycemia.", why: "GLP-1 therapy changes appetite and glucose exposure while concomitant drugs may retain hypoglycemia risk." },
  { name: "renal medication dosing", lesson: "medication-stewardship-and-longitudinal-care", principle: "Drug labels may use eGFR, creatinine clearance, or another kidney metric, and the specified method should be verified.", action: "Calculate the required estimate and individualize with indication, exposure target, therapeutic index, and monitoring.", assessment: "Review label, body size, age, creatinine stability, muscle mass, dialysis, interactions, levels, response, and toxicity.", hazard: "Substituting one filtration estimate near a dosing cutoff can produce a clinically important dosing error.", why: "Different equations and indexing conventions can yield different values in the same patient." },
  { name: "nephrotoxin stewardship in CKD", lesson: "medication-stewardship-and-longitudinal-care", principle: "Stewardship evaluates necessity, mechanism, alternatives, dose, duration, combinations, and surveillance rather than imposing a blanket medication ban.", action: "Reconcile prescriptions, OTC products, supplements, and planned exposures, then reduce avoidable cumulative risk.", assessment: "Review NSAIDs, antimicrobials, contrast, herbal products, bowel preparations, RAAS combinations, volume, and monitoring.", hazard: "An incomplete OTC and supplement history can miss the most preventable kidney exposure.", why: "Kidney risk often results from combinations and context rather than one isolated drug." },
  { name: "sick-day and procedure planning", lesson: "medication-stewardship-and-longitudinal-care", principle: "Temporary interruption instructions must be individualized and paired with explicit restart criteria.", action: "Plan for vomiting, diarrhea, severe infection, fasting, and surgery, including advance SGLT2 interruption when indicated.", assessment: "Review medicines, illness severity, intake, ketone risk, blood pressure, glucose, procedure timing, kidney function, and follow-up.", hazard: "A vague hold list can lead to prolonged omission of beneficial therapy after recovery.", why: "Acute safety decisions and chronic disease benefit require a controlled transition back to treatment." },
  { name: "CKD longitudinal care", lesson: "medication-stewardship-and-longitudinal-care", principle: "Effective CKD care assigns ownership for laboratory trends, medications, referrals, education, access, and future planning across transitions.", action: "Document the next measurements, date, thresholds for action, responsible clinician, and patient-facing plan.", assessment: "Review CGA category, trajectory, KFRE, pressure, diabetes, medications, adherence, social needs, health literacy, specialists, and goals.", hazard: "Ordering follow-up without naming who will review and act on it leaves a dangerous open loop.", why: "Long-term risk reduction depends on reliable implementation, not isolated recommendations." },
  { name: "risk-based CKD detection", lesson: "detection-mechanism-and-presentation", principle: "People at increased CKD risk should be assessed with both a filtration estimate and urine albumin measurement rather than symptoms alone.", action: "Identify the risk phenotype, obtain eGFR and urine ACR, and confirm abnormalities in clinical context.", assessment: "Review diabetes duration, hypertension, cardiovascular disease, prior AKI, family history, systemic disease, obstruction, stones, and relevant medication exposure.", hazard: "Waiting for edema or uremic symptoms misses the long asymptomatic phase when kidney and cardiovascular protection can begin.", why: "Early CKD commonly produces no symptoms, while eGFR and albuminuria capture different dimensions of disease." },
  { name: "maladaptive nephron hyperfiltration", lesson: "detection-mechanism-and-presentation", principle: "Surviving nephrons can preserve total GFR by increasing single-nephron filtration, but sustained intraglomerular stress can accelerate injury.", action: "Connect pressure, albuminuria, and progression to therapies that reduce intraglomerular stress while following the expected early filtration response.", assessment: "Review cause, nephron burden, pressure, albuminuria, RAAS activity, diabetes, obesity, treatment timing, and eGFR trajectory.", hazard: "Interpreting a preserved total eGFR as proof that every nephron is healthy can delay risk reduction.", why: "Compensation can maintain the aggregate filtration number while podocyte, tubular, and interstitial injury progresses." },
  { name: "RAAS inhibitor response algorithm", lesson: "treatment-monitoring-and-response", principle: "Pressure, creatinine, and potassium should be reassessed within two to four weeks after starting or increasing an ACE inhibitor or ARB, with earlier review for higher-risk patients.", action: "Classify the response as expected, concerning, or unsafe, then investigate reversible drivers before reducing an indicated therapy.", assessment: "Review percentage creatinine change, potassium, pressure, symptoms, volume, diuretics, NSAIDs, obstruction, renal artery disease, and interval from titration.", hazard: "Stopping after any creatinine increase removes benefit, while ignoring a rise above 30 percent can miss important hemodynamic or obstructive disease.", why: "RAAS blockade has an expected hemodynamic effect, but the magnitude and context determine whether further evaluation is required." },
  { name: "hyperkalemia mitigation with kidney-protective therapy", lesson: "treatment-monitoring-and-response", principle: "Hyperkalemia during indicated RAAS or mineralocorticoid therapy should be mitigated when safely possible before abandoning cardiorenal benefit.", action: "Remove potassium contributors, correct appropriate reversible factors, consider diuretic, bicarbonate, or binder strategies, and repeat potassium on a risk-based schedule.", assessment: "Review ECG and symptoms when severe, laboratory validity, kidney function, constipation, diet, salt substitutes, supplements, trimethoprim, NSAIDs, potassium-sparing drugs, acidosis, and volume.", hazard: "Continuing despite uncontrolled hyperkalemia is unsafe, but reflex discontinuation without mitigation can also worsen long-term outcomes.", why: "Potassium risk is dynamic and often modifiable, so the decision should balance immediate safety with the value of indicated therapy." },
  { name: "finerenone monitoring and titration", lesson: "treatment-monitoring-and-response", principle: "Finerenone dosing and continuation are governed by eGFR, serum potassium, interacting drugs, and the current product label.", action: "Verify eligibility, choose the eGFR-based starting dose, recheck potassium at about four weeks, and titrate, hold, or restart using labeled thresholds.", assessment: "Review type 2 diabetes, albuminuria, tolerated RAAS therapy, eGFR, potassium trend, strong CYP3A4 inhibitors, volume, adherence, and follow-up access.", hazard: "Using a remembered fixed potassium rule without the current label can produce an unsafe start, missed hold, or inappropriate permanent discontinuation.", why: "Finerenone exposure and mineralocorticoid receptor blockade can increase potassium, while kidney function affects starting dose and surveillance." },
];

const dimensions = [
  ["principle", "Which principle best characterizes"],
  ["action", "Which clinical action best applies to"],
  ["assessment", "Which assessment is most appropriate for"],
  ["hazard", "Which reasoning hazard is most important to prevent with"],
];

function distractors(index, field) {
  return [5, 11, 17].map((offset) => concepts[(index + offset) % concepts.length][field]);
}

const generatedChronicKidneyDiseaseQuestions = concepts.flatMap((concept, conceptIndex) =>
  dimensions.map(([field, prompt], dimensionIndex) => ({
    id: `chronic-kidney-disease-${String(conceptIndex * 4 + dimensionIndex + 1).padStart(3, "0")}`,
    question: `${prompt} ${concept.name}?`,
    choices: [concept[field], ...distractors(conceptIndex, field)],
    answer: 0,
    rationale: concept.why,
    reviewHref: `#${concept.lesson}`,
  })),
);

// Individually reviewed monitoring questions retain their existing identifiers and keys.
const monitoringQuestionOverrides = [
  {
    "id": "chronic-kidney-disease-109",
    "question": "After an ACE inhibitor is started or increased in a patient with CKD, which monitoring principle is appropriate?",
    "choices": [
      "Pressure, creatinine, and potassium should be reassessed within two to four weeks after starting or increasing an ACE inhibitor or ARB, with earlier review for higher-risk patients.",
      "Recheck only urine albumin at the next annual visit.",
      "Check potassium only if muscle weakness develops.",
      "Wait three months before checking blood pressure or kidney function."
    ],
    "answer": 0,
    "rationale": "Review blood pressure, creatinine and potassium after initiation or titration. KDIGO uses a two-to-four-week interval based on kidney function and potassium; higher-risk patients may need earlier review. Annual albuminuria surveillance does not replace drug-safety follow-up.",
    "reviewHref": "#treatment-monitoring-and-response"
  },
  {
    "id": "chronic-kidney-disease-110",
    "question": "How should a concerning early kidney-function change after ACE inhibitor titration be handled?",
    "choices": [
      "Classify the response as expected, concerning, or unsafe, then investigate reversible drivers before reducing an indicated therapy.",
      "Permanently discontinue the ACE inhibitor for every creatinine increase.",
      "Add an ARB before evaluating the change.",
      "Continue the same dose without reviewing symptoms, volume or interacting medicines."
    ],
    "answer": 0,
    "rationale": "Classify the magnitude, timing and clinical context, then evaluate reversible causes. A concerning change calls for a response plan; neither automatic permanent withdrawal nor ignoring deterioration is appropriate.",
    "reviewHref": "#treatment-monitoring-and-response"
  },
  {
    "id": "chronic-kidney-disease-111",
    "question": "Which assessment best informs the response to a creatinine increase after ACE inhibitor titration?",
    "choices": [
      "Review percentage creatinine change, potassium, pressure, symptoms, volume, diuretics, NSAIDs, obstruction, renal artery disease, and interval from titration.",
      "Use the absolute creatinine value alone without a pretreatment baseline.",
      "Review albuminuria alone and omit potassium and symptoms.",
      "Assume the creatinine increase proves allergy without reviewing volume or medication exposure."
    ],
    "answer": 0,
    "rationale": "Compare baseline and follow-up values and review potassium, blood pressure, symptoms, volume, medication exposure and possible obstruction or renovascular disease. The same numerical change can have different implications in different clinical settings.",
    "reviewHref": "#treatment-monitoring-and-response"
  },
  {
    "id": "chronic-kidney-disease-112",
    "question": "Which statement identifies an unsafe reasoning pattern when interpreting kidney-function changes after ACE inhibitor titration?",
    "choices": [
      "Stopping after any creatinine increase removes benefit, while ignoring a rise above 30 percent can miss important hemodynamic or obstructive disease.",
      "A large creatinine increase should prompt evaluation of reversible causes.",
      "Blood pressure, potassium and kidney function should be reassessed after titration.",
      "A small stable hemodynamic change should be interpreted in its clinical context."
    ],
    "answer": 0,
    "rationale": "Small expected hemodynamic changes should not automatically remove beneficial treatment. A creatinine increase above 30 percent within four weeks requires evaluation; it must not be dismissed because another disease marker improves. Routine ACE inhibitor plus ARB therapy adds risk.",
    "reviewHref": "#treatment-monitoring-and-response"
  },
  {
    "id": "chronic-kidney-disease-113",
    "question": "Which principle should guide potassium management during kidney-protective therapy?",
    "choices": [
      "Mitigate hyperkalemia when safely possible to preserve indicated therapy, while following drug-specific hold rules and acting on uncontrolled hyperkalemia.",
      "Continue every potassium-raising drug at the same dose despite uncontrolled hyperkalemia.",
      "Permanently stop all kidney-protective medicines after any isolated potassium increase.",
      "Apply the ACE inhibitor mitigation pathway instead of the product-specific finerenone hold rules."
    ],
    "answer": 0,
    "rationale": "Balance immediate potassium safety with the benefit of indicated therapy. Reversible contributors can often be addressed, but uncontrolled hyperkalemia requires action. Finerenone has product-specific hold and restart instructions that must still be followed.",
    "reviewHref": "#treatment-monitoring-and-response"
  },
  {
    "id": "chronic-kidney-disease-114",
    "question": "For nonemergent hyperkalemia during indicated ACE inhibitor or ARB treatment, which action is appropriate?",
    "choices": [
      "Remove potassium contributors, correct appropriate reversible factors, consider diuretic, bicarbonate, or binder strategies, and repeat potassium on a risk-based schedule.",
      "Add a potassium supplement to prevent future hypokalemia.",
      "Use a potassium-containing salt substitute without reassessing the potassium level.",
      "Wait for the next annual visit without reviewing contributors or setting repeat testing."
    ],
    "answer": 0,
    "rationale": "Review potassium contributors and appropriate reversible factors, consider suitable treatment options, and assign timely repeat testing. Diuretic, bicarbonate or binder use depends on the patient and indication; it is not a substitute for emergency treatment when immediate danger is present.",
    "reviewHref": "#treatment-monitoring-and-response"
  },
  {
    "id": "chronic-kidney-disease-115",
    "question": "Which assessment is appropriate when evaluating hyperkalemia during kidney-protective therapy?",
    "choices": [
      "Review ECG and symptoms when severe, laboratory validity, kidney function, constipation, diet, salt substitutes, supplements, trimethoprim, NSAIDs, potassium-sparing drugs, acidosis, and volume.",
      "Assume one abnormal sample proves persistent hyperkalemia without considering validity.",
      "Exclude medication and supplement exposure if the prescribed dose has not changed.",
      "Assess only dietary potassium and omit kidney function, symptoms and volume status."
    ],
    "answer": 0,
    "rationale": "Establish the severity and clinical context, consider sample validity, and review kidney function, medications, supplements, diet, constipation, acid-base status and volume. Suspected dangerous hyperkalemia requires prompt assessment; verification must not become a reason to delay necessary treatment.",
    "reviewHref": "#treatment-monitoring-and-response"
  },
  {
    "id": "chronic-kidney-disease-116",
    "question": "Which statement identifies a reasoning hazard in potassium management during kidney-protective therapy?",
    "choices": [
      "Continuing despite uncontrolled hyperkalemia is unsafe, but reflex discontinuation without mitigation can also worsen long-term outcomes.",
      "Review supplements and potassium-containing salt substitutes as possible contributors.",
      "Follow the finerenone CKD label when potassium requires withholding or restarting treatment.",
      "Assign repeat potassium testing and a clinician responsible for acting on the result."
    ],
    "answer": 0,
    "rationale": "Both immediate safety and long-term benefit matter. Mitigation may preserve indicated ACE inhibitor or ARB treatment when safe, but uncontrolled hyperkalemia cannot be ignored, and finerenone hold rules are not waived by prescribing a binder.",
    "reviewHref": "#treatment-monitoring-and-response"
  },
  {
    "id": "chronic-kidney-disease-117",
    "question": "Which principle governs finerenone dosing and continuation in CKD?",
    "choices": [
      "Finerenone dosing and continuation are governed by eGFR, serum potassium, interacting drugs, and the current product label.",
      "Use the same starting dose for every patient without measuring eGFR.",
      "Use the heart-failure titration table for all CKD indications.",
      "Ignore interacting medicines if potassium was normal before treatment."
    ],
    "answer": 0,
    "rationale": "Use the current CKD label, baseline eGFR and potassium, subsequent potassium values and interaction review. CKD and heart-failure dosing tables differ; a normal baseline potassium result does not eliminate later interaction or hyperkalemia risk.",
    "reviewHref": "#treatment-monitoring-and-response"
  },
  {
    "id": "chronic-kidney-disease-118",
    "question": "Which action is appropriate when starting finerenone for a qualifying CKD indication?",
    "choices": [
      "Verify eligibility, choose the eGFR-based starting dose, recheck potassium at about four weeks, and titrate, hold, or restart using labeled thresholds.",
      "Start without obtaining baseline potassium and check it only if symptoms appear.",
      "Initiate treatment when potassium is above 5.0 mEq/L.",
      "Combine it with a strong CYP3A4 inhibitor and rely on routine annual potassium testing."
    ],
    "answer": 0,
    "rationale": "Verify the indication and baseline eGFR and potassium, choose the labeled starting dose, and use labeled follow-up and titration rules. The September 2026 label prohibits initiation above 5.0 mEq/L and contraindicates strong CYP3A4 inhibitors.",
    "reviewHref": "#treatment-monitoring-and-response"
  },
  {
    "id": "chronic-kidney-disease-119",
    "question": "In an adult being evaluated for finerenone for CKD associated with type 2 diabetes, which assessment is most appropriate?",
    "choices": [
      "Review type 2 diabetes, albuminuria, tolerated RAAS therapy, eGFR, potassium trend, strong CYP3A4 inhibitors, volume, adherence, and follow-up access.",
      "Confirm diabetes alone without checking kidney function, potassium or interacting medicines.",
      "Use serum creatinine alone and substitute the heart-failure dose table.",
      "Check only the last potassium result and omit follow-up access and medication reconciliation."
    ],
    "answer": 0,
    "rationale": "For this type 2 diabetes scenario, review the CKD phenotype, albuminuria, tolerated RAAS therapy, eGFR, potassium, interactions and the practical monitoring plan. The current label also includes a distinct type 1 diabetes CKD indication; this stem specifies type 2 diabetes rather than implying it is the only CKD indication.",
    "reviewHref": "#treatment-monitoring-and-response"
  },
  {
    "id": "chronic-kidney-disease-120",
    "question": "Which statement identifies a reasoning hazard when titrating or restarting finerenone for CKD?",
    "choices": [
      "Using a remembered fixed potassium rule without the current label can produce an unsafe start, missed hold, or inappropriate permanent discontinuation.",
      "Select the starting dose using the current label and measured eGFR.",
      "Use the CKD-specific potassium table for a CKD indication.",
      "Review strong CYP3A4 inhibitors before prescribing finerenone."
    ],
    "answer": 0,
    "rationale": "Use the current indication-specific label rather than a remembered fixed rule. CKD titration, withholding and restart thresholds differ from the heart-failure algorithm, and strong CYP3A4 inhibition is contraindicated rather than managed by an improvised dose reduction.",
    "reviewHref": "#treatment-monitoring-and-response"
  }
];

export const chronicKidneyDiseaseQuestionBank = generatedChronicKidneyDiseaseQuestions.map(
  (question) => monitoringQuestionOverrides.find((item) => item.id === question.id) ?? question,
);
