// Original clinical summaries checked against the product-specific public sources below.
export const escitalopram = {
  "slug": "escitalopram",
  "name": "Escitalopram",
  "synonym": "Escitalopram oxalate · Lexapro",
  "description": "An SSRI for major depressive disorder and generalized anxiety disorder. This reference follows the Lexapro label, separating indication-specific pediatric dosing and practical serotonin, withdrawal and cardiac precautions.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Monitor mood and check serotonergic combinations.",
    "text": "The antidepressant boxed warning concerns suicidal thoughts and behaviors in children, adolescents and young adults. Review MAOIs and other interacting drugs before treatment; possible serotonin syndrome requires urgent assessment.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Selective serotonin reuptake inhibitor"
    ],
    [
      "Common brand",
      "Lexapro"
    ],
    [
      "Reference focus",
      "U.S. Lexapro oral tablet label"
    ]
  ],
  "sources": [
    {
      "id": "label",
      "title": "Lexapro · Prescribing information",
      "publisher": "DailyMed / AbbVie",
      "note": "Current accessible SPL version 45, effective October 1, 2023; medication guide bears April 2024 revision. Generic labeling and marketed formulations may differ.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=13bb8267-1cab-43e5-acae-55a4d957630a"
    },
    {
      "id": "qt",
      "title": "Escitalopram · QT interval precautions",
      "publisher": "UK MHRA",
      "note": "UK regulatory advice published December 2014; its cardiac restrictions are identified separately from U.S. labeling.",
      "url": "https://www.gov.uk/drug-safety-update/citalopram-and-escitalopram-qt-interval-prolongation"
    },
    {
      "id": "milk",
      "title": "Escitalopram · Lactation",
      "publisher": "LactMed / National Library of Medicine",
      "note": "Revised August 15, 2026; infant monitoring and milk exposure.",
      "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK501275/"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Approval depends on both diagnosis and age.",
      "takeaway": "Confirm the treated disorder and the exact dispensed product label.",
      "blocks": [
        {
          "title": "Approved uses",
          "paragraphs": [
            "Lexapro is indicated for MDD in adults and patients aged 12 years or older, and GAD in adults and patients aged 7 years or older. It is an oral prescription medicine; these age limits do not establish effectiveness below the respective thresholds."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Reference boundaries",
          "paragraphs": [
            "This profile follows the branded Lexapro label. Some generic labels may retain different pediatric indication wording. Other psychiatric uses require an indication-specific assessment and are not represented here as FDA-approved uses."
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
      "summary": "Once-daily dosing with different minimum titration intervals.",
      "takeaway": "Allow the indication-specific interval before increasing to the maximum dose.",
      "blocks": [
        {
          "title": "Starting dose and titration",
          "paragraphs": [
            "All listed populations start at 10 mg once daily; 20 mg once daily is the labeled maximum. Increase only after assessing response and tolerability. The adult MDD fixed-dose trial did not establish extra benefit at 20 mg over 10 mg."
          ],
          "sources": [
            "label"
          ],
          "table": {
            "headers": [
              "Indication / population",
              "Earliest increase to 20 mg"
            ],
            "rows": [
              [
                "Adult MDD",
                "After at least 1 week"
              ],
              [
                "MDD, age ≥12 years",
                "After at least 3 weeks"
              ],
              [
                "Adult GAD",
                "After at least 1 week"
              ],
              [
                "GAD, age ≥7 years",
                "After at least 2 weeks"
              ]
            ]
          }
        },
        {
          "title": "Administration and formulations",
          "paragraphs": [
            "Take once daily, morning or evening, with or without food. Lexapro tablets contain 5, 10 or 20 mg; the 10 and 20 mg tablets are scored. The label describes a 1 mg/mL oral solution but explicitly states that this branded solution is not currently marketed."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Older adults, liver and kidney function",
          "paragraphs": [
            "The recommended dose for most older patients and patients with hepatic impairment is 10 mg daily. Mild or moderate renal impairment needs no dose adjustment; dosing is undetermined at creatinine clearance below 20 mL/min, requiring caution and individualized review."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Stopping and MAOI transitions",
          "paragraphs": [
            "Reduce gradually whenever possible and monitor withdrawal symptoms. Intolerable symptoms may require returning to the prior dose followed by a slower reduction. Keep at least 14 days between stopping a psychiatric MAOI and starting escitalopram, or stopping escitalopram and starting a psychiatric MAOI."
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
      "summary": "Mood, serotonin toxicity and withdrawal require active follow-up.",
      "takeaway": "Urgent symptoms need assessment; avoid abrupt discontinuation.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Screen for bipolar disorder before treatment; activation of mania or hypomania can occur. Use cautiously with a seizure history. Hyponatremia, often involving SIADH, is more likely with older age, diuretics or volume depletion; confusion, weakness or unsteadiness warrant assessment, and severe cases can cause seizures.",
            "Serotonin syndrome can occur alone or with serotonergic combinations. Fever, agitation, tremor, hyperreflexia or diarrhea with clinical deterioration require urgent care; stop implicated drugs and provide supportive treatment when syndrome is diagnosed. Bleeding risk rises with drugs affecting hemostasis. Anatomically narrow untreated eye angles confer an angle-closure risk.",
            "QT effects depend on dose. UK MHRA advice prohibits use with known or congenital QT prolongation or other QT-prolonging medicines; it recommends considering ECG review in cardiac disease, correcting potassium or magnesium deficits, and ECG assessment for palpitations or syncope. These are UK restrictions, distinct from the U.S. contraindication list."
          ],
          "sources": [
            "label",
            "qt"
          ],
          "badge": "Clinical alert",
          "tone": "warning",
          "open": true
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "Do not combine with psychiatric MAOIs or use within the 14-day washout in either direction. Do not initiate during linezolid or intravenous methylene blue treatment. Pimozide coadministration and hypersensitivity to escitalopram, citalopram or ingredients are contraindications."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Boxed warning · Suicidal thoughts and behaviors",
          "paragraphs": [
            "Antidepressant trials show increased suicidal thoughts and behaviors in pediatric and young adult patients. Monitor every treated patient for worsening mood or new suicidality, especially early in treatment and after dose changes; patients and caregivers should promptly report changes."
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
            "Common trial effects include nausea, insomnia, sweating, fatigue, somnolence and sexual dysfunction. Ask about baseline and emerging sexual concerns. Postmarketing reports include QT prolongation and torsades de pointes; spontaneous reports do not establish their frequency."
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
      "summary": "Reconcile prescription drugs, OTC products and supplements.",
      "takeaway": "MAOIs, serotonergic drugs and bleeding combinations need explicit review.",
      "blocks": [
        {
          "title": "Serotonergic and contraindicated combinations",
          "paragraphs": [
            "Review other SSRIs/SNRIs, triptans, tramadol, fentanyl, lithium, buspirone, amphetamines, tryptophan and St. John’s wort for serotonin toxicity. MAOIs, linezolid/IV methylene blue and pimozide require the restrictions above. Do not duplicate escitalopram with citalopram."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Hemostasis, metabolism and cardiac risk",
          "paragraphs": [
            "NSAIDs, aspirin, antiplatelet drugs and anticoagulants increase bleeding risk; monitor INR carefully when warfarin is used. Escitalopram can increase exposure to CYP2D6 substrates, exemplified by desipramine. Review QT-prolonging medicines and electrolyte-depleting drugs using the applicable local cardiac guidance."
          ],
          "sources": [
            "label",
            "qt"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Age and reproductive context alter monitoring.",
      "takeaway": "Balance treatment benefits with maternal illness and infant risks.",
      "blocks": [
        {
          "title": "Pregnancy",
          "paragraphs": [
            "Available human data have not established an increased risk of major birth defects or miscarriage. Late exposure can involve neonatal poor adaptation or persistent pulmonary hypertension; use near delivery is associated with postpartum bleeding risk. Discuss untreated illness, relapse and neonatal planning; avoid unsupervised abrupt cessation."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Breastfeeding",
          "paragraphs": [
            "Escitalopram and its metabolite enter milk. LactMed reports low exposure with maternal doses up to 20 mg/day and says a needed treatment is not itself a reason to stop breastfeeding. Monitor infant sedation, restlessness, feeding and weight gain, especially in young exclusively breastfed infants or with multiple psychotropics."
          ],
          "sources": [
            "label",
            "milk"
          ]
        },
        {
          "title": "Children and older adults",
          "paragraphs": [
            "Follow the diagnosis-specific age approval. Monitor height and weight in pediatric patients because appetite and weight changes can occur. Older patients have higher exposure and a greater risk of clinically important hyponatremia; the usual recommended dose is 10 mg daily."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Organ impairment",
          "paragraphs": [
            "Use the hepatic and renal dosing distinctions above. Recently infarcted or unstable cardiac patients were not systematically evaluated in the clinical program; review cardiovascular status and interacting drugs rather than assuming trial safety generalizes to every cardiac condition."
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
      "summary": "Serotonin reuptake inhibition with a roughly one-day half-life.",
      "takeaway": "Response and tolerability guide titration; peak concentration is not clinical onset.",
      "blocks": [
        {
          "title": "Mechanism",
          "paragraphs": [
            "Escitalopram is the S-enantiomer of citalopram. Its antidepressant activity is associated with potentiating central serotonergic signaling through inhibition of serotonin reuptake."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Disposition",
          "paragraphs": [
            "Peak concentrations follow an oral dose at about 5 hours; food does not materially alter absorption. Protein binding is about 56%. CYP2C19 and CYP3A4 contribute to hepatic metabolism. Terminal half-life is approximately 27–32 hours and steady state is reached in about a week."
          ],
          "sources": [
            "label"
          ],
          "facts": [
            [
              "Half-life",
              "About 27–32 hours"
            ],
            [
              "Steady state",
              "About 1 week"
            ]
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Follow symptoms, tolerability and safety after initiation and dose changes.",
      "takeaway": "Invite patients to report sexual effects, withdrawal symptoms and mood changes.",
      "blocks": [
        {
          "title": "Before and during therapy",
          "paragraphs": [
            "Confirm diagnosis, bipolar/mania history, suicidality, interacting drugs and relevant cardiac or electrolyte risk. Follow mood, function, activation, adverse effects and sexual health. Check sodium when symptoms or risk factors warrant it; pediatric growth requires follow-up."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Counseling",
          "paragraphs": [
            "Take consistently and follow a clinician-directed taper. Avoid driving until the individual response is known; concomitant alcohol use is not advised. Report new suicidality, severe agitation with fever, abnormal bleeding, eye pain or new visual symptoms, fainting, confusion or seizures promptly."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Overdose",
          "paragraphs": [
            "Overdose can produce delayed seizures, QRS/QT changes and arrhythmias. Urgent poison-center or emergency assessment is needed; cardiac monitoring may need to continue after an apparently mild early presentation."
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
      "summary": "Identify the product by label and imprint, with appropriate storage.",
      "takeaway": "Verify formulation availability and manufacturer rather than relying on appearance alone.",
      "blocks": [
        {
          "title": "Representative product",
          "paragraphs": [
            "Lexapro 10 mg tablets: white to off-white, round and scored, with F/L on the scored side and 10 on the other. Example bottle of 100: NDC 0456-2010-01. Generic appearance differs; verify the package and manufacturer."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Lexapro tablets contain 5 mg (unscored), 10 mg (scored) or 20 mg (scored). The labeled 1 mg/mL peppermint oral solution is not currently marketed. The DailyMed record lists Allergan as packager; label distribution text identifies AbbVie."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Store at 20–25°C, with permitted excursions to 15–30°C. Keep away from children. Verify the actual dispensed product label when using a generic or other formulation."
          ],
          "sources": [
            "label"
          ]
        }
      ]
    }
  ]
};
