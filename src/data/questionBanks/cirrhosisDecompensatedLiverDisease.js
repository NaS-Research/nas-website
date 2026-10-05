const concepts = [
  ["compensation", "Compensated cirrhosis lacks prior ascites, overt hepatic encephalopathy, or portal hypertensive bleeding, while any of these events marks decompensation.", "Use the worst current or historical state to determine prognosis, therapy, surveillance, and transplant referral.", "Calling a patient compensated after a prior decompensating event understates risk."],
  ["portal-hypertension", "Fibrosis and dynamic intrahepatic resistance raise portal pressure, creating collaterals, splenomegaly, thrombocytopenia, ascites, and varices.", "Integrate elastography, platelets, imaging, endoscopy, hemodynamics, and clinical events rather than relying on one sign.", "A normal blood pressure does not exclude clinically significant portal hypertension."],
  ["liver-function-patterns", "AST and ALT primarily mark hepatocellular injury, while albumin, clotting-factor production reflected by PT or INR, and bilirubin processing provide different information about hepatic function.", "Interpret the pattern, trend, medication exposure, nutrition, inflammation, kidney loss, vitamin K status, and clinical state before assigning one abnormality to cirrhosis.", "Calling every liver-associated laboratory value a liver function test can confuse active injury with loss of functional reserve."],
  ["bilirubin-pathway", "Unconjugated bilirubin travels bound to albumin, hepatocytes conjugate it into a water-soluble form, and conjugated bilirubin is excreted into bile and can appear in urine when it reaches the bloodstream.", "Use total and direct bilirubin, urine bilirubin, hemolysis evidence, liver injury pattern, and imaging context to localize impaired production, uptake, conjugation, or excretion.", "Assuming unconjugated bilirubin is freely filtered into urine reverses the solubility and albumin-binding physiology."],
  ["severity-scores", "Child-Pugh and MELD 3.0 answer different prognostic questions and do not replace bedside assessment.", "Calculate with current values, verify units and definitions, then interpret trajectory and the clinical event that prompted scoring.", "A score should not delay urgent treatment of bleeding, infection, encephalopathy, or kidney injury."],
  ["diagnostic-paracentesis", "New ascites and non-elective admission with cirrhosis and ascites require prompt diagnostic paracentesis to establish cause and detect infection.", "Obtain cell count with differential, culture inoculated at bedside, albumin, total protein, and targeted tests before antibiotics when feasible.", "Delaying paracentesis because fever or abdominal pain is absent can miss silent SBP."],
  ["saag", "A serum ascites albumin gradient of at least 1.1 g/dL strongly supports portal hypertensive ascites.", "Calculate serum albumin minus ascites albumin from paired samples and use ascites protein and clinical context to refine cause.", "Using ascites total protein alone as the primary etiologic classifier is less accurate."],
  ["ascites-foundations", "Sodium retention, vasodilation, neurohormonal activation, and portal hypertension drive cirrhotic ascites.", "Restrict sodium moderately, stop harmful sodium-retaining drugs, monitor daily weight, and tailor diuresis to pressure, kidney function, sodium, potassium, and symptoms.", "Routine severe fluid restriction without significant hyponatremia can worsen nutrition and adherence."],
  ["diuretics", "Spironolactone and a loop diuretic address aldosterone-driven sodium retention while balancing potassium effects.", "Use a protocol-based ratio such as spironolactone 100 mg to furosemide 40 mg, then titrate to safe weight, renal, electrolyte, and pressure response.", "Furosemide monotherapy is often inadequate for cirrhotic ascites and can destabilize electrolytes."],
  ["paracentesis-albumin", "Large-volume paracentesis relieves tense or refractory ascites, and albumin reduces post-paracentesis circulatory dysfunction when more than 5 L is removed.", "Use 6 to 8 g albumin per liter removed above the applicable threshold and reassess pressure, kidney function, sodium, and recurrence plan.", "Removing a large volume without albumin can precipitate kidney and circulatory failure."],
  ["refractory-ascites", "Recurrent or refractory ascites requires confirmation of sodium exposure, medication safety, diuretic tolerance, kidney and circulatory status, and competing causes before advanced therapy is selected.", "Use symptom-relieving paracentesis while evaluating albumin replacement, TIPS candidacy, transplant referral, nutrition, and the individualized recurrence plan.", "Repeatedly escalating diuretics despite hypotension, kidney injury, or severe electrolyte disturbance can worsen effective arterial volume without controlling ascites."],
  ["sbp-diagnosis", "An ascitic polymorphonuclear leukocyte count of at least 250 cells per cubic millimeter supports SBP treatment even when culture is negative.", "Start empiric therapy promptly, use local resistance and exposure history, and reassess when response is uncertain.", "Waiting for a positive culture before treating neutrocytic ascites is dangerous."],
  ["sbp-treatment", "SBP therapy combines an appropriate antibiotic with albumin in eligible patients to reduce kidney failure and mortality.", "Select community or healthcare-associated coverage from local ecology, obtain cultures, and give albumin on the recommended day 1 and day 3 schedule when indicated.", "A fixed ceftriaxone plan without resistance or prior-exposure review may be inadequate."],
  ["sbp-prophylaxis", "Secondary prophylaxis after SBP is standard, while primary prophylaxis is reserved for carefully defined high-risk ascites.", "Choose an available agent using resistance, allergy, kidney function, interaction, and local guidance, then reassess ongoing indication.", "Giving indefinite antibiotics to every patient with ascites promotes harm and resistance."],
  ["hrs-aki", "HRS-AKI is functional kidney failure in advanced cirrhosis diagnosed after evaluating competing causes and response to appropriate initial measures.", "Stop nephrotoxins, evaluate volume and infection, hold destabilizing drugs, assess urine and imaging, and involve liver and kidney specialists early.", "Assuming every creatinine rise in cirrhosis is HRS can miss shock, obstruction, or structural kidney injury."],
  ["terlipressin", "Terlipressin with albumin is an FDA-approved HRS treatment, but it can cause serious or fatal respiratory failure and ischemia.", "Assess oxygenation and volume status, avoid use during hypoxia or active ischemia, monitor continuously, and follow current label stopping rules.", "Starting terlipressin in a hypoxic, volume-overloaded patient can be fatal."],
  ["variceal-primary", "Nonselective beta blockers, often carvedilol in compensated CSPH, can prevent decompensation and first bleeding in appropriate patients.", "Confirm CSPH or variceal indication and titrate to pressure and tolerance, or use endoscopic surveillance and ligation when beta blockers are unsuitable.", "Using a selective beta blocker as if it provides equivalent portal protection is incorrect."],
  ["nsbb-safety", "The benefit of nonselective beta blockade depends on an adequate hemodynamic window.", "Reassess during hypotension, AKI, severe infection, hyponatremia, or refractory ascites and avoid rigid heart-rate targets that ignore perfusion.", "Continuing a maximized dose through shock can worsen organ perfusion."],
  ["acute-variceal-bleed", "Suspected acute variceal hemorrhage requires resuscitation, vasoactive therapy, antibiotic prophylaxis, and urgent endoscopic control.", "Protect airway when needed, use a restrictive transfusion strategy in most patients, start octreotide or another recommended vasoactive drug, give antibiotics, and arrange endoscopy.", "Overtransfusion can raise portal pressure, while delayed vasoactive and antibiotic therapy worsens outcomes."],
  ["bleeding-escalation", "Failure to control variceal bleeding requires a predefined rescue pathway because temporary tamponade or stent measures do not replace definitive portal decompression.", "Recognize uncontrolled or early recurrent bleeding, activate experienced endoscopy and interventional teams, use a bridge only when necessary, and evaluate rescue or preemptive TIPS according to risk.", "Repeating unsupported transfusion while delaying definitive escalation can increase portal pressure and permit ongoing hemorrhage."],
  ["tips", "TIPS decompresses portal pressure and can rescue or prevent recurrent complications in selected patients, but it can worsen encephalopathy and heart failure.", "Assess bleeding risk, liver severity, cardiac function, pulmonary pressure, infection, cognition, and transplant pathway before placement.", "Treating TIPS as a simple plumbing procedure ignores systemic hemodynamic and neurologic consequences."],
  ["he-diagnosis", "Overt hepatic encephalopathy is a clinical diagnosis after excluding mimics and identifying precipitants; ammonia concentration does not grade severity reliably.", "Search for infection, bleeding, constipation, dehydration, electrolyte disturbance, sedatives, kidney failure, and neurologic emergencies.", "Escalating therapy solely because ammonia remains elevated can distract from the precipitant."],
  ["lactulose", "Lactulose is first-line therapy for overt HE and is titrated to about 2 to 3 soft stools daily after recovery.", "Teach dose adjustment, stool consistency, hydration, and when diarrhea, weakness, confusion, or inability to take oral therapy requires help.", "Excessive lactulose-induced diarrhea can trigger dehydration, hypokalemia, hypernatremia, and recurrent HE."],
  ["rifaximin", "Rifaximin 550 mg twice daily reduces recurrence of overt HE when added to lactulose in the labeled adult population.", "Verify recurrence history, adherence, access, drug supply, and continued precipitant management rather than substituting it for lactulose without reason.", "Rifaximin does not eliminate the need to evaluate a new mental-status change."],
  ["nutrition", "Cirrhosis care requires adequate calories and about 1.2 to 1.5 g/kg/day protein in many adults, with minimized fasting and no routine protein restriction for HE.", "Assess sarcopenia, food access, sodium burden, alcohol, vitamins, swallowing, obesity, and late-evening nutrition with a dietitian.", "Restricting protein because of encephalopathy can accelerate muscle loss and reduce ammonia disposal."],
  ["medication-safety", "NSAIDs, sedatives, nephrotoxins, duplicate sodium, and poorly adjusted drugs can precipitate bleeding, AKI, ascites, or encephalopathy.", "Reconcile prescriptions, over-the-counter products, supplements, alcohol, renal function, and hepatic labeling at every transition.", "Treating an elevated INR in cirrhosis as proof of auto-anticoagulation misreads rebalanced hemostasis."],
  ["surveillance", "Cirrhosis requires HCC surveillance about every 6 months and prevention care despite control of the original liver disease.", "Coordinate ultrasound with AFP when appropriate, vaccines, bone and nutrition review, variceal strategy, etiologic treatment, and cancer follow-up.", "Viral cure or abstinence does not reverse every established cirrhosis risk."],
  ["transplant-palliative", "Clinically significant ascites, HE, bleeding, jaundice, HRS, or other decompensation should trigger timely transplant evaluation and concurrent symptom-centered care.", "Refer before repeated crises, identify barriers, discuss goals, and integrate palliative care without equating it with abandonment.", "Waiting for an extreme MELD score can miss an earlier window for evaluation."],
  ["integrated-case", "Cirrhosis care is a linked system in which infection, bleeding, volume, kidney function, cognition, nutrition, and medication exposure alter one another.", "Create a dated plan for the acute problem, precipitant, complication prevention, surveillance, transplant evaluation, education, and ownership.", "Managing each complication in isolation can create the next decompensating event."],
  ["transition-ownership", "Transitions after decompensation are high risk because diuretics, lactulose, rifaximin, beta blockers, antibiotics, albumin plans, surveillance, and transplant evaluation depend on changing physiology and reliable access.", "At discharge or transfer, reconcile every medicine, define weight, stool, pressure, kidney, electrolyte, bleeding, infection, and cognition actions, and assign every test and referral to a named owner.", "A medication list without thresholds, dates, supply confirmation, and follow-up ownership can trigger the next preventable decompensation."],
];

