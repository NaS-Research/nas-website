// Original case questions. Coverage follows clinical decisions, not a fixed question quota.
export const raynaudPhenomenonQuestionBank = [
  {
    "id": "raynaud-attack-pattern-case",
    "conceptGroup": "attack-pattern",
    "lesson": "recognition-classification",
    "difficulty": "Applied",
    "question": "A patient reports sharply demarcated white fingers after freezer exposure followed by blue color and painful redness during rewarming. What is the best response?",
    "choices": [
      "Recognize a typical vasospastic sequence and classify its severity and context.",
      "Diagnose persistent acrocyanosis without considering the recovery sequence.",
      "Exclude Raynaud because redness follows the blue phase.",
      "Diagnose arterial embolism solely from the transient white phase."
    ],
    "answer": 0,
    "explanation": "The trigger, episodic course, demarcation, and reperfusion pattern support Raynaud while still requiring classification.",
    "reviewHref": "#recognition-classification"
  },
  {
    "id": "raynaud-primary-secondary-case",
    "conceptGroup": "primary-secondary",
    "lesson": "recognition-classification",
    "difficulty": "Applied",
    "question": "A 46-year-old develops new asymmetric attacks, fingertip ulceration, reflux, and skin tightening. What is the best response?",
    "choices": [
      "Classify as primary because cold triggers the episodes.",
      "Evaluate urgently for systemic sclerosis and tissue-threatening secondary Raynaud.",
      "Treat reflux alone and defer assessment of the ulcer.",
      "Exclude connective-tissue disease because only one hand is worse."
    ],
    "answer": 1,
    "explanation": "Later onset, asymmetry, tissue injury, and connective-tissue features make primary disease unlikely.",
    "reviewHref": "#recognition-classification"
  },
  {
    "id": "raynaud-mimics-case",
    "conceptGroup": "mimics",
    "lesson": "recognition-classification",
    "difficulty": "Applied",
    "question": "One toe remains blue and painful for hours with a diminished pedal pulse and no rewarming response. What is the best response?",
    "choices": [
      "Reassure that a prior Raynaud diagnosis explains persistent pulse loss.",
      "Schedule routine review after trying warmer socks for a month.",
      "Treat the finding as possible fixed arterial ischemia and obtain urgent vascular evaluation.",
      "Treat as uncomplicated pernio without assessing perfusion."
    ],
    "answer": 2,
    "explanation": "Persistent unilateral ischemia and pulse loss are not a typical benign vasospastic pattern.",
    "reviewHref": "#recognition-classification"
  },
  {
    "id": "raynaud-vascular-tone-case",
    "conceptGroup": "vascular-tone",
    "lesson": "vascular-physiology",
    "difficulty": "Applied",
    "question": "A patient develops predictable attacks during cold exposure and emotional stress despite normal large-vessel pulses. What is the best response?",
    "choices": [
      "Explain that normal pulses exclude small-vessel vasospasm.",
      "Explain that stress-triggered attacks must be psychiatric rather than vascular.",
      "Explain that transient attacks prove permanent arterial occlusion.",
      "Explain transient small-vessel vasoconstriction and focus prevention on trigger and vascular-tone control."
    ],
    "answer": 3,
    "explanation": "Normal large-vessel pulses can coexist with severe episodic digital arteriolar spasm.",
    "reviewHref": "#vascular-physiology"
  },
  {
    "id": "raynaud-reperfusion-case",
    "conceptGroup": "reperfusion",
    "lesson": "vascular-physiology",
    "difficulty": "Applied",
    "question": "A patient experiences redness and throbbing as the fingers warm and color normalizes completely. What is the best response?",
    "choices": [
      "Use gradual rewarming and document the complete recovery pattern.",
      "Diagnose thrombosis solely because warming causes throbbing.",
      "Apply scalding water to accelerate recovery.",
      "Start antibiotics solely because reperfusion makes the skin red."
    ],
    "answer": 0,
    "explanation": "Reactive hyperemia can be painful but should restore perfusion rather than leave persistent tissue compromise.",
    "reviewHref": "#vascular-physiology"
  },
  {
    "id": "raynaud-critical-ischemia-mechanism-case",
    "conceptGroup": "critical-ischemia-mechanism",
    "lesson": "vascular-physiology",
    "difficulty": "Applied",
    "question": "A systemic sclerosis patient has persistent fingertip pallor, severe rest pain, and a nonhealing ulcer. What is the best response?",
    "choices": [
      "Continue routine follow-up if the radial pulse remains palpable.",
      "Activate an urgent ischemia pathway and evaluate both vasospasm and fixed vascular injury.",
      "Wait for complete necrosis before arranging vascular evaluation.",
      "Treat the ulcer with moisturizer alone because vasospasm is reversible."
    ],
    "answer": 1,
    "explanation": "Threatened tissue can reflect several interacting mechanisms and cannot wait for routine follow-up.",
    "reviewHref": "#vascular-physiology"
  },
  {
    "id": "raynaud-history-case",
    "conceptGroup": "history",
    "lesson": "evaluation-red-flags",
    "difficulty": "Applied",
    "question": "A patient cannot name the color sequence but has photographs, new dysphagia, and morning hand swelling. What is the best response?",
    "choices": [
      "Reject Raynaud unless the patient can name all three colors in sequence.",
      "Ignore the photographs because no attack occurred in clinic.",
      "Use the photographs and systemic history to guide focused secondary-disease evaluation.",
      "Attribute dysphagia to Raynaud without investigating systemic disease."
    ],
    "answer": 2,
    "explanation": "The full phenotype matters more than requiring a textbook triphasic sequence.",
    "reviewHref": "#evaluation-red-flags"
  },
  {
    "id": "raynaud-examination-case",
    "conceptGroup": "examination",
    "lesson": "evaluation-red-flags",
    "difficulty": "Applied",
    "question": "A patient is asymptomatic in clinic but has nailfold abnormalities and a healing digital ulcer. What is the best response?",
    "choices": [
      "Classify the condition as primary because skin color is normal today.",
      "Ignore the ulcer history once the wound starts to close.",
      "Defer further evaluation until a complete attack is witnessed in clinic.",
      "Treat the examination as evidence of secondary vasculopathy and pursue specialist evaluation."
    ],
    "answer": 3,
    "explanation": "Raynaud is episodic, so between-attack findings and tissue history carry major diagnostic weight.",
    "reviewHref": "#evaluation-red-flags"
  },
  {
    "id": "raynaud-capillaroscopy-labs-case",
    "conceptGroup": "capillaroscopy-labs",
    "lesson": "evaluation-red-flags",
    "difficulty": "Applied",
    "question": "A young adult has symmetric attacks, normal pulses, normal nailfolds, no ulcers, and no systemic symptoms. What is the best response?",
    "choices": [
      "Use proportionate evaluation and longitudinal reassessment rather than an unlimited laboratory search.",
      "Order repeated broad antibody panels indefinitely despite an unchanged low-risk phenotype.",
      "Use the current normal findings to exclude secondary disease permanently.",
      "Obtain urgent invasive angiography solely because attacks are cold-triggered."
    ],
    "answer": 0,
    "explanation": "Low-risk primary patterns need clinical follow-up, while new red flags should reopen the workup.",
    "reviewHref": "#evaluation-red-flags"
  },
  {
    "id": "raynaud-warming-case",
    "conceptGroup": "warming",
    "lesson": "nonpharmacologic-prevention",
    "difficulty": "Applied",
    "question": "A grocery employee has daily attacks while stocking a freezer aisle. What is the best response?",
    "choices": [
      "Keep the torso lightly dressed and warm only one fingertip after each attack.",
      "Use layered clothing, insulated gloves, scheduled warming, and workplace exposure planning.",
      "Use direct high-temperature heating pads on numb fingers.",
      "Escalate vasodilators without changing repeated freezer exposure."
    ],
    "answer": 1,
    "explanation": "Preventing core and local cooling is more reliable than reacting after repeated attacks begin.",
    "reviewHref": "#nonpharmacologic-prevention"
  },
  {
    "id": "raynaud-trigger-removal-case",
    "conceptGroup": "trigger-removal",
    "lesson": "nonpharmacologic-prevention",
    "difficulty": "Applied",
    "question": "A patient with new attacks uses nicotine, pseudoephedrine, and an amphetamine stimulant. What is the best response?",
    "choices": [
      "Escalate the vasodilator before documenting OTC and nicotine exposure.",
      "Treat pseudoephedrine as irrelevant because it is nonprescription.",
      "Assess necessity and coordinate safer exposure reduction before assuming treatment failure.",
      "Keep the exposure history unchanged and judge failure only from pill adherence."
    ],
    "answer": 2,
    "explanation": "Multiple vasoconstrictors can raise attack burden and compound ischemic risk.",
    "reviewHref": "#nonpharmacologic-prevention"
  },
  {
    "id": "raynaud-self-monitoring-case",
    "conceptGroup": "self-monitoring",
    "lesson": "nonpharmacologic-prevention",
    "difficulty": "Applied",
    "question": "A patient reports fewer attacks but worsening fingertip pain and a new ulcer. What is the best response?",
    "choices": [
      "Declare treatment successful based only on the lower attack count.",
      "Wait for the next season before evaluating the new ulcer.",
      "Stop recording pain because frequency is the only useful endpoint.",
      "Escalate based on tissue injury despite the lower attack count."
    ],
    "answer": 3,
    "explanation": "A reduction in frequency is not success when ischemic severity is worsening.",
    "reviewHref": "#nonpharmacologic-prevention"
  },
  {
    "id": "raynaud-nifedipine-case",
    "conceptGroup": "nifedipine",
    "lesson": "dihydropyridine-therapy",
    "difficulty": "Applied",
    "question": "A systemic sclerosis patient has frequent attacks despite excellent thermal protection and has adequate blood pressure. What is the best response?",
    "choices": [
      "Start and deliberately titrate long-acting nifedipine with response and safety monitoring.",
      "Use immediate-release nifedipine as unsupervised rescue whenever a finger turns white.",
      "Begin chronic oral corticosteroids solely to treat the attacks.",
      "Use an oral antibiotic as first-line vasospasm prevention in the absence of infection."
    ],
    "answer": 0,
    "explanation": "The evidence and guideline position support dihydropyridine therapy as the usual first oral strategy.",
    "reviewHref": "#dihydropyridine-therapy"
  },
  {
    "id": "raynaud-amlodipine-case",
    "conceptGroup": "amlodipine",
    "lesson": "dihydropyridine-therapy",
    "difficulty": "Applied",
    "question": "A patient improves on amlodipine but develops troublesome ankle edema and dizziness. What is the best response?",
    "choices": [
      "Increase the dose because edema proves adequate peripheral circulation.",
      "Reassess dose and strategy rather than ignoring dose-limiting toxicity.",
      "Ignore dizziness because a long-acting formulation cannot lower blood pressure.",
      "Add another vasodilator before assessing blood pressure and tolerability."
    ],
    "answer": 1,
    "explanation": "Long-acting therapy still produces systemic vasodilation and adverse effects that shape adherence and safety.",
    "reviewHref": "#dihydropyridine-therapy"
  },
  {
    "id": "raynaud-ccb-monitoring-case",
    "conceptGroup": "ccb-monitoring",
    "lesson": "dihydropyridine-therapy",
    "difficulty": "Applied",
    "question": "A patient has fewer attacks but near-syncope after the latest dose increase. What is the best response?",
    "choices": [
      "Continue the higher dose because fewer attacks outweigh near-syncope.",
      "Add topical nitrate without reassessing blood pressure.",
      "Reduce or change the regimen and reassess combined hypotensive exposures.",
      "Attribute near-syncope to Raynaud and keep titrating automatically."
    ],
    "answer": 2,
    "explanation": "Clinical benefit does not justify symptomatic hypotension or unsafe falls.",
    "reviewHref": "#dihydropyridine-therapy"
  },
  {
    "id": "raynaud-pde5-evidence-case",
    "conceptGroup": "pde5-evidence",
    "lesson": "pde5-escalation",
    "difficulty": "Applied",
    "question": "A systemic sclerosis patient remains significantly symptomatic despite tolerated first-line oral therapy. What is the best response?",
    "choices": [
      "Add sildenafil before asking about topical nitrate use.",
      "Declare all further treatment ineffective because a calcium-channel blocker was insufficient.",
      "Use bosentan as a proven substitute for reducing routine Raynaud attacks.",
      "Discuss PDE5 inhibitor escalation after a complete interaction and hemodynamic review."
    ],
    "answer": 3,
    "explanation": "PDE5 therapy is an evidence-supported escalation option, not an automatic first step for every phenotype.",
    "reviewHref": "#pde5-escalation"
  },
  {
    "id": "raynaud-pde5-nitrate-case",
    "conceptGroup": "pde5-nitrate",
    "lesson": "pde5-escalation",
    "difficulty": "Applied",
    "question": "A patient using topical nitroglycerin for a painful digit asks to add sildenafil. What is the best response?",
    "choices": [
      "Do not combine the therapies and redesign the vasodilator plan.",
      "Combine them because a fingertip application cannot enter the circulation.",
      "Combine them at lower doses and rely only on home blood-pressure checks.",
      "Separate applications by one hour and consider the interaction eliminated."
    ],
    "answer": 0,
    "explanation": "Topical nitrate can be systemically absorbed and remains part of the contraindication.",
    "reviewHref": "#pde5-escalation"
  },
  {
    "id": "raynaud-pde5-safety-case",
    "conceptGroup": "pde5-safety",
    "lesson": "pde5-escalation",
    "difficulty": "Applied",
    "question": "A patient taking an alpha blocker and several antihypertensives has baseline lightheadedness. What is the best response?",
    "choices": [
      "Start sildenafil immediately because off-label treatment has fewer interaction restrictions.",
      "Stabilize the hemodynamic regimen and reassess whether PDE5 therapy is safe.",
      "Increase the alpha blocker to compensate for sildenafil vasodilation.",
      "Judge safety from sitting blood pressure alone and ignore baseline lightheadedness."
    ],
    "answer": 1,
    "explanation": "Additive vasodilation can produce symptomatic hypotension and requires deliberate sequencing.",
    "reviewHref": "#pde5-escalation"
  },
  {
    "id": "raynaud-topical-nitrate-case",
    "conceptGroup": "topical-nitrate",
    "lesson": "topical-nitrate-safety",
    "difficulty": "Applied",
    "question": "A patient applies extra ointment to several fingers and develops severe headache and dizziness. What is the best response?",
    "choices": [
      "Apply more ointment because headache indicates a need for higher local exposure.",
      "Ignore dizziness because topical medicines cannot cause hypotension.",
      "Remove excess exposure as directed, assess blood pressure, and correct the application plan.",
      "Add sildenafil to reduce the amount of ointment needed while continuing both."
    ],
    "answer": 2,
    "explanation": "Dose and surface area affect systemic nitrate exposure even when the treatment target is local.",
    "reviewHref": "#topical-nitrate-safety"
  },
  {
    "id": "raynaud-nitrate-counseling-case",
    "conceptGroup": "nitrate-counseling",
    "lesson": "topical-nitrate-safety",
    "difficulty": "Applied",
    "question": "A caregiver accidentally contacts ointment left on the patient's skin. What is the best response?",
    "choices": [
      "Reassure the caregiver that nitrate ointment cannot be absorbed through contact.",
      "Use an unmeasured larger amount to compensate for possible transfer.",
      "Recommend any covering without checking the product and prescribing instructions.",
      "Revise application and covering instructions to prevent secondary exposure."
    ],
    "answer": 3,
    "explanation": "A local treatment can affect another person if transfer precautions are absent.",
    "reviewHref": "#topical-nitrate-safety"
  },
  {
    "id": "raynaud-urgent-signs-case",
    "conceptGroup": "urgent-signs",
    "lesson": "critical-ischemia",
    "difficulty": "Applied",
    "question": "A finger remains pale and exquisitely painful after warming and develops reduced sensation. What is the best response?",
    "choices": [
      "Arrange emergency vascular and specialist assessment for threatened tissue.",
      "Wait until the next routine appointment if a wrist pulse is present.",
      "Use increasingly hot water despite reduced sensation.",
      "Record the attack and seek help only if the finger becomes black."
    ],
    "answer": 0,
    "explanation": "Persistent perfusion loss with neurologic change can precede irreversible tissue injury.",
    "reviewHref": "#critical-ischemia"
  },
  {
    "id": "raynaud-iloprost-case",
    "conceptGroup": "iloprost",
    "lesson": "critical-ischemia",
    "difficulty": "Applied",
    "question": "Severe systemic-sclerosis Raynaud persists with tissue threat despite tolerated oral therapy. What is the best response?",
    "choices": [
      "Continue routine oral titration while deferring evaluation of threatened tissue.",
      "Escalate urgently to specialist-directed intravenous prostanoid therapy and vascular evaluation.",
      "Dispense IV iloprost for unsupervised home rescue during cold exposure.",
      "Treat with wound dressings alone without assessing digital circulation."
    ],
    "answer": 1,
    "explanation": "This is the setting in which guideline-supported intravenous iloprost becomes relevant.",
    "reviewHref": "#critical-ischemia"
  },
  {
    "id": "raynaud-ulcer-workup-case",
    "conceptGroup": "ulcer-workup",
    "lesson": "critical-ischemia",
    "difficulty": "Applied",
    "question": "A patient has a draining fingertip ulcer, escalating pain, and surrounding erythema. What is the best response?",
    "choices": [
      "Use antibiotics alone and assume perfusion will recover once redness improves.",
      "Increase vasodilation alone without evaluating drainage or infection.",
      "Evaluate urgently for infection and ischemia while coordinating wound and vascular care.",
      "Wait for a routine follow-up because ulcers are expected in secondary Raynaud."
    ],
    "answer": 2,
    "explanation": "Infection and poor perfusion can reinforce one another and threaten the digit.",
    "reviewHref": "#critical-ischemia"
  },
  {
    "id": "raynaud-medication-induced-case",
    "conceptGroup": "medication-induced",
    "lesson": "secondary-disease",
    "difficulty": "Applied",
    "question": "Attacks begin after a stimulant dose increase in a patient with otherwise low-risk features. What is the best response?",
    "choices": [
      "Add a vasodilator before reviewing stimulant timing and dose.",
      "Assume prescribed stimulants cannot contribute to digital symptoms.",
      "Keep the dose unchanged and permanently classify the attacks as primary.",
      "Coordinate a risk-benefit review and safer treatment plan rather than adding therapy reflexively."
    ],
    "answer": 3,
    "explanation": "Temporal association can reveal a modifiable cause, but medication changes still require clinical ownership.",
    "reviewHref": "#secondary-disease"
  },
  {
    "id": "raynaud-systemic-sclerosis-case",
    "conceptGroup": "systemic-sclerosis",
    "lesson": "secondary-disease",
    "difficulty": "Applied",
    "question": "A patient with improved attacks develops dyspnea, reflux, and progressive skin tightening. What is the best response?",
    "choices": [
      "Evaluate systemic-sclerosis organ involvement rather than simply renewing the vasodilator.",
      "Renew nifedipine alone because improved color proves systemic control.",
      "Attribute new dyspnea to cold hands without investigating cardiopulmonary disease.",
      "Defer systemic evaluation until the digital attacks recur."
    ],
    "answer": 0,
    "explanation": "Controlling digital vasospasm does not control every systemic disease pathway.",
    "reviewHref": "#secondary-disease"
  },
  {
    "id": "raynaud-treatment-timeline-case",
    "conceptGroup": "treatment-timeline",
    "lesson": "longitudinal-care",
    "difficulty": "Applied",
    "question": "Several vasodilators appear on the list, but no one knows which was effective or why each was stopped. What is the best response?",
    "choices": [
      "Restart every listed vasodilator simultaneously to identify the effective one.",
      "Reconstruct the timeline before adding another drug.",
      "Assume every listed medicine failed despite missing response records.",
      "Add another medicine without documenting current exposure or adverse effects."
    ],
    "answer": 1,
    "explanation": "Without exposure, response, and toxicity data, escalation can repeat failure and compound harm.",
    "reviewHref": "#longitudinal-care"
  },
  {
    "id": "raynaud-patient-handoff-case",
    "conceptGroup": "patient-handoff",
    "lesson": "longitudinal-care",
    "difficulty": "Applied",
    "question": "A patient asks when a cold-triggered attack requires emergency care. What is the best response?",
    "choices": [
      "Seek emergency care for every brief attack that resolves completely with gentle warming.",
      "Wait several days for persistent pallor and numbness before calling.",
      "Teach that failure to rewarm, severe persistent pain, ulcer, weakness or numbness, infection, or necrosis requires urgent help.",
      "Use the presence of a wrist pulse as the only criterion for staying home."
    ],
    "answer": 2,
    "explanation": "Clear escalation thresholds reduce delay when tissue is threatened.",
    "reviewHref": "#longitudinal-care"
  },
  {
    "id": "raynaud-riociguat-case",
    "conceptGroup": "riociguat",
    "lesson": "pde5-escalation",
    "difficulty": "Applied",
    "question": "A patient with systemic sclerosis takes riociguat for pulmonary arterial hypertension. Sildenafil is proposed for persistent Raynaud attacks. Which response is appropriate?",
    "choices": [
      "Add sildenafil if the patient has no nitrate prescription.",
      "Do not combine sildenafil with riociguat; coordinate an alternative plan with the treating specialists.",
      "Separate the drugs by one hour to remove the interaction.",
      "Use the combination with weekly blood-pressure checks only."
    ],
    "answer": 1,
    "explanation": "Sildenafil and riociguat are contraindicated together because of potentiated hypotension. Absence of nitrate use does not remove this separate contraindication; dose spacing or monitoring does not make the combination acceptable.",
    "reviewHref": "#pde5-escalation"
  },
  {
    "id": "raynaud-ulcer-endpoint-case",
    "conceptGroup": "ulcer-endpoint",
    "lesson": "critical-ischemia",
    "difficulty": "Applied",
    "question": "A systemic sclerosis patient asks whether bosentan is intended to heal the current ischemic fingertip ulcer. Which explanation best reflects EULAR recommendations?",
    "choices": [
      "Bosentan replaces wound care because it directly treats infection.",
      "Every endothelin receptor antagonist has the same proven ulcer-healing benefit.",
      "Bosentan is considered to reduce new ulcers; active-ulcer treatment may include PDE5 inhibition and/or IV iloprost alongside wound and perfusion care.",
      "Bosentan is recommended only for brief uncomplicated primary Raynaud attacks."
    ],
    "answer": 2,
    "explanation": "The recommendation for bosentan concerns prevention of new systemic-sclerosis digital ulcers. It should not be presented as an established active-ulcer healing treatment, generalized to the ERA class, or substituted for evaluation of an ischemic wound.",
    "reviewHref": "#critical-ischemia"
  },
  {
    "id": "raynaud-nitrate-timing-case",
    "conceptGroup": "nitrate-timing",
    "lesson": "topical-nitrate-safety",
    "difficulty": "Applied",
    "question": "A patient took sildenafil yesterday and wants to restart topical nitroglycerin independently because 24 hours have elapsed. Which advice is most accurate?",
    "choices": [
      "Twenty-four hours guarantees safe nitrate administration for every patient.",
      "Topical nitrate is exempt from the interaction regardless of timing.",
      "One blood-pressure reading establishes that nitrate administration is safe.",
      "Do not restart independently; obtain a clinician-directed plan because the sildenafil label does not establish that nitrates are safe even at 24 hours."
    ],
    "answer": 3,
    "explanation": "Sildenafil labeling states that the time when nitrates can safely be administered is unknown, including at 24 hours. Individual exposure and interacting medicines matter. This is not permission to self-alternate therapies; topical nitroglycerin remains a nitrate.",
    "reviewHref": "#topical-nitrate-safety"
  },
  {
    "id": "raynaud-methylphenidate-case",
    "conceptGroup": "methylphenidate",
    "lesson": "secondary-disease",
    "difficulty": "Applied",
    "question": "A patient develops new fingertip wounds while taking Concerta at the prescribed dose. Which interpretation is appropriate?",
    "choices": [
      "Therapeutic dosing excludes medication-associated vascular injury.",
      "Concerta is methylphenidate, and its peripheral-vasculopathy warning warrants prompt assessment of these wounds.",
      "Concerta is an amphetamine, so stop all prescribed medicines without assessment.",
      "Only recreational stimulants can cause digital vascular symptoms."
    ],
    "answer": 1,
    "explanation": "Methylphenidate is a CNS stimulant with a labeled Raynaud warning. Reports include therapeutic doses and digital ulceration. New unexplained wounds require prompt clinical assessment rather than reassurance based on the prescribed dose.",
    "reviewHref": "#secondary-disease"
  },
  {
    "id": "raynaud-propranolol-review-case",
    "conceptGroup": "propranolol-review",
    "lesson": "secondary-disease",
    "difficulty": "Applied",
    "question": "Attacks worsen after propranolol is started for angina. Which plan best addresses both vascular symptoms and the original indication?",
    "choices": [
      "Stop propranolol abruptly at home.",
      "Double propranolol to improve fingertip circulation.",
      "Coordinate review of the antianginal regimen and digital perfusion; avoid abrupt withdrawal.",
      "Ignore the timing because beta blockers cannot affect peripheral circulation."
    ],
    "answer": 2,
    "explanation": "Propranolol labeling reports Raynaud-type arterial insufficiency and warns that abrupt withdrawal can exacerbate angina or precipitate myocardial infarction. The clinician must balance the original indication against peripheral symptoms and plan any change.",
    "reviewHref": "#secondary-disease"
  },
  {
    "id": "raynaud-chemotherapy-causality-case",
    "conceptGroup": "chemotherapy-causality",
    "lesson": "secondary-disease",
    "difficulty": "Applied",
    "question": "Raynaud symptoms begin during a bleomycin-containing combination regimen. Which conclusion is supported by its labeling?",
    "choices": [
      "The timing proves that cisplatin alone caused the symptoms.",
      "Combination-regimen reports exclude bleomycin as a contributor.",
      "Any digital discoloration requires independently stopping every cancer drug.",
      "Assess perfusion and coordinate oncology review; reported cases do not establish one causal factor."
    ],
    "answer": 3,
    "explanation": "Bleomycin labeling describes Raynaud reports with combination regimens and occasional single-agent use. Disease, vascular compromise, medicines and electrolyte abnormalities may contribute. Association warrants assessment but does not identify one cause or authorize unsupervised cancer-treatment changes.",
    "reviewHref": "#secondary-disease"
  }
];
