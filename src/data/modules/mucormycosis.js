import { mucormycosisQuestionBank } from "@/data/questionBanks/mucormycosis";

const check = (question, choices, rationale, slug) => ({ question, choices, answer: 0, rationale, reviewHref: `#${slug}` });
const rows = (...items) => items.map(([heading, body]) => ({ heading, body }));
const section = (slug, title, summary, concepts, application, content, keyPoints, quiz) => ({ slug, title, visual: `mucormycosis-${slug}`, summary, concepts, application, lesson: rows(...content), keyPoints, check: quiz });

export const mucormycosisModule = {
  slug: "mucormycosis",
  number: "203",
  title: "Mucormycosis",
  source: "RxPrep 2023 Mucorales, amphotericin, isavuconazonium, posaconazole, and interaction material, reconciled with CDC clinical information, the 2019 ECMM and MSG ERC global guideline, and current FDA labeling",
  description: "Recognize angioinvasive Mucorales disease early, distinguish it from Aspergillus, and coordinate active antifungal therapy, urgent surgery, host-factor reversal, and prolonged response assessment.",
  topics: ["Mucorales", "Angioinvasion", "Rhino-orbital-cerebral disease", "Pulmonary disease", "Liposomal amphotericin B", "Isavuconazole", "Posaconazole", "Debridement"],
  outcomes: [
    "Explain Mucorales biology and angioinvasive tissue injury.",
    "Recognize metabolic, hematologic, transplant, trauma, and medication risks.",
    "Identify rhino-orbital-cerebral, pulmonary, cutaneous, gastrointestinal, and disseminated disease.",
    "Build a tissue-centered diagnostic strategy.",
    "Explain why galactomannan and beta-D-glucan cannot exclude disease.",
    "Start liposomal amphotericin B without avoidable delay.",
    "Dose and monitor amphotericin safely.",
    "Use isavuconazole and posaconazole appropriately.",
    "Coordinate repeated surgical source control.",
    "Reverse modifiable host risks.",
    "Define transition, duration, response, and relapse surveillance.",
    "Build a closed-loop multidisciplinary plan.",
  ],
  submodules: [
    section("organism-angioinvasion", "Follow Mucorales Into the Vessel", "Mucorales are environmental molds whose broad, ribbon-like hyphae can invade vessels, interrupt perfusion, and destroy tissue with extraordinary speed.", ["Rhizopus", "Mucorales", "Broad hyphae", "Angioinvasion", "Necrosis"], "Treat necrosis as a perfusion and source-control emergency, not simply a microbiology result.", [
      ["Name the organism group", "Mucormycosis is caused by molds in the order Mucorales, most commonly Rhizopus, with Mucor, Lichtheimia, Cunninghamella, Apophysomyces, and related genera also represented."],
      ["Read the tissue pattern", "Pathology commonly shows broad, irregular, ribbon-like hyphae with sparse or absent septation and variable-angle branching. Tissue invasion matters more than a superficial isolate."],
      ["Follow vascular injury", "Hyphae invade vessel walls, causing thrombosis, hemorrhage, infarction, and necrosis. Ischemic tissue receives less antifungal and immune-cell delivery, which helps explain the need for surgery."],
      ["Act before the classic eschar", "Black necrosis is a late and useful sign, but its absence does not exclude early disease. Pain, swelling, cranial neuropathy, visual change, or infarct-like imaging can appear first."],
    ], ["Mucorales are environmental molds.", "Tissue hyphae are broad and irregular.", "Vascular invasion drives necrosis.", "Classic black eschar can be late."], check("What is the central pathophysiologic feature of mucormycosis?", ["Vascular invasion with thrombosis and tissue necrosis", "Isolated mucosal colonization only", "Toxin-mediated diarrhea", "Immune-complex nephritis"], "Angioinvasion disrupts perfusion and drives rapid tissue death.", "organism-angioinvasion")),

    section("host-risk", "Map the Host and Portal of Entry", "The disease pattern reflects both the immune defect and the route by which spores or contaminated material enter tissue.", ["Diabetic ketoacidosis", "Neutropenia", "Transplant", "Steroids", "Trauma"], "Use the risk profile to anticipate site, tempo, competing molds, and the host interventions required in parallel.", [
      ["Prioritize metabolic risk", "Uncontrolled diabetes, particularly ketoacidosis, is strongly associated with rhino-orbital-cerebral disease. Hyperglycemia, acidosis, dehydration, and electrolyte disturbances require immediate correction."],
      ["Prioritize immune risk", "Persistent neutropenia, hematologic malignancy, stem-cell or solid-organ transplantation, corticosteroids, and other immunosuppression increase pulmonary and disseminated disease."],
      ["Find nontraditional portals", "Burns, traumatic inoculation, surgical wounds, contaminated devices, injection drug use, malnutrition, severe illness, and extreme prematurity can produce cutaneous, gastrointestinal, or disseminated disease."],
      ["Review iron biology", "Iron overload and deferoxamine exposure increase risk. Do not assume that every iron chelator has the same relationship to fungal growth."],
    ], ["Diabetes and acidosis shape rhino-orbital disease.", "Neutropenia shapes pulmonary disease.", "Trauma can directly inoculate tissue.", "Host correction is part of treatment."], check("Which risk factor most strongly points toward rhino-orbital-cerebral mucormycosis?", ["Uncontrolled diabetes with ketoacidosis", "Controlled seasonal allergies", "A healed ankle sprain", "Remote appendectomy"], "Uncontrolled diabetes and ketoacidosis are classic risk settings.", "host-risk")),

    section("rhino-orbital-cerebral", "Recognize the Craniofacial Emergency", "Rhino-orbital-cerebral disease can move from sinus to orbit, cranial nerves, vessels, and brain before culture confirms the organism.", ["Sinus", "Orbit", "Cranial neuropathy", "Vision", "Brain"], "Launch imaging, endoscopic tissue, active antifungal therapy, and surgical planning simultaneously.", [
      ["Recognize early symptoms", "Unilateral facial pain or swelling, headache, sinus congestion, fever, numbness, palatal pain, or serosanguinous discharge can precede visible necrosis."],
      ["Recognize orbital extension", "Ptosis, proptosis, ophthalmoplegia, vision change, afferent pupillary abnormality, or orbital pain indicates threatened vision and possible vascular spread."],
      ["Recognize cerebral extension", "Cranial neuropathy, mental-status change, seizure, focal deficit, cavernous-sinus findings, or infarction requires urgent brain and vascular assessment."],
      ["Coordinate the first day", "Obtain contrast-enhanced sinus, orbital, and brain imaging as appropriate, urgent nasal endoscopy and biopsy, ophthalmology and neurosurgical input, and immediate systemic therapy."],
    ], ["Symptoms can precede eschar.", "Vision change is an emergency.", "Cranial findings imply extension.", "Diagnosis and treatment run in parallel."], check("What is the best response to unilateral sinus pain, ophthalmoplegia, and ketoacidosis?", ["Immediate imaging, endoscopic tissue, active antifungal therapy, and surgical consultation", "Wait for a black eschar", "Use oral fluconazole only", "Reassess in one month"], "The syndrome is a time-critical rhino-orbital-cerebral emergency.", "rhino-orbital-cerebral")),

    section("pulmonary-other-sites", "Search Every Compartment", "Pulmonary disease dominates in profound neutropenia and hematologic malignancy, while skin, gastrointestinal tract, kidney, CNS, and multiple organs can also be involved.", ["Pulmonary", "Cutaneous", "Gastrointestinal", "Renal", "Disseminated"], "Let host and symptoms guide whole-patient examination, imaging, and tissue sampling.", [
      ["Recognize pulmonary disease", "Fever, cough, pleuritic pain, dyspnea, hemoptysis, nodules, consolidation, cavitation, reverse-halo patterns, vascular occlusion, or rapid progression can resemble invasive aspergillosis."],
      ["Recognize cutaneous disease", "Painful erythema, induration, blistering, ulceration, or necrosis after trauma, burns, surgery, or device exposure requires deep biopsy from the active margin."],
      ["Recognize gastrointestinal disease", "Abdominal pain, bleeding, obstruction, perforation, or necrosis can occur in malnutrition, severe immunosuppression, and premature infants and often demands urgent surgery."],
      ["Search for dissemination", "Neurologic, ocular, renal, cardiac, and skin findings can identify additional sites that change drug intensity, surgery, duration, and prognosis."],
    ], ["Pulmonary disease can mimic Aspergillus.", "Skin disease follows direct inoculation or spread.", "GI disease can perforate.", "Dissemination changes the plan."], check("Which scenario should raise concern for pulmonary mucormycosis?", ["Progressive nodular pneumonia during voriconazole exposure in profound neutropenia", "Stable allergic rhinitis", "A normal examination after a cold", "An isolated urine dipstick"], "Breakthrough mold disease on voriconazole raises concern for Mucorales.", "pulmonary-other-sites")),

    section("diagnostic-evidence", "Center Diagnosis on Viable Tissue", "Mucorales biomarkers are limited, hyphae are fragile, and culture can be negative. Diagnosis therefore depends on rapid, carefully handled site evidence.", ["Deep biopsy", "Histopathology", "Culture", "Molecular testing", "Biomarker gap"], "Tell the laboratory that mucormycosis is suspected so collection, transport, processing, and interpretation protect diagnostic yield.", [
      ["Biopsy the active site", "Obtain deep tissue from viable and necrotic interfaces when safe. Superficial swabs cannot establish angioinvasion and may collect colonizers."],
      ["Divide the specimen", "Send separate material for histopathology, fungal culture, and molecular identification when available. Do not place every specimen in fixative."],
      ["Protect fragile hyphae", "Excessive tissue homogenization can damage Mucorales and reduce culture recovery. Direct communication with experienced microbiology and pathology teams matters."],
      ["Know the biomarker gap", "Aspergillus galactomannan and beta-D-glucan do not reliably detect Mucorales. Negative results cannot exclude a compatible tissue-invasive syndrome."],
    ], ["Deep tissue is preferred.", "Pathology demonstrates invasion.", "Culture and molecular tests identify the organism.", "Common mold biomarkers can be negative."], check("Why does a negative galactomannan not exclude mucormycosis?", ["Galactomannan does not reliably detect Mucorales", "It measures kidney function", "It is positive in every mold infection", "It detects only bacteria"], "Mucorales usually escape Aspergillus galactomannan detection.", "diagnostic-evidence")),

    section("immediate-treatment", "Treat, Debride, and Reverse Risk in Parallel", "Effective first-day care is a coordinated bundle, not an antifungal prescription in isolation.", ["Immediate therapy", "Liposomal amphotericin", "Surgery", "Metabolic control", "Immune recovery"], "Start active therapy when suspicion is high and do not delay debridement for final species confirmation.", [
      ["Start active antifungal therapy", "The 2019 global guideline strongly recommends liposomal amphotericin B as first-line treatment. Isavuconazole and posaconazole delayed-release or IV are guideline-supported alternatives in selected circumstances."],
      ["Debride early", "Remove necrotic infected tissue when feasible because thrombosed tissue has poor drug delivery and can seed contiguous or hematogenous spread. Repeat procedures are often necessary."],
      ["Reverse modifiable risk", "Correct hyperglycemia and acidosis, reduce corticosteroids and other immunosuppression when feasible, support neutrophil recovery, and remove contaminated devices or foreign material."],
      ["Avoid inactive therapy", "Voriconazole, fluconazole, and echinocandins do not provide reliable Mucorales treatment. A prior Aspergillus plan must be changed when mucormycosis becomes likely."],
    ], ["Therapy starts immediately.", "Surgery is a core treatment.", "Host reversal matters.", "Voriconazole is not active."], check("What is the strongest initial strategy for suspected invasive mucormycosis?", ["Liposomal amphotericin B plus urgent surgery and host-factor reversal", "Voriconazole alone", "Wait for final culture", "Topical nystatin"], "Combined immediate care addresses organism, necrotic tissue, and host risk.", "immediate-treatment")),

    section("amphotericin-system", "Deliver Liposomal Amphotericin Safely", "Liposomal amphotericin B is lifesaving but requires exact formulation, full initial intensity, and daily toxicity control.", ["5 to 10 mg/kg", "Formulation", "Kidney", "Electrolytes", "Infusion"], "Treat product identity as part of the dose and build renal and electrolyte protection into every administration.", [
      ["Use guideline intensity", "The 2019 global guideline supports liposomal amphotericin B 5 to 10 mg/kg IV daily. CNS involvement often pushes dosing toward the upper end. Begin the intended full daily dose from day one when feasible."],
      ["Verify the exact product", "Liposomal amphotericin B, amphotericin lipid complex, and deoxycholate formulations differ in dosing and toxicity. They are not interchangeable milligram for milligram."],
      ["Monitor kidney and electrolytes", "Track serum creatinine, urine output, potassium, magnesium, bicarbonate, volume status, and nephrotoxic co-medications. Replace electrolytes proactively when appropriate."],
      ["Monitor systemic toxicity", "Follow CBC, liver tests, infusion reactions, fever, rigors, anemia, line integrity, and cumulative tolerability while preserving uninterrupted treatment."],
    ], ["Dose follows site and severity.", "Formulation determines safe dosing.", "Renal injury remains possible.", "Electrolyte replacement is often required."], check("Which liposomal amphotericin B range is supported by the global guideline?", ["5 to 10 mg/kg IV daily", "0.01 mg once monthly", "100 mg orally once", "One topical application"], "Guideline dosing is 5 to 10 mg/kg daily, adjusted by site and severity.", "amphotericin-system")),

    section("azole-transition", "Transition Only to Reliable Mold Exposure", "Isavuconazole and posaconazole can provide active oral or IV continuation, but their products, loading, interactions, and exposure systems differ.", ["Isavuconazonium", "Posaconazole", "Delayed-release", "TDM", "Step-down"], "Confirm stability, source control, absorption, access, and interaction management before amphotericin stops.", [
      ["Use isavuconazonium deliberately", "Current U.S. labeling includes invasive mucormycosis. Load 372 mg IV or orally every 8 hours for six doses, then use 372 mg once daily. Review strong CYP3A4 modifiers and familial short QT syndrome."],
      ["Use the correct posaconazole formulation", "The global guideline supports posaconazole delayed-release tablets or IV for first-line alternatives and salvage. The oral suspension has less reliable exposure and should not be treated as equivalent."],
      ["Measure exposure when useful", "Use posaconazole TDM and repeat it after formulation, interaction, absorption, adherence, or physiologic changes. Isavuconazole TDM is less standardized but can be considered for unusual exposure or response questions."],
      ["Prevent a treatment gap", "Load the selected azole, verify supply and administration, resolve interactions, and schedule follow-up before discontinuing amphotericin."],
    ], ["Isavuconazonium is FDA approved.", "Posaconazole formulations differ.", "TDM protects exposure.", "Step-down requires continuity."], check("Which posaconazole products are preferred for invasive mucormycosis in the global guideline?", ["Delayed-release tablets or IV", "Oral suspension without exposure review", "Topical cream", "Ophthalmic drops"], "Delayed-release tablets and IV provide more reliable systemic exposure.", "azole-transition")),

    section("surgery-source-control", "Make Surgery Part of the Antifungal Plan", "Angioinvasion creates poorly perfused necrotic tissue that systemic medication may not penetrate adequately.", ["Debridement", "Resection", "Margins", "Repeat procedures", "Reconstruction"], "Coordinate operative timing and antifungal delivery rather than treating them as competing options.", [
      ["Debride early and completely", "Remove infected and necrotic tissue when anatomy permits. Rhino-orbital, cutaneous, gastrointestinal, and selected pulmonary disease commonly require urgent procedures."],
      ["Expect serial reassessment", "Progress can continue beyond the first operation. Repeat endoscopy, imaging, examination, and debridement until viable margins and disease control are demonstrated."],
      ["Preserve diagnostic evidence", "Send labeled specimens from margins and compartments for pathology and culture so operative findings refine the disease map and future procedures."],
      ["Plan function and reconstruction", "Balance survival, vision, neurologic function, airway, pulmonary reserve, nutrition, wound closure, and later reconstruction with the multidisciplinary team."],
    ], ["Necrotic tissue limits drug delivery.", "One procedure may not be enough.", "Margins provide evidence.", "Function and survival are planned together."], check("Why is surgical debridement often necessary?", ["Angioinvasion leaves necrotic tissue with poor antifungal delivery", "It replaces all antifungal therapy", "It prevents laboratory testing", "Mucorales only live on the skin surface"], "Removing devitalized infected tissue addresses a compartment with limited perfusion.", "surgery-source-control")),

    section("response-duration", "Continue Until Host and Anatomy Recover", "There is no single short duration that fits mucormycosis. Treatment commonly lasts weeks to months and follows objective disease and immune recovery.", ["Symptoms", "Imaging", "Surgery", "Immune reversal", "Relapse"], "Use a longitudinal response dashboard across every affected site and treatment phase.", [
      ["Track clinical response", "Follow pain, fever, oxygenation, cranial nerve and visual findings, skin margins, abdominal signs, neurologic status, function, and wound healing."],
      ["Track objective disease", "Repeat site-specific CT or MRI, endoscopy, operative inspection, pathology, culture, and molecular or susceptibility evidence when clinically useful."],
      ["Track treatment delivery", "Document exact amphotericin product and cumulative exposure, renal and electrolyte tolerance, azole formulation and concentration, interactions, adherence, access, and administration."],
      ["Track host recovery", "Continue until clinical and radiographic control is durable and immunosuppression is reversed when possible. Future immunosuppression may require secondary prophylaxis."],
    ], ["Duration is individualized.", "Every involved site needs follow-up.", "Exposure and toxicity remain visible.", "Immune recovery affects stopping."], check("When should mucormycosis therapy stop?", ["After durable clinical and imaging control with host-risk reversal when possible", "After the first afebrile day", "At exactly seven days", "As soon as surgery ends"], "Treatment continues until disease control and host recovery are sufficiently established.", "response-duration")),

    section("breakthrough-prevention", "Learn From Breakthrough Mold Disease", "Mucormycosis can emerge during antifungal prophylaxis when the chosen agent lacks activity, exposure is inadequate, or local ecology shifts.", ["Breakthrough", "Prior voriconazole", "Spectrum", "Exposure", "Local ecology"], "Treat breakthrough as a new diagnostic and pharmacologic problem rather than proof of one simple cause.", [
      ["Audit the prophylaxis", "Confirm exact agent, formulation, dose, loading, route, adherence, absorption, TDM, interactions, duration, and intended mold spectrum."],
      ["Rebuild the organism differential", "Progression on voriconazole raises concern for Mucorales. Progression on a broader agent can reflect inadequate exposure, resistance, a different organism, or a noninfectious mimic."],
      ["Change class when indicated", "For suspected breakthrough mucormycosis, obtain deep tissue and move promptly to liposomal amphotericin B or another active strategy rather than simply increasing an inactive agent."],
      ["Use stewardship", "Select prophylaxis only for defined high-risk populations, informed by local epidemiology, drug interactions, organ function, and breakthrough patterns."],
    ], ["Breakthrough requires a full audit.", "Prior agent defines likely gaps.", "Deep tissue remains essential.", "Prophylaxis follows population evidence."], check("What should progressive mold disease during voriconazole prophylaxis trigger?", ["Urgent evaluation for Mucorales and a switch to active therapy while obtaining tissue", "Automatic voriconazole escalation only", "No change until discharge", "Fluconazole monotherapy"], "Voriconazole lacks Mucorales activity.", "breakthrough-prevention")),

    section("integrated-case", "Close the Angioinvasive Care Loop", "Mucormycosis care succeeds when every diagnostic, antifungal, surgical, metabolic, immune, and follow-up dependency has an owner.", ["Host", "Site", "Tissue", "Drug", "Surgery"], "Build the plan around parallel action and visible handoffs.", [
      ["Define host and site", "Record diabetes and acid-base status, neutropenia, transplant and immunosuppression, trauma or device history, iron exposure, portal of entry, and every symptomatic compartment."],
      ["Own organism evidence", "Track imaging, endoscopy, biopsy, pathology, culture, molecular identification, susceptibility, and the limits of negative galactomannan and beta-D-glucan."],
      ["Own treatment delivery", "Verify liposomal amphotericin formulation and dose, surgical schedule, metabolic correction, immune strategy, renal and electrolyte plan, azole transition, interactions, concentration, and access."],
      ["Own long-term control", "Assign repeat imaging, margin or wound assessment, organ-specific function, immune recovery, duration, secondary prophylaxis, and relapse signals to clinicians and dates."],
    ], ["Parallel action saves tissue.", "Deep specimens anchor diagnosis.", "Drug and surgery are complementary.", "Ownership continues after discharge."], check("Which plan best fits rhino-orbital-cerebral mucormycosis?", ["Immediate liposomal amphotericin B, urgent repeated debridement, metabolic correction, tissue diagnosis, and longitudinal imaging", "Voriconazole alone", "Wait for black eschar and culture", "One outpatient dose without follow-up"], "Angioinvasive disease requires immediate combined and longitudinal care.", "integrated-case")),
  ],
  references: [
    { label: "CDC Clinical Overview of Mucormycosis", href: "https://www.cdc.gov/mucormycosis/hcp/clinical-overview/index.html" },
    { label: "2019 ECMM and MSG ERC Global Mucormycosis Guideline", href: "https://www.ecmm.info/guidelines/mucormycoses-2019/" },
    { label: "Current CRESEMBA Prescribing Information", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7f73b8-586a-4df0-935f-fecd4696c16c" },
    { label: "Current NOXAFIL Prescribing Information", href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b073b082-7b57-4423-8c06-4fd4263d6f84" },
  ],
  disclaimer: "This module supports advanced education about mucormycosis. The global disease-management guideline was published in 2019. Decisions require current CDC information, current product labeling, expert consultation, local organism and resistance data, surgical assessment, and patient-specific evidence.",
  questionBank: mucormycosisQuestionBank,
};
