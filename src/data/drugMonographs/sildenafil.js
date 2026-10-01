// Original clinical summaries checked against the product-specific public sources below.
export const sildenafil = {
  "slug": "sildenafil",
  "name": "Sildenafil",
  "synonym": "Viagra · Revatio",
  "description": "Prescription PDE5 inhibitor with distinct as-needed erectile-dysfunction and scheduled adult/pediatric pulmonary-arterial-hypertension products.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Never combine with nitrates or riociguat",
    "text": "Dangerous hypotension can occur with either indication. Seek urgent care for chest pain, sudden vision/hearing loss or an erection lasting more than 4 hours, and disclose the last dose.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Class",
      "PDE5 inhibitor"
    ],
    [
      "ED schedule",
      "25–100 mg as needed; at most once daily"
    ],
    [
      "PAH schedule",
      "Product- and age-specific oral/IV doses"
    ]
  ],
  "sources": [
    {
      "id": "ed",
      "title": "Viagra · Current full prescribing information",
      "publisher": "Viatris / DailyMed",
      "note": "Clinical revision November 2023; current public SPL6 effective November 17, 2023.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d905dc8d-917f-4ea3-a4ee-a1ecf6967d4e"
    },
    {
      "id": "pah",
      "title": "Revatio · Current full label and suspension instructions",
      "publisher": "Viatris / DailyMed",
      "note": "December 2024; current adult and pediatric WHO Group I PAH labeling.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3bb9363e-b28d-4019-8aae-539233dca214"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Sildenafil has separate erectile-dysfunction and pulmonary-arterial-hypertension products.",
      "takeaway": "Choose the indication, product and route before choosing a dose.",
      "blocks": [
        {
          "title": "Erectile dysfunction",
          "paragraphs": [
            "Viagra is a prescription oral treatment for erectile dysfunction in men. Sexual stimulation is required; it is not an aphrodisiac or STI prevention. The selected label does not establish efficacy in women or children."
          ],
          "sources": [
            "ed"
          ]
        },
        {
          "title": "Pulmonary arterial hypertension",
          "paragraphs": [
            "Revatio is labeled for adult WHO Group I PAH to improve exercise ability and delay clinical worsening. For ages 1–17, it improves exercise ability or pulmonary hemodynamics thought to underlie exercise improvement in children too young for standardized exercise testing. This is not an approval for every pulmonary-hypertension group; safety/effectiveness in PH secondary to sickle-cell disease are not established."
          ],
          "sources": [
            "pah"
          ]
        },
        {
          "title": "Scope and prescription status",
          "paragraphs": [
            "Both selected products are prescription sildenafil citrate with strength expressed as sildenafil. ED tablets, PAH suspension and IV treatment have different schedules. This review covers these U.S. Viagra/Revatio labels; other manufacturers, preparations and off-label uses require their own verified instructions."
          ],
          "sources": [
            "ed",
            "pah"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "ED is taken as needed; PAH is scheduled and specialist-directed.",
      "takeaway": "Never add an ED sildenafil dose to an existing PAH regimen.",
      "blocks": [
        {
          "title": "Viagra as-needed oral dosing",
          "paragraphs": [
            "Usual dose is 50 mg about 1 hour before sexual activity; the allowed timing window is 30 minutes to 4 hours beforehand. Adjust to 25 or 100 mg according to response/tolerance, maximum 100 mg per dose and no more than once daily. It may be taken with or without food; a high-fat meal delays absorption. Consider 25 mg initially in older adults, hepatic impairment, severe renal impairment or relevant CYP3A interactions."
          ],
          "sources": [
            "ed"
          ],
          "table": {
            "headers": [
              "ED situation",
              "Selected label instruction"
            ],
            "rows": [
              [
                "Usual adult use",
                "50 mg as needed; adjust 25–100 mg; at most once daily"
              ],
              [
                "Stable alpha-blocker therapy",
                "Initiate 25 mg; assess additive hypotension"
              ],
              [
                "Ritonavir treatment",
                "25 mg maximum within 48 hours"
              ],
              [
                "Strong CYP3A4 inhibitor or erythromycin",
                "Consider starting 25 mg"
              ]
            ]
          }
        },
        {
          "title": "Revatio adult oral and IV doses",
          "paragraphs": [
            "Adult oral starting/recommended dose is 20 mg three times daily; current labeling permits titration up to 80 mg three times daily when required by symptoms and tolerance. The adult IV dose is 10 mg as a bolus three times daily, without weight adjustment. The label predicts that 10 mg IV provides an effect comparable to 20 mg oral; this does not establish a universal conversion for every oral dose or pediatric IV dosing."
          ],
          "sources": [
            "pah"
          ]
        },
        {
          "title": "Revatio pediatric oral dosing",
          "paragraphs": [
            "Current pediatric approval is age 1–17; below 1 year safety/effectiveness are not established. The label lists 10 mg three times daily for weight ≤ 20 kg and 20 mg three times daily for 20–45 kg. These bands overlap at exactly 20 kg: confirm that boundary with the PAH prescriber/pharmacist rather than infer a universal dose. At 45 kg and above, the recommended dose is 20 mg three times daily; titration to 40 mg three times daily is stated only for weight > 45 kg if clinically required. Do not apply the adult 80 mg dose ceiling to children."
          ],
          "sources": [
            "pah"
          ],
          "table": {
            "headers": [
              "Pediatric weight",
              "Oral instruction and boundary"
            ],
            "rows": [
              [
                "Below 20 kg",
                "10 mg three times daily"
              ],
              [
                "Exactly 20 kg",
                "Label bands overlap; obtain a confirmed prescription"
              ],
              [
                "Above 20 through 45 kg",
                "20 mg three times daily"
              ],
              [
                "Above 45 kg",
                "20 mg three times daily; may titrate to 40 mg three times daily under specialist care"
              ]
            ]
          }
        },
        {
          "title": "Suspension preparation and measurement",
          "paragraphs": [
            "Revatio reconstitutes to 10 mg/mL: 10 mg = 1 mL; 20 mg = 2 mL. The pharmacist adds 60 mL water, shakes at least 30 seconds, then adds 30 mL and shakes again; 90 mL total water produces 112 mL final suspension. Do not add other medicines/flavorings. Shake the finished bottle 10 seconds before each dose and use the supplied oral syringe; doses above 2 mL require divided syringe fills exactly as instructed. Follow the prescribed three-times-daily schedule."
          ],
          "sources": [
            "pah"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Vasodilation, rare sensory events and prolonged erections require clear action plans.",
      "takeaway": "Nitrates and riociguat are contraindicated with either indication.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Assess cardiovascular status and blood pressure before ED treatment; sexual activity may be inadvisable in some cardiovascular disease. ED trial evidence is lacking after recent MI/stroke/life-threatening arrhythmia, with marked resting hypotension or hypertension, and with unstable angina. PAH therapy also requires caution with low BP, fluid depletion, outflow obstruction or impaired autonomic regulation.",
            "Seek immediate care for an erection lasting more than 4 hours, sudden vision loss or sudden hearing decrease/loss; ED labeling instructs stopping treatment for sudden sensory loss. Review prior NAION, retinal disease and priapism predisposition. Revatio is not recommended in retinitis pigmentosa or pulmonary veno-occlusive disease; new pulmonary edema warrants evaluation for PVOD. Bleeding-disorder/active-ulcer safety is uncertain; nosebleeds are more frequent in some PAH patients using vitamin K antagonists."
          ],
          "sources": [
            "ed",
            "pah"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "Do not combine with organic nitrates/nitrites, including intermittent nitroglycerin and recreational nitrite products, or with riociguat. Known sildenafil/product-component hypersensitivity is a contraindication. Viagra does not establish a time after sildenafil at which nitrate use becomes safe, including at 24 hours; urgent chest-pain care must be told the time of the last dose."
          ],
          "sources": [
            "ed",
            "pah"
          ]
        },
        {
          "title": "Boxed-warning status and pediatric context",
          "paragraphs": [
            "The selected current Viagra and Revatio labels do not contain a boxed warning. Older pediatric PAH trial follow-up showed a mortality imbalance across dose groups; current Revatio labeling discusses subsequent adult evidence, considers a causal association unlikely, and approves ages 1–17 with the specified weight schedules. This does not justify unsupervised escalation or reuse of historical pediatric regimens."
          ],
          "sources": [
            "ed",
            "pah"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Common ED reactions include headache, flushing, dyspepsia, nasal congestion, transient visual changes, back pain, myalgia, nausea and dizziness. PAH trials also report headache, flushing, dyspepsia, limb/back/muscle pain and diarrhea; edema is more frequent with epoprostenol co-treatment. Rare postmarketing sensory, cardiovascular and hypersensitivity reports do not establish a precise incidence or causality for every event."
          ],
          "sources": [
            "ed",
            "pah"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "The same interacting drug can trigger different ED and PAH instructions.",
      "takeaway": "Check the actual indication before applying a CYP3A dose rule.",
      "blocks": [
        {
          "title": "Nitrates, riociguat and duplicate PDE5 treatment",
          "paragraphs": [
            "Nitrates/nitrites and riociguat are prohibited combinations because of hypotension. Do not combine Viagra with Revatio or another PDE5 inhibitor; safety/effectiveness of such combinations are not established and BP may fall further. Review prescription, OTC and recreational substances explicitly."
          ],
          "sources": [
            "ed",
            "pah"
          ]
        },
        {
          "title": "CYP3A inhibitors",
          "paragraphs": [
            "For ED with ritonavir, the maximum is 25 mg within 48 hours; other strong CYP3A4 inhibitors or erythromycin warrant considering 25 mg initially. For PAH, strong CYP3A inhibitors are not recommended with Revatio. The ED reduction is not an automatically acceptable PAH workaround."
          ],
          "sources": [
            "ed",
            "pah"
          ]
        },
        {
          "title": "Inducers and BP-lowering drugs",
          "paragraphs": [
            "Moderate/strong CYP3A inducers such as bosentan lower Revatio exposure; specialist up-titration may be needed when starting them. Its label directs reducing Revatio to 20 mg three times daily when an inducer is stopped. Alpha-blockers/other antihypertensives add hypotension risk: for ED, establish alpha-blocker stability before starting 25 mg; for PAH, monitor BP with BP-lowering co-therapy."
          ],
          "sources": [
            "ed",
            "pah"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Renal and hepatic guidance differs between ED and PAH labels.",
      "takeaway": "Do not transfer an ED starting-dose reduction to the PAH schedule.",
      "blocks": [
        {
          "title": "Renal and hepatic impairment",
          "paragraphs": [
            "Viagra needs no adjustment for mild/moderate renal impairment; consider 25 mg initially at CrCl < 30 mL/min. Consider 25 mg in hepatic impairment; severe Child-Pugh C disease is unstudied. Revatio specifies no renal adjustment, including CrCl < 30, and no adjustment for mild/moderate hepatic impairment; severe hepatic impairment is unstudied. These statements do not establish a safe unsupervised regimen in unstable organ disease."
          ],
          "sources": [
            "ed",
            "pah"
          ]
        },
        {
          "title": "Older adults and children",
          "paragraphs": [
            "Higher sildenafil exposure supports considering a 25 mg Viagra start in older adults. Revatio geriatric trials include too few older participants to establish every age-related difference; choose treatment cautiously with comorbidities. Viagra is not indicated in children; Revatio pediatric PAH use begins at 1 year and requires its own weight-based oral instructions."
          ],
          "sources": [
            "ed",
            "pah"
          ]
        },
        {
          "title": "Pregnancy and breastfeeding",
          "paragraphs": [
            "Viagra is not indicated in females. Revatio pregnancy evidence is limited and does not show a clear association with major adverse outcomes, while untreated PAH carries serious maternal/fetal risks; multidisciplinary specialist decisions are essential. Sildenafil and its active metabolite have been reported in human milk, but infant-effect and milk-production information is insufficient. Neither selected label establishes a universally safe lactation dose."
          ],
          "sources": [
            "ed",
            "pah"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "PDE5 inhibition preserves cGMP-mediated smooth-muscle relaxation.",
      "takeaway": "ED requires sexual stimulation; PAH benefit is evaluated under a scheduled regimen.",
      "blocks": [
        {
          "title": "Mechanism and pharmacodynamics",
          "paragraphs": [
            "In erectile tissue, sildenafil increases the effect of nitric oxide on cGMP and facilitates relaxation during sexual stimulation. In pulmonary vascular smooth muscle it inhibits cGMP breakdown, producing pulmonary and some systemic vasodilation. Inhibition of retinal PDE6 at higher exposure helps explain transient color-vision effects; this is distinct from rare reported NAION."
          ],
          "sources": [
            "ed",
            "pah"
          ]
        },
        {
          "title": "Absorption, metabolism and elimination",
          "paragraphs": [
            "Oral bioavailability averages 41%; fasted peak levels occur within 30–120 minutes, median 60. A high-fat meal delays peak by about 1 hour. Sildenafil/metabolite are about 96% protein-bound. CYP3A4 is the main metabolic route, CYP2C9 contributes, and the N-desmethyl metabolite remains active. Parent/metabolite terminal half-lives are about 4 hours; metabolite excretion is predominantly fecal, with lesser urinary elimination."
          ],
          "sources": [
            "ed",
            "pah"
          ]
        },
        {
          "title": "Route and outcome limits",
          "paragraphs": [
            "Revatio 20 mg tablets and 10 mg/mL suspension were bioequivalent for a studied 20 mg oral dose. The injection equivalence is specifically 10 mg IV versus 20 mg oral effect. Adult PAH clinical-worsening evidence supports its current permitted oral titration, but ED timing or an oral half-life does not establish a nitrate-safe interval or interchangeability with another PDE5 inhibitor."
          ],
          "sources": [
            "pah",
            "ed"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Review vascular risks, interactions and administration before prescribing.",
      "takeaway": "Give patients an emergency plan that includes the last sildenafil dose.",
      "blocks": [
        {
          "title": "Monitoring and reassessment",
          "paragraphs": [
            "For ED, assess underlying causes, cardiovascular fitness for sexual activity, BP and interacting drugs; reassess response/tolerance before increasing. For PAH, follow symptoms/exercise or appropriate pediatric hemodynamic status, BP and adverse effects, and reassess after inducer changes. New pulmonary edema, bleeding or sensory symptoms need focused evaluation; the labels do not specify one universal routine lab panel."
          ],
          "sources": [
            "ed",
            "pah"
          ]
        },
        {
          "title": "Counseling and emergencies",
          "paragraphs": [
            "Do not self-treat chest pain with nitrates after sildenafil; obtain urgent care and disclose the last dose. Stop sexual activity and seek assessment for chest pain, dizziness or nausea during it. Seek urgent care for erection > 4 hours or sudden vision/hearing loss. Do not share medication, double PDE5 products or assume STI protection."
          ],
          "sources": [
            "ed",
            "pah"
          ]
        },
        {
          "title": "Scheduled doses and suspension use",
          "paragraphs": [
            "Take Revatio regularly three times daily as prescribed; ask the PAH team or pharmacist for a missed-dose plan rather than improvise extra doses. Shake suspension 10 seconds, measure only with the supplied syringe, and request instruction for doses requiring more than one fill. Ask the PAH team before interrupting or changing treatment."
          ],
          "sources": [
            "pah"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Appearance and concentration are selected-product identifiers, not universal generic rules.",
      "takeaway": "Check strength as sildenafil and the actual route on the dispensed package.",
      "blocks": [
        {
          "title": "Representative product identity",
          "paragraphs": [
            "Viagra 50 mg is a blue rounded-diamond film-coated tablet marked VGR 50 / VIAGRA; the 30-tablet bottle is NDC 58151-427-93. Revatio 20 mg is white/off-white and round, marked RVT 20 / VLE; 90 tablets are NDC 58151-402-77. Both are distributed by Viatris Specialty. Generic appearances and package codes vary."
          ],
          "sources": [
            "ed",
            "pah"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Viagra oral tablets contain 25, 50 or 100 mg sildenafil as citrate. Revatio supplies 20 mg oral tablets, powder reconstituted to 10 mg/mL oral suspension, and a 10 mg/12.5 mL (0.8 mg/mL) single-dose IV vial. The volume/concentration and scheduled indication must be checked independently; the oral suspension is not injectable."
          ],
          "sources": [
            "ed",
            "pah"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Viagra is stored at 25°C, with 15–30°C excursions. Revatio tablets/injection are stored at 20–25°C, with 15–30°C excursions; discard unused IV contents. Keep unreconstituted suspension powder below 30°C in its original moisture-protective package. Reconstituted suspension may be refrigerated 2–8°C or kept below 30°C; do not freeze and discard 60 days after reconstitution."
          ],
          "sources": [
            "ed",
            "pah"
          ]
        }
      ]
    }
  ]
};
