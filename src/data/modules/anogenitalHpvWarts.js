import { anogenitalHpvWartsQuestionBank } from "@/data/questionBanks/anogenitalHpvWarts";

const check = (question, choices, rationale, slug) => ({ question, choices, answer: 0, rationale, reviewHref: `#${slug}` });
const rows = (...items) => items.map(([heading, body]) => ({ heading, body }));
const section = (slug, title, summary, concepts, application, lesson, keyPoints, quiz) => ({ slug, title, visual: `anogenital-hpv-${slug}`, summary, concepts, application, lesson: rows(...lesson), keyPoints, check: quiz });

export const anogenitalHpvWartsModule = {
  slug: "anogenital-hpv-warts",
  number: "174",
  title: "Anogenital HPV and Warts",
  source: "RxPrep 2023 Chapter 23, reconciled with CDC anogenital wart, HPV, vaccination, immunization schedule, and current Gardasil 9 labeling",
  description: "Separate HPV infection, visible warts, and precancer, then choose observation, patient applied treatment, procedural care, vaccination, and follow-up by anatomy and patient goals.",
  topics: ["HPV biology", "Diagnosis", "Biopsy", "Shared decisions", "Imiquimod", "Podofilox", "Procedures", "Special sites", "Pregnancy", "Vaccination"],
  outcomes: [
    "Separate wart associated HPV types from oncogenic HPV and pathologic precancer.",
    "Diagnose typical warts visually and identify lesions that require biopsy.",
    "Choose observation or treatment through shared clinical decision-making.",
    "Use imiquimod formulations with their exact schedules and local safety boundaries.",
    "Use podofilox and sinecatechins only on appropriate external anatomy.",
    "Compare cryotherapy, surgical removal, and provider applied acids.",
    "Escalate cervical, vaginal, urethral, and intra-anal disease appropriately.",
    "Adapt management for immune compromise and pregnancy without obsolete risk letters.",
    "Apply the complete two dose or three dose HPV vaccine schedule.",
    "Counsel about recurrence, partners, prevention, screening, and stigma accurately."
  ],
  submodules: [
    section(
      "biology-natural-history",
      "Separate Infection, Warts, and Precancer",
      "HPV is a family of epithelial viruses with different clinical consequences. The types causing most visible warts are not the types driving most HPV related cancers.",
      ["Types 6 and 11", "Oncogenic types", "Epithelial persistence", "Spontaneous clearance", "Subclinical infection"],
      "Treat the condition that is present. Visible warts, pathologic precancer, and asymptomatic HPV each have a different clinical pathway.",
      [
        ["Identify the wart associated types", "About 90 percent of anogenital warts are caused by nononcogenic HPV types 6 or 11. Coinfection with oncogenic types can still occur."],
        ["Understand persistence", "Most HPV infections become undetectable spontaneously. Persistent infection with oncogenic types creates the important precancer and cancer risk."],
        ["Define the target of therapy", "Wart treatment removes visible lesions and can improve symptoms or distress. It does not prove eradication of subclinical infection or eliminate recurrence."],
        ["Keep screening separate", "Cancer screening detects pathologic change rather than typical external warts. Vaccination and screening remain important after wart treatment."]
      ],
      ["Most warts are linked to types 6 or 11.", "Oncogenic persistence drives precancer risk.", "Lesion clearance is not viral eradication.", "Treatment does not replace screening."],
      check("Which statement best separates genital warts from HPV related cancer?", ["Most warts are caused by nononcogenic types 6 or 11", "Every wart is a cancer precursor", "Wart removal eliminates oncogenic HPV", "All HPV types have identical behavior"], "The types causing most visible warts differ from the principal oncogenic types.", "biology-natural-history")
    ),
    section(
      "diagnosis-differential",
      "Know When a Wart Needs Tissue Diagnosis",
      "Typical flat, papular, or pedunculated lesions are diagnosed visually. Atypia, uncertainty, immune compromise, or treatment failure lowers the threshold for biopsy.",
      ["Visual diagnosis", "Atypia", "Biopsy", "Condyloma lata", "HPV testing boundary"],
      "Map every anatomic site, document morphology, and pause destructive treatment when pigmentation, induration, fixation, bleeding, or ulceration suggests another diagnosis.",
      [
        ["Diagnose the typical presentation", "Record lesion number, size, surface, distribution, symptoms, and internal versus external location. Typical warts do not require HPV testing."],
        ["Biopsy suspicious disease", "Biopsy pigmented, indurated, fixed, bleeding, or ulcerated lesions, and consider biopsy when diagnosis is uncertain, disease worsens, or standard therapy fails."],
        ["Protect the differential", "Condyloma lata from secondary syphilis and benign or malignant growths can resemble HPV warts. Use history, examination, serology, and tissue when needed."],
        ["Do not misuse HPV tests", "Oncogenic HPV assays support cervical screening and follow-up questions. They do not confirm a wart, screen a partner, or function as a general STI test."]
      ],
      ["Typical warts are a visual diagnosis.", "Atypia changes the pathway to biopsy.", "Syphilis can mimic warts.", "HPV testing does not guide wart treatment."],
      check("A lesion is pigmented, indurated, and fixed. What is the safest next step?", ["Biopsy before destructive treatment", "HPV testing alone", "Indefinite podofilox", "No reassessment"], "Atypical fixed lesions need tissue diagnosis.", "diagnosis-differential")
    ),
    section(
      "shared-selection",
      "Choose the Treatment Around the Patient and Lesion",
      "No single recommended therapy is best for every wart. Observation is also a valid option when diagnostic certainty, symptoms, and patient preference support it.",
      ["Observation", "Patient preference", "Anatomic fit", "Access", "Response checkpoint"],
      "Use lesion burden, reach, site, pregnancy, immune status, cost, adverse effects, convenience, and clinician expertise to select a plan.",
      [
        ["Offer observation honestly", "Untreated warts can resolve, remain unchanged, or increase. A patient with secure diagnosis and low symptom burden can reasonably defer treatment."],
        ["Choose the treatment setting", "Patient applied therapy requires every target wart to be visible and reachable. Provider treatment fits internal, extensive, inaccessible, or procedure appropriate disease."],
        ["Set expectations before treatment", "Local inflammation, multiple visits, incomplete clearance, and recurrence are possible with every modality. Combination treatment is sometimes used, but evidence is limited."],
        ["Use a response checkpoint", "Most responsive lesions improve within about 3 months. Reassess technique, adherence, immune status, diagnosis, adverse effects, and modality when improvement is not substantial."]
      ],
      ["Observation is an active shared choice.", "Anatomy determines safe self application.", "No modality guarantees cure.", "Nonresponse deserves reassessment, not endless treatment."],
      check("Which factor set should drive wart treatment selection?", ["Anatomy, lesion burden, patient preference, cost, safety, and expertise", "HPV viral load alone", "One universal first line drug", "Partner HPV testing"], "Treatment is individualized because no option is superior for every patient and lesion.", "shared-selection")
    ),
    section(
      "imiquimod",
      "Use Local Immune Activation Precisely",
      "Imiquimod stimulates interferon and other cytokines. Strength, frequency, wash timing, local reaction, and external anatomy all matter.",
      ["Immune response modifier", "Five percent", "Three point seven five percent", "Wash window", "Local reaction"],
      "Identify every wart in clinic, demonstrate a thin external application, and give the schedule for the exact package strength.",
      [
        ["Use the 5 percent schedule", "Apply at bedtime three times weekly for up to 16 weeks. Wash the treated area with soap and water 6 to 10 hours after each application."],
        ["Use the 3.75 percent schedule", "Apply at bedtime every night for up to 8 weeks, then wash after 6 to 10 hours. Do not interchange the two formulation schedules."],
        ["Manage local inflammation", "Redness, irritation, induration, erosion, ulceration, vesicles, and pigment change can occur. Severe injury can require a pause, reduced frequency, or a new plan."],
        ["Protect barriers and partners", "The cream can weaken condoms and vaginal diaphragms and irritate anogenital mucosa. Avoid sexual contact while the product is on the skin."]
      ],
      ["Imiquimod modifies local immunity.", "Strength determines schedule.", "Both strengths are washed off after 6 to 10 hours.", "Severe local injury requires reassessment."],
      check("How is imiquimod 5 percent used for external warts?", ["At bedtime three times weekly for up to 16 weeks, then washed off after 6 to 10 hours", "Every night for 16 weeks without washing", "Inside the vagina twice daily", "One application only"], "The 5 percent formulation has a specific intermittent schedule.", "imiquimod")
    ),
    section(
      "patient-applied-options",
      "Keep Cytotoxic Topicals on Safe External Anatomy",
      "Podofilox causes wart necrosis through antimitotic activity, while sinecatechins is a botanical extract with local activity. Both have strict site and host boundaries.",
      ["Podofilox cycle", "Area and volume limits", "Sinecatechins", "External use", "Pregnancy boundary"],
      "Mark the treatment field, demonstrate technique, verify the exact product, and keep patient applied options away from internal mucosa and pregnancy.",
      [
        ["Cycle podofilox correctly", "Apply podofilox 0.5 percent solution or gel twice daily for 3 days, then stop for 4 days. Repeat as needed for no more than four cycles."],
        ["Respect podofilox exposure limits", "Treat no more than 10 square centimeters and use no more than 0.5 mL per day. Avoid open wounds, excess normal skin, and internal lesions."],
        ["Use sinecatechins correctly", "Apply sinecatechins 15 percent ointment three times daily until clearance for no more than 16 weeks. Do not wash it off before the next application."],
        ["Screen the host before dispensing", "Do not use podofilox during pregnancy. Sinecatechins is not recommended in pregnancy, immune compromise, or genital herpes because safety and efficacy are not established."]
      ],
      ["Podofilox uses three days on and four days off.", "Area and volume are limited.", "Sinecatechins stays on the skin.", "Patient applied products do not belong on internal lesions."],
      check("What is the correct podofilox schedule?", ["Twice daily for 3 days, then 4 days off, for up to four cycles", "Continuous daily application for 16 weeks", "One provider application", "An oral dose every week"], "The treatment free interval limits local injury.", "patient-applied-options")
    ),
    section(
      "provider-therapy",
      "Use Destruction Without Losing Tissue Safety",
      "Cryotherapy, surgery, and high concentration acids can remove visible disease quickly, but technique determines pain, injury, scarring, and diagnostic safety.",
      ["Cryotherapy", "Excision", "Electrosurgery", "TCA or BCA", "Plume safety"],
      "Choose provider therapy when anatomy, burden, reach, biopsy need, or patient preference makes home treatment unsafe or impractical.",
      [
        ["Apply cryotherapy with trained technique", "Thermal cytolysis commonly causes pain, necrosis, and blistering. Local anesthesia can help when lesions are large or numerous."],
        ["Use surgery for high burden or one visit clearance", "Scissor or shave excision, curettage, laser, and electrosurgery can remove most visible disease at one visit, but recurrence remains possible."],
        ["Control procedural plume", "Use standard precautions, room ventilation, and local smoke evacuation during procedures that aerosolize tissue."],
        ["Apply TCA or BCA precisely", "Place a small amount of 80 to 90 percent solution only on the wart and allow white frost. Neutralize or remove excess that spreads to adjacent tissue."]
      ],
      ["Cryotherapy commonly hurts and blisters.", "Surgery clears lesions, not infection.", "Plume control protects staff and patients.", "High concentration acid is provider applied."],
      check("What is essential during laser or electrosurgical wart removal?", ["Local smoke evacuation and standard precautions", "HPV testing of the plume", "No ventilation", "Patient applied podofilox during the procedure"], "Procedural plume requires exposure controls.", "provider-therapy")
    ),
    section(
      "special-sites",
      "Let Anatomy Set the Escalation Path",
      "External, cervical, vaginal, urethral, and intra-anal warts do not share one safe treatment menu.",
      ["Perianal mapping", "Cervix", "Vagina", "Urethral meatus", "Intra-anal disease"],
      "Inspect beyond the visible external lesion, exclude high grade cervical disease, and use specialist care for internal anatomy.",
      [
        ["Inspect the anal canal", "External anal or perianal warts can coexist with intra-anal lesions. Consider digital examination, standard anoscopy, or high resolution anoscopy."],
        ["Protect the cervix", "Exophytic cervical warts require specialist consultation and biopsy evaluation to exclude HSIL before treatment."],
        ["Protect vaginal tissue", "Vaginal options include liquid nitrogen cryotherapy, surgical removal, or TCA or BCA. Do not use a cryoprobe in the vagina because perforation and fistula can occur."],
        ["Refer intra-anal disease", "Intra-anal warts use provider administered therapy with colorectal specialist involvement. Patient applied external products are not inserted into the anal canal."]
      ],
      ["External anal disease can signal internal disease.", "Cervical lesions require precancer exclusion.", "A vaginal cryoprobe is unsafe.", "Internal disease belongs in specialist pathways."],
      check("What must occur before treating an exophytic cervical wart?", ["Specialist assessment and biopsy evaluation to exclude HSIL", "Home podofilox", "HPV testing as the only evaluation", "No examination"], "Cervical lesions can conceal high grade disease.", "special-sites")
    ),
    section(
      "special-populations",
      "Adapt for Immune Status and Pregnancy",
      "Immune compromise changes burden, recurrence, response, and concern for atypia. Pregnancy changes medication safety and delivery considerations.",
      ["HIV", "Biopsy threshold", "Pregnancy", "Outlet obstruction", "Bleeding risk"],
      "Keep diagnostic vigilance high in immune compromise and use pregnancy compatible observation or provider treatment rather than fetal risk categories.",
      [
        ["Expect more difficult disease with immune compromise", "Warts can be larger, more numerous, more recurrent, and less responsive. Atypical or resistant disease warrants a lower biopsy threshold."],
        ["Use pregnancy treatment boundaries", "Do not use podofilox, podophyllin, or sinecatechins during pregnancy. Imiquimod is generally avoided until more pregnancy data are available."],
        ["Expect lesions to change during pregnancy", "Warts can proliferate or become friable. Provider treatment or observation depends on symptoms, anatomy, bleeding, and obstetric goals."],
        ["Do not promise prevention through cesarean", "Cesarean delivery is not performed solely to prevent neonatal HPV. Consider it when warts obstruct the pelvic outlet or vaginal delivery would cause excessive bleeding."]
      ],
      ["Immune compromise lowers the biopsy threshold.", "Pregnancy excludes several patient applied drugs.", "Narrative risk replaces obsolete letters.", "Cesarean is reserved for obstetric lesion consequences."],
      check("Which wart medicine should not be used during pregnancy?", ["Podofilox", "A provider selected pregnancy compatible procedure", "Observation", "Specialist consultation"], "Podofilox is avoided during pregnancy.", "special-populations")
    ),
    section(
      "vaccination-prevention",
      "Use Vaccination as Cancer and Wart Prevention",
      "Gardasil 9 uses noninfectious L1 virus like particles for nine HPV types. It prevents new infection but does not treat existing HPV or replace screening.",
      ["Age 9 start", "Routine age 11 or 12", "Two doses", "Three doses", "Shared decision age 27 to 45"],
      "Build the schedule from age at the first valid dose, immune status, exact intervals, pregnancy, and prior completion.",
      [
        ["Recommend routine and catch-up vaccination", "Start routinely at age 11 or 12, with the option to start at 9. Complete catch-up vaccination through age 26 when not adequately vaccinated."],
        ["Use two doses when eligible", "Most people starting before age 15 receive doses at 0 and 6 to 12 months. If the doses are less than 5 months apart, give a third dose."],
        ["Use three doses when indicated", "People starting at age 15 or older and immunocompromised people use 0, 1 to 2, and 6 months. Minimum intervals are 4 weeks, 12 weeks, and 5 months."],
        ["Handle adulthood and pregnancy correctly", "Use shared decision-making for selected inadequately vaccinated adults ages 27 to 45. Delay doses during pregnancy, but do not test routinely or restart after interruption."]
      ],
      ["Vaccination prevents new infection.", "Age at first dose determines two versus three doses.", "Immune compromise requires three doses.", "Existing warts do not remove vaccine benefit against other types."],
      check("A healthy child begins HPV vaccination at age 12. What schedule is usual?", ["Two doses at 0 and 6 to 12 months", "Three daily doses", "One lifetime dose", "Annual boosters"], "Most immunocompetent people starting before age 15 use two doses.", "vaccination-prevention")
    ),
    section(
      "counseling-followup",
      "Close the Loop Without Blame",
      "HPV is common, partners often share infection, acquisition timing is usually unknowable, and recurrence is common after visible clearance.",
      ["Recurrence", "Partners", "Condoms", "Screening", "Stigma"],
      "Give an exact follow-up plan while avoiding claims that shame the patient, date transmission, or overstate what treatment and barriers can do.",
      [
        ["Explain recurrence", "Warts can recur after treatment, especially during the first 3 months. Recurrence does not automatically mean a new exposure or failed relationship."],
        ["Counsel partners accurately", "Current partners often share HPV. Routine HPV testing of partners is not recommended, but examination, vaccination, and testing for other STIs can be appropriate."],
        ["Use layered prevention", "Condoms reduce but do not eliminate risk because uncovered skin can transmit HPV. Avoid contact while irritating topical products are present."],
        ["Preserve long term prevention", "Continue recommended cervical and other cancer screening, offer vaccination when eligible, address smoking and immune status, and reassess nonresponse or atypia."]
      ],
      ["Treatment cannot date acquisition.", "Recurrence is expected clinical biology.", "Partner HPV testing is not routine.", "Screening continues after wart clearance."],
      check("Which statement belongs in post-treatment counseling?", ["Warts can recur and treatment does not replace vaccination or screening", "Removal proves eradication", "Partner HPV testing is mandatory", "Condoms eliminate transmission"], "Visible clearance is not the end of prevention or follow-up.", "counseling-followup")
    )
  ],
  references: [
    { label: "CDC Anogenital Warts", href: "https://www.cdc.gov/std/treatment-guidelines/anogenital-warts.htm" },
    { label: "CDC Human Papillomavirus Infection", href: "https://www.cdc.gov/std/treatment-guidelines/hpv.htm" },
    { label: "CDC HPV Vaccine Recommendations", href: "https://www.cdc.gov/hpv/hcp/vaccination-considerations/" },
    { label: "FDA Gardasil 9", href: "https://www.fda.gov/vaccines-blood-biologics/vaccines/gardasil-9" }
  ],
  questionBank: anogenitalHpvWartsQuestionBank
};

export const anogenitalHpvWartsVisualTypes = ["biology-natural-history", "diagnosis-differential", "shared-selection", "imiquimod", "patient-applied-options", "provider-therapy", "special-sites", "special-populations", "vaccination-prevention", "counseling-followup"].map((type) => `anogenital-hpv-${type}`);
