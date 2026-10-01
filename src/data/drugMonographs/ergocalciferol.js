// Original primary-label and guideline summaries; clinical scope is explicit.
export const ergocalciferol = {
  "slug": "ergocalciferol",
  "name": "Ergocalciferol",
  "synonym": "Vitamin D2 · 50,000 IU capsule",
  "description": "Prescription vitamin D2 for selected rare mineral disorders. The 50,000 IU capsule requires a specific dose schedule and laboratory follow-up; its label is not a routine nutritional-deficiency protocol.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Verify units, frequency and total vitamin D intake.",
    "text": "50,000 IU equals 1,250 micrograms (1.25 mg). Excess dosing can cause prolonged hypercalcemia, renal injury and tissue calcification.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Vitamin form",
      "Ergocalciferol · vitamin D2"
    ],
    [
      "Selected capsule",
      "50,000 IU = 1.25 mg"
    ],
    [
      "Reference focus",
      "Current U.S. capsule label and endocrine guidance"
    ]
  ],
  "sources": [
    {
      "id": "label",
      "title": "Ergocalciferol · 50,000 IU capsule",
      "publisher": "DailyMed / Torrent",
      "note": "PI footer September 2026; SPL version 3/effective September 4, 2026; publication September 10, 2026. Label retains legacy high-dose and pregnancy wording.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4ae38744-020d-4c37-a6f1-88f55c2f1047"
    },
    {
      "id": "hypo",
      "title": "Chronic hypoparathyroidism in adults · Revised guideline",
      "publisher": "European Society of Endocrinology / EJE",
      "note": "2025 open-access guideline; treatment R.3.3/R.3.9 and monitoring R.4 reviewed in full supporting sections.",
      "url": "https://academic.oup.com/ejendo/article/193/5/G83/8321487"
    },
    {
      "id": "prevention",
      "title": "Vitamin D for prevention of disease · Guideline resources",
      "publisher": "Endocrine Society",
      "note": "June 3, 2024 public primary recommendations. Scope excludes a universal established-deficiency repletion protocol.",
      "url": "https://www.endocrine.org/clinical-practice-guidelines/vitamin-d-for-prevention-of-disease"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Selected rare disorders in the U.S. capsule label.",
      "takeaway": "Routine deficiency treatment is a separate clinical plan.",
      "blocks": [
        {
          "title": "Labeled uses",
          "sources": [
            "label"
          ],
          "open": true,
          "paragraphs": [
            "Hypoparathyroidism, refractory/vitamin D resistant rickets and familial hypophosphatemia."
          ]
        },
        {
          "title": "Guideline and off-label context",
          "sources": [
            "label",
            "hypo",
            "prevention"
          ],
          "paragraphs": [
            "Nutritional-deficiency repletion is outside this capsule’s listed indications. The 2024 prevention guideline addresses people without established indications; it does not supply a universal high-dose deficiency course. Current adult hypoparathyroidism guidance prefers activated vitamin D when available."
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Legacy high-dose label ranges require specialist supervision.",
      "takeaway": "50,000 IU daily is not a routine deficiency instruction.",
      "blocks": [
        {
          "title": "Label regimens · Rare disorders only",
          "sources": [
            "label"
          ],
          "open": true,
          "table": {
            "headers": [
              "Condition",
              "Selected label text, requiring individualization"
            ],
            "rows": [
              [
                "Vitamin D resistant rickets",
                "12,000–500,000 IU/day; narrow therapeutic/toxic margin."
              ],
              [
                "Hypoparathyroidism",
                "50,000–200,000 IU/day with calcium lactate 4 g six times daily as stated in the legacy regimen."
              ],
              [
                "Familial hypophosphatemia",
                "Listed indication; no separate fixed dose supplied."
              ]
            ]
          }
        },
        {
          "title": "Contemporary hypoparathyroidism context",
          "sources": [
            "hypo"
          ],
          "paragraphs": [
            "The 2025 ESE guideline prefers activated vitamin D analogues. Supraphysiological calciferol is reserved for special circumstances or lack of access and carries toxicity risk; vitamin D3 is preferred in that fallback. Native D2/D3 800–2,000 IU/day supports vitamin D status in adult hypoparathyroidism, separate from activated-drug treatment."
          ]
        },
        {
          "title": "Administration and organ considerations",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Do not turn broad label ranges into capsule-count instructions. Verify the prescribed frequency, total supplements and calcium plan; adjust with response. The label supplies no renal/hepatic dose algorithm. Renal disease, phosphate elevation and impaired metabolite activation require specialist assessment to prevent calcification."
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Hypercalcemia and prolonged vitamin D toxicity.",
      "takeaway": "Count food, supplements and prescriptions together.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "sources": [
            "label"
          ],
          "open": true,
          "tone": "warning",
          "paragraphs": [
            "Individual sensitivity varies; infants with idiopathic hypercalcemia may require strict vitamin D restriction. High therapeutic doses need frequent calcium testing. Excess vitamin D can injure kidneys and calcify tissues; hyperphosphatemia adds risk. Selected capsule contains tartrazine, which may provoke allergy/asthma, particularly with aspirin sensitivity."
          ]
        },
        {
          "title": "Contraindications",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Hypercalcemia, malabsorption syndrome, abnormal sensitivity to vitamin D toxic effects, or hypervitaminosis D, as specified by the selected label."
          ]
        },
        {
          "title": "Boxed warning status",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "The selected U.S. label has no boxed warning. Its high-dose toxicity precautions remain essential."
          ]
        },
        {
          "title": "Adverse reactions",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Toxicity may cause nausea, appetite loss, constipation, weakness, excessive thirst/urination, hypercalciuria, renal failure and widespread calcification; child growth and adult bone mineralization can be harmed. Effects may persist ≥2 months after stopping. Suspected overdose requires urgent assessment, stopping further vitamin D and clinician-directed calcium/renal management."
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Absorption and additive hypercalcemia risk.",
      "takeaway": "Review supplements as medicines.",
      "blocks": [
        {
          "title": "Clinically relevant interactions",
          "sources": [
            "label"
          ],
          "open": true,
          "items": [
            "Mineral oil impairs fat-soluble vitamin absorption.",
            "Thiazides can cause hypercalcemia in hypoparathyroid patients treated with ergocalciferol; monitor the calcium plan.",
            "Review other vitamin D sources and calcium intake before increasing treatment; avoid unplanned duplicate products."
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Pregnancy, nursing and age-specific individualization.",
      "takeaway": "High-dose therapy requires a disease-specific benefit/risk assessment.",
      "blocks": [
        {
          "title": "Pregnancy and lactation",
          "sources": [
            "label",
            "prevention"
          ],
          "paragraphs": [
            "The capsule label warns about hypervitaminosis D fetal harm and retains legacy “above 400 IU” safety wording; this is not a modern universal intake ceiling. The 2024 guideline suggests empiric supplementation in healthy pregnancy, within its separate scope. High-dose rare-disorder therapy requires specialist review. Large maternal doses can cause infant hypercalcemia; assess infant calcium as directed."
          ]
        },
        {
          "title": "Pediatric and geriatric considerations",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Pediatric doses must be individualized; the 50,000 IU capsule is not a routine infant product. Older-adult studies are limited; cautious selection reflects organ function, comorbidity and other medicines."
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Metabolic activation regulates calcium/phosphate.",
      "takeaway": "D2, D3 and activated analogues are distinct products.",
      "blocks": [
        {
          "title": "Mechanism of action",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Activated metabolites promote intestinal calcium/phosphate absorption and affect bone/renal mineral handling. Ergocalciferol is vitamin D2, not cholecalciferol (D3) or calcitriol."
          ]
        },
        {
          "title": "Pharmacokinetics",
          "sources": [
            "label"
          ],
          "facts": [
            [
              "Activation",
              "Liver forms 25-hydroxyvitamin D; kidney forms active 1,25-dihydroxyvitamin D."
            ],
            [
              "Label onset lag",
              "Approximately 10–24 hours before action begins."
            ],
            [
              "Persistence",
              "Excess-dose effects may persist for two or more months."
            ],
            [
              "Dose conversion",
              "1 microgram D2 = 40 IU; 50,000 IU = 1,250 micrograms."
            ]
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Assess mineral balance and treatment response.",
      "takeaway": "Frequency must follow disease and dose intensity.",
      "blocks": [
        {
          "title": "Monitoring parameters",
          "sources": [
            "label",
            "hypo"
          ],
          "open": true,
          "items": [
            "Label high-dose regimens: calcium/phosphorus every 2 weeks or more often; monthly bone radiographs until correction/stability.",
            "Adult hypoparathyroidism guideline: calcium, phosphate, magnesium, creatinine/eGFR and symptoms; reassess soon after treatment changes and evaluate urinary calcium/renal complications as appropriate.",
            "Review all vitamin D/calcium intake, toxicity symptoms and adherence to exact frequency."
          ]
        },
        {
          "title": "Patient counseling information",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Check units and daily versus weekly or other schedule at every refill. Do not add vitamin D/calcium supplements independently. Report nausea, constipation, marked thirst, frequent urination, weakness or confusion. Keep capsules away from children; tell clinicians about pregnancy, breastfeeding and new medicines."
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Selected prescription D2 softgel.",
      "takeaway": "Other formulations need their own labels.",
      "blocks": [
        {
          "title": "Representative product · Torrent 50,000 IU capsule",
          "sources": [
            "label"
          ],
          "open": true,
          "facts": [
            [
              "Strength",
              "1.25 mg = 1,250 micrograms = 50,000 IU D2."
            ],
            [
              "Appearance / imprint",
              "Clear forest-green oval softgel; E09."
            ],
            [
              "Distributor / manufacturer",
              "Torrent Pharma / Esjay Pharma."
            ],
            [
              "Example NDC",
              "13668-757-01 · 100 capsules."
            ],
            [
              "U.S. status",
              "Prescription capsule."
            ]
          ],
          "links": [
            {
              "title": "View exact capsule label",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4ae38744-020d-4c37-a6f1-88f55c2f1047"
            }
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "sources": [
            "label"
          ],
          "facts": [
            [
              "Selected product",
              "50,000 IU oral softgel capsule."
            ],
            [
              "Outside scope",
              "Other D2 liquids/supplements, D3 products and activated analogues; no automatic substitution."
            ]
          ]
        },
        {
          "title": "Storage and handling",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Store at 25°C, excursions 15–30°C; protect from light. Dispense in a tight, light-resistant container. Check exact ingredients for tartrazine/soy/gelatin concerns."
          ]
        }
      ]
    }
  ]
};
