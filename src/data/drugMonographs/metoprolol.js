// Original summaries of verified product-specific public references.
export const metoprolol = {
  "slug": "metoprolol",
  "name": "Metoprolol",
  "synonym": "Lopressor · Toprol-XL",
  "description": "A beta blocker used for cardiovascular disease. This reference distinguishes oral tartrate, succinate extended release, and monitored intravenous therapy.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Check the salt. Plan withdrawal.",
    "text": "Tartrate and succinate have different schedules and indications. Abrupt withdrawal can worsen angina or precipitate myocardial infarction; arrange a clinician-directed taper. Severe bradycardia, fainting, or breathing difficulty requires urgent assessment.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Beta₁-selective adrenergic blocker"
    ],
    [
      "Common brands",
      "Lopressor · Toprol-XL"
    ],
    [
      "Reference focus",
      "Oral tartrate and succinate ER; IV distinctions"
    ]
  ],
  "sources": [
    {
      "id": "ir",
      "title": "Metoprolol tartrate · Alembic tablets",
      "publisher": "DailyMed / National Library of Medicine",
      "note": "Full prescribing information; version 10, effective August 22, 2024. Hypertension, angina, MI, and product identification.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=24837d82-0f3f-4482-9af0-31e5f675c30f"
    },
    {
      "id": "er",
      "title": "Toprol-XL · Metoprolol succinate ER",
      "publisher": "DailyMed / National Library of Medicine",
      "note": "Full prescribing information; version 20, effective April 24, 2023. Heart failure and pediatric hypertension are formulation-specific.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=991fe00b-498b-400e-9e5b-921cb07d9b2c"
    },
    {
      "id": "iv",
      "title": "Metoprolol tartrate injection · OneSource",
      "publisher": "DailyMed / National Library of Medicine",
      "note": "Full prescribing information; version 1, effective March 17, 2026. Acute MI protocol and IV contraindications.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=05946833-9d66-4832-a0d8-b91b1ff01b8b"
    },
    {
      "id": "boxed",
      "title": "Metoprolol tartrate · Boxed withdrawal warning",
      "publisher": "DailyMed / National Library of Medicine",
      "note": "Linked label version 6, effective July 14, 2016; boxed presentation differs from selected newer labels.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f2152494-0370-492d-9402-4f1368a277c7"
    },
    {
      "id": "af",
      "title": "Atrial fibrillation · ACC rate-control reference",
      "publisher": "American College of Cardiology",
      "note": "Public ACC toolkit identifies metoprolol for AF rate control, an off-label use; historical dosing table, not a current individualized regimen.",
      "url": "https://www.acc.org/~/media/Files/Migration%20Content/Quality%20and%20Clinical%20Trials/AFib%20Toolkit/4_AF_TK_RateRhythmDosingTable_3_7_2013.pdf?la=en"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Cardiovascular indications depend on the formulation.",
      "takeaway": "Preserve the distinction between tartrate MI therapy and succinate ER heart-failure therapy.",
      "blocks": [
        {
          "title": "Labeled oral indications",
          "sources": [
            "ir",
            "er"
          ],
          "open": true,
          "table": {
            "headers": [
              "Formulation",
              "Labeled uses"
            ],
            "rows": [
              [
                "Tartrate immediate-release tablets",
                "Adult hypertension; long-term angina; hemodynamically stable definite or suspected acute MI to reduce cardiovascular mortality."
              ],
              [
                "Succinate ER · Toprol-XL",
                "Hypertension, including patients aged ≥6 years; long-term angina; reduction of cardiovascular mortality and heart-failure hospitalization."
              ]
            ]
          }
        },
        {
          "title": "Intravenous therapy and off-label rate control",
          "sources": [
            "iv",
            "af"
          ],
          "paragraphs": [
            "IV tartrate is labeled for stable acute MI with subsequent oral maintenance. Metoprolol also appears in professional AF rate-control guidance; this is off-label in the selected U.S. labels. Rhythm, hemodynamic status, ventricular function, and the current specialist protocol determine selection."
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Titrate to the indication, blood pressure, heart rate, and tolerance.",
      "takeaway": "Do not apply the heart-failure schedule to tartrate or substitute formulations without an explicit prescription.",
      "blocks": [
        {
          "title": "Immediate-release oral tartrate · Adults",
          "sources": [
            "ir"
          ],
          "open": true,
          "table": {
            "headers": [
              "Indication",
              "Selected Alembic label regimen"
            ],
            "rows": [
              [
                "Hypertension",
                "Start 100 mg/day, single or divided doses; adjust at ≥1-week intervals. Effective range 100–450 mg/day; >450 mg/day not studied. Check BP near the end of the interval."
              ],
              [
                "Angina",
                "Start 100 mg/day in two doses; increase at weekly intervals. Effective range 100–400 mg/day; >400 mg/day not studied."
              ],
              [
                "Acute MI · After IV therapy",
                "After full tolerated IV dosing: 50 mg every 6 hours, starting 15 minutes after the last IV dose, for 48 hours. If intolerance: reduce to 25 mg for this phase. Titrate to 100 mg twice daily as tolerated; label specifies at least 3 months."
              ]
            ]
          },
          "paragraphs": [
            "Take with or immediately after meals. Acute MI initiation and oral transition require professional supervision; do not use the table as an unsupervised start or conversion plan."
          ]
        },
        {
          "title": "Extended-release oral succinate · Toprol-XL",
          "sources": [
            "er"
          ],
          "table": {
            "headers": [
              "Population / indication",
              "Label regimen"
            ],
            "rows": [
              [
                "Adult hypertension",
                "Start 25–100 mg once daily; adjust at weekly or longer intervals. >400 mg/day not studied."
              ],
              [
                "Adult angina",
                "Start 100 mg once daily; titrate weekly. >400 mg/day not studied."
              ],
              [
                "Heart failure",
                "After other HF therapy is stabilized: 25 mg daily for NYHA II, or 12.5 mg daily for more severe HF. Double every 2 weeks to the highest tolerated dose, up to 200 mg/day."
              ],
              [
                "Hypertension · Age ≥6 years",
                "Start 1 mg/kg once daily, initial maximum 50 mg. >2 mg/kg/day or >200 mg/day not studied."
              ]
            ]
          },
          "paragraphs": [
            "Scored Toprol-XL tablets may be divided; do not crush or chew either half. Do not advance HF titration while decompensation persists; symptomatic bradycardia or worsening HF may require dose reduction or temporary interruption by the clinician."
          ]
        },
        {
          "title": "Intravenous tartrate · Acute MI",
          "sources": [
            "iv"
          ],
          "badge": "Monitored clinical setting",
          "paragraphs": [
            "After hemodynamic stabilization in coronary care or an equivalent unit, the selected label specifies three 5 mg IV boluses about 2 minutes apart, with blood pressure, heart rate, and ECG monitoring. Transition to oral therapy according to the oral product label. This MI regimen is distinct from off-label arrhythmia protocols."
          ]
        },
        {
          "title": "Hepatic and renal impairment",
          "sources": [
            "ir",
            "er"
          ],
          "paragraphs": [
            "Hepatic impairment can markedly increase exposure: begin below the usual indication-specific dose and titrate cautiously. Chronic renal failure alone does not require a label-directed reduction. Consider age, cardiac function, interactions, and the overall clinical state."
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Withdrawal, bradycardia, cardiac decompensation, and bronchospasm require attention.",
      "takeaway": "A beta₁-selective drug can still cause bronchospasm and conceal hypoglycemia warning signs.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "sources": [
            "ir",
            "er",
            "iv"
          ],
          "open": true,
          "tone": "warning",
          "items": [
            "Plan withdrawal over 1–2 weeks with monitoring for ischemia; do not stop chronic therapy abruptly, including therapy for hypertension alone.",
            "Monitor for severe bradycardia, conduction block, hypotension, and worsening HF. Restore stability before increasing the dose.",
            "Bronchospastic disease generally warrants avoiding beta blockers; if necessary, use the lowest appropriate dose with access to bronchodilator treatment. Selectivity is incomplete.",
            "Hypoglycemia may be severe or prolonged, particularly with diabetes, fasting, vomiting, or childhood exposure; tachycardia may be masked.",
            "Give an alpha blocker first in pheochromocytoma. Withdrawal can precipitate thyroid storm in thyrotoxicosis. Peripheral arterial symptoms can worsen.",
            "Avoid starting a high-dose beta-blocker regimen around noncardiac surgery. Chronic therapy should not routinely be withdrawn; notify the anesthesia team. Severe allergy may respond poorly to usual epinephrine doses."
          ]
        },
        {
          "title": "Contraindications",
          "sources": [
            "ir",
            "er",
            "iv"
          ],
          "paragraphs": [
            "Oral labels exclude severe bradycardia, second- or third-degree block, cardiogenic shock, decompensated HF, sick sinus syndrome without a pacemaker, and ingredient hypersensitivity. The selected tartrate tablet label also lists systolic BP <100 mmHg; check the exact product.",
            "The IV label additionally specifies heart rate <45/min, significant first-degree block (PR ≥0.24 seconds), systolic BP <100 mmHg, and decompensated cardiac failure; second/third-degree block is excluded unless a functioning pacemaker is present. It also excludes hypersensitivity to related derivatives or other beta blockers."
          ]
        },
        {
          "title": "Boxed-warning presentation",
          "sources": [
            "boxed",
            "ir",
            "er"
          ],
          "paragraphs": [
            "Some metoprolol labels present ischemic heart disease and abrupt withdrawal as a boxed warning. The selected Alembic and Toprol-XL labels place the warning in section 5.1. The clinical withdrawal risk remains; verify boxed status on the dispensed product."
          ]
        },
        {
          "title": "Adverse reactions",
          "sources": [
            "ir",
            "er"
          ],
          "paragraphs": [
            "Reported effects include tiredness, dizziness, depression, diarrhea, rash, dyspnea, slow pulse, and hypotension. Serious events include heart block, worsening HF, bronchospasm, and severe hemodynamic effects. Frequencies differ by indication and study; the acute MI trial experience is not a general outpatient rate."
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Review both medicines that slow the heart and CYP2D6 inhibitors.",
      "takeaway": "Clonidine withdrawal needs a coordinated plan.",
      "blocks": [
        {
          "title": "Clinically relevant interactions",
          "sources": [
            "ir",
            "er",
            "iv"
          ],
          "open": true,
          "table": {
            "headers": [
              "Combination",
              "Clinical action"
            ],
            "rows": [
              [
                "Digoxin, verapamil, diltiazem, clonidine; other heart-rate-lowering medicines",
                "Additive bradycardia or conduction delay; review combination and monitor pulse/rhythm. IV label also flags fingolimod and similar agents."
              ],
              [
                "Fluoxetine, paroxetine, quinidine, propafenone",
                "CYP2D6 inhibition increases exposure and reduces cardioselectivity; monitor closely if unavoidable."
              ],
              [
                "Reserpine / MAO inhibitors; other BP-lowering drugs",
                "Monitor for additive hypotension and marked bradycardia."
              ],
              [
                "Clonidine discontinuation",
                "Label directs withdrawing the beta blocker several days before gradual clonidine withdrawal; clinician must also account for metoprolol ischemic withdrawal risk. Do not attempt independently."
              ],
              [
                "Epinephrine in severe allergy",
                "Usual doses may be less effective; emergency clinicians need to know about beta-blocker use."
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Account for age, pregnancy, breastfeeding, and organ function.",
      "takeaway": "Pediatric hypertension evidence applies to succinate ER, not all metoprolol products.",
      "blocks": [
        {
          "title": "Pregnancy",
          "sources": [
            "ir",
            "er"
          ],
          "paragraphs": [
            "Observational data have not shown an association with major congenital malformations, but cannot establish absence of risk. Metoprolol crosses the placenta; untreated maternal cardiovascular disease also carries risk. Observe exposed neonates for bradycardia, hypotension, hypoglycemia, and respiratory depression. Individualize treatment with the obstetric and cardiovascular teams."
          ]
        },
        {
          "title": "Lactation",
          "sources": [
            "er"
          ],
          "paragraphs": [
            "Metoprolol enters milk in small amounts in the limited reports; no infant adverse effects were identified in those reports. Monitor the breastfed infant for bradycardia or signs of beta blockade, including listlessness consistent with hypoglycemia."
          ]
        },
        {
          "title": "Pediatric and geriatric considerations",
          "sources": [
            "ir",
            "er",
            "iv"
          ],
          "paragraphs": [
            "Toprol-XL has pediatric hypertension dosing from age 6; safety/effectiveness below 6 is not established. Pediatric safety/effectiveness is not established for the selected tartrate tablet or injection. Older adults generally warrant a low starting dose and cautious titration because organ impairment and interacting medicines are common."
          ]
        },
        {
          "title": "Reproductive and organ-function considerations",
          "sources": [
            "ir",
            "er"
          ],
          "paragraphs": [
            "Beta blockers may contribute to erectile dysfunction; discuss symptoms rather than interrupting therapy. Hepatic dysfunction increases exposure and warrants lower initiation doses. Chronic renal failure alone does not require dose reduction in the selected oral labels."
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Beta blockade reduces heart rate, AV conduction, and cardiac workload.",
      "takeaway": "CYP2D6 activity can change exposure and the degree of cardioselectivity.",
      "blocks": [
        {
          "title": "Mechanism of action and pharmacodynamics",
          "sources": [
            "ir",
            "er"
          ],
          "paragraphs": [
            "Preferential beta₁ antagonism reduces catecholamine-driven cardiac effects and myocardial oxygen demand. Beta₂ blockade increases at higher concentrations. Extended-release delivery supports steadier beta blockade across the daily interval; release behavior does not change the active ingredient."
          ]
        },
        {
          "title": "Pharmacokinetics",
          "sources": [
            "ir",
            "er"
          ],
          "facts": [
            [
              "Metabolism",
              "Predominantly hepatic CYP2D6; poor metabolism or enzyme inhibition raises exposure."
            ],
            [
              "Half-life",
              "Tartrate label: approximately 3–4 hours, prolonged to 7–9 hours in poor CYP2D6 metabolizers. Toprol-XL label reports approximately 3–7 hours."
            ],
            [
              "Elimination",
              "Predominantly urinary inactive metabolites; little oral dose is excreted unchanged."
            ],
            [
              "Distribution",
              "Crosses placenta and blood–brain barrier; present in human milk."
            ]
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Follow response and tolerance during each dose change.",
      "takeaway": "Record the salt, release type, schedule, and individualized pulse/BP plan.",
      "blocks": [
        {
          "title": "Monitoring parameters",
          "sources": [
            "ir",
            "er",
            "iv"
          ],
          "open": true,
          "items": [
            "Check blood pressure, heart rate, dizziness, syncope, and conduction concerns; ECG monitoring is required during IV administration.",
            "During HF titration, assess dyspnea, edema, weight changes, and stability before increasing the dose.",
            "Monitor glucose and hypoglycemia symptoms when diabetes, fasting, or vomiting increases risk; a normal pulse does not exclude hypoglycemia.",
            "Recheck interacting drugs and hepatic function when response or tolerance changes. Monitor for chest pain during taper."
          ]
        },
        {
          "title": "Patient counseling information",
          "sources": [
            "ir",
            "er"
          ],
          "items": [
            "Take regularly as prescribed; do not change the salt, schedule, or dose without review. Tartrate tablets: take with or immediately after food.",
            "For a missed oral dose, follow the next scheduled dose without doubling. Never stop abruptly.",
            "Avoid driving until the effect on alertness is known. Notify the prescriber/dentist before surgery.",
            "Report new breathing difficulty promptly; seek urgent help for severe fainting, chest pain, or marked breathing distress."
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Confirm salt, release mechanism, strength, and packaging.",
      "takeaway": "A matching ingredient name does not establish interchangeable directions.",
      "blocks": [
        {
          "title": "Representative oral product · Toprol-XL 25 mg",
          "sources": [
            "er"
          ],
          "open": true,
          "facts": [
            [
              "Dosage form / strength",
              "Scored film-coated ER tablet · 25 mg metoprolol tartrate-equivalent labeling"
            ],
            [
              "Salt",
              "Metoprolol succinate"
            ],
            [
              "Appearance / imprint",
              "White, oval, biconvex · A/β"
            ],
            [
              "Example package NDC",
              "70347-025-02 · 100 tablets"
            ]
          ],
          "links": [
            {
              "title": "View exact product label and package images",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=991fe00b-498b-400e-9e5b-921cb07d9b2c"
            }
          ],
          "paragraphs": [
            "Other manufacturers and strengths differ. Ask a pharmacist to confirm packaging and imprint."
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "sources": [
            "ir",
            "er",
            "iv"
          ],
          "facts": [
            [
              "Tartrate tablets · Selected manufacturer",
              "25, 50, and 100 mg, functionally scored."
            ],
            [
              "Succinate ER · Toprol-XL",
              "25, 50, 100, and 200 mg tartrate-equivalent strengths."
            ],
            [
              "Tartrate injection · Selected product",
              "1 mg/mL · 5 mg in a 5 mL vial."
            ],
            [
              "Other products",
              "ER capsules and other manufacturers have separate labels and administration instructions."
            ]
          ]
        },
        {
          "title": "Storage and handling",
          "sources": [
            "ir",
            "er",
            "iv"
          ],
          "paragraphs": [
            "Selected tartrate tablets: 20–25°C, protected from moisture and heat in a tight, light-resistant container. Toprol-XL: 25°C, permitted excursions 15–30°C. Selected IV vials: 25°C, excursions 15–30°C, protected from light and heat. Keep medicines out of children’s reach and follow the exact package."
          ]
        }
      ]
    }
  ]
};
