const c = (key, lesson, topic, core, recommended, trap, caseText, action, rationale) => ({ key, lesson, topic, core, recommended, trap, case: caseText, action, rationale });

const concepts = [
  c("multisystem-pattern", "recognition", "the multisystem pattern of systemic lupus erythematosus", "SLE can produce inflammatory disease in skin, joints, blood, kidneys, lungs, heart, vessels, and the nervous system.", "Map every active manifestation and identify the organ at greatest risk of irreversible damage.", "Reducing lupus to a facial rash can miss life-threatening organ disease.", "A patient with photosensitive rash and arthritis develops edema, hypertension, and foamy urine.", "Evaluate urgently for kidney involvement rather than treating the skin and joints alone.", "A new renal pattern can represent lupus nephritis and changes both urgency and treatment intensity."),
  c("classification-boundary", "recognition", "classification criteria and clinical diagnosis", "The 2019 EULAR and ACR criteria use positive ANA as an entry criterion, then weighted clinical and immunologic domains, but classification is not a substitute for diagnosis.", "Interpret criteria with the phenotype, time course, exclusions, and specialist judgment.", "Diagnosing active SLE from a positive ANA alone creates false certainty.", "A healthy patient has a positive ANA but no compatible clinical findings.", "Do not diagnose or treat SLE from ANA positivity alone.", "ANA is sensitive but nonspecific, and classification requires compatible weighted findings after reasonable exclusions."),
  c("flare-mimic", "recognition", "distinguishing flare from infection and toxicity", "Fever, cytopenias, organ dysfunction, and fatigue can reflect lupus activity, infection, medication toxicity, or more than one process.", "Obtain cultures, exposure history, medication review, organ assessment, and disease markers before escalating immunosuppression when time permits.", "Calling every fever a flare can amplify an untreated infection.", "An immunosuppressed patient with SLE has fever, hypotension, neutropenia, and cough.", "Treat possible sepsis urgently while evaluating disease activity and medication toxicity.", "Instability and infection risk demand parallel assessment rather than reflexive steroid escalation."),
  c("drug-induced", "recognition", "drug-induced lupus", "Drug-induced lupus can resemble SLE but often improves after the responsible medicine is withdrawn and has a different organ and antibody pattern.", "Review exposure timing and classic agents such as procainamide, hydralazine, isoniazid, minocycline, quinidine, and selected biologics.", "Continuing a plausible culprit without reviewing causality prolongs avoidable disease.", "A patient develops arthralgia, serositis, and positive antihistone antibodies months after high-risk hydralazine exposure.", "Coordinate withdrawal of the suspected drug and evaluate for organ involvement and alternative causes.", "The temporal drug relationship and phenotype support a drug-induced syndrome, but dangerous organ disease still requires assessment."),

  c("loss-tolerance", "immune-architecture", "loss of immune tolerance in SLE", "Genetic susceptibility, environmental signals, cell death, impaired debris clearance, and abnormal innate and adaptive immunity can sustain autoimmunity.", "Connect triggers and immune pathways to the patient's organ phenotype without claiming one universal cause.", "Attributing every flare to one exposure ignores the heterogeneous biology of SLE.", "A patient asks whether sunlight alone caused the entire disease.", "Explain that ultraviolet exposure can trigger activity within a broader immune susceptibility.", "SLE arises from interacting predisposition and immune dysregulation rather than one isolated cause."),
  c("interferon", "immune-architecture", "type I interferon signaling", "Nucleic-acid sensing can amplify type I interferon signaling and downstream inflammatory gene expression in SLE.", "Use the pathway to explain why anifrolumab blocks the type I interferon receptor and why infection risk still matters.", "Describing anifrolumab as a general pain medicine obscures its immune target and safety profile.", "A patient asks why anifrolumab can increase herpes zoster risk.", "Connect IFNAR blockade to altered antiviral immune signaling and prevention planning.", "Blocking an inflammatory pathway can also change host defense, so mechanism informs vaccination and infection counseling."),
  c("b-cell-blys", "immune-architecture", "B-cell survival and BLyS", "Autoreactive B cells can produce autoantibodies and receive survival signals through B-lymphocyte stimulator, also called BLyS.", "Explain that belimumab reduces soluble BLyS signaling rather than directly depleting every B cell.", "Calling belimumab an anti-CD20 antibody confuses two distinct B-cell strategies.", "A learner equates belimumab with obinutuzumab because both affect B-cell biology.", "Differentiate BLyS inhibition from CD20-directed B-cell depletion.", "Mechanistic separation predicts different dosing, labeling, infusion risks, and sequencing."),
  c("immune-complex", "immune-architecture", "immune complexes and complement", "Autoantibody-containing immune complexes can activate complement and deposit in tissues, contributing to inflammatory organ injury.", "Trend complement, anti-dsDNA, urine findings, and clinical activity together rather than using one marker alone.", "Treating low complement without compatible disease activity can lead to unnecessary toxicity.", "Complement falls and anti-dsDNA rises while proteinuria and urinary sediment worsen.", "Evaluate for active lupus nephritis and quantify the renal change promptly.", "Concordant clinical, urinary, and serologic change strengthens concern for immune-complex kidney activity."),

  c("organ-priority", "treatment-targets", "organ-prioritized treatment", "When several systems are active, treatment must cover the full flare while prioritizing disease that threatens life or irreversible organ function.", "Classify severity, identify the highest-risk organ, and choose an appropriately rapid combination strategy.", "Treating every manifestation sequentially can be too slow during organ-threatening disease.", "A patient has rash, arthritis, and rapidly progressive neurologic deficits attributed to active SLE.", "Treat the neurologic emergency aggressively while also addressing the other active manifestations.", "The most damage-prone organ determines urgency even when lower-risk symptoms are more visible."),
  c("activity-damage", "treatment-targets", "disease activity versus accumulated damage", "Active inflammation may improve with immunosuppression, while fixed damage, deconditioning, or noninflammatory symptoms may require another strategy.", "Measure activity regularly and assess accumulated damage at least annually.", "Escalating immunosuppression for every chronic symptom can increase toxicity without restoring damaged tissue.", "A patient has stable serology, no synovitis, and chronic pain from avascular necrosis.", "Treat the structural complication and avoid labeling it an inflammatory flare without evidence.", "Separating activity from damage prevents ineffective immune escalation."),
  c("steroid-minimization", "treatment-targets", "glucocorticoid minimization", "Glucocorticoids can control acute inflammation quickly but should use the lowest effective dose for the shortest duration while steroid-sparing therapy takes effect.", "For stable controlled disease, taper prednisone to 5 mg daily or less, ideally zero, within six months when feasible.", "Maintaining prednisone above 5 mg indefinitely without reviewing steroid-sparing therapy conflicts with current guidance.", "Disease is controlled but prednisone remains 15 mg daily eight months after a flare.", "Reassess and intensify steroid-sparing therapy while planning a safe taper.", "The 2025 ACR guideline strongly recommends reducing chronic exposure once disease is controlled."),
  c("refractory-escalation", "treatment-targets", "escalation for refractory SLE", "Ongoing activity despite an adequate initial strategy requires confirmation of diagnosis and exposure followed by treatment escalation.", "Verify adherence, dose, duration, access, organ severity, and competing explanations before changing mechanism.", "Leaving clearly active organ disease unchanged because the regimen is tolerated permits further damage.", "A patient has persistent inflammatory arthritis after an adequate hydroxychloroquine and methotrexate trial.", "Confirm exposure and escalate with an appropriate conventional or biologic option through shared decision-making.", "Current guidance strongly supports escalation when active disease is refractory to initial therapy."),

  c("hcq-foundation", "hydroxychloroquine", "hydroxychloroquine as SLE foundation therapy", "Hydroxychloroquine is recommended routinely for people with SLE unless contraindicated and is generally continued even in sustained remission.", "Build adherence, dose, retinal surveillance, and toxicity review into long-term care.", "Stopping hydroxychloroquine automatically when symptoms improve can remove a foundational protective therapy.", "A patient in sustained remission asks to discontinue hydroxychloroquine solely because disease is quiet.", "Review benefits and risks and generally continue it if no contraindication exists.", "The 2025 ACR guideline conditionally supports indefinite continuation even during sustained remission."),
  c("hcq-dose-eye", "hydroxychloroquine", "hydroxychloroquine dose and retinal surveillance", "Long-term average dosing at 5 mg/kg actual body weight daily or less reduces retinal toxicity risk, while duration, kidney disease, tamoxifen, and macular disease modify surveillance.", "Document actual weight, daily and average exposure, baseline eye evaluation, and risk-based follow-up.", "Using a fixed tablet count without weight or kidney review can create avoidable exposure.", "A patient with declining kidney function has received more than 5 mg/kg daily for six years.", "Reassess dose and arrange appropriate retinal surveillance.", "Dose, duration, renal function, and co-risk factors together determine retinal risk."),
  c("hcq-systemic-safety", "hydroxychloroquine", "systemic hydroxychloroquine safety", "Hydroxychloroquine can cause cardiomyopathy, conduction abnormalities, QT prolongation, hypoglycemia, neuromyopathy, and severe skin reactions in addition to retinal toxicity.", "Review interacting QT drugs, cardiac or neuromuscular symptoms, glucose risk, and serious rash.", "Focusing only on the retina can miss life-threatening systemic toxicity.", "A patient on hydroxychloroquine develops syncope, new conduction block, and biventricular hypertrophy.", "Evaluate urgently for cardiotoxicity and reconsider therapy.", "Current labeling warns that cardiomyopathy and conduction disease can appear during acute or chronic exposure."),
  c("hcq-adherence", "hydroxychloroquine", "hydroxychloroquine adherence", "Apparent treatment failure can reflect missed doses, access barriers, intolerance, misunderstanding, or an incorrect medication list.", "Ask neutrally about actual use and solve practical barriers before declaring pharmacologic failure.", "Escalating immunosuppression without confirming exposure can add risk to an untested regimen.", "Pharmacy history shows repeated long gaps despite a chart that lists daily hydroxychloroquine.", "Clarify the barrier and restore safe, sustainable exposure before judging response.", "The treatment timeline must distinguish a prescribed regimen from the medicine actually received."),

  c("cutaneous", "nonrenal-disease", "cutaneous lupus management", "Sun protection and topical therapy accompany hydroxychloroquine, with escalation based on skin severity, response, and need for systemic glucocorticoids.", "Use broad photoprotection, topical glucocorticoid or calcineurin inhibitor by site, and escalate persistent moderate or severe disease appropriately.", "Repeated systemic steroid courses without a durable skin strategy increase cumulative harm.", "A patient has persistent moderate cutaneous lupus despite hydroxychloroquine and appropriate topical therapy.", "Consider methotrexate, mycophenolic acid analog, anifrolumab, or belimumab with specialist guidance.", "The 2025 ACR guideline supports steroid-sparing conventional or biologic escalation for refractory moderate to severe cutaneous disease."),
  c("arthritis-serositis", "nonrenal-disease", "SLE arthritis and serositis", "Inflammatory arthritis and pleuropericarditis require mechanism-specific treatment while limiting repeated glucocorticoid exposure.", "Use short symptom control when appropriate, then add durable therapy for recurrent or persistent disease.", "Treating chest pain as lupus serositis without excluding infection, ischemia, embolism, or tamponade is unsafe.", "A patient with SLE has pleuritic chest pain, tachycardia, and hypotension.", "Evaluate urgently for dangerous cardiopulmonary causes before routine outpatient serositis treatment.", "SLE does not eliminate the need to exclude time-critical alternative causes of chest pain."),
  c("hematologic", "nonrenal-disease", "hematologic SLE", "Cytopenias range from asymptomatic laboratory findings to bleeding or hemodynamic emergencies and should be treated according to cause and severity.", "Confirm attribution, examine medicines and infection, and escalate promptly for symptomatic thrombocytopenia or hemolytic anemia.", "Treating asymptomatic leukopenia automatically with high-dose steroids can create more harm when no other activity exists.", "A patient has active bleeding with severe thrombocytopenia attributed to SLE.", "Use urgent glucocorticoid therapy with IVIG and or anti-CD20 therapy as clinically appropriate.", "The current guideline separates asymptomatic counts from symptomatic, organ-threatening hematologic disease."),
  c("neuro-cardio", "nonrenal-disease", "severe neuropsychiatric and cardiopulmonary SLE", "Myelitis, optic neuritis, acute confusional state, myocarditis, vasculitis, and diffuse alveolar hemorrhage can require urgent combination immunosuppression.", "Coordinate immediate multidisciplinary evaluation and treat confirmed inflammatory disease aggressively.", "Using symptomatic therapy alone for an inflammatory neurologic emergency leaves the driver untreated.", "A patient has seizures attributed to active SLE with concurrent inflammatory evidence.", "Combine antiseizure treatment with appropriate immunosuppressive therapy.", "Current guidance treats the neurologic manifestation and the underlying inflammation together."),

  c("conventional-selection", "steroid-sparing", "conventional steroid-sparing therapy", "Methotrexate, azathioprine, mycophenolic acid analogs, calcineurin inhibitors, and cyclophosphamide have different organ roles, toxicities, and reproductive implications.", "Match the agent to the active organ, severity, prior response, comorbidity, and reproductive goals.", "Treating all immunosuppressants as interchangeable ignores major efficacy and safety boundaries.", "A patient with persistent lupus arthritis and no renal disease needs steroid-sparing escalation.", "Select an organ-appropriate option such as methotrexate, azathioprine, or a mycophenolic acid analog rather than reflexive cyclophosphamide.", "Treatment intensity and mechanism should follow organ risk rather than the diagnosis label alone."),
  c("mycophenolate", "steroid-sparing", "mycophenolic acid analog therapy", "Mycophenolate suppresses lymphocyte purine synthesis and is central to many lupus nephritis and organ-threatening strategies.", "Monitor blood counts, infection, gastrointestinal tolerance, organ function, interactions, and reproductive risk.", "Using mycophenolate in pregnancy planning without a transition strategy ignores established fetal risk.", "A patient taking mycophenolate plans to carry a pregnancy soon.", "Coordinate a disease-stable transition to a pregnancy-compatible regimen before conception.", "Reproductive planning must occur before exposure changes because both disease activity and drug risk affect outcomes."),
  c("azathioprine-mtx", "steroid-sparing", "azathioprine and methotrexate selection", "Azathioprine and methotrexate can support nonrenal organ control but differ in metabolism, monitoring, pregnancy compatibility, and organ toxicity.", "Review blood counts, liver function, renal context, interactions, thiopurine risk, and reproductive plans before selection.", "Using methotrexate during maternal pregnancy planning or combining azathioprine with unsafe xanthine-oxidase inhibitor dosing can cause severe harm.", "A patient on azathioprine starts allopurinol without dose review.", "Contact the prescriber promptly before continuing the unadjusted combination and reconcile the dosing and blood-count monitoring plan.", "Xanthine oxidase inhibition can markedly increase active thiopurine exposure unless the regimen is deliberately adjusted."),
  c("cyclophosphamide", "steroid-sparing", "cyclophosphamide for severe SLE", "Cyclophosphamide is reserved for selected organ-threatening disease because its potency is paired with infection, marrow, bladder, malignancy, and gonadal toxicity.", "Use protocol-specific dosing, hydration and bladder protection where indicated, blood monitoring, infection prevention, and fertility counseling.", "Using cyclophosphamide for mild stable symptoms exposes the patient to disproportionate harm.", "A young adult needs urgent cyclophosphamide for active lupus myelitis.", "Begin life-saving therapy while addressing fertility preservation and cumulative-dose safety without avoidable delay.", "Severe disease can justify cyclophosphamide, but time-sensitive reproductive and toxicity planning remains part of the treatment."),

  c("belimumab", "biologic-therapy", "belimumab therapy", "Belimumab inhibits soluble BLyS and is labeled with standard therapy for active SLE and active lupus nephritis in patients five years and older.", "Use age, weight, indication, route, infection, hypersensitivity, mood, and vaccine context to select and monitor therapy.", "Repeating the older claim that Black patients inherently respond less is not a sound patient-level selection rule.", "A child with active SLE is being considered for subcutaneous belimumab.", "Use current weight-based pediatric labeling and specialist monitoring rather than an adult-only schedule.", "The current label includes pediatric SLE and nephritis dosing and supersedes older adult-only summaries."),
  c("anifrolumab", "biologic-therapy", "anifrolumab therapy", "Anifrolumab blocks the type I interferon receptor and is labeled for adults with moderate to severe SLE receiving standard therapy.", "Select intravenous 300 mg every four weeks or subcutaneous 120 mg weekly according to current labeling and patient context.", "Using anifrolumab for severe active nephritis or severe CNS lupus treats an unstudied population outside the label recommendation.", "An adult with moderate cutaneous and musculoskeletal SLE asks whether home injection is possible.", "Review the current subcutaneous formulation, training, infection risk, and suitability.", "The April 2026 label added weekly subcutaneous administration while preserving severe nephritis and CNS limitations."),
  c("anti-cd20", "biologic-therapy", "CD20-directed therapy", "Rituximab and obinutuzumab deplete CD20-positive B cells, but their SLE and lupus nephritis regulatory roles are not identical.", "Separate guideline-supported off-label use from current labeled indications and screen hepatitis B before treatment.", "Calling every anti-CD20 medicine FDA approved for every lupus manifestation misstates the evidence.", "An adult with active lupus nephritis is considered for obinutuzumab.", "Use its current lupus nephritis label with standard therapy and apply infusion, hepatitis, infection, and monitoring precautions.", "Obinutuzumab now has an adult active lupus nephritis indication, while rituximab remains used in selected guideline scenarios without a general SLE label."),
  c("biologic-safety", "biologic-therapy", "biologic safety and combination boundaries", "Belimumab and anifrolumab alter immune pathways and require infection, hypersensitivity, vaccine, malignancy, and product-specific monitoring.", "Avoid routine combination with another biologic and respond promptly to serious infection or infusion reactions.", "Stacking biologics to accelerate response can increase immunosuppression without established safety.", "A patient receiving anifrolumab is scheduled to start belimumab concurrently for persistent symptoms.", "Pause and clarify the unsupported dual-biologic plan.", "Current labeling does not recommend anifrolumab with other biologic therapies, and advanced therapy should have one explicit rationale."),

  c("ln-screen-biopsy", "lupus-nephritis", "lupus nephritis screening and biopsy", "People with SLE without known kidney disease should be screened for proteinuria at least every six to twelve months and during extra-renal flares.", "Quantify proteinuria, inspect urine sediment, assess kidney function, and consider biopsy when proteinuria exceeds 0.5 g/g or kidney dysfunction is otherwise unexplained.", "Waiting for nephrotic syndrome before checking urine can miss treatable inflammatory kidney disease.", "A patient with SLE develops urine protein to creatinine ratio 0.8 g/g and rising creatinine.", "Arrange prompt nephrology and rheumatology evaluation and consider kidney biopsy.", "Current ACR guidance uses a lower biopsy threshold because histology directs treatment."),
  c("ln-triple", "lupus-nephritis", "combination therapy for proliferative lupus nephritis", "Active class III or IV lupus nephritis is commonly treated with glucocorticoid plus a combination based on mycophenolate, belimumab, calcineurin inhibition, or low-dose cyclophosphamide.", "Choose among recommended triple strategies using biopsy, proteinuria, kidney function, comorbidity, fertility, access, and preference.", "Presenting high-dose steroid plus one immunosuppressant as the only modern induction strategy ignores the current combination framework.", "Biopsy shows active class IV lupus nephritis with substantial proteinuria.", "Build a guideline-consistent triple regimen and a rapid steroid taper plan.", "The 2024 ACR guideline shifts from a rigid induction-maintenance split toward ongoing combination therapy targeting different pathways."),
  c("voclosporin", "lupus-nephritis", "voclosporin safety", "Voclosporin is a calcineurin inhibitor labeled with background immunosuppression for adults with active lupus nephritis.", "Monitor eGFR, blood pressure, potassium, neurologic symptoms, QT risk, CYP3A interactions, and infection.", "Continuing a full dose through a major eGFR decline without label-based review can worsen nephrotoxicity.", "A patient on voclosporin develops hypertension, hyperkalemia, tremor, and falling eGFR.", "Reassess exposure and apply current dose-hold or discontinuation guidance urgently.", "The toxicity pattern is consistent with calcineurin inhibition and requires structured renal and cardiovascular response."),
  c("ln-response", "lupus-nephritis", "lupus nephritis response monitoring", "Proteinuria trajectory, kidney function, urine sediment, blood pressure, adherence, and toxicity determine whether the renal strategy is working.", "Quantify proteinuria at least every three months until complete renal response, then every three to six months during sustained response.", "Using complement alone to declare renal remission ignores the organ outcome.", "After six months, proteinuria has not improved and medication access has been inconsistent.", "Confirm exposure, reassess pathology and complications, and escalate or redesign therapy with the renal team.", "Renal response requires objective urine and kidney outcomes plus confirmation that the intended regimen was actually received."),

  c("vaccination-infection", "prevention-reproduction", "infection prevention and vaccination", "Immunosuppressive SLE therapy increases infection risk, while non-live vaccines generally remain important and live-vaccine timing depends on the regimen.", "Review vaccines before advanced therapy and use current ACR and CDC timing rather than withholding every vaccine.", "Starting biologic therapy during an active serious infection or giving a live vaccine without timing review can cause harm.", "A patient is about to start anifrolumab and is due for recombinant zoster vaccine.", "Give the indicated non-live vaccine when feasible and coordinate treatment timing.", "Herpes zoster risk and the non-live vaccine platform make prevention especially relevant before IFNAR blockade."),
  c("comorbidity", "prevention-reproduction", "comorbidity prevention in SLE", "Cardiovascular disease, bone damage, malignancy, infection, mental health, reproductive health, and medication toxicity contribute to long-term outcomes.", "Screen and manage these risks alongside disease activity rather than after a complication appears.", "Calling all morbidity unavoidable lupus damage neglects preventable treatment and comorbidity risk.", "A patient has controlled SLE but smokes, has hypertension, prolonged steroid exposure, and no bone assessment.", "Build cardiovascular, tobacco, bone, and steroid-risk interventions into follow-up.", "Low inflammatory activity does not remove accumulated and preventable long-term risk."),
  c("reproductive", "prevention-reproduction", "reproductive planning in SLE", "Pregnancy outcomes are better when conception occurs during stable low disease activity on a compatible regimen.", "Discuss contraception, fertility preservation, teratogenic medicines, thrombosis risk, anti-Ro and anti-La antibodies, and pregnancy-compatible transitions before conception.", "Stopping every medicine at a positive pregnancy test can trigger disease activity and may not reverse prior exposure.", "A patient taking mycophenolate and lisinopril plans to carry a pregnancy within two months.", "Delay conception and coordinate a stable transition to compatible disease and kidney therapy.", "Preconception planning protects against both uncontrolled disease and medication-related fetal risk."),
  c("apl", "prevention-reproduction", "antiphospholipid antibody risk", "Antiphospholipid antibodies can change thrombosis, pregnancy, estrogen, and perioperative decisions, but antibody positivity alone is not identical to antiphospholipid syndrome.", "Document antibody profile and clinical history, then apply the separate APS framework when criteria are met.", "Anticoagulating every positive test without clinical context can expose patients to bleeding.", "A patient with SLE has persistent high-risk antibodies and a prior unprovoked thrombosis.", "Evaluate and manage as possible thrombotic APS with specialist guidance.", "Clinical events and persistent antibody findings define a different risk state from an isolated positive result."),

  c("remission-taper", "longitudinal-care", "remission and immunosuppressive tapering", "Sustained remission or low disease activity can permit cautious immunosuppressive tapering after several years, while hydroxychloroquine is generally continued.", "Confirm sustained control, taper one element deliberately, and preserve monitoring and a flare plan.", "Stopping every therapy after one quiet visit mistakes control for cure.", "A patient has sustained remission for four years on hydroxychloroquine and azathioprine.", "Discuss gradual azathioprine tapering while generally maintaining hydroxychloroquine and surveillance.", "The 2025 ACR guideline conditionally supports immunosuppressive tapering after three to five years of sustained control."),
  c("flare-plan", "longitudinal-care", "the SLE flare plan", "A flare plan defines early symptoms, urgent organ signals, contact routes, laboratory reassessment, temporary measures, and who can change immunosuppression.", "Separate routine symptom recurrence from renal, neurologic, cardiopulmonary, hematologic, or infectious emergencies.", "Self-starting leftover high-dose steroids for every symptom can hide infection and delay organ assessment.", "A patient develops new weakness and dark urine but plans to wait for the next routine visit.", "Use the urgent pathway for possible hemolysis, nephritis, or other organ disease.", "A useful flare plan makes the escalation threshold explicit before symptoms occur."),
  c("continuity", "longitudinal-care", "the authoritative SLE treatment timeline", "Safe continuity requires diagnosis, organ history, activity and damage, current and prior therapies, last doses, holds, vaccines, monitoring, reproductive plan, and reasons for every change.", "Maintain one reconciled timeline across rheumatology, nephrology, dermatology, primary care, pharmacy, and emergency care.", "A medication list without organ indication or last biologic dose cannot support a safe handoff.", "A hospitalized patient has infection and no team knows when the last biologic dose was given.", "Reconstruct exposure and assign one documented restart decision.", "Precise timing and ownership prevent duplicate dosing, prolonged interruption, and unsafe restart."),
  c("access-equity", "longitudinal-care", "access and equity in SLE care", "Testing, specialists, transportation, insurance, medication supply, language, and structural inequity can alter outcomes and the feasibility of preferred therapy.", "Choose an evidence-based plan the patient can actually receive and revisit barriers at every transition.", "Labeling missed infusions as nonadherence without examining access can worsen inequity and produce an ineffective plan.", "A patient misses belimumab infusions because the nearest center is hours away.", "Discuss a feasible labeled route or alternative and solve transportation and coverage barriers.", "Shared decisions must include delivery reality, not only theoretical efficacy."),
];

