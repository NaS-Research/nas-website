const c = (key, lesson, topic, core, caseText, action, rationale) => ({ key, lesson, topic, core, case: caseText, action, rationale });

const concepts = [
  c("inflammatory-pattern", "recognition", "the inflammatory joint pattern", "Rheumatoid arthritis usually produces persistent inflammatory pain, swelling, warmth, and morning stiffness in multiple joints.", "A patient has six weeks of symmetric MCP swelling and prolonged morning stiffness.", "Arrange prompt inflammatory arthritis evaluation rather than treating symptoms alone.", "Persistent small-joint synovitis with morning stiffness requires timely evaluation because structural damage can begin early."),
  c("differential", "recognition", "the rheumatoid arthritis differential", "Inflammatory arthritis can resemble infection, crystal disease, psoriatic arthritis, connective-tissue disease, and other conditions.", "A patient has one acutely hot swollen knee and fever.", "Exclude septic arthritis urgently before labeling the presentation rheumatoid arthritis.", "A monoarticular febrile presentation demands urgent infection assessment rather than routine chronic-DMARD planning."),
  c("serology", "recognition", "rheumatoid factor and ACPA", "Rheumatoid factor and anti-citrullinated protein antibodies support classification and prognosis but do not replace the clinical diagnosis.", "A patient has positive rheumatoid factor but no synovitis or inflammatory symptoms.", "Do not diagnose active rheumatoid arthritis from serology alone.", "Autoantibodies have imperfect specificity and must be anchored to the phenotype."),
  c("extraarticular", "recognition", "extra-articular rheumatoid arthritis", "Rheumatoid arthritis can affect lungs, eyes, skin, nerves, blood vessels, and cardiovascular risk beyond the joints.", "A patient with rheumatoid arthritis develops progressive cough and exertional dyspnea.", "Evaluate pulmonary disease, infection, and medication toxicity promptly.", "Both rheumatoid arthritis and its therapies can produce clinically important extra-articular complications."),

  c("treat-target", "treat-to-target", "treat-to-target care", "Treatment aims for remission or low disease activity using validated measures and repeated adjustment.", "A patient has persistent swollen joints after six months of adherent methotrexate therapy.", "Reassess diagnosis, adherence, dose, and comorbidity, then advance disease-modifying therapy.", "Treat-to-target requires objective reassessment and action when the target is not reached."),
  c("shared-decision", "treat-to-target", "shared treatment decisions", "Drug selection combines disease activity, prior response, comorbidity, safety, reproductive goals, access, and patient preference.", "Two guideline-supported options remain after methotrexate failure, but the patient strongly prefers oral therapy.", "Discuss the oral option's risk profile and alternatives before reaching a shared decision.", "Preference matters only after clinically important safety and effectiveness differences are made visible."),
  c("function-rehab", "treat-to-target", "exercise and rehabilitation", "Consistent exercise and individualized rehabilitation complement DMARD therapy but do not replace it.", "A patient has controlled inflammation but persistent hand-function limitations.", "Add individualized occupational and exercise interventions while maintaining disease control.", "The ACR integrative guideline treats exercise and rehabilitation as adjuncts to disease-modifying care."),
  c("comorbidity", "treat-to-target", "whole-patient risk", "Cardiovascular disease, infection, lung disease, malignancy history, pregnancy goals, frailty, and organ function can change therapy selection.", "A current smoker older than 65 with prior myocardial infarction needs advanced RA therapy.", "Compare biologic options with JAK-inhibitor risks before choosing treatment.", "Current safety warnings make cardiovascular, thrombotic, malignancy, and smoking history part of targeted-therapy selection."),

  c("mtx-first", "methotrexate", "methotrexate as anchor therapy", "Methotrexate is the preferred initial anchor for many patients with moderate to high disease activity who can use it safely.", "A new prescription says methotrexate 15 mg every morning for rheumatoid arthritis.", "Hold dispensing and clarify the intended once-weekly regimen immediately.", "Low-dose methotrexate for rheumatoid arthritis is administered weekly, and daily-use errors have caused deaths."),
  c("mtx-mechanism", "methotrexate", "low-dose methotrexate pharmacology", "At rheumatoid arthritis doses, methotrexate produces immunomodulatory effects that include altered folate pathways and increased extracellular adenosine signaling.", "A patient expects swollen joints to resolve after the first weekly dose.", "Explain that disease modification accumulates over weeks and bridge symptoms safely when needed.", "The onset of clinical benefit is delayed even though cellular effects begin earlier."),
  c("mtx-administration", "methotrexate", "methotrexate administration and optimization", "Oral weekly methotrexate can be split over a short interval or changed to subcutaneous delivery when absorption or gastrointestinal tolerance limits response.", "A patient has nausea and incomplete response on a single high oral weekly dose.", "Consider folate optimization, split oral dosing over one day, or subcutaneous therapy with the prescriber.", "Optimization can improve exposure or tolerability before changing mechanism."),
  c("mtx-monitoring", "methotrexate", "methotrexate monitoring", "Blood counts, liver tests, renal function, infection risk, pulmonary symptoms, pregnancy status, and interacting medicines shape methotrexate safety.", "A stable patient develops acute kidney injury and painful oral ulcers while taking methotrexate.", "Hold therapy and evaluate for methotrexate toxicity and interacting medicines.", "Reduced renal elimination can increase exposure, while mucositis and cytopenias can signal clinically important toxicity."),

  c("hcq", "conventional-dmards", "hydroxychloroquine selection", "Hydroxychloroquine can fit lower disease activity or combination therapy and requires dose-aware retinal surveillance.", "A patient takes hydroxychloroquine above 5 mg/kg actual body weight for several years.", "Reassess dose and retinal-risk monitoring.", "Retinopathy risk rises with daily dose, duration, renal disease, and other factors."),
  c("sulfasalazine", "conventional-dmards", "sulfasalazine therapy", "Sulfasalazine is a conventional DMARD whose use depends on allergy history, blood counts, liver function, renal considerations, and tolerability.", "A patient develops fever, mucosal lesions, and spreading rash after starting sulfasalazine.", "Stop the drug and arrange urgent evaluation for a severe cutaneous reaction.", "Expected discoloration does not resemble systemic illness with mucosal or progressive skin findings."),
  c("leflunomide", "conventional-dmards", "leflunomide therapy", "Leflunomide inhibits pyrimidine synthesis and has a long-lived active metabolite that may require accelerated elimination.", "A patient becomes pregnant while taking leflunomide.", "Stop therapy and initiate the current accelerated drug-elimination procedure with specialist care.", "Long persistence makes active elimination central to reproductive and severe-toxicity management."),
  c("leflunomide-chemistry", "conventional-dmards", "leflunomide bioactivation and pyrimidine synthesis", "Leflunomide is an isoxazole prodrug converted to teriflunomide, which inhibits mitochondrial dihydroorotate dehydrogenase and limits de novo pyrimidine synthesis in proliferating lymphocytes.", "A learner asks why leflunomide can suppress lymphocyte proliferation even though it is not a biologic protein.", "Explain conversion to teriflunomide and inhibition of de novo pyrimidine synthesis.", "Current prescribing information identifies dihydroorotate dehydrogenase inhibition and antiproliferative activity as central pharmacology."),
  c("csdmard-selection", "conventional-dmards", "conventional DMARD selection", "Methotrexate, hydroxychloroquine, sulfasalazine, and leflunomide differ in potency, onset, organ toxicity, reproductive risk, and monitoring.", "A patient with moderate activity, active liver disease, and pregnancy plans needs initial therapy.", "Avoid hepatotoxic and teratogenic choices and coordinate an appropriate alternative with rheumatology.", "Disease activity matters, but organ and reproductive safety can eliminate otherwise effective options."),

  c("tnf-mechanism", "biologic-dmards", "TNF inhibitor pharmacology", "TNF inhibitors reduce inflammatory signaling but differ in molecular form, route, schedule, immunogenicity, and labeled uses.", "A patient with persistent disease is prescribed adalimumab plus etanercept.", "Stop and clarify the unsafe dual-biologic plan.", "Current RA strategies use one biologic or targeted mechanism at a time, often with a conventional DMARD."),
  c("tnf-safety", "biologic-dmards", "TNF inhibitor safety", "TNF blockade increases serious infection risk and can reactivate tuberculosis or hepatitis B while affecting heart failure and demyelinating disease decisions.", "A patient has a positive TB test and symptoms concerning for active disease before adalimumab.", "Defer biologic therapy and complete urgent active-TB evaluation and treatment planning.", "Screening is not a checkbox when symptoms suggest active infection."),
  c("abatacept", "biologic-dmards", "abatacept pharmacology", "Abatacept interrupts CD80 and CD86 costimulation required for full T-cell activation.", "A patient with COPD is considering abatacept after another therapy fails.", "Review respiratory history, infection risk, and current label precautions before selection.", "Mechanism does not erase product-specific respiratory and infection considerations."),
  c("dmard-architecture", "biologic-dmards", "DMARD molecular architecture", "Monoclonal antibodies and fusion proteins generally engage extracellular or cell-surface targets, while small-molecule JAK inhibitors enter cells to inhibit intracellular kinases.", "A learner calls abatacept an antibody and upadacitinib an oral biologic.", "Reclassify abatacept as a CTLA-4 immunoglobulin fusion protein and upadacitinib as an intracellular small-molecule kinase inhibitor.", "Therapeutic architecture explains how each agent reaches its target and why its administration and interaction profile differ."),
  c("il6", "biologic-dmards", "IL-6 receptor inhibition", "Tocilizumab and sarilumab block IL-6 receptor signaling and can change inflammatory markers, blood counts, liver tests, lipids, and gastrointestinal risk.", "A patient on tocilizumab has new severe abdominal pain and little CRP elevation.", "Evaluate urgently for gastrointestinal perforation and other acute causes.", "IL-6 blockade can blunt inflammatory-marker responses while serious pathology progresses."),
  c("rituximab", "biologic-dmards", "B-cell depletion with rituximab", "Rituximab depletes CD20-positive B cells and in U.S. labeling is used with methotrexate after inadequate response to one or more TNF antagonists.", "A patient with positive hepatitis B core antibody is scheduled for rituximab.", "Arrange antiviral prophylaxis and specialist coordination before infusion, rather than monitoring alone.", "For anti-HBc-positive patients starting rituximab, ACR favors antiviral prophylaxis regardless of HBsAg status because reactivation can be severe."),

  c("jak-mechanism", "targeted-dmards", "JAK inhibitor pharmacology", "JAK inhibitors interrupt intracellular cytokine signaling and provide oral targeted therapy with class and product-specific selectivity.", "A patient asks whether upadacitinib needs less safety review than an injectable biologic.", "Explain its targeted mechanism and boxed risks before shared selection.", "Route does not determine immunologic or cardiovascular risk."),
  c("jak-boxed-risk", "targeted-dmards", "JAK inhibitor boxed risks", "FDA warnings include serious infections, mortality, malignancy, major adverse cardiovascular events, and thrombosis for JAK inhibitors used in chronic inflammatory conditions.", "A 72-year-old current smoker with prior DVT has failed methotrexate but never used a TNF blocker.", "Prefer a guideline and label-consistent alternative after explicit risk comparison.", "Current U.S. labeling and safety communication place JAK inhibitors after TNF-blocker failure or intolerance for RA and emphasize major risk factors."),
  c("jak-monitoring", "targeted-dmards", "JAK inhibitor monitoring", "Blood counts, liver tests, lipids, renal or hepatic function, infection, vaccination, thrombosis, and drug interactions affect JAK-inhibitor use.", "A patient on upadacitinib develops herpes zoster and marked lymphopenia.", "Hold therapy and evaluate severity, laboratory thresholds, and treatment per current labeling.", "Targeted therapy requires active response to infection and hematologic abnormalities."),
  c("sequencing", "targeted-dmards", "advanced therapy sequencing", "After inadequate conventional DMARD response, advanced treatment selection considers prior mechanisms, comorbidity, risk, access, and shared preference; current U.S. JAK labels also require prior TNF-blocker failure or intolerance.", "A patient has failed two TNF inhibitors with primary nonresponse.", "Reassess diagnosis and adherence, then consider a different mechanism rather than reflexive repetition.", "Mechanism change is often reasonable after primary nonresponse, though the full clinical context decides."),

  c("baseline-screen", "prevention-monitoring", "baseline immunosuppression screening", "Advanced RA therapy requires infection history, TB assessment, hepatitis status, vaccines, blood counts, liver and renal review, pregnancy considerations, and malignancy history as appropriate.", "A biologic is due today, but TB and hepatitis results remain pending.", "Delay nonurgent initiation until the results and action plan are reviewed.", "Baseline screening protects only when it changes the treatment or prevention plan."),
  c("vaccination", "prevention-monitoring", "vaccination during RA therapy", "Indicated non-live vaccines should generally be given, while live-vaccine timing depends on the immunosuppressive regimen.", "A patient taking methotrexate is due for influenza vaccine and disease is controlled.", "Give influenza vaccine and discuss a two-week methotrexate hold with rheumatology if disease activity permits.", "The 2022 ACR guideline conditionally recommends this hold to improve influenza response while weighing flare risk."),
  c("infection-response", "prevention-monitoring", "infection response during DMARD therapy", "Serious infection may require holding immunosuppressive therapy and urgent treatment, while minor infections require individualized decisions.", "A patient on a TNF inhibitor is hospitalized with bacterial sepsis.", "Hold the biologic and coordinate infection treatment and later restart criteria.", "Serious infection warnings support interruption while the acute infection is managed."),
  c("malignancy", "prevention-monitoring", "malignancy and skin surveillance", "Rheumatoid arthritis, prior immunosuppression, age, smoking, and treatment can all influence malignancy risk.", "A patient with prior treated malignancy needs advanced therapy.", "Coordinate risk comparison with rheumatology and oncology instead of applying a universal ban.", "Cancer history changes selection but rarely yields one rule for every cancer, interval, and mechanism."),

  c("symptom-bridge", "supportive-care", "symptom relief versus disease modification", "NSAIDs and short glucocorticoid courses can reduce symptoms but do not replace DMARD control of structural disease.", "A patient uses daily prednisone for months while waiting for DMARD benefit.", "Reassess disease activity and steroid-sparing control, then taper when clinically safe.", "Current ACR guidance discourages routine long-term glucocorticoids because toxicity outweighs convenience."),
  c("pain-differential", "supportive-care", "persistent pain with controlled inflammation", "Pain can persist from structural damage, osteoarthritis, tendinopathy, neuropathy, sleep disturbance, mood, or central sensitization even when synovitis is controlled.", "A patient is in objective remission but has diffuse pain, poor sleep, and no swollen joints.", "Evaluate noninflammatory pain contributors and treat them directly.", "Treat-to-target measures inflammatory disease, while pain requires its own mechanism-based assessment."),
  c("pregnancy", "supportive-care", "reproductive planning", "RA medications differ greatly in pregnancy, lactation, fertility, and required washout or elimination procedures.", "A patient taking methotrexate plans to carry a pregnancy.", "Stop and transition therapy through coordinated preconception planning before attempting pregnancy.", "Methotrexate is contraindicated in pregnancy for RA and requires advance planning."),
  c("biosimilars", "supportive-care", "biosimilars and access", "An FDA-approved biosimilar is highly similar to its reference biologic with no clinically meaningful difference in safety, purity, or potency.", "Insurance changes a stable patient from reference adalimumab to an approved biosimilar.", "Review the specific product, device, coverage, and transition plan while preserving adherence.", "Education and device support can prevent nocebo effects and interruptions during a clinically appropriate switch."),

  c("response-measure", "longitudinal-care", "measuring treatment response", "Response assessment combines validated disease activity, swollen and tender joint counts, function, patient experience, inflammatory markers, and imaging when needed.", "A patient on tocilizumab has low CRP but persistent swollen joints.", "Use clinical disease-activity assessment rather than declaring remission from CRP alone.", "Biomarkers are one component of response and can be directly changed by therapy."),
  c("adherence-access", "longitudinal-care", "adherence and access", "Apparent drug failure can reflect cost, device difficulty, health literacy, adverse effects, beliefs, or missed monitoring rather than pharmacology alone.", "A patient labeled methotrexate-refractory reports filling only one month because of monitoring confusion.", "Resolve access and education barriers, then reassess true treatment response.", "Exposure must be established before efficacy can be judged."),
  c("remission-taper", "remission", "DMARD tapering in sustained remission", "EULAR 2025 prefers continuing DMARDs after sustained remission and glucocorticoid discontinuation; individualized dose reduction remains possible.", "A patient has stable remission for more than a year and requests fewer medicines.", "Discuss cautious dose reduction while maintaining at least one disease-modifying strategy and close follow-up.", "Continuation is preferred; reduction requires shared decisions and monitoring because withdrawal can trigger flare."),
  c("taper flare contingency", "remission", "monitoring and rescue during a remission taper", "A taper is a monitored therapeutic trial, not proof of cure, so the pre-taper disease state, exact dose change, early flare signals, reassessment date, and restoration plan must be documented before reduction.", "Six weeks after extending a biologic interval, a patient develops recurrent MCP swelling and prolonged morning stiffness.", "Arrange prompt objective disease-activity assessment and restore or adjust effective disease-modifying therapy according to the documented rescue plan.", "Early recognition and planned reversal make a cautious taper safer while preserving the distinction between inflammatory flare and noninflammatory pain."),
  c("handoff", "longitudinal-care", "the RA treatment handoff", "A safe handoff records diagnosis, activity target, current and prior DMARDs, reasons for change, vaccines, screening, monitoring, adverse effects, and next decision.", "A patient is hospitalized with infection and several teams disagree about the last biologic dose.", "Reconcile the timeline and assign one documented restart decision.", "Precise exposure history prevents duplicate dosing, prolonged interruption, and unsafe restart."),
];

