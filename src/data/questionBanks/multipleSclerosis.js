const courseQuestions = [
  {
    "id": "ms-course-mri-activity",
    "conceptGroup": "mri-activity",
    "lesson": "disease-course-targets",
    "difficulty": "Applied",
    "question": "Surveillance MRI shows a new T2 lesion despite no clinical attacks this year. Is disease activity absent?",
    "choices": [
      "Yes, without symptoms",
      "No; MRI can demonstrate activity",
      "Yes, unless disability increases",
      "No; this alone establishes SPMS"
    ],
    "answer": 1,
    "explanation": "Clinical stability does not exclude MRI activity.",
    "reviewHref": "#disease-course-targets"
  },
  {
    "id": "ms-course-residual-deficit",
    "conceptGroup": "residual-deficit",
    "lesson": "disease-course-targets",
    "difficulty": "Applied",
    "question": "Foot weakness persists after one relapse. Does that finding alone establish secondary progressive MS?",
    "choices": [
      "Yes, any residual deficit does",
      "Yes, if a DMT was prescribed",
      "No; establish the longitudinal course",
      "Yes, if the residual deficit persists for six months"
    ],
    "answer": 2,
    "explanation": "A stable residual deficit can reflect incomplete attack recovery. Secondary progression requires a longitudinal pattern of accumulating disability; persistence of one deficit alone is insufficient.",
    "reviewHref": "#disease-course-targets"
  },
  {
    "id": "ms-course-time-window",
    "conceptGroup": "time-window",
    "lesson": "disease-course-targets",
    "difficulty": "Applied",
    "question": "A chart says active MS without dates. What information makes this description more useful?",
    "choices": [
      "The observation interval and supporting events",
      "Only the lifetime relapse total",
      "Only the first diagnosis date",
      "Only the current medication name"
    ],
    "answer": 0,
    "explanation": "Activity descriptors need a time frame.",
    "reviewHref": "#disease-course-targets"
  },
  {
    "id": "ms-course-ppms-course",
    "conceptGroup": "ppms-course",
    "lesson": "disease-course-targets",
    "difficulty": "Applied",
    "question": "Disability has increased gradually from disease onset without a preceding relapsing-remitting phase. Which course should the specialist evaluate?",
    "choices": [
      "Secondary progressive",
      "Relapsing-remitting by definition",
      "Clinically isolated syndrome by definition",
      "Primary progressive"
    ],
    "answer": 3,
    "explanation": "Primary and secondary progressive courses differ in their earlier history.",
    "reviewHref": "#disease-course-targets"
  },
  {
    "id": "ms-course-progression-assessment",
    "conceptGroup": "progression-assessment",
    "lesson": "disease-course-targets",
    "difficulty": "Applied",
    "question": "Walking deteriorates over a year without attacks. What should follow?",
    "choices": [
      "Reassure solely because relapse count is zero",
      "Assess objective change, other causes and treatment fit",
      "Give high-dose steroids automatically",
      "Assume the decline is medication nonadherence"
    ],
    "answer": 1,
    "explanation": "Gradual decline requires assessment rather than automatic attribution.",
    "reviewHref": "#disease-course-targets"
  },
  {
    "id": "ms-course-selection-priorities",
    "conceptGroup": "selection-priorities",
    "lesson": "disease-course-targets",
    "difficulty": "Applied",
    "question": "A patient has frequent attacks, incomplete recovery and pregnancy plans. What belongs in initial DMT selection?",
    "choices": [
      "Convenience alone",
      "Efficacy alone, with pregnancy deferred until conception",
      "Joint assessment of disease risk, safety and reproductive goals",
      "One standard drug for every newly diagnosed patient"
    ],
    "answer": 2,
    "explanation": "Treatment selection must incorporate both disease and patient factors.",
    "reviewHref": "#disease-course-targets"
  },
  {
    "id": "ms-course-dmt-expectation",
    "conceptGroup": "dmt-expectation",
    "lesson": "disease-course-targets",
    "difficulty": "Applied",
    "question": "A patient expects a DMT to immediately reverse longstanding weakness. What counseling is appropriate?",
    "choices": [
      "It replaces rehabilitation",
      "It guarantees complete neurologic recovery",
      "Its benefit can be judged after one dose",
      "Disease control and symptom rehabilitation have different roles"
    ],
    "answer": 3,
    "explanation": "Preventing future activity does not guarantee reversal of established injury.",
    "reviewHref": "#disease-course-targets"
  },
  {
    "id": "ms-course-response-baseline",
    "conceptGroup": "response-baseline",
    "lesson": "disease-course-targets",
    "difficulty": "Applied",
    "question": "Before starting a DMT, which record best supports later response assessment?",
    "choices": [
      "Only the dispensing date",
      "Baseline function, MRI, attacks and a follow-up plan",
      "Only the preferred route",
      "Only the number of previous prescriptions"
    ],
    "answer": 1,
    "explanation": "Response assessment needs comparable baseline and follow-up evidence.",
    "reviewHref": "#disease-course-targets"
  }
];

const diagnosticQuestions = [
  {
    "id": "ms-diagnosis-nonspecific-mri",
    "conceptGroup": "nonspecific-mri",
    "lesson": "recognition-diagnosis",
    "difficulty": "Applied",
    "question": "A migraine evaluation finds nonspecific white-matter spots. There is no objective demyelinating syndrome. What is the next diagnostic step?",
    "choices": [
      "Count every spot toward MS criteria",
      "Assess lesion morphology and alternative causes",
      "Diagnose relapsing MS from headache episodes",
      "Start a DMT to test whether the spots respond"
    ],
    "answer": 1,
    "explanation": "Nonspecific MRI abnormalities require contextual assessment.",
    "reviewHref": "#recognition-diagnosis"
  },
  {
    "id": "ms-diagnosis-optic-location",
    "conceptGroup": "optic-location",
    "lesson": "recognition-diagnosis",
    "difficulty": "Applied",
    "question": "Optic-nerve injury and a typical periventricular lesion are objectively supported, with no better cause. How many diagnostic anatomical regions are represented?",
    "choices": [
      "One",
      "Two",
      "Three",
      "Five"
    ],
    "answer": 1,
    "explanation": "The optic nerve is a separate region.",
    "reviewHref": "#recognition-diagnosis"
  },
  {
    "id": "ms-diagnosis-csf-substitute",
    "conceptGroup": "csf-substitute",
    "lesson": "recognition-diagnosis",
    "difficulty": "Applied",
    "question": "Oligoclonal-band testing is unavailable. Which result can serve as the accepted alternative in the current diagnostic framework?",
    "choices": [
      "Elevated serum IgG alone",
      "Elevated CSF protein alone",
      "Positive kappa free-light-chain index",
      "Elevated IgG index alone"
    ],
    "answer": 2,
    "explanation": "The kappa index can substitute for oligoclonal bands; IgG index cannot.",
    "reviewHref": "#recognition-diagnosis"
  },
  {
    "id": "ms-diagnosis-optic-time",
    "conceptGroup": "optic-time",
    "lesson": "recognition-diagnosis",
    "difficulty": "Applied",
    "question": "A clinician proposes that worsening serial OCT alone proves dissemination in time. What is the appropriate interpretation?",
    "choices": [
      "Any retinal thinning proves it",
      "It proves it only after one month",
      "It proves it if VEP is also abnormal",
      "This use of serial OCT is not established"
    ],
    "answer": 3,
    "explanation": "Optic-location evidence is distinct from evidence of time.",
    "reviewHref": "#recognition-diagnosis"
  },
  {
    "id": "ms-diagnosis-progressive-cord",
    "conceptGroup": "progressive-cord",
    "lesson": "recognition-diagnosis",
    "difficulty": "Applied",
    "question": "A patient has 18 months of objective progression and two typical spinal-cord lesions. What can these lesions establish within the progressive framework?",
    "choices": [
      "Dissemination in space",
      "Dissemination in time by themselves",
      "A relapsing-remitting course",
      "Exclusion of compressive myelopathy"
    ],
    "answer": 0,
    "explanation": "Progressive presentations have a cord-location exception; other requirements remain.",
    "reviewHref": "#recognition-diagnosis"
  },
  {
    "id": "ms-diagnosis-older-specificity",
    "conceptGroup": "older-specificity",
    "lesson": "recognition-diagnosis",
    "difficulty": "Applied",
    "question": "A 61-year-old with hypertension has MRI abnormalities suspected to represent MS. What strengthens diagnostic specificity?",
    "choices": [
      "Counting headache episodes as relapses",
      "Using age alone to exclude MS",
      "Seeking additional cord, CSF or central-vein evidence",
      "Ignoring vascular disease after finding one periventricular lesion"
    ],
    "answer": 2,
    "explanation": "Older age and vascular risk warrant additional support.",
    "reviewHref": "#recognition-diagnosis"
  },
  {
    "id": "ms-diagnosis-initial-adem",
    "conceptGroup": "initial-adem",
    "lesson": "recognition-diagnosis",
    "difficulty": "Applied",
    "question": "A child presents with an initial ADEM episode. How should MS criteria be used at this visit?",
    "choices": [
      "Apply immediately if any brain lesion is present",
      "Do not apply them during this initial ADEM presentation",
      "Diagnose progressive MS if encephalopathy lasts a week",
      "Diagnose MS solely from steroid responsiveness"
    ],
    "answer": 1,
    "explanation": "An initial ADEM presentation is a specific diagnostic safeguard.",
    "reviewHref": "#recognition-diagnosis"
  },
  {
    "id": "ms-diagnosis-incidental-evidence",
    "conceptGroup": "incidental-evidence",
    "lesson": "recognition-diagnosis",
    "difficulty": "Applied",
    "question": "Incidental imaging is highly characteristic of MS, and additional diagnostic requirements are fulfilled after excluding better explanations. Must diagnosis always wait for a clinical attack?",
    "choices": [
      "Yes, regardless of the additional findings",
      "Yes, unless the patient has progressive disability",
      "No, selected incidental presentations can qualify",
      "No, because every incidental lesion is diagnostic"
    ],
    "answer": 2,
    "explanation": "Selected radiologically isolated presentations can satisfy current criteria.",
    "reviewHref": "#recognition-diagnosis"
  }
];