const alternatives = {
  "multisystem-pattern": [
    [
      "SLE is confined to skin and cannot injure the kidneys.",
      "Joint symptoms exclude systemic organ involvement.",
      "Renal disease is excluded whenever the rash improves."
    ],
    [
      "Treat only the rash and defer urine testing.",
      "Attribute the edema to lupus without assessing kidney function.",
      "Wait for severe flank pain before considering nephritis."
    ]
  ],
  "classification-boundary": [
    [
      "A positive ANA alone establishes active SLE.",
      "Classification criteria replace clinical assessment in every patient.",
      "Every positive ANA requires immunosuppressive treatment."
    ],
    [
      "Diagnose active SLE solely from the ANA.",
      "Start prednisone to normalize the ANA despite no symptoms.",
      "Order induction cyclophosphamide because ANA is positive."
    ]
  ],
  "flare-mimic": [
    [
      "Fever during SLE always indicates a flare.",
      "Infection and a lupus flare cannot coexist.",
      "A low complement value rules out bacterial infection."
    ],
    [
      "Give outpatient steroids alone and defer infection evaluation.",
      "Wait for complement results before addressing hypotension.",
      "Assume the cough is lupus because immunosuppression prevents infection."
    ]
  ],
  "drug-induced": [
    [
      "Antihistone antibodies prove drug causality without an exposure history.",
      "Drug-induced lupus never improves after medication withdrawal.",
      "Hydralazine-associated symptoms exclude serious kidney injury."
    ],
    [
      "Continue hydralazine without reviewing its temporal relationship.",
      "Dismiss the syndrome because onset was delayed for months.",
      "Diagnose lifelong idiopathic SLE from antihistone antibodies alone."
    ]
  ],
  "loss-tolerance": [
    [
      "One environmental exposure explains every case of SLE.",
      "SLE requires an inherited mutation with complete penetrance.",
      "Adaptive immunity has no role in SLE."
    ],
    [
      "State that sunlight is the sole sufficient cause of SLE.",
      "Promise that avoiding daylight permanently cures SLE.",
      "Explain that ultraviolet exposure cannot affect lupus activity."
    ]
  ],
  "interferon": [
    [
      "Anifrolumab increases type I interferon receptor signaling.",
      "Anifrolumab acts only as a nonimmune analgesic.",
      "Blocking type I interferon has no effect on host defense."
    ],
    [
      "Explain that the drug is an antiviral that eliminates zoster risk.",
      "Recommend a live zoster vaccine during treatment without timing review.",
      "Dismiss the infection risk because the drug targets a receptor."
    ]
  ],
  "b-cell-blys": [
    [
      "Belimumab directly targets CD20.",
      "BLyS is a replacement complement protein.",
      "Belimumab and obinutuzumab have identical molecular targets."
    ],
    [
      "Teach that both antibodies bind the same target.",
      "Substitute one drug for the other at the same dose.",
      "Describe belimumab as a direct complement replacement."
    ]
  ],
  "immune-complex": [
    [
      "Immune complexes cannot contribute to lupus nephritis.",
      "Low complement alone always mandates more immunosuppression.",
      "Normal complement excludes every active lupus manifestation."
    ],
    [
      "Declare renal remission because the patient has no flank pain.",
      "Change treatment using complement alone without quantifying renal findings.",
      "Dismiss worsening urine findings as unrelated to SLE without evaluation."
    ]
  ],
  "organ-priority": [
    [
      "The most visible symptom always determines treatment urgency.",
      "Organ-threatening lupus must be treated one manifestation at a time.",
      "A mild rash makes concurrent neurologic disease low risk."
    ],
    [
      "Treat the rash first and defer neurologic care.",
      "Use topical therapy alone for the full flare.",
      "Wait for joint improvement before evaluating the neurologic deficits."
    ]
  ],
  "activity-damage": [
    [
      "All chronic pain in SLE reflects active immune inflammation.",
      "Escalating immunosuppression reverses established avascular necrosis.",
      "Damage assessment is unnecessary when serology is stable."
    ],
    [
      "Increase immunosuppression solely to reverse avascular necrosis.",
      "Call the structural pain a flare without inflammatory evidence.",
      "Ignore the pain because stable serology excludes all morbidity."
    ]
  ],
  "steroid-minimization": [
    [
      "Prednisone above 5 mg daily is the preferred indefinite maintenance target for controlled SLE.",
      "Steroid-sparing therapy should wait until cumulative toxicity occurs.",
      "Controlled disease requires abrupt cessation of long-term prednisone."
    ],
    [
      "Maintain 15 mg indefinitely without reconsidering the regimen.",
      "Stop long-term prednisone abruptly tonight.",
      "Increase prednisone despite controlled disease solely to prevent all future flares."
    ]
  ],
  "refractory-escalation": [
    [
      "Tolerability alone proves an active-disease regimen is adequate.",
      "A prescription list proves that all doses were received.",
      "Persistent inflammatory arthritis should always be treated with analgesics alone."
    ],
    [
      "Continue the failed regimen indefinitely because it is tolerated.",
      "Declare irreversible damage without reassessing synovitis.",
      "Stop hydroxychloroquine and methotrexate without a replacement plan."
    ]
  ],
  "hcq-foundation": [
    [
      "Hydroxychloroquine must be stopped at the first remission visit.",
      "Hydroxychloroquine is used only for acute pain relief.",
      "Disease remission eliminates hydroxychloroquine toxicity monitoring needs."
    ],
    [
      "Stop automatically because symptoms are absent.",
      "Replace it with chronic high-dose prednisone solely because disease is quiet.",
      "Continue it without any future eye or toxicity monitoring."
    ]
  ],
  "hcq-dose-eye": [
    [
      "Actual body weight is irrelevant to long-term retinal risk.",
      "Renal disease does not affect retinal toxicity risk.",
      "A normal baseline eye examination eliminates later surveillance."
    ],
    [
      "Maintain the dose without reviewing weight or renal changes.",
      "Wait for permanent visual loss before screening.",
      "Cancel eye follow-up because the first baseline test was normal."
    ]
  ],
  "hcq-systemic-safety": [
    [
      "Retinal injury is the only serious hydroxychloroquine toxicity.",
      "Hydroxychloroquine cannot affect cardiac conduction.",
      "Hypoglycemia is excluded in a patient without diabetes."
    ],
    [
      "Dismiss the block because retinal screening is normal.",
      "Increase hydroxychloroquine to treat presumed cardiac inflammation without evaluation.",
      "Wait for the next routine eye appointment to assess syncope."
    ]
  ],
  "hcq-adherence": [
    [
      "A medication listed in the chart proves continuous exposure.",
      "Refill gaps establish pharmacologic resistance.",
      "Access barriers do not affect treatment response."
    ],
    [
      "Label hydroxychloroquine ineffective without discussing actual use.",
      "Escalate solely because the chart lists adequate dosing.",
      "Tell the patient to take all missed doses together."
    ]
  ],
  "cutaneous": [
    [
      "Photoprotection has no role once hydroxychloroquine is prescribed.",
      "All skin lupus requires indefinite high-dose oral glucocorticoids.",
      "Persistent moderate cutaneous disease never warrants steroid-sparing escalation."
    ],
    [
      "Repeat systemic steroid courses indefinitely without a durable plan.",
      "Stop topical treatment and sun protection because they did not fully control disease.",
      "Observe progressing moderate disease indefinitely without reassessment."
    ]
  ],
  "arthritis-serositis": [
    [
      "All chest pain in a patient with SLE is benign serositis.",
      "Hypotension excludes tamponade.",
      "Persistent arthritis should be managed only with repeated steroid bursts."
    ],
    [
      "Prescribe an outpatient NSAID without assessing hypotension.",
      "Assume lupus serositis excludes pulmonary embolism.",
      "Defer assessment until the next routine rheumatology visit."
    ]
  ],
  "hematologic": [
    [
      "All cytopenias have the same urgency and treatment.",
      "Active bleeding with severe thrombocytopenia should be observed without intervention.",
      "Asymptomatic isolated leukopenia always requires high-dose steroids."
    ],
    [
      "Observe active bleeding without urgent treatment.",
      "Wait for a maintenance agent to work before addressing the bleeding.",
      "Assume thrombocytopenia is harmless because lupus is chronic."
    ]
  ],
  "neuro-cardio": [
    [
      "Antiseizure therapy alone treats the inflammatory cause of active lupus seizures.",
      "Confirmed active lupus myelitis is a routine outpatient symptom.",
      "All cognitive complaints justify cyclophosphamide."
    ],
    [
      "Use antiseizure therapy alone and ignore confirmed lupus activity.",
      "Withhold seizure treatment because immunosuppression addresses inflammation.",
      "Defer both seizure and inflammatory treatment until routine follow-up."
    ]
  ],
  "conventional-selection": [
    [
      "All conventional immunosuppressants have identical organ roles.",
      "Cyclophosphamide is the routine first choice for every mild lupus manifestation.",
      "Reproductive goals do not influence immunosuppressant selection."
    ],
    [
      "Start cyclophosphamide reflexively for arthritis without considering less toxic options.",
      "Select an agent without reviewing organ severity.",
      "Continue repeated high-dose steroid courses as the sole durable plan."
    ]
  ],
  "mycophenolate": [
    [
      "Mycophenolate is routinely pregnancy compatible.",
      "Mycophenolate requires no blood-count monitoring.",
      "Mycophenolate acts by replacing missing complement."
    ],
    [
      "Attempt pregnancy immediately without medication review.",
      "Stop every therapy abruptly and attempt conception during uncontrolled disease.",
      "Assume contraception is unnecessary because lupus itself prevents pregnancy."
    ]
  ],
  "azathioprine-mtx": [
    [
      "Allopurinol has no clinically important interaction with azathioprine.",
      "Methotrexate and azathioprine have identical reproductive precautions.",
      "Blood-count monitoring is unnecessary for thiopurines."
    ],
    [
      "Continue both doses unchanged without monitoring review.",
      "Double azathioprine to compensate for allopurinol.",
      "Check only a uric acid level and ignore marrow toxicity risk."
    ]
  ],
  "cyclophosphamide": [
    [
      "Cyclophosphamide has no cumulative or gonadal toxicity.",
      "Cyclophosphamide is preferred for every mild stable lupus symptom.",
      "Bladder and blood-count monitoring are unnecessary."
    ],
    [
      "Delay urgent myelitis treatment indefinitely for elective fertility procedures.",
      "Start therapy without any fertility or toxicity discussion.",
      "Use topical therapy alone for active myelitis."
    ]
  ],
  "belimumab": [
    [
      "Belimumab is a direct anti-CD20 antibody.",
      "Belimumab is labeled only for adults and never for nephritis.",
      "Every child receives the same SC schedule regardless of weight and indication."
    ],
    [
      "Use an adult schedule without checking weight or indication.",
      "Use the prefilled syringe as the standard studied pediatric presentation.",
      "Reject therapy solely because the child is not yet eighteen."
    ]
  ],
  "anifrolumab": [
    [
      "Anifrolumab is recommended for severe active CNS lupus.",
      "Anifrolumab is approved for children under five.",
      "Anifrolumab is a BLyS inhibitor with no interferon effect."
    ],
    [
      "State that no SC formulation exists despite the current label.",
      "Promise the same labeled regimen treats severe active CNS lupus.",
      "Recommend routine concurrent belimumab to make home treatment safer."
    ]
  ],
  "anti-cd20": [
    [
      "Every anti-CD20 antibody has an FDA indication for every SLE manifestation.",
      "Hepatitis B screening is irrelevant before B-cell depletion.",
      "Obinutuzumab and belimumab both inhibit soluble BLyS."
    ],
    [
      "Describe obinutuzumab as a substitute for any lupus biologic at the same dose.",
      "Start treatment without hepatitis B evaluation.",
      "Assume its nephritis approval establishes approval for all nonrenal SLE."
    ]
  ],
  "biologic-safety": [
    [
      "Routine dual-biologic treatment has established safety in SLE.",
      "Advanced immune therapy eliminates serious infection risk.",
      "Product-specific safety review is unnecessary once a mechanism is known."
    ],
    [
      "Start both concurrently solely to accelerate response.",
      "Omit infection review because the targets differ.",
      "Combine them and eliminate laboratory follow-up."
    ]
  ],
  "ln-screen-biopsy": [
    [
      "Urine screening can wait until nephrotic syndrome appears.",
      "Absence of symptoms excludes lupus nephritis.",
      "Proteinuria must exceed 3.5 g/g before biopsy can be considered."
    ],
    [
      "Wait for nephrotic-range proteinuria before referral.",
      "Dismiss the renal findings because no flank pain is reported.",
      "Treat only the skin without evaluating the rising creatinine."
    ]
  ],
  "ln-triple": [
    [
      "Current proliferative-nephritis treatment never combines targeted and conventional therapy.",
      "Biopsy class has no bearing on regimen selection.",
      "Glucocorticoid monotherapy is the sole modern regimen for active class IV disease."
    ],
    [
      "Use long-term glucocorticoid monotherapy as the entire plan.",
      "Choose the regimen without reviewing renal function or biopsy.",
      "Wait for advanced kidney failure before initiating immunosuppression."
    ]
  ],
  "voclosporin": [
    [
      "Voclosporin has no nephrotoxicity risk.",
      "Voclosporin is a BLyS monoclonal antibody.",
      "CYP3A interactions do not affect voclosporin exposure."
    ],
    [
      "Continue full dosing without reviewing the renal decline.",
      "Increase the dose because tremor proves inadequate exposure.",
      "Treat potassium elevation as reassuring evidence of efficacy."
    ]
  ],
  "ln-response": [
    [
      "Complement normalization alone establishes complete renal response.",
      "Medication access does not affect interpretation of treatment failure.",
      "Proteinuria need not be measured once induction begins."
    ],
    [
      "Declare drug resistance without confirming exposure.",
      "Declare remission solely from complement levels.",
      "Leave persistent proteinuria unassessed because six months have passed."
    ]
  ],
  "vaccination-infection": [
    [
      "All vaccines are contraindicated throughout SLE treatment.",
      "Live and non-live vaccines have identical timing rules.",
      "Anifrolumab prevents herpes zoster."
    ],
    [
      "Withhold all vaccines permanently.",
      "Substitute a live vaccine during treatment without safety review.",
      "Skip recombinant zoster vaccination because anifrolumab prevents reactivation."
    ]
  ],
  "comorbidity": [
    [
      "Controlled inflammation eliminates cardiovascular and bone risk.",
      "Smoking cessation is irrelevant once SLE is treated.",
      "All treatment-related morbidity is unavoidable."
    ],
    [
      "Ignore cardiovascular and bone risk because SLE activity is low.",
      "Increase chronic prednisone solely to prevent osteoporosis.",
      "Defer tobacco and pressure management until another flare."
    ]
  ],
  "reproductive": [
    [
      "Pregnancy planning can safely ignore the current drug regimen.",
      "Stopping all therapy at conception guarantees a better outcome.",
      "Antibody profile has no relevance to pregnancy counseling."
    ],
    [
      "Attempt conception without changing or reviewing the regimen.",
      "Wait for a positive test before discussing medication risk.",
      "Stop every drug abruptly and assume active nephritis cannot affect pregnancy."
    ]
  ],
  "apl": [
    [
      "A single positive antibody test always establishes APS.",
      "Every positive antiphospholipid test requires therapeutic anticoagulation.",
      "Prior thrombosis is irrelevant to interpreting persistent antibodies."
    ],
    [
      "Dismiss the prior thrombosis because current symptoms are quiet.",
      "Treat the findings as equivalent to one isolated low-risk positive test.",
      "Assume SLE excludes a concurrent APS diagnosis."
    ]
  ],
  "remission-taper": [
    [
      "One quiet visit establishes permanent cure.",
      "All therapies should be stopped simultaneously once symptoms improve.",
      "Hydroxychloroquine must always be withdrawn before azathioprine."
    ],
    [
      "Stop both drugs immediately without monitoring.",
      "End surveillance because four years of remission guarantees cure.",
      "Increase azathioprine solely because remission has lasted four years."
    ]
  ],
  "flare-plan": [
    [
      "Every recurrent symptom should be self-treated with leftover high-dose steroids.",
      "A flare plan need not distinguish emergencies.",
      "Dark urine with new weakness is always safe to defer."
    ],
    [
      "Wait for the routine visit without contacting the care team.",
      "Self-start leftover prednisone without evaluation.",
      "Assume weakness and dark urine cannot reflect organ disease."
    ]
  ],
  "continuity": [
    [
      "The medication name alone is sufficient for a safe biologic handoff.",
      "Last-dose timing is irrelevant during infection.",
      "Every team should independently restart biologics without coordination."
    ],
    [
      "Give another biologic dose before reconstructing exposure.",
      "Allow separate teams to restart therapy independently.",
      "Assume the scheduled date proves the infusion occurred."
    ]
  ],
  "access-equity": [
    [
      "Missed infusions always indicate deliberate refusal.",
      "Travel and insurance barriers do not affect efficacy in practice.",
      "Route feasibility is unrelated to shared decisions."
    ],
    [
      "Label the patient unwilling without discussing transportation.",
      "Keep the inaccessible plan unchanged indefinitely.",
      "Terminate therapy solely because travel caused missed appointments."
    ]
  ]
};

