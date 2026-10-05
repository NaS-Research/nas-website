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

// Source-reviewed HBV natural history, serology and staging.
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-001"), {
  "choices": [
    "HBV is a partially double-stranded DNA virus with a persistent nuclear cccDNA reservoir",
    "HBV has an RNA-only genome and never forms a DNA intermediate",
    "HBV persists primarily in red blood cells rather than hepatocytes",
    "Undetectable serum HBV DNA proves that nuclear cccDNA has been eliminated"
  ],
  "rationale": "HBV carries partially double-stranded DNA and forms cccDNA in hepatocytes. Polymerase-directed treatment can suppress circulating DNA without reliably removing the reservoir; suppression is not proof of eradication."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-002"), {
  "choices": [
    "Interpret age at acquisition, immune status, serial ALT and DNA, HBeAg and fibrosis together",
    "Use one normal ALT as proof that HBV is inactive",
    "Use disappearance of jaundice as proof that chronic infection has cleared",
    "Discard prior core-antibody positivity once serum HBsAg becomes negative"
  ],
  "rationale": "Trajectory depends on host factors, viral activity and liver stage. ALT, symptoms and HBsAg each answer different questions; none independently proves an undamaged liver or erases reactivation risk from prior infection."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-003"), {
  "choices": [
    "Distinguish suppressed circulating DNA from a persistent reservoir and assess liver stage and ongoing risk",
    "Stop all follow-up once DNA becomes undetectable on treatment",
    "Treat a normal ALT as proof that no fibrosis exists",
    "Assume HCC can occur only after HBV causes cirrhosis"
  ],
  "rationale": "DNA suppression does not reliably eliminate cccDNA, and ALT does not measure fibrosis. HCC can occur in HBV without cirrhosis, so liver stage and risk factors remain relevant to follow-up and surveillance."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-004"), {
  "choices": [
    "Label chronic HBV inactive using one normal ALT without reviewing DNA or fibrosis",
    "Compare serial ALT with quantitative HBV DNA",
    "Assess fibrosis independently of ALT",
    "Review prior tests and antiviral exposure before assigning a phase"
  ],
  "rationale": "An isolated normal ALT can conceal replication or established fibrosis. The other actions combine the evidence needed to interpret dynamic disease rather than inferring inactivity from one injury marker."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-005"), {
  "choices": [
    "HBV can spread through infected blood or body fluids during sex, shared injection, needlestick exposure or birth",
    "Ordinary hugging is the main mechanism of household HBV transmission",
    "Only people with jaundice can transmit HBV",
    "HBV spreads principally through contaminated food like hepatitis A"
  ],
  "rationale": "HBV transmission involves infected blood or body fluids and can occur without symptoms. Household blood-contaminated items are relevant; ordinary hugging and food sharing do not explain HBV transmission."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-006"), {
  "choices": [
    "Assess susceptible contacts for vaccination and use appropriate blood, sexual and injection precautions",
    "Limit prevention counseling to people who visibly have jaundice",
    "Share razors after viral suppression because transmission risk is automatically zero",
    "Replace indicated infant vaccine and HBIG with maternal antiviral therapy alone"
  ],
  "rationale": "Vaccination of susceptible contacts and exposure precautions complement treatment. Asymptomatic infection can transmit, and maternal treatment does not replace indicated infant immunoprophylaxis."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-007"), {
  "choices": [
    "Coordinate contact vaccination, exposure precautions and pregnancy/infant prevention when relevant",
    "Assume an asymptomatic household contact cannot have HBV",
    "Apply a foodborne-hepatitis prevention plan as the only HBV strategy",
    "Omit indicated infant immunoprophylaxis when the pregnant patient receives antivirals"
  ],
  "rationale": "Prevention must address actual blood/body-fluid routes and susceptible contacts. Symptoms cannot identify every infection, and pregnancy antiviral decisions and infant immunoprophylaxis serve complementary roles."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-008"), {
  "choices": [
    "Use absence of symptoms as proof that an infected person cannot transmit HBV",
    "Review vaccination status of susceptible contacts",
    "Counsel against sharing blood-contaminated razors or injection equipment",
    "Arrange appropriate perinatal prevention when relevant"
  ],
  "rationale": "Clinically silent HBV can still transmit. The other actions reduce exposure or susceptibility and do not rely on symptoms to identify infectious people."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-009"), {
  "choices": [
    "CDC recommends at least one adult screen with HBsAg, anti-HBs and total anti-HBc",
    "Healthy adults need no HBV screening unless they disclose a risk factor",
    "Anti-HBs alone distinguishes current infection from resolved infection",
    "Total anti-HBc is unnecessary because vaccination always produces it"
  ],
  "rationale": "CDC’s universal adult screen uses all three markers. Anti-HBs alone cannot classify every state, and vaccination alone does not produce core antibody; risk-based testing continues when relevant."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-010"), {
  "choices": [
    "Interpret all three screening markers and order additional tests for the specific clinical question",
    "Use HBsAg alone to distinguish vaccine immunity from resolved infection",
    "Order IgM anti-HBc routinely as a substitute for every initial triple panel",
    "Delay indicated vaccination until all screening results return"
  ],
  "rationale": "The triple panel distinguishes infection, immunity and susceptibility; IgM and DNA address particular follow-up questions. HBsAg alone cannot separate the HBsAg-negative states, and screening should not delay vaccination."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-011"), {
  "choices": [
    "Use prior triple-panel results, vaccination records and exposure history to tailor repeat testing",
    "Repeat HBsAg alone for every purpose and ignore prior core-antibody results",
    "Assume a negative adult screen eliminates the need for testing during future pregnancies",
    "Avoid periodic testing of susceptible people who continue to have exposure risk"
  ],
  "rationale": "A one-time screen does not replace pregnancy testing or periodic risk-based testing. Prior results guide additional testing, and prior core positivity remains relevant when immunosuppression is planned."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-012"), {
  "choices": [
    "Classify every HBsAg-negative person as susceptible without checking surface or core antibodies",
    "Read HBsAg, anti-HBs and total anti-HBc together",
    "Review completed vaccination history when interpreting waned anti-HBs",
    "Use additional tests when acute infection or occult HBV is suspected"
  ],
  "rationale": "HBsAg-negative states include vaccine immunity, resolved infection, susceptibility and isolated core patterns. The other actions resolve these distinctions rather than reducing the panel to one antigen result."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-013"), {
  "choices": [
    "Anti-HBs without core antibody supports vaccine immunity; anti-HBs with core antibody and negative HBsAg supports resolved infection",
    "Vaccination routinely produces total anti-HBc",
    "A positive anti-HBs always proves that HBV was acquired naturally",
    "An isolated positive core antibody proves current infection in every patient"
  ],
  "rationale": "The core marker distinguishes natural exposure from vaccination alone. An isolated-core pattern has multiple possible explanations and needs timing, risk and immune-status context."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-014"), {
  "choices": [
    "Read the full serology pattern with timing, vaccine history and immune status, adding DNA when indicated",
    "Treat isolated core antibody as proof of vaccine immunity",
    "Treat all three negative markers as proof of prior natural infection",
    "Use positive anti-HBs alone to distinguish every infection state"
  ],
  "rationale": "Serology interpretation depends on the combination and context. Vaccination alone does not yield core antibody; all-negative results generally indicate susceptibility without a completed vaccine history, and anti-HBs alone does not identify the source of immunity."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-015"), {
  "choices": [
    "Evaluate an isolated-core result for remote infection, false positivity, window-period infection or occult HBV as the context warrants",
    "Assume isolated core antibody excludes HBV reactivation during immunosuppression",
    "Diagnose occult HBV from core antibody alone without DNA assessment",
    "Automatically revaccinate every immunocompetent documented vaccine responder whose anti-HBs later wanes"
  ],
  "rationale": "Isolated core antibody does not establish one diagnosis; occult infection involves detectable HBV DNA despite negative HBsAg. Prior infection can reactivate, while waning surface antibody after a completed vaccine response does not by itself mandate revaccination."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-016"), {
  "choices": [
    "Dismiss isolated core antibody as vaccine immunity before evaluating planned immunosuppression",
    "Review natural-exposure and immune-status history",
    "Consider repeat testing when a false-positive core result is plausible",
    "Obtain HBV DNA when occult infection or immunosuppression makes it relevant"
  ],
  "rationale": "Vaccination alone does not produce core antibody. Dismissing the result can miss prior or occult infection and reactivation risk; the other actions help determine its cause and clinical significance."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-017"), {
  "choices": [
    "HBsAg persistence for at least six months establishes chronicity; IgM anti-HBc can occur in acute infection or severe chronic flares",
    "Any single positive HBsAg result dates infection to the current month",
    "IgM anti-HBc is never detectable during chronic HBV reactivation",
    "The absence of jaundice excludes acute HBV"
  ],
  "rationale": "The six-month HBsAg timeline establishes chronic infection. IgM generally supports recent acute infection but is not exclusive to it; symptoms and a single antigen result cannot date every infection."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-018"), {
  "choices": [
    "Review previous HBsAg results, exposure timing, IgM anti-HBc, liver tests and DNA to distinguish acute infection from a chronic flare",
    "Label every IgM-positive result a new acute infection regardless of prior HBsAg history",
    "Classify chronicity using one positive HBsAg result alone",
    "Diagnose clearance because jaundice improves"
  ],
  "rationale": "Acuity requires the timeline and marker pattern. IgM may occur in a severe flare, and symptom improvement or one antigen result cannot establish clearance or the duration of infection."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-019"), {
  "choices": [
    "Interpret positive IgM in a patient with years of documented HBsAg positivity as requiring assessment for a chronic flare or reactivation",
    "Erase the chronic diagnosis whenever IgM anti-HBc becomes positive",
    "Wait six months to link a newly HBsAg-positive symptomatic patient to care",
    "Assume a postvaccination HBsAg result needs no review of timing or other markers"
  ],
  "rationale": "A documented chronic history remains relevant when IgM appears. Evaluate flares and reactivation promptly; newly identified infection needs timely care, and recent vaccination can transiently affect HBsAg interpretation."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-020"), {
  "choices": [
    "Diagnose every positive HBsAg result as a new acute infection without reviewing prior results",
    "Use persistence for at least six months to establish chronicity",
    "Order IgM when recent acute infection is suspected",
    "Consider a chronic flare when IgM is positive despite an established chronic history"
  ],
  "rationale": "A single HBsAg-positive result cannot date onset. The other actions incorporate history and marker limitations to distinguish acute infection from chronic disease and flares."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-021"), {
  "choices": [
    "Chronic HBV phases can change and require combined interpretation of viral activity, inflammation and liver stage",
    "Negative HBeAg alone defines inactive HBV",
    "One normal ALT proves absence of fibrosis",
    "The phase recorded at diagnosis is permanent even if DNA and ALT change"
  ],
  "rationale": "HBV phases are dynamic. HBeAg negativity can coexist with replication, ALT is not a fibrosis test, and transitions require reassessment rather than reliance on the original label."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-022"), {
  "choices": [
    "Trend ALT and DNA, review HBeAg and treatment exposure, and assess fibrosis",
    "Use HBeAg negativity alone to clear a patient from follow-up",
    "Treat laboratory-normal ALT as proof that no fibrosis assessment is needed",
    "Assign a permanent phase from the first DNA measurement"
  ],
  "rationale": "Combined longitudinal assessment distinguishes activity from injury and established scarring. No single viral or biochemical value provides the complete phase and treatment assessment."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-023"), {
  "choices": [
    "Reassess an HBeAg-negative patient with DNA 8,000 IU/mL and normal ALT as indeterminate rather than automatically inactive",
    "Call DNA 8,000 IU/mL inactive solely because HBeAg is negative",
    "Infer no fibrosis from the normal ALT",
    "Apply the first phase label indefinitely without comparing later results"
  ],
  "rationale": "AASLD’s inactive pattern includes DNA below 2,000 IU/mL and persistently normal ALT. DNA 8,000 does not meet that pattern; assess the timeline and fibrosis before individualizing treatment and follow-up."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-024"), {
  "choices": [
    "Keep the initial inactive label despite rising DNA and ALT without reassessment",
    "Compare subsequent DNA and ALT results with the baseline",
    "Review treatment exposure and possible competing causes of ALT elevation",
    "Reassess liver stage and treatment eligibility when the pattern changes"
  ],
  "rationale": "A static label can miss transition and treatment need. The other actions respond to changing viral activity and liver injury instead of treating the initial phase as permanent."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-025"), {
  "choices": [
    "Significant fibrosis and cirrhosis affect treatment and surveillance decisions even when ALT is normal",
    "Normal ALT excludes cirrhosis in chronic HBV",
    "Undetectable DNA automatically ends HCC surveillance in cirrhosis",
    "Elastography always measures fibrosis accurately regardless of marked inflammation"
  ],
  "rationale": "ALT and DNA do not independently measure fibrosis. Cirrhosis carries continuing treatment and surveillance implications, and inflammation can increase liver stiffness and complicate elastography interpretation."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-026"), {
  "choices": [
    "Assess fibrosis with appropriate noninvasive testing, laboratory and imaging evidence and specialist review",
    "Use ALT alone to rule out cirrhosis",
    "Ignore prior decompensation once ALT normalizes",
    "Stop all surveillance once an antiviral suppresses DNA"
  ],
  "rationale": "Fibrosis assessment uses multiple evidence sources. A normal injury marker and suppressed DNA do not erase established cirrhosis, prior decompensation or relevant cancer risk."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-027"), {
  "choices": [
    "Interpret elastography alongside inflammation, other liver-stage evidence and prior assessments",
    "Treat a high stiffness result during marked inflammation as an exact fibrosis stage without context",
    "Use a remote staging result as permanently valid despite clinical change",
    "Withhold further liver assessment solely because ALT is normal"
  ],
  "rationale": "Inflammation can overestimate liver stiffness, and liver stage can change. Contextual interpretation and timely reassessment are stronger than assuming one test or a normal ALT supplies the entire stage."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-028"), {
  "choices": [
    "Dismiss cirrhosis-related treatment evaluation solely because ALT is normal",
    "Document fibrosis and any signs of decompensation",
    "Assess HBV DNA and current treatment eligibility with liver stage",
    "Evaluate continuing HCC surveillance when indicated"
  ],
  "rationale": "Normal ALT does not remove cirrhosis-related risk or treatment indications. The other choices assess severity, treatment and surveillance rather than dismissing established liver disease on one biochemical result."
});

