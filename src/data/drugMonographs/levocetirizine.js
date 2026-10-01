// Original clinical summaries checked against the product-specific public sources below.
export const levocetirizine = {
  "slug": "levocetirizine",
  "name": "Levocetirizine",
  "synonym": "Xyzal; Xyzal Allergy 24HR; Children’s Xyzal Allergy",
  "description": "Oral H1 antihistamine with prescription/OTC age differences, kidney-function dose restrictions and severe discontinuation-pruritus counseling.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Respect renal and alertness limits",
    "text": "OTC use is prohibited with kidney disease. Prescription renal schedules apply only to eligible age 12+ patients; seek advice for severe itching after stopping long-term use.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Class",
      "H1 antihistamine"
    ],
    [
      "Solution concentration",
      "0.5 mg/mL"
    ],
    [
      "Key warning",
      "Severe itching after long-term discontinuation"
    ]
  ],
  "sources": [
    {
      "id": "rx",
      "title": "Xyzal prescription tablets/solution · Current full PI",
      "publisher": "Chattem / Sanofi PI body / DailyMed",
      "note": "Clinical revision July 2025; SPL2 effective July 22, 2025 includes discontinuation-pruritus warning.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1673f7ff-0c7c-4403-86cf-c05eb1475222"
    },
    {
      "id": "otct",
      "title": "Xyzal Allergy 24HR tablets · Current Drug Facts",
      "publisher": "Chattem / DailyMed",
      "note": "Current SPL14 effective March 11, 2026; OTC self-use eligibility differs from Rx renal schedules.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8be45c2a-1eca-4a00-81b9-f7babdbdcd41"
    },
    {
      "id": "otcl",
      "title": "Children’s Xyzal Allergy solution · Current Drug Facts",
      "publisher": "Chattem / DailyMed",
      "note": "Current SPL23 effective February 5, 2026; archive publication June 8, 2026 is a distinct metadata field.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a33f2704-d350-428b-b467-91f4775ce17f"
    },
    {
      "id": "fda",
      "title": "Severe itching after stopping cetirizine/levocetirizine · Safety communication",
      "publisher": "FDA",
      "note": "May 16, 2025; applies to prescription and OTC use; no established universal treatment/taper.",
      "url": "https://www.fda.gov/media/186542/download"
    },
    {
      "id": "lactmed",
      "title": "Levocetirizine during breastfeeding · Current NIH LactMed",
      "publisher": "NIH / NLM LactMed",
      "note": "Revised September 15, 2025; full three-page official PDF text read via web. Direct download 403; no retained full PDF claimed.",
      "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK501598/pdf/Bookshelf_NBK501598.pdf"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Levocetirizine is an oral H1 antihistamine for product-defined allergy and hive indications.",
      "takeaway": "Prescription indications and OTC age eligibility should be read separately.",
      "blocks": [
        {
          "title": "Current prescription indications",
          "paragraphs": [
            "The reviewed current Xyzal prescription PI indicates perennial allergic-rhinitis symptom relief in children 6 months to 2 years, and uncomplicated chronic idiopathic urticaria skin manifestations in adults and children age 6 months and older. Its formal indication section does not list adult perennial or seasonal rhinitis, even though older trials and broader FDA safety summaries discuss allergy treatment. Preserve the current product-specific indication wording."
          ],
          "sources": [
            "rx"
          ]
        },
        {
          "title": "OTC respiratory-allergy symptom relief",
          "paragraphs": [
            "Selected OTC tablets and solution temporarily relieve runny nose, sneezing, itchy/watery eyes, and itchy nose/throat due to hay fever or other respiratory allergies. Tablets begin at age 6; the selected OTC liquid begins at age 2. Prescription infant treatment is not an OTC infant self-use authorization. OTC Drug Facts does not supply a chronic-hives treatment indication."
          ],
          "sources": [
            "otct",
            "otcl"
          ]
        },
        {
          "title": "Clinical-use boundaries",
          "paragraphs": [
            "Treatment is symptomatic and should match diagnosis, age and kidney function. The current labeled schedules do not establish an anaphylaxis rescue regimen, universal escalation above 5 mg/day, or treatment for every cause of itching. New or persistent symptoms, urinary issues and severe discontinuation itching require clinical evaluation."
          ],
          "sources": [
            "rx"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Usual schedules are once daily in the evening; age and renal function impose specific limits.",
      "takeaway": "The solution contains 0.5 mg/mL, so milligrams and milliliters are not interchangeable.",
      "blocks": [
        {
          "title": "Prescription schedules with normal renal function",
          "paragraphs": [
            "For chronic idiopathic urticaria, adults/children age 12+ use 5 mg once each evening; 2.5 mg may adequately control some patients. Children 6–11 use 2.5 mg each evening, maximum 2.5 mg/day. Children 6 months–5 years use 1.25 mg each evening, maximum 1.25 mg/day. For the current prescription perennial-rhinitis indication at 6 months–2 years, use 1.25 mg each evening and do not exceed it. Tablets are scored for a 2.5 mg half-tablet; use solution for 1.25 mg. Food does not require a dose-timing restriction."
          ],
          "sources": [
            "rx"
          ],
          "table": {
            "headers": [
              "Prescription population",
              "Evening oral dose and volume"
            ],
            "rows": [
              [
                "CIU age ≥ 12",
                "5 mg = 10 mL; some patients 2.5 mg = 5 mL"
              ],
              [
                "CIU age 6–11",
                "2.5 mg = 5 mL or ½ of a 5 mg tablet; maximum 2.5 mg/day"
              ],
              [
                "CIU age 6 months–5 years",
                "1.25 mg = 2.5 mL; maximum 1.25 mg/day"
              ],
              [
                "PAR age 6 months–2 years",
                "1.25 mg = 2.5 mL; maximum 1.25 mg/day"
              ]
            ]
          }
        },
        {
          "title": "Prescription renal adjustment from age 12",
          "paragraphs": [
            "The label uses creatinine clearance in mL/min, not a universal interchangeable eGFR value. Renal categories/ranges below reproduce its wording; shared endpoints at 30 and 50 mL/min are not silently reassigned. At an exact boundary, confirm the clinician’s chosen category. Children 6 months–11 years with impaired renal function are contraindicated, so this table cannot be applied to them."
          ],
          "sources": [
            "rx"
          ],
          "table": {
            "headers": [
              "Label CrCl category, age ≥ 12",
              "Prescription schedule"
            ],
            "rows": [
              [
                "Mild: 50–80 mL/min",
                "2.5 mg once daily"
              ],
              [
                "Moderate: 30–50 mL/min",
                "2.5 mg every other day"
              ],
              [
                "Severe: 10–30 mL/min",
                "2.5 mg twice weekly, once every 3–4 days"
              ],
              [
                "CrCl < 10 mL/min or hemodialysis",
                "Do not use; contraindicated"
              ]
            ]
          }
        },
        {
          "title": "OTC tablet and liquid directions",
          "paragraphs": [
            "Adults/children 12–64 may take one 5 mg tablet each evening (half 2.5 mg may suffice for milder symptoms), or 5–10 mL of selected 0.5 mg/mL liquid depending on symptom severity; maximum 5 mg/24 hours. Children 6–11 take half a 5 mg tablet or 5 mL solution each evening, maximum 2.5 mg/24 hours. The selected liquid permits children 2–5 to take 2.5 mL each evening, maximum 1.25 mg/24 hours. Tablets must not be used under 6, and OTC liquid must not be used under 2. Age 65+ requires asking a doctor; consumers with kidney disease must not use these OTC products."
          ],
          "sources": [
            "otct",
            "otcl"
          ]
        },
        {
          "title": "Hepatic disease and administration",
          "paragraphs": [
            "No adjustment is needed for solely hepatic impairment; with combined renal/hepatic impairment, adjust according to renal function within the permitted age group. Use a calibrated measuring device and confirm the concentration; OTC liquid specifies its enclosed dosing cup. Do not exceed the applicable daily dose or import adult renal schedules into children."
          ],
          "sources": [
            "rx"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Drowsiness, urinary retention and itching after discontinuation deserve attention.",
      "takeaway": "A second-generation antihistamine can still impair alertness.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Somnolence, fatigue and weakness occur; avoid hazardous tasks requiring full alertness after dosing and avoid alcohol/other CNS depressants. Urinary-retention susceptibility is increased with factors such as prostatic enlargement or spinal-cord lesions; discontinue and obtain care if retention develops.",
            "Rare but sometimes severe widespread itching can begin within a few days after stopping daily long-term use, commonly after months to years, including people without itching before treatment. FDA advises discussing benefits/risks of planned chronic use and contacting a clinician if severe itching occurs. Restarting or tapering after restarting has helped some reported cases, but effective treatments have not been formally evaluated; no universal taper is established."
          ],
          "sources": [
            "rx",
            "fda",
            "otcl"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "Prescription use is contraindicated with hypersensitivity to levocetirizine, cetirizine or product ingredients; end-stage renal disease with CrCl < 10 mL/min; hemodialysis; and renal impairment in children 6 months–11 years. OTC instructions are stricter for self-use: do not use with any kidney disease or prior allergy to the product/cetirizine. OTC tablet/liquid lower-age restrictions apply independently of prescription infant eligibility."
          ],
          "sources": [
            "rx",
            "otct",
            "otcl"
          ]
        },
        {
          "title": "Boxed-warning status",
          "paragraphs": [
            "No formal boxed warning is present in the reviewed prescription Xyzal PI. Its serious warnings and FDA’s 2025 discontinuation-pruritus communication still require counseling; absence of a box does not mean freedom from sedation, retention, allergy or withdrawal-related itching."
          ],
          "sources": [
            "rx",
            "fda"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Common adult/adolescent trial reports include somnolence, nasopharyngitis, fatigue, dry mouth and pharyngitis. Pediatric reports include fever, cough, somnolence, nosebleed, diarrhea or constipation, varying by age/study. Postmarketing reports include anaphylaxis/angioedema, urinary retention, seizures, mood/behavior changes, hepatitis and severe skin reactions; voluntary reports do not establish individual incidence or certain causation. Trial doses used for safety evaluation are not the same as approved pediatric dose ceilings."
          ],
          "sources": [
            "rx"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Sedating combinations can worsen functional impairment despite limited hepatic metabolism.",
      "takeaway": "Do not combine levocetirizine and cetirizine without a specific clinician plan.",
      "blocks": [
        {
          "title": "Alcohol and sedating medicines",
          "paragraphs": [
            "Avoid concurrent alcohol or CNS depressants because alertness and coordination may worsen. Review sedatives, tranquilizers, sleep aids, opioids and other antihistamine products for overlapping effects and duplicate ingredients with a clinician/pharmacist. OTC labeling likewise warns that alcohol/sedatives/tranquilizers increase drowsiness."
          ],
          "sources": [
            "rx",
            "otct",
            "otcl"
          ]
        },
        {
          "title": "Cetirizine interaction evidence",
          "paragraphs": [
            "No formal in-vivo interaction studies were performed with levocetirizine in the selected PI. Its interaction discussion uses racemic cetirizine studies: theophylline modestly reduced cetirizine clearance, and ritonavir increased cetirizine exposure. Those findings are not direct measured levocetirizine effect sizes or mandatory dose algorithms. Review the combination and monitor tolerability, especially if kidney function is reduced."
          ],
          "sources": [
            "rx"
          ]
        },
        {
          "title": "Metabolic and renal considerations",
          "paragraphs": [
            "Less than 14% is metabolized and in-vitro data suggest low CYP interaction potential, but this does not prove every combination safe. Renal elimination and pharmacodynamic sedation remain important. Reassess dosing when renal function changes rather than automatically increasing the antihistamine for persistent symptoms."
          ],
          "sources": [
            "rx"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Infant prescription use, OTC use and renal impairment have different boundaries.",
      "takeaway": "Lower pediatric doses reflect higher exposure at the same milligram dose.",
      "blocks": [
        {
          "title": "Children and older adults",
          "paragraphs": [
            "Prescription CIU use begins at 6 months, with the reviewed PAR indication limited to 6 months–2 years. Recommended pediatric doses rely on adult efficacy extrapolation and pediatric exposure/safety comparisons; 5 mg in children 6–11 produces roughly twice adult exposure. Renal impairment at 6 months–11 years is a contraindication. Older adults need cautious selection and renal assessment; OTC age 65+ requires a doctor rather than automatic adult self-dosing."
          ],
          "sources": [
            "rx"
          ]
        },
        {
          "title": "Renal and hepatic impairment",
          "paragraphs": [
            "Renal dysfunction markedly increases exposure and prolongs elimination, requiring reduced dose/frequency in eligible age 12+ patients. ESRD/hemodialysis precludes use; dialysis removes little drug and is not a dosing workaround. Isolated hepatic impairment does not require adjustment, but concomitant renal impairment does. No pediatric renal-adjustment table is provided because use is contraindicated in that impaired group."
          ],
          "sources": [
            "rx"
          ]
        },
        {
          "title": "Pregnancy and breastfeeding",
          "paragraphs": [
            "Available human pregnancy data are insufficient to identify drug-associated risks; reassuring animal studies do not establish human safety. Prescription PI states that direct human milk/infant-effect/milk-production data for levocetirizine are absent, while cetirizine is reported in human milk, and recommends weighing breastfeeding benefits against maternal need and potential infant effects. Selected OTC labels instead state breastfeeding use is not recommended and advise pregnant users to ask a health professional. These are distinct product-label instructions, not a claim that every supervised lactation exposure is absolutely contraindicated.",
            "Current NIH LactMed (September 2025) separately summarizes limited measured human milk data, unlike the selected PI’s no-data statement, and considers levocetirizine potentially acceptable during breastfeeding. It cautions that larger doses or prolonged use may cause infant drowsiness/other effects or reduce milk supply, especially with pseudoephedrine or before lactation is established. Discuss this evidence-label difference with a clinician and monitor infant feeding/alertness and milk supply; it does not override OTC self-use instructions or establish zero risk."
          ],
          "sources": [
            "rx",
            "otct",
            "otcl",
            "lactmed"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "The active cetirizine enantiomer selectively inhibits H1 receptors.",
      "takeaway": "Kidney clearance is a stronger dosing determinant than its limited metabolism.",
      "blocks": [
        {
          "title": "Mechanism and clinical limits",
          "paragraphs": [
            "Levocetirizine is the pharmacologically active enantiomer of cetirizine. Selective H1-receptor inhibition explains antihistaminic symptom relief. In-vitro affinity comparisons do not establish a universal clinical superiority or justify exceeding labeled doses."
          ],
          "sources": [
            "rx"
          ]
        },
        {
          "title": "Absorption, distribution and elimination",
          "paragraphs": [
            "Adult tablet peak concentration occurs around 0.9 hour; solution peaks around 0.5 hour, and equal 5 mg doses are bioequivalent. Food delays tablet peak but does not reduce overall exposure. Protein binding is about 91–92%, adult half-life about 8–9 hours, and urinary elimination accounts for most administered drug/metabolites; glomerular filtration and tubular secretion are involved. Renal impairment increases exposure and half-life substantially."
          ],
          "sources": [
            "rx"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Confirm indication, age, product concentration, kidney function and duration of use.",
      "takeaway": "Discuss discontinuation itching before months of daily treatment accumulate.",
      "blocks": [
        {
          "title": "Monitoring and reassessment",
          "paragraphs": [
            "Assess symptom benefit, drowsiness/functional impairment, urinary emptying, medicines/alcohol and renal function when impairment or older age makes dose selection relevant. The labels do not require routine liver tests or a fixed universal laboratory interval. Reassess continued need during chronic treatment and discuss rare severe itching after discontinuation rather than implying an evidence-based home taper."
          ],
          "sources": [
            "rx",
            "fda"
          ]
        },
        {
          "title": "Patient and caregiver counseling",
          "paragraphs": [
            "Use the exact age/product dose, a calibrated liquid measure and the evening schedule. Do not give OTC products below their ages or self-use them with kidney disease. Seek urgent help for airway swelling/severe allergy or inability to urinate; obtain medical advice for severe itching after stopping. Suspected overdose requires poison-center/emergency guidance; adult drowsiness and initial pediatric agitation followed by drowsiness are reported, and no home dose-correction protocol is supplied."
          ],
          "sources": [
            "rx",
            "otct",
            "otcl",
            "fda"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Selected prescription and OTC products share the active ingredient but have different labeling.",
      "takeaway": "Confirm concentration, package eligibility and active ingredients before use.",
      "blocks": [
        {
          "title": "Representative products",
          "paragraphs": [
            "The reviewed prescription PI describes white oval scored 5 mg Xyzal tablets with red Y markings and clear/colorless 0.5 mg/mL solution. Its body retains legacy Sanofi NDCs 0024-5803-90 and 0024-5804-05, while current Chattem SPL package records list 41167-5803-9 and 41167-5804-5. Verify the actual dispensed package; legacy appearance/NDC text is not proof of present stock. Selected OTC Xyzal Allergy 24HR tablets and Children’s Xyzal Allergy solution have separate Drug Facts."
          ],
          "sources": [
            "rx",
            "otct",
            "otcl"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Selected tablets contain 5 mg levocetirizine dihydrochloride and can supply 2.5 mg as a scored half-tablet. Selected prescription/OTC solutions contain 2.5 mg/5 mL = 0.5 mg/mL: 1.25 mg = 2.5 mL, 2.5 mg = 5 mL, 5 mg = 10 mL. These are oral products; cetirizine and combination cold/allergy products are not interchangeable ingredient identities."
          ],
          "sources": [
            "rx",
            "otct",
            "otcl"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Reviewed Rx products store at 20–25°C (68–77°F), with excursions 15–30°C permitted. Selected OTC tablets/solution specify 20–25°C and intact safety seals; do not use torn/open blister units or damaged/missing bottle inner seals. OTC liquid specifies its enclosed cup. Check the actual package, secure medicines from children, and avoid measuring with household spoons."
          ],
          "sources": [
            "rx",
            "otct",
            "otcl"
          ]
        }
      ]
    }
  ]
};
