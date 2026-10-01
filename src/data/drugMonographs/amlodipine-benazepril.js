// Original clinical summaries checked against the product-specific public sources below.
export const amlodipine_benazepril = {
  "slug": "amlodipine-benazepril",
  "name": "Amlodipine and benazepril",
  "synonym": "Lotrel · Calcium-channel blocker / ACE inhibitor",
  "description": "A focused reference for the fixed oral hypertension combination, component-specific doses and renal/pregnancy safety.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Pregnancy and angioedema need prompt action.",
    "text": "Stop when pregnancy is detected and contact the clinician for an alternative. Tongue/throat swelling or breathing difficulty needs emergency care. Monitor kidney function and potassium.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Components",
      "Amlodipine plus benazepril hydrochloride"
    ],
    [
      "Schedule",
      "Once-daily oral capsule"
    ],
    [
      "Labeled dose ceiling",
      "Amlodipine 10 mg / benazepril 40 mg daily"
    ]
  ],
  "sources": [
    {
      "id": "label",
      "title": "Amlodipine/benazepril · Current full label",
      "publisher": "Avet / DailyMed",
      "note": "Current SPL 6 effective June 29, 2026; highlights 06/2026, clinical/Patient Information footer 11/2025. Six oral strengths.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=27b0c628-820a-48bf-a411-86c0ebd4cc8d"
    },
    {
      "id": "brand",
      "title": "Lotrel · Retained current brand label",
      "publisher": "Novartis / DailyMed",
      "note": "Current SPL 30 effective August 1, 2023; archive published November 22, 2024. Brand records include marketing-end dates; no current retail availability inferred.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=94ae6054-b7ae-4212-a567-4f803af8f2c7"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "A fixed oral ACE-inhibitor/calcium-channel-blocker combination for hypertension.",
      "takeaway": "Use after insufficient control with either component alone, as labeled.",
      "blocks": [
        {
          "title": "Labeled indication",
          "paragraphs": [
            "The combination treats hypertension in patients not adequately controlled with amlodipine or benazepril alone. Label initiation also includes inadequate amlodipine control without tolerable edema. It is not labeled as routine initial monotherapy, an acute hypertensive-emergency drug or a universal heart-failure/angina regimen. The indication of an individual ingredient does not automatically extend to this capsule."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Prescription and product scope",
          "paragraphs": [
            "The selected generic is a prescription oral fixed-dose product; Lotrel is the original brand with U.S. approval 1995 under NDA020364. The retained brand label is not proof that every brand strength/package is currently sold. Component ratios and capsule identity must match the actual dispensed product."
          ],
          "sources": [
            "label",
            "brand"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Use a matched component pair once daily and titrate to clinical response.",
      "takeaway": "The fixed capsule is not recommended in severe renal impairment.",
      "blocks": [
        {
          "title": "Initial and titrated therapy",
          "paragraphs": [
            "Recommended initial combination is amlodipine 2.5 mg/benazepril 10 mg orally once daily after the labeled monotherapy conditions are met. Individualize titration, up to 10/40 mg once daily if needed. Most BP effect develops within 2 weeks; do not treat that as a mandatory increase interval for every patient. Separate titrated components may be replaced by the corresponding combination strength. Take at the same time daily, with or without food."
          ],
          "sources": [
            "label"
          ],
          "table": {
            "headers": [
              "Parameter",
              "Combination label instruction"
            ],
            "rows": [
              [
                "Initial pair",
                "Amlodipine 2.5 mg / benazepril 10 mg once daily"
              ],
              [
                "Higher label pair",
                "Up to amlodipine 10 mg / benazepril 40 mg once daily"
              ],
              [
                "Replacement therapy",
                "Match the previously titrated component doses"
              ],
              [
                "Available pairs",
                "2.5/10; 5/10; 5/20; 5/40; 10/20; 10/40 mg"
              ]
            ]
          }
        },
        {
          "title": "Kidney, liver and older-patient dosing",
          "paragraphs": [
            "No adjustment is needed for mild/moderate renal impairment, but monitor renal function and potassium. Severe impairment increases benazepril exposure; the label’s recommended benazepril 5 mg component is unavailable in this fixed combination, so it is not recommended. PK identifies increased benazeprilat exposure at CrCl ≤ 30 mL/min; do not improvise a capsule split or alternate-day substitute. Older age and hepatic insufficiency increase amlodipine exposure, so consider lower individualized doses."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Administration and missed dose",
          "paragraphs": [
            "Verify which number belongs to each ingredient: amlodipine first, benazepril hydrochloride second. Do not add duplicate ACE-inhibitor or amlodipine products without a prescriber plan. The selected Patient Information says to take a missed dose when remembered, but if more than 12 hours have elapsed, resume the next regular dose; do not double."
          ],
          "sources": [
            "label"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Fetal toxicity, angioedema, hypotension, renal deterioration and hyperkalemia are key risks.",
      "takeaway": "Facial/tongue swelling or breathing trouble needs emergency care.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "ACE-inhibitor angioedema can arise at any time and obstruct the airway; stop treatment and obtain emergency care for face/tongue/throat swelling or breathing difficulty. Abdominal pain may reflect intestinal angioedema even without prior facial swelling. Risk is increased with certain mTOR/neprilysin inhibitors. Alert clinicians before venom desensitization, high-flux dialysis or dextran-sulfate LDL apheresis.",
            "Hypotension is more likely with salt/volume depletion, diuretics, severe valve disease or heart failure. Correct depletion before initiation; severe symptoms need reassessment. Monitor for renal deterioration and elevated potassium, particularly with renal disease/diabetes or interacting drugs. Starting/increasing amlodipine can worsen angina or precipitate MI in severe obstructive coronary disease. Jaundice or marked liver-enzyme elevation requires discontinuation and assessment."
          ],
          "sources": [
            "label"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "Contraindicated with prior angioedema, whether or not ACE-inhibitor-related, or hypersensitivity to benazepril, another ACE inhibitor, amlodipine or capsule excipients. Do not use with aliskiren in diabetes. Neprilysin-inhibitor combination is contraindicated; allow at least 36 hours when switching to or from sacubitril/valsartan. Pregnancy has a separate fetal-toxicity boxed warning requiring prompt discontinuation when detected."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Boxed-warning status",
          "paragraphs": [
            "The boxed warning concerns fetal toxicity from renin-angiotensin-system blockade. Exposure can injure or kill the developing fetus; discontinue as soon as pregnancy is detected and arrange an alternative treatment plan. Angioedema and renal/potassium risks remain serious precautions although not the box’s topic."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Cough, edema, headache and dizziness are common reported effects. Adding benazepril can reduce amlodipine-associated edema in trials but does not eliminate swelling or angioedema risk. Serious events include hypotension, renal failure, hyperkalemia, angioedema and rare hepatic injury; postmarketing blood-cell and skin reactions have uncertain frequencies."
          ],
          "sources": [
            "label"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Review potassium, renal-risk drugs and amlodipine exposure modifiers.",
      "takeaway": "Do not add potassium salt substitutes without clinician advice.",
      "blocks": [
        {
          "title": "RAS blockade, potassium and neprilysin",
          "paragraphs": [
            "Generally avoid dual RAS blockade with another ACE inhibitor, ARB or aliskiren because hypotension, renal dysfunction and hyperkalemia increase. Aliskiren is contraindicated in diabetes and should be avoided with renal impairment GFR < 60 mL/min. Potassium supplements, potassium-sparing diuretics and potassium salt substitutes require careful review/monitoring. Sacubitril needs the 36-hour switch separation; mTOR inhibitors increase angioedema risk."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "NSAIDs, lithium and other benazepril interactions",
          "paragraphs": [
            "NSAIDs including COX-2 inhibitors can reduce BP benefit and worsen kidney function, especially with older age, dehydration or kidney disease; monitor renal function. Lithium exposure/toxicity can increase, requiring frequent levels. ACE inhibitors with diabetes drugs can rarely contribute to hypoglycemia; monitor symptoms/glucose as appropriate. Injectable gold has rare flushing/nausea/vomiting/hypotension reports."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Amlodipine interactions",
          "paragraphs": [
            "Limit simvastatin to 20 mg/day with amlodipine. CYP3A inhibitors, including ritonavir, may increase amlodipine exposure; assess hypotension/edema and dose reduction. CYP3A inducers require BP monitoring because a universal numerical correction is not established. Other BP-lowering agents, including sildenafil, can add hypotension even without a demonstrated PK interaction."
          ],
          "sources": [
            "label"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Pregnancy, age and organ function require separate assessment.",
      "takeaway": "The fixed-dose combination has no established pediatric use.",
      "blocks": [
        {
          "title": "Pregnancy",
          "paragraphs": [
            "Discontinue promptly when pregnancy is detected. RAS blockade in later pregnancy can impair fetal kidneys and cause oligohydramnios, lung/skull abnormalities, neonatal hypotension/renal failure or death. Discuss alternatives before conception. Exposure during pregnancy warrants specialist fetal/newborn assessment; delayed appearance of oligohydramnios does not exclude prior injury."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Breastfeeding",
          "paragraphs": [
            "Small amounts of benazepril/benazeprilat enter milk, and amlodipine is present; the selected label reports an estimated median amlodipine relative infant dose 4.2% and no observed infant adverse effects in limited data. Milk-production effects are unknown. These observations do not establish safety for every neonate or combination dose; individualize treatment and feeding."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Children and older adults",
          "paragraphs": [
            "Pediatric safety/effectiveness of this combination are not established. Older adults have increased amlodipine exposure and may be more sensitive, supporting lower initial-dose consideration and BP/fall-risk assessment. Adult component approvals do not create a pediatric combination schedule."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Renal and hepatic impairment",
          "paragraphs": [
            "The fixed capsule is not recommended for severe renal impairment because an appropriate low benazepril strength is unavailable. Less severe impairment still requires kidney/potassium monitoring. Hepatic insufficiency decreases amlodipine clearance; consider lower doses and reassess symptoms. Reduced renal clearance of benazeprilat differs from amlodipine’s disposition; avoid applying one component’s PK reassurance to both."
          ],
          "sources": [
            "label"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Benazepril reduces RAS signaling while amlodipine reduces vascular calcium influx.",
      "takeaway": "Different component half-lives support daily dosing but do not eliminate accumulation risk.",
      "blocks": [
        {
          "title": "Mechanism and pharmacodynamics",
          "paragraphs": [
            "Benazepril is converted to benazeprilat, which inhibits ACE, reducing angiotensin II/aldosterone signaling. ACE also degrades bradykinin, relevant to ACE-inhibitor effects. Amlodipine blocks calcium influx predominantly in vascular smooth muscle and lowers peripheral resistance. BP effects complement one another; individual response is not guaranteed by older trial subgroup averages."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Absorption, metabolism and elimination",
          "paragraphs": [
            "Amlodipine peaks around 6–12 hours and has a terminal half-life 30–50 hours; it is extensively hepatically metabolized. Benazepril peaks 0.5–2 hours and is converted mainly in the liver to active benazeprilat, which peaks 1.5–4 hours and is cleared mainly renally in normal kidney function. Benazeprilat’s effective elimination half-life is 10–11 hours, distinct from its longer terminal phase; steady state of both components is reached around 1 week."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Clinical variability",
          "paragraphs": [
            "Severe kidney impairment increases benazeprilat peak exposure and effective half-life. Older age and hepatic impairment decrease amlodipine clearance. The label allows food-independent administration while noting direct combination food-effect studies were not performed; avoid claiming every PK property of the fixed capsule was measured in every population."
          ],
          "sources": [
            "label"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Track BP response, symptoms, renal function and potassium.",
      "takeaway": "Write both component doses and check all interacting medicines.",
      "blocks": [
        {
          "title": "Monitoring",
          "paragraphs": [
            "Check BP, kidney function, potassium, volume status, pregnancy plans and prior angioedema before therapy; follow BP/orthostatic symptoms, edema/cough and renal/potassium changes. Reassess after titration or addition of NSAIDs, diuretics, potassium agents or RAS blockers. The label calls for periodic testing, not one mandatory numerical interval for everyone."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Patient counseling",
          "paragraphs": [
            "Take the prescribed capsule at the same daily time; check the strength and missed-dose instruction. Report pregnancy promptly and discuss preconception alternatives. Avoid unapproved potassium salt substitutes. Dehydration, sweating, vomiting/diarrhea or low intake can cause hypotension; contact the clinician if these occur or fainting develops. Tell dental/surgical, dialysis and allergy-treatment teams about the ACE inhibitor."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Urgent assessment",
          "paragraphs": [
            "Seek emergency care for airway swelling, severe breathing difficulty or persistent/worsening chest pain. Fainting needs prompt clinician review; selected counseling says hold further treatment until consulted after syncope. Jaundice or marked hepatic abnormalities require assessment. Suspected overdose needs immediate medical help rather than extra salt/fluid or unsupervised dose changes."
          ],
          "sources": [
            "label"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Verify the two component amounts and actual manufacturer.",
      "takeaway": "The first strength number is amlodipine equivalent, not amlodipine besylate salt mass.",
      "blocks": [
        {
          "title": "Representative product identity",
          "paragraphs": [
            "Selected Avet 5/20 mg capsule is pink opaque cap/body with black imprint 922; a 100-capsule bottle is NDC 23155-922-01. This identity belongs to that generic product, not every Lotrel or generic capsule. Retain packaging and confirm appearance/NDC with the pharmacist; do not identify solely from a photo."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Oral fixed capsules contain amlodipine equivalent 2.5, 5 or 10 mg with benazepril hydrochloride 10, 20 or 40 mg in the six labeled pairs: 2.5/10, 5/10, 5/20, 5/40, 10/20 and 10/40 mg. Not every possible mathematical ratio exists. Benazepril 5 mg is absent; no injectable or liquid combination conversion is supplied."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Selected Avet capsules are stored 20–25°C, protected from moisture, heat and light, and dispensed in a tight, light-resistant container. Follow the actual dispensed product’s package instructions, keep away from children and retain its patient leaflet."
          ],
          "sources": [
            "label"
          ]
        }
      ]
    }
  ]
};
