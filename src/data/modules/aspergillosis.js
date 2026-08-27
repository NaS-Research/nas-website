import { aspergillosisQuestionBank } from "@/data/questionBanks/aspergillosis";

const check = (question, choices, rationale, slug) => ({ question, choices, answer: 0, rationale, reviewHref: `#${slug}` });
const rows = (...items) => items.map(([heading, body]) => ({ heading, body }));
const section = (slug, title, summary, concepts, application, content, keyPoints, quiz) => ({
  slug,
  title,
  visual: `aspergillosis-${slug}`,
  summary,
  concepts,
  application,
  lesson: rows(...content),
  keyPoints,
  check: quiz,
});

export const aspergillosisModule = {
  slug: "aspergillosis",
  number: "202",
  title: "Aspergillosis",
  source: "RxPrep 2023 mold and antifungal material, reconciled with CDC clinical information, the 2016 IDSA treatment guideline, the 2026 IDSA solid-organ-transplant prevention update, 2024 ISHAM ABPA guidance, and current FDA labeling",
  description: "Separate allergic, colonizing, chronic, and invasive Aspergillus syndromes, then connect host risk and site evidence to mold-active therapy, measured exposure, resistance, and source control.",
  topics: ["Invasive aspergillosis", "Galactomannan", "Voriconazole", "Isavuconazole", "Azole resistance", "Chronic pulmonary aspergillosis", "ABPA", "Transplant prevention"],
  outcomes: [
    "Explain airborne exposure, hyphal invasion, and host defense.",
    "Separate allergic, colonizing, chronic, fungal-ball, and invasive syndromes.",
    "Recognize immune and structural risk factors.",
    "Build a CT, BAL, tissue, culture, and biomarker diagnostic strategy.",
    "Select primary and alternative therapy for invasive disease.",
    "Dose and monitor voriconazole and isavuconazonium safely.",
    "Use TDM and interaction review to protect antifungal exposure.",
    "Respond to breakthrough disease and suspected resistance.",
    "Coordinate surgery and site-specific management.",
    "Manage chronic pulmonary and allergic disease without confusing them with invasion.",
    "Apply current transplant-prevention evidence.",
    "Define response, duration, immune recovery, and relapse surveillance.",
  ],
  submodules: [
    section("biology-syndromes", "Trace the Mold From Airway to Tissue", "Aspergillus conidia are inhaled every day. Disease emerges from the interaction among fungal form, airway structure, immune defense, and the affected compartment.", ["Conidia", "Septate hyphae", "Acute-angle branching", "Angioinvasion", "Host defense"], "Use morphology as a high-value clue while preserving culture and molecular options for organism identification.", [
      ["Follow the fungal form", "Airborne conidia reach the airway and may be cleared, colonize abnormal spaces, trigger allergic inflammation, or germinate into hyphae. In tissue, septate hyphae with acute-angle branching support Aspergillus but do not always establish species."],
      ["Understand invasion", "Neutrophils and macrophages are central defenses. When these systems fail, hyphae can invade vessels, causing thrombosis, hemorrhage, infarction, and hematogenous dissemination."],
      ["Map the disease spectrum", "The same genus can be associated with ABPA, airway colonization, a fungal ball in a preexisting cavity, chronic cavitary disease, invasive pulmonary disease, or extrapulmonary invasion."],
      ["Preserve diagnostic options", "Coordinate tissue so pathology can demonstrate invasion while a fresh portion remains available for culture and molecular testing."],
    ], ["Exposure is common.", "Host response determines syndrome.", "Hyphae can invade vessels.", "Morphology and organism identification answer different questions."], check("Which tissue finding most strongly supports Aspergillus?", ["Septate hyphae with acute-angle branching", "Broad-based budding yeast", "Spherules with endospores", "Acid-fast bacilli"], "Septate acute-angle branching hyphae are a classic tissue clue.", "biology-syndromes")),

    section("host-prevention", "Define Risk Before the First Symptom", "Invasive disease risk rises with prolonged neutropenia, hematologic malignancy, transplantation, corticosteroids, and other major immune impairment.", ["Neutropenia", "Hematologic malignancy", "HSCT", "Solid-organ transplant", "Corticosteroids"], "Combine immune trajectory, environmental exposure, local epidemiology, and prophylaxis rather than using one diagnosis label as a shortcut.", [
      ["Quantify immune risk", "Record neutrophil depth and expected duration, transplant type and timing, graft-versus-host disease, rejection treatment, corticosteroid dose, targeted therapies, and prior mold infection."],
      ["Reduce environmental exposure", "Protected environments, construction separation, and avoidance of gardening, mulch, compost, and renovation dust are reasonable for highly immunocompromised patients."],
      ["Use prophylaxis selectively", "Mold-active prophylaxis depends on population, institutional incidence, prior infection, interactions, toxicity, absorption, and stewardship. A universal approach is not evidence-based for every host."],
      ["Plan secondary prevention", "A patient successfully treated for invasive disease who will undergo further immunosuppression may require secondary prophylaxis to prevent recurrence."],
    ], ["Risk changes over time.", "Construction dust matters.", "Prophylaxis is population-specific.", "Future immunosuppression changes recurrence risk."], check("Who has the highest invasive aspergillosis risk?", ["A patient with prolonged profound neutropenia", "A healthy adult after routine outdoor exposure", "A patient with seasonal rhinitis", "A person with an uncomplicated ankle sprain"], "Prolonged profound neutropenia is a major invasive-disease risk.", "host-prevention")),

    section("diagnostic-evidence", "Build Evidence Across Host, Image, and Specimen", "No single test establishes invasive aspergillosis in every host. High-quality diagnosis combines CT, bronchoscopy or tissue, microscopy, culture, biomarkers, and prior antifungal exposure.", ["Chest CT", "BAL", "Histopathology", "Galactomannan", "Beta-D-glucan"], "Collect the most informative evidence quickly while beginning treatment when invasive disease is strongly suspected.", [
      ["Start with CT", "Obtain chest CT when invasive pulmonary disease is suspected even if chest radiography is normal. Nodules, surrounding ground-glass change, wedge-shaped lesions, consolidation, cavitation, and airway-centered patterns guide the next procedure."],
      ["Sample the compartment", "Attempt bronchoscopy with BAL when safe. Send BAL for fungal culture, cytology, galactomannan, and locally validated molecular testing. Peripheral nodules may require image-guided tissue rather than BAL alone."],
      ["Interpret biomarkers by population", "Serum and BAL galactomannan are most useful in selected high-risk groups. Mold-active prophylaxis, host type, specimen, timing, and false positives change performance."],
      ["Keep beta-glucan nonspecific", "Beta-D-glucan supports possible invasive fungal disease but does not identify Aspergillus and can be affected by other infections and clinical exposures."],
    ], ["CT can reveal occult disease.", "BAL and tissue serve different lesions.", "Galactomannan performance is context-dependent.", "Beta-D-glucan is not species-specific."], check("What is the best next diagnostic framework for suspected invasive pulmonary aspergillosis?", ["Chest CT plus safe site-directed BAL or tissue with culture and nonculture testing", "One normal chest radiograph", "Urine culture only", "No testing until antifungal therapy ends"], "Cross-domain evidence is stronger than any isolated result.", "diagnostic-evidence")),

    section("syndrome-separation", "Name the Syndrome Before Treating", "A respiratory Aspergillus result can represent contamination, colonization, allergic disease, a fungal ball, chronic disease, or invasion.", ["Colonization", "ABPA", "Aspergilloma", "CCPA", "Invasive disease"], "Require the host, tempo, imaging, pathology, biomarkers, and immune pattern expected for the proposed syndrome.", [
      ["Do not equate culture with invasion", "A positive respiratory culture can reflect colonization. Invasion requires compatible clinical and radiographic disease with tissue or mycologic evidence interpreted in the host."],
      ["Recognize allergic disease", "ABPA is an immune-mediated airway disorder commonly associated with asthma, cystic fibrosis, or bronchiectasis. Sensitization, total IgE, eosinophilia, mucus plugging, and imaging define the model."],
      ["Recognize cavity syndromes", "An aspergilloma is a mobile fungal ball within a preexisting cavity. Chronic cavitary pulmonary aspergillosis requires at least three months of symptoms or progression, characteristic imaging, and Aspergillus IgG or other microbiologic evidence."],
      ["Recognize invasion", "Fever, pleuritic pain, hemoptysis, hypoxemia, nodules or infarcts, and progressive disease in a high-risk host demand urgent invasive-disease evaluation."],
    ], ["Culture alone does not define invasion.", "ABPA is immune-mediated.", "A fungal ball occupies a cavity.", "Tempo and host separate chronic from invasive disease."], check("Which finding most strongly supports invasive rather than colonizing disease?", ["Compatible CT lesions plus tissue invasion in a profoundly neutropenic patient", "One sputum culture in an asymptomatic patient", "Stable asthma alone", "A remote environmental exposure"], "Tissue invasion in a compatible high-risk syndrome provides direct evidence.", "syndrome-separation")),

    section("primary-treatment", "Start Mold-Active Therapy Early", "Primary invasive pulmonary aspergillosis therapy is voriconazole for most patients. Isavuconazole and liposomal amphotericin B are important alternatives.", ["Voriconazole", "Isavuconazole", "Liposomal amphotericin B", "Early therapy", "6 to 12 weeks"], "Begin treatment during diagnostic evaluation when suspicion is strong, then refine therapy as organism, site, exposure, and response become clearer.", [
      ["Use primary voriconazole", "For a seriously ill adult, load voriconazole 6 mg/kg IV every 12 hours for two doses, then 4 mg/kg IV every 12 hours. Transition to an appropriate oral regimen when stable and absorbing reliably."],
      ["Use a justified alternative", "Isavuconazole is an FDA-approved alternative primary therapy. Liposomal amphotericin B is useful when azoles are unsafe, unreliable, resisted, or when Mucorales remains a serious competing diagnosis."],
      ["Avoid fluconazole", "Fluconazole lacks reliable Aspergillus activity. Echinocandins are not routine stand-alone primary therapy."],
      ["Set the duration dynamically", "Treat for at least 6 to 12 weeks, then extend according to immune recovery, site, imaging, organism evidence, tolerability, and continued immunosuppression."],
    ], ["Voriconazole is primary therapy.", "Isavuconazole is an alternative.", "Fluconazole is not mold-active for Aspergillus.", "Duration follows host and response."], check("Which agent is the IDSA-recommended primary treatment for most invasive pulmonary aspergillosis?", ["Voriconazole", "Fluconazole", "Nystatin", "Terbinafine cream"], "Voriconazole remains the primary treatment in the 2016 disease-management guideline.", "primary-treatment")),

    section("voriconazole-system", "Engineer Voriconazole Exposure", "Voriconazole succeeds only when loading, route, nonlinear exposure, genetics, interactions, TDM, and toxicity are managed as one system.", ["Loading", "CYP2C19", "Trough", "SBECD", "Phototoxicity"], "Record the exact dose and route, obtain a timed trough, and repeat after every meaningful exposure change.", [
      ["Dose the phase", "Adult invasive-disease loading is 6 mg/kg IV every 12 hours for two doses, followed by 4 mg/kg IV every 12 hours. Current labeling lists 200 mg orally every 12 hours for most adults, with weight and response adjustments."],
      ["Measure exposure", "Variable absorption and nonlinear metabolism make a steady-state trough useful. RxPrep teaches a practical trough range of 1 to 5 mcg/mL, but the result must be interpreted with assay, timing, response, and toxicity."],
      ["Respect route and renal function", "The intravenous vehicle SBECD can accumulate when creatinine clearance is below 50 mL/min. Oral voriconazole does not contain SBECD, so route selection requires a benefit-risk assessment rather than rejection of the drug class."],
      ["Monitor the whole toxicity profile", "Track liver tests, visual and neurologic effects, photosensitivity, skin cancer risk with prolonged exposure, QT and electrolyte risk, periostitis, and CYP-mediated interactions."],
    ], ["Loading is essential.", "TDM interprets exposure.", "SBECD is an IV-route issue.", "Toxicity is multisystem."], check("What should accompany prolonged voriconazole therapy?", ["Trough, liver, interaction, visual, neurologic, skin, ECG, and electrolyte surveillance", "No monitoring after discharge", "Renal monitoring only", "Automatic dose escalation every week"], "Voriconazole exposure and toxicity are variable and multisystem.", "voriconazole-system")),

    section("alternatives-salvage", "Choose Alternatives by Failure Mechanism", "A change in therapy should answer why the original plan failed: wrong mold, resistance, inadequate exposure, intolerance, progression, or an uncontrolled site.", ["Isavuconazole", "Liposomal amphotericin B", "Salvage", "Combination", "Susceptibility"], "Rebuild the diagnosis and exposure model before labeling disease refractory.", [
      ["Use isavuconazonium correctly", "Load 372 mg IV or orally every 8 hours for six doses, then use 372 mg once daily. It shortens rather than prolongs QT and is contraindicated in familial short QT syndrome."],
      ["Use liposomal amphotericin deliberately", "Liposomal amphotericin B is a nonazole alternative that preserves Mucorales coverage. Monitor kidney function, potassium, magnesium, CBC, infusion reactions, and nephrotoxic combinations."],
      ["Limit echinocandin claims", "An echinocandin can be used in selected salvage settings. Voriconazole plus an echinocandin may be considered for selected documented invasive pulmonary disease, but it is not a universal primary regimen."],
      ["Test suspected resistance", "Obtain susceptibility testing for nonresponse, breakthrough during azole exposure, or epidemiologic concern. Consider species and local azole-resistant A. fumigatus patterns."],
    ], ["Failure has a mechanism.", "Isavuconazonium requires loading.", "Liposomal amphotericin preserves broader mold coverage.", "Combination therapy is selective."], check("Which feature distinguishes isavuconazole from many other triazoles?", ["It can shorten the QT interval", "It has no CYP interactions", "It requires no loading", "It is a topical-only drug"], "Isavuconazole can shorten QT and is contraindicated in familial short QT syndrome.", "alternatives-salvage")),

    section("site-source-control", "Treat the Compartment and the Anatomy", "Pulmonary treatment does not automatically resolve CNS, sinus, cardiac, bone, skin, or ocular disease. Some lesions require surgery or another procedure.", ["CNS", "Sinus", "Endocardial", "Bone", "Source control"], "Search for dissemination from symptoms and examination, then align drug penetration and procedural planning with the involved site.", [
      ["Protect the CNS", "Neurologic symptoms require urgent imaging and site-directed evidence. Voriconazole is commonly favored because of CNS activity, while surgery may be needed for selected accessible lesions or mass effect."],
      ["Control invasive sinus disease", "Combine systemic mold-active therapy with surgical debridement when feasible, especially when necrotic tissue or extension threatens the orbit or brain."],
      ["Address structural foci", "Endocarditis, infected devices, bone disease, skin lesions, and ocular disease need specialist evaluation, site-specific imaging, tissue, and source-control decisions."],
      ["Modify the host", "Reduce immunosuppression when feasible, support neutrophil recovery, and correct metabolic or structural factors without provoking rejection or inflammatory harm."],
    ], ["Every compartment needs its own evidence.", "Surgery can be decisive.", "Drug penetration matters.", "Host recovery is part of treatment."], check("What is the best approach to invasive Aspergillus sinusitis with necrotic tissue?", ["Systemic mold-active therapy plus urgent surgical evaluation", "Topical therapy only", "Observation until culture is final", "Antibacterial therapy alone"], "Necrotic invasive sinus disease often requires antifungal therapy and debridement.", "site-source-control")),

    section("chronic-allergic", "Manage Chronic and Allergic Disease on Their Own Terms", "Chronic pulmonary aspergillosis, aspergilloma, and ABPA require different evidence and treatment from acute invasive disease.", ["CCPA", "Aspergillus IgG", "Aspergilloma", "Hemoptysis", "ABPA"], "Use tempo, immune state, cavity anatomy, bleeding, sensitization, and airway inflammation to choose the pathway.", [
      ["Define chronic cavitary disease", "Require at least three months of symptoms or progression, compatible cavities and pleural change, Aspergillus IgG or microbiologic evidence, and an underlying lung disorder with no or limited immunocompromise."],
      ["Treat progressive chronic disease", "Symptomatic or progressive chronic cavitary disease is treated with itraconazole or voriconazole for at least six months. Stable minimally symptomatic disease may be observed with follow-up every 3 to 6 months."],
      ["Manage aspergilloma and bleeding", "Observe selected asymptomatic stable fungal balls. Significant hemoptysis can require tranexamic acid, bronchial-artery embolization, antifungal therapy to reduce recurrence, or surgical resection after risk assessment."],
      ["Apply current ABPA guidance", "The 2024 ISHAM guideline uses fungal sensitization, total IgE at least 500 IU/mL, plus supporting IgG, eosinophilia, or imaging. Acute symptomatic disease uses oral prednisolone or itraconazole monotherapy, usually over four months, with combination reserved for recurrent exacerbations."],
    ], ["Chronic disease requires chronic criteria.", "Aspergillus IgG supports CCPA.", "Hemoptysis changes urgency.", "ABPA is not tissue invasion."], check("Which evidence bundle supports chronic cavitary pulmonary aspergillosis?", ["At least three months of symptoms or progression, characteristic cavities, and Aspergillus IgG or microbiologic evidence", "One positive sputum culture only", "An isolated eosinophil count", "One day of fever in neutropenia"], "CCPA is a chronic clinical, radiographic, and microbiologic syndrome.", "chronic-allergic")),

    section("response-resistance", "Prove Response and Investigate Breakthrough", "Improvement requires control of fungal burden, recovery of host defense, reliable antifungal exposure, and management of every involved site.", ["Imaging", "TDM", "Immune recovery", "Breakthrough", "Azole resistance"], "Create a longitudinal dashboard rather than using one biomarker or one scan as proof of cure.", [
      ["Track multiple domains", "Follow symptoms, oxygenation, function, imaging, cultures or pathology when available, biomarkers in an appropriate population, antifungal exposure, organ toxicity, and immune recovery."],
      ["Expect imaging complexity", "Lesions can enlarge transiently during neutrophil recovery. Interpret radiographic change with timing, physiology, immune trajectory, and other evidence rather than declaring failure from size alone."],
      ["Audit breakthrough disease", "Confirm dose, route, adherence, absorption, trough, interactions, organism, susceptibility, and competing molds. Obtain new site evidence and consider a different antifungal class."],
      ["Prevent recurrence", "Continue treatment through adequate immune recovery and use secondary prophylaxis when later immunosuppression creates renewed risk."],
    ], ["Response is multidimensional.", "Immune recovery changes imaging.", "Breakthrough requires a new diagnostic audit.", "Resistance can occur without prior azole exposure."], check("What should be done for progressive mold disease during azole prophylaxis?", ["Reassess organism, site, exposure, interactions, susceptibility, and competing molds while considering a new drug class", "Increase the same drug without testing", "Assume nonadherence only", "Stop all antifungal therapy"], "Breakthrough disease can reflect exposure failure, resistance, or a different mold.", "response-resistance")),

    section("transplant-prevention", "Use the 2026 Prevention Update Precisely", "The newest IDSA aspergillosis update currently addresses prevention in adult solid-organ transplant recipients and does not replace every 2016 treatment recommendation.", ["Liver transplant", "Lung transplant", "Targeted prophylaxis", "Knowledge gap", "Stewardship"], "State what the 2026 update does and does not answer, then individualize implementation.", [
      ["Avoid universal liver-transplant prophylaxis", "The 2026 IDSA update suggests against universal anti-Aspergillus prophylaxis for all liver transplant recipients and supports targeted prophylaxis for high-risk individuals."],
      ["Identify high-risk liver recipients", "Evidence highlighted renal replacement therapy around transplantation, retransplantation, and transplant for fulminant hepatic failure. The agent decision must include interactions and organ toxicity."],
      ["Recognize lung-transplant uncertainty", "The panel makes no recommendation for or against universal, targeted, or preemptive strategies in lung transplant because evidence remains insufficient. Local epidemiology and patient factors guide practice."],
      ["Choose the agent deliberately", "When liver-transplant prophylaxis is required, the update suggests an echinocandin or newer mold-active triazole rather than amphotericin formulations or itraconazole, while emphasizing interactions and bioavailability."],
    ], ["The 2026 update is prevention-focused.", "Target liver-transplant prophylaxis to risk.", "Lung-transplant evidence has knowledge gaps.", "Agent selection includes stewardship."], check("What does the 2026 IDSA update suggest for liver transplant recipients?", ["Avoid universal prophylaxis and target prophylaxis to high-risk recipients", "Give amphotericin to every recipient", "Never use prophylaxis", "Use fluconazole for all mold prevention"], "The update favors targeted rather than universal anti-Aspergillus prophylaxis in liver transplantation.", "transplant-prevention")),

    section("integrated-case", "Close Every Aspergillosis Loop", "A defensible plan links syndrome, immune host, imaging, organism evidence, exact agent, exposure, toxicity, resistance, source control, duration, and future immunosuppression.", ["Syndrome", "Host", "Evidence", "Treatment", "Ownership"], "Give every pending result and clinical transition a named owner and review date.", [
      ["Name the syndrome", "Document whether the working model is allergic, colonizing, aspergilloma, chronic pulmonary, invasive pulmonary, or extrapulmonary disease and list the evidence required to confirm it."],
      ["Name the treatment phase", "Separate prophylaxis, empiric or preemptive therapy, primary treatment, salvage, oral transition, chronic suppression, and secondary prophylaxis."],
      ["Name the exposure system", "Record exact drug, formulation, route, loading, weight basis, organ adjustments, TDM plan, interactions, toxicity checks, adherence, access, and administration."],
      ["Name follow-through", "Assign cultures, pathology, susceptibility, biomarkers, imaging, procedures, immune recovery, duration, transition, and relapse surveillance to specific clinicians and dates."],
    ], ["Syndrome precedes drug choice.", "Treatment phase changes goals.", "Exposure must be measurable.", "Ownership prevents invisible failure."], check("Which plan best demonstrates closed-loop invasive aspergillosis care?", ["Early mold-active therapy plus site evidence, TDM, interaction and toxicity review, immune recovery, response imaging, and assigned follow-up", "A prescription without diagnostic follow-up", "One biomarker as proof of cure", "Stopping therapy at six weeks regardless of host"], "Complete care connects diagnosis, delivery, response, and ownership.", "integrated-case")),
  ],
  references: [
    { label: "CDC Clinical Overview of Aspergillosis", href: "https://www.cdc.gov/aspergillosis/hcp/clinical-overview/index.html" },
    { label: "IDSA Aspergillosis Treatment Guideline, published 2016", href: "https://www.idsociety.org/practice-guideline/aspergillosis/" },
    { label: "IDSA 2026 Prevention Update for Adult Solid Organ Transplant Recipients", href: "https://www.idsociety.org/practice-guideline/2026-idsa-clinical-practice-guidelines-on-prevention-of-invasive-aspergillosis-in-adult-solid-organ-transplant-recipients/" },
    { label: "2024 ISHAM ABPA Guideline", href: "https://doi.org/10.1183/13993003.00061-2024" },
    { label: "Current VFEND Prescribing Information", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=ce3ef5cf-3087-4d92-9d94-9eb8287228db" },
    { label: "Current CRESEMBA Prescribing Information", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c" },
  ],
  disclaimer: "This module supports advanced education about aspergillosis. The disease-management IDSA guideline was published in 2016, while the 2026 update currently addresses prevention in adult solid-organ transplant recipients. Decisions require current labeling, current guideline sections, expert consultation, local resistance data, and patient-specific evidence.",
  questionBank: aspergillosisQuestionBank,
};
