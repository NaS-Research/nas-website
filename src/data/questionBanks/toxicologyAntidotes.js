const acetaminophenCases = [
  {
    "id": "tox-apap-timing",
    "conceptGroup": "acetaminophen-timing",
    "lesson": "acetaminophen-poisoning",
    "difficulty": "Applied",
    "question": "A reliable history establishes that several acetaminophen doses were taken between 08:00 and 10:00 today. A level is drawn at 14:00. Which time belongs on the acute nomogram?",
    "choices": [
      "6 hours from the first dose",
      "4 hours from the final dose",
      "2 hours because dosing lasted 2 hours",
      "No time can be used whenever more than one dose was taken"
    ],
    "answer": 0,
    "explanation": "14:00 minus 08:00 is 6 hours. Multiple doses within this acute interval do not by themselves invalidate the nomogram; the history must be reliable.",
    "reviewHref": "#acetaminophen-poisoning"
  },
  {
    "id": "tox-apap-repeated",
    "conceptGroup": "acetaminophen-repeated",
    "lesson": "acetaminophen-poisoning",
    "difficulty": "Applied",
    "question": "Excess acetaminophen was taken over three days. A learner plots the level using the most recent dose. What is the error?",
    "choices": [
      "Using the acute nomogram for an exposure spanning more than 24 hours",
      "Obtaining a drug concentration",
      "Assessing aminotransferases",
      "Calling the poison center"
    ],
    "answer": 0,
    "explanation": "Repeated exposure over several days requires a separate laboratory and clinical pathway; the last dose cannot reset the exposure clock.",
    "reviewHref": "#acetaminophen-poisoning"
  },
  {
    "id": "tox-apap-dose",
    "conceptGroup": "acetaminophen-dose",
    "lesson": "acetaminophen-poisoning",
    "difficulty": "Applied",
    "question": "A 60-kg patient is prescribed an initial IV acetylcysteine dose of 150 mg/kg. The concentrate is 200 mg/mL. How much concentrate is needed before dilution?",
    "choices": [
      "45 mL",
      "9 mL",
      "75 mL",
      "150 mL"
    ],
    "answer": 0,
    "explanation": "60 \u00d7 150 = 9,000 mg. Dividing by 200 mg/mL gives 45 mL. This is concentrate withdrawal, not the final infusion volume.",
    "reviewHref": "#acetaminophen-poisoning"
  },
  {
    "id": "tox-apap-rate",
    "conceptGroup": "acetaminophen-rate",
    "lesson": "acetaminophen-poisoning",
    "difficulty": "Advanced",
    "question": "An order specifies 6,000 mg acetylcysteine over 16 hours. The pharmacy supplies a verified final admixture of 6 mg/mL. Which pump rate delivers the order?",
    "choices": [
      "62.5 mL/hour",
      "375 mL/hour",
      "16 mL/hour",
      "6 mL/hour"
    ],
    "answer": 0,
    "explanation": "6,000 \u00f7 16 = 375 mg/hour. Then 375 \u00f7 6 = 62.5 mL/hour. Dose rate and volume rate have different units.",
    "reviewHref": "#acetaminophen-poisoning"
  },
  {
    "id": "tox-apap-weight",
    "conceptGroup": "acetaminophen-weight",
    "lesson": "acetaminophen-poisoning",
    "difficulty": "Applied",
    "question": "A 30-kg child is ordered the labeled Acetadote two-bag regimen. What needs correction?",
    "choices": [
      "Select the three-bag regimen and appropriate pediatric fluid volumes",
      "Keep two bags because every child receives the adult fluid volumes",
      "Omit the second infusion",
      "Delay all treatment until weight exceeds 41 kg"
    ],
    "answer": 0,
    "explanation": "The labeled two-bag option begins at 41 kg; this child needs the three-bag approach and weight-appropriate preparation.",
    "reviewHref": "#acetaminophen-poisoning"
  },
  {
    "id": "tox-apap-injury",
    "conceptGroup": "acetaminophen-injury",
    "lesson": "acetaminophen-poisoning",
    "difficulty": "Advanced",
    "question": "At the planned end of IV therapy, acetaminophen is below 10 micrograms/mL, but AST/ALT are rising and INR is 2.4. What is the best action?",
    "choices": [
      "Continue acetylcysteine with toxicology-guided reassessment",
      "Stop because the drug level is low",
      "Stop because the last bag has ended",
      "Restart the ingestion clock and plot a new nomogram"
    ],
    "answer": 0,
    "explanation": "Liver injury and impaired synthetic function remain unresolved. A low acetaminophen concentration alone does not satisfy stopping criteria.",
    "reviewHref": "#acetaminophen-poisoning"
  },
  {
    "id": "tox-apap-recovery",
    "conceptGroup": "acetaminophen-recovery",
    "lesson": "acetaminophen-poisoning",
    "difficulty": "Advanced",
    "question": "At reassessment, AST and ALT have each fallen 35% from peak, acetaminophen is below 10 micrograms/mL and INR is 1.5. Creatinine and lactate are worsening. Is this enough to stop?",
    "choices": [
      "No; worsening prognostic markers require continued evaluation and treatment",
      "Yes; aminotransferase decline is the only criterion",
      "Yes; INR below 2 overrides other findings",
      "Yes; only a positive acetaminophen level can prolong therapy"
    ],
    "answer": 0,
    "explanation": "Stopping criteria are assessed together. Worsening kidney and metabolic markers prevent assuming recovery from the liver-test trend alone.",
    "reviewHref": "#acetaminophen-poisoning"
  },
  {
    "id": "tox-apap-reaction",
    "conceptGroup": "acetaminophen-reaction",
    "lesson": "acetaminophen-poisoning",
    "difficulty": "Applied",
    "question": "Soon after IV acetylcysteine starts, a patient develops wheezing and hypotension. Which immediate response is appropriate?",
    "choices": [
      "Stop the infusion and treat the severe reaction urgently",
      "Continue unchanged because the antidote is needed",
      "Wait for the current bag to finish",
      "Treat only if a rash also appears"
    ],
    "answer": 0,
    "explanation": "This is a severe reaction requiring immediate treatment. Subsequent rescue therapy must be coordinated after stabilization rather than simply omitted.",
    "reviewHref": "#acetaminophen-poisoning"
  }
];

const additionalCases = [
  {
    "id": "tox-oral-route",
    "conceptGroup": "oral-route",
    "lesson": "acetaminophen-poisoning",
    "difficulty": "Applied",
    "question": "A vial of 20% acetylcysteine says oral/inhalation use and NOT FOR INJECTION. An IV order is waiting. What should the pharmacist do?",
    "choices": [
      "Obtain the correct injectable product",
      "Inject this vial because its concentration matches Acetadote",
      "Filter the oral product and inject it",
      "Give the IV dose orally without changing the order"
    ],
    "answer": 0,
    "explanation": "Matching concentration does not establish route suitability. The oral/inhalation product must not be injected.",
    "reviewHref": "#acetaminophen-poisoning"
  },
  {
    "id": "tox-oral-emesis",
    "conceptGroup": "oral-emesis",
    "lesson": "acetaminophen-poisoning",
    "difficulty": "Applied",
    "question": "A prescribed oral acetylcysteine dose is vomited 30 minutes after administration. What does the oral-product label direct?",
    "choices": [
      "Repeat that oral dose and reassess tolerance",
      "Skip it and wait until the next scheduled dose",
      "Double every remaining dose",
      "Permanently stop the antidote"
    ],
    "answer": 0,
    "explanation": "Vomiting within 1 hour calls for repeating the dose. Persistent intolerance also requires a route and airway reassessment.",
    "reviewHref": "#acetaminophen-poisoning"
  },
  {
    "id": "tox-mushroom-delay",
    "conceptGroup": "mushroom-delay",
    "lesson": "cellular-blood-toxins",
    "difficulty": "Applied",
    "question": "Vomiting begins 9 hours after a meal of foraged mushrooms. Initial aminotransferases are normal. What is the safest interpretation?",
    "choices": [
      "Possible delayed hepatotoxicity requiring urgent toxicology assessment and serial testing",
      "Normal initial enzymes exclude amatoxins",
      "Cooking the mushrooms excludes toxicity",
      "Atropine alone prevents subsequent liver failure"
    ],
    "answer": 0,
    "explanation": "Delayed gastrointestinal symptoms can precede measurable liver injury. A reassuring first blood test does not close the evaluation.",
    "reviewHref": "#cellular-blood-toxins"
  },
  {
    "id": "tox-mushroom-target",
    "conceptGroup": "mushroom-target",
    "lesson": "cellular-blood-toxins",
    "difficulty": "Applied",
    "question": "A reference table pairs amatoxin-containing mushrooms with atropine. Which correction matters most?",
    "choices": [
      "Distinguish muscarinic effects from amatoxin-mediated hepatic injury",
      "Use atropine as definitive liver protection",
      "Treat all mushroom poisonings with the same antidote",
      "Wait for mushroom identification before supportive care"
    ],
    "answer": 0,
    "explanation": "Atropine addresses muscarinic effects; it is not an antidote to amatoxin-mediated liver injury.",
    "reviewHref": "#cellular-blood-toxins"
  }
];

const leadCases = [
  {
    "id": "tox-lead-salt",
    "conceptGroup": "lead-salt",
    "lesson": "lead-poisoning-chelation",
    "difficulty": "Applied",
    "question": "The order specifies calcium disodium EDTA, but the vial says edetate disodium. What is the appropriate action?",
    "choices": [
      "Administer half the dose",
      "Stop preparation and resolve the product mismatch",
      "Use it if serum calcium was normal yesterday",
      "Administer it more slowly without clarification"
    ],
    "answer": 1,
    "explanation": "The salts are not interchangeable. Disodium EDTA can deplete calcium and cause fatal arrhythmia.",
    "reviewHref": "#lead-poisoning-chelation"
  },
  {
    "id": "tox-lead-course-count",
    "conceptGroup": "lead-course-count",
    "lesson": "lead-poisoning-chelation",
    "difficulty": "Calculation",
    "question": "A prescribed succimer course contains 3 doses daily for 5 days, then 2 daily for 14 days. How many doses are scheduled?",
    "choices": [
      "38",
      "57",
      "43",
      "19"
    ],
    "answer": 2,
    "explanation": "(3 × 5) + (2 × 14) = 43 doses. The interval changes after day 5.",
    "reviewHref": "#lead-poisoning-chelation"
  },
  {
    "id": "tox-lead-disposition",
    "conceptGroup": "lead-disposition",
    "lesson": "lead-poisoning-chelation",
    "difficulty": "Applied",
    "question": "A child has a confirmed venous blood lead of 52 mcg/dL. The exposure continues at home and no safe alternative housing is available. Which issue must the team address?",
    "choices": [
      "A normal appetite permits routine discharge",
      "Chelation makes continued exposure acceptable",
      "Only the next blood draw matters",
      "Consider hospitalization while arranging source control and expert treatment"
    ],
    "answer": 3,
    "explanation": "An unsafe discharge environment can justify admission even without overt neurological symptoms.",
    "reviewHref": "#lead-poisoning-chelation"
  }
];

const ironCases = [
  {
    "id": "tox-iron-elemental-dose",
    "conceptGroup": "iron-elemental-dose",
    "lesson": "acute-iron-poisoning",
    "difficulty": "Calculation",
    "question": "A 15-kg child swallowed eight tablets labeled 325 mg ferrous sulfate, providing 65 mg elemental iron each. What elemental dose should be reported?",
    "choices": [
      "173 mg/kg",
      "34.7 mg/kg",
      "520 mg/kg",
      "4.3 mg/kg"
    ],
    "answer": 1,
    "explanation": "8 × 65 = 520 mg elemental iron; 520 ÷ 15 = 34.7 mg/kg. The salt mass is not the elemental dose.",
    "reviewHref": "#acute-iron-poisoning"
  },
  {
    "id": "tox-iron-pump-rate",
    "conceptGroup": "iron-pump-rate",
    "lesson": "acute-iron-poisoning",
    "difficulty": "Calculation",
    "question": "A 20-kg patient has a specialist order for deferoxamine 15 mg/kg/hour. Pharmacy confirms a final concentration of 3 mg/mL. Which pump rate implements that order?",
    "choices": [
      "5 mL/hour",
      "15 mL/hour",
      "100 mL/hour",
      "300 mL/hour"
    ],
    "answer": 2,
    "explanation": "15 × 20 = 300 mg/hour; 300 ÷ 3 = 100 mL/hour. This calculation does not establish how long treatment should continue.",
    "reviewHref": "#acute-iron-poisoning"
  },
  {
    "id": "tox-iron-cumulative-dose",
    "conceptGroup": "iron-cumulative-dose",
    "lesson": "acute-iron-poisoning",
    "difficulty": "Calculation",
    "question": "At an unchanged 300 mg/hour, how much deferoxamine would run over 24 hours, and why should that be checked?",
    "choices": [
      "300 mg; only the hourly rate matters",
      "3,000 mg; below every protocol limit",
      "7,200 mg; therefore automatically appropriate",
      "7,200 mg; reconcile the selected protocol and clinical reassessment before continuation"
    ],
    "answer": 3,
    "explanation": "300 × 24 = 7,200 mg. Correct arithmetic is not authorization for that duration or total.",
    "reviewHref": "#acute-iron-poisoning"
  },
  {
    "id": "tox-iron-timed-labs",
    "conceptGroup": "iron-timed-labs",
    "lesson": "acute-iron-poisoning",
    "difficulty": "Applied",
    "question": "An iron-overdose handoff reports only ferritin and total iron-binding capacity. Which missing information best addresses acute exposure assessment?",
    "choices": [
      "A timed serum iron concentration interpreted with the clinical course",
      "Another ferritin result alone",
      "Only the original tablet color",
      "A chronic chelation adherence score"
    ],
    "answer": 0,
    "explanation": "Acute poisoning requires the appropriate serum measurement, ingestion timing, and physiologic assessment; chronic iron-status markers are not interchangeable.",
    "reviewHref": "#acute-iron-poisoning"
  },
  {
    "id": "tox-iron-regimen-reconciliation",
    "conceptGroup": "iron-regimen-reconciliation",
    "lesson": "acute-iron-poisoning",
    "difficulty": "Applied",
    "question": "A pharmacist sees a deferoxamine order assembled from one protocol’s initial infusion and another source’s maintenance schedule. What is the best response?",
    "choices": [
      "Approve it because both sources name deferoxamine",
      "Clarify the complete intended regimen, total-dose boundary, and reassessment plan with toxicology",
      "Use whichever source allows the larger total",
      "Replace it with chronic subcutaneous pump dosing"
    ],
    "answer": 1,
    "explanation": "A complete, coherent order must specify the selected treatment strategy. Mixing schedules without clinical reconciliation can change exposure and risk.",
    "reviewHref": "#acute-iron-poisoning"
  }
];

const metalTestingCases = [
  {
    "id": "tox-metal-provoked-sample",
    "conceptGroup": "metal-provoked-sample",
    "lesson": "arsenic-mercury-exposure",
    "difficulty": "Applied",
    "question": "A urine metal test collected after a chelator dose exceeds a laboratory range established in untreated people. What conclusion is justified?",
    "choices": [
      "The comparison establishes poisoning",
      "The test alone proves the need for repeated chelation",
      "The comparison is invalid for diagnosing poisoning",
      "The result proves organ injury is reversible"
    ],
    "answer": 2,
    "explanation": "Chelation changes urinary excretion. ACMT rejects using this comparison to diagnose poisoning or justify additional chelation.",
    "reviewHref": "#arsenic-mercury-exposure"
  },
  {
    "id": "tox-metal-mercury-cleanup",
    "conceptGroup": "metal-mercury-cleanup",
    "lesson": "arsenic-mercury-exposure",
    "difficulty": "Applied",
    "question": "A family proposes vacuuming shiny elemental-mercury droplets from carpet. Which response best limits further exposure?",
    "choices": [
      "Vacuum twice to remove smaller droplets",
      "Avoid ordinary vacuuming and obtain poison-center/environmental cleanup guidance",
      "Heat the room before vacuuming",
      "Wait for the droplets to evaporate indoors"
    ],
    "answer": 1,
    "explanation": "Ordinary vacuuming can increase mercury vapor and spread contamination.",
    "reviewHref": "#arsenic-mercury-exposure"
  },
  {
    "id": "tox-metal-dimercaprol-selection",
    "conceptGroup": "metal-dimercaprol-selection",
    "lesson": "arsenic-mercury-exposure",
    "difficulty": "Applied",
    "question": "A proposed dimercaprol order is intended to treat iron poisoning. Which concern requires correction?",
    "choices": [
      "All chelators have the same indication",
      "Only capsule availability matters",
      "Peanut oil neutralizes iron",
      "Dimercaprol can form more toxic complexes with iron"
    ],
    "answer": 3,
    "explanation": "BAL labeling warns against iron, cadmium and selenium poisoning; drug selection is metal specific.",
    "reviewHref": "#arsenic-mercury-exposure"
  },
  {
    "id": "tox-metal-mercury-evidence",
    "conceptGroup": "metal-mercury-evidence",
    "lesson": "arsenic-mercury-exposure",
    "difficulty": "Applied",
    "question": "A report describes two patients receiving succimer after elemental-mercury vapor exposure. Which statement accurately uses that evidence?",
    "choices": [
      "It documents off-label use, without establishing a universal regimen for all mercury forms",
      "It establishes FDA approval for every mercury compound",
      "It proves permanent neurological injury will reverse",
      "It removes the need for environmental remediation"
    ],
    "answer": 0,
    "explanation": "A case report documents treatment and outcomes in those patients. Its design does not establish a broadly applicable dosing or efficacy rule.",
    "reviewHref": "#arsenic-mercury-exposure"
  }
];

const radiationCases = [
  {
    "id": "tox-ki-neonate-volume",
    "conceptGroup": "ki-neonate-volume",
    "lesson": "thallium-radiation-antidotes",
    "difficulty": "Applied",
    "question": "An emergency team directs KI for a 2-week-old infant using the FDA dosing table and a 65-mg/mL solution. Which listed volume supplies the recommended rounded neonatal dose?",
    "choices": [
      "0.25 mL",
      "0.5 mL",
      "1 mL",
      "2 mL"
    ],
    "answer": 0,
    "explanation": "The published neonatal volume is 0.25 mL. At 65 mg/mL it contains 16.25 mg, corresponding to the rounded 16-mg dose. Use a marked dosing device and arrange neonatal thyroid follow-up.",
    "reviewHref": "#thallium-radiation-antidotes"
  },
  {
    "id": "tox-ki-maternal-protection",
    "conceptGroup": "ki-maternal-protection",
    "lesson": "thallium-radiation-antidotes",
    "difficulty": "Applied",
    "question": "A breastfeeding mother has received KI after a radioiodine release. What is the appropriate interpretation for her newborn?",
    "choices": [
      "The maternal dose guarantees infant protection",
      "The infant should receive the adult dose through breast milk",
      "Assess the infant separately for an indicated dose, feeding safety and thyroid follow-up",
      "Giving the mother extra doses eliminates infant monitoring"
    ],
    "answer": 2,
    "explanation": "KI in breast milk is insufficient for infant protection. The newborn needs a separate assessment and age-appropriate treatment when indicated; feeding alternatives and thyroid monitoring also matter.",
    "reviewHref": "#thallium-radiation-antidotes"
  },
  {
    "id": "tox-thallium-stopping-measurement",
    "conceptGroup": "thallium-stopping-measurement",
    "lesson": "thallium-radiation-antidotes",
    "difficulty": "Applied",
    "question": "A patient receiving Prussian blue and hemodialysis for severe thallium poisoning first reaches a serum thallium concentration of 0.08 mg/L. Which interpretation is appropriate?",
    "choices": [
      "Both treatments must stop after this single result",
      "The result satisfies the Prussian blue urine endpoint",
      "Continue specialist reassessment: EXTRIP accounts for sustained serum reduction and redistribution, while Prussian blue has a separate urine endpoint",
      "Persistent neuropathy proves neither treatment removed any thallium"
    ],
    "answer": 2,
    "explanation": "One serum measurement does not establish sustained reduction. EXTRIP suggests serum thallium below 0.1 mg/L for at least 72 hours; the Prussian blue label instead uses a 24-hour urine thallium concentration below 5 micrograms/L, with an additional radiation condition for radioactive thallium. These endpoints are not interchangeable.",
    "reviewHref": "#thallium-radiation-antidotes"
  },
  {
    "id": "tox-radiation-capsule-count",
    "conceptGroup": "radiation-capsule-count",
    "lesson": "thallium-radiation-antidotes",
    "difficulty": "Applied",
    "question": "An adult prescription specifies Radiogardase 3 g per dose. The capsules contain 0.5 g each. How many capsules supply one dose?",
    "choices": [
      "2",
      "3",
      "6",
      "18"
    ],
    "answer": 2,
    "explanation": "3 g divided by 0.5 g/capsule gives six capsules per dose; frequency is a separate instruction.",
    "reviewHref": "#thallium-radiation-antidotes"
  },
  {
    "id": "tox-radiation-ki-boundary",
    "conceptGroup": "radiation-ki-boundary",
    "lesson": "thallium-radiation-antidotes",
    "difficulty": "Applied",
    "question": "A patient asks whether KI can replace sheltering after a radiation alert. Which explanation is appropriate?",
    "choices": [
      "It protects the entire body",
      "It offers thyroid protection against radioiodine only and does not replace emergency instructions",
      "It removes cesium from blood",
      "It reverses established thyroid injury"
    ],
    "answer": 1,
    "explanation": "KI has a specific thyroid-blocking role, not universal radiation protection.",
    "reviewHref": "#thallium-radiation-antidotes"
  },
  {
    "id": "tox-radiation-pediatric-evidence",
    "conceptGroup": "radiation-pediatric-evidence",
    "lesson": "thallium-radiation-antidotes",
    "difficulty": "Applied",
    "question": "A pediatric dose appears in a countermeasure label. What must still be checked before applying it to another contaminant?",
    "choices": [
      "Whether the product name is short enough",
      "Whether all contaminants share the same element",
      "Whether the capsule can be counted",
      "Indication-specific pediatric evidence and specialist guidance"
    ],
    "answer": 3,
    "explanation": "A dosing table is not evidence that every pediatric indication has established safety and efficacy.",
    "reviewHref": "#thallium-radiation-antidotes"
  }
];

const aluminumCases = [
  {
    "id": "tox-aluminum-interval",
    "conceptGroup": "aluminum-interval",
    "lesson": "aluminum-toxicity-dialysis",
    "difficulty": "Applied",
    "question": "A specialist protocol specifies deferoxamine 5 mg/kg once weekly for a 60-kg patient. Which calculation preserves the stated interval?",
    "choices": [
      "300 mg once weekly",
      "300 mg each hour",
      "3,000 mg daily",
      "5 mg total weekly"
    ],
    "answer": 0,
    "explanation": "5 mg/kg multiplied by 60 kg gives 300 mg for the specified weekly dose. This calculation does not independently authorize treatment.",
    "reviewHref": "#aluminum-toxicity-dialysis"
  },
  {
    "id": "tox-aluminum-label",
    "conceptGroup": "aluminum-label",
    "lesson": "aluminum-toxicity-dialysis",
    "difficulty": "Applied",
    "question": "A dialysis service proposes deferoxamine for aluminum toxicity. What must the pharmacist reconcile?",
    "choices": [
      "The existence of an oral capsule",
      "The U.S. label contraindication in severe renal disease or anuria and the specialist rationale",
      "A universal FDA-approved aluminum dose",
      "A requirement to copy the acute iron regimen"
    ],
    "answer": 1,
    "explanation": "Off-label specialist use must not be presented as though the label contraindication were absent.",
    "reviewHref": "#aluminum-toxicity-dialysis"
  },
  {
    "id": "tox-aluminum-prevention",
    "conceptGroup": "aluminum-prevention",
    "lesson": "aluminum-toxicity-dialysis",
    "difficulty": "Applied",
    "question": "Which intervention addresses an ongoing aluminum exposure risk in dialysis?",
    "choices": [
      "Rely only on symptom relief",
      "Stop all phosphate management permanently",
      "Review aluminum-containing medicines and investigate dialysate contamination",
      "Increase chelation without investigating the source"
    ],
    "answer": 2,
    "explanation": "Source control accompanies clinical management; KDIGO specifically addresses binders and dialysate contamination.",
    "reviewHref": "#aluminum-toxicity-dialysis"
  }
];

