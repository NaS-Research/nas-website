export const therapeuticClasses = [
  { name: "Antitussives", color: "#cf776c" },
  { name: "Upper respiratory agents", color: "#cf2d1d" },
  { name: "Lower respiratory agents", color: "#873728" },
  { name: "Misc. gastrointestinal agents", color: "#d7a45d" },
  { name: "Antiulcer agents", color: "#e59412" },
  { name: "GI anticholinergics", color: "#b98016" },
  { name: "Misc. cardiovascular agents", color: "#dfcf7b" },
  { name: "Antihypertensives and antianginals", color: "#e3cf18" },
  { name: "Antiarrhythmics", color: "#a6ad16" },
  { name: "Misc. anti-infectives", color: "#55a86e" },
  { name: "Penicillins and cephalosporins", color: "#239655" },
  { name: "Macrolides, tetracyclines, and fluoroquinolones", color: "#267e67" },
  { name: "Misc. CNS agents", color: "#66b6cd" },
  { name: "Antidepressants", color: "#159fc4" },
  { name: "Antipsychotics and anti-anxiety agents", color: "#34468c" },
  { name: "Anti-diabetic agents", color: "#d68cad" },
  { name: "Estrogens and oral contraceptives", color: "#b84f8d" },
  { name: "Misc. hormone and electrolyte agents", color: "#8c356e" },
  { name: "Misc. analgesic and anti-inflammatory agents", color: "#c58a5d" },
  { name: "Narcotic analgesics", color: "#947159" },
  { name: "Nonsteroidal anti-inflammatory agents", color: "#69594f" },
  { name: "Topical agents", color: "#a4a09a" },
  { name: "Miscellaneous agents", color: "#4b4b4b" },
];

