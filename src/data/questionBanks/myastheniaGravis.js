// Original clinical cases; topic coverage determines bank size.
export const myastheniaGravisQuestionBank = [
  {
    "id": "mg-nmj-safety-factor-case",
    "concept": "nmj-safety-factor",
    "lesson": "nmj-autoimmunity",
    "difficulty": "Applied",
    "prompt": "A patient develops worsening ptosis during sustained upward gaze that improves after rest. What is the best response?",
    "choices": [
      "Recognize fatigable neuromuscular transmission failure.",
      "Explain fluctuating weakness as sensory nerve failure.",
      "Diagnose a fixed extraocular muscle paralysis solely from this fluctuating finding.",
      "Exclude junction dysfunction because rest improves the eyelid position."
    ],
    "answer": 0,
    "explanation": "Repeated activation reveals the reduced safety factor that defines myasthenic fatigability.",
    "reviewHref": "#nmj-autoimmunity"
  },
  {
    "id": "mg-antibody-phenotype-case",
    "concept": "antibody-phenotype",
    "lesson": "thymectomy-phenotype",
    "difficulty": "Applied",
    "prompt": "A patient with MuSK antibodies is referred for thymectomy solely because the antibody test is positive. What is the best response?",
    "choices": [
      "Assume every antibody phenotype has identical evidence for every treatment.",
      "Reassess the indication because routine immune benefit from thymectomy is not established for MuSK disease.",
      "Schedule surgery without checking for thymoma or reviewing the antibody phenotype.",
      "Treat a positive MuSK result as proof of thymic malignancy."
    ],
    "answer": 1,
    "explanation": "Antibody phenotype changes the relevance of thymectomy, rescue therapy, and targeted drug labels.",
    "reviewHref": "#thymectomy-phenotype"
  },
  {
    "id": "mg-pyridostigmine-chemistry-case",
    "concept": "pyridostigmine-chemistry",
    "lesson": "nmj-autoimmunity",
    "difficulty": "Applied",
    "prompt": "A learner asks why therapeutic pyridostigmine has little direct central effect. What is the best response?",
    "choices": [
      "Describe pyridostigmine as a centrally acting dopamine agonist.",
      "Explain that the drug readily crosses the blood-brain barrier because it is uncharged.",
      "Explain that its permanent positive charge limits blood brain barrier penetration.",
      "Explain that therapeutic doses selectively block central muscarinic receptors."
    ],
    "answer": 2,
    "explanation": "The charged structure supports a mainly peripheral cholinergic action.",
    "reviewHref": "#nmj-autoimmunity"
  },
  {
    "id": "mg-fatigable-pattern-case",
    "concept": "fatigable-pattern",
    "lesson": "recognition-urgency",
    "difficulty": "Applied",
    "prompt": "A patient reports evening diplopia and chewing fatigue but appears stronger after overnight rest. What is the best response?",
    "choices": [
      "Exclude MG whenever limb strength is normal during one morning examination.",
      "Dismiss the evening symptoms because the morning examination is stronger.",
      "Diagnose MG solely from fatigue without examining fatigability or alternatives.",
      "Use fatigability testing and a targeted neuromuscular workup."
    ],
    "answer": 3,
    "explanation": "Temporal fluctuation is diagnostically important and can make a single examination deceptively normal.",
    "reviewHref": "#recognition-urgency"
  },
  {
    "id": "mg-bulbar-risk-case",
    "concept": "bulbar-risk",
    "lesson": "recognition-urgency",
    "difficulty": "Applied",
    "prompt": "A patient develops nasal speech, choking, and a weak cough during an infection. What is the best response?",
    "choices": [
      "Arrange emergency monitored assessment for aspiration and respiratory failure.",
      "Wait for profound limb paralysis before treating bulbar weakness as urgent.",
      "Recommend oral food and fluids despite repeated choking.",
      "Arrange a routine follow-up next month without assessing airway protection."
    ],
    "answer": 0,
    "explanation": "Bulbar decline can precede generalized paralysis and can rapidly compromise the airway.",
    "reviewHref": "#recognition-urgency"
  },
  {
    "id": "mg-respiratory-assessment-case",
    "concept": "respiratory-assessment",
    "lesson": "recognition-urgency",
    "difficulty": "Applied",
    "prompt": "A patient speaks fewer words per breath and has a falling vital capacity with oxygen saturation of 97 percent. What is the best response?",
    "choices": [
      "Use normal pulse oximetry as the sole reason to defer respiratory monitoring.",
      "Escalate to ICU level respiratory assessment and prepare for airway support.",
      "Give oxygen alone and stop monitoring ventilation.",
      "Discharge because oxygen saturation exceeds 95 percent."
    ],
    "answer": 1,
    "explanation": "Ventilatory muscle failure can progress before oxygenation becomes abnormal.",
    "reviewHref": "#recognition-urgency"
  },
  {
    "id": "mg-antibody-testing-case",
    "concept": "antibody-testing",
    "lesson": "diagnostic-workup",
    "difficulty": "Applied",
    "prompt": "A patient has classic fatigable bulbar weakness but negative AChR antibodies. What is the best response?",
    "choices": [
      "Declare all MG excluded after one negative AChR antibody result.",
      "Repeat AChR testing indefinitely without examining other antibody or physiologic pathways.",
      "Continue MuSK testing and neuromuscular evaluation rather than closing the diagnosis.",
      "Diagnose a functional disorder solely because AChR antibodies are negative."
    ],
    "answer": 2,
    "explanation": "Standard antibody testing is informative but does not detect every autoimmune MG case.",
    "reviewHref": "#diagnostic-workup"
  },
  {
    "id": "mg-electrodiagnosis-case",
    "concept": "electrodiagnosis",
    "lesson": "diagnostic-workup",
    "difficulty": "Applied",
    "prompt": "Serology is negative but the examination strongly suggests ocular and bulbar fatigability. What is the best response?",
    "choices": [
      "Treat an abnormal single fiber EMG as specific proof of autoimmune MG without context.",
      "Use a normal sensory nerve study to exclude MG.",
      "Use chest imaging as the sole test of neuromuscular transmission.",
      "Use specialist electrodiagnostic testing to evaluate transmission failure."
    ],
    "answer": 3,
    "explanation": "Electrodiagnosis can support seronegative disease but still requires clinical interpretation.",
    "reviewHref": "#diagnostic-workup"
  },
  {
    "id": "mg-thymic-imaging-case",
    "concept": "thymic-imaging",
    "lesson": "diagnostic-workup",
    "difficulty": "Applied",
    "prompt": "A newly diagnosed AChR positive patient has never had mediastinal imaging. What is the best response?",
    "choices": [
      "Obtain chest imaging to assess for thymoma.",
      "Skip chest imaging because pyridostigmine improved symptoms.",
      "Wait for chest pain before considering mediastinal imaging.",
      "Assume a positive AChR result excludes a thymic tumor."
    ],
    "answer": 0,
    "explanation": "Symptom response does not exclude thymic tumor, which changes management.",
    "reviewHref": "#diagnostic-workup"
  },
  {
    "id": "mg-pyridostigmine-timing-case",
    "concept": "pyridostigmine-timing",
    "lesson": "pyridostigmine-therapy",
    "difficulty": "Applied",
    "prompt": "A patient reports predictable chewing fatigue before dinner but no choking, dysphagia or breathing symptoms. Morning function remains adequate. What medication review is appropriate?",
    "choices": [
      "Give every dose at random times without relating it to symptoms or meals.",
      "Reassess the afternoon schedule and time an appropriate dose before the meal.",
      "Double every daily dose without reviewing timing or adverse effects.",
      "Replace all daytime treatment with a large immediate-release dose at bedtime."
    ],
    "answer": 1,
    "explanation": "Functional timing can improve benefit without indiscriminate dose escalation.",
    "reviewHref": "#pyridostigmine-therapy"
  },
  {
    "id": "mg-pyridostigmine-renal-case",
    "concept": "pyridostigmine-renal",
    "lesson": "pyridostigmine-therapy",
    "difficulty": "Applied",
    "prompt": "An older patient with new acute kidney injury develops diarrhea and fasciculations on an unchanged regimen. What is the best response?",
    "choices": [
      "Assume kidney function has no effect on pyridostigmine exposure.",
      "Increase pyridostigmine because fasciculations always mean undertreated MG.",
      "Evaluate for accumulation and cholinergic excess before adding more doses.",
      "Treat diarrhea alone while leaving the new kidney impairment unassessed."
    ],
    "answer": 2,
    "explanation": "Reduced renal clearance can increase drug exposure and toxicity.",
    "reviewHref": "#pyridostigmine-therapy"
  },
  {
    "id": "mg-cholinergic-excess-case",
    "concept": "cholinergic-excess",
    "lesson": "pyridostigmine-therapy",
    "difficulty": "Applied",
    "prompt": "A patient takes several extra doses and develops sweating, diarrhea, fasciculations, and weaker breathing. What is the best response?",
    "choices": [
      "Treat every episode of worsening weakness by automatically doubling pyridostigmine.",
      "Take further extra doses until sweating resolves.",
      "Wait overnight despite weaker breathing because diarrhea is expected.",
      "Arrange urgent assessment for cholinergic toxicity and respiratory compromise."
    ],
    "answer": 3,
    "explanation": "Muscarinic symptoms plus nicotinic weakness make blind escalation dangerous.",
    "reviewHref": "#pyridostigmine-therapy"
  },
  {
    "id": "mg-steroid-early-worsening-case",
    "concept": "steroid-early-worsening",
    "lesson": "conventional-immunotherapy",
    "difficulty": "Applied",
    "prompt": "A patient with marked bulbar weakness requires corticosteroid initiation. What is the best response?",
    "choices": [
      "Coordinate monitored initiation with a rescue and airway plan.",
      "Start a high dose without contingency planning in a patient with severe dysphagia.",
      "Start treatment at home without an airway contingency despite marked bulbar impairment.",
      "Delay respiratory assessment until limb paralysis develops."
    ],
    "answer": 0,
    "explanation": "Temporary early worsening can be dangerous when functional reserve is low.",
    "reviewHref": "#conventional-immunotherapy"
  },
  {
    "id": "mg-steroid-sparing-onset-case",
    "concept": "steroid-sparing-onset",
    "lesson": "conventional-immunotherapy",
    "difficulty": "Applied",
    "prompt": "A patient starts azathioprine and asks why prednisone cannot be stopped immediately. What is the best response?",
    "choices": [
      "Declare treatment ineffective after one week and repeatedly switch agents.",
      "Explain delayed benefit and use a supervised bridge and taper plan.",
      "Stop prednisone abruptly on the first day of azathioprine treatment.",
      "Expect azathioprine to reverse respiratory weakness within hours."
    ],
    "answer": 1,
    "explanation": "The time to immune effect must be incorporated into sequencing and counseling.",
    "reviewHref": "#conventional-immunotherapy"
  },
  {
    "id": "mg-immunotherapy-monitoring-case",
    "concept": "immunotherapy-monitoring",
    "lesson": "conventional-immunotherapy",
    "difficulty": "Applied",
    "prompt": "A patient is starting a steroid sparing medicine with no baseline laboratory or vaccine review. What is the best response?",
    "choices": [
      "Use the same laboratory plan for every immune therapy regardless of mechanism.",
      "Use symptom improvement as the only monitoring measure.",
      "Complete product specific baseline assessment and define ongoing monitoring.",
      "Postpone baseline assessment until the first serious adverse effect."
    ],
    "answer": 2,
    "explanation": "Safe immunotherapy requires preparation and mechanism specific surveillance.",
    "reviewHref": "#conventional-immunotherapy"
  },
  {
    "id": "mg-thymectomy-candidate-case",
    "concept": "thymectomy-candidate",
    "lesson": "thymectomy-phenotype",
    "difficulty": "Applied",
    "prompt": "A 29 year old with generalized AChR positive disease wants to reduce long term immune therapy burden. What is the best response?",
    "choices": [
      "Recommend thymectomy to every seronegative or MuSK patient without thymoma.",
      "Exclude surgery because no thymoma is present.",
      "Wait for a crisis before discussing elective surgery.",
      "Refer for a stable elective thymectomy discussion."
    ],
    "answer": 3,
    "explanation": "Age, generalized disease, AChR status, and treatment goals fit the evidence supported population.",
    "reviewHref": "#thymectomy-phenotype"
  },
  {
    "id": "mg-thymoma-stability-case",
    "concept": "thymoma-stability",
    "lesson": "thymectomy-phenotype",
    "difficulty": "Applied",
    "prompt": "Imaging shows thymoma in a patient with rapidly worsening bulbar weakness. What is the best response?",
    "choices": [
      "Stabilize MG urgently while coordinating definitive surgical evaluation.",
      "Send a patient with active crisis directly to elective surgery without stabilization.",
      "Cancel tumor evaluation permanently because MG is unstable today.",
      "Assume tumor removal will immediately correct active respiratory failure."
    ],
    "answer": 0,
    "explanation": "The tumor requires action, but uncontrolled respiratory weakness raises perioperative risk.",
    "reviewHref": "#thymectomy-phenotype"
  },
  {
    "id": "mg-crisis-rescue-choice-case",
    "concept": "crisis-rescue-choice",
    "lesson": "crisis-rescue",
    "difficulty": "Applied",
    "prompt": "A patient with MuSK positive crisis needs rapid therapy and has stable vascular access and hemodynamics. What is the best response?",
    "choices": [
      "Use long latency azathioprine alone as immediate crisis rescue.",
      "Consider plasma exchange while continuing comprehensive ICU care.",
      "Wait for an oral steroid-sparing drug to work before providing ventilation.",
      "Use higher-dose oral pyridostigmine as the sole rescue for respiratory failure."
    ],
    "answer": 1,
    "explanation": "MuSK disease often responds especially well to plasma exchange, which acts rapidly.",
    "reviewHref": "#crisis-rescue"
  },
  {
    "id": "mg-crisis-trigger-case",
    "concept": "crisis-trigger",
    "lesson": "crisis-rescue",
    "difficulty": "Applied",
    "prompt": "A stable patient worsens after pneumonia and a new fluoroquinolone prescription. What is the best response?",
    "choices": [
      "Treat the weakness without evaluating infection, aspiration, or recent medication changes.",
      "Stop all infection treatment because some antibiotics can worsen MG.",
      "Escalate respiratory care, treat infection with an MG aware regimen, and review the new exposure.",
      "Dismiss the new drug exposure because pneumonia already explains the deterioration."
    ],
    "answer": 2,
    "explanation": "Crisis care must address both immune weakness and its precipitating cause.",
    "reviewHref": "#crisis-rescue"
  },
  {
    "id": "mg-fcrn-mechanism-case",
    "concept": "fcrn-mechanism",
    "lesson": "fcrn-targeted-therapy",
    "difficulty": "Applied",
    "prompt": "A patient asks why immunoglobulin products may be less effective during FcRn treatment. What is the best response?",
    "choices": [
      "Describe FcRn blockers as drugs that directly destroy the thymus.",
      "Explain that FcRn blockade increases the half-life of every therapeutic IgG.",
      "Explain that the interaction is caused solely by reduced intestinal absorption.",
      "Explain that altered FcRn recycling can lower exposure to IgG based therapies."
    ],
    "answer": 3,
    "explanation": "The same recycling pathway affects pathogenic IgG and some therapeutic Fc containing products.",
    "reviewHref": "#fcrn-targeted-therapy"
  },
  {
    "id": "mg-fcrn-products-case",
    "concept": "fcrn-products",
    "lesson": "fcrn-targeted-therapy",
    "difficulty": "Applied",
    "prompt": "A 13 year old has AChR positive generalized MG after inadequate conventional therapy. What is the best response?",
    "choices": [
      "Evaluate nipocalimab because its current indication includes patients age 12 and older.",
      "Treat all FcRn labels as identical because the class mechanism is shared.",
      "Prescribe adult-only rozanolixizumab without reviewing pediatric eligibility.",
      "Assume all FcRn drugs share an adolescent indication."
    ],
    "answer": 0,
    "explanation": "Nipocalimab is the current FcRn option with a labeled adolescent indication.",
    "reviewHref": "#fcrn-targeted-therapy"
  },
  {
    "id": "mg-fcrn-safety-case",
    "concept": "fcrn-safety",
    "lesson": "fcrn-targeted-therapy",
    "difficulty": "Applied",
    "prompt": "A patient scheduled for a new Rystiggo cycle has an active febrile infection. What is the best response?",
    "choices": [
      "Administer a live vaccine during treatment without reviewing the product label.",
      "Delay treatment and evaluate the infection according to current labeling.",
      "Proceed because fever proves the next cycle is urgently required.",
      "Treat live vaccination during active IgG lowering as a substitute for infection evaluation."
    ],
    "answer": 1,
    "explanation": "Active infection and immune planning must be resolved before additional IgG lowering.",
    "reviewHref": "#fcrn-targeted-therapy"
  },
  {
    "id": "mg-complement-selection-case",
    "concept": "complement-selection",
    "lesson": "complement-targeted-therapy",
    "difficulty": "Applied",
    "prompt": "An adult with MuSK positive MG asks for zilucoplan based solely on class marketing. What is the best response?",
    "choices": [
      "Use an AChR specific complement indication as proof of benefit in every MuSK patient.",
      "Use a positive MuSK result as equivalent to AChR positivity for the label.",
      "Explain that the current MG label is for AChR positive adults and consider phenotype appropriate options.",
      "Assume any generalized weakness meets the labeled antibody criterion."
    ],
    "answer": 2,
    "explanation": "Complement mediated end plate injury and trial evidence are most established in AChR positive disease.",
    "reviewHref": "#complement-targeted-therapy"
  },
  {
    "id": "mg-meningococcal-risk-case",
    "concept": "meningococcal-risk",
    "lesson": "complement-targeted-therapy",
    "difficulty": "Applied",
    "prompt": "A vaccinated patient taking ravulizumab develops fever, severe headache, and a new rash. What is the best response?",
    "choices": [
      "Tell a vaccinated patient that fever and neck stiffness can safely wait until the next visit.",
      "Schedule assessment at the next infusion because vaccination excludes infection.",
      "Use absence of neck stiffness to rule out infection despite the other warning findings.",
      "Arrange immediate emergency evaluation for meningococcal infection."
    ],
    "answer": 3,
    "explanation": "Vaccination does not eliminate the susceptibility created by terminal complement blockade.",
    "reviewHref": "#complement-targeted-therapy"
  },
  {
    "id": "mg-zilucoplan-pancreas-case",
    "concept": "zilucoplan-pancreas",
    "lesson": "complement-targeted-therapy",
    "difficulty": "Applied",
    "prompt": "A patient on zilucoplan develops persistent epigastric pain and vomiting with elevated lipase. What is the best response?",
    "choices": [
      "Stop further doses and urgently evaluate suspected pancreatitis.",
      "Ignore new severe abdominal pain because the medicine is subcutaneous.",
      "Continue dosing until imaging proves a pancreatic cyst.",
      "Treat vomiting symptomatically and defer pancreatic assessment despite elevated lipase."
    ],
    "answer": 0,
    "explanation": "Current labeling directs pancreatic evaluation and interruption when pancreatitis is suspected.",
    "reviewHref": "#complement-targeted-therapy"
  },
  {
    "id": "mg-medication-cautions-case",
    "concept": "medication-cautions",
    "lesson": "cautions-life-stages",
    "difficulty": "Applied",
    "prompt": "A patient with MG receives a new fluoroquinolone prescription for a nonurgent infection with alternatives available. What is the best response?",
    "choices": [
      "Give every patient an unqualified instruction to stop all listed medicines immediately.",
      "Contact the prescriber promptly to select a safer effective option.",
      "Stop every chronic medicine without contacting the treating team.",
      "Assume an oral antibiotic cannot affect neuromuscular transmission."
    ],
    "answer": 1,
    "explanation": "Fluoroquinolones carry an FDA boxed warning for worsening MG, and alternatives should be considered.",
    "reviewHref": "#cautions-life-stages"
  },
  {
    "id": "mg-life-stage-planning-case",
    "concept": "life-stage-planning",
    "lesson": "cautions-life-stages",
    "difficulty": "Applied",
    "prompt": "A patient with prior crisis is planning pregnancy and elective surgery in the next year. What is the best response?",
    "choices": [
      "Wait until active labor or the operating room to disclose severe bulbar disease and current treatment.",
      "Assume pregnancy cannot change MG or medication risk.",
      "Create coordinated reproductive and perioperative plans before medication or procedural changes.",
      "Stop all MG therapy before conception without specialist review."
    ],
    "answer": 2,
    "explanation": "Advance planning protects ventilation, fetal and neonatal safety, and continuity of MG control.",
    "reviewHref": "#cautions-life-stages"
  }
];

