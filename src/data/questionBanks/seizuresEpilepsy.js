const concepts = [
  ["seizure-epilepsy", "A seizure is a transient clinical event from abnormal excessive or synchronous neuronal activity, while epilepsy is a disease defined by an enduring predisposition to recurrent unprovoked seizures.", "Separate acute symptomatic seizures from unprovoked seizures and identify whether the patient meets a clinical definition of epilepsy.", "Calling every provoked seizure epilepsy can create unnecessary long-term treatment and obscure a reversible cause."],
  ["acute-causes", "Hypoglycemia, electrolyte disturbance, infection, stroke, toxic exposure, withdrawal, and medication effects can provoke acute symptomatic seizures.", "Stabilize the patient and correct the time-linked cause while evaluating whether antiseizure treatment is temporarily or persistently needed.", "Escalating chronic antiseizure therapy without correcting hypoglycemia or withdrawal leaves the immediate driver untreated."],
  ["classification", "The 2025 ILAE classes are focal, generalized, unknown whether focal or generalized, and unclassified.", "Describe consciousness and the chronological sequence of observable and non-observable manifestations after assigning the best-supported class.", "Forcing a seizure into a focal or generalized category when evidence is insufficient can lead to the wrong medication choice."],
  ["consciousness", "For focal and unknown-class seizures, consciousness is assessed through both awareness and responsiveness.", "Document what the person remembered, whether meaningful responses were possible, and how the event evolved.", "Using motor appearance alone to infer consciousness loses clinically important classification information."],
  ["diagnosis", "Epilepsy evaluation integrates witness history, event video when available, neurologic examination, EEG, imaging, laboratory data, and the probability of recurrence.", "Build a precise event timeline and use tests to support or challenge the clinical hypothesis rather than treating an EEG in isolation.", "A normal routine EEG does not exclude epilepsy, and an incidental abnormality does not prove that every spell is epileptic."],
  ["mimics", "Syncope, functional seizures, migraine, sleep disorders, movement disorders, and metabolic events can mimic epilepsy.", "Compare triggers, prodrome, duration, movements, color change, injury, recovery, and objective findings before assigning treatment.", "Labeling functional seizures as intentional behavior or escalating antiseizure drugs after diagnostic confirmation causes harm."],
  ["network-mechanisms", "Seizures arise when excitation, inhibition, ion-channel behavior, synaptic release, and network synchronization become pathologically imbalanced.", "Connect a drug target to firing or transmitter release while recognizing that clinical selection depends on seizure type and the whole patient.", "Choosing a drug solely from an isolated molecular target ignores syndrome-specific seizure aggravation and patient risk."],
  ["sodium-channels", "Use-dependent sodium-channel modulation limits sustained high-frequency neuronal firing.", "Recognize carbamazepine, oxcarbazepine, eslicarbazepine, phenytoin, fosphenytoin, lamotrigine, and lacosamide as clinically distinct sodium-channel agents.", "Treating all sodium-channel agents as interchangeable ignores cardiac, genetic, interaction, organ-function, and seizure-type differences."],
  ["calcium-sv2a", "T-type calcium-channel inhibition is central to ethosuximide in absence seizures, while SV2A ligands modulate synaptic vesicle release.", "Match ethosuximide to appropriate absence epilepsy and use levetiracetam or brivaracetam with behavioral and kidney-function awareness.", "Using ethosuximide when generalized tonic-clonic seizures also require control leaves major seizure risk untreated."],
  ["gaba-glutamate", "Benzodiazepines and barbiturates enhance GABAergic inhibition, while several broad-spectrum agents affect multiple inhibitory and excitatory pathways.", "Use rapid GABA-A modulation for seizure rescue and choose chronic therapy by seizure class, adverse effects, kinetics, and comorbidity.", "Confusing emergency benzodiazepine rescue with a complete long-term plan can produce recurrence, sedation, and dependence risk."],
  ["initial-selection", "Initial antiseizure medication selection must fit the seizure class, epilepsy syndrome, age, organ function, comorbidities, interactions, reproductive potential, and patient priorities.", "Prefer monotherapy when feasible, titrate to an interpretable target, and measure seizure control and toxicity before adding complexity.", "Using a narrow-spectrum drug in an incompatible generalized epilepsy can aggravate seizures."],
  ["broad-spectrum", "Lamotrigine, levetiracetam, topiramate, and valproate have broad-spectrum activity but markedly different safety profiles.", "Use syndrome fit plus mood, weight, cognition, kidney and liver function, pregnancy potential, interactions, and titration speed to distinguish them.", "Calling broad-spectrum drugs equivalent can expose a patient to avoidable fetal, psychiatric, cognitive, metabolic, or hepatic harm."],
  ["lamotrigine", "Lamotrigine requires slow, interaction-specific titration because rapid escalation and valproate exposure increase serious-rash risk.", "Restart according to labeling after a sufficiently long interruption and evaluate structural or conduction heart disease before use when clinically relevant.", "Resuming the prior full dose after a prolonged interruption can sharply increase severe-rash risk."],
  ["levetiracetam", "Levetiracetam has few metabolic interactions and renal elimination, but irritability, aggression, mood change, somnolence, and coordination effects matter.", "Adjust for kidney function and ask the patient and family directly about behavior after initiation or dose change.", "Assuming a clean interaction profile means no monitoring can miss severe behavioral toxicity."],
  ["valproate", "Valproate is broad-spectrum but carries major hepatic, pancreatic, hematologic, metabolic, mitochondrial, reproductive, and neurodevelopmental risks.", "Avoid valproate in people who may become pregnant when clinically feasible and use explicit shared planning when no acceptable alternative controls seizures.", "Stopping effective valproate abruptly during pregnancy can provoke convulsive seizures and endanger both pregnant patient and fetus."],
  ["topiramate-zonisamide", "Topiramate and zonisamide can cause metabolic acidosis, nephrolithiasis, cognitive slowing, weight loss, and reduced sweating with hyperthermia risk.", "Monitor bicarbonate, kidney function, hydration, cognition, vision symptoms, heat exposure, and reproductive considerations.", "Ignoring acute eye pain or visual change can delay treatment of a vision-threatening reaction."],
  ["carbamazepine-oxcarbazepine", "Carbamazepine and related agents differ in enzyme induction, active metabolites, sodium effects, hematologic risk, hepatic risk, and genetic hypersensitivity.", "Review ancestry-informed HLA testing, baseline laboratory data, interactions, sodium, rash, and seizure type before and during therapy.", "Starting carbamazepine without accounting for HLA-B*15:02 in an at-risk ancestry can expose the patient to preventable SJS or TEN."],
  ["phenytoin", "Phenytoin has saturable metabolism, extensive protein binding, concentration-dependent toxicity, formulation differences, and many interactions.", "Use small maintenance adjustments, interpret free exposure when binding is altered, and distinguish total concentration from pharmacologically active unbound drug.", "Making a large dose increase near saturation can cause a disproportionate concentration rise and severe toxicity."],
  ["drug-levels", "Antiseizure drug concentrations are most useful when tied to a clinical question such as baseline response, adherence, toxicity, interaction, pregnancy, organ change, or status epilepticus.", "Interpret timing, formulation, dose history, albumin, kidney and liver function, interacting drugs, and the patient's own effective concentration.", "Treating a population reference range as a dose target without clinical context can destabilize a seizure-free patient."],
  ["interactions", "Enzyme-inducing antiseizure drugs can reduce hormonal contraceptive and other medication exposure, while valproate can substantially increase lamotrigine exposure.", "Build a complete interaction map that includes contraceptive directionality, anticoagulants, psychotropics, rescue sedatives, and over-the-counter products.", "Adding estrogen-containing contraception without anticipating lower lamotrigine exposure can lead to loss of seizure control."],
  ["pregnancy", "The 2024 AAN, AES, and SMFM guideline prioritizes seizure control and fetal outcomes through preconception planning, appropriate drug selection, and at least 0.4 mg folic acid daily.", "Consider lamotrigine, levetiracetam, or oxcarbazepine when appropriate, avoid valproate when clinically feasible, and monitor changing exposure during and after pregnancy.", "Replacing an effective drug reflexively after pregnancy begins can provoke dangerous convulsive seizures."],
  ["status", "Convulsive status epilepticus requires immediate stabilization and treatment when a convulsive seizure reaches five minutes or recurrent seizures occur without recovery.", "Time the event, support airway and circulation, check glucose, give an adequate benzodiazepine promptly, and move to an accepted second-line load if seizure activity continues.", "Underdosing the first benzodiazepine or waiting for prolonged injury before treatment reduces the chance of rapid control."],
  ["rescue", "Community rescue products include patient-specific rectal or intranasal benzodiazepines for seizure clusters or prolonged events.", "Create a written action plan defining when to administer, when a second dose is permitted, when to call emergency services, and how to avoid respiratory depressant stacking.", "Dispensing a rescue product without caregiver demonstration and a response threshold can make it unusable during an emergency."],
  ["refractory", "Persistent seizures after adequate emergent first-line and second-line therapy require critical-care escalation, continuous EEG, anesthetic therapy, and cause-directed management.", "Verify actual doses and timing, search for toxic, infectious, metabolic, structural, and adherence causes, and anticipate airway support.", "Repeated small rescue doses without escalation can prolong status while increasing respiratory risk."],
  ["longitudinal", "Successful epilepsy care balances seizure freedom, adverse effects, cognition, mood, sleep, bone and reproductive health, driving and safety, adherence, and the person's goals.", "Use a seizure and exposure record, address SUDEP risk through convulsive-seizure control and adherence, and consider surgery, devices, or diet for drug-resistant epilepsy.", "Continuing ineffective medication combinations indefinitely can delay evaluation for potentially effective non-drug treatment."],
  ["acute-versus-unprovoked", "An acute symptomatic seizure is temporally linked to a reversible systemic or neurologic insult, while an unprovoked seizure occurs without an immediate provoking condition.", "Document the timing and strength of the provoking factor before assigning recurrence risk or committing the patient to long-term antiseizure therapy.", "Calling a remote risk factor an immediate provoking cause can underestimate recurrence risk and delay an epilepsy evaluation."],
  ["selection-audit", "A defensible initial regimen fits the seizure class and syndrome while accounting for age, organ function, comorbidities, interactions, reproductive goals, access, and the patient's priorities.", "State why the selected agent fits this patient, define a titration and monitoring plan, and identify the finding that would prompt a change.", "Selecting from seizure type alone can produce avoidable psychiatric, cognitive, metabolic, reproductive, or interaction harm."],
  ["broad-spectrum-tradeoffs", "Broad-spectrum activity does not make lamotrigine, levetiracetam, topiramate, and valproate clinically interchangeable.", "Compare titration speed, mood and cognitive effects, weight, organ clearance, reproductive risk, interactions, and syndrome-specific efficacy before choosing among broad-spectrum options.", "Using the phrase broad spectrum as the entire treatment rationale hides major differences in patient-specific benefit and harm."],
  ["interaction-reconciliation", "Epilepsy interaction review must include enzyme induction or inhibition, hormonal contraception, anticoagulants, psychotropics, rescue sedatives, alcohol, supplements, and changes in organ function.", "Reconcile every exposure at initiation, transition, pregnancy planning, hospital discharge, and any unexplained change in seizure control or toxicity.", "Checking interactions only when the first prescription is written can miss clinically important changes in exposure later."],
  ["reproductive-documentation", "Reproductive care requires shared planning before conception, preservation of seizure control, current product-specific pregnancy and lactation evidence, folic acid, and exposure monitoring when pharmacokinetics change.", "Document the patient's goals, chosen regimen, counseling, baseline effective exposure when useful, monitoring schedule, and postpartum dose plan.", "Abruptly stopping an effective antiseizure medicine after pregnancy recognition can expose both patient and fetus to dangerous convulsive seizures."],
  ["rescue-readiness", "A rescue prescription is incomplete until caregivers can recognize the treatment threshold, administer the exact product, monitor response and breathing, and follow second-dose and emergency instructions.", "Use teach-back and demonstration, then place the same clear action plan in the home, school, workplace, and health record when appropriate.", "Assuming a caregiver can infer product-specific technique during a seizure cluster can delay treatment or cause unsafe repeat dosing."],
  ["quality-of-life", "Seizure outcomes include participation, cognition, mood, sleep, medication burden, injuries, independence, stigma, and confidence in the emergency plan as well as seizure count.", "Ask what the patient is unable or afraid to do, then align treatment, safety counseling, referrals, and follow-up with the outcomes that matter to that person.", "Declaring success from a lower seizure count alone can miss disabling adverse effects and major restrictions in daily life."],
];

