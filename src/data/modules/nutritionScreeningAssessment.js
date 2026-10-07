import { nutritionScreeningAssessmentQuestionBank } from "@/data/questionBanks/nutritionScreeningAssessment";

export const nutritionScreeningAssessmentModule = {
  slug: "nutrition-screening-assessment",
  number: "01",
  title: "Nutrition Screening, Assessment, and Malnutrition",
  source: "NaS synthesis of current nutrition assessment guidance",
  description: "Move from a rapid nutrition risk screen to a defensible assessment, diagnosis, and monitoring plan.",
  topics: ["Nutrition risk", "Anthropometrics", "Physical assessment", "Malnutrition diagnosis"],
  outcomes: [
    "Distinguish screening, assessment, diagnosis, intervention, and monitoring.",
    "Collect and interpret weight, intake, functional, physical, and disease data.",
    "Apply contemporary GLIM and Academy and ASPEN diagnostic frameworks.",
    "Build a pharmacist focused nutrition problem list and follow up plan.",
  ],
  submodules: [
    {
      slug: "screening-to-assessment",
      title: "From Screening to Assessment",
      visual: "nutrition-screening-flow",
      summary: "Screening identifies who may be at risk. Assessment determines what is happening, why it is happening, and what should happen next.",
      concepts: ["Validated screening tools", "Risk versus diagnosis", "Referral and escalation", "Repeat screening after clinical change"],
      application: "A positive screen is a signal to perform a more complete assessment. It is not, by itself, a malnutrition diagnosis.",
      lesson: [
        {
          heading: "Use the right tool for the right decision",
          body: "Nutrition screening is intentionally brief. Tools such as MST, MUST, MNA-SF, and NRS-2002 use different populations and inputs, so the tool should match the care setting and local workflow. The result answers a narrow question: does this person need a more complete nutrition assessment?",
        },
        {
          heading: "Build a closed loop",
          body: "A useful workflow links a positive screen to timely assessment, a documented plan, and reassessment. Risk changes with acute illness, procedures, poor intake, gastrointestinal losses, functional decline, and prolonged hospitalization.",
        },
      ],
      keyPoints: ["Do not substitute a laboratory value for a validated screen.", "Do not convert a positive screen directly into a diagnosis.", "Document the trigger, action, and follow up interval."],
      check: { question: "A patient has a positive MST result on admission. What is the most appropriate next step?", choices: ["Complete a comprehensive nutrition assessment", "Diagnose severe malnutrition immediately", "Order albumin as the deciding test", "Repeat the same screen and ignore the first result"], answer: 0, rationale: "A positive screen identifies risk and should trigger a comprehensive assessment rather than serve as the diagnosis.", reviewHref: "#screening-to-assessment" },
    },
    {
      slug: "history-intake-disease",
      title: "History, Intake, and Disease Burden",
      visual: "nutrition-history-trajectory",
      summary: "Nutrition status is a trajectory. The history explains the direction and speed of change better than a single measurement.",
      concepts: ["Usual and recent intake", "Unintentional weight change", "Symptoms and assimilation", "Inflammation and disease burden"],
      application: "Reconstruct what changed, when it changed, and why. Separate poor access, poor appetite, impaired swallowing, malabsorption, losses, and elevated metabolic demand.",
      lesson: [
        {
          heading: "Quantify the trajectory",
          body: "Record usual weight, current measured weight, the time interval, whether the change was intentional, and whether fluid shifts could distort the result. Estimate the proportion of usual intake being consumed and the duration of the reduction.",
        },
        {
          heading: "Identify the mechanism",
          body: "Reduced intake can reflect nausea, pain, dysphagia, altered taste, depression, food insecurity, medication effects, or treatment schedules. Reduced assimilation can reflect maldigestion, malabsorption, fistulae, vomiting, diarrhea, or altered anatomy. Disease burden can add inflammatory and catabolic stress.",
        },
      ],
      keyPoints: ["Ask about duration, not only current intake.", "Distinguish intentional from unintentional loss.", "Review medications as possible causes of anorexia, nausea, altered taste, diarrhea, or constipation."],
      check: { question: "Which history most strongly supports an etiologic GLIM criterion?", choices: ["Food intake below half of estimated needs for more than one week", "A stable preferred body weight", "One normal meal after admission", "A normal serum sodium concentration"], answer: 0, rationale: "Sustained reduction in food intake can satisfy the reduced intake or assimilation etiologic criterion.", reviewHref: "#history-intake-disease" },
    },
    {
      slug: "anthropometrics-body-composition",
      title: "Anthropometrics and Body Composition",
      visual: "nutrition-anthropometrics",
      summary: "Weight and BMI are useful when their limitations are visible. Muscle and fat loss may be clinically important even when body weight appears ordinary.",
      concepts: ["Measured height and weight", "BMI and weight change", "Fluid confounding", "Muscle mass and body composition"],
      application: "Use measured values when possible, compare them with a credible baseline, calculate percent change, and interpret the result alongside edema, ascites, obesity, amputation, and body composition.",
      lesson: [
        {
          heading: "Calculate before classifying",
          body: "Percent weight loss equals usual weight minus current weight, divided by usual weight, multiplied by 100. BMI equals weight in kilograms divided by height in meters squared. Neither value should be interpreted without the clinical timeline and measurement conditions.",
        },
        {
          heading: "Recognize hidden depletion",
          body: "Edema and ascites can mask tissue loss. A person with a high BMI can still have low muscle mass and clinically important malnutrition. Repeated measurements obtained under similar conditions are more informative than isolated values.",
        },
      ],
      keyPoints: ["Use dry or estimated euvolemic weight when fluid accumulation is substantial.", "State whether height and weight were measured, reported, or estimated.", "BMI does not directly measure muscle mass."],
      check: { question: "A patient with edema has lost visible muscle but weighs the same as last month. What is the best interpretation?", choices: ["Fluid accumulation may be masking tissue loss", "Stable scale weight excludes malnutrition", "BMI directly proves muscle preservation", "The physical findings should be discarded"], answer: 0, rationale: "Fluid gain can offset tissue loss on the scale, so weight must be interpreted with the physical examination and volume status.", reviewHref: "#anthropometrics-body-composition" },
    },
    {
      slug: "physical-functional-assessment",
      title: "Physical and Functional Assessment",
      visual: "nutrition-physical-function",
      summary: "The bedside examination turns suspected tissue loss into observable evidence and helps distinguish fat, muscle, fluid, and function.",
      concepts: ["Subcutaneous fat stores", "Muscle groups", "Edema and ascites", "Functional change"],
      application: "Compare bilateral sites when appropriate, consider age and baseline habitus, and document the location and degree of loss rather than writing a vague global impression.",
      lesson: [
        {
          heading: "Inspect specific tissue compartments",
          body: "Nutrition focused examination evaluates fat stores, muscle groups, fluid accumulation, oral and skin findings, and functional clues. Findings should be interpreted with the history because immobility, denervation, aging, trauma, and organ disease can alter muscle independently of intake.",
        },
        {
          heading: "Treat function as context",
          body: "A decline in grip, mobility, transfers, or usual activity can support the assessment, but function is affected by pain, cognition, neurologic disease, sedation, and acute illness. It should not be treated as a nutrition specific measurement in isolation.",
        },
      ],
      keyPoints: ["Name the anatomical site and tissue examined.", "Account for nonnutrition causes of weakness or atrophy.", "Use repeated findings to monitor trajectory when the method is consistent."],
      check: { question: "Why should reduced handgrip strength not be interpreted alone as proof of malnutrition?", choices: ["Pain, neurologic disease, sedation, and acute illness can also reduce performance", "Grip strength measures only body fat", "Grip strength is never clinically useful", "It directly measures serum protein concentration"], answer: 0, rationale: "Functional measures are clinically useful but nonspecific and require interpretation within the complete assessment.", reviewHref: "#physical-functional-assessment" },
    },
    {
      slug: "diagnostic-frameworks",
      title: "Diagnostic Frameworks",
      visual: "nutrition-diagnostic-frameworks",
      summary: "Diagnostic frameworks organize evidence. They do not replace clinical judgment, and their criteria should not be mixed casually.",
      concepts: ["GLIM phenotypic criteria", "GLIM etiologic criteria", "Academy and ASPEN characteristics", "Severity and etiology"],
      application: "Name the framework, show the criteria that are present, explain confounders, and document severity using that framework rather than combining thresholds from unrelated systems.",
      lesson: [
        {
          heading: "Apply GLIM in two steps",
          body: "After risk screening, GLIM diagnosis requires at least one phenotypic criterion and at least one etiologic criterion. Phenotypic criteria are weight loss, low BMI, and reduced muscle mass. Etiologic criteria are reduced intake or assimilation and inflammation or disease burden.",
        },
        {
          heading: "Apply Academy and ASPEN characteristics",
          body: "The Academy and ASPEN adult framework evaluates insufficient energy intake, weight loss, loss of muscle mass, loss of subcutaneous fat, fluid accumulation, and diminished functional status measured by handgrip strength. At least two characteristics support diagnosis, interpreted within the relevant acute illness, chronic illness, or social and environmental context.",
        },
        {
          heading: "Do not diagnose from albumin",
          body: "Albumin and prealbumin are influenced strongly by inflammation, capillary permeability, fluid status, organ function, and other factors. ASPEN does not recommend using them as proxy measures of total body protein or muscle mass, or as stand alone nutrition markers.",
        },
      ],
      keyPoints: ["GLIM requires both phenotype and etiology.", "Severity is not simply the number of criteria present.", "Albumin can inform risk and inflammation, but it does not diagnose malnutrition."],
      check: { question: "A patient has low BMI and reduced muscle mass but no evidence of reduced intake, malabsorption, or disease burden with inflammation. Does the patient meet GLIM diagnosis on the available data?", choices: ["No, an etiologic criterion is also required", "Yes, any single phenotypic criterion is sufficient", "Yes, two phenotypic criteria are always sufficient", "No, serum albumin must be low first"], answer: 0, rationale: "GLIM requires at least one phenotypic criterion and at least one etiologic criterion after risk screening.", reviewHref: "#diagnostic-frameworks" },
    },
    {
      "slug": "plan-monitor-communicate",
      "title": "Plan, Monitor, and Communicate",
      "visual": "nutrition-care-loop",
      "summary": "An assessment becomes a care plan when the team names the problem, acts on its cause, measures benefit and harm, and assigns the next decision.",
      "concepts": [
        "Causal barriers and team roles",
        "Risk-based safety monitoring",
        "Patient outcomes and process measures",
        "Fidelity and accountable follow-up"
      ],
      "application": "State the evidence and uncertainty, the proposed action and responsible clinician, the measure and goal, the review interval, and the finding that triggers escalation. Confirm that the receiving team can carry out the plan.",
      "lesson": [
        {
          "heading": "Connect cause to intervention",
          "body": "Investigate barriers such as nausea, constipation, dysphagia, pain, food access, and medicine effects before choosing an intervention. A symptom that follows a new medicine suggests a possible contribution, not proof of causation. Review its indication and alternatives with the prescriber, address other plausible causes, and measure the response. Coordinate dietitian, nursing, pharmacy, swallowing, and social support according to the problem; involve the patient in the plan."
        },
        {
          "heading": "Monitor benefit and harm from the start",
          "body": "Track actual intake and delivered feed, symptoms, weight with fluid balance, clinical condition, and relevant laboratory trends. The supplied book highlights glucose intolerance, electrolyte shifts, and fluid accumulation during parenteral nutrition. High refeeding risk calls for cautious, individualized initiation by an experienced team and planned surveillance, not aggressive feeding followed by optional monitoring. A new electrolyte decline or clinical deterioration requires prompt reassessment of feeding, replacement, and fluid management under the agreed protocol."
        },
        {
          "heading": "Choose intervals for the patient and setting",
          "body": "NICE CG32 provides adult nutrition-support monitoring examples. In hospital, initially assess intake daily and chart fluid balance during enteral or parenteral support. Check weight daily when fluid balance is a concern; otherwise use weekly weights, reducing frequency with stability. Its laboratory table calls for baseline tests, daily sodium, potassium, urea and creatinine until stable, glucose once or twice daily until stable, and daily magnesium and phosphate when refeeding risk is present. This table chiefly addresses parenteral nutrition and is selectively applicable to oral or enteral support. Acute instability may require more frequent assessment; these are not universal intervals for every patient."
        },
        {
          "heading": "Separate the patient result from delivery of care",
          "body": "Improved intake or relief of nausea is a patient outcome. Recording intake and completing an agreed medicine review are care processes. In the Proctor implementation framework, fidelity asks whether a pathway was delivered as intended; adherence to its required steps can be one fidelity measure. Adoption concerns initial uptake, acceptability asks whether the pathway is agreeable, and feasibility asks whether it can be carried out in the setting. A completed checklist does not itself prove clinical benefit. Document both the action taken and the patient response, with a named owner, next review, and agreed escalation threshold."
        }
      ],
      "keyPoints": [
        "Link the intervention to a supported cause and document uncertainty.",
        "Specify the measure, goal, interval, action threshold, and responsible clinician.",
        "Plan refeeding surveillance before support begins and adapt it to clinical changes.",
        "Measure patient benefit separately from completion of the care process."
      ],
      "check": {
        "question": "An adult inpatient has nausea and reduced intake. The team has agreed an intake goal and a safe medicine adjustment. Which follow-up plan is most actionable?",
        "choices": [
          "Name the nurse to record daily intake against the goal and the prescriber to review response tomorrow, with earlier contact for worsening symptoms or intake below the agreed threshold",
          "Name the nurse to record daily intake but leave the target and response to a low result unspecified",
          "Set an intake goal and a review tomorrow but leave who will assess and act unspecified",
          "Assign a prescriber to review the medicine at discharge without tracking the intake response"
        ],
        "answer": 0,
        "rationale": "The complete plan connects an agreed intervention with ownership, a measure and goal, a review time, and an earlier action trigger. The other plans each leave an essential part of that loop unspecified. The review time is part of this case plan, not a universal nutrition-monitoring interval.",
        "reviewHref": "#plan-monitor-communicate"
      }
    },
  ],
  references: [
    { label: "ASPEN: Screening, assessment, and malnutrition diagnostic processes", href: "https://nutritioncare.org/text-based-resource/key-nutrition-screening-assessment-and-malnutrition-diagnostic-processes-and-tools-for-adults/" },
    { label: "GLIM consensus approach, five year update", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12053077/" },
    { label: "ASPEN position paper on visceral proteins", href: "https://pubmed.ncbi.nlm.nih.gov/33125793/" },
    { label: "GLIM diagnostic criteria consensus report", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6438340/" },
    {"label": "NICE CG32: Adult nutrition support, recommendations and monitoring tables (updated 2017)", "href": "https://www.nice.org.uk/guidance/cg32/chapter/Recommendations"},
    {"label": "Proctor et al. (2011): Implementation outcomes and fidelity", "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3068522/"},
  ],
  cumulativeQuestionIds: ["nutrition-assessment-001", "nutrition-assessment-027", "nutrition-assessment-052", "nutrition-assessment-078", "nutrition-assessment-103", "nutrition-assessment-104", "nutrition-assessment-105"],
  questionBank: nutritionScreeningAssessmentQuestionBank,
};
