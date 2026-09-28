const concepts = [
  {name:"small-airway disease and mucus",lesson:"airway-alveolar-and-systemic-biology",principle:"Epithelial injury, inflammation, impaired ciliary clearance, mucus, wall thickening, and fibrosis narrow small airways.",action:"Connect cough, sputum, infection pattern, expiratory flow, and exposure reduction to the airway process.",assessment:"Review inhaled exposures, cough and sputum pattern, infection, bronchiectasis, airflow, imaging, clearance, hydration, and treatment response.",hazard:"Treating chronic bronchitis as only a symptom label can miss structural airway disease, infection, and preventable exposure.",why:"Small-airway narrowing and mucus obstruction are central contributors to expiratory flow limitation."},
  {name:"emphysema and dynamic hyperinflation",lesson:"airway-alveolar-and-systemic-biology",principle:"Alveolar destruction reduces elastic recoil and airway tethering, causing gas trapping and rising end-expiratory volume during activity.",action:"Use symptoms, lung volumes, diffusion, imaging, exercise response, and rehabilitation to characterize the mechanical burden.",assessment:"Review exertional dyspnea, inspiratory capacity, hyperinflation, diffusion, emphysema distribution, oxygenation, exercise, weight, and advanced intervention eligibility.",hazard:"Normal resting oxygen saturation does not exclude severe dynamic mechanical limitation during exercise.",why:"Dynamic hyperinflation can sharply reduce inspiratory reserve even before resting gas exchange becomes abnormal."},
  {name:"COPD gas exchange and ventilatory failure",lesson:"airway-alveolar-and-systemic-biology",principle:"Ventilation-perfusion mismatch, diffusion loss, hypoventilation, and vascular change can produce hypoxemia, hypercapnia, and pulmonary hypertension.",action:"Use blood gas assessment when ventilation or acid-base status matters rather than relying on pulse oximetry alone.",assessment:"Review saturation, oxygen delivery, respiratory effort, mental status, blood gas, bicarbonate, imaging, diffusion, edema, and pulmonary vascular signs.",hazard:"A reassuring oxygen saturation can coexist with dangerous carbon dioxide retention or acidemia.",why:"Pulse oximetry estimates oxygen saturation but does not measure carbon dioxide or pH."},
  {name:"chronic macrolide exacerbation prevention",lesson:"advanced-anti-inflammatory-and-phenotype-therapy",principle:"Long-term azithromycin may reduce attacks in selected patients after optimized inhaled care, especially former smokers, but creates cardiac, auditory, microbial, and resistance risks.",action:"Screen carefully, define a limited preventive trial and outcome, and reassess benefit and harm rather than continuing indefinitely by default.",assessment:"Review smoking, event history, ECG and QT, rhythm drugs, hearing, liver, sputum, nontuberculous mycobacteria, bronchiectasis, resistance, and follow-up.",hazard:"Starting chronic azithromycin without microbiologic and QT review can cause avoidable harm and obscure untreated bronchiectasis or infection.",why:"Preventive benefit must be balanced against patient toxicity and population-level antimicrobial resistance."},
  {name:"COPD biologic phenotype and label",lesson:"advanced-anti-inflammatory-and-phenotype-therapy",principle:"Dupilumab and mepolizumab have current US add-on maintenance indications for selected adults with inadequately controlled eosinophilic COPD.",action:"Confirm current label criteria, background treatment, eosinophil history, exacerbations, administration, safety, access, and a response plan before use.",assessment:"Review age, COPD confirmation, eosinophils, attack history, triple therapy, asthma, comorbidity, hypersensitivity, helminth risk where relevant, injection training, and goals.",hazard:"Using a biologic for acute bronchospasm or from one isolated eosinophil value ignores its maintenance role and complete eligibility framework.",why:"Biologic benefit is phenotype specific and depends on use as add-on prevention rather than rescue."},
  {name:"COPD confirmation",lesson:"definition-diagnosis-and-etiotypes",principle:"COPD requires compatible symptoms and risk plus post-bronchodilator FEV1/FVC below 0.70.",action:"Obtain quality post-bronchodilator spirometry before assigning the diagnosis.",assessment:"Review symptoms, lifetime exposure, test quality, bronchodilator timing, FEV1, FVC, ratio, and differential.",hazard:"Symptoms, smoking history, or imaging alone cannot replace spirometric confirmation.",why:"Persistent post-bronchodilator airflow obstruction is the defining physiologic requirement."},
  {name:"borderline fixed ratio",lesson:"definition-diagnosis-and-etiotypes",principle:"A post-bronchodilator ratio near 0.70 may require repeat testing and clinical interpretation.",action:"Repeat high-quality spirometry when the ratio is borderline or discordant with the clinical picture.",assessment:"Review age, effort, repeatability, bronchodilator use, lower-limit-of-normal context, symptoms, exposures, and alternatives.",hazard:"Treating one near-threshold result as infallible can misclassify younger or older adults.",why:"Biologic and measurement variation matter near a fixed diagnostic boundary."},
  {name:"airway and alveolar pathology",lesson:"definition-diagnosis-and-etiotypes",principle:"Small-airway disease, mucus, fibrosis, emphysema, loss of elastic recoil, gas trapping, and vascular change contribute variably.",action:"Use symptoms, lung volumes, diffusion, imaging, exercise, and oxygenation when FEV1 does not explain burden.",assessment:"Review obstruction, hyperinflation, diffusion, emphysema, sputum, exercise, gas exchange, imaging, and pulmonary vascular signs.",hazard:"Using FEV1 as a complete description misses hyperinflation, diffusion loss, and extrapulmonary limitation.",why:"COPD contains several structural and physiologic components beyond expiratory flow."},
  {name:"life-course etiotypes",lesson:"definition-diagnosis-and-etiotypes",principle:"COPD can reflect tobacco, biomass, occupation, pollution, abnormal development, infection, asthma, aging, or alpha-1 antitrypsin deficiency.",action:"Construct a lifetime exposure and development history and test for a specific cause when indicated.",assessment:"Review smoking, vaping, biomass, work, pollution, childhood disease, prematurity, tuberculosis, asthma, family history, and alpha-1 status.",hazard:"Equating COPD exclusively with cigarette smoking misses preventable exposure and inherited disease.",why:"Gene, environment, development, and aging interact across the life course."},
  {name:"pre-COPD and PRISm",lesson:"definition-diagnosis-and-etiotypes",principle:"Symptoms or structural abnormality without obstruction and reduced FEV1 with preserved ratio identify risk states, not confirmed COPD.",action:"Investigate the abnormality, reduce risk, monitor trajectory, and avoid unsupported COPD labeling.",assessment:"Review symptoms, CT, diffusion, hyperinflation, FEV1, ratio, exposure, cardiovascular risk, obesity, restriction, and follow-up.",hazard:"Calling PRISm established COPD bypasses the required post-bronchodilator obstructive pattern.",why:"These states may precede or follow different trajectories and need diagnostic precision."},
  {name:"multidimensional assessment",lesson:"severity-symptoms-exacerbations-and-multimorbidity",principle:"Airflow grade, symptoms, exacerbations, activity, oxygenation, trajectory, and comorbidity are separate dimensions.",action:"Record each dimension rather than compressing the patient into one stage.",assessment:"Review FEV1 grade, mMRC, CAAT, attacks, admissions, rescue use, activity, oxygenation, weight, imaging, and comorbidity.",hazard:"A single spirometric grade can understate symptoms or overstate the reason for dyspnea.",why:"Clinical burden and future risk are not determined by FEV1 alone."},
  {name:"2026 Group E threshold",lesson:"severity-symptoms-exacerbations-and-multimorbidity",principle:"One moderate or severe exacerbation in the prior year places a treatment-naive patient in Group E.",action:"Use the event history before initial maintenance selection even when the symptom score is low.",assessment:"Review systemic steroid or antibiotic treatment, emergency and hospital care, event dates, severity, triggers, and recovery.",hazard:"Waiting for two moderate attacks ignores the updated risk carried by a single treated event.",why:"GOLD 2026 lowered the threshold to pursue low exacerbation activity."},
  {name:"validated symptom measurement",lesson:"severity-symptoms-exacerbations-and-multimorbidity",principle:"mMRC and CAAT quantify different aspects of breathlessness and health burden.",action:"Use a consistent validated measure and connect change to the patient's functional goals.",assessment:"Review score items, baseline, trajectory, activity, mood, sleep, sputum, comorbidity, and minimal meaningful change.",hazard:"A casual statement that the patient is fine can miss adapted inactivity and substantial burden.",why:"Structured scores expose impact that unstructured questioning may miss."},
  {name:"COPD multimorbidity",lesson:"severity-symptoms-exacerbations-and-multimorbidity",principle:"Cardiovascular, malignant, metabolic, skeletal, psychiatric, sleep, gastrointestinal, and bronchiectatic disease independently shape outcomes.",action:"Screen for and treat comorbidity according to its usual standard while simplifying the total plan.",assessment:"Review cardiovascular disease, cancer screening, bronchiectasis, mood, bone, muscle, nutrition, sleep apnea, reflux, anemia, frailty, and medicines.",hazard:"Attributing every symptom to COPD can delay treatment of heart failure, cancer, anemia, or another condition.",why:"Multimorbidity is common, consequential, and often undertreated."},
  {name:"LABA and LAMA mechanisms",lesson:"bronchodilators-anti-inflammatory-drugs-and-devices",principle:"LABA raises smooth-muscle cyclic AMP while LAMA blocks M3-mediated bronchoconstriction.",action:"Use complementary dual bronchodilation when one long-acting mechanism is insufficient or initial risk supports it.",assessment:"Review active ingredients, onset, duration, duplication, rescue use, heart rate, urinary and ocular risk, device, and response.",hazard:"Combining two products from the same class can add toxicity without the intended complementary mechanism.",why:"The two classes relax airway smooth muscle through different signaling pathways."},
  {name:"ICS benefit probability",lesson:"bronchodilators-anti-inflammatory-drugs-and-devices",principle:"ICS exacerbation benefit generally increases with prior attacks and higher blood eosinophils.",action:"Add ICS within triple therapy when exacerbation biology and expected benefit outweigh pneumonia and systemic risk.",assessment:"Review eosinophil values, attack history, asthma, pneumonia, mycobacteria, candidiasis, bone, eye, metabolic, smoking, and current therapy.",hazard:"Adding ICS solely for persistent dyspnea can add harm without targeting the dominant trait.",why:"COPD ICS evidence is strongest for exacerbation prevention in responsive inflammatory phenotypes."},
  {name:"ICS withdrawal",lesson:"bronchodilators-anti-inflammatory-drugs-and-devices",principle:"ICS de-escalation requires a reason, close follow-up, and awareness that eosinophils at least 300 predict greater exacerbation risk after withdrawal.",action:"Address pneumonia or major adverse effects, optimize bronchodilation, and monitor attacks and symptoms after a planned change.",assessment:"Review original indication, eosinophils, asthma, exacerbations, pneumonia, dose, adherence, bronchodilators, and follow-up.",hazard:"Abrupt unmonitored withdrawal in a high-eosinophil frequent exacerbator can destabilize disease.",why:"Inflammatory phenotype modifies the risk of removing corticosteroid protection."},
  {name:"roflumilast",lesson:"bronchodilators-anti-inflammatory-drugs-and-devices",principle:"Roflumilast is an oral PDE4 anti-inflammatory option for selected severe obstruction, chronic bronchitis, and recurrent exacerbations.",action:"Consider it after optimized inhaled treatment, especially with prior hospitalization, and monitor weight and psychiatric tolerance.",assessment:"Review FEV1, chronic bronchitis, attacks, hospitalization, weight, nutrition, diarrhea, sleep, mood, suicidality, liver status, and interactions.",hazard:"Using roflumilast as a rescue bronchodilator misunderstands its mechanism and onset.",why:"It modifies inflammatory exacerbation risk but does not acutely relax airway smooth muscle."},
  {name:"ensifentrine",lesson:"bronchodilators-anti-inflammatory-drugs-and-devices",principle:"Ensifentrine is an inhaled PDE3 and PDE4 inhibitor labeled for twice-daily adult COPD maintenance.",action:"Administer one 3 mg ampule twice daily through a standard jet nebulizer and retain a separate rescue medicine.",assessment:"Review maintenance role, nebulizer, mixing, liver disease, paradoxical bronchospasm, blood pressure, diarrhea, UTI, mood, suicidality, and adherence.",hazard:"Using ensifentrine for sudden bronchospasm conflicts with its maintenance indication.",why:"The product was not approved to replace rapid rescue therapy."},
  {name:"inhaler and nebulizer implementation",lesson:"bronchodilators-anti-inflammatory-drugs-and-devices",principle:"Inspiratory flow, coordination, cognition, dexterity, preparation, cleaning, cost, and preference determine delivered therapy.",action:"Observe use, simplify ingredients and devices, and select a platform the patient can reliably operate.",assessment:"Review inspiratory ability, coordination, dexterity, cognition, priming, cleaning, dose counter, nebulizer assembly, portability, cost, and fills.",hazard:"Escalating molecules before correcting device failure can preserve the same untreated state.",why:"The delivery system is part of the pharmacologic dose."},
  {name:"initial Group A treatment",lesson:"initial-and-follow-up-pharmacologic-strategy",principle:"Group A starts a bronchodilator, preferably long acting except when breathlessness is very occasional.",action:"Select the bronchodilator by symptom benefit, device ability, adverse effects, access, and preference.",assessment:"Review symptom frequency, rescue use, exacerbations, device skill, cardiovascular, urinary and ocular risk, cost, and response target.",hazard:"Assigning triple therapy to low-risk treatment-naive Group A adds unnecessary complexity and harm.",why:"Initial intensity should match symptom and exacerbation burden."},
  {name:"initial Group B treatment",lesson:"initial-and-follow-up-pharmacologic-strategy",principle:"Most treatment-naive Group B patients begin LABA-LAMA dual bronchodilation.",action:"Initiate dual long-acting bronchodilation and pair it with risk reduction, activity, and technique support.",assessment:"Review symptom score, event history, dyspnea contributors, active ingredients, device, access, comorbidity, and follow-up.",hazard:"Routine LABA-ICS does not provide the preferred symptom-focused initial mechanism.",why:"Complementary bronchodilation improves symptoms more effectively than one pathway for many Group B patients."},
  {name:"initial Group E treatment",lesson:"initial-and-follow-up-pharmacologic-strategy",principle:"Group E generally begins LABA-LAMA, with triple therapy considered when eosinophils are at least 300 cells per microliter.",action:"Use exacerbation history, eosinophils, asthma, pneumonia risk, device, and access to choose dual or triple therapy.",assessment:"Review number and severity of events, eosinophil trajectory, asthma, infection, pneumonia, active ingredients, adherence, and technique.",hazard:"LABA-ICS is not the routine preferred COPD combination when an ICS is indicated.",why:"Dual bronchodilation anchors Group E while high eosinophils predict greater initial ICS benefit."},
  {name:"follow-up dyspnea pathway",lesson:"initial-and-follow-up-pharmacologic-strategy",principle:"Persistent dyspnea on one long-acting bronchodilator usually prompts LABA-LAMA after implementation and competing causes are checked.",action:"Escalate to dual bronchodilation, then audit device, molecule, rehabilitation, diagnosis, and comorbidity if symptoms persist.",assessment:"Review adherence, technique, rescue use, hyperinflation, activity, cardiac disease, anemia, obesity, mood, rehabilitation, and response.",hazard:"Adding ICS for isolated breathlessness can miss deconditioning or cardiac disease and increase pneumonia risk.",why:"The follow-up algorithm targets the unresolved trait rather than repeating initial classification."},
  {name:"follow-up exacerbation pathway",lesson:"initial-and-follow-up-pharmacologic-strategy",principle:"On LABA-LAMA, a moderate or severe exacerbation supports considering triple therapy when eosinophils are at least 100, with greater expected benefit at higher counts.",action:"Escalate according to current regimen, attack history, eosinophils, asthma, infection, pneumonia, and adherence.",assessment:"Review current ingredients, event definition, eosinophils, cultures, bronchiectasis, pneumonia, smoking, device, fills, and advanced options.",hazard:"Applying the treatment-naive ABE starting algorithm to an already treated patient can produce an incoherent step.",why:"Follow-up treatment begins with the current regimen and dominant treatable trait."},
  {name:"tobacco treatment and vaccination",lesson:"risk-reduction-rehabilitation-oxygen-and-advanced-care",principle:"Exposure removal and current vaccination are core disease treatment, not optional counseling extras.",action:"Offer behavioral support plus tobacco pharmacotherapy and apply current influenza, pneumococcal, COVID-19, RSV, Tdap, and zoster guidance.",assessment:"Review all inhaled exposures, dependence, readiness, prior attempts, withdrawal, contraindications, infection history, age, vaccine record, and access.",hazard:"Presenting e-cigarettes as established safe cessation therapy overstates current evidence.",why:"Reducing lung injury and preventable infection changes future disease burden."},
  {name:"pulmonary rehabilitation",lesson:"risk-reduction-rehabilitation-oxygen-and-advanced-care",principle:"Pulmonary rehabilitation combines exercise, education, self-management, and individualized support to improve function and quality of life.",action:"Refer symptomatic patients and prioritize timely rehabilitation after hospitalization.",assessment:"Review exercise capacity, dyspnea, recent admission, frailty, falls, nutrition, mood, oxygen, transport, goals, and program access.",hazard:"Telling patients only to exercise fails to deliver the structured and monitored intervention.",why:"Training and self-management address deconditioning and functional disease burden that inhalers cannot."},
  {name:"long-term oxygen therapy",lesson:"risk-reduction-rehabilitation-oxygen-and-advanced-care",principle:"LTOT improves survival in severe chronic resting hypoxemia but is not routine for stable moderate or exercise-only desaturation.",action:"Confirm qualifying stable hypoxemia, prescribe duration and flow, teach fire safety, and reassess after acute illness.",assessment:"Review PaO2, saturation, stability, cor pulmonale, polycythemia, exertion, sleep, smoking, equipment, adherence, and reassessment date.",hazard:"Continuing post-hospital oxygen indefinitely without reassessment can preserve an unnecessary and burdensome prescription.",why:"The survival evidence applies to defined severe chronic resting hypoxemia."},
  {name:"acute COPD exacerbation",lesson:"acute-exacerbations-respiratory-failure-and-recovery",principle:"An exacerbation worsens dyspnea and or cough and sputum over days, but pneumonia, embolism, heart failure, pneumothorax, and arrhythmia can mimic it.",action:"Assess severity and competing emergencies while beginning appropriate bronchodilation and support.",assessment:"Review timing, sputum, infection, oxygen, blood gas, work of breathing, mental status, hemodynamics, imaging, ECG, cardiac and thrombotic risk.",hazard:"Treating every deterioration as uncomplicated COPD can delay management of a lethal mimic.",why:"Several acute cardiopulmonary conditions share the same symptom cluster."},
  {name:"exacerbation pharmacotherapy and ventilation",lesson:"acute-exacerbations-respiratory-failure-and-recovery",principle:"Moderate or severe events use SABA with or without SAMA, up to five days of systemic steroid, selective antibiotics, controlled oxygen, and NIV when eligible.",action:"Start prompt treatment, commonly target oxygen at 88 to 92 percent, obtain blood gases when indicated, and prefer NIV for acute hypercapnic failure without contraindication.",assessment:"Review bronchodilator response, purulence, prior organisms, ventilation need, steroid risk, QT, renal function, blood gas, mental status, secretions, and NIV contraindications.",hazard:"Uncontrolled high oxygen or delayed ventilatory support can worsen hypercapnia and respiratory failure.",why:"Short targeted therapy and controlled respiratory support improve outcomes while limiting treatment harm."},
];

