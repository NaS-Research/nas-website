import { rifaximinPharmacologyQuestionBank } from "@/data/questionBanks/rifaximinPharmacology";

const check = (question, choices, rationale, slug) => ({ question, choices, answer: 0, rationale, reviewHref: `#${slug}` });
const rows = (...items) => items.map(([heading, body]) => ({ heading, body }));
const section = (slug, title, summary, concepts, application, lesson, keyPoints, quiz) => ({ slug, title, visual: slug, summary, concepts, application, lesson: rows(...lesson), keyPoints, check: quiz });

export const rifaximinPharmacologyModule = {
  slug: "rifaximin-pharmacology",
  number: "152",
  title: "Rifaximin Pharmacology",
  source: "RxPrep 2023 Chapter 22, reconciled with the June 2025 XIFAXAN label, 2026 ACG hepatic encephalopathy guidance, current ACG IBS guidance, CDC Yellow Book 2026, and current IDSA and SHEA CDI guidance",
  description: "Connect local RNA polymerase inhibition to three distinct labeled uses, precise dosing, hepatic exposure, interactions, safety, and the narrow post-vancomycin CDI boundary.",
  topics: ["Rifamycin structure", "RNA polymerase", "Local exposure", "Travelers' diarrhea", "Hepatic encephalopathy", "IBS-D", "Dosing", "Hepatic impairment", "Interactions", "CDI boundary"],
  outcomes: [
    "Explain rifaximin's rifamycin structure, RNA polymerase target, and resistance pathway.",
    "Connect limited absorption and fecal recovery to local usefulness and systemic limits.",
    "Select rifaximin only for the appropriate noninvasive travelers' diarrhea phenotype.",
    "Use rifaximin correctly to reduce overt hepatic encephalopathy recurrence.",
    "Apply the adult IBS-D course and its two-retreatment limit.",
    "Execute all three labeled schedules and calculate exact quantities.",
    "Interpret severe hepatic impairment, transporter inhibition, and warfarin monitoring.",
    "Use current hypersensitivity, adverse-effect, pregnancy, lactation, renal, and pediatric narratives.",
    "Distinguish the post-vancomycin recurrent CDI option from labeled rifaximin use.",
    "Close the plan with indication, regimen, monitoring, response, and exit criteria.",
  ],
  submodules: [
    section("structure-mechanism", "Connect the Rifamycin Scaffold to Transcription", "Rifaximin is a rifamycin derivative related to rifampin. It binds the beta subunit of bacterial DNA-dependent RNA polymerase and blocks transcription, but limited absorption prevents it from serving as a systemic rifamycin substitute.", ["Rifamycin scaffold", "RNA polymerase", "Transcription", "rpoB", "Cross-resistance"], "Trace scaffold, target binding, transcription arrest, local antibacterial activity, rpoB-mediated resistance, and the systemic-treatment boundary.", [["Name the direct target", "Rifaximin binds bacterial DNA-dependent RNA polymerase. Reduced protein production is downstream, but the ribosome is not the direct target."], ["Use structural similarity carefully", "Relationship to rifampin explains class hypersensitivity and resistance concerns. It does not make the drugs clinically interchangeable."], ["Resistance changes the target", "Chromosomal rpoB changes can reduce susceptibility and may confer cross-resistance among rifamycins."], ["Stewardship begins at the indication", "Use antibacterial rifaximin only for proven or strongly suspected bacterial disease that matches its narrow exposure and spectrum."]], ["RNA polymerase is the direct target.", "Transcription stops before translation falls.", "rpoB changes can reduce activity.", "Rifaximin is not systemic rifampin."], check("What is rifaximin's direct antibacterial target?", ["Bacterial DNA-dependent RNA polymerase", "The 30S ribosome", "DNA gyrase", "Peptidoglycan transpeptidase"], "Rifamycins inhibit bacterial transcription through RNA polymerase binding.", "structure-mechanism")),

    section("local-pk", "Keep Exposure in the Correct Compartment", "Plasma rifaximin concentrations are low and variable after oral dosing, while most recovered radioactivity appears in feces. This local profile supports gastrointestinal and gut-mediated uses, not bacteremia or invasive enteric infection.", ["Limited absorption", "Fecal recovery", "Low plasma exposure", "Food flexibility", "Renal evidence"], "Connect oral dose, intestinal lumen, limited absorption, hepatic and transporter modifiers, fecal elimination, and the clinical site that needs treatment.", [["The lumen is the intended compartment", "Oral rifaximin achieves useful intestinal exposure with very low average plasma concentrations. It is unsuitable for systemic bacterial infection."], ["Fecal recovery explains the local profile", "Almost all recovered radioactivity was found in feces, mostly as unchanged drug. Very little appeared in urine."], ["Food does not constrain dosing", "Every labeled regimen may be taken with or without food. A consistent schedule can support adherence."], ["Renal evidence has a boundary", "The label does not specify a renal dose adjustment, but dedicated pharmacokinetic study in renal impairment is absent. Do not turn a dosing convention into stronger evidence than exists."]], ["Local exposure drives usefulness.", "Systemic infection remains outside the role.", "Food is optional.", "No specified renal adjustment is not a renal study."], check("Why is rifaximin unsuitable for bacteremia?", ["Oral dosing produces limited systemic exposure", "It cannot bind bacterial RNA polymerase", "It is eliminated entirely in urine", "Food prevents absorption"], "The current label explicitly excludes systemic bacterial treatment because oral systemic exposure is limited.", "local-pk")),

    section("travelers-diarrhea", "Treat Only the Noninvasive Travelers' Diarrhea Phenotype", "Rifaximin is labeled from age 12 for travelers' diarrhea caused by noninvasive E. coli. Fever, blood, systemic toxicity, or suspected invasive pathogens move the patient to a different evaluation and treatment pathway.", ["Age 12", "Noninvasive E. coli", "Functional severity", "Dysentery", "Oral rehydration"], "Assess age, activity limitation, fever, blood, hydration, destination, invasive-pathogen risk, antibiotic need, and access to clinical care before selecting rifaximin.", [["Mild illness does not need an antibiotic", "Use fluids and symptom support when illness is tolerable and does not interfere with planned activity. Routine prophylaxis creates avoidable harm and resistance."], ["The labeled regimen is exact", "Give 200 mg orally three times daily for three days. The complete course is nine 200 mg tablets."], ["Invasive findings exclude rifaximin", "Do not use it for fever, bloody stool, or suspected Campylobacter, Shigella, or Salmonella. Azithromycin is preferred when antibiotic treatment of dysentery or febrile diarrhea is appropriate."], ["Create a backup plan", "Stop rifaximin and reconsider therapy if symptoms worsen or persist beyond 24 to 48 hours. Severe dehydration, systemic illness, or inability to drink warrants prompt care."]], ["Use only for noninvasive disease.", "Age must be at least 12.", "The course contains nine 200 mg tablets.", "Fever or blood changes the pathway."], check("Which patient best fits travelers' diarrhea rifaximin use?", ["A 22-year-old with moderate afebrile nonbloody diarrhea and no invasive features", "A 30-year-old with fever and bloody stool", "An 8-year-old with dysentery", "A patient with septic shock"], "The labeled phenotype is noninvasive E. coli travelers' diarrhea from age 12.", "travelers-diarrhea")),

    section("hepatic-encephalopathy", "Prevent Recurrence Without Missing the Precipitant", "Rifaximin 550 mg twice daily reduces overt hepatic encephalopathy recurrence in adults. Current care keeps lactulose, bowel quality, precipitant correction, nutrition, function, and liver trajectory in the same plan.", ["Overt HE recurrence", "550 mg twice daily", "Lactulose", "Precipitants", "Clinical monitoring"], "Confirm prior overt HE, exclude neurologic alternatives, correct triggers, optimize lactulose, add rifaximin, and define recurrence, safety, and transplant follow-up.", [["Use the labeled outcome", "Rifaximin reduces the risk of overt HE recurrence. It does not prove that every mental-status change in cirrhosis is hepatic encephalopathy."], ["Preserve the lactulose context", "Most pivotal-trial patients used lactulose. Current guidance titrates lactulose to two or three bowel movements daily and adds rifaximin to prevent recurrence."], ["Correct the precipitant", "Search for infection, gastrointestinal bleeding, constipation, dehydration, electrolyte disturbance, sedating drugs, and missed therapy. Drug initiation cannot replace stabilization."], ["Monitor the patient, not a rifaximin level", "Follow cognition, function, falls, admissions, bowel frequency and consistency, dehydration, adherence, nutrition, and liver-disease progression."]], ["The regimen is 550 mg twice daily.", "The goal is recurrence reduction.", "Lactulose usually remains foundational.", "Always search for a precipitant."], check("What is rifaximin's labeled hepatic encephalopathy role?", ["Reducing recurrent overt episodes in adults", "Diagnosing covert HE", "Replacing all precipitant evaluation", "Treating systemic sepsis"], "The labeled indication is reduction in the risk of overt HE recurrence.", "hepatic-encephalopathy")),

    section("ibs-d", "Use a Defined IBS-D Course", "Adults with appropriately evaluated IBS-D receive 550 mg three times daily for 14 days. If symptoms recur after response, the same course may be repeated up to two times.", ["IBS-D phenotype", "550 mg three times daily", "Fourteen days", "Two retreatments", "Global symptoms"], "Confirm IBS-D and alarm-feature assessment, define baseline pain and stool outcomes, execute one course, measure response, and count every permitted retreatment.", [["Establish the phenotype first", "Rifaximin is not a substitute for evaluating unexplained chronic diarrhea, bleeding, weight loss, anemia, nocturnal symptoms, or other alarm findings."], ["The course is finite", "Give 550 mg orally three times daily for 14 days. One course requires forty-two 550 mg tablets."], ["Retreatment has a ceiling", "After a successful first course, recurrent symptoms may receive up to two additional identical courses. Document response and count prior courses."], ["Measure patient-centered response", "Track abdominal pain, stool form and frequency, urgency, daily function, and durability. There is no microbiome test of cure."]], ["Confirm IBS-D before prescribing.", "Each course uses forty-two tablets.", "No more than two retreatments are labeled.", "Assess symptoms and function after therapy."], check("What is the labeled adult IBS-D regimen?", ["550 mg orally three times daily for 14 days", "200 mg orally three times daily for 3 days", "550 mg orally twice daily indefinitely", "400 mg orally three times daily for 20 days"], "Adult IBS-D uses a defined fourteen-day course at 550 mg three times daily.", "ibs-d")),

    section("dosing-administration", "Let the Indication Control the Prescription", "The same drug uses three labeled schedules. A safe order begins with the indication and ends with the correct strength, frequency, duration, total quantity, response checkpoint, and refill logic.", ["200 mg tablet", "550 mg tablet", "Three schedules", "Quantities", "With or without food"], "Say the indication aloud, select the regimen, calculate the quantity, verify age and course status, reconcile interactions, and write the completion or refill plan.", [["Travelers' diarrhea", "Use 200 mg three times daily for three days. Dispense nine 200 mg tablets."], ["Hepatic encephalopathy", "Use 550 mg twice daily as recurrence prevention. A thirty-day supply contains sixty 550 mg tablets."], ["IBS-D", "Use 550 mg three times daily for fourteen days. Dispense forty-two tablets and document retreatment eligibility."], ["Administration remains flexible", "All regimens may be taken with or without food. Do not let food flexibility blur the indication-specific schedule."]], ["TD uses 200 mg three times daily.", "HE uses 550 mg twice daily.", "IBS-D uses 550 mg three times daily.", "Calculate quantity before dispensing."], check("How many 550 mg tablets complete one IBS-D course?", ["42", "28", "14", "60"], "Three daily tablets for fourteen days equals forty-two tablets.", "dosing-administration")),

    section("hepatic-interactions", "Recognize When Local Exposure Becomes More Systemic", "Severe hepatic impairment and P-glycoprotein inhibition can markedly raise systemic rifaximin exposure. Warfarin adds a separate monitoring obligation even though the drug is usually described as minimally absorbed.", ["Child-Pugh C", "P-gp", "Cyclosporine", "Warfarin", "CYP3A"], "Review Child-Pugh and MELD context, decompensation, P-gp inhibitors, warfarin, narrow-therapeutic-index substrates, adverse effects, and the intended benefit before continuing.", [["Liver severity changes exposure", "Mean exposure was about ten, fourteen, and twenty-one times healthy-subject exposure in Child-Pugh A, B, and C groups. Use caution in class C disease."], ["Transport inhibition can be large", "Cyclosporine increased single-dose rifaximin peak concentration and total exposure markedly. Hepatic impairment can add to this effect."], ["Warfarin needs ownership", "Monitor INR and prothrombin time when rifaximin and warfarin are combined. Adjust warfarin if needed to maintain its target range."], ["CYP statements need context", "Clinically important induction is not expected with normal liver function, but higher exposure in severe impairment leaves uncertainty for sensitive substrates."]], ["Child-Pugh C requires caution.", "Cyclosporine can raise exposure sharply.", "Warfarin requires INR follow-up.", "Minimal absorption is not an interaction waiver."], check("Which combination creates the greatest concern for raised systemic rifaximin exposure?", ["Child-Pugh C cirrhosis plus cyclosporine", "Normal liver function plus water", "A meal plus acetaminophen", "Renal function monitoring plus oral rehydration"], "Severe hepatic impairment and P-gp inhibition can have additive exposure effects.", "hepatic-interactions")),

    section("safety-populations", "Use Indication-Specific Safety and Current Population Narratives", "Hypersensitivity, C. difficile-associated diarrhea, disease-specific adverse effects, fetal-risk evidence, absent lactation data, and indication-specific pediatric boundaries require more than a generic warning list.", ["Rifamycin allergy", "C. difficile", "Adverse effects", "Pregnancy", "Pediatrics"], "Review rifamycin allergy, new or worsening diarrhea, population-specific symptoms, liver and anticoagulation context, pregnancy and feeding, age, response, and escalation thresholds.", [["Rifamycin hypersensitivity is a contraindication", "Prior anaphylaxis, angioedema, or severe skin reaction to rifaximin or another rifamycin excludes routine use. Treat acute severe reactions urgently."], ["Adverse effects follow the population", "Headache was common in TD studies. HE studies included edema, nausea, dizziness, fatigue, ascites, anemia, and pruritus. IBS-D studies identified nausea and increased ALT."], ["Antibiotic-associated diarrhea remains possible", "Evaluate persistent, worsening, or post-treatment diarrhea for C. difficile and other causes rather than automatically extending therapy."], ["Use narrative population evidence", "Human pregnancy and lactation data are limited. TD use is established from age 12, while pediatric HE and IBS-D evidence is not established. Retired pregnancy letters do not belong in the decision."]], ["Rifamycin allergy can be severe.", "Adverse effects vary by indication.", "Rifaximin can still precede C. difficile disease.", "Pediatric evidence is indication-specific."], check("Which pediatric statement is accurate?", ["Travelers' diarrhea use is established from age 12, but pediatric HE and IBS-D use is not established", "All three indications begin at age 6", "HE is labeled in infants", "IBS-D has no adult indication"], "The pediatric evidence boundary differs across indications.", "safety-populations")),

    section("cdi-boundary", "Keep the CDI Sequence Narrow and Explicit", "Rifaximin is not labeled as routine CDI monotherapy. Current guidance retains oral vancomycin followed by rifaximin as one option for selected adults with multiple recurrences, with resistance and alternative strategies kept visible.", ["Multiple recurrences", "Post-vancomycin", "400 mg three times daily", "Twenty days", "Resistance"], "Confirm true recurrent CDI, episode count, prior treatment, current severity, vancomycin lead-in, alternatives, exact off-label sequence, resistance risk, and specialist follow-up.", [["This is an off-label sequence", "For multiple recurrences, one guideline option is vancomycin 125 mg four times daily for ten days followed by rifaximin 400 mg three times daily for twenty days."], ["Do not transfer the sequence", "Rifaximin is not recommended as initial CDI monotherapy and this 400 mg regimen does not belong to TD, HE, or IBS-D."], ["Resistance remains a concern", "High rifaximin MICs and resistance during treatment have been documented in C. difficile. Failure demands reassessment, not indefinite repetition."], ["Compare all recurrence options", "Fidaxomicin, vancomycin taper and pulse, microbiota-based therapy, and selected adjunctive prevention may be more appropriate depending on the episode and patient."]], ["The sequence follows vancomycin.", "It is reserved for multiple recurrences.", "The regimen is 400 mg three times daily for twenty days.", "Resistance limits generalization."], check("Which CDI use matches current guidance?", ["A defined rifaximin course after standard oral vancomycin for selected multiple recurrences", "Rifaximin monotherapy for every first episode", "Rifaximin prophylaxis after any antibiotic", "Rifaximin for asymptomatic colonization"], "The retained option is an off-label post-vancomycin sequence for multiple recurrences.", "cdi-boundary")),

    section("integration", "Close the Rifaximin Loop", "Rifaximin is safe to prescribe only when indication, phenotype, strength, schedule, organ function, interactions, evidence boundaries, response, and exit criteria agree.", ["Indication", "Phenotype", "Regimen", "Monitoring", "Exit"], "Reconstruct the indication, exclusions, age, product, quantity, hepatic status, P-gp and warfarin context, safety, response checkpoint, retreatment or refill logic, and escalation plan.", [["Start with the indication", "A familiar 550 mg tablet cannot tell you whether the patient needs HE prevention or an IBS-D course. Diagnosis controls the schedule."], ["Exclude the wrong phenotype", "Invasive diarrhea, systemic infection, unexplained cognitive change, alarm-feature chronic diarrhea, and initial CDI monotherapy all require a different path."], ["Make monitoring actionable", "Assign ownership for symptoms, liver trajectory, bowel plan, INR when relevant, recurrence, adverse effects, adherence, and access."], ["Define the exit before the first dose", "TD and IBS-D have course endpoints and response checks. HE requires continuing prevention with periodic reassessment. Off-label CDI use ends after its exact sequence."]], ["Indication comes before strength.", "Phenotype controls eligibility.", "Exposure modifiers need review.", "Every regimen needs an endpoint or reassessment plan."], check("Which sequence best prevents a rifaximin prescribing error?", ["Confirm indication and phenotype, select the exact regimen, review exposure modifiers, and define response and exit criteria", "Choose a tablet strength before reviewing the diagnosis", "Use one schedule for every indication", "Ignore liver function because absorption is low"], "Closed-loop prescribing makes the indication control every downstream decision.", "integration")),
  ],
  references: [
    {
      label: "DailyMed. XIFAXAN rifaximin prescribing information.",
      href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c5e8e2fd-7087-4b78-9181-cc259c0be2f1",
    },
    {
      label: "CDC Yellow Book 2026. Travelers' Diarrhea.",
      href: "https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/travelers-diarrhea.html",
    },
    {
      label: "American College of Gastroenterology. 2026 hepatic encephalopathy guideline highlights.",
      href: "https://webfiles.gi.org/GuidelineHighlights/ACGHepaticEncephGH.pdf",
    },
    {
      label: "American College of Gastroenterology. Clinical guideline for management of irritable bowel syndrome.",
      href: "https://webfiles.gi.org/links/virtgrandround/Intl_ACGVGR_Lacy_IBS_Guidelines.pdf",
    },
    {
      label: "SHEA and IDSA. 2017 guideline for Clostridioides difficile infection in adults and children.",
      href: "https://www.idsociety.org/practice-guideline/clostridium-difficile/",
    },
  ],
  disclaimer: "This module is for advanced education and is not patient-specific medical advice. Fever, bloody stool, severe dehydration, systemic toxicity, acute confusion, gastrointestinal bleeding, worsening liver disease, severe hypersensitivity, or persistent or worsening diarrhea requires clinical evaluation. Confirm the indication, phenotype, age, regimen, hepatic status, interactions, and current product information with the treating team.",
  sourceNotes: {
    reviewed: "The complete RxPrep rifaximin sequence was reconciled with current XIFAXAN labeling, the CDC Yellow Book 2026, current American College of Gastroenterology hepatic encephalopathy and IBS guidance, and current SHEA and IDSA CDI guidance.",
    reconciled: [
      "Rifamycin structure, bacterial RNA polymerase inhibition, limited systemic exposure, fecal recovery, and resistance",
      "Noninvasive travelers' diarrhea selection, functional severity, invasive-disease exclusions, hydration, and backup planning",
      "Overt hepatic encephalopathy recurrence reduction, lactulose context, precipitant correction, nutrition, and longitudinal function",
      "Finite IBS-D treatment, patient-centered response, and the label limit of two retreatment courses",
      "Indication-specific dosing and quantities, severe hepatic exposure, cyclosporine, warfarin monitoring, and population boundaries",
      "The narrow off-label post-vancomycin rifaximin option for selected adults with multiple CDI recurrences",
    ],
    deferred: [
      "Institution-specific hepatic encephalopathy, travelers' diarrhea, IBS-D, and recurrent-CDI pathways",
      "Patient-specific transplant evaluation, severe liver-disease interaction management, and anticoagulation adjustment",
      "Jurisdiction and payer-specific access, authorization, dispensing, travel prescribing, and follow-up workflows",
    ],
  },
  questionBank: rifaximinPharmacologyQuestionBank,
};