// Original oral-therapy cases use alternatives addressing the same clinical decision.
const oralCases = [
  ["dmf-dose", "A new Tecfidera prescription is being checked. Which schedule matches its labeled initiation?", "120 mg twice daily for seven days, then 240 mg twice daily", ["240 mg twice daily from the first dose", "120 mg once daily for seven days, then 240 mg twice daily", "462 mg twice daily from day one"], "The starting strength is a titration step, not the routine maintenance dose. The 462 mg dose belongs to a different fumarate product.", "Foundational"],
  ["drf-capsules", "Vumerity is supplied as 231 mg capsules. How many capsules are needed for one 462 mg maintenance dose?", "Two capsules", ["One capsule", "Four capsules", "Half a capsule"], "462 divided by 231 equals two capsules per dose. Twice-daily use therefore requires four capsules over the day; capsules stay intact.", "Foundational"],
  ["mmf-capsules", "A patient has completed the first week of Bafiertam. Which maintenance instruction is correct?", "Take two 95 mg capsules twice daily", ["Take two 95 mg capsules once daily", "Take one 95 mg capsule twice daily", "Take four 95 mg capsules with each twice-daily dose"], "Each maintenance dose contains 190 mg. Two doses give 380 mg daily; this is not a milligram-for-milligram substitution for the other fumarates.", "Applied"],
  ["food-product", "A patient takes Vumerity with a 900-calorie meal containing 45 g of fat. What should the pharmacist recommend?", "Change the dose-time meal to meet Vumerity food limits", ["Keep the meal because food instructions are identical for all fumarates", "Reduce only meal calories while keeping the same fat content", "Reduce only meal fat while keeping the same calorie content"], "Vumerity has product-specific food and alcohol instructions. Its meal limits cannot be replaced by another fumarate product's counseling.", "Applied"],
  ["fumarate-overlap", "A medication list contains active Tecfidera and a new Bafiertam prescription. What needs resolution before dispensing?", "Confirm a switch and discontinue the previous fumarate rather than overlap", ["Overlap both for a week to prevent a treatment gap", "Keep Tecfidera until the Bafiertam starter week ends", "Continue both at half their usual maintenance doses"], "These products converge on the same active fumarate exposure. A planned switch requires clear stop/start instructions, not duplicate treatment.", "Applied"],
  ["fumarate-alc", "Lymphocyte counts have remained 0.4 × 10⁹/L for seven months during fumarate therapy. The patient has no new symptoms. What is appropriate?", "Review interruption with the prescriber and follow lymphocyte recovery", ["Continue unchanged until an infection develops", "Continue until the count falls below 0.2 × 10⁹/L", "Stop treatment but omit recovery monitoring"], "Persistent severe lymphopenia is a safety signal even without symptoms. Recovery monitoring remains relevant after interruption.", "Applied"],
  ["fumarate-pml", "A patient on a fumarate develops progressive clumsiness and cognitive change over several weeks. What is the safest response?", "Withhold treatment and urgently evaluate for PML and other causes", ["Wait for the next routine blood count before acting", "Treat presumptively as an MS relapse without evaluating infection", "Continue the fumarate unless MRI first confirms PML"], "New progressive neurologic changes need diagnostic assessment. Neither a familiar MS diagnosis nor the routine monitoring calendar justifies delaying evaluation.", "Applied"],
  ["fumarate-gi", "A patient on a fumarate reports severe worsening abdominal pain and black stools. They do not take aspirin. What is appropriate?", "Stop the medicine and obtain urgent evaluation", ["Reassure that serious GI injury requires aspirin exposure", "Treat every episode as routine early nausea", "Crush the next capsule to reduce irritation"], "Severe symptoms with possible bleeding require urgent assessment. The lack of aspirin use does not exclude the labeled serious gastrointestinal reactions.", "Applied"],
  ["teri-persistence", "A woman stops teriflunomide and plans conception next week. What must be addressed?", "Accelerated elimination and verified clearance before conception", ["Assume exposure ends with the final tablet", "Use the next menstrual period as a drug level", "Take a smaller tablet until pregnancy is confirmed"], "Stopping dosing is different from clearing a persistent medicine. The reproductive plan must include contraception through verified clearance.", "Applied"],
  ["teri-elimination", "Which prescription matches a standard teriflunomide accelerated-elimination option?", "Oral activated charcoal 50 g every 12 hours for 11 days", ["Activated charcoal 50 mg once", "Cholestyramine 8 mg once weekly", "Activated charcoal 50 g once monthly"], "The regimen uses gram quantities and repeated treatment. Confusing grams with milligrams creates a thousand-fold quantity error.", "Foundational"],
  ["teri-liver", "Teriflunomide-related liver injury is suspected. Which plan is appropriate?", "Stop, begin accelerated elimination, and follow liver tests weekly until normalized", ["Continue unchanged until the next annual check", "Reduce the tablet and omit further liver testing", "Use renal function alone to decide whether to continue"], "A suspected hepatic injury needs active removal and follow-up. Normal kidney function cannot establish hepatic safety.", "Applied"],
  ["teri-interaction", "A patient taking teriflunomide has rosuvastatin 20 mg daily on the medication list. What should be clarified?", "Reduce or revise lipid therapy because the labeled rosuvastatin maximum is 10 mg daily with teriflunomide", ["Increase rosuvastatin because teriflunomide lowers all drug exposure", "Keep the regimen because the medicines treat different conditions", "Separate rosuvastatin and teriflunomide by two hours without changing the dose"], "An interaction review concerns exposure, not whether indications overlap. The prescriber should select a compatible lipid-lowering plan.", "Applied"],
  ["teri-wound", "A persistent mucocutaneous ulcer develops during teriflunomide treatment despite appropriate local care. Which response matches the current warning?", "Evaluate a drug association and consider discontinuation with accelerated elimination", ["Exclude a drug effect solely because treatment was previously tolerated", "Increase teriflunomide to speed wound healing", "Ignore the ulcer unless a new MS relapse occurs"], "The updated warning makes persistent ulcers and impaired healing part of the treatment review. A temporal association warrants assessment rather than an automatic diagnosis.", "Applied"],
  ["teri-warfarin", "Warfarin and teriflunomide are used together. Which monitoring statement is correct?", "Monitor INR closely because it may decrease", ["Assume INR must increase with every interaction", "Stop INR monitoring because teriflunomide is not an anticoagulant", "Choose a fixed warfarin increase without INR results"], "Interaction direction matters. Dose decisions should follow measured anticoagulant response rather than an assumed universal increase in drug effects.", "Applied"],
];

const oralQuestions = oralCases.map(([key, question, correct, distractors, explanation, difficulty], index) => {
  const choices = [correct, ...distractors];
  const answer = index % choices.length;
  [choices[0], choices[answer]] = [choices[answer], choices[0]];
  return { id: `ms-oral-${key}`, conceptGroup: key, lesson: "oral-platform", difficulty, question, choices, answer, explanation, reviewHref: "#oral-platform" };
});

