// Original clinical summaries checked against the product-specific public sources below.
export const carbamazepine = {
  "slug": "carbamazepine",
  "name": "Carbamazepine",
  "synonym": "Tegretol / Tegretol-XR · Carbatrol · Equetro",
  "description": "Prescription oral anticonvulsant and neuralgia treatment, with Equetro-specific acute bipolar mania approval, major skin/blood safety warnings and extensive enzyme interactions.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Skin and blood-cell warnings",
    "text": "Screen genetically at-risk ancestry before initiation, obtain baseline blood counts and urgently evaluate rash, mouth ulcers, fever or abnormal bleeding. Do not abruptly stop routine seizure treatment.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Class",
      "Anticonvulsant; indication-specific mood treatment"
    ],
    [
      "Formulations",
      "IR/XR tablets, ER capsules and 20 mg/mL suspension"
    ],
    [
      "Key safety",
      "SJS/TEN and marrow-toxicity boxed warnings"
    ]
  ],
  "sources": [
    {
      "id": "tegretol",
      "title": "Tegretol / Tegretol-XR · Current full label",
      "publisher": "Novartis / DailyMed",
      "note": "PI July 2026; SPL 39 effective August 20, 2026; published August 21, 2026.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8d409411-aa9f-4f3a-a52c-fbcb0c3ec053"
    },
    {
      "id": "carbatrol",
      "title": "Carbatrol · Current full label",
      "publisher": "Takeda / DailyMed",
      "note": "PI August 2026; SPL 41 effective August 17, 2026; published August 25, 2026.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bc03e499-5bac-4293-bff4-6864153a624d"
    },
    {
      "id": "equetro",
      "title": "Equetro · Current full label",
      "publisher": "Validus / DailyMed",
      "note": "PI October 2022; current SPL 10 effective August 19, 2025; published August 21, 2025.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=be478f3c-40f6-47cc-8ab9-f420a9372b1c"
    },
    {
      "id": "withdrawal",
      "title": "Carnexiv NDA 206030 · Approval withdrawal notice",
      "publisher": "FDA / Federal Register via GovInfo",
      "note": "FR 2026-13616, July 6, 2026, pages 41045–41046; effective August 5, 2026. Applicant-requested withdrawal for products no longer marketed; existing-inventory exception retained.",
      "url": "https://www.govinfo.gov/content/pkg/FR-2026-07-06/html/2026-13616.htm"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Carbamazepine treats selected seizures and trigeminal neuralgia; bipolar approval is product-specific.",
      "takeaway": "It does not treat absence seizures and can worsen some mixed seizure disorders.",
      "blocks": [
        {
          "title": "Seizures and neuralgia",
          "paragraphs": [
            "Tegretol, Carbatrol and Equetro labels cover partial seizures with complex symptoms, generalized tonic-clonic seizures and selected mixed patterns. They also cover pain of true trigeminal neuralgia; reported glossopharyngeal benefit is distinguished from a general pain indication. Carbamazepine is unsuitable as a routine analgesic for minor aches. Absence seizures are not controlled; some mixed disorders including atypical absence can worsen."
          ],
          "sources": [
            "tegretol",
            "carbatrol",
            "equetro"
          ]
        },
        {
          "title": "Bipolar and route status",
          "paragraphs": [
            "Equetro is labeled for acute manic or mixed episodes of bipolar I disorder; that indication is not automatically attached to Tegretol or Carbatrol. This does not establish bipolar-depression or maintenance approval. These reviewed products are oral prescription medicines. FDA withdrew Carnexiv IV NDA 206030 approval effective August 5, 2026 at the applicant’s request after marketing stopped; the notice permits qualifying existing inventory until depletion or expiry. No historical IV regimen is presented as a current universal substitution instruction."
          ],
          "sources": [
            "equetro",
            "tegretol",
            "carbatrol",
            "withdrawal"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Start low and titrate by indication, age and release formulation.",
      "takeaway": "The same daily milligrams do not imply identical dosing frequency or peak exposure.",
      "blocks": [
        {
          "title": "Tegretol epilepsy initiation",
          "paragraphs": [
            "These are label starting regimens, not a dose to reach independently. Increase weekly according to response and tolerability: up to 200 mg/day above age 12, and up to 100 mg/day at ages 6–12. IR maintenance is generally divided three or four times daily; XR is twice daily. Under six, titration and measured concentrations guide a specialist regimen; safety above 35 mg/kg/day is not established. The suspension is 100 mg/5 mL (20 mg/mL)."
          ],
          "sources": [
            "tegretol"
          ],
          "table": {
            "headers": [
              "Population",
              "Initial daily regimen"
            ],
            "rows": [
              [
                "Over 12 years",
                "IR or XR: 200 mg twice daily; suspension: 5 mL four times daily (400 mg/day)"
              ],
              [
                "6–12 years",
                "Tablets: 100 mg twice daily; suspension: 2.5 mL four times daily (200 mg/day)"
              ],
              [
                "Under 6 years",
                "10–20 mg/kg/day: IR tablets divided twice/three times daily, or suspension four times daily; no infant XR conversion inferred"
              ]
            ]
          }
        },
        {
          "title": "Epilepsy dose ceilings and ER capsules",
          "paragraphs": [
            "Tegretol and Carbatrol generally limit ages 12–15 to 1000 mg/day and above 15 to 1200 mg/day; adult doses to 1600 mg/day are exceptional rather than a routine goal. Tegretol ages 6–12 generally should not exceed 1000 mg/day. Carbatrol starts above age 12 at 200 mg twice daily with weekly increases up to 200 mg/day; under 12 its label describes conversion only when existing IR daily dose is at least 400 mg. Equetro adult epilepsy labeling allows up to 800 mg twice daily; pediatric ceilings and conversion eligibility remain product-specific. Its overlapping age-15 ceiling wording requires prescriber/pharmacist clarification rather than an inferred higher adolescent limit."
          ],
          "sources": [
            "tegretol",
            "carbatrol",
            "equetro"
          ]
        },
        {
          "title": "Trigeminal neuralgia and acute mania",
          "paragraphs": [
            "Tegretol neuralgia starts at 100 mg twice daily (IR/XR), or suspension 2.5 mL four times daily: total 200 mg/day. Increase only as needed, by up to 200 mg/day; maximum 1200 mg/day and usual maintenance 400–800 mg/day. Equetro neuralgia starts with one 200 mg capsule once on the first day, with later increases up to 200 mg/day using 100 mg every-12-hour increments. Its acute mania regimen starts 200 mg twice daily and may increase by 200 mg/day; above 1600 mg/day was not studied. Reassess neuralgia dose reduction at least every three months. Pediatric Equetro bipolar/neuralgia effectiveness is not established."
          ],
          "sources": [
            "tegretol",
            "equetro"
          ]
        },
        {
          "title": "Administration and supervised conversion",
          "paragraphs": [
            "Take Tegretol with meals; shake its suspension and use a calibrated oral device. Do not administer the suspension simultaneously with other liquid medicines or diluents because precipitation occurs with some. Swallow Tegretol-XR intact; reject damaged tablets or those without the release portal. Its empty shell can appear in stool. Carbatrol/Equetro may be taken with or without food and opened onto a teaspoon of soft food; swallow every bead without chewing/crushing. IR-to-ER conversion usually retains total daily milligrams with twice-daily ER dosing and close reassessment. IR-to-suspension uses smaller, more frequent doses; do not perform a home substitution."
          ],
          "sources": [
            "tegretol",
            "carbatrol",
            "equetro"
          ]
        },
        {
          "title": "Organ function and discontinuation",
          "paragraphs": [
            "The selected oral labels give no validated CrCl-based or dialysis adjustment table. Hepatic disease requires cautious individualized selection; Equetro advises considering reduction, and active or worsening liver disease warrants clinician-directed discontinuation. Taper routine discontinuation to reduce seizure/status risk. Serious allergy or marrow/liver injury may require urgent withdrawal with an alternative seizure plan, rather than waiting through a routine taper."
          ],
          "sources": [
            "tegretol",
            "carbatrol",
            "equetro"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Serious skin, blood-cell, liver and electrolyte toxicity can occur.",
      "takeaway": "Genetic screening helps assess risk but cannot exclude a serious reaction.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Assess HLA-B*1502 before starting in genetically at-risk ancestry; avoid a positive result unless benefit clearly outweighs risk. Known HLA-A*3101 positivity also requires benefit-risk review. Negative testing does not rule out SJS/TEN or DRESS. Rash, blistering, mouth ulcers, fever, facial swelling or swollen nodes need immediate assessment; serious hypersensitivity may begin without rash.",
            "Monitor for marrow suppression, hepatic injury, suicidal thoughts, hyponatremia/SIADH, sedation, imbalance and cardiac conduction disturbance. Older adults and diuretic users are more vulnerable to low sodium. Avoid in hepatic porphyria; assess glaucoma/increased IOP. Tegretol suspension contains propylene glycol 25 mg/mL and sorbitol: young children, especially neonates, need exposure/risk assessment; suspected propylene-glycol toxicity requires stopping that formulation. Rare hereditary fructose intolerance precludes its sorbitol-containing suspension."
          ],
          "sources": [
            "tegretol",
            "carbatrol",
            "equetro"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "Previous bone marrow depression, carbamazepine hypersensitivity or sensitivity to related tricyclic compounds preclude use in the selected labels. Avoid MAOI coadministration and allow at least 14 days after stopping an MAOI; Equetro lists this formally. Nefazodone coadministration is contraindicated. Carbatrol also contraindicates delavirdine; Equetro extends the restriction to other CYP3A4-substrate NNRTIs. Check the exact antiretroviral and product label rather than assume all antiviral agents have the same classification."
          ],
          "sources": [
            "tegretol",
            "carbatrol",
            "equetro"
          ]
        },
        {
          "title": "Boxed-warning status",
          "paragraphs": [
            "The reviewed oral labels carry boxed warnings for potentially fatal SJS/TEN with HLA-B*1502 screening considerations and for aplastic anemia/agranulocytosis. Obtain a baseline CBC and closely evaluate falling counts. A small count change is not automatically aplastic anemia, but significant marrow depression requires an urgent treatment decision."
          ],
          "sources": [
            "tegretol",
            "carbatrol",
            "equetro"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Common problems include dizziness, drowsiness, unsteadiness, nausea, vomiting, blurred/double vision and coordination difficulty. Serious reactions include severe skin/hypersensitivity syndromes, blood dyscrasias, liver failure, hyponatremia, conduction abnormalities and mood/suicidality changes. Frequencies from adult Equetro mania trials are not universal pediatric or epilepsy rates."
          ],
          "sources": [
            "tegretol",
            "carbatrol",
            "equetro"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Carbamazepine changes its own exposure and many co-medication levels.",
      "takeaway": "Adding or stopping another medicine can change seizure control, toxicity and contraceptive protection.",
      "blocks": [
        {
          "title": "Inhibitors, inducers and the epoxide metabolite",
          "paragraphs": [
            "Macrolides, azole antifungals, some calcium-channel blockers and grapefruit can raise carbamazepine exposure; rifampin, phenytoin and other inducers can lower it. Valproate and other epoxide-hydrolase inhibitors may raise the active epoxide metabolite even when parent concentration looks acceptable. Review levels, symptoms and dose after changes; no single fixed correction fits all interacting medicines."
          ],
          "sources": [
            "tegretol",
            "carbatrol",
            "equetro"
          ]
        },
        {
          "title": "Reduced co-medication exposure",
          "paragraphs": [
            "Strong enzyme induction can undermine hormonal contraception, anticoagulants, transplant medicines, antiretrovirals, some psychotropics, levothyroxine and corticosteroids. Consider effective alternative/back-up contraception; breakthrough bleeding is not a reliable indicator of protection. Generally avoid the direct oral anticoagulants apixaban, rivaroxaban, dabigatran and edoxaban with carbamazepine. Warfarin requires anticoagulation monitoring; tacrolimus requires level-guided management. Assess both initiation and withdrawal, when induction changes."
          ],
          "sources": [
            "tegretol",
            "carbatrol",
            "equetro"
          ]
        },
        {
          "title": "Additive toxicity and procedures",
          "paragraphs": [
            "Alcohol, opioids and other sedating medicines can add impairment and respiratory depression; lithium can add neurotoxicity, and isoniazid can add hepatic risk. Tell anesthesia teams about carbamazepine because nondepolarizing neuromuscular-blocker requirements can change. Do not mix Tegretol suspension with another oral liquid; spacing decisions require the pharmacist rather than an invented universal interval."
          ],
          "sources": [
            "tegretol",
            "carbatrol",
            "equetro"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Pediatric formulation, older-age tolerance and reproductive planning need separate assessment.",
      "takeaway": "Pregnancy requires a seizure/mood-treatment plan, not abrupt self-discontinuation.",
      "blocks": [
        {
          "title": "Children and older adults",
          "paragraphs": [
            "Tegretol provides pediatric epilepsy dosing; Carbatrol under-12 conversion has a 400 mg/day existing-IR threshold. These do not establish pediatric bipolar or neuralgia efficacy for Equetro. Younger children metabolize drug differently and Tegretol suspension excipients add risk; neonates should receive it only after careful review when no alternatives exist. Older adults often need cautious low-end selection and sodium, cognition/fall and interaction surveillance."
          ],
          "sources": [
            "tegretol",
            "carbatrol",
            "equetro"
          ]
        },
        {
          "title": "Kidney and liver impairment",
          "paragraphs": [
            "Renal and hepatic PK effects are not well characterized in the selected oral labels. No blanket renal percentage reduction is validated; review organ function and drug levels individually. Consider hepatic reduction, perform baseline/periodic liver assessment and act on worsening dysfunction. This oral profile does not transfer historical IV excipient restrictions or doses onto tablets/capsules."
          ],
          "sources": [
            "tegretol",
            "carbatrol",
            "equetro",
            "withdrawal"
          ]
        },
        {
          "title": "Pregnancy and contraception",
          "paragraphs": [
            "Carbamazepine crosses the placenta and is associated with major congenital malformations, including neural-tube defects. Plan pregnancy with the treating team, discuss alternatives, folic acid and pregnancy-registry participation, and balance untreated epilepsy/bipolar illness against exposure risks. Folate is advised but is not proven to eliminate drug-associated malformations. Do not abruptly stop seizure treatment after a positive pregnancy test. Review enzyme-induced contraceptive failure before conception."
          ],
          "sources": [
            "tegretol",
            "equetro"
          ]
        },
        {
          "title": "Breastfeeding",
          "paragraphs": [
            "Drug and epoxide enter human milk. Current Equetro wording supports individualized consideration of feeding benefits and maternal treatment, acknowledging reported infant liver/feeding/weight problems and unknown milk-production effects. Tegretol/Carbatrol retain more restrictive nursing language. Discuss the actual product and infant circumstances; milk transfer is not zero and these differences do not establish a universal breastfeeding prohibition or compatibility guarantee."
          ],
          "sources": [
            "tegretol",
            "carbatrol",
            "equetro"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Carbamazepine has formulation-dependent absorption and hepatic autoinduction.",
      "takeaway": "A concentration must be interpreted with symptoms, timing, adherence and interacting drugs.",
      "blocks": [
        {
          "title": "Mechanism and active metabolite",
          "paragraphs": [
            "Labels describe anticonvulsant effects on neuronal transmission but do not establish a complete human mechanism for every indication; Equetro’s antimanic mechanism is unclear. CYP3A4 forms carbamazepine-10,11-epoxide, which has anticonvulsant activity; epoxide hydrolase further metabolizes it. Do not equate parent level alone with total active-metabolite toxicity."
          ],
          "sources": [
            "tegretol",
            "carbatrol",
            "equetro"
          ]
        },
        {
          "title": "Absorption and elimination",
          "paragraphs": [
            "Suspension has faster/higher peaks than an equivalent IR dose; release formulations use different peak times. Protein binding is about 76%. Tegretol initial half-life spans roughly 25–65 hours and falls to 12–17 hours with repeated use; autoinduction develops over about three to five weeks. Most urinary elimination is metabolites, not unchanged drug. The usual total concentration range is 4–12 mcg/mL, a clinical aid rather than a universal target for every indication or an instruction to redose."
          ],
          "sources": [
            "tegretol",
            "carbatrol",
            "equetro"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Monitor response, blood/liver indices, sodium risk and meaningful changes in exposure.",
      "takeaway": "Keep exact release formulation and frequency visible on the medication list.",
      "blocks": [
        {
          "title": "Baseline and follow-up",
          "paragraphs": [
            "Assess seizure type, blood counts, liver function, relevant HLA status and interacting medicines before treatment. Labels recommend periodic liver, renal/urinalysis and eye assessment; Carbatrol also recommends lipid review. Monitor sodium when risk or symptoms warrant, CBC abnormalities closely and mood/coordination throughout. Drug concentrations are useful for poor control, suspected toxicity, adherence questions and interaction/formulation changes; no one fixed interval applies to every patient."
          ],
          "sources": [
            "tegretol",
            "carbatrol",
            "equetro"
          ]
        },
        {
          "title": "Patient counseling and urgent action",
          "paragraphs": [
            "Read the Medication Guide; take the prescribed formulation consistently and do not double or abruptly stop treatment without advice. Avoid driving until effects are known and discuss alcohol/sedatives. Seek immediate care for serious rash/blisters, mouth sores, fever, unusual bleeding, jaundice, swelling/breathing trouble or suicidal intent. Confusion, falls or increasing seizures may indicate low sodium or toxicity, not simply treatment failure. Suspected overdose needs emergency/poison-center care; do not induce vomiting at home."
          ],
          "sources": [
            "tegretol",
            "equetro"
          ]
        },
        {
          "title": "Long-term coordination",
          "paragraphs": [
            "Recheck contraception, pregnancy plans and every new OTC/herbal or prescription medicine. Neuralgia treatment needs periodic attempts at clinician-directed minimum effective dosing; epilepsy or mania reassessment uses its own disease plan. Do not combine duplicate carbamazepine products to imitate a desired release formulation."
          ],
          "sources": [
            "tegretol",
            "equetro"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "IR tablets, XR tablets, ER beads and suspension have distinct handling.",
      "takeaway": "Verify brand/manufacturer, concentration and release mechanism before substitution.",
      "blocks": [
        {
          "title": "Representative product identity",
          "paragraphs": [
            "Selected Tegretol 200 mg IR tablets are pink, capsule-shaped and scored, marked Tegretol and 27 twice; a 100-tablet bottle is NDC 0078-0509-05. XR 100/200/400 mg tablets are yellow/pink/brown, marked T and strength with a release portal. Carbatrol and Equetro capsule colors/imprints differ; appearance alone cannot establish interchangeability."
          ],
          "sources": [
            "tegretol"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Tegretol: 200 mg IR tablets, XR 100/200/400 mg tablets and 100 mg/5 mL oral suspension. Carbatrol/Equetro: 100/200/300 mg ER capsules with beads. The selected Tegretol suspension is yellow-orange, citrus-vanilla flavored and supplied in 450 mL bottles; check calibrated mL. Carnexiv’s withdrawn NDA is a separate IV regulatory record, not permission to inject an oral product."
          ],
          "sources": [
            "tegretol",
            "carbatrol",
            "equetro",
            "withdrawal"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Tegretol tablets/XR: 20–25°C, permitted excursions 15–30°C, protected from moisture in a tight container; suspension: do not store above 30°C, use a tight light-resistant container and shake well. Carbatrol/Equetro: 25°C with permitted 15–30°C excursions, protected from light/moisture. Keep ER beads intact, XR tablets uncrushed and the exact dispensing label with the medicine; no universal opened-liquid expiry is inferred."
          ],
          "sources": [
            "tegretol",
            "carbatrol",
            "equetro"
          ]
        }
      ]
    }
  ]
};