// Source-verified HBV treatment-decision review.
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-029"), {
  "choices": [
    "Oral nucleos(t)ide analogs suppress replication; undetectable serum HBV DNA does not prove elimination of nuclear cccDNA",
    "An undetectable serum HBV DNA result proves all infected hepatocytes have been cleared",
    "Polymerase inhibition routinely produces rapid sterilizing cure of chronic HBV",
    "Normal ALT after treatment establishes that HBV-related cancer risk is zero"
  ],
  "rationale": "Polymerase inhibition can suppress replication while the nuclear reservoir persists. Serum DNA, ALT and liver-risk assessment describe different outcomes; none alone establishes eradication or freedom from every future liver complication."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-030"), {
  "choices": [
    "Agree on virologic and liver-health goals, adherence, product-specific monitoring and expected treatment duration",
    "Promise that the first undetectable DNA result will allow treatment discontinuation",
    "Use disappearance of symptoms as the only treatment target",
    "Measure ALT alone to establish virologic suppression"
  ],
  "rationale": "A useful plan measures antiviral response and protects liver health while supporting safe ongoing therapy. ALT is an injury marker, not a substitute for HBV DNA, and symptom improvement does not establish treatment completion."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-031"), {
  "choices": [
    "Assess DNA response, ALT, adherence and toxicity while continuing indicated liver-cancer surveillance",
    "Discharge a patient with cirrhosis from follow-up once HBV DNA is undetectable",
    "Stop therapy whenever symptoms resolve, without a planned monitoring pathway",
    "Infer that an ALT response removes the need to assess drug toxicity"
  ],
  "rationale": "A strong plan separates virologic response, biochemical response, safety and residual liver risk. Effective antiviral treatment does not eliminate cancer risk in cirrhosis or justify an unplanned interruption."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-032"), {
  "choices": [
    "Stop oral HBV therapy after one undetectable DNA result without a stopping plan or follow-up",
    "Explain that DNA suppression can coexist with a persistent viral reservoir",
    "Continue surveillance when liver-cancer risk warrants it",
    "Arrange medication access and adherence support before treatment begins"
  ],
  "rationale": "An unplanned stop based on suppression alone can lead to severe HBV exacerbation. Counseling about persistent infection, indicated surveillance and continuity of treatment supports safer care."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-033"), {
  "choices": [
    "AASLD immune-tolerant treatment consideration uses age over 40 OR significant inflammation OR fibrosis, with shared decision-making",
    "AASLD requires both age over 40 and F2 fibrosis before anyone in an immune-tolerant pattern can discuss therapy",
    "HBeAg negativity excludes treatment regardless of cirrhosis",
    "Normal ALT excludes treatment in every HBV clinical setting"
  ],
  "rationale": "Recommendation 3 treats age, inflammation and fibrosis as alternative considerations. Its recommendation is conditional with very low-certainty evidence; eligibility is not limited to one ALT or HBeAg result."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-034"), {
  "choices": [
    "Apply a named framework: WHO permits treatment for significant fibrosis regardless of ALT or HBV DNA",
    "Combine the WHO ALT upper limit with the AASLD DNA thresholds and call the result one guideline",
    "Require elevated ALT before treating cirrhosis under every framework",
    "Apply the adult WHO elastography cutoffs to children as fully validated values"
  ],
  "rationale": "WHO includes an independent significant-fibrosis or cirrhosis pathway. Its ALT/DNA pathway is a separate option, and pediatric validation limits matter. Mixing thresholds from different frameworks creates an unsupported rule."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-035"), {
  "choices": [
    "Discuss treatment for a 35-year-old with a persistently immune-tolerant pattern and confirmed F2 fibrosis instead of waiting for age over 40",
    "Require the same patient to reach age over 40 before discussing treatment despite confirmed F2 fibrosis",
    "Dismiss confirmed fibrosis because the same patient has normal ALT",
    "Use HBeAg positivity alone to determine the exact oral drug and dose"
  ],
  "rationale": "Confirmed F2 fibrosis independently supports treatment consideration in the AASLD immune-tolerant recommendation. A younger age does not cancel that finding. Discuss risks, benefits and monitoring, then select therapy using the full patient context."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-036"), {
  "choices": [
    "Dismiss treatment in decompensated HBV cirrhosis because ALT is normal",
    "Arrange oral antiviral treatment and specialist assessment for decompensated HBV cirrhosis",
    "Evaluate other causes of elevated ALT when HBV DNA is low",
    "Discuss treatment burden and follow-up when applying a conditional recommendation"
  ],
  "rationale": "Normal ALT does not negate the treatment indication in decompensated HBV cirrhosis. Oral antiviral treatment and specialist care address that indication; evaluating other injury causes and discussing treatment burden support appropriate care."
});

