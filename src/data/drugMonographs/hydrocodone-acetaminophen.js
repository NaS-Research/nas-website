// Original clinical summaries checked against the product-specific public sources below.
export const hydrocodoneAndAcetaminophen = {
  "slug": "hydrocodone-acetaminophen",
  "name": "Hydrocodone and acetaminophen",
  "synonym": "Hydrocodone / APAP · Immediate-release combination tablets",
  "description": "A Schedule II opioid combination for severe pain when alternatives are inadequate. This reference separates strength-specific tablet limits from total acetaminophen exposure and prioritizes breathing, overdose prevention and an individualized treatment plan.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Recognize opioid overdose and count all acetaminophen.",
    "text": "Slow breathing or inability to wake needs emergency help and an opioid reversal agent if available. Never exceed the prescribed tablet limit or combine additional acetaminophen products without review; liver injury can develop before obvious symptoms.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Opioid / nonopioid analgesic combination"
    ],
    [
      "U.S. control status",
      "Schedule II"
    ],
    [
      "Reference focus",
      "Immediate-release 325 mg APAP tablets"
    ]
  ],
  "sources": [
    {
      "id": "label",
      "title": "Hydrocodone bitartrate and acetaminophen tablets · Prescribing information",
      "publisher": "Strides Pharma / DailyMed",
      "note": "PI revised January 2026; Proficient Rx repackaging SPL effective July 1, 2026. Includes 5/325, 7.5/325 and 10/325 dosing; package example is 5/325.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d36f86e2-fe0f-4b74-a5bf-b23082d72da2"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Reserve this opioid combination for pain requiring an opioid after alternatives prove inadequate.",
      "takeaway": "Set a pain, function and duration goal before prescribing.",
      "blocks": [
        {
          "title": "Approved use and limits",
          "paragraphs": [
            "The reviewed tablets treat pain severe enough to require an opioid when alternative treatments are ineffective, intolerable or insufficient. Risks of addiction and overdose exist at any dose or duration. This is a pain indication, not a cough indication despite hydrocodone’s pharmacologic antitussive activity."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Treatment approach",
          "paragraphs": [
            "Individualize treatment using prior analgesic exposure, pain severity and patient risk. Use the lowest effective dose for the shortest appropriate period; many acute pain conditions need only a few days. Repeated prescribing requires reassessment of benefit, function, adverse effects and misuse risk."
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
      "summary": "Both the hydrocodone strength and fixed acetaminophen component constrain dosing.",
      "takeaway": "The tablet maximum is lower than the total APAP ceiling would imply.",
      "blocks": [
        {
          "title": "Adult oral tablet dosing",
          "paragraphs": [
            "Use only the prescribed strength and dose. The reviewed immediate-release label gives the following as-needed starting ranges; choose the lowest dose achieving adequate analgesia and titrate individually. These are daily ceilings, not targets."
          ],
          "sources": [
            "label"
          ],
          "table": {
            "headers": [
              "Hydrocodone / APAP per tablet",
              "Labeled starting range",
              "Maximum tablets per day"
            ],
            "rows": [
              [
                "5 mg / 325 mg",
                "1–2 tablets every 4–6 hours as needed",
                "8"
              ],
              [
                "7.5 mg / 325 mg",
                "1 tablet every 4–6 hours as needed",
                "6"
              ],
              [
                "10 mg / 325 mg",
                "1 tablet every 4–6 hours as needed",
                "6"
              ]
            ]
          }
        },
        {
          "title": "Total acetaminophen exposure",
          "paragraphs": [
            "The 8-tablet 5/325 maximum contains 2,600 mg APAP; either 6-tablet higher-strength maximum contains 1,950 mg. Count every prescription and OTC APAP source, and do not take multiple APAP products without clinician review. The label’s 4,000 mg/day total APAP limit never overrides a lower prescribed or combination-tablet maximum. Liver disease or alcohol exposure increases concern and may require a different plan."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Administration, missed doses and conversions",
          "paragraphs": [
            "Take orally exactly as prescribed; do not double a missed dose. The reviewed label does not establish a food-effect dosing rule. Opioid conversion must be conservative because potency varies between patients; relative bioavailability versus extended-release hydrocodone is not established. Do not substitute ER hydrocodone or a liquid preparation using this tablet schedule."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Titration and discontinuation",
          "paragraphs": [
            "Reevaluate worsening pain before increasing the dose; opioid-induced hyperalgesia can worsen pain with escalation. A physically dependent patient needs an agreed, individualized taper with continued pain and mental-health support, not abrupt discontinuation. The label gives 10–25% or smaller total-daily-dose reductions every 2–4 weeks as an example, with slower changes or pauses when needed; this is not a universal schedule."
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
      "summary": "Opioid respiratory toxicity and acetaminophen liver toxicity require separate safeguards.",
      "takeaway": "Treat impaired breathing or suspected excess ingestion urgently.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Monitor sedation and breathing especially at initiation, dose increases, opioid conversion or interaction changes. Pulmonary disease, frailty, sleep-related breathing disorders and concomitant depressants increase risk. Discuss access to naloxone or another appropriate reversal product; one accidental dose can be fatal to a child.",
            "Reassess addiction, misuse and diversion throughout treatment. Watch for hypotension, adrenal insufficiency, seizures, biliary problems and esophageal dysfunction. Avoid use in circulatory shock, coma or impaired consciousness. New pain or sensitivity with dose increases warrants evaluation for hyperalgesia.",
            "APAP can cause serious hepatic injury, particularly with excess total exposure, alcohol or underlying liver disease. Stop and urgently evaluate severe rash, blistering or allergic symptoms. Avoid abrupt opioid withdrawal in dependent patients."
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
            "Significant respiratory depression; acute or severe bronchial asthma without monitoring or resuscitation capability; known or suspected GI obstruction including paralytic ileus; and hypersensitivity to hydrocodone or acetaminophen are contraindications."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Boxed warning: opioid and combination risks",
          "paragraphs": [
            "The boxed warning covers addiction/abuse/misuse; life-threatening respiratory depression; accidental ingestion; benzodiazepine or other CNS-depressant combinations; neonatal opioid withdrawal with prolonged pregnancy exposure; opioid REMS education; potentially fatal CYP3A4 interactions; and acetaminophen hepatotoxicity. The APAP component does not mitigate opioid overdose risk."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Frequently reported effects include light-headedness, dizziness, sedation, nausea and vomiting; constipation and urinary retention also occur. Serious reports include respiratory depression, severe skin or allergic reactions, serotonin syndrome, adrenal insufficiency, androgen deficiency, hyperalgesia, hypoglycemia and esophageal dysfunction. Spontaneous reports do not establish a precise frequency."
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
      "summary": "Starting or stopping interacting drugs can change opioid exposure substantially.",
      "takeaway": "Reconcile all prescribed, OTC and recreational substances.",
      "blocks": [
        {
          "title": "CYP3A4 and CYP2D6 interactions",
          "paragraphs": [
            "Adding a CYP3A4 inhibitor such as a macrolide, azole or ritonavir, or stopping an inducer such as rifampin, carbamazepine or phenytoin, can raise hydrocodone exposure and cause respiratory depression. Consider dose reduction and frequent assessment. Adding an inducer or stopping an inhibitor can reduce effect or cause withdrawal; reassess rather than letting the patient self-escalate. Combined CYP3A4/2D6 inhibition may further increase effects."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Sedatives, alcohol and muscle relaxants",
          "paragraphs": [
            "Benzodiazepines, gabapentinoids, other opioids, sedative-hypnotics and alcohol can produce additive sedation, coma and fatal respiratory depression. Reserve necessary combinations for inadequate alternatives, minimize dose/duration and arrange monitoring and reversal access. Muscle relaxants can further suppress respiration. Avoid alcohol."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Serotonergic drugs and MAO inhibitors",
          "paragraphs": [
            "Serotonergic combinations can cause serotonin syndrome; monitor especially when starting or increasing doses and stop the combination opioid if suspected. Use with MAO inhibitors or within 14 days of stopping one is not recommended. Urgent exceptions require specialist titration and close cardiopulmonary monitoring, not routine outpatient substitution."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Other interaction actions",
          "paragraphs": [
            "Mixed agonist/antagonist or partial agonist opioids can reduce analgesia or precipitate withdrawal; any transition needs a planned clinical approach. Anticholinergics increase urinary retention and severe constipation/ileus risk. Opioids may reduce diuretic effect; monitor fluid response and blood pressure. APAP can interfere with urinary 5-HIAA testing."
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
      "summary": "Higher sensitivity, impaired clearance and infant exposure change the benefit-risk assessment.",
      "takeaway": "Use a cautious initial dose and observe the relevant patient closely.",
      "blocks": [
        {
          "title": "Kidney and liver impairment",
          "paragraphs": [
            "Renal or hepatic impairment may raise hydrocodone concentrations. Start low and closely follow sedation and respiratory effects; the label does not provide numerical eGFR or Child-Pugh adjustment tables. Serial renal/liver tests are advised for severe disease. Liver risk from APAP must also be considered when choosing the combination."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Children and older adults",
          "paragraphs": [
            "Safety and effectiveness of these tablets in pediatric patients are not established; do not copy pediatric APAP doses into the combination. Older adults should generally start at the low end and undergo slow titration with frequent breathing/CNS assessment and renal review. Frail or pulmonary-compromised patients may need a nonopioid alternative."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Pregnancy and delivery",
          "paragraphs": [
            "Human controlled data are insufficient; use only if potential benefit justifies fetal risk. Prolonged exposure can produce neonatal withdrawal requiring expert treatment. Placental transfer may cause neonatal respiratory depression; the combination is not recommended during or immediately before labor when other analgesic techniques are preferable."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Breastfeeding and fertility",
          "paragraphs": [
            "Hydrocodone enters milk. Balance maternal need and breastfeeding benefits with infant risk; watch for unusual sleepiness, breathing difficulty or limpness and seek immediate care. Infant withdrawal can follow stopping maternal opioids or breastfeeding. The reviewed label does not establish breastfeeding safety or a universal safe dose. Extended opioid use may impair fertility, with reversibility uncertain."
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
      "summary": "The combination joins an opioid receptor agonist with a centrally acting nonopioid analgesic.",
      "takeaway": "Its two components have different toxicity and disposition pathways.",
      "blocks": [
        {
          "title": "Mechanism and clinical effects",
          "paragraphs": [
            "Hydrocodone is a full opioid agonist with relative mu-receptor selectivity. It reduces pain perception but also suppresses brainstem respiratory responses, decreases gut motility and can lower blood pressure. APAP’s analgesic mechanism is incompletely established and thought to involve central actions; it does not prevent opioid sedation or dependence."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Disposition",
          "paragraphs": [
            "In a small labeled oral study, hydrocodone peaked around 1.3 hours with a half-life around 3.8 hours. CYP3A4 forms norhydrocodone; CYP2D6 forms hydromorphone. Hydrocodone/metabolites are mainly renally eliminated. APAP undergoes hepatic conjugation and a smaller oxidative pathway producing a reactive intermediate normally detoxified by glutathione; metabolites are excreted renally. APAP’s half-life is about 1.25–3 hours and may lengthen with liver damage or overdose."
          ],
          "sources": [
            "label"
          ],
          "facts": [
            [
              "Hydrocodone half-life",
              "About 3.8 hours in the labeled small study"
            ],
            [
              "Major hydrocodone pathway",
              "CYP3A4 → norhydrocodone"
            ]
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "A safe prescription includes follow-up, a reversal plan and secure storage.",
      "takeaway": "Count tablets and APAP exposure, and reassess continued benefit.",
      "blocks": [
        {
          "title": "Monitoring and counseling",
          "paragraphs": [
            "Review pain/function benefit, sedation, respiratory rate, constipation, blood pressure, organ function, other drugs and misuse risk. Discuss dependence versus addiction and a planned stop/taper. Avoid driving until the individual response is known; do not share medication, self-increase doses or add alcohol/APAP products. Read the Medication Guide with each dispensing and plan bowel care."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Overdose response",
          "paragraphs": [
            "Call emergency services for slow breathing, severe sleepiness or inability to wake; give the available reversal agent according to its own instructions and continue emergency care because recurrence is possible. Opioid reversal does not treat APAP poisoning. Suspected excess APAP needs urgent poison-center/emergency assessment even when the person feels well; clinicians assess timing, APAP levels and need for N-acetylcysteine. Do not wait for jaundice or other delayed liver signs."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Secure use and disposal",
          "paragraphs": [
            "Keep locked or otherwise secure from children, visitors and diversion. Prefer a drug take-back option; the reviewed Medication Guide directs prompt flushing of unwanted tablets when take-back is not readily available. Make sure household members know where the reversal medicine is and how to obtain emergency help."
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
      "summary": "The representative package is one manufacturer’s immediate-release tablet.",
      "takeaway": "Confirm strength and imprint on the dispensed product.",
      "blocks": [
        {
          "title": "Representative product",
          "paragraphs": [
            "Reviewed Strides 5 mg/325 mg tablets are white and capsule-shaped, marked P on one side and 36 04 on the other. The Proficient Rx bottle of 12 has NDC 82804-306-12 and source NDC 64380-440. Other manufacturers or strengths can look different."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "The reviewed oral immediate-release tablet label describes hydrocodone bitartrate/APAP 5/325, 7.5/325 and 10/325 mg. The representative repackaging is only 5/325. Liquid, extended-release and other combination products require their own labels; do not infer dose equivalence from this page."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Store the reviewed tablets at 20–25°C in a tight, light-resistant container with a child-resistant closure. Keep securely out of sight and reach of children; child-resistant packaging alone does not prevent accidental ingestion. Follow the actual package’s instructions."
          ],
          "sources": [
            "label"
          ]
        }
      ]
    }
  ]
};
