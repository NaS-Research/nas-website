const concepts = [
  ["diagnosis", "An anxiety disorder involves fear, worry, avoidance, or physiologic arousal that is excessive, persistent, distressing, and functionally impairing.", "Identify the feared outcome, trigger pattern, duration, avoidance, safety behaviors, and functional cost before selecting treatment.", "Labeling ordinary situational stress as a disorder can expose a patient to treatment without a valid target."],
  ["gad", "Generalized anxiety disorder centers on difficult to control worry across multiple domains with associated cognitive and physical symptoms.", "Confirm broad worry, chronicity, impairment, and alternatives rather than using somatic symptoms alone.", "Restricting the assessment to palpitations can miss the pervasive worry and tension that define GAD."],
  ["panic", "Panic attacks are abrupt surges of intense fear or discomfort, while panic disorder requires recurrent unexpected attacks plus persistent concern or maladaptive behavior change.", "Exclude acute medical danger, then distinguish an isolated panic attack from the longitudinal disorder.", "Assuming every episode of chest pain and tachycardia is psychiatric can miss a medical emergency."],
  ["social-anxiety", "Social anxiety disorder involves marked fear of scrutiny or negative evaluation with avoidance or endurance under intense distress.", "Clarify whether fear is generalized across social situations or limited to performance and whether it causes impairment.", "Treating ordinary preference for solitude as social anxiety ignores fear, avoidance, and impairment."],
  ["differential", "Thyroid disease, arrhythmia, asthma, hypoglycemia, seizures, sleep disorders, substances, withdrawal, medications, trauma, depression, bipolar disorder, OCD, and psychosis can mimic or coexist with anxiety.", "Use history, medication and substance review, examination, and targeted testing based on the presentation.", "A positive GAD-7 score does not exclude hyperthyroidism, stimulant exposure, or bipolar activation."],
  ["risk", "Anxiety can coexist with suicide risk, self harm, substance use, functional collapse, intimate partner violence, and inability to care for self.", "Assess safety directly and match the setting and urgency to the actual risk.", "Visible fear does not make a patient safe from suicide or dangerous withdrawal."],
  ["cbt", "Cognitive behavioral therapy targets interpretations, avoidance, safety behaviors, physiologic arousal, and skill practice through structured exposure and cognitive work.", "Match the protocol to the disorder and include between session practice and outcome measurement.", "Calling unstructured reassurance CBT can reinforce dependence and avoidance rather than learning."],
  ["exposure", "Exposure therapy creates corrective learning by approaching feared cues without relying on the safety behavior that maintains fear.", "Build a collaborative hierarchy and repeat tolerable exposures while tracking expectancy and learning.", "Forcing overwhelming exposure without consent or preparation can increase dropout and mistrust."],
  ["ssri-snri", "SSRIs and SNRIs are core medication options for several anxiety disorders, with benefit developing gradually and early activation possible.", "Start thoughtfully, counsel on the time course, monitor activation and suicidality, and continue an effective regimen long enough to consolidate remission.", "Stopping after several symptom free days can produce withdrawal and early relapse."],
  ["selection", "Medication choice depends on diagnosis, prior response, comorbidity, interactions, organ function, pregnancy, overdose risk, adverse effects, and patient preference.", "Select an agent with evidence for the specific disorder and build a monitoring and discontinuation plan before prescribing.", "Assuming every antidepressant has equal evidence for every anxiety disorder can create ineffective care."],
  ["activation", "Antidepressants can initially increase anxiety, agitation, insomnia, or restlessness and can reveal mania in a patient with bipolar vulnerability.", "Use anticipatory counseling, measured titration, and rapid reassessment for severe activation, akathisia, suicidality, or manic symptoms.", "Automatically escalating an antidepressant during emerging mania can amplify harm."],
  ["buspirone", "Buspirone is a 5-HT1A partial agonist used for GAD, requires scheduled dosing, and does not provide immediate rescue.", "Take consistently with or without food, account for CYP3A4 interactions, and allow an adequate trial.", "Using buspirone as needed for a panic attack misunderstands its delayed pharmacology."],
  ["buspirone-interactions", "Strong CYP3A4 inhibitors can raise buspirone exposure, inducers can lower it, and serotonergic combinations can increase serotonin toxicity risk.", "Review grapefruit, azoles, macrolides, verapamil or diltiazem, rifampin, anticonvulsant inducers, MAO inhibitors, and other serotonergic drugs.", "Adding buspirone without reviewing linezolid or an MAO inhibitor can create a dangerous serotonergic interaction."],
  ["benzodiazepine-mechanism", "Benzodiazepines positively modulate GABA-A receptors and can rapidly reduce arousal while causing sedation, psychomotor impairment, memory effects, and respiratory risk with other depressants.", "Use the lowest justified exposure for a defined indication and protect driving, falls, cognition, and respiratory safety.", "Rapid relief does not establish long term disease modification."],
  ["benzodiazepine-risk", "FDA boxed warnings cover benzodiazepine abuse, misuse, addiction, physical dependence, and withdrawal, including life threatening reactions.", "Assess risk before and during treatment and avoid combining with opioids, alcohol, or nonprescribed depressants whenever possible.", "Assuming a prescribed dose cannot cause dependence contradicts current FDA safety guidance."],
  ["benzodiazepine-taper", "Physical dependence can develop after days to weeks and abrupt reduction can cause rebound anxiety, autonomic symptoms, delirium, or seizures.", "Use an individualized gradual taper that can slow or pause according to symptoms and clinical risk.", "A universal rapid taper can cause avoidable severe withdrawal."],
  ["panic-treatment", "CBT is a central treatment for panic disorder, and SSRIs, SNRIs, or selected TCAs have longer term evidence.", "Teach the panic cycle, use interoceptive and situational exposure, and choose medication according to safety and preference.", "Long term benzodiazepine monotherapy can preserve avoidance and carries dependence risk."],
  ["performance-anxiety", "Propranolol can reduce peripheral adrenergic symptoms in selected performance only situations but does not treat generalized social fear.", "Screen for asthma, bradycardia, hypotension, conduction disease, diabetes masking concerns, and interacting drugs before use.", "Giving propranolol to a patient with uncontrolled asthma for a speech can provoke bronchospasm."],
  ["hydroxyzine", "Hydroxyzine can reduce anxiety rapidly through sedating antihistamine effects but carries anticholinergic, cognitive, driving, and QT related burdens.", "Use short term and patient specific reasoning rather than presenting sedation as treatment of the underlying disorder.", "Stacking hydroxyzine with alcohol or other sedatives can produce dangerous impairment."],
  ["pregabalin", "Pregabalin has evidence for GAD in some jurisdictions but is not FDA approved for anxiety and carries sedation, edema, misuse, and pregnancy considerations.", "Distinguish evidence from U.S. labeling and review kidney function, respiratory depressants, pregnancy, and misuse risk.", "Calling pregabalin a universal first line FDA approved anxiety drug is inaccurate."],
  ["older-adults", "Older adults have greater vulnerability to benzodiazepine and anticholinergic cognitive impairment, delirium, falls, fractures, and accumulation.", "Prefer safer psychological and pharmacologic strategies and review kidney, liver, falls, cognition, and the full sedative burden.", "Choosing a benzodiazepine solely because it undergoes glucuronidation does not remove class risk."],
  ["pregnancy", "Perinatal anxiety care balances untreated illness with medication specific fetal, neonatal, maternal, and lactation evidence.", "Use shared decisions, psychotherapy, the minimum effective regimen when medication is needed, and coordinated obstetric and psychiatric follow-up.", "Obsolete pregnancy letters cannot substitute for drug specific risk and benefit assessment."],
  ["natural-products", "Natural products marketed for anxiety can have uncertain efficacy, variable composition, CYP interactions, serotonergic effects, sedation, or hepatotoxicity.", "Ask explicitly about kava, valerian, St. John's wort, cannabis, and supplements and evaluate product and interaction risk.", "Natural origin does not prove safety or manufacturing quality."],
  ["nonresponse", "Apparent treatment resistance can reflect the wrong diagnosis, inadequate dose or duration, poor adherence, ongoing substances, untreated comorbidity, or avoidance that therapy has not addressed.", "Audit the diagnosis, exposure, psychotherapy fidelity, function, safety, and environmental barriers before adding complexity.", "Layering sedatives without an exposure audit can create harm while preserving the original problem."],
  ["recovery", "Recovery includes reduced fear and worry, restored function, flexible approach behavior, sleep, relationships, work, and confidence managing recurrence.", "Track disorder specific symptoms alongside avoidance, function, adverse effects, patient goals, and a relapse plan.", "A lower symptom score without restored function does not prove full recovery."],
  ["sequenced-nonresponse", "A valid nonresponse assessment reconstructs diagnosis, delivered psychotherapy, medication dose and duration, adherence, substance exposure, comorbidity, avoidance, function, and access barriers before declaring resistance.", "Correct the identified limitation, change one interpretable part of the plan, and define the target, review interval, and threshold for specialist escalation.", "Adding several sedating agents at once prevents causal learning and can worsen cognition, falls, driving, dependence, or respiratory risk."],
  ["relapse-plan", "Anxiety relapse prevention connects early warning signs, approach behaviors, practiced skills, medication continuity, sleep, substance use, supports, and a clear response to recurrence.", "Write a patient-owned plan that identifies what to resume independently, when to contact the care team, and what symptoms require urgent evaluation.", "Ending treatment immediately after early symptom relief without consolidating learning or planning for recurrence increases avoidable relapse risk."],
];

