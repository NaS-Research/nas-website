const c=(name,lesson,principle,action,assessment,hazard,why)=>({name,lesson,principle,action,assessment,hazard,why});
const concepts=[
  c("azole pharmacophore","azole-target-sar","Azole nitrogens coordinate the heme iron of fungal lanosterol 14 alpha demethylase","Connect the heterocycle and hydrophobic substituents to enzyme binding and selectivity","Assess imidazole versus triazole ring, heme coordination, CYP51 affinity, lipophilicity, and host CYP effects","Calling the azole ring an ergosterol-binding pore former","Azoles inhibit synthesis rather than binding membrane ergosterol directly"),
  c("ergosterol synthesis block","azole-target-sar","CYP51 inhibition depletes ergosterol and accumulates abnormal sterol intermediates","Use the pathway to predict membrane dysfunction and target-based resistance","Assess lanosterol, CYP51, ergosterol, ERG11 or cyp51A changes, efflux, and phenotype","Describing azoles as fungal cell-wall inhibitors","Their central target is a membrane sterol biosynthetic enzyme"),
  c("triazole selectivity","azole-target-sar","Additional ring nitrogen generally improves fungal CYP selectivity relative to early imidazoles but does not eliminate human CYP interactions","Map molecular selectivity separately from clinical interaction burden","Assess CYP3A4, CYP2C9, CYP2C19, P-glycoprotein, substrate risk, and concentration","Assuming triazoles are free of human CYP effects","Clinically important inhibition and metabolism remain agent specific"),
  c("resistance architecture","azole-target-sar","Target alteration, target overexpression, efflux, and pathway adaptation can reduce azole susceptibility","Join species identification, prior exposure, MIC interpretation, adherence, and drug exposure before declaring resistance","Assess species, susceptibility method, breakpoint, prior azole, concentration, site, source, and response","Escalating a dose without checking absorption or interactions","Low exposure and microbiologic resistance can look clinically similar"),

  c("agent-specific spectrum","spectrum-clinical-role","Fluconazole, itraconazole, voriconazole, posaconazole, and isavuconazole do not share one spectrum","Choose the exact agent from organism, site, host, formulation, toxicity, and evidence","Assess Candida species, Cryptococcus, Aspergillus, Mucorales, endemic fungi, susceptibility, and compartment","Selecting a drug from the word azole alone","Class membership does not guarantee activity against a particular fungus"),
  c("yeast versus mold activity","spectrum-clinical-role","Fluconazole has useful yeast activity but no reliable Aspergillus or Mucorales activity","Use mold-active triazoles only when their organism and syndrome evidence supports them","Assess yeast or mold morphology, species, host risk, imaging, culture, galactomannan, and prior prophylaxis","Using fluconazole for invasive aspergillosis","Fluconazole lacks clinically useful Aspergillus activity"),
  c("site and syndrome","spectrum-clinical-role","An active triazole must reach the infected compartment and fit the disease phase","Separate induction, step-down, consolidation, prophylaxis, and chronic suppression","Assess CNS, eye, urine, lung, bone, valve, blood, abscess, disease severity, and oral reliability","Using a prophylaxis dose as treatment","Indication and phase determine the needed exposure"),
  c("oral ketoconazole restriction","spectrum-clinical-role","Oral ketoconazole is not indicated for onychomycosis, cutaneous dermatophyte infection, or Candida infection and is reserved when effective alternatives are unavailable or not tolerated","Keep topical use separate and require a compelling systemic indication with liver and interaction safeguards","Assess indication, alternatives, hepatic risk, QT drugs, adrenal effects, and current label","Recommending oral ketoconazole for routine nail fungus","Fatal hepatotoxicity and interaction risk make routine systemic use unacceptable"),

  c("fluconazole bioavailability","fluconazole-exposure","Fluconazole has high oral bioavailability and oral and intravenous doses are often numerically equivalent","Use oral therapy when the patient can absorb and the syndrome permits it","Assess swallowing, gastrointestinal function, adherence, dose, site, severity, and transition criteria","Assuming oral reliability without assessing the patient","High intrinsic bioavailability does not overcome vomiting or nonadherence"),
  c("fluconazole renal clearance","fluconazole-exposure","Fluconazole is primarily renally eliminated and maintenance exposure often requires adjustment when renal function declines","Preserve any syndrome-specific loading dose and adjust maintenance according to current product and clinical guidance","Assess creatinine clearance, dialysis, loading, maintenance, duration, and renal trajectory","Reducing a required loading dose solely because renal function is low","Loading and maintenance serve different exposure goals"),
  c("fluconazole spectrum limits","fluconazole-exposure","Candida krusei is intrinsically resistant and Candida glabrata requires susceptibility-guided interpretation","Require species and susceptibility before fluconazole step-down in invasive disease","Assess species, MIC category, dose-dependent susceptibility, blood culture clearance, stability, and site","Treating every Candida isolate as fluconazole susceptible","Species and breakpoint context change expected activity"),
  c("fluconazole safety","fluconazole-exposure","Fluconazole can cause hepatotoxicity, QT prolongation, severe skin reactions, and clinically important interactions","Monitor risk by dose, duration, organ function, symptoms, electrolytes, and medication burden","Assess liver tests, QTc, potassium, magnesium, rash, warfarin, sulfonylureas, phenytoin, and CYP substrates","Calling fluconazole interaction free because it is renally cleared","Elimination route does not remove enzyme inhibition"),

  c("itraconazole formulation","itraconazole-formulations","Itraconazole capsules, oral solution, and SUBA products differ in bioavailability and are not interchangeable","Prescribe and teach the exact product rather than the ingredient alone","Assess capsule or solution, product strength, food, gastric pH, indication, swallowing, and concentration","Substituting solution and capsules milligram for milligram without review","Formulation determines absorption and approved use"),
  c("itraconazole food and pH","itraconazole-formulations","Conventional capsules are taken with a full meal and depend on gastric acidity, while oral solution is taken without food when possible","Write product-specific administration and reassess acid suppression","Assess meal timing, proton pump inhibitor, H2 blocker, antacid, gastric surgery, tube feeds, and product","Giving one administration rule for every itraconazole formulation","Opposing food effects make a generic instruction unsafe"),
  c("itraconazole heart failure","itraconazole-formulations","Itraconazole has negative inotropic potential and a boxed warning for congestive heart failure and cardiac effects","Avoid onychomycosis use in ventricular dysfunction and reassess systemic therapy if heart failure symptoms occur","Assess ejection fraction, edema, dyspnea, weight, cardiac history, interacting negative inotropes, and indication","Treating new edema as a minor cosmetic effect","Cardiac decompensation can be drug related and serious"),
  c("itraconazole TDM","itraconazole-formulations","Variable absorption and an active hydroxy metabolite make concentration monitoring clinically useful","Obtain an interpretable concentration after loading or a meaningful change and act on efficacy or toxicity risk","Assess product, dose, timing, itraconazole assay, hydroxyitraconazole, adherence, interactions, and response","Comparing a combined concentration to an itraconazole-only target without assay context","Targets depend on what the laboratory reports"),

  c("voriconazole nonlinear PK","voriconazole-precision","Adult voriconazole metabolism is saturable, so dose changes can produce disproportionate concentration changes","Use incremental adjustments and repeat TDM rather than assuming linearity","Assess dose, trough timing, CYP2C19, liver function, inflammation, interacting drugs, and response","Doubling the dose because the trough is half the target","Nonlinear PK can overshoot exposure"),
  c("voriconazole CYP2C19","voriconazole-precision","CYP2C19 phenotype contributes to large interpatient voriconazole variability","Use early TDM and interaction review rather than guessing phenotype from a standard dose","Assess genotype if available, concentration, ancestry only as context, CYP2C19 inhibitors or inducers, and liver status","Assigning metabolism from race alone","Individual exposure evidence is more reliable than demographic assumptions"),
  c("voriconazole visual CNS toxicity","voriconazole-precision","Transient visual disturbance is common and higher exposure can increase CNS toxicity","Counsel about visual changes and night driving, then reassess concentration and safety when symptoms are persistent or severe","Assess trough, hallucinations, confusion, vision, timing, driving, hepatic function, and interactions","Ignoring new hallucinations during high exposure","Neurologic symptoms can signal clinically important excess"),
  c("voriconazole long-term toxicity","voriconazole-precision","Prolonged voriconazole can cause photosensitivity, cutaneous malignancy, periostitis, and fluorosis","Use sun protection, skin surveillance, symptom review, fluoride or bone evaluation when indicated, and an ongoing need assessment","Assess ultraviolet exposure, skin lesions, bone pain, alkaline phosphatase, treatment duration, transplant status, and alternatives","Treating long-term photosensitivity as harmless","Persistent phototoxicity can precede serious cutaneous injury"),

  c("posaconazole non-substitutability","posaconazole-delivery","Posaconazole delayed-release tablets, oral suspension, and PowderMix differ in indication, dosing, age or weight eligibility, preparation, and exposure","Select the formulation before selecting the dose","Assess indication, age, weight, swallowing, food, tube access, formulation, and label","Substituting oral suspension for delayed-release tablets at the same dose","The products are explicitly non-substitutable"),
  c("posaconazole tablet administration","posaconazole-delivery","Delayed-release tablets are swallowed whole and can be taken with or without food","Use the tablet when eligible and reliable higher oral exposure is needed","Assess ability to swallow whole, gastrointestinal function, weight, indication, adherence, and interactions","Repeating the older rule that every posaconazole tablet dose requires food","The current tablet label permits administration with or without food"),
  c("posaconazole suspension administration","posaconazole-delivery","Oral suspension is given with a full meal or, when needed, a nutritional supplement or acidic carbonated beverage","Protect absorption and monitor for breakthrough when adequate intake cannot be achieved","Assess meal, supplement, acid suppression, nausea, mucositis, diarrhea, tube feeds, and alternative formulation","Giving suspension fasting without an exposure plan","Low or variable suspension exposure can cause prophylaxis or treatment failure"),
  c("posaconazole pseudoaldosteronism","posaconazole-delivery","Posaconazole can cause hypertension and hypokalemia through apparent mineralocorticoid excess","Recognize the pattern, review exposure, and manage the drug and electrolyte consequences","Assess blood pressure, potassium, bicarbonate, renin, aldosterone, posaconazole concentration, and interacting causes","Attributing the entire pattern to essential hypertension","The paired blood pressure and potassium change can be drug induced"),

  c("isavuconazonium prodrug","isavuconazole-system","Isavuconazonium is a water-soluble prodrug converted to active isavuconazole","Keep prodrug milligrams and active-equivalent milligrams distinct during verification","Assess dosage form, 372 mg prodrug equivalent to 200 mg active drug, loading schedule, and switch","Writing 200 mg of the prodrug when 200 mg active equivalent was intended","Two mass conventions create a medication-error opportunity"),
  c("isavuconazole loading","isavuconazole-system","Adult therapy uses 372 mg isavuconazonium every 8 hours for 6 doses followed by 372 mg once daily","Complete the loading sequence and start maintenance 12 to 24 hours after the last loading dose","Assess dose count, timing, missed doses, oral or intravenous route, and transition","Stopping loading after one dose","The long half-life makes complete loading important for early exposure"),
  c("isavuconazole QT shortening","isavuconazole-system","Isavuconazole shortens QT in a concentration-related manner and is contraindicated in familial short QT syndrome","Distinguish it from QT-prolonging triazoles while still reviewing the full cardiac system","Assess familial short QT, ECG, electrolytes, interacting drugs, syncope, and indication","Calling it the universally safest choice for every long QT patient","QT direction is only one part of selection and interaction risk remains"),
  c("isavuconazole route switch","isavuconazole-system","Oral and intravenous isavuconazonium are bioequivalent, so a new loading course is not required when switching routes","Switch by maintaining the schedule after verifying product and active equivalent","Assess prior doses, route, gastrointestinal function, line, filter, interactions, and timing","Restarting six loading doses at every route change","Route transition does not reset the exposure history"),

  c("CYP3A4 inhibition","interactions-electrophysiology","Most systemic triazoles inhibit CYP3A4 to clinically meaningful but agent-specific degrees","Map every triazole as perpetrator and victim before starting or stopping it","Assess tacrolimus, cyclosporine, sirolimus, statins, oncology drugs, benzodiazepines, opioids, and alternatives","Reviewing interactions only when the azole starts","Stopping inhibition can also destabilize a previously adjusted substrate"),
  c("strong induction","interactions-electrophysiology","Rifamycins, selected anticonvulsants, St John's wort, and other strong inducers can collapse mold-active triazole exposure","Avoid contraindicated combinations or redesign therapy with expert and concentration support","Assess inducer strength, onset, offset, fungal severity, alternatives, and concentration","Trying to overcome a contraindicated inducer with an unmonitored dose increase","Enzyme induction can produce treatment failure and persists after discontinuation"),
  c("QT burden","interactions-electrophysiology","Several triazoles can prolong QT while isavuconazole shortens it","Correct potassium, magnesium, and calcium and evaluate the complete electrophysiologic medication burden","Assess QTc, bradycardia, structural disease, congenital syndrome, electrolytes, antiarrhythmics, psychotropics, and antiemetics","Treating QT risk as a single-drug property","Patient physiology and combined medicines determine arrhythmia risk"),
  c("interaction ownership","interactions-electrophysiology","A safe interaction plan includes onset, offset, dose change, monitoring, and a responsible clinician","Document both the azole and victim-drug pathway through initiation, steady state, and discontinuation","Assess narrow therapeutic index, level timing, organ function, symptoms, communication, and follow-up","Reducing tacrolimus at azole start but not planning azole discontinuation","Exposure can become subtherapeutic when inhibition resolves"),

  c("hepatic surveillance","tdm-organ-monitoring","Every systemic triazole can cause clinically important liver injury, with different clearance and label details","Obtain baseline and serial liver tests based on agent, duration, symptoms, and risk","Assess ALT, AST, alkaline phosphatase, bilirubin, symptoms, hepatic impairment, alcohol, and other hepatotoxins","Assuming normal baseline tests prevent future injury","Hepatic injury can develop after treatment begins"),
  c("renal formulation risk","tdm-organ-monitoring","Renal implications differ between active drug clearance and an intravenous solubilizing vehicle","Separate fluconazole maintenance adjustment from SBECD concerns with selected intravenous triazoles","Assess creatinine clearance, dialysis, oral option, vehicle, duration, breakthrough risk, and kidney trajectory","Applying one renal-dose rule to every triazole","The kidney may clear the active drug, the vehicle, or neither"),
  c("TDM indication","tdm-organ-monitoring","TDM is most useful when exposure varies and concentration relates to efficacy or toxicity","Order a correctly timed level for initiation, dose change, failure, toxicity, adherence concern, organ change, or interaction","Assess drug, formulation, steady state, trough timing, target, assay, clinical question, and action","Ordering a concentration with no timing or action plan","A number without context cannot safely guide therapy"),
  c("pregnancy and lactation","tdm-organ-monitoring","Azole reproductive decisions require current agent-specific narrative data, syndrome severity, dose and duration, and alternatives","Use current labeling and specialist input rather than obsolete pregnancy letters","Assess gestational timing, systemic versus local exposure, maternal disease, fetal risk, lactation, alternatives, and shared decision making","Applying one pregnancy rule to every azole and every dose","Risks and benefits vary by agent, route, exposure, and indication"),

  c("step-down verification","integration-transition","Oral triazole step-down requires stability, source control, susceptible organism, active agent, reliable formulation exposure, and follow-up","Verify every transition criterion before stopping parenteral therapy","Assess cultures, species, MIC, stability, site, source, oral access, interactions, concentration, and adherence","Equating clinical improvement with oral readiness","A safe transition joins microbiology, anatomy, and delivery"),
  c("breakthrough audit","integration-transition","Breakthrough infection can reflect wrong organism, resistance, poor absorption, formulation error, interaction, nonadherence, or inadequate site exposure","Reopen the complete exposure and diagnostic system before blind escalation","Assess prophylaxis drug, dose, formulation, food, pH, level, inducer, organism, site, source, and immune state","Calling every breakthrough infection resistance","Many correctable failures occur before the drug reaches the fungus"),
  c("longitudinal toxicity","integration-transition","Triazole risk changes with duration, organ function, inflammation, interacting drugs, and cumulative tissue effects","Schedule ongoing medication reconciliation, laboratory review, symptom screening, and need reassessment","Assess liver, kidney, QT, skin, vision, bone, heart failure, blood pressure, electrolytes, concentration, and duration","Using the baseline plan unchanged for months","A dynamic exposure system needs dynamic surveillance"),
  c("educational boundary","integration-transition","General triazole principles do not replace patient-specific infectious diseases, pharmacy, microbiology, and current-guideline decisions","Use the module to structure verification and then apply current individualized evidence","Assess indication, host, organism, site, susceptibility, current label, guideline date, local ecology, and ownership","Turning a study dose into an unsupervised patient order","High-risk antifungal care requires individualized current decisions")
];
const dimensions=[["principle","Which principle best characterizes"],["action","Which clinical action best applies to"],["assessment","Which assessment is most appropriate for"],["hazard","Which reasoning hazard is most important to prevent with"]];
const distractors=(index,field)=>[10,20,30].map(offset=>concepts[(index+offset)%concepts.length][field]);
const generated=concepts.flatMap((item,index)=>dimensions.map(([field,stem],dimension)=>({id:`triazole-pharmacology-${String(index*4+dimension+1).padStart(3,"0")}`,lesson:item.lesson,question:`${stem} ${item.name}?`,choices:[item[field],...distractors(index,field)],answer:0,rationale:item.why,reviewHref:`#${item.lesson}`})));
const caseRows=[
  ["azole-target-sar","Which enzyme is directly inhibited by systemic azole antifungals?",["Lanosterol 14 alpha demethylase","Beta-1,3-D-glucan synthase","Squalene epoxidase only","Dihydrofolate reductase"],"Azoles coordinate the heme iron of fungal CYP51 and inhibit lanosterol 14 alpha demethylation."],
  ["spectrum-clinical-role","A patient has suspected invasive aspergillosis. Which statement about fluconazole is correct?",["Fluconazole does not provide reliable Aspergillus activity","Fluconazole is always first line","Every azole has identical mold activity","Species and site do not matter"],"Fluconazole is not a mold-active agent for invasive aspergillosis."],
  ["fluconazole-exposure","A patient with candidemia is stable, repeat cultures are negative, and the isolate is fluconazole susceptible. What supports step-down?",["Reliable oral intake, correct loading and maintenance plan, renal adjustment, interaction review, and follow-up","A tablet existing","No species result","Persistent positive blood cultures"],"Current candidiasis guidance requires stability, susceptible isolate, and negative repeat cultures, while delivery and safety must also be secured."],
  ["fluconazole-exposure","Which Candida species is intrinsically resistant to fluconazole?",["Candida krusei","Candida albicans in every case","Candida parapsilosis in every case","Every Candida species"],"Candida krusei is intrinsically fluconazole resistant."],
  ["itraconazole-formulations","A patient takes conventional itraconazole capsules with a proton pump inhibitor and no food. What is the main concern?",["Reduced and variable absorption with treatment failure risk","Guaranteed toxic exposure","The capsule becomes intravenous","No effect is possible"],"Conventional capsule absorption depends on food and gastric acidity."],
  ["itraconazole-formulations","A patient on itraconazole develops new edema, dyspnea, and rapid weight gain. What is the best response?",["Urgently assess possible itraconazole-associated heart failure and reassess therapy","Reassure without evaluation","Increase the dose","Add a negative inotrope without review"],"Itraconazole can cause or worsen heart failure through negative inotropic effects."],
  ["voriconazole-precision","A voriconazole trough is low. Why should the dose not simply be doubled?",["Adult nonlinear PK can cause a disproportionate concentration increase, so incremental adjustment and repeat TDM are safer","Voriconazole has no absorption","The trough is never useful","Every patient has linear PK"],"Saturable metabolism makes voriconazole dose and concentration changes nonlinear."],
  ["voriconazole-precision","A transplant recipient receiving long-term voriconazole reports bone pain and has elevated alkaline phosphatase. What toxicity should be considered?",["Voriconazole-associated periostitis or fluorosis","Acute otitis media","Fluconazole nephrolithiasis only","No drug-related syndrome"],"Long-term voriconazole has been associated with fluorosis and periostitis."],
  ["posaconazole-delivery","A prescription switches posaconazole delayed-release tablets to oral suspension at the same milligram dose. What should happen?",["Stop and redesign the regimen because the formulations are not substitutable","Dispense without review","Crush both products together","Assume identical exposure"],"Current labeling explicitly separates indication, dose, administration, and exposure by formulation."],
  ["posaconazole-delivery","A patient on posaconazole develops hypertension, hypokalemia, and metabolic alkalosis. What syndrome should be evaluated?",["Posaconazole-associated pseudoaldosteronism","Serotonin syndrome","Neuroleptic malignant syndrome","Hemolytic anemia alone"],"The label now highlights apparent mineralocorticoid excess with hypertension and hypokalemia."],
  ["isavuconazole-system","How much active isavuconazole is equivalent to 372 mg of isavuconazonium sulfate?",["200 mg","372 mg","100 mg","40 mg"],"The adult 372 mg prodrug dose is equivalent to 200 mg of active isavuconazole."],
  ["isavuconazole-system","A patient completes six loading doses intravenously and switches to oral Cresemba. Is another loading course required?",["No, oral and intravenous formulations are bioequivalent and the maintenance schedule continues","Yes, always repeat six doses","Stop treatment for one week","Double maintenance indefinitely"],"A route switch does not require reloading when the prior loading course and schedule are verified."],
  ["interactions-electrophysiology","Tacrolimus was reduced when voriconazole began. What must be planned when voriconazole stops?",["Repeat tacrolimus exposure monitoring and dose reassessment as inhibition resolves","No follow-up","Permanent discontinuation of tacrolimus","Automatic azole restart"],"Interaction offset can lower the victim-drug concentration after the inhibitor is removed."],
  ["tdm-organ-monitoring","Which situation most strongly supports triazole TDM?",["Initiation of mold-active therapy with variable PK, a dose or interaction change, failure, or suspected toxicity","A result with no clinical question","A single topical dose","No available assay or action"],"TDM is valuable when exposure varies and a result can change management."],
  ["integration-transition","A patient develops mold infection during posaconazole suspension prophylaxis. What is the best first audit?",["Verify formulation, dose, food, acid suppression, adherence, concentration, organism, resistance, site, and immune status","Assume resistance only","Continue unchanged without diagnostics","Treat a screening result alone"],"Breakthrough disease can reflect delivery, exposure, microbiology, or host failure."],
  ["integration-transition","What is the correct educational boundary for this module?",["Use it to structure questions, then verify current labels, guidelines, local data, and patient-specific decisions with the clinical team","Use every example as a standing order","Ignore formulation","Avoid specialist input"],"Educational synthesis supports reasoning but does not replace individualized high-risk care."]
];
const cases=caseRows.map((item,index)=>({id:`triazole-pharmacology-${String(generated.length+index+1).padStart(3,"0")}`,lesson:item[0],question:item[1],choices:item[2],answer:0,rationale:item[3],reviewHref:`#${item[0]}`}));
const sourceReviewedDeliveryQuestions = {
  "triazole-pharmacology-050": {
    "choices": [
      "Prescribe and teach the exact product rather than the ingredient alone",
      "Specify only itraconazole because capsule and solution instructions are equivalent",
      "Copy the capsule meal instruction to every itraconazole product",
      "Switch from capsules to solution at the same dose without reviewing absorption"
    ],
    "rationale": "Capsules and solution differ in bioavailability and food instructions, so the formulation must be part of the order and counseling."
  },
  "triazole-pharmacology-052": {
    "choices": [
      "Substituting solution and capsules milligram for milligram without review",
      "Confirm the exact formulation before counseling about food",
      "Review acid-suppressing medicines when conventional capsules are used",
      "Recheck formulation-specific dosing before changing products"
    ],
    "rationale": "The capsule and solution are not interchangeable. Copying a milligram dose without reviewing the formulation can change exposure."
  },
  "triazole-pharmacology-054": {
    "choices": [
      "Write product-specific administration and reassess acid suppression",
      "Assume a proton pump inhibitor improves conventional capsule absorption",
      "Use fasting administration for every itraconazole product",
      "Review the ingredient but omit the formulation and meal instructions"
    ],
    "rationale": "Conventional capsules need food and an acidic environment; oral solution has different food instructions. Acid suppression can reduce capsule absorption and contribute to treatment failure."
  },
  "triazole-pharmacology-056": {
    "choices": [
      "Giving one administration rule for every itraconazole formulation",
      "Distinguishing capsule food instructions from solution food instructions",
      "Identifying acid-suppressing medicines before reviewing capsule absorption",
      "Confirming the exact product before planning administration"
    ],
    "rationale": "Capsules and solution have different administration requirements. A single ingredient-level instruction can give the wrong food advice and miss a capsule pH interaction."
  },
  "triazole-pharmacology-082": {
    "choices": [
      "Select the formulation before selecting the dose",
      "Select an oral dose first and assume it applies to both suspension and tablets",
      "Choose the formulation after copying the previous milligram dose",
      "Treat identical ingredient names as proof of identical oral exposure"
    ],
    "rationale": "Posaconazole suspension and delayed-release tablets have different bioavailability and dosing regimens. Identify the formulation before selecting its dose."
  },
  "triazole-pharmacology-084": {
    "choices": [
      "Substituting oral suspension for delayed-release tablets at the same dose",
      "Reviewing the new formulation and its dosing regimen before a switch",
      "Checking the suspension meal or nutritional-supplement plan",
      "Confirming the dispensed formulation matches the intended order"
    ],
    "rationale": "Suspension and delayed-release tablets are not interchangeable. A product switch requires checking the new formulation and dosing rather than copying the same milligram amount."
  },
  "triazole-pharmacology-090": {
    "choices": [
      "Protect absorption and monitor for breakthrough when adequate intake cannot be achieved",
      "Continue the suspension fasting and assume the prescribed dose ensures absorption",
      "Assume a proton pump inhibitor cannot affect suspension exposure",
      "Treat identical tablet and suspension milligrams as identical absorbed doses"
    ],
    "rationale": "Suspension needs a full meal or oral nutritional supplement. Acid suppression can decrease its absorption and create treatment-failure risk, so inadequate intake and interacting medicines require an exposure review."
  },
  "triazole-pharmacology-092": {
    "choices": [
      "Giving suspension fasting without an exposure plan",
      "Confirming the suspension is taken with a full meal",
      "Planning an oral nutritional supplement when needed for suspension administration",
      "Reviewing acid-suppressing medicines and the exact formulation"
    ],
    "rationale": "Giving suspension without its nutrition plan can undermine delivery. Its administration and absorption requirements should be checked rather than inferred from the ingredient name."
  }
};
const priorTriazoleQuestionBank=[...generated,...cases].map((question) => sourceReviewedDeliveryQuestions[question.id] ? { ...question, ...sourceReviewedDeliveryQuestions[question.id] } : question);

