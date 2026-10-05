const c = (name, lesson, principle, action, assessment, hazard, why) => ({ name, lesson, principle, action, assessment, hazard, why });

const concepts = [
  c("rifaximin class", "structure-mechanism", "Rifaximin is a poorly absorbed rifamycin antibacterial that acts mainly in the intestinal lumen", "Match the local drug to a labeled gastrointestinal or gut-mediated indication", "Connect oral delivery, limited absorption, the disease compartment, and the intended outcome", "Treating rifaximin as a systemic rifamycin substitute", "Low systemic exposure is central to both its usefulness and its limits."),
  c("RNA polymerase target", "structure-mechanism", "Rifaximin binds the beta subunit of bacterial DNA-dependent RNA polymerase and blocks transcription", "Describe RNA synthesis inhibition as the direct antibacterial action", "Distinguish transcription from translation, DNA replication, and cell-wall synthesis", "Calling the ribosome the direct target", "The rifamycin target is bacterial DNA-dependent RNA polymerase."),
  c("rifamycin structural relationship", "structure-mechanism", "Rifaximin is a rifamycin derivative structurally related to rifampin", "Use the relationship to anticipate target overlap, hypersensitivity, and cross-resistance", "Review rifamycin allergy and microbiology before use", "Assuming structural similarity creates interchangeable systemic indications", "Related structure informs class effects but does not overcome rifaximin's limited absorption."),
  c("resistance mechanism", "structure-mechanism", "Changes in the rpoB-encoded RNA polymerase target can reduce rifaximin susceptibility", "Limit antibacterial use to a supported indication and preserve stewardship", "Assess diagnosis, prior rifamycin exposure, response, and alternative causes", "Escalating exposure without reconsidering resistance or diagnosis", "Target alteration and rifamycin cross-resistance can undermine activity."),

  c("limited systemic absorption", "local-pk", "Oral rifaximin produces low and variable plasma concentrations while most recovered radioactivity appears in feces", "Keep local exposure and systemic limitations visible in every indication", "Review gastrointestinal integrity, hepatic function, interacting transport inhibitors, and treatment site", "Using rifaximin for bacteremia or invasive enteric infection", "The label states that limited systemic exposure makes it unsuitable for systemic bacterial infections."),
  c("food administration", "local-pk", "Rifaximin may be taken with or without food", "Choose a reproducible schedule that supports indication-specific adherence", "Assess meal pattern, nausea, dose frequency, and missed-dose planning", "Inventing a fasting requirement", "Food does not restrict labeled administration."),
  c("fecal elimination", "local-pk", "Most recovered rifaximin-related radioactivity is found in feces, largely as unchanged drug", "Explain why gastrointestinal exposure is high and urinary treatment is unsupported", "Connect route, absorption, metabolism, excretion, and infection site", "Interpreting fecal recovery as renal clearance", "The mass-balance study recovered almost all radioactivity in feces and very little in urine."),
  c("renal evidence boundary", "local-pk", "Rifaximin pharmacokinetics have not been studied in renal impairment and the label specifies no renal dose adjustment regimen", "Avoid inventing a renal reduction while still monitoring the whole patient", "Assess kidney function, volume status, concurrent drugs, and the exact indication", "Claiming that renal pharmacokinetic evidence is complete", "No renal adjustment is specified, but that is not the same as a dedicated renal study."),

  c("travelers diarrhea candidate", "travelers-diarrhea", "Rifaximin treats travelers' diarrhea caused by noninvasive Escherichia coli in patients at least 12 years old", "Reserve it for an afebrile, nonbloody, noninvasive phenotype when an antibiotic is appropriate", "Assess age, functional severity, fever, blood, destination, hydration, and access to care", "Using rifaximin for every loose stool during travel", "The labeled pathogen and clinical phenotype are deliberately narrow."),
  c("invasive diarrhea boundary", "travelers-diarrhea", "Fever or bloody stool suggests invasive disease that rifaximin should not treat", "Use an invasive-diarrhea pathway and seek clinical evaluation when indicated", "Assess dysentery, fever, systemic toxicity, dehydration, and likely pathogens", "Continuing rifaximin despite worsening invasive features", "The label excludes fever, bloody stool, and suspected Campylobacter, Shigella, or Salmonella."),
  c("travelers diarrhea regimen", "travelers-diarrhea", "The labeled regimen is 200 mg orally three times daily for 3 days", "Write nine total 200 mg tablets and define a response checkpoint", "Verify strength, dose frequency, duration, hydration, and backup plan", "Substituting the 550 mg hepatic encephalopathy strength", "Indication determines both tablet strength and schedule."),
  c("travelers diarrhea stewardship", "travelers-diarrhea", "Mild travelers' diarrhea does not require antibiotics, while severe or dysenteric illness needs a different treatment strategy", "Use oral rehydration and functional severity before selecting an antibiotic", "Assess activity limitation, oral intake, stool features, comorbidity, and resistance context", "Using rifaximin as routine prophylaxis or for mild illness", "CDC guidance ties antibiotic use to functional severity and discourages routine prophylaxis."),

  c("hepatic encephalopathy indication", "hepatic-encephalopathy", "Rifaximin 550 mg twice daily reduces the risk of overt hepatic encephalopathy recurrence in adults", "Use it as recurrence prevention after the acute episode is addressed", "Review prior overt episodes, precipitating factors, lactulose use, adherence, and liver severity", "Presenting rifaximin as a stand-alone diagnostic test or acute stabilization measure", "The labeled outcome is reduced recurrence risk, not proof that every mental-status change is HE."),
  c("lactulose partnership", "hepatic-encephalopathy", "Most pivotal-trial patients used lactulose, and current guidance places lactulose first with rifaximin added for recurrence prevention", "Optimize lactulose and add rifaximin when the patient fits the recurrence pathway", "Assess bowel frequency and consistency, dehydration, adherence, recurrent episodes, and tolerance", "Stopping effective lactulose automatically when rifaximin begins", "The evidence base largely reflects concomitant lactulose and requires an individualized bowel plan."),
  c("precipitant search", "hepatic-encephalopathy", "Overt hepatic encephalopathy management requires identification and correction of precipitating causes", "Search for infection, bleeding, constipation, dehydration, electrolyte disturbance, sedatives, and missed therapy", "Assess airway, neurologic alternatives, hemodynamics, bowel pattern, medication exposure, and organ function", "Attributing every change in cognition to ammonia alone", "Rifaximin cannot replace diagnosis, stabilization, or precipitant correction."),
  c("hepatic encephalopathy monitoring", "hepatic-encephalopathy", "Clinical course, recurrence, cognition, function, bowel plan, nutrition, and transplant context matter more than routine rifaximin concentrations", "Define the monitoring owner and recurrence action plan", "Track mental status, falls, admissions, bowel pattern, dehydration, adherence, and liver trajectory", "Using a drug level as the primary outcome", "The goal is fewer overt episodes with safe, sustainable supportive therapy."),

  c("IBS-D regimen", "ibs-d", "Adults with IBS-D receive rifaximin 550 mg three times daily for 14 days", "Use a defined course after confirming the IBS-D phenotype and excluding alarm features", "Assess symptom pattern, alarm findings, prior evaluation, medication history, and treatment goals", "Turning a 14-day course into indefinite continuous therapy", "The labeled IBS-D regimen has a fixed dose and duration."),
  c("IBS-D retreatment", "ibs-d", "Recurrent IBS-D symptoms may be retreated up to two times with the same 14-day regimen", "Document response and recurrence before each permitted retreatment", "Review prior benefit, timing, alternative diagnoses, adverse effects, and remaining courses", "Refilling without confirming prior response or counting courses", "The label permits no more than two repeat courses after the initial course."),
  c("IBS-D selection", "ibs-d", "Rifaximin is recommended for global IBS-D symptoms in appropriately evaluated adults", "Use shared decision-making that includes expected benefit, course structure, cost, and alternatives", "Assess predominant stool form, pain, alarm features, comorbidities, and patient priorities", "Using rifaximin for unexplained chronic diarrhea without an IBS assessment", "A treatment recommendation does not remove the need to establish the phenotype."),
  c("IBS-D response", "ibs-d", "Response is judged by patient-centered improvement in global IBS-D symptoms rather than bacterial eradication", "Measure abdominal pain, stool pattern, urgency, function, and durability after the course", "Use baseline and follow-up symptom measures with a defined reassessment date", "Ordering a microbiome test of cure", "IBS-D treatment targets symptoms and function, not sterility."),

  c("three labeled schedules", "dosing-administration", "Travelers' diarrhea, hepatic encephalopathy, and IBS-D use different rifaximin schedules", "Verify indication before selecting strength, frequency, and duration", "Reconcile diagnosis, age, tablet strength, total quantity, course length, and retreatment eligibility", "Copying one indication's schedule into another", "The same molecule has three distinct labeled regimens."),
  c("travelers diarrhea quantity", "dosing-administration", "A complete travelers' diarrhea course contains nine 200 mg tablets", "Dispense the exact three-day quantity and provide a backup plan", "Calculate 1 tablet times 3 doses daily times 3 days", "Dispensing fourteen 550 mg tablets", "Three daily doses for three days equals nine tablets."),
  c("IBS-D quantity", "dosing-administration", "One IBS-D course contains forty-two 550 mg tablets", "Confirm access to the entire course before treatment begins", "Calculate 1 tablet times 3 doses daily times 14 days", "Dispensing twenty-eight tablets for a three-times-daily course", "Fourteen days of three daily doses equals forty-two tablets."),
  c("hepatic encephalopathy monthly quantity", "dosing-administration", "Thirty days of hepatic encephalopathy prevention contains sixty 550 mg tablets", "Align refill timing and adherence support with continuous prevention", "Calculate 1 tablet times 2 doses daily times 30 days", "Treating the preventive regimen as a fourteen-day course", "Twice-daily continuous therapy requires sixty tablets for thirty days."),

  c("severe hepatic impairment", "hepatic-interactions", "Systemic rifaximin exposure rises markedly with hepatic impairment and the label urges caution in Child-Pugh C disease", "Preserve indication-specific dosing while intensifying clinical review in severe impairment", "Assess Child-Pugh class, MELD context, decompensation, adverse effects, and interacting inhibitors", "Assuming poor absorption makes liver severity irrelevant", "Mean exposure was substantially higher across Child-Pugh classes, with the greatest increase in class C."),
  c("P-glycoprotein inhibitors", "hepatic-interactions", "Cyclosporine can substantially increase systemic rifaximin exposure", "Use caution and assess the combined effect of transporter inhibition and hepatic impairment", "Review P-gp inhibitors, liver function, indication, systemic symptoms, and alternatives", "Ignoring cyclosporine because rifaximin is usually local", "Transport inhibition can convert low average exposure into much higher exposure."),
  c("warfarin interaction", "hepatic-interactions", "INR changes have been reported with concomitant rifaximin and warfarin", "Monitor INR and prothrombin time and adjust warfarin when clinically necessary", "Establish baseline INR, follow-up timing, bleeding or thrombosis symptoms, diet, illness, and other interactions", "Assuming no monitoring is needed because rifaximin is minimally absorbed", "Current labeling explicitly calls for anticoagulation monitoring."),
  c("CYP3A uncertainty", "hepatic-interactions", "Clinically important CYP3A induction is not expected in people with normal liver function, but severe hepatic impairment creates uncertainty", "Avoid automatic interaction claims and monitor high-risk substrates when context warrants", "Assess liver severity, therapeutic index, concurrent inhibitors, and clinical response", "Declaring all CYP3A interactions impossible", "Systemic exposure and interaction potential vary with hepatic function."),

  c("rifamycin hypersensitivity", "safety-populations", "Rifaximin is contraindicated after hypersensitivity to rifaximin, other rifamycins, or product components", "Stop and urgently evaluate anaphylaxis, angioedema, or severe skin findings", "Review prior rifamycin reactions, airway, mucosa, skin, hemodynamics, and timing", "Dismissing allergy because the drug remains mostly in the gut", "Serious hypersensitivity is documented despite low average absorption."),
  c("indication-specific adverse effects", "safety-populations", "Common adverse effects differ across the three studied populations", "Interpret headache, edema, nausea, constipation, dizziness, ascites, ALT elevation, and other findings in disease context", "Compare onset, baseline disease, volume status, liver trajectory, laboratory findings, and competing causes", "Using one undifferentiated adverse-effect list", "Travelers' diarrhea, HE, and IBS-D trials enrolled clinically different populations."),
  c("C difficile-associated diarrhea warning", "safety-populations", "C. difficile-associated diarrhea can follow rifaximin as it can other antibacterials", "Reassess persistent, worsening, or post-treatment diarrhea instead of reflexively repeating rifaximin", "Review timing, stool pattern, antibiotics, systemic signs, assay appropriateness, and severity", "Assuming a gut-selective antibiotic cannot disrupt flora", "The current label carries an explicit C. difficile-associated diarrhea warning."),
  c("pregnancy narrative", "safety-populations", "Human pregnancy data are insufficient and animal studies support a fetal-risk warning", "Use a current narrative benefit-risk discussion rather than a retired letter", "Assess indication, pregnancy timing, disease severity, alternatives, animal findings, and follow-up", "Assigning an obsolete pregnancy category", "Current labeling states that rifaximin may cause fetal harm and provides narrative evidence."),
  c("lactation narrative", "safety-populations", "Human milk, infant-effect, and milk-production data are unavailable", "Balance maternal need, infant context, local exposure, alternatives, and patient values", "Assess infant age and health, feeding plan, indication, duration, and monitoring", "Declaring breastfeeding categorically safe or prohibited", "The evidence gap requires an individualized narrative decision."),
  c("pediatric boundaries", "safety-populations", "Travelers' diarrhea use is established from age 12, while pediatric HE and IBS-D safety and effectiveness are not established", "Verify age and indication before applying an adult regimen", "Assess exact age, diagnosis, formulation, alternatives, and specialist input", "Extending every indication to adolescents", "Pediatric evidence differs by indication rather than by drug alone."),

  c("recurrent CDI sequence", "cdi-boundary", "For multiple CDI recurrences, guidelines retain oral vancomycin followed by rifaximin as an option", "Use rifaximin only as the defined post-vancomycin sequence under current specialist guidance", "Review recurrence count, prior regimens, severity, microbiology, resistance, alternatives, and access", "Using rifaximin monotherapy for an initial CDI episode", "The evidence-backed option is a post-vancomycin sequence for multiple recurrences, not a labeled CDI indication."),
  c("recurrent CDI regimen", "cdi-boundary", "The guideline table describes rifaximin 400 mg three times daily for 20 days after a standard vancomycin course", "Write the off-label sequence explicitly and distinguish it from every labeled schedule", "Verify the vancomycin lead-in, recurrence history, dose, duration, resistance risk, and follow-up", "Confusing this sequence with travelers' diarrhea dosing", "The CDI regimen is off-label, episode-specific, and follows vancomycin."),
  c("CDI resistance concern", "cdi-boundary", "High rifaximin MICs and on-treatment resistance have been documented in C. difficile", "Reserve the sequence for selected multiply recurrent disease with specialist oversight", "Assess prior rifamycin exposure, microbiology, clinical response, recurrence alternatives, and stewardship", "Repeating rifaximin indefinitely after failure", "Resistance is a central reason not to generalize the regimen."),
  c("closed-loop rifaximin plan", "integration", "A complete rifaximin plan links exact indication, phenotype, schedule, organ function, interactions, safety, response, and exit criteria", "Reconstruct the plan before prescribing and at follow-up", "Assess diagnosis, patient, product, dose, duration, monitoring, escalation, and next step", "Starting from a familiar tablet strength instead of the clinical indication", "Closed-loop use prevents schedule transfer and indication drift."),
  c("definitive rifaximin reassessment", "integration", "Definitive reassessment re-confirms the indication and phenotype before deciding whether rifaximin should continue, finish, be retreated, be changed, or stop", "Use indication-specific outcomes and new safety evidence to complete a short course, sustain hepatic encephalopathy prevention, authorize a counted IBS-D retreatment, reject invasive diarrhea, or reconsider recurrent symptoms", "Assess fever and blood in stool, hydration, travelers' diarrhea response, mental status and precipitating factors, lactulose execution, IBS-D pain and stool pattern, prior course count, recurrent CDI sequence, liver severity, P-gp inhibitors, INR, hypersensitivity, and alternative diagnoses", "Refilling a familiar strength or transferring one schedule to another without re-establishing the indication, response target, retreatment limit, interaction risk, or exit criterion", "Rifaximin can be used safely only when each follow-up decision remains anchored to the correct disease phenotype and schedule."),
];

