// Original clinical cases; no fixed question-count quota.
export const celiacDiseaseQuestionBank = [
  {
    "id": "celiac-immune-trigger-case",
    "concept": "immune-trigger",
    "lesson": "immune-enteropathy",
    "difficulty": "Applied",
    "prompt": "A patient asks whether celiac disease is simply an immediate food allergy. What is the best response?",
    "choices": [
      "Explain that celiac disease is a distinct immune-mediated enteropathy triggered by gluten.",
      "Treat celiac disease as an IgE-mediated wheat allergy with identical testing and emergency management.",
      "Use immediate skin-prick testing as the sole diagnostic test for celiac disease.",
      "Explain that dietary response alone confirms celiac disease."
    ],
    "answer": 0,
    "explanation": "Celiac disease differs from IgE-mediated wheat allergy in mechanism, presentation, testing, and treatment context.",
    "reviewHref": "#immune-enteropathy"
  },
  {
    "id": "celiac-hla-role-case",
    "concept": "hla-role",
    "lesson": "immune-enteropathy",
    "difficulty": "Applied",
    "prompt": "An asymptomatic patient with normal serology has HLA-DQ2 on a consumer genetic panel. What is the best response?",
    "choices": [
      "Diagnose active celiac disease from a positive HLA-DQ2 result alone.",
      "Explain that genetic compatibility does not establish active disease and interpret it with the clinical context.",
      "Prescribe a lifelong gluten-free diet solely from the genetic result.",
      "Treat the genetic result as proof of current villous atrophy."
    ],
    "answer": 1,
    "explanation": "A positive compatible haplotype is common; absence is more useful for excluding disease.",
    "reviewHref": "#immune-enteropathy"
  },
  {
    "id": "celiac-mucosal-injury-case",
    "concept": "mucosal-injury",
    "lesson": "immune-enteropathy",
    "difficulty": "Applied",
    "prompt": "Duodenal biopsy shows villous atrophy while celiac serology is negative and the patient uses an enteropathy-associated medicine. What is the best response?",
    "choices": [
      "Assume villous atrophy is specific enough to diagnose celiac disease without diet, serology, or differential review.",
      "Begin corticosteroids for presumed refractory disease before confirming the original diagnosis.",
      "Reassess gluten exposure, assay context, medication injury, and other causes before assigning celiac disease.",
      "Ignore the medication history because drugs cannot injure villi."
    ],
    "answer": 2,
    "explanation": "Villous injury supports but does not uniquely identify celiac disease.",
    "reviewHref": "#immune-enteropathy"
  },
  {
    "id": "celiac-iron-deficiency-case",
    "concept": "iron-deficiency",
    "lesson": "clinical-spectrum",
    "difficulty": "Applied",
    "prompt": "A premenopausal adult has persistent iron deficiency despite replacement and no clear bleeding source. What is the best response?",
    "choices": [
      "Exclude celiac disease because a patient has no abdominal pain.",
      "Assume menstrual loss is the cause without further assessment.",
      "Wait for severe diarrhea before ordering celiac tests.",
      "Consider celiac testing while continuing an appropriate evaluation for other causes."
    ],
    "answer": 3,
    "explanation": "Extraintestinal and nutrient-deficiency presentations can precede classic gastrointestinal symptoms.",
    "reviewHref": "#clinical-spectrum"
  },
  {
    "id": "celiac-case-finding-case",
    "concept": "case-finding",
    "lesson": "clinical-spectrum",
    "difficulty": "Applied",
    "prompt": "A first-degree relative of a person with confirmed celiac disease reports fatigue and low ferritin. What is the best response?",
    "choices": [
      "Offer diagnostic testing while the relative is consuming gluten.",
      "Wait for steatorrhea and severe weight loss before considering testing.",
      "Diagnose celiac disease from family history without testing.",
      "Begin gluten withdrawal before collecting diagnostic samples."
    ],
    "answer": 0,
    "explanation": "Family history plus a compatible laboratory clue raises pretest probability.",
    "reviewHref": "#clinical-spectrum"
  },
  {
    "id": "celiac-serology-diet-case",
    "concept": "serology-diet",
    "lesson": "diagnostic-serology",
    "difficulty": "Applied",
    "prompt": "A patient stopped gluten two months ago and now requests definitive serology. What is the best response?",
    "choices": [
      "Start a gluten-free diet and wait for antibodies to disappear before the first diagnostic test.",
      "Explain that gluten restriction can reduce test sensitivity and coordinate a clinician-directed diagnostic strategy.",
      "Interpret negative serology now as definitive exclusion.",
      "Use symptom improvement alone as lifelong diagnostic confirmation."
    ],
    "answer": 1,
    "explanation": "Removing gluten before testing can make serology and biopsy less informative.",
    "reviewHref": "#diagnostic-serology"
  },
  {
    "id": "celiac-ttg-total-iga-case",
    "concept": "ttg-total-iga",
    "lesson": "diagnostic-serology",
    "difficulty": "Applied",
    "prompt": "A patient with recurrent sinopulmonary infections has negative tTG-IgA but total IgA was never measured. What is the best response?",
    "choices": [
      "Order tTG-IgA alone and declare celiac disease excluded even when total IgA is unknown.",
      "Repeat the same IgA assay without measuring total IgA.",
      "Measure total IgA and use an appropriate IgG-based pathway if deficiency is present.",
      "Treat a positive HLA result as proof that IgA is deficient."
    ],
    "answer": 2,
    "explanation": "IgA deficiency can make an IgA-based assay falsely reassuring.",
    "reviewHref": "#diagnostic-serology"
  },
  {
    "id": "celiac-high-probability-negative-case",
    "concept": "high-probability-negative",
    "lesson": "diagnostic-serology",
    "difficulty": "Applied",
    "prompt": "A patient eating gluten has weight loss, chronic diarrhea, iron deficiency, and normal total IgA with negative tTG-IgA. What is the best response?",
    "choices": [
      "Use one negative tTG-IgA to dismiss severe malabsorption regardless of total IgA and clinical context.",
      "Assign irritable bowel syndrome without evaluating the malabsorptive findings.",
      "Diagnose celiac disease from symptoms alone without further testing.",
      "Pursue endoscopic evaluation and a broader malabsorption differential."
    ],
    "answer": 3,
    "explanation": "Test sensitivity is imperfect and pretest probability determines the meaning of a negative result.",
    "reviewHref": "#diagnostic-serology"
  },
  {
    "id": "celiac-biopsy-sampling-case",
    "concept": "biopsy-sampling",
    "lesson": "biopsy-genetics",
    "difficulty": "Applied",
    "prompt": "Endoscopy obtained one distal duodenal specimen that was normal despite strongly positive serology. What is the best response?",
    "choices": [
      "Review sampling adequacy and consider repeat evaluation before rejecting the diagnosis.",
      "Use one random gastric biopsy to confirm celiac disease.",
      "Treat the single normal sample as definitive exclusion.",
      "Wait for severe nutrient deficiency before addressing the discordant results."
    ],
    "answer": 0,
    "explanation": "Inadequate sampling can miss patchy mucosal injury.",
    "reviewHref": "#biopsy-genetics"
  },
  {
    "id": "celiac-nonbiopsy-case",
    "concept": "nonbiopsy",
    "lesson": "biopsy-genetics",
    "difficulty": "Applied",
    "prompt": "A child has tTG-IgA above 10 times the upper limit of normal and positive EMA in a second specimen. What is the best response?",
    "choices": [
      "Apply a pediatric nonbiopsy rule to every adult with a mildly elevated antibody.",
      "Discuss the validated pediatric nonbiopsy option with the family and specialist team.",
      "Require symptoms to disappear before confirming the diagnosis.",
      "Use the same pathway regardless of whether IgA is deficient."
    ],
    "answer": 1,
    "explanation": "The pathway is narrow and requires specific serologic confirmation.",
    "reviewHref": "#biopsy-genetics"
  },
  {
    "id": "celiac-food-standard-case",
    "concept": "food-standard",
    "lesson": "gluten-free-treatment",
    "difficulty": "Applied",
    "prompt": "A patient asks what the gluten-free label means on an FDA-regulated packaged food. What is the best response?",
    "choices": [
      "Interpret gluten-free as a guarantee that no gluten molecule can ever be detected.",
      "Explain that the claim permits unrestricted barley malt as an ingredient.",
      "Explain the less-than-20-ppm standard and continue practical cross-contact counseling.",
      "Explain that this food rule also certifies every oral medicine."
    ],
    "answer": 2,
    "explanation": "The regulatory standard is quantitative and does not replace real-world preparation review.",
    "reviewHref": "#gluten-free-treatment"
  },
  {
    "id": "celiac-cross-contact-case",
    "concept": "cross-contact",
    "lesson": "gluten-free-treatment",
    "difficulty": "Applied",
    "prompt": "A patient remains symptomatic and regularly eats fries from a shared restaurant fryer. What is the best response?",
    "choices": [
      "Tell the patient to avoid every restaurant and social meal without first assessing workflow.",
      "Assume fries are safe because potatoes contain no gluten.",
      "Assume frying temperature removes all gluten contamination.",
      "Address the shared fryer as a plausible exposure and review other preparation practices with a dietitian."
    ],
    "answer": 3,
    "explanation": "Cross-contact prevention should be specific, practical, and proportional.",
    "reviewHref": "#gluten-free-treatment"
  },
  {
    "id": "celiac-oats-case",
    "concept": "oats",
    "lesson": "gluten-free-treatment",
    "difficulty": "Applied",
    "prompt": "A stable patient wants to add oats to improve fiber intake. What is the best response?",
    "choices": [
      "Use gluten-free oats and monitor tolerance rather than banning all oats automatically.",
      "Assume all oats are safe regardless of harvesting, processing, labeling, or response.",
      "Use ordinary bulk-bin oats without checking contamination controls.",
      "Judge long-term tolerance from one symptom-free serving."
    ],
    "answer": 0,
    "explanation": "Current guidance supports gluten-free oats with monitoring.",
    "reviewHref": "#gluten-free-treatment"
  },
  {
    "id": "celiac-dietitian-case",
    "concept": "dietitian",
    "lesson": "gluten-free-treatment",
    "difficulty": "Applied",
    "prompt": "A patient has normalized serology but severe food restriction and weight loss from fear of contamination. What is the best response?",
    "choices": [
      "Replace expert dietary review with a commercial gluten sensor alone.",
      "Use expert dietitian review to restore nutritional adequacy while preserving safety.",
      "Remove still more foods without assessing nutritional adequacy.",
      "Interpret normal antibodies as proof that weight loss needs no evaluation."
    ],
    "answer": 1,
    "explanation": "Adherence care includes preventing both exposure and unnecessary restriction.",
    "reviewHref": "#gluten-free-treatment"
  },
  {
    "id": "celiac-deficiency-repletion-case",
    "concept": "deficiency-repletion",
    "lesson": "nutrition-bone-prevention",
    "difficulty": "Applied",
    "prompt": "A patient with new celiac disease has low ferritin and vitamin D. What is the best response?",
    "choices": [
      "Give the same high-dose supplement bundle to every patient without measurements or endpoints.",
      "Wait for all deficiencies to correct spontaneously before follow-up.",
      "Treat the documented deficits, assess contributing factors, and define follow-up measurements.",
      "Use high-dose supplements indefinitely without repeat measurements."
    ],
    "answer": 2,
    "explanation": "Replacement should be targeted and monitored while intestinal healing proceeds.",
    "reviewHref": "#nutrition-bone-prevention"
  },
  {
    "id": "celiac-bone-health-case",
    "concept": "bone-health",
    "lesson": "nutrition-bone-prevention",
    "difficulty": "Applied",
    "prompt": "A postmenopausal patient with celiac disease has a prior low-trauma fracture. What is the best response?",
    "choices": [
      "Assume symptom resolution guarantees normal bone density.",
      "Defer skeletal evaluation because diarrhea has resolved.",
      "Treat the fracture history as unrelated to malabsorption risk.",
      "Evaluate bone density and secondary contributors while treating celiac disease and nutritional deficits."
    ],
    "answer": 3,
    "explanation": "Fracture history and patient-specific risks warrant direct skeletal assessment.",
    "reviewHref": "#nutrition-bone-prevention"
  },
  {
    "id": "celiac-vaccination-case",
    "concept": "vaccination",
    "lesson": "nutrition-bone-prevention",
    "difficulty": "Applied",
    "prompt": "An adult with celiac disease and functional asplenia has an uncertain vaccine history. What is the best response?",
    "choices": [
      "Use current risk-based pneumococcal guidance and reconcile prior doses.",
      "Ignore pneumococcal prevention because celiac disease affects only the intestine.",
      "Restart every prior vaccine series without checking the record.",
      "Assume an earlier pneumococcal dose completes protection regardless of type or timing."
    ],
    "answer": 0,
    "explanation": "Celiac-associated hyposplenism can increase pneumococcal risk, and the schedule changes over time.",
    "reviewHref": "#nutrition-bone-prevention"
  },
  {
    "id": "celiac-dh-treatment-case",
    "concept": "dh-treatment",
    "lesson": "dermatitis-herpetiformis",
    "difficulty": "Applied",
    "prompt": "A patient has biopsy-supported dermatitis herpetiformis and severe pruritus at diagnosis. What is the best response?",
    "choices": [
      "Use dapsone alone and tell the patient intestinal injury no longer matters.",
      "Begin strict gluten-free treatment and consider supervised dapsone with a safety plan.",
      "Treat the rash with dapsone and allow unrestricted gluten.",
      "Delay all rash treatment until intestinal histology normalizes."
    ],
    "answer": 1,
    "explanation": "Dapsone does not treat the gastrointestinal component of celiac disease.",
    "reviewHref": "#dermatitis-herpetiformis"
  },
  {
    "id": "celiac-dapsone-hematology-case",
    "concept": "dapsone-hematology",
    "lesson": "dermatitis-herpetiformis",
    "difficulty": "Applied",
    "prompt": "A patient taking dapsone develops cyanosis, dyspnea, and fatigue despite normal pretreatment G6PD activity. What is the best response?",
    "choices": [
      "Reassure a patient that normal G6PD testing eliminates all hemolysis and methemoglobin risk.",
      "Attribute new cyanosis to dermatitis without evaluating oxygen delivery.",
      "Hold dapsone and urgently evaluate for methemoglobinemia and hematologic toxicity.",
      "Continue treatment without checking hemoglobin because G6PD was normal."
    ],
    "answer": 2,
    "explanation": "Dapsone can produce clinically important oxidative hematologic toxicity in any patient.",
    "reviewHref": "#dermatitis-herpetiformis"
  },
  {
    "id": "celiac-dapsone-monitoring-case",
    "concept": "dapsone-monitoring",
    "lesson": "dermatitis-herpetiformis",
    "difficulty": "Applied",
    "prompt": "A patient on dapsone reports fever, sore throat, pallor, and a new diffuse rash. What is the best response?",
    "choices": [
      "Dispense dapsone indefinitely without laboratory or symptom surveillance.",
      "Use rash improvement as the only safety endpoint.",
      "Wait for visible jaundice before obtaining baseline liver tests.",
      "Arrange urgent evaluation and withhold further exposure according to the treating clinician's safety plan."
    ],
    "answer": 3,
    "explanation": "The symptom cluster can signal serious blood dyscrasia or hypersensitivity.",
    "reviewHref": "#dermatitis-herpetiformis"
  },
  {
    "id": "celiac-medicine-product-case",
    "concept": "medicine-product",
    "lesson": "medication-excipients",
    "difficulty": "Applied",
    "prompt": "A pharmacy changes manufacturers for a patient's maintenance tablet. What is the best response?",
    "choices": [
      "Recheck the new product rather than carrying forward the prior excipient conclusion.",
      "Answer a gluten question from the generic name alone.",
      "Carry forward the former manufacturer conclusion without checking the new product.",
      "Stop the medicine solely because a generic manufacturer changed."
    ],
    "answer": 0,
    "explanation": "Product changes can change inactive ingredients.",
    "reviewHref": "#medication-excipients"
  },
  {
    "id": "celiac-medicine-risk-case",
    "concept": "medicine-risk",
    "lesson": "medication-excipients",
    "difficulty": "Applied",
    "prompt": "A patient plans to stop an essential medicine because an online forum says generic tablets contain wheat flour. What is the best response?",
    "choices": [
      "Tell every patient with celiac disease that all tablets are likely to contain dangerous gluten.",
      "Advise against abrupt discontinuation, verify the exact product, and explain the current FDA position.",
      "Recommend stopping until every inactive ingredient has a laboratory gluten assay.",
      "Assume a generic tablet contains wheat flour because the brand is different."
    ],
    "answer": 1,
    "explanation": "Overstating risk can create direct harm and is inconsistent with current FDA information.",
    "reviewHref": "#medication-excipients"
  },
  {
    "id": "celiac-followup-serology-case",
    "concept": "followup-serology",
    "lesson": "follow-up-response",
    "difficulty": "Applied",
    "prompt": "An adult feels well and has normal tTG one year after diagnosis but asks whether healing is certain. What is the best response?",
    "choices": [
      "Declare the intestine healed from one normal antibody result.",
      "Advise gluten reintroduction because antibodies have normalized.",
      "Explain the limits of serology and discuss individualized follow-up, including whether later biopsy would change care.",
      "End follow-up because no gastrointestinal symptoms remain."
    ],
    "answer": 2,
    "explanation": "Clinical and serologic remission correlate imperfectly with histologic recovery.",
    "reviewHref": "#follow-up-response"
  },
  {
    "id": "celiac-repeat-biopsy-case",
    "concept": "repeat-biopsy",
    "lesson": "follow-up-response",
    "difficulty": "Applied",
    "prompt": "An adult has recurrent weight loss and iron deficiency despite reported adherence. What is the best response?",
    "choices": [
      "Wait until antibody levels become positive before investigating recurrent weight loss.",
      "Assume irritable bowel syndrome without evaluating recurrent malabsorption.",
      "Use normal serology alone to cancel further investigation.",
      "Arrange gastroenterology reassessment with repeat endoscopy and biopsy while investigating exposure and alternatives."
    ],
    "answer": 3,
    "explanation": "Objective reassessment is appropriate when malabsorptive findings recur.",
    "reviewHref": "#follow-up-response"
  },
  {
    "id": "celiac-nonresponsive-workup-case",
    "concept": "nonresponsive-workup",
    "lesson": "nonresponsive-refractory",
    "difficulty": "Applied",
    "prompt": "A patient has bloating despite normalized serology and careful dietitian-confirmed adherence. What is the best response?",
    "choices": [
      "Evaluate functional symptoms, food intolerance, SIBO, pancreatic disease, microscopic colitis, and other context-appropriate causes.",
      "Assume every persistent symptom proves ongoing gluten exposure or refractory disease.",
      "Start immunosuppression without confirming persistent enteropathy.",
      "Treat every symptom as deliberate dietary nonadherence."
    ],
    "answer": 0,
    "explanation": "Symptoms can persist without active celiac enteropathy.",
    "reviewHref": "#nonresponsive-refractory"
  },
  {
    "id": "celiac-refractory-disease-case",
    "concept": "refractory-disease",
    "lesson": "nonresponsive-refractory",
    "difficulty": "Applied",
    "prompt": "A patient has ongoing malabsorption and villous atrophy after more than 12 months of verified strict treatment with other causes excluded. What is the best response?",
    "choices": [
      "Diagnose refractory disease after two weeks of dietary treatment based on bloating alone.",
      "Refer for specialist evaluation of refractory celiac disease and associated complications.",
      "Diagnose type II from symptoms alone without tissue characterization.",
      "Escalate dietary restriction indefinitely without assessing complications."
    ],
    "answer": 1,
    "explanation": "The diagnosis requires persistent enteropathy, adequate treatment duration, exclusion of alternatives, and expert care.",
    "reviewHref": "#nonresponsive-refractory"
  }
];

