import { genitalHerpesQuestionBank } from "@/data/questionBanks/genitalHerpes";

const check = (question, choices, rationale, slug) => ({ question, choices, answer: 0, rationale, reviewHref: `#${slug}` });
const rows = (...items) => items.map(([heading, body]) => ({ heading, body }));
const section = (slug, title, summary, concepts, application, lesson, keyPoints, quiz) => ({ slug, title, visual: `genital-herpes-${slug}`, summary, concepts, application, lesson: rows(...lesson), keyPoints, check: quiz });

export const genitalHerpesModule = {
  slug: "genital-herpes",
  number: "173",
  title: "Genital Herpes",
  source: "RxPrep 2023 Chapter 23, reconciled with CDC genital herpes, genital ulcer, pregnancy, neonatal, and current valacyclovir labeling",
  description: "Connect HSV latency and anatomic testing to first episodes, recurrences, suppression, CNS disease, resistance, pregnancy, neonatal care, and humane transmission counseling.",
  topics: ["HSV biology", "Lesion NAAT", "First episode", "Episodic therapy", "Suppression", "CNS disease", "Resistance", "Pregnancy", "Neonates", "Counseling"],
  outcomes: [
    "Explain HSV entry, sensory ganglion latency, reactivation, and asymptomatic shedding.",
    "Choose lesion NAAT, culture, and type specific serology for the correct diagnostic question.",
    "Treat every first clinical episode with an evidence based systemic antiviral regimen.",
    "Build an advance start plan for recurrent episodic therapy.",
    "Individualize daily suppression by recurrence burden, transmission goals, and preference.",
    "Recognize disseminated, meningeal, and encephalitic disease that requires IV acyclovir.",
    "Detect antiviral toxicity and manage suspected acyclovir resistance.",
    "Protect pregnancy and choose delivery management from acquisition timing, lesions, and prodrome.",
    "Recognize and treat neonatal skin, eye, mouth, CNS, and disseminated HSV.",
    "Counsel about type, disclosure, safer sex, pregnancy, and stigma without moral judgment."
  ],
  submodules: [
    section(
      "biology-natural-history",
      "Follow HSV From Mucosa to Latency and Back",
      "HSV replicates at mucocutaneous surfaces, enters sensory nerves, and persists in ganglia. Antivirals suppress active replication but do not remove latent virus.",
      ["Mucosal entry", "Sensory ganglion", "Reactivation", "Asymptomatic shedding", "Type specific course"],
      "Use virologic type and recurrence history to set expectations. Genital HSV-2 usually recurs and sheds more often than genital HSV-1.",
      [
        ["Trace the infection cycle", "Active replication at an epithelial surface produces vesicles, erosions, or ulcers. Virus then travels along sensory neurons and establishes lifelong latency."],
        ["Separate infection from visible disease", "Reactivation can produce a classic recurrence, an unrecognized mild episode, or asymptomatic shedding. Transmission therefore can occur when no lesion is visible."],
        ["Use type to predict natural history", "Genital HSV-2 has more frequent recurrence and shedding. Genital HSV-1 recurrence and shedding decline more rapidly, especially during the first year."],
        ["Define what antivirals can do", "Acyclovir, valacyclovir, and famciclovir inhibit active viral replication. They shorten illness and reduce recurrence or shedding, but they do not eradicate latency."]
      ],
      ["Latency is lifelong.", "Shedding can be silent.", "HSV-1 and HSV-2 have different genital recurrence patterns.", "Suppression is control, not cure."],
      check("Which statement best explains transmission between recognized outbreaks?", ["HSV can reactivate with asymptomatic shedding", "Antivirals create permanent immunity", "Only visible vesicles contain virus", "Latency occurs in circulating red cells"], "Reactivation can release virus without recognized lesions.", "biology-natural-history")
    ),
    section(
      "diagnosis-testing",
      "Match the Test to the Clinical Question",
      "A fresh lesion offers the most direct diagnostic opportunity. Type specific lesion NAAT is preferred, while culture and serology answer narrower questions.",
      ["Lesion NAAT", "Viral culture", "HSV type", "Serology", "Ulcer differential"],
      "Sample lesions promptly, request type differentiation, and never let a negative healing lesion or an isolated low positive serology close the case without context.",
      [
        ["Prefer lesion NAAT", "Swab a vesicle or ulcer base for HSV NAAT or PCR and request HSV-1 and HSV-2 differentiation. Molecular testing is more sensitive than culture."],
        ["Know when culture matters", "Culture sensitivity declines as lesions heal, but culture can provide an isolate for phenotypic susceptibility when treatment failure suggests resistance."],
        ["Use serology selectively", "Type specific glycoprotein G serology can help when lesions are absent, symptoms are atypical with negative direct testing, or a partner has genital herpes."],
        ["Protect against false certainty", "Low positive HSV-2 serology may require confirmation with another method. HSV IgM is not useful. Evaluate syphilis and other causes when a genital ulcer is present."]
      ],
      ["Fresh lesions favor NAAT.", "A negative healing lesion does not exclude HSV.", "Low positive serology may need confirmation.", "HSV IgM should not be used."],
      check("What is the preferred test for a new genital vesicle?", ["Type specific HSV NAAT from the lesion", "HSV IgM", "Urine culture", "A treponemal test alone"], "Lesion NAAT is the most sensitive direct test and should identify type.", "diagnosis-testing")
    ),
    section(
      "first-episode",
      "Treat Every First Clinical Episode",
      "A first episode can become prolonged or severe even when the initial examination looks limited. Systemic therapy is indicated for every first clinical episode.",
      ["Seven to ten days", "Acyclovir", "Valacyclovir", "Famciclovir", "Healing based extension"],
      "Start promptly, assess complications and kidney function, then extend beyond day 10 only when lesions have not healed.",
      [
        ["Choose a complete oral regimen", "Use acyclovir 400 mg orally three times daily, valacyclovir 1 g orally twice daily, or famciclovir 250 mg orally three times daily for 7 to 10 days."],
        ["Build administration safety", "Review kidney function, hydration, swallowing, adherence, interactions, pregnancy, and access. Valacyclovir offers lower pill burden through improved oral bioavailability."],
        ["Extend for incomplete healing", "If lesions remain unhealed after 10 days, reassess adherence, diagnosis, immune status, complications, and resistance, then extend treatment when clinically appropriate."],
        ["Reject topical monotherapy", "Topical antiviral treatment provides minimal clinical benefit for genital herpes and is discouraged. Use systemic therapy according to severity."]
      ],
      ["Mild first episodes still receive treatment.", "Use one complete evidence based regimen.", "Incomplete healing can justify extension.", "Topical therapy is not adequate."],
      check("What is appropriate for a mild first clinical episode?", ["Systemic antiviral therapy for 7 to 10 days", "Observation alone", "Topical acyclovir alone", "Antibacterial therapy"], "Every first clinical episode receives systemic treatment.", "first-episode")
    ),
    section(
      "episodic-therapy",
      "Put Recurrent Treatment in the Patient's Hands",
      "Episodic therapy has the greatest benefit when it begins during prodrome or within one day of lesion onset. Advance access is therefore part of the regimen.",
      ["Prodrome", "Advance supply", "Short course", "Renal dosing", "Self start plan"],
      "Select one validated regimen, dispense it before the next recurrence, and write an exact trigger for starting it.",
      [
        ["Start at the biologic window", "Teach the patient's prodrome and first lesion pattern. Waiting for a clinic visit can miss the period when suppression shortens the episode most effectively."],
        ["Use a valacyclovir regimen", "Options for recurrent HSV-2 include valacyclovir 500 mg orally twice daily for 3 days or 1 g orally daily for 5 days."],
        ["Use an acyclovir or famciclovir regimen", "Acyclovir options include 800 mg twice daily for 5 days or 800 mg three times daily for 2 days. Famciclovir has validated one, two, and five day regimens."],
        ["Do not mix indications", "First episode, recurrent episode, suppression, zoster, and CNS disease use different doses and durations. Confirm indication and renal function before selecting a schedule."]
      ],
      ["Treatment begins at prodrome or within one day.", "Medication should already be available.", "One validated regimen must be completed.", "Dose and duration depend on the indication."],
      check("When should recurrent episodic therapy begin?", ["During prodrome or within one day of lesion onset", "After lesions heal", "Only after culture returns", "Seven days after onset"], "Early self initiation produces the greatest benefit.", "episodic-therapy")
    ),
    section(
      "suppression-transmission",
      "Use Suppression as a Shared Clinical Decision",
      "Daily therapy can reduce frequent recurrences by about 70 to 80 percent, improve quality of life, and reduce but not eliminate HSV-2 transmission.",
      ["Recurrence burden", "Quality of life", "Daily valacyclovir", "Residual transmission", "Annual review"],
      "Discuss suppression without requiring a rigid outbreak count. Match the dose to recurrence frequency and transmission goals, then reassess annually.",
      [
        ["Offer all standard options", "Suppressive regimens include acyclovir 400 mg twice daily, valacyclovir 500 mg or 1 g daily, and famciclovir 250 mg twice daily."],
        ["Recognize the lower dose boundary", "Valacyclovir 500 mg daily may be less effective in patients with at least 10 episodes per year. Breakthrough frequency should prompt adherence, dose, diagnosis, and resistance review."],
        ["Reduce transmission without promising zero risk", "Valacyclovir 500 mg daily reduces transmission in discordant heterosexual couples with symptomatic HSV-2. Condoms and avoiding sex during prodrome or lesions remain necessary."],
        ["Revisit, do not force interruption", "Discuss ongoing value each year because recurrence often declines. Routine drug holidays and routine laboratory monitoring are not required for most otherwise healthy patients."]
      ],
      ["Suppression can benefit more than the most frequent recurrences.", "Valacyclovir 500 mg daily has a frequency limitation.", "Transmission risk remains.", "Annual shared review replaces forced drug holidays."],
      check("Which statement about daily suppression is accurate?", ["It reduces recurrence and can reduce transmission without eliminating risk", "It eradicates latent virus", "It requires a yearly drug holiday", "It is only offered after exactly six outbreaks"], "Suppression is individualized control and prevention, not cure.", "suppression-transmission")
    ),
    section(
      "severe-cns",
      "Escalate Invasive and Neurologic HSV Immediately",
      "Disseminated disease, hepatitis, pneumonitis, meningitis, and encephalitis require IV therapy, organ assessment, and renal safety rather than an outpatient recurrence regimen.",
      ["IV acyclovir", "Meningitis", "Encephalitis", "Renal safety", "Neurologic urgency"],
      "Treat suspected encephalitis before final PCR, distinguish it from meningitis, and monitor high dose acyclovir as closely as the infection.",
      [
        ["Treat severe systemic disease", "Use acyclovir 5 to 10 mg/kg IV every 8 hours for severe, disseminated, pneumonitis, hepatitis, or hospitalized HSV, with renal adjustment and supportive care."],
        ["Treat HSV-2 meningitis", "Use acyclovir 5 to 10 mg/kg IV every 8 hours until clinical improvement, then valacyclovir 1 g orally three times daily to complete 10 to 14 days."],
        ["Treat encephalitis without delay", "Use acyclovir 10 mg/kg IV every 8 hours for 14 to 21 days. Begin empirically when the syndrome is suspected while obtaining CSF PCR and neuroimaging."],
        ["Prevent acyclovir injury", "Adjust for kidney function, infuse appropriately, maintain hydration, and follow creatinine, urine output, nephrotoxins, confusion, tremor, and other neurotoxicity findings."]
      ],
      ["Invasive disease requires IV exposure.", "Meningitis and encephalitis are not the same regimen.", "Do not wait to treat suspected encephalitis.", "Hydration and renal adjustment prevent toxicity."],
      check("What is the correct response to suspected HSV encephalitis?", ["Start acyclovir 10 mg/kg IV every 8 hours while testing proceeds", "Wait for final CSF PCR", "Use valacyclovir 500 mg daily", "Use topical therapy"], "Delay can permit irreversible neurologic injury.", "severe-cns")
    ),
    section(
      "hiv-resistance",
      "Separate Delayed Healing From Antiviral Resistance",
      "Immunocompromise can make lesions severe, atypical, and prolonged. Progression during correctly dosed adherent therapy requires a structured resistance evaluation.",
      ["HIV", "Adherence audit", "Phenotypic testing", "Cross resistance", "Foscarnet"],
      "Confirm exposure, adherence, renal dose, absorption, and diagnosis before labeling resistance, then obtain a culture isolate and involve infectious disease.",
      [
        ["Adapt care in HIV", "First episode therapy is similar, but healing can require longer treatment. Suppressive and episodic regimens can use higher frequency schedules from HIV guidance."],
        ["Investigate persistent lesions", "Review dose, renal adjustment, adherence, absorption, immune status, and alternate ulcer causes. Obtain viral culture for phenotypic sensitivity when resistance is suspected."],
        ["Understand cross resistance", "Acyclovir resistance usually confers resistance to valacyclovir and often famciclovir because the drugs depend on related viral activation and targets."],
        ["Use foscarnet with intensive monitoring", "IV foscarnet is preferred for acyclovir-resistant genital herpes. Monitor kidney function, calcium, magnesium, potassium, phosphate, seizures, infusion toxicity, and genital ulceration."]
      ],
      ["Immunocompromise can prolong healing.", "Resistance is a clinical and laboratory diagnosis.", "Valacyclovir does not bypass acyclovir resistance.", "Foscarnet requires specialist toxicity management."],
      check("What is preferred for proven acyclovir-resistant genital herpes?", ["IV foscarnet with intensive monitoring", "Valacyclovir at the same exposure", "Topical acyclovir", "No antiviral therapy"], "Foscarnet bypasses viral thymidine kinase dependence but has substantial toxicity.", "hiv-resistance")
    ),
    section(
      "pregnancy-delivery",
      "Protect the Newborn Before Labor Begins",
      "Neonatal risk depends strongly on acquisition timing and maternal immunity. Near delivery acquisition has much greater transmission risk than established recurrent infection.",
      ["Acquisition timing", "Thirty-six weeks", "Prodrome", "Lesion examination", "Delivery route"],
      "Coordinate second half acquisition early, suppress recurrent disease at 36 weeks, and make the intrapartum decision from lesions and prodrome.",
      [
        ["Stratify by acquisition timing", "Transmission risk is about 30 to 50 percent when genital herpes is acquired near delivery and below 1 percent with recurrent disease or first half acquisition."],
        ["Use late pregnancy suppression", "For recurrent genital herpes, begin acyclovir 400 mg orally three times daily or valacyclovir 500 mg orally twice daily at 36 weeks."],
        ["Examine at labor", "Ask about burning, pain, or other prodrome and examine for genital lesions. Vaginal delivery is appropriate when neither lesions nor prodrome is present."],
        ["Use cesarean delivery for active risk", "Cesarean delivery reduces neonatal exposure when lesions or prodrome are present at labor. Suppression reduces recurrence at term but does not guarantee vaginal delivery."]
      ],
      ["Near delivery acquisition carries the greatest neonatal risk.", "Suppression begins at 36 weeks.", "Current lesions and prodrome guide delivery.", "Routine HSV-2 serologic screening in pregnancy is not recommended."],
      check("A laboring patient has recurrent genital lesions. What reduces neonatal exposure?", ["Cesarean delivery", "Vaginal delivery because infection is recurrent", "No delivery plan change", "Topical acyclovir during labor"], "Lesions or prodrome at labor support cesarean delivery.", "pregnancy-delivery")
    ),
    section(
      "neonatal-herpes",
      "Recognize Neonatal HSV Before Vesicles Appear",
      "Neonatal HSV can present as skin, eye, and mouth disease, CNS disease, or disseminated infection. Absence of skin lesions does not make invasive disease safe to exclude.",
      ["Exposure", "Surface testing", "CSF PCR", "Fourteen days", "Twenty-one days"],
      "Connect maternal and newborn teams, evaluate every disease compartment, begin IV acyclovir when indicated, and prove CNS clearance before stopping.",
      [
        ["Evaluate the exposed newborn", "Maternal lesions or near term acquisition should trigger pediatric infectious disease involvement. Testing can include mucosal PCR or cultures, blood PCR, CSF studies, liver tests, and eye examination."],
        ["Treat limited disease systemically", "Skin, eye, and mouth disease receives acyclovir 20 mg/kg IV every 8 hours for 14 days after CNS and disseminated disease are excluded."],
        ["Treat CNS or disseminated disease longer", "Use acyclovir 20 mg/kg IV every 8 hours for 21 days, with kidney function, blood counts, neurologic status, liver, lung, and coagulation monitoring."],
        ["Prove CNS viral clearance", "Repeat CSF HSV PCR near the end of CNS therapy. Continue IV treatment and retest when PCR remains positive rather than stopping automatically."]
      ],
      ["Neonatal HSV can lack vesicles.", "All neonatal categories receive IV acyclovir.", "Limited disease receives 14 days.", "CNS and disseminated disease receive at least 21 days."],
      check("How long is neonatal CNS HSV treated with IV acyclovir?", ["At least 21 days with end of therapy CSF reassessment", "Three days", "Seven days", "Fourteen days without reassessment"], "CNS disease requires the longer course and documented virologic response.", "neonatal-herpes")
    ),
    section(
      "counseling-prevention",
      "Make Counseling Clinically Precise and Human",
      "Accurate counseling reduces transmission, improves treatment choices, and counters the stigma that can cause more harm than the physical recurrence.",
      ["Disclosure", "Asymptomatic shedding", "Condoms", "Pregnancy planning", "Psychosocial care"],
      "Use clear type specific language, acknowledge uncertainty about timing, and build a prevention plan that respects the patient's goals and safety.",
      [
        ["Explain what a diagnosis means", "HSV is common and lifelong. A result usually cannot establish exactly when transmission occurred, and it is not evidence of recent infidelity or personal failure."],
        ["Build a layered prevention plan", "Avoid sexual contact during prodrome or lesions, use condoms consistently, disclose to partners, and consider suppression. Each layer reduces risk, but none eliminates it."],
        ["Connect reproductive planning", "Patients who are pregnant or planning pregnancy should inform obstetric clinicians and partners. Prevention of near delivery acquisition deserves special attention."],
        ["Treat distress as part of care", "Assess anxiety, depression, coercion, partner safety, and misinformation. Offer reliable resources and revisit episodic versus suppressive therapy through shared decision-making."]
      ],
      ["A diagnosis does not date transmission.", "Silent shedding explains residual risk.", "Prevention uses multiple layers.", "Psychosocial care is clinical care."],
      check("Which counseling statement is accurate?", ["Transmission can occur during asymptomatic shedding", "A positive test proves recent infidelity", "Condoms eliminate all risk", "Antivirals remove latent HSV"], "Silent shedding is central to humane and accurate transmission counseling.", "counseling-prevention")
    )
  ],
  references: [
    { label: "CDC Genital Herpes", href: "https://www.cdc.gov/std/treatment-guidelines/herpes.htm" },
    { label: "CDC Genital Ulcer Disease", href: "https://www.cdc.gov/std/treatment-guidelines/genital-ulcers.htm" },
    { label: "CDC Herpes During Pregnancy", href: "https://www.cdc.gov/std/treatment-guidelines/herpes.htm#pregnancy" },
    { label: "FDA Valtrex Prescribing Information", href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/020487s023lbl.pdf" }
  ],
  questionBank: genitalHerpesQuestionBank
};

export const genitalHerpesVisualTypes = ["biology-natural-history", "diagnosis-testing", "first-episode", "episodic-therapy", "suppression-transmission", "severe-cns", "hiv-resistance", "pregnancy-delivery", "neonatal-herpes", "counseling-prevention"].map((type) => `genital-herpes-${type}`);