// Source-verified HBV peginterferon review.
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-053"), {
  "choices": [
    "Peginterferon can provide a finite immune-based HBV course in selected compensated patients, but response is variable and toxicity is substantial",
    "A 48-week peginterferon course reliably eradicates every HBV reservoir",
    "Peginterferon directly inhibits HBV polymerase in the same way as entecavir",
    "HBeAg-negative chronic HBV is excluded from the adult PEGASYS indication"
  ],
  "rationale": "Peginterferon stimulates antiviral immune activity and can be used in selected HBeAg-positive or HBeAg-negative adults with compensated disease. Finite duration does not imply guaranteed response or sterilizing cure, and its mechanism differs from polymerase inhibition."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-054"), {
  "choices": [
    "For an eligible adult with creatinine clearance 25 mL/min, verify a PEGASYS dose of 135 mcg subcutaneously once weekly and monitor closely",
    "For the same adult, use 180 mcg daily because renal impairment shortens the dosing interval",
    "For the same adult, use 180 mcg weekly without assessing renal function or toxicity",
    "For the same adult, prescribe 135 mg weekly as the standard renal adjustment"
  ],
  "rationale": "The adult label recommends 135 mcg once weekly when creatinine clearance is below 30 mL/min, including hemodialysis. Micrograms and weekly frequency matter. The usual 180-mcg adult dose is reduced in this renal category, and renal impairment still requires close safety monitoring."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-055"), {
  "choices": [
    "Discuss response predictors and safety in a compensated patient, then verify the weekly dose, actual device concentration and follow-up plan",
    "Choose peginterferon solely because the patient wants a fixed stop date",
    "Administer 1 mL from a 180 mcg/0.5 mL prefilled syringe to deliver the usual 180-mcg dose",
    "Promise that a favorable HBV genotype guarantees an off-treatment cure"
  ],
  "rationale": "Selection combines liver stage, expected benefit, contraindications and monitoring capacity. For 180 mcg, the vial volume is 1 mL but the prefilled-syringe volume is 0.5 mL. A finite preference and favorable predictors support discussion, not a promise of cure or an unchecked prescription."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-056"), {
  "choices": [
    "Start peginterferon in decompensated cirrhosis to avoid long-term oral therapy",
    "Exclude autoimmune hepatitis before considering peginterferon",
    "Discuss an oral antiviral alternative when psychiatric risk makes peginterferon unsuitable",
    "Verify liver compensation, renal function and monitoring capacity before the first dose"
  ],
  "rationale": "Starting peginterferon in decompensated cirrhosis violates a labeled contraindication and can cause serious harm. Each alternative is a protective selection step. The appeal of a finite course cannot override liver-stage safety."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-057"), {
  "choices": [
    "Peginterferon requires early blood-count checks plus continuing laboratory, psychiatric and symptom monitoring despite its finite duration",
    "Normal baseline blood counts eliminate the need for CBC monitoring on treatment",
    "Flu-like symptoms are the only adverse effects that need discussion before treatment",
    "Completing 48 weeks automatically ends all HBV follow-up and indicated cancer surveillance"
  ],
  "rationale": "The label calls for hematologic testing at weeks 2 and 4, biochemical testing at week 4 and subsequent periodic testing. Serious psychiatric, marrow, hepatic, endocrine, autoimmune, infectious and eye effects require active review. HBV follow-up continues after a finite course."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-058"), {
  "choices": [
    "Arrange baseline CBC, hepatic and renal panels, thyroid and virologic testing, mental-health review and eye examination, then schedule early and ongoing checks",
    "Postpone the first blood count until the end of the 48-week course",
    "Monitor ALT alone because it detects psychiatric and eye toxicity",
    "Wait for visible jaundice before checking hepatic safety"
  ],
  "rationale": "Baseline assessment and planned follow-up detect risks that symptoms or ALT alone cannot capture. The label specifies early hematologic checks and a baseline eye examination. Subsequent monitoring addresses laboratory changes, mood and other organ toxicity as well as antiviral response."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-059"), {
  "choices": [
    "Stop peginterferon and obtain urgent psychiatric evaluation for severe new depression or suicidal thoughts rather than waiting for the next routine visit",
    "Continue peginterferon unchanged until all 48 weeks are complete despite severe new depression",
    "Treat severe new depression as an expected flu-like effect requiring no assessment",
    "Use a falling HBV DNA level to dismiss severe new depression"
  ],
  "rationale": "Severe neuropsychiatric toxicity requires immediate treatment cessation and psychiatric intervention under the label. Virologic improvement does not make serious toxicity acceptable, and a planned treatment duration does not override a stopping indication."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-060"), {
  "choices": [
    "Continue peginterferon unchanged despite progressive ALT increases accompanied by rising bilirubin or hepatic decompensation",
    "Arrange more frequent liver testing during an HBV ALT flare",
    "Plan HBV DNA and liver follow-up after the last injection",
    "Investigate persistent high fever for infection, especially when neutrophils are low"
  ],
  "rationale": "Progressive ALT increases with bilirubin elevation or hepatic decompensation require immediate discontinuation, not routine continuation. Intensified liver monitoring, post-treatment follow-up and infection assessment are protective actions; flu-like symptoms cannot explain every fever."
});