const triageCases = [
  {
    "id": "tox-triage-emergency-channel",
    "conceptGroup": "triage-emergency-channel",
    "lesson": "toxicology-stabilization",
    "difficulty": "Applied",
    "question": "A person cannot be awakened after swallowing an unknown product. A relative opens an online poison questionnaire. What should happen first?",
    "choices": [
      "Complete every questionnaire field",
      "Wait for the product manufacturer to respond",
      "Activate emergency services immediately",
      "Give fluid by mouth before calling"
    ],
    "answer": 2,
    "explanation": "An inability to awaken requires emergency activation; an online questionnaire must not delay it.",
    "reviewHref": "#toxicology-stabilization"
  },
  {
    "id": "tox-triage-multiple-products",
    "conceptGroup": "triage-multiple-products",
    "lesson": "toxicology-stabilization",
    "difficulty": "Applied",
    "question": "An awake adult accidentally takes two different medicines together and has no severe symptoms. How should the exposure be assessed?",
    "choices": [
      "Enter each medicine separately and combine the reassuring results",
      "Contact the poison center for an integrated assessment",
      "Use the smallest reported dose and ignore the second medicine",
      "Wait until a symptom identifies the responsible drug"
    ],
    "answer": 1,
    "explanation": "Separate automated assessments do not evaluate the combined exposure. The online tool excludes multiple-product exposures.",
    "reviewHref": "#toxicology-stabilization"
  },
  {
    "id": "tox-triage-self-harm-triage",
    "conceptGroup": "triage-self-harm-triage",
    "lesson": "toxicology-stabilization",
    "difficulty": "Applied",
    "question": "A patient reports intentional ingestion to cause self-harm but currently feels well. Which disposition best fits the poison-center guidance?",
    "choices": [
      "Use an automated result to authorize discharge",
      "Wait at home for symptoms",
      "Repeat the history tomorrow",
      "Arrange immediate clinical evaluation with poison-center support"
    ],
    "answer": 3,
    "explanation": "Absence of symptoms does not make a self-harm exposure suitable for automated home triage.",
    "reviewHref": "#toxicology-stabilization"
  },
  {
    "id": "tox-triage-eye-irrigation",
    "conceptGroup": "triage-eye-irrigation",
    "lesson": "decontamination-elimination",
    "difficulty": "Applied",
    "question": "A household cleaner splashes into an eye. Someone suggests locating the receipt before doing anything. Which response best limits avoidable delay?",
    "choices": [
      "Start appropriate water irrigation immediately and obtain product information alongside care",
      "Wait for the receipt to identify the brand",
      "Neutralize the cleaner with another household chemical",
      "Keep the eye closed without rinsing"
    ],
    "answer": 0,
    "explanation": "Prompt irrigation is the first step; gathering information should not postpone it.",
    "reviewHref": "#decontamination-elimination"
  }
];

const decontaminationCases = [
  {
    "id": "tox-decon-late-window",
    "conceptGroup": "decon-late-window",
    "lesson": "decontamination-elimination",
    "difficulty": "Applied",
    "question": "A substantial modified-release ingestion occurred three hours ago. Which reasoning best fits current charcoal guidance?",
    "choices": [
      "Reject charcoal solely because one hour has elapsed",
      "Give charcoal automatically for every modified-release tablet",
      "Assess the specific poison, ongoing absorption, airway and expected benefit with toxicology",
      "Use elapsed time as the only variable"
    ],
    "answer": 2,
    "explanation": "Selected delayed presentations can benefit; current guidance requires a poison-specific assessment rather than a universal cutoff.",
    "reviewHref": "#decontamination-elimination"
  },
  {
    "id": "tox-decon-purpose",
    "conceptGroup": "decon-purpose",
    "lesson": "decontamination-elimination",
    "difficulty": "Applied",
    "question": "A team gives another charcoal dose because a large drug burden remains in the gut. What is its stated purpose?",
    "choices": [
      "Complete decontamination by limiting further absorption",
      "Increase urine acidity",
      "Replace ventilation",
      "Prove that absorbed drug is being cleared faster"
    ],
    "answer": 0,
    "explanation": "Additional-dose decontamination targets material still being absorbed. Enhanced elimination is a separate therapeutic goal.",
    "reviewHref": "#decontamination-elimination"
  },
  {
    "id": "tox-decon-airway-balance",
    "conceptGroup": "decon-airway-balance",
    "lesson": "decontamination-elimination",
    "difficulty": "Applied",
    "question": "A conscious patient has a low-risk ingestion without expected clinically significant toxicity. Should the patient be intubated solely to administer charcoal?",
    "choices": [
      "Yes, for every potentially adsorbable substance",
      "No; procedural risk is not justified solely for that purpose",
      "Yes, because intubation eliminates all aspiration risk",
      "Only if the charcoal is mixed with sorbitol"
    ],
    "answer": 1,
    "explanation": "The 2026 consensus advises against intubation solely for charcoal in this low-risk setting.",
    "reviewHref": "#decontamination-elimination"
  },
  {
    "id": "tox-decon-wbi-ileus",
    "conceptGroup": "decon-wbi-ileus",
    "lesson": "decontamination-elimination",
    "difficulty": "Applied",
    "question": "Retained tablets prompt consideration of whole-bowel irrigation, but the patient has an ileus. What changes the plan?",
    "choices": [
      "Use a faster irrigation rate",
      "Add more tablets to stimulate motility",
      "Ignore bowel function if the dose was large",
      "Do not proceed with bowel irrigation; reassess with toxicology"
    ],
    "answer": 3,
    "explanation": "Ileus is a contraindication. Potential removal of tablets does not override the safety boundary.",
    "reviewHref": "#decontamination-elimination"
  }
];

const charcoalDoseCases = [
  {
    "id": "tox-charcoal-volume",
    "conceptGroup": "charcoal-volume",
    "lesson": "decontamination-elimination",
    "difficulty": "Applied",
    "question": "A specialist prescribes charcoal 1 g/kg for a 20-kg child. The verified suspension contains 50 g in 250 mL. What volume supplies the dose?",
    "choices": [
      "20 mL",
      "50 mL",
      "100 mL",
      "250 mL"
    ],
    "answer": 2,
    "explanation": "The dose is 20 g. The concentration is 0.2 g/mL, giving 100 mL; this calculation assumes the treatment has already been selected appropriately.",
    "reviewHref": "#decontamination-elimination"
  },
  {
    "id": "tox-charcoal-schedule",
    "conceptGroup": "charcoal-schedule",
    "lesson": "decontamination-elimination",
    "difficulty": "Applied",
    "question": "An enhanced-elimination order gives the option of 50 g every 4 hours or 25 g every 2 hours after the initial dose. What must be clarified if both maintenance schedules are active?",
    "choices": [
      "They are alternative schedules and should not automatically be combined",
      "Both should always run together",
      "The second schedule is a saline flush",
      "Frequency has no effect on cumulative exposure"
    ],
    "answer": 0,
    "explanation": "Both alternatives provide 50 g over a four-hour maintenance interval. Combining them doubles that intended amount.",
    "reviewHref": "#decontamination-elimination"
  },
  {
    "id": "tox-apap-charcoal-goal",
    "conceptGroup": "apap-charcoal-goal",
    "lesson": "acetaminophen-poisoning",
    "difficulty": "Applied",
    "question": "After a large acetaminophen ingestion, another charcoal dose is selected to reduce continuing absorption. Which interpretation is correct?",
    "choices": [
      "Acetylcysteine is now unnecessary",
      "This is additional-dose decontamination, not proof of an enhanced-elimination indication",
      "A falling level cannot occur",
      "All repeat charcoal dosing has the same purpose"
    ],
    "answer": 1,
    "explanation": "The 2026 consensus distinguishes additional decontamination from repeated enhanced-elimination dosing; antidote decisions remain separate.",
    "reviewHref": "#acetaminophen-poisoning"
  }
];

const stimulantPhCases = [
  {
    "id": "tox-amphetamine-urine-ph",
    "conceptGroup": "amphetamine-urine-ph",
    "lesson": "decontamination-elimination",
    "difficulty": "Applied",
    "question": "A patient with amphetamine poisoning has hyperthermia and metabolic acidosis. A learner proposes ammonium chloride because amphetamine is a weak base. Which response is best?",
    "choices": [
      "Use acidification whenever the urine pH exceeds 6",
      "A change in excretion does not establish net benefit; avoid urine acidification and treat the toxic physiology",
      "Switch to urinary alkalinization to accelerate amphetamine clearance",
      "Delay cooling until a urine-pH target is reached"
    ],
    "answer": 1,
    "explanation": "Forced acid diuresis has been abandoned. A pharmacokinetic effect does not justify aggravating systemic acidosis.",
    "reviewHref": "#decontamination-elimination"
  },
  {
    "id": "tox-bicarbonate-distinct-target",
    "conceptGroup": "bicarbonate-distinct-target",
    "lesson": "neurotoxic-syndromes",
    "difficulty": "Applied",
    "question": "A patient with severe cocaine intoxication develops QRS widening and impaired contractility. Does avoiding routine urine-pH manipulation rule out bicarbonate?",
    "choices": [
      "Yes, every stimulant exposure contraindicates bicarbonate",
      "Yes, unless amphetamine is also present",
      "No; bicarbonate can treat sodium-channel cardiotoxicity, a separate indication",
      "No; its purpose here is to force cocaine into the urine"
    ],
    "answer": 2,
    "explanation": "The ASAM/AAAP guideline supports bicarbonate for this conduction and contractility problem. This is distinct from attempting to accelerate renal stimulant elimination.",
    "reviewHref": "#neurotoxic-syndromes"
  }
];

const lastCases = [
  {
    "id": "tox-last-pump",
    "conceptGroup": "last-pump",
    "lesson": "local-anesthetic-lipid-rescue",
    "difficulty": "Applied",
    "question": "A 40-kg patient is prescribed 0.25 mL/kg/min of 20% lipid for LAST. What rate in mL/hour matches the order?",
    "choices": [
      "10",
      "60",
      "600",
      "2400"
    ],
    "answer": 2,
    "explanation": "0.25 \u00d7 40 = 10 mL/min; 10 \u00d7 60 = 600 mL/hour.",
    "reviewHref": "#local-anesthetic-lipid-rescue"
  },
  {
    "id": "tox-last-remaining",
    "conceptGroup": "last-remaining",
    "lesson": "local-anesthetic-lipid-rescue",
    "difficulty": "Applied",
    "question": "For a 50-kg patient, the team is tracking a 12 mL/kg cumulative lipid limit. A total of 225 mL has been delivered. How much remains before that limit?",
    "choices": [
      "375 mL",
      "600 mL",
      "225 mL",
      "75 mL"
    ],
    "answer": 0,
    "explanation": "50 \u00d7 12 = 600 mL total; subtract 225 mL to obtain 375 mL. This is remaining capacity, not an instruction to administer it.",
    "reviewHref": "#local-anesthetic-lipid-rescue"
  },
  {
    "id": "tox-last-formulation",
    "conceptGroup": "last-formulation",
    "lesson": "local-anesthetic-lipid-rescue",
    "difficulty": "Applied",
    "question": "A team has propofol available and proposes using it to supply the lipid rescue dose. What is the appropriate response?",
    "choices": [
      "Use twice the volume because propofol contains less lipid",
      "Use it if the patient is already sedated",
      "Treat its anesthetic content as irrelevant",
      "Obtain 20% lipid emulsion; propofol is not a rescue substitute"
    ],
    "answer": 3,
    "explanation": "The propofol dose needed to supply that lipid quantity would create serious additional toxicity.",
    "reviewHref": "#local-anesthetic-lipid-rescue"
  },
  {
    "id": "tox-last-scope",
    "conceptGroup": "last-scope",
    "lesson": "local-anesthetic-lipid-rescue",
    "difficulty": "Applied",
    "question": "A drug is highly lipophilic. Does that property alone establish an indication for the LAST lipid protocol?",
    "choices": [
      "Yes, regardless of symptoms",
      "No; identify the toxin, severity and supporting recommendations",
      "Yes, once a urine screen is positive",
      "Yes, if dialysis is unavailable"
    ],
    "answer": 1,
    "explanation": "The indication is clinical and toxin specific. Lipophilicity alone is insufficient.",
    "reviewHref": "#local-anesthetic-lipid-rescue"
  },
  {
    "id": "tox-last-recognition",
    "conceptGroup": "last-recognition",
    "lesson": "local-anesthetic-lipid-rescue",
    "difficulty": "Applied",
    "question": "A patient develops abrupt ventricular dysrhythmia and hypotension after a regional local-anesthetic injection without reporting tinnitus. What interpretation is safest?",
    "choices": [
      "Absence of tinnitus excludes LAST",
      "Wait for seizure before initiating rescue",
      "LAST may present with isolated cardiovascular toxicity",
      "Only an oral ingestion can cause systemic toxicity"
    ],
    "answer": 2,
    "explanation": "Cardiovascular toxicity can occur without the classic neurologic warning sequence. Activate the appropriate rescue pathway.",
    "reviewHref": "#local-anesthetic-lipid-rescue"
  }
];

const cardiotoxicCases = [
  {
    "id": "tox-cardiotoxic-ccb-sequence",
    "conceptGroup": "cardiotoxic-ccb-sequence",
    "lesson": "cardiotoxic-poisoning",
    "difficulty": "Applied",
    "question": "A patient has life-threatening CCB poisoning with hypotension. A colleague says insulin must wait until glucagon has failed. Which statement matches AHA 2025?",
    "choices": [
      "Glucagon failure is required in every case",
      "High-dose insulin and vasopressors are recommended; a failed glucagon trial is not a universal prerequisite",
      "Insulin is only used for high glucose",
      "Only calcium is recommended"
    ],
    "answer": 1,
    "explanation": "AHA recommends high-dose insulin for life-threatening CCB hypotension. Glucagon usefulness in CCB poisoning is uncertain.",
    "reviewHref": "#cardiotoxic-poisoning"
  },
  {
    "id": "tox-cardiotoxic-bb-sequence",
    "conceptGroup": "cardiotoxic-bb-sequence",
    "lesson": "cardiotoxic-poisoning",
    "difficulty": "Applied",
    "question": "Hypotension from life-threatening beta-blocker poisoning persists despite vasopressors. Which treatment has an AHA recommendation in this setting?",
    "choices": [
      "Routine lipid for every beta blocker",
      "Dextrose alone regardless of glucose",
      "High-dose insulin with monitored glucose support",
      "Wait for spontaneous clearance without escalation"
    ],
    "answer": 2,
    "explanation": "The beta-blocker recommendation specifies hypotension refractory to vasopressors. Glucose, potassium and volume safeguards remain essential.",
    "reviewHref": "#cardiotoxic-poisoning"
  },
  {
    "id": "tox-cardiotoxic-insulin-pump",
    "conceptGroup": "cardiotoxic-insulin-pump",
    "lesson": "cardiotoxic-poisoning",
    "difficulty": "Applied",
    "question": "A 70-kg patient is prescribed insulin 1 unit/kg/hour. The final infusion contains 5 units/mL. What is the pump rate?",
    "choices": [
      "14 mL/hour",
      "70 mL/hour",
      "350 mL/hour",
      "1 mL/hour"
    ],
    "answer": 0,
    "explanation": "70 kg \u00d7 1 unit/kg/hour = 70 units/hour; 70 \u00f7 5 = 14 mL/hour.",
    "reviewHref": "#cardiotoxic-poisoning"
  },
  {
    "id": "tox-cardiotoxic-concentration-change",
    "conceptGroup": "cardiotoxic-concentration-change",
    "lesson": "cardiotoxic-poisoning",
    "difficulty": "Applied",
    "question": "An insulin infusion delivering 70 units/hour changes from 5 units/mL to 1 unit/mL. Which pump change preserves the dose?",
    "choices": [
      "Keep 14 mL/hour",
      "Change to 7 mL/hour",
      "Change to 350 mL/hour",
      "Change from 14 to 70 mL/hour after verifying the new preparation"
    ],
    "answer": 3,
    "explanation": "The dose stays 70 units/hour, but the five-fold lower concentration requires five-fold more volume.",
    "reviewHref": "#cardiotoxic-poisoning"
  },
  {
    "id": "tox-cardiotoxic-dextrose-rate",
    "conceptGroup": "cardiotoxic-dextrose-rate",
    "lesson": "cardiotoxic-poisoning",
    "difficulty": "Applied",
    "question": "A prescribed dextrose rate is 20 g/hour using D10 containing 0.1 g/mL. Which volume rate provides it?",
    "choices": [
      "20 mL/hour",
      "200 mL/hour",
      "2 mL/hour",
      "2000 mL/hour"
    ],
    "answer": 1,
    "explanation": "20 g/hour \u00f7 0.1 g/mL = 200 mL/hour. Monitor glucose and account for this volume.",
    "reviewHref": "#cardiotoxic-poisoning"
  },
  {
    "id": "tox-cardiotoxic-after-insulin",
    "conceptGroup": "cardiotoxic-after-insulin",
    "lesson": "cardiotoxic-poisoning",
    "difficulty": "Applied",
    "question": "Hemodynamics recover and the high-dose insulin infusion is stopped. Which glucose plan is appropriate?",
    "choices": [
      "Stop all glucose checks immediately",
      "Stop dextrose regardless of measured glucose",
      "Continue checks and titrate dextrose because its requirement may persist",
      "Give a fixed dextrose course without measurements"
    ],
    "answer": 2,
    "explanation": "Recovery of perfusion can increase glucose uptake, and dextrose support may remain necessary after insulin stops.",
    "reviewHref": "#cardiotoxic-poisoning"
  },
  {
    "id": "tox-cardiotoxic-calcium-salt",
    "conceptGroup": "cardiotoxic-calcium-salt",
    "lesson": "cardiotoxic-poisoning",
    "difficulty": "Applied",
    "question": "The order is 2 g IV calcium chloride, but only calcium gluconate is available. Which response is best?",
    "choices": [
      "Substitute 2 g without further review",
      "Substitute the same number of milliliters",
      "Treat both salts as calcium-free",
      "Clarify the salt-specific dose; AHA pairs 2 g chloride with about 6 g gluconate for similar calcium content"
    ],
    "answer": 3,
    "explanation": "Equal salt masses do not provide equal elemental calcium. Verify the replacement order, concentration, access and monitoring.",
    "reviewHref": "#cardiotoxic-poisoning"
  }
];

const fabCases = [
  {
    "id": "tox-fab-tablet",
    "conceptGroup": "fab-tablet",
    "lesson": "digoxin-fab-rescue",
    "difficulty": "Applied",
    "question": "The history specifies 30 digoxin tablets of 0.25 mg. Using the label's 0.8 tablet bioavailability factor and 0.5 mg bound per vial, what is the full-neutralization estimate?",
    "choices": [
      "6 vials",
      "12 vials",
      "15 vials",
      "30 vials"
    ],
    "answer": 1,
    "explanation": "30 \u00d7 0.25 \u00d7 0.8 = 6 mg estimated body load; 6/0.5 = 12 vials.",
    "reviewHref": "#digoxin-fab-rescue"
  },
  {
    "id": "tox-fab-serum",
    "conceptGroup": "fab-serum",
    "lesson": "digoxin-fab-rescue",
    "difficulty": "Applied",
    "question": "An interpretable pre-Fab digoxin concentration is 4 ng/mL in a 65-kg adult. Using concentration \u00d7 kg/100 and rounding upward, what is the estimate?",
    "choices": [
      "2 vials",
      "26 vials",
      "3 vials",
      "6 vials"
    ],
    "answer": 2,
    "explanation": "4 \u00d7 65/100 = 2.6 vials, rounded upward to 3 for this stipulated full-neutralization calculation.",
    "reviewHref": "#digoxin-fab-rescue"
  },
  {
    "id": "tox-fab-dilution",
    "conceptGroup": "fab-dilution",
    "lesson": "digoxin-fab-rescue",
    "difficulty": "Applied",
    "question": "A 40-mg Fab vial is reconstituted in 4 mL, then diluted with 36 mL saline as directed for a small dose. What volume contains a prescribed 8 mg Fab?",
    "choices": [
      "8 mL",
      "0.8 mL",
      "80 mL",
      "4 mL"
    ],
    "answer": 0,
    "explanation": "40 mg in 40 mL is 1 mg/mL; 8 mg requires 8 mL.",
    "reviewHref": "#digoxin-fab-rescue"
  },
  {
    "id": "tox-fab-assay",
    "conceptGroup": "fab-assay",
    "lesson": "digoxin-fab-rescue",
    "difficulty": "Applied",
    "question": "After Fab, the total digoxin concentration rises but circulation and rhythm improve. Which interpretation is appropriate?",
    "choices": [
      "The higher result proves rescue failed",
      "Redose solely to normalize total digoxin",
      "Treat the total result as free active drug",
      "Fab-bound digoxin can raise the total result; reassess the patient and relevant monitoring"
    ],
    "answer": 3,
    "explanation": "Post-Fab total assays can be misleading. Clinical course, potassium, ECG and selected free-digoxin testing are more useful for suspected recurrence.",
    "reviewHref": "#digoxin-fab-rescue"
  },
  {
    "id": "tox-fab-chronic",
    "conceptGroup": "fab-chronic",
    "lesson": "digoxin-fab-rescue",
    "difficulty": "Applied",
    "question": "An adult with chronic digoxin toxicity has no available level. Which statement correctly distinguishes the US label from the unknown-amount acute regimen?",
    "choices": [
      "Both always require 20 vials",
      "The label lists 6 vials for this chronic setting; the clinical team individualizes care",
      "The label prohibits Fab in chronic toxicity",
      "The acute 20-vial regimen is a lifetime maximum"
    ],
    "answer": 1,
    "explanation": "The label separates chronic unknown-level dosing from acute unknown-amount dosing. The formulation and clinical context matter.",
    "reviewHref": "#digoxin-fab-rescue"
  },
  {
    "id": "tox-fab-preparation",
    "conceptGroup": "fab-preparation",
    "lesson": "digoxin-fab-rescue",
    "difficulty": "Applied",
    "question": "What is the approximate concentration after reconstituting one 40-mg DigiFab vial with 4 mL sterile water?",
    "choices": [
      "0.5 mg/mL digoxin",
      "1 mg/mL Fab",
      "10 mg/mL Fab",
      "40 mg/mL Fab"
    ],
    "answer": 2,
    "explanation": "40 mg Fab/4 mL = 10 mg/mL Fab. Binding capacity for digoxin is a separate quantity.",
    "reviewHref": "#digoxin-fab-rescue"
  }
];

