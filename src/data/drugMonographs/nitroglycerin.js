// Original clinical summaries checked against the product-specific public sources below.
export const nitroglycerin = {
  "slug": "nitroglycerin",
  "name": "Nitroglycerin",
  "synonym": "Nitrostat · Nitrolingual · Nitro-Dur · Nitrate vasodilator",
  "description": "Route-specific angina, hospital-infusion and anal-fissure instructions with precise interaction and delivery-unit safety.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Avoid incompatible drugs and delayed emergency care.",
    "text": "Do not combine with PDE5 inhibitors or sGC stimulators. Call 911 promptly for possible heart attack; do not delay help while completing a rescue-dose sequence.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Rapid rescue",
      "Sublingual tablet or lingual spray"
    ],
    [
      "Preventive therapy",
      "Patch/skin ointment require nitrate-free planning"
    ],
    [
      "Critical units",
      "IV mcg/min differs from patch mg/hour"
    ]
  ],
  "sources": [
    {
      "id": "sl",
      "title": "Nitrostat · Sublingual tablet full label",
      "publisher": "DailyMed / A-S Medication Solutions",
      "note": "Clinical 02/2023; SPL 3 effective August 5, 2024; published August 6, 2024.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f7059ff7-bf74-48b4-811d-6eb1c26bfd8b"
    },
    {
      "id": "spray",
      "title": "Nitrolingual Pumpspray · Current full label",
      "publisher": "Independence Pharmaceuticals / DailyMed",
      "note": "Revised 05/2024; SPL 1 effective May 13, 2024; published December 3, 2024.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d19b5f51-ca85-48d6-9ccd-8ae26249cdc3"
    },
    {
      "id": "patch",
      "title": "Nitro-Dur · Full transdermal label",
      "publisher": "Ingenus / DailyMed",
      "note": "Revised 07/2022; SPL 6 effective May 30, 2023; published May 31, 2023.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5e15296c-5acd-4bcc-80a8-b49cb1ef3eb0"
    },
    {
      "id": "skin",
      "title": "Nitro-Bid 2% · Full skin-ointment label",
      "publisher": "Fougera / DailyMed",
      "note": "Clinical footerR09/11; SPL 15 effective January 28, 2026; published February 27, 2026. Older clinical text is not represented as a 2026 revision.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e464e9bb-48e8-4b9f-9fff-e220cfbac0c5"
    },
    {
      "id": "iv",
      "title": "Nitroglycerin 5 mg/mL · Full concentrate label",
      "publisher": "Henry Schein / American Regent / DailyMed",
      "note": "Clinical Rev 11/05; SPL 6 effective November 6, 2025; published November 17, 2025.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=578d8159-5ec6-457f-b4a8-9add624d43a8"
    },
    {
      "id": "anal",
      "title": "Nitroglycerin 0.4% · Current intra-anal generic full label",
      "publisher": "Padagis / DailyMed",
      "note": "Clinical 08/2024; SPL 2 effective July 6, 2026; published August 12, 2026.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=562d2e03-dfed-41ff-8e7f-ec4169141983"
    },
    {
      "id": "fda",
      "title": "Rectiv · FDA discontinuation determination",
      "publisher": "FDA / Federal Register",
      "note": "June 26, 2026 notice; commercial discontinuation is not withdrawal for safety/effectiveness.",
      "url": "https://www.govinfo.gov/content/pkg/FR-2026-06-26/pdf/2026-12953.pdf"
    },
    {
      "id": "aha",
      "title": "Heart attack warning signs",
      "publisher": "American Heart Association",
      "note": "Last reviewed December 12, 2024; current public emergency-care guidance.",
      "url": "https://www.heart.org/en/health-topics/heart-attack/warning-signs-of-a-heart-attack"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Nitroglycerin is a nitrate vasodilator with distinct rescue, preventive, hospital and anal-fissure products.",
      "takeaway": "The route and formulation determine both purpose and dose.",
      "blocks": [
        {
          "title": "Angina rescue and prevention",
          "paragraphs": [
            "Sublingual Nitrostat and lingual Nitrolingual spray treat an acute angina attack and can prevent anticipated exertional attacks. Nitro-Dur patches and Nitro-Bid 2% skin ointment prevent angina associated with coronary disease; their onset is too slow for acute rescue. A patch or skin ointment must not replace the prescribed rapid rescue product."
          ],
          "sources": [
            "sl",
            "spray",
            "patch",
            "skin"
          ]
        },
        {
          "title": "Hospital IV and anal-fissure uses",
          "paragraphs": [
            "Selected IV concentrate is labeled for perioperative hypertension, heart failure associated with acute MI, angina inadequately controlled by sublingual nitrate/beta blockers, and intraoperative controlled hypotension. Selected 0.4% intra-anal ointment treats moderate/severe pain from chronic anal fissure. These indications do not transfer to every nitroglycerin product."
          ],
          "sources": [
            "iv",
            "anal"
          ]
        },
        {
          "title": "Prescription and brand status",
          "paragraphs": [
            "Reviewed forms are prescription drugs with product-specific NDA/ANDA records. FDA’s June 2026 notice records Rectiv brand discontinuation, unrelated to safety or effectiveness; it does not establish current brand retail availability. The intra-anal instructions here use the current Padagis generic label rather than assume the discontinued brand is stocked."
          ],
          "sources": [
            "sl",
            "spray",
            "patch",
            "skin",
            "iv",
            "anal",
            "fda"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Use a route-specific regimen and a written chest-pain emergency plan.",
      "takeaway": "Do not delay emergency help for possible heart attack while finishing three doses.",
      "blocks": [
        {
          "title": "Sublingual tablets for angina",
          "paragraphs": [
            "Take one prescribed 0.3, 0.4 or 0.6 mg tablet under the tongue or in the buccal pouch while seated; let dissolve without chewing/swallowing. May repeat one tablet every five minutes, maximum three tablets over 15 minutes. Label calls for prompt medical attention if pain remains after three or differs from usual. Call 911 promptly for heart-attack warning signs, even when uncertain; do not interpret the dose ceiling as permission to delay emergency help. Prophylaxis: one prescribed tablet 5–10 minutes before an anticipated trigger."
          ],
          "sources": [
            "sl",
            "aha"
          ],
          "table": {
            "headers": [
              "Sublingual parameter",
              "Product-specific instruction"
            ],
            "rows": [
              [
                "Per-dose strength",
                "One tablet of prescribed 0.3, 0.4 or 0.6 mg"
              ],
              [
                "Repeat / maximum",
                "Every five minutes if needed; up to three tablets /15 minutes"
              ],
              [
                "Prevent anticipated trigger",
                "One tablet 5–10 minutes before"
              ],
              [
                "Possible heart attack",
                "Call 911 promptly; follow clinician rescue plan"
              ]
            ]
          }
        },
        {
          "title": "Nitrolingual metered lingual spray",
          "paragraphs": [
            "Each metered spray provides 400 mcg (0.4 mg). At attack onset use one or two prescribed sprays onto/under the tongue; may repeat approximately every five minutes, maximum THREE TOTAL SPRAYS within 15 minutes. This is a spray-count ceiling, not three two-spray doses. Sit, hold upright, do not shake or inhale; close the mouth after spraying and do not spit or rinse for 5–10 minutes. Prime with five sprays before first use; after six weeks unused re-prime once, after three months unused use up to five priming sprays. Priming sprays are away from people and are not treatment doses."
          ],
          "sources": [
            "spray",
            "aha"
          ]
        },
        {
          "title": "Nitro-Dur preventive patch",
          "paragraphs": [
            "Suggested starting delivery rate is 0.2–0.4 mg/hour, individualized. Wear for 12–14 hours daily, then allow a 10–12-hour patch-free interval to limit tolerance. Available rates 0.1, 0.2, 0.3, 0.4, 0.6 and 0.8 mg/hour are not the total reservoir mass in the patch. Continuous 24-hour wear generally loses effectiveness; simply raising the dose does not reliably overcome tolerance. Plan the interval and possible rebound symptoms with the clinician."
          ],
          "sources": [
            "patch"
          ]
        },
        {
          "title": "Nitro-Bid 2% measured skin ointment",
          "paragraphs": [
            "A labeled example starts ½ inch (7.5 mg) from the tube on waking and again six hours later; the clinician may double and double again, up to the studied 2-inch (30 mg) application. Include a daily nitrate-free interval; the label cites 10–12 hours from other formulations rather than a proven exact minimum for this ointment. Measure with supplied ruled applicator, place ointment side against skin and tape; do not rub in or treat it as intra-anal ointment. Foilpac 1 g content and its approximate tube-length comparison are not used as an exact interchangeable dose conversion here."
          ],
          "sources": [
            "skin"
          ]
        },
        {
          "title": "Hospital IV concentrate: micrograms per minute",
          "paragraphs": [
            "Selected 5 mg/mL concentrate MUST BE DILUTED in 5% dextrose or 0.9% sodium chloride; do not directly inject or give as a bolus. With nonadsorptive tubing, label starts 5 mcg/min and increases by 5 mcg/min every 3–5 minutes. If no response at 20 mcg/min, increments may increase to 10 then 20 mcg/min; after response use smaller increments/longer intervals. No universal optimum or dose ceiling is specified. Use an infusion pump, continuous hemodynamic monitoring, compatible glass/nonadsorptive equipment and individualized titration. The 400 mcg/mL limit is a final-solution concentration, not a 400 mcg/min dose ceiling."
          ],
          "sources": [
            "iv"
          ],
          "table": {
            "headers": [
              "IV parameter",
              "Selected concentrate instruction"
            ],
            "rows": [
              [
                "Stock strength",
                "5 mg/mL; dilute before infusion"
              ],
              [
                "Nonadsorptive-set start",
                "5 mcg/min"
              ],
              [
                "Initial titration",
                "Increase 5 mcg/min every 3–5 minutes"
              ],
              [
                "Solution concentration limit",
                "400 mcg/mL; not a dose-rate maximum"
              ],
              [
                "Equipment change",
                "Retitrate: PVC adsorption has no reliable universal correction factor"
              ]
            ]
          }
        },
        {
          "title": "0.4% intra-anal ointment for chronic fissure",
          "paragraphs": [
            "Adults: measure one inch using the package’s dosing line, corresponding to 375 mg ointment containing 1.5 mg nitroglycerin, and apply every 12 hours for up to three weeks. Cover the finger, insert no farther than the first finger joint and distribute around the anal canal; if pain prevents insertion, apply directly outside the anus as instructed. Wash hands afterward. Do not substitute 2% skin ointment; this product is not oral, ophthalmic or vaginal therapy."
          ],
          "sources": [
            "anal"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Severe hypotension, nitrate interactions and formulation errors can be dangerous.",
      "takeaway": "PDE5 inhibitors and soluble guanylate-cyclase stimulators are incompatible with nitrate therapy.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Nitroglycerin can cause severe hypotension, fainting, falls, paradoxical bradycardia or worsening angina, especially with volume depletion, existing hypotension or sensitive cardiac conditions. Hypertrophic obstructive cardiomyopathy can worsen. Excess or sustained exposure causes tolerance; preventive therapy can reduce rapid-rescue benefit. Headaches are common but do not justify independently changing the schedule.",
            "IV concentrate requires dilution, a pump and close hemodynamic observation. PVC tubing/filter adsorption changes delivered drug unpredictably; retitrate when equipment changes. High IV fluid volume matters in heart, liver or kidney dysfunction. Rare methemoglobinemia can cause impaired oxygen delivery. Residual drug in used patches can harm children/pets, and defibrillator paddles should not be placed over a patch because burns can occur."
          ],
          "sources": [
            "sl",
            "spray",
            "patch",
            "skin",
            "iv",
            "anal"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "Current rapid-action labels contraindicate PDE5 inhibitors such as sildenafil, tadalafil, vardenafil or avanafil, and sGC stimulators such as riociguat; also severe anemia, increased intracranial pressure, nitrate/component hypersensitivity and acute circulatory failure/shock. Intra-anal labeling includes PDE5, severe anemia, increased intracranial pressure and hypersensitivity. Patch labeling adds adhesive allergy. Selected IV labeling specifically contraindicates tamponade, restrictive cardiomyopathy and constrictive pericarditis, where venous return is critical. Older skin/IV labels have shorter formal lists; their omission does not establish nitrate/PDE5 or sGC compatibility."
          ],
          "sources": [
            "sl",
            "spray",
            "anal",
            "patch",
            "skin",
            "iv"
          ]
        },
        {
          "title": "Boxed-warning status",
          "paragraphs": [
            "The selected full labels do not have a formal boxed warning. The IV concentrate’s capitalized dilution warning and potentially fatal interaction/hypotension risks remain critical. No blanket conclusion is inferred for unreviewed products from this selected-label status."
          ],
          "sources": [
            "sl",
            "spray",
            "patch",
            "skin",
            "iv",
            "anal"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Headache, dizziness, flushing and hypotension/syncope are characteristic effects. Patch sites can develop irritation/contact dermatitis; anal-fissure therapy frequently causes headache. Serious events include severe hypotension and rare methemoglobinemia or hypersensitivity. Postmarketing reports and old trial comparisons do not establish one event frequency for all routes/doses."
          ],
          "sources": [
            "sl",
            "spray",
            "patch",
            "skin",
            "iv",
            "anal"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Ask specifically about ED/PAH drugs, BP medicines, alcohol and hospital anticoagulants.",
      "takeaway": "Tell emergency teams about recent PDE5 or sGC treatment before receiving a nitrate.",
      "blocks": [
        {
          "title": "PDE5 and sGC drugs",
          "paragraphs": [
            "Do not combine nitroglycerin with PDE5 inhibitors used for ED or pulmonary hypertension, or sGC stimulators. Life-threatening hypotension can occur. Current rapid-action labels say use within a few days of one another is not recommended and do not validate a universal safe interval for every drug/dose/patient. Tell the clinician the exact agent, dose and time; do not improvise a washout or take a nitrate after an arbitrary waiting period."
          ],
          "sources": [
            "sl",
            "spray",
            "patch",
            "anal",
            "skin",
            "iv"
          ]
        },
        {
          "title": "Additive hypotension and ergot derivatives",
          "paragraphs": [
            "Alcohol and other vasodilators/BP-lowering agents can increase hypotension. Beta blockers do not prevent nitrate-associated BP decline. Ergot derivatives can worsen angina and their exposure may increase; avoid or use specialist monitoring when an alternative is unavailable. Review headache remedies and other medicines rather than assuming all combinations are benign."
          ],
          "sources": [
            "spray",
            "sl",
            "patch",
            "skin",
            "iv",
            "anal"
          ]
        },
        {
          "title": "Hospital interaction and compatibility issues",
          "paragraphs": [
            "IV nitroglycerin can interfere with heparin anticoagulation; monitor aPTT frequently and reassess heparin when the infusion changes/stops. IV nitroglycerin has reduced tPA levels/thrombolytic effect in reported studies. High-dose aspirin can increase nitrate exposure; this is not a direction to withhold emergency aspirin independently. Do not mix selected IV nitrate solution with other medicines or run through a blood infusion set because pseudoagglutination/hemolysis can occur. Propylene glycol can falsely raise some triglyceride assay results."
          ],
          "sources": [
            "iv",
            "anal",
            "sl",
            "spray"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Route, BP tolerance, organ disease and reproductive status require individual assessment.",
      "takeaway": "No universal pediatric or renal-adjustment schedule is supplied.",
      "blocks": [
        {
          "title": "Children and older adults",
          "paragraphs": [
            "Safety/effectiveness in children are not established in the selected rapid, patch, IV and intra-anal labels; intra-anal efficacy is not established below 18 years. Older adults may be more sensitive to hypotension/falls and often have organ disease or polypharmacy; choose cautious individualized therapy and observe clinical response rather than use an invented age-only maximum."
          ],
          "sources": [
            "sl",
            "spray",
            "patch",
            "iv",
            "anal"
          ]
        },
        {
          "title": "Renal and hepatic considerations",
          "paragraphs": [
            "The reviewed labels do not provide a universal CrCl/eGFR or hepatic dose table. Assess BP, perfusion, volume tolerance and coexisting disease; IV fluid load may dominate in compromised heart/liver/kidney function. Rapid metabolism includes hepatic and extrahepatic pathways, which does not establish unchanged exposure/safety in every organ-disease population."
          ],
          "sources": [
            "sl",
            "spray",
            "iv",
            "patch"
          ]
        },
        {
          "title": "Pregnancy",
          "paragraphs": [
            "Human pregnancy data are insufficient to establish absence of drug-associated risk. Use for a clinically justified indication after individualized maternal/fetal assessment. Old skin/patch/IV pregnancy letter categories are not presented as current risk certainty; reassuring animal studies do not prove human safety. Intra-anal labeling also lacks adequate human exposure data."
          ],
          "sources": [
            "sl",
            "spray",
            "patch",
            "skin",
            "iv",
            "anal"
          ]
        },
        {
          "title": "Breastfeeding: product instructions differ",
          "paragraphs": [
            "Sublingual exposure in milk and effects on milk production are unknown; Nitrostat’s selected Patient Information instructs patients not to breastfeed, while its PI describes limited information. Discuss the dispensed product’s instructions and alternatives with the clinician. Nitrolingual PI uses individualized maternal/infant benefit-risk language. Intra-anal labeling reports no infant adverse events in limited topical-use observations but lacks measured milk exposure/dose certainty; this does not establish blanket safety across oral, patch or IV routes."
          ],
          "sources": [
            "sl",
            "spray",
            "anal",
            "patch",
            "skin",
            "iv"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Nitroglycerin increases NO/cGMP signaling and reduces cardiac preload.",
      "takeaway": "Rapid drug clearance does not make formulations clinically interchangeable.",
      "blocks": [
        {
          "title": "Mechanism and hemodynamics",
          "paragraphs": [
            "Nitroglycerin generates nitric-oxide signaling, activates guanylate cyclase and increases cGMP, relaxing vascular smooth muscle. Venodilation predominates, reducing venous return/preload; arterial dilation can lower afterload. These effects can improve oxygen supply-demand balance but excessive BP reduction can compromise perfusion. Intra-anal therapy relaxes sphincter smooth muscle for its separate fissure-pain indication."
          ],
          "sources": [
            "sl",
            "anal"
          ]
        },
        {
          "title": "Rapid formulation kinetics",
          "paragraphs": [
            "Sublingual tablet clinical vasodilation begins about 1–3 minutes, peaks around five minutes and persists at least 25 minutes in label studies; plasma peaks around 6–7 minutes with variable bioavailability. Parent nitroglycerin has an approximately 2–3-minute plasma half-life; hepatic/extrahepatic metabolism produces longer-lived partly active dinitrates and then less active metabolites. Nitrolingual has its own measured spray PK; do not convert those study exposures into an interchangeable route dose."
          ],
          "sources": [
            "sl",
            "spray"
          ]
        },
        {
          "title": "Sustained delivery and anal evidence limits",
          "paragraphs": [
            "Patch and skin ointment sustain delivery but continuous nitrate exposure produces tolerance, supporting planned nitrate-free intervals. IV delivery is strongly affected by infusion equipment adsorption. Anal-ointment PK includes a small study of 0.2% ointment at 0.75 mg; this does not establish exact exposure from the currently labeled 0.4%/1.5 mg application or justify a route conversion."
          ],
          "sources": [
            "patch",
            "skin",
            "iv",
            "anal"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Verify the route, emergency plan, interaction history and delivered dose.",
      "takeaway": "New or changed chest symptoms require prompt evaluation.",
      "blocks": [
        {
          "title": "Monitoring",
          "paragraphs": [
            "Assess indication, BP/orthostatic symptoms, volume status, cardiac conditions, PDE5/sGC exposure and other hypotensive drugs. Track angina pattern, rescue use, headache, falls and skin reactions; worsening symptoms or increasing rescue need requires reassessment. IV treatment requires continuous BP/HR and individualized hemodynamic monitoring, delivered-dose/equipment checks and relevant anticoagulation/laboratory review. No mandatory outpatient lab interval is invented."
          ],
          "sources": [
            "sl",
            "spray",
            "patch",
            "iv",
            "anal"
          ]
        },
        {
          "title": "Rescue counseling and emergencies",
          "paragraphs": [
            "Keep the prescribed rescue product accessible and check its potency/storage and spray priming. Sit for doses and rise cautiously. Call 911 promptly for possible heart attack, including uncertain warning signs; do not drive yourself or delay help to complete a dosing sequence. Share the exact recent ED/PAH drug history with responders. The rescue dose maximum remains important but is not a test that excludes MI."
          ],
          "sources": [
            "sl",
            "spray",
            "aha"
          ]
        },
        {
          "title": "Preventive and topical handling",
          "paragraphs": [
            "Follow the daily patch-off interval and clinician plan for rebound symptoms; apply to clean dry appropriate skin, rotate sites and keep used patches away from children/pets. Use ruled skin-ointment applicators and the intra-anal product’s own dosing line/protected-finger instructions; wash hands and avoid accidentally treating another person. Severe dizziness/fainting, allergic symptoms or suspected overdose needs urgent assessment."
          ],
          "sources": [
            "patch",
            "skin",
            "anal",
            "sl"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Verify strength, route and delivery units on the actual package.",
      "takeaway": "The 2% skin ointment and 0.4% anal ointment are different drugs for handling purposes.",
      "blocks": [
        {
          "title": "Representative product identity",
          "paragraphs": [
            "Selected repackaged Nitrostat 0.4 mg is a white round flat tablet marked N and 4, NDC 50090-7203-0, 25 tablets. Nitrolingual 0.4 mg/spray uses a red-coated glass pump bottle; selected 60-spray pack is NDC 21724-100-50. Selected Padagis intra-anal 0.4% is yellowish opaque ointment in a 30 g tube, NDC 45802-932-94. These identifiers do not describe every generic/repackaged product or authenticate an unknown loose tablet."
          ],
          "sources": [
            "sl",
            "spray",
            "anal"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Tablets: 0.3/0.4/0.6 mg sublingual/buccal. Spray: 400 mcg per metered spray. Selected patches deliver 0.1–0.8 mg/hour in labeled discrete strengths; their 20–160 mg reservoirs are not hourly doses. Skin ointment: 2%, with tube-length dosing. Selected IV concentrate: 5 mg/mL for dilution, 50 mg/10 mL single-dose vial. Intra-anal ointment: 0.4% (4 mg/g); one-inch dose contains 1.5 mg nitrate. No oral-swallowed extended-release or unreviewed premix IV regimen is inferred."
          ],
          "sources": [
            "sl",
            "spray",
            "patch",
            "skin",
            "iv",
            "anal"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Nitrostat: keep in original tightly capped glass container at 20–25°C to preserve potency. Nitrolingual: 20–25°C, permitted 15–30°C excursions; do not burn/force open or spray toward flame. Nitro-Dur: 25°C, permitted 15–30°C; do not refrigerate. Nitro-Bid tube: 20–25°C, close tightly immediately. Selected IV vial: 20–25°C with 15–30°C excursions, protect from light in carton until use, discard unused single-dose contents. Intra-anal generic: 20–25°C with 15–30°C excursions, tightly closed, discard eight weeks after opening; this storage limit does not extend the three-week treatment course."
          ],
          "sources": [
            "sl",
            "spray",
            "patch",
            "skin",
            "iv",
            "anal"
          ]
        }
      ]
    }
  ]
};