const dimensions = [
  ["principle", "Which principle best characterizes"],
  ["action", "Which clinical action best applies to"],
  ["assessment", "Which assessment is most appropriate for"],
  ["hazard", "Which reasoning hazard is most important to prevent with"],
];

const distractors = (index, field) => [7, 13, 23].map((offset) => concepts[(index + offset) % concepts.length][field]);
const generated = concepts.flatMap((item, index) => dimensions.map(([field, stem], dimension) => ({
  id: `rifaximin-pharmacology-${String(index * 4 + dimension + 1).padStart(3, "0")}`,
  lesson: item.lesson,
  question: `${stem} ${item.name}?`,
  choices: [item[field], ...distractors(index, field)],
  answer: 0,
  rationale: item.why,
  reviewHref: `#${item.lesson}`,
})));

const cases = [
  { lesson: "travelers-diarrhea", question: "A 28-year-old traveler has fever and bloody diarrhea. Which plan best respects rifaximin's boundary?", choices: ["Do not use rifaximin and evaluate for invasive diarrhea", "Use rifaximin 200 mg three times daily", "Use rifaximin 550 mg twice daily", "Give one 550 mg dose"], answer: 0, rationale: "Fever and blood exclude the labeled noninvasive travelers' diarrhea phenotype." },
  { lesson: "dosing-administration", question: "How many 200 mg tablets complete the labeled travelers' diarrhea course?", choices: ["9 tablets", "6 tablets", "14 tablets", "42 tablets"], answer: 0, rationale: "One tablet three times daily for three days equals nine tablets." },
  { lesson: "dosing-administration", question: "How many 550 mg tablets complete one labeled IBS-D course?", choices: ["42 tablets", "28 tablets", "14 tablets", "60 tablets"], answer: 0, rationale: "One tablet three times daily for fourteen days equals forty-two tablets." },
  { lesson: "hepatic-encephalopathy", question: "A patient with recurrent overt HE takes lactulose but has repeated admissions. Which rifaximin regimen matches the label?", choices: ["550 mg twice daily", "200 mg three times daily for 3 days", "550 mg three times daily for 14 days", "400 mg three times daily for 20 days"], answer: 0, rationale: "Adult HE recurrence prevention uses 550 mg twice daily." },
  { lesson: "ibs-d", question: "Symptoms recur after a clearly successful first IBS-D course. What is the labeled next step?", choices: ["Reassess the phenotype and consider one of up to two repeat 14-day courses", "Begin indefinite daily rifaximin", "Switch to the 200 mg tablet for one month", "Use the post-vancomycin CDI sequence"], answer: 0, rationale: "The label permits up to two retreatments with the same 550 mg three-times-daily fourteen-day regimen." },
  { lesson: "hepatic-interactions", question: "A patient with Child-Pugh C cirrhosis also takes cyclosporine. What is the main pharmacokinetic concern?", choices: ["Markedly increased systemic rifaximin exposure from hepatic impairment plus transporter inhibition", "Complete loss of intestinal exposure", "Rapid renal clearance", "Mandatory conversion to intravenous rifaximin"], answer: 0, rationale: "Severe hepatic dysfunction and P-gp inhibition can additively increase systemic exposure." },
  { lesson: "cdi-boundary", question: "Which rifaximin use matches the current multiply recurrent CDI option?", choices: ["400 mg three times daily for 20 days after a standard oral vancomycin course", "200 mg three times daily as initial CDI monotherapy", "550 mg twice daily for every first recurrence", "One 550 mg dose after diarrhea resolves"], answer: 0, rationale: "The guideline option is an off-label post-vancomycin rifaximin sequence for multiple recurrences." },
  { lesson: "integration", question: "Which order best prevents rifaximin schedule errors?", choices: ["Confirm indication and phenotype, select the matching regimen, review organ function and interactions, then define response and exit criteria", "Choose the tablet strength, then infer the indication", "Use 550 mg twice daily for all three indications", "Treat every diarrhea syndrome before assessing severity"], answer: 0, rationale: "Indication must control strength, frequency, duration, monitoring, and follow-up." },
].map((item, index) => ({ ...item, id: `rifaximin-pharmacology-${String(generated.length + index + 1).padStart(3, "0")}`, reviewHref: `#${item.lesson}` }));