// Source-verified HBV special-populations review.
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-061"), {
  "choices": [
    "TAF has more favorable average kidney and bone measures than TDF, but its renal limits and monitoring still apply",
    "A more favorable average renal profile means TAF cannot cause proximal tubular injury",
    "Normal ALT rules out TDF-related phosphate loss and bone disease",
    "All oral HBV antivirals use the same renal dose and dialysis timing"
  ],
  "rationale": "The book and current NIH guidance distinguish the average renal and bone effects of TAF from TDF. Both tenofovir labels still require kidney and urine monitoring; the TAF label reports renal injury. ALT does not assess tubular injury, and product-specific renal rules differ."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-062"), {
  "choices": [
    "Before and during TAF or TDF, assess creatinine, estimated CrCl, urine glucose and protein; add phosphorus in chronic kidney disease",
    "During TAF, assess renal function only after jaundice develops",
    "During TDF, use normal ALT as the only evidence that kidney and bone safety are acceptable",
    "For either tenofovir product, omit renal testing once HBV DNA is undetectable"
  ],
  "rationale": "Both tenofovir labels specify creatinine, estimated creatinine clearance, urine glucose and urine protein before and during treatment, with phosphorus in CKD. Jaundice, ALT and viral suppression cannot replace this safety assessment. Follow-up timing is clinically appropriate to the patient and findings."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-063"), {
  "choices": [
    "For decompensated adult HBV with CrCl 40 mL/min, use the 1-mg entecavir renal column: 0.5 mg daily, after resistance/HIV review and specialist assessment",
    "For decompensated adult HBV with CrCl 40 mL/min, use the 0.5-mg starting-dose column: 0.25 mg daily, because liver stage does not affect the starting dose",
    "For decompensated adult HBV with CrCl 40 mL/min, give entecavir 1 mg daily without renal adjustment because no separate hepatic adjustment is required",
    "For decompensated adult HBV with CrCl 40 mL/min, automatically substitute Vemlidy because its favorable bone profile removes the Child-Pugh B/C restriction"
  ],
  "rationale": "Adult entecavir dosing starts at 1 mg daily in decompensated disease. At CrCl 30 to below 50 mL/min, that column permits 0.5 mg daily or 1 mg every 48 hours; the label prefers daily regimens. Selection also depends on resistance and HIV treatment. A statement that no separate hepatic adjustment is needed does not erase the decompensation starting dose or renal adjustment, and Vemlidy is not recommended in Child-Pugh B/C."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-064"), {
  "choices": [
    "Prescribe Vemlidy at CrCl 12 mL/min in an adult not receiving chronic hemodialysis, assuming TAF needs no renal review",
    "Check dialysis modality before applying the adult Vemlidy exception below CrCl 15 mL/min",
    "Give Vemlidy after the session on chronic hemodialysis days when otherwise eligible",
    "Continue renal and urine monitoring despite a more favorable TAF toxicity profile"
  ],
  "rationale": "The unsafe action is prescribing Vemlidy below CrCl 15 mL/min without chronic hemodialysis. Its adult exception is specific to chronic hemodialysis, with dosing after the session. Checking modality and maintaining monitoring are protective actions."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-065"), {
  "choices": [
    "NIH recommends tenofovir plus FTC or 3TC within fully suppressive HIV therapy, with selected alternatives that still preserve effective HIV and HBV treatment",
    "Every HBV/HIV regimen must contain FTC or 3TC, including an islatravir-containing regimen",
    "FTC alone as the HBV-active component provides a high barrier to HBV resistance",
    "Entecavir alone provides fully suppressive treatment for both HIV and HBV"
  ],
  "rationale": "The September 2026 NIH guideline recommends TAF/TDF plus FTC/3TC within suppressive ART, while allowing selected tenofovir-only HBV coverage or eligible entecavir with effective ART. Islatravir must not be combined with FTC/3TC. FTC/3TC-only HBV coverage permits resistance, and entecavir does not replace HIV combination treatment."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-066"), {
  "choices": [
    "Test for HIV before HBV monotherapy and, if coinfected, coordinate fully suppressive ART with appropriate HBV-active treatment",
    "Start entecavir alone for newly detected HBV/HIV and defer HIV therapy until HBV DNA is suppressed",
    "Use an undetectable HBV DNA result to infer HIV suppression without HIV assessment",
    "When HIV is detected, manage both viruses solely by changing to the HBV dose of lamivudine"
  ],
  "rationale": "The book and labels require HIV assessment before HBV monotherapy because drugs with partial HIV activity can select resistance. Coinfection needs an effective ART regimen with appropriate HBV coverage. HBV DNA does not measure HIV suppression, and the HBV lamivudine product or dose is not a complete HIV regimen."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-067"), {
  "choices": [
    "If tenofovir cannot be used in HBV/HIV, consider entecavir with fully suppressive ART only after excluding known or suspected 3TC-resistant HBV and reviewing renal dosing",
    "If tenofovir cannot be used in HBV/HIV, use entecavir alone until the next HIV viral-load result",
    "With confirmed 3TC-resistant HBV/HIV, use entecavir routinely without expert review because a 1-mg dose removes the resistance concern",
    "After any past lamivudine use in HBV/HIV, assume entecavir and tenofovir have identical resistance barriers and follow-up needs"
  ],
  "rationale": "NIH permits entecavir only with fully suppressive ART and does not recommend it for known or suspected 3TC-resistant HBV. Prior 3TC exposure without confirmed resistance is a different situation, but still favors tenofovir and calls for careful review if entecavir is used. Renal dosing remains relevant; increasing the dose does not make confirmed resistance safe to disregard."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-068"), {
  "choices": [
    "Switch an HBsAg-positive patient with HBV/HIV to long-acting cabotegravir/rilpivirine and stop all HBV-active therapy without replacement",
    "Check HBV status and quantitative HBV DNA before changing therapy in an HBsAg-positive patient",
    "Arrange continued HBV-active treatment alongside an otherwise appropriate tenofovir-sparing HIV regimen",
    "Monitor for reactivation after a tenofovir-sparing switch in an HBsAg-negative, anti-HBc-positive patient even when anti-HBs is positive"
  ],
  "rationale": "Stopping all HBV-active therapy during this switch creates avoidable reactivation and severe hepatitis risk. Cabotegravir/rilpivirine is not HBV treatment. The other actions protect against gaps in coverage or missed reactivation; NIH recommends monitoring prior HBV infection regardless of anti-HBs level."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-069"), {
  "choices": [
    "Positive anti-HDV should be followed by HDV RNA testing to determine whether infection is actively viremic",
    "Positive anti-HDV alone proves ongoing HDV replication",
    "Low HBV DNA with high ALT excludes clinically important HDV coinfection",
    "Undetectable HBV DNA guarantees that HCV DAAs cannot cause HBV reactivation"
  ],
  "rationale": "WHO and NIH distinguish anti-HDV screening from RNA confirmation of active infection. Low HBV DNA with high ALT is a reason to consider HDV, not to rule it out. Low or undetectable HBV DNA also does not remove the need for a reactivation plan during HCV treatment."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-070"), {
  "choices": [
    "Before HCV DAAs, obtain HBsAg, total anti-HBc and anti-HBs; if HBsAg-positive, assess HBV DNA and arrange treatment, prophylaxis or monitoring as appropriate",
    "Before HCV DAAs, use anti-HBs alone to exclude both current and prior HBV infection",
    "If HBsAg is positive, permanently withhold HCV DAAs regardless of HBV assessment",
    "If baseline HBV DNA is undetectable, omit all HBV follow-up during and after HCV DAAs"
  ],
  "rationale": "AASLD/IDSA HCV guidance requires HBV-status assessment and DNA testing when HBsAg-positive. Active HBV meeting treatment criteria needs therapy before or with DAAs; low-DNA HBsAg-positive disease needs prophylaxis or a defined monitoring plan. HBsAg positivity itself is not a DAA contraindication, and anti-HBs alone is incomplete screening."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-071"), {
  "choices": [
    "For HBsAg-positive disease with low HBV DNA that does not otherwise require treatment, choose prophylaxis through 12 weeks after DAAs or monthly HBV DNA monitoring with defined treatment triggers",
    "For HBsAg-positive disease with low HBV DNA, monitor ALT only and postpone HBV DNA testing until liver failure",
    "For HBsAg-positive disease with low HBV DNA, use anti-HCV antibody disappearance to decide when HBV prophylaxis can stop",
    "For HBsAg-positive disease with low HBV DNA, start treatment only when DNA is both more than tenfold higher and above 1,000 IU/mL regardless of baseline detectability"
  ],
  "rationale": "The HCV guidance offers prophylaxis or monthly HBV DNA monitoring during and immediately after DAAs in this defined group. Treatment triggers are a rise above tenfold baseline, or DNA above 1,000 IU/mL when baseline was undetectable or unquantifiable; these are separate conditions, not a universal requirement to meet both. ALT-only monitoring and anti-HCV antibody are not substitutes."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-072"), {
  "choices": [
    "Start HCV DAAs in an HBsAg-positive patient without assessing HBV DNA or arranging any HBV treatment, prophylaxis or monitoring plan",
    "Start HBV treatment before or with DAAs when the patient meets active HBV treatment criteria",
    "Use HBV DNA confirmation after a positive HBsAg result to guide the reactivation plan",
    "Investigate unexplained ALT elevation during or after DAAs in an HBsAg-negative patient with prior HBV infection"
  ],
  "rationale": "Beginning DAAs without an HBV assessment and plan creates avoidable reactivation risk, including severe hepatitis. The remaining actions are appropriate protections. Prior infection also warrants reactivation consideration when ALT rises, although the guidance does not prescribe one uniform HBV DNA schedule for that group."
});