const voclosporinCases = [
  {
    "id": "sle-voclosporin-capsules",
    "conceptGroup": "voclosporin-capsules",
    "lesson": "voclosporin-dosing",
    "difficulty": "Foundational",
    "question": "A prescribed voclosporin dose is 23.7 mg twice daily. The capsules contain 7.9 mg each. How many capsules are taken per dose?",
    "choices": [
      "Three",
      "One",
      "Two",
      "Six"
    ],
    "answer": 0,
    "explanation": "23.7 divided by 7.9 equals three capsules per dose; six is the total daily number. Capsules are swallowed intact.",
    "reviewHref": "#voclosporin-dosing"
  },
  {
    "id": "sle-voclosporin-schedule",
    "conceptGroup": "voclosporin-schedule",
    "lesson": "voclosporin-dosing",
    "difficulty": "Applied",
    "question": "An adult is starting voclosporin for active lupus nephritis. Which planned eGFR schedule matches labeling?",
    "choices": [
      "Every two weeks in month one, every four weeks through year one, then quarterly",
      "Quarterly from the first dose",
      "Once after one year unless edema develops",
      "Weekly indefinitely for every patient"
    ],
    "answer": 0,
    "explanation": "Early monitoring is more frequent because renal toxicity can require prompt dose reduction. Routine proteinuria monitoring does not replace this product-specific eGFR schedule.",
    "reviewHref": "#voclosporin-dosing"
  },
  {
    "id": "sle-voclosporin-stop",
    "conceptGroup": "voclosporin-stop",
    "lesson": "voclosporin-dosing",
    "difficulty": "Advanced",
    "question": "During voclosporin treatment, eGFR falls from 75 to 50 mL/min/1.73 m². Which action follows the renal algorithm?",
    "choices": [
      "Discontinue and reassess eGFR within two weeks",
      "Reduce each dose by 7.9 mg without discontinuing",
      "Continue unchanged until eGFR reaches 30",
      "Double the dose to treat presumed nephritis progression"
    ],
    "answer": 0,
    "explanation": "The decline is 25/75 × 100 = 33.3%, and eGFR is below 60. Both conditions for discontinuation are met. The cause still requires clinical evaluation.",
    "reviewHref": "#voclosporin-dosing"
  },
  {
    "id": "sle-voclosporin-restart",
    "conceptGroup": "voclosporin-restart",
    "lesson": "voclosporin-dosing",
    "difficulty": "Advanced",
    "question": "Voclosporin was discontinued for renal decline from a baseline eGFR of 80. Which reassessment could meet the label threshold to consider restarting at 7.9 mg twice daily?",
    "choices": [
      "eGFR 64 mL/min/1.73 m²",
      "eGFR 60 mL/min/1.73 m²",
      "eGFR 56 mL/min/1.73 m²",
      "eGFR 48 mL/min/1.73 m²"
    ],
    "answer": 0,
    "explanation": "Eighty percent of 80 is 64. Meeting this recovery threshold permits consideration of low-dose restart; it does not require automatic restart.",
    "reviewHref": "#voclosporin-dosing"
  },
  {
    "id": "sle-voclosporin-absolute",
    "conceptGroup": "voclosporin-absolute",
    "lesson": "voclosporin-dosing",
    "difficulty": "Advanced",
    "question": "An adult on voclosporin has eGFR fall from 100 to 75 mL/min/1.73 m². Which interpretation is correct?",
    "choices": [
      "The 25% decline needs evaluation, but does not meet the label reduction algorithm because eGFR is not below 60",
      "Any decline above 20% requires discontinuation regardless of absolute eGFR",
      "The unchanged dose is proven safe and no evaluation is needed",
      "The decline meets the label criteria for a 7.9 mg twice-daily restart"
    ],
    "answer": 0,
    "explanation": "The specified renal reduction branch requires both eGFR below 60 and decline above 20%. A 25% decline can still be clinically important and must be evaluated.",
    "reviewHref": "#voclosporin-dosing"
  },
  {
    "id": "sle-voclosporin-moderate-inhibitor",
    "conceptGroup": "voclosporin-moderate-inhibitor",
    "lesson": "voclosporin-dosing",
    "difficulty": "Applied",
    "question": "Diltiazem is added to an adult voclosporin regimen after interaction review. Which voclosporin dose is specified for this moderate CYP3A4 inhibitor?",
    "choices": [
      "15.8 mg each morning and 7.9 mg each evening",
      "23.7 mg twice daily without adjustment",
      "7.9 mg once weekly",
      "31.6 mg twice daily"
    ],
    "answer": 0,
    "explanation": "Moderate CYP3A4 inhibition raises voclosporin exposure. The label uses an asymmetric 15.8 mg morning and 7.9 mg evening regimen; strong inhibitors are contraindicated.",
    "reviewHref": "#voclosporin-dosing"
  },
  {
    "id": "sle-voclosporin-missed",
    "conceptGroup": "voclosporin-missed",
    "lesson": "voclosporin-dosing",
    "difficulty": "Applied",
    "question": "A patient remembers a voclosporin dose six hours after it was due. What instruction fits the label?",
    "choices": [
      "Skip the missed dose and take the next regular dose at its scheduled time",
      "Take the missed dose now and the next dose two hours later",
      "Double the next scheduled dose",
      "Stop all future doses until the next monthly visit"
    ],
    "answer": 0,
    "explanation": "The catch-up window is within four hours. After that, skip rather than doubling or compressing the interval.",
    "reviewHref": "#voclosporin-dosing"
  },
  {
    "id": "sle-voclosporin-baseline",
    "conceptGroup": "voclosporin-baseline",
    "lesson": "voclosporin-dosing",
    "difficulty": "Applied",
    "question": "A patient with active lupus nephritis has baseline eGFR 42 mL/min/1.73 m². Which statement about starting voclosporin is accurate?",
    "choices": [
      "Use is generally not recommended unless the expected benefit outweighs the risk",
      "This value is an absolute labeled contraindication in every circumstance",
      "The usual dose is automatically required because nephritis is active",
      "Renal function has no role in initial selection"
    ],
    "answer": 0,
    "explanation": "Baseline eGFR at or below 45 invokes a benefit-risk exception, not an absolute contraindication. The decision and any renal dose adjustment require specialist review.",
    "reviewHref": "#voclosporin-dosing"
  },
  {
    "id": "sle-voclosporin-bp",
    "conceptGroup": "voclosporin-bp",
    "lesson": "voclosporin-dosing",
    "difficulty": "Applied",
    "question": "During voclosporin treatment, blood pressure is confirmed at 174/112 mmHg. What product-specific action is indicated?",
    "choices": [
      "Discontinue voclosporin and initiate antihypertensive treatment",
      "Continue unchanged and wait three months",
      "Increase voclosporin to improve renal disease first",
      "Give an extra voclosporin dose and repeat pressure tomorrow"
    ],
    "answer": 0,
    "explanation": "The label directs discontinuation and antihypertensive treatment when blood pressure exceeds 165/105 or a hypertensive emergency occurs; emergency symptoms also require urgent care.",
    "reviewHref": "#voclosporin-dosing"
  },
  {
    "id": "sle-voclosporin-strong-inhibitor",
    "conceptGroup": "voclosporin-strong-inhibitor",
    "lesson": "voclosporin-dosing",
    "difficulty": "Applied",
    "question": "Which newly prescribed medicine represents a labeled contraindicated interaction with voclosporin?",
    "choices": [
      "Clarithromycin",
      "Acetaminophen",
      "Plain calcium carbonate",
      "Artificial tears"
    ],
    "answer": 0,
    "explanation": "Clarithromycin strongly inhibits CYP3A4, increasing voclosporin exposure and nephrotoxicity risk. Choose an appropriate alternative or redesign therapy before coadministration.",
    "reviewHref": "#voclosporin-dosing"
  }
];

