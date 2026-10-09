const concepts = [
  { name: "ECG calibration", lesson: "ecg-foundations-and-calibration", principle: "Standard calibration is usually 25 mm/s horizontally and 10 mm/mV vertically, so one small box is 0.04 second and 0.1 mV.", action: "Verify speed, gain, lead placement, and artifact before measuring or comparing tracings.", assessment: "Review calibration marks, paper speed, gain, lead labels, lead placement, baseline quality, and prior ECG.", hazard: "Measuring an ECG without checking nonstandard speed or gain can create false interval or voltage conclusions.", why: "Every duration and amplitude measurement depends on the recording scale." },
  { name: "lead vectors", lesson: "ecg-foundations-and-calibration", principle: "A wave moving toward a lead's positive electrode produces a positive deflection, while motion away produces a negative deflection.", action: "Use lead orientation and polarity to infer the direction of the net electrical vector.", assessment: "Review lead polarity, limb and precordial placement, wave direction, axis, and possible lead reversal.", hazard: "Treating each lead as a separate cardiac event obscures that leads view the same electrical activity from different angles.", why: "Deflection polarity is determined by vector direction relative to the lead." },
  { name: "P wave and atrial activation", lesson: "ecg-foundations-and-calibration", principle: "The P wave represents atrial depolarization and helps establish sinus origin, atrial rate, morphology, and relationship to the QRS.", action: "Search across leads for consistent atrial activity before declaring a rhythm atrial fibrillation or junctional.", assessment: "Review P-wave presence, axis, shape, atrial rate, P-to-QRS relationship, baseline oscillation, and artifact.", hazard: "Calling an irregular tracing atrial fibrillation without proving absent organized atrial activity can misclassify ectopy or artifact.", why: "Atrial activity is central to rhythm diagnosis." },
  { name: "QRS and ventricular activation", lesson: "ecg-foundations-and-calibration", principle: "The QRS complex represents ventricular depolarization, and increased duration implies altered ventricular activation through bundle delay, ventricular origin, pacing, preexcitation, metabolic disturbance, or drug effect.", action: "Measure QRS duration and inspect morphology before classifying a tachycardia or conduction disorder.", assessment: "Review QRS width, morphology, axis, pacing spikes, preexcitation, electrolytes, drugs, and prior ECG.", hazard: "Assuming every wide QRS is ventricular tachycardia or every narrow QRS is benign ignores important alternatives and context.", why: "QRS duration and morphology localize how ventricular activation occurs." },
  { name: "regular rhythm rate calculation", lesson: "rate-regularity-and-rhythm", principle: "At 25 mm/s, ventricular rate in a regular rhythm can be estimated as 300 divided by large boxes or 1500 divided by small boxes between R waves.", action: "Use a precise interval method when treatment depends on rate and the rhythm is regular.", assessment: "Review speed, R-to-R distance, regularity, ectopy, and whether the selected interval represents the underlying rhythm.", hazard: "Using one unusually short interval after an ectopic beat can overestimate the sustained rate.", why: "Rate calculation assumes the measured cycle represents the regular rhythm." },
  { name: "irregular rhythm rate calculation", lesson: "rate-regularity-and-rhythm", principle: "For irregular rhythms, count QRS complexes across a known time span and scale to one minute rather than relying on a single R-to-R interval.", action: "Use a 6-second or longer representative strip and report an approximate range when variability is clinically important.", assessment: "Review strip duration, number of complexes, pauses, bursts, artifact, and average versus instantaneous rate.", hazard: "Applying the 300 rule to one interval in atrial fibrillation can produce a misleading rate.", why: "Irregular rhythms require sampling across multiple cycles." },
  { name: "sinus rhythm criteria", lesson: "rate-regularity-and-rhythm", principle: "Sinus rhythm has consistent sinus P-wave morphology with one P before each QRS and one QRS after each P, allowing minor respiratory variation.", action: "Confirm atrial origin and AV conduction rather than using regularity alone.", assessment: "Review P-wave axis and morphology, P-to-QRS ratio, PR consistency, rate, regularity, and ectopy.", hazard: "A regular narrow rhythm can be atrial, junctional, or paced and should not be labeled sinus without sinus P waves.", why: "Sinus rhythm is defined by origin and conduction relationship, not merely rate." },
  { name: "atrial fibrillation pattern", lesson: "rate-regularity-and-rhythm", principle: "Atrial fibrillation shows disorganized atrial activity with irregular ventricular response when AV conduction is not fixed or paced.", action: "Confirm rhythm quality and exclude artifact, multifocal atrial tachycardia, and frequent ectopy before acting on the diagnosis.", assessment: "Review atrial activity, R-to-R irregularity, QRS width, ventricular rate, symptoms, onset, anticoagulation, and reversible causes.", hazard: "Artifact with visible organized QRS timing can mimic fibrillatory baseline and lead to unnecessary treatment.", why: "AF diagnosis requires both atrial and ventricular pattern recognition." },
  { name: "atrial flutter pattern", lesson: "rate-regularity-and-rhythm", principle: "Atrial flutter is a macroreentrant atrial rhythm with organized atrial activity and a ventricular response determined by AV conduction ratio.", action: "Search inferior leads and V1 for repetitive atrial activity and test whether the ventricular rate reflects 2-to-1 or variable conduction.", assessment: "Review atrial rate and morphology, AV ratio, ventricular rate, QRS, symptoms, anticoagulation, and concealed flutter waves.", hazard: "A regular rate near 150 beats per minute should not automatically be called sinus tachycardia without inspecting for 2-to-1 flutter.", why: "Flutter waves can be hidden within QRS or T waves at common conduction ratios." },
  { name: "PR interval", lesson: "intervals-axis-and-repolarization", principle: "The PR interval measures atrial depolarization onset through ventricular depolarization onset and reflects atrial, AV nodal, His, and proximal bundle conduction.", action: "Measure from the start of P to the start of QRS and assess both duration and beat-to-beat behavior.", assessment: "Review PR duration, consistency, relation of P and QRS, rate, drugs, ischemia, electrolytes, and prior tracing.", hazard: "A long PR does not by itself identify the exact anatomic site of delay.", why: "Several structures contribute to the measured PR interval." },
  { name: "QT correction", lesson: "intervals-axis-and-repolarization", principle: "QT varies with heart rate, so a correction formula is used, yet formula performance differs at rate extremes and automated QTc can be wrong.", action: "Manually verify QT in a lead with a clear T-wave end and interpret the chosen correction with rate and QRS duration.", assessment: "Review raw QT, R-to-R interval, formula, heart rate, QRS width, T and U waves, electrolytes, drugs, and prior QTc.", hazard: "Accepting an automated Bazett QTc during marked tachycardia can exaggerate repolarization risk.", why: "Rate correction and T-wave-end selection are sources of error." },
  { name: "frontal plane axis", lesson: "intervals-axis-and-repolarization", principle: "Frontal QRS axis reflects the net ventricular depolarization direction and can be screened with limb-lead polarity before precise estimation.", action: "Use leads I and aVF, then lead II when needed, while excluding limb-lead reversal.", assessment: "Review limb-lead polarity, QRS morphology, lead placement, chamber disease, conduction block, infarction, and prior axis.", hazard: "Calling apparent extreme axis disease without checking lead reversal can create a false diagnosis.", why: "Misplaced limb electrodes can invert the expected frontal vector." },
  { name: "first-degree AV block", lesson: "conduction-blocks-and-pacing", principle: "First-degree AV block is prolonged AV conduction with every atrial impulse conducted to the ventricles.", action: "Measure the PR and review symptoms, rate, drugs, ischemia, and associated conduction disease.", assessment: "Review PR duration, QRS width, 1-to-1 conduction, symptoms, AV nodal drugs, electrolytes, and prior ECG.", hazard: "The term block can distract from the fact that no P wave is dropped in first-degree AV block.", why: "The defining pattern is delayed but complete AV conduction." },
  { name: "Mobitz I second-degree AV block", lesson: "conduction-blocks-and-pacing", principle: "Mobitz I usually shows progressive PR prolongation before a nonconducted P wave, often reflecting AV nodal block.", action: "Map each P wave and PR interval through the grouped beating pattern and assess perfusion and reversible causes.", assessment: "Review PR sequence, dropped P waves, QRS width, symptoms, drugs, ischemia, vagal state, and block level.", hazard: "Looking only at the pause can miss the progressive PR pattern that distinguishes Wenckebach.", why: "Sequential PR behavior defines the classic pattern." },
  { name: "Mobitz II second-degree AV block", lesson: "conduction-blocks-and-pacing", principle: "Mobitz II has intermittently nonconducted P waves without progressive PR lengthening and often indicates infranodal disease with progression risk.", action: "Treat symptomatic or unstable patients urgently and obtain pacing evaluation rather than relying on atropine alone.", assessment: "Review fixed conducted PR intervals, dropped P waves, QRS width, symptoms, perfusion, ischemia, and reversible causes.", hazard: "Mislabeling Mobitz II as benign Wenckebach can delay pacing preparation.", why: "Infranodal block can progress abruptly to complete heart block." },
  { name: "complete heart block", lesson: "conduction-blocks-and-pacing", principle: "Third-degree AV block shows atrial and ventricular activity without a consistent relationship because no atrial impulses conduct to the ventricles.", action: "Assess perfusion immediately, support unstable bradycardia, and prepare pacing while correcting reversible causes.", assessment: "Review atrial and ventricular rates, AV dissociation, escape width and reliability, symptoms, blood pressure, ischemia, drugs, and electrolytes.", hazard: "Mistaking occasional visual alignment of P waves and QRS for conduction can conceal complete AV dissociation.", why: "Independent atrial and ventricular rhythms can align by chance." },
  { name: "right bundle branch block", lesson: "conduction-blocks-and-pacing", principle: "RBBB delays right ventricular activation, producing a widened QRS with characteristic right precordial and lateral terminal forces.", action: "Confirm morphology and compare with prior ECG while assessing symptoms and the disease context.", assessment: "Review QRS duration, V1 and lateral-lead morphology, axis, symptoms, ischemia, pulmonary strain, and prior ECG.", hazard: "A new RBBB is not a diagnosis by itself and should be interpreted with the presentation.", why: "RBBB can be chronic or accompany acute structural, ischemic, or pulmonary disease." },
  { name: "left bundle branch block", lesson: "conduction-blocks-and-pacing", principle: "LBBB changes the sequence of left ventricular activation and produces secondary ST-T discordance that complicates ischemia interpretation.", action: "Use symptoms, prior ECG, serial change, biomarkers, imaging, and validated concordance criteria rather than treating LBBB alone as infarction.", assessment: "Review QRS morphology, ST concordance or excessive discordance, symptoms, onset, prior tracing, troponin, and hemodynamics.", hazard: "Calling every LBBB a STEMI or dismissing all ST change as secondary are both unsafe shortcuts.", why: "LBBB both mimics and can conceal acute coronary occlusion patterns." },
  { name: "ST-segment elevation", lesson: "ischemia-electrolytes-and-drugs", principle: "ST elevation is interpreted by contiguous leads, morphology, reciprocal change, symptoms, timing, and differential rather than voltage alone.", action: "Activate an urgent ischemia pathway when the clinical and electrocardiographic pattern supports acute coronary occlusion without waiting for biomarker confirmation.", assessment: "Review symptoms, onset, contiguous leads, J-point measurement, reciprocal changes, prior ECG, posterior and right-sided leads, and mimics.", hazard: "A normal initial troponin can falsely reassure during early occlusion myocardial infarction.", why: "Biomarker release can lag behind the time-sensitive ECG and clinical syndrome." },
  { name: "ST depression and T-wave inversion", lesson: "ischemia-electrolytes-and-drugs", principle: "ST depression and T-wave inversion can reflect ischemia, reciprocal change, strain, conduction abnormality, electrolyte disturbance, drugs, or normal variation.", action: "Interpret distribution and dynamics with symptoms, QRS morphology, prior ECG, and serial testing.", assessment: "Review contiguous lead pattern, depth, horizontality, T-wave symmetry, reciprocal elevation, QRS and voltage, drugs, and electrolytes.", hazard: "Treating every T-wave inversion as acute ischemia ignores secondary repolarization and baseline patterns.", why: "Repolarization abnormalities have a broad differential." },
  { name: "hyperkalemia ECG evolution", lesson: "ischemia-electrolytes-and-drugs", principle: "Hyperkalemia can progress from peaked T waves and shortened repolarization to PR prolongation, P-wave loss, QRS widening, sine-wave pattern, and arrest, but ECG sensitivity is imperfect.", action: "Treat clinically dangerous hyperkalemia promptly using laboratory and clinical context rather than waiting for a textbook sequence.", assessment: "Review potassium, kidney function, medications, T waves, PR, P waves, QRS width, bradycardia, symptoms, and sampling quality.", hazard: "A nondiagnostic ECG does not exclude severe hyperkalemia.", why: "ECG manifestations are variable and do not track serum potassium reliably in every patient." },
  { name: "hypokalemia and hypomagnesemia", lesson: "ischemia-electrolytes-and-drugs", principle: "Low potassium can cause ST depression, T-wave flattening, prominent U waves, and ventricular ectopy, while low magnesium amplifies repolarization instability and torsades risk.", action: "Correct magnesium and potassium while removing contributors and monitoring rhythm in high-risk patients.", assessment: "Review potassium, magnesium, QT and QU appearance, U waves, ectopy, diuretics, GI losses, drugs, and renal function.", hazard: "Measuring a U wave as part of the T wave can overestimate QT and obscure the underlying electrolyte pattern.", why: "T-wave termination and U-wave separation determine interval interpretation." },
  { name: "QT-prolonging medications", lesson: "ischemia-electrolytes-and-drugs", principle: "Drug-associated torsades risk depends on QTc, dose and exposure, multiple QT drugs, electrolytes, bradycardia, structural disease, sex, age, and congenital susceptibility.", action: "Correct modifiable risks, review interactions and organ function, and select or discontinue therapy according to benefit and risk.", assessment: "Review QTc method, change from baseline, heart rate, potassium, magnesium, calcium, kidney and liver function, drug list, and symptoms.", hazard: "Using one QTc cutoff without considering change, rate, QRS, and patient risk can misclassify danger.", why: "Torsades risk is multivariable and exposure dependent." },
  { name: "wide-complex tachycardia", lesson: "emergency-interpretation-workflow", principle: "Wide-complex tachycardia can be ventricular tachycardia, supraventricular tachycardia with aberrancy or preexcitation, pacing, hyperkalemia, or sodium-channel blockade.", action: "Assess stability first and treat undifferentiated regular wide-complex tachycardia cautiously as ventricular tachycardia when uncertainty remains.", assessment: "Review pulse, perfusion, rate, regularity, QRS morphology, AV dissociation, prior ECG, structural disease, drugs, toxins, electrolytes, and pacing.", hazard: "Giving verapamil to undifferentiated ventricular-origin wide-complex tachycardia can cause collapse.", why: "Misclassification can make otherwise useful AV nodal therapy dangerous." },
  { name: "unstable tachycardia", lesson: "emergency-interpretation-workflow", principle: "Hypotension, acutely altered mental status, shock, ischemic chest discomfort, or acute heart failure attributable to tachycardia signals instability.", action: "Perform prompt synchronized cardioversion when a tachyarrhythmia with a pulse is causing hemodynamic instability while supporting airway and circulation.", assessment: "Review pulse, blood pressure, mental status, chest discomfort, heart failure, shock, rhythm, cause, anticoagulation context, and synchronization.", hazard: "Spending excessive time naming the rhythm can delay electrical treatment of instability.", why: "Perfusion failure establishes immediate priority before fine rhythm taxonomy." },
  { name: "symptomatic bradycardia", lesson: "emergency-interpretation-workflow", principle: "Bradycardia requires treatment when it causes poor perfusion, while reversible causes such as ischemia, hypoxia, electrolytes, temperature, and medications are addressed concurrently.", action: "Support airway and perfusion, use atropine when appropriate, and prepare pacing or adrenergic support when instability persists.", assessment: "Review symptoms, blood pressure, mental status, chest discomfort, heart failure, rhythm, QRS, ischemia, oxygenation, electrolytes, temperature, and drugs.", hazard: "Treating an asymptomatic low rate as an emergency or ignoring an unstable modest bradycardia both misuse rate alone.", why: "Clinical impact, not a single heart-rate threshold, determines urgency." },
  { name: "artifact and lead reversal", lesson: "emergency-interpretation-workflow", principle: "Motion, tremor, electrical interference, poor contact, and lead reversal can mimic atrial or ventricular arrhythmia, axis abnormality, or infarction.", action: "Inspect the patient and pulse, repeat the tracing with corrected electrodes, and compare simultaneous leads before high-risk treatment.", assessment: "Review pulse-tracing concordance, artifact across leads, electrode contact, limb-lead polarity, baseline motion, implanted devices, and repeat ECG.", hazard: "Treating artifact as ventricular tachycardia can expose a conscious stable patient to unnecessary shock or drugs.", why: "A genuine cardiac rhythm should correlate with the patient's pulse and coherent electrical activity across leads." },
  { name: "12-lead electrode placement", lesson: "ecg-foundations-and-calibration", principle: "A standard 12-lead ECG derives twelve electrical viewpoints from four limb electrodes and six precordial electrodes placed at defined landmarks.", action: "Place V1 and V2 in the fourth intercostal spaces at the sternal borders, place V4 at the fifth intercostal space on the midclavicular line, then align V3, V5, and V6 from those landmarks.", assessment: "Review patient position, chest landmarks, precordial and limb electrode placement, tracing quality, R-wave progression, axis, and prior ECG.", hazard: "Placing V1 and V2 too high or shifting lateral leads can imitate conduction disease, poor R-wave progression, or ischemic change.", why: "The waveform depends on each electrode's position relative to the cardiac vector." },
  { name: "monomorphic and polymorphic ventricular tachycardia", lesson: "emergency-interpretation-workflow", principle: "Monomorphic VT has a relatively consistent QRS morphology, while polymorphic VT has beat-to-beat variation in QRS shape and axis. Torsades is polymorphic VT associated with prolonged QT.", action: "Deliver immediate unsynchronized shock for sustained polymorphic VT because synchronization is unreliable, then identify whether long QT, ischemia, or another cause is driving recurrence.", assessment: "Review pulse, perfusion, QRS morphology, QT before the event, electrolytes, ischemia, medication exposure, structural disease, and recurrence pattern.", hazard: "Calling every polymorphic VT torsades can lead to routine magnesium use even when the baseline QT is normal and ischemia needs treatment.", why: "Morphology and the preceding QT distinguish treatment-relevant mechanisms." },
  { name: "pulseless electrical activity and asystole", lesson: "emergency-interpretation-workflow", principle: "PEA is organized electrical activity without a palpable pulse, while asystole is absence of ventricular electrical activity confirmed after equipment and lead checks.", action: "Begin high-quality CPR, give epinephrine promptly, and search for reversible causes rather than attempting defibrillation for persistent PEA or asystole.", assessment: "Check pulse, confirm rhythm in more than one lead, inspect electrodes and gain, assess CPR quality, obtain vascular access, and evaluate reversible causes.", hazard: "Diagnosing PEA from the monitor without checking a pulse or shocking a nonshockable rhythm delays the correct cardiac arrest pathway.", why: "PEA is an electromechanical clinical diagnosis, and neither PEA nor asystole is a shockable rhythm." },
];

