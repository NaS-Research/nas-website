// Original label-specific clinical summaries.
export const hydrochlorothiazide = {
  "slug": "hydrochlorothiazide",
  "name": "Hydrochlorothiazide",
  "synonym": "HCTZ · Thiazide diuretic",
  "description": "An oral diuretic and antihypertensive. A focused reference for the selected tablets and 12.5 mg capsules, with distinct label directions and fluid, electrolyte and skin-risk monitoring.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Monitor fluids and electrolytes.",
    "text": "Severe weakness, confusion, fainting or reduced urine needs prompt assessment. New eye pain or sudden blurred vision requires urgent care and rapid discontinuation for suspected drug-induced angle closure.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Thiazide diuretic"
    ],
    [
      "Common abbreviation",
      "HCTZ"
    ],
    [
      "Reference focus",
      "Single-ingredient oral tablets and capsules"
    ]
  ],
  "sources": [
    {
      "id": "tablet",
      "title": "Hydrochlorothiazide · 12.5, 25 and 50 mg tablets",
      "publisher": "DailyMed / GSMS; Leading Pharma",
      "note": "Clinical text revision January 2026; DailyMed publication update July 6, 2026. Full tablet label, pediatric directions and package panels.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a85f69f5-ba97-478d-e053-2a95a90a0a97"
    },
    {
      "id": "capsule",
      "title": "Hydrochlorothiazide · 12.5 mg capsules",
      "publisher": "DailyMed / Westminster; ScieGen",
      "note": "Clinical text revision February 2026; DailyMed publication update March 17, 2026. Adult hypertension dosing and product-specific population limits.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0fc94bc2-fa38-439a-a609-1b4130cdacb1"
    },
    {
      "id": "lactation",
      "title": "Hydrochlorothiazide · Lactation",
      "publisher": "LactMed / National Library of Medicine",
      "note": "Revised September 15, 2025. Public monograph: dose-dependent milk-supply considerations and limited infant exposure evidence.",
      "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK500965/"
    },
    {
      "id": "sentinel",
      "title": "Hydrochlorothiazide · Skin cancer labeling change",
      "publisher": "FDA Sentinel Initiative",
      "note": "August 20, 2020 regulatory evidence summary; observational association informing current labels.",
      "url": "https://www.sentinelinitiative.org/news-events/fda-safety-communications-labeling-changes/fda-labeling-change-hydrochlorothiazide-and"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Hypertension and selected causes of edema.",
      "takeaway": "Check which indication the exact product label supports.",
      "blocks": [
        {
          "title": "Labeled oral indications",
          "sources": [
            "tablet",
            "capsule"
          ],
          "open": true,
          "paragraphs": [
            "The tablet label covers hypertension alone or with other antihypertensives, and adjunctive edema treatment associated with heart failure, cirrhosis, corticosteroid/estrogen therapy or renal disorders. The selected 12.5 mg capsule label is for hypertension."
          ]
        },
        {
          "title": "Pregnancy-related edema",
          "sources": [
            "tablet"
          ],
          "paragraphs": [
            "Routine diuresis in a healthy pregnancy is inappropriate; hydrochlorothiazide does not prevent or treat preeclampsia. Physiologic dependent edema is generally managed without diuretics. Pathologic edema requires an individualized clinical assessment."
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Individualize the smallest effective oral dose.",
      "takeaway": "Higher edema doses are not hypertension targets.",
      "blocks": [
        {
          "title": "Adult oral regimens",
          "sources": [
            "tablet",
            "capsule"
          ],
          "open": true,
          "table": {
            "headers": [
              "Selected product / indication",
              "Label directions"
            ],
            "rows": [
              [
                "12.5 mg capsule · hypertension",
                "Start one capsule once daily; doses above 50 mg/day are not recommended."
              ],
              [
                "Tablet · hypertension",
                "Start 25 mg daily; may increase to 50 mg daily in one or two doses. Above 50 mg increases potassium loss."
              ],
              [
                "Tablet · edema",
                "25–100 mg/day in one or divided doses. Selected patients may use alternate days or 3–5 days/week under clinician direction."
              ]
            ]
          }
        },
        {
          "title": "Pediatric tablet directions",
          "sources": [
            "tablet",
            "capsule"
          ],
          "paragraphs": [
            "Tablet label: 1–2 mg/kg/day in one or two doses; maximum 37.5 mg/day up to age 2 and 100 mg/day at ages 2–12. Infants under 6 months may require up to 3 mg/kg/day in two doses under specialist supervision. Pediatric evidence is empiric/published experience, without well-controlled trials. Capsule safety and effectiveness in children are not established."
          ]
        },
        {
          "title": "Hepatic and renal impairment",
          "sources": [
            "tablet"
          ],
          "paragraphs": [
            "Anuria is contraindicated. Severe renal disease warrants caution because azotemia and accumulation can occur; consider withholding or stopping for progressive renal impairment. No fixed creatinine-clearance adjustment table is supplied by these labels. In hepatic impairment, even small fluid/electrolyte shifts can precipitate coma; individualize carefully."
          ]
        },
        {
          "title": "Formulation-specific administration",
          "sources": [
            "tablet",
            "capsule"
          ],
          "paragraphs": [
            "Use the prescribed tablet strength or 12.5 mg capsule. Combination antihypertensive products contain additional ingredients and have separate labels. Do not infer that capsule pediatric restrictions or tablet edema doses are interchangeable."
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Electrolyte loss, hypotension, ocular reactions and skin risk.",
      "takeaway": "Check symptoms and laboratory trends, not dose alone.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "sources": [
            "tablet"
          ],
          "open": true,
          "tone": "warning",
          "paragraphs": [
            "Watch for dehydration, hyponatremia, hypokalemia, hypomagnesemia and hypochloremic alkalosis. Hypercalcemia, hyperglycemia and gout can occur. Use cautiously with renal or hepatic disease; lupus may worsen. Sudden visual loss or eye pain may indicate acute myopia/angle-closure glaucoma; discontinue rapidly and obtain urgent ophthalmic care."
          ]
        },
        {
          "title": "Contraindications",
          "sources": [
            "tablet",
            "capsule"
          ],
          "paragraphs": [
            "Anuria, or hypersensitivity to hydrochlorothiazide/product ingredients or other sulfonamide-derived drugs as stated in the selected labels. Evaluate the exact allergy history before treatment."
          ]
        },
        {
          "title": "Boxed warning status · Selected oral products",
          "sources": [
            "tablet",
            "capsule"
          ],
          "paragraphs": [
            "Neither selected single-ingredient oral label carries a boxed warning. Serious electrolyte and ocular warnings still apply."
          ]
        },
        {
          "title": "Adverse reactions",
          "sources": [
            "tablet",
            "capsule",
            "sentinel"
          ],
          "paragraphs": [
            "Dizziness, orthostatic hypotension, GI symptoms, muscle cramps, photosensitivity and metabolic changes are reported; serious reactions include severe skin reactions, pancreatitis, blood dyscrasias and renal injury. Current labels associate cumulative exposure with non-melanoma skin cancer, especially squamous-cell cancer in White patients at high cumulative doses. Protect skin and arrange screening; individualize benefit–risk assessment rather than stopping routine therapy without a plan. Overdose causes dehydration and electrolyte depletion and requires urgent clinical assessment and supportive correction."
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Review lithium, potassium depletion and treatment response.",
      "takeaway": "Diuretics can greatly increase lithium toxicity.",
      "blocks": [
        {
          "title": "Clinically relevant interactions",
          "sources": [
            "tablet"
          ],
          "open": true,
          "items": [
            "Lithium: generally avoid; renal clearance falls and toxicity risk rises.",
            "Digoxin: hypokalemia can increase cardiac toxicity; assess electrolytes and clinical risk.",
            "NSAIDs may blunt natriuresis, diuresis and BP lowering; monitor response.",
            "Other antihypertensives, alcohol, opioids and barbiturates can increase hypotension.",
            "Corticosteroids or ACTH increase electrolyte loss, especially potassium.",
            "Insulin/oral diabetes medicines may need adjustment if glucose rises.",
            "Cholestyramine/colestipol reduce absorption; coordinate administration with the pharmacist.",
            "Nondepolarizing muscle relaxants may have enhanced effects; inform the perioperative team. Pressor response may decrease without precluding use.",
            "Stop as directed before parathyroid-function testing because calcium handling is altered."
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Consider pregnancy, breastfeeding, age and organ function.",
      "takeaway": "Product-label restrictions and lactation evidence have different roles.",
      "blocks": [
        {
          "title": "Pregnancy",
          "sources": [
            "tablet"
          ],
          "paragraphs": [
            "Use only when clearly needed after clinical review. Thiazides cross the placenta; neonatal jaundice, thrombocytopenia and adult-type adverse effects are possible. Do not use routinely for normal pregnancy edema."
          ]
        },
        {
          "title": "Lactation",
          "sources": [
            "tablet",
            "capsule",
            "lactation"
          ],
          "paragraphs": [
            "Labels advise a decision between nursing and treatment because the drug enters milk. LactMed considers doses up to 50 mg/day acceptable during breastfeeding; intense diuresis at larger doses may reduce milk production. Consider maternal need, dose, milk supply and infant health with the clinician."
          ]
        },
        {
          "title": "Pediatric and geriatric considerations",
          "sources": [
            "tablet",
            "capsule"
          ],
          "paragraphs": [
            "Tablet pediatric directions are based on experience rather than controlled trials; the capsule label states pediatric safety/effectiveness are unestablished. The capsule label recommends a 12.5 mg start in older adults, with 12.5 mg increments if needed, because BP reduction and adverse effects may be greater."
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Distal tubular salt loss produces diuresis.",
      "takeaway": "The chronic antihypertensive mechanism remains incompletely defined.",
      "blocks": [
        {
          "title": "Mechanism of action and pharmacodynamics",
          "sources": [
            "tablet"
          ],
          "paragraphs": [
            "Hydrochlorothiazide reduces renal sodium/chloride reabsorption, increasing water excretion with possible potassium and magnesium loss. Diuresis starts around 2 hours, peaks around 4 hours and lasts 6–12 hours. Its precise antihypertensive mechanism is not established."
          ]
        },
        {
          "title": "Pharmacokinetics",
          "sources": [
            "tablet"
          ],
          "facts": [
            [
              "Metabolism",
              "Not metabolized."
            ],
            [
              "Elimination",
              "Predominantly renal; at least 61% of an oral dose eliminated unchanged within 24 hours in tablet-label data."
            ],
            [
              "Half-life",
              "5.6–14.8 hours in tablet-label studies; renal impairment prolongs elimination."
            ],
            [
              "Distribution",
              "Crosses the placenta and enters breast milk."
            ]
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Track BP, volume status, renal function and electrolytes.",
      "takeaway": "Symptoms of electrolyte depletion and visual changes need prompt review.",
      "blocks": [
        {
          "title": "Monitoring parameters",
          "sources": [
            "tablet"
          ],
          "open": true,
          "items": [
            "Follow BP response, orthostatic symptoms, edema/weight and hydration.",
            "Check electrolytes and renal function periodically; reassess promptly with vomiting, diarrhea, heavy diuresis or reduced intake.",
            "Assess glucose with diabetes, uric acid/gout when clinically relevant, and calcium if elevated or parathyroid disease is suspected.",
            "Arrange regular skin cancer screening and examine new or changing lesions."
          ]
        },
        {
          "title": "Patient counseling information",
          "sources": [
            "tablet",
            "capsule"
          ],
          "items": [
            "Take only the prescribed product and dose; consult before using NSAIDs or changing potassium intake/supplements.",
            "Report weakness, cramps, confusion, fainting, markedly reduced urine or persistent vomiting.",
            "Seek urgent care for new eye pain or sudden blurred vision.",
            "Use sun protection and report new, persistent or changing skin lesions."
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Check the exact strength and original packaging.",
      "takeaway": "Generic appearance and directions are product-specific.",
      "blocks": [
        {
          "title": "Representative oral product · 25 mg tablet",
          "sources": [
            "tablet"
          ],
          "open": true,
          "facts": [
            [
              "Label packager",
              "Golden State Medical Supply; manufactured by Leading Pharma."
            ],
            [
              "Appearance / imprint",
              "Peach round bisected tablet; EP above score, 131 below."
            ],
            [
              "Example NDC",
              "51407-331-01 · 100 tablets."
            ],
            [
              "U.S. status",
              "Prescription; ANDA product."
            ]
          ],
          "links": [
            {
              "title": "View tablet label and package images",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a85f69f5-ba97-478d-e053-2a95a90a0a97"
            }
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "sources": [
            "tablet",
            "capsule"
          ],
          "facts": [
            [
              "Selected tablets",
              "12.5, 25 and 50 mg."
            ],
            [
              "Selected capsule",
              "12.5 mg; light blue SG / 146; Westminster NDC 69367-219-01, 100 capsules."
            ],
            [
              "Combination products",
              "Separate ingredient, strength and safety checks required."
            ]
          ]
        },
        {
          "title": "Storage and handling",
          "sources": [
            "tablet",
            "capsule"
          ],
          "paragraphs": [
            "Selected tablets: 20–25°C in a well-closed child-resistant container. Capsules: 20–25°C in a tight light-resistant container, protected from moisture and freezing. Keep out of children’s reach."
          ]
        }
      ]
    }
  ]
};