// Original product-specific dosing cases.
myastheniaGravisQuestionBank.push(
  {
    id: "mg-vyvgart-dose-cap", concept: "efgartigimod-dose-cap", difficulty: "Applied",
    prompt: "A 130 kg adult is prescribed intravenous Vyvgart for gMG. What dose is consistent with the current label?",
    choices: ["1,300 mg because weight-based dosing has no cap", "1,200 mg because the label caps the dose at weights of at least 120 kg", "1,000 mg because the Hytrulo syringe dose applies to IV treatment", "130 mg because the dose is 1 mg/kg"],
    answer: 1, explanation: "Although 130 multiplied by 10 is 1,300 mg, the IV label specifies 1,200 mg for patients weighing at least 120 kg. The subcutaneous presentations use different fixed doses.", reviewHref: "#fcrn-targeted-therapy",
  },
  {
    id: "mg-hytrulo-presentation", concept: "hytrulo-administrator", difficulty: "Applied",
    prompt: "A patient trained to self-inject Hytrulo receives a single-dose vial instead of the prescribed prefilled syringe. What should the pharmacist do?",
    choices: ["Tell the patient that both presentations have identical home-use instructions", "Advise injecting the vial intravenously", "Resolve the dispensing discrepancy because the vial requires administration by a healthcare professional", "Use the prefilled-syringe dose and injection time for the vial without review"],
    answer: 2, explanation: "The label permits trained patient or caregiver administration of the prefilled syringe. The vial has different dose and administration details and is for healthcare-professional administration.", reviewHref: "#fcrn-targeted-therapy",
  },
);

