const concepts = [
  ["virus-natural-history", "HCV is an enveloped positive-sense RNA virus whose error-prone replication creates diversity, chronic infection, fibrosis, cirrhosis, and hepatocellular carcinoma risk.", "Connect duration, fibrosis, alcohol, metabolic disease, HIV, age, and treatment history to progression risk.", "Assuming asymptomatic infection is harmless delays curative therapy."],
  ["transmission-prevention", "HCV spreads primarily through blood exposure, especially shared injection equipment, with additional perinatal, occupational, and selected sexual risks.", "Pair treatment with harm reduction, sterile equipment, blood precautions, and testing for ongoing exposure.", "There is no HCV vaccine, so cure does not replace reinfection prevention."],
  ["screening-diagnosis", "CDC recommends one-time adult screening and screening during every pregnancy, beginning with HCV antibody and reflex HCV RNA when reactive.", "Use RNA to confirm current infection and to diagnose reinfection after prior cure because antibody usually remains positive.", "Calling a reactive antibody proof of active infection can mislabel resolved infection."],
  ["acute-infection", "Current guidance treats confirmed acute HCV without waiting for spontaneous clearance, using the same pangenotypic approach as chronic infection when applicable.", "Confirm viremia, assess severity and transmission risk, stage the patient, and link directly to treatment.", "Delaying solely to observe for spontaneous clearance prolongs transmission and loss-to-follow-up risk."],
  ["fibrosis-staging", "Fibrosis staging is essential before DAA therapy because cirrhosis changes eligibility, regimen details, monitoring, and follow-up.", "Calculate FIB-4 and integrate elastography, imaging, platelets, prior biopsy, and clinical evidence.", "A normal bilirubin does not exclude compensated cirrhosis."],
  ["simplified-eligibility", "Simplified pathways apply only to defined treatment-naive groups without exclusions such as decompensation, prior treatment, pregnancy, HBsAg positivity, HCC, or transplant context.", "Use the current 2026 pathway and route excluded patients to the correct specialty section rather than denying treatment.", "Treating simplified eligibility as the same as treatment eligibility can exclude curable patients."],
  ["daa-targets", "NS3/4A protease inhibitors end in previr, NS5A inhibitors end in asvir, and NS5B polymerase inhibitors commonly end in buvir.", "Construct a combination with complementary targets and verify that each component is active for the patient context.", "Combining agents with redundant or incomplete activity can create failure and resistance."],
  ["combination-pressure", "Successful direct-acting antiviral regimens combine active agents against complementary viral targets so replication is suppressed through more than one barrier.", "Identify every component, viral target, resistance concern, and patient-specific exposure constraint before accepting a regimen as complete.", "Treating a single DAA component or an incomplete combination as a full regimen can permit virologic failure and resistance."],
  ["glecaprevir-pibrentasvir", "Glecaprevir and pibrentasvir combines an NS3/4A protease inhibitor with an NS5A inhibitor and is taken as three adult tablets together once daily with food.", "Verify duration, age and formulation, compensated liver status, interactions, prior treatment, and adherence.", "Any prior hepatic decompensation excludes Mavyret even if the current Child-Pugh score appears improved."],
  ["sofosbuvir-velpatasvir", "Sofosbuvir and velpatasvir combines an NS5B nucleotide polymerase inhibitor with an NS5A inhibitor and is a pangenotypic once-daily regimen.", "Review acid suppression, P-gp and enzyme inducers, amiodarone, renal context, genotype 3 cirrhosis details, and adherence.", "Sofosbuvir alone is not a complete HCV regimen."],
  ["protease-liver", "HCV NS3 protease inhibitors are unsafe in current or prior decompensated liver disease because exposure and hepatic failure risk increase.", "Calculate Child-Pugh status, ask about prior ascites, encephalopathy, or variceal bleeding, and review bilirubin, albumin, and INR before use.", "Using glecaprevir or voxilaprevir in Child-Pugh B or C can cause severe harm."],
  ["pretreatment", "Pretreatment evaluation includes fibrosis, CBC, hepatic panel, eGFR, HCV RNA, medication reconciliation, interaction review, HIV, HBV triple panel, pregnancy context, and prior treatment.", "Resolve every interaction and eligibility issue before dispensing the first dose.", "A regimen selected before medication reconciliation can fail from avoidable induction or toxicity."],
  ["hbv-reactivation", "DAA therapy can reactivate HBV, including severe cases, so HBsAg, anti-HBc, and anti-HBs must be assessed before treatment.", "Obtain HBV DNA when HBsAg positive and use current HBV treatment, prophylaxis, or monitoring guidance.", "HBsAg positivity is not a reason to leave HCV untreated, but it requires a coordinated HBV plan."],
  ["acid-suppression", "Reduced gastric acidity lowers absorption of ledipasvir and velpatasvir, with product-specific antacid, H2 blocker, and PPI rules.", "Use the exact label and timing rather than one class-wide separation rule.", "Adding an over-the-counter PPI without review can reduce DAA exposure."],
  ["inducers", "Strong P-gp or enzyme inducers such as rifampin, carbamazepine, phenytoin, phenobarbital, and St. John's wort can markedly reduce many DAA concentrations.", "Replace or redesign the interacting therapy before HCV treatment when possible and verify the exact product interaction.", "Simply separating an inducer by a few hours does not eliminate enzyme induction."],
  ["statins-transporters", "DAAs can alter transporter and enzyme handling of statins, immunosuppressants, antiretrovirals, anticoagulants, and other narrow-therapeutic-index drugs.", "Use a validated interaction checker and specify hold, substitution, dose limit, or monitoring.", "Assuming a medication is safe because it is common can cause myopathy or graft-drug toxicity."],
  ["amiodarone", "Sofosbuvir-containing regimens can cause serious symptomatic bradycardia with amiodarone, especially with other rate-lowering factors.", "Avoid the combination when possible or use label-directed specialist monitoring when no alternative exists.", "An outpatient start without a cardiac plan can be life threatening."],
  ["diabetes-warfarin", "Rapid virologic response can change glucose control and warfarin response, producing hypoglycemia or INR changes.", "Warn patients and arrange active glucose or INR monitoring during and after therapy.", "Stable pre-DAA doses do not guarantee stable exposure after hepatic recovery."],
  ["adherence-delivery", "Short-course cure still requires uninterrupted access, correct food and acid rules, and management of new medications.", "Confirm the complete supply, daily routine, missed-dose plan, interaction contact, and follow-up RNA date.", "A short course is not forgiving of unrecognized access gaps."],
  ["on-treatment-safety", "Most uncomplicated ribavirin-free patients need focused clinical follow-up rather than excessive routine laboratory testing, while cirrhosis and selected drugs require more monitoring.", "Monitor adherence, new interactions, symptoms, glucose, INR, and liver injury according to patient and regimen.", "A marked ALT rise or signs of decompensation should not wait until end of therapy."],
  ["svr-cure", "Sustained virologic response is confirmed by undetectable HCV RNA at least 12 weeks after therapy and represents virologic cure.", "Order the RNA and hepatic panel, investigate persistent transaminase elevation, and document the result.", "End-of-treatment RNA alone does not establish SVR12."],
  ["post-svr", "Noncirrhotic patients cured of HCV usually need no HCV-specific liver follow-up, while cirrhosis requires ongoing HCC and portal-hypertension surveillance.", "Continue care for alcohol, metabolic, or other liver disease and use annual RNA testing when reinfection risk persists.", "Cure does not erase cirrhosis or reinfection risk."],
  ["reinfection", "HCV antibody usually remains positive after cure, so recurrent infection is detected with HCV RNA.", "Provide nonjudgmental harm reduction and repeat RNA at least annually with ongoing exposure risk.", "Using antibody to diagnose reinfection can produce a permanently reactive but clinically unhelpful result."],
  ["decompensated-cirrhosis", "Decompensated cirrhosis requires expert regimens that exclude NS3 protease inhibitors and may use sofosbuvir and velpatasvir with ribavirin according to current guidance and label.", "Coordinate transplant-capable care, Child-Pugh status, ribavirin eligibility, anemia monitoring, and HCC assessment.", "Using a protease inhibitor in decompensated cirrhosis is a major safety error."],
  ["retreatment", "DAA failure requires reconstruction of prior agents, adherence, interactions, genotype, cirrhosis, resistance context, and current retreatment guidance.", "Use specialist-directed salvage such as an indicated voxilaprevir-containing regimen rather than repeating the failed course blindly.", "Repeating an NS5A-containing failure regimen without analysis can compound resistance."],
  ["closed-loop", "Complete HCV care links diagnosis, fibrosis, regimen, interactions, delivery, HBV and HIV context, SVR12, cirrhosis surveillance, and reinfection prevention.", "Assign ownership and dates for every pending result, supply issue, interaction change, RNA test, and surveillance study.", "A prescription without SVR confirmation leaves cure unknown."],
  ["transition-ownership", "HCV cure pathways can fail when medication access, a new prescription, pregnancy, incarceration, hospitalization, insurance, or a change in clinician interrupts treatment or loses the SVR12 plan.", "At every transition, reconcile the complete regimen, remaining supply, interaction changes, adherence gaps, fibrosis status, cure-test date, and named follow-up owner.", "Finishing or interrupting tablets without transferred ownership for SVR12 and cirrhosis surveillance leaves cure and residual risk unresolved."],
];
const reviewLessonByConcept = {
  "virus-natural-history": "virus-natural-history", "transmission-prevention": "virus-natural-history",
  "screening-diagnosis": "screening-diagnosis", "acute-infection": "screening-diagnosis",
  "fibrosis-staging": "fibrosis-eligibility", "simplified-eligibility": "fibrosis-eligibility",
  "daa-targets": "daa-mechanisms", "combination-pressure": "daa-mechanisms",
  "glecaprevir-pibrentasvir": "initial-regimens", "sofosbuvir-velpatasvir": "initial-regimens",
  pretreatment: "pretreatment-safety", "hbv-reactivation": "pretreatment-safety",
  "acid-suppression": "interaction-engineering", inducers: "interaction-engineering", "statins-transporters": "interaction-engineering", amiodarone: "interaction-engineering",
  "diabetes-warfarin": "monitoring-delivery", "adherence-delivery": "monitoring-delivery", "on-treatment-safety": "monitoring-delivery",
  "svr-cure": "svr-follow-up", "post-svr": "svr-follow-up",
  "protease-liver": "cirrhosis-special", "decompensated-cirrhosis": "cirrhosis-special",
  reinfection: "retreatment-prevention", retreatment: "retreatment-prevention",
  "closed-loop": "integrated-case", "transition-ownership": "integrated-case",
};
const dimensions = [["principle", "Which statement is most accurate?", 0], ["action", "Which action best applies the evidence?", 1], ["assessment", "Which plan demonstrates the strongest clinical reasoning?", 1], ["hazard", "Which error creates the greatest avoidable risk?", 2]];
const generic = ["Use one result without reviewing fibrosis, prior treatment, interactions, coinfection, or liver compensation.", "Assume every DAA combination, genotype, and cirrhosis state is interchangeable.", "Stop follow-up when the last tablet is taken without confirming SVR12 or planning cirrhosis surveillance."];
const bookAdministrationRepairs = {
  "hepatitis-c-033": {
    "choices": [
      "Glecaprevir and pibrentasvir combines an NS3/4A protease inhibitor with an NS5A inhibitor and is taken as three adult tablets together once daily with food.",
      "Glecaprevir and pibrentasvir are both NS5B polymerase inhibitors.",
      "The adult tablet regimen is three tablets divided across separate fasting doses.",
      "Food instructions can be copied unchanged from every other HCV protease-inhibitor combination."
    ],
    "rationale": "Glecaprevir targets NS3/4A protease and pibrentasvir targets the NS5A replication complex. The adult tablet regimen is three tablets together once daily with food. Meal instructions are product-specific: elbasvir/grazoprevir is an exception to the protease-inhibitor-with-food mnemonic."
  },
  "hepatitis-c-036": {
    "choices": [
      "Any prior hepatic decompensation excludes Mavyret even if the current Child-Pugh score appears improved.",
      "Current improvement in Child-Pugh class erases any history of hepatic decompensation.",
      "A prior decompensation episode can be ignored if the patient can take tablets with food.",
      "The meal requirement replaces review of hepatic contraindications."
    ],
    "rationale": "The book contraindicates Mavyret in Child-Pugh B or C and in patients with a history of hepatic decompensation. An improved current score does not remove that historical exclusion. Taking tablets with food addresses administration, not eligibility.",
    "question": "Which hepatic exclusion must be respected when considering glecaprevir/pibrentasvir?"
  },
  "hepatitis-c-040": {
    "choices": [
      "Sofosbuvir alone is not a complete HCV regimen.",
      "Sofosbuvir monotherapy is a complete substitute for a combination regimen.",
      "Two drugs with the same NS5B polymerase target are the preferred way to build every HCV regimen.",
      "Meal instructions alone determine whether an HCV antiviral combination is appropriate."
    ],
    "rationale": "Sofosbuvir monotherapy is not effective or recommended. HCV regimens combine agents acting at different targets; the book contrasts a preferred sofosbuvir/velpatasvir combination with the inappropriate pairing of two NS5B-targeting agents.",
    "question": "Which limitation must be recognized when choosing a sofosbuvir regimen?"
  },
  "hepatitis-c-053": {
    "choices": [
      "Reduced gastric acidity lowers absorption of ledipasvir and velpatasvir, with product-specific antacid, H2 blocker, and PPI rules.",
      "Acid-reducing medicines always increase ledipasvir and velpatasvir exposure.",
      "Every antacid, H2 blocker and PPI uses the same timing rule with every DAA.",
      "The presence of food removes the need to review acid suppression."
    ],
    "rationale": "Antacids, H2 blockers and PPIs can lower ledipasvir or velpatasvir concentrations. The book gives different instructions for these acid-reducing classes and specifically says PPIs are not recommended with Epclusa. Review the exact product and timing rather than applying one universal spacing rule; this does not establish a current label-specific exception."
  },
  "hepatitis-c-054": {
    "choices": [
      "Use the exact label and timing rather than one class-wide separation rule.",
      "Apply one identical separation rule to all antacids, H2 blockers and PPIs.",
      "Add an over-the-counter PPI to Epclusa without reviewing the combination.",
      "Treat the food instruction as a substitute for acid-suppression review."
    ],
    "rationale": "Antacids, H2 blockers and PPIs can lower ledipasvir or velpatasvir concentrations. The book gives different instructions for these acid-reducing classes and specifically says PPIs are not recommended with Epclusa. Review the exact product and timing rather than applying one universal spacing rule; this does not establish a current label-specific exception."
  },
  "hepatitis-c-055": {
    "choices": [
      "Use the exact label and timing rather than one class-wide separation rule.",
      "Apply one identical separation rule to all antacids, H2 blockers and PPIs.",
      "Add an over-the-counter PPI to Epclusa without reviewing the combination.",
      "Treat the food instruction as a substitute for acid-suppression review."
    ],
    "rationale": "Antacids, H2 blockers and PPIs can lower ledipasvir or velpatasvir concentrations. The book gives different instructions for these acid-reducing classes and specifically says PPIs are not recommended with Epclusa. Review the exact product and timing rather than applying one universal spacing rule; this does not establish a current label-specific exception."
  },
  "hepatitis-c-056": {
    "choices": [
      "Adding an over-the-counter PPI without review can reduce DAA exposure.",
      "Review the exact DAA and acid-reducing product before changing administration.",
      "Keep antacid, H2 blocker and PPI instructions distinct.",
      "Reconcile nonprescription acid-reducing medicines before treatment."
    ],
    "rationale": "Antacids, H2 blockers and PPIs can lower ledipasvir or velpatasvir concentrations. The book gives different instructions for these acid-reducing classes and specifically says PPIs are not recommended with Epclusa. Review the exact product and timing rather than applying one universal spacing rule; this does not establish a current label-specific exception."
  }
};

