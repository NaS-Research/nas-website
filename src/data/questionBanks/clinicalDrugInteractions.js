const concepts = [
  ["interaction object and precipitant", "interaction-framework", "The object drug experiences the change while the precipitant causes it.", "Name both roles before predicting direction or management.", "Review every active ingredient, route, dose, timing, and change date.", "Calling both medicines interacting without assigning roles obscures the mechanism.", "Role assignment makes the exposure pathway explicit."],
  ["interaction direction and magnitude", "interaction-framework", "Clinical significance depends on direction, magnitude, certainty, and therapeutic margin.", "Estimate whether benefit, toxicity, or both could change enough to matter.", "Review human exposure data, current labeling, dose, route, duration, and therapeutic index.", "A mechanistic possibility alone does not establish clinical importance.", "Magnitude must be interpreted against the patient's margin of safety."],
  ["interaction onset and offset", "interaction-framework", "Risk can emerge when a precipitant starts, stops, or changes dose.", "Plan monitoring across initiation, steady state, discontinuation, and recovery.", "Review half-lives, inhibition or induction mechanism, adherence, and transition dates.", "Monitoring only on the first day can miss delayed induction or offset.", "Interaction timing follows both exposure and biologic turnover."],
  ["narrow therapeutic index vulnerability", "interaction-framework", "Small exposure changes can matter when the therapeutic margin is narrow.", "Prioritize avoidance, supported dose changes, or concentration and response monitoring.", "Review concentration timing, organ function, response, toxicity, and alternatives.", "A modest fold change can be dismissed even when its consequence is severe.", "Therapeutic margin converts magnitude into clinical risk."],
  ["additive central nervous system depression", "pharmacodynamic-interactions", "Several depressants can impair alertness, airway protection, and ventilation without changing one another's concentrations.", "Reduce avoidable depressants and define sedation and respiratory monitoring.", "Review opioids, benzodiazepines, alcohol, antihistamines, muscle relaxants, sleep apnea, and pulmonary reserve.", "Checking only CYP pathways misses a pharmacodynamic respiratory stack.", "Overlapping physiologic effects can create harm without a kinetic interaction."],
  ["combined bleeding risk", "pharmacodynamic-interactions", "Anticoagulants, antiplatelets, NSAIDs, and selected serotonergic drugs can impair hemostasis through different mechanisms.", "Preserve indicated therapy while removing avoidable exposures and managing bleeding risk.", "Review indication, dose, renal and liver function, prior bleeding, hemoglobin, stool symptoms, and gastroprotection.", "Stopping essential antithrombotic therapy reflexively can exchange bleeding risk for thrombosis.", "Management must balance both sides of hemostasis."],
  ["combined QT risk", "pharmacodynamic-interactions", "QT-active drugs interact with bradycardia, electrolytes, exposure, and cardiac substrate.", "Correct modifiable risks and choose a safer regimen when the repolarization stack is unfavorable.", "Review QTc, QRS, heart rate, potassium, magnesium, kidney function, all QT drugs, and syncope.", "Treating QT risk as a property of one medicine ignores the patient system.", "Torsades risk emerges from combined electrical and exposure factors."],
  ["combined hyperkalemia risk", "pharmacodynamic-interactions", "Potassium-raising medicines can combine with impaired renal excretion and supplements.", "Review necessity and establish potassium and kidney monitoring after changes.", "Review baseline potassium, renal trajectory, volume status, diabetes, RAAS drugs, trimethoprim, and supplements.", "Waiting for symptoms can miss dangerous asymptomatic hyperkalemia.", "Laboratory surveillance detects the physiologic interaction before arrhythmia occurs."],
  ["polyvalent cation chelation", "absorption-interactions", "Selected medicines form poorly absorbed complexes with calcium, magnesium, iron, or aluminum.", "Use the exact product's supported separation instructions or choose another route or agent.", "Review cation product, object drug, formulation, meal timing, tube feeds, and label instructions.", "One universal spacing interval can be too short or unnecessarily burdensome.", "Complex formation and transit vary by product."],
  ["gastric pH interaction", "absorption-interactions", "Acid suppression can reduce dissolution and exposure of selected pH-dependent medicines.", "Verify formulation-specific compatibility and consider a supported alternative.", "Review acid suppressor intensity and timing, object drug solubility, formulation, response, and alternatives.", "Assuming every medicine is affected equally creates unnecessary avoidance.", "pH dependence is a property of the exact product and molecule."],
  ["food effect", "absorption-interactions", "Food can increase, decrease, delay, or stabilize drug exposure.", "Treat administration with or without food as part of the prescribed dose.", "Review meal composition, timing, adherence, formulation, exposure data, and current label.", "Telling every patient to take all medicines on an empty stomach can reduce exposure or tolerance.", "Food effects differ in direction and magnitude."],
  ["feeding tube and formulation interaction", "absorption-interactions", "Crushing or tube delivery can alter release, stability, adsorption, and site of delivery.", "Verify dosage-form integrity, tube location, preparation, flushing, and nutrition timing.", "Review formulation, release mechanism, tube material and location, feeds, clogging, and label instructions.", "Crushing an extended-release or hazardous product can change exposure and safety.", "The administration system becomes part of the pharmacokinetic pathway."],
  ["metabolic inhibition of an active drug", "enzyme-interactions", "Inhibiting an important clearance pathway can raise active parent-drug exposure.", "Assess alternatives or use supported dose and monitoring changes during inhibitor exposure and offset.", "Review substrate fraction, inhibitor potency, route, organ function, toxicity, and half-lives.", "Stopping monitoring when the inhibitor stops can miss delayed normalization.", "Parent exposure follows both pathway contribution and precipitant timing."],
  ["metabolic induction of an active drug", "enzyme-interactions", "Induction can lower exposure and therapeutic effect by increasing clearance.", "Avoid high-risk combinations or monitor response through onset and offset.", "Review inducer potency, treatment duration, object-drug response, concentrations when useful, and replacement options.", "Immediate dose escalation can overshoot when induction later resolves.", "Enzyme expression changes over time."],
  ["inhibition of prodrug activation", "enzyme-interactions", "Blocking an activation pathway can reduce active-metabolite formation despite higher parent exposure.", "Choose a compatible precipitant or an effective alternative object drug when supported.", "Review the required activation enzyme, genotype, inhibitor, clinical response, and current label.", "Assuming higher parent concentration means greater effect reverses the prediction.", "The pharmacologically active species determines direction."],
  ["first-pass metabolic interaction", "enzyme-interactions", "Intestinal and hepatic metabolism can limit oral exposure before systemic entry.", "Interpret route, site, and object-drug sensitivity when predicting an interaction.", "Review oral versus nonoral route, intestinal and hepatic pathways, food, transporter overlap, and label data.", "Generalizing an oral interaction to every route can misstate magnitude.", "First-pass contribution depends on the administration pathway."],
  ["intestinal P-glycoprotein interaction", "transporter-distribution-interactions", "Intestinal P-gp efflux can limit absorption of selected substrates.", "Verify whether inhibition or induction meaningfully changes the exact substrate's exposure.", "Review P-gp status, CYP overlap, object-drug therapeutic margin, renal function, and label instructions.", "Treating every P-gp substrate as equally sensitive creates false precision.", "Transport contribution differs among substrates and pathways."],
  ["hepatic OATP uptake interaction", "transporter-distribution-interactions", "OATP inhibition can reduce hepatic uptake and raise systemic exposure of selected substrates.", "Use product-specific restrictions or dose and toxicity monitoring.", "Review exact OATP substrate, precipitant, statin or other toxicity, genetics, and competing transporters.", "Calling all statins interchangeable can conceal transporter sensitivity.", "Hepatic uptake can be a rate-limiting disposition step."],
  ["renal OCT and MATE interaction", "transporter-distribution-interactions", "Renal cation transporters influence secretion of selected drugs and creatinine.", "Differentiate exposure changes and secretion-related creatinine shifts from kidney injury.", "Review metformin or other substrate exposure, creatinine timing, urinalysis, symptoms, lactate risk, and exact inhibitor.", "Equating every creatinine rise with structural injury can cause an unnecessary or unsafe change.", "Tubular secretion affects measured creatinine and selected drug clearance."],
  ["protein binding displacement", "transporter-distribution-interactions", "A change in protein binding does not automatically create a sustained increase in unbound exposure.", "Interpret binding with distribution, clearance, nonlinear kinetics, and clinical response.", "Review albumin, organ function, free concentration when useful, total concentration, and toxicity.", "Changing dose solely from a high binding percentage ignores compensatory clearance.", "Unbound concentration is governed by more than binding alone."],
  ["competition for renal secretion", "elimination-interactions", "Two drugs can compete for or inhibit active tubular secretion.", "Assess whether the object drug accumulates and whether a supported dose or monitoring change is needed.", "Review transporter, renal function, object-drug level or response, timing, and alternatives.", "Calling transporter competition nephrotoxicity confuses mechanism and management.", "Reduced secretion can occur without tissue injury."],
  ["urine pH and ion trapping", "elimination-interactions", "Urine pH changes ionization and reabsorption for selected weak acids and bases.", "Use monitored urine manipulation only for a supported toxicologic indication.", "Review toxin, timing, acid-base status, potassium, sodium, urine pH, fluid balance, and endpoint.", "Routine alkalinization for ordinary interactions can create electrolyte and volume harm.", "Ion trapping is useful only in defined exposure settings."],
  ["dynamic renal function", "elimination-interactions", "Acute illness and changing volume or perfusion can make a prior renal estimate obsolete.", "Recalculate the label-required renal metric and reassess exposure during clinical change.", "Review creatinine trend, urine output, muscle mass, weight, dialysis, volume, and nephrotoxins.", "Using one old creatinine value can preserve an unsafe dose during acute decline.", "Clearance follows current physiology rather than the problem list."],
  ["therapeutic drug monitoring", "elimination-interactions", "A concentration is useful only when timing and an action threshold make it interpretable.", "Order the right sample and integrate it with response, toxicity, organ function, and interacting changes.", "Review dose and sample times, steady state, distribution, free versus total level, target context, and symptoms.", "Reacting to an uninterpretable level can worsen exposure.", "Concentration-guided care requires a defined clinical question."],
  ["grapefruit interaction", "food-supplement-smoking", "Grapefruit inhibits intestinal CYP3A and affects selected sensitive substrates.", "Use the exact object's label rather than a class-wide prohibition.", "Review object drug, route, sensitivity, quantity and frequency, toxicity, and alternatives.", "Assuming every CYP3A substrate has the same grapefruit risk creates inaccurate counseling.", "Intestinal pathway contribution varies by product."],
  ["vitamin K consistency with warfarin", "food-supplement-smoking", "Large changes in vitamin K intake can change warfarin response.", "Support a consistent nutritious pattern and adjust through INR-guided management.", "Review diet trend, INR, illness, antibiotics, supplements, adherence, and bleeding or thrombosis.", "Eliminating vitamin K can produce poor nutrition and greater future variability.", "Consistency permits safer titration than oscillating avoidance."],
  ["supplement interaction reconciliation", "food-supplement-smoking", "Supplements can affect hemostasis, enzymes, transporters, sedation, pressure, glucose, and serotonin.", "Record exact product, ingredients, dose, reason, timing, and quality before assessing risk.", "Review label, third-party testing, duplicate ingredients, evidence, organ function, and all medicines.", "Documenting only the common name can miss multi-ingredient and variable products.", "Product identity is necessary for a defensible interaction review."],
  ["smoking cessation and CYP1A2", "food-supplement-smoking", "Combustion products in tobacco smoke induce CYP1A2, while nicotine replacement does not reproduce that induction.", "Reassess sensitive substrates when smoking starts, stops, or changes substantially.", "Review cigarettes per day, change date, substrate dose, response, toxicity, concentration, and follow-up.", "Attributing the interaction to nicotine can lead to incorrect management of replacement therapy.", "The inducing exposure comes primarily from smoke combustion products."],
  ["heart failure as a drug interaction modifier", "drug-disease-interactions", "Heart failure can change perfusion, congestion, absorption, clearance, pressure, and arrhythmia risk.", "Interpret the exact phenotype and trajectory before selecting or dosing therapy.", "Review congestion, output, blood pressure, rhythm, kidney and liver trajectory, and medication changes.", "Treating heart failure as one static contraindication misses compensation and severity.", "Disease physiology changes both exposure and response."],
  ["airway disease and beta blockade", "drug-disease-interactions", "Beta blockade can have different airway consequences according to selectivity, dose, indication, and disease control.", "Balance the compelling cardiac indication with agent selection, pulmonary status, and monitoring.", "Review asthma or COPD phenotype, recent attacks, rescue use, beta blocker selectivity and dose, and alternatives.", "A blanket class rule can deny beneficial therapy or ignore high-risk nonselective exposure.", "Agent and patient context determine the interaction."],
  ["frailty and interaction consequence", "drug-disease-interactions", "Frailty, falls, cognition, and limited organ reserve magnify the consequence of sedation, hypotension, and bleeding.", "Reduce interacting burden and choose endpoints that reflect function and safety.", "Review gait, falls, orthostasis, cognition, caregiver support, renal function, and duplicate therapy.", "Counting medications without examining their combined physiology misses the actionable risk.", "Reserve determines how well a patient tolerates an interaction."],
  ["pregnancy and lactation interaction assessment", "drug-disease-interactions", "Reproductive decisions require current narrative evidence and the exact product, timing, exposure, and maternal condition.", "Use current labeling and specialist guidance for high-consequence combinations.", "Review pregnancy timing, lactation, maternal disease, active metabolites, alternatives, and infant monitoring.", "Retired pregnancy letters cannot describe a patient-specific interaction.", "Narrative evidence preserves timing, severity, and clinical context."],
  ["current product labeling", "evidence-and-tools", "The current label defines product-specific restrictions, dose changes, administration, and monitoring.", "Confirm active ingredient, formulation, route, indication, and label revision before acting.", "Review Drug Interactions, Clinical Pharmacology, Contraindications, Warnings, and Dosage sections.", "Using a class summary alone can miss formulation and product differences.", "The approved product information is the primary operational source."],
  ["interaction database rating", "evidence-and-tools", "Database severity ratings prioritize review but do not replace evidence and patient context.", "Inspect mechanism, documentation, magnitude, timing, alternatives, and management details.", "Review more than one source for high-consequence uncertainty and trace advice to labeling or studies.", "Treating a color as an order can cause unnecessary discontinuation or inadequate monitoring.", "Clinical decisions require the evidence beneath the rating."],
  ["interaction evidence uncertainty", "evidence-and-tools", "Mechanistic or case evidence can signal risk without precisely defining magnitude.", "State uncertainty and match precautions to potential consequence and reversibility.", "Review study design, population, dose, route, case quality, reproducibility, and biologic plausibility.", "Absence from a database does not prove absence of risk.", "Evidence strength and consequence should jointly shape caution."],
  ["interaction alert fatigue", "evidence-and-tools", "Frequent nonspecific alerts promote overrides and can hide important warnings.", "Prioritize patient-specific, high-consequence, actionable alerts and measure system performance.", "Review override rate, accepted actions, false positives, missed events, delays, and user workflow.", "Adding more alerts without evaluation can make the system less safe.", "Signal quality determines whether clinicians can act reliably."],
  ["interaction avoidance or substitution", "management-and-followup", "Avoidance is often strongest when consequence is serious and a suitable alternative exists.", "Compare the benefits and risks of changing the object, precipitant, or treatment goal.", "Review indications, efficacy, alternatives, timing, access, withdrawal risk, and follow-up.", "Stopping an essential medicine without replacement can create a second hazard.", "Substitution must preserve the clinical purpose of treatment."],
  ["interaction dose or timing adjustment", "management-and-followup", "Dose modification or separation works only when supported by the mechanism and product evidence.", "Write the exact change and specify when to reverse or reassess it.", "Review label instructions, onset, offset, adherence feasibility, formulation, and monitoring.", "An improvised dose change can under-treat the patient or outlast the precipitant.", "Operational precision is part of interaction management."],
  ["interaction monitoring ownership", "management-and-followup", "Monitoring is complete only when an endpoint, time, threshold, and owner are named.", "Assign who orders, reviews, communicates, and acts on each result.", "Review baseline, first follow-up, later interval, action threshold, and contingency plan.", "The phrase monitor closely does not ensure that anyone will detect harm.", "Ownership closes the loop between prediction and patient care."],
  ["interaction transition reconciliation", "management-and-followup", "Admission, discharge, acute illness, new prescribers, and stopping therapy can reopen interaction risk.", "Communicate both the current action and the offset plan across every transition.", "Review complete medication and supplement history, change dates, pending tests, owners, and access.", "A dose adjusted for an inhibitor can become subtherapeutic after the inhibitor disappears.", "Interaction plans must evolve when the medication system changes."],
];

