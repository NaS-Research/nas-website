// Original clinical summaries checked against the product-specific public sources below.
export const spironolactone = {
  "slug": "spironolactone",
  "name": "Spironolactone",
  "synonym": "Aldactone tablets · CaroSpir suspension",
  "description": "A potassium-sparing mineralocorticoid receptor antagonist used in heart failure, hypertension, edema and selected hyperaldosteronism settings. This reference separates Aldactone tablet dosing from CaroSpir suspension and prioritizes potassium, kidney function and formulation verification.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Check potassium and kidney function before and after dose changes.",
    "text": "Hyperkalemia can be dangerous, especially with kidney impairment or other potassium-raising drugs. Check potassium within one week of starting or titrating and regularly thereafter. CaroSpir is not therapeutically equivalent to Aldactone; never substitute tablet doses directly into the suspension.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Mineralocorticoid receptor antagonist"
    ],
    [
      "Common products",
      "Aldactone tablets · CaroSpir 5 mg/mL"
    ],
    [
      "Key monitoring",
      "Potassium, kidney function and volume status"
    ]
  ],
  "sources": [
    {
      "id": "tablet",
      "title": "Aldactone · Current prescribing information",
      "publisher": "Pfizer / DailyMed",
      "note": "PI revised November 2025; current SPL25. Tablet indication-specific dosing, interactions and pregnancy/lactation.",
      "url": "https://labeling.pfizer.com/showlabeling.aspx?id=520"
    },
    {
      "id": "suspension",
      "title": "CaroSpir · Current prescribing information",
      "publisher": "CMP Pharma / DailyMed",
      "note": "Manufacturer currently links PI revised September 2023; current SPL7 published December 2025. Not therapeutically equivalent to Aldactone.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c4f70a04-7d89-4b73-8b02-17d43471bf08"
    },
    {
      "id": "hf",
      "title": "Heart-failure MRA recommendations · Official guideline slide set",
      "publisher": "AHA / ACC / HFSA",
      "note": "2022 guideline, MRA recommendations on printed slide 75 (PDF page 75); initiation and discontinuation thresholds distinguished from product-label dosing.",
      "url": "https://professional.heart.org/en/science-news/-/media/832EA0F4E73948848612F228F7FA2D35.ashx"
    },
    {
      "id": "milk",
      "title": "Spironolactone · Lactation",
      "publisher": "LactMed / National Library of Medicine",
      "note": "Revised November 15, 2023; limited milk-exposure data and infant reports.",
      "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK501101/"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Indications differ between tablets and the branded suspension.",
      "takeaway": "Confirm the diagnosis and formulation before selecting a dose.",
      "blocks": [
        {
          "title": "Heart failure and hypertension",
          "paragraphs": [
            "Both products are labeled for NYHA III–IV heart failure with reduced EF to improve survival, manage edema and reduce hospitalization, alongside other HF therapy. They are also add-on antihypertensives when other agents provide inadequate control. CaroSpir labels these as adult uses. Guideline recommendations may cover additional NYHA classes; that is separate from label wording."
          ],
          "sources": [
            "tablet",
            "suspension",
            "hf"
          ]
        },
        {
          "title": "Edema and hyperaldosteronism",
          "paragraphs": [
            "Aldactone treats cirrhotic edema inadequately responsive to fluid/sodium restriction and nephrotic edema after underlying treatment, restriction and other diuretics are inadequate. It also provides preoperative or selected long-term treatment for primary hyperaldosteronism. CaroSpir is labeled for adult cirrhotic edema; its indications do not include nephrotic syndrome or primary hyperaldosteronism."
          ],
          "sources": [
            "tablet",
            "suspension"
          ]
        },
        {
          "title": "Scope of this reference",
          "paragraphs": [
            "The regimens here concern labeled adult cardiometabolic/edema uses. Pediatric safety/effectiveness is not established. Dermatologic or other endocrine uses outside these labels need their own clinical evidence and treatment plan; no off-label dosing is supplied here."
          ],
          "sources": [
            "tablet",
            "suspension"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Aldactone and CaroSpir have different exposure and dose recommendations.",
      "takeaway": "Choose the product-specific schedule and confirm potassium/eGFR.",
      "blocks": [
        {
          "title": "Aldactone tablet heart-failure dosing",
          "paragraphs": [
            "The label starts 25 mg orally once daily when potassium is ≤5.0 mEq/L and eGFR >50 mL/min/1.73 m²; increase to 50 mg daily if tolerated and indicated. Hyperkalemia on 25 mg daily may prompt reduction to 25 mg every other day. For eGFR 30–50, consider starting 25 mg every other day. These label instructions must be assessed alongside the guideline’s stricter potassium initiation threshold below."
          ],
          "sources": [
            "tablet",
            "hf"
          ]
        },
        {
          "title": "Other Aldactone tablet regimens",
          "paragraphs": [
            "Take with a consistent relationship to meals. Select the regimen by the labeled condition and individual response."
          ],
          "sources": [
            "tablet"
          ],
          "table": {
            "headers": [
              "Condition",
              "Adult tablet regimen",
              "Adjustment context"
            ],
            "rows": [
              [
                "Add-on hypertension",
                "Start 25–100 mg/day, single or divided doses",
                "Titrate at two-week intervals; >100 mg/day generally adds no BP reduction"
              ],
              [
                "Edema",
                "Usually start 100 mg/day; labeled range 25–200 mg/day, single or divided doses",
                "Cirrhosis: hospital initiation and slow titration; ≥5 days before escalation when used as sole diuretic"
              ],
              [
                "Primary hyperaldosteronism",
                "100–400 mg/day before surgery",
                "If unsuitable for surgery, lowest effective individualized maintenance dose"
              ]
            ]
          }
        },
        {
          "title": "CaroSpir suspension dosing",
          "paragraphs": [
            "CaroSpir 25 mg/5 mL (5 mg/mL) is not therapeutically equivalent to Aldactone. The standard labeled adult regimens below differ from tablets. If a dose above 100 mg is required, use another formulation because suspension exposure may be higher than expected. Take consistently with respect to food; shake well and measure in mL."
          ],
          "sources": [
            "suspension"
          ],
          "table": {
            "headers": [
              "Condition",
              "Adult suspension regimen",
              "Context"
            ],
            "rows": [
              [
                "HF: K ≤5.0, eGFR >50",
                "Start 20 mg (4 mL) daily; may increase to 37.5 mg (7.5 mL) daily",
                "Hyperkalemia on 20 mg daily may prompt 20 mg every other day"
              ],
              [
                "Add-on hypertension",
                "Start 20–75 mg/day (4–15 mL), single or divided",
                "Titrate at two-week intervals; >75 mg/day generally adds no BP reduction"
              ],
              [
                "Cirrhotic edema",
                "Start 75 mg/day (15 mL), single or divided",
                "Hospital initiation; slow titration; ≥5 days before escalation as sole diuretic"
              ]
            ]
          }
        },
        {
          "title": "Reduced-eGFR suspension dose requires review",
          "paragraphs": [
            "For eGFR 30–50 mL/min/1.73 m², the current CaroSpir label names a lower 10 mg (2 mL) starting dose but does not specify its frequency in that sentence. Confirm the complete prescription with the prescriber or pharmacist; this page does not infer daily versus every-other-day use or substitute the tablet’s schedule."
          ],
          "sources": [
            "suspension"
          ]
        },
        {
          "title": "Guideline HF initiation and stopping thresholds",
          "paragraphs": [
            "The 2022 AHA/ACC/HFSA guideline recommends an MRA for symptomatic HFrEF with NYHA II–IV symptoms when eGFR is >30 mL/min/1.73 m² and potassium is <5.0 mEq/L, with close surveillance. If potassium cannot be maintained below 5.5 mEq/L, discontinue the MRA to avoid dangerous hyperkalemia. This is guideline context; it does not establish CaroSpir equivalence or replace formulation-specific doses."
          ],
          "sources": [
            "hf"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Potassium accumulation and excessive diuresis drive the principal risks.",
      "takeaway": "New weakness, palpitations or volume depletion warrants timely assessment.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Spironolactone can cause severe hyperkalemia, particularly with renal impairment, potassium supplements/salt substitutes or other potassium-raising drugs. Check potassium within one week of starting or titrating and regularly thereafter; use closer monitoring in high-risk patients. Treat hyperkalemia and reduce or stop treatment as appropriate.",
            "Excess diuresis can cause dehydration, hypotension and worsening renal function. Monitor volume and renal status and watch for other electrolyte/metabolic changes, including low sodium, glucose and uric-acid changes.",
            "Cirrhosis with ascites increases risk of electrolyte shifts, encephalopathy and coma; initiate in hospital at a low dose and titrate slowly. Breast enlargement can occur and is often reversible."
          ],
          "sources": [
            "tablet",
            "suspension"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "The current Aldactone and CaroSpir labels contraindicate hyperkalemia, Addison’s disease and concomitant eplerenone. Renal impairment still substantially increases hyperkalemia risk and restricts HF eligibility."
          ],
          "sources": [
            "tablet",
            "suspension",
            "hf"
          ]
        },
        {
          "title": "Boxed warning status",
          "paragraphs": [
            "Neither current reviewed product label carries a boxed warning. Rodent tumor findings appear in nonclinical sections; they do not establish human cancer causation. Hyperkalemia, organ dysfunction and pregnancy precautions remain clinically important."
          ],
          "sources": [
            "tablet",
            "suspension"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Gynecomastia, breast pain, menstrual changes and sexual dysfunction reflect endocrine effects. GI upset, dizziness, headache and lethargy also occur. Serious reports include hyperkalemia, renal failure, severe skin reactions, anaphylaxis, blood-cell disorders and rare liver toxicity; spontaneous-report data do not provide reliable incidence for every event."
          ],
          "sources": [
            "tablet",
            "suspension"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Many combinations increase potassium or change the response to treatment.",
      "takeaway": "Recheck labs when another potassium-raising drug changes.",
      "blocks": [
        {
          "title": "Potassium-raising medicines and supplements",
          "paragraphs": [
            "Potassium supplements, potassium salt substitutes, ACE inhibitors, ARBs, NSAIDs, heparins and trimethoprim can increase hyperkalemia risk. Generally stop potassium supplements when initiating spironolactone for HF, and check potassium when ACEi/ARB therapy changes. Eplerenone is contraindicated; other necessary HF combinations require coordinated monitoring."
          ],
          "sources": [
            "tablet",
            "suspension"
          ]
        },
        {
          "title": "Lithium, NSAIDs and diuretic response",
          "paragraphs": [
            "Reduced lithium clearance increases toxicity risk; follow levels if combined. NSAIDs can reduce diuretic/antihypertensive effects and worsen renal risk. Aspirin may attenuate response; reassess the indication and observed response rather than self-increasing spironolactone. Cholestyramine has been associated with hyperkalemic metabolic acidosis."
          ],
          "sources": [
            "tablet",
            "suspension"
          ]
        },
        {
          "title": "Digoxin: assay and formulation differences",
          "paragraphs": [
            "Aldactone can interfere with digoxin assays; use an assay unaffected by spironolactone, since actual exposure change is uncertain in that label. CaroSpir’s label additionally advises baseline/continued digoxin monitoring and a possible 15–30% digoxin dose reduction or dosing-frequency change. Do not alter digoxin from an apparent assay result alone."
          ],
          "sources": [
            "tablet",
            "suspension"
          ]
        },
        {
          "title": "Other product-specific interactions",
          "paragraphs": [
            "Current Aldactone labeling advises against abiraterone coadministration because PSA can rise and advises avoiding mitotane because its plasma concentration can fall. CaroSpir also warns that CYP2C8 and CYP3A4/5 substrates may need adjustment, based on inhibitory findings; examples include repaglinide, tacrolimus and sirolimus. Reconcile specialized endocrine/oncology drugs with the treating team."
          ],
          "sources": [
            "tablet",
            "suspension"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Kidney function, cirrhosis and reproductive considerations alter safety.",
      "takeaway": "Avoid a universal dose or pregnancy-safety claim.",
      "blocks": [
        {
          "title": "Renal and hepatic impairment",
          "paragraphs": [
            "Kidney impairment increases hyperkalemia risk; follow K closely and use the HF eGFR rules for the selected product. The reviewed labels do not supply a complete all-indication renal-dose table. Cirrhosis reduces clearance and makes fluid/electrolyte shifts hazardous; initiate under hospital observation and titrate slowly. A low tablet HF dose is not automatically a safe cirrhosis regimen."
          ],
          "sources": [
            "tablet",
            "suspension"
          ]
        },
        {
          "title": "Children and older adults",
          "paragraphs": [
            "Neither label establishes pediatric effectiveness/safety. CaroSpir specifically does not recommend pediatric hypertension treatment because of potential endocrine effects. Older adults are more likely to have reduced kidney function; monitor renal function and potassium and select doses cautiously."
          ],
          "sources": [
            "tablet",
            "suspension"
          ]
        },
        {
          "title": "Pregnancy",
          "paragraphs": [
            "Avoid spironolactone in pregnancy or counsel about potential risk to a male fetus if exposure is being considered. Its antiandrogenic action and animal findings raise concern for male sexual differentiation. Limited human reports do not establish safety despite no clear malformation association. Maternal HF, hypertension and cirrhosis also carry pregnancy risks; arrange an individualized alternative/management plan."
          ],
          "sources": [
            "tablet",
            "suspension"
          ]
        },
        {
          "title": "Breastfeeding",
          "paragraphs": [
            "Labels describe low canrenone exposure in milk with limited short-term infant observations and unknown long-term effects. LactMed considers spironolactone acceptable during breastfeeding based on low measured metabolite transfer and available reports, while recognizing sparse data. Balance maternal benefit, infant circumstances and feeding; intense diuresis may reduce milk supply, although spironolactone alone is unlikely to do so substantially."
          ],
          "sources": [
            "tablet",
            "suspension",
            "milk"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Aldosterone antagonism promotes sodium excretion while retaining potassium.",
      "takeaway": "Active metabolites and formulation exposure matter more than parent half-life alone.",
      "blocks": [
        {
          "title": "Mechanism and endocrine effects",
          "paragraphs": [
            "Spironolactone and active metabolites compete with aldosterone at renal receptor sites, increasing sodium/water excretion while retaining potassium. This contributes to diuretic and BP effects and treatment of aldosterone-mediated disease. Antiandrogenic effects help explain endocrine adverse reactions and fetal precautions."
          ],
          "sources": [
            "tablet",
            "suspension"
          ]
        },
        {
          "title": "Disposition and food",
          "paragraphs": [
            "Parent drug is rapidly metabolized and has a short half-life—about 1.4 hours in Aldactone data—with active metabolites lasting approximately 14–17 hours in that label. Protein binding exceeds 90%; metabolites are mainly urinary, with biliary elimination also present. Food markedly increases exposure, so keep meal timing consistent. CaroSpir produces higher exposure than equivalent milligrams of Aldactone, reinforcing its nonequivalence."
          ],
          "sources": [
            "tablet",
            "suspension"
          ],
          "facts": [
            [
              "Protein binding",
              ">90% for drug/metabolites"
            ],
            [
              "Formulation distinction",
              "CaroSpir exposure differs from tablets"
            ]
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "A safe treatment plan includes early labs and follow-up after interaction changes.",
      "takeaway": "Arrange the potassium check when prescribing the first or changed dose.",
      "blocks": [
        {
          "title": "Monitoring",
          "paragraphs": [
            "Assess potassium, kidney function, BP and volume status before therapy and during titration. Check potassium within one week after starting or increasing dose and regularly thereafter; more often with organ impairment or potassium-raising medicines. Follow other electrolytes, glucose and uric acid periodically, and reassess edema/weight, dizziness and endocrine adverse effects. Use guideline thresholds for HF safety alongside the exact product label."
          ],
          "sources": [
            "tablet",
            "suspension",
            "hf"
          ]
        },
        {
          "title": "Counseling and overdose",
          "paragraphs": [
            "Take consistently with meals, shake suspension well and use a calibrated mL device. Avoid potassium supplements/salt substitutes unless the treatment team directs them; check before adding OTC NSAIDs or other interacting products. Report weakness, palpitations, faintness, dehydration or severe rash. Overdose requires poison-center/medical assessment and supportive monitoring of electrolytes, hydration and vital functions; no specific antidote is established."
          ],
          "sources": [
            "tablet",
            "suspension"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Product identity matters because the suspension is not a milligram-for-milligram tablet substitute.",
      "takeaway": "Check the concentration and package instructions at each dispensing.",
      "blocks": [
        {
          "title": "Representative products",
          "paragraphs": [
            "Aldactone 25 mg is round, light yellow and film-coated, marked SEARLE/1001 on one face and ALDACTONE/25 on the other; bottle of 100 NDC 0025-1001-31. CaroSpir is a white to off-white, banana-flavored suspension; the 118 mL bottle has NDC 46287-020-04. Generic tablet appearances differ."
          ],
          "sources": [
            "tablet",
            "suspension"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Aldactone tablets: 25, 50 and 100 mg. CaroSpir suspension: 25 mg/5 mL (5 mg/mL), supplied as 118 or 473 mL bottles and 5 mL unit-dose cups. Pharmacy-compounded liquids require their own preparation and stability instructions; neither brand label establishes those compounded products as therapeutically equivalent."
          ],
          "sources": [
            "tablet",
            "suspension"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Aldactone’s current brand label stores below 25°C; follow the actual dispensed tablet package. CaroSpir stores at 20–25°C with excursions to 15–30°C, in a tight container; shake well before measuring. Do not apply suspension storage to a compounded liquid or infer a post-opening beyond-use period absent from its label."
          ],
          "sources": [
            "tablet",
            "suspension"
          ]
        }
      ]
    }
  ]
};
