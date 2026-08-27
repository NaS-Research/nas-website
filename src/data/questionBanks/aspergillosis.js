const concepts = [
  ["environment", "Aspergillus spores are inhaled from soil, dust, decomposing plant material, and construction environments, but exposure alone rarely produces invasive disease.", "Combine exposure with host immunity, lung structure, symptoms, and objective evidence before diagnosing disease.", "Treating environmental exposure or an isolated culture as invasive disease creates avoidable toxicity."],
  ["morphology", "Aspergillus classically produces septate hyphae with acute-angle branching in tissue, but morphology alone may not identify the species.", "Preserve tissue for histopathology and culture so invasion and organism identity can both be assessed.", "Calling every septate mold Aspergillus without culture or molecular context can miss another mold."],
  ["host-risk", "Prolonged neutropenia, hematologic malignancy, stem-cell or solid-organ transplant, high-dose corticosteroids, and other major immunosuppression increase invasive aspergillosis risk.", "Define the depth and expected duration of immune impairment when setting diagnostic urgency and prophylaxis strategy.", "A normal initial chest radiograph does not safely exclude invasive disease in a high-risk host."],
  ["syndrome-map", "Aspergillus can produce allergic disease, colonization, aspergilloma, chronic pulmonary disease, invasive pulmonary disease, or extrapulmonary invasion.", "Name the syndrome before selecting therapy because host, evidence, drug, and duration differ substantially.", "Using one treatment pathway for every positive respiratory culture confuses colonization, allergy, chronic disease, and invasion."],
  ["ct", "Chest CT is preferred when invasive pulmonary aspergillosis is suspected, even when chest radiography is unrevealing.", "Use CT pattern and lesion location to guide bronchoscopy, biopsy, and urgent treatment decisions.", "Waiting for a dense chest-radiograph infiltrate can delay diagnosis in neutropenia."],
  ["bal", "Bronchoscopy with BAL should be attempted when safe and sent for culture, cytology, and nonculture assays.", "Match the procedure to lesion location, bleeding risk, oxygenation, and the need for tissue evidence.", "A biomarker without compartment or host context cannot replace a complete diagnostic evaluation."],
  ["galactomannan", "Serum and BAL galactomannan support invasive aspergillosis in selected high-risk populations, but performance changes with host group and mold-active exposure.", "Interpret specimen, threshold, serial pattern, prophylaxis, transfusions, and pretest probability together.", "Universal serum screening during mold-active prophylaxis can generate misleading reassurance or noise."],
  ["beta-glucan", "Beta-D-glucan can support invasive fungal disease but is not specific for Aspergillus.", "Use it as one component of a fungal evidence bundle rather than a species diagnosis.", "Calling a positive beta-D-glucan definitive aspergillosis ignores many other causes and false positives."],
  ["early-treatment", "Strongly suspected invasive pulmonary aspergillosis warrants early mold-active therapy while diagnostic evaluation continues.", "Collect high-value specimens promptly without delaying treatment in a deteriorating high-risk patient.", "Waiting for final culture before treating progressive hypoxemia can be fatal."],
  ["voriconazole", "Voriconazole is the IDSA-recommended primary treatment for most invasive pulmonary aspergillosis.", "Load intravenously at 6 mg/kg every 12 hours for two doses, then use 4 mg/kg every 12 hours or an appropriate oral regimen with exposure monitoring.", "Fluconazole does not provide reliable Aspergillus treatment."],
  ["voriconazole-tdm", "Voriconazole has nonlinear and variable exposure, so trough monitoring helps assess efficacy, adherence, interactions, and toxicity.", "Obtain a steady-state trough and repeat after dose, route, organ function, or interaction changes.", "Interpreting a concentration without timing, dose, route, or clinical response can mislead."],
  ["voriconazole-safety", "Voriconazole can cause hepatotoxicity, visual disturbance, neurotoxicity, photosensitivity, periostitis with prolonged exposure, QT prolongation, and major CYP interactions.", "Track liver tests, neurologic and visual effects, skin protection, ECG risk, electrolytes, and the full medication list.", "Ignoring phototoxicity or a strong interacting drug during prolonged therapy can cause serious harm."],
  ["voriconazole-renal", "The intravenous voriconazole vehicle SBECD can accumulate when creatinine clearance is below 50 mL/min, while oral voriconazole does not contain that vehicle.", "Balance illness severity, oral absorption, renal trajectory, and current labeling when selecting route.", "Calling renal dysfunction a contraindication to all voriconazole formulations removes a useful oral option."],
  ["isavuconazole", "Isavuconazonium is an FDA-approved alternative primary therapy for invasive aspergillosis and requires a loading phase before once-daily maintenance.", "Use 372 mg every 8 hours for six doses, then 372 mg once daily, while reviewing CYP3A4 interactions and QT shortening.", "Using isavuconazole in familial short QT syndrome is contraindicated."],
  ["liposomal-amphotericin", "Liposomal amphotericin B is an alternative when azoles are contraindicated, not tolerated, unreliable, or when another mold such as Mucorales remains plausible.", "Use the exact formulation and weight-based dose with renal, electrolyte, hematologic, and infusion monitoring.", "Amphotericin formulations are not interchangeable milligram for milligram."],
  ["echinocandin", "Echinocandins are not recommended as routine stand-alone primary therapy for invasive aspergillosis.", "Reserve them for selected salvage use or selected documented cases combined with voriconazole under expert guidance.", "Adding an echinocandin to every suspected case increases complexity without universal evidence."],
  ["duration", "Invasive pulmonary aspergillosis generally requires at least 6 to 12 weeks, adjusted for site, immune recovery, response, and continuing immunosuppression.", "Use serial clinical, imaging, microbiologic, immune, and exposure evidence rather than a calendar alone.", "Stopping at six weeks despite progressive lesions and persistent neutropenia risks relapse."],
  ["resistance", "Azole-resistant Aspergillus fumigatus is emerging and can occur without prior patient azole exposure.", "Request susceptibility testing for suspected resistance, breakthrough infection, or nonresponse and incorporate local epidemiology.", "Escalating the same azole indefinitely without organism or susceptibility reassessment can preserve ineffective therapy."],
  ["breakthrough", "Breakthrough mold disease during prophylaxis requires confirmation of exposure, adherence, absorption, interactions, organism, resistance, and competing molds.", "Change to a different mold-active class when clinically indicated while obtaining site-directed evidence.", "Assuming breakthrough disease proves only nonadherence can miss resistance or wrong-spectrum prophylaxis."],
  ["cns-other-sites", "CNS, sinus, cardiac, skin, bone, and ocular aspergillosis require site-specific imaging, tissue, drug penetration, and procedural planning.", "Combine systemic antifungal therapy with surgical or procedural source control when anatomy and stability support it.", "A lung-only follow-up plan can miss disseminated or structurally destructive disease."],
  ["aspergilloma", "A single aspergilloma in a stable cavity differs from tissue-invasive disease, and significant hemoptysis may require embolization or resection planning.", "Assess symptoms, bleeding, cavity anatomy, pulmonary reserve, and operative risk before intervention.", "Treating a mobile fungal ball as automatically invasive disease confuses colonization of a cavity with tissue invasion."],
  ["chronic-pulmonary", "Chronic cavitary pulmonary aspergillosis combines at least three months of symptoms or progression, characteristic cavities, Aspergillus IgG or microbiologic evidence, and underlying lung disease.", "Observe stable minimally symptomatic disease selectively, but treat symptomatic or progressive disease with a mold-active oral azole for at least six months.", "A single positive sputum culture without chronic clinical and imaging criteria does not establish chronic cavitary disease."],
  ["allergic", "Allergic bronchopulmonary aspergillosis is an immune-mediated airway syndrome associated with asthma or cystic fibrosis, not tissue invasion.", "Integrate asthma or cystic fibrosis, total and Aspergillus-specific IgE, eosinophilia, imaging, and pulmonary function.", "Managing allergic disease as neutropenic invasive pneumonia exposes the patient to the wrong treatment model."],
  ["prevention", "The 2026 IDSA update favors targeted rather than universal prophylaxis in high-risk liver transplant recipients and finds important knowledge gaps in lung transplant strategies.", "Select prophylaxis from transplant type, risk factors, local epidemiology, toxicity, interactions, administration, and stewardship.", "Claiming that every solid-organ transplant recipient needs universal mold prophylaxis contradicts current evidence."],
  ["closed-loop", "Complete aspergillosis care links syndrome, immune host, imaging, site evidence, exact antifungal, measured exposure, resistance, source control, immune recovery, and duration.", "Assign ownership for cultures, biomarkers, imaging, levels, interactions, transitions, prophylaxis, and relapse surveillance.", "A prescription without result ownership and longitudinal reassessment leaves treatment failure invisible."],
];