// Original cases for the distinct ESsCD 2025 adult pathway.
celiacDiseaseQuestionBank.push(
  {
    id: "celiac-esscd-adult-confirmation", concept: "adult-no-biopsy", difficulty: "Applied",
    prompt: "A 32-year-old eating gluten has tTG-IgA 12 times the assay upper limit and no alarm features. Under ESsCD 2025, what is needed before a specialist can confirm celiac disease without biopsy?",
    choices: ["Begin the diet and confirm only by symptom improvement", "Confirm serology in an independent blood sample while gluten intake continues, with shared decision-making", "Use a positive HLA result instead of a second blood sample", "Repeat the same specimen until the reported value increases"],
    answer: 1, explanation: "The conditional European adult pathway requires a separate confirmatory sample and specialist decision-making. Symptoms or HLA compatibility do not replace this requirement. This is distinct from ACG 2023's more conservative adult pathway.", reviewHref: "#biopsy-genetics",
  },
  {
    id: "celiac-esscd-threshold-calculation", concept: "adult-no-biopsy-threshold", difficulty: "Applied",
    prompt: "An adult's tTG-IgA is 180 U/mL and the assay upper limit is 20 U/mL. Does this meet the initial ESsCD 2025 no-biopsy threshold?",
    choices: ["Yes, because every positive assay qualifies", "Yes, because 180 is greater than 10", "No; 180 divided by 20 is 9 times the upper limit, below the required 10-fold threshold", "No, because only a negative result qualifies"],
    answer: 2, explanation: "The threshold is a multiple of that assay's upper limit, not an absolute antibody value: 180/20 = 9. This result does not meet the high-titer criterion. Further diagnostic assessment is still warranted; failing the no-biopsy threshold does not exclude celiac disease.", reviewHref: "#biopsy-genetics",
  },
  {
    id: "celiac-esscd-alarm-exclusion", concept: "adult-no-biopsy-exclusions", difficulty: "Applied",
    prompt: "A 38-year-old has high-titer celiac serology but also progressive dysphagia. Is it appropriate to omit endoscopy solely because the antibody result exceeds ten times the upper limit?",
    choices: ["No; dysphagia requires investigation and excludes this shortcut under the European pathway", "Yes; antibody magnitude overrides all alarm symptoms", "Yes; age below 45 is the only requirement", "Yes; trial dietary response can replace evaluation of dysphagia"],
    answer: 0, explanation: "The ESsCD no-biopsy pathway is not appropriate when red flags suggest another condition requiring investigation. High antibody titers do not remove the need to investigate dysphagia.", reviewHref: "#biopsy-genetics",
  },
);