const reviewLessonByConcept = {
  compensation: "compensation-portal", "portal-hypertension": "compensation-portal",
  "severity-scores": "severity-assessment", "liver-function-patterns": "severity-assessment", "bilirubin-pathway": "severity-assessment", "transplant-palliative": "severity-assessment",
  "diagnostic-paracentesis": "ascites-diagnosis", saag: "ascites-diagnosis",
  "ascites-foundations": "ascites-treatment", diuretics: "ascites-treatment",
  "paracentesis-albumin": "paracentesis-refractory", "refractory-ascites": "paracentesis-refractory",
  "sbp-diagnosis": "sbp", "sbp-treatment": "sbp", "sbp-prophylaxis": "sbp",
  "hrs-aki": "hrs-aki", terlipressin: "hrs-aki",
  "variceal-primary": "portal-varices", "nsbb-safety": "portal-varices",
  "acute-variceal-bleed": "acute-bleeding", "bleeding-escalation": "acute-bleeding", tips: "acute-bleeding",
  "he-diagnosis": "encephalopathy", lactulose: "encephalopathy", rifaximin: "encephalopathy",
  nutrition: "longitudinal-care", "medication-safety": "longitudinal-care", surveillance: "longitudinal-care",
  "integrated-case": "integrated-case", "transition-ownership": "integrated-case",
};

const dimensions = [["principle", "Which statement is most accurate?", 0], ["action", "Which action best applies the evidence?", 1], ["assessment", "Which plan demonstrates the strongest clinical reasoning?", 1], ["hazard", "Which error creates the greatest avoidable risk?", 2]];
const generic = ["Use one isolated value without reviewing the trajectory, clinical state, medications, or competing causes.", "Assume symptom improvement removes the need for surveillance, prevention, and transplant-aware follow-up.", "Apply a historical textbook algorithm without checking current guidance, labeling, resistance, or patient-specific risk."];

