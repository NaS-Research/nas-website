const concepts = [
  ["environment", "Histoplasma exposure follows inhalation of microconidia from disturbed soil enriched by bird or bat material; person-to-person spread is not expected.", "Identify exposure geography and intensity before interpreting a compatible pulmonary or systemic illness.", "Do not dismiss disease because the patient cannot name one memorable exposure."],
  ["dimorphism", "Histoplasma grows as mold in the environment and converts to small intracellular yeasts in human tissue.", "Connect thermal dimorphism and macrophage residence to diagnostic specimens and host defense.", "Do not confuse environmental morphology with the form seen in tissue."],
  ["host-defense", "Cell-mediated immunity contains intracellular yeast, so advanced HIV, transplantation, TNF blockade, and other immune defects increase dissemination risk.", "Use immune status to set the threshold for testing and treatment.", "A mild chest syndrome in an immunocompromised host can progress despite reassuring initial appearance."],
  ["pulmonary-syndrome", "Acute pulmonary histoplasmosis can cause fever, cough, pleuritic pain, fatigue, adenopathy, and pulmonary opacities after a high inoculum.", "Grade symptoms, duration, radiographic progression, oxygenation, and immune risk before deciding whether to treat.", "A positive exposure history alone does not prove active disease."],
  ["dissemination", "Disseminated disease commonly produces prolonged fever, weight loss, cytopenias, hepatosplenomegaly, elevated liver tests, gastrointestinal disease, skin findings, or shock.", "Treat multisystem illness in advanced HIV as an urgent disseminated fungal differential.", "Do not wait for every culture when a critically ill patient has strong antigen and syndrome evidence."],
  ["cns-disease", "CNS histoplasmosis may cause meningitis, focal lesions, seizures, cognitive change, or abnormal CSF and requires a longer, higher-dose amphotericin strategy.", "Obtain CNS-directed studies when neurologic symptoms or unexplained relapse are present.", "Standard disseminated induction is not automatically adequate for CNS disease."],
  ["antigen", "Urine and serum Histoplasma antigen are rapid and sensitive in disseminated HIV disease, while sensitivity is lower in localized pulmonary infection.", "Pair antigen with syndrome, immune status, culture, pathology, and site-specific sampling.", "Antigen can cross-react with other endemic fungi and cannot stand alone."],
  ["culture-pathology", "Fungal culture confirms viable Histoplasma but may take weeks; pathology can reveal intracellular budding yeasts in involved tissue.", "Collect blood, marrow, respiratory, tissue, or CSF specimens according to the suspected compartment.", "A slow culture must not delay life-saving induction in severe disease."],
  ["severity", "Severe disseminated disease includes hemodynamic instability, respiratory compromise, organ failure, marked laboratory abnormalities, or high-burden multisystem involvement.", "Use severity to choose amphotericin induction rather than itraconazole alone.", "Do not let one stable vital sign override the full organ-failure picture."],
  ["severe-induction", "Preferred severe disseminated therapy is liposomal amphotericin B 3 mg/kg IV daily for at least 2 weeks or until clinically improved.", "Verify exact amphotericin formulation, weight, renal and electrolyte monitoring, and transition readiness.", "Amphotericin products are not interchangeable milligram for milligram."],
  ["mild-disseminated", "Mild to moderate disseminated disease in people with HIV can use itraconazole 200 mg three times daily for 3 days, then 200 mg twice daily for at least 12 months.", "Confirm oral absorption, interactions, levels, adherence, and clinical response.", "Do not shorten HIV-associated disseminated therapy to the 6-to-12-week pulmonary course."],
  ["cns-treatment", "CNS disease uses liposomal amphotericin B 5 mg/kg IV daily for 4 to 6 weeks, followed by itraconazole for at least 12 months and until CSF abnormalities resolve.", "Track neurologic response, CSF findings, drug exposure, and relapse risk through both phases.", "Do not apply the lower severe-disseminated amphotericin dose to meningitis without guidance."],
  ["itraconazole-loading", "Conventional itraconazole capsules or solution are loaded at 200 mg three times daily for 3 days before twice-daily treatment.", "Place loading doses and the first concentration check on the medication calendar.", "Missing the loading phase delays useful exposure."],
  ["formulations", "Itraconazole capsules, solution, and super-bioavailable capsules differ in absorption, food instructions, acidity dependence, and dose; they are not freely substitutable.", "Document product, administration instructions, acid suppression, feeding status, and formulation changes.", "A milligram-for-milligram switch can cause treatment failure or toxicity."],
  ["tdm", "Measure itraconazole exposure after about 2 weeks and after major formulation, adherence, interaction, or physiologic changes.", "Interpret the itraconazole component, active hydroxy metabolite, assay, timing, response, and toxicity together.", "Do not accept an unqualified level without knowing product, timing, and assay."],
  ["interaction", "Itraconazole is a strong CYP3A4 inhibitor and substrate with major interactions involving ART, statins, antiarrhythmics, anticoagulants, anticonvulsants, and immunosuppressants.", "Run a complete interaction review before treatment and after every medication change.", "Inducers can produce fungal failure, while inhibited substrates can produce serious toxicity."],
  ["cardiac-hepatic", "Itraconazole can cause hepatotoxicity, edema, hypertension, hypokalemia, and negative inotropic effects that worsen heart failure.", "Monitor liver tests, volume status, cardiac symptoms, potassium, and interacting drugs.", "Do not ignore new edema or dyspnea as merely part of recovery."],
  ["amphotericin-safety", "Liposomal amphotericin can still cause nephrotoxicity, potassium and magnesium wasting, anemia, and infusion reactions.", "Use renal, electrolyte, CBC, volume, infusion, and nephrotoxin surveillance throughout induction.", "Liposomal formulation reduces but does not eliminate toxicity."],
  ["response-antigen", "Clinical response, cultures, organ recovery, and falling quantitative antigen support control; persistently rising antigen can signal relapse or inadequate exposure.", "Trend the same antigen assay and specimen type when possible and investigate discordant results.", "Do not use antigen decline as the only reason to stop therapy."],
  ["art", "For histoplasmosis in HIV, start effective ART promptly after antifungal therapy begins when clinically feasible because life-threatening IRIS is uncommon.", "Coordinate ART with interaction-safe antifungal therapy and adherence support.", "Do not copy the routine 4-to-6-week ART delay used for cryptococcal meningitis."],
  ["suppression", "Long-term suppression is used after severe disseminated or CNS disease and after relapse; itraconazole 200 mg daily is preferred.", "Define who owns duration, immune recovery, antigen, cultures, ART control, and restart criteria.", "Maintenance is not stopped solely because symptoms improve."],
  ["stop-restart", "Stopping suppression requires more than 1 year of azole therapy, negative blood cultures, antigen below quantification, suppressed HIV RNA, and CD4 at least 150 for at least 6 months on ART; restart below 150.", "Document every criterion before stopping and schedule immune follow-up.", "One recovered CD4 value is insufficient."],
  ["prophylaxis", "Primary prophylaxis with itraconazole 200 mg daily is reserved for CD4 below 150 plus occupational or hyperendemic exposure risk, not for every patient with HIV.", "Assess geography, occupation, local incidence, ART, and interaction burden before prophylaxis.", "Routine prophylaxis in low-risk settings adds interaction and toxicity without clear benefit."],
  ["pulmonary-idsa", "Most immunocompetent patients with mild acute pulmonary disease recover without antifungal therapy; prolonged, progressive, moderate, or immunocompromised disease favors treatment.", "Use shared decision-making and distinguish pulmonary duration from HIV dissemination regimens.", "Do not apply a universal treat-all or treat-none rule."],
  ["pregnancy", "When treatment is necessary in pregnancy, maternal-fetal and infectious-disease specialists should weigh severity; avoid azoles in the first trimester when possible and use liposomal amphotericin B for serious disease.", "Balance fetal risk against the maternal danger of untreated invasive infection.", "Pregnancy does not justify undertreating life-threatening disseminated disease."],
];