const posaconazoleDeliveryRepairs = {
  "triazole-pharmacology-081": {
    "choices": [
      "Posaconazole delayed-release tablets, oral suspension, and PowderMix differ in indication, dosing, age or weight eligibility, preparation, and exposure",
      "Every oral posaconazole product uses the same dose and preparation instructions",
      "PowderMix is the conventional oral suspension in a different package",
      "Age and weight can be ignored once the ingredient is identified"
    ],
    "rationale": "The NOXAFIL label separates these oral products by indication, age and weight, dosing, preparation and exposure. Conventional oral suspension cannot replace delayed-release tablets or PowderMix dose for dose. A shared ingredient does not establish the same product, eligibility or administration plan."
  },
  "triazole-pharmacology-082": {
    "choices": [
      "Select the formulation before selecting the dose",
      "Select an oral dose first and assume it applies to both suspension and tablets",
      "Choose the formulation after copying the previous milligram dose",
      "Treat identical ingredient names as proof of identical oral exposure"
    ],
    "rationale": "Identify the exact formulation before selecting its indication-specific dose and administration plan. The conventional oral suspension is not substitutable with delayed-release tablets or PowderMix. Selecting or copying a dose first, or treating the ingredient name as proof of equal exposure, bypasses those product requirements."
  },
  "triazole-pharmacology-083": {
    "choices": [
      "Assess indication, age, weight, swallowing, food, tube access, formulation, and label",
      "Use age alone because weight never affects posaconazole formulation eligibility",
      "Treat all oral products as suitable for a feeding tube at the same milligram dose",
      "Check the ingredient and dose but omit food and whole-tablet swallowing"
    ],
    "rationale": "Check the indication, age and weight against the exact product label, then assess its food instructions and whether the patient can use that dosage form. Delayed-release tablets must remain whole, and conventional suspension has product-specific nutrition requirements. Tube access is a delivery assessment, not permission to crush tablets or assume equal tube exposure; the label's suspension NG-tube study found lower exposure and recommends breakthrough monitoring."
  },
  "triazole-pharmacology-084": {
    "choices": [
      "Substituting oral suspension for delayed-release tablets at the same dose",
      "Reviewing the new formulation and its dosing regimen before a switch",
      "Checking the suspension meal or nutritional-supplement plan",
      "Confirming the dispensed formulation matches the intended order"
    ],
    "rationale": "Conventional oral suspension is not substitutable with delayed-release tablets at the same milligram dose. Reviewing the new product and regimen, checking its nutrition plan, and confirming the dispensed formulation are appropriate checks. An ingredient match does not justify copying the dose or administration instructions."
  },
  "triazole-pharmacology-085": {
    "choices": [
      "Delayed-release tablets are swallowed whole and can be taken with or without food",
      "Delayed-release tablets must always be taken with a full meal",
      "Crushing a delayed-release tablet preserves its labeled administration technique",
      "The conventional suspension food rule applies to every posaconazole product"
    ],
    "rationale": "NOXAFIL delayed-release tablets may be taken with or without food and must be swallowed whole without dividing, crushing or chewing. Requiring a full meal for every tablet dose copies the conventional suspension rule to the wrong product. Food can change tablet exposure in the label's healthy-volunteer study; permission to dose without food does not mean food has no pharmacokinetic effect."
  },
  "triazole-pharmacology-086": {
    "choices": [
      "Use the tablet when eligible and reliable higher oral exposure is needed",
      "Keep conventional suspension fasting because tablets and suspension always produce equal exposure",
      "Choose delayed-release tablets without checking indication, age, weight or swallowing",
      "Crush the tablet whenever the patient cannot swallow it whole"
    ],
    "rationale": "For an eligible patient who cannot eat a full meal, the label favors delayed-release tablets over conventional suspension for prophylaxis because tablets generally provide higher plasma exposure. Eligibility and intact swallowing still matter, and severe diarrhea or vomiting warrants breakthrough monitoring. This is product selection to improve delivery, not guaranteed exposure or better clinical outcomes; equal exposure, unchecked eligibility and crushing are unsafe assumptions."
  },
  "triazole-pharmacology-087": {
    "choices": [
      "Assess ability to swallow whole, gastrointestinal function, weight, indication, adherence, and interactions",
      "Confirm the indication but assume swallowing and gastrointestinal symptoms cannot affect delivery",
      "Check daily milligrams and ignore the product's age and weight eligibility",
      "Assume tablets remove the need for adherence and medication-interaction review"
    ],
    "rationale": "Assess intact swallowing, gastrointestinal symptoms, labeled eligibility, actual adherence and interacting medicines before relying on the tablet plan. The label permits food flexibility, but prohibits tablet manipulation and calls for breakthrough monitoring with severe diarrhea or vomiting. Eligibility, adherence and CYP3A4 interaction review are not waived by changing from suspension to tablets."
  },
  "triazole-pharmacology-088": {
    "choices": [
      "Repeating the older rule that every posaconazole tablet dose requires food",
      "Teaching that the delayed-release tablet may be taken with or without food",
      "Confirming the tablet is swallowed whole without dividing, crushing or chewing",
      "Checking the exact product before giving meal instructions"
    ],
    "rationale": "The current NOXAFIL delayed-release tablet instruction permits administration with or without food. Repeating a universal food requirement confuses it with conventional oral suspension. Teaching the current tablet instruction, preserving whole-tablet administration and checking the formulation are appropriate actions. Give the patient the instructions for the exact dispensed formulation."
  },
  "triazole-pharmacology-089": {
    "choices": [
      "Oral suspension is given with a full meal or, when needed, a nutritional supplement or acidic carbonated beverage",
      "Conventional oral suspension is routinely taken fasting like the delayed-release tablet",
      "Any clear drink makes fasting suspension exposure equivalent to a full meal",
      "Adding an acidic beverage removes the need to review interacting drugs or breakthrough risk"
    ],
    "rationale": "Give conventional NOXAFIL oral suspension during or within 20 minutes after a full meal. When a full meal cannot be eaten and tablets or injection are not options, the label permits a liquid nutritional supplement or an acidic carbonated beverage such as ginger ale. Routine fasting, an arbitrary clear drink, or using a beverage to bypass interaction and breakthrough review does not follow that plan. PowderMix is a separate delayed-release product with its own with-food and preparation instructions."
  },
  "triazole-pharmacology-090": {
    "choices": [
      "Protect absorption and monitor for breakthrough when adequate intake cannot be achieved",
      "Continue the suspension fasting and assume the prescribed dose ensures absorption",
      "Assume a proton pump inhibitor cannot affect suspension exposure",
      "Treat identical tablet and suspension milligrams as identical absorbed doses"
    ],
    "rationale": "Protect the conventional suspension nutrition and delivery plan, and monitor for breakthrough when adequate intake cannot be achieved. If a full meal is impossible, review the labeled alternative formulation or supplement/acidic-beverage options; if those cannot be tolerated, consider another antifungal or closely monitored suspension therapy. Fasting with assumed absorption, ignoring an esomeprazole interaction, or equating tablet and suspension milligrams does not establish adequate exposure."
  },
  "triazole-pharmacology-091": {
    "choices": [
      "Assess meal, supplement, acid suppression, nausea, mucositis, diarrhea, tube feeds, and alternative formulation",
      "Review meal timing alone and ignore vomiting, diarrhea and interacting drugs",
      "Treat any acid-suppressing medicine as having the same proven effect on every posaconazole formulation",
      "Assume tube feeds make conventional suspension and crushed tablets interchangeable"
    ],
    "rationale": "Assess the actual nutrition plan, interacting medicines and delivery route, including nausea or mucositis that may make the prescribed intake difficult. The label identifies lower suspension exposure with cimetidine or esomeprazole and lower exposure in a specific NG-tube study; severe diarrhea or vomiting requires breakthrough monitoring. These findings do not establish one effect for all acid suppressants, all tube/feed arrangements or mucositis, and they do not authorize crushing delayed-release tablets."
  },
  "triazole-pharmacology-092": {
    "choices": [
      "Giving suspension fasting without an exposure plan",
      "Confirming the suspension is taken with a full meal",
      "Planning an oral nutritional supplement when needed for suspension administration",
      "Reviewing acid-suppressing medicines and the exact formulation"
    ],
    "rationale": "Giving conventional suspension fasting without a nutrition and exposure plan bypasses its labeled administration requirements. A full meal is the first choice; when it is not possible, review the product-specific supplement/acidic-beverage fallback and alternative formulations. Checking the meal plan and relevant interacting medicines are appropriate actions, not additional hazards."
  },
  "triazole-pharmacology-169": {
    "choices": [
      "Stop and redesign the regimen because the formulations are not substitutable",
      "Dispense without review",
      "Crush both products together",
      "Assume identical exposure"
    ],
    "rationale": "Stop the dose-for-dose substitution and verify the new product's indication, eligibility, regimen and administration. Conventional oral suspension is not substitutable with delayed-release tablets because dosing and exposure differ. Dispensing unchanged or assuming equal exposure is unsupported, and crushing the delayed-release tablet is explicitly prohibited."
  }
};

