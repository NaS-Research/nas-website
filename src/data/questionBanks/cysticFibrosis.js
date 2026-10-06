const concepts=[
{name:"CFTR epithelial physiology",lesson:"cf-biology-diagnosis",principle:"CFTR conducts chloride and bicarbonate and helps coordinate epithelial salt, water, pH, and secretion.",action:"Connect organ findings to altered epithelial transport rather than treating each manifestation as unrelated.",assessment:"Review airway hydration, sweat salt, pancreatic and intestinal function, liver disease, fertility, genotype, and functional evidence.",hazard:"Reducing CF to thick lung mucus misses the channel defect across several organs.",why:"A shared epithelial transport defect explains the multisystem phenotype."},
{name:"F508del protein defect",lesson:"cf-biology-diagnosis",principle:"F508del causes major CFTR folding and trafficking dysfunction with reduced surface stability.",action:"Use a responsive corrector-potentiator combination under current genotype, age, and product labeling.",assessment:"Review both variants, responsive-variant table, age, weight, formulation, prior modulator, liver status, interactions, and access.",hazard:"Assuming one potentiator can rescue protein that never reaches the surface ignores the processing defect.",why:"Correctors increase selected mutant protein at the surface while potentiators improve channel activity."},
{name:"newborn screening",lesson:"cf-biology-diagnosis",principle:"An abnormal newborn screen identifies CF risk but does not establish the diagnosis.",action:"Arrange timely sweat testing and CF-center evaluation with genetic and clinical interpretation.",assessment:"Review screening algorithm, age, hydration, sweat quantity, chloride result, genotype, symptoms, family history, and follow-up.",hazard:"Labeling an infant definitively from immunoreactive trypsinogen alone bypasses confirmatory testing.",why:"Screening prioritizes sensitivity, while diagnosis requires objective CFTR dysfunction in context."},
{name:"sweat chloride interpretation",lesson:"cf-biology-diagnosis",principle:"Sweat chloride at least 60 mmol/L supports CF, 30 to 59 is intermediate, and below 30 makes CF less likely but not impossible.",action:"Repeat intermediate or discordant testing at an experienced center and integrate genotype, phenotype, and functional studies.",assessment:"Review collection quality, quantity, age, chloride, repeat result, genotype, medications, hydration, phenotype, and laboratory certification.",hazard:"Treating an intermediate result as either definitively normal or definitively CF loses required diagnostic follow-up.",why:"Sweat chloride is powerful but must be interpreted with quality and clinical context."},
{name:"CFTR-related inconclusive states",lesson:"cf-biology-diagnosis",principle:"CRMS or CFSPID and other uncertain states require structured follow-up rather than premature disease labeling or dismissal.",action:"Use CF-center surveillance, repeat testing, symptom review, and family counseling according to current guidance.",assessment:"Review newborn screen, sweat trajectory, variants, penetrance, symptoms, growth, cultures, pancreatic function, family understanding, and follow-up.",hazard:"Assuming uncertainty means no future disease can delay recognition of evolving CFTR dysfunction.",why:"Some infants remain healthy while others later meet CF criteria, so longitudinal evidence matters."},
{name:"individualized airway clearance",lesson:"cf-airway-clearance",principle:"All people with CF need an individualized clearance strategy, and no single technique is universally superior.",action:"Choose and teach a sustainable method around age, ability, preference, sputum, lung function, response, and burden.",assessment:"Review technique, frequency, cough, sputum, device, cleaning, exercise, caregiver support, adherence, and clinical response.",hazard:"Prescribing a device without observing technique can create treatment time without effective secretion movement.",why:"Mechanical effectiveness depends on correct performance and patient-specific implementation."},
{name:"hypertonic saline",lesson:"cf-airway-clearance",principle:"Inhaled hypertonic saline osmotically hydrates airway secretions and supports clearance.",action:"Assess bronchospasm tolerance, use a bronchodilator when indicated, and pair treatment with airway clearance.",assessment:"Review concentration, nebulizer, pretreatment, cough, bronchospasm, salt taste, timing, cleaning, adherence, and response.",hazard:"Mixing hypertonic saline indiscriminately with another nebulized product can alter compatibility and delivery.",why:"Its benefit comes from airway hydration and mobilization, not direct antimicrobial action."},
{name:"dornase alfa",lesson:"cf-airway-clearance",principle:"Dornase alfa cleaves extracellular DNA and reduces the viscosity of neutrophil-rich CF sputum.",action:"Administer through the recommended nebulizer and schedule without unverified mixing with other inhaled drugs.",assessment:"Review dose, storage, nebulizer, timing, voice change, pharyngitis, adherence, lung response, and sequencing.",hazard:"Calling dornase a bronchodilator or antibiotic misrepresents its target and expected response.",why:"Extracellular DNA is an important polymer within purulent CF mucus."},
{name:"inhaled treatment sequencing",lesson:"cf-airway-clearance",principle:"A deliberate sequence prepares the airway, mobilizes secretions, and preserves inhaled-antibiotic deposition.",action:"Follow the individualized center plan, commonly bronchodilator, saline with clearance, dornase by schedule, then inhaled antibiotic.",assessment:"Review every product, purpose, timing, compatibility, device, treatment duration, cleaning, burden, and patient preference.",hazard:"Delivering inhaled antibiotic before clearing obstructing secretions can reduce deposition to target airways.",why:"Treatment order can change tolerance and where an inhaled dose reaches."},
{name:"equipment infection control",lesson:"cf-airway-clearance",principle:"Nebulizer cleaning, disinfection, drying, storage, and replacement are part of medication safety.",action:"Observe the full equipment workflow and align it with manufacturer and CF-center infection-prevention instructions.",assessment:"Review hand hygiene, parts, water source, wash, disinfection, drying, storage, replacement, sharing, and electrical function.",hazard:"A correctly prescribed medicine delivered through contaminated or failing equipment can cause infection or underdosing.",why:"The device directly contacts the airway and determines dose delivery."},
{name:"respiratory culture surveillance",lesson:"cf-infection-exacerbations",principle:"Serial organism history, clinical trajectory, and sample type are more informative than one isolated culture.",action:"Trend microbiology and obtain the best feasible respiratory sample at recommended intervals and during deterioration.",assessment:"Review specimen type, organism history, density, phenotype, susceptibility, symptoms, spirometry, imaging, antibiotics, and response.",hazard:"Treating every recovered organism identically ignores colonization, chronic infection, resistance, and clinical relevance.",why:"CF airway ecology changes over time and must be interpreted longitudinally."},
{name:"initial Pseudomonas eradication",lesson:"cf-infection-exacerbations",principle:"New Pseudomonas acquisition should prompt an established eradication regimen and follow-up cultures.",action:"Begin a center protocol, commonly inhaled tobramycin, then document microbiologic response.",assessment:"Review first versus recurrent isolation, symptoms, prior antibiotics, inhaled technique, renal and auditory risk, cultures, and adherence.",hazard:"Waiting until Pseudomonas becomes chronic reduces the opportunity for successful eradication.",why:"Early treatment aims to prevent establishment of adapted chronic airway infection."},
{name:"chronic inhaled antipseudomonal therapy",lesson:"cf-infection-exacerbations",principle:"Inhaled antibiotic suppression uses high airway exposure through product-specific continuous or cyclic regimens.",action:"Match molecule, device, schedule, and cycling to chronic infection history, tolerance, response, and current labeling.",assessment:"Review organism, exacerbations, lung function, dose cycle, device, bronchospasm, voice, renal and auditory status, resistance, and access.",hazard:"Treating inhaled tobramycin, aztreonam, and other products as schedule-interchangeable can create incorrect use.",why:"Formulation, device, evidence, and approved regimen differ by product."},
{name:"azithromycin and NTM",lesson:"cf-infection-exacerbations",principle:"Chronic azithromycin can reduce CF pulmonary exacerbations but must be coordinated with nontuberculous mycobacterial surveillance.",action:"Screen for NTM before and during long-term use and withhold macrolide monotherapy when active NTM disease is present.",assessment:"Review NTM cultures, symptoms, imaging, QT, hearing, liver function, interactions, adherence, Pseudomonas, and exacerbations.",hazard:"Macrolide monotherapy during unrecognized NTM disease can select macrolide resistance and compromise treatment.",why:"Macrolide susceptibility is central to effective multidrug NTM therapy."},
{name:"pulmonary exacerbation treatment",lesson:"cf-pulmonary-assessment",principle:"A CF exacerbation is a clinically important change from baseline informed by symptoms, lung function, oxygenation, and prior microbiology.",action:"Choose route and antibiotics from severity and longitudinal culture data, intensify clearance, and measure recovery toward baseline.",assessment:"Review cough, sputum, dyspnea, fever, fatigue, appetite, weight, hemoptysis, FEV1, oxygen, cultures, allergies, prior response, and organ function.",hazard:"Using susceptibility data without prior clinical response or airway history can oversimplify biofilm and polymicrobial disease.",why:"Exacerbation treatment must integrate patient trajectory with imperfect microbiologic tests."},
{name:"personal pulmonary baseline and recovery",lesson:"cf-pulmonary-assessment",principle:"CF pulmonary change and recovery are interpreted against the patient's stable symptoms, spirometry, oxygenation, weight, and treatment implementation.",action:"Document baseline before decline and reassess all affected domains after treatment rather than relying on fever or one FEV1 value.",assessment:"Review symptom trend, FEV1, oxygen, weight, exercise, sleep, microbiology, imaging, treatment delivery, toxicity, and return toward prior function.",hazard:"Calling partial symptom improvement full recovery can miss persistent physiologic loss and a need for further evaluation.",why:"The patient's own longitudinal trajectory is more informative than a population threshold alone."},
{name:"potentiator pharmacology",lesson:"cftr-modulators",principle:"Ivacaftor and deutivacaftor increase opening of responsive CFTR channels already present at the cell surface.",action:"Use only for an eligible genotype within current age, formulation, food, interaction, and monitoring requirements.",assessment:"Review responsive variant, age, weight, product, fat-containing food, CYP3A drugs, liver tests, eye examination, and adherence.",hazard:"Potentiator monotherapy cannot correct every processing mutation or justify off-label genotype assumptions.",why:"Potentiators act on surface protein and depend on a responsive channel substrate."},
{name:"corrector combination therapy",lesson:"cftr-modulators",principle:"Correctors improve processing and trafficking of selected mutant CFTR, while a potentiator improves channel activity.",action:"Verify the exact fixed combination and prevent duplicate or incomplete ingredients during transitions.",assessment:"Review genotype, prior product, component list, age, weight, morning and evening schedule, food, interaction, liver tests, and supply.",hazard:"Combining separate modulator products without specialist direction can duplicate ivacaftor or produce an unstudied regimen.",why:"Fixed combinations are engineered and studied as complete regimens with specific exposures."},
{name:"fat-containing food and CYP3A",lesson:"cftr-modulators",principle:"Food fat supports absorption, while CYP3A inhibitors and inducers can substantially change modulator exposure.",action:"Teach the product-specific meal and dose modification and avoid strong or moderate inducers when labeling advises against use.",assessment:"Review diet, missed doses, azoles, macrolides, rifamycins, anticonvulsants, herbals, grapefruit, liver status, and interaction plan.",hazard:"Ignoring a new rifampin prescription can reduce modulator exposure and clinical benefit.",why:"Most current modulators depend strongly on CYP3A-mediated exposure."},
{name:"modulator liver safety",lesson:"cftr-modulators",principle:"Current triple-modulator labels require baseline and scheduled ALT, AST, alkaline phosphatase, and bilirubin monitoring for serious liver injury risk.",action:"Follow the exact product schedule, interrupt for significant abnormalities or symptoms, and reassess benefit before any restart.",assessment:"Review baseline liver disease, all four tests, symptoms, alcohol, hepatotoxic drugs, trend, timing, interruption criteria, and specialist input.",hazard:"Checking transaminases alone can miss cholestatic or bilirubin evidence included in current monitoring requirements.",why:"Drug-induced liver injury can be severe and requires complete longitudinal surveillance."},
{name:"pediatric cataract monitoring",lesson:"cftr-modulators",principle:"Ivacaftor-containing therapy carries a recommendation for baseline and follow-up ophthalmologic examinations in pediatric patients.",action:"Arrange age-appropriate eye assessment without delaying clinically urgent treatment when the care team advises otherwise.",assessment:"Review age, product, baseline examination, lens findings, visual symptoms, follow-up date, corticosteroid exposure, and access.",hazard:"Assuming absence of visual symptoms excludes lens opacity can miss an asymptomatic finding.",why:"Noncongenital lens opacities have been reported in children receiving ivacaftor-containing regimens."},
{name:"PERT dosing and timing",lesson:"cf-nutrition-gi-endocrine",principle:"PERT is dosed in lipase units and taken with every relevant meal, snack, formula, or feed.",action:"Give at the start of intake, distribute during prolonged meals when directed, and titrate within safe limits to symptoms and growth.",assessment:"Review lipase units per capsule, weight, meal and snack pattern, fat, timing, swallowing, storage, stool, pain, growth, and adherence.",hazard:"Prescribing capsules without calculating total lipase exposure can hide severe underdosing or unsafe escalation.",why:"Pancreatic secretion normally follows nutrient exposure, so replacement must accompany intake."},
{name:"PERT upper boundaries",lesson:"cf-nutrition-gi-endocrine",principle:"Doses above 2,500 lipase units/kg/meal or 4,000 units/g fat require investigation, and daily exposure should generally not exceed 10,000 units/kg.",action:"Audit timing, adherence, storage, diet, acid, constipation, infection, and alternate disease before escalating beyond boundaries.",assessment:"Review weight, lipase per capsule, capsules per intake, meals, snacks, total daily units, symptoms, stool, growth, pain, and colon history.",hazard:"Escalating very high PERT for every abdominal symptom can increase fibrosing-colonopathy risk without treating the true cause.",why:"Excessive enzyme exposure has a recognized colonic safety signal and diminishing clinical rationale."},
{name:"CF nutrition and fat-soluble vitamins",lesson:"cf-nutrition-gi-endocrine",principle:"Nutrition plans address energy, protein, fat, salt, vitamins A, D, E, and K, body composition, and changing metabolic risk.",action:"Individualize intake and replacement from phenotype, labs, growth or weight trajectory, malabsorption, modulator response, and goals.",assessment:"Review intake, access, stool, PERT, weight history, growth, strength, body composition, vitamin levels, sodium, glucose, liver, and bone.",hazard:"Preserving a universal unlimited-calorie message after major modulator-associated weight gain can ignore cardiometabolic health.",why:"Modern CF nutrition must prevent malnutrition while responding to changing absorption and weight phenotypes."},
{name:"CFRD screening and treatment",lesson:"cf-systemic-complications",principle:"Annual two-hour 75 g OGTT begins by age 10, A1c alone is insufficient screening, and established CFRD is treated with insulin.",action:"Screen during stable health and monitor glucose more intensively during illness, glucocorticoids, pregnancy, or enteral feeding.",assessment:"Review age, OGTT, fasting and postprandial glucose, symptoms, A1c limits, weight, lung function, feeds, steroids, pregnancy, and insulin plan.",hazard:"A normal A1c can falsely reassure because CF dysglycemia may be postprandial and A1c can be deceptively low.",why:"OGTT detects early glucose intolerance linked to nutrition, lung function, and survival."},
{name:"CF bone health surveillance",lesson:"cf-systemic-complications",principle:"CF bone risk reflects nutrition, vitamin D, inflammation, low weight, inactivity, endocrine disease, glucocorticoids, transplant exposure, and age.",action:"Schedule bone-density and laboratory assessment by age and risk, correct reversible causes, and treat established disease when indicated.",assessment:"Review fractures, height loss, nutrition, vitamin D, calcium, weight-bearing activity, puberty, hormones, glucocorticoids, transplant, kidney function, and DXA.",hazard:"Replacing vitamin D without assessing the broader fracture phenotype can leave major drivers of bone loss untreated.",why:"Bone strength emerges from several interacting nutritional, hormonal, inflammatory, mechanical, and treatment factors."},
{name:"CF hepatobiliary and kidney safety",lesson:"cf-systemic-complications",principle:"Liver and kidney surveillance must inform medication selection, dose, toxicity monitoring, and transplant planning throughout CF care.",action:"Trend organ function and structural disease, then adjust nephrotoxic, hepatotoxic, and renally or hepatically cleared treatment accordingly.",assessment:"Review liver chemistry, platelets, imaging, portal signs, creatinine, filtration, hydration, stones, diabetes, aminoglycosides, modulators, and transplant medicines.",hazard:"Waiting for jaundice or creatinine elevation alone can miss earlier portal disease or cumulative kidney injury.",why:"Organ reserve often changes silently before it changes the safety of complex therapy."},
{name:"CF colorectal cancer surveillance",lesson:"cf-systemic-complications",principle:"Adults with CF need earlier colorectal cancer screening, with additional risk and modified timing after solid-organ transplantation.",action:"Apply current CF-specific screening age, interval, and bowel preparation while investigating alarm symptoms diagnostically.",assessment:"Review age, transplant status, prior colonoscopy and preparation, polyps, family history, bleeding, anemia, bowel change, obstruction, and follow-up interval.",hazard:"Using average-risk screening timing can delay detection in a population with increased and earlier colorectal cancer risk.",why:"CF and transplantation shift colorectal cancer incidence enough to require a dedicated surveillance strategy."},
{name:"reproductive and mental health care",lesson:"cf-longitudinal-advanced-care",principle:"Fertility, contraception, pregnancy, lactation, genetic counseling, and mental health belong in routine CF care rather than crisis-only conversations.",action:"Discuss reproductive goals and emotional health proactively, then coordinate medications and support with the CF and specialty teams.",assessment:"Review fertility, contraception, pregnancy, lactation, genetics, medication exposure, interactions, mood, anxiety, sleep, support, and patient goals.",hazard:"Waiting for pregnancy or a mental health crisis can remove time to optimize therapy, counseling, and support.",why:"Anticipatory care preserves informed choices and reduces avoidable risk across the life course."},
{name:"advanced lung disease and transplant planning",lesson:"cf-longitudinal-advanced-care",principle:"Advanced-lung-disease support and transplant referral should begin from trajectory and complications while the patient still has physiologic reserve.",action:"Coordinate oxygen, ventilation, pulmonary rehabilitation, complication planning, goals of care, and timely transplant evaluation.",assessment:"Review FEV1 trajectory, exacerbations, oxygen, hypercapnia, ventilation, nutrition, function, hemoptysis, pneumothorax, pulmonary hypertension, contraindications, and goals.",hazard:"Waiting for terminal respiratory failure before transplant referral can leave inadequate time for evaluation, optimization, and listing.",why:"Early multidisciplinary planning preserves options when decline is nonlinear and severe complications can emerge abruptly."},
];
const dimensions=[["principle","Which principle best characterizes"],["action","Which clinical action best applies to"],["assessment","Which assessment is most appropriate for"],["hazard","Which reasoning hazard is most important to prevent with"]];
function distractors(i,f){return[6,11,17].map(o=>concepts[(i+o)%concepts.length][f])}
const originalCysticFibrosisQuestionBank =concepts.flatMap((c,i)=>dimensions.map(([f,p],d)=>({id:`cf-${String(i*4+d+1).padStart(3,"0")}`,question:`${p} ${c.name}?`,choices:[c[f],...distractors(i,f)],answer:0,rationale:c.why,reviewHref:`#${c.lesson}`})));