const focusedCases = [
  {
    "id": "sle-focused-belimumab-adult-loading",
    "conceptGroup": "belimumab-adult-loading",
    "lesson": "biologic-therapy",
    "difficulty": "Applied",
    "question": "An adult starts subcutaneous belimumab for active lupus nephritis. Which regimen matches labeling?",
    "choices": [
      "400 mg weekly for four doses, then 200 mg weekly",
      "200 mg every two weeks without loading",
      "400 mg daily for four days, then weekly",
      "10 mg/kg by subcutaneous injection every four weeks"
    ],
    "answer": 0,
    "explanation": "Adult SC nephritis begins with four weekly 400 mg doses, each given as two 200 mg injections. Nonrenal adult SLE uses 200 mg weekly without that loading schedule.",
    "reviewHref": "#biologic-therapy"
  },
  {
    "id": "sle-focused-belimumab-child-ln",
    "conceptGroup": "belimumab-child-ln",
    "lesson": "biologic-therapy",
    "difficulty": "Applied",
    "question": "An eight-year-old weighing 30 kg is prescribed SC belimumab for active lupus nephritis. Which schedule and administration plan fit current labeling?",
    "choices": [
      "200 mg weekly for four doses, then every two weeks, using an autoinjector administered by a trained caregiver or healthcare professional",
      "400 mg weekly indefinitely, using a prefilled syringe self-administered by the child",
      "200 mg every four weeks without loading, using an autoinjector",
      "10 mg/kg SC daily until proteinuria resolves"
    ],
    "answer": 0,
    "explanation": "At 15 to less than 40 kg, pediatric SC nephritis dosing loads with 200 mg weekly for four doses then every two weeks. Pediatric SC use is with the autoinjector; children younger than ten require a trained caregiver or healthcare professional.",
    "reviewHref": "#biologic-therapy"
  },
  {
    "id": "sle-focused-belimumab-child-sle",
    "conceptGroup": "belimumab-child-sle",
    "lesson": "biologic-therapy",
    "difficulty": "Applied",
    "question": "A 12-year-old weighing 35 kg starts SC belimumab for active nonrenal SLE. Which schedule matches labeling?",
    "choices": [
      "200 mg every two weeks",
      "400 mg weekly for four doses, then 200 mg weekly",
      "200 mg daily",
      "10 mg/kg SC every two weeks"
    ],
    "answer": 0,
    "explanation": "For pediatric nonrenal SLE at 15 to less than 40 kg, the autoinjector schedule is 200 mg every two weeks. The weight, indication, and route must all match.",
    "reviewHref": "#biologic-therapy"
  },
  {
    "id": "sle-focused-belimumab-iv-calculation",
    "conceptGroup": "belimumab-iv-calculation",
    "lesson": "biologic-therapy",
    "difficulty": "Applied",
    "question": "A 60 kg adult receives belimumab 10 mg/kg IV. The reconstituted concentration is 80 mg/mL. What drug volume is needed before dilution?",
    "choices": [
      "7.5 mL",
      "6 mL",
      "75 mL",
      "0.75 mL"
    ],
    "answer": 0,
    "explanation": "The dose is 60 × 10 = 600 mg; 600/80 = 7.5 mL. This is the reconstituted drug volume, not the final infusion volume. Dilute and infuse over one hour; never administer as an IV push.",
    "reviewHref": "#biologic-therapy"
  },
  {
    "id": "sle-focused-belimumab-vaccine",
    "conceptGroup": "belimumab-vaccine",
    "lesson": "biologic-therapy",
    "difficulty": "Applied",
    "question": "A live vaccine is planned immediately before initiating belimumab. Which label instruction needs to be applied?",
    "choices": [
      "Do not give live vaccines within 30 days before or during belimumab treatment",
      "Live vaccines are preferred during belimumab infusion",
      "All non-live vaccines are permanently prohibited",
      "Live-vaccine timing depends only on the belimumab dose, not the interval"
    ],
    "answer": 0,
    "explanation": "Belimumab labeling specifies a 30-day pre-treatment interval and avoidance during treatment for live vaccines. This does not mean all non-live vaccines should be withheld.",
    "reviewHref": "#biologic-therapy"
  },
  {
    "id": "sle-focused-belimumab-skin-reaction",
    "conceptGroup": "belimumab-skin-reaction",
    "lesson": "biologic-therapy",
    "difficulty": "Applied",
    "question": "A patient on belimumab develops a blistering rash and mucosal erosions concerning for SJS/TEN. What action fits current labeling?",
    "choices": [
      "Discontinue immediately and obtain urgent specialist assessment; do not reintroduce if attributed to belimumab",
      "Give the next dose to test whether symptoms recur",
      "Treat with moisturizer alone and continue therapy",
      "Switch to IV belimumab because this eliminates severe skin reactions"
    ],
    "answer": 0,
    "explanation": "Suspected SJS/TEN requires immediate discontinuation and diagnostic assessment. If belimumab is the cause, it is permanently discontinued and not reintroduced.",
    "reviewHref": "#biologic-therapy"
  },
  {
    "id": "sle-focused-belimumab-subgroup",
    "conceptGroup": "belimumab-subgroup",
    "lesson": "biologic-therapy",
    "difficulty": "Advanced",
    "question": "A learner says the belimumab trials prove that a Black patient cannot benefit. Which interpretation best matches current labeling?",
    "choices": [
      "Results across subgroup and dedicated studies were mixed and do not determine an individual response",
      "Every study demonstrated statistically significant harm in Black participants",
      "The dedicated trial proved identical efficacy in all racial groups",
      "Race alone is a labeled contraindication"
    ],
    "answer": 0,
    "explanation": "Early exploratory IV subgroup findings differed from later studies. The dedicated trial numerically favored belimumab but was not statistically significant. These data require honest uncertainty, not race-based certainty about an individual.",
    "reviewHref": "#biologic-therapy"
  },
  {
    "id": "sle-focused-platelet-threshold",
    "conceptGroup": "platelet-threshold",
    "lesson": "nonrenal-disease",
    "difficulty": "Applied",
    "question": "Chronic asymptomatic thrombocytopenia with platelets 24,000/mcL is attributed to SLE. What does ACR 2025 conditionally favor?",
    "choices": [
      "Glucocorticoid plus an additional suitable therapy",
      "Observation solely because bleeding is absent",
      "Glucocorticoid monotherapy as the only acceptable strategy",
      "No treatment unless platelets fall below 1,000/mcL"
    ],
    "answer": 0,
    "explanation": "For chronic asymptomatic platelets below 30,000/mcL, ACR conditionally favors glucocorticoids with another appropriate therapy. This differs from isolated asymptomatic neutropenia or lymphopenia without other lupus activity.",
    "reviewHref": "#nonrenal-disease"
  },
  {
    "id": "sle-focused-cognition-boundary",
    "conceptGroup": "cognition-boundary",
    "lesson": "nonrenal-disease",
    "difficulty": "Applied",
    "question": "Neuropsychological testing confirms isolated cognitive dysfunction attributed to SLE, without an inflammatory neurologic syndrome requiring immunosuppression. Which approach fits ACR 2025?",
    "choices": [
      "Use cognitive therapy without adding immunosuppression solely for this finding",
      "Start cyclophosphamide for every cognitive complaint",
      "Add high-dose prednisone regardless of clinical context",
      "Treat it identically to active lupus myelitis"
    ],
    "answer": 0,
    "explanation": "ACR conditionally recommends against adding immunosuppression to cognitive therapy for isolated cognitive dysfunction. Active inflammatory myelitis or other severe syndromes follow different treatment recommendations.",
    "reviewHref": "#nonrenal-disease"
  },
  {
    "id": "sle-focused-hcq-screening",
    "conceptGroup": "hcq-screening",
    "lesson": "hydroxychloroquine",
    "difficulty": "Applied",
    "question": "A new hydroxychloroquine user has renal disease and takes tamoxifen. Which screening plan best applies AAO 2025?",
    "choices": [
      "Baseline fundus examination, OCT and FAF, with annual surveillance rather than automatic five-year deferral",
      "No baseline examination and no screening until visual symptoms appear",
      "Automatically defer every screening test for five years",
      "Use actual body weight alone to rule out retinal risk"
    ],
    "answer": 0,
    "explanation": "Renal disease and tamoxifen are significant retinal risk factors. The option to defer annual screening during the first five years applies only when significant risk factors are absent.",
    "reviewHref": "#hydroxychloroquine"
  }
];

