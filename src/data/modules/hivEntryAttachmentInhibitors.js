import { hivEntryAttachmentInhibitorQuestionBank } from "@/data/questionBanks/hivEntryAttachmentInhibitors";

const check = (question, choices, rationale, slug) => ({ question, choices, answer: 0, rationale, reviewHref: `#${slug}` });
const rows = (...items) => items.map(([heading, body]) => ({ heading, body }));
const section = (slug, title, summary, concepts, application, lesson, keyPoints, quiz) => ({ slug, title, visual: `hiv-entry-${slug}`, summary, concepts, application, lesson: rows(...lesson), keyPoints, check: quiz });

export const hivEntryAttachmentInhibitorModule = {
  slug: "hiv-entry-attachment-inhibitors",
  number: "192",
  title: "HIV Entry and Attachment Inhibitors",
  source: "RxPrep 2023 HIV entry inhibitor material, reconciled with NIH Adult, Adolescent, Pediatric, and Perinatal HIV Guidelines and current FDA labeling through August 2026",
  description: "Map HIV attachment and fusion to maraviroc, fostemsavir, ibalizumab, and enfuvirtide, then integrate tropism, multidrug resistance, delivery, interactions, toxicity, and accountable salvage-regimen design.",
  topics: ["HIV entry", "Tropism", "Maraviroc", "Fostemsavir", "Ibalizumab", "Enfuvirtide", "Resistance", "Delivery", "Monitoring", "Salvage therapy"],
  outcomes: [
    "Trace attachment, coreceptor engagement, gp41 refolding, and membrane fusion in the HIV-1 entry sequence.",
    "Differentiate host-directed and virus-directed entry inhibitors by molecular target.",
    "Use coreceptor tropism testing to determine whether maraviroc has a viable target.",
    "Dose maraviroc according to the complete CYP3A and renal context.",
    "Explain fostemsavir conversion, gp120 binding, administration, interaction, and safety constraints.",
    "Plan ibalizumab loading, maintenance, administration, missed-dose recovery, and reaction monitoring.",
    "Teach enfuvirtide reconstitution, subcutaneous delivery, storage, site rotation, and toxicity response.",
    "Construct an optimized background regimen from cumulative resistance and treatment history.",
    "Preserve HBV treatment and use current pregnancy guidance during regimen reconstruction.",
    "Close selection with virologic response, safety, access, and delivery ownership."
  ],
  submodules: [
    section("entry-target-map", "Map the Entry Sequence Before Choosing the Drug", "HIV-1 entry is an ordered molecular process. Each therapy blocks a different event, so a class label alone is not enough to predict activity, resistance, or delivery.", ["gp120", "CD4", "CCR5 and CXCR4", "gp41", "Membrane fusion"], "Place every agent at its exact host or viral target before reasoning about clinical use.", [
      ["Begin with attachment", "Envelope gp120 first engages CD4. This interaction changes gp120 conformation and exposes a coreceptor-binding surface."],
      ["Engage a coreceptor", "The virus then uses CCR5 or CXCR4. Maraviroc allosterically blocks host CCR5, so it has no activity when detectable virus can enter through CXCR4."],
      ["Trigger fusion", "Coreceptor binding enables gp41 to refold and draw viral and cellular membranes together. Enfuvirtide interrupts this gp41 fusion machinery."],
      ["Distinguish the other targets", "Fostemsavir becomes temsavir and binds viral gp120 before CD4 attachment. Ibalizumab binds domain 2 of host CD4 after attachment and blocks downstream entry changes without depleting CD4 cells."]
    ], ["Entry is ordered.", "gp120 and gp41 have different jobs.", "Host and viral targets differ.", "Target availability determines activity."], check("Which pairing correctly matches an agent to its entry target?", ["Fostemsavir to gp120, maraviroc to CCR5, ibalizumab to CD4, and enfuvirtide to gp41", "All four agents to reverse transcriptase", "Maraviroc to CXCR4 only", "Ibalizumab to viral protease"], "The four agents interrupt distinct attachment or fusion events.", "entry-target-map")),

    section("salvage-resistance", "Build the Regimen From Cumulative Evidence", "Entry and attachment inhibitors are most often considered when resistance, intolerance, or safety limits conventional options. Novel action does not make monotherapy safe.", ["Virologic failure", "Cumulative genotype", "Phenotype", "Optimized background regimen", "Fully active drug"], "Use the complete treatment history to protect every remaining active mechanism.", [
      ["Confirm failure and its cause", "Review HIV RNA trajectory, adherence, dispensing, food requirements, interactions, tolerability, and access before assigning resistance."],
      ["Read resistance cumulatively", "A current plasma genotype may not display archived substitutions after drug pressure changes. Combine every prior genotype, phenotype, treatment response, and exposure."],
      ["Avoid functional monotherapy", "Current guidance prefers at least two, and when possible three, fully active agents in a new regimen. Adding one active drug to a failing regimen can rapidly sacrifice that drug."],
      ["Monitor the new plan early", "Measure HIV RNA before the change and within 4 to 8 weeks. Incomplete response should trigger immediate assessment of delivery, exposure, companion activity, and resistance."]
    ], ["Novel agents still select resistance.", "History is cumulative.", "Background activity matters.", "Early HIV RNA verifies the plan."], check("What is the central error in adding fostemsavir alone to a failing regimen?", ["It creates functional monotherapy and can select resistance to the remaining active agent", "It makes tropism testing impossible", "It converts HIV-1 into HIV-2", "It permanently suppresses HBV"], "A novel mechanism must be protected by an optimized background regimen.", "salvage-resistance")),

    section("maraviroc-tropism", "Verify the CCR5 Door Before Using Maraviroc", "Maraviroc is a host-directed CCR5 antagonist. It is active only when the patient's HIV-1 population depends on CCR5 without detectable CXCR4 use.", ["CCR5", "CXCR4", "Dual or mixed tropism", "Allosteric antagonist", "Tropism assay"], "Make tropism a required diagnostic input rather than a post-failure explanation.", [
      ["Test before selection", "Obtain a coreceptor tropism assay whenever maraviroc is being considered. A CCR5-tropic result establishes a necessary target, not a guarantee that the complete regimen will succeed."],
      ["Understand the allosteric effect", "Maraviroc binds within CCR5 and changes its conformation so gp120 cannot complete productive coreceptor engagement. It does not bind gp120 or block CXCR4."],
      ["Interpret dual or mixed virus", "If the assay detects CXCR4-using or dual or mixed virus, maraviroc is not an active option. A minority population can become clinically visible under CCR5 blockade."],
      ["Reassess persistent viremia", "Failure can reflect nonadherence, inadequate companion activity, interactions, or a change in detectable tropism. Reconstruct the full mechanism rather than assuming a single cause."]
    ], ["Tropism testing comes first.", "CCR5 is a host target.", "CXCR4 use defeats the mechanism.", "A tropism result is not a complete regimen."], check("Which result supports considering maraviroc?", ["CCR5-tropic HIV-1 with no detectable CXCR4-using virus", "Dual or mixed tropism", "CXCR4-only virus", "HIV-2 without a validated tropism assay"], "Maraviroc requires a detectable CCR5-dependent entry pathway.", "maraviroc-tropism")),

    section("maraviroc-dosing-safety", "Dose Maraviroc Inside the Interaction System", "Maraviroc exposure changes with CYP3A inhibition, induction, renal function, and hepatic function. The interaction list is part of the dose.", ["CYP3A", "Renal impairment", "Orthostasis", "Hepatotoxicity", "Hypersensitivity"], "Calculate the interaction environment before selecting a tablet strength or frequency.", [
      ["Use interaction-based adult dosing", "Current NIH tables use 150 mg twice daily with strong CYP3A inhibition, 300 mg twice daily without a strong inhibitor or inducer, and 600 mg twice daily with a strong inducer and no strong inhibitor when otherwise appropriate."],
      ["Join renal and interaction data", "With creatinine clearance below 30 mL/min or hemodialysis, potent inhibitors or inducers can make use inappropriate. Without those modifiers, monitor closely and reduce from 300 mg to 150 mg twice daily if postural hypotension develops."],
      ["Recognize orthostasis", "Dizziness and orthostatic hypotension require positional blood pressure, volume, fall-risk, renal, and antihypertensive assessment."],
      ["Act on hepatic allergy patterns", "Hepatotoxicity may be preceded by rash, fever, eosinophilia, edema, or other systemic allergy features. Stop and urgently evaluate a compatible presentation rather than treating each sign in isolation."]
    ], ["There is no single adult dose.", "Renal and CYP3A data interact.", "Orthostasis can be exposure related.", "Rash plus liver injury is urgent."], check("A patient takes a strong CYP3A inhibitor and otherwise qualifies for maraviroc. What adult dose pattern is generally used?", ["150 mg twice daily", "600 mg once weekly", "800 mg every 2 weeks", "90 mg subcutaneously twice daily"], "Strong CYP3A inhibition lowers the labeled maraviroc dose.", "maraviroc-dosing-safety")),

    section("fostemsavir", "Block gp120 Attachment With Fostemsavir", "Fostemsavir is a prodrug converted to temsavir. Temsavir binds gp120 and prevents HIV-1 from attaching to CD4 at the first receptor step.", ["Fostemsavir", "Temsavir", "gp120", "Extended release", "Strong inducer"], "Protect the extended-release product and the exposure needed for salvage activity.", [
      ["Place the mechanism", "Temsavir binds a conserved region of gp120 and stabilizes a conformation that cannot productively engage CD4. This differs from maraviroc's host CCR5 target and ibalizumab's host CD4 target."],
      ["Use the labeled regimen", "Adults take 600 mg by mouth twice daily with or without food. Swallow the extended-release tablet whole and do not chew, crush, or split it."],
      ["Reject strong induction", "Strong CYP3A inducers can markedly lower temsavir exposure. Contraindicated examples include rifampin, carbamazepine, phenytoin, enzalutamide, mitotane, and St. John's wort."],
      ["Monitor cardiac and hepatic context", "Nausea is common. Consider QTc risk with preexisting heart disease or other QT-prolonging therapy, and monitor transaminase or bilirubin changes, especially with HBV or HCV coinfection."]
    ], ["Fostemsavir is converted to temsavir.", "The target is viral gp120.", "The tablet stays whole.", "Strong CYP3A inducers are contraindicated."], check("Which instruction is correct for fostemsavir?", ["Take 600 mg twice daily and swallow the extended-release tablet whole", "Crush the tablet into food", "Use only when CXCR4 virus is absent", "Administer by IV push every 2 weeks"], "Fostemsavir is a twice-daily extended-release oral product.", "fostemsavir")),

    section("ibalizumab", "Block Post-Attachment Entry With Ibalizumab", "Ibalizumab-uiyk is a humanized monoclonal antibody that binds domain 2 of CD4 and blocks post-attachment entry. Its delivery and missed-dose rules are part of its pharmacology.", ["CD4 domain 2", "Monoclonal antibody", "Loading dose", "IV infusion", "IV push"], "Coordinate the medication, infusion pathway, and optimized background regimen as one treatment system.", [
      ["Understand selective CD4 binding", "Ibalizumab binds away from major MHC class II interaction sites. It interferes with the conformational steps required for entry without acting as a CD4-depleting therapy."],
      ["Load and maintain", "Give a 2,000 mg loading dose, then 800 mg every 2 weeks. Current labeling permits diluted IV infusion or undiluted IV push with dose-specific minimum administration times."],
      ["Recover a missed maintenance dose", "When a maintenance dose is delayed by 3 days or more, give another 2,000 mg loading dose, then resume 800 mg every 2 weeks."],
      ["Observe and differentiate reactions", "Monitor for hypersensitivity, infusion reactions, and anaphylaxis. Diarrhea, dizziness, nausea, and rash are common, while later inflammatory symptoms may represent immune reconstitution rather than an immediate infusion reaction."]
    ], ["The target is CD4 domain 2.", "Loading is 2,000 mg.", "Maintenance is 800 mg every 2 weeks.", "A delay of 3 days or more requires reloading."], check("What should happen when an ibalizumab maintenance dose is delayed by at least 3 days?", ["Give a 2,000 mg loading dose, then resume maintenance", "Permanently stop all ART", "Double the 800 mg dose without reloading", "Switch automatically to maraviroc"], "Current labeling restores exposure with a loading dose after this delay.", "ibalizumab")),

    section("enfuvirtide", "Interrupt gp41 Fusion With Enfuvirtide", "Enfuvirtide is a peptide fusion inhibitor delivered subcutaneously twice daily. Technique, site reactions, storage, and treatment burden determine whether in vitro activity becomes reliable exposure.", ["gp41", "Fusion inhibitor", "Subcutaneous injection", "Reconstitution", "Site rotation"], "Teach and observe the complete injection workflow before relying on the drug.", [
      ["Stop the fusion bundle", "Enfuvirtide binds the gp41 heptad repeat region and prevents the conformational bundle that pulls the viral and cellular membranes together."],
      ["Use the adult regimen", "Adults receive 90 mg subcutaneously twice daily. Rotate the abdomen, anterior thighs, and posterior upper arms while avoiding scarred, inflamed, or repeatedly used sites."],
      ["Control preparation and storage", "Reconstitute carefully without shaking. Refrigerate a prepared dose and use it within 24 hours. Teach inspection, labeling, transport, and sharps disposal."],
      ["Manage expected and serious harm", "Most patients develop injection-site pain, erythema, induration, nodules, cysts, pruritus, or ecchymosis. Evaluate infection separately. Assess respiratory symptoms promptly because bacterial pneumonia was more frequent in trials, and never rechallenge after compatible systemic hypersensitivity."]
    ], ["Enfuvirtide targets gp41.", "Adult dosing is 90 mg subcutaneously twice daily.", "Site rotation is essential.", "Reconstituted drug is refrigerated and used within 24 hours."], check("What is the most important practical limitation of enfuvirtide?", ["Twice-daily reconstituted subcutaneous therapy with frequent injection-site reactions", "Mandatory gastric acidity", "A requirement for CCR5-only virus", "Weekly oral administration"], "Delivery burden and local reactions strongly shape sustained use.", "enfuvirtide")),

    section("delivery-continuity", "Design Delivery That Can Survive Real Life", "These drugs span twice-daily oral therapy, every 2 week IV treatment, and twice-daily self-injection. Susceptibility is irrelevant if the delivery pathway repeatedly fails.", ["Access", "Infusion", "Injection skill", "Storage", "Missed dose"], "Translate route into appointments, training, storage, coverage, and contingency plans.", [
      ["Compare the routes", "Maraviroc and fostemsavir require twice-daily oral adherence. Ibalizumab requires reliable IV access every 2 weeks. Enfuvirtide requires repeated reconstitution and subcutaneous technique."],
      ["Assess the human workflow", "Evaluate transportation, work schedule, dexterity, vision, refrigeration, housing, privacy, insurance, caregiver support, and the burden of visible injection sites."],
      ["Prevent predictable gaps", "Book the next infusion before departure, establish a late-dose pathway, teach missed oral doses, and create travel and storage plans before a disruption occurs."],
      ["Measure delivery, not intention", "Use refill history, infusion attendance, injection-site review, teach-back, and HIV RNA. A stated plan does not prove exposure."]
    ], ["Route is a clinical variable.", "Access is part of activity.", "Missed-dose rules differ.", "Delivery requires evidence."], check("Which factor can make ibalizumab a poor practical fit despite predicted viral activity?", ["An unreliable pathway for IV treatment every 2 weeks", "Normal kidney function", "Ability to swallow tablets", "A CCR5-tropic result"], "The biologic requires dependable repeated IV delivery.", "delivery-continuity")),

    section("safety-monitoring", "Protect the Whole Regimen During Recovery", "Safety surveillance must distinguish drug toxicity, hypersensitivity, infusion reactions, infection, IRIS, HBV reactivation, and failure. One symptom can represent very different mechanisms.", ["IRIS", "HBV", "Pregnancy", "HIV RNA", "Toxicity"], "Use time course, virologic response, immune recovery, organ data, and the complete regimen to classify the event.", [
      ["Recognize immune reconstitution", "A rapid virologic response can unmask or worsen inflammation from an infection or autoimmune condition. Evaluate the underlying process instead of assuming the new ART is failing."],
      ["Preserve HBV suppression", "None of these entry agents treats HBV. Continue tenofovir-based HBV-active ART or another fully suppressive HBV plan when rebuilding HIV therapy."],
      ["Use current pregnancy guidance", "Do not use obsolete pregnancy letters. Maraviroc, fostemsavir, ibalizumab, and enfuvirtide have different evidence and current recommendations, so consult the latest perinatal guidance for the exact agent."],
      ["Assign monitoring ownership", "Name who checks HIV RNA, liver tests, interaction changes, infusion or injection problems, adherence, pregnancy considerations, and urgent symptoms. Complex salvage therapy cannot rely on passive follow-up."]
    ], ["IRIS can follow improvement.", "Entry drugs do not treat HBV.", "Pregnancy guidance is agent specific.", "Monitoring needs an owner."], check("Why must HBV-active therapy be preserved when adding an entry inhibitor?", ["Entry inhibitors do not suppress HBV, and withdrawal can trigger serious reactivation", "CCR5 is the only HBV receptor", "Ibalizumab cures HBV", "Enfuvirtide replaces tenofovir"], "HIV regimen reconstruction must not abandon HBV control.", "safety-monitoring")),

    section("integrated-selection", "Choose the Target, Regimen, and Delivery Together", "A successful entry-inhibitor plan aligns viral biology, cumulative resistance, companion activity, patient physiology, route, interaction environment, and access.", ["Target", "Susceptibility", "Complete ART", "Feasibility", "Follow-up"], "Write one explicit rationale that connects mechanism to an accountable longitudinal plan.", [
      ["Verify the target", "Confirm HIV-1, tropism when maraviroc is considered, cumulative resistance, prior entry-agent exposure, and evidence supporting activity."],
      ["Construct complete ART", "Prefer at least two and when possible three fully active agents. Preserve HBV treatment and avoid adding a single active drug to ongoing replication."],
      ["Fit safety and delivery", "Integrate renal and hepatic function, QT or orthostatic risk, pregnancy, interactions, infusion access, injection skill, storage, and preference."],
      ["Close the feedback loop", "Measure HIV RNA early, monitor agent-specific toxicity, verify administration, and have a defined response for delay, reaction, access loss, or incomplete suppression."]
    ], ["Mechanism is necessary, not sufficient.", "The background regimen protects the novel drug.", "Delivery determines exposure.", "Follow-up proves success."], check("Which plan best uses an entry inhibitor?", ["Verify the target, construct an active background regimen, fit delivery and safety, then monitor HIV RNA early", "Select the newest mechanism and ignore prior resistance", "Add one drug to a failing regimen and wait six months", "Choose by route alone"], "Selection succeeds only when viral, regimen, person, and delivery evidence align.", "integrated-selection"))
  ],
  references: [
    { label: "NIH Antiretroviral Drug Characteristics Tables", href: "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/drug-characteristics-tables" },
    { label: "NIH Virologic Failure and Antiretroviral Options", href: "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/virologic-failure" },
    { label: "NIH Drug Resistance Testing", href: "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/drug-resistance-testing" },
    { label: "NIH Viral Load and CD4 Monitoring", href: "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/plasma-hiv-1-rna-cd4-monitoring" },
    { label: "NIH Renal and Hepatic Dosing Table", href: "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/drug-characteristics-tables-renal-hepatic-insufficiency-full" },
    { label: "NIH Perinatal Antiretroviral Safety Table", href: "https://clinicalinfo.hiv.gov/en/guidelines/perinatal/safety-toxicity-arv-agents-drug-use-pregnant-full" },
    { label: "FDA Rukobia Prescribing Information", href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/212950s004lbl.pdf" },
    { label: "FDA Trogarzo Prescribing Information", href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/761065s020lbl.pdf" }
  ],
  disclaimer: "This module supports advanced pharmacotherapy education. It does not replace current prescribing information, resistance or tropism interpretation, HIV specialist input, or patient-specific clinical care.",
  questionBank: hivEntryAttachmentInhibitorQuestionBank,
};
