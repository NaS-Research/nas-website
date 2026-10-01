// Original primary-label and guideline summaries; clinical scope is explicit.
export const clopidogrel = {
  "slug": "clopidogrel",
  "name": "Clopidogrel",
  "synonym": "Plavix · P2Y12 inhibitor",
  "description": "An oral antiplatelet prodrug for selected coronary and atherosclerotic vascular indications. Bleeding risk, CYP2C19 activation and the prescribed treatment plan guide use.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Do not stop without the prescribing team.",
    "text": "Stopping can increase cardiovascular-event risk. Report uncontrolled bleeding, black stools or TTP symptoms urgently; avoid omeprazole and esomeprazole.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "P2Y12 platelet inhibitor"
    ],
    [
      "Representative brand",
      "Plavix"
    ],
    [
      "Reference focus",
      "U.S. tablets; selected stroke-guideline context"
    ]
  ],
  "sources": [
    {
      "id": "label",
      "title": "Plavix · Full prescribing information",
      "publisher": "DailyMed / Sanofi",
      "note": "Clinical PI May 2025; SPL version 5/effective May 30, 2025; DailyMed archive publication June 11, 2025. Public current label accessed October 1, 2026.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=de8b0b67-eb25-4684-83b5-7ad785314227"
    },
    {
      "id": "stroke",
      "title": "Secondary stroke prevention · Guideline summary",
      "publisher": "AHA / ASA",
      "note": "Official 2021 guideline Top Things to Know, updated May 24, 2021; short-term DAPT selection, without a numeric-duration algorithm.",
      "url": "https://professional.heart.org/en/science-news/2021-guideline-for-the-prevention-of-stroke-in-patients-with-stroke-and-transient-ischemic-attack/top-things-to-know"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "ACS, recent MI/stroke and established PAD.",
      "takeaway": "Determine vascular indication and combination plan.",
      "blocks": [
        {
          "title": "Labeled uses",
          "sources": [
            "label"
          ],
          "open": true,
          "paragraphs": [
            "Non-ST-elevation ACS, including medical management or coronary revascularization, and medically managed STEMI: reduce MI/stroke with aspirin. Recent MI, recent stroke or established PAD: reduce MI/stroke."
          ]
        },
        {
          "title": "Stroke guideline context",
          "sources": [
            "stroke"
          ],
          "paragraphs": [
            "AHA/ASA recommends short-term dual antiplatelet therapy only in selected patients, such as early minor stroke/high-risk TIA or severe symptomatic intracranial stenosis. Routine long-term DAPT is not recommended for secondary stroke prevention. The indication-specific duration and stroke mechanism require clinician review."
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Use the indication-specific loading decision.",
      "takeaway": "Do not transfer study doses to a routine prescription.",
      "blocks": [
        {
          "title": "Adult oral regimens",
          "sources": [
            "label"
          ],
          "open": true,
          "table": {
            "headers": [
              "Indication",
              "Plavix label directions"
            ],
            "rows": [
              [
                "ACS needing effect within hours",
                "300 mg once as loading dose, then 75 mg once daily. Without loading, effect takes several days to establish."
              ],
              [
                "Recent MI/stroke or established PAD",
                "75 mg once daily without loading."
              ]
            ]
          }
        },
        {
          "title": "Administration and treatment planning",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "May take with or without food. ACS uses aspirin as labeled; PCI, switching from another P2Y12 inhibitor and DAPT duration require an individualized cardiology/neurology plan. This profile supplies no universal switch, 600 mg loading or fixed DAPT-duration rule."
          ]
        },
        {
          "title": "Organ impairment and procedures",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Hepatic impairment and older age require no label dose adjustment. Moderate/severe renal experience is limited; individualize risk assessment. For surgery with major bleeding risk, interrupt 5 days beforehand when possible, then restart once hemostasis is achieved under the treating team."
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Bleeding, loss of effect and rare TTP.",
      "takeaway": "Assess genotype and interacting medicines.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "sources": [
            "label"
          ],
          "open": true,
          "tone": "warning",
          "paragraphs": [
            "Bleeding may be serious or fatal. CYP2C19 variants/inhibitors can reduce effect; avoid strong CYP2C19 inducers because of bleeding risk. Premature discontinuation raises cardiovascular-event risk. TTP can occur after short exposure and requires emergency treatment, including plasma exchange. Cross-reactivity with other thienopyridines is reported."
          ]
        },
        {
          "title": "Contraindications",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Active pathological bleeding, including peptic-ulcer or intracranial bleeding; hypersensitivity to clopidogrel or product components."
          ]
        },
        {
          "title": "Boxed warning · CYP2C19 poor metabolizers",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Patients with two nonfunctional CYP2C19 alleles form less active metabolite and have reduced platelet inhibition. Tests can identify poor metabolizers; consider another P2Y12 inhibitor. The label does not establish a universal dose escalation to overcome this."
          ]
        },
        {
          "title": "Adverse reactions",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Bleeding, bruising, epistaxis and hematoma are prominent; itching is reported. Serious postmarketing allergy, skin, blood, liver and lung disorders include insulin autoimmune syndrome with severe hypoglycemia. Overdose may cause bleeding; urgent medical assessment is required and platelet transfusion may restore clotting."
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Activation, absorption and bleeding interactions.",
      "takeaway": "Dose separation does not solve omeprazole interaction.",
      "blocks": [
        {
          "title": "Clinically relevant interactions",
          "sources": [
            "label"
          ],
          "open": true,
          "items": [
            "Avoid omeprazole/esomeprazole; omeprazole reduces effect even 12 hours apart. Other listed PPIs had less effect; select gastroprotection with the prescriber.",
            "Avoid strong CYP2C19 inducers such as rifampin.",
            "Opioids delay/reduce absorption; consider a parenteral antiplatelet in ACS requiring opioids.",
            "NSAIDs, warfarin, other antiplatelets and SSRIs/SNRIs increase bleeding risk.",
            "Avoid repaglinide. If unavoidable, its label-directed start is 0.5 mg before meals, maximum 4 mg/day with more glucose monitoring."
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Pregnancy and delivery bleeding assessment.",
      "takeaway": "Pediatric effectiveness is unestablished.",
      "blocks": [
        {
          "title": "Pregnancy and lactation",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Available pregnancy reports have not identified a major-birth-defect/miscarriage signal; emergency MI/stroke treatment should not be withheld solely for fetal concerns. Avoid neuraxial blockade during use; when possible stop 5–7 days before delivery/blockade. Milk data are limited; individualize breastfeeding benefit/risk."
          ]
        },
        {
          "title": "Pediatric and geriatric considerations",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Pediatric safety/effectiveness is not established. A neonatal/infant shunt trial showed no clinical benefit. Older adults do not need an age-only adjustment; bleeding context and comorbidities still matter."
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Irreversible inhibition through an active metabolite.",
      "takeaway": "Brief plasma exposure has lasting platelet effects.",
      "blocks": [
        {
          "title": "Mechanism of action",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "The active metabolite binds platelet P2Y12 ADP receptors irreversibly, suppressing activation/aggregation for the platelet lifespan."
          ]
        },
        {
          "title": "Pharmacokinetics",
          "sources": [
            "label"
          ],
          "facts": [
            [
              "Activation",
              "Hepatic CYP enzymes, principally CYP2C19; much drug becomes inactive metabolites."
            ],
            [
              "Half-lives",
              "Parent approximately 6 hours; active metabolite about 30 minutes."
            ],
            [
              "Elimination",
              "Radiolabeled dose: approximately 50% urinary and 46% fecal recovery over 5 days."
            ],
            [
              "Platelet effect",
              "Steady inhibition after 75 mg/day by days 3–7; recovery generally about 5 days after stopping."
            ]
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Assess bleeding, adherence and clinical vascular response.",
      "takeaway": "Coordinate every procedure and medicine change.",
      "blocks": [
        {
          "title": "Monitoring parameters",
          "sources": [
            "label"
          ],
          "open": true,
          "items": [
            "Evaluate blood loss, bruising and unexplained anemia; CBC/platelets and organ tests follow clinical findings.",
            "Assess TTP symptoms: low platelets/hemolysis, neurologic changes, renal dysfunction and fever.",
            "Review CYP2C19 results when available and medicines affecting activation/bleeding.",
            "Check adherence, ischemic symptoms and repaglinide-related hypoglycemia if combination unavoidable."
          ]
        },
        {
          "title": "Patient counseling information",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Read the Medication Guide. Do not stop independently. Tell clinicians/dentists before procedures; report prolonged bleeding or blood in stool/urine. Seek urgent help for unexplained fever with neurologic symptoms, weakness or unusual bruising. Review OTC acid reducers, NSAIDs and supplements."
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Verify exact tablet and loading-dose strength.",
      "takeaway": "Imprints vary among generic products.",
      "blocks": [
        {
          "title": "Representative product · Plavix 75 mg",
          "sources": [
            "label"
          ],
          "open": true,
          "facts": [
            [
              "Appearance",
              "Pink round biconvex film-coated tablet."
            ],
            [
              "Imprint",
              "75 / 1171."
            ],
            [
              "Manufacturer",
              "Sanofi-aventis U.S. LLC."
            ],
            [
              "Example NDC",
              "0024-1171-90 · 90 tablets."
            ],
            [
              "U.S. status",
              "Prescription medicine."
            ]
          ],
          "links": [
            {
              "title": "View exact Plavix label",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=de8b0b67-eb25-4684-83b5-7ad785314227"
            }
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "sources": [
            "label"
          ],
          "facts": [
            [
              "Selected oral tablets",
              "75 mg and 300 mg."
            ],
            [
              "300 mg appearance",
              "Pink oblong, imprinted 300 / 1332; distinct loading strength."
            ]
          ]
        },
        {
          "title": "Storage and handling",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Store at 25°C; excursions 15–30°C. Keep the prescribed formulation/strength identified and dispense the Medication Guide."
          ]
        }
      ]
    }
  ]
};