const renalCases = [
  {
    "id": "sle-renal-pure-v-boundary",
    "conceptGroup": "pure-v-boundary",
    "lesson": "lupus-nephritis",
    "difficulty": "Applied",
    "question": "A biopsy shows active pure class V lupus nephritis with proteinuria exactly 1.0 g/g. Which statement follows the 2024 ACR lupus nephritis guideline?",
    "choices": [
      "The threshold for conditionally recommended glucocorticoid plus MPAA plus CNI therapy is met",
      "Triple therapy is considered only above 1.0 g/g, so this patient is excluded",
      "Class V disease never receives a CNI",
      "Proteinuria must reach 3.5 g/g before any therapy is considered"
    ],
    "answer": 0,
    "explanation": "The pure-class-V threshold is at least 1 g/g, including exactly 1.0. Treatment remains individualized; biopsy class and renal function matter.",
    "reviewHref": "#lupus-nephritis"
  },
  {
    "id": "sle-renal-renal-steroid-cap",
    "conceptGroup": "renal-steroid-cap",
    "lesson": "lupus-nephritis",
    "difficulty": "Applied",
    "question": "After an IV glucocorticoid pulse for active lupus nephritis, a 90 kg adult is prescribed the ACR oral starting-dose framework. What is the maximum daily prednisone-equivalent dose under that framework?",
    "choices": [
      "40 mg",
      "45 mg",
      "90 mg",
      "5 mg"
    ],
    "answer": 0,
    "explanation": "At 0.5 mg/kg, the weight calculation gives 45 mg, but the daily cap is 40 mg. Five mg is the target ceiling by six months, not the general initial-dose cap.",
    "reviewHref": "#lupus-nephritis"
  },
  {
    "id": "sle-renal-renal-repeat-biopsy",
    "conceptGroup": "renal-repeat-biopsy",
    "lesson": "lupus-nephritis",
    "difficulty": "Applied",
    "question": "After seven months of confirmed appropriate lupus nephritis treatment, proteinuria and hematuria continue to worsen. Which step fits ACR guidance?",
    "choices": [
      "Consider repeat kidney biopsy while reassessing response and treatment",
      "Rule out repeat biopsy solely because one was performed at diagnosis",
      "Wait for dialysis before reevaluating histology",
      "Declare complete response because seven months of therapy were completed"
    ],
    "answer": 0,
    "explanation": "Persistent or worsening renal abnormalities after at least six months of appropriate treatment support considering repeat biopsy. Confirm exposure and evaluate competing causes as part of the reassessment.",
    "reviewHref": "#lupus-nephritis"
  }
];

