// Original clinical cases. Coverage determines length; each case has one intended best answer.
export const sjogrenDiseaseQuestionBank = [
  {
    "id": "sjogren-exocrine-autoimmunity-case",
    "concept": "exocrine-autoimmunity",
    "lesson": "autoimmune-exocrinopathy",
    "difficulty": "Applied",
    "prompt": "A patient has dry eyes, dry mouth, neuropathic symptoms, and parotid enlargement. What is the best response?",
    "choices": [
      "Evaluate a systemic autoimmune process rather than treating each symptom as unrelated.",
      "Describe the disease as isolated dehydration that affects only tears and saliva.",
      "Attribute neuropathy to insufficient water intake without evaluation.",
      "Treat parotid enlargement as proof that systemic disease is impossible."
    ],
    "answer": 0,
    "explanation": "Sjogren disease is a systemic autoimmune disease with exocrine and extraglandular effects.",
    "reviewHref": "#autoimmune-exocrinopathy"
  },
  {
    "id": "sjogren-antibody-biology-case",
    "concept": "antibody-biology",
    "lesson": "autoimmune-exocrinopathy",
    "difficulty": "Applied",
    "prompt": "A patient has sicca symptoms, isolated anti-SSB positivity, and normal objective gland tests. What is the best response?",
    "choices": [
      "Diagnose every patient with an isolated anti-SSB result and no compatible findings.",
      "Assign three classification points to isolated anti-SSB.",
      "Begin immunosuppression solely because anti-SSB is positive.",
      "Continue a phenotype directed evaluation instead of treating the isolated result as diagnostic."
    ],
    "answer": 3,
    "explanation": "The current criteria give three points to anti-SSA and exclude isolated anti-SSB from the weighted score.",
    "reviewHref": "#autoimmune-exocrinopathy"
  },
  {
    "id": "sjogren-primary-associated-case",
    "concept": "primary-associated",
    "lesson": "autoimmune-exocrinopathy",
    "difficulty": "Applied",
    "prompt": "A patient with rheumatoid arthritis develops objective dry eye, salivary hypofunction, and anti-SSA positivity. What is the best response?",
    "choices": [
      "Exclude Sjogren because rheumatoid arthritis is already diagnosed.",
      "Ignore objective gland dysfunction whenever arthritis is present.",
      "Assess associated Sjogren disease and its complications rather than attributing everything to rheumatoid arthritis.",
      "Assume associated disease cannot produce ocular, oral, neurologic, pulmonary, renal, or hematologic injury."
    ],
    "answer": 2,
    "explanation": "Coexisting autoimmune disease changes context, not the need to recognize Sjogren manifestations.",
    "reviewHref": "#autoimmune-exocrinopathy"
  },
  {
    "id": "sjogren-sicca-pattern-case",
    "concept": "sicca-pattern",
    "lesson": "clinical-spectrum",
    "difficulty": "Applied",
    "prompt": "A patient carries water constantly, wakes to drink, struggles with dry food, and has recurrent corneal irritation. What is the best response?",
    "choices": [
      "Defer eye examination despite recurrent corneal symptoms.",
      "Characterize ocular and oral burden and arrange objective eye and dental assessment.",
      "Record only the word dryness and skip functional effects and competing causes.",
      "Diagnose autoimmune gland destruction from thirst alone."
    ],
    "answer": 1,
    "explanation": "The pattern and complications determine urgency and the required specialists.",
    "reviewHref": "#clinical-spectrum"
  },
  {
    "id": "sjogren-systemic-spectrum-case",
    "concept": "systemic-spectrum",
    "lesson": "clinical-spectrum",
    "difficulty": "Applied",
    "prompt": "A patient with anti-SSA positivity develops distal numbness, purpura, and low complement. What is the best response?",
    "choices": [
      "Evaluate systemic activity, vasculitis, neuropathy, and lymphoma risk promptly.",
      "Treat a normal mouth examination as proof that systemic disease is absent.",
      "Manage purpura only by increasing artificial tears.",
      "Assume the neurologic findings are harmless because anti-SSA is known."
    ],
    "answer": 0,
    "explanation": "Neurologic, vascular, and hematologic findings can signal active systemic disease.",
    "reviewHref": "#clinical-spectrum"
  },
  {
    "id": "sjogren-red-flags-case",
    "concept": "red-flags",
    "lesson": "clinical-spectrum",
    "difficulty": "Applied",
    "prompt": "A patient reports a persistently enlarging unilateral parotid gland and drenching night sweats. What is the best response?",
    "choices": [
      "Reassure every new symptom as expected dryness until the next annual visit.",
      "Treat night sweats with salivary substitutes alone.",
      "Wait for bilateral swelling before considering investigation.",
      "Arrange prompt evaluation for lymphoma and other serious causes."
    ],
    "answer": 3,
    "explanation": "Persistent gland enlargement plus B symptoms is not routine sicca care.",
    "reviewHref": "#clinical-spectrum"
  },
  {
    "id": "sjogren-weighted-criteria-case",
    "concept": "weighted-criteria",
    "lesson": "classification-diagnosis",
    "difficulty": "Applied",
    "prompt": "An eligible patient has anti-SSA positivity and a Schirmer result of 4 mm in five minutes. What is the best response?",
    "choices": [
      "Assign three points in total because Schirmer never contributes.",
      "Assign six points because both antibody and Schirmer findings have equal weight.",
      "Recognize a total score of four, which meets classification criteria.",
      "Give one point to anti-SSA and three points to a mildly abnormal Schirmer test."
    ],
    "answer": 2,
    "explanation": "Anti-SSA contributes three points and the abnormal Schirmer result contributes one.",
    "reviewHref": "#classification-diagnosis"
  },
  {
    "id": "sjogren-classification-diagnosis-distinction-case",
    "concept": "classification-diagnosis-distinction",
    "lesson": "classification-diagnosis",
    "difficulty": "Applied",
    "prompt": "A patient has convincing early sicca and systemic features but currently scores three points. What is the best response?",
    "choices": [
      "Stop evaluating symptoms until the score reaches four on its own.",
      "Maintain the differential, address complications, and repeat or extend objective evaluation when appropriate.",
      "Tell every symptomatic patient below four points that Sjogren disease is permanently excluded.",
      "Start lymphoma chemotherapy because the score is below four."
    ],
    "answer": 1,
    "explanation": "Early disease can remain clinically plausible even before a research classification threshold is reached.",
    "reviewHref": "#classification-diagnosis"
  },
  {
    "id": "sjogren-objective-tests-case",
    "concept": "objective-tests",
    "lesson": "classification-diagnosis",
    "difficulty": "Applied",
    "prompt": "A patient has severe dry mouth but uses several anticholinergic medicines and has never had salivary testing. What is the best response?",
    "choices": [
      "Review reversible causes and obtain appropriate objective testing before assigning autoimmune gland failure.",
      "Use symptoms alone to quantify gland injury and skip objective testing in every case.",
      "Diagnose Sjogren from dry mouth alone without reviewing medicines.",
      "Stop every prescription immediately without coordinating with prescribers."
    ],
    "answer": 0,
    "explanation": "Medicines and other conditions can mimic sicca, so objective testing and context matter.",
    "reviewHref": "#classification-diagnosis"
  },
  {
    "id": "sjogren-tear-foundation-case",
    "concept": "tear-foundation",
    "lesson": "dry-eye-foundations",
    "difficulty": "Applied",
    "prompt": "A patient needs artificial tears eight times daily and reports increasing burning from the drops. What is the best response?",
    "choices": [
      "Use a preserved drop every few minutes indefinitely despite worsening irritation.",
      "Use a vasoconstrictor as the sole long-term treatment for gland hypofunction.",
      "Treat burning by withholding all eye care despite ongoing symptoms.",
      "Switch to preservative free lubrication and arrange severity based eye care."
    ],
    "answer": 3,
    "explanation": "Frequent preserved drops can worsen ocular surface toxicity.",
    "reviewHref": "#dry-eye-foundations"
  },
  {
    "id": "sjogren-dry-eye-staging-case",
    "concept": "dry-eye-staging",
    "lesson": "dry-eye-foundations",
    "difficulty": "Applied",
    "prompt": "A patient has aqueous deficiency plus obstructed meibomian glands and rapid tear breakup. What is the best response?",
    "choices": [
      "Treat lid obstruction as irrelevant because aqueous deficiency is present.",
      "Assume lubrication corrects every cause of tear instability.",
      "Combine aqueous support with lid directed therapy and ophthalmic follow-up.",
      "Use one identical eye regimen for every patient regardless of staining or lid disease."
    ],
    "answer": 2,
    "explanation": "Mixed mechanism dry eye requires more than tear replacement alone.",
    "reviewHref": "#dry-eye-foundations"
  },
  {
    "id": "sjogren-punctal-procedures-case",
    "concept": "punctal-procedures",
    "lesson": "dry-eye-foundations",
    "difficulty": "Applied",
    "prompt": "Severe keratoconjunctivitis sicca persists despite optimized drops and anti-inflammatory therapy. What is the best response?",
    "choices": [
      "Start systemic chemotherapy solely for persistent dryness.",
      "Refer for advanced ophthalmic options such as serum tears, scleral lenses, or punctal intervention.",
      "Insert punctal plugs automatically without evaluating inflammation, infection, or tear composition.",
      "Repeat the same ineffective regimen indefinitely without specialist review."
    ],
    "answer": 1,
    "explanation": "Advanced therapy is chosen after mechanism and severity are defined.",
    "reviewHref": "#dry-eye-foundations"
  },
  {
    "id": "sjogren-cyclosporine-eye-case",
    "concept": "cyclosporine-eye",
    "lesson": "anti-inflammatory-eye-therapy",
    "difficulty": "Applied",
    "prompt": "A patient using cyclosporine correctly for one week asks why dryness persists. What is the best response?",
    "choices": [
      "Reinforce the delayed therapeutic timeline and continue the supervised plan if tolerated.",
      "Stop after two days because immediate relief did not occur.",
      "Double every dose to obtain immediate lubrication.",
      "Switch to oral cyclosporine solely because one week of drops has not relieved dryness."
    ],
    "answer": 0,
    "explanation": "Topical cyclosporine is not an immediate rescue lubricant.",
    "reviewHref": "#anti-inflammatory-eye-therapy"
  },
  {
    "id": "sjogren-lifitegrast-eye-case",
    "concept": "lifitegrast-eye",
    "lesson": "anti-inflammatory-eye-therapy",
    "difficulty": "Applied",
    "prompt": "A contact lens wearer starts lifitegrast and notices an unusual taste. What is the best response?",
    "choices": [
      "Reuse a single dose container for several days and insert contacts immediately after dosing.",
      "Stop because isolated altered taste proves anaphylaxis.",
      "Rinse and reuse the opened container for the rest of the week.",
      "Explain dysgeusia, teach single dose handling, and separate dosing from lens wear."
    ],
    "answer": 3,
    "explanation": "Current labeling links twice daily use with specific lens and container instructions.",
    "reviewHref": "#anti-inflammatory-eye-therapy"
  },
  {
    "id": "sjogren-ocular-escalation-case",
    "concept": "ocular-escalation",
    "lesson": "anti-inflammatory-eye-therapy",
    "difficulty": "Applied",
    "prompt": "A patient develops photophobia, reduced vision, and focal corneal staining despite home therapy. What is the best response?",
    "choices": [
      "Wait for complete vision loss before seeking eye care.",
      "Manage reduced vision only by adding more preserved artificial tears.",
      "Arrange urgent ophthalmic assessment for sight threatening surface disease.",
      "Let a patient self-treat severe eye pain with indefinite topical steroid refills."
    ],
    "answer": 2,
    "explanation": "Severe ocular symptoms can represent corneal injury rather than routine dryness.",
    "reviewHref": "#anti-inflammatory-eye-therapy"
  },
  {
    "id": "sjogren-oral-prevention-case",
    "concept": "oral-prevention",
    "lesson": "xerostomia-prevention",
    "difficulty": "Applied",
    "prompt": "A patient has severe dry mouth but no current cavities and asks whether dental prevention can wait. What is the best response?",
    "choices": [
      "Replace dental visits with water intake alone.",
      "Begin topical fluoride and structured preventive dental care now.",
      "Wait for the first tooth fracture before starting preventive care.",
      "Use only saliva substitutes because fluoride is unnecessary without cavities."
    ],
    "answer": 1,
    "explanation": "Prevention begins before irreversible dental damage appears.",
    "reviewHref": "#xerostomia-prevention"
  },
  {
    "id": "sjogren-saliva-support-case",
    "concept": "saliva-support",
    "lesson": "xerostomia-prevention",
    "difficulty": "Applied",
    "prompt": "A patient uses sugared lemon drops hourly for dry mouth and develops enamel erosion. What is the best response?",
    "choices": [
      "Replace the strategy with noncariogenic stimulation and dental prevention.",
      "Recommend frequent sugary candy because any salivary stimulation is equally safe.",
      "Increase acidic candy frequency to overcome the reduced saliva.",
      "Assume enamel erosion cannot be related to the salivary strategy."
    ],
    "answer": 0,
    "explanation": "Sugar and acid can worsen the oral complications of salivary hypofunction.",
    "reviewHref": "#xerostomia-prevention"
  },
  {
    "id": "sjogren-oral-complications-case",
    "concept": "oral-complications",
    "lesson": "xerostomia-prevention",
    "difficulty": "Applied",
    "prompt": "A denture wearer with Sjogren disease develops burning, erythema, and removable white plaques. What is the best response?",
    "choices": [
      "Assume oral burning is always autoimmune and never evaluate infection.",
      "Increase systemic immunosuppression without checking for infection.",
      "Ignore removable plaques because candidiasis cannot occur with dentures.",
      "Evaluate and treat candidiasis while correcting local risk factors."
    ],
    "answer": 3,
    "explanation": "Reduced salivary defense increases fungal and dental complications.",
    "reviewHref": "#xerostomia-prevention"
  },
  {
    "id": "sjogren-pilocarpine-case",
    "concept": "pilocarpine",
    "lesson": "secretagogues",
    "difficulty": "Applied",
    "prompt": "A patient with dry mouth has uncontrolled asthma and asks for pilocarpine. What is the best response?",
    "choices": [
      "Substitute cevimeline without addressing uncontrolled asthma.",
      "Increase the dose to overcome bronchial secretions.",
      "Avoid pilocarpine and optimize safer local measures while pulmonary disease is controlled.",
      "Use it in uncontrolled asthma because increased bronchial tone is harmless."
    ],
    "answer": 2,
    "explanation": "Systemic muscarinic stimulation can increase airway resistance and secretions.",
    "reviewHref": "#secretagogues"
  },
  {
    "id": "sjogren-cevimeline-case",
    "concept": "cevimeline",
    "lesson": "secretagogues",
    "difficulty": "Applied",
    "prompt": "A patient develops drenching sweating, abdominal cramping, and dizziness after starting cevimeline. What is the best response?",
    "choices": [
      "Stop fluid intake to reduce the sweating.",
      "Reassess tolerability, hydration, hemodynamics, and whether therapy should be reduced or stopped.",
      "Tell a patient to double the dose whenever sweating occurs.",
      "Double the dose because sweating guarantees useful salivary benefit."
    ],
    "answer": 1,
    "explanation": "Sweating and gastrointestinal effects reflect systemic cholinergic exposure.",
    "reviewHref": "#secretagogues"
  },
  {
    "id": "sjogren-secretagogue-chemistry-case",
    "concept": "secretagogue-chemistry",
    "lesson": "secretagogues",
    "difficulty": "Applied",
    "prompt": "A learner assumes pilocarpine and cevimeline are chemically interchangeable because both are systemic secretagogues. What is the best response?",
    "choices": [
      "Correct the class-level shortcut and compare each product's structure, stability, schedule, contraindications, and labeling.",
      "Treat pilocarpine and cevimeline as the same molecule because both increase secretion.",
      "Use the same dose in milligrams because the drugs share a receptor class.",
      "Treat structural similarity as a substitute for product labeling."
    ],
    "answer": 0,
    "explanation": "Shared receptor effects do not make distinct molecular scaffolds interchangeable.",
    "reviewHref": "#secretagogues"
  },
  {
    "id": "sjogren-secretagogue-selection-case",
    "concept": "secretagogue-selection",
    "lesson": "secretagogues",
    "difficulty": "Applied",
    "prompt": "After an adequate trial, a patient has no salivary benefit but persistent sweating and urinary urgency. What is the best response?",
    "choices": [
      "Continue indefinitely without checking whether speech, swallowing, or oral comfort improved.",
      "Add a second secretagogue without reviewing the ongoing adverse effects.",
      "Count sweating as proof that the original functional target has been met.",
      "Stop the ineffective secretagogue and revise the symptom plan."
    ],
    "answer": 3,
    "explanation": "A therapeutic trial needs both a response target and a tolerability threshold.",
    "reviewHref": "#secretagogues"
  },
  {
    "id": "sjogren-systemic-treatment-principle-case",
    "concept": "systemic-treatment-principle",
    "lesson": "systemic-treatment",
    "difficulty": "Applied",
    "prompt": "A patient has stable sicca symptoms but no inflammatory organ disease and requests rituximab solely for dryness. What is the best response?",
    "choices": [
      "Start high-dose systemic steroids solely for stable dry mouth.",
      "Use rituximab instead of all dental and ocular preventive care.",
      "Optimize topical and secretory therapy rather than exposing the patient to unsupported systemic risk.",
      "Start broad immunosuppression for mild dry mouth without objective systemic activity."
    ],
    "answer": 2,
    "explanation": "Current guidance separates dryness management from treatment of active systemic disease.",
    "reviewHref": "#systemic-treatment"
  },
  {
    "id": "sjogren-hydroxychloroquine-limits-case",
    "concept": "hydroxychloroquine-limits",
    "lesson": "systemic-treatment",
    "difficulty": "Applied",
    "prompt": "A patient has isolated fatigue and dryness without inflammatory arthritis or organ activity. What is the best response?",
    "choices": [
      "Begin a biologic solely because fatigue is present.",
      "Search for reversible fatigue causes and optimize symptom care before adding hydroxychloroquine.",
      "Promise that hydroxychloroquine will restore saliva in every patient.",
      "Guarantee that hydroxychloroquine will cure the fatigue."
    ],
    "answer": 1,
    "explanation": "Evidence does not support blanket use for fatigue or glandular dryness alone.",
    "reviewHref": "#systemic-treatment"
  },
  {
    "id": "sjogren-organ-directed-immunotherapy-case",
    "concept": "organ-directed-immunotherapy",
    "lesson": "systemic-treatment",
    "difficulty": "Applied",
    "prompt": "A patient develops cryoglobulinemic vasculitis with neuropathy and renal involvement. What is the best response?",
    "choices": [
      "Coordinate urgent specialist organ directed immunotherapy and supportive care.",
      "Use the same immune regimen for neuropathy, interstitial lung disease, vasculitis, and isolated dry eye.",
      "Treat renal and neurologic vasculitis with saliva substitutes alone.",
      "Delay organ assessment until dry-eye symptoms become severe."
    ],
    "answer": 0,
    "explanation": "Severe systemic disease requires urgent phenotype-specific care. The December 2025 PNS guideline recommends high-dose glucocorticoids with rituximab first-line when vasculitic neuropathy is strongly suspected; this is not an indication to wait for refractory disease.",
    "reviewHref": "#systemic-treatment"
  },
  {
    "id": "sjogren-lymphoma-risk-case",
    "concept": "lymphoma-risk",
    "lesson": "lymphoma-red-flags",
    "difficulty": "Applied",
    "prompt": "A patient develops persistent parotid enlargement, low C4, and lymphopenia. What is the best response?",
    "choices": [
      "Use routine reassurance for every enlarging parotid gland because swelling is common.",
      "Consider low C4 proof that gland enlargement is benign.",
      "Use improved mouth comfort to rule out lymphoma.",
      "Arrange prompt lymphoma focused evaluation."
    ],
    "answer": 3,
    "explanation": "The combination includes recognized predictors that warrant investigation.",
    "reviewHref": "#lymphoma-red-flags"
  },
  {
    "id": "sjogren-b-symptoms-case",
    "concept": "b-symptoms",
    "lesson": "lymphoma-red-flags",
    "difficulty": "Applied",
    "prompt": "A patient loses substantial weight over three months and reports fever and night sweats. What is the best response?",
    "choices": [
      "Defer investigation until dryness also worsens.",
      "Treat fever and weight loss solely with fluoride toothpaste.",
      "Escalate for malignancy, infection, and systemic disease evaluation.",
      "Attribute a ten percent weight loss and night sweats to dry mouth without further workup."
    ],
    "answer": 2,
    "explanation": "B symptoms cannot be safely folded into routine fatigue counseling.",
    "reviewHref": "#lymphoma-red-flags"
  },
  {
    "id": "sjogren-pregnancy-ssa-case",
    "concept": "pregnancy-ssa",
    "lesson": "longitudinal-life-stages",
    "difficulty": "Applied",
    "prompt": "An anti-SSA positive patient is planning pregnancy. What is the best response?",
    "choices": [
      "Wait for fetal symptoms before discussing medication safety.",
      "Arrange preconception medication review and coordinated fetal surveillance planning.",
      "Wait until delivery to disclose anti-SSA positivity to the obstetric team.",
      "Assume topical eye drops prevent antibody-related fetal disease."
    ],
    "answer": 1,
    "explanation": "Risk management begins before conception and continues through the antibody relevant surveillance window.",
    "reviewHref": "#longitudinal-life-stages"
  },
  {
    "id": "sjogren-longitudinal-monitoring-case",
    "concept": "longitudinal-monitoring",
    "lesson": "longitudinal-life-stages",
    "difficulty": "Applied",
    "prompt": "A patient has improved eye comfort but new dyspnea, neuropathic pain, and declining serum bicarbonate. What is the best response?",
    "choices": [
      "Reopen systemic organ assessment despite improved sicca symptoms.",
      "Measure success only by whether the patient still reports any dryness.",
      "Continue only ocular follow-up because eye comfort improved.",
      "Attribute declining bicarbonate to dry eyes without renal evaluation."
    ],
    "answer": 0,
    "explanation": "Local symptom control does not exclude evolving pulmonary, neurologic, or renal disease.",
    "reviewHref": "#longitudinal-life-stages"
  }
];

