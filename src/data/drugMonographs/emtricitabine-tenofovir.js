export const emtricitabineTenofovir = {
  "slug": "emtricitabine-tenofovir",
  "name": "Emtricitabine / tenofovir",
  "synonym": "Truvada · Descovy · FTC / TDF or FTC / TAF",
  "description": "Two distinct oral antiretroviral combinations used with other agents for HIV treatment or, with eligibility checks, for daily HIV pre-exposure prophylaxis. Tenofovir prodrug, renal criteria and exposure route determine the regimen.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Confirm HIV-negative status before PrEP; do not stop casually with hepatitis B.",
    "text": "Both products carry boxed warnings for hepatitis B worsening after discontinuation and resistant HIV with undetected infection during PrEP. TDF and TAF strengths, renal limits and prevention indications differ; these two-drug products alone are not complete HIV treatment.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Two nucleoside / nucleotide reverse-transcriptase inhibitors"
    ],
    [
      "Common brands",
      "Truvada (TDF); Descovy (TAF)"
    ],
    [
      "Reference focus",
      "Current U.S. labels plus CDC PrEP and NIH infant-feeding guidance"
    ]
  ],
  "sources": [
    {
      "id": "label",
      "title": "Truvada · FTC / TDF prescribing information",
      "publisher": "DailyMed / Gilead",
      "note": "Current SPL version 32, effective 2025-07-16. Current July 2025 publication; SPL effective 2025-07-16. Selected full label retains older clinical wording.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54e82b13-a037-49ed-b4b3-030b37c0ecdd"
    },
    {
      "id": "taf",
      "title": "Descovy · FTC / TAF prescribing information",
      "publisher": "DailyMed / Gilead",
      "note": "Current SPL version 13, effective 2026-07-07. Current July 2026 SPL publication; highlights identify pediatric changes in June 2025. Current dose sections include the darunavir / cobicistat exception and adult chronic-hemodialysis PrEP criteria; publication date does not establish when each clinical change was adopted.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=06f66e98-e6ee-4538-9506-6c1282cc14c1"
    },
    {
      "id": "cdc",
      "title": "Clinical Guidance for PrEP",
      "publisher": "CDC HIV Nexus",
      "note": "Updated April 30, 2026; checked October 1, 2026. Guidance and newer label differences are explicit.",
      "url": "https://www.cdc.gov/hivnexus/hcp/prep/index.html"
    },
    {
      "id": "nih",
      "title": "Preventing HIV Transmission During Infant Feeding",
      "publisher": "NIH Perinatal Guidelines",
      "note": "Updated and reviewed June 25, 2026; checked October 1, 2026. Shared decisions and transmission risk distinguished from older Truvada wording.",
      "url": "https://clinicalinfo.hiv.gov/en/guidelines/perinatal/preventing-transmission-infant-feeding"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Treatment and prevention are separate uses with different eligibility.",
      "takeaway": "Descovy PrEP excludes receptive vaginal exposure.",
      "blocks": [
        {
          "title": "HIV treatment",
          "sources": [
            "label",
            "taf"
          ],
          "open": true,
          "paragraphs": [
            "Truvada (FTC / TDF) is used with other antiretrovirals in adults and children weighing at least 17 kg. Descovy (FTC / TAF) is used with other antiretrovirals from 14 kg, with weight-specific strengths and restrictions on accompanying boosted protease inhibitors. Neither fixed-dose pair is a complete treatment regimen by itself."
          ]
        },
        {
          "title": "Daily PrEP and exposure route",
          "sources": [
            "label",
            "taf",
            "cdc"
          ],
          "paragraphs": [
            "Truvada is labeled to reduce sexually acquired HIV in at-risk HIV-negative adults and adolescents at least 35 kg. Descovy has the same minimum weight but excludes people at risk through receptive vaginal sex because effectiveness has not been evaluated for that exposure. CDC additionally recommends daily FTC / TDF for injection-drug-use risk; this guideline use is distinguished from the selected label’s sexual-acquisition indication."
          ]
        },
        {
          "title": "Scope and recent exposure",
          "sources": [
            "label",
            "taf",
            "cdc"
          ],
          "paragraphs": [
            "This profile covers the two oral products, not injectable PrEP, a complete HIV-treatment selection algorithm or event-driven dosing. PrEP does not replace urgent assessment after a potential recent exposure; an individualized post-exposure prophylaxis plan is outside these daily-label regimens. Do not use a two-drug PrEP plan when infection is suspected or confirmed."
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Match the prodrug, weight, purpose and kidney function.",
      "takeaway": "The adult TDF treatment interval is not a PrEP renal workaround.",
      "blocks": [
        {
          "title": "Selected daily oral regimens",
          "sources": [
            "label",
            "taf"
          ],
          "open": true,
          "table": {
            "headers": [
              "Product / purpose / weight",
              "Dose with or without food"
            ],
            "rows": [
              [
                "Truvada treatment, at least 35 kg",
                "FTC 200 mg / TDF 300 mg once daily with other antiretrovirals; adult renal intervals below"
              ],
              [
                "Truvada treatment, 17 to less than 22 kg",
                "FTC 100 mg / TDF 150 mg once daily"
              ],
              [
                "Truvada treatment, 22 to less than 28 kg",
                "FTC 133 mg / TDF 200 mg once daily"
              ],
              [
                "Truvada treatment, 28 to less than 35 kg",
                "FTC 167 mg / TDF 250 mg once daily"
              ],
              [
                "Truvada PrEP, HIV-negative and at least 35 kg",
                "FTC 200 mg / TDF 300 mg once daily; separate PrEP renal eligibility"
              ],
              [
                "Descovy treatment, at least 25 kg",
                "FTC 200 mg / TAF 25 mg once daily with other antiretrovirals; weight / companion-drug rules below"
              ],
              [
                "Descovy treatment, 14 to less than 25 kg",
                "FTC 120 mg / TAF 15 mg once daily with other antiretrovirals"
              ],
              [
                "Descovy PrEP, HIV-negative and at least 35 kg",
                "FTC 200 mg / TAF 25 mg once daily; excludes receptive vaginal risk"
              ]
            ]
          }
        },
        {
          "title": "TDF renal criteria",
          "sources": [
            "label",
            "cdc"
          ],
          "paragraphs": [
            "For adult HIV treatment, Truvada uses every 24 hours at CrCl at least 50 mL / min and every 48 hours at 30–49; below 30 or on hemodialysis it is not recommended. The 48 hour recommendation lacks clinical safety / efficacy evaluation and requires close monitoring; pediatric renal dosing data are unavailable. For PrEP, the label does not recommend CrCl below 60. CDC’s page uses both greater-than-60 and at-least-60 wording; clarify an exact-boundary decision rather than equate it with the adult treatment interval."
          ]
        },
        {
          "title": "TAF renal and companion-drug criteria",
          "sources": [
            "taf"
          ],
          "paragraphs": [
            "Descovy daily dosing applies with estimated CrCl at least 30 mL / min. Current July 2026 treatment and PrEP sections also allow adults with CrCl below 15 on chronic hemodialysis, dosed after dialysis on dialysis days. It is not recommended at 15 to below 30, or below 15 without chronic hemodialysis. Do not transfer the adult dialysis exception to children. Safety / efficacy of boosted protease-inhibitor coadministration in adults with CrCl below 15 is unestablished."
          ]
        },
        {
          "title": "Pediatric combinations and formulation checks",
          "sources": [
            "label",
            "taf"
          ],
          "paragraphs": [
            "For Descovy treatment at 14 to less than 35 kg with estimated CrCl at least 30, current labeling permits darunavir plus cobicistat but excludes other protease inhibitors requiring ritonavir or cobicistat; atazanavir / cobicistat is not recommended in this weight range. Check companion labels. Truvada lower-weight dosing requires ability to swallow a tablet and periodic weight review. Do not split, substitute TAF for TDF milligram-for-milligram or invent a missed-dose loading regimen."
          ]
        },
        {
          "title": "Guidance versus label boundaries",
          "sources": [
            "taf",
            "cdc"
          ],
          "paragraphs": [
            "CDC’s April 2026 PrEP page gives general TAF eligibility of CrCl at least 30 and recommends another prevention option with severe kidney disease; it does not describe the current selected Descovy adult dialysis exception. That exception is presented as current product labeling, with specialist selection and monitoring. On-demand dosing and individualized PEP regimens are excluded from this daily-dose profile."
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Renal toxicity, HBV flares and unrecognized HIV need active prevention.",
      "takeaway": "A negative antibody test alone can miss early HIV infection.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "sources": [
            "label",
            "taf",
            "cdc"
          ],
          "open": true,
          "tone": "warning",
          "paragraphs": [
            "Screen for HBV and establish an HIV-testing plan before PrEP. If acute infection is suspected, promptly obtain appropriate antigen / antibody and RNA assessment and arrange a complete clinical regimen; continuing only the pair can select resistance. PrEP adherence and other prevention measures remain essential.",
            "Stopping in HBV infection can cause severe hepatitis, liver decompensation or failure; plan clinical and laboratory follow-up for at least several months and HBV therapy when appropriate. HBV infection itself is not a PrEP contraindication.",
            "Both products can cause kidney injury, including proximal tubulopathy / Fanconi syndrome; avoid concurrent or recent nephrotoxic drugs and monitor renal measures. Descovy should be discontinued for clinically significant renal decline or Fanconi syndrome. TDF can reduce bone mineral density and cause osteomalacia with tubular injury; evaluate persistent bone / muscle pain or weakness.",
            "Lactic acidosis and severe fatty hepatomegaly can be fatal; suspend treatment for suggestive symptoms or laboratory findings. HIV treatment can provoke immune-reconstitution inflammation or autoimmune disease requiring evaluation. TAF is not a guarantee against renal or bone adverse effects."
          ]
        },
        {
          "title": "Contraindications",
          "sources": [
            "label",
            "taf"
          ],
          "paragraphs": [
            "Both labels formally contraindicate PrEP in people with unknown or positive HIV status. This contraindication applies to prevention; people with HIV may receive the pair as part of a complete treatment regimen. Renal nonrecommendations, Descovy receptive-vaginal exclusion and companion-drug limitations still govern selection even though they are not all in §4."
          ]
        },
        {
          "title": "Boxed warning",
          "sources": [
            "label",
            "taf"
          ],
          "paragraphs": [
            "Both carry two boxed risks: severe acute HBV exacerbation after stopping, and resistant HIV when PrEP is used during undiagnosed early infection. Confirm HIV-negative status immediately before PrEP and test at least every 3 months; evaluate acute symptoms and exposures without waiting for a routine visit."
          ]
        },
        {
          "title": "Adverse reactions",
          "sources": [
            "label",
            "taf"
          ],
          "paragraphs": [
            "TDF regimens report GI symptoms, headache, dizziness, rash and fatigue, with serious renal, bone, hepatic and hypersensitivity reactions. Descovy treatment studies report nausea; PrEP studies report diarrhea, nausea, headache, fatigue and abdominal pain. Lipid changes and bone / renal laboratory findings depend on regimen and population. Do not treat cross-trial percentages as a universal comparison or assume TAF has no renal toxicity."
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Review renal elimination, transporter induction and companion antiretrovirals.",
      "takeaway": "A switch of tenofovir prodrug changes the interaction review.",
      "blocks": [
        {
          "title": "Kidney-toxic or renally cleared drugs",
          "sources": [
            "label",
            "taf"
          ],
          "open": true,
          "paragraphs": [
            "Use particular caution with high-dose or multiple NSAIDs, aminoglycosides and drugs such as acyclovir, valacyclovir, ganciclovir or cidofovir that affect renal function or tubular secretion. Kidney injury or competition can increase drug exposure. Review duplicate FTC, tenofovir and other fixed-dose antiretroviral ingredients before prescribing; no universal interaction dose adjustment is supplied."
          ]
        },
        {
          "title": "TDF companion agents",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "TDF can increase didanosine toxicity, including pancreatitis / neuropathy, and affect atazanavir exposure. Boosted atazanavir, darunavir or lopinavir can raise tenofovir exposure. Some sofosbuvir-containing HCV combinations also increase exposure; ledipasvir / sofosbuvir plus a boosted HIV protease inhibitor requires consideration of alternatives and monitoring. These label interactions require companion-specific review, not a standalone recommendation to start legacy combinations."
          ]
        },
        {
          "title": "TAF transporters and inducers",
          "sources": [
            "taf"
          ],
          "paragraphs": [
            "TAF is a P-gp / BCRP substrate. Descovy is not recommended with rifampin, rifabutin, rifapentine, St. John’s wort or tipranavir / ritonavir; consider alternative anticonvulsants to carbamazepine, oxcarbazepine, phenobarbital or phenytoin. The current pediatric darunavir / cobicistat exception does not authorize other boosted PIs at 14 to less than 35 kg. Check each complete regimen and companion label."
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Prevention exposure route and age / weight rules remain relevant in pregnancy.",
      "takeaway": "Infant-feeding guidance has evolved beyond older Truvada wording.",
      "blocks": [
        {
          "title": "Pregnancy and breastfeeding",
          "sources": [
            "label",
            "taf",
            "nih"
          ],
          "paragraphs": [
            "Label pregnancy registries have not shown an increased overall major-birth-defect risk for the components versus their reference population; this does not prove zero risk. For pregnancy-associated HIV prevention, choose a regimen appropriate to the exposure route; Descovy’s receptive-vaginal limitation remains. FTC and tenofovir-related compounds enter human milk.",
            "The selected Truvada label instructs people receiving HIV treatment not to breastfeed; its PrEP section individualizes benefits and risks and advises against feeding if acute HIV is suspected. Current NIH guidance supports shared decisions with sustained viral suppression while acknowledging residual transmission risk; replacement feeding eliminates that route of transmission. Use a current specialist maternal / infant plan rather than silently treat the older label and guideline as identical."
          ]
        },
        {
          "title": "Children and older adults",
          "sources": [
            "label",
            "taf"
          ],
          "paragraphs": [
            "Truvada treatment starts at 17 kg; Descovy at 14 kg with strength and companion restrictions. PrEP for either starts at 35 kg in adults / adolescents. Adolescents may need more frequent adherence support; lower treatment weights do not imply PrEP approval. TDF studies had insufficient older participants; Descovy selected studies found no overall difference, but renal function and polypharmacy require individualized review."
          ]
        },
        {
          "title": "Renal and hepatic impairment",
          "sources": [
            "label",
            "taf"
          ],
          "paragraphs": [
            "Use the indication-specific renal criteria and adult-only Descovy dialysis exception above. Descovy requires no adjustment for Child-Pugh A or B; Child-Pugh C has not been studied. Truvada component data suggest no clinically meaningful TDF PK change with hepatic impairment; FTC hepatic PK has not been studied. Neither observation removes HBV flare or hepatic-toxicity monitoring, and no universal severe-liver-disease regimen is supplied."
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Intracellular activation inhibits HIV reverse transcription.",
      "takeaway": "TDF and TAF are different prodrugs of tenofovir.",
      "blocks": [
        {
          "title": "Mechanism",
          "sources": [
            "label",
            "taf"
          ],
          "open": true,
          "paragraphs": [
            "FTC is phosphorylated to an active triphosphate; TDF or TAF yields tenofovir, then active tenofovir diphosphate. These metabolites inhibit HIV reverse transcriptase and terminate viral DNA chains. Susceptibility and resistance determine the complete treatment plan; activity against HBV does not make this profile a standalone HBV-treatment protocol."
          ]
        },
        {
          "title": "Pharmacokinetics",
          "sources": [
            "label",
            "taf"
          ],
          "paragraphs": [
            "FTC and tenofovir are substantially renally eliminated by filtration and tubular secretion. TAF undergoes intracellular conversion and extensive metabolism; intact TAF has a short plasma half-life while intracellular active tenofovir diphosphate persists much longer. Plasma and intracellular half-lives cannot be used to invent intermittent dosing. TAF transporter effects, renal disease and companion drugs influence exposure; the labeled products are not milligram-equivalent."
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Link prescriptions to testing, adherence and organ monitoring.",
      "takeaway": "Plan stopping and restarting, especially with HBV infection.",
      "blocks": [
        {
          "title": "Monitoring",
          "sources": [
            "label",
            "taf",
            "cdc"
          ],
          "open": true,
          "paragraphs": [
            "Labels require HBV testing, serum creatinine / estimated CrCl, urine glucose / protein and phosphorus with CKD, before or at initiation and during use. For oral PrEP, CDC calls for HIV antigen / antibody plus RNA assessment at least every 3 months, renal checks at least annually and at least every 6 months with older age or lower baseline clearance; higher-risk patients need more. TAF PrEP adds baseline lipids and annual lipids / weight. Treatment requires its own virologic and clinical follow-up."
          ]
        },
        {
          "title": "Counseling",
          "sources": [
            "label",
            "taf",
            "nih"
          ],
          "paragraphs": [
            "Take the correct product daily and keep testing visits. PrEP does not prevent other STIs; discuss additional prevention, symptoms of acute HIV, new exposures and adherence barriers. Do not stop without discussing HBV and future exposure risk. Report kidney / bone symptoms, severe fatigue, abdominal symptoms or allergy. Use a current infant-feeding plan if HIV-positive; do not guess extra or replacement doses."
          ]
        },
        {
          "title": "Overdose or uncertain exposure",
          "sources": [
            "label",
            "taf",
            "cdc"
          ],
          "paragraphs": [
            "Seek medical / Poison Control assessment for overdose. Labels describe supportive monitoring and removal of components to varying degrees by hemodialysis; dialysis is not a home remedy or a universal dosing replacement rule. A suspected HIV exposure needs urgent prevention / testing assessment rather than extra PrEP tablets."
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Identify both ingredients and the tenofovir prodrug.",
      "takeaway": "Keep the tablets in their labeled original packaging.",
      "blocks": [
        {
          "title": "Representative TDF tablet",
          "sources": [
            "label"
          ],
          "open": true,
          "facts": [
            [
              "Product",
              "Truvada FTC 200 mg / TDF 300 mg"
            ],
            [
              "Route",
              "Oral; prescription"
            ],
            [
              "Appearance",
              "Blue capsule-shaped; GILEAD / 701"
            ],
            [
              "Example package",
              "30 tablets · NDC 61958-0701-1"
            ]
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "sources": [
            "label",
            "taf"
          ],
          "paragraphs": [
            "Truvada tablets contain FTC / TDF 100 / 150, 133 / 200, 167 / 250 or 200 / 300 mg; TDF 300 mg corresponds to 245 mg tenofovir disoproxil, not a TAF conversion. Descovy contains FTC / TAF 120 / 15 or 200 / 25 mg. Selected 200 / 25 tablets are blue rectangular GSI / 225; bottle NDC 61958-2002-1 or 30-tablet blister NDC 61958-2002-2. Formulation, companion drugs and indication must be rechecked before substitution."
          ]
        },
        {
          "title": "Storage and handling",
          "sources": [
            "label",
            "taf"
          ],
          "paragraphs": [
            "Both selected products: store at 25°C, excursions 15–30°C, and dispense only in the original container. Keep bottles tightly closed and child-resistant closures secured. Descovy bottle and blister packaging include desiccant; do not swallow it. Follow seal and packaging instructions; no invented opened-bottle refrigeration or universal short discard interval applies."
          ]
        }
      ]
    }
  ]
};