const skinCases = [
  {
    "id": "sle-skin-mild-skin",
    "conceptGroup": "mild-skin",
    "lesson": "nonrenal-disease",
    "difficulty": "Applied",
    "question": "Mild skin-predominant lupus persists despite hydroxychloroquine and appropriate topical therapy. Which step does ACR 2025 conditionally favor before adding systemic immunosuppression?",
    "choices": [
      "Consider adding quinacrine or switching to chloroquine with specialist safety review",
      "Immediately use cyclophosphamide for every persistent rash",
      "Stop sun protection because it has not fully controlled disease",
      "Prescribe indefinite high-dose prednisone as the sole strategy"
    ],
    "answer": 0,
    "explanation": "Mild persistent skin-predominant disease differs from refractory moderate or severe disease. Antimalarial optimization can avoid unnecessary immune escalation; chloroquine carries greater retinal risk.",
    "reviewHref": "#nonrenal-disease"
  },
  {
    "id": "sle-skin-bullous-g6pd",
    "conceptGroup": "bullous-g6pd",
    "lesson": "nonrenal-disease",
    "difficulty": "Applied",
    "question": "Mild bullous lupus persists despite topical and antimalarial treatment. Dapsone is being considered. Which safety assessment is specifically relevant?",
    "choices": [
      "G6PD assessment with subsequent hematologic monitoring",
      "An ANA result alone to rule out hemolysis",
      "No blood assessment because dapsone acts only on skin",
      "A normal creatinine as proof that methemoglobinemia cannot occur"
    ],
    "answer": 0,
    "explanation": "Dapsone can cause hemolysis and methemoglobinemia. G6PD assessment and monitoring are needed; a normal G6PD result does not remove every hematologic risk.",
    "reviewHref": "#nonrenal-disease"
  },
  {
    "id": "sle-skin-chilblain",
    "conceptGroup": "chilblain",
    "lesson": "nonrenal-disease",
    "difficulty": "Applied",
    "question": "Chilblain lupus persists despite symptomatic, topical, and antimalarial treatment. Which next-step category is conditionally favored by ACR 2025 before immunosuppression?",
    "choices": [
      "Pentoxifylline, a PDE5 inhibitor, or a calcium-channel blocker",
      "Cyclophosphamide for all patients regardless of severity",
      "Long-term high-dose prednisone for all patients",
      "No further assessment because chilblain lupus cannot cause symptoms"
    ],
    "answer": 0,
    "explanation": "The recommendation favors these vascular-directed options over initiating immunosuppression; evidence is limited and treatment is individualized.",
    "reviewHref": "#nonrenal-disease"
  },
  {
    "id": "sle-skin-lenalidomide",
    "conceptGroup": "lenalidomide",
    "lesson": "nonrenal-disease",
    "difficulty": "Applied",
    "question": "Which statement about lenalidomide for cutaneous lupus best matches ACR 2025?",
    "choices": [
      "It is a conditional last-resort option for refractory moderate or severe disease, with REMS and fetal/thrombotic risk safeguards",
      "It is routine first-line therapy for every mild rash",
      "It is safe in pregnancy because it is used for skin disease",
      "It requires no restricted-distribution or pregnancy precautions"
    ],
    "answer": 0,
    "explanation": "Lenalidomide is reserved for selected refractory disease. Its potential role does not remove teratogenicity, thrombosis risk, or REMS obligations.",
    "reviewHref": "#nonrenal-disease"
  }
];