const sodiumChannelCases = [
  {
    "id": "tox-scb-pediatric-volume",
    "conceptGroup": "scb-pediatric-volume",
    "lesson": "cardiotoxic-poisoning",
    "difficulty": "Applied",
    "question": "A 20-kg child has a prescribed bicarbonate dose of 2 mEq/kg. The verified solution contains 0.5 mEq/mL. What volume supplies that dose?",
    "choices": [
      "20 mL",
      "40 mL",
      "80 mL",
      "160 mL"
    ],
    "answer": 2,
    "explanation": "The prescribed dose is 40 mEq; 40 / 0.5 = 80 mL. Product concentration changes volume, not the prescribed mEq.",
    "reviewHref": "#cardiotoxic-poisoning"
  },
  {
    "id": "tox-scb-infusion-units",
    "conceptGroup": "scb-infusion-units",
    "lesson": "cardiotoxic-poisoning",
    "difficulty": "Applied",
    "question": "An ordered bicarbonate infusion contains 150 mEq/L and runs at 2 mL/kg/h for a 70-kg adult. Which pump rate and bicarbonate delivery are correct?",
    "choices": [
      "140 mL/h and 21 mEq/h",
      "21 mL/h and 140 mEq/h",
      "140 mL/h and 140 mEq/h",
      "14 mL/h and 21 mEq/h"
    ],
    "answer": 0,
    "explanation": "2 \u00d7 70 = 140 mL/h. The final concentration is 0.15 mEq/mL, so delivery is 21 mEq/h. These are two different units.",
    "reviewHref": "#cardiotoxic-poisoning"
  },
  {
    "id": "tox-scb-limit",
    "conceptGroup": "scb-limit",
    "lesson": "cardiotoxic-poisoning",
    "difficulty": "Applied",
    "question": "After bicarbonate for amitriptyline cardiotoxicity, pH is 7.57 and sodium is 156 mEq/L, but instability persists. What is the best interpretation?",
    "choices": [
      "Continue bicarbonate without limit until QRS normalizes",
      "Both biochemical safety boundaries have been exceeded; urgently reassess rescue support with toxicology",
      "The sodium value proves treatment success",
      "Add lipid to every oral overdose automatically"
    ],
    "answer": 1,
    "explanation": "Persistent toxicity does not erase the risk of further alkalemia and hypernatremia. Refractory shock requires expert escalation.",
    "reviewHref": "#cardiotoxic-poisoning"
  },
  {
    "id": "tox-scb-maintenance",
    "conceptGroup": "scb-maintenance",
    "lesson": "cardiotoxic-poisoning",
    "difficulty": "Applied",
    "question": "After initial stabilization from TCA cardiotoxicity, a trainee says continuous bicarbonate infusion is proven superior to repeat boluses as needed. What is accurate?",
    "choices": [
      "This superiority is established in all ages",
      "Neither approach ever needs laboratory monitoring",
      "Superiority is not established; select ongoing treatment using response and monitoring",
      "Every patient must receive both indefinitely"
    ],
    "answer": 2,
    "explanation": "The AHA identifies this as unresolved. Treatment must remain tied to serial ECG, perfusion and laboratory findings.",
    "reviewHref": "#cardiotoxic-poisoning"
  }
];

const sedativeCases = [
  {
    "id": "tox-sedative-protected-seizure",
    "conceptGroup": "sedative-protected-seizure",
    "lesson": "opioids-sedatives",
    "difficulty": "Applied",
    "question": "A patient remains sedated after benzodiazepines controlled status epilepticus. Why is flumazenil contraindicated?",
    "choices": [
      "It invariably causes opioid withdrawal",
      "It removes treatment controlling a life-threatening condition",
      "It chelates calcium",
      "It prevents all future benzodiazepine treatment"
    ],
    "answer": 1,
    "explanation": "The sedation is not the only drug effect to consider. Reversing protective benzodiazepine activity can expose the patient to recurrent seizures; support ventilation instead.",
    "reviewHref": "#opioids-sedatives"
  },
  {
    "id": "tox-sedative-mixed",
    "conceptGroup": "sedative-mixed",
    "lesson": "opioids-sedatives",
    "difficulty": "Applied",
    "question": "Respiratory depression follows suspected opioid and benzodiazepine exposure. Which antidote sequence matches AHA guidance?",
    "choices": [
      "Flumazenil first in every case",
      "Neither antidote until a urine screen returns",
      "Naloxone first with immediate ventilation support",
      "Give both automatically"
    ],
    "answer": 2,
    "explanation": "Naloxone addresses the opioid component. Flumazenil requires separate exclusion of contraindications and seizure or arrhythmia risk.",
    "reviewHref": "#opioids-sedatives"
  },
  {
    "id": "tox-sedative-pediatric-label",
    "conceptGroup": "sedative-pediatric-label",
    "lesson": "opioids-sedatives",
    "difficulty": "Applied",
    "question": "A toxicologist considers flumazenil for a carefully selected child with pure benzodiazepine poisoning. Which statement correctly separates guideline and label?",
    "choices": [
      "All pediatric overdoses are FDA-labeled indications",
      "AHA selected-use guidance exists, but pediatric overdose safety and efficacy are not established in the label",
      "The label bans every use in children",
      "The conscious-sedation indication proves safety in mixed overdose"
    ],
    "answer": 1,
    "explanation": "Pediatric conscious-sedation reversal is the labeled indication at ages 1-17; selected overdose treatment requires a distinct expert risk-benefit assessment.",
    "reviewHref": "#opioids-sedatives"
  },
  {
    "id": "tox-sedative-arrest",
    "conceptGroup": "sedative-arrest",
    "lesson": "opioids-sedatives",
    "difficulty": "Applied",
    "question": "A patient has cardiac arrest after benzodiazepine poisoning. Should flumazenil replace standard resuscitation?",
    "choices": [
      "Yes, because awakening restores circulation",
      "Only if the pupils are small",
      "Yes, before compressions",
      "No; flumazenil has no role in this arrest pathway"
    ],
    "answer": 3,
    "explanation": "AHA identifies no benefit from flumazenil in benzodiazepine-associated cardiac arrest. Resuscitation must not be delayed.",
    "reviewHref": "#opioids-sedatives"
  },
  {
    "id": "tox-sedative-observation",
    "conceptGroup": "sedative-observation",
    "lesson": "opioids-sedatives",
    "difficulty": "Applied",
    "question": "A child initially responds to naloxone after an unknown opioid exposure. Which discharge plan is supported?",
    "choices": [
      "Immediate discharge whenever the child wakes",
      "A universal short timer regardless of exposure",
      "Observation until recurrence risk is low and consciousness and vital signs are normal, with caregiver antagonist teaching",
      "Discharge after a negative routine urine screen"
    ],
    "answer": 2,
    "explanation": "The ideal observation duration is not universally established. A reassuring moment does not establish sustained recovery, especially with an unknown or long-acting exposure.",
    "reviewHref": "#opioids-sedatives"
  }
];

const opioidRescueCases = [
  {
    "id": "tox-opioid-nasal-device",
    "conceptGroup": "opioid-nasal-device",
    "lesson": "opioids-sedatives",
    "difficulty": "Applied",
    "question": "A caregiver has OTC Narcan 4 mg devices. Which instruction is correct?",
    "choices": [
      "Test spray into the air first",
      "Divide one device between two people",
      "Give one whole device into one nostril; use a new device if another dose is needed",
      "Save the device for a second spray"
    ],
    "answer": 2,
    "explanation": "Each device contains one dose and sprays once. Priming wastes the rescue dose.",
    "reviewHref": "#opioids-sedatives"
  },
  {
    "id": "tox-opioid-interval",
    "conceptGroup": "opioid-interval",
    "lesson": "opioids-sedatives",
    "difficulty": "Applied",
    "question": "Which product-specific repeat intervals match the reviewed nasal labeling when additional doses are needed?",
    "choices": [
      "Narcan 2-3 minutes; OPVEE 2-5 minutes",
      "Both every 15 minutes",
      "Narcan every hour; OPVEE once only",
      "OPVEE must wait 30 minutes"
    ],
    "answer": 0,
    "explanation": "The instructions differ. Both products still require emergency activation, resuscitative support and continued observation.",
    "reviewHref": "#opioids-sedatives"
  },
  {
    "id": "tox-opioid-infusion",
    "conceptGroup": "opioid-infusion",
    "lesson": "opioids-sedatives",
    "difficulty": "Applied",
    "question": "A documented effective IV naloxone reversal dose is 1.2 mg. An ordered infusion uses two thirds of that dose per hour at a final concentration of 0.04 mg/mL. What pump rate supplies it?",
    "choices": [
      "2 mL/h",
      "20 mL/h",
      "30 mL/h",
      "80 mL/h"
    ],
    "answer": 1,
    "explanation": "1.2 \u00d7 2/3 = 0.8 mg/h; 0.8 / 0.04 = 20 mL/h. Titrate under monitoring rather than assuming the calculated rate guarantees sustained ventilation.",
    "reviewHref": "#opioids-sedatives"
  },
  {
    "id": "tox-opioid-cpr",
    "conceptGroup": "opioid-cpr",
    "lesson": "opioids-sedatives",
    "difficulty": "Applied",
    "question": "A lay rescuer finds an unresponsive person who is not breathing normally after suspected opioid use. Which action should not wait for naloxone response?",
    "choices": [
      "CPR with breaths and emergency activation",
      "A confirmatory urine test",
      "A second person to identify the opioid",
      "A complete medication history"
    ],
    "answer": 0,
    "explanation": "AHA prioritizes standard resuscitation. Antagonist delivery must not delay or interrupt it.",
    "reviewHref": "#opioids-sedatives"
  },
  {
    "id": "tox-opioid-longer",
    "conceptGroup": "opioid-longer",
    "lesson": "opioids-sedatives",
    "difficulty": "Applied",
    "question": "After OPVEE, a patient wakes up. A colleague says the longer duration means emergency observation is unnecessary. What is correct?",
    "choices": [
      "Longer duration guarantees no recurrence",
      "Only heart rate matters now",
      "Another opioid can safely relieve withdrawal",
      "Recurrent depression remains possible and observation is still required"
    ],
    "answer": 3,
    "explanation": "The label retains explicit recurrence and emergency-care warnings; longer antagonist action does not establish sustained recovery.",
    "reviewHref": "#opioids-sedatives"
  },
  {
    "id": "tox-opioid-expired",
    "conceptGroup": "opioid-expired",
    "lesson": "opioids-sedatives",
    "difficulty": "Applied",
    "question": "Only expired naloxone is immediately available during suspected life-threatening opioid overdose. Which statement matches ACMT March 2026?",
    "choices": [
      "Never use it even if there is no alternative",
      "It is guaranteed to have full potency indefinitely",
      "Use it when unexpired drug is unavailable while continuing resuscitation and emergency care",
      "Expiration means it becomes an opioid agonist"
    ],
    "answer": 2,
    "explanation": "ACMT supports this emergency use but cannot specify a universal extension because formulation and storage affect degradation.",
    "reviewHref": "#opioids-sedatives"
  }
];

const methemoglobinRescueCases = [
  {
    "id": "tox-rescue-mb-volume",
    "conceptGroup": "rescue-mb-volume",
    "lesson": "methemoglobinemia-rescue",
    "difficulty": "Applied",
    "question": "A 45-kg patient has a prescribed methylene-blue dose of 1 mg/kg from 5 mg/mL stock. What volume is required?",
    "choices": [
      "4.5 mL",
      "9 mL",
      "22.5 mL",
      "45 mL"
    ],
    "answer": 1,
    "explanation": "45 mg / 5 mg/mL = 9 mL. Do not assume a 10 mg/mL formulation.",
    "reviewHref": "#methemoglobinemia-rescue"
  },
  {
    "id": "tox-rescue-mb-pump",
    "conceptGroup": "rescue-mb-pump",
    "lesson": "methemoglobinemia-rescue",
    "difficulty": "Applied",
    "question": "A pharmacy-prepared 60-mg methylene-blue dose has a specified final volume of 60 mL and is ordered over 20 minutes. What pump rate is equivalent?",
    "choices": [
      "20 mL/h",
      "60 mL/h",
      "120 mL/h",
      "180 mL/h"
    ],
    "answer": 3,
    "explanation": "60 mL divided by one third of an hour is 180 mL/h. Stock withdrawal volume does not determine the final pump rate.",
    "reviewHref": "#methemoglobinemia-rescue"
  },
  {
    "id": "tox-rescue-mb-renal",
    "conceptGroup": "rescue-mb-renal",
    "lesson": "methemoglobinemia-rescue",
    "difficulty": "Applied",
    "question": "A patient with eGFR 35 mL/min/1.73 m2 remains symptomatic one hour after PROVAYBLUE 1 mg/kg. What does the reviewed label direct?",
    "choices": [
      "Automatically repeat 1 mg/kg every hour",
      "Increase the second dose to 5 mg/kg",
      "Consider alternative interventions after the single renal-adjusted dose",
      "Ignore renal function if methemoglobin is elevated"
    ],
    "answer": 2,
    "explanation": "For eGFR 15-59, the labeled regimen is a single 1 mg/kg dose; persistent toxicity calls for alternative intervention, not automatic routine redosing.",
    "reviewHref": "#methemoglobinemia-rescue"
  },
  {
    "id": "tox-rescue-mb-g6pd",
    "conceptGroup": "rescue-mb-g6pd",
    "lesson": "methemoglobinemia-rescue",
    "difficulty": "Applied",
    "question": "Known G6PD deficiency is present in a patient with severe methemoglobinemia. Which statement about PROVAYBLUE is correct?",
    "choices": [
      "It is contraindicated; arrange expert alternative rescue with ongoing support",
      "Double the dose because activation is impaired",
      "It has no hemolysis risk",
      "It is a diagnostic test for G6PD deficiency"
    ],
    "answer": 0,
    "explanation": "G6PD deficiency can impair drug activation and increase severe hemolysis. Failure of activation is not an indication to escalate the dose.",
    "reviewHref": "#methemoglobinemia-rescue"
  },
  {
    "id": "tox-rescue-mb-serotonin",
    "conceptGroup": "rescue-mb-serotonin",
    "lesson": "methemoglobinemia-rescue",
    "difficulty": "Applied",
    "question": "Before methylene blue, medication review finds sertraline and dextromethorphan. What hazard needs urgent assessment?",
    "choices": [
      "Only constipation",
      "Potential serious serotonin syndrome",
      "Guaranteed loss of antibiotic activity",
      "Protection against seizures"
    ],
    "answer": 1,
    "explanation": "Methylene blue has monoamine-oxidase inhibition and a boxed serotonin warning. Emergency treatment selection and monitoring need coordinated risk-benefit assessment.",
    "reviewHref": "#methemoglobinemia-rescue"
  },
  {
    "id": "tox-rescue-mb-oxygen",
    "conceptGroup": "rescue-mb-oxygen",
    "lesson": "methemoglobinemia-rescue",
    "difficulty": "Applied",
    "question": "After benzocaine exposure, a patient is cyanotic despite oxygen and has an adequate PaO2. Which test addresses the suspected oxygen-carriage defect?",
    "choices": [
      "Repeat only the conventional pulse-oximeter value",
      "Serum sodium alone",
      "Blood co-oximetry for methemoglobin",
      "A urine benzodiazepine screen"
    ],
    "answer": 2,
    "explanation": "PaO2 reflects dissolved oxygen and does not quantify dysfunctional hemoglobin; co-oximetry evaluates the suspected dyshemoglobin.",
    "reviewHref": "#methemoglobinemia-rescue"
  },
  {
    "id": "tox-rescue-mb-teething",
    "conceptGroup": "rescue-mb-teething",
    "lesson": "methemoglobinemia-rescue",
    "difficulty": "Applied",
    "question": "A caregiver wants benzocaine gel for an infant who is teething. Which response matches FDA advice?",
    "choices": [
      "Use a smaller adult dose",
      "Use it only if the brand is familiar",
      "Use it daily to prevent pain",
      "Avoid benzocaine for teething; use safer measures such as gentle gum massage"
    ],
    "answer": 3,
    "explanation": "Teething is not an appropriate benzocaine indication. Cyanosis or illness after exposure needs urgent assessment.",
    "reviewHref": "#methemoglobinemia-rescue"
  },
  {
    "id": "tox-rescue-flumazenil-volume",
    "conceptGroup": "rescue-flumazenil-volume",
    "lesson": "opioids-sedatives",
    "difficulty": "Applied",
    "question": "For a selected adult, a 0.2-mg flumazenil dose is ordered from 0.1 mg/mL stock. What volume supplies it?",
    "choices": [
      "0.2 mL",
      "2 mL",
      "5 mL",
      "20 mL"
    ],
    "answer": 1,
    "explanation": "0.2 / 0.1 = 2 mL. Eligibility and controlled administration remain separate from the volume calculation.",
    "reviewHref": "#opioids-sedatives"
  },
  {
    "id": "tox-rescue-flumazenil-nonresponse",
    "conceptGroup": "rescue-flumazenil-nonresponse",
    "lesson": "opioids-sedatives",
    "difficulty": "Applied",
    "question": "There is no response five minutes after a cumulative 5 mg of flumazenil. What does the label suggest?",
    "choices": [
      "Continue escalating without limit",
      "The patient must have pure benzodiazepine poisoning",
      "Benzodiazepines are unlikely to be the principal cause; reassess and maintain support",
      "Stop all respiratory support"
    ],
    "answer": 2,
    "explanation": "Further flumazenil is unlikely to help. The absent response requires reassessment, not unbounded dosing.",
    "reviewHref": "#opioids-sedatives"
  }
];

const hydrocarbonCases = [
  {
    "id": "tox-hydrocarbon-case-1",
    "lesson": "hydrocarbon-exposure",
    "conceptGroup": "hydrocarbon-exposure",
    "difficulty": "Applied",
    "question": "A toddler coughs after swallowing kerosene. A caregiver asks whether to make the child vomit. What is appropriate?",
    "choices": [
      "Induce vomiting immediately",
      "Give activated charcoal at home",
      "Seek prompt assessment without inducing vomiting",
      "Wait until cyanosis appears"
    ],
    "answer": 2,
    "explanation": "Coughing suggests possible aspiration. Induced vomiting can add lung exposure.",
    "reviewHref": "#hydrocarbon-exposure"
  },
  {
    "id": "tox-hydrocarbon-case-2",
    "lesson": "hydrocarbon-exposure",
    "conceptGroup": "hydrocarbon-exposure",
    "difficulty": "Applied",
    "question": "After a fuel ingestion, a child has chemical pneumonitis and fever without evidence of bacterial infection. Which routine treatment is inappropriate?",
    "choices": [
      "Oxygen when indicated",
      "Respiratory monitoring",
      "Supportive care",
      "Prophylactic antibiotics solely for the fever"
    ],
    "answer": 3,
    "explanation": "Chemical inflammation can produce fever. Antibiotics require evidence of infection, not fever alone.",
    "reviewHref": "#hydrocarbon-exposure"
  },
  {
    "id": "tox-hydrocarbon-case-3",
    "lesson": "hydrocarbon-exposure",
    "conceptGroup": "hydrocarbon-exposure",
    "difficulty": "Applied",
    "question": "Which child fails the RCH hydrocarbon pathway discharge criteria even after six hours?",
    "choices": [
      "A child with persistent wheezing",
      "An asymptomatic child with normal observations",
      "A child with normal consciousness and oxygenation and no respiratory symptoms",
      "A clinically recovered child with an appropriate safety plan"
    ],
    "answer": 0,
    "explanation": "The clock does not override persistent symptoms; wheezing requires further assessment and care.",
    "reviewHref": "#hydrocarbon-exposure"
  }
];

const mothballCases = [
  {
    "id": "tox-mothball-case-1",
    "lesson": "methemoglobinemia-rescue",
    "conceptGroup": "mothball-complications",
    "difficulty": "Applied",
    "question": "A child has hemolytic anemia after naphthalene exposure, without clinically significant methemoglobinemia. Which interpretation is correct?",
    "choices": [
      "Methylene blue reverses every naphthalene effect",
      "Evaluate and support the anemia and organ injury; mothball exposure alone is not an indication for methylene blue",
      "A normal methemoglobin value excludes all toxicity",
      "Normal initial behavior rules out subsequent injury"
    ],
    "answer": 1,
    "explanation": "Hemolysis and methemoglobinemia are different problems. An antidote for oxidized hemoglobin does not restore destroyed red cells.",
    "reviewHref": "#methemoglobinemia-rescue"
  },
  {
    "id": "tox-mothball-case-2",
    "lesson": "methemoglobinemia-rescue",
    "conceptGroup": "mothball-complications",
    "difficulty": "Applied",
    "question": "A patient with known G6PD deficiency develops methemoglobinemia after a mothball exposure. What is the key medication safety issue?",
    "choices": [
      "G6PD deficiency requires a larger methylene-blue dose",
      "PROVAYBLUE is contraindicated; arrange specialist alternative rescue and supportive care",
      "All mothballs contain the same ingredient",
      "No further respiratory support is needed"
    ],
    "answer": 1,
    "explanation": "Methylene blue may be ineffective and cause severe hemolysis in G6PD deficiency.",
    "reviewHref": "#methemoglobinemia-rescue"
  },
  {
    "id": "tox-mothball-case-3",
    "lesson": "methemoglobinemia-rescue",
    "conceptGroup": "mothball-complications",
    "difficulty": "Applied",
    "question": "Parents deny ingestion, but an infant wore clothing stored with naphthalene and develops jaundice and dark urine. What is appropriate?",
    "choices": [
      "Exclude exposure because nothing was swallowed",
      "Investigate possible nonoral exposure and hemolysis promptly",
      "Treat the odor as harmless fragrance",
      "Wait for seizures before assessment"
    ],
    "answer": 1,
    "explanation": "Naphthalene exposure can occur through inhalation or contaminated fabric; infants can develop hemolysis without known G6PD deficiency.",
    "reviewHref": "#methemoglobinemia-rescue"
  }
];

const nicotineCases = [
  {
    "id": "tox-nicotine-case-1",
    "lesson": "nicotine-poisoning",
    "conceptGroup": "nicotine-poisoning",
    "difficulty": "Applied",
    "question": "After nicotine-liquid exposure, an agitated patient becomes weak, bradycardic and hypoventilates. What does this change suggest?",
    "choices": [
      "Recovery because agitation stopped",
      "Progression to severe depressive toxicity requiring support",
      "Proof that nicotine was not involved",
      "An indication to stop respiratory monitoring"
    ],
    "answer": 1,
    "explanation": "Substantial nicotine exposure can progress from stimulation to cardiovascular and neuromuscular depression.",
    "reviewHref": "#nicotine-poisoning"
  },
  {
    "id": "tox-nicotine-case-2",
    "lesson": "nicotine-poisoning",
    "conceptGroup": "nicotine-poisoning",
    "difficulty": "Applied",
    "question": "An estimated 0.5 mL of 20 mg/mL nicotine liquid was swallowed by a 10-kg child. What is the estimated swallowed amount per kilogram?",
    "choices": [
      "0.1 mg/kg",
      "1 mg/kg",
      "10 mg/kg",
      "40 mg/kg"
    ],
    "answer": 1,
    "explanation": "The product contains 10 mg in 0.5 mL; divided by 10 kg this is 1 mg/kg. It is not a measured absorbed dose or a safe threshold.",
    "reviewHref": "#nicotine-poisoning"
  },
  {
    "id": "tox-nicotine-case-3",
    "lesson": "nicotine-poisoning",
    "conceptGroup": "nicotine-poisoning",
    "difficulty": "Applied",
    "question": "A caregiver reports liquid nicotine spilled on a child but no known ingestion. What should happen?",
    "choices": [
      "Ignore it because nothing was swallowed",
      "Wash the skin and obtain prompt poison-center advice",
      "Induce vomiting",
      "Wait until a seizure occurs"
    ],
    "answer": 1,
    "explanation": "Skin exposure can matter. Prompt washing and poison-center guidance are appropriate; symptoms determine emergency escalation.",
    "reviewHref": "#nicotine-poisoning"
  },
  {
    "id": "tox-nicotine-case-4",
    "lesson": "nicotine-poisoning",
    "conceptGroup": "nicotine-poisoning",
    "difficulty": "Applied",
    "question": "Which statement accurately describes charcoal in the RCH nicotine pathway?",
    "choices": [
      "Give it at home after every exposure",
      "Give four doses regardless of symptoms",
      "It is rarely indicated; discuss selected early high-risk ingestion with toxicology",
      "It substitutes for respiratory support"
    ],
    "answer": 2,
    "explanation": "Charcoal is selective and airway dependent. A historical repeated-dose suggestion does not create a routine protocol.",
    "reviewHref": "#nicotine-poisoning"
  }
];

