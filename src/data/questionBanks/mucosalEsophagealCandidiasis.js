const concepts = [
  ["candida-ecology", "Candida can colonize healthy mucosa, so diagnosis requires a compatible clinical syndrome rather than organism detection alone.", "Use lesion pattern, symptoms, host factors, and treatment history to distinguish colonization from disease.", "Treating colonization without symptoms promotes avoidable toxicity and resistance."],
  ["immune-risk", "Oropharyngeal and esophageal candidiasis often signal impaired cell-mediated immunity, especially when CD4 is below 200 cells/mm3.", "Evaluate HIV control, immune status, diabetes, corticosteroids, antibiotics, dentures, xerostomia, and nutrition.", "Repeatedly prescribing antifungals without investigating immune or local drivers misses the system failure."],
  ["oral-pattern", "Oropharyngeal candidiasis commonly produces removable white plaques, erythema, soreness, altered taste, or angular cheilitis.", "Inspect the entire oral cavity and document whether plaques remove and what lies beneath.", "Assuming every white oral lesion is Candida can miss leukoplakia, lichen planus, viral disease, or malignancy."],
  ["esophageal-pattern", "Odynophagia, dysphagia, substernal discomfort, food sticking, weight loss, or dehydration in an immunocompromised host raises concern for esophageal candidiasis.", "Treat the esophageal compartment systemically and assess hydration, nutrition, pill swallowing, and alternative causes.", "Topical oral therapy alone cannot reliably treat esophageal disease."],
  ["diagnostic-trial", "A therapeutic trial of systemic fluconazole is appropriate before endoscopy in a typical esophageal presentation.", "Expect meaningful symptom improvement within about 7 days and perform endoscopy when response is absent or the diagnosis is atypical.", "Continuing ineffective empiric therapy beyond 7 days can delay diagnosis of CMV, HSV, resistant Candida, or another lesion."],
  ["oral-fluconazole", "Preferred initial oropharyngeal therapy is fluconazole 200 mg once, then 100 to 200 mg daily for 7 to 14 days.", "Use systemic therapy when disease is moderate, severe, recurrent, high-risk, or may extend into the esophagus.", "An incomplete course or unreviewed interactions can create failure or harm."],
  ["oral-topical", "Miconazole buccal, clotrimazole troches, or nystatin are alternatives for selected mild localized oropharyngeal disease.", "Match dosage form to contact time, dexterity, cognition, saliva, allergy, interactions, and adherence burden.", "Choosing a local product for odynophagia mistakes oral exposure for esophageal exposure."],
  ["esophageal-fluconazole", "Preferred esophageal therapy is fluconazole 200 mg loading, then 100 to 200 mg, up to 400 mg, daily for 14 to 21 days.", "Choose oral, suspension, or IV delivery from swallowing ability and clinical stability, then step to oral when feasible.", "Stopping when pain first improves leaves the recommended treatment course incomplete."],
  ["systemic-required", "Esophageal candidiasis always requires systemic antifungal therapy.", "Do not substitute nystatin, clotrimazole troches, or miconazole buccal tablets for systemic treatment.", "Topical monotherapy for esophageal disease risks persistent infection, poor intake, and delayed alternative diagnosis."],
  ["iv-alternatives", "When oral fluconazole cannot be used, IV fluconazole or an echinocandin can treat esophageal candidiasis; lipid amphotericin and other systemic azoles are alternatives in selected patients.", "Select the alternative from prior exposure, species, susceptibility, organ function, interactions, pregnancy, route, and cost.", "Assuming every systemic antifungal has the same relapse profile ignores higher relapse reported after echinocandins."],
  ["species", "C. albicans causes most mucosal disease, while C. glabrata, C. krusei, and other species become more relevant after repeated azole exposure or refractory infection.", "Obtain culture and susceptibility evidence when disease is refractory or recurrent and species may change treatment.", "Escalating fluconazole indefinitely without organism evidence can amplify resistance."],
  ["refractory-definition", "Persistent symptoms after appropriate therapy require an audit of diagnosis, adherence, exposure, interactions, species, susceptibility, immune status, and compartment.", "Perform endoscopy for esophageal nonresponse within 7 days and obtain directed specimens.", "Labeling all nonresponse as resistance before checking exposure and alternative diagnoses creates poor care."],
  ["refractory-options", "Itraconazole solution, posaconazole, voriconazole, isavuconazole, echinocandins, or lipid amphotericin can serve selected refractory roles.", "Base salvage selection on previous azoles, isolate susceptibility, site, organ function, interactions, route, pregnancy, and guideline strength.", "Itraconazole capsules are less reliable for esophageal disease because absorption is variable."],
  ["fluconazole-pk", "Fluconazole has high oral bioavailability, penetrates saliva and esophageal tissue, is primarily renally eliminated, and inhibits CYP enzymes.", "Adjust the dosing interval or dose for renal function after any loading dose as current guidance and patient status require.", "Ignoring renal decline can increase exposure and toxicity."],
  ["fluconazole-safety", "Fluconazole can cause hepatotoxicity, QT prolongation, rash, gastrointestinal effects, and clinically important interactions.", "Review liver function, QT risk, renal function, pregnancy, ART, warfarin, anticonvulsants, statins, and other interacting drugs.", "Adding fluconazole to multiple QT-prolonging or CYP-dependent medicines without review can cause preventable harm."],
  ["azole-resistance", "Repeated or prolonged azole exposure can select resistant Candida through target alteration, efflux, or pathway adaptation.", "Use the narrowest effective regimen and avoid chronic suppression unless recurrences justify it.", "Routine prophylaxis for every patient with low CD4 increases resistance pressure without proven benefit."],
  ["chronic-suppression", "Chronic suppressive therapy is usually unnecessary, but frequent or severe recurrences can justify fluconazole 100 mg daily or three times weekly for oropharyngeal disease and 100 to 200 mg daily for esophageal disease.", "Reassess recurrence frequency, ART control, resistance, toxicity, interactions, and continued need regularly.", "Indefinite suppression without review can foster resistance and interaction harm."],
  ["art", "Effective ART is the primary long-term prevention strategy for recurrent mucosal candidiasis in HIV.", "Start or optimize ART and address adherence while treating the acute Candida episode.", "Antifungal therapy without immune restoration leaves the main recurrence driver untreated."],
  ["no-primary-prophylaxis", "Primary antifungal prophylaxis is not routinely recommended for mucosal candidiasis because disease is treatable and chronic azole exposure promotes resistance and interactions.", "Use symptom recognition, prompt treatment, and immune restoration instead of universal prophylaxis.", "Routine azole prophylaxis exposes patients without sufficient benefit."],
  ["local-drivers", "Dentures, inhaled corticosteroids, xerostomia, poor oral hygiene, diabetes, and antibiotics can sustain oropharyngeal Candida disease.", "Correct device hygiene, inhaler technique and rinsing, glycemic control, xerostomia, and avoidable antibiotic exposure.", "Treating the fungus while preserving every local driver invites recurrence."],
  ["nutrition-hydration", "Esophageal pain can impair intake and medication adherence, causing dehydration, weight loss, and failure of both antifungal and ART plans.", "Assess swallowing, hydration, nutrition, analgesia, formulation, and route at every transition.", "A technically correct oral regimen can fail when the patient cannot swallow it."],
  ["pregnancy", "Topical therapy is preferred for oral candidiasis in pregnancy; systemic decisions require trimester-specific risk assessment, and amphotericin may replace fluconazole for invasive or refractory esophageal disease in the first trimester.", "Use current narrative pregnancy and lactation evidence with obstetric and infectious-disease expertise.", "Applying obsolete pregnancy letters or routine systemic azoles in early pregnancy ignores current risk framing."],
  ["monitor-response", "Oral lesions, pain, swallowing, intake, weight, adherence, adverse effects, and immune recovery are practical response measures.", "Define an expected response date and an escalation pathway before treatment begins.", "Follow-up without a time threshold allows persistent disease to become a new baseline."],
  ["differentiate-invasive", "Mucosal candidiasis is distinct from candidemia and deep invasive candidiasis even though the organism genus overlaps.", "Look for systemic instability, bloodstream risk, organ involvement, devices, and cultures when invasive disease is possible.", "Using a mucosal regimen for candidemia can be fatal."],
  ["closed-loop", "Complete care links compartment, host, organism probability, product, route, exposure, interactions, response, ART, and recurrence prevention.", "Assign ownership for pending cultures, endoscopy, medication access, interaction changes, follow-up, and escalation.", "A prescription without follow-through leaves diagnostic and treatment failure invisible."],
  ["population-fit", "Age, pregnancy, lactation, organ function, immune status, swallowing ability, cognition, dexterity, saliva, and medication burden can change the safest effective product.", "Select the exact formulation and monitoring plan from the patient's clinical and practical constraints rather than from drug name alone.", "Do not treat a product as suitable merely because its active ingredient appears in a guideline."],
  ["renal-route-transition", "A fluconazole loading dose establishes exposure promptly, while subsequent dosing and route must reflect kidney function, swallowing, stability, and recovery.", "Document the renal plan and the objective conditions for intravenous, suspension, or tablet transitions before treatment begins.", "Do not omit loading solely because maintenance exposure requires renal adjustment."],
  ["integrated-triage", "Initial triage identifies oral, esophageal, or invasive disease and names host risk, severity, hydration, nutrition, and immediate threats before therapy is selected.", "Stabilize intake and systemic illness, choose compartment-appropriate exposure, and define the response deadline and escalation pathway.", "Do not apply a mild oral topical pathway to odynophagia, dehydration, or systemic instability."],
  ["followup-ownership", "Closed-loop care assigns every culture, endoscopy decision, medication-access issue, interaction change, response checkpoint, ART need, and recurrence driver to a named owner and date.", "Use the expected clinical trajectory to decide when to continue, change, investigate, or escalate therapy.", "Do not let early pain improvement erase the full duration, diagnostic, or prevention plan."],
];

