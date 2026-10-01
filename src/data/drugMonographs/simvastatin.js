// Original clinical summaries checked against the product-specific public sources below.
export const simvastatin = {
  "slug": "simvastatin",
  "name": "Simvastatin",
  "synonym": "Simvastatin · Zocor",
  "description": "An oral statin for LDL reduction and cardiovascular risk reduction in defined populations. This tablet-focused reference emphasizes the 80 mg restriction, exact interaction dose caps, muscle safety and current pregnancy guidance.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Check interactions before every dose change.",
    "text": "Do not initiate or titrate to simvastatin 80 mg. Strong CYP3A4 inhibitors and several other drugs are contraindicated; common cardiac medicines impose 10 or 20 mg daily caps. Unexplained muscle pain or weakness requires prompt assessment.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "HMG-CoA reductase inhibitor · Statin"
    ],
    [
      "Common brand",
      "Zocor"
    ],
    [
      "Reference focus",
      "U.S. oral tablet labels"
    ]
  ],
  "sources": [
    {
      "id": "label",
      "title": "Zocor · Prescribing information",
      "publisher": "Organon",
      "note": "Current manufacturer label revised August 2023; brand strengths and storage. DailyMed SPL11 updated March 28, 2025.",
      "url": "https://www.organon.com/product/usa/pi_circulars/z/zocor/zocor_pi.pdf"
    },
    {
      "id": "generic",
      "title": "Simvastatin tablets · Current generic labeling",
      "publisher": "DailyMed / Accord source label, Bryant Ranch Prepack",
      "note": "PI revised April 2026; SPL105 effective April 3, 2026. Tablet dose restrictions and current safety wording.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c03ab80c-a3ae-4634-a76b-f53740db76f5"
    },
    {
      "id": "pregnancy",
      "title": "Statins · Pregnancy contraindication removal",
      "publisher": "U.S. Food and Drug Administration",
      "note": "July 20, 2021 safety communication: most pregnant patients should stop, with individualized exceptions for very high risk.",
      "url": "https://www.fda.gov/drugs/drug-safety-and-availability/fda-requests-removal-strongest-warning-against-using-cholesterol-lowering-statins-during-pregnancy"
    },
    {
      "id": "guidance",
      "title": "2026 dyslipidemia guideline · Key recommendations",
      "publisher": "American Heart Association / ACC multisociety guideline",
      "note": "Public primary society summary, March 13, 2026. Risk assessment and individualized lipid goals.",
      "url": "https://professional.heart.org/en/science-news/2026-guideline-on-the-management-of-dyslipidemia/top-things-to-know"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Treat lipids and cardiovascular risk in the labeled populations.",
      "takeaway": "Choose treatment intensity and goals from the patient’s risk, not dose escalation alone.",
      "blocks": [
        {
          "title": "Approved adult uses",
          "paragraphs": [
            "Simvastatin reduces mortality and coronary/cerebrovascular events and revascularization risk in defined high-risk adults with coronary, cerebrovascular or peripheral vascular disease and/or diabetes. It is used with diet for primary hyperlipidemia, HeFH, primary dysbetalipoproteinemia and hypertriglyceridemia; adult HoFH use is adjunctive to other LDL-lowering therapies."
          ],
          "sources": [
            "label",
            "generic"
          ]
        },
        {
          "title": "Pediatric use and treatment goals",
          "paragraphs": [
            "The pediatric approval is for LDL reduction with diet in HeFH from age 10 years. Other pediatric lipid disorders and younger ages are not established uses. Current AHA/ACC guidance combines risk assessment, LDL/non-HDL goals and percentage reduction; if high-intensity therapy is required or goals remain unmet at 40 mg, the label directs an alternative LDL-lowering treatment."
          ],
          "sources": [
            "label",
            "generic",
            "guidance"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Once-daily evening dosing with strict upper limits.",
      "takeaway": "Use an alternative treatment when 40 mg cannot meet the required LDL reduction.",
      "blocks": [
        {
          "title": "Routine tablet dosing",
          "paragraphs": [
            "Take orally once daily in the evening. Adults: the recommended range is 20–40 mg daily. HeFH from age 10: 10–40 mg daily. Reassess LDL-C as early as 4 weeks after initiation and adjust according to response, tolerance and interaction limits. A missed dose may be taken as soon as possible; do not double the next dose."
          ],
          "sources": [
            "label",
            "generic"
          ]
        },
        {
          "title": "The 80 mg restriction",
          "paragraphs": [
            "The usual recommended maximum is 40 mg daily. An 80 mg regimen is reserved for patients already taking 80 mg chronically, such as for at least 12 months, without muscle toxicity; do not start or titrate a patient to 80 mg. If an interacting drug is needed in someone on 80 mg, select another statin. Zocor no longer markets its 80 mg strength."
          ],
          "sources": [
            "label",
            "generic"
          ]
        },
        {
          "title": "Renal dosing",
          "paragraphs": [
            "For severe renal impairment with creatinine clearance 15–29 mL/min, start at 5 mg once daily. Zocor’s 5 mg strength is no longer marketed, so select an appropriate alternative simvastatin tablet product. Mild/moderate renal impairment has no recommended dose adjustment, but all renal impairment increases muscle-toxicity risk. The cited dosing section does not establish a routine regimen for CrCl below 15."
          ],
          "sources": [
            "label",
            "generic"
          ]
        },
        {
          "title": "Interaction-specific limits",
          "paragraphs": [
            "Apply the exact co-medication cap even when the usual adult dose would be higher. Lomitapide’s legacy 40 mg exception is restricted to patients previously tolerating chronic 80 mg; it is not a new-start regimen."
          ],
          "sources": [
            "label",
            "generic"
          ],
          "table": {
            "headers": [
              "Concomitant medicine",
              "Simvastatin action"
            ],
            "rows": [
              [
                "Verapamil, diltiazem or dronedarone",
                "Maximum 10 mg once daily"
              ],
              [
                "Amiodarone, amlodipine or ranolazine",
                "Maximum 20 mg once daily"
              ],
              [
                "Lomitapide",
                "Reduce by 50%; maximum 20 mg daily, or restricted legacy 40 mg exception"
              ],
              [
                "Strong CYP3A4 inhibitor; cyclosporine; danazol; gemfibrozil",
                "Combination contraindicated"
              ]
            ]
          }
        },
        {
          "title": "Formulation boundaries",
          "paragraphs": [
            "The reviewed regimens refer to oral tablets. Marketed Zocor strengths are 10, 20 and 40 mg; generic labels also describe 5 and 80 mg tablets. Strength availability does not override dose restrictions. Liquid or combination products require their own label and administration/storage instructions."
          ],
          "sources": [
            "label",
            "generic"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Myopathy risk rises with dose, exposure and patient risk factors.",
      "takeaway": "Investigate muscle symptoms, liver symptoms and serious acute illness.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Myopathy and rhabdomyolysis can cause kidney injury or death. Risk increases with higher doses, age ≥65, uncontrolled hypothyroidism, renal impairment and interacting medicines. Stop for suspected myopathy or markedly elevated CK. Serious illness with high rhabdomyolysis-related renal risk, such as sepsis, shock or major trauma, may require temporary cessation.",
            "Persistent proximal weakness and elevated CK despite stopping can indicate immune-mediated necrotizing myopathy; stop and obtain specialist assessment. Consider baseline liver enzymes and repeat when clinically indicated; promptly stop for serious symptomatic liver injury, jaundice or hyperbilirubinemia. HbA1c/glucose can rise; maintain lifestyle and metabolic follow-up."
          ],
          "sources": [
            "label",
            "generic"
          ],
          "open": true,
          "tone": "warning",
          "badge": "Clinical alert"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "Strong CYP3A4 inhibitor coadministration, cyclosporine, danazol or gemfibrozil, acute liver failure/decompensated cirrhosis, and hypersensitivity to simvastatin or ingredients are contraindications. Pregnancy is no longer an absolute U.S. statin contraindication; the separate pregnancy risk assessment remains essential."
          ],
          "sources": [
            "label",
            "generic",
            "pregnancy"
          ]
        },
        {
          "title": "Boxed warning · Label status",
          "paragraphs": [
            "The reviewed simvastatin tablet labels do not carry an FDA boxed warning. This does not diminish the important muscle, interaction and hepatic precautions, including the restriction on 80 mg dosing."
          ],
          "sources": [
            "label",
            "generic"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Common reported trial events include headache, abdominal discomfort, constipation and nausea; upper respiratory infection was also commonly recorded. Serious postmarketing events include hepatic failure, immune-mediated myopathy and severe hypersensitivity. New or worsening myasthenia gravis and generally reversible cognitive symptoms have also been reported; spontaneous reports do not establish frequency or causation."
          ],
          "sources": [
            "label",
            "generic"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "CYP3A4 and transporter inhibition can markedly increase exposure.",
      "takeaway": "Reconcile all medicines and avoid grapefruit juice.",
      "blocks": [
        {
          "title": "Contraindicated combinations",
          "paragraphs": [
            "Strong CYP3A4 inhibitors include selected azoles (itraconazole, ketoconazole, posaconazole, voriconazole), macrolides (erythromycin, clarithromycin), boosted protease-inhibitor/cobicistat products and nefazodone. Suspend simvastatin for an unavoidable short course of a strong inhibitor. Cyclosporine, danazol and gemfibrozil are also contraindicated. Confirm the exact antiviral regimen rather than assuming every antiviral has the same interaction."
          ],
          "sources": [
            "label",
            "generic"
          ]
        },
        {
          "title": "Additional muscle-risk combinations",
          "paragraphs": [
            "Observe the cardiac-drug and lomitapide caps above. Review temporary suspension during daptomycin treatment. Other fibrates, colchicine and lipid-modifying niacin doses (≥1 g/day) need benefit/risk review and muscle surveillance. Simvastatin with lipid-modifying niacin is not recommended in Chinese patients. Avoid grapefruit juice."
          ],
          "sources": [
            "label",
            "generic"
          ]
        },
        {
          "title": "Warfarin and digoxin",
          "paragraphs": [
            "Obtain INR before initiating simvastatin with a coumarin anticoagulant, then check sufficiently often after starting, dose changes or discontinuation until stable. Simvastatin can increase digoxin concentrations; monitor levels when simvastatin is initiated."
          ],
          "sources": [
            "label",
            "generic"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Pregnancy advice has changed, while breastfeeding remains discouraged.",
      "takeaway": "Consider the patient’s overall risk and relevant organ function.",
      "blocks": [
        {
          "title": "Pregnancy",
          "paragraphs": [
            "Discontinue when pregnancy is recognized in most patients. FDA removed the blanket statin pregnancy contraindication in 2021 to permit individualized decisions for very high-risk patients, including HoFH or established cardiovascular disease. Available observational data do not show a clear increase in major malformations after adjustment, but miscarriage risk is uncertain and fetal harm remains possible. Discuss any exceptional continuation with specialists."
          ],
          "sources": [
            "label",
            "generic",
            "pregnancy"
          ]
        },
        {
          "title": "Breastfeeding",
          "paragraphs": [
            "Breastfeeding is not recommended while taking simvastatin because of potential effects on infant cholesterol metabolism and limited infant safety evidence. Discuss temporarily withholding lipid treatment or an alternative feeding plan when continued therapy is necessary."
          ],
          "sources": [
            "label",
            "generic",
            "pregnancy"
          ]
        },
        {
          "title": "Children and older adults",
          "paragraphs": [
            "HeFH approval starts at age 10; trial girls were at least one year post-menarche. Do not impose an unverified approval for other pediatric lipid disorders or doses above 40 mg. Older adults have greater myopathy risk; choose doses cautiously and assess concomitant disease, renal function and medicines."
          ],
          "sources": [
            "label",
            "generic"
          ]
        },
        {
          "title": "Kidney, liver and Chinese-patient considerations",
          "paragraphs": [
            "Monitor renal impairment for muscle toxicity and use the severe-renal starting-dose rule. Acute liver failure or decompensated cirrhosis is contraindicated; substantial alcohol use or liver history warrants assessment. The label reports greater myopathy risk in Chinese patients, particularly with niacin combinations; monitor and avoid the stated combination."
          ],
          "sources": [
            "label",
            "generic"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "A hepatic prodrug reduces cholesterol synthesis and increases LDL clearance.",
      "takeaway": "Lipid response is assessed over weeks, not the timing of a plasma peak.",
      "blocks": [
        {
          "title": "Mechanism and response",
          "paragraphs": [
            "Simvastatin is hydrolyzed to simvastatin acid, which inhibits HMG-CoA reductase. Increased hepatic LDL-receptor expression promotes LDL uptake and lowers circulating LDL-C. Maximal LDL reduction is usually reached by about 4 weeks."
          ],
          "sources": [
            "label",
            "generic"
          ]
        },
        {
          "title": "Disposition",
          "paragraphs": [
            "Extensive hepatic first-pass extraction leaves low systemic availability (below 5%). Simvastatin and its active acid are about 95% protein bound. CYP3A4 metabolism and OATP1B1 transport help explain exposure interactions. Active/total inhibitor peaks occur around 1.3–2.4 hours; labeled radiolabel recovery is mainly fecal, with a smaller urinary component."
          ],
          "sources": [
            "label",
            "generic"
          ],
          "facts": [
            [
              "Protein binding",
              "About 95%"
            ],
            [
              "Metabolism / transport",
              "CYP3A4 / OATP1B1"
            ]
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Follow LDL response, tolerability and the evolving medicine list.",
      "takeaway": "Every new interacting prescription should trigger a dose and safety review.",
      "blocks": [
        {
          "title": "Monitoring",
          "paragraphs": [
            "Assess baseline lipid status, cardiovascular risk, relevant organ function, muscle history, hypothyroidism and interacting medicines. Consider liver enzymes before therapy and thereafter for clinical indications. Follow LDL response from about 4 weeks onward. Investigate symptoms with CK and related testing as clinically appropriate; avoid turning the label into a universal schedule for asymptomatic CK testing."
          ],
          "sources": [
            "label",
            "generic"
          ]
        },
        {
          "title": "Current prevention guidance",
          "paragraphs": [
            "The 2026 AHA/ACC guideline replaces the 2018 cholesterol guideline and uses PREVENT-ASCVD for relevant primary-prevention risk assessment, with individualized lipid goals and additional risk information. This monograph does not reproduce the full eligibility algorithm; select treatment intensity and alternatives with the applicable guideline and patient-specific risk."
          ],
          "sources": [
            "guidance"
          ]
        },
        {
          "title": "Counseling and overdose",
          "paragraphs": [
            "Take in the evening, avoid grapefruit juice and check before starting any new drug or supplement. Report unexplained muscle pain/weakness, especially with fever or malaise, and jaundice or dark urine. Notify the clinician about pregnancy plans or a recognized pregnancy. Suspected overdose requires poison-center advice; no specific simvastatin antidote is known."
          ],
          "sources": [
            "label",
            "generic"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Product strengths and storage differ between manufacturers.",
      "takeaway": "Confirm the actual package rather than extrapolating from the brand example.",
      "blocks": [
        {
          "title": "Representative product",
          "paragraphs": [
            "Zocor 20 mg is a tan, oval tablet marked MSD 740 on one side, plain on the other. Example bottle of 30: NDC 78206-181-01. It is manufactured for Organon; generic tablet appearance and NDC differ."
          ],
          "sources": [
            "label"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Zocor currently markets 10, 20 and 40 mg tablets; its 5 and 80 mg strengths are no longer marketed. The reviewed generic label describes 5, 10, 20, 40 and 80 mg tablet strengths. The presence of an 80 mg strength is not permission to initiate it. This page does not supply liquid or combination-product instructions."
          ],
          "sources": [
            "label",
            "generic"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "For the reviewed Zocor product, store between 5°C and 30°C. Generic tablet storage instructions can differ; follow the dispensed label and keep away from children. Do not apply this tablet storage range to a separately formulated oral suspension."
          ],
          "sources": [
            "label"
          ]
        }
      ]
    }
  ]
};