const isoniazidCases = [
  {
    "id": "tox-isoniazid-case-1",
    "lesson": "isoniazid-pyridoxine-rescue",
    "conceptGroup": "isoniazid-rescue",
    "difficulty": "Applied",
    "question": "An adult requires 3.6 g pyridoxine from a verified 100 mg/mL injectable product. What volume supplies the drug before dilution?",
    "choices": [
      "3.6 mL",
      "36 mL",
      "360 mL",
      "0.36 mL"
    ],
    "answer": 1,
    "explanation": "3.6 g equals 3,600 mg; dividing by 100 mg/mL gives 36 mL.",
    "reviewHref": "#isoniazid-pyridoxine-rescue"
  },
  {
    "id": "tox-isoniazid-case-2",
    "lesson": "isoniazid-pyridoxine-rescue",
    "conceptGroup": "isoniazid-rescue",
    "difficulty": "Applied",
    "question": "For a 20-kg child, a poison specialist selects an initial pyridoxine dose of 70 mg/kg. What dose is this?",
    "choices": [
      "140 mg",
      "1.4 g",
      "14 g",
      "5 g automatically"
    ],
    "answer": 1,
    "explanation": "20 times 70 equals 1,400 mg, or 1.4 g; it is below the stated 5-g initial cap.",
    "reviewHref": "#isoniazid-pyridoxine-rescue"
  },
  {
    "id": "tox-isoniazid-case-3",
    "lesson": "isoniazid-pyridoxine-rescue",
    "conceptGroup": "isoniazid-rescue",
    "difficulty": "Applied",
    "question": "The isoniazid label gives 80 mg/kg for unknown pediatric ingestion while the selected poison-center protocol gives 70 mg/kg. What should pharmacy do?",
    "choices": [
      "Average the doses",
      "Confirm and document the chosen protocol with toxicology",
      "Add both doses",
      "Ignore the discrepancy"
    ],
    "answer": 1,
    "explanation": "The sources differ. Preserve a coherent regimen and clarify the intended protocol rather than improvising a hybrid.",
    "reviewHref": "#isoniazid-pyridoxine-rescue"
  },
  {
    "id": "tox-isoniazid-case-4",
    "lesson": "isoniazid-pyridoxine-rescue",
    "conceptGroup": "isoniazid-rescue",
    "difficulty": "Applied",
    "question": "Seizures continue after the initial pyridoxine course. Does an initial 5-g cap prove that no further pyridoxine may be given?",
    "choices": [
      "Yes, it is a universal total limit",
      "No; urgent reassessment and specialist-directed repeat treatment may be needed",
      "Only oral nutritional doses remain possible",
      "Monitoring can stop"
    ],
    "answer": 1,
    "explanation": "An initial-dose cap is distinct from subsequent treatment. Persistent toxicity needs reassessment and respiratory support.",
    "reviewHref": "#isoniazid-pyridoxine-rescue"
  },
  {
    "id": "tox-isoniazid-case-5",
    "lesson": "isoniazid-pyridoxine-rescue",
    "conceptGroup": "isoniazid-rescue",
    "difficulty": "Applied",
    "question": "Seizures and acidosis are controlled with standard isoniazid-poisoning care. What does EXTRIP suggest about adding extracorporeal treatment solely for toxin removal?",
    "choices": [
      "Add it routinely",
      "Suggest against routine addition to standard care",
      "Replace pyridoxine with dialysis",
      "Dialyzability makes treatment mandatory"
    ],
    "answer": 1,
    "explanation": "EXTRIP suggests against routine addition; the recommendation is weak with very low-quality evidence.",
    "reviewHref": "#isoniazid-pyridoxine-rescue"
  },
  {
    "id": "tox-isoniazid-case-6",
    "lesson": "isoniazid-pyridoxine-rescue",
    "conceptGroup": "isoniazid-rescue",
    "difficulty": "Applied",
    "question": "A patient taking 25 mg/day oral pyridoxine for neuropathy prevention develops seizures after a large isoniazid ingestion. What is appropriate?",
    "choices": [
      "Continue only the routine daily dose",
      "Urgently obtain acute pyridoxine rescue with seizure and respiratory support",
      "Wait for a pyridoxine level",
      "Use supplementation history to exclude poisoning"
    ],
    "answer": 1,
    "explanation": "Preventive oral supplementation does not substitute for acute antidotal treatment.",
    "reviewHref": "#isoniazid-pyridoxine-rescue"
  }
];

const uridineCases = [
  {
    "id": "tox-uridine-case-1",
    "lesson": "metabolic-cytotoxic-antidotes",
    "conceptGroup": "uridine-rescue",
    "difficulty": "Applied",
    "question": "A fluorouracil infusion-pump overdose ended 3 hours ago. The patient feels well. Which response fits Vistogard labeling?",
    "choices": [
      "Wait for neutropenia",
      "Begin emergency rescue promptly with oncology and poison expertise",
      "Wait until 96 hours",
      "Use only a chronic uridine schedule"
    ],
    "answer": 1,
    "explanation": "Overdose is an emergency indication even without symptoms; 96 hours is not a reason to delay.",
    "reviewHref": "#metabolic-cytotoxic-antidotes"
  },
  {
    "id": "tox-uridine-case-2",
    "lesson": "metabolic-cytotoxic-antidotes",
    "conceptGroup": "uridine-rescue",
    "difficulty": "Applied",
    "question": "Using the 6.2-g/m² formula, what dose is calculated for a child with BSA 0.50 m²?",
    "choices": [
      "0.31 g",
      "3.1 g",
      "6.2 g",
      "31 g"
    ],
    "answer": 1,
    "explanation": "6.2 × 0.50 = 3.1 g per dose. Measure accurately and discard opened-packet leftovers.",
    "reviewHref": "#metabolic-cytotoxic-antidotes"
  },
  {
    "id": "tox-uridine-case-3",
    "lesson": "metabolic-cytotoxic-antidotes",
    "conceptGroup": "uridine-rescue",
    "difficulty": "Applied",
    "question": "A 3.1-g pediatric tube dose is being prepared. What minimum amount of reconstituted starch thickener meets the maximum 1-g-per-10-mL ratio?",
    "choices": [
      "3.1 mL",
      "10 mL",
      "31 mL",
      "310 mL"
    ],
    "answer": 2,
    "explanation": "3.1 g × 10 mL/g = 31 mL. This is the preparation ratio, not an intravenous infusion.",
    "reviewHref": "#metabolic-cytotoxic-antidotes"
  },
  {
    "id": "tox-uridine-case-4",
    "lesson": "metabolic-cytotoxic-antidotes",
    "conceptGroup": "uridine-rescue",
    "difficulty": "Applied",
    "question": "Severe mucositis requires NG administration. Which preparation distinction is correct?",
    "choices": [
      "Never crush for any route",
      "Crush for the labeled tube mixture; do not chew oral granules",
      "Inject the oral product",
      "Push dry granules down the tube"
    ],
    "answer": 1,
    "explanation": "The tube instructions deliberately differ from the oral no-chewing instructions.",
    "reviewHref": "#metabolic-cytotoxic-antidotes"
  },
  {
    "id": "tox-uridine-case-5",
    "lesson": "metabolic-cytotoxic-antidotes",
    "conceptGroup": "uridine-rescue",
    "difficulty": "Applied",
    "question": "Vomiting occurs 60 minutes after a Vistogard dose. What does the label direct?",
    "choices": [
      "Skip the replacement",
      "Repeat a full dose promptly and retain the next scheduled dose",
      "Restart the entire course",
      "Double every remaining dose"
    ],
    "answer": 1,
    "explanation": "Vomiting within two hours calls for another complete dose, with the next dose still at its regular time.",
    "reviewHref": "#metabolic-cytotoxic-antidotes"
  },
  {
    "id": "tox-uridine-case-6",
    "lesson": "metabolic-cytotoxic-antidotes",
    "conceptGroup": "uridine-rescue",
    "difficulty": "Applied",
    "question": "A scheduled Vistogard dose was missed during transfer. What is the labeled response?",
    "choices": [
      "Abandon the course",
      "Give it as soon as possible and keep the next regular dose time",
      "Wait for recurrent symptoms",
      "Replace all remaining doses with one large dose"
    ],
    "answer": 1,
    "explanation": "The missed-dose instruction supports completing the prescribed course without discarding the regular schedule.",
    "reviewHref": "#metabolic-cytotoxic-antidotes"
  }
];

const methotrexateRescueCases = [
  {
    "id": "tox-mtx-rescue-1",
    "lesson": "metabolic-cytotoxic-antidotes",
    "conceptGroup": "mtx-rescue",
    "difficulty": "Applied",
    "question": "An adult weighs 60 kg. The verified glucarpidase order is 50 Units/kg. What is the dose?",
    "choices": [
      "300 Units",
      "3,000 Units",
      "30,000 Units",
      "50 Units"
    ],
    "answer": 1,
    "explanation": "60 × 50 = 3,000 Units; distinguish dose Units from volume.",
    "reviewHref": "#metabolic-cytotoxic-antidotes"
  },
  {
    "id": "tox-mtx-rescue-2",
    "lesson": "metabolic-cytotoxic-antidotes",
    "conceptGroup": "mtx-rescue",
    "difficulty": "Applied",
    "question": "A laboratory reports high methotrexate by immunoassay 12 hours after glucarpidase. What must be considered?",
    "choices": [
      "DAMPA interference may overestimate methotrexate",
      "The assay proves antidote failure",
      "Leucovorin must stop",
      "Every patient needs a second enzyme dose"
    ],
    "answer": 0,
    "explanation": "Confirm with the laboratory: chromatography is needed in this early interference period.",
    "reviewHref": "#metabolic-cytotoxic-antidotes"
  },
  {
    "id": "tox-mtx-rescue-3",
    "lesson": "metabolic-cytotoxic-antidotes",
    "conceptGroup": "mtx-rescue",
    "difficulty": "Applied",
    "question": "Glucarpidase is scheduled at noon. Which leucovorin time violates the required separation?",
    "choices": [
      "09:00",
      "09:30",
      "11:00",
      "15:00"
    ],
    "answer": 2,
    "explanation": "11:00 is only one hour before noon; the interval must be at least two hours on either side.",
    "reviewHref": "#metabolic-cytotoxic-antidotes"
  },
  {
    "id": "tox-mtx-rescue-4",
    "lesson": "metabolic-cytotoxic-antidotes",
    "conceptGroup": "mtx-rescue",
    "difficulty": "Applied",
    "question": "During the first 48 hours after glucarpidase, what is the labeled leucovorin approach?",
    "choices": [
      "Stop permanently",
      "Maintain the previous dosage with the required separation",
      "Switch automatically to folic acid",
      "Give all doses simultaneously with glucarpidase"
    ],
    "answer": 1,
    "explanation": "The enzyme does not eliminate the need for correctly timed leucovorin rescue.",
    "reviewHref": "#metabolic-cytotoxic-antidotes"
  },
  {
    "id": "tox-mtx-rescue-5",
    "lesson": "metabolic-cytotoxic-antidotes",
    "conceptGroup": "mtx-rescue",
    "difficulty": "Applied",
    "question": "Methotrexate exceeds 1 micromol/L but clearance matches the expected treatment curve and renal function is normal. Which statement is correct?",
    "choices": [
      "That isolated number mandates glucarpidase",
      "Assess the regimen and elimination trajectory; this alone does not establish the indication",
      "Stop all monitoring",
      "Double the methotrexate dose"
    ],
    "answer": 1,
    "explanation": "The label combines a toxic concentration with delayed clearance due to renal impairment.",
    "reviewHref": "#metabolic-cytotoxic-antidotes"
  }
];

const methotrexateBoundaryCases = [
  {
    "id": "tox-mtx-boundary-1",
    "lesson": "metabolic-cytotoxic-antidotes",
    "conceptGroup": "mtx-boundaries",
    "difficulty": "Applied",
    "question": "A 24-hour methotrexate infusion began Monday at 08:00 and ended Tuesday at 08:00. When is 48 hours from infusion start?",
    "choices": [
      "Tuesday 08:00",
      "Wednesday 08:00",
      "Thursday 08:00",
      "48 hours after kidney injury is diagnosed"
    ],
    "answer": 1,
    "explanation": "Wednesday 08:00 is 48 hours from Monday 08:00. Early rescue planning uses the correct origin of the clock.",
    "reviewHref": "#metabolic-cytotoxic-antidotes"
  },
  {
    "id": "tox-mtx-boundary-2",
    "lesson": "metabolic-cytotoxic-antidotes",
    "conceptGroup": "mtx-boundaries",
    "difficulty": "Applied",
    "question": "A patient took weekly methotrexate daily and has mouth ulcers and cytopenias, but the serum drug level is undetectable. What is appropriate?",
    "choices": [
      "Exclude toxicity",
      "Urgently evaluate and treat suspected toxicity despite the level",
      "Resume daily dosing",
      "Use only routine folic acid"
    ],
    "answer": 1,
    "explanation": "Low-dose toxicity can be serious despite a low or undetectable concentration.",
    "reviewHref": "#metabolic-cytotoxic-antidotes"
  },
  {
    "id": "tox-mtx-boundary-3",
    "lesson": "metabolic-cytotoxic-antidotes",
    "conceptGroup": "mtx-boundaries",
    "difficulty": "Applied",
    "question": "After glucarpidase, a patient develops a separate conventional indication for kidney replacement. How should EXTRIP guidance be interpreted?",
    "choices": [
      "All dialysis is forbidden",
      "Toxin-removal recommendations do not cancel usual kidney-replacement indications",
      "Dialysis replaces all leucovorin",
      "A high methotrexate result alone mandates dialysis"
    ],
    "answer": 1,
    "explanation": "Distinguish treatment of kidney-failure complications from adding extracorporeal treatment solely to remove methotrexate.",
    "reviewHref": "#metabolic-cytotoxic-antidotes"
  }
];

const sulfonylureaCases = [
  {
    "id": "tox-sulfonylurea-1",
    "lesson": "metabolic-cytotoxic-antidotes",
    "conceptGroup": "sulfonylurea-rescue",
    "difficulty": "Applied",
    "question": "A toddler may have swallowed one sulfonylurea tablet and has normal glucose now. What is appropriate?",
    "choices": [
      "Discharge because it was one tablet",
      "Arrange poison-center-guided assessment and observation for delayed hypoglycemia",
      "Induce vomiting",
      "Wait at home for a seizure"
    ],
    "answer": 1,
    "explanation": "A single tablet can be dangerous, and an early normal result does not exclude later hypoglycemia.",
    "reviewHref": "#metabolic-cytotoxic-antidotes"
  },
  {
    "id": "tox-sulfonylurea-2",
    "lesson": "metabolic-cytotoxic-antidotes",
    "conceptGroup": "sulfonylurea-rescue",
    "difficulty": "Applied",
    "question": "An adult has symptomatic hypoglycemia after sulfonylurea overdose. Which response addresses the immediate deficit and continued insulin release?",
    "choices": [
      "Dextrose correction with octreotide and monitoring",
      "Octreotide without correcting the low glucose",
      "Repeated dextrose alone with immediate discharge",
      "Insulin injection"
    ],
    "answer": 0,
    "explanation": "Glucose treats neuroglycopenia while octreotide reduces further pancreatic insulin secretion.",
    "reviewHref": "#metabolic-cytotoxic-antidotes"
  },
  {
    "id": "tox-sulfonylurea-3",
    "lesson": "metabolic-cytotoxic-antidotes",
    "conceptGroup": "sulfonylurea-rescue",
    "difficulty": "Applied",
    "question": "Under the stated Utah pediatric weight-based pathway, 1 mcg/kg is selected for a 20-kg child. What is the dose?",
    "choices": [
      "20 mg",
      "2 mg",
      "20 mcg",
      "200 mcg"
    ],
    "answer": 2,
    "explanation": "20 kg × 1 mcg/kg = 20 mcg. Confirm the route and complete protocol; do not confuse micrograms and milligrams.",
    "reviewHref": "#metabolic-cytotoxic-antidotes"
  },
  {
    "id": "tox-sulfonylurea-4",
    "lesson": "metabolic-cytotoxic-antidotes",
    "conceptGroup": "sulfonylurea-rescue",
    "difficulty": "Applied",
    "question": "Glucose is normal immediately after octreotide, and the patient eats a meal. What follows?",
    "choices": [
      "Immediate discharge",
      "Continue monitored observation after the last dose for recurrence",
      "Stop all glucose checks",
      "Give prophylactic insulin"
    ],
    "answer": 1,
    "explanation": "Treatment may mask ongoing sulfonylurea action. Utah specifies 12 to 24 hours after the final octreotide dose.",
    "reviewHref": "#metabolic-cytotoxic-antidotes"
  }
];

const insulinRescueCases = [
  {
    "id": "tox-insulin-rescue-1",
    "lesson": "metabolic-cytotoxic-antidotes",
    "conceptGroup": "insulin-rescue",
    "difficulty": "Applied",
    "question": "A patient with an insulin overdose briefly regains normal glucose after rescue. Which follow-up is appropriate?",
    "choices": [
      "Stop monitoring",
      "Continue glucose surveillance and assess potassium and recurrence",
      "Give a sulfonylurea",
      "Treat the first normal reading as clearance"
    ],
    "answer": 1,
    "explanation": "Insulin can continue acting after initial correction; hypokalemia is another recognized overdose effect.",
    "reviewHref": "#metabolic-cytotoxic-antidotes"
  },
  {
    "id": "tox-insulin-rescue-2",
    "lesson": "metabolic-cytotoxic-antidotes",
    "conceptGroup": "insulin-rescue",
    "difficulty": "Applied",
    "question": "Severe hypoglycemia persists after glucagon in a patient with prolonged starvation. What mechanism matters?",
    "choices": [
      "Liver glycogen may be depleted, limiting glucagon response",
      "Glucagon supplies glucose directly",
      "Starvation guarantees excess glycogen",
      "Glucose treatment is contraindicated"
    ],
    "answer": 0,
    "explanation": "Glucagon mobilizes stored hepatic glycogen. Depletion can limit efficacy; glucose treatment is needed.",
    "reviewHref": "#metabolic-cytotoxic-antidotes"
  },
  {
    "id": "tox-insulin-rescue-3",
    "lesson": "metabolic-cytotoxic-antidotes",
    "conceptGroup": "insulin-rescue",
    "difficulty": "Applied",
    "question": "After administering emergency glucagon, a caregiver should do what?",
    "choices": [
      "Wait until tomorrow to seek help",
      "Summon emergency assistance and avoid oral intake until swallowing is safe",
      "Force a drink into an unconscious patient",
      "Assume recurrence is impossible"
    ],
    "answer": 1,
    "explanation": "Glucagon rescue does not replace emergency assistance or aspiration precautions.",
    "reviewHref": "#metabolic-cytotoxic-antidotes"
  }
];

const valproateCases = [
  {
  "id": "tox-topiramate-1",
  "lesson": "valproate-poisoning",
  "conceptGroup": "topiramate-hyperammonemia",
  "difficulty": "Applied",
  "question": "A patient taking topiramate without valproate develops unexplained vomiting and confusion. Which evaluation remains indicated?",
  "choices": [
    "Ammonia testing and urgent clinical assessment",
    "Exclude hyperammonemia because valproate is absent",
    "Dismiss symptoms as expected word-finding difficulty",
    "Wait for jaundice before investigating"
  ],
  "answer": 0,
  "explanation": "Topiramate alone can cause hyperammonemia; these symptoms warrant evaluation.",
  "reviewHref": "#valproate-poisoning"
},
  {
    "id": "tox-valproate-1",
    "lesson": "valproate-poisoning",
    "conceptGroup": "valproate-rescue",
    "difficulty": "Applied",
    "question": "A patient taking valproate and topiramate develops lethargy and vomiting with normal liver tests. What should be checked?",
    "choices": [
      "Ammonia and clinical evidence of encephalopathy",
      "Only the normal transaminases",
      "No tests because both drugs were previously tolerated",
      "Only a fasting lipid panel"
    ],
    "answer": 0,
    "explanation": "The labeled interaction can cause hyperammonemic encephalopathy despite normal liver tests.",
    "reviewHref": "#valproate-poisoning"
  },
  {
    "id": "tox-valproate-2",
    "lesson": "valproate-poisoning",
    "conceptGroup": "valproate-rescue",
    "difficulty": "Applied",
    "question": "A 70-kg patient is prescribed the stated Queensland carnitine loading regimen. What dose follows its cap?",
    "choices": [
      "7 g",
      "6 g",
      "3 g",
      "700 mg"
    ],
    "answer": 1,
    "explanation": "100 mg/kg gives 7 g, but the loading maximum is 6 g.",
    "reviewHref": "#valproate-poisoning"
  },
  {
    "id": "tox-valproate-3",
    "lesson": "valproate-poisoning",
    "conceptGroup": "valproate-rescue",
    "difficulty": "Applied",
    "question": "A 70-kg patient with valproate poisoning receives maintenance levocarnitine under the Queensland pathway: 50 mg/kg every 8 hours, capped at 3 g per dose. What dose applies?",
    "choices": [
      "3.5 g",
      "6 g",
      "3 g",
      "70 mg"
    ],
    "answer": 2,
    "explanation": "50 mg/kg gives 3.5 g; the per-dose maximum is 3 g.",
    "reviewHref": "#valproate-poisoning"
  },
  {
    "id": "tox-valproate-4",
    "lesson": "valproate-poisoning",
    "conceptGroup": "valproate-rescue",
    "difficulty": "Applied",
    "question": "A patient with severe valproate poisoning has shock but a level below 1,300 mg/L. What does EXTRIP recommend?",
    "choices": [
      "Wait until the level crosses 1,300",
      "Extracorporeal treatment because shock is an independent trigger",
      "Carnitine guarantees dialysis is unnecessary",
      "No further monitoring"
    ],
    "answer": 1,
    "explanation": "EXTRIP’s recommended triggers are alternatives, including shock and cerebral edema.",
    "reviewHref": "#valproate-poisoning"
  },
  {
    "id": "tox-valproate-5",
    "lesson": "valproate-poisoning",
    "conceptGroup": "valproate-rescue",
    "difficulty": "Applied",
    "question": "Which finding falls in EXTRIP’s suggested rather than recommended category?",
    "choices": [
      "Shock",
      "Cerebral edema",
      "Valproate above 1,300 mg/L",
      "Valproate 950 mg/L without those other findings"
    ],
    "answer": 3,
    "explanation": "The suggested concentration threshold is above 900 mg/L; the recommended concentration threshold is above 1,300 mg/L.",
    "reviewHref": "#valproate-poisoning"
  },
  {
    "id": "tox-valproate-6",
    "lesson": "valproate-poisoning",
    "conceptGroup": "valproate-rescue",
    "difficulty": "Applied",
    "question": "After an enteric-coated valproate overdose, a patient is well at two hours. Which conclusion is appropriate?",
    "choices": [
      "Delayed toxicity remains possible",
      "The formulation ensures no toxicity",
      "No further glucose or neurologic assessment is needed",
      "The first level always captures the peak"
    ],
    "answer": 0,
    "explanation": "Delayed-release exposure requires a formulation-aware observation and serial assessment plan.",
    "reviewHref": "#valproate-poisoning"
  }
];

