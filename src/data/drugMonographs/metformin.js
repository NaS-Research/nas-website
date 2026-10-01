// Original source-reviewed clinical summaries; product-specific doses are not interchangeable.
export const metformin = {
  "slug": "metformin",
  "name": "Metformin",
  "synonym": "Metformin hydrochloride · IR / ER",
  "description": "An oral biguanide for type 2 diabetes. A focused reference separating the reviewed immediate-release and extended-release tablets, with renal safety and temporary-hold guidance.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Renal function and acute illness matter.",
    "text": "Metformin carries a boxed warning for lactic acidosis. Do not use if eGFR is below 30 mL/min/1.73 m². Follow contrast and procedure hold instructions; possible lactic acidosis requires immediate cessation and emergency assessment.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Biguanide · Antihyperglycemic"
    ],
    [
      "Common brand",
      "Glucophage · Formulations vary"
    ],
    [
      "Reference focus",
      "Laurus immediate-release and ER tablets"
    ]
  ],
  "sources": [
    {
      "id": "oral",
      "title": "Metformin hydrochloride · IR and ER tablet prescribing information",
      "publisher": "DailyMed / Laurus Labs",
      "note": "Prescribing information revised July 2026; DailyMed updated September 25, 2026. SPL version 8; includes mitochondrial-disease warning.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c3dfa8a1-d10a-4a1a-8eba-5f4e2a5a2949"
    },
    {
      "id": "lactation",
      "title": "Metformin · Lactation",
      "publisher": "LactMed / National Library of Medicine",
      "note": "Milk exposure and infant cautions. Revised August 15, 2026.",
      "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK501020/"
    },
    {
      "id": "prevention",
      "title": "Diabetes prevention · Standards of Care 2026",
      "publisher": "American Diabetes Association",
      "note": "Section 3, recommendations 3.7–3.10; public full text.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12690170/"
    },
    {
      "id": "pregnancy",
      "title": "Diabetes in pregnancy · Standards of Care 2026",
      "publisher": "American Diabetes Association",
      "note": "Recommendation 15.17 and metformin placental transfer; indexed primary-source excerpts checked.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12690181/"
    },
    {
      "id": "pcos",
      "title": "International PCOS guideline · 2023 summary",
      "publisher": "Monash University / International guideline network",
      "note": "Recommendations 4.3–4.4: off-label metabolic and cycle-regulation uses.",
      "url": "https://www.monash.edu/__data/assets/pdf_file/0003/3371133/PCOS-Guideline-Summary-2023.pdf"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Adjunct to nutrition and exercise for type 2 diabetes.",
      "takeaway": "Distinguish labeled treatment from guideline-supported off-label uses.",
      "blocks": [
        {
          "title": "Labeled oral indications",
          "sources": [
            "oral"
          ],
          "open": true,
          "paragraphs": [
            "The reviewed immediate-release tablets are labeled for adults and children aged 10 years and older with type 2 diabetes. The reviewed ER tablets are labeled for adults; their pediatric safety and effectiveness have not been established."
          ]
        },
        {
          "title": "Selected guideline-supported off-label uses",
          "items": [
            "ADA 2026 supports considering prevention in adults at high diabetes risk, especially ages 25–59 with BMI ≥35 kg/m², higher fasting glucose or A1C, or previous gestational diabetes. It also discusses prevention of hyperglycemia in selected high-risk patients receiving PI3Kα inhibitors or high-dose glucocorticoids.",
            "The international PCOS guideline supports selected metabolic uses, especially adult BMI ≥25 kg/m², and selected cycle-regulation uses with limited adolescent evidence. These are outside the reviewed U.S. diabetes indication and require an individualized plan."
          ],
          "sources": [
            "prevention",
            "pcos"
          ]
        },
        {
          "title": "Limitations of use",
          "sources": [
            "oral"
          ],
          "paragraphs": [
            "Metformin does not treat diabetic ketoacidosis and is contraindicated in metabolic acidosis. The label does not establish conclusive macrovascular risk reduction; do not equate glucose lowering with proven cardiovascular protection for this product."
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Titrate slowly with meals; maximum doses differ by formulation and age.",
      "takeaway": "Adult IR dosing limits do not apply to pediatric or ER regimens.",
      "blocks": [
        {
          "title": "Adult immediate-release tablets",
          "sources": [
            "oral"
          ],
          "open": true,
          "table": {
            "headers": [
              "Parameter",
              "Reviewed IR label"
            ],
            "rows": [
              [
                "Starting dose",
                "500 mg twice daily or 850 mg once daily with meals."
              ],
              [
                "Titration",
                "Increase by 500 mg weekly or 850 mg every 2 weeks according to response/tolerability."
              ],
              [
                "Maximum",
                "2,550 mg/day in divided doses; doses above 2,000 mg may be better tolerated in three doses with meals."
              ]
            ]
          }
        },
        {
          "title": "Adult extended-release tablets",
          "sources": [
            "oral"
          ],
          "table": {
            "headers": [
              "Parameter",
              "Reviewed ER label"
            ],
            "rows": [
              [
                "Starting dose",
                "500 mg once daily with the evening meal."
              ],
              [
                "Titration / usual maximum",
                "Increase by 500 mg weekly, to 2,000 mg once daily with the evening meal."
              ],
              [
                "If inadequate at 2,000 mg once daily",
                "Label permits a trial of 1,000 mg twice daily. If a higher total is needed, switch to IR under clinician direction."
              ],
              [
                "Switch from IR",
                "Same daily total up to 2,000 mg once daily; verify the exact ER product."
              ]
            ]
          },
          "paragraphs": [
            "Swallow whole; do not cut, crush or chew. A missed ER dose should not be doubled or replaced with two doses that day; resume the usual next scheduled dose. Other ER brands have different labels."
          ]
        },
        {
          "title": "Pediatric immediate-release tablets",
          "sources": [
            "oral"
          ],
          "badge": "Age 10 years and older",
          "paragraphs": [
            "Start 500 mg twice daily with meals. Increase by 500 mg weekly if needed and tolerated; maximum 2,000 mg/day in two divided doses. This schedule does not establish pediatric use of the reviewed ER product."
          ]
        },
        {
          "title": "Renal and hepatic impairment",
          "sources": [
            "oral"
          ],
          "table": {
            "headers": [
              "eGFR · mL/min/1.73 m²",
              "Label action"
            ],
            "rows": [
              [
                "Below 30",
                "Contraindicated; discontinue."
              ],
              [
                "30–45",
                "Starting therapy is not recommended."
              ],
              [
                "Falls below 45 during therapy",
                "Reassess the benefit and risk of continuing."
              ]
            ]
          },
          "paragraphs": [
            "Check eGFR before treatment and periodically. The label provides no standard dose-reduction formula for continued therapy below 45. Avoid use in hepatic impairment because of lactic-acidosis risk."
          ]
        },
        {
          "title": "Iodinated contrast and procedures",
          "sources": [
            "oral"
          ],
          "paragraphs": [
            "Hold at or before iodinated contrast if eGFR is 30–60, there is a history of liver disease, alcoholism or heart failure, or contrast is intra-arterial. Recheck eGFR after 48 hours and restart only if stable. Temporarily stop while surgical/procedural food and fluid intake is restricted; agree the restart plan with the treating team."
          ]
        },
        {
          "title": "Off-label dosing",
          "paragraphs": [
            "For PCOS, the guideline suggests a low starting dose and 500 mg increases every 1–2 weeks, with suggested ceilings of 2.5 g/day in adults and 2 g/day in adolescents. This does not confer pediatric ER approval. Prevention regimens should follow the selected guideline and clinician plan rather than a universal diabetes-label maximum."
          ],
          "sources": [
            "pcos",
            "prevention"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Lactic acidosis, vitamin B12 depletion and combination-related hypoglycemia.",
      "takeaway": "Stop treatment and obtain emergency assessment for possible lactic acidosis.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "sources": [
            "oral"
          ],
          "open": true,
          "tone": "warning",
          "items": [
            "Accumulation and lactic acidosis risk rise with renal dysfunction, hypoxic illness, hepatic disease, excess alcohol, some interacting drugs and older age. Stop for shock, sepsis, acute myocardial infarction or hypoxic/hypoperfused acute heart failure.",
            "The September 2026 label advises against use in mitochondrial diseases such as MELAS or maternally inherited diabetes and deafness; discontinue if elevated lactate develops and evaluate the clinical context.",
            "New unexplained severe weakness, muscle pain, abdominal symptoms, rapid/deep breathing or unusual sleepiness may signal lactic acidosis. Stop metformin and seek immediate care; hospital treatment and prompt hemodialysis may be needed."
          ]
        },
        {
          "title": "Contraindications",
          "sources": [
            "oral"
          ],
          "items": [
            "eGFR below 30 mL/min/1.73 m².",
            "Hypersensitivity to metformin.",
            "Acute or chronic metabolic acidosis, including diabetic ketoacidosis with or without coma."
          ]
        },
        {
          "title": "Boxed warning",
          "sources": [
            "oral"
          ],
          "paragraphs": [
            "Metformin-associated lactic acidosis has been fatal. The boxed warning lists renal and hepatic dysfunction, contrast, surgery, hypoxic states, excessive alcohol, mitochondrial disease and selected interactions among important risk factors."
          ]
        },
        {
          "title": "Adverse reactions and overdose",
          "sources": [
            "oral"
          ],
          "paragraphs": [
            "Diarrhea, nausea/vomiting and other gastrointestinal symptoms are common; IR and ER trial frequencies differ and are not interchangeable. Long-term therapy can lower vitamin B12. Insulin or secretagogue combinations can cause hypoglycemia. Postmarketing liver injury has been reported. Suspected overdose requires urgent assessment; contact U.S. Poison Control at 1-800-222-1222."
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Review drugs that cause acidosis, alter clearance or change glucose.",
      "takeaway": "Choose a monitoring or dose-adjustment action for each relevant combination.",
      "blocks": [
        {
          "title": "Clinically relevant interactions",
          "sources": [
            "oral"
          ],
          "open": true,
          "items": [
            "Carbonic-anhydrase inhibitors such as topiramate, zonisamide and acetazolamide promote acidosis: consider more frequent monitoring.",
            "Renal transporter inhibitors such as cimetidine, dolutegravir, ranolazine and vandetanib increase metformin exposure: assess the benefit and lactic-acidosis risk.",
            "Alcohol impairs lactate handling: avoid excessive acute or chronic intake.",
            "Insulin or sulfonylureas increase hypoglycemia risk: their doses may need reduction.",
            "Corticosteroids, thiazides, thyroid hormones and other hyperglycemia-promoting medicines can worsen control: monitor glucose when starting and for hypoglycemia when withdrawing them."
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Pregnancy, infancy exposure and organ dysfunction require individual assessment.",
      "takeaway": "Pregnancy treatment needs an obstetric diabetes plan, not automatic continuation or cessation.",
      "blocks": [
        {
          "title": "Pregnancy",
          "paragraphs": [
            "Available human studies have not shown a clear major-malformation or miscarriage signal, but the label considers the data insufficient to exclude risk. Poor glucose control itself carries substantial risk. ADA 2026 prefers insulin for type 2 diabetes and gestational diabetes in pregnancy; metformin crosses the placenta and is not a first-line pregnancy agent. Review treatment with the obstetric team."
          ],
          "sources": [
            "oral",
            "pregnancy"
          ]
        },
        {
          "title": "Lactation",
          "paragraphs": [
            "Milk exposure is low. LactMed reports infant intake generally below 0.5% of the maternal weight-adjusted dose and no adverse effects in one sizeable prospective study; timing feeds around doses adds little benefit. Use extra caution for newborn, premature or renally impaired infants. The label notes limited infant-outcome data; weigh maternal need and infant factors."
          ],
          "sources": [
            "oral",
            "lactation"
          ]
        },
        {
          "title": "Reproductive potential",
          "sources": [
            "oral"
          ],
          "paragraphs": [
            "Metformin can restore ovulation in some previously anovulatory premenopausal patients, creating a possibility of unintended pregnancy. Discuss contraception and pregnancy intentions."
          ]
        },
        {
          "title": "Pediatric, geriatric and organ-function considerations",
          "sources": [
            "oral"
          ],
          "paragraphs": [
            "IR use below age 10 and pediatric use of this ER product are not established. Start cautiously in older adults and check renal function more often. Renal dysfunction increases accumulation; hepatic impairment is a reason to avoid use even though metformin is not hepatically metabolized."
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Reduces hepatic glucose output and improves insulin sensitivity.",
      "takeaway": "Renal elimination makes kidney function a key safety determinant.",
      "blocks": [
        {
          "title": "Mechanism of action and pharmacodynamics",
          "sources": [
            "oral"
          ],
          "paragraphs": [
            "Metformin lowers basal and post-meal glucose through reduced hepatic glucose production and intestinal glucose absorption and improved peripheral insulin sensitivity. It does not increase insulin secretion."
          ]
        },
        {
          "title": "Pharmacokinetics",
          "sources": [
            "oral"
          ],
          "facts": [
            [
              "Absorption",
              "IR 500 mg fasting bioavailability approximately 50–60%; ER median peak about 7 hours. Food effects differ by formulation."
            ],
            [
              "Metabolism / distribution",
              "No identified human metabolites; negligible plasma-protein binding and red-cell distribution."
            ],
            [
              "Elimination",
              "Unchanged renal excretion, including tubular secretion; plasma half-life about 6.2 hours and blood half-life about 17.6 hours. Renal impairment prolongs elimination."
            ]
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Track glucose response, renal function and vitamin B12.",
      "takeaway": "Make temporary-hold and restart instructions explicit.",
      "blocks": [
        {
          "title": "Monitoring parameters",
          "sources": [
            "oral"
          ],
          "open": true,
          "items": [
            "Check glucose control and HbA1c according to the diabetes plan; assess tolerability during titration.",
            "Obtain eGFR before treatment and at least annually; test more often in older adults or those at risk of renal decline and after relevant acute illness.",
            "Measure hematologic parameters annually and vitamin B12 every 2–3 years under this label; investigate anemia or neuropathy sooner.",
            "Review acute illness, dehydration, hypoxia, hepatic disease, alcohol and new interactions; monitor combination-associated hypoglycemia."
          ]
        },
        {
          "title": "Patient counseling information",
          "sources": [
            "oral"
          ],
          "items": [
            "Take with the prescribed meal schedule. ER tablets must remain whole; their inactive shell may appear in stool.",
            "Report persistent gastrointestinal intolerance. Do not double a missed ER dose.",
            "Tell procedural teams about metformin before contrast or surgery. Follow a clinician-provided hold/restart plan for restricted intake or acute illness.",
            "Know lactic-acidosis warning symptoms and seek urgent care. Learn hypoglycemia recognition and treatment when also using insulin or a secretagogue."
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Identify the exact IR or ER product before applying directions.",
      "takeaway": "An imprint, labeled strength and pharmacy verification are more useful than appearance alone.",
      "blocks": [
        {
          "title": "Representative oral product · Laurus IR 500 mg",
          "sources": [
            "oral"
          ],
          "open": true,
          "facts": [
            [
              "Dosage form / strength",
              "Film-coated immediate-release tablet · 500 mg"
            ],
            [
              "Label packager",
              "Laurus Labs Limited · Manufactured for Laurus Generics Inc."
            ],
            [
              "Appearance / imprint",
              "White to off-white, round, biconvex · LL"
            ],
            [
              "Example package NDC",
              "42385-947-01 · Bottle of 100"
            ]
          ],
          "links": [
            {
              "title": "View exact label and package images",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c3dfa8a1-d10a-4a1a-8eba-5f4e2a5a2949"
            }
          ],
          "paragraphs": [
            "Other manufacturers use different imprints; verify packaging with a pharmacist."
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "sources": [
            "oral"
          ],
          "facts": [
            [
              "Reviewed IR tablets",
              "500, 850 and 1,000 mg."
            ],
            [
              "Reviewed ER tablets",
              "500 mg (LA20) and 750 mg (LA19), white/off-white capsule-shaped tablets."
            ],
            [
              "Other formulations",
              "Other ER products, liquids and combination tablets have independent labels and dosing limits."
            ]
          ]
        },
        {
          "title": "Storage and handling",
          "sources": [
            "oral"
          ],
          "paragraphs": [
            "Store at 20–25°C; permitted excursions are 15–30°C. Dispense in a light-resistant container. Retain the formulation and strength information and keep medicines away from children."
          ]
        }
      ]
    }
  ]
};
