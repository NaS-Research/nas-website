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
  fluoxetine: { brand: "Prozac", className: "Selective serotonin reuptake inhibitor", system: "Neurology and psychiatry", form: "Capsule, tablet, and oral solution", appearance: true },
  atorvastatin: { brand: "Lipitor", className: "HMG-CoA reductase inhibitor", system: "Cardiovascular", form: "Oral tablet" },
  lisinopril: { brand: "Zestril", className: "ACE inhibitor", system: "Cardiovascular", form: "Oral tablet and solution" },
  metformin: { brand: "Glucophage", className: "Biguanide", system: "Endocrine", form: "Oral tablet and solution" },
  amlodipine: { brand: "Norvasc", className: "Dihydropyridine calcium channel blocker", system: "Cardiovascular", form: "Oral tablet and solution" },
  albuterol: { brand: "Ventolin HFA", className: "Short-acting beta 2 agonist", system: "Respiratory", form: "Inhalation and oral dosage forms" },
  apixaban: { brand: "Eliquis", className: "Factor Xa inhibitor", system: "Cardiovascular", form: "Oral tablet" },
  levothyroxine: { brand: "Synthroid", className: "Thyroid hormone", system: "Endocrine", form: "Oral and injectable dosage forms" },
  omeprazole: { brand: "Prilosec", className: "Proton pump inhibitor", system: "Gastrointestinal", form: "Delayed-release oral dosage forms" },
  gabapentin: { brand: "Neurontin", className: "Gabapentinoid", system: "Neurology", form: "Capsule, tablet, and oral solution" },
  sertraline: { brand: "Zoloft", className: "Selective serotonin reuptake inhibitor", system: "Neurology and psychiatry", form: "Oral tablet and solution" },
  semaglutide: { brand: "Ozempic, Rybelsus, Wegovy", className: "GLP-1 receptor agonist", system: "Endocrine", form: "Subcutaneous injection and oral tablet" },
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