const salicylateRescueCases = [
  {
    "id": "tox-salicylate-1",
    "lesson": "salicylate-poisoning",
    "conceptGroup": "salicylate-rescue",
    "difficulty": "Applied",
    "question": "During salicylate treatment, the measured level falls but confusion and acidemia worsen. What does this mean?",
    "choices": [
      "Recovery is established",
      "Escalate care; tissue toxicity can worsen despite the falling level",
      "Stop all monitoring",
      "The Done nomogram proves safety"
    ],
    "answer": 1,
    "explanation": "Clinical deterioration overrides reassurance from the isolated trend.",
    "reviewHref": "#salicylate-poisoning"
  },
  {
    "id": "tox-salicylate-2",
    "lesson": "salicylate-poisoning",
    "conceptGroup": "salicylate-rescue",
    "difficulty": "Applied",
    "question": "A salicylate-poisoned patient develops new hypoxemia requiring oxygen at 55 mg/dL. Which EXTRIP interpretation is correct?",
    "choices": [
      "Wait until 100 mg/dL",
      "Dialysis is excluded below 90 mg/dL",
      "New oxygen-requiring hypoxemia independently supports extracorporeal treatment",
      "Only the dose history matters"
    ],
    "answer": 2,
    "explanation": "Clinical indications are alternatives to concentration thresholds.",
    "reviewHref": "#salicylate-poisoning"
  },
  {
    "id": "tox-salicylate-3",
    "lesson": "salicylate-poisoning",
    "conceptGroup": "salicylate-rescue",
    "difficulty": "Applied",
    "question": "A prescribed final 1,000-mL infusion contains 150 mEq bicarbonate and runs at 200 mL/hour. What bicarbonate rate is delivered?",
    "choices": [
      "15 mEq/hour",
      "30 mEq/hour",
      "150 mEq/hour",
      "200 mEq/hour"
    ],
    "answer": 1,
    "explanation": "150 / 1000 × 200 = 30 mEq/hour.",
    "reviewHref": "#salicylate-poisoning"
  },
  {
    "id": "tox-salicylate-4",
    "lesson": "salicylate-poisoning",
    "conceptGroup": "salicylate-rescue",
    "difficulty": "Applied",
    "question": "A prescribed final 1,000-mL bag contains 40 mEq potassium chloride. At 200 mL/hour, what potassium rate is delivered?",
    "choices": [
      "4 mEq/hour",
      "8 mEq/hour",
      "40 mEq/hour",
      "80 mEq/hour"
    ],
    "answer": 1,
    "explanation": "40 / 1000 × 200 = 8 mEq/hour; verify appropriateness separately.",
    "reviewHref": "#salicylate-poisoning"
  },
  {
    "id": "tox-salicylate-5",
    "lesson": "salicylate-poisoning",
    "conceptGroup": "salicylate-rescue",
    "difficulty": "Applied",
    "question": "A modified-release aspirin ingestion is estimated at 250 mg/kg and occurred 2.5 hours ago. The airway and bowel assessment permit charcoal. How does the 2026 consensus classify single-dose charcoal?",
    "choices": [
      "Outside every treatment window",
      "Recommended within the 3-hour window",
      "Only multiple-dose treatment is recommended",
      "Never useful for modified-release aspirin"
    ],
    "answer": 1,
    "explanation": "At the 200-mg/kg threshold, the modified-release recommended window extends through 3 hours.",
    "reviewHref": "#salicylate-poisoning"
  },
  {
    "id": "tox-salicylate-6",
    "lesson": "salicylate-poisoning",
    "conceptGroup": "salicylate-rescue",
    "difficulty": "Applied",
    "question": "After dialysis, salicylate is 15 mg/dL but serious clinical abnormalities persist. Does the concentration alone satisfy EXTRIP stopping criteria?",
    "choices": [
      "Yes, any value below 19 is sufficient",
      "Yes, regardless of clinical condition",
      "No; clinical improvement is also required",
      "Yes, if the initial exposure was acute"
    ],
    "answer": 2,
    "explanation": "The cessation criteria join clinical improvement with the concentration condition.",
    "reviewHref": "#salicylate-poisoning"
  }
];

const toxicAlcoholCases = [
{
  "id": "tox-alcohol-boundary-1",
  "lesson": "toxic-alcohol-rescue",
  "conceptGroup": "alcohol-treatment-boundaries",
  "difficulty": "Applied",
  "question": "A confirmed isolated isopropanol ingestion causes sedation and ketosis. Why is routine fomepizole inappropriate?",
  "choices": [
    "It can prolong parent-alcohol toxicity",
    "It always causes methanol formation",
    "It converts acetone into ethylene glycol",
    "It eliminates the need for airway support"
  ],
  "answer": 0,
  "explanation": "Alcohol-dehydrogenase inhibition slows isopropanol clearance; supportive care is central.",
  "reviewHref": "#toxic-alcohol-rescue"
},
{
  "id": "tox-alcohol-boundary-2",
  "lesson": "toxic-alcohol-rescue",
  "conceptGroup": "alcohol-treatment-boundaries",
  "difficulty": "Applied",
  "question": "Several children develop unexplained anuria after using the same liquid medicine lot. What additional action is warranted?",
  "choices": [
    "Assume the active ingredient alone explains all cases",
    "Discard every bottle before investigation",
    "Evaluate possible glycol contamination and preserve product/lot information",
    "Wait for every child to develop visual loss"
  ],
  "answer": 2,
  "explanation": "Medicine-associated contamination can produce clustered kidney injury and requires clinical and public-health investigation.",
  "reviewHref": "#toxic-alcohol-rescue"
},
{
  "id": "tox-alcohol-boundary-3",
  "lesson": "toxic-alcohol-rescue",
  "conceptGroup": "alcohol-treatment-boundaries",
  "difficulty": "Applied",
  "question": "All children in a retrospective mixed EG/DEG series received fomepizole, and many also received kidney replacement. Which conclusion is justified?",
  "choices": [
    "The study proves fomepizole caused every recovery",
    "The observations support clinical experience but cannot isolate a causal treatment effect",
    "The study establishes one validated DEG dialysis threshold",
    "No uncertainty remains about the optimal regimen"
  ],
  "answer": 1,
  "explanation": "No untreated comparator and concurrent interventions limit causal inference.",
  "reviewHref": "#toxic-alcohol-rescue"
},
  {
    "id": "tox-alcohol-1",
    "lesson": "toxic-alcohol-rescue",
    "conceptGroup": "toxic-alcohol-rescue",
    "difficulty": "Applied",
    "question": "A 70-kg patient needs the labeled fomepizole loading dose from 1-g/mL stock. What volume is withdrawn before dilution?",
    "choices": [
      "0.105 mL",
      "1.05 mL",
      "10.5 mL",
      "70 mL"
    ],
    "answer": 1,
    "explanation": "70 × 15 = 1,050 mg; divide by 1,000 mg/mL. Dilution and infusion are separate preparation steps.",
    "reviewHref": "#toxic-alcohol-rescue"
  },
  {
    "id": "tox-alcohol-2",
    "lesson": "toxic-alcohol-rescue",
    "conceptGroup": "toxic-alcohol-rescue",
    "difficulty": "Applied",
    "question": "Hemodialysis ends 2 hours after the last fomepizole dose. What does the label direct at completion?",
    "choices": [
      "No dose at any time",
      "Half the next scheduled dose",
      "Double the loading dose",
      "Stop the antidote permanently"
    ],
    "answer": 1,
    "explanation": "The 1-to-3-hour interval calls for half the next scheduled dose.",
    "reviewHref": "#toxic-alcohol-rescue"
  },
  {
    "id": "tox-alcohol-3",
    "lesson": "toxic-alcohol-rescue",
    "conceptGroup": "toxic-alcohol-rescue",
    "difficulty": "Applied",
    "question": "A methanol-poisoned patient receiving fomepizole develops new visual deficits at 35 mg/dL. How should the EXTRIP criteria be applied?",
    "choices": [
      "Wait until 70 mg/dL",
      "Wait for renal failure",
      "New visual injury is an independent dialysis indication",
      "Stop fomepizole"
    ],
    "answer": 2,
    "explanation": "The clinical criterion does not require the concentration criterion to be met.",
    "reviewHref": "#toxic-alcohol-rescue"
  },
  {
    "id": "tox-alcohol-4",
    "lesson": "toxic-alcohol-rescue",
    "conceptGroup": "toxic-alcohol-rescue",
    "difficulty": "Applied",
    "question": "In a patient with evidence of ethylene glycol exposure, the anion gap is 26 mmol/L when potassium is included but 22 mmol/L when omitted. Which value uses the formula specified by EXTRIP?",
    "choices": [
      "22",
      "The two formulas are interchangeable",
      "Neither may be used",
      "26"
    ],
    "answer": 3,
    "explanation": "EXTRIP specifies the potassium-inclusive formula for ethylene glycol.",
    "reviewHref": "#toxic-alcohol-rescue"
  },
  {
    "id": "tox-alcohol-5",
    "lesson": "toxic-alcohol-rescue",
    "conceptGroup": "toxic-alcohol-rescue",
    "difficulty": "Applied",
    "question": "Ethylene glycol is 23 mg/dL after dialysis, and pH is normal. Does that alone establish the labeled fomepizole stopping condition?",
    "choices": [
      "Yes, dialysis completion always ends dosing",
      "No; the label requires undetectable or below 20 mg/dL plus clinical recovery",
      "Yes, any value below 50 suffices",
      "Yes, only pH matters"
    ],
    "answer": 1,
    "explanation": "The antidote endpoint is separate from the EXTRIP dialysis endpoint.",
    "reviewHref": "#toxic-alcohol-rescue"
  },
  {
    "id": "tox-alcohol-6",
    "lesson": "toxic-alcohol-rescue",
    "conceptGroup": "toxic-alcohol-rescue",
    "difficulty": "Applied",
    "question": "A patient has isolated methanol ingestion. Is multiple-dose charcoal the recommended means of toxin removal?",
    "choices": [
      "Yes, regardless of absorption",
      "Yes, because dialysis is never useful",
      "No; the 2026 consensus recommends against charcoal for toxic alcohols",
      "Only after a normal osmolar gap"
    ],
    "answer": 2,
    "explanation": "Toxic alcohol adsorption is inadequate; choose the toxin-specific rescue pathway.",
    "reviewHref": "#toxic-alcohol-rescue"
  },
  {
    "id": "tox-alcohol-7",
    "lesson": "toxic-alcohol-rescue",
    "conceptGroup": "toxic-alcohol-rescue",
    "difficulty": "Applied",
    "question": "Suspected ethylene glycol poisoning causes a seizure despite a parent concentration below the numerical dialysis trigger. Which interpretation fits EXTRIP?",
    "choices": [
      "Seizures independently support extracorporeal treatment",
      "The lower concentration excludes severe injury",
      "Only the reported swallowed volume determines dialysis",
      "Give charcoal instead"
    ],
    "answer": 0,
    "explanation": "Clinical criteria are independent of the parent-alcohol concentration criteria.",
    "reviewHref": "#toxic-alcohol-rescue"
  }
];

const cyanideRescueCases = [
{"id": "tox-nitroprusside-1", "lesson": "cellular-blood-toxins", "conceptGroup": "cyanide-rescue", "difficulty": "Applied", "question": "Under the AHA initial pediatric hydroxocobalamin regimen, what volume of 25 mg/mL solution supplies 70 mg/kg to a 20-kg child?", "choices": ["5.6 mL", "56 mL", "200 mL", "560 mL"], "answer": 1, "explanation": "20 times 70 = 1,400 mg, below the 5-g cap; 1,400/25 = 56 mL. This guideline recommendation does not mean US-label pediatric effectiveness has been established.", "reviewHref": "#cellular-blood-toxins"},{"id": "tox-nitroprusside-2", "lesson": "cellular-blood-toxins", "conceptGroup": "cyanide-rescue", "difficulty": "Applied", "question": "During nitroprusside therapy, dose requirements rise and cyanide toxicity is suspected, but acidosis is not yet present. What is the appropriate next step?", "choices": ["Continue escalating until acidosis confirms toxicity", "Stop nitroprusside and arrange urgent expert-guided antidote and supportive care", "Use hemodialysis alone to remove cyanide", "Wait for a thiocyanate result before acting"], "answer": 1, "explanation": "Acidosis can lag dangerous cyanide accumulation. Stop the source and treat suspected toxicity promptly; dialysis does not substitute for cyanide antidote rescue.", "reviewHref": "#cellular-blood-toxins"},{"id": "tox-nitroprusside-3", "lesson": "cellular-blood-toxins", "conceptGroup": "cyanide-rescue", "difficulty": "Applied", "question": "A patient with kidney failure develops severe thiocyanate accumulation during prolonged nitroprusside exposure. Which distinction is correct?", "choices": ["Hemodialysis can remove thiocyanate but does not effectively remove cyanide", "Cyanide and thiocyanate have identical clearance", "Normal blood pressure excludes thiocyanate toxicity", "Renal function matters only for cyanide and not thiocyanate"], "answer": 0, "explanation": "Thiocyanate is renally eliminated and can be removed with dialysis in severe toxicity; acute cyanide rescue follows a different pathway.", "reviewHref": "#cellular-blood-toxins"},
{"id": "tox-nithiodote-1", "lesson": "cellular-blood-toxins", "conceptGroup": "cyanide-rescue", "difficulty": "Applied", "question": "A 20-kg child is selected for NITHIODOTE under specialist care. Before any anemia adjustment, which labeled nitrite and thiosulfate volumes are correct?", "choices": ["Nitrite 4 mL; thiosulfate 20 mL", "Nitrite 20 mL; thiosulfate 4 mL", "Nitrite 10 mL; thiosulfate 50 mL", "Nitrite 40 mL; thiosulfate 200 mL"], "answer": 0, "explanation": "Nitrite: 0.2 mL/kg times 20 = 4 mL (120 mg). Thiosulfate: 1 mL/kg times 20 = 20 mL (5 g). Both are below the respective adult caps.", "reviewHref": "#cellular-blood-toxins"},{"id": "tox-nithiodote-2", "lesson": "cellular-blood-toxins", "conceptGroup": "cyanide-rescue", "difficulty": "Applied", "question": "After initial sodium nitrite, methemoglobin is 12% and perfusion has improved. Should more nitrite be given solely to raise methemoglobin to 30%?", "choices": ["Yes; 30% is the therapeutic target", "No; further dosing follows clinical need and safety, not an arbitrary methemoglobin target", "Yes; repeat a full adult vial regardless of weight", "No monitoring is needed once perfusion improves"], "answer": 1, "explanation": "The label discourages dosing to an arbitrary methemoglobin target. Thirty percent is a safety boundary, not a target; recurrent toxicity and clinical response determine whether a repeat is warranted.", "reviewHref": "#cellular-blood-toxins"},{"id": "tox-nithiodote-3", "lesson": "cellular-blood-toxins", "conceptGroup": "cyanide-rescue", "difficulty": "Applied", "question": "Which factor calls for a proportional nitrite dose reduction and specialist review during cyanide rescue?", "choices": ["Pre-existing anemia", "An available IV line", "A normal hemoglobin concentration", "The availability of co-oximetry"], "answer": 0, "explanation": "With less hemoglobin available, nitrite can remove a greater fraction of remaining oxygen-carrying capacity. Labeling recommends a proportional reduction in anemia.", "reviewHref": "#cellular-blood-toxins"},
  {
    "id": "tox-cyanide-rescue-1",
    "lesson": "cellular-blood-toxins",
    "conceptGroup": "cyanide-rescue",
    "difficulty": "Applied",
    "question": "An adult is prescribed 5 g hydroxocobalamin prepared at 25 mg/mL. What volume provides the dose?",
    "choices": [
      "20 mL",
      "200 mL",
      "2 mL",
      "2,000 mL"
    ],
    "answer": 1,
    "explanation": "Convert 5 g to 5,000 mg; 5,000 divided by 25 mg/mL is 200 mL. The initial labeled infusion takes 15 minutes.",
    "reviewHref": "#cellular-blood-toxins"
  },
  {
    "id": "tox-cyanide-rescue-2",
    "lesson": "cellular-blood-toxins",
    "conceptGroup": "cyanide-rescue",
    "difficulty": "Applied",
    "question": "A house-fire victim has concurrent carbon monoxide and life-threatening cyanide poisoning. Hydroxocobalamin is unavailable. Which alternative does AHA 2025 consider reasonable?",
    "choices": [
      "Sodium thiosulfate alone",
      "Sodium nitrite alone regardless of oxygen carriage",
      "Delay all treatment until a cyanide level returns",
      "Treat with methylene blue instead"
    ],
    "answer": 0,
    "explanation": "Thiosulfate alone avoids the additional oxygen-carrying impairment from nitrite-induced methemoglobinemia in concurrent carbon monoxide toxicity.",
    "reviewHref": "#cellular-blood-toxins"
  },
  {
    "id": "tox-cyanide-rescue-3",
    "lesson": "cellular-blood-toxins",
    "conceptGroup": "cyanide-rescue",
    "difficulty": "Applied",
    "question": "After hydroxocobalamin, a patient needs dialysis and the machine reports a blood leak. Which response best addresses the known interference?",
    "choices": [
      "Assume dialysis is permanently contraindicated",
      "Ignore the alarm without investigating",
      "Notify the dialysis team, assess the alarm and arrange a safe supported dialysis approach",
      "Treat the alarm as proof of new cyanide exposure"
    ],
    "answer": 2,
    "explanation": "The red dye can falsely trigger some optical blood-leak detectors. Coordinate safe renal support rather than automatically abandoning dialysis or bypassing safety controls.",
    "reviewHref": "#cellular-blood-toxins"
  },
  {
    "id": "tox-cyanide-rescue-4",
    "lesson": "cellular-blood-toxins",
    "conceptGroup": "cyanide-rescue",
    "difficulty": "Applied",
    "question": "Hydroxocobalamin and sodium thiosulfate are both ordered during expert-directed rescue. Which administration plan is appropriate?",
    "choices": [
      "Mix both drugs in the same vial",
      "Infuse both simultaneously through the hydroxocobalamin line",
      "Use separate IV lines because the drugs are incompatible in solution",
      "Shake the hydroxocobalamin vial vigorously before mixing"
    ],
    "answer": 2,
    "explanation": "Potential clinical use of both agents does not establish physical or chemical compatibility; hydroxocobalamin requires a separate line.",
    "reviewHref": "#cellular-blood-toxins"
  }
];

const cholinergicRescueCases = [
{"id": "tox-anticholinesterase-1", "lesson": "neurotoxic-syndromes", "conceptGroup": "cholinergic-rescue", "difficulty": "Applied", "question": "A patient with MG takes repeated extra pyridostigmine doses and develops diarrhea, salivation, fasciculations and worsening weakness. What is the safest response?", "choices": ["Increase pyridostigmine until strength returns", "Suspect cholinergic toxicity, withhold further causative doses and obtain urgent respiratory and specialist assessment", "Treat diarrhea alone and continue the extra doses", "Assume the symptoms prove autoimmune progression"], "answer": 1, "explanation": "Muscarinic excess plus fasciculations and paradoxical weakness raises concern for excessive acetylcholinesterase inhibition. Escalating the drug can worsen respiratory failure.", "reviewHref": "#neurotoxic-syndromes"},{"id": "tox-anticholinesterase-2", "lesson": "neurotoxic-syndromes", "conceptGroup": "cholinergic-rescue", "difficulty": "Applied", "question": "Atropine reduces secretions after pyridostigmine overdose, but the patient remains weak. Which conclusion is appropriate?", "choices": ["The poisoning is resolved because the mouth is dry", "The weakness must be unrelated to the exposure", "Continue assessing ventilation; muscarinic relief does not reverse nicotinic weakness", "Give a fixed DuoDote dose to every patient regardless of weight"], "answer": 2, "explanation": "Atropine can conceal muscarinic overdose signs while clinically important neuromuscular weakness persists. Ventilation and specialist reassessment remain necessary.", "reviewHref": "#neurotoxic-syndromes"},
{"id": "tox-duodote-1", "lesson": "neurotoxic-syndromes", "conceptGroup": "cholinergic-rescue", "difficulty": "Applied", "question": "A 65-kg patient with suspected organophosphorus exposure is unconscious with copious airway secretions. A trained responder is using the DuoDote severe-symptom regimen. What does the label specify?", "choices": ["One device followed by a mandatory 15-minute wait despite severe symptoms", "Three devices in rapid succession, alongside urgent supportive care and transfer", "Six devices automatically", "One device and discharge when secretions improve"], "answer": 1, "explanation": "Any severe symptom calls for three devices promptly. The 15-minute observation language belongs to the mild-symptom pathway and should not delay severe rescue.", "reviewHref": "#neurotoxic-syndromes"},{"id": "tox-duodote-2", "lesson": "neurotoxic-syndromes", "conceptGroup": "cholinergic-rescue", "difficulty": "Applied", "question": "Which statement correctly describes DuoDote for a 30-kg child?", "choices": ["Its fixed adult device is established for every pediatric weight", "Safety and effectiveness at this weight are not established; obtain weight-appropriate emergency treatment", "No atropine can be used at this weight", "The device can be divided into half injections"], "answer": 1, "explanation": "The labeled population weighs more than 41 kg. This does not mean withholding pediatric resuscitation or appropriately dosed antidotes; it limits the fixed combination device.", "reviewHref": "#neurotoxic-syndromes"},
{"id": "tox-atropine-maintenance-1", "lesson": "neurotoxic-syndromes", "conceptGroup": "cholinergic-rescue", "difficulty": "Applied", "question": "A poison-center protocol starts atropine maintenance at 10% to 20% of the cumulative loading dose per hour. Boluses of 2, 4, 8 and 16 mg achieved control. What is the starting range under that protocol?", "choices": ["1.6 to 3.2 mg/hour", "3 to 6 mg/hour", "30 to 60 mg/hour", "0.3 to 0.6 mg/hour"], "answer": 1, "explanation": "The cumulative dose is 30 mg; 10% to 20% is 3 to 6 mg/hour, followed by clinical titration. The question specifies the response-based protocol; it does not silently combine its dosing with a conflicting summary-table cap.", "reviewHref": "#neurotoxic-syndromes"},{"id": "tox-atropine-maintenance-2", "lesson": "neurotoxic-syndromes", "conceptGroup": "cholinergic-rescue", "difficulty": "Applied", "question": "Two days after initial improvement from organophosphate poisoning, a patient develops progressive weakness and inadequate ventilation without renewed copious secretions. What is the priority?", "choices": ["Assess and support ventilation urgently; delayed neuromuscular failure remains possible", "Discharge because secretions are controlled", "Use pupil size alone to decide whether ventilation is needed", "Assume more atropine directly reverses skeletal muscle paralysis"], "answer": 0, "explanation": "Intermediate syndrome can produce delayed respiratory weakness after the initial crisis. Airway and ventilatory reassessment remains urgent, and atropine does not reverse nicotinic paralysis.", "reviewHref": "#neurotoxic-syndromes"},
  {
    "id": "tox-cholinergic-rescue-1",
    "lesson": "neurotoxic-syndromes",
    "conceptGroup": "cholinergic-rescue",
    "difficulty": "Applied",
    "question": "After atropine reduces bronchorrhea in organophosphate poisoning, respiratory muscle weakness persists. What does this mean?",
    "choices": [
      "Atropine does not reverse nicotinic paralysis; continue ventilatory support and expert-guided oxime treatment",
      "The weakness excludes organophosphate poisoning",
      "More atropine always directly restores skeletal muscle strength",
      "A dry mouth guarantees adequate ventilation"
    ],
    "answer": 0,
    "explanation": "Muscarinic improvement and neuromuscular recovery are different endpoints. Atropine does not reverse paralysis.",
    "reviewHref": "#neurotoxic-syndromes"
  },
  {
    "id": "tox-cholinergic-rescue-2",
    "lesson": "neurotoxic-syndromes",
    "conceptGroup": "cholinergic-rescue",
    "difficulty": "Applied",
    "question": "Which airway medication should be avoided in life-threatening cholinesterase-inhibitor poisoning because paralysis may be prolonged?",
    "choices": [
      "Rocuronium",
      "Succinylcholine",
      "Cisatracurium",
      "An appropriately selected benzodiazepine"
    ],
    "answer": 1,
    "explanation": "Succinylcholine and mivacurium rely on cholinesterase metabolism. AHA recommends alternatives in this setting.",
    "reviewHref": "#neurotoxic-syndromes"
  },
  {
    "id": "tox-cholinergic-rescue-3",
    "lesson": "neurotoxic-syndromes",
    "conceptGroup": "cholinergic-rescue",
    "difficulty": "Applied",
    "question": "A patient has severe cholinergic poisoning, but the pesticide class is unknown. Which oxime statement fits AHA 2025?",
    "choices": [
      "Withhold pralidoxime until organophosphate identity is proven",
      "Do not withhold an oxime solely because the poison class is unknown; obtain expert guidance",
      "Give pralidoxime routinely in every confirmed carbaryl exposure",
      "Pralidoxime replaces atropine and ventilation"
    ],
    "answer": 1,
    "explanation": "Unknown-class poisoning differs from confirmed carbamate poisoning, where benefit is uncertain and the label warns about carbaryl.",
    "reviewHref": "#neurotoxic-syndromes"
  },
  {
    "id": "tox-cholinergic-rescue-4",
    "lesson": "neurotoxic-syndromes",
    "conceptGroup": "cholinergic-rescue",
    "difficulty": "Applied",
    "question": "A prescribed 2-g pralidoxime dose is in a final volume of 100 mL to run over 30 minutes. Which pump rate is correct?",
    "choices": [
      "50 mL/hour",
      "100 mL/hour",
      "200 mL/hour",
      "400 mL/hour"
    ],
    "answer": 2,
    "explanation": "100 mL divided by 0.5 hour = 200 mL/hour. Drug delivery is 2,000/30, about 67 mg/min, below the labeled intermittent limit of 200 mg/min.",
    "reviewHref": "#neurotoxic-syndromes"
  }
];

