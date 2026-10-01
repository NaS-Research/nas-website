// Original clinical summaries checked against the product-specific public sources below.
export const cefdinir = {
  "slug": "cefdinir",
  "name": "Cefdinir",
  "synonym": "Generic oral cephalosporin",
  "description": "Prescription oral cephalosporin for selected susceptible respiratory, ear, throat and skin infections, with indication-specific courses and renal dose reductions.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Allergy and severe diarrhea require action",
    "text": "Known cephalosporin allergy contraindicates treatment. Seek prompt care for watery/bloody diarrhea even after therapy, and verify renal dosing plus iron/antacid spacing.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Class",
      "Oral cephalosporin antibacterial"
    ],
    [
      "Usual daily ceiling",
      "Adult 600 mg; pediatric 14 mg/kg up to 600 mg"
    ],
    [
      "Key interaction",
      "Separate iron/Mg–Al antacids by 2 hours"
    ]
  ],
  "sources": [
    {
      "id": "capsule",
      "title": "Cefdinir capsules · Current full label",
      "publisher": "Lupin / DailyMed",
      "note": "Clinical June 2024; current SPL 7 effective October 14, 2025. Adult table has shifted infection/alternative rows; coherent comparator verified.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cb7366ce-1778-451f-aba5-65cf73c9b87a"
    },
    {
      "id": "liquid",
      "title": "Cefdinir oral suspension · Current full label",
      "publisher": "Lupin / DailyMed",
      "note": "Current SPL 9 effective September 23, 2025; 125 and 250 mg/5 mL pediatric products.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7490df67-56c0-4a1c-8533-2107f3e8aea5"
    },
    {
      "id": "comparator",
      "title": "Cefdinir capsules · Coherent adult/pediatric dose table",
      "publisher": "AvKARE / Teva source label / DailyMed",
      "note": "Current SPL 2 effective January 13, 2026; actual table row spans and complete clinical text checked.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1acc5d17-10a4-e23d-e063-6394a90a52c3"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Cefdinir is a prescription oral cephalosporin for selected susceptible bacterial infections.",
      "takeaway": "Approved indication does not establish universal first-line treatment.",
      "blocks": [
        {
          "title": "Adults and adolescents",
          "paragraphs": [
            "Selected mild/moderate indications include community-acquired pneumonia, acute bacterial exacerbation of chronic bronchitis, acute maxillary sinusitis, streptococcal pharyngitis/tonsillitis and uncomplicated skin/skin-structure infections. Relevant organisms include susceptible H. influenzae/H. parainfluenzae, M. catarrhalis, penicillin-susceptible S. pneumoniae, S. pyogenes and methicillin-susceptible S. aureus according to the indication. Do not generalize each organism to every infection."
          ],
          "sources": [
            "capsule",
            "liquid"
          ]
        },
        {
          "title": "Children and evidence limits",
          "paragraphs": [
            "Pediatric uses from age 6 months include acute bacterial otitis media, acute maxillary sinusitis, S. pyogenes pharyngitis/tonsillitis and uncomplicated susceptible skin infections. Pediatric sinusitis approval is supported by adult evidence and pediatric PK; neonatal/younger-infant safety/effectiveness are not established. Cefdinir eradicates pharyngeal S. pyogenes, but prevention of rheumatic fever has not been studied."
          ],
          "sources": [
            "capsule",
            "liquid"
          ]
        },
        {
          "title": "Spectrum and stewardship",
          "paragraphs": [
            "Use for proven or strongly suspected susceptible bacterial infection and reassess available cultures/local resistance. It does not treat viral colds. Most Pseudomonas, Enterococcus, Enterobacter, MRSA and penicillin-resistant streptococcal strains are not covered. In-vitro activity against some urinary organisms does not establish a UTI approval, and human CSF penetration is unstudied; no UTI or meningitis regimen is supplied."
          ],
          "sources": [
            "capsule",
            "liquid"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Usual total dosing differs by age, infection and renal function.",
      "takeaway": "Once-daily dosing is not labeled for pneumonia or skin infection.",
      "blocks": [
        {
          "title": "Adult and adolescent schedules",
          "paragraphs": [
            "Usual total is 600 mg/day for adults/adolescents age 13 and older with normal renal function. The schedules below are from the coherent current comparator; the selected Lupin adult table shifts some infection names onto alternative-dose rows, while its prose explicitly requires twice-daily dosing for pneumonia/skin infection. Both sources are retained rather than propagate a once-daily skin regimen. Doses may be taken without regard to meals."
          ],
          "sources": [
            "capsule",
            "comparator"
          ],
          "table": {
            "headers": [
              "Adult/adolescent indication",
              "Oral dose and label duration"
            ],
            "rows": [
              [
                "Community-acquired pneumonia",
                "300 mg every 12 hours for 10 days"
              ],
              [
                "Acute exacerbation of chronic bronchitis",
                "300 mg every 12 hours for 5–10 days OR 600 mg every 24 hours for 10 days"
              ],
              [
                "Acute maxillary sinusitis",
                "300 mg every 12 hours OR 600 mg every 24 hours, each for 10 days"
              ],
              [
                "Pharyngitis/tonsillitis",
                "300 mg every 12 hours for 5–10 days OR 600 mg every 24 hours for 10 days"
              ],
              [
                "Uncomplicated skin/skin-structure infection",
                "300 mg every 12 hours for 10 days"
              ]
            ]
          }
        },
        {
          "title": "Pediatric schedules",
          "paragraphs": [
            "For ages 6 months through 12 years with normal renal function, usual total is 14 mg/kg/day, maximum 600 mg/day. Twice-daily means 7 mg/kg PERDOSE every 12 hours; once-daily means 14 mg/kg PERDOSE every 24 hours. Children ≥ 43 kg receive the 600 mg/day ceiling. Select frequency/duration by indication, not a universal interchangeable course."
          ],
          "sources": [
            "liquid",
            "comparator"
          ],
          "table": {
            "headers": [
              "Pediatric indication",
              "Per-dose regimen and label duration"
            ],
            "rows": [
              [
                "Acute bacterial otitis media",
                "7 mg/kg every 12 hours for 5–10 days OR 14 mg/kg every 24 hours for 10 days"
              ],
              [
                "Acute maxillary sinusitis",
                "7 mg/kg every 12 hours OR 14 mg/kg every 24 hours, each for 10 days"
              ],
              [
                "Pharyngitis/tonsillitis",
                "7 mg/kg every 12 hours for 5–10 days OR 14 mg/kg every 24 hours for 10 days"
              ],
              [
                "Uncomplicated skin infection",
                "7 mg/kg every 12 hours for 10 days; no once-daily regimen"
              ]
            ]
          }
        },
        {
          "title": "Renal impairment and hemodialysis",
          "paragraphs": [
            "At adult CrCl < 30 mL/min, dose 300 mg once daily. At pediatric estimated clearance < 30 mL/min/1.73 m², dose 7 mg/kg once daily, maximum 300 mg. Chronic hemodialysis labeling starts 300 mg or 7 mg/kg every other day, gives 300 mg or 7 mg/kg at the end of each session, then resumes every-other-day dosing. Dialysis timing must be coordinated with the prescriber/pharmacist; do not add unscheduled doses to an unchanged routine regimen. The pediatric renal value is indexed, unlike the adult CrCl threshold."
          ],
          "sources": [
            "capsule",
            "liquid"
          ]
        },
        {
          "title": "Suspension concentration and preparation",
          "paragraphs": [
            "125 mg/5 mL is 25 mg/mL; 250 mg/5 mL is 50 mg/mL. Calculate the prescribed mg first, then measure the correct mL with an oral syringe; stronger suspension requires half the volume for the same mg. For either selected concentration, pharmacy reconstitution uses 38 mL water for a 60 mL final bottle or 61 mL for 100 mL, added in two portions with shaking after each. Shake before every administration; never use a kitchen spoon or another manufacturer’s water instructions."
          ],
          "sources": [
            "liquid"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Hypersensitivity, antibiotic-associated diarrhea and renal accumulation are key risks.",
      "takeaway": "Do not dismiss watery/bloody diarrhea because antibiotic treatment has already ended.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Review prior cephalosporin, penicillin and other drug reactions before treatment. Stop and urgently treat suspected anaphylaxis or serious allergic/skin reactions. The label’s historical numerical beta-lactam cross-allergy estimate is not used here as an individualized probability; assess the actual reaction history.",
            "C. difficile-associated diarrhea can range from mild illness to fatal colitis and can appear more than 2 months after antibiotics. Seek prompt assessment for severe, watery or bloody diarrhea, cramps or fever; alternative treatment/discontinuation decisions require clinical evaluation. Use caution with colitis history, and monitor prolonged treatment for superinfection. Renal impairment requires dose reduction; cephalosporin-associated seizures are particularly concerning when accumulated doses are not reduced."
          ],
          "sources": [
            "capsule",
            "liquid"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "Known allergy to the cephalosporin antibiotic class is a formal contraindication. Penicillin allergy is addressed as a cross-hypersensitivity precaution in these labels, requiring clinical evaluation rather than assuming all reported allergies are equivalent."
          ],
          "sources": [
            "capsule",
            "liquid"
          ]
        },
        {
          "title": "Boxed-warning status",
          "paragraphs": [
            "The selected current cefdinir labels do not contain a boxed warning. The prominent capitalized allergy warning and C. difficile warning remain important precautions even without a formal box."
          ],
          "sources": [
            "capsule",
            "liquid"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Common adult effects include diarrhea, nausea, headache, abdominal symptoms and vaginal candidiasis. Children commonly experience diarrhea, rash and vomiting; diarrhea/diaper rash are more frequent in younger children. Postmarketing reports include severe allergic/skin reactions, blood-cell disorders, hepatic injury and renal failure; these reports do not define a reliable incidence or prove causality for every listed event."
          ],
          "sources": [
            "capsule",
            "liquid"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Polyvalent-cation products reduce absorption, and renal-excretion inhibitors increase exposure.",
      "takeaway": "Separate iron supplements and magnesium/aluminum antacids from cefdinir.",
      "blocks": [
        {
          "title": "Antacids and iron",
          "paragraphs": [
            "Give cefdinir at least 2 hours before or after magnesium/aluminum antacids or iron supplements, including iron-containing multivitamins. These combinations reduce absorption. Iron-fortified infant formula does not significantly alter exposure in the reviewed suspension evidence and can be given with cefdinir; that exception does not apply to iron supplements or all highly fortified foods."
          ],
          "sources": [
            "capsule",
            "liquid"
          ]
        },
        {
          "title": "Probenecid and other medication review",
          "paragraphs": [
            "Probenecid inhibits renal cefdinir excretion and increases/prolongs exposure. Review treatment necessity, organ function and adverse effects rather than invent a fixed cefdinir reduction for that combination. The label’s possible postmarketing diclofenac interaction is a report of uncertain relationship, not a quantified universal dose algorithm."
          ],
          "sources": [
            "capsule",
            "liquid"
          ]
        },
        {
          "title": "Stool and laboratory effects",
          "paragraphs": [
            "Cefdinir with iron can form a nonabsorbed complex producing reddish stools; this does not rule out true bleeding or antibiotic-associated colitis. Some urine ketone/glucose methods can be falsely positive, while glucose-oxidase methods are preferred for urine glucose in the label. Cephalosporins can occasionally produce a positive direct Coombs test; inform the testing team."
          ],
          "sources": [
            "capsule",
            "liquid"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Renal function determines dose reduction; pediatric approval begins at 6 months.",
      "takeaway": "No age-only adjustment substitutes for renal assessment.",
      "blocks": [
        {
          "title": "Children and older adults",
          "paragraphs": [
            "The pediatric suspension regimen is for 6 months through 12 years; younger infants/neonates lack established safety/effectiveness. The adult/adolescent schedule starts at 13 years in the coherent comparator. Older patients need no age-only adjustment, but reduced renal clearance can require the 300 mg daily regimen. Consider frailty, adverse effects and the ability to measure suspension accurately."
          ],
          "sources": [
            "capsule",
            "liquid",
            "comparator"
          ]
        },
        {
          "title": "Renal and hepatic disease",
          "paragraphs": [
            "Cefdinir exposure and half-life increase as renal function declines; reduce at the specified threshold and reassess transient/unstable renal dysfunction. Hemodialysis removes substantial drug and has a separate schedule. Hepatic studies were not performed because the drug is minimally metabolized and chiefly renally cleared; the label does not expect a hepatic-only adjustment, which is not evidence that severe combined organ disease needs no assessment."
          ],
          "sources": [
            "capsule",
            "liquid"
          ]
        },
        {
          "title": "Pregnancy and breastfeeding",
          "paragraphs": [
            "Adequate controlled pregnancy studies are lacking; use when clearly needed after weighing infection/treatment risks. Animal findings do not establish absence of human risk, and the retained old pregnancy letter category is not presented as current risk certainty. Cefdinir was not detected in milk after a single 600 mg dose in the label; this limited result does not establish zero repeated-dose infant exposure or a universally safe lactation regimen. Labor/delivery use was not studied."
          ],
          "sources": [
            "capsule",
            "liquid"
          ]
        },
        {
          "title": "Diabetes and excipients",
          "paragraphs": [
            "Selected Lupin suspension contains 2.86 g sucrose per 5 mL; account for this in diabetes and the prescribed volume. Excipients vary by manufacturer, so verify the actual product for allergies and dietary concerns."
          ],
          "sources": [
            "liquid"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Cefdinir inhibits bacterial cell-wall synthesis and is eliminated mainly by the kidneys.",
      "takeaway": "Its spectrum and PK do not support treating all resistant or invasive infections.",
      "blocks": [
        {
          "title": "Mechanism and resistance",
          "paragraphs": [
            "Cefdinir is a cephalosporin with bactericidal activity from inhibition of cell-wall synthesis. It withstands some beta-lactamases, but resistance can occur through other beta-lactamases, altered penicillin-binding proteins and reduced permeability. MRSA and most Pseudomonas/Enterococcus are outside its reliable label spectrum."
          ],
          "sources": [
            "capsule",
            "liquid"
          ]
        },
        {
          "title": "Absorption and disposition",
          "paragraphs": [
            "Peak plasma levels occur about 2–4 hours after an oral dose. Capsule absolute bioavailability is about 21% at 300 mg and 16% at 600 mg; suspension averages 25%. Protein binding is 60–70%, appreciable metabolism does not occur, and normal-function elimination half-life averages 1.7 hours. Parent drug is predominantly renally cleared; the short usual half-life is not a reason to override validated infection-specific schedules."
          ],
          "sources": [
            "capsule",
            "liquid"
          ]
        },
        {
          "title": "Food, formulations and kidney function",
          "paragraphs": [
            "A high-fat meal reduces exposure but the labels permit dosing without regard to meals based on clinical data. Selected 125/250 mg per 5 mL suspensions were bioequivalent under studied fasting conditions; suspension exposure relative to capsules is not identical in every PK measure. Hemodialysis removed about 63% in a 4-hour study, reinforcing the need for a specific dialysis plan rather than casual formulation/interval substitution."
          ],
          "sources": [
            "capsule",
            "liquid"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Verify the bacterial indication, allergy history, renal function and administration plan.",
      "takeaway": "Use the prescribed course and reassess clinical failure or serious adverse effects.",
      "blocks": [
        {
          "title": "Monitoring",
          "paragraphs": [
            "Before treatment, assess allergy history, infection severity, culture/susceptibility information when available, renal function and interacting cation products. Follow response, diarrhea, rash and superinfection; repeat renal assessment when kidney function may change. The selected labels do not mandate one universal routine lab panel for every short uncomplicated course."
          ],
          "sources": [
            "capsule",
            "liquid"
          ]
        },
        {
          "title": "Patient counseling",
          "paragraphs": [
            "Take exactly as prescribed, including frequency and duration; do not share leftovers or use for viral colds. Discuss cation spacing and possible iron-related red stool. Seek prompt care for watery/bloody diarrhea even after completion, and immediate care for breathing difficulty, swelling or serious skin reactions. Do not self-assume red stool is harmless when accompanied by illness or bleeding concern."
          ],
          "sources": [
            "capsule",
            "liquid"
          ]
        },
        {
          "title": "Suspension and follow-up",
          "paragraphs": [
            "Check both strength and prescribed mL, shake well, and use a calibrated oral syringe. Keep the reconstitution date/discard date visible; selected suspension expires 10 days after mixing. If doses are missed, the bottle is insufficient or symptoms worsen/fail to improve, contact the prescribing team for an individualized plan rather than doubling or extending treatment independently."
          ],
          "sources": [
            "liquid"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "The reviewed products are oral capsules and reconstituted suspension.",
      "takeaway": "Color, concentration and water volume are manufacturer-specific.",
      "blocks": [
        {
          "title": "Representative product identity",
          "paragraphs": [
            "Lupin 300 mg capsule has a blue cap marked LUPIN and purple body marked CEFDINIR; 60 capsules are NDC 68180-711-60. Selected Lupin 250 mg/5 mL suspension 100 mL bottle is NDC 68180-723-05 and is strawberry-flavored/off-white to cream after mixing. Verify manufacturer and actual package; appearance alone is insufficient."
          ],
          "sources": [
            "capsule",
            "liquid"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Selected capsules contain 300 mg cefdinir; selected powder yields 125 mg/5 mL or 250 mg/5 mL oral suspension in 60 or 100 mL final bottles. It is a single-ingredient oral antibacterial, not an IV product. Capsule adult and liquid pediatric labels provide complementary instructions; do not infer an injectable dose."
          ],
          "sources": [
            "capsule",
            "liquid"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Store selected capsules and dry/reconstituted suspension at 20–25°C. Keep suspension tightly closed, shake before use, and discard unused liquid 10 days after preparation. Inspect the actual dispensed product’s instructions for handling; do not apply a different manufacturer’s refrigeration or reconstitution rule."
          ],
          "sources": [
            "capsule",
            "liquid"
          ]
        }
      ]
    }
  ]
};
