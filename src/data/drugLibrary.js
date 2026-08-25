const coreDrugNames = [
  "acetaminophen", "acyclovir", "adalimumab", "albuterol", "alendronate", "allopurinol", "alprazolam", "amiodarone", "amitriptyline", "amlodipine",
  "amoxicillin", "amoxicillin and clavulanate", "amphetamine and dextroamphetamine", "apixaban", "aripiprazole", "aspirin", "atenolol", "atorvastatin", "azithromycin", "baclofen",
  "benazepril", "benzonatate", "budesonide", "bupropion", "buspirone", "carbamazepine", "carvedilol", "cefdinir", "cephalexin", "cetirizine",
  "chlorthalidone", "ciprofloxacin", "citalopram", "clindamycin", "clonazepam", "clonidine", "clopidogrel", "cyclobenzaprine", "dapagliflozin", "desvenlafaxine",
  "dextroamphetamine", "diclofenac", "diltiazem", "diphenhydramine", "divalproex", "doxycycline", "duloxetine", "empagliflozin", "enalapril", "enoxaparin",
  "escitalopram", "esomeprazole", "estradiol", "ezetimibe", "famotidine", "fenofibrate", "finasteride", "fluconazole", "fluoxetine", "fluticasone",
  "folic acid", "furosemide", "gabapentin", "glimepiride", "glipizide", "hydralazine", "hydrochlorothiazide", "hydrocodone and acetaminophen", "hydroxyzine", "ibuprofen",
  "insulin aspart", "insulin degludec", "insulin glargine", "insulin lispro", "ipratropium", "isosorbide mononitrate", "lamotrigine", "lansoprazole", "latanoprost", "levetiracetam",
  "levothyroxine", "lidocaine", "linagliptin", "lisinopril", "lithium", "loratadine", "lorazepam", "losartan", "meloxicam", "memantine",
  "metformin", "methocarbamol", "methotrexate", "methylphenidate", "metoprolol", "metronidazole", "mirtazapine", "montelukast", "morphine", "naproxen",
  "nitrofurantoin", "nitroglycerin", "nortriptyline", "nystatin", "olanzapine", "omeprazole", "ondansetron", "oseltamivir", "oxybutynin", "oxycodone",
  "pantoprazole", "paroxetine", "penicillin v", "phenazopyridine", "phentermine", "pioglitazone", "potassium chloride", "pravastatin", "prednisone", "pregabalin",
  "propranolol", "quetiapine", "ramipril", "risperidone", "rivaroxaban", "rizatriptan", "rosuvastatin", "sacubitril and valsartan", "semaglutide", "sertraline",
  "sildenafil", "simvastatin", "sitagliptin", "spironolactone", "sulfamethoxazole and trimethoprim", "sumatriptan", "tadalafil", "tamsulosin", "telmisartan", "terbinafine",
  "testosterone", "tizanidine", "topiramate", "torsemide", "tramadol", "trazodone", "triamcinolone", "valacyclovir", "valsartan", "venlafaxine",
  "verapamil", "warfarin", "zolpidem", "acarbose", "benztropine", "bisoprolol", "brimonidine", "bumetanide", "buprenorphine", "calcitriol",
  "celecoxib", "chlorpromazine", "colchicine", "dexamethasone", "digoxin", "donepezil", "dulaglutide", "ergocalciferol", "ethinyl estradiol and norethindrone", "ferrous sulfate",
  "flecainide", "fluticasone and salmeterol", "gemfibrozil", "glyburide", "guanfacine", "haloperidol", "labetalol", "lactulose", "levofloxacin", "liothyronine",
  "loperamide", "medroxyprogesterone", "minocycline", "mometasone", "naloxone", "nifedipine", "oxcarbazepine", "polyethylene glycol 3350", "prazosin", "promethazine",
  "raloxifene", "rocuronium", "senna", "sucralfate", "tacrolimus", "timolol", "tiotropium", "tolterodine", "ursodiol", "vortioxetine",
];

