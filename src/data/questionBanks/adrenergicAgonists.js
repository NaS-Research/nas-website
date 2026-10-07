const concepts = [
  { name: "alpha-1 Gq signaling", lesson: "adrenoceptor-signaling-map", principle: "Phospholipase C, inositol trisphosphate, and intracellular calcium promote smooth-muscle contraction.", action: "Predict vasoconstriction, mydriasis, and bladder-neck or prostatic contraction by tissue context.", assessment: "Separate direct vascular constriction from reflex heart-rate and flow changes.", hazard: "Excess activation can increase afterload and regional ischemia despite higher pressure.", why: "Alpha-1 effects follow a Gq-calcium contractile program." },
  { name: "alpha-2 Gi signaling", lesson: "adrenoceptor-signaling-map", principle: "Reduced adenylyl cyclase activity can limit transmitter release and central sympathetic outflow.", action: "Use compartment to distinguish central sympatholysis from peripheral postsynaptic vasoconstriction.", assessment: "Track sedation, heart rate, pressure, withdrawal, and interacting depressant or rate-slowing drugs.", hazard: "Abrupt withdrawal after adaptation can trigger severe rebound sympathetic activity.", why: "Alpha-2 effects differ by receptor location and exposure." },
  { name: "beta-1 Gs signaling", lesson: "adrenoceptor-signaling-map", principle: "cAMP and protein kinase A increase cardiac rate, conduction, relaxation, contractility, and renin release.", action: "Use beta-1 stimulation when increased cardiac performance fits the hemodynamic problem.", assessment: "Monitor rhythm, perfusion, ischemia, pressure, output, and myocardial oxygen demand.", hazard: "Tachyarrhythmia or ischemia can erase the benefit of increased contractility.", why: "Cardiac work and oxygen demand rise with beta-1 stimulation." },
  { name: "beta-2 Gs signaling", lesson: "adrenoceptor-signaling-map", principle: "Raised cAMP reduces smooth-muscle contractile signaling in airway, uterine, and selected vascular tissue.", action: "Use inhaled delivery to prioritize bronchodilation while limiting systemic exposure.", assessment: "Track airflow, rescue need, tremor, pulse, potassium, glucose, and paradoxical bronchospasm.", hazard: "Repeated high exposure can cause tachycardia, hypokalemia, and metabolic lactate elevation.", why: "Beta-2 receptors influence airway and systemic physiology." },
  { name: "beta-3 activation", lesson: "adrenoceptor-signaling-map", principle: "Gs-dominant signaling contributes to detrusor relaxation and metabolic effects.", action: "Connect bladder beta-3 agonism to storage-phase relaxation rather than voiding contraction.", assessment: "Use product-specific monitoring for pressure, pulse, urinary response, interactions, and organ function.", hazard: "A receptor label does not make every beta-3 product free of cardiovascular effects.", why: "Observed safety depends on selectivity and systemic exposure." },
  { name: "dopamine D1-like vascular signaling", lesson: "adrenoceptor-signaling-map", principle: "D1-like receptor activation can raise cAMP and relax selected vascular smooth muscle independently of alpha and beta adrenoceptors.", action: "Include dopaminergic, beta, and alpha effects when interpreting a dopamine infusion rather than assigning one fixed receptor to a dose band.", assessment: "Track cardiac output, rhythm, pressure, urine flow, regional and peripheral perfusion, and the changing response during titration.", hazard: "A urine-output increase does not establish kidney protection or justify low-dose dopamine for that purpose.", why: "Dopamine receptor engagement can change renal blood flow without proving improved kidney outcomes." },
  { name: "epinephrine receptor spectrum", lesson: "direct-indirect-sympathomimetics", principle: "Epinephrine activates alpha-1, alpha-2, beta-1, and beta-2 receptors, with concentration and route shaping response.", action: "Use intramuscular epinephrine promptly for anaphylaxis according to the current emergency protocol.", assessment: "Follow airway edema, bronchospasm, pressure, perfusion, rhythm, recurrence, and injection technique.", hazard: "Delaying epinephrine while substituting antihistamines can permit anaphylactic collapse.", why: "No adjunct reproduces its combined airway and cardiovascular receptor effects." },
  { name: "norepinephrine receptor spectrum", lesson: "direct-indirect-sympathomimetics", principle: "Strong alpha with beta-1 activity raises vascular tone while direct and reflex cardiac effects interact.", action: "Titrate in monitored shock care to perfusion targets after evaluating volume and cause.", assessment: "Track pressure, output when available, lactate, urine, mentation, skin, rhythm, and ischemia.", hazard: "A normal pressure can conceal inadequate flow or excessive vasoconstriction.", why: "Pressure is only one component of organ perfusion." },
  { name: "dopamine concentration-dependent effects", lesson: "direct-indirect-sympathomimetics", principle: "Dopaminergic and adrenergic receptor effects vary with concentration but do not divide into perfectly predictable dose zones.", action: "Select it only when its whole hemodynamic profile fits, not to produce presumed renal protection.", assessment: "Monitor rhythm, pressure, output, perfusion, and changing response during titration.", hazard: "Using low-dose dopamine for kidney protection lacks a reliable mechanistic or outcome basis.", why: "Patient variability and receptor overlap defeat a rigid dose-zone model." },
  { name: "dobutamine stereoisomeric action", lesson: "direct-indirect-sympathomimetics", principle: "A stereoisomeric mixture produces prominent beta-1 inotropy with additional alpha and beta-2 effects.", action: "Use for selected low-output states when increased contractility is needed and pressure can tolerate it.", assessment: "Track output, rhythm, pressure, ischemia, filling conditions, and end-organ perfusion.", hazard: "Vasodilation or tachyarrhythmia can worsen hypotension despite stronger contraction.", why: "Net effect reflects several receptor actions and baseline physiology." },
  { name: "indirect catecholamine release", lesson: "direct-indirect-sympathomimetics", principle: "Releasing agents depend on neuronal stores, transporters, and vesicular catecholamine handling.", action: "Audit stimulant, monoamine oxidase inhibitor, and tricyclic exposure before adding another sympathomimetic.", assessment: "Follow pressure, rhythm, temperature, agitation, ischemia, and repeated-dose response.", hazard: "Store depletion can cause tachyphylaxis while dose escalation adds toxicity.", why: "Indirect action requires an intact transmitter pool." },
  { name: "ephedrine mixed action", lesson: "direct-indirect-sympathomimetics", principle: "Ephedrine combines direct alpha and beta receptor agonism with norepinephrine release from sympathetic neurons.", action: "Use the exact labeled injection product for clinically important anesthesia-related hypotension and verify concentration and preparation.", assessment: "Monitor pressure, rhythm, repeated-dose response, interacting pressors, and evidence of tachyphylaxis.", hazard: "Repeated boluses can lose effect while continued escalation increases adrenergic toxicity.", why: "The indirect component depends on releasable transmitter stores while the direct component remains receptor mediated." },
  { name: "anaphylaxis treatment", lesson: "vasopressors-inotropes", principle: "Epinephrine simultaneously addresses vascular leak, airway edema, bronchospasm, and cardiovascular collapse.", action: "Administer the correct intramuscular product promptly and activate emergency follow-up.", assessment: "Reassess airway, breathing, circulation, skin, gastrointestinal symptoms, and recurrence.", hazard: "Incorrect concentration, route, delay, or device technique can cause treatment failure or harm.", why: "Anaphylaxis is time sensitive and requires the correct epinephrine product." },
  { name: "mean pressure and perfusion", lesson: "vasopressors-inotropes", principle: "Mean arterial pressure approximates cardiac output multiplied by systemic vascular resistance.", action: "Identify whether low pressure reflects low flow, low resistance, low volume, obstruction, or mixed physiology.", assessment: "Pair pressure with mentation, skin, urine, lactate trend, cardiac output, and cause-specific findings.", hazard: "Raising resistance in a pump-limited patient can reduce output and worsen perfusion.", why: "The same pressure can result from very different combinations of flow and resistance." },
  { name: "phenylephrine hemodynamics", lesson: "vasopressors-inotropes", principle: "Predominant alpha-1 agonism raises vascular tone with minimal direct beta stimulation.", action: "Use only when pure vasoconstriction fits the clinical setting and flow is adequate.", assessment: "Monitor pressure, heart rate, output or perfusion, afterload, and regional ischemia.", hazard: "Reflex bradycardia and increased afterload can lower cardiac output.", why: "A higher vascular resistance can trade flow for pressure." },
  { name: "pressor baroreflex response", lesson: "vasopressors-inotropes", principle: "A rapid pressure rise increases baroreceptor signaling and can produce reflex vagal slowing that opposes direct cardiac stimulation.", action: "Separate direct receptor action from reflex compensation when interpreting phenylephrine, norepinephrine, and other pressors.", assessment: "Track pressure, heart rate, rhythm, cardiac output, perfusion, baseline autonomic function, and concurrent rate-active medicines.", hazard: "Calling every heart-rate change a direct drug effect can misread the hemodynamic state and provoke inappropriate titration.", why: "The observed response is the sum of receptor pharmacology and an intact cardiovascular reflex loop." },
  { name: "vasopressor extravasation", lesson: "vasopressors-inotropes", principle: "Local alpha-mediated vasoconstriction can produce tissue ischemia after infusion leakage.", action: "Stop or relocate infusion by protocol, assess distal perfusion, and initiate drug-specific management promptly.", assessment: "Inspect access frequently for pain, blanching, swelling, coolness, capillary refill, and progression.", hazard: "Delayed recognition can convert reversible vasoconstriction into tissue necrosis.", why: "Exposure duration and concentration determine local injury." },
  { name: "albuterol rescue therapy", lesson: "beta2-agonist-therapy", principle: "A relatively selective inhaled beta-2 agonist relaxes airway smooth muscle in reversible bronchospasm.", action: "Use the exact device correctly and preserve the disease-specific anti-inflammatory plan.", assessment: "Track symptom relief, peak flow when appropriate, rescue frequency, technique, pulse, tremor, and potassium risk.", hazard: "Increasing rescue use can conceal worsening airway inflammation and delay urgent care.", why: "Bronchodilation treats constriction but not every driver of disease instability." },
  { name: "levalbuterol and racemic albuterol", lesson: "beta2-agonist-therapy", principle: "Levalbuterol is the R enantiomer, while albuterol commonly contains R and S enantiomers.", action: "Base selection on patient response, product, evidence, cost, and tolerability rather than stereochemical marketing alone.", assessment: "Compare equivalent clinical outcomes and adverse effects at appropriate doses.", hazard: "Assuming one enantiomer eliminates all beta-mediated cardiovascular effects is unsafe.", why: "Systemic effects depend on active exposure and patient susceptibility." },
  { name: "beta-2 hypokalemia", lesson: "beta2-agonist-therapy", principle: "Beta-2 activation can shift potassium into cells and lower serum concentration.", action: "Assess potassium risk during repeated high-dose therapy or when diuretics and arrhythmia risk coexist.", assessment: "Monitor potassium, rhythm, dose intensity, renal status, acid-base state, and clinical weakness.", hazard: "Treating redistribution as total-body potassium loss can lead to excessive replacement.", why: "Serum change may reflect transcellular movement rather than depleted stores." },
  { name: "paradoxical bronchospasm", lesson: "beta2-agonist-therapy", principle: "A product can rarely worsen bronchospasm immediately after inhalation.", action: "Stop the suspected product and provide alternative urgent bronchodilation according to the label.", assessment: "Relate timing to dose, device, excipients, technique, and objective airflow change.", hazard: "Repeatedly administering the same trigger can rapidly worsen obstruction.", why: "Immediate deterioration after dosing requires a product-related differential." },
  { name: "midodrine prodrug", lesson: "alpha-agonist-applications", principle: "Midodrine is converted to an active peripheral alpha-1 agonist that raises vascular tone.", action: "Use for selected symptomatic orthostatic hypotension with benefit tied to upright function.", assessment: "Track seated, standing, and supine pressure, symptoms, timing, heart rate, and urination.", hazard: "Dosing near recumbency can provoke clinically important supine hypertension.", why: "The desired upright effect persists when posture changes." },
  { name: "clonidine central alpha-2 action", lesson: "alpha-agonist-applications", principle: "Central alpha-2 activation reduces sympathetic outflow and can lower rate and pressure.", action: "Taper according to the current product plan when discontinuation is required.", assessment: "Monitor pressure, pulse, sedation, dry mouth, adherence, and interacting depressants.", hazard: "Abrupt withdrawal can cause rebound hypertension and sympathetic symptoms.", why: "Adaptive sympathetic regulation reverses abruptly when central inhibition stops." },
  { name: "dexmedetomidine monitoring", lesson: "alpha-agonist-applications", principle: "Central alpha-2 agonism supports sedation with a distinct respiratory profile but important hemodynamic effects.", action: "Use only in monitored settings with personnel able to manage airway and circulation.", assessment: "Track sedation depth, airway, ventilation, heart rate, pressure, and transient loading responses.", hazard: "Relative preservation of breathing does not eliminate apnea, obstruction, bradycardia, or hypotension risk.", why: "Sedation safety requires continuous patient-level monitoring." },
  { name: "topical alpha-agonist rebound", lesson: "alpha-agonist-applications", principle: "Repeated nasal vasoconstrictor use can produce rebound congestion after local adaptation.", action: "Limit duration according to the product and transition to cause-directed care.", assessment: "Review frequency, duration, local injury, systemic absorption, and alternative diagnoses.", hazard: "Escalating frequency can deepen the rebound cycle and cardiovascular exposure.", why: "Short-term vasoconstriction can lead to counter-regulatory congestion." },
  { name: "adrenergic myocardial oxygen demand", lesson: "adrenergic-agonist-safety", principle: "Rate, contractility, afterload, and wall stress can raise myocardial oxygen requirements.", action: "Use the lowest exposure that achieves perfusion while treating the underlying cause.", assessment: "Monitor rhythm, chest symptoms, electrocardiogram, perfusion, pressure, and output.", hazard: "A stronger pressure or output number can coincide with worsening ischemia.", why: "Hemodynamic benefit and myocardial cost must be balanced." },
  { name: "beta-2-associated lactate", lesson: "adrenergic-agonist-safety", principle: "Adrenergic metabolic stimulation can raise lactate during intensive beta-2 therapy.", action: "Interpret lactate with perfusion, ventilation, work of breathing, dose history, and trajectory.", assessment: "Distinguish improving airflow with persistent adrenergic lactate from worsening shock or fatigue.", hazard: "Responding to every lactate rise as hypoperfusion can trigger unnecessary escalation while beta-2 exposure continues.", why: "Lactate production has hemodynamic and nonhemodynamic causes." },
  { name: "sympathomimetic interaction audit", lesson: "adrenergic-agonist-safety", principle: "Monoamine oxidase inhibitors, tricyclics, stimulants, thyroid excess, cocaine, and other agonists can amplify adrenergic response.", action: "Reconstruct prescriptions, nonprescription decongestants, inhalers, supplements, and recreational exposures.", assessment: "Track timing, pressure, rhythm, temperature, agitation, ischemia, and withdrawal states.", hazard: "Treating each exposure in isolation can miss additive or mechanistically amplified toxicity.", why: "Adrenergic burden is a property of the whole regimen and patient." },
];