const dimensions = [["principle","Which principle best characterizes"],["action","Which clinical action best applies to"],["assessment","Which assessment is most appropriate for"],["hazard","Which reasoning hazard is most important to prevent with"]];
function distractors(index, field) { return [5, 11, 17].map((offset) => concepts[(index + offset) % concepts.length][field]); }

const reviewedDiagnosticCases = [
  {
    "id": "copd-021",
    "question": "A patient has chronic dyspnea, cough, and a substantial smoking exposure. CT shows emphysema, but spirometry has not been performed. What is needed to confirm COPD using GOLD criteria?",
    "choices": [
      "A compatible clinical picture plus post-bronchodilator FEV1/FVC below 0.70",
      "CT emphysema alone, regardless of airflow measurements",
      "FEV1 below 80% predicted, regardless of the FEV1/FVC ratio",
      "A history of smoking plus response to a rescue inhaler"
    ],
    "answer": 0,
    "rationale": "GOLD requires post-bronchodilator airflow obstruction in the appropriate clinical context. CT can characterize emphysema but does not replace spirometric confirmation. A reduced FEV1 without an obstructed ratio does not establish COPD, and neither smoking nor symptomatic bronchodilator benefit is diagnostic.",
    "reviewHref": "#definition-diagnosis-and-etiotypes"
  },
  {
    "id": "copd-022",
    "question": "A symptomatic patient's pre-bronchodilator FEV1/FVC is 0.64. Which next test follows GOLD's diagnostic sequence?",
    "choices": [
      "Assign COPD without further spirometry because the pre-bronchodilator ratio is low",
      "Obtain quality post-bronchodilator measurements to confirm whether obstruction persists",
      "Use the response to an antibiotic course to confirm COPD",
      "Replace spirometry with resting pulse oximetry"
    ],
    "answer": 1,
    "rationale": "When pre-bronchodilator spirometry shows obstruction, GOLD uses post-bronchodilator measurements for COPD confirmation. The initial ratio alone is insufficient. Antibiotic response is nonspecific, and pulse oximetry measures oxygen saturation rather than expiratory airflow obstruction.",
    "reviewHref": "#definition-diagnosis-and-etiotypes"
  },
  {
    "id": "copd-023",
    "question": "Post-bronchodilator FEV1 is 1.8 L and FVC is 2.7 L on a technically acceptable first test. Which interpretation is correct?",
    "choices": [
      "FEV1/FVC is 1.50, so obstruction is excluded",
      "FEV1 is 66.7% predicted, establishing the airflow grade",
      "FEV1/FVC is about 0.67; interpret in clinical context and repeat spirometry on a separate occasion",
      "FEV1/FVC is 0.90, so repeat testing cannot be useful"
    ],
    "answer": 2,
    "rationale": "Divide 1.8 L by 2.7 L to obtain 0.6667, below the GOLD 0.70 threshold. Because it lies between 0.60 and 0.80, repeat testing on a separate occasion is recommended to confirm the finding. The reciprocal is 1.50, not the diagnostic ratio. FEV1 percent predicted requires a predicted FEV1 value and cannot be calculated from FVC; 0.90 is not the quotient.",
    "reviewHref": "#definition-diagnosis-and-etiotypes"
  },
  {
    "id": "copd-024",
    "question": "A patient with a long history of asthma has persistent post-bronchodilator airflow obstruction. Which conclusion is justified?",
    "choices": [
      "Persistent obstruction proves that asthma was never present",
      "Any bronchodilator response excludes COPD",
      "The degree of reversibility alone reliably separates asthma from COPD",
      "Persistent obstruction can occur in asthma; assess the full clinical context before assigning COPD"
    ],
    "answer": 3,
    "rationale": "Persistent airflow obstruction is not specific to COPD and may occur in asthma. A bronchodilator response does not by itself exclude COPD, and its magnitude varies over time and does not reliably distinguish the two conditions. The history and other clinical findings must be considered; one spirometric pattern cannot erase an established asthma history.",
    "reviewHref": "#definition-diagnosis-and-etiotypes"
  },
  {
    "id": "copd-025",
    "question": "An older adult with relevant symptoms and exposure has a first post-bronchodilator FEV1/FVC of 0.69. How should this near-threshold result be handled?",
    "choices": [
      "Confirm with repeat quality spirometry on a separate occasion and consider the clinical context",
      "Diagnose COPD permanently from this single value without considering age or test quality",
      "Round the ratio to 0.70 and permanently exclude COPD",
      "Ignore the result because fixed-ratio criteria never apply to older adults"
    ],
    "answer": 0,
    "rationale": "A ratio of 0.69 is in GOLD's 0.60 to 0.80 repeat-testing range. Biological variability and possible fixed-ratio overdiagnosis in older adults warrant context and confirmation. Neither a permanent diagnosis from one borderline value nor exclusion by rounding is justified. GOLD still uses the fixed ratio in older adults; it is not simply discarded.",
    "reviewHref": "#definition-diagnosis-and-etiotypes"
  },
  {
    "id": "copd-026",
    "question": "A 42-year-old with persistent respiratory symptoms and relevant exposure repeatedly has a post-bronchodilator ratio of 0.71. Which approach addresses GOLD's caution about younger adults?",
    "choices": [
      "Declare that respiratory disease is impossible because the ratio exceeds 0.70",
      "Consider lower-limit-of-normal or z-score interpretation and investigate the symptoms",
      "Diagnose GOLD-defined COPD solely because the patient is younger than 50",
      "Prescribe an ICS solely to make the ratio cross the diagnostic threshold"
    ],
    "answer": 1,
    "rationale": "In younger adults with suspected COPD and repeated ratios at least 0.70, GOLD notes that comparison with the lower limit of normal or z-scores may help clinical management. The fixed ratio can miss abnormality in some younger adults. Symptoms still require evaluation, but age alone does not establish COPD and an ICS trial is not a method for manipulating or confirming the threshold.",
    "reviewHref": "#definition-diagnosis-and-etiotypes"
  },
  {
    "id": "copd-027",
    "question": "A symptomatic patient's pre-bronchodilator spirometry shows no obstruction. Clinical suspicion for COPD is low after review. What does GOLD advise about routinely obtaining post-bronchodilator measurements?",
    "choices": [
      "They are mandatory in every person regardless of the initial result or clinical context",
      "Normal pre-bronchodilator testing establishes the cause of all respiratory symptoms",
      "They are usually unnecessary in this setting, while the cause of symptoms still needs assessment",
      "They must be replaced with empiric long-term COPD treatment"
    ],
    "answer": 2,
    "rationale": "GOLD permits pre-bronchodilator spirometry as an initial investigation and does not routinely require post-bronchodilator measurements when there is no obstruction and suspicion is low. Very high suspicion is an exception because an FVC volume response can reveal obstruction. A normal initial ratio does not explain symptoms or justify empiric long-term COPD treatment without further clinical assessment.",
    "reviewHref": "#definition-diagnosis-and-etiotypes"
  },
  {
    "id": "copd-028",
    "question": "A patient's FEV1 increases substantially after a bronchodilator, but the post-bronchodilator ratio remains obstructed. What can the size of this acute response establish by itself?",
    "choices": [
      "That the patient definitely has asthma rather than COPD",
      "That long-term ICS treatment will definitely prevent exacerbations",
      "That long-term bronchodilator treatment will be ineffective",
      "Neither a reliable asthma-versus-COPD distinction nor a reliable prediction of long-term treatment response"
    ],
    "answer": 3,
    "rationale": "GOLD advises against using the degree of acute reversibility to distinguish asthma from COPD or predict long-term response to bronchodilators or corticosteroids. The post-bronchodilator ratio still helps establish persistent obstruction, but its clinical cause and treatment must be assessed using the broader history and relevant treatment criteria.",
    "reviewHref": "#definition-diagnosis-and-etiotypes"
  }
];
const diagnosticCasesById = new Map(reviewedDiagnosticCases.map(question => [question.id, question]));