const vkaDeliveryCases = [
  {
    "id": "tox-vka-delivery-1",
    "lesson": "anticoagulant-reversal",
    "conceptGroup": "vka-delivery",
    "difficulty": "Applied",
    "question": "A patient has life-threatening warfarin-associated bleeding. Why is IV vitamin K paired with rapid factor replacement?",
    "choices": [
      "Vitamin K replaces circulating factors immediately",
      "Vitamin K acts over hours while factor replacement provides immediate support",
      "PCC prevents all anaphylaxis",
      "Vitamin K makes source control unnecessary"
    ],
    "answer": 1,
    "explanation": "Vitamin K supports sustained factor production but is too slow to substitute for urgent factor replacement.",
    "reviewHref": "#anticoagulant-reversal"
  },
  {
    "id": "tox-vka-delivery-2",
    "lesson": "anticoagulant-reversal",
    "conceptGroup": "vka-delivery",
    "difficulty": "Applied",
    "question": "A 60-kg adult is prescribed KCENTRA at the labeled volume rate of 0.12 mL/kg/min. What pump rate corresponds to that rate?",
    "choices": [
      "43.2 mL/hour",
      "72 mL/hour",
      "432 mL/hour",
      "720 mL/hour"
    ],
    "answer": 2,
    "explanation": "0.12 \u00d7 60 = 7.2 mL/min; multiplying by 60 gives 432 mL/hour, below the 8.4-mL/min cap.",
    "reviewHref": "#anticoagulant-reversal"
  },
  {
    "id": "tox-vka-delivery-3",
    "lesson": "anticoagulant-reversal",
    "conceptGroup": "vka-delivery",
    "difficulty": "Applied",
    "question": "A 90-kg adult receives KCENTRA. What is the maximum labeled volumetric infusion rate expressed per hour?",
    "choices": [
      "648 mL/hour",
      "504 mL/hour",
      "90 mL/hour",
      "No maximum applies"
    ],
    "answer": 1,
    "explanation": "The uncapped rate is 10.8 mL/min, but the label caps it at 8.4 mL/min: 8.4 \u00d7 60 = 504 mL/hour.",
    "reviewHref": "#anticoagulant-reversal"
  },
  {
    "id": "tox-vka-delivery-4",
    "lesson": "anticoagulant-reversal",
    "conceptGroup": "vka-delivery",
    "difficulty": "Applied",
    "question": "Which statement about diluted slow IV phytonadione is accurate?",
    "choices": [
      "Dilution eliminates anaphylaxis risk",
      "The current boxed warning no longer applies",
      "Severe hypersensitivity remains possible; use monitored slow administration",
      "It should always be pushed rapidly during major bleeding"
    ],
    "answer": 2,
    "explanation": "The current label retains the warning even when the drug is diluted. Observe the maximum 1 mg/min rate and the selected emergency protocol.",
    "reviewHref": "#anticoagulant-reversal"
  }
];

const protamineRescueCases = [
  {
    "id": "tox-protamine-1",
    "lesson": "anticoagulant-reversal",
    "conceptGroup": "protamine-rescue",
    "difficulty": "Applied",
    "question": "A specialist orders protamine 30 mg from a 10 mg/mL vial. What volume is withdrawn before any dilution?",
    "choices": [
      "0.3 mL",
      "3 mL",
      "10 mL",
      "30 mL"
    ],
    "answer": 1,
    "explanation": "30 mg divided by 10 mg/mL equals 3 mL. The calculated volume does not change the need for slow monitored administration.",
    "reviewHref": "#anticoagulant-reversal"
  },
  {
    "id": "tox-protamine-2",
    "lesson": "anticoagulant-reversal",
    "conceptGroup": "protamine-rescue",
    "difficulty": "Applied",
    "question": "Severe bleeding follows enoxaparin 40 mg given 10 hours earlier. Using the labeled timing ratio, what protamine amount is calculated before clinical and administration checks?",
    "choices": [
      "20 mg",
      "40 mg",
      "80 mg",
      "400 mg"
    ],
    "answer": 0,
    "explanation": "After more than 8 hours the label allows 0.5 mg protamine per mg enoxaparin: 0.5 \u00d7 40 = 20 mg. Confirm the need and use slow monitored delivery.",
    "reviewHref": "#anticoagulant-reversal"
  },
  {
    "id": "tox-protamine-3",
    "lesson": "anticoagulant-reversal",
    "conceptGroup": "protamine-rescue",
    "difficulty": "Applied",
    "question": "After protamine for enoxaparin bleeding, the aPTT is normal. Which conclusion is safest?",
    "choices": [
      "All enoxaparin activity is neutralized",
      "Further source control is unnecessary",
      "Normal aPTT does not prove complete reversal; reassess bleeding and residual effect",
      "Give unlimited protamine until anti-Xa reaches zero"
    ],
    "answer": 2,
    "explanation": "Protamine only partially reverses enoxaparin anti-Xa activity, and aPTT is not an adequate measure of its anticoagulant effect.",
    "reviewHref": "#anticoagulant-reversal"
  }
];

const anticoagulantRescueCases = [
  {
    "id": "tox-anticoagulant-1",
    "lesson": "anticoagulant-reversal",
    "conceptGroup": "anticoagulant-rescue",
    "difficulty": "Applied",
    "question": "How much PRAXBIND solution supplies the labeled 5-g dose?",
    "choices": [
      "One 50-mL vial",
      "Two 50-mL vials, 100 mL total",
      "5 mL total",
      "Five 50-mL vials"
    ],
    "answer": 1,
    "explanation": "Each vial contains 2.5 g in 50 mL; two consecutive vials provide 5 g in 100 mL.",
    "reviewHref": "#anticoagulant-reversal"
  },
  {
    "id": "tox-anticoagulant-2",
    "lesson": "anticoagulant-reversal",
    "conceptGroup": "anticoagulant-rescue",
    "difficulty": "Applied",
    "question": "A patient with dabigatran-associated uncontrolled bleeding has renal impairment. What happens to the labeled idarucizumab dose?",
    "choices": [
      "Reduce it by half automatically",
      "Replace it with vitamin K",
      "Use the standard 5-g dose",
      "Give 5 mg instead of 5 g"
    ],
    "answer": 2,
    "explanation": "The PRAXBIND label requires no renal dose adjustment. Kidney dysfunction still matters to dabigatran exposure and subsequent monitoring.",
    "reviewHref": "#anticoagulant-reversal"
  },
  {
    "id": "tox-anticoagulant-3",
    "lesson": "anticoagulant-reversal",
    "conceptGroup": "anticoagulant-rescue",
    "difficulty": "Applied",
    "question": "A 120-kg adult on warfarin has INR 7 and requires urgent reversal. What is the labeled KCENTRA maximum for this category?",
    "choices": [
      "3,000 units",
      "3,500 units",
      "6,000 units",
      "5,000 Factor IX units"
    ],
    "answer": 3,
    "explanation": "INR above 6 uses 50 units/kg with a 100-kg dosing-weight cap and maximum 5,000 units.",
    "reviewHref": "#anticoagulant-reversal"
  },
  {
    "id": "tox-anticoagulant-4",
    "lesson": "anticoagulant-reversal",
    "conceptGroup": "anticoagulant-rescue",
    "difficulty": "Applied",
    "question": "Why is vitamin K given with KCENTRA for warfarin reversal?",
    "choices": [
      "It maintains factor production after replacement factors decline",
      "It directly binds dabigatran",
      "It prevents every thrombotic complication",
      "It immediately removes warfarin by dialysis"
    ],
    "answer": 0,
    "explanation": "PCC supplies factors promptly; vitamin K supports sustained correction of the vitamin K-dependent factor deficit.",
    "reviewHref": "#anticoagulant-reversal"
  },
  {
    "id": "tox-anticoagulant-5",
    "lesson": "anticoagulant-reversal",
    "conceptGroup": "anticoagulant-rescue",
    "difficulty": "Applied",
    "question": "A historical U.S. algorithm recommends andexanet for factor Xa inhibitor bleeding. What needs correction?",
    "choices": [
      "Use the old algorithm without checking availability",
      "Apply the warfarin INR table to apixaban",
      "Reconcile the FDA safety update and ended U.S. sales; use a current institutional hemostatic pathway",
      "Use idarucizumab for all anticoagulants"
    ],
    "answer": 2,
    "explanation": "The post-2025 U.S. context differs from older tables. PCC use for factor Xa inhibitor bleeding is off-label and is not the labeled warfarin INR-based regimen.",
    "reviewHref": "#anticoagulant-reversal"
  }
];

const serotoninRescueCases = [
  {
    "id": "tox-serotonin-1",
    "lesson": "serotonin-toxicity",
    "conceptGroup": "serotonin-rescue",
    "difficulty": "Applied",
    "question": "After a serotonergic overdose, a patient has tremor and hyperreflexia but no fever. Which interpretation is appropriate?",
    "choices": [
      "These findings can satisfy a Hunter pattern in the exposure context",
      "Fever is mandatory in every Hunter pattern",
      "A normal temperature rules out toxicity",
      "Only the heart rate determines diagnosis"
    ],
    "answer": 0,
    "explanation": "Tremor with hyperreflexia is one Hunter pattern. Hyperthermia is not required for every presentation.",
    "reviewHref": "#serotonin-toxicity"
  },
  {
    "id": "tox-serotonin-2",
    "lesson": "serotonin-toxicity",
    "conceptGroup": "serotonin-rescue",
    "difficulty": "Applied",
    "question": "A patient with suspected serotonin toxicity develops severe rigidity and deteriorating ventilation; clonus is difficult to demonstrate. What should happen?",
    "choices": [
      "Wait for clonus to return",
      "Escalate respiratory support and critical care",
      "Use a serum serotonin level to decide whether to ventilate",
      "Replace airway support with an oral drug"
    ],
    "answer": 1,
    "explanation": "Severe rigidity can obscure neuromuscular findings and threaten ventilation. Treat the emergency without waiting for diagnostic perfection.",
    "reviewHref": "#serotonin-toxicity"
  },
  {
    "id": "tox-serotonin-3",
    "lesson": "serotonin-toxicity",
    "conceptGroup": "serotonin-rescue",
    "difficulty": "Applied",
    "question": "Symptoms improve after supportive care and cyproheptadine are given together. What can be concluded?",
    "choices": [
      "The response proves serotonin toxicity",
      "Cyproheptadine alone caused recovery",
      "Improvement does not establish the diagnosis or isolate the drug\u2019s effect",
      "Further monitoring is never needed"
    ],
    "answer": 2,
    "explanation": "Concurrent treatments and spontaneous improvement make causal attribution unreliable. Cyproheptadine remains an adjunct with limited evidence.",
    "reviewHref": "#serotonin-toxicity"
  },
  {
    "id": "tox-serotonin-4",
    "lesson": "serotonin-toxicity",
    "conceptGroup": "serotonin-rescue",
    "difficulty": "Applied",
    "question": "A toxicologist selects the RCH pediatric cyproheptadine pathway for an 8-year-old with persistent symptoms. Which listed oral dose matches that protocol?",
    "choices": [
      "2 mg because all pediatric patients use one dose",
      "4 mg",
      "12 mg automatically because this is the adult loading dose",
      "4 mg intravenously"
    ],
    "answer": 1,
    "explanation": "The named RCH pathway lists 4 mg from age 7, with the same dose three times daily if prolonged symptoms require continued treatment. It is an enteral adjunct, not a replacement for resuscitation.",
    "reviewHref": "#serotonin-toxicity"
  }
];

const stimulantRescueCases = [
  {
    "id": "tox-stimulant-rescue-1",
    "lesson": "neurotoxic-syndromes",
    "conceptGroup": "stimulant-rescue",
    "difficulty": "Applied",
    "question": "A patient with cocaine poisoning is struggling against restraints and has a core temperature of 41 \u00b0C. Which paired intervention addresses immediate threats?",
    "choices": [
      "Effective sedation with rapid external cooling",
      "Prolonged restraint alone",
      "Wait for a urine drug screen before cooling",
      "Treat only the heart rate"
    ],
    "answer": 0,
    "explanation": "Sedation limits dangerous agitation while rapid cooling treats hyperthermia. Restraint alone can worsen the emergency.",
    "reviewHref": "#neurotoxic-syndromes"
  },
  {
    "id": "tox-stimulant-rescue-2",
    "lesson": "neurotoxic-syndromes",
    "conceptGroup": "stimulant-rescue",
    "difficulty": "Applied",
    "question": "During acute cocaine poisoning, coronary vasospasm and a hypertensive emergency persist. Which treatment direction matches AHA 2025?",
    "choices": [
      "Routine beta blockade after any alpha-blocker dose",
      "A monitored vasodilator strategy such as nitrates",
      "Physostigmine for the elevated pressure",
      "Urinary acidification"
    ],
    "answer": 1,
    "explanation": "AHA supports vasodilators and does not recommend beta blockers for this acute cocaine complication. The pheochromocytoma sequencing rule is not a substitute.",
    "reviewHref": "#neurotoxic-syndromes"
  },
  {
    "id": "tox-stimulant-rescue-3",
    "lesson": "neurotoxic-syndromes",
    "conceptGroup": "stimulant-rescue",
    "difficulty": "Applied",
    "question": "A patient develops wide-complex tachycardia during severe cocaine poisoning. What is the rationale for sodium bicarbonate?",
    "choices": [
      "Induce urinary acidification",
      "Prevent opioid withdrawal",
      "Address cocaine-associated sodium-channel cardiotoxicity",
      "Treat every stimulant exposure prophylactically"
    ],
    "answer": 2,
    "explanation": "The ECG and clinical emergency determine this indication. It is separate from urine-pH manipulation for drug elimination.",
    "reviewHref": "#neurotoxic-syndromes"
  },
  {
    "id": "tox-stimulant-rescue-4",
    "lesson": "neurotoxic-syndromes",
    "conceptGroup": "stimulant-rescue",
    "difficulty": "Applied",
    "question": "A patient with MDMA poisoning has life-threatening hyperthermia. Which statement best describes dantrolene?",
    "choices": [
      "It reliably replaces external cooling",
      "It has proven mortality benefit from randomized trials",
      "Its usefulness is uncertain; urgent sedation and cooling remain central",
      "It eliminates the need for airway assessment"
    ],
    "answer": 2,
    "explanation": "AHA characterizes the dantrolene evidence as uncertain. Considering an adjunct must not delay established resuscitative priorities.",
    "reviewHref": "#neurotoxic-syndromes"
  }
];

const physostigmineCases = [
  {
    "id": "tox-physostigmine-1",
    "lesson": "neurotoxic-syndromes",
    "conceptGroup": "physostigmine-rescue",
    "difficulty": "Applied",
    "question": "A delirious patient after diphenhydramine ingestion has a QRS of 132 ms. Which priority fits the treatment boundary?",
    "choices": [
      "Give physostigmine immediately because the skin is dry",
      "Treat sodium-channel cardiotoxicity and obtain toxicology guidance; avoid physostigmine in this conduction pattern",
      "Use pupil size instead of the ECG",
      "Apply a rivastigmine patch as the sole emergency treatment"
    ],
    "answer": 1,
    "explanation": "QRS widening indicates a separate dangerous mechanism. Poison-center protocols exclude physostigmine in this pattern; sodium bicarbonate and other resuscitative measures follow the cardiotoxicity pathway.",
    "reviewHref": "#neurotoxic-syndromes"
  },
  {
    "id": "tox-physostigmine-2",
    "lesson": "neurotoxic-syndromes",
    "conceptGroup": "physostigmine-rescue",
    "difficulty": "Applied",
    "question": "A specialist orders physostigmine 0.5 mg using Anticholium 0.4 mg/mL. What volume is withdrawn before dilution?",
    "choices": [
      "0.125 mL",
      "0.5 mL",
      "1.25 mL",
      "5 mL"
    ],
    "answer": 2,
    "explanation": "0.5 mg divided by 0.4 mg/mL = 1.25 mL. Product verification and slow administration remain essential.",
    "reviewHref": "#neurotoxic-syndromes"
  },
  {
    "id": "tox-physostigmine-3",
    "lesson": "neurotoxic-syndromes",
    "conceptGroup": "physostigmine-rescue",
    "difficulty": "Applied",
    "question": "Delirium improves after physostigmine and then recurs. What is the best interpretation?",
    "choices": [
      "The initial response proves the patient can be discharged",
      "The antidote may wear off before the toxin; reassess and obtain guidance on further treatment",
      "Recurrence proves a new exposure occurred",
      "Give all remaining antidote rapidly"
    ],
    "answer": 1,
    "explanation": "The duration of the causative drug can exceed that of physostigmine. Reassess physiology and eligibility rather than equating a transient response with complete recovery.",
    "reviewHref": "#neurotoxic-syndromes"
  },
  {
    "id": "tox-physostigmine-4",
    "lesson": "neurotoxic-syndromes",
    "conceptGroup": "physostigmine-rescue",
    "difficulty": "Applied",
    "question": "Which statement best describes rivastigmine for antimuscarinic delirium?",
    "choices": [
      "It is a rapid IV-equivalent substitute in every poisoning",
      "It is a possible specialist-selected off-label alternative supported by limited observational evidence",
      "It is established treatment for sodium-channel blockade",
      "Oral capsules are appropriate even when swallowing is unsafe"
    ],
    "answer": 1,
    "explanation": "Utah describes a potential alternative during unavailability, with different onset and duration. Evidence and route limitations remain important.",
    "reviewHref": "#neurotoxic-syndromes"
  }
];

export const toxicologyAntidotesQuestionBank = [
  ...vkaDeliveryCases,
  ...protamineRescueCases,
  ...anticoagulantRescueCases,
  ...serotoninRescueCases,
  ...stimulantRescueCases,
  ...physostigmineCases,
  ...cholinergicRescueCases,
  ...cyanideRescueCases,
  ...toxicAlcoholCases,
  ...salicylateRescueCases,
  ...valproateCases,
  ...insulinRescueCases,
  ...sulfonylureaCases,
  ...methotrexateBoundaryCases,
  ...methotrexateRescueCases,
  ...uridineCases,
  ...isoniazidCases,
  ...nicotineCases,
  ...mothballCases,
  ...hydrocarbonCases,
  ...acetaminophenCases,
  ...additionalCases,
  ...leadCases,
  ...ironCases,
  ...metalTestingCases,
  ...radiationCases,
  ...aluminumCases,
  ...triageCases,
  ...decontaminationCases,
  ...charcoalDoseCases,
  ...stimulantPhCases,
  ...lastCases,
  ...cardiotoxicCases,
  ...fabCases,
  ...sodiumChannelCases,
  ...sedativeCases,
  ...opioidRescueCases,
  ...methemoglobinRescueCases,
{
  "id": "tox-lead-bal-peanut",
  "conceptGroup": "lead-bal-peanut",
  "lesson": "lead-poisoning-chelation",
  "difficulty": "Applied",
  "question": "A BAL in Oil order arrives for a patient with documented peanut allergy. What requires immediate clarification?",
  "choices": [
    "Only the needle length",
    "A labeled contraindication",
    "Only the vial temperature",
    "Nothing if the dose is weight-based"
  ],
  "answer": 1,
  "explanation": "The March 2026 label contraindicates peanut allergy. Resolve the treatment plan with toxicology before preparation.",
  "reviewHref": "#lead-poisoning-chelation"
}
,
{
  "id": "tox-lead-edta-daily-dose",
  "conceptGroup": "lead-edta-daily-dose",
  "lesson": "lead-poisoning-chelation",
  "difficulty": "Calculation",
  "question": "A specialist orders calcium disodium EDTA 1500 mg/m\u00b2/day in four equal doses for a child with BSA 0.80 m\u00b2. What is each dose?",
  "choices": [
    "1200 mg",
    "375 mg",
    "300 mg",
    "1500 mg"
  ],
  "answer": 2,
  "explanation": "1500 \u00d7 0.80 = 1200 mg per day; dividing by four gives 300 mg per dose. Preserve the daily-dose basis.",
  "reviewHref": "#lead-poisoning-chelation"
}
,
{
  "id": "tox-mercury-specimen",
  "conceptGroup": "mercury-specimen",
  "lesson": "arsenic-mercury-exposure",
  "difficulty": "Applied",
  "question": "A clinician suspects methylmercury exposure, but only urine total mercury was measured. What is the best next step?",
  "choices": [
    "Exclude exposure from the urine result",
    "Give a chelator challenge",
    "Treat urine and blood assays as interchangeable",
    "Select appropriate testing, such as whole-blood methylmercury, with the laboratory"
  ],
  "answer": 3,
  "explanation": "Urine total mercury is not a useful methylmercury exposure marker. The suspected chemical form guides assay selection.",
  "reviewHref": "#arsenic-mercury-exposure"
}
];