const featured = {
  fluoxetine: {
    brand: "Prozac", className: "Selective serotonin reuptake inhibitor", system: "Neurology and psychiatry", form: "Capsule, tablet, and oral solution", appearance: true,
    commonUses: ["Major depressive disorder", "Obsessive compulsive disorder", "Panic disorder", "Bulimia nervosa"],
    mechanism: "Selectively inhibits serotonin reuptake in the central nervous system, increasing serotonergic activity.",
    commonEffects: ["Nausea", "Insomnia or somnolence", "Headache", "Sexual dysfunction"],
    seriousRisks: ["Suicidal thoughts and behaviors in younger patients", "Serotonin syndrome", "Hyponatremia", "Abnormal bleeding"],
    monitoring: ["Mood and suicidal thinking", "Activation or mania", "Sodium when clinically indicated", "Serotonergic and bleeding interactions"],
    counseling: ["Benefit may take several weeks", "Do not stop without a planned discussion", "Report agitation, fever, confusion, or severe restlessness", "Review all serotonergic medicines and supplements"],
  },
  atorvastatin: {
    brand: "Lipitor", className: "HMG-CoA reductase inhibitor", system: "Cardiovascular", form: "Oral tablet",
    commonUses: ["Lowering LDL cholesterol", "Reducing cardiovascular risk", "Mixed dyslipidemia"],
    mechanism: "Inhibits HMG-CoA reductase, reducing hepatic cholesterol synthesis and increasing LDL receptor activity.",
    commonEffects: ["Muscle aches", "Diarrhea", "Joint discomfort", "Nasopharyngitis"],
    seriousRisks: ["Myopathy and rhabdomyolysis", "Hepatic injury", "Clinically important drug interactions"],
    monitoring: ["Lipid response", "Unexplained muscle symptoms", "Liver testing when clinically indicated", "Interaction changes"],
    counseling: ["Take consistently each day", "Report unexplained muscle pain or weakness", "Discuss pregnancy and breastfeeding plans", "Check before starting interacting medicines"],
  },
  lisinopril: {
    brand: "Zestril", className: "Angiotensin converting enzyme inhibitor", system: "Cardiovascular", form: "Oral tablet and solution",
    commonUses: ["Hypertension", "Heart failure adjunct therapy", "Acute myocardial infarction treatment"],
    mechanism: "Inhibits angiotensin converting enzyme, reducing angiotensin II and aldosterone activity.",
    commonEffects: ["Cough", "Dizziness", "Hypotension", "Increased serum creatinine"],
    seriousRisks: ["Fetal toxicity", "Angioedema", "Hyperkalemia", "Renal impairment"],
    monitoring: ["Blood pressure", "Serum potassium", "Renal function", "Symptoms of angioedema"],
    counseling: ["Avoid use during pregnancy", "Seek urgent care for face, lip, tongue, or throat swelling", "Ask before using potassium supplements or salt substitutes", "Rise slowly if dizzy"],
  },
  metformin: {
    brand: "Glucophage", className: "Biguanide", system: "Endocrine", form: "Immediate and extended release oral tablets and solution",
    commonUses: ["Type 2 diabetes mellitus", "Improving glycemic control with diet and exercise"],
    mechanism: "Decreases hepatic glucose production, decreases intestinal glucose absorption, and improves insulin sensitivity.",
    commonEffects: ["Diarrhea", "Nausea", "Abdominal discomfort", "Reduced vitamin B12 over time"],
    seriousRisks: ["Metformin associated lactic acidosis", "Risk accumulation with renal impairment", "Contrast and procedure related risk"],
    monitoring: ["A1C and glucose", "Estimated glomerular filtration rate", "Vitamin B12 during long term treatment", "Tolerance and adherence"],
    counseling: ["Take with food when directed", "Extended release products should be swallowed intact", "Limit excessive alcohol", "Tell the care team before contrast studies or procedures"],
  },
  amlodipine: {
    brand: "Norvasc", className: "Dihydropyridine calcium channel blocker", system: "Cardiovascular", form: "Oral tablet and solution",
    commonUses: ["Hypertension", "Chronic stable angina", "Vasospastic angina", "Coronary artery disease"],
    mechanism: "Blocks L-type calcium channels in vascular smooth muscle, producing arterial vasodilation.",
    commonEffects: ["Peripheral edema", "Dizziness", "Flushing", "Palpitations"],
    seriousRisks: ["Symptomatic hypotension", "Worsening angina after initiation or dose increase", "Clinically significant edema"],
    monitoring: ["Blood pressure", "Peripheral edema", "Angina symptoms", "Adherence"],
    counseling: ["Take consistently each day", "Swelling at the ankles can occur", "Rise slowly if lightheaded", "Do not stop solely because blood pressure improves"],
  },
  albuterol: {
    brand: "Ventolin HFA", className: "Short-acting beta 2 agonist", system: "Respiratory", form: "Metered dose inhaler, nebulized solution, and other inhalation forms",
    commonUses: ["Treatment of bronchospasm", "Prevention of exercise induced bronchospasm"],
    mechanism: "Activates beta 2 adrenergic receptors in bronchial smooth muscle, producing bronchodilation.",
    commonEffects: ["Tremor", "Nervousness", "Tachycardia", "Headache"],
    seriousRisks: ["Paradoxical bronchospasm", "Cardiovascular effects", "Hypokalemia", "Excessive rescue use signaling poor control"],
    monitoring: ["Symptom relief", "Frequency of rescue use", "Inhaler technique", "Heart rate and potassium when clinically relevant"],
    counseling: ["Demonstrate and reassess inhaler technique", "Know the difference between rescue and controller therapy", "Seek review if relief is reduced or use increases", "Prime and clean the device according to its label"],
  },
  apixaban: {
    brand: "Eliquis", className: "Factor Xa inhibitor anticoagulant", system: "Cardiovascular", form: "Oral tablet",
    commonUses: ["Stroke prevention in nonvalvular atrial fibrillation", "Treatment of deep vein thrombosis and pulmonary embolism", "Prevention of recurrent venous thromboembolism"],
    mechanism: "Selectively inhibits factor Xa, reducing thrombin generation and clot formation.",
    commonEffects: ["Bleeding", "Bruising", "Nausea", "Anemia"],
    seriousRisks: ["Major bleeding", "Thrombotic risk after premature discontinuation", "Spinal or epidural hematoma", "Important interaction related bleeding risk"],
    monitoring: ["Bleeding and bruising", "Complete blood count", "Renal and hepatic function", "Adherence and interacting medicines"],
    counseling: ["Do not stop without a prescriber plan", "Take missed doses according to the current label", "Report unusual or persistent bleeding", "Tell every clinician and dentist that you take an anticoagulant"],
  },
  levothyroxine: {
    brand: "Synthroid", className: "Thyroid hormone", system: "Endocrine", form: "Oral tablets, capsules, solution, and injectable forms",
    commonUses: ["Hypothyroidism replacement therapy", "Pituitary thyrotropin suppression in selected thyroid conditions"],
    mechanism: "Provides synthetic thyroxine, which is converted to triiodothyronine and regulates metabolism, growth, and development.",
    commonEffects: ["Symptoms of thyroid hormone excess", "Palpitations", "Tremor", "Heat intolerance"],
    seriousRisks: ["Cardiac effects from overtreatment", "Reduced bone mineral density with overreplacement", "Not indicated for weight loss", "Clinically important absorption interactions"],
    monitoring: ["TSH", "Free thyroxine when appropriate", "Symptoms and adherence", "Changes in interacting medicines or products"],
    counseling: ["Take consistently on an empty stomach as directed", "Separate from calcium, iron, and other binding products", "Stay with a consistent product when possible", "Report persistent symptoms of underreplacement or excess"],
  },
  omeprazole: {
    brand: "Prilosec", className: "Proton pump inhibitor", system: "Gastrointestinal", form: "Delayed release capsules, tablets, and oral suspension products",
    commonUses: ["Gastroesophageal reflux disease", "Erosive esophagitis", "Peptic ulcer disease", "Helicobacter pylori treatment regimens"],
    mechanism: "Irreversibly inhibits the gastric parietal cell hydrogen potassium ATPase, suppressing acid secretion.",
    commonEffects: ["Headache", "Abdominal pain", "Nausea", "Diarrhea"],
    seriousRisks: ["Clostridioides difficile associated diarrhea", "Hypomagnesemia", "Acute tubulointerstitial nephritis", "Long term nutrient and fracture concerns"],
    monitoring: ["Symptom response and ongoing indication", "Magnesium when prolonged therapy or risk factors warrant", "Renal symptoms", "Long term treatment necessity"],
    counseling: ["Take before meals when directed", "Do not crush or chew delayed release units", "Use the shortest appropriate duration", "Report persistent diarrhea or reduced urine output"],
  },
  gabapentin: {
    brand: "Neurontin", className: "Gabapentinoid anticonvulsant", system: "Neurology", form: "Capsule, tablet, and oral solution",
    commonUses: ["Postherpetic neuralgia", "Adjunctive therapy for partial onset seizures"],
    mechanism: "Binds the alpha 2 delta subunit of voltage gated calcium channels and reduces excitatory neurotransmitter release.",
    commonEffects: ["Dizziness", "Somnolence", "Ataxia", "Peripheral edema"],
    seriousRisks: ["Respiratory depression with risk factors or central nervous system depressants", "Suicidal thoughts and behaviors", "Withdrawal or seizure risk after abrupt discontinuation", "Dose accumulation in renal impairment"],
    monitoring: ["Sedation and falls", "Respiratory risk", "Mood and suicidal thinking", "Renal function"],
    counseling: ["Avoid driving until effects are known", "Do not stop abruptly", "Use caution with opioids, alcohol, and other sedatives", "Separate from aluminum or magnesium antacids as directed"],
  },
  sertraline: {
    brand: "Zoloft", className: "Selective serotonin reuptake inhibitor", system: "Neurology and psychiatry", form: "Oral tablet, capsule, and solution products",
    commonUses: ["Major depressive disorder", "Obsessive compulsive disorder", "Panic disorder", "Posttraumatic stress disorder", "Social anxiety disorder"],
    mechanism: "Selectively inhibits serotonin reuptake in the central nervous system, increasing serotonergic activity.",
    commonEffects: ["Nausea", "Diarrhea", "Insomnia or somnolence", "Sexual dysfunction"],
    seriousRisks: ["Suicidal thoughts and behaviors in younger patients", "Serotonin syndrome", "Hyponatremia", "Abnormal bleeding"],
    monitoring: ["Mood and suicidal thinking", "Activation or mania", "Sodium when clinically indicated", "Serotonergic and bleeding interactions"],
    counseling: ["Benefit may take several weeks", "Do not stop abruptly", "Review serotonergic medicines and supplements", "Oral concentrate requires product specific dilution"],
  },
  semaglutide: {
    brand: "Ozempic, Rybelsus, Wegovy", className: "GLP-1 receptor agonist", system: "Endocrine", form: "Subcutaneous injection and oral tablet",
    commonUses: ["Type 2 diabetes mellitus with product specific benefits", "Chronic weight management with indicated products", "Cardiovascular risk reduction with indicated products"],
    mechanism: "Activates GLP-1 receptors, increasing glucose dependent insulin secretion, reducing glucagon secretion, slowing gastric emptying, and influencing appetite.",
    commonEffects: ["Nausea", "Vomiting", "Diarrhea", "Constipation", "Abdominal pain"],
    seriousRisks: ["Boxed warning for thyroid C-cell tumors", "Pancreatitis", "Gallbladder disease", "Kidney injury related to volume depletion", "Diabetic retinopathy complications in susceptible patients"],
    monitoring: ["Glucose and A1C when used for diabetes", "Gastrointestinal tolerance and hydration", "Weight when relevant", "Vision changes and symptoms of pancreatitis or gallbladder disease"],
    counseling: ["Brand indications and administration instructions are not interchangeable", "Follow the product specific titration plan", "Report severe persistent abdominal pain", "Discuss pregnancy plans well before treatment"],
  },
};

function slugify(name) {
  return name.replaceAll(" and ", "-").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const coreDrugs = coreDrugNames.map((generic, index) => ({
  generic,
  slug: slugify(generic),
  number: index + 1,
  ...(featured[generic] || {}),
}));

export const featuredDrugs = coreDrugs.filter((drug) => drug.brand);

export function getCoreDrug(slug) {
  return coreDrugs.find((drug) => drug.slug === slug);
}
