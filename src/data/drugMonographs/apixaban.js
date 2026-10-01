// Original clinical summaries checked against current primary sources.
export const apixaban = {
  "slug": "apixaban",
  "name": "Apixaban",
  "synonym": "Eliquis · Eliquis Sprinkle",
  "description": "An oral direct factor Xa inhibitor for atrial fibrillation and venous thromboembolism. This reference separates adult indication-specific regimens from pediatric weight-based treatment, with current interruption, bleeding and formulation guidance.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Prevent gaps in anticoagulation and recognize bleeding.",
    "text": "Premature discontinuation increases thrombotic risk; spinal or epidural procedures can cause hematoma and paralysis. Use a planned interruption or transition, and urgently assess significant bleeding or new neurologic symptoms after a spinal procedure.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Direct factor Xa inhibitor"
    ],
    [
      "Common brand",
      "Eliquis · Pediatric Sprinkle formulation"
    ],
    [
      "Reference focus",
      "Current U.S. oral adult and pediatric label"
    ]
  ],
  "sources": [
    {
      "id": "label",
      "title": "Eliquis · Current prescribing information",
      "publisher": "Bristol Myers Squibb / Pfizer",
      "note": "Manufacturer PI revised August 2026; adult tablets and pediatric oral-suspension formulations.",
      "url": "https://packageinserts.bms.com/pi/pi_eliquis.pdf"
    },
    {
      "id": "reversal",
      "title": "Andexxa · U.S. safety and sale update",
      "publisher": "U.S. Food and Drug Administration",
      "note": "December 18, 2025: risks outweighed benefits; U.S. commercial sales ended December 22, 2025.",
      "url": "https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/update-safety-andexxa"
    },
    {
      "id": "milk",
      "title": "Apixaban · Lactation",
      "publisher": "LactMed / National Library of Medicine",
      "note": "Revised May 15, 2026; human milk measurements and infant-exposure concerns.",
      "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK500741/"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "The regimen depends on the indication and population.",
      "takeaway": "Confirm AF, surgical prophylaxis or VTE before choosing a dose.",
      "blocks": [
        {
          "title": "Adult approved uses",
          "paragraphs": [
            "Eliquis reduces stroke/systemic embolism risk in adult nonvalvular AF; prevents DVT after adult hip or knee replacement; treats adult DVT and PE; and reduces recurrent DVT/PE risk after initial treatment. These uses have separate dosing and treatment-duration requirements."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Pediatric approved use and boundaries",
          "paragraphs": [
            "Treatment of VTE and reduction of recurrence are approved from birth after at least 5 days of initial anticoagulant therapy. Pediatric use below 2.6 kg is not recommended because it was not studied. The pediatric approval does not extend adult AF or orthopedic-prophylaxis regimens to children."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Situations needing another treatment strategy",
          "paragraphs": [
            "The label does not recommend apixaban for prosthetic heart valves or triple-positive antiphospholipid syndrome. It is not an alternative to unfractionated heparin for initial PE treatment with hemodynamic instability or anticipated thrombolysis/embolectomy."
          ],
          "sources": [
            "label"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Adult regimens and pediatric weight bands must stay distinct.",
      "takeaway": "Do not apply the AF two-of-three reduction rule to adult VTE treatment.",
      "blocks": [
        {
          "title": "Adult dosing",
          "paragraphs": [
            "Take orally twice daily. Food does not materially affect bioavailability. Select the regimen by indication."
          ],
          "sources": [
            "label"
          ],
          "table": {
            "headers": [
              "Indication",
              "Regimen"
            ],
            "rows": [
              [
                "Nonvalvular AF",
                "5 mg twice daily; 2.5 mg twice daily only when ≥2 apply: age ≥80 years, weight ≤60 kg, serum creatinine ≥1.5 mg/dL"
              ],
              [
                "Hip / knee replacement prophylaxis",
                "2.5 mg twice daily, starting 12–24 hours after surgery; 35 days after hip or 12 days after knee replacement"
              ],
              [
                "Acute adult DVT / PE",
                "10 mg twice daily for the first 7 days, then 5 mg twice daily"
              ],
              [
                "Adult recurrence reduction",
                "2.5 mg twice daily after at least 6 months of DVT / PE treatment"
              ]
            ]
          }
        },
        {
          "title": "Pediatric VTE weight-based dosing",
          "paragraphs": [
            "Begin the apixaban regimen after at least 5 days of initial anticoagulation. The day numbers in this table refer to apixaban treatment, not the preceding therapy. Reassess the weight tier as the child grows and individualize total duration. All entries below are twice-daily doses."
          ],
          "sources": [
            "label"
          ],
          "table": {
            "headers": [
              "Weight",
              "Apixaban days 1–7",
              "Day 8 onward"
            ],
            "rows": [
              [
                "2.6 to <4 kg",
                "0.3 mg",
                "0.15 mg"
              ],
              [
                "4 to <6 kg",
                "1 mg",
                "0.5 mg"
              ],
              [
                "6 to <9 kg",
                "2 mg",
                "1 mg"
              ],
              [
                "9 to <12 kg",
                "3 mg",
                "1.5 mg"
              ],
              [
                "12 to <18 kg",
                "4 mg",
                "2 mg"
              ],
              [
                "18 to <25 kg",
                "6 mg",
                "3 mg"
              ],
              [
                "25 to <35 kg",
                "8 mg",
                "4 mg"
              ],
              [
                "≥35 kg",
                "10 mg",
                "5 mg"
              ]
            ]
          }
        },
        {
          "title": "Tablets, mixtures and feeding tubes",
          "paragraphs": [
            "Adults and children ≥35 kg may use 2.5 or 5 mg tablets. They can be crushed into water, D5W or apple juice, or mixed with applesauce and promptly given. For a 12 French NG tube, suspend crushed tablets in 60 mL water or D5W and flush afterward with 20 mL. Stability of these crushed-tablet preparations is up to 4 hours; do not substitute this method for the pediatric packet/capsule instructions."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Pediatric suspension preparation",
          "paragraphs": [
            "For 2.6 to <4 kg use the 0.15 mg Sprinkle capsules: open and mix the entire prescribed contents with water or infant formula; do not swallow the capsule. For 4 to <35 kg use 0.5 mg tablets supplied in packets; mix with water, formula, apple juice or applesauce, not swallowed whole. Liquid mixtures must be administered within 2 hours; applesauce mixtures immediately. Use the exact IFU volumes, oral syringe and rinse steps to deliver the full dose. The 0.5 mg packet-tablet liquid mixture has specified NG/G-tube options; obtain tube-size and preparation instructions rather than extrapolating to Sprinkle capsules."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Missed or vomited doses",
          "paragraphs": [
            "Take a missed dose as soon as possible on the same day and resume twice-daily dosing; never double. For a child vomiting or spitting up within 30 minutes, repeat the dose; after more than 30 minutes, do not repeat and give the next scheduled dose. Repeated vomiting requires clinician advice."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Elective procedures",
          "paragraphs": [
            "The label calls for at least 48 hours of interruption before procedures with moderate/high bleeding risk, or at least 24 hours for low-risk procedures with readily controlled bleeding. Bridging during this short interruption is generally unnecessary; restart once adequate hemostasis is established. Neuraxial procedures require a separate anesthesia plan; these general surgical intervals are not a complete neuraxial protocol."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Anticoagulant transitions",
          "paragraphs": [
            "From warfarin, start apixaban when INR is below 2.0. Apixaban affects INR during the reverse transition; one labeled approach starts both warfarin and a parenteral anticoagulant when the next apixaban dose would be due, stopping the parenteral drug when INR is acceptable. For transitions with other oral/parenteral anticoagulants, start the replacement at the next scheduled dose time. Use a supervised plan to avoid gaps or unintended overlap."
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
      "summary": "Bleeding and interruption safety require clinical planning.",
      "takeaway": "Urgently assess blood loss and neurologic symptoms after spinal procedures.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Serious or fatal bleeding can occur; stop apixaban for active pathological hemorrhage and assess promptly. Other antithrombotics, NSAIDs and SSRIs/SNRIs can increase bleeding risk. Premature cessation without alternative anticoagulation increases thrombotic risk.",
            "Neuraxial hematoma may cause permanent paralysis. The label specifies no catheter removal earlier than 24 hours after the last dose, no next dose earlier than 5 hours after removal, and a 48-hour delay after traumatic puncture. These are label precautions, not a complete anesthesia protocol; optimal timing is not established and pediatric catheter timing has no supporting data. New leg weakness/numbness or bowel/bladder dysfunction needs urgent evaluation."
          ],
          "sources": [
            "label"
          ],
          "open": true,
          "tone": "warning",
          "badge": "Clinical alert"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "Active pathological bleeding and severe hypersensitivity to apixaban or the product are contraindications. Renal/hepatic and indication-specific restrictions require additional review even when they are not formal contraindications."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Boxed warning · Thrombosis and spinal hematoma",
          "paragraphs": [
            "The boxed warning addresses increased thrombosis after premature discontinuation and spinal/epidural hematoma with neuraxial anesthesia or spinal puncture. Risk rises with indwelling catheters, other hemostasis-altering drugs, traumatic/repeated puncture and spinal deformity or surgery. Plan interruption and observe neurologic status."
          ],
          "sources": [
            "label"
          ],
          "badge": "Boxed warning",
          "tone": "warning"
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Bleeding is the principal adult adverse reaction. Pediatric trial events commonly included headache, vomiting and excessive menstrual bleeding. Investigate blood loss, anemia or abnormal uterine bleeding rather than dismissing these as routine nuisance effects."
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
      "summary": "Exposure interactions can change either bleeding or clotting risk.",
      "takeaway": "Review both metabolic interactions and drugs affecting hemostasis.",
      "blocks": [
        {
          "title": "Combined P-gp and strong CYP3A4 inhibitors",
          "paragraphs": [
            "For adults taking 5 or 10 mg twice daily, reduce the apixaban dose by 50% with combined P-gp/strong CYP3A4 inhibitors such as ketoconazole, itraconazole or ritonavir. Avoid these combinations when already taking 2.5 mg twice daily. Pediatric coadministration has not been studied; do not invent an adult-style weight-based adjustment. The label specifically states that clarithromycin does not require adjustment on pharmacokinetic grounds."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Inducers and hemostasis combinations",
          "paragraphs": [
            "Avoid combined strong CYP3A4/P-gp inducers such as rifampin, carbamazepine, phenytoin and St. John’s wort: lower exposure can increase stroke or thrombosis risk. Antiplatelets, anticoagulants, thrombolytics, chronic NSAIDs and SSRIs/SNRIs increase bleeding risk and need an explicit benefit/risk review."
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
      "summary": "Renal evidence limits differ between adults and children.",
      "takeaway": "Use indication-specific renal guidance; reassess pregnancy and lactation plans.",
      "blocks": [
        {
          "title": "Adult kidney function",
          "paragraphs": [
            "For AF, use the two-of-three reduction criteria rather than serum creatinine alone. For adult surgical prophylaxis and VTE, the label recommends no renal dose adjustment, including ESRD on dialysis; however, clinical studies excluded dialysis and CrCl below 15 mL/min, so those recommendations rely on PK/PD evidence. AF outcome equivalence on dialysis remains unknown."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Pediatric kidney function",
          "paragraphs": [
            "Apixaban is not recommended at eGFR below 30 mL/min/1.73 m² for age ≥2 years. For younger children, apply the label’s age-specific renal adequacy criteria; these are not the adult AF rule. The label table gives thresholds for both sexes: at 1 week, eGFR <8; at 2–8 weeks, <12; and after 8 weeks to <2 years, <22 mL/min/1.73 m². Specialist assessment is needed for neonatal ages not explicitly covered in that table."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Hepatic impairment",
          "paragraphs": [
            "Child-Pugh A needs no adjustment. No dosing recommendation can be provided for Child-Pugh B because of coagulation abnormalities and limited experience. Use is not recommended in Child-Pugh C; pediatric hepatic impairment has not been studied."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Pregnancy and reproductive planning",
          "paragraphs": [
            "Use in pregnancy is not recommended; human data are limited and maternal/fetal bleeding is a concern. Discuss pregnancy plans and abnormal uterine bleeding. As delivery approaches, a shorter-acting anticoagulant may be considered under a coordinated obstetric/anticoagulation plan."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Breastfeeding and older adults",
          "paragraphs": [
            "Breastfeeding is not recommended on apixaban. Although the product label retains an older absence-of-human-data statement, current LactMed documents substantial milk transfer and prefers an alternative, especially for newborn/preterm infants. Older adults still need the indication-specific dose criteria and assessment of organ function and interacting therapy."
          ],
          "sources": [
            "label",
            "milk"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Selective factor Xa inhibition suppresses thrombin generation.",
      "takeaway": "Routine INR values do not measure apixaban’s therapeutic intensity.",
      "blocks": [
        {
          "title": "Mechanism and laboratory interpretation",
          "paragraphs": [
            "Apixaban inhibits free and clot-bound factor Xa and prothrombinase activity without requiring antithrombin. PT/INR/aPTT changes at therapeutic doses are small and variable, making these tests unsuitable for routine assessment of anticoagulant effect. Specialized assays require a clinical question and local interpretation."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Disposition",
          "paragraphs": [
            "Oral bioavailability is about 50%, with peaks at 3–4 hours. Protein binding is about 87% and adult half-life about 12 hours. CYP3A4 is the main metabolic pathway; renal excretion contributes about 27% of total clearance, with intestinal/biliary elimination also contributing. The pediatric label reports a peak around 2 hours after a single dose; adult PK values must not replace pediatric weight-tier dosing."
          ],
          "sources": [
            "label"
          ],
          "facts": [
            [
              "Adult half-life",
              "Approximately 12 hours"
            ],
            [
              "Renal clearance contribution",
              "Approximately 27%"
            ]
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Follow adherence, bleeding and changes in organ function or treatment.",
      "takeaway": "Ensure patients and caregivers know when to seek urgent care.",
      "blocks": [
        {
          "title": "Monitoring and counseling",
          "paragraphs": [
            "Review the indication, dose, weight when relevant, renal/hepatic status, bleeding history and full medicine list. Follow bleeding or anemia symptoms and new interacting drugs. Do not stop without a plan; report blood in urine/stool, prolonged bleeding, faintness or neurologic symptoms. Tell dentists and procedural teams about treatment. Caregivers need hands-on preparation training and weight-tier review."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Major bleeding and current reversal context",
          "paragraphs": [
            "Anticoagulant effects can persist for at least 24 hours after a dose. Vitamin K and protamine do not reverse apixaban; dialysis has little effect. The current label allows consideration of PCC-based management but does not establish its clinical efficacy. FDA found Andexxa’s risks outweighed benefits and reported the end of U.S. sales on December 22, 2025; do not rely on older labels describing routine availability. Emergency specialists should use the current local protocol."
          ],
          "sources": [
            "label",
            "reversal"
          ]
        },
        {
          "title": "Overdose",
          "paragraphs": [
            "Suspected overdose or accidental ingestion requires urgent poison-center/medical assessment. Activated charcoal can reduce absorption in selected circumstances; this is a supervised toxicology decision, not a home treatment. Continue bleeding surveillance and supportive management."
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
      "summary": "Confirm the product and pediatric packet contents.",
      "takeaway": "A suspension capsule or packet must not be mistaken for a swallow-whole dose.",
      "blocks": [
        {
          "title": "Representative product",
          "paragraphs": [
            "Eliquis 5 mg tablets are pink, oval and biconvex with 894 / 5 imprints. Example bottle of 60: NDC 0003-0894-21. Pediatric packets and Sprinkle capsules have different strengths and preparation requirements; appearance alone does not establish the correct dose."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Adult/≥35 kg tablets contain 2.5 or 5 mg. Pediatric 0.5 mg tablets for suspension are supplied as packets containing 1, 3 or 4 tablets, corresponding to 0.5, 1.5 or 2 mg per packet. Sprinkle capsules contain 0.15 mg powder and are opened for suspension. Verify both tablet count and packet total."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Store Eliquis and Sprinkle at 20–25°C with excursions to 15–30°C. Follow formulation-specific mixture timing: pediatric liquids within 2 hours, applesauce mixtures immediately, and crushed 2.5/5 mg preparations up to 4 hours. Keep medicines away from children and use prescribed oral dosing equipment."
          ],
          "sources": [
            "label"
          ]
        }
      ]
    }
  ]
};