celiacDiseaseQuestionBank.push(
  {
    id: "celiac-dapsone-normal-g6pd", concept: "dapsone-baseline", difficulty: "Applied",
    prompt: "An adult has normal G6PD activity before starting dapsone for dermatitis herpetiformis. Which monitoring plan is appropriate?",
    choices: ["No blood counts are needed because hemolysis is excluded", "Monitor only the rash because intestinal symptoms are absent", "Continue CBC and hemoglobin monitoring because normal G6PD does not eliminate hematologic toxicity", "Repeat G6PD alone instead of checking hemoglobin"],
    answer: 2, explanation: "Dapsone can cause hemolysis and methemoglobinemia without G6PD deficiency. Baseline screening identifies added risk but does not replace blood-count monitoring or counseling about serious symptoms.", reviewHref: "#dermatitis-herpetiformis",
  },
  {
    id: "celiac-dapsone-fever", concept: "dapsone-urgent-symptoms", difficulty: "Applied",
    prompt: "Three weeks after starting dapsone, a patient develops fever and sore throat. The next scheduled CBC is in five days. What is the best response?",
    choices: ["Wait five days because scheduled monitoring is sufficient", "Hold dapsone and arrange urgent assessment, including a blood count", "Increase dapsone because the symptoms indicate uncontrolled dermatitis", "Check only tTG-IgA before deciding what to do"],
    answer: 1, explanation: "Fever and sore throat can signal agranulocytosis or another serious illness during dapsone therapy. Urgent evaluation should not wait for the routine blood-count appointment; celiac serology does not assess this toxicity.", reviewHref: "#dermatitis-herpetiformis",
  },
  {
    id: "celiac-dh-biopsy-site", concept: "dh-diagnostic-specimen", difficulty: "Applied",
    prompt: "Dermatitis herpetiformis is suspected in a patient with intensely itchy extensor lesions. Which specimen is preferred for direct immunofluorescence?",
    choices: ["Only the crust from a scratched vesicle", "A blood sample for HLA typing", "A gastric biopsy taken during endoscopy", "Uninvolved skin next to an active lesion"],
    answer: 3, explanation: "Perilesional uninvolved skin is the preferred site for direct immunofluorescence in suspected dermatitis herpetiformis. A lesional specimen for routine histology answers a different question, and HLA compatibility does not establish the skin diagnosis.", reviewHref: "#dermatitis-herpetiformis",
  },
);

