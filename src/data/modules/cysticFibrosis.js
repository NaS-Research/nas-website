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
      "slug": "cf-biology-diagnosis",
      "title": "CFTR Biology, Genotype, and Diagnosis",
      "visual": "cf-biology",
      "summary": "Cystic fibrosis requires a compatible clinical context and objective evidence of CFTR dysfunction. Genotype helps explain mechanism and treatment eligibility but does not replace phenotype.",
      "concepts": [
        "Epithelial ion transport",
        "F508del and protein fate",
        "Newborn-screen confirmation",
        "Sweat chloride and sample quality",
        "Genetic phase and inconclusive states"
      ],
      "application": "Establish the diagnostic context, verify sweat-test quality, interpret two disease-causing variants when present, and refer uncertain states to an accredited CF center rather than forcing a binary label.",
      "lesson": [
        {
          "heading": "Trace the ion and water defect",
          "body": "CFTR is an epithelial anion channel and regulator that conducts chloride and bicarbonate and helps coordinate salt, water, pH, and secretion. Reduced function dehydrates airway surface liquid and impairs mucociliary clearance, promoting obstruction and infection. The same transport disorder contributes to pancreatic duct obstruction, malabsorption, intestinal and hepatobiliary disease, high sweat chloride, salt loss, and reproductive tract abnormalities. CF is inherited as an autosomal recessive disorder; its clinical manifestations differ across people and organs."
        },
        {
          "heading": "Connect mutation to protein behavior",
          "body": "Variants can reduce synthesis, processing, gating, conductance, quantity, or stability. F508del causes a major folding and trafficking defect; protein rescued to the surface can also have reduced stability. Correctors improve processing and delivery of selected mutant protein, while potentiators increase opening of responsive channels at the cell surface. These mechanisms explain combination therapy but do not establish eligibility by mutation class alone. Verify the exact current product's genotype, age, formulation, and other requirements."
        },
        {
          "heading": "Use screening to begin, not end, diagnosis",
          "body": "Newborn immunoreactive trypsinogen screening identifies risk, not a final diagnosis; the screening algorithm can also include CFTR analysis. A positive result needs timely CF-center evaluation and a quantitative sweat chloride test. For screen-positive newborns, bilateral collection when weight is more than 2 kg and corrected gestational age is at least 36 weeks improves the chance of sufficient sweat. Arrange testing as soon as possible after 10 days of age in eligible infants, ideally by 4 weeks. Do not delay needed treatment for presumptive CF while confirmation proceeds. Recurrent sinopulmonary disease, bronchiectasis, meconium ileus, malabsorption, pancreatitis, salt-loss syndromes, infertility, or family history can prompt evaluation even after a negative screen."
        },
        {
          "heading": "Interpret sweat chloride in context",
          "body": "Sweat chloride of at least 60 mmol/L is consistent with CF in a positive-screen, symptomatic, or family-history context; confirm a positive test on a separate date or with an independent diagnostic method. Values from 30 through 59 mmol/L are intermediate and need repeat testing, generally within 1 to 2 months, and extended genetic or functional evaluation. Below 30 mmol/L makes CF less likely but does not exclude it when phenotype or genotype is compelling. Sweat conductivity or sodium is not an equivalent diagnostic test. A quantity-not-sufficient sample is not a normal result: recollect it rather than estimating chloride or pooling separate samples."
        },
        {
          "heading": "Use genetic evidence without forcing certainty",
          "body": "Two CF-causing variants on separate alleles support a CF diagnosis, with sweat testing still needed for confirmation. A limited panel that fails to find two CF-causing variants does not exclude CF. Distinguish disease-causing, varying-consequence, uncharacterized, and non-CF-causing variants; two variants reported on the same allele do not establish the same inheritance pattern. Extended sequencing, deletion/duplication analysis, parental testing to resolve phase, or CFTR functional studies may be needed. Nasal potential difference and intestinal current measurement belong in validated reference centers. Offer expert genetic counseling."
        },
        {
          "heading": "Follow inconclusive newborn-screen results",
          "body": "CRMS/CFSPID describes an inconclusive diagnosis after a positive newborn screen in an infant without CF-defining clinical features. It can involve sweat chloride below 30 mmol/L with two variants, at least one of unclear consequence, or 30 to 59 mmol/L with one or no CF-causing variants. The 2024 CF Foundation guidance recommends at least annual CF-clinician follow-up and repeat sweat testing at 6 months and annually at least through age 8. Review growth, new symptoms, variant interpretation, pancreatic assessment, and selectively obtained cultures. Routine CF airway clearance or CFTR modulators are not recommended solely for CRMS/CFSPID; new symptoms can justify individualized care and diagnostic reassessment. Do not equate uncertainty with either established CF or a guarantee of no future disease."
        }
      ],
      "keyPoints": [
        "A positive screen requires diagnostic evaluation.",
        "Interpret sweat chloride with sample quality and clinical context.",
        "Two variants must be interpreted for consequence and phase.",
        "CRMS/CFSPID has its own follow-up and treatment guidance."
      ],
      "check": {
        "question": "What does a positive newborn CF screen establish?",
        "choices": [
          "The need for confirmatory diagnostic evaluation",
          "A definitive CF diagnosis by itself",
          "Automatic eligibility for every CFTR modulator",
          "The presence of two disease-causing CFTR variants"
        ],
        "answer": 0,
        "rationale": "Newborn screening identifies risk and must be followed by diagnostic testing.",
        "reviewHref": "#cf-biology-diagnosis"
      }
    },
    {
      "slug": "cf-airway-clearance",
      "title": "Airway Clearance and Chronic Pulmonary Therapy",
      "visual": "cf-airway",
      "summary": "Airway care combines physical clearance, hydration of secretions, mucus degradation, exercise, inhaled delivery, equipment hygiene, and a sequence the patient can sustain.",
      "concepts": [
        "Individualized airway clearance",
        "Bronchodilator role",
        "Hypertonic saline",
        "Dornase alfa",
        "Treatment order and equipment"
      ],
      "application": "Observe the entire routine, identify the purpose of every step, match technique to age and ability, and simplify burden without silently removing effective treatment.",
      "lesson": [
        {
          "heading": "Make airway clearance individualized and active",
          "body": "Positive expiratory pressure, oscillatory PEP, chest-wall oscillation, active-cycle breathing, autogenic drainage, percussion, and other methods mobilize secretions. CF guidance recommends airway clearance for people with established CF; no single method has been demonstrated superior for everyone. Technique, age, ability, preference, sputum burden, lung function, adherence, and response determine the plan. Observe performance rather than judging by a device prescription alone. Aerobic exercise complements prescribed clearance and does not replace it. CRMS/CFSPID without established CF follows separate guidance."
        },
        {
          "heading": "Hydrate and depolymerize secretions",
          "body": "Inhaled hypertonic saline draws water into airway secretions and supports mucus clearance. Assess tolerance because cough, sore throat, chest tightness, and bronchospasm can occur; a prescribed bronchodilator is used first. Concentration, volume, frequency, and nebulizer follow the patient's regimen. Dornase alfa cleaves extracellular DNA in purulent sputum and reduces viscosity. It is neither a bronchodilator nor an antibiotic. Do not dilute or mix Pulmozyme with other drugs in the nebulizer; its label gives no compatibility exception."
        },
        {
          "heading": "Sequence inhaled therapy deliberately",
          "body": "The book's sequence is a prescribed bronchodilator, hypertonic saline, dornase alfa, physical airway clearance, then inhaled antibiotic. This prepares and thins secretions before clearing them and delivering the antibiotic. Current CF Foundation patient guidance also places dornase before physical clearance, while the chronic-medication guideline identifies optimal sequencing as an unresolved question. Follow the individualized center plan and each product's instructions; do not treat one sequence as proven best for every person. Inhaled corticosteroids are not routine CF therapy without asthma or allergic bronchopulmonary aspergillosis."
        },
        {
          "heading": "Treat the device as part of the dose",
          "body": "Medication, nebulizer, compressor or mesh system, and mouthpiece or mask must work together. Use a system recommended for the exact medication and follow its preparation, cleaning, disinfection, drying, maintenance, and replacement instructions. Observe the breath pattern, fit, completed dose, electrical function, storage, and time burden. People with CF should have their own nebulizer; equipment should not be shared. After use, clean and disinfect compatible parts and allow them to air dry before storage. When cold disinfection is used, rinse disinfectant with sterile water, not tap water. A generic cleaning method can be unsuitable for a specific mesh device."
        },
        {
          "heading": "Give the full dornase dose through the correct system",
          "body": "Pulmozyme contains 2.5 mg in one 2.5 mL single-dose ampule, or 1 mg/mL. The usual labeled dose is the full ampule inhaled once daily; some patients may benefit from twice-daily administration when prescribed. Use a recommended jet-nebulizer/compressor combination or listed vibrating-mesh system. A mouthpiece-only system is not suitable for a patient who requires a mask. Check for leaks and cloudy or discolored solution; once opened, use the entire contents or discard the remainder. Known hypersensitivity to dornase alfa, Chinese Hamster Ovary cell products, or another component is a contraindication. Monitor voice change, throat irritation, rash, and other treatment symptoms."
        },
        {
          "heading": "Protect dornase during storage and travel",
          "body": "Keep Pulmozyme at 2 to 8 degrees C in its protective foil, protected from excessive heat and light, including during transport. Return unused ampules to refrigerated foil storage after the pouch is opened. Current US labeling says not to use ampules exposed to room temperature of 22 to 28 degrees C for more than 60 cumulative hours. This limited excursion instruction does not make room temperature the routine storage condition, does not cover hotter temperatures, and does not reset when the medicine returns to the refrigerator. Check expiry and solution appearance; seek product-specific advice when the exposure history is uncertain."
        }
      ],
      "keyPoints": [
        "Choose and observe an individualized clearance technique.",
        "Dornase cleaves DNA; hypertonic saline hydrates mucus.",
        "Do not dilute or mix Pulmozyme with other nebulized drugs.",
        "Thin and clear secretions before inhaled antibiotic under the center plan.",
        "The device and cold chain are part of safe delivery."
      ],
      "check": {
        "question": "Why is dornase alfa useful in CF airway disease?",
        "choices": [
          "It cleaves extracellular DNA that contributes to mucus viscosity",
          "It directly corrects every CFTR mutation",
          "It replaces pancreatic enzymes",
          "It eradicates all airway bacteria"
        ],
        "answer": 0,
        "rationale": "Neutrophil-derived extracellular DNA is an important contributor to thick CF sputum.",
        "reviewHref": "#cf-airway-clearance"
      }
    },
    {
      "slug": "cf-pulmonary-assessment",
      "title": "Pulmonary Assessment and Exacerbation Recovery",
      "visual": "cf-pulmonary",
      "summary": "Pulmonary decisions begin with the patient's own baseline. Symptoms, spirometry, oxygenation, microbiology, treatment implementation, and recovery trajectory determine urgency and response.",
      "concepts": [
        "Personal pulmonary baseline",
        "Spirometry and oxygenation",
        "Exacerbation recognition",
        "Antibiotic pharmacokinetics",
        "Recovery and prevention"
      ],
      "application": "Define the patient's stable baseline, recognize a meaningful change, select the care setting and treatment intensity, then document recovery rather than stopping when symptoms merely begin to improve.",
      "lesson": [
        {
          "heading": "Build a longitudinal pulmonary baseline",
          "body": "Track cough, sputum, exercise tolerance, sleep, appetite, weight, oxygenation, FEV1, imaging when indicated, culture history, exacerbations, treatment burden, and actual treatment delivery over time. A value that appears acceptable in isolation can represent a substantial decline from that person's stable function. Interpret spirometry with test quality and the patient's ability to perform it. Lung function, symptoms, weight, and treatment implementation provide complementary evidence; no single measurement describes the entire pulmonary state."
        },
        {
          "heading": "Recognize deterioration as a pattern",
          "body": "Increased cough or sputum, dyspnea, fatigue, reduced appetite or weight, hemoptysis, oxygen change, new examination findings, and falling spirometry can signal a pulmonary exacerbation. Fever may occur but is not required. No single universally accepted diagnostic definition or FEV1 cutoff captures every episode. Evaluate treatment interruption, respiratory viral illness, asthma, allergic bronchopulmonary aspergillosis, and complications such as pneumothorax or bleeding; pursue other cardiopulmonary causes when the presentation requires it. Sudden severe breathlessness, chest pain, major bleeding, or respiratory instability needs urgent assessment rather than routine escalation at home."
        },
        {
          "heading": "Match treatment intensity to severity",
          "body": "Choose the care setting, antimicrobial route and regimen from severity, physiology, current and prior organisms, susceptibility, allergies, previous clinical response, organ function, and the ability to deliver and monitor treatment. Increase airway clearance during an exacerbation when safe and continue appropriate chronic lung-health therapies. IV treatment outside hospital requires resources and support equivalent to hospital care. Aminoglycosides and other high-risk agents require individualized exposure and toxicity monitoring. Susceptibility alone does not fully predict response in a complex, often polymicrobial CF airway."
        },
        {
          "heading": "Measure recovery and prevent the next event",
          "body": "Reassess symptoms, weight, oxygenation, spirometry, adverse effects, treatment delivery, and microbiology when useful against the prior stable baseline. Early symptom improvement or fever resolution does not establish complete recovery. Persistent decline requires evaluation of organism coverage, delivery, adherence, complications, alternative diagnoses, and advanced lung disease. Agree on follow-up, warning symptoms, and an updated prevention and home-action plan rather than ending assessment at the last antibiotic dose."
        },
        {
          "heading": "Separate percentage points from relative change",
          "body": "If stable FEV1 is 88% predicted and the current result is 74% predicted, the absolute decline is 14 percentage points. The relative decline is (88 - 74) / 88 x 100, approximately 15.9%. These describe the same change with different denominators. Interpret it with symptoms, oxygenation, weight, microbiology, and test quality; the arithmetic is not a universal diagnostic threshold or a stand-alone antibiotic prescription."
        },
        {
          "heading": "Individualize duration and acknowledge evidence limits",
          "body": "Do not turn a typical treatment duration into an automatic course for every exacerbation. The STOP2 randomized trial studied adults receiving IV antibiotics and assigned duration after an early symptom and lung-function response assessment: 10 days was noninferior to 14 in early robust responders, while 21 days was not superior to 14 in less robust responders. These findings do not establish a 10-day regimen for children, ICU-level episodes, or every adult, nor a direct comparison of 10 versus 21 days. Choose duration and reassessment with the CF team. Evidence also remains insufficient for routine systemic corticosteroids in exacerbations or for assuming inhaled and IV use of the same antibiotic must always be combined."
        }
      ],
      "keyPoints": [
        "Compare deterioration and recovery with the personal baseline.",
        "Fever is not required for an exacerbation.",
        "Route, setting, and duration depend on clinical context and delivery support.",
        "Distinguish percentage-point from relative FEV1 change.",
        "Persistent physiologic loss needs reassessment."
      ],
      "check": {
        "question": "What is the best way to judge recovery from a CF pulmonary exacerbation?",
        "choices": [
          "Compare symptoms, oxygenation, weight, and spirometry with the patient's prior baseline",
          "Stop assessment when fever resolves",
          "Use one susceptibility report without clinical response",
          "Assume every decline is bacterial infection"
        ],
        "answer": 0,
        "rationale": "Recovery is multidimensional and should be measured against the patient's established baseline.",
        "reviewHref": "#cf-pulmonary-assessment"
      }
    },
    {
      "slug": "cf-infection-exacerbations",
      "title": "Airway Microbiology and Antimicrobial Strategy",
      "visual": "cf-infection",
      "summary": "CF airway infection changes across age and time. Culture history and clinical response guide eradication, chronic suppression, and acute treatment more reliably than one isolated susceptibility report.",
      "concepts": [
        "Longitudinal cultures and specimen choice",
        "New Pseudomonas eradication",
        "Product-specific inhaled antibiotic delivery",
        "Dose intervals, cycles, and storage",
        "Azithromycin and positive NTM cultures"
      ],
      "application": "For a new Pseudomonas culture, distinguish eradication from chronic suppression, then verify the exact product, device, dose, interval, cycle, and safety risks. For a positive NTM culture, address chronic azithromycin immediately while specialist diagnostic evaluation proceeds.",
      "lesson": [
        {
          "heading": "Read microbiology longitudinally",
          "body": "CF airway surveillance follows organism history together with symptoms, lung function, prior antibiotics, and clinical response. Staphylococcus aureus and Haemophilus influenzae are common early organisms; Pseudomonas aeruginosa becomes an important chronic pathogen. Tell the laboratory that the sample is from a person with CF so appropriate processing is used. Sputum, induced sputum, or other specimens have different strengths; use the best feasible respiratory sample under the center plan. Routine oropharyngeal cultures are appropriate for Pseudomonas surveillance in people who cannot expectorate, but oropharyngeal swabs are not recommended for NTM screening. One negative or positive culture does not replace the longitudinal history."
        },
        {
          "heading": "Eradicate new Pseudomonas promptly",
          "body": "Initial or new Pseudomonas growth should prompt an established eradication protocol and follow-up cultures. CF Foundation guidance strongly recommends inhaled tobramycin 300 mg twice daily for 28 days for initial or new growth; review the patient's age, delivery system, and individual risks with the CF center. This early eradication course is distinct from ongoing suppressive cycles for chronic infection. Do not give antipseudomonal prophylaxis solely to prevent acquisition when cultures remain negative. Persistent or recurrent growth requires specialist reassessment rather than assuming that symptom improvement proves eradication."
        },
        {
          "heading": "Suppress chronic infection by route and cycle",
          "body": "Inhaled tobramycin or aztreonam can reduce the burden of chronic Pseudomonas infection. The products below have labeled 28-day treatment periods followed by 28 days off; use a written cycle calendar. Some centers prescribe individualized alternating or continuous regimens, which require an explicit specialist plan rather than treating all antibiotics as schedule-interchangeable. Assess the delivered dose, device, adherence, bronchospasm, voice symptoms, response, and access. Inhalation does not eliminate aminoglycoside ototoxicity or nephrotoxicity risk: review hearing, tinnitus, renal disease, concurrent systemic aminoglycosides, and the need for individualized monitoring. Known aminoglycoside hypersensitivity is a contraindication to these tobramycin products. A randomized continuous-alternating trial was underpowered and did not establish superiority; its existence does not justify a universal regimen."
        },
        {
          "heading": "Treat each organism in clinical context",
          "body": "MRSA, Burkholderia cepacia complex, fungi, and NTM can have different consequences and need organism-specific specialist evaluation. Distinguish recovery of an organism from clinically significant infection, and distinguish Aspergillus-related allergic bronchopulmonary aspergillosis from a fungal culture alone. During deterioration, select the treatment setting, route, and antimicrobial regimen from severity, current and prior cultures, susceptibility, allergies, organ function, and previous response. A chronic inhaled suppression prescription does not automatically provide sufficient treatment for an acute exacerbation. Increase appropriate airway clearance and reassess recovery against the person's stable baseline; susceptibility alone does not fully predict clinical response."
        },
        {
          "heading": "Give the full tobramycin solution dose with its device",
          "body": "For labeled CF treatment in patients at least 6 years old, TOBI and KITABIS PAK contain 300 mg in 5 mL, whereas BETHKIS contains 300 mg in 4 mL. Each dose uses the entire single-dose ampule twice daily, as close to 12 hours apart as possible and never less than 6 hours apart, for 28 days on and 28 days off. The solutions have different concentrations: 60 mg/mL versus 75 mg/mL. Do not infer a smaller dose from the smaller ampule volume. TOBI uses a PARI LC PLUS nebulizer with a DeVilbiss Pulmo-Aide compressor; KITABIS PAK includes its PARI LC PLUS nebulizer and specifies the DeVilbiss Pulmo-Aide compressor. BETHKIS specifies a PARI LC PLUS nebulizer with a PARI Vios compressor. These are inhaled solutions, not injectable products. Do not dilute them or mix them with dornase or other medicines in the nebulizer; follow the product's administration instructions and the center's inhaled-treatment order."
        },
        {
          "heading": "Keep Podhaler capsules out of the mouth",
          "body": "TOBI Podhaler is labeled for CF with Pseudomonas in patients at least 6 years old. A dose is four 28 mg capsules, or 112 mg, inhaled through the Podhaler device twice daily, as close to 12 hours apart as possible and at least 6 hours apart. Use 28 days on and 28 days off. The capsules must not be swallowed or placed in a nebulizer. Remove each capsule from its blister immediately before use, use only the specified device, and follow its instructions to complete each capsule's inhalation. Four capsules per dose times two doses per day equals eight capsules daily; a 28-day treatment period requires 224 capsules, containing 6,272 mg in total. This nominal capsule content is not a calculation of the amount deposited in the lungs. Replace the device with the new one supplied in each weekly pack."
        },
        {
          "heading": "Prepare and space aztreonam separately",
          "body": "CAYSTON is inhaled aztreonam for CF patients at least 7 years old with Pseudomonas. Reconstitute one 75 mg vial with the supplied 1 mL of 0.17% sodium chloride and administer it promptly through the Altera nebulizer system only. Do not substitute injectable aztreonam, a different diluent, or another nebulizer. Give 75 mg three times daily for 28 days, followed by 28 days off, with at least 4 hours between doses. An 8 a.m., 2 p.m., and 8 p.m. schedule illustrates three waking-hour doses spaced 6 hours apart; the label does not require waking overnight to achieve exact 8-hour intervals. Use a prescribed bronchodilator before CAYSTON, give other prescribed inhaled mucolytics first, and give CAYSTON last in that sequence. Do not mix it with other drugs or prepare multiple doses in advance. A missed dose may be taken if subsequent doses can still remain at least 4 hours apart. Watch for allergy and bronchospasm even after bronchodilator pretreatment; known aztreonam allergy is a contraindication."
        },
        {
          "heading": "Protect the formulation during storage",
          "body": "TOBI, KITABIS PAK solution, and BETHKIS ampules normally require refrigeration at 2 to 8 degrees C, with foil and protection from intense light. Their labels allow room-temperature storage up to 25 degrees C for up to 28 days. Do not use a product beyond its refrigerated expiry or after more than 28 days at room temperature, or if solution is cloudy or contains particles. Yellowing alone can occur without loss of quality when storage conditions remain within the label. Podhaler capsules instead remain in their blister, protected from moisture, at labeled room temperature: 25 degrees C, with permitted excursions from 15 to 30 degrees C. CAYSTON powder and diluent are refrigerated at 2 to 8 degrees C, kept together and protected from light; they may be kept up to 25 degrees C for up to 28 days. Reconstitute CAYSTON immediately before use rather than storing a prepared dose. Record the product and exposure history when planning travel; one inhaled drug's storage allowance does not transfer to another."
        },
        {
          "heading": "Hold azithromycin during a positive NTM evaluation",
          "body": "Chronic oral azithromycin can reduce CF pulmonary exacerbations; this CF maintenance use is off label and follows the specialist plan. CF Foundation chronic-medication guidance recommends NTM screening before starting and at 6- or 12-month intervals; the NTM guideline recommends annual culture for stable people who spontaneously expectorate. Symptoms or clinical concern require additional evaluation rather than waiting for a routine interval. A positive NTM culture in someone taking chronic azithromycin calls for withholding it while NTM pulmonary disease is evaluated. Do not wait for confirmed disease before addressing the risk of selecting macrolide resistance. A positive culture alone does not establish NTM pulmonary disease: integrate symptoms, imaging, and microbiologic criteria. Confirmed disease needs a specialist multidrug regimen, not macrolide monotherapy. Review azithromycin-related QT risk and interacting drugs, hearing symptoms, liver status, allergies, and adherence; prior azithromycin-associated cholestatic jaundice or hepatic dysfunction is a contraindication, and signs of hepatitis require stopping the drug and assessment."
        }
      ],
      "keyPoints": [
        "Separate new acquisition, chronic suppression, and an acute exacerbation.",
        "Give the full formulation-specific dose through its labeled device.",
        "Tobramycin doses need at least 6 hours; CAYSTON doses need at least 4.",
        "Use each product's own cycle and storage instructions.",
        "Withhold chronic azithromycin during evaluation of a positive NTM culture."
      ],
      "check": {
        "question": "What is an appropriate response to a new Pseudomonas aeruginosa airway acquisition in CF?",
        "choices": [
          "Begin an established eradication protocol and obtain follow-up cultures",
          "Wait until Pseudomonas becomes chronic before considering eradication",
          "Start lifelong systemic aminoglycoside treatment automatically",
          "Use inhaled corticosteroid alone to eradicate Pseudomonas"
        ],
        "answer": 0,
        "rationale": "New growth supports prompt eradication under an established CF-center protocol, with follow-up cultures to assess response. Waiting for chronic infection loses the early eradication opportunity. Lifelong systemic aminoglycoside therapy is not an automatic response and adds substantial toxicity; an inhaled corticosteroid is not an antipseudomonal eradication treatment.",
        "reviewHref": "#cf-infection-exacerbations"
      }
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
    {"label": "CF Foundation: initial Pseudomonas eradication", "href": "https://www.cff.org/medical-professionals/eradication-initial-p-aeruginosa-clinical-care-guidelines"},
    {"label": "CF Foundation: NTM screening and positive-culture azithromycin hold", "href": "https://www.cff.org/medical-professionals/nontuberculous-mycobacteria-clinical-care-guidelines"},
    {"label": "DailyMed: TOBI solution full US prescribing information", "href": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6a3c3871-1d3a-44d6-8be3-526b30123ef7"},
    {"label": "DailyMed: KITABIS PAK full US prescribing information", "href": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=da1e5afd-d707-4af1-8935-8195ba6d769f"},
    {"label": "DailyMed: BETHKIS full US prescribing information", "href": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1cd3d47b-025f-4705-9daf-cf07725ec223"},
    {"label": "DailyMed: TOBI Podhaler full US prescribing information", "href": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c4b5bb1f-e158-4ac1-9c35-e98a416c743a"},
    {"label": "DailyMed: CAYSTON full US prescribing information", "href": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=67300ca3-8c53-4ce4-8e86-2c03be1f9b8a"},
    {"label": "DailyMed: oral Zithromax safety and interactions", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db52b91e-79f7-4cc1-9564-f2eee8e31c45"},
    {"label": "CF Foundation: continuous alternating antibiotic trial and evidence limits", "href": "https://apps.cff.org/Trials/Finder/details/295/Aztreonam-for-Inhalation-Solution-AZLI-taken-in-a-Continuous-Alternating-Therapy-Regimen-for-the-Treatment-of-Chronic-Pseudomonas-aeruginosa-lung-infections-in-people-with-CF"},
    {"label": "CF Foundation: diagnosis consensus and current review", "href": "https://www.cff.org/medical-professionals/cf-diagnosis-clinical-care-guidelines"},
    {"label": "CF Foundation: quantitative sweat testing and quality", "href": "https://www.cff.org/medical-professionals/sweat-test-clinical-care-guidelines"},
    {"label": "CF Foundation: 2024 CRMS/CFSPID management guidance", "href": "https://www.cff.org/medical-professionals/cystic-fibrosis-foundation-evidence-based-guidelines-management-crms-cfspid"},
    {"label": "CF Foundation: CFTR protein and epithelial transport", "href": "https://www.cff.org/research-clinical-trials/basics-cftr-protein"},
    {"label": "CF Foundation: types of CFTR mutation and protein fate", "href": "https://www.cff.org/research-clinical-trials/types-cftr-mutations"},
    {"label": "Valentine et al.: rescued F508del surface instability, cellular study", "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3527949/"},
    {"label": "CF Foundation: individualized airway clearance", "href": "https://www.cff.org/medical-professionals/cf-airway-clearance-therapies-clinical-care-guidelines"},
    {"label": "CF Foundation: chronic medications to maintain lung health", "href": "https://www.cff.org/medical-professionals/chronic-medications-maintain-lung-health-clinical-care-guidelines"},
    {"label": "CF Foundation: mucus thinners and treatment order", "href": "https://www.cff.org/managing-cf/mucus-thinners"},
    {"label": "DailyMed: Pulmozyme full US prescribing information", "href": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d8c78a7e-ff99-48f3-8952-643ec2ea0f86"},
    {"label": "CF Foundation: nebulizer care at home", "href": "https://www.cff.org/managing-cf/nebulizer-care-home"},
    {"label": "CF Foundation: pulmonary exacerbation care guidance", "href": "https://www.cff.org/medical-professionals/pulmonary-exacerbations-clinical-care-guidelines"},
    {"label": "Dickinson and Collaco: CF diagnosis, pulmonary care, and complications", "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8972143/"},
    {"label": "STOP2: randomized adult IV-antibiotic duration trial", "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8786075/"},
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