const s1pCases = [
  ["ozanimod-hepatic", "An ozanimod patient develops jaundice and dark urine. What should happen now?", "Interrupt treatment and promptly assess hepatic enzymes", ["Continue until the next routine monitoring visit", "Resume immediately if nausea improves", "Use the normal pretreatment tests to exclude injury"], "New hepatic symptoms require action. Resumption needs a plausible alternative explanation for the suspected injury."],
  ["siponimod-pres", "A patient taking siponimod develops seizures and visual disturbance; the emergency team suspects PRES. What is the medication response?", "Discontinue siponimod while the urgent evaluation proceeds", ["Continue until MRI definitively proves PRES", "Increase siponimod for a presumed relapse", "Delay evaluation until the next scheduled eye examination"], "Suspected PRES warrants stopping treatment and prompt assessment. Waiting for routine surveillance can delay care."],
  ["ponesimod-cryptococcus", "Cryptococcal meningitis is suspected in a patient taking ponesimod. What should happen during the diagnostic evaluation?", "Suspend ponesimod until cryptococcal infection is excluded", ["Continue unchanged until the infection is culture-confirmed", "Double ponesimod to prevent neurologic worsening", "Substitute a routine blood count for the infection workup"], "The label calls for suspension during evaluation of suspected cryptococcal infection; confirmed infection requires appropriate treatment."],
  ["fingolimod-observation", "An eligible adult is starting fingolimod. Which initial observation plan is appropriate?", "At least six hours with hourly pulse/BP and ECG before and after observation", ["No observation if the first capsule is taken with food", "A single pulse measurement before dosing only", "Automatic discharge at six hours regardless of rhythm findings"], "First-dose cardiac effects require monitored initiation. Abnormal findings can extend monitoring; six hours is not an unconditional discharge time."],
  ["fingolimod-restart", "A patient misses one full day of fingolimod during the second treatment week. What needs to happen before the next dose?", "Arrange repeat first-dose procedures", ["Resume at home because the gap is under 14 days", "Double the next capsule to replace the missed dose", "Use the maintenance restart rule regardless of treatment week"], "Restart thresholds depend on how long therapy has been established. The early-treatment rule is stricter than the rule after the first month."],
  ["siponimod-dose", "An adult with CYP2C9 *1/*3 is starting siponimod. Which maintenance plan follows the labeled pathway?", "1 mg daily from day 5 after the four-day titration", ["2 mg daily immediately without titration", "2 mg daily from day 6 regardless of genotype", "1 mg daily from day 6 after a five-day titration"], "The *1/*3 pathway uses reduced maintenance dosing. Genotype determines the titration pack and the maintenance prescription."],
  ["siponimod-contra", "CYP2C9 testing reports *3/*3 before siponimod initiation. What is appropriate?", "Select an alternative because siponimod is contraindicated", ["Use the standard 2 mg daily maintenance dose", "Use 1 mg daily after titration because the genotype lowers metabolism", "Use 0.25 mg daily without further titration"], "This genotype produces substantially increased exposure. Cardiac screening cannot remove a pharmacogenetic contraindication."],
  ["rare-allele", "A siponimod candidate has an uncommon CYP2C9 loss-of-function allele not covered by the usual dosing table. What is the safest approach?", "Obtain specialist interpretation rather than assuming normal metabolism", ["Automatically assign the normal-function dose", "Ignore the result if the patient has no liver disease", "Choose maintenance dosing solely from body weight"], "The label identifies uncertainty for less common variants. Absence from a short dosing table is not evidence of normal function."],
  ["ozanimod-liver", "Ozanimod is selected for an adult with Child-Pugh B hepatic impairment. After standard initial titration, what maintenance schedule is labeled?", "0.92 mg every other day", ["0.92 mg twice daily", "0.46 mg three times daily", "0.92 mg daily without a hepatic adjustment"], "Mild or moderate hepatic impairment changes maintenance frequency after the usual titration. This is different from the severe-hepatic-impairment recommendation."],
  ["ozanimod-gap", "A patient misses an ozanimod dose on treatment day 10. What does the US label require?", "Restart using the titration regimen", ["Resume maintenance because the first seven days are complete", "Take two maintenance capsules tomorrow", "Apply ponesimod's four-missed-dose threshold"], "The ozanimod early interruption window extends through the first two weeks, beyond its initial seven-day titration."],
  ["ponesimod-titration", "A Ponvory starter pack has been taken correctly through day 11. What dose is used on days 12, 13 and 14?", "10 mg once daily", ["20 mg once daily", "2 mg once daily", "10 mg twice daily"], "The last three titration days remain at 10 mg daily. The 20 mg maintenance dose starts on day 15."],
  ["ponesimod-gap", "A patient on maintenance ponesimod misses four consecutive daily doses. What is needed?", "Restart from day 1 with a new starter pack and indicated cardiac observation", ["Resume 20 mg immediately without reviewing monitoring", "Take 80 mg once to catch up", "Restart only the final three titration days"], "Four consecutive missed doses triggers full retitration. Repeat first-dose observation applies to patients for whom it is recommended."],
  ["vaccine-interval", "A patient stops siponimod and assumes the ten-day contraception interval also permits a live vaccine. What is the correction?", "Live-vaccine timing is separate; the reviewed guidance uses four weeks after stopping siponimod", ["All post-treatment precautions end at ten days", "Live vaccination is unrestricted while taking siponimod", "Contraception is a substitute for vaccine screening"], "Reproductive and immune-effect intervals address different risks. The vaccine plan also needs clinical assessment and coordinated treatment timing."],
  ["ozanimod-linezolid", "Linezolid is proposed for a patient currently taking ozanimod. What requires urgent clarification?", "The MAO-inhibitor contraindication and selection of a compatible treatment plan", ["A presumed lack of interaction because linezolid is an antibiotic", "Whether both medicines can be taken with the same meal", "Whether separating doses by two hours removes the interaction"], "Linezolid has MAO-inhibitory activity. A drug's therapeutic category does not establish interaction safety, and dose spacing does not resolve this contraindication."],
  ["s1p-continuity", "Insurance loss will interrupt fingolimod tomorrow. Which action best protects the patient?", "Escalate the access problem and arrange a monitored continuity or transition plan", ["Wait for symptoms before contacting the MS team", "Assume prior disease control persists indefinitely after stopping", "Resume later without checking the gap or cardiac requirements"], "An unplanned interruption can create disease-reactivation risk and alter restart requirements. Timely coordination addresses both problems."],
];
const s1pQuestions = s1pCases.map(([key, question, correct, distractors, explanation], index) => {
  const choices = [correct, ...distractors];
  const answer = index % choices.length;
  [choices[0], choices[answer]] = [choices[answer], choices[0]];
  return { id: `ms-s1p-${key}`, conceptGroup: key, lesson: "s1p-modulators", difficulty: "Applied", question, choices, answer, explanation, reviewHref: "#s1p-modulators" };
});

const biologicCases = [
  ["natalizumab-pml-repeat", "PML remains suspected despite negative initial testing. What follows?", "Withhold natalizumab and repeat evaluation", ["Restart at half dose", "Restart if anti-JCV antibodies are negative", "Wait for the next routine MRI while continuing"], "Negative initial testing does not resolve persistent clinical suspicion."],
  ["natalizumab-hypersensitivity", "Natalizumab hypersensitivity resolves after treatment. Which future plan is appropriate?", "Do not re-treat with natalizumab", ["Restart at half the infusion rate", "Use premedication alone before rechallenge", "Resume after a six-month interruption"], "Its hypersensitivity pathway differs from infusion-rate adjustment for certain other biologics."],
  ["natalizumab-newborn", "A newborn was exposed to natalizumab in utero. What monitoring is specifically recommended?", "Obtain a complete blood count", ["Only anti-JCV antibody testing", "Only liver enzymes", "No testing unless bruising appears"], "Prenatal exposure can cause neonatal anemia and thrombocytopenia."],
  ["natalizumab-lactation-evidence", "Does the 2026 matched breastfeeding cohort prove natalizumab has no infant risk?", "No; reassuring pooled observational outcomes have limits", ["Yes; matching establishes randomized equivalence", "Yes; all exposed infants received natalizumab", "No human infant follow-up exists"], "The cohort included multiple agents and followed infants for 6 to 36 months; rare or later effects remain uncertain."],
  ["briumvi-severe-restart", "A severe, non-life-threatening Briumvi infusion reaction at 100 mL/hour resolves fully after interruption and treatment. The clinician authorizes restart. Which rate fits the label?", "50 mL/hour", ["25 mL/hour", "100 mL/hour", "200 mL/hour"], "Restart at half the rate at reaction onset, with supervision and subsequent product-specific adjustment."],
  ["ocrevus-life-threatening", "A life-threatening Ocrevus infusion reaction has been treated successfully. What is the future treatment decision?", "Permanently discontinue Ocrevus", ["Restart at half rate once symptoms resolve", "Give the next infusion with extra antihistamine alone", "Reduce the next dose by half"], "The restart pathway for a severe reaction does not apply to a life-threatening or disabling reaction."],
  ["kesimpta-return", "Kesimpta spent two days at 24°C and then returned to refrigeration. What is the remaining use window?", "Seven days after returning, then discard", ["Until the original expiration regardless of the excursion", "Thirty more days", "One more month at room temperature"], "Returning it does not reset its shelf life."],
  ["briumvi-volume", "At 25 mg/mL, how much Briumvi supplies a 450-mg dose?", "18 mL", ["6 mL", "12 mL", "25 mL"], "450 divided by 25 equals 18 mL."],
  ["ocrelizumab-formulation", "An order specifies ocrelizumab but omits route and formulation. What should happen before preparation?", "Clarify the exact product and administration plan", ["Select whichever formulation is stocked", "Convert the IV volume directly to a subcutaneous dose", "Let the patient choose after preparation"], "The formulations have different doses and administration requirements."],
  ["ocrelizumab-igg", "Recurrent serious infections accompany prolonged low IgG during Ocrevus treatment. What is appropriate?", "Reassess continuation and consider discontinuation with specialist management", ["Continue automatically because infusions were tolerated", "Stop immune monitoring after the next dose", "Use relapse control alone to establish safety"], "Infection burden and immune recovery matter alongside disease control."],
  ["ocrelizumab-liver", "New jaundice follows Ocrevus exposure; evaluation identifies liver injury without another cause. What is appropriate?", "Discontinue Ocrevus and manage the liver injury", ["Continue because viral hepatitis tests are negative", "Wait for another infusion to confirm recurrence", "Reduce only the infusion rate"], "Nonviral drug-related injury can occur; rechallenge is not needed to justify action."],
  ["natalizumab-bleeding", "Petechiae and unexplained bleeding develop during natalizumab therapy. What next?", "Discontinue and urgently evaluate suspected thrombocytopenia", ["Continue until the next routine visit", "Increase the dose", "Assume bruising excludes a drug effect"], "Prompt assessment prevents delay in treating a potentially serious blood disorder."],
  ["natalizumab-negative", "A natalizumab patient has a negative anti-JCV antibody result. Which conclusion is justified?", "Risk is lower but not absent; periodic reassessment remains needed", ["PML is permanently excluded", "New neurologic symptoms need no evaluation", "Future testing is unnecessary"], "False-negative results and subsequent infection can occur."],
  ["hbv-core", "Before anti-CD20 treatment, HBsAg is negative and anti-HBc is positive. What follows?", "Obtain a liver specialist's reactivation-prevention plan", ["Treat the negative surface antigen as complete clearance", "Omit further HBV assessment", "Use vaccination alone to exclude prior infection"], "Prior exposure remains relevant despite a negative surface antigen."],
  ["bcell-recovery", "A patient stopped Briumvi but still has depleted B cells. Can a live vaccine be given solely because dosing stopped?", "No; defer until B-cell repletion and review the vaccine plan", ["Yes; the final infusion ends the live-vaccine restriction", "Yes; a normal total white-cell count is sufficient", "Yes; six months have elapsed even if B cells remain depleted"], "Treatment cessation does not establish immune recovery."],
  ["kesimpta-allergy", "Anaphylaxis occurs after a previously tolerated Kesimpta regimen. What is required?", "Emergency treatment and permanent discontinuation", ["An unsupervised smaller next dose", "Routine rechallenge because earlier injections were tolerated", "Dose spacing alone"], "Prior tolerance does not exclude hypersensitivity."],
  ["ocrelizumab-colitis", "Persistent new diarrhea develops months into ocrelizumab treatment. What warrants assessment?", "Possible immune-mediated colitis and other causes", ["Only immediate infusion reactions", "Automatic attribution to MS", "No evaluation unless the first dose was yesterday"], "Delayed gastrointestinal toxicity remains possible."],
  ["ocrevus-pediatric", "A 12-year-old weighing 30 kg starts Ocrevus IV for RRMS. Which initial dose fits the current label?", "150 mg, repeated two weeks later", ["300 mg, repeated two weeks later", "920 mg subcutaneously", "600 mg as one initial infusion"], "Age, weight and formulation determine the regimen."],
  ["zunovo-observation", "How long is minimum observation after the first Zunovo injection?", "One hour", ["Fifteen minutes", "No observation", "Only the injection duration"], "The shorter fifteen-minute minimum applies to subsequent injections."],
  ["kesimpta-calendar", "Kesimpta injections were completed at weeks 0, 1 and 2. When is the next scheduled dose?", "Week 4", ["Week 3", "Week 8", "Six months after the first dose"], "Loading is followed by monthly maintenance beginning at week 4."],
  ["briumvi-calendar", "When is the third Briumvi infusion scheduled after correctly completed initiation?", "24 weeks after the first infusion", ["24 weeks after the second infusion", "Two weeks after the second infusion", "Every month after the second infusion"], "The initial infusion anchors the first maintenance interval."],
];
const biologicQuestions = biologicCases.map(([key, question, correct, distractors, explanation], index) => {
  const choices = [correct, ...distractors];
  const answer = index % choices.length;
  [choices[0], choices[answer]] = [choices[answer], choices[0]];
  const lesson = key.startsWith("natalizumab-") ? "natalizumab-safety" : "high-efficacy-biologics";
  return { id: `ms-biologic-${key}`, conceptGroup: key, lesson, difficulty: "Applied", question, choices, answer, explanation, reviewHref: `#${lesson}` };
});

