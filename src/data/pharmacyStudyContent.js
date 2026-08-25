// Original study notes synthesized from the founder's pharmacy coursework and
// the locally supplied RxPrep 2023 course book. These notes are intentionally
// concise and should be checked against current guidelines before clinical use.

export const pharmacyStudyContent = {
  "drug-action-and-exposure": {
    sourceTopics: ["Basic science concepts", "Pharmacokinetics", "Drug interactions"],
    mustKnow: [
      "Agonists activate receptors, antagonists block activation, and partial agonists produce a lower maximal response even when every receptor is occupied.",
      "Loading dose is driven mainly by volume of distribution and the target concentration. Maintenance dose is driven mainly by clearance and the target concentration.",
      "About four to five half-lives are required to approach steady state or to remove most of a drug after it is stopped.",
      "Only unbound drug can usually cross membranes, bind targets, undergo metabolism, or be filtered at the glomerulus.",
    ],
    examFocus: ["Separate potency from efficacy.", "Identify whether a dose question is asking about loading, maintenance, or time to steady state."],
  },
  "formulations-routes-and-calculations": {
    sourceTopics: ["Drug formulations", "Pharmacy foundations", "Calculations"],
    mustKnow: [
      "Enteric-coated and extended-release products should not be crushed unless the specific product information permits it.",
      "Concentration calculations require the strength, final volume, desired dose, and consistent units before any arithmetic begins.",
      "For reconstitution, use the final concentration or final volume on the product label, not the volume of diluent alone.",
      "Routes are not interchangeable. Bioavailability, onset, sterility, device technique, and first-pass metabolism can change the clinical result.",
    ],
    examFocus: ["Write units through every calculation.", "Confirm whether the question gives salt strength, base strength, or total product strength."],
  },
  "interactions-labs-and-monitoring": {
    sourceTopics: ["Drug interactions", "Laboratory values", "Medication safety"],
    mustKnow: [
      "An enzyme inhibitor usually raises exposure to a substrate, while an inducer usually lowers exposure. Prodrugs can reverse the expected clinical direction.",
      "Pharmacodynamic interactions occur when drugs produce additive or opposing effects without changing concentration, such as additive bleeding or sedation.",
      "A complete monitoring plan includes a baseline value, efficacy target, toxicity surveillance, reassessment interval, and action threshold.",
      "Kidney function, liver function, electrolytes, blood counts, pregnancy status, and the QT interval are common patient factors that change medication risk.",
    ],
    examFocus: ["Distinguish pharmacokinetic from pharmacodynamic interactions.", "Choose the laboratory value that can actually change the treatment decision."],
  },
  "patient-care-workflow": {
    sourceTopics: ["Medication safety", "Patient cases", "Drug information"],
    mustKnow: [
      "Medication reconciliation compares what the patient is actually taking with the intended regimen at every transition of care.",
      "Order verification checks the patient, indication, drug, dose, route, frequency, duration, allergies, interactions, organ function, and product preparation.",
      "A strong SOAP assessment prioritizes medication-related problems and connects each recommendation to evidence and patient-specific data.",
      "Teach-back and return demonstration test understanding more reliably than asking whether a patient understands.",
    ],
    examFocus: ["Identify the most urgent medication-related problem first.", "Choose a specific intervention and follow-up plan rather than a vague recommendation."],
  },
  "evidence-pharmacogenomics-and-safety": {
    sourceTopics: ["Biostatistics", "Pharmacogenomics", "Medication safety"],
    mustKnow: [
      "Relative risk describes proportional change, while absolute risk difference and number needed to treat show the practical magnitude of benefit.",
      "A confidence interval that crosses the null value may indicate that the result is not statistically significant at the stated confidence level.",
      "A genotype must be translated into a phenotype and then into an actionable gene-drug recommendation before it changes care.",
      "Medication-error review should identify the system failure, contributing conditions, harm potential, and a prevention strategy rather than stopping at individual blame.",
    ],
    examFocus: ["Use 1 as the null for ratios and 0 as the null for differences.", "Do not assume every genetic association has a prescribing action."],
  },
  "fluids-electrolytes-acid-base": {
    sourceTopics: ["Fluids and electrolytes", "Acid-base disorders", "Calculations"],
    mustKnow: [
      "Sodium disorders usually reflect water balance. Assess symptoms, volume status, chronicity, and the safe rate of correction before selecting therapy.",
      "Hypomagnesemia can make hypokalemia refractory. Potassium replacement may fail until magnesium is corrected.",
      "Correct total calcium for low albumin when ionized calcium is not available, then interpret calcium and phosphorus with kidney function and parathyroid physiology.",
      "For acid-base problems, identify pH direction, primary process, expected compensation, and anion gap before looking for a mixed disorder.",
    ],
    examFocus: ["Avoid rapid correction of chronic sodium disorders.", "Use the measured values and the correct formula before assigning an acid-base diagnosis."],
  },
  "enteral-parenteral-nutrition": {
    sourceTopics: ["Nutrition support", "Enteral nutrition", "Parenteral nutrition calculations"],
    mustKnow: [
      "Use the gastrointestinal tract when it functions and can be accessed safely. Parenteral nutrition carries greater infection, thrombosis, metabolic, and compatibility risk.",
      "Protein provides 4 kcal/g, dextrose provides 3.4 kcal/g in parenteral nutrition, and intravenous lipid provides a product-specific caloric density.",
      "A parenteral nutrition assessment includes amino acids, dextrose, lipid, total calories, fluid, electrolytes, micronutrients, access, and infusion rate.",
      "Monitor glucose, electrolytes, triglycerides, liver tests, weight, fluid balance, line complications, and refeeding risk.",
    ],
    examFocus: ["Distinguish dextrose calories in parenteral nutrition from oral carbohydrate calories.", "Check whether lipid calories are already included in the stated product volume."],
  },
  "cholinergic-pharmacology": {
    sourceTopics: ["Autonomic nervous system", "Cholinergic agonists", "Anticholinergic drugs"],
    mustKnow: [
      "Muscarinic activation increases secretions and gastrointestinal or bladder activity, constricts pupils, and can slow heart rate.",
      "Acetylcholinesterase inhibitors increase acetylcholine at both muscarinic and nicotinic sites and can produce a cholinergic toxidrome.",
      "Antimuscarinic effects include dry mouth, blurred vision, constipation, urinary retention, tachycardia, and confusion, especially in older adults.",
      "Atropine treats clinically important muscarinic excess. Pralidoxime can regenerate acetylcholinesterase in organophosphate poisoning when given appropriately.",
    ],
    examFocus: ["Map each symptom to receptor location.", "Separate muscarinic findings from nicotinic weakness."],
  },
  "adrenergic-pharmacology": {
    sourceTopics: ["Autonomic nervous system", "Adrenergic agonists", "Adrenergic antagonists"],
    mustKnow: [
      "Alpha-1 activation constricts vascular smooth muscle. Beta-1 activation increases heart rate, contractility, and renin release. Beta-2 activation relaxes bronchial and uterine smooth muscle.",
      "Alpha-2 agonists reduce central sympathetic outflow. Abrupt clonidine withdrawal can cause rebound hypertension.",
      "Nonselective beta blockers can worsen bronchospasm and mask adrenergic warning symptoms of hypoglycemia.",
      "Receptor selectivity is relative and can diminish as the dose increases.",
    ],
    examFocus: ["Predict the organ response from the receptor.", "Check whether comorbid asthma, diabetes, conduction disease, or pregnancy changes drug choice."],
  },
  "hypertension-diuretics-glaucoma": {
    sourceTopics: ["Hypertension", "Diuretics", "Eye disorders"],
    mustKnow: [
      "Common first-line blood-pressure classes include thiazide-type diuretics, ACE inhibitors or ARBs, and dihydropyridine calcium-channel blockers, selected by comorbidity and patient factors.",
      "ACE inhibitors and ARBs require monitoring of serum creatinine and potassium and are avoided during pregnancy.",
      "Loop diuretics are potent for volume removal. Thiazides can lower sodium and potassium and raise uric acid, glucose, and calcium.",
      "Glaucoma therapy lowers aqueous humor production or increases outflow. Correct eye-drop technique includes punctal occlusion to reduce systemic exposure.",
    ],
    examFocus: ["Recognize resistant hypertension and secondary causes.", "Match each diuretic to its nephron site and electrolyte pattern."],
  },
  "dyslipidemia-coronary-disease-acs": {
    sourceTopics: ["Dyslipidemia", "Stable ischemic heart disease", "Acute coronary syndromes"],
    mustKnow: [
      "Statins are the foundation of LDL lowering for atherosclerotic risk reduction. Intensity is defined by the expected percentage reduction in LDL, not simply by dose size.",
      "When LDL remains above the patient-specific threshold, adherence and tolerated statin intensity are assessed before adding agents such as ezetimibe or a PCSK9-directed therapy.",
      "Acute coronary syndrome care separates immediate antithrombotic and anti-ischemic treatment from long-term secondary prevention.",
      "Review statin interactions, pregnancy status, unexplained muscle symptoms, and liver injury symptoms. Routine creatine kinase testing is not required for every asymptomatic patient.",
    ],
    examFocus: ["Know high-intensity statin regimens.", "Distinguish LDL-lowering goals from triglyceride-driven pancreatitis risk."],
  },
  "anticoagulation-vte": {
    sourceTopics: ["Anticoagulation", "Venous thromboembolism", "Stroke prevention"],
    mustKnow: [
      "Anticoagulant dose and duration depend on the exact indication, treatment phase, kidney and liver function, age, weight, interactions, and bleeding risk.",
      "Warfarin is monitored with INR and has delayed onset and offset. Vitamin K reverses its effect, while urgent major bleeding can require clotting-factor replacement.",
      "Unfractionated heparin, low-molecular-weight heparins, and direct oral anticoagulants are not dose-interchangeable.",
      "Counsel patients to report bleeding, avoid unapproved NSAID use, disclose procedures, and take doses consistently. Missed-dose instructions are product specific.",
    ],
    examFocus: ["Confirm whether the question is prevention, initial treatment, or extended treatment.", "Match the reversal strategy to the anticoagulant and urgency."],
  },
  "arrhythmias-and-ecg": {
    sourceTopics: ["Arrhythmias", "Atrial fibrillation", "Electrocardiography"],
    mustKnow: [
      "First decide whether the patient is hemodynamically stable. Instability can require immediate electrical treatment rather than a slow medication strategy.",
      "Atrial fibrillation management addresses ventricular rate, rhythm when appropriate, and thromboembolic risk as separate decisions.",
      "Antiarrhythmic selection depends on structural heart disease, conduction, QT interval, organ function, interactions, and proarrhythmic risk.",
      "Correct potassium and magnesium and review all QT-prolonging drugs when torsades risk is present.",
    ],
    examFocus: ["Read rate, rhythm, intervals, and QRS width in order.", "Do not confuse rate control with stroke prevention."],
  },
  "heart-failure-and-pad": {
    sourceTopics: ["Chronic heart failure", "Acute decompensated heart failure", "Peripheral arterial disease"],
    mustKnow: [
      "For heart failure with reduced ejection fraction, disease-modifying therapy includes an evidence-based beta blocker, RAAS-directed therapy, a mineralocorticoid receptor antagonist, and an SGLT2 inhibitor when appropriate.",
      "Loop diuretics improve congestion and symptoms but are not a substitute for therapies that reduce hospitalization or mortality.",
      "After starting or titrating therapy, reassess blood pressure, heart rate, volume status, kidney function, potassium, symptoms, and adherence.",
      "Peripheral arterial disease care combines antithrombotic and lipid risk reduction, smoking cessation, blood-pressure and diabetes control, foot care, and structured exercise when appropriate.",
    ],
    examFocus: ["Separate symptom relief from survival benefit.", "Recognize drugs that can worsen heart failure through fluid retention, negative inotropy, or toxicity."],
  },
  "stroke-aki-ckd": {
    sourceTopics: ["Stroke", "Chronic kidney disease", "Acute kidney injury"],
    mustKnow: [
      "Acute stroke treatment depends on stroke type, time last known well, imaging, blood pressure, contraindications, and access to reperfusion therapy.",
      "Kidney function estimates guide many doses, but the equation required by a drug label may differ from the equation used to stage chronic kidney disease.",
      "In acute kidney injury, review hemodynamics, urine output, obstruction, recent contrast, nephrotoxins, and drugs that accumulate when clearance falls.",
      "Chronic kidney disease care includes albuminuria assessment, cardiovascular risk reduction, anemia and mineral-bone evaluation, electrolyte management, and preparation for renal replacement when advanced.",
    ],
    examFocus: ["Distinguish ischemic from hemorrhagic stroke before selecting therapy.", "Do not automatically apply a stable renal dose to rapidly changing kidney function."],
  },
  "asthma-copd-allergic-rhinitis": {
    sourceTopics: ["Asthma", "Chronic obstructive pulmonary disease", "Allergic rhinitis"],
    mustKnow: [
      "Asthma is driven by variable airway inflammation and bronchoconstriction. Inhaled corticosteroid-containing therapy addresses risk in a way that bronchodilator-only treatment does not.",
      "COPD treatment is guided by symptoms, exacerbation history, blood eosinophils when relevant, smoking exposure, and device ability.",
      "Before escalating inhaled therapy, confirm diagnosis, adherence, technique, trigger control, and whether the device matches the patient's inspiratory ability and dexterity.",
      "Rinse and spit after inhaled corticosteroids. Demonstrate device-specific priming, loading, inhalation, breath hold, cleaning, and dose tracking.",
    ],
    examFocus: ["Distinguish rescue from maintenance therapy.", "Know which inhalers require a rapid deep breath and which require a slow deep breath."],
  },
  "diabetes-and-hyperglycemic-emergencies": {
    sourceTopics: ["Diabetes", "Diabetic ketoacidosis", "Hyperosmolar hyperglycemic state"],
    mustKnow: [
      "Diabetes therapy is individualized by cardiovascular disease, heart failure, kidney disease, hypoglycemia risk, weight goals, cost, route, and patient preference.",
      "Metformin lowers hepatic glucose production and is limited by kidney function and intolerance. SGLT2 inhibitors and GLP-1 receptor agonists have important cardiorenal roles in selected patients.",
      "Insulin regimens separate basal requirements from mealtime and correction needs. Concentrated products, pen technique, storage, and hypoglycemia prevention are high-risk details.",
      "DKA and HHS management requires fluids, potassium assessment and replacement, insulin timing, glucose monitoring, and treatment of the precipitating cause.",
    ],
    examFocus: ["Check potassium before starting insulin in a hyperglycemic crisis.", "Match adverse effects and contraindications to each non-insulin drug class."],
  },
  "thyroid-pituitary-adrenal": {
    sourceTopics: ["Thyroid disorders", "Adrenal disorders", "Pituitary therapies"],
    mustKnow: [
      "Levothyroxine absorption is reduced by food, calcium, iron, and several binding agents. Consistent timing and separation are central counseling points.",
      "Thionamides reduce thyroid hormone synthesis. Propylthiouracil also reduces peripheral conversion and has a limited role because of liver toxicity risk.",
      "Chronic corticosteroid exposure suppresses the hypothalamic-pituitary-adrenal axis and should not be stopped abruptly after sustained systemic use.",
      "Adrenal crisis requires immediate glucocorticoid replacement, fluid support, and correction of precipitating problems.",
    ],
    examFocus: ["Use TSH and free hormone patterns to localize thyroid dysfunction.", "Recognize fever or sore throat during thionamide therapy as a possible agranulocytosis signal."],
  },
  "reproductive-pregnancy-lactation": {
    sourceTopics: ["Contraception", "Pregnancy and lactation", "Infertility"],
    mustKnow: [
      "Contraceptive choice considers effectiveness, estrogen-related risk, adherence, bleeding preference, drug interactions, reproductive goals, and time to return of fertility.",
      "Enzyme inducers can reduce exposure to several hormonal contraceptives. A method unaffected by the interaction or an appropriate backup strategy may be needed.",
      "Pregnancy risk is assessed by timing, dose, maternal disease, fetal development, and available human evidence rather than by a simple letter category.",
      "Lactation assessment considers milk transfer, infant exposure, infant age, oral bioavailability, toxicity, and the importance of treatment to the parent.",
    ],
    examFocus: ["Identify when estrogen is inappropriate.", "Balance untreated maternal disease against medication risk."],
  },
  "gu-bone-and-device-counseling": {
    sourceTopics: ["Benign prostatic hyperplasia", "Urinary incontinence", "Osteoporosis"],
    mustKnow: [
      "Alpha-1 blockers can improve lower urinary tract symptoms quickly but can cause dizziness and orthostasis. 5-alpha-reductase inhibitors act slowly and reduce prostate volume in selected patients.",
      "Antimuscarinic and beta-3 agonist therapy for overactive bladder requires review of retention risk, blood pressure, cognition, constipation, and dry mouth.",
      "Osteoporosis care includes fracture risk, calcium and vitamin D adequacy, weight-bearing activity, fall prevention, secondary causes, and drug-specific duration or follow-up.",
      "Oral bisphosphonates require administration with plain water on an empty stomach and remaining upright for the product-specific interval.",
    ],
    examFocus: ["Differentiate rapid symptom relief from prostate-size reduction.", "Match osteoporosis administration instructions to the exact dosage form."],
  },
  "gerd-pud-and-upper-gi": {
    sourceTopics: ["Gastroesophageal reflux disease", "Peptic ulcer disease", "Nausea and vomiting"],
    mustKnow: [
      "GERD therapy begins with symptom pattern, alarm features, lifestyle contributors, pregnancy status, and the need for diagnostic referral.",
      "Proton pump inhibitors work best when timed before a meal so active pumps are available for inhibition. Long-term therapy should have a continuing indication and periodic reassessment.",
      "H. pylori treatment requires combination therapy, adherence, interaction review, and confirmation of eradication after the appropriate medication-free interval.",
      "NSAID-related ulcer prevention depends on gastrointestinal risk, cardiovascular risk, NSAID necessity, dose, duration, and gastroprotection.",
    ],
    examFocus: ["Distinguish uncomplicated reflux from alarm symptoms.", "Do not test for H. pylori eradication too soon or while suppressive therapy can cause a false-negative result."],
  },
  "bowel-and-inflammatory-gi-disorders": {
    sourceTopics: ["Constipation and diarrhea", "Inflammatory bowel disease", "Irritable bowel syndrome"],
    mustKnow: [
      "Before treating constipation or diarrhea, review duration, severity, hydration, blood, fever, weight loss, travel, antibiotics, medications, and obstruction risk.",
      "Bulk-forming, osmotic, stimulant, secretagogue, and peripherally acting opioid-antagonist therapies serve different constipation patterns.",
      "Antimotility therapy is inappropriate in some invasive or inflammatory diarrheal syndromes.",
      "Inflammatory bowel disease treatment separates induction from maintenance and requires infection screening and monitoring for immunosuppressive toxicity.",
    ],
    examFocus: ["Identify red flags before self-care.", "Separate IBS symptom treatment from inflammatory disease treatment."],
  },
  "immune-inflammatory-transplant": {
    sourceTopics: ["Transplant", "Rheumatologic conditions", "Immunosuppressants"],
    mustKnow: [
      "Immunosuppressants differ in target, onset, organ toxicity, infection risk, malignancy risk, monitoring, and interaction burden.",
      "Calcineurin inhibitors have narrow therapeutic windows and important nephrotoxicity and interaction concerns.",
      "Biologic and targeted immune therapies require screening for latent or active infection and review of vaccine timing.",
      "Transplant adherence is time critical. Formulation or manufacturer changes can matter for drugs that require concentration monitoring.",
    ],
    examFocus: ["Match each agent to its signature toxicity and monitoring.", "Avoid live vaccines during significant immunosuppression unless specialist guidance supports use."],
  },
  "depression-anxiety-and-sleep": {
    sourceTopics: ["Depression", "Anxiety disorders", "Sleep disorders"],
    mustKnow: [
      "Antidepressants generally require consistent daily use and time before full benefit. Early follow-up should assess activation, suicidality, adherence, tolerability, and emerging mania.",
      "Serotonergic combinations can produce serotonin toxicity, while abrupt discontinuation of short half-life agents can cause a withdrawal syndrome.",
      "Benzodiazepines can impair cognition and coordination and create dependence. Their role, duration, taper, and combination with other depressants require caution.",
      "Insomnia assessment begins with sleep schedule, substances, medical or psychiatric drivers, and behavioral treatment before long-term sedative use.",
    ],
    examFocus: ["Differentiate serotonin toxicity from neuroleptic malignant syndrome.", "Know major interaction and washout concerns involving MAO inhibitors."],
  },
  "psychosis-and-bipolar-disorder": {
    sourceTopics: ["Schizophrenia", "Bipolar disorder", "Antipsychotics"],
    mustKnow: [
      "Antipsychotic selection balances prior response, metabolic effects, movement disorders, prolactin, QT risk, sedation, orthostasis, formulation, and adherence.",
      "Acute dystonia, akathisia, parkinsonism, and tardive dyskinesia differ in timing and management.",
      "Mood stabilizers require drug-specific monitoring. Lithium is affected by sodium and fluid balance, kidney function, and interacting drugs.",
      "Long-acting injectable antipsychotics have product-specific oral overlap, loading, injection technique, and observation requirements.",
    ],
    examFocus: ["Recognize the movement-disorder pattern before treating it.", "Separate acute mania treatment from long-term maintenance."],
  },
  "seizures-parkinson-alzheimer": {
    sourceTopics: ["Seizures", "Parkinson disease", "Alzheimer disease"],
    mustKnow: [
      "Antiseizure selection depends on seizure type, pregnancy potential, interactions, organ function, adverse-effect profile, and comorbid conditions.",
      "Abrupt withdrawal of antiseizure therapy can precipitate seizures. Serious rash, mood change, blood dyscrasia, and organ toxicity are agent-specific warning patterns.",
      "Parkinson therapy balances motor benefit against dyskinesia, wearing-off, hallucinations, orthostasis, sleep attacks, and impulse-control effects.",
      "Cognitive-enhancing therapies provide symptomatic benefit for selected patients and require realistic expectations, caregiver support, and adverse-effect monitoring.",
    ],
    examFocus: ["Match the drug to the seizure type.", "Recognize interactions caused by enzyme-inducing antiseizure drugs."],
  },
  "pain-migraine-and-gout": {
    sourceTopics: ["Pain management", "Headache", "Gout"],
    mustKnow: [
      "Pain assessment identifies nociceptive, neuropathic, inflammatory, and centralized features because drug response differs by mechanism.",
      "Opioid safety includes indication, functional goal, dose, duration, sedation, respiratory risk, bowel regimen, interactions, naloxone access, and reassessment.",
      "Migraine care separates acute treatment from prevention and screens for medication-overuse headache and vascular contraindications.",
      "Acute gout treatment controls inflammation. Long-term urate lowering prevents recurrence and requires adherence, titration, flare prophylaxis, and monitoring.",
    ],
    examFocus: ["Do not start an opioid without a monitoring and risk-reduction plan.", "Distinguish treatment of an acute gout flare from chronic urate lowering."],
  },
  "acute-critical-care": {
    sourceTopics: ["Acute and critical care", "Shock", "Emergency medicine"],
    mustKnow: [
      "Critical-care treatment begins with airway, breathing, circulation, neurologic status, rapid diagnostics, and correction of immediately reversible causes.",
      "Shock type determines whether the primary need is fluid, vasopressor, inotrope, source control, or another targeted intervention.",
      "Sedation and analgesia require a goal, repeated assessment, delirium prevention, ventilator context, and daily evaluation for de-escalation.",
      "Stress-ulcer and venous-thromboembolism prophylaxis should be used only when indicated and reassessed as risk changes.",
    ],
    examFocus: ["Treat instability before completing a long differential.", "Select a vasoactive drug by the hemodynamic problem it needs to correct."],
  },
  "pediatrics-weight-and-special-populations": {
    sourceTopics: ["Pediatrics", "Geriatrics", "Pregnancy", "Obesity"],
    mustKnow: [
      "Pediatric doses often use weight or body surface area, but every calculation must be checked against the maximum recommended dose and an appropriate concentration.",
      "Use current measured weight, ideal body weight, adjusted body weight, or lean body weight only when the drug and calculation call for that specific measure.",
      "Older adults have greater vulnerability to anticholinergic burden, orthostasis, sedation, hypoglycemia, kidney-related accumulation, and complex regimens.",
      "Special-population decisions combine altered pharmacokinetics with goals of care, caregiver ability, formulation, access, and monitoring feasibility.",
    ],
    examFocus: ["Never omit units in a pediatric calculation.", "Do not assume total body weight is correct for every drug in obesity."],
  },
  "antimicrobial-foundations": {
    sourceTopics: ["Antimicrobial foundations", "Microbiology", "Antimicrobial stewardship"],
    mustKnow: [
      "Empiric therapy is based on syndrome, likely pathogens, severity, host factors, prior cultures, exposure, allergies, organ function, and local resistance.",
      "Definitive therapy narrows treatment after organism identification, susceptibility results, clinical response, and source control are assessed.",
      "Time-dependent and concentration-dependent killing influence dosing strategy, while tissue penetration determines whether an active drug can reach the site.",
      "A reported allergy must be clarified by reaction, timing, severity, treatment, and subsequent tolerance before excluding an antibiotic class.",
    ],
    examFocus: ["Distinguish colonization from infection.", "Choose the narrowest effective regimen and an appropriate duration."],
  },
  "bacterial-syndromes": {
    sourceTopics: ["Respiratory infections", "Urinary tract infections", "Skin infections", "Meningitis and endocarditis"],
    mustKnow: [
      "Syndrome-based treatment starts with site, severity, community or healthcare exposure, immune status, likely organisms, and whether cultures are needed before antibiotics.",
      "Source control can be as important as antibiotic selection in abscess, infected device, obstruction, endocarditis complication, or deep-seated infection.",
      "Urinary drug concentration, cerebrospinal-fluid penetration, lung penetration, and bone penetration are not interchangeable properties.",
      "Review renal dose, infusion method, therapeutic drug monitoring, QT risk, blood counts, liver tests, and C. difficile risk when relevant.",
    ],
    examFocus: ["Match the drug to the infection site and likely organism.", "Identify when cultures or source control must occur before narrowing therapy."],
  },
  "fungal-opportunistic-infections": {
    sourceTopics: ["Fungal infections", "Opportunistic infections", "Transplant infections"],
    mustKnow: [
      "Antifungal classes differ substantially in spectrum, site penetration, formulation, interactions, organ toxicity, and monitoring.",
      "Azoles have major CYP interaction potential and agent-specific QT, liver, absorption, and pregnancy considerations.",
      "Amphotericin products are not interchangeable and require attention to infusion reactions, kidney function, potassium, and magnesium.",
      "The patient's immune deficit, exposure, prophylaxis history, and infection site shape the opportunistic-infection differential.",
    ],
    examFocus: ["Identify the exact amphotericin formulation.", "Match antifungal spectrum and penetration to the organism and site."],
  },
  "stewardship-immunization-travel": {
    sourceTopics: ["Antimicrobial stewardship", "Immunizations", "Travel health"],
    mustKnow: [
      "Stewardship asks whether an antimicrobial is needed, whether cultures and source control are adequate, and whether spectrum, dose, route, and duration can be optimized.",
      "Vaccination decisions use age, prior doses, risk conditions, pregnancy, immune status, timing, and product-specific minimum intervals.",
      "Live vaccines are generally avoided during substantial immunosuppression and require careful timing around immunosuppressive therapy.",
      "Travel planning is destination and itinerary specific and includes routine vaccines, travel vaccines, malaria prevention when relevant, food and water precautions, and access to care.",
    ],
    examFocus: ["Do not restart a vaccine series merely because an interval was prolonged.", "Distinguish treatment from prophylaxis and routine vaccination from travel-specific vaccination."],
  },
  "antiviral-therapy": {
    sourceTopics: ["Influenza", "Herpes viruses", "Hepatitis"],
    mustKnow: [
      "Antiviral benefit often depends on early initiation, disease severity, immune status, site, organ function, and resistance risk.",
      "Acyclovir-family agents require renal dose review and hydration awareness, and high exposure can produce kidney or neurologic toxicity.",
      "Hepatitis treatment is selected by virus, genotype when relevant, disease stage, prior treatment, interactions, pregnancy considerations, and goals of cure or suppression.",
      "Many antiviral regimens have clinically significant transporter or enzyme interactions that must be checked as a complete regimen.",
    ],
    examFocus: ["Know which infections are cured and which are chronically suppressed.", "Check renal function and interaction burden before choosing a regimen."],
  },
  "hiv-pharmacotherapy": {
    sourceTopics: ["HIV", "Opportunistic infection prophylaxis", "Antiretroviral interactions"],
    mustKnow: [
      "Effective HIV treatment uses a complete combination regimen with a high resistance barrier, selected by resistance testing, prior therapy, organ function, comorbidities, pregnancy potential, and interactions.",
      "Adherence is essential because incomplete suppression permits resistance and disease progression.",
      "Integrase inhibitors can interact with polyvalent cations, and boosted regimens can produce extensive enzyme-mediated interactions.",
      "Opportunistic-infection prophylaxis and treatment depend on immune status, exposure history, symptoms, and recovery after antiretroviral therapy.",
    ],
    examFocus: ["Never evaluate an antiretroviral as if it were used alone.", "Separate treatment, pre-exposure prophylaxis, post-exposure prophylaxis, and opportunistic-infection prevention."],
  },
  "oncology-and-supportive-care": {
    sourceTopics: ["Oncology overview", "Cancer treatment", "Supportive care"],
    mustKnow: [
      "Cancer regimens are defined by diagnosis, stage, biomarkers, treatment intent, prior therapy, organ function, performance status, and protocol-specific timing.",
      "Before each cycle, verify body-size calculation when used, dose modifications, blood counts, organ function, premedications, hydration, interactions, and treatment-day parameters.",
      "Supportive care anticipates nausea and vomiting, neutropenia, anemia, thrombosis, tumor lysis, mucositis, pain, infection, and treatment-specific organ toxicity.",
      "Hazardous-drug handling, extravasation response, and oral-chemotherapy adherence are medication-system responsibilities as well as clinical issues.",
    ],
    examFocus: ["Classify emetogenic risk before selecting prophylaxis.", "Match rescue or prevention strategies to the treatment toxicity and timing."],
  },
  "toxicology-and-antidotes": {
    sourceTopics: ["Clinical toxicology", "Antidotes", "Substance-related emergencies"],
    mustKnow: [
      "Stabilize airway, breathing, circulation, glucose, temperature, and seizures before pursuing a complete toxin identification.",
      "A toxidrome narrows the differential through pupils, skin, bowel sounds, heart rate, blood pressure, temperature, mental status, and neuromuscular findings.",
      "Decontamination is not automatic. Activated charcoal and other measures require attention to timing, airway protection, toxin properties, and contraindications.",
      "Antidotes are toxin specific and do not replace supportive care. Dose, repeat dosing, monitoring, and rebound toxicity can be critical.",
    ],
    examFocus: ["Treat the life threat first.", "Match the antidote to both the toxin and the clinical syndrome."],
  },
};

export function getPharmacyStudyContent(slug) {
  return pharmacyStudyContent[slug] || null;
}
