// Original summaries of verified product-specific public references.
export const thiamine = {
  "slug": "thiamine",
  "name": "Thiamine",
  "synonym": "Vitamin B1 · thiamine hydrochloride",
  "description": "An essential vitamin used to correct deficiency. Prescription injection, oral nutritional supplements, alcohol-withdrawal prevention and emergency Wernicke treatment have distinct evidence and dosing scopes.",
  "checked": "2026-10-01",
  "facts": [
    [
      "Therapeutic class",
      "Water-soluble B vitamin"
    ],
    [
      "Representative product",
      "Avet · 100 mg/mL injection"
    ],
    [
      "Reference focus",
      "Deficiency treatment and guideline distinctions"
    ]
  ],
  "essential": {
    "title": "Suspected Wernicke encephalopathy needs urgent parenteral treatment.",
    "text": "Confusion, impaired eye movements or unsteady gait in a person at risk require immediate hospital evaluation; oral nutrition targets and withdrawal-prevention doses are not an acute treatment regimen. Parenteral thiamine can cause anaphylaxis and requires trained staff with emergency treatment available.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "sources": [
    {
      "id": "thiaminj",
      "title": "Avet · prescription thiamine hydrochloride injection",
      "publisher": "DailyMed / National Library of Medicine",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=764d608a-d821-4447-85e1-6af297abb4c1",
      "note": "Full public manufacturer label and patient instructions; SPL version 2, effective 20260731. Product-specific directions reviewed October 1, 2026."
    },
    {
      "id": "ods",
      "title": "NIH ODS · thiamin nutrition and safety",
      "publisher": "NIH Office of Dietary Supplements",
      "url": "https://ods.od.nih.gov/factsheets/Thiamin-HealthProfessional/",
      "note": "Full relevant public web sections and nutrient table reviewed October 1, 2026; unsuccessful direct local retrieval recorded. Nutrition targets are separate from emergency treatment."
    },
    {
      "id": "fda",
      "title": "FDA · dietary supplement regulation",
      "publisher": "U.S. FDA",
      "url": "https://www.fda.gov/food/dietary-supplements/information-consumers-using-dietary-supplements",
      "note": "Full current public explanation retrieved October 1, 2026; no supplement premarket safety/effectiveness approval."
    },
    {
      "id": "asam",
      "title": "ASAM · Alcohol Withdrawal Management guideline",
      "publisher": "American Society of Addiction Medicine",
      "url": "https://downloads.asam.org/sitefinity-production-blobs/docs/default-source/quality-science/the_asam_clinical_practice_guideline_on_alcohol-1.pdf",
      "note": "Full public 2020 guideline, adopted January 23, 2020; relevant IV.9 and V.7–V.10 recommendations/discussion reviewed. Prevention during withdrawal, not an acute Wernicke treatment standard."
    },
    {
      "id": "dhsc",
      "title": "DHSC · current hospital Wernicke guidance",
      "publisher": "UK Department of Health and Social Care",
      "url": "https://www.gov.uk/guidance/clinical-guidelines-for-alcohol-treatment/16-alcohol-care-in-acute-hospitals",
      "note": "Final government guidance published November 28, 2025, manual updated April 17, 2026; full section16.9.4 reviewed. Adult alcohol-care clinical guidance, distinct from U.S. labeling."
    },
    {
      "id": "ANDA217181",
      "title": "FDA · ANDA217181 current product status",
      "publisher": "U.S. FDA",
      "url": "https://api.fda.gov/drug/drugsfda.json?search=application_number:ANDA217181&limit=1",
      "note": "Current official record checked October 1, 2026; status does not establish local stock."
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Correct deficiency and distinguish preventive from emergency use.",
      "takeaway": "Prescription injection and dietary supplements have different regulatory status.",
      "blocks": [
        {
          "title": "Labeled injection indications",
          "paragraphs": [
            "Treatment of thiamine deficiency/beriberi, including dry neurologic and wet cardiovascular presentations; rapid restoration in Wernicke encephalopathy, infantile collapse, deficiency-related cardiac disease or severe pregnancy neuritis/vomiting. Also indicated when established deficiency prevents adequate oral use, and with IV dextrose in marginal status to avoid precipitating heart failure. Isolated thiamine injection is not usually indicated for general poor intake/malabsorption, where multiple deficiencies need review."
          ],
          "sources": [
            "thiaminj"
          ],
          "open": true
        },
        {
          "title": "Guideline and oral nutritional scope",
          "paragraphs": [
            "ASAM recommends thiamine to prevent Wernicke encephalopathy during alcohol withdrawal. Suspected established disease requires a separate hospital regimen. Oral vitamin B1 supplements provide nutrition and are not FDA-preapproved drugs for safety/effectiveness; the selected injection is a current FDA Prescription product. This profile excludes veterinary products, benfotiamine substitution and unverified multivitamin emergency regimens."
          ],
          "sources": [
            "asam",
            "dhsc",
            "fda",
            "ANDA217181"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Choose a regimen for the diagnosis, route and clinical setting.",
      "takeaway": "Do not use the legacy low-dose Wernicke label as a universal modern emergency protocol.",
      "blocks": [
        {
          "title": "Current injection-label deficiency regimens",
          "paragraphs": [
            "Beriberi: 10–20 mg IM three times daily for up to 2 weeks, then an oral therapeutic multivitamin containing 5–10 mg thiamine daily for 1 month. Wet beriberi with myocardial failure is an emergency requiring slow IV treatment. Infantile collapse: label permits cautiously giving 25 mg IV; this is not a complete age-based pediatric algorithm. Pregnancy neuritis with severe vomiting: 5–10 mg IM daily. For marginal status with dextrose, the PI describes 100 mg in each of the first few liters of IV fluid. These instructions require professional assessment and monitored administration."
          ],
          "sources": [
            "thiaminj"
          ],
          "open": true
        },
        {
          "title": "Wernicke treatment · label provenance versus current clinical guidance",
          "paragraphs": [
            "The current Avet PI retains historical Wernicke-Korsakoff directions: 100 mg IV initially, then 50–100 mg IM daily until a balanced diet. Current DHSC adult hospital guidance for suspected/established Wernicke instead recommends 300–500 mg IV three times daily for 3–5 days with daily review; if still symptomatic after 5 days, 300–500 mg IV once daily for a further 3–5 days and while improvement continues, followed by oral thiamine. Check/correct magnesium and investigate other causes of confusion. This guideline regimen differs from U.S. PI dosing and requires an appropriate local preparation/infusion protocol; neither a universal bolus rate nor dilution recipe is invented. The PI’s old claim that > 30 mg three times daily is not efficiently used is not a modern emergency-treatment ceiling."
          ],
          "sources": [
            "thiaminj",
            "dhsc"
          ]
        },
        {
          "title": "Alcohol-withdrawal prevention · separate from acute treatment",
          "paragraphs": [
            "ASAM: typical ambulatory oral dose 100 mg daily for 3–5 days; inpatient prevention typically 100 mg IV/IM daily for 3–5 days, favoring parenteral delivery with malnutrition, malabsorption or severe withdrawal complications. Glucose and thiamine can be given in either order or concurrently; do not delay urgent glucose. Current DHSC high-risk adult hospital prophylaxis is 200–300 mg IM/IV daily for 3–5 days with daily review and subsequent oral treatment. These are distinct prevention recommendations; new Wernicke signs require the full treatment pathway."
          ],
          "sources": [
            "asam",
            "dhsc"
          ]
        },
        {
          "title": "Nutritional requirements and administration",
          "paragraphs": [
            "Daily RDA/AI in mg: birth–6 months 0.2 AI; 7–12 months 0.3 AI; ages 1–3: 0.5, 4–8: 0.6, 9–13: 0.9; ages 14–18 male 1.2/female 1.0; adults male 1.2/female 1.1; pregnancy/lactation 1.4. These are nutrition totals, not deficiency or emergency doses. Selected injection is IM or slow IV; inspect solution and seal before use. The PI supplies no numeric IV speed or fixed renal/hepatic adjustment, so consult the exact product and institutional preparation directions."
          ],
          "sources": [
            "ods",
            "thiaminj"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Anaphylaxis and delayed treatment are the critical immediate hazards.",
      "takeaway": "Nutritional water solubility does not remove injection risk.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Serious hypersensitivity/anaphylaxis, collapse and death have followed IV or IM doses, especially repeated injections. Have emergency treatment available and observe appropriately; screening/skin testing cannot exclude all risk. For suspected previous allergy the PI describes clinician-performed testing and at least 30-minute observations, not a home procedure; positive responders must not receive injection. Aluminum exposure can accumulate with prolonged parenteral use in renal impairment, especially premature neonates, causing CNS/bone toxicity. Suspected Wernicke disease needs urgent hospital parenteral treatment; do not substitute ordinary oral supplements. Assess other nutrient deficiencies and magnesium as clinically indicated."
          ],
          "sources": [
            "thiaminj",
            "dhsc",
            "asam"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "History of sensitivity to thiamine or any selected injection ingredient. Excipients matter: Avet contains chlorobutanol and monothioglycerol. Other brands may differ; vitamin status does not waive ingredient allergy."
          ],
          "sources": [
            "thiaminj"
          ]
        },
        {
          "title": "Boxed warning status",
          "paragraphs": [
            "Selected current Avet PI has no boxed warning. Its prominent aluminum warning and potentially fatal parenteral anaphylaxis remain important labeled risks; do not describe all vitamin products as uniformly harmless."
          ],
          "sources": [
            "thiaminj"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Reported effects include warmth, itching/urticaria, sweating, nausea, weakness, restlessness, throat tightness, angioedema, cyanosis, pulmonary edema and severe anaphylaxis/collapse; IM tenderness/induration can occur. Incidence is not established. Overdose or an administration error requires medical assessment; historical reports of tolerating large doses do not guarantee safety or eliminate hypersensitivity."
          ],
          "sources": [
            "thiaminj"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Some medicines change nutritional status rather than directly block replacement.",
      "takeaway": "Glucose timing is not a reason to defer urgent treatment.",
      "blocks": [
        {
          "title": "Medication and metabolic review",
          "paragraphs": [
            "NIH identifies furosemide-associated urinary thiamine loss and fluorouracil-associated deficiency reports; assess nutrition rather than prescribe an automatic interaction correction. The selected PI has no comprehensive CYP interaction table. During withdrawal, ASAM permits thiamine and glucose in either order or concurrently; magnesium replacement is indicated with hypomagnesemia and other specified clinical risks. For injection admixtures, verify compatibility in the institutional protocol rather than infer it from oral-vitamin use."
          ],
          "sources": [
            "ods",
            "thiaminj",
            "asam"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Route, maternal need and excipient exposure determine suitability.",
      "takeaway": "No universal age-only or eGFR-based replacement formula is supplied.",
      "blocks": [
        {
          "title": "Pregnancy and lactation",
          "paragraphs": [
            "The PI describes pregnancy use when clearly needed and a specific severe-vomiting neuritis regimen; its legacy pregnancy letter category is not a modern quantitative safety guarantee. The label states milk-excretion information is unknown and advises caution. Assess deficiency, maternal need and infant exposure rather than applying nutrient requirements as a disease-treatment ceiling."
          ],
          "sources": [
            "thiaminj"
          ]
        },
        {
          "title": "Pediatric and geriatric considerations",
          "paragraphs": [
            "The label describes infantile beriberi/collapse but does not provide a comprehensive pediatric dose table or age-specific Wernicke regimen. Adults’ withdrawal/emergency guidelines are not pediatric prescriptions. Premature infants have heightened aluminum accumulation risk; older adults require review of nutrition, organ function and allergy history rather than a fixed age dose."
          ],
          "sources": [
            "thiaminj"
          ]
        },
        {
          "title": "Renal and hepatic impairment",
          "paragraphs": [
            "No labeled numeric dose-adjustment algorithm. Renal impairment raises concern for parenteral aluminum accumulation; review cumulative sources and exposure duration. Hepatic disease can coexist with severe nutritional deficiency and alcohol-related risk, requiring clinical replacement assessment rather than unverified dose reduction."
          ],
          "sources": [
            "thiaminj"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Thiamine pyrophosphate is a coenzyme in energy metabolism.",
      "takeaway": "Limited body stores require continuing adequate intake.",
      "blocks": [
        {
          "title": "Mechanism and disposition",
          "paragraphs": [
            "Thiamine combines with ATP to form active thiamine pyrophosphate, involved in carbohydrate metabolism. IM absorption is described as rapid and complete; thiamine distributes widely, with high tissue concentrations in liver, brain, kidneys and heart. Excess is excreted through the kidneys. The selected PI supplies no validated numeric terminal half-life, protein-binding value or oral-to-parenteral conversion; no such estimate is invented."
          ],
          "sources": [
            "thiaminj"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Assess neurologic response, cardiac status and nutritional recovery.",
      "takeaway": "Emergency treatment requires anaphylaxis-capable care.",
      "blocks": [
        {
          "title": "Monitoring priorities",
          "paragraphs": [
            "Assess confusion, eye movements, gait, cardiac failure and intake/malabsorption; urgent suspected Wernicke treatment should not await an unneeded routine lab panel. During hospital treatment review response daily, electrolytes/magnesium and alternate causes of persistent symptoms. Watch injection hypersensitivity and site effects; assess renal function/cumulative aluminum with prolonged parenteral exposure. Arrange continued oral nutrition and follow-up."
          ],
          "sources": [
            "thiaminj",
            "dhsc",
            "asam"
          ]
        },
        {
          "title": "Patient counseling",
          "paragraphs": [
            "Maintain a balanced diet and follow the prescribed replacement course to reduce relapse. Oral tablets are not an emergency substitute for confusion, eye-movement abnormalities or marked unsteadiness. Injection-related throat swelling, breathing difficulty or collapse requires immediate care. Review other vitamin products and medicines with the team; do not self-inject or use veterinary preparations."
          ],
          "sources": [
            "thiaminj"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Verify concentration, excipients and route on the exact injection.",
      "takeaway": "Supplement serving sizes are separate from approved injection directions.",
      "blocks": [
        {
          "title": "Representative product",
          "paragraphs": [
            "Avet thiamine hydrochloride injection 100 mg/mL; 2 mL multidose vial contains 200 mg, NDC23155-933-31. Contains chlorobutanol 0.5% and monothioglycerol 0.5%; approved for IM or slow IV administration. The vial total is not a universal patient dose."
          ],
          "sources": [
            "thiaminj"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Selected Avet injectable is 100 mg/mL in 2 mL vials, current ANDA217181 Prescription. Oral supplements commonly use thiamine hydrochloride or mononitrate with product-specific strengths/servings; no claim that every oral supplement has FDA drug approval. Benfotiamine and combination multivitamin injections are outside executable dosing scope."
          ],
          "sources": [
            "thiaminj",
            "ANDA217181",
            "ods",
            "fda"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Store selected injection at 20–25°C and protect from light. Use only clear solution with intact seal; inspect for particles/discoloration. Use aseptic multidose handling under institutional standards; the PI does not establish an exact post-puncture discard interval, so do not invent one. Oral products follow their own packaging/storage instructions."
          ],
          "sources": [
            "thiaminj"
          ]
        }
      ]
    }
  ]
};