// Source-verified HBV pregnancy and infant prevention review.
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-073"), {
  "choices": [
    "AASLD recommends TDF or TAF at week 28 for HBV DNA above 200,000 IU/mL; TDF has more pregnancy safety experience",
    "AASLD requires positive HBeAg as well as HBV DNA above 200,000 IU/mL for perinatal prophylaxis",
    "AASLD considers entecavir the preferred perinatal prophylaxis regardless of existing therapy",
    "Successful maternal prophylaxis replaces the infant vaccine and HBIG plan"
  ],
  "rationale": "The 2025 AASLD recommendation uses HBV DNA above 200,000 IU/mL at any time in pregnancy regardless of HBeAg. It supports TDF or TAF at week 28 and recognizes more extensive TDF pregnancy safety experience. Entecavir requires a pregnancy-appropriate specialist switch, and maternal treatment never removes the exposed infant CDC prophylaxis requirement."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-074"), {
  "choices": [
    "At week 31 with HBV DNA 350,000 IU/mL, arrange prompt TDF or TAF prophylaxis and the infant vaccine/HBIG plan",
    "At week 31 with HBV DNA 350,000 IU/mL, withhold prophylaxis because the week-28 start has passed",
    "At week 31 with HBV DNA 350,000 IU/mL, give the mother HBIG instead of considering antiviral prophylaxis",
    "At week 31 with HBV DNA 350,000 IU/mL, use a single maternal vaccine dose to suppress established HBV"
  ],
  "rationale": "HBV DNA 350,000 IU/mL exceeds the AASLD prophylaxis threshold. Its implementation guidance directs initiation promptly when an eligible patient presents after week 28. Maternal HBIG or vaccine does not substitute for antiviral suppression of established infection, and newborn vaccine plus HBIG is still required when maternal HBsAg is positive."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-075"), {
  "choices": [
    "Before stopping at delivery, distinguish temporary prophylaxis from ongoing maternal treatment; continue indicated therapy and arrange monitored follow-up if a stop is appropriate",
    "Stop every HBV antiviral at delivery, including treatment for cirrhosis, because perinatal transmission risk ends at birth",
    "After a prophylaxis-only stop, use infant anti-HBs instead of maternal HBV DNA and ALT to assess withdrawal flares",
    "Prohibit breastfeeding for every patient taking TDF or TAF, even when infant prophylaxis has been completed"
  ],
  "rationale": "AASLD permits a delivery-time stop only when prophylaxis was the sole indication and maternal therapy is not otherwise needed. A planned stop requires HBV DNA and ALT monitoring every 1-3 months for up to six months. Infant antibody does not measure maternal flares. AASLD supports TDF or TAF during breastfeeding; ongoing maternal treatment needs remain relevant."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-076"), {
  "choices": [
    "Stop indicated HBV therapy at delivery in a patient with cirrhosis and arrange no maternal follow-up",
    "Check whether a pregnant patient taking entecavir needs a specialist-directed switch to TDF or TAF",
    "Screen HBsAg in the current pregnancy even when a previous pregnancy had a negative result",
    "Coordinate the maternal antiviral plan with the delivery facility and infant clinician"
  ],
  "rationale": "The avoidable-risk action is stopping treatment needed for maternal cirrhosis and omitting follow-up. Delivery does not eliminate maternal HBV treatment needs or withdrawal-flare risk. Pregnancy-appropriate regimen review, current-pregnancy screening and a documented delivery handoff are protective actions."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-077"), {
  "choices": [
    "An infant of an HBsAg-positive parent needs single-antigen vaccine and HBIG in separate limbs within 12 hours regardless of birth weight",
    "An infant of an HBsAg-positive parent can omit HBIG when maternal HBV DNA becomes undetectable",
    "An infant below 2,000 g with an HBsAg-positive parent should wait until one month for all prophylaxis",
    "An infant of an HBsAg-positive parent needs anti-HBc testing at birth before vaccine or HBIG"
  ],
  "rationale": "CDC recommends both active vaccine and passive HBIG protection within 12 hours for all infants of HBsAg-positive parents. Maternal suppression and low birth weight do not remove that requirement. The low-weight birth dose is followed by three additional vaccine doses. Anti-HBc is not part of infant PVST and should not delay prophylaxis."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-078"), {
  "choices": [
    "For a 2,300-g newborn with maternal HBsAg pending and no other evidence of maternal HBV, give vaccine within 12 hours, test urgently and give HBIG promptly if positive, no later than day seven",
    "For a 2,300-g newborn with maternal HBsAg pending and no other evidence of maternal HBV, wait for the result before giving any vaccine",
    "For a 2,300-g newborn with maternal HBsAg pending and no other evidence of maternal HBV, give vaccine at birth but never add HBIG if the result later becomes positive",
    "For a 2,300-g newborn with maternal HBsAg pending and no other evidence of maternal HBV, use the one-month vaccine delay allowed for a small infant of a negative parent"
  ],
  "rationale": "At least 2,000 g with unknown maternal status and no other infection evidence, vaccine is due within 12 hours while testing proceeds. A positive result triggers HBIG as soon as possible and no later than seven days. The negative-parent low-weight delay does not fit this case. Below 2,000 g with unknown status, CDC requires vaccine and HBIG within 12 hours."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-079"), {
  "choices": [
    "For an exposed infant at ten months after a complete series, HBsAg-negative with anti-HBs 8 mIU/mL, give one additional vaccine dose and repeat PVST in 1-2 months",
    "For an exposed infant at ten months after a complete series, HBsAg-negative with anti-HBs 8 mIU/mL, declare protection because any detectable antibody is sufficient",
    "For an exposed infant at ten months after a complete series, HBsAg-negative with anti-HBs 8 mIU/mL, diagnose active infection from the low antibody alone",
    "For an exposed infant at ten months after a complete series, HBsAg-negative with anti-HBs 8 mIU/mL, order anti-HBc instead of arranging revaccination"
  ],
  "rationale": "The protected infant pattern requires negative HBsAg and anti-HBs at least 10 mIU/mL after a documented series. At 8 mIU/mL with negative HBsAg, ACIP recommends one additional dose and retesting in 1-2 months; persistent low anti-HBs leads to two further doses and another test. Low anti-HBs alone does not establish infection, and maternal anti-HBc can persist in infancy."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-080"), {
  "choices": [
    "Delay all prophylaxis until one month in a 1,800-g infant of an HBsAg-positive parent, applying the negative-parent low-weight rule",
    "Give that exposed low-weight infant vaccine and HBIG in separate limbs within 12 hours",
    "Plan three additional vaccine doses beginning at one month for that exposed low-weight infant",
    "Arrange HBsAg and anti-HBs PVST at age 9-12 months after completing that infant vaccine series"
  ],
  "rationale": "Delaying all prophylaxis exposes this infant to avoidable transmission risk. The one-month or discharge delay applies to an infant below 2,000 g with a documented HBsAg-negative parent. Positive maternal HBsAg requires vaccine plus HBIG within 12 hours regardless of weight, followed by three additional doses and appropriately timed PVST."
});

