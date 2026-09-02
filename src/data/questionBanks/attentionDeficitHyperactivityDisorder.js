const concepts = [
  ["diagnosis", "ADHD requires a persistent developmentally inappropriate pattern of inattention and or hyperactivity and impulsivity that causes impairment.", "Confirm symptoms, duration, onset before age 12, impairment, and evidence across more than one setting.", "Diagnosing ADHD from a single rating scale or one difficult setting can mislabel another problem."],
  ["presentation", "ADHD may present as predominantly inattentive, predominantly hyperactive and impulsive, or combined, and presentation can change over time.", "Describe the current presentation and functional burden rather than treating one childhood stereotype as universal.", "Assuming a quiet high achieving patient cannot have ADHD can delay recognition."],
  ["adult-adhd", "Adult diagnosis still requires evidence that several symptoms were present before age 12 and that current symptoms impair more than one setting.", "Reconstruct childhood history, current function, compensatory strategies, and collateral evidence when available.", "Calling new adult concentration difficulty ADHD without evaluating mood, sleep, substances, medications, and medical causes is unsafe."],
  ["differential", "Sleep disorders, anxiety, depression, bipolar disorder, trauma, substance use, learning disorders, autism, thyroid disease, seizures, and medication effects can resemble or coexist with ADHD.", "Use history, examination, collateral reports, and targeted testing to identify alternatives and comorbidity.", "A stimulant response does not prove the diagnosis because stimulants can alter attention in people without ADHD."],
  ["baseline", "Baseline assessment connects diagnosis to cardiovascular, growth, sleep, appetite, psychiatric, neurologic, substance, and reproductive risk.", "Record blood pressure, pulse, weight, height in children, sleep, appetite, cardiac and family history, medications, and misuse risk before treatment.", "Routine ECG for every patient is not required, but ignoring an abnormal cardiac history or examination is unsafe."],
  ["behavioral-care", "Parent training, classroom interventions, organizational skills, sleep support, environmental design, and accommodations target function beyond medication duration.", "Define observable goals at home, school, work, and relationships and measure them over time.", "Using medication without functional targets can improve a rating score while leaving the patient's main impairment unchanged."],
  ["preschool", "For children age four to five, evidence based parent training in behavior management and classroom intervention are first line.", "Consider methylphenidate only when behavioral treatment is insufficient and moderate to severe impairment persists after careful diagnosis.", "Starting a broad medication trial before implementing available behavioral treatment skips the age specific evidence pathway."],
  ["stimulant-mechanism", "Methylphenidate mainly blocks dopamine and norepinephrine transporters, while amphetamines also promote presynaptic monoamine release.", "Use mechanism to explain class differences without predicting individual response too confidently.", "Treating all stimulants as pharmacologically interchangeable can obscure meaningful formulation and adverse effect differences."],
  ["methylphenidate", "Methylphenidate products differ in release technology, duration, route, food instructions, and ability to open, crush, or substitute.", "Select the exact product around the needed coverage window and follow its product specific administration instructions.", "Substituting equal milligrams across unlike extended release products can change exposure and clinical effect."],
  ["amphetamine", "Amphetamine products include mixed salts, dextroamphetamine, and the prodrug lisdexamfetamine, with product specific dosing and administration.", "Choose by response, duration, adverse effects, formulation needs, and diversion risk rather than brand familiarity alone.", "Assuming a prodrug eliminates misuse risk is incorrect because lisdexamfetamine remains a Schedule II stimulant."],
  ["titration", "ADHD medication is titrated to maximum functional benefit with tolerable adverse effects, not to a fixed population dose.", "Use frequent early follow-up with reports from relevant settings and adjust one interpretable variable at a time.", "Increasing dose despite good coverage and persistent impairment from an untreated learning disorder adds harm without addressing the cause."],
  ["cardiovascular", "Stimulants and several nonstimulants can change blood pressure and heart rate, while alpha2 agonists can lower both.", "Monitor blood pressure and pulse and escalate cardiac evaluation when history, examination, symptoms, or family history indicate risk.", "Reassuring a patient with exertional syncope without evaluation because a routine ECG was not mandated is unsafe."],
  ["growth-appetite", "Stimulants can suppress appetite and may slow expected weight or height gain in some children.", "Trend growth, align nutrition with appetite windows, and reconsider dose, duration, or therapy when growth trajectory changes meaningfully.", "Documenting one weight without longitudinal percentiles can miss clinically important growth change."],
  ["sleep", "Insomnia may reflect medication timing, excessive duration, rebound, baseline sleep disorder, caffeine, anxiety, or poor sleep habits.", "Map symptom coverage and sleep timing before changing medication and treat the actual sleep mechanism.", "Adding a sedating drug automatically can conceal an overly late stimulant dose or untreated sleep apnea."],
  ["misuse", "Prescription stimulants carry boxed warnings for misuse, abuse, addiction, overdose, and death and must never be shared.", "Assess risk before and during treatment, use secure storage and disposal counseling, and monitor early refills, lost prescriptions, escalating use, and diversion.", "Focusing only on academic performance can miss dangerous nonmedical use and polysubstance exposure."],
  ["psychiatric-safety", "Stimulants and nonstimulants can affect mood, anxiety, agitation, psychosis, mania, and suicidal thinking in susceptible patients.", "Screen for bipolar and psychotic illness, establish an escalation plan, and reassess new activation or perceptual change urgently.", "Treating stimulant induced psychosis by simply increasing the stimulant is dangerous."],
  ["tics", "Tics and Tourette syndrome are not blanket contraindications to every stimulant, and individual effects vary.", "Establish baseline tic burden, discuss options, monitor change, and consider alpha2 agonists or another strategy when clinically appropriate.", "Automatically denying effective treatment solely because a patient has a stable tic disorder reflects outdated overgeneralization."],
  ["atomoxetine", "Atomoxetine selectively inhibits norepinephrine reuptake, has delayed benefit, and is metabolized primarily by CYP2D6.", "Account for CYP2D6 inhibitors or poor metabolizer status, monitor blood pressure, pulse, liver symptoms, urinary or sexual effects, and pediatric suicidal thinking.", "Expecting same day symptom relief can lead to premature abandonment or unsafe dose escalation."],
  ["atomoxetine-pgx", "CYP2D6 poor metabolizers and patients taking strong CYP2D6 inhibitors can have higher atomoxetine exposure and need slower dose adjustment.", "Interpret genotype or inhibitor status with clinical response, adverse effects, dose, age, and labeling guidance.", "Using pharmacogenomics without reviewing fluoxetine or paroxetine exposure can miss a clinically similar phenoconversion."],
  ["alpha2-agonists", "Guanfacine extended release and clonidine extended release reduce sympathetic signaling and can help ADHD, sleep initiation, hyperarousal, or tics in selected patients.", "Monitor sedation, dizziness, blood pressure, pulse, adherence, and taper gradually to avoid rebound hypertension.", "Abruptly stopping an alpha2 agonist can produce clinically important rebound hypertension."],
  ["viloxazine", "Viloxazine extended release is a nonstimulant approved for ADHD in adults and children age six and older and carries a warning for suicidal thoughts and behaviors.", "Review CYP1A2 interactions, blood pressure, pulse, sleep, appetite, mood, and product specific titration.", "Treating viloxazine as interchangeable with atomoxetine ignores different interactions, dosing, and labeling."],
  ["formulations", "Immediate release, extended release, liquid, chewable, orally disintegrating, capsule, transdermal, and prodrug options solve different coverage and administration problems.", "Match onset, school or work day, evening needs, swallowing, food, privacy, adherence, and misuse risk to an exact formulation.", "Crushing or opening a modified release product without verified instructions can destroy its release design."],
  ["special-populations", "Age, pregnancy, lactation, kidney or liver function, cardiovascular disease, substance use, and coexisting psychiatric illness change ADHD treatment choices.", "Use shared decisions and product specific evidence while avoiding abrupt changes that destabilize function.", "Applying one pediatric algorithm unchanged to pregnancy or an older adult ignores different risks and evidence."],
  ["monitoring", "Longitudinal ADHD care tracks symptoms, function, duration of coverage, adverse effects, vital signs, growth, adherence, misuse, and patient goals.", "Document the target, baseline, dose change, observation interval, reporters, and criteria for continuation or change.", "A refill without functional or safety review is not adequate chronic care."],
  ["recovery", "Successful treatment improves safety, learning, work, relationships, self management, and quality of life while preserving identity and autonomy.", "Combine medication when indicated with skills, accommodations, environmental supports, sleep, and treatment of comorbidity.", "Defining success only as sitting still can prioritize observer convenience over the patient's meaningful outcomes."],
  ["stimulant-family-response", "Response and tolerability can differ between methylphenidate and amphetamine families even when both increase catecholamine signaling.", "When one stimulant family is ineffective or poorly tolerated after an interpretable trial, reassess diagnosis and targets, then consider the other family or a nonstimulant according to patient context.", "Escalating one stimulant indefinitely without reassessing duration, adherence, comorbidity, and family-specific response can add harm without improving function."],
  ["nonstimulant-selection", "Atomoxetine, guanfacine extended release, clonidine extended release, and viloxazine extended release differ in onset, interactions, hemodynamic effects, sedation, mood warnings, organ considerations, and evidence boundaries.", "Select the exact nonstimulant through target symptoms, urgency, comorbidity, interaction risk, administration needs, and the patient's preference.", "Calling all nonstimulants interchangeable can produce incorrect titration, monitoring, and expectations about onset."],
  ["evidence-boundaries", "ADHD evidence and product labeling vary by age, formulation, pregnancy and lactation context, organ function, cardiovascular risk, and coexisting psychiatric or substance-use conditions.", "State what is known for the exact patient and product, make uncertainty visible, and coordinate specialist input when risk exceeds routine care.", "Extending a pediatric trial or one product label to every age and reproductive context can create false certainty."],
  ["care-transition", "School, home, work, pharmacy, primary care, behavioral health, and specialty teams may observe different benefits, adverse effects, coverage gaps, and access barriers.", "Use one shared plan that records target functions, exact product and schedule, observations from relevant settings, controlled-substance safeguards, follow-up timing, and responsible ownership.", "Transferring care with only a drug name and dose can lose formulation, monitoring, refill, diversion, and functional-outcome information."],
];

