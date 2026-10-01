export const warfarin = {
  "slug": "warfarin",
  "name": "Warfarin",
  "synonym": "Jantoven · Vitamin K antagonist",
  "description": "An oral anticoagulant whose dose is individually adjusted to an indication-specific INR. It has delayed onset, numerous drug and dietary interactions, and a boxed warning for major or fatal bleeding.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Use the prescribed INR target and dose schedule.",
    "text": "Major or fatal bleeding can occur even with a therapeutic INR. Keep monitoring appointments, report bleeding or head injury urgently, and obtain advice before changing medicines or diet. INR targets and duration differ by indication and valve type.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Vitamin K antagonist anticoagulant"
    ],
    [
      "Common brand",
      "Jantoven"
    ],
    [
      "Reference focus",
      "Selected U.S. oral tablets + indication-specific guidance"
    ]
  ],
  "sources": [
    {
      "id": "label",
      "title": "Jantoven · Prescribing information and Medication Guide",
      "publisher": "DailyMed / Upsher-Smith Laboratories LLC",
      "note": "Current SPL version 13, effective 2025-07-08. Current SPL retains PI revision 0917; source date is not a claim of a new 2025 clinical revision.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=19a69a72-ac5d-45d5-a94d-a5aaecbe4730"
    },
    {
      "id": "af",
      "title": "2023 AF guideline · Public key perspectives",
      "publisher": "American College of Cardiology",
      "url": "https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2023/11/27/19/46/2023-acc-guideline-for-af-gl-af",
      "note": "November 30, 2023 public society summary; current anticoagulant-selection/risk-assessment context only. Full journal guideline access not claimed."
    },
    {
      "id": "valves",
      "title": "2020 valve guideline · Public key perspectives, part 3",
      "publisher": "American College of Cardiology",
      "url": "https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2020/12/16/22/01/2020-acc-aha-vhd-gl-pt-3-gl-vhd",
      "note": "December 17, 2020 public society summary; valve-specific VKA targets and conditional bioprosthetic/On-X pathways. Full journal guideline access not claimed."
    },
    {
      "id": "vte",
      "title": "2020 ASH DVT/PE treatment guideline",
      "publisher": "American Society of Hematology / Blood Advances",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7556153/",
      "note": "Public full guideline read for recommendations 3, 12–14, 18–21 and 25 plus VKA initiation overlap. ASH’s current guideline directory retains this guidance; non-cancer VTE scope."
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Prevention and treatment of selected thromboembolic disease.",
      "takeaway": "Warfarin prevents clot extension/new thrombosis; it does not dissolve existing clots.",
      "blocks": [
        {
          "title": "Labeled indications",
          "sources": [
            "label"
          ],
          "open": true,
          "paragraphs": [
            "Jantoven is labeled for prevention/treatment of venous thrombosis and pulmonary embolism; prevention/treatment of thromboembolic complications associated with AF or cardiac valve replacement; and reduction of death, recurrent MI and thromboembolic events after MI. The post-MI indication is not a recommendation for routine anticoagulation in every MI survivor."
          ]
        },
        {
          "title": "Current clinical selection",
          "sources": [
            "label",
            "af",
            "valves",
            "vte"
          ],
          "paragraphs": [
            "For AF, use current validated stroke-risk assessment rather than the label’s older risk-factor algorithm. DOACs are generally preferred for eligible AF patients; mechanical valves and clinically important mitral stenosis require separate VKA pathways. Mechanical valves require VKA therapy. ASH generally favors DOACs for non-cancer VTE, with exceptions determined by the clinical situation."
          ]
        },
        {
          "title": "Scope of this profile",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "This profile gives representative adult INR contexts, not a self-adjustment algorithm. Pediatric treatment, pregnancy with mechanical valves, anticoagulant conversions, post-MI combination therapy and procedures require specialist plans. Anticoagulant choice, duration and antiplatelet exposure must be reassessed individually."
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "The INR and clinical indication determine the dose, not tablet color alone.",
      "takeaway": "A typical dose range is not a minimum, maximum or prescription for every patient.",
      "blocks": [
        {
          "title": "Individual initiation and maintenance",
          "sources": [
            "label"
          ],
          "open": true,
          "paragraphs": [
            "Without genotype guidance, the label describes a usual initial 2–5 mg once daily and typical maintenance 2–10 mg daily, adjusted to INR response. Lower initial/maintenance doses may be appropriate in older or debilitated people and some Asian patients. Routine loading is not recommended. CYP2C9/VKORC1 results, when known, can inform the initial estimate but do not replace INR testing."
          ]
        },
        {
          "title": "Representative INR contexts",
          "sources": [
            "label",
            "valves",
            "vte"
          ],
          "table": {
            "headers": [
              "Clinical context",
              "Target or range",
              "Important boundary"
            ],
            "rows": [
              [
                "VTE; AF when warfarin is selected",
                "Target 2.5; range 2.0–3.0",
                "Do not apply this to every mechanical valve"
              ],
              [
                "Mechanical bileaflet/current single-tilting disk aortic valve without thromboembolic risk factors",
                "Target 2.5",
                "Confirm device and patient factors"
              ],
              [
                "Mechanical aortic valve with thromboembolic risk factors or older-generation prosthesis",
                "Target 3.0",
                "Risk factors include hypercoagulability, LV dysfunction or previous thromboembolism"
              ],
              [
                "Mechanical mitral valve",
                "Target 3.0",
                "Valve-specific pathway"
              ],
              [
                "Selected On-X mechanical aortic valve without thromboembolic risk factors",
                "INR 1.5–2.0 may be used from 3 months after surgery with aspirin 75–100 mg/day",
                "Conditional specialist pathway; not permission for all valves"
              ],
              [
                "Bioprosthetic SAVR or mitral replacement",
                "VKA target 2.5 for 3–6 months may be reasonable",
                "Conditional postoperative option, not automatic lifelong therapy"
              ]
            ]
          }
        },
        {
          "title": "Acute VTE overlap and duration",
          "sources": [
            "vte"
          ],
          "paragraphs": [
            "For acute DVT/PE when a VKA is selected, ASH specifies overlap with UFH or LMWH for at least 5 days and until therapeutic INR has been achieved for 24 hours. Primary treatment is generally 3–6 months; transiently provoked events often stop thereafter, while unprovoked/chronic-risk or recurrent unprovoked disease may need indefinite secondary prevention after bleeding-risk review. Cancer-associated VTE and other indications need separate guidance."
          ]
        },
        {
          "title": "Monitoring, missed doses and procedures",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "The label calls for daily INR during initiation until stable, then typically every 1–4 weeks, with extra checks after medicine, diet or clinical changes. A missed dose may be taken when remembered on the same day; do not double the next day. Plan surgery/dental work and any interruption or bridging with the treating team; never apply one universal bridge or conversion rule."
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Bleeding and uncommon tissue, vascular and renal complications require vigilance.",
      "takeaway": "Therapeutic INR reduces dosing uncertainty but does not eliminate bleeding risk.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "sources": [
            "label"
          ],
          "open": true,
          "tone": "warning",
          "paragraphs": [
            "Bleeding risk rises with excessive INR, older age, prior GI bleeding, anemia, renal impairment, variable INRs and interacting medicines. Illness, diarrhea, poor nutrition and liver disease can change response. Seek urgent assessment for significant bleeding, head injury, severe headache or weakness.",
            "Skin necrosis/gangrene, calciphylaxis and cholesterol microembolism/purple toes can be severe or fatal and may require discontinuation and another anticoagulant. Excess anticoagulation with hematuria can cause acute kidney injury. Do not use warfarin as initial therapy for HIT/HITTS; limb ischemia, gangrene, amputation and death have occurred. It may be considered after platelet normalization under specialist care.",
            "Protein C/S deficiency can increase early necrosis risk. Hepatic disease, infection, intestinal-flora changes, catheters and hypertension increase clinical risk. Pregnancy is generally contraindicated; the high-risk mechanical-valve exception requires specialist maternal/fetal assessment."
          ]
        },
        {
          "title": "Contraindications",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "The label contraindicates pregnancy except the specified high-risk mechanical-valve situation; hemorrhagic tendencies/blood dyscrasias; active ulceration or overt GI/GU/respiratory bleeding; CNS hemorrhage; cerebral/dissecting-aortic aneurysm; pericarditis/effusion; bacterial endocarditis; threatened abortion, eclampsia or preeclampsia; relevant recent/contemplated CNS/eye or extensive traumatic surgery; spinal puncture or procedures risking uncontrollable bleeding; major regional/lumbar block anesthesia; malignant hypertension; hypersensitivity; and unsupervised patients with a high likelihood of nonadherence."
          ]
        },
        {
          "title": "Boxed warning",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Warfarin can cause major or fatal bleeding. Monitor INR regularly in every treated patient; drugs, dietary changes and other factors alter anticoagulation. Educate patients about preventing and recognizing bleeding."
          ]
        },
        {
          "title": "Adverse reactions",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Fatal and nonfatal hemorrhage from any organ is the principal adverse reaction. Other reports include allergic/anaphylactic reactions, skin reactions or hair loss, nausea, vomiting, diarrhea, abdominal symptoms, hepatitis/elevated liver enzymes and vasculitis. Serious tissue, renal and embolic complications are described above. Reported events do not provide a universal incidence estimate."
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Interactions can alter INR or increase bleeding without a proportional INR change.",
      "takeaway": "Contact the anticoagulation team when starting, stopping or changing any medicine.",
      "blocks": [
        {
          "title": "Metabolic interactions",
          "sources": [
            "label"
          ],
          "open": true,
          "paragraphs": [
            "CYP2C9 metabolizes the more potent S-enantiomer; CYP1A2/3A4 contribute to R-enantiomer metabolism. Inhibitors can raise INR and inducers can lower it. Examples include amiodarone, trimethoprim/sulfamethoxazole, metronidazole and azole antifungals increasing effect, and rifampin or carbamazepine reducing effect. Direction and magnitude vary; use more frequent INR testing rather than a fixed percentage adjustment."
          ]
        },
        {
          "title": "Additional bleeding risk",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Other anticoagulants, aspirin/antiplatelets, NSAIDs and serotonin-reuptake inhibitors can increase bleeding. Combination therapy sometimes has a specific indication, but requires deliberate risk review; do not independently add aspirin or stop a prescribed antiplatelet."
          ]
        },
        {
          "title": "Antibiotics, herbals and foods",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Closely monitor INR when starting/stopping antibiotics or antifungals, even when a predictable CYP interaction is absent. Botanicals vary in composition: garlic/ginkgo may add bleeding risk, while St. John’s wort, ginseng or coenzyme Q10 may reduce effect. Keep vitamin K intake consistent in a balanced diet; do not eliminate all leafy vegetables. Avoid abrupt dietary changes and review alcohol use and supplements with the team."
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Pregnancy, pediatric use and organ impairment need distinct plans.",
      "takeaway": "No calculated renal adjustment does not mean renal disease is low risk.",
      "blocks": [
        {
          "title": "Pregnancy and reproductive potential",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Warfarin crosses the placenta and can cause embryopathy, fetal bleeding/death, miscarriage and CNS/eye abnormalities. Pregnancy is contraindicated except selected high-thromboembolic-risk mechanical-valve situations where benefit may outweigh harm. Verify pregnancy status before initiation and use effective contraception during treatment and for at least 1 month after the final dose. Pregnancy or plans to conceive require immediate specialist discussion."
          ]
        },
        {
          "title": "Breastfeeding",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Warfarin was not detected in milk in a limited study. Consider maternal need and breastfeeding benefits; monitor the infant for bruising or bleeding. Effects in premature infants were not evaluated in the selected label."
          ]
        },
        {
          "title": "Children and older adults",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Adequate controlled pediatric studies and optimal dosing are not established; pediatric use relies on limited data and adult recommendations with frequent individualized INR assessment. Nutrition/formula vitamin K and age influence response. Older adults may have greater sensitivity and need lower doses and closer bleeding surveillance; avoid traumatic activities and address adherence/fall risks."
          ]
        },
        {
          "title": "Renal and hepatic impairment",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "The label specifies no calculated renal dose adjustment, but recommends more frequent INR monitoring. Kidney disease increases bleeding/anticoagulant-related kidney-injury vulnerability. Hepatic dysfunction can increase response through reduced factor synthesis and metabolism; intensify monitoring for bleeding and INR changes."
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Vitamin K antagonism affects clotting factors and natural anticoagulant proteins.",
      "takeaway": "The delayed effect makes INR-guided titration and indication-specific overlap essential.",
      "blocks": [
        {
          "title": "Mechanism",
          "sources": [
            "label"
          ],
          "open": true,
          "paragraphs": [
            "Warfarin inhibits vitamin K regeneration through the VKORC1-associated reductase system, reducing functional factors II, VII, IX and X and proteins C/S. It prevents further thrombus growth rather than directly lysing a clot."
          ]
        },
        {
          "title": "Pharmacodynamics and kinetics",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "An anticoagulant effect can begin within 24 hours, with peak effect delayed 72–96 hours; a single dose’s effect may persist 2–5 days. Oral absorption is essentially complete, protein binding about 99%, and hepatic metabolism predominates. Effective half-life averages about 40 hours (range 20–60), distinct from the longer terminal phase. Very little unchanged warfarin is excreted in urine."
          ]
        },
        {
          "title": "Genetic and clinical variability",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "S-warfarin is more potent and chiefly metabolized by CYP2C9. CYP2C9/VKORC1 variation, age, organ disease, interacting drugs and nutrition change dose needs. Genotype-informed estimates are not interchangeable with a stable therapeutic INR or a universal maintenance dose."
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Follow INR, bleeding, adherence and changing clinical circumstances.",
      "takeaway": "A reliable written dose schedule and rapid access to the treatment team are essential.",
      "blocks": [
        {
          "title": "Monitoring",
          "sources": [
            "label"
          ],
          "open": true,
          "paragraphs": [
            "Document indication, INR target, planned duration and actual daily schedule. Monitor INR and signs of bleeding/thrombosis; assess blood count, renal/hepatic status and medication/diet changes as clinically indicated. Reassess extended treatment periodically. Increase INR checks after intercurrent illness or changes to drugs, diet or adherence."
          ]
        },
        {
          "title": "Counseling",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Carry anticoagulant identification and tell every clinician/dentist. Maintain consistent vitamin K intake and attend INR appointments. Report red/brown urine, black/bloody stools, prolonged bleeding, skin pain/discoloration or purple/cold toes. Seek urgent care after significant head injury or severe neurologic symptoms. Do not independently stop treatment, alter dose, add OTC medicines or change a procedure plan."
          ]
        },
        {
          "title": "Excess anticoagulation and bleeding",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Obtain urgent medical assessment for overdose or major bleeding. Management depends on INR, bleeding and clinical circumstances and may require holding warfarin, vitamin K and urgent factor replacement. This profile supplies no home reversal dose, universal hold algorithm or product-conversion instructions."
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Multiple scored strengths support individualized schedules.",
      "takeaway": "Verify the imprint and strength at every refill; color alone is insufficient.",
      "blocks": [
        {
          "title": "Representative tablet · Jantoven 5 mg",
          "sources": [
            "label"
          ],
          "facts": [
            [
              "Appearance",
              "Peach, round, single-scored tablet"
            ],
            [
              "Debossing",
              "WRF / 5 · 832 on reverse"
            ],
            [
              "Example package",
              "NDC 0832-1216-00 · bottle of 100"
            ],
            [
              "Manufacturer",
              "Upsher-Smith Laboratories LLC"
            ]
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "The selected oral tablets contain 1, 2, 2.5, 3, 4, 5, 6, 7.5 or 10 mg warfarin sodium. Each has WRF above the score, strength below and 832 on the reverse. Product-specific colors differ by strength; the selected 10 mg tablet is white and dye-free. Other manufacturers and compounded liquids need their own identification and concentration verification."
          ]
        },
        {
          "title": "Storage and handling",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Store at 20–25°C, with permitted excursions 15–30°C. Protect from light/moisture and dispense in a tight, light-resistant container with child-resistant closure. Pregnant pharmacy/clinical personnel should avoid exposure to crushed or broken tablets; follow appropriate handling/disposal procedures. Keep away from children."
          ]
        }
      ]
    }
  ]
};