export const hepatitisCQuestionBank = concepts.flatMap(([slug, principle, action, hazard], conceptIndex) => dimensions.map(([dimension, stem, answerType], dimensionIndex) => {
  const correct = [principle, action, hazard][answerType];
  const choices = dimension === "hazard" ? [hazard, principle, action, generic[(conceptIndex + dimensionIndex) % 3]] : [correct, hazard, generic[(conceptIndex + dimensionIndex) % 3], generic[(conceptIndex + dimensionIndex + 1) % 3]];
  return { id: `hepatitis-c-${String(conceptIndex * 4 + dimensionIndex + 1).padStart(3, "0")}`, question: `${stem} Focus: ${slug.replaceAll("-", " ")}.`, choices, answer: 0, rationale: `${principle} ${action}`, reviewHref: `#${reviewLessonByConcept[slug]}`, difficulty: dimensionIndex < 2 ? "foundational" : "advanced" };
})).map(question => bookAdministrationRepairs[question.id] ? { ...question, ...bookAdministrationRepairs[question.id] } : question);

// Reconcile complete HCV regimen, interaction and monitoring assessments against the book and approved primary sources.
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-033"), {
  "choices": [
    "Glecaprevir and pibrentasvir combine an NS3/4A protease inhibitor with an NS5A inhibitor and is taken as three adult tablets together once daily with food.",
    "Glecaprevir and pibrentasvir are both NS5B polymerase inhibitors.",
    "The adult tablet regimen is three tablets divided across separate fasting doses.",
    "Food instructions can be copied unchanged from every other HCV protease-inhibitor combination."
  ],
  "rationale": "Glecaprevir inhibits NS3/4A protease and pibrentasvir inhibits NS5A. Each adult Mavyret tablet contains 100 mg/40 mg; three tablets together once daily with food deliver 300 mg/120 mg. These adult tablet instructions do not establish a pediatric pellet dose or a feeding-tube method. Food instructions remain product-specific."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-034"), {
  "choices": [
    "Verify duration, age and formulation, compensated liver status, interactions, prior treatment, and adherence.",
    "Select Mavyret solely because HCV antibody is reactive",
    "Use the adult three-tablet dose for every child aged three years or older",
    "Prescribe eight weeks for every previously treated patient without reviewing the prior regimen"
  ],
  "rationale": "Confirm current infection, prior treatment, formulation, liver status, interactions and duration. Eligible treatment-naive adults in the simplified chronic-HCV pathways receive eight weeks of Mavyret with food. Pediatric dosing and treatment-experienced or transplant durations require their own label and guidance review; age eligibility alone does not establish the adult tablet dose."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-035"), {
  "choices": [
    "Verify duration, age and formulation, compensated liver status, interactions, prior treatment, and adherence.",
    "Use an improved current Child-Pugh score to disregard prior decompensation",
    "Start Mavyret before reviewing the medication list and prior antiviral course",
    "Use pangenotypic activity as proof that every liver state and duration is interchangeable"
  ],
  "rationale": "Pangenotypic activity does not replace patient and product assessment. Mavyret is contraindicated in Child-Pugh B or C and with any prior hepatic decompensation. Verify the regimen history, age-appropriate formulation, food, interactions, planned duration and medication access before treatment."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-036"), {
  "choices": [
    "Any prior hepatic decompensation excludes Mavyret even if the current Child-Pugh score appears improved.",
    "Current improvement in Child-Pugh class erases any history of hepatic decompensation.",
    "A prior decompensation episode can be ignored if the patient can take tablets with food.",
    "The meal requirement replaces review of hepatic contraindications."
  ],
  "rationale": "The supplied book and the June 2025 Mavyret label exclude Child-Pugh B or C and any history of hepatic decompensation. An improved current score does not erase that history. Taking tablets with food addresses administration, not hepatic eligibility."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-037"), {
  "choices": [
    "Sofosbuvir and velpatasvir combine an NS5B nucleotide polymerase inhibitor with an NS5A inhibitor and is a pangenotypic once-daily regimen.",
    "Sofosbuvir and velpatasvir are both NS3/4A protease inhibitors",
    "Epclusa contains only sofosbuvir and is a monotherapy regimen",
    "All genotypes with cirrhosis use Epclusa without any resistance or liver-state review"
  ],
  "rationale": "Epclusa combines the NS5B nucleotide prodrug sofosbuvir with the NS5A inhibitor velpatasvir. The adult dose is one 400 mg/100 mg tablet daily with or without food. Eligible simplified chronic-HCV treatment uses twelve weeks, with baseline NS5A resistance testing required for genotype 3 compensated cirrhosis when choosing this regimen."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-038"), {
  "choices": [
    "Review acid suppression, P-gp and enzyme inducers, amiodarone, renal context, genotype 3 cirrhosis details, and adherence.",
    "Apply the Harvoni PPI schedule unchanged to Epclusa",
    "Skip NS5A resistance testing for genotype 3 compensated cirrhosis when using the simplified Epclusa pathway",
    "Treat reduced kidney function as an automatic contraindication to Epclusa"
  ],
  "rationale": "Review the exact regimen, interactions and pathway. Genotype 3 compensated cirrhosis requires baseline NS5A RAS testing; without Y93H, twelve weeks of Epclusa fits the simplified pathway, while Y93H needs other guidance. Epclusa itself needs no renal dose adjustment, including dialysis, but pathway eligibility and any ribavirin dosing require separate review."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-039"), {
  "choices": [
    "Review acid suppression, P-gp and enzyme inducers, amiodarone, renal context, genotype 3 cirrhosis details, and adherence.",
    "Treat any previous DAA failure with Epclusa for twelve weeks without reviewing the prior drugs",
    "Give Epclusa alone for every decompensated patient based only on pangenotypic activity",
    "Use the adult tablet for every pediatric patient without reviewing weight and formulation"
  ],
  "rationale": "The initial simplified regimen does not establish retreatment or pediatric dosing. Review prior exposure, hepatic compensation, genotype 3 resistance needs and interactions. The label includes Epclusa with ribavirin for decompensated cirrhosis; expert assessment must address ribavirin eligibility, renal function and other risks."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-040"), {
  "choices": [
    "Sofosbuvir alone is not a complete HCV regimen.",
    "Sofosbuvir monotherapy is a complete substitute for a combination regimen.",
    "Two drugs with the same NS5B polymerase target are the preferred way to build every HCV regimen.",
    "Meal instructions alone determine whether an HCV antiviral combination is appropriate."
  ],
  "rationale": "Sofosbuvir alone is not a complete HCV regimen. The book describes combination treatment directed at complementary targets, and Epclusa pairs sofosbuvir with velpatasvir. Meal instructions address delivery; they do not establish that an incomplete combination is appropriate."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-053"), {
  "choices": [
    "Reduced gastric acidity lowers absorption of ledipasvir and velpatasvir, with product-specific antacid, H2 blocker, and PPI rules.",
    "Acid-reducing medicines always increase ledipasvir and velpatasvir exposure.",
    "Every antacid, H2 blocker and PPI uses the same timing rule with every DAA.",
    "The presence of food removes the need to review acid suppression."
  ],
  "rationale": "Raised gastric pH reduces ledipasvir or velpatasvir solubility and can lower exposure. Both labels separate antacids by four hours and permit H2 blockers simultaneously or twelve hours apart up to famotidine 40 mg twice-daily equivalent. Epclusa plus a PPI is not recommended; if medically necessary, take Epclusa with food four hours before omeprazole 20 mg. Harvoni permits up to omeprazole 20 mg equivalent simultaneously under fasted conditions. Do not transfer these PPI instructions between products."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-054"), {
  "choices": [
    "Use the exact label and timing rather than one class-wide separation rule.",
    "Apply one identical separation rule to all antacids, H2 blockers and PPIs.",
    "Add an over-the-counter PPI to Epclusa without reviewing the combination.",
    "Treat the food instruction as a substitute for acid-suppression review."
  ],
  "rationale": "Raised gastric pH reduces ledipasvir or velpatasvir solubility and can lower exposure. Both labels separate antacids by four hours and permit H2 blockers simultaneously or twelve hours apart up to famotidine 40 mg twice-daily equivalent. Epclusa plus a PPI is not recommended; if medically necessary, take Epclusa with food four hours before omeprazole 20 mg. Harvoni permits up to omeprazole 20 mg equivalent simultaneously under fasted conditions. Do not transfer these PPI instructions between products."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-055"), {
  "choices": [
    "Use the exact label and timing rather than one class-wide separation rule.",
    "Apply one identical separation rule to all antacids, H2 blockers and PPIs.",
    "Add an over-the-counter PPI to Epclusa without reviewing the combination.",
    "Treat the food instruction as a substitute for acid-suppression review."
  ],
  "rationale": "Raised gastric pH reduces ledipasvir or velpatasvir solubility and can lower exposure. Both labels separate antacids by four hours and permit H2 blockers simultaneously or twelve hours apart up to famotidine 40 mg twice-daily equivalent. Epclusa plus a PPI is not recommended; if medically necessary, take Epclusa with food four hours before omeprazole 20 mg. Harvoni permits up to omeprazole 20 mg equivalent simultaneously under fasted conditions. Do not transfer these PPI instructions between products."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-056"), {
  "choices": [
    "Add an over-the-counter PPI to Epclusa without reviewing the regimen",
    "Review the exact DAA and acid-reducing product before changing administration.",
    "Keep antacid, H2 blocker and PPI instructions distinct.",
    "Reconcile nonprescription acid-reducing medicines before treatment."
  ],
  "rationale": "Adding a PPI without review is the harmful action. Epclusa coadministration is not recommended; its medically necessary omeprazole exception requires Epclusa with food four hours before omeprazole 20 mg, and other PPIs have not been studied. Product review, distinct acid-class instructions and reconciliation are protective actions."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-057"), {
  "choices": [
    "Strong P-gp or enzyme inducers such as rifampin, carbamazepine, phenytoin, phenobarbital, and St. John's wort can markedly reduce many DAA concentrations.",
    "Rifampin increases Epclusa exposure and improves its effectiveness",
    "A four-hour gap removes carbamazepine induction and makes it suitable with Epclusa",
    "Every inducer interaction has the same contraindication wording in every DAA label"
  ],
  "rationale": "Inducers can lower antiviral exposure through transporters or metabolic enzymes. The Epclusa label does not recommend rifampin, carbamazepine, phenytoin, phenobarbital or St. John’s wort. Mavyret specifically contraindicates rifampin, while carbamazepine is not recommended. Product-specific label wording matters; simple spacing is not an established solution to induction."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-058"), {
  "choices": [
    "Replace or redesign the interacting therapy before HCV treatment when possible and verify the exact product interaction.",
    "Continue carbamazepine with Epclusa after moving the doses four hours apart",
    "Replace medication reconciliation with a list of drug-class names",
    "Treat Mavyret and Epclusa inducer instructions as identical in every detail"
  ],
  "rationale": "Use the exact label and guidance to resolve the interaction with the treating team before starting HCV therapy. Carbamazepine with Epclusa is not recommended because it can reduce antiviral concentrations. Four-hour antacid instructions do not apply to persistent enzyme or transporter induction."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-059"), {
  "choices": [
    "Replace or redesign the interacting therapy before HCV treatment when possible and verify the exact product interaction.",
    "Start Epclusa first and review rifampin only after the course ends",
    "Assume every nonprescription supplement is compatible with a DAA",
    "Use antacid spacing as the plan for all enzyme-inducing medicines"
  ],
  "rationale": "Review prescriptions, nonprescription medicines and supplements, then coordinate an appropriate alternative or treatment plan with the prescribers. Induction is not a local binding interaction that a few hours of separation resolves. Do not independently stop essential concomitant therapy or invent a universal washout interval."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-060"), {
  "choices": [
    "Use four-hour dose separation as the sole solution to carbamazepine with Epclusa",
    "Review the exact DAA label for the inducer combination",
    "Coordinate an alternative medication or HCV regimen with the treating team",
    "Include St. John’s wort in medication reconciliation"
  ],
  "rationale": "The harmful action is treating spacing as a solution to induction. Epclusa with carbamazepine is not recommended because antiviral concentrations can fall. Label review, coordinated alternatives and supplement reconciliation are protective actions; the mechanism explains why an antacid spacing rule cannot simply be reused."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-061"), {
  "choices": [
    "DAA effects on transporters or enzymes can raise selected concomitant-drug concentrations, but the effect and response depend on the exact products",
    "Every statin has the same permitted dose with every HCV regimen",
    "Every calcineurin inhibitor must automatically be stopped with Epclusa",
    "All warfarin changes during HCV treatment prove a direct CYP interaction"
  ],
  "rationale": "Direct pharmacokinetic interactions and changes accompanying hepatic recovery are distinct. Mavyret and Epclusa allow rosuvastatin only up to 10 mg, whereas Harvoni does not recommend it. Calcineurin inhibitor and anticoagulant plans require the exact products and monitoring context; no blanket hold applies to the entire class."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-062"), {
  "choices": [
    "Use a validated interaction checker and specify hold, substitution, dose limit, or monitoring.",
    "Continue any rosuvastatin dose because all statins have a wide therapeutic range",
    "Stop every immunosuppressant without checking the DAA or transplant plan",
    "Copy one DAA interaction table to every HCV product"
  ],
  "rationale": "Use current product labels and an appropriate interaction resource, then document the actual change or monitoring plan. For example, Mavyret does not recommend atorvastatin, lovastatin or simvastatin, while Epclusa calls for close atorvastatin myopathy monitoring. The action follows the combination, not merely the class name."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-063"), {
  "choices": [
    "Use a validated interaction checker and specify hold, substitution, dose limit, or monitoring.",
    "Assume all cyclosporine doses are equally unsuitable with Mavyret",
    "Interpret a lack of direct PK interaction as proof that no clinical monitoring can be needed",
    "Ignore TDF-containing antiretroviral therapy during Epclusa review"
  ],
  "rationale": "Mavyret is not recommended with stable cyclosporine doses above 100 mg/day; this is not a blanket statement about every dose. Epclusa can raise tenofovir exposure with TDF-containing regimens, requiring product-specific renal safety review. A lack of a clinically significant direct PK interaction does not eliminate monitoring needs accompanying liver recovery."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-064"), {
  "choices": [
    "Continue an interacting statin dose without checking the exact DAA label",
    "Check the DAA-specific statin restriction or dose limit",
    "Review cyclosporine dose and the transplant treatment plan",
    "Arrange renal monitoring when the TDF-containing regimen requires it"
  ],
  "rationale": "Skipping the exact-product review is the harmful action. Increased statin exposure can cause myopathy, including rhabdomyolysis. Dose limits, avoidance recommendations and monitoring differ among products; the other choices are protective review actions."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-065"), {
  "choices": [
    "Sofosbuvir-containing treatment with amiodarone can cause serious symptomatic bradycardia, with additional risk in patients taking beta blockers or with cardiac disease or advanced liver disease",
    "Stopping amiodarone the day before Epclusa removes all cardiac risk",
    "The amiodarone interaction is proven to be caused by reduced gastric acidity",
    "Four-hour dose separation makes amiodarone and Epclusa routinely acceptable"
  ],
  "rationale": "The Epclusa label reports serious bradycardia with amiodarone; its mechanism is unknown. Beta blockers, cardiac comorbidity and advanced liver disease can increase risk. Coadministration is not recommended, and amiodarone’s long half-life means stopping it immediately before treatment does not remove the need for review and monitoring."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-066"), {
  "choices": [
    "Avoid the combination when possible or use label-directed specialist monitoring when no alternative exists.",
    "Start Epclusa with amiodarone as routine unmonitored outpatient treatment",
    "Use a food change as the cardiac safety plan",
    "Discontinue amiodarone independently and assume Epclusa is immediately safe"
  ],
  "rationale": "Avoid the combination and coordinate alternatives with the treating teams. If no viable alternative exists and Epclusa is coadministered, the label recommends inpatient cardiac monitoring for the first 48 hours, followed by daily outpatient or self-monitoring of heart rate through at least the first two weeks. Immediate evaluation is needed for bradycardia symptoms."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-067"), {
  "choices": [
    "Avoid the combination when possible or use label-directed specialist monitoring when no alternative exists.",
    "Treat a recent amiodarone stop as proof that no cardiac monitoring is needed",
    "Apply the antacid four-hour interval to the amiodarone interaction",
    "Use only one baseline pulse measurement instead of the required specialist plan"
  ],
  "rationale": "Amiodarone persists after discontinuation. AASLD/IDSA advises at least six months off amiodarone before sofosbuvir, while the product label describes cardiac monitoring when no viable alternative exists, including recent discontinuation. Coordinate the clinical decision; neither a recent stop nor dose spacing establishes safety."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-068"), {
  "choices": [
    "Start Epclusa with amiodarone without an alternative-treatment review or cardiac plan",
    "Coordinate avoidance or specialist-directed alternatives",
    "Use label-directed cardiac monitoring when no viable alternative exists",
    "Seek immediate medical evaluation for symptoms of bradycardia"
  ],
  "rationale": "Starting the combination without a plan is the harmful action. The label does not recommend coadministration; if unavoidable, it specifies inpatient monitoring for 48 hours and daily heart-rate monitoring through at least the first two weeks. The other choices address the recognized serious cardiac risk."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-069"), {
  "choices": [
    "HCV clearance can change hepatic function and the response to diabetes medicines or warfarin, so hypoglycemia and subtherapeutic anticoagulation need monitoring",
    "Stable pre-treatment insulin dosing guarantees stable glucose during HCV clearance",
    "An INR change always proves direct enzyme inhibition by the DAA",
    "Only patients taking ribavirin can need glucose or INR monitoring"
  ],
  "rationale": "Both product labels and monitoring guidance recognize changes in concomitant-medication response during HCV clearance. Diabetes treatment may need adjustment to prevent hypoglycemia, and warfarin requires INR review for subtherapeutic anticoagulation. These changes do not necessarily represent a direct DAA pharmacokinetic interaction."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-070"), {
  "choices": [
    "Warn patients and arrange active glucose or INR monitoring during and after therapy.",
    "Leave insulin and warfarin unmonitored because their doses were stable before HCV therapy",
    "Wait until symptoms are severe before checking glucose",
    "Replace INR monitoring with an HCV antibody result"
  ],
  "rationale": "Counsel patients using diabetes medicines about hypoglycemia and those using warfarin about altered anticoagulation. Arrange glucose or INR monitoring during and after DAA therapy, with dose decisions guided by the results and clinical team."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-071"), {
  "choices": [
    "Warn patients and arrange active glucose or INR monitoring during and after therapy.",
    "Automatically reduce every diabetes and warfarin dose by the same fixed percentage",
    "Stop all monitoring on the final DAA treatment day",
    "Assume the same dose response before and after hepatic recovery"
  ],
  "rationale": "Make a patient-specific glucose or INR plan during and after treatment. Hepatic recovery can change concomitant-drug response, but neither label nor guidance establishes one universal dose reduction. Adjust according to measured results and clinical assessment."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-072"), {
  "choices": [
    "Continue insulin or warfarin without glucose or INR review solely because the pre-DAA dose was stable",
    "Warn about hypoglycemia during and after treatment",
    "Monitor INR for subtherapeutic anticoagulation during and after treatment",
    "Coordinate dose changes according to the measured response"
  ],
  "rationale": "Assuming the old dose guarantees safety and omitting monitoring is the harmful action. HCV clearance can change hepatic function and medication response. The other choices provide appropriate counseling, monitoring and individualized adjustment."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-073"), {
  "choices": [
    "Support correct administration, continuous supply and adherence, but assess a treatment gap before concluding that cure has failed",
    "One missed dose always proves treatment failure",
    "A short treatment course means drug interactions never need review",
    "Every treatment interruption requires the same automatic restart regimen"
  ],
  "rationale": "Access and adherence matter, but interruption length, completed therapy, liver state and regimen determine the response. The AASLD/IDSA panel considers a gap shorter than seven days unlikely to affect SVR12 in the stated treatment-naive G/P or SOF/VEL context. This is not permission to skip doses or a universal rule for all regimens and populations."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-074"), {
  "choices": [
    "Confirm the complete supply, daily routine, missed-dose plan, interaction contact, and follow-up RNA date.",
    "Wait until treatment ends to ask about missing medication supply",
    "Assume one missed dose establishes failure and start a new course automatically",
    "Use the same interruption plan for prior DAA failure, transplant and simplified initial treatment"
  ],
  "rationale": "Confirm supply, product-specific administration, a contact for missed doses or new medicines, and the cure-testing plan. If a gap occurs, record its timing and length and use the appropriate guidance. Prior DAA treatment, other regimens, transplant and decompensated disease require expert input."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-075"), {
  "choices": [
    "Confirm the complete supply, daily routine, missed-dose plan, interaction contact, and follow-up RNA date.",
    "Use one universal adherence percentage to decide that every patient is cured",
    "Treat any short interruption as proof that retreatment is required",
    "Ignore housing, access or symptom barriers until the final visit"
  ],
  "rationale": "Assess access and administration without judgment, intervene when gaps occur and keep follow-up arranged. Evidence for exact adherence thresholds is limited. Use the actual interruption and patient context; the panel’s shorter-than-seven-day reassurance is not a universal success guarantee or restart algorithm."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-076"), {
  "choices": [
    "Ignore a refill gap and wait until the end of the course to assess missed treatment",
    "Assess the timing and duration of the interruption promptly",
    "Help resolve access and administration barriers",
    "Use the appropriate regimen-specific guidance or expert consultation"
  ],
  "rationale": "Ignoring a gap is the harmful action. Assess it promptly and address the cause, without declaring that every brief interruption causes failure. The AASLD/IDSA recommendations distinguish defined treatment-naive G/P or SOF/VEL patients from prior treatment, other regimens, transplant and decompensated disease."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-077"), {
  "choices": [
    "Eligible patients in the simplified noncirrhotic pathway generally need no additional routine on-treatment laboratory tests beyond indicated glucose or INR monitoring, while other contexts need individualized monitoring",
    "Every ribavirin-free patient is exempt from all monitoring regardless of liver state",
    "A rise in ALT to ten times the upper limit of normal is always identical to a tenfold rise from that patient’s baseline",
    "All asymptomatic ALT increases require the same immediate action"
  ],
  "rationale": "The simplified noncirrhotic pathway permits limited routine laboratory monitoring in eligible patients, with clinical contact as needed and glucose or INR monitoring where indicated. Cirrhosis, ribavirin, HBV and interacting medicines can change the plan. The general guidance’s ALT stopping threshold is a tenfold rise from baseline, not a universal ten-times-ULN threshold."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-078"), {
  "choices": [
    "Monitor adherence, new interactions, symptoms, glucose, INR, and liver injury according to patient and regimen.",
    "Wait until the last treatment day to evaluate jaundice or encephalopathy",
    "Treat a normal pre-treatment ALT as proof that liver injury cannot occur",
    "Omit symptom review because the regimen does not contain ribavirin"
  ],
  "rationale": "Monitor according to the regimen and patient. A tenfold or greater ALT rise from baseline prompts discontinuation; a smaller rise with symptoms or significant bilirubin, alkaline phosphatase or INR changes also prompts discontinuation. New jaundice, ascites or encephalopathy needs urgent evaluation and specialist care."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-079"), {
  "choices": [
    "Monitor adherence, new interactions, symptoms, glucose, INR, and liver injury according to patient and regimen.",
    "Use one laboratory schedule for simplified noncirrhotic treatment, decompensation and ribavirin",
    "Continue therapy despite a tenfold ALT rise from baseline without urgent review",
    "Ignore a smaller ALT rise accompanied by jaundice or increased INR"
  ],
  "rationale": "Match monitoring to the clinical context. Guidance recommends repeat testing every two weeks for an asymptomatic ALT rise below tenfold from baseline, with persistent elevation prompting consideration of discontinuation. This differs from the stopping criteria for a tenfold rise or a smaller rise accompanied by symptoms or significant laboratory changes."
});
Object.assign(hepatitisCQuestionBank.find((question) => question.id === "hepatitis-c-080"), {
  "choices": [
    "Delay evaluation of jaundice, ascites or encephalopathy until routine end-of-treatment follow-up",
    "Arrange urgent evaluation of new hepatic decompensation symptoms",
    "Use baseline-relative ALT stopping criteria with symptom and laboratory context",
    "Add CBC and reproductive safety planning when ribavirin is used"
  ],
  "rationale": "Delaying evaluation of possible hepatic decompensation is the harmful action. New jaundice, ascites, encephalopathy or worsening liver tests require prompt specialist assessment. Baseline-relative ALT guidance and the additional anemia and reproductive safety requirements of ribavirin are protective actions."
});
