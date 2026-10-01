// Original clinical summaries checked against the product-specific public sources below.
export const thyroid = {
  "slug": "thyroid",
  "name": "Thyroid (desiccated)",
  "synonym": "Armour Thyroid · DTE",
  "description": "Porcine thyroid extract containing T4 and T3; unapproved U.S. product with carefully qualified label and guideline scope.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Avoid hormone excess and weight-loss misuse",
    "text": "DTE is not FDA-approved and is not for weight loss. Verify the product and units, monitor thyroid/cardiac effects, and discuss pregnancy or treatment changes with the clinician.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Product type",
      "Porcine thyroid extract"
    ],
    [
      "Armour 1 grain",
      "60 mg: 38 mcg T4 + 9 mcg T3"
    ],
    [
      "U.S. status",
      "Not FDA-approved"
    ]
  ],
  "sources": [
    {
      "id": "label",
      "title": "Armour Thyroid · Current complete product labeling",
      "publisher": "AbbVie / DailyMed",
      "note": "Revised March 2024; SPL 17 effective March 13,2024; unapproved animal-derived thyroid product.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=56b41079-60db-4256-9695-202b3a65d13d"
    },
    {
      "id": "fda",
      "title": "Current actions on unapproved animal-derived thyroid medicines",
      "publisher": "U.S. FDA",
      "note": "Current public enforcement/status page checked October 1,2026; no blanket removal date inferred.",
      "url": "https://www.fda.gov/drugs/enforcement-activities-fda/fdas-actions-address-unapproved-thyroid-medications"
    },
    {
      "id": "notice",
      "title": "Animal-derived thyroid products · August 2026 notice",
      "publisher": "U.S. FDA",
      "note": "August 5,2026 letter retains interim risk-based enforcement while draft guidances are developed.",
      "url": "https://www.fda.gov/media/191621/download"
    },
    {
      "id": "ata",
      "title": "Thyroid replacement guideline · Full public text",
      "publisher": "American Thyroid Association",
      "note": "2014 guideline; thyroid extracts, monitoring and pediatric/central-disease recommendations reviewed.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4267409/"
    },
    {
      "id": "statement",
      "title": "Desiccated thyroid extract · Professional statement",
      "publisher": "American Thyroid Association",
      "note": "September 18,2025; levothyroxine standard therapy, individualized therapy context. Regulatory account superseded where necessary by FDA2026.",
      "url": "https://www.thyroid.org/ata-statement-desiccated-thyroid-extract/"
    },
    {
      "id": "preg",
      "title": "Pregnancy-specific professional guidance",
      "publisher": "American Thyroid Association",
      "note": "Public guidance checked October 1,2026; DTE/T3 not recommended for maternal hypothyroidism. No inaccessible 2026 full guideline claimed.",
      "url": "https://www.thyroid.org/management-hypothyroidism-pregnancy/"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "This inventory entry means desiccated thyroid extract, not levothyroxine alone.",
      "takeaway": "Armour is a prescription product whose labeling is not FDA-approved.",
      "blocks": [
        {
          "title": "Product identity and regulatory status",
          "paragraphs": [
            "Armour Thyroid is porcine desiccated thyroid extract containing T4 and T3. The current label and FDA identify animal-derived thyroid products as unapproved. DailyMed listing, prescription availability and longstanding use do not establish FDA approval or equivalence to approved levothyroxine."
          ],
          "sources": [
            "label",
            "fda"
          ]
        },
        {
          "title": "Label-described uses versus preferred care",
          "paragraphs": [
            "The unapproved Armour label describes thyroid replacement for hypothyroidism, excluding transient recovery-phase subacute thyroiditis, and TSH suppression for certain goiters/cancers. These are label statements, not FDA-approved indications or a recommendation to suppress TSH in every nodule. ATA recommends levothyroxine as routine first-line replacement; selected DTE therapy requires individualized discussion."
          ],
          "sources": [
            "label",
            "ata",
            "statement"
          ]
        },
        {
          "title": "Current enforcement and scope",
          "paragraphs": [
            "FDA’s current page and August 5,2026 notice describe interim risk-based enforcement while guidance/development pathways are being worked on. This does not establish approval, a new DTE formulation, or a blanket market-removal date. Discuss treatment options with the prescriber; do not abandon necessary hormone replacement."
          ],
          "sources": [
            "fda",
            "notice"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Armour dosing uses milligrams of extract/grains, not the microgram dose of levothyroxine.",
      "takeaway": "Hormone content is not a safe automatic conversion to another thyroid product.",
      "blocks": [
        {
          "title": "Armour adult label regimen",
          "paragraphs": [
            "The current unapproved product label describes a usual start of 30 mg/day, increasing by 15 mg every 2–3 weeks according to response/cardiovascular status. It describes 15 mg/day for longstanding myxedema, particularly when cardiovascular impairment is suspected, and usual maintenance 60–120 mg/day. Angina warrants dose review/reduction. These are product-label summaries, not a universal starting prescription."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Units and dose selection",
          "paragraphs": [
            "One Armour grain is 60 mg extract with 38 mcg T4 and 9 mcg T3. Do not treat 60 mg extract as 60 mg pure thyroid hormone or equate its hormone content to a levothyroxine-only daily dose. Actual titration depends on thyroid tests, symptoms, indication, cardiac risk and the selected product."
          ],
          "sources": [
            "label",
            "ata"
          ]
        },
        {
          "title": "Pediatric label table and current-care boundary",
          "paragraphs": [
            "The retained Armour label prints the following congenital-hypothyroidism table. It is presented as unapproved label content, not a first-line pediatric protocol. ATA pediatric guidance uses levothyroxine; congenital disease requires prompt pediatric endocrine treatment. The age amounts and weight amounts are both source columns and must not be combined or independently used to override a specialist dose."
          ],
          "sources": [
            "label",
            "ata"
          ],
          "table": {
            "headers": [
              "Label age band",
              "Extract mg/day column",
              "Extract mg/kg/day column"
            ],
            "rows": [
              [
                "0–6 months",
                "15–30 mg",
                "4.8–6 mg/kg"
              ],
              [
                "6–12 months",
                "30–45 mg",
                "3.6–4.8 mg/kg"
              ],
              [
                "1–5 years",
                "45–60 mg",
                "3–3.6 mg/kg"
              ],
              [
                "6–12 years",
                "60–90 mg",
                "2.4–3 mg/kg"
              ],
              [
                "Over 12 years",
                "Over 90 mg",
                "1.2–1.8 mg/kg"
              ]
            ]
          }
        },
        {
          "title": "Administration, monitoring and organ impairment",
          "paragraphs": [
            "Use a consistent prescribed administration routine and reassess absorption/adherence after unexpected tests or a product change. Fasting can improve absorption; the Armour label does not establish a modern product-specific 30–60-minute meal rule. No validated CrCl/hepatic-adjustment formula is provided. Older/cardiac patients need cautious dosing, and central hypothyroidism cannot be titrated using TSH alone."
          ],
          "sources": [
            "label",
            "ata"
          ]
        },
        {
          "title": "Specialist indications and emergencies",
          "paragraphs": [
            "Cancer-related suppression needs a disease-specific specialist target; no universal suppression dose is supplied here. Myxedema coma is an emergency requiring hospital treatment and separate injectable thyroid hormone management, not a home Armour escalation. The label’s older IV levothyroxine discussion is not an Armour formulation or conversion regimen."
          ],
          "sources": [
            "label"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Excess hormone, cardiac effects and uncorrected adrenal insufficiency can cause serious harm.",
      "takeaway": "“Natural” origin does not establish lower risk.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Over-replacement can cause palpitations, rapid/irregular pulse, tremor, sweating, heat intolerance or chest pain; urgent cardiac symptoms require prompt assessment. Older patients and those with coronary disease need particular caution. T3 content may produce post-dose peaks and thyrotoxic symptoms even when a simplistic conversion seems plausible.",
            "Treat uncorrected adrenal cortical insufficiency before thyroid treatment; thyroid replacement can worsen its effects. Reassess diabetes treatment and anticoagulant monitoring when thyroid status changes. Excessive pediatric replacement can affect growth/skull development.",
            "The label describes potential adventitious-agent contamination from porcine source/bovine-handling facilities, with no reported transmission cases in the label. Current FDA concerns include potency consistency and purity. Do not extrapolate this into a confirmed infection in a patient or an assertion that a specific current lot is recalled."
          ],
          "sources": [
            "label",
            "ata",
            "fda"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "The label lists uncorrected adrenal cortical insufficiency, untreated thyrotoxicosis and apparent hypersensitivity to active/extraneous constituents. Avoid assuming every pork-food allergy predicts the same reaction, or that the label’s statement about rarity of true hormone allergy eliminates excipient/source assessment."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Boxed warning: weight-loss misuse",
          "paragraphs": [
            "The current unapproved label contains a boxed warning against using thyroid hormone for obesity/weight loss: replacement-range doses do not produce effective weight loss in euthyroid patients, and larger doses can cause life-threatening toxicity, especially with sympathomimetic agents. The box’s presence does not mean FDA approved the product labeling."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "The product label primarily describes adverse effects of therapeutic overdosage resembling hyperthyroidism, including cardiovascular/CNS/metabolic symptoms. Partial hair loss in children may be transient early in therapy. Long-term excess hormone poses cardiac/skeletal concerns; no unsupported frequency estimate or comparative safety advantage is claimed."
          ],
          "sources": [
            "label",
            "ata"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Absorption, thyroid-binding changes and altered drug response can affect treatment.",
      "takeaway": "Review medicines and supplements whenever hormone therapy changes.",
      "blocks": [
        {
          "title": "Anticoagulants and diabetes medicines",
          "paragraphs": [
            "Thyroid replacement can increase sensitivity to oral anticoagulants; follow INR/prothrombin response and adjust the anticoagulant clinically. Glucose-lowering needs may increase as replacement is achieved and change again if therapy stops; monitor actual glucose control rather than apply a fixed insulin change."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Absorption-binding agents",
          "paragraphs": [
            "Cholestyramine/colestipol bind both T4 and T3; the Armour label recommends 4–5 hours between them and thyroid hormone. Review iron, calcium and other binding agents with the prescriber/pharmacist; guidance on thyroid-hormone absorption does not establish automatic interchangeability of DTE and levothyroxine."
          ],
          "sources": [
            "label",
            "ata"
          ]
        },
        {
          "title": "Estrogens, binding proteins and testing",
          "paragraphs": [
            "Estrogens/estrogen-containing contraceptives raise thyroxine-binding globulin and can alter replacement requirements. Androgens, corticosteroids, salicylates and other agents can affect binding/test interpretation. Evaluate free hormone when total values are misleading; do not infer a new dose from a binding-protein change alone."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Biotin and sympathomimetics",
          "paragraphs": [
            "The label instructs stopping biotin-containing supplements at least 2 days before thyroid tests because certain assays can give erroneous results. Follow laboratory instructions when longer holds are needed. Sympathomimetic weight-loss combinations increase toxicity risk and are not an appropriate use of thyroid replacement."
          ],
          "sources": [
            "label"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Preferred therapy differs from the historical breadth of the unapproved product label.",
      "takeaway": "Pregnancy calls for prompt review and adequate T4 replacement.",
      "blocks": [
        {
          "title": "Pregnancy and planning pregnancy",
          "paragraphs": [
            "Although the Armour label broadly includes pregnancy among replacement populations, ATA guidance recommends against continuing/starting DTE or T3 preparations for maternal hypothyroidism because fetal T4 delivery matters. Contact the clinician promptly for a levothyroxine-based plan and testing; do not abruptly stop necessary replacement while arranging care."
          ],
          "sources": [
            "label",
            "preg",
            "ata"
          ]
        },
        {
          "title": "Breastfeeding",
          "paragraphs": [
            "The label reports minimal thyroid hormone in milk and advises caution. Adequate maternal replacement remains clinically important; use an individualized product choice and monitoring plan rather than assume the DTE source or a low transfer statement proves safety superiority."
          ],
          "sources": [
            "label",
            "ata"
          ]
        },
        {
          "title": "Children, older adults and central disease",
          "paragraphs": [
            "Congenital hypothyroidism needs rapid, specialist-guided treatment; the Armour table does not supersede levothyroxine pediatric practice. Older/cardiac patients require low-dose caution. In pituitary/hypothalamic disease, free T4 and clinical assessment are important because TSH can be unreliable."
          ],
          "sources": [
            "label",
            "ata"
          ]
        },
        {
          "title": "Renal and hepatic disease",
          "paragraphs": [
            "The reviewed Armour label gives no product-specific renal or hepatic dose table. Binding-protein changes, nephrotic hormone loss, other illnesses and cardiac risk can complicate tests/requirements. Do not transplant a levothyroxine-only no-adjustment rule into an untested universal DTE regimen."
          ],
          "sources": [
            "label",
            "ata"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "DTE delivers both T4 and T3 from animal tissue.",
      "takeaway": "Its fixed T4:T3 ratio is different from normal human thyroid secretion.",
      "blocks": [
        {
          "title": "Mechanism and hormone ratio",
          "paragraphs": [
            "Thyroid hormones affect gene regulation, metabolism and development. T4 also provides a precursor for peripheral T3 production. Armour’s 38: 9 microgram content gives a T4:T3 ratio about 4.2: 1; ATA discusses a higher T3 proportion than human thyroid secretion and resultant peak/excess concerns. No clinical superiority follows from containing both hormones."
          ],
          "sources": [
            "label",
            "ata"
          ]
        },
        {
          "title": "Absorption and disposition",
          "paragraphs": [
            "The label describes incomplete variable T4 absorption, relatively rapid T3 absorption, extensive circulating protein binding, and deiodination/conjugation with enterohepatic handling. These hormone-level observations do not constitute a modern product-specific bioequivalence study for every DTE tablet or brand."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Evidence limitations",
          "paragraphs": [
            "ATA’s 2025 statement recognizes individualized patient preferences while retaining levothyroxine as standard therapy. The guideline identifies limited controlled long-term DTE safety/outcome evidence. Do not turn short-term preference data into a claim of established long-term safety or a validated genetic indication."
          ],
          "sources": [
            "statement",
            "ata"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Track thyroid tests, clinical response and product changes with the prescriber.",
      "takeaway": "A product change is a clinical event requiring follow-up.",
      "blocks": [
        {
          "title": "Monitoring",
          "paragraphs": [
            "Assess thyroid tests and symptoms together, with cardiac status, diabetes/anticoagulant response and adherence/absorption context. Primary disease generally uses TSH; central disease requires free-T4 assessment. The Armour label describes reassessment within the first 4 weeks; timing and targets should be individualized rather than promise every patient normalizes in 2–3 weeks."
          ],
          "sources": [
            "label",
            "ata"
          ]
        },
        {
          "title": "Counseling",
          "paragraphs": [
            "Replacement may be lifelong. Report chest pain, tachycardia, palpitations, marked heat intolerance or nervousness. Keep the same verified product/routine until a planned change, disclose biotin and interacting medicines, and arrange follow-up after switches. Pregnancy planning should be discussed before conception."
          ],
          "sources": [
            "label",
            "preg"
          ]
        },
        {
          "title": "Source and recall assessment",
          "paragraphs": [
            "Review actual manufacturer/strength/lot with the pharmacist if potency or supply concerns arise. FDA status concerns do not prove every brand/lot has the same defect. This profile is not a real-time recall clearance; continue clinically necessary replacement while seeking professional instructions."
          ],
          "sources": [
            "fda",
            "notice"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Identify extract mass, grain strength and both hormone contents.",
      "takeaway": "Do not substitute a different grain convention or thyroid product without verification.",
      "blocks": [
        {
          "title": "Representative product identity",
          "paragraphs": [
            "Armour 60 mg (1 grain) is a light-tan round tablet with an A/mortar-and-pestle motif and strength code TE; 100-count NDC 0456-0459-01. The current March 2024 label is distributed by AbbVie and expressly states it has not been approved as a new drug by FDA."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Oral Armour tablets: 15, 30, 60, 90, 120, 180, 240 and 300 mg, corresponding to ¼, ½, 1, 1½, 2, 3, 4 and 5 grains. Each Armour 60 mg tablet provides 38 mcg T4 and 9 mcg T3. Other DTE brands/salts may use different grain mass conventions; this profile verifies Armour, not every animal-derived product."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Store in a tight container protected from light/moisture at 15–30°C. Keep securely away from children. A characteristic extract odor is described by the label but does not replace package integrity/expiration checks."
          ],
          "sources": [
            "label"
          ]
        }
      ]
    }
  ]
};