const dimensions = [
  [2, "Which principle best characterizes"],
  [3, "Which clinical action best applies to"],
  [4, "Which assessment is most appropriate for"],
  [5, "Which reasoning hazard is most important to prevent with"],
];

function distractors(index, field) {
  return [7, 17, 29].map((offset) => concepts[(index + offset) % concepts.length][field]);
}

const generated = concepts.flatMap((concept, index) =>
  dimensions.map(([field, prompt], dimensionIndex) => ({
    id: `clinical-drug-interactions-${String(index * 4 + dimensionIndex + 1).padStart(3, "0")}`,
    question: `${prompt} ${concept[0]}?`,
    choices: [concept[field], ...distractors(index, field)],
    answer: 0,
    rationale: concept[6],
    reviewHref: `#${concept[1]}`,
  })),
);

// Preserve unreviewed rows while applying individually reviewed feeding repairs.
const feedingQuestionRepairs = {
  "clinical-drug-interactions-033": {
    "choices": [
      "Selected medicines form poorly absorbed complexes with calcium, magnesium, iron, or aluminum.",
      "The swallowed dose guarantees the same absorbed dose when a mineral product is added.",
      "Mineral-containing formulas cannot interact because the minerals are part of nutrition.",
      "Diluting the dose with water removes any need to separate interacting products."
    ],
    "rationale": "Polyvalent cations can bind selected oral medicines into poorly absorbed complexes. Tetracyclines, fluoroquinolones, and levothyroxine are feeding-related examples. A measured administered dose, a nutritious formula, or water dilution does not establish that the absorption interaction has been prevented."
  },
  "clinical-drug-interactions-034": {
    "choices": [
      "Use the exact product's supported separation instructions or choose another route or agent.",
      "Use one fixed separation interval for every interacting medicine and mineral product.",
      "Keep simultaneous administration and increase the medicine dose without product-specific evidence.",
      "Stop nutrition indefinitely rather than coordinate the medicine and feed schedule."
    ],
    "rationale": "Review the exact medicine, formulation, and interacting product before selecting a supported separation or an alternative administration plan. Drug-nutrient and binder schedules can differ; one interval or an improvised dose increase does not fit every product."
  },
  "clinical-drug-interactions-035": {
    "choices": [
      "Review cation product, object drug, formulation, meal timing, tube feeds, and label instructions.",
      "Check prescription dose and adherence, but exclude mineral-containing feeds from the interaction review.",
      "Check calcium supplements only, and omit antacids, iron, magnesium, and the feeding formula.",
      "Confirm the feeding route, but assume that a water flush prevents cation interactions."
    ],
    "rationale": "Identify both the susceptible medicine and each potential cation source, including supplements, antacids, and feeds. Formulation and actual administration times determine which product instructions apply. Checking only one mineral, the prescribed dose, or tube flushing leaves important absorption risks unresolved."
  },
  "clinical-drug-interactions-036": {
    "choices": [
      "One universal spacing interval can be too short or unnecessarily burdensome.",
      "Looking for mineral sources in nonprescription products and the feeding formula.",
      "Using the exact product instructions to plan separation from interacting products.",
      "Documenting actual medicine and feed times so the planned separation can be checked."
    ],
    "rationale": "Applying one interval to every product is the hazard: the required direction and duration of separation differ. The other choices are appropriate reconciliation and scheduling steps, not reasons to avoid reviewing an interaction."
  },
  "clinical-drug-interactions-046": {
    "choices": [
      "Verify dosage-form integrity, tube location, preparation, flushing, and nutrition timing.",
      "Treat every liquid as tube-compatible and proceed without checking the product.",
      "Crush the medicine into the formula to avoid a separate administration step.",
      "Review the dose only and retain the usual schedule despite concurrent interacting feeds."
    ],
    "rationale": "Product-specific review is needed because both solids and liquids can be unsuitable for feeding tubes. Check the formulation, delivery site, preparation, water flushing, and drug-nutrient timing. A liquid dosage form, correct nominal dose, or mixing into formula does not establish safe delivery."
  },
  "clinical-drug-interactions-047": {
    "choices": [
      "Review formulation, release mechanism, tube material and location, feeds, clogging, and label instructions.",
      "Check the active ingredient and dose, but omit release design and tube compatibility.",
      "Record tube location, but omit mineral-containing feeds and medicine administration times.",
      "Check for blockage after dosing, and use that observation instead of reviewing preparation instructions."
    ],
    "rationale": "Review the entire administration pathway before giving the medicine. Release design, tube location and material, feeds, preparation, and blockage risk can affect delivery; product instructions determine the compatible plan. A dose, location, or post-dose blockage check alone is incomplete."
  },
  "clinical-drug-interactions-048": {
    "choices": [
      "Crushing an extended-release or hazardous product can change exposure and safety.",
      "Checking product instructions before manipulating a modified-release dosage form.",
      "Selecting a compatible preparation and keeping it separate from the formula.",
      "Reviewing medicine and feed timing alongside appropriate water-flush instructions."
    ],
    "rationale": "Extended-release and hazardous products generally should not be crushed for feeding-tube administration. Crushing a long-acting product can release the dose too quickly. The other choices are protective review and administration steps, not the hazard being asked about."
  },
  "clinical-drug-interactions-045": {
    "choices": [
      "Crushing or tube delivery can alter release, stability, adsorption, and site of delivery.",
      "A verified feeding-tube location makes release design and preparation instructions irrelevant.",
      "A water flush guarantees that every formulation reaches the patient unchanged.",
      "Tube administration prevents both physical changes and nutrient interactions."
    ],
    "rationale": "Manipulation can change release or other physical and chemical properties, and tube administration changes the delivery pathway. Ciprofloxacin oil-based suspension adheres to tubing, illustrating surface retention; adsorption refers to drug adherence to a container surface. This general example does not establish adsorption for every drug or dosage form."
  }
};

