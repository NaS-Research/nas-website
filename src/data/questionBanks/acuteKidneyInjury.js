const concepts=[
{name:"AKI creatinine definition",lesson:"detection-and-staging",principle:"AKI includes a creatinine rise of at least 0.3 mg/dL within 48 hours or at least 1.5 times baseline within seven days.",action:"Reconstruct baseline and trend rather than interpreting one isolated value.",assessment:"Review prior creatinine, timing, fluid balance, muscle mass, medications, assay, and urine output.",hazard:"Using admission creatinine as baseline can miss community-acquired AKI.",why:"AKI is defined by change over time rather than an absolute creatinine threshold."},
{name:"urine-output definition",lesson:"detection-and-staging",principle:"Urine output below 0.5 mL/kg/h for at least six hours can diagnose AKI even before creatinine rises.",action:"Measure timed output accurately and normalize to an appropriate weight.",assessment:"Review catheter patency, collection, weight, diuretics, obstruction, hemodynamics, and duration.",hazard:"Ignoring oliguria can delay detection while creatinine is still lagging.",why:"Urine output changes quickly with filtration, tubular function, perfusion, and obstruction."},
{name:"AKI staging",lesson:"detection-and-staging",principle:"Stage AKI by the more severe creatinine or urine-output criterion.",action:"Update stage as the trajectory evolves and connect it to monitoring intensity.",assessment:"Review baseline, peak creatinine, urine-output rate and duration, KRT, complications, and recovery.",hazard:"Using creatinine alone can under-stage prolonged severe oliguria.",why:"The two criteria capture different functional expressions of kidney injury."},
{name:"creatinine kinetics",lesson:"detection-and-staging",principle:"Creatinine lags abrupt GFR change and is altered by production, distribution volume, secretion, and extracorporeal clearance.",action:"Interpret trend with timing and clinical context rather than converting it directly into real-time GFR.",assessment:"Review trajectory, fluid accumulation, muscle mass, drugs blocking secretion, nutrition, KRT, and assay.",hazard:"A steady-state eGFR equation can be misleading while creatinine is changing rapidly.",why:"Standard filtration equations assume a stable creatinine production and elimination state."},
{name:"pseudoAKI",lesson:"detection-and-staging",principle:"Trimethoprim, cobicistat, cimetidine, and some targeted therapies can raise creatinine by reducing tubular secretion without a true GFR decline.",action:"Compare timeline, urine, alternative filtration markers when useful, and other evidence before stopping essential therapy.",assessment:"Review drug start, creatinine change, cystatin C context, urine findings, volume, electrolytes, and structural-injury clues.",hazard:"Calling every drug-related creatinine rise nephrotoxicity can cause unnecessary discontinuation.",why:"Serum creatinine reflects both filtration and proximal tubular secretion."},
{name:"hemodynamic AKI",lesson:"etiology-and-diagnostic-reasoning",principle:"Reduced effective kidney perfusion can result from volume loss, vasodilation, low cardiac output, venous congestion, or altered autoregulation.",action:"Identify the hemodynamic defect and test a targeted intervention rather than reflexively giving fluid.",assessment:"Review losses, pressure, perfusion, cardiac function, venous congestion, dynamic response, drugs, and infection.",hazard:"Edema does not exclude intravascular underfilling, and hypotension does not prove volume depletion.",why:"Kidney filtration depends on arterial pressure, cardiac output, venous pressure, and arteriolar tone together."},
{name:"fractional excretion interpretation",lesson:"etiology-and-diagnostic-reasoning",principle:"Fractional excretion of sodium and urea are contextual markers of tubular handling, not stand-alone diagnoses of volume depletion or structural injury.",action:"Calculate the value correctly and interpret it with diuretic exposure, CKD, sepsis, heart failure, glomerular disease, obstruction, sediment, and timing.",assessment:"Review paired urine and plasma sodium, urea, and creatinine values, collection timing, diuretics, hemodynamics, urine sediment, CKD, and treatment response.",hazard:"Applying a fixed FENa threshold as proof of prerenal or intrinsic AKI can misclassify mixed or treatment-altered physiology.",why:"Many kidney and systemic states change sodium or urea handling independently of a simple perfusion-versus-tubular-injury split."},
{name:"acute tubular injury",lesson:"etiology-and-diagnostic-reasoning",principle:"Ischemia and nephrotoxins can injure tubular cells, producing impaired transport, granular casts, and delayed recovery.",action:"Remove insults, optimize perfusion, manage complications, and avoid therapies that claim to reverse established injury without evidence.",assessment:"Review shock and exposure timeline, urine sediment, output, electrolytes, creatinine trajectory, and competing causes.",hazard:"Labeling all hospital AKI as prerenal can delay recognition of structural tubular injury.",why:"Persistent or severe insults convert functional adaptation into cellular damage."},
{name:"acute interstitial nephritis",lesson:"etiology-and-diagnostic-reasoning",principle:"Drug-induced immune interstitial injury may present without the classic fever, rash, and eosinophilia triad.",action:"Stop plausible triggers and involve nephrology when diagnosis, biopsy, or immunosuppression is uncertain.",assessment:"Review medication timeline, pyuria, casts, systemic allergy features, infection, autoimmune disease, and kidney biopsy value.",hazard:"A normal eosinophil count does not exclude interstitial nephritis.",why:"The classic hypersensitivity findings are insensitive."},
{name:"glomerular AKI",lesson:"etiology-and-diagnostic-reasoning",principle:"Dysmorphic hematuria, red-cell casts, proteinuria, hypertension, and systemic clues raise concern for glomerular inflammation.",action:"Obtain focused serology and urgent nephrology evaluation, with biopsy when it changes treatment.",assessment:"Review urine microscopy, protein quantification, complement, ANCA and other targeted tests, pulmonary symptoms, infection, and drugs.",hazard:"Treating active sediment as uncomplicated tubular injury can delay kidney-saving therapy.",why:"Glomerular capillary injury produces a distinct urinary and systemic phenotype."},
{name:"postrenal obstruction",lesson:"etiology-and-diagnostic-reasoning",principle:"Obstruction can occur at bladder, ureter, or collecting system and may lack hydronephrosis early or in selected settings.",action:"Check bladder drainage and use imaging and specialist decompression according to level and urgency.",assessment:"Review retention, catheter, prostate and pelvic disease, stones, urine output, pain, ultrasound, and bilateral or solitary-kidney risk.",hazard:"A single negative early ultrasound does not exclude every clinically plausible obstruction.",why:"Anatomic dilation depends on time, hydration, location, and tissue compliance."},
{name:"fluid responsiveness",lesson:"hemodynamics-and-fluid-management",principle:"Fluid responsiveness is a dynamic increase in flow after a reversible preload challenge and is not synonymous with a need for fluid.",action:"Use a small challenge or passive leg raise with a measured endpoint and stop rule.",assessment:"Review stroke volume or pulse response, perfusion, oxygenation, venous congestion, losses, and cumulative balance.",hazard:"Giving repeated blind boluses can convert underperfusion into harmful fluid overload.",why:"A patient may respond transiently while the risk of additional fluid still exceeds benefit."},
{name:"balanced crystalloids",lesson:"hemodynamics-and-fluid-management",principle:"Balanced crystalloids often reduce chloride load compared with normal saline during resuscitation.",action:"Choose fluid by indication, electrolytes, acid-base state, neurologic context, compatibility, and volume goal.",assessment:"Review sodium, chloride, bicarbonate, potassium, brain injury, losses, medication compatibility, and response.",hazard:"Calling one crystalloid universally best ignores patient and fluid composition.",why:"Fluid composition can affect chloride, acid-base balance, and specific clinical risks."},
{name:"vasopressor-supported perfusion",lesson:"hemodynamics-and-fluid-management",principle:"Norepinephrine is generally first-line for vasodilatory shock after appropriate volume assessment.",action:"Restore perfusion pressure while treating infection or other cause and monitoring limb, cardiac, and kidney response.",assessment:"Review MAP, lactate, mentation, urine output, cardiac function, arrhythmia, dose, source control, and volume status.",hazard:"Continuing fluid when vasoplegia is the dominant defect can worsen edema without restoring pressure.",why:"Vascular tone rather than intravascular volume may be the limiting hemodynamic variable."},
{name:"venous congestion",lesson:"hemodynamics-and-fluid-management",principle:"Elevated venous pressure can reduce kidney filtration and cause organ edema even when arterial pressure appears adequate.",action:"Treat the congestive phenotype with decongestion and cardiac management rather than reflex fluid.",assessment:"Review JVP, edema, ascites, cardiac imaging, oxygenation, weight, urine response, abdominal pressure, and perfusion.",hazard:"Interpreting creatinine rise during effective decongestion without the congestion trajectory can stop necessary therapy prematurely.",why:"Kidney function depends on the pressure gradient across the organ, not arterial pressure alone."},
{name:"fluid overload",lesson:"hemodynamics-and-fluid-management",principle:"Positive balance can worsen pulmonary function, tissue edema, wound healing, and KRT outcomes.",action:"Stop maintenance fluids, concentrate inputs, use diuretics for overload when responsive, and escalate when refractory.",assessment:"Review cumulative balance, weight, oxygenation, edema, intake sources, urine response, hemodynamics, and KRT indications.",hazard:"Using loop diuretics to treat the creatinine rather than volume status does not reverse AKI.",why:"Diuretics manage sodium and water accumulation but do not repair injured nephrons."},
{name:"nephrotoxin stewardship",lesson:"medication-and-exposure-stewardship",principle:"AKI medication review distinguishes hemodynamic effects, direct toxicity, immune injury, crystal obstruction, secretion effects, and accumulation.",action:"Build an exposure timeline and stop, substitute, dose-adjust, monitor, or later restart according to mechanism and indication.",assessment:"Review prescriptions, OTC NSAIDs, contrast, antimicrobials, chemotherapy, supplements, levels, combinations, and necessity.",hazard:"A blanket stop-everything response can remove beneficial therapy without identifying the true insult.",why:"Drug actions on kidney function differ and require mechanism-specific management."},
{name:"NSAID and RAAS arteriolar effects",lesson:"medication-and-exposure-stewardship",principle:"NSAIDs can reduce prostaglandin-supported afferent dilation, while ACE inhibitors and ARBs reduce angiotensin II mediated efferent tone and intraglomerular pressure.",action:"Identify the hemodynamic context, remove avoidable exposure when appropriate, restore perfusion safely, and make an explicit restart decision for beneficial chronic therapy.",assessment:"Review volume, pressure, heart failure, renal artery disease, NSAIDs, RAAS therapy, diuretics, potassium, creatinine trajectory, and chronic indication.",hazard:"Calling every functional creatinine change direct nephrotoxicity can obscure the circulatory mechanism and permanently remove beneficial therapy.",why:"Afferent and efferent arteriolar tone determine glomerular pressure, especially when systemic perfusion is threatened."},
{name:"aminoglycoside tubular toxicity",lesson:"medication-and-exposure-stewardship",principle:"Aminoglycosides accumulate in proximal tubular cells and can cause delayed, often nonoliguric acute tubular injury with risk related to exposure and host factors.",action:"Use only when justified, individualize the regimen, monitor concentrations and kidney and auditory function, and shorten exposure when clinically possible.",assessment:"Review indication, organism and susceptibility, dose timing, concentration strategy, kidney trajectory, volume, age, critical illness, duration, and concurrent nephrotoxins.",hazard:"Waiting for oliguria or an immediate creatinine rise can miss evolving toxicity and continued tissue accumulation.",why:"Aminoglycoside uptake and intracellular accumulation can produce kidney injury after several days and may remain clinically silent early."},
{name:"drug dosing in unstable kidney function",lesson:"medication-and-exposure-stewardship",principle:"Steady-state eGFR and creatinine clearance estimates are unreliable when kidney function is changing rapidly.",action:"Use trajectory, urine output, drug PK, indication severity, levels, toxicity, and KRT settings to individualize dose.",assessment:"Review loading need, volume of distribution, clearance route, therapeutic index, time course, levels, and dialysis removal.",hazard:"Reducing a loading dose solely because clearance is low can delay target attainment in severe infection.",why:"Loading dose depends mainly on distribution, while maintenance depends mainly on clearance."},
{name:"contrast-associated AKI",lesson:"medication-and-exposure-stewardship",principle:"AKI after contrast is associated temporally but not always caused by contrast, especially in acutely ill patients with competing insults.",action:"Weigh imaging benefit, baseline risk, alternatives, hydration when appropriate, contrast dose, and concurrent nephrotoxins.",assessment:"Review urgency, eGFR, active AKI, hemodynamics, volume, contrast route and dose, prior reaction, and diagnostic value.",hazard:"Withholding a life-saving contrast study based on overstated causal risk can cause greater harm.",why:"Clinical context and competing causes determine net imaging benefit."},
{name:"contrast prevention strategy",lesson:"medication-and-exposure-stewardship",principle:"Isotonic volume expansion is the main preventive intervention for selected high-risk patients who can tolerate it, while routine N-acetylcysteine is not recommended and bicarbonate is not preferred to saline.",action:"Stratify risk, preserve diagnostic benefit, use appropriate hydration when indicated, minimize unnecessary repeat exposure, and follow metformin instructions by AKI status and procedure type.",assessment:"Review active AKI, eGFR, route, procedure urgency, heart failure, volume tolerance, recent contrast, nephrotoxins, and metformin use.",hazard:"Using an obsolete drug bundle or a universal metformin hold can add delay and treatment harm without improving kidney outcomes.",why:"Modern prevention emphasizes appropriate isotonic volume in selected patients and rejects routine ineffective adjuncts."},
{name:"RAAS and SGLT2 medication transitions",lesson:"medication-and-exposure-stewardship",principle:"Temporary holds during severe hemodynamic AKI may be appropriate, but chronic kidney and cardiac benefits should be reassessed after stabilization.",action:"Document the hold reason and explicit laboratory and clinical criteria for restart.",assessment:"Review indication, pressure, potassium, volume, creatinine trend, heart failure, albuminuria, sick-day risks, and follow-up.",hazard:"A temporary inpatient hold can become permanent omission of disease-modifying therapy.",why:"Acute safety and long-term benefit apply at different phases of illness."},
{name:"hyperkalemia in AKI",lesson:"complications-and-kidney-support",principle:"Severe hyperkalemia management stabilizes myocardium, shifts potassium intracellularly, removes potassium, and treats the cause.",action:"Use ECG-guided calcium, insulin with glucose and selected adjuncts, elimination, and frequent rebound monitoring.",assessment:"Review potassium and hemolysis, ECG, glucose, acid-base status, drugs, urine output, tissue breakdown, and KRT access.",hazard:"A normal initial ECG does not make a rapidly rising severe potassium safe.",why:"ECG sensitivity is incomplete and potassium can rebound after temporary shifting."},
{name:"metabolic acidosis in AKI",lesson:"complications-and-kidney-support",principle:"Acidosis reflects cause, ventilation, buffer loss, and reduced acid excretion, and treatment targets physiology rather than bicarbonate alone.",action:"Treat shock or toxin, assess ventilation, use bicarbonate selectively, and initiate KRT for refractory life-threatening acidemia.",assessment:"Review pH, PCO2, bicarbonate, anion gap, lactate, ketones, toxins, chloride, potassium, hemodynamics, and volume.",hazard:"Giving bicarbonate without checking ventilation and sodium load can worsen hypernatremia, volume, or CO2 burden.",why:"Buffer therapy changes several compartments and does not remove the acid source."},
{name:"KRT initiation",lesson:"complications-and-kidney-support",principle:"Kidney replacement therapy begins for refractory electrolyte, acid-base, volume, uremic, or dialyzable-toxin problems, not a creatinine number alone.",action:"Integrate severity, trajectory, reversibility, goals, access, and modality before complications become irreversible.",assessment:"Review potassium, pH, oxygenation, volume, uremic symptoms, toxin, urine output, hemodynamics, neurologic status, and goals.",hazard:"Waiting for an arbitrary creatinine threshold can delay treatment of life-threatening complications.",why:"KRT treats specific failures of homeostasis rather than the biomarker itself."},
{name:"KRT modality",lesson:"complications-and-kidney-support",principle:"Intermittent, continuous, and prolonged therapies differ in clearance rate, hemodynamic tolerance, fluid precision, and logistics.",action:"Match modality and prescription to hemodynamics, brain injury, catabolism, fluid goals, toxins, access, and resources.",assessment:"Review pressure and vasopressors, intracranial concerns, solute urgency, fluid input, body size, access, anticoagulation, and staffing.",hazard:"Calling continuous therapy inherently more effective ignores delivered dose and patient-specific goals.",why:"Modality is a delivery strategy whose benefit depends on matching physiology and achieving the prescription."},
{name:"nutrition during AKI",lesson:"complications-and-kidney-support",principle:"Nutrition in AKI should address illness severity, catabolism, treatment losses, electrolyte and fluid abnormalities, and feeding tolerance rather than restrict protein to delay KRT.",action:"Set individualized energy and protein goals, account for KRT losses, and monitor metabolic response and delivery.",assessment:"Review catabolic state, body size, intake, glucose, electrolytes, fluid, nitrogen balance when useful, feeding tolerance, and KRT modality.",hazard:"Applying one low-protein renal diet to every patient can worsen underfeeding and lean-tissue loss without preventing dialysis.",why:"Critical illness and extracorporeal therapy change nutrient needs and losses independently of serum creatinine."},
{name:"AKI recovery and drug redosing",lesson:"recovery-akd-and-follow-up",principle:"Kidney recovery can accelerate drug clearance before serum creatinine fully reflects the change.",action:"Recalculate doses frequently, stop unneeded KRT-related adjustments, and remove temporary access promptly.",assessment:"Review urine output, interdialytic creatinine, measured clearance when useful, drug levels, infection response, volume, and catheter need.",hazard:"Continuing reduced doses during rapid recovery can under-treat severe infection or thrombosis.",why:"Clearance is dynamic in both injury and recovery."},
{name:"AKD and post-AKI follow-up",lesson:"recovery-akd-and-follow-up",principle:"Kidney dysfunction persisting after seven days and up to 90 days occupies an AKD interval with risk of CKD, recurrence, and cardiovascular events.",action:"Arrange early laboratory and medication review, then reassess kidney function and albuminuria by three months.",assessment:"Review discharge creatinine, proteinuria, pressure, volume, medication restart, nephrotoxins, diabetes, heart failure, follow-up access, and recovery.",hazard:"Calling discharge creatinine stable can erase the need to detect incomplete recovery or new CKD.",why:"AKI is a sentinel event whose consequences persist beyond hospitalization."},
];
const dimensions=[["principle","Which principle best characterizes"],["action","Which clinical action best applies to"],["assessment","Which assessment is most appropriate for"],["hazard","Which reasoning hazard is most important to prevent with"]];
function distractors(i,f){return [5,11,17].map(o=>concepts[(i+o)%concepts.length][f]);}
export const acuteKidneyInjuryQuestionBank=concepts.flatMap((c,i)=>dimensions.map(([f,p],j)=>({id:`acute-kidney-injury-${String(i*4+j+1).padStart(3,"0")}`,question:`${p} ${c.name}?`,choices:[c[f],...distractors(i,f)],answer:0,rationale:c.why,reviewHref:`#${c.lesson}`})));

