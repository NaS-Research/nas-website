const concepts = [
  ["virus-natural-history", "HBV is a partially double-stranded DNA virus that persists through covalently closed circular DNA and can cause acute infection, chronic hepatitis, cirrhosis, and hepatocellular carcinoma.", "Use age at acquisition, immune status, ALT, HBV DNA, HBeAg, fibrosis, and comorbidity to interpret disease trajectory.", "Calling one normal ALT value proof of inactive disease can miss dynamic infection."],
  ["transmission-prevention", "HBV spreads through blood and body fluids, including perinatal, sexual, injection, occupational, and household blood exposure.", "Combine vaccination, safer injection and sex practices, blood precautions, maternal treatment when indicated, and infant immunoprophylaxis.", "Using symptoms to identify infectious people misses many asymptomatic infections."],
  ["triple-panel", "CDC recommends one-time adult screening with HBsAg, anti-HBs, and total anti-HBc, with repeat testing when ongoing risk or clinical context warrants it.", "Interpret the three markers together and add IgM anti-HBc, HBV DNA, HBeAg, anti-HBe, ALT, or other tests for the clinical question.", "Repeating HBsAg alone cannot distinguish vaccine immunity, resolved infection, and susceptibility."],
  ["serology-patterns", "HBsAg indicates current infection, anti-HBs usually indicates immunity, and total anti-HBc indicates previous or current natural infection rather than vaccination alone.", "Use the complete pattern, timing, vaccination history, immune status, and HBV DNA when results are discordant.", "Treating isolated anti-HBc as one fixed diagnosis ignores window-period, remote infection, false positivity, and occult infection possibilities."],
  ["acute-chronic", "Persistence of HBsAg for at least six months supports chronic HBV, while IgM anti-HBc supports recent acute infection or a flare context.", "Distinguish acute infection, chronic infection, reactivation, and acute-on-chronic disease before applying treatment or counseling.", "Labeling every positive HBsAg result acute hepatitis can misdirect care."],
  ["phase-staging", "Chronic HBV phases are dynamic and cannot be defined by HBeAg, ALT, or HBV DNA alone.", "Trend ALT and HBV DNA, assess HBeAg status and fibrosis, and incorporate age, family history, comorbidity, and treatment exposure.", "One-time phase assignment without longitudinal follow-up can miss transition and treatment eligibility."],
  ["fibrosis-cirrhosis", "Cirrhosis and significant fibrosis change treatment thresholds, monitoring intensity, decompensation risk, and hepatocellular carcinoma surveillance.", "Use noninvasive fibrosis assessment, laboratory and imaging evidence, and specialist evaluation rather than ALT alone.", "Withholding therapy from cirrhosis because ALT is normal creates avoidable progression risk."],
  ["treatment-goals", "Current nucleos(t)ide analog therapy suppresses HBV replication and reduces progression risk but rarely eradicates covalently closed circular DNA.", "Set goals for durable DNA suppression, biochemical improvement, fibrosis protection, and prevention of cirrhosis, decompensation, transmission, and cancer.", "Promising a routine short curative course can encourage unsafe discontinuation."],
  ["who-to-treat", "Current guidance expands treatment beyond older narrow ALT and HBV DNA thresholds, especially with cirrhosis, fibrosis, immune-active disease, pregnancy transmission risk, coinfection, or high-risk context.", "Apply the current AASLD or WHO pathway that fits the setting and use shared decision-making for indeterminate cases.", "Copying the 2023 book's simplified first-line table without current eligibility criteria can undertreat patients."],
  ["tenofovir-disoproxil", "TDF is a high-barrier HBV polymerase inhibitor with strong antiviral activity and important renal tubular and bone toxicity considerations.", "Review kidney function, urine markers when indicated, bone risk, nephrotoxins, dosing, adherence, and post-treatment flare planning.", "Ignoring renal and bone context can turn effective suppression into preventable toxicity."],
  ["tenofovir-alafenamide", "TAF delivers more tenofovir intracellularly with lower plasma exposure than TDF and generally less renal and bone toxicity, but product labeling and hepatic status matter.", "Use current Vemlidy age, weight, food, renal, dialysis, and compensated-liver labeling rather than assuming every HIV TAF product is interchangeable.", "Substituting any TAF-containing HIV combination for single-agent HBV therapy without a complete HIV plan is unsafe."],
  ["entecavir", "Entecavir is a potent high-barrier HBV nucleoside analog in nucleoside-naive infection, with fasting administration and renal dose adjustment.", "Test for HIV first, assess prior lamivudine resistance, calculate kidney function, and preserve the correct 0.5 or 1 mg context.", "Entecavir monotherapy in unrecognized HIV can select HIV resistance."],
  ["legacy-resistance", "Lamivudine, adefovir, and telbivudine have historical or selected roles but lower resistance barriers or toxicity disadvantages compared with preferred agents.", "Reconstruct prior exposure and resistance before choosing salvage therapy, and favor a high-barrier tenofovir strategy when guidance supports it.", "Restarting lamivudine alone after documented resistance can recreate virologic failure."],
  ["peginterferon", "Peginterferon offers a finite immune-based course for selected compensated patients but has major psychiatric, marrow, endocrine, autoimmune, infectious, and decompensation limitations.", "Match phenotype, contraindications, response predictors, monitoring capacity, and patient preference before use.", "Using peginterferon in decompensated cirrhosis can cause severe harm."],
  ["peginterferon-monitoring", "A finite peginterferon course still requires structured psychiatric, hematologic, hepatic, thyroid, autoimmune, infectious, and treatment-response surveillance.", "Define baseline eligibility, scheduled laboratory and symptom reviews, stopping criteria, and post-treatment virologic follow-up before the first dose.", "Calling finite therapy low burden can leave serious toxicity or nonresponse unrecognized."],
  ["renal-bone-selection", "Agent selection should balance HBV potency and resistance barrier with kidney disease, dialysis, osteoporosis, fracture risk, pregnancy, prior resistance, and liver status.", "Compare TDF, TAF, and entecavir using the exact patient and current label rather than a universal hierarchy.", "Assuming TAF requires no renal or hepatic review is unsafe."],
  ["hiv-coinfection", "HBV and HIV coinfection requires a fully suppressive HIV regimen containing two HBV-active agents, commonly tenofovir plus emtricitabine or lamivudine.", "Test for HIV before HBV monotherapy and maintain HBV-active coverage when changing antiretroviral therapy.", "Stopping all HBV-active drugs during an HIV switch can cause severe hepatitis flare."],
  ["hdv-hcv-coinfection", "HBsAg-positive patients require context-sensitive testing for hepatitis D, and HCV treatment can unmask HBV reactivation risk.", "Use current HDV testing guidance and screen for HBV before direct-acting HCV therapy, then monitor or prophylax according to HBV status.", "Ignoring coinfection can lead to missed aggressive liver disease or reactivation."],
  ["pregnancy", "Maternal antiviral prophylaxis can reduce perinatal transmission when HBV DNA is high, and current guidance supports TDF or selected TAF use beginning late in pregnancy under specialist care.", "Measure maternal HBV DNA, coordinate obstetric and liver care, plan therapy timing, and protect the infant regardless of maternal antiviral use.", "Maternal therapy does not replace newborn vaccine and HBIG when the parent is HBsAg positive."],
  ["infant-prophylaxis", "An infant born to an HBsAg-positive or unknown-status parent requires hepatitis B vaccine within 12 hours, with HBIG for positive status and prompt action for unknown status according to current guidance.", "Complete the series and perform post-vaccination serologic testing at the recommended age.", "Waiting for infant symptoms forfeits the narrow prevention window."],
  ["vaccination", "Current CDC recommendations cover adults age 19 through 59 and older adults with risk or who seek protection, while December 2025 guidance changed birth-dose timing for infants of confirmed HBsAg-negative parents to shared decision-making.", "Use the live CDC schedule because product availability and infant timing recommendations changed after RxPrep 2023.", "Applying a retired product or pre-2025 infant schedule without checking current CDC guidance is outdated."],
  ["monitoring-response", "Long-term HBV care tracks HBV DNA, ALT, adherence, renal and bone safety when relevant, serologic transitions, fibrosis, and clinical decompensation.", "Define dates, thresholds, and ownership for laboratory review and specialist follow-up.", "A suppressed HBV DNA result does not eliminate medication toxicity or cancer surveillance needs."],
  ["stopping-flare", "Stopping nucleos(t)ide analog therapy can produce severe acute hepatitis exacerbation and requires a narrow evidence-based indication plus close post-treatment monitoring.", "Continue therapy through most high-risk contexts and use current guideline criteria, HBsAg status, cirrhosis status, relapse risk, and monitoring reliability before any stop.", "An insurance lapse treated as an ordinary medication holiday can cause liver failure."],
  ["reactivation-immunosuppression", "Resolved or chronic HBV can reactivate during B-cell depletion, transplantation, chemotherapy, high-risk immunosuppression, or some targeted therapies.", "Screen with the triple panel before immunosuppression and choose prophylaxis or close monitoring based on HBsAg, anti-HBc, regimen risk, and specialist guidance.", "Checking HBsAg alone can miss anti-HBc-positive patients at reactivation risk."],
  ["reactivation-handoff", "HBV reactivation prevention extends beyond the last immunosuppressive dose because immune recovery and regimen-specific risk continue over time.", "Document the antiviral or laboratory plan, duration, thresholds for action, and named owner across oncology, transplant, rheumatology, pharmacy, hepatology, and primary-care transitions.", "Stopping prophylaxis or surveillance at the end of chemotherapy without a risk-specific follow-up plan can miss delayed reactivation."],
  ["hcc-surveillance", "Antiviral suppression lowers but does not eliminate hepatocellular carcinoma risk, and selected patients require ultrasound with AFP about every six months.", "Apply current AASLD criteria using cirrhosis, age, sex, family history, ancestry, coinfection, and post-HBsAg-loss risk.", "Stopping surveillance solely because HBV DNA is undetectable can miss cancer."],
  ["closed-loop", "Complete HBV care links screening, serology interpretation, staging, treatment eligibility, exact drug, adherence, toxicity, pregnancy, coinfection, vaccination, surveillance, and transfer planning.", "Assign an owner and date to every pending DNA result, safety test, imaging study, medication renewal, pregnancy action, and family prevention step.", "A prescription without longitudinal ownership leaves flare, resistance, and cancer risk invisible."],
  ["transition-ownership", "Chronic HBV care can fail when pregnancy, insurance, dialysis, transplant, HIV treatment, cancer therapy, or a change in clinician interrupts antiviral coverage or surveillance.", "At every transition, reconcile the exact product, renal and liver context, refill continuity, pending results, HCC surveillance, contact prevention, and responsible follow-up clinician.", "An unplanned treatment interruption or lost surveillance study can create preventable flare, transmission, or delayed cancer detection."],
];

