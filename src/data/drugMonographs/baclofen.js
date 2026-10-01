// Original clinical summaries checked against the product-specific public sources below.
export const baclofen = {
  "slug": "baclofen",
  "name": "Baclofen",
  "synonym": "Fleqsuvy · Ozobax DS · Lioresal Intrathecal",
  "description": "Antispastic therapy with separate oral and intrathecal regimens, withdrawal precautions and concentration checks.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Prevent overdose and abrupt withdrawal",
    "text": "Confirm route, concentration and units. Do not abruptly stop baclofen; pump interruptions or severe withdrawal/overdose symptoms need urgent medical care.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Drug action",
      "GABA-related antispastic"
    ],
    [
      "Oral vs pump units",
      "mg vs mcg"
    ],
    [
      "Key pump risk",
      "Fatal abrupt withdrawal"
    ]
  ],
  "sources": [
    {
      "id": "susp",
      "title": "Fleqsuvy · Current full prescribing information",
      "publisher": "Azurity / DailyMed",
      "note": "Clinical footer April 2024; SPL 4 effective December 16,2025. Oral 5 mg/mL suspension.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9076d6ce-bbc2-4a9f-9cb9-2de1b675b9aa"
    },
    {
      "id": "sol",
      "title": "Ozobax DS · Current full prescribing information",
      "publisher": "Metacel / Rosemont / DailyMed",
      "note": "SPL 2 effective March 13,2026. Oral 10 mg/5 mL solution; PK section explicitly studies a different 5 mg/5 mL oral solution.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d8ddcec5-debe-42b4-a803-e65917cc6a54"
    },
    {
      "id": "it",
      "title": "Lioresal Intrathecal · Current complete prescribing information",
      "publisher": "Amneal / Medtronic / DailyMed",
      "note": "Current SPL 29 effective December 9,2022. Route-specific screening, pump delivery and boxed withdrawal warning.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6f3bdcc0-ffc8-4911-8c35-958c8103a2c5"
    },
    {
      "id": "gran",
      "title": "Lyvispah · Reviewed oral granule prescribing information",
      "publisher": "Saol / DailyMed",
      "note": "November 2021 label; current manufacturer discontinuation notice separately checked.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a7d2dc58-e167-4ebc-ac1d-932f000fb412"
    },
    {
      "id": "availability",
      "title": "Lyvispah · Product discontinuation notice",
      "publisher": "Amneal",
      "note": "Manufacturer states promotion/distribution discontinued June 30,2025; residual pharmacy stock only.",
      "url": "https://www.lyvispah.com/"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Baclofen reduces neurologic spasticity; route and population determine the treatment plan.",
      "takeaway": "Oral therapy and intrathecal pump therapy are separate regimens.",
      "blocks": [
        {
          "title": "Reviewed oral-product uses",
          "paragraphs": [
            "Fleqsuvy, Ozobax DS and Lyvispah labels describe spasticity due to multiple sclerosis, including flexor spasms, associated pain, clonus and rigidity, and possible benefit in spinal-cord injury/disease. They are not indicated for skeletal muscle spasm from rheumatic disorders. Do not equate this with an unrestricted indication for ordinary acute back pain."
          ],
          "sources": [
            "susp",
            "sol",
            "gran"
          ]
        },
        {
          "title": "Intrathecal severe spasticity",
          "paragraphs": [
            "Lioresal Intrathecal treats severe spasticity after a positive intrathecal screening response. For spinal-cord-origin spasticity, chronic infusion is reserved for inadequate oral response or intolerable CNS effects at effective oral doses. Following traumatic brain injury, the label specifies waiting at least 1 year before considering long-term infusion. An approved compatible pump and trained team are required."
          ],
          "sources": [
            "it"
          ]
        },
        {
          "title": "Scope and availability",
          "paragraphs": [
            "This profile verifies two oral liquids and Lioresal Intrathecal; tablet/other injection brands need their own package/device instructions. Lyvispah granule labeling is described separately: Amneal discontinued distribution/promotion June 30,2025, with pharmacy availability limited to residual stock. A retained DailyMed label is not proof of current commercial supply."
          ],
          "sources": [
            "gran",
            "availability"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Oral doses use milligrams; intrathecal screening/infusion uses micrograms.",
      "takeaway": "Never convert an oral dose into a pump dose or reuse a liquid volume across concentrations.",
      "blocks": [
        {
          "title": "Reviewed oral titration",
          "paragraphs": [
            "The liquid labels suggest the following gradual regimen, adjusted to response/tolerability, with a maximum 80 mg/day (20 mg four times daily). These are not automatic increases for every patient, especially with organ impairment. Prescriptions should include both mg and the correct product-specific mL."
          ],
          "sources": [
            "susp",
            "sol"
          ],
          "table": {
            "headers": [
              "Suggested stage",
              "Oral dose, three times daily",
              "Fleqsuvy 5 mg/mL per dose",
              "Ozobax DS2 mg/mL per dose"
            ],
            "rows": [
              [
                "First 3 days",
                "5 mg",
                "1 mL",
                "2.5 mL"
              ],
              [
                "Next 3 days",
                "10 mg",
                "2 mL",
                "5 mL"
              ],
              [
                "Next 3 days",
                "15 mg",
                "3 mL",
                "7.5 mL"
              ],
              [
                "Next 3 days",
                "20 mg",
                "4 mL",
                "10 mL"
              ]
            ]
          }
        },
        {
          "title": "Oral administration",
          "paragraphs": [
            "Shake Fleqsuvy well and use a calibrated oral/enteral syringe, not a household spoon. Its NG administration instructions apply to tubes 8 French or larger with specified flushes; this profile does not substitute a generic tube procedure. Ozobax DS is a 2 mg/mL solution; do not assume an older 1 mg/mL solution has the same mL dose. Lyvispah, if residual stock is prescribed, uses whole packets that dissolve in the mouth or are given via its labeled food/tube procedure."
          ],
          "sources": [
            "susp",
            "sol",
            "gran"
          ]
        },
        {
          "title": "Intrathecal screening: supervised care only",
          "paragraphs": [
            "Use the 50 mcg/mL screening product: usual initial bolus 50 mcg (1 mL), administered over at least 1 minute, followed by 4–8 hours observation. If inadequate, the label allows 75 mcg then 100 mcg on subsequent trials 24 hours apart. Very small pediatric patients may first receive 25 mcg. Lack of response to 100 mcg excludes candidacy for chronic pump infusion. Resuscitation-capable monitoring is required."
          ],
          "sources": [
            "it"
          ]
        },
        {
          "title": "Initial pump titration: not an oral conversion",
          "paragraphs": [
            "After implantation, the initial 24-hour dose is twice the effective screening dose, unless its effect lasted more than 8 hours, in which case use that screening dose over 24 hours. No increase in the first 24 hours. Thereafter adult spinal-origin increments are 10–30% no more than once per 24 hours; cerebral-origin/pediatric increments 5–15% no more than once per 24 hours, under close monitoring."
          ],
          "sources": [
            "it"
          ]
        },
        {
          "title": "Chronic intrathecal dose selection",
          "paragraphs": [
            "Chronic dosing is individualized to benefit, useful tone and adverse effects. The label reports most adult spinal-origin patients maintained at 300–800 mcg/day, with limited experience above 1,000 mcg/day; most cerebral-origin patients at 90–703 mcg/day. These are observed ranges, not mandatory targets or universal maxima. At refills, labeled increases are up to 40% for spinal origin and 20% for cerebral origin; pediatric maintenance follows cerebral-origin recommendations. Sudden escalation need may indicate catheter malfunction."
          ],
          "sources": [
            "it"
          ]
        },
        {
          "title": "Organ impairment and stopping",
          "paragraphs": [
            "Renal impairment can require dose reduction; the reviewed labels supply no validated CrCl adjustment table. Older patients generally start cautiously. No formal hepatic adjustment regimen is provided. Reduce oral therapy slowly; pump interruption/withdrawal requires urgent specialist management, not an improvised oral bridge."
          ],
          "sources": [
            "susp",
            "sol",
            "it"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Overdose and abrupt withdrawal can both be life-threatening.",
      "takeaway": "New severe drowsiness or sudden rebound spasticity requires rapid assessment.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Baclofen can cause sedation, weakness, respiratory/CV depression and coma, especially with overdose or other CNS depressants. Do not drive or undertake hazardous activities until effects are known. Preserve useful tone when reducing spasticity because posture/balance may worsen.",
            "Abrupt oral withdrawal can cause hallucinations, seizures, fever, confusion and severe rebound rigidity, rarely progressing to rhabdomyolysis, organ failure or death. Intrathecal interruption can evolve rapidly from itching/tingling or recurrent spasticity to a fatal hypermetabolic syndrome. Pump alarms/refill failure need immediate contact with the pump team; severe symptoms need emergency care.",
            "Use caution with epilepsy, psychotic/confusional disorders, autonomic dysreflexia and renal impairment. Oral labels describe poor tolerability/limited benefit after stroke. Intrathecal screening/implantation should occur without infection; dose/concentration changes and refills require trained staff and observation."
          ],
          "sources": [
            "susp",
            "sol",
            "it"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "Hypersensitivity to baclofen is contraindicated. Lioresal Intrathecal is only for intrathecal administration; its label excludes IV, IM, subcutaneous and epidural administration. Oral liquids must never enter a pump. Pump refill-port errors can cause fatal overdose even when the concentration is correct."
          ],
          "sources": [
            "susp",
            "sol",
            "gran",
            "it"
          ]
        },
        {
          "title": "Boxed warning: intrathecal withdrawal",
          "paragraphs": [
            "Lioresal Intrathecal has a boxed warning for potentially fatal abrupt withdrawal and requires careful pump programming, monitoring, refill scheduling, alarm recognition and caregiver education. The reviewed oral liquids/granules do not have an FDA box, but have serious withdrawal warnings; absence of a box does not justify abrupt oral cessation."
          ],
          "sources": [
            "it",
            "susp",
            "sol",
            "gran"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Oral treatment commonly causes drowsiness, dizziness, weakness and nausea, with possible hypotension, confusion, constipation or urinary effects. Intrathecal effects include hypotonia, somnolence, dizziness, nausea and urinary retention; severe respiratory/CV depression, seizure, infection/device complications and withdrawal are important. Trial frequencies from different routes/populations are not directly comparable."
          ],
          "sources": [
            "susp",
            "sol",
            "gran",
            "it"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Sedatives and treatment transitions can increase overdose/withdrawal risk.",
      "takeaway": "Coordinate changes in every antispasticity medicine with the treating team.",
      "blocks": [
        {
          "title": "Alcohol and CNS depressants",
          "paragraphs": [
            "Alcohol, opioids, benzodiazepines and other sedating medicines can add to baclofen’s CNS depression. Review the full list and monitor sedation/respiration; a stable baclofen dose can become unsafe after another medicine is added. Avoid self-directed sedative combinations."
          ],
          "sources": [
            "susp",
            "sol",
            "gran",
            "it"
          ]
        },
        {
          "title": "Intrathecal combinations",
          "paragraphs": [
            "Systematic intrathecal interaction experience is limited. The label reports hypotension/dyspnea with epidural morphine. Intrathecal analgesic admixtures have been associated with catheter-tip mass reports; do not infer compatibility or add medicines to the baclofen reservoir without validated product/device instructions."
          ],
          "sources": [
            "it"
          ]
        },
        {
          "title": "Oral-to-pump transitions",
          "paragraphs": [
            "When a pump is initiated, concomitant oral antispastic medicines may need gradual reduction to avoid toxicity. Abruptly reducing them can cause withdrawal. Oral/enteral baclofen alone cannot be relied upon to stop progression of intrathecal withdrawal; emergency restoration and supportive treatment need a specialist team."
          ],
          "sources": [
            "it"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Oral and intrathecal pediatric evidence has different age boundaries.",
      "takeaway": "Renal clearance is central to oral toxicity risk.",
      "blocks": [
        {
          "title": "Pediatrics and older adults",
          "paragraphs": [
            "The reviewed oral-product labels do not establish safety/effectiveness below age 12. Lioresal Intrathecal does not establish safety/effectiveness below age 4; children also need sufficient body size for the selected pump. Very-small-child screening differs from ordinary screening. Older patients need cautious oral selection and renal-function assessment."
          ],
          "sources": [
            "susp",
            "sol",
            "gran",
            "it"
          ]
        },
        {
          "title": "Renal and hepatic impairment",
          "paragraphs": [
            "Baclofen is largely excreted unchanged by kidneys; impaired renal function can increase exposure and require lower dosing/close assessment. Intrathecal labeling also advises renal caution despite lower plasma exposure. No reviewed source establishes a universal renal formula, dialysis dosing schedule or hepatic adjustment table."
          ],
          "sources": [
            "susp",
            "sol",
            "gran",
            "it"
          ]
        },
        {
          "title": "Pregnancy and neonatal withdrawal",
          "paragraphs": [
            "Human developmental-risk data are limited and animal adverse findings exist. Oral labels report neonatal withdrawal and direct a clinician-supervised gradual reduction/discontinuation before delivery when continued in pregnancy; do not self-stop or apply that oral instruction automatically to a pump. Intrathecal use requires individualized benefit-risk assessment while protecting against maternal pump withdrawal."
          ],
          "sources": [
            "susp",
            "sol",
            "gran",
            "it"
          ]
        },
        {
          "title": "Breastfeeding",
          "paragraphs": [
            "Oral baclofen enters milk; infant effects are incompletely characterized and withdrawal can occur when maternal treatment or breastfeeding stops. Consider maternal need, infant risks and breastfeeding benefits together. Intrathecal label states milk levels are unknown and requires benefit-risk assessment; low maternal plasma exposure is not proof of absent infant exposure."
          ],
          "sources": [
            "susp",
            "sol",
            "gran",
            "it"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Baclofen is a GABA-related antispastic agent with spinal reflex effects.",
      "takeaway": "Intrathecal delivery produces CSF exposure different from oral dosing.",
      "blocks": [
        {
          "title": "Mechanism and physiologic effects",
          "paragraphs": [
            "The precise therapeutic mechanism is incompletely established; baclofen is thought to act through GABA-B pathways and inhibition of mono-/polysynaptic spinal reflexes. CNS depression accompanies its antispastic effect and can include respiratory/CV suppression."
          ],
          "sources": [
            "susp",
            "sol",
            "it"
          ]
        },
        {
          "title": "Oral pharmacokinetics",
          "paragraphs": [
            "Fleqsuvy fasted-study peak occurred around 1 hour with an apparent half-life about 5.6 hours; renal unchanged-drug excretion and variability matter clinically. Ozobax DS’s current PK section reports a study of 5 mg/5 mL solution, not the currently marketed 2 mg/mL DS strength; its approximately 0.75-hour peak/5.7-hour half-life should not be mislabeled as a direct DS-formulation study."
          ],
          "sources": [
            "susp",
            "sol"
          ]
        },
        {
          "title": "Intrathecal pharmacokinetics",
          "paragraphs": [
            "Intrathecal bolus data report average CSF elimination half-life about 1.5 hours and clearance around 30 mL/hour. Continuous-infusion plasma concentrations are expected to be low, with a variable lumbar-to-cisternal gradient. These small-study values do not predict individual pump dose, refill interval or safe time after an interruption."
          ],
          "sources": [
            "it"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Monitor useful function, tone, sedation, respiration and uninterrupted delivery.",
      "takeaway": "Every pump patient needs an explicit refill/alarm/emergency plan.",
      "blocks": [
        {
          "title": "Oral follow-up and counseling",
          "paragraphs": [
            "Assess function, spasticity, strength/balance, sedation, renal risk, seizure control and interacting medicines. Verify mg/mL and measuring device at each refill/formulation change. Read product patient instructions, avoid hazardous activity until effects are known, and discuss pregnancy/breastfeeding and taper plans."
          ],
          "sources": [
            "susp",
            "sol",
            "gran"
          ]
        },
        {
          "title": "Pump monitoring and caregiver education",
          "paragraphs": [
            "Keep refill appointments, recognize alarms and carry the pump treatment/contact information. Return of spasticity, itching/tingling, unexplained escalating dose needs, pain or new neurologic deficits warrants prompt evaluation of delivery/catheter problems. Refills/programming/concentration changes are performed by trained personnel using strict aseptic technique and the actual device manual."
          ],
          "sources": [
            "it"
          ]
        },
        {
          "title": "Emergency distinction",
          "paragraphs": [
            "Marked drowsiness, hypotonia, slow breathing or coma may signal overdose; fever, severe rebound rigidity or confusion may signal withdrawal. Both require immediate medical assessment. There is no specific baclofen antidote. Do not attempt a home pump refill, port injection or oral replacement calculation."
          ],
          "sources": [
            "susp",
            "sol",
            "it"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Verify liquid concentration and route-specific injection before prescribing or administration.",
      "takeaway": "Milligrams, micrograms and milliliters must remain distinct.",
      "blocks": [
        {
          "title": "Representative product identity",
          "paragraphs": [
            "Fleqsuvy 25 mg/5 mL (5 mg/mL) is an orange/yellow grape-flavored suspension; 120 mL NDC 52652-6001-1. Ozobax DS 10 mg/5 mL (2 mg/mL) is a clear colorless solution; 237 mL NDC 69528-302-08. Lioresal’s 50 mcg/mL screening ampule is 1 mL, supplied in screening kits (NDC 70121-2496-5). Verify the actual package/device."
          ],
          "sources": [
            "susp",
            "sol",
            "it"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Reviewed oral liquids are 5 mg/mL suspension and 2 mg/mL solution. Lyvispah 5/10/20 mg oral granules are availability-qualified residual-stock forms. Lioresal Intrathecal concentrations are 50, 500 and 2,000 mcg/mL: screening 50 mcg/1 mL, maintenance 10 mg/20 mL, 10 mg/5 mL or 40 mg/20 mL. These preservative-free injections are not oral products or general IV formulations."
          ],
          "sources": [
            "susp",
            "sol",
            "gran",
            "availability",
            "it"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Fleqsuvy and Ozobax DS: 20–25°C with 15–30°C excursions; Fleqsuvy discard 2 months after first opening. DS uses a tight light-resistant child-resistant container; its reviewed label supplies no matching 2-month discard rule. Lyvispah packets use controlled room temperature. Lioresal needs no refrigeration: do not store above 30°C, freeze, heat-sterilize or autoclave; single-use ampules, discard residual contents. Dilution requires sterile preservative-free saline and device-specific professional instructions."
          ],
          "sources": [
            "susp",
            "sol",
            "gran",
            "it"
          ]
        }
      ]
    }
  ]
};