const reviewedAcuteCases = [
  {
    "id": "copd-113",
    "question": "A patient with COPD develops sudden worsening breathlessness and pleuritic chest pain. Which approach is most appropriate?",
    "choices": [
      "Treat every deterioration as uncomplicated COPD without considering other diagnoses",
      "Assess for urgent alternative or additional causes while providing respiratory support",
      "Exclude pulmonary embolism solely because COPD is already diagnosed",
      "Delay evaluation until the next routine maintenance visit"
    ],
    "answer": 1,
    "rationale": "COPD does not exclude pulmonary embolism, pneumonia, pneumothorax, cardiac disease, or other causes of acute deterioration. Sudden symptoms and chest pain warrant urgent assessment alongside stabilization. Automatically labeling the event COPD, dismissing embolism, or postponing evaluation can delay needed treatment.",
    "reviewHref": "#acute-exacerbations-respiratory-failure-and-recovery"
  },
  {
    "id": "copd-114",
    "question": "Which initial bronchodilator approach matches GOLD recommendations for an acute COPD exacerbation?",
    "choices": [
      "Use oral roflumilast as the only rapid bronchodilator",
      "Use an ICS inhaler alone for immediate bronchodilation",
      "Use an inhaled SABA, with or without a SAMA",
      "Use intravenous aminophylline routinely before inhaled treatment"
    ],
    "answer": 2,
    "rationale": "An inhaled short-acting beta2 agonist, optionally combined with a short-acting muscarinic antagonist, is the recommended initial bronchodilator approach. Roflumilast is maintenance anti-inflammatory therapy, and ICS alone does not provide rapid bronchodilation. Intravenous methylxanthines are not recommended because of significant adverse effects.",
    "reviewHref": "#acute-exacerbations-respiratory-failure-and-recovery"
  },
  {
    "id": "copd-115",
    "question": "An adult has a significant COPD exacerbation requiring systemic corticosteroid and can take oral medication. Which plan matches GOLD's usual dose and duration?",
    "choices": [
      "Prednisone-equivalent 5 mg daily for 40 days",
      "Intravenous treatment is mandatory even when oral treatment is feasible",
      "Prednisone-equivalent 40 mg daily indefinitely after discharge",
      "Prednisone-equivalent 40 mg daily for five days"
    ],
    "answer": 3,
    "rationale": "GOLD recommends prednisone-equivalent 40 mg daily for five days for a significant exacerbation requiring systemic steroid. Oral prednisolone is as effective as intravenous administration when feasible. Routine prolonged or indefinite exposure adds risk; 5 mg for 40 days is not equivalent merely because the cumulative amount also totals 200 mg.",
    "reviewHref": "#acute-exacerbations-respiratory-failure-and-recovery"
  },
  {
    "id": "copd-116",
    "question": "A patient with a COPD exacerbation has increased sputum purulence and increased dyspnea. Which antibiotic assessment matches GOLD 2026?",
    "choices": [
      "This symptom combination supports antibiotics, with selection guided by patient factors and local resistance",
      "Antibiotics are never appropriate unless intubation is required",
      "Antibiotics must be withheld unless all four of purulence, volume, fever, and dyspnea are present",
      "A low procalcitonin value alone must override the clinical indication"
    ],
    "answer": 0,
    "rationale": "Increased purulence plus at least one of increased dyspnea, fever, or sputum volume meets the symptom-based criterion. Intubation and all four symptoms are not required. GOLD does not recommend procalcitonin-based protocols to decide antibiotic use in COPD exacerbations; evaluate the complete presentation.",
    "reviewHref": "#acute-exacerbations-respiratory-failure-and-recovery"
  },
  {
    "id": "copd-117",
    "question": "During a new COPD exacerbation, the team learns that sputum culture was positive during a prior exacerbation. Which interpretation matches GOLD 2026?",
    "choices": [
      "Prior microbiology is irrelevant to antibiotic decisions",
      "A prior positive culture during an exacerbation supports antibiotics; use prior organisms and current clinical factors to guide selection",
      "The same antibiotic must be repeated without considering resistance or allergies",
      "All such patients require lifelong antibiotics"
    ],
    "answer": 1,
    "rationale": "GOLD includes a prior positive sputum culture during an exacerbation among its antibiotic criteria. Prior organisms inform selection alongside local resistance, current illness, allergies, renal function, and interactions. This does not mandate the identical drug or indefinite therapy.",
    "reviewHref": "#acute-exacerbations-respiratory-failure-and-recovery"
  },
  {
    "id": "copd-118",
    "question": "An outpatient COPD exacerbation meets antibiotic criteria. What duration guidance is consistent with GOLD's detailed discussion?",
    "choices": [
      "Fourteen days is mandatory for every outpatient exacerbation",
      "Every antibiotic course must continue until spirometry normalizes",
      "No more than five days for outpatient treatment; the general recommendation is five to seven days",
      "A single dose is established as sufficient for every eligible patient"
    ],
    "answer": 2,
    "rationale": "GOLD recommends five to seven days overall and no more than five days for outpatient exacerbations. The course still depends on the chosen agent and clinical context. A routine 14-day course, treatment until spirometry normalizes, or universal single-dose treatment is not the stated recommendation. A separate infection may require its own treatment plan.",
    "reviewHref": "#acute-exacerbations-respiratory-failure-and-recovery"
  },
  {
    "id": "copd-119",
    "question": "A patient with a COPD exacerbation requires supplemental oxygen while blood gases are assessed. What is the usual initial saturation target?",
    "choices": [
      "100% for everyone",
      "70% to 75%",
      "Withhold oxygen despite hypoxemia",
      "88% to 92%"
    ],
    "answer": 3,
    "rationale": "Controlled oxygen usually targets 88% to 92%, with blood gases and clinical reassessment. Routine maximal oxygen can worsen hypercapnia; profound hypoxemia must not be accepted or left untreated.",
    "reviewHref": "#acute-exacerbations-respiratory-failure-and-recovery"
  },
  {
    "id": "copd-120",
    "question": "Despite standard treatment for a COPD exacerbation, an alert, cooperative patient has pH 7.29, PaCO2 62 mmHg, and respiratory rate 30/min, without an immediate intubation indication. What is the best next assessment?",
    "choices": [
      "Urgently assess for bilevel NIV with close monitoring and escalation capability",
      "Exclude NIV because pH is below 7.35",
      "Wait for carbon dioxide to normalize before considering support",
      "Treat the abnormal blood gas as harmless chronic compensation"
    ],
    "answer": 0,
    "rationale": "This is acute respiratory acidosis with hypercapnia and tachypnea, supporting NIV assessment. The low pH is an indication, not an exclusion. Waiting for spontaneous normalization or assuming compensation risks delaying support; deterioration requires prompt reassessment and escalation.",
    "reviewHref": "#acute-exacerbations-respiratory-failure-and-recovery"
  }
];
const acuteCasesById = new Map(reviewedAcuteCases.map(question => [question.id, question]));

const reviewedSeverityCases = [
  {
    "id": "copd-041",
    "question": "Confirmed COPD has post-bronchodilator FEV1 55% predicted, CAAT 14, and no moderate or severe exacerbation in the prior year. Before maintenance treatment, how should it be classified?",
    "choices": [
      "GOLD airflow grade 2, Group B",
      "GOLD airflow grade 3, Group E",
      "GOLD airflow grade 2, Group E solely because FEV1 is low",
      "Group A because there were no exacerbations"
    ],
    "answer": 0,
    "rationale": "FEV1 55% predicted is grade 2. With no moderate or severe prior-year events, CAAT 14 meets the higher-symptom threshold for Group B. Low FEV1 alone does not assign E, and absence of events does not override the symptom score to assign A.",
    "reviewHref": "#severity-symptoms-exacerbations-and-multimorbidity"
  },
  {
    "id": "copd-042",
    "question": "After obstruction is confirmed, post-bronchodilator FEV1 is exactly 30% predicted. Which GOLD airflow grade applies?",
    "choices": [
      "Grade 2",
      "Grade 3",
      "Grade 4",
      "An ABE group can be assigned from this value alone"
    ],
    "answer": 1,
    "rationale": "Grade 3 includes FEV1 from 30% to below 50% predicted. Grade 4 is below 30%, and grade 2 begins at 50%. ABE grouping additionally requires symptom and exacerbation history; the airflow value alone is insufficient.",
    "reviewHref": "#severity-symptoms-exacerbations-and-multimorbidity"
  },
  {
    "id": "copd-043",
    "question": "A clinician records only GOLD airflow grade 2 for a newly assessed patient. What remains necessary for initial treatment planning?",
    "choices": [
      "Nothing; airflow grade contains the symptom score and event history",
      "Only the patient's age",
      "Symptom burden, prior exacerbations, eosinophils, and comorbid conditions",
      "Only whether the inhaler has a dose counter"
    ],
    "answer": 2,
    "rationale": "GOLD assessment includes symptoms, previous exacerbations, eosinophils, and multimorbidity alongside airflow obstruction. Age and device usability can matter, but neither replaces this assessment. The spirometric grade does not encode the other dimensions.",
    "reviewHref": "#severity-symptoms-exacerbations-and-multimorbidity"
  },
  {
    "id": "copd-044",
    "question": "A patient has marked activity-limiting breathlessness despite relatively modest airflow obstruction. What is the best interpretation?",
    "choices": [
      "The symptoms must be fabricated because FEV1 is not severely reduced",
      "FEV1 completely excludes a cardiac contribution",
      "Severe symptoms automatically establish Group E",
      "Investigate lung mechanics, deconditioning, and comorbidity rather than treating FEV1 as the whole disease"
    ],
    "answer": 3,
    "rationale": "Symptoms correlate only weakly with airflow obstruction. Hyperinflation, deconditioning, cardiac disease, and other conditions may contribute. Modest obstruction neither invalidates symptoms nor excludes comorbidity. Group E depends on exacerbation history, not symptom intensity alone.",
    "reviewHref": "#severity-symptoms-exacerbations-and-multimorbidity"
  },
  {
    "id": "copd-045",
    "question": "A treatment-naive patient has CAAT 6 and one outpatient COPD exacerbation treated with systemic steroid eight months ago. Which initial GOLD 2026 group applies?",
    "choices": [
      "Group E",
      "Group A because CAAT is below 10",
      "Group B because one event always means B",
      "No classification until a second treated event"
    ],
    "answer": 0,
    "rationale": "One moderate or severe exacerbation in the previous year qualifies for Group E under GOLD 2026 regardless of symptom score. A and B require no such events. Waiting for two events applies an outdated threshold.",
    "reviewHref": "#severity-symptoms-exacerbations-and-multimorbidity"
  },
  {
    "id": "copd-046",
    "question": "A treatment-naive patient has CAAT 24 and no moderate or severe exacerbations in the previous year. Which initial group fits?",
    "choices": [
      "Group E solely because symptoms are substantial",
      "Group B",
      "Group A regardless of the symptom score",
      "Group E only because rescue use is frequent"
    ],
    "answer": 1,
    "rationale": "With no qualifying prior-year exacerbation, CAAT at least 10 assigns Group B. Symptoms and rescue use require attention but do not alone create Group E. Group A is the lower-symptom group.",
    "reviewHref": "#severity-symptoms-exacerbations-and-multimorbidity"
  },
  {
    "id": "copd-047",
    "question": "A patient starting maintenance treatment reports little breathlessness but had a COPD exacerbation requiring hospitalization four months ago. What should guide initial grouping?",
    "choices": [
      "The current quiet interval erases the hospitalization",
      "Low breathlessness always means Group A",
      "The prior-year severe event supports Group E regardless of today's symptom score",
      "Hospitalizations count only after two separate admissions"
    ],
    "answer": 2,
    "rationale": "A qualifying severe event in the previous year is sufficient for Group E. Low current symptoms or a quiet interval does not remove that history, and a second hospitalization is not required.",
    "reviewHref": "#severity-symptoms-exacerbations-and-multimorbidity"
  },
  {
    "id": "copd-048",
    "question": "A patient already taking LABA-LAMA develops a further exacerbation. How should treatment reassessment be organized?",
    "choices": [
      "Ignore the existing regimen and restart the treatment-naive Group A pathway",
      "Use only FEV1 to choose the next drug",
      "Assign a new initial group and disregard technique or adherence",
      "Use the follow-up pathway from the current regimen and assess the event, adherence, technique, and relevant phenotype"
    ],
    "answer": 3,
    "rationale": "The ABE initial-treatment framework is for patients naive to pharmacologic treatment. Follow-up starts from the actual regimen and unresolved problem. Repeating an initial pathway or using FEV1 alone misses implementation and phenotype factors that affect the next step.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-049",
    "question": "Why can a low mMRC score coexist with substantial COPD burden?",
    "choices": [
      "mMRC focuses on breathlessness, while a broader assessment captures other effects on health status",
      "mMRC and CAAT measure identical items on identical scales",
      "A low mMRC score proves cough and sleep problems are absent",
      "mMRC measures FEV1 percent predicted"
    ],
    "answer": 0,
    "rationale": "mMRC measures dyspnea rather than every effect of COPD. A broader symptom instrument can capture burden beyond breathlessness. It is neither interchangeable item-for-item with CAAT nor a spirometric measurement, and it does not rule out other symptoms.",
    "reviewHref": "#severity-symptoms-exacerbations-and-multimorbidity"
  },
  {
    "id": "copd-050",
    "question": "An older record lists CAT 12 and the current record uses the name CAAT. Which interpretation is supported by GOLD 2026?",
    "choices": [
      "CAT scores must be doubled before comparison",
      "CAT was renamed Chronic Airways Assessment Test; the scores are interchangeable",
      "CAAT is a blood eosinophil score",
      "CAT and CAAT have incompatible score ranges"
    ],
    "answer": 1,
    "rationale": "GOLD identifies CAT and CAAT as equivalent assessments with interchangeable scores. CAAT means Chronic Airways Assessment Test. It is not a blood test, and no doubling or rescaling is required.",
    "reviewHref": "#severity-symptoms-exacerbations-and-multimorbidity"
  },
  {
    "id": "copd-051",
    "question": "A treatment-naive patient with confirmed COPD has CAAT exactly 10 and no moderate or severe events in the previous year. Which interpretation is correct?",
    "choices": [
      "CAAT 10 remains below the higher-symptom boundary",
      "Only a score above 10 meets the threshold",
      "CAAT 10 meets the higher-symptom threshold and supports Group B",
      "CAAT 10 automatically assigns Group E"
    ],
    "answer": 2,
    "rationale": "The higher-symptom boundary includes CAAT 10. With no qualifying events, this supports Group B. Group A uses CAAT below 10; Group E is based on prior-year exacerbations rather than this score alone.",
    "reviewHref": "#severity-symptoms-exacerbations-and-multimorbidity"
  },
  {
    "id": "copd-052",
    "question": "A patient has mMRC 1 but CAAT 18. What is the best response to these apparently different results?",
    "choices": [
      "Average the two numbers to produce a single validated score",
      "Discard CAAT because any low mMRC proves low overall burden",
      "Convert mMRC to CAAT by multiplying it by 10",
      "Review broader symptoms and function; the tools do not have a reliable numerical conversion"
    ],
    "answer": 3,
    "rationale": "A dyspnea scale cannot fully represent a multidimensional health-status score. GOLD recommends comprehensive symptom assessment and cautions that an equivalent mMRC score cannot be calculated from a comprehensive cut-point. Averaging, multiplying, or discarding one score creates an unsupported interpretation.",
    "reviewHref": "#severity-symptoms-exacerbations-and-multimorbidity"
  },
  {
    "id": "copd-053",
    "question": "A patient with mild airflow obstruction also has heart failure and depression. How should these conditions be approached?",
    "choices": [
      "Assess and treat them according to their usual standards because comorbidity can affect outcomes independently of airflow grade",
      "Defer treatment until COPD reaches grade 4",
      "Assume all functional limitation is from COPD",
      "Use a more intensive inhaler as the sole treatment for both conditions"
    ],
    "answer": 0,
    "rationale": "Multimorbidity can materially affect symptoms, hospitalization, and mortality at any airflow grade. Heart failure and depression deserve their own assessment and treatment. Waiting for grade 4, attributing everything to COPD, or using inhalers alone leaves those conditions untreated.",
    "reviewHref": "#severity-symptoms-exacerbations-and-multimorbidity"
  },
  {
    "id": "copd-054",
    "question": "A patient with COPD has a cardiovascular indication for a beta blocker. What is the appropriate principle?",
    "choices": [
      "COPD automatically prohibits every beta blocker",
      "Do not withhold indicated beta-blocker therapy solely because COPD is present; select and monitor treatment appropriately",
      "Start a beta blocker in every COPD patient solely to prevent exacerbations",
      "Replace cardiovascular treatment with additional SABA doses"
    ],
    "answer": 1,
    "rationale": "GOLD states that patients should not be denied beta blockers when a cardiovascular indication exists. That does not establish beta blockers as routine COPD prevention in patients without such an indication. Drug selection and monitoring remain individualized; extra rescue bronchodilator does not replace cardiovascular therapy.",
    "reviewHref": "#severity-symptoms-exacerbations-and-multimorbidity"
  },
  {
    "id": "copd-055",
    "question": "How should a blood eosinophil count be used in COPD assessment?",
    "choices": [
      "It replaces the prior exacerbation history",
      "It establishes COPD without spirometry",
      "It helps estimate ICS preventive benefit, but should not alone predict an individual's future exacerbations",
      "It makes symptoms and current treatment irrelevant"
    ],
    "answer": 2,
    "rationale": "Eosinophils help estimate the magnitude of ICS benefit alongside exacerbation history and current care. GOLD finds insufficient evidence to use the count alone to predict individual future exacerbation risk. It does not replace spirometry, symptoms, history, or treatment review.",
    "reviewHref": "#severity-symptoms-exacerbations-and-multimorbidity"
  },
  {
    "id": "copd-056",
    "question": "A chart calls a past exacerbation severe because the patient was hospitalized. What additional distinction matters when assessing a new acute event?",
    "choices": [
      "Admission location alone completely defines current physiologic severity",
      "A steroid prescription guarantees acute respiratory acidosis",
      "Laboratory testing is required before any clinical assessment can begin",
      "GOLD 2026 favors clinical and physiologic assessment using the Rome approach; historical resource-use labels are not the same assessment"
    ],
    "answer": 3,
    "rationale": "GOLD distinguishes retrospective treatment/resource-use classifications from point-of-care severity assessment. Current dyspnea, respiratory and heart rates, oxygenation, and available laboratory findings inform the latter. Admission alone or receipt of steroids does not establish respiratory acidosis, and clinical assessment can begin where laboratory tests are unavailable.",
    "reviewHref": "#severity-symptoms-exacerbations-and-multimorbidity"
  }
];
const severityCasesById = new Map(reviewedSeverityCases.map(question => [question.id, question]));

