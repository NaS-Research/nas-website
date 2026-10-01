// Original clinical summaries checked against the product-specific public sources below.
export const nirmatrelvir_ritonavir = {
  "slug": "nirmatrelvir-ritonavir",
  "name": "Nirmatrelvir and ritonavir",
  "synonym": "Paxlovid · Oral COVID-19 antiviral co-pack",
  "description": "A current U.S. reference distinguishing adult approval, pediatric EUA, renal dose packs and drug-specific interaction management.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Review every medicine before treatment.",
    "text": "Ritonavir can cause severe or fatal interactions. Confirm symptom timing, kidney function and the correct dose pack, with a documented plan for interacting medicines and monitoring.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Course",
      "Start within 5 days; treat for 5 days"
    ],
    [
      "Population",
      "Adult approval; pediatric EUA ≥ 12 years AND ≥ 40 kg"
    ],
    [
      "Renal dosing",
      "Dose and frequency change below eGFR 60"
    ]
  ],
  "sources": [
    {
      "id": "pi",
      "title": "Paxlovid · Current full U.S. prescribing information",
      "publisher": "Pfizer",
      "note": "Revised 02/2026; public full manufacturer HTML retained; SPL version 12 effective February 19, 2026.",
      "url": "https://labeling.pfizer.com/ShowLabeling.aspx?id=19599"
    },
    {
      "id": "eua",
      "title": "Paxlovid · Current pediatric EUA healthcare-provider fact sheet",
      "publisher": "U.S. Food and Drug Administration",
      "note": "Revised 02/2026; current full FDA43-page PDF and manufacturer 44-page mirror retained; authorization, renal doses, pediatric boundaries, safety and required reporting reviewed.",
      "url": "https://www.fda.gov/media/155050/download?attachment="
    },
    {
      "id": "cdc",
      "title": "COVID-19 outpatient clinical care",
      "publisher": "CDC",
      "note": "Updated February 5, 2026; risk assessment and rebound guidance reviewed. Renal contraindication shorthand is outdated relative to current PI and is not propagated.",
      "url": "https://www.cdc.gov/covid/hcp/clinical-care/outpatient-treatment.html"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "A short oral antiviral course for eligible high-risk patients with mild/moderate COVID-19.",
      "takeaway": "Adult FDA approval and pediatric EUA are distinct.",
      "blocks": [
        {
          "title": "Adult approved use",
          "paragraphs": [
            "Paxlovid is approved for mild-to-moderate COVID-19 in adults at high risk of progression to severe disease, including hospitalization or death. Start promptly after diagnosis and within 5 days of symptom onset. It is not approved as pre-exposure or post-exposure prophylaxis. Prior trial benefits are population-specific; no universal risk-reduction percentage is promised to every vaccinated or low-risk patient."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Pediatric authorization and selection",
          "paragraphs": [
            "The current EUA covers high-risk patients age 12 and older weighing at least 40 kg with mild/moderate COVID-19. This is authorized use, not an established pediatric FDA-approved indication; under 12 or below 40 kg is not authorized. Assess severity, risk, organ function and feasibility of managing interactions. No regimen is supplied to initiate solely for established severe hospitalized disease; if hospitalization follows an already-started course, completion is at the treating clinician’s discretion."
          ],
          "sources": [
            "eua",
            "pi",
            "cdc"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Take both ingredients together; kidney function changes both dose and frequency.",
      "takeaway": "Severe renal dosing is once daily, not the standard twice-daily schedule.",
      "blocks": [
        {
          "title": "Standard and renal-adjusted five-day regimens",
          "paragraphs": [
            "Use the appropriate renal pack and prescribe the numeric amount of BOTH ingredients. The table gives the current U.S. PI regimens, also reflected in the current EUA for eligible patients; mild impairment eGFR 60 to < 90 needs no adjustment. Nirmatrelvir tablets are 150 mg each and ritonavir tablets 100 mg each. Do not reduce ritonavir by copying the nirmatrelvir reduction. On hemodialysis days, give the severe-renal dose after dialysis."
          ],
          "sources": [
            "pi",
            "eua"
          ],
          "table": {
            "headers": [
              "Kidney function / treatment day",
              "Take together orally"
            ],
            "rows": [
              [
                "eGFR ≥ 60 mL/min · Days 1–5",
                "Nirmatrelvir 300 mg (2 tablets) + ritonavir 100 mg (1 tablet), TWICE daily"
              ],
              [
                "eGFR ≥ 30 to < 60 · Days 1–5",
                "Nirmatrelvir 150 mg (1 tablet) + ritonavir 100 mg (1 tablet), TWICE daily"
              ],
              [
                "eGFR < 30, including dialysis · Day 1",
                "Nirmatrelvir 300 mg (2 tablets) + ritonavir 100 mg (1 tablet), ONCE"
              ],
              [
                "eGFR < 30, including dialysis · Days 2–5",
                "Nirmatrelvir 150 mg (1 tablet) + ritonavir 100 mg (1 tablet), ONCE daily"
              ]
            ]
          }
        },
        {
          "title": "Administration and missed dose",
          "paragraphs": [
            "Start within 5 days of symptoms and complete the prescribed 5-day course. Take with or without food at approximately the same scheduled times; swallow whole without chewing, breaking or crushing. If a dose is missed within 8 hours of its usual time, take it and resume the schedule; if more than 8 hours late, skip and take the next scheduled dose. Never double. Dose-pack colors do not replace written renal instructions."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Hepatic impairment and other boundaries",
          "paragraphs": [
            "No adjustment is needed for Child-Pugh A or B hepatic impairment; severe Child-Pugh C is not recommended because PK/safety data are unavailable. Reassess renal function when unstable rather than assume an old result still selects the correct pack. No universal repeat, extended course, crushed-tablet, IV or under-authorized-age regimen is supplied."
          ],
          "sources": [
            "pi"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Interaction toxicity, hypersensitivity and ritonavir-associated hepatic risks require review.",
      "takeaway": "A short course can still cause serious or fatal interaction harm.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Before prescribing, reconcile all prescription/OTC medicines and herbs, determine which need adjustment/interruption/monitoring, and decide whether these risks can be managed. Serious/fatal interaction events have especially involved calcineurin inhibitors and calcium-channel blockers. Stop immediately and seek care for suspected significant allergy, blistering/peeling skin or anaphylaxis. Ritonavir can cause hepatitis, jaundice or transaminase elevation, particularly concerning with existing liver disease. Undiagnosed/uncontrolled HIV can develop protease-inhibitor resistance."
          ],
          "sources": [
            "pi"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "Contraindicated with clinically significant nirmatrelvir/ritonavir/component hypersensitivity; with certain CYP3A-dependent drugs whose increased exposure is dangerous; and with strong CYP3A inducers that reduce antiviral exposure. Examples include amiodarone and specified antiarrhythmics, ranolazine, eplerenone/finerenone, oral midazolam/triazolam, lovastatin/simvastatin, voclosporin, suzetrigine and sildenafil for PAH. Colchicine is contraindicated with renal/hepatic impairment. Strong inducers include carbamazepine, phenytoin, phenobarbital/primidone, rifampin/rifapentine, apalutamide/enzalutamide, lumacaftor/ivacaftor and St. John’s wort. This is not an exhaustive interaction clearance list; consult the complete current table and companion labels."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Boxed-warning status",
          "paragraphs": [
            "The boxed warning concerns significant drug interactions from ritonavir’s strong CYP3A inhibition, potentially causing severe, life-threatening or fatal toxicity. Medication review, defined management steps and a benefit-risk assessment are required before treatment; five-day duration does not remove the warning."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Altered taste and diarrhea are the common trial reactions. Headache, abdominal pain, nausea/vomiting, hypertension and malaise have been reported during authorized use; serious allergy/skin reactions and drug-interaction toxicity need prompt assessment. Spontaneous reports cannot define precise event frequencies or establish causality for every report."
          ],
          "sources": [
            "pi"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Management depends on the specific drug, indication, renal function and monitoring access.",
      "takeaway": "A complete hold/restart plan is essential; do not use a blanket interaction rule.",
      "blocks": [
        {
          "title": "Contraindicated combinations and persistent induction",
          "paragraphs": [
            "Review all §4 contraindicated drugs, including newer additions such as suzetrigine. Strong CYP3A induction persists after stopping an inducer, so Paxlovid cannot simply begin immediately after withholding carbamazepine, rifampin or another listed strong inducer. Do not tell patients to stop seizure, transplant or cardiac therapy independently to make treatment possible; an alternative antiviral or specialist plan may be needed."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Statin holds and contraceptive precaution",
          "paragraphs": [
            "For medically necessary Paxlovid, hold lovastatin/simvastatin at least 12 hours before starting, throughout the 5 days, and for 5 days after completion. Consider holding atorvastatin during the course; the label says it need not be withheld before or after treatment. Ethinyl estradiol exposure may fall: consider additional nonhormonal contraception during treatment and until one menstrual cycle after stopping. These are drug-specific instructions, not a universal statin restart rule."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Anticoagulants, transplant drugs and cardiovascular agents",
          "paragraphs": [
            "Avoid rivaroxaban. Apixaban management depends on its prescribed dose; dabigatran depends on indication/renal function; follow the companion label. Monitor INR closely with warfarin. Tacrolimus/cyclosporine require expert dose management and close concentration monitoring during/after treatment; avoid co-use if such monitoring is infeasible. Avoid everolimus/sirolimus. Amlodipine and related calcium blockers may need reduction and BP/edema monitoring. Do not infer that all anticoagulants or transplant medicines share one hold schedule."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Opioids, sedatives, inhalers and PDE5 indications",
          "paragraphs": [
            "Fentanyl, hydrocodone, oxycodone and meperidine can cause enhanced, potentially fatal respiratory depression; consider prescribed reduction and close monitoring. Oral midazolam/triazolam are contraindicated; parenteral midazolam is a separately managed monitored-setting interaction. Avoid salmeterol. Sildenafil for PAH is contraindicated; tadalafil for PAH should be avoided, whereas ED PDE5 use needs the product-specific dose adjustment. Do not extrapolate PAH restrictions into a made-up universal ED dose."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Other interacting medicines and ongoing therapy",
          "paragraphs": [
            "Review additional label-table categories such as anticancer drugs, antiarrhythmics, anticonvulsants, psychotropics, migraine drugs, corticosteroids and antimicrobials; no short list establishes safety. Ritonavir/cobicistat-containing HIV therapy and ritonavir-containing HCV therapy generally continue as indicated with adverse-effect monitoring. Individual adjustment/restart decisions should be documented by the prescriber/pharmacist."
          ],
          "sources": [
            "pi"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Pediatric authorization, pregnancy/lactation and organ function require distinct decisions.",
      "takeaway": "Dose eligibility is not established below 12 years or 40 kg.",
      "blocks": [
        {
          "title": "Pediatrics and older adults",
          "paragraphs": [
            "Current pediatric EUA requires BOTH age ≥ 12 and weight ≥ 40 kg; safety/effectiveness and optimal pediatric dosing are not established as an approved indication, and exposure support is extrapolated from adult data. Older adults need assessment of risk, kidney function and polypharmacy; the adult PI does not mandate an age-only reduction. The current EUA renal schedule is explicit rather than inferred from an older adult-only source."
          ],
          "sources": [
            "pi",
            "eua"
          ]
        },
        {
          "title": "Renal and hepatic disease",
          "paragraphs": [
            "Renal impairment increases nirmatrelvir exposure: use the current eGFR-specific dosing/frequency table, including the severe-renal/dialysis regimen. Give after dialysis on treatment dialysis days. Child-Pugh A/B require no adjustment;C is not recommended. Existing hepatitis or liver-enzyme abnormalities require caution despite the absence of a routine A/B reduction."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Pregnancy",
          "paragraphs": [
            "Nirmatrelvir pregnancy data remain insufficient to assess drug-associated fetal risk. Ritonavir observational data have not identified increased major-birth-defect risk, but do not establish absence of all pregnancy harms. Untreated maternal COVID-19 also carries maternal/fetal risk; individualize promptly with the clinical team rather than invent a pregnancy contraindication or guaranteed safety claim."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Breastfeeding and contraception",
          "paragraphs": [
            "The current label reports low milk amounts of both ingredients, with estimated weight-adjusted infant doses about 1.8% for nirmatrelvir and 0.2% for ritonavir in a small study. Infant-outcome and milk-production data are unavailable; weigh maternal need and feeding benefits/risks. Combined hormonal contraception may be less effective; retain the additional nonhormonal precaution through one menstrual cycle after stopping."
          ],
          "sources": [
            "pi"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Nirmatrelvir inhibits the viral protease; ritonavir boosts exposure.",
      "takeaway": "Both tablets must be taken together for the prescribed dose.",
      "blocks": [
        {
          "title": "Mechanism and boosting",
          "paragraphs": [
            "Nirmatrelvir blocks SARS-CoV-2 main protease, preventing viral polyprotein processing needed for replication. Ritonavir is not active against that viral protease; it inhibits CYP3A metabolism and increases nirmatrelvir exposure. Giving nirmatrelvir alone can produce insufficient exposure. Protease target and boosting role differ from an HIV-treatment indication for this short-course co-pack."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Disposition",
          "paragraphs": [
            "In label healthy-subject studies, nirmatrelvir given with ritonavir peaks around 3 hours and ritonavir around 4 hours; mean half-lives are approximately 6 hours. Nirmatrelvir is about 69% protein-bound and predominantly renally eliminated when boosted; ritonavir is 98–99% bound and mainly hepatically metabolized. These study averages do not replace renal-dose or interaction assessment."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Resistance, PK and clinical limits",
          "paragraphs": [
            "Renal dysfunction increases nirmatrelvir exposure; the current severe-renal regimen was evaluated in a small dedicated adult study. CYP3A substrates/transporters explain many interactions, while inducers reduce antiviral exposure. Current in-vitro variant activity and resistance data do not guarantee response to every future variant or justify unsupervised extra courses."
          ],
          "sources": [
            "pi"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Confirm onset date, risk eligibility, renal dose and interaction plan before dispensing.",
      "takeaway": "Write down both ingredient doses, frequency and companion-drug restart instructions.",
      "blocks": [
        {
          "title": "Monitoring and prescribing review",
          "paragraphs": [
            "Establish diagnosis/symptom-onset timing, severe-disease risk, age/weight where applicable, current renal/hepatic information, allergy and full medication/herbal list. Define dose pack, interacting-drug holds/reductions, monitoring and restarts. Monitor clinical worsening, hydration and medication toxicity; use drug-specific levels/INR/BP/respiratory assessment when indicated. No universal new lab panel substitutes for an adequate organ/interaction assessment.",
            "Under pediatric EUA, the prescriber/designee must report potentially related serious adverse events and medication errors to FDA within 7 calendar days of awareness, with a copy to Pfizer. Pharmacist prescribing requires sufficient organ-function and medication information; refer for clinician evaluation if medication modification or unavailable monitoring is needed."
          ],
          "sources": [
            "pi",
            "eua"
          ]
        },
        {
          "title": "Patient counseling",
          "paragraphs": [
            "Take all tablets for the prescribed dose together for 5 days; renal regimens differ. Swallow whole with or without food, follow the 8-hour missed-dose rule and do not double. Keep written instructions for paused medicines and do not restart them early without the defined plan. Report new medications during the course. Obtain urgent care for allergy, breathing difficulty, severe illness or suspected overdose."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Rebound and follow-up",
          "paragraphs": [
            "Recurrent symptoms or a new positive test after improvement can occur with or without antivirals. Follow current isolation/transmission precautions and contact the clinical team if symptoms worsen or recur; do not self-prescribe a second course. Benefit in eligible high-risk patients is not negated solely by rebound. The CDC page’s older severe-kidney contraindication shorthand is superseded here by current PI/EUA renal dosing."
          ],
          "sources": [
            "cdc",
            "pi",
            "eua"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "A co-pack contains two different immediate-release tablet medicines.",
      "takeaway": "Choose standard, moderate-renal or severe-renal pack; they contain different total tablet counts.",
      "blocks": [
        {
          "title": "Representative product identity",
          "paragraphs": [
            "Nirmatrelvir 150 mg is a pink oval film-coated tablet marked PFE/3CL. One standard carton NDC 0069-5045-30 contains 30 tablets: 20 nirmatrelvir plus 10 ritonavir; that pack’s ritonavir is white/off-white capsule-shaped marked H/R9. Other current packs use white ovaloid ritonavir marked NK. Confirm the actual carton, tablets and renal directions rather than appearance alone."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Each nirmatrelvir tablet is 150 mg and each ritonavir tablet 100 mg. Standard five-day pack contains 30 total tablets; moderate-renal pack 20; severe-renal pack 11 (6 nirmatrelvir plus 5 ritonavir), with a larger Day 1 dose followed by smaller Days 2–5 doses. These are co-packaged tablets, not a single combined-strength tablet or a liquid/IV formulation."
          ],
          "sources": [
            "pi"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Store 20–25°C with 15–30°C excursions. Keep tablets in their child-resistant blister until ready to take the dose, and keep away from children. Follow the correct pack’s daily instructions; do not casually transfer tablets into a generic twice-daily pill box that obscures severe-renal Day 1 versus Days 2–5 dosing."
          ],
          "sources": [
            "pi"
          ]
        }
      ]
    }
  ]
};