const lessonByConcept = {
  "candida-ecology": "ecology-syndrome",
  "immune-risk": "ecology-syndrome",
  "differentiate-invasive": "ecology-syndrome",
  "oral-pattern": "oral-diagnosis",
  "local-drivers": "oral-diagnosis",
  "esophageal-pattern": "esophageal-diagnosis",
  "diagnostic-trial": "esophageal-diagnosis",
  "nutrition-hydration": "esophageal-diagnosis",
  "oral-fluconazole": "oropharyngeal-treatment",
  "oral-topical": "oropharyngeal-treatment",
  "esophageal-fluconazole": "esophageal-treatment",
  "systemic-required": "esophageal-treatment",
  "iv-alternatives": "esophageal-treatment",
  species: "refractory-disease",
  "refractory-definition": "refractory-disease",
  "refractory-options": "refractory-disease",
  "azole-resistance": "refractory-disease",
  "fluconazole-pk": "safety-pk",
  "fluconazole-safety": "safety-pk",
  "chronic-suppression": "prevention-art",
  art: "prevention-art",
  "no-primary-prophylaxis": "prevention-art",
  pregnancy: "pregnancy-populations",
  "population-fit": "pregnancy-populations",
  "renal-route-transition": "pregnancy-populations",
  "monitor-response": "integrated-case",
  "closed-loop": "integrated-case",
  "integrated-triage": "integrated-case",
  "followup-ownership": "integrated-case",
};