export const cirrhosisDecompensatedLiverDiseaseQuestionBank = concepts.flatMap(([slug, principle, action, hazard], conceptIndex) => dimensions.map(([dimension, stem, answerType], dimensionIndex) => {
  const correct = [principle, action, hazard][answerType];
  const choices = dimension === "hazard" ? [hazard, principle, action, generic[(conceptIndex + dimensionIndex) % 3]] : [correct, hazard, generic[(conceptIndex + dimensionIndex) % 3], generic[(conceptIndex + dimensionIndex + 1) % 3]];
  return { id: `cirrhosis-decompensated-${String(conceptIndex * 4 + dimensionIndex + 1).padStart(3, "0")}`, question: `${stem} Focus: ${slug.replaceAll("-", " ")}.`, choices, answer: 0, rationale: `${principle} ${action}`, reviewHref: `#${reviewLessonByConcept[slug]}`, difficulty: dimensionIndex < 2 ? "foundational" : "advanced" };
}));

// Reconcile cirrhosis nutrition choices and weight-specific feedback.
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-097"), {
  "choices": [
    "Clinically stable adults with cirrhosis generally need adequate energy and 1.2 to 1.5 g/kg ideal body weight/day protein, with minimized fasting and no routine protein restriction for hepatic encephalopathy.",
    "Routinely restrict protein to treat hepatic encephalopathy until the ammonia concentration normalizes",
    "Use ascites-increased scale weight without identifying the weight basis for the protein prescription",
    "Recommend a late-evening snack only when the patient is visibly underweight"
  ],
  "rationale": "AASLD specifies ideal body weight for this adult protein target. Routine restriction can accelerate protein breakdown; adequate intake and shorter fasting periods support nutrition. Fluid retention can distort scale weight, and a normal or high BMI does not rule out malnutrition."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-098"), {
  "choices": [
    "Assess sarcopenia, food access, sodium burden, alcohol, vitamins, swallowing, obesity, and late-evening nutrition with a dietitian.",
    "Wait for visible wasting before reviewing food access or meal timing",
    "Reduce protein whenever encephalopathy occurs, without reviewing actual intake",
    "Omit micronutrient and alcohol-use assessment once calorie intake seems adequate"
  ],
  "rationale": "Review intake, muscle loss, access to food, dietary restrictions, alcohol and micronutrient risks with the nutrition team. Ask about barriers to safe eating, including swallowing difficulty, and involve the appropriate professional when indicated. Adequate calories alone do not establish an adequate nutrition plan."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-099"), {
  "choices": [
    "Assess sarcopenia, food access, sodium burden, alcohol, vitamins, swallowing, obesity, and late-evening nutrition with a dietitian.",
    "Treat a high BMI or ascites-increased weight as proof that muscle and nutrition are adequate",
    "Tighten dietary restrictions despite falling intake, without reassessing nutritional targets",
    "Replace adequate food and protein with vitamin supplements alone"
  ],
  "rationale": "Obesity and fluid retention can conceal muscle loss. Assess the whole nutrition pattern and barriers, including swallowing when relevant; tailor energy, protein and meal timing with a dietitian. Restrictive diets that reduce intake require reassessment, and micronutrients cannot replace macronutrients."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-100"), {
  "choices": [
    "Severely restrict dietary protein to treat hepatic encephalopathy despite ongoing muscle loss",
    "Clinically stable adults with cirrhosis generally need adequate energy and 1.2 to 1.5 g/kg ideal body weight/day protein, with minimized fasting and no routine protein restriction for hepatic encephalopathy.",
    "Assess sarcopenia, food access, sodium burden, alcohol, vitamins, swallowing, obesity, and late-evening nutrition with a dietitian.",
    "Shorten overnight fasting with an individualized late-evening snack"
  ],
  "rationale": "The error is protein restriction: it can worsen catabolism and muscle loss. Muscle contributes to ammonia disposal, so restriction is not a reliable way to improve encephalopathy. Adequate nutrition, assessment and an individualized meal schedule are beneficial actions."
});

