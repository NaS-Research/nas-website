const concepts = [
  ["definition", "Acute liver failure combines acute liver injury, INR at least 1.5, and hepatic encephalopathy in a patient without preexisting cirrhosis, generally within 26 weeks of illness onset.", "Treat suspected ALF as an emergency and contact a transplant-capable center before the cause is fully known.", "Calling isolated severe aminotransferase elevation ALF without coagulopathy and encephalopathy misclassifies acute liver injury."],
  ["hyperacute-subacute", "Hyperacute acetaminophen or ischemic ALF may have enormous aminotransferase values and early cerebral edema, while subacute causes can show lower enzymes, higher bilirubin, ascites, and less spontaneous recovery.", "Use tempo and phenotype to prioritize causes and anticipate complications without using tempo alone as a diagnosis.", "Assuming lower aminotransferases indicate milder disease can miss extensive hepatocyte loss or a subacute poor-prognosis syndrome."],
  ["etiology", "Major ALF causes include acetaminophen, idiosyncratic drugs, viral hepatitis, autoimmune hepatitis, ischemia, Wilson disease, pregnancy-related disease, vascular causes, and indeterminate injury.", "Send a broad cause-specific workup immediately because several treatments are time sensitive.", "Waiting for every result before beginning acetylcysteine, acyclovir when indicated, or transplant referral can close a rescue window."],
  ["initial-workup", "The first ALF evaluation integrates exposure history, acetaminophen concentration, toxicology, viral testing, autoimmune markers, pregnancy testing, copper and hemolysis studies when appropriate, imaging, and serial organ assessment.", "Collect critical diagnostic samples early while stabilizing airway, circulation, glucose, and neurologic status.", "A negative acetaminophen concentration excludes neither delayed presentation nor repeated supratherapeutic exposure."],
  ["acetaminophen-mechanism", "Excess acetaminophen saturates conjugation, increases CYP-mediated NAPQI, depletes glutathione, and causes centrilobular necrosis.", "Identify every acetaminophen-containing product and establish when ingestion began and whether it extends beyond 24 hours.", "Using the acute nomogram for unknown-time exposure or ingestion spanning more than 24 hours can falsely exclude toxicity."],
  ["acetylcysteine", "Acetylcysteine replenishes glutathione capacity and supports additional protective pathways, with the greatest benefit when started early.", "Start promptly when indicated. Before stopping IV acetylcysteine, assess acetaminophen below 10 micrograms/mL, AST/ALT at baseline or falling 25% to 50% from peak, INR below 2, and improving prognostic markers together with the clinical condition.", "Stopping automatically after a fixed bag sequence while laboratory or clinical stopping criteria remain unmet can terminate effective treatment too soon."],
  ["non-apap-nac", "Intravenous acetylcysteine may improve transplant-free survival in selected early-stage non-acetaminophen ALF but is not a substitute for etiology-specific therapy or transplant assessment.", "Use center protocol and specialist guidance while continuing diagnostic and transplant pathways.", "Assuming NAC cures every non-acetaminophen ALF cause can delay definitive rescue."],
  ["icu-transfer", "ALF can progress rapidly through encephalopathy, shock, hypoglycemia, kidney injury, infection, cerebral edema, and multiorgan failure.", "Admit to an ICU with continuous reassessment and arrange early transfer to a transplant center.", "Waiting until grade III or IV encephalopathy to discuss transfer may make transport unsafe and evaluation incomplete."],
  ["neurologic-monitoring", "Hepatic encephalopathy in ALF can progress quickly and may be accompanied by intracranial hypertension, especially in hyperacute disease.", "Perform serial neurologic examinations, minimize unnecessary stimulation and sedatives, protect the airway when needed, and use center-specific neuro-monitoring.", "Treating ALF encephalopathy like chronic cirrhotic encephalopathy with routine lactulose alone ignores cerebral edema risk."],
  ["cerebral-edema", "Cerebral edema management includes head elevation, avoidance of hypotonic fluids, prevention of hyperthermia and hypoxemia, and specialist-directed hyperosmolar therapy.", "Use mannitol or hypertonic saline for suspected intracranial hypertension according to hemodynamics, sodium, kidney function, and center protocol.", "Prophylactic repeated mannitol without evidence or monitoring can cause hypovolemia, hyperosmolarity, and kidney injury."],
  ["ammonia-rrt", "High and rising ammonia is associated with cerebral edema, and continuous renal replacement therapy can support ammonia control, kidney function, acid-base balance, and fluid management.", "Consider early CRRT in severe hyperammonemia, AKI, acidosis, volume overload, or worsening encephalopathy using transplant-center thresholds.", "Intermittent dialysis with abrupt hemodynamic shifts may be less suitable when cerebral edema and instability are major concerns."],
  ["hemodynamics", "ALF often produces vasodilatory shock with relative adrenal, cardiac, and microcirculatory dysfunction.", "Restore perfusion with careful crystalloid assessment and norepinephrine as the usual first-line vasopressor, then individualize additional support.", "Large unmonitored fluid loads can worsen pulmonary and cerebral edema without restoring effective perfusion."],
  ["renal-metabolic", "AKI, lactic acidosis, hypoglycemia, electrolyte disorders, and phosphate shifts are common and affect prognosis and drug clearance.", "Monitor glucose frequently, provide dextrose when needed, adjust medications, avoid nephrotoxins, and use CRRT for standard or ALF-specific indications.", "Interpreting creatinine without urine output, hemodynamics, exposure, and changing muscle mass can underestimate kidney failure."],
  ["coagulopathy", "INR in ALF reflects reduced procoagulant synthesis but does not fully describe balanced hemostasis or predict bleeding by itself.", "Avoid routine plasma correction unless active bleeding or an invasive procedure requires it, because correction obscures prognosis and can cause volume harm.", "Giving plasma solely to normalize INR can hide deterioration and does not treat liver failure."],
  ["infection", "ALF causes immune dysfunction, and infection can be clinically subtle while worsening encephalopathy, shock, and transplant candidacy.", "Obtain cultures and imaging from clinical evidence, maintain a low threshold for empiric therapy in deterioration, and reassess daily.", "Normal temperature and white count do not exclude serious infection in ALF."],
  ["nutrition-medication", "ALF care requires adequate energy, avoidance of prolonged fasting, enteral nutrition when feasible, and aggressive medication stewardship.", "Review every sedative, nephrotoxin, hepatotoxin, dose, solvent, sodium load, and enteral or intravenous route each day.", "Routine prolonged protein elimination can worsen catabolism without reliably controlling cerebral edema."],
  ["viral-alf", "HSV hepatitis can cause rapidly fatal ALF with fever and very high aminotransferases, sometimes without skin lesions, while HBV and other viruses require cause-specific testing and treatment.", "Consider empiric intravenous acyclovir in compatible or indeterminate ALF until HSV testing returns and use current antiviral pathways for identified viral causes.", "Waiting for mucocutaneous lesions before considering HSV can miss a treatable emergency."],
  ["autoimmune-alf", "Acute severe autoimmune hepatitis may present with negative or weak serology and requires integration of immunoglobulins, phenotype, imaging, and often biopsy.", "Coordinate a time-limited corticosteroid trial in selected patients while transplant evaluation proceeds and stop futile therapy when deterioration continues.", "Prolonged steroids in a nonresponder can increase infection while delaying transplant."],
  ["wilson-alf", "Wilson-associated ALF often occurs in younger patients with Coombs-negative hemolysis, high bilirubin, relatively low alkaline phosphatase, kidney injury, and rapidly progressive failure.", "Treat it as an urgent transplant indication and use copper studies and hemolysis evidence without delaying referral for liver biopsy or chelation response.", "Chelation alone is not a reliable rescue for Wilson ALF."],
  ["pregnancy-alf", "Acute fatty liver of pregnancy and HELLP require immediate obstetric recognition, maternal stabilization, and delivery planning, while viral, drug, vascular, and other causes remain possible.", "Coordinate maternal-fetal medicine, hepatology, anesthesia, critical care, and transplant expertise without using obsolete pregnancy risk letters.", "Attributing every late-pregnancy liver abnormality to HELLP without checking glucose, ammonia, coagulation, hemolysis, blood pressure, and competing causes is unsafe."],
  ["vascular-ischemic", "Ischemic hepatitis, Budd-Chiari syndrome, heat injury, and malignant infiltration can mimic or cause ALF and require distinct rescue pathways.", "Use hemodynamic history, LDH, Doppler or cross-sectional imaging, cardiac assessment, and exposure context to identify reversible drivers.", "Calling a massive AST rise acetaminophen toxicity without checking shock and vascular flow can misdirect treatment."],
  ["prognostication", "King's College criteria, MELD, lactate, phosphate, factor V, encephalopathy grade, cause, tempo, and organ failures inform prognosis but no score replaces serial transplant-team judgment.", "Calculate validated criteria correctly and repeat the assessment as the trajectory changes.", "A patient who does not yet meet one threshold can still require immediate transplant-center evaluation."],
  ["transplant", "Emergency liver transplantation is definitive therapy for selected ALF patients unlikely to recover spontaneously.", "Begin medical, psychosocial, infectious, cardiovascular, financial, and surgical evaluation in parallel with ICU care.", "Treating transplant referral as a final step after all medical therapy fails wastes critical time."],
  ["bleeding-procedures", "Spontaneous major bleeding is less common than INR suggests, but invasive procedures and gastrointestinal bleeding still require careful planning.", "Use the least invasive diagnostic route, ultrasound guidance, viscoelastic testing when available, and targeted blood products for bleeding or procedures.", "Correcting every laboratory abnormality prophylactically exposes patients to transfusion and volume complications."],
  ["closed-loop", "ALF management depends on minute-to-minute trends, clear team ownership, cause-specific therapy, transplant decisions, family communication, and recovery planning.", "Use a shared checklist for neurologic grade, glucose, ammonia, INR, lactate, kidneys, infection, hemodynamics, treatment milestones, and listing status.", "Fragmented specialty notes without one time-stamped plan can produce contradictory medications and delayed escalation."],
  ["airway-transport", "Worsening encephalopathy can rapidly impair airway protection, while intubation, sedation, ventilation, and transport can alter cerebral perfusion and obscure the neurologic examination.", "Plan airway management with critical care and transplant teams before urgent transport, using hemodynamically cautious induction and the least sedation needed for safety.", "Delaying airway planning until aspiration, severe agitation, or profound coma develops can make stabilization and transfer more dangerous."],
  ["dose-route-review", "Changing hepatic clearance, kidney function, perfusion, enteral absorption, and neurologic status can alter the benefit and harm of every medication used during ALF.", "Reassess indication, dose, interval, route, formulation, vehicle, interactions, and measurable stop criteria after every meaningful organ change.", "Continuing admission medication doses unchanged during evolving multiorgan failure can compound sedation, hypotension, kidney injury, or toxicity."],
  ["integrated-priorities", "A useful ALF plan separates immediate threats from time-sensitive diagnostic work, cause-specific rescue, organ support, and transplant decisions without treating them as sequential tasks.", "Assign an owner and deadline to each parallel priority, then update the shared plan when new trends or results change the risk hierarchy.", "Completing the diagnostic workup before beginning stabilization, antidotal therapy, or transplant evaluation creates preventable delay."],
  ["recovery-follow-up", "Survival from ALF does not by itself establish complete hepatic, cognitive, physical, or medication recovery.", "Arrange follow-up for liver tests, function, cognition, nutrition, rehabilitation, medication reconciliation, and cause-specific specialty care.", "Discharging a survivor without confirming ownership of laboratory and functional follow-up can allow persistent injury or disability to go unrecognized."],
  ["recurrence-prevention", "Preventing recurrent injury requires a cause-specific plan that patients and caregivers can apply after hospitalization.", "Document avoidances, safe medication use, vaccination or infection prevention when relevant, warning symptoms, emergency contacts, and mental-health support after intentional exposure.", "Generic advice to avoid all medicines can create fear and undertreatment while failing to address the actual cause of liver failure."],
];