const reviewLessonByConcept = {
  "virus-natural-history": "virus-natural-history", "transmission-prevention": "virus-natural-history",
  "triple-panel": "screening-serology", "serology-patterns": "screening-serology", "acute-chronic": "screening-serology",
  "phase-staging": "phase-staging", "fibrosis-cirrhosis": "phase-staging",
  "treatment-goals": "treatment-decision", "who-to-treat": "treatment-decision",
  "tenofovir-disoproxil": "polymerase-therapy", "tenofovir-alafenamide": "polymerase-therapy", entecavir: "polymerase-therapy", "legacy-resistance": "polymerase-therapy",
  peginterferon: "peginterferon-selection", "peginterferon-monitoring": "peginterferon-selection",
  "renal-bone-selection": "special-populations", "hiv-coinfection": "special-populations", "hdv-hcv-coinfection": "special-populations",
  pregnancy: "pregnancy-infant", "infant-prophylaxis": "pregnancy-infant",
  "monitoring-response": "monitoring-stopping", "stopping-flare": "monitoring-stopping",
  "reactivation-immunosuppression": "reactivation", "reactivation-handoff": "reactivation",
  vaccination: "prevention-surveillance", "hcc-surveillance": "prevention-surveillance",
  "closed-loop": "integrated-case", "transition-ownership": "integrated-case",
};