myastheniaGravisQuestionBank.push(
  {
    id: "mg-rystiggo-weight-boundary", concept: "rystiggo-weight-band", difficulty: "Applied",
    prompt: "An adult weighing exactly 50 kg is starting Rystiggo for eligible gMG. Which US labeled dose applies?",
    choices: ["420 mg because 50 kg belongs to the lower band", "560 mg because the middle band begins at 50 kg", "840 mg because all adult patients receive the largest vial", "350 mg calculated as a universal 7 mg/kg dose"],
    answer: 1, explanation: "The US label uses weight bands: below 50 kg, 420 mg; 50 to below 100 kg, 560 mg; at least 100 kg, 840 mg. Do not substitute a trial dose or another jurisdiction's table.", reviewHref: "#fcrn-targeted-therapy",
  },
  {
    id: "mg-imaavy-infusion-volume", concept: "imaavy-infusion-preparation", difficulty: "Applied",
    prompt: "A 35 kg, 13-year-old with AChR-positive gMG is receiving the initial Imaavy infusion. Which preparation and administration plan matches the label?",
    choices: ["525 mg in 250 mL over 15 minutes as the initial dose", "1,050 mg as an undiluted IV push", "1,050 mg in a final volume of 100 mL over at least 30 minutes, followed by 30 minutes of observation", "1,050 mg subcutaneously with no observation"],
    answer: 2, explanation: "The initial dose is 30 mg/kg: 35 x 30 = 1,050 mg. Eligible patients below 40 kg use 100 mL final dilution volume; the loading infusion lasts at least 30 minutes and post-infusion observation lasts 30 minutes.", reviewHref: "#fcrn-targeted-therapy",
  },
);