const reviewedStrategyCases = [
  {
    "id": "copd-081",
    "question": "A treatment-naive Group A patient has occasional COPD breathlessness and no asthma. Which initial approach is appropriate?",
    "choices": [
      "Offer a bronchodilator chosen for symptom benefit",
      "Start triple therapy in every Group A patient",
      "Use ICS alone as routine initial COPD treatment",
      "Start daily oral corticosteroid maintenance"
    ],
    "answer": 0,
    "rationale": "Group A should be offered bronchodilation based on relief of breathlessness. Routine triple therapy, ICS monotherapy, or chronic systemic corticosteroid is not the initial Group A recommendation.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-082",
    "question": "Which qualification applies to GOLD's preference for a long-acting bronchodilator in Group A?",
    "choices": [
      "Short-acting treatment is prohibited in every circumstance",
      "Very occasional breathlessness may be managed with a short-acting bronchodilator",
      "Every patient must receive both LABA and LAMA immediately",
      "An ICS is required whenever symptoms are occasional"
    ],
    "answer": 1,
    "rationale": "A long-acting bronchodilator is preferred when available and affordable except for very occasional breathlessness. GOLD allows either short- or long-acting bronchodilation in Group A; it does not require dual treatment or ICS solely for occasional symptoms.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-083",
    "question": "A Group A patient reports clear benefit and acceptable tolerance from the selected bronchodilator. What is the appropriate next principle?",
    "choices": [
      "Escalate automatically because another visit has occurred",
      "Stop despite continued symptom benefit",
      "Continue beneficial treatment and reassess response, adverse effects, and implementation",
      "Replace it with an ICS regardless of exacerbation history"
    ],
    "answer": 2,
    "rationale": "GOLD recommends continuing Group A bronchodilation when benefit is documented. Follow-up assesses effectiveness and safety rather than automatically escalating, stopping an effective medicine, or replacing it with ICS without an indication.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-084",
    "question": "A patient on a long-acting COPD inhaler asks whether a medicine for immediate symptom relief is still needed. Which statement matches GOLD?",
    "choices": [
      "Maintenance inhalers eliminate every need for rescue treatment",
      "Oral roflumilast provides immediate rescue",
      "Only Group E patients need rescue treatment",
      "Provide a prescribed short-acting rescue bronchodilator alongside the maintenance plan"
    ],
    "answer": 3,
    "rationale": "GOLD recommends short-acting rescue bronchodilators for immediate symptom relief. Long-acting maintenance therapy does not remove that need, and roflumilast is not a rapid bronchodilator. Rescue access is not restricted to Group E.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-085",
    "question": "A treatment-naive Group B patient has no contraindication, affordability problem, or device barrier to dual bronchodilation. What is the preferred initial regimen?",
    "choices": [
      "LABA plus LAMA",
      "ICS alone",
      "LABA plus ICS as the routine preferred COPD combination",
      "Daily oral prednisone"
    ],
    "answer": 0,
    "rationale": "LABA-LAMA is GOLD's preferred initial Group B regimen when feasible. ICS alone, routine LABA-ICS, and daily systemic corticosteroid do not provide the recommended initial approach for this symptom-focused group.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-086",
    "question": "LABA-LAMA is unsuitable for a particular Group B patient. Which principle guides selection between a LABA and a LAMA alone for initial symptom relief?",
    "choices": [
      "LABA is universally superior for every such patient",
      "Neither class is universally preferred by the evidence; consider the patient's symptom benefit and practical factors",
      "LAMA is prohibited in Group B",
      "Use ICS alone because dual bronchodilation is unavailable"
    ],
    "answer": 1,
    "rationale": "When the combination is not appropriate, GOLD finds no evidence favoring one long-acting bronchodilator class over the other for initial symptom relief. Individual response and practical considerations matter; this is not a reason to prohibit LAMA or automatically use ICS alone.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-087",
    "question": "A Group B patient has poor exercise tolerance and suspected heart failure. How should the initial COPD plan address this?",
    "choices": [
      "Ignore the cardiac symptoms until the inhaler fails for a year",
      "Assume all symptoms come from airflow obstruction",
      "Investigate and treat relevant comorbidity alongside COPD therapy",
      "Use a higher symptom score as proof that no other diagnosis exists"
    ],
    "answer": 2,
    "rationale": "Group B patients commonly have comorbidity contributing to symptoms and prognosis. GOLD recommends investigating and treating it. Neither an obstructive diagnosis nor a high symptom score excludes heart failure or justifies delaying its assessment.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-088",
    "question": "A newly diagnosed Group B patient asks whether the initial treatment algorithm is supported by trials testing every possible starting strategy in untreated patients. Which answer is accurate?",
    "choices": [
      "Every starting step has been proven superior in direct trials of all untreated populations",
      "The algorithm is a guarantee of individual response",
      "No follow-up is needed because the regimen is guideline based",
      "It is evidence-informed guidance, but GOLD acknowledges limited direct evidence for initial strategies in newly diagnosed patients"
    ],
    "answer": 3,
    "rationale": "GOLD explicitly describes limitations in direct evidence for initial pharmacologic strategies in newly diagnosed patients. This does not make guidance unusable, but it requires individualized selection and reassessment rather than certainty about every comparison or every patient's response.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-089",
    "question": "A treatment-naive Group E patient without asthma has eosinophils 70 cells/microliter and can use dual therapy. What is the usual initial choice?",
    "choices": [
      "LABA-LAMA",
      "ICS alone",
      "LABA-ICS is always preferred over LABA-LAMA",
      "Biologic monotherapy replacing inhaled bronchodilators"
    ],
    "answer": 0,
    "rationale": "LABA-LAMA is the usual Group E starting regimen. The count does not support the high-eosinophil initial triple-therapy consideration. ICS alone, routine preference for LABA-ICS, and biologic replacement of bronchodilation are not the initial algorithm.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-090",
    "question": "A treatment-naive Group E patient has eosinophils 350 cells/microliter. Which initial option does GOLD say to consider?",
    "choices": [
      "ICS alone without bronchodilation",
      "LABA-LAMA-ICS after considering benefit, risks, and patient factors",
      "An antibiotic instead of maintenance inhalers in every case",
      "No treatment unless the count exceeds 1000 cells/microliter"
    ],
    "answer": 1,
    "rationale": "GOLD's practical recommendation is to consider initial triple therapy in Group E at eosinophils at least 300 cells/microliter. This is not ICS monotherapy or a universal antibiotic indication, and a threshold of 1000 is not required.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-091",
    "question": "When an ICS is indicated for COPD and combination treatment is being selected, which regimen does GOLD generally prefer over LABA-ICS?",
    "choices": [
      "ICS alone",
      "Two different LABA products",
      "LABA-LAMA-ICS",
      "Chronic oral prednisone without inhaled therapy"
    ],
    "answer": 2,
    "rationale": "GOLD favors triple inhaled therapy over LABA-ICS when an ICS is indicated in COPD. ICS monotherapy omits bronchodilation, two LABAs duplicate a class, and chronic oral prednisone is not the recommended substitute.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-092",
    "question": "A patient has COPD and confirmed concomitant asthma. Which factor prevents applying the COPD algorithm as a reason to omit ICS?",
    "choices": [
      "Any smoking history prohibits ICS",
      "A low symptom score excludes asthma treatment",
      "LABA alone treats both diseases safely in all patients",
      "Concomitant asthma requires asthma-directed care including ICS"
    ],
    "answer": 3,
    "rationale": "GOLD says patients with concomitant asthma should be treated according to asthma guidance and that ICS is mandatory in this setting. Smoking history or a low current symptom score does not remove that requirement; LABA without ICS is not an appropriate asthma regimen.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-093",
    "question": "A patient remains breathless on one long-acting bronchodilator despite verified use, with no unresolved alternative cause. What is the usual pharmacologic next step?",
    "choices": [
      "LABA-LAMA dual bronchodilation",
      "ICS alone replacing the bronchodilator",
      "A second drug from the same long-acting bronchodilator class",
      "Long-term oral prednisone for every patient"
    ],
    "answer": 0,
    "rationale": "Persistent dyspnea or exercise limitation on bronchodilator monotherapy generally supports adding the complementary long-acting class. ICS alone, duplicate-class treatment, and routine chronic systemic steroid are not this pathway.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-094",
    "question": "Breathlessness persists on LABA-LAMA, without exacerbations or concomitant asthma. What should be prioritized?",
    "choices": [
      "Add ICS solely because breathlessness persists",
      "Review device or molecule, rehabilitation, adherence, and other causes; consider appropriate additional options",
      "Stop evaluating nonpulmonary causes once two inhaled drugs are prescribed",
      "Assume poor symptom control proves bacterial infection"
    ],
    "answer": 1,
    "rationale": "GOLD recommends reviewing delivery, alternative causes, and nonpharmacologic treatment after persistent dyspnea on dual bronchodilation; ensifentrine may be considered when appropriate and available. Isolated dyspnea does not itself justify ICS, dismissing comorbidity, or assuming infection.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-095",
    "question": "At follow-up, both persistent dyspnea and exacerbations require treatment optimization. Which pathway does GOLD recommend using?",
    "choices": [
      "The treatment-naive Group A pathway regardless of current drugs",
      "Only the dyspnea pathway, ignoring exacerbations",
      "The exacerbation pathway, while also evaluating symptoms and contributing factors",
      "No adjustment until one problem disappears"
    ],
    "answer": 2,
    "rationale": "GOLD advises using the exacerbation pathway when both problems need targeting. Assessment still includes symptoms, adherence, device technique, and comorbidity. Restarting an initial pathway or waiting for one problem to vanish does not address the current treated state.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-096",
    "question": "A patient reports worsening COPD symptoms but demonstrates substantial inhaler technique errors. What is the best immediate reasoning step?",
    "choices": [
      "Call the drug ineffective without assessing delivered treatment",
      "Add multiple inhalers without observing their use",
      "Use the old initial group as the only decision input",
      "Correct implementation problems and assess other contributors before judging the regimen's effect"
    ],
    "answer": 3,
    "rationale": "GOLD's review-assess-adjust sequence includes technique, adherence, and relevant comorbidity. Poor delivery can explain apparent treatment failure. More prescriptions or an old initial group alone cannot establish that an adequately delivered regimen has failed.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-097",
    "question": "A patient has a moderate exacerbation while taking LABA-LAMA correctly. Eosinophils are 180 cells/microliter. Which escalation should be considered after reviewing risks and other factors?",
    "choices": [
      "LABA-LAMA-ICS",
      "Wait for at least two more exacerbations because one cannot justify review",
      "Replace both bronchodilators with ICS alone",
      "Add a second LABA to the existing LABA"
    ],
    "answer": 0,
    "rationale": "GOLD supports considering triple therapy after a moderate or severe event on LABA-LAMA, with ICS benefit possible at eosinophils at least 100 cells/microliter. Waiting for multiple additional events is not required. ICS alone or duplicate LABA does not implement this escalation.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-098",
    "question": "GOLD Figure 3.9 shows what option after an exacerbation on a single long-acting bronchodilator when eosinophils are at least 300 cells/microliter?",
    "choices": [
      "ICS monotherapy replacing bronchodilation",
      "An eosinophil-based branch to LABA-LAMA-ICS",
      "A requirement to stop all inhalers",
      "No possible escalation until hospitalization"
    ],
    "answer": 1,
    "rationale": "The figure includes a branch to triple therapy at this count. Its accompanying prose more generally recommends LABA-LAMA after an event on monotherapy, so the distinction should be acknowledged rather than claiming identical wording. Neither source recommends ICS alone, stopping all inhalers, or waiting for hospitalization.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-099",
    "question": "A patient on triple therapy has recurrent pneumonia and eosinophils 360 cells/microliter. What is the appropriate approach to ICS withdrawal?",
    "choices": [
      "Withdraw automatically with no monitoring because pneumonia occurred",
      "Never discuss withdrawal regardless of serious adverse effects",
      "Weigh benefits and harms; high eosinophils increase exacerbation risk after withdrawal, so any change needs close follow-up",
      "Stop all bronchodilators whenever ICS is removed"
    ],
    "answer": 2,
    "rationale": "Severe or recurrent pneumonia can justify considering ICS withdrawal, but GOLD warns that counts at least 300 are associated with more exacerbations after de-escalation. Neither automatic unmonitored withdrawal nor refusing any benefit-risk discussion is appropriate; stopping the bronchodilator foundation is not implied.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-100",
    "question": "A COPD patient is doing well on the current maintenance regimen, with acceptable adverse effects. What does the follow-up framework favor?",
    "choices": [
      "Escalating at every visit regardless of response",
      "Resetting to an untreated starting algorithm each year",
      "Withdrawing ICS automatically in every patient on triple therapy",
      "Continue effective treatment while reassessing symptoms, events, technique, adherence, and safety"
    ],
    "answer": 3,
    "rationale": "GOLD favors maintaining treatment when the response is appropriate. Follow-up remains necessary, but automatic escalation, restarting an initial algorithm, or universal ICS withdrawal does not follow the review-assess-adjust approach.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  }
];
const strategyCasesById = new Map(reviewedStrategyCases.map(question => [question.id, question]));

const reviewedBiologyCases = [
  {
    "id": "copd-001",
    "question": "Which change can directly contribute to small-airway obstruction in COPD?",
    "choices": [
      "Mucus plugging, airway-wall remodeling, and narrowing of bronchioles",
      "Uniform widening of all bronchioles from chronic inflammation",
      "Isolated destruction of red blood cells without airway change",
      "An obligatory increase in elastic recoil"
    ],
    "answer": 0,
    "rationale": "Mucus obstruction and structural narrowing increase small-airway resistance. Inflammation does not uniformly widen the airways. Red-cell destruction is not this mechanism, and emphysema reduces rather than obligatorily increases elastic recoil.",
    "reviewHref": "#airway-alveolar-and-systemic-biology"
  },
  {
    "id": "copd-002",
    "question": "A patient has little cough or expectorated sputum, but imaging shows mucus plugging. Which interpretation is appropriate?",
    "choices": [
      "The imaging must be wrong because plugging always causes productive cough",
      "Small-airway mucus obstruction can exist without classic chronic-bronchitis symptoms",
      "Mucus plugging confirms bacterial infection requiring antibiotics in every case",
      "Absence of cough excludes clinically important airway disease"
    ],
    "answer": 1,
    "rationale": "GOLD describes mucus plugging despite absent chronic-bronchitis symptoms. Small-airway obstruction can contribute to dyspnea with less cough or sputum than large-airway mucus production. Plugging alone neither proves bacterial infection nor makes the imaging invalid.",
    "reviewHref": "#airway-alveolar-and-systemic-biology"
  },
  {
    "id": "copd-003",
    "question": "Which history meets the classic chronic-bronchitis description after other causes have been excluded?",
    "choices": [
      "Dry cough for two days",
      "One isolated episode of sputum production",
      "Cough with sputum for at least three months per year in two consecutive years",
      "Any low FEV1 result regardless of symptoms"
    ],
    "answer": 2,
    "rationale": "The classic definition requires the stated duration of productive cough and exclusion of other explanations. Brief or isolated symptoms do not meet it. Spirometry measures physiology and does not by itself establish this symptom-defined syndrome.",
    "reviewHref": "#airway-alveolar-and-systemic-biology"
  },
  {
    "id": "copd-004",
    "question": "A patient meets the symptom definition of chronic bronchitis but has no post-bronchodilator airflow obstruction. What should be concluded?",
    "choices": [
      "Chronic bronchitis automatically establishes COPD",
      "No respiratory evaluation is needed because the ratio is preserved",
      "All symptoms are harmless if the patient never smoked",
      "The symptoms need evaluation, but chronic bronchitis alone does not confirm COPD"
    ],
    "answer": 3,
    "rationale": "Chronic bronchitis and spirometrically confirmed COPD are not interchangeable. Symptoms without obstruction still merit evaluation and risk reduction. Neither a preserved ratio nor absence of cigarette smoking makes persistent symptoms harmless.",
    "reviewHref": "#airway-alveolar-and-systemic-biology"
  },
  {
    "id": "copd-005",
    "question": "How does emphysema contribute to expiratory airflow limitation?",
    "choices": [
      "Loss of parenchymal recoil and alveolar attachments reduces support for small airways during expiration",
      "It increases alveolar attachments and elastic recoil",
      "It prevents any change in gas-exchange surface area",
      "It affects only expectorated mucus without changing lung structure"
    ],
    "answer": 0,
    "rationale": "Emphysematous tissue destruction reduces elastic recoil, airway support, and gas-exchange surface. These changes impede lung emptying. More attachments, preserved surface in every case, or an exclusively mucus-based process do not describe emphysema.",
    "reviewHref": "#airway-alveolar-and-systemic-biology"
  },
  {
    "id": "copd-006",
    "question": "A patient becomes very breathless during activity despite acceptable resting oxygen saturation. Which mechanism can explain this?",
    "choices": [
      "Resting saturation excludes any ventilatory mechanical limitation",
      "Expiratory flow limitation can cause dynamic hyperinflation as breathing demand rises",
      "Exercise always normalizes FEV1 in emphysema",
      "Acceptable saturation proves the patient cannot have COPD"
    ],
    "answer": 1,
    "rationale": "During increased ventilatory demand, shortened expiration and flow limitation can raise end-expiratory volume and restrict inspiratory capacity. Resting saturation does not measure these mechanics or exclude COPD, and exercise does not reliably normalize obstruction.",
    "reviewHref": "#airway-alveolar-and-systemic-biology"
  },
  {
    "id": "copd-007",
    "question": "Which assessment can help characterize suspected hyperinflation beyond FEV1 alone?",
    "choices": [
      "Only the peripheral eosinophil count",
      "Only a resting pulse rate",
      "Lung-volume measurements, with inspiratory-capacity assessment as an indirect measure",
      "The number of prescribed inhalers as a substitute for lung testing"
    ],
    "answer": 2,
    "rationale": "Lung volumes assess hyperinflation, and inspiratory capacity at rest or exercise can indirectly reflect increased end-expiratory volume. Eosinophils, resting pulse, and prescription count do not directly measure trapped gas or operating lung volumes.",
    "reviewHref": "#airway-alveolar-and-systemic-biology"
  },
  {
    "id": "copd-008",
    "question": "Which statement distinguishes static from dynamic hyperinflation in COPD?",
    "choices": [
      "Static hyperinflation occurs only during maximal exercise",
      "Dynamic hyperinflation means permanent normalization of lung volume",
      "Both terms describe oxygen saturation rather than lung volume",
      "Static hyperinflation can occur at rest; dynamic hyperinflation can increase with ventilatory demand and shortened expiration"
    ],
    "answer": 3,
    "rationale": "The distinction concerns operating lung volume and when it rises. Loss of recoil can produce resting hyperinflation, while increased demand and limited emptying during shorter expiratory periods can produce dynamic hyperinflation. Neither term means normalized volume or an oxygen saturation value.",
    "reviewHref": "#airway-alveolar-and-systemic-biology"
  },
  {
    "id": "copd-009",
    "question": "A patient with COPD is increasingly drowsy despite an oxygen saturation of 94% on supplemental oxygen. Which assessment addresses a limitation of pulse oximetry?",
    "choices": [
      "Prompt clinical and blood-gas assessment of ventilation and acid-base status",
      "Assume PaCO2 and pH are normal from saturation alone",
      "Treat the oximeter reading as a direct carbon-dioxide measurement",
      "Delay assessment until saturation becomes profoundly low"
    ],
    "answer": 0,
    "rationale": "Oximetry estimates saturation, not PaCO2 or pH. Drowsiness warrants prompt evaluation, including blood gases when ventilatory failure is possible. Supplemental oxygen can coexist with carbon-dioxide retention; a reassuring saturation must not postpone assessment.",
    "reviewHref": "#airway-alveolar-and-systemic-biology"
  },
  {
    "id": "copd-010",
    "question": "What is a major mechanism of abnormal pulmonary gas exchange in COPD?",
    "choices": [
      "Perfect matching of ventilation and perfusion in every region",
      "Altered ventilation-perfusion distribution from airway, alveolar, and vascular abnormalities",
      "A required absence of pulmonary vascular changes",
      "A universal increase in diffusion capacity with emphysema"
    ],
    "answer": 1,
    "rationale": "GOLD identifies altered ventilation-perfusion distribution as the main mechanism of abnormal gas exchange. Airway, alveolar, and vascular abnormalities contribute. Emphysema can lower diffusion capacity; neither perfect matching nor absence of vascular disease is expected.",
    "reviewHref": "#airway-alveolar-and-systemic-biology"
  },
  {
    "id": "copd-011",
    "question": "How can emphysema and hypoxic pulmonary vascular changes contribute to cor pulmonale?",
    "choices": [
      "They guarantee severe pulmonary hypertension in every patient",
      "They reduce right-ventricular load in all cases",
      "Loss of capillary bed and hypoxic vasoconstriction can contribute to pulmonary hypertension and right-heart strain",
      "They act only on mucus and cannot affect circulation"
    ],
    "answer": 2,
    "rationale": "These mechanisms can increase pulmonary vascular pressure and eventually contribute to right-sided heart failure. Severe pulmonary hypertension remains uncommon in COPD, so progression is not inevitable. The effects are not confined to mucus or uniformly protective of the right ventricle.",
    "reviewHref": "#airway-alveolar-and-systemic-biology"
  },
  {
    "id": "copd-012",
    "question": "Two patients have similar airflow obstruction but very different exercise ability and daily function. Which explanation is reasonable?",
    "choices": [
      "Equal FEV1 guarantees equal systemic and functional burden",
      "Muscle dysfunction and comorbidity cannot affect respiratory disability",
      "Only oxygen saturation can explain any difference",
      "Hyperinflation, muscle dysfunction, deconditioning, and comorbidity may contribute differently"
    ],
    "answer": 3,
    "rationale": "FEV1 does not capture all mechanical, systemic, or functional consequences. Muscle dysfunction, deconditioning, hyperinflation, and other diseases can alter exercise capacity despite similar spirometry. No single saturation measurement establishes the complete cause.",
    "reviewHref": "#airway-alveolar-and-systemic-biology"
  },
  {
    "id": "copd-037",
    "question": "Post-bronchodilator FEV1 is 72% predicted and FEV1/FVC is 0.76. Which description fits these values?",
    "choices": [
      "PRISm rather than confirmed obstructive COPD",
      "GOLD grade 2 COPD established from FEV1 alone",
      "Normal spirometry because the ratio is preserved",
      "Severe obstruction because every FEV1 below 80% implies an obstructed ratio"
    ],
    "answer": 0,
    "rationale": "PRISm combines FEV1 below 80% predicted with a preserved post-bronchodilator ratio at least 0.70. The impaired FEV1 means the spirometry is not normal, but the preserved ratio does not meet GOLD's obstructive COPD criterion. Airflow grading must not bypass confirmation.",
    "reviewHref": "#definition-diagnosis-and-etiotypes"
  },
  {
    "id": "copd-038",
    "question": "A symptomatic patient has structural lung abnormalities but no airflow obstruction. What does the term pre-COPD imply?",
    "choices": [
      "COPD is already confirmed regardless of spirometry",
      "A clinically relevant state that may or may not progress to persistent obstruction",
      "Progression to COPD is inevitable within one year",
      "The symptoms should be dismissed until obstruction develops"
    ],
    "answer": 1,
    "rationale": "Pre-COPD describes symptoms or structural or functional abnormalities without airflow obstruction. Progression is possible but not inevitable. The absence of established obstruction does not justify either a confirmed COPD label or dismissal of the patient's needs.",
    "reviewHref": "#definition-diagnosis-and-etiotypes"
  },
  {
    "id": "copd-039",
    "question": "What is known about the course of PRISm?",
    "choices": [
      "It always remains unchanged",
      "It always becomes COPD",
      "It can remain, normalize, or transition to obstruction, so reassessment matters",
      "It proves an obstructive diagnosis even when the ratio stays preserved"
    ],
    "answer": 2,
    "rationale": "PRISm is not a single fixed trajectory. GOLD describes transitions to both normal and obstructed spirometry. Follow-up and investigation are appropriate; neither inevitable progression nor automatic obstructive labeling is justified.",
    "reviewHref": "#definition-diagnosis-and-etiotypes"
  },
  {
    "id": "copd-040",
    "question": "A patient with pre-COPD asks whether one standard COPD inhaler regimen is proven best for everyone in that state. What is the accurate response?",
    "choices": [
      "Triple therapy is established as mandatory for every patient with preserved spirometry",
      "No care or follow-up is warranted",
      "All such patients should receive chronic oral corticosteroids",
      "Evaluate the abnormalities and reduce risk; the optimal drug treatment for this population is not established"
    ],
    "answer": 3,
    "rationale": "GOLD identifies a treatment-evidence gap for pre-COPD and PRISm. Patients still deserve evaluation, risk reduction, and follow-up. This uncertainty does not support universal triple therapy, chronic systemic steroids, or withholding care.",
    "reviewHref": "#definition-diagnosis-and-etiotypes"
  }
];
const biologyCasesById = new Map(reviewedBiologyCases.map(question => [question.id, question]));

const reviewedEtiotypeCases = [
  {
    "id": "copd-029",
    "question": "Two patients with COPD have different proportions of small-airway disease and emphysema. Which interpretation is correct?",
    "choices": [
      "COPD can contain variable airway and parenchymal contributions that evolve differently",
      "Every patient must have identical airway and alveolar damage",
      "Emphysema is required to be the only cause of obstruction",
      "Small-airway disease excludes emphysema"
    ],
    "answer": 0,
    "rationale": "GOLD describes variable contributions from small-airway disease and parenchymal destruction. They need not occur together or progress at the same rate. Neither identical pathology nor mutual exclusion is required.",
    "reviewHref": "#definition-diagnosis-and-etiotypes"
  },
  {
    "id": "copd-030",
    "question": "Why might diffusion-capacity testing add information beyond FEV1 in a patient with emphysema?",
    "choices": [
      "FEV1 directly measures every aspect of gas transfer",
      "Parenchymal destruction can impair gas transfer that spirometry alone does not fully describe",
      "Diffusion capacity is identical to the FEV1/FVC ratio",
      "A reduced diffusion capacity alone replaces COPD spirometric confirmation"
    ],
    "answer": 1,
    "rationale": "Emphysema can lower diffusion capacity through parenchymal destruction. FEV1 describes expiratory airflow rather than the entire gas-transfer process. Diffusion testing adds physiologic information but does not replace the required diagnostic assessment.",
    "reviewHref": "#definition-diagnosis-and-etiotypes"
  },
  {
    "id": "copd-031",
    "question": "A patient's breathlessness and exercise limitation are disproportionate to the measured airflow obstruction. Which additional evaluation can be appropriate?",
    "choices": [
      "Assume the symptoms are impossible",
      "Use FEV1 as the only permitted assessment",
      "Consider lung volumes, diffusion capacity, exercise testing, imaging, and other causes according to the presentation",
      "Assign Group E solely from symptom intensity"
    ],
    "answer": 2,
    "rationale": "GOLD supports additional evaluation when symptoms and obstruction are markedly discordant. Lung mechanics, gas transfer, exercise response, imaging, and comorbidity can explain burden beyond FEV1. Symptoms alone do not establish Group E or invalidate the patient's experience.",
    "reviewHref": "#definition-diagnosis-and-etiotypes"
  },
  {
    "id": "copd-032",
    "question": "A 68-year-old with COPD and a substantial smoking history has never been evaluated for alpha-1 antitrypsin deficiency. What does GOLD recommend?",
    "choices": [
      "Exclude testing because the patient is older than 45",
      "Exclude testing because smoking already explains risk",
      "Test only if basal emphysema is visible",
      "Test for AAT deficiency; the recommendation applies to all patients diagnosed with COPD"
    ],
    "answer": 3,
    "rationale": "GOLD recommends AAT-deficiency testing for all patients with COPD. Older age, smoking exposure, and a typical emphysema distribution do not rule it out. The classic young patient with basal emphysema is not the only presentation.",
    "reviewHref": "#definition-diagnosis-and-etiotypes"
  },
  {
    "id": "copd-033",
    "question": "A never-smoker with confirmed COPD reports years of poorly ventilated biomass cooking exposure. Which interpretation is appropriate?",
    "choices": [
      "Non-tobacco exposures can contribute to COPD and belong in the lifetime history",
      "COPD is impossible without cigarette smoking",
      "The exposure history removes the need for spirometry",
      "A never-smoker cannot have an inherited contribution"
    ],
    "answer": 0,
    "rationale": "Household, occupational, and outdoor exposures can contribute to COPD. Absence of cigarette use does not exclude the disease or an inherited cause. Exposure history informs etiology but does not replace spirometric confirmation.",
    "reviewHref": "#definition-diagnosis-and-etiotypes"
  },
  {
    "id": "copd-034",
    "question": "Which lung-function trajectory can contribute to COPD later in life?",
    "choices": [
      "Only normal peak lung function followed by accelerated decline",
      "Reduced peak lung function from impaired development, even with subsequent decline at a usual rate",
      "Only exposure beginning after age 65",
      "A normal childhood history is mandatory"
    ],
    "answer": 1,
    "rationale": "COPD can arise through impaired lung growth and lower attained peak function as well as accelerated later decline. Early-life influences matter; the disease does not require one uniform trajectory, exclusively late exposure, or a normal developmental history.",
    "reviewHref": "#definition-diagnosis-and-etiotypes"
  },
  {
    "id": "copd-035",
    "question": "Why should mild airflow obstruction not automatically be called early COPD?",
    "choices": [
      "Mild airflow obstruction always means disease began yesterday",
      "Chronological age and airflow grade are interchangeable",
      "Airflow grade describes current impairment, not necessarily when the biological disease process began",
      "Young adults cannot have substantial disease"
    ],
    "answer": 2,
    "rationale": "GOLD distinguishes mild spirometric obstruction from early biological disease. Different developmental and aging trajectories can produce the same current grade, and young patients can have substantial abnormalities. Age and grade do not establish the onset of the process.",
    "reviewHref": "#definition-diagnosis-and-etiotypes"
  },
  {
    "id": "copd-036",
    "question": "Why is a serum AAT concentration alone insufficient to fully characterize inherited AAT-deficiency risk?",
    "choices": [
      "The concentration directly identifies every genotype",
      "Inflammation never affects the result",
      "Genotyping cannot add information",
      "Levels can vary and overlap across genotypes; genotype and confirmatory testing may be needed"
    ],
    "answer": 3,
    "rationale": "AAT levels vary with inflammation and can overlap between genotypes. The AATD guideline recommends at least S/Z genotyping for symptomatic diagnostic testing, with appropriate confirmation. A level alone does not identify every inherited risk.",
    "reviewHref": "#definition-diagnosis-and-etiotypes"
  }
];
const etiotypeCasesById = new Map(reviewedEtiotypeCases.map(question => [question.id, question]));

const reviewedSupportCases = [
  {
    "id": "copd-105",
    "question": "Which plan best represents pulmonary rehabilitation for a symptomatic patient with COPD?",
    "choices": [
      "A patient-tailored program combining exercise, education, self-management, and relevant support",
      "A single instruction to exercise more without assessment or follow-up",
      "Inhaler escalation with no exercise or education component",
      "Bed rest until spirometry becomes normal"
    ],
    "answer": 0,
    "rationale": "Pulmonary rehabilitation is a structured, individualized intervention after assessment. It combines physical training with education and self-management and addresses barriers and relevant support needs. Advice alone, medication changes alone, or waiting for normal spirometry does not deliver this intervention.",
    "reviewHref": "#risk-reduction-rehabilitation-oxygen-and-advanced-care"
  },
  {
    "id": "copd-106",
    "question": "An older patient with COPD and diabetes has activity limitation. What is the appropriate rehabilitation approach?",
    "choices": [
      "Exclude rehabilitation solely because of age or diabetes",
      "Assess capability, goals, and comorbidity and tailor the program",
      "Require the same exercise intensity for every participant",
      "Wait until all comorbidities disappear before considering referral"
    ],
    "answer": 1,
    "rationale": "GOLD encourages structured rehabilitation that accounts for individual characteristics and comorbidity, including groups that are often under-referred. Age or diabetes alone is not a reason to exclude assessment. Exercise content and intensity should be individualized rather than uniform or postponed indefinitely.",
    "reviewHref": "#risk-reduction-rehabilitation-oxygen-and-advanced-care"
  },
  {
    "id": "copd-107",
    "question": "A rehabilitation candidate has trouble attending because of transportation and fatigue. What should the assessment include?",
    "choices": [
      "Only FEV1, because practical barriers do not affect participation",
      "Only the number of inhalers prescribed",
      "The patient's goals, functional capacity, health limitations, and barriers to participation",
      "An assumption that missed attendance means treatment cannot help"
    ],
    "answer": 2,
    "rationale": "Rehabilitation assessment includes goals, capabilities, physical and mental impediments, and barriers. These help tailor feasible care. FEV1 and prescription count alone cannot explain participation, and barriers should be addressed rather than equated with lack of potential benefit.",
    "reviewHref": "#risk-reduction-rehabilitation-oxygen-and-advanced-care"
  },
  {
    "id": "copd-108",
    "question": "After pulmonary rehabilitation, a patient walks farther and reports easier daily activity, while FEV1 is unchanged. How should this result be interpreted?",
    "choices": [
      "The program failed because FEV1 did not rise",
      "Functional improvement is irrelevant to rehabilitation",
      "Only oxygen saturation can establish any benefit",
      "Improved exercise capacity and daily function can represent benefit despite unchanged spirometry"
    ],
    "answer": 3,
    "rationale": "Rehabilitation outcomes include exercise capacity, symptoms, health status, and personally important activities. Spirometry helps establish baseline status but is not the sole or required measure of rehabilitation success. An unchanged FEV1 does not negate meaningful functional gains.",
    "reviewHref": "#risk-reduction-rehabilitation-oxygen-and-advanced-care"
  },
  {
    "id": "copd-109",
    "question": "A stable COPD patient has room-air PaO2 53 mmHg on two assessments over three weeks. Which interpretation matches GOLD long-term oxygen criteria?",
    "choices": [
      "This meets the severe resting hypoxemia criterion for considering LTOT within the full clinical assessment",
      "Oxygen is indicated only if the patient also reports severe breathlessness",
      "PaO2 must be below 40 mmHg before LTOT can be considered",
      "A preserved respiratory rate rules out oxygen eligibility"
    ],
    "answer": 0,
    "rationale": "GOLD includes stable PaO2 at or below 55 mmHg, confirmed twice over three weeks, among LTOT criteria. The stated 53 mmHg meets that threshold. Eligibility is not determined by breathlessness or respiratory rate alone, and a threshold below 40 is not required.",
    "reviewHref": "#risk-reduction-rehabilitation-oxygen-and-advanced-care"
  },
  {
    "id": "copd-110",
    "question": "A stable patient has moderate desaturation without severe chronic resting hypoxemia and expects routine LTOT to prolong survival. Which explanation is accurate?",
    "choices": [
      "Any degree of desaturation has the same established survival benefit from LTOT",
      "Routine LTOT has not improved survival or time to first hospitalization in stable moderate desaturation",
      "Normal daytime activity proves oxygen measurements can be ignored",
      "Moderate desaturation requires permanent oxygen without reassessment"
    ],
    "answer": 1,
    "rationale": "The established LTOT survival indication is severe chronic resting hypoxemia. GOLD reports no survival or first-hospitalization benefit from routine LTOT in stable moderate resting or exercise-induced desaturation. This does not remove the need for assessment or imply that every other oxygen indication is identical.",
    "reviewHref": "#risk-reduction-rehabilitation-oxygen-and-advanced-care"
  },
  {
    "id": "copd-111",
    "question": "Oxygen was started during a COPD hospitalization. What should happen as the patient recovers?",
    "choices": [
      "Keep the discharge flow permanently without checking oxygenation",
      "Stop oxygen solely because discharge has occurred",
      "Arrange reassessment of oxygenation and prescribed flow because the requirement may change",
      "Use the number of inhalers to decide the oxygen flow"
    ],
    "answer": 2,
    "rationale": "Exacerbation-related hypoxemia may improve. Reassessment checks whether oxygen remains indicated and whether the prescribed flow is adequate. Neither automatic permanent continuation nor automatic discontinuation is justified, and inhaler count cannot determine oxygen requirements.",
    "reviewHref": "#risk-reduction-rehabilitation-oxygen-and-advanced-care"
  },
  {
    "id": "copd-112",
    "question": "REDOX compared 24 with 15 hours of daily oxygen in severe resting hypoxemia. Which conclusion is supported?",
    "choices": [
      "The trial proved oxygen is unnecessary in severe resting hypoxemia",
      "The trial established that fewer than 15 hours is equally effective",
      "Twenty-four hours clearly reduced the one-year hospitalization-or-death outcome",
      "Twenty-four hours did not lower that outcome compared with 15 hours; this does not justify stopping indicated oxygen"
    ],
    "answer": 3,
    "rationale": "REDOX found no lower one-year hospitalization-or-death risk with 24 versus 15 hours daily. It did not compare oxygen with no oxygen or establish the effectiveness of less than 15 hours. Do not extend the result beyond the tested duration comparison.",
    "reviewHref": "#risk-reduction-rehabilitation-oxygen-and-advanced-care"
  }
];
const supportCasesById = new Map(reviewedSupportCases.map(question => [question.id, question]));

const reviewedIcsDeviceCases = [
  {
    "id": "copd-061",
    "question": "Which pattern generally supports a greater expected COPD exacerbation-prevention benefit from ICS added to long-acting bronchodilation?",
    "choices": [
      "A relevant exacerbation history with higher blood eosinophils",
      "Isolated dyspnea with no assessment of other causes",
      "Any inhaler technique error regardless of inflammation",
      "A low FEV1 value as the only decision factor"
    ],
    "answer": 0,
    "rationale": "ICS benefit is estimated using exacerbation history and eosinophils together. Persistent dyspnea, poor delivery, or low FEV1 alone does not establish the same preventive benefit and requires broader assessment.",
    "reviewHref": "#bronchodilators-anti-inflammatory-drugs-and-devices"
  },
  {
    "id": "copd-062",
    "question": "A patient without asthma has persistent breathlessness on dual bronchodilation but no exacerbations. What is the best ICS-related interpretation?",
    "choices": [
      "Breathlessness alone makes ICS mandatory",
      "Assess device use, adherence, rehabilitation, and competing causes rather than adding ICS solely for dyspnea",
      "ICS should replace both bronchodilators in every such case",
      "An ICS dose increase corrects every device failure"
    ],
    "answer": 1,
    "rationale": "The dyspnea pathway emphasizes bronchodilation, implementation, rehabilitation, and other causes. ICS is chiefly used for selected exacerbation-prevention benefit in COPD. It neither replaces that assessment nor corrects poor delivery by itself.",
    "reviewHref": "#bronchodilators-anti-inflammatory-drugs-and-devices"
  },
  {
    "id": "copd-063",
    "question": "How should eosinophil thresholds of 100 and 300 cells/microliter be interpreted when estimating COPD ICS benefit?",
    "choices": [
      "They guarantee the same response in every patient",
      "They replace the exacerbation history",
      "They are approximate decision guides along a continuous relationship, used with clinical context",
      "Any result above 100 eliminates pneumonia risk"
    ],
    "answer": 2,
    "rationale": "GOLD describes a continuous relationship, with little expected benefit at low counts and greater expected benefit at higher counts. Counts should be interpreted with exacerbation history and other factors. They are not response guarantees or protection from adverse effects.",
    "reviewHref": "#bronchodilators-anti-inflammatory-drugs-and-devices"
  },
  {
    "id": "copd-064",
    "question": "Which adverse-effect discussion is appropriate when considering an ICS-containing COPD regimen?",
    "choices": [
      "ICS has no infection or local adverse effects",
      "Every patient's fracture risk is proven identical across all ICS products",
      "Pneumonia cannot occur if eosinophils are high",
      "Discuss pneumonia and local effects such as candidiasis or hoarseness within the overall benefit-risk assessment"
    ],
    "answer": 3,
    "rationale": "GOLD identifies pneumonia, oral candidiasis, hoarseness, and bruising among ICS-associated risks. Evidence about bone outcomes varies. High eosinophils may predict benefit but do not eliminate adverse effects or justify claiming identical risks for every patient and product.",
    "reviewHref": "#bronchodilators-anti-inflammatory-drugs-and-devices"
  },
  {
    "id": "copd-065",
    "question": "A patient is stable on effective LABA-LAMA-ICS and has no significant adverse effects. Should ICS be routinely withdrawn just because the current interval has been quiet?",
    "choices": [
      "No; review the original indication and response rather than routinely removing effective ICS",
      "Yes; every symptom-free visit requires withdrawal",
      "Yes; stop all three ingredients together",
      "No further review is ever needed once triple therapy is prescribed"
    ],
    "answer": 0,
    "rationale": "GOLD advises against routine ICS withdrawal from triple therapy. Review indication, benefit, adverse effects, and risk over time. Stability does not automatically justify removal, and continued treatment still requires reassessment.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-066",
    "question": "A patient on triple therapy has recurrent pneumonia. Which approach to the ICS component is appropriate?",
    "choices": [
      "Never reconsider ICS under any circumstance",
      "Consider benefit and harm, including whether ICS withdrawal is warranted, with planned monitoring",
      "Stop all bronchodilators as an obligatory part of ICS withdrawal",
      "Use the pneumonia episode as proof that eosinophils are irrelevant"
    ],
    "answer": 1,
    "rationale": "Severe or recurrent pneumonia can prompt consideration of ICS withdrawal. Expected benefit, eosinophils, prior exacerbations, and other factors still matter. Removing ICS does not require abandoning bronchodilation or ignoring relapse risk.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-067",
    "question": "Before planned ICS withdrawal, eosinophils are 420 cells/microliter. What is the relevant implication?",
    "choices": [
      "The count proves withdrawal is harmless",
      "The count requires withdrawal regardless of prior benefit",
      "Exacerbation risk after withdrawal is higher at counts at least 300, so weigh the decision carefully and monitor",
      "The count means every bronchodilator must also be stopped"
    ],
    "answer": 2,
    "rationale": "GOLD associates eosinophils at least 300 with greater likelihood of exacerbations after ICS de-escalation. This is a risk consideration, not an automatic instruction either to withdraw or never withdraw. Close follow-up and individualized benefit-risk assessment are needed.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-068",
    "question": "Which history is especially important before treating ICS withdrawal as a routine COPD-only decision?",
    "choices": [
      "The color of the inhaler packaging",
      "Whether the patient prefers a shorter medication list, as the sole criterion",
      "The pharmacy's shelf location for the inhaler",
      "Whether concomitant asthma is present"
    ],
    "answer": 3,
    "rationale": "Concomitant asthma changes the treatment framework and requires ICS-containing asthma-directed care. Convenience and packaging do not override this clinical requirement. Review the diagnosis and indication before de-escalation.",
    "reviewHref": "#initial-and-follow-up-pharmacologic-strategy"
  },
  {
    "id": "copd-077",
    "question": "A patient cannot generate an adequate inhalation through a prescribed DPI. What is the best next step?",
    "choices": [
      "Assess inspiratory performance and choose an appropriate alternative delivery system with training",
      "Assume every DPI works independently of inspiratory effort",
      "Increase the number of devices without observing use",
      "Use the same inhalation maneuver for every device"
    ],
    "answer": 0,
    "rationale": "DPIs require sufficient inspiratory effort for powder dispersion, with device-specific resistance. GOLD recommends observing use and, when needed, objectively assessing flow or selecting another suitable system. More devices or generic technique does not resolve an incompatible delivery method.",
    "reviewHref": "#bronchodilators-anti-inflammatory-drugs-and-devices"
  },
  {
    "id": "copd-078",
    "question": "Which general inhalation distinction is consistent with GOLD's device discussion?",
    "choices": [
      "Every device requires the same inspiratory pattern",
      "pMDIs and soft-mist inhalers generally use slow, deep inspiration, while DPIs require forceful inspiration",
      "DPIs should always be connected to a spacer",
      "Forceful inspiration is never relevant to powder delivery"
    ],
    "answer": 1,
    "rationale": "The general maneuver differs by device type. Follow the exact product instructions and verify technique. A spacer is not a universal DPI accessory, and powder dispersion depends on appropriate inspiratory effort.",
    "reviewHref": "#bronchodilators-anti-inflammatory-drugs-and-devices"
  },
  {
    "id": "copd-079",
    "question": "A patient can correctly use a handheld inhaler but requests a nebulizer because it is always more effective. What is the accurate response?",
    "choices": [
      "Nebulized treatment is proven superior for every patient",
      "Device selection does not need to consider capability or preference",
      "There is no established general superiority of nebulizers over properly used handheld devices; individualize the choice",
      "Nebulizers never have a role in COPD"
    ],
    "answer": 2,
    "rationale": "GOLD finds no general superiority of nebulized therapy when handheld devices are used properly. Capability, medicine availability, preferences, and practical circumstances still influence selection. This does not make nebulizers universally better or universally inappropriate.",
    "reviewHref": "#bronchodilators-anti-inflammatory-drugs-and-devices"
  },
  {
    "id": "copd-080",
    "question": "A payer changes a patient's inhaler to a different device. Which follow-up is necessary?",
    "choices": [
      "Assume the old technique transfers without review",
      "Provide the package leaflet and never reassess",
      "Judge adherence only from the prescription being filled",
      "Demonstrate the new technique, ask the patient to show it back, and recheck use over time"
    ],
    "answer": 3,
    "rationale": "Device changes require retraining and verification of correct use. Teach-back and repeated checks address preparation, inhalation, and other errors. A leaflet or refill record alone does not demonstrate successful drug delivery.",
    "reviewHref": "#bronchodilators-anti-inflammatory-drugs-and-devices"
  }
];
const icsDeviceCasesById = new Map(reviewedIcsDeviceCases.map(question => [question.id, question]));

const reviewedBronchodilatorCases = [
  {
    "id": "copd-057",
    "question": "Which pairing correctly describes the complementary actions of tiotropium and olodaterol?",
    "choices": [
      "Both directly activate beta2 receptors",
      "Tiotropium inhibits airway M3 signaling; olodaterol activates beta2 signaling and increases cAMP",
      "Tiotropium is an inhaled corticosteroid; olodaterol inhibits IL-5",
      "Both prevent symptoms by blocking histamine H1 receptors"
    ],
    "answer": 1,
    "rationale": "The LAMA and LABA act through different airway smooth-muscle pathways. Tiotropium is neither an ICS nor an H1 blocker; olodaterol is not an IL-5 inhibitor.",
    "reviewHref": "#bronchodilators-anti-inflammatory-drugs-and-devices"
  },
  {
    "id": "copd-058",
    "question": "A patient using tiotropium-olodaterol is also prescribed a separate daily tiotropium inhaler. What needs clarification?",
    "choices": [
      "Whether both contain an ICS",
      "Whether either is an antibiotic",
      "Whether two different brand names guarantee different drug classes",
      "The duplicate tiotropium exposure and intended replacement plan"
    ],
    "answer": 3,
    "rationale": "Reconcile active ingredients before dispensing or continuing both. The combination already contains tiotropium; separate tiotropium adds anticholinergic exposure rather than a new complementary class.",
    "reviewHref": "#bronchodilators-anti-inflammatory-drugs-and-devices"
  },
  {
    "id": "copd-059",
    "question": "During tiotropium-olodaterol treatment, a patient develops painful difficulty urinating. Which response is appropriate?",
    "choices": [
      "Arrange prompt assessment for urinary retention and review anticholinergic exposure",
      "Increase tiotropium to treat the urinary symptoms",
      "Assume inhaled medicines cannot have effects outside the lung",
      "Ignore the symptom unless spirometry also worsens"
    ],
    "answer": 0,
    "rationale": "Urinary retention is a relevant anticholinergic precaution. A new painful voiding problem requires assessment rather than more medication or waiting for a lung-function change.",
    "reviewHref": "#bronchodilators-anti-inflammatory-drugs-and-devices"
  },
  {
    "id": "copd-060",
    "question": "A patient already taking tiotropium-olodaterol asks to add scheduled salmeterol for ongoing breathlessness. What is the medication-safety concern?",
    "choices": [
      "Salmeterol duplicates the LAMA component",
      "The regimen would contain two LABAs; assess symptoms and delivery without adding duplicate LABA therapy",
      "The new inhaler would supply an ICS that automatically prevents duplication",
      "All long-acting inhalers can safely be combined if brands differ"
    ],
    "answer": 1,
    "rationale": "Olodaterol and salmeterol are LABAs. Adding another LABA conflicts with combination-product labeling and increases overdose risk; unresolved breathlessness needs reassessment, not duplicate long-acting beta agonists.",
    "reviewHref": "#bronchodilators-anti-inflammatory-drugs-and-devices"
  },
  {
    "id": "copd-069",
    "question": "Which patient profile matches the labeled preventive role of oral roflumilast?",
    "choices": [
      "Severe COPD with chronic bronchitis and a history of exacerbations",
      "An isolated episode of sudden bronchospasm needing rapid relief",
      "Asymptomatic normal spirometry without COPD",
      "A patient seeking an oral replacement for all inhaled bronchodilators"
    ],
    "answer": 0,
    "rationale": "Roflumilast is a PDE4 inhibitor used to reduce exacerbation risk in a selected chronic-bronchitic COPD population. It is not a bronchodilator, an acute rescue drug, or a universal replacement for inhaled therapy.",
    "reviewHref": "#advanced-anti-inflammatory-and-phenotype-therapy"
  },
  {
    "id": "copd-070",
    "question": "After starting roflumilast, a patient has persistent diarrhea and unexplained clinically significant weight loss. What is the appropriate next step?",
    "choices": [
      "Ignore the weight change if breathing seems unchanged",
      "Double the dose to overcome reduced absorption",
      "Evaluate the weight loss and treatment tolerance, and consider discontinuation",
      "Stop monitoring weight once the maintenance dose is reached"
    ],
    "answer": 2,
    "rationale": "Regular weight monitoring is necessary. Significant or unexplained loss warrants investigation and reconsideration of treatment; continued dosing without assessment or empiric dose escalation is inappropriate.",
    "reviewHref": "#advanced-anti-inflammatory-and-phenotype-therapy"
  },
  {
    "id": "copd-071",
    "question": "A patient taking roflumilast reports new insomnia and worsening depression. Which counseling response is best?",
    "choices": [
      "These symptoms cannot be medication-related",
      "Wait until the next annual review",
      "Increase the dose to improve mood",
      "Contact the treating clinician promptly for assessment and reassessment of continued treatment"
    ],
    "answer": 3,
    "rationale": "Psychiatric symptoms, including suicidality, are a labeled concern. New or worsening symptoms warrant prompt review; a prior absence of depression does not exclude risk. Suicidal thoughts require immediate safety assessment.",
    "reviewHref": "#advanced-anti-inflammatory-and-phenotype-therapy"
  },
  {
    "id": "copd-072",
    "question": "A medication review finds rifampin in a patient being considered for roflumilast. Which interpretation is correct?",
    "choices": [
      "Rifampin reliably increases roflumilast exposure and requires routine halving of its dose",
      "Strong enzyme induction can reduce roflumilast exposure and effectiveness; concurrent use is not recommended",
      "The combination is preferred because both are rescue bronchodilators",
      "There is no interaction because roflumilast is inhaled"
    ],
    "answer": 1,
    "rationale": "Roflumilast is oral. Strong CYP enzyme inducers such as rifampin reduce exposure; this is different from inhibitors that can increase exposure. Do not assume an unvalidated dose adjustment solves the interaction.",
    "reviewHref": "#advanced-anti-inflammatory-and-phenotype-therapy"
  }
];
const bronchodilatorCasesById = new Map(reviewedBronchodilatorCases.map(question => [question.id, question]));

const reviewedEnsifentrineCases = [
  {
    "id": "copd-073",
    "question": "Which order matches labeled adult COPD maintenance dosing for ensifentrine?",
    "choices": [
      "3 mg orally as needed for sudden symptoms",
      "3 mg by jet nebulizer morning and evening",
      "3 mg by intravenous injection twice daily",
      "Three ampules nebulized whenever rescue albuterol is needed"
    ],
    "answer": 1,
    "rationale": "Ensifentrine is inhaled maintenance therapy. One 3 mg ampule is used per scheduled treatment; oral, intravenous, and extra rescue dosing are inappropriate.",
    "reviewHref": "#bronchodilators-anti-inflammatory-drugs-and-devices"
  },
  {
    "id": "copd-074",
    "question": "A patient wants to pour ensifentrine and another nebulized medicine into the same cup. What is the correct instruction?",
    "choices": [
      "Mix them if both liquids have the same color",
      "Mix them only after adding tap water",
      "Keep ensifentrine separate; compatibility with other drugs is not established",
      "Skip shaking so the medicines remain in separate layers"
    ],
    "answer": 2,
    "rationale": "Do not physically mix ensifentrine with other medicines. Shake its suspension vigorously and use the full ampule with the specified jet-nebulizer system; color and dilution do not establish compatibility.",
    "reviewHref": "#bronchodilators-anti-inflammatory-drugs-and-devices"
  },
  {
    "id": "copd-075",
    "question": "Which comparison of ensifentrine and roflumilast hepatic precautions is accurate?",
    "choices": [
      "Both have identical Child-Pugh B/C contraindications",
      "Neither requires attention to liver disease because doses are small",
      "Ensifentrine requires caution in hepatic impairment, whereas roflumilast is contraindicated in Child-Pugh B or C",
      "Ensifentrine must always be doubled in hepatic impairment"
    ],
    "answer": 2,
    "rationale": "Product-specific restrictions differ. Increased ensifentrine exposure calls for caution, not an invented dose increase or automatic transfer of the oral roflumilast contraindication.",
    "reviewHref": "#bronchodilators-anti-inflammatory-drugs-and-devices"
  },
  {
    "id": "copd-076",
    "question": "Sudden wheezing and worse breathing occur immediately after an ensifentrine treatment, suggesting paradoxical bronchospasm. What is appropriate?",
    "choices": [
      "Repeat ensifentrine until symptoms resolve",
      "Continue the same dose and wait for next month\u2019s visit",
      "Treat it by swallowing another ampule",
      "Stop ensifentrine immediately, treat with a short-acting inhaled bronchodilator, and obtain clinical assessment and alternative therapy"
    ],
    "answer": 3,
    "rationale": "Paradoxical bronchospasm can be serious. Discontinue the implicated treatment and address the acute bronchospasm; additional ensifentrine is not rescue therapy.",
    "reviewHref": "#bronchodilators-anti-inflammatory-drugs-and-devices"
  }
];
const ensifentrineCasesById = new Map(reviewedEnsifentrineCases.map(question => [question.id, question]));

const reviewedMacrolideCases = [
  {
    "id": "copd-013",
    "question": "A former smoker has recurrent COPD exacerbations despite optimized inhaled and nonpharmacologic care. What is an appropriate approach to possible preventive azithromycin?",
    "choices": [
      "Prescribe indefinitely without baseline assessment",
      "Consider a specialist-led monitored trial after cardiac, hearing, liver, microbiologic, and interaction review",
      "Replace every inhaled medicine with azithromycin",
      "Use it only as an immediate bronchodilator"
    ],
    "answer": 1,
    "rationale": "Long-term azithromycin is a selected preventive option, not rescue or a replacement for optimized COPD care. Expected benefit must justify toxicity and resistance risks; indefinite unmonitored treatment is inappropriate.",
    "reviewHref": "#advanced-anti-inflammatory-and-phenotype-therapy"
  },
  {
    "id": "copd-014",
    "question": "Under BTS long-term macrolide guidance, a man being considered for preventive azithromycin has a baseline QTc of 468 ms. What follows?",
    "choices": [
      "This is below the BTS threshold for men",
      "Start therapy because only QTc above 500 ms matters",
      "Do not initiate under this guidance; his QTc exceeds its 450 ms threshold for men",
      "Ignore QTc if the patient has no palpitations"
    ],
    "answer": 2,
    "rationale": "468 ms exceeds 450 ms. BTS treats QTc above 450 ms in men or above 470 ms in women as a contraindication to initiating long-term macrolides; absence of symptoms does not remove this risk.",
    "reviewHref": "#advanced-anti-inflammatory-and-phenotype-therapy"
  },
  {
    "id": "copd-015",
    "question": "Prevention screening identifies nontuberculous mycobacteria in sputum. What should happen before chronic azithromycin monotherapy for COPD?",
    "choices": [
      "Start monotherapy to sterilize the culture",
      "Ignore the result because azithromycin is being used for prevention",
      "Double the preventive dose without further assessment",
      "Avoid macrolide monotherapy and arrange evaluation of the NTM finding"
    ],
    "answer": 3,
    "rationale": "BTS advises against macrolide monotherapy when NTM is identified. The result requires appropriate assessment; a preventive intent does not remove the risk of selecting resistance or establish an adequate NTM regimen.",
    "reviewHref": "#advanced-anti-inflammatory-and-phenotype-therapy"
  },
  {
    "id": "copd-016",
    "question": "After twelve months of preventive azithromycin, a patient asks whether trials establish safe and effective indefinite continuation. Which response is accurate?",
    "choices": [
      "GOLD notes that efficacy and safety beyond one year are not established; reassess individual benefit and harm",
      "One successful year proves that lifelong treatment has no additional risk",
      "All patients must automatically increase to daily high-dose therapy",
      "Monitoring can stop once the first year is complete"
    ],
    "answer": 0,
    "rationale": "The available duration of evidence must not be extrapolated to indefinite treatment. Review exacerbations, adverse effects, interactions, and resistance concerns; neither automatic escalation nor abandoning monitoring is justified.",
    "reviewHref": "#advanced-anti-inflammatory-and-phenotype-therapy"
  }
];
const macrolideCasesById = new Map(reviewedMacrolideCases.map(question => [question.id, question]));

const reviewedBiologicCases = [
  {
    "id": "copd-017",
    "question": "Which statement accurately describes the US COPD indications for dupilumab and mepolizumab?",
    "choices": [
      "Both are rescue treatments for sudden bronchospasm",
      "Both are add-on maintenance treatments for adults with inadequately controlled COPD and an eosinophilic phenotype",
      "Both replace all inhaled medicines after the first dose",
      "Both are indicated for every person with chronic cough regardless of diagnosis"
    ],
    "answer": 1,
    "rationale": "Both labels describe selected adult eosinophilic COPD maintenance use. Acute symptoms require appropriate rescue assessment and treatment; neither label supports indiscriminate use or automatic withdrawal of background therapy.",
    "reviewHref": "#advanced-anti-inflammatory-and-phenotype-therapy"
  },
  {
    "id": "copd-018",
    "question": "Which dupilumab regimen matches its adult COPD labeling?",
    "choices": [
      "600 mg loading followed by 300 mg every week",
      "100 mg every four weeks",
      "300 mg subcutaneously every two weeks, without a COPD loading dose",
      "300 mg inhaled daily"
    ],
    "answer": 2,
    "rationale": "The COPD regimen is 300 mg subcutaneously every two weeks. Loading doses used for other dupilumab indications should not be imported into this regimen; 100 mg every four weeks is the mepolizumab COPD dose.",
    "reviewHref": "#advanced-anti-inflammatory-and-phenotype-therapy"
  },
  {
    "id": "copd-019",
    "question": "A patient receiving mepolizumab for COPD is prescribed 300 mg every four weeks using the EGPA regimen. What should be clarified?",
    "choices": [
      "COPD labeling uses 100 mg subcutaneously every four weeks",
      "COPD labeling requires intravenous dosing",
      "The dose must instead be given every day",
      "All mepolizumab indications use 300 mg"
    ],
    "answer": 0,
    "rationale": "Mepolizumab dosing depends on indication. Adult COPD uses 100 mg every four weeks; the 300 mg regimen for EGPA or HES is not the COPD regimen.",
    "reviewHref": "#advanced-anti-inflammatory-and-phenotype-therapy"
  },
  {
    "id": "copd-020",
    "question": "Which interpretation of the biologic COPD evidence is accurate?",
    "choices": [
      "One eosinophil count establishes identical eligibility for every biologic",
      "The trials established biologics as emergency rescue treatments",
      "The labeled indication is limited to the exact FEV1 and eosinophil numbers in every trial",
      "Review the labeled phenotype, exacerbation and treatment history, and product-specific trial populations rather than applying one universal cutoff"
    ],
    "answer": 3,
    "rationale": "Dupilumab trials used screening eosinophils at least 300. Mepolizumab evidence includes MATINEE at least 300 and a METREX efficacy subgroup with at least 150 at screening or at least 300 historically. Trial enrollment criteria and the indication wording are not interchangeable; neither drug is rescue therapy.",
    "reviewHref": "#advanced-anti-inflammatory-and-phenotype-therapy"
  }
];
const biologicCasesById = new Map(reviewedBiologicCases.map(question => [question.id, question]));

const reviewedPreventionCases = [
  {
    "id": "copd-101",
    "question": "An adult with COPD who continues smoking is ready to make another quit attempt. Which plan best supports cessation?",
    "choices": [
      "Offer counseling plus an appropriate cessation medicine, with follow-up",
      "Wait until spirometry becomes normal before treating tobacco dependence",
      "Provide only a warning and refuse further help after a prior relapse",
      "Replace all maintenance COPD treatment with nicotine"
    ],
    "answer": 0,
    "rationale": "Behavioral support and medication work together. Review suitability, withdrawal, prior attempts and follow-up; relapse does not make future treatment futile, and cessation support does not replace indicated COPD care.",
    "reviewHref": "#risk-reduction-rehabilitation-oxygen-and-advanced-care"
  },
  {
    "id": "copd-102",
    "question": "Why might a nicotine patch be combined with nicotine gum or lozenges during a quit attempt?",
    "choices": [
      "The patch prevents all possible cravings immediately",
      "The combination is prohibited because the products contain the same medicine",
      "The patch supplies sustained treatment and gum or lozenges can address breakthrough cravings",
      "Gum or lozenges reverse established emphysema"
    ],
    "answer": 2,
    "rationale": "CDC describes combining long-acting patch therapy with a short-acting nicotine product to improve cessation success. This is an intentional complementary regimen, not a claim that nicotine reverses structural lung damage.",
    "reviewHref": "#risk-reduction-rehabilitation-oxygen-and-advanced-care"
  },
  {
    "id": "copd-103",
    "question": "Which approach best fits vaccination planning for a patient with COPD?",
    "choices": [
      "Give every available vaccine on the same schedule regardless of age or previous doses",
      "Review current local recommendations, age, risk, prior doses and contraindications, then offer indicated vaccines",
      "Defer all vaccines until COPD resolves",
      "Assume inhaled bronchodilators provide protection from respiratory infections"
    ],
    "answer": 1,
    "rationale": "Vaccination is part of COPD prevention, but product choice and timing depend on current recommendations and the individual record. COPD does not resolve before prevention can begin, and bronchodilation does not substitute for immunization.",
    "reviewHref": "#risk-reduction-rehabilitation-oxygen-and-advanced-care"
  },
  {
    "id": "copd-104",
    "question": "A patient has stopped smoking but still encounters occupational dust and household smoke. What should the COPD plan include?",
    "choices": [
      "No further exposure review because cigarette cessation addresses every risk",
      "Only a larger inhaler dose while ignoring avoidable exposures",
      "Stopping rehabilitation until all environmental exposure reaches zero",
      "Assess and reduce other relevant inhaled exposures while continuing appropriate COPD care"
    ],
    "answer": 3,
    "rationale": "Risk reduction includes occupational and household exposures as well as tobacco. Evaluate practical exposure controls; escalating medication alone does not remove an ongoing injurious exposure, and useful rehabilitation need not wait for a perfectly exposure-free environment.",
    "reviewHref": "#risk-reduction-rehabilitation-oxygen-and-advanced-care"
  }
];
const preventionCasesById = new Map(reviewedPreventionCases.map(question => [question.id, question]));

export const chronicObstructivePulmonaryDiseaseQuestionBank = concepts.flatMap((concept, conceptIndex) =>
  dimensions.map(([field, prompt], dimensionIndex) => ({
    id: `copd-${String(conceptIndex * 4 + dimensionIndex + 1).padStart(3, "0")}`,
    question: `${prompt} ${concept.name}?`,
    choices: [concept[field], ...distractors(conceptIndex, field)],
    answer: 0,
    rationale: concept.why,
    reviewHref: `#${concept.lesson}`,
  })),
).map(question => diagnosticCasesById.get(question.id) ?? acuteCasesById.get(question.id) ?? severityCasesById.get(question.id) ?? strategyCasesById.get(question.id) ?? biologyCasesById.get(question.id) ?? etiotypeCasesById.get(question.id) ?? supportCasesById.get(question.id) ?? icsDeviceCasesById.get(question.id) ?? bronchodilatorCasesById.get(question.id) ?? ensifentrineCasesById.get(question.id) ?? macrolideCasesById.get(question.id) ?? biologicCasesById.get(question.id) ?? preventionCasesById.get(question.id) ?? question).concat([
  {
    "id": "copd-121",
    "question": "A prescription calls for 500 mcg of nebulized ipratropium. The solution is 0.02% w/v. Which volume supplies the prescribed dose?",
    "choices": [
      "2.5 mL",
      "0.25 mL",
      "25 mL",
      "0.5 mL"
    ],
    "answer": 0,
    "rationale": "A 0.02% w/v solution contains 0.02 g per 100 mL, or 0.2 mg/mL. The prescribed 500 mcg is 0.5 mg; 0.5 mg divided by 0.2 mg/mL equals 2.5 mL. The other volumes provide 50 mcg, 5 mg, and 100 mcg, respectively.",
    "reviewHref": "#bronchodilators-anti-inflammatory-drugs-and-devices"
  },
  {
    "id": "copd-122",
    "question": "The chart lists ipratropium 0.5 mg/albuterol 2.5 mg per 3 mL, but the dispensed combination vial lists albuterol sulfate 3 mg. What should the pharmacist conclude after confirming the label?",
    "choices": [
      "The vial is 20% too strong and must be discarded",
      "The 3 mg sulfate amount is equivalent to 2.5 mg albuterol base",
      "The vial must be diluted to change the active albuterol dose",
      "The order requires two vials to provide enough albuterol"
    ],
    "answer": 1,
    "rationale": "The combination label expresses 3 mg albuterol sulfate as equivalent to 2.5 mg albuterol base. The apparent mismatch is salt-versus-base notation. Dilution changes concentration, not the total amount of drug in the vial; doubling the vial would double both ingredients.",
    "reviewHref": "#bronchodilators-anti-inflammatory-drugs-and-devices"
  },
  {
    "id": "copd-123",
    "question": "A patient prescribed Combivent Respimat takes two puffs four times daily because their previous Respimat inhaler used two puffs per dose. Which correction matches the Combivent label?",
    "choices": [
      "Continue two puffs four times daily because all Respimat doses match",
      "Use two puffs once daily regardless of the prescription",
      "Use one puff four times daily, with no more than six puffs in 24 hours",
      "Use one puff every hour until the cartridge is empty"
    ],
    "answer": 2,
    "rationale": "Combivent dosing is product-specific: one inhalation four times daily, with a labeled maximum of six inhalations in 24 hours. Two puffs four times daily totals eight, exceeding that maximum. A shared device family does not establish dose equivalence.",
    "reviewHref": "#bronchodilators-anti-inflammatory-drugs-and-devices"
  },
  {
    "id": "copd-124",
    "question": "An Atrovent HFA inhaler has been unused for five days. Which preparation instruction matches its label?",
    "choices": [
      "Shake vigorously and release four priming sprays",
      "Skip priming because medicine remains in the canister",
      "Prime until a mist appears, then release three more sprays",
      "Release two test sprays away from the face; shaking is unnecessary"
    ],
    "answer": 3,
    "rationale": "Atrovent HFA requires two priming sprays initially and after more than three unused days. It is a solution aerosol that does not require shaking. The until-mist-plus-three sequence belongs to certain Respimat products, not this inhaler.",
    "reviewHref": "#bronchodilators-anti-inflammatory-drugs-and-devices"
  },
  {
    "id": "copd-125",
    "question": "After four weeks of roflumilast 250 mcg daily, a patient asks whether this can be the permanent preventive dose. Which response accurately describes labeling?",
    "choices": [
      "The 250 mcg dose is an optional tolerability lead-in; the effective maintenance dose is 500 mcg daily",
      "The 250 mcg dose is fully effective maintenance for all patients",
      "The dose should alternate between 250 and 500 mcg indefinitely",
      "Both doses should be reserved for sudden bronchospasm"
    ],
    "answer": 0,
    "rationale": "The lower dose can be used for the first four weeks to improve tolerability, but it is not the effective therapeutic dose. Maintenance is 500 mcg daily. Persistent intolerance needs prescriber reassessment rather than describing 250 mcg as effective maintenance; neither dose is rescue treatment.",
    "reviewHref": "#advanced-anti-inflammatory-and-phenotype-therapy"
  },
  {
    "id": "copd-126",
    "question": "A patient with chronic bronchitis and recurrent COPD exacerbations has Child-Pugh B cirrhosis. Roflumilast is proposed. What is the appropriate labeling-based assessment?",
    "choices": [
      "Start 250 mcg permanently to remove the contraindication",
      "Moderate hepatic impairment is a contraindication to roflumilast",
      "The drug is contraindicated only if renal impairment also exists",
      "Child-Pugh B requires doubling the maintenance dose"
    ],
    "answer": 1,
    "rationale": "Child-Pugh B or C hepatic impairment contraindicates oral roflumilast. A lower starting dose does not override this restriction. Mild hepatic impairment requires benefit-risk assessment; renal impairment does not require dose adjustment.",
    "reviewHref": "#advanced-anti-inflammatory-and-phenotype-therapy"
  }
]);
