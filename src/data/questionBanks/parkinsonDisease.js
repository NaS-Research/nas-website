const concepts = [
  ["motor-circuit", "Parkinson disease reflects progressive nigrostriatal dopamine loss that shifts basal ganglia output toward reduced movement.", "Connect bradykinesia plus rest tremor or rigidity to the motor circuit while screening nonmotor disease.", "Treating tremor alone can miss disabling bradykinesia, gait dysfunction, and nonmotor burden."],
  ["diagnosis", "Parkinson disease is a clinical diagnosis built from parkinsonism, supportive features, exclusion of alternatives, and longitudinal response.", "Refer suspected disease untreated when practical and reconsider the diagnosis when atypical features emerge.", "Starting a dopamine blocker before specialist assessment can obscure the examination and worsen symptoms."],
  ["differential", "Drug-induced parkinsonism, essential tremor, vascular disease, atypical parkinsonism, normal pressure hydrocephalus, and functional disorders require different plans.", "Review time course, symmetry, gait, autonomic failure, cognition, eye movements, medication exposure, and levodopa response.", "Calling every tremor Parkinson disease creates avoidable exposure and diagnostic delay."],
  ["nonmotor", "Constipation, anosmia, REM sleep behavior disorder, depression, pain, orthostasis, urinary symptoms, and cognitive change can precede or dominate motor disability.", "Measure nonmotor symptoms and function at every treatment review.", "A normal tremor score does not prove adequate whole-person control."],
  ["levodopa-selection", "Levodopa provides the greatest motor benefit and is preferred when symptoms affect quality of life.", "Choose initial therapy through symptom impact, age, cognition, falls, occupation, adverse-effect vulnerability, and preference.", "Delaying effective levodopa solely to avoid future fluctuations can prolong preventable disability."],
  ["levodopa-mechanism", "Levodopa crosses the blood-brain barrier and becomes dopamine, while carbidopa limits peripheral decarboxylation.", "Use enough carbidopa exposure and titrate the levodopa component to motor response and adverse effects.", "Giving dopamine itself does not restore striatal signaling because dopamine does not cross the blood-brain barrier effectively."],
  ["levodopa-administration", "Protein and iron can reduce or delay levodopa absorption, but meal timing must be balanced against nausea and nutrition.", "Use a consistent administration plan, separate iron when feasible, and individualize protein distribution without causing weight loss.", "Rigidly restricting protein in a frail patient can worsen nutrition more than it improves motor control."],
  ["formulations", "Immediate release, extended release, inhaled levodopa, intestinal gel, and continuous subcutaneous foslevodopa and foscarbidopa solve different fluctuation problems.", "Match formulation kinetics and device burden to the pattern of off time, swallowing, dexterity, support, and goals.", "Converting formulations milligram for milligram without product guidance can cause underexposure or toxicity."],
  ["wearing-off", "Predictable end-of-dose wearing off reflects shortening levodopa benefit rather than medication failure.", "Use a timed symptom and dose diary before changing interval, formulation, or adjunctive therapy.", "Escalating every dose without mapping timing can amplify peak-dose dyskinesia."],
  ["dyskinesia", "Levodopa-related dyskinesia often reflects pulsatile exposure and peak dopaminergic effect.", "Distinguish peak-dose, diphasic, and off dystonia before adjusting levodopa or adding amantadine.", "Labeling every involuntary movement tardive dyskinesia leads to the wrong treatment."],
  ["dopamine-agonists", "Pramipexole, ropinirole, and rotigotine directly stimulate dopamine receptors but cause more hallucination, edema, sleepiness, orthostasis, and impulse-control risk than levodopa.", "Use selectively, titrate slowly, adjust renal dosing when required, and ask the patient and family about behavior.", "A negative spontaneous report does not exclude gambling, shopping, eating, or sexual compulsions."],
  ["agonist-withdrawal", "Rapid dopamine agonist reduction can cause anxiety, pain, autonomic symptoms, depression, and severe withdrawal.", "Taper with monitoring and distinguish withdrawal from recurrent parkinsonism.", "Abrupt discontinuation can create a crisis that is not corrected by assuming disease progression."],
  ["mao-b", "Rasagiline, selegiline, and safinamide reduce dopamine metabolism and can provide modest benefit or reduce off time.", "Review product-specific CYP, serotonergic, opioid, hepatic, blood-pressure, and timing considerations.", "Applying one universal interaction rule to every MAO-B inhibitor ignores dose and product-specific labeling."],
  ["comt", "Entacapone, opicapone, and tolcapone prolong levodopa effect by inhibiting COMT.", "Use them only with levodopa, anticipate dyskinesia, and reduce levodopa when needed.", "Tolcapone without liver-risk controls exposes a patient to avoidable severe hepatotoxicity."],
  ["amantadine", "Amantadine can reduce levodopa-induced dyskinesia and selected off time but accumulates in kidney impairment.", "Match formulation, renal function, hallucination risk, edema, orthostasis, and livedo reticularis to the patient.", "Using an unchanged dose during renal decline can produce confusion and hallucinations."],
  ["anticholinergics", "Benztropine and trihexyphenidyl have a narrow role for selected tremor in younger patients and substantial cognitive and peripheral anticholinergic burden.", "Avoid routine use in older adults and patients with cognitive, urinary, bowel, ocular, or fall vulnerability.", "Treating gait or cognitive symptoms with anticholinergic escalation can worsen function."],
  ["rescue", "Inhaled levodopa and subcutaneous apomorphine can rescue selected off episodes but do not replace the baseline regimen.", "Confirm ability to recognize off time, administer the product, and manage pulmonary, blood pressure, nausea, or interaction risks.", "Using ondansetron with apomorphine can cause profound hypotension and loss of consciousness."],
  ["advanced-therapy", "Persistent disabling fluctuations despite optimized oral therapy can justify device-aided infusion or deep brain stimulation evaluation.", "Refer early enough to compare levodopa responsiveness, cognition, psychiatric status, gait, support, device burden, and goals.", "Waiting until severe frailty and cognitive decline can remove options that required earlier evaluation."],
  ["psychosis", "Parkinson disease psychosis may reflect disease, delirium, medication burden, sensory impairment, or another cause.", "Treat acute causes, simplify provoking drugs carefully, and use pimavanserin, clozapine, or selected quetiapine reasoning when medication is required.", "Routine D2 blockade with haloperidol can severely worsen motor function."],
  ["orthostasis", "Neurogenic orthostatic hypotension can arise from autonomic disease and be amplified by dopaminergic, antihypertensive, and dehydrating therapies.", "Measure supine and standing blood pressure, review contributors, use nonpharmacologic care, and select medication with supine-hypertension controls.", "Treating only the standing pressure without checking supine pressure can create nocturnal harm."],
  ["swallowing", "Dysphagia and delayed gastric emptying can destabilize nutrition, aspiration risk, and medication delivery.", "Use speech and swallow assessment, medication-formulation review, nutrition support, and aspiration precautions.", "Crushing an unsuitable extended-release product can cause dose failure or toxicity."],
  ["medication-safety", "Dopamine blockers such as metoclopramide, prochlorperazine, and many antipsychotics can worsen parkinsonism.", "Place time-critical Parkinson medicines accurately on admission and screen every new prescription for dopamine blockade.", "Delayed hospital doses can produce immobility, aspiration, distress, and prolonged recovery."],
  ["withdrawal-emergency", "Abrupt levodopa or dopaminergic withdrawal can cause hyperpyrexia, rigidity, confusion, autonomic instability, and elevated creatine kinase.", "Restore dopaminergic therapy when appropriate and treat the syndrome as an emergency while evaluating triggers.", "Assuming severe rigidity after missed doses is ordinary off time can delay lifesaving care."],
  ["rehabilitation", "Exercise, physical therapy, occupational therapy, speech therapy, fall prevention, nutrition, and caregiver support are core disease management.", "Tie pharmacotherapy to gait, speech, swallowing, dexterity, participation, and home safety goals.", "Medication-only care misses modifiable disability and caregiver burden."],
  ["recovery", "Successful care balances on time, dyskinesia, nonmotor symptoms, safety, function, treatment burden, and patient priorities.", "Use timed diaries and shared outcomes to make one interpretable change at a time.", "A lower tremor score with hallucinations and falls is not a successful plan."],
];

