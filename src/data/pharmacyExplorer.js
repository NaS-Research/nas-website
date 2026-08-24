export const explorerModes = [
  {
    id: "anatomy",
    label: "Anatomy",
    description: "Locate the structures that shape medication delivery, action, metabolism, and elimination.",
  },
  {
    id: "pharmacology",
    label: "Pharmacology",
    description: "Connect drug classes to receptors, enzymes, transporters, and physiological pathways.",
  },
  {
    id: "clinical",
    label: "Clinical",
    description: "Connect the mechanism to indications, patient assessment, monitoring, and counseling.",
  },
  {
    id: "safety",
    label: "Safety",
    description: "Examine organ function, adverse effects, precautions, and signals that require attention.",
  },
  {
    id: "interactions",
    label: "Interactions",
    description: "See how medications, diseases, food, laboratory values, and organ systems influence one another.",
  },
];

export const explorerSystems = [
  {
    id: "cardiovascular",
    label: "Cardiovascular",
    shortLabel: "Heart",
    icon: "heart",
    position: "chest-left",
    accent: "#d89a82",
    modes: {
      anatomy: {
        title: "Heart and circulation",
        summary: "The heart generates flow while arteries, arterioles, capillaries, and veins distribute blood through the body.",
        items: ["Cardiac chambers and valves", "Coronary circulation", "Arterial resistance", "Venous return"],
        links: ["Kidneys regulate volume", "Lungs exchange gases", "Autonomic nerves alter rate"],
      },
      pharmacology: {
        title: "Control of pressure, rhythm, and flow",
        summary: "Cardiovascular medications can alter vascular tone, cardiac rate, contractility, fluid balance, coagulation, and lipid handling.",
        items: ["Renin angiotensin aldosterone system", "Beta and alpha adrenergic receptors", "Calcium channels", "Coagulation and platelet pathways"],
        links: ["ACE inhibitors", "Beta blockers", "Calcium channel blockers", "Anticoagulants"],
      },
      clinical: {
        title: "Translate physiology into assessment",
        summary: "Therapeutic decisions combine symptoms, blood pressure, heart rate, rhythm, volume status, comorbidities, and treatment goals.",
        items: ["Blood pressure and pulse", "Symptoms and functional status", "Volume assessment", "Adherence and administration"],
        links: ["Hypertension", "Heart failure", "Arrhythmias", "Ischemic disease"],
      },
      safety: {
        title: "Watch hemodynamics and perfusion",
        summary: "Medication safety depends on the direction and magnitude of changes in pressure, rate, rhythm, renal perfusion, and electrolytes.",
        items: ["Hypotension and orthostasis", "Bradycardia or conduction changes", "Bleeding", "Potassium and kidney function"],
        links: ["Falls risk", "Renal monitoring", "Electrolytes", "Bleeding precautions"],
      },
      interactions: {
        title: "Cardiovascular effects can accumulate",
        summary: "Multiple therapies may converge on blood pressure, heart rate, potassium, renal perfusion, coagulation, or drug metabolism.",
        items: ["Additive blood pressure lowering", "Additive rate control", "Potassium changing combinations", "Anticoagulant and antiplatelet exposure"],
        links: ["Drug plus drug", "Drug plus disease", "Drug plus laboratory value", "Drug plus food"],
      },
    },
  },
  {
    id: "nervous",
    label: "Nervous System",
    shortLabel: "Brain",
    icon: "brain",
    position: "head",
    accent: "#c8a8d8",
    modes: {
      anatomy: {
        title: "Brain, spinal cord, and peripheral nerves",
        summary: "The nervous system integrates sensation, movement, cognition, autonomic control, and communication throughout the body.",
        items: ["Cerebral regions", "Brainstem", "Spinal cord", "Peripheral and autonomic nerves"],
        links: ["Heart rate control", "Respiratory drive", "Pain pathways"],
      },
      pharmacology: {
        title: "Neurotransmission and excitability",
        summary: "Central and peripheral drugs alter neurotransmitters, receptors, ion channels, reuptake, metabolism, or neuronal firing.",
        items: ["Serotonin and norepinephrine", "Dopamine", "GABA and glutamate", "Sodium and calcium channels"],
        links: ["Antidepressants", "Antipsychotics", "Antiseizure drugs", "Analgesics"],
      },
      clinical: {
        title: "Assess function, behavior, and time course",
        summary: "Clinical interpretation considers cognition, mood, movement, sleep, seizure control, pain, daily function, and the timing of change.",
        items: ["Mental status", "Mood and behavior", "Movement and coordination", "Sleep and alertness"],
        links: ["Depression", "Psychosis", "Seizures", "Pain"],
      },
      safety: {
        title: "Protect cognition, coordination, and respiration",
        summary: "Many nervous-system risks become more important when sedating or activating effects are combined.",
        items: ["Sedation and falls", "Respiratory depression", "Serotonergic toxicity", "Withdrawal and seizure risk"],
        links: ["Driving safety", "Dose changes", "CNS depressants", "Suicidality monitoring"],
      },
      interactions: {
        title: "Neural effects are often shared",
        summary: "Interactions may be pharmacodynamic, such as additive sedation, or pharmacokinetic, such as altered metabolism of a narrow-therapeutic-index drug.",
        items: ["Additive CNS depression", "Serotonergic combinations", "Seizure threshold", "Metabolic inhibition or induction"],
        links: ["Alcohol", "Sedatives", "Antidepressants", "Enzyme modifiers"],
      },
    },
  },
  {
    id: "respiratory",
    label: "Respiratory",
    shortLabel: "Lungs",
    icon: "lungs",
    position: "chest",
    accent: "#8fb7c6",
    modes: {
      anatomy: {
        title: "Airways, alveoli, and respiratory muscles",
        summary: "Air travels through conducting airways to alveoli, where ventilation and perfusion support gas exchange.",
        items: ["Upper and lower airways", "Bronchi and bronchioles", "Alveoli", "Diaphragm"],
        links: ["Pulmonary circulation", "Immune response", "Central respiratory drive"],
      },
      pharmacology: {
        title: "Airway tone and inflammation",
        summary: "Respiratory therapies can relax airway smooth muscle, reduce inflammation, modify secretions, or influence allergic pathways.",
        items: ["Beta 2 receptors", "Muscarinic receptors", "Corticosteroid signaling", "Leukotriene pathways"],
        links: ["Bronchodilators", "Inhaled corticosteroids", "Antimuscarinics", "Biologic therapies"],
      },
      clinical: {
        title: "Technique is part of the treatment",
        summary: "Symptoms, triggers, exacerbations, lung function, adherence, and device technique all affect interpretation of response.",
        items: ["Dyspnea and activity", "Rescue use", "Exacerbation history", "Inhaler technique"],
        links: ["Asthma", "COPD", "Allergic disease", "Tobacco cessation"],
      },
      safety: {
        title: "Separate disease progression from treatment effects",
        summary: "Worsening breathing can reflect inadequate control, incorrect technique, infection, exposure, adverse effects, or another condition.",
        items: ["Paradoxical bronchospasm", "Tachycardia and tremor", "Local corticosteroid effects", "Excess rescue use"],
        links: ["Technique review", "Oral care", "Heart rate", "Escalation signals"],
      },
      interactions: {
        title: "Airway therapy connects to the heart and nervous system",
        summary: "Adrenergic, anticholinergic, and sedating effects may cross organ-system boundaries and become clinically important in combination.",
        items: ["Additive adrenergic effects", "Additive anticholinergic burden", "Sedation and respiratory drive", "Nonselective beta blockade"],
        links: ["Cardiovascular system", "Nervous system", "Device delivery", "Comorbid disease"],
      },
    },
  },
  {
    id: "renal",
    label: "Renal and Urinary",
    shortLabel: "Kidneys",
    icon: "kidneys",
    position: "abdomen-side",
    accent: "#d0a08d",
    modes: {
      anatomy: {
        title: "Kidneys, nephrons, ureters, and bladder",
        summary: "The kidneys filter blood, regulate fluid and electrolytes, support acid base balance, and participate in hormonal control.",
        items: ["Glomerulus", "Renal tubules", "Collecting system", "Bladder and urinary tract"],
        links: ["Blood pressure", "Electrolytes", "Drug elimination"],
      },
      pharmacology: {
        title: "Filtration, transport, and fluid balance",
        summary: "Renal pharmacology includes nephron transporters, hormonal pathways, urinary targets, and dose changes when clearance changes.",
        items: ["Sodium transport", "Water handling", "RAAS signaling", "Tubular secretion and reabsorption"],
        links: ["Diuretics", "SGLT2 inhibitors", "RAAS therapies", "Renally cleared drugs"],
      },
      clinical: {
        title: "Interpret kidney function in context",
        summary: "Serum creatinine, estimated filtration, urine findings, electrolytes, volume status, age, body size, and clinical trajectory all contribute.",
        items: ["Kidney function estimates", "Electrolytes", "Fluid status", "Urine output and findings"],
        links: ["Dose adjustment", "Acute change", "Chronic disease", "Dialysis"],
      },
      safety: {
        title: "Clearance and perfusion can change quickly",
        summary: "Reduced clearance may increase exposure, while changes in perfusion, hydration, or electrolytes can alter medication risk.",
        items: ["Accumulation", "Acute kidney injury", "Hyperkalemia or hypokalemia", "Volume depletion"],
        links: ["Current laboratory data", "Sick-day assessment", "Nephrotoxic exposure", "Dose interval"],
      },
      interactions: {
        title: "The kidney is a common interaction junction",
        summary: "Combinations may compete for elimination, alter renal blood flow, change electrolytes, or amplify volume loss.",
        items: ["Shared renal elimination", "Renal perfusion changes", "Potassium effects", "Additive diuresis"],
        links: ["Cardiovascular drugs", "NSAIDs", "Diuretics", "Contrast and acute illness"],
      },
    },
  },
  {
    id: "gastrointestinal",
    label: "Gastrointestinal and Hepatic",
    shortLabel: "GI and Liver",
    icon: "stomach",
    position: "abdomen",
    accent: "#d5b677",
    modes: {
      anatomy: {
        title: "GI tract, liver, gallbladder, and pancreas",
        summary: "The digestive system processes nutrients and medications, while the liver transforms many compounds before elimination.",
        items: ["Stomach and intestine", "Liver", "Biliary system", "Exocrine pancreas"],
        links: ["Absorption", "First pass metabolism", "Nutrition"],
      },
      pharmacology: {
        title: "Absorption, secretion, motility, and metabolism",
        summary: "Therapies can modify acid, movement, secretion, inflammation, nausea pathways, or hepatic drug metabolism.",
        items: ["Acid secretion", "GI motility", "Transport and absorption", "Metabolic enzymes"],
        links: ["Acid suppression", "Antiemetics", "Laxatives", "Enzyme substrates"],
      },
      clinical: {
        title: "Connect symptoms to exposure and function",
        summary: "Clinical assessment considers pain, bleeding, nausea, bowel pattern, nutrition, hydration, liver tests, and medication timing.",
        items: ["Symptom pattern", "Bleeding signals", "Hydration and nutrition", "Liver function and injury markers"],
        links: ["GERD", "Constipation", "Diarrhea", "Liver disease"],
      },
      safety: {
        title: "Watch for bleeding, dehydration, and hepatic injury",
        summary: "GI and hepatic risks can alter absorption, metabolism, protein binding, fluid status, and tolerance of therapy.",
        items: ["GI bleeding", "Persistent vomiting or diarrhea", "Hepatic injury", "Malabsorption"],
        links: ["Anticoagulants", "Hepatic dosing", "Fluid balance", "Nutrition"],
      },
      interactions: {
        title: "The gut and liver shape medication exposure",
        summary: "Food, pH, binding, transit time, transporters, and metabolic enzymes can change how much drug reaches circulation and how long it remains.",
        items: ["Chelation and binding", "Gastric pH", "Food effects", "Enzyme inhibition or induction"],
        links: ["Administration timing", "Supplements", "Grapefruit products", "Hepatic metabolism"],
      },
    },
  },
  {
    id: "endocrine",
    label: "Endocrine and Metabolic",
    shortLabel: "Endocrine",
    icon: "activity",
    position: "lower-abdomen",
    accent: "#a8bd8d",
    modes: {
      anatomy: {
        title: "Pancreas, thyroid, adrenal glands, and metabolic tissues",
        summary: "Endocrine organs communicate through hormones that coordinate energy, growth, stress, reproduction, and internal balance.",
        items: ["Endocrine pancreas", "Thyroid", "Adrenal glands", "Muscle and adipose tissue"],
        links: ["Glucose control", "Metabolism", "Blood pressure"],
      },
      pharmacology: {
        title: "Hormones, receptors, and metabolic control",
        summary: "Endocrine therapies replace hormones, alter secretion, change receptor signaling, or modify glucose and energy handling.",
        items: ["Insulin signaling", "Incretin pathways", "Thyroid hormone", "Corticosteroid signaling"],
        links: ["Insulins", "GLP 1 therapies", "Thyroid therapy", "Corticosteroids"],
      },
      clinical: {
        title: "Patterns matter more than isolated numbers",
        summary: "Symptoms, medication timing, glucose patterns, A1C, thyroid tests, weight, nutrition, and comorbidities shape assessment.",
        items: ["Glucose patterns", "A1C", "Thyroid testing", "Weight and nutrition"],
        links: ["Diabetes", "Thyroid disease", "Weight management", "Adrenal disorders"],
      },
      safety: {
        title: "Prevent extremes and recognize changing needs",
        summary: "Endocrine medication requirements can change with food intake, activity, illness, pregnancy, kidney function, and interacting therapies.",
        items: ["Hypoglycemia", "Hyperglycemia", "Volume depletion", "Hormone excess or deficiency"],
        links: ["Sick-day plan", "Renal function", "Meal timing", "Monitoring"],
      },
      interactions: {
        title: "Metabolism connects every organ system",
        summary: "Other drugs and diseases can change glucose, appetite, fluid balance, thyroid absorption, and hormonal requirements.",
        items: ["Glucose raising therapies", "Meal and dose timing", "Thyroid absorption", "Volume changing combinations"],
        links: ["Corticosteroids", "Cardiovascular therapy", "GI absorption", "Renal function"],
      },
    },
  },
];

export const explorerSources = [
  { title: "FDA: Route of Administration", url: "https://www.fda.gov/drugs/data-standards-manual-monographs/route-administration" },
  { title: "FDA: Prescribing Information Resources", url: "https://www.fda.gov/drugs/fdas-labeling-resources-human-prescription-drugs/prescribing-information-resources" },
  { title: "DailyMed: Current medication labeling", url: "https://dailymed.nlm.nih.gov/dailymed/" },
  { title: "National Library of Medicine: Medical Subject Headings", url: "https://www.nlm.nih.gov/mesh/meshhome.html" },
];
