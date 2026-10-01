// Original clinical summaries checked against the product-specific public sources below.
export const propranolol = {
  "slug": "propranolol",
  "name": "Propranolol",
  "synonym": "Inderal LA · InnoPran XL · Hemangeol",
  "description": "Nonselective beta blocker with product-specific adult cardiovascular and infant hemangioma use.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Prevent hypoglycemia and abrupt withdrawal",
    "text": "Feed infants with Hemangeol and hold doses during poor feeding/vomiting. Adults need a supervised taper; sudden withdrawal can worsen ischemia.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Class",
      "Nonselective beta blocker"
    ],
    [
      "Adult forms",
      "IR and distinct ER capsules"
    ],
    [
      "Infant product",
      "Hemangeol 4.28 mg/mL HCl"
    ]
  ],
  "sources": [
    {
      "id": "ir",
      "title": "Propranolol immediate-release tablets · Current full prescribing information",
      "publisher": "Amneal / DailyMed",
      "note": "Current public product label; clinical revision Rev. 03-2026-04. SPL version/effective date audited separately.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=14d0c95d-418f-40a8-bad3-e20c82424960"
    },
    {
      "id": "la",
      "title": "Inderal LA · Current full prescribing information",
      "publisher": "ANI / DailyMed",
      "note": "Current public product label; clinical revision 04/26. SPL version/effective date audited separately.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=35d28979-36b1-4630-b85e-a44e0a443734"
    },
    {
      "id": "xl",
      "title": "InnoPran XL · Current full prescribing information",
      "publisher": "ANI / DailyMed",
      "note": "Current public product label; clinical revision 04/26. SPL version/effective date audited separately.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd5601b3-4d87-4c3b-acac-b476e787609d"
    },
    {
      "id": "hem",
      "title": "Hemangeol oral solution · Current full prescribing information",
      "publisher": "Eton / DailyMed",
      "note": "Current public product label; clinical revision 08/2026 (PI); 07/2026 (Medication Guide/IFU). SPL version/effective date audited separately.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4f8341ee-dac6-1ca9-e063-6394a90ac960"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Propranolol uses depend on the immediate-release, extended-release or infant product.",
      "takeaway": "Confirm the product and indication before choosing a dose.",
      "blocks": [
        {
          "title": "Adult immediate-release indications",
          "paragraphs": [
            "The reviewed IR tablet label covers hypertension, coronary angina, ventricular-rate control in atrial fibrillation, reduced cardiovascular mortality after a clinically stable myocardial infarction, migraine prevention, essential tremor, symptomatic hypertrophic subaortic stenosis and pheochromocytoma as an adjunct to alpha blockade. It does not treat hypertensive emergencies or an active migraine attack."
          ],
          "sources": [
            "ir"
          ]
        },
        {
          "title": "Long-acting product limits",
          "paragraphs": [
            "Inderal LA is labeled for hypertension, coronary angina, migraine prevention and hypertrophic subaortic stenosis. InnoPran XL is labeled for hypertension only. Do not transfer all IR indications to either extended-release product."
          ],
          "sources": [
            "la",
            "xl"
          ]
        },
        {
          "title": "Infant hemangioma and scope",
          "paragraphs": [
            "Hemangeol treats proliferating infantile hemangioma requiring systemic therapy. Initiate at age 5 weeks to 5 months using its own weight-based oral solution schedule. Portal-hypertension regimens and other off-label uses are outside this label-based profile."
          ],
          "sources": [
            "hem"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Adult oral formulations and infant solution have separate schedules.",
      "takeaway": "Do not substitute products or concentration units without a prescriber plan.",
      "blocks": [
        {
          "title": "Adult immediate-release dosing",
          "paragraphs": [
            "Individualize response and tolerability. The following are label regimens, not interchangeable maximum doses. Divided daily doses must remain divided."
          ],
          "sources": [
            "ir"
          ],
          "table": {
            "headers": [
              "Indication",
              "Labeled regimen / limits"
            ],
            "rows": [
              [
                "Hypertension",
                "Start 40 mg twice daily; usual maintenance 120–240 mg/day. Some patients require up to 640 mg/day; assess end-of-interval control and whether three daily doses are needed."
              ],
              [
                "Angina",
                "80–320 mg/day divided into 2, 3 or 4 doses."
              ],
              [
                "Atrial fibrillation",
                "10–30 mg three or four times daily before meals and at bedtime."
              ],
              [
                "After myocardial infarction",
                "Recommended 180–240 mg/day divided. Trial began 40 mg three times daily, then 60–80 mg three times daily after 1 month; higher-dose mortality benefit is unestablished."
              ],
              [
                "Migraine prevention",
                "Start 80 mg/day divided; usual 160–240 mg/day. If ineffective 4–6 weeks after maximum dose, discontinue gradually."
              ],
              [
                "Essential tremor",
                "Start 40 mg twice daily; usual optimal response 120 mg/day, sometimes 240–320 mg/day."
              ],
              [
                "Hypertrophic subaortic stenosis",
                "20–40 mg three or four times daily before meals and at bedtime."
              ],
              [
                "Pheochromocytoma, with alpha blockade",
                "Operable: 60 mg/day divided for 3 days before surgery. Inoperable: 30 mg/day divided as adjunctive therapy."
              ]
            ]
          }
        },
        {
          "title": "Inderal LA once-daily regimens",
          "paragraphs": [
            "Inderal LA is not a simple mg-for-mg substitute for divided IR dosing. Blood levels differ; retitrate and assess response near the end of 24 hours. The label has not studied food effects."
          ],
          "sources": [
            "la"
          ],
          "table": {
            "headers": [
              "Indication",
              "Once-daily oral regimen"
            ],
            "rows": [
              [
                "Hypertension",
                "Start 80 mg; usual maintenance 120–160 mg. Some patients require 640 mg; individualize."
              ],
              [
                "Angina",
                "Start 80 mg; increase at 3–7-day intervals; average optimal 160 mg. Safety/value above 320 mg/day unestablished."
              ],
              [
                "Migraine prevention",
                "Start 80 mg; usual 160–240 mg. Assess after 4–6 weeks at maximum."
              ],
              [
                "Hypertrophic subaortic stenosis",
                "80–160 mg."
              ]
            ]
          }
        },
        {
          "title": "InnoPran XL bedtime regimen",
          "paragraphs": [
            "Start 80 mg once daily at bedtime and titrate to 120 mg if needed. Doses above 120 mg provide no additional blood-pressure effect. Take consistently either with food or on an empty stomach. Full blood-pressure response usually takes 2–3 weeks; this is a distinct release profile, not an IR dosing schedule."
          ],
          "sources": [
            "xl"
          ]
        },
        {
          "title": "Hemangeol infant titration",
          "paragraphs": [
            "For the 4.28 mg/mL hydrochloride solution, doses below are mL/kg PER DOSE, twice daily at least 9 hours apart. Reassess weight and readjust the prescribed mL dose periodically. Maintain the final regimen for 6 months; recurrence may warrant a clinician-directed restart."
          ],
          "sources": [
            "hem"
          ],
          "table": {
            "headers": [
              "Treatment stage",
              "Volume per dose",
              "Frequency"
            ],
            "rows": [
              [
                "Week 1",
                "0.15 mL/kg",
                "Twice daily"
              ],
              [
                "Week 2",
                "0.3 mL/kg",
                "Twice daily"
              ],
              [
                "From week 3",
                "0.4 mL/kg",
                "Twice daily"
              ]
            ]
          }
        },
        {
          "title": "Infant concentration and source conversion review",
          "paragraphs": [
            "The current Hemangeol label pairs its volume instructions with parenthetical mg/kg values that are not consistently reconciled with the stated hydrochloride/base concentration. This profile preserves the explicit labeled mL/kg schedule and does not supply a recalculated mg/kg regimen. Confirm the actual prescribed mL dose and concentration with the treating specialist/pharmacist; this discrepancy remains a source-review question."
          ],
          "sources": [
            "hem"
          ]
        },
        {
          "title": "Feeding, observation and dose loss",
          "paragraphs": [
            "Give Hemangeol during or immediately after a feeding; skip when not feeding or vomiting, and resume only when feeding normally under the care plan. Observe heart rate and blood pressure for 2 hours after initiation or each increase. If an infant spits up or the full dose is uncertain, do not repeat it; wait for the next scheduled dose. Use the supplied oral syringe."
          ],
          "sources": [
            "hem"
          ]
        },
        {
          "title": "Stopping adult treatment",
          "paragraphs": [
            "Abrupt withdrawal can worsen ischemia. For chronic InnoPran XL, taper over 1–2 weeks with monitoring. IR and Inderal LA labels advise reduction over at least a few weeks; migraine discontinuation also requires a gradual plan. Do not stop on your own, including before surgery."
          ],
          "sources": [
            "ir",
            "la",
            "xl"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Nonselective beta blockade can impair breathing, circulation and recognition of low glucose.",
      "takeaway": "Urgent symptoms include wheezing, fainting, severe low glucose and worsening heart failure.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Monitor bradycardia, AV block, hypotension and worsening heart failure. Bronchospasm risk is important even beyond diagnosed asthma. Propranolol can mask hypoglycemia and provoke severe/prolonged events, especially with fasting, vomiting, infancy, diabetes or increased metabolic demand. It can mask hyperthyroidism; abrupt withdrawal may precipitate thyroid storm.",
            "Hemangeol requires interruption for lower respiratory infection with dyspnea/wheezing. Stop and evaluate severe/symptomatic bradycardia or hypotension; its label uses heart rate <80/min and systolic pressure <50 mmHg as severe thresholds. PHACE-associated cerebrovascular abnormalities may increase stroke risk: assess infants with large facial hemangioma before treatment.",
            "Serious allergy and severe skin reactions are reported. Beta blockade may reduce response to usual epinephrine doses during anaphylaxis. Inform the surgical/anesthesia team; do not independently withhold chronic therapy."
          ],
          "sources": [
            "ir",
            "la",
            "xl",
            "hem"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "Adult IR/Inderal LA: cardiogenic shock, sinus bradycardia, greater-than-first-degree AV block, bronchial asthma or hypersensitivity. InnoPran XL additionally specifies decompensated heart failure and sick sinus syndrome, with a permanent-pacemaker exception for its conduction contraindication.",
            "Hemangeol: corrected age <5 weeks after prematurity, weight <2 kg, asthma/history of bronchospasm, heart rate <80/min, greater-than-first-degree heart block, decompensated heart failure, blood pressure <50/30 mmHg, pheochromocytoma or hypersensitivity. Its pheochromocytoma contraindication differs from adult adjunctive IR use."
          ],
          "sources": [
            "ir",
            "la",
            "xl",
            "hem"
          ]
        },
        {
          "title": "Boxed-warning review and withdrawal",
          "paragraphs": [
            "The current reviewed labels place cardiac ischemia after abrupt withdrawal in their warnings sections; they do not display a separate boxed-warning section in these current SPLs. Earlier InnoPran XL labels used a box. The withdrawal risk remains clinically important regardless of presentation. Hemangeol has serious hypoglycemia warnings and a Medication Guide. Check the exact dispensed product label."
          ],
          "sources": [
            "ir",
            "la",
            "xl",
            "hem"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Adult reports include fatigue, dizziness, sleep/mood disturbances, GI symptoms, cold extremities, bradycardia and hypotension; bronchospasm, heart failure and severe skin/allergic reactions warrant urgent attention. InnoPran XL trials commonly reported fatigue, dizziness and constipation. Hemangeol trials commonly reported sleep disturbances, aggravated respiratory infections, diarrhea and vomiting."
          ],
          "sources": [
            "ir",
            "la",
            "xl",
            "hem"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Check drugs affecting conduction, exposure, blood pressure and glucose.",
      "takeaway": "Review the infant’s medicines and the breastfeeding parent’s medicines.",
      "blocks": [
        {
          "title": "Conduction and cardiovascular combinations",
          "paragraphs": [
            "Verapamil/diltiazem, digoxin and antiarrhythmics can add bradycardia, block or cardiac failure risk. Propranolol can increase propafenone exposure. Monitor closely and avoid inappropriate combinations. If clonidine is also used, its withdrawal needs a coordinated plan: the XL label advises withdrawing the beta blocker several days before clonidine, while respecting propranolol taper requirements."
          ],
          "sources": [
            "ir",
            "la",
            "xl"
          ]
        },
        {
          "title": "Metabolic interactions",
          "paragraphs": [
            "CYP2D6 inhibitors such as fluoxetine/paroxetine/quinidine, CYP1A2 inhibitors such as ciprofloxacin/fluvoxamine and CYP2C19 inhibitors such as fluconazole can raise exposure: monitor heart rate and pressure. Inducers such as rifampin/phenytoin and smoking can reduce effect. Cholestyramine/colestipol can reduce levels. Medication changes may require reassessment."
          ],
          "sources": [
            "ir",
            "la",
            "xl"
          ]
        },
        {
          "title": "Other clinically important interactions",
          "paragraphs": [
            "Monitor prothrombin time/INR with warfarin. Alpha blockers and MAO inhibitors/tricyclic antidepressants can increase hypotension; NSAIDs can weaken antihypertensive response. IR/LA labels describe increased rizatriptan/zolmitriptan exposure; use their own product-specific interaction instructions."
          ],
          "sources": [
            "ir",
            "la",
            "xl"
          ]
        },
        {
          "title": "Infant and lactating-parent medication review",
          "paragraphs": [
            "Hemangeol interactions include medicines slowing cardiac conduction or changing propranolol metabolism. Corticosteroids can increase hypoglycemia risk. Review medications taken by a breastfeeding parent because milk exposure may interact with the infant’s treatment; do not stop breastfeeding or medicines without advice."
          ],
          "sources": [
            "hem"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Age, organ function and pregnancy modify treatment decisions.",
      "takeaway": "The adult tablet label does not establish infant dosing.",
      "blocks": [
        {
          "title": "Renal, hepatic and older adults",
          "paragraphs": [
            "Adult IR/LA labels advise caution in renal or hepatic impairment without a fixed adjustment table. InnoPran XL specifies starting at its lowest dose, 80 mg once daily, in either impairment and monitoring marked bradycardia/hypotension. Exposure may rise in organ impairment; older adults require cautious dose selection. Propranolol is not significantly dialyzable."
          ],
          "sources": [
            "ir",
            "la",
            "xl"
          ]
        },
        {
          "title": "Pediatric boundaries",
          "paragraphs": [
            "Adult IR, Inderal LA and InnoPran XL safety/effectiveness are not established for pediatric use in these labels. Hemangeol is the infant-specific approved product; use its initiation window, corrected-age/weight contraindications and monitoring. Safety/effectiveness beyond age 1 year and in infants with renal/hepatic impairment are not established."
          ],
          "sources": [
            "ir",
            "la",
            "xl",
            "hem"
          ]
        },
        {
          "title": "Pregnancy and lactation",
          "paragraphs": [
            "Current InnoPran XL labeling describes no identified drug-associated major-birth-defect or miscarriage signal in published studies, but fetal-growth reports vary. Near-delivery exposure warrants neonatal monitoring for bradycardia, hypoglycemia and respiratory depression. IR/LA labels also describe fetal/neonatal concerns. Propranolol enters milk; discuss maternal need and infant risk rather than assuming absence of exposure. Hemangeol is not an adult pregnancy product."
          ],
          "sources": [
            "ir",
            "la",
            "xl",
            "hem"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Propranolol blocks beta1 and beta2 receptors and undergoes extensive hepatic first-pass metabolism.",
      "takeaway": "Release profile affects timing, exposure and product substitution.",
      "blocks": [
        {
          "title": "Mechanism and clinical effect",
          "paragraphs": [
            "Nonselective beta blockade lowers heart rate, contractility and AV conduction and reduces responses to sympathetic stimulation. Beta2 blockade contributes to bronchospasm. Antihypertensive and antimigraine mechanisms are incompletely established; Hemangeol’s hemangioma mechanism is not fully understood."
          ],
          "sources": [
            "ir",
            "la",
            "xl",
            "hem"
          ]
        },
        {
          "title": "Absorption, metabolism and elimination",
          "paragraphs": [
            "Oral absorption is extensive, but hepatic first-pass metabolism leaves about 25% systemically available on average. Propranolol is about 90% protein-bound, crosses the brain/placenta and is metabolized through CYP2D6, CYP1A2 and CYP2C19 pathways; metabolites leave mainly in urine. Hemangeol’s infant study found a median half-life around 3.5 hours."
          ],
          "sources": [
            "ir",
            "la",
            "xl",
            "hem"
          ]
        },
        {
          "title": "Formulation timing",
          "paragraphs": [
            "Inderal LA peaks at about 6 hours and has an apparent plasma half-life about 10 hours; its daily exposure differs from divided IR. Bedtime InnoPran XL has a delayed release lag and fasting steady-state peak about 12–14 hours after dosing; a high-fat meal shifts timing. These kinetics support each product’s instructions rather than a universal interchange rule."
          ],
          "sources": [
            "la",
            "xl"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Monitor response, circulation, breathing and glucose risk alongside adherence.",
      "takeaway": "Do not independently stop treatment or repeat an uncertain infant dose.",
      "blocks": [
        {
          "title": "Adult monitoring and counseling",
          "paragraphs": [
            "Assess pressure/pulse and indication-specific response, including end-of-interval control after a formulation change. Report worsening dyspnea, weight gain, fainting, wheezing or serious skin reactions. Learn low-glucose symptoms that remain detectable despite beta blockade, and discuss fasting/vomiting promptly. Tell clinicians about propranolol before procedures."
          ],
          "sources": [
            "ir",
            "la",
            "xl"
          ]
        },
        {
          "title": "Infant safety plan",
          "paragraphs": [
            "Confirm weight, concentration and syringe mL markings; feed with each dose and maintain normal feeding. Parents need an explicit illness/fasting hold plan. Pale/blue skin, sweating, unusual sleepiness, poor feeding, breathing pauses or seizures may signal hypoglycemia: stop the medicine and get immediate care. Do not give anything by mouth to an unconscious infant."
          ],
          "sources": [
            "hem"
          ]
        },
        {
          "title": "Overdose or severe beta blockade",
          "paragraphs": [
            "Suspected overdose requires emergency evaluation, glucose/cardiac monitoring and supportive treatment. Bradycardia, hypotension, block, bronchospasm or hypoglycemia may occur. Propranolol is not significantly removed by dialysis. Do not attempt home emesis or improvise antidote doses."
          ],
          "sources": [
            "ir",
            "la",
            "xl",
            "hem"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Identify strength, release technology and infant solution concentration explicitly.",
      "takeaway": "An imprint or brand example does not identify every marketed product.",
      "blocks": [
        {
          "title": "Representative product identity",
          "paragraphs": [
            "Reviewed Amneal 10 mg IR tablet: orange, scored, PLIVA 467; 100-count NDC 69238-2077-1. Inderal LA 80 mg capsule is light blue, with three rings and INDERAL LA 80; 30-count NDC 62559-521-30. InnoPran XL 80 mg is gray/white, marked InnoPran XL, 80 and two bands; 30-count NDC 62559-590-30. Hemangeol current Eton 50 mL bottle NDC 71863-132-50 (120 mL: 71863-132-12)."
          ],
          "sources": [
            "ir",
            "la",
            "xl",
            "hem"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Reviewed IR tablets: 10, 20, 40, 60 and 80 mg hydrochloride. Inderal LA capsules: 60, 80, 120 and 160 mg. InnoPran XL capsules: 80 and 120 mg. Hemangeol oral solution: 4.28 mg/mL hydrochloride, equivalent to 3.75 mg/mL propranolol base, supplied with a 5 mL oral syringe. Other liquids, injectable formulations and generics require their own labels."
          ],
          "sources": [
            "ir",
            "la",
            "xl",
            "hem"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "IR: 20–25°C, light protection and a tight light-resistant container. Inderal LA: 20–25°C (excursions 15–30°C); protect from light, moisture, freezing and excessive heat. InnoPran XL: 25°C (excursions 15–30°C), tightly closed. Hemangeol: 20–25°C (excursions 15–30°C), original box; do not freeze or shake; discard opened bottle after 2 months and clean the oral syringe as directed."
          ],
          "sources": [
            "ir",
            "la",
            "xl",
            "hem"
          ]
        }
      ]
    }
  ]
};
