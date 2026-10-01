// Original summaries of verified product-specific public references.
export const diltiazem = {
  "slug": "diltiazem",
  "name": "Diltiazem",
  "synonym": "Cardizem · Cardizem CD/LA · Tiazac · selected IV products",
  "description": "A nondihydropyridine calcium-channel blocker for selected angina/hypertension indications and IV supraventricular arrhythmia treatment. This reference separates immediate-release tablets, three once-daily products and two injectable presentations.",
  "checked": "2026-10-01",
  "facts": [
    [
      "Therapeutic class",
      "Nondihydropyridine calcium-channel blocker"
    ],
    [
      "Representative product",
      "Cardizem CD · once-daily capsule"
    ],
    [
      "Reference focus",
      "Selected IR/ER oral and IV labels · AF guidance"
    ]
  ],
  "essential": {
    "title": "Confirm rhythm, ventricular function and the exact formulation.",
    "text": "Diltiazem can cause bradycardia, AV block, hypotension and worsening heart failure. IV use needs ECG/BP monitoring and resuscitation equipment. Do not give for ventricular tachycardia or pre-excited AF/flutter, and do not combine IV diltiazem with IV beta-blockers.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "sources": [
    {
      "id": "diltir",
      "title": "Cardizem · immediate-release tablets",
      "publisher": "DailyMed / National Library of Medicine",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f3e7ecef-f360-4987-a4f5-933214130ab2",
      "note": "Full public manufacturer label and patient instructions; SPL version 20, effective 20250430. Product-specific directions reviewed October 1, 2026."
    },
    {
      "id": "diltcd",
      "title": "Cardizem CD · once-daily capsules",
      "publisher": "DailyMed / National Library of Medicine",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1042fa13-e6af-46b9-8008-6c941f0978b1",
      "note": "Full public manufacturer label and patient instructions; SPL version 25, effective 20251210. Product-specific directions reviewed October 1, 2026."
    },
    {
      "id": "diltla",
      "title": "Cardizem LA · once-daily tablets",
      "publisher": "DailyMed / National Library of Medicine",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3e180dc7-c871-4efc-8755-cae882976c8d",
      "note": "Full public manufacturer label and patient instructions; SPL version 19, effective 20251111. Product-specific directions reviewed October 1, 2026."
    },
    {
      "id": "tiazac",
      "title": "Tiazac · once-daily sprinkle-capable capsules",
      "publisher": "DailyMed / National Library of Medicine",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c567fe7e-887e-4291-a0d1-2dd3f25cbf25",
      "note": "Full public manufacturer label and patient instructions; SPL version 12, effective 20260807. Product-specific directions reviewed October 1, 2026."
    },
    {
      "id": "diltinj",
      "title": "Sagent diltiazem · 5 mg/mL IV vials",
      "publisher": "DailyMed / National Library of Medicine",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9d51c0f6-26b7-4220-83fb-4e736b289e64",
      "note": "Full public manufacturer label and patient instructions; SPL version 2, effective 20260806. Product-specific directions reviewed October 1, 2026."
    },
    {
      "id": "diltpremix",
      "title": "WG Critical Care diltiazem in sodium chloride · 1 mg/mL ready-to-use bags",
      "publisher": "DailyMed / National Library of Medicine",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8bae87a5-2137-467e-a1ad-79b2bc075e07",
      "note": "Full public manufacturer label and patient instructions; SPL version 4, effective 20250415. Product-specific directions reviewed October 1, 2026."
    },
    {
      "id": "afguideline",
      "title": "2023 ACC/AHA/ACCP/HRS atrial fibrillation guideline",
      "publisher": "ACC / AHA / ACCP / HRS · public author manuscript at PMC",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11104284/",
      "note": "Public complete article retrieved with curl October 1, 2026; relevant rate-control recommendations and supporting text in sections 7.2.1–7.2.2 reviewed. Browser extractor showed challenge; no paywall access claimed."
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Oral approval and IV antiarrhythmic use are separate.",
      "takeaway": "Treat the documented indication with the matching product.",
      "blocks": [
        {
          "title": "Labeled oral indications",
          "paragraphs": [
            "Cardizem IR and CD: chronic stable angina and angina due to coronary artery spasm; CD additionally treats hypertension. Cardizem LA treats hypertension and improves exercise tolerance in chronic stable angina. Tiazac treats hypertension and chronic stable angina. These selected oral labels do not list AF rate control as a labeled indication."
          ],
          "sources": [
            "diltir",
            "diltcd",
            "diltla",
            "tiazac"
          ],
          "open": true
        },
        {
          "title": "Labeled intravenous indications",
          "paragraphs": [
            "Selected IV products temporarily control rapid ventricular rate in AF/flutter and rapidly convert PSVT to sinus rhythm; WG explicitly indicates adults. Sagent describes AV-nodal reentry and reciprocating PSVT involving an accessory pathway, while AF/flutter WITH an accessory bypass tract is contraindicated. Do not conflate those rhythm situations. IV diltiazem rarely converts AF/flutter itself to sinus rhythm; it primarily slows ventricular rate."
          ],
          "sources": [
            "diltinj",
            "diltpremix"
          ]
        },
        {
          "title": "Guideline-supported AF role and ventricular-function limits",
          "paragraphs": [
            "The 2023 joint AF guideline supports acute diltiazem rate control in hemodynamically stable AF with EF > 40%, and selected long-term rate control according to comorbidities. Oral AF use is outside these selected oral labels’ indications. IV nondihydropyridine blockers should not be used with known moderate/severe LV systolic dysfunction, with or without decompensated HF; long-term use should not occur with LVEF < 40%. This focused reference does not supply a complete AF, cardioversion or anticoagulation algorithm."
          ],
          "sources": [
            "afguideline",
            "diltir",
            "diltla"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Release mechanism and product-specific titration matter.",
      "takeaway": "Match mg/day, dose frequency and formulation before switching.",
      "blocks": [
        {
          "title": "Selected oral starting doses and titration",
          "paragraphs": [
            "Adult label regimens below require BP, pulse, angina-response and adverse-effect assessment."
          ],
          "sources": [
            "diltir",
            "diltcd",
            "diltla",
            "tiazac"
          ],
          "open": true,
          "table": {
            "headers": [
              "Product / indication",
              "Label regimen"
            ],
            "rows": [
              [
                "Cardizem IR · angina",
                "Start 30 mg four times daily before meals/bedtime; increase gradually in 3–4 divided doses at 1–2-day intervals. Average optimal range 180–360 mg/day, not a universal dose ceiling."
              ],
              [
                "Cardizem CD · hypertension",
                "Start 180–240 mg once daily (some lower); usual studied 240–360 mg, individual response up to 480 mg. Max effect usually ~14 days. General experience > 360 mg limited; 540 mg studied is not its routine indication-specific instruction."
              ],
              [
                "Cardizem CD · angina",
                "Start 120 or 180 mg once daily; titrate over 7–14 days, individual response up to 480 mg."
              ],
              [
                "Cardizem LA · hypertension",
                "Start 180–240 mg once daily (some lower); titrate to maximum 540 mg/day, max effect usually ~14 days."
              ],
              [
                "Cardizem LA · angina",
                "Start 180 mg once daily; titrate every 7–14 days to maximum 360 mg/day."
              ],
              [
                "Tiazac · hypertension",
                "Start 120–240 mg once daily; titrate with ~14-day max-effect assessment; may increase to 540 mg/day (limited experience at 540)."
              ],
              [
                "Tiazac · angina",
                "Start 120–180 mg once daily; titrate every 7–14 days, up to 540 mg/day."
              ]
            ]
          }
        },
        {
          "title": "Oral administration and switching",
          "paragraphs": [
            "Cardizem IR label permits swallowing whole, crushing or chewing; its 30 mg tablet must not be split. Do not transfer IR handling to ER. Cardizem LA: swallow whole, never chew/crush, once daily at the same time; food does not meaningfully change exposure. Tiazac can be swallowed whole or all beads sprinkled on cool, soft applesauce, swallowed immediately without chewing then cool water; do not store or subdivide contents. The selected CD label does not grant Tiazac’s sprinkle permission. CD/LA/Tiazac labels allow a supervised switch from another diltiazem regimen to the nearest equivalent total daily dose with close monitoring and possible further titration; do not substitute release forms independently. Avoid alcohol with Cardizem CD because it can accelerate release."
          ],
          "sources": [
            "diltir",
            "diltcd",
            "diltla",
            "tiazac"
          ]
        },
        {
          "title": "Adult IV bolus and product-specific infusion",
          "paragraphs": [
            "Continuous ECG, frequent BP measurement and immediately available defibrillator/emergency equipment are required. Confirm actual weight and rhythm."
          ],
          "sources": [
            "diltinj",
            "diltpremix"
          ],
          "table": {
            "headers": [
              "Step / product",
              "Selected label directions"
            ],
            "rows": [
              [
                "Initial IV bolus",
                "0.25 mg/kg actual body weight over 2 minutes. If inadequate, after 15 minutes give 0.35 mg/kg over 2 minutes. Subsequent boluses individualized."
              ],
              [
                "Sagent vial · AF/flutter infusion",
                "Initial 10 mg/hour after effective bolus; some respond to 5 mg/hour. Increase by 5 mg/hour to 15 mg/hour. Maximum recommended duration 24 hours; longer/higher rates unstudied."
              ],
              [
                "WG ready-to-use bag",
                "Initial 5 mg/hour immediately after bolus; adjust by 5 mg/hour to maximum 15 mg/hour. Infusion > 24 hours unstudied; generally transition within 24 hours."
              ],
              [
                "Transition",
                "Individualize the subsequent agent/formulation using its label and clinical response; no automatic IV-to-oral conversion algorithm is supplied here."
              ]
            ]
          }
        },
        {
          "title": "IV preparation and organ considerations",
          "paragraphs": [
            "Sagent 5 mg/mL vials require dilution for infusion with saline, D5W or D5W/0.45% saline per label; calculate final volume/concentration rather than treating vial concentration as infusion concentration. Use within 24 hours and refrigerate until use. WG 1 mg/mL bags are ready to administer without further dilution. Inspect solution, avoid mixing other drugs in the same container and use a dedicated line when possible due to incompatibilities. Cardizem LA specifies no renal adjustment and likely none for mild/moderate hepatic impairment; IR/other selected labels call for cautious organ-impairment titration without a fixed algorithm. Do not generalize LA wording to severe hepatic disease or every product."
          ],
          "sources": [
            "diltinj",
            "diltpremix",
            "diltla",
            "diltir"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Conduction slowing, hypotension and reduced contractility determine suitability.",
      "takeaway": "Rule out pre-excited AF/flutter and VT before IV treatment.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [],
          "sources": [
            "diltir",
            "diltcd",
            "diltla",
            "tiazac",
            "diltinj",
            "diltpremix",
            "afguideline"
          ],
          "open": true,
          "tone": "warning",
          "items": [
            "Bradycardia and second/third-degree AV block may occur; beta-blockers, digoxin and other conduction/contractility suppressants add risk. Stop IV treatment and support if high-degree block develops.",
            "Diltiazem is negatively inotropic and can worsen HF. WG label says do not initiate in acute decompensated HF/cardiogenic shock; guideline additionally excludes IV use with moderate/severe LV systolic dysfunction and long-term AF use at LVEF < 40%.",
            "Symptomatic hypotension can occur, particularly with low baseline BP, other antihypertensives, hypovolemia or reduced contractility; monitor closely.",
            "IV treatment of pre-excited AF/flutter or VT can provoke hemodynamic collapse/ventricular fibrillation. Distinguish pre-excitation/ventricular-origin wide-complex tachycardia before administration.",
            "Acute hepatic injury and severe skin reactions, including SJS/TEN, have been reported. Reassess jaundice/liver symptoms and persistent or severe rash; discontinue/treat appropriately.",
            "Cardizem CD: avoid alcohol because of increased in-vitro release and potentially higher/more rapid exposure. Monitor after formulation or interacting-drug changes."
          ]
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "Selected oral products: sick sinus syndrome or second/third-degree AV block unless a functioning ventricular pacemaker; systolic BP < 90 mm Hg; drug hypersensitivity; acute MI with pulmonary congestion. Selected IV products: the same pacemaker exceptions for sinus/AV disease, severe hypotension/cardiogenic shock, hypersensitivity, pre-excited AF/flutter and ventricular tachycardia. IV diltiazem and IV beta-blockers must not be given together; Sagent also forbids close proximity within a few hours. That is distinct from cautious supervised combinations with oral beta-blockers."
          ],
          "sources": [
            "diltir",
            "diltcd",
            "diltla",
            "tiazac",
            "diltinj",
            "diltpremix"
          ]
        },
        {
          "title": "Boxed warning status",
          "paragraphs": [
            "The selected current U.S. diltiazem labels have no boxed warning. Route-specific contraindications and risks of conduction block, hypotension and HF remain important."
          ],
          "sources": [
            "diltir",
            "diltcd",
            "diltla",
            "tiazac",
            "diltinj",
            "diltpremix"
          ]
        },
        {
          "title": "Adverse reactions and overdose",
          "paragraphs": [
            "Oral trial/reported effects include peripheral edema, dizziness, headache, fatigue, bradycardia/AV block, nausea/constipation and rash; serious HF, hepatic, skin or allergic reactions may occur. IV trials prominently report hypotension, injection-site reactions, flushing and arrhythmia; oral incidence cannot be assigned to IV use. Postmarketing events have uncertain frequency. Overdose can cause profound bradycardia, block, hypotension and cardiac failure; emergency/toxicology care is required (U.S. Poison Help 1-800-222-1222). ER toxicity may be prolonged; dialysis does not appear effective. Follow a specialist resuscitation plan rather than a home antidote."
          ],
          "sources": [
            "diltir",
            "diltcd",
            "diltla",
            "diltinj",
            "diltpremix"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "CYP3A4/P-gp and additive cardiac effects shape interaction review.",
      "takeaway": "Review medicines when starting, changing or stopping diltiazem.",
      "blocks": [
        {
          "title": "Clinically relevant interactions",
          "paragraphs": [
            "Diltiazem is both substrate/inhibitor of CYP3A4 and P-gp; organ impairment can magnify exposure changes. This table highlights selected current label actions."
          ],
          "sources": [
            "diltla",
            "diltcd",
            "diltinj",
            "diltpremix"
          ],
          "open": true,
          "table": {
            "headers": [
              "Combination",
              "Action"
            ],
            "rows": [
              [
                "IV beta-blockers",
                "Contraindicated with IV diltiazem; selected Sagent label also forbids within a few hours."
              ],
              [
                "Oral beta-blockers / digoxin / clonidine / other cardiac depressants",
                "Monitor pulse/ECG/HF; adjust regimen as needed. Monitor digoxin concentrations with oral diltiazem changes."
              ],
              [
                "Ivabradine",
                "Avoid combination: exposure/bradycardia/conduction risk."
              ],
              [
                "Simvastatin / other CYP3A4 statins",
                "Prefer non-CYP3A4 statin when feasible; selected labels limit simvastatin to 10 mg/day and diltiazem to 240 mg/day if combined. Assess muscle toxicity and exact statin label."
              ],
              [
                "Ranolazine",
                "WG label limits ranolazine to 500 mg twice daily with diltiazem."
              ],
              [
                "Cyclosporine / carbamazepine / quinidine",
                "Monitor concentrations or toxicity/response and adjust with initiation/change/cessation."
              ],
              [
                "Midazolam / triazolam / buspirone",
                "Exposure may increase, causing prolonged sedation or toxicity; assess dose/monitoring."
              ],
              [
                "CYP3A4 inhibitors / inducers",
                "Inhibitors such as cimetidine can raise diltiazem exposure; monitor. Avoid rifampin/known inducers when possible; CD wording directly advises avoidance."
              ],
              [
                "Anesthetics / other antihypertensives / alcohol",
                "Additive BP/contractility effects require careful titration; avoid alcohol specifically with CD."
              ]
            ]
          }
        },
        {
          "title": "IV incompatibilities",
          "paragraphs": [
            "Do not mix with other drugs in the same container; dedicated line preferred. Selected labels report incompatibility with agents including furosemide, regular insulin, diazepam, phenytoin, bicarbonate and several antimicrobials/steroids. Check the complete product compatibility list before co-infusion rather than relying on this abbreviated list."
          ],
          "sources": [
            "diltinj",
            "diltpremix"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Population and organ evidence does not make all products equivalent.",
      "takeaway": "Start cautiously in older adults and assess ventricular function.",
      "blocks": [
        {
          "title": "Pregnancy and lactation",
          "paragraphs": [
            "Current LA/WG summaries state decades-of-use published pregnancy data have not identified increased major-birth-defect, miscarriage or other adverse-outcome risk; animal developmental findings and evidence limits remain. Selected older IR/CD/Tiazac/Sagent labels advise use only when benefit justifies fetal risk. Diltiazem enters human milk. LA/WG weigh maternal need, breastfeeding benefit and potential infant effects, while selected older products advise alternative infant feeding if treatment is essential. Discuss the exact product and circumstances; do not infer universal safety."
          ],
          "sources": [
            "diltla",
            "diltpremix",
            "diltir",
            "diltcd",
            "tiazac",
            "diltinj"
          ]
        },
        {
          "title": "Pediatric and geriatric considerations",
          "paragraphs": [
            "Pediatric safety/effectiveness is not established for these selected products; no pediatric regimen is supplied. Older-adult trials are limited; use cautious low-end initial dosing in view of cardiac/hepatic/renal function, comorbidity and interactions. Monitor pulse, BP, dizziness/falls, conduction and HF rather than assigning a universal age-based dose."
          ],
          "sources": [
            "diltla",
            "diltpremix",
            "diltir",
            "diltinj"
          ]
        },
        {
          "title": "Renal and hepatic impairment",
          "paragraphs": [
            "LA states no renal adjustment and that mild/moderate hepatic impairment likely needs no adjustment. Other selected labels recommend cautious use/titration with organ impairment and periodic renal/hepatic testing; no universal percentage reduction exists. Cirrhosis can increase exposure/half-life; severe hepatic impairment requires individualized review. Assess LV function and HF separately from clearance."
          ],
          "sources": [
            "diltla",
            "diltir",
            "diltinj",
            "diltpremix"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Calcium-channel blockade slows AV conduction and dilates vessels.",
      "takeaway": "Release mechanism changes the exposure pattern.",
      "blocks": [
        {
          "title": "Mechanism of action",
          "paragraphs": [
            "Diltiazem inhibits calcium entry in cardiac/vascular muscle, dilates coronary/peripheral vessels and reduces AV-nodal conduction/refractoriness. BP and oxygen-demand reduction contribute to antianginal effects; AV slowing contributes to ventricular-rate control. Reduced contractility underlies HF precautions."
          ],
          "sources": [
            "diltir",
            "diltla",
            "diltpremix"
          ]
        },
        {
          "title": "Pharmacokinetics",
          "paragraphs": [],
          "sources": [
            "diltir",
            "diltcd",
            "diltla",
            "diltpremix"
          ],
          "facts": [
            [
              "Disposition",
              "Extensive first-pass/hepatic metabolism; oral absolute bioavailability ~40%, protein binding ~70–80%, only ~2–4% unchanged urinary drug."
            ],
            [
              "Selected ER timing",
              "CD peak ~10–14 hours / apparent half-life 5–8 hours; LA peak ~11–18 hours / apparent half-life 6–9 hours. These values do not make the two products interchangeable."
            ],
            [
              "IV / nonlinear kinetics",
              "IV half-life and clearance vary with dose/infusion; rate and daily oral mg do not form a universal direct conversion."
            ],
            [
              "Organ effects",
              "Cirrhosis can increase exposure and prolong half-life; interactions through CYP3A4/P-gp affect diltiazem and companion drugs."
            ]
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Follow response, BP, pulse, conduction and signs of HF.",
      "takeaway": "A supervised formulation switch needs follow-up.",
      "blocks": [
        {
          "title": "Monitoring parameters",
          "paragraphs": [
            "Assess indication, BP/pulse, ECG/conduction when relevant, ventricular function/HF and interacting medicines before selection. Oral follow-up tracks angina/BP, edema, dizziness, bradycardia, liver/skin symptoms and renal/hepatic laboratory parameters as labels indicate. IV requires continuous ECG and frequent BP with emergency equipment; reassess block, hypotension, HF and infusion duration. Monitor companion drug levels/CK symptoms when relevant."
          ],
          "sources": [
            "diltir",
            "diltla",
            "diltinj",
            "diltpremix"
          ],
          "open": true
        },
        {
          "title": "Patient counseling information",
          "paragraphs": [
            "Know the exact release form and dosing schedule; LA must remain intact, and Tiazac’s sprinkle option does not apply to every capsule. Avoid alcohol with CD. Consult before starting/stopping other medicines, including OTC/supplements. Report fainting, unusually slow pulse, worsening dyspnea/edema, jaundice or rash promptly; severe symptoms need urgent care. Diltiazem is not an acute-angina rescue substitute; use the prescribed rescue plan. Discuss pregnancy/breastfeeding and individual missed-dose directions."
          ],
          "sources": [
            "diltla",
            "diltir",
            "diltcd",
            "tiazac"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Confirm formulation and route on every prescription.",
      "takeaway": "The infusion bag and concentrated vial have different preparation requirements.",
      "blocks": [
        {
          "title": "Representative product",
          "paragraphs": [
            "Cardizem CD 120 mg once-daily capsule: light turquoise body/cap, cardizem CD 120 mg imprint; example 30-count bottle NDC 0187-0795-30. Exact generic release/appearance is manufacturer-specific and cannot be inferred from color alone."
          ],
          "sources": [
            "diltcd"
          ],
          "open": true,
          "links": [
            {
              "title": "View exact CD label and packaging",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1042fa13-e6af-46b9-8008-6c941f0978b1"
            }
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [],
          "sources": [
            "diltir",
            "diltcd",
            "diltla",
            "tiazac",
            "diltinj",
            "diltpremix"
          ],
          "table": {
            "headers": [
              "Selected product",
              "Strengths / presentation"
            ],
            "rows": [
              [
                "Cardizem IR tablets",
                "30, 60, 90 and 120 mg"
              ],
              [
                "Cardizem CD capsules",
                "120, 180, 240, 300 and 360 mg · once daily"
              ],
              [
                "Cardizem LA tablets",
                "120, 180, 240, 300, 360 and 420 mg · once daily"
              ],
              [
                "Tiazac capsules",
                "120, 180, 240, 300, 360 and 420 mg · once daily"
              ],
              [
                "Sagent IV vials",
                "5 mg/mL · 25 mg/5 mL, 50 mg/10 mL, 125 mg/25 mL single-dose"
              ],
              [
                "WG IV ready-to-use bags",
                "1 mg/mL · 100 mg/100 mL or 250 mg/250 mL"
              ],
              [
                "Scope",
                "Other ER/SR products, generic release designs and lyophilized/injection presentations require their own directions."
              ]
            ]
          }
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Selected oral brands: 25°C, excursions 15–30°C, avoid excess humidity; LA also avoids > 30°C and uses tight light-resistant container. Sagent vials: 2–8°C, no freezing; may remain at room temperature up to 1 month then destroy; discard remainder. Diluted Sagent infusion: use within 24 hours, refrigerate until use. WG bags: 2–8°C, no freezing; original overwrapped bag may remain 20–25°C up to 1 month, and use within 28 days after removal from aluminum overwrap. Keep route-specific storage/preparation instructions with the product."
          ],
          "sources": [
            "diltir",
            "diltcd",
            "diltla",
            "tiazac",
            "diltinj",
            "diltpremix"
          ]
        }
      ]
    }
  ]
};