const reconstitutionQuestions = [
{
  "id": "ms-cladribine-boundary",
  "conceptGroup": "cladribine-boundary",
  "lesson": "immune-reconstitution",
  "difficulty": "Applied",
  "question": "A patient weighs exactly 90 kg. What are the first/second cycle tablet totals?",
  "choices": [
    "8/7",
    "9/8",
    "9/9",
    "10/9"
  ],
  "answer": 1,
  "explanation": "Use the band starting at 90 kg; these are cycle totals.",
  "reviewHref": "#immune-reconstitution"
},
{
  "id": "ms-cladribine-low-count",
  "conceptGroup": "cladribine-low-count",
  "lesson": "immune-reconstitution",
  "difficulty": "Applied",
  "question": "At month two, lymphocytes are 180 cells/µL. What next?",
  "choices": [
    "Wait until month six to recheck because the dosing cycle ended",
    "Repeat counts monthly but omit prophylaxis unless a rash appears",
    "Monthly counts through month six and herpes prophylaxis; hold therapy",
    "Stop blood-count monitoring once tablets are held"
  ],
  "answer": 2,
  "explanation": "This count crosses the labeled severe-lymphopenia action threshold.",
  "reviewHref": "#immune-reconstitution"
},

{
  "id": "ms-cladribine-missed",
  "conceptGroup": "cladribine-missed",
  "lesson": "immune-reconstitution",
  "difficulty": "Applied",
  "question": "An entire Mavenclad dosing day was missed. What next?",
  "choices": [
    "Double tomorrow",
    "Omit it permanently",
    "Take the missed dose next day and extend the cycle",
    "Restart the annual course"
  ],
  "answer": 2,
  "explanation": "Preserve the prescribed total without doubling.",
  "reviewHref": "#immune-reconstitution"
},
{
  "id": "ms-cladribine-interaction",
  "conceptGroup": "cladribine-interaction",
  "lesson": "immune-reconstitution",
  "difficulty": "Applied",
  "question": "A patient takes curcumin during a Mavenclad cycle. Is three-hour separation sufficient?",
  "choices": [
    "Yes, for every interaction",
    "No; review the transporter interaction and seek an alternative",
    "Only if taken with food",
    "Only if tablets are crushed"
  ],
  "answer": 1,
  "explanation": "Routine oral separation does not replace management of potent transporter inhibitors.",
  "reviewHref": "#immune-reconstitution"
},
{
  "id": "ms-cladribine-mri",
  "conceptGroup": "cladribine-mri",
  "lesson": "immune-reconstitution",
  "difficulty": "Applied",
  "question": "Before first Mavenclad treatment, the latest MRI is nine months old. What is needed?",
  "choices": [
    "No imaging",
    "An MRI only after symptoms",
    "A baseline MRI within three months",
    "An MRI after the second year only"
  ],
  "answer": 2,
  "explanation": "Current baseline imaging supports later PML evaluation.",
  "reviewHref": "#immune-reconstitution"
},
{
  "id": "ms-alemtuzumab-stroke",
  "conceptGroup": "alemtuzumab-stroke",
  "lesson": "alemtuzumab-safety",
  "difficulty": "Applied",
  "question": "One day after Lemtrada, sudden facial droop and arm weakness develop. What next?",
  "choices": [
    "Wait for the infusion clinic tomorrow",
    "Emergency stroke assessment",
    "Take the next infusion first",
    "Check routine thyroid tests"
  ],
  "answer": 1,
  "explanation": "Acute focal deficits need emergency assessment; an MS diagnosis must not delay it.",
  "reviewHref": "#alemtuzumab-safety"
},
{
  "id": "ms-alemtuzumab-delayed-bleeding",
  "conceptGroup": "alemtuzumab-delayed-bleeding",
  "lesson": "alemtuzumab-safety",
  "difficulty": "Applied",
  "question": "Five years after Lemtrada, unexplained bruising develops. What next?",
  "choices": [
    "Dismiss after 48 months",
    "Wait for another course",
    "Prompt evaluation including CBC",
    "Stop surveillance permanently"
  ],
  "answer": 2,
  "explanation": "The scheduled monitoring window does not exclude later toxicity.",
  "reviewHref": "#alemtuzumab-safety"
},
{
  "id": "ms-alemtuzumab-vaccine",
  "conceptGroup": "alemtuzumab-vaccine",
  "lesson": "alemtuzumab-safety",
  "difficulty": "Applied",
  "question": "Varicella vaccination was given two weeks before planned Lemtrada. What next?",
  "choices": [
    "Start today",
    "Wait until six weeks after vaccination",
    "Start if rash is absent",
    "Substitute antiviral prophylaxis for the interval"
  ],
  "answer": 1,
  "explanation": "Vaccination lead time is separate from antiviral prophylaxis.",
  "reviewHref": "#alemtuzumab-safety"
},
{
  id: "ms-alemtuzumab-pregnancy", conceptGroup: "alemtuzumab-pregnancy", lesson: "alemtuzumab-safety", difficulty: "Applied",
  question: "A patient plans conception six weeks after a Lemtrada course. Which counseling is appropriate?",
  choices: ["Contraception ends with the infusion", "Continue effective contraception through four months after the course", "A normal CBC removes the waiting interval", "Use the cladribine interval instead"], answer: 1,
  explanation: "The interval is drug-specific; subsequent pregnancy also requires attention to thyroid disease.", reviewHref: "#alemtuzumab-safety",
}, {
  id: "ms-alemtuzumab-lactation", conceptGroup: "alemtuzumab-lactation", lesson: "alemtuzumab-safety", difficulty: "Applied",
  question: "How should breastfeeding during Lemtrada therapy be discussed?",
  choices: ["Human milk studies establish safety", "Low maternal symptoms establish infant safety", "Individualize the benefit-risk discussion because human data are absent", "Use Mavenclad's ten-day rule automatically"], answer: 2,
  explanation: "One drug's labeling does not establish another's lactation plan.", reviewHref: "#alemtuzumab-safety",
}, {
  id: "ms-alemtuzumab-renal", conceptGroup: "alemtuzumab-renal", lesson: "alemtuzumab-safety", difficulty: "Applied",
  question: "After Lemtrada, hematuria accompanies rising creatinine. What next?",
  choices: ["Wait for monthly testing", "Repeat in six months", "Immediate renal evaluation", "Monitor only TSH"], answer: 2,
  explanation: "Possible anti-GBM disease requires urgent assessment.", reviewHref: "#alemtuzumab-safety",
}, {
  id: "ms-alemtuzumab-antiviral", conceptGroup: "alemtuzumab-antiviral", lesson: "alemtuzumab-safety", difficulty: "Applied",
  question: "Three months after Lemtrada, CD4 count is 150 cells/µL. What should happen to herpes prophylaxis?",
  choices: ["Stop because two months passed", "Continue pending immune recovery", "Stop if no rash", "Replace it with a live vaccine"], answer: 1,
  explanation: "Both the time and CD4 criteria must be met.", reviewHref: "#alemtuzumab-safety",
}, {
  id: "ms-alemtuzumab-monitor", conceptGroup: "alemtuzumab-monitor", lesson: "alemtuzumab-safety", difficulty: "Applied",
  question: "Which routine test continues monthly after Lemtrada?", choices: ["CBC with differential", "Thyroid function every month instead of every three months", "CBC only every six months", "CBC only if bleeding develops"], answer: 0,
  explanation: "Monthly blood and renal surveillance continues through 48 months after the last course.", reviewHref: "#alemtuzumab-safety",
}, {
  id: "ms-cladribine-pack", conceptGroup: "cladribine-pack", lesson: "immune-reconstitution", difficulty: "Applied",
  question: "How is an eight-tablet Mavenclad cycle distributed?",
  choices: ["Eight tablets together", "Three two-tablet days and two one-tablet days", "One tablet for eight weeks", "Four tablets twice"], answer: 1,
  explanation: "The cycle spans five dosing days; its total is not a single dose.", reviewHref: "#immune-reconstitution",
}, {
  id: "ms-cladribine-recovery", conceptGroup: "cladribine-recovery", lesson: "immune-reconstitution", difficulty: "Applied",
  question: "Lymphocytes are 650 cells/µL before Mavenclad course two. What next?",
  choices: ["Start because the count exceeds 500 cells/µL", "Use half the scheduled tablets without waiting for recovery", "Delay for recovery", "Start if the patient has no infection symptoms"], answer: 2,
  explanation: "Course two requires at least 800 cells/µL; delay is limited to six months.", reviewHref: "#immune-reconstitution",
}, {
  id: "ms-cladribine-renal", conceptGroup: "cladribine-renal", lesson: "immune-reconstitution", difficulty: "Applied",
  question: "Mavenclad is proposed with creatinine clearance 48 mL/min. What is appropriate?",
  choices: ["Choose another strategy; use is not recommended", "Halve each tablet", "Double the interval without consultation", "Ignore renal function"],
  answer: 0, explanation: "Below 60 mL/min, the label recommends against use rather than providing a reduced-dose regimen.", reviewHref: "#immune-reconstitution",
}];
const rehabilitationQuestions = [{"id": "ms-walking-renal", "conceptGroup": "walking-renal", "lesson": "symptom-rehabilitation", "difficulty": "Applied", "question": "Dalfampridine is proposed with CrCl 50 mL/min. Which plan fits its renal boundary?", "choices": ["Use the standard dose", "Do not initiate", "Split each extended-release tablet", "Use an unvalidated weekly dose"], "answer": 1, "explanation": "CrCl at or below 50 mL/min is a contraindication; the label provides no reduced-dose workaround.", "reviewHref": "#symptom-rehabilitation"},{"id": "ms-walking-mild-renal", "conceptGroup": "walking-mild-renal", "lesson": "symptom-rehabilitation", "difficulty": "Applied", "question": "CrCl is 65 mL/min before dalfampridine. What is appropriate?", "choices": ["Treat this as normal renal function", "Automatically halve the tablet", "Weigh walking benefit against increased seizure risk", "Classify all CrCl below 80 as contraindicated"], "answer": 2, "explanation": "Mild impairment calls for careful benefit-risk assessment, not automatic reassurance or a tablet-splitting regimen.", "reviewHref": "#symptom-rehabilitation"},{"id": "ms-walking-missed", "conceptGroup": "walking-missed", "lesson": "symptom-rehabilitation", "difficulty": "Applied", "question": "A patient misses dalfampridine and asks whether to take extra at the next dose. What advice is correct?", "choices": ["Double the next dose", "Crush two tablets together", "Take three doses tomorrow", "Skip the missed dose without catch-up"], "answer": 3, "explanation": "Extra dosing increases risk; preserve the prescribed approximately twelve-hour schedule.", "reviewHref": "#symptom-rehabilitation"},{"id": "ms-walking-seizure", "conceptGroup": "walking-seizure", "lesson": "symptom-rehabilitation", "difficulty": "Applied", "question": "A seizure occurs during dalfampridine therapy. What should happen to the medicine?", "choices": ["Permanently discontinue", "Restart once symptoms resolve", "Restart at half a crushed tablet", "Continue if walking improved"], "answer": 0, "explanation": "A treatment-associated seizure requires permanent discontinuation, even after earlier tolerance.", "reviewHref": "#symptom-rehabilitation"},{"id": "ms-symptom-falls", "conceptGroup": "symptom-falls", "lesson": "symptom-rehabilitation", "difficulty": "Applied", "question": "Falls increase after baclofen, gabapentin, oxybutynin and a hypnotic are combined. What is the best medication review?", "choices": ["Increase every drug to suppress symptoms", "Review cumulative sedation and anticholinergic effects against functional goals", "Continue unchanged if each drug has an indication", "Abruptly stop baclofen without a plan"], "answer": 1, "explanation": "Individually reasonable treatments can together worsen function. Reconcile benefits and harms and use supervised adjustments with appropriate tapering.", "reviewHref": "#symptom-rehabilitation"},{"id": "ms-fatigue-contributors", "conceptGroup": "fatigue-contributors", "lesson": "fatigue-cognition", "difficulty": "Applied", "question": "A patient with MS requests a fatigue medicine after several weeks of poor sleep and depressed mood. What should the initial plan include?", "choices": ["Assume fatigue proves a new relapse", "Add multiple stimulants without assessment", "Evaluate sleep, mood and other reversible contributors, then agree on functional goals", "Replace the DMT solely because fatigue is present"], "answer": 2, "explanation": "A fatigue plan starts with assessment and targeted management, including medication burden and activity goals; drug trials need measured benefit and follow-up.", "reviewHref": "#fatigue-cognition"},{
  id: "ms-bladder-retention", conceptGroup: "bladder-retention", lesson: "autonomic-communication-mood", difficulty: "Applied",
  question: "Before intradetrusor BOTOX, an adult with MS has PVR 260 mL and does not catheterize. What next?",
  choices: ["Proceed unchanged", "Double the dose", "Defer and address emptying", "Skip follow-up PVR"], answer: 2,
  explanation: "This meets a labeled contraindication. Reassess bladder emptying and catheterization before treatment.", reviewHref: "#autonomic-communication-mood",
}, {
  id: "ms-pain-mechanism", conceptGroup: "pain-mechanism", lesson: "symptom-rehabilitation", difficulty: "Applied",
  question: "A patient with MS develops aching back pain during prolonged wheelchair sitting. Examination links the pain to positioning, without neuropathic features. What should guide the initial plan?",
  choices: ["Treat it as neuropathic because the patient has MS", "Assess seating, posture, mobility and spasticity contributors", "Escalate the DMT based on pain alone", "Begin relapse corticosteroids before assessing the cause"], answer: 1,
  explanation: "Musculoskeletal pain can arise from positioning, immobility or spasticity. Address the identified mechanism; pain alone does not establish a relapse or DMT failure.", reviewHref: "#symptom-rehabilitation",
}, {
  id: "ms-cognition-contributors", conceptGroup: "cognition-contributors", lesson: "fatigue-cognition", difficulty: "Applied",
  question: "A patient reports gradually worsening concentration, poor sleep and fatigue after several sedating symptom medicines were added. What is the best next step?",
  choices: ["Attribute the problem to irreversible MS progression without assessment", "Treat with relapse steroids solely for impaired concentration", "Assess cognition, sleep, mood, fatigue and medication burden", "Add a stimulant without reviewing the existing regimen"], answer: 2,
  explanation: "Cognitive complaints deserve assessment, including potentially modifiable contributors. Persistent impairment may need occupational therapy or neuropsychology; it does not by itself establish inflammatory activity.", reviewHref: "#fatigue-cognition",
}];
rehabilitationQuestions.push(...[
  {
    "id": "ms-pba-recognition",
    "conceptGroup": "pba-recognition",
    "lesson": "autonomic-communication-mood",
    "difficulty": "Applied",
    "question": "A patient reports brief, involuntary crying episodes that do not match their feelings. What is the best interpretation?",
    "choices": [
      "This establishes major depression",
      "Assess for pseudobulbar affect while also screening mood",
      "This establishes a new inflammatory relapse",
      "This alone establishes progressive MS"
    ],
    "answer": 1,
    "explanation": "Emotional expression and underlying mood can differ. Assess PBA separately without overlooking coexisting depression.",
    "reviewHref": "#autonomic-communication-mood"
  },
  {
    "id": "ms-pba-heart-failure",
    "conceptGroup": "pba-heart-failure",
    "lesson": "autonomic-communication-mood",
    "difficulty": "Applied",
    "question": "Nuedexta is proposed for PBA in a patient with heart failure. What should the pharmacist do?",
    "choices": [
      "Start with ECG monitoring alone",
      "Give only one capsule daily indefinitely",
      "Identify the contraindication and discuss another approach",
      "Separate the doses from cardiac medicines"
    ],
    "answer": 2,
    "explanation": "Heart failure is a contraindication; dose spacing or ECG monitoring does not remove it.",
    "reviewHref": "#autonomic-communication-mood"
  },
  {
    "id": "ms-swallow-assessment",
    "conceptGroup": "swallow-assessment",
    "lesson": "autonomic-communication-mood",
    "difficulty": "Applied",
    "question": "A person with MS repeatedly coughs during meals and reports food sticking. What should follow?",
    "choices": [
      "Attribute this to fatigue without assessment",
      "Start relapse steroids solely for coughing",
      "Use the same thickened-liquid plan for every patient",
      "Arrange swallowing assessment and evaluate aspiration and nutrition risks"
    ],
    "answer": 3,
    "explanation": "Swallowing difficulty needs individualized assessment, often involving speech-language pathology and instrumental evaluation when indicated.",
    "reviewHref": "#autonomic-communication-mood"
  },
  {
    "id": "ms-sexual-function",
    "conceptGroup": "sexual-function",
    "lesson": "autonomic-communication-mood",
    "difficulty": "Applied",
    "question": "A person with MS reports new sexual difficulties after symptom medicines changed. What is the best initial approach?",
    "choices": [
      "Review medicines, MS symptoms and psychosocial contributors privately",
      "Assume irreversible neurologic injury",
      "Switch the DMT solely on this symptom",
      "Treat erectile dysfunction without establishing the actual problem"
    ],
    "answer": 0,
    "explanation": "Sexual problems can reflect several interacting contributors. Establish the concern and tailor management to the person.",
    "reviewHref": "#autonomic-communication-mood"
  }
]);