const dimensions = [
  ["principle", "Which statement is most accurate?", 0],
  ["action", "Which action best applies the evidence?", 1],
  ["integration", "Which plan demonstrates the strongest clinical reasoning?", 1],
  ["hazard", "Which error creates the greatest avoidable risk?", 2],
];
const distractors = [
  "Use one symptom as the complete diagnosis and treatment target.",
  "Change several therapies without mapping timing, exposure, function, or safety.",
  "Choose a product by class name without reviewing formulation, interactions, or patient capability.",
];

export const parkinsonDiseaseQuestionBank = concepts.flatMap(([slug, principle, action, hazard], i) =>
  dimensions.map(([dimension, stem, type], j) => {
    const correct = [principle, action, hazard][type];
    const choices = dimension === "hazard"
      ? [hazard, principle, action, distractors[(i + j) % 3]]
      : [correct, hazard, distractors[(i + j) % 3], distractors[(i + j + 1) % 3]];
    return {
      id: `parkinson-disease-${String(i * 4 + j + 1).padStart(3, "0")}`,
      question: `${stem} Focus: ${slug.replaceAll("-", " ")}.`,
      choices,
      answer: 0,
      rationale: `${principle} ${action}`,
      reviewHref: `#${slug}`,
      difficulty: j < 2 ? "foundational" : "advanced",
    };
  }),
);
