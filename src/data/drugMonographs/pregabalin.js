// Original clinical summaries checked against the product-specific public sources below.
export const pregabalin = {
  "slug": "pregabalin",
  "name": "Pregabalin",
  "synonym": "Lyrica · Lyrica CR",
  "description": "A Schedule V alpha-2-delta ligand used for selected neuropathic pain conditions and, with immediate-release products, adjunctive seizure therapy. Renal adjustment and release-specific dosing are essential.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Watch breathing, sedation and withdrawal.",
    "text": "Opioids and other CNS depressants can increase serious respiratory depression. Adjust for renal function, use the exact release formulation and taper for at least 1 week when stopping; seek emergency care for angioedema or impaired breathing.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Alpha-2-delta calcium-channel ligand"
    ],
    [
      "Common products",
      "Lyrica IR · Lyrica CR"
    ],
    [
      "Key dosing factor",
      "Indication, CrCl and release formulation"
    ]
  ],
  "sources": [
    {
      "id": "ir",
      "title": "Lyrica capsules and oral solution · Current full prescribing information",
      "publisher": "Viatris / DailyMed",
      "note": "Clinical PI April 2025; SPL18 effective April 15, 2025, published September 29, 2025. Current withdrawal and pregnancy updates.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d4734e7d-5079-455e-8ff5-8f4539c998a9"
    },
    {
      "id": "cr",
      "title": "Lyrica CR · Current full prescribing information",
      "publisher": "Viatris / DailyMed",
      "note": "Clinical PI April 2025; SPL7 effective March 12, 2026, published April 15, 2026. CR-specific renal restrictions and conversion.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f280bbd8-2af2-444a-bd96-e409337ca6dd"
    },
    {
      "id": "milk",
      "title": "Pregabalin · Lactation",
      "publisher": "NIH / LactMed",
      "note": "November 15, 2024 revision; limited human data and distinction from manufacturer recommendation.",
      "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK501821/"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Immediate-release pregabalin and Lyrica CR have different approved uses.",
      "takeaway": "Select the formulation for the exact indication.",
      "blocks": [
        {
          "title": "Immediate-release indications",
          "paragraphs": [
            "Lyrica capsules/solution treat adult diabetic neuropathic pain, postherpetic neuralgia, fibromyalgia and neuropathic pain after spinal cord injury. They are also adjunctive therapy for partial-onset seizures from age 1 month; this does not establish use for other pediatric pain conditions."
          ],
          "sources": [
            "ir"
          ]
        },
        {
          "title": "Extended-release scope",
          "paragraphs": [
            "Lyrica CR treats adult diabetic neuropathic pain and postherpetic neuralgia. Its efficacy is not established for fibromyalgia or adjunctive adult partial-onset seizures; pediatric safety/effectiveness is not established. It is not a mg-for-mg replacement for capsules/solution."
          ],
          "sources": [
            "cr"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "All doses are oral; select indication and creatinine clearance before titrating.",
      "takeaway": "Daily totals must be divided correctly, and CR has separate limits.",
      "blocks": [
        {
          "title": "Adult immediate-release regimens",
          "paragraphs": [
            "These regimens assume CrCl ≥60 mL/min. Adjust for renal function before applying any escalation. Escalate only for response and tolerability."
          ],
          "sources": [
            "ir"
          ],
          "table": {
            "headers": [
              "Indication",
              "Start and usual escalation",
              "Maximum / escalation restriction"
            ],
            "rows": [
              [
                "Diabetic neuropathic pain",
                "50 mg three times daily; may reach 100 mg three times daily within 1 week",
                "300 mg/day; higher doses not recommended"
              ],
              [
                "Postherpetic neuralgia",
                "75 mg twice daily or 50 mg three times daily; may reach 300 mg/day within 1 week",
                "600 mg/day in 2 or 3 doses only after 2–4 weeks at 300 mg/day with ongoing pain and tolerance"
              ],
              [
                "Fibromyalgia",
                "75 mg twice daily; may reach 150 mg twice daily within 1 week",
                "225 mg twice daily (450 mg/day) if needed; higher doses not recommended"
              ],
              [
                "Spinal cord injury pain",
                "75 mg twice daily; may reach 150 mg twice daily within 1 week",
                "300 mg twice daily (600 mg/day) after 2–3 weeks at 300 mg/day if needed and tolerated"
              ]
            ]
          }
        },
        {
          "title": "Partial-onset seizure adjunctive dosing",
          "paragraphs": [
            "Immediate-release only. Titrate approximately weekly according to response/tolerance. Pediatric quantities are total mg/kg/day, not mg/kg per dose. Pediatric renal impairment has not been studied."
          ],
          "sources": [
            "ir"
          ],
          "table": {
            "headers": [
              "Population",
              "Initial total/day",
              "Maximum total/day",
              "Division"
            ],
            "rows": [
              [
                "Adults ≥17 years",
                "150 mg/day",
                "600 mg/day",
                "2 or 3 doses"
              ],
              [
                "Pediatric weight ≥30 kg",
                "2.5 mg/kg/day",
                "10 mg/kg/day, ≤600 mg/day",
                "2 or 3 doses"
              ],
              [
                "Pediatric weight <30 kg, age 1 month to <4 years",
                "3.5 mg/kg/day",
                "14 mg/kg/day",
                "3 doses"
              ],
              [
                "Pediatric weight <30 kg, age ≥4 years",
                "3.5 mg/kg/day",
                "14 mg/kg/day",
                "2 or 3 doses"
              ]
            ]
          }
        },
        {
          "title": "Adult immediate-release renal adjustment",
          "paragraphs": [
            "Estimate CrCl using the label’s Cockcroft–Gault approach. First choose the total daily dose allowed by the indication at normal renal function, then use its corresponding column below; do not select the highest column for every indication. Values are total mg/day, divided as stated; at CrCl ≥60, retain the indication-specific frequency above. The label presents boundary ranges as 30–60 and 15–30; a clinician should apply the intended renal stratum."
          ],
          "sources": [
            "ir"
          ],
          "table": {
            "headers": [
              "CrCl (mL/min)",
              "For normal 150/day",
              "For normal 300/day",
              "For normal 450/day",
              "For normal 600/day",
              "Division"
            ],
            "rows": [
              [
                "≥60",
                "150 mg",
                "300 mg",
                "450 mg",
                "600 mg",
                "2 or 3 doses"
              ],
              [
                "30–60",
                "75 mg",
                "150 mg",
                "225 mg",
                "300 mg",
                "2 or 3 doses"
              ],
              [
                "15–30",
                "25–50 mg",
                "75 mg",
                "100–150 mg",
                "150 mg",
                "1 or 2 doses"
              ],
              [
                "<15",
                "25 mg",
                "25–50 mg",
                "50–75 mg",
                "75 mg",
                "Once daily"
              ]
            ]
          }
        },
        {
          "title": "Immediate-release hemodialysis supplement",
          "paragraphs": [
            "Use the renal-adjusted daily regimen plus one additional dose immediately after each 4-hour hemodialysis session. This supplement is not another daily scheduled dose. CR is not recommended during hemodialysis."
          ],
          "sources": [
            "ir",
            "cr"
          ],
          "table": {
            "headers": [
              "Renal daily regimen",
              "Single post-dialysis supplement"
            ],
            "rows": [
              [
                "25 mg once daily",
                "25 or 50 mg"
              ],
              [
                "25–50 mg once daily",
                "50 or 75 mg"
              ],
              [
                "50–75 mg once daily",
                "75 or 100 mg"
              ],
              [
                "75 mg once daily",
                "100 or 150 mg"
              ]
            ]
          }
        },
        {
          "title": "Lyrica CR adult dosing and administration",
          "paragraphs": [
            "At CrCl ≥60, start 165 mg once daily after the evening meal; may reach 330 mg once daily within 1 week. DPN maximum is 330 mg/day. For PHN only, persistent pain after 2–4 weeks at 330 mg/day with tolerance may justify up to 660 mg/day. Swallow whole; do not split, crush or chew."
          ],
          "sources": [
            "cr"
          ]
        },
        {
          "title": "CR renal dosing",
          "paragraphs": [
            "Match the indication-appropriate normal-function daily dose to its column. For CrCl <30 or hemodialysis, CR is not recommended; use an appropriate immediate-release regimen instead. All CR values are once-daily totals after the evening meal."
          ],
          "sources": [
            "cr"
          ],
          "table": {
            "headers": [
              "CrCl (mL/min)",
              "Normal 165/day",
              "Normal 330/day",
              "Normal 495/day",
              "Normal 660/day"
            ],
            "rows": [
              [
                "≥60",
                "165 mg",
                "330 mg",
                "495 mg",
                "660 mg"
              ],
              [
                "30–60",
                "82.5 mg",
                "165 mg",
                "247.5 mg",
                "330 mg"
              ],
              [
                "<30 or hemodialysis",
                "Use IR",
                "Use IR",
                "Use IR",
                "Use IR"
              ]
            ]
          }
        },
        {
          "title": "Prescribed conversion and withdrawal",
          "paragraphs": [
            "The CR label maps IR daily totals of 75, 150, 225, 300, 450 and 600 mg to CR 82.5, 165, 247.5, 330, 495 and 660 mg, respectively. Conversion is appropriate only for a CR-supported indication and renal status. On switch day take the prescribed morning IR dose, then start CR after the evening meal. Taper either formulation over at least 1 week when discontinuing; individual withdrawal risk may require a tailored plan."
          ],
          "sources": [
            "ir",
            "cr"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Sedation, respiratory depression, hypersensitivity and withdrawal require active surveillance.",
      "takeaway": "Get urgent help for breathing impairment or facial/throat swelling.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Stop pregabalin and seek emergency treatment for angioedema or serious hypersensitivity. Respiratory depression may be severe or fatal, especially with opioids/CNS depressants or respiratory disease; use cautious initiation and monitor sedation/breathing. Dizziness and somnolence impair driving.",
            "Monitor depression/suicidal thinking during treatment and after withdrawal. Abrupt stopping can provoke seizures and other withdrawal symptoms; taper for at least 1 week. Edema and weight gain warrant attention, particularly with thiazolidinediones or advanced heart failure.",
            "Persistent visual changes need assessment. Report unexplained muscle pain/weakness, especially with fever; discontinue for suspected myopathy or marked CK elevation. Platelet reductions and PR prolongation are described. Animal tumor findings have uncertain human significance."
          ],
          "sources": [
            "ir",
            "cr"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "Known hypersensitivity to pregabalin or product components is contraindicated. Renal impairment is managed through product-specific dosing/restrictions, rather than treating every degree of renal impairment as an absolute allergy-like contraindication."
          ],
          "sources": [
            "ir",
            "cr"
          ]
        },
        {
          "title": "Boxed warning and controlled status",
          "paragraphs": [
            "The reviewed U.S. labels have no boxed warning. Pregabalin is Schedule V; assess misuse, dependence and unsupervised dose escalation. The absence of a boxed warning does not lessen respiratory, suicidal-behavior or withdrawal precautions."
          ],
          "sources": [
            "ir",
            "cr"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Common adult IR effects include dizziness, somnolence, dry mouth, edema, blurred vision, weight gain and impaired concentration. CR commonly causes dizziness, somnolence, headache, fatigue, edema, nausea, blurred vision, dry mouth and weight gain. Pediatric IR seizure trials notably report increased weight/appetite and somnolence. Postmarketing respiratory depression, severe withdrawal and bullous pemphigoid have been reported; spontaneous reports cannot establish frequencies."
          ],
          "sources": [
            "ir",
            "cr"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Pharmacodynamic interactions remain important despite few metabolic interactions.",
      "takeaway": "Reconcile sedatives and fluid-retaining drugs before titration.",
      "blocks": [
        {
          "title": "Opioids, benzodiazepines and alcohol",
          "paragraphs": [
            "Opioids and other CNS depressants can add sedation, impaired coordination and respiratory depression; monitor and consider lower initiation/dose changes. Avoid alcohol. Opioid coadministration has also been associated with reduced gut motility/obstruction. Small healthy-volunteer studies do not exclude serious respiratory events in clinical use."
          ],
          "sources": [
            "ir",
            "cr"
          ]
        },
        {
          "title": "Edema and angioedema partners",
          "paragraphs": [
            "Thiazolidinediones add weight gain/edema and may aggravate HF; use caution. ACE inhibitors and other angioedema-associated drugs may increase angioedema risk. These risks require clinical review rather than assuming an unchanged plasma concentration means an interaction is harmless."
          ],
          "sources": [
            "ir",
            "cr"
          ]
        },
        {
          "title": "Metabolic interactions and gabapentin",
          "paragraphs": [
            "Negligible metabolism and absent protein binding make CYP-mediated interactions unlikely. Studied IR combinations with several antiseizure drugs and oral contraceptives did not meaningfully alter pharmacokinetics; CR interaction evidence is more limited. IR adjunctive seizure efficacy with gabapentin has not been evaluated in controlled trials, so no combined-treatment dose recommendation is supplied."
          ],
          "sources": [
            "ir",
            "cr"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Renal function, indication, age and reproductive circumstances influence selection.",
      "takeaway": "Do not extend pediatric seizure approval to CR or pediatric pain.",
      "blocks": [
        {
          "title": "Kidney, liver and older patients",
          "paragraphs": [
            "Use CrCl-based adult adjustment; CR is unsuitable below 30 mL/min or during hemodialysis. Pediatric renal impairment lacks studied regimens. Older adults require renal assessment and caution with balance, cognition and sedation. The reviewed U.S. labels do not provide a hepatic dose-adjustment table; negligible hepatic metabolism does not replace clinical evaluation of comorbidity."
          ],
          "sources": [
            "ir",
            "cr"
          ]
        },
        {
          "title": "Children",
          "paragraphs": [
            "IR seizure adjunctive use starts at 1 month, with weight and age-specific frequency. Below 1 month safety/effectiveness is unestablished. Pediatric pain indications and all pediatric CR use are not established. Use the prescribed 20 mg/mL oral solution and an accurately calibrated device when capsules are unsuitable."
          ],
          "sources": [
            "ir",
            "cr"
          ]
        },
        {
          "title": "Pregnancy and reproductive planning",
          "paragraphs": [
            "Current observational data suggest a possible small overall major-birth-defect increase with no consistent pattern; limitations prevent a definitive causal conclusion. Animal developmental toxicity and uncertain human risks require benefit/risk discussion. Prolonged gabapentinoid exposure plus opioids near delivery may increase neonatal withdrawal; observe exposed newborns. Do not abruptly stop seizure therapy. Discuss the pregnancy registry and male fertility concerns described in labeling."
          ],
          "sources": [
            "ir",
            "cr"
          ]
        },
        {
          "title": "Breastfeeding",
          "paragraphs": [
            "Both product labels advise against breastfeeding because of animal-based tumor concerns; human long-term infant safety is unknown. LactMed describes limited low milk-transfer data and says necessary maternal use need not automatically end breastfeeding, with particular caution for newborn/preterm infants. A shared clinical feeding/treatment decision should explicitly reconcile these recommendations rather than declaring universal safety."
          ],
          "sources": [
            "ir",
            "cr",
            "milk"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Pregabalin is an alpha-2-delta ligand eliminated chiefly unchanged by the kidney.",
      "takeaway": "Food and release characteristics explain the formulation difference.",
      "blocks": [
        {
          "title": "Mechanism",
          "paragraphs": [
            "Binding to the alpha-2-delta auxiliary subunit of CNS voltage-gated calcium channels is associated with analgesic and antiseizure effects, though the mechanism is not fully defined. Pregabalin is structurally related to GABA but does not directly bind GABA-A/GABA-B or benzodiazepine receptors and is not an opioid agonist."
          ],
          "sources": [
            "ir",
            "cr"
          ]
        },
        {
          "title": "Absorption and elimination",
          "paragraphs": [
            "IR bioavailability is ≥90%; fasting peak is about 1.5 hours, with food delaying the peak without meaningfully reducing total absorption. CR requires food and peaks about 8–10 hours after an evening meal; fasting lowers exposure. Pregabalin does not bind plasma protein, undergoes negligible metabolism and has a normal-renal-function half-life about 6.3 hours. Renal clearance tracks CrCl; 4-hour hemodialysis removes approximately half."
          ],
          "sources": [
            "ir",
            "cr"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Monitor benefit and functional safety as well as the numerical dose.",
      "takeaway": "Give patients a withdrawal and emergency-symptom plan.",
      "blocks": [
        {
          "title": "Monitoring",
          "paragraphs": [
            "Review CrCl, symptom/seizure benefit, breathing risk and concomitant sedatives at initiation and dose changes. Follow mood/suicidal thinking, sedation, balance, edema, weight and visual symptoms. Evaluate muscle symptoms/CK or platelet concerns when clinically indicated. Assess misuse and dependence without confusing physical withdrawal with proof of addiction."
          ],
          "sources": [
            "ir",
            "cr"
          ]
        },
        {
          "title": "Administration and missed doses",
          "paragraphs": [
            "IR may be taken with or without food. Measure solution accurately; verify mg and mL. For a missed CR evening dose, the label allows the usual dose before bedtime after a snack; if that is missed, after a morning meal; if that is missed too, resume after the next evening meal. Do not double doses. Keep CR whole and follow a clinician-directed taper."
          ],
          "sources": [
            "ir",
            "cr"
          ]
        },
        {
          "title": "Urgent symptoms and overdose",
          "paragraphs": [
            "Seek urgent care for slow/shallow breathing, inability to awaken, facial/throat swelling or suicidal thoughts. Overdose can cause altered consciousness, seizures and heart block, with deaths reported. Contact emergency/poison services; management is supportive with airway/vital-sign surveillance, no specific antidote, and possible hemodialysis. Do not attempt home-induced vomiting."
          ],
          "sources": [
            "ir",
            "cr"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Identify the exact release type and strength before dispensing.",
      "takeaway": "IR and CR packages and dose totals differ.",
      "blocks": [
        {
          "title": "Representative products",
          "paragraphs": [
            "Current Viatris Lyrica 75 mg capsules are white/orange, marked VTRS and PGN/75; bottle of 90 NDC 58151-238-77. Lyrica CR 165 mg is a beige almond-shaped film-coated tablet marked VLE and PGN 165; bottle of 30 NDC 58151-246-93. Older/generic appearances may differ."
          ],
          "sources": [
            "ir",
            "cr"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "IR capsules: 25, 50, 75, 100, 150, 200, 225 and 300 mg. Clear/colorless strawberry-flavored oral solution: 20 mg/mL, 16-fluid-ounce bottle, NDC 58151-244-35. CR tablets: 82.5, 165 and 330 mg; 247.5/495/660 mg prescribed totals require multiple whole tablets. No IV formulation is provided by these labels."
          ],
          "sources": [
            "ir",
            "cr"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "IR: store at 25°C, permitted excursions 15–30°C. CR: 20–25°C, excursions 15–30°C, in the original package. Keep controlled medication secure and out of children’s reach; never share it. No additional solution post-opening discard interval is invented."
          ],
          "sources": [
            "ir",
            "cr"
          ]
        }
      ]
    }
  ]
};
