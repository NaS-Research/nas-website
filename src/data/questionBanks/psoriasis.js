const c = (key, lesson, topic, core, recommended, trap, caseText, action, rationale) => ({ key, lesson, topic, core, recommended, trap, case: caseText, action, rationale });

const concepts = [
  c("il23-th17-axis", "immune-keratinocyte-axis", "the IL-23 and type 17 axis in psoriasis", "IL-23 supports type 17 immune activity, while IL-17 and TNF activate keratinocytes and amplify inflammation.", "Map each targeted drug to the immune signal it interrupts.", "Describe plaque formation as isolated dehydration without immune signaling.", "A patient asks why an IL-23 inhibitor can improve skin disease.", "Explain that reducing IL-23 dependent type 17 signaling interrupts the inflammatory circuit driving keratinocytes.", "The IL-23 and type 17 pathway is central to plaque biology and provides multiple therapeutic targets."),
  c("keratinocyte-amplification", "immune-keratinocyte-axis", "keratinocyte amplification in psoriasis", "Keratinocytes release chemokines and inflammatory signals, so they actively reinforce disease rather than merely overgrow.", "Connect epidermal turnover, incomplete maturation, vascular change, and immune recruitment.", "Treat keratinocytes as passive cells with no role in inflammation.", "A biopsy shows epidermal hyperplasia, vascular change, and inflammatory recruitment.", "Interpret the findings as integrated immune and keratinocyte disease.", "Psoriatic morphology emerges from reciprocal signaling between immune cells and epidermis."),
  c("koebner", "immune-keratinocyte-axis", "the Koebner phenomenon", "New psoriatic lesions can form at sites of skin trauma in susceptible patients.", "Reduce avoidable friction and injury while treating active itch and inflammation.", "Recommend repeated scratching to remove scale.", "New plaques appear along a healing abrasion.", "Recognize trauma induced lesion development and reinforce skin protection.", "The Koebner phenomenon explains lesion formation in injured skin."),

  c("plaque-phenotype", "phenotype-urgency", "stable plaque psoriasis", "Well demarcated erythematous plaques with scale commonly affect extensor surfaces, scalp, and trunk.", "Document distribution, symptoms, fissuring, function, and special sites.", "Record only the word rash and skip morphology and distribution.", "A patient has chronic symmetric extensor plaques with scale and pruritus.", "Describe plaque psoriasis while confirming differential diagnoses and burden.", "Morphology and distribution establish the working phenotype and guide treatment."),
  c("special-sites", "phenotype-urgency", "special site psoriasis", "Face, genital, scalp, palm, sole, fold, and nail disease can produce severe burden despite limited body surface area.", "Select vehicle and potency by skin site and functional consequence.", "Call every low BSA presentation mild regardless of site.", "A patient has painful palm and sole fissures over two percent BSA and cannot work.", "Treat the disease as high impact and consider escalation beyond BSA alone.", "Special sites can determine severity through function and quality of life."),
  c("guttate", "phenotype-urgency", "guttate psoriasis", "An abrupt eruption of small lesions can follow streptococcal infection, especially in younger patients.", "Confirm the phenotype and evaluate active infection when clinically indicated.", "Prescribe antibiotics for every guttate eruption without evidence of infection.", "A teenager develops many small lesions after pharyngitis that has already resolved.", "Assess psoriasis and current infection status separately rather than assuming antibiotics treat the eruption.", "A preceding infection can trigger psoriasis even after the infection no longer needs antimicrobial therapy."),
  c("erythroderma", "phenotype-urgency", "erythrodermic psoriasis", "Near generalized erythema and scale can destabilize temperature, fluid balance, circulation, and infection defense.", "Arrange urgent hospital level evaluation when systemic instability or extensive erythroderma is present.", "Manage diffuse erythroderma with one new outpatient moisturizer and no assessment.", "A patient has near total erythema, chills, edema, tachycardia, and weakness.", "Escalate immediately for stabilization, trigger review, and dermatology directed care.", "Erythroderma can be life threatening and requires more than routine plaque treatment."),
  c("gpp-recognition", "phenotype-urgency", "generalized pustular psoriasis recognition", "Widespread sterile pustules with fever, pain, malaise, or organ dysfunction suggest a distinct systemic inflammatory disease.", "Evaluate urgently for generalized pustular psoriasis, infection, and severe drug reactions.", "Assume every pustule is stable plaque psoriasis.", "A patient develops diffuse pustules, fever, leukocytosis, and severe skin pain.", "Provide emergency evaluation and specialist care rather than routine topical escalation.", "Generalized pustular psoriasis can be rapidly life threatening and must be distinguished from mimics."),

  c("bsa-pga", "severity-comorbidity", "BSA and global assessment in psoriasis", "BSA estimates extent while global assessment describes overall lesion severity, and neither alone captures every burden.", "Record extent and morphology with symptoms, sites, function, and quality of life.", "Use BSA as the sole determinant of severity and treatment.", "A patient has low BSA but severe genital disease and sleep disruption.", "Document high impact special site disease despite limited extent.", "Current severity assessment integrates objective extent with patient and site burden."),
  c("quality-of-life", "severity-comorbidity", "quality of life measurement in psoriasis", "Pruritus, pain, sleep, intimacy, work, and treatment burden can be captured with structured patient reported measures.", "Use a tool such as DLQI or PSI when it can make burden and response visible.", "Assume clear elbows mean normal quality of life despite genital and scalp symptoms.", "A patient's BSA improves but sleep and work remain severely impaired.", "Reassess symptoms, special sites, and the usability of the current plan.", "Treatment success requires meaningful patient benefit, not an extent number alone."),
  c("psa-screen", "severity-comorbidity", "psoriatic arthritis screening", "Morning stiffness, swollen joints, dactylitis, enthesitis, and inflammatory axial symptoms can signal psoriatic arthritis.", "Screen longitudinally and refer suspected inflammatory joint disease before damage accumulates.", "Wait for fixed deformity before asking about joints.", "A patient with nail disease reports a swollen whole toe and prolonged morning stiffness.", "Arrange rheumatology evaluation for possible psoriatic arthritis.", "Dactylitis and inflammatory stiffness require assessment even when skin disease is limited."),

  c("vehicle-selection", "topical-foundations", "topical vehicle selection", "Ointment, cream, solution, foam, gel, and other vehicles change delivery, acceptability, and adherence.", "Match vehicle to site, thickness, hair, lifestyle, and patient preference.", "Use one greasy ointment for every scalp and fold regardless of adherence.", "A patient stops a scalp ointment because it cannot be used before work.", "Select a scalp appropriate vehicle and simplify the schedule.", "The best active ingredient fails when its vehicle makes consistent use impossible."),
  c("steroid-potency", "topical-foundations", "topical corticosteroid potency and site", "Thick plaques may need short higher potency induction while face, folds, and genital skin require lower exposure.", "Define potency, site, frequency, duration, quantity, and maintenance before dispensing.", "Use a superpotent steroid indefinitely on eyelids and groin.", "A patient has elbow plaques and inverse disease in the groin.", "Use site specific regimens with a steroid sparing strategy for the fold.", "Skin thickness and vulnerability determine safe corticosteroid exposure."),
  c("vitamin-d-combination", "topical-foundations", "vitamin D analog and corticosteroid combination therapy", "Calcipotriene and corticosteroids have complementary effects on differentiation and inflammation.", "Use combination or sequential treatment to improve efficacy and reduce continuous high potency steroid exposure.", "Assume more calcipotriene over unlimited area can never affect calcium metabolism.", "A patient needs repeated steroid courses for thick plaques.", "Consider a vitamin D analog combination with explicit dose and site limits.", "Complementary mechanisms can improve control while supporting a safer maintenance strategy."),

  c("tapinarof", "modern-topicals", "tapinarof for plaque psoriasis", "Tapinarof cream 1 percent is a once daily aryl hydrocarbon receptor agonist labeled for adult plaque psoriasis.", "Counsel about thin layer use, hand washing, folliculitis, and contact dermatitis.", "Tell a child that adult plaque psoriasis labeling automatically applies.", "An adult wants a nonsteroidal once daily cream for plaques in sensitive areas.", "Consider tapinarof after reviewing tolerability, site, and current label boundaries.", "Tapinarof offers a nonsteroidal mechanism but retains adult only plaque psoriasis labeling."),
  c("roflumilast-cream", "modern-topicals", "roflumilast cream for plaque psoriasis", "Roflumilast cream 0.3 percent is a once daily topical PDE4 inhibitor labeled for plaque psoriasis from age two.", "Use a thin layer once daily and screen for moderate or severe hepatic impairment.", "Use it despite a Child-Pugh C contraindication.", "A four year old has plaque psoriasis in an intertriginous area.", "Consider roflumilast cream 0.3 percent within a clinician directed plan.", "The current cream label includes plaque psoriasis from age two and supports intertriginous application."),
  c("roflumilast-foam", "modern-topicals", "roflumilast foam for scalp and body plaque psoriasis", "Roflumilast foam 0.3 percent is labeled once daily for scalp and body plaque psoriasis from age 12.", "Shake, apply to dry affected areas, rub in, wash hands, and avoid fire or smoking during and immediately after use.", "Apply the flammable foam beside an open flame.", "A 15 year old has scalp and body plaques and dislikes greasy vehicles.", "Use the foam label and teach exact flammability and application precautions.", "The foam expands treatment to scalp and body disease while introducing a propellant fire hazard."),

  c("nbuvb", "phototherapy", "narrowband UVB phototherapy", "Narrowband UVB is controlled medical light treatment that does not require psoralen.", "Review medications, burn response, schedule, skin cancer history, and treatment feasibility.", "Tell patients that tanning beds are an equivalent substitute.", "A patient wants a non systemic option for widespread plaque psoriasis.", "Discuss narrowband UVB if access, schedule, and safety make it feasible.", "Narrowband UVB is a measured modality distinct from recreational ultraviolet exposure."),
  c("puva", "phototherapy", "PUVA photochemotherapy", "PUVA combines psoralen photosensitization with UVA and carries added eye, drug, nausea, and cumulative skin risk.", "Use strict photosensitizer, eye protection, medication, and cumulative exposure controls.", "Describe PUVA as UVA with no need for photosensitizer precautions.", "A patient taking several photosensitizing medicines is referred for PUVA.", "Complete a medication and risk review before treatment.", "Psoralen changes the safety system and cannot be separated from the UVA regimen."),

  c("methotrexate", "oral-systemic", "methotrexate in psoriasis", "Methotrexate can treat skin and joint disease but requires weekly dosing and hematologic, renal, hepatic, pulmonary, interaction, and reproductive safeguards.", "Verify the weekly schedule and baseline safety plan before the first dose.", "Write methotrexate as a daily psoriasis medicine without confirmation.", "A patient accidentally takes a weekly methotrexate dose every day for four days.", "Stop further dosing and arrange urgent toxicity evaluation.", "Daily instead of weekly dosing can cause fatal marrow, mucosal, hepatic, and systemic toxicity."),
  c("cyclosporine", "oral-systemic", "cyclosporine in severe psoriasis", "Cyclosporine acts quickly but can cause nephrotoxicity, hypertension, interactions, and malignancy risk.", "Use it as a monitored rapid control strategy with blood pressure, renal, electrolyte, and interaction surveillance.", "Use it indefinitely without blood pressure or renal monitoring.", "A patient with severe erythrodermic disease needs rapid control but has uncontrolled hypertension.", "Stabilize the emergency and choose a strategy that accounts for the major cyclosporine constraint.", "Cyclosporine speed does not override renal and cardiovascular safety."),
  c("acitretin", "oral-systemic", "acitretin reproductive safety", "Acitretin is highly teratogenic and pregnancy must be avoided during therapy and for at least three years after discontinuation.", "Review pregnancy prevention, alcohol, blood donation, lipids, liver function, and mucocutaneous toxicity.", "Assume pregnancy is safe one month after acitretin stops.", "A patient who may become pregnant cannot commit to three years of pregnancy prevention after therapy.", "Do not use acitretin and select an alternative plan.", "The prolonged teratogenic window is an absolute treatment boundary."),
  c("apremilast", "oral-systemic", "apremilast dosing and safety", "Apremilast is a PDE4 inhibitor titrated for tolerability, with mood, weight, gastrointestinal, interaction, and renal considerations.", "Reduce adult maintenance to 30 mg once daily when creatinine clearance is below 30 mL per minute.", "Use standard twice daily dosing in severe renal impairment without review.", "An adult with creatinine clearance 24 mL per minute starts apremilast.", "Use immediate-release morning-only titration and 30 mg once daily maintenance; avoid the extended-release formulation in severe renal impairment.", "Severe renal impairment increases exposure and requires dose reduction."),
  c("deucravacitinib", "oral-systemic", "deucravacitinib therapy", "Deucravacitinib is a selective TYK2 inhibitor dosed 6 mg once daily for adult plaque psoriasis and active adult psoriatic arthritis.", "Review infection, TB, vaccines, liver disease, laboratory concerns, and potent immunosuppressant use.", "Combine it casually with another potent immunosuppressant.", "An adult with plaque psoriasis and active psoriatic arthritis wants one oral targeted therapy.", "Consider deucravacitinib after screening and shared selection under its current 2026 label.", "The June 2026 label includes adult psoriatic arthritis and retains immunosuppression related safeguards."),

  c("biologic-selection", "biologic-pathways", "biologic pathway selection", "TNF, IL-12/23, IL-17, and IL-23 agents differ in joint evidence, bowel risk, infection, schedule, and other constraints.", "Select the pathway after skin, joint, bowel, infection, pregnancy, and preference review.", "Choose a biologic by injection color alone.", "A patient has severe plaques, active psoriatic arthritis, and Crohn disease.", "Select a pathway effective for skin and joints that does not carry the same bowel concern as IL-17 blockade.", "Comorbid inflammatory disease can be more important than small efficacy differences."),
  c("brodalumab", "biologic-pathways", "brodalumab safety", "Brodalumab blocks the IL-17 receptor and retains a boxed suicidality warning, restricted REMS, and Crohn disease contraindication.", "Review mood history, REMS requirements, infection, TB, vaccines, and bowel disease before use.", "Dispense it outside the REMS and ignore new suicidal thinking.", "A patient on brodalumab develops worsening depression and suicidal thoughts.", "Arrange immediate safety evaluation and reassess treatment through the REMS framework.", "The boxed warning requires active recognition and response even though causality has not been established."),
  c("bimekizumab", "biologic-pathways", "bimekizumab therapy", "Bimekizumab blocks IL-17A and IL-17F and is labeled for adult plaque psoriasis and several related inflammatory diseases.", "Obtain TB and liver evaluation, update vaccines, and monitor infection, candidiasis, bowel symptoms, liver injury, and mood changes.", "Ignore new oral candidiasis and rising liver tests.", "A patient develops recurrent thrush and new abdominal pain on bimekizumab.", "Evaluate infection and possible inflammatory bowel disease before continuing unchanged.", "Dual IL-17A and F blockade has specific infection and bowel safety considerations."),

  c("spesolimab-flare", "pustular-erythrodermic", "spesolimab treatment of a GPP flare", "Spesolimab blocks the IL-36 receptor and a current GPP flare is treated with 900 mg intravenously over 90 minutes.", "Allow one additional 900 mg infusion one week later if flare symptoms persist under current labeling.", "Use a 6 mg oral dose for a GPP flare.", "An eligible patient remains symptomatic one week after the initial intravenous flare dose.", "Consider the one labeled repeat 900 mg infusion after reassessment.", "Current labeling permits one repeat intravenous dose at one week for persistent symptoms."),
  c("spesolimab-prevention", "pustular-erythrodermic", "subcutaneous spesolimab between GPP flares", "For a new subcutaneous start without preceding intravenous flare treatment, use 600 mg then 300 mg at week four and every four weeks; after intravenous flare treatment, start 300 mg at four weeks without reloading.", "Confirm age at least 12, weight at least 40 kg, TB evaluation, vaccination, and injection training.", "Assume the plaque psoriasis regimen applies to GPP.", "A 13 year old weighing 42 kg is between recurrent GPP flares and has never received intravenous spesolimab.", "Consider the labeled subcutaneous prevention pathway with specialist oversight.", "Current pediatric labeling begins at age 12 and 40 kg for generalized pustular psoriasis."),

  c("treatment-target", "longitudinal-safety", "a measurable psoriasis treatment target", "Response should include skin activity, symptoms, special sites, function, quality of life, joints, and treatment burden.", "Record a baseline and reassess on a timeline appropriate to the chosen therapy.", "Call treatment successful solely because one plaque is thinner while function worsens.", "BSA falls but palm fissures still prevent work.", "Revise therapy because the high impact target remains unmet.", "Durable control is defined by patient and disease outcomes rather than one isolated measure."),
  c("vaccine-infection", "longitudinal-safety", "vaccination and infection safety in psoriasis therapy", "Many immune modifying therapies require infection screening and avoidance of live vaccines during treatment.", "Complete age appropriate vaccines before therapy when feasible and follow the exact product label.", "Apply one identical TB and vaccine rule to every topical and systemic drug.", "A patient is about to start an IL-17 biologic and needs a live vaccine.", "Coordinate vaccine timing before immune modulation rather than administering it casually during therapy.", "Live vaccine and infection rules are treatment specific and should be planned before initiation."),
  c("switching", "longitudinal-safety", "switching psoriasis therapy", "A switch should address inadequate efficacy, lost response, toxicity, comorbidity, reproductive planning, access, preference, or treatment burden.", "Verify exposure, technique, schedule, storage, and access before declaring mechanistic failure.", "Add therapies blindly without identifying why the current plan failed.", "A biologic appears ineffective, but the patient missed three months because insurance denied refills.", "Restore reliable access and reassess before labeling the biologic target ineffective.", "An exposure failure is different from pharmacologic failure and requires a different solution."),
];

