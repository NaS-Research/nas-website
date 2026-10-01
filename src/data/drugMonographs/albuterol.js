// Original focused summaries; product-specific directions are not interchangeable.
export const albuterol = {
  "slug": "albuterol",
  "name": "Albuterol",
  "synonym": "Salbutamol · Ventolin HFA",
  "description": "A short-acting beta₂ agonist for bronchospasm. This reference focuses on Ventolin HFA, with device-specific directions and separate asthma guideline context.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Increasing rescue use needs reassessment.",
    "text": "Seek immediate medical attention when relief decreases, symptoms worsen, or doses are needed more often. Stop the inhaler and obtain urgent treatment if breathing worsens immediately after a dose.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Short-acting beta₂ agonist"
    ],
    [
      "Common brand",
      "Ventolin HFA"
    ],
    [
      "Reference focus",
      "90 mcg albuterol base per inhalation"
    ]
  ],
  "sources": [
    {
      "id": "label",
      "title": "Ventolin HFA · Prescribing information and instructions",
      "publisher": "DailyMed / GlaxoSmithKline",
      "note": "SPL version 30, effective April 26, 2024; prescribing information and device instructions revised April 2024. Product dosing, safety, populations, pharmacology, and device handling.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d92c5d6b-ff10-4087-36a2-1cfc464cb967"
    },
    {
      "id": "gina",
      "title": "GINA 2026 · Summary Guide",
      "publisher": "Global Initiative for Asthma",
      "note": "Asthma treatment context for adults, adolescents and children aged 6–11; printed pages 21–28. Recommendations require local regulatory review.",
      "url": "https://ginasthma.org/wp-content/uploads/2026/07/GINA-Summary-Guide-2026-WEB-WMS.pdf"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Relief and prevention of bronchospasm.",
      "takeaway": "Bronchodilation does not replace asthma anti-inflammatory treatment.",
      "blocks": [
        {
          "title": "Labeled inhaled indications",
          "sources": [
            "label"
          ],
          "open": true,
          "paragraphs": [
            "Ventolin HFA treats or prevents bronchospasm in reversible obstructive airway disease and prevents exercise-induced bronchospasm in adults and children aged 4 years and older."
          ]
        },
        {
          "title": "Asthma guideline context",
          "sources": [
            "gina",
            "label"
          ],
          "paragraphs": [
            "GINA 2026 recommends ICS-containing treatment rather than SABA alone for adults, adolescents and children aged 6–11. Its preferred adult/adolescent reliever is low-dose ICS-formoterol. Albuterol remains a reliever in alternative regimens with ICS coverage; guideline recommendations do not extend Ventolin’s product approval."
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Use the exact inhaler and prescribed plan.",
      "takeaway": "Routine label directions are not an acute-care exacerbation protocol.",
      "blocks": [
        {
          "title": "Ventolin HFA · Oral inhalation",
          "sources": [
            "label"
          ],
          "open": true,
          "badge": "Age 4 years and older",
          "table": {
            "headers": [
              "Use",
              "Product directions"
            ],
            "rows": [
              [
                "Bronchospasm",
                "2 inhalations every 4–6 hours; 1 every 4 hours may suffice in some patients."
              ],
              [
                "Before exercise",
                "2 inhalations 15–30 minutes before exercise."
              ],
              [
                "Dose escalation",
                "More inhalations or shorter intervals are not recommended by this routine label."
              ]
            ]
          }
        },
        {
          "title": "Priming and administration",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Shake well before every spray. Prime with four sprays away from the face before first use, after more than two weeks without use, or after dropping. Follow the illustrated inhalation instructions; wait one minute between prescribed puffs."
          ]
        },
        {
          "title": "Formulation and organ-function limits",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Nebulized solutions, dry-powder devices and oral products require their own labels; no dose conversion is supplied here. The Ventolin HFA label specifies no renal or hepatic adjustment regimen and provides no dedicated impairment pharmacokinetic study; individualize treatment rather than infer a universal adjustment."
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Recognize worsening asthma and systemic beta-agonist effects.",
      "takeaway": "Paradoxical bronchospasm requires stopping treatment and alternative therapy.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "sources": [
            "label"
          ],
          "open": true,
          "tone": "warning",
          "paragraphs": [
            "Immediate worsening of bronchospasm can be life-threatening. Increasing use signals deteriorating control; excessive sympathomimetic use has been associated with fatalities. Cardiovascular effects and transient hypokalemia may occur. Use cautiously with coronary disease, arrhythmias, hypertension, seizures, hyperthyroidism or diabetes."
          ]
        },
        {
          "title": "Contraindications",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "History of hypersensitivity to any Ventolin HFA ingredient. Stop and obtain urgent assessment for angioedema, anaphylaxis or other immediate allergic reactions."
          ]
        },
        {
          "title": "Boxed warning status · Ventolin HFA",
          "paragraphs": [
            "The selected Ventolin HFA prescribing information has no boxed warning. Its warnings still include potentially fatal paradoxical bronchospasm, excessive sympathomimetic use, and worsening asthma that requires reassessment."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Adverse reactions",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Throat irritation, cough and respiratory infections were reported in trials. Palpitations, tachycardia, tremor and nervousness can occur; postmarketing reports include arrhythmias and metabolic acidosis. Trial rates and voluntary reports do not establish an individual patient’s risk.",
            "Excess albuterol can cause marked tachycardia, arrhythmias, seizures, potassium or glucose disturbances, and cardiac arrest. Obtain urgent medical assessment; stop further doses pending emergency guidance. Treatment is supportive; dialysis benefit is not established."
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Review medicines that affect airway response and cardiovascular risk.",
      "takeaway": "Do not add another sympathomimetic rescue medicine without clinical review.",
      "blocks": [
        {
          "title": "Clinically relevant interactions",
          "sources": [
            "label"
          ],
          "open": true,
          "items": [
            "Other short-acting sympathomimetic aerosol bronchodilators: avoid concomitant use; use additional adrenergic medicines cautiously.",
            "Beta-blockers may prevent bronchodilation and provoke severe bronchospasm. If essential, a cardioselective agent may be considered cautiously.",
            "Loop/thiazide diuretics may worsen hypokalemia or ECG effects; assess risk and potassium when appropriate.",
            "Digoxin concentrations may decrease; consider level monitoring.",
            "MAO inhibitors or tricyclic antidepressants, including within two weeks of stopping: extreme caution because vascular effects may increase."
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Assess asthma control, age and maternal needs.",
      "takeaway": "Avoid equating absent pregnancy or milk data with proven safety.",
      "blocks": [
        {
          "title": "Pregnancy",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Available human observations do not consistently show increased major birth defects or miscarriage, but cannot exclude risk. Poorly controlled asthma poses maternal and fetal risks; monitor and adjust therapy. Use during labor only when benefit outweighs risk; Ventolin is not approved for preterm labor."
          ]
        },
        {
          "title": "Lactation",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Human milk, infant-effect and milk-production data are unavailable. Low maternal plasma concentrations after inhalation suggest low milk exposure if present; weigh breastfeeding benefits and maternal treatment needs."
          ]
        },
        {
          "title": "Pediatric and geriatric considerations",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Safety and effectiveness below age 4 are not established for Ventolin HFA. Evidence in adults aged 65 and older is limited; select doses cautiously in view of organ function, cardiac disease and other medicines."
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Beta₂ stimulation relaxes airway smooth muscle.",
      "takeaway": "A preferential beta₂ effect does not eliminate cardiac effects.",
      "blocks": [
        {
          "title": "Mechanism of action and pharmacodynamics",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Beta₂ receptor activation increases cyclic AMP, reducing contractile signaling in airway smooth muscle. The label describes symptomatic action lasting up to 4–6 hours."
          ]
        },
        {
          "title": "Pharmacokinetics",
          "sources": [
            "label"
          ],
          "facts": [
            [
              "Systemic exposure",
              "Low after recommended inhaled doses."
            ],
            [
              "Half-life",
              "Apparent terminal plasma half-life approximately 4.6 hours."
            ],
            [
              "Evidence limits",
              "No further Ventolin HFA PK trials in neonates, children or older adults; inhalation PK does not define other routes."
            ]
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Check response, technique and rescue frequency.",
      "takeaway": "A working device and written asthma plan are essential.",
      "blocks": [
        {
          "title": "Monitoring parameters",
          "sources": [
            "label",
            "gina"
          ],
          "open": true,
          "items": [
            "Assess symptom relief, nocturnal symptoms and increasing rescue use; arrange immediate assessment if efficacy falls or breathing worsens.",
            "Observe inhaler technique and adherence to prescribed anti-inflammatory therapy.",
            "Assess pulse, blood pressure and symptomatic cardiac effects; check potassium when risk or concomitant medicines warrant."
          ]
        },
        {
          "title": "Patient counseling information",
          "sources": [
            "label"
          ],
          "items": [
            "Use only the prescribed inhalations; do not independently increase frequency.",
            "Remove the canister and wash the plastic actuator weekly with warm water; air-dry overnight. After reassembly, shake and spray once away from the face before use. Follow the illustrated instructions for cleaning and any urgent use before drying.",
            "Order a replacement when the counter shows 020; discard at 000. Do not use past the expiration date printed on the packaging.",
            "Use the matched actuator and canister. Read the full instructions with a clinician and follow the asthma action plan."
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Confirm Ventolin’s strength, counter and matched components.",
      "takeaway": "Instructions differ across albuterol devices.",
      "blocks": [
        {
          "title": "Representative inhaler · Ventolin HFA",
          "sources": [
            "label"
          ],
          "open": true,
          "facts": [
            [
              "Strength",
              "108 mcg albuterol sulfate = 90 mcg albuterol base per actuation."
            ],
            [
              "Appearance",
              "Pressurized canister; blue actuator and blue mouthpiece cap; dose counter."
            ],
            [
              "Packager",
              "GlaxoSmithKline LLC"
            ],
            [
              "Example NDC",
              "0173-0682-20 · 200 actuations; 0173-0682-24 · 60 actuations."
            ],
            [
              "U.S. status",
              "Prescription medicine; New Drug Application labeling."
            ]
          ],
          "links": [
            {
              "title": "View exact label and package images",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d92c5d6b-ff10-4087-36a2-1cfc464cb967"
            }
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "facts": [
            [
              "Ventolin HFA",
              "Metered aerosol;90 mcg albuterol base (108 mcg sulfate) per actuation."
            ],
            [
              "Other albuterol formulations",
              "Nebulizer solutions, other inhalers and oral products have their own labels; no dosing conversion is provided here."
            ]
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Storage and handling",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Store mouthpiece down at 20–25°C, with permitted excursions to 15–30°C; bring to room temperature before use. The pressurized canister must not be punctured, burned or exposed to heat/open flame; temperatures above 120°F can cause bursting. Keep away from children."
          ]
        }
      ]
    }
  ]
};
