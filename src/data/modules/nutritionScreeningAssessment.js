import { nutritionScreeningAssessmentQuestionBank } from "@/data/questionBanks/nutritionScreeningAssessment";

export const nutritionScreeningAssessmentModule = {
  slug: "nutrition-screening-assessment",
  number: "01",
  title: "Nutrition Screening, Assessment, and Malnutrition",
  source: "DAST II · Nutrition",
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
      slug: "plan-monitor-communicate",
      title: "Plan, Monitor, and Communicate",
      summary: "The assessment matters only when it changes care. A complete plan states the problem, intervention, surveillance, and decision points.",
      concepts: ["Problem prioritization", "Interdisciplinary intervention", "Medication review", "Outcome and safety monitoring"],
      application: "Write a plan that another clinician can execute. Include who will act, what will be measured, when it will be measured, and what finding will trigger escalation.",
      lesson: [
        {
          heading: "Connect cause to intervention",
          body: "Address reversible barriers such as nausea, constipation, dysphagia, pain, food access, medication timing, and overly restrictive diets. Coordinate with dietitians, nurses, prescribers, speech language pathology, social work, and the patient according to the problem identified.",
        },
        {
          heading: "Monitor both benefit and harm",
          body: "Follow intake, weight trajectory, volume status, symptoms, physical findings, function, and relevant laboratory data. A high risk patient who begins aggressive nutrition support may also require focused surveillance for electrolyte shifts, glycemic complications, fluid intolerance, and refeeding risk.",
        },
      ],
      keyPoints: ["A monitoring plan needs a measure, interval, goal, and action threshold.", "Reconcile medicines that may worsen intake or gastrointestinal tolerance.", "Escalate urgently when severe intake restriction, unsafe swallowing, major electrolyte risk, or rapid decline is present."],
      check: { question: "Which follow up plan is most actionable?", choices: ["Record meal intake each shift, measure weight under consistent conditions twice weekly, and reassess barriers in 72 hours", "Monitor nutrition", "Repeat every laboratory test daily forever", "Wait until discharge to reassess"], answer: 0, rationale: "An actionable plan identifies what will be measured, how often it will be measured, and when the team will reassess the cause and response.", reviewHref: "#plan-monitor-communicate" },
    },
  ],
  references: [
    { label: "ASPEN: Screening, assessment, and malnutrition diagnostic processes", href: "https://nutritioncare.org/text-based-resource/key-nutrition-screening-assessment-and-malnutrition-diagnostic-processes-and-tools-for-adults/" },
    { label: "GLIM consensus approach, five year update", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12053077/" },
    { label: "ASPEN position paper on visceral proteins", href: "https://pubmed.ncbi.nlm.nih.gov/33125793/" },
    { label: "GLIM diagnostic criteria consensus report", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6438340/" },
  ],
  questionBank: nutritionScreeningAssessmentQuestionBank,
};
