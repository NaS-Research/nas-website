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

// Reconcile complete clinical cases while preserving existing IDs, keys, difficulty and lesson links.
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-045"), {
  "question": "A patient with cirrhosis has ascitic PMNs of exactly 250 cells/mm³. Culture is pending and no secondary source is apparent. Which interpretation is best?",
  "choices": [
    "The treatment threshold for suspected SBP is met.",
    "The count must exceed 500 cells/mm³ before treatment.",
    "A positive culture is required before treatment.",
    "The threshold is based on serum rather than ascitic neutrophils."
  ],
  "rationale": "The threshold is inclusive: ascitic PMNs ≥250 cells/mm³ warrant prompt treatment of suspected SBP. Culture guides later adjustment, and evaluation for other causes or a secondary source continues."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-046"), {
  "question": "A patient with cirrhosis and ascites is admitted urgently for new AKI but has no fever or abdominal pain. Which infection assessment is best?",
  "choices": [
    "Perform prompt diagnostic paracentesis despite absent abdominal symptoms.",
    "Exclude SBP because fever is absent.",
    "Tap only if the ascites becomes tense enough for therapeutic drainage.",
    "Wait until antibiotics are finished before collecting ascitic fluid."
  ],
  "rationale": "SBP may present with AKI or no obvious abdominal symptoms. Cirrhosis with ascites and an urgent admission warrants prompt diagnostic sampling. Therapeutic drainage need and fever are not prerequisites; obtain cultures before antibiotics when feasible without delaying urgent therapy."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-047"), {
  "question": "Ascitic PMNs are 420 cells/mm³ and the patient is receiving active antibiotics for suspected SBP. Culture later shows no growth. Which plan is best?",
  "choices": [
    "Continue an appropriate treatment course while reassessing response and alternative causes.",
    "Stop antibiotics solely because the culture is negative.",
    "Replace treatment with a low-dose prophylaxis regimen immediately.",
    "Require a positive blood culture before continuing therapy."
  ],
  "rationale": "Culture-negative neutrocytic ascites warrants treatment similarly to culture-positive SBP when other explanations are excluded. Clinical response and the source evaluation guide care. Negative ascitic or blood cultures alone do not justify stopping active treatment."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-048"), {
  "question": "Ascitic culture grows one organism, PMNs are 120 cells/mm³, and the patient has fever and new abdominal pain. Which action is best?",
  "choices": [
    "Treat the suspected infection promptly despite the PMN count being below 250.",
    "Observe without antibiotics solely because PMNs are below 250.",
    "Dismiss the positive culture as contamination without reassessment.",
    "Give only albumin because bacterial growth does not require antibiotics."
  ],
  "rationale": "Symptomatic culture-positive low-PMN fluid requires empiric treatment. Observation with repeat sampling applies to an asymptomatic, clinically stable patient with monomicrobial bacterascites; a numeric threshold must not override concerning infection findings."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-049"), {
  "question": "A patient has community-acquired SBP without major resistance risk or a severe beta-lactam allergy. Which initial approach is appropriate?",
  "choices": [
    "An active IV third-generation cephalosporin, adjusted later to culture and response.",
    "Ciprofloxacin 500 mg orally once daily as the sole treatment because it is a prophylaxis option.",
    "Albumin alone until a culture result is available.",
    "No antibiotics unless abdominal rigidity develops."
  ],
  "rationale": "Ceftriaxone or cefotaxime is common initial community-acquired treatment. Active infection requires treatment exposure, not a preventive oral dose. Albumin is adjunctive, and rigid peritoneal signs are not required for SBP."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-050"), {
  "question": "An 80 kg patient is prescribed SBP albumin using 1.5 g/kg on day 1 and 1 g/kg on day 3. What are the doses?",
  "choices": [
    "120 g on day 1 and 80 g on day 3.",
    "80 g on day 1 and 120 g on day 3.",
    "120 g every day for three days.",
    "8 g on day 1 and 8 g on day 3."
  ],
  "rationale": "Day 1: 80 × 1.5 = 120 g. Day 3: 80 × 1 = 80 g. Use the confirmed dosing weight and protocol. This is an adjunct to antibiotics and is not the per-liter regimen used after large-volume paracentesis."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-051"), {
  "question": "After 48 hours of SBP antibiotics, ascitic PMNs fall from 1,000 to 850 cells/mm³ and symptoms persist. Which assessment is best?",
  "choices": [
    "The 15% decline suggests failure; reassess resistance and a secondary source.",
    "The 15% decline proves adequate response because any fall is sufficient.",
    "The count has fallen by 85%, so no further evaluation is needed.",
    "Stop treatment because the count is below its starting value."
  ],
  "rationale": "The decline is (1,000 − 850) ÷ 1,000 × 100 = 15%. A decline below 25% at about 48 hours with persistent illness suggests failure. Reassess active coverage and investigate secondary peritonitis; any numerical fall is not proof of recovery."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-052"), {
  "question": "SBP develops during a hospital stay after recent broad-spectrum antibiotics and a prior resistant isolate. Which plan is best?",
  "choices": [
    "Choose empiric coverage using acquisition, prior exposure, prior isolates and local resistance, then narrow when possible.",
    "Use the same narrow regimen for every patient without checking resistance risk.",
    "Continue the existing oral prophylaxis dose as treatment.",
    "Delay antibiotics until all susceptibility data return."
  ],
  "rationale": "Hospital acquisition and prior antimicrobial or resistant-organism exposure may make a routine community regimen inadequate. Begin active empiric coverage informed by local guidance and refine with reliable culture data. Prior prophylaxis is not adequate treatment, and urgent therapy should not wait."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-053"), {
  "question": "A patient has recovered from a first SBP episode and still has ascites. Which prevention plan is best?",
  "choices": [
    "Arrange individualized daily secondary prophylaxis with monitoring and reassessment.",
    "Wait for three more SBP episodes before discussing prevention.",
    "Use no follow-up because treatment removed future SBP risk.",
    "Automatically repeat a full IV treatment course every month."
  ],
  "rationale": "A prior SBP episode is a secondary-prophylaxis indication. Select a daily regimen with the specialist, considering resistance, adverse effects, organ function and persistent ascites. Prevention differs from repeated full treatment courses and requires ongoing review."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-054"), {
  "question": "A patient has ascitic protein 1.0 g/dL, no previous SBP and no GI bleeding. Kidney function and liver severity are not yet known. Which prophylaxis decision is best?",
  "choices": [
    "Assess renal and liver risk before deciding whether primary prophylaxis is justified.",
    "Start indefinite antibiotics solely from the protein value.",
    "Use the protein value to diagnose active SBP.",
    "Assume primary prophylaxis can never be considered without a prior SBP episode."
  ],
  "rationale": "Low ascitic protein alone does not establish active infection or automatically mandate primary prophylaxis. Guidance reserves consideration for selected patients with additional renal dysfunction or advanced liver failure, after reviewing risks and benefits. Prior SBP defines secondary prevention."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-055"), {
  "question": "A patient with cirrhosis has acute upper GI bleeding but no established SBP. Which antibiotic plan matches the short-course preventive indication?",
  "choices": [
    "Ceftriaxone 1 g IV every 24 hours for up to 7 days, with reassessment.",
    "Ceftriaxone indefinitely solely because cirrhosis persists.",
    "Albumin alone as the antibiotic preventive regimen.",
    "Withhold prophylaxis unless ascitic culture becomes positive."
  ],
  "rationale": "AASLD recommends short-course ceftriaxone prophylaxis for cirrhosis with upper GI hemorrhage, for a maximum of 7 days. A positive culture is not required for this preventive indication. The dose and duration differ from active SBP treatment and long-term oral secondary prevention."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-056"), {
  "question": "A patient taking spironolactone is being considered for trimethoprim-sulfamethoxazole SBP prophylaxis. Which safety plan is best?",
  "choices": [
    "Review kidney function, potassium, interactions and the ongoing indication before choosing and monitoring the regimen.",
    "Assume preventive dosing cannot cause hyperkalemia.",
    "Skip electrolyte monitoring because ascites is present.",
    "Choose a fixed regimen regardless of allergy or renal function."
  ],
  "rationale": "Trimethoprim-sulfamethoxazole can cause hyperkalemia and needs renal and medication review; spironolactone adds potassium risk. Prophylaxis should be individualized and monitored, including its continued indication. A preventive dose does not eliminate adverse effects."
});