// Source-verified HBV monitoring and prevention review.
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-081"), {
  "choices": [
    "CDC recommends HepB vaccination for adults aged 19-59 and for adults at least 60 with risk; older adults without known risk may also receive it",
    "CDC excludes every adult aged 60 or older from hepatitis B vaccination",
    "Hepatitis B vaccination treats established chronic HBV infection",
    "A completed childhood vaccine series eliminates every possible need for adult HBV screening"
  ],
  "rationale": "The CDC adult vaccination pathway covers ages 19-59 and risk-based vaccination at age 60 or older, with protection available to older adults without identified risk. Vaccination prevents infection and does not treat established HBV. Screening and vaccination answer different questions."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-082"), {
  "choices": [
    "Offer vaccination to a susceptible adult when screening is unavailable or declined, and offer testing again later",
    "Defer all vaccination until the adult agrees to triple-panel testing",
    "Give HBIG instead of a vaccine series for routine adult immunization",
    "Use the adult vaccine to suppress the DNA of established chronic HBV"
  ],
  "rationale": "CDC states that prevaccination testing should not be a barrier. Offer screening and vaccination as appropriate, but lack of testing should not prevent a susceptible person from being vaccinated. HBIG is not a routine series substitute, and vaccine does not treat chronic infection."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-083"), {
  "choices": [
    "For an adult who received one valid PreHevbrio dose before recall, complete an appropriate schedule with an available licensed HepB product",
    "Restart the entire series solely because the prior valid PreHevbrio product is unavailable",
    "Use remaining recalled PreHevbrio stock so all doses have the same manufacturer",
    "Treat one prior PreHevbrio dose as a complete hepatitis B series"
  ],
  "rationale": "CDC directs providers to stop using remaining recalled PreHevbrio and complete started series with an appropriate available product. A previously valid dose does not become a reason to restart. Product and interval rules still matter; one dose does not complete that series."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-084"), {
  "choices": [
    "Defer the birth dose solely because the parent is confirmed HBsAg-negative in a medically stable 2,300-g newborn",
    "Give vaccine and HBIG within 12 hours to a newborn of an HBsAg-positive parent",
    "Offer vaccination to a susceptible 45-year-old who declines screening",
    "Complete a valid pre-recall PreHevbrio series with an appropriate available licensed product"
  ],
  "rationale": "The currently posted CDC schedule gives medically stable infants at least 2,000 g of confirmed-negative parents a dose within 24 hours. Routine deferral solely for that negative status is the error. The other choices apply exposed-infant prophylaxis, remove a testing barrier or complete a valid series using current products."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-085"), {
  "choices": [
    "On oral HBV therapy, DNA tracks viral suppression while ALT helps track liver injury; both need follow-up",
    "ALT normalization proves that serum HBV DNA is undetectable",
    "An undetectable DNA result rules out all drug toxicity",
    "One suppressed DNA result establishes eradication of the nuclear HBV reservoir"
  ],
  "rationale": "HBV DNA and ALT describe different responses. AASLD recommends continued virologic monitoring, while medication safety and liver risk still need assessment. ALT alone does not quantify viral suppression, and DNA suppression does not establish eradication."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-086"), {
  "choices": [
    "Arrange HBV DNA about every three months until undetectable, then every three to six months, with liver and regimen-specific safety review",
    "Stop HBV DNA testing permanently after the first undetectable result",
    "Use symptoms alone to decide whether oral antiviral treatment is effective",
    "Apply annual-only testing to every patient regardless of the selected guideline or disease risk"
  ],
  "rationale": "The AASLD oral-treatment monitoring approach uses three-month DNA testing until undetectable and three-to-six-month testing thereafter. Pair it with liver and safety assessment. The WHO resource-adapted annual minimum is a distinct pathway, with more frequent testing in specified circumstances."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-087"), {
  "choices": [
    "For a rise from a nadir of 20 to 400 IU/mL during therapy, repeat HBV DNA and assess adherence and interactions before deciding on a regimen change",
    "Change the antiviral immediately after that one result without confirmation or adherence review",
    "Dismiss the rise because ALT is normal",
    "Conclude that every low-level detectable DNA result proves drug resistance"
  ],
  "rationale": "A rise from 20 to 400 IU/mL is twentyfold, exceeding the AASLD greater-than-one-log breakthrough criterion. Confirmatory testing and adherence assessment are needed before a treatment change. Normal ALT does not exclude a virologic problem; detectable DNA alone does not prove resistance."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-088"), {
  "choices": [
    "Omit TAF renal monitoring because its renal/bone profile is better than TDF",
    "Assess creatinine, estimated clearance and urine glucose/protein during TAF treatment as clinically appropriate",
    "Add serum phosphorus assessment in a patient with chronic kidney disease receiving TAF",
    "Investigate persistent bone pain or muscle weakness for possible tubulopathy in an at-risk TDF patient"
  ],
  "rationale": "The harmful error is treating lower relative toxicity as absence of monitoring need. TAF labeling still requires renal assessment; phosphorus is included for chronic kidney disease. The remaining choices reflect label-directed renal or symptom evaluation."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-089"), {
  "choices": [
    "Stopping oral HBV therapy can cause a severe hepatitis flare even after DNA suppression, so any supervised stop needs selection and follow-up",
    "An undetectable HBV DNA result guarantees that a treatment stop cannot cause relapse",
    "Quantitative HBsAg below 100 IU/mL guarantees a safe stop without monitoring",
    "Normal ALT alone is sufficient to authorize oral-therapy withdrawal"
  ],
  "rationale": "The book and labels warn of exacerbation after withdrawal, and AASLD requires restrictive selection with frequent follow-up for exceptional stopping. Neither suppression, normal ALT nor a low quantitative HBsAg value guarantees safety."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-090"), {
  "choices": [
    "For an HBeAg-negative adult without cirrhosis and with sustained DNA suppression, generally continue oral therapy until HBsAg loss under AASLD 2025",
    "Stop automatically after two years of undetectable DNA regardless of other findings",
    "Permit an exceptional stop whenever just one of the AASLD selection criteria is met",
    "Use completion of a 48-week peginterferon course as the stopping rule for every oral agent"
  ],
  "rationale": "AASLD Recommendation 5 conditionally favors continued oral therapy until HBsAg loss, with very low-certainty evidence. A desired earlier stop requires a shared decision and all selection conditions, not suppression alone. Finite peginterferon treatment is a separate pathway."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-091"), {
  "choices": [
    "After a supervised oral-therapy stop, plan ALT/DNA every one to three months for six months and restart promptly for DNA at least 10,000 IU/mL even if ALT is normal",
    "After the same stop, wait for both DNA at least 10,000 IU/mL and jaundice before restarting",
    "After the same stop, test DNA only if symptoms develop",
    "After the same stop, defer all laboratory follow-up for one year"
  ],
  "rationale": "The AASLD post-withdrawal plan monitors ALT and DNA every one to three months initially, then every three months for the following six to twelve months and every three to six months thereafter. DNA at least 10,000 IU/mL independently triggers immediate restart; jaundice or a second threshold is not required."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-092"), {
  "choices": [
    "Treat an HBV medication-access lapse as a harmless holiday and wait for jaundice before seeking care",
    "Arrange refills and access support before a potential gap",
    "Document all AASLD exceptional-stop conditions before a shared stopping decision",
    "Assign responsibility for laboratory review and independent restart triggers before a supervised withdrawal"
  ],
  "rationale": "Unplanned withdrawal can cause severe hepatitis exacerbation and liver failure. Waiting for jaundice is the harmful error. Advance access planning and a documented supervised-stop pathway are protective actions, leaving one keyed error."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-101"), {
  "choices": [
    "Eligible HBV patients continue ultrasound with AFP about every six months despite antiviral DNA suppression",
    "DNA suppression eliminates HCC risk in every patient with HBV cirrhosis",
    "ALT testing alone replaces indicated HCC surveillance",
    "Vaccination status alone determines HCC surveillance eligibility"
  ],
  "rationale": "AASLD surveillance depends on liver and host risk, and suppression does not eliminate that risk. The usual indicated pathway combines ultrasound and AFP at approximately six-month intervals. ALT and vaccination status do not replace risk assessment or imaging."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-102"), {
  "choices": [
    "For chronic HBV with Child-Pugh A cirrhosis, arrange ultrasound with AFP about every six months despite undetectable DNA",
    "For the same patient, stop surveillance because the latest DNA is undetectable",
    "For the same patient, use ALT alone as the cancer-screening test",
    "For the same patient, wait for abdominal symptoms before considering surveillance"
  ],
  "rationale": "Child-Pugh A cirrhosis is an AASLD surveillance target. Effective antiviral therapy does not discharge the patient from that pathway; biochemical testing or symptom-triggered care cannot replace scheduled surveillance."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-103"), {
  "choices": [
    "Continue surveillance in a man who lost HBsAg at age 45, applying the AASLD post-HBsAg-loss pathway",
    "Stop surveillance in that man solely because HBsAg is now negative",
    "Require that man to have both cirrhosis and a family history before any surveillance is considered",
    "Apply the same post-loss age threshold to men and women without checking the guideline"
  ],
  "rationale": "AASLD 2025 conditionally suggests continued surveillance for men who lose HBsAg after age 40 and women after age 50, as well as people with cirrhosis or a family history of HCC. These are alternative risk groups; HBsAg loss alone does not remove the indication."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-104"), {
  "choices": [
    "Stop indicated HCC surveillance in a patient with HBV and Child-Pugh A cirrhosis solely because HBV DNA is undetectable",
    "Schedule ultrasound with AFP at about six-month intervals for that patient",
    "Review family history, coinfection and liver stage when deciding surveillance eligibility",
    "Continue surveillance after HBsAg loss when the applicable AASLD risk criteria remain met"
  ],
  "rationale": "Suppressed DNA does not eliminate HCC risk in cirrhosis, so stopping indicated surveillance solely for suppression is harmful. The other options maintain scheduled surveillance or correctly reassess residual risk."
});

