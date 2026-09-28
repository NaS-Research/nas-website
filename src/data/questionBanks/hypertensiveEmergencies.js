const concepts = [
  { name: "nonpregnant hypertensive emergency definition", lesson: "triage-severe-pressure", principle: "In nonpregnant adults, hypertensive emergency is severe pressure with new or worsening acute target-organ injury.", action: "Stabilize and begin monitored condition-specific intravenous treatment while evaluating the injured organ.", assessment: "Repeat pressure correctly and assess neurologic, cardiac, aortic, renal, retinal, and pregnancy findings.", hazard: "Using the pressure number alone can misclassify severe asymptomatic hypertension as an emergency.", why: "Acute organ injury distinguishes emergency status in this nonpregnant context; pregnancy has a separate severe-pressure pathway." },
  { name: "severe hypertension without acute organ injury", lesson: "triage-severe-pressure", principle: "In nonpregnant adults, pressure above 180 over 120 without acute target-organ damage is not automatically an intravenous-treatment emergency.", action: "Confirm the reading, address contributors, and arrange timely oral initiation, reinstitution, or intensification with follow-up.", assessment: "Evaluate symptoms, examination, selective testing, medication exposure, pain, anxiety, substances, and follow-up access.", hazard: "Rapid intravenous reduction can cause hypotension and ischemia without improving outcomes.", why: "The 2025 guideline separates severe pressure from hypertensive emergency by organ injury." },
  { name: "repeat measurement in acute care", lesson: "triage-severe-pressure", principle: "Pain, agitation, position, cuff error, and acute illness can distort an acute-care reading.", action: "Repeat with correct cuff, support, and technique while addressing reversible stressors.", assessment: "Verify cuff size, posture, arm, device, repeated values, pain, bladder, medications, and clinical trajectory.", hazard: "Treating one biased value can produce an avoidable pressure overshoot.", why: "Reliable measurement remains necessary even when time matters." },
  { name: "acute target-organ injury screen", lesson: "triage-severe-pressure", principle: "The workup is driven by symptoms and signs of brain, heart, aorta, kidney, retina, or pregnancy injury.", action: "Choose immediate tests from the threatened organ rather than ordering a fixed panel without context.", assessment: "Use neurologic examination, ECG, troponin, creatinine, urine, imaging, fundus findings, and obstetric assessment as indicated.", hazard: "A normal symptom report alone can miss encephalopathy, retinal injury, or evolving kidney damage.", why: "Some dangerous organ injury is subtle or initially nonspecific." },
  { name: "autoregulation in chronic hypertension", lesson: "controlled-pressure-reduction", principle: "Chronic high pressure can shift tissue autoregulation so abrupt normalization reduces perfusion.", action: "Use a titratable condition-specific goal instead of immediately forcing a normal outpatient value.", assessment: "Track neurologic status, kidney function, urine output, cardiac ischemia, symptoms, and continuous pressure trend.", hazard: "Excessive early reduction can cause cerebral, coronary, or renal ischemia.", why: "Adapted vascular beds may require higher pressure to maintain flow." },
  { name: "general emergency reduction framework", lesson: "controlled-pressure-reduction", principle: "Many emergencies use a controlled partial reduction initially, but important syndromes have different targets.", action: "Start from the organ-specific protocol and use the general framework only when no exception applies.", assessment: "Identify aortic disease, stroke type, reperfusion eligibility, pregnancy, pulmonary edema, ischemia, and catecholamine state.", hazard: "A single universal percentage or target can be dangerous in aortic or neurologic disease.", why: "Pressure goals derive from the threatened organ and treatment pathway." },
  { name: "titrated intravenous therapy", lesson: "controlled-pressure-reduction", principle: "A short-acting adjustable infusion allows smooth control and rapid correction of overshoot.", action: "Select an agent by mechanism, onset, organ state, contraindications, and monitoring capability.", assessment: "Monitor pressure continuously or very frequently with heart rate, symptoms, perfusion, labs, and infusion response.", hazard: "Long unpredictable bolus effects create variability that can worsen organ injury.", why: "Titration links pressure response to moment-by-moment safety." },
  { name: "nicardipine or clevidipine pathway", lesson: "dihydropyridine-infusions", principle: "Titrated dihydropyridine infusions provide arterial vasodilation and are useful in several neurologic and general emergencies.", action: "Use under a condition-specific protocol with attention to tachycardia, heart failure context, and product formulation.", assessment: "Track pressure slope, heart rate, neurologic state, fluid or lipid considerations, and infusion-site care.", hazard: "Arterial vasodilation without anti-impulse control is not the first move in acute aortic syndrome.", why: "The desired mechanism differs when shear stress is the central threat." },
  { name: "clevidipine lipid-emulsion safety", lesson: "dihydropyridine-infusions", principle: "Clevidipine is a rapidly titratable arterial vasodilator formulated in a lipid emulsion with clinically important allergy, lipid-metabolism, handling, and caloric considerations.", action: "Screen for product contraindications, account for lipid exposure, use aseptic single-use handling, and select another infusion when the formulation is unsuitable.", assessment: "Review soybean, soy-product, egg, or egg-product allergy, defective lipid metabolism, current lipid intake, triglyceride context, infusion duration, pressure slope, and heart rate.", hazard: "Ignoring the formulation can expose a susceptible patient to a contraindicated product or excessive lipid burden.", why: "The vehicle is part of the medication and changes safe selection and administration." },
  { name: "sodium nitroprusside toxic-metabolite safety", lesson: "intravenous-drug-safety", principle: "Nitroprusside is a potent, rapidly titratable arterial and venous vasodilator whose metabolism can produce cyanide and thiocyanate.", action: "Use the lowest effective exposure with invasive or very frequent monitoring when indicated, and choose an alternative when toxicity risk outweighs benefit.", assessment: "Track dose, duration, acid-base status, mental status, oxygen use, kidney and liver function, and compatible cyanide or thiocyanate findings.", hazard: "High exposure or impaired clearance can cause life-threatening toxic-metabolite accumulation despite an acceptable pressure response.", why: "A favorable cuff value does not exclude cellular toxicity from nitroprusside metabolites." },
  { name: "fenoldopam selection and monitoring", lesson: "intravenous-drug-safety", principle: "Fenoldopam is a dopamine-1 receptor agonist vasodilator that can cause dose-related tachycardia and increase intraocular pressure and contains sulfite.", action: "Reserve it for a fitting monitored pathway after reviewing ocular pressure, sulfite sensitivity, airway history, and heart-rate tolerance.", assessment: "Monitor pressure, heart rate, symptoms, intraocular-pressure risk, asthma or sulfite history, and infusion response.", hazard: "Using fenoldopam without recognizing glaucoma, ocular hypertension, or sulfite susceptibility can create avoidable harm.", why: "Its receptor mechanism and formulation produce selection issues that differ from dihydropyridine infusions." },
  { name: "labetalol pathway", lesson: "intravenous-drug-safety", principle: "Combined alpha and beta blockade can reduce pressure and heart rate in selected acute settings.", action: "Use when airway, conduction, bradycardia, shock, and acute heart failure status permit.", assessment: "Monitor pressure, pulse, ECG, bronchospasm, cardiac output, and cumulative dose.", hazard: "Beta blockade can worsen bronchospasm, conduction disease, bradycardia, or decompensated failure.", why: "Labetalol changes both vascular resistance and cardiac adrenergic drive." },
  { name: "acute ischemic stroke pressure strategy", lesson: "neurologic-emergencies", principle: "Pressure management depends on reperfusion eligibility and updated stroke protocol, and intensive lowering can harm perfusion.", action: "Activate the stroke pathway and meet the current treatment-specific threshold without delaying reperfusion evaluation.", assessment: "Record last known well, imaging, neurologic deficit, reperfusion plan, pressure trend, glucose, anticoagulants, and perfusion concerns.", hazard: "Routine aggressive lowering can reduce blood flow to ischemic penumbra.", why: "Ischemic tissue may depend on systemic pressure until reperfusion is restored." },
  { name: "intracerebral hemorrhage pressure control", lesson: "neurologic-emergencies", principle: "For selected mild to moderate spontaneous ICH with presenting systolic 150 to 220, smooth control toward 140 and maintenance around 130 to 150 may be reasonable.", action: "Use a smooth titrated protocol while coordinating neurocritical care and hemorrhage management.", assessment: "Monitor neurologic status, imaging, pressure variability, kidney function, intracranial pressure, and cerebral perfusion.", hazard: "Acute systolic reduction below 130 in this selected group can be harmful.", why: "ICH care balances hematoma risk against cerebral and systemic perfusion." },
  { name: "hypertensive encephalopathy", lesson: "neurologic-emergencies", principle: "Severe pressure can overwhelm cerebral autoregulation and produce headache, confusion, seizures, visual symptoms, and vasogenic edema.", action: "Treat as a neurologic emergency while excluding hemorrhage, ischemia, toxic-metabolic causes, and other seizure etiologies.", assessment: "Use serial examination, brain imaging, seizure assessment, pressure trend, renal data, pregnancy context, and exposure history.", hazard: "Assuming every altered patient with high pressure has encephalopathy can delay diagnosis of stroke or intoxication.", why: "Hypertensive encephalopathy is a clinicoradiologic diagnosis of exclusion." },
  { name: "posterior reversible encephalopathy syndrome", lesson: "neurologic-emergencies", principle: "PRES is a vasogenic edema syndrome associated with pressure, renal disease, pregnancy, autoimmune disease, and selected drugs.", action: "Control the driver and pressure, treat seizures, and remove offending therapy when appropriate.", assessment: "Review MRI pattern, visual symptoms, seizures, kidney function, pregnancy, immunosuppressants, cytotoxic agents, and alternative diagnoses.", hazard: "The word reversible can create false reassurance because infarction or hemorrhage may occur.", why: "PRES requires evaluation of its precipitant and neurologic complications; its name does not guarantee recovery." },
  { name: "acute aortic syndrome anti-impulse therapy", lesson: "cardiovascular-emergencies", principle: "Aortic wall stress depends on both pressure and the force and rate of ventricular ejection.", action: "Begin rapid beta blockade when not contraindicated, then add vasodilation if pressure remains above the aortic protocol target.", assessment: "Track heart rate, systolic pressure, pain, perfusion, pulse deficits, aortic imaging, valve findings, and shock.", hazard: "Starting a pure vasodilator before controlling heart rate can increase reflex shear stress.", why: "Anti-impulse therapy reduces the mechanical force propagating aortic injury." },
  { name: "acute pulmonary edema with severe hypertension", lesson: "cardiovascular-emergencies", principle: "Marked afterload can cause rapid fluid redistribution and respiratory failure even without large total-body fluid gain.", action: "Provide respiratory support and rapid titratable vasodilation, with diuresis when congestion and kidney response support it.", assessment: "Monitor oxygenation, work of breathing, pressure, ECG, troponin, congestion, kidney function, urine output, and precipitant.", hazard: "Treating only with slow diuresis can leave life-threatening afterload uncorrected.", why: "Pressure reduction can rapidly improve forward flow and pulmonary capillary pressure." },
  { name: "acute coronary syndrome with severe hypertension", lesson: "cardiovascular-emergencies", principle: "Treatment must reduce myocardial demand without compromising coronary perfusion or causing reflex tachycardia.", action: "Use the acute coronary pathway and select pressure therapy according to ischemia, heart rate, ventricular function, and contraindications.", assessment: "Track ECG, troponin, pain, pressure, heart rate, oxygenation, ventricular function, and medication contraindications.", hazard: "Excessive diastolic reduction can impair coronary perfusion.", why: "The hypertensive value is only one part of myocardial oxygen balance." },
  { name: "nitroglycerin in cardiovascular emergencies", lesson: "cardiovascular-emergencies", principle: "Titrated nitrate therapy reduces preload and, at higher exposure, afterload in selected ischemic or pulmonary-edema states.", action: "Use when the cardiovascular phenotype fits and phosphodiesterase-5 inhibitor or severe preload dependence does not prohibit it.", assessment: "Review pressure, pain, congestion, PDE5 exposure, right ventricular context, headache, and infusion response.", hazard: "A nitrate plus recent PDE5 inhibition can cause profound hypotension.", why: "Both therapies amplify cyclic GMP-mediated vasodilation." },
  { name: "pregnancy severe hypertension", lesson: "special-populations", principle: "Persistent systolic at least 160 or diastolic at least 110 in pregnancy or postpartum requires urgent obstetric treatment.", action: "Activate an obstetric protocol using recommended labetalol, hydralazine, or immediate-release oral nifedipine pathways as appropriate.", assessment: "Confirm persistence, gestational or postpartum timing, symptoms, platelets, liver, kidney, urine protein, fetal status, and contraindications.", hazard: "Delayed treatment increases maternal stroke and other severe morbidity risk.", why: "Pregnancy uses distinct thresholds, medicines, and maternal-fetal monitoring." },
  { name: "magnesium sulfate in preeclampsia or eclampsia", lesson: "special-populations", principle: "Magnesium sulfate prevents or treats eclamptic seizures but is not the primary blood pressure-lowering drug.", action: "Use under obstetric protocol with simultaneous urgent pressure treatment when severe hypertension is present.", assessment: "Monitor reflexes, respiration, urine output, kidney function, mental status, seizure activity, and calcium availability for toxicity response.", hazard: "Renal impairment can cause magnesium accumulation and respiratory toxicity.", why: "Magnesium elimination depends on kidney function and its therapeutic purpose is seizure control." },
  { name: "pheochromocytoma alpha-before-beta sequencing", lesson: "special-populations", principle: "In pheochromocytoma crisis, beta blockade before adequate alpha control can worsen vasoconstriction; this sequence must not be generalized to acute cocaine poisoning.", action: "In pheochromocytoma crisis, control alpha vasoconstriction before adding beta control when needed. In acute cocaine-induced coronary vasospasm or hypertensive emergency, use a vasodilator strategy; AHA does not recommend beta blockers.", assessment: "Review exposure, temperature, agitation, ischemia, volume, rhythm, glucose, CK, kidney function, and suspected tumor context.", hazard: "Unopposed alpha stimulation can intensify pressure and ischemia.", why: "Blocking beta-mediated vasodilation leaves alpha vasoconstriction dominant." },
  { name: "phentolamine in catecholamine-driven crisis", lesson: "special-populations", principle: "Phentolamine provides short-duration nonselective alpha blockade for selected catecholamine-driven hypertensive episodes.", action: "Use within a monitored crisis-specific pathway while treating the tumor, exposure, hyperthermia, agitation, ischemia, dysrhythmia, and volume state as applicable.", assessment: "Track pressure, heart rate, ECG, ischemia, temperature, neurologic status, volume, suspected trigger, and coronary disease history.", hazard: "Alpha blockade can produce marked hypotension and tachycardia, and phentolamine is contraindicated in important coronary ischemic contexts described in its labeling.", why: "Short-acting alpha blockade treats vasoconstriction but does not replace full toxidrome and organ-injury management." },
  { name: "acute kidney injury during hypertensive emergency", lesson: "special-populations", principle: "Kidney injury may be target-organ damage, a contributor, or a consequence of excessive pressure reduction.", action: "Treat the emergency while trending perfusion, urine, electrolytes, hemolysis clues, nephrotoxins, and baseline renal status.", assessment: "Compare creatinine with baseline, urine output and sediment, albuminuria, potassium, hemolysis data, volume, imaging clues, and treatment slope.", hazard: "Assuming every creatinine rise demands abrupt cessation of control can allow ongoing vascular injury.", why: "The renal trend must be interpreted within pressure, perfusion, and disease mechanism." },
  { name: "intravenous to oral transition", lesson: "monitoring-and-transition", principle: "Transition requires stable organ trajectory and an oral regimen that can maintain control after the infusion ends.", action: "Coordinate oral onset and infusion offset using product-specific transition instructions, then observe the response.", assessment: "Review infusion requirement, oral onset and duration, pressure trend, symptoms, kidney and electrolyte status, access, and swallowing.", hazard: "Stopping a short-acting infusion before oral effect can cause rebound severe pressure.", why: "Transition timing depends on the selected drugs and their onset and offset; overlap is not a universal fixed rule." },
  { name: "pressure variability during emergency care", lesson: "monitoring-and-transition", principle: "An acceptable average can conceal large pressure swings; assess the trend and organ response.", action: "Use predictable titration, reliable monitoring, and prompt correction of overshoot rather than repeated reactive boluses.", assessment: "Track beat-to-beat or frequent pressure, infusion changes, symptoms, organ signs, measurement site, and nursing workflow.", hazard: "Oscillation between under- and overtreatment can repeatedly cross perfusion limits.", why: "Avoid peaks and overshoot while following the condition-specific target; an average alone is insufficient." },
  { name: "cause and access reconciliation before discharge", lesson: "monitoring-and-transition", principle: "Emergency stabilization does not correct the medication, access, substance, or secondary cause that produced the event.", action: "Complete an executable regimen, education, access, follow-up, and pending-workup plan before discharge.", assessment: "Review active ingredients, prior use, cost, pharmacy, home cuff, substances, secondary clues, labs, pregnancy context, and responsible clinician.", hazard: "A technically correct prescription that cannot be obtained or understood invites recurrence.", why: "Longitudinal control depends on the care system after the infusion stops." },
  { name: "documented emergency handoff", lesson: "monitoring-and-transition", principle: "The next team needs the organ diagnosis, pressure course, agent response, adverse effects, and explicit near-term target.", action: "Handoff the target, measurement method, current drugs, last infusion change, labs, imaging, warning signs, and follow-up owner.", assessment: "Confirm closed-loop receipt by inpatient, outpatient, pharmacy, obstetric, neurologic, cardiac, or surgical teams as applicable.", hazard: "Ambiguous ownership can lead to duplicate therapy, missed monitoring, or loss to follow-up.", why: "Transition safety depends on precise shared information." },
];

