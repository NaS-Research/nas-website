// Original clinical summaries checked against the product-specific public sources below.
export const oxcarbazepine = {
  "slug": "oxcarbazepine",
  "name": "Oxcarbazepine",
  "synonym": "Trileptal · Oxtellar XR · Antiseizure drug",
  "description": "Formulation-specific partial-onset seizure dosing, sodium/hypersensitivity safety and interaction monitoring.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Monitor sodium and serious reactions.",
    "text": "Urgently assess serious rash, airway swelling, confusion or seizure worsening. Do not abruptly withdraw routine therapy or independently substitute IR and XR.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "IR schedule",
      "Twice daily; age limits depend on treatment setting"
    ],
    [
      "XR schedule",
      "Once daily on an empty stomach; age 6+"
    ],
    [
      "Key interaction",
      "Reduced hormonal-contraceptive effectiveness"
    ]
  ],
  "sources": [
    {
      "id": "ir",
      "title": "Trileptal · Current immediate-release full label",
      "publisher": "Novartis / DailyMed",
      "note": "Revised 09/2025; SPL 39 effective December 16, 2025; published December 18, 2025.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4c5c86c8-ab7f-4fcf-bc1b-5a0b1fd0691b"
    },
    {
      "id": "er",
      "title": "Oxtellar XR · Current extended-release full label",
      "publisher": "Supernus / DailyMed",
      "note": "PI revised 08/2024, Medication Guide 12/2018; SPL 22 effective September 15, 2026; published September 17, 2026. Publication is not a new clinical revision.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=aa610e56-1d1d-11e1-8bc2-0800200c9a66"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Oxcarbazepine is an oral antiseizure drug for partial-onset seizures.",
      "takeaway": "Age approvals and schedules differ between immediate and extended release.",
      "blocks": [
        {
          "title": "Immediate-release approval",
          "paragraphs": [
            "Trileptal is labeled for adult monotherapy or adjunctive treatment of partial-onset seizures, pediatric monotherapy from age 4 and pediatric adjunctive therapy from age 2. Pediatric schedules specifically cover ages 2–16 or 4–16. Evidence from younger infants in trials does not create an approval below these age limits. It is not an acute injectable rescue product."
          ],
          "sources": [
            "ir"
          ]
        },
        {
          "title": "Extended-release and scope",
          "paragraphs": [
            "Oxtellar XR treats partial-onset seizures in patients age 6 and older. Its pediatric once-daily regimen covers 6 to younger than 17 years; patients 17 and older use the adult schedule. Both selected products are prescription NDA products. No bipolar, pain, generalized-epilepsy or universal first-line claim is inferred from the antiseizure mechanism."
          ],
          "sources": [
            "er"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Titrate by formulation, age, treatment setting, weight and renal function.",
      "takeaway": "All pediatric mg/kg/day amounts below are total daily doses, not each dose.",
      "blocks": [
        {
          "title": "Adult immediate-release regimens",
          "paragraphs": [
            "Start 600 mg/day divided twice daily, ordinarily 300 mg per dose. Adjunctive therapy increases by no more than 600 mg/day at approximately weekly intervals; recommended maximum is 1200 mg/day, with higher studied doses less well tolerated. For conversion to monotherapy, reduce other antiseizure drugs over 3–6 weeks while titrating by up to 600 mg/day weekly toward 2400 mg/day over 2–4 weeks. For untreated-patient monotherapy, increase by 300 mg/day every third day to 1200 mg/day. These are distinct label settings; 2400 mg/day is not a universal initial or adjunctive target."
          ],
          "sources": [
            "ir"
          ],
          "table": {
            "headers": [
              "IR adult treatment setting",
              "Total daily dose / divided twice daily"
            ],
            "rows": [
              [
                "Initial dose",
                "600 mg/day"
              ],
              [
                "Adjunctive recommended maximum",
                "1200 mg/day; titrate at approximately weekly intervals"
              ],
              [
                "Conversion monotherapy",
                "Up to 2400 mg/day with supervised companion taper"
              ],
              [
                "Initiating monotherapy",
                "Increase 300 mg/day every third day to 1200 mg/day"
              ]
            ]
          }
        },
        {
          "title": "Pediatric immediate-release adjunctive therapy",
          "paragraphs": [
            "Ages 4–16: start 8–10 mg/kg/day divided twice daily, generally at most 600 mg/day initially, with weight-based maintenance over two weeks. The current source gives 900 mg/day for 20–29 kg and 1200 mg/day for 29.1–39 kg, but its next line says 39 kg/1800 mg without a greater-than sign, creating an overlapping boundary; verify the higher-weight target with the specialist rather than infer it here. Ages 2 to younger than 4: same usual start; under 20 kg the clinician may consider 16–20 mg/kg/day. Titrate over 2–4 weeks to at most 60 mg/kg/day divided twice daily. These younger-child instructions do not apply to XR."
          ],
          "sources": [
            "ir"
          ]
        },
        {
          "title": "Pediatric immediate-release monotherapy",
          "paragraphs": [
            "Ages 4–16: start 8–10 mg/kg/day in two doses. Untreated initiation increases 5 mg/kg/day every third day; conversion increases at most 10 mg/kg/day approximately weekly while withdrawing companion drugs over 3–6 weeks. The label’s discrete maintenance-weight rows are below; assess nonlisted weights and clinical tolerance with the treating team, rather than invent interpolation or use an adjunctive target."
          ],
          "sources": [
            "ir"
          ],
          "table": {
            "headers": [
              "Weight in label monotherapy table",
              "Maintenance total mg/day · divided twice daily"
            ],
            "rows": [
              [
                "20 kg",
                "600–900"
              ],
              [
                "25 or 30 kg",
                "900–1200"
              ],
              [
                "35 or 40 kg",
                "900–1500"
              ],
              [
                "45 kg",
                "1200–1500"
              ],
              [
                "50 or 55 kg",
                "1200–1800"
              ],
              [
                "60 or 65 kg",
                "1200–2100"
              ],
              [
                "70 kg",
                "1500–2100"
              ]
            ]
          }
        },
        {
          "title": "Extended-release adult and pediatric regimens",
          "paragraphs": [
            "Adults start 600 mg once daily for one week, then increase by 600 mg/day at weekly intervals toward 1200–2400 mg once daily as tolerated. Ages 6 to younger than 17 start 8–10 mg/kg once daily, maximum 600 mg in week one; increase 8–10 mg/kg/day, at most 600 mg per increment, weekly. Pediatric maintenance is usually reached over 2–3 weeks: 900 mg/day at 20–29 kg, 1200 at 29.1–39 kg and 1800 above 39 kg. This XR table’s explicit greater-than boundary does not silently correct Trileptal’s source ambiguity."
          ],
          "sources": [
            "er"
          ],
          "table": {
            "headers": [
              "XR population / weight",
              "Once-daily schedule"
            ],
            "rows": [
              [
                "Adults",
                "600 mg initially; 1200–2400 mg/day recommended maintenance"
              ],
              [
                "Age 6 to < 17 · initial",
                "8–10 mg/kg/day; maximum 600 mg in first week"
              ],
              [
                "Pediatric 20–29 kg",
                "900 mg/day target"
              ],
              [
                "Pediatric 29.1–39 kg",
                "1200 mg/day target"
              ],
              [
                "Pediatric > 39 kg",
                "1800 mg/day target"
              ]
            ]
          }
        },
        {
          "title": "Renal, older-patient and inducer dosing",
          "paragraphs": [
            "At CrCl < 30 mL/min, adult IR starts half the usual total dose: 300 mg/day divided twice daily, increasing slowly. Adult XR also starts 300 mg/day, with weekly 300–450 mg/day increments; older XR patients may start 300–450 mg/day. Strong CYP3A4/UGT inducers require response/MHD-guided adjustment; XR label permits consideration of adult 900 mg/day or pediatric 12–15 mg/kg/day, maximum 900 mg in week one. Dialysis patients should use IR instead of XR under its label; no universal dialysis supplement is supplied."
          ],
          "sources": [
            "ir",
            "er"
          ]
        },
        {
          "title": "Food, suspension and formulation changes",
          "paragraphs": [
            "IR may be taken with or without food; shake suspension well, promptly measure with supplied oral syringe, and swallow directly or mix with a small glass of water. 300 mg/5 mL equals 60 mg/mL. Trileptal tablets and suspension may substitute at equal mg doses. XR is once daily on an empty stomach, at least one hour before or two hours after meals; swallow whole, never cut/crush/chew. XR is not bioequivalent to the same daily IR amount and conversion may require a higher XR dose. Do not convert formulations independently."
          ],
          "sources": [
            "ir",
            "er"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Hyponatremia, severe hypersensitivity, neuropsychiatric effects and seizure worsening require vigilance.",
      "takeaway": "Do not abruptly withdraw routine therapy; serious reactions need urgent clinical direction.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Monitor for low sodium, including nausea, malaise, headache, lethargy, confusion or more seizures; it can arise early or after prolonged therapy. Anaphylaxis/angioedema requires stopping and urgent treatment; do not rechallenge after such a reaction. Carbamazepine hypersensitivity predicts substantial cross-reaction risk. SJS/TEN and DRESS can be fatal; fever or lymph-node swelling may precede an obvious rash.",
            "Consider HLA-B*1502 testing before initiation in genetically at-risk ancestry; generally avoid treatment in positive patients unless benefit clearly outweighs risk. A negative result does not remove skin-reaction vigilance. Watch suicidal thoughts, mood change, cognitive slowing, dizziness, sleepiness, gait/coordination problems and rare blood-cell disorders. Seizures can worsen, including new generalized seizures. Usually withdraw gradually to reduce seizure/status risk; severe adverse events can require faster clinician-directed discontinuation."
          ],
          "sources": [
            "ir",
            "er"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "Known hypersensitivity to oxcarbazepine, product components or eslicarbazepine acetate is contraindicated. Prior carbamazepine hypersensitivity is separately a strong precaution, not permission to assume oxcarbazepine is a harmless substitute."
          ],
          "sources": [
            "ir",
            "er"
          ]
        },
        {
          "title": "Boxed-warning status",
          "paragraphs": [
            "The selected Trileptal and Oxtellar XR full labels have no formal boxed warning. The class suicidality warning, serious skin/hypersensitivity reactions, sodium reduction and withdrawal risks remain significant."
          ],
          "sources": [
            "ir",
            "er"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Common effects include dizziness, somnolence, diplopia/visual disturbance, fatigue, nausea/vomiting, headache, ataxia and gait abnormalities; severity can limit higher doses. Serious reports include hyponatremia, severe skin or multisystem reactions, angioedema and blood-cell abnormalities. Frequencies differ across populations and trial regimens; no universal rate is supplied."
          ],
          "sources": [
            "ir",
            "er"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Enzyme effects change antiseizure-drug and hormonal-contraceptive exposure.",
      "takeaway": "Arrange additional or alternative nonhormonal contraception when appropriate.",
      "blocks": [
        {
          "title": "Hormonal contraception",
          "paragraphs": [
            "Oxcarbazepine reduces exposure to ethinylestradiol/levonorgestrel and may cause contraceptive failure. Counsel on additional or alternative nonhormonal contraception. Evidence for specific oral hormones does not establish that every other hormonal method is unaffected; review the actual contraception with the clinician."
          ],
          "sources": [
            "ir",
            "er"
          ]
        },
        {
          "title": "Phenytoin and enzyme inducers",
          "paragraphs": [
            "Phenytoin exposure can increase, especially with oxcarbazepine doses above 1200 mg/day; monitor levels during titration and adjust phenytoin when needed. Carbamazepine, phenytoin, phenobarbital and rifampin can lower active MHD exposure; monitor seizure control/MHD as indicated and reassess when inducers start, change or stop. These are bidirectional interactions, not a universal fixed percentage correction."
          ],
          "sources": [
            "ir",
            "er"
          ]
        },
        {
          "title": "Other exposure and additive effects",
          "paragraphs": [
            "CYP3A4/5 induction can lower exposure to some calcium-channel blockers and cyclosporine; CYP2C19 inhibition can increase susceptible substrates. Alcohol can add sedation. Other sodium-lowering drugs increase the need for sodium assessment. Review the complete medication list, including new prescriptions and over-the-counter agents, rather than assume an antiseizure drug has no interactions."
          ],
          "sources": [
            "ir",
            "er"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Pediatric approval, renal clearance and reproductive issues are formulation-specific.",
      "takeaway": "Pregnancy seizure control and medication monitoring require coordinated care.",
      "blocks": [
        {
          "title": "Pregnancy",
          "paragraphs": [
            "Do not abruptly stop for pregnancy; uncontrolled seizures/status can threaten mother and fetus. Current Trileptal human observational data have not demonstrated increased major-malformation prevalence, but important limitations remain and animal developmental toxicity exists. Oxtellar retains older more cautious registry wording; neither establishes absence of risk. MHD levels can fall during pregnancy and rebound postpartum, so follow seizure control/levels and individualize doses. Discuss pregnancy planning and the North American pregnancy registry."
          ],
          "sources": [
            "ir",
            "er"
          ]
        },
        {
          "title": "Lactation",
          "paragraphs": [
            "Oxcarbazepine and MHD are present in human milk; infant and milk-production effects are insufficiently characterized in these labels. Weigh infant vulnerability, maternal seizure-treatment need and feeding benefits. The label does not establish zero infant exposure or a universal feeding interruption."
          ],
          "sources": [
            "ir",
            "er"
          ]
        },
        {
          "title": "Kidney, liver and older age",
          "paragraphs": [
            "Kidney dysfunction prolongs active-metabolite exposure; reduce starting doses at CrCl < 30 and titrate carefully. Older patients may have higher MHD exposure from reduced clearance and need sodium/clinical monitoring. Mild/moderate hepatic impairment did not alter IR disposition in studies; severe hepatic impairment is unstudied and XR is not recommended. IR data do not create a validated severe-hepatic regimen."
          ],
          "sources": [
            "ir",
            "er"
          ]
        },
        {
          "title": "Children and obesity",
          "paragraphs": [
            "IR and XR age limits and weight schedules differ; do not apply adult or XR schedules to younger IR-treated children. Current PK analyses do not require an adjustment solely for obesity status within the studied pediatric scope. That finding does not replace the approved age/weight regimen or individualized renal/interaction assessment."
          ],
          "sources": [
            "ir",
            "er"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "The active MHD metabolite contributes most antiseizure activity.",
      "takeaway": "Different release profiles change dosing and food instructions.",
      "blocks": [
        {
          "title": "Mechanism",
          "paragraphs": [
            "The precise clinical mechanism is not fully established. Electrophysiology supports voltage-sensitive sodium-channel blockade, stabilization of hyperexcitable membranes and reduced repetitive firing; potassium/calcium effects may contribute. These findings support partial-onset seizure treatment without proving efficacy for every seizure type."
          ],
          "sources": [
            "ir",
            "er"
          ]
        },
        {
          "title": "Immediate-release disposition",
          "paragraphs": [
            "Oxcarbazepine is absorbed and rapidly converted to active MHD; parent half-life is about two hours and MHD about nine hours. Metabolites are predominantly renally excreted. IR MHD steady state occurs in 2–3 days; tablets/suspension have similar bioavailability. Severe renal impairment approximately doubles exposure in the cited study, supporting lower starting doses."
          ],
          "sources": [
            "ir"
          ]
        },
        {
          "title": "Extended-release disposition",
          "paragraphs": [
            "XR is not bioequivalent to the same total IR dose: studied once-daily 1200 mg produced lower MHD exposure than 1200 mg/day IR divided twice daily. MHD steady state occurs within five days; studied peak is around seven hours. Food increases peak concentrations even when overall exposure is similar, explaining empty-stomach administration. Do not apply IR parent half-life or equal-dose substitution as a universal XR rule."
          ],
          "sources": [
            "er"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Assess seizures, sodium risk, allergy history, organ function and interactions.",
      "takeaway": "Confirm the release type and total daily versus per-dose instructions.",
      "blocks": [
        {
          "title": "Monitoring",
          "paragraphs": [
            "Follow seizure frequency/type, mood/suicidality, alertness, gait and skin/systemic symptoms. Consider sodium measurements during maintenance, especially with sodium-lowering medicines or symptoms; assess kidney function for dose selection. Use MHD or companion levels when interaction, pregnancy or clinical-response circumstances warrant. No mandatory universal therapeutic range or laboratory interval is asserted."
          ],
          "sources": [
            "ir",
            "er"
          ]
        },
        {
          "title": "Counseling and urgent reactions",
          "paragraphs": [
            "Take exactly as prescribed and avoid driving/hazardous activity until effects are known; alcohol adds impairment. Do not abruptly stop or independently switch IR/XR. Seek urgent care for airway swelling, serious rash/blisters, fever with swollen nodes, confusion/seizure worsening or concerning suicidal thoughts. Discuss contraception, pregnancy plans and every medication change."
          ],
          "sources": [
            "ir",
            "er"
          ]
        },
        {
          "title": "Suspension handling",
          "paragraphs": [
            "Shake well, use the supplied oral dosing syringe and verify 60 mg/mL against the prescription. Rinse/dry the syringe after use and record first opening; discard unused suspension after seven weeks. Household spoons are inaccurate. A missed-dose plan should come from the prescribing team rather than unsupervised doubling."
          ],
          "sources": [
            "ir"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Selected products are oral IR tablets/suspension and XR tablets.",
      "takeaway": "Shared tablet strengths do not prove interchangeable release.",
      "blocks": [
        {
          "title": "Representative product identity",
          "paragraphs": [
            "Trileptal 300 mg tablet is yellow, scored and imprinted TE/TE and CG/CG; 100-tablet bottle NDC 0078-0337-05. Trileptal suspension 300 mg/5 mL is in a 250 mL amber bottle, NDC 0078-0357-52, with syringe/adapter. Oxtellar XR 300 mg is brown modified oval, printed 300; 100-tablet bottle NDC 17772-122-01. Generic appearance varies; verify labeled packaging."
          ],
          "sources": [
            "ir",
            "er"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Both selected tablet lines have 150, 300 and 600 mg strengths, but Trileptal is immediate release and Oxtellar XR extended release. Trileptal suspension is 300 mg/5 mL (60 mg/mL), not an XR liquid. No injectable oxcarbazepine or home-made extended-release suspension is supplied."
          ],
          "sources": [
            "ir",
            "er"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Trileptal tablets/suspension: 20–25°C with 15–30°C excursions; tablets in a tight container, suspension in its original bottle and discarded seven weeks after first opening. Oxtellar XR: 25°C with 15–30°C excursions, protected from light/moisture in a tight light-resistant container. Preserve each product’s instructions and keep away from children."
          ],
          "sources": [
            "ir",
            "er"
          ]
        }
      ]
    }
  ]
};
