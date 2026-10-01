// Original label-reviewed clinical summaries; formulation-specific directions.
export const venlafaxine = {
  "slug": "venlafaxine",
  "name": "Venlafaxine",
  "synonym": "Effexor XR · SNRI",
  "description": "An antidepressant with immediate release and extended release oral products. Indications, dose ceilings and organ-impairment adjustments depend on the exact formulation.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Monitor mood and taper under supervision.",
    "text": "Seek urgent help for suicidal thoughts, severe agitation or serotonin-syndrome symptoms. Abrupt stopping can cause severe, prolonged withdrawal.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Serotonin/norepinephrine reuptake inhibitor"
    ],
    [
      "Formulations",
      "Immediate release tablets; ER capsules/tablets"
    ],
    [
      "Reference focus",
      "Selected current U.S. labels"
    ]
  ],
  "sources": [
    {
      "id": "xr",
      "title": "Venlafaxine · ER capsules",
      "publisher": "DailyMed / A-S Medication Solutions; Epic source",
      "note": "Repackager PI displays July 2026; source text footer December 2025. SPL version 3/effective July 1, 2026; these dates describe distinct label elements.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f50029b8-7d05-445a-9d9f-71a1aee6088b"
    },
    {
      "id": "epic",
      "title": "Venlafaxine · Manufacturer ER capsules",
      "publisher": "DailyMed / Epic Pharma",
      "note": "PI January 2026; SPL version 10/effective and publication February 28, 2026. Exact product/storage evidence.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=430777f0-347c-4f21-8c5d-55f4e9897e74"
    },
    {
      "id": "ir",
      "title": "Venlafaxine · Immediate release tablets",
      "publisher": "DailyMed / Sun Pharmaceutical",
      "note": "Clinical footer August 2023; SPL version 14/effective and publication February 11, 2026.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=55889b3d-74c9-4638-9a14-6a4ca3a99f7f"
    },
    {
      "id": "ert",
      "title": "Venlafaxine · ER tablets",
      "publisher": "DailyMed / RemedyRepack",
      "note": "Clinical PI November 2024; SPL version 8/effective and publication August 17, 2026. Selected repack supplies 75 mg tablets.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1ce5786e-22e6-4afa-8052-6eababc6aa4e"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Product-specific adult psychiatric indications.",
      "takeaway": "Do not transfer capsule indications to every tablet.",
      "blocks": [
        {
          "title": "Labeled uses",
          "sources": [
            "xr",
            "ir",
            "ert"
          ],
          "open": true,
          "paragraphs": [
            "Selected ER capsules: adult MDD, GAD, social anxiety and panic disorder. Selected IR tablets: MDD. Selected ER tablets: MDD and social anxiety. Pediatric safety/effectiveness is not established."
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Match dose and interval to formulation and indication.",
      "takeaway": "Higher IR inpatient doses are not ER dose ceilings.",
      "blocks": [
        {
          "title": "Adult ER capsule regimens",
          "sources": [
            "xr"
          ],
          "open": true,
          "table": {
            "headers": [
              "Indication",
              "Selected label regimen"
            ],
            "rows": [
              [
                "MDD / GAD",
                "75 mg once daily; may start 37.5 mg for 4–7 days. Increase by ≤75 mg at intervals ≥4 days; maximum 225 mg/day."
              ],
              [
                "Social anxiety",
                "75 mg once daily; higher doses showed no added benefit."
              ],
              [
                "Panic disorder",
                "37.5 mg/day for 7 days, then 75 mg/day; increases ≤75 mg at intervals ≥7 days, maximum approximately 225 mg/day."
              ]
            ]
          }
        },
        {
          "title": "Immediate release and ER tablet distinctions",
          "sources": [
            "ir",
            "ert"
          ],
          "paragraphs": [
            "IR MDD: start 75 mg/day in 2–3 divided doses with food; titrate by ≤75 mg at intervals ≥4 days, generally to 225 mg/day. Certain severely depressed patients, including inpatients, may require up to 375 mg/day generally in 3 doses. Selected ER tablets: MDD 75 mg/day (optional 37.5 mg for 4–7 days), maximum approximately 225; social anxiety 75 mg/day."
          ]
        },
        {
          "title": "Renal and hepatic adjustments",
          "sources": [
            "xr",
            "ir",
            "ert"
          ],
          "paragraphs": [
            "ER capsules: reduce 25–50% at CrCl 30–89 mL/min; reduce ≥50% below 30 or on hemodialysis. Selected IR label: reduce 25% for mild/moderate renal impairment; 50% on hemodialysis. ER tablet label: renal reduction 25–50%; dialysis 50%. Mild/moderate hepatic impairment generally requires 50% reduction; severe disease/cirrhosis may require more. Individualize to exact label and response."
          ]
        },
        {
          "title": "Administration, switching and discontinuation",
          "sources": [
            "xr",
            "ir",
            "ert"
          ],
          "paragraphs": [
            "ER products once daily with food; swallow whole. Selected capsules may be opened onto applesauce using the entire contents, swallowed immediately unchewed and followed by water; do not apply this to tablets. Prescriber-directed IR-to-ER switching uses nearest equivalent daily dose with adjustment. Taper individually; some patients need months. Allow ≥14 days after an antidepressant MAOI before venlafaxine and ≥7 days after venlafaxine before an MAOI."
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Mood, serotonin, BP and withdrawal risks.",
      "takeaway": "Control hypertension before treatment.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "sources": [
            "xr"
          ],
          "open": true,
          "tone": "warning",
          "paragraphs": [
            "Monitor for serotonin syndrome, mania, BP elevation, bleeding and symptomatic hyponatremia. Stop implicated serotonergic agents and seek emergency treatment for serotonin syndrome. Avoid untreated narrow angles; use seizure/heart-disease caution. Sustained BP elevation may require dose reduction/stopping. Severe or prolonged discontinuation symptoms require a slower supervised taper. Progressive dyspnea/cough/chest discomfort needs lung evaluation."
          ]
        },
        {
          "title": "Contraindications",
          "sources": [
            "xr",
            "ir",
            "ert"
          ],
          "paragraphs": [
            "Selected ER capsule label: venlafaxine, desvenlafaxine or excipient hypersensitivity; MAOI combinations or prohibited washout periods. Do not start during linezolid or IV methylene blue. Exact IR/ER-tablet wording differs; review the selected product before urgent reversible-MAOI therapy."
          ]
        },
        {
          "title": "Boxed warning · Suicidal thoughts and behaviors",
          "sources": [
            "xr",
            "ir",
            "ert"
          ],
          "paragraphs": [
            "Antidepressants increase short-term suicidal-thought/behavior risk in pediatric and young-adult patients. Closely monitor all treated patients, especially early and around dose changes. Venlafaxine is not approved for pediatric use."
          ]
        },
        {
          "title": "Adverse reactions",
          "sources": [
            "xr"
          ],
          "paragraphs": [
            "Common effects include nausea, sleepiness, dry mouth, sweating, appetite loss, constipation and sexual dysfunction. Serious postmarketing allergy, arrhythmia and skin/blood/liver disorders are reported. Overdose can cause seizures, ECG changes, impaired consciousness and death; urgent poison-center/emergency care is needed and no specific antidote is known."
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Serotonergic, bleeding and metabolic combinations.",
      "takeaway": "Review medicines before each change.",
      "blocks": [
        {
          "title": "Clinically relevant interactions",
          "sources": [
            "xr",
            "ir",
            "ert"
          ],
          "open": true,
          "items": [
            "MAOIs are contraindicated; other serotonergic drugs increase serotonin-syndrome risk and require observation.",
            "NSAIDs, aspirin, antiplatelets and anticoagulants increase bleeding risk; monitor warfarin indices during initiation, titration and stopping.",
            "ER capsule label: consider reducing venlafaxine with CYP3A inhibitors; consider reducing interacting CYP2D6-substrate doses.",
            "IR/ER-tablet labels advise caution with cimetidine in older/hepatic/BP-risk patients and with metoprolol, haloperidol and other relevant psychotropics; consult exact interaction text.",
            "Avoid alcohol and do not combine with weight-loss agents such as phentermine without review; combination is not recommended."
          ]
        },
        {
          "title": "Laboratory interference",
          "sources": [
            "xr"
          ],
          "paragraphs": [
            "Urine immunoassays may falsely identify PCP or amphetamines, including for days after stopping. Confirmatory testing distinguishes venlafaxine."
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Maternal illness, neonatal adaptation and lactation assessment.",
      "takeaway": "Age alone does not set the dose.",
      "blocks": [
        {
          "title": "Pregnancy and lactation",
          "sources": [
            "xr",
            "ir",
            "ert"
          ],
          "paragraphs": [
            "Current ER-capsule evidence has not identified a major-birth-defect signal, but limitations remain. Mid/late pregnancy may increase preeclampsia risk; near-delivery exposure may increase postpartum hemorrhage and neonatal adaptation complications. Balance untreated illness risks and monitor exposed neonates. Venlafaxine/ODV enter milk; current capsule PI individualizes breastfeeding benefit/risk. Older IR/ER-tablet labels advise choosing nursing or medicine continuation after assessment."
          ]
        },
        {
          "title": "Pediatric and geriatric considerations",
          "sources": [
            "xr"
          ],
          "paragraphs": [
            "Pediatric efficacy is not established; studies showed appetite/weight/growth and BP/lipid concerns. Older adults face greater hyponatremia risk. No age-only adjustment is required, but organ impairment and sensitivity may lower the dose."
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Serotonin and norepinephrine reuptake inhibition.",
      "takeaway": "Active metabolite and formulation affect disposition.",
      "blocks": [
        {
          "title": "Mechanism of action",
          "sources": [
            "xr"
          ],
          "paragraphs": [
            "Venlafaxine and active ODV inhibit neuronal serotonin/norepinephrine reuptake. The full therapeutic mechanism is not established."
          ]
        },
        {
          "title": "Pharmacokinetics",
          "sources": [
            "xr",
            "ert"
          ],
          "facts": [
            [
              "Metabolism",
              "Hepatic; CYP2D6 forms active O-desmethylvenlafaxine (ODV)."
            ],
            [
              "Capsule-label half-lives",
              "Venlafaxine approximately 5 hours; ODV 11 hours."
            ],
            [
              "ER-tablet study",
              "Apparent half-lives approximately 10.7 / 12.5 hours under fed conditions."
            ],
            [
              "Elimination",
              "Predominantly urinary metabolites; renal/hepatic disease reduces clearance."
            ]
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Measure BP and follow mood, tolerance and withdrawal.",
      "takeaway": "Discuss sexual symptoms explicitly.",
      "blocks": [
        {
          "title": "Monitoring parameters",
          "sources": [
            "xr"
          ],
          "open": true,
          "items": [
            "Screen bipolar history; monitor suicidality/clinical worsening early and after dose changes.",
            "Check BP before and regularly during treatment; assess pulse/cardiovascular context.",
            "Assess sodium when at risk/symptomatic, bleeding, sexual function and appetite/weight.",
            "Review renal/hepatic function for dosing; consider lipids with continued treatment.",
            "Monitor during taper; urgent assessment for severe neurologic, eye, allergy or lung symptoms."
          ]
        },
        {
          "title": "Patient counseling information",
          "sources": [
            "xr"
          ],
          "paragraphs": [
            "Do not abruptly stop or alter the dose. Take the correct formulation with food. Avoid alcohol/driving until effects are known; review OTC/herbal medicines. Seek urgent help for suicidal thoughts, serotonin symptoms, severe allergy or eye pain. Read the Medication Guide; inert ER shells/pellets may appear in stool."
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Generic ER capsules and tablets have distinct appearance.",
      "takeaway": "Verify release type at every refill.",
      "blocks": [
        {
          "title": "Representative product · Epic 75 mg ER capsule",
          "sources": [
            "epic"
          ],
          "open": true,
          "facts": [
            [
              "Appearance",
              "Opaque light-grey cap and flesh body."
            ],
            [
              "Imprint",
              "YH / 129 in black ink."
            ],
            [
              "Distributor",
              "Epic Pharma, LLC."
            ],
            [
              "Example NDC",
              "42806-602-30 · 30 capsules."
            ],
            [
              "U.S. status",
              "Prescription; not a controlled substance."
            ]
          ],
          "links": [
            {
              "title": "View exact capsule label",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=430777f0-347c-4f21-8c5d-55f4e9897e74"
            }
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "sources": [
            "xr",
            "ir",
            "ert"
          ],
          "facts": [
            [
              "Selected IR tablets",
              "25, 37.5, 50, 75 and 100 mg."
            ],
            [
              "Selected ER capsules",
              "37.5, 75 and 150 mg."
            ],
            [
              "Selected ER-tablet repack",
              "75 mg; underlying description includes 37.5/75/150/225 mg product family."
            ],
            [
              "Brand context",
              "Effexor XR; exact current product/availability must be verified."
            ]
          ]
        },
        {
          "title": "Storage and handling",
          "sources": [
            "epic",
            "ir",
            "ert"
          ],
          "paragraphs": [
            "Selected products: 20–25°C, excursions 15–30°C. IR tablets protect from light/moisture; ER tablets protect from moisture/humidity; keep ER capsules dry. Keep out of children’s reach and preserve Medication Guide."
          ]
        }
      ]
    }
  ]
};