// Reconcile whole medication-safety and surveillance assessments.
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-101"), {
  "choices": [
    "Systemic NSAIDs, sedating medicines, nephrotoxins, excess sodium from products, and inappropriate dosing can worsen bleeding, kidney injury, fluid retention or encephalopathy in cirrhosis.",
    "An elevated INR caused by cirrhosis proves protection from venous thrombosis",
    "Over-the-counter products do not need review if the prescription list is complete",
    "Use the same dose-reduction percentage for every hepatically cleared medicine"
  ],
  "rationale": "Review each product, indication, dose and route alongside renal and hepatic function. Systemic NSAIDs can impair kidney function, promote fluid retention and increase bleeding risk; sedatives can impair cognition. INR does not measure the full balance of clotting and anticoagulant factors."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-102"), {
  "choices": [
    "Reconcile prescriptions, over-the-counter products, supplements, alcohol, renal function, and hepatic labeling at every transition.",
    "Exclude herbal supplements and over-the-counter sleep aids from reconciliation",
    "Use INR alone to decide whether the patient is protected from thrombosis",
    "Continue every previous dose without review after new kidney injury"
  ],
  "rationale": "Reconcile all products and exposures at transitions, then review current product-specific renal and hepatic dosing and continued need. Over-the-counter medicines and supplements can cause harm or interact. New kidney injury changes medication risk; INR alone cannot resolve it."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-103"), {
  "choices": [
    "Reconcile prescriptions, over-the-counter products, supplements, alcohol, renal function, and hepatic labeling at every transition.",
    "Automatically discontinue every medicine when jaundice appears, without contacting the treating team",
    "Ignore product-specific labeling because one liver-function result is normal",
    "Assume a high INR makes anticoagulant and bleeding-risk review unnecessary"
  ],
  "rationale": "Use a complete list, current organ function and product labeling to individualize decisions with the treating team. Review sedative, nephrotoxic and sodium exposures and explain medication changes. Neither a normal isolated liver test nor a high INR replaces clinical assessment; abrupt withdrawal of some medicines can cause harm."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-104"), {
  "choices": [
    "Treat a cirrhosis-related elevated INR as proof that the patient is protected from thrombosis",
    "Reconcile prescriptions, over-the-counter products, supplements, alcohol, renal function, and hepatic labeling at every transition.",
    "Review systemic NSAID and sedative exposure with the treating team",
    "Check current renal and hepatic dosing recommendations for each medicine"
  ],
  "rationale": "Cirrhosis changes both procoagulant and anticoagulant factors, creating a fragile balance in which bleeding and thrombosis can occur. INR alone does not represent that balance. The other choices are useful medication-safety actions; assess bleeding, clotting, organ function and medication risks together."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-105"), {
  "choices": [
    "Eligible patients with cirrhosis need ultrasound plus AFP about every six months for HCC surveillance, even after control of the underlying liver disease.",
    "Successful HCV treatment eliminates the need for surveillance in every patient with established cirrhosis",
    "A normal AFP result alone excludes HCC and replaces imaging",
    "Screen every patient with Child-Pugh C cirrhosis even when transplantation is not an option"
  ],
  "rationale": "AASLD recommends ultrasound plus AFP approximately every six months for eligible patients with cirrhosis. HCV cure reduces risk but does not eliminate established cirrhosis-related HCC risk. Surveillance is intended for patients who could benefit from HCC treatment; Child-Pugh C patients need transplant eligibility, and life-limiting comorbidity may remove benefit."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-106"), {
  "choices": [
    "Coordinate indicated HCC surveillance, vaccinations, bone and nutrition review, variceal prevention, etiologic treatment, and specialist follow-up.",
    "Stop all HCC and variceal follow-up once liver enzymes normalize",
    "Use AFP alone instead of the indicated surveillance imaging",
    "Postpone vaccination and bone-risk assessment until cancer symptoms occur"
  ],
  "rationale": "Build prevention around treatment eligibility, cirrhosis complications and the patient’s needs. Continue indicated ultrasound-plus-AFP surveillance and review vaccination history, bone health, nutrition and variceal strategy. A normal enzyme result or absence of symptoms does not remove these risks."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-107"), {
  "choices": [
    "Coordinate indicated HCC surveillance, vaccinations, bone and nutrition review, variceal prevention, etiologic treatment, and specialist follow-up.",
    "Assume alcohol abstinence removes every remaining cancer and portal-hypertension risk",
    "Replace the surveillance plan with an AFP test only when symptoms develop",
    "Use a fixed prevention plan without reviewing transplant eligibility or patient goals"
  ],
  "rationale": "Etiologic treatment and abstinence are important but do not erase every established cirrhosis risk. Review treatment and transplant eligibility, goals, scheduled HCC surveillance, variceal prevention, vaccines, bone health and nutrition together. Screening while eligible aims to detect disease before symptoms; AFP alone is insufficient."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-108"), {
  "choices": [
    "Stop indicated HCC surveillance after viral cure because established cirrhosis is assumed to carry no remaining cancer risk",
    "Eligible patients with cirrhosis need ultrasound plus AFP about every six months for HCC surveillance, even after control of the underlying liver disease.",
    "Coordinate indicated HCC surveillance, vaccinations, bone and nutrition review, variceal prevention, etiologic treatment, and specialist follow-up.",
    "Reassess treatment and transplant eligibility as liver disease and patient goals change"
  ],
  "rationale": "The error is abandoning indicated surveillance because the cause is controlled. In patients with cirrhosis, HCC risk can persist after HCV cure; surveillance eligibility still depends on whether HCC-directed treatment or transplantation could provide benefit. The other choices support individualized continued care."
});