// Review complete HRS-AKI cases while preserving IDs, keys, difficulty and lesson links.
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-057"), {
  "question": "Creatinine rises from 0.8 to 1.1 mg/dL within 48 hours in a patient with cirrhosis. Which interpretation is best?",
  "choices": [
    "The 0.3 mg/dL rise meets an AKI criterion; its cause still needs evaluation.",
    "AKI is excluded because creatinine remains below 1.5 mg/dL.",
    "The change proves HRS-AKI without volume or source assessment.",
    "The rise is 50%, so only the relative-rise criterion is met."
  ],
  "rationale": "The absolute rise is 1.1 − 0.8 = 0.3 mg/dL, which meets the 48-hour AKI criterion. The relative rise is 0.3 ÷ 0.8 = 37.5%, not 50%. Low creatinine can be misleading in cirrhosis; the AKI phenotype requires further evaluation."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-058"), {
  "question": "A patient with cirrhosis, ascites and AKI is euvolemic after assessment. Is a routine 48-hour albumin infusion required before considering HRS-AKI?",
  "choices": [
    "No; current criteria use prompt clinical assessment and response to resuscitation when it is indicated.",
    "Yes; every patient must receive albumin for 48 hours regardless of volume.",
    "Yes; fluid overload makes the diagnostic albumin infusion mandatory.",
    "No; AKI alone proves HRS without evaluating alternative causes."
  ],
  "rationale": "ADQI-ICA 2024 recommends against systematic 48-hour albumin as a diagnostic prerequisite. Assess volume and alternative causes. When volume resuscitation is clinically indicated, absence of improvement within 24 hours contributes to the HRS-AKI criteria; euvolemia does not prove the diagnosis by itself."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-059"), {
  "question": "A patient with cirrhosis and ascites has pre-existing diabetic CKD and new AKI. Which diagnostic approach is best?",
  "choices": [
    "Evaluate competing causes and consider superimposed HRS-AKI or mixed injury.",
    "Exclude HRS-AKI solely because CKD existed before admission.",
    "Diagnose HRS-AKI solely from the cirrhosis history.",
    "Treat proteinuria as proof that no hemodynamic component can coexist."
  ],
  "rationale": "Pre-existing CKD, proteinuria or tubular injury does not automatically exclude HRS-AKI in current consensus criteria. Determine the predominant explanation and assess possible coexistence. Neither cirrhosis nor CKD alone defines the acute cause."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-060"), {
  "question": "Which decision creates the greatest avoidable risk when evaluating AKI in cirrhosis?",
  "choices": [
    "Label every creatinine rise as HRS without evaluating shock, obstruction or nephrotoxic exposure.",
    "Assess volume and treat true depletion when indicated.",
    "Investigate infection and review medications promptly.",
    "Consider HRS-AKI alongside other causes and revise the assessment with new evidence."
  ],
  "rationale": "HRS-AKI requires a clinical evaluation and no strong evidence for another primary explanation. Shock, obstruction and drug-related injury may require different urgent care. Volume assessment, infection treatment, medication review and reconsideration of mixed causes support the diagnostic process."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-061"), {
  "question": "An adult with suspected HRS-AKI has worsening respiratory symptoms and SpO₂ of 88%. Which TERLIVAZ decision is best?",
  "choices": [
    "Do not initiate during hypoxia; urgently evaluate oxygenation and the clinical cause.",
    "Start immediately because HRS removes the respiratory contraindication.",
    "Start if albumin is given first, regardless of oxygenation.",
    "Start without oximetry because respiratory monitoring is optional."
  ],
  "rationale": "The US label contraindicates TERLIVAZ during hypoxia or worsening respiratory symptoms; SpO₂ below 90% is an explicit safety threshold. Assess volume and respiratory status and discuss suitable alternatives. Albumin and HRS severity do not remove the contraindication."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-062"), {
  "question": "On day 4 of US TERLIVAZ therapy, creatinine is unchanged from its pretreatment baseline. Which labeled dose decision applies?",
  "choices": [
    "Discontinue TERLIVAZ rather than escalating the dose.",
    "Automatically double the dose because the decline is less than 30%.",
    "Continue indefinitely until creatinine improves.",
    "Use the SBP PMN 25% rule to decide the dose."
  ],
  "rationale": "The day-4 stop branch takes priority when creatinine is at or above the pretreatment baseline. Dose increase may be considered only when creatinine is below baseline but has fallen less than 30%. International consensus titration and SBP cell-count rules are different pathways."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-063"), {
  "question": "Pretreatment creatinine is 3.0 mg/dL and day-4 creatinine is 2.1 mg/dL on US TERLIVAZ. Safety assessment permits continued treatment. Which decision is best?",
  "choices": [
    "Continue 0.85 mg IV every 6 hours because creatinine has fallen exactly 30%.",
    "Increase to 1.7 mg every 6 hours because a 30% fall is insufficient.",
    "Discontinue because creatinine remains above 1.5 mg/dL.",
    "Continue for at least 30 days regardless of response."
  ],
  "rationale": "The decline is (3.0 − 2.1) ÷ 3.0 × 100 = 30%. A decrease of at least 30% meets the US day-4 continuation branch. Continue safety monitoring and apply the labeled success and maximum-duration stopping rules; remaining above 1.5 mg/dL alone is not the day-4 failure rule."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-064"), {
  "question": "Which proposal creates the greatest avoidable risk when selecting TERLIVAZ?",
  "choices": [
    "Start it despite ongoing mesenteric ischemia because kidney failure is severe.",
    "Assess baseline oxygenation and volume before treatment.",
    "Avoid use during hypoxia and review alternatives with specialists.",
    "Coordinate transplant evaluation and watch for ischemic symptoms during therapy."
  ],
  "rationale": "Ongoing mesenteric, coronary or peripheral ischemia is a labeled contraindication. Vasoconstriction can cause further ischemic harm, and treatment should stop if ischemic adverse reactions develop. Respiratory assessment and transplant-aware monitoring are necessary parts of care."
});