// Reviewed alternatives stay within the same concept and clinical case.
const alternatives = {
  "inflammatory-pattern": {
    "principle": [
      "RA requires unilateral joint involvement",
      "Morning stiffness excludes inflammatory disease",
      "Joint pain alone establishes synovitis"
    ],
    "case": [
      "Treat as osteoarthritis without examination",
      "Wait for visible deformity before referral",
      "Exclude RA because symptoms began only six weeks ago"
    ]
  },
  "differential": {
    "principle": [
      "Positive rheumatoid factor excludes joint infection",
      "Every swollen joint in an RA patient is an RA flare",
      "Crystal disease cannot resemble inflammatory arthritis"
    ],
    "case": [
      "Start a chronic DMARD before investigating infection",
      "Assume fever confirms an autoimmune flare",
      "Wait for symmetric hand symptoms before investigating"
    ]
  },
  "serology": {
    "principle": [
      "Negative RF excludes RA",
      "Positive RF establishes active RA without joint findings",
      "Normal inflammatory markers exclude RA"
    ],
    "case": [
      "Diagnose active RA and start methotrexate from RF alone",
      "Label the patient in remission from RA without a prior diagnosis",
      "Use the RF result as the sole reason to begin a biologic"
    ]
  },
  "extraarticular": {
    "principle": [
      "RA affects only articular cartilage",
      "Controlled joint symptoms exclude pulmonary involvement",
      "New dyspnea always indicates inadequate joint control"
    ],
    "case": [
      "Increase immunosuppression before assessing the lungs",
      "Attribute symptoms to deconditioning without evaluation",
      "Wait for joint swelling before investigating the cough"
    ]
  },
  "treat-target": {
    "principle": [
      "A tolerated regimen should continue indefinitely despite active synovitis",
      "Pain score alone establishes inflammatory remission",
      "Once a DMARD is chosen, objective reassessment is unnecessary"
    ],
    "case": [
      "Continue unchanged for another year because treatment is tolerated",
      "Declare remission if the patient can still work",
      "Replace DMARD treatment with an NSAID alone"
    ]
  },
  "shared-decision": {
    "principle": [
      "Patient preference removes the need for safety screening",
      "The cheapest medicine is always the correct option",
      "All advanced therapies have identical risks"
    ],
    "case": [
      "Choose an oral JAK inhibitor solely because it is oral",
      "Choose an injectable without discussing the available options",
      "Present the options as having identical risk profiles"
    ]
  },
  "function-rehab": {
    "principle": [
      "Exercise can replace DMARDs in active RA",
      "Rehabilitation is useful only when inflammation is uncontrolled",
      "All activity should cease indefinitely after an RA diagnosis"
    ],
    "case": [
      "Add a second biologic solely for reduced grip function",
      "Stop effective DMARD therapy and prescribe exercise alone",
      "Recommend permanent avoidance of hand activity"
    ]
  },
  "comorbidity": {
    "principle": [
      "Smoking history has no relevance to JAK selection",
      "Prior thrombosis does not affect advanced-treatment decisions",
      "Organ function matters only for NSAIDs"
    ],
    "case": [
      "Choose a JAK inhibitor because tablets lack cardiovascular warnings",
      "Ignore smoking once methotrexate has failed",
      "Use the same sequence as a patient with no cardiovascular risk"
    ]
  },
  "mtx-first": {
    "principle": [
      "RA methotrexate is ordinarily administered daily",
      "Methotrexate requires no folate support in RA",
      "Pregnancy status does not affect methotrexate selection"
    ],
    "case": [
      "Dispense the daily regimen as written",
      "Ask the patient to skip only weekends",
      "Substitute another drug without contacting the prescriber"
    ]
  },
  "mtx-mechanism": {
    "principle": [
      "Low-dose RA methotrexate is simply the high-dose oncology regimen",
      "Methotrexate immediately reverses all joint damage",
      "Lack of first-dose symptom relief establishes methotrexate failure"
    ],
    "case": [
      "Double the next dose because the first dose did not relieve swelling",
      "Stop after one dose as ineffective",
      "Convert the weekly regimen to daily administration"
    ]
  },
  "mtx-administration": {
    "principle": [
      "A weekly dose can be divided across all seven days",
      "Oral and subcutaneous routes never differ in exposure or tolerance",
      "Nausea always requires abandoning methotrexate before optimization"
    ],
    "case": [
      "Spread the weekly tablets across the entire week",
      "Escalate without checking adherence or route",
      "Stop folate to improve methotrexate absorption"
    ]
  },
  "mtx-monitoring": {
    "principle": [
      "Kidney injury cannot increase methotrexate exposure",
      "Oral ulcers exclude systemic methotrexate toxicity",
      "Normal prior tests eliminate the need for future monitoring"
    ],
    "case": [
      "Continue the next dose because prior tests were normal",
      "Treat only the ulcers while ignoring kidney function",
      "Increase the dose to compensate for reduced kidney function"
    ]
  },
  "hcq": {
    "principle": [
      "A tolerated dose is automatically retinally safe",
      "Only ideal body weight matters for AAO dosing",
      "Retinal screening is unnecessary before visual symptoms"
    ],
    "case": [
      "Continue because the patient reports normal vision",
      "Use gastrointestinal tolerance as the dose limit",
      "Defer screening indefinitely if the drug controls symptoms"
    ]
  },
  "sulfasalazine": {
    "principle": [
      "Expected discoloration makes every rash harmless",
      "Sulfasalazine requires no blood-count monitoring",
      "Fever with mucosal lesions is a routine color-change effect"
    ],
    "case": [
      "Reassure that all skin changes are expected",
      "Continue until the next scheduled blood test",
      "Treat the rash topically while maintaining the dose"
    ]
  },
  "leflunomide": {
    "principle": [
      "Stopping leflunomide immediately clears its active metabolite",
      "Pregnancy requires no special leflunomide response",
      "Accelerated elimination is unnecessary because the drug acts briefly"
    ],
    "case": [
      "Stop tablets but assume exposure ends the same day",
      "Continue until the next routine visit",
      "Wait two years without urgent specialist assessment"
    ]
  },
  "leflunomide-chemistry": {
    "principle": [
      "Leflunomide directly neutralizes TNF as an antibody",
      "Teriflunomide is an inactive excretion product",
      "Leflunomide depletes CD20-positive cells as its primary target"
    ],
    "case": [
      "Describe it as an infused anti-TNF antibody",
      "Explain its action as direct CD20-mediated B-cell depletion",
      "Claim that only protein drugs can alter lymphocyte proliferation"
    ]
  },
  "csdmard-selection": {
    "principle": [
      "All conventional DMARDs share the same reproductive risk",
      "Active liver disease is irrelevant to conventional DMARD choice",
      "Clinical activity is the only selection criterion"
    ],
    "case": [
      "Start leflunomide without considering liver or pregnancy risk",
      "Select methotrexate solely because it is an anchor drug",
      "Treat all conventional agents as equivalent for this patient"
    ]
  },
  "tnf-mechanism": {
    "principle": [
      "Every TNF inhibitor has the same route and schedule",
      "Two TNF inhibitors routinely improve RA safety",
      "TNF inhibition eliminates the need for infection screening"
    ],
    "case": [
      "Dispense both biologics to broaden TNF coverage",
      "Give the two biologics on alternating days without clarification",
      "Add a JAK inhibitor to compensate for dual-biologic risk"
    ]
  },
  "tnf-safety": {
    "principle": [
      "A negative past TB test rules out future TB",
      "Active tuberculosis is compatible with routine TNF initiation",
      "TNF blockade cannot reactivate hepatitis B"
    ],
    "case": [
      "Begin adalimumab while waiting for evaluation",
      "Treat as latent TB without evaluating the symptoms",
      "Ignore the result because arthritis is severe"
    ]
  },
  "abatacept": {
    "principle": [
      "Abatacept directly neutralizes TNF",
      "Abatacept inhibits intracellular JAK enzymes",
      "Abatacept depletes CD20-positive cells"
    ],
    "case": [
      "Assume COPD is irrelevant to drug selection",
      "Assume its different mechanism guarantees respiratory safety",
      "Combine it with the failed biologic to minimize respiratory risk"
    ]
  },
  "dmard-architecture": {
    "principle": [
      "Abatacept and adalimumab have identical molecular formats",
      "Upadacitinib is an orally absorbed monoclonal antibody",
      "Every fusion protein targets the same cytokine"
    ],
    "case": [
      "Accept both classifications because all are DMARDs",
      "Classify both drugs as TNF antibodies",
      "Classify abatacept as an intracellular kinase inhibitor"
    ]
  },
  "il6": {
    "principle": [
      "Normal CRP excludes serious disease during IL-6 blockade",
      "IL-6 inhibitors do not affect lipid concentrations",
      "Every IL-6 inhibitor has identical laboratory thresholds"
    ],
    "case": [
      "Dismiss the pain because CRP is low",
      "Wait for a CRP rise before assessing the abdomen",
      "Treat only with an NSAID and continue without assessment"
    ]
  },
  "rituximab": {
    "principle": [
      "Rituximab blocks the IL-6 receptor",
      "HBV screening is unnecessary before B-cell depletion",
      "Rituximab is routinely combined with a second biologic in RA"
    ],
    "case": [
      "Infuse without reviewing hepatitis history",
      "Assume core antibody means reactivation is impossible",
      "Wait for clinical hepatitis before arranging prevention"
    ]
  },
  "jak-mechanism": {
    "principle": [
      "Oral administration eliminates serious-infection risk",
      "JAK inhibitors are extracellular fusion proteins",
      "Every JAK inhibitor shares identical metabolism and renal dosing"
    ],
    "case": [
      "Promise fewer serious risks because it is oral",
      "Omit laboratory screening because injections are avoided",
      "Explain it as an oral monoclonal antibody"
    ]
  },
  "jak-boxed-risk": {
    "principle": [
      "Previous thrombosis is irrelevant to JAK selection",
      "Smoking eliminates the need to assess other risk factors",
      "JAK inhibitors have no mortality warning in RA"
    ],
    "case": [
      "Start a JAK inhibitor solely because methotrexate failed",
      "Ignore DVT because it occurred before the RA diagnosis",
      "Treat smoking as protective against treatment-related thrombosis"
    ]
  },
  "jak-monitoring": {
    "principle": [
      "A class name provides every needed dose adjustment",
      "Severe lymphopenia never changes JAK therapy",
      "Vaccination history is irrelevant to targeted therapy"
    ],
    "case": [
      "Continue unchanged without assessing the blood count",
      "Increase immunosuppression to treat the rash",
      "Wait for the next annual visit despite infection and lymphopenia"
    ]
  },
  "sequencing": {
    "principle": [
      "Primary nonresponse proves that every RA diagnosis is correct",
      "Treatment changes require no record of prior response",
      "A failed mechanism must be repeated indefinitely"
    ],
    "case": [
      "Repeat TNF cycling without reassessing either failure",
      "Combine two TNF inhibitors to overcome nonresponse",
      "Declare all RA drugs ineffective without assessing exposure"
    ]
  },
  "baseline-screen": {
    "principle": [
      "Ordered but unread tests complete screening",
      "No screening is needed when a patient feels well",
      "Prior screening excludes every later infection risk"
    ],
    "case": [
      "Administer now and read results after the dose",
      "Assume no symptoms means TB and HBV are absent",
      "Document screening as complete merely because tests were ordered"
    ]
  },
  "vaccination": {
    "principle": [
      "All vaccines are contraindicated during RA treatment",
      "Every vaccine requires the same DMARD hold",
      "Non-live vaccines cause the infections they target"
    ],
    "case": [
      "Defer influenza vaccination indefinitely",
      "Give vaccine but stop methotrexate permanently",
      "Hold methotrexate without considering the risk of flare"
    ]
  },
  "infection-response": {
    "principle": [
      "Sepsis never changes biologic dosing",
      "Every minor respiratory symptom requires permanent DMARD cessation",
      "Restart decisions need no documentation"
    ],
    "case": [
      "Administer the next biologic dose during sepsis",
      "Increase the biologic to reduce fever",
      "Set an automatic restart date without reviewing recovery"
    ]
  },
  "malignancy": {
    "principle": [
      "Every malignancy in RA is caused by its DMARD",
      "A prior cancer imposes an identical lifelong ban on all DMARDs",
      "Effective RA therapy guarantees zero cancer risk"
    ],
    "case": [
      "Apply a permanent ban to all advanced treatments",
      "Promise that a selected DMARD has zero cancer risk",
      "Ignore cancer type and treatment history"
    ]
  },
  "symptom-bridge": {
    "principle": [
      "NSAID relief proves prevention of structural damage",
      "Long-term prednisone toxicity is irrelevant if pain improves",
      "Symptom relief alone proves inflammatory control"
    ],
    "case": [
      "Continue prednisone indefinitely without assessing disease activity",
      "Stop long-term prednisone abruptly without a taper plan",
      "Replace all DMARDs with daily NSAID therapy"
    ]
  },
  "pain-differential": {
    "principle": [
      "Every pain signal in RA represents active synovitis",
      "Normal objective inflammation proves all pain is imagined",
      "Increasing immunosuppression treats every pain mechanism"
    ],
    "case": [
      "Escalate the biologic solely because pain persists",
      "Dismiss pain because remission means symptoms are impossible",
      "Restart high-dose prednisone without assessing the pain mechanism"
    ]
  },
  "pregnancy": {
    "principle": [
      "All RA drugs require the same washout interval",
      "Pregnancy letter categories are sufficient for current planning",
      "Maternal disease control has no relevance to pregnancy care"
    ],
    "case": [
      "Continue methotrexate until a pregnancy test becomes positive",
      "Stop all care and leave inflammatory disease untreated",
      "Use a retired pregnancy letter as the complete counseling plan"
    ]
  },
  "biosimilars": {
    "principle": [
      "Every biosimilar is automatically designated interchangeable",
      "Biosimilarity means inferior clinical efficacy",
      "Equivalent clinical performance guarantees identical devices"
    ],
    "case": [
      "Tell the patient that the new drug is necessarily weaker",
      "Assume the injection device instructions are identical",
      "Promise pharmacy substitution is unrestricted for every product"
    ]
  },
  "response-measure": {
    "principle": [
      "CRP alone establishes remission during IL-6 blockade",
      "Joint counts add no information to laboratory testing",
      "Treatment response should be inferred only from dose size"
    ],
    "case": [
      "Declare remission from the laboratory value alone",
      "Ignore swollen joints because tocilizumab suppresses CRP",
      "Stop disease-activity measurement while CRP remains low"
    ]
  },
  "adherence-access": {
    "principle": [
      "An unfilled prescription is an adequate efficacy trial",
      "All missed doses prove unwillingness to engage in care",
      "Cost cannot influence apparent treatment response"
    ],
    "case": [
      "Label pharmacologic failure and escalate immediately",
      "Blame the patient without investigating the barrier",
      "Add another drug without resolving monitoring access"
    ]
  },
  "remission-taper": {
    "principle": [
      "One quiet visit proves RA is cured",
      "Stopping all DMARDs carries no flare risk",
      "Dose reduction requires no shared discussion"
    ],
    "case": [
      "Stop all DMARDs immediately",
      "Reduce every drug simultaneously without follow-up",
      "Promise that remission will persist regardless of treatment changes"
    ]
  },
  "taper flare contingency": {
    "principle": [
      "A taper confirms permanent cure",
      "Pain alone always justifies increased immunosuppression",
      "A rescue plan is unnecessary until disability is severe"
    ],
    "case": [
      "Wait for substantial disability before reassessment",
      "Increase therapy solely from pain without examining joints",
      "Continue the taper despite recurrent objective swelling"
    ]
  },
  "handoff": {
    "principle": [
      "A medicine name alone describes biologic exposure",
      "A restart decision needs no named clinician",
      "Weekly-day information is irrelevant at admission"
    ],
    "case": [
      "Give an extra dose because no date is documented",
      "Let each team independently choose a restart date",
      "Copy an old list without verifying actual administration"
    ]
  }
};