// Source-reconciled HE recurrence teaching and complete anchored assessment review.
const verifiedRifaximinHeLesson = {
  "metadata": {
    "summary": "Use rifaximin 550 mg twice daily for adult overt HE recurrence prevention. Preserve the lactulose evidence, distinguish acute guidance and correct triggers while monitoring function and safety.",
    "concepts": [
      "Recurrence prevention",
      "550 mg twice daily",
      "Lactulose partnership",
      "Trial context",
      "Precipitants",
      "Clinical monitoring"
    ],
    "application": "Confirm the HE history and severity, correct triggers, titrate lactulose safely, select the indication-specific rifaximin regimen and arrange accessible treatment and liver follow-up.",
    "keyPoints": [
      "The US HE regimen is 550 mg twice daily.",
      "Combination evidence supports retaining tolerated lactulose.",
      "Acute add-on guidance is distinct from the labeled indication.",
      "Follow clinical recurrence and function, not ammonia alone.",
      "Review severe hepatic exposure, interactions and medication access."
    ]
  },
  "bodies": [
    {
      "heading": "Use the labeled outcome",
      "body": "Rifaximin acts mainly in the intestine and reduces gut bacterial contributions to ammonia production. The US indication is reduction in risk of overt hepatic encephalopathy recurrence in adults, using 550 mg orally twice daily with or without food. This is 1,100 mg daily; one 550 mg tablet per dose requires 60 tablets for a prescribed 30-day supply. The HE label does not specify a fixed 3-day or 14-day course. Duration and reassessment belong to the liver-care plan. The regimen does not diagnose HE, cure the underlying liver disease or provide systemic infection treatment."
    },
    {
      "heading": "Read the placebo-controlled evidence in context",
      "body": "The pivotal six-month, double-blind trial enrolled 299 adults in remission after at least two HE episodes in the previous six months. Ninety-one percent received concomitant lactulose. Breakthrough HE occurred in 31/140 rifaximin recipients (22%) and 73/159 placebo recipients (46%); the label reports a 58% reduction from its time-to-event comparison, not a 58-percentage-point absolute reduction. HE-related hospitalization occurred in 19/140 (14%) versus 36/159 (23%), with a reported 50% time-to-event risk reduction. The small group not using lactulose could not establish a separate treatment effect. No participants had MELD scores above 25, and severe-liver-disease subgroup estimates were limited. Preserve these population and endpoint limits when discussing benefit."
    },
    {
      "heading": "Preserve the lactulose partnership",
      "body": "The current label also reports a six-month, randomized, open-label trial of 222 adults with at least one recent overt HE episode. Breakthrough HE occurred in 28/113 patients taking rifaximin alone (25%) and 15/109 taking rifaximin plus lactulose (14%). The hazard ratio for monotherapy versus combination was 1.98 (95% CI 1.06 to 3.7), indicating greater breakthrough hazard with monotherapy in that trial. This is not a 98-percentage-point difference or proof that no patient can use rifaximin alone. Current ACG guidance favors the combination when tolerated and recommends adding rifaximin for recurrent episodes despite lactulose maintenance. Do not automatically withdraw effective lactulose when rifaximin begins; significant intolerance requires an individualized plan."
    },
    {
      "heading": "Titrate the bowel plan safely",
      "body": "Lactulose is first-line outpatient prevention after an initial overt episode. Aim for about 2 to 3 soft stools daily, considering stool consistency as well as frequency. Excess catharsis can cause dehydration and electrolyte abnormalities that precipitate further HE. If there are frequent watery stools, weakness or poor intake, reassess lactulose dosing, hydration, electrolytes and cognition rather than increasing the dose or assuming rifaximin prevents these harms. Confirm adherence, tolerance and medication access before labeling a recurrence as failure of an adequate regimen."
    },
    {
      "heading": "Separate acute guidance from the label",
      "body": "The 2026 ACG guideline conditionally suggests rifaximin added to lactulose for acute overt HE, with low-certainty evidence. This is distinct from the US labeled recurrence-prevention indication. The book lists an older off-label 400 mg every-8-hour, 5-to-10-day acute regimen; do not substitute that schedule for labeled 550 mg twice-daily prevention or present it as the only current acute pathway. Rifaximin initiation does not replace clinical diagnosis, stabilization, lactulose when appropriate or treatment of a precipitant. An obtunded patient needs urgent airway and route assessment before oral medication."
    },
    {
      "heading": "Correct the precipitant and evaluate mimics",
      "body": "Evaluate new confusion clinically, using the time course, baseline cognition, examination and caregiver history. Assess glucose, infection, gastrointestinal bleeding, constipation, dehydration or excessive diuresis, kidney dysfunction, electrolyte disturbances, sedating drugs and missed therapy. Infection and HE can coexist; hospitalized ascites with suspected infection warrants diagnostic paracentesis. New focal neurological deficits, seizures or head trauma require urgent neurological evaluation and indicated imaging. Rifaximin is not adequate treatment for bacteremia, sepsis or SBP; those conditions require their own diagnostic and antimicrobial care alongside the HE plan."
    },
    {
      "heading": "Monitor the patient, not a drug level",
      "body": "Track mental status, daily function, falls, recurrent overt episodes, HE-related admissions, bowel quality, hydration, electrolytes, adherence and liver trajectory. Rifaximin concentrations are not the routine outcome used to judge HE prevention. An elevated ammonia concentration alone does not establish the diagnosis or justify dose escalation. If an obtained ammonia value is normal, reconsider other causes of confusion in addition to HE; do not automatically exclude HE solely from that result. The clinical examination and response to precipitant treatment guide reassessment."
    },
    {
      "heading": "Recognize increased exposure and interactions",
      "body": "Minimal usual absorption does not eliminate risk in advanced liver disease. The US label describes approximately 10-, 14- and 21-fold higher systemic exposure in Child-Pugh A, B and C patients, respectively, than in healthy volunteers. It recommends no routine hepatic dose adjustment because of local action, but requires caution in severe Child-Pugh C impairment. Cyclosporine and other P-glycoprotein inhibitors can further increase exposure. Review the need for the combination and monitor appropriately rather than calling severe impairment an absolute contraindication or assuming interaction risk is absent. With concomitant warfarin, monitor INR and prothrombin time and adjust warfarin when needed."
    },
    {
      "heading": "Keep serious adverse effects visible",
      "body": "Rifaximin is contraindicated with hypersensitivity to rifaximin, rifamycin antibiotics or product components. Peripheral edema, nausea, dizziness, fatigue and ascites appear in HE safety data; a new symptom still requires clinical assessment rather than automatic attribution to the drug or liver disease. C. difficile-associated diarrhea remains possible during or after antibiotic therapy, so persistent or worsening diarrhea is not always lactulose excess. Stop rifaximin and obtain urgent clinical evaluation for severe hypersensitivity or signs of a severe skin reaction. The current label reports SJS/TEN in cirrhosis and rhabdomyolysis with or without concomitant statins; muscle symptoms require evaluation."
    },
    {
      "heading": "Protect nutrition and muscle",
      "body": "Do not routinely restrict protein to treat HE. Muscle loss reduces an important route of ammonia handling and contributes to frailty. Current ACG guidance recommends 1.2 to 1.5 g/kg/day protein in outpatients with HE, with an individualized nutrition plan and adequate intake; a late-night snack may help. Vegetable or dairy protein can support tolerance without becoming a reason to underfeed. BCAA supplementation can be considered when food alone cannot meet protein needs. Zinc is an adjunct for documented low zinc with persistent symptoms despite lactulose and rifaximin, not a universal substitute for either medicine."
    },
    {
      "heading": "Reassess persistent disease and procedure-related risk",
      "body": "If mental status does not recover after 48 to 72 hours of adequate therapy and precipitant reversal, reassess missed infection, drugs, metabolic or neurological disease and portosystemic shunts. Deterioration requires immediate care rather than waiting for that interval. Refractory HE may warrant specialist shunt assessment. Separately, ACG 2026 recommends starting rifaximin 14 days before elective TIPS and continuing for at least six months in decompensated cirrhosis, with or without previous overt HE. This is procedure-specific guidance beyond the labeled recurrence indication; it is not a reason to delay an emergency procedure."
    },
    {
      "heading": "Make prevention executable",
      "body": "Assign a clinician to follow recurrence, tolerance and liver progression. Provide patients and caregivers a written bowel plan, reliable medication supply and instructions for worsening confusion, bleeding, fever, profuse diarrhea or inability to take medicines. Address affordability and refill interruptions before discharge. Recent overt HE requires driving-safety advice and assessment of falls and caregiver support. Recurrent or severe HE warrants timely transplant evaluation even with a modest MELD score; ACG suggests considering living-donor candidacy when multiple episodes occur with MELD below 15. De-escalation after clinical recompensation is a supervised, stepwise decision with monitoring, not an automatic stop after early cognitive recovery."
    }
  ],
  "check": {
    "rationale": "The US label indicates reduction in risk of overt HE recurrence in adults at 550 mg twice daily. It does not establish covert HE by a drug response, replace precipitant evaluation or provide systemic sepsis treatment. ACG guidance supports selected acute add-on use, which remains distinct from the labeled prevention indication."
  }
};
for (const lesson of rifaximinPharmacologyModule.submodules) {
  if (lesson.slug === "hepatic-encephalopathy") {
    Object.assign(lesson, verifiedRifaximinHeLesson.metadata);
    lesson.lesson = verifiedRifaximinHeLesson.bodies;
    Object.assign(lesson.check, verifiedRifaximinHeLesson.check);
  }
}
rifaximinPharmacologyModule.references.push(...[
  {
    "label": "Bajaj et al. ACG Clinical Guideline: Hepatic Encephalopathy (2026), full guideline.",
    "href": "https://doi.org/10.14309/ajg.0000000000003899"
  }
]);
Object.assign(rifaximinPharmacologyModule, {
  "sourceNotes": {
    "reviewed": "Teaching references include RxPrep 2023, current XIFAXAN labeling, CDC Yellow Book 2026, ACG hepatic encephalopathy and IBS guidance, and SHEA and IDSA CDI guidance.",
    "reconciled": [
      "Rifamycin structure, bacterial RNA polymerase inhibition, limited systemic exposure, fecal recovery, and resistance",
      "Noninvasive travelers' diarrhea selection, functional severity, invasive-disease exclusions, hydration, and backup planning",
      "Overt hepatic encephalopathy recurrence reduction, lactulose context, precipitant correction, nutrition, and longitudinal function",
      "Finite IBS-D treatment, patient-centered response, and the label limit of two retreatment courses",
      "Indication-specific dosing and quantities, severe hepatic exposure, cyclosporine, warfarin monitoring, and population boundaries",
      "The narrow off-label post-vancomycin rifaximin option for selected adults with multiple CDI recurrences"
    ],
    "deferred": [
      "Institution-specific hepatic encephalopathy, travelers' diarrhea, IBS-D, and recurrent-CDI pathways",
      "Patient-specific transplant evaluation, severe liver-disease interaction management, and anticoagulation adjustment",
      "Jurisdiction and payer-specific access, authorization, dispensing, travel prescribing, and follow-up workflows"
    ]
  }
});
