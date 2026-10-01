// Original clinical summaries checked against the product-specific public sources below.
export const progesterone = {
  "slug": "progesterone",
  "name": "Progesterone",
  "synonym": "Prometrium; Endometrin; Crinone; progesterone injection",
  "description": "Human progesterone supplied as oral capsules, vaginal inserts/gel and IM oil solution for distinct hormonal and reproductive indications.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Match route and excipient safety",
    "text": "Check peanut allergy for Prometrium and sesame allergy for the selected injection. Seek urgent care for clot symptoms or fever/breathing difficulty after sesame-oil injections; follow the prescribed route and treatment calendar.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Reviewed routes",
      "Oral / vaginal / intramuscular"
    ],
    [
      "Oral product",
      "Peanut oil; bedtime dosing"
    ],
    [
      "Route equivalence",
      "No universal mg-for-mg conversion"
    ]
  ],
  "sources": [
    {
      "id": "oral",
      "title": "Prometrium · Current full prescribing information",
      "publisher": "Acertis / DailyMed",
      "note": "Clinical revision February 2026; oral micronized capsules, peanut oil.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1cf237ff-c4f8-4faa-a7aa-77599c856889"
    },
    {
      "id": "insert",
      "title": "Endometrin · Current full prescribing information",
      "publisher": "Ferring / DailyMed",
      "note": "SPL27 effective July 29, 2026; current ART indication age <35.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2ba50fa9-b349-40cb-9a4b-1af8faa4ec09"
    },
    {
      "id": "gel",
      "title": "Crinone · Current full label",
      "publisher": "AbbVie / DailyMed",
      "note": "Clinical content updated June 2017; SPL11 effective May 21, 2024.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=75e97aa1-daa4-45f9-b2e2-1a371302914e"
    },
    {
      "id": "im",
      "title": "Progesterone injection in sesame oil · Current full label",
      "publisher": "Hikma / DailyMed",
      "note": "Clinical revision January 2021; SPL6 effective July 9, 2024. Intramuscular only.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=83cfc12e-75d1-4284-bcc3-beadcbd27171"
    },
    {
      "id": "ng126",
      "title": "Ectopic pregnancy and miscarriage · NG126",
      "publisher": "NICE",
      "note": "Full current public guideline updated June 17, 2026; selected threatened-miscarriage recommendations now 1.9.2–1.9.3.",
      "url": "https://www.nice.org.uk/guidance/ng126/resources/ectopic-pregnancy-and-miscarriage-diagnosis-and-initial-management-pdf-66141662244037"
    },
    {
      "id": "ng25",
      "title": "Preterm labour and birth · NG25",
      "publisher": "NICE",
      "note": "Full public guideline updated June 10, 2022; selected prophylactic vaginal-progesterone context.",
      "url": "https://www.nice.org.uk/guidance/ng25/resources/preterm-labour-and-birth-pdf-1837333576645"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Progesterone is one hormone supplied through several noninterchangeable treatment routes.",
      "takeaway": "Match the product, route and clinical indication before selecting a regimen.",
      "blocks": [
        {
          "title": "Oral micronized progesterone",
          "paragraphs": [
            "Prometrium is indicated to prevent endometrial hyperplasia in postmenopausal women with a uterus receiving conjugated estrogen tablets, and for secondary amenorrhea. Its oral label should not be read as approval of infertility treatment, miscarriage prevention or contraception."
          ],
          "sources": [
            "oral"
          ]
        },
        {
          "title": "Vaginal ART and amenorrhea products",
          "paragraphs": [
            "Current Endometrin is approved as part of ART to support implantation in infertile women less than 35 years old and maintain pregnancy after implantation up to 10 weeks. Crinone 8% is labeled for ART progesterone supplementation/replacement in progesterone-deficient infertile women; 4% is labeled for secondary amenorrhea, with an 8% trial for nonresponse. The products do not share an identical age restriction or schedule."
          ],
          "sources": [
            "insert",
            "gel"
          ]
        },
        {
          "title": "Intramuscular indication",
          "paragraphs": [
            "The selected Hikma injection is labeled for amenorrhea and abnormal uterine bleeding due to hormonal imbalance without organic pathology, such as fibroids or uterine cancer. This label does not approve an ART regimen; fertility-clinic IM use is a separate off-label protocol, not the labeled amenorrhea schedule."
          ],
          "sources": [
            "im"
          ]
        },
        {
          "title": "Guideline-based pregnancy uses",
          "paragraphs": [
            "NICE recommends selected vaginal micronized progesterone for threatened miscarriage and prophylactic vaginal progesterone for selected preterm-birth risks. These guideline uses do not establish U.S. approval for every oral capsule, gel, insert or injection. Confirm the prescribed vaginal preparation, eligibility and duration with the obstetric team."
          ],
          "sources": [
            "ng126",
            "ng25",
            "oral"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Route-specific doses and treatment windows cannot be converted milligram for milligram.",
      "takeaway": "Oral bedtime dosing, vaginal applicators and IM injection require different instructions.",
      "blocks": [
        {
          "title": "Oral Prometrium schedules",
          "paragraphs": [
            "Take as a single daily bedtime dose. For endometrial protection with daily conjugated estrogens: 200 mg orally for 12 consecutive days of each 28-day cycle. For secondary amenorrhea: 400 mg at bedtime for 10 days. These are the selected product-label schedules, not a universal menopausal-hormone regimen. A patient with swallowing difficulty may use a glass of water while standing, as the label instructs."
          ],
          "sources": [
            "oral"
          ],
          "table": {
            "headers": [
              "Labeled oral purpose",
              "Schedule"
            ],
            "rows": [
              [
                "Endometrial hyperplasia prevention with conjugated estrogens",
                "200 mg at bedtime for 12 days per 28-day cycle"
              ],
              [
                "Secondary amenorrhea",
                "400 mg at bedtime for 10 days"
              ]
            ]
          }
        },
        {
          "title": "Vaginal ART schedules",
          "paragraphs": [
            "Endometrin: 100 mg vaginally two or three times daily, starting the day after oocyte retrieval, for up to 10 weeks total treatment. Crinone 8%: 90 mg vaginally once daily for supplementation, or twice daily for partial/complete ovarian failure requiring replacement; if pregnancy occurs, the label allows continuation to placental autonomy, up to 10–12 weeks. Do not treat Endometrin’s total treatment duration as identical to a gestational-age cutoff."
          ],
          "sources": [
            "insert",
            "gel"
          ]
        },
        {
          "title": "Vaginal amenorrhea and IM schedules",
          "paragraphs": [
            "Crinone 4% delivers 45 mg every other day for up to six doses; for nonresponse, an 8% 90 mg every-other-day trial up to six doses is labeled. Use the 8% product to increase strength, not additional gel volume. Selected IM amenorrhea dosing is 5–10 mg daily for 6–8 consecutive days; functional uterine bleeding dosing is 5–10 mg daily for six doses. If estrogen is also used, injections begin after two weeks of estrogen; stop injections if menstrual flow starts."
          ],
          "sources": [
            "gel",
            "im"
          ]
        },
        {
          "title": "Threatened-miscarriage guideline dose",
          "paragraphs": [
            "Current NICE NG126 recommends vaginal micronized progesterone 400 mg twice daily when ultrasound confirms an intrauterine pregnancy, there is vaginal bleeding and a previous miscarriage. If a fetal heartbeat is confirmed, continue until 16 completed weeks. This specific vaginal regimen is not a recommendation to swallow Prometrium for pregnancy or substitute Endometrin 100 mg or Crinone 90 mg."
          ],
          "sources": [
            "ng126",
            "oral",
            "insert",
            "gel"
          ]
        },
        {
          "title": "Preterm-birth prevention and organ adjustments",
          "paragraphs": [
            "NICE considers vaginal progesterone with a prior spontaneous preterm birth/loss or a short cervix, and offers a choice with cerclage when both criteria are present; treatment starts at 16+0–24+0 weeks and continues to at least 34 weeks. No numerical dose is inferred here from NG25. None of these selected labels gives a renal-adjustment formula. Liver contraindications vary by product; do not invent a reduced dose to bypass them."
          ],
          "sources": [
            "ng25",
            "oral",
            "insert",
            "gel",
            "im"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Thromboembolism, unexplained bleeding and excipient allergy require active screening.",
      "takeaway": "Safety instructions must remain specific to the route and actual product.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Suspected DVT/PE, stroke, MI or retinal vascular events require immediate assessment and product-directed discontinuation. Review unexplained bleeding, hormone-sensitive malignancy and liver disease before treatment. Monitor depression and fluid retention where relevant; severe recurrence of depression with vaginal/IM therapy may require stopping.",
            "Prometrium may cause marked dizziness/drowsiness, particularly early in treatment; take at bedtime and use caution driving. Its current label retains cardiovascular and malignancy warnings. WHI cardiovascular-risk findings discussed in the label came from conjugated estrogens plus medroxyprogesterone acetate, not a direct progesterone trial; do not assign those numerical risks to every progesterone route or assume other combinations are risk-free.",
            "Prometrium contains peanut oil: peanut allergy is a contraindication. Selected IM progesterone contains sesame oil and can cause allergy and acute eosinophilic pneumonia, often reported 2–4 weeks after starting; fever, dyspnea or hypoxia needs prompt assessment and immediate discontinuation of that sesame-oil injection. These excipient-specific findings should not be assigned to all vaginal products."
          ],
          "sources": [
            "oral",
            "insert",
            "gel",
            "im"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "All reviewed products exclude relevant ingredient hypersensitivity and undiagnosed genital bleeding, but lists differ. Prometrium additionally excludes known/suspected/history of breast cancer, active/history DVT/PE or arterial thromboembolism, and known liver dysfunction/disease. Endometrin excludes missed abortion/ectopic pregnancy, hormone-sensitive malignancy/history, arterial/venous thromboembolism or severe thrombophlebitis/history, hepatic adenoma/carcinoma, acute hepatitis and severe decompensated cirrhosis. Crinone excludes liver dysfunction/disease, breast/genital malignancy, missed abortion and active thrombophlebitis/thromboembolic disorders or prior hormone-associated events. Selected IM excludes liver disease, breast/genital malignancy, missed abortion and current/past thromboembolic disorders/cerebral apoplexy, plus sesame allergy. Check the complete product-specific list before prescribing."
          ],
          "sources": [
            "oral",
            "insert",
            "gel",
            "im"
          ]
        },
        {
          "title": "Boxed-warning status",
          "paragraphs": [
            "The reviewed February 2026 Prometrium label and current Endometrin, Crinone and selected Hikma IM labels contain no formal boxed warning. Older Prometrium boxed-warning wording must not be represented as the current product box. Absence of a box does not remove current thromboembolic, cancer, sedation or injection pulmonary warnings."
          ],
          "sources": [
            "oral",
            "insert",
            "gel",
            "im"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Oral treatment may cause headache, breast tenderness, dizziness/drowsiness, bloating, nausea or irregular bleeding. Vaginal products may cause local irritation/discharge, abdominal pain/cramps, headache or bleeding. IM treatment may cause injection-site pain/irritation and allergic reactions. Serious risks include thromboembolic events and the route-specific warnings above. ART-study ovarian hyperstimulation and procedure-related symptoms are not automatically caused by progesterone."
          ],
          "sources": [
            "oral",
            "insert",
            "gel",
            "im"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Other vaginal treatments and metabolic interactions need product-specific review.",
      "takeaway": "Do not borrow gel-spacing instructions for a vaginal insert.",
      "blocks": [
        {
          "title": "Local vaginal medicines",
          "paragraphs": [
            "Endometrin is not recommended with other vaginal products because release/absorption may be altered. Crinone should generally not be used concurrently with local vaginal therapy; if another local treatment is necessary, its label specifies separation by at least 6 hours before or after gel administration. Do not assume that spacing makes combination use acceptable with Endometrin."
          ],
          "sources": [
            "insert",
            "gel"
          ]
        },
        {
          "title": "Enzyme interactions and food",
          "paragraphs": [
            "CYP3A4 inducers may increase Endometrin elimination and reduce effect; review rifampin and other inducers with the fertility team. Oral and IM labels describe in-vitro ketoconazole inhibition of progesterone metabolism with uncertain clinical relevance; no automatic dose adjustment is established by those data. Crinone has no assessed clinical drug-interaction studies. Food increases oral Prometrium bioavailability; follow the prescribed routine rather than importing a food rule from a vaginal product."
          ],
          "sources": [
            "insert",
            "oral",
            "im",
            "gel"
          ]
        },
        {
          "title": "Estrogen combinations and laboratory context",
          "paragraphs": [
            "The accompanying estrogen has its own contraindications/warnings. Inform clinicians and laboratories about hormone therapy: estrogen/progestin combinations may alter some coagulation, thyroid-binding and hepatic test results. This is not proof that isolated progesterone always produces the same changes, and does not replace evaluation of bleeding or thrombosis."
          ],
          "sources": [
            "oral",
            "gel",
            "im"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "The appropriateness of pregnancy use depends on the route and purpose.",
      "takeaway": "An oral product’s pregnancy restriction does not negate approved vaginal ART support.",
      "blocks": [
        {
          "title": "Pregnancy",
          "paragraphs": [
            "Prometrium’s selected oral label says it should not be used during pregnancy; pregnancy is addressed in precautions rather than its current six-item formal contraindication list. Endometrin and Crinone 8% instead have labeled ART pregnancy support. Selected IM has no labeled ART indication. NICE’s specific vaginal threatened-miscarriage/preterm-birth recommendations are separate from these U.S. product approvals; do not extrapolate benefit to all bleeding or recurrent miscarriage."
          ],
          "sources": [
            "oral",
            "insert",
            "gel",
            "im",
            "ng126",
            "ng25"
          ]
        },
        {
          "title": "Breastfeeding",
          "paragraphs": [
            "Progesterone/progestins are detectable in milk. Prometrium advises caution, and Crinone/IM labels state infant effects are undetermined. Current Endometrin describes a study without adverse infant growth or milk-production effects but still directs individual assessment of breastfeeding benefits, maternal need and possible infant effects. That limited observation does not establish universal safety for every route/dose."
          ],
          "sources": [
            "oral",
            "insert",
            "gel",
            "im"
          ]
        },
        {
          "title": "Children, older age and body size",
          "paragraphs": [
            "Prometrium is not indicated in children, and pediatric studies are lacking. Pediatric safety/effectiveness are not established for the reviewed vaginal/IM products. Endometrin is not indicated at age 65 or older and its current ART indication is limited to infertile women under 35; safety/efficacy at BMI >34 kg/m² has not been studied. Other selected labels have limited or unestablished older-adult evidence rather than a new age-based dose."
          ],
          "sources": [
            "oral",
            "insert",
            "gel",
            "im"
          ]
        },
        {
          "title": "Renal, hepatic and cardiometabolic disease",
          "paragraphs": [
            "No universal renal dosing schedule is established. Selected IM specifically calls for caution/monitoring with renal insufficiency; fluid retention can worsen cardiac/renal problems with oral, gel or IM therapy. Liver contraindications differ and require the actual label. Monitor glucose in susceptible patients receiving estrogen/progestin treatment and review depression history; do not equate limited pharmacokinetic data with proven safety in organ failure."
          ],
          "sources": [
            "oral",
            "insert",
            "gel",
            "im"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Progesterone promotes secretory endometrial differentiation after estrogen priming.",
      "takeaway": "Equal milligram amounts through different routes do not guarantee equal tissue effects.",
      "blocks": [
        {
          "title": "Mechanism and identity",
          "paragraphs": [
            "Progesterone converts an estrogen-primed proliferative endometrium toward a secretory state, supporting implantation and pregnancy in the relevant reproductive setting. Micronized progesterone is chemically the human hormone; it is not medroxyprogesterone acetate. Its use for amenorrhea can produce withdrawal bleeding after an adequate course and appropriate endometrial priming."
          ],
          "sources": [
            "oral",
            "insert",
            "gel",
            "im"
          ]
        },
        {
          "title": "Route-dependent absorption",
          "paragraphs": [
            "Oral Prometrium reaches peak concentrations within about 3 hours and food increases exposure. Endometrin delivers vaginal progesterone, with steady-state concentrations reached within about one day in its small PK study. Crinone’s bioadhesive gel prolongs absorption; absorption duration and intrinsic elimination are not interchangeable half-life measures. Selected IM oil studies show prolonged absorption compared with rapid oral peaks; no oral/vaginal/IM milligram conversion is established here."
          ],
          "sources": [
            "oral",
            "insert",
            "gel",
            "im"
          ]
        },
        {
          "title": "Metabolism and exposure interpretation",
          "paragraphs": [
            "Progesterone is highly protein-bound and extensively metabolized, principally in the liver, to conjugated metabolites cleared through urine and bile. Route, food, delivery vehicle and organ disease affect exposure. Serum concentrations from a selected PK study do not establish a universal pregnancy-support target or justify unsupervised escalation."
          ],
          "sources": [
            "oral",
            "insert",
            "gel",
            "im"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Confirm the indication, allergy history and exact route before treatment.",
      "takeaway": "Keep the fertility or menopause treatment calendar explicit.",
      "blocks": [
        {
          "title": "Monitoring and follow-up",
          "paragraphs": [
            "Review abnormal bleeding, clot/cancer/liver history, relevant allergies, depression and fluid-retention risks before starting. Follow bleeding response and regimen adherence; persistent/unexpected bleeding needs assessment rather than dose escalation. During ART, follow the fertility team’s pregnancy and duration plan. Assess worsening mood, edema, sedation and local injection/vaginal symptoms; evaluate serious clot or pulmonary symptoms urgently."
          ],
          "sources": [
            "oral",
            "insert",
            "gel",
            "im"
          ]
        },
        {
          "title": "Administration counseling",
          "paragraphs": [
            "Take oral capsules at bedtime because of dizziness/drowsiness. Use Endometrin’s disposable applicator for the vaginal insert, and Crinone’s single-use applicator only vaginally; do not swallow either. Crinone may leave small white gel globules/discharge for several days, but persistent irritation, malodor or pain needs review. IM injections require the prescribed technique and visual inspection for particles/discoloration; never inject a vaginal product."
          ],
          "sources": [
            "oral",
            "insert",
            "gel",
            "im"
          ]
        },
        {
          "title": "Urgent symptoms and planned surgery",
          "paragraphs": [
            "Seek immediate care for chest pain, sudden dyspnea, painful/swollen leg or sudden vision/neurologic symptoms. Fever/dyspnea after sesame-oil IM treatment needs urgent assessment for eosinophilic pneumonia. Discuss high-thrombosis-risk surgery or prolonged immobilization with the prescriber; Prometrium’s label suggests stopping 4–6 weeks beforehand if feasible, but do not independently interrupt pregnancy support or apply that timing to every route."
          ],
          "sources": [
            "oral",
            "insert",
            "gel",
            "im"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Strength, delivery vehicle and allergy-relevant ingredients identify the product.",
      "takeaway": "Do not substitute capsules, inserts, gels or oil injections by nominal milligrams.",
      "blocks": [
        {
          "title": "Representative product identity",
          "paragraphs": [
            "Prometrium 100 mg is a peach round capsule marked SV, NDC 72989-372-30; 200 mg is pale yellow oval marked SV2, NDC 72989-373-30. Endometrin 100 mg is a white/off-white insert marked FPI / 100, supplied with disposable applicators. Selected Hikma injection is 50 mg/mL in a 10 mL multidose vial, NDC 0143-9725-01."
          ],
          "sources": [
            "oral",
            "insert",
            "im"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Reviewed oral capsules contain 100 or 200 mg progesterone in peanut oil. Endometrin inserts contain 100 mg. Crinone 4% and 8% deliver 45 and 90 mg respectively in 1.125 g gel from each single-use applicator (the applicator holds 1.3 g). Selected IM solution contains 50 mg/mL progesterone with sesame oil and 10% benzyl alcohol preservative. Other compounded products require separate quality/formulation review."
          ],
          "sources": [
            "oral",
            "insert",
            "gel",
            "im"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Prometrium: 25°C, permitted 15–30°C excursions, tight light-resistant container protected from moisture. Endometrin: 20–25°C with 15–30°C excursions; keep inserts/applicators in their supplied packaging until use. Crinone: 20–25°C, single-use prefilled applicators. Selected IM: 20–25°C; inspect before use and follow applicable multidose-vial handling instructions without inventing a product-specific open-vial expiration. Keep all products out of children’s reach."
          ],
          "sources": [
            "oral",
            "insert",
            "gel",
            "im"
          ]
        }
      ]
    }
  ]
};
