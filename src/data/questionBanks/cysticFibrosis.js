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
export const cysticFibrosisQuestionBank = [...originalCysticFibrosisQuestionBank.map((question) => ({ ...question, ...(sourceReviewedEnzymeSafetyQuestions[question.id] || {}), ...(reviewedNutritionSystemicQuestions[question.id] || {}), ...(reviewedDiagnosisAirwayPulmonaryQuestions[question.id] || {}) })), ...nutritionSystemicCases, ...diagnosisAirwayPulmonaryCases];
