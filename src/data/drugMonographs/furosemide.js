// Original formulation-specific clinical summaries.
export const furosemide = {
  "slug": "furosemide",
  "name": "Furosemide",
  "synonym": "Lasix · Loop diuretic",
  "description": "A potent diuretic for edema. Selected oral tablets/solutions and IV/IM injection have separate dose schedules; fluid, electrolyte, renal and hearing assessment guide treatment.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Prevent excessive fluid and electrolyte loss.",
    "text": "Fainting, marked weakness, reduced urine or hearing changes need prompt assessment. Route, repeat interval and injection rate must match the prescribed product.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Loop diuretic"
    ],
    [
      "Representative brand",
      "Lasix"
    ],
    [
      "Reference focus",
      "Oral tablets/solutions and selected IV/IM injection"
    ]
  ],
  "sources": [
    {
      "id": "oral",
      "title": "Furosemide · Tablets and oral solutions",
      "publisher": "DailyMed / Hikma",
      "note": "PI revised November 2025; DailyMed update November 3, 2025. Includes two oral-solution concentrations.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9e493331-dddd-496e-abf8-61747fb67aba"
    },
    {
      "id": "lasix",
      "title": "Lasix · Oral tablets",
      "publisher": "DailyMed / Validus",
      "note": "Clinical text footer August 2018; DailyMed update September 30, 2025. Publication date is not the clinical revision date.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c9b4d8f-0770-482d-a9e6-9c616a440b1a"
    },
    {
      "id": "injection",
      "title": "Furosemide · IV/IM injection",
      "publisher": "DailyMed / Civica; Hikma",
      "note": "PI October 2025; DailyMed update October 31, 2025. Selected 40 mg/4 mL single-dose vial.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6d9caaab-d874-4cf1-b9fe-408452a18998"
    },
    {
      "id": "hf",
      "title": "Heart failure · Diuretics and decongestion",
      "publisher": "AHA / ACC / HFSA",
      "note": "2022 guideline slide set, slides 68–70: congestion treatment, thiazide addition and oral diuretic table. Guideline context differs from product labeling.",
      "url": "https://professional.heart.org/-/media/832EA0F4E73948848612F228F7FA2D35.pdf"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Edema, oral hypertension and parenteral pulmonary edema.",
      "takeaway": "Match the indication to the route.",
      "blocks": [
        {
          "title": "Labeled uses",
          "sources": [
            "oral",
            "injection"
          ],
          "open": true,
          "paragraphs": [
            "Oral and selected injection labels cover adult/pediatric edema with heart failure, cirrhosis or renal disease including nephrotic syndrome. Oral products also cover adult hypertension; injection is adjunctive therapy for acute pulmonary edema."
          ]
        },
        {
          "title": "Heart failure guidance",
          "sources": [
            "hf"
          ],
          "paragraphs": [
            "The AHA/ACC/HFSA guideline recommends diuretics for fluid retention to relieve congestion and prevent worsening heart failure. Reserve addition of a thiazide to a loop diuretic for inadequate response to moderate/high loop doses, to limit electrolyte abnormalities."
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Individualize by route, response and volume status.",
      "takeaway": "A severe-edema ceiling is not a routine starting dose.",
      "blocks": [
        {
          "title": "Adult oral regimens",
          "sources": [
            "oral",
            "lasix"
          ],
          "open": true,
          "table": {
            "headers": [
              "Indication",
              "Selected label directions"
            ],
            "rows": [
              [
                "Edema",
                "20–80 mg once initially; repeat or increase by 20–40 mg no sooner than 6–8 hours. Maintenance once/twice daily. Severe edema may require carefully supervised titration up to 600 mg/day."
              ],
              [
                "Hypertension",
                "80 mg/day initially, usually 40 mg twice daily; adjust to BP response and review other antihypertensives."
              ]
            ]
          }
        },
        {
          "title": "Adult parenteral regimens",
          "sources": [
            "injection"
          ],
          "paragraphs": [
            "Edema: 20–40 mg IV/IM initially; IV over 1–2 minutes. Repeat/increase by 20 mg no sooner than 2 hours, then once/twice daily as individualized. Acute pulmonary edema: 40 mg IV over 1–2 minutes; if inadequate after 1 hour, 80 mg IV over 1–2 minutes. Continuous infusion must not exceed 4 mg/min; high-dose therapy requires controlled infusion."
          ]
        },
        {
          "title": "Pediatric route distinctions",
          "sources": [
            "oral",
            "injection"
          ],
          "paragraphs": [
            "Oral edema: 2 mg/kg once initially; increase 1–2 mg/kg no sooner than 6–8 hours. IV/IM: 1 mg/kg initially over 1–2 minutes; increase 1 mg/kg no sooner than 2 hours. Both labels advise against doses above 6 mg/kg. Selected injection limits premature infants to 1 mg/kg/day."
          ]
        },
        {
          "title": "Renal, hepatic and formulation considerations",
          "sources": [
            "oral",
            "injection"
          ],
          "paragraphs": [
            "Anuria is contraindicated. Stop for increasing azotemia plus oliguria in progressive severe renal disease. Cirrhosis/ascites warrants hospital initiation and careful titration; correct hepatic coma/electrolyte depletion first. Oral solutions are 8 or 10 mg/mL; verify concentration and measuring device. No automatic oral-to-IV conversion is supplied here."
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Volume depletion, electrolyte disturbance and ototoxicity.",
      "takeaway": "Dose and speed can change risk substantially.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "sources": [
            "oral",
            "injection"
          ],
          "open": true,
          "tone": "warning",
          "paragraphs": [
            "Dehydration, hypotension, electrolyte depletion and metabolic abnormalities may be severe. Rapid injection, renal impairment, excessive doses, low albumin and ototoxic drugs increase hearing risk. Watch for urinary retention. Assess sulfonamide allergy history, lupus, glucose and gout risks."
          ]
        },
        {
          "title": "Contraindications",
          "sources": [
            "lasix",
            "injection"
          ],
          "paragraphs": [
            "Anuria or prior hypersensitivity to furosemide."
          ]
        },
        {
          "title": "Boxed warning status · Product-specific labeling",
          "sources": [
            "oral",
            "lasix",
            "injection"
          ],
          "paragraphs": [
            "Selected oral labels prominently warn of profound diuresis and water/electrolyte depletion requiring medical supervision. The selected modern injection PI has no boxed warning; its serious volume/electrolyte and hearing warnings still apply."
          ]
        },
        {
          "title": "Adverse reactions",
          "sources": [
            "lasix",
            "injection"
          ],
          "paragraphs": [
            "Dizziness, orthostasis, GI upset, cramps and photosensitivity occur. Serious reports include hearing loss, severe allergy/skin reactions, blood disorders and renal injury. Overdose requires urgent supportive fluid/electrolyte correction and BP monitoring; dialysis does not speed elimination."
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Review ototoxic, nephrotoxic and BP-active medicines.",
      "takeaway": "Avoid lithium and high-risk ototoxic combinations.",
      "blocks": [
        {
          "title": "Clinically relevant interactions",
          "sources": [
            "oral",
            "injection"
          ],
          "open": true,
          "items": [
            "Avoid lithium; avoid ethacrynic acid and aminoglycosides except life-threatening indications.",
            "Cisplatin/nephrotoxic drugs require renal/hearing review.",
            "ACE inhibitors/ARBs and other antihypertensives: monitor BP/renal function; doses may need reduction.",
            "NSAIDs/phenytoin may reduce response. Methotrexate/tubularly secreted drugs can increase toxicity.",
            "Potassium-depleting medicines increase risk; hypokalemia enhances digoxin toxicity.",
            "Separate oral tablets and sucralfate by at least 2 hours.",
            "Review high-dose salicylates, cyclosporine, chloral hydrate and perioperative muscle relaxants against the full label."
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Pregnancy, milk supply and infant renal risks.",
      "takeaway": "Older adults need cautious titration.",
      "blocks": [
        {
          "title": "Pregnancy and lactation",
          "sources": [
            "injection"
          ],
          "paragraphs": [
            "Use requires individualized maternal/fetal assessment. The newer injection PI reports no demonstrated major-malformation signal from available observational data; this does not establish absence of risk. Furosemide enters milk and significant diuresis may impair supply."
          ]
        },
        {
          "title": "Pediatric and geriatric considerations",
          "sources": [
            "lasix",
            "injection"
          ],
          "paragraphs": [
            "Premature infants have hearing, nephrocalcinosis and nephrolithiasis risks; assess renal function/ultrasound as labeled. Oral labeling notes possible persistent ductus risk early in premature life. Older adults often need lower starting doses and renal assessment."
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Renal sodium/chloride reabsorption inhibition.",
      "takeaway": "Oral and IV onset/duration differ.",
      "blocks": [
        {
          "title": "Mechanism of action",
          "sources": [
            "oral"
          ],
          "paragraphs": [
            "Inhibits renal sodium/chloride reabsorption, particularly in the loop of Henle, producing diuresis."
          ]
        },
        {
          "title": "Pharmacokinetics",
          "sources": [
            "lasix",
            "injection"
          ],
          "facts": [
            [
              "Oral effect",
              "Onset within 1 hour; duration 6–8 hours."
            ],
            [
              "IV effect",
              "Onset within 5 minutes; duration approximately 2 hours."
            ],
            [
              "Disposition",
              "Highly albumin-bound; predominantly urinary elimination."
            ],
            [
              "Half-life",
              "Approximately 2 hours; patient factors alter clearance."
            ]
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Follow clinical response and laboratory trends.",
      "takeaway": "Symptoms of depletion warrant review.",
      "blocks": [
        {
          "title": "Monitoring parameters",
          "sources": [
            "oral",
            "injection"
          ],
          "open": true,
          "items": [
            "Assess BP, hydration, urine output and edema response.",
            "Check sodium/potassium, CO₂, BUN/creatinine; assess magnesium/calcium, glucose and uric acid as appropriate.",
            "Check hearing symptoms and urinary retention.",
            "Infant renal function/ultrasound and high-dose treatment require additional surveillance."
          ]
        },
        {
          "title": "Patient counseling information",
          "sources": [
            "oral",
            "lasix",
            "injection"
          ],
          "paragraphs": [
            "Rise slowly. Report fainting, cramps, marked thirst, reduced urine or hearing changes. Follow the prescribed fluid/potassium plan and sun protection. Measure liquid with the supplied calibrated device; verify strength every refill."
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Verify route and liquid concentration.",
      "takeaway": "Devices and concentrations require separate directions.",
      "blocks": [
        {
          "title": "Representative oral product · Lasix",
          "sources": [
            "lasix"
          ],
          "open": true,
          "facts": [
            [
              "Strength / appearance",
              "40 mg white, round, scored tablet."
            ],
            [
              "Imprint",
              "Lasix 40."
            ],
            [
              "Distributor",
              "Validus Pharmaceuticals LLC."
            ],
            [
              "Example NDC",
              "30698-060-01 ·100 tablets."
            ],
            [
              "U. S. status",
              "Prescription medicine."
            ]
          ],
          "links": [
            {
              "title": "View exact Lasix label",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2c9b4d8f-0770-482d-a9e6-9c616a440b1a"
            }
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "sources": [
            "oral",
            "injection"
          ],
          "facts": [
            [
              "Selected oral products",
              "20/40/80 mg tablets; 10 mg/mL and 40 mg/5 mL solutions."
            ],
            [
              "Selected IV/IM product",
              "40 mg/4 mL(10 mg/mL), single-dose vial."
            ],
            [
              "Scope boundary",
              "Subcutaneous on-body products require separate labels and are outside these dosing directions."
            ]
          ]
        },
        {
          "title": "Storage and handling",
          "sources": [
            "oral",
            "lasix",
            "injection"
          ],
          "paragraphs": [
            "Lasix: 20–25°C, excursions 15–30°C; protect from light and reject discolored tablets. Hikma 10 mg/mL: original bottle; discard 90 days after opening; 60 mL package uses its supplied syringe. Injection: 20–25°C, light protection; discard unused contents and reject particles/discoloration."
          ]
        }
      ]
    }
  ]
};