const dimensions = [["principle", "Which principle best characterizes"], ["action", "Which clinical action best applies to"], ["assessment", "Which assessment is most appropriate for"], ["hazard", "Which reasoning hazard is most important to prevent with"]];
function distractors(index, field) { return [5, 11, 17].map((offset) => concepts[(index + offset) % concepts.length][field]); }
const generated = concepts.flatMap((concept, conceptIndex) => dimensions.map(([field, prefix], dimensionIndex) => ({ id: `ecg-interpretation-${String(conceptIndex * 4 + dimensionIndex + 1).padStart(3, "0")}`, question: `${prefix} ${concept.name}?`, choices: [concept[field], ...distractors(conceptIndex, field)], answer: 0, rationale: concept.why, reviewHref: `#${concept.lesson}` })));

const ischemiaElectrolyteQuestionRepairs = {
  "ecg-interpretation-073": {
    "choices": [
      "ST elevation is interpreted by contiguous leads, morphology, reciprocal change, symptoms, timing, and differential rather than voltage alone.",
      "ST elevation establishes acute coronary occlusion from voltage alone.",
      "Reciprocal changes are required before symptoms or timing can be considered.",
      "A prior tracing cannot help interpret an ST-elevation pattern."
    ],
    "rationale": "Contiguous distribution, morphology, reciprocal change, symptoms and timing inform the differential. ST elevation alone is not proof of acute occlusion, and the absence of reciprocal change does not rule it out."
  },
  "ecg-interpretation-074": {
    "choices": [
      "Activate an urgent ischemia pathway when the clinical and electrocardiographic pattern supports acute coronary occlusion without waiting for biomarker confirmation.",
      "Wait for troponin to rise before activating the emergency ischemia pathway.",
      "Dismiss diagnostic ECG findings because the initial troponin is normal.",
      "Require every possible ECG mimic to be excluded before escalating a diagnostic acute pattern."
    ],
    "rationale": "When the presentation and ECG are diagnostic, initiate the urgent ischemia pathway without waiting for biomarker confirmation. The question does not treat isolated ST elevation as sufficient; the clinical and ECG context is specified.",
    "question": "The clinical presentation and ECG pattern are diagnostic of acute coronary occlusion. Which action is most appropriate?"
  },
  "ecg-interpretation-075": {
    "choices": [
      "Review symptoms, onset, contiguous leads, J-point measurement, reciprocal changes, prior ECG, posterior and right-sided leads, and mimics.",
      "Review ST voltage in one lead only, omitting symptoms, onset and the prior tracing.",
      "Review troponin alone and omit the ECG territory and reciprocal changes.",
      "Record the automated diagnosis without checking morphology or possible mimics."
    ],
    "rationale": "Interpret the territory and waveform with symptoms, timing and prior or serial ECGs. Additional posterior or right-sided leads are considered when clinically indicated; this is not an instruction to obtain them for every ST-elevation tracing."
  },
  "ecg-interpretation-076": {
    "choices": [
      "A normal initial troponin can falsely reassure during early occlusion myocardial infarction.",
      "Comparing contiguous leads and the prior ECG when interpreting ST elevation.",
      "Escalating a diagnostic acute ischemic pattern without awaiting biomarker confirmation.",
      "Considering additional leads when the suspected territory is not fully shown."
    ],
    "rationale": "A normal early troponin can provide false reassurance when the clinical and ECG pattern is diagnostic. The other choices support interpretation or timely escalation rather than representing the asked hazard."
  },
  "ecg-interpretation-077": {
    "choices": [
      "ST depression and T-wave inversion can reflect ischemia, reciprocal change, strain, conduction abnormality, electrolyte disturbance, drugs, or normal variation.",
      "Every inverted T wave proves acute coronary ischemia.",
      "ST depression excludes an electrolyte or medicine contribution.",
      "A conduction abnormality prevents secondary ST-T changes."
    ],
    "rationale": "ST-T changes have ischemic and nonischemic causes. Distribution, QRS context, symptoms and change over time help distinguish them; an isolated shape cannot establish the diagnosis."
  },
  "ecg-interpretation-078": {
    "choices": [
      "Interpret distribution and dynamics with symptoms, QRS morphology, prior ECG, and serial testing.",
      "Classify the cause from T-wave inversion alone without considering symptoms.",
      "Ignore a new dynamic pattern whenever the automated report is nondiagnostic.",
      "Treat a prior baseline repolarization pattern as proof of new infarction."
    ],
    "rationale": "Compare distribution and dynamics with symptoms, QRS morphology and prior or serial tracings. Neither an automated description nor one unchanged baseline pattern establishes an acute ischemic cause."
  },
  "ecg-interpretation-079": {
    "choices": [
      "Review contiguous lead pattern, depth, horizontality, T-wave symmetry, reciprocal elevation, QRS and voltage, drugs, and electrolytes.",
      "Review T-wave polarity only and omit QRS morphology and the affected leads.",
      "Review symptoms only and omit the tracing, medicine exposures and electrolytes.",
      "Review ST depth only and omit reciprocal changes and the prior ECG."
    ],
    "rationale": "The lead pattern, waveform, QRS context and exposures contribute together. Each alternative omits relevant information; no one waveform feature is a stand-alone diagnosis."
  },
  "ecg-interpretation-080": {
    "choices": [
      "Treating every T-wave inversion as acute ischemia ignores secondary repolarization and baseline patterns.",
      "Comparing ST-T changes with QRS morphology and baseline patterns.",
      "Considering electrolyte and medicine effects alongside ischemia.",
      "Reassessing symptoms and serial changes when the initial diagnosis remains uncertain."
    ],
    "rationale": "Treating every T-wave inversion as acute ischemia ignores the broader differential. The other choices are appropriate comparison and reassessment steps."
  },
  "ecg-interpretation-081": {
    "choices": [
      "Hyperkalemia can progress from peaked T waves and shortened repolarization to PR prolongation, P-wave loss, QRS widening, sine-wave pattern, and arrest, but ECG sensitivity is imperfect.",
      "Every dangerous potassium level produces peaked T waves before conduction changes.",
      "A normal QRS excludes severe hyperkalemia.",
      "A sine-wave tracing is required before hyperkalemia can cause an arrhythmia."
    ],
    "rationale": "The listed findings are possible manifestations, not a mandatory sequence or a reliable prediction of serum potassium. Severe hyperkalemia can have a nondiagnostic ECG, and dangerous arrhythmias can occur without preceding textbook changes."
  },
  "ecg-interpretation-082": {
    "choices": [
      "Treat clinically dangerous hyperkalemia promptly using laboratory and clinical context rather than waiting for a textbook sequence.",
      "Wait for loss of P waves and a sine-wave pattern before escalating dangerous hyperkalemia.",
      "Disregard a dangerous measured potassium level when the ECG is nondiagnostic.",
      "Use T-wave height alone to choose the response, omitting kidney function and clinical acuity."
    ],
    "rationale": "Use measured potassium and clinical severity with the ECG. Promptly escalate clinically dangerous hyperkalemia rather than waiting for a particular waveform; the absence of classic findings does not establish safety."
  },
  "ecg-interpretation-083": {
    "choices": [
      "Review potassium, kidney function, medications, T waves, PR, P waves, QRS width, bradycardia, symptoms, and sampling quality.",
      "Review the ECG only and omit potassium testing and sampling quality.",
      "Review symptoms only because asymptomatic hyperkalemia cannot be dangerous.",
      "Review one prior potassium value and omit current kidney function and medicine changes."
    ],
    "rationale": "Review the current laboratory and clinical context together with the tracing. Sampling quality matters when assessing a result, but possible sampling error must not become a reason to ignore clinical danger while confirmation is arranged."
  },
  "ecg-interpretation-084": {
    "choices": [
      "A nondiagnostic ECG does not exclude severe hyperkalemia.",
      "A normal QRS establishes a safe potassium level.",
      "Dangerous hyperkalemia always produces a sine wave first.",
      "The absence of peaked T waves removes the need to review potassium results."
    ],
    "rationale": "A nondiagnostic ECG does not exclude severe hyperkalemia. The other statements incorrectly treat absent ECG findings as proof of safety; measured potassium and clinical acuity remain essential.",
    "question": "Which statement prevents false reassurance when assessing possible severe hyperkalemia?"
  },
  "ecg-interpretation-085": {
    "choices": [
      "Low potassium can cause ST depression, T-wave flattening, prominent U waves, and ventricular ectopy, while low magnesium amplifies repolarization instability and torsades risk.",
      "Prominent U waves prove that potassium and magnesium are normal.",
      "Low magnesium removes torsades risk if potassium is also low.",
      "ST depression or flattened T waves excludes an electrolyte contribution."
    ],
    "rationale": "Low potassium can alter ST, T and U morphology and increase ventricular ectopy. Low magnesium contributes to repolarization risk and can complicate correction of potassium depletion. These patterns require laboratory and clinical correlation."
  },
  "ecg-interpretation-086": {
    "choices": [
      "Correct magnesium and potassium while removing contributors and monitoring rhythm in high-risk patients.",
      "Replace potassium without reviewing a concurrent magnesium deficit.",
      "Use the ECG alone to select replacement without measuring electrolytes or kidney function.",
      "Continue avoidable losses and contributing medicines without reassessment."
    ],
    "rationale": "Review and correct potassium and magnesium together, address contributors and monitor rhythm in high-risk patients. Hypomagnesemia can make potassium depletion difficult to correct. This choice does not specify a universal dose, rate or monitoring schedule."
  },
  "ecg-interpretation-087": {
    "choices": [
      "Review potassium, magnesium, QT and QU appearance, U waves, ectopy, diuretics, GI losses, drugs, and renal function.",
      "Review potassium only and omit magnesium and contributing losses.",
      "Accept the automated QT value without looking for prominent or fused U waves.",
      "Review the medicine count only and omit kidney function and electrolyte measurements."
    ],
    "rationale": "Assess the measured electrolytes and causes of loss with raw QT or QU appearance and ectopy. Diuretics, gastrointestinal losses, medicine exposures and kidney function inform the response; no single item replaces that assessment."
  },
  "ecg-interpretation-088": {
    "choices": [
      "Measuring a U wave as part of the T wave can overestimate QT and obscure the underlying electrolyte pattern.",
      "Identifying the T-wave end in a lead with clear morphology.",
      "Reviewing prominent U waves together with measured potassium and magnesium.",
      "Rechecking automated interval measurements when T and U waves are difficult to distinguish."
    ],
    "rationale": "Including a U wave can make a measured interval appear to be QT when it includes QU. The other choices are protective measurement and correlation steps. The tracing and a consistent method are needed rather than an automated number alone."
  },
  "ecg-interpretation-089": {
    "choices": [
      "Drug-associated torsades risk depends on QTc, dose and exposure, multiple QT drugs, electrolytes, bradycardia, structural disease, sex, age, and congenital susceptibility.",
      "The presence of one QT-active medicine predicts torsades independently of the patient.",
      "A normal potassium level excludes risk from bradycardia or interacting exposures.",
      "Kidney and liver function cannot affect drug-associated repolarization risk."
    ],
    "rationale": "Drug-associated torsades risk combines exposure, interacting medicines, electrolytes, heart rate and patient vulnerability. Normality of one variable does not remove the others, and QT prolongation does not prove torsades will occur."
  },
  "ecg-interpretation-090": {
    "choices": [
      "Correct modifiable risks, review interactions and organ function, and select or discontinue therapy according to benefit and risk.",
      "Continue avoidable QT-active combinations without reviewing electrolyte depletion.",
      "Treat every long QT with a widened QRS as proof of acquired long-QT physiology.",
      "Stop every beneficial medicine solely because one automated QTc value is elevated."
    ],
    "rationale": "Correct modifiable contributors, review exposure and organ function, and weigh therapeutic benefit against risk. Check uncertain QT measurements and QRS context. Neither unreviewed continuation nor reflex discontinuation substitutes for this assessment."
  },
  "ecg-interpretation-091": {
    "choices": [
      "Review QTc method, change from baseline, heart rate, potassium, magnesium, calcium, kidney and liver function, drug list, and symptoms.",
      "Review one QTc number only and omit its method, baseline and heart rate.",
      "Review the prescription list only and omit electrolytes and organ function.",
      "Review symptoms only and omit QTc, QRS context and interacting medicine exposure."
    ],
    "rationale": "Review how QTc was measured and corrected, its change from baseline, rate, electrolytes, exposures and patient context. Kidney or liver dysfunction may change exposure. The question asks for the complete assessment, not one isolated variable."
  },
  "ecg-interpretation-092": {
    "choices": [
      "Using one QTc cutoff without considering change, rate, QRS, and patient risk can misclassify danger.",
      "Using a consistent measurement method when comparing baseline and follow-up tracings.",
      "Reviewing QRS width and heart rate before interpreting an apparent long QT.",
      "Considering electrolyte depletion and interacting exposure alongside the QTc."
    ],
    "rationale": "One isolated cutoff can miss measurement problems and combined patient risk. The other choices address those problems. A widened QRS can lengthen QT through depolarization, so that alone does not establish acquired long-QT physiology."
  }
};

export const ecgInterpretationQuestionBank = generated.map((question) => ({ ...question, ...(ischemiaElectrolyteQuestionRepairs[question.id] || {}) }));