celiacDiseaseQuestionBank.push(
  {
    id: "celiac-gip-limits", concept: "selected-gluten-peptide-testing", difficulty: "Applied",
    prompt: "A patient with persistent symptoms has one negative urine gluten-peptide test. Which interpretation is appropriate?",
    choices: ["It proves the intestine has healed", "It excludes every gluten exposure over the past year", "It rules out refractory disease without biopsy", "It assesses recent exposure and cannot replace dietary review or prove mucosal healing"],
    answer: 3, explanation: "Selected peptide testing may complement the workup under ESsCD guidance, but its detection window and imperfect sensitivity limit conclusions from a negative sample. Symptoms, dietary assessment, serology and indicated tissue evaluation still matter.", reviewHref: "#follow-up-response",
  },
  {
    id: "celiac-rcd-subtypes", concept: "refractory-subtypes", difficulty: "Applied",
    prompt: "Confirmed refractory celiac disease is being classified. Which finding supports type II and changes the concern for lymphoma?",
    choices: ["An aberrant clonal intraepithelial lymphocyte population on specialist testing", "Bloating alone after two weeks of dietary treatment", "A positive HLA-DQ2 result alone", "A normal tTG result without tissue assessment"],
    answer: 0, explanation: "Type II refractory disease is characterized by an aberrant lymphocyte population and carries greater lymphoma risk. Symptoms, HLA compatibility or serology alone cannot establish the subtype.", reviewHref: "#nonresponsive-refractory",
  },
);

