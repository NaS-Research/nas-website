// Original product-specific summaries of public primary sources.
export const epinephrine = {
  "slug": "epinephrine",
  "name": "Epinephrine",
  "synonym": "Adrenaline · EpiPen · Auvi-Q · Neffy · Adrenalin",
  "description": "Current U.S. anaphylaxis devices, Adrenalin vial and adult septic-shock premix, with separately attributed adult AHA arrest guidance.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Treat anaphylaxis promptly with the correct device.",
    "text": "Verify the delivered dose, weight band, route, and concentration. Never inject an auto-injector IV or substitute nasal milligrams for injection milligrams. Follow the product-specific emergency-care plan; cardiovascular disease or sulfites should not delay life-threatening anaphylaxis treatment.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Alpha / beta adrenergic agonist"
    ],
    [
      "Device routes",
      "Outer-thigh injection · Nasal"
    ],
    [
      "IV indication covered",
      "Adult septic-shock hypotension"
    ]
  ],
  "sources": [
    {
      "id": "epipen",
      "title": "EpiPen / EpiPen Jr · Auto-injectors",
      "publisher": "DailyMed / Viatris Specialty",
      "note": "SPL version 37, effective 20230215; current public product labeling.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7560c201-9246-487c-a13b-6295db04274a"
    },
    {
      "id": "auviq",
      "title": "Auvi-Q · Auto-injectors",
      "publisher": "DailyMed / kaleo",
      "note": "SPL version 21, effective 20251002; current public product labeling.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6180fb40-7fca-4602-b3da-ce62b8cd2470"
    },
    {
      "id": "neffy",
      "title": "Neffy · Nasal sprays",
      "publisher": "DailyMed / ARS Pharmaceuticals Operations",
      "note": "SPL version 7, effective 20260409; current public product labeling.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a1758142-a905-401d-8961-05829f51023a"
    },
    {
      "id": "vial",
      "title": "Adrenalin · 1 mg/mL injection",
      "publisher": "DailyMed / Par Health USA",
      "note": "SPL version 24, effective 20260701; current public product labeling.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3b7a4364-668d-4eb2-a20c-04adc35aabe4"
    },
    {
      "id": "premix",
      "title": "Adrenalin · Epinephrine in sodium chloride infusion",
      "publisher": "DailyMed / Par Health USA",
      "note": "SPL version 28, effective 20230801; current public product labeling.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=61b0e2a2-71ed-43d6-b1a7-36d2dae651b5"
    },
    {
      "id": "aha",
      "title": "2025 Adult cardiac arrest algorithm",
      "publisher": "American Heart Association",
      "note": "Current public 2025 ACLS algorithm; clinician IV/IO resuscitation regimen.",
      "url": "https://cpr.heart.org/-/media/CPR-Files/CPR-Guidelines-Files/2025-Accessible/Algorithm-ACLS-CA-LngDscrp-250725-Ed.pdf"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Epinephrine’s indication and route depend on the product.",
      "takeaway": "Anaphylaxis devices are not IV resuscitation preparations.",
      "blocks": [
        {
          "title": "Anaphylaxis",
          "paragraphs": [
            "EpiPen/EpiPen Jr, Auvi-Q, Neffy, and the selected 1 mg/mL Adrenalin vial are labeled for emergency treatment of type I allergic reactions including anaphylaxis. Auvi-Q is labeled from 7.5 kg; Neffy from 15 kg. EpiPen devices have separate weight-based dose selections. Prompt treatment is essential; devices provide emergency supportive therapy and require the product-specific plan for further medical care."
          ],
          "sources": [
            "epipen",
            "auviq",
            "neffy",
            "vial"
          ]
        },
        {
          "title": "Septic shock and cardiac arrest",
          "paragraphs": [
            "The Adrenalin vial and selected premixed IV bags are labeled to increase mean arterial pressure in ADULT hypotension associated with septic shock; premixed bags are not anaphylaxis auto-injectors. Separately, AHA’s adult cardiac-arrest algorithm includes IV/IO epinephrine within clinician-led CPR/resuscitation. That guideline route/regimen is not an approved indication for EpiPen, Auvi-Q, or Neffy and is not a direction to give the undiluted 1 mg/mL vial intravenously. Pediatric/neonatal arrest and other specialized protocols are outside this focused reference."
          ],
          "sources": [
            "vial",
            "premix",
            "aha"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Use the prescribed device and concentration, not a remembered ratio.",
      "takeaway": "Milligrams delivered by nasal and injection products are not equivalent.",
      "blocks": [
        {
          "title": "Anaphylaxis device selection",
          "paragraphs": [
            "The table preserves product-specific weight bands. Device strengths are total delivered doses, not interchangeable nasal/IM doses. At exactly 30 kg, the EpiPen label’s Jr 15–30 kg wording overlaps its ≥30 kg EpiPen band; confirm the prescribed device rather than infer a new cutoff."
          ],
          "sources": [
            "epipen",
            "auviq",
            "neffy"
          ],
          "open": true,
          "table": {
            "headers": [
              "Device / weight",
              "Single dose"
            ],
            "rows": [
              [
                "EpiPen ≥30 kg",
                "0.3 mg into outer thigh; EpiPen Jr label 15–30 kg: 0.15 mg. Lower doses need another suitable product."
              ],
              [
                "Auvi-Q ≥30 kg",
                "0.3 mg; 15–<30 kg: 0.15 mg; 7.5–<15 kg: 0.1 mg, into outer thigh."
              ],
              [
                "Neffy ≥30 kg",
                "2 mg spray into one nostril; 15–<30 kg: 1 mg spray. Below 15 kg use is not established."
              ]
            ]
          }
        },
        {
          "title": "Auto-injector administration",
          "paragraphs": [
            "Inject EpiPen or Auvi-Q into the anterolateral thigh, IM or SC as labeled, through clothing if necessary. Hold a child’s leg still. Never inject these devices IV, into the buttock, hands, feet, or digits. EpiPen: remove the blue safety release, press the orange tip firmly against the outer thigh, and hold for 3 seconds. Auvi-Q: remove the outer case and red safety guard, press the black base against the outer thigh, and hold for 2 seconds; follow voice or printed instructions. Each is single-use; residual medicine cannot be reused. EpiPen requires immediate medical/hospital care. Current Auvi-Q labeling directs a prescriber-defined emergency-assistance plan and permits a second device starting 5 minutes after the first if not improving or worsening. More than two sequential doses need direct medical supervision."
          ],
          "sources": [
            "epipen",
            "auviq"
          ]
        },
        {
          "title": "Neffy nasal administration",
          "paragraphs": [
            "Do not prime, test-spray, or reuse. Insert the nozzle fully until fingers touch the nose, hold straight without angling toward the septum/outer wall, and press firmly. Do not sniff during or after dosing. If no improvement or worsening, give a second NEW spray into the SAME nostril starting 5 minutes after the first. Carry two sprays and follow the clinician’s emergency-assistance plan; more than two sequential epinephrine doses need direct medical supervision. Structural nasal conditions may alter absorption and warrant another route."
          ],
          "sources": [
            "neffy"
          ]
        },
        {
          "title": "Adrenalin vial for anaphylaxis",
          "paragraphs": [
            "Using the exact 1 mg/mL product, adults/children ≥30 kg receive 0.3–0.5 mg (0.3–0.5 mL) IM or SC in the anterolateral thigh, maximum 0.5 mg per injection. Children <30 kg receive 0.01 mg/kg (0.01 mL/kg), maximum 0.3 mg per injection. The vial label allows repetition every 5–10 minutes with clinical/cardiac assessment. Do not repeatedly inject the same site. These professional measurement instructions do not authorize reuse or dose extraction from auto-injectors."
          ],
          "sources": [
            "vial"
          ]
        },
        {
          "title": "Adult septic-shock infusion",
          "paragraphs": [
            "Label IV infusion range is 0.05–2 mcg/kg/min, titrated to the desired MAP; suggested changes are 0.05–0.2 mcg/kg/min every 10–15 minutes, followed by gradual weaning once stable. The 1 mg/mL vial requires dilution: 1 mL into 1, 000 mL of 5% dextrose or 5% dextrose/sodium chloride gives 1 mcg/mL; saline alone is not recommended for THIS vial preparation. The separately labeled premixed sodium-chloride bags require no further dilution and must not have contents withdrawn or medicines added through their infusion port. Use a large vein where possible, check the site, and follow exact label compatibility instructions. Never interchange these preparation rules."
          ],
          "sources": [
            "vial",
            "premix"
          ]
        },
        {
          "title": "Adult cardiac-arrest guideline regimen",
          "paragraphs": [
            "AHA’s 2025 algorithm gives epinephrine 1 mg IV/IO every 3–5 minutes within the full CPR/defibrillation algorithm. This is clinician resuscitation guidance using an appropriate resuscitation preparation and protocol, not home treatment and not a nasal/auto-injector conversion. Other resuscitation concentrations/products and pediatric algorithms require separate verification."
          ],
          "sources": [
            "aha"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Correct route and immediate emergency treatment matter simultaneously.",
      "takeaway": "Coexisting disease does not justify withholding treatment for life-threatening anaphylaxis.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Epinephrine can cause severe hypertension, arrhythmia, myocardial ischemia, pulmonary edema, and renal vasoconstriction. Cardiac disease, hypertension, hyperthyroidism, diabetes, Parkinson’s disease, older age, and interacting medicines can increase adverse effects, but are not contraindications to treatment of life-threatening anaphylaxis. Sulfites in selected anaphylaxis products should not deter emergency administration.",
            "Injection into digits/extremities can compromise blood flow; buttock injection can fail treatment and cause serious infection. Seek assessment after accidental injection or persistent injection-site redness, warmth, swelling, or pain. IV extravasation can cause necrosis; assess free flow/site frequently and manage promptly with the label’s phentolamine infiltration protocol when indicated. Neffy absorption can change with nasal polyps, prior fractures/injury, or surgery; consider another route."
          ],
          "sources": [
            "epipen",
            "auviq",
            "neffy",
            "vial",
            "premix"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "These selected U.S. product labels list no contraindications. Their route/device restrictions, nasal-anatomy warning, dose limits, and infusion precautions remain mandatory. Sulfite sensitivity or cardiovascular disease is not an absolute contraindication to epinephrine for acute life-threatening anaphylaxis."
          ],
          "sources": [
            "epipen",
            "auviq",
            "neffy",
            "vial",
            "premix"
          ]
        },
        {
          "title": "Boxed warning status",
          "paragraphs": [
            "None of the selected labels contains a boxed warning. Absence of a box does not reduce the urgency of anaphylaxis or the risk of IV/concentration errors."
          ],
          "sources": [
            "epipen",
            "auviq",
            "neffy",
            "vial",
            "premix"
          ]
        },
        {
          "title": "Adverse reactions and overdose",
          "paragraphs": [
            "Anxiety, tremor, pallor, sweating, headache, nausea, palpitations, and tachycardia are reported; Neffy additionally causes nasal/throat discomfort, rhinorrhea, or congestion. Serious effects include ischemia, arrhythmia, hypertension, and pulmonary edema. Excess dosing can cause cerebral hemorrhage and metabolic/renal injury; stop or adjust inappropriate exposure and obtain immediate medical/toxicology support. Management is supportive with cardiovascular/respiratory care and selected antagonists/vasodilators as clinically indicated, not a home antidote. Anaphylaxis itself may still require treatment."
          ],
          "sources": [
            "epipen",
            "auviq",
            "neffy",
            "vial",
            "premix"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Interactions can intensify pressor effects or blunt bronchodilation.",
      "takeaway": "Plan monitoring without delaying lifesaving anaphylaxis treatment.",
      "blocks": [
        {
          "title": "Adrenergic and cardiac interactions",
          "paragraphs": [
            "TCAs, MAOIs, COMT inhibitors, thyroid hormones, and certain antihistamines can potentiate effects. Beta blockers can antagonize cardiac/bronchodilator actions, yet nonselective blockade may potentiate pressor effects in infusion labeling; alpha blockers antagonize vasoconstriction. Ergot alkaloids can reverse pressor effects. Cardiac glycosides, diuretics, antiarrhythmics, and some anesthetics increase arrhythmia risk. Review the full product-specific list and monitor clinical response/ECG in supervised treatment."
          ],
          "sources": [
            "epipen",
            "auviq",
            "neffy",
            "vial",
            "premix"
          ]
        },
        {
          "title": "Infusion and nasal-specific considerations",
          "paragraphs": [
            "Infusion labels additionally identify increased hypokalemic effects with potassium-depleting diuretics, corticosteroids, or theophylline; monitor potassium when indicated. Neffy may alter nasal mucosa for up to 2 weeks and increase absorption of other nasal products, including later Neffy doses. These findings do not create an automatic dose-conversion rule or justify delaying emergency treatment."
          ],
          "sources": [
            "vial",
            "premix",
            "neffy"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Device eligibility is weight-based; infusion data are indication-specific.",
      "takeaway": "Treat maternal anaphylaxis promptly during pregnancy or breastfeeding.",
      "blocks": [
        {
          "title": "Pregnancy and lactation",
          "paragraphs": [
            "Current labels describe long human experience without an identified major-birth-defect signal, while animal developmental effects do not establish zero human risk. Anaphylaxis threatens both mother and fetus, so epinephrine treatment should not be delayed. Emergency life-sustaining treatment of septic shock also should not be withheld. Vial/infusion obstetric labeling cautions about inhibition of uterine contractions and uterine vasoconstriction; those labor precautions are not a reason to leave anaphylaxis untreated. Milk/infant data are limited, but poor oral bioavailability and rapid elimination suggest low infant exposure; current Auvi-Q/Neffy/vial labels say not to delay anaphylaxis treatment while breastfeeding."
          ],
          "sources": [
            "epipen",
            "auviq",
            "neffy",
            "vial",
            "premix"
          ]
        },
        {
          "title": "Children and older adults",
          "paragraphs": [
            "Respect each fixed device’s weight band. Auvi-Q use is established ≥7.5 kg and Neffy ≥15 kg; Neffy studies included ages 4 and older, but the current indication is expressed by weight, not an added age 4 contraindication. Vial anaphylaxis dosing is weight-based; safety/effectiveness of selected IV septic-shock products in children is not established. Older adults can be especially sensitive and require cautious titration/monitoring in professional care without postponing emergency anaphylaxis treatment."
          ],
          "sources": [
            "epipen",
            "auviq",
            "neffy",
            "vial",
            "premix"
          ]
        },
        {
          "title": "Renal and hepatic considerations",
          "paragraphs": [
            "Epinephrine is rapidly metabolized in liver, kidneys, and other tissues. Labels do not provide a universal renal/hepatic dose-adjustment table for anaphylaxis devices or septic-shock infusions. Renal vasoconstriction can worsen oliguria/renal function; assess perfusion and kidney function during supervised infusion, and titrate to response rather than invent an organ-stage regimen."
          ],
          "sources": [
            "vial",
            "premix",
            "auviq",
            "neffy"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Alpha and beta actions support vascular tone, cardiac output, and bronchodilation.",
      "takeaway": "Rapid IV clearance does not make devices interchangeable.",
      "blocks": [
        {
          "title": "Mechanism",
          "paragraphs": [
            "Alpha-adrenergic vasoconstriction helps reverse vasodilation and mucosal edema; beta actions increase cardiac contraction/rate and relax bronchial smooth muscle. Dose-dependent vascular effects contribute to infusion responses. These actions explain both benefit and cardiovascular/metabolic toxicity."
          ],
          "sources": [
            "epipen",
            "auviq",
            "neffy",
            "vial",
            "premix"
          ]
        },
        {
          "title": "Pharmacokinetics",
          "paragraphs": [
            "IV epinephrine has an effective plasma half-life under 5 minutes and reaches infusion steady state in about 10–15 minutes; it is degraded primarily by MAO/COMT and mostly eliminated as metabolites. Nasal absorption and its pharmacodynamic profile were assessed separately against injection products and can change with repeated dosing or nasal conditions. The IV half-life is not a guarantee of identical exposure after nasal versus IM dosing; no milligram-equivalence ratio is inferred."
          ],
          "sources": [
            "vial",
            "premix",
            "neffy"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Prepare before exposure and reassess continuously during emergencies.",
      "takeaway": "Practice with the exact device and keep backup doses accessible.",
      "blocks": [
        {
          "title": "Monitoring",
          "paragraphs": [
            "Assess breathing, circulation, mental status, symptom persistence/recurrence, and need for further emergency treatment after anaphylaxis dosing. In supervised IV care monitor blood pressure/MAP, ECG/rhythm, perfusion/urine output, infusion site, glucose, and potassium as clinically indicated; adjust gradually to response. Confirm dose units, route, concentration, pump rate, and compatibility. No one fixed outpatient laboratory interval is provided."
          ],
          "sources": [
            "epipen",
            "auviq",
            "neffy",
            "vial",
            "premix"
          ]
        },
        {
          "title": "Patient counseling",
          "paragraphs": [
            "Use the prescribed device promptly for the recognized allergic emergency and follow its medical-assistance plan; worsening/persistent symptoms need further care. EpiPen labeling explicitly calls for immediate medical care. Carry the prescribed backup pair, practice with the correct trainer, and teach caregivers the exact hold time. Never test a live device or confuse a trainer with medicine. Inspect solution/expiry, replace discolored or expired injectors, hold children still, avoid fingers over needle ends, and dispose of used injectors safely. Neffy: no priming/sniffing; if frozen during an emergency, do not wait for thawing—seek emergency care."
          ],
          "sources": [
            "epipen",
            "auviq",
            "neffy"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Brand, delivered dose, concentration, and route all identify the product.",
      "takeaway": "“Epinephrine” alone does not identify a usable emergency preparation.",
      "blocks": [
        {
          "title": "Representative products",
          "paragraphs": [
            "EpiPen 2-Pak 0.3 mg/0.3 mL has NDC 49502-500-02; Jr 0.15 mg/0.3 mL NDC 49502-501-02. Auvi-Q two-device packs: 0.3 mg 60842-023-02, 0.15 mg 60842-022-02, 0.1 mg 60842-021-02. Neffy two-spray packs: 1 mg 82580-010-02, 2 mg 82580-020-02. Adrenalin single 1 mL vial NDC 42023-159-01 or multidose 30 mL 42023-168-01. Premix representative 2 mg/250 mL carton NDC 42023-273-10. Trainers contain no medicine; other generic injectors/prefilled syringes need their own instructions."
          ],
          "sources": [
            "epipen",
            "auviq",
            "neffy",
            "vial",
            "premix"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Covered auto-injectors: EpiPen 0.3 mg/0.3 mL and Jr 0.15 mg/0.3 mL; Auvi-Q 0.3 mg/0.3 mL, 0.15 mg/0.15 mL, and 0.1 mg/0.1 mL. Neffy delivers 1 or 2 mg per 0.1 mL spray. Adrenalin vial concentration is 1 mg/mL; selected ready-to-infuse 250 mL bags contain 2, 4, 5, 8, or 10 mg (8, 16, 20, 32, or 40 mcg/mL). These concentrations/routes are not interchangeable; other resuscitation formulations and ophthalmic/specialty uses are outside scope."
          ],
          "sources": [
            "epipen",
            "auviq",
            "neffy",
            "vial",
            "premix"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "EpiPen/Auvi-Q: 20–25°C with 15–30°C excursions, protected from light in their cases; EpiPen must not be refrigerated and Auvi-Q must not be frozen. Neffy: 20–25°C with excursions up to 50°C, keep in blister/case, do not freeze; thawed spray may be used, but never wait to thaw during an emergency. Adrenalin vials: 20–25°C, protect from light/freezing; discard unused single-dose contents and multidose vial 30 days after initial use. Vial diluted in labeled dextrose fluids is stable 4 hours at room temperature or 24 hours refrigerated. Premix: 20–25°C, protect from light/freezing, keep foil overwrap until use, discard after 24 hours opening; connected bag stability 24 hours does not extend that discard instruction."
          ],
          "sources": [
            "epipen",
            "auviq",
            "neffy",
            "vial",
            "premix"
          ]
        }
      ]
    }
  ]
};