const generatedQuestions = concepts.flatMap((concept, index) => {
  const options = alternatives[concept.key];
  if (!options) throw new Error(`Missing reviewed alternatives: ${concept.key}`);
  return [
    { id: `ra-${String(index + 1).padStart(2, "0")}-foundational`, conceptGroup: concept.key, lesson: concept.lesson, difficulty: "Foundational", question: `Which statement correctly describes ${concept.topic}?`, choices: [concept.core, ...options.principle], answer: 0, explanation: `${concept.core} ${concept.rationale}`, reviewHref: `#${concept.lesson}` },
    { id: `ra-${String(index + 1).padStart(2, "0")}-advanced`, conceptGroup: concept.key, lesson: concept.lesson, difficulty: "Applied", question: `${concept.case} What is the best response?`, choices: [concept.action, ...options.case], answer: 0, explanation: concept.rationale, reviewHref: `#${concept.lesson}` },
  ];
});

const auditCases = [
  {
    "id": "ra-audit-hcq-weight",
    "conceptGroup": "hcq-weight",
    "lesson": "conventional-dmards",
    "difficulty": "Applied",
    "question": "A 60-kg adult takes hydroxychloroquine 400 mg daily. How does this compare with the AAO weight-based retinal-risk recommendation?",
    "choices": [
      "About 6.7 mg/kg/day, above the 5 mg/kg/day recommendation; request dose review",
      "About 3.3 mg/kg/day, below the recommendation",
      "Exactly 5 mg/kg/day",
      "Weight is irrelevant below 400 mg daily"
    ],
    "answer": 0,
    "explanation": "400 divided by 60 is approximately 6.67 mg/kg/day. At 5 mg/kg/day, the calculated limit is 300 mg/day; the prescriber must individualize the actual regimen.",
    "reviewHref": "#conventional-dmards"
  },
  {
    "id": "ra-audit-hcq-screening",
    "conceptGroup": "hcq-screening",
    "lesson": "conventional-dmards",
    "difficulty": "Applied",
    "question": "A new hydroxychloroquine user has chronic kidney disease. Which screening assumption is unsafe?",
    "choices": [
      "Automatically defer annual retinal screening for five years",
      "Obtain a baseline ophthalmic assessment",
      "Review dose relative to actual weight",
      "Coordinate OCT and FAF screening with ophthalmology"
    ],
    "answer": 0,
    "explanation": "The first-five-year deferral applies only when significant risk factors are absent. Kidney disease increases risk.",
    "reviewHref": "#conventional-dmards"
  },
  {
    "id": "ra-audit-etanercept-presentation",
    "conceptGroup": "etanercept-presentation",
    "lesson": "biologic-dmards",
    "difficulty": "Applied",
    "question": "A patient asks whether every Enbrel presentation has the same room-temperature limit. What is the correct response?",
    "choices": [
      "Check the presentation: specified single-dose products allow 30 days, while the unreconstituted multiple-dose tray allows 14 days at 20-25 C",
      "Every presentation allows 30 days",
      "Every presentation allows 14 days",
      "Refrigeration always resets the room-temperature clock"
    ],
    "answer": 0,
    "explanation": "Storage instructions depend on presentation. Record the removal date and use the exact label; these limits cannot be transferred to other biologics.",
    "reviewHref": "#biologic-dmards"
  },
  {
    "id": "ra-audit-anakinra-renal",
    "conceptGroup": "anakinra-renal",
    "lesson": "biologic-dmards",
    "difficulty": "Applied",
    "question": "An adult using anakinra for RA has creatinine clearance 22 mL/min. Which labeled adjustment should be considered?",
    "choices": [
      "100 mg subcutaneously every other day",
      "100 mg subcutaneously every day without adjustment",
      "200 mg subcutaneously every other day",
      "100 mg subcutaneously once weekly"
    ],
    "answer": 0,
    "explanation": "The RA label advises considering every-other-day administration when creatinine clearance is below 30 mL/min.",
    "reviewHref": "#biologic-dmards"
  }
];