// Each reviewed case has its own incorrect alternatives; accurate teaching
// statements are not reused as distractors for a different question stem.
const reviewedDistractors = {
  "tapinarof": ["Recommend roflumilast foam as an oral medicine.", "Tell the patient tapinarof contains a superpotent corticosteroid.", "Skip tolerability counseling because a nonsteroidal cream cannot irritate skin."],
  "roflumilast-cream": ["Use the foam psoriasis indication in this four-year-old.", "Substitute the eczema cream strength solely because of age.", "Exclude every topical treatment because the site is intertriginous."],
  "roflumilast-foam": ["Apply to wet hair and rinse immediately without reading instructions.", "Use beside an open flame because topical drugs are not flammable.", "Treat the 0.3 percent foam as interchangeable with every cream strength."],
  "nbuvb": ["Recommend a tanning bed as an equivalent treatment.", "Require oral psoralen for every UVB session.", "Begin an unmeasured home exposure schedule without assessing burn risk."],
  "puva": ["Proceed without checking medicines because only topical drugs affect photosensitivity.", "Use ordinary sunglasses as the only eye-protection plan.", "Replace the prescribed UVA schedule with unrestricted sunlight."],
  "methotrexate": ["Wait for symptoms before contacting the treating team.", "Continue daily dosing until the plaques clear.", "Take extra routine folic acid and omit urgent assessment."],
  "cyclosporine": ["Start cyclosporine without addressing uncontrolled hypertension.", "Ignore blood pressure because the skin disease is severe.", "Combine cyclosporine with unsupervised PUVA to avoid monitoring."],
  "acitretin": ["Start acitretin and stop pregnancy precautions one month after treatment.", "Use a lower dose to eliminate the post-treatment pregnancy restriction.", "Allow pregnancy once the skin clears while continuing acitretin."],
  "apremilast": ["Use immediate-release 30 mg twice daily without adjustment.", "Use extended-release 75 mg daily despite severe renal impairment.", "Omit titration and give immediate-release 60 mg once daily."],
  "deucravacitinib": ["Exclude it because its current label lacks an adult PsA indication.", "Use it with another potent immunosuppressant without review.", "Start it despite untreated active TB."],
  "biologic-selection": ["Select brodalumab despite the Crohn contraindication.", "Choose only by skin response and omit bowel and joint disease.", "Assume every psoriasis biologic treats Crohn disease equally."],
  "brodalumab": ["Wait until routine follow-up to address suicidal thoughts.", "Ignore symptoms because causality has not been established.", "Dispense outside REMS to avoid discussing mood history."],
  "bimekizumab": ["Increase the dose before evaluating new bowel symptoms.", "Treat recurrent thrush as evidence that infection monitoring is unnecessary.", "Assume abdominal symptoms cannot relate to IL-17 blockade."],
  "spesolimab-flare": ["Repeat 900 mg daily until the eruption clears.", "Give the subcutaneous loading dose as an intravenous bolus.", "Exclude any repeat infusion despite persistent symptoms at one week."],
  "spesolimab-prevention": ["Use a plaque-psoriasis biologic schedule for spesolimab without checking its label.", "Give intravenous flare doses every day while the patient is between flares.", "Exclude labeled use solely because the patient is younger than 18."],
  "treatment-target": ["Declare the target met solely because BSA improved.", "Ignore work impairment until the total affected area increases.", "Stop follow-up because improvement in one measure proves full control."],
  "vaccine-infection": ["Give the live vaccine during treatment without checking timing.", "Cancel all future vaccines, including non-live vaccines.", "Apply a topical-drug vaccine rule to the systemic biologic."],
  "switching": ["Declare target failure without considering the treatment gap.", "Add a second biologic before resolving access.", "Double the prescribed dose to compensate for all missed months."],

  "il23-th17-axis": ["Explain that the drug removes scale mechanically without altering immune activity.", "Explain that it directly replaces a missing epidermal vitamin.", "Explain that it treats a bacterial infection responsible for all plaques."],
  "keratinocyte-amplification": ["Interpret the findings as proof of dehydration without inflammation.", "Conclude that keratinocytes cannot influence immune-cell recruitment.", "Diagnose a bacterial infection solely from epidermal thickening."],
  "koebner": ["Recommend repeated abrasion to prevent additional plaques.", "Conclude that trauma excludes psoriasis.", "Treat the linear distribution as proof of a contagious infection."],
  "plaque-phenotype": ["Diagnose generalized pustular psoriasis despite the absence of pustules or systemic illness.", "Prescribe an antibiotic because all chronic scaly plaques are bacterial.", "Determine severity solely from the presence of itch without examining the distribution."],
  "special-sites": ["Classify it as mild solely because less than three percent of skin is affected.", "Exclude psoriasis because palms and soles are involved.", "Defer treatment until disease exceeds ten percent BSA despite inability to work."],
  "guttate": ["Start antibiotics solely to clear the eruption, regardless of current infection evidence.", "Assume that resolved pharyngitis excludes an infection-triggered eruption.", "Diagnose an ongoing bacterial skin infection solely from the number of lesions."],
  "erythroderma": ["Schedule routine follow-up in three months without assessing vital signs.", "Start unsupervised tanning to suppress the redness.", "Recommend only a new moisturizer despite tachycardia and weakness."],
  "gpp-recognition": ["Use routine moisturizer alone and defer evaluation until the fever resolves.", "Diagnose a harmless plaque flare without considering infection or drug reactions.", "Recommend home phototherapy immediately without systemic assessment."],
  "bsa-pga": ["Classify treatment as unnecessary because the affected area is small.", "Use BSA alone and omit symptoms and sensitive-site involvement.", "Wait for widespread plaques before addressing sleep disruption."],
  "quality-of-life": ["Declare treatment successful based solely on the lower BSA.", "Ignore persistent symptoms because they cannot influence treatment targets.", "Escalate the dose automatically without reviewing sites, symptoms or adherence."],
  "psa-screen": ["Wait for fixed joint deformity before arranging assessment.", "Assume that whole-toe swelling is explained by nail appearance alone.", "Treat only the nail and omit the inflammatory joint history."],
  "vehicle-selection": ["Continue the same vehicle without discussing the barrier to use.", "Diagnose pharmacologic resistance before restoring consistent application.", "Double the amount of unused ointment without changing the regimen."],
  "steroid-potency": ["Use the same superpotent steroid indefinitely on elbows and groin.", "Apply occlusive dressings over a superpotent groin steroid without instructions.", "Choose potency solely by package size, regardless of site."],
  "vitamin-d-combination": ["Increase calcipotriene indefinitely without quantity or calcium precautions.", "Add a superpotent steroid indefinitely without reassessing exposure.", "Assume a combination product eliminates all corticosteroid adverse effects."],
};

