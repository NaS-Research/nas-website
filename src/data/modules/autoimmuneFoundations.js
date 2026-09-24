import { autoimmuneFoundationsQuestionBank } from "@/data/questionBanks/autoimmuneFoundations";

export const autoimmuneFoundationsModule = {
  "slug": "autoimmune-foundations",
  "number": "223",
  "title": "Autoimmune Foundations",
  "source": "Original clinical synthesis of NIH laboratory education, ACR interpretation guidance, EULAR infection prevention recommendations and CDC vaccine guidance",
  "description": "Distinguish disease evidence from inflammation and treatment risk, then build a specific screening, vaccination and follow-up plan.",
  "topics": [
    "Start with the Clinical Pattern",
    "ESR and CRP: Evidence of Inflammation",
    "ANA and Rheumatoid Factor: Context Matters",
    "Screening Before Immune Therapy",
    "Vaccines and Treatment Timing",
    "Turn Results into a Follow-Up Plan"
  ],
  "outcomes": [
    "Separate inflammatory markers from autoantibodies.",
    "Interpret positive and negative antibody tests in clinical context.",
    "Connect infection screening to the proposed treatment.",
    "Apply vaccine precautions without conflating them with every steroid risk.",
    "Distinguish disease response from treatment safety."
  ],
  "submodules": [
    {
      "slug": "clinical-pattern",
      "title": "Start with the Clinical Pattern",
      "visual": "autoimmune-clinical-pattern",
      "summary": "Autoimmune disease involves immune responses against the body. Symptoms and organ involvement determine the evaluation; a laboratory label alone does not establish the diagnosis.",
      "concepts": [
        "Organ involvement",
        "Clinical probability",
        "Alternative explanations"
      ],
      "application": "Ask which findings fit together, which organs may be threatened, and what evidence would distinguish competing explanations.",
      "lesson": [
        {
          "heading": "Recognize a pattern",
          "body": "Persistent inflammatory joint symptoms, a characteristic rash, or a defined organ disorder warrants a different investigation from isolated fatigue. Autoimmune illnesses vary in presentation and course. Infection and other disorders can produce similar symptoms; history, examination and directed testing must be interpreted together."
        },
        {
          "heading": "Choose a question before a test",
          "body": "Separate three tasks: identifying the disease, measuring current activity, and checking treatment safety. The same patient may need evidence for all three, but one abnormal result rarely answers them all. Record the reason for ordering each test and the decision that its result could change."
        },
        {
          "heading": "Match treatment to the disease",
          "body": "An autoimmune mechanism does not imply that every patient needs systemic immunosuppression. Celiac disease is treated principally through strict gluten avoidance, with nutritional support and follow-up. Hypothyroidism from Hashimoto disease is treated with thyroid hormone replacement; patients without hypothyroidism may instead need surveillance. Other diseases require immune-directed therapy selected for their severity and organ involvement. Use the disease-specific module for the treatment regimen."
        }
      ],
      "keyPoints": [
        "Symptoms and organ findings guide testing.",
        "Diagnostic, activity and safety assessments are different tasks."
      ],
      "check": {
        "question": "Which approach best evaluates unexplained symptoms?",
        "choices": [
          "Interpret a targeted workup with the history and examination",
          "Diagnose from a single antibody result",
          "Assume every elevated CRP is autoimmune disease",
          "Begin immunosuppression for fatigue alone"
        ],
        "answer": 0,
        "rationale": "Symptoms, examination and directed tests establish clinical context.",
        "reviewHref": "#clinical-pattern"
      }
    },
    {
      "slug": "inflammation-markers",
      "title": "ESR and CRP: Evidence of Inflammation",
      "visual": "autoimmune-inflammation-markers",
      "summary": "Inflammation markers can support assessment and follow-up, but they do not identify a specific autoimmune disease.",
      "concepts": [
        "Erythrocyte sedimentation rate",
        "C-reactive protein",
        "Clinical context"
      ],
      "application": "Compare trends with symptoms and examination, and investigate discordance rather than treating a number in isolation.",
      "lesson": [
        {
          "heading": "Understand the measurement",
          "body": "ESR describes how rapidly red cells settle under specified laboratory conditions. CRP is a liver-produced protein that increases with inflammation. Neither test identifies an autoantibody. Infection and noninfectious inflammation can both elevate these markers."
        },
        {
          "heading": "Interpret limitations",
          "body": "ESR is affected by factors including age, pregnancy and blood-cell characteristics. CRP does not locate inflammation or name its cause. Use the reporting laboratory reference range and units. An elevated marker supports further evaluation; it does not establish rheumatoid arthritis, lupus, or a need for a higher immunosuppressant dose."
        }
      ],
      "keyPoints": [
        "ESR and CRP are nonspecific.",
        "Laboratory context matters as well as the trend."
      ],
      "check": {
        "question": "An elevated CRP establishes which conclusion?",
        "choices": [
          "Rheumatoid arthritis is proven",
          "Inflammation may be present, but its cause remains unresolved",
          "Lupus is proven",
          "An autoantibody has been identified"
        ],
        "answer": 1,
        "rationale": "CRP is an inflammatory protein; it does not identify the cause.",
        "reviewHref": "#inflammation-markers"
      }
    },
    {
      "slug": "autoantibodies",
      "title": "ANA and Rheumatoid Factor: Context Matters",
      "visual": "autoimmune-autoantibodies",
      "summary": "ANA and rheumatoid factor are autoantibody tests. They are not interchangeable with ESR or CRP and cannot independently establish an autoimmune diagnosis.",
      "concepts": [
        "Antinuclear antibodies",
        "Rheumatoid factor",
        "Positive and negative results"
      ],
      "application": "Explain what a result supports and what it cannot conclude before changing treatment.",
      "lesson": [
        {
          "heading": "Interpret ANA carefully",
          "body": "ANA detects antibodies directed against nuclear targets. A positive result can occur in healthy people and in several illnesses or with certain medications. Interpret the assay, titer or reported result alongside symptoms. Positivity alone does not justify treating lupus. A negative ANA reduces the likelihood of lupus in the appropriate setting; it does not exclude every autoimmune disorder."
        },
        {
          "heading": "Interpret RF carefully",
          "body": "Rheumatoid factor is an autoantibody directed against immunoglobulin G. It may be present in rheumatoid arthritis, other conditions or people without rheumatoid arthritis. Conversely, rheumatoid arthritis can occur with a negative RF. Persistent inflammatory joint findings require clinical evaluation regardless of whether RF is positive or negative."
        }
      ],
      "keyPoints": [
        "Positive ANA does not equal lupus.",
        "Negative RF does not exclude rheumatoid arthritis."
      ],
      "check": {
        "question": "A person without compatible symptoms has a positive ANA. What follows?",
        "choices": [
          "Start high-dose steroids automatically",
          "Diagnose lupus immediately",
          "Review the clinical context before assigning a diagnosis",
          "Treat ANA as a CRP measurement"
        ],
        "answer": 2,
        "rationale": "ANA positivity can occur without autoimmune disease.",
        "reviewHref": "#autoantibodies"
      }
    },
    {
      "slug": "infection-screening",
      "title": "Screening Before Immune Therapy",
      "visual": "autoimmune-infection-screening",
      "summary": "Infection prevention depends on the proposed treatment, infection history, exposures and disease context. Screening and prophylaxis are separate decisions.",
      "concepts": [
        "Latent tuberculosis",
        "Hepatitis status",
        "Treatment-specific planning"
      ],
      "application": "Name the medication and applicable guideline, document the screening result, and establish who will act on it before treatment begins.",
      "lesson": [
        {
          "heading": "Use a risk-based plan",
          "body": "EULAR recommends latent TB screening before biologic and targeted synthetic DMARDs; it can also be considered with other antirheumatic treatments. This is not one identical requirement for every immune-modifying drug. Follow the specific product label and regional guidance. A screening result is the beginning of an evaluation and prevention plan, not proof that all future infection risk is eliminated."
        },
        {
          "heading": "Distinguish hepatitis decisions",
          "body": "Establish hepatitis B status before relevant antirheumatic therapy and select monitoring or antiviral prevention from that status and the treatment risk. Hepatitis C RNA positivity warrants referral for antiviral treatment. Do not describe hepatitis B and C as having identical reactivation pathways or automatically prescribe the same prophylaxis for both."
        },
        {
          "heading": "Apply actual label requirements",
          "body": "Before adalimumab, evaluate for latent TB and arrange treatment when indicated; continue infection surveillance even after a negative initial test. Rituximab requires HBsAg and anti-HBc testing before treatment. Evidence of current or prior HBV infection calls for specialist prevention and monitoring planning. A negative HBsAg alone does not close that assessment."
        }
      ],
      "keyPoints": [
        "Screening does not itself prevent infection.",
        "Hepatitis management depends on the virus, test results and regimen."
      ],
      "check": {
        "question": "Why review the exact immune therapy before screening?",
        "choices": [
          "Every drug has identical infection risks",
          "The drug name determines whether symptoms count",
          "Screening replaces follow-up",
          "The regimen affects required tests and prevention decisions"
        ],
        "answer": 3,
        "rationale": "Treatment-specific risk and guidance determine the screening and management plan.",
        "reviewHref": "#infection-screening"
      }
    },
    {
      "slug": "vaccination",
      "title": "Vaccines and Treatment Timing",
      "visual": "autoimmune-vaccination",
      "summary": "Assess vaccine type and immune status before treatment. Live and non-live products raise different concerns.",
      "concepts": [
        "Live vaccines",
        "Non-live vaccines",
        "Corticosteroid exposure"
      ],
      "application": "Coordinate vaccination with the treating team; use current vaccine-specific and therapy-specific guidance rather than stopping necessary treatment independently.",
      "lesson": [
        {
          "heading": "Separate safety from response",
          "body": "Live vaccines are generally avoided during substantial immunosuppression. Non-live vaccines do not contain replicating vaccine organisms, but the immune response can be reduced. Review indicated vaccines early and plan timing around the therapy where feasible."
        },
        {
          "heading": "Apply the steroid threshold correctly",
          "body": "For live-virus vaccine decisions, CDC considers prednisone-equivalent doses of at least 2 mg/kg/day, or at least 20 mg/day in people weighing more than 10 kg, for at least 14 consecutive days to be high-dose exposure. Live vaccination is deferred for at least one month after stopping such treatment. This is not a universal threshold for every infection risk or adrenal-suppression decision. Short courses, physiologic replacement, and inhaled or topical treatment alone usually do not impose the same restriction."
        }
      ],
      "keyPoints": [
        "Vaccine safety and vaccine effectiveness are separate questions.",
        "Review the entire regimen, not just one steroid prescription."
      ],
      "check": {
        "question": "A 70 kg adult took prednisone 20 mg/day for exactly 14 consecutive days. How does CDC classify this for live-virus vaccination?",
        "choices": [
          "It meets the high-dose exposure definition",
          "It falls below the duration threshold",
          "Only doses above 20 mg count",
          "Body weight makes the daily-dose criterion irrelevant"
        ],
        "answer": 0,
        "rationale": "Both the 20 mg/day and at least 14-day criteria are met.",
        "reviewHref": "#vaccination"
      }
    },
    {
      "slug": "follow-up",
      "title": "Turn Results into a Follow-Up Plan",
      "visual": "autoimmune-follow-up",
      "summary": "Ongoing care needs a plan for disease response, treatment toxicity and new infection concerns. Normal screening results do not make later symptoms irrelevant.",
      "concepts": [
        "Clinical response",
        "Safety monitoring",
        "Patient communication"
      ],
      "application": "Write down which changes require contact, who reviews results, and when monitoring is due.",
      "lesson": [
        {
          "heading": "Monitor distinct outcomes",
          "body": "Ask separately whether the disease is improving and whether treatment is causing harm. Choose laboratory and clinical monitoring from the actual medicine and affected organs. A CBC cannot by itself exclude every infection or detect every treatment toxicity; an antibody result is not a universal treatment target."
        },
        {
          "heading": "Avoid a false choice",
          "body": "A new symptom during treatment can reflect the underlying disease, an adverse drug effect, infection or another condition. Do not automatically label it a flare and escalate immunosuppression. Review the symptom timeline, exposures, medication changes and urgency with the treating team. Treatment interruption and resumption should follow the clinical assessment and the specific regimen."
        },
        {
          "heading": "Discuss malignancy risk specifically",
          "body": "Adalimumab carries malignancy warnings, including lymphoma, and its label calls for examination for nonmelanoma skin cancer before and during therapy. Discuss personal cancer history and the proposed regimen. Do not assign one cancer-risk estimate to all immune therapies or attribute every cancer solely to a medication; the underlying disease and previous or combined treatments also matter."
        }
      ],
      "keyPoints": [
        "Response does not prove safety.",
        "New symptoms need assessment rather than automatic dose escalation."
      ],
      "check": {
        "question": "Which follow-up plan is most useful?",
        "choices": [
          "Repeat ANA for every treatment decision",
          "Use one normal CBC to exclude all future infections",
          "Specify response measures, drug-specific safety checks and symptom escalation",
          "Stop all follow-up after negative baseline TB screening"
        ],
        "answer": 2,
        "rationale": "A useful plan separates efficacy, toxicity and new infection concerns.",
        "reviewHref": "#follow-up"
      }
    }
  ],
  "references": [
    {
      "label": "MedlinePlus: autoimmune diseases",
      "href": "https://medlineplus.gov/autoimmunediseases.html"
    },
    {
      "label": "MedlinePlus: ESR",
      "href": "https://medlineplus.gov/lab-tests/erythrocyte-sedimentation-rate-esr/"
    },
    {
      "label": "MedlinePlus: CRP",
      "href": "https://medlineplus.gov/lab-tests/c-reactive-protein-crp-test/"
    },
    {
      "label": "American College of Rheumatology: ANA",
      "href": "https://rheumatology.org/patients/antinuclear-antibodies-ana"
    },
    {
      "label": "MedlinePlus: rheumatoid factor",
      "href": "https://medlineplus.gov/lab-tests/rheumatoid-factor-rf-test/"
    },
    {
      "label": "EULAR infection screening and prophylaxis recommendations",
      "href": "https://doi.org/10.1136/ard-2022-223335"
    },
    {
      "label": "CDC: altered immunocompetence",
      "href": "https://www.cdc.gov/vaccines/hcp/imz-best-practices/altered-immunocompetence.html"
    },
    {
      "label": "NIDDK: celiac disease treatment",
      "href": "https://www.niddk.nih.gov/health-information/digestive-diseases/celiac-disease/treatment"
    },
    {
      "label": "NIDDK: Hashimoto disease",
      "href": "https://www.niddk.nih.gov/health-information/endocrine-diseases/hashimotos-disease"
    },
    {
      "label": "Humira prescribing information: infection and malignancy warnings",
      "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=608d4f0d-b19f-46d3-749a-7159aa5f933d"
    },
    {
      "label": "Rituxan prescribing information: HBV assessment",
      "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=b172773b-3905-4a1c-ad95-bab4b6126563"
    }
  ]
};
autoimmuneFoundationsModule.questionBank = autoimmuneFoundationsQuestionBank;