// Source-verified HBV reactivation and integrated-case review.
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-093"), {
  "choices": [
    "Resolved HBV can reactivate during anti-CD20 therapy even with positive anti-HBs and undetectable baseline DNA",
    "Positive anti-HBs eliminates reactivation risk during rituximab",
    "Only currently HBsAg-positive patients can reactivate",
    "Every immune-modifying regimen has the same HBV risk"
  ],
  "rationale": "Past natural HBV infection remains relevant during B-cell depletion. Neither surface antibody nor baseline DNA suppression cancels the AASLD prophylaxis indication. Risk depends on both serostatus and the exact immune regimen."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-094"), {
  "choices": [
    "Before immune treatment, obtain the triple panel and use serostatus, baseline DNA/ALT and the exact regimen to plan prevention",
    "Check HBsAg alone and omit core antibody in every patient",
    "Wait until jaundice develops before testing HBV status",
    "Select prophylaxis solely from the latest ALT result"
  ],
  "rationale": "Screening must identify current and prior infection. HBsAg alone misses anti-HBc-positive past HBV; ALT alone neither identifies infection nor classifies regimen risk. Arrange the prevention decision before immune treatment when feasible."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-095"), {
  "choices": [
    "For HBsAg-negative/anti-HBc-positive past HBV before rituximab, start a suitable high-barrier antiviral under the AASLD prophylaxis pathway",
    "For that patient, omit prophylaxis solely because anti-HBs is positive",
    "For that patient, substitute vaccine alone for the indicated antiviral",
    "For that patient, wait for an ALT flare before making a prevention plan"
  ],
  "rationale": "AASLD recommends prophylaxis for anti-CD20 therapy in past HBV. Entecavir, TDF or TAF can be selected with patient and label review; antibody positivity and absent baseline viremia do not remove the indication."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-096"), {
  "choices": [
    "Rely on HBsAg alone and miss anti-HBc-positive past HBV before rituximab",
    "Obtain HBsAg, total anti-HBc and anti-HBs before immune treatment",
    "Review baseline DNA and the specific immune regimen when HBV markers are positive",
    "Arrange indicated high-barrier prophylaxis before or with anti-CD20 therapy"
  ],
  "rationale": "The keyed error misses a group in which AASLD recommends prevention. The other actions identify prior infection, characterize risk or provide timely prophylaxis, leaving one harmful action."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-097"), {
  "choices": [
    "AASLD prophylaxis continues during immune treatment and at least six months afterward, with at least twelve months after anti-CD20 therapy",
    "Stop indicated prophylaxis automatically on the day of the last immune-treatment dose",
    "Use the same six-month stop date for every anti-CD20 patient",
    "Treat the minimum duration as a guarantee that delayed reactivation cannot occur"
  ],
  "rationale": "AASLD specifies minimum durations of six months after most finite immune treatment and twelve months after anti-CD20 therapy. Late reactivation and independent chronic-HBV treatment needs require an individualized later plan."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-098"), {
  "choices": [
    "Document the named pathway, start date, minimum duration, later monitoring and the clinician who will act on results",
    "Wait until the antiviral runs out before assigning a follow-up clinician",
    "Assume the end of chemotherapy automatically ends every HBV-care obligation",
    "Use one universal stop date for finite therapy, anti-CD20 treatment and ongoing transplant immunosuppression"
  ],
  "rationale": "A completed handoff makes prevention executable across teams. Immune regimen, serostatus, delayed risk and ordinary HBV treatment indications determine the later plan; finite-course minimums are not universal stop dates."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-099"), {
  "choices": [
    "For past HBV managed without prophylaxis under AASLD, arrange DNA every one to three months with ALT/HBsAg review and rapid treatment if reactivation appears",
    "For the same patient, use annual-only DNA testing during immune treatment",
    "For the same patient, wait for jaundice before reviewing detectable DNA",
    "For the same patient, conclude that undetectable baseline DNA makes later testing unnecessary"
  ],
  "rationale": "AASLD monitoring without prophylaxis requires frequent DNA assessment and reliable action. Detectable DNA or reappearance of HBsAg is reactivation in past HBV. Symptoms and normal baseline results do not replace that surveillance."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-100"), {
  "choices": [
    "End prophylaxis and follow-up automatically with the last rituximab dose in a patient with past HBV",
    "Plan at least twelve months of prophylaxis after anti-CD20 therapy under AASLD and individualize subsequent care",
    "Assign a clinician and dates for laboratory follow-up after immune treatment",
    "Reassess ongoing HBV treatment needs before deciding whether prophylaxis can stop"
  ],
  "rationale": "Prematurely ending prevention with the last immune-treatment dose ignores delayed risk. The other options preserve the AASLD minimum and continued assessment, giving one defensible harmful answer."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-105"), {
  "choices": [
    "Complete HBV care connects infection classification, liver stage, treatment indication, exact regimen, prevention and dated follow-up",
    "A drug prescription alone completes care after the first suppressed DNA result",
    "Vaccine alone treats established chronic HBV",
    "Positive anti-HBs makes all future immune-regimen reviews unnecessary"
  ],
  "rationale": "HBV care combines viral, liver, medication and prevention decisions. A prescription or a single marker does not establish eradication, remove liver risk or replace follow-up; vaccination prevents new infection."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-106"), {
  "choices": [
    "Assign a clinician and date to each pending DNA result, safety test, indicated surveillance study, refill and prevention task",
    "Document only that results were ordered without assigning result review",
    "Stop reviewing safety after one undetectable DNA result",
    "Schedule HCC surveillance only when a patient with cirrhosis develops symptoms"
  ],
  "rationale": "A closed loop includes both the task and responsibility for the result or next action. Viral response does not remove drug safety or cirrhosis-related surveillance needs."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-107"), {
  "choices": [
    "For the nucleoside-naive, HIV-negative worked-case man with compensated cirrhosis and CrCl 80 mL/min, use a suitable antiviral and retain labs, contact prevention and six-month ultrasound/AFP",
    "For that patient, defer all HBV therapy solely because he has no symptoms",
    "For that patient, cancel surveillance after viral suppression",
    "For that patient, select the regimen without reviewing HIV status or kidney function"
  ],
  "rationale": "The worked case has a treatment indication and an HCC-surveillance indication from cirrhosis. A suitable regimen still requires product and patient review, and suppression does not discharge either longitudinal plan."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-108"), {
  "choices": [
    "Issue a prescription with no arrangement for result review, refills or indicated surveillance",
    "State the drug, dose, food instructions and treatment indication",
    "Assign owners and dates for viral/safety results and imaging",
    "Reconcile HIV status, liver stage, kidney function and interactions before prescribing"
  ],
  "rationale": "An isolated prescription leaves necessary decisions and follow-up unfinished. Each other action supports an executable patient-specific plan, leaving one keyed error."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-109"), {
  "choices": [
    "Transitions can interrupt HBV-active treatment or indicated surveillance, so the regimen and pending tasks need reconciliation",
    "Hospital transfer makes an active HBV prescription unnecessary",
    "A new clinician should stop HBV therapy until jaundice proves a need",
    "Undetectable DNA removes the need to carry forward cirrhosis surveillance"
  ],
  "rationale": "The book and labels identify flares after treatment withdrawal. Clinical transitions must preserve suitable therapy, monitoring and liver-risk follow-up; viral suppression alone does not justify abandoning them."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-110"), {
  "choices": [
    "At transfer, confirm the exact product, dose, administration, next supply, pending tests and the receiving clinician",
    "Transfer only the drug class without a dose or food rule",
    "Assume the receiving team will discover every pending result without communication",
    "Cancel the next surveillance study solely because the patient is changing practices"
  ],
  "rationale": "Transfer reconciliation keeps the medication and follow-up plan connected. Product and administration details, available supply, pending results and assigned ownership are all relevant to continuity."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-111"), {
  "choices": [
    "For the cirrhosis case with suppressed DNA, preserve entecavir access and patient-specific monitoring and hand over the next ultrasound/AFP date",
    "For that patient, stop entecavir automatically after the first suppressed DNA result",
    "For that patient, replace scheduled HCC surveillance with symptom-only review",
    "For that patient, wait until medication is exhausted to identify the receiving prescriber"
  ],
  "rationale": "The worked case links ongoing suitable therapy, viral and safety assessment and cirrhosis surveillance. A transfer should preserve these tasks with dated ownership instead of waiting for symptoms or missed doses."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-112"), {
  "choices": [
    "Allow a transfer to create an unplanned antiviral gap or lose indicated cirrhosis surveillance without follow-up",
    "Confirm medication supply before the next dose is due",
    "Carry the next ultrasound/AFP date and pending results to the receiving clinician",
    "Reconcile the exact product, kidney/liver context and interaction list during transfer"
  ],
  "rationale": "The harmful error is losing treatment continuity or indicated surveillance without a plan. The other choices prevent that failure. The book and labels warn about withdrawal flares, and suppression does not erase cirrhosis-related HCC risk."
});