const pharmacodynamicQuestionRepairs = {
  "clinical-drug-interactions-017": {
    "choices": [
      "Several depressants can impair alertness, airway protection, and ventilation without changing one another's concentrations.",
      "Respiratory depression requires a CYP-mediated rise in every depressant concentration.",
      "Using different CNS depressant classes prevents additive impairment of breathing.",
      "An unchanged concentration excludes pharmacodynamic harm."
    ],
    "rationale": "The depressants can converge on alertness, airway protection and ventilation. A kinetic change is not required; different drug classes do not make the combined response safe."
  },
  "clinical-drug-interactions-018": {
    "choices": [
      "Reduce avoidable depressants and define sedation and respiratory monitoring.",
      "Continue all depressants unchanged because each has a separate prescription.",
      "Stop a long-term benzodiazepine abruptly to eliminate the interaction immediately.",
      "Replace respiratory assessment with a check for CYP interactions only."
    ],
    "rationale": "Review necessity and reduce avoidable depressant exposure while defining sedation and respiratory assessment. Separate prescriptions do not remove combined risk. Benzodiazepine withdrawal requires an individualized plan rather than abrupt cessation."
  },
  "clinical-drug-interactions-019": {
    "choices": [
      "Review opioids, benzodiazepines, alcohol, antihistamines, muscle relaxants, sleep apnea, and pulmonary reserve.",
      "Review prescribed opioids only; omit alcohol and nonprescription sedating products.",
      "Review concentrations only; omit sleep-disordered breathing and pulmonary disease.",
      "Record the number of medicines without identifying depressant effects or patient reserve."
    ],
    "rationale": "Reconcile the actual depressant exposures and respiratory vulnerability. Sedating antihistamines and muscle relaxants are examples, not claims that every member of those classes has identical risk. Prescription count or concentrations alone are incomplete."
  },
  "clinical-drug-interactions-020": {
    "choices": [
      "Checking only CYP pathways misses a pharmacodynamic respiratory stack.",
      "Reconciling alcohol and nonprescription sedatives alongside prescribed depressants.",
      "Assessing breathing and sedation when a depressant is added or changed.",
      "Reviewing whether an avoidable depressant can be removed safely."
    ],
    "rationale": "A CYP-only review misses harm caused by overlapping responses even when concentrations are unchanged. The other choices are protective reconciliation, assessment and necessity review, not the reasoning hazard."
  },
  "clinical-drug-interactions-021": {
    "choices": [
      "Anticoagulants, antiplatelets, NSAIDs, and selected serotonergic drugs can impair hemostasis through different mechanisms.",
      "Bleeding risk increases only if one medicine raises the concentration of another.",
      "An anticoagulant eliminates the bleeding contribution of an antiplatelet medicine.",
      "Nonprescription NSAIDs cannot contribute to bleeding during anticoagulation."
    ],
    "rationale": "Different effects on hemostasis can combine without a kinetic interaction. The Eliquis label identifies antiplatelets, NSAIDs and selected serotonergic medicines as contributors. Neither a separate mechanism nor nonprescription status establishes compatibility."
  },
  "clinical-drug-interactions-022": {
    "choices": [
      "Preserve indicated therapy while removing avoidable exposures and managing bleeding risk.",
      "Stop every indicated antithrombotic permanently whenever an interaction alert appears.",
      "Keep all nonprescription NSAIDs because they are outside the prescription regimen.",
      "Ignore bleeding counseling unless an anticoagulant concentration has increased."
    ],
    "rationale": "With an ongoing indication and no active pathological bleeding, remove avoidable contributors and manage bleeding risk while preserving necessary protection. Reflex discontinuation can increase thrombosis risk. Active pathological hemorrhage is a different situation requiring urgent product-specific management.",
    "question": "A patient has an ongoing antithrombotic indication and no active pathological bleeding. Which action best addresses combined bleeding risk?"
  },
  "clinical-drug-interactions-023": {
    "choices": [
      "Review indication, dose, renal and liver function, prior bleeding, hemoglobin, stool symptoms, and gastroprotection.",
      "Review the interaction alert color alone and omit the treatment indication.",
      "Review the anticoagulant dose alone and omit bleeding symptoms and organ function.",
      "Record nonprescription products as harmless without reviewing their ingredients."
    ],
    "rationale": "The indication, organ function, prior bleeding and current signs inform the benefit-risk decision. Hemoglobin and stool symptoms can contribute to assessment; gastroprotection is considered when indicated, not assumed for every patient. A dose or alert color alone cannot replace this review."
  },
  "clinical-drug-interactions-024": {
    "choices": [
      "Stopping essential antithrombotic therapy reflexively can exchange bleeding risk for thrombosis.",
      "Confirming the antithrombotic indication before making a treatment change.",
      "Reviewing avoidable NSAIDs and other contributors to bleeding.",
      "Treating active pathological hemorrhage as a reason for urgent assessment."
    ],
    "rationale": "Reflex withdrawal of necessary antithrombotic protection can create thrombosis risk. The other choices are appropriate review or escalation steps. This does not advise continuation during active pathological hemorrhage."
  },
  "clinical-drug-interactions-025": {
    "choices": [
      "QT-active drugs interact with bradycardia, electrolytes, exposure, and cardiac substrate.",
      "QT risk is determined solely by whether one medicine appears on a QT list.",
      "Normal potassium excludes risk from bradycardia or another QT-active medicine.",
      "A prolonged QT proves that torsades will occur."
    ],
    "rationale": "Repolarization risk reflects medicines, exposure, electrolyte state, heart rate and cardiac vulnerability. One normal variable does not exclude other contributors, and QT prolongation is not a guarantee of torsades."
  },
  "clinical-drug-interactions-026": {
    "choices": [
      "Correct modifiable risks and choose a safer regimen when the repolarization stack is unfavorable.",
      "Continue all QT-active medicines without reviewing low potassium or magnesium.",
      "Treat every long QT during a widened QRS as proof of acquired long-QT syndrome.",
      "Use a normal electrolyte result to omit ECG and patient-context review."
    ],
    "rationale": "Correct modifiable contributors and choose a safer regimen when appropriate. Low potassium, low magnesium and bradycardia matter. A widened QRS may lengthen QT through depolarization; interpretation must distinguish that from delayed repolarization."
  },
  "clinical-drug-interactions-027": {
    "choices": [
      "Review QTc, QRS, heart rate, potassium, magnesium, kidney function, all QT drugs, and syncope.",
      "Review the medicine list only and omit ECG, heart rate and electrolytes.",
      "Review QTc only and disregard QRS duration and measurement method.",
      "Review syncope only and omit kidney function and interacting exposures."
    ],
    "rationale": "Assess the complete electrical and exposure context. QRS duration and consistent measurement help interpret QT; kidney function can affect exposure, and potassium, magnesium, heart rate and symptoms contribute to the risk assessment."
  },
  "clinical-drug-interactions-028": {
    "choices": [
      "Treating QT risk as a property of one medicine ignores the patient system.",
      "Reviewing all QT-active exposures alongside bradycardia and electrolytes.",
      "Interpreting QT with attention to QRS duration and a consistent method.",
      "Reassessing the regimen when kidney function or interacting therapy changes."
    ],
    "rationale": "A single-medicine view misses combined electrical and exposure factors. The other choices address the patient system and changing risk rather than representing the hazard."
  },
  "clinical-drug-interactions-029": {
    "choices": [
      "Potassium-raising medicines can combine with impaired renal excretion and supplements.",
      "An absence of symptoms excludes potassium accumulation from interacting medicines.",
      "Potassium-containing salt substitutes cannot add to medicine-related potassium risk.",
      "Impaired kidney excretion prevents potassium-raising medicines from causing hyperkalemia."
    ],
    "rationale": "Potassium-raising exposures can combine with reduced excretion. Supplements and potassium-containing salt substitutes count as exposures, and hyperkalemia can occur without symptoms. Laboratory assessment is needed; it does not promise prevention."
  },
  "clinical-drug-interactions-030": {
    "choices": [
      "Review necessity and establish potassium and kidney monitoring after changes.",
      "Wait for palpitations before ordering potassium or kidney tests.",
      "Apply the same testing interval to every drug and every kidney trajectory.",
      "Order potassium tests without naming who will review and act on the results."
    ],
    "rationale": "Review necessity, establish potassium and kidney testing after relevant changes, and name the reviewer and response plan. Timing depends on the product and patient. Waiting for symptoms, using one universal interval, or leaving results unowned is inadequate."
  },
  "clinical-drug-interactions-031": {
    "choices": [
      "Review baseline potassium, renal trajectory, volume status, diabetes, RAAS drugs, trimethoprim, and supplements.",
      "Review potassium symptoms only and omit the measured baseline value.",
      "Review supplements only and omit RAAS medicines and trimethoprim.",
      "Use one old kidney result and omit recent volume or medicine changes."
    ],
    "rationale": "Combine measured potassium with the current kidney trajectory, volume and diabetes context, and all relevant medicine and supplement exposures. Renin-angiotensin system medicines and trimethoprim can contribute. Partial histories and an old isolated value miss changing risk."
  },
  "clinical-drug-interactions-032": {
    "choices": [
      "Waiting for symptoms can miss dangerous asymptomatic hyperkalemia.",
      "Reviewing potassium and kidney results after relevant treatment changes.",
      "Reconciling potassium-containing supplements and salt substitutes.",
      "Assigning a clinician to review results and implement the response plan."
    ],
    "rationale": "Hyperkalemia may be asymptomatic, so waiting for symptoms can miss an important abnormality. Testing and an owned response plan support detection and action but cannot guarantee detection before arrhythmia. The other choices are protective steps."
  }
};

export const clinicalDrugInteractionsQuestionBank = generated.map((question) => {
  const repair = pharmacodynamicQuestionRepairs[question.id] || feedingQuestionRepairs[question.id];
  return repair ? { ...question, ...repair } : question;
});
