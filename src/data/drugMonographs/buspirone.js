// Original label-reviewed clinical summaries; formulation-specific directions.
export const buspirone = {
  "slug": "buspirone",
  "name": "Buspirone",
  "synonym": "Buspirone hydrochloride · Anxiolytic",
  "description": "An oral anxiolytic for anxiety disorders. CYP3A4 interactions, consistent meal timing and regular reassessment guide individualized treatment.",
  "checked": "2026-10-01",
  "essential": {
    "title": "Check serotonergic and CYP3A4 combinations.",
    "text": "MAOI combinations can cause dangerous BP elevation or serotonin syndrome. Fever, agitation and muscle rigidity need emergency assessment.",
    "section": "safety",
    "link": "Warnings and precautions"
  },
  "facts": [
    [
      "Therapeutic class",
      "Nonbenzodiazepine anxiolytic"
    ],
    [
      "Formulation",
      "Oral tablets"
    ],
    [
      "Reference focus",
      "Selected U.S. prescription label"
    ]
  ],
  "sources": [
    {
      "id": "label",
      "title": "Buspirone hydrochloride · Oral tablets",
      "publisher": "DailyMed / RemedyRepack; Aurobindo source",
      "note": "Current SPL version 3, effective September 4, 2026; DailyMed publication September 7, 2026. Repackager update is not a verified clinical PI revision date.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fa4d5cac-f687-4440-99d2-8bb27cf2f4ed"
    }
  ],
  "sections": [
    {
      "id": "indications",
      "title": "Indications",
      "summary": "Anxiety disorders and short-term anxiety symptom relief.",
      "takeaway": "Reassess ongoing benefit.",
      "blocks": [
        {
          "title": "Labeled uses",
          "sources": [
            "label"
          ],
          "open": true,
          "paragraphs": [
            "Evidence comes from outpatients resembling GAD, including coexisting depressive symptoms. Everyday stress usually does not warrant an anxiolytic. Controlled long-term efficacy beyond 3–4 weeks was not established in this label; periodically reassess continued treatment."
          ]
        }
      ]
    },
    {
      "id": "dosage",
      "title": "Dosage and administration",
      "summary": "Divided dosing with consistent food timing.",
      "takeaway": "Titrate to response and interaction burden.",
      "blocks": [
        {
          "title": "Adult oral regimen",
          "sources": [
            "label"
          ],
          "open": true,
          "table": {
            "headers": [
              "Stage",
              "Selected label directions"
            ],
            "rows": [
              [
                "Start",
                "7.5 mg twice daily."
              ],
              [
                "Titrate",
                "Increase total daily dose by 5 mg every 2–3 days as needed."
              ],
              [
                "Range / ceiling",
                "Common trial doses 20–30 mg/day divided; maximum 60 mg/day."
              ]
            ]
          }
        },
        {
          "title": "Administration and organ impairment",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Take consistently with or without food. Severe renal or hepatic impairment: use cannot be recommended; exposure increases substantially and no fixed adjustment algorithm is supplied for lesser impairment. Use lower doses cautiously with strong CYP3A4 inhibitors."
          ]
        },
        {
          "title": "MAOI transitions",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Allow at least 14 days between buspirone and an antidepressant MAOI in either direction. Do not start during linezolid or IV methylene blue treatment. Urgent reversible-MAOI therapy requires clinician-directed stopping and surveillance; do not apply routine antidepressant washout rules without reviewing the exact protocol."
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety",
      "summary": "Serotonin syndrome and CNS effects.",
      "takeaway": "Buspirone does not prevent benzodiazepine withdrawal.",
      "blocks": [
        {
          "title": "Warnings and precautions",
          "sources": [
            "label"
          ],
          "open": true,
          "tone": "warning",
          "paragraphs": [
            "Serotonin syndrome can occur, especially with serotonergic or antidopaminergic drugs. Stop implicated agents and initiate urgent supportive treatment if suspected. Driving impairment is unpredictable; avoid alcohol. Gradually withdraw prior chronic sedative/anxiolytic treatment under supervision because buspirone lacks cross-tolerance. Restlessness and movement symptoms warrant review; it is not an antipsychotic substitute."
          ]
        },
        {
          "title": "Contraindications",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Hypersensitivity to buspirone; concomitant antidepressant MAOIs or use within 14 days in either direction; initiating buspirone during linezolid or IV methylene blue therapy."
          ]
        },
        {
          "title": "Boxed warning status",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "The selected U.S. label has no boxed warning. Its MAOI and serotonin-syndrome restrictions still apply."
          ]
        },
        {
          "title": "Adverse reactions",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Common effects include dizziness, nausea, headache, nervousness and lightheadedness. Postmarketing allergy/angioedema and movement disorders are reported with uncertain frequency/causality. Overdose requires immediate medical assessment and supportive monitoring of breathing, pulse and BP; no specific antidote is known and dialyzability is undetermined."
          ]
        }
      ]
    },
    {
      "id": "interactions",
      "title": "Drug interactions",
      "summary": "CYP3A4 can markedly alter exposure.",
      "takeaway": "Match the adjustment to the interacting drug.",
      "blocks": [
        {
          "title": "Clinically relevant interactions",
          "sources": [
            "label"
          ],
          "open": true,
          "items": [
            "Erythromycin: label example 2.5 mg twice daily; itraconazole or nefazodone: 2.5 mg once daily, followed by individualized reassessment.",
            "Diltiazem/verapamil and other strong CYP3A4 inhibitors can raise exposure; review a lower dose and adverse effects.",
            "Rifampin and other CYP3A4 inducers may reduce benefit; reassess dosing clinically.",
            "Avoid large amounts of grapefruit juice; avoid tryptophan combinations. Serotonergic drugs/triptans require close observation.",
            "Other psychotropics require caution; haloperidol concentrations may increase and diazepam-metabolite effects have been reported."
          ]
        },
        {
          "title": "Laboratory interference",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Buspirone can produce false-positive urinary metanephrine/catecholamine results. The label directs discontinuation at least 48 hours before collection; coordinate this with the prescriber/testing team."
          ]
        }
      ]
    },
    {
      "id": "populations",
      "title": "Use in specific populations",
      "summary": "Limited pregnancy and breastfeeding evidence.",
      "takeaway": "Pediatric efficacy has not been demonstrated.",
      "blocks": [
        {
          "title": "Pregnancy and lactation",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Adequate controlled human pregnancy studies are lacking; use only if clearly needed after individual assessment. The selected label states human milk excretion is unknown and advises avoiding use during nursing if clinically possible."
          ]
        },
        {
          "title": "Pediatric and geriatric considerations",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Two 6-week GAD trials in ages 6–17 did not show efficacy over placebo; long-term pediatric safety/efficacy data are absent. Older-adult experience was broadly similar to younger adults, but greater sensitivity is possible."
          ]
        }
      ]
    },
    {
      "id": "pharmacology",
      "title": "Clinical pharmacology",
      "summary": "Serotonin receptor affinity; mechanism incompletely understood.",
      "takeaway": "Food changes systemic exposure.",
      "blocks": [
        {
          "title": "Mechanism of action",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "High 5-HT1A affinity is documented; the complete anxiolytic mechanism is unknown. Buspirone lacks benzodiazepine/GABA binding activity and does not provide typical anticonvulsant or muscle-relaxant effects."
          ]
        },
        {
          "title": "Pharmacokinetics",
          "sources": [
            "label"
          ],
          "facts": [
            [
              "Absorption",
              "Rapid; peaks about 40–90 minutes after selected oral doses."
            ],
            [
              "Metabolism",
              "Extensive first pass, primarily CYP3A4; metabolites include 1-PP."
            ],
            [
              "Half-life",
              "Unchanged drug about 2–3 hours."
            ],
            [
              "Disposition",
              "Approximately 86% protein-bound; urinary/fecal metabolite elimination."
            ]
          ]
        }
      ]
    },
    {
      "id": "practice",
      "title": "Monitoring and counseling",
      "summary": "Follow anxiety response, tolerability and medicine changes.",
      "takeaway": "Keep food timing consistent.",
      "blocks": [
        {
          "title": "Monitoring parameters",
          "sources": [
            "label"
          ],
          "open": true,
          "items": [
            "Assess symptom response and continued treatment need.",
            "Review serotonergic/CYP3A4 drugs, renal/hepatic function and adverse CNS or movement symptoms.",
            "No specific routine laboratory tests are recommended by this label; testing follows clinical circumstances."
          ]
        },
        {
          "title": "Patient counseling information",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Take scheduled doses as prescribed and keep meal timing consistent. Avoid large grapefruit-juice intake and alcohol. Check before new medicines, pregnancy or breastfeeding. Avoid driving until effects are known; report restlessness or allergic symptoms promptly."
          ]
        }
      ]
    },
    {
      "id": "product",
      "title": "Product identification",
      "summary": "Verify exact tablet and permitted score divisions.",
      "takeaway": "Imprint and packaging are manufacturer-specific.",
      "blocks": [
        {
          "title": "Representative product · RemedyRepack 7.5 mg tablet",
          "sources": [
            "label"
          ],
          "open": true,
          "facts": [
            [
              "Appearance",
              "White ovoid rectangular, beveled, uncoated and scored."
            ],
            [
              "Imprint",
              "B / 75 separated by score."
            ],
            [
              "Packager",
              "RemedyRepack; source NDC 59651-390."
            ],
            [
              "Example NDC",
              "70518-4317-0 · 30-tablet blister."
            ],
            [
              "U.S. status",
              "Prescription; not a controlled substance."
            ]
          ],
          "links": [
            {
              "title": "View exact product label",
              "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fa4d5cac-f687-4440-99d2-8bb27cf2f4ed"
            }
          ]
        },
        {
          "title": "Dosage forms and strengths",
          "sources": [
            "label"
          ],
          "facts": [
            [
              "Source-label tablets",
              "5, 7.5, 10, 15 and 30 mg; selected repack is 7.5 mg."
            ],
            [
              "Scoring",
              "15/30 mg source tablets are specially scored into halves/thirds; verify exact product before dividing."
            ]
          ]
        },
        {
          "title": "Storage and handling",
          "sources": [
            "label"
          ],
          "paragraphs": [
            "Store 20–25°C; protect from temperatures above 30°C. Dispense in a tight, light-resistant container. Use the exact tablet’s splitting directions; discard incorrectly broken segments."
          ]
        }
      ]
    }
  ]
};