const dimensions = [
  ["principle", "Which principle best characterizes"],
  ["action", "Which clinical action best applies to"],
  ["assessment", "Which monitoring or assessment plan is most appropriate for"],
  ["hazard", "Which hazard is most important to prevent with"],
];

function distractors(index, field) {
  return [3, 8, 15].map((offset) => concepts[(index + offset) % concepts.length][field]);
}

export const adrenergicAgonistsQuestionBank = concepts.flatMap((concept, conceptIndex) =>
  dimensions.map(([field, prefix], dimensionIndex) => ({
    id: `adrenergic-agonists-${String(conceptIndex * 4 + dimensionIndex + 1).padStart(3, "0")}`,
    question: `${prefix} ${concept.name}?`,
    choices: [concept[field], ...distractors(conceptIndex, field)],
    answer: 0,
    rationale: concept.why,
    reviewHref: `#${concept.lesson}`,
  })),
);

// Preserve existing question identifiers and keys with case-specific beta-2 items.
const beta2ClinicalQuestions = [
  {
    "id": "adrenergic-agonists-069",
    "question": "An adult with asthma feels less wheezy after inhaled albuterol. Which mechanism best explains this response?",
    "choices": [
      "Beta-2 signaling raises cAMP and reduces airway smooth-muscle contraction",
      "Albuterol blocks beta-2 signaling to lower cAMP",
      "The dose establishes that airway inflammation has resolved",
      "Alpha-1 activation is the principal bronchodilator mechanism"
    ],
    "answer": 0,
    "rationale": "Beta-2 activation increases cAMP-related signaling and relaxes airway smooth muscle. Blocking that pathway is not the albuterol mechanism, and alpha-1 activation is not its principal airway target. Symptom relief demonstrates a bronchodilator response; it does not establish resolution of the inflammation or replace the asthma treatment plan.",
    "reviewHref": "#beta2-agonist-therapy"
  },
  {
    "id": "adrenergic-agonists-070",
    "question": "A patient changes from the referenced repackaged albuterol HFA aerosol to XOPENEX HFA. Which preparation plan is appropriate?",
    "choices": [
      "Teach the new product’s own priming instructions, supplied actuator, shaking, and cleaning",
      "Transfer the old product’s priming schedule because both drugs act at beta-2 receptors",
      "Place the new canister into the old actuator if it fits",
      "Use the HFA preparation instructions to dilute a nebulizer solution"
    ],
    "answer": 0,
    "rationale": "Device instructions are product-specific. The referenced albuterol aerosol uses three priming sprays before first use or after more than two weeks; XOPENEX HFA uses four before first use or after more than three days. Each requires its supplied actuator and its own cleaning instructions. A shared receptor does not make priming schedules or actuators interchangeable, and aerosol instructions do not specify nebulizer dilution.",
    "reviewHref": "#beta2-agonist-therapy"
  },
  {
    "id": "adrenergic-agonists-071",
    "question": "An adult uses albuterol for asthma and reports more rescue use this week. Which follow-up assessment is most useful?",
    "choices": [
      "Assess symptoms and airflow response, technique, adherence to the ICS plan, dose history, and relevant adverse-effect risks",
      "Count sprays without asking whether symptoms are changing",
      "Use temporary relief as proof that no anti-inflammatory assessment is needed",
      "Review heart rate alone and omit airway symptoms and delivery technique"
    ],
    "answer": 0,
    "rationale": "The clinical assessment must connect symptom and airflow response with rescue frequency, delivery, adherence, and exposure-related risks. A spray count alone lacks clinical context. Temporary bronchodilation does not establish inflammatory control, and heart rate alone cannot establish airway response or explain worsening symptoms. Increasing need merits prompt medical assessment rather than a routine refill alone.",
    "reviewHref": "#beta2-agonist-therapy"
  },
  {
    "id": "adrenergic-agonists-072",
    "question": "An adult with asthma asks to replace the ICS-containing treatment plan with albuterol alone because the inhaler acts quickly. What is the best response?",
    "choices": [
      "Preserve an appropriate ICS-containing plan; rapid bronchodilation does not replace control of airway inflammation",
      "Agree, because SABA relief prevents every serious exacerbation",
      "Substitute an unopposed LABA because it lasts longer",
      "Use any ICS-LABA combination as both maintenance and reliever without checking its ingredients"
    ],
    "answer": 0,
    "rationale": "GINA recommends ICS-containing treatment rather than SABA-only asthma treatment. Rapid relief does not eliminate serious exacerbation risk. LABA without ICS is inappropriate in asthma, and an ICS-LABA without formoterol cannot be used as MART. The reliever role belongs to a defined combination and regimen, not every long-acting inhaler.",
    "reviewHref": "#beta2-agonist-therapy"
  },
  {
    "id": "adrenergic-agonists-073",
    "question": "Which statement correctly distinguishes levalbuterol from racemic albuterol?",
    "choices": [
      "Levalbuterol is R-albuterol; racemic albuterol contains R and S enantiomers",
      "Levalbuterol is S-albuterol only",
      "Levalbuterol is an alpha-1 blocker rather than a beta-2 agonist",
      "The R-enantiomer identity guarantees absence of cardiovascular effects"
    ],
    "answer": 0,
    "rationale": "Levalbuterol contains the R enantiomer, while the racemate contains R and S. It remains a beta-2 bronchodilator, not an alpha-1 blocker. The stereochemical distinction does not establish that cardiovascular effects disappear: XOPENEX HFA retains cardiovascular warnings. Chemical composition and an individual clinical benefit or risk are different claims.",
    "reviewHref": "#beta2-agonist-therapy"
  },
  {
    "id": "adrenergic-agonists-074",
    "question": "A patient wants levalbuterol because it is advertised as a single enantiomer. What should guide the selection?",
    "choices": [
      "The actual product and prescribed dose, clinical response, adverse effects, access, cost, and relevant comparative evidence",
      "Single-enantiomer status alone, regardless of clinical response",
      "A universal dose conversion inferred solely from the R/S composition",
      "The assumption that levalbuterol has no potassium or cardiovascular warnings"
    ],
    "answer": 0,
    "rationale": "Selection needs patient-level response and product-specific dosing and evidence. Single-enantiomer status alone establishes neither universal superiority nor a universal conversion. XOPENEX HFA retains potassium and cardiovascular precautions, so its chemical identity cannot remove the need to assess tolerability and risk. Access and cost also matter to whether the prescribed treatment can be used.",
    "reviewHref": "#beta2-agonist-therapy"
  },
  {
    "id": "adrenergic-agonists-075",
    "question": "A clinician compares separate albuterol and levalbuterol label trial tables to decide which is universally safer. What is the most defensible assessment?",
    "choices": [
      "Evaluate appropriate comparative evidence and individual response; separate trial percentages do not establish universal superiority",
      "Treat a lower percentage in one unrelated trial as a head-to-head comparison",
      "Assume equal numbers of inhalations create equal active exposure across every formulation",
      "Judge safety only by whether the product has one enantiomer"
    ],
    "answer": 0,
    "rationale": "Both labels caution that adverse-event rates from trials conducted under different conditions cannot be directly compared. Evaluate an appropriately designed comparison and the individual’s response and adverse effects. Puff counts and formulation names do not establish universal dose equivalence, and stereochemistry alone does not prove universal clinical superiority or safety.",
    "reviewHref": "#beta2-agonist-therapy"
  },
  {
    "id": "adrenergic-agonists-076",
    "question": "A patient develops palpitations while using XOPENEX HFA. Which assumption must be avoided?",
    "choices": [
      "The R enantiomer eliminates all cardiovascular effects, so symptoms require no assessment",
      "Pulse, dose history, airway status, and other medicines should be assessed",
      "Cardiac disease can affect the consequences of beta-agonist exposure",
      "The XOPENEX HFA label retains cardiovascular precautions"
    ],
    "answer": 0,
    "rationale": "The unsafe assumption is that R-enantiomer identity makes cardiovascular symptoms irrelevant. XOPENEX HFA can cause clinically significant cardiovascular effects in some patients and retains relevant precautions. Assessing pulse, dose history, airway status, other exposures, and cardiac disease is appropriate. The other three statements support assessment rather than dismissing the symptom.",
    "reviewHref": "#beta2-agonist-therapy"
  },
  {
    "id": "adrenergic-agonists-077",
    "question": "Serum potassium falls during repeated albuterol treatment. Which interpretation best fits beta-2 physiology?",
    "choices": [
      "Intracellular redistribution can lower serum potassium without removing potassium from the body; losses may coexist",
      "The lower serum value proves the drug removed that amount of total-body potassium",
      "The shift excludes concurrent diuretic or gastrointestinal losses",
      "Beta-2 stimulation keeps potassium outside cells and necessarily raises its serum concentration"
    ],
    "answer": 0,
    "rationale": "Beta-2 activation can shift potassium into cells. Serum concentration is not a direct measurement of total-body stores, and redistribution is not elimination. The shift may coexist with renal or gastrointestinal losses; it does not rule them out. Keeping potassium extracellular and necessarily raising serum concentration describes the opposite direction from this beta-2 effect.",
    "reviewHref": "#beta2-agonist-therapy"
  },
  {
    "id": "adrenergic-agonists-078",
    "question": "A patient taking a thiazide receives repeated albuterol and has a history of arrhythmia. Which action best addresses potassium risk?",
    "choices": [
      "Assess exposure and potassium/rhythm risk, including possible diuretic losses, and monitor as clinically indicated",
      "Assume inhaled treatment cannot affect potassium or the heart",
      "Switch to levalbuterol and conclude potassium monitoring is unnecessary",
      "Treat every low value as a fixed total-body deficit without assessing kidney function"
    ],
    "answer": 0,
    "rationale": "Both aerosol labels warn that non-potassium-sparing diuretic-associated hypokalemia and ECG changes can be worsened by beta-agonists, particularly with excessive exposure, and advise considering potassium monitoring. Inhaled delivery and R-enantiomer selection do not eliminate risk. A serum decrease can reflect a shift plus losses; kidney function, clinical severity, and trends must inform treatment rather than a fixed deficit assumption.",
    "reviewHref": "#beta2-agonist-therapy"
  },
  {
    "id": "adrenergic-agonists-079",
    "question": "After intensive beta-2 treatment, a patient has low potassium, weakness, and impaired kidney function. Which assessment best informs safe care?",
    "choices": [
      "Reassess promptly using potassium trend, symptoms/rhythm, kidney function, magnesium, acid-base state, losses, and recent doses",
      "Classify the value as harmless because beta-2 shifts are always transient",
      "Use serum potassium alone to determine the entire body deficit",
      "Ignore concurrent diarrhea or diuretic exposure once albuterol is identified"
    ],
    "answer": 0,
    "rationale": "Weakness with low potassium needs prompt clinical assessment. The labels describe a usually transient decrease, not a guarantee that every episode is harmless. A serum value alone does not establish total stores; concurrent losses, magnesium, acid-base status, and kidney function affect interpretation and treatment. Identifying albuterol does not justify ignoring other contributors or impaired potassium clearance.",
    "reviewHref": "#beta2-agonist-therapy"
  },
  {
    "id": "adrenergic-agonists-080",
    "question": "A clinician plans large unmonitored potassium replacement for an isolated fall after repeated albuterol, without assessing losses or kidney function. What is the principal concern?",
    "choices": [
      "Redistribution may reverse, and unnecessary replacement can become hazardous, especially with impaired clearance",
      "A transcellular shift permanently removes potassium from the body",
      "Every beta-2-associated low value must be left untreated regardless of symptoms",
      "The low serum value guarantees that kidney clearance of potassium is normal"
    ],
    "answer": 0,
    "rationale": "A shift changes distribution rather than removing potassium. Reassess trends, clinical severity, losses, magnesium, and kidney function before determining replacement; reversal and impaired clearance can make excessive replacement hazardous. This does not justify withholding treatment for clinically significant hypokalemia. The low value also does not establish normal kidney clearance or a fixed total-body deficit.",
    "reviewHref": "#beta2-agonist-therapy"
  },
  {
    "id": "adrenergic-agonists-081",
    "question": "Wheezing and breathing difficulty worsen immediately after the first use of a new albuterol canister. Which interpretation requires urgent consideration?",
    "choices": [
      "Possible paradoxical bronchospasm from the administered product",
      "A response that proves bronchodilation succeeded",
      "An expected harmless effect that should be ignored",
      "Timing that conclusively proves a specific excipient is the cause"
    ],
    "answer": 0,
    "rationale": "The labels identify potentially life-threatening paradoxical bronchospasm, often with first use of a new canister. Immediate worsening is not evidence of successful bronchodilation and must not be dismissed. Assess the patient and product urgently. Timing supports a product-related differential but does not by itself identify the precise excipient or exclude other causes.",
    "reviewHref": "#beta2-agonist-therapy"
  },
  {
    "id": "adrenergic-agonists-082",
    "question": "Paradoxical bronchospasm occurs immediately after XOPENEX HFA inhalation. What action follows the label?",
    "choices": [
      "Discontinue the implicated product immediately and institute alternative treatment with urgent airway assessment",
      "Repeat the same suspected trigger until the patient becomes tolerant",
      "Replace urgent airway care with a future cleaning demonstration",
      "Continue the implicated product because a beta-2 agonist cannot worsen bronchospasm"
    ],
    "answer": 0,
    "rationale": "The label directs immediate discontinuation and alternative treatment because paradoxical bronchospasm can be life-threatening. Repeating the suspected trigger can worsen obstruction. Product technique should be assessed, but a later cleaning demonstration cannot replace urgent care. A beta-2 bronchodilator can paradoxically worsen bronchospasm despite its intended pharmacologic effect.",
    "reviewHref": "#beta2-agonist-therapy"
  },
  {
    "id": "adrenergic-agonists-083",
    "question": "During urgent assessment of wheezing immediately after inhalation, which information best helps characterize the event?",
    "choices": [
      "Exact product and device, administration timing, airflow and breathing changes, technique, and associated hypersensitivity findings",
      "Only the usual monthly refill count, without the event timeline",
      "A presumed excipient allergy recorded as certain before evaluation",
      "The drug’s receptor class used to exclude a product-related reaction"
    ],
    "answer": 0,
    "rationale": "Reconstruct the immediate event with the exact product, timing, delivery, objective or clinical airway response, and associated findings while providing needed care. A refill count alone cannot explain the event. An excipient mechanism is not established solely by timing, and the intended beta-2 action does not exclude paradoxical bronchospasm or hypersensitivity.",
    "reviewHref": "#beta2-agonist-therapy"
  },
  {
    "id": "adrenergic-agonists-084",
    "question": "Breathing worsens immediately with a new inhaler, and the patient repeats it because it is labeled a bronchodilator. Which hazard is most important to prevent?",
    "choices": [
      "Further exposure to the implicated product can worsen potentially life-threatening paradoxical bronchospasm",
      "Urgent alternative treatment should be delayed until the cause is proven",
      "A cleaning error is the only possible explanation and excludes a serious reaction",
      "R-enantiomer levalbuterol guarantees that the same event cannot recur with that product"
    ],
    "answer": 0,
    "rationale": "Stop the implicated product and obtain urgent assessment and alternative care when paradoxical bronchospasm occurs. Repeated exposure can worsen airway obstruction. Do not delay needed care for definitive causal proof or assume that technique is the only explanation. Levalbuterol also carries the paradoxical bronchospasm warning, so its enantiomer identity does not guarantee absence of the hazard.",
    "reviewHref": "#beta2-agonist-therapy"
  }
];
for (const revised of beta2ClinicalQuestions) {
  const existing = adrenergicAgonistsQuestionBank.find((question) => question.id === revised.id);
  if (!existing) throw new Error(`Missing beta-2 question: ${revised.id}`);
  Object.assign(existing, revised);
}