// Final whole-module reconciliation: distinct, source-supported assessment applications.
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-039"), {
  "choices": [
    "For an eligible adult taking Viread tablets, retain the original moisture-protective container, renal/bone monitoring and uninterrupted supply",
    "Repackage Viread tablets in an open container because viral suppression removes storage requirements",
    "Replace Viread with any TAF-containing HIV combination without product or regimen review",
    "Omit renal follow-up after one undetectable HBV DNA result"
  ],
  "rationale": "Viread labeling and the book require the original container, kept tightly closed. Storage does not replace renal and bone safety or continuity. Shared antiviral ingredients do not establish product interchangeability, and suppressed DNA does not remove monitoring."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-040"), {
  "choices": [
    "Continue TDF despite findings suggestive of lactic acidosis or pronounced hepatotoxicity solely because HBV DNA is suppressed",
    "Arrange urgent assessment and clinician-directed treatment suspension for suspected severe metabolic toxicity",
    "Review renal function, tubular markers and bone risk while prescribing TDF",
    "Plan liver follow-up and an appropriate antiviral strategy when a safety-directed interruption is necessary"
  ],
  "rationale": "Continuing despite suspected lactic acidosis or pronounced hepatotoxicity is the harmful action. The Viread label directs suspension and assessment; marked transaminase elevation is not required. Viral suppression cannot override toxicity, while an interruption still requires management of HBV withdrawal risk."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-043"), {
  "choices": [
    "For an otherwise eligible Vemlidy patient taking phenytoin, arrange interaction and regimen review because the combination is not recommended",
    "For that patient, ignore phenytoin because TAF is unaffected by transport-protein induction",
    "For that patient, automatically use two Vemlidy tablets by applying the carbamazepine exception to phenytoin",
    "For that patient, replace interaction review with a normal ALT result"
  ],
  "rationale": "Phenytoin can lower TAF exposure through induction; Vemlidy labeling does not recommend the combination. Its two-tablet instruction is specific to carbamazepine and must not be transferred to another inducer. Normal ALT does not exclude an absorption interaction."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-047"), {
  "choices": [
    "For a nucleoside-naive, HIV-negative adult with compensated HBV and CrCl 35 mL/min, use the 0.5-mg renal column: 0.25 mg daily as 5 mL of 0.05-mg/mL solution, with fasting administration",
    "For that same adult, give 0.5 mg daily because compensation removes the need for renal adjustment",
    "For that same adult, use the decompensation starting-dose column despite compensated disease",
    "For that same adult, give 0.25 mL of the 0.05-mg/mL solution to deliver 0.25 mg"
  ],
  "rationale": "The entecavir adult renal table permits 0.25 mg daily or 0.5 mg every 48 hours at CrCl 30 to below 50 in the usual 0.5-mg starting-dose column. Daily regimens are preferred and oral solution is recommended below 0.5 mg. Volume is 0.25 mg / 0.05 mg/mL = 5 mL; the empty-stomach rule still applies."
});
Object.assign(chronicHepatitisBQuestionBank.find((question) => question.id === "chronic-hepatitis-b-051"), {
  "choices": [
    "When a prior medication list says Epivir-HBV, verify the HBV dose, HIV status and resistance history rather than assuming it is interchangeable with Epivir for HIV",
    "Replace Epivir used in an HIV regimen with Epivir-HBV 100 mg daily because both contain lamivudine",
    "Treat the HBV dose of lamivudine alone as fully suppressive treatment for both viruses",
    "Presume that a prior lamivudine prescription cannot affect later entecavir resistance risk"
  ],
  "rationale": "Epivir-HBV is the lower-dose HBV product, not a substitute for the HIV formulation or effective combination ART. The book and reviewed FDA label emphasize this distinction. Prior lamivudine exposure and resistance also matter when choosing a high-barrier HBV strategy; matching ingredient names is insufficient."
});