const dimensions = [
  ["principle", "Which statement is most accurate?", 0],
  ["action", "Which action best applies the evidence?", 1],
  ["assessment", "Which plan demonstrates the strongest clinical reasoning?", 1],
  ["hazard", "Which error creates the greatest avoidable risk?", 2],
];

const generic = [
  "Use one isolated result without considering syndrome, host, site, or antifungal exposure.",
  "Continue the same plan despite objective progression and no diagnostic reassessment.",
  "Assume every mold, triazole, amphotericin formulation, and clinical syndrome is interchangeable.",
];

export const aspergillosisQuestionBank = concepts.flatMap(([slug, principle, action, hazard], conceptIndex) => dimensions.map(([dimension, stem, answerType], dimensionIndex) => {
  const correct = [principle, action, hazard][answerType];
  const choices = dimension === "hazard"
    ? [hazard, principle, action, generic[(conceptIndex + dimensionIndex) % 3]]
    : [correct, hazard, generic[(conceptIndex + dimensionIndex) % 3], generic[(conceptIndex + dimensionIndex + 1) % 3]];
  return {
    id: `aspergillosis-${String(conceptIndex * 4 + dimensionIndex + 1).padStart(3, "0")}`,
    question: `${stem} Focus: ${slug.replaceAll("-", " ")}.`,
    choices,
    answer: 0,
    rationale: `${principle} ${action}`,
    reviewHref: `#${slug}`,
    difficulty: dimensionIndex < 2 ? "foundational" : "advanced",
  };
}));