const groups = {
  "Antitussives": [
    "benzonatate", "codeine and guaifenesin", "dextromethorphan and promethazine",
  ],
  "Upper respiratory agents": [
    "azelastine", "brompheniramine, dextromethorphan, and pseudoephedrine", "cetirizine", "cyproheptadine", "diphenhydramine", "fexofenadine", "fluticasone", "levocetirizine", "loratadine", "loratadine and pseudoephedrine", "meclizine", "mometasone", "olopatadine", "promethazine",
  ],
  "Lower respiratory agents": [
    "albuterol", "albuterol and ipratropium", "beclomethasone", "budesonide", "budesonide and formoterol", "budesonide, glycopyrrolate, and formoterol", "fluticasone and salmeterol", "fluticasone and vilanterol", "fluticasone, umeclidinium, and vilanterol", "ipratropium", "levalbuterol", "montelukast", "tiotropium",
  ],
  "Antiulcer agents": [
    "dexlansoprazole", "esomeprazole", "famotidine", "lansoprazole", "omeprazole", "pantoprazole", "sucralfate",
  ],
  "GI anticholinergics": ["dicyclomine"],
  "Antihypertensives and antianginals": [
    "amlodipine", "amlodipine and benazepril", "atenolol", "benazepril", "bisoprolol", "carvedilol", "chlorthalidone", "clonidine", "diltiazem", "doxazosin", "enalapril", "guanfacine", "hydralazine", "hydrochlorothiazide", "hydrochlorothiazide and lisinopril", "hydrochlorothiazide and losartan", "hydrochlorothiazide and triamterene", "irbesartan", "isosorbide", "labetalol", "lisinopril", "losartan", "metoprolol", "minoxidil", "nebivolol", "nifedipine", "nitroglycerin", "olmesartan", "prazosin", "propranolol", "ramipril", "sacubitril and valsartan", "telmisartan", "terazosin", "valsartan", "verapamil",
  ],
  "Antiarrhythmics": ["amiodarone", "flecainide"],
  "Penicillins and cephalosporins": [
    "amoxicillin", "amoxicillin and clavulanate", "cefdinir", "cefuroxime", "cephalexin", "penicillin v",
  ],
  "Macrolides, tetracyclines, and fluoroquinolones": [
    "azithromycin", "ciprofloxacin", "ciprofloxacin and dexamethasone", "doxycycline", "erythromycin", "levofloxacin", "moxifloxacin", "ofloxacin",
  ],
  "Antidepressants": [
    "amitriptyline", "bupropion", "citalopram", "desvenlafaxine", "duloxetine", "escitalopram", "fluoxetine", "mirtazapine", "nortriptyline", "paroxetine", "sertraline", "trazodone", "venlafaxine",
  ],
  "Antipsychotics and anti-anxiety agents": [
    "alprazolam", "aripiprazole", "buspirone", "clonazepam", "diazepam", "hydroxyzine", "lorazepam", "olanzapine", "quetiapine", "risperidone", "temazepam",
  ],
  "Anti-diabetic agents": [
    "dapagliflozin", "dulaglutide", "empagliflozin", "glimepiride", "glipizide", "insulin aspart", "insulin degludec", "insulin detemir", "insulin glargine", "insulin human and insulin isophane human", "insulin isophane", "insulin lispro", "liraglutide", "metformin", "pioglitazone", "semaglutide", "sitagliptin", "tirzepatide",
  ],
  "Estrogens and oral contraceptives": [
    "desogestrel and ethinyl estradiol", "drospirenone and ethinyl estradiol", "estradiol", "ethinyl estradiol and etonogestrel", "ethinyl estradiol and levonorgestrel", "ethinyl estradiol and norelgestromin", "ethinyl estradiol and norethindrone", "ethinyl estradiol and norgestimate", "ethinyl estradiol and norgestrel", "norethindrone",
  ],
  "Misc. hormone and electrolyte agents": [
    "calcitriol", "calcium", "calcium phosphate and cholecalciferol", "cholecalciferol", "ergocalciferol", "levothyroxine", "liothyronine", "magnesium salts", "medroxyprogesterone", "potassium chloride", "prednisone", "progesterone", "sodium salts", "testosterone", "thyroid",
  ],
  "Narcotic analgesics": [
    "acetaminophen and codeine", "hydrocodone and acetaminophen", "morphine", "oxycodone", "oxycodone and acetaminophen", "tramadol",
  ],
  "Nonsteroidal anti-inflammatory agents": [
    "aspirin", "celecoxib", "diclofenac", "ibuprofen", "indomethacin", "ketorolac", "meloxicam", "nabumetone", "naproxen",
  ],
  "Topical agents": [
    "benzoyl peroxide", "betamethasone and clotrimazole", "ciclopirox", "clobetasol", "clotrimazole", "fluorouracil", "hydroquinone", "isotretinoin", "mupirocin", "sulfacetamide and sulfur", "tacrolimus", "terbinafine", "tretinoin", "triamcinolone",
  ],
};

const exactClassByDrug = Object.fromEntries(
  Object.entries(groups).flatMap(([therapeuticClass, drugs]) => drugs.map((drug) => [drug, therapeuticClass])),
);

const categoryFallbacks = {
  "Cardiovascular and renal": "Misc. cardiovascular agents",
  "Gastrointestinal": "Misc. gastrointestinal agents",
  "Infectious diseases": "Misc. anti-infectives",
  "Neurology and psychiatry": "Misc. CNS agents",
  "Pain and musculoskeletal": "Misc. analgesic and anti-inflammatory agents",
  "Endocrine and metabolic": "Misc. hormone and electrolyte agents",
  "Reproductive and genitourinary": "Misc. hormone and electrolyte agents",
  "Dermatology": "Topical agents",
  "Ophthalmology and otology": "Topical agents",
};

export function getTherapeuticClass(generic, category) {
  return exactClassByDrug[generic] || categoryFallbacks[category] || "Miscellaneous agents";
}

export function getTherapeuticClassColor(name) {
  return therapeuticClasses.find((item) => item.name === name)?.color || "#4b4b4b";
}
