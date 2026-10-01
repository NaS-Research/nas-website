// Original clinical summaries checked against the product-specific public sources below.
export const olopatadine = {
  "slug": "olopatadine",
  "name": "Olopatadine",
  "synonym": "Pataday ophthalmic · selected nasal spray",
  "description": "Allergy reference separating OTC eye-drop strengths from prescription nasal dosing, age limits, sedation/mucosal risks and device handling.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Verify the route and strength",
    "text": "Eye pain or vision changes need assessment. Nasal spray can cause sleepiness and mucosal injury; do not spray it into eyes or add doses beyond the product schedule.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Eye drops",
      "0.1% twice daily; 0.2/0.7% once daily"
    ],
    [
      "OTC eye age",
      "From 2 years; younger consult doctor"
    ],
    [
      "Nasal age",
      "From 6 years; prescription spray"
    ]
  ],
  "sources": [
    {
      "id": "eye-low",
      "title": "Pataday 0.1% · Full current Drug Facts",
      "publisher": "Alcon / DailyMed",
      "note": "SPL 6 effective January 20, 2026; published January 23, 2026; twice-daily eye drops.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b7a24375-25df-4405-aa7c-34c46af51194"
    },
    {
      "id": "eye-daily",
      "title": "Pataday 0.2% · Full current Drug Facts",
      "publisher": "Alcon / DailyMed",
      "note": "SPL 7 effective January 20, 2026; published January 23, 2026; once-daily eye drops.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1c7d2342-ba1c-4244-9814-d92a05725d4e"
    },
    {
      "id": "eye-extra",
      "title": "Pataday 0.7% · Full current Drug Facts",
      "publisher": "Alcon / DailyMed",
      "note": "SPL 5 effective January 20, 2026; published January 23, 2026; once-daily eye drops.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6d07a5d6-265c-4735-97b3-8a2575b276cb"
    },
    {
      "id": "nasal",
      "title": "Olopatadine nasal spray · Full current prescription label",
      "publisher": "Apotex / DailyMed",
      "note": "PI/Patient/IFU November 2025; current SPL 13 effective September 15, 2026; published September 23, 2026.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3aa27224-7b72-38eb-0c21-b8d73525ee85"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Eye allergy and nasal allergy use different formulations.",
      "takeaway": "Do not spray nasal solution into the eye.",
      "blocks": [
        {
          "title": "Eye-drop uses and status",
          "paragraphs": [
            "Selected OTC Pataday products temporarily relieve allergen-related eye itch; 0.1% also labels redness relief. NDA OTC status is product-specific. These products do not treat contact-lens irritation or establish treatment for infection/glaucoma."
          ],
          "sources": [
            "eye-low",
            "eye-daily",
            "eye-extra"
          ]
        },
        {
          "title": "Nasal use and scope",
          "paragraphs": [
            "Prescription single-ingredient nasal spray treats seasonal allergic-rhinitis symptoms from age six. Perennial-rhinitis trial participation does not establish that indication. Olopatadine–mometasone combinations require separate review."
          ],
          "sources": [
            "nasal"
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Strength and route determine frequency.",
      "takeaway": "Once-daily drops are not twice-daily products.",
      "blocks": [
        {
          "title": "Selected ophthalmic doses",
          "paragraphs": [
            "Age two and older: one drop per affected eye. Under two, consult a clinician. Do not exceed the product’s daily frequency."
          ],
          "sources": [
            "eye-low",
            "eye-daily",
            "eye-extra"
          ],
          "table": {
            "headers": [
              "Selected strength",
              "Schedule"
            ],
            "rows": [
              [
                "0.1%",
                "Twice daily, 6–8 hours apart; maximum twice/day"
              ],
              [
                "0.2%",
                "Once daily; maximum once/day"
              ],
              [
                "0.7%",
                "Once daily; maximum 1 drop per eye/day"
              ]
            ]
          }
        },
        {
          "title": "Eye-drop administration",
          "paragraphs": [
            "Remove contact lenses; wait at least ten minutes before reinsertion, and do not wear them with red eyes. Space other ophthalmic products at least five minutes. Avoid touching the tip; recap."
          ],
          "sources": [
            "eye-low",
            "eye-daily",
            "eye-extra"
          ]
        },
        {
          "title": "Nasal dose and technique",
          "paragraphs": [
            "Age ≥ 12: two sprays per nostril twice daily. Ages 6–11: one per nostril twice daily. Each spray delivers 665 mcg hydrochloride= 600 mcg base. Shake and prime five sprays/until mist; after over seven unused days, re-prime two. Aim away from septum, head downward; avoid immediate nose-blowing/head tilt. No younger-child regimen inferred."
          ],
          "sources": [
            "nasal"
          ]
        },
        {
          "title": "Organ adjustments",
          "paragraphs": [
            "Nasal label warrants no renal/hepatic adjustment, despite increased renal exposure and no dedicated hepatic study. This does not authorize an oral-systemic dose. OTC eye labels provide no numerical organ-adjustment algorithm."
          ],
          "sources": [
            "nasal"
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Eye red flags and nasal mucosal/sedation risks differ.",
      "takeaway": "Vision changes or eye pain need assessment.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "paragraphs": [
            "Eye drops: stop and seek assessment for pain, vision change, increasing redness or itch worsening/persisting beyond 72 hours. Avoid contaminated/cloudy products. Nasal spray: inspect mucosa initially/periodically; consider stopping for ulcers. Nosebleeds and somnolence occur; septal-perforation evidence includes investigational/vehicle formulations. Avoid hazardous activity until response known."
          ],
          "sources": [
            "eye-low",
            "eye-daily",
            "eye-extra",
            "nasal"
          ],
          "open": true,
          "tone": "warning"
        },
        {
          "title": "Contraindications",
          "paragraphs": [
            "OTC eye labels prohibit use with ingredient sensitivity or contact-lens irritation. Selected nasal PI formally lists no contraindications; that does not establish safety for a patient with a suspected formulation allergy."
          ],
          "sources": [
            "eye-low",
            "eye-daily",
            "eye-extra",
            "nasal"
          ]
        },
        {
          "title": "Boxed-warning status",
          "paragraphs": [
            "No boxed warning in reviewed ophthalmic/nasal labels. Route restrictions, eye red flags and nasal sedation/mucosal precautions remain applicable."
          ],
          "sources": [
            "eye-low",
            "eye-daily",
            "eye-extra",
            "nasal"
          ]
        },
        {
          "title": "Adverse reactions",
          "paragraphs": [
            "Nasal trials report bitter taste, headache, epistaxis, throat symptoms, cough and occasional sleepiness; pediatric rash/fever also occurred. Postmarketing smell disturbances have uncertain rates. OTC eye labels do not supply a comprehensive trial-frequency table; do not extrapolate nasal rates to drops."
          ],
          "sources": [
            "nasal"
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "Route-specific administration and sedative review matter.",
      "takeaway": "A lack of formal studies is not proof of no interactions.",
      "blocks": [
        {
          "title": "Other eye products",
          "paragraphs": [
            "Separate ophthalmic products by at least five minutes and check duplicate ingredients. Do not treat contact-lens discomfort by adding these drops."
          ],
          "sources": [
            "eye-low",
            "eye-daily",
            "eye-extra"
          ]
        },
        {
          "title": "Nasal interactions",
          "paragraphs": [
            "Avoid alcohol and other CNS depressants because alertness may worsen. Formal interaction studies were not performed; limited metabolism makes CYP-inhibition interactions unexpected, without establishing universal compatibility."
          ],
          "sources": [
            "nasal"
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Eye and nasal age thresholds differ.",
      "takeaway": "Lower-age studies do not replace labeled eligibility.",
      "blocks": [
        {
          "title": "Children and older adults",
          "paragraphs": [
            "Selected drops allow OTC directions from two; younger children need clinical advice. Nasal efficacy/safety established from six, not below six; older-adult evidence is limited and selection should be cautious."
          ],
          "sources": [
            "eye-low",
            "eye-daily",
            "eye-extra",
            "nasal"
          ]
        },
        {
          "title": "Pregnancy and breastfeeding",
          "paragraphs": [
            "No published nasal-specific human pregnancy data; class-level observations do not prove product safety. Human milk/infant/production data are absent; weigh maternal need and feeding benefits. OTC ophthalmic labels give no comparable detailed reproductive dataset; assess the exact route instead of copying nasal exposure estimates."
          ],
          "sources": [
            "nasal"
          ]
        },
        {
          "title": "Kidney and liver disease",
          "paragraphs": [
            "Renal clearance is predominant. Nasal dosing needs no adjustment per studied exposure assessment; hepatic-study absence is explicitly acknowledged. No renal/hepatic/dialysis algorithm for other routes is inferred."
          ],
          "sources": [
            "nasal"
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Histamine-receptor antagonism relieves allergy symptoms.",
      "takeaway": "Nasal PK does not establish ophthalmic exposure.",
      "blocks": [
        {
          "title": "Mechanism",
          "paragraphs": [
            "Olopatadine antagonizes H1 receptors. Clinical effects are formulation/route-specific; this is not a corticosteroid or antibiotic."
          ],
          "sources": [
            "nasal"
          ]
        },
        {
          "title": "Disposition",
          "paragraphs": [
            "Nasal absorption produces measurable systemic exposure; renal elimination dominates and metabolism is limited. Nasal-study plasma half-life is 8–12 hours. OTC eye labels lack a full PK dataset, so no shared bioavailability or systemic conversion is supplied."
          ],
          "sources": [
            "nasal"
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Monitor symptom response, route technique and red flags.",
      "takeaway": "Persistent or atypical symptoms need diagnosis review.",
      "blocks": [
        {
          "title": "Monitoring",
          "paragraphs": [
            "Eye pain, vision changes, worsening redness or prolonged itch require assessment. With nasal use, follow mucosal integrity, bleeding and alertness. No universal laboratory schedule is established."
          ],
          "sources": [
            "eye-low",
            "eye-daily",
            "eye-extra",
            "nasal"
          ]
        },
        {
          "title": "Counseling",
          "paragraphs": [
            "Use only the intended eye/nasal route. Do not exceed frequency, share contaminated applicators or confuse base and salt strength. Accidental ingestion/overdose needs prompt medical/poison-center advice; nasal sedation requires driving and sedative caution."
          ],
          "sources": [
            "eye-low",
            "eye-daily",
            "eye-extra",
            "nasal"
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Check actual concentration, preservative and device.",
      "takeaway": "Package marketing names alone may not establish strength.",
      "blocks": [
        {
          "title": "Representative product identity",
          "paragraphs": [
            "Pataday 0.1%5 mL NDC 0065-4274-01; 0.2% selected 2.5 mL NDC 0065-6150-01; 0.7%2.5 mL NDC 0065-0816-04. Nasal Apotex 30.5 g/240-spray bottle NDC 60505-0845-5. The 0.2% record contains an inconsistent 0.7% package panel; use active-ingredient/product table and verify actual package."
          ],
          "sources": [
            "eye-low",
            "eye-daily",
            "eye-extra",
            "nasal"
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "paragraphs": [
            "Eye percentages express olopatadine base: 0.1/0.2/0.7% correspond to hydrochloride 0.111/0.222/0.776%. Selected eye preservatives differ; check allergies. Nasal 0.6%base delivers 600 mcg base= 665 mcg salt per spray, not an eye-drop concentration."
          ],
          "sources": [
            "eye-low",
            "eye-daily",
            "eye-extra",
            "nasal"
          ]
        },
        {
          "title": "Storage and handling",
          "paragraphs": [
            "Eye 0.1%: 4–25°C; 0.2/0.7%: 2–25°C. Nasal: 4–25°C; discard after 240 sprays following priming, even with liquid left. This corresponds to 30 days at adult dosing, not a universal 30-day opening expiry for pediatric use. Keep tips clean; retain exact product expiry."
          ],
          "sources": [
            "eye-low",
            "eye-daily",
            "eye-extra",
            "nasal"
          ]
        }
      ]
    }
  ]
};