const dimensions = [
  ["principle", "Which statement is most accurate?", 0],
  ["action", "Which action best applies the evidence?", 1],
  ["integration", "Which plan demonstrates the strongest clinical reasoning?", 1],
  ["hazard", "Which error creates the greatest avoidable risk?", 2],
];
const distractors = [
  "Choose treatment from one symptom without classifying the seizure or reviewing reversible causes.",
  "Change several medicines without verifying dose, timing, adherence, interactions, or follow-up.",
  "Use a population reference range as the only measure of efficacy and safety.",
];

const reviewSections = {
  "acute-causes": "classification-diagnosis",
  classification: "classification-diagnosis",
  consciousness: "classification-diagnosis",
  diagnosis: "classification-diagnosis",
  mimics: "classification-diagnosis",
  "network-mechanisms": "network-pharmacology",
  "sodium-channels": "network-pharmacology",
  "calcium-sv2a": "network-pharmacology",
  "gaba-glutamate": "network-pharmacology",
  "initial-selection": "drug-selection",
  lamotrigine: "focused-agents",
  levetiracetam: "focused-agents",
  valproate: "focused-agents",
  "topiramate-zonisamide": "focused-agents",
  "carbamazepine-oxcarbazepine": "focused-agents",
  phenytoin: "phenytoin-levels",
  "drug-levels": "phenytoin-levels",
  interactions: "interactions-safety",
  pregnancy: "reproductive-care",
  status: "status-epilepticus",
  refractory: "status-epilepticus",
  rescue: "rescue-first-aid",
  longitudinal: "longitudinal-care",
  "acute-versus-unprovoked": "seizure-epilepsy",
  "selection-audit": "drug-selection",
  "broad-spectrum-tradeoffs": "broad-spectrum",
  "interaction-reconciliation": "interactions-safety",
  "reproductive-documentation": "reproductive-care",
  "rescue-readiness": "rescue-first-aid",
  "quality-of-life": "longitudinal-care",
};

export const seizuresEpilepsyQuestionBank = concepts.flatMap(([slug, principle, action, hazard], i) =>
  dimensions.map(([dimension, stem, type], j) => {
    const correct = [principle, action, hazard][type];
    const choices = dimension === "hazard"
      ? [hazard, principle, action, distractors[(i + j) % 3]]
      : [correct, hazard, distractors[(i + j) % 3], distractors[(i + j + 1) % 3]];
    return {
      id: `seizures-epilepsy-${String(i * 4 + j + 1).padStart(3, "0")}`,
      question: `${stem} Focus: ${slug.replaceAll("-", " ")}.`,
      choices,
      answer: 0,
      rationale: `${principle} ${action}`,
      reviewHref: `#${reviewSections[slug] ?? slug}`,
      difficulty: j < 2 ? "foundational" : "advanced",
    };
  }),
);