const rotate = (items, amount) => items.map((_, index) => items[(index + amount) % items.length]);

export const psoriasisQuestionBank = concepts.map((concept, conceptIndex) => {
  const distractors = reviewedDistractors[concept.key];
  if (!distractors || distractors.length !== 3) throw new Error(`Missing case alternatives: ${concept.key}`);
  const choices = rotate([concept.action, ...distractors], conceptIndex % 4);
  return {
    id: `psoriasis-${concept.key}-case`, concept: concept.key,
    difficulty: "Applied", prompt: `${concept.case} What is the best response?`,
    choices, answer: choices.indexOf(concept.action), explanation: concept.rationale,
    reviewHref: `#${concept.lesson}`,
  };
});

// Coverage and clinical validity determine bank length; there is no fixed quota.


// Original safety-boundary case; retain when replacing the legacy generator.
psoriasisQuestionBank.push({
  id: "psoriasis-acitretin-post-treatment-timelines", concept: "acitretin", lesson: "oral-systemic", difficulty: "Applied",
  prompt: "A patient who can become pregnant stopped acitretin six weeks ago. Which counseling statement correctly separates the labeled restrictions?",
  choices: ["Pregnancy prevention ends when alcohol avoidance ends.", "Alcohol may resume now because only a one-month restriction applies.", "Continue avoiding ingested ethanol until two months after stopping; pregnancy prevention and blood-donation restrictions continue for at least three years.", "Blood donation is safe immediately after stopping if a pregnancy test is negative."],
  answer: 2, explanation: "The ethanol restriction lasts through two months after cessation. The separate pregnancy-prevention and blood-donation restrictions last at least three years after cessation; blood-donation restrictions apply to all patients.", reviewHref: "#oral-systemic"
});