myastheniaGravisQuestionBank.push(
  {
    id: "mg-eculizumab-rescue-ivig", concept: "complement-rescue-supplementation", difficulty: "Applied",
    prompt: "An adult receiving Soliris for gMG needs an acute rescue IVIG course. Which statement matches the Soliris label?",
    choices: ["Give the ravulizumab 600 mg supplemental dose within four hours", "Acute rescue IVIG requires no supplemental Soliris dose; distinguish it from scheduled IVIG", "Stop all future Soliris doses permanently", "Give 300 mg before every IVIG infusion using the fresh frozen plasma protocol"],
    answer: 1, explanation: "Soliris distinguishes acute rescue IVIG from scheduled IVIG, for which dose and timing adjustments apply. Ravulizumab and fresh frozen plasma instructions are not interchangeable with this situation.", reviewHref: "#complement-targeted-therapy",
  },
  {
    id: "mg-ultomiris-first-maintenance", concept: "ravulizumab-loading-transition", difficulty: "Applied",
    prompt: "A 70 kg adult with eligible gMG has just received a 2,700 mg Ultomiris loading infusion. What is the first maintenance dose and timing?",
    choices: ["3,300 mg eight weeks after loading", "2,700 mg two weeks after loading", "3,300 mg two weeks after loading", "1,200 mg one week after loading"],
    answer: 2, explanation: "At 60 to below 100 kg, ravulizumab maintenance is 3,300 mg. The first maintenance dose is two weeks after loading; subsequent maintenance doses are every eight weeks.", reviewHref: "#complement-targeted-therapy",
  },
);

