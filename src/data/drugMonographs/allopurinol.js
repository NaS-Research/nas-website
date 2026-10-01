// Original product-specific summaries of public primary sources.
export const allopurinol = {
  "slug": "allopurinol",
  "name": "Allopurinol",
  "synonym": "Allopurinol · Xanthine oxidase inhibitor",
  "description": "An oral tablet reference for gout, cancer-therapy hyperuricemia, and qualifying recurrent calcium oxalate stones.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Stop immediately for rash; check thiopurines and renal function.",
    "text": "Allopurinol can cause severe or fatal hypersensitivity even with a negative HLA-B*58:01 test. Use a low renal-appropriate gout starting dose, titrate with monitoring, and coordinate any azathioprine/mercaptopurine combination.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Xanthine oxidase inhibitor"
    ],
    [
      "Routes covered",
      "Oral tablets"
    ],
    [
      "Reference focus",
      "Gout · Cancer-associated hyperuricemia · Selected stones"
    ]
  ],
  "sources": [
    {
      "id": "label",
      "title": "Allopurinol · Current oral tablet prescribing information",
      "publisher": "DailyMed / PD-Rx Pharmaceuticals, Inc. (Aurobindo source label)",
      "note": "SPL version 2, effective 20260925; current public product labeling.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=da78d290-c71f-44bc-8db4-58fe4195e2f8"
    },
    {
      "id": "acr",
      "title": "2020 ACR Guideline for the Management of Gout",
      "publisher": "American College of Rheumatology / Arthritis Care & Research",
      "note": "2020 guideline, DOI 10.1002/acr.24180; current guideline listed by ACR, checked October 1, 2026. Public full text from the society.",
      "url": "https://assets.contentstack.io/v3/assets/bltee37abb6b278ab2c/blt04d52e3b6ff5112f/632cab5b258fb55f6b2186af/gout-guideline-2020.pdf"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Urate lowering is condition-specific and is not acute analgesia.",
      "takeaway": "Do not treat asymptomatic hyperuricemia routinely.",
      "blocks": [
        {
          "title": "Approved oral indications",
          "paragraphs": [
            "The current U.S. tablet label covers adult primary/secondary gout with manifestations such as flares, tophi, joint damage, uric acid lithiasis or nephropathy; adult/pediatric leukemia, lymphoma, or solid-tumor patients receiving cancer therapy that raises serum/urinary urate; and recurrent calcium oxalate stones in adults with urinary uric acid above 800 mg/day in men or 750 mg/day in women despite lifestyle changes. It does not recommend treatment of asymptomatic hyperuricemia."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Role in gout",
          "paragraphs": [
            "Allopurinol lowers urate over time rather than directly treating acute flare pain. ACR recommends it as first-line urate-lowering therapy, including in CKD, when such treatment is indicated. Ongoing flares during initiation do not automatically mean treatment failure or require stopping established allopurinol; treat the flare concurrently."
          ],
          "sources": [
            "label",
            "acr"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Start low for gout, titrate to urate response, and distinguish oncology dosing.",
      "takeaway": "Renal starting-dose tables differ by indication.",
      "blocks": [
        {
          "title": "Adult gout and prophylaxis",
          "paragraphs": [
            "With normal renal function, the label starts 100 mg daily and increases by 100 mg weekly to serum urate ≤6 mg/dL; maximum recommended 800 mg/day. Divide doses above 300 mg/day. ACR uses a target below 6 mg/dL and supports titration guided by serial urate rather than fixed dosing. Use colchicine or another appropriate anti-inflammatory prophylaxis at initiation; ACR recommends 3–6 months with extension if flares persist. The label continues prophylaxis until urate normalizes and the patient is flare-free for several months."
          ],
          "sources": [
            "label",
            "acr"
          ],
          "open": true
        },
        {
          "title": "Gout with renal impairment",
          "paragraphs": [
            "The table gives INITIAL adult gout doses, not permanent dose ceilings. With renal impairment, increase gradually by 50 mg/day every 2–4 weeks and closely monitor kidney function. The label does not define a maximum at each eGFR; reassess safety and urate response. These limits cannot be substituted for the oncology table."
          ],
          "sources": [
            "label"
          ],
          "table": {
            "headers": [
              "eGFR (mL/min)",
              "Initial gout dose"
            ],
            "rows": [
              [
                ">60",
                "No renal modification to the usual starting regimen"
              ],
              [
                ">30 to 60",
                "50 mg daily"
              ],
              [
                ">15 to 30",
                "50 mg every other day"
              ],
              [
                "5 to 15",
                "50 mg twice weekly"
              ],
              [
                "<5",
                "50 mg once weekly"
              ]
            ]
          }
        },
        {
          "title": "Cancer-therapy hyperuricemia",
          "paragraphs": [
            "Start 24–48 hours before chemotherapy expected to cause tumor lysis. Adults: 300–800 mg/day, adjusted for kidney function. Pediatric label: 100 mg/m² every 8–12 hours, with a stated weight-based daily regimen of 10 mg/kg/day and maximum 800 mg/day. The label lists both BSA and weight expressions; they are not automatically interchangeable, and oncology must select and verify the regimen. Consider a different formulation if BSA is below 0.5 m². Check urate at least daily and stop when tumor-lysis risk has abated; the label describes 2–3 days after chemotherapy begins, but ongoing risk needs oncology reassessment."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Cancer therapy with renal impairment",
          "paragraphs": [
            "These are adult cancer-therapy doses. Pediatric renal-impairment dosing is not established; severe impairment below eGFR 20 and dialysis were not studied. Obtain specialist dosing rather than applying the adult table."
          ],
          "sources": [
            "label"
          ],
          "table": {
            "headers": [
              "Adult renal category",
              "Cancer-therapy label dose"
            ],
            "rows": [
              [
                "eGFR >20 to 60 mL/min",
                "No dosage modification"
              ],
              [
                "eGFR 10–20 mL/min",
                "200 mg/day"
              ],
              [
                "eGFR <10 mL/min",
                "100 mg/day"
              ],
              [
                "Dialysis",
                "50 mg every 12 hours OR 100 mg every 24 hours"
              ]
            ]
          }
        },
        {
          "title": "Recurrent calcium oxalate stones and administration",
          "paragraphs": [
            "For qualifying hyperuricosuric adults, 200–300 mg/day in one or divided doses; adjust by follow-up 24-hour urinary urate. Renal-impairment stone dosing is not established. Take after meals to improve tolerance and do not double a missed dose. Maintain hydration under the clinical plan; the label’s adult urine-output goal is at least 2 L/day, requiring individualization when fluid balance is constrained."
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
      "summary": "Severe hypersensitivity can develop early and despite a negative genetic test.",
      "takeaway": "Stop immediately for any rash or hypersensitivity sign.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "SJS, TEN, DRESS, and other serious/fatal hypersensitivity can occur. Permanently discontinue at the first rash or other suspected hypersensitivity; do not wait for blistering. Renal dysfunction and certain interacting drugs raise risk. Monitor for kidney injury/xanthine calculi, liver injury, and cytopenias; increased liver enzymes warrant discontinuation under the label. Early gout flares need concurrent anti-inflammatory care, not automatic withdrawal. Dizziness/drowsiness may impair driving and add to alcohol/CNS depressants."
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
            "A history of hypersensitivity to allopurinol or a tablet ingredient is contraindicated. HLA-B*58:01 positivity is an avoid-use recommendation unless benefits clearly outweigh risks, rather than a separate formal section 4 contraindication. Severe renal impairment calls for indication-specific assessment/dosing, not a universal contraindication."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Boxed warning status",
          "paragraphs": [
            "The selected U.S. tablet label has no boxed warning. Its severe and potentially fatal hypersensitivity warning still requires immediate action."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Adverse reactions and overdose",
          "paragraphs": [
            "Rash, nausea, diarrhea, liver-enzyme elevations, and early gout flares are frequently reported. Less common serious reactions include severe skin/systemic hypersensitivity, hepatitis, kidney injury, and blood dyscrasias; spontaneous reporting does not quantify every event. Overdose has no specific antidote. Allopurinol/oxypurinol are dialyzable, but the clinical benefit of dialysis in overdose is unknown; obtain poison-center/emergency assessment."
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
      "summary": "Xanthine-oxidase inhibition can greatly increase thiopurine toxicity.",
      "takeaway": "Check azathioprine and mercaptopurine before the first dose.",
      "blocks": [
        {
          "title": "Azathioprine and mercaptopurine",
          "paragraphs": [
            "Allopurinol inhibits their xanthine-oxidase-mediated metabolism and can cause dangerous myelosuppression. The current allopurinol label states that with 300–600 mg/day, their usual doses require reduction to approximately one-third to one-quarter, followed by adjustment for response/toxicity. Use their own current prescribing information and specialist oversight for the actual combination; do not assume this fraction applies automatically to every allopurinol dose. Monitor CBC closely."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Oncology and urate therapies",
          "paragraphs": [
            "Avoid capecitabine or fluorouracil combinations because antitumor activity may decrease. Do not use allopurinol during pegloticase therapy, since suppressed urate can mask loss of response associated with anaphylaxis risk. Other cytotoxic agents may add marrow suppression, requiring more frequent blood counts. Uricosurics alter oxypurinol clearance and urinary urate load; monitor the combined effect and kidney risk."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Other important interactions",
          "paragraphs": [
            "Bendamustine, amoxicillin/ampicillin, and thiazides may increase rash/hypersensitivity risk; kidney impairment adds risk with thiazides. Monitor renal function and adjust as directed. Allopurinol can raise cyclosporine levels, prolong dicumarol effects, and enhance warfarin anticoagulation; monitor drug levels/prothrombin time/INR and adjust the relevant medicine. Chlorpropamide may cause more hypoglycemia with renal impairment. At allopurinol ≥600 mg/day, theophylline clearance may fall; monitor levels and dosing."
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
      "summary": "Genetic risk, organ function, and reproductive circumstances affect treatment.",
      "takeaway": "Testing reduces uncertainty but cannot rule out hypersensitivity.",
      "blocks": [
        {
          "title": "HLA-B*58:01 screening",
          "paragraphs": [
            "FDA labeling advises considering screening before initiation in populations with high allele prevalence, including specified African/Asian and Native Hawaiian/Pacific Islander ancestry groups; it generally does not recommend screening low-prevalence populations or existing tolerant users. ACR conditionally recommends testing Southeast Asian (e.g., Han Chinese, Korean, Thai) and African American patients, and against universal testing in others. These approaches differ in scope. A negative test does not eliminate risk; positive patients generally should avoid allopurinol unless a compelling benefit outweighs risk."
          ],
          "sources": [
            "label",
            "acr"
          ]
        },
        {
          "title": "Pregnancy and lactation",
          "paragraphs": [
            "Allopurinol and oxypurinol cross the placenta. Limited human reports do not establish a clear risk pattern, while animal findings support potential fetal harm; discuss need and alternatives. Both enter human milk. The selected current U.S. label advises no breastfeeding during treatment and for 1 week after the last dose because of possible serious infant reactions. Limited published milk/infant data do not establish universal safety."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Children and organ impairment",
          "paragraphs": [
            "Pediatric use is established for cancer-therapy hyperuricemia, not pediatric gout, calcium oxalate stone prevention, or rare purine disorders under this label. Pediatric renal dosing remains insufficiently defined. Renal elimination requires close reassessment when function changes. In pre-existing liver disease, monitor liver enzymes periodically; no validated numeric hepatic adjustment is supplied. Older-patient dosing should follow organ function and clinical risk, with no invented age-only regimen."
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
      "summary": "Allopurinol and its active metabolite prevent new uric acid formation.",
      "takeaway": "It does not rapidly remove urate already present.",
      "blocks": [
        {
          "title": "Mechanism",
          "paragraphs": [
            "Allopurinol and oxypurinol inhibit xanthine oxidase, reducing conversion of hypoxanthine to xanthine and xanthine to uric acid. They reduce new urate production rather than act as an acute anti-inflammatory or directly remove circulating uric acid."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Pharmacokinetics",
          "paragraphs": [
            "Oral absorption is approximately 90%; peaks occur around 1.5 hours for allopurinol and 4.5 hours for oxypurinol. Half-lives are about 1–2 hours and 15 hours respectively in the label’s described setting. Oxypurinol’s sustained activity and renal elimination explain accumulation and dose reassessment in kidney impairment."
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
      "summary": "Follow urate targets and organ safety rather than symptoms alone.",
      "takeaway": "A flare and a rash require very different responses.",
      "blocks": [
        {
          "title": "Monitoring",
          "paragraphs": [
            "For gout, obtain baseline urate, CBC, chemistry panel, liver tests, creatinine, and eGFR. Follow urate during titration; check kidney function frequently early, and at least daily in tumor-lysis settings. Monitor blood counts more closely with marrow-toxic combinations and liver enzymes with pre-existing disease or hepatic symptoms. Stone prevention uses repeat 24-hour urinary urate. Review adherence and prophylaxis."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Counseling",
          "paragraphs": [
            "Continue prescribed allopurinol during an ordinary gout flare and seek appropriate flare treatment; do not continue through a rash. Stop and obtain immediate assessment for rash, blisters, fever, eye/mouth irritation, swelling, painful urination, or blood in urine. Report jaundice, unexplained bleeding/infections, or marked fatigue. Discuss hydration, pregnancy/breastfeeding, interacting medicines, missed doses, and driving effects."
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
      "summary": "Verify tablet strength and functional scoring on the dispensed package.",
      "takeaway": "Appearance and NDC are manufacturer-specific.",
      "blocks": [
        {
          "title": "Representative product",
          "paragraphs": [
            "The selected PD-Rx repackaged 100-mg tablet is white/off-white, round, beveled, with AL and 100 separated by a score on one side and plain reverse; the 90-count bottle is NDC 72789-596-90. Its label identifies Aurobindo as the underlying manufacturer/distributor. Other manufacturers and packages differ."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "The underlying label describes functionally scored 100- and 300-mg tablets; this repackaged presentation specifically supplies 100 mg. The functional 100-mg score permits the 50-mg starting amounts in the label’s renal table. IV allopurinol and other formulations require separate labeling; small-body-surface-area pediatric patients may need an alternative formulation."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Store at 20–25°C (68–77°F), protected from moisture and light. Dispense in a tight, light-resistant container. Keep medicines out of children’s reach and verify the tablet before splitting a prescribed scored dose."
          ],
          "sources": [
            "label"
          ]
        }
      ]
    }
  ]
};