const dimensions = [
  ["principle", "Which statement is most accurate?", 1],
  ["action", "Which action best applies the evidence?", 2],
  ["assessment", "Which finding or plan best demonstrates sound clinical reasoning?", 2],
  ["hazard", "Which error creates the greatest avoidable risk?", 3],
];

const distractors = [
  "Use one isolated result without considering syndrome, site, host, or treatment phase.",
  "Wait for spontaneous resolution even when severe or disseminated disease is evident.",
  "Assume every antifungal formulation and dose can be substituted without verification.",
];

export const histoplasmosisQuestionBank = concepts.flatMap(([slug, principle, action, hazard], conceptIndex) =>
  dimensions.map(([dimension, stem, answerType], dimensionIndex) => {
    const correct = answerType === 1 ? principle : answerType === 2 ? action : hazard;
    const choices = dimension === "hazard"
      ? [hazard, principle, action, distractors[(conceptIndex + dimensionIndex) % distractors.length]]
      : [correct, hazard, distractors[(conceptIndex + dimensionIndex) % distractors.length], distractors[(conceptIndex + dimensionIndex + 1) % distractors.length]];
    return {
      id: `histoplasmosis-${String(conceptIndex * 4 + dimensionIndex + 1).padStart(3, "0")}`,
      question: `${stem} Focus: ${slug.replaceAll("-", " ")}.`,
      choices,
      answer: 0,
      rationale: `${principle} ${action}`,
      reviewHref: `#${slug}`,
      difficulty: dimensionIndex < 2 ? "foundational" : "advanced",
    };
  })
);