psoriasisQuestionBank.push({
  id: "psoriasis-roflumilast-indication-strength", concept: "roflumilast-cream", lesson: "modern-topicals", difficulty: "Applied",
  prompt: "A four-year-old has a prescription for roflumilast cream 0.3 percent for plaque psoriasis. A caregiver asks whether the 0.05 percent eczema cream is the labeled psoriasis strength for this age. What is correct?",
  choices: ["The age alone determines the cream strength regardless of diagnosis.", "The current plaque-psoriasis indication uses 0.3 percent from age two; 0.05 percent has a separate atopic-dermatitis indication.", "All three cream strengths have identical psoriasis indications.", "Only the foam is labeled for psoriasis at age four."],
  answer: 1, explanation: "Select by indication as well as age. The lower-strength eczema cream does not replace the labeled 0.3 percent plaque-psoriasis formulation.", reviewHref: "#modern-topicals"
});

// Original cases covering specific corrections from the clinical audit.
psoriasisQuestionBank.push(
  {
    id: "psoriasis-spesolimab-after-infusion", concept: "spesolimab-prevention", difficulty: "Applied",
    prompt: "An adult's GPP flare resolved after intravenous spesolimab four weeks ago. The specialist plans subcutaneous treatment now. Which regimen follows the labeled transition?",
    choices: ["Repeat a 600 mg subcutaneous loading dose before every maintenance cycle.", "Start 300 mg subcutaneously now and every four weeks, without a loading dose.", "Give 900 mg subcutaneously every week.", "Wait six months because subcutaneous use cannot follow intravenous treatment."],
    answer: 1, explanation: "After intravenous flare treatment, subcutaneous spesolimab starts or resumes at 300 mg four weeks later and every four weeks. The 600 mg loading dose for a new subcutaneous start is not required in this transition.", reviewHref: "#pustular-erythrodermic"
  },
  {
    id: "psoriasis-apremilast-xr-switch", concept: "apremilast", difficulty: "Applied",
    prompt: "An adult with normal renal function is established on immediate-release apremilast 30 mg twice daily and is prescribed the labeled once-daily extended-release alternative. Which switch is correct?",
    choices: ["Take immediate-release 60 mg once daily instead.", "Use XR 30 mg once daily as a milligram-for-milligram replacement.", "Take both formulations together for a week.", "Begin XR 75 mg once daily the day after the last immediate-release dose."],
    answer: 3, explanation: "The labeled switch is from established immediate-release 30 mg twice daily to XR 75 mg once daily on the following day. The release formulations are not interchangeable milligram for milligram.", reviewHref: "#oral-systemic"
  },
  {
    id: "psoriasis-cyclosporine-creatinine", concept: "cyclosporine", difficulty: "Applied",
    prompt: "A psoriasis patient's pretreatment creatinine was 0.8 mg/dL. It is now 1.0 mg/dL and remains 1.0 on repeat testing within two weeks while taking Neoral. Which interpretation follows the psoriasis label?",
    choices: ["This is a persistent 25 percent increase; reduce the cyclosporine dose by 25 to 50 percent and continue close monitoring.", "This is only a 2.5 percent increase and needs no action.", "Continue unchanged because 1.0 mg/dL can fall within a laboratory reference range.", "Increase the dose because the creatinine has not doubled."],
    answer: 0, explanation: "The change is (1.0 - 0.8) / 0.8 = 0.25, or 25 percent. The label uses the patient's baseline, not just the laboratory upper limit. A persistent increase of at least 25 percent requires dose reduction.", reviewHref: "#oral-systemic"
  },
  {
    id: "psoriasis-methotrexate-tablet-count", concept: "methotrexate", difficulty: "Foundational",
    prompt: "A psoriasis prescription specifies methotrexate 15 mg orally every Monday using 2.5 mg tablets. Which instruction correctly expresses the prescribed dose?",
    choices: ["Take one tablet daily for six consecutive days.", "Take fifteen tablets every Monday.", "Take six tablets on Monday each week as prescribed.", "Take six tablets every morning."],
    answer: 2, explanation: "15 mg divided by 2.5 mg per tablet equals six tablets for the single weekly dose. The tablet count must not turn into a daily or six-day schedule.", reviewHref: "#oral-systemic"
  },
  {
    id: "psoriasis-bimekizumab-device-count", concept: "bimekizumab", difficulty: "Applied",
    prompt: "An adult's plaque-psoriasis bimekizumab dose is 320 mg. The supplied autoinjector contains 320 mg in 2 mL. How many autoinjectors deliver this dose?",
    choices: ["Two, because every bimekizumab dose requires two devices.", "One 320 mg autoinjector.", "Four, because each milliliter is a separate injection.", "Half of the single-use autoinjector."],
    answer: 1, explanation: "320 mg divided by 320 mg per device equals one device. Two devices would apply to 160 mg presentations, not the supplied 320 mg device.", reviewHref: "#biologic-pathways"
  },
  {
    id: "psoriasis-enstilar-quantity", concept: "vitamin-d-combination", difficulty: "Applied",
    prompt: "A 16-year-old uses a 60 g can of Enstilar in two days. Which counseling addresses the labeled quantity limit?",
    choices: ["This is acceptable because foam has no systemic steroid exposure.", "The limit is 60 g per application.", "Only adults have a quantity limit.", "This exceeds the limit of 60 g per four days; review application area, quantity and the treatment plan."],
    answer: 3, explanation: "Enstilar is labeled from age 12, but the maximum remains 60 g every four days. Using that amount in two days exceeds the limit and requires review of steroid and calcium-related risks.", reviewHref: "#topical-foundations"
  }
);

