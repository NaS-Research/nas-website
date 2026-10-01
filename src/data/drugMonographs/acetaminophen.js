// Original summaries of the linked sources. Doses belong to the named product,
// not to every acetaminophen formulation. Recheck sources when revising content.
const label = (setid) => `https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=${setid}`;
export const acetaminophen = {
  slug: "acetaminophen",
  name: "Acetaminophen",
  synonym: "Paracetamol · APAP",
  description: "An analgesic and antipyretic for pain and fever. A focused reference for oral therapy, with formulation-specific guidance and links to current labeling.",
  checked: "2026-10-01",
  essential: { title: "One ingredient. Count every source.", text: "Avoid duplicate acetaminophen-containing medicines. Follow the exact product’s daily limit. Suspected overdose requires immediate medical assessment, even without symptoms.", section: "safety", link: "Warnings and precautions" },
  facts: [["Therapeutic class", "Nonopioid analgesic · Antipyretic"], ["Common brand", "Tylenol"], ["Reference focus", "Single-ingredient oral products"]],
  sources: [
    { id: "otc", title: "Tylenol Extra Strength · 500 mg", publisher: "DailyMed / Kenvue", note: "Drug Facts, product characteristics, and storage. Label updated January 21, 2026.", url: label("17cfa99d-abb2-4d77-9e0e-e77109fbb61a") },
    { id: "er", title: "Tylenol 8HR · 650 mg extended release", publisher: "DailyMed", note: "Formulation-specific dosage and administration.", url: label("5d7d1300-bcb8-466a-880b-310b360ee132") },
    { id: "child", title: "Children’s Tylenol · 160 mg / 5 mL", publisher: "DailyMed", note: "Pediatric suspension and weight-based product directions.", url: label("3162733b-9382-39f1-e063-6294a90ac420") },
    { id: "iv", title: "Acetaminophen injection · Prescribing information", publisher: "DailyMed", note: "Boxed warning, contraindications, interactions, and clinical pharmacology. Label updated September 21, 2026.", url: label("8481d9f3-d2a5-457f-b92c-99445d063c8f") },
    { id: "fda", title: "Acetaminophen · Safe use", publisher: "U.S. Food and Drug Administration", note: "Total exposure, hepatic injury, and serious skin reactions.", url: "https://www.fda.gov/drugs/safe-use-over-counter-pain-relievers-and-fever-reducers/acetaminophen" },
    { id: "patient", title: "Acetaminophen · Patient information", publisher: "MedlinePlus", note: "Administration, adverse reactions, counseling, and overdose guidance.", url: "https://medlineplus.gov/druginfo/meds/a681004.html" },
    { id: "lactation", title: "Acetaminophen · Lactation", publisher: "LactMed / National Library of Medicine", note: "Milk transfer and reported infant effects. Revised April 15, 2026.", url: "https://www.ncbi.nlm.nih.gov/books/NBK501194/" },
    { id: "pregnancy", title: "Pregnancy · FDA safety communication", publisher: "U.S. Food and Drug Administration", note: "September 22, 2025 communication; an association does not establish causation.", url: "https://www.fda.gov/news-events/press-announcements/fda-responds-evidence-possible-association-between-autism-and-acetaminophen-use-during-pregnancy" },
    { id: "acog", title: "Pregnancy · ACOG practice advisory", publisher: "American College of Obstetricians and Gynecologists", note: "Professional guidance on pregnancy and neurodevelopmental outcomes.", url: "https://www.acog.org/clinical/clinical-guidance/practice-advisory/articles/2025/09/acetaminophen-use-in-pregnancy-and-neurodevelopmental-outcomes" },
  ],
  sections: [
    {
      id: "indications", title: "Indications", summary: "Temporary relief of pain and fever.", takeaway: "Confirm the indication and formulation before selecting a dose.",
      blocks: [{ title: "Labeled oral indications", open: true, paragraphs: ["Temporary relief of minor pain, including headache, toothache, backache, muscle aches, menstrual pain, and minor arthritis pain; reduction of fever."], sources: ["otc"] },
        { title: "Intravenous therapy", paragraphs: ["For IV indications and dosing, consult the linked prescribing information. Oral OTC directions do not apply."], sources: ["iv"] }],
    },
    {
      id: "dosage", title: "Dosage and administration", summary: "Match the directions to the exact product.", takeaway: "The selected 500 mg product allows 3,000 mg in 24 hours. Count acetaminophen from every source.",
      blocks: [
        { title: "Immediate-release oral caplets · 500 mg", open: true, badge: "Age 12 years and older", table: { headers: ["Parameter", "Tylenol Extra Strength directions"], rows: [["Dose", "1,000 mg (two 500 mg caplets)"], ["Interval", "Every 6 hours as needed"], ["Product maximum", "3,000 mg (six caplets) in 24 hours unless directed by a physician"], ["Duration", "No more than 10 days unless directed by a physician"]] }, paragraphs: ["These directions belong to this specific product. A 4,000 mg total daily ceiling is not permission to exceed its 3,000 mg label limit."], sources: ["otc", "fda"] },
        { title: "Extended-release oral caplets · 650 mg", badge: "Age 12 years and older", paragraphs: ["For the linked Tylenol 8HR product: 1,300 mg (two caplets) every 8 hours with water; no more than six caplets (3,900 mg) in 24 hours. Swallow whole. Do not split, crush, chew, or dissolve. Do not use for more than 10 days without physician direction. Children under 12: do not use this product."], sources: ["er"] },
        { title: "Pediatric oral suspension · 160 mg / 5 mL", paragraphs: ["The linked Children’s Tylenol product uses the chart below. Prefer weight when known. Repeat every 4 hours as needed, with no more than five doses in 24 hours. Shake well and use the enclosed dosing cup. Under age 2 years or under 24 lb: ask a doctor."], table: { headers: ["Weight", "Age", "Dose"], rows: [["24–35 lb", "2–3 years", "5 mL"], ["36–47 lb", "4–5 years", "7.5 mL"], ["48–59 lb", "6–8 years", "10 mL"], ["60–71 lb", "9–10 years", "12.5 mL"], ["72–95 lb", "11 years", "15 mL"]] }, sources: ["child"] },
        { title: "Hepatic and renal impairment", paragraphs: ["Liver disease warrants clinician review before oral use. The IV label contraindicates severe hepatic impairment or severe active liver disease. For severe renal impairment (creatinine clearance ≤30 mL/min), longer intervals and a lower total daily dose may be warranted; follow the product label and individualized plan."], sources: ["otc", "iv"] },
      ],
    },
    {
      id: "safety", title: "Safety", summary: "Hepatic injury, hypersensitivity, and serious skin reactions.", takeaway: "Suspected overdose needs immediate assessment, even without symptoms.",
      blocks: [
        { title: "Warnings and precautions", open: true, tone: "warning", paragraphs: ["Excess exposure can cause acute liver failure. Avoid duplicate acetaminophen-containing medicines, including cold remedies and prescription combinations. Hepatic risk also increases with three or more alcoholic drinks daily during use.", "Stop treatment and obtain medical attention for a new rash, blistering, or skin peeling. Serious reactions can occur despite prior uneventful use."], sources: ["fda"] },
        { title: "Contraindications", paragraphs: ["Do not use with known acetaminophen or product-ingredient allergy. A prior serious acetaminophen skin reaction precludes re-exposure. Severe hepatic impairment or severe active liver disease is a contraindication in the IV label."], sources: ["otc", "fda", "iv"] },
        { title: "Boxed warning · Intravenous formulation", paragraphs: ["Acetaminophen injection carries a boxed warning for medication errors and hepatotoxicity. Check mg versus mL, weight-based dosing, pump settings, and total exposure across products and routes. The oral OTC product instead carries Drug Facts liver and allergy warnings."], sources: ["iv", "otc"] },
        { title: "Adverse reactions", paragraphs: ["Serious reactions include liver injury, anaphylaxis, and severe cutaneous reactions. Jaundice, dark urine, or upper abdominal pain requires assessment. In adult IV trials, commonly reported events included nausea, vomiting, headache, and insomnia; these trial frequencies should not be applied to oral OTC use."], sources: ["patient", "iv"] },
      ],
    },
    {
      id: "interactions", title: "Drug interactions", summary: "Reconcile prescription and nonprescription medicines.", takeaway: "Duplicate ingredients and warfarin deserve particular attention.",
      blocks: [{ title: "Clinically relevant interactions", open: true, items: ["Other acetaminophen products: additive exposure increases overdose risk. Check for APAP on prescription labels.", "Warfarin: sustained use can increase INR; arrange monitoring with the treating clinician.", "Alcohol: review consumption and hepatic risk before treatment."], sources: ["fda", "iv"] }],
    },
    {
      id: "populations", title: "Use in specific populations", summary: "Consider age, pregnancy, lactation, and organ function.", takeaway: "Pregnancy decisions require individualized discussion; association does not establish causation.",
      blocks: [
        { title: "Pregnancy", paragraphs: ["Discuss the indication, dose, and duration with the obstetric clinician. FDA’s September 2025 communication raised a possible association with neurodevelopmental outcomes but states that causation has not been established. ACOG’s advisory states that current evidence does not support a causal link and supports judicious use when clinically needed."], sources: ["pregnancy", "acog"] },
        { title: "Lactation", paragraphs: ["LactMed considers acetaminophen an appropriate option for pain and fever during breastfeeding. Milk exposure is substantially below usual infant treatment doses; reported adverse infant effects are uncommon."], sources: ["lactation"] },
        { title: "Pediatric and geriatric considerations", paragraphs: ["Use a pediatric product and its weight-based directions for children. For older adults, reconcile combination medicines and assess liver disease, alcohol exposure, and renal function before selecting a regimen."], sources: ["patient", "fda", "iv"] },
      ],
    },
    {
      id: "pharmacology", title: "Clinical pharmacology", summary: "Mechanism, disposition, and toxicity pathway.", takeaway: "Hepatic metabolism produces a reactive intermediate normally detoxified by glutathione.",
      blocks: [
        { title: "Mechanism of action and pharmacodynamics", paragraphs: ["The exact analgesic and antipyretic mechanism remains incompletely defined; central actions are thought to predominate."], sources: ["iv"] },
        { title: "Pharmacokinetics", facts: [["Metabolism", "Hepatic glucuronidation and sulfation; a smaller oxidative pathway forms NAPQI, normally detoxified by glutathione."], ["Elimination", "Predominantly urinary metabolites."], ["Half-life", "Mean 2.4 hours in the adult IV study; varies with population and clinical condition."]], sources: ["iv"] },
      ],
    },
    {
      id: "practice", title: "Monitoring and counseling", summary: "Assess response, exposure, and warning symptoms.", takeaway: "Write down the product strength, dose interval, and daily maximum.",
      blocks: [
        { title: "Monitoring parameters", open: true, items: ["Track pain or temperature response and the total daily acetaminophen dose.", "Reassess persistent or worsening symptoms. Adult pain beyond 10 days or fever beyond 3 days warrants clinician review.", "Monitor INR when clinically indicated with warfarin; evaluate hepatic concerns promptly."], sources: ["patient", "iv"] },
        { title: "Patient counseling information", items: ["Check every medicine for acetaminophen or APAP before combining products.", "Take only the labeled dose and interval. Do not double a missed dose.", "Liquids: verify concentration, shake suspensions, and use the supplied measuring device.", "For suspected overdose, call U.S. Poison Control at 1-800-222-1222 immediately, even if feeling well. Call 911 for collapse, seizure, impaired breathing, or inability to awaken."], sources: ["patient", "fda"] },
      ],
    },
    {
      id: "product", title: "Product identification", summary: "Verify the product, strength, and original packaging.", takeaway: "Appearance and NDC are product-specific. A photograph alone cannot identify a medicine safely.",
      blocks: [
        { title: "Representative oral product · Tylenol Extra Strength", open: true, facts: [["Dosage form / strength", "Film-coated oral caplet · 500 mg"], ["Label packager", "Kenvue Brands LLC"], ["Appearance", "White, oval, unscored · 19 mm"], ["Imprint", "TYLENOL · 500"], ["Example package NDC", "50580-378-02 · 100 caplets"]], paragraphs: ["Other manufacturers’ tablets may differ. Confirm the imprint and packaging with a pharmacist."], links: [{ title: "View manufacturer product photos", url: "https://www.tylenol.com/products/headache-pain-relief/tylenol-extra-strength-caplets" }, { title: "View exact product label and package images", url: label("17cfa99d-abb2-4d77-9e0e-e77109fbb61a") }], sources: ["otc"] },
        { title: "Dosage forms and strengths", facts: [["Immediate-release oral", "500 mg caplets in the representative product above."], ["Extended-release oral", "650 mg caplets in the linked Tylenol 8HR product."], ["Pediatric oral liquid", "160 mg / 5 mL in the linked Children’s Tylenol suspension."], ["Intravenous", "10 mg/mL in the linked injection label; professional administration required."], ["Additional forms", "Other tablet strengths, chewables, liquids, powders, and rectal suppositories have their own product labels."]], sources: ["otc", "er", "child", "iv", "fda"] },
        { title: "Storage and handling", paragraphs: ["The representative 500 mg caplet label specifies 20–25°C (68–77°F). Retain original packaging and keep medicines out of children’s sight and reach. Check each formulation’s storage instructions."], sources: ["otc", "patient"] },
      ],
    },
  ],
};