const reviewLessonByConcept = {
  definition: "definition-tempo",
  "hyperacute-subacute": "definition-tempo",
  etiology: "etiology-workup",
  "initial-workup": "etiology-workup",
  "acetaminophen-mechanism": "acetaminophen-rescue",
  acetylcysteine: "acetaminophen-rescue",
  "non-apap-nac": "acetaminophen-rescue",
  "icu-transfer": "icu-transfer",
  "airway-transport": "icu-transfer",
  "neurologic-monitoring": "brain-ammonia",
  "cerebral-edema": "brain-ammonia",
  "ammonia-rrt": "brain-ammonia",
  hemodynamics: "organ-support",
  "renal-metabolic": "organ-support",
  infection: "organ-support",
  coagulopathy: "coagulation-procedures",
  "bleeding-procedures": "coagulation-procedures",
  "viral-alf": "cause-specific-treatment",
  "autoimmune-alf": "cause-specific-treatment",
  "wilson-alf": "cause-specific-treatment",
  "pregnancy-alf": "cause-specific-treatment",
  "vascular-ischemic": "cause-specific-treatment",
  prognostication: "prognosis-transplant",
  transplant: "prognosis-transplant",
  "nutrition-medication": "medication-stewardship",
  "dose-route-review": "medication-stewardship",
  "closed-loop": "integrated-case",
  "integrated-priorities": "integrated-case",
  "recovery-follow-up": "closed-loop",
  "recurrence-prevention": "closed-loop",
};