export const rifaximinPharmacologyQuestionBank = [...generated, ...cases];


// Distinct HE cases preserve established IDs, keys, lesson links and ordering.
const verifiedRifaximinHeQuestions = {
  "rifaximin-pharmacology-049": {
    "question": "An adult recovering from recurrent overt HE asks what the US rifaximin indication promises. Which statement is accurate?",
    "choices": [
      "It reduces the risk of another overt HE episode.",
      "It establishes HE as the cause of every future episode of confusion.",
      "It reverses cirrhosis and removes the need for liver follow-up.",
      "It replaces systemic antibiotics when sepsis triggers confusion."
    ],
    "rationale": "The labeled adult HE outcome is reduced overt recurrence risk. It is not a diagnostic test or a cure for liver disease. Low systemic exposure also makes it unsuitable as sole treatment of sepsis; the precipitant and underlying liver disease still require care."
  },
  "rifaximin-pharmacology-050": {
    "question": "A 30-day prescription specifies one rifaximin 550 mg tablet twice daily for HE prevention. What quantity supplies the prescribed regimen?",
    "choices": [
      "60 tablets",
      "30 tablets",
      "42 tablets",
      "90 tablets"
    ],
    "rationale": "Two tablets/day × 30 days = 60 tablets, providing 1,100 mg/day. Thirty tablets would supply 15 days; 42 supplies 21 days and 90 supplies 45 days at this frequency. The calculation does not impose a 30-day stopping point on longer-term HE prevention."
  },
  "rifaximin-pharmacology-051": {
    "question": "The pivotal HE trial reported 22% breakthrough episodes with rifaximin and 46% with placebo, plus a 58% time-to-event risk reduction. Which interpretation is best?",
    "choices": [
      "The reported time-to-event reduction differs from the absolute difference in observed event proportions.",
      "Rifaximin produced a 58-percentage-point absolute reduction.",
      "The trial showed that every patient avoided recurrence.",
      "The result established the same benefit in patients with MELD above 25."
    ],
    "rationale": "The observed rounded proportions differ by about 24 percentage points; the label reports 58% from its time-to-event comparison. These measures are not interchangeable, and recurrence still occurred. No patients had MELD above 25, so that subgroup was not established by this trial."
  },
  "rifaximin-pharmacology-052": {
    "question": "In the label's six-month open-label HE trial, the hazard ratio for rifaximin alone versus rifaximin plus lactulose was 1.98. Which statement is correct?",
    "choices": [
      "Monotherapy had a higher breakthrough-HE hazard than combination therapy in that trial.",
      "Monotherapy had a 98-percentage-point lower recurrence rate.",
      "The groups had identical breakthrough-HE outcomes.",
      "The trial proved that no patient can ever use rifaximin without lactulose."
    ],
    "rationale": "A hazard ratio of 1.98 for monotherapy versus combination indicates approximately 98% higher breakthrough hazard over the studied period; the 95% CI was 1.06 to 3.7. Observed events were 28/113 (25%) versus 15/109 (14%). This open-label comparison supports retaining tolerated lactulose but does not create an absolute prohibition on individualized monotherapy."
  },
  "rifaximin-pharmacology-053": {
    "question": "A patient tolerates maintenance lactulose and is starting rifaximin for recurrent overt HE. Which bowel-plan advice is best?",
    "choices": [
      "Continue and titrate tolerated lactulose under the care plan rather than stopping it automatically.",
      "Stop lactulose solely because rifaximin has been prescribed.",
      "Replace lactulose with a rifaximin blood-level target.",
      "Increase lactulose until every stool is watery regardless of hydration."
    ],
    "rationale": "The pivotal placebo-controlled evidence largely included lactulose, and the active-controlled label trial favored combination over rifaximin alone. Retain tolerated lactulose with a goal of about 2 to 3 soft stools daily. Drug levels and excessive watery stools are not prevention targets; significant intolerance warrants reassessment."
  },
  "rifaximin-pharmacology-054": {
    "question": "An adult has recurrent overt HE despite adherence to a tolerated lactulose maintenance regimen. Which addition matches ACG guidance and the US prevention dose?",
    "choices": [
      "Rifaximin 550 mg orally twice daily, with continued trigger and bowel-plan review.",
      "Rifaximin 200 mg orally three times daily for three days as the HE maintenance regimen.",
      "Rifaximin 550 mg orally three times daily for fourteen days as the HE maintenance regimen.",
      "Rifaximin 400 mg orally every eight hours for five days as the labeled HE prevention regimen."
    ],
    "rationale": "ACG recommends adding rifaximin for recurrent episodes despite lactulose maintenance; the US prevention dose is 550 mg twice daily. The 200 mg three-times-daily three-day regimen is for qualifying travelers' diarrhea and the 550 mg three-times-daily fourteen-day regimen is for IBS-D. The book's older acute off-label schedule is not labeled HE prevention."
  },
  "rifaximin-pharmacology-055": {
    "question": "A patient taking lactulose and rifaximin develops eight watery stools daily, weakness and rising sodium. Which response is best?",
    "choices": [
      "Reassess excess catharsis, hydration, electrolytes, cognition and lactulose dosing promptly.",
      "Increase lactulose because watery diarrhea proves adequate HE control.",
      "Ignore the fluid loss because rifaximin prevents dehydration-related recurrence.",
      "Adjust rifaximin solely to normalize the ammonia concentration."
    ],
    "rationale": "Excess lactulose can cause dehydration and electrolyte abnormalities that precipitate HE. The bowel goal is soft stools without harmful fluid loss. Rifaximin does not neutralize these complications and ammonia alone should not drive dosing; persistent or worsening diarrhea also requires consideration of other causes, including C. difficile."
  },
  "rifaximin-pharmacology-056": {
    "question": "A team proposes rifaximin added to lactulose during acute overt HE. How should its evidence and indication be described?",
    "choices": [
      "ACG 2026 conditionally supports acute add-on use with low-certainty evidence, distinct from the US recurrence label.",
      "The US label specifically establishes rifaximin as stand-alone acute stabilization.",
      "The recommendation means airway and precipitant assessment can be omitted.",
      "The acute setting requires automatic substitution of the IBS-D fourteen-day schedule."
    ],
    "rationale": "The ACG recommendation for acute add-on rifaximin is conditional with low-certainty evidence. The US HE label addresses reduction in overt recurrence risk. Neither supports omitting airway and trigger care, using rifaximin alone as stabilization or importing the IBS-D regimen."
  },
  "rifaximin-pharmacology-057": {
    "question": "A hospitalized patient on rifaximin prevention develops confusion, fever and abdominal discomfort with ascites. Which plan is best?",
    "choices": [
      "Evaluate infection, including diagnostic paracentesis, while addressing HE and the identified precipitant.",
      "Assume rifaximin prevents SBP and defer infection assessment.",
      "Wait for ammonia normalization before investigating infection.",
      "Treat suspected sepsis with oral rifaximin alone because it is an antibiotic."
    ],
    "rationale": "Infection, including SBP, can precipitate HE and independently affect cognition. Hospitalized ascites with suspected infection warrants diagnostic paracentesis and appropriate infection care. Rifaximin prevention does not exclude infection or provide adequate systemic sepsis treatment; ammonia does not determine whether to investigate."
  },
  "rifaximin-pharmacology-058": {
    "question": "A patient with prior HE develops confusion and new unilateral arm weakness while taking rifaximin. Which response is safest?",
    "choices": [
      "Obtain urgent neurological evaluation and indicated imaging alongside HE assessment.",
      "Attribute the focal deficit to HE without assessing stroke or bleeding.",
      "Wait for a rifaximin concentration before evaluating the deficit.",
      "Omit imaging because guidance discourages it in every patient with cirrhosis."
    ],
    "rationale": "New focal findings require urgent evaluation for neurological disease. Guidance against routine imaging in typical confusion without new focal deficits does not apply here. Rifaximin levels do not resolve the differential, and HE and a neurological emergency can coexist."
  },
  "rifaximin-pharmacology-059": {
    "question": "An obtunded patient with suspected severe HE cannot swallow safely. What takes priority before giving oral rifaximin?",
    "choices": [
      "Urgent airway protection and a supervised assessment of treatment route and precipitants.",
      "Forcing the tablet orally to avoid delaying the prevention regimen.",
      "Using a feeding tube as proof that aspiration is impossible.",
      "Waiting for outpatient refill authorization before addressing consciousness."
    ],
    "rationale": "Severe impaired consciousness requires monitored care and airway assessment. Oral drug administration must account for aspiration risk; a feeding tube alone does not protect the airway. Acute stabilization and treatment of precipitants take priority over routine prevention dispensing."
  },
  "rifaximin-pharmacology-060": {
    "question": "A patient on HE prevention becomes confused and an obtained ammonia value is normal. Which interpretation is best?",
    "choices": [
      "Reconsider competing causes in addition to HE and use the clinical assessment to guide care.",
      "Exclude HE with certainty solely because ammonia is normal.",
      "Diagnose HE only if a later ammonia value becomes elevated.",
      "Escalate rifaximin solely to reach an ammonia target."
    ],
    "rationale": "A normal result prompts consideration of other diagnoses rather than automatic exclusion of HE. An elevated result alone would not establish HE either. Clinical examination, time course, precipitants and treatment response guide care; ammonia should not be a stand-alone rifaximin titration target."
  },
  "rifaximin-pharmacology-061": {
    "question": "Which follow-up best evaluates whether rifaximin prevention is helping an adult with recurrent overt HE?",
    "choices": [
      "Track recurrent episodes, cognition, function, falls, admissions, adherence and bowel safety.",
      "Use routine rifaximin concentrations as the sole effectiveness outcome.",
      "Judge success only by normalization of ammonia despite worsening cognition.",
      "Count dispensed tablets without assessing whether the patient takes them."
    ],
    "rationale": "Clinical recurrence and function are the meaningful prevention outcomes. Bowel quality, hydration, adherence and access affect the safety and success of the regimen. Neither routine rifaximin levels, ammonia alone nor dispensing counts replace assessment of the patient."
  },
  "rifaximin-pharmacology-062": {
    "question": "A caregiver reports that rifaximin will run out before the post-discharge visit because the prescription is unaffordable. Which plan is best?",
    "choices": [
      "Resolve access with the care team, arrange supply and a written recurrence plan, and assign follow-up responsibility.",
      "Wait for another admission before addressing the medication gap.",
      "Replace the prescription with the travelers' diarrhea three-day schedule without review.",
      "Stop all HE prevention once discharge cognition is normal."
    ],
    "rationale": "An effective plan requires accessible medicines, caregiver instructions and a clear monitoring owner. Address a foreseeable lapse before it occurs; the schedule remains indication-specific. Recovery at discharge does not automatically end recurrence prevention."
  },
  "rifaximin-pharmacology-063": {
    "question": "An outpatient with recurrent HE, muscle loss and MELD below 15 asks whether severe protein restriction will replace rifaximin and liver follow-up. Which response is best?",
    "choices": [
      "Maintain adequate individualized protein intake and arrange HE and transplant assessment rather than substituting protein restriction.",
      "Use severe protein restriction as the primary recurrence-prevention treatment.",
      "Defer transplant evaluation solely because MELD is below 15.",
      "Stop rifaximin permanently whenever confusion improves for one day."
    ],
    "rationale": "ACG recommends 1.2 to 1.5 g/kg/day protein in outpatients with HE and advises against routine protein restriction. Recurrent HE warrants liver and transplant assessment; ACG suggests considering living-donor candidacy with multiple episodes despite MELD below 15. Nutrition and temporary cognitive recovery do not independently authorize stopping prevention."
  },
  "rifaximin-pharmacology-064": {
    "question": "A patient with Child-Pugh C cirrhosis needs rifaximin prevention and takes cyclosporine. Which safety assessment is correct?",
    "choices": [
      "Severe hepatic impairment and P-gp inhibition can increase exposure and require careful review and caution.",
      "Minimal usual absorption makes the combination free of interaction risk.",
      "Child-Pugh C impairment is an absolute labeled contraindication equivalent to rifamycin allergy.",
      "The label requires an automatic unvalidated dose reduction based solely on Child-Pugh class."
    ],
    "rationale": "The label cautions in severe hepatic impairment and with P-gp inhibitors such as cyclosporine, which may further increase systemic exposure. It recommends no routine hepatic dose adjustment because of local action. Severe impairment is a caution, while rifaximin/rifamycin/product hypersensitivity is a contraindication; patient-specific review is still needed."
  },
  "rifaximin-pharmacology-160": {
    "rationale": "Adult overt HE recurrence prevention uses 550 mg twice daily. The 200 mg three-times-daily three-day regimen is for qualifying travelers' diarrhea, and 550 mg three times daily for fourteen days is the IBS-D regimen. A 400 mg three-times-daily twenty-day course belongs to a distinct off-label recurrent-CDI sequence. Continue the individualized lactulose, precipitant and follow-up plan; the HE label does not specify a fixed short course."
  }
};
for (const item of rifaximinPharmacologyQuestionBank) {
  if (verifiedRifaximinHeQuestions[item.id]) Object.assign(item, verifiedRifaximinHeQuestions[item.id]);
}