const dimensions = [["principle", "Which statement is most accurate?", 0], ["action", "Which action best applies the evidence?", 1], ["assessment", "Which plan demonstrates the strongest clinical reasoning?", 1], ["hazard", "Which error creates the greatest avoidable risk?", 2]];
const generic = ["Use one isolated laboratory value without reviewing the full serology pattern, fibrosis, treatment history, or current guidance.", "Assume viral suppression removes every need for monitoring, vaccination, or cancer surveillance.", "Select therapy from drug name alone without kidney, bone, liver, pregnancy, resistance, coinfection, or adherence context."];

const bookAdministrationRepairs = {
  "chronic-hepatitis-b-040": {
    "choices": [
      "Ignoring renal and bone context can turn effective suppression into preventable toxicity.",
      "Review renal function and bone risk before choosing or dosing TDF.",
      "Check for interacting nephrotoxic drugs during TDF treatment.",
      "Plan monitoring for HBV worsening if antiviral treatment is stopped."
    ],
    "rationale": "TDF can cause renal toxicity, including Fanconi syndrome, and loss of bone mineral density. Ignoring these risks can cause preventable harm. Kidney-based dosing, review of nephrotoxins, and monitoring after discontinuation address the book’s safety concerns."
  },
  "chronic-hepatitis-b-044": {
    "choices": [
      "Substituting any TAF-containing HIV combination for single-agent HBV therapy without a complete HIV plan is unsafe.",
      "Verify the exact single-agent HBV product before dispensing.",
      "Test for HIV before starting HBV antiviral therapy.",
      "Choose therapy that appropriately treats both viruses when HIV and HBV coexist."
    ],
    "rationale": "The book distinguishes Vemlidy for HBV from TAF-containing HIV combination products. It also requires HIV testing before HBV treatment and an appropriate plan for both viruses in coinfection. A product substitution without that plan is unsafe; a shared ingredient does not establish interchangeability."
  },
  "chronic-hepatitis-b-046": {
    "choices": [
      "Test for HIV first, assess prior lamivudine resistance, calculate kidney function, and preserve the correct 0.5 or 1 mg context.",
      "Give the same entecavir dose regardless of prior lamivudine resistance.",
      "Start HBV antiviral therapy without testing for HIV.",
      "Keep the dose unchanged despite kidney impairment requiring adjustment."
    ],
    "rationale": "Before entecavir, test for HIV and review prior treatment and kidney function. The book gives 0.5 mg daily for nucleoside-treatment-naive patients and 1 mg daily for lamivudine-resistant patients, with renal adjustment when needed. These are distinct dose contexts, not interchangeable strengths."
  },
  "chronic-hepatitis-b-047": {
    "choices": [
      "Test for HIV first, assess prior lamivudine resistance, calculate kidney function, and preserve the correct 0.5 or 1 mg context.",
      "Give the same entecavir dose regardless of prior lamivudine resistance.",
      "Start HBV antiviral therapy without testing for HIV.",
      "Keep the dose unchanged despite kidney impairment requiring adjustment."
    ],
    "rationale": "Before entecavir, test for HIV and review prior treatment and kidney function. The book gives 0.5 mg daily for nucleoside-treatment-naive patients and 1 mg daily for lamivudine-resistant patients, with renal adjustment when needed. These are distinct dose contexts, not interchangeable strengths."
  },
  "chronic-hepatitis-b-048": {
    "choices": [
      "Entecavir monotherapy in unrecognized HIV can select HIV resistance.",
      "Test for HIV before choosing the HBV antiviral regimen.",
      "Account for kidney function when dosing entecavir.",
      "Use the stated lamivudine-resistance context to distinguish 0.5 mg from 1 mg."
    ],
    "rationale": "HBV antivirals can select HIV resistance when HIV infection is unrecognized or untreated. HIV testing and an appropriate regimen for coinfection must precede therapy; the other choices address the book’s dosing and safety requirements."
  }
};

