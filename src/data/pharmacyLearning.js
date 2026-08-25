export const pharmacyCollections = [
  {
    slug: "foundations",
    number: "01",
    title: "Drug Action and Therapeutic Foundations",
    description: "Begin with the principles that explain what a drug is, how it reaches its target, and how its effects become a therapeutic decision.",
    topics: ["Drug targets and mechanisms", "Structure and activity", "Pharmacokinetics and pharmacodynamics", "Formulations, calculations, and evidence"],
  },
  {
    slug: "nutrition-ans-cardiovascular-one",
    number: "02",
    title: "Nutrition, ANS, and Cardiovascular I",
    description: "Connect nutrition and autonomic signaling to the first major cardiovascular treatment frameworks.",
    topics: ["Nutrition and supplementation", "Autonomic pharmacology", "Hypertension", "Lipids and ischemic heart disease"],
  },
  {
    slug: "cardiovascular-two-renal",
    number: "03",
    title: "Cardiovascular II and Renal",
    description: "Advance from cardiovascular control into rhythm, circulation, renal function, fluid balance, and medication selection.",
    topics: ["Heart failure", "Arrhythmias", "Thrombosis and anticoagulation", "Renal, fluid, and electrolyte therapy"],
  },
  {
    slug: "endocrine-pulmonary-genitourinary",
    number: "04",
    title: "Endocrine, Pulmonary, and Genitourinary",
    description: "Study hormone regulation, respiration, reproduction, and urinary function through their shared physiology and therapeutics.",
    topics: ["Diabetes and endocrine disorders", "Pulmonary and allergy care", "Genitourinary therapeutics", "Reproductive and bone health"],
  },
  {
    slug: "gastrointestinal-immunology-cns-one",
    number: "05",
    title: "Gastrointestinal, Immunology, and CNS I",
    description: "Move through digestion, inflammation, immune regulation, and the first major psychiatric treatment frameworks.",
    topics: ["Gastrointestinal and hepatic care", "Inflammatory and immune disorders", "Depression and anxiety", "Psychosis and mood disorders"],
  },
  {
    slug: "cns-two-acute-care",
    number: "06",
    title: "CNS II and Acute Care",
    description: "Extend central nervous system therapeutics into neurologic disease, pain, emergencies, and rapidly changing patients.",
    topics: ["Seizures and neurologic disorders", "Pain and migraine", "Critical care pharmacotherapy", "Acute stabilization and monitoring"],
  },
  {
    slug: "infectious-disease",
    number: "07",
    title: "Infectious Disease",
    description: "Build antimicrobial decisions from organism, site, patient, resistance, exposure, and stewardship.",
    topics: ["Antibacterial foundations", "Syndrome based treatment", "Fungal and opportunistic infections", "Resistance and stewardship"],
  },
  {
    slug: "virology-oncology-toxicology",
    number: "08",
    title: "Virology, Oncology, and Toxicology",
    description: "Finish the sequence with viral disease, cancer pharmacology, supportive care, poisoning, and antidote selection.",
    topics: ["Antiviral therapy", "Cancer biology and treatment", "Oncology supportive care", "Toxicology and antidotes"],
  },
];