myastheniaGravisQuestionBank.push(
  {
    id: "mg-azathioprine-allopurinol", concept: "azathioprine-xanthine-oxidase", difficulty: "Applied",
    prompt: "A patient taking azathioprine for MG presents a new allopurinol prescription with no change to azathioprine. What requires resolution before dispensing the combination?",
    choices: ["Allopurinol may substantially increase azathioprine toxicity, requiring a coordinated dose reduction or alternative", "Allopurinol accelerates azathioprine clearance, so double its dose", "Normal TPMT eliminates this interaction", "Separating doses by two hours prevents marrow toxicity"],
    answer: 0, explanation: "Xanthine oxidase inhibition reduces azathioprine inactivation. Normal TPMT and dose spacing do not remove the interaction; the prescriber must coordinate dosing and blood-count monitoring.", reviewHref: "#conventional-immunotherapy",
  },
  {
    id: "mg-rituximab-hbv-screen", concept: "rituximab-hbv-screening", difficulty: "Applied",
    prompt: "Before off-label rituximab for MG, HBsAg is negative but anti-HBc is positive. What is the appropriate interpretation?",
    choices: ["Negative HBsAg excludes all HBV reactivation risk", "Prior HBV exposure still requires specialist prevention and monitoring planning", "Only the first infusion carries HBV risk", "Vaccination alone replaces reactivation-risk management"],
    answer: 1, explanation: "Rituximab can reactivate HBV in HBsAg-negative, anti-HBc-positive patients. Assess both markers and coordinate an HBV management plan before treatment.", reviewHref: "#conventional-immunotherapy",
  },
);

