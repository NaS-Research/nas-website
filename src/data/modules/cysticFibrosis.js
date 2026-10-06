import { cysticFibrosisQuestionBank } from "@/data/questionBanks/cysticFibrosis";

export const cysticFibrosisModule = {
  slug: "cystic-fibrosis", number: "56", title: "Cystic Fibrosis",
  cumulativeQuestionIds: ["cf-001", "cf-031", "cf-061", "cf-090", "cf-120"],
  source: "Complete cystic fibrosis chapter, Cystic Fibrosis Foundation guidance, and current US labeling",
  description: "Connect CFTR dysfunction to disease across the airway, pancreas, intestine, liver, endocrine system, and reproductive tract, then coordinate airway clearance, infection treatment, genotype-directed modulators, nutrition, and longitudinal safety.",
  topics: ["CFTR biology and diagnosis", "Airway clearance", "Pulmonary assessment", "Respiratory infection", "CFTR modulators", "Nutrition and GI care", "Systemic complications", "Advanced care"],
  outcomes: [
    "Explain how CFTR genotype and protein dysfunction alter chloride, bicarbonate, airway hydration, and organ physiology.",
    "Interpret newborn screening, sweat chloride, genetic testing, clinical phenotype, and inconclusive diagnostic states.",
    "Build an individualized airway-clearance and chronic pulmonary regimen with correct sequencing and device care.",
    "Interpret symptoms, spirometry, oxygenation, imaging, and longitudinal baseline to identify pulmonary deterioration and evaluate recovery.",
    "Use respiratory cultures, prior susceptibility, clinical trajectory, and infection history to guide eradication, suppression, and exacerbation treatment.",
    "Select and monitor a CFTR modulator using genotype, age, weight, product, food, interactions, hepatic status, and current labeling.",
    "Integrate pancreatic enzymes, nutrition, vitamins, diabetes screening, bone and liver health, reproductive care, and advanced-lung-disease planning.",
  ],
  submodules: [
    {
      slug:"cf-biology-diagnosis",title:"CFTR Biology, Genotype, and Diagnosis",visual:"cf-biology",
      summary:"Cystic fibrosis requires a compatible clinical context and objective evidence of CFTR dysfunction. Genotype helps explain mechanism and treatment eligibility but does not replace phenotype.",
      concepts:["CFTR channel function","Mutation classes and protein fate","Newborn screening","Sweat chloride","Genotype and functional testing"],
      application:"Establish the diagnostic context, verify sweat-test quality, interpret two disease-causing variants when present, and refer uncertain states to an accredited CF center rather than forcing a binary label.",
      lesson:[
        {heading:"Trace the ion and water defect",body:"CFTR is an epithelial anion channel and regulator that conducts chloride and bicarbonate. Reduced function dehydrates airway surface liquid, impairs mucociliary clearance, acidifies secretions, and changes sodium and water movement. The same defect contributes to pancreatic duct obstruction, intestinal disease, concentrated sweat, hepatobiliary disease, and reproductive tract abnormalities."},
        {heading:"Connect mutation to protein behavior",body:"Variants can reduce synthesis, processing, channel gating, conductance, quantity, or stability. F508del produces a major folding and trafficking defect plus reduced surface stability. Correctors improve folding and delivery of selected mutant protein, while potentiators increase channel opening at the cell surface. A functional classification helps explain pharmacology, but eligibility follows current product-specific responsive-variant labeling."},
        {heading:"Use screening to begin, not end, diagnosis",body:"Newborn immunoreactive trypsinogen screening identifies risk, not the final diagnosis. Confirm through a certified sweat test, CFTR genetic analysis, clinical evaluation, and additional functional testing when needed. Symptoms can include recurrent sinopulmonary disease, bronchiectasis, meconium ileus, malabsorption, pancreatitis, salt-loss syndromes, infertility, or a family history."},
        {heading:"Interpret sweat chloride in context",body:"Sweat chloride at least 60 mmol per L supports CF in the appropriate setting. Values from 30 through 59 require repeat testing and extended evaluation. A result below 30 makes CF less likely but does not absolutely exclude it when genotype or phenotype remains compelling. Quantity-not-sufficient samples require recollection, not estimation."},
      ],
      keyPoints:["Screening is not diagnosis.","Sweat testing remains central.","Intermediate results need structured follow-up.","Product labeling defines modulator eligibility."],
      check:{question:"What does a positive newborn CF screen establish?",choices:["The need for confirmatory diagnostic evaluation","A definitive CF diagnosis by itself","Automatic eligibility for every CFTR modulator","The presence of two disease-causing CFTR variants"],answer:0,rationale:"Newborn screening identifies risk and must be followed by diagnostic testing.",reviewHref:"#cf-biology-diagnosis"},
    },
    {
      slug:"cf-airway-clearance",title:"Airway Clearance and Chronic Pulmonary Therapy",visual:"cf-airway",
      summary:"Airway care combines physical clearance, hydration of secretions, mucus degradation, exercise, inhaled delivery, equipment hygiene, and a sequence the patient can sustain.",
      concepts:["Individualized airway clearance","Bronchodilator role","Hypertonic saline","Dornase alfa","Treatment order and equipment"],
      application:"Observe the entire routine, identify the purpose of every step, match technique to age and ability, and simplify burden without silently removing effective treatment.",
      lesson:[
        {heading:"Make airway clearance individualized and active",body:"Positive expiratory pressure, oscillatory PEP, chest-wall oscillation, active-cycle breathing, autogenic drainage, percussion, and other methods mobilize secretions. No single method is universally superior. Technique, age, preference, sputum burden, lung function, adherence, and response determine the best plan. Aerobic exercise complements but does not automatically replace prescribed clearance."},
        {heading:"Hydrate and depolymerize secretions",body:"Inhaled hypertonic saline increases airway surface hydration and can provoke bronchospasm, cough, or salt taste, so a bronchodilator and tolerance assessment may be appropriate. Dornase alfa cleaves extracellular DNA from neutrophils and reduces mucus viscosity. It should not be mixed with other nebulized drugs unless compatibility is established."},
        {heading:"Sequence inhaled therapy deliberately",body:"A common individualized sequence is bronchodilator when indicated, hypertonic saline with airway clearance, then dornase alfa according to its schedule, followed by inhaled antibiotic after secretions have been mobilized. The exact timing follows the patient's center plan and product instructions. Inhaled corticosteroids are not routine CF therapy without asthma or ABPA."},
        {heading:"Treat the device as part of the dose",body:"Nebulizer system, particle delivery, cleaning, disinfection, drying, replacement, electrical supply, and separation of equipment affect treatment. Verify preparation, storage, breath pattern, dose completion, and time burden. Escalating medication before correcting a failing device preserves inadequate delivery."},
      ],
      keyPoints:["Airway clearance is individualized.","Dornase targets extracellular DNA.","Hypertonic saline hydrates secretions.","Inhaled antibiotics generally follow clearance."],
      check:{question:"Why is dornase alfa useful in CF airway disease?",choices:["It cleaves extracellular DNA that contributes to mucus viscosity","It directly corrects every CFTR mutation","It replaces pancreatic enzymes","It eradicates all airway bacteria"],answer:0,rationale:"Neutrophil-derived extracellular DNA is an important contributor to thick CF sputum.",reviewHref:"#cf-airway-clearance"},
    },
    {
      slug:"cf-pulmonary-assessment",title:"Pulmonary Assessment and Exacerbation Recovery",visual:"cf-pulmonary",
      summary:"Pulmonary decisions begin with the patient's own baseline. Symptoms, spirometry, oxygenation, microbiology, treatment implementation, and recovery trajectory determine urgency and response.",
      concepts:["Personal pulmonary baseline","Spirometry and oxygenation","Exacerbation recognition","Antibiotic pharmacokinetics","Recovery and prevention"],
      application:"Define the patient's stable baseline, recognize a meaningful change, select the care setting and treatment intensity, then document recovery rather than stopping when symptoms merely begin to improve.",
      lesson:[
        {heading:"Build a longitudinal pulmonary baseline",body:"Track cough, sputum, exercise tolerance, sleep, appetite, weight, oxygenation, FEV1, imaging, culture history, exacerbations, treatment burden, and adherence over time. A value that appears acceptable in isolation can represent important decline for a patient whose prior function was higher."},
        {heading:"Recognize deterioration as a pattern",body:"Increased cough or sputum, dyspnea, fatigue, fever, appetite or weight loss, hemoptysis, oxygen change, new examination findings, and falling spirometry can signal a pulmonary exacerbation. Consider viral illness, asthma, allergic bronchopulmonary aspergillosis, pneumothorax, bleeding, pulmonary embolism, heart disease, and treatment interruption when the pattern is atypical."},
        {heading:"Match treatment intensity to severity",body:"Select outpatient, inpatient, oral, inhaled, or intravenous treatment from severity, physiology, prior organisms, resistance, allergies, previous clinical response, organ function, access, and ability to deliver therapy. Increase airway clearance during exacerbation when safe. Aminoglycosides and other high-risk agents require individualized exposure and toxicity monitoring."},
        {heading:"Measure recovery and prevent the next event",body:"Reassess symptoms, weight, oxygen, spirometry, adverse effects, microbiology when useful, and return toward the patient's prior baseline. Failure to recover should trigger evaluation of organism coverage, delivery, adherence, complications, alternate diagnoses, and advanced lung disease. Complete the episode with an updated prevention and home-action plan."},
      ],
      keyPoints:["The patient's own baseline defines decline.","Exacerbation is a multidomain clinical pattern.","Antibiotic plans use longitudinal microbiology.","Recovery must be measured."],
      check:{question:"What is the best way to judge recovery from a CF pulmonary exacerbation?",choices:["Compare symptoms, oxygenation, weight, and spirometry with the patient's prior baseline","Stop assessment when fever resolves","Use one susceptibility report without clinical response","Assume every decline is bacterial infection"],answer:0,rationale:"Recovery is multidimensional and should be measured against the patient's established baseline.",reviewHref:"#cf-pulmonary-assessment"},
    },
    {
      slug:"cf-infection-exacerbations",title:"Airway Microbiology and Antimicrobial Strategy",visual:"cf-infection",
      summary:"CF airway infection changes across age and time. Culture history and clinical response guide eradication, chronic suppression, and acute treatment more reliably than one isolated susceptibility report.",
      concepts:["Culture surveillance","Initial Pseudomonas eradication","Chronic inhaled antibiotics","Azithromycin and NTM safety","Pulmonary exacerbations"],
      application:"Compare current symptoms and lung function with baseline, retrieve the longitudinal microbiology record, distinguish new acquisition from chronic infection, and design a culture-informed plan with a response checkpoint.",
      lesson:[
        {heading:"Read microbiology longitudinally",body:"Staphylococcus aureus, Haemophilus influenzae, Pseudomonas aeruginosa, Burkholderia cepacia complex, Achromobacter, Stenotrophomonas, fungi, and nontuberculous mycobacteria can have different implications. Oropharyngeal, sputum, induced, or bronchoscopy samples have different strengths. Trend organism, density, phenotype, susceptibility, symptoms, imaging, and lung function."},
        {heading:"Eradicate new Pseudomonas promptly",body:"Newly acquired Pseudomonas generally triggers an eradication protocol, commonly inhaled tobramycin under center guidance. Routine prophylactic antipseudomonal antibiotic use in culture-negative patients is not the same strategy. Confirm follow-up cultures and avoid declaring eradication solely because symptoms improve."},
        {heading:"Suppress chronic infection by route and cycle",body:"Inhaled tobramycin, aztreonam lysine, and other center-directed regimens deliver high airway exposure for chronic Pseudomonas, with product-specific continuous or cyclic schedules. Monitor bronchospasm, voice change, resistance, renal and auditory risk when systemic aminoglycoside exposure occurs, technique, equipment, and adherence. Azithromycin can reduce exacerbations but requires NTM screening and should be withheld with active NTM disease."},
        {heading:"Treat each organism in clinical context",body:"Methicillin-resistant Staphylococcus aureus, Burkholderia cepacia complex, Achromobacter, Stenotrophomonas, fungi, and nontuberculous mycobacteria require organism-specific interpretation and specialist input. Distinguish acquisition, chronic infection, colonization, allergic disease, and invasive disease. Antibiotic choice must preserve future options while treating the current clinical problem."},
      ],
      keyPoints:["One culture is not the whole infection history.","New Pseudomonas prompts eradication.","Inhaled antibiotics require product-specific cycling.","Azithromycin requires NTM awareness."],
      check:{question:"What is an appropriate response to a new Pseudomonas aeruginosa airway acquisition in CF?",choices:["Begin an established eradication protocol and obtain follow-up cultures","Wait for chronic infection before treating","Start lifelong systemic aminoglycoside therapy automatically","Use an inhaled corticosteroid as eradication therapy"],answer:0,rationale:"Early eradication aims to prevent establishment of chronic Pseudomonas infection.",reviewHref:"#cf-infection-exacerbations"},
    },
    {
      slug:"cftr-modulators",title:"CFTR Modulator Pharmacology and Safety",visual:"cf-modulators",
      summary:"Modulators act on mutant CFTR protein rather than downstream mucus alone. Product choice is inseparable from genotype, age, weight, formulation, food, interactions, liver monitoring, and current labeling.",
      concepts:["Potentiators and correctors","Ivacaftor-responsive variants","Elexacaftor combinations","Vanzacaftor combination","CYP3A and hepatic safety"],
      application:"Verify the exact genotype and product eligibility, prescribe the age and weight formulation, teach fat-containing food and missed-dose rules, reconcile CYP3A drugs and grapefruit, and schedule current-label laboratory monitoring.",
      lesson:[
        {heading:"Match molecular strategy to available protein",body:"Ivacaftor potentiates responsive CFTR channels at the cell surface. Tezacaftor, elexacaftor, lumacaftor, and vanzacaftor are correctors that improve processing and trafficking for selected mutant protein. Deutivacaftor is a potentiator engineered for prolonged exposure. Combination corrector and potentiator therapy addresses more than one defect."},
        {heading:"Use genotype, age, weight, and formulation",body:"Ivacaftor treats patients with at least one responsive variant under its current label. Elexacaftor, tezacaftor, and ivacaftor has broad F508del and other responsive-variant use with age and weight products. Vanzacaftor, tezacaftor, and deutivacaftor is a once-daily option for eligible patients age 6 years and older. Never infer interchangeability from shared ingredients."},
        {heading:"Control exposure through food and interactions",body:"Administer labeled modulators with fat-containing food to support absorption. Strong or moderate CYP3A inhibitors require product-specific dose modification. Strong or moderate CYP3A inducers can reduce exposure and are generally not recommended. Review rifamycins, anticonvulsants, azoles, macrolides, herbals, grapefruit, hepatic function, and the exact missed-dose instructions."},
        {heading:"Respect current liver, neurologic, mental-health, and eye safety",body:"Current Alyftrek and Trikafta labeling includes prominent drug-induced liver injury and liver failure warnings and scheduled ALT, AST, alkaline phosphatase, and bilirubin monitoring. Current ivacaftor-containing labels also warn about intracranial hypertension. Unusual headache, blurred or double vision, vision loss, nausea, or vomiting requires prompt evaluation. Alyftrek labeling includes serious mental-health events, so new or worsening anxiety, depression, suicidal thoughts, behavior changes, or sleep disturbance requires immediate clinical review. Pediatric patients require baseline and follow-up ophthalmologic examinations for lens opacities."},
      ],
      keyPoints:["Genotype controls eligibility.","Correctors and potentiators have different jobs.","Fat-containing food and CYP3A matter.","Current labels require active liver monitoring."],
      check:{question:"What is the primary role of a CFTR corrector?",choices:["Improve folding and trafficking of selected mutant CFTR protein","Directly digest extracellular airway DNA","Replace pancreatic lipase","Eradicate Pseudomonas"],answer:0,rationale:"Correctors increase the amount of selected mutant CFTR protein reaching the cell surface.",reviewHref:"#cftr-modulators"},
    },
    {
      "slug": "cf-nutrition-gi-endocrine",
      "title": "Pancreatic, Nutritional, GI, and Endocrine Care",
      "visual": "cf-nutrition",
      "summary": "Nutrition is a clinical outcome and treatment domain. Pancreatic insufficiency, malabsorption, salt loss, GI disease, CF-related diabetes, and bone disease require coordinated surveillance.",
      "concepts": [
        "Pancreatic insufficiency",
        "PERT exposure calculations",
        "Continuous feeding and enzyme delivery",
        "Vitamins and modulator-era nutrition",
        "CFRD and GI surveillance"
      ],
      "application": "Assess growth or weight trajectory, stool and abdominal symptoms, enzyme timing and units, food pattern, vitamins, glucose, liver and bone health, then correct the limiting mechanism rather than escalating calories alone.",
      "lesson": [
        {
          "heading": "Replace enzymes with every fat and protein exposure",
          "body": "Pancreatic enzyme replacement provides lipase, protease, and amylase with meals, snacks, milk, formula, and other fat- or protein-containing intake. Follow the prescribed product and CF-team plan: take oral enzymes with eating, starting at the beginning and distributing a prolonged-meal dose when directed. Do not crush or chew delayed-release particles. For Creon when capsules cannot be swallowed, sprinkle the entire contents onto a small amount of acidic soft food at pH 4.5 or below, swallow immediately, and follow with sufficient liquid. Do not leave particles in the mouth. Products are not interchangeable. Viokace is a non-enteric-coated tablet used with a proton pump inhibitor; its labeled indication is adult exocrine pancreatic insufficiency due to chronic pancreatitis or pancreatectomy, so it is not a routine substitute for a CF capsule product."
        },
        {
          "heading": "Calculate in lipase units and protect the colon",
          "body": "Calculate lipase units, not capsule count alone. Older children and adults commonly require 500 to 2,500 units/kg/meal and approximately half the prescribed meal dose with each snack. Use the exact product and age instructions for initiation; for Creon, patients age 4 years and older start at 500 units/kg/meal, while those older than 12 months but younger than 4 years start at 1,000 units/kg/meal. Check each meal and the total from all meals and snacks. For Creon in patients older than 12 months, exceeding 2,500 units/kg/meal, 10,000 units/kg/day, or 4,000 units per gram of fat ingested per day requires further investigation. These are separate safety checks, not interchangeable allowances. Higher doses require documented clinical justification and reassessment; prolonged very high exposure has been associated with fibrosing colonopathy."
        },
        {
          "heading": "Individualize nutrition in the modulator era",
          "body": "Track growth, weight history, body composition, strength, pulmonary status, intake, malabsorption, food access, vitamins A, D, E, and K, and cardiometabolic risk. Some patients continue to need energy-dense intake, salt, and vitamin replacement. Highly effective modulator therapy can change weight and absorption, so reassess calories, diet quality, blood pressure, and salt needs rather than retaining a universal high-calorie, high-salt prescription. Include age-appropriate fruits, vegetables, whole grains, and legumes within the individualized plan. Modulator response does not establish that pancreatic insufficiency has resolved: reassess pancreatic status with the CF team before changing PERT."
        },
        {
          "heading": "Screen for endocrine and GI complications",
          "body": "Annual two-hour oral glucose tolerance testing begins by age 10 for CFRD screening in people without established CFRD; A1c alone can miss disease. The glucose load is 1.75 g/kg, up to 75 g. Advanced CF liver disease triggers screening from its diagnosis, even before age 10. Established CFRD is treated with insulin while preserving appropriate nutritional intake. Monitor constipation, distal intestinal obstruction syndrome, reflux, liver and gallbladder disease, pancreatitis including in pancreatic-sufficient phenotypes, bone health, and CF-specific colorectal cancer risk. Persistent symptoms require evaluation of the mechanism, not automatic escalation of calories or enzymes."
        },
        {
          "heading": "Investigate a poor enzyme response before escalation",
          "body": "Review actual doses, timing, missed intake, swallowing technique, product storage and expiration, diet, growth, stool pattern, and abdominal symptoms. Consider intestinal hyperacidity, abnormal motility, constipation or obstruction, reduced bile salts with liver disease, infection, and other gastrointestinal diagnoses. Symptoms alone do not reliably establish enzyme adequacy. Acid suppression is not automatically required with every delayed-release capsule; the CF team may consider it when optimized PERT still leaves malabsorption. New severe pain, obstruction symptoms, or bloody diarrhea needs prompt evaluation, including the possibility of fibrosing colonopathy."
        },
        {
          "heading": "Check the meal, daily, and fat-based exposure together",
          "body": "A 30 kg child takes Creon 24,000: two capsules with each of three meals and one with each of two snacks. Each meal gives 48,000 units, or 1,600 units/kg/meal. The eight daily capsules give 192,000 units, or 6,400 units/kg/day. If total daily fat intake is 60 g, exposure is 3,200 units/g fat/day. All three checks fall below their investigation boundaries. This arithmetic checks a prescribed schedule; it does not establish that the dose is clinically adequate or authorize escalation."
        },
        {
          "heading": "Plan continuous feeding and enzyme delivery together",
          "body": "Consider supplemental enteral feeding when oral intake remains insufficient despite multidisciplinary evaluation and intervention. The CF Foundation recommends continuous nocturnal infusion for supplemental tube feeding, with route and timing chosen around pulmonary and gastrointestinal status. An oral capsule-sprinkle instruction does not authorize putting beads into a feeding tube or mixing medication into formula. Continuous-feed enzyme delivery needs a specific CF-team plan for the formulation, tube, formula, and schedule; no single oral PERT method is established as best. Inline immobilized-lipase cartridges have evidence for fat digestion during feeding, but require the applicable device instructions and do not replace protease or amylase."
        },
        {
          "heading": "Monitor glucose within the feeding window",
          "body": "For continuous gastrostomy feeding, measure glucose midway through and immediately after the feed when feeding is initiated, then at these times monthly at home under the CF-team plan. Confirm elevated home-meter readings with laboratory plasma glucose. Waiting only for a fasting value can miss feeding-related hyperglycemia. Do not omit needed feeding simply because glucose rises: evaluate for CFRD and arrange an individualized insulin and nutrition plan."
        }
      ],
      "keyPoints": [
        "PERT accompanies relevant intake using a product-specific plan.",
        "Check meal, daily, and fat-based lipase exposure.",
        "Tube feeding needs an explicit enzyme and glucose-monitoring plan.",
        "OGTT uses 1.75 g/kg glucose up to 75 g; A1c alone misses CFRD.",
        "Reassess nutrition and salt needs after modulator response."
      ],
      "check": {
        "question": "Which test is recommended for annual CFRD screening beginning by age 10?",
        "choices": [
          "Two-hour OGTT using 1.75 g/kg glucose, up to 75 g",
          "Hemoglobin A1c alone",
          "Urine glucose alone",
          "Random insulin concentration"
        ],
        "answer": 0,
        "rationale": "Annual OGTT begins by age 10 in people with CF without established CFRD. The pediatric glucose load is 1.75 g/kg, capped at 75 g. A1c, urine glucose, and a random insulin level do not provide the recommended screen.",
        "reviewHref": "#cf-nutrition-gi-endocrine"
      }
    },
    {
      "slug": "cf-systemic-complications",
      "title": "Endocrine, Bone, Liver, and Cancer Surveillance",
      "visual": "cf-systemic",
      "summary": "Longer survival and multisystem CFTR dysfunction require proactive surveillance for diabetes, bone disease, hepatobiliary disease, colorectal cancer, kidney risk, and treatment-related complications.",
      "concepts": [
        "Cystic fibrosis-related diabetes",
        "Bone health",
        "Hepatobiliary disease",
        "Colorectal cancer screening",
        "Kidney and medication risk"
      ],
      "application": "Use age, organ history, transplant status, treatment exposure, and current guidance to schedule surveillance before symptoms appear, then connect abnormal results to a multidisciplinary plan.",
      "lesson": [
        {
          "heading": "Detect and treat cystic fibrosis-related diabetes",
          "body": "Annual two-hour OGTT begins by age 10 in people without established CFRD, using 1.75 g/kg glucose up to 75 g. A1c alone is not an adequate screen, although it remains useful for monitoring established diabetes. During pulmonary exacerbations treated with IV antibiotics and/or systemic glucocorticoids, monitor fasting and two-hour postprandial glucose for the first 48 hours. Continuous feeding requires mid- and immediate postfeeding assessment at initiation and then monthly. Pregnancy and transplantation have additional screening requirements. Confirm elevated home-meter readings with laboratory plasma glucose. Established CFRD is treated with insulin while maintaining appropriate nutrition and pulmonary goals."
        },
        {
          "heading": "Protect bone across the lifespan",
          "body": "Assess vitamin D, calcium and vitamin K intake, nutrition, weight-bearing activity, chronic inflammation, glucocorticoid exposure, delayed puberty or hypogonadism, fracture history, transplant status, and bone density. CF guidance recommends DXA in all adults and in children older than 8 years with risk factors such as low weight, severe lung impairment, prolonged glucocorticoids, delayed puberty, or fracture. Correct reversible causes and reassess by baseline density and clinical risk. Fragility fractures, transplant candidacy, substantial bone loss, or markedly low density require specialist review for pharmacotherapy; vitamin D replacement alone does not address every fracture driver."
        },
        {
          "heading": "Recognize hepatobiliary and kidney risk",
          "body": "At stable health, obtain annual total bilirubin, AST, ALT, alkaline phosphatase, GGT, and platelet count from CF diagnosis. Children receive liver/spleen ultrasound at least every two years from age 3; adults benefit from baseline imaging, while the repeat interval after normal baseline findings is not established. Persistent abnormalities, hepatomegaly, splenomegaly, or abnormal imaging require evaluation for hepatobiliary involvement and elastography when available. Review kidney function during nephrotoxic antibiotics, dehydration, aminoglycoside exposure, diabetes, stones, and transplant therapy. Interpret creatinine with the nutritional and muscle-mass context; changing organ reserve can require different drug doses and monitoring."
        },
        {
          "heading": "Use CF-specific cancer surveillance",
          "body": "CF colorectal screening uses colonoscopy beginning at age 40, with rescreening every five years after a negative examination. Adults age 30 or older who have recovered after solid-organ transplant should begin screening within two years of transplant unless a negative colonoscopy was performed within the previous five years. Adenomatous polyps generally require surveillance within three years, sooner when findings warrant. CF requires more intensive bowel preparation planned with the endoscopist; stool testing is not an established equivalent. These schedules apply to screening: new bleeding, anemia, weight loss, obstruction, or persistent bowel change requires diagnostic evaluation."
        },
        {
          "heading": "Connect advanced liver disease to nutrition and glucose",
          "body": "Advanced CF liver disease requires a coordinated pulmonary, hepatology, endocrine, nutrition, and medication plan. Begin annual CFRD screening at the diagnosis of advanced liver disease even if the patient is younger than 10. Review nutrition at least every six months and medication risk with an experienced pharmacist. Ursodeoxycholic acid is not recommended routinely to prevent advanced liver disease in every person with CF. Neither a normal transaminase value nor a modulator response rules out portal disease."
        },
        {
          "heading": "Separate kidney risk from proof of causation",
          "body": "A registry cohort of adults with CF found an association between insulin-requiring CFRD and chronic kidney disease. Its pulmonary-exacerbation proxy did not establish a chronic-kidney-disease effect from cumulative IV aminoglycosides; direct exposure needed further study. This limitation does not remove the recognized acute nephrotoxicity of aminoglycosides. Review renal trajectory and drug exposure during treatment, rather than assuming either that all kidney injury is intrinsic to CFTR dysfunction or that one normal creatinine excludes risk."
        }
      ],
      "keyPoints": [
        "OGTT is the standard CFRD screen.",
        "Bone risk is multifactorial.",
        "Liver and kidney reserve change medication safety.",
        "CF uses earlier colorectal cancer screening."
      ],
      "check": {
        "question": "Why is hemoglobin A1c alone insufficient for CFRD screening?",
        "choices": [
          "Early CF dysglycemia may be mainly postprandial and A1c can remain deceptively low",
          "A normal A1c reliably excludes diabetes during continuous feeding",
          "A1c directly measures the two-hour response to a glucose load",
          "A1c replaces annual OGTT after a good modulator response"
        ],
        "answer": 0,
        "rationale": "A1c alone can miss CFRD and is not the recommended screening test. Annual OGTT assesses glucose handling during stable health, and continuous feeding or acute illness requires additional timed glucose measurements. A1c can still help monitor established CFRD.",
        "reviewHref": "#cf-systemic-complications"
      }
    },
    {
      slug:"cf-longitudinal-advanced-care",title:"Longitudinal Safety, Reproductive Health, and Advanced Disease",visual:"cf-longitudinal",
      summary:"CF care remains multidisciplinary across changing lung function, treatment burden, mental health, fertility, pregnancy, hemoptysis, pneumothorax, transplant, and aging.",
      concepts:["Quarterly multidisciplinary care","Infection prevention","Hemoptysis and pneumothorax","Reproductive health","Advanced lung disease and transplant"],
      application:"Maintain a center-based longitudinal record of baseline function, microbiology, medication and device implementation, complications, goals, and referral thresholds, including when modulator response is strong.",
      lesson:[
        {heading:"Use an accredited multidisciplinary care model",body:"Pulmonary clinicians, pharmacists, nurses, respiratory therapists, dietitians, social workers, mental-health professionals, genetic counselors, endocrinology, gastroenterology, reproductive specialists, and transplant teams contribute at different stages. Review medication access, treatment burden, adherence, pulmonary function, culture, nutrition, complications, immunization, and goals at regular visits."},
        {heading:"Prevent cross-infection without social isolation",body:"Hand hygiene, cough etiquette, equipment cleaning, environmental practices, masking and contact precautions in health care settings, and physical separation between people with CF reduce pathogen transmission. Infection prevention should be practical, clearly taught, and balanced with educational, occupational, and psychosocial participation."},
        {heading:"Recognize complications that interrupt routine therapy",body:"Massive hemoptysis, pneumothorax, severe hypoxemia, respiratory failure, or rapidly falling lung function requires urgent specialist care. Temporarily modify airway clearance, aerosol therapy, positive pressure, anticoagulation, or activity according to the complication and center protocol. Do not apply routine clearance through major bleeding or an untreated pneumothorax without review."},
        {heading:"Plan reproductive and advanced care early",body:"CF can cause congenital bilateral absence of the vas deferens and reduced fertility through other mechanisms, while modulator therapy may change fertility. Provide contraception, pregnancy, lactation, interaction, and genetic counseling based on current evidence and product labeling. Advanced lung disease care includes oxygen, ventilation, rehabilitation, palliative support, and early transplant referral before a crisis removes options."},
      ],
      keyPoints:["CF care is multidisciplinary.","Infection prevention is disease treatment.","Major hemoptysis and pneumothorax change airway therapy.","Transplant referral should be early."],
      check:{question:"Why should lung transplant referral occur before terminal respiratory failure?",choices:["Evaluation, optimization, and listing require time while the patient still has reserve","Referral automatically means immediate surgery","CFTR modulators eliminate every transplant indication","A single low spirometry value is the only criterion"],answer:0,rationale:"Early referral preserves time for evaluation and shared planning before rapid decline or a complication removes options.",reviewHref:"#cf-longitudinal-advanced-care"},
    },
  ],
  questionBank:cysticFibrosisQuestionBank,
  references:[
    {"label": "CF Foundation pancreatic enzyme guidance", "href": "https://www.cff.org/medical-professionals/pancreatic-enzymes-clinical-care-guidelines"},
    {"label": "CF Foundation enzyme administration", "href": "https://www.cff.org/managing-cf/enzymes"},
    {"label": "CF Foundation nutrition position paper (2023)", "href": "https://www.cff.org/medical-professionals/nutritional-considerations-new-era-cf-foundation-position-paper"},
    {"label": "CF Foundation enteral feeding guidance", "href": "https://www.cff.org/medical-professionals/enteral-tube-feeding-clinical-care-guidelines"},
    {"label": "ADA and CF Foundation CFRD guideline (2010)", "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2992215/"},
    {"label": "CF Foundation bone disease guidance", "href": "https://www.cff.org/medical-professionals/bone-disease-cf-clinical-care-guidelines"},
    {"label": "CF Foundation colorectal screening guidance", "href": "https://www.cff.org/medical-professionals/colorectal-cancer-screening-clinical-care-guidelines"},
    {"label": "CF Foundation hepatobiliary guidance (2024)", "href": "https://www.cff.org/medical-professionals/cystic-fibrosis-screening-evaluation-and-management-hepatobiliary-disease"},
    {"label": "Creon prescribing information", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=073201aa-556d-4a70-918e-84e9616fd88d"},
    {"label": "Viokace prescribing information", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=58bdb8de-582d-44e6-9b72-8d5a42fdf501"},
    {"label": "Quon et al. CF kidney-risk cohort (2011)", "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3262023/"},

    {label:"Cystic Fibrosis Foundation clinical care guidelines",href:"https://www.cff.org/medical-professionals/clinical-care-guidelines"},
    {label:"FDA Alyftrek prescribing information",href:"https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/218730s000lbl.pdf"},
    {label:"FDA Trikafta prescribing information",href:"https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/212273s015lbl.pdf"},
    {label:"FDA Kalydeco prescribing information",href:"https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/203188s041%2C207925s019lbl.pdf"},
  ],
};