// Reconcile the full compensation, portal, laboratory, scoring and referral item set.
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-001"), {
  "choices": [
    "Cirrhosis-related ascites, overt encephalopathy or variceal hemorrhage marks decompensation; prior events and the current state both matter.",
    "Nonbleeding varices alone always establish decompensation.",
    "Any mild ALT elevation establishes decompensated cirrhosis.",
    "Control of ascites on diuretics automatically proves recompensation."
  ],
  "rationale": "Ascites, overt encephalopathy and variceal hemorrhage are defining events. Nonbleeding varices can occur before decompensation, and ALT is an injury marker. Treatment-controlled ascites alone does not satisfy formal recompensation criteria."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-002"), {
  "choices": [
    "After ascites resolves on diuretics, retain the decompensation history and reassess the current state and continued prevention needs.",
    "After ascites resolves on diuretics, erase the prior event from the clinical assessment.",
    "After ascites resolves on diuretics, assume all portal hypertension has disappeared.",
    "After ascites resolves on diuretics, label formal recompensation without reviewing etiology or liver function."
  ],
  "rationale": "Resolution while taking diuretics shows treatment response, not formal recompensation by itself. History remains relevant, while current findings and trajectory guide reassessment. Neither portal-risk resolution nor cause control can be presumed."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-003"), {
  "choices": [
    "Assess cause control, ascites off diuretics, HE off lactulose/rifaximin, absence of recurrent variceal bleeding for at least 12 months and stable improvement in liver function.",
    "Confirm recompensation from viral suppression alone even with persistent ascites.",
    "Confirm recompensation from normal ALT alone despite recurrent overt encephalopathy.",
    "Confirm recompensation from symptom control alone despite unchanged synthetic function."
  ],
  "rationale": "Baveno VII requires the combined etiologic, clinical and functional criteria. A single favorable result is insufficient. This is an expert-consensus definition; reassess residual portal hypertension and prevention even after criteria are met."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-004"), {
  "choices": [
    "Erase a prior cirrhosis-related ascites episode because it is currently controlled by diuretics.",
    "Record previous decompensation alongside the present treatment response.",
    "Review formal recompensation criteria after sustained cause control.",
    "Reassess portal and cancer prevention according to the current clinical state."
  ],
  "rationale": "Erasing the prior event conceals important disease history. The other choices preserve history while assessing recovery and residual risk. Controlled ascites alone does not establish formal recompensation."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-005"), {
  "choices": [
    "Intrahepatic resistance and altered splanchnic circulation can produce portal hypertension even when systemic blood pressure is normal.",
    "Normal systemic blood pressure excludes all portal hypertension.",
    "Collateral veins eliminate the risk of gastroesophageal varices.",
    "Ascites always means the effective arterial circulation is overfilled."
  ],
  "rationale": "Portal and systemic pressures describe different circulations. Collaterals include varices, while splanchnic vasodilation can reduce effective arterial filling despite excess total-body fluid. Normal blood pressure does not exclude portal disease."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-006"), {
  "choices": [
    "Use validated liver-stiffness and platelet criteria, with imaging or endoscopic evidence and specialist assessment as appropriate.",
    "Infer absence of portal hypertension from one normal arm blood-pressure reading.",
    "Apply any stiffness cutoff identically to every etiology and body habitus.",
    "Dismiss visible portosystemic collaterals because ALT has normalized."
  ],
  "rationale": "Validated noninvasive criteria must match the method and population. Clinical and imaging evidence remains relevant; systemic pressure and ALT cannot independently rule out portal hypertension. Invasive testing is individualized rather than required for every patient."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-007"), {
  "choices": [
    "In viral or alcohol-related cirrhosis, interpret HVPG of at least 10 mmHg as clinically significant portal hypertension and assess its clinical consequences.",
    "In viral or alcohol-related cirrhosis, define clinically significant portal hypertension only when arm systolic pressure exceeds 140 mmHg.",
    "In viral or alcohol-related cirrhosis, exclude clinically significant portal hypertension whenever HVPG is below 20 mmHg.",
    "Use the viral/alcohol HVPG definition to exclude every presinusoidal cause of portal hypertension."
  ],
  "rationale": "Baveno VII defines CSPH at HVPG at least 10 mmHg for viral/alcohol cirrhosis. Arm pressure is not the criterion. HVPG can underestimate presinusoidal disease, and the interpretation must account for etiology rather than applying a universal exclusion rule."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-008"), {
  "choices": [
    "Stop evaluating portal risk because systemic blood pressure is normal despite documented varices.",
    "Assess varices and other portal-hypertension evidence independently of arm blood pressure.",
    "Use population-appropriate noninvasive criteria with specialist review.",
    "Continue indicated prevention while assessing response to etiologic treatment."
  ],
  "rationale": "The error is treating normal systemic pressure as proof that documented portal disease is absent. The other choices assess the relevant circulation and preserve appropriate prevention while recovery is evaluated."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-009"), {
  "choices": [
    "ALT and AST mainly reflect hepatocellular injury; albumin and PT/INR inform synthesis, while bilirubin informs processing and excretion.",
    "ALT directly measures clotting-factor synthesis.",
    "Albumin concentration directly measures acute hepatocyte injury without confounders.",
    "Direct bilirubin is a clotting protein synthesized by the liver."
  ],
  "rationale": "These measurements assess different processes. Albumin and INR also have nonhepatic influences; bilirubin is a metabolized pigment, not a clotting protein. Avoid treating all liver-associated tests as interchangeable measures of reserve."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-010"), {
  "choices": [
    "For low albumin, assess liver synthesis together with inflammation, nutrition, protein loss and dilution.",
    "For low albumin, diagnose cirrhosis as the only possible cause.",
    "For low albumin, infer acute hepatocyte injury directly from its concentration.",
    "For low albumin, ignore fluid status because dilution cannot affect the result."
  ],
  "rationale": "Low albumin is nonspecific. Inflammation, poor nutrition, protein loss and fluid overload may contribute, so interpret the result alongside the history, other liver measurements and trend."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-011"), {
  "choices": [
    "For prolonged INR, review liver disease, anticoagulants, vitamin K status and other coagulation disorders before assigning a cause.",
    "For prolonged INR, conclude that the patient cannot develop thrombosis.",
    "For prolonged INR, infer the exact bleeding risk from INR alone.",
    "For prolonged INR, rule out all nonhepatic causes because the patient has cirrhosis."
  ],
  "rationale": "Cirrhosis alters both procoagulant and anticoagulant factors. INR can be affected by other disorders and medicines; it neither quantifies cirrhosis-related bleeding risk alone nor establishes protection from thrombosis."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-012"), {
  "choices": [
    "Treat a normal ALT as proof of preserved liver reserve despite ascites and worsening INR.",
    "Review ascites, bilirubin, albumin and INR alongside injury markers.",
    "Consider medicine and nonhepatic influences on abnormal results.",
    "Assess the direction of change and current symptoms rather than one enzyme result."
  ],
  "rationale": "A normal injury marker cannot override decompensation or worsening functional findings. The other actions integrate different measurements and possible confounders instead of assuming normal ALT means recovery."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-013"), {
  "choices": [
    "Unconjugated bilirubin is transported mainly bound to albumin; conjugation increases water solubility and supports biliary excretion.",
    "Unconjugated bilirubin is freely excreted in urine before liver uptake.",
    "Conjugation makes bilirubin less water-soluble.",
    "Conjugated bilirubin normally cannot enter urine when present in blood."
  ],
  "rationale": "Albumin binding and water insolubility prevent normal urinary excretion of unconjugated bilirubin. Conjugated bilirubin is water-soluble and can appear in urine when circulating levels rise."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-014"), {
  "choices": [
    "Fractionate an isolated bilirubin elevation and evaluate hemolysis or impaired uptake/conjugation when the indirect fraction predominates.",
    "Diagnose extrahepatic obstruction from every isolated indirect bilirubin rise.",
    "Use a negative urine bilirubin test to exclude all indirect hyperbilirubinemia.",
    "Treat total bilirubin alone as proof of the site and cause of dysfunction."
  ],
  "rationale": "An indirect rise can reflect increased production or impaired uptake/conjugation. Fractionation guides further investigation but does not establish the complete diagnosis. Unconjugated bilirubin is not normally excreted in urine, so a negative urine result does not exclude an indirect rise."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-015"), {
  "choices": [
    "With jaundice, dark urine and a direct bilirubin rise, assess hepatic excretion and possible biliary obstruction using the laboratory pattern and appropriate imaging.",
    "With a direct bilirubin rise, diagnose hemolysis as the only possible cause.",
    "With a direct bilirubin rise, assume dark urine must represent unconjugated bilirubin.",
    "With jaundice and pale stools, dismiss biliary causes without reviewing the laboratory pattern."
  ],
  "rationale": "Direct bilirubin elevation can arise from impaired hepatic excretion or obstruction. Dark urine may contain conjugated bilirubin and pale stools suggest reduced pigment reaching the bowel; combine these clues with other findings and imaging rather than declaring one cause."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-016"), {
  "choices": [
    "Exclude unconjugated hyperbilirubinemia solely because urine bilirubin is negative.",
    "Review bilirubin fractions and hemolysis evidence when appropriate.",
    "Recognize that unconjugated bilirubin is not normally excreted in urine.",
    "Use urine findings as one clue alongside serum tests and the clinical picture."
  ],
  "rationale": "A negative urine bilirubin result cannot exclude an indirect rise because unconjugated bilirubin is not normally excreted in urine. The other choices correctly interpret solubility and the limits of an isolated test."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-017"), {
  "choices": [
    "Child-Pugh includes ascites and encephalopathy; current MELD uses different inputs, and neither replaces clinical assessment.",
    "Child-Pugh assigns zero points when all five findings are normal.",
    "MELD 3.0 directly includes an ascites grade and an encephalopathy grade.",
    "Child-Pugh class alone determines an identical dose reduction for every medicine."
  ],
  "rationale": "Child-Pugh assigns at least one point per component, so its minimum is 5. MELD uses laboratory and demographic inputs rather than these clinical grades. Medicines require their own hepatic-impairment guidance, and scores must be interpreted with the patient\u2019s condition."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-018"), {
  "choices": [
    "For bilirubin 2.5 mg/dL, albumin 3.0 g/dL, INR 1.8, mild diuretic-responsive ascites and no HE, calculate Child-Pugh 9, class B.",
    "For those same stated findings, calculate Child-Pugh 4, class A.",
    "For those same stated findings, calculate Child-Pugh 9, class C.",
    "For those same stated findings, calculate Child-Pugh 12 by counting PT and INR as separate components."
  ],
  "rationale": "In the standard INR-based table, the five components earn 2, 2, 2, 2 and 1 points: total 9, class B. Class C begins at 10. PT and INR are alternatives for one component, not two separately counted components."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-019"), {
  "choices": [
    "Use the current OPTN MELD calculator with verified units, age-at-registration formula, albumin, adult sex input and recent dialysis history.",
    "Use only bilirubin, INR and creatinine and label the result MELD 3.0.",
    "Enter bilirubin in micromol/L into a field requiring mg/dL without conversion.",
    "Ignore qualifying recent dialysis whenever measured creatinine is below 3 mg/dL."
  ],
  "rationale": "Current MELD includes sodium and albumin, with the adult sex term determined by registration age. Units and dialysis history change calculation: OPTN uses creatinine 3 mg/dL for qualifying dialysis. An older three-variable formula is not current MELD 3.0."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-020"), {
  "choices": [
    "Delay urgent evaluation of active bleeding or kidney injury until a high MELD score is calculated.",
    "Stabilize urgent complications while current severity assessment proceeds.",
    "Review current score inputs and their units before interpreting the result.",
    "Use decompensation and clinical trajectory to inform timely referral."
  ],
  "rationale": "A score must not delay urgent assessment and treatment. The other actions combine accurate scoring with stabilization and referral. A low or unavailable score does not make active complications safe to ignore."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-109"), {
  "choices": [
    "Palliative care can address symptoms and caregiver needs during transplant evaluation and disease-directed treatment.",
    "Palliative care automatically excludes transplantation.",
    "Palliative care is available only after all liver-directed medicines are stopped.",
    "Palliative care and hospice are identical in timing and purpose."
  ],
  "rationale": "AASLD supports concurrent palliative and disease-directed care. Palliative care addresses serious-illness needs at any stage; it does not automatically establish hospice enrollment or remove transplant consideration."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-110"), {
  "choices": [
    "After decompensation, arrange timely specialist/transplant assessment and symptom support based on the patient\u2019s condition and goals.",
    "After decompensation, defer all referral until MELD reaches 40.",
    "After decompensation, guarantee transplant listing without evaluating eligibility.",
    "After decompensation, stop symptom care whenever transplant evaluation is requested."
  ],
  "rationale": "Decompensation warrants timely consideration of transplantation, with continued symptom care. Evaluation and listing are distinct; candidacy requires individualized assessment. Waiting for the maximum score or withholding supportive care can miss needs and opportunities."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-111"), {
  "choices": [
    "Discuss goals, document preferences and a surrogate, review caregiver and access barriers, and revisit the plan as the disease changes.",
    "Treat transplant referral as a substitute for discussing patient preferences.",
    "Assume one goals discussion remains sufficient after every major clinical change.",
    "Exclude caregivers and access barriers from the care plan despite the patient\u2019s wishes and needs."
  ],
  "rationale": "Advance care planning is a continuing process. AASLD includes patient values, preferences and surrogate decision makers; symptom and caregiver support can coexist with transplant planning. Revisit the plan as circumstances change."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-112"), {
  "choices": [
    "Wait through repeated decompensation solely because MELD has not reached an extreme value.",
    "Consider timely transplant evaluation after decompensation.",
    "Provide palliative symptom support alongside disease-directed treatment.",
    "Review eligibility, goals and follow-up barriers with the patient and team."
  ],
  "rationale": "Waiting solely for an extreme score can delay evaluation while the disease worsens. The other choices support timely individualized definitive planning and symptom care; referral does not guarantee listing."
});