const posaconazoleReviewedTriazoleQuestionBank = priorTriazoleQuestionBank.map((question) => {
  const repair = posaconazoleDeliveryRepairs[question.id];
  return repair ? { ...question, ...repair } : question;
});

const itraconazoleFormulationRepairs = {
  "triazole-pharmacology-049": {
    "choices": [
      "Itraconazole capsules, oral solution, and SUBA products differ in bioavailability and are not interchangeable",
      "All itraconazole products are interchangeable at the same milligram dose",
      "TOLSURA is simply a conventional 100 mg capsule with a different brand name",
      "Oral solution and conventional capsules have identical exposure and approved uses"
    ],
    "rationale": "Conventional capsules, oral solution and the US SUBA product TOLSURA are distinct products. The solution gives greater exposure than conventional capsules at the same dose and has different approved uses. TOLSURA contains 65 mg per capsule and is explicitly not interchangeable or substitutable with other itraconazole products. A shared ingredient or brand change does not establish a dose-for-dose conversion; enhanced absorption does not guarantee clinical superiority."
  },
  "triazole-pharmacology-050": {
    "choices": [
      "Prescribe and teach the exact product rather than the ingredient alone",
      "Specify only itraconazole because capsule and solution instructions are equivalent",
      "Copy the capsule meal instruction to every itraconazole product",
      "Switch from capsules to solution at the same dose without reviewing absorption"
    ],
    "rationale": "Prescribe and counsel for the exact product and indication. Conventional capsules are swallowed whole immediately after a full meal; oral solution is taken without food when possible; TOLSURA is swallowed whole with food and has its own regimen. Ingredient-only orders, one meal instruction for every product, and an unchecked same-dose switch omit clinically important formulation differences."
  },
  "triazole-pharmacology-051": {
    "choices": [
      "Assess capsule or solution, product strength, food, gastric pH, indication, swallowing, and concentration",
      "Assess the ingredient but omit strength, dosage form and approved indication",
      "Check food timing alone and assume gastric pH and swallowing do not matter",
      "Assume the same milligram dose and measured concentration describe every itraconazole product"
    ],
    "rationale": "Verify the exact capsule or solution, product strength, approved indication, meal instructions and relevant pH-altering medicines. Confirm the patient can use the prescribed dosage form; both conventional and TOLSURA capsules must be swallowed whole. Formulation changes can alter exposure, and any concentration must be identified by its timing and reported analyte. Ingredient-only, food-only and same-milligram assumptions omit those checks; no universal concentration target or tube conversion follows from this assessment."
  },
  "triazole-pharmacology-052": {
    "choices": [
      "Substituting solution and capsules milligram for milligram without review",
      "Confirm the exact formulation before counseling about food",
      "Review acid-suppressing medicines when conventional capsules are used",
      "Recheck formulation-specific dosing before changing products"
    ],
    "rationale": "Conventional capsules and oral solution must not be used interchangeably, and TOLSURA is not substitutable with other itraconazole products. Copying a milligram dose without reviewing product-specific dosing can change exposure. Confirming the formulation, reviewing acid-suppressing medicines and checking the new regimen are appropriate actions rather than additional hazards."
  },
  "triazole-pharmacology-053": {
    "choices": [
      "Conventional capsules are taken with a full meal and depend on gastric acidity, while oral solution is taken without food when possible",
      "All itraconazole products should be given fasting because they have the same food effect",
      "Oral solution must always be given after a full meal like conventional capsules",
      "A proton pump inhibitor has the same absorption effect on conventional capsules and TOLSURA"
    ],
    "rationale": "Conventional capsules are swallowed whole immediately after a full meal, and reduced gastric acidity can reduce their absorption. Oral solution is taken without food when possible. TOLSURA also requires food, but its label describes increased exposure with acid-reducing medicines, including omeprazole. Universal fasting, applying the capsule meal rule to solution, or assuming one pH effect for every product gives the wrong instruction."
  },
  "triazole-pharmacology-054": {
    "choices": [
      "Write product-specific administration and reassess acid suppression",
      "Assume a proton pump inhibitor improves conventional capsule absorption",
      "Use fasting administration for every itraconazole product",
      "Review the ingredient but omit the formulation and meal instructions"
    ],
    "rationale": "Write the exact product's administration instructions and review acid suppression. PPIs and H2 blockers can reduce conventional capsule absorption; this is not the TOLSURA interaction, for which increased exposure and adverse-reaction monitoring are labeled. Conventional capsules require a full meal, solution is taken without food when possible, and TOLSURA requires food. Omitting the product or giving every formulation fasting bypasses those rules."
  },
  "triazole-pharmacology-055": {
    "choices": [
      "Assess meal timing, proton pump inhibitor, H2 blocker, antacid, gastric surgery, tube feeds, and product",
      "Assess the ingredient and ignore the timing of food and antacids",
      "Treat a PPI, an H2 blocker and an antacid as irrelevant to conventional capsules",
      "Assume gastric surgery or a feeding tube makes all itraconazole products interchangeable"
    ],
    "rationale": "Assess the exact product, meal timing and pH-altering medicines. For conventional capsules, reduced acidity can lower absorption; separate acid-neutralizing medicines by at least two hours before or after the capsule. TOLSURA has a different labeled pH interaction. Gastric surgery and tube feeding prompt assessment of anatomy, nutrition and dosage-form feasibility, not an assumed universal exposure change or permission to manipulate a capsule. Ingredient-only review and automatic tube substitution omit those requirements."
  },
  "triazole-pharmacology-056": {
    "choices": [
      "Giving one administration rule for every itraconazole formulation",
      "Distinguishing capsule food instructions from solution food instructions",
      "Identifying acid-suppressing medicines before reviewing capsule absorption",
      "Confirming the exact product before planning administration"
    ],
    "rationale": "One ingredient-level administration rule can confuse conventional capsules, oral solution and TOLSURA. Their food and pH instructions must be checked separately. Distinguishing the products, identifying acid-suppressing medicines and confirming the prescribed formulation are appropriate checks; they do not replace the product-specific regimen."
  },
  "triazole-pharmacology-057": {
    "choices": [
      "Itraconazole has negative inotropic potential and a boxed warning for congestive heart failure and cardiac effects",
      "Enhanced-absorption itraconazole removes the risk of heart failure",
      "Cardiac toxicity occurs only at high doses, so lower doses need no symptom review",
      "New peripheral edema cannot be related to itraconazole treatment"
    ],
    "rationale": "Itraconazole can cause or worsen heart failure and has negative inotropic effects described in its boxed warnings. Conventional capsules, oral solution and TOLSURA retain cardiac precautions. Heart failure has also been reported at lower doses, and edema may be a warning sign; an enhanced-absorption product or a lower dose does not remove the need for cardiac assessment."
  },
  "triazole-pharmacology-058": {
    "choices": [
      "Avoid onychomycosis use in ventricular dysfunction and reassess systemic therapy if heart failure symptoms occur",
      "Use conventional capsules for onychomycosis despite a history of heart failure",
      "Continue unchanged when new dyspnea and edema appear",
      "Substitute TOLSURA for nail treatment because its absorption eliminates cardiac risk"
    ],
    "rationale": "Do not use conventional SPORANOX capsules for onychomycosis in ventricular dysfunction or a history of heart failure. New heart-failure symptoms require urgent evaluation and product-specific treatment action: conventional capsule labeling calls for discontinuation, while the solution and TOLSURA clinical warnings require careful reassessment of continued therapy. Their patient instructions advise stopping and contacting the healthcare provider immediately. TOLSURA is not indicated for onychomycosis and does not eliminate cardiac risk."
  },
  "triazole-pharmacology-059": {
    "choices": [
      "Assess ejection fraction, edema, dyspnea, weight, cardiac history, interacting negative inotropes, and indication",
      "Assess only the prescribed milligrams and ignore cardiac history",
      "Treat a normal previous ejection fraction as proof that new edema is harmless",
      "Add a calcium channel blocker without reviewing cardiac effects and interactions"
    ],
    "rationale": "Review the cardiac history, indication, new edema or dyspnea, weight change, and ventricular function when clinically indicated. The labels describe negative inotropic effects and additive cardiac risk with calcium channel blockers; felodipine and nisoldipine are contraindicated combinations. Milligrams alone, an old normal ejection fraction or an unchecked additional negative inotrope does not resolve a new safety signal. This assessment does not mandate routine echocardiography for every patient."
  },
  "triazole-pharmacology-060": {
    "choices": [
      "Treating new edema as a minor cosmetic effect",
      "Promptly evaluate edema with dyspnea or sudden weight gain",
      "Review the exact product and cardiac warning when symptoms appear",
      "Check ventricular dysfunction and interacting negative inotropes before treatment"
    ],
    "rationale": "New edema should not be dismissed as cosmetic, particularly with dyspnea or sudden weight gain during itraconazole therapy. These are labeled heart-failure warning symptoms. Prompt evaluation, review of the product's treatment action, and assessment of ventricular dysfunction and interacting negative inotropes are appropriate safeguards rather than reasoning hazards."
  },
  "triazole-pharmacology-165": {
    "choices": [
      "Reduced and variable absorption with treatment failure risk",
      "Food omission and acid suppression reliably increase conventional capsule exposure",
      "Identical exposure because conventional capsules and oral solution contain the same ingredient",
      "No concern because every itraconazole product is independent of gastric pH"
    ],
    "rationale": "Fasting and proton pump inhibition can reduce conventional capsule absorption and threaten efficacy; they do not guarantee either failure or toxic exposure in an individual patient. Verify the full-meal, whole-capsule instructions and review the acid-suppressing medicine. Oral solution is not dose-for-dose interchangeable, and TOLSURA has different food and pH instructions. Shared ingredients do not establish equal exposure or one pH rule."
  },
  "triazole-pharmacology-166": {
    "choices": [
      "Urgently assess possible itraconazole-associated heart failure and reassess therapy",
      "Reassure without evaluation",
      "Increase the dose",
      "Add a negative inotrope without review"
    ],
    "rationale": "New edema, dyspnea and rapid weight gain warrant urgent assessment for possible itraconazole-associated heart failure. Patient instructions advise stopping the medicine and contacting the healthcare provider immediately; clinicians then apply the exact product's warning and benefit-risk decision. Reassurance without evaluation, increasing the dose, or adding an unchecked negative inotrope fails to address this cardiac signal."
  }
};

