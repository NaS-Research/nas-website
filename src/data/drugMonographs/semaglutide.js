// Original clinical summaries checked against the product-specific public sources below.
export const semaglutide = {
  "slug": "semaglutide",
  "name": "Semaglutide",
  "synonym": "Ozempic · Rybelsus · Wegovy",
  "description": "A GLP-1 receptor agonist supplied as distinct oral and injectable products. Approved uses, escalation, maintenance doses and storage differ by brand, formulation and population; this reference follows the current U.S. manufacturer labels.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Verify the brand, route and escalation schedule.",
    "text": "Do not substitute semaglutide products milligram for milligram. All reviewed products carry the thyroid C-cell tumor boxed warning and are contraindicated with personal or family medullary thyroid carcinoma or MEN2. Tell procedural teams about treatment before anesthesia or deep sedation.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "GLP-1 receptor agonist"
    ],
    [
      "Administration",
      "Product-specific daily oral or weekly subcutaneous"
    ],
    [
      "Reference focus",
      "Current Ozempic, Rybelsus and Wegovy U.S. labels"
    ]
  ],
  "sources": [
    {
      "id": "oz",
      "title": "Ozempic injection · Prescribing information",
      "publisher": "Novo Nordisk",
      "note": "Revised May 2026; current multidose pens and single-dose syringes. Diabetes, cardiovascular and kidney indications.",
      "url": "https://www.novo-pi.com/ozempic.pdf"
    },
    {
      "id": "oral",
      "title": "Rybelsus and Ozempic tablets · Prescribing information",
      "publisher": "Novo Nordisk",
      "note": "Revised January 2026; distinct 3/7/14 mg and 1.5/4/9 mg oral formulations.",
      "url": "https://www.novo-pi.com/ozempictablets.pdf"
    },
    {
      "id": "wg",
      "title": "Wegovy injection and tablets · Prescribing information",
      "publisher": "Novo Nordisk",
      "note": "Revised June 2026; includes 25 mg oral maintenance, 7.2 mg injection and FlexTouch. Product-specific MASH and pediatric limits.",
      "url": "https://www.novo-pi.com/wegovy.pdf"
    },
    {
      "id": "fda",
      "title": "Wegovy HD · FDA approval announcement",
      "publisher": "U.S. Food and Drug Administration",
      "note": "March 19, 2026 approval of the 7.2 mg product for adult weight management.",
      "url": "https://www.fda.gov/news-events/press-announcements/fda-approves-fourth-product-under-national-priority-voucher-program-higher-dose-semaglutide"
    },
    {
      "id": "mood",
      "title": "GLP-1 medicines · Suicidality warning removal",
      "publisher": "U.S. Food and Drug Administration",
      "note": "January 13, 2026: FDA review found no increased risk and requested removal of the affected warnings.",
      "url": "https://www.fda.gov/drugs/drug-safety-communications/fda-requests-removal-suicidal-behavior-and-ideation-warning-glucagon-peptide-1-receptor-agonist-glp"
    },
    {
      "id": "eye",
      "title": "Semaglutide · NAION safety assessment",
      "publisher": "European Medicines Agency",
      "note": "June 6, 2025: European regulatory advice on very rare optic nerve injury; distinguished from current U.S. prescribing information.",
      "url": "https://www.ema.europa.eu/en/news/prac-concludes-eye-condition-naion-very-rare-side-effect-semaglutide-medicines-ozempic-rybelsus-wegovy"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "The active ingredient does not make indications interchangeable.",
      "takeaway": "Match the indication to the exact product, age and route.",
      "blocks": [
        {
          "title": "Diabetes, cardiovascular and kidney indications",
          "paragraphs": [
            "Ozempic injection treats adult type 2 diabetes alongside diet and exercise; it also reduces major cardiovascular events in adults with type 2 diabetes and established cardiovascular disease, and specified kidney/CV outcomes in adults with type 2 diabetes and CKD. Rybelsus and Ozempic tablets treat adult type 2 diabetes and reduce major cardiovascular events in adults with type 2 diabetes at high cardiovascular risk. The oral diabetes label does not establish the injection’s kidney-outcome indication."
          ],
          "sources": [
            "oz",
            "oral"
          ]
        },
        {
          "title": "Weight management and cardiovascular prevention",
          "paragraphs": [
            "Wegovy injection and tablets are adjuncts to reduced-calorie nutrition and activity for adult weight reduction and long-term maintenance in obesity, or overweight with at least one weight-related condition. Both reduce major cardiovascular events in adults with established cardiovascular disease and obesity or overweight. Only Wegovy injection has the pediatric weight indication, for age 12 years or older with obesity."
          ],
          "sources": [
            "wg"
          ]
        },
        {
          "title": "MASH and limits of extrapolation",
          "paragraphs": [
            "Wegovy injection treats adults with noncirrhotic metabolic dysfunction-associated steatohepatitis and moderate-to-advanced fibrosis (F2–F3). This is accelerated approval based on histologic improvement; continued approval may depend on confirmation of clinical benefit. The MASH indication does not apply to oral Wegovy or the 7.2 mg weight-management regimen. Ozempic is not approved as a weight-management or MASH product."
          ],
          "sources": [
            "wg",
            "oz"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Start low, escalate by product and use the correct maintenance target.",
      "takeaway": "Starter doses are not interchangeable with therapeutic maintenance doses.",
      "blocks": [
        {
          "title": "Ozempic injection",
          "paragraphs": [
            "Start 0.25 mg subcutaneously once weekly for 4 weeks, then 0.5 mg weekly. For additional glucose control, increase to 1 mg after at least 4 weeks at 0.5 mg, then to 2 mg after at least 4 weeks at 1 mg. The maximum is 2 mg weekly. For the type 2 diabetes/CKD outcome indication, use 1 mg weekly after at least 4 weeks at 0.5 mg."
          ],
          "sources": [
            "oz"
          ]
        },
        {
          "title": "Rybelsus and Ozempic oral escalation",
          "paragraphs": [
            "Take only one prescribed tablet each day. The initial 30-day doses below are initiation doses and are not effective doses for glycemic control. These two formulations cannot be substituted milligram for milligram."
          ],
          "sources": [
            "oral"
          ],
          "table": {
            "headers": [
              "Product",
              "Days 1–30",
              "Days 31–60",
              "Day 61 onward"
            ],
            "rows": [
              [
                "Rybelsus",
                "3 mg daily",
                "7 mg daily",
                "7 mg; increase to 14 mg if needed"
              ],
              [
                "Ozempic tablets",
                "1.5 mg daily",
                "4 mg daily",
                "4 mg; increase to 9 mg if needed"
              ]
            ]
          }
        },
        {
          "title": "Wegovy injection escalation",
          "paragraphs": [
            "Weekly escalation is 0.25 mg for weeks 1–4, 0.5 mg for weeks 5–8, 1 mg for weeks 9–12 and 1.7 mg for weeks 13–16. If a dose is poorly tolerated, consider delaying the next step by 4 weeks. Choose the maintenance regimen by indication."
          ],
          "sources": [
            "wg"
          ],
          "table": {
            "headers": [
              "Population / indication",
              "Maintenance"
            ],
            "rows": [
              [
                "Adult weight management",
                "2.4 mg recommended or 1.7 mg weekly; if additional reduction needed and 2.4 mg tolerated ≥4 weeks, may increase to 7.2 mg"
              ],
              [
                "Adult cardiovascular risk reduction",
                "2.4 mg recommended or 1.7 mg weekly"
              ],
              [
                "Age ≥12, obesity",
                "2.4 mg recommended or 1.7 mg weekly"
              ],
              [
                "Adult noncirrhotic MASH, F2–F3",
                "2.4 mg weekly; reduce to 1.7 mg if needed for tolerance and consider re-escalation"
              ]
            ]
          }
        },
        {
          "title": "Wegovy oral escalation",
          "paragraphs": [
            "For adult weight management or cardiovascular risk reduction, take 1.5 mg daily for days 1–30, 4 mg for days 31–60, 9 mg for days 61–90, then 25 mg daily from day 91. Delay escalation if needed for GI tolerance. If 25 mg cannot be tolerated, consider the labeled switch to 1.7 mg weekly injection. Oral Wegovy is not a pediatric or MASH regimen."
          ],
          "sources": [
            "wg"
          ]
        },
        {
          "title": "Administration",
          "paragraphs": [
            "Inject weekly into abdomen, thigh or upper arm, rotating sites; meals do not determine injection timing. Do not mix with insulin; use separate nonadjacent sites. Oral products require an empty stomach in the morning with plain water, no more than 4 ounces; swallow whole and wait at least 30 minutes before food, other drinks or oral medicines. Do not crush, split or dissolve tablets."
          ],
          "sources": [
            "oz",
            "oral",
            "wg"
          ]
        },
        {
          "title": "Missed doses",
          "paragraphs": [
            "Ozempic injection: take within 5 days of the missed dose, otherwise skip; changing the weekly day requires more than 48 hours between injections. Wegovy injection: take a missed dose if the next is more than 2 days away, or skip if less than 2 days away; after two or more consecutive missed doses, reinitiate escalation at a lower dose. A missed oral dose is skipped; take the next tablet the following day."
          ],
          "sources": [
            "oz",
            "oral",
            "wg"
          ]
        },
        {
          "title": "Switching regimens",
          "paragraphs": [
            "Use only the label-supported transition. After the initiation phase, Rybelsus 7 mg corresponds to Ozempic tablets 4 mg, and Rybelsus 14 mg to Ozempic tablets 9 mg; start the new formulation the next day. The combined oral label provides transitions from Ozempic injection 0.5 mg one week later to Rybelsus 7 or 14 mg daily or Ozempic tablets 4 or 9 mg daily. For adult Wegovy weight/CV therapy, transition from 2.4 mg injection to 25 mg oral one week later, or from 25 mg oral to 2.4 mg weekly injection the next day (consider 1.7 mg if 25 mg is not tolerated). Do not invent equivalence for other doses or brands."
          ],
          "sources": [
            "oral",
            "wg"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Gastrointestinal symptoms can have important downstream effects.",
      "takeaway": "Assess severe abdominal symptoms, dehydration or visual changes promptly.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Stop and assess suspected pancreatitis. Persistent vomiting or diarrhea can cause volume depletion and acute kidney injury; monitor renal function when these occur, especially during escalation. Severe GI reactions occur; the reviewed products are not recommended in severe gastroparesis. Gallbladder symptoms warrant investigation.",
            "Rapid glucose improvement may worsen existing diabetic retinopathy; monitor patients with a history. Insulin or sulfonylureas increase hypoglycemia risk. Hypersensitivity can be serious. Pulmonary aspiration has been reported during general anesthesia or deep sedation despite fasting; alert the procedural team. Labels do not establish a universally effective hold interval or fasting modification. Never share an injection pen.",
            "Monitor heart rate during Wegovy treatment; sustained resting increases warrant discontinuation. The June 2026 label no longer includes the prior suicidality warning. FDA’s January 2026 review found no increased risk and requested removal; do not carry forward the superseded avoidance instruction.",
            "EMA identifies non-arteritic anterior ischemic optic neuropathy as a very rare semaglutide adverse effect. Sudden vision loss or rapidly worsening sight needs prompt assessment; EMA advises stopping semaglutide if NAION is confirmed. This is European regulatory guidance, distinct from the diabetic-retinopathy warning in the reviewed U.S. labels."
          ],
          "sources": [
            "oz",
            "oral",
            "wg",
            "mood",
            "eye"
          ],
          "badge": "Clinical alert",
          "tone": "warning",
          "open": true
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "Personal or family history of medullary thyroid carcinoma, MEN2, and a prior serious hypersensitivity reaction to semaglutide or the particular product’s ingredients are contraindications. Wegovy’s separate limitations-of-use statement says coadministration with other semaglutide products or another GLP-1 receptor agonist is not recommended."
          ],
          "sources": [
            "oz",
            "oral",
            "wg"
          ]
        },
        {
          "title": "Boxed warning · Thyroid C-cell tumors",
          "paragraphs": [
            "Semaglutide causes thyroid C-cell tumors in rodents; relevance to humans is unknown. Counsel about a neck mass, persistent hoarseness or difficulty swallowing or breathing. Routine calcitonin testing or thyroid ultrasound has uncertain value for early detection; investigate concerning findings rather than treating screening as mandatory."
          ],
          "sources": [
            "oz",
            "oral",
            "wg"
          ],
          "badge": "Boxed warning",
          "tone": "warning"
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Nausea, vomiting and diarrhea are prominent; abdominal symptoms and constipation also occur. Frequency and severity vary by dose, route and study population. Ileus, intestinal obstruction and severe constipation have been reported after approval; spontaneous reports do not establish incidence.",
            "Altered skin sensation (dysesthesia) was more frequent in Wegovy 7.2 mg trials. In those trials, dose reduction or interruption was often followed by recovery; persistent or intolerable symptoms need clinical review."
          ],
          "sources": [
            "oz",
            "oral",
            "wg"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Review drugs affected by glucose changes or oral absorption.",
      "takeaway": "Oral semaglutide timing and glucose-lowering combinations need a plan.",
      "blocks": [
        {
          "title": "Insulin and insulin secretagogues",
          "paragraphs": [
            "Hypoglycemia risk increases with insulin or sulfonylureas; reducing their dose may be necessary. Educate patients about recognition and management, and reassess glucose after starting or increasing semaglutide."
          ],
          "sources": [
            "oz",
            "oral",
            "wg"
          ]
        },
        {
          "title": "Oral medicines and duplicate therapy",
          "paragraphs": [
            "Delayed gastric emptying can affect oral drug absorption. Monitor medicines with narrow therapeutic ranges or those needing clinical or laboratory surveillance. Oral semaglutide must precede other oral medicines by at least 30 minutes; the oral labels report increased thyroxine exposure with levothyroxine and support thyroid-parameter monitoring. Avoid duplicate semaglutide prescriptions; Wegovy’s label recommends against concurrent semaglutide or other GLP-1 therapy."
          ],
          "sources": [
            "oz",
            "oral",
            "wg"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Route and indication matter in pregnancy, lactation and childhood.",
      "takeaway": "Review reproductive plans and use the product-specific age limits.",
      "blocks": [
        {
          "title": "Pregnancy and conception planning",
          "paragraphs": [
            "Plan discontinuation at least 2 months before intended pregnancy because elimination is prolonged. For Wegovy weight/CV use, discontinue when pregnancy is recognized. Wegovy MASH and Ozempic/Rybelsus diabetes treatment require an individualized benefit–fetal-risk assessment; limited human data and adverse animal findings preclude assuming safety. Arrange alternative disease management."
          ],
          "sources": [
            "oz",
            "oral",
            "wg"
          ]
        },
        {
          "title": "Breastfeeding",
          "paragraphs": [
            "Breastfeeding is not recommended with the reviewed oral products because their absorption enhancer, SNAC, enters milk and infant accumulation is a concern. Injection does not contain this enhancer; its labeling calls for weighing maternal treatment need, breastfeeding benefits and potential infant risk. Do not apply the oral restriction automatically to injectable therapy."
          ],
          "sources": [
            "oz",
            "oral",
            "wg"
          ]
        },
        {
          "title": "Pediatric and older populations",
          "paragraphs": [
            "Only the lower-dose Wegovy injection weight regimen is approved from age 12 years for obesity. Pediatric use of oral Wegovy, Wegovy 7.2 mg, Ozempic and Rybelsus is not established. In the Wegovy cardiovascular trial, patients aged 75 or older had more hip/pelvic fractures and more serious adverse reactions; assess tolerance and individual risks."
          ],
          "sources": [
            "oz",
            "oral",
            "wg"
          ]
        },
        {
          "title": "Renal, hepatic and oral Wegovy evidence limits",
          "paragraphs": [
            "Ozempic injection and the oral diabetes label recommend no renal or hepatic dose adjustment, including renal failure in their reviewed pharmacokinetic data. Wegovy reports no clinically important exposure differences across the studied renal range (eGFR 30 to below 90) or hepatic impairment; this does not establish equivalent evidence in every advanced kidney population. Acute volume depletion still requires renal monitoring. Oral Wegovy was not studied for weight reduction in type 2 diabetes and has lower, more variable exposure in that population; consider alternative therapy or injection for inadequate response."
          ],
          "sources": [
            "oz",
            "oral",
            "wg"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "A long-acting peptide with formulation-dependent oral exposure.",
      "takeaway": "Oral dose size does not indicate equivalence to an injected dose.",
      "blocks": [
        {
          "title": "Mechanism",
          "paragraphs": [
            "GLP-1 receptor activation increases glucose-dependent insulin secretion, suppresses inappropriate glucagon and delays gastric emptying. Reduced energy intake contributes to weight effects. Clinical outcome indications depend on the product’s trials and approval, rather than the shared mechanism alone."
          ],
          "sources": [
            "oz",
            "oral",
            "wg"
          ]
        },
        {
          "title": "Disposition",
          "paragraphs": [
            "Semaglutide is more than 99% protein bound and has an approximately 1-week half-life. It undergoes proteolytic cleavage and fatty-acid-chain metabolism, with metabolites eliminated in urine and feces. Subcutaneous bioavailability is about 89%; injection peak timing is about 1–3 days. Oral SNAC formulations enhance stomach absorption, with exposure dependent on administration conditions."
          ],
          "sources": [
            "oz",
            "oral",
            "wg"
          ],
          "facts": [
            [
              "Elimination half-life",
              "Approximately 1 week"
            ],
            [
              "Oral absorption",
              "Formulation and fasting conditions matter"
            ]
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Follow indication-specific response and tolerability through escalation.",
      "takeaway": "Confirm dose technique, procedural plans and warning symptoms.",
      "blocks": [
        {
          "title": "Monitoring",
          "paragraphs": [
            "Track glycemic response in diabetes, weight response in weight management and the relevant disease outcomes for the approved indication. Assess GI tolerance, hydration, glucose-lowering co-therapy and retinopathy history; check renal function when volume depletion occurs. Monitor resting heart rate on Wegovy. MASH treatment requires specialist assessment of disease stage and ongoing benefit."
          ],
          "sources": [
            "oz",
            "oral",
            "wg"
          ]
        },
        {
          "title": "Counseling and procedures",
          "paragraphs": [
            "Confirm the prescribed brand, route, strength and escalation step at each refill. Demonstrate the exact device or oral fasting routine. Seek urgent assessment for severe persistent abdominal pain, inability to retain fluids, allergic symptoms or sudden visual loss. Tell anesthesia and sedation teams about semaglutide and follow their individualized instructions. Do not share pens or add another semaglutide product.",
            "Suspected overdose requires poison-center or urgent medical assessment and supportive management. Severe nausea, vomiting or hypoglycemia may need prolonged observation because semaglutide’s half-life is about 1 week."
          ],
          "sources": [
            "oz",
            "oral",
            "wg"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Current products include multiple devices and distinct oral strengths.",
      "takeaway": "Verify the carton, NDC and instructions; matching tablet appearance is insufficient.",
      "blocks": [
        {
          "title": "Representative product",
          "paragraphs": [
            "Example Wegovy 25 mg oral bottle: NDC 0169-4425-31. Its tablets bear strength and Novo markings. Some other semaglutide tablets have overlapping appearance; identify by the labeled brand, strength and NDC."
          ],
          "sources": [
            "wg"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Ozempic multidose pens deliver 0.25/0.5, 1 or 2 mg; current single-dose syringes contain 0.25, 0.5 or 1 mg. Wegovy single-dose pens include 0.25, 0.5, 1, 1.7, 2.4 and 7.2 mg; single-dose syringes do not include 7.2 mg. Wegovy FlexTouch contains four 2.4 mg doses (9.6 mg/3 mL). Follow device-specific training; visually impaired patients should not self-administer FlexTouch without appropriate assistance.",
            "Rybelsus tablets contain 3, 7 or 14 mg; Ozempic tablets contain 1.5, 4 or 9 mg; Wegovy tablets contain 1.5, 4, 9 or 25 mg. These products are not milligram-for-milligram substitutes."
          ],
          "sources": [
            "oz",
            "oral",
            "wg"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Before use, refrigerate at 2–8°C and never freeze. Ozempic multidose pens can remain in use for 56 days at 15–30°C or refrigerated; remove the needle between uses. Ozempic single-dose syringes and Wegovy single-dose devices permit up to 28 days at 8–30°C under the labeled conditions; protect from light in the carton. Wegovy FlexTouch permits 56 days after first use at 15–30°C or refrigerated, with needle removed. Distinguish devices rather than applying one storage interval to every injection.",
            "Store tablets at 20–25°C, allowing excursions to 15–30°C, in the original bottle to protect from moisture. This reference covers the cited U.S. branded products and current labeling; it does not provide compounded-product dosing or establish availability in every jurisdiction."
          ],
          "sources": [
            "oz",
            "oral",
            "wg"
          ]
        }
      ]
    }
  ]
};