const reviewLessonByConcept = {
  diagnosis: "syndrome-map",
  gad: "syndrome-map",
  differential: "differential-risk",
  risk: "differential-risk",
  cbt: "cbt-exposure",
  exposure: "cbt-exposure",
  selection: "stepped-care",
  "natural-products": "stepped-care",
  "ssri-snri": "ssri-snri",
  activation: "ssri-snri",
  buspirone: "buspirone",
  "buspirone-interactions": "buspirone",
  "benzodiazepine-mechanism": "benzodiazepines",
  "benzodiazepine-risk": "benzodiazepines",
  "benzodiazepine-taper": "benzodiazepines",
  panic: "panic-disorder",
  "panic-treatment": "panic-disorder",
  "social-anxiety": "social-anxiety",
  "performance-anxiety": "social-anxiety",
  hydroxyzine: "special-populations",
  pregabalin: "special-populations",
  "older-adults": "special-populations",
  pregnancy: "special-populations",
  nonresponse: "nonresponse",
  "sequenced-nonresponse": "nonresponse",
  recovery: "integrated-recovery",
  "relapse-plan": "integrated-recovery",
};

const dimensions = [
  ["principle", "Which statement is most accurate?", 0],
  ["action", "Which action best applies the evidence?", 1],
  ["integration", "Which plan demonstrates the strongest clinical reasoning?", 1],
  ["hazard", "Which error creates the greatest avoidable risk?", 2],
];
const distractors = [
  "Use one screening score as the complete diagnosis.",
  "Choose treatment without reviewing safety, interactions, function, or preference.",
  "Change several therapies without targets, exposure verification, or follow-up.",
];

export const anxietyDisordersQuestionBank = concepts.flatMap(([slug, principle, action, hazard], i) =>
  dimensions.map(([dimension, stem, type], j) => {
    const correct = [principle, action, hazard][type];
    const choices = dimension === "hazard"
      ? [hazard, principle, action, distractors[(i + j) % 3]]
      : [correct, hazard, distractors[(i + j) % 3], distractors[(i + j + 1) % 3]];
    return {
      id: `anxiety-disorders-${String(i * 4 + j + 1).padStart(3, "0")}`,
      question: `${stem} Focus: ${slug.replaceAll("-", " ")}.`,
      choices,
      answer: 0,
      rationale: `${principle} ${action}`,
      reviewHref: `#${reviewLessonByConcept[slug]}`,
      difficulty: j < 2 ? "foundational" : "advanced",
    };
  }),
);