const priorExposureReviewQuestionBank = posaconazoleReviewedTriazoleQuestionBank.map((question) => {
  const repair = itraconazoleFormulationRepairs[question.id];
  return repair ? { ...question, ...repair } : question;
});

const sourceReviewedExposureQuestions = {
  "triazole-pharmacology-093": {
    "choices": [
      "Posaconazole can cause hypertension and hypokalemia through apparent mineralocorticoid excess",
      "Pseudoaldosteronism requires elevated aldosterone and cannot occur with suppressed renin and aldosterone",
      "Posaconazole-related mineralocorticoid excess raises potassium rather than lowering it",
      "New hypertension during posaconazole excludes a drug-related cause if the patient already had hypertension"
    ],
    "rationale": "The current NOXAFIL warning identifies new or worsening hypertension with hypokalemia and reports low renin and aldosterone with elevated 11-deoxycortisol. Thus high aldosterone is not required, potassium may fall, and prior hypertension does not exclude worsening from a drug-associated syndrome. Postmarketing reports do not establish its frequency or prove causation in every patient."
  },
  "triazole-pharmacology-094": {
    "choices": [
      "Recognize the pattern, review exposure, and manage the drug and electrolyte consequences",
      "Replace potassium alone and ignore the new blood-pressure pattern and posaconazole exposure",
      "Increase posaconazole whenever hypokalemia develops because the pattern proves underexposure",
      "Wait for every specialized hormone result before monitoring blood pressure or correcting potassium"
    ],
    "rationale": "Recognize the paired blood-pressure and potassium change, review the exact product, dose, exposure and competing causes, and manage the clinical consequences. The label calls for blood-pressure and potassium monitoring; options include discontinuation, an appropriate alternative antifungal, or an aldosterone-receptor antagonist. The FDA 2021 review links reported cases with supratherapeutic exposure, not proven underexposure. Potassium replacement alone does not resolve the whole assessment, and immediate monitoring and correction need not await a universal hormone panel. No concentration cutoff or fixed treatment sequence is established here."
  },
  "triazole-pharmacology-095": {
    "choices": [
      "Assess blood pressure, potassium, bicarbonate, renin, aldosterone, posaconazole concentration, and interacting causes",
      "Measure blood pressure only because potassium and the acid-base pattern are unrelated to this syndrome",
      "Interpret one drug concentration as definitive proof and omit competing medicines or causes",
      "Require elevated renin and aldosterone before considering posaconazole-associated pseudoaldosteronism"
    ],
    "rationale": "Assess blood pressure and potassium first, then use bicarbonate to characterize possible metabolic alkalosis and interpret renin, aldosterone, drug exposure and competing causes in clinical context. The current label reports low renin and aldosterone with elevated 11-deoxycortisol; the FDA 2021 review describes alkalosis and reports associated with supratherapeutic posaconazole levels. Blood pressure alone misses the electrolyte pattern. One concentration cannot prove causation, and high renin or aldosterone is not required. This is a contextual assessment, not a mandatory fixed testing panel or a universal drug-level threshold."
  },
  "triazole-pharmacology-096": {
    "choices": [
      "Attributing the entire pattern to essential hypertension",
      "Checking the potassium and bicarbonate pattern alongside new or worsening hypertension",
      "Reviewing posaconazole exposure and competing causes before assigning causation",
      "Interpreting renin and aldosterone in context rather than requiring them to be elevated"
    ],
    "rationale": "Essential hypertension alone should not explain away new or worsening hypertension paired with hypokalemia and possible metabolic alkalosis during posaconazole use. Reviewing electrolytes, exposure, hormones and competing causes helps evaluate the drug-safety signal; these are appropriate actions, not the hazard. Prior hypertension or concomitant steroids can complicate attribution, and temporal association alone does not establish causation."
  },
  "triazole-pharmacology-170": {
    "choices": [
      "Posaconazole-associated pseudoaldosteronism",
      "Essential hypertension alone, with no need to explain potassium loss or alkalosis",
      "Posaconazole underexposure established solely by the hypertension and electrolyte pattern",
      "Aldosterone excess that is excluded unless both renin and aldosterone are elevated"
    ],
    "rationale": "This combination should prompt evaluation for posaconazole-associated pseudoaldosteronism. The FDA 2021 clinical review describes hypertension, hypokalemia and metabolic alkalosis, while the current label reports new or worsening hypertension, hypokalemia, low renin and aldosterone, and elevated 11-deoxycortisol. Essential hypertension alone is not an adequate explanation for the complete pattern; the pattern does not prove underexposure, and elevated renin or aldosterone is not required. Review drug exposure and competing causes rather than treating the triad as definitive proof."
  },
  "triazole-pharmacology-175": {
    "choices": [
      "Verify formulation, dose, food, acid suppression, adherence, concentration, organism, resistance, site, and immune status",
      "Assume resistance only",
      "Continue unchanged without diagnostics",
      "Treat a screening result alone"
    ],
    "rationale": "Audit the full delivery and disease context rather than assuming resistance. Conventional posaconazole suspension has product-specific dosing and meal requirements, and acid suppression, poor intake, severe diarrhea or vomiting, administration problems and missed doses can undermine the plan. Review concentration in relation to the actual product and dose history; no universal target is supplied here. Establish organism and susceptibility, infected site and immune status with the clinical, radiologic and mycologic evidence. The book calls for tailoring to culture and susceptibility, and the label describes high-risk prophylaxis populations and diagnosis using those evidence domains. Neither a screening result alone nor unchanged prophylaxis without diagnostic review addresses the problem. The label's oral Candida resistance observations cannot establish mold resistance in this patient, and a composite trial failure endpoint is not itself proof of breakthrough infection or resistance."
  }
};
export const triazoleAntifungalPharmacologyQuestionBank = priorExposureReviewQuestionBank.map((question) => sourceReviewedExposureQuestions[question.id] ? { ...question, ...sourceReviewedExposureQuestions[question.id] } : question);
if(triazoleAntifungalPharmacologyQuestionBank.length<100)throw new Error(`Triazole pharmacology bank must contain at least 100 questions, found ${triazoleAntifungalPharmacologyQuestionBank.length}.`);
