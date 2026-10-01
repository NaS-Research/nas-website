// Original clinical summaries checked against the product-specific public sources below.
export const nifedipine = {
  "slug": "nifedipine",
  "name": "Nifedipine",
  "synonym": "Procardia XL; immediate-release capsules",
  "description": "Dihydropyridine calcium-channel blocker with formulation-specific angina, hypertension and obstetric-use boundaries.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Verify the release formulation",
    "text": "Do not use immediate-release capsules for abrupt home blood-pressure reduction. Swallow ER tablets whole and seek urgent care for fainting, new chest pain or severe abdominal symptoms.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Class",
      "Dihydropyridine calcium-channel blocker"
    ],
    [
      "Reviewed routes",
      "Oral IR capsules / GITS ER tablets"
    ],
    [
      "XL schedule",
      "Once daily; swallow whole"
    ]
  ],
  "sources": [
    {
      "id": "xl",
      "title": "Procardia XL · Current full label",
      "publisher": "Pfizer / DailyMed",
      "note": "September 2026 clinical revision; GITS extended-release tablets.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8ebcb33c-f43b-4b36-9f94-9774b2a59e06"
    },
    {
      "id": "ir",
      "title": "Nifedipine immediate-release capsules · Current full label",
      "publisher": "Avet / Major / DailyMed",
      "note": "Clinical revision March 2022; SPL4 effective June 30, 2026.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=acb493a3-b8f2-41a9-8ab2-550d97c4592a"
    },
    {
      "id": "ng133",
      "title": "Hypertension in pregnancy · NG133",
      "publisher": "NICE",
      "note": "Full public guideline updated April 17, 2023; obstetric/postnatal context. Not a U.S. product approval.",
      "url": "https://www.nice.org.uk/guidance/ng133/resources/hypertension-in-pregnancy-diagnosis-and-management-pdf-66141717671365"
    },
    {
      "id": "ng25",
      "title": "Preterm labour and birth · NG25",
      "publisher": "NICE",
      "note": "Full public guideline updated June 10, 2022; selected tocolysis boundaries.",
      "url": "https://www.nice.org.uk/guidance/ng25/resources/preterm-labour-and-birth-pdf-1837333576645"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "The release system determines the reviewed U.S. uses.",
      "takeaway": "Immediate-release angina capsules are not routine hypertension treatment.",
      "blocks": [
        {
          "title": "Extended-release cardiovascular indications",
          "paragraphs": [
            "Procardia XL is indicated for hypertension, vasospastic angina and chronic stable angina in patients remaining symptomatic despite adequate beta-blocker and/or nitrate treatment, or unable to tolerate them. Blood-pressure lowering reduces cardiovascular-event risk; that statement does not create a separate heart-failure indication."
          ],
          "sources": [
            "xl"
          ]
        },
        {
          "title": "Immediate-release indications and restrictions",
          "paragraphs": [
            "The selected IR capsule is labeled for vasospastic angina and the same refractory/intolerant chronic stable angina context. It is not approved for essential hypertension and should not be used for acute blood-pressure reduction under this U.S. label. Oral/sublingual use for abrupt lowering has caused profound hypotension, myocardial infarction and death."
          ],
          "sources": [
            "ir"
          ]
        },
        {
          "title": "Obstetric guideline context",
          "paragraphs": [
            "NICE includes nifedipine for selected pregnancy hypertension and specialist tocolysis. These are distinct obstetric care pathways with maternal/fetal assessment, product review and monitoring. Their recommendations do not authorize self-treatment of a high reading or substitution of IR capsules for a prescribed ER regimen."
          ],
          "sources": [
            "ng133",
            "ng25",
            "ir"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Use the exact formulation and titrate against pressure, angina and tolerability.",
      "takeaway": "Do not crush ER tablets or repurpose IR capsules for rapid home BP lowering.",
      "blocks": [
        {
          "title": "Procardia XL dosing",
          "paragraphs": [
            "Start 30 or 60 mg orally once daily for hypertension or angina. Usually titrate over 7–14 days with BP reassessment; doses above 120 mg/day are not recommended. Angina experience above 90 mg/day is limited, so higher doses require particular caution and clinical justification. Swallow tablets whole without biting or dividing."
          ],
          "sources": [
            "xl"
          ]
        },
        {
          "title": "Selected immediate-release angina dosing",
          "paragraphs": [
            "Start 10 mg orally three times daily, swallowing capsules whole. The usual effective range is 10–20 mg three times daily. In selected coronary-spasm patients, the label allows 20–30 mg three or four times daily; more than 120 mg/day is rarely necessary, and more than 180 mg/day is not recommended. A single dose rarely exceeds 30 mg. Usually allow 7–14 days between changes; this is not a home rapid-titration protocol."
          ],
          "sources": [
            "ir"
          ]
        },
        {
          "title": "Formulation switch and discontinuation",
          "paragraphs": [
            "The XL label permits angina patients to switch from IR capsules to the nearest equivalent total daily XL dose, followed by individual reassessment: 10 mg IR three times daily may become 30 mg XL once daily. This example is not a blanket equivalence rule for every ER delivery system. If stopping, the label favors gradual clinician-supervised reduction and close follow-up."
          ],
          "sources": [
            "xl"
          ]
        },
        {
          "title": "Organ impairment and older age",
          "paragraphs": [
            "Hepatic impairment can increase exposure and prolong elimination; use cautious individualized titration rather than a fabricated hepatic dosing table. Renal impairment does not substantially alter the reviewed pharmacokinetics, and no numerical renal adjustment is specified. Older patients have reduced clearance and greater exposure; start/titrate with attention to pressure and symptoms."
          ],
          "sources": [
            "xl",
            "ir"
          ]
        },
        {
          "title": "Specialist obstetric boundaries",
          "paragraphs": [
            "For tocolysis, NICE considers nifedipine at 24+0–25+6 weeks with intact membranes and suspected preterm labour, and offers it at 26+0–33+6 weeks with intact membranes and suspected/diagnosed labour. Bleeding, infection and other reasons not to delay birth must be assessed. NG133 also includes oral nifedipine among immediate treatments for severe hypertension in obstetric critical care, with response/adverse-effect monitoring. Neither guideline supplies a universal outpatient loading schedule here."
          ],
          "sources": [
            "ng25",
            "ng133"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Hypotension, worsening ischemia and formulation-specific GI injury need recognition.",
      "takeaway": "New chest pain, fainting or severe abdominal symptoms require prompt assessment.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Excessive hypotension may occur during initiation or dose escalation, especially with other BP-lowering drugs. Increased angina or myocardial infarction has occurred rarely during initiation/escalation, particularly with severe obstructive coronary disease. IR capsules should be avoided in acute coronary syndrome and during the first 1–2 weeks after myocardial infarction. Nifedipine does not prevent beta-blocker withdrawal effects.",
            "Heart failure has occurred, particularly with concomitant beta-blockers; severe aortic stenosis warrants extra caution. Assess new edema, dyspnea or weight gain rather than automatically calling ankle swelling benign. The nondeformable XL GITS system can cause obstruction, bezoars or GI-wall ulceration, sometimes without prior GI disease; review strictures, altered anatomy and reduced GI motility.",
            "Do not bite, puncture or take IR capsules sublingually to abruptly lower BP. The U.S. IR warning is separate from a clinician-managed obstetric protocol. Severe hypotension around high-dose fentanyl anesthesia is reported particularly with concomitant beta-blockers; the surgical/anesthesia team must plan treatment individually."
          ],
          "sources": [
            "xl",
            "ir"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "Known hypersensitivity to nifedipine is contraindicated in both reviewed labels. Their contraindication sections do not replace the explicit IR acute-BP/ACS restrictions or XL GI warnings. Another manufacturer or delivery system requires its own contraindication and excipient check."
          ],
          "sources": [
            "xl",
            "ir"
          ]
        },
        {
          "title": "Boxed-warning status",
          "paragraphs": [
            "Neither reviewed current nifedipine label has a formal boxed warning. Serious hypotension, ischemic events and XL obstruction remain important labeled risks."
          ],
          "sources": [
            "xl",
            "ir"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Peripheral edema, headache, flushing, dizziness, nausea and palpitations are reported; edema is dose-related. Constipation may occur with XL. Less common serious reports include syncope, cardiac deterioration, GI obstruction/ulceration with XL, hypersensitivity, hepatitis and severe skin reactions. Trial and spontaneous-report events do not all establish causation; incidence from one formulation should not be assigned to another."
          ],
          "sources": [
            "xl",
            "ir"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Exposure and additive BP effects can change markedly with co-medications.",
      "takeaway": "Avoid grapefruit and review both newly started and recently stopped drugs.",
      "blocks": [
        {
          "title": "CYP3A4 inhibitors and inducers",
          "paragraphs": [
            "CYP3A4 inhibitors such as certain azoles, macrolides and protease inhibitors may increase exposure; monitor closely and consider the lowest available starting dose with clinician adjustment. Cimetidine also increases exposure. Phenytoin and other known CYP3A4 inducers reduce exposure: avoid coadministration or consider another antihypertensive. Do not compensate by self-increasing the nifedipine dose."
          ],
          "sources": [
            "xl",
            "ir"
          ]
        },
        {
          "title": "Grapefruit and additive hemodynamic effects",
          "paragraphs": [
            "Avoid grapefruit and its juice because systemic exposure increases. Beta-blockers and other antihypertensives may add hypotension and occasionally worsen heart failure or angina. Nitrates may be coadministered for appropriate angina treatment, but monitor pressure and symptoms."
          ],
          "sources": [
            "xl",
            "ir"
          ]
        },
        {
          "title": "Digoxin, anticoagulants and perioperative care",
          "paragraphs": [
            "Monitor digoxin levels when starting, changing or stopping nifedipine. Rare increased prothrombin-time reports with coumarins have uncertain causality; use the anticoagulant monitoring plan. Tell the anesthetist about nifedipine/beta-blockers: the XL label discusses at least 36 hours of withdrawal before high-dose fentanyl surgery if the clinical condition permits, not a universal preoperative stop instruction."
          ],
          "sources": [
            "xl",
            "ir"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Pregnancy and breastfeeding require an indication-specific plan.",
      "takeaway": "U.S. label cautions and specialist obstetric guidance have different scopes.",
      "blocks": [
        {
          "title": "Pregnancy and postpartum hypertension",
          "paragraphs": [
            "The U.S. labels describe animal fetal risks and inadequate controlled human pregnancy data; use requires benefit-risk assessment. NICE nevertheless recommends selected obstetric use after reviewing the actual product: nifedipine is an alternative when labetalol is unsuitable for chronic/gestational hypertension or pre-eclampsia. Severe hypertension requires monitored urgent care, not application of routine angina doses."
          ],
          "sources": [
            "xl",
            "ir",
            "ng133"
          ]
        },
        {
          "title": "Breastfeeding",
          "paragraphs": [
            "Nifedipine enters milk. The U.S. labels use an individual benefit-risk approach. NICE includes nifedipine in postnatal hypertension care and explains that treatment can be adapted to breastfeeding, with infant observation for poor feeding, lethargy or hypotension particularly when vulnerable. Do not infer that breastfeeding universally requires stopping treatment."
          ],
          "sources": [
            "xl",
            "ir",
            "ng133"
          ]
        },
        {
          "title": "Children, older adults and organ disease",
          "paragraphs": [
            "Pediatric safety/effectiveness are not established in the reviewed U.S. labels; no general pediatric mg/kg regimen is provided. Older adults and hepatic impairment can increase exposure. Renal impairment requires clinical surveillance even without a specified dose adjustment; chronic kidney disease, concomitant drugs and hemodynamic instability still affect risk."
          ],
          "sources": [
            "xl",
            "ir"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Dihydropyridine calcium-channel blockade relaxes arterial smooth muscle.",
      "takeaway": "Elimination half-life and ER delivery duration describe different processes.",
      "blocks": [
        {
          "title": "Mechanism",
          "paragraphs": [
            "Nifedipine reduces calcium entry in vascular smooth muscle, dilating coronary and peripheral arteries. Reduced afterload and relief of coronary spasm contribute to antianginal effects. Vasodilation may cause reflex heart-rate changes; it is not an AV-node rate-control substitute."
          ],
          "sources": [
            "xl",
            "ir"
          ]
        },
        {
          "title": "Release, metabolism and elimination",
          "paragraphs": [
            "IR capsules reach peak concentrations at about 30 minutes; the XL osmotic system gradually supplies drug and produces a plateau at about 6 hours across a 24-hour interval. Nifedipine is highly protein-bound, metabolized extensively by the liver/CYP3A4 and eliminated mainly as inactive urinary metabolites. Elimination half-life is about 2 hours; that does not imply XL must be taken every 2 hours."
          ],
          "sources": [
            "xl",
            "ir"
          ]
        },
        {
          "title": "Food and delivery-system effects",
          "paragraphs": [
            "Food may change the early absorption rate of Procardia XL without meaningfully changing total exposure. Its empty delivery shell may be visible in stool. Different ER brands can have different food/administration instructions; this review does not transfer XL instructions to unreviewed Adalat CC or other systems."
          ],
          "sources": [
            "xl"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Track BP, angina, adverse effects and interacting treatment changes.",
      "takeaway": "The exact release formulation belongs on the medication list.",
      "blocks": [
        {
          "title": "Monitoring",
          "paragraphs": [
            "Check pressure and symptoms closely during initiation/titration, along with pulse, angina frequency, dizziness, edema and signs of heart failure. Review GI obstruction risks before XL; severe pain, vomiting or distension requires assessment. Reassess liver/renal risks when clinically indicated and digoxin/anticoagulant monitoring when applicable."
          ],
          "sources": [
            "xl",
            "ir"
          ]
        },
        {
          "title": "Counseling and urgent care",
          "paragraphs": [
            "Take the prescribed formulation and schedule; do not substitute an IR capsule for an ER tablet. Swallow XL whole and expect a possible empty shell in stool. Avoid grapefruit, use care until dizziness effects are known, and seek urgent care for fainting, worsening chest pain, breathing difficulty or suspected obstruction. Discuss any missed dose with the product instructions/pharmacist; do not invent a catch-up schedule."
          ],
          "sources": [
            "xl",
            "ir"
          ]
        },
        {
          "title": "Surgery and treatment changes",
          "paragraphs": [
            "Tell all clinicians and the anesthetist about nifedipine, beta-blockers and other BP drugs. Avoid abrupt unsupervised changes; monitor during clinician-directed withdrawal. Pregnancy treatment, tocolysis and severe obstetric hypertension need the relevant specialist pathway and maternal/fetal monitoring."
          ],
          "sources": [
            "xl",
            "ng133",
            "ng25"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Identify both the strength and release system before dispensing.",
      "takeaway": "The current Procardia XL package listing is not an inventory of every generic strength.",
      "blocks": [
        {
          "title": "Representative product identity",
          "paragraphs": [
            "Current Pfizer Procardia XL 30 mg is a pink round GITS extended-release tablet marked PROCARDIA XL 30; the 100-tablet package is NDC 0069-2650-66. The selected Major/Avet IR 10 mg capsule is white opaque, oblong and marked HP 194, NDC 0904-7229-61 in a 100-capsule institutional unit-dose pack."
          ],
          "sources": [
            "xl",
            "ir"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "The current reviewed Procardia XL label lists 30 and 60 mg ER tablets. The reviewed IR label supplies 10 mg oral capsules. Other generic strengths, ER delivery systems and non-U.S. formulations require product-specific verification; the clinical dose ranges above do not establish current availability of a particular strength."
          ],
          "sources": [
            "xl",
            "ir"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Procardia XL: store below 30°C and protect from moisture/humidity. Selected IR: store at 20–25°C with 15–30°C permitted excursions, in the original pack protected from light/moisture. The selected institutional unit-dose package is not child-resistant; keep securely away from children. Do not crush or divide XL tablets."
          ],
          "sources": [
            "xl",
            "ir"
          ]
        }
      ]
    }
  ]
};
