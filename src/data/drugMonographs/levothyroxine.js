// Original source-reviewed clinical summaries; product-specific doses are not interchangeable.
export const levothyroxine = {
  "slug": "levothyroxine",
  "name": "Levothyroxine",
  "synonym": "Levothyroxine sodium · T4",
  "description": "Thyroid hormone replacement with a narrow therapeutic index. A focused reference for Synthroid oral tablets, with separate guidance for emergency intravenous therapy.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Micrograms. Individualize and monitor.",
    "text": "Levothyroxine is not a weight-loss treatment. Correct adrenal insufficiency before starting. Excess replacement can cause cardiac toxicity; oral tablets do not treat myxedema coma.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Thyroid hormone · Synthetic T4"
    ],
    [
      "Common brand",
      "Synthroid"
    ],
    [
      "Reference focus",
      "Oral tablets · Separate IV emergency label"
    ]
  ],
  "sources": [
    {
      "id": "oral",
      "title": "Synthroid · Oral prescribing information",
      "publisher": "DailyMed / AbbVie",
      "note": "Full prescribing information; updated February 20, 2024. SPL version 1537.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1e11ad30-1041-4520-10b0-8f9d30d30fcc"
    },
    {
      "id": "iv",
      "title": "Levothyroxine sodium injection · Ready-to-use solution",
      "publisher": "DailyMed / Fresenius Kabi",
      "note": "Adult myxedema coma, route-specific administration and strengths. Updated March 17, 2025.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=08f4b1f8-6807-47e7-bef8-8d1972aa0557"
    },
    {
      "id": "lactation",
      "title": "Levothyroxine · Lactation",
      "publisher": "LactMed / National Library of Medicine",
      "note": "Milk transfer, infant effects and maternal replacement. Revised September 15, 2026.",
      "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK501003/"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Replacement of deficient thyroid hormone and selected thyroid-cancer TSH suppression.",
      "takeaway": "Confirm primary versus central disease and the intended biochemical target.",
      "blocks": [
        {
          "title": "Labeled oral indications",
          "sources": [
            "oral"
          ],
          "open": true,
          "paragraphs": [
            "Synthroid is prescription replacement therapy for congenital or acquired primary, secondary or tertiary hypothyroidism in adults and children, including neonates. It also supports surgery and radioiodine treatment of thyrotropin-dependent, well-differentiated thyroid cancer."
          ]
        },
        {
          "title": "Limitations of use",
          "sources": [
            "oral"
          ],
          "paragraphs": [
            "It is not indicated for benign thyroid-nodule or nontoxic diffuse-goiter suppression in iodine-sufficient patients, or for the recovery phase of subacute thyroiditis. Do not prescribe for weight loss in a euthyroid patient."
          ]
        },
        {
          "title": "Intravenous therapy",
          "paragraphs": [
            "The linked ready-to-use injection is labeled for adult myxedema coma. Oral-to-IV equivalence is not established; specialist emergency care and the exact IV label are required."
          ],
          "sources": [
            "iv"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Use micrograms and titrate to clinical and biochemical response.",
      "takeaway": "Cardiac disease and older age require a lower starting dose and slower titration.",
      "blocks": [
        {
          "title": "Adults · Oral replacement",
          "sources": [
            "oral"
          ],
          "open": true,
          "table": {
            "headers": [
              "Population",
              "Starting dose and titration"
            ],
            "rows": [
              [
                "Adults without a need for a reduced start",
                "Full replacement is approximately 1.6 mcg/kg/day; individualize. Adjust by 12.5–25 mcg every 4–6 weeks."
              ],
              [
                "Older adults, atrial-fibrillation risk or cardiac disease",
                "Start below the full replacement dose; titrate every 6–8 weeks. The current Synthroid label does not specify a universal fixed low starting dose."
              ],
              [
                "Thyroid-cancer TSH suppression",
                "Individualize to the target TSH for cancer stage and clinical status."
              ]
            ]
          },
          "paragraphs": [
            "Doses above 200 mcg/day are seldom needed. A poor response above 300 mcg/day warrants assessment of adherence, absorption and interactions. A dose may take 4–6 weeks to reach its peak effect."
          ]
        },
        {
          "title": "Pediatric oral replacement",
          "sources": [
            "oral"
          ],
          "table": {
            "headers": [
              "Age / developmental stage",
              "Starting daily dose"
            ],
            "rows": [
              [
                "0–3 months",
                "10–15 mcg/kg"
              ],
              [
                "3–6 months",
                "8–10 mcg/kg"
              ],
              [
                "6–12 months",
                "6–8 mcg/kg"
              ],
              [
                "1–5 years",
                "5–6 mcg/kg"
              ],
              [
                "6–12 years",
                "4–5 mcg/kg"
              ],
              [
                "Over 12 years; growth/puberty incomplete",
                "2–3 mcg/kg"
              ],
              [
                "Growth/puberty complete",
                "1.6 mcg/kg"
              ]
            ]
          },
          "paragraphs": [
            "Adjust to laboratory results and development; usual pediatric titration is every 2 weeks. Infants at cardiac-failure risk start lower and increase every 4–6 weeks. For hyperactivity risk, the label starts at one-quarter of full replacement and increases by one-quarter weekly."
          ]
        },
        {
          "title": "Administration",
          "sources": [
            "oral"
          ],
          "paragraphs": [
            "Take once daily on an empty stomach 30–60 minutes before breakfast. Separate absorption-interfering medicines by at least 4 hours; see the interaction card for resin-specific timing. For a child unable to swallow, freshly crush a tablet into 5–10 mL water, give immediately and ensure the full dose is swallowed. Do not store the mixture or mix into soy-based formula."
          ]
        },
        {
          "title": "Pregnancy dosing",
          "sources": [
            "oral"
          ],
          "paragraphs": [
            "Check TSH and free T4 promptly when pregnancy is confirmed. For pre-existing primary disease with TSH above the trimester range, the label uses 12.5–25 mcg/day increases and TSH testing every 4 weeks until stable. For newly diagnosed disease, its starting doses are 1.6 mcg/kg/day if TSH ≥10 mIU/L and 1.0 mcg/kg/day if TSH <10 mIU/L. Return to the pre-pregnancy dose after delivery and check TSH at 4–8 weeks postpartum; individualize further changes."
          ]
        },
        {
          "title": "Renal and hepatic considerations",
          "sources": [
            "oral"
          ],
          "paragraphs": [
            "The reviewed oral label supplies no fixed renal or hepatic dose-reduction formula. Dose to the disease-specific thyroid tests and clinical response; comorbid illness and altered hormone binding can complicate interpretation."
          ]
        },
        {
          "title": "Adult myxedema coma · Intravenous solution",
          "badge": "Professional emergency administration",
          "table": {
            "headers": [
              "Parameter",
              "Linked injection label"
            ],
            "rows": [
              [
                "Loading dose",
                "300–500 mcg IV; choose lower doses for older adults or cardiac disease."
              ],
              [
                "Maintenance",
                "50–100 mcg IV daily until oral treatment is tolerated."
              ],
              [
                "Administration",
                "Do not exceed 100 mcg/min; do not add to IV fluids."
              ]
            ]
          },
          "paragraphs": [
            "This is the Fresenius ready-to-use solution label, not a reconstitution instruction for powder products. Do not infer an exact oral-to-IV conversion."
          ],
          "sources": [
            "iv"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Avoid over-replacement, adrenal crisis and cardiac injury.",
      "takeaway": "Use the lowest dose that achieves the intended clinical and laboratory target.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "sources": [
            "oral"
          ],
          "open": true,
          "tone": "warning",
          "items": [
            "Over- or under-replacement can harm cardiac function, bone, growth, cognition and reproductive or metabolic function. Excess dosing can precipitate angina or atrial fibrillation, especially in older adults or cardiac disease.",
            "Treat concomitant adrenal insufficiency with glucocorticoids before thyroid replacement to prevent adrenal crisis.",
            "Monitor glucose when starting, changing or stopping therapy in diabetes. Excess replacement can lower bone density, particularly after menopause.",
            "Myxedema coma is an emergency requiring an IV thyroid product; oral absorption is unreliable."
          ]
        },
        {
          "title": "Contraindications",
          "sources": [
            "oral"
          ],
          "paragraphs": [
            "Uncorrected adrenal insufficiency is the reviewed label’s contraindication. Hypersensitivity reactions to inactive ingredients have been reported; select and evaluate formulations carefully after suspected allergy."
          ]
        },
        {
          "title": "Boxed warning",
          "sources": [
            "oral"
          ],
          "paragraphs": [
            "Thyroid hormone must not be used for obesity or weight loss. Doses exceeding physiological needs can cause life-threatening toxicity, particularly with sympathomimetic appetite suppressants."
          ]
        },
        {
          "title": "Adverse reactions and overdose",
          "sources": [
            "oral"
          ],
          "paragraphs": [
            "Overdose-like hyperthyroid effects include tremor, heat intolerance, insomnia, sweating, diarrhea, palpitations and arrhythmias. Serious cardiac events, seizures and pediatric intracranial hypertension or growth-plate complications are reported. Excipient allergy can cause rash, wheezing or angioedema. Symptoms after an overdose may be delayed for days; seek urgent assessment and contact U.S. Poison Control at 1-800-222-1222."
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Absorption, hormone metabolism and changing thyroid status affect other treatments.",
      "takeaway": "Review medicines, supplements and food habits before changing a dose.",
      "blocks": [
        {
          "title": "Absorption and food interactions",
          "sources": [
            "oral"
          ],
          "open": true,
          "items": [
            "Calcium, iron and phosphate binders: separate by at least 4 hours. Bile-acid sequestrants and ion-exchange resins: take Synthroid at least 4 hours before them or monitor TSH as specified by the label.",
            "Antacids, sucralfate and acid suppression can reduce absorption; review timing and monitor thyroid response. Orlistat also requires thyroid monitoring.",
            "Soy, dietary fiber, walnuts and grapefruit can alter absorption; maintain a consistent routine and reassess after dietary changes."
          ]
        },
        {
          "title": "Clinical interactions and actions",
          "sources": [
            "oral"
          ],
          "items": [
            "Oral anticoagulants: thyroid correction can increase anticoagulant response; monitor coagulation and adjust treatment. Digoxin effects or levels can fall as euthyroidism is restored.",
            "Insulin and glucose-lowering drugs: requirements can rise; monitor glucose.",
            "Tricyclic/tetracyclic antidepressants, sympathomimetics and ketamine: cardiac or stimulatory toxicity can increase; monitor heart rate, pressure and symptoms. Sertraline may increase replacement requirements.",
            "Rifampin, phenobarbital and tyrosine-kinase inhibitors can change requirements. Amiodarone and high-dose glucocorticoids or propranolol alter T4-to-T3 conversion. Estrogens, androgens, phenytoin and other binding modifiers can alter tests; interpret free hormone and clinical status."
          ]
        },
        {
          "title": "Biotin and laboratory tests",
          "sources": [
            "oral"
          ],
          "paragraphs": [
            "Biotin can distort thyroid immunoassays. Stop biotin-containing supplements for at least 2 days before TSH or T4 testing, as directed by the label, and disclose their use to the laboratory and clinician."
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Replacement continues through pregnancy, lactation and childhood with individualized monitoring.",
      "takeaway": "Do not stop needed thyroid replacement because of pregnancy.",
      "blocks": [
        {
          "title": "Pregnancy",
          "sources": [
            "oral"
          ],
          "paragraphs": [
            "Untreated maternal hypothyroidism poses maternal and fetal risks. Available clinical experience with replacement doses has not shown increased major birth defects or miscarriage. Continue treatment and promptly treat newly diagnosed disease; requirements commonly increase. Use trimester-specific TSH targets in primary disease and the pregnancy monitoring schedule above."
          ]
        },
        {
          "title": "Lactation",
          "paragraphs": [
            "T4 is a normal milk constituent. Limited data on replacement therapy have not shown adverse infant effects. Adequate maternal treatment can improve low milk production caused by hypothyroidism. Continue individualized postpartum thyroid testing; some patients with Hashimoto disease need more than their pre-pregnancy dose."
          ],
          "sources": [
            "oral",
            "lactation"
          ]
        },
        {
          "title": "Pediatric and geriatric considerations",
          "sources": [
            "oral"
          ],
          "paragraphs": [
            "Treat congenital disease promptly to protect growth and neurodevelopment. Follow both thyroid tests and growth/bone maturation; monitor infants for cardiac overload or arrhythmias during the first 2 weeks. Older adults need a reduced starting dose and careful cardiac assessment."
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Synthetic T4 supplies the precursor of active T3.",
      "takeaway": "A long half-life makes dose changes and laboratory reassessment gradual.",
      "blocks": [
        {
          "title": "Mechanism of action and pharmacodynamics",
          "sources": [
            "oral"
          ],
          "paragraphs": [
            "Levothyroxine has the physiological effects of endogenous T4. Peripheral deiodination supplies much of circulating T3; thyroid-hormone nuclear receptors regulate gene transcription and protein synthesis."
          ]
        },
        {
          "title": "Pharmacokinetics",
          "sources": [
            "oral"
          ],
          "facts": [
            [
              "Oral absorption",
              "Approximately 40–80%; fasting improves absorption, while food, medicines and malabsorption can reduce it."
            ],
            [
              "Distribution / metabolism",
              "More than 99% protein bound; deiodination plus glucuronide/sulfate conjugation."
            ],
            [
              "Half-life / elimination",
              "T4 half-life about 6–7 days when euthyroid, longer in hypothyroidism; renal and fecal elimination."
            ]
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Interpret thyroid tests in the context of the disease and administration routine.",
      "takeaway": "TSH guides primary disease; free T4 guides secondary or tertiary disease.",
      "blocks": [
        {
          "title": "Monitoring parameters",
          "sources": [
            "oral"
          ],
          "open": true,
          "items": [
            "Primary hypothyroidism in adults: measure TSH 6–8 weeks after a dose change; once stable, reassess every 6–12 months and with clinical changes.",
            "Central hypothyroidism: TSH is unreliable for dose adequacy. Follow free T4, aiming for the upper half of its normal range with clinical euthyroidism.",
            "Children: check TSH and total/free T4 at 2 and 4 weeks after initiation, 2 weeks after a dose change, then every 3–12 months once stable until growth completes; assess development and bone maturation.",
            "Assess pulse, cardiac symptoms, glucose and relevant anticoagulation; investigate adherence, timing and absorption before escalating an unexpectedly high dose."
          ]
        },
        {
          "title": "Patient counseling information",
          "sources": [
            "oral"
          ],
          "items": [
            "Confirm the tablet strength in micrograms and follow one consistent dosing routine. Improvement takes weeks; replacement is often lifelong.",
            "Tell the clinician about pregnancy, breastfeeding, supplements, heart disease and adrenal/pituitary disease. Stop biotin before tests as directed.",
            "Report palpitations, chest pain, shortness of breath, marked tremor or allergic symptoms promptly. Do not use thyroid hormone as a weight-loss medicine."
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Strengths, colors and excipients are manufacturer-specific.",
      "takeaway": "Verify the labeled strength and packaging; color alone cannot identify a medicine.",
      "blocks": [
        {
          "title": "Representative oral product · Synthroid 50 mcg",
          "sources": [
            "oral"
          ],
          "open": true,
          "facts": [
            [
              "Dosage form / strength",
              "Oral tablet · 50 mcg"
            ],
            [
              "Label packager",
              "AbbVie Inc."
            ],
            [
              "Appearance / imprint",
              "White, round · SYNTHROID and 50"
            ],
            [
              "Example package NDC",
              "0074-4552-90 · Bottle of 90"
            ]
          ],
          "links": [
            {
              "title": "View exact label and package images",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1e11ad30-1041-4520-10b0-8f9d30d30fcc"
            }
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "facts": [
            [
              "Synthroid tablets",
              "25, 50, 75, 88, 100, 112, 125, 137, 150, 175, 200 and 300 mcg."
            ],
            [
              "Linked ready-to-use IV solution",
              "100, 200 or 500 mcg per 5 mL single-dose vial."
            ],
            [
              "Other products",
              "Oral liquid, capsule and injection products have separate labeling; do not apply tablet preparation instructions to them."
            ]
          ],
          "sources": [
            "oral",
            "iv"
          ]
        },
        {
          "title": "Storage and handling",
          "sources": [
            "oral"
          ],
          "paragraphs": [
            "Store Synthroid at 20–25°C; excursions to 15–30°C are permitted. Protect from light and moisture. Follow the exact package instructions for other formulations."
          ]
        }
      ]
    }
  ]
};