celiacDiseaseQuestionBank.push(
  {
    id: "celiac-reproductive-evaluation", concept: "reproductive-presentation", difficulty: "Applied",
    prompt: "A patient with unexplained infertility, recurrent miscarriage, and iron deficiency asks whether celiac disease could contribute. What is the best response?",
    choices: ["Confirm celiac disease from the reproductive history alone", "Promise that removing gluten will restore fertility", "Consider celiac testing while evaluating other causes, before prescribing a lifelong gluten-free diet", "Exclude celiac disease because diarrhea is absent"],
    answer: 2, explanation: "This combination warrants consideration of celiac disease, but reproductive findings are not specific. Confirm the diagnosis and address nutritional deficits alongside appropriate reproductive evaluation.", reviewHref: "#clinical-spectrum",
  },
  {
    id: "celiac-cancer-screening", concept: "malignancy-risk-context", difficulty: "Applied",
    prompt: "An adult with treated non-refractory celiac disease, no alarm symptoms, and routine screening up to date requests annual lymphoma scans. What is the best response?",
    choices: ["Apply type II refractory-disease lymphoma risk to this patient", "Arrange annual scans for every patient with celiac disease", "Explain that cancer is impossible once symptoms improve", "Explain the low absolute risk and continue usual screening, investigating new concerning findings if they arise"],
    answer: 3, explanation: "ESsCD guidance does not recommend extra routine malignancy screening in non-refractory disease without clinical suspicion. Type II refractory disease has a different risk profile.", reviewHref: "#nonresponsive-refractory",
  },
);
