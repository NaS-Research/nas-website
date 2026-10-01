// Original primary-label summaries; formulation and indication scope are explicit.
export const lamotrigine = {
  "slug": "lamotrigine",
  "name": "Lamotrigine",
  "synonym": "Lamictal · Lamictal XR · Antiseizure medicine",
  "description": "An oral antiseizure medicine; immediate-release forms also have an adult bipolar I maintenance indication. Slow, interaction-specific titration and supervised restart are essential.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Report rash immediately.",
    "text": "Serious rash can be fatal. Do not exceed the starting dose or escalation schedule, and do not restart after an interruption without the prescriber’s instructions.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Antiseizure medicine"
    ],
    [
      "Key distinction",
      "IR bipolar maintenance; XR epilepsy indications"
    ],
    [
      "Reference focus",
      "Current GSK IR/ODT/dispersible and XR labels"
    ]
  ],
  "sources": [
    {
      "id": "label",
      "title": "Lamictal · Full prescribing information",
      "publisher": "DailyMed / official product labeling",
      "note": "Clinical labeling/Medication Guide October 2025; SPL v45/effective October 10, 2025. Current public label checked October 1, 2026.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d7e3572d-56fe-4727-2bb4-013ccca22678"
    },
    {
      "id": "xr",
      "title": "Lamictal XR · Full prescribing information",
      "publisher": "DailyMed / official product labeling",
      "note": "Clinical labeling/Medication Guide October 2025; SPL v44/effective October 10, 2025. Current public label checked October 1, 2026.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3e2c9a35-6a39-41d7-ad84-3c0bb8894b09"
    },
    {
      "id": "cardiac",
      "title": "Lamotrigine · FDA cardiac safety communication",
      "publisher": "FDA",
      "note": "March 31, 2021 primary safety communication; current public page checked October 1, 2026.",
      "url": "https://www.fda.gov/drugs/drug-safety-and-availability/studies-show-increased-risk-heart-rhythm-problems-seizure-and-mental-health-medicine-lamotrigine"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Age and release form determine labeled use.",
      "takeaway": "Do not apply XR labeling to bipolar disorder.",
      "blocks": [
        {
          "title": "Immediate-release, ODT and dispersible uses",
          "sources": [
            "label"
          ],
          "open": true,
          "paragraphs": [
            "Adjunctive epilepsy treatment at age ≥2: partial-onset, primary generalized tonic-clonic and Lennox-Gastaut generalized seizures. Conversion to monotherapy at age ≥16 with partial-onset seizures applies when receiving a single carbamazepine, phenytoin, phenobarbital, primidone or valproate regimen. Adult bipolar I maintenance delays mood episodes after standard acute treatment; acute mood-episode efficacy is not established."
          ]
        },
        {
          "title": "Extended-release uses",
          "sources": [
            "xr"
          ],
          "paragraphs": [
            "XR: adjunctive PGTC or partial-onset seizures, with/without secondary generalization, at age ≥13. Conversion to monotherapy at age ≥13 applies to partial-onset seizures on a single AED. Initial monotherapy or simultaneous conversion from multiple AEDs is not established. XR has no labeled bipolar-maintenance indication."
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Slow titration depends on indication and co-medications.",
      "takeaway": "Recalculate the plan when interacting drugs change.",
      "blocks": [
        {
          "title": "Titration table context",
          "sources": [
            "label",
            "xr"
          ],
          "open": true,
          "paragraphs": [
            "Columns refer to carbamazepine, phenytoin, phenobarbital or primidone as the listed inducing AEDs. Rifampin/lopinavir-ritonavir follow inducer guidance; estrogen-containing products and atazanavir-ritonavir require the separate label instructions. All numbers are total daily dose unless noted. These tables are label schedules for the stated indication, not a self-directed titration plan."
          ]
        },
        {
          "title": "IR adjunctive epilepsy · age >12",
          "sources": [
            "label"
          ],
          "table": {
            "headers": [
              "Stage",
              "Taking valproate",
              "Neither valproate nor listed inducing AEDs",
              "Listed inducing AEDs without valproate"
            ],
            "rows": [
              [
                "Weeks 1–2",
                "25 mg every other day",
                "25 mg/day",
                "50 mg/day"
              ],
              [
                "Weeks 3–4",
                "25 mg/day",
                "50 mg/day",
                "100 mg/day in 2 doses"
              ],
              [
                "Week 5 onward",
                "Add 25–50 mg/day every 1–2 weeks",
                "Add 50 mg/day every 1–2 weeks",
                "Add 100 mg/day every 1–2 weeks"
              ],
              [
                "Usual maintenance",
                "100–200 mg/day with valproate alone; 100–400 with valproate + inducers, in 1–2 doses",
                "225–375 mg/day in 2 doses",
                "300–500 mg/day in 2 doses"
              ]
            ]
          }
        },
        {
          "title": "IR adjunctive epilepsy · age 2–12",
          "sources": [
            "label"
          ],
          "table": {
            "headers": [
              "Stage",
              "Taking valproate",
              "Neither valproate nor listed inducing AEDs",
              "Listed inducing AEDs without valproate"
            ],
            "rows": [
              [
                "Weeks 1–2",
                "0.15 mg/kg/day in 1–2 doses",
                "0.3 mg/kg/day in 1–2 doses",
                "0.6 mg/kg/day in 2 doses"
              ],
              [
                "Weeks 3–4",
                "0.3 mg/kg/day in 1–2 doses",
                "0.6 mg/kg/day in 2 doses",
                "1.2 mg/kg/day in 2 doses"
              ],
              [
                "Week 5 onward · every 1–2 weeks",
                "Add 0.3 mg/kg/day",
                "Add 0.6 mg/kg/day",
                "Add 1.2 mg/kg/day"
              ],
              [
                "Usual maintenance",
                "1–5 mg/kg/day, max 200 mg/day in 1–2 doses; valproate alone usually 1–3 mg/kg/day",
                "4.5–7.5 mg/kg/day, max 300 mg/day in 2 doses",
                "5–15 mg/kg/day, max 400 mg/day in 2 doses"
              ]
            ]
          },
          "paragraphs": [
            "Use whole 2/5/25 mg dispersible tablets; round calculated starting doses and increments down to whole tablets. For low weights on valproate, follow the label’s Table 3 weight guide rather than a partial tablet/liquid quantity. Under 30 kg, maintenance may need up to 50% increase by response; label maxima and specialist plan still apply."
          ]
        },
        {
          "title": "IR bipolar I maintenance · adults",
          "sources": [
            "label"
          ],
          "table": {
            "headers": [
              "Stage",
              "Taking valproate",
              "Neither valproate nor listed inducing AEDs",
              "Listed inducing AEDs without valproate"
            ],
            "rows": [
              [
                "Weeks 1–2",
                "25 mg every other day",
                "25 mg/day",
                "50 mg/day"
              ],
              [
                "Weeks 3–4",
                "25 mg/day",
                "50 mg/day",
                "100 mg/day in divided doses"
              ],
              [
                "Week 5",
                "50 mg/day",
                "100 mg/day",
                "200 mg/day in divided doses"
              ],
              [
                "Week 6",
                "100 mg/day",
                "200 mg/day",
                "300 mg/day in divided doses"
              ],
              [
                "Week 7 / target",
                "100 mg/day",
                "200 mg/day",
                "Up to 400 mg/day in divided doses"
              ]
            ]
          },
          "paragraphs": [
            "The 400 mg target applies to the specified inducer regimen, not routine monotherapy: trials showed no additional monotherapy benefit above 200 mg/day. Reassess ongoing maintenance, especially beyond 16 weeks."
          ]
        },
        {
          "title": "XR adjunctive epilepsy · age ≥13",
          "sources": [
            "xr"
          ],
          "table": {
            "headers": [
              "Stage",
              "Taking valproate",
              "Neither valproate nor listed inducing AEDs",
              "Listed inducing AEDs without valproate"
            ],
            "rows": [
              [
                "Weeks 1–2",
                "25 mg every other day",
                "25 mg/day",
                "50 mg/day"
              ],
              [
                "Weeks 3–4",
                "25 mg/day",
                "50 mg/day",
                "100 mg/day"
              ],
              [
                "Week 5",
                "50 mg/day",
                "100 mg/day",
                "200 mg/day"
              ],
              [
                "Week 6",
                "100 mg/day",
                "150 mg/day",
                "300 mg/day"
              ],
              [
                "Week 7",
                "150 mg/day",
                "200 mg/day",
                "400 mg/day"
              ],
              [
                "Week 8 onward · maintenance",
                "200–250 mg/day",
                "300–400 mg/day",
                "400–600 mg/day"
              ]
            ]
          },
          "paragraphs": [
            "XR is once daily; week 8 or later increases must not exceed 100 mg/day at weekly intervals. Swallow whole without crushing, chewing or dividing."
          ]
        },
        {
          "title": "Conversion, restart and discontinuation",
          "sources": [
            "label",
            "xr"
          ],
          "paragraphs": [
            "IR conversion-to-monotherapy maintenance is 500 mg/day in 2 doses; XR monotherapy maintenance is 250–300 mg once daily. Follow each label’s exact stepwise AED-withdrawal regimen; the adjunctive table alone is insufficient for conversion. IR→XR may begin at the same total daily dose, with close seizure monitoring, especially with enzyme inducers. After >5 half-lives off treatment, restart initial titration; half-life varies with other drugs, so there is no universal missed-day cutoff. Do not restart after a drug-related rash unless benefits clearly outweigh risks. Taper over ≥2 weeks, about 50% weekly, unless safety requires faster withdrawal."
          ]
        },
        {
          "title": "Administration and organ impairment",
          "sources": [
            "label",
            "xr"
          ],
          "paragraphs": [
            "IR can be taken with or without food. Dispersible tablets may be swallowed, chewed with a little liquid or dispersed in enough water/diluted juice to cover them; consume the entire mixture promptly, never a partial quantity. ODT dissolves on the tongue and is swallowed with/without water. Mild hepatic impairment: no adjustment; moderate/severe without ascites: generally reduce starting/escalation/maintenance doses about 25%; severe with ascites: about 50%. Significant renal impairment may need lower maintenance doses; use caution in severe impairment."
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Rash, systemic hypersensitivity and cardiac risk.",
      "takeaway": "Symptoms can require urgent assessment even without rash.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "sources": [
            "label",
            "xr",
            "cardiac"
          ],
          "open": true,
          "tone": "warning",
          "paragraphs": [
            "HLH may cause fever, rash, enlarged nodes and organ dysfunction; evaluate immediately and discontinue if another cause is not established. DRESS, isolated organ failure, blood dyscrasias and aseptic meningitis are reported. Assess suicidality and seizure worsening. Clinically important structural/functional heart disease increases arrhythmia risk; weigh benefit/risk, particularly with other sodium-channel blockers. Hormonal-product changes and medication/formulation errors can alter exposure."
          ]
        },
        {
          "title": "Contraindications",
          "sources": [
            "label",
            "xr"
          ],
          "paragraphs": [
            "Known lamotrigine or ingredient hypersensitivity, including previous hypersensitivity rash, angioedema, urticaria, extensive itching or mucosal ulceration."
          ]
        },
        {
          "title": "Boxed warning · Serious skin rashes",
          "sources": [
            "label",
            "xr"
          ],
          "paragraphs": [
            "Stevens-Johnson syndrome, toxic epidermal necrolysis and rash-related death can occur. Risk is higher in children, with valproate, excessive starting/escalation doses, and HLA-B*1502. Most life-threatening rashes occur at 2–8 weeks, but later reactions occur. Ordinarily discontinue at the first rash unless clearly unrelated. HLA testing cannot replace vigilance; negative status does not eliminate risk."
          ]
        },
        {
          "title": "Adverse reactions and overdose",
          "sources": [
            "label",
            "xr"
          ],
          "paragraphs": [
            "Dizziness, ataxia, diplopia/blurred vision, headache, nausea, vomiting, somnolence and rash are prominent in epilepsy trials; patterns depend on regimen and population. Serious immune, blood, organ and cardiac events require urgent review. Overdose can cause seizures, coma, ataxia and conduction delay and has been fatal. Hospital/poison-center assessment and supportive care are needed; no specific antidote is known."
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Glucuronidation changes drive dose differences.",
      "takeaway": "Review contraception and every AED change.",
      "blocks": [
        {
          "title": "Clinically relevant interactions",
          "sources": [
            "label",
            "xr"
          ],
          "open": true,
          "items": [
            "Valproate more than doubles lamotrigine concentrations: lower, slower schedules are required. Carbamazepine, phenytoin, phenobarbital and primidone increase clearance; rifampin and selected protease inhibitors also lower exposure.",
            "Estrogen-containing oral contraceptives can halve concentrations and levels can approximately double during the pill-free week. Starting/stopping requires a prescribed maintenance adjustment; do not adjust only during the pill-free week.",
            "Without other glucuronidation inducers, estrogen-pill use may require up to a twofold maintenance increase. When starting pills, increases generally no faster than 50–100 mg/day weekly; when stopping, decrease up to 50%, generally no more than 25% of the total daily dose weekly over 2 weeks, unless response/levels justify otherwise. Initial titration is not altered solely for contraceptive use.",
            "Other estrogen therapies need clinical monitoring; progestogen-only pills generally do not require this adjustment. Report breakthrough bleeding because reduced contraceptive efficacy cannot be excluded.",
            "Other cardiac sodium-channel blockers may increase arrhythmia risk. Coadministration with narrow-therapeutic-index OCT2 substrates such as dofetilide is not recommended."
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Perinatal concentrations and infant exposure need review.",
      "takeaway": "Do not abruptly stop antiseizure treatment during pregnancy.",
      "blocks": [
        {
          "title": "Pregnancy and lactation",
          "sources": [
            "label",
            "xr"
          ],
          "open": true,
          "paragraphs": [
            "Pregnancy registries have not detected an overall increase or consistent malformation pattern; limitations and animal developmental toxicity remain. Encourage NAAED registry enrollment. Concentrations may fall during pregnancy and return after delivery, requiring clinical/level assessment and dose review. Lamotrigine enters milk; postpartum maternal increases can raise infant exposure. Monitor infant rash, apnea, sedation, poor sucking/weight gain; check infant levels if toxicity is suspected and stop human-milk feeding if toxicity occurs."
          ]
        },
        {
          "title": "Age and organ impairment",
          "sources": [
            "label",
            "xr"
          ],
          "paragraphs": [
            "IR adjunctive epilepsy begins at age 2; IR conversion is ≥16 and bipolar maintenance is adult. XR epilepsy indications begin at ≥13. Pediatric bipolar efficacy is not established. Older adults need cautious dose selection. Hepatic reductions apply to the full starting/escalation/maintenance schedule; renal impairment may lower maintenance requirements, with limited severe-impairment experience."
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Predominantly glucuronidated, with variable half-life.",
      "takeaway": "No universal therapeutic plasma target is established.",
      "blocks": [
        {
          "title": "Mechanism and pharmacokinetics",
          "sources": [
            "label",
            "xr"
          ],
          "open": true,
          "facts": [
            [
              "IR multiple-dose half-life examples",
              "Healthy volunteers without other medicines: 25.4 hours; with valproate: 70.3 hours; epilepsy with listed inducing AEDs: 12.6 hours."
            ],
            [
              "Clinical meaning",
              "Interaction-dependent half-life governs restart assessment."
            ],
            [
              "Plasma monitoring",
              "Consider during interaction/dose changes; dose to clinical response."
            ]
          ],
          "paragraphs": [
            "The exact anticonvulsant mechanism is unknown; inhibition of voltage-sensitive sodium channels and reduced excitatory transmitter release are proposed. Bipolar therapeutic mechanism is not established. IR oral bioavailability is about 98%, unaffected by food; protein binding about 55%. Predominantly forms an inactive glucuronide, recovered mainly in urine. XR delays absorption and smooths exposure; release forms require the supervised conversion plan."
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Track rash, systemic symptoms, seizures and mood.",
      "takeaway": "Check the formulation and titration plan at every refill.",
      "blocks": [
        {
          "title": "Monitoring parameters",
          "sources": [
            "label",
            "xr",
            "cardiac"
          ],
          "open": true,
          "items": [
            "Assess rash/mucosal lesions, fever, lymphadenopathy, blood/organ or meningitis symptoms; investigate urgently when present.",
            "Monitor seizure control, depression/suicidality, dizziness/ataxia and cardiac symptoms. Assess cardiac history and interacting drugs; no universal ECG schedule is supplied here.",
            "Review adherence, interruptions, hormone/AED changes and pregnancy/postpartum concentrations/response. Plasma levels may help during changes, without a universally established therapeutic range.",
            "Confirm positive rapid urine PCP screens with a specific test; lamotrigine can cause false positives."
          ]
        },
        {
          "title": "Patient counseling information",
          "sources": [
            "label",
            "xr",
            "cardiac"
          ],
          "paragraphs": [
            "Follow the written titration exactly; contact the prescriber after interruptions and before restarting. Report rash, mouth sores, fever or swollen nodes immediately. Seek urgent help for palpitations/fainting, severe headache/stiff neck or self-harm thoughts. Avoid driving until effects are known. Verify tablet appearance and IR/XR/ODT/dispersible form, and disclose pregnancy, breastfeeding and hormonal contraception changes."
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "GSK oral formulations and interaction-specific starter kits.",
      "takeaway": "Use the prescribed form and correct starter kit.",
      "blocks": [
        {
          "title": "Representative product · Lamictal 25 mg IR tablet",
          "sources": [
            "label"
          ],
          "open": true,
          "facts": [
            [
              "Appearance / imprint",
              "White, scored, shield-shaped; LAMICTAL / 25."
            ],
            [
              "Manufacturer",
              "GlaxoSmithKline."
            ],
            [
              "Example NDC",
              "0173-0633-02 · bottle of 100."
            ],
            [
              "U.S. status",
              "Prescription."
            ]
          ],
          "links": [
            {
              "title": "View exact Lamictal label",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d7e3572d-56fe-4727-2bb4-013ccca22678"
            }
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "sources": [
            "label",
            "xr"
          ],
          "facts": [
            [
              "IR compressed tablets",
              "25, 100, 150 and 200 mg."
            ],
            [
              "Chewable/dispersible tablets for oral suspension",
              "2, 5 and 25 mg."
            ],
            [
              "ODT",
              "25, 50, 100 and 200 mg."
            ],
            [
              "XR tablets",
              "25, 50, 100, 200, 250 and 300 mg."
            ],
            [
              "Titration kits",
              "Different kits for valproate, no listed inducer/valproate, or listed inducer without valproate; choose with prescriber."
            ]
          ]
        },
        {
          "title": "Storage and handling",
          "sources": [
            "label",
            "xr"
          ],
          "paragraphs": [
            "IR/dispersible and XR: 25°C, excursions 15–30°C; IR/dispersible dry storage, with light protection as specified for the exact IR package. ODT: 20–25°C, excursions 15–30°C. Do not use torn, broken or missing blisters. XR must remain intact; do not split dispersed mixtures for dosing."
          ]
        }
      ]
    }
  ]
};