rehabilitationQuestions.push(...[
  {
    "id": "ms-fatigue-placebo-result",
    "conceptGroup": "fatigue-placebo-result",
    "lesson": "fatigue-cognition",
    "difficulty": "Applied",
    "question": "How should TRIUMPHANT-MS change a routine fatigue-drug recommendation?",
    "choices": [
      "Promise benefit because the medicines are commonly used",
      "Explain that the trial did not demonstrate overall superiority to placebo",
      "Conclude that no individual can ever benefit",
      "Claim the drugs were proven equivalent in every patient"
    ],
    "answer": 1,
    "explanation": "The trial does not support indiscriminate prescribing. Its group-level result neither guarantees benefit nor proves universal nonresponse.",
    "reviewHref": "#fatigue-cognition"
  },
  {
    "id": "ms-fatigue-active-comparator",
    "conceptGroup": "fatigue-active-comparator",
    "lesson": "fatigue-cognition",
    "difficulty": "Applied",
    "question": "All three COMBO-MS treatment groups improved. Which conclusion respects its design?",
    "choices": [
      "Each intervention was proven superior to placebo",
      "Combination treatment must be best because it uses two approaches",
      "There was no clear added combination benefit; the trial lacked a placebo arm",
      "The study proves all fatigue medicines are interchangeable"
    ],
    "answer": 2,
    "explanation": "Within-group improvement in an active-comparator trial does not establish a placebo-adjusted effect. The combination did not provide clear additional improvement.",
    "reviewHref": "#fatigue-cognition"
  },
  {
    "id": "ms-modafinil-rash",
    "conceptGroup": "modafinil-rash",
    "lesson": "fatigue-cognition",
    "difficulty": "Applied",
    "question": "A new rash appears during modafinil therapy and its cause is uncertain. What next?",
    "choices": [
      "Stop and obtain assessment",
      "Continue until blistering develops",
      "Only reduce the dose",
      "Add an antihistamine and continue"
    ],
    "answer": 0,
    "explanation": "Stop unless the rash is clearly unrelated; early appearance cannot reliably distinguish benign from serious reactions.",
    "reviewHref": "#fatigue-cognition"
  },
  {
    "id": "ms-modafinil-contraception",
    "conceptGroup": "modafinil-contraception",
    "lesson": "fatigue-cognition",
    "difficulty": "Applied",
    "question": "Under US Provigil labeling, how long should additional or alternative contraception continue after discontinuation for a steroidal-contraceptive user?",
    "choices": [
      "Only until the last dose",
      "Seven days",
      "Until fatigue returns",
      "One month"
    ],
    "answer": 3,
    "explanation": "The interaction precaution extends through treatment and one month afterward.",
    "reviewHref": "#fatigue-cognition"
  },
  {
    "id": "ms-modafinil-osa",
    "conceptGroup": "modafinil-osa",
    "lesson": "fatigue-cognition",
    "difficulty": "Applied",
    "question": "A patient feels more awake on modafinil and wants to stop prescribed CPAP. What should be clarified?",
    "choices": [
      "Wakefulness proves the obstruction has resolved",
      "Modafinil does not treat the underlying obstruction",
      "CPAP is needed only on days without modafinil",
      "More modafinil replaces airway treatment"
    ],
    "answer": 1,
    "explanation": "Symptom improvement does not replace treatment of obstructive sleep apnea.",
    "reviewHref": "#fatigue-cognition"
  },
  {
    "id": "ms-fatigue-trial-review",
    "conceptGroup": "fatigue-trial-review",
    "lesson": "fatigue-cognition",
    "difficulty": "Applied",
    "question": "After a specialist-supervised fatigue treatment trial, a patient reports no meaningful functional benefit and troublesome adverse effects. What next?",
    "choices": [
      "Continue indefinitely because fatigue is chronic",
      "Add a second medicine before reviewing the first",
      "Reassess benefit and harm and agree on adjustment or discontinuation",
      "Define any adverse effect as proof of efficacy"
    ],
    "answer": 2,
    "explanation": "A treatment trial needs a review point and meaningful goals. Lack of benefit with burdensome effects warrants reconsideration through a supervised plan.",
    "reviewHref": "#fatigue-cognition"
  },
  {
    "id": "ms-spasticity-useful-tone",
    "conceptGroup": "spasticity-useful-tone",
    "lesson": "symptom-rehabilitation",
    "difficulty": "Applied",
    "question": "After muscle tone decreases on treatment, transfers become harder. What should guide review?",
    "choices": [
      "Continue escalating until all tone disappears",
      "Assume lower tone always means better function",
      "Replace the DMT solely because transfers worsened",
      "Reassess whether useful tone was reduced and adjust the plan"
    ],
    "answer": 3,
    "explanation": "Some people use tone for standing or transfers. Treatment targets function, pain and individual goals, not elimination of tone at any cost.",
    "reviewHref": "#symptom-rehabilitation"
  },
  {
    "id": "ms-spasticity-refractory",
    "conceptGroup": "spasticity-refractory",
    "lesson": "symptom-rehabilitation",
    "difficulty": "Applied",
    "question": "Spasticity continues to substantially impair posture and mobility despite initial treatment. What next?",
    "choices": [
      "Refer to a multidisciplinary spasticity team",
      "Continue the same plan without reassessment",
      "Stop all rehabilitation",
      "Treat every episode as a new relapse"
    ],
    "answer": 0,
    "explanation": "Persistent functional impairment warrants experienced multidisciplinary assessment and treatment planning.",
    "reviewHref": "#symptom-rehabilitation"
  }
]);