const reviewLessonByConcept = {
  diagnosis: "diagnosis-lifespan",
  presentation: "diagnosis-lifespan",
  "adult-adhd": "diagnosis-lifespan",
  differential: "differential-baseline",
  baseline: "differential-baseline",
  "behavioral-care": "behavior-environment",
  preschool: "behavior-environment",
  "stimulant-mechanism": "stimulant-pharmacology",
  "stimulant-family-response": "stimulant-pharmacology",
  methylphenidate: "formulation-engineering",
  amphetamine: "formulation-engineering",
  formulations: "formulation-engineering",
  titration: "titration-monitoring",
  cardiovascular: "titration-monitoring",
  "growth-appetite": "titration-monitoring",
  sleep: "titration-monitoring",
  monitoring: "titration-monitoring",
  misuse: "stimulant-stewardship",
  "psychiatric-safety": "stimulant-stewardship",
  atomoxetine: "atomoxetine-pgx",
  "atomoxetine-pgx": "atomoxetine-pgx",
  "alpha2-agonists": "alpha2-agonists",
  tics: "alpha2-agonists",
  viloxazine: "viloxazine-selection",
  "nonstimulant-selection": "viloxazine-selection",
  "special-populations": "special-populations",
  "evidence-boundaries": "special-populations",
  recovery: "integrated-outcomes",
  "care-transition": "integrated-outcomes",
};