// Individually reviewed existing kidney-support items; IDs, order and answer keys remain stable.
const akiSupportReviewOverrides = [
  {
    "id": "acute-kidney-injury-093",
    "question": "Which principle best characterizes hyperkalemia in AKI?",
    "choices": [
      "Severe hyperkalemia management stabilizes myocardium, shifts potassium intracellularly, removes potassium, and treats the cause.",
      "Calcium administration removes excess potassium from the body",
      "Insulin shifting provides definitive potassium elimination, so no removal plan is needed",
      "A normal ECG excludes severe potassium-related danger"
    ],
    "answer": 0,
    "rationale": "Severe disease needs myocardial stabilization when indicated, intracellular shifting, definitive elimination, and cause-directed care. Calcium does not lower potassium. Insulin redistributes it and can be followed by rebound. ECG sensitivity is incomplete, so a normal tracing does not establish safety.",
    "reviewHref": "#complications-and-kidney-support"
  },
  {
    "id": "acute-kidney-injury-094",
    "question": "Which clinical action best applies to hyperkalemia in AKI?",
    "choices": [
      "Use ECG-guided calcium, insulin with glucose and selected adjuncts, elimination, and frequent rebound monitoring.",
      "Use an oral potassium binder alone as emergency rescue for life-threatening disease",
      "Stop glucose monitoring after insulin because kidney impairment prevents delayed hypoglycemia",
      "Delay credible emergency treatment until all repeat samples and cause studies return"
    ],
    "answer": 0,
    "rationale": "The correct plan combines indicated calcium, monitored shifting, elimination, and repeated assessment. U.S. binder labels exclude emergency treatment of life-threatening hyperkalemia; acute adjunct use in UKKA pathways does not replace rescue treatment. Insulin can cause delayed hypoglycemia, with greater concern in kidney impairment and repeat treatment. Artifact evaluation must not delay treatment of a credible emergency.",
    "reviewHref": "#complications-and-kidney-support"
  },
  {
    "id": "acute-kidney-injury-095",
    "question": "Which assessment is most appropriate for hyperkalemia in AKI?",
    "choices": [
      "Review potassium and hemolysis, ECG, glucose, acid-base status, drugs, urine output, tissue breakdown, and KRT access.",
      "Use the initial ECG alone and omit potassium trends and hemolysis review",
      "Review potassium alone and omit glucose after insulin treatment",
      "Assume dialysis access and urine output are irrelevant once shifting therapy starts"
    ],
    "answer": 0,
    "rationale": "Potassium and sample validity, electrical risk, glucose, acid-base state, causes, and removal capacity all matter. An ECG alone cannot exclude danger or characterize rebound. Glucose monitoring is necessary after insulin. Urine output and access inform whether and how definitive removal can occur; shifting does not remove that need.",
    "reviewHref": "#complications-and-kidney-support"
  },
  {
    "id": "acute-kidney-injury-096",
    "question": "Which statement correctly describes hyperkalemia risk in AKI?",
    "choices": [
      "A normal initial ECG does not make a rapidly rising severe potassium safe.",
      "A normal initial ECG guarantees that severe rising potassium can be observed without further assessment",
      "A fall after insulin proves that body potassium has been eliminated",
      "A rapid measured response to an oral binder overrides its U.S. emergency-use limitation"
    ],
    "answer": 0,
    "rationale": "A normal ECG cannot exclude dangerous hyperkalemia, particularly with a worsening trajectory. Temporary shifting can lower the measured concentration without removing body potassium and can be followed by rebound. Apparent early binder activity does not override labeled emergency limitations or replace immediately indicated stabilization and definitive clearance.",
    "reviewHref": "#complications-and-kidney-support"
  },
  {
    "id": "acute-kidney-injury-097",
    "question": "Which principle best characterizes metabolic acidosis in AKI?",
    "choices": [
      "Acidosis reflects cause, ventilation, buffer loss, and reduced acid excretion, and treatment targets physiology rather than bicarbonate alone.",
      "Low bicarbonate identifies the entire cause without checking pH or PCO2",
      "Expected respiratory compensation always normalizes pH",
      "Every metabolic acidosis in AKI requires bicarbonate regardless of the cause or fluid status"
    ],
    "answer": 0,
    "rationale": "The acid-base process depends on cause, ventilation, buffer balance, and kidney function. Bicarbonate alone does not establish the complete disorder. Compensation can leave an abnormal pH, and an unexpected response raises concern for a mixed process. Bicarbonate is selected according to physiology and risks rather than prescribed automatically for every result.",
    "reviewHref": "#complications-and-kidney-support"
  },
  {
    "id": "acute-kidney-injury-098",
    "question": "Which clinical action best applies to metabolic acidosis in AKI?",
    "choices": [
      "Treat shock or toxin, assess ventilation, use bicarbonate selectively, and initiate KRT for refractory life-threatening acidemia.",
      "Treat the bicarbonate number while leaving the acid source and ventilation unassessed",
      "Give sodium bicarbonate routinely as the sole rescue treatment for acute severe hyperkalemia",
      "Wait for a fixed creatinine threshold despite refractory life-threatening acidemia"
    ],
    "answer": 0,
    "rationale": "Cause-directed care and ventilation assessment come first, with selective bicarbonate and KRT for refractory life-threatening failure. Changing bicarbonate does not remove an ongoing acid source. Bicarbonate is not routine acute hyperkalemia rescue and does not replace stabilization, shifting, or removal. Severe refractory acidemia cannot safely be deferred until an arbitrary creatinine value is reached; toxin decisions require toxin-specific expertise.",
    "reviewHref": "#complications-and-kidney-support"
  },
  {
    "id": "acute-kidney-injury-099",
    "question": "Which assessment is most appropriate for metabolic acidosis in AKI?",
    "choices": [
      "Review pH, PCO2, bicarbonate, anion gap, lactate, ketones, toxins, chloride, potassium, hemodynamics, and volume.",
      "Interpret bicarbonate in isolation and omit pH, PCO2, and clinical cause",
      "Use an unqualified anion gap without considering albumin or possible mixed disorders",
      "Omit ventilation and volume status because bicarbonate therapy cannot affect either"
    ],
    "answer": 0,
    "rationale": "pH, PCO2, bicarbonate, the gap and albumin context, causes, potassium, perfusion, and fluid status belong together. Bicarbonate in isolation cannot characterize a mixed process. Albumin influences the interpretation of the gap. Bicarbonate treatment adds sodium and volume and produces carbon dioxide, so respiratory capacity and fluid tolerance remain relevant.",
    "reviewHref": "#complications-and-kidney-support"
  },
  {
    "id": "acute-kidney-injury-100",
    "question": "Which statement correctly describes a risk of bicarbonate treatment in AKI?",
    "choices": [
      "Giving bicarbonate without checking ventilation and sodium load can worsen hypernatremia, volume, or CO2 burden.",
      "Carbon dioxide generated by bicarbonate is eliminated independently of pulmonary ventilation",
      "Sodium bicarbonate cannot add sodium or contribute to fluid overload",
      "A corrected bicarbonate value proves that the underlying acid source has resolved"
    ],
    "answer": 0,
    "rationale": "Bicarbonate can add sodium and volume and generates carbon dioxide requiring pulmonary elimination. Limited ventilation can therefore make the treatment burden important. Sodium and fluid overload remain possible, and chemistry needs reassessment. Improving the measured buffer value alone does not prove that shock, toxin exposure, or another acid source is resolved.",
    "reviewHref": "#complications-and-kidney-support"
  },
  {
    "id": "acute-kidney-injury-101",
    "question": "Which principle best characterizes KRT initiation?",
    "choices": [
      "Kidney replacement therapy begins for refractory electrolyte, acid-base, volume, uremic, or dialyzable-toxin problems, not a creatinine number alone.",
      "Every creatinine elevation is an independent indication for immediate KRT",
      "Any mild edema requires KRT regardless of oxygenation, treatment response, or trajectory",
      "KRT should be delayed until a fixed BUN threshold even with life-threatening homeostatic failure"
    ],
    "answer": 0,
    "rationale": "KRT targets severe or refractory homeostatic complications and the broader clinical situation rather than an isolated biomarker. Creatinine alone is not a start rule. Mild edema is not equivalent to refractory organ-threatening overload. A fixed BUN threshold cannot justify delaying urgent treatment. A dialyzable-toxin problem requires toxin-specific assessment rather than an automatic rule for every exposure.",
    "reviewHref": "#complications-and-kidney-support"
  },
  {
    "id": "acute-kidney-injury-102",
    "question": "Which clinical action best applies to KRT initiation?",
    "choices": [
      "Integrate severity, trajectory, reversibility, goals, access, and modality before complications become irreversible.",
      "Ignore treatment response and reversibility once a creatinine value is available",
      "Choose the start decision solely from hospital bed availability",
      "Assume patient goals do not matter when selecting kidney support"
    ],
    "answer": 0,
    "rationale": "Severity, trajectory, reversibility, goals, access, and modality guide timely support. The creatinine number does not replace assessment of complications or treatment response. Resources affect delivery planning but do not define the physiological indication by themselves. Patient goals remain part of the decision alongside urgent threats.",
    "reviewHref": "#complications-and-kidney-support"
  },
  {
    "id": "acute-kidney-injury-103",
    "question": "Which assessment is most appropriate for KRT initiation?",
    "choices": [
      "Review potassium, pH, oxygenation, volume, uremic symptoms, toxin, urine output, hemodynamics, neurologic status, and goals.",
      "Review creatinine alone without potassium, pH, oxygenation, or symptoms",
      "Ignore urine output and hemodynamics because they cannot affect kidney-support decisions",
      "Treat every reported toxin exposure as requiring the same modality without identifying the toxin"
    ],
    "answer": 0,
    "rationale": "The complete clinical assessment identifies the urgent physiological problem and appropriate support. Creatinine alone omits direct threats. Urine output and hemodynamics help assess trajectory, removal capacity, and tolerance. Toxin clearance is toxin-specific and needs appropriate specialist input; it is not one universal modality rule.",
    "reviewHref": "#complications-and-kidney-support"
  },
  {
    "id": "acute-kidney-injury-104",
    "question": "Which statement correctly describes KRT timing?",
    "choices": [
      "Waiting for an arbitrary creatinine threshold can delay treatment of life-threatening complications.",
      "Wait for a creatinine threshold even when severe refractory potassium threatens the heart",
      "Treat a transient potassium shift as definitive removal and cancel the clearance plan automatically",
      "Use any edema finding as proof that urgent dialysis is mandatory"
    ],
    "answer": 0,
    "rationale": "An arbitrary creatinine threshold can delay treatment of life-threatening complications. Refractory hyperkalemia requires an urgent clinical response even without that number. Shifting is temporary and may be followed by rebound, so definitive elimination still needs assessment. Edema alone does not establish refractory organ-threatening overload or mandate KRT.",
    "reviewHref": "#complications-and-kidney-support"
  },
  {
    "id": "acute-kidney-injury-105",
    "question": "Which principle best characterizes KRT modality?",
    "choices": [
      "Intermittent, continuous, and prolonged therapies differ in clearance rate, hemodynamic tolerance, fluid precision, and logistics.",
      "All modalities provide identical clearance rates and fluid control regardless of prescription",
      "Continuous treatment has proven mortality superiority for every patient with AKI",
      "Hemodynamic tolerance and available expertise cannot influence modality selection"
    ],
    "answer": 0,
    "rationale": "Modalities differ in solute and fluid delivery, tolerance, and logistics. They are not interchangeable under every prescription or circumstance. Continuous therapy has not established general mortality superiority over intermittent therapy. Circulation and available expertise help determine which strategy can achieve the clinical goals.",
    "reviewHref": "#complications-and-kidney-support"
  },
  {
    "id": "acute-kidney-injury-106",
    "question": "Which clinical action best applies to KRT modality?",
    "choices": [
      "Match modality and prescription to hemodynamics, brain injury, catabolism, fluid goals, toxins, access, and resources.",
      "Choose continuous therapy automatically for every AKI patient without assessing goals",
      "Choose only by the machine name and ignore the actual prescription",
      "Ignore toxin identity, brain injury, access, and available staff when planning delivery"
    ],
    "answer": 0,
    "rationale": "The strategy and prescription must match physiology, urgency, goals, and practical delivery. Continuous treatment is useful in selected contexts, not an automatic rule for all AKI. A modality label does not prove the prescribed clearance or fluid removal will be delivered. Brain and toxin-specific concerns, access, and staff expertise can materially affect that choice.",
    "reviewHref": "#complications-and-kidney-support"
  },
  {
    "id": "acute-kidney-injury-107",
    "question": "Which assessment is most appropriate for KRT modality?",
    "choices": [
      "Review pressure and vasopressors, intracranial concerns, solute urgency, fluid input, body size, access, anticoagulation, and staffing.",
      "Assess the machine label alone and omit circulation and intracranial concerns",
      "Assume a prescription proves delivery despite circuit clotting or treatment interruptions",
      "Use fluid input alone without assessing solute urgency, access, or anticoagulation"
    ],
    "answer": 0,
    "rationale": "Pressure support, brain concerns, solute and fluid goals, body size, access, anticoagulation, and staffing inform selection and delivery. A machine label cannot substitute for physiology. Clotting and interruptions can reduce actual treatment. Fluid intake is one part of the assessment and does not describe clearance urgency or delivery constraints.",
    "reviewHref": "#complications-and-kidney-support"
  },
  {
    "id": "acute-kidney-injury-108",
    "question": "Which statement correctly describes effectiveness of KRT modalities?",
    "choices": [
      "Calling continuous therapy inherently more effective ignores delivered dose and patient-specific goals.",
      "Continuous therapy is inherently superior regardless of clinical response or actual delivery",
      "A prescribed dose guarantees that no treatment is lost to interruptions",
      "Serial potassium, acid-base, and fluid response are unnecessary once therapy has begun"
    ],
    "answer": 0,
    "rationale": "Effectiveness depends on goal-matched treatment that is actually delivered, not the modality name. Continuous treatment has no established general mortality superiority. Interruptions and circuit problems can lower delivery below the prescription. Serial solute, acid-base, and volume response remains necessary to assess whether support is achieving its goals.",
    "reviewHref": "#complications-and-kidney-support"
  },
  {
    "id": "acute-kidney-injury-109",
    "question": "Which principle best characterizes nutrition during critical illness with AKI?",
    "choices": [
      "Nutrition in AKI should address illness severity, catabolism, treatment losses, electrolyte and fluid abnormalities, and feeding tolerance rather than restrict protein to delay KRT.",
      "High creatinine alone establishes the same protein restriction for all critically ill patients",
      "Protein should be restricted solely to postpone KRT despite ongoing critical-illness catabolism",
      "KRT removes the need to account for amino-acid and protein losses"
    ],
    "answer": 0,
    "rationale": "Critical illness and KRT can alter needs and cause nutrient losses independently of creatinine. One creatinine-based restriction cannot characterize every patient. In critically ill AKI, reducing protein solely to postpone KRT can worsen inadequate nutrition rather than treat the underlying illness. Extracorporeal nutrient losses must be considered; noncatabolic kidney dysfunction has a different context.",
    "reviewHref": "#complications-and-kidney-support"
  },
  {
    "id": "acute-kidney-injury-110",
    "question": "Which clinical action best applies to nutrition during AKI?",
    "choices": [
      "Set individualized energy and protein goals, account for KRT losses, and monitor metabolic response and delivery.",
      "Use a fixed renal diet without assessing catabolism, tolerance, or delivery",
      "Count prescribed feed alone as proof of actual nutrient intake",
      "Ignore glucose or citrate calories supplied by KRT when estimating total energy"
    ],
    "answer": 0,
    "rationale": "Individual goals need illness, treatment-loss, metabolic, and delivery assessment. A fixed diet ignores changing needs and chemistry. Prescription does not prove actual intake when feeds are interrupted or poorly tolerated. KRT-related glucose or citrate can supply nonnutritional energy and belongs in the total-energy assessment.",
    "reviewHref": "#complications-and-kidney-support"
  },
  {
    "id": "acute-kidney-injury-111",
    "question": "Which assessment is most appropriate for nutrition during AKI?",
    "choices": [
      "Review catabolic state, body size, intake, glucose, electrolytes, fluid, nitrogen balance when useful, feeding tolerance, and KRT modality.",
      "Use serum creatinine alone to determine nutrition and protein needs",
      "Use fluid-loaded body weight without considering the usual or pre-illness weight",
      "Assume electrolytes and refeeding risk need no assessment during KRT"
    ],
    "answer": 0,
    "rationale": "Catabolism, body-size context, intake, glucose, chemistry, fluid, tolerance, and KRT delivery support an individualized plan. Creatinine alone does not quantify needs. Fluid accumulation can distort current weight and should be considered. KRT does not remove electrolyte disturbances or refeeding risk; ongoing monitoring is necessary.",
    "reviewHref": "#complications-and-kidney-support"
  },
  {
    "id": "acute-kidney-injury-112",
    "question": "Which statement correctly describes a nutrition risk during AKI?",
    "choices": [
      "Applying one low-protein renal diet to every patient can worsen underfeeding and lean-tissue loss without preventing dialysis.",
      "One low-protein renal diet safely prevents KRT in every patient with AKI",
      "A renal-specific formula is obligatory regardless of actual electrolyte and fluid needs",
      "More energy is always better, so overfeeding cannot be harmful"
    ],
    "answer": 0,
    "rationale": "A single restrictive diet can worsen underfeeding and lean-tissue loss, especially in critical illness, and is not a universal means of avoiding KRT. Renal formulas should be selected for the actual clinical and metabolic needs rather than used automatically. Both underfeeding and overfeeding need prevention, with reassessment of delivery, losses, chemistry, and tolerance.",
    "reviewHref": "#complications-and-kidney-support"
  }
];
for (const reviewed of akiSupportReviewOverrides) {
  const existing = acuteKidneyInjuryQuestionBank.find(item => item.id === reviewed.id);
  if (!existing || existing.answer !== reviewed.answer || existing.reviewHref !== reviewed.reviewHref) throw new Error("AKI support review identity mismatch");
  Object.assign(existing, reviewed);
}
