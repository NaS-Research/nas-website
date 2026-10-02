// Original clinical summaries checked against the product-specific public sources below.
export const paroxetine = {
  "slug": "paroxetine",
  "name": "Paroxetine",
  "synonym": "Paxil · Paxil CR · Brisdelle",
  "description": "SSRI with product-specific psychiatric and menopausal vasomotor indications.",
  "checked": "2026-10-02",
  "essential": {
    "title": "Monitor mood and serotonin toxicity",
    "text": "Watch for suicidal thoughts, serotonin syndrome, bleeding and low sodium. Review interacting drugs, pregnancy plans and the exact formulation; do not abruptly stop psychiatric treatment.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Drug class",
      "SSRI"
    ],
    [
      "Reviewed forms",
      "IR · CR · VMS capsule"
    ],
    [
      "Pediatric status",
      "Not approved"
    ]
  ],
  "sources": [
    {
      "id": "ir",
      "title": "Paxil · Current full prescribing information",
      "publisher": "Apotex / DailyMed",
      "note": "Full prescribing information and Medication Guide revised September 2026; current SPL version 13, effective September 29, 2026. Updated IR GAD starting dose, SAD/GAD titration and QT-related contraindications; CR and Brisdelle remain separate products.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ef3b5cbe-f9e1-c1ac-79da-cfe14e3a7e7e"
    },
    {
      "id": "cr",
      "title": "Paxil CR · Current full prescribing information",
      "publisher": "Apotex / DailyMed",
      "note": "Current SPL33 effective September 16, 2026; formulation-specific dose and indication tables.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=483bd97f-c4d0-4e23-aaa8-6334f4471e0c"
    },
    {
      "id": "vms",
      "title": "Brisdelle · Current full prescribing information",
      "publisher": "Legacy Pharma / DailyMed",
      "note": "Medication Guide revised February 2025; SPL2 effective April 28, 2025.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=502311b3-b617-4cbd-a3ab-a60f2c62880a"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Paroxetine’s approved uses depend on the release form and product.",
      "takeaway": "The menopause capsule is not a psychiatric-treatment substitute.",
      "blocks": [
        {
          "title": "Immediate-release psychiatric uses",
          "paragraphs": [
            "Paxil IR is indicated in adults for major depressive disorder (MDD), obsessive-compulsive disorder (OCD), panic disorder (PD), social anxiety disorder (SAD), generalized anxiety disorder (GAD) and posttraumatic stress disorder (PTSD). Pediatric approval is not established."
          ],
          "sources": [
            "ir"
          ]
        },
        {
          "title": "Controlled-release uses",
          "paragraphs": [
            "Paxil CR is approved in adults for MDD, PD, SAD and premenstrual dysphoric disorder (PMDD). Its label does not add IR’s OCD, GAD or PTSD indications."
          ],
          "sources": [
            "cr"
          ]
        },
        {
          "title": "Menopause-specific product and scope",
          "paragraphs": [
            "Brisdelle treats moderate to severe vasomotor symptoms associated with menopause. It is not indicated for psychiatric conditions; a patient needing psychiatric paroxetine treatment needs an appropriately indicated product instead, not simultaneous duplicate paroxetine. Other generics/salts require their own current formulation label."
          ],
          "sources": [
            "vms",
            "ir"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Use the indication-specific formulation table and lower-dose organ/age rules.",
      "takeaway": "IR and CR milligram doses should not be exchanged without a prescribed conversion.",
      "blocks": [
        {
          "title": "Paxil IR adult dosing",
          "paragraphs": [
            "Take once daily in the morning, with or without food. For MDD, OCD, PD and PTSD, increase by 10 mg/day at weekly intervals if response is inadequate and treatment is tolerated, up to the indication-specific maximum. For SAD, start 20 mg once daily; after 1–2 weeks, the prescriber may increase by 10 mg/day at weekly intervals up to 60 mg/day. For GAD, start 10 mg once daily and increase to 20 mg once daily after one week; subsequent increases of 10 mg/day at weekly intervals may reach 50 mg/day according to response and tolerability. The SAD/GAD trials did not establish additional benefit above 20 mg/day; the maximum is not an automatic treatment target. The lower geriatric/severe-organ-impairment limits below still apply."
          ],
          "sources": [
            "ir"
          ],
          "table": {
            "headers": [
              "Adult indication",
              "Starting daily dose",
              "Labeled maximum / dose context"
            ],
            "rows": [
              [
                "MDD",
                "20 mg",
                "50 mg"
              ],
              [
                "OCD",
                "20 mg",
                "60 mg"
              ],
              [
                "PD",
                "10 mg",
                "60 mg"
              ],
              [
                "PTSD",
                "20 mg",
                "50 mg"
              ],
              [
                "SAD",
                "20 mg",
                "60 mg; no established additional benefit above 20 mg/day"
              ],
              [
                "GAD",
                "10 mg; 20 mg after one week",
                "50 mg; no established additional benefit above 20 mg/day"
              ]
            ]
          }
        },
        {
          "title": "Paxil CR adult dosing",
          "paragraphs": [
            "Take once daily in the morning with or without food; swallow whole without chewing or crushing. Increase by 12.5 mg/day at intervals of at least 1 week if needed/tolerated. PMDD may be treated continuously or during the luteal phase, starting 14 days before anticipated menstruation and continuing through onset of menses, repeated each cycle."
          ],
          "sources": [
            "cr"
          ],
          "table": {
            "headers": [
              "Adult indication",
              "Starting daily dose",
              "Maximum daily dose"
            ],
            "rows": [
              [
                "MDD",
                "25 mg",
                "62.5 mg"
              ],
              [
                "PD",
                "12.5 mg",
                "75 mg"
              ],
              [
                "SAD",
                "12.5 mg",
                "37.5 mg"
              ],
              [
                "PMDD",
                "12.5 mg",
                "25 mg"
              ]
            ]
          }
        },
        {
          "title": "Older age and severe organ impairment",
          "paragraphs": [
            "For elderly patients or severe renal/hepatic impairment, start IR at 10 mg/day and do not exceed 40 mg/day. For CR, start 12.5 mg/day, lengthen titration intervals if needed, and do not exceed 50 mg/day for MDD/PD or 37.5 mg/day for SAD. The ordinary PMDD maximum remains 25 mg/day; no higher organ-impairment PMDD maximum is inferred. Exposure increases with organ impairment."
          ],
          "sources": [
            "ir",
            "cr"
          ]
        },
        {
          "title": "Brisdelle dosing",
          "paragraphs": [
            "For menopause-related VMS, take 7.5 mg orally once daily at bedtime, with or without food. Its label keeps this same dose in older patients and in renal/hepatic impairment despite increased exposure. Do not raise it to psychiatric doses or apply the IR/CR adjustment tables to this capsule."
          ],
          "sources": [
            "vms"
          ]
        },
        {
          "title": "MAOI separation and discontinuation",
          "paragraphs": [
            "Allow at least 14 days between stopping an MAOI antidepressant and starting paroxetine, and at least 14 days after paroxetine before starting an MAOI. Linezolid or IV methylene blue exposure requires clinician management. Gradually reduce Paxil IR/CR rather than stopping abruptly whenever possible; tapering is individualized, not a single mandatory schedule. Discuss any Brisdelle stop or product switch with the prescriber."
          ],
          "sources": [
            "ir",
            "cr",
            "vms"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Mood changes, serotonin toxicity, bleeding and hyponatremia require surveillance.",
      "takeaway": "A low menopause dose does not remove paroxetine’s important safety warnings.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Assess bipolar/mania history before treatment and monitor worsening mood or suicidal behavior, especially initially and after dose changes. Serotonin syndrome may present with agitation/confusion, fever, sweating, unstable pulse/pressure, tremor, rigidity or diarrhea; stop implicated treatment and obtain urgent evaluation if suspected.",
            "Monitor abnormal bleeding, symptomatic low sodium, mania and seizures. Older age, diuretics and volume depletion increase hyponatremia risk. Severe confusion, fainting or seizures needs urgent care. Untreated narrow anterior chamber angles can predispose to acute angle closure; painful red eye/vision change warrants immediate assessment.",
            "Discuss sexual dysfunction and fracture-risk context; an observed association does not establish paroxetine as the sole cause of a fracture. Abrupt psychiatric-product cessation can cause dizziness, electric-shock sensations, anxiety, insomnia and other withdrawal symptoms. Pregnancy planning and tamoxifen use require an active treatment review."
          ],
          "sources": [
            "ir",
            "cr",
            "vms"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "The reviewed products contraindicate MAOI use or use within 14 days of stopping an MAOI and known paroxetine/excipient hypersensitivity. The current Paxil IR label additionally contraindicates concomitant drugs that prolong the QTc interval and are CYP2D6 substrates; this includes the thioridazine/pimozide restrictions retained in the CR and Brisdelle labels. Check the exact companion drug before combining treatment. Brisdelle additionally contraindicates pregnancy. Pregnancy is a significant risk consideration for IR/CR but is not listed as their formal contraindication."
          ],
          "sources": [
            "ir",
            "cr",
            "vms"
          ]
        },
        {
          "title": "Boxed warning: suicidal thoughts and behaviors",
          "paragraphs": [
            "The reviewed labels carry a boxed warning about increased suicidal thoughts/behaviors with antidepressants in pediatric and young adult patients and the need for close monitoring. IR/CR are not pediatric-approved; Brisdelle is not psychiatric- or pediatric-approved and still requires monitoring for emergent suicidality in its treated menopause population."
          ],
          "sources": [
            "ir",
            "cr",
            "vms"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Psychiatric formulations commonly cause nausea, somnolence or insomnia, sweating, dry mouth, GI disturbance and sexual adverse effects. Brisdelle’s common trial reactions include headache, fatigue and nausea/vomiting. Serious events include serotonin syndrome, severe allergy, bleeding, hyponatremia, mania, seizures and angle closure; event rates from separate trials cannot be compared directly."
          ],
          "sources": [
            "ir",
            "cr",
            "vms"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "CYP2D6 inhibition, serotonergic combinations and bleeding-risk drugs are clinically important.",
      "takeaway": "Tamoxifen efficacy can be affected even by menopause-specific paroxetine.",
      "blocks": [
        {
          "title": "CYP2D6 and QT-related combinations",
          "paragraphs": [
            "Paroxetine strongly inhibits CYP2D6 and can increase substrate exposure, including metoprolol, atomoxetine, flecainide and some antipsychotics/TCAs. Monitor and adjust an otherwise permissible companion drug when starting or stopping paroxetine. Current Paxil IR contraindicates CYP2D6 substrates that prolong the QTc interval because increased exposure can cause serious arrhythmias, including torsade de pointes and sudden death. The CR and Brisdelle labels specifically contraindicate thioridazine and pimozide. Dose adjustment does not make a contraindicated combination acceptable; reconcile the exact formulation and companion label with the pharmacist."
          ],
          "sources": [
            "ir",
            "cr",
            "vms"
          ]
        },
        {
          "title": "Tamoxifen",
          "paragraphs": [
            "CYP2D6 inhibition may lower active endoxifen exposure and impair tamoxifen effectiveness. IR/CR labels advise considering an alternative antidepressant with little/no CYP2D6 inhibition. For Brisdelle, weigh VMS benefit against possible reduced tamoxifen effectiveness; do not assume 7.5 mg eliminates the interaction."
          ],
          "sources": [
            "ir",
            "cr",
            "vms"
          ]
        },
        {
          "title": "Serotonergic agents and hemostasis",
          "paragraphs": [
            "Other SSRIs/SNRIs, triptans, tramadol/fentanyl and other relevant opioids, lithium, buspirone, amphetamines and St. John’s wort increase serotonin-syndrome risk. NSAIDs, aspirin, antiplatelet drugs and anticoagulants add bleeding risk; monitor INR carefully with warfarin. Avoid duplicate paroxetine products."
          ],
          "sources": [
            "ir",
            "cr",
            "vms"
          ]
        },
        {
          "title": "Other exposure changes",
          "paragraphs": [
            "Review cimetidine, enzyme-modifying anticonvulsants and HIV medicines against the exact product label. Fosamprenavir/ritonavir can reduce paroxetine exposure; any IR/CR adjustment must follow response/tolerability. Monitor theophylline concentrations when combined. Brisdelle also describes digoxin interactions; do not transplant study doses from higher-dose paroxetine into a VMS regimen."
          ],
          "sources": [
            "ir",
            "cr",
            "vms"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Consider fetal/neonatal risk together with the risk of untreated psychiatric illness.",
      "takeaway": "Brisdelle’s pregnancy contraindication differs from IR/CR benefit-risk decisions.",
      "blocks": [
        {
          "title": "Pregnancy",
          "paragraphs": [
            "IR/CR labels report an association with cardiovascular malformations after first-trimester exposure, neonatal adaptation/PPHN risks and postpartum bleeding. For planned pregnancy/first trimester, consider available alternatives before initiation. Changing established psychiatric treatment requires individualized assessment of relapse risk. Brisdelle is contraindicated during pregnancy and should be reviewed immediately if pregnancy occurs."
          ],
          "sources": [
            "ir",
            "cr",
            "vms"
          ]
        },
        {
          "title": "Breastfeeding and reproductive considerations",
          "paragraphs": [
            "Current IR/CR labels describe paroxetine in milk and require monitoring infant irritability/agitation, feeding and weight gain while weighing maternal need and breastfeeding benefits. They do not establish universal infant safety. The retained Brisdelle SPL does not provide a substantive lactation section; do not infer a product-specific recommendation from its lower dose. Paroxetine may affect sperm quality; reversibility is uncertain."
          ],
          "sources": [
            "ir",
            "cr",
            "vms"
          ]
        },
        {
          "title": "Children, older adults and organ disease",
          "paragraphs": [
            "Pediatric safety/effectiveness are not established for these products. Older patients have increased exposure and sodium/fall vulnerability. Severe renal/hepatic impairment requires the IR/CR modifications; Brisdelle retains its fixed 7.5 mg dose. Organ-disease monitoring remains necessary despite the absence of a Brisdelle dose reduction."
          ],
          "sources": [
            "ir",
            "cr",
            "vms"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Paroxetine is an SSRI with nonlinear exposure and clinically important CYP2D6 inhibition.",
      "takeaway": "CR controls absorption rate; it does not eliminate withdrawal or interaction risk.",
      "blocks": [
        {
          "title": "Mechanism",
          "paragraphs": [
            "Psychiatric benefit is thought to relate to inhibition of neuronal serotonin reuptake; the exact therapeutic mechanism is not established. Brisdelle is not estrogen, and its mechanism for menopausal VMS is unknown."
          ],
          "sources": [
            "ir",
            "cr",
            "vms"
          ]
        },
        {
          "title": "Absorption and disposition",
          "paragraphs": [
            "IR’s reported mean elimination half-life is about 21 hours after repeated 30 mg/day dosing; CR single-dose half-life is about 15–20 hours, with peak levels typically 6–10 hours after dosing. CR’s matrix/enteric coating delays and controls release. These study values are not exact durations of clinical benefit for every patient."
          ],
          "sources": [
            "ir",
            "cr"
          ]
        },
        {
          "title": "Metabolism and accumulation",
          "paragraphs": [
            "Extensive metabolism partly through saturable CYP2D6 produces nonlinear accumulation; metabolites are much less active and eliminated mainly in urine, with additional fecal elimination. Brisdelle studies reached steady state around 12 days in most participants, with substantial variability. Renal/hepatic impairment can increase exposure despite mainly metabolic clearance."
          ],
          "sources": [
            "ir",
            "cr",
            "vms"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Monitor response, mood, tolerability and medication changes over time.",
      "takeaway": "Report dangerous symptoms promptly and use a prescriber-directed stop/switch plan.",
      "blocks": [
        {
          "title": "Before starting and during follow-up",
          "paragraphs": [
            "Confirm indication and formulation, bipolar/mania history, suicidality, pregnancy plans, organ function, sodium risk and all medicines/supplements. Follow psychiatric or VMS benefit, sexual function, sleep, GI tolerance and bleeding. Check sodium when clinical risk or symptoms warrant, and INR/theophylline or interacting-drug response when applicable."
          ],
          "sources": [
            "ir",
            "cr",
            "vms"
          ]
        },
        {
          "title": "Patient and caregiver counseling",
          "paragraphs": [
            "Read the product Medication Guide. Seek urgent care for suicidal intent, severe serotonin-toxicity symptoms, seizure, serious allergy or painful eye/vision change. Report unusual bruising, confusion, unsteadiness and sexual effects. Avoid driving until effects are known; discuss alcohol and sedating agents. Never double up paroxetine products or stop a psychiatric formulation abruptly."
          ],
          "sources": [
            "ir",
            "cr",
            "vms"
          ]
        },
        {
          "title": "Formulation-specific handling",
          "paragraphs": [
            "CR must remain intact. The Paxil label describes a 10 mg/5 mL suspension but explicitly states it is not currently marketed; a dispensed generic liquid needs its own concentration and dosing device verified. Brisdelle is taken at bedtime and is not a replacement for a psychiatric dose."
          ],
          "sources": [
            "ir",
            "cr",
            "vms"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Verify the named product, release form and expressed paroxetine dose.",
      "takeaway": "The same ingredient name does not establish interchangeable doses or indications.",
      "blocks": [
        {
          "title": "Representative product identity",
          "paragraphs": [
            "Current Paxil 20 mg is a pink scored tablet marked PAXIL/20 (30-count NDC 60505-4518-3). Current Paxil CR 12.5 mg is yellow, round and marked 12.5 (NDC 60505-4377-3). Brisdelle 7.5 mg is a pink capsule marked BRISDELLE/7.5 mg, NDC 83107-027-30, manufactured for Legacy Pharma. Confirm the actual package before dispensing."
          ],
          "sources": [
            "ir",
            "cr",
            "vms"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Reviewed oral forms: Paxil IR 10, 20, 30 and 40 mg tablets; Paxil CR 12.5, 25 and 37.5 mg extended-release tablets; Brisdelle 7.5 mg capsules. Paxil/CR use hydrochloride, Brisdelle mesylate; doses are expressed as paroxetine. Current Paxil IR sections 3 and 11 identify conventional tablets; the earlier version’s incorrect extended-release description is not retained as a current-label finding. No availability or dosing claim is made for unreviewed Pexeva or generic liquids."
          ],
          "sources": [
            "ir",
            "cr",
            "vms"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Paxil tablets: 15–30°C in a tight light-resistant container. Current Paxil CR PI uses controlled room-temperature 20–25°C with 15–30°C excursions; its printed Fahrenheit excursion endpoint contains an apparent typo, so use the source’s Celsius values. Brisdelle: 20–25°C with permitted 15–30°C excursions; protect from light/humidity. Keep out of children’s reach."
          ],
          "sources": [
            "ir",
            "cr",
            "vms"
          ]
        }
      ]
    }
  ]
};
