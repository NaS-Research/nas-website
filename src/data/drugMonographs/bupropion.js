// Original label-specific clinical summaries.
export const bupropion = {
  "slug": "bupropion",
  "name": "Bupropion",
  "synonym": "Wellbutrin SR / XL · Zyban",
  "description": "An aminoketone antidepressant also used in a separately labeled sustained-release smoking-cessation regimen. Oral hydrochloride formulations have different schedules and seizure-related limits.",
  "checked": "2026-10-01",
  "essential": {
    "title": "One bupropion regimen at a time.",
    "text": "Never combine bupropion products or double a missed dose. Report new suicidality or major behavioral changes promptly. A seizure requires stopping treatment and no restart.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Aminoketone antidepressant"
    ],
    [
      "Common brands",
      "Wellbutrin SR / XL · Zyban"
    ],
    [
      "Reference focus",
      "Oral bupropion hydrochloride; IR, SR and XL"
    ]
  ],
  "sources": [
    {
      "id": "xl",
      "title": "Wellbutrin XL · Prescribing information",
      "publisher": "DailyMed / Bausch Health",
      "note": "Clinical text revised November 2025. Full dosing and safety sections contain inconsistent 300/450 mg limits; higher-dose XL use requires source reconciliation. DailyMed update February 10, 2026.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a435da9d-f6e8-4ddc-897d-8cd2bf777b21"
    },
    {
      "id": "sr",
      "title": "Wellbutrin SR · Prescribing information",
      "publisher": "DailyMed / GlaxoSmithKline",
      "note": "Clinical text revised November 2025; depression dosing and SR-specific limits. DailyMed update November 5, 2025.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cbc8c074-f080-4489-a5ae-207b5fadeba3"
    },
    {
      "id": "ir",
      "title": "Bupropion hydrochloride · Immediate-release label",
      "publisher": "DailyMed",
      "note": "Clinical text revised October 2025; IR regimen, organ impairment and safety. DailyMed update October 22, 2025.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e2a988f2-f8d3-4de0-b9f1-49d8c2e4180f"
    },
    {
      "id": "quit",
      "title": "Bupropion hydrochloride SR · Smoking cessation label",
      "publisher": "DailyMed / ScieGen",
      "note": "Clinical text revised October 2025. Public generic smoking-cessation label; used for the regimen associated with Zyban, without implying brand availability. DailyMed update October 1, 2025.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8069c521-c49a-4b6d-baa8-4b0be897d585"
    },
    {
      "id": "forfivo",
      "title": "Forfivo XL · 450 mg product label",
      "publisher": "DailyMed / Almatica Pharma",
      "note": "Clinical text revised December 2019; current DailyMed update April 29, 2024. Separate dosing eligibility and renal/hepatic restrictions; label presence does not guarantee local stock.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6917be04-3eff-be1f-99cc-1a20093a6ef0"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Depression, seasonal prevention and smoking cessation are product-specific.",
      "takeaway": "An SR release designation alone does not identify the labeled indication.",
      "blocks": [
        {
          "title": "Labeled oral indications",
          "sources": [
            "ir",
            "sr",
            "xl",
            "quit"
          ],
          "open": true,
          "paragraphs": [
            "IR and Wellbutrin SR treat major depressive disorder; Wellbutrin XL treats MDD and prevents seasonal major depressive episodes in diagnosed seasonal affective disorder. The selected smoking-cessation SR label aids quitting with counseling/support; it is not labeled for depression."
          ]
        },
        {
          "title": "Scope and regulatory distinctions",
          "sources": [
            "xl",
            "quit",
            "forfivo"
          ],
          "paragraphs": [
            "Zyban is the associated smoking-cessation brand; dosing here is verified against the linked generic cessation label. Forfivo XL has its own adult MDD 450 mg regimen and eligibility rules. Other salts, combinations and off-label indications require their own references."
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Titrate gradually and preserve each formulation’s interval.",
      "takeaway": "IR, depression SR and smoking-cessation SR have different ceilings.",
      "blocks": [
        {
          "title": "Adult depression regimens",
          "sources": [
            "ir",
            "sr",
            "xl"
          ],
          "open": true,
          "table": {
            "headers": [
              "Formulation",
              "Labeled oral regimen"
            ],
            "rows": [
              [
                "IR",
                "Start 100 mg twice daily; after 3 days may use 100 mg three times daily. Separate doses by ≥6 hours. Maximum 450 mg/day in divided doses, ≤150 mg each; increases ≤100 mg/day within 3 days."
              ],
              [
                "Wellbutrin SR",
                "Start 150 mg each morning; after 3 days may increase to 150 mg twice daily, ≥8 hours apart. After several weeks without response, up to 200 mg twice daily; maximum 400 mg/day and 200 mg/dose."
              ],
              [
                "Wellbutrin XL",
                "Start 150 mg each morning; after 4 days may increase to 300 mg each morning. This reference supplies no escalation above 300 mg because the selected source has conflicting dose-limit statements."
              ]
            ]
          }
        },
        {
          "title": "Forfivo XL · Separate 450 mg product",
          "paragraphs": [
            "For adult MDD, one 450 mg tablet once daily with or without food. Do not initiate bupropion treatment with this product. It may replace another formulation after at least two weeks at 300 mg/day when 450 mg/day is required, or replace an established 450 mg/day regimen. Do not combine with other bupropion. It is not recommended with renal or hepatic impairment because no lower strength is available; use another formulation for tapering. These directions do not resolve the selected Wellbutrin XL label’s inconsistent ceiling."
          ],
          "sources": [
            "forfivo"
          ]
        },
        {
          "title": "XL · Seasonal affective disorder",
          "sources": [
            "xl"
          ],
          "paragraphs": [
            "Start 150 mg each morning in autumn before symptoms; after 7 days may increase to 300 mg. Continue through winter and individualize spring taper; reduce 300 mg to 150 mg before stopping. Above 300 mg was not assessed in SAD trials."
          ]
        },
        {
          "title": "SR · Smoking cessation regimen",
          "sources": [
            "quit"
          ],
          "paragraphs": [
            "Start 150 mg daily for 3 days, then 150 mg twice daily ≥8 hours apart; maximum 300 mg/day. Start before the quit day, setting it within the first 2 weeks. Usually treat 7–12 weeks with support; if not abstinent by then, reassess and usually discontinue. Longer treatment is individualized."
          ]
        },
        {
          "title": "Hepatic and renal impairment",
          "sources": [
            "ir",
            "sr",
            "xl",
            "quit"
          ],
          "paragraphs": [
            "Child-Pugh 7–15: IR maximum 75 mg/day; depression SR 100 mg/day or 150 mg every other day; XL and smoking-cessation SR 150 mg every other day. With mild hepatic impairment consider lower dose/frequency. The selected IR, depression SR, Wellbutrin XL and cessation SR labels advise considering reduced dose/frequency when GFR <90 mL/min and monitoring for accumulation."
          ]
        },
        {
          "title": "Administration and switching",
          "sources": [
            "ir",
            "sr",
            "xl",
            "quit"
          ],
          "paragraphs": [
            "Swallow tablets whole; do not crush, split or chew. Take XL in the morning; food is optional. Clinician-directed switching to XL uses the same total daily dose when possible within product limits. Allow ≥14 days between bupropion and a psychiatric MAOI in either direction; urgent linezolid/IV methylene blue needs a specialist interruption and monitoring plan."
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Dose-related seizures and changes in mood or behavior.",
      "takeaway": "Review seizure risks before prescribing and reassess after dose changes.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "sources": [
            "xl",
            "sr",
            "ir",
            "quit"
          ],
          "open": true,
          "tone": "warning",
          "paragraphs": [
            "Seizure risk rises with dose and with head injury, CNS lesions, stroke, hypoxia, metabolic disturbance, alcohol/sedative misuse or other seizure-threshold-lowering medicines. Stop and do not restart after seizure. Monitor BP; screen for bipolar disorder. Mania, psychosis and serious behavioral changes may occur; stop and contact the clinician for concerning symptoms during a quit attempt. Narrow-angle glaucoma and severe allergic/skin reactions require urgent assessment."
          ]
        },
        {
          "title": "Contraindications",
          "sources": [
            "xl",
            "ir",
            "sr",
            "quit"
          ],
          "paragraphs": [
            "Seizure disorder; current/prior anorexia nervosa or bulimia; abrupt withdrawal from alcohol, benzodiazepines, barbiturates or antiepileptics; hypersensitivity; psychiatric MAOIs concurrently or within 14 days in either direction. Do not start while receiving linezolid or IV methylene blue. Do not combine bupropion-containing products."
          ]
        },
        {
          "title": "Boxed warning · Suicidal thoughts and behaviors",
          "sources": [
            "xl",
            "sr",
            "ir",
            "quit"
          ],
          "paragraphs": [
            "Selected labels carry the antidepressant warning: short-term trials found increased suicidality in children, adolescents and young adults. Monitor all ages for worsening mood, suicidality or unusual behavior, especially early and around dose changes; caregivers should report changes promptly."
          ]
        },
        {
          "title": "Adverse reactions",
          "sources": [
            "xl",
            "ir"
          ],
          "paragraphs": [
            "Dry mouth, nausea, insomnia, dizziness, agitation, anxiety, tremor, palpitations and sweating are reported; frequencies vary by formulation and study. Overdose can cause seizures, conduction/ rhythm disturbances, coma and death. Obtain urgent assessment and Poison Control guidance (U.S. 1-800-222-1222); no specific antidote exists."
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Review metabolic interactions and additive CNS risks.",
      "takeaway": "Bupropion inhibits CYP2D6 and can alter other medicines’ exposure.",
      "blocks": [
        {
          "title": "Clinically relevant interactions",
          "sources": [
            "xl",
            "sr",
            "ir",
            "quit"
          ],
          "open": true,
          "items": [
            "CYP2D6 substrates such as metoprolol, selected antidepressants/antipsychotics and flecainide may need dose reduction; tamoxifen activation and efficacy may be reduced, requiring specialist review.",
            "CYP2B6 inhibitors (clopidogrel/ticlopidine) and inducers (including selected antivirals and anticonvulsants) alter exposure; adjust only to clinical response within formulation limits.",
            "Other seizure-threshold-lowering medicines require extreme caution; avoid duplicate bupropion products.",
            "Levodopa or amantadine can produce additive CNS toxicity. Minimize or avoid alcohol; heavy users need a supervised withdrawal plan.",
            "Nicotine patches can increase hypertension risk; monitor BP with a combined quit regimen.",
            "Digoxin concentrations may decrease; monitor with the treating clinician.",
            "MAOIs, linezolid and IV methylene blue carry hypertensive-reaction risk.",
            "Urine amphetamine immunoassays may be falsely positive, even after stopping; obtain a specific confirmatory test."
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Balance psychiatric need with pregnancy, lactation and organ function.",
      "takeaway": "Pediatric safety and effectiveness are unestablished.",
      "blocks": [
        {
          "title": "Pregnancy",
          "sources": [
            "xl",
            "quit"
          ],
          "paragraphs": [
            "Human studies have not identified increased malformations overall; findings for specific cardiac defects are inconsistent and limited. Consider risks of untreated depression and treatment changes. Smoking-cessation decisions need an individualized benefit–risk discussion."
          ]
        },
        {
          "title": "Lactation",
          "sources": [
            "xl"
          ],
          "paragraphs": [
            "Bupropion and active metabolites enter milk; limited observations do not establish infant safety. Infant seizures have been reported with an unclear causal relationship. Weigh maternal need, infant health and breastfeeding benefits; monitor with the clinician."
          ]
        },
        {
          "title": "Pediatric and geriatric considerations",
          "sources": [
            "xl"
          ],
          "paragraphs": [
            "Selected products have no established pediatric safety/effectiveness. Older adults may be more sensitive; assess renal function and concomitant medicines because active metabolites can accumulate."
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Noradrenergic/dopaminergic activity with active metabolites.",
      "takeaway": "Release formulation changes absorption timing, not the need to count total exposure.",
      "blocks": [
        {
          "title": "Mechanism of action and pharmacodynamics",
          "sources": [
            "xl"
          ],
          "paragraphs": [
            "The antidepressant mechanism is incompletely known; norepinephrine/dopamine reuptake inhibition is thought to contribute. Bupropion does not inhibit MAO or serotonin reuptake."
          ]
        },
        {
          "title": "Pharmacokinetics",
          "sources": [
            "xl"
          ],
          "facts": [
            [
              "Absorption",
              "Selected XL median time to peak approximately 5 hours; food does not materially change exposure."
            ],
            [
              "Metabolism",
              "Extensive hepatic metabolism; CYP2B6 produces active hydroxybupropion; additional active reduced metabolites form."
            ],
            [
              "Half-life",
              "Parent mean approximately 21 hours; active metabolites persist."
            ],
            [
              "Disposition",
              "Metabolites cleared renally; impairment can increase exposure."
            ]
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Follow mood, BP, tolerability and formulation adherence.",
      "takeaway": "Do not compensate for a missed tablet with an extra dose.",
      "blocks": [
        {
          "title": "Monitoring parameters",
          "sources": [
            "xl",
            "sr",
            "ir",
            "quit"
          ],
          "open": true,
          "items": [
            "Assess response, suicidality and unusual mood/behavior changes, particularly at initiation or titration.",
            "Check BP before treatment and periodically, especially with nicotine replacement.",
            "Review bipolar and seizure risks, substance use and interacting medicines.",
            "Assess renal/hepatic function when relevant; monitor adverse effects suggesting high exposure."
          ]
        },
        {
          "title": "Patient counseling information",
          "sources": [
            "xl",
            "ir",
            "quit"
          ],
          "items": [
            "Verify IR/SR/XL, strength, indication and dose interval each refill. Never take duplicate bupropion products.",
            "Skip a missed dose and resume the regular schedule; do not double. Swallow whole.",
            "Seek immediate help for suicidality, seizure, severe allergy or acute eye pain/vision change.",
            "XL’s intact-looking shell may appear in stool; this does not mean the dose was unabsorbed.",
            "For quitting, agree on a quit date and keep counseling/support appointments."
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Identify release type as well as strength.",
      "takeaway": "Different bupropion salts and release forms need separate labels.",
      "blocks": [
        {
          "title": "Representative oral product · Wellbutrin XL",
          "sources": [
            "xl"
          ],
          "open": true,
          "facts": [
            [
              "Strength / appearance",
              "150 or 300 mg; creamy-white to pale-yellow round tablets."
            ],
            [
              "Imprint",
              "Wellbutrin XL 150 or Wellbutrin XL 300."
            ],
            [
              "Label distributor",
              "Bausch Health US, LLC."
            ],
            [
              "Example NDC",
              "0187-0730-30 · 150 mg, 30 tablets."
            ],
            [
              "U.S. status",
              "Prescription medicine."
            ]
          ],
          "links": [
            {
              "title": "View exact XL label and package images",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a435da9d-f6e8-4ddc-897d-8cd2bf777b21"
            }
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "sources": [
            "ir",
            "sr",
            "xl",
            "quit",
            "forfivo"
          ],
          "facts": [
            [
              "IR hydrochloride",
              "75 and 100 mg in the selected label."
            ],
            [
              "Depression SR hydrochloride",
              "100, 150 and 200 mg Wellbutrin SR."
            ],
            [
              "XL hydrochloride",
              "150 and 300 mg Wellbutrin XL."
            ],
            [
              "Smoking-cessation SR",
              "150 mg in the selected generic cessation label."
            ],
            [
              "Other products",
              "Forfivo XL: 450 mg hydrochloride with separate eligibility; hydrobromide and combinations are outside this reference."
            ]
          ]
        },
        {
          "title": "Storage and handling",
          "sources": [
            "xl"
          ],
          "paragraphs": [
            "Representative Wellbutrin XL: 25°C, permitted excursions 15–30°C. Keep medicines secured from children and use the exact product’s storage directions and Medication Guide."
          ]
        }
      ]
    }
  ]
};