const dimensions = [["principle", "Which statement is most accurate?", 0], ["action", "Which action best applies the evidence?", 1], ["integration", "Which plan demonstrates the strongest clinical reasoning?", 1], ["hazard", "Which error creates the greatest avoidable risk?", 2]];
const generic = ["Wait for every diagnostic result before contacting a transplant center.", "Use aminotransferase height alone to decide whether the patient is improving.", "Normalize every laboratory value without considering physiology, trajectory, or treatment consequences."];

const generated = concepts.flatMap(([slug, principle, action, hazard], conceptIndex) => dimensions.map(([dimension, stem, answerType], dimensionIndex) => {
  const correct = [principle, action, hazard][answerType];
  const choices = dimension === "hazard" ? [hazard, principle, action, generic[(conceptIndex + dimensionIndex) % 3]] : [correct, hazard, generic[(conceptIndex + dimensionIndex) % 3], generic[(conceptIndex + dimensionIndex + 1) % 3]];
  return { id: `acute-liver-failure-${String(conceptIndex * 4 + dimensionIndex + 1).padStart(3, "0")}`, question: `${stem} Focus: ${slug.replaceAll("-", " ")}.`, choices, answer: 0, rationale: `${principle} ${action}`, reviewHref: `#${reviewLessonByConcept[slug]}`, difficulty: dimensionIndex < 2 ? "foundational" : "advanced" };
}));

