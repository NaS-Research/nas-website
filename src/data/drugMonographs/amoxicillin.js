// Original summaries of linked public sources; product-specific scope.
export const amoxicillin = {
  "slug": "amoxicillin",
  "name": "Amoxicillin",
  "synonym": "Aminopenicillin · Beta-lactam antibiotic",
  "description": "An oral penicillin for selected susceptible bacterial infections. This reference distinguishes routine infection dosing, renal adjustment, and label regimens that require current guideline review.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Check serious beta-lactam allergy and kidney function.",
    "text": "Serious allergic reactions, severe skin reactions, and drug-induced enterocolitis require prompt assessment and stopping treatment. Use an infection-specific regimen; 875 mg doses are unsuitable when GFR is below 30 mL/min.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Aminopenicillin antibiotic"
    ],
    [
      "Common name",
      "Amoxicillin"
    ],
    [
      "Reference focus",
      "Single-ingredient immediate-release oral forms"
    ]
  ],
  "sources": [
    {
      "id": "label",
      "title": "Amoxicillin · Prescribing information",
      "publisher": "DailyMed / Chartwell RX LLC",
      "note": "Current SPL version 3, effective September 25, 2026; published September 28, 2026. Selected single-ingredient capsules, tablets, chewables, and suspension.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b07b5ac4-253e-4c83-91c3-3fdc46e91a0f"
    },
    {
      "id": "cdc-strep",
      "title": "Group A streptococcal pharyngitis · Clinical guidance",
      "publisher": "Centers for Disease Control and Prevention",
      "note": "Current public clinical guidance accessed October 1, 2026; diagnosis and 10-day amoxicillin regimens.",
      "url": "https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html"
    },
    {
      "id": "acg",
      "title": "H. pylori treatment · 2024 guideline summary",
      "publisher": "American College of Gastroenterology",
      "note": "September 2024 official public summary of the ACG guideline; susceptibility-directed clarithromycin use and confirmation of eradication. Full paywalled guideline was not accessed.",
      "url": "https://gi.org/journals-publications/ebgi/schoenfeld_sep2024/"
    },
    {
      "id": "cdc-mec",
      "title": "Combined hormonal contraceptives · U.S. MEC 2024",
      "publisher": "Centers for Disease Control and Prevention",
      "note": "November 19, 2024 page; antimicrobial therapy classification for broad-spectrum antibiotics.",
      "url": "https://www.cdc.gov/contraception/hcp/usmec/combined-hormonal-contraceptives.html"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Selected infections caused by susceptible bacteria.",
      "takeaway": "Check the infection, likely organism, and current local guidance before choosing therapy.",
      "blocks": [
        {
          "title": "Labeled infections",
          "sources": [
            "label"
          ],
          "open": true,
          "paragraphs": [
            "The selected label covers ear, nose, and throat infections; genitourinary infections; skin and soft-tissue infections; and lower respiratory infections caused by specified susceptible, beta-lactamase-negative organisms. Organism coverage varies by site; amoxicillin is not reliable against beta-lactamase-producing isolates. Culture and susceptibility results should guide therapy when available."
          ]
        },
        {
          "title": "Streptococcal pharyngitis",
          "sources": [
            "cdc-strep"
          ],
          "paragraphs": [
            "CDC recommends antibiotics for confirmed group A streptococcal pharyngitis and lists amoxicillin as a preferred option. Do not treat viral pharyngitis with antibiotics."
          ]
        },
        {
          "title": "H. pylori and treatment selection",
          "sources": [
            "label",
            "acg"
          ],
          "paragraphs": [
            "Adult H. pylori-associated duodenal ulcer treatment is labeled with lansoprazole plus clarithromycin, or with lansoprazole alone when clarithromycin cannot be used. These older labeled combinations are not universal empiric choices. Current ACG guidance favors optimized bismuth quadruple therapy for empiric treatment and advises against clarithromycin triple therapy unless susceptibility is demonstrated; other guideline options also exist."
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Dose depends on infection, age, weight, severity, and renal function.",
      "takeaway": "Distinguish mg/kg per day from mg/kg per dose and verify suspension concentration.",
      "blocks": [
        {
          "title": "Labeled infection dosing from 12 weeks",
          "sources": [
            "label"
          ],
          "table": {
            "headers": [
              "Infection category",
              "Adults / children over 40 kg",
              "Children under 40 kg"
            ],
            "rows": [
              [
                "ENT, skin, or GU · mild/moderate",
                "500 mg every 12 hours OR 250 mg every 8 hours",
                "25 mg/kg/day divided every 12 hours OR 20 mg/kg/day divided every 8 hours"
              ],
              [
                "ENT, skin, or GU · severe; all lower respiratory",
                "875 mg every 12 hours OR 500 mg every 8 hours",
                "45 mg/kg/day divided every 12 hours OR 40 mg/kg/day divided every 8 hours"
              ]
            ]
          },
          "open": true,
          "paragraphs": [
            "These are selected label regimens, not a substitute for an infection-specific guideline. Take at the start of a meal to reduce gastrointestinal intolerance. The label table separates weights greater than and less than 40 kg; confirm the regimen at that boundary with the prescriber."
          ]
        },
        {
          "title": "Young infants and confirmed strep throat",
          "sources": [
            "label",
            "cdc-strep"
          ],
          "paragraphs": [
            "For infants younger than 12 weeks, the labeled upper dose is 30 mg/kg/day divided every 12 hours. The label does not establish a regimen for pediatric patients with impaired renal function.",
            "For confirmed group A streptococcal pharyngitis, CDC recommends 50 mg/kg once daily (maximum 1,000 mg) for 10 days, or 25 mg/kg per dose twice daily (maximum 500 mg per dose) for 10 days. These indication-specific doses differ from the general label table."
          ]
        },
        {
          "title": "Renal impairment",
          "sources": [
            "label"
          ],
          "table": {
            "headers": [
              "GFR / treatment",
              "Selected label recommendation"
            ],
            "rows": [
              [
                "Below 30 mL/min",
                "Do not use the 875 mg dose"
              ],
              [
                "10–30 mL/min",
                "250 or 500 mg every 12 hours, depending on severity"
              ],
              [
                "Below 10 mL/min",
                "250 or 500 mg every 24 hours, depending on severity"
              ],
              [
                "Hemodialysis",
                "250 or 500 mg every 24 hours; the label specifies an additional dose during and at the end of dialysis"
              ]
            ]
          },
          "paragraphs": [
            "This table applies to adults and pediatric patients aged at least 3 months weighing over 40 kg. Dialysis scheduling and pediatric renal dosing require individualized prescribing."
          ]
        },
        {
          "title": "Labeled adult H. pylori regimens",
          "sources": [
            "label",
            "acg"
          ],
          "table": {
            "headers": [
              "Combination",
              "Labeled 14-day regimen"
            ],
            "rows": [
              [
                "Triple therapy",
                "Amoxicillin 1 g + clarithromycin 500 mg + lansoprazole 30 mg, each twice daily"
              ],
              [
                "Dual therapy",
                "Amoxicillin 1 g + lansoprazole 30 mg, each three times daily"
              ]
            ]
          },
          "paragraphs": [
            "These describe the selected label, not a preferred empiric regimen. Consult current ACG guidance, resistance information, other product labels, and prior antibiotic exposure; use clarithromycin triple therapy only with demonstrated susceptibility. Confirm eradication at least 4 weeks after antibiotics and after withholding PPI/PCAB therapy for at least 2 weeks as directed."
          ]
        },
        {
          "title": "Suspension and course instructions",
          "sources": [
            "label",
            "cdc-strep"
          ],
          "paragraphs": [
            "A pharmacist should reconstitute the correct strength using its product-specific water volume. Shake well before each dose and measure with a calibrated device. Follow the prescribed infection-specific duration; confirmed group A strep requires 10 days. Do not save doses for another illness or double a missed dose."
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Allergy, severe skin reactions, enterocolitis, and antibiotic-associated diarrhea.",
      "takeaway": "Stop and seek prompt care for a serious reaction.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "sources": [
            "label"
          ],
          "open": true,
          "tone": "warning",
          "paragraphs": [
            "Anaphylaxis and other serious hypersensitivity reactions can occur. Stop treatment and obtain emergency care for breathing difficulty, swelling, or collapse. Severe cutaneous reactions include Stevens–Johnson syndrome, toxic epidermal necrolysis, DRESS, and acute generalized exanthematous pustulosis; stop and promptly assess a new or progressive rash, blistering, or mucosal lesions.",
            "Drug-induced enterocolitis syndrome can cause prolonged vomiting 1–4 hours after a dose, often without typical allergic skin or respiratory findings. Pallor, lethargy, hypotension or shock, and later diarrhea may occur. It is reported predominantly in children; discontinue and obtain urgent assessment.",
            "C. difficile-associated diarrhea can occur during treatment or more than 2 months afterward. Assess persistent watery or bloody diarrhea. Amoxicillin commonly causes a rash in infectious mononucleosis and should not be used in those patients.",
            "Use only for proven or strongly suspected susceptible bacterial infection. Unnecessary use promotes resistance and offers no benefit for viral illness."
          ]
        },
        {
          "title": "Contraindications",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "A history of a serious hypersensitivity reaction, such as anaphylaxis or Stevens–Johnson syndrome, to amoxicillin or another beta-lactam antibacterial, including penicillins or cephalosporins."
          ]
        },
        {
          "title": "Boxed warning status",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "The selected single-ingredient amoxicillin label has no boxed warning. Serious hypersensitivity, severe skin reactions, enterocolitis, and C. difficile diarrhea remain important warnings."
          ]
        },
        {
          "title": "Adverse reactions",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Frequently reported reactions include diarrhea, rash, vomiting, and nausea. Postmarketing reports include severe allergy and skin reactions, enterocolitis, hepatic dysfunction, blood-cell abnormalities, interstitial nephritis, and crystalluria. Voluntary reports cannot establish a reliable frequency or causal rate."
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Review anticoagulants, probenecid, allopurinol, and contraception advice.",
      "takeaway": "Reconcile older label statements with current guidance.",
      "blocks": [
        {
          "title": "Clinically relevant interactions",
          "sources": [
            "label"
          ],
          "table": {
            "headers": [
              "Medication / test",
              "Consideration"
            ],
            "rows": [
              [
                "Probenecid",
                "Reduces renal secretion and can raise/prolong amoxicillin levels; combined use is not recommended."
              ],
              [
                "Oral anticoagulants",
                "Abnormal INR increases have been reported; monitor and adjust anticoagulation when necessary."
              ],
              [
                "Allopurinol",
                "Increases the incidence of rash with amoxicillin."
              ],
              [
                "Bacteriostatic antibacterials",
                "In vitro antagonism is described; clinical significance is not well established."
              ],
              [
                "Urine glucose testing",
                "Copper-reduction tests may be falsely positive; use enzymatic glucose testing."
              ]
            ]
          },
          "open": true
        },
        {
          "title": "Hormonal contraception",
          "sources": [
            "label",
            "cdc-mec"
          ],
          "paragraphs": [
            "The selected label describes a possible effect on oral contraceptive efficacy through altered gut flora. Current CDC U.S. MEC classifies broad-spectrum antibiotics as category 1 for combined hormonal contraception and states that most do not reduce effectiveness of pills, patches, or rings. Do not assume routine backup is required solely because amoxicillin is prescribed; vomiting, diarrhea, and other interacting medicines need separate contraceptive advice."
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Young infants and impaired renal function need particular attention.",
      "takeaway": "Balance treatment need and patient-specific susceptibility to adverse effects.",
      "blocks": [
        {
          "title": "Pregnancy and lactation",
          "sources": [
            "label"
          ],
          "open": true,
          "paragraphs": [
            "Animal studies did not show fetal harm; adequate controlled studies in pregnant women are lacking in this label. Use when clinically needed after assessing the infection and treatment options.",
            "Penicillins enter human milk, with a potential for infant sensitization. Discuss maternal treatment need and breastfeeding; observe the infant for adverse reactions."
          ]
        },
        {
          "title": "Pediatric and geriatric use",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Young infants have immature renal function and a lower labeled upper dose. Safety and effectiveness for H. pylori treatment are not established in pediatric patients. Older adults may have reduced renal function; base dose selection on kidney function rather than age alone."
          ]
        },
        {
          "title": "Renal and hepatic considerations",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Amoxicillin is primarily eliminated by the kidney. Severe renal impairment requires the dose/interval changes above; pediatric renal regimens are not supplied by the selected label. The label provides no separate hepatic-impairment dosing regimen, so do not invent one."
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Bactericidal inhibition of bacterial cell-wall synthesis.",
      "takeaway": "Susceptibility and renal clearance determine clinical use.",
      "blocks": [
        {
          "title": "Mechanism of action",
          "sources": [
            "label"
          ],
          "open": true,
          "paragraphs": [
            "Amoxicillin inhibits bacterial cell-wall synthesis and is bactericidal against susceptible organisms. Beta-lactamases can inactivate it; a single-ingredient product does not provide the beta-lactamase inhibition of amoxicillin/clavulanate."
          ]
        },
        {
          "title": "Pharmacokinetics",
          "sources": [
            "label"
          ],
          "facts": [
            [
              "Oral absorption",
              "Peak levels typically within 1–2 hours"
            ],
            [
              "Protein binding",
              "Approximately 20%"
            ],
            [
              "Half-life",
              "About 61 minutes with normal renal function"
            ],
            [
              "Elimination",
              "Approximately 60% of an oral dose appears in urine within 6–8 hours; largely unchanged"
            ]
          ]
        },
        {
          "title": "Renal and dialysis effects",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Reduced renal clearance increases exposure and drives dose adjustment. Hemodialysis can remove amoxicillin. Doses from this immediate-release oral label should not be extrapolated to combination or extended-release products."
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Confirm the infection, response, allergy history, and dosing accuracy.",
      "takeaway": "Teach reaction warning signs and prescribe a defined course.",
      "blocks": [
        {
          "title": "Monitoring priorities",
          "sources": [
            "label",
            "acg"
          ],
          "open": true,
          "paragraphs": [
            "Check prior serious beta-lactam reactions and renal function before selecting the regimen. Reassess clinical response, susceptibility results when available, and severe or persistent diarrhea. Monitor INR when oral anticoagulants are used. Assess H. pylori eradication with the guideline-directed test and timing."
          ]
        },
        {
          "title": "Patient counseling",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Take the prescribed dose and course for the current infection. Take at the beginning of a meal, shake liquid thoroughly, and check mg per 5 mL before measuring. Seek emergency help for anaphylaxis and prompt assessment for rash, prolonged vomiting after a dose, or severe diarrhea. Do not use leftover antibiotics for a cold."
          ]
        },
        {
          "title": "Overdose",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Seek medical or poison-center advice. Excess dosing can cause crystalluria or interstitial nephritis with renal impairment. Stop treatment and provide clinician-directed supportive care; maintaining hydration and urine output may help reduce crystalluria. Hemodialysis can remove the drug."
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "One selected immediate-release product family.",
      "takeaway": "Use the dispensing label for identification and reconstituted-liquid expiry.",
      "blocks": [
        {
          "title": "Representative product",
          "sources": [
            "label"
          ],
          "facts": [
            [
              "Selected product",
              "Amoxicillin 500 mg capsules · Chartwell RX LLC label"
            ],
            [
              "Appearance",
              "Opaque buff cap and body"
            ],
            [
              "Imprint",
              "TEVA on cap; 3109 on body"
            ],
            [
              "Example NDC",
              "62135-083-20 · bottle of 20"
            ]
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "The selected label includes capsules 250 mg and 500 mg; tablets 500 mg and 875 mg; chewables 125 mg and 250 mg; and suspension 125, 200, 250, or 400 mg per 5 mL. These are single-ingredient oral forms; other manufacturers and amoxicillin/clavulanate products differ."
          ]
        },
        {
          "title": "Storage and handling",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Store dry products at 20–25°C in a tight, light-resistant container with child-resistant closure. Keep reconstituted suspension tightly closed, shake before use, and discard after 14 days. Refrigeration is preferable but is not required by this selected label."
          ]
        }
      ]
    }
  ]
};
