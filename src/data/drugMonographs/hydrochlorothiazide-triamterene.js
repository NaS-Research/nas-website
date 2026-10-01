// Original clinical summaries checked against the product-specific public sources below.
export const hydrochlorothiazide_triamterene = {
  "slug": "hydrochlorothiazide-triamterene",
  "name": "Hydrochlorothiazide and triamterene",
  "synonym": "Triamterene/HCTZ tablets and capsules",
  "description": "Prescription thiazide/potassium-sparing diuretic combination with product-specific oral dosing and a boxed hyperkalemia warning.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Prevent potassium toxicity",
    "text": "Check potassium and kidney function. Avoid potassium-sparing combinations and salt substitutes; high potassium or significant renal impairment precludes treatment.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Class",
      "Thiazide + potassium-sparing diuretic"
    ],
    [
      "Route",
      "Oral tablets or capsules"
    ],
    [
      "Boxed warning",
      "Potentially fatal hyperkalemia"
    ]
  ],
  "sources": [
    {
      "id": "tablet",
      "title": "Triamterene/hydrochlorothiazide tablets · Current full label",
      "publisher": "Advagen / Rubicon / DailyMed",
      "note": "January 2026 clinical revision; dose-strength typo is explicitly flagged and not used.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a5525a2a-d2c7-411b-9ffc-0cc4fe77f7c7"
    },
    {
      "id": "confirm",
      "title": "Triamterene/hydrochlorothiazide tablets · Dose corroboration",
      "publisher": "Preferred / Actavis source label / DailyMed",
      "note": "Current SPL7 effective January 13, 2026; clinical revision November 2020. Correct higher-strength dosing confirms 75 mg/50 mg.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6c4cd90b-44c0-4da5-8f26-f0fa465acce4"
    },
    {
      "id": "capsule",
      "title": "Triamterene/hydrochlorothiazide capsules · Current full label",
      "publisher": "Preferred / Viona / Zydus / DailyMed",
      "note": "Current SPL2 effective October 1, 2025; clinical revision October 2022. Oral 37.5 mg/25 mg capsules.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1fff8245-2b65-4ab1-aaa2-6bbbc6ac5fe8"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "This prescription fixed combination treats selected hypertension or edema while conserving potassium.",
      "takeaway": "Its potassium-sparing component does not eliminate either high- or low-potassium risk.",
      "blocks": [
        {
          "title": "Labeled hypertension and edema use",
          "paragraphs": [
            "The combination is indicated when hydrochlorothiazide alone causes hypokalemia, or when a thiazide is needed and hypokalemia cannot be risked, such as selected patients with arrhythmias or digitalis therapy. It is generally not initial therapy for hypertension or edema outside that exception. Other antihypertensives may be used with individualized adjustment."
          ],
          "sources": [
            "tablet",
            "confirm"
          ]
        },
        {
          "title": "Treatment-selection boundaries",
          "paragraphs": [
            "This is a diuretic combination, not a demonstrated disease-modifying heart-failure treatment. Evaluate blood pressure, edema cause, potassium, kidney function and companion medicines before selection. Severe renal impairment and hyperkalemia preclude use; diabetes and older age increase the need for caution. No pediatric or off-label dosing protocol is supplied."
          ],
          "sources": [
            "tablet",
            "confirm"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "All schedules below are oral and list triamterene before hydrochlorothiazide.",
      "takeaway": "Read both ingredient amounts; the catalog name lists the ingredients in the opposite order.",
      "blocks": [
        {
          "title": "Selected tablet and capsule schedules",
          "paragraphs": [
            "Tablet labeling specifies a single daily administration rather than dividing the two lower-strength tablets. Higher tablet dosing has no labeled experience beyond the limits shown, and divided dosing has produced more electrolyte and renal problems. Selected capsules likewise use one or two capsules once daily. Adjust only with clinical and potassium monitoring; these product schedules do not certify automatic substitution between every formulation."
          ],
          "sources": [
            "tablet",
            "confirm",
            "capsule"
          ],
          "table": {
            "headers": [
              "Product: triamterene / hydrochlorothiazide",
              "Labeled daily schedule"
            ],
            "rows": [
              [
                "Tablet 37.5 mg / 25 mg",
                "1 or 2 tablets together once daily"
              ],
              [
                "Tablet 75 mg / 50 mg",
                "1 tablet once daily"
              ],
              [
                "Capsule 37.5 mg / 25 mg",
                "1 or 2 capsules once daily"
              ]
            ]
          }
        },
        {
          "title": "Changing from hydrochlorothiazide alone",
          "paragraphs": [
            "For hypokalemia during hydrochlorothiazide 25 mg/day, the reviewed tablet label permits a switch to triamterene 37.5 mg/hydrochlorothiazide 25 mg; for hydrochlorothiazide 50 mg/day, it permits the 75 mg/50 mg tablet. Recheck clinical response and potassium after a switch. Historical bioavailability comparisons do not support a universal capsule-to-tablet conversion."
          ],
          "sources": [
            "tablet",
            "confirm"
          ]
        },
        {
          "title": "Current-label strength discrepancy",
          "paragraphs": [
            "One escalation sentence in the January 2026 Advagen label prints “75 mg/25 mg,” although its composition, usual-dose paragraph and supplied product all identify the higher tablet as triamterene 75 mg/hydrochlorothiazide 50 mg. The separately reviewed current tablet label confirms the 75 mg/50 mg schedule. No 75 mg/25 mg product or regimen is inferred here; verify the actual dispensed strength with the pharmacist."
          ],
          "sources": [
            "tablet",
            "confirm"
          ]
        },
        {
          "title": "Organ impairment and food",
          "paragraphs": [
            "The labels do not provide a numeric creatinine-clearance adjustment ladder: anuria, acute/chronic renal insufficiency or significant renal impairment are contraindications. Even mild impairment requires frequent continuing electrolyte surveillance. Tablet absorption is not affected by food; the capsule label describes a food effect on exposure, without requiring an after-meal regimen in its dose section. Follow the selected product and prescribed schedule rather than importing an unsupported food instruction."
          ],
          "sources": [
            "tablet",
            "capsule"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Potentially fatal hyperkalemia is the boxed warning.",
      "takeaway": "Weakness, abnormal heart rhythm or reduced urine output warrants urgent assessment.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Check potassium frequently when starting, changing dose, or during illness affecting renal function. Hyperkalemia is more likely with renal impairment, diabetes, older age or severe illness, and a normal ECG cannot exclude it. If hyperkalemia develops, stop the combination under urgent clinical management; severe cases require emergency treatment, not a home correction protocol.",
            "Other electrolyte deficits, dehydration, hypotension and rising BUN/creatinine can occur despite potassium conservation; discontinue if azotemia worsens. Avoid potassium-conserving treatment in severe illness with metabolic/respiratory acidosis unless specialist monitoring makes use appropriate.",
            "Hydrochlorothiazide can cause acute myopia/secondary angle-closure glaucoma within hours to weeks: sudden eye pain or blurred vision needs immediate evaluation and rapid discontinuation. Other cautions include hepatic decompensation, kidney stones, gout, glucose disturbances, low-folate megaloblastosis, hypersensitivity and lupus exacerbation. Protect skin from sun and maintain skin-cancer screening because hydrochlorothiazide is associated with non-melanoma skin cancer."
          ],
          "sources": [
            "tablet",
            "confirm",
            "capsule"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "Do not use with potassium ≥ 5.5 mEq/L, anuria, acute/chronic renal insufficiency, significant renal impairment, or hypersensitivity to either ingredient/other sulfonamide-derived drugs. Other potassium-sparing agents and potassium-containing salt substitutes are prohibited. Reviewed tablet labeling also prohibits potassium supplementation and potassium-enriched diets. Capsule labeling describes a narrowly supervised severe-hypokalemia exception; it is not permission to self-add potassium."
          ],
          "sources": [
            "tablet",
            "confirm",
            "capsule"
          ]
        },
        {
          "title": "Boxed warning: hyperkalemia",
          "paragraphs": [
            "Both reviewed tablet and capsule SPLs contain a boxed hyperkalemia warning. Potassium elevation can be fatal, particularly with renal impairment, diabetes, older age or severe illness. Frequent serum potassium checks are required during initiation, dose changes and illnesses that alter kidney function."
          ],
          "sources": [
            "tablet",
            "capsule"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Reported effects include dizziness, fatigue, orthostatic hypotension, gastrointestinal upset and muscle cramps; important harms include high/low potassium, sodium/magnesium deficits, renal failure/stones, severe allergy/photosensitivity, pancreatitis, blood dyscrasias and hepatic reactions. Labels aggregate reports across components and combinations; they do not establish a reliable universal incidence for each event. Moderate or severe reactions require clinician-directed reduction or withdrawal."
          ],
          "sources": [
            "tablet",
            "capsule"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Companion medicines can change potassium, kidney function and blood pressure.",
      "takeaway": "Review prescriptions, OTC pain medicines and salt substitutes before starting.",
      "blocks": [
        {
          "title": "Potassium and ACE inhibitors",
          "paragraphs": [
            "Avoid other potassium-sparing diuretics and potassium-containing salt substitutes; do not add supplements without a product-specific supervised plan. ACE inhibitors greatly increase hyperkalemia risk; the tablet label advises very cautious use, if at all, with frequent potassium checks. Review all potassium-raising medicines and dietary products with the prescriber rather than treating the combination as a safeguard against interactions."
          ],
          "sources": [
            "tablet",
            "capsule"
          ]
        },
        {
          "title": "NSAIDs and lithium",
          "paragraphs": [
            "Acute renal failure has been reported with indomethacin and this combination; use caution with NSAIDs and reassess renal function. Lithium generally should not be combined with diuretics because reduced renal clearance can produce toxicity. A supervised exception requires the lithium-specific label and monitoring, not a routine coadministration recommendation."
          ],
          "sources": [
            "tablet",
            "capsule"
          ]
        },
        {
          "title": "Other treatment and laboratory effects",
          "paragraphs": [
            "Other antihypertensives can intensify blood-pressure reduction. Corticosteroids, ACTH and amphotericin B can worsen electrolyte loss; chlorpropamide increases severe-hyponatremia risk in the capsule label. Diabetes and antigout therapy may need reassessment. Notify anesthesia staff about altered pressor responsiveness/nondepolarizing neuromuscular blockade, and laboratories about potential interference with quinidine measurement. Clinician-directed withholding may be needed before parathyroid-function testing."
          ],
          "sources": [
            "tablet",
            "capsule"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Renal disease, diabetes and frailty increase susceptibility to potassium toxicity.",
      "takeaway": "Pregnancy edema and breastfeeding require a separate benefit-risk assessment.",
      "blocks": [
        {
          "title": "Kidney disease, older adults and diabetes",
          "paragraphs": [
            "There is no validated label eGFR cutoff that replaces the contraindication to significant renal impairment. Mild renal impairment requires frequent ongoing monitoring; drug/metabolite clearance is reduced with renal dysfunction and older age. The tablet label recommends avoiding the combination in diabetes if possible; if it is used, monitor electrolytes frequently even without apparent renal impairment."
          ],
          "sources": [
            "tablet",
            "capsule"
          ]
        },
        {
          "title": "Liver disease and children",
          "paragraphs": [
            "Fluid/electrolyte shifts can precipitate hepatic coma with impaired hepatic function or progressive liver disease; use cautiously and assess new confusion promptly. No numeric hepatic dose algorithm is supplied. Pediatric safety/effectiveness are not established; adult tablet or capsule limits are not pediatric doses."
          ],
          "sources": [
            "tablet",
            "confirm",
            "capsule"
          ]
        },
        {
          "title": "Pregnancy and breastfeeding",
          "paragraphs": [
            "Combination safety in pregnancy is not established; use only when anticipated benefit justifies fetal risk. Diuretics are not routine therapy for normal pregnancy edema or prevention of pregnancy toxemia. Components cross the placenta, with potential neonatal hazards including jaundice and thrombocytopenia. Combination lactation studies are absent; thiazides enter human milk, and the selected labels advise stopping nursing if the combination is essential. Discuss alternatives and an individualized feeding/treatment plan."
          ],
          "sources": [
            "tablet",
            "capsule"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Hydrochlorothiazide increases natriuresis; triamterene limits distal potassium loss.",
      "takeaway": "Potassium conservation can overshoot and does not guarantee a normal potassium level.",
      "blocks": [
        {
          "title": "Complementary renal actions",
          "paragraphs": [
            "Hydrochlorothiazide inhibits renal sodium/chloride reabsorption and promotes diuresis, with secondary potassium loss. Triamterene inhibits distal sodium exchange for potassium/hydrogen, reducing that loss; it is not a competitive aldosterone antagonist. Some patients still become hypokalemic, while others develop hyperkalemia."
          ],
          "sources": [
            "tablet",
            "capsule"
          ]
        },
        {
          "title": "Absorption and elimination",
          "paragraphs": [
            "Reviewed tablets reach hydrochlorothiazide peak plasma levels in about 2 hours and triamterene peaks in about 1 hour; hydrochlorothiazide is excreted unchanged in urine, while triamterene is primarily converted to hydroxytriamterene sulfate. The capsule label describes diuresis beginning within about 1 hour and a food effect on exposure. Kidney impairment and older age reduce clearance of hydrochlorothiazide and the active triamterene metabolite; these findings reinforce monitoring rather than a fabricated adjustment formula."
          ],
          "sources": [
            "tablet",
            "capsule"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Follow potassium, renal function, volume status and the indication being treated.",
      "takeaway": "Do not self-correct weakness with potassium or a salt substitute.",
      "blocks": [
        {
          "title": "Before and during treatment",
          "paragraphs": [
            "Assess blood pressure/edema, potassium and other electrolytes, BUN/creatinine, hydration, renal/liver disease, diabetes/gout history and interacting medicines. Reassess frequently at initiation, after changes and with vomiting, poor intake or intercurrent illness; labels do not prescribe a universal fixed testing interval. Consider glucose, uric acid and blood counts when their specific risk factors apply."
          ],
          "sources": [
            "tablet",
            "capsule"
          ]
        },
        {
          "title": "Counseling and urgent symptoms",
          "paragraphs": [
            "Confirm both ingredient amounts and take only the selected prescribed daily schedule. Discuss dizziness and falls, dehydration, sun protection and skin screening. Seek urgent care for severe weakness, palpitations/fainting, marked reduction in urine, confusion, severe allergy, or sudden painful/blurred vision. Suspected overdose requires emergency/poison-center assessment for fluid and electrolyte disturbances; no home emesis or electrolyte-treatment regimen is provided."
          ],
          "sources": [
            "tablet",
            "capsule"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Current selected products are prescription oral tablets and capsules.",
      "takeaway": "The strength convention is triamterene / hydrochlorothiazide.",
      "blocks": [
        {
          "title": "Representative products",
          "paragraphs": [
            "Selected Advagen/Rubicon tablets are yellow oval scored products: Λ 134 identifies triamterene 37.5 mg/hydrochlorothiazide 25 mg (NDC family 72888-094), and Λ 135 identifies 75 mg/50 mg (72888-095). Selected Preferred-repackaged Viona/Zydus 37.5 mg/25 mg capsules have a yellow cap marked 855 and white body (68788-8700). These are label examples, not a real-time stock or universal appearance claim."
          ],
          "sources": [
            "tablet",
            "capsule"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Reviewed oral tablets contain triamterene 37.5 mg/hydrochlorothiazide 25 mg or triamterene 75 mg/hydrochlorothiazide 50 mg. Reviewed capsules contain triamterene 37.5 mg/hydrochlorothiazide 25 mg. There is no verified 75 mg/25 mg tablet in these selected composition/package records; single-ingredient products and historical formulations require their own labels."
          ],
          "sources": [
            "tablet",
            "confirm",
            "capsule"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Selected tablets and capsules are stored at 20–25°C (68–77°F), protected from light and dispensed in a tight, light-resistant container; the selected tablet label specifies a child-resistant closure. Verify the actual pharmacy package. Keep medicines out of children’s reach and retain the labeled strength rather than identifying a pill by color alone."
          ],
          "sources": [
            "tablet",
            "capsule"
          ]
        }
      ]
    }
  ]
};