const dimensions = [
  ["principle", "Which statement is most accurate?", 0],
  ["action", "Which action best applies the evidence?", 1],
  ["integration", "Which plan demonstrates the strongest clinical reasoning?", 1],
  ["hazard", "Which error creates the greatest avoidable risk?", 2],
];

const distractors = [
  "Use one symptom or rating score as the complete diagnosis.",
  "Choose treatment without reviewing function, safety, interactions, or preference.",
  "Change several therapies without targets, monitoring, or follow-up.",
];

export const attentionDeficitHyperactivityDisorderQuestionBank = concepts.flatMap(
  ([slug, principle, action, hazard], conceptIndex) =>
    dimensions.map(([dimension, stem, answerType], dimensionIndex) => {
      const correct = [principle, action, hazard][answerType];
      const choices =
        dimension === "hazard"
          ? [hazard, principle, action, distractors[(conceptIndex + dimensionIndex) % 3]]
          : [correct, hazard, distractors[(conceptIndex + dimensionIndex) % 3], distractors[(conceptIndex + dimensionIndex + 1) % 3]];

      return {
        id: `attention-deficit-hyperactivity-disorder-${String(conceptIndex * 4 + dimensionIndex + 1).padStart(3, "0")}`,
        question: `${stem} Focus: ${slug.replaceAll("-", " ")}.`,
        choices,
        answer: 0,
        rationale: `${principle} ${action}`,
        reviewHref: `#${reviewLessonByConcept[slug]}`,
        difficulty: dimensionIndex < 2 ? "foundational" : "advanced",
      };
    }),
);