// Original ethanol cases, separated from the toxic-alcohol antidote pathway.
toxicologyAntidotesQuestionBank.push(...[
  {
    "id": "tox-ethanol-1",
    "question": "A malnourished patient has symptomatic hypoglycemia after alcohol use. Thiamine is temporarily unavailable. What should happen?",
    "choices": [
      "Give glucose now and thiamine promptly when available",
      "Delay glucose for an hour",
      "Replace glucose with a withdrawal score",
      "Wait until the ethanol level is undetectable"
    ],
    "answer": 0,
    "rationale": "Urgent glucose must not wait for thiamine; ASAM permits either order or concurrent administration.",
    "reviewHref": "#ethanol-thiamine",
    "difficulty": "clinical"
  },
  {
    "id": "tox-ethanol-2",
    "question": "A patient with poor intake and alcohol dependence has new confusion and abnormal eye movements. Which interpretation is safest?",
    "choices": [
      "Suspect Wernicke disease and initiate urgent hospital parenteral treatment",
      "A routine preventive dose establishes adequate treatment",
      "Ethanol intoxication excludes vitamin deficiency",
      "Wait for all classic findings before treatment"
    ],
    "answer": 0,
    "rationale": "Prevention and treatment are distinct. Neurologic findings in this context require urgent assessment and a treatment pathway.",
    "reviewHref": "#ethanol-thiamine",
    "difficulty": "clinical"
  },
  {
    "id": "tox-ethanol-3",
    "question": "A dependent drinker develops tremor after sharply reducing intake but still has a positive ethanol level. What does that level establish?",
    "choices": [
      "It neither confirms nor excludes withdrawal",
      "It rules out withdrawal",
      "It proves every symptom is intoxication",
      "It makes a withdrawal assessment unnecessary"
    ],
    "answer": 0,
    "rationale": "Withdrawal can occur during a major reduction in intake despite detectable ethanol; use the history and clinical findings.",
    "reviewHref": "#ethanol-thiamine",
    "difficulty": "clinical"
  },
  {
    "id": "tox-ethanol-4",
    "question": "A child is more alert after an ethanol ingestion but remains hypoglycemic. What best fits the RCH disposition criteria?",
    "choices": [
      "Continue treatment and monitoring rather than discharge",
      "Discharge because alertness alone is sufficient",
      "Use the falling ethanol level as the sole criterion",
      "Give thiamine as a substitute for correcting glucose"
    ],
    "answer": 0,
    "rationale": "Normal consciousness alone is insufficient; glucose, temperature and relevant investigations must also recover.",
    "reviewHref": "#ethanol-thiamine",
    "difficulty": "clinical"
  }
]);

// Original antipsychotic toxicity and movement-syndrome cases.
toxicologyAntidotesQuestionBank.push(...[
  {
    "id": "tox-antipsychotic-1",
    "question": "An adult develops sustained neck and jaw contractions after a dopamine-blocking medicine. Benztropine 2 mg IM is ordered from 1 mg/mL injection. What volume supplies the dose?",
    "choices": [
      "2 mL",
      "0.2 mL",
      "1 mL",
      "20 mL"
    ],
    "answer": 0,
    "rationale": "2 mg divided by 1 mg/mL is 2 mL. Airway and swallowing assessment remain essential.",
    "reviewHref": "#neurotoxic-syndromes",
    "difficulty": "clinical"
  },
  {
    "id": "tox-antipsychotic-2",
    "question": "A patient has chronic stereotyped mouth movements diagnosed as tardive dyskinesia. Why should benztropine not be added as routine rescue?",
    "choices": [
      "It can aggravate tardive dyskinesia",
      "It reverses every dopamine-blocker movement syndrome",
      "It is ineffective only when given intravenously",
      "A higher dose guarantees resolution"
    ],
    "answer": 0,
    "rationale": "Benztropine treats selected acute extrapyramidal reactions, not tardive dyskinesia.",
    "reviewHref": "#neurotoxic-syndromes",
    "difficulty": "clinical"
  },
  {
    "id": "tox-antipsychotic-3",
    "question": "After an antipsychotic ingestion, an ECG has isolated QT prolongation with a normal QRS. What interpretation avoids an incorrect treatment shortcut?",
    "choices": [
      "QT prolongation is not itself evidence of sodium-channel blockade requiring bicarbonate",
      "All ECG abnormalities require bicarbonate",
      "Normal QRS excludes all rhythm risk",
      "Benztropine normalizes QT in every overdose"
    ],
    "answer": 0,
    "rationale": "Repolarization and depolarization abnormalities are distinct; review rhythm, electrolytes and coexposures.",
    "reviewHref": "#neurotoxic-syndromes",
    "difficulty": "clinical"
  },
  {
    "id": "tox-antipsychotic-4",
    "question": "A 2-year-old is considered for the reviewed benztropine injection. Which label finding requires a different specialist-directed plan?",
    "choices": [
      "Use below age 3 is contraindicated",
      "The adult dose applies unchanged to all ages",
      "The product is oral only",
      "No pediatric precautions exist"
    ],
    "answer": 0,
    "rationale": "The reviewed injection label contraindicates use in children under 3 because of atropine-like adverse effects.",
    "reviewHref": "#neurotoxic-syndromes",
    "difficulty": "clinical"
  }
]);

// Original methylxanthine exposure and escalation cases.
toxicologyAntidotesQuestionBank.push(...[
  {
    "id": "tox-methylxanthine-1",
    "question": "A 68-year-old has chronic theophylline accumulation at 54 mg/L. Which EXTRIP criterion applies?",
    "choices": [
      "The age-specific chronic criterion suggests extracorporeal treatment",
      "The acute 100 mg/L threshold must always be reached",
      "Age excludes extracorporeal treatment",
      "A concentration below 60 mg/L always permits discharge"
    ],
    "answer": 0,
    "rationale": "Age above 60 with chronic concentration above 50 mg/L meets a suggested criterion; clinical severity still matters.",
    "reviewHref": "#methylxanthine-poisoning",
    "difficulty": "clinical"
  },
  {
    "id": "tox-methylxanthine-2",
    "question": "Acute theophylline poisoning causes shock at 80 mg/L. What should happen?",
    "choices": [
      "Escalate for extracorporeal treatment alongside resuscitation",
      "Wait for a second dose of theophylline",
      "Defer removal until 100 mg/L regardless of shock",
      "Use the chronic threshold to exclude removal"
    ],
    "answer": 0,
    "rationale": "Shock is an independent indication; the acute numerical criterion is not a prerequisite.",
    "reviewHref": "#methylxanthine-poisoning",
    "difficulty": "clinical"
  },
  {
    "id": "tox-methylxanthine-3",
    "question": "A patient develops a dangerous tachydysrhythmia after concentrated caffeine. What is the soundest approach?",
    "choices": [
      "Urgent toxicology-guided treatment based on severity",
      "Assume EXTRIP theophylline thresholds are validated caffeine criteria",
      "Treat a missing caffeine level as absence of toxicity",
      "Use a routine beverage intake limit as a discharge threshold"
    ],
    "answer": 0,
    "rationale": "Related agents do not automatically share a guideline threshold.",
    "reviewHref": "#methylxanthine-poisoning",
    "difficulty": "clinical"
  },
  {
    "id": "tox-methylxanthine-4",
    "question": "After theophylline removal is stopped, what remains necessary?",
    "choices": [
      "Monitor for recurrent toxicity and continued absorption",
      "Discharge automatically once the circuit stops",
      "Resume the prior dose before reassessment",
      "Stop all concentration monitoring regardless of formulation"
    ],
    "answer": 0,
    "rationale": "Clinical recovery must persist; modified-release absorption and rebound can complicate the course.",
    "reviewHref": "#methylxanthine-poisoning",
    "difficulty": "clinical"
  }
]);

// Original initial-response and exposure-reconstruction cases.
toxicologyAntidotesQuestionBank.push(...[
  {
    "id": "tox-initial-emergency",
    "question": "A family member finds an adult unresponsive after a possible ingestion. Which action has priority?",
    "choices": [
      "Call 911 immediately and follow emergency life-support instructions",
      "Finish identifying every pill before calling for emergency help",
      "Complete an online poison questionnaire before calling 911",
      "Wait for a poison-center callback before activating emergency services"
    ],
    "answer": 0,
    "explanation": "Inability to awaken is an emergency. Identifying the substance must not delay emergency activation.",
    "reviewHref": "#toxicology-stabilization",
    "lesson": "toxicology-stabilization",
    "difficulty": "Applied"
  },
  {
    "id": "tox-exposure-uncertainty",
    "question": "An open medicine bottle is found beside a toddler. No one knows its previous pill count. What should be reported?",
    "choices": [
      "The unknown swallowed amount as a confirmed zero",
      "The entire original bottle count as a confirmed ingestion",
      "The exact product and strength, with the swallowed amount explicitly unknown",
      "A guessed midpoint as the measured dose"
    ],
    "answer": 2,
    "explanation": "Separate observed facts from uncertainty. The container helps identify the product; its current contents do not establish how much was swallowed.",
    "reviewHref": "#toxicology-stabilization",
    "lesson": "toxicology-stabilization",
    "difficulty": "Applied"
  },
  {
    "id": "tox-exposure-strength",
    "question": "Six tablets are confirmed missing from a previously counted bottle. The label states 200 mg per tablet. What maximum amount do those six tablets represent, before determining whether all were swallowed?",
    "choices": [
      "200 mg",
      "1,200 mg",
      "1,200 mL",
      "33.3 mg"
    ],
    "answer": 1,
    "explanation": "6 tablets multiplied by 200 mg per tablet is 1,200 mg. This is a reconstructed possible amount, not proof of ingestion or a stand-alone treatment threshold.",
    "reviewHref": "#toxicology-stabilization",
    "lesson": "toxicology-stabilization",
    "difficulty": "Applied"
  },
  {
    "id": "tox-exposure-product",
    "question": "A caller reports taking a pain medicine but has not read its label. What information is most useful next?",
    "choices": [
      "Only the color of the box",
      "Only the pharmacy where it was bought",
      "Assume every product with that brand has the same ingredients",
      "Read the exact product, active ingredients, strength and formulation"
    ],
    "answer": 3,
    "explanation": "Similar product names can represent different ingredients or strengths. Product details, timing, amount and symptoms guide assessment.",
    "reviewHref": "#toxicology-stabilization",
    "lesson": "toxicology-stabilization",
    "difficulty": "Applied"
  }
]);

// Original safety-disposition and route-specific first-aid cases.
toxicologyAntidotesQuestionBank.push(...[
  {
    "id": "tox-safety-current",
    "question": "After medical stabilization of an intentional overdose, an adult reports current suicidal thoughts. What is required?",
    "choices": [
      "Leave the patient alone until routine clinic follow-up",
      "Urgent mental health evaluation while maintaining safety and supervision",
      "Discharge because the toxicology laboratory results normalized",
      "Rely on a promise to avoid another overdose"
    ],
    "answer": 1,
    "explanation": "Current suicidal thoughts require urgent evaluation; medical improvement does not resolve this safety need.",
    "reviewHref": "#toxicology-stabilization",
    "lesson": "toxicology-stabilization",
    "difficulty": "Applied"
  },
  {
    "id": "tox-safety-denial",
    "question": "During an adult ED safety assessment, the patient says they do not need help staying safe. What does that answer establish?",
    "choices": [
      "There is no need to assess access to medicines",
      "Discharge is mandatory",
      "That response alone does not establish safety",
      "A safety plan is unnecessary"
    ],
    "answer": 2,
    "explanation": "NIMH cautions that a negative response to this question does not show the patient is safe. Complete the assessment.",
    "reviewHref": "#toxicology-stabilization",
    "lesson": "toxicology-stabilization",
    "difficulty": "Applied"
  },
  {
    "id": "tox-safety-discharge",
    "question": "A qualified assessment supports discharge after an intentional ingestion. Which measure belongs in the plan?",
    "choices": [
      "A safety plan and a practical arrangement to secure dangerous medicines",
      "Returning all medicines without discussing access",
      "Follow-up only if another overdose occurs",
      "Replacing the assessment with normal laboratory results"
    ],
    "answer": 0,
    "explanation": "NIMH includes safety planning and restricting access to dangerous items when discharge is appropriate.",
    "reviewHref": "#toxicology-stabilization",
    "lesson": "toxicology-stabilization",
    "difficulty": "Applied"
  },
  {
    "id": "tox-firstaid-eye",
    "question": "An ordinary household chemical splashes into an eye. What should begin immediately?",
    "choices": [
      "Searching for a neutralizing chemical",
      "Covering the eye without rinsing",
      "Waiting for persistent symptoms",
      "Rinsing with room-temperature water for at least 15 to 20 minutes"
    ],
    "answer": 3,
    "explanation": "Prompt irrigation limits contact time; remove contact lenses and obtain further guidance. Severe symptoms need urgent evaluation.",
    "reviewHref": "#decontamination-elimination",
    "lesson": "decontamination-elimination",
    "difficulty": "Applied"
  },
  {
    "id": "tox-firstaid-emesis",
    "question": "A caller asks whether to induce vomiting after swallowing a household product. What is appropriate?",
    "choices": [
      "Induce vomiting before identifying the product",
      "Do not induce vomiting; obtain poison-specific guidance",
      "Use ipecac whenever the ingestion was recent",
      "Use salt water as a substitute for ipecac"
    ],
    "answer": 1,
    "explanation": "Induced vomiting is not recommended and can create additional injury.",
    "reviewHref": "#decontamination-elimination",
    "lesson": "decontamination-elimination",
    "difficulty": "Applied"
  },
  {
    "id": "tox-firstaid-rescuer",
    "question": "A person becomes ill in a room containing toxic fumes. What principle protects both people?",
    "choices": [
      "Enter immediately regardless of exposure",
      "Cover the face with clothing and assume protection",
      "Avoid hazardous entry; obtain emergency assistance and fresh air when safely possible",
      "Stay in the contaminated room while calling"
    ],
    "answer": 2,
    "explanation": "Rescue must not expose another person to toxic gases.",
    "reviewHref": "#decontamination-elimination",
    "lesson": "decontamination-elimination",
    "difficulty": "Applied"
  }
]);

// Original battery-mitigation and toxin-specific elimination cases.
toxicologyAntidotesQuestionBank.push(...[
  {
    "id": "tox-battery-infant",
    "question": "A 9-month-old may have swallowed a coin-cell battery. What is appropriate?",
    "choices": [
      "Give honey before transport",
      "Withhold honey and arrange urgent emergency evaluation",
      "Wait for pain before imaging",
      "Induce vomiting"
    ],
    "answer": 1,
    "explanation": "Honey is not appropriate below 12 months; evaluation must not be delayed.",
    "reviewHref": "#decontamination-elimination",
    "lesson": "decontamination-elimination",
    "difficulty": "Applied"
  },
  {
    "id": "tox-battery-delay",
    "question": "A child can swallow after a recent possible lithium coin-cell ingestion, but no honey is available. What next?",
    "choices": [
      "Go immediately for emergency evaluation",
      "Search shops before going to the emergency department",
      "Wait at home for six honey doses",
      "Use honey only after symptoms develop"
    ],
    "answer": 0,
    "explanation": "Honey is optional mitigation when immediately available, not a prerequisite for emergency care.",
    "reviewHref": "#decontamination-elimination",
    "lesson": "decontamination-elimination",
    "difficulty": "Applied"
  },
  {
    "id": "tox-battery-removal",
    "question": "An esophageal battery is identified after a child received honey. What follows?",
    "choices": [
      "Postpone removal for routine fasting",
      "Observe until the battery passes",
      "Treat honey as definitive therapy",
      "Proceed with urgent removal"
    ],
    "answer": 3,
    "explanation": "Recent honey does not justify delaying removal.",
    "reviewHref": "#decontamination-elimination",
    "lesson": "decontamination-elimination",
    "difficulty": "Applied"
  },
  {
    "id": "tox-elimination-salicylate",
    "question": "Salicylate poisoning causes new confusion despite bicarbonate therapy. Which action is supported?",
    "choices": [
      "Wait until every concentration threshold is met",
      "Continue observation without escalation",
      "Arrange urgent extracorporeal treatment assessment with ongoing resuscitation",
      "Stop treatment because bicarbonate has already been tried"
    ],
    "answer": 2,
    "explanation": "Altered mental status and failure of standard therapy are independent EXTRIP indications; intermittent hemodialysis is preferred.",
    "reviewHref": "#decontamination-elimination",
    "lesson": "decontamination-elimination",
    "difficulty": "Applied"
  },
  {
    "id": "tox-elimination-digoxin",
    "question": "A learner proposes dialysis solely to remove digoxin-Fab complexes. How should this be assessed?",
    "choices": [
      "EXTRIP does not recommend extracorporeal removal for this purpose",
      "Every measurable drug-antibody complex requires dialysis",
      "Dialysis routinely replaces Fab",
      "The post-Fab total concentration alone mandates dialysis"
    ],
    "answer": 0,
    "explanation": "EXTRIP advises against extracorporeal removal of digoxin or digoxin-Fab complexes. Separate renal-support indications must be assessed on their own merits.",
    "reviewHref": "#decontamination-elimination",
    "lesson": "decontamination-elimination",
    "difficulty": "Applied"
  }
]);

// Original diagnostic-limit cases.
toxicologyAntidotesQuestionBank.push(...[
  {
    "id": "tox-test-negative",
    "question": "Suspected fentanyl poisoning causes slow breathing, but a routine opiate immunoassay is negative. What follows?",
    "choices": [
      "Exclude opioid poisoning",
      "Support breathing and treat clinically; check assay coverage",
      "Wait for confirmatory testing before supporting ventilation",
      "Assume the result proves malingering"
    ],
    "answer": 1,
    "explanation": "A routine opiate assay may not detect fentanyl.",
    "reviewHref": "#toxidromes-diagnostics",
    "lesson": "toxidromes-diagnostics",
    "difficulty": "Applied"
  },
  {
    "id": "tox-test-positive",
    "question": "An opioid urine test is positive. What cannot be established from that result alone?",
    "choices": [
      "Presence within assay limitations",
      "Need to interpret the assay",
      "Current clinical impairment",
      "That further clinical assessment matters"
    ],
    "answer": 2,
    "explanation": "Urine positivity does not establish impairment, dose or exact exposure timing.",
    "reviewHref": "#toxidromes-diagnostics",
    "lesson": "toxidromes-diagnostics",
    "difficulty": "Applied"
  },
  {
    "id": "tox-test-delay",
    "question": "A patient has suspected opioid respiratory depression while urine testing is pending. What has priority?",
    "choices": [
      "Ventilatory support and indicated reversal",
      "Waiting for the laboratory",
      "Selecting treatment from the urine concentration",
      "Delaying care until a specific opioid is named"
    ],
    "answer": 0,
    "explanation": "Acute management follows clinical findings, not a pending urine result.",
    "reviewHref": "#toxidromes-diagnostics",
    "lesson": "toxidromes-diagnostics",
    "difficulty": "Applied"
  },
  {
    "id": "tox-gap-normal",
    "question": "A compatible exposure history raises concern for ethylene glycol, but the osmolal gap is normal. What is the sound interpretation?",
    "choices": [
      "Poisoning is excluded",
      "No further assessment is needed",
      "Repeat the gap only if symptoms resolve",
      "The gap alone cannot exclude exposure; continue targeted evaluation"
    ],
    "answer": 3,
    "explanation": "The osmolal gap has important limitations and must be interpreted with timing and other findings.",
    "reviewHref": "#toxidromes-diagnostics",
    "lesson": "toxidromes-diagnostics",
    "difficulty": "Applied"
  },
  {
    "id": "tox-crystals-absent",
    "question": "No calcium oxalate crystals are found in urine after suspected ethylene glycol ingestion. What does this mean?",
    "choices": [
      "Kidney injury is impossible",
      "Their absence does not rule out poisoning",
      "No ethylene glycol testing can be useful",
      "The exposure must have been methanol"
    ],
    "answer": 1,
    "explanation": "Crystals are supportive when present but are not a required diagnostic finding.",
    "reviewHref": "#toxidromes-diagnostics",
    "lesson": "toxidromes-diagnostics",
    "difficulty": "Applied"
  }
]);

// Original toxidrome and ECG reasoning cases.
toxicologyAntidotesQuestionBank.push(...[
  {
    "id": "tox-pattern-dry",
    "question": "An adolescent has delirium, dilated pupils, dry skin and urinary retention after an unknown medicine exposure. What is the best interpretation?",
    "choices": [
      "These findings prove one specific antihistamine was taken",
      "An antimuscarinic pattern is plausible, but exposure details and competing causes still need assessment",
      "The pattern excludes cardiac toxicity",
      "Urinary retention excludes a drug effect"
    ],
    "answer": 1,
    "explanation": "The cluster supports an antimuscarinic syndrome. Many agents and mixed ingestions can produce or alter it.",
    "reviewHref": "#toxidromes-diagnostics",
    "lesson": "toxidromes-diagnostics",
    "difficulty": "Applied"
  },
  {
    "id": "tox-pattern-mixed",
    "question": "A suspected antimuscarinic ingestion is accompanied by QRS widening and hypotension. Which reasoning is safest?",
    "choices": [
      "Attribute everything to muscarinic receptors and omit ECG-directed care",
      "A dry mouth rules out severe poisoning",
      "Assess additional drug effects on cardiac ion channels and treat the threatened physiology",
      "Wait for the delirium to resolve before evaluating circulation"
    ],
    "answer": 2,
    "explanation": "Drugs with antimuscarinic effects may also affect cardiac channels. The syndrome label does not explain away conduction toxicity.",
    "reviewHref": "#toxidromes-diagnostics",
    "lesson": "toxidromes-diagnostics",
    "difficulty": "Applied"
  },
  {
    "id": "tox-ecg-tca-rescue",
    "question": "An adult with tricyclic antidepressant poisoning develops hypotension and marked QRS widening. Which treatment addresses the life-threatening cardiotoxicity?",
    "choices": [
      "Sodium bicarbonate with resuscitative support and monitoring",
      "Flumazenil as routine reversal",
      "Benztropine to normalize the QRS",
      "Observation until the antidepressant level returns"
    ],
    "answer": 0,
    "explanation": "AHA recommends sodium bicarbonate for life-threatening adult tricyclic cardiotoxicity; monitor hemodynamics, ECG and biochemical response.",
    "reviewHref": "#toxidromes-diagnostics",
    "lesson": "toxidromes-diagnostics",
    "difficulty": "Applied"
  },
  {
    "id": "tox-ecg-serial",
    "question": "The initial ECG after a suspected sodium-channel-blocker ingestion is reassuring, but hypotension then develops. What follows?",
    "choices": [
      "Use the first ECG as permanent clearance",
      "Wait for a dysrhythmia before repeating the ECG",
      "Treat the blood pressure reading as unrelated to exposure",
      "Repeat ECG and reassess perfusion and treatment needs"
    ],
    "answer": 3,
    "explanation": "Poisoning evolves; conduction changes and clinical deterioration require reassessment rather than reliance on an earlier tracing.",
    "reviewHref": "#toxidromes-diagnostics",
    "lesson": "toxidromes-diagnostics",
    "difficulty": "Applied"
  }
]);

