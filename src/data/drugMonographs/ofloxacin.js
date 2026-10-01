export const ofloxacin = {
  "slug": "ofloxacin",
  "name": "Ofloxacin",
  "synonym": "Fluoroquinolone antibacterial · Oral, eye and ear products",
  "description": "Route-specific antibacterial products have different indications, ages and dose schedules. Oral tablets carry serious systemic fluoroquinolone warnings and renal adjustments; ophthalmic and otic 0.3% solutions must be identified separately.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Verify oral, eye or ear before every dose.",
    "text": "Oral treatment can cause disabling tendon, nerve or CNS injury: stop immediately and obtain advice for these symptoms. Avoid with myasthenia gravis and reserve selected uncomplicated infections for no-alternative situations. Otic drops are not for eyes or injection.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Fluoroquinolone antibacterial"
    ],
    [
      "Formulations",
      "Oral tablets; ophthalmic and otic solutions"
    ],
    [
      "Reference focus",
      "Selected current U.S. tablets and separate 0.3% drop labels"
    ]
  ],
  "sources": [
    {
      "id": "label",
      "title": "Ofloxacin tablets · Prescribing information and Medication Guide",
      "publisher": "DailyMed / Modavar",
      "note": "Current SPL version 3, effective 2026-06-06. ANDA091656; current SPL retains older infection regimens requiring guideline context.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=93ed9f70-b44f-496b-bdfc-c1bd5f1c260b"
    },
    {
      "id": "eye",
      "title": "Ofloxacin ophthalmic solution 0.3% · Prescribing information",
      "publisher": "DailyMed / Apotex",
      "note": "Current SPL version 13, effective 2026-09-15. ANDA076513; current SPL retains June 2018 clinical label.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5117d567-2004-c5ed-1391-f8831864696f"
    },
    {
      "id": "ear",
      "title": "Ofloxacin otic solution 0.3% · Prescribing information and patient directions",
      "publisher": "DailyMed / Apotex",
      "note": "Current SPL version 10, effective 2026-09-15. ANDA076527; current SPL retains September 2018 clinical label. Age/diagnosis-specific directions reviewed.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8db221b1-32f3-f6ca-e404-71f56a860d08"
    },
    {
      "id": "gonorrhea",
      "title": "CDC · Current accessible gonorrhea treatment guidance",
      "publisher": "Centers for Disease Control and Prevention",
      "url": "https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm",
      "note": "Current public CDC 2021 STI guideline page checked October 1, 2026; ofloxacin’s retained gonorrhea regimen is not a current recommended default."
    },
    {
      "id": "chlamydia",
      "title": "CDC · Chlamydia treatment guidance",
      "publisher": "Centers for Disease Control and Prevention",
      "url": "https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm",
      "note": "Current accessible primary regimen section checked October 1, 2026; retained tablet-label regimens distinguished."
    },
    {
      "id": "pid",
      "title": "CDC · PID treatment guidance",
      "publisher": "Centers for Disease Control and Prevention",
      "url": "https://www.cdc.gov/std/treatment-guidelines/pid.htm",
      "note": "Current accessible primary treatment/quinolone-alternative section checked October 1, 2026; no generalized ofloxacin PID regimen supplied."
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Selected oral bacterial infections and distinct local eye/ear infections.",
      "takeaway": "Retained labeling is not proof that a regimen is preferred today.",
      "blocks": [
        {
          "title": "Oral labeled use",
          "sources": [
            "label"
          ],
          "open": true,
          "paragraphs": [
            "Selected tablets treat adult susceptible infections listed for bronchitis exacerbation, community-acquired pneumonia, uncomplicated skin/soft tissue infection, cystitis, complicated UTI and E. coli prostatitis. Reserve acute bacterial exacerbation of chronic bronchitis and uncomplicated cystitis for patients with no alternative treatment options. Obtain cultures/susceptibility and consider local resistance; do not use for viral illness."
          ]
        },
        {
          "title": "Retained STI indications and current practice",
          "sources": [
            "label",
            "gonorrhea",
            "chlamydia",
            "pid"
          ],
          "paragraphs": [
            "The current oral label retains gonorrhea, chlamydial urethritis/cervicitis, mixed infection and PID indications/regimens. CDC recommends different contemporary regimens; empiric ofloxacin is not a current gonorrhea treatment default, and it is not listed in current recommended chlamydia or PID regimens. Those legacy numeric STI regimens are not presented here as prescribing instructions. Use current STI guidance and susceptibility/specialist assessment."
          ]
        },
        {
          "title": "Ophthalmic and otic indications",
          "sources": [
            "eye",
            "ear"
          ],
          "paragraphs": [
            "Ophthalmic 0.3% treats susceptible bacterial conjunctivitis or corneal ulcers; infant safety below 1 year is unestablished. Otic 0.3% treats otitis externa from age 6 months, tympanostomy-tube acute otitis media from age 1, and chronic suppurative otitis media with a perforated tympanic membrane from age 12. Diagnosis and age determine the ear regimen; this is not every middle-ear infection."
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Separate oral milligrams from drop schedules and indication-specific ages.",
      "takeaway": "The oral table below is selected labeling, not a universal current treatment preference.",
      "blocks": [
        {
          "title": "Selected adult oral label regimens",
          "sources": [
            "label"
          ],
          "open": true,
          "table": {
            "headers": [
              "Labeled infection",
              "Normal-renal regimen"
            ],
            "rows": [
              [
                "Bronchitis exacerbation; pneumonia; uncomplicated skin infection",
                "400 mg every 12 hours for 10 days; bronchitis restricted to no alternatives"
              ],
              [
                "Cystitis: E. coli or K. pneumoniae",
                "200 mg every 12 hours for 3 days; reserve if no alternatives"
              ],
              [
                "Cystitis: other label-approved organisms",
                "200 mg every 12 hours for 7 days; reserve if no alternatives"
              ],
              [
                "Complicated UTI",
                "200 mg every 12 hours for 10 days"
              ],
              [
                "E. coli prostatitis",
                "300 mg every 12 hours for 6 weeks"
              ]
            ]
          }
        },
        {
          "title": "Oral renal and hepatic adjustment",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "After a normal initial dose, the selected renal table gives the usual infection-specific unit dose every 24 hours at creatinine clearance 20–50 mL/min, and half that unit dose every 24 hours below 20. Its prose says adjustment below 50 while the table includes 50; at the exact boundary obtain prescription clarification rather than silently harmonize the wording. Severe liver dysfunction/cirrhosis has a 400 mg/day maximum. Coexisting renal/hepatic disease requires individualized selection, not an invented combined algorithm. Separate listed cation products by at least 2 hours before and after tablets."
          ]
        },
        {
          "title": "Ophthalmic conjunctivitis",
          "sources": [
            "eye"
          ],
          "paragraphs": [
            "Days 1–2: 1–2 drops in the affected eye(s) every 2–4 hours. Days 3–7: 1–2 drops four times daily. These eye directions do not apply to otic drops."
          ]
        },
        {
          "title": "Ophthalmic corneal ulcer",
          "sources": [
            "eye"
          ],
          "paragraphs": [
            "Days 1–2: 1–2 drops in the affected eye every 30 minutes while awake; also awaken about 4 and 6 hours after retiring for 1–2 drops. Days 3 through 7–9: 1–2 drops hourly while awake. From day 7–9 through completion: 1–2 drops four times daily. The label’s transition window requires ophthalmologist-directed timing and close follow-up, not a single fixed day chosen here."
          ]
        },
        {
          "title": "Otic diagnosis-specific regimens",
          "sources": [
            "ear"
          ],
          "table": {
            "headers": [
              "Ear diagnosis / age",
              "Selected directions"
            ],
            "rows": [
              [
                "Otitis externa: age 6 months to under 13",
                "5 drops in affected ear once daily for 7 days"
              ],
              [
                "Otitis externa: age 13 or older",
                "10 drops in affected ear once daily for 7 days"
              ],
              [
                "Acute otitis media with tubes: age 1–12",
                "Full dosage section: 5 drops twice daily for 10 days; see age-12 clarification below"
              ],
              [
                "Chronic suppurative otitis media, perforation: age 12+",
                "10 drops twice daily for 14 days"
              ]
            ]
          }
        },
        {
          "title": "Ear technique and age-boundary clarification",
          "sources": [
            "ear"
          ],
          "paragraphs": [
            "Warm the bottle in the hand for 1–2 minutes, lie with affected ear upward, instill and remain for 5 minutes. Pump the tragus 4 times for tube/perforation middle-ear treatment. The patient handout gives generic middle-ear directions of 10 drops at age 12+, while the full tube-AOM section includes age 12 in its 5-drop range; at age 12 confirm the diagnosis-specific prescription rather than choose from that generic handout. For otitis externa, the handout clearly specifies 5 drops below 13 and 10 at 13+."
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Oral systemic injury warnings and local allergy precautions both matter.",
      "takeaway": "Do not apply oral exposure assumptions to eye/ear doses.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "sources": [
            "label",
            "eye",
            "ear"
          ],
          "open": true,
          "tone": "warning",
          "paragraphs": [
            "Oral fluoroquinolones can cause disabling, potentially irreversible tendon injury, neuropathy and CNS/psychiatric effects, sometimes together within hours to weeks. Stop immediately for tendon pain/swelling, burning/tingling/numbness/weakness or serious CNS symptoms and seek assessment. Rest a painful tendon; rupture can occur during or months after therapy. Risk rises with age over 60, corticosteroids, transplant history, renal failure or prior tendon disease, but injury can occur without them.",
            "Avoid oral ofloxacin in myasthenia gravis. Reserve in known/high-risk aortic aneurysm situations when no antibacterial alternatives exist; sudden severe chest, abdominal or back pain requires emergency care. Avoid with known QT prolongation, uncorrected low potassium or listed class IA/III antiarrhythmics. Diabetes medicines increase dysglycemia concerns; severe hypoglycemia can cause coma/death, requiring stopping and treatment.",
            "Oral therapy can cause severe allergy/skin reactions, liver/kidney injury and C. difficile diarrhea during or over 2 months after treatment. Stop for rash/hypersensitivity or serious neurologic/tendon effects, and promptly evaluate significant diarrhea. Maintain hydration and avoid excessive sunlight/UV; stop for phototoxicity.",
            "Eye and ear products can cause allergy despite lower systemic exposure. Stop for rash or hypersensitivity. Eye drops are not for injection or introduction into the anterior chamber; ear drops are not for ophthalmic use or injection. Prolonged local use can select nonsusceptible organisms/fungi. Do not contaminate bottle tips."
          ]
        },
        {
          "title": "Contraindications",
          "sources": [
            "label",
            "eye",
            "ear"
          ],
          "paragraphs": [
            "Selected oral tablets contraindicate prior ofloxacin or quinolone hypersensitivity. Eye/ear solutions additionally include hypersensitivity to their components. Myasthenia gravis, prior serious fluoroquinolone tendon/nerve reactions, QT-risk combinations and high aortic risk are major oral avoid/reserve instructions, distinct from the formal hypersensitivity contraindication section."
          ]
        },
        {
          "title": "Boxed warning",
          "sources": [
            "label",
            "eye",
            "ear"
          ],
          "paragraphs": [
            "The oral tablet box covers disabling tendon/neuropathy/CNS reactions, exacerbation of myasthenia gravis and reserving selected uncomplicated infections for no alternatives. The selected ophthalmic/otic labels have no boxed warning; their route-specific warnings and age boundaries still apply."
          ]
        },
        {
          "title": "Adverse reactions",
          "sources": [
            "label",
            "eye",
            "ear"
          ],
          "paragraphs": [
            "Oral reports include nausea, insomnia, headache, dizziness, diarrhea, vomiting, rash and serious systemic reactions described above. Ophthalmic use commonly causes transient burning/discomfort and may cause stinging, redness, itching, blurred vision or eye pain. Otic reports include application discomfort, itching, earache, dizziness and altered taste with nonintact eardrums. Different-route trial rates and spontaneous reports are not interchangeable."
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Cation chelation and glucose, seizure or cardiac interactions chiefly concern oral use.",
      "takeaway": "Local formulations have limited dedicated interaction data.",
      "blocks": [
        {
          "title": "Cations and oral absorption",
          "sources": [
            "label"
          ],
          "open": true,
          "paragraphs": [
            "Do not take calcium/magnesium/aluminum antacids, sucralfate, iron, zinc-containing multivitamins or buffered didanosine within 2 hours before or after oral ofloxacin; chelation can substantially reduce exposure. This is a tablet instruction, not a spacing rule for ear/eye drops."
          ]
        },
        {
          "title": "Systemic medicines",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Monitor coagulation with warfarin and glucose with insulin or oral antidiabetics. Theophylline levels/adverse effects can rise; monitor and adjust as appropriate. NSAIDs may increase CNS stimulation/seizure risk. Avoid the listed QT-risk antiarrhythmics and correct electrolyte abnormalities. Corticosteroids increase tendon risk. The label describes some other interactions as class observations or unstudied for ofloxacin; do not invent universal dose adjustments."
          ]
        },
        {
          "title": "Local product evidence",
          "sources": [
            "eye",
            "ear"
          ],
          "paragraphs": [
            "Dedicated interaction studies were not conducted for the selected eye or ear solutions. The eye label cites some systemic quinolone interactions, while studied ocular/otic plasma levels are far below standard oral exposure. Review the patient and actual route without automatically applying oral numerical dose changes or claiming that local treatment has no systemic effects."
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Pediatric indications differ sharply between systemic and local treatment.",
      "takeaway": "Low local exposure is not a guarantee of reproductive safety.",
      "blocks": [
        {
          "title": "Pregnancy and breastfeeding",
          "sources": [
            "label",
            "eye",
            "ear"
          ],
          "paragraphs": [
            "Adequate controlled pregnancy data are lacking; the selected labels advise use only if potential benefit justifies fetal risk. Oral dosing produces milk levels similar to plasma and requires a nursing-versus-drug decision under the label. Milk transfer after eye/ear administration is unknown; those labels likewise call for an individualized decision. Do not propagate obsolete pregnancy-category letters or infer zero exposure."
          ]
        },
        {
          "title": "Children and older adults",
          "sources": [
            "label",
            "eye",
            "ear"
          ],
          "paragraphs": [
            "Oral safety/effectiveness below 18 are not established. Ophthalmic safety below 1 year is unestablished. Otic age limits depend on diagnosis: 6 months for externa, 1 year for tube-associated AOM and 12 for perforated chronic suppurative disease; confirm the age-12 dose discrepancy before treatment. Older oral-treated patients have greater tendon/aortic/QT vulnerability and may need renal adjustment."
          ]
        },
        {
          "title": "Kidney and liver impairment",
          "sources": [
            "label",
            "eye",
            "ear"
          ],
          "paragraphs": [
            "Tablets require reduced-frequency/dose selection by creatinine clearance and a 400 mg/day ceiling in severe hepatic dysfunction. Use the actual table and resolve its exact-50 boundary wording. Eye/ear labels supply no numerical renal/hepatic adjustment tables; do not scale local drops from systemic renal dosing."
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Inhibition of bacterial DNA enzymes disrupts replication.",
      "takeaway": "The amount reaching the circulation depends on route.",
      "blocks": [
        {
          "title": "Mechanism and susceptibility",
          "sources": [
            "label"
          ],
          "open": true,
          "paragraphs": [
            "Ofloxacin inhibits bacterial DNA gyrase and topoisomerase IV functions. Resistance and local epidemiology determine usefulness; some organisms can develop resistance during therapy. Culture/susceptibility and clinical reassessment are more useful than assuming every historical labeled organism remains susceptible."
          ]
        },
        {
          "title": "Systemic and local kinetics",
          "sources": [
            "label",
            "eye",
            "ear"
          ],
          "paragraphs": [
            "Tablet bioavailability is about 98%; oral peaks occur in 1–2 hours and protein binding is about 32%. Elimination is mainly renal, with 65–80% recovered unchanged in urine within 48 hours. The label describes biphasic elimination; a single short half-life does not replace its renal-adjustment table. Ocular studies found serum peaks over 1,000-fold lower than standard oral dosing; otic studies with tubes/perforations found low ng/mL serum levels, with a detected maximum 10 ng/mL in studied adults. These are studied-use observations, not universal zero-exposure guarantees."
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Follow infection response, serious systemic symptoms and local delivery technique.",
      "takeaway": "Persistent ear drainage or corneal disease needs reassessment.",
      "blocks": [
        {
          "title": "Monitoring",
          "sources": [
            "label",
            "eye",
            "ear"
          ],
          "open": true,
          "paragraphs": [
            "For tablets review susceptibility, renal/hepatic function, hydration, QT/electrolyte risks, neurologic/tendon history, myasthenia and aortic risk; monitor glucose or INR when relevant. Prolonged treatment warrants organ-function review. Corneal ulcers require ophthalmic examination/follow-up. If ear infection fails to improve after 1 week, obtain reassessment/cultures; persistent otorrhea after a course or at least 2 episodes within 6 months warrants evaluation for underlying pathology."
          ]
        },
        {
          "title": "Counseling",
          "sources": [
            "label",
            "eye",
            "ear"
          ],
          "paragraphs": [
            "Take the prescribed course and contact the clinician for serious reactions rather than continue through them. Keep the oral cation spacing; maintain hydration and avoid excessive sun/UV. Verify eye/ear labeling, wash hands and avoid touching the dropper tip. Warm ear drops only in the hand, retain the correct position and use middle-ear tragus pumping as directed. Avoid swimming/wetting an infected ear unless permitted; worsening eye pain or vision needs prompt assessment."
          ]
        },
        {
          "title": "Overdose or wrong route",
          "sources": [
            "label",
            "eye",
            "ear"
          ],
          "paragraphs": [
            "Contact medical/Poison Control services for overdose or wrong-route administration; severe neurologic, allergic or cardiac symptoms require emergency treatment. Oral overdose needs observation/supportive care and hydration; dialysis does not efficiently remove ofloxacin. Do not attempt home gastric decontamination. Ear drops must not be instilled into eyes; neither local formulation is injectable."
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Both local products are 0.3% but their routes and directions differ.",
      "takeaway": "Concentration alone cannot identify the intended product.",
      "blocks": [
        {
          "title": "Representative oral product",
          "sources": [
            "label"
          ],
          "facts": [
            [
              "Product",
              "Modavar ofloxacin USP 200 mg tablet"
            ],
            [
              "Route",
              "Oral; prescription only"
            ],
            [
              "Appearance",
              "Light yellow to yellow oval film-coated; C213 in blue"
            ],
            [
              "Example package",
              "50 tablets · NDC 72241-072-02"
            ]
          ],
          "open": true
        },
        {
          "title": "Dosage forms and strengths",
          "sources": [
            "label",
            "eye",
            "ear"
          ],
          "paragraphs": [
            "Selected tablets: 200, 300 and 400 mg (C213, C212 and C211, respectively). Apotex ophthalmic solution 0.3% (3 mg/mL): sterile eye dropper with tan cap, 5 mL NDC 60505-0560-0 and 10 mL -1. Apotex otic 0.3%: 5 mL NDC 60505-0363-1 and 10 mL -2. Other manufacturers, historical injectable products and compounded regimens require separate verification; do not infer current IV availability from oral-label PK discussion."
          ]
        },
        {
          "title": "Storage and handling",
          "sources": [
            "label",
            "eye",
            "ear"
          ],
          "paragraphs": [
            "Tablets: 20–25°C, tight light-resistant container with required child-resistant closure. Selected eye drops: 25°C, excursions 15–30°C; protect from light. Selected ear drops: 20–25°C; protect from light. Keep tips clean and caps closed. No universal after-opening discard date is supplied in these selected labels; follow the dispensed product’s instructions rather than invent a 28-day rule."
          ]
        }
      ]
    }
  ]
};