// Review complete variceal-prevention and bleeding cases; preserve stable assessment identities.
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-065"), {
  "question": "A patient has compensated cirrhosis with established CSPH and no NSBB contraindication. Which drug is preferred by Baveno VII for preventing decompensation?",
  "choices": [
    "Carvedilol",
    "Metoprolol",
    "Amlodipine",
    "Hydrochlorothiazide"
  ],
  "rationale": "Carvedilol is the preferred NSBB in compensated CSPH. It reduces portal inflow through beta blockade and intrahepatic resistance through alpha-1 effects. The other drugs do not provide equivalent NSBB portal protection; treatment still requires dosing and safety assessment."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-066"), {
  "question": "A compensated patient has high-risk esophageal varices and a contraindication to NSBB therapy. Which first-bleed prevention is appropriate?",
  "choices": [
    "Endoscopic variceal ligation",
    "Metoprolol as equivalent portal therapy",
    "Daily IV octreotide indefinitely",
    "Routine TIPS solely because varices exist"
  ],
  "rationale": "EVL is recommended to prevent a first bleed from high-risk esophageal varices when NSBBs cannot be used. A selective beta blocker is not equivalent, the acute IV vasoactive regimen is not chronic prevention, and routine primary-prophylaxis TIPS is not the indicated pathway."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-067"), {
  "question": "An eligible patient is already taking an NSBB for compensated CSPH. Screening endoscopy would not change management. Which approach is best?",
  "choices": [
    "Continue indicated treatment and follow-up without screening solely to detect varices.",
    "Stop the NSBB until all varices are visualized.",
    "Add ligation universally even if there is no endoscopic indication.",
    "Replace the NSBB with a PPI for portal-pressure reduction."
  ],
  "rationale": "Baveno VII says screening solely for varices is unnecessary in compensated patients already receiving an NSBB to prevent decompensation when findings would not change management. This does not remove endoscopy for bleeding or another indication, or routine clinical follow-up."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-068"), {
  "question": "After a controlled esophageal variceal bleed, a stable patient can tolerate an NSBB and EVL. Which secondary-prevention plan is first line?",
  "choices": [
    "Combine an NSBB with endoscopic variceal ligation.",
    "Use a PPI alone.",
    "Use monthly octreotide depot alone.",
    "Stop prevention once hemoglobin recovers."
  ],
  "rationale": "Combined NSBB and EVL is first-line secondary prevention when both are feasible. This differs from primary prevention with an NSBB or EVL. PPI or depot octreotide alone and ending prevention after hemoglobin recovery do not address the recurrent-bleed risk."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-069"), {
  "question": "A patient with ascites has persistent systolic pressure of 86 mmHg while taking an NSBB. Which action is best?",
  "choices": [
    "Reduce or discontinue the NSBB and assess circulation.",
    "Increase the dose to reach the heart-rate target.",
    "Continue unchanged because low pressure proves efficacy.",
    "Replace it with metoprolol for equivalent portal protection."
  ],
  "rationale": "Persistent systolic pressure <90 mmHg is a Baveno VII reason to reduce or stop NSBBs in ascites. Assess the cause and reconsider treatment after recovery. A heart-rate goal cannot override hypotension, and metoprolol is not equivalent portal therapy."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-070"), {
  "question": "NSBB therapy was held during HRS-AKI. Blood pressure has returned to baseline and HRS-AKI has resolved. Which plan is reasonable?",
  "choices": [
    "Reassess eligibility and restart or retitrate the NSBB if tolerated.",
    "Treat the hold as a permanent ban regardless of recovery.",
    "Resume the maximum prior dose without checking circulation.",
    "Abandon variceal prevention permanently."
  ],
  "rationale": "Baveno VII permits reinitiation or retitration after recovery. Check current contraindications, pressure, kidney function and tolerance. If intolerance persists, EVL can provide prevention; an acute hold should not automatically end all preventive care."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-071"), {
  "question": "A patient considered for carvedilol has bronchial asthma. Which interpretation of guidance preference is correct?",
  "choices": [
    "The US label contraindication still applies; choose an appropriate alternative prevention strategy.",
    "Portal guidance removes every labeled contraindication.",
    "Carvedilol is beta-1 selective, so bronchospasm is impossible.",
    "A normal pulse eliminates asthma-related risk."
  ],
  "rationale": "Carvedilol is nonselective and its US label contraindicates bronchial asthma. Guidance-supported off-label portal use does not erase that restriction. For high-risk esophageal varices, EVL is an alternative when NSBBs cannot be used."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-072"), {
  "question": "Which proposal creates the greatest avoidable risk in NSBB management?",
  "choices": [
    "Escalate through shock solely to reach a resting heart rate of 55 to 60.",
    "Reassess blood pressure and kidney function before titration.",
    "Consider EVL if a prevention-indicated patient cannot tolerate NSBBs.",
    "Check current liver state and the prevention indication."
  ],
  "rationale": "Escalating through shock can worsen perfusion. The traditional resting heart-rate target applies only when tolerated; pressure, kidney function and contraindications take priority. The other choices support appropriate assessment and prevention."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-073"), {
  "question": "Variceal hemorrhage is suspected in a patient with cirrhosis. Which treatment should begin before endoscopic confirmation?",
  "choices": [
    "Indicated resuscitation, vasoactive therapy and antibiotic prophylaxis.",
    "Oral beta blockade as the sole hemostatic treatment.",
    "IM octreotide depot as the acute IV replacement.",
    "Observation until cultures confirm infection."
  ],
  "rationale": "The acute bundle starts on suspicion. Antibiotics are prophylactic in this bleeding context and do not wait for positive cultures. Oral NSBBs and IM depot octreotide are not substitutes for acute IV treatment and urgent endoscopic control."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-074"), {
  "question": "A patient with suspected variceal hemorrhage is actively vomiting blood and has altered consciousness. Which airway plan is best?",
  "choices": [
    "Intubate before endoscopy with urgent critical-care support.",
    "Proceed with unprotected endoscopy regardless of aspiration risk.",
    "Delay all stabilization until a morning elective procedure.",
    "Give an oral NSBB to protect the airway."
  ],
  "rationale": "Baveno VII recommends intubation before endoscopy with altered consciousness or active hematemesis. Stabilization and endoscopy require coordinated urgent care. Neither delaying care nor oral beta blockade addresses aspiration risk."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-075"), {
  "question": "A verified octreotide infusion contains 500 mcg in a final volume of 100 mL. The prescribed rate is 50 mcg/hour. What pump rate is correct?",
  "choices": [
    "10 mL/hour",
    "1 mL/hour",
    "50 mL/hour",
    "100 mL/hour"
  ],
  "rationale": "Concentration = 500 mcg ÷ 100 mL = 5 mcg/mL. Rate = 50 mcg/hour ÷ 5 mcg/mL = 10 mL/hour. Confirm the immediate-release IV product and preparation protocol; this arithmetic does not establish compatibility or stability."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-076"), {
  "question": "A hemodynamically stabilized patient with variceal bleeding has no cardiovascular reason for a higher target. Which Baveno VII red-cell strategy is appropriate?",
  "choices": [
    "Use a conservative hemoglobin target of 7 to 8 g/dL.",
    "Routinely transfuse to at least 12 g/dL.",
    "Withhold resuscitation even if shock recurs.",
    "Transfuse only to normalize INR."
  ],
  "rationale": "The usual Baveno VII hemoglobin target is 7 to 8 g/dL, with individualization for cardiovascular disease, age, instability and ongoing bleeding. It is not a rule to withhold necessary resuscitation. Red cells do not normalize INR, and routine overtransfusion can aggravate portal pressure."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-077"), {
  "question": "A patient with Child-Pugh C cirrhosis scored 12 has an esophageal variceal bleed initially controlled with drugs and EVL. Which TIPS pathway should be assessed?",
  "choices": [
    "Preemptive covered TIPS within 72 hours, ideally within 24.",
    "Wait for another uncontrolled bleed before considering TIPS.",
    "Routine outpatient primary-prophylaxis TIPS months later.",
    "Balloon tamponade as permanent definitive treatment."
  ],
  "rationale": "Child-Pugh C below 14 points meets a Baveno VII high-risk preemptive criterion. This pathway can apply after initial hemostasis and differs from salvage TIPS for failed control. Candidacy still requires expert evaluation; tamponade is a bridge."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-078"), {
  "question": "Bleeding continues despite vasoactive therapy and endoscopic control attempts. Which escalation is best?",
  "choices": [
    "Activate salvage covered-TIPS assessment; use a temporary bridge if needed.",
    "Repeat transfusions indefinitely without definitive escalation.",
    "Use an esophageal balloon as a permanent cure.",
    "Switch to oral carvedilol as the sole emergency treatment."
  ],
  "rationale": "Failure of combined pharmacologic and endoscopic therapy calls for salvage covered TIPS in an appropriate candidate. Balloon tamponade or a self-expanding esophageal stent can bridge to definitive care; neither replaces it. Delayed escalation permits continued hemorrhage."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-079"), {
  "question": "A patient scored Child-Pugh B 8 has active variceal bleeding at initial endoscopy. Which interpretation is correct?",
  "choices": [
    "The score and active bleeding meet a Baveno VII preemptive-TIPS criterion.",
    "Any Child-Pugh B score qualifies regardless of active bleeding.",
    "Only failure of all endoscopic therapy allows TIPS assessment.",
    "A score of 8 alone mandates permanent balloon tamponade."
  ],
  "rationale": "Baveno VII includes Child-Pugh B >7 with active bleeding at initial endoscopy as a preemptive criterion. Child-Pugh B 7 or a higher B score without that finding does not meet this particular criterion. Other eligibility pathways and contraindication assessment remain relevant."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-080"), {
  "question": "A patient with acute variceal bleeding has an elevated INR from cirrhosis. Which proposal creates the greatest avoidable risk?",
  "choices": [
    "Give routine large-volume plasma solely to normalize INR.",
    "Treat portal pressure and obtain indicated endoscopic control.",
    "Individualize hemostatic support if bleeding remains uncontrolled.",
    "Assess ongoing bleeding and perfusion alongside laboratory trends."
  ],
  "rationale": "Routine plasma solely to correct INR is not recommended in acute variceal bleeding; INR does not capture the full hemostatic balance and plasma can worsen volume and portal pressure. This does not prohibit individualized hemostatic support when clinically indicated."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-081"), {
  "question": "Which complication should be discussed when counseling about TIPS?",
  "choices": [
    "Worsening hepatic encephalopathy or heart failure.",
    "Guaranteed elimination of transplant need.",
    "Universal improvement in cardiac function.",
    "Permanent cure of the underlying cirrhosis."
  ],
  "rationale": "TIPS lowers portal pressure but can increase encephalopathy and cardiac decompensation risk. It does not cure the liver disease or guarantee that transplantation is unnecessary. Select candidates and plan follow-up with the specialist team."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-082"), {
  "question": "A patient is being considered for elective TIPS and has severe symptomatic heart failure. Which plan is best?",
  "choices": [
    "Obtain specialist cardiopulmonary assessment because severe heart failure can preclude elective TIPS.",
    "Place TIPS without cardiac evaluation because it only affects portal veins.",
    "Assume a normal serum sodium excludes cardiac risk.",
    "Use the esophageal-varix size alone to establish procedural safety."
  ],
  "rationale": "North American TIPS guidance lists severe heart failure as a contraindication to elective TIPS and recommends cardiopulmonary assessment. Increased venous return can precipitate cardiac decompensation. Varix size or sodium does not establish cardiac safety."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-083"), {
  "question": "A high-risk bleeding patient meets preemptive-TIPS criteria but has hepatic encephalopathy at admission. Which interpretation is best?",
  "choices": [
    "Admission encephalopathy alone is not an automatic contraindication to the preemptive pathway.",
    "Any encephalopathy permanently prohibits every TIPS indication.",
    "Encephalopathy proves that all contraindications are absent.",
    "The encephalopathy makes tamponade a durable cure."
  ],
  "rationale": "Baveno VII distinguishes admission encephalopathy in eligible high-risk acute bleeding from refractory overt encephalopathy in elective selection. Admission HE alone does not automatically exclude preemptive TIPS, but the team must still assess risk and treat the encephalopathy."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-084"), {
  "question": "A patient rebleeds despite tolerated NSBB therapy and EVL. Which next strategy is supported?",
  "choices": [
    "Assess TIPS with the multidisciplinary team.",
    "Stop all preventive treatment because the combination was attempted.",
    "Use a PPI alone as definitive portal prevention.",
    "Treat a balloon tamponade device as permanent outpatient therapy."
  ],
  "rationale": "Baveno VII recommends TIPS for recurrent variceal hemorrhage despite NSBB plus EVL. Assess liver and cardiopulmonary risk and the transplant pathway. PPI monotherapy and permanent tamponade do not provide the indicated definitive portal strategy."
});