export const pharmacyLessons = [
  {
    slug: "drug-formulations-and-routes",
    title: "Drug Formulations and Routes of Administration",
    shortTitle: "Formulations and Routes",
    collection: "Drug Action and Therapeutic Foundations",
    collectionSlug: "foundations",
    level: "Foundation",
    readTime: "14 min study",
    date: "August 24, 2026",
    dateISO: "2026-08-24",
    reviewedDate: "August 24, 2026",
    reviewedDateISO: "2026-08-24",
    version: "1.0",
    description:
      "A practical framework for distinguishing route, dosage form, release behavior, site of action, and the counseling decisions that connect them.",
    objectives: [
      "Distinguish a route of administration from a dosage form.",
      "Explain how formulation and route can change onset, duration, absorption, and patient use.",
      "Recognize common modified release language without assuming products are interchangeable.",
      "Use a consistent safety check before recommending that a dosage form be altered.",
    ],
    keyIdeas: [
      { label: "Route", value: "Where and how the medication enters or contacts the body" },
      { label: "Dosage form", value: "The physical form that carries and releases the drug" },
      { label: "Release design", value: "How quickly, where, or for how long the drug becomes available" },
      { label: "Clinical question", value: "What must this product accomplish for this patient?" },
    ],
    sections: [
      {
        id: "two-different-decisions",
        title: "1. Two Different Decisions",
        paragraphs: [
          "Route and dosage form describe different parts of a medication product. The route describes where and how the medication is administered. The dosage form describes the physical system that contains the drug, such as a tablet, solution, cream, aerosol, or transdermal system.",
          "Those decisions are connected, but they are not interchangeable. A medication can be delivered through the same route in several dosage forms, and a familiar dosage form does not guarantee the same release pattern or clinical behavior as another product. Reading the complete product description is therefore more useful than recognizing only the drug name.",
        ],
        callout: {
          label: "Core distinction",
          text: "Route answers where the medication goes. Dosage form answers what physical system delivers it.",
        },
      },
      {
        id: "what-formulation-controls",
        title: "2. What the Formulation Controls",
        paragraphs: [
          "A formulation is an engineered delivery system. It can influence stability before administration, the rate and location of drug release, ease of measurement, local tolerability, and whether a patient can use the medication correctly. These properties can affect exposure even when the active ingredient is unchanged.",
          "Immediate release products generally make drug available without a deliberate prolonged release mechanism. Delayed release products are designed to release later, often after passing a particular environment. Extended release products are designed to release drug over a longer interval. The exact behavior belongs to the individual product, not merely to the abbreviation printed after its name.",
        ],
        points: [
          "Do not treat IR, DR, ER, XR, XL, LA, SR, and similar labels as universal engineering specifications.",
          "Do not assume two formulations can be substituted dose for dose unless authoritative product information supports it.",
          "Do not crush, split, dissolve, or open a product based only on its appearance.",
        ],
      },
      {
        id: "route-changes-the-journey",
        title: "3. Route Changes the Journey",
        paragraphs: [
          "Oral products travel through the gastrointestinal tract before drug reaches systemic circulation. Sublingual and buccal products are placed against oral mucosa. Inhaled products enter the respiratory tract. Topical products act primarily where they are applied, while transdermal systems are designed to move drug through the skin into systemic circulation. Parenteral administration includes injection, infusion, or implantation.",
          "The route can change how quickly effect begins, which biological barriers matter, how much technique influences delivery, and whether the goal is local or systemic action. It also changes the practical burden placed on the patient. Swallowing ability, dexterity, vision, cognition, respiratory technique, skin integrity, access to equipment, and comfort with administration can all change whether a theoretically suitable product works in real life.",
        ],
        comparison: [
          { route: "Oral", purpose: "Usually systemic", watch: "Swallowing, food instructions, release design" },
          { route: "Sublingual or buccal", purpose: "Systemic through oral mucosa", watch: "Placement and product specific instructions" },
          { route: "Inhalation", purpose: "Local or systemic", watch: "Device technique and respiratory ability" },
          { route: "Topical", purpose: "Usually local", watch: "Application site, amount, and contact precautions" },
          { route: "Transdermal", purpose: "Systemic", watch: "Adhesion, application schedule, heat, and disposal" },
          { route: "Parenteral", purpose: "Local or systemic", watch: "Sterility, access, technique, and formulation" },
        ],
      },
      {
        id: "a-pharmacists-check",
        title: "4. A Pharmacist's Check",
        paragraphs: [
          "When a patient cannot use a product as intended, the question is not simply whether the product can be changed. The safer question is whether the drug, route, formulation, release mechanism, dose, and patient needs still align after the proposed change.",
          "Start with the current FDA approved labeling and product specific instructions. Confirm whether the dosage form can be manipulated, whether administration with food changes exposure, whether a measuring device is required, and whether an alternative formulation or route exists. When the answer remains uncertain, consult a pharmacist, the manufacturer, or another authoritative medication information source before administration.",
        ],
        steps: [
          { number: "01", title: "Identify", text: "Confirm the exact drug, strength, dosage form, release designation, and route." },
          { number: "02", title: "Define the obstacle", text: "Name the real problem, such as dysphagia, technique, access, intolerance, or adherence." },
          { number: "03", title: "Check the product", text: "Use current labeling and product specific information, not visual similarity or memory alone." },
          { number: "04", title: "Preserve the intent", text: "Confirm that any alternative still provides the intended dose, exposure, timing, and site of action." },
        ],
      },
      {
        id: "counseling-as-engineering",
        title: "5. Counseling Completes the Delivery System",
        paragraphs: [
          "A dosage form can be well designed and still fail if its use is misunderstood. Counseling is the final part of the delivery system. It translates product design into actions a patient can repeat correctly outside the pharmacy or clinic.",
          "Useful counseling is specific and observable. Instead of saying to use a product correctly, explain what to do, when to do it, what not to change, how to recognize a problem, and where to find help. Ask the patient to show or explain the process back when technique matters.",
        ],
        callout: {
          label: "Working principle",
          text: "The best formulation is not the most sophisticated one. It is the one that safely produces the intended effect and can be used correctly by the patient in front of you.",
        },
      },
      {
        id: "study-check",
        title: "6. Study Check",
        paragraphs: [
          "Use these questions to test the framework. Open each response only after committing to an answer.",
        ],
        questions: [
          {
            question: "A tablet and an oral solution contain the same active ingredient. What information is still needed before treating them as interchangeable?",
            answer: "Confirm strength and concentration, dose equivalence, release characteristics, bioavailability, administration instructions, and whether product labeling supports the substitution.",
          },
          {
            question: "Why is a transdermal system not simply a topical medication in patch form?",
            answer: "A transdermal system is designed to deliver drug through the skin into systemic circulation. A topical product usually aims for an effect at the application site. The intended destination is different.",
          },
          {
            question: "What is the safest first response when a patient asks whether a tablet can be crushed?",
            answer: "Identify the exact product and consult current product specific information. Release design, coating, stability, exposure risk, and available alternatives can change the answer.",
          },
        ],
      },
    ],
    takeaways: [
      "Route and dosage form answer different questions.",
      "Formulation is part of the medication's clinical behavior, not decorative packaging.",
      "Local and systemic delivery must be distinguished clearly.",
      "Product specific information should guide manipulation and substitution decisions.",
      "Patient capability and counseling determine whether the delivery system works in practice.",
    ],
    sources: [
      {
        title: "FDA: Route of Administration",
        url: "https://www.fda.gov/drugs/data-standards-manual-monographs/route-administration",
      },
      {
        title: "FDA: Dosage Forms",
        url: "https://www.fda.gov/industry/structured-product-labeling-resources/dosage-forms",
      },
      {
        title: "FDA: Prescribing Information Resources",
        url: "https://www.fda.gov/drugs/fdas-labeling-resources-human-prescription-drugs/prescribing-information-resources",
      },
      {
        title: "FDA: Overview and Basics of Generic Drugs",
        url: "https://www.fda.gov/drugs/generic-drugs/overview-basics",
      },
    ],
  },
];

export function getPharmacyLesson(slug) {
  return pharmacyLessons.find((lesson) => lesson.slug === slug);
}
