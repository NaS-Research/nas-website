import { multipleSclerosisQuestionBank } from "@/data/questionBanks/multipleSclerosis";

const lesson = (slug, title, visual, summary, concepts, application, sections, keyPoints, check) => ({
  slug, title, visual, summary, concepts, application,
  lesson: sections.map(([heading, body]) => ({ heading, body })),
  keyPoints, check,
});

export const multipleSclerosisModule = {
  slug: "multiple-sclerosis",
  number: "100",
  title: "Multiple Sclerosis",
  source: "NaS synthesis of RxPrep 2023 with current diagnostic criteria, clinical guidance, and prescribing information",
  description: "Recognize the disease pattern, distinguish relapse from progression and mimic, select disease-modifying therapy deliberately, and build a safe longitudinal plan around efficacy, monitoring, rehabilitation, and patient priorities.",
  topics: ["Diagnosis", "Disease course", "Relapse", "Injectable therapy", "Oral therapy", "S1P modulators", "High-efficacy biologics", "Immune reconstitution", "Symptom care", "Longitudinal monitoring"],
  outcomes: [
    "Apply current diagnostic evidence while preserving careful exclusion of MS mimics.",
    "Connect inflammatory demyelination and axonal injury to relapses, recovery, progression, and disability.",
    "Distinguish true relapse from pseudo-relapse and escalate severe steroid-refractory attacks appropriately.",
    "Compare injectable, oral, S1P-modulating, biologic, and immune-reconstitution strategies by efficacy and risk.",
    "Use current product-specific screening, dosing, monitoring, reproductive, vaccination, and infection boundaries.",
    "Treat walking, spasticity, pain, bladder, bowel, fatigue, mood, cognition, and mobility without worsening medication burden.",
    "Recognize breakthrough activity, unsafe gaps, rebound risk, and the information required for a safe switch.",
    "Maintain an authoritative MS timeline that supports shared decisions and continuity across settings.",
  ],
  submodules: [
    lesson("recognition-diagnosis", "Recognize the Pattern and Protect the Diagnosis", "ms-recognition", "MS is a clinical and paraclinical diagnosis, not a single MRI finding. Current criteria can use more kinds of evidence, but the phenotype and differential diagnosis still determine whether that evidence belongs to MS.", ["2024 McDonald criteria", "Optic nerve", "MRI biomarkers", "CSF kappa free light chains", "Mimics"], "Build the diagnosis from anatomic localization, attack history, examination, imaging, laboratory evidence, and explicit exclusions.", [
      ["Start with the syndrome", "Typical presentations include optic neuritis, brainstem or cerebellar syndromes, partial myelitis, and other focal CNS deficits. Time course, objective findings, and lesion location should form one coherent story."],
      ["Use the current evidence set", "The 2024 McDonald criteria add the optic nerve as a fifth location and incorporate defined uses of the central vein sign, paramagnetic rim lesions, and CSF kappa free light chains. Selected characteristic cases may no longer require the older automatic wait for dissemination in time."],
      ["Protect specificity", "Migraine, small-vessel ischemia, NMOSD, MOG-associated disease, infection, nutritional deficiency, compression, sarcoidosis, lupus, and other inflammatory disorders can resemble MS. Red flags and atypical lesion patterns require targeted evaluation."],
      ["Distinguish space from time", "Dissemination in space generally means typical lesions in at least two of five regions: optic nerve, cortical/juxtacortical, periventricular, infratentorial, and spinal cord. It is not by itself a diagnosis. With a typical presentation, four affected regions can suffice without another time criterion; fewer regions need the applicable additional evidence."],
      ["Understand the newer exceptions", "Selected radiologically isolated or nonspecific presentations can qualify through dissemination in space plus time, positive CSF, or the defined central-vein-sign pathway. A kappa free-light-chain index can substitute for CSF-restricted oligoclonal bands; an isolated blood measurement cannot. These exceptions require the full diagnostic algorithm and exclusion of better causes."],
      ["Use optic testing within its limits", "OCT, VEP or optic-nerve MRI can support optic involvement after excluding better causes. VEP thresholds depend on local technique and equipment; illustrative laboratory cutoffs are not universal. Bilateral disease can obscure OCT inter-eye differences. Serial OCT or VEP changes are not established substitutes for dissemination in time."],
      ["Keep biomarker pathways distinct", "The kappa free-light-chain index is an accepted alternative to CSF-restricted oligoclonal bands; the IgG index is not an equivalent substitute in these criteria. Positive CSF still needs clinical and imaging context. Central-vein-sign and paramagnetic-rim assessments are helpful in defined pathways but are not mandatory for every diagnosis."],
      ["Apply the one-region pathway carefully", "For a typical clinical presentation with lesions in only one region, diagnosis requires both a qualifying MRI biomarker (Select 6 central-vein-sign positivity or at least one paramagnetic rim lesion) and either dissemination in time or positive CSF. Select 6 means at least six CVS-positive lesions; with fewer than ten white-matter lesions overall, CVS-positive lesions must outnumber negative lesions. Exclude better explanations before applying the pathway."],
      ["Respect the progressive-presentation exception", "In progressive-onset disease, a second typical spinal cord lesion can substitute for another anatomical region. Do not automatically extend that exception to relapsing presentations; progressive mimics still need exclusion."],
      ["Preserve age-specific safeguards", "Progressive presentations require at least twelve months of clinical progression. At age 50 or older or with substantial vascular risk, seek additional support such as spinal lesions, positive CSF, or central-vein-sign evidence. Do not apply MS criteria during an initial childhood ADEM presentation."],
    ], ["The phenotype comes before the label.", "The optic nerve is now a defined diagnostic location.", "New biomarkers add evidence, not automatic certainty.", "NMOSD and MOG-associated disease require distinct treatment reasoning."], { question: "Which finding most strongly argues for targeted evaluation of an MS mimic?", choices: ["Severe bilateral optic neuritis with area postrema symptoms", "A typical unilateral optic neuritis syndrome", "A characteristic periventricular lesion", "A prior focal sensory attack"], answer: 0, rationale: "Bilateral optic neuritis, area postrema symptoms, and longitudinally extensive cord disease are important clues for NMOSD or MOG-associated disease.", reviewHref: "#recognition-diagnosis" }),

    lesson("disease-course-targets", "Connect Tissue Injury to the Treatment Target", "ms-course", "Inflammation, demyelination, axonal injury, incomplete recovery, and neurodegeneration interact over time. Relapse count alone cannot describe the disease or the treatment target.", ["Demyelination", "Axonal injury", "Relapsing activity", "Progression", "Shared selection"], "Track attacks, MRI activity, examination, function, gradual change, treatment exposure, and patient priorities together.", [
      ["Localize the injury", "Myelin loss disrupts conduction, while axonal injury can create irreversible disability. Lesion location explains why the same disease can affect vision, strength, sensation, coordination, cognition, bladder function, or gait."],
      ["Distinguish activity from progression", "Relapses, gadolinium-enhancing lesions, and new or unequivocally enlarging T2 lesions indicate disease activity. Disability can also accumulate gradually without a recognized relapse, so quiet relapse history does not prove complete disease control."],
      ["Name the course and observation window", "Relapsing-remitting MS features attacks with recovery that may be incomplete. Primary progressive MS progresses from onset; secondary progressive MS follows an earlier relapsing course. Describe activity and progression over an explicit interval and reassess at least annually. Residual disability after an attack alone does not establish a progressive course."],
      ["Choose an efficacy strategy", "Initial therapy may follow escalation or early high-efficacy reasoning. Disease activity, spinal or infratentorial burden, incomplete recovery, age, comorbidity, pregnancy goals, route, monitoring, access, and preference shape that decision."],
      ["Define success before treatment", "Document the expected clinical and MRI response, safety schedule, adherence plan, and threshold for switching. A treatment cannot be judged fairly if exposure, onset, and outcome measures remain vague."],
    ], ["Demyelination can recover; axonal injury may not.", "Progression can occur outside recognized relapse activity.", "Higher-risk disease can justify higher initial efficacy.", "The treatment target must be measurable."], { question: "Which observation best demonstrates why relapse count is insufficient?", choices: ["Gradual walking decline without a clear attack", "Complete recovery after a single relapse", "Unchanged gait on repeated examinations", "Stable function and unchanged surveillance MRI"], answer: 0, rationale: "Disability progression can occur without an obvious relapse and requires longitudinal functional and treatment review.", reviewHref: "#disease-course-targets" }),

    lesson("acute-relapse", "Treat the Attack Without Losing the Long View", "ms-relapse", "A true relapse must be separated from infection, heat, metabolic stress, and recurrence of an old deficit. Acute therapy can speed recovery, but it is not the long-term disease-modifying plan.", ["True relapse", "Pseudo-relapse", "High-dose glucocorticoid", "Plasma exchange", "Follow-up"], "Measure functional effect, exclude dangerous alternatives, treat meaningful attacks, and reassess both recovery and DMT control.", [
      ["Confirm new inflammatory dysfunction", "Document onset, duration, objective findings, anatomic localization, and impact on daily function. A relapse generally lasts more than 24 hours without infection or another explanation, following at least one month of stability. Urgent loss of vision, walking, or bladder function requires immediate evaluation rather than waiting for a time threshold. Fever, urinary infection, heat, sleep loss, and metabolic disturbance can temporarily uncover an old deficit."],
      ["Treat when function warrants it", "High-dose oral or intravenous glucocorticoid regimens can shorten recovery from a disabling relapse. Mild sensory symptoms may not justify the same toxicity, and chronic low-dose prednisone is not DMT."],
      ["Specify the relapse regimen", "NICE NG220 recommends oral methylprednisolone 500 mg daily for five days. IV methylprednisolone 1 g daily for three to five days is an alternative when oral treatment fails or is not tolerated, or severe disease or comorbidity requires hospital monitoring. These are guideline regimens, not permission to substitute a low-dose steroid pack. Assess glucose, infection, sleep and psychiatric risks. Do not provide an unsupervised stockpile for future presumed relapses."],
      ["Escalate severe refractory disease", "Plasma exchange can be considered urgently for a severe demyelinating attack that responds inadequately to high-dose glucocorticoids. The decision is time sensitive and specialist directed."],
      ["Arrange timely review", "NICE advises early assessment and treatment of function-limiting relapses, within fourteen days of onset, with MS-expert input. Symptoms present for more than three months should not routinely be labeled an acute relapse. These are assessment pathways, not reasons to delay emergency evaluation or dismiss ongoing disability."],
      ["Close the loop", "Reassess recovery, rehabilitation, MRI context, adherence, and whether the event represents breakthrough activity. A relapse should update the longitudinal treatment decision, not disappear after the steroid course."],
    ], ["Infection can cause a pseudo-relapse.", "Acute steroids shorten recovery rather than replace DMT.", "Plasma exchange fits severe steroid-refractory attacks.", "Every confirmed relapse updates the treatment timeline."], { question: "Old weakness returns during pyelonephritis and improves as fever resolves. What is the best initial interpretation?", choices: ["Pseudo-relapse from physiologic stress", "Definite new lesion without evaluation", "Progressive multifocal leukoencephalopathy", "Permanent treatment failure"], answer: 0, rationale: "Fever and infection can temporarily worsen prior deficits without proving new CNS inflammation.", reviewHref: "#acute-relapse" }),

    lesson("injectable-platform", "Use Injectable Platform Therapy Precisely", "ms-injectables", "Glatiramer acetate and interferon beta remain relevant options for selected patients, but their schedules, administration, adverse effects, laboratory plans, and counseling are product specific.", ["Glatiramer acetate", "Interferon beta", "Injection rotation", "Flu-like symptoms", "Laboratory monitoring"], "Write the exact product, route, strength, schedule, injection plan, monitoring, and response to missed or adverse doses.", [
      ["Counsel glatiramer completely", "Rotate injection sites and address lipoatrophy and skin injury. The FDA added a boxed warning for life-threatening or fatal anaphylaxis in January 2025: it can occur with the first dose or after years of treatment. Early symptoms can overlap with a transient immediate post-injection reaction. Stop dosing and seek emergency care for suspected anaphylaxis, including breathing difficulty, throat swelling, fainting, or rapidly worsening symptoms. More-than-mild, worsening, or persistent reactions need immediate medical attention. Even a brief reaction warrants prescriber contact before another injection; after anaphylaxis, do not restart unless a clear alternative cause is identified."],
      ["Write the glatiramer schedule", "Use either 20 mg subcutaneously daily or 40 mg subcutaneously three times weekly with at least 48 hours between injections. The strengths and schedules are not interchangeable. Let a refrigerated prefilled syringe warm for 20 minutes; inspect it and use only a compatible injection device. Confirm the exact supplied product during a brand or device change."],
      ["Check glatiramer liver symptoms and storage", "Report suspected liver dysfunction promptly and consider discontinuation; severe injury can appear after days or years. Store Copaxone at 2 to 8°C; if necessary, 15 to 30°C for up to one month. Protect from intense light and heat. Discard frozen syringes."],
      ["Name both Plegridy routes", "Peginterferon beta-1a can be administered subcutaneously or intramuscularly using the corresponding presentation. Titrate 63 micrograms on day 1, 94 micrograms on day 15, then 125 micrograms on day 29 and every 14 days thereafter. The IM syringe uses its separately supplied titration kit; do not improvise partial doses or use an SC pen intramuscularly."],
      ["Handle Plegridy precisely", "Refrigerate at 2 to 8°C in its carton. Time outside refrigeration, protected from light at up to 25°C, must total no more than thirty days; returning it to refrigeration does not reset that limit. Discard if frozen. Warm naturally for about thirty minutes. The IM syringe cover contains latex and should not be handled by latex-sensitive people."],
      ["Act on Plegridy safety findings", "Promptly assess new depression or severe psychiatric symptoms and consider stopping. Discontinue for serious allergy. Monitor blood counts, liver safety and pre-existing cardiac disease; use caution with seizure disorders and increased surveillance in severe renal impairment. Consider stopping for a new autoimmune disorder."],
      ["Discuss Plegridy reproduction individually", "Early-pregnancy interferon data have not identified increased major birth defects, but miscarriage and birth-weight findings are inconsistent and animal studies found pregnancy loss. Low milk levels are reported. Discuss maternal need and infant risk rather than declaring universal safety or imposing an unsupported washout."],
      ["Interpret glatiramer reproductive evidence", "Observational pregnancy data have not identified a drug-associated adverse-outcome signal, although study limitations remain. The label expects little clinically relevant infant exposure during breastfeeding because maternal systemic exposure is low; direct milk data are absent. Make a shared plan around disease control and breastfeeding benefits, without treating absence of a detected risk as proof of zero risk."],
      ["Differentiate interferon products", "Interferon beta products use different routes, strengths, and schedules. Flu-like symptoms and injection reactions are common, while liver injury, cytopenias, thyroid abnormalities, mood concerns, and rare serious events require product-specific monitoring."],
      ["Dose Avonex by week", "Avonex is 30 micrograms intramuscularly once weekly. An optional start at 7.5 micrograms, increasing by 7.5 each week, reaches 30 micrograms in week four. The AVOSTARTGRIP titration devices fit the prefilled syringe, not the pen. Supervise the first injection and discard residual product after each partial dose."],
      ["Monitor Avonex beyond flu-like symptoms", "Check CBC with differential, platelets, chemistries and liver tests; monitor thyroid function periodically and when symptoms suggest dysfunction. Review alcohol and other hepatotoxic exposures. New depression, suicidality or psychosis needs prompt assessment and consideration of stopping. Discontinue for allergic reactions; consider stopping for new autoimmune disease. Monitor pre-existing heart failure and investigate seizures or worsening skin lesions."],
      ["Store Avonex by its own limits", "Keep syringes and pens refrigerated at 2 to 8°C in the carton. If refrigeration is unavailable, the limit is seven days at up to 25°C. Do not freeze; discard after storage outside recommended conditions. Warm naturally for about thirty minutes. Both presentations contain latex; use the pen's specified needle."],
      ["Counsel Avonex pregnancy and breastfeeding", "Early-pregnancy interferon observations have not identified increased major birth defects; miscarriage and birth-weight findings are inconsistent, with pregnancy loss in animal studies. Milk levels are low in limited reports. Weigh maternal treatment needs and breastfeeding benefits against potential infant effects."],
      ["Match Rebif titration to the target", "Rebif is 22 or 44 micrograms subcutaneously three times weekly, at least 48 hours apart. For a 22-microgram target, give 4.4 micrograms per injection in weeks one and two, 11 in weeks three and four, then 22 from week five; titration requires prefilled syringes. For a 44-microgram target, use 8.8, then 22, then 44 over the same intervals; the appropriate syringes or autoinjectors may be used. Do not attempt a partial autoinjector dose."],
      ["Respond to Rebif liver findings", "Discontinue immediately for jaundice or other liver-dysfunction symptoms. Consider dose reduction if ALT exceeds five times the upper limit of normal; gradual re-escalation may follow normalization. Initiate cautiously with active/significant liver disease, alcohol abuse or baseline ALT above 2.5 times the upper limit of normal. Review other hepatotoxic products."],
      ["Check Rebif safety and handling", "Human-albumin or interferon hypersensitivity is a contraindication. Stop for anaphylaxis; promptly assess depression and consider discontinuation. Avoid damaged injection sites and review multiple lesions; use caution with seizure disorders. Refrigerate at 2 to 8°C without freezing; if needed, store at 2 to 25°C for up to thirty days, protected from heat/light. Discard unused portions."],
      ["Discuss Rebif reproductive evidence", "Early-pregnancy observational data have not identified increased major birth defects; miscarriage and birth-weight findings remain inconsistent. Animal assessment is incomplete. Low milk levels are reported, with no milk-production data. Discuss treatment need and breastfeeding benefits alongside possible infant effects."],
      ["Titrate Betaseron every other day", "Betaseron begins at 0.0625 mg subcutaneously every other day for weeks one and two, then 0.125 mg in weeks three and four, 0.1875 mg in weeks five and six, and 0.25 mg from week seven. Each step retains the every-other-day schedule; it is not a daily regimen. Follow the supplied reconstitution instructions and discard unused solution."],
      ["Prepare Betaseron accurately", "Use the supplied 1.2 mL of 0.54% sodium chloride diluent and gently swirl, without shaking. The resulting concentration is 0.25 mg/mL; the maintenance injection is 1 mL, not the entire vial contents. Store unmixed vials at 2 to 30°C. After mixing, use immediately or refrigerate at 2 to 8°C for no more than three hours; do not freeze. Discard unused solution."],
      ["Recognize Betaseron safety signals", "Stop for anaphylaxis or new features of drug-induced lupus. Consider discontinuation for significant liver injury, depression, or otherwise unexplained worsening heart failure. Interferon or human-albumin hypersensitivity contraindicates treatment. Assess damaged injection sites and seizures promptly; avoid unhealed sites."],
      ["Discuss Betaseron reproduction", "Human observations have not generally identified increased major birth defects, but animal exposure caused embryofetal death. Milk transfer, infant effects and milk-production data are absent in the label. Weigh maternal treatment needs and breastfeeding benefits against possible infant risk."],
      ["Turn monitoring into a calendar", "Rebif and Betaseron labels specify blood counts and liver tests at months one, three and six, then periodically. Rebif recommends thyroid testing every six months with a history of thyroid dysfunction or when clinically indicated. More intensive monitoring may be needed for cytopenias. Interferon-associated thrombotic microangiopathy or confirmed pulmonary arterial hypertension requires discontinuation and specialist management; unexplained dyspnea is not automatically a flu-like reaction."],
      ["Design adherence around reality", "Needle preference, dexterity, refrigeration, travel, training, schedule burden, and adverse-effect timing influence whether an injectable plan is sustainable."],
      ["Do not mistake tolerability for efficacy", "A well-tolerated platform therapy still requires relapse, MRI, and disability surveillance. Continued inflammatory activity should trigger a treatment review rather than automatic continuation."],
    ], ["Injection schedules are not interchangeable.", "Rotate sites and inspect skin.", "Interferon monitoring extends beyond flu-like symptoms.", "Tolerability and disease control are separate outcomes."], { question: "What is the safest response to an interferon product switch?", choices: ["Reconcile the exact formulation, route, strength, schedule, and monitoring", "Continue the old calendar automatically", "Assume all products are weekly", "Stop all laboratory monitoring"], answer: 0, rationale: "Interferon beta products differ operationally and require exact product-specific instructions.", reviewHref: "#injectable-platform" }),

    lesson("oral-platform", "Build Safety Around Fumarates and Teriflunomide", "ms-orals", "Oral administration removes injections, not risk. Fumarates and teriflunomide require deliberate blood, liver, infection, reproductive, interaction, and symptom surveillance.", ["Dimethyl fumarate", "Diroximel fumarate", "Monomethyl fumarate", "Teriflunomide", "Lymphopenia", "Accelerated elimination"], "Pair every oral DMT with baseline screening, a laboratory calendar, interaction review, reproductive plan, and urgent symptom pathway.", [
      ["Use fumarates with immune surveillance", "Dimethyl fumarate and diroximel fumarate can cause flushing and gastrointestinal effects. Track lymphocytes and liver tests, and investigate prolonged lymphopenia, serious infection, or progressive neurologic change for PML and other causes."],
      ["Prescribe the exact fumarate product", "Tecfidera starts at 120 mg orally twice daily for seven days, then 240 mg twice daily. Swallow capsules intact; food may reduce flushing. A temporary reduction for intolerance should return to maintenance within four weeks; persistent intolerance requires treatment review."],
      ["Apply Vumerity administration limits", "Diroximel fumarate starts at 231 mg twice daily for seven days, then 462 mg twice daily: two 231 mg capsules per dose. Swallow intact. If taken with food, limit that meal or snack to 700 calories and 30 g fat; avoid alcohol with the dose. Moderate or severe renal impairment makes Vumerity not recommended. Do not combine it with dimethyl fumarate; the label permits starting the day after dimethyl fumarate stops."],
      ["Include monomethyl fumarate", "Bafiertam starts at 95 mg twice daily for seven days, then 190 mg twice daily, using two 95 mg capsules per dose. Swallow intact, with or without food. Unlike Tecfidera, food did not reduce flushing in Bafiertam studies. Do not combine with dimethyl or diroximel fumarate; the label allows starting the next day after either stops. The same laboratory schedule and major fumarate safety precautions below apply."],
      ["Check fumarate storage by product", "Keep unopened Bafiertam refrigerated at 2 to 8 °C without freezing. Once opened, its original light-protective container can be kept at 20 to 25 °C for three months. Tecfidera uses its original light-protective container at 15 to 30 °C. Vumerity is stored at 20 to 25 °C, with permitted excursions to 15 to 30 °C. Label the Bafiertam opening date rather than applying another product's storage instructions."],
      ["Schedule fumarate laboratory follow-up", "For all three fumarate products, obtain CBC with lymphocytes before treatment, at six months, then every 6 to 12 months and when clinically indicated. Consider interruption for lymphocytes below 0.5 × 10⁹/L persisting beyond six months, and follow recovery after stopping. Obtain baseline aminotransferases, alkaline phosphatase and bilirubin, with subsequent testing as clinically indicated. Suspected significant drug-induced liver injury requires discontinuation."],
      ["Recognize symptoms that cannot wait for routine labs", "Withhold a fumarate when PML is suspected and investigate promptly. Serious infections can occur even with normal lymphocyte counts; consider holding therapy until resolution. Anaphylaxis or angioedema requires stopping, immediate care and no restart. New or worsening severe gastrointestinal symptoms require prompt evaluation and discontinuation: bleeding, obstruction, ulceration and perforation have been reported, including without aspirin. Ordinary early nausea does not explain every new abdominal symptom."],
      ["Discuss fumarate pregnancy evidence by product", "Dimethyl fumarate pregnancy observations, mostly first-trimester exposures, have not identified increased major birth defects, miscarriage or other adverse pregnancy outcomes. The registry lacked an internal comparator and had potential confounding and exposure misclassification. Vumerity lacks adequate direct pregnancy data; its label and Bafiertam's label draw on dimethyl fumarate evidence. Animal studies found developmental toxicity. Discuss pregnancy plans or an exposure promptly with the MS team; these observations do not establish unrestricted use throughout pregnancy or justify importing teriflunomide's elimination protocol."],
      ["Separate milk transfer from infant outcomes", "The fumarate US labels describe limited or absent lactation data and call for individualized assessment. Published human milk studies add evidence beyond that label wording: a 2024 dimethyl fumarate case measured low monomethyl fumarate transfer, but the mother had already weaned, so the infant was not exposed during sampling. A low estimated relative infant dose does not establish clinical safety. Review maternal disease control, the infant's circumstances and the exact product with the treating team; direct evidence for one formulation should not be presented as direct evidence for all three."],
      ["Understand teriflunomide persistence", "Teriflunomide inhibits pyrimidine synthesis and can affect liver, blood counts, blood pressure, nerves, infection risk, and reproduction. Clinically relevant exposure can persist long after the last tablet."],
      ["Specify teriflunomide dose and screening", "Use 7 or 14 mg orally daily. Before starting, check pregnancy, TB, blood pressure, and recent CBC, transaminases and bilirubin. Severe hepatic impairment, pregnancy, ineffective contraception in reproductive potential, relevant hypersensitivity, and concomitant leflunomide are contraindications."],
      ["Protect the liver", "Monitor ALT at least monthly for six months. Suspected drug-induced liver injury requires stopping, accelerated elimination and weekly liver tests until normalization."],
      ["Complete accelerated elimination", "Use cholestyramine 8 g every eight hours for 11 days, reduced to 4 g if poorly tolerated, or activated charcoal 50 g orally every 12 hours for 11 days. Verify plasma concentration below 0.02 mg/L for pregnancy planning; stopping tablets alone is insufficient. Men planning fatherhood also need discontinuation and elimination or verified clearance. Coordinate replacement MS treatment."],
      ["Recognize newer skin and wound warnings", "The February 2026 label adds ulcers and impaired wound healing: consider discontinuation and accelerated elimination when clinically indicated. Suspected serious hypersensitivity or severe skin reactions require immediate evaluation and drug cessation."],
      ["Make interaction review specific", "Teriflunomide can raise exposure to CYP2C8, OAT3, BCRP and OATP1B1/1B3 substrates, while lowering exposure to CYP1A2 substrates such as tizanidine. Limit rosuvastatin to 10 mg daily. Warfarin requires close INR monitoring because INR may fall. Do not assume every interaction increases the companion drug effect."],
      ["Continue reproductive precautions after stopping", "Maintain effective contraception until verified teriflunomide clearance. Avoid breastfeeding during treatment. Renal impairment does not require a dose adjustment, but this does not remove the separate hepatic contraindication or monitoring obligations."],
      ["Audit the whole regimen", "Oral DMTs can interact with transporters, enzymes, vaccines, immunosuppressants, and hepatotoxic medicines. A medication and supplement review is part of each transition."],
    ], ["Oral does not mean low monitoring.", "Prolonged lymphopenia raises infection concern.", "Teriflunomide can persist for months or years without elimination.", "Accelerated elimination requires a complete protocol."], { question: "What is required when a woman taking teriflunomide plans to become pregnant?", choices: ["Stop therapy and complete accelerated elimination with confirmation", "Simply miss one dose", "Continue until conception", "Replace laboratory monitoring with symptoms alone"], answer: 0, rationale: "Teriflunomide persists unless elimination is accelerated, so a verified preconception plan is required.", reviewHref: "#oral-platform" }),

    lesson("s1p-modulators", "Differentiate the S1P Modulators", "ms-s1p", "Fingolimod, siponimod, ozanimod, and ponesimod share lymphocyte sequestration but differ in receptors, labeled populations, titration, genotype, cardiac observation, and safety details.", ["Fingolimod", "Siponimod", "Ozanimod", "Ponesimod", "Rebound"], "Identify the exact agent before applying screening, initiation, monitoring, interruption, or pregnancy instructions.", [
      ["Screen before the first dose", "Review ECG and conduction context, rate-slowing medicines, VZV immunity, blood counts, liver function, eye disease, pulmonary history, infection, vaccines, and pregnancy plans. Product differences determine what happens next."],
      ["Respect product boundaries", "Siponimod uses CYP2C9 genotype information. Titration and first-dose observation differ across products and patients. Macular edema, liver injury, hypertension, respiratory effects, infection, and skin malignancy remain important class concerns."],
      ["Dose and observe fingolimod", "Gilenya is labeled from age 10. Adults use 0.5 mg daily; pediatric patients use 0.25 mg daily at 40 kg or less and 0.5 mg above 40 kg. Observe every first dose for at least six hours with hourly pulse/BP and ECG before dosing and afterward. Persistent abnormalities or cardiac risk can require longer or overnight observation."],
      ["Recheck fingolimod after gaps", "Repeat first-dose procedures after an interruption of at least one day in weeks 1 and 2, more than seven days in weeks 3 and 4, or more than 14 days thereafter. Pediatric dose increases also warrant monitoring. A restart is not simply a refill."],
      ["Use genotype-specific siponimod titration", "For CYP2C9 *1/*1, *1/*2 or *2/*2, give 0.25 mg on days 1 and 2, 0.5 mg on day 3, 0.75 mg on day 4, 1.25 mg on day 5, then 2 mg daily. For *1/*3 or *2/*3, use the same first four days, then 1 mg daily from day 5. The *3/*3 genotype is contraindicated. Swallow tablets intact."],
      ["Monitor selected siponimod starts and restarts", "Six-hour first-dose observation is recommended with heart rate below 55, first-degree or Mobitz I block, or prior MI/heart failure, after excluding contraindications. More severe cardiac findings need specialist assessment. Restart titration when a titration dose is missed by more than 24 hours or at least four consecutive maintenance doses are missed; repeat indicated cardiac monitoring."],
      ["Check cardiac eligibility before observation", "Fingolimod and siponimod have contraindications involving recent major cardiovascular events and specified conduction disorders. Fingolimod additionally contraindicates baseline QTc of at least 500 ms and arrhythmias requiring class Ia or III antiarrhythmics. Observation does not make a contraindicated treatment acceptable."],
      ["Titrate ozanimod and account for liver function", "Zeposia uses 0.23 mg daily on days 1 to 4, 0.46 mg daily on days 5 to 7, then 0.92 mg daily from day 8. Child-Pugh A or B uses the same titration but 0.92 mg every other day for maintenance; use in Child-Pugh C is not recommended. Swallow capsules whole. A missed dose in the first two weeks requires restarting titration; afterward the US label directs continuing the planned regimen."],
      ["Do not assume ozanimod eliminates cardiac screening", "Obtain an ECG and assess contraindications. Unlike fingolimod, the US ozanimod label does not prescribe universal first-dose observation for trial-like patients; higher-risk patients need cardiology advice. Severe untreated sleep apnea and concurrent MAO inhibitors are contraindications, in addition to specified cardiovascular conditions."],
      ["Follow the ponesimod starter pack", "Ponvory uses one daily dose: 2 mg on days 1 and 2, 3 mg on days 3 and 4, 4 mg on days 5 and 6, then 5, 6, 7, 8 and 9 mg on days 7 through 11 respectively; 10 mg on days 12 to 14; and 20 mg from day 15. Swallow tablets whole. Moderate or severe hepatic impairment makes treatment not recommended."],
      ["Match ponesimod observation and interruption rules", "Four-hour first-dose monitoring is recommended for selected patients with bradycardia, first-degree or Mobitz I block, or stable remote MI/heart failure. Abnormal findings can extend observation. Missing fewer than four consecutive doses means resuming at the first missed titration step or the maintenance dose, as applicable. Four or more missed doses require a new starter pack from day 1 and repeat observation when indicated."],
      ["Interpret uncommon siponimod genotypes cautiously", "CYP2C9 variants beyond *2 and *3 can reduce or abolish function, including *5, *6, *8 and *11. Their effects on siponimod exposure have not been directly evaluated; the label anticipates a loss-of-function variant such as *6 may behave similarly to *3. Obtain specialist pharmacogenetic interpretation rather than treating an unlisted genotype as normal function."],
      ["Review siponimod enzyme interactions", "Strong CYP2C9 inhibitors and dual moderate CYP2C9/strong CYP3A4 inducers are not recommended with siponimod. Moderate CYP2C9 inhibitors, including dual CYP2C9/CYP3A4 inhibitors, require adverse-effect monitoring. In *1/*3 or *2/*3 patients, moderate or strong CYP3A4 inducers require monitoring for reduced efficacy. Genotype and interacting medicines must be considered together."],
      ["Distinguish ozanimod interaction rules", "MAO inhibitors, including linezolid, are contraindicated with ozanimod; wait at least 14 days after ozanimod stops before initiating an MAO inhibitor. Strong CYP2C8 inhibitors such as gemfibrozil are not recommended, and strong CYP2C8 inducers such as rifampin should be avoided. Concurrent beta blockade plus a heart-rate-lowering calcium-channel blocker warrants cardiology review if ozanimod initiation is considered."],
      ["Coordinate beta-blocker changes with the prescriber", "For stable chronic beta-blocker use, siponimod labeling permits introduction when resting heart rate exceeds 50 bpm; at 50 or below, the beta blocker is interrupted until heart rate exceeds 50, then reintroduced after siponimod reaches maintenance. Ponesimod uses a different threshold: greater than 55 bpm, with interruption at 55 or below. These clinician-managed steps do not replace other cardiac screening or observation requirements. Patients should not stop cardiac medicines themselves."],
      ["Preserve storage conditions", "Mayzent unopened containers use refrigeration at 2 to 8 °C; after pharmacy dispensing, room-temperature storage at 20 to 25 °C is permitted for up to three months. Do not refrigerate after opening; retain the starter blister wallet. Ponvory uses 20 to 25 °C, with excursions to 15 to 30 °C, in its original package. Keep the maintenance bottle desiccant and protect against moisture. Record time out of refrigeration where applicable."],
      ["Store fingolimod and ozanimod correctly", "Gilenya and Zeposia use room-temperature storage at 20 to 25 °C, with permitted excursions to 15 to 30 °C. Protect Gilenya from moisture. Do not transfer Mayzent refrigeration instructions to these products; check the dispensed product label."],
      ["Plan every interruption", "Some interruptions require repeat titration or observation. Longer treatment gaps can expose the patient to disease reactivation, so access failures and infection holds require an explicit restart or switch plan."],
      ["Use the correct contraception interval", "Effective contraception is needed during S1P treatment and after the final dose: two months for fingolimod, ten days for siponimod, three months for ozanimod and one week for ponesimod. Plan conception and disease control together; a pregnancy-related stop can still create MS reactivation risk."],
      ["Explain the pregnancy evidence", "Verify pregnancy status before starting fingolimod. Its updated US label reports a birth-defect signal from an observational pregnancy registry, with important design limitations; this is not merely an animal-data warning. The other three reviewed S1P labels describe inadequate human pregnancy evidence and developmental toxicity in animals. Counsel about fetal risk and coordinate conception, treatment cessation and disease control with the MS team."],
      ["Make a separate breastfeeding plan", "The reviewed US labels for fingolimod, siponimod, ozanimod and ponesimod lack human milk-transfer, infant-effect and milk-production data, while animal findings support possible milk exposure. They direct weighing maternal treatment needs, breastfeeding benefits and potential infant harm. This wording does not establish safety, and contraception intervals are not validated breastfeeding restart intervals. Review the individual treatment and feeding plan with the specialist."],
      ["Keep vaccine precautions separate from contraception", "Avoid live vaccines during treatment. The US prescribing-information post-treatment intervals are two months for fingolimod, four weeks for siponimod, three months for ozanimod and one to two weeks for ponesimod. ECTRIMS/EAN recommends four weeks after siponimod and two weeks after ponesimod before live vaccination, supporting the longer interval when label counseling differs. These are not interchangeable with contraception intervals. Review vaccine type and timing with the MS team; do not stop a DMT independently to receive a vaccine. Non-live vaccines may have reduced effectiveness during immune modulation."],
      ["Continue surveillance after the last tablet", "Residual immune effects can outlast dosing. Continue infection vigilance after stopping: two months for fingolimod, three to four weeks for siponimod, three months for ozanimod and one to two weeks for ponesimod. Normalization in most study participants does not establish recovery in an individual. Consider residual exposure when selecting the next immunosuppressive therapy."],
      ["Maintain eye and liver surveillance", "For fingolimod, assess the fundus and macula near initiation, again at three to four months, periodically afterward and whenever vision changes. Liver enzymes and bilirubin need periodic monitoring through two months after discontinuation. A new visual complaint requires assessment rather than automatic attribution to optic neuritis."],
      ["Recognize fingolimod neurologic emergencies", "Hold fingolimod and investigate suspected PML; discontinue if confirmed and monitor for immune reconstitution inflammatory syndrome after withdrawal. Sudden severe headache, confusion, visual disturbance or seizure requires urgent evaluation for PRES and other emergencies; suspected PRES requires discontinuation. An atypical relapse can instead reflect serious infection."],
      ["Respond to hepatic and skin warning signals", "With symptoms suggesting fingolimod liver injury, ALT above three times the reference limit together with bilirubin above twice the limit requires interruption; do not resume without a plausible alternative cause. Perform periodic skin examinations, evaluate suspicious lesions, and use sun protection. Concomitant UVB or PUVA phototherapy is not recommended."],
      ["Act on siponimod warning symptoms", "Suspected PRES requires discontinuation and urgent assessment. Check liver tests for hepatic symptoms and discontinue for confirmed significant injury. Monitor blood pressure; obtain spirometry when clinically indicated. Perform baseline and periodic skin examinations and avoid concurrent UVB/PUVA. Prior hypersensitivity to siponimod or its ingredients is a contraindication, including reactions such as angioedema. Starting siponimod after alemtuzumab is not recommended because prolonged immune effects can overlap."],
      ["Monitor ozanimod beyond initiation", "Check transaminases and bilirubin periodically through two months after stopping. Interrupt for hepatic symptoms and promptly test; do not resume without an alternative explanation. Obtain baseline and periodic macular examinations, reassess vision changes, and consider discontinuation for macular edema. Monitor blood pressure, evaluate respiratory symptoms, and arrange periodic skin examinations. Suspend for suspected PML or cryptococcal infection; discontinue confirmed PML or suspected PRES. Starting after alemtuzumab is not recommended."],
      ["Investigate infection during ponesimod treatment", "Delay initiation during active infection and consider interruption for serious infection. Suspected cryptococcal infection requires suspension until excluded. Suspected PML likewise requires suspension and investigation; confirmed PML requires discontinuation, with subsequent monitoring for IRIS. Neurologic deterioration after withdrawal can therefore require evaluation for inflammatory complications, not simply a presumed MS relapse."],
      ["Keep post-fingolimod worsening on the timeline", "Severe disability increases have been reported within 12 weeks of stopping and as late as 24 weeks. Continued follow-up is needed even after immediate restart or withdrawal decisions have been made."],
      ["Prevent rebound", "Severe disease worsening can follow discontinuation, especially when the next effective therapy is delayed. Reproductive transitions and insurance disruptions should be planned before the final dose whenever possible."],
    ], ["Shared mechanism does not erase product differences.", "Cardiac and eye screening are patient and product specific.", "Interruptions can change restart requirements.", "Unplanned treatment gaps can create disease-reactivation risk."], { question: "Which factor particularly changes siponimod selection and dosing?", choices: ["CYP2C9 genotype", "CYP2D6 genotype alone", "CYP2C19 genotype alone", "HLA-B*5701 status alone"], answer: 0, rationale: "Siponimod labeling uses CYP2C9 genotype to determine eligibility and dose.", reviewHref: "#s1p-modulators" }),

    lesson("high-efficacy-biologics", "Anti-CD20 Therapy: Products and Safety", "ms-biologics", "B-cell depletion requires product-specific administration and continuing immune surveillance.", [
  "Ocrelizumab",
  "Ofatumumab",
  "Ublituximab",
  "Vaccines",
  "Immunoglobulins"
], "Match the formulation, dose, monitoring and follow-up to the patient.", [
  [
    "Differentiate anti-CD20 products",
    "Ocrelizumab, ofatumumab, and ublituximab deplete CD20-positive B cells but use different schedules and settings. Screen hepatitis B, quantitative immunoglobulins, liver tests, infection, and vaccine status before treatment."
  ],
  [
    "Name the ocrelizumab route",
    "Ocrevus is intravenous, while Ocrevus Zunovo is subcutaneous. The administration process is not interchangeable, so an order and handoff must identify the formulation explicitly."
  ],
  [
    "Dose intravenous ocrelizumab by population",
    "Adults start with 300 mg IV, repeated two weeks later, then 600 mg every six months, timed from the first infusion. The May 2026 label also covers RRMS from age 10 at a weight of at least 25 kg: 25 to under 35 kg uses 150 mg twice initially, then 300 mg every six months; at least 35 kg uses the adult amounts. Pediatric corticosteroid premedication has a different cutoff: below 40 kg, methylprednisolone is 2 mg/kg; otherwise 100 mg. Use the labeled infusion protocol and observe at least one hour afterward."
  ],
  [
    "Administer Zunovo as its own formulation",
    "For adults, a healthcare professional injects 920 mg ocrelizumab with 23,000 units hyaluronidase in 23 mL subcutaneously into the abdomen over about ten minutes every six months. This is not an IV dose conversion or a self-injection pen. Premedicate with oral dexamethasone 20 mg or equivalent corticosteroid plus an antihistamine at least 30 minutes beforehand. Observe for at least one hour after the initial injection and at least 15 minutes after subsequent injections. A missed dose is given promptly, with the next date reset six months later and at least five months between doses."
  ],
  [
    "Use the Ocrevus rate for the dose and population",
    "For initial infusions, start at 30 mL/hour and increase by 30 every 30 minutes to a maximum of 180; allow at least 2.5 hours. The same rate applies to pediatric 300-mg maintenance at 25 to under 35 kg. Standard 600-mg maintenance starts at 40 mL/hour, increasing by 40 every 30 minutes to 200; allow at least 3.5 hours. An adult 600-mg maintenance infusion may use the two-hour option only without a prior serious Ocrevus infusion reaction: 100 mL/hour for 15 minutes, 200 for 15, 250 for 30, then 300 for 60. Do not transfer that adult option to children."
  ],
  [
    "Prepare the IV formulation",
    "For Ocrevus, dilute 150 mg (5 mL) or 300 mg (10 mL) in a bag containing 250 mL of 0.9% saline; use 500 mL saline for 600 mg (20 mL). Follow aseptic technique and discard vial remainder. Use a dedicated line with a 0.2- or 0.22-micron in-line filter. Prefer immediate use; otherwise allow up to 24 hours at 2 to 8°C and eight hours at no more than 25°C, including infusion time. Discard an infusion that cannot be completed that day."
  ],
  [
    "Prime Zunovo without changing the dose",
    "Do not dilute Zunovo. Use the specified subcutaneous set with a priming volume no greater than 0.8 mL. After priming and expelling excess, the syringe must contain exactly 23 mL. Do not deliver the residual line-priming volume. Once attached to a primed set, administer immediately; do not store it. A capped syringe without the set may be refrigerated at 2 to 8°C for up to 72 hours followed by eight hours at no more than 25°C; acclimate before use."
  ],
  [
    "Store ocrelizumab vials by formulation",
    "Keep both Ocrevus and Zunovo vials at 2 to 8°C in their cartons, protected from light; do not freeze or shake. Unopened Zunovo vials may spend a cumulative twelve hours at no more than 25°C and may return to refrigeration. Track total time out; this is distinct from the prepared-syringe allowance."
  ],
  [
    "Choose the Zunovo injection site",
    "Use abdominal skin outside the five-centimeter area around the navel. Avoid red, bruised, tender or hardened skin, moles and scars."
  ],
  [
    "Plan reproduction with either ocrelizumab formulation",
    "Both US labels require effective contraception during treatment and six months after the last dose. Their lactation sections report inadequate human milk and infant-effect data; balance maternal need, breastfeeding benefits and potential infant risk individually."
  ],
  [
    "Separate Kesimpta loading from maintenance",
    "Ofatumumab uses 20 mg subcutaneously at weeks 0, 1 and 2, then monthly beginning at week 4. There is no routine week-3 injection. The first injection requires healthcare-professional guidance; subsequent self-administration requires training. Allow the refrigerated device to warm naturally for 15 to 30 minutes before use. Give a missed dose promptly, then preserve the recommended intervals."
  ],
  [
    "Read newer lactation evidence alongside labels",
    "US label wording does not mean no subsequent human research exists. In SOPRANINO, 13 mother-infant pairs received postpartum IV ocrelizumab exposure through breastfeeding; none of the ten infants assessed at day 30 had B-cell levels below normal. Milk concentrations were measured in twelve mothers. This small, uncontrolled study is reassuring but cannot exclude uncommon harms, and it is not a direct study of Zunovo."
  ],
  [
    "Store Kesimpta with a dated plan",
    "Keep at 2 to 8°C in its carton; do not freeze or shake. If needed, store for up to seven days at room temperature no higher than 30°C. If kept below 30°C and returned to refrigeration, use within the next seven days or discard. Record the removal date; returning it does not restore the original shelf life."
  ],
  [
    "Discuss Kesimpta reproductive exposure",
    "The US label requires effective contraception during treatment and six months after the last dose. Pregnancy data are inadequate; fetal B-cell depletion is a concern. The label reports no human milk, infant-effect or milk-production data, so weigh breastfeeding benefits and maternal treatment needs individually."
  ],
  [
    "Interpret the ofatumumab breastfeeding cohort",
    "A 2025 observational study followed twelve mother-infant pairs. Milk concentrations were generally low; the five infants with available B-cell measurements had normal levels, and no concerning infection or developmental pattern was identified. Exposure estimates depended substantially on the calculation method. These limited data inform shared decisions without proving zero risk or overriding precautions for infants exposed during pregnancy."
  ],
  [
    "Anchor Briumvi timing to the first infusion",
    "Ublituximab starts with 150 mg IV, followed two weeks later by 450 mg. The next 450 mg infusion occurs 24 weeks after the first infusion, then every 24 weeks. The first infusion takes about four hours; later infusions about one hour when tolerated. Premedicate with corticosteroid and antihistamine. Observe at least one hour after the first two infusions; later observation depends on physician judgment and reaction history. For a missed maintenance infusion, administer promptly and reset the next infusion to 24 weeks later, maintaining at least five months between maintenance doses. This does not replace the separate two-week interval between the first two initiation doses."
  ],
  [
    "Follow the Briumvi rate steps",
    "The first infusion uses 10 mL/hour for 30 minutes, 20 for 30 minutes, 35 for one hour, then 100 for two hours. Later infusions use 100 mL/hour for 30 minutes, then 400 for 30 minutes. These schedules deliver 250 mL over four hours and one hour, respectively, when uninterrupted. Reaction management may prolong the infusion. Premedicate with methylprednisolone 100 mg IV or an equivalent regimen about 30 minutes before, plus an oral or IV antihistamine 30 to 60 minutes before."
  ],
  [
    "Match the infusion reaction to the response",
    "For IV Ocrevus and Briumvi, a life-threatening or disabling reaction requires immediate cessation, emergency supportive care and permanent discontinuation. For a severe reaction, interrupt and treat; only after all symptoms resolve may supervised restart occur at half the rate present at onset. For mild-to-moderate reactions, halve the rate for at least 30 minutes before increasing as tolerated under the product protocol. These instructions do not authorize natalizumab rechallenge after hypersensitivity."
  ],
  [
    "Prepare and store Briumvi precisely",
    "Using aseptic technique, replace 6 mL from a 250-mL 0.9% saline bag with 6 mL drug for 150 mg; replace 18 mL with 18 mL drug for 450 mg. Gently invert, never shake; use a dedicated line. Refrigerate vials at 2 to 8°C in their cartons without freezing. Prepared solution is preferably used immediately; otherwise allow up to 24 hours refrigerated plus eight hours at no more than 25°C, including warming and infusion."
  ],
  [
    "Discuss Briumvi reproductive exposure",
    "Use effective contraception during treatment and for six months after the last dose. The label lacks human milk and infant-effect data; make an individualized breastfeeding decision."
  ],
  [
    "Make anti-CD20 infection screening actionable",
    "Delay these anti-CD20 treatments during active infection until resolved; the label instruction is not limited to severe infections. Active hepatitis B is a contraindication. HBsAg-negative, anti-HBc-positive results still require a liver specialist's reactivation-prevention plan rather than reassurance from a negative surface antigen alone."
  ],
  [
    "Schedule vaccines around B-cell depletion",
    "For the anti-CD20 products discussed here, give indicated live vaccines at least four weeks before initiation and non-live vaccines at least two weeks beforehand when possible. Avoid live vaccination during treatment and after discontinuation until B-cell recovery. Non-live vaccine responses can be reduced. For an infant exposed during pregnancy, confirm B-cell recovery before live vaccination and coordinate response assessment for non-live vaccines with a specialist."
  ],
  [
    "Follow immunoglobulins after treatment",
    "Measure quantitative immunoglobulins during anti-CD20 therapy and after discontinuation until B-cell repletion. Recurrent or opportunistic infections warrant review. Low immunoglobulins with infections, or prolonged deficiency requiring IV immunoglobulin, can justify discontinuation after individual assessment. A calendar date alone does not establish immune recovery."
  ],
  [
    "Escalate suspected PML or liver injury",
    "Withhold anti-CD20 treatment for suspected PML and investigate promptly; confirmed PML requires discontinuation. New hepatic symptoms require liver testing. If liver injury has no alternative explanation, discontinue the implicated product. Negative viral-hepatitis testing does not exclude drug-related liver injury."
  ],
  [
    "Do not dismiss Kesimpta hypersensitivity",
    "Systemic injection reactions and allergy can look similar. New or more severe symptoms after previously tolerated injections require immediate assessment. Hypersensitivity or a life-threatening systemic reaction requires permanent discontinuation. Any appropriate rechallenge after another systemic reaction needs clinical supervision; prior tolerance does not rule out allergy."
  ],
  [
    "Recognize ocrelizumab colitis",
    "New or persistent diarrhea during either ocrelizumab formulation needs prompt evaluation, including possible immune-mediated colitis. Cases have begun weeks to years after initiation and can be severe. Follow standard breast-cancer screening recommendations; the label's malignancy warning does not establish that every new cancer is caused by treatment."
  ]
], [
  "Identify the exact formulation.",
  "Assess infection and immune recovery.",
  "Keep vaccination and reproductive planning explicit."
], {
  "question": "An ocrelizumab order omits formulation and route. What next?",
  "choices": [
    "Clarify the product and administration plan",
    "Use whichever formulation is stocked",
    "Convert the IV dose volume directly to a subcutaneous volume",
    "Prepare before clarifying the order"
  ],
  "answer": 0,
  "rationale": "IV Ocrevus and subcutaneous Zunovo have different doses and administration requirements.",
  "reviewHref": "#high-efficacy-biologics"
}),

    lesson("natalizumab-safety", "Natalizumab: PML Risk and Infusion Safety", "ms-natalizumab", "Natalizumab requires a distinct surveillance system for PML, antibodies, infusion reactions and organ toxicity.", [
  "Natalizumab",
  "TOUCH",
  "JCV antibodies",
  "PML",
  "Hypersensitivity"
], "Connect each infusion with the current risk assessment and response to warning symptoms.", [
  [
    "Administer natalizumab with observation",
    "The US Tysabri regimen is 300 mg IV over one hour every four weeks, never IV push. Observe throughout infusion and for one hour afterward for the first twelve infusions. After twelve without hypersensitivity, subsequent post-infusion observation follows clinical judgment. Prior PML or natalizumab hypersensitivity contraindicates treatment."
  ],
  [
    "Prepare Tysabri separately",
    "Aseptically add 15 mL drug to 100 mL 0.9% saline; gently invert. Use immediately or refrigerate at 2 to 8°C for up to 48 hours, then warm before infusion. Do not freeze, shake or mix other medicines into the line. Flush afterward with saline. Refrigerate undiluted vials protected from light."
  ],
  [
    "Interpret the correct antibody test",
    "For JCV-antibody testing, wait at least two weeks after plasma exchange or six months after IVIG to reduce misleading results. A prior positive result remains positive for risk assessment. Anti-natalizumab antibodies are different: suspected persistent antibodies warrant testing, with repeat testing three months after an initial positive result."
  ],
  [
    "Reassess natalizumab before re-exposure",
    "A short initial exposure followed by a long interruption raises antibody and hypersensitivity concerns on restarting. Consider anti-natalizumab testing before re-exposure. Persistent antibodies reduce efficacy and warrant a treatment-benefit review; they are not the anti-JCV test used for PML risk."
  ],
  [
    "Use the TOUCH follow-up calendar",
    "Evaluate at months three and six after initiation, then every six months; reassess continuation and reauthorize every six months. Continue follow-up for at least six months after discontinuation."
  ],
  [
    "Discuss natalizumab breastfeeding exposure",
    "The US label reports natalizumab in human milk and no infant-effect or milk-production data. Subsequent human evidence adds context: a 2026 prospective registry cohort compared 183 infants breastfed during maternal monoclonal-antibody therapy (125 natalizumab exposures) with 183 matched controls. Development, growth, serious infections and hospitalizations were similar through 6 to 36 months. These pooled observational findings are reassuring but do not establish zero risk, natalizumab-specific equivalence or longer-term safety. Discuss breastfeeding benefits, maternal disease control and infant circumstances with the treating team; do not infer that stopping effective therapy is automatically safer."
  ],
  [
    "Keep PML evaluation active",
    "Obtain a baseline brain MRI. If initial testing is negative but PML remains suspected, continue withholding natalizumab and repeat evaluation. Anti-JCV antibody testing estimates risk; it does not diagnose PML. Continue symptom surveillance for at least six months after discontinuation."
  ],
  [
    "Respond to natalizumab blood and organ toxicity",
    "Suspected thrombocytopenia requires discontinuation and prompt evaluation of bruising, petechiae or bleeding. Obtain a CBC in newborns exposed in utero. Discontinue for significant liver injury or herpes encephalitis/meningitis. New painful or reduced vision requires urgent retinal assessment. Do not re-treat after hypersensitivity."
  ],
  [
    "Build the natalizumab risk system",
    "PML risk is shaped by anti-JCV antibody status, exposure duration, and prior immunosuppressant use. TOUCH REMS, MRI context, interval reassessment, and immediate evaluation of suspicious neurologic change are essential."
  ]
], [
  "JCV antibodies estimate risk, not diagnosis.",
  "Persistent suspicion requires continued evaluation.",
  "Do not re-treat after hypersensitivity."
], {
  "question": "PML remains suspected despite an initially negative evaluation during natalizumab treatment. What next?",
  "choices": [
    "Continue withholding and repeat evaluation",
    "Resume immediately",
    "Use a negative anti-JCV antibody test to exclude PML",
    "Wait until the next infusion without evaluation"
  ],
  "answer": 0,
  "rationale": "Persistent clinical suspicion requires continued investigation.",
  "reviewHref": "#natalizumab-safety"
}),

    lesson("immune-reconstitution", "Cladribine: Plan Each Course", "ms-reconstitution", "Cladribine uses short oral treatment cycles with prolonged effects. Link each cycle to screening, recovery and follow-up.", ["Cladribine", "Treatment cycles", "Lymphocyte recovery", "Interactions", "Reproduction"], "Build one plan for dose packs, laboratory results and safety follow-up.", [
      ["Plan cladribine before dosing", "Review infection, vaccination, malignancy screening, blood counts, liver function, pregnancy, contraception, interactions, and cumulative course limits. Its annual courses are not routine daily maintenance."],
      ["Position cladribine and obtain baseline imaging", "Mavenclad treats adult relapsing MS, including active secondary progressive disease; generally use it after inadequate response or intolerance to another MS drug. It is not recommended for CIS. Obtain a baseline MRI within three months before course one."],
      ["Reconcile cladribine interactions", "Avoid overlapping immunosuppressive or myelosuppressive therapy; short acute corticosteroid treatment is permitted. Interferon-beta combination is not recommended. Monitor additive hematotoxicity. Avoid phosphorylation-dependent antivirals such as lamivudine. During dosing cycles, avoid potent ENT1, CNT3 or BCRP inhibitors such as curcumin or eltrombopag; seek alternatives. If unavoidable, specialist review should minimize the interacting drug's dose, separate administration and monitor carefully. Transporter inducers such as rifampicin or St. John's wort may reduce cladribine efficacy. The routine three-hour oral separation does not resolve every interaction."],
      ["Build the cladribine calendar", "Mavenclad uses two annual courses, each containing two short cycles. Cycle two starts 23 to 27 days after cycle one's last dose; the second year's first cycle starts at least 43 weeks after the preceding course's final dose. Use the weight-band table, not improvised tablet rounding. Give no additional courses in the following two years."],
      ["Require lymphocyte recovery", "Counts must be normal before course one and at least 800 cells/µL before course two. Delay course two up to six months for recovery; if recovery takes longer, give no further Mavenclad. Check CBC at months two and six; a month-two count below 200 requires monthly checks through month six. Below 200, hold treatment and provide herpes prophylaxis."],
      ["Use current reproductive restrictions", "The May 2026 US label requires effective contraception during dosing and afterward for six months in females and fourteen weeks in males. Pregnancy and current malignancy contraindicate treatment."],
      ["Handle cladribine dosing days safely", "Swallow tablets intact with water immediately after removal from the blister. Use dry hands and wash afterward. Separate other oral medicines by at least three hours. A missed day extends the cycle; never double doses. Follow cytotoxic handling procedures."],
      ["Prevent and recognize infection", "Exclude HIV, active hepatitis and tuberculosis before each course. Delay for uncontrolled acute infection. Give live vaccines four to six weeks beforehand and avoid them until white-cell counts normalize. Recombinant zoster vaccination may be given during treatment, including with lymphopenia. Suspected PML requires withholding and diagnostic evaluation."],
      ["Respond to cladribine toxicity", "Check liver tests before every cycle and course; promptly investigate hepatic symptoms and interrupt or discontinue as appropriate. Stop for suspected hypersensitivity. New dyspnea, palpitations or edema warrants cardiac assessment. If transfusion is needed, consult hematology about irradiated cellular components."],
      ["Check cladribine organ-function limits", "Mavenclad is not recommended when creatinine clearance is below 60 mL/min or Child-Pugh score exceeds 6. Mild renal or hepatic impairment does not require adjustment. Avoid breastfeeding during dosing and for ten days afterward."],
      ["Select the complete cladribine weight band", "Cycle-one/cycle-two tablet totals by weight are: 40 to under 50 kg, 4/4; 50 to under 60 kg, 5/5; 60 to under 70 kg, 6/6; 70 to under 80 kg, 7/7; 80 to under 90 kg, 8/7; 90 to under 100 kg, 9/8; 100 to under 110 kg, 10/9; 110 kg or more, 10/10. Each tablet contains 10 mg. Use below 40 kg has not been studied."],
      ["Work from the cladribine weight band", "For an 85 kg adult, the labeled first-cycle total is 80 mg and the second-cycle total is 70 mg: eight and seven 10 mg tablets, respectively. These are cycle totals, not single doses. Follow the daily pack schedule, with no more than two tablets per day."],
      ["Match daily packs and storage", "The eight-tablet cycle contains three two-tablet days and two one-tablet days; the seven-tablet cycle contains two two-tablet days and three one-tablet days. Follow the prescribed day packs. Store Mavenclad at 20 to 25 °C, with permitted excursions to 15 to 30 °C, in its original moisture-protective packaging."],
    ], ["Use the labeled weight band.", "Recheck eligibility before each course.", "Separate cycle totals from daily doses.", "Safety follow-up continues between courses."], { question: "An 85 kg patient's first cladribine cycle contains eight tablets. How should this be interpreted?", choices: ["A cycle total distributed across the prescribed dosing days", "Eight tablets taken together", "Eight tablets every day", "One tablet each month"], answer: 0, rationale: "The labeled day packs divide the total across five days; a cycle total is not a single dose.", reviewHref: "#immune-reconstitution" }),

    lesson("alemtuzumab-safety", "Alemtuzumab: Maintain the Safety Calendar", "ms-reconstitution", "Infusion courses require preparation and prolonged surveillance for infection and delayed autoimmune disease.", ["Alemtuzumab", "REMS", "Infusion safety", "Prophylaxis", "Delayed autoimmunity"], "Connect each course with its monitoring deadlines and urgent symptom responses.", [
      ["Confirm alemtuzumab eligibility", "Lemtrada treats adult relapsing MS, including active secondary progressive disease. Generally reserve it for inadequate response to at least two MS drugs; it is not recommended for clinically isolated syndrome. HIV, active infection, and prior hypersensitivity to the product are contraindications."],
      ["Prepare before alemtuzumab", "Complete needed immunizations at least six weeks beforehand. Check varicella history or vaccination; test antibodies if neither is documented and consider vaccination if negative, delaying treatment six weeks afterward. Obtain baseline ECG and use a certified infusion setting equipped for emergencies."],
      ["Prepare the infusion correctly", "Withdraw 1.2 mL (12 mg) into a 100 mL bag of normal saline or D5W; gently invert. Protect from light and begin infusion within eight hours of dilution. Before use, diluted solution may be held at 2 to 8 °C or 15 to 25 °C for up to eight hours. Never freeze, shake, give IV push, or simultaneously infuse another drug through the same line."],
      ["Use alemtuzumab within its safety system", "Infusion reactions, infections, thyroid disease, immune thrombocytopenia, nephropathy, malignancy, and other autoimmune events require REMS-based prophylaxis and prolonged laboratory and clinical monitoring."],
      ["Prevent infections during immune recovery", "Start herpes antiviral prophylaxis on day one of each course. Continue until both two months have elapsed after treatment and CD4 counts reach at least 200 cells/µL (full prescribing information, sections 2.2 and 5.17). Calendar time alone is insufficient. Begin Listeria food precautions before therapy; the duration of excess risk is unknown. Screen for tuberculosis before treatment. Avoid live viral vaccines after a course."],
      ["Investigate new symptoms after alemtuzumab", "Persistent diarrhea warrants prompt assessment for immune-mediated colitis. Withhold treatment for suspected PML and investigate. Unexplained bleeding warrants urgent evaluation, including a coagulation panel with aPTT for possible acquired hemophilia A."],
      ["Schedule alemtuzumab courses", "Lemtrada uses 12 mg IV daily for five days, then 12 mg daily for three days twelve months later. Further three-day courses may be considered at least twelve months after the previous course's last dose. Infuse over four hours and observe for at least two hours afterward. Premedicate with methylprednisolone 1 g or equivalent on the first three days of each course."],
      ["Maintain the alemtuzumab monitoring calendar", "From baseline through 48 months after the last course, obtain monthly CBC, creatinine and urinalysis with cell counts; check thyroid function every three months. Obtain baseline urine protein/creatinine ratio, periodic liver tests, and baseline and annual skin examinations. Additional treatment extends the surveillance timeline. After 48 months, investigate suggestive symptoms; continue thyroid testing when clinically indicated or during pregnancy."],
      ["Escalate vascular and renal warning signs", "Sudden focal neurologic symptoms require emergency assessment for stroke or arterial dissection. Rising creatinine with hematuria or pulmonary symptoms needs immediate evaluation for anti-GBM disease. Obtain CBC immediately for suspected immune thrombocytopenia. For urine protein of 1+ or more, quantify the protein/creatinine ratio. A ratio above 200 mg/g, creatinine increase above 30%, or unexplained hematuria requires further renal evaluation. Scheduled monitoring never replaces symptom-triggered assessment."],
      ["Recognize systemic autoimmune emergencies", "After alemtuzumab, fever with cytopenias, high ferritin or organ dysfunction requires immediate evaluation for hemophagocytic lymphohistiocytosis. Fever, arthritis, rash and leukocytosis also raise adult-onset Still disease after excluding mimics. Discontinue if no alternative cause is established. Suspected thrombotic thrombocytopenic purpura requires urgent assessment; discontinue when confirmed or no alternative cause is found. Subacute cognitive or psychiatric change with seizures can indicate autoimmune encephalitis; discontinue if confirmed by neural autoantibodies or no alternative explanation is established."],
      ["Respond to hepatic symptoms", "Unexplained jaundice, dark urine, nausea or abdominal pain after alemtuzumab warrants prompt transaminase and bilirubin testing. Interrupt or discontinue treatment as appropriate for suspected autoimmune hepatitis; do not simply wait for the next scheduled panel."],
      ["Plan pregnancy and lactation individually", "Use effective contraception during each alemtuzumab course and for four months afterward. Thyroid autoimmunity can affect a later pregnancy; maternal antibodies may cause neonatal Graves disease. Human milk data are lacking, so discuss breastfeeding benefits, maternal treatment needs, and possible infant risk rather than assuming safety or applying another drug's interruption interval."],
      ["Complete alemtuzumab surveillance", "The label recommends annual HPV screening for female patients. New abdominal pain with fever or vomiting warrants prompt assessment for acalculous cholecystitis. Report new cough, dyspnea, chest discomfort or hemoptysis for evaluation, including pneumonitis. Review prior Campath exposure because it contains alemtuzumab and can add prolonged immune effects."],
      ["Store alemtuzumab vials correctly", "Keep unopened Lemtrada vials refrigerated at 2 to 8 °C in the original carton for light protection; do not freeze or shake. The diluted infusion has a separate eight-hour handling limit."],
      ["Expect delayed consequences", "Immune effects outlast the administration window. A normal final infusion day does not end infection, autoimmune, reproductive, or malignancy surveillance."],
      ["Preserve continuity", "The record should contain every course date, laboratory deadline, vaccine, prophylaxis interval, symptom trigger, contraception window, and responsible clinician."],
    ], ["Infusion courses require emergency readiness.", "Prophylaxis depends on time and immune recovery.", "Maintain prolonged REMS monitoring.", "Investigate symptoms beyond scheduled surveillance."], { question: "New bleeding develops five years after alemtuzumab. What next?", choices: ["Prompt evaluation despite the elapsed monitoring period", "Ignore symptoms after 48 months", "Wait until the next infusion", "Check thyroid function alone"], answer: 0, rationale: "The scheduled monitoring period is not an expiration date for investigating possible toxicity.", reviewHref: "#alemtuzumab-safety" }),

    lesson("symptom-rehabilitation", "Walking, Spasticity and Rehabilitation", "ms-rehabilitation", "Define functional goals and preserve useful movement while treating disabling symptoms. DMT and rehabilitation have complementary roles.", [
  "Dalfampridine",
  "Spasticity",
  "Baclofen",
  "Pain",
  "Falls"
], "Measure benefit in walking, transfers, comfort and daily activity.", [
  [
    "Use dalfampridine inside its renal boundary",
    "Dalfampridine may improve walking in selected adults. It is contraindicated with seizure history or creatinine clearance of 50 mL/min or less, and extended-release tablets must not be crushed, split, or doubled."
  ],
  [
    "Prescribe dalfampridine precisely",
    "The maximum is one 10 mg extended-release tablet twice daily, about 12 hours apart, with or without food. Skip missed doses without catch-up. Determine creatinine clearance before treatment and at least annually; CrCl 51 to 80 mL/min still warrants careful benefit-risk review because exposure and seizure risk increase. Do not combine with other 4-aminopyridine products. Cimetidine and other OCT2 inhibitors can increase exposure. A seizure requires permanent discontinuation; prior tolerance does not establish safety."
  ],
  [
    "Treat spasticity as a functional problem",
    "Stretching, physical therapy, mobility equipment, trigger control, and selected medicines can reduce painful or disabling tone. Excessive relaxation and sedation can worsen transfers, gait, and falls."
  ],
  [
    "Choose spasticity treatment around function",
    "First address infection, pressure injury, positioning, pain and bladder or bowel triggers. Some patients rely on muscle tone for standing or transfers. NICE NG220 places oral baclofen first, with gabapentin considered when baclofen is ineffective or not tolerated. Review renal function and sedation, titrate gradually, and taper safely rather than abruptly stopping baclofen. Combining these medicines increases respiratory-depression risk. Refer persistent disabling spasticity to an experienced multidisciplinary team."
  ],
  [
    "Use the oral baclofen schedule deliberately",
    "The US tablet label suggests 5 mg three times daily for three days, then 10, 15 and 20 mg three times daily for three days at each step, with further individualized adjustment up to 80 mg/day. Use the lowest effective dose; renal impairment may require reduction. NICE's MS guidance instead advises slower increments of at least two weeks. Follow an individualized prescription rather than combining these schedules. Abrupt withdrawal can cause hallucinations or seizures; taper unless a serious reaction requires another approach. Alcohol and other CNS depressants add sedation."
  ],
  [
    "Plan baclofen follow-up",
    "Monitor seizure control in patients with epilepsy and reassess whether reduced tone worsens posture or transfers. Continued oral use during pregnancy requires coordinated obstetric planning because neonatal withdrawal, including seizures, can occur. Do not abruptly stop maternal therapy without a supervised plan."
  ],
  [
    "Identify the pain mechanism",
    "NICE NG220 distinguishes neuropathic pain from musculoskeletal pain related to posture, immobility or spasticity. Assess the cause and functional impact before choosing treatment. Neuropathic pain warrants a neuropathic-pain pathway and referral when needed; posture-related pain calls for appropriate positioning, mobility and spasticity management. An MS diagnosis does not make every pain complaint neuropathic."
  ],
  [
    "Avoid overstating tremor evidence",
    "NICE NG220 found insufficient evidence to recommend a specific pharmacological treatment for MS ataxia or tremor and called for research. Assess functional impact and seek individualized specialist and rehabilitation input; do not present an empiric drug trial as an established universal regimen."
  ],
  [
    "Reduce treatment-created disability",
    "Baclofen, gabapentinoids, anticholinergics, cannabinoids, hypnotics, and other symptom medicines can combine into sedation, falls, cognitive burden, constipation, or retention. Review the whole symptom regimen."
  ]
], [
  "Check renal function before dalfampridine.",
  "Balance reduced tone against useful function.",
  "Reassess cumulative medication burden."
], {
  "question": "Which patient should not receive dalfampridine?",
  "choices": [
    "CrCl 42 mL/min without seizure history",
    "CrCl 90 mL/min with cane use",
    "CrCl 95 mL/min receiving physical therapy",
    "CrCl 100 mL/min tracking walking speed"
  ],
  "answer": 0,
  "rationale": "CrCl at or below 50 mL/min is a contraindication because accumulation increases seizure risk.",
  "reviewHref": "#symptom-rehabilitation"
}),

    lesson("fatigue-cognition", "Fatigue, Cognition and Treatment Trials", "ms-fatigue", "Assess modifiable contributors and interpret treatment evidence before selecting an individualized plan.", [
  "Sleep and mood",
  "Behavioral treatment",
  "Modafinil",
  "Amantadine",
  "Cognition"
], "Define a measurable goal and a review date before an off-label medication trial.", [
  [
    "Build a fatigue plan before adding medicine",
    "Investigate sleep, infection, anemia, thyroid disease, pain, mood and medication effects. Agree on meaningful activity goals, energy conservation, suitable exercise and stress-management strategies; heat can worsen fatigue. Measure benefit against daily function rather than assuming every episode represents MS activity."
  ],
  [
    "Treat fatigue medicines as monitored trials",
    "NICE recommends specialist discussion and shared decisions before trying amantadine, modafinil or an SSRI for MS fatigue. Regularly reassess effectiveness, tolerability and whether treatment should continue. NICE excludes modafinil during pregnancy or pregnancy planning and highlights cardiovascular monitoring and reduced effectiveness of steroidal contraception. These recommendations do not establish US approval for MS fatigue."
  ],
  [
    "Interpret fatigue evidence cautiously",
    "In TRIUMPHANT-MS, amantadine, modafinil and methylphenidate did not show a significant overall medication effect versus placebo on the primary fatigue measure. This argues against promising routine benefit, while leaving room for an individualized, measured specialist trial. Do not interpret a nonsignificant group result as proof that no individual can respond."
  ],
  [
    "Put newer fatigue research in context",
    "COMBO-MS compared cognitive behavioral therapy, modafinil and their combination over twelve weeks. All groups improved, without a clear additional benefit from combination treatment. Unlike TRIUMPHANT-MS, it had no placebo arm: improvement within an active-treatment group does not by itself establish a drug effect over placebo. The studies answer different questions and support discussing behavioral treatment alongside individualized medication decisions."
  ],
  [
    "Apply US modafinil safeguards",
    "MS fatigue is not a Provigil-labeled indication. Stop at the first rash unless clearly unrelated to the drug, and obtain assessment; stop for suspected angioedema or multiorgan hypersensitivity. Review psychiatric and cardiovascular risks. The US label advises alternative or additional contraception during use and for one month afterward for users of steroidal contraceptives. Do not substitute a wakefulness prescription for treatment of underlying sleep apnea."
  ],
  [
    "Monitor modafinil beyond wakefulness",
    "Consider stopping if new psychiatric symptoms develop; severe mood change, psychosis or suicidal thinking needs urgent assessment. Monitor heart rate and blood pressure according to risk. Avoid use in patients with left ventricular hypertrophy or prior stimulant-associated mitral-valve-prolapse syndrome; new chest pain, arrhythmia or ischemic ECG findings need cardiac evaluation. Increased monitoring is appropriate after recent myocardial infarction or unstable angina."
  ],
  [
    "Reconcile modafinil interactions",
    "Modafinil can lower cyclosporine concentrations and increase exposure to CYP2C19 substrates such as phenytoin or diazepam. Arrange concentration or clinical monitoring and dose review. Consider more frequent INR testing with warfarin and use caution with MAO inhibitors. Persistent sleepiness still warrants driving-safety counseling."
  ],
  [
    "Check amantadine safety before a fatigue trial",
    "MS fatigue is not a labeled indication for immediate-release amantadine capsules. Renal accumulation can cause severe toxicity, so review kidney function and age before choosing a dose. Monitor confusion, hallucinations, suicidal thinking, impulse-control changes, edema and orthostatic symptoms. Anticholinergic-like effects can worsen retention or constipation; avoid untreated angle-closure glaucoma. New visual changes require ophthalmic assessment for corneal edema; if confirmed, taper and discontinue. Avoid unsupervised abrupt withdrawal because delirium and an NMS-like syndrome can occur."
  ],
  [
    "Read amantadine renal instructions by formulation",
    "The immediate-release capsule label's renal table uses creatinine clearance in mL/min/1.73 m²: 30 to 50, give 200 mg on day one then 100 mg daily; 15 to 29, give 200 mg on day one then 100 mg every other day; below 15 or with hemodialysis, 200 mg every seven days. These are product-label adjustments, not a validated MS-fatigue regimen. Select off-label treatment individually and do not transfer this table to extended-release products. Hemodialysis removes little amantadine."
  ],
  [
    "Assess cognition and reversible contributors",
    "Include cognition in comprehensive review, using an interview, brief assessment or full neuropsychological evaluation according to need. Check anxiety, depression, sleep, fatigue and medication effects. Persistent cognitive difficulties warrant occupational-therapy or neuropsychology input tailored to daily activities. Do not assume that memory complaints alone establish new inflammatory disease activity."
  ]
], [
  "Assess reversible contributors.",
  "Separate US labeling from guideline-supported off-label use.",
  "Do not equate within-group improvement with a placebo-controlled drug effect."
], {
  "question": "How should an MS-fatigue medication trial be evaluated?",
  "choices": [
    "Continue indefinitely once prescribed",
    "Assess meaningful function, adverse effects and ongoing need",
    "Use improvement alone to prove superiority over placebo",
    "Add a second drug before reviewing sleep"
  ],
  "answer": 1,
  "rationale": "A monitored trial uses agreed goals and repeated benefit-harm assessment, alongside assessment of reversible contributors.",
  "reviewHref": "#fatigue-cognition"
}),

    lesson("autonomic-communication-mood", "Bladder, Bowel, Communication and Mood", "ms-autonomic", "Review symptoms that affect independence, safety and relationships without assuming that every problem has the same cause.", [
  "Bladder emptying",
  "Bowel routine",
  "Swallowing",
  "Sexual function",
  "Mood and PBA"
], "Identify the mechanism, relevant safety risks and appropriate specialist support.", [
  [
    "Map bladder, bowel, pain, and fatigue",
    "Retention, urgency, infection, constipation, neuropathic pain, sleep, mood, anemia, thyroid disease, and medication effects require distinct evaluation rather than one nonspecific fatigue label."
  ],
  [
    "Separate bladder storage from emptying",
    "Urgency and leakage do not establish normal emptying. Assess infection and post-void residual urine. Antimuscarinics can help neurogenic overactive-bladder symptoms but may worsen retention, constipation and cognition, particularly with centrally acting agents such as oxybutynin. Monitor residual volume after initiation when the patient is not catheterizing. Specialist bladder botulinum-toxin treatment after inadequate response or intolerance requires discussion of retention and the ability and willingness to catheterize if needed."
  ],
  [
    "Use the US neurogenic-bladder pathway",
    "AUA/SUFU recommends onabotulinumtoxinA for MS-related neurogenic lower urinary tract dysfunction refractory to oral medicines. Patients who void spontaneously need counseling about retention and possible intermittent catheterization before treatment. Assess hand function, cognition, mobility and caregiver support when deciding whether that plan is feasible."
  ],
  [
    "Apply BOTOX bladder safeguards",
    "For adult neurologic detrusor overactivity, the labeled dose is 200 Units; repeat no sooner than twelve weeks. Toxin products are not interchangeable. Intradetrusor treatment is contraindicated with UTI, or with urinary retention or PVR above 200 mL in patients not routinely catheterizing. Confirm willingness and ability to catheterize if needed. For noncatheterizing patients, check PVR within two weeks and periodically through twelve weeks; symptoms and PVR above 200 mL guide catheterization, continued until below 200 mL. New swallowing, speech or breathing problems require immediate care."
  ],
  [
    "Distinguish fecal leakage from diarrhea",
    "Assess stool consistency, bowel timing, medicines and possible fecal loading. Overflow around retained stool needs a constipation or impaction plan; reflexively adding an antidiarrheal can miss the cause. Build a predictable bowel routine with individualized diet, fluid intake and evacuation support. Persistent problems warrant specialist assessment."
  ],
  [
    "Protect swallowing and communication",
    "Coughing during meals, food sticking, or liquids going down the wrong way warrant swallowing assessment because dysphagia can cause dehydration, malnutrition and aspiration pneumonia. Refer to speech-language pathology for individualized evaluation, with instrumental testing when needed. Speech therapy can also address dysarthria, pacing and communication aids. Sudden speech disturbance needs urgent assessment for stroke rather than automatic attribution to MS."
  ],
  [
    "Include sexual function in review",
    "Ask about sexual concerns privately and without assumptions. Separate direct sensory or erectile changes from fatigue, spasticity, bladder problems, medication effects and psychological or relationship contributors. Tailor symptom control, positioning, lubricants, counseling and specialist referral to the person's goals. Erectile-dysfunction medication requires its own contraindication and interaction review."
  ],
  [
    "Distinguish mood from emotional expression",
    "Screen for depression and suicidality during ongoing MS care; persistent low mood needs assessment and treatment, not dismissal as an inevitable response to disability. Sudden involuntary laughing or crying disproportionate to the person's feelings suggests pseudobulbar affect, which requires a separate assessment."
  ],
  [
    "Use dextromethorphan/quinidine deliberately",
    "Nuedexta treats pseudobulbar affect: one 20-mg/10-mg capsule daily for seven days, then one every twelve hours. Reassess continuing need. Contraindications include heart failure, prolonged QT or torsades history, relevant AV block, implicated drug hypersensitivity, quinidine/quinine/mefloquine use, and drugs that both prolong QT and depend on CYP2D6. Separate MAOIs by at least fourteen days in either direction."
  ],
  [
    "Check Nuedexta cardiac and interaction risks",
    "In patients at risk, obtain ECG before and three to four hours after the first dose; correct low potassium or magnesium and reassess when risks change. Syncope or palpitations require stopping and evaluation. CYP2D6 inhibition changes other drug exposure; SSRIs and tricyclics increase serotonin-syndrome risk. Dizziness adds fall risk. Suspected drug-related thrombocytopenia requires immediate cessation; do not restart in sensitized patients."
  ],
  [
    "Complete the Nuedexta medication review",
    "Quinidine can raise digoxin exposure: monitor levels and adjust when needed. Hepatitis requires discontinuation. Mild or moderate renal or hepatic impairment needs no routine dose adjustment, but moderate hepatic impairment warrants closer adverse-effect monitoring. Severe impairment is unstudied; do not invent a reduced regimen. Alcohol and other centrally acting medicines can compound adverse effects."
  ]
], [
  "Distinguish urinary storage from emptying problems.",
  "Assess swallowing concerns promptly.",
  "Assess mood and emotional expression separately."
], {
  "question": "Repeated coughing during meals develops in a patient with MS. What next?",
  "choices": [
    "Assume fatigue and observe without evaluation",
    "Prescribe one standard liquid texture for every patient",
    "Arrange individualized swallowing assessment",
    "Switch the DMT solely because of coughing"
  ],
  "answer": 2,
  "rationale": "Dysphagia requires assessment of swallowing safety and nutritional effects, with speech-language pathology involvement.",
  "reviewHref": "#autonomic-communication-mood"
}),

    lesson("longitudinal-care", "Make the MS Timeline Authoritative", "ms-longitudinal", "Longitudinal care turns attacks, MRI, disability, exposure, infection, vaccines, laboratory trends, pregnancy goals, access, and treatment transitions into one visible decision record.", ["Breakthrough disease", "Switching", "Washout", "Vaccination", "Handoff"], "Make it possible for the patient and the next clinician to know what happened, what is due, what would trigger a change, and who owns the next decision.", [
      ["Measure breakthrough disease", "New relapse, enhancing or new MRI lesions, disability progression, intolerance, unsafe monitoring, or inadequate exposure can justify a change. Confirm what the current treatment had a fair chance to accomplish."],
      ["Discuss switching using objective evidence", "The AAN guideline recommends discussing a switch after adequate time for DMT effect and confirmed adherence when a year includes at least one relapse, at least two unequivocally new MRI lesions, or increased disability on examination. These are discussion triggers, not an automatic prescription or a reason to ignore earlier serious toxicity. Check lesion timing, exposure and alternative causes before declaring treatment failure."],
      ["Design the transition", "Stopping and starting dates, washout, immune recovery, infection, rebound risk, pregnancy, vaccines, and overlapping immunosuppression determine switch safety. The goal is neither an unsafe overlap nor an avoidable untreated gap."],
      ["Document the safety calendar", "Capture last and next doses, MRI schedule, blood and liver tests, immunoglobulins, JCV status, eye monitoring, vaccines, reproductive plans, infection holds, and restart ownership."],
      ["Treat access as clinical", "Insurance delay, infusion distance, injection training, storage, language, cost, and monitoring availability change effective exposure. A theoretically ideal medicine that cannot reach the patient is not a complete plan."],
    ], ["Breakthrough activity must be defined.", "Every switch needs a continuity plan.", "Last-dose timing belongs in the handoff.", "Access is part of pharmacotherapy."], { question: "What information is most important before restarting an anti-CD20 medicine after hospitalization?", choices: ["Last dose, infection status, laboratory context, and assigned restart ownership", "The medication name and usual frequency without administration dates", "The pre-hospital dose calendar without reassessing infection", "The discharge date used as the new infusion date"], answer: 0, rationale: "Precise exposure and infection context prevent duplicate dosing, unsafe immunosuppression, and prolonged interruption.", reviewHref: "#longitudinal-care" }),
  ],
  questionBank: multipleSclerosisQuestionBank,
  references: [
    { label: "Van Neste M, et al. Monomethyl fumarate exposure via human milk: ConcePTION case report. 2024.", href: "https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2024.1393752/full" },
    { label: "Witt L, et al. Breastfeeding during monoclonal-antibody therapy: prospective infant cohort. JNNP 2026.", href: "https://pubmed.ncbi.nlm.nih.gov/41760394/" },
    { label: "DailyMed. Nuedexta US prescribing information.", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=484e0918-3442-49dc-8ccf-177f1f3ee9f3" },
    { label: "VA Research. Multiple sclerosis: mental health screening.", href: "https://www.research.va.gov/topics/multiple_sclerosis.cfm" },
    { label: "VA MS Centers of Excellence. Speech and swallowing in MS.", href: "https://www.va.gov/MS/LEARN_ABOUT_MULTIPLE_SCLEROSIS/Speech_and_Swallowing_in_Multiple_Sclerosis.asp" },
    { label: "VA MS Centers of Excellence. Sexual health and MS. July 2026.", href: "https://www.va.gov/MS/LEARN_ABOUT_MULTIPLE_SCLEROSIS/Sexual_Health_and_Multiple_Sclerosis.asp" },
    { label: "NICE NG127. Neurological symptom recognition and referral.", href: "https://www.nice.org.uk/guidance/ng127/chapter/Recommendations-for-adults-aged-over-16" },
    { label: "AUA/SUFU. Adult neurogenic lower urinary tract dysfunction guideline (2021).", href: "https://www.auanet.org/documents/guidelines/pdf/nlutd.pdf" },
    { label: "BOTOX. US prescribing information: adult bladder dysfunction and safety.", href: "https://www.rxabbvie.com/pdf/botox_pi.pdf" },
    { label: "NICE CG148. Urinary incontinence in neurological disease.", href: "https://www.nice.org.uk/guidance/cg148/chapter/Recommendations" },
    { label: "NICE CG49. Faecal incontinence in adults.", href: "https://www.nice.org.uk/guidance/cg49/chapter/Recommendations" },
    { label: "Baclofen oral tablets US prescribing information.", href: "https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=8b046ee6-28fc-4ab1-b543-414ad0103e5c&type=display" },
    { label: "Amantadine immediate-release capsules US prescribing information.", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=c3b9e7f0-be6d-4f37-9277-54bb0ba8b158" },
    { label: "COMBO-MS randomized comparative-effectiveness trial, Lancet Neurology 2024.", href: "https://pubmed.ncbi.nlm.nih.gov/39424559/" },
    { label: "Provigil US prescribing information, February 2025.", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=0391f182-1958-9fef-a944-53b229ce99e7" },
    { label: "Nourbakhsh et al. TRIUMPHANT-MS randomized crossover trial, Lancet Neurology 2021.", href: "https://pubmed.ncbi.nlm.nih.gov/33242419/" },
    { label: "Sanofi. Lemtrada prescribing information.", href: "https://products.sanofi.us/lemtrada/LEMTRADA.pdf" },
    { label: "Mavenclad prescribing information, May 2026.", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=9c75e30a-a410-40f1-b653-04d532bd9144" },
    { label: "SOPRANINO. Registered trial results, EudraCT 2021-000063-79.", href: "https://www.clinicaltrialsregister.eu/ctr-search/trial/2021-000063-79/results" },
    { label: "Witt L, et al. Ofatumumab-exposed breastfeeding in multiple sclerosis patients. 2025.", href: "https://doi.org/10.1177/13524585241307165" },
    { label: "Genentech. Ocrevus IV prescribing information, May 2026.", href: "https://www.gene.com/download/pdf/ocrevus_prescribing.pdf" },
    { label: "ECTRIMS/EAN. Consensus on vaccination in people with multiple sclerosis (2023)", href: "https://doi.org/10.1177/13524585231168043" },
    {"label": "DailyMed. Zeposia prescribing information", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=93ce2fab-edfb-4804-8074-963071de51e4"},
    {"label": "DailyMed. Ponvory prescribing information", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=0c025ba8-ba51-272e-e063-6294a90ad120"},
    {"label": "DailyMed. Gilenya prescribing information", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=cc9e1c8c-0e2b-44e2-878b-27057f786be9"},
    {"label": "DailyMed. Mayzent, revised June 2026 prescribing information", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=44492772-5aed-4627-bd85-e8e89f308bb3"},
    { label: "DailyMed. Bafiertam prescribing information, revised July 2026", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a161f9d4-70f1-4097-957a-eafb35d3274f" },
    { label: "DailyMed. Aubagio prescribing information, revised February 2026", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=4650d12c-b9c8-4525-b07f-a2d773eca155" },
    {"label": "DailyMed. Tecfidera prescribing information", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=665d7e74-036c-5f68-5b67-ab84b9b49151"},
    {"label": "DailyMed. Vumerity prescribing information", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=2d74414f-6b83-4ea2-9a95-3cecabbce774"},
    { label: "DailyMed. Avonex prescribing information", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=d70a39cc-de15-4c12-a1ec-8063b69ea0e1" },
    { label: "DailyMed. Rebif prescribing information", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=c6fcb5d2-8fcd-44fa-a838-b84ee5f44f0f" },
    { label: "DailyMed. Betaseron prescribing information", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=66311f74-0472-4fa3-848a-06002ca0def5" },
    { label: "Teva. Copaxone prescribing information, revised June 2026", href: "https://www.copaxone.com/globalassets/copaxone/prescribing-information.pdf" },
    { label: "DailyMed. Plegridy prescribing information: SC and IM administration", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=08f0ea03-4e6d-195d-aef4-886e32befa95" },
    { label: "NICE NG220. Multiple sclerosis in adults: symptom and relapse management", href: "https://www.nice.org.uk/guidance/ng220/chapter/Recommendations" },
    { label: "FDA. Glatiramer acetate anaphylaxis boxed warning, January 22, 2025", href: "https://www.fda.gov/media/185208/download" },
    { label: "Montalban X, et al. 2024 revisions of the McDonald criteria for multiple sclerosis. Lancet Neurology. 2025.", href: "https://discovery.ucl.ac.uk/id/eprint/10211287/" },
    { label: "Montalban et al. Published diagnostic criteria, including Figures 1-3; Amsterdam UMC repository.", href: "https://pure.amsterdamumc.nl/ws/portalfiles/portal/157364821/Diagnosis-of-multiple-sclerosis.pdf" },
    { label: "Lancet Neurology. 2026 correction to author affiliations and indexing.", href: "https://www.sciencedirect.com/science/article/abs/pii/S1474442226001213" },
    { label: "Lublin FD, et al. MS clinical course descriptors: clarification. Neurology. 2020.", href: "https://doi.org/10.1212/WNL.0000000000009636" },
    { label: "American Academy of Neurology. Disease-modifying Therapies for Adults with Multiple Sclerosis.", href: "https://www.aan.com/Guidelines/home/GuidelineDetail/898" },
    { label: "Department of Veterans Affairs. Disease Modifying Therapies in Multiple Sclerosis. June 2024.", href: "https://www.va.gov/formularyadvisor/DOC_PDF/CRE_Disease_Modifying_Therapies_in_Multiple_Sclerosis_Rev_June_2024.pdf" },
    { label: "Department of Veterans Affairs. Relapse Management for Multiple Sclerosis.", href: "https://www.va.gov/MS/LEARN_ABOUT_MULTIPLE_SCLEROSIS/Relapse_Management_for_Multiple_Sclerosis.asp" },
    { label: "DailyMed. Briumvi Ublituximab Prescribing Information.", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3a77cd8c-811b-407c-9140-d0c5c26435c2" },
    { label: "DailyMed. Kesimpta Ofatumumab Prescribing Information.", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6a8a3f53-2062-48ff-9dbe-b939df133ca3" },
    { label: "DailyMed. Ocrevus Zunovo Prescribing Information.", href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b216af61-99d0-42a3-afc2-b5bf86df1ec0" },
    { label: "DailyMed. Tysabri Natalizumab Prescribing Information.", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=c5fdde91-1989-4dd2-9129-4f3323ea2962" },
    { label: "DailyMed. Ampyra Dalfampridine Prescribing Information.", href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=974fb2af-7012-4989-b330-e44a31c9c3e5" },
    { label: "National Multiple Sclerosis Society. Disease-modifying therapies.", href: "https://www.nationalmssociety.org/managing-ms/treating-ms/disease-modifying-therapies" },
  ],
};