const interactionCases = [
  {
    "id": "sle-febuxostat-contraindication",
    "conceptGroup": "thiopurine-interaction",
    "lesson": "steroid-sparing",
    "difficulty": "Applied",
    "question": "A person taking azathioprine for SLE receives a new febuxostat prescription. Which action best fits current US labeling?",
    "choices": [
      "Contact the prescriber before use because this combination is contraindicated",
      "Separate the medicines by two hours and keep both doses",
      "Apply the allopurinol dose-reduction rule and dispense febuxostat without review",
      "Check uric acid alone because marrow toxicity is unrelated"
    ],
    "answer": 0,
    "explanation": "Febuxostat is contraindicated with azathioprine. Do not extrapolate the deliberately supervised allopurinol combination strategy to febuxostat.",
    "reviewHref": "#steroid-sparing"
  }
];

const pregnancyCases = [
  {
    "id": "sle-pregnancy-obstetric-aps",
    "conceptGroup": "obstetric-aps",
    "lesson": "prevention-reproduction",
    "difficulty": "Applied",
    "question": "A pregnant patient has SLE and confirmed obstetric APS, with no previous thrombosis. Which antithrombotic strategy fits ACR and SMFM guidance?",
    "choices": [
      "Low-dose aspirin plus prophylactic heparin, usually LMWH",
      "Therapeutic heparin is required for every positive antibody result",
      "Aspirin must always be stopped when heparin starts",
      "No antithrombotic treatment because there has been no thrombosis"
    ],
    "answer": 0,
    "explanation": "Obstetric APS without prior thrombosis generally calls for aspirin plus prophylactic heparin. Prior thrombotic APS changes the heparin intensity to therapeutic dosing.",
    "reviewHref": "#prevention-reproduction"
  },
  {
    "id": "sle-pregnancy-paternal-mmf",
    "conceptGroup": "paternal-mmf",
    "lesson": "prevention-reproduction",
    "difficulty": "Applied",
    "question": "A male patient on mycophenolate asks about fathering a pregnancy. Which counseling statement accurately represents the sources?",
    "choices": [
      "EULAR allows continuation, while the US label recommends contraception during treatment and for at least 90 days afterward; reconcile these with the specialist",
      "The maternal six-week rule automatically applies to paternal exposure",
      "All sources establish that paternal mycophenolate causes birth defects",
      "The label has no paternal precautions"
    ],
    "answer": 0,
    "explanation": "Paternal and maternal exposure are different questions. EULAR reproductive guidance and CellCept labeling differ; counseling should state both rather than quietly replacing one with the other.",
    "reviewHref": "#prevention-reproduction"
  },
  {
    "id": "sle-pregnancy-fetal-echo",
    "conceptGroup": "fetal-echo",
    "lesson": "prevention-reproduction",
    "difficulty": "Applied",
    "question": "An anti-Ro-positive patient asks whether every guideline requires serial fetal PR-interval echocardiography. Which answer is accurate?",
    "choices": [
      "ACR conditionally supports serial fetal echocardiography, while SMFM advises against routine serial PR-interval surveillance outside trials; individualize the specialist plan",
      "Both societies require weekly PR studies for every patient",
      "SMFM says all fetal surveillance should be omitted",
      "An antibody result alone establishes fetal heart block"
    ],
    "answer": 0,
    "explanation": "The recommendations differ on this specific surveillance strategy. That disagreement does not eliminate the need for appropriate obstetric monitoring or evaluation of suspected fetal disease.",
    "reviewHref": "#prevention-reproduction"
  }
];