// Review complete hepatic encephalopathy cases; preserve stable assessment identities.
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-085"), {
  "question": "A patient with cirrhosis develops confusion. Which approach best establishes whether overt HE is responsible?",
  "choices": [
    "Assess cognition and competing causes while searching for precipitants.",
    "Diagnose HE solely from an elevated ammonia value.",
    "Exclude HE solely because a measured ammonia value is normal.",
    "Diagnose overt HE from isolated asterixis without altered behavior or alertness."
  ],
  "rationale": "HE is a clinical diagnosis in the appropriate setting after evaluating competing causes. Elevated ammonia is not diagnostic; a normal value prompts reconsideration rather than automatic exclusion. Isolated asterixis is insufficient to establish overt HE."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-086"), {
  "question": "A patient with recurrent HE presents with fever, abdominal discomfort and ascites. Which plan is best?",
  "choices": [
    "Evaluate infection, including diagnostic paracentesis, and treat HE and the identified trigger.",
    "Treat constipation alone and defer infection assessment until ammonia normalizes.",
    "Assume all confusion is caused by lactulose nonadherence without reviewing the history.",
    "Stop investigation once the ammonia concentration is found to be elevated."
  ],
  "rationale": "Infection, including SBP, can precipitate HE and can independently alter mental status. Hospitalized ascites with suspected infection warrants diagnostic paracentesis and appropriate infection care. HE treatment proceeds alongside trigger evaluation; ammonia does not exclude other causes."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-087"), {
  "question": "A confused patient with cirrhosis has a new unilateral arm weakness. Which plan is safest?",
  "choices": [
    "Obtain urgent neurological assessment and indicated brain imaging while evaluating HE.",
    "Attribute the focal deficit to HE and omit neurological evaluation.",
    "Wait for serial ammonia values before assessing possible stroke or bleeding.",
    "Treat with lactulose alone until the focal deficit resolves."
  ],
  "rationale": "New focal findings suggest a neurological emergency or coexisting disease and require urgent evaluation. Guidance against routine imaging in typical HE without focal findings does not apply here. HE and another disorder can coexist."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-088"), {
  "question": "After 60 hours of adequate HE therapy and initial trigger treatment, a patient remains markedly confused. Which approach is best?",
  "choices": [
    "Reassess alternative causes, missed precipitants and possible portosystemic shunts.",
    "Escalate catharsis indefinitely despite adequate soft stools and falling intake.",
    "Use persistent ammonia elevation as the only explanation for nonresponse.",
    "Assume a TIPS history eliminates the need to look for infection."
  ],
  "rationale": "The ACG guideline calls for reassessment after 48 to 72 hours of adequate treatment without mental recovery. Missed infection, medications, metabolic problems, neurological disease or shunts may explain persistent symptoms. Deterioration requires immediate assessment rather than waiting for that interval."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-089"), {
  "question": "A prescription calls for 30 g lactulose using a verified 10 g/15 mL oral solution. What volume provides that dose?",
  "choices": [
    "45 mL",
    "15 mL",
    "30 mL",
    "90 mL"
  ],
  "rationale": "Volume = 30 g × 15 mL ÷ 10 g = 45 mL. Confirm the product, route and prescribed frequency. Maintenance dosing is adjusted to about 2 to 3 soft stools daily and clinical response; this calculation does not authorize continuing an acute hourly schedule."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-090"), {
  "question": "A caregiver asks how to adjust maintenance lactulose after recovery from overt HE. Which instruction is best?",
  "choices": [
    "Follow the prescribed plan for about 2 to 3 soft stools daily and report profuse diarrhea, weakness or recurrent confusion.",
    "Increase the dose until every bowel movement is watery.",
    "Use the ammonia concentration alone to decide each dose.",
    "Stop prevention immediately after the first day of normal cognition."
  ],
  "rationale": "Stool consistency and frequency, cognition, hydration and electrolytes guide the plan. Excess diarrhea can precipitate dehydration and HE. Recurrence prevention is not automatically stopped after early recovery, and ammonia does not provide a maintenance titration target."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-091"), {
  "question": "An obtunded patient with severe HE cannot swallow safely. Which administration plan is appropriate?",
  "choices": [
    "Assess airway protection and use a supervised enteral or labeled rectal lactulose plan as appropriate.",
    "Force the oral solution despite aspiration risk.",
    "Assume a nasogastric tube alone prevents aspiration.",
    "Replace lactulose with a soap cleansing enema because all enemas are equivalent."
  ],
  "rationale": "Route selection must account for airway and aspiration risk. Supervised enteral administration or a labeled lactulose retention enema can be selected after assessment; neither an unprotected oral dose nor a tube alone guarantees safety. Soap or alkaline cleansing enemas are not interchangeable."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-092"), {
  "question": "A patient on lactulose has profuse diarrhea, hypernatremia and hypokalemia. Which interpretation is correct?",
  "choices": [
    "Excess catharsis can worsen dehydration and precipitate recurrent HE.",
    "These findings prove that the lactulose dose should always be increased.",
    "Watery stool guarantees adequate hydration and excludes HE recurrence.",
    "A normal ammonia value makes electrolyte correction unnecessary."
  ],
  "rationale": "The book and lactulose label describe fluid loss, hypernatremia and hypokalemia with excessive dosing. Reassess dosing and correct the clinical problem. Stool output or ammonia cannot establish safe hydration or remove the need for electrolyte care."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-093"), {
  "question": "An adult has recurrent overt HE despite an appropriate lactulose maintenance plan. Which rifaximin schedule matches the US labeled HE indication?",
  "choices": [
    "550 mg orally twice daily for recurrence-risk reduction.",
    "550 mg orally three times daily for a fixed 14-day HE course.",
    "200 mg orally three times daily for a fixed 3-day HE course.",
    "400 mg intravenously every 8 hours for labeled adult HE prevention."
  ],
  "rationale": "The US HE recurrence-prevention dose is 550 mg orally twice daily. The 550 mg three-times-daily 14-day schedule is for IBS-D and the 200 mg three-times-daily 3-day schedule is for travelers’ diarrhea. Rifaximin is an oral tablet, not the proposed IV regimen."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-094"), {
  "question": "A clinician proposes adding rifaximin to lactulose during acute overt HE. How should the evidence be described?",
  "choices": [
    "ACG 2026 conditionally suggests the combination; acute treatment is distinct from the US labeled recurrence-prevention indication.",
    "The US label approves rifaximin as the sole emergency replacement for stabilization.",
    "ACG 2026 prohibits rifaximin during every acute HE episode.",
    "The combination removes the need to assess infection or bleeding."
  ],
  "rationale": "ACG 2026 conditionally suggests adding rifaximin for acute overt HE with low-certainty evidence. The US label addresses adult recurrence-risk reduction. The combination does not replace airway assessment, lactulose titration or treatment of precipitants."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-095"), {
  "question": "A patient with Child-Pugh C cirrhosis takes rifaximin and cyclosporine. Which assessment is best?",
  "choices": [
    "Recognize increased rifaximin exposure and review the combined risk with the treating team.",
    "Assume low usual absorption rules out any clinically relevant interaction.",
    "Describe Child-Pugh C as an absolute rifaximin label contraindication.",
    "Switch automatically to long-term neomycin without reviewing hearing or kidney risk."
  ],
  "rationale": "Severe hepatic impairment increases rifaximin exposure and requires caution; P-glycoprotein inhibition by cyclosporine can further increase exposure. The label does not make Child-Pugh C an absolute contraindication. An automatic long-term neomycin substitution introduces its own substantial toxicity concerns."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-096"), {
  "question": "An adult takes rifaximin with warfarin for separate indications. Which monitoring plan is appropriate?",
  "choices": [
    "Monitor INR and prothrombin time and adjust warfarin if required.",
    "Stop INR monitoring because rifaximin is usually minimally absorbed.",
    "Double warfarin automatically whenever rifaximin is prescribed.",
    "Replace INR monitoring with serial ammonia concentrations."
  ],
  "rationale": "The rifaximin label reports INR changes with warfarin and recommends INR/prothrombin-time monitoring and warfarin adjustment when needed. There is no universal automatic dose change. Ammonia does not measure anticoagulation intensity."
});

