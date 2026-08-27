import { toxoplasmaEncephalitisQuestionBank } from "@/data/questionBanks/toxoplasmaEncephalitis";

const check = (question, choices, rationale, slug) => ({ question, choices, answer: 0, rationale, reviewHref: `#${slug}` });
const rows = (...items) => items.map(([heading, body]) => ({ heading, body }));
const section = (slug, title, summary, concepts, application, lesson, keyPoints, quiz) => ({ slug, title, visual: `toxoplasma-encephalitis-${slug}`, summary, concepts, application, lesson: rows(...lesson), keyPoints, check: quiz });

export const toxoplasmaEncephalitisModule = {
  slug: "toxoplasma-gondii-encephalitis",
  number: "196",
  title: "Toxoplasma gondii Encephalitis",
  source: "RxPrep 2023 opportunistic-infection material, reconciled with the NIH Adult and Adolescent OI guideline updated September 9, 2025 and reviewed June 23, 2026",
  description: "Connect latent infection and cellular immune failure to focal CNS disease, then integrate imaging, empiric diagnosis, folate-pathway pharmacology, ART, toxicity, and relapse prevention.",
  topics: ["HIV", "Toxoplasma", "Encephalitis", "Neuroimaging", "Pyrimethamine", "TMP-SMX", "Leucovorin", "ART", "Maintenance"],
  outcomes: [
    "Explain how latent Toxoplasma cysts reactivate during advanced HIV immunosuppression.",
    "Recognize focal and nonfocal presentations and interpret the major neuroimaging patterns.",
    "Use IgG, CSF PCR, empiric response, and tissue diagnosis according to their limits.",
    "Apply current primary prophylaxis criteria and select a regimen that also protects against PCP.",
    "Calculate weight-based pyrimethamine, sulfadiazine, and TMP-SMX acute regimens.",
    "Use leucovorin rescue and monitor marrow, renal, hepatic, dermatologic, and metabolic toxicity.",
    "Select alternatives without losing Toxoplasma activity, PCP coverage, or drug absorption.",
    "Identify objective response and escalate nonresponse to diagnostic tissue when appropriate.",
    "Coordinate ART, edema treatment, seizure care, IRIS assessment, and interaction management.",
    "Continue maintenance until durable immune recovery and restart it at the correct threshold.",
  ],
  submodules: [
    section("biology-risk", "Connect Latent Infection to Cellular Immune Failure", "TE in advanced HIV is usually reactivation of a latent tissue cyst. A new exposure can cause disease, but host control determines whether infection reaches the brain.", ["Tissue cyst", "CD4 below 100", "IgG", "Environmental prevention"], "Use serostatus and immune trajectory to identify reactivation risk while teaching practical exposure reduction.", [
      ["Place the parasite", "Toxoplasma gondii is an intracellular protozoan. Primary infection is often silent and leaves latent cysts in neural and muscle tissue. Severe loss of T-cell control permits replication and necrotizing focal encephalitis."],
      ["Define the risk", "Risk increases below CD4 100 cells/mm3 and is greatest below 50. Most cases in people with HIV reflect reactivation, so IgG establishes the latent-infection context."],
      ["Reduce new acquisition", "Avoid raw or undercooked meat and shellfish, wash produce and hands, use gloves with soil, and change cat litter daily with hand protection. Cats can remain in the home and do not need routine testing."],
      ["Restore immunity", "Effective ART is the durable prevention strategy. Prophylaxis protects the high-risk interval while viral suppression rebuilds cellular control."]
    ], ["TE usually reactivates latent cysts.", "IgG and CD4 define prophylaxis risk.", "Practical prevention does not require losing a pet.", "ART provides durable host control."], check("What most commonly produces TE in advanced HIV?", ["Reactivation of latent tissue cysts", "Ordinary person-to-person respiratory spread", "A vaccine reaction", "A bacterial bloodstream infection"], "Loss of cellular immunity allows latent Toxoplasma cysts to reactivate in the CNS.", "biology-risk")),

    section("presentation-imaging", "Recognize Focal Brain Disease", "TE often presents subacutely with headache and focal neurologic dysfunction. Fever can be absent, and imaging is necessary to define lesions, edema, and mass effect.", ["Headache", "Focal deficit", "Seizure", "Ring enhancement", "Basal ganglia"], "Stabilize neurologic threats while building an imaging-based differential rather than treating one pattern as pathognomonic.", [
      ["Read the examination", "Headache, hemiparesis, aphasia, visual change, altered cognition, fever, and seizure can appear over days to weeks. Diffuse encephalitis without a focal lesion is less common but can progress rapidly."],
      ["Map the lesions", "Contrast CT or MRI typically shows multiple ring-enhancing lesions with surrounding edema, often involving the basal ganglia. A single lesion or atypical distribution remains possible."],
      ["Measure mass effect", "Document edema, ventricular compression, midline shift, herniation risk, and lumbar-puncture safety before invasive testing."],
      ["Keep alternatives visible", "Primary CNS lymphoma, tuberculosis, fungal infection, pyogenic abscess, metastasis, Chagas disease, and PML can resemble TE. PML more often affects white matter without enhancement or mass effect outside IRIS."]
    ], ["Fever is not required.", "MRI defines lesion and edema burden.", "Ring enhancement is not unique to TE.", "Mass effect changes immediate safety."], check("Which imaging pattern most strongly supports TE in advanced HIV?", ["Multiple contrast-enhancing lesions with edema and basal-ganglia involvement", "One nonenhancing white-matter lesion without mass effect", "Normal MRI with isolated peripheral neuropathy", "Diffuse subarachnoid blood"], "Multiple enhancing lesions with edema are the classic pattern, though not diagnostic alone.", "presentation-imaging")),

    section("diagnostic-strategy", "Build a Response-Aware Diagnosis", "Definitive diagnosis needs organism detection, but a measured response to empiric therapy often establishes the working diagnosis when the syndrome, imaging, and IgG agree.", ["IgG", "CSF PCR", "Empiric response", "Brain biopsy", "CNS lymphoma"], "Define what evidence will confirm, weaken, or replace the presumptive diagnosis before therapy begins.", [
      ["Interpret serology", "Most people with TE are IgG positive. A negative IgG makes TE unlikely but does not absolutely exclude it. IgM is usually absent in reactivation, and quantitative titers do not measure CNS disease."],
      ["Use CSF selectively", "When lumbar puncture is safe, CSF PCR is highly specific but only about 50 percent sensitive and becomes less sensitive after therapy. A negative result cannot rule out TE."],
      ["Measure the empiric trial", "A compatible syndrome, imaging pattern, IgG, and objective improvement on active therapy support presumptive TE. Record a baseline neurologic examination and reassess within 10 to 14 days."],
      ["Escalate nonresponse", "Strongly consider brain biopsy with atypical evidence, deterioration during the first week, or no improvement by 10 to 14 days. EBV DNA in CSF raises concern for lymphoma but does not diagnose it alone."],
      ["Respect steroid confounding", "CNS lymphoma can improve temporarily with corticosteroids. Restrict steroids to a genuine mass-effect indication and interpret subsequent response cautiously."]
    ], ["IgG supports prior infection.", "Negative CSF PCR does not exclude TE.", "Response must be objective.", "Nonresponse activates tissue diagnosis."], check("A patient has typical lesions and positive IgG but no improvement after 14 days of adequate therapy. What is the best next step?", ["Strongly consider brain biopsy and reassess the differential", "Continue the same empiric plan indefinitely", "Diagnose TE solely from IgG", "Start seizure prophylaxis as the only change"], "Failure to improve by 10 to 14 days requires diagnostic escalation.", "diagnostic-strategy")),

    section("primary-prophylaxis", "Protect the High-Risk Interval", "Primary TE prophylaxis requires both latent infection and severe immunosuppression. The preferred regimen also covers PCP.", ["IgG positive", "CD4 below 100", "TMP-SMX", "G6PD", "Immune recovery"], "Select one regimen that protects against every relevant opportunistic-infection risk without creating a coverage gap.", [
      ["Apply the gate", "Start prophylaxis when Toxoplasma IgG is positive and CD4 is below 100 cells/mm3. IgG-negative people need exposure counseling and PCP prevention as indicated, not automatic TE prophylaxis."],
      ["Prefer daily TMP-SMX", "One double-strength tablet daily is preferred and also prevents PCP. DS three times weekly or SS daily are alternatives when full daily dosing is not tolerated."],
      ["Build a complete alternative", "Dapsone plus pyrimethamine plus leucovorin or atovaquone with or without pyrimethamine and leucovorin can protect against TE and PCP. Test G6PD before dapsone and give atovaquone with food."],
      ["Reject false coverage", "Aerosolized pentamidine and dapsone alone do not prevent TE. If used for PCP, another agent must address Toxoplasma risk."],
      ["Stop and restart correctly", "Stop after CD4 exceeds 200 for more than 3 months with sustained suppression. A 100 to 200 option can be considered after 3 to 6 months of suppression. Restart below 100, or at 100 to 200 with detectable HIV RNA."]
    ], ["IgG positivity is required.", "Daily TMP-SMX protects against TE and PCP.", "Dapsone needs G6PD testing.", "Stopping uses immune and virologic evidence."], check("Which patient needs primary TE prophylaxis?", ["A Toxoplasma IgG-positive patient with CD4 72 cells/mm3", "An IgG-negative patient with CD4 450", "An IgG-positive patient with CD4 520", "A suppressed patient with CD4 310"], "Latent infection plus CD4 below 100 is the standard indication.", "primary-prophylaxis")),

    section("acute-treatment", "Deliver Full CNS Induction", "Preferred acute therapy pairs antiparasitic folate-pathway inhibition with protective rescue, or uses full-dose TMP-SMX. Treatment continues long enough to control brain tissue disease.", ["Pyrimethamine", "Sulfadiazine", "Leucovorin", "TMP-SMX", "Six weeks"], "Calculate the exact regimen from weight and route, secure access immediately, and never omit rescue.", [
      ["Load pyrimethamine", "Give 200 mg once. At 60 kg or less, continue 50 mg daily with sulfadiazine 1,000 mg every 6 hours. Above 60 kg, use pyrimethamine 75 mg daily with sulfadiazine 1,500 mg every 6 hours."],
      ["Rescue folate", "Give leucovorin 10 to 25 mg daily with pyrimethamine and increase it when marrow toxicity requires. Leucovorin is part of the regimen, not an optional supplement."],
      ["Use TMP-SMX as a preferred option", "Dose by the TMP component at 5 mg/kg with SMX 25 mg/kg IV or orally twice daily. Use it when pyrimethamine is delayed, unaffordable, inaccessible, or a poorer fit."],
      ["Treat the tissue course", "Continue acute therapy for at least 6 weeks. Extend treatment when disease is extensive or clinical or radiographic response remains incomplete."],
      ["Transition without a gap", "Every patient moves directly from induction to chronic maintenance until immune reconstitution is durable."]
    ], ["Pyrimethamine uses a 200 mg load.", "Weight determines maintenance and sulfadiazine doses.", "Leucovorin is mandatory rescue.", "Acute treatment lasts at least 6 weeks."], check("What is the correct pyrimethamine regimen for a 68 kg adult?", ["200 mg once, then 75 mg daily with sulfadiazine and leucovorin", "25 mg weekly alone", "75 mg once with no continuation", "200 mg daily for 6 weeks"], "Adults above 60 kg receive a 200 mg load followed by 75 mg daily.", "acute-treatment")),

    section("alternatives-safety", "Preserve Coverage When the First Regimen Fails", "An alternative must still treat TE, protect against PCP when needed, reach adequate exposure, and remain safe for marrow, kidney, liver, skin, and blood.", ["Clindamycin", "Atovaquone", "G6PD", "Sulfa allergy", "Marrow toxicity"], "Name the intolerance or barrier precisely, then replace only what the evidence requires.", [
      ["Use the preferred sulfa alternative", "Pyrimethamine plus leucovorin plus clindamycin 600 mg every 6 hours treats acute TE when sulfadiazine cannot be used. It does not prevent PCP, so add separate PCP prophylaxis."],
      ["Make atovaquone absorb", "Atovaquone 1,500 mg twice daily can be used alone or with pyrimethamine and leucovorin or sulfadiazine. Give every dose with a meal or nutritional supplement because absorption varies widely."],
      ["Evaluate sulfa allergy", "Rapid desensitization can be considered for selected patients. Use atovaquone during the process until therapeutic TMP-SMX dosing is reached."],
      ["Protect marrow", "Pyrimethamine can cause anemia, neutropenia, and thrombocytopenia. Give leucovorin and monitor CBC closely, commonly at least twice weekly during induction."],
      ["Test G6PD before dapsone", "Use another agent in G6PD deficiency. Monitor for hemolysis and methemoglobinemia, including symptoms that a routine pulse oximeter may not explain."]
    ], ["Clindamycin regimens need separate PCP prevention.", "Atovaquone requires food.", "Leucovorin protects marrow.", "Dapsone requires G6PD assessment."], check("What must be added to pyrimethamine, leucovorin, and clindamycin maintenance?", ["A separate PCP prophylaxis agent", "A second corticosteroid", "Aerosolized saline", "No additional prevention"], "Clindamycin-based TE therapy does not protect against PCP.", "alternatives-safety")),

    section("response-failure", "Measure Response Before Declaring Failure", "Most patients improve within 14 days. Failure is a diagnostic event, not permission to continue unmeasured empiricism.", ["Neurologic examination", "Ten to 14 days", "Repeat imaging", "Biopsy", "Adjuncts"], "Define response, toxicity, and escalation thresholds at the first dose.", [
      ["Expect a trajectory", "About 90 percent of patients improve clinically within 14 days. Follow focal deficits, cognition, fever, seizure, function, lesion size, enhancement, and edema."],
      ["Trigger escalation", "Clinical or radiologic deterioration in the first week despite adequate exposure, or no clinical improvement by 10 to 14 days, should prompt diagnostic reassessment and strong consideration of brain biopsy."],
      ["Use steroids narrowly", "Give dexamethasone only for clinically important edema or mass effect and stop as soon as feasible. Steroids can worsen immunosuppression and temporarily improve CNS lymphoma."],
      ["Treat seizures, not theoretical seizures", "Give antiseizure medication after a TE-associated seizure and continue through acute therapy. Do not use routine prophylaxis without seizure."],
      ["Avoid interaction injury", "Phenytoin, phenobarbital, carbamazepine, dexamethasone, and selected ARVs interact. Prefer a compatible seizure strategy and verify exposure."]
    ], ["Most improvement occurs within 14 days.", "Nonresponse changes the diagnosis plan.", "Steroids require mass effect or significant IRIS.", "No routine antiseizure prophylaxis."], check("When should brain biopsy be strongly considered?", ["No clinical improvement after 10 to 14 days of adequate therapy", "Immediate improvement by day 5", "Positive IgG alone", "Every patient before imaging"], "Measured nonresponse is the key trigger for tissue diagnosis.", "response-failure")),

    section("art-iris", "Restore Immunity Without Losing CNS Discipline", "ART controls the cause of susceptibility, but timing, interaction management, and inflammatory worsening require a coordinated plan.", ["ART timing", "Two to three weeks", "IRIS", "Interactions", "Viral suppression"], "Begin effective ART after initial CNS stabilization and distinguish inflammatory recovery from failed antiparasitic treatment.", [
      ["Use the practical timing", "No randomized trial defines an exact date, but ART is generally started within 2 to 3 weeks after TE diagnosis once acute therapy is established."],
      ["Map interactions", "Review anticonvulsants, dexamethasone, marrow suppressants, renal drugs, and the entire ART regimen. Enzyme inducers can lower ARV exposure and threaten suppression."],
      ["Recognize uncommon IRIS", "TE IRIS can cause enlarging enhancing lesions, edema, or neurologic worsening after ART. It is uncommon, so verify drug exposure and reconsider the diagnosis before labeling it."],
      ["Maintain core therapy", "Continue effective ART and anti-Toxoplasma treatment through IRIS when feasible. Use corticosteroids only for clinically significant inflammation and taper promptly."]
    ], ["ART usually starts within 2 to 3 weeks.", "Interaction review includes seizure drugs.", "TE IRIS is uncommon.", "Exclude failure before treating inflammation."], check("When is ART generally initiated after TE diagnosis?", ["Within about 2 to 3 weeks after acute therapy is established", "Only after every lesion disappears", "Never during maintenance", "Before obtaining any imaging"], "Current expert practice begins ART within 2 to 3 weeks after diagnosis.", "art-iris")),

    section("maintenance", "Suppress Recurrence Until Immunity Returns", "Acute therapy controls active lesions but does not remove latent cysts. Maintenance bridges the patient to durable immune reconstitution.", ["Secondary prophylaxis", "TMP-SMX", "CD4 above 200", "Six months", "Restart below 200"], "Move from induction to suppression without interruption and apply the higher secondary-prophylaxis threshold.", [
      ["Begin immediately", "Start chronic maintenance after acute treatment. Preferred options are pyrimethamine 25 to 50 mg daily plus sulfadiazine 2,000 to 4,000 mg daily and leucovorin 10 to 25 mg daily, or TMP-SMX DS twice daily."],
      ["Preserve PCP coverage", "Pyrimethamine, sulfadiazine, and leucovorin and TMP-SMX both protect against PCP. A clindamycin maintenance regimen requires a separate PCP agent."],
      ["Stop only after durable recovery", "Complete induction, remain asymptomatic, and sustain CD4 above 200 cells/mm3 for more than 6 months in response to ART before stopping."],
      ["Restart at the secondary threshold", "Restart maintenance if CD4 falls below 200 regardless of HIV RNA. This is stricter than the below-100 threshold for primary prophylaxis because prior TE predicts recurrence."],
      ["Use imaging as context", "Some specialists obtain MRI before stopping. Residual enhancement can persist despite successful treatment, so imaging supplements rather than replaces clinical and immune evidence."]
    ], ["Everyone enters maintenance after induction.", "Preferred regimens can cover PCP.", "Stopping requires CD4 above 200 for more than 6 months.", "Restart below 200 regardless of HIV RNA."], check("When should chronic TE maintenance be restarted?", ["When CD4 falls below 200 cells/mm3 regardless of HIV RNA", "Only when CD4 falls below 50", "Only after a new seizure", "Never after it is stopped"], "Prior TE requires maintenance restart below CD4 200.", "maintenance")),

    section("integrated-case", "Build Closed-Loop Neuroinfectious Care", "TE succeeds when diagnostic evidence, medication access, response checkpoints, ART, toxicity, and relapse prevention remain connected across care settings.", ["Result ownership", "Access", "Neurologic monitoring", "ART", "Maintenance"], "Assign each clinical transition to a person, date, and observable outcome.", [
      ["Own the first 24 hours", "Stabilize airway, seizure, and mass effect, obtain contrast imaging, collect safe diagnostic studies, start full-dose therapy, and document the baseline neurologic examination."],
      ["Own access and exposure", "Secure pyrimethamine or use TMP-SMX without delay, calculate weight-based doses, give leucovorin, pair atovaquone with food, and reconcile every interacting drug."],
      ["Own the response date", "Schedule neurologic reassessment and repeat imaging, with a defined 10-to-14-day threshold for biopsy or diagnostic escalation."],
      ["Own immunity", "Start ART in the planned window, confirm viral suppression and CD4 recovery, and distinguish IRIS from failure using evidence."],
      ["Own relapse prevention", "Deliver maintenance before discharge, monitor toxicity and adherence, and document stopping and restart criteria."]
    ], ["Baseline evidence makes response measurable.", "Do not delay active therapy for access barriers.", "Nonresponse has a defined escalation pathway.", "Maintenance and ART prevent recurrence."], check("Which plan best represents closed-loop TE care?", ["Named owners and dates for imaging, response, CBC, renal tests, ART, refills, maintenance, and biopsy escalation", "A discharge prescription without monitoring", "Steroids for every lesion", "Stopping all therapy after symptom improvement"], "Every result and transition needs ownership to prevent missed failure, toxicity, and relapse.", "integrated-case")),
  ],
  references: [
    { label: "NIH Toxoplasma gondii Encephalitis Adult and Adolescent OI Guideline", href: "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/toxoplasmosis" },
    { label: "NIH OI Primary Prophylaxis Table", href: "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/prophylaxis-prevent-first-episode" },
    { label: "NIH OI Treatment Table", href: "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/treatment-hiv-associated" },
  ],
  disclaimer: "This module supports advanced education about toxoplasma encephalitis in people with HIV. It does not replace urgent neurologic evaluation, current guidelines, specialist consultation, local protocols, or patient-specific clinical care.",
  questionBank: toxoplasmaEncephalitisQuestionBank,
};
