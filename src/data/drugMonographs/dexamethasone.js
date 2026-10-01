// Original clinical summaries checked against the product-specific public sources below.
export const dexamethasone = {
  "slug": "dexamethasone",
  "name": "Dexamethasone",
  "synonym": "Generic systemic preparations · Hemady",
  "description": "Potent prescription systemic glucocorticoid for selected inflammatory and specialist conditions, with disease-specific doses, adrenal/infection precautions and formulation-dependent strength bases.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Plan exposure and withdrawal",
    "text": "Use the prescribed disease-specific dose and taper. Sustained exposure can suppress adrenal function and mask serious infection; verify oral concentration and injection phosphate-equivalent strength before administration.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Class",
      "Potent systemic glucocorticoid"
    ],
    [
      "Oral concentrate",
      "Intensol 1 mg/mL; dilute solution 0.1 mg/mL"
    ],
    [
      "Hemady",
      "20 mg tablet; regimen-specific adult myeloma days"
    ]
  ],
  "sources": [
    {
      "id": "oral",
      "title": "Dexamethasone tablets · Current full label",
      "publisher": "Apotex / DailyMed",
      "note": "PI March 2024; current SPL 6 effective September 17, 2025; published September 19, 2025.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bfaa71cb-e517-8d94-f64b-8cdbf7b8fbf2"
    },
    {
      "id": "injection",
      "title": "Dexamethasone sodium phosphate · Current full label",
      "publisher": "Hikma / DailyMed",
      "note": "PI December 2024; current SPL 21 effective January 22, 2026; published January 23, 2026. Strengths explicitly phosphate-equivalent.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0277cc0a-2fd4-4605-a310-b613be84ee26"
    },
    {
      "id": "hemady",
      "title": "Hemady · Current full label",
      "publisher": "Azurity / DailyMed",
      "note": "PI January 2026; SPL 4 effective January 9, 2026; published January 26, 2026. Adult anti-myeloma combination treatment.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6b9cf32c-6d60-4853-bbfd-2304ffc2c129"
    },
    {
      "id": "liquid",
      "title": "Dexamethasone oral solution / Intensol · Current label",
      "publisher": "Hikma / DailyMed",
      "note": "PI February 2024; current SPL 11 effective June 6, 2025; published November 17, 2025. Full description, dose/administration and storage sections read for selected liquid assertions.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b15200fb-1826-472b-a907-e677a272513b"
    },
    {
      "id": "tbi",
      "title": "Severe traumatic brain injury · Current primary guideline recommendations",
      "publisher": "Brain Trauma Foundation",
      "note": "Fourth edition public recommendation index, Steroids §7 reviewed October 1, 2026; original guideline 2016/2017. No paywalled review access claimed.",
      "url": "https://braintrauma.org/coma/guidelines/severe-tbi"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Dexamethasone is a potent systemic glucocorticoid with disease- and product-specific uses.",
      "takeaway": "Label approval does not mean a legacy regimen is preferred in current practice.",
      "blocks": [
        {
          "title": "General systemic indications",
          "paragraphs": [
            "Reviewed general oral/injection labels cover selected severe inflammatory, allergic, rheumatic, endocrine, hematologic, gastrointestinal, respiratory, renal and neoplastic conditions. Examples include refractory severe allergy, inflammatory-disease exacerbations, selected tumor-related cerebral edema and palliation of leukemias/lymphomas. Infection-related indications require appropriate antimicrobial treatment. Hydrocortisone/cortisone are preferred labeled adrenal-replacement choices; dexamethasone has little mineralocorticoid activity and is not a universal replacement regimen."
          ],
          "sources": [
            "oral",
            "injection"
          ]
        },
        {
          "title": "Hemady and route boundaries",
          "paragraphs": [
            "Hemady is labeled with other anti-myeloma products for adults with multiple myeloma; its 20 mg tablet and pulse schedule are not routine general pediatric steroid dosing. Selected Hikma injection is IV/IM; only its 4 mg/mL strength also carries local joint/lesion/soft-tissue use. Epidural corticosteroid use is not approved and has serious neurologic risks. Specialist ocular products, combinations and implants require separate product labels; no ocular dosing is transferred from systemic preparations."
          ],
          "sources": [
            "hemady",
            "injection"
          ]
        },
        {
          "title": "Traumatic-brain-injury limitation",
          "paragraphs": [
            "Some legacy general oral labeling still mentions head injury in cerebral-edema indications. Current Brain Trauma Foundation recommendations advise against steroids to improve outcomes or reduce intracranial pressure in severe traumatic brain injury; high-dose methylprednisolone increased mortality. Do not apply tumor-edema steroid regimens to traumatic brain injury on the basis of that older wording. Acute neurologic treatment requires the condition-specific team."
          ],
          "sources": [
            "oral",
            "tbi"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Dose, frequency, duration and taper depend on the specific disease and product.",
      "takeaway": "Oral dexamethasone milligrams and this injection’s phosphate-equivalent label basis must be checked explicitly.",
      "blocks": [
        {
          "title": "General oral starting ranges",
          "paragraphs": [
            "The selected general oral label describes an initial adult range 0.75–9 mg/day, individualized to the condition and response; it is not a universal maximum. Its pediatric initial range is 0.02–0.3 mg/kg/day in three or four divided doses. These broad ranges do not define a croup, cancer, meningitis or critical-care protocol. Use the lowest effective regimen and a prescribed taper when indicated; no one fixed taper fits every course."
          ],
          "sources": [
            "oral",
            "hemady"
          ],
          "table": {
            "headers": [
              "Product/purpose",
              "Label dose boundary"
            ],
            "rows": [
              [
                "General oral disease-directed treatment",
                "Initial 0.75–9 mg/day, individualized; not a universal ceiling"
              ],
              [
                "General oral pediatric range",
                "0.02–0.3 mg/kg/day divided 3–4 times daily, disease-specific"
              ],
              [
                "Hemady adult myeloma combination",
                "20 or 40 mg orally once daily on the regimen’s specified days; not automatically every day"
              ]
            ]
          }
        },
        {
          "title": "Hemady treatment-day schedule",
          "paragraphs": [
            "Take with or without food on the exact dates in the oncology regimen. The partner anti-myeloma prescribing information determines specific dosing, dose holds and geriatric reductions; 20/40 mg must not become an unsupervised daily maintenance instruction. Older patients require dose reduction according to that combination plan. Do not double a missed treatment-day dose without the oncology team’s direction."
          ],
          "sources": [
            "hemady"
          ]
        },
        {
          "title": "Oral liquids and concentration checks",
          "paragraphs": [
            "Hikma dilute solution contains 0.5 mg/5 mL (0.1 mg/mL); Intensol concentrate contains 1 mg/mL, ten times as concentrated. Intensol contains alcohol 30% v/v and propylene glycol; review pediatric and other excipient-sensitive use. Measure only with the supplied calibrated oral syringe, mix the prescribed concentrate with a permitted liquid/soft food, consume the entire mixture immediately and do not store it. Never use an oral liquid for injection."
          ],
          "sources": [
            "liquid"
          ]
        },
        {
          "title": "Parenteral and local treatment",
          "paragraphs": [
            "The selected injection labels 4 or 10 mg/mL as dexamethasone-phosphate equivalent: respectively 3.33 or 8.33 mg/mL dexamethasone. Its broad initial IV/IM range is 0.5–9 mg/day on that product’s labeled basis, not an automatic oral-to-IV ratio. Only the 4 mg/mL strength includes local joint/lesion/soft-tissue routes, using clinician-selected site-specific doses. Do not inject into infected/unstable joints; IM is contraindicated for idiopathic thrombocytopenic purpura. Urgent cerebral-edema and other high-dose protocols require specialist indication, strength/basis and monitoring verification; legacy shock boluses are not a universal recommendation."
          ],
          "sources": [
            "injection"
          ]
        },
        {
          "title": "Diagnostic testing and organ adjustments",
          "paragraphs": [
            "The oral label includes a supervised overnight suppression test: 1 mg at 11 p.m. with cortisol drawn at 8 a.m.; interacting medicines can alter interpretation. This is a diagnostic protocol, not an anti-inflammatory maintenance dose. No validated renal/dialysis or Child-Pugh percentage-adjustment table is supplied. Cirrhosis and thyroid changes can alter steroid response; adjust clinically and never calculate a dose solely from one general half-life."
          ],
          "sources": [
            "oral",
            "hemady"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Adrenal suppression, infection, metabolic and psychiatric risks increase with exposure.",
      "takeaway": "Abrupt withdrawal after sustained treatment can cause a life-threatening adrenal crisis.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Assess HPA suppression, withdrawal/stress-dose needs, hyperglycemia, Cushing effects, hypertension/fluid retention, potassium loss, bone loss, myopathy, psychiatric changes and GI bleeding/perforation. Perforation or infection signs can be masked. Eye risks include cataract/glaucoma and infection; active ocular herpes requires particular avoidance. Serious behavioral changes or suicidal symptoms need prompt assessment.",
            "Immunosuppression can reactivate HBV/TB, disseminate Strongyloides and worsen other infections. Screen HBV before immunosuppressive/prolonged treatment and assess other exposure risks; chickenpox/measles exposure needs immediate advice. Avoid live vaccines at immunosuppressive doses. Myeloma combinations add major thromboembolism risk, requiring individualized prophylaxis assessment. Injection sulfite/benzyl-alcohol excipients and unapproved epidural use add product-specific hazards."
          ],
          "sources": [
            "oral",
            "injection",
            "hemady"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "General oral tablets and Hemady contraindicate systemic fungal infection and component hypersensitivity; selected injection formally lists systemic fungal infections and has serious sulfite/allergy warnings. Live vaccines are contraindicated during immunosuppressive systemic dosing. Acute local infection precludes relevant local injection. These restrictions are distinct from cautions such as diabetes or osteoporosis; exceptional specialist management is not a self-treatment workaround."
          ],
          "sources": [
            "oral",
            "injection",
            "hemady"
          ]
        },
        {
          "title": "Boxed-warning status",
          "paragraphs": [
            "The selected systemic dexamethasone labels have no formal boxed warning. Serious adrenal, infection, psychiatric, ocular, metabolic and GI hazards still apply; partner myeloma medicines may carry their own boxes and mandatory safeguards. The injection’s epidural warning remains important despite the absence of a dexamethasone box."
          ],
          "sources": [
            "oral",
            "injection",
            "hemady"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Possible effects include insomnia, appetite/weight gain, dyspepsia, mood changes, hyperglycemia, edema and acne. Longer or higher exposure can cause adrenal suppression, infection, osteoporosis/fractures/osteonecrosis, cataract/glaucoma, muscle weakness and thin skin. Serious reactions include anaphylaxis, GI bleeding/perforation, psychosis, arrhythmia and thromboembolism. Class/postmarketing reports do not provide a universal incidence for every short course."
          ],
          "sources": [
            "oral",
            "injection",
            "hemady"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "CYP3A exposure, glucose, potassium, bleeding and vaccine effects require review.",
      "takeaway": "Cancer-regimen interaction management is not interchangeable with a generic short-course algorithm.",
      "blocks": [
        {
          "title": "CYP and exposure changes",
          "paragraphs": [
            "CYP3A inhibitors such as ritonavir, clarithromycin or azoles can increase steroid exposure; carbamazepine, rifampin and other inducers can lower it. Hemady advises avoiding strong inhibitors/inducers when possible, with monitoring or regimen-specific management if unavoidable. Dexamethasone can itself induce CYP3A and lower other substrate concentrations. Aprepitant-containing oncology regimens require their own prescribed dexamethasone adjustment; no single percentage correction is supplied here."
          ],
          "sources": [
            "oral",
            "hemady"
          ]
        },
        {
          "title": "Metabolic, anticoagulant and GI interactions",
          "paragraphs": [
            "Glucose-lowering therapy may need adjustment; diuretics/amphotericin can add hypokalemia, increasing digoxin-associated arrhythmia risk. Warfarin response can change in either direction: monitor coagulation rather than assume no effect. NSAIDs/aspirin add GI risk. Phenytoin exposure can change unpredictably; cyclosporine can add toxicity/seizure risk. Review full treatment and laboratory results before changing either drug."
          ],
          "sources": [
            "oral",
            "hemady"
          ]
        },
        {
          "title": "Vaccines, neuromuscular disease and myeloma combinations",
          "paragraphs": [
            "Avoid live vaccines during immunosuppressive treatment; inactivated responses may be blunted. Anticholinesterase/neuromuscular-blocker combinations can worsen weakness in susceptible patients. Hemady with immunomodulatory anti-myeloma agents increases clot risk; assess prophylaxis and every partner’s safety/reproductive requirements. Do not stop essential neuromuscular drugs or add anticoagulation independently."
          ],
          "sources": [
            "oral",
            "hemady"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Systemic indication, age, organ function and reproductive context guide treatment.",
      "takeaway": "Hemady’s reproductive instructions apply to its oncology use, not every dexamethasone course.",
      "blocks": [
        {
          "title": "Children and older adults",
          "paragraphs": [
            "General systemic corticosteroid labels support disease-specific pediatric use and require growth, BP, weight, eye, infection and psychosocial assessment. Hemady pediatric safety/effectiveness is not established. Review excipients in concentrate or preserved injection before neonatal/young-child use. Older adults face greater diabetes, fluid, BP and fracture risks; general selection is cautious, and Hemady requires partner-regimen geriatric dose reduction."
          ],
          "sources": [
            "oral",
            "injection",
            "liquid",
            "hemady"
          ]
        },
        {
          "title": "Renal and hepatic disease",
          "paragraphs": [
            "Hemady baseline renal/hepatic PK effects are unstudied and no numeric adjustment table is established. Less than 10% of systemic clearance is renal in its PK description, which does not prove absence of renal clinical risk. Fluid/BP/potassium effects warrant caution with kidney/heart disease; cirrhosis can enhance steroid effects. Use clinical response, toxicity and indication-specific protocols."
          ],
          "sources": [
            "oral",
            "hemady"
          ]
        },
        {
          "title": "Pregnancy and reproductive potential",
          "paragraphs": [
            "Systemic corticosteroids cross the placenta and require maternal-benefit/fetal-risk assessment; substantial maternal exposure can suppress neonatal adrenal function. Hemady specifically recommends pregnancy testing and effective contraception during treatment and at least one month afterward; partner oncology agents may impose stricter safeguards. This profile does not supply an antenatal fetal-maturation course or equate chronic cancer treatment with a short obstetric regimen."
          ],
          "sources": [
            "oral",
            "injection",
            "hemady"
          ]
        },
        {
          "title": "Breastfeeding",
          "paragraphs": [
            "Systemic corticosteroids may enter milk and affect infant growth/adrenal function; general oral labeling advises individualized nursing-versus-treatment decisions. Hemady specifically advises no breastfeeding during treatment and for two weeks after the last dose. Do not extend that oncology instruction automatically to every short systemic course or declare infant exposure absent; consider dose, duration, maternal need and infant circumstances."
          ],
          "sources": [
            "oral",
            "hemady"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Potent glucocorticoid effects outlast the measured plasma half-life.",
      "takeaway": "Anti-inflammatory equivalence does not establish interchangeable route, schedule or indication.",
      "blocks": [
        {
          "title": "Mechanism and mineralocorticoid activity",
          "paragraphs": [
            "Dexamethasone alters inflammatory/immune and metabolic signaling with low mineralocorticoid activity. In myeloma it promotes apoptosis, but its complete treatment mechanism is not defined. Low sodium-retaining activity does not eliminate hypertension/fluid/electrolyte risks at high exposure or provide adequate mineralocorticoid replacement by itself."
          ],
          "sources": [
            "oral",
            "injection",
            "hemady"
          ]
        },
        {
          "title": "Disposition and equivalence limits",
          "paragraphs": [
            "Hemady 20 mg has median oral peak time about one hour, protein binding about 77% and mean terminal plasma half-life about four hours; CYP3A4 is important for metabolism and renal unchanged excretion is low. Cortisol suppression can persist much longer, so plasma half-life is not a safe abrupt-stop rule. General labels compare oral/IV anti-inflammatory potency (dexamethasone 0.75 mg versus prednisone 5 mg or hydrocortisone 20 mg), but local/IM properties and product strength bases require separate assessment."
          ],
          "sources": [
            "hemady",
            "oral",
            "injection"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Use an indication-specific written schedule, taper and monitoring plan.",
      "takeaway": "Report steroid exposure during illness, surgery and medication changes.",
      "blocks": [
        {
          "title": "Monitoring",
          "paragraphs": [
            "Assess treatment response, dose/duration, BP/weight/fluid status, glucose, potassium risks, infection, mood, GI symptoms and adrenal recovery. Long-term therapy requires bone/fracture prevention assessment and eye monitoring; selected labels recommend IOP monitoring if continued beyond six weeks. Track pediatric growth and myeloma-combination clot risk. HBV screening is labeled before immunosuppressive/prolonged therapy. Monitoring frequency and stress-dose decisions are individualized, not a universal fixed panel."
          ],
          "sources": [
            "oral",
            "hemady"
          ]
        },
        {
          "title": "Counseling and urgent care",
          "paragraphs": [
            "Keep exact dose/dates and any taper visible; do not independently stop sustained treatment or double missed doses. Tell healthcare teams about steroid use and obtain a sick-day/surgery plan when adrenal suppression is possible. Contact the clinician promptly after measles/chickenpox exposure. Urgent assessment is needed for serious infection, severe weakness/fainting after withdrawal, GI bleeding, acute visual changes, severe psychiatric symptoms or serious allergy. Measure oral liquids precisely and do not use another route’s preparation."
          ],
          "sources": [
            "oral",
            "liquid",
            "hemady"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Strength, salt-equivalent basis, excipients and route are essential identification checks.",
      "takeaway": "A concentrate, injection or oncology tablet cannot substitute solely by matching printed numbers.",
      "blocks": [
        {
          "title": "Representative product identity",
          "paragraphs": [
            "Selected Apotex 4 mg tablet is grey, round and scored, marked APO/4; bottle-of-100 NDC 60505-6254-1. Hemady 20 mg is white, round and biconvex, embossed 20; bottle-of-24 NDC 82111-955-01. Selected Hikma 4 mg/mL 1 mL injection is supplied in packages of 25 vials, NDC 0641-6145-25. Verify the dispensed product and labeled strength basis, not appearance alone."
          ],
          "sources": [
            "oral",
            "hemady",
            "injection"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Selected general oral tablets: 0.5, 0.75, 1, 1.5, 2, 4 and 6 mg; Hemady: 20 mg tablet. Selected oral liquids: 0.5 mg/5 mL and Intensol 1 mg/mL. Selected Hikma injection: 4 or 10 mg/mL dexamethasone-phosphate equivalent, with benzyl alcohol and sulfite; it is not preservative-free. Its 10 mg/mL form is IV/IM only. Verify any different manufacturer’s salt basis, excipients and route separately."
          ],
          "sources": [
            "oral",
            "hemady",
            "liquid",
            "injection"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Selected tablets/Hemady: 20–25°C with allowed 15–30°C excursions, tight light-resistant child-resistant containers; protect Apotex tablets from moisture. Hikma oral liquids: 20–25°C; Intensol stays in its original bottle with supplied syringe, do not freeze or use precipitated solution, and discard 90 days after opening. Selected injection: 20–25°C, permitted 15–30°C excursions, protected from light in carton; avoid freezing, haze/precipitate and autoclaving. Sterile handling/beyond-use limits follow the actual vial and pharmacy protocol."
          ],
          "sources": [
            "oral",
            "hemady",
            "liquid",
            "injection"
          ]
        }
      ]
    }
  ]
};
