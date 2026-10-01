// Original summaries of linked public sources; product-specific scope.
export const tramadol = {
  "slug": "tramadol",
  "name": "Tramadol",
  "synonym": "Immediate-release and extended-release · Schedule IV opioid",
  "description": "An opioid analgesic with additional monoamine effects. Formulation, CYP interactions, kidney function, and respiratory risk determine safe treatment.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Tramadol can cause fatal respiratory depression.",
    "text": "Use only the prescribed formulation and dose. Alcohol, sedatives, CYP interactions, and ultrarapid CYP2D6 metabolism can increase danger; discuss an overdose reversal agent and never abruptly stop established treatment.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Opioid analgesic · Schedule IV"
    ],
    [
      "Selected formulations",
      "50 mg IR · 100/200/300 mg ER"
    ],
    [
      "Reference focus",
      "Selected U.S. adult oral labels"
    ]
  ],
  "sources": [
    {
      "id": "label",
      "title": "Tramadol hydrochloride IR tablets · Prescribing information",
      "publisher": "DailyMed / Preferred Pharmaceuticals, Inc.",
      "note": "Current SPL version 1, effective 2026-06-08. ",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=855905c7-1481-4b2d-a318-3254ad8ed73c"
    },
    {
      "id": "er",
      "title": "Tramadol hydrochloride ER tablets · Prescribing information",
      "publisher": "DailyMed / Lupin Pharmaceuticals, Inc.",
      "note": "Current SPL version 26, effective 2026-03-05. ",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=46bb9ae6-3ee8-463c-badb-c7a45a89b84b"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Adult opioid analgesia when alternatives are inadequate.",
      "takeaway": "IR and ER have different treatment roles.",
      "blocks": [
        {
          "title": "Immediate-release indication",
          "sources": [
            "label"
          ],
          "open": true,
          "paragraphs": [
            "For adults with pain severe enough to require an opioid analgesic when alternative treatments are inadequate. Reserve treatment for patients for whom nonopioid alternatives are ineffective, not tolerated, or otherwise inadequate; addiction and overdose risks persist at recommended doses."
          ]
        },
        {
          "title": "Extended-release indication",
          "sources": [
            "er"
          ],
          "paragraphs": [
            "For adults with severe and persistent pain requiring opioid treatment that cannot be adequately treated with alternatives, including immediate-release opioids. ER is not an as-needed analgesic."
          ]
        },
        {
          "title": "Age and formulation limits",
          "sources": [
            "label",
            "er"
          ],
          "paragraphs": [
            "Neither selected product is approved for pediatric use. All children under 12 years, and patients under 18 years after tonsillectomy or adenoidectomy, are specifically contraindicated. Avoid use in adolescents with obesity, obstructive sleep apnea, or severe lung disease. Combination products and other ER delivery systems are outside this profile."
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Start low, reassess frequently, and distinguish IR from ER.",
      "takeaway": "Do not combine tramadol products or exceed formulation-specific limits.",
      "blocks": [
        {
          "title": "Immediate-release adult dosing",
          "sources": [
            "label"
          ],
          "open": true,
          "paragraphs": [
            "If rapid analgesia is unnecessary, the label starts at 25 mg/day, increasing the total by 25 mg every 3 days in divided doses to 100 mg/day (25 mg four times daily), then by 50 mg every 3 days to 200 mg/day (50 mg four times daily). After titration, 50–100 mg every 4–6 hours as needed may be used, with a 400 mg/day ceiling. A direct 50–100 mg start is reserved for selected patients needing rapid effect when benefits outweigh higher initial adverse-effect risk. Individual lower limits below take precedence."
          ]
        },
        {
          "title": "Extended-release dosing and conversion",
          "sources": [
            "er"
          ],
          "paragraphs": [
            "Start the selected ER tablet at 100 mg once daily; titrate by 100 mg no more often than every 5 days, up to 300 mg/day. For an IR-to-ER conversion, calculate the 24-hour IR total and round down to the next lower 100 mg increment; some patients cannot be converted because of ER strength and dose limits. No established conversion ratio exists for other opioids: clinician-directed initiation and close reassessment are necessary."
          ]
        },
        {
          "title": "Kidney, liver, and older-age limits",
          "sources": [
            "label",
            "er"
          ],
          "table": {
            "headers": [
              "Population",
              "IR tablets",
              "Selected ER tablets"
            ],
            "rows": [
              [
                "CrCl <30 mL/min",
                "Every 12 hours; maximum 200 mg/day",
                "Do not use"
              ],
              [
                "Severe hepatic impairment",
                "50 mg every 12 hours",
                "Do not use in Child-Pugh C"
              ],
              [
                "Age >75 years",
                "Maximum 300 mg/day",
                "Titrate cautiously; maximum remains 300 mg/day"
              ]
            ]
          }
        },
        {
          "title": "Administration and tapering",
          "sources": [
            "label",
            "er"
          ],
          "paragraphs": [
            "IR may be taken without regard to food. Take ER once daily at a consistent time and with consistent regard to food; swallow whole with liquid, never cut, crush, chew, break, or dissolve. Do not add another tramadol-containing medicine. Do not abruptly stop or rapidly reduce treatment in a physically dependent patient: agree on an individualized taper, pain plan, and follow-up; slow or pause reductions for withdrawal."
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Respiratory depression, seizures, and serotonin toxicity can occur at prescribed doses.",
      "takeaway": "Screen risks and teach emergency warning signs.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "sources": [
            "label",
            "er"
          ],
          "open": true,
          "tone": "warning",
          "paragraphs": [
            "Fatal respiratory depression is possible, particularly at initiation or dose increases; risk increases with lung disease, sleep apnea, frailty, and CNS depressants. Known CYP2D6 ultrarapid metabolizers should not use tramadol because excessive active M1 exposure can cause life-threatening toxicity. Addiction, misuse, and accidental ingestion remain risks even during prescribed therapy.",
            "Serotonin syndrome and seizures can occur at recommended doses. Risk rises with serotonergic drugs, seizure history, withdrawal states, head injury, and medicines lowering the seizure threshold. Urgently assess agitation, fever, diarrhea, rigidity or hyperreflexia, or a seizure. Do not prescribe to patients who are suicidal or addiction-prone; assess depression and overdose risk.",
            "Other warnings include adrenal insufficiency, severe hypotension, opioid-induced hyperalgesia, worsened intracranial pressure, biliary spasm, opioid-induced esophageal dysfunction, anaphylaxis and severe skin reactions. Hyponatremia/SIADH, especially early in older women, and hypoglycemia have been reported. New swallowing difficulty, profound weakness, confusion, severe rash, or fainting needs evaluation."
          ]
        },
        {
          "title": "Contraindications",
          "sources": [
            "label",
            "er"
          ],
          "paragraphs": [
            "Children under 12 years; patients under 18 years after tonsillectomy/adenoidectomy; significant respiratory depression; acute or severe bronchial asthma without monitoring or resuscitation resources; known or suspected GI obstruction including paralytic ileus; and concurrent MAOIs or use within 14 days. Both labels contraindicate tramadol hypersensitivity; the IR label additionally specifies other product components or opioids."
          ]
        },
        {
          "title": "Boxed warning · opioid and interaction risks",
          "sources": [
            "label",
            "er"
          ],
          "paragraphs": [
            "Both selected labels carry boxed warnings for addiction, abuse and misuse; life-threatening respiratory depression; accidental ingestion; neonatal opioid withdrawal; CYP interactions; ultrarapid metabolism and fatal pediatric respiratory depression; and concomitant benzodiazepines or other CNS depressants. Opioid REMS counseling applies. ER must remain intact to prevent uncontrolled delivery."
          ]
        },
        {
          "title": "Adverse reactions",
          "sources": [
            "label",
            "er"
          ],
          "paragraphs": [
            "Common reactions include dizziness, nausea, constipation, headache, somnolence, vomiting, itching, sweating, and weakness. Serious reactions include respiratory depression, seizures, serotonin syndrome, severe allergy/skin reactions, hypotension, and electrolyte or glucose disturbances. Trial rates differ by formulation, dose, and population and should not be compared directly."
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Starting or stopping interacting drugs can alter both tramadol and active M1 exposure.",
      "takeaway": "Reassess the regimen whenever a CYP inhibitor or inducer changes.",
      "blocks": [
        {
          "title": "CYP2D6 inhibitors",
          "sources": [
            "label",
            "er"
          ],
          "open": true,
          "paragraphs": [
            "Fluoxetine, paroxetine, bupropion, and quinidine can raise parent tramadol while lowering M1: analgesia may fall or withdrawal appear, while seizure and serotonin risks rise. Stopping an inhibitor can increase M1 and respiratory depression; the label advises considering a lower tramadol dose and close monitoring."
          ]
        },
        {
          "title": "CYP3A4 inhibitors and inducers",
          "sources": [
            "label",
            "er"
          ],
          "paragraphs": [
            "Inhibitors such as erythromycin, azole antifungals, or ritonavir can increase exposure; consider dose reduction and monitor toxicity. Inducers such as rifampin or phenytoin can reduce effect or cause withdrawal; stopping an inducer can increase toxicity and may require dose reduction. Carbamazepine coadministration is not recommended because of reduced effect and seizure concerns."
          ]
        },
        {
          "title": "Serotonergic drugs and CNS depressants",
          "sources": [
            "label",
            "er"
          ],
          "paragraphs": [
            "SSRIs, SNRIs, TCAs, triptans and other serotonergic agents increase serotonin-syndrome risk; MAOIs are contraindicated within 14 days. Benzodiazepines, alcohol, other opioids, gabapentinoids and sedatives increase respiratory depression and death. Reserve necessary combinations for carefully selected patients at the lowest appropriate doses and durations, with close observation and overdose-reversal counseling."
          ]
        },
        {
          "title": "Other interactions",
          "sources": [
            "label",
            "er"
          ],
          "paragraphs": [
            "Mixed agonist/antagonist or partial agonist opioids can reduce analgesia or precipitate withdrawal; coordinate care rather than independently stopping an opioid-use-disorder medicine. Muscle relaxants increase respiratory risk; anticholinergics increase retention/ileus risk. Monitor diuretic response, digoxin toxicity, and warfarin INR when relevant."
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Children, pregnancy, kidney/liver impairment, and older age need specific precautions.",
      "takeaway": "Do not apply the usual adult ceiling to a patient requiring a lower limit.",
      "blocks": [
        {
          "title": "Pregnancy and lactation",
          "sources": [
            "label",
            "er"
          ],
          "open": true,
          "paragraphs": [
            "Human pregnancy data are insufficient to define drug-associated risk; animal findings support counseling about potential fetal harm. Prolonged use can cause neonatal opioid withdrawal; placental transfer can cause neonatal respiratory depression, and use during or immediately before labor is not recommended when alternatives are appropriate. Breastfeeding is not recommended during tramadol treatment because tramadol and M1 enter milk and may cause infant sedation or respiratory depression. Long-term opioid use may reduce fertility; reversibility is uncertain."
          ]
        },
        {
          "title": "Pediatric and older patients",
          "sources": [
            "label",
            "er"
          ],
          "paragraphs": [
            "The selected labels establish no pediatric safety/effectiveness. Specific age contraindications and adolescent respiratory risk factors are listed above. Older or debilitated patients are more vulnerable to respiratory effects; IR patients over 75 years have a 300 mg/day ceiling. Monitor sedation, falls, sodium-related symptoms, and kidney function."
          ]
        },
        {
          "title": "Renal and hepatic impairment",
          "sources": [
            "label",
            "er"
          ],
          "paragraphs": [
            "Use the IR adjustments in the dosing table. Hemodialysis removes only about 7% of a dose, and the adjusted usual IR dose may be given on dialysis days. Do not use the selected ER tablet when CrCl is below 30 mL/min or in severe hepatic impairment (Child-Pugh C); limited dose flexibility prevents safe adjustment."
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Analgesia combines opioid and monoamine effects.",
      "takeaway": "CYP2D6-dependent active metabolite exposure helps explain variable response.",
      "blocks": [
        {
          "title": "Mechanism of action",
          "sources": [
            "label",
            "er"
          ],
          "open": true,
          "paragraphs": [
            "Tramadol and its active O-desmethyl metabolite M1 contribute to analgesia. Opioid-receptor activity, including μ-receptor agonism, occurs alongside inhibition of norepinephrine and serotonin reuptake. These effects also explain respiratory depression and serotonin-related interaction risks."
          ]
        },
        {
          "title": "Pharmacokinetic profile",
          "sources": [
            "label"
          ],
          "facts": [
            [
              "IR absolute bioavailability",
              "Approximately 75% after a 100 mg oral dose"
            ],
            [
              "IR peak concentrations",
              "Parent about 2 hours; M1 about 3 hours"
            ],
            [
              "IR mean terminal half-lives",
              "Parent 6.3 hours; M1 7.4 hours"
            ],
            [
              "Elimination",
              "Hepatic metabolism; renal excretion of parent and metabolites"
            ]
          ]
        },
        {
          "title": "Formulation and patient variability",
          "sources": [
            "label",
            "er"
          ],
          "paragraphs": [
            "M1 formation depends on CYP2D6; CYP3A4 also contributes to metabolism. Kidney or liver impairment can prolong exposure. ER prolongs drug delivery and is not interchangeable dose-for-dose with arbitrary IR schedules; take it with consistent regard to food. Hemodialysis removes little tramadol or M1."
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Track analgesia, function, respiratory safety, and emerging adverse effects.",
      "takeaway": "Every prescription needs an overdose and safe-storage plan.",
      "blocks": [
        {
          "title": "Monitoring priorities",
          "sources": [
            "label",
            "er"
          ],
          "open": true,
          "paragraphs": [
            "Reassess pain and function, sedation and respiration, misuse risk, constipation, interactions, and withdrawal at initiation, titration, conversion, and follow-up. Review kidney/liver status and seizure/mental-health history. Investigate symptomatic hyponatremia, hypoglycemia, adrenal insufficiency, dysphagia, or paradoxically worsening pain."
          ]
        },
        {
          "title": "Patient and caregiver counseling",
          "sources": [
            "label",
            "er"
          ],
          "paragraphs": [
            "Do not share medication, add alcohol or sedatives, or drive until effects are known. Keep locked away from children and visitors. Discuss access to naloxone or nalmefene, recognize slow breathing or inability to awaken, and teach caregivers how to use the selected reversal product. Do not alter ER tablets, self-escalate doses, or abruptly stop treatment; use an authorized take-back option and follow the label’s disposal instructions."
          ]
        },
        {
          "title": "Overdose",
          "sources": [
            "label",
            "er"
          ],
          "paragraphs": [
            "Call emergency services immediately for suspected overdose; administer the available opioid reversal agent as directed while obtaining help. Reversal may not correct every tramadol effect, and seizures may occur; hospital airway support and observation are essential. ER can continue releasing drug for 24–48 hours or longer, so repeated reversal and prolonged monitoring may be needed. Dialysis is not an effective overdose-removal strategy."
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "One representative IR tablet and a distinct selected ER product.",
      "takeaway": "Strength and release type must both match the prescription.",
      "blocks": [
        {
          "title": "Representative product",
          "sources": [
            "label"
          ],
          "facts": [
            [
              "Selected product",
              "Tramadol HCl IR 50 mg · Preferred Pharmaceuticals"
            ],
            [
              "Appearance",
              "White to off-white, film-coated, round"
            ],
            [
              "Imprint",
              "7 and 2 separated by functional score; reverse plain"
            ],
            [
              "Example NDC",
              "68788-4114-3 · bottle of 30"
            ]
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "sources": [
            "label",
            "er"
          ],
          "paragraphs": [
            "Selected IR product: 50 mg functionally scored tablet. Selected Lupin ER products: 100 mg (L010), 200 mg (L011), and 300 mg (L012), white to off-white coated tablets. Other manufacturers, ER capsules, oral liquids, and tramadol/acetaminophen combinations require their own label review."
          ]
        },
        {
          "title": "Storage and handling",
          "sources": [
            "label",
            "er"
          ],
          "paragraphs": [
            "IR: 20–25°C, excursions 15–30°C, in a tight container. Selected ER: 25°C, excursions 15–30°C. Store securely and use the product-specific disposal instructions. ER tablets must remain whole; a functional IR score does not authorize breaking an ER product."
          ]
        }
      ]
    }
  ]
};
