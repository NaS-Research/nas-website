// Original clinical summaries checked against the product-specific public sources below.
export const pioglitazone = {
  "slug": "pioglitazone",
  "name": "Pioglitazone",
  "synonym": "Actos",
  "description": "Oral thiazolidinedione insulin sensitizer for adult type 2 diabetes, with a boxed heart-failure warning and dose-limiting CYP2C8 interactions.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Watch for fluid retention and heart failure",
    "text": "Report rapid weight gain, edema or shortness of breath immediately. Do not initiate in established NYHA III/IV heart failure; strong CYP2C8 inhibitors reduce the maximum dose to 15 mg/day.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Class",
      "Thiazolidinedione / PPAR-gamma agonist"
    ],
    [
      "Adult dose ceiling",
      "45 mg/day; 15 mg with strong CYP2C8 inhibitor"
    ],
    [
      "Boxed risk",
      "Congestive heart failure"
    ]
  ],
  "sources": [
    {
      "id": "pi",
      "title": "Actos · Current full prescribing information",
      "publisher": "Takeda / DailyMed",
      "note": "Clinical/Medication Guide revision March 2025; current SPL20 effective March 28, 2025.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d2ddc491-88a9-4063-9150-443b4fa4330c"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Pioglitazone improves insulin sensitivity in adults with type 2 diabetes.",
      "takeaway": "The current Actos indication is glucose control, not acute insulin replacement.",
      "blocks": [
        {
          "title": "Approved type 2 diabetes use",
          "paragraphs": [
            "Actos is an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes, alone or in appropriate combinations. It depends on insulin being present and is not an insulin secretagogue. The indication does not extend to type 1 diabetes or diabetic ketoacidosis."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Treatment-selection boundaries",
          "paragraphs": [
            "Consider expected glycemic benefit against heart-failure/fluid-retention, fracture, bladder-cancer and hepatic risks. It is not recommended with symptomatic heart failure and cannot be initiated in established NYHA class III/IV heart failure. The reviewed label does not establish a cardiovascular-event-prevention, heart-failure, obesity or steatohepatitis indication; no off-label liver-disease protocol is supplied."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Combination products",
          "paragraphs": [
            "The review covers single-ingredient Actos tablets and its labeled coadministration considerations. Fixed-dose pioglitazone/metformin, pioglitazone/glimepiride and other combinations have separate dosing, contraindication and organ-impairment rules; they should not inherit this single-ingredient profile unchanged."
          ],
          "sources": [
            "pi"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Dose once daily and titrate against glycemic response and fluid tolerance.",
      "takeaway": "Gemfibrozil imposes a lower ceiling than the usual adult maximum.",
      "blocks": [
        {
          "title": "Adult initiation and titration",
          "paragraphs": [
            "Without heart failure, start 15 or 30 mg orally once daily, with or without meals. Increase in 15 mg increments according to HbA1c response, maximum 45 mg once daily. No fixed titration interval is specified in the current label; monitor glucose response and tolerability rather than inventing a weekly escalation."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Heart-failure limits",
          "paragraphs": [
            "If treatment is appropriate in NYHA class I/II heart failure, the starting dose is 15 mg once daily. This does not override the recommendation against symptomatic heart failure or the contraindication to initiation in established class III/IV. Check weight, edema and breathing symptoms after starting and every increase."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Interaction and hypoglycemia adjustments",
          "paragraphs": [
            "With gemfibrozil or another strong CYP2C8 inhibitor, maximum Actos dose is 15 mg/day. If hypoglycemia occurs with a sulfonylurea/other secretagogue, reduce that agent; if it occurs with insulin, the label recommends decreasing insulin by 10–25%, with further clinician adjustment by response. These are conditional combination-treatment steps, not instructions to reduce insulin automatically on initiation."
          ],
          "sources": [
            "pi"
          ],
          "table": {
            "headers": [
              "Situation",
              "Product-label approach"
            ],
            "rows": [
              [
                "Usual adult without HF",
                "Start 15 or 30 mg once daily; maximum 45 mg/day"
              ],
              [
                "Selected NYHA I/II treatment",
                "Start 15 mg/day; symptomatic HF still not recommended"
              ],
              [
                "Strong CYP2C8 inhibitor",
                "Pioglitazone maximum 15 mg/day"
              ],
              [
                "Hypoglycemia with insulin",
                "Clinician-directed insulin decrease 10–25%; individualize further"
              ]
            ]
          }
        },
        {
          "title": "Renal, hepatic and missed-dose instructions",
          "paragraphs": [
            "No renal adjustment is required by the label; unchanged half-life in moderate/severe renal impairment does not remove fluid-retention risk. Hepatic PK alone also does not specify an adjustment, but baseline liver tests, disease evaluation and careful selection are essential. If a dose is missed, do not double the following day; follow the regular prescribed plan."
          ],
          "sources": [
            "pi"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Heart failure is the boxed risk; other serious adverse effects require surveillance.",
      "takeaway": "Rapid weight gain, edema or breathlessness can indicate dangerous fluid retention.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Dose-related fluid retention can cause or worsen heart failure, particularly with insulin. Monitor weight, edema and dyspnea after initiation/increases; new HF requires standard management and consideration of stopping or reducing pioglitazone. Do not confuse edema/weight gain with an acceptable sign of improved diabetes control.",
            "Obtain baseline ALT, AST, alkaline phosphatase and bilirubin. Promptly test for fatigue, anorexia, right-upper abdominal discomfort, dark urine or jaundice. In this clinical setting, interrupt treatment if ALT >3 times the upper limit of normal and investigate. Do not restart without another explanation; ALT >3 times plus bilirubin >2 times without another cause is a no-restart signal for severe drug-induced liver injury risk.",
            "Do not use with active bladder cancer; weigh glycemic benefit against unknown recurrence risk with a history of bladder cancer. Human observational findings are inconsistent, so risk is not quantified as certain. Also assess fracture risk, particularly in women, and maintain bone health; new visual symptoms need prompt ophthalmic assessment for macular edema. Hypoglycemia can occur with insulin/secretagogues."
          ],
          "sources": [
            "pi"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "Initiation in established NYHA class III/IV heart failure and known hypersensitivity to pioglitazone or another Actos component are contraindicated. Symptomatic HF is separately not recommended. Active bladder cancer is a strong labeled do-not-use warning, not a separate entry in the current formal contraindication list; clinical avoidance remains necessary."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Boxed warning: congestive heart failure",
          "paragraphs": [
            "Thiazolidinediones can cause or exacerbate congestive heart failure. Monitor after starting/increasing doses for rapid weight gain, dyspnea and edema; manage new HF and consider discontinuation or reduction. Actos is not recommended with symptomatic HF, and initiation in established NYHA III/IV is contraindicated."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Reported common events include upper respiratory infection, headache, sinusitis, myalgia and pharyngitis. Edema and weight gain are important treatment-related effects; hypoglycemia risk rises with insulin/secretagogues. Serious events include heart failure, fractures, macular edema and reported hepatic failure. Trial differences and spontaneous reports should not be treated as universally causal or as precise individual incidence."
          ],
          "sources": [
            "pi"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "CYP2C8 exposure changes and glucose-lowering combinations can alter safety.",
      "takeaway": "Review medicines when they are started and when they are stopped.",
      "blocks": [
        {
          "title": "Strong CYP2C8 inhibitors",
          "paragraphs": [
            "Gemfibrozil raises exposure about threefold and prolongs elimination. Limit pioglitazone to 15 mg/day with gemfibrozil or other strong CYP2C8 inhibitors and reassess response/adverse effects. Do not merely keep the usual 45 mg ceiling while adding the inhibitor."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Inducers and topiramate",
          "paragraphs": [
            "Rifampin/other CYP2C8 inducers may lower exposure; starting or stopping them can require changes to diabetes treatment based on response, without exceeding the applicable label maximum. Topiramate reduces parent and active-metabolite exposure; clinical relevance is uncertain, so monitor glycemic control rather than infer a mandatory dose increase."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Insulin and secretagogues",
          "paragraphs": [
            "Combination use can cause hypoglycemia and may require reduction of the companion glucose-lowering drug. Insulin also increases susceptibility to fluid retention/HF with pioglitazone. Review glucose logs, hypoglycemia symptoms and volume status during changes; fixed-dose combinations require their own labels."
          ],
          "sources": [
            "pi"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Adult dosing does not establish pediatric or pregnancy safety.",
      "takeaway": "Renal dose independence does not mean heart-failure risk disappears.",
      "blocks": [
        {
          "title": "Children and older adults",
          "paragraphs": [
            "Pediatric safety/effectiveness are not established, and the label does not recommend pediatric use because of adult fluid/HF, fracture and bladder-tumor risks. No age-only adjustment is specified for older adults, but evidence at age 75+ is limited. Consider comorbid HF, edema, falls/fracture risk and polypharmacy."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Renal and hepatic disease",
          "paragraphs": [
            "No numerical renal adjustment is required in the reviewed label, including studied severe impairment. This is not a dialysis-specific outcomes recommendation or an assurance of fluid safety in CKD. Hepatic exposure data do not specify an adjustment, but liver disease needs caution; trials generally excluded ALT >2.5 times normal. That exclusion is not a new formal contraindication or a substitute for the current hepatic-injury evaluation/hold rules."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Pregnancy and reproductive potential",
          "paragraphs": [
            "Human pregnancy data are too limited to establish drug-associated birth-defect/miscarriage risk. Poorly controlled diabetes also harms pregnancy; discuss a pregnancy-appropriate treatment plan rather than simply abandoning glycemic control. Improved insulin sensitivity may restore ovulation in some previously anovulatory premenopausal women, creating unintended pregnancy risk; discuss contraception and pregnancy plans."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Breastfeeding",
          "paragraphs": [
            "No information is available on pioglitazone in human milk, infant effects or milk production; animal milk findings do not reliably quantify human exposure. Weigh breastfeeding benefits, maternal need and possible infant effects with the clinician. No universally safe lactation dose is established by the label."
          ],
          "sources": [
            "pi"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "PPAR-gamma activation changes insulin-responsive gene expression.",
      "takeaway": "The effect requires insulin and is not an acute DKA treatment.",
      "blocks": [
        {
          "title": "Mechanism",
          "paragraphs": [
            "Pioglitazone is a thiazolidinedione/PPAR-gamma agonist that decreases peripheral and hepatic insulin resistance, increasing insulin-dependent glucose disposal and reducing hepatic glucose output. It does not directly stimulate insulin release. Glycemic effects can add to metformin, sulfonylurea or insulin treatment, with the corresponding safety review."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Absorption, metabolism and elimination",
          "paragraphs": [
            "Oral peak concentration is reached within about 2 hours; food delays the peak to 3–4 hours without changing overall exposure. Parent drug is >99% protein-bound and metabolized principally through CYP2C8, with lesser CYP3A4 contribution. Major circulating active metabolites M-III/M-IV extend the exposure; parent half-life is about 3–7 hours versus 16–24 hours for those metabolites. Steady state is reached within 7 days."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Outcome interpretation",
          "paragraphs": [
            "HbA1c/glucose and some lipid measures improve, but the current label says macrovascular risk reduction is not conclusively established. Improved laboratory markers should not be represented as an approved cardiovascular-protection or HF-treatment indication. Individualize care alongside therapies appropriate to the patient’s cardiovascular and renal conditions."
          ],
          "sources": [
            "pi"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Combine glucose follow-up with weight, symptom and organ-risk surveillance.",
      "takeaway": "Teach the patient which symptoms need prompt treatment interruption and assessment.",
      "blocks": [
        {
          "title": "Baseline and routine monitoring",
          "paragraphs": [
            "Before starting, assess HF/edema, weight, bladder-cancer history, fracture risk, eye-care status and concomitant drugs, and obtain the liver panel. Follow glucose/HbA1c and weight/edema/breathing after initiation/increases. Routine periodic liver tests are not recommended by the label in patients without liver disease; abnormalities, risk or symptoms require appropriate investigation/follow-up rather than ignoring liver surveillance."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Counseling and urgent symptoms",
          "paragraphs": [
            "Report rapid weight gain, swelling or shortness of breath immediately. For suspected hepatic injury symptoms, promptly stop Actos and seek medical advice as the label instructs. Report visible blood in urine, painful urination or new/worsening urgency and any visual change; urgent eye assessment is indicated for visual symptoms. Know how to recognize/treat hypoglycemia when using insulin/secretagogues."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Adherence and treatment reassessment",
          "paragraphs": [
            "Take once daily with or without food and do not double after a missed dose. Continue the individualized diet/activity and glucose-monitoring plan. Illness, fever, trauma or surgery may change medication needs; contact the diabetes team. Discuss pregnancy plans and possible return of ovulation, and review both new and stopped interacting medicines."
          ],
          "sources": [
            "pi"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "The reviewed product is a single-ingredient oral pioglitazone tablet.",
      "takeaway": "Brand package appearance does not identify every generic or fixed combination.",
      "blocks": [
        {
          "title": "Representative product identity",
          "paragraphs": [
            "Actos 15 mg is a white/off-white round convex nonscored tablet marked ACTOS /15; the 30-tablet bottle is NDC 64764-151-04. Takeda is the current listed distributor. Generic appearance/package codes vary and require the actual manufacturer label."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Actos oral tablets supply 15, 30 or 45 mg pioglitazone, formulated as pioglitazone hydrochloride with strength expressed as pioglitazone.30 and 45 mg tablets are white/off-white round flat nonscored tablets marked ACTOS and the strength. This review does not provide a liquid, injectable or fixed-combination dosing substitution."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Store at 25°C with permitted 15–30°C excursions. Keep the container tightly closed and protect from light, moisture and humidity. Keep securely away from children and follow the dispensed product’s instructions."
          ],
          "sources": [
            "pi"
          ]
        }
      ]
    }
  ]
};
