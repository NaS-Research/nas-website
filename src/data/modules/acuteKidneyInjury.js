import { acuteKidneyInjuryQuestionBank } from "@/data/questionBanks/acuteKidneyInjury";

export const acuteKidneyInjuryModule = {
  slug: "acute-kidney-injury",
  number: "48",
  title: "Acute Kidney Injury",
  source: "Published KDIGO AKI guidance, current acute kidney disease consensus, and the draft 2026 KDIGO update",
  description: "Detect and stage a changing kidney trajectory, reason from physiology to cause, restore perfusion without fluid harm, steward medicines and exposures, treat complications, and organize kidney recovery.",
  topics: ["Detection and staging", "Etiologic reasoning", "Hemodynamics and fluids", "Medication stewardship", "Kidney support", "Recovery and AKD"],
  outcomes: [
    "Diagnose and stage AKI using creatinine and urine-output trajectories while recognizing lag, dilution, secretion effects, and unstable filtration estimates.",
    "Differentiate hemodynamic, tubular, interstitial, glomerular, vascular, and obstructive causes through exposure, hemodynamics, sediment, imaging, and response.",
    "Select fluids, vasopressors, decongestion, and repeated response measurements according to the actual circulatory defect.",
    "Classify medication effects, individualize drug dosing during unstable clearance, and distinguish true nephrotoxicity from pseudoAKI and coincident injury.",
    "Treat hyperkalemia, acidosis, volume overload, uremic complications, and toxins, and initiate kidney replacement therapy for clinical indications rather than a creatinine threshold.",
    "Recognize recovery and acute kidney disease, update doses rapidly, remove temporary access, restart beneficial therapy, and assign post-AKI follow-up.",
  ],
  submodules: [
    {
      slug: "detection-and-staging", title: "Detection and Staging", visual: "aki-detect",
      summary: "AKI is a time-dependent change in filtration and urine production. Creatinine and urine output are useful but delayed, contextual, and mechanistically incomplete markers.",
      concepts: ["Creatinine criteria", "Urine-output criteria", "KDIGO stage", "Creatinine kinetics", "PseudoAKI"],
      application: "Reconstruct baseline, calculate change and time, measure urine output correctly, stage by the more severe criterion, and explain why the marker may not equal structural injury or real-time GFR.",
      lesson: [
        { heading: "Diagnose change, not a number", body: "Published KDIGO criteria define AKI by a creatinine increase of at least 0.3 mg/dL within 48 hours, at least 1.5 times baseline within seven days, or urine output below 0.5 mL/kg/h for at least six hours. Reconstruct baseline from prior records rather than assuming the admission value represents normal kidney function." },
        { heading: "Stage by the worse expression", body: "Creatinine and urine output can disagree. Use the more severe criterion and update stage as the trajectory changes. Verify collection, catheter patency, weight, diuretics, extracorporeal clearance, and duration before attaching meaning to oliguria or anuria." },
        { heading: "Respect creatinine kinetics", body: "Creatinine rises after filtration falls and is changed by muscle production, nutrition, fluid dilution, tubular secretion, assay effects, and dialysis. Standard eGFR and creatinine-clearance equations assume steady state and can misrepresent real-time clearance during injury or recovery." },
        { heading: "Separate pseudoAKI from injury", body: "Trimethoprim, cobicistat, cimetidine, and selected targeted therapies can inhibit tubular creatinine secretion without reducing true filtration. Use the medication timeline, urine findings, volume, electrolytes, alternative filtration markers when useful, and structural-injury clues before labeling nephrotoxicity." },
      ],
      keyPoints: ["AKI is a trajectory.", "Urine output can diagnose before creatinine rises.", "Use the worse staging criterion.", "A creatinine rise does not always equal injury."],
      check: { question: "A patient has severe oliguria for 14 hours but only a small creatinine rise. How should AKI severity be classified?", choices: ["Use the urine-output criterion if it gives the higher stage", "Ignore urine output", "Wait for creatinine to triple", "Use eGFR alone"], answer: 0, rationale: "KDIGO staging uses the more severe creatinine or urine-output criterion.", reviewHref: "#detection-and-staging" },
    },
    {
      slug: "etiology-and-diagnostic-reasoning", title: "Etiology and Diagnostic Reasoning", visual: "aki-cause",
      summary: "Perfusion, intrinsic kidney injury, and obstruction are starting categories. Real patients often have several simultaneous mechanisms that must be revised as evidence accumulates.",
      concepts: ["Hemodynamic AKI", "Acute tubular injury", "Interstitial nephritis", "Glomerular disease", "Obstruction"],
      application: "Build a timeline of hemodynamics, losses, drugs, infection, inflammation, urine sediment, protein and blood, bladder drainage, imaging, and response, then state which mechanisms can coexist.",
      lesson: [
        { heading: "Define the hemodynamic defect", body: "Reduced kidney perfusion can arise from volume loss, vasodilation, low cardiac output, venous congestion, intra-abdominal pressure, or altered arteriolar tone. Edema does not prove adequate effective arterial volume, and hypotension does not prove that more fluid is the correct treatment." },
        { heading: "Use fractional excretion as supporting evidence", body: "Fractional excretion of sodium is calculated as urine sodium multiplied by plasma creatinine, divided by plasma sodium multiplied by urine creatinine, then multiplied by 100. A low value can support sodium avidity, but it does not prove simple volume depletion. Sepsis, heart failure, glomerular disease, pigment injury, early obstruction, diuretics, CKD, and mixed injury can weaken common thresholds. Fractional excretion of urea may be less affected by loop diuretics, but it is not a definitive replacement. Interpret either value with sediment, hemodynamics, timing, and treatment exposure." },
        { heading: "Recognize tubular injury", body: "Ischemia, sepsis, pigments, and nephrotoxins can injure tubular cells. Exposure and shock timing, persistent dysfunction, granular casts, transport abnormalities, and delayed recovery support acute tubular injury, but no single sediment finding replaces the whole trajectory." },
        { heading: "Use active sediment to redirect the workup", body: "Pyuria and white-cell casts with a compatible drug exposure can support interstitial nephritis, although fever, rash, and eosinophilia are insensitive. Dysmorphic red cells, red-cell casts, proteinuria, hypertension, pulmonary findings, or systemic inflammation raise concern for glomerular disease and may require urgent serology and biopsy." },
        { heading: "Relieve obstruction before it becomes irreversible", body: "Check catheter patency and bladder retention, then image the urinary tract when obstruction is plausible. Hydronephrosis may be absent early or in selected retroperitoneal conditions. Bilateral obstruction or obstruction of a solitary functioning kidney can require urgent decompression." },
      ],
      keyPoints: ["Several AKI mechanisms can coexist.", "Edema is not a volume diagnosis.", "Active sediment can change urgency.", "Early imaging can miss selected obstruction."],
      check: { question: "Which urine finding most strongly redirects AKI evaluation toward glomerular inflammation?", choices: ["Red-cell casts with proteinuria", "A completely bland sediment", "Glucose after an SGLT2 inhibitor", "One hyaline cast after exercise"], answer: 0, rationale: "Red-cell casts and proteinuria suggest glomerular capillary injury and warrant focused urgent evaluation.", reviewHref: "#etiology-and-diagnostic-reasoning" },
    },
    {
      slug: "hemodynamics-and-fluid-management", title: "Hemodynamics and Fluid Management", visual: "aki-hemodynamic",
      summary: "Resuscitation is an experiment with a goal and stop rule. Perfusion improves when treatment matches volume, tone, cardiac output, venous pressure, and oxygen delivery.",
      concepts: ["Fluid responsiveness", "Balanced crystalloids", "Vasopressors", "Venous congestion", "Fluid overload"],
      application: "Name the suspected circulatory defect, choose a measurable intervention, define response and harm endpoints, and reassess before repeating fluid, pressure, or decongestion therapy.",
      lesson: [
        { heading: "Test whether fluid will improve flow", body: "Fluid responsiveness is a dynamic increase in flow after a reversible preload challenge. It does not prove that another bolus is safe or necessary. Use passive leg raise or a small challenge with a measured cardiac or perfusion endpoint, while watching oxygenation and venous congestion." },
        { heading: "Choose fluid composition intentionally", body: "Balanced crystalloids reduce chloride exposure compared with saline in many resuscitation settings. Selection still depends on sodium and chloride, acid-base status, traumatic brain injury, medication compatibility, losses, and the resuscitation goal. No crystalloid is universally correct." },
        { heading: "Treat vasoplegia with pressure support", body: "After appropriate volume assessment, norepinephrine is generally first line for vasodilatory shock. Restore perfusion pressure while treating infection or another cause. More fluid can worsen edema when vascular tone, not volume, is the dominant problem." },
        { heading: "Recognize congestion as a kidney insult", body: "Elevated venous and intra-abdominal pressures can reduce the filtration gradient and cause kidney edema. Stop unnecessary fluid, concentrate inputs, and decongest when the phenotype supports it. Loop diuretics treat overload, not the structural kidney injury itself." },
      ],
      keyPoints: ["Responsiveness does not equal need.", "Every bolus needs a stop rule.", "Vasoplegia needs vascular tone.", "Congestion can lower filtration."],
      check: { question: "A fluid challenge increases stroke volume, but oxygenation and venous congestion worsen. What is the best interpretation?", choices: ["The patient is responsive but additional fluid may still be harmful", "Fluid must continue until creatinine normalizes", "Congestion proves dehydration", "Vasopressors are never appropriate"], answer: 0, rationale: "Fluid responsiveness describes a flow response, not the net safety or necessity of more volume.", reviewHref: "#hemodynamics-and-fluid-management" },
    },
    {
      slug: "medication-and-exposure-stewardship", title: "Medication and Exposure Stewardship", visual: "aki-drugs",
      summary: "Medication review distinguishes perfusion effects, structural injury, immune reactions, crystal disease, secretion changes, and accumulation, then protects both acute safety and long-term benefit.",
      concepts: ["Nephrotoxin timeline", "Unstable-function dosing", "Loading and maintenance doses", "Contrast-associated AKI", "Medication restart"],
      application: "For every drug and exposure, state the indication, kidney mechanism, clearance, target exposure, toxicity, hold or dose action, monitoring, and restart plan.",
      lesson: [
        { heading: "Classify the drug effect before acting", body: "NSAIDs, RAAS drugs, antimicrobials, chemotherapy, supplements, contrast, crystals, immune reactions, and secretion inhibitors affect the kidney differently. Build a complete timeline including OTC products. Stop, substitute, monitor, or continue according to mechanism and treatment necessity rather than using a blanket nephrotoxin label." },
        { heading: "Reason through arteriolar pharmacology", body: "Prostaglandins help preserve afferent arteriolar dilation during threatened perfusion, so NSAID inhibition can reduce glomerular pressure when kidney blood flow is prostaglandin dependent. ACE inhibitors and ARBs reduce angiotensin II mediated efferent arteriolar tone, which can lower intraglomerular pressure during volume depletion, renal artery stenosis, or severe hemodynamic stress. These are functional mechanisms, not automatic proof of structural toxicity. Treat the circulatory problem, remove avoidable exposure when appropriate, and reassess whether long-term disease-modifying therapy should return after stabilization." },
        { heading: "Control aminoglycoside exposure", body: "Aminoglycosides accumulate in proximal tubular cells and can produce a delayed, often nonoliguric tubular injury. Risk rises with prolonged or excessive exposure, preexisting kidney dysfunction, volume depletion, critical illness, and other nephrotoxic drugs. Use the drug only when its antimicrobial value justifies the risk, optimize the regimen to the infection and changing clearance, monitor concentrations using the selected dosing strategy, follow kidney and auditory function, and narrow or stop therapy as soon as clinically appropriate." },
        { heading: "Dose for a changing clearance", body: "Steady-state equations can mislead during AKI. Use creatinine and urine trajectory, indication severity, volume of distribution, protein binding, nonrenal clearance, therapeutic index, levels, clinical response, and KRT prescription. A loading dose is driven mainly by distribution, while maintenance is driven mainly by clearance." },
        { heading: "Use contrast when net benefit supports it", body: "Creatinine rise after contrast is temporally associated but may have competing causes. Weigh the urgency and value of imaging, active AKI, hemodynamics, route and dose, alternatives, hydration when appropriate, and concurrent insults. Isotonic volume expansion is the principal preventive intervention for selected high-risk patients who can tolerate it. N-acetylcysteine is not recommended for routine prevention, and sodium bicarbonate is not preferred over saline. Metformin management follows kidney function, AKI status, and procedure type rather than a universal contrast hold. Do not withhold a life-saving vascular study because causal risk was overstated." },
        { heading: "Plan the restart before discharge", body: "Temporary holds of RAAS or SGLT2 therapy may be appropriate during severe hemodynamic illness. Chronic cardiac and kidney benefit may return after stabilization. Document the reason for holding, pressure, potassium, volume, laboratory criteria, follow-up date, and responsible clinician." },
      ],
      keyPoints: ["Mechanism changes the drug action.", "Loading and maintenance are different calculations.", "Contrast decisions use net benefit.", "Every hold needs a restart plan."],
      check: { question: "Why should an antibiotic loading dose not be reduced automatically in AKI?", choices: ["Loading dose depends mainly on distribution rather than clearance", "AKI increases every drug's clearance", "Maintenance and loading doses are identical", "Drug exposure cannot be monitored"], answer: 0, rationale: "Reduced clearance mainly changes maintenance, while critical illness can actually expand the distribution volume needed for loading.", reviewHref: "#medication-and-exposure-stewardship" },
    },
    {
      "slug": "complications-and-kidney-support",
      "title": "Complications and Kidney Support",
      "visual": "aki-complications",
      "summary": "Recognize electrolyte, acid-base, volume, and uremic threats; distinguish temporary stabilization from definitive clearance. Match kidney support and nutrition to the clinical trajectory.",
      "concepts": [
        "Hyperkalemia stabilization and removal",
        "Cause-directed acidosis care",
        "KRT indications and modality",
        "Delivered treatment",
        "Nutrition and treatment losses"
      ],
      "application": "Identify the immediate threat, act without delaying emergency care for a complete workup, plan definitive clearance and rebound monitoring, and reassess kidney support and nutrition against measured response and patient goals.",
      "lesson": [
        {
          "heading": "Treat hyperkalemia in separate tasks",
          "body": "A normal ECG does not exclude dangerous hyperkalemia. Review the potassium trajectory, sampling or hemolysis, drugs, tissue breakdown, acid-base state, and urine output; checking a possible sample artifact must not delay treatment of a credible emergency. IV calcium, when indicated, temporarily stabilizes the myocardium without lowering potassium. Insulin with glucose shifts potassium into cells; monitor glucose for delayed hypoglycemia, especially with impaired kidney function or repeat treatment. A beta-2 agonist is an adjunct with a variable response, not sole therapy for severe disease. Shifting does not remove potassium from the body: plan elimination, repeat potassium assessment, and rebound monitoring. Kidney excretion depends on remaining function, and life-threatening or refractory disease may require urgent KRT. Oral binders remove potassium through the gastrointestinal tract, but the U.S. SPS, patiromer, and sodium zirconium cyclosilicate labels exclude emergency treatment of life-threatening hyperkalemia because of delayed onset. The UKKA guideline uses newer binders as adjuncts in some acute-care pathways; that does not replace immediate stabilization, shifting, or dialysis when indicated. Review bowel function and the individual label: SPS carries serious intestinal-injury risk and should not be combined with sorbitol; patiromer can lower magnesium; sodium zirconium cyclosilicate adds sodium and can cause edema. Oral-drug separation requirements and exceptions differ by product and interacting medicine."
        },
        {
          "heading": "Treat the cause of acidosis",
          "body": "Distinguish the low-pH state from the process producing it. Interpret pH, bicarbonate, and PCO2 together, compare the respiratory response with expected compensation, and consider a mixed disorder when the response differs. Compensation does not guarantee normal pH. Use the anion gap with albumin context, chloride, lactate, ketones, exposure history, perfusion, and kidney function to identify acid generation, buffer loss, or impaired excretion. Treat the cause and assess ventilation rather than chasing bicarbonate alone. Sodium bicarbonate is selective: it adds sodium and volume, can alter potassium and calcium, and generates carbon dioxide that requires pulmonary elimination. Reassess chemistry, fluid burden, and respiratory capacity during treatment. It is not routine acute hyperkalemia therapy or a universal substitute for treating shock, toxin exposure, or the underlying acid source. Refractory life-threatening acidemia can require KRT; use the whole clinical context rather than an isolated laboratory cutoff."
        },
        {
          "heading": "Start KRT for failed homeostasis",
          "body": "Urgent KRT addresses life-threatening or refractory electrolyte, acid-base, or volume problems and relevant uremic complications. Compare severity, treatment response, oxygenation, urine output, the trajectory, reversibility, and patient goals; do not wait for an arbitrary creatinine or BUN threshold. Temporary potassium stabilization and shifting can bridge to definitive treatment but cannot establish that body potassium has been removed. A suspected dialyzable poisoning needs toxin-specific specialist assessment; kidney dysfunction alone is not a universal toxin-clearance rule. Arrange appropriate expertise and access while treating immediate threats. KRT supports homeostasis while the cause is managed; neither every episode of AKI nor every mild edema finding requires it."
        },
        {
          "heading": "Match modality and delivered dose",
          "body": "Intermittent, continuous, and prolonged therapies are complementary delivery strategies. Intermittent treatment can provide rapid solute clearance; continuous treatment can support gradual fluid and solute control when hemodynamic tolerance or intracranial concerns favor it. Selection still depends on urgency, circulation, brain injury, catabolism, toxin-specific goals, access, anticoagulation, staffing, and available expertise. Continuous therapy is not inherently more effective and has not established general mortality superiority over intermittent therapy. A prescription is not proof of delivery: interruptions, access dysfunction, and circuit clotting can reduce treatment. Review actual delivery and serial potassium, acid-base and volume response, then revise the strategy against its clinical goals."
        },
        {
          "heading": "Feed the patient, not the creatinine",
          "body": "Separate critical illness with catabolism from noncatabolic kidney dysfunction. In critically ill AKI, do not reduce protein solely to postpone KRT: illness and extracorporeal amino-acid and protein losses can increase needs even when creatinine is high. Individualize energy and protein goals with nutrition expertise, using the clinical state, usual or pre-illness body size where appropriate, feeding tolerance, actual intake, and treatment delivery. Fluid accumulation can distort weight. Avoid both underfeeding and overfeeding, and include nonnutritional calories from KRT-related glucose or citrate when present. Monitor glucose, potassium, phosphorus, magnesium, sodium, fluid, and nitrogen balance when useful, with attention to refeeding risk. Adjust the plan to measured deficits or excesses and the current KRT modality; a single low-protein renal diet or a renal-specific formula is not appropriate for every patient."
        }
      ],
      "keyPoints": [
        "Calcium stabilizes; shifting is temporary; elimination is definitive.",
        "A normal ECG cannot exclude dangerous hyperkalemia.",
        "Acidosis care follows cause, ventilation, and treatment risks.",
        "KRT urgency follows clinical homeostatic failure and trajectory.",
        "Delivered treatment and individualized nutrition need reassessment."
      ],
      "check": {
        "question": "Which finding is the strongest reason to initiate urgent KRT?",
        "choices": [
          "Refractory hyperkalemia with ongoing ECG risk",
          "Creatinine of 4 mg/dL without complications",
          "A single mildly elevated BUN",
          "The presence of any edema"
        ],
        "answer": 0,
        "rationale": "Refractory hyperkalemia with ongoing electrical risk represents a life-threatening failure of homeostasis and can require urgent KRT while temporary stabilization continues. Creatinine of 4 mg/dL without complications is not an independent start rule. A single mildly elevated BUN also lacks that context. Any edema is not equivalent to refractory volume overload impairing organ function.",
        "reviewHref": "#complications-and-kidney-support"
      }
    },
    {
      slug: "recovery-akd-and-follow-up", title: "Recovery, Acute Kidney Disease, and Follow-Up", visual: "aki-recovery",
      summary: "Recovery is an active phase in which native clearance, drug exposure, dialysis need, chronic disease therapy, and long-term kidney and cardiovascular risk change quickly.",
      concepts: ["Kidney recovery", "KRT liberation", "Drug redosing", "AKD", "Post-AKI follow-up"],
      application: "Track native urine and clearance, reduce or stop support safely, update every dose, remove temporary access, prevent recurrence, and assign laboratory, medication, and nephrology follow-up.",
      lesson: [
        { heading: "Recognize recovery before creatinine catches up", body: "Increasing urine output and native clearance can precede a clear fall in serum creatinine. Reassess antibiotic and anticoagulant doses, electrolytes, fluid, nutrition, and dialysis needs frequently so recovery does not create underexposure or over-removal." },
        { heading: "Test readiness to stop KRT", body: "Consider urine output, interdialytic creatinine and electrolyte trajectory, measured clearance when useful, volume control, catabolism, hemodynamics, and the remaining cause. Remove temporary vascular access when dialysis is no longer expected." },
        { heading: "Use AKD as a bridge, not a final label", body: "Dysfunction persisting beyond seven days and through the interval before 90 days can be described as acute kidney disease. The 2026 KDIGO update remains a public-review draft, so evolving biomarker and staging concepts should be labeled as draft until final publication." },
        { heading: "Close the post-AKI loop", body: "Arrange early creatinine, electrolytes, pressure, volume, and medication review, then reassess kidney function and albuminuria by three months. Review nephrotoxin avoidance, sick-day risks, diabetes and heart-failure therapy, recurrence prevention, access, and whether nephrology follow-up is needed." },
      ],
      keyPoints: ["Recovery changes drug clearance quickly.", "KRT liberation is measured.", "The 2026 update is still draft.", "AKI creates future CKD and cardiovascular risk."],
      check: { question: "Why must renally cleared antimicrobial doses be reviewed frequently during AKI recovery?", choices: ["Native clearance can improve before serum creatinine fully reflects recovery", "Recovery always stops urine output", "Dialysis permanently fixes the dose", "Drug levels cannot change"], answer: 0, rationale: "A lagging creatinine can conceal rapidly improving clearance and cause underdosing if reduced regimens persist.", reviewHref: "#recovery-akd-and-follow-up" },
    },
  ],
  references: [
    { label: "KDIGO Acute Kidney Injury Guideline Resources", href: "https://kdigo.org/guidelines/acute-kidney-injury/" },
    { label: "KDIGO 2012 Published AKI Guideline", href: "https://kdigo.org/wp-content/uploads/2016/10/KDIGO-2012-AKI-Guideline-English.pdf" },
    { label: "KDIGO 2026 AKI and AKD Public Review Draft", href: "https://kdigo.org/wp-content/uploads/2026/03/KDIGO-2026-AKI-AKD-Guideline-Public-Review-Draft-March-2026.pdf" },
    { label: "ACR Manual on Contrast Media", href: "https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Contrast-Manual" },
    {"label": "UK Kidney Association. Adult hyperkalaemia guideline (July 2026 update): acute-care recommendations", "href": "https://www.ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults-0"},
    {"label": "DailyMed. Sodium polystyrene sulfonate (Epic): emergency limitation and safety", "href": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=61cc890b-eb3d-494c-ae45-629a27e721ce"},
    {"label": "DailyMed. Veltassa: emergency limitation and product-specific interactions", "href": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=bf002984-d6c9-46df-aecb-a07733f763c1"},
    {"label": "DailyMed. Lokelma (AS repackaged label): emergency limitation and sodium/edema precautions", "href": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7f7ed64d-8480-4143-a207-29c24a0b9363"},
    {"label": "Lameire and Kellum. KDIGO AKI summary, Part 2 (2013): kidney support", "href": "https://doi.org/10.1186/cc11455"},
    {"label": "Sabatino et al. ESPEN practical kidney nutrition guideline (2024)", "href": "https://doi.org/10.1016/j.clnu.2024.08.002"},
    {"label": "Jung et al. French metabolic acidosis recommendations (2019): diagnosis and physiological treatment risks", "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6695455/"},
    {"label": "FDA. Amneal ready-to-use 1.26% sodium bicarbonate label (2026): sodium, volume, electrolyte and carbon-dioxide risks", "href": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/220790Orig1s000lbl.pdf"},
  ],
  questionBank: acuteKidneyInjuryQuestionBank,
};
