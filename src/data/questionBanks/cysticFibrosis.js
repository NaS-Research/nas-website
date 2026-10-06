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
export const cysticFibrosisQuestionBank = [...originalCysticFibrosisQuestionBank.map((question) => ({ ...question, ...(sourceReviewedEnzymeSafetyQuestions[question.id] || {}), ...(reviewedNutritionSystemicQuestions[question.id] || {}) })), ...nutritionSystemicCases];