const doseCases = [
{
  "id": "ra-dose-simponi-device",
  "conceptGroup": "simponi-device",
  "lesson": "tnf-dosing",
  "difficulty": "Applied",
  "question": "A patient uses Simponi SmartJect and brings an old leaflet showing an upper-arm injection site. Which instruction follows the current SmartJect directions?",
  "choices": [
    "Use thigh or lower abdomen and do not pinch the skin",
    "Use the arm if a caregiver pinches the skin",
    "Use any site permitted for a prefilled syringe",
    "Keep the old technique because all golimumab devices are identical"
  ],
  "answer": 0,
  "explanation": "Current SmartJect instructions prohibit arm injection and skin pinching because of device-failure or injury risk. The prefilled-syringe instructions differ.",
  "reviewHref": "#tnf-dosing"
},
  {
    "id": "ra-dose-adalimumab",
    "conceptGroup": "dose-adalimumab",
    "lesson": "tnf-dosing",
    "difficulty": "Applied",
    "question": "A new adult RA prescription uses the usual Humira regimen. Which schedule fits?",
    "choices": [
      "40 mg subcutaneously every other week",
      "40 mg subcutaneously daily",
      "160 mg weekly indefinitely",
      "40 mg by IV infusion monthly"
    ],
    "answer": 0,
    "explanation": "The usual adult RA regimen differs from induction schedules for other indications.",
    "reviewHref": "#tnf-dosing"
  },
  {
    "id": "ra-dose-adalimumab-escalation",
    "conceptGroup": "dose-adalimumab-escalation",
    "lesson": "tnf-dosing",
    "difficulty": "Applied",
    "question": "An adult with RA is not taking methotrexate and has an incomplete response to Humira 40 mg every other week. Which labeled escalation may the prescriber consider?",
    "choices": [
      "40 mg weekly or 80 mg every other week",
      "80 mg daily",
      "160 mg every other day",
      "40 mg every eight weeks"
    ],
    "answer": 0,
    "explanation": "The label provides these two escalation options for some RA patients not receiving methotrexate.",
    "reviewHref": "#tnf-dosing"
  },
  {
    "id": "ra-dose-infliximab-math",
    "conceptGroup": "dose-infliximab-math",
    "lesson": "tnf-dosing",
    "difficulty": "Applied",
    "question": "An adult weighing 72 kg is prescribed initial Remicade 3 mg/kg for RA. Calculate the dose before preparation.",
    "choices": [
      "216 mg",
      "24 mg",
      "720 mg",
      "240 mg"
    ],
    "answer": 0,
    "explanation": "72 kg times 3 mg/kg equals 216 mg; preparation and vial use are separate steps.",
    "reviewHref": "#tnf-dosing"
  },
  {
    "id": "ra-dose-infliximab-timeline",
    "conceptGroup": "dose-infliximab-timeline",
    "lesson": "tnf-dosing",
    "difficulty": "Applied",
    "question": "The first three standard Remicade RA doses occurred at weeks 0, 2, and 6. At what week is the next maintenance dose scheduled?",
    "choices": [
      "Week 14",
      "Week 8",
      "Week 10",
      "Week 12"
    ],
    "answer": 0,
    "explanation": "An eight-week maintenance interval after week 6 gives week 14.",
    "reviewHref": "#tnf-dosing"
  },
  {
    "id": "ra-dose-certolizumab-load",
    "conceptGroup": "dose-certolizumab-load",
    "lesson": "tnf-dosing",
    "difficulty": "Applied",
    "question": "A 400-mg Cimzia RA loading dose uses 200-mg syringes. How many injections provide that dose?",
    "choices": [
      "Two",
      "One",
      "Three",
      "Four"
    ],
    "answer": 0,
    "explanation": "400 mg divided by 200 mg per syringe equals two injections; use the prescribed loading dates.",
    "reviewHref": "#tnf-dosing"
  },
  {
    "id": "ra-dose-certolizumab-maintenance",
    "conceptGroup": "dose-certolizumab-maintenance",
    "lesson": "tnf-dosing",
    "difficulty": "Applied",
    "question": "After Cimzia RA loading, which maintenance pair is consistent with labeling?",
    "choices": [
      "200 mg every other week or 400 mg every four weeks",
      "400 mg daily or 200 mg twice daily",
      "200 mg monthly or 400 mg every six months",
      "400 mg weekly or 200 mg daily"
    ],
    "answer": 0,
    "explanation": "The two maintenance options preserve a similar scheduled total dose over four weeks.",
    "reviewHref": "#tnf-dosing"
  },
  {
    "id": "ra-dose-golimumab-route",
    "conceptGroup": "dose-golimumab-route",
    "lesson": "tnf-dosing",
    "difficulty": "Applied",
    "question": "A patient changes from subcutaneous Simponi to IV Simponi Aria for RA. What must be clarified?",
    "choices": [
      "A new weight-based infusion schedule and methotrexate plan",
      "Keep 50 mg monthly and inject the syringe into a vein",
      "Use the same device with a longer needle",
      "Stop verifying weight because both products contain golimumab"
    ],
    "answer": 0,
    "explanation": "The shared ingredient does not make the products or schedules interchangeable.",
    "reviewHref": "#tnf-dosing"
  },
  {
    "id": "ra-dose-golimumab-math",
    "conceptGroup": "dose-golimumab-math",
    "lesson": "tnf-dosing",
    "difficulty": "Applied",
    "question": "An 85-kg adult is prescribed Simponi Aria 2 mg/kg for RA. What is the calculated dose?",
    "choices": [
      "170 mg",
      "42.5 mg",
      "85 mg",
      "200 mg"
    ],
    "answer": 0,
    "explanation": "85 times 2 equals 170 mg; administer using the correct IV preparation and calendar.",
    "reviewHref": "#tnf-dosing"
  },
  {
    "id": "ra-dose-abatacept-band",
    "conceptGroup": "dose-abatacept-band",
    "lesson": "other-biologic-dosing",
    "difficulty": "Applied",
    "question": "An adult weighing exactly 100 kg starts IV abatacept for RA. Which weight-band dose applies?",
    "choices": [
      "750 mg",
      "500 mg",
      "1,000 mg",
      "100 mg"
    ],
    "answer": 0,
    "explanation": "The 60-100 kg band includes exactly 100 kg; the higher band begins above 100 kg.",
    "reviewHref": "#other-biologic-dosing"
  },
  {
    "id": "ra-dose-abatacept-sc",
    "conceptGroup": "dose-abatacept-sc",
    "lesson": "other-biologic-dosing",
    "difficulty": "Applied",
    "question": "An adult begins subcutaneous abatacept without an IV loading dose. Is the absence of loading necessarily an error?",
    "choices": [
      "No; IV loading is optional for adult RA subcutaneous initiation",
      "Yes; every weekly injection requires an IV dose first",
      "Yes; the first month must always use daily injections",
      "No; because subcutaneous abatacept is given only once"
    ],
    "answer": 0,
    "explanation": "The adult RA subcutaneous regimen is weekly, with optional IV loading.",
    "reviewHref": "#other-biologic-dosing"
  },
  {
    "id": "ra-dose-rituximab-course",
    "conceptGroup": "dose-rituximab-course",
    "lesson": "other-biologic-dosing",
    "difficulty": "Applied",
    "question": "A learner records each RA rituximab infusion as a separate completed course. What correction is needed?",
    "choices": [
      "A course contains two infusions separated by two weeks",
      "A course always contains four weekly infusions",
      "A course is one daily injection for a week",
      "A course is a single subcutaneous injection"
    ],
    "answer": 0,
    "explanation": "The RA course structure differs from other rituximab indication regimens.",
    "reviewHref": "#other-biologic-dosing"
  },
  {
    "id": "ra-dose-rituximab-repeat",
    "conceptGroup": "dose-rituximab-repeat",
    "lesson": "other-biologic-dosing",
    "difficulty": "Applied",
    "question": "A routine repeat RA rituximab course is ordered eight weeks after the prior course. What is the appropriate review?",
    "choices": [
      "Clarify because the labeled minimum repeat interval is 16 weeks",
      "Proceed because eight weeks is the standard interval",
      "Automatically double the dose instead",
      "Change to the oncology schedule without consultation"
    ],
    "answer": 0,
    "explanation": "Usual reassessment may support 24-week courses or individualized timing, but not earlier than the labeled minimum.",
    "reviewHref": "#other-biologic-dosing"
  },
  {
    "id": "ra-dose-tocilizumab-route",
    "conceptGroup": "dose-tocilizumab-route",
    "lesson": "other-biologic-dosing",
    "difficulty": "Applied",
    "question": "A pharmacy has only subcutaneous tocilizumab syringes available for an IV order. What should it do?",
    "choices": [
      "Obtain the correct IV presentation",
      "Empty the syringes into an infusion bag",
      "Give the syringe contents as an IV push",
      "Treat the two presentations as identical"
    ],
    "answer": 0,
    "explanation": "The subcutaneous presentation must not be used for IV administration.",
    "reviewHref": "#other-biologic-dosing"
  },
  {
    "id": "ra-dose-sarilumab-threshold",
    "conceptGroup": "dose-sarilumab-threshold",
    "lesson": "other-biologic-dosing",
    "difficulty": "Applied",
    "question": "Before a first sarilumab dose, platelets are 125,000/mm3. Which response fits the label?",
    "choices": [
      "Defer initiation for prescriber review",
      "Proceed using the tocilizumab platelet threshold",
      "Proceed if CRP is high enough",
      "Double the interval without notifying the prescriber"
    ],
    "answer": 0,
    "explanation": "Sarilumab has a distinct platelet initiation threshold; do not borrow a classmate drug rule.",
    "reviewHref": "#other-biologic-dosing"
  },
  {
    "id": "ra-dose-sarilumab-hold",
    "conceptGroup": "dose-sarilumab-hold",
    "lesson": "other-biologic-dosing",
    "difficulty": "Applied",
    "question": "During sarilumab therapy, ANC falls to 800/mm3. What is the labeled next step?",
    "choices": [
      "Hold treatment and reassess recovery",
      "Continue unchanged because this is above 500",
      "Increase the dose",
      "Stop laboratory testing"
    ],
    "answer": 0,
    "explanation": "On-treatment ANC 500-1,000 requires a hold. Recovery and restart rules differ from initial eligibility.",
    "reviewHref": "#other-biologic-dosing"
  },
  {
    "id": "ra-dose-monitoring-ownership",
    "conceptGroup": "dose-monitoring-ownership",
    "lesson": "other-biologic-dosing",
    "difficulty": "Applied",
    "question": "A biologic dose was held for abnormal tests. A repeat result arrives, but no clinician has reviewed it. What completes a safe restart plan?",
    "choices": [
      "Document the result interpretation and authorized drug-specific restart decision",
      "Restart automatically when any result is posted",
      "Use the prior dose regardless of the result",
      "Let the patient choose an interval based on symptoms alone"
    ],
    "answer": 0,
    "explanation": "A posted result is not a completed clinical review or a restart instruction.",
    "reviewHref": "#other-biologic-dosing"
  }
];