const renalResponseCases = [
  {
    "id": "sle-renal-partial-calculation",
    "conceptGroup": "partial-calculation",
    "lesson": "lupus-nephritis",
    "difficulty": "Applied",
    "question": "After eight months of therapy, proteinuria falls from 4.0 to 1.8 g/g and eGFR remains at baseline. Under the ACR response definitions, which interpretation is correct?",
    "choices": [
      "Partial response: proteinuria fell 55% to below 3 g/g, with stable kidney function",
      "Complete response because proteinuria fell more than 50%",
      "No response because proteinuria remains above 1 g/g",
      "Complete response regardless of kidney function"
    ],
    "answer": 0,
    "explanation": "The decrease is (4.0 - 1.8) / 4.0 = 55%. This meets partial-response criteria with stable kidney function. Complete response requires proteinuria below 0.5 g/g.",
    "reviewHref": "#lupus-nephritis"
  },
  {
    "id": "sle-renal-early-deterioration",
    "conceptGroup": "early-deterioration",
    "lesson": "lupus-nephritis",
    "difficulty": "Applied",
    "question": "Two months into nephritis treatment, eGFR is falling rapidly and proteinuria is increasing. What is the best next step?",
    "choices": [
      "Urgently reassess exposure, pathology, competing causes and treatment; escalation may be needed before six months",
      "Wait until month twelve before any reassessment",
      "Declare failure solely from a complement result",
      "Continue unchanged because response definitions prohibit early treatment changes"
    ],
    "answer": 0,
    "explanation": "The six-to-twelve-month response assessment window is not a waiting period during rapid deterioration. ACR supports earlier escalation, even within three months, to limit irreversible injury.",
    "reviewHref": "#lupus-nephritis"
  }
];

// Two distinct questions per concept: knowledge and a clinical application.
// Distractors are authored for that concept, never borrowed from unrelated topics.
export const systemicLupusErythematosusQuestionBank = concepts.flatMap((concept, index) => {
  const [knowledge, application] = alternatives[concept.key] || [];
  if (knowledge?.length !== 3 || application?.length !== 3) throw new Error(`Missing SLE alternatives: ${concept.key}`);
  return [
    { id: `sle-${String(index + 1).padStart(2, "0")}-foundational`, conceptGroup: concept.key, lesson: concept.lesson, difficulty: "Foundational", question: `Which statement best describes ${concept.topic}?`, choices: [concept.core, ...knowledge], answer: 0, explanation: concept.rationale, reviewHref: `#${concept.lesson}` },
    { id: `sle-${String(index + 1).padStart(2, "0")}-applied`, conceptGroup: concept.key, lesson: concept.lesson, difficulty: "Applied", question: `${concept.case} What is the best response?`, choices: [concept.action, ...application], answer: 0, explanation: concept.rationale, reviewHref: `#${concept.lesson}` },
  ];
}).concat(voclosporinCases, focusedCases, renalCases, skinCases, interactionCases, pregnancyCases, renalResponseCases);