sjogrenDiseaseQuestionBank.push(
  {
    id: "sjogren-bilateral-schirmer-boundary", concept: "weighted-criteria", lesson: "classification-diagnosis", difficulty: "Applied",
    prompt: "An eligible adult has anti-SSA positivity and Schirmer results of 3 mm and 4 mm at five minutes. All other scoring items are negative. What is the total classification score?",
    choices: ["Three: eye tests do not count with positive antibodies", "Four: the Schirmer item contributes once", "Five: each abnormal eye earns a point", "Six: Schirmer carries the same weight as anti-SSA"],
    answer: 1, explanation: "Anti-SSA contributes three points. Schirmer is one scoring item, satisfied by either eye; bilateral results do not duplicate it. The total is four.", reviewHref: "#classification-diagnosis"
  },
  {
    id: "sjogren-pilocarpine-hepatic-start", concept: "pilocarpine", lesson: "secretagogues", difficulty: "Applied",
    prompt: "A patient with Sjogren xerostomia and moderate hepatic impairment is starting oral pilocarpine. Which starting schedule matches the US label?",
    choices: ["5 mg twice daily, followed by individualized adjustment", "5 mg four times daily without considering liver function", "10 mg every four hours", "30 mg three times daily"],
    answer: 0, explanation: "Moderate hepatic impairment reduces pilocarpine clearance. The labeled initial schedule is 5 mg twice daily, adjusted to benefit and tolerability.", reviewHref: "#secretagogues"
  },
  {
    id: "sjogren-cevimeline-escalation", concept: "cevimeline", lesson: "secretagogues", difficulty: "Applied",
    prompt: "Cevimeline 30 mg three times daily provides little benefit and troublesome sweating. The patient asks to double every dose. What is the best response?",
    choices: ["Double it because higher doses have established superior benefit", "Combine it with another muscarinic agonist without review", "Reassess benefit, hydration and alternatives with the prescriber instead of escalating automatically", "Ignore the sweating because it cannot cause dehydration"],
    answer: 2, explanation: "The label does not establish additional efficacy or adequate safety above 30 mg three times daily. Poor benefit and sweating warrant reassessment, not automatic escalation.", reviewHref: "#secretagogues"
  }
);


sjogrenDiseaseQuestionBank.push({
  id: "sjogren-pregnancy-prior-neonatal-lupus-case", concept: "pregnancy-surveillance-scope", lesson: "longitudinal-life-stages", difficulty: "Applied",
  prompt: "An anti-SSA positive patient previously had an infant with neonatal lupus but no heart block. The team is discussing the ACR 2020 approach. Which interpretation is accurate?",
  choices: ["Weekly surveillance applies only after previous heart block.", "Other neonatal lupus history also qualifies for conditional weekly fetal echocardiography from weeks 16–18 through 26.", "ACR requires weekly echocardiography for every antibody-positive pregnancy regardless of history.", "The SMFM SLE guideline establishes identical surveillance recommendations for every patient with Sjogren disease."],
  answer: 1, explanation: "ACR includes prior cardiac or other neonatal lupus in its weekly-surveillance recommendation. Without such history, it recommends a less frequent, unspecified interval. Differing SMFM guidance also requires consideration during individualized specialist planning.", reviewHref: "#longitudinal-life-stages"
});