const continuityCases = [
{
  "id": "ra-review-jak-hemoglobin",
  "conceptGroup": "jak-hemoglobin",
  "lesson": "targeted-dmards",
  "difficulty": "Applied",
  "question": "An adult with RA is being evaluated before starting tofacitinib. Hemoglobin is 8.5 g/dL. Which statement is correct?",
  "choices": [
    "Defer initiation because the tofacitinib initiation boundary is 9 g/dL",
    "Start because every RA JAK inhibitor uses an 8 g/dL initiation boundary",
    "Start and check blood counts only if fatigue develops",
    "Use the COVID-19 baricitinib thresholds"
  ],
  "answer": 0,
  "explanation": "Tofacitinib initiation is not recommended below 9 g/dL. Its on-treatment interruption threshold is different, and another drug or indication cannot supply the rule.",
  "reviewHref": "#targeted-dmards"
},
{
  "id": "ra-review-jak-hold-hemoglobin",
  "conceptGroup": "jak-hold-hemoglobin",
  "lesson": "targeted-dmards",
  "difficulty": "Applied",
  "question": "During tofacitinib therapy, hemoglobin falls from 12.0 to 9.5 g/dL. Which response follows the label?",
  "choices": [
    "Interrupt treatment and evaluate because the fall exceeds 2 g/dL",
    "Continue because hemoglobin remains above 8 g/dL",
    "Increase the dose to treat anemia",
    "Change to extended-release tablets without evaluation"
  ],
  "answer": 0,
  "explanation": "The decrease is 2.5 g/dL. Tofacitinib interruption criteria include a decrease greater than 2 g/dL, even when the absolute value remains above 8 g/dL; treatment remains interrupted until hemoglobin normalizes.",
  "reviewHref": "#targeted-dmards"
},

  {
    "id": "ra-review-remission-choice",
    "conceptGroup": "remission-choice",
    "lesson": "remission",
    "difficulty": "Applied",
    "question": "A patient in sustained RA remission asks whether EULAR 2025 requires reducing DMARD therapy. Which explanation fits?",
    "choices": [
      "Continuing therapy is preferred; individualized reduction can be discussed",
      "Every patient must taper after six months",
      "All DMARDs should stop once CRP is normal",
      "Only the medication cost determines the decision"
    ],
    "answer": 0,
    "explanation": "The update favors continued DMARD treatment after glucocorticoid withdrawal and sustained remission. Reduction remains an individualized shared decision.",
    "reviewHref": "#remission"
  },
  {
    "id": "ra-review-remission-steroid",
    "conceptGroup": "remission-steroid",
    "lesson": "remission",
    "difficulty": "Applied",
    "question": "A patient has quiet joints while still needing daily glucocorticoids. What should be reviewed before interpreting this as an opportunity to reduce the DMARD?",
    "choices": [
      "Whether disease control can be maintained with glucocorticoid withdrawal and sustained objective remission",
      "Whether a single normal CRP proves permanent remission",
      "Whether both drugs can be stopped abruptly",
      "Whether steroid symptom relief makes monitoring unnecessary"
    ],
    "answer": 0,
    "explanation": "Glucocorticoid dependence, objective activity, and the duration of control matter. A quiet visit during steroid treatment does not establish the conditions for a DMARD reduction.",
    "reviewHref": "#remission"
  },
  {
    "id": "ra-review-remission-one-change",
    "conceptGroup": "remission-one-change",
    "lesson": "remission",
    "difficulty": "Applied",
    "question": "A team and patient agree to attempt a cautious DMARD reduction. Which documentation best supports interpreting what happens next?",
    "choices": [
      "Baseline activity, one defined dose change, reassessment date, and rescue plan",
      "Only a new medication list without a reason for change",
      "Simultaneous changes to every drug with no baseline",
      "An instruction to call only after severe functional loss"
    ],
    "answer": 0,
    "explanation": "A defined change and baseline make subsequent symptoms interpretable and permit timely reversal when warranted.",
    "reviewHref": "#remission"
  },
  {
    "id": "ra-review-remission-pain",
    "conceptGroup": "remission-pain",
    "lesson": "remission",
    "difficulty": "Applied",
    "question": "After a DMARD reduction, a patient reports localized activity-related knee pain without swelling or morning stiffness. What is the next step?",
    "choices": [
      "Assess the pain mechanism and objective disease activity before labeling a flare",
      "Automatically double the biologic",
      "Assume RA is permanently cured",
      "Stop every remaining DMARD because the pain is localized"
    ],
    "answer": 0,
    "explanation": "Pain after a reduction needs assessment; timing alone does not establish inflammatory relapse.",
    "reviewHref": "#remission"
  },
  {
    "id": "ra-review-handoff-hold",
    "conceptGroup": "handoff-hold",
    "lesson": "longitudinal-care",
    "difficulty": "Applied",
    "question": "A discharge summary says a biologic was held for infection but gives no restart criteria. What is the most useful addition?",
    "choices": [
      "Reason and date of hold, recovery criteria, follow-up, and clinician responsible for restart",
      "A fixed restart date independent of recovery",
      "A statement that any team may independently restart it",
      "Removal of the drug from history without explaining the hold"
    ],
    "answer": 0,
    "explanation": "A temporary hold should not become an undocumented permanent stop or an unsafe automatic restart.",
    "reviewHref": "#longitudinal-care"
  },
  {
    "id": "ra-review-exposure-reconciliation",
    "conceptGroup": "exposure-reconciliation",
    "lesson": "longitudinal-care",
    "difficulty": "Applied",
    "question": "The pharmacy refill date and patient-reported biologic injection date differ. Which date should be used to describe actual exposure?",
    "choices": [
      "Reconcile administration history; dispensing alone does not prove a dose was injected",
      "Always treat the refill date as the injection date",
      "Use the oldest prescription date",
      "Assume the patient received two doses"
    ],
    "answer": 0,
    "explanation": "Acquisition and administration are different events. The verified last administered dose informs safe scheduling and transitions.",
    "reviewHref": "#longitudinal-care"
  }
];

export const rheumatoidArthritisQuestionBank = [...generatedQuestions, ...auditCases, ...doseCases, ...continuityCases];

if (rheumatoidArthritisQuestionBank.length < 100) {
  throw new Error(`Rheumatoid arthritis question bank must contain at least 100 questions, found ${rheumatoidArthritisQuestionBank.length}.`);
}
