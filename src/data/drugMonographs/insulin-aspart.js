// Original clinical summaries checked against the product-specific public sources below.
export const insulin_aspart = {
  "slug": "insulin-aspart",
  "name": "Insulin aspart",
  "synonym": "NovoLog · Fiasp",
  "description": "Rapid-acting insulin analog with formulation-specific meal timing, pump and IV instructions.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Prevent severe low glucose and mix-ups",
    "text": "Check the exact insulin and units before each dose. Meal timing differs between NovoLog and Fiasp; use a written glucose-rescue and pump-backup plan.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Class",
      "Rapid-acting insulin analog"
    ],
    [
      "Reviewed strength",
      "U-100 · 100 units/mL"
    ],
    [
      "Dose selection",
      "Individual glucose/meal plan"
    ]
  ],
  "sources": [
    {
      "id": "novo",
      "title": "NovoLog · Current full prescribing information",
      "publisher": "Novo Nordisk",
      "note": "Current manufacturer PDF and matching DailyMed SPL reviewed; clinical revision 02/2023.",
      "url": "https://www.novo-pi.com/novolog.pdf"
    },
    {
      "id": "fiasp",
      "title": "Fiasp · Current full prescribing information",
      "publisher": "Novo Nordisk",
      "note": "Current manufacturer PDF and matching DailyMed SPL reviewed; clinical revision 06/2023.",
      "url": "https://www.novo-pi.com/fiasp.pdf"
    },
    {
      "id": "mix",
      "title": "NovoLog Mix 70/30 · Formulation boundary",
      "publisher": "Novo Nordisk",
      "note": "February 2023 PI; identity, fixed-ratio composition and excluded routes reviewed. No premix regimen supplied here.",
      "url": "https://www.novo-pi.com/novologmix7030.pdf"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Insulin aspart is a rapid-acting insulin analog for adult and pediatric diabetes.",
      "takeaway": "Choose the exact product, route and delivery system.",
      "blocks": [
        {
          "title": "Approved glycemic-control use",
          "paragraphs": [
            "NovoLog and Fiasp improve glycemic control in adults and pediatric patients with diabetes mellitus. Both contain insulin aspart; Fiasp has a different formulation and mealtime instruction. The reviewed subcutaneous-injection regimens generally include intermediate- or long-acting insulin."
          ],
          "sources": [
            "novo",
            "fiasp"
          ]
        },
        {
          "title": "Scope and product boundaries",
          "paragraphs": [
            "This profile covers U-100 NovoLog and Fiasp, including labeled IV use and compatible pump use. NovoLog Mix 70/30 is an insulin-aspart-protamine/aspart suspension with its own fixed-ratio regimen and is not covered by these solution doses. Do not substitute a premix, cartridge or pump product based only on the ingredient name. The premix must not be given intravenously or through an insulin pump."
          ],
          "sources": [
            "novo",
            "fiasp",
            "mix"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Dose in units and individualize to glucose, meals, activity and the delivery route.",
      "takeaway": "There is no universal label starting dose or maximum for every person.",
      "blocks": [
        {
          "title": "Individual dose and conversion",
          "paragraphs": [
            "Adjust from metabolic need, glucose monitoring and glycemic targets. Reassess for illness, activity, meal changes, interacting medicines and organ-function changes. Fiasp allows an initial unit-for-unit conversion from another mealtime insulin, followed by close monitoring and individual adjustment; this does not establish identical meal timing or pump settings. NovoLog conversion may require a different dose."
          ],
          "sources": [
            "novo",
            "fiasp"
          ]
        },
        {
          "title": "Subcutaneous meal timing",
          "paragraphs": [
            "Use the product-specific timing below and rotate sites within the chosen region; avoid lipodystrophy or localized amyloid deposits. Confirm food availability and the individualized glucose/meal plan."
          ],
          "sources": [
            "novo",
            "fiasp"
          ],
          "table": {
            "headers": [
              "Product",
              "Timing",
              "Labeled injection regions"
            ],
            "rows": [
              [
                "NovoLog",
                "Within 5–10 minutes before the meal",
                "Abdomen, thigh, buttocks or upper arm"
              ],
              [
                "Fiasp",
                "At meal start or within 20 minutes after starting",
                "Abdomen, upper arm or thigh"
              ]
            ]
          }
        },
        {
          "title": "Pump administration",
          "paragraphs": [
            "Use only a pump whose manual permits the exact product. Set basal/meal rates with the treating team; never dilute or mix pump insulin. Have backup injection supplies and training because pump interruption can rapidly cause hyperglycemia and ketoacidosis. Follow the shorter interval when the pump manual differs from the insulin label."
          ],
          "sources": [
            "novo",
            "fiasp"
          ],
          "table": {
            "headers": [
              "Product/presentation",
              "Maximum labeled pump interval",
              "Temperature"
            ],
            "rows": [
              [
                "NovoLog reservoir",
                "Change at least every 7 days",
                "Do not exceed 37°C"
              ],
              [
                "Fiasp reservoir from vial",
                "Change at least every 6 days",
                "Do not exceed 37°C"
              ],
              [
                "Fiasp PumpCart",
                "Replace at least every 4 days",
                "Do not exceed 37°C"
              ]
            ]
          }
        },
        {
          "title": "IV formulation instructions",
          "paragraphs": [
            "IV administration is supervised medical care with close glucose and potassium monitoring. Use the product-specific concentration range and compatible infusion system; these are diluted infusion concentrations, not the original U-100 strength or a home injection regimen."
          ],
          "sources": [
            "novo",
            "fiasp"
          ],
          "table": {
            "headers": [
              "Product",
              "Diluted IV range",
              "Compatible fluids / preparation"
            ],
            "rows": [
              [
                "NovoLog",
                "0.05–1 unit/mL",
                "Polypropylene bags; label identifies 0.9% sodium chloride; prepared bags stable 24 hours at room temperature"
              ],
              [
                "Fiasp",
                "0.5–1 unit/mL",
                "Polypropylene bags with 0.9% sodium chloride or 5% dextrose; stable 24 hours at 20–25°C"
              ]
            ]
          }
        },
        {
          "title": "Mixing and dilution limits",
          "paragraphs": [
            "For subcutaneous syringe injection only, NovoLog may be mixed with NPH: draw NovoLog first and inject immediately. Its designated diluting medium permits clinician-directed U-10 or U-50 preparations for subcutaneous injection. Do not transfer these mixing/dilution instructions to pumps or Fiasp. Fiasp must not be mixed with another insulin and pump Fiasp must not be diluted."
          ],
          "sources": [
            "novo",
            "fiasp"
          ]
        },
        {
          "title": "Device units and missed meal dose",
          "paragraphs": [
            "NovoLog FlexPen/FlexTouch and Fiasp FlexTouch dial in 1-unit increments. Read the exact device IFU and confirm the displayed units; patients with visual impairment may need assistance. For a missed Fiasp mealtime dose on basal-bolus therapy, monitor glucose and use the prescribed correction plan, then resume the usual next-meal schedule; do not invent a catch-up dose."
          ],
          "sources": [
            "novo",
            "fiasp"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Hypoglycemia, dosing errors and pump failure can cause life-threatening events.",
      "takeaway": "Know the glucose rescue and backup-insulin plan before treatment.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Severe hypoglycemia can cause seizures, unconsciousness or death. Awareness may be reduced by recurrent episodes, neuropathy or sympathetic-blocking drugs. Increase glucose monitoring with regimen/site changes, illness, meal/activity changes and renal/hepatic impairment. Switching away from abnormal injection-site tissue may precipitate hypoglycemia.",
            "Insulin shifts potassium into cells; monitor potassium when indicated, especially during IV use or in at-risk patients. Stop and treat serious hypersensitivity/anaphylaxis promptly. Thiazolidinedione combinations can cause fluid retention or worsen heart failure.",
            "Never share pens, cartridge devices, needles or syringes, even with a changed needle. Check product/strength before every dose. Pump failure or degraded insulin can rapidly cause ketosis; follow the backup plan and get help when the problem cannot be corrected promptly."
          ],
          "sources": [
            "novo",
            "fiasp"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "Do not administer during an episode of hypoglycemia. Known hypersensitivity to insulin aspart or any excipient of the selected product is contraindicated. Treat low glucose and follow the clinician’s plan for subsequent insulin; this is not permission to abandon basal insulin or the overall diabetes regimen."
          ],
          "sources": [
            "novo",
            "fiasp"
          ]
        },
        {
          "title": "Boxed-warning status",
          "paragraphs": [
            "The reviewed NovoLog and Fiasp labels contain no FDA boxed warning. Severe hypoglycemia, anaphylaxis, hypokalemia and dosing/device errors nevertheless require active prevention and emergency planning."
          ],
          "sources": [
            "novo",
            "fiasp"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Hypoglycemia is the most common insulin adverse reaction. Other effects include injection/infusion-site reactions, lipodystrophy or localized cutaneous amyloidosis, allergy, edema and weight gain. Rapid improvement in glucose control can transiently affect refraction or worsen retinopathy/neuropathy. Fiasp pediatric studies reported more confirmed hypoglycemic episodes than NovoLog, particularly overnight; trial rates depend on regimen and cannot be generalized."
          ],
          "sources": [
            "novo",
            "fiasp"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Other drugs can strengthen, weaken or conceal the glucose-lowering effect.",
      "takeaway": "Change doses through monitoring and a prescribed plan.",
      "blocks": [
        {
          "title": "Hypoglycemia-promoting combinations",
          "paragraphs": [
            "Other antidiabetic agents and medicines such as ACE inhibitors/ARBs, fluoxetine, salicylates, fibrates, sulfonamide antibiotics, MAO inhibitors, pramlintide and somatostatin analogs may increase low-glucose risk. Dose adjustment and more frequent glucose checks may be needed."
          ],
          "sources": [
            "novo",
            "fiasp"
          ]
        },
        {
          "title": "Reduced glucose lowering",
          "paragraphs": [
            "Corticosteroids, some antipsychotics, diuretics, estrogen/progestogen products, thyroid hormones, sympathomimetics and other listed drugs may reduce the glucose-lowering effect. Check glucose more frequently when starting/stopping them and reassess insulin through the care team."
          ],
          "sources": [
            "novo",
            "fiasp"
          ]
        },
        {
          "title": "Variable effect and masked symptoms",
          "paragraphs": [
            "Alcohol, beta blockers, clonidine and lithium may increase or decrease glucose lowering; pentamidine can cause hypoglycemia followed by hyperglycemia. Beta blockers, clonidine, guanethidine and reserpine may blunt low-glucose warning symptoms: rely on monitoring rather than symptoms alone."
          ],
          "sources": [
            "novo",
            "fiasp"
          ]
        },
        {
          "title": "Thiazolidinediones and fluid retention",
          "paragraphs": [
            "Observe for edema, weight gain or worsening dyspnea when insulin is combined with PPAR-gamma agonists such as thiazolidinediones. If heart failure develops, the clinician should consider reducing or discontinuing that agent while managing heart failure."
          ],
          "sources": [
            "novo",
            "fiasp"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Children, older adults and organ impairment require individualized monitoring.",
      "takeaway": "Trial ages and product-specific evidence do not define one dose for every child.",
      "blocks": [
        {
          "title": "Pediatric evidence",
          "paragraphs": [
            "Both labels establish pediatric diabetes use. NovoLog’s cited pivotal injection study included ages 6–18; Fiasp’s included ages 2–17. These are study populations, not a newly invented blanket minimum age. Fiasp pediatric confirmed hypoglycemia was increased, especially nocturnally; monitor closely and use an appropriate device/dose resolution."
          ],
          "sources": [
            "novo",
            "fiasp"
          ]
        },
        {
          "title": "Renal, hepatic and older adults",
          "paragraphs": [
            "Renal/hepatic impairment increases hypoglycemia risk and may require more frequent adjustments and glucose checks; no fixed eGFR/Child-Pugh dosing table is supplied. Older adults require careful dosing; Fiasp specifically recommends conservative initial dosing, increments and maintenance to avoid hypoglycemia."
          ],
          "sources": [
            "novo",
            "fiasp"
          ]
        },
        {
          "title": "Pregnancy and breastfeeding",
          "paragraphs": [
            "Published insulin-aspart pregnancy studies did not identify an association with major birth defects or adverse outcomes, but mainly studied later pregnancy and have limitations. Fiasp has no formulation-specific pregnancy data in its label. Poorly controlled diabetes itself poses substantial maternal/fetal risk. Milk evidence is limited; weigh maternal insulin need and breastfeeding benefits and follow the individualized postpartum glucose plan."
          ],
          "sources": [
            "novo",
            "fiasp"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Insulin aspart promotes peripheral glucose uptake and inhibits hepatic glucose output.",
      "takeaway": "Formulation-specific action profiles inform meal timing, not a fixed correction interval.",
      "blocks": [
        {
          "title": "Molecular action",
          "paragraphs": [
            "Insulin aspart replaces proline with aspartic acid at position B28. Insulin-receptor activation increases skeletal-muscle/adipose glucose uptake, suppresses hepatic glucose output and lipolysis/proteolysis, and supports protein synthesis. Fiasp includes niacinamide and arginine in its formulation."
          ],
          "sources": [
            "novo",
            "fiasp"
          ]
        },
        {
          "title": "NovoLog time course",
          "paragraphs": [
            "In its labeled subcutaneous studies, maximum glucose lowering was about 1–3 hours and duration about 3–5 hours; insulin concentration generally peaked around 40–50 minutes. Absorption and effect vary with site, exercise and other conditions; these are study averages, not guarantees that another dose is safe at a fixed time."
          ],
          "sources": [
            "novo"
          ]
        },
        {
          "title": "Fiasp kinetics and dose dependence",
          "paragraphs": [
            "In a labeled adult study, insulin appeared in circulation around 2.5 minutes, reached peak concentration around 63 minutes and had an apparent half-life about 1.1 hours. Clamp studies showed first measurable glucose effect around 16–20 minutes and dose-dependent return toward baseline around 5–7 hours. Circulating appearance is not the same as glucose-effect onset."
          ],
          "sources": [
            "fiasp"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Teach product identification, glucose rescue and backup delivery alongside dose technique.",
      "takeaway": "Illness, missed meals and device failure need a written care plan.",
      "blocks": [
        {
          "title": "Monitoring and safe use",
          "paragraphs": [
            "Use the prescribed glucose-monitoring schedule; increase checks around changes and high-risk circumstances. Review meals, activity, injection-site tissue, adherence and device technique. Inspect insulin for a clear colorless appearance and check the label before every dose. Carry the prescribed low-glucose treatment and know how caregivers can administer emergency glucagon."
          ],
          "sources": [
            "novo",
            "fiasp"
          ]
        },
        {
          "title": "Overdose and severe low glucose",
          "paragraphs": [
            "Excess insulin can cause recurrent hypoglycemia and hypokalemia. An alert person able to swallow may use oral glucose according to the rescue plan; seizures, impaired consciousness or inability to swallow require emergency help and prescribed glucagon/medical IV glucose. Do not give oral food or drink to an unconscious person. Continued observation is important because low glucose can recur."
          ],
          "sources": [
            "novo",
            "fiasp"
          ]
        },
        {
          "title": "Pump contingency and counseling",
          "paragraphs": [
            "Keep alternate injection therapy available and know when to check for ketosis or seek urgent care under the team’s plan. Do not drive while hypoglycemic. Never share devices; use a new needle, remove it after injection and dispose of sharps safely. A lost or missed dose needs glucose assessment and a prescribed correction, not blind repetition."
          ],
          "sources": [
            "novo",
            "fiasp"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "U-100 means 100 units/mL; product, device and in-use date must be identifiable.",
      "takeaway": "Storage intervals differ between bottles, pens and pump cartridges.",
      "blocks": [
        {
          "title": "Representative product identity",
          "paragraphs": [
            "Novo Nordisk NovoLog 10 mL vial: NDC 0169-7501-11; five 3 mL FlexPen pens: 0169-6339-10. Fiasp 10 mL vial: 0169-3201-11; five 3 mL FlexTouch pens: 0169-3204-15; five 1.6 mL PumpCart cartridges: 0169-3206-15. These are clear colorless solutions, not cloudy premixed suspensions."
          ],
          "sources": [
            "novo",
            "fiasp"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Both reviewed solutions are U-100. NovoLog has 10 mL vials and 3 mL PenFill/FlexPen/FlexTouch presentations. Fiasp has 10 mL vials, 3 mL FlexTouch/PenFill and 1.6 mL PumpCart. Use only compatible delivery systems. Diluted clinician-prepared NovoLog does not change the factory U-100 product identity."
          ],
          "sources": [
            "novo",
            "fiasp"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Unopened refrigerated products: 2–8°C until labeled expiry; do not freeze, expose to excessive heat/light or store insulin in a filled syringe for later use. At room temperature up to 30°C, unopened NovoLog and Fiasp vial/pen/PenFill limits are 28 days. In-use NovoLog vial lasts 28 days refrigerated or at room temperature; its pens/PenFill last 28 days at room temperature without refrigeration. In-use Fiasp vial and FlexTouch last 28 days and may be refrigerated; PenFill lasts 28 days without refrigeration. PumpCart permits a total 18 days at room temperature, including 4 days in the pump at up to 37°C; do not refrigerate in-use PumpCart. NovoLog pump total in-use limit is 19 days including 7 days in reservoir; Fiasp vial/pump total is 28 days including 6 days in reservoir. Follow shorter pump/device intervals and discard after excess heat exposure."
          ],
          "sources": [
            "novo",
            "fiasp"
          ]
        }
      ]
    }
  ]
};