rehabilitationQuestions.push(...[
  {
    "id": "ms-bladder-post-botox",
    "conceptGroup": "bladder-post-botox",
    "lesson": "autonomic-communication-mood",
    "difficulty": "Applied",
    "question": "An adult with MS who does not catheterize receives bladder BOTOX. Which follow-up fits the US label?",
    "choices": [
      "Check PVR only when the next injection is due",
      "Check PVR within two weeks and periodically through twelve weeks",
      "Omit PVR if urgency improves",
      "Schedule repeat injection at four weeks"
    ],
    "answer": 1,
    "explanation": "Follow-up assesses retention even when storage symptoms improve. Subsequent monitoring is tailored to clinical need.",
    "reviewHref": "#autonomic-communication-mood"
  },
  {
    "id": "ms-bowel-overflow",
    "conceptGroup": "bowel-overflow",
    "lesson": "autonomic-communication-mood",
    "difficulty": "Applied",
    "question": "Leakage develops after prolonged constipation, and assessment identifies fecal loading. What should guide treatment?",
    "choices": [
      "Treat this as uncomplicated diarrhea with loperamide alone",
      "Assume infection without further assessment",
      "Address retained stool and plan prevention of recurrence",
      "Reduce all fluid intake as the sole treatment"
    ],
    "answer": 2,
    "explanation": "Leakage may occur around retained stool. Treat the identified loading and tailor a bowel routine rather than treating the leakage alone.",
    "reviewHref": "#autonomic-communication-mood"
  },
  {
    "id": "ms-pba-maoi-transition",
    "conceptGroup": "pba-maoi-transition",
    "lesson": "autonomic-communication-mood",
    "difficulty": "Applied",
    "question": "An MAOI is proposed three days after stopping Nuedexta. What is the medication-safety response?",
    "choices": [
      "Allow at least fourteen days after Nuedexta before starting an MAOI",
      "Proceed if the Nuedexta dose was low",
      "Proceed after a normal ECG",
      "Separate the drugs by a few hours"
    ],
    "answer": 0,
    "explanation": "The required separation prevents serious interactions including serotonin syndrome. ECG results and dose spacing do not replace the washout.",
    "reviewHref": "#autonomic-communication-mood"
  }
]);

s1pQuestions.push(...[
  {
    "id": "ms-s1p-pregnancy-evidence",
    "conceptGroup": "s1p-pregnancy-evidence",
    "lesson": "s1p-modulators",
    "difficulty": "Applied",
    "question": "A learner says fingolimod fetal-risk counseling is based only on animal findings. What needs correction?",
    "choices": [
      "Its updated label also reports an observational human birth-defect signal",
      "Normal blood counts prove fetal safety",
      "A registry proves every exposed pregnancy will be affected",
      "The warning applies only to pediatric patients"
    ],
    "answer": 0,
    "explanation": "The registry adds human evidence, but design limitations prevent treating it as a precise causal prediction for an individual pregnancy.",
    "reviewHref": "#s1p-modulators"
  },
  {
    "id": "ms-mayzent-open-storage",
    "conceptGroup": "mayzent-open-storage",
    "lesson": "s1p-modulators",
    "difficulty": "Applied",
    "question": "A patient opens a Mayzent bottle and asks how to store it. Which instruction matches the US label?",
    "choices": [
      "Refrigerate after each dose",
      "Freeze to extend its life",
      "Store at 20 to 25 \u00b0C for up to three months; do not refrigerate after opening",
      "Discard all tablets after twenty-four hours"
    ],
    "answer": 2,
    "explanation": "Opened Mayzent containers have specific room-temperature handling instructions. Record storage timing and follow the package directions.",
    "reviewHref": "#s1p-modulators"
  },
  {
    "id": "ms-ponvory-desiccant",
    "conceptGroup": "ponvory-desiccant",
    "lesson": "s1p-modulators",
    "difficulty": "Applied",
    "question": "A patient plans to discard the sachet inside the Ponvory maintenance bottle. What should be explained?",
    "choices": [
      "It is optional once the bottle is opened",
      "Retain the desiccant and original packaging for moisture protection",
      "Transfer the tablets to a humid bathroom container",
      "Refrigeration replaces the packaging requirement"
    ],
    "answer": 1,
    "explanation": "The maintenance bottle instructions explicitly retain the desiccant and protect the medicine from moisture.",
    "reviewHref": "#s1p-modulators"
  },
  {
    "id": "ms-s1p-lactation-interval",
    "conceptGroup": "s1p-lactation-interval",
    "lesson": "s1p-modulators",
    "difficulty": "Applied",
    "question": "A patient assumes the S1P-drug contraception interval also establishes when breastfeeding is safe. What is the best correction?",
    "choices": [
      "All post-treatment intervals address the same exposure question",
      "A short contraception interval guarantees no milk transfer",
      "Lack of human milk data proves zero infant exposure",
      "A separate individualized breastfeeding review is needed"
    ],
    "answer": 3,
    "explanation": "Reproductive precautions and lactation assessment answer different questions. The reviewed labels do not validate a breastfeeding restart interval from the contraception interval.",
    "reviewHref": "#s1p-modulators"
  }
]);

diagnosticQuestions.push({
  "id": "ms-diagnosis-one-region",
  "conceptGroup": "one-region-biomarkers",
  "lesson": "recognition-diagnosis",
  "difficulty": "Applied",
  "question": "A typical presentation has lesions in one CNS region, a paramagnetic rim lesion and positive CSF. Better explanations have been excluded. What follows?",
  "choices": [
    "One region always excludes MS",
    "The current one-region diagnostic pathway may be fulfilled",
    "The rim lesion alone would suffice",
    "This necessarily establishes a progressive course"
  ],
  "answer": 1,
  "explanation": "The pathway combines a qualifying MRI biomarker with positive CSF or dissemination in time; neither finding alone replaces the full assessment.",
  "reviewHref": "#recognition-diagnosis"
});

rehabilitationQuestions.push(...[
  {
    "id": "ms-amantadine-renal-toxicity",
    "conceptGroup": "amantadine-renal-toxicity",
    "lesson": "fatigue-cognition",
    "difficulty": "Applied",
    "question": "An older adult taking amantadine for MS fatigue develops confusion and hallucinations after kidney function worsens. What is the priority?",
    "choices": [
      "Escalate urgently for possible drug accumulation and review the formulation, dose and renal function",
      "Increase amantadine because fatigue remains uncontrolled",
      "Assume hemodialysis reliably removes the drug",
      "Treat the symptoms as evidence that MS has become progressive"
    ],
    "answer": 0,
    "explanation": "Renal clearance is central to amantadine safety. Accumulation can cause serious CNS toxicity; dialysis removes little drug. Arrange a clinician-directed treatment plan rather than an unsupervised dose change.",
    "reviewHref": "#fatigue-cognition"
  },
  {
    "id": "ms-amantadine-corneal-edema",
    "conceptGroup": "amantadine-corneal-edema",
    "lesson": "fatigue-cognition",
    "difficulty": "Applied",
    "question": "Bilateral progressive blurred vision develops during amantadine treatment. What medication-related problem must be assessed?",
    "choices": [
      "Only an immediate allergic infusion reaction",
      "Corneal edema requiring ophthalmic assessment and, if confirmed, supervised taper and discontinuation",
      "Expected harmless adaptation that needs no examination",
      "A reason to double the dose before investigating"
    ],
    "answer": 1,
    "explanation": "Amantadine-associated corneal edema can appear after prolonged exposure. Continued exposure may cause lasting damage; vision changes should not automatically be attributed to MS.",
    "reviewHref": "#fatigue-cognition"
  }
]);