export const chronicHepatitisBQuestionBank = concepts.flatMap(([slug, principle, action, hazard], conceptIndex) => dimensions.map(([dimension, stem, answerType], dimensionIndex) => {
  const correct = [principle, action, hazard][answerType];
  const choices = dimension === "hazard" ? [hazard, principle, action, generic[(conceptIndex + dimensionIndex) % 3]] : [correct, hazard, generic[(conceptIndex + dimensionIndex) % 3], generic[(conceptIndex + dimensionIndex + 1) % 3]];
  return { id: `chronic-hepatitis-b-${String(conceptIndex * 4 + dimensionIndex + 1).padStart(3, "0")}`, question: `${stem} Focus: ${slug.replaceAll("-", " ")}.`, choices, answer: 0, rationale: `${principle} ${action}`, reviewHref: `#${reviewLessonByConcept[slug]}`, difficulty: dimensionIndex < 2 ? "foundational" : "advanced" };
})).map(question => bookAdministrationRepairs[question.id] ? { ...question, ...bookAdministrationRepairs[question.id] } : question);

// Reconcile complete HBV polymerase-therapy assessments against book and approved primary sources.
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-037"), {
  "choices": [
    "TDF is a high-resistance-barrier HBV polymerase inhibitor, but renal tubular and bone risks require individualized review.",
    "TDF has no renal toxicity because HBV suppression protects the kidneys",
    "One normal creatinine result removes the need for subsequent renal monitoring",
    "Every adult should receive the same TDF interval regardless of creatinine clearance"
  ],
  "rationale": "TDF suppresses HBV replication and has a high barrier to resistance, but kidney injury, Fanconi syndrome and bone effects can occur. Review estimated creatinine clearance, urine markers, bone risk and nephrotoxins; renal impairment can require a longer dosing interval."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-038"), {
  "choices": [
    "Review kidney function, urine markers when indicated, bone risk, nephrotoxins, dosing, adherence, and post-treatment flare planning.",
    "Omit urine glucose and urine protein monitoring because serum creatinine is sufficient",
    "Continue the same dosing interval after kidney function falls below the label threshold",
    "Stop TDF when HBV DNA becomes undetectable without arranging follow-up"
  ],
  "rationale": "The Viread label calls for serum creatinine, estimated creatinine clearance, urine glucose and urine protein before and during treatment; assess phosphorus in chronic kidney disease. Review bone symptoms and risk, nephrotoxins, adherence and dosing. Discontinuation can cause severe hepatitis flare and needs clinical and laboratory follow-up."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-039"), {
  "choices": [
    "Review kidney function, urine markers when indicated, bone risk, nephrotoxins, dosing, adherence, and post-treatment flare planning.",
    "Use the same TDF interval for every adult, including those with substantial renal impairment",
    "Replace toxicity monitoring with an undetectable HBV DNA result",
    "Treat a refill interruption as a medication holiday that needs no liver follow-up"
  ],
  "rationale": "Combine antiviral effectiveness with renal and bone safety, dosing and uninterrupted access. A high resistance barrier does not remove toxicity or adherence concerns. Review the exact product and renal dosing, and plan close clinical and laboratory monitoring if treatment is discontinued."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-040"), {
  "choices": [
    "Ignore renal function and bone risk when choosing and dosing TDF",
    "Review renal function and bone risk before choosing or dosing TDF.",
    "Check for interacting nephrotoxic drugs during TDF treatment.",
    "Plan monitoring for HBV worsening if antiviral treatment is stopped."
  ],
  "rationale": "Ignoring renal and bone risk is the harmful action. TDF can cause proximal tubular injury, kidney impairment and bone effects; kidney-based dosing, nephrotoxin review and post-discontinuation flare monitoring are protective actions."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-041"), {
  "choices": [
    "TAF delivers tenofovir to hepatocytes efficiently with lower systemic exposure than TDF and generally smaller renal biomarker and bone-density changes in HBV trials.",
    "TAF eliminates the possibility of renal injury and removes the need for monitoring",
    "Vemlidy is labeled for all stages of decompensated hepatic impairment",
    "Every TAF-containing HIV combination is interchangeable with single-agent Vemlidy"
  ],
  "rationale": "AASLD describes efficient hepatocyte delivery with lower systemic exposure. HBV trials show generally smaller renal biomarker and bone-density changes with TAF than TDF, while long-term clinical significance is uncertain. Vemlidy still requires product-specific renal, hepatic and HIV review."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-042"), {
  "choices": [
    "Use current Vemlidy age, weight, food, renal, dialysis, and compensated-liver labeling rather than assuming every HIV TAF product is interchangeable.",
    "Use Vemlidy in any child regardless of age or weight",
    "Exclude renal monitoring after selecting TAF instead of TDF",
    "Replace Vemlidy with any HIV combination containing TAF without reviewing the complete regimen"
  ],
  "rationale": "The retrieved U.S. Vemlidy label specifies age at least six years and weight at least 25 kg, compensated liver disease, once-daily dosing with food, and renal and dialysis conditions. Pediatric renal impairment lacks dosing data. A shared ingredient does not establish product interchangeability or an adequate HIV regimen."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-043"), {
  "choices": [
    "Use current Vemlidy age, weight, food, renal, dialysis, and compensated-liver labeling rather than assuming every HIV TAF product is interchangeable.",
    "Reject every patient below 15 mL/min creatinine clearance without reviewing chronic hemodialysis status",
    "Give Vemlidy before dialysis because its timing never matters",
    "Use Vemlidy routinely in Child-Pugh B or C hepatic impairment without reviewing the label"
  ],
  "rationale": "Adult renal labeling permits Vemlidy without dose adjustment at estimated creatinine clearance at least 15 mL/min or in ESRD receiving chronic hemodialysis; give it after dialysis on dialysis days. It is not recommended in ESRD without chronic hemodialysis or in decompensated Child-Pugh B or C hepatic impairment. Pediatric renal dosing is not established."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-044"), {
  "choices": [
    "Substitute a TAF-containing HIV combination for Vemlidy without reviewing the complete HIV and HBV treatment plan",
    "Verify the exact single-agent HBV product before dispensing.",
    "Test for HIV before starting HBV antiviral therapy.",
    "Choose therapy that appropriately treats both viruses when HIV and HBV coexist."
  ],
  "rationale": "The harmful action is making a product substitution without an appropriate plan for both viruses. Vemlidy alone is not an adequate HIV regimen. Testing for HIV, identifying the exact product and coordinating appropriate combination antiretroviral treatment are protective actions."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-045"), {
  "choices": [
    "Entecavir has a high resistance barrier in nucleoside-naive HBV infection, requires fasting administration, and needs renal dose review.",
    "Entecavir has the same resistance barrier after lamivudine resistance as in nucleoside-naive infection",
    "Food does not affect entecavir administration instructions",
    "The same entecavir dose is appropriate for every patient regardless of kidney function or treatment history"
  ],
  "rationale": "Entecavir has low resistance rates in nucleoside-naive infection, but lamivudine resistance increases subsequent entecavir resistance risk. Give it at least two hours after a meal and two hours before the next meal, and review renal dosing. Its labeled dose contexts do not override resistance-based drug selection."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-048"), {
  "choices": [
    "Use entecavir alone for HBV in a patient with untreated HIV infection",
    "Test for HIV before choosing the HBV antiviral regimen.",
    "Account for kidney function when dosing entecavir.",
    "Use the stated lamivudine-resistance context to distinguish 0.5 mg from 1 mg."
  ],
  "rationale": "The error is using entecavir without effective HIV treatment in coinfection, which can select HIV resistance. The other choices are useful assessment actions. A labeled 1 mg entecavir dose for lamivudine-refractory infection does not make it the preferred resistance strategy; review specialist guidance and alternative agents."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-049"), {
  "choices": [
    "Lamivudine, adefovir and telbivudine are nonpreferred HBV options because of resistance or toxicity disadvantages relative to high-barrier agents.",
    "Lamivudine resistance leaves entecavir resistance risk unchanged",
    "All virologic breakthrough proves resistance without an adherence assessment",
    "Adefovir has no renal toxicity considerations"
  ],
  "rationale": "AASLD identifies TDF, TAF and entecavir as preferred high-barrier oral agents. Older agents have resistance or toxicity disadvantages, and lamivudine or telbivudine resistance increases concern for entecavir cross-resistance. Check adherence, prior exposure and resistance before selecting a specialist-directed salvage plan."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-050"), {
  "choices": [
    "Reconstruct prior exposure and resistance before choosing salvage therapy, and favor a high-barrier tenofovir strategy when guidance supports it.",
    "Restart lamivudine alone after documented lamivudine resistance",
    "Choose entecavir solely by increasing its dose after lamivudine resistance",
    "Assume a rising HBV DNA result always proves resistance rather than checking adherence"
  ],
  "rationale": "Reconstruct prior exposure and assess adherence before interpreting virologic failure. AASLD resistance guidance favors tenofovir for several resistant HBV patterns, including lamivudine resistance; the exact agent and plan still require renal, hepatic, HIV and resistance review. Do not substitute a universal salvage algorithm for specialist assessment."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-051"), {
  "choices": [
    "Reconstruct prior exposure and resistance before choosing salvage therapy, and favor a high-barrier tenofovir strategy when guidance supports it.",
    "Sequentially cycle through low-barrier monotherapies without resistance review",
    "Ignore prior lamivudine resistance because the entecavir label lists a 1 mg dose",
    "Choose the next medicine without assessing kidney function, HIV status or treatment adherence"
  ],
  "rationale": "A resistance plan needs the prior drug history, adherence, HBV DNA trajectory and cross-resistance context. Tenofovir is a high-barrier option in AASLD resistance guidance, but renal, hepatic and coinfection constraints still matter. The labeled entecavir dose does not establish that it is preferred after lamivudine resistance."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-052"), {
  "choices": [
    "Restart lamivudine alone after documented lamivudine resistance",
    "Reconstruct prior antiviral exposure and resistance before choosing salvage therapy",
    "Check adherence before concluding that virologic breakthrough reflects resistance",
    "Review kidney, liver and HIV context when considering a tenofovir strategy"
  ],
  "rationale": "Restarting a drug alone despite documented resistance is the harmful action. Review adherence, prior treatment and cross-resistance, then coordinate a high-barrier strategy that fits the patient. The other alternatives are useful assessment and treatment-selection actions."
});

// Distinguish labeled entecavir dose contexts from resistance-based agent selection.
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-046"), {
  "rationale": "Test for HIV and review kidney function, prior treatment and resistance before selecting entecavir. The usual adult dose is 0.5 mg daily for nucleoside-naive compensated infection; the label specifies 1 mg for defined lamivudine-refractory or resistant infection and adult decompensated disease, with renal adjustment. A labeled dose does not make entecavir preferred after lamivudine resistance; AASLD favors a tenofovir strategy in that pattern."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-047"), {
  "rationale": "Test for HIV and review kidney function, prior treatment and resistance before selecting entecavir. The usual adult dose is 0.5 mg daily for nucleoside-naive compensated infection; the label specifies 1 mg for defined lamivudine-refractory or resistant infection and adult decompensated disease, with renal adjustment. A labeled dose does not make entecavir preferred after lamivudine resistance; AASLD favors a tenofovir strategy in that pattern."
});
