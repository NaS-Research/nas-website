// Original formulation-specific clinical summaries.
export const meloxicam = {
  "slug": "meloxicam",
  "name": "Meloxicam",
  "synonym": "Mobic · NSAID",
  "description": "A nonsteroidal anti-inflammatory drug. Standard tablets/suspension, 5/10 mg capsules and IV formulations have distinct indications, doses and population limits.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Recognize cardiovascular and GI emergencies.",
    "text": "Chest pain, stroke symptoms, bloody vomit or black stools require urgent care. Stop and seek assessment for serious rash or allergy. Verify the exact formulation before dosing.",
    "section": "safety",
    "link": "Boxed warning · Cardiovascular and gastrointestinal events"
  },
  "facts": [
    [
      "Therapeutic class",
      "NSAID"
    ],
    [
      "Representative oral brand",
      "Mobic"
    ],
    [
      "Reference focus",
      "Selected tablets, suspension, capsules and IV products"
    ]
  ],
  "sources": [
    {
      "id": "tablet",
      "title": "Meloxicam · Standard oral tablets",
      "publisher": "DailyMed / Unichem",
      "note": "PI August 2024; DailyMed update August 5, 2024. Strengths 7.5/15 mg tablets and ≥60 kg JRA restriction.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5fe76337-eae5-4e5c-96ef-6cfa97983c6e"
    },
    {
      "id": "suspension",
      "title": "Meloxicam ·7.5 mg/5 mL suspension",
      "publisher": "DailyMed / Emerald Therapeutics",
      "note": "PI October 2024; DailyMed update May 29, 2026. Weight-based JRA directions ≥2 years.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=55af77dd-2abc-49a6-990c-399d5a5e7a91"
    },
    {
      "id": "capsule",
      "title": "Meloxicam ·5/10 mg capsules",
      "publisher": "DailyMed / ANI; Novitium",
      "note": "PI October 2024; Medication Guide June 2025; SPL version 5/effective 20250610 shown in Medication Guide. Distinct adult OA dosing.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ce9a8fd7-9bd2-4793-82f3-0fb8f0965d0f"
    },
    {
      "id": "vivlodex",
      "title": "Vivlodex · Original capsule label",
      "publisher": "DailyMed / Iroko",
      "note": "Historical PI October 2015; publication April 8, 2019. Brand context only; current generic capsule directions sourced separately.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fcfd6c24-98d0-4b7b-8336-936899ef61de"
    },
    {
      "id": "iv",
      "title": "Xifyrm · IV meloxicam",
      "publisher": "DailyMed / Azurity",
      "note": "PI June 2025; publication June 18, 2025. Strength 30 mg/mL single-dose vial.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bf2b198c-0726-488a-b911-4fe394e4b56e"
    },
    {
      "id": "anjeso",
      "title": "Anjeso · Regulatory label",
      "publisher": "FDA / Drugs@FDA",
      "note": "FDA PI April 2021, NDA210583/S001, ReferenceID4786652. Historical IV product; current availability assessed separately.",
      "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/210583s001lbl.pdf"
    },
    {
      "id": "status",
      "title": "Anjeso · Current regulatory record",
      "publisher": "FDA / Drugs@FDA",
      "note": "Checked October 1, 2026: discontinued; not withdrawn for safety/effectiveness. The later July 2021 supplement has no label posted in this record.",
      "url": "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=210583"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Arthritis indications and separate adult IV pain use.",
      "takeaway": "A formulation’s indication does not transfer to every product.",
      "blocks": [
        {
          "title": "Labeled oral uses",
          "sources": [
            "tablet",
            "suspension",
            "capsule",
            "vivlodex"
          ],
          "open": true,
          "paragraphs": [
            "Standard tablets/suspension treat OA and RA signs/symptoms. Tablets cover pauciarticular/polyarticular JRA at≥60 kg; suspension covers JRA from age 2. The 5/10 mg capsules(Vivlodex formulation) are for adult OA pain."
          ]
        },
        {
          "title": "Intravenous use and status",
          "sources": [
            "iv",
            "anjeso",
            "status"
          ],
          "paragraphs": [
            "Xifyrm treats adult moderate-to-severe pain alone or with non-NSAID analgesics. Delayed onset makes IV meloxicam unsuitable alone when rapid relief is required. Anjeso had this indication but is listed discontinued, for reasons other than safety/effectiveness."
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Use the lowest effective dose for the shortest duration.",
      "takeaway": "Do not interchange formulations by milligram strength.",
      "blocks": [
        {
          "title": "Adult formulation-specific regimens",
          "sources": [
            "tablet",
            "suspension",
            "capsule",
            "iv",
            "anjeso"
          ],
          "open": true,
          "table": {
            "headers": [
              "Product",
              "Label regimen"
            ],
            "rows": [
              [
                "Standard tablet/suspension · OA/RA",
                "7.5 mg orally once daily; may increase to 15 mg/day."
              ],
              [
                "5/10 mg capsule · adult OA",
                "5 mg once daily; may increase to 10 mg/day."
              ],
              [
                "Xifyrm IV; historical Anjeso",
                "30 mg once daily by IV bolus over 15 seconds. Hydrate first; assess need for short-acting non-NSAID rescue."
              ]
            ]
          }
        },
        {
          "title": "Pediatric JRA directions",
          "sources": [
            "tablet",
            "suspension",
            "capsule",
            "iv"
          ],
          "paragraphs": [
            "Tablets: 7.5 mg once daily only at≥60 kg; do not use below 60 kg. Suspension: age≥2, 0.125 mg/kg once daily, max 7.5 mg; 1.5 mg/mL concentration. Higher doses gave no additional benefit. Capsule and IV pediatric safety/effectiveness are unestablished."
          ]
        },
        {
          "title": "Renal and hepatic considerations",
          "sources": [
            "tablet",
            "capsule",
            "iv",
            "anjeso"
          ],
          "paragraphs": [
            "Standard oral products: severe renal impairment not recommended; dialysis maximum 7.5 mg/day for tablet/suspension versus 5 mg/day for 5/10 mg capsules. IV products: not recommended with moderate/severe renal insufficiency; contraindicated when such patients risk renal failure from volume depletion. Mild/moderate hepatic impairment generally needs no oral adjustment; severe disease is poorly studied and warrants caution/monitoring. IV hepatic data are limited. For IV therapy, consider dose reduction and adverse-effect monitoring in known/suspected poor CYP2C9 metabolizers; the label gives no fixed alternate regimen."
          ]
        },
        {
          "title": "Administration and switching",
          "sources": [
            "tablet",
            "suspension",
            "capsule"
          ],
          "paragraphs": [
            "Standard tablets/suspension may be taken with or without food; gently shake suspension and measure accurately. Labels warn against assuming equivalent exposure across oral formulations. The suspension label specifically permits corresponding 7.5/15 mg standard-tablet substitution, alongside a broader non-interchangeability warning; prescriber/pharmacist must verify the exact switch. 5/10 mg capsules are not equivalent to standard tablets."
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Cardiovascular, GI, renal and hypersensitivity risks.",
      "takeaway": "Serious events can occur without warning.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "sources": [
            "tablet",
            "capsule",
            "iv"
          ],
          "open": true,
          "tone": "warning",
          "paragraphs": [
            "Avoid after recent MI or with severe heart failure unless benefit outweighs risk. Monitor BP, edema, renal function and potassium; correct dehydration first. Stop for suspected liver injury, serious skin reaction or DRESS. NSAIDs can mask infection and cause anemia/bleeding."
          ]
        },
        {
          "title": "Contraindications",
          "sources": [
            "tablet",
            "capsule",
            "iv",
            "anjeso"
          ],
          "paragraphs": [
            "Meloxicam/product hypersensitivity, prior serious NSAID skin reaction, aspirin/NSAID-triggered asthma or allergic reactions, and CABG surgery. IV products additionally contraindicate moderate/severe renal insufficiency with volume-depletion renal-failure risk."
          ]
        },
        {
          "title": "Boxed warning · Cardiovascular and gastrointestinal events",
          "sources": [
            "tablet",
            "suspension",
            "capsule",
            "iv",
            "anjeso"
          ],
          "paragraphs": [
            "Selected products warn of potentially fatal MI/stroke and GI bleeding, ulceration or perforation. Risk may begin early; older adults and prior ulcer/GI-bleeding patients face greater GI risk. CABG use is contraindicated."
          ]
        },
        {
          "title": "Adverse reactions",
          "sources": [
            "tablet",
            "capsule",
            "iv"
          ],
          "paragraphs": [
            "Oral effects include dyspepsia, diarrhea, nausea, headache and edema. IV trials commonly reported constipation, increased GGT and anemia. Severe allergy, skin reactions, hepatic/renal injury and blood disorders are reported. Overdose requires urgent supportive care; no specific antidote exists and high protein binding limits dialysis usefulness."
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Assess bleeding, renal effects and anticancer treatment.",
      "takeaway": "Avoid adding another NSAID.",
      "blocks": [
        {
          "title": "Clinically relevant interactions",
          "sources": [
            "tablet",
            "capsule",
            "iv"
          ],
          "open": true,
          "items": [
            "Anticoagulants, aspirin, antiplatelets, SSRIs/SNRIs: monitor bleeding. Analgesic-dose aspirin/other NSAIDs are generally not recommended.",
            "ACE inhibitors/ARBs/beta-blockers: monitor BP; assess renal function/hydration with ACE inhibitors/ARBs.",
            "Diuretics: monitor renal function and diuretic/BP response.",
            "Lithium, methotrexate and cyclosporine: monitor toxicity; capsule label also directs digoxin-level monitoring.",
            "Pemetrexed: coordinate oncology-directed interruption at least 5 days before, treatment day and 2 days after; monitor toxicity at CrCl 45–79 mL/min. Standard-tablet label advises against concomitant use below 45."
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Fetal renal/ductal risks and limited milk data.",
      "takeaway": "Pregnancy restrictions begin around 20 weeks.",
      "blocks": [
        {
          "title": "Pregnancy and reproductive potential",
          "sources": [
            "suspension",
            "capsule",
            "iv"
          ],
          "paragraphs": [
            "Between about 20–30 weeks, use only when necessary at lowest dose/shortest duration; consider amniotic-fluid ultrasound beyond 48 hours and stop for oligohydramnios. Avoid at about 30 weeks onward. NSAIDs may reversibly delay ovulation; consider withdrawal when investigating infertility."
          ]
        },
        {
          "title": "Lactation, children and older adults",
          "sources": [
            "capsule",
            "suspension",
            "iv"
          ],
          "paragraphs": [
            "Human milk/infant-effect data are unavailable; individualize breastfeeding decisions. JRA age/weight limits apply by oral form; do not extrapolate to capsules/IV. Older adults face greater GI, CV and renal risk. Xifyrm also describes animal male-fertility findings of uncertain human relevance."
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "COX inhibition reduces prostaglandin synthesis.",
      "takeaway": "Rapid IV delivery does not guarantee rapid pain relief.",
      "blocks": [
        {
          "title": "Mechanism of action",
          "sources": [
            "capsule"
          ],
          "paragraphs": [
            "Analgesic/anti-inflammatory activity involves COX-1/COX-2 inhibition; the complete mechanism is not established."
          ]
        },
        {
          "title": "Pharmacokinetics",
          "sources": [
            "tablet",
            "iv"
          ],
          "facts": [
            [
              "Binding",
              "Approximately 99% protein-bound."
            ],
            [
              "Metabolism",
              "Extensive hepatic metabolism; CYP2C9 with smaller CYP3A4 contribution."
            ],
            [
              "Half-life",
              "Approximately 15–20 hours orally; selected Xifyrm study mean 21 hours."
            ],
            [
              "Clearance",
              "Metabolites excreted in urine/feces; not effectively dialyzable."
            ]
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Assess benefit, bleeding, BP and organ function.",
      "takeaway": "Read the exact product’s Medication Guide.",
      "blocks": [
        {
          "title": "Monitoring parameters",
          "sources": [
            "tablet",
            "iv"
          ],
          "open": true,
          "items": [
            "Assess pain/function and duration; IV product is not for long-term treatment.",
            "Monitor BP, edema and renal function/potassium in at-risk patients.",
            "Consider periodic CBC/chemistry with prolonged oral NSAID treatment; assess hemoglobin for anemia symptoms.",
            "Check GI bleeding, skin/allergy and liver-injury symptoms; pregnancy ultrasound as directed."
          ]
        },
        {
          "title": "Patient counseling information",
          "sources": [
            "suspension",
            "capsule",
            "iv"
          ],
          "paragraphs": [
            "Seek emergency care for chest pain, focal weakness, breathing difficulty or GI bleeding. Stop for rash or liver-injury symptoms and obtain assessment. Check OTC products for NSAIDs, discuss aspirin before combining, and verify formulation each refill."
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Standard tablets and low-dose capsules are distinct.",
      "takeaway": "Do not infer equivalence from ingredient name alone.",
      "blocks": [
        {
          "title": "Representative oral product · Unichem tablet",
          "sources": [
            "tablet"
          ],
          "open": true,
          "facts": [
            [
              "Strength / appearance",
              "7.5 mg light-yellow round tablet."
            ],
            [
              "Imprint",
              "U and L /7.5."
            ],
            [
              "Distributor",
              "Unichem Pharmaceuticals(USA), Inc."
            ],
            [
              "Example NDC",
              "29300-124-13 ·30 tablets."
            ],
            [
              "U. S. status",
              "Prescription medicine."
            ]
          ],
          "links": [
            {
              "title": "View exact tablet label",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5fe76337-eae5-4e5c-96ef-6cfa97983c6e"
            }
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "sources": [
            "tablet",
            "suspension",
            "capsule",
            "iv",
            "anjeso"
          ],
          "facts": [
            [
              "Standard oral",
              "7.5/15 mg tablets; 7.5 mg/5 mL suspension."
            ],
            [
              "Selected low-dose capsule",
              "5/10 mg; separate dose/exposure limits."
            ],
            [
              "IV",
              "Xifyrm 30 mg/mL, 1 mL single-dose vial; historical Anjeso 30 mg/mL."
            ],
            [
              "Outside scope",
              "ODT, other suspensions and combination/local-surgical products have separate labels."
            ]
          ]
        },
        {
          "title": "Storage and handling",
          "sources": [
            "tablet",
            "suspension",
            "capsule",
            "iv"
          ],
          "paragraphs": [
            "Tablets: 20–25°C, dry, tight container. Selected suspension: 25°C, excursions 15–30°C, tightly closed. Capsules: 20–25°C, original tightly closed bottle for moisture protection. Xifyrm: 20–25°C, carton for light protection; inspect and discard unused vial contents."
          ]
        }
      ]
    }
  ]
};