const relapseQuestions = [
  {
    "id": "ms-relapse-infection",
    "conceptGroup": "relapse-infection",
    "lesson": "acute-relapse",
    "difficulty": "Applied",
    "question": "Old weakness returns with fever and resolves after pyelonephritis treatment. What fits best?",
    "choices": [
      "Confirmed inflammatory relapse requiring steroids",
      "Pseudo-relapse requiring treatment of the infection and reassessment",
      "Progression established by this brief episode",
      "DMT failure established by recurrence of old symptoms"
    ],
    "answer": 1,
    "explanation": "Infection can transiently unmask old deficits; reassess after treating it.",
    "reviewHref": "#acute-relapse"
  },
  {
    "id": "ms-relapse-emergency",
    "conceptGroup": "relapse-emergency",
    "lesson": "acute-relapse",
    "difficulty": "Applied",
    "question": "New severe vision loss began six hours ago. What next?",
    "choices": [
      "Observe at home until the twenty-four-hour threshold",
      "Arrange routine outpatient review after a week",
      "Obtain emergency evaluation now",
      "Start a previously prescribed steroid course before evaluation"
    ],
    "answer": 2,
    "explanation": "Severe dysfunction needs immediate assessment; a duration criterion must not delay care.",
    "reviewHref": "#acute-relapse"
  },
  {
    "id": "ms-relapse-mild",
    "conceptGroup": "relapse-mild",
    "lesson": "acute-relapse",
    "difficulty": "Applied",
    "question": "A confirmed relapse causes mild tingling without functional limitation. Must steroids be given?",
    "choices": [
      "Yes; relapse confirmation makes functional impact irrelevant",
      "Yes; steroids reliably prevent long-term disability from mild attacks",
      "Yes; oral administration removes the need to weigh steroid risks",
      "No; weigh symptom burden and treatment risks with the MS team"
    ],
    "answer": 3,
    "explanation": "Mild attacks may not need steroids; treatment decisions consider functional impact.",
    "reviewHref": "#acute-relapse"
  },
  {
    "id": "ms-relapse-oral-dose",
    "conceptGroup": "relapse-oral-dose",
    "lesson": "acute-relapse",
    "difficulty": "Applied",
    "question": "Which oral regimen does NICE specify for acute MS relapse?",
    "choices": [
      "Methylprednisolone 500 mg daily for five days",
      "Methylprednisolone 500 mg once, then stop",
      "Methylprednisolone 40 mg daily for five days",
      "Methylprednisolone 1 g once weekly for five weeks"
    ],
    "answer": 0,
    "explanation": "A routine low-dose pack does not reproduce the guideline regimen.",
    "reviewHref": "#acute-relapse"
  },
  {
    "id": "ms-relapse-iv-monitor",
    "conceptGroup": "relapse-iv-monitor",
    "lesson": "acute-relapse",
    "difficulty": "Applied",
    "question": "A severe relapse requires admission for diabetes monitoring. Which NICE alternative is appropriate?",
    "choices": [
      "IV methylprednisolone 1 g daily for three to five days",
      "IV methylprednisolone 100 mg daily for three to five days",
      "IV methylprednisolone 1 g once, with no planned reassessment",
      "Defer all relapse treatment until diabetes no longer needs monitoring"
    ],
    "answer": 0,
    "explanation": "Hospital monitoring can favor the IV pathway, with individualized glucose management.",
    "reviewHref": "#acute-relapse"
  },
  {
    "id": "ms-relapse-refractory",
    "conceptGroup": "relapse-refractory",
    "lesson": "acute-relapse",
    "difficulty": "Applied",
    "question": "Severe deficits persist despite adequate high-dose steroids. What warrants urgent specialist consideration?",
    "choices": [
      "Plasma exchange as scheduled maintenance regardless of future activity",
      "Plasma exchange as rescue treatment after reassessing the severe attack",
      "A routine low-dose taper as the only escalation strategy",
      "Waiting for the next annual visit despite persistent severe deficits"
    ],
    "answer": 1,
    "explanation": "Plasma exchange may help severe steroid-refractory attacks; it is not routine maintenance.",
    "reviewHref": "#acute-relapse"
  },
  {
    "id": "ms-relapse-expectations",
    "conceptGroup": "relapse-expectations",
    "lesson": "acute-relapse",
    "difficulty": "Applied",
    "question": "What should a patient expect from relapse steroids?",
    "choices": [
      "Long-term disease modification equivalent to DMT",
      "Guaranteed restoration of all lost function",
      "Faster recovery without established long-term disease modification",
      "Elimination of the need to review DMT after the attack"
    ],
    "answer": 2,
    "explanation": "Acute steroids shorten the attack; the longitudinal disease plan remains necessary.",
    "reviewHref": "#acute-relapse"
  },
  {
    "id": "ms-relapse-stockpile",
    "conceptGroup": "relapse-stockpile",
    "lesson": "acute-relapse",
    "difficulty": "Applied",
    "question": "A patient requests steroids to self-start for any future neurologic symptom. What follows NICE guidance?",
    "choices": [
      "Supply steroids for any recurrence of an old symptom",
      "Supply steroids to start whenever fever worsens weakness",
      "Supply steroids based only on symptoms lasting twenty-four hours",
      "Arrange prompt assessment rather than unsupervised future courses"
    ],
    "answer": 3,
    "explanation": "Future symptoms require evaluation before treatment, including exclusion of infection.",
    "reviewHref": "#acute-relapse"
  }
];
const injectableQuestions = [
  {
    "id": "ms-injectable-glat-allergy",
    "conceptGroup": "glat-allergy",
    "lesson": "injectable-platform",
    "difficulty": "Applied",
    "question": "Throat swelling and worsening dyspnea occur after years of glatiramer use. What next?",
    "choices": [
      "Observe as a routine injection reaction",
      "Stop and obtain emergency care",
      "Try a smaller next dose",
      "Continue because prior tolerance excludes allergy"
    ],
    "answer": 1,
    "explanation": "Prior tolerance does not exclude anaphylaxis.",
    "reviewHref": "#injectable-platform"
  },
  {
    "id": "ms-injectable-glat-calendar",
    "conceptGroup": "glat-calendar",
    "lesson": "injectable-platform",
    "difficulty": "Applied",
    "question": "Which Copaxone 40 mg schedule is correct?",
    "choices": [
      "Daily",
      "Weekly",
      "Three times weekly, at least 48 hours apart",
      "Every fourteen days"
    ],
    "answer": 2,
    "explanation": "The 40 mg schedule differs from 20 mg daily.",
    "reviewHref": "#injectable-platform"
  },
  {
    "id": "ms-injectable-glat-device",
    "conceptGroup": "glat-device",
    "lesson": "injectable-platform",
    "difficulty": "Applied",
    "question": "A glatiramer brand changes. Can the prior autoinjector automatically be reused?",
    "choices": [
      "Yes, all devices are equivalent",
      "Yes, if the syringe fits",
      "Yes, with a partial dose",
      "No; verify product-specific compatibility"
    ],
    "answer": 3,
    "explanation": "An incompatible device can deliver an incomplete dose.",
    "reviewHref": "#injectable-platform"
  },
  {
    "id": "ms-injectable-glat-frozen",
    "conceptGroup": "glat-frozen",
    "lesson": "injectable-platform",
    "difficulty": "Applied",
    "question": "A Copaxone syringe froze overnight. What next?",
    "choices": [
      "Discard it",
      "Thaw and inject",
      "Warm it in hot water",
      "Use it if still clear"
    ],
    "answer": 0,
    "explanation": "Freezing requires disposal.",
    "reviewHref": "#injectable-platform"
  },
  {
    "id": "ms-injectable-pleg-calendar",
    "conceptGroup": "pleg-calendar",
    "lesson": "injectable-platform",
    "difficulty": "Applied",
    "question": "Plegridy titration began correctly on day 1. What is the day-15 dose?",
    "choices": [
      "125 micrograms",
      "94 micrograms",
      "63 micrograms",
      "30 micrograms"
    ],
    "answer": 1,
    "explanation": "The full 125-microgram dose starts on day 29.",
    "reviewHref": "#injectable-platform"
  },
  {
    "id": "ms-injectable-pleg-route",
    "conceptGroup": "pleg-route",
    "lesson": "injectable-platform",
    "difficulty": "Applied",
    "question": "A Plegridy order specifies intramuscular use. Which presentation is appropriate?",
    "choices": [
      "The subcutaneous pen with a longer needle",
      "Any interferon device",
      "The intramuscular prefilled syringe",
      "The Avonex intramuscular pen at the Plegridy dose"
    ],
    "answer": 2,
    "explanation": "Use the presentation designed for the prescribed route.",
    "reviewHref": "#injectable-platform"
  },
  {
    "id": "ms-injectable-pleg-maintenance",
    "conceptGroup": "pleg-maintenance",
    "lesson": "injectable-platform",
    "difficulty": "Applied",
    "question": "After titration, how often is Plegridy 125 micrograms administered?",
    "choices": [
      "Every seven days",
      "Every other day",
      "Three times weekly",
      "Every fourteen days"
    ],
    "answer": 3,
    "explanation": "The peginterferon interval is product-specific.",
    "reviewHref": "#injectable-platform"
  },
  {
    "id": "ms-injectable-pleg-skin",
    "conceptGroup": "pleg-skin",
    "lesson": "injectable-platform",
    "difficulty": "Applied",
    "question": "Several injection-site lesions develop during Plegridy therapy. What should be reviewed?",
    "choices": [
      "Avoid affected skin and consider interruption until lesions heal",
      "Continue injecting the lesions",
      "Increase frequency to compensate",
      "Stop all future skin assessment"
    ],
    "answer": 0,
    "explanation": "Do not inject affected areas before healing; multiple lesions warrant a treatment-plan review.",
    "reviewHref": "#injectable-platform"
  },
  {
    "id": "ms-injectable-avonex-titration",
    "conceptGroup": "avonex-titration",
    "lesson": "injectable-platform",
    "difficulty": "Applied",
    "question": "Avonex starts at 7.5 micrograms weekly and increases by 7.5 each week. What is the week-three dose?",
    "choices": [
      "15 micrograms",
      "22.5 micrograms",
      "30 micrograms",
      "37.5 micrograms"
    ],
    "answer": 1,
    "explanation": "7.5 + 7.5 + 7.5 = 22.5 micrograms. The full weekly dose starts in week four.",
    "reviewHref": "#injectable-platform"
  },
  {
    "id": "ms-injectable-avonex-storage",
    "conceptGroup": "avonex-storage",
    "lesson": "injectable-platform",
    "difficulty": "Applied",
    "question": "An Avonex pen was stored at 24°C for ten days. What is appropriate?",
    "choices": [
      "Use it because it stayed below 25°C",
      "Apply Plegridy's thirty-day limit",
      "Discard it because the seven-day limit was exceeded",
      "Refrigerate it to restart the storage clock"
    ],
    "answer": 2,
    "explanation": "Time and temperature both matter. Avonex's allowance is seven days, not the longer allowance of another interferon product.",
    "reviewHref": "#injectable-platform"
  },
  {
    "id": "ms-injectable-rebif-jaundice",
    "conceptGroup": "rebif-jaundice",
    "lesson": "injectable-platform",
    "difficulty": "Applied",
    "question": "Jaundice develops during Rebif treatment. Which medication action matches the label?",
    "choices": [
      "Continue until the next routine liver panel",
      "Wait until ALT reaches five times ULN",
      "Reduce the dose only if symptoms persist a month",
      "Discontinue immediately and evaluate liver dysfunction"
    ],
    "answer": 3,
    "explanation": "Symptomatic liver dysfunction requires immediate discontinuation. The asymptomatic ALT dose-reduction threshold must not delay that action.",
    "reviewHref": "#injectable-platform"
  },
  {
    "id": "ms-injectable-rebif-alt",
    "conceptGroup": "rebif-alt",
    "lesson": "injectable-platform",
    "difficulty": "Applied",
    "question": "ALT is six times the laboratory upper limit of normal during Rebif treatment, without jaundice or other hepatic symptoms. What does the label advise considering?",
    "choices": [
      "Dose reduction with follow-up; gradual re-escalation only after normalization",
      "Automatic dose escalation to maintain efficacy",
      "No action unless ALT exceeds six times the patient's baseline",
      "Continue unchanged because symptoms are absent"
    ],
    "answer": 0,
    "explanation": "The threshold is above five times ULN. Assess other causes and exposures while managing treatment; this differs from symptomatic liver dysfunction.",
    "reviewHref": "#injectable-platform"
  },
  {
    "id": "ms-injectable-betaseron-volume",
    "conceptGroup": "betaseron-volume",
    "lesson": "injectable-platform",
    "difficulty": "Applied",
    "question": "After correct reconstitution, Betaseron is 0.25 mg/mL. What volume gives the 0.1875 mg titration dose?",
    "choices": [
      "0.25 mL",
      "0.50 mL",
      "0.75 mL",
      "1.20 mL"
    ],
    "answer": 2,
    "explanation": "0.1875 mg divided by 0.25 mg/mL equals 0.75 mL. Withdraw the prescribed dose and discard the remainder.",
    "reviewHref": "#injectable-platform"
  },
  {
    "id": "ms-injectable-betaseron-storage",
    "conceptGroup": "betaseron-storage",
    "lesson": "injectable-platform",
    "difficulty": "Applied",
    "question": "Betaseron was correctly mixed and refrigerated for four hours. Can it be injected?",
    "choices": [
      "Yes, refrigeration gives twenty-four hours",
      "Yes, if the solution is clear",
      "Yes, after another hour at room temperature",
      "No; discard it because the three-hour limit has passed"
    ],
    "answer": 3,
    "explanation": "Refrigeration does not extend the reconstituted product beyond three hours.",
    "reviewHref": "#injectable-platform"
  },
  {
    "id": "ms-injectable-betaseron-lupus",
    "conceptGroup": "betaseron-lupus",
    "lesson": "injectable-platform",
    "difficulty": "Applied",
    "question": "New rash, serositis and polyarthritis with positive lupus serology arise during Betaseron therapy. What medication response is appropriate during evaluation?",
    "choices": [
      "Stop Betaseron for possible drug-induced lupus",
      "Continue until the next annual MRI",
      "Treat as a typical injection-site reaction only",
      "Increase Betaseron for presumed MS activity"
    ],
    "answer": 0,
    "explanation": "New features characteristic of drug-induced lupus warrant stopping Betaseron and evaluating the syndrome.",
    "reviewHref": "#injectable-platform"
  }
];
const longitudinalQuestions = [
  {
    "id": "ms-longitudinal-mri",
    "conceptGroup": "longitudinal-mri",
    "lesson": "longitudinal-care",
    "difficulty": "Applied",
    "question": "Two unequivocally new MRI lesions develop over a year despite adherence and adequate DMT exposure. What follows AAN guidance?",
    "choices": [
      "Discuss switching with the MS team",
      "Wait for a clinical relapse before any discussion",
      "Stop treatment without a transition",
      "Ignore asymptomatic lesions"
    ],
    "answer": 0,
    "explanation": "MRI activity can trigger a switching discussion even without a recognized attack.",
    "reviewHref": "#longitudinal-care"
  },
  {
    "id": "ms-longitudinal-onset",
    "conceptGroup": "longitudinal-onset",
    "lesson": "longitudinal-care",
    "difficulty": "Applied",
    "question": "An MRI soon after DMT initiation shows a lesion absent from a much older scan. What must be checked before calling the DMT ineffective?",
    "choices": [
      "Whether the lesion enhances, treating enhancement alone as proof of treatment failure",
      "Lesion timing and time for treatment effect",
      "Whether the lesion is symptomatic, treating all asymptomatic lesions as irrelevant",
      "Whether the current scan is abnormal, without reviewing the comparison interval"
    ],
    "answer": 1,
    "explanation": "A lesion may predate effective exposure; interpret the comparison interval and clinical course.",
    "reviewHref": "#longitudinal-care"
  },
  {
    "id": "ms-longitudinal-adherence",
    "conceptGroup": "longitudinal-adherence",
    "lesson": "longitudinal-care",
    "difficulty": "Applied",
    "question": "A patient misses many doses because injections are difficult. What is the best response?",
    "choices": [
      "Declare mechanism failure without reviewing exposure",
      "Repeat the same instructions without assessing technique",
      "Address administration barriers and reassess treatment fit",
      "Stop all follow-up"
    ],
    "answer": 2,
    "explanation": "Poor exposure and biological failure are different problems; training or a more feasible regimen may be needed.",
    "reviewHref": "#longitudinal-care"
  },
  {
    "id": "ms-longitudinal-handoff",
    "conceptGroup": "longitudinal-handoff",
    "lesson": "longitudinal-care",
    "difficulty": "Applied",
    "question": "An anti-CD20 medicine appears on discharge records without its last administration date. What next?",
    "choices": [
      "Repeat the loading regimen immediately",
      "Use discharge day as the last-dose date",
      "Estimate from refill history alone",
      "Reconstruct administration history before dosing"
    ],
    "answer": 3,
    "explanation": "An administration record helps prevent duplicate dosing and supports appropriate timing.",
    "reviewHref": "#longitudinal-care"
  },
  {
    "id": "ms-longitudinal-infection",
    "conceptGroup": "longitudinal-infection",
    "lesson": "longitudinal-care",
    "difficulty": "Applied",
    "question": "A scheduled anti-CD20 dose falls during an active infection. What should the plan document?",
    "choices": [
      "Delay, infection follow-up and who will authorize resumption",
      "Automatic dosing regardless of infection",
      "An indefinite hold without follow-up",
      "Resume whenever the patient feels ready without review"
    ],
    "answer": 0,
    "explanation": "The reviewed anti-CD20 labels require delaying administration during active infection; a hold needs follow-up.",
    "reviewHref": "#longitudinal-care"
  },
  {
    "id": "ms-longitudinal-live-vaccine",
    "conceptGroup": "longitudinal-live-vaccine",
    "lesson": "longitudinal-care",
    "difficulty": "Applied",
    "question": "After anti-CD20 discontinuation, B cells remain depleted. Which handoff statement is appropriate?",
    "choices": [
      "All vaccines are permanently prohibited",
      "Live vaccination remains deferred pending B-cell recovery and review",
      "Stopping doses alone clears live vaccination",
      "Vaccination depends only on the next infusion date"
    ],
    "answer": 1,
    "explanation": "Immune effects can persist after the final dose.",
    "reviewHref": "#longitudinal-care"
  },
  {
    "id": "ms-longitudinal-s1p-gap",
    "conceptGroup": "longitudinal-s1p-gap",
    "lesson": "longitudinal-care",
    "difficulty": "Applied",
    "question": "Fingolimod access will lapse. What should the treatment timeline include?",
    "choices": [
      "Only the original start date",
      "A plan to double future doses",
      "Gap prevention or monitored transition, plus restart requirements",
      "A statement that previous control guarantees safety"
    ],
    "answer": 2,
    "explanation": "Interruption can create reactivation risk and change cardiac restart precautions.",
    "reviewHref": "#longitudinal-care"
  },
  {
    "id": "ms-longitudinal-washout",
    "conceptGroup": "longitudinal-washout",
    "lesson": "longitudinal-care",
    "difficulty": "Applied",
    "question": "A proposed DMT switch uses the same fixed washout for every drug. What should be corrected?",
    "choices": [
      "All drugs require no gap",
      "All drugs require six months",
      "All drugs can overlap at full dose",
      "Timing must reflect the specific drugs, immune effects and clinical risks"
    ],
    "answer": 3,
    "explanation": "Transition planning balances overlapping toxicity, recovery, infection and return of disease activity.",
    "reviewHref": "#longitudinal-care"
  }
];
export const multipleSclerosisQuestionBank = [...courseQuestions, ...diagnosticQuestions, ...oralQuestions, ...s1pQuestions, ...biologicQuestions, ...reconstitutionQuestions, ...rehabilitationQuestions, ...relapseQuestions, ...injectableQuestions, ...longitudinalQuestions];