const dimensions = [["principle", "Which principle best characterizes"], ["action", "Which clinical action best applies to"], ["assessment", "Which monitoring or assessment plan is most appropriate for"], ["hazard", "Which hazard is most important to prevent with"]];
function distractors(index, field) { return [3, 10, 17].map((offset) => concepts[(index + offset) % concepts.length][field]); }
const generated = concepts.flatMap((concept, conceptIndex) => dimensions.map(([field, prefix], dimensionIndex) => ({ id: `hypertensive-emergencies-${String(conceptIndex * 4 + dimensionIndex + 1).padStart(3, "0")}`, question: `${prefix} ${concept.name}?`, choices: [concept[field], ...distractors(conceptIndex, field)], answer: 0, rationale: concept.why, reviewHref: `#${concept.lesson}` })));

const triageReplacements = [
  {
    "id": "hypertensive-emergencies-001",
    "question": "In a nonpregnant adult with severe hypertension, which finding most clearly establishes a hypertensive emergency?",
    "choices": [
      "New acute target-organ injury attributable to the pressure-related syndrome",
      "A remote diagnosis of uncomplicated hypertension",
      "Use of two maintenance antihypertensives",
      "A single high reading with a cuff that is too small"
    ],
    "answer": 0,
    "rationale": "Acute injury distinguishes a nonpregnant hypertensive emergency from severe pressure alone. Medication count, history and an unreliable single measurement do not establish acute injury.",
    "reviewHref": "#triage-severe-pressure"
  },
  {
    "id": "hypertensive-emergencies-002",
    "question": "A nonpregnant patient has severe hypertension and acute pulmonary edema. Which general care approach is appropriate?",
    "choices": [
      "Routine follow-up without acute evaluation",
      "Monitored emergency treatment directed at the injured organ while evaluating the cause",
      "Immediate normalization to the lowest possible pressure regardless of perfusion",
      "Withhold treatment until every secondary-cause test is complete"
    ],
    "answer": 1,
    "rationale": "Acute pulmonary edema is target-organ injury requiring emergency care. Treatment and evaluation proceed together with a condition-specific strategy; indiscriminate normalization risks hypoperfusion.",
    "reviewHref": "#triage-severe-pressure"
  },
  {
    "id": "hypertensive-emergencies-003",
    "question": "A very high pressure is measured using a cuff that appears too small in a patient with concerning neurologic symptoms. What is the best next step?",
    "choices": [
      "Dismiss the symptoms because the cuff may be inaccurate",
      "Wait several hours before reassessment",
      "Repeat with correct technique while urgently evaluating and stabilizing the patient",
      "Choose an infusion solely from the first number without assessment"
    ],
    "answer": 2,
    "rationale": "Measurement should be reliable, but correcting technique must not delay evaluation or stabilization when acute organ injury is possible.",
    "reviewHref": "#triage-severe-pressure"
  },
  {
    "id": "hypertensive-emergencies-004",
    "question": "At 30 weeks of pregnancy, blood pressure remains 168/96 mm Hg over 15 minutes. There are no reported symptoms or additional laboratory abnormalities. What is the appropriate response?",
    "choices": [
      "Wait until diastolic pressure also reaches 110",
      "Wait for proteinuria before treatment",
      "Apply the nonpregnant severe-pressure pathway and arrange routine follow-up",
      "Activate urgent obstetric antihypertensive treatment without waiting for additional organ injury"
    ],
    "answer": 3,
    "rationale": "Persistent systolic pressure at least 160 OR diastolic pressure at least 110 in pregnancy requires urgent treatment. Either threshold is sufficient; additional symptoms, proteinuria or laboratory injury are not prerequisites.",
    "reviewHref": "#triage-severe-pressure"
  }
];
triageReplacements.push({
  "id": "hypertensive-emergencies-022",
  "question": "For an adult on the general emergency pathway, systolic pressure starts at 240 mm Hg. What pressure represents a 25% reduction?",
  "choices": [
    "120 mm Hg",
    "150 mm Hg",
    "180 mm Hg",
    "200 mm Hg"
  ],
  "answer": 2,
  "rationale": "240 × 0.75 = 180. This is the first-hour reduction limit, not a mandatory endpoint; reassess perfusion and use a condition-specific pathway when indicated.",
  "reviewHref": "#controlled-pressure-reduction"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-046",
  "question": "A labetalol order specifies IV administration over two minutes. Does that instruction authorize repeating it every two minutes?",
  "choices": [
    "Yes, administration time defines the repeat interval",
    "Yes, until pressure normalizes",
    "No; delivery time and repeat-dose interval are separate instructions",
    "Yes, regardless of pulse"
  ],
  "answer": 2,
  "rationale": "The cited label separates two-minute delivery from ten-minute repeat intervals. Reassess before further dosing.",
  "reviewHref": "#intravenous-drug-safety"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-031",
  "question": "A nicardipine order is 7.5 mg/hour using 0.2 mg/mL premix. What pump rate delivers the prescribed dose?",
  "choices": [
    "15 mL/hour",
    "37.5 mL/hour",
    "75 mL/hour",
    "150 mL/hour"
  ],
  "answer": 1,
  "rationale": "Divide dose rate by concentration: 7.5 ÷ 0.2 = 37.5 mL/hour. Recheck the concentration when changing bags.",
  "reviewHref": "#dihydropyridine-infusions"
});
triageReplacements.push({
  id: "hypertensive-emergencies-036",
  question: "After prolonged clevidipine infusion, a patient has not transitioned to another antihypertensive. What minimum rebound-monitoring period does the label specify after stopping?",
  choices: ["No monitoring", "30 minutes", "Two hours", "At least eight hours"],
  answer: 3,
  rationale: "The label specifies at least eight hours in this situation; reassess whether ongoing antihypertensive treatment is needed.",
  reviewHref: "#dihydropyridine-infusions"
});
triageReplacements.push({
  id: "hypertensive-emergencies-040",
  question: "During nitroprusside treatment, life-threatening cyanide poisoning is suspected. Which agent does AHA recommend as the primary antidote?",
  choices: ["Cyanocobalamin supplementation", "Hydroxocobalamin", "Oral folic acid", "Vitamin K"],
  answer: 1,
  rationale: "Hydroxocobalamin is the recommended cyanide antidote. Stop the causative infusion and initiate resuscitation and toxicology care; cyanocobalamin is not interchangeable with hydroxocobalamin.",
  reviewHref: "#intravenous-drug-safety"
});
triageReplacements.push({
  id: "hypertensive-emergencies-043",
  question: "An adult receiving fenoldopam develops a falling serum potassium concentration. Which interpretation is appropriate?",
  choices: ["This excludes a medication effect", "Fenoldopam can cause hypokalemia; monitor and address the electrolyte change", "Potassium monitoring is unnecessary during short infusions", "Automatically add a beta blocker to prevent hypokalemia"],
  answer: 1,
  rationale: "Hypokalemia is a labeled fenoldopam precaution. Beta blockers do not correct it and concurrent use may worsen hypotension.",
  reviewHref: "#intravenous-drug-safety"
});
triageReplacements.push({
  id: "hypertensive-emergencies-065",
  question: "Which acute aortic syndrome target preserves the guideline's perfusion qualification?",
  choices: ["Systolic below 120 regardless of organ function", "Systolic below 120 or the lowest pressure maintaining organ perfusion, with heart rate 60 to 80", "Routine systolic normalization without rate control", "Systolic below 90 in every patient"],
  answer: 1,
  rationale: "The target is constrained by organ perfusion. Monitor both pressure and heart rate while arranging definitive aortic care.",
  reviewHref: "#cardiovascular-emergencies"
});
triageReplacements.push({
  id: "hypertensive-emergencies-054",
  question: "A patient with large spontaneous ICH requires surgical decompression. How should the mild-to-moderate ICH pressure target be applied?",
  choices: ["Automatically use the same intensive target", "Lower systolic below 130 immediately", "Individualize with neurocritical care because intensive-lowering safety and efficacy are not well established", "Stop all pressure monitoring"],
  answer: 2,
  rationale: "Large or severe ICH and surgical decompression lie outside the population supporting the routine mild-to-moderate target.",
  reviewHref: "#neurologic-emergencies"
});
triageReplacements.push({
  id: "hypertensive-emergencies-055",
  question: "During titration for spontaneous ICH, the average systolic pressure appears acceptable but readings repeatedly swing above and below the chosen range. What should the team address?",
  choices: ["Ignore variability if the average is acceptable", "Increase the size of each dose adjustment", "Wait for the next day's average before reassessing", "Verify the measurements and adjust treatment for smoother sustained control"],
  answer: 3,
  rationale: "The pressure trajectory matters: peaks and large fluctuations can undermine the intended control. Verify the signal and titrate carefully rather than judging success from an average alone.",
  reviewHref: "#neurologic-emergencies"
});
triageReplacements.push({
  id: "hypertensive-emergencies-056",
  question: "A patient with mild-to-moderate spontaneous ICH presents with systolic pressure 180 mm Hg. Which proposed acute target is potentially harmful?",
  choices: ["A target of 140 with maintenance 130 to 150", "A target below 130", "Smooth control with serial reassessment", "A target that is reassessed if organ perfusion deteriorates"],
  answer: 1,
  rationale: "For this population, acute lowering below 130 mm Hg is potentially harmful. The guideline supports a target of 140 and maintenance 130 to 150, with continued clinical assessment.",
  reviewHref: "#neurologic-emergencies"
});
triageReplacements.push({
  id: "hypertensive-emergencies-050",
  question: "An otherwise eligible IV thrombolysis candidate has pressure 188/106 mm Hg. Which pressure requirement remains unmet?",
  choices: ["Neither; diastolic below 110 is sufficient", "Systolic must be below 185 before IV thrombolysis", "Systolic must be below 140", "Diastolic must be below 80"],
  answer: 1,
  rationale: "Both pretreatment limits apply: systolic below 185 and diastolic below 110. Meeting only one is insufficient.",
  reviewHref: "#neurologic-emergencies"
});
triageReplacements.push({
  id: "hypertensive-emergencies-051",
  question: "A patient with ischemic stroke has pressure 190/100, no reperfusion treatment and no other urgent indication for pressure lowering. What does evidence support about routine initiation during the first 48 to 72 hours?",
  choices: ["Established reduction in death", "Established reduction in dependency", "No demonstrated prevention of death or dependency", "Mandatory immediate normalization"],
  answer: 2,
  rationale: "This is the guideline's below 220/120 nonreperfusion population without a competing indication.",
  reviewHref: "#neurologic-emergencies"
});
triageReplacements.push({
  id: "hypertensive-emergencies-079",
  question: "A nitroglycerin infusion changes from PVC to low-absorbing tubing. What requires reassessment?",
  choices: ["Only bag color", "Only patient weight", "Delivered dose and hemodynamic response", "Nothing if the pump setting is unchanged"],
  answer: 2,
  rationale: "Less drug loss can increase delivery at the same pump setting; reassess titration and monitoring.",
  reviewHref: "#cardiovascular-emergencies"
});
triageReplacements.push({
  id: "hypertensive-emergencies-077",
  question: "Which effect explains why nitroglycerin can lower elevated cardiac filling pressure?",
  choices: ["Increased venous return", "Venodilation that reduces preload", "Direct removal of sodium through the kidney", "Complete blockade of cardiac beta receptors"],
  answer: 1,
  rationale: "Venodilation reduces venous return and ventricular filling pressure. This differs from diuresis or beta blockade.",
  reviewHref: "#cardiovascular-emergencies"
});
triageReplacements.push({
  id: "hypertensive-emergencies-078",
  question: "A patient has pericardial tamponade and elevated pressure. Which finding rules out IV nitroglycerin under its labeling?",
  choices: ["The elevated pressure itself", "The presence of an IV line", "A need for ECG monitoring", "Tamponade with cardiac output dependent on venous return"],
  answer: 3,
  rationale: "The label contraindicates IV nitroglycerin in tamponade: reducing preload can compromise cardiac output. Treat the underlying emergency.",
  reviewHref: "#cardiovascular-emergencies"
});
triageReplacements.push({
  id: "hypertensive-emergencies-008",
  question: "A nonpregnant inpatient has an elevated reading during pain, without evidence of new organ injury. Which initial response best fits the AHA acute-care statement?",
  choices: ["Give an IV rescue drug solely for the number", "Repeat with proper technique and address contributing conditions", "Ignore all subsequent readings", "Assume an emergency without examining the patient"],
  answer: 1,
  rationale: "The statement emphasizes reliable repeat measurement and treatment of contributors in asymptomatic inpatient elevation. New organ injury would change the pathway.",
  reviewHref: "#triage-severe-pressure"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-005",
  "question": "A nonpregnant adult has repeated pressure 192/126 mm Hg. Evaluation finds no acute organ injury. What determines whether this is a hypertensive emergency?",
  "choices": [
    "The pressure alone",
    "New or worsening acute target-organ injury",
    "The number of home medications",
    "The duration of hypertension"
  ],
  "answer": 1,
  "rationale": "The high number requires timely care, but acute injury distinguishes this emergency pathway.",
  "reviewHref": "#triage-severe-pressure"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-006",
  "question": "A nonpregnant adult has confirmed severe hypertension without acute organ injury. Which treatment plan follows the 2025 guideline?",
  "choices": [
    "Routine IV infusion for every reading above 180/120",
    "Delay care until symptoms develop",
    "Timely oral treatment initiation, resumption or intensification with follow-up",
    "Immediate normalization regardless of perfusion"
  ],
  "answer": 2,
  "rationale": "The guideline supports outpatient oral management after evaluation excludes acute injury.",
  "reviewHref": "#triage-severe-pressure"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-007",
  "question": "A patient cannot afford the prescribed oral regimen after evaluation excludes a hypertensive emergency. What must the plan address?",
  "choices": [
    "An affordable obtainable regimen and follow-up",
    "Only the medication name",
    "Only the highest recorded pressure",
    "A promise to avoid future appointments"
  ],
  "answer": 0,
  "rationale": "Medication access is part of effective treatment; a prescription alone does not resolve an access barrier.",
  "reviewHref": "#triage-severe-pressure"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-009",
  "question": "An inpatient pressure is elevated during agitation. What does this single value establish?",
  "choices": [
    "Definite acute organ injury",
    "No need for further assessment",
    "A permanent outpatient baseline",
    "A finding requiring reliable reassessment and clinical context"
  ],
  "answer": 3,
  "rationale": "Agitation and measurement conditions can affect readings; repeat correctly and evaluate the patient.",
  "reviewHref": "#triage-severe-pressure"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-010",
  "question": "An inpatient initially had asymptomatic elevated pressure but now develops chest pain and dyspnea. What changes?",
  "choices": [
    "The earlier assessment excludes any later emergency",
    "Urgently reassess for new acute organ injury",
    "Wait for routine outpatient follow-up",
    "Assume anxiety without further evaluation"
  ],
  "answer": 1,
  "rationale": "New symptoms require renewed evaluation. A previous absence of acute injury is not a permanent classification.",
  "reviewHref": "#triage-severe-pressure"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-011",
  "question": "An asymptomatic inpatient has elevated pressure and no dependable outpatient clinician. Which gap needs attention before transition?",
  "choices": [
    "Routine coronary angiography",
    "An arterial line for home use",
    "Reliable follow-up and access to ongoing care",
    "Proof that every secondary cause is excluded"
  ],
  "answer": 2,
  "rationale": "Continuity and access are central to sustained management. The absence of acute injury does not remove the need for follow-up.",
  "reviewHref": "#triage-severe-pressure"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-090",
  "question": "An adult has acute cocaine-induced coronary vasospasm and a hypertensive emergency. Which approach matches AHA 2025 guidance?",
  "choices": [
    "Automatically use a beta blocker after any alpha blocker",
    "Consider a suitable vasodilator while treating the poisoning",
    "Use beta blockade as the preferred vasospasm treatment",
    "Treat pressure without addressing agitation or temperature"
  ],
  "answer": 1,
  "rationale": "AHA considers vasodilators reasonable and does not recommend beta-adrenergic antagonists in this acute setting. This differs from the pheochromocytoma sequencing rule.",
  "reviewHref": "#special-populations"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-096",
  "question": "Which history is an explicit contraindication in the phentolamine injection label?",
  "choices": [
    "Remote myocardial infarction",
    "Remote uncomplicated appendectomy",
    "Corrected vitamin D deficiency",
    "Seasonal allergic rhinitis without drug hypersensitivity"
  ],
  "answer": 0,
  "rationale": "The coronary exclusions include a history of myocardial infarction; screen before choosing phentolamine.",
  "reviewHref": "#special-populations"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-027",
  "question": "A patient received sacubitril/valsartan 12 hours ago. Does switching to IV enalaprilat avoid the ACE-inhibitor washout requirement?",
  "choices": [
    "Yes, because IV therapy bypasses absorption",
    "Yes, if the systolic pressure is high",
    "No; at least 36 hours is required between these therapies",
    "Yes, if the first dose is halved"
  ],
  "answer": 2,
  "rationale": "Enalaprilat is an ACE inhibitor. The interaction depends on the pharmacology, not the route; another appropriate treatment is needed before the washout is complete.",
  "reviewHref": "#intravenous-drug-safety"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-045",
  "question": "A 1 mg/mL labetalol premix is ordered at 2 mg/minute. Which pump setting matches?",
  "choices": [
    "2 mL/hour",
    "12 mL/hour",
    "120 mL/hour",
    "600 mL/hour"
  ],
  "answer": 2,
  "rationale": "Convert minutes to hours: 2 × 60 ÷ 1 = 120 mL/hour.",
  "reviewHref": "#intravenous-drug-safety"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-047",
  "question": "Before first ambulation after IV labetalol, what should be checked?",
  "choices": [
    "Upright tolerance with observation",
    "Only the supine reading",
    "Only the infusion volume",
    "No assessment is needed"
  ],
  "answer": 0,
  "rationale": "Postural hypotension can persist after dosing.",
  "reviewHref": "#intravenous-drug-safety"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-048",
  "question": "Which history excludes IV labetalol under the cited label?",
  "choices": [
    "First-degree block alone",
    "Bronchial asthma",
    "A remote ankle fracture",
    "Corrected iron deficiency"
  ],
  "answer": 1,
  "rationale": "Beta blockade can provoke bronchospasm; asthma is a contraindication.",
  "reviewHref": "#intravenous-drug-safety"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-030",
  "question": "Nicardipine causes unacceptable hypotension. Which response follows its label?",
  "choices": [
    "Continue unchanged",
    "Double the rate",
    "Stop, stabilize, then reassess a lower-rate restart",
    "Add another vasodilator"
  ],
  "answer": 2,
  "rationale": "Stop for intolerance. Restarting at 3 to 5 mg/hour is considered after stabilization.",
  "reviewHref": "#dihydropyridine-infusions"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-032",
  "question": "Which access plan fits the cited nicardipine premix?",
  "choices": [
    "Small wrist vein with a shared medication line",
    "Large peripheral vein, separate line, site change every 12 hours",
    "Intra-arterial administration",
    "Intramuscular injection"
  ],
  "answer": 1,
  "rationale": "Use central access or a large peripheral vein; follow the product-specific line instructions.",
  "reviewHref": "#dihydropyridine-infusions"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-033",
  "question": "Which condition contraindicates clevidipine?",
  "choices": [
    "Severe aortic stenosis",
    "Remote appendectomy",
    "Corrected vitamin deficiency",
    "Prior ankle sprain"
  ],
  "answer": 0,
  "rationale": "Severe aortic stenosis is a labeled exclusion.",
  "reviewHref": "#dihydropyridine-infusions"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-034",
  "question": "A clevidipine vial was punctured at 07:00. When must unused emulsion be discarded?",
  "choices": [
    "At midnight",
    "After the vial empties",
    "At 07:00 the next day",
    "By 19:00 the same day"
  ],
  "answer": 3,
  "rationale": "The 12-hour handling limit starts at puncture, not at infusion completion.",
  "reviewHref": "#dihydropyridine-infusions"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-035",
  "question": "Pressure is nearing its target during clevidipine titration. How should upward adjustments change?",
  "choices": [
    "Keep doubling every 90 seconds",
    "Use smaller increases separated by 5 to 10 minutes",
    "Double every 30 seconds",
    "Immediately select the maximum rate"
  ],
  "answer": 1,
  "rationale": "Reduce the size and frequency of increases as the target approaches.",
  "reviewHref": "#dihydropyridine-infusions"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-018",
  "question": "Why avoid abrupt normalization in longstanding hypertension?",
  "choices": [
    "Reduced autoregulatory perfusion",
    "Guaranteed drug resistance",
    "Immediate tolerance",
    "Increased drug clearance"
  ],
  "answer": 0,
  "rationale": "Excessive reduction can impair organ perfusion.",
  "reviewHref": "#controlled-pressure-reduction"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-019",
  "question": "During emergency pressure reduction, what establishes tolerability?",
  "choices": [
    "A normal cuff value alone",
    "Pressure trend plus organ response",
    "Dose count alone",
    "Infusion volume alone"
  ],
  "answer": 1,
  "rationale": "Monitor both pressure and target-organ function.",
  "reviewHref": "#controlled-pressure-reduction"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-023",
  "question": "Which finding requires an aortic-specific pathway?",
  "choices": [
    "Remote appendectomy",
    "Stable osteoarthritis",
    "Acute aortic dissection",
    "Corrected iron deficiency"
  ],
  "answer": 2,
  "rationale": "Aortic emergencies have distinct treatment goals.",
  "reviewHref": "#controlled-pressure-reduction"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-026",
  "question": "Two patients have identical pressures but different injured organs. Should their infusions automatically match?",
  "choices": [
    "Yes; pressure alone selects therapy",
    "Yes; all infusions are interchangeable",
    "Yes; comorbidities do not matter",
    "No; match pharmacology to organ injury and comorbidities"
  ],
  "answer": 3,
  "rationale": "The pressure number alone cannot determine the agent.",
  "reviewHref": "#controlled-pressure-reduction"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-028",
  "question": "Which feature favors a short-acting adjustable infusion in hypertensive emergency?",
  "choices": [
    "No need for monitoring",
    "Small adjustments as pressure changes",
    "Guaranteed absence of toxicity",
    "Identical targets for every syndrome"
  ],
  "answer": 1,
  "rationale": "Titration helps avoid large pressure swings.",
  "reviewHref": "#controlled-pressure-reduction"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-042",
  "question": "An 80 kg adult is prescribed fenoldopam 0.1 mcg/kg/min at 40 mcg/mL. Which rate is correct?",
  "choices": [
    "0.2 mL/hour",
    "1.2 mL/hour",
    "12 mL/hour",
    "120 mL/hour"
  ],
  "answer": 2,
  "rationale": "0.1 × 80 × 60 ÷ 40 = 12 mL/hour.",
  "reviewHref": "#intravenous-drug-safety"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-044",
  "question": "How does the fenoldopam label classify glaucoma and sulfite sensitivity?",
  "choices": [
    "No precautions apply",
    "Warnings requiring assessment; its contraindications section lists none",
    "Both are universal absolute contraindications",
    "They require increasing the dose"
  ],
  "answer": 1,
  "rationale": "Distinguish warnings from formal contraindications while still assessing the clinical risk.",
  "reviewHref": "#intravenous-drug-safety"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-038",
  "question": "During nitroprusside infusion, progressively higher doses are needed. Does absence of acidosis exclude early cyanide toxicity?",
  "choices": [
    "Yes; acidosis always appears first",
    "Yes; dose escalation is always harmless",
    "No; acidosis may lag toxicity",
    "Yes; normal pressure excludes toxicity"
  ],
  "answer": 2,
  "rationale": "Increasing requirements can be an early signal. Evaluate urgently; discontinue and treat when toxicity is suspected.",
  "reviewHref": "#intravenous-drug-safety"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-039",
  "question": "A patient with renal impairment develops tinnitus, miosis and hyperreflexia during nitroprusside therapy. Which metabolite is implicated?",
  "choices": [
    "Thiocyanate",
    "Bicarbonate",
    "Creatinine",
    "Urea"
  ],
  "answer": 0,
  "rationale": "This pattern suggests thiocyanate neurotoxicity; severe accumulation may require hemodialysis.",
  "reviewHref": "#intravenous-drug-safety"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-049",
  "question": "An ischemic stroke patient becomes hypotensive and hypovolemic. What does the guideline recommend?",
  "choices": [
    "Accept low pressure to prevent hemorrhage",
    "Correct both to support organ perfusion",
    "Lower systolic pressure further",
    "Wait for reperfusion before addressing volume"
  ],
  "answer": 1,
  "rationale": "Maintaining systemic perfusion is a general stroke-care recommendation.",
  "reviewHref": "#neurologic-emergencies"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-052",
  "question": "After successful thrombectomy for anterior-circulation large-vessel occlusion (mTICI 2c), there is no competing pressure indication. How is a systolic target below 140 during the first 72 hours classified?",
  "choices": [
    "Required after every thrombectomy",
    "Proven to improve function",
    "Equivalent to routine monitoring",
    "Harmful and not recommended"
  ],
  "answer": 3,
  "rationale": "The 2026 recommendation applies to successful recanalization graded mTICI 2b, 2c or 3.",
  "reviewHref": "#neurologic-emergencies"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-062",
  "question": "A patient with PRES has ongoing seizures. Is blood-pressure control alone sufficient?",
  "choices": [
    "Yes, seizures need no separate treatment",
    "Yes, if MRI edema is mild",
    "No; manage seizures and the underlying trigger as well",
    "Yes, because reversibility is guaranteed"
  ],
  "answer": 2,
  "rationale": "Care must address seizures and the cause, not pressure alone.",
  "reviewHref": "#neurologic-emergencies"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-063",
  "question": "Does absence of severe hypertension exclude PRES?",
  "choices": [
    "Yes, in every case",
    "No; assess the clinical presentation and brain imaging",
    "Yes, unless both pressure values exceed crisis thresholds",
    "Yes, if edema extends beyond the occipital lobes"
  ],
  "answer": 1,
  "rationale": "PRES has been observed without marked hypertension and with nonposterior involvement.",
  "reviewHref": "#neurologic-emergencies"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-058",
  "question": "A patient with severe hypertension develops confusion and focal weakness. What must accompany pressure treatment?",
  "choices": [
    "Assume encephalopathy from the pressure alone",
    "Urgently evaluate for hemorrhage and ischemic stroke",
    "Wait for pressure normalization before imaging",
    "Exclude stroke solely because seizures occurred"
  ],
  "answer": 1,
  "rationale": "Hypertensive encephalopathy is a diagnosis of exclusion. Neurologic emergencies can coexist with elevated pressure.",
  "reviewHref": "#neurologic-emergencies"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-059",
  "question": "Pressure improves during treatment for suspected hypertensive encephalopathy, but confusion worsens. What is the appropriate assessment?",
  "choices": [
    "Reassure solely from the cuff value",
    "Stop neurologic observations",
    "Repeat neurologic assessment and investigate evolving injury or an alternative cause",
    "Defer assessment until discharge"
  ],
  "answer": 2,
  "rationale": "A better pressure reading does not establish neurologic recovery; reassess the patient and diagnosis.",
  "reviewHref": "#neurologic-emergencies"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-066",
  "question": "Acute aortic syndrome presents with hypertension and tachycardia; beta blockade is not contraindicated. Which sequence fits the guideline?",
  "choices": [
    "Vasodilator alone first",
    "IV beta blocker first, then vasodilator if pressure remains uncontrolled",
    "Oral diuretic alone",
    "Wait for spontaneous normalization"
  ],
  "answer": 1,
  "rationale": "Begin anti-impulse therapy; add vasodilation when needed after initial beta blockade.",
  "reviewHref": "#cardiovascular-emergencies"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-067",
  "question": "Which initial setting and pressure monitoring are recommended for acute aortic syndrome?",
  "choices": [
    "Home cuff monitoring",
    "Unmonitored ward treatment",
    "ICU care with an arterial line",
    "Pulse checks without pressure measurement"
  ],
  "answer": 2,
  "rationale": "Continuous invasive monitoring supports prompt anti-impulse treatment.",
  "reviewHref": "#cardiovascular-emergencies"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-068",
  "question": "Confirmed acute type A dissection improves hemodynamically after medication. What remains necessary?",
  "choices": [
    "Discharge after one normal reading",
    "Cancel the surgical evaluation",
    "Replace definitive care with oral therapy alone",
    "Emergency surgical evaluation and intervention"
  ],
  "answer": 3,
  "rationale": "Initial stabilization does not remove the need for emergency type A repair.",
  "reviewHref": "#cardiovascular-emergencies"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-070",
  "question": "A hospitalized patient has decompensated HF, marked hypertension, dyspnea and significant fluid overload. What fits the HF guideline?",
  "choices": [
    "Delay diuresis until discharge",
    "Use a vasodilator instead of treating fluid overload",
    "Give IV loop diuresis; consider IV nitrate as an adjunct if appropriate",
    "Give IV nitrate despite systemic hypotension"
  ],
  "answer": 2,
  "rationale": "IV diuresis treats fluid overload; vasodilation is an optional adjunct for dyspnea without systemic hypotension.",
  "reviewHref": "#cardiovascular-emergencies"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-071",
  "question": "Pressure falls during treatment of hypertensive pulmonary edema, but breathlessness persists. What should guide reassessment?",
  "choices": [
    "The cuff value alone",
    "Congestion, perfusion, clinical trajectory and precipitating factors",
    "A fixed infusion rate regardless of response",
    "Discharge once systolic pressure crosses a threshold"
  ],
  "answer": 1,
  "rationale": "Pressure improvement alone does not establish resolution of decompensated HF.",
  "reviewHref": "#cardiovascular-emergencies"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-074",
  "question": "A patient with severe hypertension has ECG-confirmed STEMI. Troponin is pending. What is appropriate?",
  "choices": [
    "Wait for troponin before reperfusion",
    "Treat pressure alone",
    "Activate reperfusion care without waiting for biomarkers",
    "Discharge if pain improves"
  ],
  "answer": 2,
  "rationale": "ECG evidence of STEMI warrants timely reperfusion; pending biomarkers must not delay it.",
  "reviewHref": "#cardiovascular-emergencies"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-075",
  "question": "Severe hypertension accompanies persistent ischemic chest discomfort, but the first ECG is nondiagnostic. What is appropriate?",
  "choices": [
    "Exclude ACS from that ECG",
    "Repeat ECGs and obtain troponin testing",
    "Wait until outpatient follow-up",
    "Use nitrate response as the only diagnostic test"
  ],
  "answer": 1,
  "rationale": "An initially nondiagnostic ECG does not exclude ACS; evolving symptoms require reassessment.",
  "reviewHref": "#cardiovascular-emergencies"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-102",
  "question": "A stable patient will switch from IV to oral nicardipine. Under the cited premix label, when is the first oral dose given?",
  "choices": [
    "One hour before stopping the infusion",
    "Twelve hours after stopping",
    "Only after severe pressure returns",
    "At the next outpatient visit"
  ],
  "answer": 0,
  "rationale": "The label specifies a one-hour lead for oral nicardipine; other oral agents have different transition instructions.",
  "reviewHref": "#monitoring-and-transition"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-103",
  "question": "Nicardipine is still infusing during a planned oral transition. Which monitoring plan fits its label?",
  "choices": [
    "Stop observations once the oral dose is ordered",
    "Measure only the next morning",
    "Monitor pressure and heart rate continually during infusion",
    "Rely only on whether the patient reports headache"
  ],
  "answer": 2,
  "rationale": "Continue monitoring during infusion and respond to hypotension or tachycardia.",
  "reviewHref": "#monitoring-and-transition"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-104",
  "question": "When switching IV nicardipine to a different oral antihypertensive, what does the cited premix label specify?",
  "choices": [
    "A mandatory one-hour overlap for every oral drug",
    "Start the other oral agent at infusion discontinuation",
    "No oral therapy for 24 hours",
    "Continue the infusion indefinitely"
  ],
  "answer": 1,
  "rationale": "The one-hour lead applies to oral nicardipine; the cited label starts other oral agents at discontinuation. Follow the selected regimen and monitor response.",
  "reviewHref": "#monitoring-and-transition"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-083",
  "question": "Under ACOG CO767's sample severe-pregnancy-hypertension pathway, when is pressure reassessed after the initial IV hydralazine dose?",
  "choices": [
    "Two minutes",
    "Five hours",
    "Twenty minutes",
    "At discharge"
  ],
  "answer": 2,
  "rationale": "Hydralazine uses a twenty-minute reassessment; the labetalol pathway uses ten minutes.",
  "reviewHref": "#special-populations"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-086",
  "question": "Magnesium has started for severe preeclampsia. Persistent severe pressure remains. What is appropriate?",
  "choices": [
    "Wait for magnesium to normalize pressure",
    "Continue indicated seizure prophylaxis and urgently treat pressure through the obstetric pathway",
    "Stop all treatment once seizures are absent",
    "Defer antihypertensive treatment until proteinuria is confirmed"
  ],
  "answer": 1,
  "rationale": "Magnesium and antihypertensive treatment address different urgent risks.",
  "reviewHref": "#special-populations"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-087",
  "question": "During magnesium infusion, patellar reflexes disappear and breathing slows markedly. What is the priority?",
  "choices": [
    "Continue unchanged until the next laboratory draw",
    "Increase magnesium",
    "Stop magnesium, obtain emergency help and support ventilation; give injectable calcium under protocol",
    "Treat only the cuff reading"
  ],
  "answer": 2,
  "rationale": "These findings suggest significant magnesium toxicity. Stop exposure and provide immediate rescue; do not wait for a laboratory result.",
  "reviewHref": "#special-populations"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-094",
  "question": "Phentolamine has been reconstituted for an indicated monitored treatment. Which handling instruction matches the cited label?",
  "choices": [
    "Store the prepared solution for tomorrow",
    "Use it upon preparation; do not store it",
    "Freeze the prepared syringe",
    "Reuse the remainder for a later patient"
  ],
  "answer": 1,
  "rationale": "The label directs immediate use of reconstituted solution.",
  "reviewHref": "#special-populations"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-095",
  "question": "After phentolamine, pressure falls markedly and the patient develops tachycardia and an irregular rhythm. How should this be interpreted?",
  "choices": [
    "A lower pressure proves treatment safety",
    "These findings need prompt hemodynamic and rhythm assessment",
    "No assessment is needed without fever",
    "The drug cannot affect rhythm"
  ],
  "answer": 1,
  "rationale": "Marked hypotension, tachycardia and arrhythmias are recognized phentolamine risks.",
  "reviewHref": "#special-populations"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-098",
  "question": "Creatinine rises and urine output falls during hypertensive-emergency treatment. What is the best next assessment?",
  "choices": [
    "Assume every change proves irreversible kidney failure",
    "Reassess perfusion, volume, medications and reversible causes while managing the emergency",
    "Ignore the change because pressure improved",
    "Stop all evaluation until discharge"
  ],
  "answer": 1,
  "rationale": "AKI requires prompt cause assessment; the pressure response alone cannot explain worsening kidney function.",
  "reviewHref": "#special-populations"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-099",
  "question": "Which paired trends are central to staging and monitoring suspected AKI?",
  "choices": [
    "Serum creatinine and urine output",
    "Heart rate and hair growth",
    "Weight alone and one cuff reading",
    "Cholesterol and visual acuity"
  ],
  "answer": 0,
  "rationale": "KDIGO uses both creatinine and urine output; interpret them with baseline function and the clinical course.",
  "reviewHref": "#special-populations"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-106",
  "question": "In spontaneous ICH requiring pressure reduction, which titration goal follows AHA/ASA guidance?",
  "choices": [
    "Repeated large peaks and troughs",
    "Smooth sustained control with limited variability",
    "The lowest pressure achievable regardless of perfusion",
    "No reassessment after the first dose"
  ],
  "answer": 1,
  "rationale": "Careful titration should avoid peaks and large systolic fluctuations.",
  "reviewHref": "#monitoring-and-transition"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-107",
  "question": "During ICH treatment, an acceptable average systolic pressure conceals large peaks and troughs. What should the team review?",
  "choices": [
    "Only the average",
    "Only the last measurement",
    "The pressure series, drug adjustments and clinical response",
    "Neither trend nor symptoms once the mean is acceptable"
  ],
  "answer": 2,
  "rationale": "Averages can hide variability; review the actual course when adjusting treatment.",
  "reviewHref": "#monitoring-and-transition"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-110",
  "question": "A patient stabilized after a hypertensive emergency cannot afford the discharge prescription. What should happen before discharge?",
  "choices": [
    "Keep the inaccessible plan and document nonadherence",
    "Coordinate an obtainable regimen and confirm access with the patient and care team",
    "Stop maintenance therapy indefinitely",
    "Leave access entirely to the next emergency visit"
  ],
  "answer": 1,
  "rationale": "Medication access is part of an executable care plan, not an optional administrative detail.",
  "reviewHref": "#monitoring-and-transition"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-111",
  "question": "A discharge plan includes home blood-pressure readings. Which detail is essential for using those readings?",
  "choices": [
    "A clinician or team to receive, review and act on them",
    "No follow-up if the first reading is normal",
    "A device without instruction",
    "A rule to change doses independently after every reading"
  ],
  "answer": 0,
  "rationale": "Home monitoring needs a defined feedback pathway and treatment plan.",
  "reviewHref": "#monitoring-and-transition"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-091",
  "question": "Before adding a beta blocker for persistent tachycardia during pheochromocytoma preparation, which safety check is essential?",
  "choices": [
    "Confirm alpha blockade has been established",
    "Confirm the patient has never received an alpha blocker",
    "Use a beta blocker first to test the diagnosis",
    "Treat every catecholamine exposure with the same sequence"
  ],
  "answer": 0,
  "rationale": "Beta blockade before alpha blockade can provoke dangerous unopposed vasoconstriction. This tumor-specific sequencing rule is not a universal poisoning protocol.",
  "reviewHref": "#special-populations"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-076",
  "question": "A patient with ACS and hypertension took tadalafil 30 hours ago. What does the 2025 ACS guideline imply for nitrate therapy now?",
  "choices": [
    "Give nitrate because the 24-hour interval has passed",
    "Avoid nitrate because this remains within the 48-hour tadalafil window",
    "Use a higher nitrate dose to overcome the interaction",
    "Use the 12-hour avanafil interval for tadalafil"
  ],
  "answer": 1,
  "rationale": "The ACS guideline specifies different avoidance windows for different PDE5 inhibitors. Thirty hours remains within the 48-hour tadalafil window; a high pressure does not eliminate the interaction.",
  "reviewHref": "#cardiovascular-emergencies"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-080",
  "question": "A patient receiving riociguat develops a cardiovascular emergency for which IV nitroglycerin is being considered. Which medication review finding changes the plan?",
  "choices": [
    "Only oral nitrates interact with riociguat",
    "Riociguat is a PDE5 inhibitor with a universal 12-hour washout",
    "Concurrent riociguat contraindicates nitrates because of hypotension",
    "Infusion-pump delivery prevents this interaction"
  ],
  "answer": 2,
  "rationale": "Riociguat stimulates soluble guanylate cyclase. Its label contraindicates coadministration with nitrates or nitric oxide donors in any form. Escalate selection of an appropriate alternative; do not invent a nitrate washout interval from PDE5 switching rules.",
  "reviewHref": "#cardiovascular-emergencies"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-088",
  "question": "A patient with severe preeclampsia has moderate-to-severe renal failure. A magnesium product label lists reduced renal dosing. What is the safest interpretation?",
  "choices": [
    "The label automatically establishes eligibility for magnesium in every obstetric patient",
    "Any renal impairment requires the same full maintenance dose",
    "A high blood pressure prevents magnesium accumulation",
    "Urgently reconcile the plan with the specialist because ACOG lists this degree of renal failure as a contraindication"
  ],
  "answer": 3,
  "rationale": "A dose adjustment and a decision that treatment is appropriate are different questions. ACOG identifies moderate-to-severe renal failure as a contraindication, while this product label gives renal dosing. Do not silently substitute one instruction for the other.",
  "reviewHref": "#special-populations"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-014",
  "question": "A patient with severe hypertension develops new focal weakness. Which initial diagnostic approach is appropriate?",
  "choices": [
    "Assume hypertension alone explains the weakness",
    "Urgently evaluate for stroke with neurologic assessment and appropriate brain imaging",
    "Wait for oral pressure therapy to work before assessing the brain",
    "Use a normal creatinine to exclude acute organ injury"
  ],
  "answer": 1,
  "rationale": "Focal deficits require urgent stroke evaluation. Hypertensive encephalopathy is not established by the pressure reading alone.",
  "reviewHref": "#triage-severe-pressure"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-015",
  "question": "Severe hypertension is accompanied by chest discomfort and acute breathlessness. Which findings are most directly relevant to the threatened cardiac organ system?",
  "choices": [
    "ECG, troponin and assessment of congestion and perfusion",
    "A remote normal dental examination",
    "Only the number of outpatient prescriptions",
    "Only the home cuff brand"
  ],
  "answer": 0,
  "rationale": "The presenting syndrome directs urgent testing. Cardiac ischemia and pulmonary edema require evaluation alongside monitored stabilization.",
  "reviewHref": "#triage-severe-pressure"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-016",
  "question": "A patient with severe hypertension reports feeling well. Does that report alone exclude acute target-organ injury?",
  "choices": [
    "Yes, injury always produces severe pain",
    "Yes, if hypertension was diagnosed previously",
    "No; assess the history, examination and indicated investigations for acute injury",
    "No; every asymptomatic high reading requires an IV infusion"
  ],
  "answer": 2,
  "rationale": "Symptoms alone do not settle the classification. Acute injury must be assessed; its absence does not justify reflexive IV lowering.",
  "reviewHref": "#triage-severe-pressure"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-060",
  "question": "An acutely confused patient has severe hypertension. Which reasoning error could delay appropriate treatment?",
  "choices": [
    "Considering medications and toxic exposures",
    "Assessing focal neurologic findings",
    "Obtaining indicated brain imaging",
    "Diagnosing hypertensive encephalopathy solely from confusion and a high pressure"
  ],
  "answer": 3,
  "rationale": "Stroke, toxic exposure and other causes remain in the differential. The pressure reading does not establish encephalopathy.",
  "reviewHref": "#neurologic-emergencies"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-064",
  "question": "Why should the word reversible in PRES not reassure a clinician that complications are impossible?",
  "choices": [
    "Infarction or hemorrhage can occur",
    "PRES always resolves before treatment",
    "PRES never affects regions outside the posterior brain",
    "PRES can be diagnosed from pressure alone"
  ],
  "answer": 0,
  "rationale": "PRES can have serious complications; its name is not a guarantee of an uncomplicated course.",
  "reviewHref": "#neurologic-emergencies"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-072",
  "question": "A patient with hypertensive pulmonary edema has progressive respiratory failure despite oxygen and noninvasive ventilation. What is the appropriate escalation?",
  "choices": [
    "Wait for several more hours of diuresis before reassessment",
    "Urgent intubation and invasive ventilatory support by the acute-care team",
    "Stop oxygen because pressure remains high",
    "Treat the cuff value as the only endpoint"
  ],
  "answer": 1,
  "rationale": "The 2026 ESC guidance recommends intubation for persistent, progressive respiratory failure despite oxygen or noninvasive support.",
  "reviewHref": "#cardiovascular-emergencies"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-073",
  "question": "During treatment of ACS with severe hypertension, which approach respects myocardial oxygen balance?",
  "choices": [
    "Lower diastolic pressure as far as possible regardless of symptoms",
    "Use nitrate response to rule out infarction",
    "Reduce excessive demand while preserving coronary perfusion and continuing the ACS pathway",
    "Delay reperfusion until the blood pressure is normal"
  ],
  "answer": 2,
  "rationale": "Pressure treatment supports ACS care; excessive reduction can compromise coronary perfusion and does not replace diagnosis or reperfusion.",
  "reviewHref": "#cardiovascular-emergencies"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-100",
  "question": "A creatinine rise occurs during emergency treatment. Which conclusion should be avoided before assessing perfusion and other causes?",
  "choices": [
    "Urine output helps characterize the course",
    "Volume status and medications should be reviewed",
    "The rise automatically requires abandoning all blood-pressure control",
    "Both ongoing injury and excessive lowering are possible"
  ],
  "answer": 2,
  "rationale": "A creatinine rise needs prompt contextual assessment. Neither continuing unchanged nor stopping all control is justified by the laboratory value alone.",
  "reviewHref": "#special-populations"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-101",
  "question": "A team is planning to stop a titratable IV antihypertensive. What must guide the oral transition?",
  "choices": [
    "A fixed overlap interval for every drug",
    "Clinical stability, the selected oral regimen and drug-specific onset and offset",
    "Only the time of the next nursing shift",
    "The assumption that one normal reading guarantees stability"
  ],
  "answer": 1,
  "rationale": "Coordinate timing with the selected medicines and monitor the response. Oral nicardipine and other oral agents have different instructions in the cited infusion label.",
  "reviewHref": "#monitoring-and-transition"
});
triageReplacements.push({
  "id": "hypertensive-emergencies-115",
  "question": "An infusion is transferred to another care team. Which action confirms that responsibility for the pressure target and titration plan has transferred?",
  "choices": [
    "Place the plan in an inaccessible draft",
    "Assume the receiving team saw a prior message",
    "Remove the target from the handoff to simplify it",
    "Confirm receipt and understanding with the receiving team"
  ],
  "answer": 3,
  "rationale": "A documented plan needs an identified receiving team and confirmation of the treatment target, monitoring and responsibilities.",
  "reviewHref": "#monitoring-and-transition"
});
const triageById = new Map(triageReplacements.map(q => [q.id, q]));
export const hypertensiveEmergenciesQuestionBank = [
  ...generated.map(q => triageById.get(q.id) ?? q),
  {"id": "hypertensive-emergencies-117", "question": "A patient being evaluated for IV labetalol is receiving oral verapamil. Under the cited labetalol injection label, which interpretation is correct?", "choices": ["The interaction applies only if verapamil is given intravenously", "A normal initial pulse removes the interaction restriction", "Coadministration with this nondihydropyridine calcium-channel blocker is contraindicated", "Separating administration by two minutes resolves the interaction"], "answer": 2, "rationale": "Section 7.4 contraindicates coadministration with nondihydropyridine calcium-channel antagonists such as verapamil without limiting the warning to an IV formulation. Reassess the acute treatment plan with the treating team; route, a normal pulse or a brief interval does not waive the restriction.", "reviewHref": "#intravenous-drug-safety"}
];