// Reconcile every complete ascites diagnosis bank object, retaining IDs, keys and lesson links.
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-021"), {
  "question": "A patient with cirrhosis and established ascites is admitted non-electively for a femur fracture. There is no fever or abdominal pain. Which plan is best?",
  "choices": [
    "Arrange prompt diagnostic paracentesis to assess for silent infection.",
    "Defer sampling until fever or abdominal pain develops.",
    "Skip sampling because the reason for admission is unrelated to the liver.",
    "Replace diagnostic testing with assessment of serum albumin alone."
  ],
  "rationale": "Non-elective admission with cirrhosis and ascites warrants prompt diagnostic paracentesis even for an unrelated problem. SBP may present without fever or pain, so their absence does not justify deferral."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-022"), {
  "question": "An initial diagnostic tap is planned for new accessible ascites. Which test combination best evaluates the fluid cause and neutrophil burden?",
  "choices": [
    "Ascitic cell count with differential, albumin and total protein, plus paired serum albumin.",
    "Ascitic total protein alone, with no paired serum or cell count.",
    "Serum albumin and liver enzymes alone, without ascitic analysis.",
    "Ascitic cytology alone in every patient, without cell count or albumin."
  ],
  "rationale": "The initial panel includes ascitic cell count with differential, albumin and total protein, plus paired serum albumin for SAAG. Add bedside culture for hospitalization or suspected infection; targeted tests such as cytology depend on the clinical context."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-023"), {
  "question": "A clinically stable outpatient with recurrent ascites of an established cause undergoes a routine therapeutic tap. Which testing plan best matches the setting?",
  "choices": [
    "Send a cell count with differential; repeat or extend other tests when clinically indicated.",
    "Omit all fluid testing because the cause was established previously.",
    "Automatically repeat SAAG, cytology and amylase at every tap regardless of context.",
    "Use culture alone to exclude infection without measuring the PMN count."
  ],
  "rationale": "Routine recurrent outpatient taps still warrant cell count with differential. The whole initial etiologic panel need not be repeated automatically. Suspected infection requires cultures and further assessment; uncertain cause or other clinical indications justify additional tests."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-024"), {
  "question": "Ascitic PMNs are 320 cells/mm³, the culture is negative, and no secondary intra-abdominal source is identified. Which error poses the greatest avoidable risk?",
  "choices": [
    "Withhold empiric SBP therapy solely because the culture is negative.",
    "Begin empiric SBP therapy while evaluating the clinical course.",
    "Assess for a secondary source if guarding or an atypical course develops.",
    "Use subsequent microbiology to tailor therapy when an organism is identified."
  ],
  "rationale": "A PMN count of 320 exceeds the ≥250 cells/mm³ threshold. A negative culture does not rule out neutrocytic infection or justify withholding empiric treatment in this setting. The other choices describe appropriate management or reassessment."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-025"), {
  "question": "Paired serum albumin is 3.1 g/dL and ascitic albumin is 1.3 g/dL. What is the SAAG and its interpretation?",
  "choices": [
    "1.8 g/dL; it supports portal hypertension.",
    "4.4 g/dL; it confirms peritoneal malignancy.",
    "−1.8 g/dL; it proves cardiac ascites.",
    "0.42 g/dL; it excludes portal hypertension."
  ],
  "rationale": "SAAG = serum albumin − ascitic albumin = 3.1 − 1.3 = 1.8 g/dL. This exceeds 1.1 g/dL and supports portal hypertension. It does not identify cirrhosis or cardiac disease by itself; adding, reversing or dividing the albumin values is incorrect."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-026"), {
  "question": "Paired serum albumin is 30 g/L and ascitic albumin is 19 g/L. Which SAAG interpretation is correct?",
  "choices": [
    "11 g/L = 1.1 g/dL; it meets the portal-hypertension threshold.",
    "11 g/L = 0.11 g/dL; it falls below the threshold.",
    "49 g/L = 4.9 g/dL; sum the albumin concentrations.",
    "11 g/L = 11 g/dL; the units are interchangeable."
  ],
  "rationale": "30 − 19 = 11 g/L. Divide by 10 to convert g/L to g/dL: 11 g/L = 1.1 g/dL. The inclusive ≥1.1 g/dL threshold is met. SAAG is a difference, and matching units are necessary before comparison."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-027"), {
  "question": "An adult has SAAG 1.6 g/dL and ascitic total protein 3.2 g/dL. Which interpretation best guides further assessment?",
  "choices": [
    "Consider a cardiac or postsinusoidal cause; combine the pattern with examination and imaging.",
    "Diagnose cirrhosis as the sole cause because any high SAAG is specific for cirrhosis.",
    "Exclude portal hypertension because total protein is above 2.5 g/dL.",
    "Diagnose SBP without a PMN count because ascitic protein is elevated."
  ],
  "rationale": "High SAAG supports portal hypertension. In that context, protein ≥2.5 g/dL raises consideration of cardiac or postsinusoidal disease. The pattern is not definitive and mixed causes remain possible. Neither protein nor SAAG substitutes for the PMN count in assessing infection."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-028"), {
  "question": "A patient with a cancer history has SAAG 0.7 g/dL and new ascites. Which error most undermines etiologic assessment?",
  "choices": [
    "Classify the cause using ascitic total protein alone and stop further investigation.",
    "Consider a peritoneal cause because the SAAG is below 1.1 g/dL.",
    "Order cytology when the clinical picture suggests peritoneal malignancy.",
    "Review imaging and history for alternative or mixed causes."
  ],
  "rationale": "Total protein alone is an inadequate primary classifier. SAAG below 1.1 g/dL prompts evaluation for causes such as peritoneal malignancy or tuberculosis, with targeted tests guided by the clinical context. It does not prove a specific diagnosis; the other plans appropriately refine the cause."
});