myastheniaGravisQuestionBank.push(
  {
    id: "mg-neonatal-observation", concept: "transient-neonatal-mg", difficulty: "Applied",
    prompt: "A mother’s MG remained well controlled throughout pregnancy. Which neonatal plan is appropriate?",
    choices: ["No observation is needed because maternal control excludes neonatal weakness", "Arrange observation for feeding and respiratory weakness, which may emerge after birth", "Diagnose permanent inherited MG in every newborn", "Assume a normal first examination excludes later symptoms"],
    answer: 1, explanation: "Maternal antibodies can cause transient neonatal MG despite good maternal control. Feeding and respiratory findings may appear after the initial newborn examination.", reviewHref: "#cautions-life-stages",
  },
  {
    id: "mg-checkpoint-overlap", concept: "checkpoint-inhibitor-overlap", difficulty: "Applied",
    prompt: "During checkpoint-inhibitor cancer treatment, a patient develops new ptosis, dysphagia and breathlessness. What is the priority?",
    choices: ["Wait for routine follow-up because fatigue is expected", "Increase exercise until the eyelid weakness resolves", "Urgently assess for MG with possible myositis/myocarditis overlap and involve oncology and neurology", "Exclude MG if pulse oximetry is normal"],
    answer: 2, explanation: "Checkpoint inhibitors can trigger dangerous neuromuscular disease with skeletal and cardiac muscle inflammation. Bulbar and respiratory symptoms need urgent assessment.", reviewHref: "#cautions-life-stages",
  },
);

myastheniaGravisQuestionBank.push({
  id: "mg-ivig-course-calculation", concept: "ivig-total-course", difficulty: "Applied",
  prompt: "A crisis IVIG order specifies 2 g/kg total, divided equally over five days, using a confirmed dosing weight of 60 kg. How much is given each day?",
  choices: ["120 g each day", "24 g each day", "12 g each day", "0.4 g each day"],
  answer: 1, explanation: "The course is 2 g/kg x 60 kg = 120 g total. Dividing by five gives 24 g/day. Giving the total course daily would deliver five times the intended total.", reviewHref: "#crisis-rescue",
});