// Distinct integrated cases; preserve stable assessment identities.
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-113"), {
  "question": "An adult with cirrhosis has worsening ascites, falling blood pressure, rising creatinine and recent systemic NSAID use. What is the best next approach?",
  "choices": [
    "Promptly reassess circulation, volume, infection and nephrotoxins and review diuretic safety.",
    "Automatically double diuretics because ascites always proves adequate kidney perfusion.",
    "Give every patient 48 hours of albumin regardless of congestion or the clinical assessment.",
    "Continue the NSAID because an elevated INR prevents kidney injury."
  ],
  "rationale": "Visible ascites does not establish adequate effective circulating volume or exclude AKI. Reassess triggers, hemodynamics, nephrotoxins and treatment safety. Contemporary HRS-AKI evaluation does not mandate indiscriminate 48-hour albumin exposure, and INR does not protect the kidney from NSAIDs."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-114"), {
  "question": "After recovery from overt HE, a caregiver asks what belongs in the home plan. Which answer is best?",
  "choices": [
    "Written lactulose and soft-stool instructions, hydration and emergency warnings, accessible medicines and assigned follow-up.",
    "Only an ammonia testing schedule, without clinical or stool assessment.",
    "A rule to continue hourly lactulose indefinitely whenever cognition is normal.",
    "Immediate withdrawal of all recurrence prevention after the first normal conversation."
  ],
  "rationale": "The transition plan connects clinical cognition, about 2 to 3 soft stools daily, safe hydration, medication access, caregiver understanding and follow-up. Excess diarrhea can precipitate HE. Ammonia alone cannot guide maintenance dosing or justify stopping prevention."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-115"), {
  "question": "An adult received short-course antibiotic prophylaxis during an acute variceal bleed. No prior SBP or separate qualifying primary-prevention indication has been established. Which discharge interpretation is correct?",
  "choices": [
    "Review the bleeding-course stop plan and assess SBP prophylaxis as a separate indication.",
    "Continue the bleeding antibiotic lifelong solely because the patient has cirrhosis.",
    "Assume bleeding prophylaxis proves that the patient previously had SBP.",
    "Use chronic SBP prophylaxis as a replacement for variceal secondary prevention."
  ],
  "rationale": "Antibiotics during acute gastrointestinal bleeding and long-term SBP prevention have different indications. A prior SBP episode or qualifying primary-prevention assessment requires a separate plan that considers local resistance and patient factors. Neither substitutes for indicated variceal secondary prevention."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-116"), {
  "question": "An adult with cirrhosis develops hematemesis and shock. Which plan takes priority?",
  "choices": [
    "Emergency stabilization with the acute bleeding pathway, early vasoactive and antibiotic treatment and urgent endoscopic planning.",
    "Manage the event at home using only the usual oral nonselective beta blocker.",
    "Wait for an outpatient surveillance ultrasound before addressing circulation.",
    "Increase lactulose alone because any acute event in cirrhosis is necessarily HE."
  ],
  "rationale": "Hematemesis with shock requires emergency assessment, resuscitation, airway review when indicated and the acute variceal bleeding pathway. Early vasoactive therapy and antibiotic prophylaxis accompany endoscopic care. Maintenance medicines, surveillance and HE therapy cannot substitute for stabilization."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-117"), {
  "question": "Rifaximin is prescribed for HE recurrence prevention, but the patient cannot obtain it because coverage is unresolved. What is the best transition action?",
  "choices": [
    "Contact the treating team to secure access or document an explicit interim prevention plan and caregiver instructions.",
    "Document the prescription as proof that the patient has a reliable supply.",
    "Replace the drug automatically with long-term neomycin without clinical review.",
    "Stop the entire lactulose plan while waiting for insurance, without contacting the team."
  ],
  "rationale": "A prescription and an obtainable supply are different steps. Resolve access with the treating team or establish an explicit interim plan; continue individualized HE and trigger management. Automatic substitution or withdrawal introduces clinical risk and does not close the handoff."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-118"), {
  "question": "After AKI improves, an individualized diuretic plan and laboratory follow-up are ordered. What remaining gap most directly threatens continuity?",
  "choices": [
    "No named team will review the results, contact the patient or adjust treatment.",
    "The patient has written emergency contact details.",
    "The regimen includes a patient-specific kidney and electrolyte reassessment plan.",
    "The caregiver can explain the intended medicines and warning signs."
  ],
  "rationale": "An order alone does not establish result review or action. Assign responsibility and agreed timing so kidney, electrolyte and volume findings lead to patient contact and appropriate treatment decisions. The other options describe protective transition steps."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-119"), {
  "question": "An adult with established cirrhosis has achieved HCV cure and remains eligible to benefit from HCC treatment. Which surveillance plan is appropriate?",
  "choices": [
    "Continue ultrasound plus AFP approximately every 6 months.",
    "Stop all HCC surveillance solely because HCV is cured.",
    "Use AFP alone as a complete substitute for surveillance imaging.",
    "Delay surveillance until aminotransferases rise or cancer symptoms occur."
  ],
  "rationale": "HCV cure reduces risk but does not erase the HCC risk of established cirrhosis. Eligible patients continue semiannual ultrasound plus AFP surveillance; AFP alone and symptom-triggered testing do not replace that plan. Surveillance benefit and eligibility must remain under review."
});
Object.assign(cirrhosisDecompensatedLiverDiseaseQuestionBank.find((question) => question.id === "cirrhosis-decompensated-120"), {
  "question": "An adult with recurrent HE and ascites has a modest MELD score and substantial caregiver burden. Which comprehensive plan is best?",
  "choices": [
    "Arrange timely hepatology and transplant evaluation with nutrition, symptom support and goals-of-care discussions.",
    "Defer every transplant assessment until one fixed high MELD threshold is reached.",
    "Exclude palliative support solely because transplant evaluation is being considered.",
    "Replace complication treatment with goals-of-care discussion alone."
  ],
  "rationale": "Recurrent decompensation can justify transplant evaluation despite a modest MELD score. Nutrition, frailty and caregiver support remain part of care. Palliative support can accompany disease-directed treatment and transplant evaluation; neither a score nor a goals discussion replaces patient-specific complication management."
});