// Original sedative-support cases.
toxicologyAntidotesQuestionBank.push(...[
  {
    "id": "tox-sedative-coma",
    "question": "An adolescent has deep coma and respiratory depression after an apparently isolated benzodiazepine ingestion. What should guide care?",
    "choices": [
      "Assume the reported single agent fully explains the presentation",
      "Support airway and ventilation while investigating coingestants and other causes",
      "Wait for a benzodiazepine concentration before helping breathing",
      "Use routine flumazenil without checking exposure risks"
    ],
    "answer": 1,
    "explanation": "Profound depression warrants supportive care and investigation beyond the reported exposure; mixed poisoning can change treatment.",
    "reviewHref": "#opioids-sedatives",
    "lesson": "opioids-sedatives",
    "difficulty": "Applied"
  },
  {
    "id": "tox-sedative-level",
    "question": "A serum benzodiazepine result is available while a patient remains poorly responsive. How should it be used?",
    "choices": [
      "Use the concentration alone to determine discharge",
      "Ignore breathing if the result is falling",
      "Base support and disposition on clinical findings rather than the concentration alone",
      "Assume a measured level identifies every coingestant"
    ],
    "answer": 2,
    "explanation": "Benzodiazepine concentrations correlate poorly with clinical severity. Assess consciousness, airway, breathing and the full exposure.",
    "reviewHref": "#opioids-sedatives",
    "lesson": "opioids-sedatives",
    "difficulty": "Applied"
  },
  {
    "id": "tox-sedative-pediatric-persistence",
    "question": "A child remains intoxicated more than four hours after benzodiazepine ingestion. Under the cited RCH pediatric pathway, what follows?",
    "choices": [
      "Admission and continued assessment",
      "Automatic discharge because four hours elapsed",
      "Discharge if the family promises observation",
      "Routine charcoal before discharge"
    ],
    "answer": 0,
    "explanation": "The RCH pathway calls for admission with persistent intoxication. Its observation interval is not universal clearance for mixed or symptomatic poisoning.",
    "reviewHref": "#opioids-sedatives",
    "lesson": "opioids-sedatives",
    "difficulty": "Applied"
  }
]);

// Original snakebite and rabies-boundary cases.
toxicologyAntidotesQuestionBank.push(...[
  {
    "id": "tox-snake-no-delay",
    "question": "A hiker has a suspected venomous snakebite but little initial swelling. What should the companion do?",
    "choices": [
      "Wait for obvious swelling",
      "Arrange emergency care without waiting for symptoms",
      "Apply ice before deciding whether care is needed",
      "Catch the snake before leaving"
    ],
    "answer": 1,
    "explanation": "Early mild findings do not justify delaying medical evaluation. A photograph is useful only if safely obtained without delaying care.",
    "reviewHref": "#preparedness-envenomation",
    "lesson": "preparedness-envenomation",
    "difficulty": "Applied"
  },
  {
    "id": "tox-snake-firstaid-safe",
    "question": "Which first-aid plan best fits a suspected North American pit viper bite?",
    "choices": [
      "Cut and suction the wound",
      "Apply a tight tourniquet and ice",
      "Remove constricting items and arrange prompt transport",
      "Use alcohol for pain and walk to help"
    ],
    "answer": 2,
    "explanation": "Remove rings or watches before swelling and avoid interventions that add injury.",
    "reviewHref": "#preparedness-envenomation",
    "lesson": "preparedness-envenomation",
    "difficulty": "Applied"
  },
  {
    "id": "tox-snake-progression",
    "question": "Swelling and systemic toxicity progress after a rattlesnake bite. Which plan is appropriate?",
    "choices": [
      "Specialist-guided antivenom assessment with supportive care and reassessment",
      "Wait for symptoms to disappear before contacting poison control",
      "Choose any antivenom regardless of its indication",
      "Use a venom-extraction device as definitive treatment"
    ],
    "answer": 0,
    "explanation": "Progressive envenomation warrants antivenom assessment; product selection and monitoring remain exposure specific.",
    "reviewHref": "#preparedness-envenomation",
    "lesson": "preparedness-envenomation",
    "difficulty": "Applied"
  },
  {
    "id": "tox-rabies-qualified",
    "question": "Public health determines that an unvaccinated adult has a qualifying rabies exposure. What belongs in PEP?",
    "choices": [
      "Vaccine alone in every patient",
      "Antibiotics instead of rabies biologics",
      "Delay until neurologic symptoms occur",
      "Wound care, vaccine and HRIG according to the applicable regimen"
    ],
    "answer": 3,
    "explanation": "PEP prevents disease after an exposure; wound care, passive antibody and vaccination have distinct roles.",
    "reviewHref": "#preparedness-envenomation",
    "lesson": "preparedness-envenomation",
    "difficulty": "Applied"
  },
  {
    "id": "tox-rabies-prior-vaccine",
    "question": "An immunocompetent adult with documented prior complete rabies vaccination has a new exposure requiring PEP. What does CDC recommend?",
    "choices": [
      "HRIG alone",
      "Wound care and vaccine on days 0 and 3, without HRIG",
      "Repeat HRIG with each vaccine dose",
      "No care because prior vaccination guarantees protection"
    ],
    "answer": 1,
    "explanation": "Previously vaccinated patients receive the abbreviated vaccine regimen and no HRIG; confirm the prior vaccination history with public health.",
    "reviewHref": "#preparedness-envenomation",
    "lesson": "preparedness-envenomation",
    "difficulty": "Applied"
  }
]);

// Original antidote-readiness and disaster-continuity cases.
toxicologyAntidotesQuestionBank.push(...[
  {
    "id": "tox-readiness-local",
    "question": "A hospital copies another institution's antidote quantities without reviewing its own needs. What should happen next?",
    "choices": [
      "Keep identical quantities regardless of local exposures",
      "Review local stocking requirements with the poison center",
      "Replace the stock with a list of drug names",
      "Assume one patient's supply always covers a regional event"
    ],
    "answer": 1,
    "explanation": "Antidote needs vary by institution. Local assessment and poison-center input are needed.",
    "reviewHref": "#preparedness-envenomation",
    "lesson": "preparedness-envenomation",
    "difficulty": "Applied"
  },
  {
    "id": "tox-readiness-delivery",
    "question": "During a drill, the team locates an antidote but cannot find its preparation instructions or required supplies. What is the useful corrective action?",
    "choices": [
      "Count the drill as successful because a vial exists",
      "Remove the antidote from the emergency plan",
      "Make preparation instructions and supplies accessible and retest delivery",
      "Wait until a real exposure to identify the missing steps"
    ],
    "answer": 2,
    "explanation": "Readiness must demonstrate that the medicine can be delivered, not merely that it is listed.",
    "reviewHref": "#preparedness-envenomation",
    "lesson": "preparedness-envenomation",
    "difficulty": "Applied"
  },
  {
    "id": "tox-disaster-temperature",
    "question": "A power outage interrupts storage of a refrigerated medicine. Which approach is appropriate?",
    "choices": [
      "Check product storage guidance and seek pharmacist or manufacturer advice while arranging continuity",
      "Apply one room-temperature limit to every medicine",
      "Double the dose to compensate for uncertain potency",
      "Freeze every medicine to restore potency"
    ],
    "answer": 0,
    "explanation": "Storage stability is product specific. Plan replacement and avoid unsafe treatment interruption.",
    "reviewHref": "#preparedness-envenomation",
    "lesson": "preparedness-envenomation",
    "difficulty": "Applied"
  },
  {
    "id": "tox-disaster-records",
    "question": "Which emergency medication record best supports care when the usual pharmacy is inaccessible?",
    "choices": [
      "Only tablet colors",
      "Only the pharmacy telephone number",
      "Only medicine brand names",
      "Names, strengths, doses and timing, with conditions, allergies and prescription copies"
    ],
    "answer": 3,
    "explanation": "A current medication record supports continuity and reduces errors during disrupted access.",
    "reviewHref": "#preparedness-envenomation",
    "lesson": "preparedness-envenomation",
    "difficulty": "Applied"
  }
]);

// Infusion-duration interpretation: Ramsey et al. 2018 consensus.
toxicologyAntidotesQuestionBank.push({
  id: "tox-mtx-infusion-clock",
  question: "Methotrexate starts Monday at 08:00 and finishes Tuesday at 08:00. When is the consensus 36-hour sample due?",
  choices: ["Tuesday at 08:00", "Tuesday at 20:00", "Wednesday at 20:00", "Thursday at 08:00"],
  answer: 1,
  explanation: "Count from infusion start: Monday 08:00 plus 36 hours is Tuesday 20:00.",
  reviewHref: "#metabolic-cytotoxic-antidotes",
  lesson: "metabolic-cytotoxic-antidotes",
  difficulty: "Applied"
});

toxicologyAntidotesQuestionBank.push({
  id: "tox-folinic-route",
  question: "An order proposes intrathecal leucovorin after an intrathecal methotrexate error. What should the pharmacist do?",
  choices: ["Use half the dose intrathecally", "Substitute intrathecal levoleucovorin", "Stop the unsafe route and urgently coordinate specialist rescue", "Approve if diluted"],
  answer: 2,
  explanation: "Neither leucovorin nor levoleucovorin should be administered intrathecally.",
  reviewHref: "#metabolic-cytotoxic-antidotes", lesson: "metabolic-cytotoxic-antidotes", difficulty: "Applied"
}, {
  id: "tox-folinic-product",
  question: "An oncology protocol explicitly substitutes levoleucovorin at half the racemic leucovorin dose. What corresponds to a prescribed 150-mg racemic dose?",
  choices: ["75 mg", "150 mg", "300 mg", "7.5 mg"],
  answer: 0,
  explanation: "150 divided by 2 is 75 mg. Verify product, route and the complete protocol before preparation.",
  reviewHref: "#metabolic-cytotoxic-antidotes", lesson: "metabolic-cytotoxic-antidotes", difficulty: "Applied"
});

toxicologyAntidotesQuestionBank.push({
  id: "tox-fab-plant-boundary",
  question: "A patient develops life-threatening cardiotoxicity after yellow oleander ingestion. Which approach fits AHA guidance?",
  choices: ["Fab cannot act on plant toxins", "Dialysis replaces antidote treatment", "Every plant toxin uses the same fixed vial count", "Consider digoxin-Fab with toxin-specific expert dosing"],
  answer: 3,
  explanation: "Fab is reasonable for this exposure, but the dose cannot simply be assumed from a digoxin regimen.",
  reviewHref: "#digoxin-fab-rescue", lesson: "digoxin-fab-rescue", difficulty: "Applied"
});

toxicologyAntidotesQuestionBank.push({
  id: "tox-lipid-ecmo-handoff",
  question: "A patient with refractory poisoning-related cardiogenic shock received lipid emulsion before transfer for possible VA-ECMO. What belongs in the handoff?",
  choices: ["Omit lipid because it cannot affect the circuit", "Report formulation, dose and timing so the team can anticipate circuit complications", "State that ECMO is now absolutely contraindicated", "Recommend lipid for every future oral overdose"],
  answer: 1,
  explanation: "Lipid-associated circuit complications have been reported, but successful concurrent treatment also occurs. Coordinate the rescue plan.",
  reviewHref: "#local-anesthetic-lipid-rescue", lesson: "local-anesthetic-lipid-rescue", difficulty: "Applied"
});

toxicologyAntidotesQuestionBank.push({
  id: "tox-theophylline-charcoal-units",
  question: "A charcoal recommendation uses a theophylline threshold of 50 mg/kg. Which quantity is being described?",
  choices: ["Serum concentration", "Ingested amount per body weight", "Dialysis clearance", "Charcoal suspension concentration"],
  answer: 1,
  explanation: "mg/kg describes the exposure dose; serum theophylline is commonly reported in mg/L.",
  reviewHref: "#methylxanthine-poisoning", lesson: "methylxanthine-poisoning", difficulty: "Applied"
});

toxicologyAntidotesQuestionBank.push({
  id: "tox-charcoal-tricyclic-repeat",
  question: "A trainee proposes routine multiple-dose charcoal for amitriptyline because it is used in selected dapsone poisonings. What is the key correction?",
  choices: ["Every adsorbed drug uses the same repeat schedule", "Multiple-dose charcoal is mandatory after any tricyclic exposure", "The 2026 consensus discourages multiple-dose enhanced elimination for tricyclics", "Charcoal replaces bicarbonate"],
  answer: 2,
  explanation: "Repeat-dose recommendations are poison specific; distinguish additional gastrointestinal decontamination from enhanced elimination.",
  reviewHref: "#cardiotoxic-poisoning", lesson: "cardiotoxic-poisoning", difficulty: "Applied"
});

toxicologyAntidotesQuestionBank.push({
  id: "tox-serotonin-adult-protocol",
  question: "A toxicologist selects the Utah December 2023 adult cyproheptadine protocol. Which oral dose matches that named pathway?",
  choices: ["2 mg solely because the patient is older than 7", "8 mg, repeatable three times daily", "A mandatory 32-mg initial bolus", "The combined loading doses from every published regimen"],
  answer: 1,
  explanation: "The named protocol lists 8 mg orally, repeatable three times daily. This uncertain-benefit adjunct does not replace supportive treatment.",
  reviewHref: "#serotonin-toxicity", lesson: "serotonin-toxicity", difficulty: "Applied"
});
toxicologyAntidotesQuestionBank.push({
  id: "tox-carbamazepine-charcoal-purpose",
  question: "A patient with a protected airway and adequate bowel function has an estimated immediate-release carbamazepine ingestion of 45 mg/kg. Which statement accurately describes the 2026 charcoal consensus?",
  choices: ["The additional-dose recommendation above 50 mg/kg and the multiple-dose suggestion above 40 mg/kg address different treatment purposes", "Every second charcoal dose has the same purpose", "45 mg/kg is a measured serum concentration", "The ingestion estimate proves that charcoal is safe regardless of the clinical course"],
  answer: 0,
  explanation: "Additional dosing addresses ongoing gastrointestinal absorption, whereas multiple-dose therapy enhances elimination of absorbed drug. The thresholds differ, and the whole patient still requires individualized assessment.",
  reviewHref: "#decontamination-elimination", lesson: "decontamination-elimination", difficulty: "Applied"
});

toxicologyAntidotesQuestionBank.push(...[
  {
    "id": "tox-apap-repeat-test",
    "question": "Five hours after a reliable acute ingestion of a US eight-hour extended-release acetaminophen product, the level is 40 micrograms/mL and below the treatment line. What follow-up fits the consensus pathway?",
    "choices": [
      "Discharge based solely on this result",
      "Repeat the level in 4 to 6 hours",
      "Use 150 micrograms/mL as the cutoff at every later time",
      "Wait until jaundice develops"
    ],
    "answer": 1,
    "explanation": "This concentration exceeds 10 micrograms/mL within the specified sampling window; delayed absorption requires another measurement.",
    "reviewHref": "#acetaminophen-poisoning",
    "lesson": "acetaminophen-poisoning",
    "difficulty": "Applied"
  },
  {
    "id": "tox-apap-repeated-treatment",
    "question": "After three days of excess acetaminophen, a patient has a concentration of 25 micrograms/mL with normal AST and ALT. Which action follows the repeated-ingestion pathway?",
    "choices": [
      "Plot from the last tablet",
      "Wait for both enzymes to rise",
      "Start acetylcysteine with clinical reassessment",
      "Exclude toxicity because the level is below 150"
    ],
    "answer": 2,
    "explanation": "For repeated supratherapeutic exposure, a concentration above 20 micrograms/mL independently supports treatment.",
    "reviewHref": "#acetaminophen-poisoning",
    "lesson": "acetaminophen-poisoning",
    "difficulty": "Applied"
  }
]);

toxicologyAntidotesQuestionBank.push({
  id: "tox-beta-blocker-dialysis-selection",
  question: "A patient with severe sotalol poisoning and kidney impairment has recurrent torsades despite initial treatment. Which statement best fits EXTRIP guidance?",
  choices: ["All beta blockers require the same dialysis plan", "A prolonged QT alone always mandates dialysis", "Extracorporeal removal is suggested in this clinical setting, with intermittent hemodialysis preferred when available", "Propranolol and sotalol have identical removal recommendations"],
  answer: 2,
  explanation: "Sotalol poisoning with kidney impairment and recurrent torsades meets a suggested indication. Decisions depend on the drug and clinical course, not QT prolongation alone.",
  reviewHref: "#cardiotoxic-poisoning", lesson: "cardiotoxic-poisoning", difficulty: "Applied"
});


toxicologyAntidotesQuestionBank.push({
  id: "tox-caffeine-delayed-assay",
  question: "After a concentrated caffeine ingestion, a patient has circulatory collapse and ventricular arrhythmia. A caffeine concentration will not be available promptly. What is the best response?",
  choices: ["Wait until a level exceeds theophylline's 100 mg/L threshold", "Continue resuscitation and urgently coordinate toxicology and nephrology assessment for extracorporeal removal", "Exclude caffeine toxicity because the assay is unavailable", "Treat the 140 mg/L caffeine criterion as mandatory before any escalation"],
  answer: 1,
  explanation: "Severe clinical findings independently prompt escalation in the attributed caffeine criteria. Neither an unavailable assay nor a threshold from a different poison should delay care; evidence for outcome benefit remains limited.",
  reviewHref: "#methylxanthine-poisoning", lesson: "methylxanthine-poisoning", difficulty: "Applied"
});


toxicologyAntidotesQuestionBank.push({
  id: "tox-valproate-hypothermia",
  question: "A patient taking valproate without topiramate develops confusion and a core temperature of 34°C. Ammonia is normal. Which interpretation is correct?",
  choices: ["The normal ammonia excludes a medication reaction", "Topiramate must be present for valproate-associated hypothermia", "Valproate-associated hypothermia remains possible; provide urgent assessment and supportive care with review of stopping the drug", "A routine dose increase is indicated"],
  answer: 2,
  explanation: "Valproate labeling describes hypothermia with or without hyperammonemia. Topiramate coadministration is an additional setting, not a prerequisite.",
  reviewHref: "#valproate-poisoning", lesson: "valproate-poisoning", difficulty: "Applied"
});


toxicologyAntidotesQuestionBank.push({
  id: "tox-volatile-refractory-arrhythmia",
  question: "After volatile hydrocarbon inhalation, ventricular arrhythmias persist despite standard resuscitation. Which statement reflects AHA 2025 guidance?",
  choices: ["Beta-adrenergic antagonists may be considered with expert support for refractory ventricular arrhythmias", "Every asymptomatic fuel exposure requires beta blockade", "Beta blockade replaces defibrillation", "Normal chest imaging excludes cardiac toxicity"],
  answer: 0,
  explanation: "AHA gives a weak, expert-opinion recommendation for this refractory arrhythmia setting. Standard resuscitation, oxygenation and correction of contributory abnormalities remain necessary.",
  reviewHref: "#hydrocarbon-exposure", lesson: "hydrocarbon-exposure", difficulty: "Applied"
});


toxicologyAntidotesQuestionBank.push({
  id: "tox-lead-who-label-boundary",
  question: "A toxicologist considers calcium disodium EDTA plus succimer for severe lead poisoning in a nonpregnant patient under WHO guidance. How should pharmacy assess the plan?",
  choices: ["Treat it as a routine US-labeled Chemet regimen", "Assume the combination is proven superior to every alternative", "Confirm the explicit off-label specialist plan, airway protection and enteral absorption", "Give oral succimer regardless of airway status"],
  answer: 2,
  explanation: "WHO permits this option on limited evidence, while US Chemet labeling excludes encephalopathy and does not recommend concurrent chelation. The difference and oral-route safeguards require explicit reconciliation.",
  reviewHref: "#lead-poisoning-chelation", lesson: "lead-poisoning-chelation", difficulty: "Applied"
});


toxicologyAntidotesQuestionBank.push({
  id: "tox-mercury-form-treatment",
  question: "A patient with suspected methylmercury toxicity has an order copied from BAL's acute mercury-ingestion schedule. What requires correction?",
  choices: ["All mercury forms share the same treatment", "BAL dosing is determined only by the blood mercury number", "Mercury form does not affect neurological risk", "The regimen cannot be generalized to organic mercury; obtain toxicology-directed treatment selection"],
  answer: 3,
  explanation: "BAL's acute-ingestion labeling is not a universal mercury protocol. Organic-mercury guidance warns against BAL because of redistribution concerns; specialist selection also distinguishes increased elimination from established clinical benefit.",
  reviewHref: "#arsenic-mercury-exposure", lesson: "arsenic-mercury-exposure", difficulty: "Applied"
});


toxicologyAntidotesQuestionBank.push({
  id: "tox-caffeine-potassium-shift",
  question: "Why should potassium replacement during severe caffeine poisoning be reassessed frequently?",
  choices: ["Reversal of an intracellular shift can cause rebound hyperkalemia", "Every low potassium result proves an equal total-body deficit", "ECG monitoring becomes unnecessary after replacement starts", "Caffeine prevents hyperkalemia"],
  answer: 0,
  explanation: "The low concentration may reflect redistribution. Serial potassium and ECG assessment guide cautious replacement as toxicity resolves.",
  reviewHref: "#methylxanthine-poisoning", lesson: "methylxanthine-poisoning", difficulty: "Applied"
});


toxicologyAntidotesQuestionBank.push({
  id: "tox-apap-unknown-clock",
  question: "Acetaminophen ingestion timing is unreliable. The concentration is 18 micrograms/mL and AST/ALT are normal. What follows under the US/Canada consensus?",
  choices: ["Invent a four-hour time", "Withhold treatment because the level is below 150", "Start acetylcysteine using the unknown-time pathway", "Use the repeated-ingestion threshold instead"],
  answer: 2,
  explanation: "The unknown-time pathway uses a concentration above 10 micrograms/mL or aminotransferase abnormality beyond baseline; it does not require both.",
  reviewHref: "#acetaminophen-poisoning", lesson: "acetaminophen-poisoning", difficulty: "Applied"
}, {
  id: "tox-apap-dialysis-nac-rate",
  question: "During hemodialysis for severe acetaminophen poisoning, a 60-kg adult is prescribed IV acetylcysteine at 12.5 mg/kg/hour. What drug rate implements that order?",
  choices: ["75 mg/hour", "375 mg/hour", "750 mg/hour", "750 mL/hour regardless of concentration"],
  answer: 2,
  explanation: "60 times 12.5 equals 750 mg/hour. Convert to a pump volume only after verifying the final admixture concentration.",
  reviewHref: "#acetaminophen-poisoning", lesson: "acetaminophen-poisoning", difficulty: "Applied"
});


toxicologyAntidotesQuestionBank.push({
  "id": "tox-packaging-request-scope",
  "question": "A patient previously requested an easy-open container for one prescription. What should pharmacy infer for a different prescription?",
  "choices": [
    "All later prescriptions automatically use conventional packaging",
    "The earlier request alone does not establish a blanket waiver",
    "Tamper-evident packaging always replaces child resistance",
    "Calendar labeling establishes child resistance"
  ],
  "answer": 1,
  "explanation": "CPSC distinguishes a request for one prescription from an explicit patient request covering all prescriptions. Confirm the applicable request or exemption.",
  "reviewHref": "#toxicology-stabilization",
  "lesson": "toxicology-stabilization",
  "difficulty": "Applied"
},
{
  "id": "tox-copper-chelator-boundary",
  "question": "Which statement correctly distinguishes copper treatment mechanisms in Wilson disease?",
  "choices": [
    "Zinc and penicillamine both act only by the same intestinal mechanism",
    "Every copper exposure uses the chronic Wilson regimen",
    "Penicillamine removes copper; zinc reduces intestinal copper absorption",
    "Treatment ends permanently after the first normal result"
  ],
  "answer": 2,
  "explanation": "Copper removal and reduced absorption are different strategies. Wilson disease requires continuing specialist treatment; its regimen is not automatically an acute-exposure order.",
  "reviewHref": "#arsenic-mercury-exposure",
  "lesson": "arsenic-mercury-exposure",
  "difficulty": "Applied"
},
{
  "id": "tox-gold-bal-product",
  "question": "A specialist selects BAL in Oil for gold poisoning. Which product boundary still applies?",
  "choices": [
    "Deep intramuscular administration with contraindication and renal review",
    "Intravenous administration of the oily solution",
    "Automatic use of the lead-combination schedule",
    "Concurrent iron prevents chelator toxicity"
  ],
  "answer": 0,
  "explanation": "Gold poisoning is a labeled indication, but route, peanut allergy, renal precautions and the iron restriction remain relevant. Verify the complete regimen.",
  "reviewHref": "#arsenic-mercury-exposure",
  "lesson": "arsenic-mercury-exposure",
  "difficulty": "Applied"
});