const acetylcysteineCases = [
  {
    "id": "acute-liver-failure-021",
    "question": "At the end of an IV acetylcysteine course, acetaminophen is 6 micrograms/mL but INR is 2.4 and lactate is worsening. What is the appropriate response?",
    "choices": [
      "Stop because acetaminophen is below 10",
      "Continue treatment and obtain toxicology guidance because stopping criteria are not all met",
      "Stop because the scheduled bags are complete",
      "Use acetaminophen concentration as the only stopping criterion"
    ],
    "answer": 1,
    "rationale": "A low acetaminophen concentration alone does not justify stopping. INR and prognostic markers remain unfavorable.",
    "reviewHref": "#acetaminophen-rescue",
    "difficulty": "advanced"
  },
  {
    "id": "acute-liver-failure-022",
    "question": "Which laboratory pattern satisfies the ACMT 2026 laboratory criteria for considering discontinuation of IV acetylcysteine, with clinical assessment and expert guidance?",
    "choices": [
      "Acetaminophen 18 micrograms/mL with normal INR",
      "Acetaminophen 6 micrograms/mL with rising AST and ALT",
      "Acetaminophen 6 micrograms/mL, AST/ALT down 35% from peak, INR 1.5, and improving prognostic markers",
      "Acetaminophen 6 micrograms/mL with INR 2.8"
    ],
    "answer": 2,
    "rationale": "All criteria must be met: acetaminophen below 10 micrograms/mL, AST/ALT at baseline or falling 25% to 50% from peak, INR below 2, and improving prognostic markers. Clinical condition and individualized expert assessment remain necessary.",
    "reviewHref": "#acetaminophen-rescue",
    "difficulty": "advanced"
  },
  {
    "id": "acute-liver-failure-023",
    "question": "Acetaminophen has cleared from the blood, but acetaminophen-associated liver failure persists. Which statement best guides care?",
    "choices": [
      "Acetylcysteine may still provide benefit; continue individualized treatment and transplant assessment",
      "Acetylcysteine cannot help after the drug clears",
      "A negative level proves the liver failure has resolved",
      "Transplant assessment must wait until all acetylcysteine has stopped"
    ],
    "answer": 0,
    "rationale": "Acetylcysteine can benefit established acetaminophen-associated liver failure even after circulating acetaminophen is eliminated. Organ trajectory and stopping criteria guide care.",
    "reviewHref": "#acetaminophen-rescue",
    "difficulty": "advanced"
  },
  {
    "id": "acute-liver-failure-024",
    "question": "Which proposed stopping rule is unsafe for IV acetylcysteine?",
    "choices": [
      "Review acetaminophen concentration before stopping",
      "Assess the INR and aminotransferase trend",
      "Consider prognostic markers and clinical condition",
      "Stop at 21 hours regardless of persistent injury or unmet stopping criteria"
    ],
    "answer": 3,
    "rationale": "A scheduled treatment duration is not sufficient evidence of recovery. Persistent toxicity or unmet stopping criteria requires continued individualized treatment.",
    "reviewHref": "#acetaminophen-rescue",
    "difficulty": "advanced"
  }
];
const acetylcysteineById = new Map(acetylcysteineCases.map(q => [q.id, q]));
const nutritionCases = [
  {
    "id": "acute-liver-failure-061",
    "question": "A malnourished adult with acute liver failure cannot eat. The airway is protected, enteral access is usable, and immediately life-threatening metabolic derangements are controlled. Severe hyperacute hyperammonemia is absent. Which initial nutrition plan is most appropriate?",
    "choices": [
      "Begin low-dose enteral nutrition with monitoring and individualized advancement",
      "Withhold all protein for the entire illness regardless of ammonia or nutritional status",
      "Use parenteral nutrition first solely because liver failure is present",
      "Require a liver-specific formula before starting any enteral nutrition"
    ],
    "answer": 0,
    "rationale": "Malnutrition requires prompt nutritional support. When oral feeding is unavailable and enteral feeding is feasible, start enteral nutrition at low doses after immediate metabolic threats are controlled. Monitor arterial ammonia and nutritional tolerance. Parenteral nutrition is a second-line option when oral or enteral intake is inadequate; specialized liver formulas are not routinely required. Severe hyperacute disease with encephalopathy and marked hyperammonemia requires a separate, closely monitored protein decision.",
    "reviewHref": "#medication-stewardship",
    "difficulty": "advanced"
  }
];
const nutritionById = new Map(nutritionCases.map(q => [q.id, q]));
const medicationReviewOverrides = {
  "acute-liver-failure-062": {
    "id": "acute-liver-failure-062",
    "question": "A patient with acute liver failure develops encephalopathy on the ward. A nonessential sedative is on the medication list. Which medication action is appropriate while urgent escalation is arranged?",
    "choices": [
      "Review and avoid nonessential sedation and other avoidable hepatotoxic or nephrotoxic exposure.",
      "Increase ward sedation to conceal agitation before neurologic reassessment.",
      "Keep every admission medicine unchanged until all diagnostic results return.",
      "Assume nonprescription products cannot contribute to liver injury."
    ],
    "answer": 0,
    "rationale": "Ward management should avoid sedation that obscures neurologic deterioration and avoid additional liver or kidney injury. Medication review accompanies urgent assessment and escalation; it must not delay them.",
    "reviewHref": "#medication-stewardship",
    "difficulty": "foundational"
  },
  "acute-liver-failure-063": {
    "id": "acute-liver-failure-063",
    "question": "A patient with acute liver failure has progressed to severe encephalopathy and requires intubation and ventilation. Which statement correctly distinguishes this situation from avoidable ward sedation?",
    "choices": [
      "Sedation may be required for intubation and ventilation in critical care despite avoiding unnecessary ward sedatives.",
      "All sedation is prohibited even when intubation and ventilation are required.",
      "Ward sedation should replace airway assessment whenever consciousness declines.",
      "Protein withdrawal eliminates the need for airway management."
    ],
    "answer": 0,
    "rationale": "Avoiding unnecessary ward sedation does not prohibit sedation needed for intubation and ventilation in critical care. The airway and neurologic course require active specialist management.",
    "reviewHref": "#medication-stewardship",
    "difficulty": "advanced"
  },
  "acute-liver-failure-064": {
    "id": "acute-liver-failure-064",
    "question": "Which protein plan in acute liver failure incorrectly extends a narrowly defined hyperacute exception to every patient?",
    "choices": [
      "Withhold all protein throughout the illness regardless of nutritional status or arterial ammonia.",
      "Provide prompt nutritional support for malnutrition while assessing feeding safety.",
      "Consider only brief protein deferral in severe hyperacute disease with encephalopathy and markedly elevated arterial ammonia, with monitoring and reassessment.",
      "Monitor arterial ammonia when protein is started after a clinically indicated brief deferral."
    ],
    "answer": 0,
    "rationale": "ESPEN describes a brief protein deferral for a specific severe hyperacute presentation, followed by reassessment and arterial ammonia monitoring when protein is restarted. This does not support prolonged protein withdrawal for every patient with acute liver failure.",
    "reviewHref": "#medication-stewardship",
    "difficulty": "advanced"
  },
  "acute-liver-failure-105": {
    "id": "acute-liver-failure-105",
    "question": "When extracorporeal liver support or renal replacement therapy is used in acute liver failure, which statement about antimicrobials and sedatives is accurate?",
    "choices": [
      "The support can affect drug clearance, so the dosing schedule needs review.",
      "Every antimicrobial and sedative must be increased by the same fixed amount.",
      "Every antimicrobial and sedative must be reduced by the same fixed amount.",
      "Extracorporeal support makes drug clearance irrelevant."
    ],
    "answer": 0,
    "rationale": "EASL identifies altered antimicrobial and sedative clearance during extracorporeal support as a dosing consideration. The direction and size of a change cannot be assigned uniformly to every drug.",
    "reviewHref": "#medication-stewardship",
    "difficulty": "foundational"
  },
  "acute-liver-failure-106": {
    "id": "acute-liver-failure-106",
    "question": "Extracorporeal support is started for a patient with acute liver failure receiving an antimicrobial and a sedative. Which medication action best follows the clearance concern?",
    "choices": [
      "Review the dosing schedules for the specific drugs and the current support.",
      "Automatically double both medicines because a circuit is present.",
      "Automatically halve both medicines without considering which drugs are used.",
      "Keep both schedules permanently fixed despite changes in support."
    ],
    "answer": 0,
    "rationale": "Possible changes in clearance require review of the actual antimicrobial and sedative schedules in the current support setting. A circuit does not establish a universal increase, decrease, or unchanged dose.",
    "reviewHref": "#medication-stewardship",
    "difficulty": "foundational"
  },
  "acute-liver-failure-107": {
    "id": "acute-liver-failure-107",
    "question": "Consciousness declines in a patient with acute liver failure who is receiving sedation. Which reasoning best supports the neurologic reassessment?",
    "choices": [
      "Consider sedative effects and other causes of reduced consciousness alongside hepatic encephalopathy.",
      "Attribute every change in consciousness to hepatic encephalopathy without reviewing medications.",
      "Use falling aminotransferases alone to exclude neurologic deterioration.",
      "Increase sedation before considering alternative causes of reduced consciousness."
    ],
    "answer": 0,
    "rationale": "EASL includes sedatives among alternative causes of decreased consciousness that must be considered in acute liver failure. Medication review supports the assessment and does not replace evaluation of the underlying illness or other causes.",
    "reviewHref": "#medication-stewardship",
    "difficulty": "advanced"
  },
  "acute-liver-failure-108": {
    "id": "acute-liver-failure-108",
    "question": "Which prescribing decision overlooks a recognized clearance concern when extracorporeal liver support or renal replacement therapy changes?",
    "choices": [
      "Continue antimicrobial and sedative schedules without reassessing the effect of the changed support.",
      "Review the antimicrobial schedule in light of the current support.",
      "Review sedative exposure when interpreting a change in consciousness.",
      "Reassess whether the specific drugs need a different dosing schedule."
    ],
    "answer": 0,
    "rationale": "Changes in extracorporeal support can affect antimicrobial and sedative clearance. Continuing schedules without review overlooks this concern; individualized review does not mean every drug requires the same adjustment.",
    "reviewHref": "#medication-stewardship",
    "difficulty": "advanced"
  }
};
export const acuteLiverFailureQuestionBank = generated.map(q => medicationReviewOverrides[q.id] ?? nutritionById.get(q.id) ?? acetylcysteineById.get(q.id) ?? q);