psoriasisQuestionBank.push(
  {
    id: "psoriasis-nbuvb-persistent-erythema", concept: "narrowband-uvb", difficulty: "Applied",
    prompt: "A patient arrives for narrowband-UVB treatment with redness from the last session still present after 60 hours. Under the AAD pathway, what is the appropriate response?",
    choices: ["Increase exposure because persistent redness proves the dose is effective.", "Switch to the broadband-UVB missed-session table without reassessment.", "Withhold today's treatment and have the phototherapy team return to a previously tolerated dose under its protocol.", "Keep the same dose and cover only the eyes."],
    answer: 2, explanation: "Erythema lasting beyond 48 hours calls for no treatment that day and a return to a previous dose that did not cause erythema. This is a toxicity-related adjustment, not a reason for automatic escalation.", reviewHref: "#phototherapy"
  },
  {
    id: "psoriasis-methotrexate-paternal-guideline", concept: "methotrexate", difficulty: "Applied",
    prompt: "A man with psoriatic arthritis takes methotrexate 20 mg weekly and is planning to father a child. He asks why his specialist cites EULAR guidance that differs from US label counseling. Which explanation is accurate?",
    choices: ["The EULAR 2024 update permits paternal continuation at up to 25 mg weekly; the specialist should document the individualized plan and label discrepancy.", "Paternal compatibility means maternal methotrexate is also compatible with pregnancy.", "The guideline permits paternal methotrexate at any dose, including oncology regimens.", "US labeling and EULAR give identical paternal instructions."],
    answer: 0, explanation: "EULAR's dose-limited paternal recommendation differs from US label precautions. It does not establish maternal pregnancy safety or cover higher doses. Counseling must identify the applicable guideline, dose and specialist plan.", reviewHref: "#oral-systemic"
  }
);

