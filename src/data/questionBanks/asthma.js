const concepts = [
  { name: "airway inflammation and remodeling", lesson: "airway-biology-and-disease-expression", principle: "Asthma reflects variable airway inflammation, hyperresponsiveness, bronchoconstriction, edema, mucus, and possible structural remodeling.", action: "Pair rapid symptom relief with sustained anti-inflammatory treatment and prevention of repeated injury.", assessment: "Review symptom pattern, triggers, airflow variability, exacerbations, inflammatory traits, exposure, controller use, and longitudinal lung function.", hazard: "Interpreting rapid bronchodilator response as proof that inflammatory risk is controlled can leave future exacerbation risk untreated.", why: "Smooth muscle relaxation and inflammatory control address different components of asthma." },
  { name: "airway trigger and hyperresponsiveness", lesson: "airway-biology-and-disease-expression", principle: "Viral infection, allergen, exercise, cold air, smoke, and occupational exposure can provoke excessive narrowing in a susceptible airway.", action: "Identify the reproducible pattern, reduce avoidable exposure, preserve appropriate activity, and use the appropriate age-specific asthma strategy.", assessment: "Review timing, setting, occupation, exercise pattern, upper-airway disease, smoke, allergens, infection, medicines, action plan, and objective airflow findings.", hazard: "Naming a trigger without confirming variable airflow or considering mimics can turn an association into a false diagnosis.", why: "Triggers reveal airway susceptibility but are not independently diagnostic." },
  { name: "theophylline exposure and toxicity", lesson: "adjunct-drugs-safety-and-monitoring", principle: "Theophylline has variable clearance, extensive interactions, and concentration-related gastrointestinal, cardiac, and neurologic toxicity.", action: "Recognize that GINA does not recommend oral theophylline for asthma; review existing therapy, interacting factors and concentrations, and respond urgently to toxicity.", assessment: "Review dose, formulation, timing, concentration, smoking change, fever, age, liver and heart disease, interacting drugs, nausea, tremor, rhythm, and seizures.", hazard: "A stable historical dose can become toxic after smoking cessation, acute illness, or addition of a metabolic inhibitor.", why: "Small clearance changes can produce clinically important exposure changes within a narrow therapeutic range." },
  { name: "systemic corticosteroid burden", lesson: "adjunct-drugs-safety-and-monitoring", principle: "Systemic corticosteroids treat significant exacerbation inflammation, but repeated or prolonged exposure creates cumulative multisystem harm.", action: "Use an appropriate acute course when indicated, then investigate why it was needed and strengthen prevention.", assessment: "Review course frequency, glucose, blood pressure, mood, infection, bone, eye, adrenal risk, controller access, technique, adherence, phenotype, and referral need.", hazard: "Treating every recurrence with another steroid burst without prevention review normalizes avoidable toxicity and uncontrolled disease.", why: "Acute efficacy does not erase cumulative metabolic, infectious, psychiatric, skeletal, ocular, and adrenal risk." },
  { name: "core diagnostic evidence from age 6", lesson: "definition-diagnosis-and-phenotype", principle: "From age 6, confirm asthma with variable respiratory symptoms and objective evidence of variable expiratory airflow when feasible; preschool diagnosis uses separate clinical criteria.", action: "Obtain quality spirometry with bronchodilator testing before long-term controller treatment when feasible.", assessment: "Review symptom variability, triggers, spirometry quality, bronchodilator withholding, FEV1, FVC, ratio, and alternative diagnoses.", hazard: "Excluding asthma after one normal spirometry result on an asymptomatic day can miss variable disease.", why: "Symptoms alone are nonspecific, while airflow variability provides physiologic confirmation." },
  { name: "objective variability", lesson: "definition-diagnosis-and-phenotype", principle: "Variable airflow may be demonstrated by bronchodilator response, peak-flow variation, treatment response, or bronchial challenge.", action: "Repeat or choose an alternate objective test when the history is convincing but initial spirometry is nondiagnostic.", assessment: "Check test timing, symptom state, medication exposure, effort, reproducibility, peak-flow technique, and challenge contraindications.", hazard: "Requiring a positive bronchodilator test at one visit as the only acceptable diagnostic evidence can miss variable disease.", why: "Asthma physiology fluctuates and may require testing across time or conditions." },
  { name: "diagnosis after urgent treatment", lesson: "definition-diagnosis-and-phenotype", principle: "Urgent respiratory compromise should be treated immediately even when objective confirmation has not yet been completed.", action: "Stabilize the patient, document pretreatment findings when feasible without delaying care, then arrange age-appropriate diagnostic confirmation after recovery.", assessment: "Review severity, oxygenation, response, prior records, alternative emergencies, controller exposure, and the confirmation plan.", hazard: "Delaying lifesaving treatment to complete elective diagnostic testing is unsafe.", why: "Acute stabilization takes priority while diagnostic closure remains necessary later." },
  { name: "asthma differential diagnosis", lesson: "definition-diagnosis-and-phenotype", principle: "Wheeze, cough, and dyspnea can reflect upper-airway, cardiac, pulmonary, structural, infectious, thrombotic, medication, or functional causes.", action: "Pursue the competing diagnosis suggested by age, timing, examination, imaging, spirometry, and treatment response.", assessment: "Review inspiratory symptoms, smoking, cardiac signs, reflux, infection, focal findings, thrombotic risk, obesity, exercise, medicines, and occupation.", hazard: "Calling every wheeze asthma can delay treatment for inducible laryngeal obstruction, heart failure, COPD, embolism, or another cause.", why: "Asthma symptoms are common manifestations of several distinct disorders." },
  { name: "Type 2 phenotype markers", lesson: "definition-diagnosis-and-phenotype", principle: "Eosinophils, FeNO, allergy, nasal polyps, and steroid response can support Type 2 phenotyping but do not independently establish asthma.", action: "Interpret biomarkers with treatment exposure, smoking, infection, comorbidity, and repeated values before advanced therapy.", assessment: "Review blood eosinophils, FeNO, allergy history, polyps, exacerbations, oral steroid exposure, current ICS, smoking, and biologic eligibility.", hazard: "Low Type 2 markers do not exclude asthma, especially after corticosteroid treatment.", why: "Biomarkers describe a treatable inflammatory trait rather than replacing physiologic diagnosis." },
  { name: "symptom control versus future risk", lesson: "control-risk-and-longitudinal-assessment", principle: "Current symptoms and future exacerbation, mortality, airflow, and medication risk are separate domains.", action: "Assess both domains at every review even when the patient reports few symptoms.", assessment: "Review four-week symptoms, night waking, activity, reliever use, prior attacks, lung function, ICS exposure, SABA use, smoking, and comorbidity.", hazard: "Few symptoms can falsely reassure clinicians when severe prior attacks or low lung function signal high risk.", why: "Impairment and future hazard do not always move together." },
  { name: "prior severe exacerbation", lesson: "control-risk-and-longitudinal-assessment", principle: "A severe asthma attack in the past year, or any prior asthma ICU admission or intubation, increases future exacerbation risk.", action: "Treat each severe event as a signal for a complete post-event review.", assessment: "Review trigger, access, adherence, inhaler technique, prior regimen, discharge treatment, action plan, social barriers, and follow-up.", hazard: "Returning automatically to the preattack regimen without reassessing its suitability can leave modifiable risk unaddressed.", why: "A severe event reveals vulnerability that current symptom frequency may not show." },
  { name: "inhaler implementation audit", lesson: "control-risk-and-longitudinal-assessment", principle: "Availability, affordability, adherence and correct technique determine how reliably a prescribed inhaler delivers its intended benefit.", action: "Ask nonjudgmentally about use, inspect fills when available, and observe every device before escalation.", assessment: "Review access, dose counter, missed doses, priming, inspiratory flow, coordination, spacer, cleaning, storage, adverse effects, and preferences.", hazard: "Escalating treatment before confirming implementation can add cost and toxicity without improving airway exposure.", why: "Device and behavior determine the medicine that actually reaches the lung." },
  { name: "step-up decision", lesson: "control-risk-and-longitudinal-assessment", principle: "Persistent symptoms require confirmation of diagnosis, technique, adherence, exposure, and comorbidity before pharmacologic escalation.", action: "Correct modifiable causes, define a treatment target, then use a time-limited step-up with planned reassessment.", assessment: "Review diagnosis, symptoms, lung function, attacks, medicines, technique, access, smoking, allergens, occupation, obesity, sinus disease, reflux, and sleep apnea.", hazard: "Automatic dose escalation can mask a wrong diagnosis or an uncorrected delivery problem.", why: "Many apparent treatment failures arise outside the drug selection itself." },
  { name: "step-down strategy", lesson: "control-risk-and-longitudinal-assessment", principle: "In established asthma after sustained stability, controller exposure can be reduced gradually while preserving ICS protection and close monitoring.", action: "For stable adults and adolescents, choose an appropriate time outside pregnancy, document baseline status, reduce maintenance ICS by 25 to 50 percent, provide an action plan, and confirm stability for two to three months before another reduction.", assessment: "Review stability duration, season, pregnancy, travel, recent infection, exacerbation history, lung function, adherence, action plan, and follow-up access.", hazard: "Completely stopping ICS in an adult or adolescent with confirmed asthma can restore severe-exacerbation risk even when symptoms are quiet.", why: "Routine step-down in confirmed asthma seeks minimum effective exposure. A supervised diagnostic trial for an unconfirmed diagnosis is a separate process." },
  { name: "beta2 agonist pharmacology", lesson: "airway-pharmacology-and-inhaler-delivery", principle: "Beta2 receptor activation increases cyclic AMP in airway smooth muscle and produces bronchodilation.", action: "Match onset and duration to rescue or maintenance role while tracking cardiovascular, tremor, potassium, and overuse risk.", assessment: "Review active ingredient, onset, duration, inhalations, maximum use, heart rate, tremor, potassium context, reliever frequency, and controller pairing.", hazard: "Rapid symptom relief can conceal untreated inflammation when bronchodilator exposure rises without ICS.", why: "Bronchodilation relieves smooth-muscle constriction but does not replace anti-inflammatory control." },
  { name: "formoterol reliever suitability", lesson: "airway-pharmacology-and-inhaler-delivery", principle: "Formoterol combines rapid onset with long duration, enabling selected ICS-formoterol AIR and MART strategies.", action: "Use only the studied ICS-formoterol formulation, strength, age pathway, and maximum inhalation instructions supported locally.", assessment: "Review product, dose, role, device, age, maintenance schedule, as-needed use, total daily inhalations, label, and action plan.", hazard: "A slower-onset LABA such as salmeterol cannot be substituted as the reliever in a MART regimen.", why: "The reliever role depends on sufficiently rapid bronchodilator onset." },
  { name: "inhaled corticosteroid pharmacology", lesson: "airway-pharmacology-and-inhaler-delivery", principle: "ICS changes inflammatory gene transcription, reduces airway inflammation and hyperresponsiveness, and lowers severe attack and death risk.", action: "Use the lowest effective ICS-containing regimen with reliable technique and dose-specific monitoring.", assessment: "Review daily and cumulative dose, adherence, technique, spacer compatibility, mouth care, voice, candidiasis, growth, bone, eye, adrenal, and interacting drugs.", hazard: "Missing prescribed maintenance doses or poor technique can reduce ICS benefit; prescribed AIR-only use is a different regimen.", why: "ICS benefit depends on using the selected evidence-based regimen correctly." },
  { name: "LABA safety", lesson: "airway-pharmacology-and-inhaler-delivery", principle: "LABA must not be used without ICS in asthma because bronchodilation alone does not control the inflammatory risk.", action: "Confirm every asthma LABA is delivered with an ICS and that the patient understands maintenance and rescue roles.", assessment: "Review all inhalers, active ingredients, duplication, controller adherence, reliever, product labeling, and refill pattern.", hazard: "LABA monotherapy increases serious asthma risk and can mask deterioration.", why: "Long bronchodilation without anti-inflammatory treatment leaves the core disease process active." },
  { name: "device selection and technique", lesson: "airway-pharmacology-and-inhaler-delivery", principle: "Device resistance, coordination, inspiratory flow, dexterity, cognition, cost, and preference determine effective lung delivery.", action: "Choose a device the patient can obtain and demonstrate correctly, then recheck technique at follow-up.", assessment: "Review age, inspiratory ability, coordination, dexterity, cognition, spacer, portability, priming, cleaning, dose counter, cost, and preference.", hazard: "Changing molecules without evaluating the delivery platform can perpetuate the same treatment failure.", why: "The inhaler is part of the dose rather than a neutral container." },
  { name: "GINA Track 1", lesson: "stepwise-controller-and-reliever-strategy", principle: "GINA Track 1 uses low-dose ICS-formoterol as the adult and adolescent reliever across treatment steps.", action: "Use AIR-only at Steps 1 and 2 or MART at Steps 3 through 5 according to severity, control, product context, and local practice.", assessment: "Review symptoms, attacks, lung function, prior treatment, product strength, inhalations, maintenance need, maximum use, access, and label context.", hazard: "Adding a separate SABA routinely to an ICS-formoterol reliever strategy can confuse roles and weaken anti-inflammatory rescue.", why: "Track 1 links each relief dose to ICS exposure and reduces severe exacerbations." },
  { name: "AIR-only versus MART", lesson: "stepwise-controller-and-reliever-strategy", principle: "AIR-only has no scheduled maintenance; GINA includes ICS-formoterol and selected ICS-SABA pathways. MART specifically combines scheduled and as-needed ICS-formoterol.", action: "Write maintenance and as-needed instructions separately and state the total daily limit and escalation threshold.", assessment: "Review the exact inhaler, scheduled doses, as-needed doses, maximum inhalations, symptom response, action plan, and access to replacement supply.", hazard: "Calling every ICS-formoterol regimen MART can cause omission or duplication of scheduled doses.", why: "MART uses an appropriate ICS-formoterol inhaler for both scheduled maintenance and relief. AIR-only has no scheduled maintenance; adding any controller to any reliever does not automatically create MART." },
  { name: "adult and adolescent GINA Track 2", lesson: "stepwise-controller-and-reliever-strategy", principle: "Track 2 uses an ICS-containing alternative when Track 1 is unavailable or unsuitable, including ICS-SABA or daily ICS-containing control plus reliever.", action: "Match Track 2 to reliever availability and step, and verify maintenance adherence when prescribed.", assessment: "Review Track 1 suitability, product access, adherence, maintenance controller, rescue choice, ICS timing, maximum use, and action plan.", hazard: "SABA-only treatment is not an appropriate long-term adult or adolescent asthma strategy.", why: "Adult and adolescent strategies preserve ICS exposure; selected preschool children have a separate SABA-only Step 1 option." },
  { name: "Airsupra label boundary", lesson: "stepwise-controller-and-reliever-strategy", principle: "US albuterol-budesonide labeling supports as-needed rescue in adults and does not make it a maintenance controller.", action: "Use it within current adult rescue labeling and prescribe separate maintenance therapy when indicated.", assessment: "Review age, indication, maintenance regimen, inhalation limit, hypersensitivity, paradoxical bronchospasm, cardiovascular effects, systemic steroid exposure, and technique.", hazard: "Using albuterol-budesonide as scheduled maintenance conflicts with its rescue role and can leave baseline control inadequate.", why: "Rescue approval and maintenance approval are distinct product indications." },
  { name: "guideline versus product label", lesson: "stepwise-controller-and-reliever-strategy", principle: "International guideline strategy and jurisdiction-specific product labeling answer different clinical and regulatory questions.", action: "State when a regimen follows GINA evidence and separately verify local approval, product, strength, age, device, and maximum dose.", assessment: "Review guideline step, jurisdiction, product label, formulation, strength, patient age, payer, device, and institutional policy.", hazard: "Presenting guideline-supported ICS-formoterol use as identical to every US product label obscures an important prescribing distinction.", why: "Evidence recommendations do not automatically rewrite a product's approved labeling." },
  { name: "difficult-to-treat asthma", lesson: "children-special-situations-and-severe-asthma", principle: "Difficult-to-treat asthma includes poor control despite prescribed medium/high-dose ICS-LABA or maintenance oral steroids, and disease requiring high-dose treatment to remain controlled.", action: "Perform a structured optimization workup before applying the severe-asthma label.", assessment: "Review objective diagnosis, phenotype, technique, adherence, access, smoking, occupation, allergens, obesity, sinus disease, polyps, reflux, sleep apnea, mental health, and triggers.", hazard: "Premature severe-asthma labeling can lead to expensive advanced therapy while a correctable cause remains active.", why: "True treatment resistance is diagnosed only after modifiable failure mechanisms are addressed." },
  { name: "biologic selection", lesson: "children-special-situations-and-severe-asthma", principle: "Biologic choice integrates phenotype, exacerbations, steroid dependence, comorbid disease, age, biomarker thresholds, dosing, response, and current labeling.", action: "Match anti-IgE, anti-IL-5 or IL-5R, anti-IL-4R alpha, or anti-TSLP therapy to the documented phenotype and reassess response.", assessment: "Review allergy, IgE range, eosinophils, FeNO, polyps, dermatitis, exacerbations, oral steroid burden, age, weight, helminth risk, adverse effects, access, and response goals.", hazard: "Selecting a biologic from one isolated biomarker can ignore label criteria, competing traits, and the patient's dominant outcome.", why: "Each target addresses a different inflammatory pathway and eligibility framework." },
  { name: "children and pregnancy", lesson: "children-special-situations-and-severe-asthma", principle: "Children need age-specific treatment: ICS-containing pathways from age 6 and a separate preschool pathway. Pregnancy is not a reason to stop effective asthma control.", action: "Apply current age and product guidance, support technique and growth, and maintain active control with pregnancy review every four to six weeks.", assessment: "Review age, device skill, caregiver support, growth, school, attacks, product label, pregnancy stage, fetal and maternal risk, technique, and follow-up.", hazard: "Withholding ICS because of age or pregnancy can expose the child or pregnant patient to greater harm from uncontrolled disease and hypoxemia.", why: "The benefit-risk comparison includes the substantial risk of untreated asthma." },
  { name: "acute exacerbation treatment", lesson: "acute-exacerbations-action-plans-and-follow-up", principle: "Acute care requires rapid severity assessment, repeated inhaled bronchodilation, controlled oxygen when hypoxemic, early inflammation treatment, and serial reassessment.", action: "Give an effective rapid bronchodilator, add ipratropium for moderate or severe attacks or inadequate initial SABA response, use systemic corticosteroid for moderate or severe disease or incomplete response, and escalate early.", assessment: "Review speech, respiratory effort, mental status, oxygen saturation, PEF or FEV1 when feasible, prior near-fatal events, treatment response, and quiet chest.", hazard: "A quiet chest, exhaustion, confusion, or rising carbon dioxide can signal impending failure rather than improvement.", why: "Severe obstruction may produce little audible airflow while ventilation deteriorates." },
  { name: "anaphylaxis with wheeze", lesson: "acute-exacerbations-action-plans-and-follow-up", principle: "Anaphylaxis with wheeze requires prompt epinephrine; inhaled bronchodilator alone does not address the systemic reaction.", action: "Give epinephrine promptly using the appropriate emergency product and route, activate the anaphylaxis pathway, and add bronchodilator and supportive care as indicated.", assessment: "Review exposure, hives, mucosal swelling, voice, stridor, wheeze, blood pressure, gastrointestinal symptoms, oxygenation, response, and biphasic risk.", hazard: "Delaying epinephrine while giving antihistamine or albuterol alone can permit rapid fatal progression.", why: "Epinephrine addresses the multisystem pathophysiology of anaphylaxis." },
  { name: "discharge and written action plan", lesson: "acute-exacerbations-action-plans-and-follow-up", principle: "Discharge is a prevention intervention that must connect recovery to ICS-containing treatment, technique, action thresholds, and early follow-up.", action: "Confirm stability, supply medicines, observe technique, provide a written action plan, state maximum reliever use and emergency triggers, and arrange prompt review.", assessment: "Review oxygenation, airflow, symptom trajectory, controller and rescue supply, technique, trigger, adherence, steroid course, social barriers, action plan, and appointment.", hazard: "Discharging after transient bronchodilator response without prevention planning increases relapse and future severe-event risk.", why: "The post-attack period is a high-risk transition with correctable system failures." },
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

// Individually reviewed foundation items retain their historical IDs.
const reviewedFoundationQuestions = [
  {
    "id": "asthma-001",
    "question": "After albuterol relieves wheeze, what remains unproven?",
    "choices": [
      "Control of airway inflammation",
      "Occurrence of symptom relief",
      "Exposure to a bronchodilator",
      "Improvement noticed by the patient"
    ],
    "answer": 0,
    "rationale": "Relief alone does not establish inflammatory control.",
    "reviewHref": "#airway-biology-and-disease-expression"
  },
  {
    "id": "asthma-002",
    "question": "An adult with confirmed asthma uses only albuterol and feels well between attacks. Which treatment gap needs review?",
    "choices": [
      "Missing ICS-containing treatment",
      "Missing antibiotic prophylaxis",
      "Missing routine sedative treatment",
      "Missing daily epinephrine"
    ],
    "answer": 0,
    "rationale": "Infrequent symptoms do not remove the need for ICS-containing treatment.",
    "reviewHref": "#airway-biology-and-disease-expression"
  },
  {
    "id": "asthma-003",
    "question": "A patient with longstanding asthma has persistent airflow limitation. Which interpretation is appropriate?",
    "choices": [
      "Asthma can develop less reversible obstruction",
      "Persistent limitation rules out asthma",
      "Every obstruction must normalize after one puff",
      "Persistent limitation proves bacterial infection"
    ],
    "answer": 0,
    "rationale": "Longstanding asthma may have persistent limitation; reassess other causes without excluding asthma automatically.",
    "reviewHref": "#airway-biology-and-disease-expression"
  },
  {
    "id": "asthma-004",
    "question": "Which explanation best separates bronchoconstriction from inflammatory control?",
    "choices": [
      "Opening an airway does not establish resolution of inflammation",
      "Any symptom relief proves the disease is cured",
      "Bronchodilators permanently remove mucus glands",
      "Normal breathing between attacks eliminates future risk"
    ],
    "answer": 0,
    "rationale": "These treatment effects address different disease processes.",
    "reviewHref": "#airway-biology-and-disease-expression"
  },
  {
    "id": "asthma-005",
    "question": "An adult coughs around cleaning sprays. What does this observation establish?",
    "choices": [
      "An exposure association requiring evaluation",
      "A confirmed asthma diagnosis",
      "A confirmed IgE allergy",
      "A proven need for biologic treatment"
    ],
    "answer": 0,
    "rationale": "Trigger history helps evaluation but does not independently confirm asthma.",
    "reviewHref": "#definition-diagnosis-and-phenotype"
  },
  {
    "id": "asthma-006",
    "question": "A patient avoids all exercise because it can trigger symptoms. Which advice fits asthma management?",
    "choices": [
      "Develop a symptom-management plan that supports activity",
      "Avoid physical activity permanently",
      "Stop controller treatment before exercising",
      "Exercise through severe breathing difficulty"
    ],
    "answer": 0,
    "rationale": "Managing exercise symptoms supports safe activity rather than blanket avoidance.",
    "reviewHref": "#control-risk-and-longitudinal-assessment"
  },
  {
    "id": "asthma-007",
    "question": "Adult-onset respiratory symptoms improve during vacations from work. What history is particularly relevant?",
    "choices": [
      "Workplace airborne exposures and symptom timing",
      "Only the patient's favorite foods",
      "Only the preferred inhaler color",
      "Only the pharmacy opening hours"
    ],
    "answer": 0,
    "rationale": "A work-related pattern warrants evaluation for occupational asthma.",
    "reviewHref": "#children-special-situations-and-severe-asthma"
  },
  {
    "id": "asthma-008",
    "question": "An asymptomatic adult with suspected asthma has normal spirometry once. What follows?",
    "choices": [
      "Consider repeat testing during symptoms or another appropriate test",
      "Exclude asthma permanently",
      "Diagnose asthma from triggers alone",
      "Treat the normal test as proof of cured asthma"
    ],
    "answer": 0,
    "rationale": "Variable disease may require testing on another occasion.",
    "reviewHref": "#definition-diagnosis-and-phenotype"
  }
];

const reviewedQuestionRevisions = {
  "asthma-031": {
    "question": "An adult develops a persistent dry cough after starting an ACE inhibitor. What belongs in the asthma differential review?",
    "choices": [
      "A possible medication-related cough",
      "Proof of eosinophilic asthma",
      "Proof of bacterial pneumonia",
      "An automatic indication for a biologic"
    ],
    "answer": 0,
    "rationale": "Medication history matters; cough alone does not establish asthma."
  },
  "asthma-035": {
    "question": "Blood eosinophils are low immediately after prednisone. What is essential before interpreting the result for phenotyping?",
    "choices": [
      "Review steroid exposure and consider appropriately timed reassessment",
      "Declare lifelong absence of Type 2 inflammation",
      "Ignore all earlier eosinophil results",
      "Increase prednisone solely to improve biomarker detection"
    ],
    "answer": 0,
    "rationale": "Systemic corticosteroids can suppress biomarkers. One treated value may misrepresent the phenotype."
  },
  "asthma-036": {
    "question": "Which conclusion overstates an elevated FeNO result?",
    "choices": [
      "It independently proves asthma",
      "It can support Type 2 inflammation",
      "Its interpretation requires clinical context",
      "Other conditions may elevate it"
    ],
    "answer": 0,
    "rationale": "FeNO supports assessment but is not a stand-alone asthma diagnosis."
  },
  "asthma-040": {
    "question": "An adult has infrequent symptoms but was hospitalized for asthma last year. Which interpretation is unsafe?",
    "choices": [
      "Few symptoms establish low future attack risk",
      "Prior severe events remain relevant",
      "Current symptoms and future risk both need assessment",
      "Prevention treatment and implementation merit review"
    ],
    "answer": 0,
    "rationale": "Low symptom frequency does not erase risk associated with a recent severe event."
  },
  "asthma-048": {
    "question": "A patient cannot afford the prescribed controller. Which assumption would undermine the treatment review?",
    "choices": [
      "The prescription proves the medicine is being used",
      "Cost may prevent access",
      "Actual use needs a nonjudgmental discussion",
      "An affordable treatment plan is needed"
    ],
    "answer": 0,
    "rationale": "Prescribing does not establish access or use."
  },
  "asthma-051": {
    "question": "At a routine visit, persistent symptoms prompt consideration of a higher controller dose. Technique has never been observed. What should happen before escalation?",
    "choices": [
      "Observe the device technique and assess adherence",
      "Assume refills prove correct delivery",
      "Increase treatment without reviewing implementation",
      "Classify the disease as severe immediately"
    ],
    "answer": 0,
    "rationale": "Technique and adherence are modifiable causes of apparent treatment failure."
  },
  "asthma-062": {
    "question": "An ICS-formoterol inhaler is proposed as a reliever. What must be checked before accepting that plan?",
    "choices": [
      "Evidence and instructions for the exact product, strength, age and regimen",
      "Only whether formoterol appears among the ingredients",
      "Only whether the inhaler has a dose counter",
      "Only whether it is already used for maintenance"
    ],
    "answer": 0,
    "rationale": "Formoterol content alone does not establish suitability for every reliever regimen."
  },
  "asthma-063": {
    "question": "A patient using one ICS-formoterol inhaler takes two maintenance puffs each morning and evening, plus three extra symptom-relief puffs today. What total must be compared with the prescribed daily limit?",
    "choices": [
      "Seven inhalations",
      "Three inhalations",
      "Four inhalations",
      "Five inhalations"
    ],
    "answer": 0,
    "rationale": "2 + 2 + 3 = 7. Count maintenance and reliever use together; the permitted limit depends on the exact regimen."
  },
  "asthma-064": {
    "question": "Can an ICS-salmeterol product replace ICS-formoterol for the as-needed portion of MART?",
    "choices": [
      "No; it is not a MART reliever substitute",
      "Yes; all LABAs are interchangeable for relief",
      "Yes; taking twice the maintenance dose establishes equivalence",
      "Yes; the corticosteroid determines immediate bronchodilator onset"
    ],
    "answer": 0,
    "rationale": "MART uses an appropriate ICS-formoterol regimen; an ICS-salmeterol inhaler is not interchangeable for this purpose."
  },
  "asthma-068": {
    "question": "An adult follows an explicitly prescribed AIR-only regimen without scheduled maintenance doses. Which interpretation is incorrect?",
    "choices": [
      "Absence of scheduled doses automatically proves nonadherence",
      "The actual prescribed regimen must be identified",
      "AIR-only differs from MART",
      "As-needed instructions and daily limits still matter"
    ],
    "answer": 0,
    "rationale": "Adherence is judged against the prescribed regimen. AIR-only intentionally lacks scheduled maintenance."
  },
  "asthma-097": {
    "question": "An adult has good asthma control but requires high-dose treatment to sustain it. Does current control alone exclude difficult-to-treat asthma?",
    "choices": [
      "No; treatment required to maintain control also matters",
      "Yes; all controlled asthma is mild",
      "Yes; only daily symptoms determine treatment difficulty",
      "Yes; a low symptom score establishes that treatment can be stopped"
    ],
    "answer": 0,
    "rationale": "Difficult-to-treat asthma can be controlled only because intensive treatment is being used. Severity assessment also requires treatment history and optimization."
  },
  "asthma-098": {
    "question": "At a routine visit, asthma remains uncontrolled on prescribed high-dose ICS-LABA, but the patient cannot demonstrate effective inhaler use. What is the next appropriate approach?",
    "choices": [
      "Correct technique and other modifiable contributors, then reassess",
      "Diagnose severe asthma solely from the prescribed dose",
      "Assume the device delivers the full dose regardless of technique",
      "Stop ICS because the prescription appears ineffective"
    ],
    "answer": 0,
    "rationale": "A high prescribed dose does not establish effective delivery or treatment resistance."
  },
  "asthma-099": {
    "question": "After diagnosis and modifiable contributors have been addressed, an adherent adult remains uncontrolled on optimized high-dose ICS-LABA. Which classification is supported?",
    "choices": [
      "Severe asthma",
      "Mild asthma because a controller has been prescribed",
      "No asthma because high-dose treatment was ineffective",
      "Medication nonadherence by definition"
    ],
    "answer": 0,
    "rationale": "Persistent poor control after documented optimization supports severe asthma; prescription intensity alone would not."
  },
  "asthma-100": {
    "question": "An adult becomes well controlled after inhaler technique and adherence are corrected. Which conclusion would be premature?",
    "choices": [
      "The earlier poor control proves severe treatment-resistant asthma",
      "Delivery problems contributed to the earlier poor control",
      "Response after optimization informs classification",
      "Ongoing follow-up remains necessary"
    ],
    "answer": 0,
    "rationale": "Improvement after correcting modifiable factors argues against using the earlier uncontrolled state as proof of severe asthma."
  },
  "asthma-106": {
    "question": "A patient with controlled asthma becomes pregnant. What routine asthma-review interval does GINA recommend during pregnancy?",
    "choices": [
      "Every four to six weeks",
      "Only after delivery",
      "Only if wheezing becomes daily",
      "Once per pregnancy regardless of symptoms"
    ],
    "answer": 0,
    "rationale": "Control may change during pregnancy; routine review every four to six weeks complements earlier assessment for worsening symptoms."
  },
  "asthma-107": {
    "question": "A school-age child cannot reliably use the prescribed inhaler at home. Which assessment most directly addresses this delivery problem?",
    "choices": [
      "Observe the child and caregiver using the actual device",
      "Infer correct technique from the prescription alone",
      "Check only whether the inhaler is the preferred color",
      "Assume adult device skills from the child's height"
    ],
    "answer": 0,
    "rationale": "Observed technique and caregiver support reveal delivery barriers that a prescription or refill record cannot establish."
  },
  "asthma-108": {
    "question": "A pregnant patient asks to stop an effective ICS-containing regimen solely because of pregnancy. Which response is appropriate?",
    "choices": [
      "Continue effective control treatment and review it with the care team",
      "Stop ICS immediately because pregnancy is an absolute contraindication",
      "Replace all controller treatment with an antihistamine",
      "Wait for a severe attack before reconsidering ICS"
    ],
    "answer": 0,
    "rationale": "Stopping effective control can expose the patient and fetus to harm from exacerbations; pregnancy alone is not a reason to discontinue ICS."
  },
  "asthma-118": {
    "question": "An adult is ready for discharge after an asthma attack. Which follow-up plan matches GINA guidance?",
    "choices": [
      "Arrange review within two to seven days, with earlier urgent reassessment if worsening",
      "Wait six months because the acute symptoms improved",
      "Review only if the inhaler becomes empty",
      "Avoid follow-up while taking an oral steroid course"
    ],
    "answer": 0,
    "rationale": "Early follow-up checks recovery and implementation of the prevention plan."
  },
  "asthma-119": {
    "question": "After an asthma attack, the patient reports improvement immediately after salbutamol. What must discharge assessment establish?",
    "choices": [
      "Sustained improvement, adequate oxygenation and airflow, and ability to manage at home",
      "Only a single report of less wheeze",
      "Only that a bronchodilator was given",
      "Only that the patient wants to leave"
    ],
    "answer": 0,
    "rationale": "A brief response is insufficient; reassess clinical stability and home resources before discharge."
  },
  "asthma-120": {
    "question": "A discharge plan restores the preattack prescriptions without checking access, use or technique. What is the main problem?",
    "choices": [
      "Correctable causes of the attack may remain unaddressed",
      "Every previous medicine is automatically contraindicated after an attack",
      "ICS must always be stopped after acute bronchodilation",
      "A written action plan replaces the need for medicines"
    ],
    "answer": 0,
    "rationale": "The attack should trigger review of treatment suitability and implementation, not automatic continuation without reassessment."
  }
};

export const asthmaQuestionBank = [
  ...reviewedFoundationQuestions,
  ...concepts.slice(2).flatMap((concept, remainingIndex) => {
    const conceptIndex = remainingIndex + 2;
    return dimensions.map(([field, prompt], dimensionIndex) => ({
      id: `asthma-${String(conceptIndex * 4 + dimensionIndex + 1).padStart(3, "0")}`,
      question: `${prompt} ${concept.name}?`,
      choices: [concept[field], ...distractors(conceptIndex, field)],
      answer: 0,
      rationale: concept.why,
      reviewHref: `#${concept.lesson}`,
    }));
  }),
].map((question) => ({ ...question, ...reviewedQuestionRevisions[question.id] }));

// Original calculation case; complements the concept-based questions.
asthmaQuestionBank.push({
  id: "asthma-reversibility-calculation",
  question: "An adult has technically acceptable pre/post-bronchodilator FEV1 values of 3.00 and 3.25 L, with unchanged FVC. Which interpretation is correct under GINA 2026?",
  choices: ["250 mL and 8.3%: the FEV1 response does not satisfy both adult thresholds", "250 mL alone establishes a positive response", "The percentage increase is 25%", "This result permanently excludes asthma"],
  answer: 0,
  rationale: "Subtract first: 0.25 L = 250 mL. Divide by the baseline: 0.25/3.00 × 100 = 8.3%. Only the volume criterion is met. Clinical reassessment may require further testing.",
  reviewHref: "#definition-diagnosis-and-phenotype",
});

asthmaQuestionBank.push({
  id: "asthma-pef-diary-calculation",
  question: "A fictional peak-flow diary records 360 L/min in the morning and 440 L/min in the evening. What is that day's variability using the mean of the two readings?",
  choices: ["20%; this is one day's result", "18.2%, using 440 as the denominator", "22.2%, using 360 as the denominator", "80%; the numerical difference is already a percentage"],
  answer: 0,
  rationale: "The mean is (360 + 440)/2 = 400. The difference is 80. Thus 100 × 80/400 = 20%. Average daily percentages across the diary before interpreting the monitoring period.",
  reviewHref: "#definition-diagnosis-and-phenotype",
}, {
  id: "asthma-pef-zone-boundary",
  question: "An asymptomatic adult has a personal-best PEF of 500 L/min and a current PEF of 400 L/min. Which numerical zone applies in the NHLBI action-plan framework?",
  choices: ["Green: 80% of personal best", "Yellow: 80% belongs below the green boundary", "Red: any fall below personal best is red", "The percentage cannot be calculated from flow rates"],
  answer: 0,
  rationale: "400/500 × 100 = 80%. The green boundary includes 80%. Continue the individualized plan; symptoms must also be assessed rather than interpreting the number alone.",
  reviewHref: "#acute-exacerbations-action-plans-and-follow-up",
});

asthmaQuestionBank.push({
  id: "asthma-control-preexercise-saba",
  question: "Over four weeks, a patient reports no daytime symptoms, night waking, or activity limitation. Albuterol was used only before exercise on three days weekly. How should the GINA symptom-control checklist be scored?",
  choices: ["Zero positive items; assess future risk separately", "One positive item because all albuterol use counts", "Three positive items, one per exercise day", "Severe asthma is established by this frequency"],
  answer: 0,
  rationale: "Pre-exercise SABA does not count in this checklist item. The remaining items are negative. This symptom score does not establish low future risk or disease severity.",
  reviewHref: "#control-risk-and-longitudinal-assessment",
});

asthmaQuestionBank.push({
  id: "asthma-airsupra-puffs-versus-doses",
  question: "An adult has taken five two-puff Airsupra doses within 24 hours and still has symptoms. Which statement correctly interprets the label?",
  choices: ["Ten puffs have been used; persistent symptoms need reassessment, and the daily ceiling is 12 puffs", "Five puffs have been used; seven two-puff doses remain", "The daily maximum is 12 two-puff doses", "Symptoms should not be evaluated until all 12 puffs are used"],
  answer: 0,
  rationale: "Five × two = ten puffs. Six two-puff doses total twelve puffs. Persistent symptoms are a reason to reassess, not permission to exceed the limit.",
  reviewHref: "#stepwise-controller-and-reliever-strategy",
});

asthmaQuestionBank.push({
  id: "asthma-albuterol-concentrate-dilution",
  question: "An adult is prescribed 2.5 mg nebulized albuterol. The supplied 0.5% vial contains 2.5 mg in 0.5 mL, with instructions to dilute to 3 mL. How much sterile normal saline is added?",
  choices: ["2.5 mL", "3 mL", "0.5 mL", "None; every unit-of-use vial is ready to use"],
  answer: 0,
  rationale: "Final volume minus drug volume = 3.0 - 0.5 = 2.5 mL saline. The prescribed drug amount remains 2.5 mg. Concentration and preparation instructions, not vial appearance, determine whether dilution is required.",
  reviewHref: "#nebulized-drug-preparation-and-storage",
});

asthmaQuestionBank.push({
  id: "asthma-montelukast-exercise-duplication",
  question: "A 12-year-old takes montelukast 5 mg every evening and asks about another 5 mg before tomorrow's soccer game. Which advice is correct?",
  choices: ["Do not add another montelukast dose; follow the prescribed exercise and rescue plan", "Add 5 mg before every game", "Double the nightly dose on exercise days", "Replace the rescue inhaler with extra montelukast"],
  answer: 0,
  rationale: "Daily montelukast users should not add a dose for exercise. Montelukast is not an acute rescue medicine.",
  reviewHref: "#adjunct-drugs-safety-and-monitoring",
});

asthmaQuestionBank.push({
  id: "asthma-zafirlukast-meals",
  question: "An adult prescribed zafirlukast 20 mg twice daily takes both doses with meals. Which correction follows labeling?",
  choices: ["Take each dose at least one hour before or two hours after food", "Food is required for absorption", "Take both tablets together at bedtime", "Use it only during sudden wheezing"],
  answer: 0,
  rationale: "Food reduces zafirlukast bioavailability. Separate doses from meals as labeled; do not convert scheduled therapy to rescue use.",
  reviewHref: "#adjunct-drugs-safety-and-monitoring",
}, {
  id: "asthma-zileuton-theophylline",
  question: "Zileuton extended-release is being started in a patient receiving theophylline. What does the zileuton label recommend?",
  choices: ["Reduce theophylline approximately by half and monitor concentrations", "Double theophylline", "Keep the dose and omit concentration monitoring", "Replace concentration monitoring with peak flow alone"],
  answer: 0,
  rationale: "Zileuton reduces theophylline clearance. Dose reduction and concentration-guided adjustment address the resulting toxicity risk.",
  reviewHref: "#adjunct-drugs-safety-and-monitoring",
});

asthmaQuestionBank.push({
  id: "asthma-theophylline-symptomatic-level",
  question: "A Theo-24 user develops repeated vomiting and a rapid heartbeat four hours after a dose. What is the appropriate response?",
  choices: ["Withhold further doses, seek urgent evaluation and measure the level now", "Wait eight more hours before seeking assessment", "Take an extra dose because absorption may be incomplete", "Continue dosing unless a scheduled trough exceeds its range"],
  answer: 0,
  rationale: "Suspected toxicity calls for immediate testing and evaluation. The scheduled peak-sampling rule does not justify delaying care.",
  reviewHref: "#adjunct-drugs-safety-and-monitoring",
});

asthmaQuestionBank.push({
  id: "asthma-tiotropium-strength",
  question: "Which Spiriva Respimat regimen matches US asthma labeling for an 8-year-old?",
  choices: ["Two 1.25 mcg inhalations once daily, totaling 2.5 mcg", "Two 2.5 mcg inhalations once daily, totaling 5 mcg", "One 1.25 mcg inhalation only during symptoms", "Two 1.25 mcg inhalations every four hours as rescue"],
  answer: 0,
  rationale: "The asthma regimen uses two puffs of the 1.25 mcg strength once daily. The higher two-puff regimen is the COPD dose.",
  reviewHref: "#adjunct-drugs-safety-and-monitoring",
});

asthmaQuestionBank.push({
  id: "asthma-dulera-repriming",
  question: "A patient resumes a Dulera inhaler after six unused days. How should the device be prepared?",
  choices: ["Release four test sprays away from the face, shaking before each", "Release one test spray", "Inhale four extra treatment puffs", "Skip priming because the device was used previously"],
  answer: 0,
  rationale: "Six days exceeds the five-day threshold. Dulera requires four re-priming sprays; priming is not extra inhaled medication.",
  reviewHref: "#aerosol-and-soft-mist-inhaler-technique",
});

asthmaQuestionBank.push({
  id: "asthma-qvar-device-exception",
  question: "A patient plans to use a spacer with QVAR RediHaler. Which correction is appropriate?",
  choices: ["Do not attach a spacer; this breath-actuated aerosol requires its own technique", "Prime it four times through the spacer", "Shake vigorously with the cap open", "Wash the entire device after every dose"],
  answer: 0,
  rationale: "QVAR RediHaler instructions prohibit a spacer and require neither priming nor shaking. Device-specific teaching prevents applying conventional inhaler instructions incorrectly.",
  reviewHref: "#aerosol-and-soft-mist-inhaler-technique",
}, {
  id: "asthma-flexhaler-first-dose",
  question: "A patient has completed both priming twist cycles for a new Pulmicort Flexhaler. What comes next before the first inhalation?",
  choices: ["Load a dose with a separate full twist-and-return cycle", "Wash the mouthpiece", "Shake vigorously", "Assume priming replaces dose loading"],
  answer: 0,
  rationale: "One-time priming prepares the device. Dose loading is a separate step, including before the first inhalation.",
  reviewHref: "#dry-powder-inhaler-technique",
});

asthmaQuestionBank.push({
  "id": "asthma-symbicort-dropped",
  "question": "A conventional Symbicort 160/4.5 aerosol was dropped today. Which preparation follows its instructions?",
  "choices": [
    "Release two test sprays away from the face, shaking before each",
    "Skip priming because it was used today",
    "Wash the assembled inhaler in water",
    "Inhale two extra doses as a device test"
  ],
  "answer": 0,
  "rationale": "Dropping triggers re-priming even without a long gap in use. Test sprays are released into the air.",
  "reviewHref": "#aerosol-and-soft-mist-inhaler-technique"
});

asthmaQuestionBank.push({
  "id": "asthma-aerosphere-cleaning",
  "question": "A patient has finished rinsing a Symbicort Aerosphere actuator. What must happen before using it?",
  "choices": [
    "Let it air-dry fully, reassemble and re-prime with two test sprays",
    "Insert the canister while the actuator is wet",
    "Dry the inside with a tissue and inhale immediately",
    "Replace the canister without re-priming"
  ],
  "answer": 0,
  "rationale": "Aerosphere instructions require complete air-drying and re-priming after rinsing. Device names matter when teaching cleaning.",
  "reviewHref": "#aerosol-and-soft-mist-inhaler-technique"
});

asthmaQuestionBank.push({
  "id": "asthma-respimat-long-gap",
  "question": "A Spiriva Respimat has not been used for 24 days. Which preparation is appropriate?",
  "choices": [
    "Spray toward the ground until mist appears, then repeat three more times",
    "Release only one test spray regardless of the gap",
    "Swallow the cartridge contents",
    "Take extra maintenance doses to test delivery"
  ],
  "answer": 0,
  "rationale": "A gap exceeding 21 days requires the full preparation sequence. The one-spray rule applies to shorter gaps exceeding three days.",
  "reviewHref": "#aerosol-and-soft-mist-inhaler-technique"
});

asthmaQuestionBank.push({
  "id": "asthma-diskus-no-taste",
  "question": "A patient used Advair Diskus correctly but did not taste any powder. What is the appropriate advice?",
  "choices": [
    "Do not repeat the dose solely because it was not tasted",
    "Load another dose until powder is tasted",
    "Wash the device before repeating",
    "Attach a spacer and repeat"
  ],
  "answer": 0,
  "rationale": "The powder may not be felt or tasted. That alone does not justify an extra dose.",
  "reviewHref": "#dry-powder-inhaler-technique"
});

asthmaQuestionBank.push({
  "id": "asthma-respiclick-counter",
  "question": "A patient opens and closes AirDuo RespiClick without inhaling. Its counter decreases. What does this establish?",
  "choices": [
    "The device was operated, not that medication reached the lungs",
    "A complete lung dose was delivered",
    "The patient took an extra systemic dose",
    "The inhaler needs routine priming"
  ],
  "answer": 0,
  "rationale": "Cap operation advances the counter and can waste medication. Observe inhalation technique to evaluate delivery.",
  "reviewHref": "#dry-powder-inhaler-technique"
});

asthmaQuestionBank.push({
  "id": "asthma-respiclick-water",
  "question": "A ProAir RespiClick was accidentally washed in water. Which action follows its instructions?",
  "choices": [
    "Replace the inhaler",
    "Dry it overnight and continue using it",
    "Release four priming sprays",
    "Use a spacer to compensate"
  ],
  "answer": 0,
  "rationale": "The label instructs replacement after washing or immersion. This dry-powder device must be kept dry.",
  "reviewHref": "#dry-powder-inhaler-technique"
});

asthmaQuestionBank.push({
  "id": "asthma-montelukast-granules",
  "question": "A caregiver plans to mix montelukast granules into juice and refrigerate the mixture overnight. Which correction is appropriate?",
  "choices": [
    "Use an allowed vehicle and give the full dose within 15 minutes of opening",
    "Refrigeration makes any mixture acceptable",
    "Warm juice improves stability",
    "Divide the packet into several stored doses"
  ],
  "answer": 0,
  "rationale": "The granule instructions limit mixing vehicles and prohibit storing a prepared mixture. Drinks can be given after administration.",
  "reviewHref": "#adjunct-drugs-safety-and-monitoring"
});

asthmaQuestionBank.push({
  "id": "asthma-respules-opened-ampule",
  "question": "A Pulmicort Respules ampule was opened yesterday. Its foil envelope was first opened three days ago. Can the opened ampule be used today?",
  "choices": [
    "No; opened ampules require immediate use",
    "Yes; every ampule is usable for two weeks after opening",
    "Yes; refrigeration resets the limit",
    "Yes; the printed expiration date is the only limit"
  ],
  "answer": 0,
  "rationale": "The two-week period concerns protected unused sealed ampules after envelope opening. It does not permit storing an opened ampule.",
  "reviewHref": "#nebulized-drug-preparation-and-storage"
});

asthmaQuestionBank.push({
  "id": "asthma-pediatric-steroid-cap",
  "question": "A 30 kg child aged 9 is prescribed prednisolone at 2 mg/kg/day for an acute asthma exacerbation using the GINA 2026 ceiling. What daily dose results?",
  "choices": [
    "40 mg",
    "60 mg",
    "30 mg",
    "120 mg"
  ],
  "answer": 0,
  "rationale": "The weight calculation gives 60 mg/day, but the 40 mg/day ceiling applies. Dose calculation must include the maximum.",
  "reviewHref": "#acute-exacerbations-action-plans-and-follow-up"
});

asthmaQuestionBank.push({
  "id": "asthma-il5-target-distinction",
  "question": "Which pairing correctly distinguishes the molecular targets of eosinophilic-asthma biologics?",
  "choices": [
    "Mepolizumab binds IL-5; benralizumab binds IL-5 receptor alpha",
    "Both bind IL-5 receptor alpha",
    "Reslizumab binds IgE; benralizumab binds TSLP",
    "Mepolizumab binds IL-4 receptor alpha"
  ],
  "answer": 0,
  "rationale": "Mepolizumab and reslizumab target the cytokine. Benralizumab targets its receptor and promotes cell-mediated eosinophil depletion.",
  "reviewHref": "#targeted-biologic-therapies"
});

asthmaQuestionBank.push({
  "id": "asthma-dupilumab-signals",
  "question": "Which explanation correctly links dupilumab binding to its affected cytokine signals?",
  "choices": [
    "IL-4 receptor alpha binding inhibits IL-4 and IL-13 signaling",
    "IL-3 receptor binding inhibits IL-3 alone",
    "IL-5 binding directly neutralizes IgE",
    "TSLP binding blocks the beta2 receptor"
  ],
  "answer": 0,
  "rationale": "Dupilumab binds the shared IL-4 receptor alpha subunit. The relevant signals are IL-4 and IL-13, not IL-3.",
  "reviewHref": "#targeted-biologic-therapies"
});

asthmaQuestionBank.push({
  "id": "asthma-mepolizumab-child-dose",
  "question": "Which Nucala asthma regimen matches labeling for a 10-year-old?",
  "choices": [
    "40 mg subcutaneously every four weeks",
    "100 mg subcutaneously every four weeks",
    "40 mg intravenously each week",
    "300 mg subcutaneously every eight weeks"
  ],
  "answer": 0,
  "rationale": "The labeled asthma dose at ages 6 to 11 is 40 mg every four weeks. Do not copy a different age or indication regimen.",
  "reviewHref": "#targeted-biologic-therapies"
});

asthmaQuestionBank.push({
  "id": "asthma-benralizumab-week16",
  "question": "An eligible 8-year-old weighing 35 kg receives Fasenra for asthma at weeks 0, 4 and 8. Which dose and timing come next?",
  "choices": [
    "30 mg at week 16",
    "10 mg at week 12",
    "30 mg at week 12",
    "10 mg at week 16"
  ],
  "answer": 0,
  "rationale": "At 35 kg the pediatric dose is 30 mg. After three four-weekly doses, the interval becomes eight weeks: 8 + 8 = week 16.",
  "reviewHref": "#targeted-biologic-therapies"
});

asthmaQuestionBank.push({
  "id": "asthma-reslizumab-vial-volume",
  "question": "A 70 kg adult is prescribed Cinqair 3 mg/kg. The vial contains 10 mg/mL. What volume is withdrawn before dilution?",
  "choices": [
    "21 mL",
    "7 mL",
    "70 mL",
    "210 mL"
  ],
  "answer": 0,
  "rationale": "70 \u00d7 3 = 210 mg, then 210 / 10 = 21 mL. This is concentrate volume, not the final infusion volume or an IV push instruction.",
  "reviewHref": "#targeted-biologic-therapies"
});

asthmaQuestionBank.push({
  "id": "asthma-dupilumab-dermatitis-loading",
  "question": "An eligible 8-year-old, 25 kg child has asthma and moderate-to-severe atopic dermatitis. Which Dupixent starting dose applies?",
  "choices": [
    "600 mg",
    "No loading dose",
    "400 mg",
    "200 mg"
  ],
  "answer": 0,
  "rationale": "For ages 6 to 11 with asthma and moderate-to-severe atopic dermatitis, use the dermatitis schedule. At 25 kg, that is 600 mg initially as two 300 mg injections, followed by 300 mg every four weeks. The asthma-only schedule at this weight omits loading.",
  "reviewHref": "#targeted-biologic-therapies"
});

asthmaQuestionBank.push({
  "id": "asthma-dupilumab-ocs-regimen",
  "question": "For an oral-corticosteroid-dependent adult starting Dupixent for asthma, which loading/maintenance pair applies?",
  "choices": [
    "600 mg / 300 mg every two weeks",
    "400 mg / 200 mg every two weeks",
    "No load / 300 mg monthly",
    "600 mg / 600 mg weekly"
  ],
  "answer": 0,
  "rationale": "Oral-corticosteroid-dependent asthma selects a 600 mg loading dose followed by 300 mg every two weeks. The 400 mg/200 mg option is a different labeled asthma regimen; it is not the selected regimen for this patient.",
  "reviewHref": "#targeted-biologic-therapies"
});

asthmaQuestionBank.push({
  "id": "asthma-tezepelumab-guideline-status",
  "question": "After diagnosis, technique, adherence and contributing conditions are addressed, severe asthma remains uncontrolled on high-dose ICS-LABA. Which statement reflects GINA 2026?",
  "choices": [
    "Tezepelumab is a guideline-listed add-on option for eligible patients aged 12 or older",
    "Tezepelumab has not entered asthma guidelines",
    "A biologic replaces acute rescue treatment",
    "Every patient should stop ICS before biologic selection"
  ],
  "answer": 0,
  "rationale": "GINA now includes anti-TSLP therapy in severe-asthma care. The historical textbook statement about awaiting guideline inclusion is outdated; local eligibility still matters.",
  "reviewHref": "#targeted-biologic-therapies"
});

asthmaQuestionBank.push({
  "id": "asthma-omalizumab-home-selection",
  "question": "An asthma patient tolerated three supervised Xolair doses but has previous peanut anaphylaxis. Is automatic home-use approval appropriate?",
  "choices": [
    "No; review the full asthma-specific selection criteria",
    "Yes; three tolerated doses establish eligibility",
    "Yes; food reactions never matter",
    "Yes; tolerance eliminates future anaphylaxis"
  ],
  "answer": 0,
  "rationale": "The label includes prior anaphylaxis history, not just initial-dose tolerance.",
  "reviewHref": "#omalizumab-dosing-and-safety"
});

asthmaQuestionBank.push({
  "id": "asthma-omalizumab-dose-interval",
  "question": "An adult, 70 kg, with pretreatment IgE 250 IU/mL starts Xolair for asthma. Which table-derived regimen applies?",
  "choices": [
    "225 mg every two weeks",
    "225 mg every four weeks",
    "300 mg every four weeks",
    "375 mg every two weeks"
  ],
  "answer": 0,
  "rationale": "The adult table places this weight and IgE combination in the two-week interval region.",
  "reviewHref": "#omalizumab-dosing-and-safety"
});

asthmaQuestionBank.push({
  "id": "asthma-omalizumab-interruption",
  "question": "Xolair for asthma was stopped 14 months ago. Which IgE measurement should guide a new dosing evaluation?",
  "choices": [
    "A newly measured total IgE",
    "Only the original pretreatment IgE",
    "The highest on-treatment IgE",
    "IgE is never used in asthma dosing"
  ],
  "answer": 0,
  "rationale": "An interruption of at least one year requires repeat total IgE for dose determination.",
  "reviewHref": "#omalizumab-dosing-and-safety"
});

asthmaQuestionBank.push({
  "id": "asthma-omalizumab-presentation-volume",
  "question": "An adult requires Xolair 300 mg. How do the labeled prefilled-device and reconstituted-vial options differ?",
  "choices": [
    "One 2 mL prefilled injection versus two vial-derived injections totaling 2.4 mL",
    "Both require a single 2.4 mL injection",
    "Both require a single 2 mL injection",
    "The vial requires IV administration"
  ],
  "answer": 0,
  "rationale": "Presentation determines concentration and injection count; the reconstituted vial has a 150 mg-per-site limit.",
  "reviewHref": "#omalizumab-dosing-and-safety"
});

asthmaQuestionBank.push({
  "id": "asthma-omalizumab-serum-sickness",
  "question": "Four days after Xolair, a patient develops fever, rash, painful joints and enlarged lymph nodes. Which response fits labeling?",
  "choices": [
    "Stop Xolair and assess the systemic reaction",
    "Continue because only immediate reactions matter",
    "Give another dose to confirm the reaction",
    "Replace rescue therapy with Xolair"
  ],
  "answer": 0,
  "rationale": "This constellation resembles serum sickness and calls for stopping treatment and assessment.",
  "reviewHref": "#omalizumab-dosing-and-safety"
});

asthmaQuestionBank.push({
  "id": "asthma-depemokimab-missed-dose",
  "question": "A delayed Exdensur dose is administered August 10. When should the next six-month dose be scheduled?",
  "choices": [
    "February 10",
    "January 10 regardless of the delay",
    "September 10",
    "August 10 next year"
  ],
  "answer": 0,
  "rationale": "Restart the six-month interval from the actual delayed-dose date.",
  "reviewHref": "#targeted-biologic-therapies"
});

asthmaQuestionBank.push({
  "id": "asthma-omalizumab-reconstitution",
  "question": "After correctly reconstituting a Xolair vial with 1.4 mL sterile water, what volume delivers 150 mg?",
  "choices": [
    "1.2 mL",
    "1.4 mL",
    "1 mL",
    "0.6 mL"
  ],
  "answer": 0,
  "rationale": "The labeled administered volume differs from the diluent volume.",
  "reviewHref": "#omalizumab-dosing-and-safety"
});

asthmaQuestionBank.push({
  "id": "asthma-dupilumab-delayed-dose",
  "question": "A two-weekly Dupixent dose is nine days late. What does current labeling direct?",
  "choices": [
    "Give it now and restart the schedule from today",
    "Skip it and retain the old schedule",
    "Give two doses now",
    "Wait another four weeks"
  ],
  "answer": 0,
  "rationale": "For every-two-week dosing, the current US label directs giving a dose within seven days while retaining the original schedule. At nine days late, give it and restart the two-week schedule from that date. Do not double doses or apply the older skip-dose instruction.",
  "reviewHref": "#targeted-biologic-therapies"
});

asthmaQuestionBank.push({
  "id": "asthma-aminophylline-exact-content",
  "question": "An aminophylline vial states that each mL contains 25 mg aminophylline dihydrate equivalent to 19.7 mg anhydrous theophylline. How much anhydrous theophylline is in 10 mL, using the stated label equivalence?",
  "choices": [
    "197 mg",
    "200 mg",
    "250 mg",
    "312.5 mg"
  ],
  "answer": 0,
  "rationale": "10 mL multiplied by 19.7 mg/mL equals 197 mg. The rounded 0.8 teaching factor would give 200 mg, but this question specifies the actual label equivalence.",
  "reviewHref": "#adjunct-drugs-safety-and-monitoring"
});

asthmaQuestionBank.push({
  "id": "asthma-zileuton-formulation",
  "question": "A prescription specifies Zyflo immediate-release 600 mg. Which maintenance schedule matches its labeling for an adult?",
  "choices": [
    "One tablet four times daily",
    "Two tablets twice daily as though it were extended-release",
    "One tablet once daily",
    "One tablet only during acute wheezing"
  ],
  "answer": 0,
  "rationale": "Immediate-release Zyflo uses 600 mg four times daily. Extended-release zileuton uses 1200 mg twice daily; equal daily milligrams do not make the schedules interchangeable. Neither is rescue treatment.",
  "reviewHref": "#adjunct-drugs-safety-and-monitoring"
});

asthmaQuestionBank.push({
  "id": "asthma-mart-total-inhalations",
  "question": "An adult takes two budesonide-formoterol inhalations twice daily and eight relief inhalations. What is the 24-hour total?",
  "choices": [
    "12 inhalations",
    "8 inhalations",
    "4 inhalations",
    "16 inhalations"
  ],
  "answer": 0,
  "rationale": "Scheduled 2\u00d72 plus eight relief inhalations equals 12. Maintenance doses count toward the daily total.",
  "reviewHref": "#stepwise-controller-and-reliever-strategy"
});

asthmaQuestionBank.push({
  "id": "asthma-ics-age-category",
  "question": "Using GINA metered-dose categories, how is budesonide DPI 400 mcg/day classified in an adult versus an eight-year-old?",
  "choices": [
    "Low in the adult; medium in the child",
    "Low in both",
    "High in both",
    "Medium in the adult; low in the child"
  ],
  "answer": 0,
  "rationale": "Adult budesonide DPI categories are low at 200 to 400 mcg/day and medium above 400 to 800. At ages 6 to 11, low is 100 to 200 and medium above 200 to 400. Thus 400 is adult low and child medium. These GINA categories are not equivalent-dose conversion rules or product dosing limits.",
  "reviewHref": "#airway-pharmacology-and-inhaler-delivery"
});

// Original application cases for formulation, phenotype and monitored acute care.
asthmaQuestionBank.push({
  "id": "asthma-air-strength-selection",
  "question": "An adult is prescribed GINA AIR-only therapy. Which delivered budesonide-formoterol strength matches the recommended adult regimen described in this module?",
  "choices": [
    "160/4.5 mcg per inhalation",
    "320/9 mcg per inhalation because fewer puffs are always safer",
    "80/4.5 mcg per inhalation because pediatric and adult AIR strengths are interchangeable",
    "Any strength containing formoterol with the same puff limit"
  ],
  "answer": 0,
  "rationale": "GINA recommends 160/4.5 for adult/adolescent AIR. It does not recommend 320/9 as a reliever, and 80/4.5 is the pediatric AIR strength. Confirm product, device, local approval and the prescribed action plan.",
  "reviewHref": "#stepwise-controller-and-reliever-strategy"
},
{
  "id": "asthma-aerd-analgesic-counseling",
  "question": "An adult with asthma and recurrent nasal polyps developed bronchospasm after aspirin and ibuprofen. Which counseling is most appropriate?",
  "choices": [
    "Avoid COX-1 inhibitors and obtain specialist advice before selecting or challenging an alternative",
    "Try a larger aspirin dose at home to confirm the reaction",
    "Acetaminophen is guaranteed safe at every dose without assessment",
    "Stop the inhaled corticosteroid because avoiding aspirin cures the airway disease"
  ],
  "answer": 0,
  "rationale": "The pattern suggests AERD. Avoid implicated COX-1 inhibitors, continue asthma control treatment and use specialist assessment for alternatives or desensitization. An alternative analgesic should not be presented as risk-free.",
  "reviewHref": "#children-special-situations-and-severe-asthma"
},
{
  "id": "asthma-pediatric-magnesium-protocol",
  "question": "In monitored acute care, a 30 kg child is prescribed IV magnesium sulfate 50 mg/kg over 30 minutes under a protocol capped at 2.5 g. What dose follows that prescription?",
  "choices": [
    "1.5 g infused over 30 minutes",
    "2.5 g because every child receives the maximum",
    "1.5 mg infused over 30 minutes",
    "1.5 g as a rapid IV push"
  ],
  "answer": 0,
  "rationale": "30 kg \u00d7 50 mg/kg = 1500 mg = 1.5 g, below the stated 2.5 g ceiling. Preserve the prescribed infusion time and cardiorespiratory monitoring. This supervised adjunct is not routine first-line therapy or a universal pediatric dose.",
  "reviewHref": "#acute-exacerbations-action-plans-and-follow-up"
});

// Original preventive-care and immunotherapy safety cases.
asthmaQuestionBank.push({
  "id": "asthma-influenza-preschool-product",
  "question": "A 4-year-old with asthma needs influenza vaccination and has no other vaccine contraindications. Which product approach is appropriate?",
  "choices": [
    "Use an age-appropriate inactivated injectable influenza vaccine",
    "Use live intranasal vaccine because the child is older than 2",
    "Avoid all influenza vaccines until age 5",
    "Stop controller treatment before vaccinating"
  ],
  "answer": 0,
  "rationale": "At ages 2 through 4, asthma excludes live intranasal vaccine. An age-appropriate inactivated vaccine remains an option; check prior doses to determine whether two seasonal doses are needed.",
  "reviewHref": "#control-risk-and-longitudinal-assessment"
},
{
  "id": "asthma-scit-symptomatic-visit",
  "question": "A patient attending a scheduled allergy injection reports wheezing and increased reliever use today. What is the appropriate next step under NAEPP asthma guidance?",
  "choices": [
    "Withhold SCIT and arrange assessment of the asthma symptoms",
    "Give the maintenance injection because only dose increases require control",
    "Give the injection at home after taking a reliever",
    "Give the injection and shorten observation if breathing improves"
  ],
  "answer": 0,
  "rationale": "Asthma control must be maintained during SCIT initiation, escalation and maintenance. Current symptoms require assessment rather than proceeding with the injection. SCIT requires supervised administration and at least 30 minutes of observation.",
  "reviewHref": "#children-special-situations-and-severe-asthma"
});

asthmaQuestionBank.push({
  "id": "asthma-albuterol-vial-strength",
  "question": "A prescription specifies albuterol 1.25 mg using a 1.25 mg/3 mL unit-dose vial. Which preparation matches it?",
  "choices": [
    "One full 3 mL vial without dilution",
    "One full 2.5 mg/3 mL vial because both contain 3 mL",
    "Three mL of 0.5% concentrate",
    "One 0.63 mg/3 mL vial without checking the ordered strength"
  ],
  "answer": 0,
  "rationale": "Match both drug amount and formulation. The ordered 1.25 mg/3 mL product is prediluted; equal vial volumes do not imply equal doses.",
  "reviewHref": "#nebulized-drug-preparation-and-storage"
});

asthmaQuestionBank.push({
  "id": "asthma-fluticasone-interaction",
  "question": "Fluticasone HFA and ritonavir appear on the same medication list. What requires review?",
  "choices": [
    "Increased systemic steroid exposure and adrenal suppression",
    "Loss of all steroid activity",
    "A need to double fluticasone automatically",
    "No interaction because fluticasone is inhaled"
  ],
  "answer": 0,
  "rationale": "Strong CYP3A4 inhibition raises fluticasone exposure. The label advises against this combination; arrange a safe alternative plan.",
  "reviewHref": "#airway-pharmacology-and-inhaler-delivery"
});

asthmaQuestionBank.push({
  "id": "asthma-before-controller-escalation",
  "question": "A 44-year-old prescribed daily ICS reports four symptomatic days weekly, activity limitation, no night waking and symptom-relief albuterol on four days weekly. Technique and adherence have not been assessed. What is the best interpretation and next step?",
  "choices": [
    "Three positive control items: uncontrolled symptoms; assess technique, adherence and modifiable factors before selecting a step-up",
    "Two positive items because daytime symptoms and SABA use count as one item",
    "Well-controlled symptoms because there is no night waking",
    "Severe asthma is established, so select a biologic immediately"
  ],
  "answer": 0,
  "rationale": "Daytime symptoms, symptom-driven SABA use and activity limitation are three separate positive items. This establishes uncontrolled symptoms, not treatment-resistant severe asthma. Verify implementation and modifiable contributors before choosing escalation.",
  "reviewHref": "#stepwise-controller-and-reliever-strategy"
});

asthmaQuestionBank.push({
  "id": "asthma-breztri-indication-strength",
  "question": "Which Breztri regimen matches US asthma labeling for a 16-year-old?",
  "choices": [
    "Two 160/18/4.8 mcg puffs twice daily",
    "Two 160/9/4.8 mcg puffs twice daily",
    "One puff only when symptoms occur",
    "Four puffs whenever exercise is planned"
  ],
  "answer": 0,
  "rationale": "The asthma strength differs from COPD. Breztri is scheduled maintenance, not a reliever.",
  "reviewHref": "#aerosol-and-soft-mist-inhaler-technique"
});

asthmaQuestionBank.push({
  id: "asthma-neffy-weight-boundary",
  question: "A patient weighing exactly 30 kg has prescribed Neffy for anaphylaxis. Which initial dose matches the March 2026 US label?",
  choices: ["One 2 mg spray into one nostril", "One 1 mg spray because 30 kg remains in the lower band", "One spray in each nostril for every initial dose", "Prime the device, then use whatever remains"],
  answer: 0,
  rationale: "The 2 mg band starts at 30 kg. Each device supplies one complete nasal dose; do not prime it. Use the emergency plan and seek assistance as directed. Nasal and injected milligram doses are not interchangeable.",
  reviewHref: "#acute-exacerbations-action-plans-and-follow-up",
});

asthmaQuestionBank.push({
  id: "asthma-otc-epinephrine-maoi",
  question: "An adult with diagnosed asthma stopped an MAOI seven days ago and asks about Primatene Mist. What is the appropriate response?",
  choices: ["Do not use it during the two-week post-MAOI exclusion period; arrange a suitable asthma plan", "Seven days is the required washout", "OTC status removes interaction concerns", "Use the inhaler as a replacement for an anaphylaxis autoinjector"],
  answer: 0,
  rationale: "The label excludes use within two weeks after an MAOI. Its inhaled asthma indication does not make it an anaphylaxis replacement.",
  reviewHref: "#adjunct-drugs-safety-and-monitoring",
});