const dimensions = [["principle", "Which statement is most accurate?", 0], ["action", "Which action best applies the evidence?", 1], ["assessment", "Which plan demonstrates the strongest clinical reasoning?", 1], ["hazard", "Which error creates the greatest avoidable risk?", 2]];
const generic = ["Use one isolated finding without checking compartment, host, or treatment exposure.", "Continue the same plan despite objective nonresponse and no diagnostic reassessment.", "Assume every Candida syndrome and antifungal formulation is interchangeable."];

export const mucosalEsophagealCandidiasisQuestionBank = concepts.flatMap(([slug, principle, action, hazard], conceptIndex) => {
  const lesson = lessonByConcept[slug];

  if (!lesson) {
    throw new Error(`Missing mucosal candidiasis lesson mapping for ${slug}`);
  }

  return dimensions.map(([dimension, stem, answerType], dimensionIndex) => {
    const correct = [principle, action, hazard][answerType];
    const choices = dimension === "hazard" ? [hazard, principle, action, generic[(conceptIndex + dimensionIndex) % 3]] : [correct, hazard, generic[(conceptIndex + dimensionIndex) % 3], generic[(conceptIndex + dimensionIndex + 1) % 3]];
    return { id: `mucosal-esophageal-candidiasis-${String(conceptIndex * 4 + dimensionIndex + 1).padStart(3, "0")}`, question: `${stem} Focus: ${slug.replaceAll("-", " ")}.`, choices, answer: 0, rationale: `${principle} ${action}`, reviewHref: `#${lesson}`, difficulty: dimensionIndex < 2 ? "foundational" : "advanced" };
  });
});