psoriasisQuestionBank.push({
  id: "psoriasis-ixekizumab-pediatric-boundary", concept: "biologic-selection", difficulty: "Applied",
  prompt: "A 12-year-old weighing exactly 50 kg starts ixekizumab for plaque psoriasis. Which schedule follows the US pediatric label?",
  choices: ["160 mg initially, then 80 mg every two weeks through week 12.", "80 mg initially, then 40 mg every four weeks.", "40 mg initially, then 20 mg every four weeks.", "160 mg initially, then 80 mg every four weeks."],
  answer: 1, explanation: "Exactly 50 kg belongs to the 25-to-50 kg group. The pediatric regimen has a single loading dose followed by every-four-week maintenance; it does not use the adult every-two-week loading phase.", reviewHref: "#biologic-pathways"
});

// Original cases for clinically important safety and dosing gaps.
psoriasisQuestionBank.push(
{
  "id": "psoriasis-tazarotene-pregnancy",
  "concept": "tazarotene-pregnancy",
  "difficulty": "Applied",
  "prompt": "A patient discovers she is pregnant while using tazarotene cream for plaque psoriasis. What is the appropriate response?",
  "choices": [
    "Continue because topical administration eliminates fetal risk.",
    "Stop tazarotene and contact the treating clinician for pregnancy and treatment assessment.",
    "Reduce application to alternate nights without contacting the clinician.",
    "Replace it with a halobetasol/tazarotene combination to remove the retinoid risk."
  ],
  "answer": 1,
  "explanation": "Tazarotene is contraindicated in pregnancy, including topical use. A combination containing tazarotene does not remove that restriction; exposure calls for clinical assessment and an alternative treatment plan.",
  "reviewHref": "#topical-foundations"
},
{
  "id": "psoriasis-brodalumab-dispensing",
  "concept": "brodalumab-dispensing",
  "difficulty": "Applied",
  "prompt": "An otherwise eligible adult has a brodalumab prescription from a certified prescriber, but patient enrollment is incomplete. What must the dispensing pharmacy do?",
  "choices": [
    "Dispense if the patient has no history of depression.",
    "Dispense a starter supply and complete enrollment afterward.",
    "Confirm pharmacy certification and completed patient enrollment/authorization before dispensing.",
    "Substitute bimekizumab without contacting the prescriber."
  ],
  "answer": 2,
  "explanation": "Brodalumab requires the REMS dispensing conditions, including certified participants and patient enrollment. A negative mood history does not waive those requirements; a different biologic is not an automatic substitution.",
  "reviewHref": "#biologic-pathways"
},
{
  "id": "psoriasis-ustekinumab-neurologic-warning",
  "concept": "ustekinumab-neurologic-warning",
  "difficulty": "Applied",
  "prompt": "A patient taking ustekinumab develops a new severe headache, confusion and visual disturbance. Which response best addresses the labeled safety concern?",
  "choices": [
    "Treat this as a routine injection-site reaction.",
    "Arrange urgent evaluation for PRES and other neurologic emergencies; discontinue ustekinumab if PRES is suspected.",
    "Wait for the next scheduled injection to assess whether symptoms recur.",
    "Increase ustekinumab because neurologic symptoms prove loss of skin control."
  ],
  "answer": 1,
  "explanation": "These symptoms warrant urgent neurologic evaluation. Ustekinumab labeling calls for discontinuation and prompt treatment when PRES is suspected; symptoms alone do not establish a definitive diagnosis.",
  "reviewHref": "#biologic-pathways"
},
{
  "id": "psoriasis-bimekizumab-liver-injury",
  "concept": "bimekizumab-liver-injury",
  "difficulty": "Applied",
  "prompt": "A patient on bimekizumab has combined transaminase and bilirubin elevations. After evaluation, the clinician attributes them to bimekizumab. What does the label direct?",
  "choices": [
    "Continue until candidiasis also develops.",
    "Reduce the dose and ignore the bilirubin result.",
    "Resume immediately once jaundice improves without reviewing the cause.",
    "Permanently discontinue bimekizumab for the causally associated combined elevations."
  ],
  "answer": 3,
  "explanation": "Suspected drug-induced injury first requires interruption and investigation. Once combined transaminase and bilirubin elevations are causally associated with bimekizumab, the label directs permanent discontinuation.",
  "reviewHref": "#biologic-pathways"
},
{
  "id": "psoriasis-p19-pediatric-eligibility",
  "concept": "p19-pediatric-eligibility",
  "difficulty": "Applied",
  "prompt": "A seven-year-old weighing 35 kg is being assessed for systemic treatment of plaque psoriasis. Which comparison follows the reviewed US labels?",
  "choices": [
    "Risankizumab has a 55 mg pediatric dose below 40 kg; guselkumab pediatric eligibility also requires at least 40 kg.",
    "Both drugs use 150 mg because age alone determines dosing.",
    "Guselkumab is labeled at 100 mg for every child aged six or older regardless of weight.",
    "Tildrakizumab is the only one with a pediatric plaque-psoriasis indication."
  ],
  "answer": 0,
  "explanation": "The age-six risankizumab indication includes a 55 mg dose below 40 kg. Guselkumab requires both age six or older and weight at least 40 kg. Eligibility and dosing do not substitute for individualized treatment selection.",
  "reviewHref": "#biologic-pathways"
},
{
  "id": "psoriasis-etanercept-pediatric-dose",
  "concept": "etanercept-pediatric-dose",
  "difficulty": "Applied",
  "prompt": "An eight-year-old weighing 30 kg with plaque psoriasis is prescribed labeled weight-based etanercept. What dose and presentation plan is correct?",
  "choices": [
    "24 mg twice weekly using the adult induction schedule.",
    "50 mg twice weekly for three months.",
    "24 mg once weekly, using a suitable vial presentation to measure the dose.",
    "30 mg every day from a partially discharged autoinjector."
  ],
  "answer": 2,
  "explanation": "0.8 mg/kg multiplied by 30 kg equals 24 mg once weekly, below the 50 mg weekly ceiling. The label directs an appropriate vial for doses other than 25 or 50 mg; pediatric psoriasis does not use adult twice-weekly induction.",
  "reviewHref": "#biologic-pathways"
}
);