const sourceReviewedEnzymeSafetyQuestions = {
  "cf-088": {
    "choices": [
      "Prescribing capsules without calculating total lipase exposure can hide severe underdosing or unsafe escalation.",
      "Recording lipase units per capsule and the number of capsules taken",
      "Checking each meal dose against the patient weight",
      "Adding meal and snack exposures to review the daily lipase total"
    ],
    "rationale": "The book bases pancreatic-enzyme doses on the lipase component, not capsule count alone. Product strength, units per intake and the daily total must be connected to weight and the prescribed schedule to identify underdosing or unsafe escalation."
  },
  "cf-091": {
    "choices": [
      "Review weight, lipase per capsule, capsules per intake, meals, snacks, total daily units, symptoms, stool, growth, pain, and colon history.",
      "Review only the capsule count and omit lipase strength and body weight",
      "Review one meal dose but omit snacks and the daily total",
      "Review nutritional intake but omit abdominal symptoms and the colonic-risk history"
    ],
    "rationale": "The book connects lipase-unit dose limits with rare fibrosing colonopathy and colonic strictures and monitors abdominal symptoms, intake, weight, height and stools. Capsule strength, intake count and body weight allow the meal and daily exposures to be checked; the colon history is a practical review of the stated safety risk."
  },
  "cf-092": {
    "choices": [
      "Escalating very high PERT for every abdominal symptom can increase fibrosing-colonopathy risk without treating the true cause.",
      "Checking lipase units per meal and total daily exposure before a dose change",
      "Reviewing stool, intake, growth and abdominal symptoms together",
      "Recognizing abdominal pain as a possible treatment adverse effect"
    ],
    "rationale": "The book lists abdominal pain as an adverse effect and associates very high lipase exposure with fibrosing colonopathy and colonic strictures. More enzyme is therefore not a safe automatic response to every abdominal symptom. Review dose and the clinical findings before escalation."
  }
};
const reviewedNutritionSystemicQuestions = {
  "cf-085": {
    "choices": [
      "PERT is dosed in lipase units and taken with every relevant meal, snack, formula, or feed.",
      "PERT is dosed by protease units, regardless of the stated lipase strength.",
      "One morning oral dose provides enzyme coverage for every later meal.",
      "All pancreatic enzyme products can be exchanged by capsule count."
    ],
    "rationale": "Lipase units determine PERT dosing. Replacement accompanies relevant intake; continuous feeds need an explicit product and CF-team plan. Protease units, a once-daily oral schedule, and capsule-count substitution do not establish equivalent exposure."
  },
  "cf-086": {
    "choices": [
      "Give at the start of intake, distribute during prolonged meals when directed, and titrate within safe limits to symptoms and growth.",
      "Take the entire daily dose before breakfast, including doses intended for later snacks.",
      "Take meal doses only when steatorrhea appears after eating.",
      "Crush the delayed-release particles into food to improve release."
    ],
    "rationale": "Oral enzymes accompany eating. The CF team may distribute a prolonged-meal dose. Delayed dosing, consolidating separate meal doses, or destroying the coating interferes with appropriate delivery."
  },
  "cf-087": {
    "choices": [
      "Review lipase units per capsule, weight, meal and snack pattern, fat, timing, swallowing, storage, stool, pain, growth, and adherence.",
      "Review capsule count alone because every capsule has the same lipase content.",
      "Review the meal dose but omit snacks from the daily total.",
      "Review stool symptoms alone and assume normal stools prove adequate absorption."
    ],
    "rationale": "Connect strength and intake to weight and total daily exposure, then examine delivery, storage, symptoms, growth, and adherence. Capsule count alone and symptom-only titration omit important dose and outcome information."
  },
  "cf-089": {
    "choices": [
      "For Creon after 12 months of age, doses above 2,500 lipase units/kg/meal, 10,000 units/kg/day, or 4,000 units/g fat ingested/day require further investigation.",
      "A meal dose below 2,500 units/kg makes the daily total irrelevant.",
      "A daily dose below 10,000 units/kg makes the meal dose irrelevant.",
      "The 4,000-unit fat boundary refers to grams of protein eaten."
    ],
    "rationale": "Check all applicable boundaries. A satisfactory meal value does not authorize an excessive daily or fat-based exposure. The fat-based measure uses ingested fat, not protein; doses beyond guidance require investigation and documented justification."
  },
  "cf-090": {
    "choices": [
      "Audit timing, adherence, storage, diet, acid, constipation, infection, and alternate disease before escalating beyond boundaries.",
      "Increase PERT automatically for every abdominal complaint.",
      "Increase PERT until stools look normal without reviewing total exposure.",
      "Add a proton pump inhibitor to every capsule regimen before reviewing timing or adherence."
    ],
    "rationale": "Poor response can reflect delivery, diet, motility, hyperacidity, liver disease, or another gastrointestinal diagnosis. Review these factors before escalating; neither abdominal symptoms nor stool appearance alone establishes a need for more enzyme, and acid suppression is not universal."
  },
  "cf-093": {
    "choices": [
      "Nutrition plans address energy, protein, fat, salt, vitamins A, D, E, and K, body composition, and changing metabolic risk.",
      "Nutrition in CF always requires unlimited calories irrespective of weight or modulator response.",
      "A normal weight excludes fat-soluble vitamin deficiency and ends monitoring.",
      "An effective modulator makes PERT and vitamin replacement unnecessary without reassessment."
    ],
    "rationale": "Nutrition care integrates intake, absorption, vitamin status, and current phenotype. Weight or modulator response alone does not establish adequate micronutrients or restored pancreatic function."
  },
  "cf-094": {
    "choices": [
      "Individualize intake and replacement from phenotype, labs, growth or weight trajectory, malabsorption, modulator response, and goals.",
      "Keep the original high-calorie plan indefinitely despite major weight and blood-pressure changes.",
      "Stop PERT whenever weight rises after modulator therapy.",
      "Treat nutritional decline by calories alone without reviewing malabsorption or food access."
    ],
    "rationale": "Reassess current needs and outcomes. Modulators can alter weight and absorption, but changing PERT needs pancreatic evaluation; a historical calorie prescription or calorie-only response may miss the limiting mechanism."
  },
  "cf-095": {
    "choices": [
      "Review intake, access, stool, PERT, weight history, growth, strength, body composition, vitamin levels, sodium, glucose, liver, and bone.",
      "Review current weight alone and omit the trajectory, vitamins, and stool pattern.",
      "Review the enzyme prescription but omit actual use and access to food.",
      "Review calorie intake but omit glucose, liver, and bone complications."
    ],
    "rationale": "A multidomain assessment connects nutrition with digestion and systemic disease. A weight-only, prescription-only, or calorie-only review leaves important causes and consequences unexamined."
  },
  "cf-096": {
    "choices": [
      "Preserving a universal unlimited-calorie message after major modulator-associated weight gain can ignore cardiometabolic health.",
      "Reassessing dietary quality when the weight trajectory changes",
      "Checking blood pressure and current salt needs after modulator response",
      "Continuing appropriate vitamin and pancreatic-function assessment"
    ],
    "rationale": "An unlimited-calorie message can become inappropriate as phenotype changes. Reviewing quality, salt needs, and vitamin or pancreatic status is appropriate; modulator-associated weight gain does not justify abandoning nutritional surveillance."
  },
  "cf-097": {
    "choices": [
      "Annual two-hour OGTT begins by age 10, using 1.75 g/kg glucose up to 75 g; A1c alone is insufficient, and established CFRD is treated with insulin.",
      "A1c alone is the preferred annual screen when CF is clinically stable.",
      "Annual CFRD screening begins only after weight loss or polyuria appears.",
      "Oral glucose-lowering drugs routinely replace insulin as first-line CFRD treatment."
    ],
    "rationale": "OGTT is the recommended annual screen by age 10, with the pediatric weight-based glucose load capped at 75 g. Screening precedes symptoms. Insulin is the established treatment; A1c alone and routine substitution of oral drugs do not follow this guidance."
  },
  "cf-098": {
    "choices": [
      "Screen during stable health and monitor glucose more intensively during illness, glucocorticoids, pregnancy, or enteral feeding.",
      "Use the same annual fasting-only test in every clinical situation.",
      "Delay glucose assessment until all continuous feeding has been stopped.",
      "Skip additional assessment during systemic glucocorticoids if A1c is normal."
    ],
    "rationale": "Stable-health OGTT does not replace situational monitoring. Acute exacerbation treatment needs fasting and two-hour postprandial measurements, and continuous feeding needs mid- and immediate postfeeding measurements. Pregnancy has additional screening requirements."
  },
  "cf-099": {
    "choices": [
      "Review age, OGTT, fasting and postprandial glucose, symptoms, A1c limits, weight, lung function, feeds, steroids, pregnancy, and insulin plan.",
      "Review A1c alone and omit the OGTT and feeding schedule.",
      "Review fasting glucose alone and omit postprandial readings during acute illness.",
      "Review the insulin prescription but omit nutritional and pulmonary goals."
    ],
    "rationale": "Interpret glucose in its timing and clinical context, with nutritional and treatment information. A1c-only or fasting-only assessment can miss CF dysglycemia; insulin care must preserve appropriate nutrition."
  },
  "cf-100": {
    "choices": [
      "A normal A1c can falsely reassure because CF dysglycemia may be postprandial and A1c can be deceptively low.",
      "Using OGTT for annual screening during stable health",
      "Confirming elevated home-meter readings with laboratory plasma glucose",
      "Using A1c to help monitor established CFRD without treating it as the sole screening test"
    ],
    "rationale": "A normal A1c does not rule out CFRD. OGTT screening and confirmation of meter abnormalities are appropriate. A1c retains a monitoring role after diagnosis, which is distinct from relying on it alone to screen."
  },
  "cf-101": {
    "choices": [
      "CF bone risk reflects nutrition, vitamin D, inflammation, low weight, inactivity, endocrine disease, glucocorticoids, transplant exposure, and age.",
      "CF bone loss is caused only by low vitamin D.",
      "Good pulmonary symptoms eliminate bone risk from steroids or delayed puberty.",
      "A normal weight makes fracture history irrelevant."
    ],
    "rationale": "CF bone risk reflects multiple nutritional, endocrine, inflammatory, activity, and treatment factors. Vitamin D alone, respiratory symptoms alone, or one weight measurement cannot capture that risk."
  },
  "cf-102": {
    "choices": [
      "Schedule bone-density and laboratory assessment by age and risk, correct reversible causes, and treat established disease when indicated.",
      "Wait for a fracture before any adult DXA assessment.",
      "Give vitamin D alone without reviewing fractures, bone density, or endocrine disease.",
      "Begin identical bisphosphonate treatment for every patient regardless of bone density or risk."
    ],
    "rationale": "CF guidance uses age and risk for DXA and combines reversible-factor treatment with density and fracture assessment. Pharmacotherapy requires clinical indications and individual review, not universal treatment or waiting for injury."
  },
  "cf-103": {
    "choices": [
      "Review fractures, height loss, nutrition, vitamin D, calcium, weight-bearing activity, puberty, hormones, glucocorticoids, transplant, kidney function, and DXA.",
      "Review vitamin D alone and omit prior fractures and DXA.",
      "Review DXA alone and omit glucocorticoids, puberty, and nutritional status.",
      "Review calcium intake alone and omit weight-bearing activity and transplant status."
    ],
    "rationale": "Bone surveillance integrates fracture, density, nutrition, activity, endocrine and treatment risks. Each narrower alternative omits factors that can change management."
  },
  "cf-104": {
    "choices": [
      "Replacing vitamin D without assessing the broader fracture phenotype can leave major drivers of bone loss untreated.",
      "Reviewing glucocorticoid exposure alongside vitamin status",
      "Assessing delayed puberty, hypogonadism, and fracture history",
      "Using age and clinical risk to decide when DXA is needed"
    ],
    "rationale": "Vitamin D replacement is one component of prevention and treatment. Steroids, endocrine factors, fracture history and density require assessment; the other choices describe appropriate broader care."
  },
  "cf-105": {
    "choices": [
      "Liver and kidney surveillance must inform medication selection, dose, toxicity monitoring, and transplant planning throughout CF care.",
      "Normal transaminases exclude clinically important portal disease.",
      "A normal creatinine excludes every renal concern regardless of low muscle mass.",
      "Organ surveillance can be deferred while the drug regimen remains unchanged."
    ],
    "rationale": "Structural liver disease and renal trajectory matter to medication safety. Liver enzymes or creatinine in isolation can miss clinically important context; surveillance should not depend only on a medication change."
  },
  "cf-106": {
    "choices": [
      "Trend organ function and structural disease, then adjust nephrotoxic, hepatotoxic, and renally or hepatically cleared treatment accordingly.",
      "Continue the same high-risk drug doses despite a major change in kidney function.",
      "Wait for jaundice before evaluating persistent liver-test abnormalities.",
      "Interpret a low creatinine as proof of excellent filtration without considering malnutrition."
    ],
    "rationale": "Organ function and structural disease must inform exposure and monitoring. Changing renal function, persistent liver abnormalities, and low muscle mass require evaluation rather than a fixed-dose or single-value assumption."
  },
  "cf-107": {
    "choices": [
      "Review liver chemistry, platelets, imaging, portal signs, creatinine, filtration, hydration, stones, diabetes, aminoglycosides, modulators, and transplant medicines.",
      "Review AST and ALT alone and omit platelets, cholestatic tests, and imaging.",
      "Review one creatinine alone and omit prior results, hydration, and nephrotoxic drugs.",
      "Review modulator adherence alone and omit other medications and liver history."
    ],
    "rationale": "Liver assessment includes bilirubin, transaminases, alkaline phosphatase, GGT, platelets, and imaging context. Renal safety requires trajectory and exposure review. Single-domain alternatives omit important evidence."
  },
  "cf-108": {
    "choices": [
      "Waiting for jaundice or creatinine elevation alone can miss earlier portal disease or cumulative kidney injury.",
      "Following platelets and liver/spleen imaging when clinically indicated",
      "Interpreting creatinine alongside nutritional status and renal trajectory",
      "Reviewing nephrotoxic exposures during antibiotic treatment"
    ],
    "rationale": "Waiting for jaundice or creatinine elevation alone can delay recognition. Platelet/imaging assessment and renal trajectory or exposure review are appropriate safeguards."
  },
  "cf-109": {
    "choices": [
      "Adults with CF need earlier colorectal cancer screening, with additional risk and modified timing after solid-organ transplantation.",
      "CF uses average-risk colorectal screening without transplant modifications.",
      "Solid-organ transplantation lowers CF colorectal cancer risk.",
      "Annual stool testing is an established equivalent to colonoscopy for CF screening."
    ],
    "rationale": "CF guidance recommends colonoscopy from age 40 and modified timing after transplant from age 30. Stool testing has insufficient evidence as an equivalent, and transplantation increases rather than reduces risk."
  },
  "cf-110": {
    "choices": [
      "Apply current CF-specific screening age, interval, and bowel preparation while investigating alarm symptoms diagnostically.",
      "Apply average-risk screening intervals regardless of CF or prior polyps.",
      "Use routine bowel preparation without discussing the CF regimen.",
      "Wait for the next screening date despite new bleeding or obstructive symptoms."
    ],
    "rationale": "CF-specific timing, preparation, and prior findings affect surveillance. New alarm symptoms need diagnostic evaluation; the routine schedule is not a reason to defer it."
  },
  "cf-111": {
    "choices": [
      "Review age, transplant status, prior colonoscopy and preparation, polyps, family history, bleeding, anemia, bowel change, obstruction, and follow-up interval.",
      "Review age alone and omit transplant history and the last colonoscopy.",
      "Review a prior colonoscopy date but omit preparation quality and polyp findings.",
      "Review screening eligibility but omit bleeding, anemia, and bowel change."
    ],
    "rationale": "Transplant, prior examination quality and pathology, and current symptoms determine the next evaluation. Age or dates alone cannot establish the correct plan."
  },
  "cf-112": {
    "choices": [
      "Using average-risk screening timing can delay detection in a population with increased and earlier colorectal cancer risk.",
      "Planning more intensive CF bowel preparation with the endoscopist",
      "Using prior adenomatous polyp findings to shorten surveillance",
      "Evaluating new alarm symptoms before a routine screening date"
    ],
    "rationale": "Average-risk timing can delay CF screening. Intensive preparation, polyp-based surveillance, and prompt diagnostic evaluation are appropriate components of the CF plan."
  }
};
const nutritionSystemicCases = [
  {
    "id": "cf-pert-daily-exposure",
    "question": "A 30 kg child takes Creon 24,000: two capsules with each of three meals and one with each of two snacks. What is the total daily lipase exposure?",
    "choices": [
      "6,400 units/kg/day",
      "1,600 units/kg/day",
      "4,800 units/kg/day",
      "8,000 units/kg/day"
    ],
    "answer": 0,
    "rationale": "Eight capsules provide 192,000 units/day; dividing by 30 kg gives 6,400 units/kg/day. The 1,600 figure describes one meal, 4,800 omits the snacks, and 8,000 would require ten capsules.",
    "reviewHref": "#cf-nutrition-gi-endocrine"
  },
  {
    "id": "cf-pert-independent-boundaries",
    "question": "A 20 kg child takes 2,000 lipase units/kg with each of three meals and 1,000 units/kg with each of five snacks. Which dose review is correct?",
    "choices": [
      "Each meal is below 2,500 units/kg, but the daily total is 11,000 units/kg and requires investigation.",
      "The daily total is 6,000 units/kg because snacks do not count.",
      "The daily total is 7,000 units/kg because only one snack is counted.",
      "Every boundary is satisfied because each meal is below 2,500 units/kg."
    ],
    "answer": 0,
    "rationale": "Three meals give 6,000 units/kg/day and five snacks give 5,000, totaling 11,000. This exceeds the daily investigation boundary even though each meal is below its separate limit.",
    "reviewHref": "#cf-nutrition-gi-endocrine"
  },
  {
    "id": "cf-feeding-glucose-window",
    "question": "Continuous overnight gastrostomy feeding is initiated in a person with CF without known CFRD. Which glucose-screening plan matches CF guidance?",
    "choices": [
      "Measure midway through and immediately after feeding at initiation, then at these times monthly at home; confirm elevated meter readings in the laboratory.",
      "Measure fasting glucose alone annually and ignore the feeding window.",
      "Use A1c alone monthly without timed glucose readings.",
      "Measure only before the feed and diagnose CFRD from any single elevated home-meter reading."
    ],
    "answer": 0,
    "rationale": "Continuous-feed screening targets mid- and immediate postfeeding glucose, initially and monthly thereafter. Fasting-only or A1c-only testing can miss feeding-related dysglycemia, and elevated meter values need laboratory confirmation.",
    "reviewHref": "#cf-systemic-complications"
  },
  {
    "id": "cf-advanced-liver-early-ogtt",
    "question": "An 8-year-old with CF is diagnosed with advanced CF liver disease and does not have known diabetes. When should CFRD screening begin?",
    "choices": [
      "At the diagnosis of advanced liver disease, then annually",
      "Only at age 10 regardless of liver disease",
      "Only after a high A1c or diabetes symptoms appear",
      "Only after solid-organ transplantation"
    ],
    "answer": 0,
    "rationale": "The 2024 CF hepatobiliary guidance recommends screening from advanced-liver-disease diagnosis, even before age 10, then annually. Waiting for age 10, symptoms, A1c elevation, or transplantation misses that higher-risk recommendation.",
    "reviewHref": "#cf-systemic-complications"
  }
];
const reviewedDiagnosisAirwayPulmonaryQuestions = {
  "cf-001": {
    "choices": [
      "CFTR conducts chloride and bicarbonate and helps coordinate epithelial salt, water, pH, and secretion.",
      "CFTR is a sodium-only channel with no role in bicarbonate movement.",
      "CFTR dysfunction is confined to pancreatic digestive enzymes.",
      "CFTR is a bacterial toxin that blocks airway receptors."
    ],
    "rationale": "CFTR transports chloride and bicarbonate and influences epithelial fluid and secretion. A sodium-only description, digestive-enzyme identity, or bacterial-toxin identity does not describe this channel."
  },
  "cf-002": {
    "choices": [
      "Connect organ findings to altered epithelial transport rather than treating each manifestation as unrelated.",
      "Treat lung mucus as unrelated to pancreatic malabsorption and sweat salt loss.",
      "Interpret every organ problem as the same bacterial infection.",
      "Assess only respiratory symptoms because CFTR is absent from other organs."
    ],
    "rationale": "A shared epithelial transport defect links airway, digestive, sweat, liver, and reproductive findings. This does not mean that each manifestation has one identical treatment or that every problem is infection."
  },
  "cf-003": {
    "choices": [
      "Review airway hydration, sweat salt, pancreatic and intestinal function, liver disease, fertility, genotype, and functional evidence.",
      "Review lung symptoms alone and omit digestive and salt-loss findings.",
      "Review body weight alone and omit respiratory function and diagnostic testing.",
      "Review one genotype report and omit phenotype and functional evidence."
    ],
    "rationale": "CFTR physiology is multisystem. Organ findings, genotype, and functional evidence provide complementary information; lung-only, weight-only, and genotype-only assessments omit relevant context."
  },
  "cf-004": {
    "choices": [
      "Reducing CF to thick lung mucus misses the channel defect across several organs.",
      "Connecting pancreatic malabsorption and high sweat chloride to epithelial transport",
      "Reviewing gastrointestinal and reproductive manifestations alongside lung disease",
      "Using phenotype and functional evidence together in evaluation"
    ],
    "rationale": "The hazard is limiting CF to lung mucus. The other choices appropriately connect multiple manifestations or diagnostic evidence rather than making that reduction."
  },
  "cf-005": {
    "choices": [
      "F508del causes major CFTR folding and trafficking dysfunction with reduced surface stability.",
      "F508del is only a gating defect in a normally processed, fully stable channel.",
      "F508del increases the quantity of normal CFTR at the cell surface.",
      "F508del eliminates the need to interpret the other CFTR allele."
    ],
    "rationale": "F508del impairs folding and trafficking; rescued surface protein can also be unstable. It is not simply a normally processed channel with an isolated gate defect, and both alleles remain clinically relevant."
  },
  "cf-006": {
    "choices": [
      "Use a responsive corrector-potentiator combination under current genotype, age, and product labeling.",
      "Prescribe potentiator monotherapy for every F508del genotype without checking the product label.",
      "Choose any corrector combination solely by mutation class and ignore age.",
      "Exchange fixed combinations by tablet count without reviewing ingredients."
    ],
    "rationale": "A responsive corrector-potentiator combination addresses processing and channel activity under exact product eligibility. Mutation class alone, universal monotherapy, or tablet-count substitution does not establish an appropriate regimen."
  },
  "cf-007": {
    "choices": [
      "Review both variants, responsive-variant table, age, weight, formulation, prior modulator, liver status, interactions, and access.",
      "Review F508del status alone and omit age, formulation, liver status, and interactions.",
      "Review the brand name alone and assume all fixed combinations have identical ingredients.",
      "Review symptoms alone and omit the responsive-variant requirements."
    ],
    "rationale": "The mechanism does not establish product eligibility or safe exposure. Genotype, age, formulation, hepatic context, interacting drugs, and the complete regimen must be reviewed before selection."
  },
  "cf-008": {
    "choices": [
      "Assuming one potentiator can rescue protein that never reaches the surface ignores the processing defect.",
      "Checking the current responsive-variant requirements before modulator selection",
      "Distinguishing corrector trafficking effects from potentiator channel-opening effects",
      "Reviewing the exact fixed combination and age-appropriate formulation"
    ],
    "rationale": "A potentiator acts on responsive protein at the surface; it cannot by itself solve every protein-processing defect. The other choices are appropriate mechanistic or product checks."
  },
  "cf-009": {
    "choices": [
      "An abnormal newborn screen identifies CF risk but does not establish the diagnosis.",
      "An elevated IRT result alone confirms CF in every infant.",
      "A positive newborn screen proves that two disease-causing variants are present.",
      "A negative newborn screen excludes CF in every symptomatic child."
    ],
    "rationale": "Screening identifies risk and can produce false-positive or false-negative results. Confirmation uses sweat chloride, genetics, and clinical context; a screen does not automatically prove a particular genotype."
  },
  "cf-010": {
    "choices": [
      "Arrange timely sweat testing and CF-center evaluation with genetic and clinical interpretation.",
      "Start every modulator immediately on the basis of IRT alone.",
      "Wait for severe malabsorption before arranging confirmatory testing.",
      "Replace sweat chloride measurement with sweat sodium or conductivity."
    ],
    "rationale": "A positive screen requires timely diagnostic sweat testing and CF-center interpretation. Neither IRT-based treatment eligibility, waiting for symptoms, nor alternative sweat measurements provides equivalent confirmation."
  },
  "cf-011": {
    "choices": [
      "Review screening algorithm, age, hydration, sweat quantity, chloride result, genotype, symptoms, family history, and follow-up.",
      "Review IRT alone and omit sweat quantity, chloride, and genotype.",
      "Review genotype alone and omit the screening context and clinical findings.",
      "Review symptoms alone and assume an asymptomatic infant needs no follow-up."
    ],
    "rationale": "The screening algorithm, collection quality, quantitative chloride, genetics, clinical context, and follow-up all matter. Asymptomatic infants can still need prompt confirmation, and incomplete samples cannot be interpreted as normal."
  },
  "cf-012": {
    "choices": [
      "Labeling an infant definitively from immunoreactive trypsinogen alone bypasses confirmatory testing.",
      "Explaining that a positive newborn screen needs diagnostic confirmation",
      "Arranging sweat testing at a CF center after a positive screen",
      "Considering CF evaluation despite a negative screen when symptoms are compelling"
    ],
    "rationale": "IRT is a screening marker, not sufficient diagnostic evidence. The other choices preserve the distinction between screening and diagnosis or recognize a possible false-negative screen."
  },
  "cf-013": {
    "choices": [
      "Sweat chloride at least 60 mmol/L supports CF, 30 to 59 is intermediate, and below 30 makes CF less likely but not impossible.",
      "Sweat chloride from 30 to 59 mmol/L definitively excludes CF.",
      "Every sweat chloride result below 60 mmol/L is normal.",
      "Sweat conductivity has the same diagnostic meaning as quantitative chloride."
    ],
    "rationale": "The 30-59 range is intermediate. Below 30 makes CF less likely, but clinical or genetic evidence can still warrant evaluation. Use quantitative sweat chloride, not an interchangeable conductivity value."
  },
  "cf-014": {
    "choices": [
      "Repeat intermediate or discordant testing at an experienced center and integrate genotype, phenotype, and functional studies.",
      "Classify every intermediate result as normal and end follow-up.",
      "Diagnose CF from one quantity-not-sufficient sample by estimating its chloride.",
      "Pool separate insufficient sweat collections to make a diagnostic specimen."
    ],
    "rationale": "Intermediate or discordant results need repeat quality-controlled testing and integrated evaluation. An insufficient specimen is not interpretable and separate samples must not be pooled."
  },
  "cf-015": {
    "choices": [
      "Review collection quality, quantity, age, chloride, repeat result, genotype, medications, hydration, phenotype, and laboratory certification.",
      "Review the numeric chloride value alone and omit sample quantity and collection quality.",
      "Review the first genotype panel alone and omit repeat sweat testing when indicated.",
      "Review family history alone and omit the current phenotype and functional evidence."
    ],
    "rationale": "Diagnostic interpretation depends on a valid collection and clinical and genetic context. A number, limited panel, or family history alone cannot resolve every diagnostic state."
  },
  "cf-016": {
    "choices": [
      "Treating an intermediate result as either definitively normal or definitively CF loses required diagnostic follow-up.",
      "Repeating an intermediate chloride result and considering extended testing",
      "Recollecting sweat after a quantity-not-sufficient report",
      "Considering CF despite chloride below 30 when phenotype or genotype is compelling"
    ],
    "rationale": "An intermediate result does not justify a definitive binary conclusion. Repeat testing, recollection of an insufficient specimen, and evaluation of discordant evidence are appropriate."
  },
  "cf-017": {
    "choices": [
      "CRMS or CFSPID and other uncertain states require structured follow-up rather than premature disease labeling or dismissal.",
      "CRMS/CFSPID is a confirmed CF diagnosis that requires every chronic CF medicine.",
      "CRMS/CFSPID guarantees that CF can never develop.",
      "Any symptomatic adult with bronchiectasis automatically meets CRMS/CFSPID criteria."
    ],
    "rationale": "CRMS/CFSPID is a defined inconclusive newborn-screen state, distinct from established CF or an adult CFTR-related disorder. Follow-up detects evolving evidence without assuming either definite disease or guaranteed lifelong absence."
  },
  "cf-018": {
    "choices": [
      "Use CF-center surveillance, repeat testing, symptom review, and family counseling according to current guidance.",
      "Stop all follow-up after one intermediate sweat result.",
      "Use routine CFTR modulator therapy solely because CRMS/CFSPID is recorded.",
      "Begin routine daily airway clearance for every asymptomatic person with CRMS/CFSPID."
    ],
    "rationale": "Current guidance recommends annual CF-clinician follow-up and repeat sweat testing at 6 months and annually at least through age 8. It recommends against modulators and routine airway clearance solely for this designation; new symptoms require individualized reassessment."
  },
  "cf-019": {
    "choices": [
      "Review newborn screen, sweat trajectory, variants, penetrance, symptoms, growth, cultures, pancreatic function, family understanding, and follow-up.",
      "Review only the original screening result and omit the sweat trajectory and growth.",
      "Review the variant names but ignore clinical consequence and whether they are on separate alleles.",
      "Review cultures alone and reclassify as CF from one positive culture without integrated assessment."
    ],
    "rationale": "Follow the sweat trajectory, variant meaning and phase, growth, symptoms, pancreatic evidence, cultures when selected, and family understanding. No single original screen, variant name, or culture automatically establishes the final diagnosis."
  },
  "cf-020": {
    "choices": [
      "Assuming uncertainty means no future disease can delay recognition of evolving CFTR dysfunction.",
      "Maintaining annual follow-up and repeat sweat testing under current guidance",
      "Explaining diagnostic uncertainty and when new symptoms need reassessment",
      "Seeking expert interpretation of variant consequence and phase"
    ],
    "rationale": "Uncertainty does not mean zero future risk. The other choices provide appropriate surveillance, communication, and diagnostic interpretation without prematurely labeling established CF."
  },
  "cf-021": {
    "choices": [
      "All people with CF need an individualized clearance strategy, and no single technique is universally superior.",
      "One chest-wall oscillation device is proven best for every person with CF.",
      "Aerobic exercise routinely replaces all prescribed airway clearance.",
      "The established-CF clearance recommendation automatically applies to asymptomatic CRMS/CFSPID."
    ],
    "rationale": "Established CF needs individualized airway clearance; no method is universally superior and exercise is an adjunct. CRMS/CFSPID follows separate guidance that recommends against routine clearance solely for that designation."
  },
  "cf-022": {
    "choices": [
      "Choose and teach a sustainable method around age, ability, preference, sputum, lung function, response, and burden.",
      "Choose the newest device without evaluating technique, ability, or preference.",
      "Use the same method and frequency for everyone regardless of response.",
      "Remove prescribed clearance whenever the patient reports exercising."
    ],
    "rationale": "A sustainable method depends on performance, ability, preference, burden, and response. Device novelty, a uniform regimen, and exercise alone do not replace individualized assessment."
  },
  "cf-023": {
    "choices": [
      "Review technique, frequency, cough, sputum, device, cleaning, exercise, caregiver support, adherence, and clinical response.",
      "Review the device brand alone and omit observed technique and clinical response.",
      "Review adherence alone and assume the equipment works correctly.",
      "Review sputum volume alone and omit frequency, exercise, and caregiver support."
    ],
    "rationale": "Effective clearance depends on technique, implementation, equipment, support, and response. A device name, adherence report, or sputum measure alone cannot verify that the regimen works."
  },
  "cf-024": {
    "choices": [
      "Prescribing a device without observing technique can create treatment time without effective secretion movement.",
      "Observing the patient perform the prescribed clearance method",
      "Matching technique to age, ability, response, and preference",
      "Reviewing device hygiene and caregiver support"
    ],
    "rationale": "A prescription without observed performance can leave ineffective treatment unnoticed. The other choices help verify implementation and personalize the regimen."
  },
  "cf-025": {
    "choices": [
      "Inhaled hypertonic saline osmotically hydrates airway secretions and supports clearance.",
      "Hypertonic saline directly cleaves extracellular DNA in sputum.",
      "Hypertonic saline is a genotype-specific CFTR corrector.",
      "Hypertonic saline directly eradicates chronic Pseudomonas as an antibiotic."
    ],
    "rationale": "Hypertonic saline draws water into airway secretions. Dornase cleaves DNA, modulators target CFTR, and antibiotics treat bacteria; these mechanisms are distinct."
  },
  "cf-026": {
    "choices": [
      "Assess bronchospasm tolerance, use a bronchodilator when indicated, and pair treatment with airway clearance.",
      "Ignore first-dose chest tightness because saline cannot cause airway reactions.",
      "Use hypertonic saline as a replacement for every prescribed clearance technique.",
      "Begin any concentration and nebulizer without checking the prescribed regimen."
    ],
    "rationale": "Tolerance and the exact regimen matter because saline can cause cough, tightness, or bronchospasm. It supports clearance rather than replacing technique and product-specific delivery."
  },
  "cf-027": {
    "choices": [
      "Review concentration, nebulizer, pretreatment, cough, bronchospasm, salt taste, timing, cleaning, adherence, and response.",
      "Review vial volume alone and omit concentration and nebulizer.",
      "Review cough alone and omit bronchospasm, pretreatment, and timing.",
      "Review the prescription alone and omit cleaning and actual dose completion."
    ],
    "rationale": "Concentration, equipment, tolerance, timing, hygiene, completion, and response determine delivery. Volume-only, symptom-only, or prescription-only review omits important information."
  },
  "cf-028": {
    "choices": [
      "Mixing hypertonic saline indiscriminately with another nebulized product can alter compatibility and delivery.",
      "Administering hypertonic saline separately from Pulmozyme",
      "Checking the prescribed concentration and recommended delivery system",
      "Assessing tolerance and using a prescribed bronchodilator first"
    ],
    "rationale": "Indiscriminate admixture can compromise delivery and is not authorized by product instructions. The other choices are appropriate administration safeguards."
  },
  "cf-029": {
    "choices": [
      "Dornase alfa cleaves extracellular DNA and reduces the viscosity of neutrophil-rich CF sputum.",
      "Dornase alfa opens narrowed airways by stimulating beta-2 receptors.",
      "Dornase alfa supplies pancreatic lipase for digestion.",
      "Dornase alfa directly kills all bacteria in CF sputum."
    ],
    "rationale": "Dornase is a DNase that cleaves extracellular DNA and reduces sputum viscosity. It does not provide bronchodilation, digestive lipase, or direct broad antibacterial killing."
  },
  "cf-030": {
    "choices": [
      "Administer through a recommended nebulizer on the prescribed schedule; do not dilute or mix Pulmozyme with other nebulized drugs.",
      "Dilute Pulmozyme with saline whenever its ampule volume seems small.",
      "Mix Pulmozyme with inhaled antibiotic to shorten treatment time.",
      "Use any nebulizer because all systems deliver the same dose."
    ],
    "rationale": "Use a recommended nebulizer and the prescribed schedule. The Pulmozyme label prohibits dilution or mixing with other nebulized drugs; no generic compatibility exception or all-device equivalence is provided."
  },
  "cf-031": {
    "choices": [
      "Review dose, storage, nebulizer, timing, voice change, pharyngitis, adherence, lung response, and sequencing.",
      "Review the ampule volume alone and omit dose, device, and storage.",
      "Review cough improvement alone and omit throat or voice symptoms.",
      "Review refrigeration alone and omit mixing, dose completion, and the nebulizer."
    ],
    "rationale": "Dose, compatible equipment, storage, timing, adverse effects, and response are all relevant. Pulmozyme is 2.5 mg per 2.5 mL ampule, must not be mixed, and requires correct cold-chain and device handling."
  },
  "cf-032": {
    "choices": [
      "Calling dornase a bronchodilator or antibiotic misrepresents its target and expected response.",
      "Identifying dornase as a DNA-cleaving mucolytic",
      "Distinguishing dornase from a bronchodilator and an antibiotic",
      "Reviewing sputum clearance and pulmonary response to prescribed therapy"
    ],
    "rationale": "Calling dornase a bronchodilator or antibiotic misstates its mechanism. The other choices correctly identify or assess the mucolytic role."
  },
  "cf-033": {
    "choices": [
      "A deliberate sequence prepares the airway, mobilizes secretions, and preserves inhaled-antibiotic deposition.",
      "Treatment sequence is irrelevant because all nebulized drugs act identically.",
      "Inhaled antibiotic should always be the first step before secretion clearance.",
      "All inhaled medicines should be combined in one cup to make a single step."
    ],
    "rationale": "The sequence prepares and thins secretions, supports clearance, and then antibiotic delivery. Drugs have distinct roles and product instructions; a common sequence is not permission to mix them."
  },
  "cf-034": {
    "choices": [
      "Follow the individualized center plan: a prescribed bronchodilator, hypertonic saline, dornase, physical clearance, then inhaled antibiotic is the book sequence.",
      "Give the inhaled antibiotic first, then perform physical clearance and mucus-thinning therapy.",
      "Combine saline, dornase, and antibiotic in one nebulizer cup.",
      "Use a bronchodilator only after finishing all secretion-thinning treatments."
    ],
    "rationale": "The book and current patient guidance place mucus thinning before physical clearance and antibiotic afterward. Follow center and product instructions; optimal universal sequencing is not established."
  },
  "cf-035": {
    "choices": [
      "Review every product, purpose, timing, compatibility, device, treatment duration, cleaning, burden, and patient preference.",
      "Review the number of products alone and omit timing, compatibility, and equipment.",
      "Review the antibiotic dose alone and omit the preceding clearance steps.",
      "Review prescribed timing alone and omit burden and actual implementation."
    ],
    "rationale": "A useful sequence review covers every product, its role, timing, compatibility, device, and practical implementation. Product count or antibiotic dose alone omits how delivery occurs."
  },
  "cf-036": {
    "choices": [
      "Delivering inhaled antibiotic before clearing obstructing secretions can reduce deposition to target airways.",
      "Following the center plan for thinning and physically clearing secretions before antibiotic",
      "Checking separate nebulizer administration and product instructions",
      "Reviewing whether the treatment sequence is feasible for the patient"
    ],
    "rationale": "The hazard is giving antibiotic before clearing obstructing secretions. The other choices support planned delivery and implementation; the best exact timing remains individualized."
  },
  "cf-037": {
    "choices": [
      "Nebulizer cleaning, disinfection, drying, storage, and replacement are part of medication safety.",
      "Correct dosing eliminates the need for nebulizer disinfection.",
      "Wiping only the outside of the cup is equivalent to cleaning and disinfecting its parts.",
      "Sharing a cleaned nebulizer is the recommended routine for people with CF in one home."
    ],
    "rationale": "The device can carry organisms into the airway and influence dose delivery. Clean and disinfect compatible parts, dry them, and give each person their own equipment; a correct prescription alone is insufficient."
  },
  "cf-038": {
    "choices": [
      "Observe the full equipment workflow and align it with manufacturer and CF-center infection-prevention instructions.",
      "Apply one generic disinfection method to every device, including all mesh aerosol heads.",
      "Skip manufacturer instructions if the patient has used the device before.",
      "Increase drug dose whenever mist production seems poor without checking the equipment."
    ],
    "rationale": "Observe the complete workflow and use manufacturer-compatible infection prevention. Specific devices can prohibit generic methods, and a failing system should be assessed rather than bypassed by dose escalation."
  },
  "cf-039": {
    "choices": [
      "Review hand hygiene, parts, water source, wash, disinfection, drying, storage, replacement, sharing, and electrical function.",
      "Review the brand name alone and omit parts, cleaning, drying, and replacement.",
      "Review cleaning alone and omit disinfection and dry storage.",
      "Review electrical function alone and omit medication preparation and hygiene."
    ],
    "rationale": "Hand hygiene, compatible parts, water, cleaning, disinfection, drying, storage, and function all contribute to safe delivery. Each narrower review misses an important part of the process."
  },
  "cf-040": {
    "choices": [
      "A correctly prescribed medicine delivered through contaminated or failing equipment can cause infection or underdosing.",
      "Cleaning and disinfecting compatible parts after use",
      "Using sterile water to rinse after cold disinfection",
      "Allowing compatible nebulizer parts to air dry before storage"
    ],
    "rationale": "Contamination or equipment failure can undermine a correct prescription. The other choices are appropriate care steps when performed according to the exact device instructions."
  },
  "cf-057": {
    "choices": [
      "A CF exacerbation is a clinically important change from baseline informed by symptoms, lung function, oxygenation, and prior microbiology.",
      "Every CF exacerbation requires fever before treatment is considered.",
      "One population FEV1 threshold diagnoses every exacerbation without clinical context.",
      "One susceptibility report fully predicts clinical response regardless of previous history."
    ],
    "rationale": "Exacerbation recognition combines change from baseline, symptoms, physiology, and microbiology. Fever is not required and neither a universal threshold nor an isolated susceptibility result captures the whole clinical state."
  },
  "cf-058": {
    "choices": [
      "Choose route and antibiotics from severity and longitudinal culture data, intensify clearance, and measure recovery toward baseline.",
      "Use an identical oral antibiotic for every decline without reviewing prior organisms.",
      "Manage IV treatment at home regardless of available monitoring and support.",
      "Stop all chronic pulmonary therapy and clearance during every exacerbation."
    ],
    "rationale": "Severity, microbiology, previous response, treatment delivery, and monitoring determine the plan. Increase clearance when safe and continue appropriate chronic therapy; home IV care needs hospital-equivalent resources and support."
  },
  "cf-059": {
    "choices": [
      "Review cough, sputum, dyspnea, fever, fatigue, appetite, weight, hemoptysis, FEV1, oxygen, cultures, allergies, prior response, and organ function.",
      "Review culture results alone and omit symptoms, lung function, and oxygenation.",
      "Review fever alone and rule out exacerbation if it is absent.",
      "Review the antibiotic name alone and omit allergy, organ function, and prior response."
    ],
    "rationale": "Integrate respiratory and systemic symptoms, physiology, microbiology, and treatment-safety context. Culture-only, fever-only, or prescription-only assessments omit clinically relevant evidence."
  },
  "cf-060": {
    "choices": [
      "Using susceptibility data without prior clinical response or airway history can oversimplify biofilm and polymicrobial disease.",
      "Integrating current susceptibility with prior organisms and clinical response",
      "Reviewing treatment implementation when response is incomplete",
      "Considering clinical severity alongside microbiology when choosing the care setting"
    ],
    "rationale": "Susceptibility alone cannot fully describe a complex CF airway or predict response. The other choices appropriately incorporate clinical history, implementation, and severity."
  },
  "cf-061": {
    "choices": [
      "CF pulmonary change and recovery are interpreted against the patient's stable symptoms, spirometry, oxygenation, weight, and treatment implementation.",
      "A value within a broad population range proves recovery despite a large personal decline.",
      "Recovery is complete as soon as cough begins to improve.",
      "Recovery assessment is determined only by the current sputum culture."
    ],
    "rationale": "Stable personal function and multidomain response provide the comparison for decline and recovery. A population range, early symptom change, or culture alone does not establish return toward baseline."
  },
  "cf-062": {
    "choices": [
      "Document baseline before decline and reassess all affected domains after treatment rather than relying on fever or one FEV1 value.",
      "End assessment when fever resolves even if oxygen and spirometry remain below baseline.",
      "Assess only a single FEV1 value without its prior trajectory or test quality.",
      "Wait for another exacerbation before reviewing incomplete recovery."
    ],
    "rationale": "Document baseline and assess affected domains after treatment. Fever resolution, a single measurement, or deferring review can miss persistent physiologic loss."
  },
  "cf-063": {
    "choices": [
      "Review symptom trend, FEV1, oxygen, weight, exercise, sleep, microbiology, imaging, treatment delivery, toxicity, and return toward prior function.",
      "Review one FEV1 value alone and omit symptoms, oxygen, and weight.",
      "Review symptoms alone and omit drug toxicity and actual treatment delivery.",
      "Review microbiology alone and omit prior function and the recovery trajectory."
    ],
    "rationale": "Recovery combines symptoms, physiology, nutrition, delivery, safety, and trajectory. Each limited alternative misses a domain that can explain incomplete improvement."
  },
  "cf-064": {
    "choices": [
      "Calling partial symptom improvement full recovery can miss persistent physiologic loss and a need for further evaluation.",
      "Reassessing spirometry and oxygenation against stable values",
      "Reviewing delivery, adherence, and complications when recovery is incomplete",
      "Arranging follow-up after the antibiotic course"
    ],
    "rationale": "Partial symptom improvement is not proof of full recovery. The other choices support reassessment and recognition of persistent impairment."
  }
};
const diagnosisAirwayPulmonaryCases = [
  {
    "id": "cf-sweat-intermediate-42",
    "question": "A screen-positive infant has an adequate sweat chloride result of 42 mmol/L. What is the best interpretation and next step?",
    "choices": [
      "An intermediate result requiring repeat sweat testing and integrated CF-center genetic and clinical evaluation",
      "A normal result that ends all diagnostic follow-up",
      "A definitive CF diagnosis based on sweat chloride alone",
      "An uninterpretable result solely because chloride is below 60 mmol/L"
    ],
    "answer": 0,
    "rationale": "42 mmol/L falls in the 30-59 intermediate range. Repeat testing and integrated evaluation are needed; it is neither a definitive diagnosis nor a reason to dismiss CF. Adequate collection makes the result interpretable.",
    "reviewHref": "#cf-biology-diagnosis"
  },
  {
    "id": "cf-crms-sweat-followup",
    "question": "A well infant has an established CRMS/CFSPID designation. Which planned follow-up matches the 2024 CF Foundation guidance?",
    "choices": [
      "At least annual CF-clinician follow-up, with sweat testing at 6 months and annually at least through age 8",
      "No reassessment unless severe lung disease develops",
      "Routine CFTR modulator treatment without reclassification or eligibility assessment",
      "Routine daily airway clearance for every asymptomatic infant with this designation"
    ],
    "answer": 0,
    "rationale": "CRMS/CFSPID requires surveillance while avoiding routine treatment for established CF. Sweat testing at 6 months and annually at least through age 8 accompanies annual specialist follow-up; routine modulators and routine airway clearance are not recommended solely for this designation.",
    "reviewHref": "#cf-biology-diagnosis"
  },
  {
    "id": "cf-dornase-single-ampule",
    "question": "Pulmozyme is prescribed at the usual 2.5 mg once-daily dose. The ampule contains 2.5 mg in 2.5 mL. Which preparation is correct?",
    "choices": [
      "Use the full 2.5 mL ampule through a recommended nebulizer without dilution or mixing",
      "Use 1 mL because every liquid dose has a 1 mL volume",
      "Add saline to make 5 mL because dilution is routinely required",
      "Use half the ampule and store the opened remainder for tomorrow"
    ],
    "answer": 0,
    "rationale": "At 1 mg/mL, 2.5 mg requires 2.5 mL: the full single-dose ampule. Do not dilute or mix it. Once opened, use the full contents or discard the remainder.",
    "reviewHref": "#cf-airway-clearance"
  },
  {
    "id": "cf-dornase-cumulative-excursion",
    "question": "Unopened Pulmozyme ampules remained in their protective foil at 24 degrees C for 32 hours, were refrigerated, then spent another 30 hours at 24 degrees C. What follows current US labeling?",
    "choices": [
      "Do not use: the cumulative room-temperature exposure is 62 hours, above the 60-hour limit",
      "Use: refrigeration resets the excursion clock, so only 30 hours count",
      "Use: only the first excursion counts, so exposure is 32 hours",
      "Use: unopened ampules can be kept indefinitely at 24 degrees C"
    ],
    "answer": 0,
    "rationale": "The label limits cumulative exposure at 22-28 degrees C to 60 hours. 32 + 30 = 62 hours; refrigeration does not reset the total. Unopened foil does not authorize indefinite room-temperature storage.",
    "reviewHref": "#cf-airway-clearance"
  },
  {
    "id": "cf-fev1-baseline-change",
    "question": "A person with CF has stable FEV1 of 88% predicted and now measures 74% predicted. Which description of the decline is arithmetically correct?",
    "choices": [
      "14 percentage points, approximately 15.9% relative to the baseline value",
      "14% relative decline and 15.9 percentage points",
      "A 74-percentage-point decline from baseline",
      "No decline because both results are percentages"
    ],
    "answer": 0,
    "rationale": "88 - 74 = 14 percentage points. Dividing 14 by the baseline 88 and multiplying by 100 gives approximately 15.9%. This calculation describes change; clinical context and test quality remain necessary.",
    "reviewHref": "#cf-pulmonary-assessment"
  }
];
const reviewedInfectionQuestions = {
  "cf-041": {
    "choices": [
      "Serial organism history, clinical trajectory, and sample type are more informative than one isolated culture.",
      "A single negative throat culture excludes any continuing lower-airway infection",
      "Only susceptibility results matter, regardless of symptoms or prior response",
      "Every organism recovered from a respiratory specimen has identical clinical significance"
    ],
    "rationale": "Serial history combines microbiology, sample limitations, and the clinical trajectory. A negative throat sample cannot rule out all lower-airway disease, susceptibility alone does not predict the entire response, and different organisms require different interpretation."
  },
  "cf-042": {
    "choices": [
      "Trend microbiology and obtain the best feasible respiratory sample at recommended intervals and during deterioration.",
      "Wait for severe symptoms before obtaining any follow-up culture",
      "Replace all CF respiratory specimens with routine oropharyngeal swabs for NTM screening",
      "Choose the easiest specimen without documenting its type or limitations"
    ],
    "rationale": "Surveillance and sampling during deterioration inform longitudinal care. Waiting for severe symptoms discards routine surveillance; oropharyngeal swabs are not recommended for NTM screening; undocumented sample limitations weaken interpretation."
  },
  "cf-043": {
    "choices": [
      "Review specimen type, organism history, density, phenotype, susceptibility, symptoms, spirometry, imaging, antibiotics, and response.",
      "Review only the newest organism name and ignore prior antibiotics",
      "Review spirometry alone because microbiology does not inform treatment",
      "Review the culture report without symptoms, specimen type, or response history"
    ],
    "rationale": "The stated broad assessment connects microbiologic findings to sample quality and clinical relevance. The alternatives omit either organism history, microbiology itself, or the clinical and specimen context needed to interpret a culture."
  },
  "cf-044": {
    "choices": [
      "Treating every recovered organism identically ignores colonization, chronic infection, resistance, and clinical relevance.",
      "Using previous cultures alongside the current clinical trajectory",
      "Checking whether the sample is sputum or an oropharyngeal swab",
      "Distinguishing Aspergillus sensitization or ABPA from a fungal culture alone"
    ],
    "rationale": "Treating all organisms identically ignores distinct infection states and treatment needs. Prior-culture review, specimen identification, and distinguishing allergic disease from fungal recovery are protective reasoning steps rather than hazards."
  },
  "cf-045": {
    "choices": [
      "New Pseudomonas acquisition should prompt an established eradication regimen and follow-up cultures.",
      "New Pseudomonas growth must first become chronic before eradication is considered",
      "A negative culture is an indication for routine antipseudomonal prophylaxis",
      "Improved symptoms after treatment prove microbiologic eradication without cultures"
    ],
    "rationale": "Initial or new growth supports prompt eradication and follow-up cultures. Waiting for chronic infection misses this opportunity, routine acquisition prophylaxis is discouraged, and symptoms cannot substitute for microbiologic reassessment."
  },
  "cf-046": {
    "choices": [
      "Begin a center protocol, commonly inhaled tobramycin, then document microbiologic response.",
      "Use inhaled corticosteroid alone to clear the organism",
      "Automatically begin indefinite IV aminoglycoside treatment",
      "Treat a negative surveillance culture with antipseudomonal prophylaxis"
    ],
    "rationale": "A CF-center eradication protocol, commonly tobramycin 300 mg twice daily for 28 days, addresses new growth and is followed by cultures. Corticosteroid alone does not eradicate Pseudomonas, indefinite IV therapy is not automatic, and prophylaxis for negative cultures is discouraged."
  },
  "cf-047": {
    "choices": [
      "Review first versus recurrent isolation, symptoms, prior antibiotics, inhaled technique, renal and auditory risk, cultures, and adherence.",
      "Review the first culture only and disregard any previous eradication attempts",
      "Review symptoms without assessing the nebulizer or treatment delivery",
      "Review the dose without considering hearing, renal risk, or follow-up cultures"
    ],
    "rationale": "New or recurrent isolation, prior treatment, delivery, toxicity risks, cultures, and adherence all inform eradication. The alternatives omit recurrence history, actual inhaled delivery, or the safety and microbiologic assessment needed to judge the course."
  },
  "cf-048": {
    "choices": [
      "Waiting until Pseudomonas becomes chronic reduces the opportunity for successful eradication.",
      "Starting an established protocol after new growth",
      "Obtaining cultures after the eradication course",
      "Checking whether the patient can complete the prescribed inhalations"
    ],
    "rationale": "Waiting for chronic infection delays the early eradication opportunity. Prompt protocol treatment, microbiologic follow-up, and checking actual delivery are appropriate safeguards rather than hazards."
  },
  "cf-049": {
    "choices": [
      "Inhaled antibiotic suppression uses high airway exposure through product-specific continuous or cyclic regimens.",
      "All inhaled antibiotic products use the same dose, device, and schedule",
      "Inhaled aminoglycosides cannot cause hearing or renal adverse effects",
      "Chronic suppression always replaces evaluation and treatment of an acute exacerbation"
    ],
    "rationale": "Suppression requires product-specific delivery and a prescribed cycle or specialist regimen. Doses and devices are not interchangeable, inhalation does not eliminate aminoglycoside toxicity risk, and acute deterioration still needs separate clinical evaluation."
  },
  "cf-050": {
    "choices": [
      "Match molecule, device, schedule, and cycling to chronic infection history, tolerance, response, and current labeling.",
      "Convert every product to a twice-daily schedule regardless of its label",
      "Use any available nebulizer because the molecule alone determines delivery",
      "Continue indefinitely without reviewing the cycle calendar or response"
    ],
    "rationale": "Match the product and delivery system to the chronic infection plan. CAYSTON is three times daily rather than twice daily, labeled devices matter, and unreviewed indefinite use ignores the prescribed cycle and outcomes."
  },
  "cf-051": {
    "choices": [
      "Review organism, exacerbations, lung function, dose cycle, device, bronchospasm, voice, renal and auditory status, resistance, and access.",
      "Review only whether a prescription was dispensed",
      "Review culture susceptibility while ignoring delivery and clinical response",
      "Review lung function while ignoring bronchospasm, hearing, renal risk, and access"
    ],
    "rationale": "Effective suppression depends on infection state, actual delivery, response, tolerability, and access. Dispensing does not establish administration; susceptibility alone misses response and implementation; lung function alone misses safety and the ability to obtain treatment."
  },
  "cf-052": {
    "choices": [
      "Treating inhaled tobramycin, aztreonam, and other products as schedule-interchangeable can create incorrect use.",
      "Keeping a product-specific treatment and off-cycle calendar",
      "Verifying the specified nebulizer and compressor",
      "Checking each product's dose spacing and missed-dose instructions"
    ],
    "rationale": "Assuming schedule interchangeability creates errors: inhaled tobramycin is twice daily with at least 6 hours between doses, whereas CAYSTON is three times daily with at least 4 hours. The other choices actively prevent such errors."
  },
  "cf-053": {
    "choices": [
      "Chronic azithromycin can reduce CF pulmonary exacerbations but must be coordinated with nontuberculous mycobacterial surveillance.",
      "Azithromycin is a substitute for all inhaled antipseudomonal suppression",
      "NTM screening is unnecessary when respiratory symptoms are stable",
      "Azithromycin alone is an appropriate regimen for confirmed NTM pulmonary disease"
    ],
    "rationale": "Chronic azithromycin can reduce CF exacerbations but requires NTM surveillance. It does not replace all inhaled therapy, stability does not remove screening recommendations, and macrolide monotherapy for NTM disease risks resistance."
  },
  "cf-054": {
    "choices": [
      "Screen for NTM before and during long-term use and withhold chronic azithromycin while a positive NTM culture is evaluated.",
      "Continue chronic azithromycin after a positive NTM culture until disease is definitively confirmed",
      "Use a routine oropharyngeal swab to exclude NTM disease",
      "Treat every positive NTM culture as confirmed disease and start macrolide monotherapy"
    ],
    "rationale": "Screening precedes and accompanies chronic treatment. Hold azithromycin after a positive NTM culture while disease is evaluated to avoid selecting resistance. Continuing until confirmation is too late for this safeguard, throat swabs are unsuitable for NTM screening, and culture positivity alone does not establish disease or justify monotherapy."
  },
  "cf-055": {
    "choices": [
      "Review NTM cultures, symptoms, imaging, QT, hearing, liver function, interactions, adherence, Pseudomonas, and exacerbations.",
      "Review Pseudomonas cultures alone and omit NTM evaluation",
      "Review respiratory benefit without QT, interaction, hearing, or hepatic assessment",
      "Review tolerability alone and assume positive NTM cultures require no action"
    ],
    "rationale": "NTM findings, pulmonary benefit, drug interactions, QT risk, hearing and hepatic status all affect continued azithromycin use. The alternatives omit NTM surveillance, medication safety, or the need to hold chronic azithromycin during a positive-culture evaluation."
  },
  "cf-056": {
    "choices": [
      "Macrolide monotherapy during unrecognized NTM disease can select macrolide resistance and compromise treatment.",
      "Withholding chronic azithromycin while a positive NTM culture is evaluated",
      "Using clinical, radiographic, and microbiologic criteria to assess NTM pulmonary disease",
      "Obtaining specialist input for an organism-specific multidrug regimen"
    ],
    "rationale": "Macrolide monotherapy during unrecognized NTM disease can select resistance and compromise treatment. Holding chronic azithromycin during evaluation, integrating diagnostic criteria, and obtaining specialist multidrug planning reduce this hazard."
  }
};
const infectionCases = [
  {
    "id": "cf-podhaler-cycle-supply",
    "question": "TOBI Podhaler is prescribed as four 28 mg capsules per dose, twice daily for a 28-day treatment period. How many capsules and how much nominal capsule drug content are required?",
    "choices": [
      "224 capsules containing 6,272 mg",
      "112 capsules containing 3,136 mg",
      "56 capsules containing 1,568 mg",
      "224 capsules containing 224 mg"
    ],
    "answer": 0,
    "rationale": "4 capsules per dose times 2 doses per day times 28 days equals 224 capsules. 224 times 28 mg equals 6,272 mg. 112 and 56 capsules cover only 14 and 7 days; 224 mg incorrectly treats each capsule as 1 mg. Capsule content does not measure lung deposition.",
    "reviewHref": "#cf-infection-exacerbations"
  },
  {
    "id": "cf-tobramycin-ampule-concentration",
    "question": "A CF prescription changes from TOBI 300 mg/5 mL to BETHKIS 300 mg/4 mL. Which dose and concentration statement is correct?",
    "choices": [
      "Both doses use the full ampule; TOBI is 60 mg/mL and BETHKIS is 75 mg/mL",
      "BETHKIS requires 5 mL because all inhaled tobramycin doses have that volume",
      "BETHKIS requires half the ampule because its concentration is higher",
      "Both concentrations are 300 mg/mL because the dose is 300 mg"
    ],
    "answer": 0,
    "rationale": "300 divided by 5 equals 60 mg/mL and 300 divided by 4 equals 75 mg/mL. Both full ampules provide 300 mg. Using 5 mL exceeds the BETHKIS ampule volume, half the ampule provides only 150 mg, and dose mass is not concentration. Verify the product-specific nebulizer and compressor as well.",
    "reviewHref": "#cf-infection-exacerbations"
  },
  {
    "id": "cf-cayston-missed-dose-spacing",
    "question": "A patient misses the 2 p.m. CAYSTON dose and remembers at 5 p.m.; the next dose is planned for 8 p.m. Which response respects the label if the CF team retains that next-dose time?",
    "choices": [
      "Skip the missed dose rather than giving doses only 3 hours apart",
      "Take the missed dose at 5 p.m. and the next at 8 p.m.",
      "Combine two vials into one 8 p.m. nebulizer dose",
      "Use the missed vial by intravenous injection"
    ],
    "answer": 0,
    "rationale": "5 p.m. to 8 p.m. is 3 hours, below CAYSTON's minimum 4-hour spacing. The label allows a missed dose only when the spacing requirement can be maintained. Combining vials is not the prescribed single dose, and CAYSTON is for inhalation through Altera, not injection. Ask the CF team about a revised schedule when needed.",
    "reviewHref": "#cf-infection-exacerbations"
  },
  {
    "id": "cf-ntm-positive-culture-hold",
    "question": "A clinically stable person taking chronic azithromycin has a new positive NTM sputum culture. NTM pulmonary disease has not yet been established. What is the appropriate immediate medication step?",
    "choices": [
      "Withhold chronic azithromycin while specialist evaluation for NTM pulmonary disease proceeds",
      "Continue azithromycin until all diagnostic criteria are fulfilled",
      "Treat the culture result as definite disease and use azithromycin alone",
      "Dismiss the result because the person feels stable"
    ],
    "answer": 0,
    "rationale": "CF Foundation guidance calls for withholding chronic azithromycin during a positive NTM culture evaluation to avoid resistance selection. Confirmation is not required before holding it, but culture positivity alone does not establish disease. Stability does not justify dismissal, and macrolide monotherapy is not the treatment for established disease.",
    "reviewHref": "#cf-infection-exacerbations"
  },
  {
    "id": "cf-bethkis-room-temperature-limit",
    "question": "Unexpired BETHKIS ampules stayed in their foil pouches at 24 degrees C for 29 days. They appear clear. What follows the product label?",
    "choices": [
      "Do not use: room-temperature storage has exceeded 28 days",
      "Use because the printed refrigerated expiration has not passed",
      "Use because clear solution overrides the storage limit",
      "Refrigerate overnight to restart the 28-day allowance"
    ],
    "answer": 0,
    "rationale": "24 degrees C is within the allowed temperature ceiling, but 29 days exceeds the 28-day duration. Refrigerated expiry and clear appearance do not override that limit, and returning the ampules to the refrigerator does not erase the previous exposure.",
    "reviewHref": "#cf-infection-exacerbations"
  }
];
const reviewedModulatorQuestions = {
  "cf-065": {
    "choices": [
      "Ivacaftor and deutivacaftor increase opening of responsive CFTR channels already present at the cell surface.",
      "They replace the need for CFTR protein at the cell surface",
      "They primarily improve intracellular folding rather than channel opening",
      "They guarantee equal clinical benefit for every CFTR mutation"
    ],
    "rationale": "Potentiators improve gating of responsive surface channels. They need protein at the surface; processing and trafficking are primarily corrector roles; variant responsiveness and clinical benefit cannot be assumed identical."
  },
  "cf-066": {
    "choices": [
      "Use only for an eligible genotype within current age, formulation, food, interaction, and monitoring requirements.",
      "Use the same dose for every age because the target is identical",
      "Use ivacaftor alone for every genotype with impaired CFTR processing",
      "Ignore CYP3A inhibitors when the patient takes the drug with fat"
    ],
    "rationale": "Eligibility and the exact regimen matter. Age and weight can change the formulation or dose; monotherapy cannot rescue every processing defect; fat-containing food does not cancel CYP3A inhibition."
  },
  "cf-067": {
    "choices": [
      "Review responsive variant, age, weight, product, fat-containing food, CYP3A drugs, liver tests, eye examination, and adherence.",
      "Review only the variant name, omitting age and formulation",
      "Review food and adherence but disregard CYP3A drugs and liver tests",
      "Review symptoms alone and omit recommended pediatric eye examinations"
    ],
    "rationale": "The broad assessment addresses responsiveness, formulation, exposure, safety, and implementation. The alternatives omit dose eligibility, interaction and hepatic risk, or scheduled eye surveillance. A responsive-variant assessment for potentiator therapy is not a claim that every combination uses the same eligibility list."
  },
  "cf-068": {
    "choices": [
      "Potentiator monotherapy cannot correct every processing mutation or justify off-label genotype assumptions.",
      "Checking whether the channel is responsive to the specific product",
      "Checking the pediatric formulation and weight before dispensing",
      "Scheduling the recommended liver and eye monitoring"
    ],
    "rationale": "Assuming monotherapy can rescue every processing mutation is the hazard. Verifying product responsiveness, formulation, and surveillance are safeguards. Surface protein is needed for potentiation, and label eligibility remains product specific."
  },
  "cf-069": {
    "choices": [
      "Correctors improve processing and trafficking of selected mutant CFTR, while a potentiator improves channel activity.",
      "Correctors and potentiators have identical molecular roles",
      "Every corrector repairs every CFTR variant",
      "A combination eliminates the requirement for CFTR protein production"
    ],
    "rationale": "Correctors improve processing and trafficking of selected protein, while potentiators improve its surface-channel activity. Their roles are distinct, rescue is not universal, and availability of CFTR protein still matters."
  },
  "cf-070": {
    "choices": [
      "Verify the exact fixed combination and prevent duplicate or incomplete ingredients during transitions.",
      "Retain the old separate ivacaftor prescription automatically after switching",
      "Substitute any shared-ingredient combination tablet for the prescribed strength",
      "Add a second complete modulator regimen to supply one missing component"
    ],
    "rationale": "Review the complete fixed regimen during transitions. Automatic retained ivacaftor can duplicate exposure; shared ingredients do not establish strength or schedule equivalence; combining complete regimens is not an appropriate way to replace a missing component."
  },
  "cf-071": {
    "choices": [
      "Review genotype, prior product, component list, age, weight, morning and evening schedule, food, interaction, liver tests, and supply.",
      "Review only the brand name and omit both daily components",
      "Review the genotype but disregard weight, strength, and interaction changes",
      "Review laboratory tests while omitting the ability to obtain the full regimen"
    ],
    "rationale": "The comprehensive assessment connects eligibility, components, dosing, exposure, safety, and supply. A brand-only review misses daily components; genotype alone does not determine dose or interactions; laboratory review does not establish access to the prescribed regimen. Alyftrek has one daily dose and no separate evening ivacaftor."
  },
  "cf-072": {
    "choices": [
      "Combining separate modulator products without specialist direction can duplicate ivacaftor or produce an unstudied regimen.",
      "Verifying the full component list during a switch",
      "Documenting a specialist-directed stop-and-start plan",
      "Checking the prescribed tablet strength and complete daily schedule"
    ],
    "rationale": "Uncoordinated mixing can duplicate ivacaftor or create an unstudied regimen. Component verification, an explicit transition plan, and strength and schedule checks prevent that hazard rather than causing it."
  },
  "cf-073": {
    "choices": [
      "Food fat supports absorption, while CYP3A inhibitors and inducers can substantially change modulator exposure.",
      "Fat-containing food makes CYP3A inhibition clinically irrelevant",
      "Every product has the same inhibitor dose adjustment",
      "All products respond identically to moderate CYP3A induction"
    ],
    "rationale": "Food and CYP3A both affect exposure. Food does not neutralize inhibition; dose schedules differ substantially among products; Alyftrek advises against moderate induction, whereas Orkambi specifies no adjustment for moderate or weak inducers."
  },
  "cf-074": {
    "choices": [
      "Teach the product-specific meal and dose modification and avoid strong or moderate inducers when labeling advises against use.",
      "Give every product the same once-weekly inhibitor regimen",
      "Apply the Trikafta missed-morning-dose rule to Alyftrek",
      "Reduce established Orkambi automatically whenever a CYP3A inhibitor is added"
    ],
    "rationale": "Product-specific instructions prevent exposure errors. Once-weekly dosing is not universal, Alyftrek skips a dose more than 6 hours late while Trikafta has a distinct morning rule, and established Orkambi does not require an automatic reduction when an inhibitor is added."
  },
  "cf-075": {
    "choices": [
      "Review diet, missed doses, azoles, macrolides, rifamycins, anticonvulsants, herbals, grapefruit, liver status, and interaction plan.",
      "Review azoles only and omit rifamycins and herbals",
      "Review food alone because missed doses and liver function do not affect exposure",
      "Review only drugs started before the modulator and ignore later prescriptions"
    ],
    "rationale": "The complete review covers administration and medicines that change exposure, including new drugs. Azoles alone miss inducers and herbals; food alone misses timing and hepatic effects; later prescriptions can create clinically important interactions."
  },
  "cf-076": {
    "choices": [
      "Ignoring a new rifampin prescription can reduce modulator exposure and clinical benefit.",
      "Reconciling newly prescribed rifampin before coadministration",
      "Checking whether a new azole requires the exact label adjustment",
      "Reviewing grapefruit and herbal supplements at follow-up"
    ],
    "rationale": "Ignoring rifampin can lower exposure and effectiveness; strong induction is not recommended with these products. Reconciling rifampin, checking azole adjustments, and reviewing grapefruit or herbals are protective actions."
  },
  "cf-077": {
    "choices": [
      "Current triple-modulator labels require baseline and scheduled ALT, AST, alkaline phosphatase, and bilirubin monitoring for serious liver injury risk.",
      "Normal baseline tests eliminate the need for later monitoring",
      "ALT and AST alone fulfill the current triple-product monitoring requirements",
      "All five products require only annual testing from treatment initiation"
    ],
    "rationale": "Trikafta and Alyftrek require all four listed tests at baseline and at scheduled intervals. Normal baseline results do not remove surveillance, transaminases alone omit alkaline phosphatase and bilirubin, and annual-only monitoring misses required early testing."
  },
  "cf-078": {
    "choices": [
      "Follow the exact product schedule, interrupt for significant abnormalities or symptoms, and reassess benefit before any restart.",
      "Continue until bilirubin rises even when ALT is above 5 times normal",
      "Restart automatically at the next scheduled dose after a significant elevation",
      "Substitute a lower chronic hepatic dose for assessment of new liver injury"
    ],
    "rationale": "Follow the exact interruption and restart criteria. ALT or AST above 5 times normal is sufficient for interruption without elevated bilirubin; restart follows resolution and a benefit-risk decision; chronic hepatic dose adjustment does not replace evaluation of new injury."
  },
  "cf-079": {
    "choices": [
      "Review baseline liver disease, all four tests, symptoms, alcohol, hepatotoxic drugs, trend, timing, interruption criteria, and specialist input.",
      "Review only a single ALT value without symptoms or a trend",
      "Review bilirubin alone and assume normal bilirubin excludes liver injury",
      "Review the prescription dose while omitting baseline disease and hepatotoxic drugs"
    ],
    "rationale": "The listed broad assessment supports liver-risk evaluation, especially for Trikafta and Alyftrek, which require all four tests. One isolated ALT omits context; normal bilirubin does not exclude significant transaminase injury; dose review alone misses prior disease and other hepatotoxic exposures. Older products have their own required test panels and schedules."
  },
  "cf-080": {
    "choices": [
      "Checking transaminases alone can miss cholestatic or bilirubin evidence included in current monitoring requirements.",
      "Obtaining all four required tests for Trikafta or Alyftrek",
      "Reviewing jaundice, abdominal symptoms, and laboratory trends",
      "Following the product-specific interruption and restart criteria"
    ],
    "rationale": "Transaminases alone do not complete current Trikafta or Alyftrek monitoring because alkaline phosphatase and bilirubin are also required. The other choices provide the missing panel, clinical context, or appropriate action. This does not assert an identical mandatory panel for every older product."
  },
  "cf-081": {
    "choices": [
      "Ivacaftor-containing therapy carries a recommendation for baseline and follow-up ophthalmologic examinations in pediatric patients.",
      "Eye examinations are needed only after visual symptoms begin",
      "Normal baseline vision eliminates the need for follow-up",
      "Pediatric lens-opacity precautions apply only to monotherapy"
    ],
    "rationale": "Baseline and follow-up examinations are recommended for pediatric ivacaftor-containing regimens. Waiting for symptoms, stopping follow-up after a normal baseline, or limiting surveillance to monotherapy misses the label recommendations. Alyftrek, which contains deutivacaftor, also recommends pediatric examinations."
  },
  "cf-082": {
    "choices": [
      "Arrange baseline and follow-up ophthalmologic examinations for pediatric patients receiving the exact modulator product.",
      "Wait for reported blurred vision before arranging any examination",
      "Use liver tests in place of a baseline lens examination",
      "Assume the recommendation disappears when ivacaftor is part of a combination"
    ],
    "rationale": "Arrange the recommended baseline and follow-up pediatric ophthalmologic examinations for the exact product. Symptom-only surveillance can miss lens findings, liver tests do not examine lenses, and combination therapy retains the recommendation."
  },
  "cf-083": {
    "choices": [
      "Review age, product, baseline examination, lens findings, visual symptoms, follow-up date, corticosteroid exposure, and access.",
      "Review only whether the patient currently reports normal vision",
      "Review age and product but omit baseline findings and the follow-up date",
      "Review the examination date but disregard new visual symptoms or access barriers"
    ],
    "rationale": "The complete review connects recommended surveillance with lens findings, symptoms, additional risk factors, and access. Reported normal vision cannot replace examination, a product review alone misses follow-up, and a date alone does not assess symptoms or the ability to attend."
  },
  "cf-084": {
    "choices": [
      "Assuming absence of visual symptoms excludes lens opacity can miss an asymptomatic finding.",
      "Obtaining an examination despite no reported visual symptoms",
      "Documenting baseline lens findings and the follow-up plan",
      "Promptly assessing a new unusual headache with double vision"
    ],
    "rationale": "Assuming no symptoms means no lens opacity is unsafe; examinations can detect asymptomatic findings. Examination and follow-up are safeguards. New unusual headache with double vision needs prompt assessment for intracranial hypertension rather than dismissal as routine lens surveillance."
  }
};
const modulatorCases = [
  {
    "id": "cf-alyftrek-weight-supply",
    "question": "An eligible 8-year-old weighing 39 kg receives standard Alyftrek with no hepatic or CYP3A modification. Which regimen and 28-day supply are correct?",
    "choices": [
      "Three 4/20/50 mg tablets once daily; 84 tablets",
      "Two 10/50/125 mg tablets once daily; 56 tablets",
      "Three 4/20/50 mg tablets twice daily; 168 tablets",
      "One 4/20/50 mg tablet daily; 28 tablets"
    ],
    "answer": 0,
    "rationale": "Below 40 kg at ages 6 to less than 12, three lower-strength tablets total 12/60/150 mg once daily; 3 times 28 equals 84 tablets. Two higher-strength tablets are the standard regimen at 40 kg or above, twice-daily dosing doubles the intended frequency, and one lower-strength tablet is incomplete. Give with fat-containing food.",
    "reviewHref": "#cftr-modulators"
  },
  {
    "id": "cf-trikafta-thirty-kg-boundary",
    "question": "An eligible 8-year-old weighs exactly 30 kg and takes standard Trikafta without hepatic or CYP3A modification. What is the complete regimen?",
    "choices": [
      "Two 100/50/75 mg combination tablets each morning and ivacaftor 150 mg each evening",
      "Two 50/25/37.5 mg combination tablets each morning and ivacaftor 75 mg each evening",
      "Two 100/50/75 mg combination tablets each morning without any evening dose",
      "One 100/50/75 mg combination tablet morning and evening"
    ],
    "answer": 0,
    "rationale": "Exactly 30 kg belongs to the at-least-30-kg group: the two morning tablets total 200/100/150 mg, followed by 150 mg ivacaftor about 12 hours later, both with fat-containing food. The lower-strength regimen is for below 30 kg, omitting evening ivacaftor is not the standard regimen, and using a combination tablet in the evening changes components and dosing.",
    "reviewHref": "#cftr-modulators"
  },
  {
    "id": "cf-alyftrek-strong-inhibitor",
    "question": "An adult taking Alyftrek needs a strong CYP3A inhibitor. No hepatic impairment is present, and the CF team follows the current label adjustment. Which Alyftrek regimen applies?",
    "choices": [
      "One 10/50/125 mg tablet once weekly",
      "Two 10/50/125 mg tablets twice weekly",
      "Two 10/50/125 mg tablets every day",
      "One 10/50/125 mg tablet every other day"
    ],
    "answer": 0,
    "rationale": "Adult Alyftrek with strong CYP3A inhibition uses one higher-strength tablet once weekly. Twice-weekly two-tablet dosing copies another product schedule; the usual daily two-tablet regimen fails to adjust exposure; every-other-day one-tablet dosing is the Alyftrek moderate-inhibitor schedule. Give the adjusted dose with fat-containing food.",
    "reviewHref": "#cftr-modulators"
  },
  {
    "id": "cf-modulator-seven-hour-missed-morning",
    "question": "Patients on standard Trikafta and standard Alyftrek each miss an 8 a.m. dose and remember at 3 p.m. No interaction or hepatic adjustment applies. Which product-specific counseling is correct?",
    "choices": [
      "Take the missed Trikafta morning dose and omit its evening ivacaftor; skip the missed Alyftrek dose",
      "Skip both doses because they are more than 6 hours late",
      "Take both missed doses and all originally scheduled later doses",
      "Take Trikafta morning and evening components together at 3 p.m."
    ],
    "answer": 0,
    "rationale": "3 p.m. minus 8 a.m. is 7 hours. More than 6 hours after a missed Trikafta morning dose, take it and omit evening ivacaftor, then resume next morning. Alyftrek instead skips that missed dose and resumes the next day. Skipping both misapplies the Alyftrek rule, taking all later doses ignores the Trikafta evening omission, and combining morning and evening Trikafta is prohibited.",
    "reviewHref": "#cftr-modulators"
  },
  {
    "id": "cf-trikafta-alt-interruption",
    "question": "A person taking Trikafta has ALT at 6 times the upper limit of normal and normal bilirubin. Which medication response follows the liver-safety warning?",
    "choices": [
      "Interrupt Trikafta and promptly assess and follow liver tests; reassess benefit and risk before any restart",
      "Continue unchanged until bilirubin is above 2 times normal",
      "Continue unchanged because the person has no jaundice",
      "Restart automatically the next morning after skipping one evening dose"
    ],
    "answer": 0,
    "rationale": "ALT or AST above 5 times normal is sufficient for interruption, even without elevated bilirubin or jaundice. The separate above-3-times threshold with bilirubin above 2 times does not negate that rule. Assess, follow resolution, and make an individual benefit-risk restart decision; an automatic one-dose pause is insufficient.",
    "reviewHref": "#cftr-modulators"
  },
  {
    "id": "cf-orkambi-contraception-interaction",
    "question": "A person taking established Orkambi relies on a hormonal contraceptive implant. Which interaction counseling is supported?",
    "choices": [
      "Do not rely on the hormonal implant for effective contraception with Orkambi; arrange an appropriate alternative with the team",
      "An implant is unaffected because it is not an oral contraceptive",
      "Fat-containing food prevents the interaction",
      "The warning necessarily means Symdeko and Trikafta also reduce hormonal-contraceptive efficacy"
    ],
    "answer": 0,
    "rationale": "Lumacaftor induction can reduce hormonal-contraceptive exposure; the Orkambi warning includes implants as well as oral, injectable, and transdermal methods. Route and food do not remove the interaction. Symdeko and Trikafta labeling do not expect reduced hormonal-contraceptive efficacy, so do not transfer this product-specific warning automatically.",
    "reviewHref": "#cftr-modulators"
  },
  {
    "id": "cf-kalydeco-young-infant-inhibitor",
    "question": "An otherwise eligible 5-month-old receives Kalydeco and is newly prescribed a moderate CYP3A inhibitor. Which conclusion follows the current label?",
    "choices": [
      "Concomitant moderate CYP3A inhibition is not recommended below 6 months; obtain a specialist medication plan",
      "Reduce Kalydeco to once daily by copying the older-child adjustment automatically",
      "Keep the same dose because fat-containing food cancels inhibition",
      "Switch automatically to adult tablet strength twice weekly"
    ],
    "answer": 0,
    "rationale": "Kalydeco below 6 months is not recommended with moderate or strong CYP3A inhibitors. The once-daily modification applies from 6 months, food does not cancel increased exposure, and an adult tablet regimen does not apply to this infant. Arrange product-specific specialist review rather than inventing a dose.",
    "reviewHref": "#cftr-modulators"
  },
  {
    "id": "cf-modulator-headache-diplopia",
    "question": "A patient taking a CFTR modulator reports a new unusual headache and double vision. Which response follows the current intracranial-hypertension precaution?",
    "choices": [
      "If intracranial hypertension is suspected, interrupt the product and arrange prompt medical evaluation",
      "Wait until the next routine pediatric cataract examination",
      "Dismiss the symptoms because baseline eye examination was normal",
      "Increase vitamin A empirically and continue treatment unchanged"
    ],
    "answer": 0,
    "rationale": "Unusual headache with diplopia warrants prompt evaluation for intracranial hypertension. The labels call for interruption when suspected and follow-up for resolution and recurrence. Routine lens surveillance is not an adequate response, a normal baseline examination does not exclude a new event, and elevated vitamin A can increase risk rather than justify empirical supplementation.",
    "reviewHref": "#cftr-modulators"
  }
];
export const cysticFibrosisQuestionBank = [...originalCysticFibrosisQuestionBank.map((question) => ({ ...question, ...(sourceReviewedEnzymeSafetyQuestions[question.id] || {}), ...(reviewedNutritionSystemicQuestions[question.id] || {}), ...(reviewedDiagnosisAirwayPulmonaryQuestions[question.id] || {}), ...(reviewedInfectionQuestions[question.id] || {}), ...(reviewedModulatorQuestions[question.id] || {}) })), ...nutritionSystemicCases, ...diagnosisAirwayPulmonaryCases, ...infectionCases, ...modulatorCases];