// Reconcile every complete treatment and paracentesis bank object while retaining IDs, keys and lesson links.
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-029"), {
  "question": "Which explanation best accounts for ascites together with impaired kidney perfusion in cirrhosis?",
  "choices": [
    "Portal hypertension and vasodilation activate sodium retention despite excess visible fluid.",
    "Visible fluid excess guarantees adequate effective arterial blood volume.",
    "Ascites is caused only by excess water intake, independent of sodium retention.",
    "Peripheral edema excludes neurohormonal sodium retention."
  ],
  "rationale": "Portal hypertension and vasodilation reduce effective arterial filling and activate sodium-retaining pathways. Ascites or edema therefore does not guarantee adequate kidney perfusion. Water intake alone is an incomplete explanation."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-030"), {
  "question": "A patient’s food intake has fallen after receiving very restrictive diet instructions for cirrhotic ascites. Which plan best supports both ascites control and nutrition?",
  "choices": [
    "Use achievable sodium restriction of about 2 g/day with dietitian support and adequate calories and protein.",
    "Eliminate dietary sodium completely even if calorie intake falls further.",
    "Restrict protein routinely because all ascites requires protein avoidance.",
    "Replace sodium counseling with routine severe water restriction despite normal serum sodium."
  ],
  "rationale": "Moderate sodium restriction supports negative sodium balance while preserving adequate nutrition. Extreme restrictions that undermine intake are counterproductive. Normal sodium does not justify routine severe fluid restriction, and ascites alone does not require protein avoidance."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-031"), {
  "question": "A patient with moderate ascites has serum sodium 138 mmol/L and stable kidney function. Which fluid instruction is best?",
  "choices": [
    "Routine fluid restriction is unnecessary; focus on sodium restriction and monitored diuretic therapy.",
    "Limit all fluids to 500 mL/day solely because ascites is present.",
    "Use fluid restriction instead of dietary sodium restriction.",
    "Withhold all oral fluids until the ascites disappears."
  ],
  "rationale": "Normal serum sodium does not justify routine fluid restriction for ascites. Sodium restriction and individualized diuretics address retained sodium. Fluid restriction is reserved for selected clinically important dilutional hyponatremia, after considering volume status."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-032"), {
  "question": "A patient develops hypovolemic hyponatremia after excessive diuresis. Which instruction creates the greatest avoidable risk?",
  "choices": [
    "Automatically impose severe fluid restriction without addressing diuretic-related volume depletion.",
    "Reassess and stop the excessive diuretic exposure as indicated.",
    "Restore volume under clinical supervision.",
    "Arrange urgent assessment if severe symptoms accompany the low sodium."
  ],
  "rationale": "Hypovolemic hyponatremia requires correction of the volume-depleting cause and supervised volume restoration. Blind fluid restriction can worsen the depleted state. Fluid restriction for dilutional hypervolemic hyponatremia is a different treatment context."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-033"), {
  "question": "Which initial tablet regimen represents the common paired approach to cirrhotic ascites?",
  "choices": [
    "Spironolactone 100 mg/day plus furosemide 40 mg/day, adjusted to response and tolerance.",
    "Spironolactone 40 mg/day plus furosemide 100 mg/day as the standard 100:40 pair.",
    "Furosemide 400 mg/day plus spironolactone 160 mg/day as routine starting doses.",
    "An NSAID plus furosemide to promote sodium excretion."
  ],
  "rationale": "The common initial pair is spironolactone 100 mg/day with furosemide 40 mg/day. Aldosterone blockade addresses a central sodium-retaining pathway. The other doses reverse the relationship or misapply ceilings, and NSAIDs can worsen retention and kidney function."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-034"), {
  "question": "The clinician plans to increase spironolactone tablets from 100 to 200 mg/day while preserving the usual 100:40 paired relationship. Which furosemide dose matches that plan?",
  "choices": [
    "80 mg/day.",
    "20 mg/day.",
    "200 mg/day.",
    "400 mg/day."
  ],
  "rationale": "The scale factor is 200 ÷ 100 = 2. Furosemide 40 × 2 = 80 mg/day. This is a ratio calculation, not an instruction to increase treatment regardless of potassium, kidney function, blood pressure or weight response."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-035"), {
  "question": "A patient on spironolactone develops hyperkalemia after starting a potassium-containing salt substitute. Which plan is best?",
  "choices": [
    "Stop the unprescribed potassium source, assess urgency and reduce or discontinue spironolactone as indicated while treating hyperkalemia.",
    "Continue both products because the paired diuretic ratio guarantees normal potassium.",
    "Increase spironolactone to correct hyperkalemia.",
    "Delay all potassium testing until ascites has fully resolved."
  ],
  "rationale": "Spironolactone and potassium-containing salt substitutes can contribute to hyperkalemia. The patient requires assessment, treatment and medication adjustment. A dose ratio does not guarantee safe electrolytes; the CaroSpir label requires early and regular potassium monitoring."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-036"), {
  "question": "A patient taking Aldactone tablets 200 mg/day is changed to CaroSpir suspension. Which proposed order creates the greatest avoidable risk?",
  "choices": [
    "Automatically prescribe CaroSpir 200 mg/day as a therapeutically equivalent substitution.",
    "Verify the formulation-specific label before selecting the dose.",
    "Use another formulation if a spironolactone dose above 100 mg is required.",
    "Take CaroSpir consistently with respect to food."
  ],
  "rationale": "CaroSpir is not therapeutically equivalent to Aldactone, and suspension doses above 100 mg can produce higher-than-expected exposure. Its label directs use of another formulation when more than 100 mg is needed. Automatic milligram-for-milligram substitution is unsafe."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-037"), {
  "question": "A patient has symptomatic tense grade 3 ascites. Which treatment best addresses prompt fluid relief?",
  "choices": [
    "Therapeutic paracentesis with indicated albumin and diagnostic testing when required.",
    "Wait for maximum diuretic doses even if they cause hypotension.",
    "Use an NSAID to improve diuretic response.",
    "Omit all infection assessment because draining fluid excludes SBP."
  ],
  "rationale": "Tense ascites is an indication for paracentesis with indicated albumin. Treatment should not be delayed for unsafe dose escalation. Diagnostic sampling remains important when indicated; drainage alone does not exclude infection."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-038"), {
  "question": "After removal of 8 L of ascites, the protocol specifies albumin 8 g/L. How many grams should be administered?",
  "choices": [
    "64 g.",
    "24 g.",
    "8 g.",
    "40 g."
  ],
  "rationale": "Use the total drained volume: 8 L × 8 g/L = 64 g. The 5 L threshold triggers replacement; it is not subtracted. Twenty-four grams would result from incorrectly dosing only the 3 L above the threshold."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-039"), {
  "question": "A patient with AKI and low blood pressure undergoes removal of 4 L of ascites. Which albumin assessment is best?",
  "choices": [
    "Consider albumin because the patient’s circulatory and kidney risks can justify replacement below the usual volume trigger.",
    "Prohibit albumin whenever the volume is 5 L or less.",
    "Decide solely from the low serum albumin concentration without assessing circulation.",
    "Assume a small-volume tap eliminates the need for kidney and pressure follow-up."
  ],
  "rationale": "Smaller-volume drainage does not automatically exclude albumin. AASLD guidance advises strong consideration with hemodynamic instability, AKI or hyponatremia. Volume removed, clinical risks and follow-up should be assessed together."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-040"), {
  "question": "Which albumin calculation after an 8 L tap would underdose the stated 6 to 8 g/L replacement regimen?",
  "choices": [
    "18 to 24 g after subtracting the first 5 L.",
    "48 g using 6 g/L for all 8 L.",
    "64 g using 8 g/L for all 8 L.",
    "48 to 64 g using the total removed volume."
  ],
  "rationale": "The first 5 L is not deducted. For all 8 L, 6 to 8 g/L gives 48 to 64 g. Dosing only the 3 L above the trigger produces 18 to 24 g and underdoses this regimen."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-041"), {
  "question": "Ascites remains difficult to control because diuretics repeatedly cause hypotension and AKI before conventional maximum doses are reached. Which classification best fits?",
  "choices": [
    "Diuretic-intractable ascites, because adverse effects prevent effective dosing.",
    "Diuretic-resistant ascites proven solely by a low starting dose.",
    "Responsive ascites, because a maximum dose has not been attempted.",
    "No refractory category is possible until both drugs reach their ceilings."
  ],
  "rationale": "Adverse effects that preclude effective diuretic dosing fit diuretic-intractable disease. Diuretic resistance describes inadequate response despite appropriate tolerated treatment. Maximum doses should not be forced through kidney injury or hypotension."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-042"), {
  "question": "A patient has persistent ascites despite diuretics. Urine sodium suggests substantial excretion, but weight is unchanged. Which step best evaluates apparent treatment failure?",
  "choices": [
    "Review hidden dietary sodium and confirm intake, urine collection quality, kidney function and medication use.",
    "Diagnose irreversible diuretic resistance from the weight value alone.",
    "Immediately exceed conventional ascites dose ceilings without safety assessment.",
    "Stop dietary counseling because urine sodium excludes excess intake."
  ],
  "rationale": "Persistent fluid despite substantial sodium excretion raises concern that intake offsets the loss. Review hidden sodium and interpret urine data with renal function and collection quality. A single weight or urine result does not establish irreversible resistance or justify unsafe escalation."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-043"), {
  "question": "A patient with refractory ascites is being considered for elective TIPS. Which evaluation is best?",
  "choices": [
    "Assess liver severity, cardiac and pulmonary function, infection, encephalopathy risk and follow-up support with a multidisciplinary team.",
    "Approve TIPS solely because one MELD score is below a fixed cutoff.",
    "Assume TIPS cannot worsen encephalopathy.",
    "Ignore severe heart failure because the procedure treats portal pressure."
  ],
  "rationale": "TIPS selection must consider multiple organ systems and encephalopathy risk. North American guidance favors multidisciplinary assessment over an absolute MELD cutoff. Severe heart failure and other major contraindications can preclude elective TIPS despite a seemingly favorable score."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-044"), {
  "question": "A patient needs repeated taps for refractory ascites and improves after each drainage. Which plan creates the greatest avoidable risk?",
  "choices": [
    "Defer transplant and advanced-therapy assessment indefinitely because each tap briefly relieves symptoms.",
    "Refer for liver-transplant evaluation while continuing symptom relief.",
    "Assess whether TIPS is appropriate after reviewing contraindications.",
    "Coordinate recurrence follow-up, nutrition and the patient’s goals."
  ],
  "rationale": "Temporary symptom relief does not remove the prognostic importance of refractory ascites. Continue relief while evaluating transplant and selected advanced options. Delaying that assessment indefinitely can miss an appropriate treatment pathway."
});
