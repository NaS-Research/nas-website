// Original clinical summaries checked against the product-specific public sources below.
export const cholecalciferol = {
  "slug": "cholecalciferol",
  "name": "Cholecalciferol",
  "synonym": "Vitamin D3",
  "description": "A nutritional vitamin D precursor available in varied supplement products. This reference distinguishes age-based intake targets, product serving directions and clinician-directed deficiency or kidney-disease care.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Check IU, micrograms and total intake.",
    "text": "Vitamin D excess can cause dangerous hypercalcemia and kidney injury. Verify daily versus weekly directions, all combination products and dose per drop or mL. Nutritional RDAs and upper limits are not deficiency-treatment prescriptions.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Vitamin D3 nutritional precursor"
    ],
    [
      "Unit conversion",
      "10 mcg = 400 IU"
    ],
    [
      "Key distinction",
      "Nutritional intake versus supervised treatment"
    ]
  ],
  "sources": [
    {
      "id": "ods",
      "title": "Vitamin D · Health professional fact sheet",
      "publisher": "NIH Office of Dietary Supplements",
      "note": "Updated June 27, 2025; nutritional intake, upper limits, metabolism, toxicity and interaction sections.",
      "url": "https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/"
    },
    {
      "id": "endo",
      "title": "Vitamin D for the Prevention of Disease · Public recommendations",
      "publisher": "Endocrine Society",
      "note": "June 3, 2024 recommendations and technical remarks; prevention scope, not a universal deficiency-repletion protocol.",
      "url": "https://www.endocrine.org/clinical-practice-guidelines/vitamin-d-for-prevention-of-disease"
    },
    {
      "id": "fda",
      "title": "Questions and Answers on Dietary Supplements",
      "publisher": "U.S. Food and Drug Administration",
      "note": "Current public regulatory explanation; supplement marketing is distinct from drug approval.",
      "url": "https://www.fda.gov/food/information-consumers-using-dietary-supplements/questions-and-answers-dietary-supplements"
    },
    {
      "id": "nice",
      "title": "Maternal and child nutrition · NG247",
      "publisher": "NICE",
      "note": "Published January 15, 2025; current downloaded PDF, recommendations 1.1.12–1.1.14 and infant/child Table 1. UK context.",
      "url": "https://www.nice.org.uk/guidance/ng247/resources/maternal-and-child-nutrition-nutrition-and-weight-management-in-pregnancy-and-nutrition-in-children-up-to-5-years-pdf-66143961638341"
    },
    {
      "id": "kidney",
      "title": "CKD-MBD · Official recommendation summary",
      "publisher": "KDIGO",
      "note": "2017 guideline recommendation summary 3.1.1–3.1.4 and 4.2.1–4.2.4; no invented cholecalciferol-to-calcitriol equivalence.",
      "url": "https://kdigo.org/wp-content/uploads/2017/02/KDIGO_CKD_MBD_Guideline_r6.pdf"
    },
    {
      "id": "supplement",
      "title": "Vitamin D3 10,000 IU dietary supplement · Package labeling",
      "publisher": "Nnodum / DailyMed",
      "note": "Current SPL10 effective December 29, 2025, published December 31; weekly package serving is product-specific, not a general replacement dose.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ad799f34-81df-460c-a760-2204ad776817"
    },
    {
      "id": "liquid",
      "title": "PureVita Vitamin D3 400 IU/2 mL · Package labeling",
      "publisher": "Trivia / DailyMed",
      "note": "Current SPL1 effective February 14, 2025; adult directions and refrigeration after opening; explicitly not an Orange Book product.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5f0a70a1-0bfa-4a69-b5f4-ec0ab9880557"
    },
    {
      "id": "product",
      "title": "Vitamin D3 25 mcg (1,000 IU) softgels · Product information",
      "publisher": "Nature Made / Pharmavite",
      "note": "Current manufacturer amount-per-serving and adult directions; supplement disclaimer. One introductory sentence incorrectly pairs 1,000 IU with 50 mcg; that error is not propagated. Actual image download unavailable.",
      "url": "https://www.naturemade.com/products/vitamin-d3-25-mcg-1000-iu-softgels"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Vitamin D3 supports nutritional vitamin D adequacy; deficiency care is a separate clinical indication.",
      "takeaway": "Supplement availability does not establish FDA drug approval.",
      "blocks": [
        {
          "title": "Nutritional role and clinical scope",
          "paragraphs": [
            "Cholecalciferol is vitamin D3. Adequate vitamin D supports calcium/phosphate balance and bone mineralization. Documented deficiency, rickets or osteomalacia needs clinician-directed evaluation and treatment; nutritional intake targets below are not a repletion prescription."
          ],
          "sources": [
            "ods",
            "endo"
          ]
        },
        {
          "title": "Supplement versus drug status",
          "paragraphs": [
            "U.S. dietary supplements are not FDA-approved as drugs to treat or prevent disease. DailyMed inclusion or an NDC-like number does not itself establish approval or therapeutic equivalence. The selected D3 packages are supplements/product listings; no FDA-approved cholecalciferol disease indication is claimed for them."
          ],
          "sources": [
            "fda",
            "supplement",
            "liquid"
          ]
        },
        {
          "title": "Prevention guideline context",
          "paragraphs": [
            "The 2024 Endocrine Society guideline concerns people without established testing/treatment indications. It suggests supplementation for ages 1–18, pregnancy, ages ≥75 and selected high-risk prediabetes; healthy adults under 75 generally follow dietary reference intake without routine extra dosing or screening. These are conditional recommendations, not guarantees of disease prevention."
          ],
          "sources": [
            "endo"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Read both mcg/IU and concentration; determine total intake before adding a supplement.",
      "takeaway": "1 mcg equals 40 IU: 10 mcg is 400 IU.",
      "blocks": [
        {
          "title": "U.S. nutritional intake targets",
          "paragraphs": [
            "NASEM values reported by NIH ODS concern total daily intake from food and supplements under minimal-sun assumptions. Infant values are Adequate Intakes; later values are RDAs. They do not specify a deficiency-treatment course."
          ],
          "sources": [
            "ods"
          ],
          "table": {
            "headers": [
              "Age / population",
              "Total daily intake"
            ],
            "rows": [
              [
                "Birth–12 months (AI)",
                "10 mcg (400 IU)"
              ],
              [
                "1–70 years",
                "15 mcg (600 IU)"
              ],
              [
                ">70 years",
                "20 mcg (800 IU)"
              ],
              [
                "Pregnancy/lactation, ages 14–50",
                "15 mcg (600 IU)"
              ]
            ]
          }
        },
        {
          "title": "Age-specific upper limits",
          "paragraphs": [
            "ULs apply to usual total intake in healthy people and are not recommended doses. Supervised treatment may differ; exceeding a UL independently is not a deficiency-treatment strategy. NIH displays rounded mcg equivalents for some infant/child limits; IU values below preserve its table."
          ],
          "sources": [
            "ods"
          ],
          "table": {
            "headers": [
              "Age",
              "Usual total daily UL"
            ],
            "rows": [
              [
                "0–6 months",
                "25 mcg (1,000 IU)"
              ],
              [
                "7–12 months",
                "38 mcg (1,500 IU), rounded mcg"
              ],
              [
                "1–3 years",
                "63 mcg (2,500 IU), rounded mcg"
              ],
              [
                "4–8 years",
                "75 mcg (3,000 IU)"
              ],
              [
                "≥9 years, including pregnancy/lactation",
                "100 mcg (4,000 IU)"
              ]
            ]
          }
        },
        {
          "title": "Product-specific examples",
          "paragraphs": [
            "Nature Made’s selected adult softgel supplies 25 mcg (1,000 IU); its direction is one daily with water and a meal. PureVita’s adult liquid supplies 400 IU per 2 mL (200 IU/mL), with an adult package direction of 2 mL daily. Neither adult product direction establishes an infant dose. Nnodum’s 10,000 IU supplement is labeled once weekly, not once daily; use only when appropriate to the clinical plan."
          ],
          "sources": [
            "product",
            "liquid",
            "supplement"
          ]
        },
        {
          "title": "Deficiency and special-condition treatment",
          "paragraphs": [
            "For diagnosed deficiency, select formulation, dose, duration and follow-up from the actual diagnosis, calcium status, age, malabsorption and organ function. No universal high-dose loading course is supplied here. The 2024 prevention guideline does not establish a single repletion regimen or serum target for every patient; for adults ≥50 with treatment indications, it favors daily lower-dose over intermittent higher-dose vitamin D."
          ],
          "sources": [
            "endo",
            "ods"
          ]
        },
        {
          "title": "UK maternal and child guidance",
          "paragraphs": [
            "NICE NG247 recommends a 10 mcg (400 IU)/day supplement during October–March in pregnancy/breastfeeding, year-round for increased deficiency risk. UK infant recommendations are 8.5–10 mcg (340–400 IU)/day, except infants receiving ≥500 mL/day fortified formula; ages 1–4 receive 10 mcg (400 IU)/day. These UK supplement policies differ from U.S. total-intake RDAs."
          ],
          "sources": [
            "nice"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Excess vitamin D can cause dangerous calcium excess and kidney injury.",
      "takeaway": "Add up all vitamin D and calcium products; high dose is not automatically better.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Toxicity from excessive supplementation can produce hypercalcemia/hypercalciuria, kidney injury, soft-tissue calcification and arrhythmias. Concentrated liquids and duplicated products increase dosing-error risk. The Nnodum package requires physician supervision with kidney/bone disease, malignancy or calcium disorders and consultation for children under 12 or pregnancy."
          ],
          "sources": [
            "ods",
            "supplement"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "There is no single FDA-approved contraindication list covering all D3 dietary supplements. Known hypercalcemia or vitamin D toxicity requires clinical review before further supplementation; avoid unsupervised high-dose use in calcium or kidney disorders. Check the actual product ingredients and avoid a product that causes hypersensitivity."
          ],
          "sources": [
            "ods",
            "supplement",
            "fda"
          ]
        },
        {
          "title": "Boxed warning and regulatory context",
          "paragraphs": [
            "No FDA prescription boxed warning is assigned to the dietary supplements reviewed here. Supplement labels and structure/function claims are not prescription drug approval. They do not establish that large doses are safe or effective for disease treatment."
          ],
          "sources": [
            "fda",
            "supplement",
            "liquid"
          ]
        },
        {
          "title": "Adverse reactions and excess-dose symptoms",
          "paragraphs": [
            "Excess calcium may cause nausea/vomiting, weakness, confusion, poor appetite, thirst, frequent urination, dehydration or kidney stones. Serious toxicity can cause renal failure or arrhythmias. Report symptoms and product/dose details promptly; routine nutritional intake should not be confused with a toxic loading dose."
          ],
          "sources": [
            "ods"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Medicines can alter vitamin D absorption, metabolism or calcium safety.",
      "takeaway": "Check the complete medication and supplement list.",
      "blocks": [
        {
          "title": "Thiazides and calcium load",
          "paragraphs": [
            "Thiazides reduce urinary calcium loss; adding vitamin D may provoke hypercalcemia, particularly with older age, renal impairment or hyperparathyroidism. Review added calcium and other vitamin D sources with the clinician."
          ],
          "sources": [
            "ods"
          ]
        },
        {
          "title": "Absorption, metabolism and statins",
          "paragraphs": [
            "Orlistat may reduce absorption; corticosteroids can impair vitamin D metabolism and calcium absorption. NIH also describes possible statin interactions at high vitamin D intakes, but does not establish a universal dose separation or dose change. Discuss high-dose use and monitoring rather than stopping prescribed therapy independently."
          ],
          "sources": [
            "ods"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Nutritional targets and clinical risk vary with age, feeding and organ disease.",
      "takeaway": "D3, calcidiol and calcitriol are different preparations.",
      "blocks": [
        {
          "title": "Infants, children and older adults",
          "paragraphs": [
            "Use an age-appropriate product with a verified dose per drop or mL, not an adult dropper assumption. Breastfed infants may need direct supplementation; maternal routine intake alone is not a reliable infant replacement. Older adults have increased inadequacy risk. The U.S. RDA rises after 70, whereas the Endocrine prevention recommendation specifically identifies age ≥75."
          ],
          "sources": [
            "ods",
            "nice",
            "endo"
          ]
        },
        {
          "title": "Kidney and liver disease",
          "paragraphs": [
            "D3 requires liver conversion to 25(OH)D and primarily kidney activation to calcitriol. No fixed renal/hepatic supplement adjustment table is established by these sources. KDIGO permits correction of deficiency in CKD using general-population strategies with individualized calcium/phosphate/PTH and 25(OH)D assessment. Active vitamin D treatment for CKD-MBD is a separate specialist decision; cholecalciferol is not dose-equivalent to calcitriol."
          ],
          "sources": [
            "ods",
            "kidney",
            "supplement"
          ]
        },
        {
          "title": "Pregnancy and breastfeeding",
          "paragraphs": [
            "U.S. pregnancy/lactation RDA is 600 IU/day and the age-appropriate UL remains 4,000 IU/day. Consider prenatal and other products together. The Endocrine Society suggests empiric supplementation in pregnancy without a single universal dose; trial averages are not prescriptions. NICE’s UK policy uses 400 IU/day seasonally or year-round by risk. Select a maternal and infant plan rather than substituting unmonitored high maternal doses for infant supplementation."
          ],
          "sources": [
            "ods",
            "endo",
            "nice"
          ]
        },
        {
          "title": "Malabsorption and obesity",
          "paragraphs": [
            "Fat malabsorption and gastric bypass can reduce adequacy; obesity is associated with lower measured 25(OH)D. These circumstances may need individualized evaluation, not an automatic multiplied dose. The prevention guideline advises against routine screening solely for obesity in otherwise healthy adults without established testing indications."
          ],
          "sources": [
            "ods",
            "endo"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "D3 is a fat-soluble precursor of active vitamin D signaling.",
      "takeaway": "The usual status marker is 25(OH)D, not routine 1,25(OH)2D.",
      "blocks": [
        {
          "title": "Mechanism and disposition",
          "paragraphs": [
            "After intestinal absorption, D3 undergoes liver 25-hydroxylation and principally renal activation. Active vitamin D supports intestinal calcium absorption and bone mineralization. Fat with a meal improves absorption, though absorption also occurs without fat. Circulating 25(OH)D has an approximately 15-day half-life; that is not a measured product-specific D3 half-life."
          ],
          "sources": [
            "ods"
          ]
        },
        {
          "title": "Interpreting laboratory status",
          "paragraphs": [
            "NIH reports NASEM risk of deficiency below 12 ng/mL (30 nmol/L), with ≥20 ng/mL (50 nmol/L) sufficient for most people. These population thresholds do not establish a universal treatment target. 1 ng/mL equals 2.5 nmol/L; assay differences matter. Endocrine prevention guidance does not define outcome-specific thresholds for routine healthy-population supplementation."
          ],
          "sources": [
            "ods",
            "endo"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Routine nutrition and monitored treatment require different follow-up.",
      "takeaway": "Verify units, product concentration, indication and total intake.",
      "blocks": [
        {
          "title": "Monitoring",
          "paragraphs": [
            "Routine 25(OH)D screening is not recommended by the Endocrine Society for otherwise healthy adults without testing indications. Diagnosed deficiency, suspected toxicity, malabsorption or CKD needs clinical assessment; in CKD consider serial calcium/phosphate/PTH and vitamin D results together. Follow-up timing and replacement dose should match that indication."
          ],
          "sources": [
            "endo",
            "kidney"
          ]
        },
        {
          "title": "Counseling and suspected overdose",
          "paragraphs": [
            "Check IU/mcg per serving, daily versus weekly instructions, and all combination products. Use the correct dropper and never estimate infant volumes from an adult product. If overdose or calcium-excess symptoms occur, stop additional unsupervised vitamin D and obtain urgent clinical/poison-center assessment with the package and exposure history."
          ],
          "sources": [
            "ods",
            "supplement",
            "liquid",
            "fda"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "D3 products differ in serving concentration, ingredients and regulatory labeling.",
      "takeaway": "Supplement Facts and suggested servings are not Drug Facts or FDA-approved doses.",
      "blocks": [
        {
          "title": "Representative products",
          "paragraphs": [
            "Nature Made adult D3 softgels are dietary supplements with 25 mcg (1,000 IU) per serving; check the actual purchased Supplement Facts panel. Nnodum’s listed 10,000 IU (0.25 mg) softgel supplement includes vitamin E and soya oil; package identifier 63044-401-01 does not establish drug approval. PureVita 400 IU/2 mL adult liquid explicitly states it is not an Orange Book product."
          ],
          "sources": [
            "product",
            "supplement",
            "liquid",
            "fda"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "D3 is available in oral capsules/softgels, tablets and liquids, with widely differing servings. Selected strengths here are 1,000 IU (25 mcg) per softgel, 10,000 IU (250 mcg) per weekly package-serving softgel, and 400 IU (10 mcg) per 2 mL adult liquid. These are product examples, not interchangeable regimens or an exhaustive market list."
          ],
          "sources": [
            "product",
            "supplement",
            "liquid"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Follow the purchased package’s temperature, light and expiration instructions. Nnodum’s supplement states 15–30°C, protect from excessive heat and avoid freezing. PureVita liquid states 20–25°C and refrigeration after opening, with protection from direct light/heat. No universal D3 refrigeration rule or unverified post-opening discard interval is supplied."
          ],
          "sources": [
            "supplement",
            "liquid"
          ]
        }
      ]
    }
  ]
};
