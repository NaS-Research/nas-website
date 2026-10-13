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
const priorTdmReviewQuestionBank = priorExposureReviewQuestionBank.map((question) => sourceReviewedExposureQuestions[question.id] ? { ...question, ...sourceReviewedExposureQuestions[question.id] } : question);
const sourceReviewedItraconazoleTdmQuestions = {
  "triazole-pharmacology-061": {
    "choices": [
      "Variable absorption and an active hydroxy metabolite make concentration monitoring clinically useful",
      "An active hydroxy metabolite makes measuring itraconazole exposure unnecessary",
      "A conventional capsule dose predicts the same exposure in every patient regardless of gastric acidity",
      "A concentration result proves clinical success even when infection is progressing"
    ],
    "rationale": "Variable absorption and active hydroxyitraconazole support exposure monitoring. IDSA recommends TDM for specified itraconazole treatment contexts, with concentration interpreted alongside response, toxicity and interacting medicines. An active metabolite does not remove variability. A fixed dose does not establish exposure, and a result alone cannot establish treatment success. Confirm which analytes and assay the laboratory reports."
  },
  "triazole-pharmacology-062": {
    "choices": [
      "Obtain an interpretable concentration after loading or a meaningful change and act on efficacy or toxicity risk",
      "Treat a sample taken immediately after the first loading dose as a definitive steady-state result",
      "Keep the original monitoring plan after a major absorption or interaction change without reassessment",
      "Change the dose from a concentration alone without checking timing, assay or clinical response"
    ],
    "rationale": "Plan the sample around the indication, loading history and time needed for an interpretable concentration, then act on efficacy or toxicity risk. IDSA aspergillosis guidance recommends monitoring at steady state and patient-specific repeat monitoring; severe-histoplasmosis guidance specifies assessment after 1 to 2 weeks of itraconazole. After a meaningful change, reassess the need and timing rather than treating a first-dose sample as steady state. Check the assay, administration and clinical course before a dose decision; these guidelines do not establish one schedule for every use."
  },
  "triazole-pharmacology-063": {
    "choices": [
      "Assess product, dose, timing, itraconazole assay, hydroxyitraconazole, adherence, interactions, and response",
      "Check only the prescribed milligrams and ignore the actual formulation and adherence",
      "Interpret a combined parent-plus-metabolite result using a parent-only target without checking the assay",
      "Treat the concentration as a substitute for evaluating response, toxicity and interacting medicines"
    ],
    "rationale": "Interpret the exact product, dose and loading history, sampling time, measured analytes, adherence, interactions and clinical response together. Hydroxyitraconazole is active. A parent-only chromatographic result and a combined result are different measurements, and indication-specific targets cannot be transferred without context. Prescribed milligrams alone do not establish the delivered exposure. The concentration supplements assessment of efficacy and toxicity rather than replacing it."
  },
  "triazole-pharmacology-064": {
    "choices": [
      "Comparing a combined concentration to an itraconazole-only target without assay context",
      "Confirming whether the laboratory reports itraconazole alone or parent plus hydroxyitraconazole",
      "Checking sampling time and choosing guidance for the infection being treated",
      "Reviewing adherence, administration, interactions and response before adjusting the dose"
    ],
    "rationale": "Applying an itraconazole-only target to a combined concentration without assay context is the hazard. IDSA guidance distinguishes analytes and infection-specific interpretation; its histoplasmosis guidance notes that an established combined cutoff is lacking. Historical FDA assay information also distinguishes parent-specific HPLC from a bioassay influenced by active hydroxyitraconazole. Checking analytes, timing, clinical indication and the delivered regimen are appropriate safeguards. No universal conversion factor or combined target is established here."
  }
};
const sourceReviewedFluconazoleQuestions = {
  "triazole-pharmacology-033": {
    "question": "Which principle best characterizes fluconazole bioavailability?",
    "choices": [
      "Fluconazole has high oral bioavailability and oral and intravenous doses are often numerically equivalent",
      "Oral fluconazole generally needs an acidic beverage to achieve useful absorption",
      "Oral exposure remains poor even when gastrointestinal function is reliable",
      "Oral fluconazole always needs a larger dose than intravenous fluconazole"
    ],
    "rationale": "The label reports oral bioavailability over 90% and similar pharmacokinetics by oral and intravenous routes. Food is not required for absorption. This supports comparable dosing when the patient and infection permit oral therapy; it does not prove reliable delivery during vomiting or nonadherence."
  },
  "triazole-pharmacology-034": {
    "question": "Which clinical action best applies to fluconazole bioavailability?",
    "choices": [
      "Use oral therapy when the patient can absorb and the syndrome permits it",
      "Choose oral therapy despite persistent vomiting because intrinsic bioavailability is high",
      "Keep intravenous treatment solely because fluconazole tablets have poor intrinsic absorption",
      "Switch to oral treatment based only on tablet availability, without reviewing the infection or delivery"
    ],
    "rationale": "High oral bioavailability supports oral use when absorption, adherence and the infection-specific treatment plan are reliable. Persistent vomiting can prevent delivery, while tablet availability alone does not establish readiness. The label does not characterize oral fluconazole as poorly absorbed."
  },
  "triazole-pharmacology-035": {
    "question": "Which assessment is most appropriate for fluconazole bioavailability?",
    "choices": [
      "Assess swallowing, gastrointestinal function, adherence, dose, site, severity, and transition criteria",
      "Review tablet strength but assume vomiting cannot affect the delivered dose",
      "Review the organism but omit swallowing, gastrointestinal function and adherence",
      "Review a normal liver test as proof that every oral dose reaches the bloodstream"
    ],
    "rationale": "Assess the ability to take and retain doses, adherence and the infection's site and severity before relying on oral exposure. Neither a tablet strength nor normal liver tests proves delivery. Organism assessment is necessary but does not replace the route assessment."
  },
  "triazole-pharmacology-036": {
    "question": "Which reasoning hazard is most important to prevent with fluconazole bioavailability?",
    "choices": [
      "Assuming oral reliability without assessing the patient",
      "Confirming that the patient can take and retain oral doses",
      "Checking adherence before attributing poor response to resistance",
      "Reviewing infection-specific transition criteria before changing routes"
    ],
    "rationale": "The hazard is assuming that high intrinsic bioavailability guarantees oral delivery. Confirming dose retention, adherence and transition criteria helps prevent that error; those are appropriate safeguards rather than the reasoning hazard."
  },
  "triazole-pharmacology-037": {
    "question": "Which principle best characterizes fluconazole renal clearance?",
    "choices": [
      "Fluconazole is primarily renally eliminated and maintenance exposure often requires adjustment when renal function declines",
      "Fluconazole maintenance exposure is governed mainly by hepatic elimination",
      "Changing from intravenous to oral fluconazole removes the effect of renal impairment on clearance",
      "Reduced creatinine clearance generally accelerates fluconazole elimination"
    ],
    "rationale": "Fluconazole is cleared primarily by renal excretion as unchanged drug. Lower renal function can prolong elimination and requires an indication-specific maintenance review; oral administration does not remove that clearance mechanism. Loading, single-dose vaginal treatment and dialysis require separate interpretation."
  },
  "triazole-pharmacology-038": {
    "question": "Which clinical action best applies to fluconazole renal clearance?",
    "choices": [
      "Preserve any syndrome-specific loading dose and adjust maintenance according to current product and clinical guidance",
      "Reduce every required loading dose solely because creatinine clearance is reduced",
      "Keep repeated maintenance dosing unchanged whenever the route is oral",
      "Omit a required loading dose and wait for reduced maintenance dosing to establish exposure"
    ],
    "rationale": "Loading establishes initial exposure; renal function then informs maintenance. Verify the infection-specific loading plan and use the applicable maintenance and dialysis guidance. The label separates the initial loading dose from subsequent renal adjustments and gives a separate single-dose vaginal-treatment exception."
  },
  "triazole-pharmacology-039": {
    "question": "Which assessment is most appropriate for fluconazole renal clearance?",
    "choices": [
      "Assess creatinine clearance, dialysis, loading, maintenance, duration, and renal trajectory",
      "Assess liver function alone because oral fluconazole does not depend on renal clearance",
      "Assume hemodialysis cannot affect exposure and omit the dialysis schedule",
      "Review renal function only before the first dose and ignore later changes"
    ],
    "rationale": "Review creatinine clearance, dialysis and its schedule, the indication's loading and maintenance doses, and changing renal function. The label describes renal elimination, removal during hemodialysis and distinct maintenance instructions. Liver review alone and a one-time renal assessment do not answer those exposure questions."
  },
  "triazole-pharmacology-040": {
    "question": "Which reasoning hazard is most important to prevent with fluconazole renal clearance?",
    "choices": [
      "Reducing a required loading dose solely because renal function is low",
      "Separating the indication-specific loading plan from renal maintenance adjustment",
      "Checking the dialysis schedule before choosing repeated doses",
      "Reassessing maintenance dosing when renal function changes"
    ],
    "rationale": "Reducing a required loading dose solely because renal function is low confuses initial distribution with ongoing clearance. Reviewing loading and maintenance separately, checking dialysis and reassessing renal changes are appropriate actions. Verify the regimen for the actual infection rather than applying one rule to every course."
  },
  "triazole-pharmacology-041": {
    "question": "Which principle best characterizes fluconazole spectrum limits?",
    "choices": [
      "Candida krusei is intrinsically resistant and Candida glabrata requires susceptibility-guided interpretation",
      "Candida krusei can routinely be treated with fluconazole if the dose is increased",
      "Candida glabrata is predictably fluconazole susceptible without isolate testing",
      "Every Candida species has the same expected response to fluconazole"
    ],
    "rationale": "The book and label identify Candida krusei as fluconazole resistant. Candida glabrata has variable susceptibility and requires isolate-specific interpretation before a fluconazole transition. A higher dose does not erase intrinsic krusei resistance, and genus membership alone does not establish susceptibility."
  },
  "triazole-pharmacology-042": {
    "question": "Which clinical action best applies to fluconazole candidemia step-down?",
    "choices": [
      "Require species and susceptibility before fluconazole step-down in invasive disease",
      "Choose fluconazole step-down for Candida krusei solely because the patient has improved",
      "Assume Candida glabrata is susceptible without reviewing the isolate result",
      "Use clinical stability alone and omit species and susceptibility testing"
    ],
    "rationale": "For candidemia, IDSA requires clinical stability, a fluconazole-susceptible isolate and negative repeat blood cultures before the usual fluconazole transition. Species and susceptibility matter: clinical improvement alone does not establish activity, and Candida krusei should not be treated as fluconazole susceptible."
  },
  "triazole-pharmacology-043": {
    "question": "Which assessment is most appropriate for fluconazole candidemia step-down?",
    "choices": [
      "Assess species, MIC category, dose-dependent susceptibility, blood culture clearance, stability, and site",
      "Use genus identification alone and omit isolate susceptibility and blood culture clearance",
      "Use one MIC interpretation for every Candida species and ignore clinical stability",
      "Assess oral tablet access but disregard the infection site and microbiology"
    ],
    "rationale": "A candidemia transition requires the species and applicable susceptibility interpretation together with stability, repeat culture clearance and infection-site assessment. MIC categories are species and method dependent. Tablet access, genus identification or a single generic cutoff cannot replace the microbiologic and clinical review."
  },
  "triazole-pharmacology-044": {
    "question": "Which reasoning hazard is most important to prevent with fluconazole spectrum limits?",
    "choices": [
      "Treating every Candida isolate as fluconazole susceptible",
      "Checking isolate susceptibility before choosing invasive-disease step-down",
      "Keeping Candida krusei's intrinsic resistance explicit",
      "Interpreting Candida glabrata using the applicable susceptibility result"
    ],
    "rationale": "Treating every Candida isolate as susceptible is the error. Isolate testing, recognition of intrinsic krusei resistance and appropriate glabrata interpretation are safeguards. Other Candida species can also have resistant isolates, so a usual species pattern is not a guarantee."
  },
  "triazole-pharmacology-045": {
    "question": "Which principle best characterizes fluconazole safety?",
    "choices": [
      "Fluconazole can cause hepatotoxicity, QT prolongation, severe skin reactions, and clinically important interactions",
      "Renal elimination excludes clinically important CYP-mediated interactions",
      "A normal baseline liver test rules out subsequent fluconazole-associated liver injury",
      "Fluconazole has no important QT or severe skin-reaction risk"
    ],
    "rationale": "Fluconazole labeling includes serious hepatic reactions, QT prolongation, severe skin reactions and CYP-mediated interactions. Renal clearance does not prevent enzyme inhibition. Normal baseline liver tests do not exclude later injury, and hepatic toxicity does not have a reliably predictable relationship to dose or duration."
  },
  "triazole-pharmacology-046": {
    "question": "Which clinical action best applies to fluconazole safety?",
    "choices": [
      "Monitor risk by dose, duration, organ function, symptoms, electrolytes, and medication burden",
      "Omit interaction review because fluconazole is primarily renally eliminated",
      "Ignore a worsening rash because fluconazole skin effects are always mild",
      "Use normal baseline liver tests as the only safety assessment throughout treatment"
    ],
    "rationale": "Review symptoms, organ function, electrolytes and co-medications during treatment, applying the agent's warnings and the clinical situation. Renal elimination does not remove interactions; progressive skin lesions and possible liver injury need assessment. Dose and duration inform the context but cannot guarantee freedom from hepatotoxicity."
  },
  "triazole-pharmacology-047": {
    "question": "Which assessment is most appropriate for fluconazole safety?",
    "choices": [
      "Assess liver tests, QTc, potassium, magnesium, rash, warfarin, sulfonylureas, phenytoin, and CYP substrates",
      "Review creatinine clearance alone and omit QT, liver, rash and interacting medicines",
      "Assume warfarin, sulfonylureas and phenytoin cannot interact with a renally cleared antifungal",
      "Treat normal initial liver tests and electrolytes as proof that later review is unnecessary"
    ],
    "rationale": "Fluconazole can inhibit CYP enzymes despite renal elimination. The label calls for attention to liver injury, QT risk and rash and describes interactions with warfarin, sulfonylureas and phenytoin. Review relevant clinical and laboratory changes; renal assessment alone and a normal baseline do not replace that safety review."
  },
  "triazole-pharmacology-048": {
    "question": "Which reasoning hazard is most important to prevent with fluconazole safety?",
    "choices": [
      "Calling fluconazole interaction free because it is renally cleared",
      "Reviewing CYP substrate medicines despite fluconazole's renal elimination",
      "Considering potassium and other contributors to QT risk",
      "Reassessing symptoms and liver tests when injury is suspected"
    ],
    "rationale": "The error is equating renal clearance with freedom from interactions. Fluconazole inhibits CYP2C9, CYP3A4 and CYP2C19 and can change substrate exposure. Interaction review, electrolyte assessment and evaluation of suspected hepatic injury are appropriate safeguards."
  },
  "triazole-pharmacology-163": {
    "question": "A nonneutropenic patient with candidemia is stable, repeat cultures are negative, and the isolate is fluconazole susceptible. What supports step-down?",
    "choices": [
      "Reliable oral intake, correct loading and maintenance plan, renal adjustment, interaction review, and follow-up",
      "Persistent vomiting without a plan to ensure oral exposure",
      "Omitting renal dose review because the new route is oral",
      "Ignoring interacting medicines once repeat blood cultures are negative"
    ],
    "rationale": "For nonneutropenic candidemia, IDSA supports fluconazole transition when the patient is stable, the isolate is susceptible and repeat blood cultures are negative. Also verify oral delivery, the existing loading history, appropriate maintenance and renal plan, interactions and follow-up. A route change alone does not require another loading course; vomiting, renal clearance and interactions still matter."
  },
  "triazole-pharmacology-164": {
    "question": "Which Candida species is intrinsically resistant to fluconazole?",
    "choices": [
      "Candida krusei",
      "Candida albicans",
      "Candida parapsilosis",
      "Candida tropicalis"
    ],
    "rationale": "Candida krusei is intrinsically resistant to fluconazole. The other listed species are not defined by universal intrinsic fluconazole resistance, although individual isolates can acquire resistance. Verify isolate susceptibility when required rather than assuming every isolate of another species is susceptible."
  }
};
const sourceReviewedVoriconazoleQuestions = {
  "triazole-pharmacology-065": {
    "choices": [
      "Adult voriconazole metabolism is saturable, so dose changes can produce disproportionate concentration changes",
      "Adult voriconazole clearance is linear at every clinically used dose",
      "Doubling an adult dose guarantees an exactly doubled trough",
      "A small dose increase cannot cause a large exposure increase"
    ],
    "rationale": "Adult voriconazole metabolism is saturable. Dose changes can therefore produce disproportionate concentration changes, so neither linear clearance nor an exactly proportional trough change is assured. Even a small increase can materially raise exposure. The label describes nonlinear pharmacokinetics and IDSA recommends incremental adjustment with monitoring; the study-average dose examples are not a universal multiplier."
  },
  "triazole-pharmacology-066": {
    "choices": [
      "Use incremental adjustments and repeat TDM rather than assuming linearity",
      "Double the dose whenever the trough is half the desired value without reviewing the sample",
      "Change the dose and omit follow-up concentrations because the new dose predicts exposure",
      "Treat all adult dose-to-concentration changes as directly proportional"
    ],
    "rationale": "Review the administered regimen and interpretable sample, then individualize incremental adjustments and repeat TDM with response and toxicity assessment. Automatic doubling assumes linear pharmacokinetics, and a new dose does not predict a unique concentration. IDSA notes that a widely validated universal voriconazole dosing algorithm is lacking."
  },
  "triazole-pharmacology-067": {
    "choices": [
      "Assess dose, trough timing, CYP2C19, liver function, inflammation, interacting drugs, and response",
      "Use CRP alone to calculate a fixed dose correction and omit the drug concentration",
      "Assess tablet strength only and assume a low result excludes timing or interaction problems",
      "Use ancestry as the sole exposure predictor and omit liver function and response"
    ],
    "rationale": "Dose and sample timing, actual administration, CYP2C19 information when available, liver status, inflammatory changes, interactions and clinical response help interpret exposure. Adult observational evidence associates inflammation with higher concentrations, but does not validate a fixed CRP dosing algorithm. Tablet strength and ancestry alone cannot explain or exclude the other contributors."
  },
  "triazole-pharmacology-068": {
    "choices": [
      "Doubling the dose because the trough is half the target",
      "Checking actual administration and sample timing before interpreting a low trough",
      "Reviewing interacting drugs and changing clinical status before adjusting exposure",
      "Making an individualized incremental adjustment with repeat interpretable monitoring"
    ],
    "rationale": "Automatically doubling the dose because a trough is half a target assumes linear adult clearance and may overshoot exposure. Administration and sampling review, interaction assessment and incremental changes followed by repeat monitoring are safeguards against that reasoning hazard, not the hazard itself."
  },
  "triazole-pharmacology-069": {
    "choices": [
      "CYP2C19 phenotype contributes to large interpatient voriconazole variability",
      "Every CYP2C19 genotype produces identical voriconazole exposure",
      "Ancestry alone identifies an individual patient's CYP2C19 phenotype",
      "CYP2C19 genotype is the only contributor to voriconazole exposure"
    ],
    "rationale": "CYP2C19 variation contributes to interpatient exposure differences, while dose, hepatic function, inflammatory status and interacting medicines also matter. The label reports genotype-associated pharmacokinetic differences; population frequencies cannot identify an individual's genotype or phenotype, and genotype is not the only exposure determinant."
  },
  "triazole-pharmacology-070": {
    "choices": [
      "Use early TDM and interaction review rather than guessing phenotype from a standard dose",
      "Infer the patient's metabolic phenotype from the prescribed dose alone",
      "Assign a phenotype from race alone and omit exposure monitoring",
      "Ignore interacting medicines once a genotype result is available"
    ],
    "rationale": "Early interpretable TDM and interaction review help assess the individual rather than assuming that a standard prescribed dose identifies phenotype. Genotype information can contribute, but a dose or population category cannot establish the patient's exposure, and a genotype result does not remove interaction or clinical-status review."
  },
  "triazole-pharmacology-071": {
    "choices": [
      "Assess genotype if available, concentration, ancestry only as context, CYP2C19 inhibitors or inducers, and liver status",
      "Assign CYP2C19 phenotype solely from the patient's race",
      "Review genotype but omit the actual concentration and interacting medicines",
      "Use a normal baseline liver test as proof that genotype cannot affect exposure"
    ],
    "rationale": "If genotype is available, interpret it alongside measured exposure, interacting medicines and liver status. Ancestry may provide population context but cannot assign individual metabolism. A genotype result and a normal liver test do not replace concentration interpretation or interaction assessment; inflammatory status can change exposure too."
  },
  "triazole-pharmacology-072": {
    "choices": [
      "Assigning metabolism from race alone",
      "Interpreting an available genotype together with measured exposure",
      "Checking interacting medicines before explaining a concentration change",
      "Reassessing exposure when liver function or clinical status changes"
    ],
    "rationale": "Assigning metabolism from race alone is the hazard. Population allele frequencies do not identify an individual's genotype or determine current exposure. Combining available genotype with concentrations, medication review and changing physiology is an appropriate way to avoid that error."
  },
  "triazole-pharmacology-073": {
    "choices": [
      "Transient visual disturbance is common and higher exposure can increase CNS toxicity",
      "Every visual symptom proves irreversible toxicity regardless of timing or clinical context",
      "A concentration within a chosen range excludes neurologic adverse effects",
      "Visual symptoms and CNS changes require no reassessment because they are always harmless"
    ],
    "rationale": "Transient visual disturbances are common, while hallucinations, confusion or severe visual changes warrant prompt assessment for excessive exposure and other causes. Exposure can help contextualize CNS toxicity but cannot alone establish or exclude it. Neither universal reassurance nor a diagnosis of irreversible injury from every early visual symptom is supported. Persistent or severe symptoms require evaluation, and longer therapy has labeled vision-monitoring requirements."
  },
  "triazole-pharmacology-074": {
    "choices": [
      "Counsel about visual changes and night driving, then reassess concentration and safety when symptoms are persistent or severe",
      "Advise that night driving is safe if the most recent trough is in range",
      "Reassure persistent hallucinations without symptom or medication reassessment",
      "Omit vision monitoring beyond28days because early visual effects can be transient"
    ],
    "rationale": "Counsel about visual changes and the labeled prohibition on night driving, and assess persistent or severe symptoms promptly with concentration timing, dosing and interaction context. Dangerous activities should be avoided until the patient knows the individual effect. The label requires visual acuity, visual-field and color-perception monitoring beyond28days. A trough in a chosen range or a transient early effect does not establish driving safety or justify ignoring later symptoms."
  },
  "triazole-pharmacology-075": {
    "choices": [
      "Assess trough, hallucinations, confusion, vision, timing, driving, hepatic function, and interactions",
      "Assess the trough alone and classify every hallucination as proven drug toxicity",
      "Ask only about daytime vision and omit symptom timing, driving and interactions",
      "Use a normal baseline liver test to dismiss new confusion without evaluation"
    ],
    "rationale": "Assess symptoms, temporal relationship, concentration timing, dosing, hepatic status and interacting medicines, with immediate safety considerations such as driving. Hallucinations and confusion can reflect excessive exposure or other urgent causes. A trough or a normal baseline liver result does not establish the cause or exclude the need for reassessment. Vision surveillance becomes more extensive with longer treatment."
  },
  "triazole-pharmacology-076": {
    "choices": [
      "Ignoring new hallucinations during high exposure",
      "Promptly reviewing symptom onset, medications and an interpretable concentration",
      "Evaluating persistent or severe neurologic changes for drug-related and other causes",
      "Counseling against night driving and unsafe activities while individual effects are uncertain"
    ],
    "rationale": "Ignoring new hallucinations during high exposure can miss important toxicity or another urgent cause. Prompt symptom and medication assessment, contextual concentration interpretation and activity counseling are appropriate safeguards. High exposure is a reason to reassess, not sufficient proof of the sole cause."
  },
  "triazole-pharmacology-077": {
    "choices": [
      "Prolonged voriconazole can cause photosensitivity, cutaneous malignancy, periostitis, and fluorosis",
      "Long-term voriconazole has no clinically important skin or skeletal safety concerns",
      "Routine sunscreen guarantees prevention of cutaneous malignancy during treatment",
      "Bone pain alone definitively establishes voriconazole-induced fluorosis"
    ],
    "rationale": "Prolonged voriconazole has been associated with photosensitivity, cutaneous malignancy and skeletal fluorosis or periostitis. The label describes prevention, evaluation and specific discontinuation findings; it does not guarantee that sunscreen prevents malignancy or make bone pain alone diagnostic. A changing surveillance and continuing-need plan is required."
  },
  "triazole-pharmacology-078": {
    "choices": [
      "Use sun protection, skin surveillance, symptom review, fluoride or bone evaluation when indicated, and an ongoing need assessment",
      "Continue new phototoxic lesions unchanged because sunscreen makes them harmless",
      "Ignore bone symptoms unless the trough exceeds a universal toxicity cutoff",
      "Discontinue surveillance after baseline tests because duration cannot change risk"
    ],
    "rationale": "Use photoprotection, skin and symptom review, indicated skeletal or fluoride assessment and continued indication review. Patients should report a new or worsening rash immediately; phototoxic reactions require dermatologic evaluation and consideration of discontinuation. The label calls for discontinuation for consistent premalignant or malignant lesions, or skeletal pain with compatible radiology. Neither sunscreen nor a drug concentration alone establishes long-term safety."
  },
  "triazole-pharmacology-079": {
    "choices": [
      "Assess ultraviolet exposure, skin lesions, bone pain, alkaline phosphatase, treatment duration, transplant status, and alternatives",
      "Interpret elevated alkaline phosphatase alone as proof of drug-induced periostitis",
      "Assess only the trough and omit skin lesions, skeletal symptoms and duration",
      "Assume transplant status removes the need to consider alternative causes of bone pain"
    ],
    "rationale": "Review ultraviolet exposure, lesions, skeletal symptoms, ALP in context, duration, transplant history and treatment alternatives. A five-case lung-transplant report linked pain and ALP elevation with characteristic bone imaging, supporting consideration of periostitis; it does not establish an ALP-only diagnosis. Current labeling requires evaluation and identifies skeletal pain plus compatible radiology as a discontinuation finding. A concentration or transplant history does not replace a differential assessment."
  },
  "triazole-pharmacology-080": {
    "choices": [
      "Treating long-term photosensitivity as harmless",
      "Arranging dermatologic assessment when phototoxic reactions occur",
      "Reassessing therapy when suspicious skin lesions develop",
      "Reviewing skeletal pain and treatment duration rather than dismissing new symptoms"
    ],
    "rationale": "Treating long-term photosensitivity as harmless can delay assessment of serious cutaneous injury. The label calls for dermatologic evaluation and consideration of discontinuation after phototoxic reactions, with regular assessment if treatment continues despite related lesions. Suspicious premalignant or malignant findings require the labeled discontinuation action; new skeletal symptoms also warrant evaluation. These reviews are safeguards, not the reasoning hazard."
  },
  "triazole-pharmacology-167": {
    "choices": [
      "Adult nonlinear PK can cause a disproportionate concentration increase, so incremental adjustment and repeat TDM are safer",
      "Doubling the dose guarantees an exactly proportional trough increase",
      "A low trough makes repeat monitoring unnecessary after a dose change",
      "A low trough proves that timing, administration and interactions are adequate"
    ],
    "rationale": "Saturable adult metabolism can produce disproportionate exposure increases. Verify sampling time, actual doses, delivery, interacting medicines and changing clinical status before individualized incremental adjustment and repeat monitoring. A single low result neither establishes linearity nor proves that delivery and interactions are adequate."
  },
  "triazole-pharmacology-168": {
    "choices": [
      "Voriconazole-associated periostitis or fluorosis",
      "Bone pain and elevated alkaline phosphatase definitively prove fluorosis without imaging",
      "A concentration in a chosen range rules out all voriconazole-related skeletal toxicity",
      "No medication-related syndrome needs consideration because the patient is a transplant recipient"
    ],
    "rationale": "Long-term voriconazole has been associated with periostitis or fluorosis. A five-case lung-transplant report describes bone pain, ALP elevation and characteristic imaging, so this pattern warrants considering the syndrome and evaluating other causes. Pain and ALP alone do not establish the diagnosis. The label calls for discontinuation when skeletal pain is accompanied by radiologic findings compatible with fluorosis or periostitis; a drug level alone does not establish skeletal safety."
  }
};
const sourceReviewedIsavuconazoleQuestions = {
  "triazole-pharmacology-097": {
    "choices": [
      "Isavuconazonium is a water-soluble prodrug converted to active isavuconazole",
      "Isavuconazonium is the active antifungal and requires no conversion",
      "The prodrug and active isavuconazole have identical milligram masses",
      "Water solubility removes the need to verify the administered dose"
    ],
    "rationale": "Isavuconazonium sulfate is a water-soluble prodrug converted to active isavuconazole. The FDA review supports the prodrug-solubility description and current labeling describes conversion and distinct prodrug/active masses. Solubility does not establish equal masses or remove dose verification."
  },
  "triazole-pharmacology-098": {
    "choices": [
      "Keep prodrug milligrams and active-equivalent milligrams distinct during verification",
      "Treat 200 mg of active isavuconazole as 200 mg of isavuconazonium sulfate",
      "Omit the sulfate-versus-active convention because both names refer to treatment",
      "Copy a milligram number between conventions without checking the product"
    ],
    "rationale": "Keep sulfate/prodrug milligrams distinct from active-equivalent milligrams. The label states 372 mg isavuconazonium sulfate equals 200 mg isavuconazole. Equal numerical amounts across conventions do not represent equal labeled doses, so a handoff must identify which convention and product it uses."
  },
  "triazole-pharmacology-099": {
    "choices": [
      "Assess dosage form, 372 mg prodrug equivalent to 200 mg active drug, loading schedule, and switch",
      "Verify only the number 200 without naming the prodrug or active ingredient",
      "Assume 372 mg of the sulfate contains 372 mg active isavuconazole",
      "Review the route but omit the prior loading history and mass convention"
    ],
    "rationale": "Verify dosage form, labeled active equivalence, administered loading history and the route/schedule. Table 1 identifies 372 mg sulfate as 200 mg active and gives the adult loading/maintenance sequence. The route and a bare milligram number alone do not answer those dosing questions."
  },
  "triazole-pharmacology-100": {
    "choices": [
      "Writing 200 mg of the prodrug when 200 mg active equivalent was intended",
      "Specifying both 372 mg sulfate and 200 mg active equivalent during a handoff",
      "Checking capsule strength before deciding the number of capsules",
      "Confirming the dose convention before copying an order"
    ],
    "rationale": "Writing 200 mg of the prodrug when 200 mg active drug was intended confuses mass conventions and does not describe the labeled 372 mg sulfate adult dose. Explicit equivalence, strength and order checks prevent that hazard rather than constitute it."
  },
  "triazole-pharmacology-101": {
    "choices": [
      "Adult therapy uses 372 mg isavuconazonium every 8 hours for 6 doses followed by 372 mg once daily",
      "Adult treatment routinely starts once-daily maintenance without loading",
      "One adult 372 mg dose completes the labeled loading sequence",
      "The adult loading sequence uses 372 mg active isavuconazole per dose"
    ],
    "rationale": "The adult labeled regimen uses 372 mg isavuconazonium sulfate, equivalent to 200 mg active isavuconazole, every 8 hours for 6 doses, followed by 372 mg sulfate once daily. Table 1 specifies first maintenance 12 to 24 hours after the last load. One dose or a switch to active-mass 372 mg does not reproduce that regimen."
  },
  "triazole-pharmacology-102": {
    "choices": [
      "Complete the loading sequence and start maintenance 12 to 24 hours after the last loading dose",
      "Stop loading after one dose because the drug has a long half-life",
      "Start maintenance immediately after the last loading dose without schedule review",
      "Automatically repeat all six loading doses when changing administration route"
    ],
    "rationale": "Complete the verified adult six-dose loading sequence and start maintenance 12 to 24 hours after the final loading dose. The label describes a long mean half-life but still requires loading for the initial regimen. Route switching alone does not require another load; verify the doses actually given and follow the maintained schedule."
  },
  "triazole-pharmacology-103": {
    "choices": [
      "Assess dose count, timing, missed doses, oral or intravenous route, and transition",
      "Assess only the first dose and assume the other five were administered",
      "Use the date of a route change as proof that loading starts again",
      "Verify a capsule strength but omit timing,missed doses and transition history"
    ],
    "rationale": "Review actual dose count and times, missed administrations, route and the planned maintenance transition. The label requires six loading doses at 8-hour intervals and an appropriate post-load maintenance start. Capsule strength, the first dose or a route-change date does not establish that the sequence was delivered. Missed-dose problems need individualized reassessment,not an invented universal catch-up rule."
  },
  "triazole-pharmacology-104": {
    "choices": [
      "Stopping loading after one dose",
      "Confirming that all six adult loading doses were administered",
      "Checking the first maintenance time against the last loading dose",
      "Maintaining the verified schedule through a route change"
    ],
    "rationale": "Stopping after one dose leaves the adult labeled six-dose loading sequence incomplete. Verifying dose count and maintenance timing and preserving the schedule across routes are appropriate safeguards,not the reasoning hazard. The long half-life does not justify omitting the initial loading regimen."
  },
  "triazole-pharmacology-105": {
    "choices": [
      "Isavuconazole shortens QT in a concentration-related manner and is contraindicated in familial short QT syndrome",
      "Isavuconazole prolongsQT and has no short-QT contraindication",
      "QT shortening makes isavuconazole appropriate in familial short QT syndrome",
      "QT shortening guarantees freedom from cardiac and interaction risk"
    ],
    "rationale": "Current labeling describes concentration-related QT shortening and contraindicates CRESEMBA in familial short QT syndrome. The healthy-subject QTstudy does not establish universal cardiac safety,and additive effects with other QT-shortening drugs were not evaluated. QT direction is one part of patient and medication assessment."
  },
  "triazole-pharmacology-106": {
    "choices": [
      "Distinguish it from QT-prolonging triazoles while still reviewing the full cardiac system",
      "Choose isavuconazole solely because every QT shortening effect is beneficial",
      "Omit medication and cardiac-history review because the drug does not prolongQT",
      "Use it despite familial short QT syndrome because other triazoles prolongQT"
    ],
    "rationale": "Recognize the different QT direction while reviewing cardiac history,the familial short QT contraindication and the medication system. QT shortening is not uniformly beneficial and does not remove hepatic or interaction risks. Current labeling contraindicates strong CYP3 A4 inhibitors and inducers independently of the QT direction."
  },
  "triazole-pharmacology-107": {
    "choices": [
      "Assess familial short QT, ECG, electrolytes, interacting drugs, syncope, and indication",
      "Ignore a family history of short QT syndrome when the baseline ECG appears reassuring",
      "Use QT direction alone and omit symptoms, electrolytes and interacting medicines",
      "Assume one normal ECG proves cardiac safety for the entire course"
    ],
    "rationale": "Assess familial short QT status, relevant ECG and clinical cardiac findings, electrolytes, medication interactions, symptoms such as syncope and the indication. The familial condition is a labeled contraindication, not erased by a reassuring measurement. The book includes electrolyte monitoring and patient labeling says an ECG may be ordered; this is not one universal ECG schedule or a guarantee from a normal result."
  },
  "triazole-pharmacology-108": {
    "choices": [
      "Calling it the universally safest choice for every long QT patient",
      "Checking for the familial short QT contraindication before treatment",
      "Reviewing interacting drugs even though the agent shortensQT",
      "Considering the infection,cardiac history and other safety risks together"
    ],
    "rationale": "Calling isavuconazole universally safest for every long QT patient is the hazard. QT direction alone does not establish the best drug for every infection or patient. Familial short QT,interactions and liver or other safety issues remain relevant;the other choices are appropriate safeguards."
  },
  "triazole-pharmacology-109": {
    "choices": [
      "Oral and intravenous isavuconazonium are bioequivalent, so a new loading course is not required when switching routes",
      "Every oral-to-IV switch requires a fresh six-dose loading course",
      "Bioequivalence guarantees oral delivery even during persistent vomiting",
      "An IV-to-oral switch changes the adult active-equivalent milligram target automatically"
    ],
    "rationale": "The label states that switching between IV and oral formulations is acceptable because bioequivalence has been demonstrated and a new load is not required. Preserve the verified exposure history and schedule. Bioequivalence does not prove that a vomiting patient receives oral doses or automatically change the active-equivalent adult dose."
  },
  "triazole-pharmacology-110": {
    "choices": [
      "Switch by maintaining the schedule after verifying product and active equivalent",
      "Repeat six loading doses whenever the administration route changes",
      "Copy an unlabeled milligram number without identifying the dose convention",
      "Switch to capsules despite inability to swallow or retain them"
    ],
    "rationale": "Verify product,mass convention,previous doses and delivery suitability,then maintain the schedule through a justified route change. Switching alone does not require reloading. Capsules must be swallowed whole and reliable oral administration must be assessed;equivalence does not overcome inability to take or retain doses."
  },
  "triazole-pharmacology-111": {
    "choices": [
      "Assess prior doses, route, gastrointestinal function, line, filter, interactions, and timing",
      "Assess the route name alone and omit administered doses and timing",
      "Use an infusion filter as proof that swallowed capsules will be absorbed",
      "Omit interactions because IV and oral active exposure can be equivalent"
    ],
    "rationale": "Review prior doses,timing,route and oral delivery,with IVline/filter requirements when the IV route is used and interactions in either route. The label requires an IV in-line filter and describes whole-capsule administration. An infusion device does not establish oral absorption,and route bioequivalence does not remove medication interactions."
  },
  "triazole-pharmacology-112": {
    "choices": [
      "Restarting six loading doses at every route change",
      "Confirming the already administered load before setting the maintenance schedule",
      "Checking capsule strength and active-equivalent dose at a route switch",
      "Reviewing oral intake and infusion requirements for the selected route"
    ],
    "rationale": "Restarting six loading doses at every route change unnecessarily resets a verified exposure history. The label states a new load is not required when switching bioequivalent IV and oral formulations. History,schedule,product strength and route-delivery checks are appropriate safeguards."
  },
  "triazole-pharmacology-171": {
    "choices": [
      "200 mg",
      "372 mg",
      "100 mg",
      "40 mg"
    ],
    "rationale": "The label explicitly gives 372 mg isavuconazonium sulfate as equivalent to 200 mg active isavuconazole.372 mg is the sulfate/prodrug amount,not the active amount;100 mg active corresponds to a 186 mg sulfate capsule and 40 mg active to a 74.5 mg sulfate capsule. Keep the convention visible instead of treating the different strengths as equivalent answers."
  },
  "triazole-pharmacology-172": {
    "choices": [
      "No, oral and intravenous formulations are bioequivalent and the maintenance schedule continues",
      "Yes,bioequivalent capsules always require six additional loading doses",
      "Oral maintenance must always double the active-equivalent IV dose",
      "Skip the maintenance dose because a route change itself provides exposure"
    ],
    "rationale": "When the six-dose loading course and schedule are verified,the IV-to-oral switch does not require a new load. The label allows the switch on demonstrated bioequivalence;continue maintenance at the appropriate time after the last load and verify product and reliable delivery. A route change neither supplies a dose nor requires automatic loading or doubling."
  }
};
const sourceReviewedPosaconazoleQuestions = {
  "triazole-pharmacology-169": {
    "choices": [
      "Stop and redesign the regimen because the formulations are not substitutable",
      "Dispense the same milligram dose because the active ingredient is unchanged",
      "Permit substitution when both formulations are taken with a full meal",
      "Copy the tablet regimen and use drug-level monitoring instead of verifying the suspension regimen"
    ],
    "rationale": "Stop the dose-for-dose substitution and verify the new product\u2019s indication, eligibility, regimen and administration. Conventional oral suspension is not substitutable with delayed-release tablets because dosing and exposure differ. A shared ingredient, a full meal or a plan to monitor levels does not establish interchangeable regimens."
  }
};
const sourceReviewedReproductiveQuestions = {
  "triazole-pharmacology-141": {
    "choices": [
      "Azole reproductive decisions require current agent-specific narrative data, syndrome severity, dose and duration, and alternatives",
      "A historical pregnancy letter alone determines the best agent",
      "All systemic azoles have identical pregnancy and lactation evidence",
      "Missing human pregnancy data proves absence of fetal risk"
    ],
    "rationale": "Use the current product-specific narrative evidence with disease severity, alternatives, dose, duration and gestational timing. Fluconazole and itraconazole labels distinguish exposure or indication contexts; other agents describe animal findings and missing or limited human data. A historical letter, a shared class name or absent human data does not establish equivalent or absent risk."
  },
  "triazole-pharmacology-142": {
    "choices": [
      "Use current labeling and specialist input rather than obsolete pregnancy letters",
      "Copy an older pregnancy letter without reviewing its supporting narrative",
      "Apply the itraconazole onychomycosis pregnancy restriction as the entire decision rule for every systemic fungal infection",
      "Use the same breastfeeding instruction for every triazole because their drug class matches"
    ],
    "rationale": "Review current labeling and obtain appropriate clinical input for the actual infection and exposure. FDA removed pregnancy letters because they oversimplified risk. Product narratives and instructions differ: itraconazole distinguishes indication contexts, and CRESEMBA directs breastfeeding discontinuation while VFEND and NOXAFIL describe contextual benefit-risk considerations. A letter or class-wide lactation instruction cannot replace that review."
  },
  "triazole-pharmacology-143": {
    "choices": [
      "Assess gestational timing, systemic versus local exposure, maternal disease, fetal risk, lactation, alternatives, and shared decision making",
      "Ignore gestational timing and duration after identifying the ingredient",
      "Convert animal fetal-toxicity findings into a precise human birth-defect rate",
      "Choose solely from maternal convenience without considering disease severity, alternatives or infant exposure"
    ],
    "rationale": "Assess the actual agent, gestational timing, systemic versus local exposure, dose and duration, maternal illness, alternatives and lactation separately. Current labels describe differing human evidence gaps and animal findings; those findings do not provide a precise human outcome rate. Neither the ingredient name nor convenience alone establishes a sound reproductive decision."
  },
  "triazole-pharmacology-144": {
    "choices": [
      "Applying one pregnancy rule to every azole and every dose",
      "Distinguishing the clinical indication and actual exposure before evaluating pregnancy risk",
      "Reviewing the current label and its uncertainty rather than relying on an old letter",
      "Considering lactation instructions separately from pregnancy risk"
    ],
    "rationale": "Do not apply one reproductive rule to every agent, indication and dose. Fluconazole labeling distinguishes exposure contexts, itraconazole distinguishes onychomycosis from systemic infection, and lactation instructions differ among the agents. Reviewing indication, evidence uncertainty and lactation separately prevents the stated hazard rather than constitutes it."
  }
};
const sourceReviewedMonitoringQuestions = {
  "triazole-pharmacology-129": {
    "choices": [
      "Every systemic triazole can cause clinically important liver injury, with different clearance and label details",
      "Normal baseline liver tests exclude later triazole-associated injury",
      "Hepatic injury is impossible with a renally cleared triazole",
      "All systemic triazoles have identical hepatic monitoring and stopping instructions"
    ],
    "rationale": "Systemic triazole labels describe potentially important hepatic injury. Clearance route does not eliminate that risk, and normal baseline tests do not prevent injury during therapy. Use the exact agent's hepatic warnings and action instructions rather than assuming identical risk or monitoring across the class."
  },
  "triazole-pharmacology-130": {
    "choices": [
      "Obtain baseline and serial liver tests based on agent, duration, symptoms, and risk",
      "Stop hepatic surveillance after a normal pretreatment result",
      "Wait for a scheduled blood draw before evaluating new jaundice or other concerning symptoms",
      "Use one fixed monitoring interval for every agent and patient regardless of label or clinical course"
    ],
    "rationale": "Evaluate liver tests at baseline and during treatment as directed by the specific product and clinical context. Abnormal results and concerning symptoms require reassessment for more severe injury and the label's treatment actions. A normal baseline, a fixed class-wide interval, or waiting for the next scheduled test cannot replace that reassessment."
  },
  "triazole-pharmacology-131": {
    "choices": [
      "Assess ALT, AST, alkaline phosphatase, bilirubin, symptoms, hepatic impairment, alcohol, and other hepatotoxins",
      "Measure creatinine alone because it excludes hepatic injury",
      "Interpret a single ALT result without symptoms, bilirubin, trends or competing causes",
      "Assess only pretreatment liver results and ignore changes during treatment"
    ],
    "rationale": "ALT, AST, alkaline phosphatase and bilirubin, together with symptoms and the clinical history, help assess hepatic injury and competing contributors. Current labels emphasize evaluation during treatment and follow-up of abnormal results. Renal function alone, an isolated value, or pretreatment testing alone does not answer the hepatic surveillance question."
  },
  "triazole-pharmacology-132": {
    "choices": [
      "Assuming normal baseline tests prevent future injury",
      "Following abnormal liver tests for evidence of more severe injury",
      "Reviewing new symptoms and laboratory trends during therapy",
      "Applying the current product's hepatic monitoring and discontinuation instructions"
    ],
    "rationale": "Normal baseline liver tests do not prevent subsequent drug-associated liver injury. Follow-up of abnormal results, reassessment of new symptoms and trends, and product-specific treatment actions are safeguards against that hazard. They do not constitute the requested reasoning error."
  },
  "triazole-pharmacology-133": {
    "choices": [
      "Renal implications differ between active drug clearance and an intravenous solubilizing vehicle",
      "All triazoles require the same renal dose reduction because they share a class name",
      "An intravenous vehicle warning proves identical accumulation of the active drug",
      "Changing from an intravenous product to an oral product always leaves vehicle exposure unchanged"
    ],
    "rationale": "Distinguish renal elimination of the active drug from renal handling of a formulation's solubilizing vehicle. Fluconazole is cleared primarily as unchanged drug, whereas selected intravenous triazoles have SBECD-related precautions. These mechanisms do not justify one renal rule for every agent or route."
  },
  "triazole-pharmacology-134": {
    "choices": [
      "Separate fluconazole maintenance adjustment from SBECD concerns with selected intravenous triazoles",
      "Apply fluconazole's maintenance renal adjustment to every oral triazole",
      "Treat SBECD accumulation as proof that every triazole active drug is renally eliminated",
      "Ignore the intravenous product's vehicle when evaluating a change in kidney function"
    ],
    "rationale": "Fluconazole's multiple-dose renal instructions distinguish the initial loading dose from subsequent maintenance dosing and address dialysis separately. Selected intravenous products have different SBECD precautions. Review the exact agent, formulation and renal measure; do not transfer fluconazole's maintenance rule to the whole class."
  },
  "triazole-pharmacology-135": {
    "choices": [
      "Assess creatinine clearance, dialysis, oral option, vehicle, duration, breakthrough risk, and kidney trajectory",
      "Use ingredient name alone without checking route, dialysis or the renal trajectory",
      "Assume creatinine clearance and indexed eGFR are interchangeable in every product instruction",
      "Select an oral alternative without assessing whether it can provide adequate exposure"
    ],
    "rationale": "Assess kidney function using the renal measure specified by the exact product, dialysis context, active-drug clearance, vehicle and route. If considering an oral alternative, evaluate its feasibility and exposure as well as infection risk. A class name, substitution of renal measures, or an unassessed oral switch is insufficient."
  },
  "triazole-pharmacology-136": {
    "choices": [
      "Applying one renal-dose rule to every triazole",
      "Distinguishing active-drug clearance from intravenous vehicle exposure",
      "Checking the product's specified renal measure and dialysis instructions",
      "Assessing the feasibility and absorption of an oral alternative"
    ],
    "rationale": "Applying one renal dose rule to every triazole confuses distinct active-drug and formulation mechanisms. Checking the exact renal measure, dialysis instructions and oral feasibility helps prevent that error. These are appropriate safeguards rather than the reasoning hazard requested."
  },
  "triazole-pharmacology-137": {
    "choices": [
      "TDM is most useful when exposure varies and concentration relates to efficacy or toxicity",
      "A concentration is automatically actionable even when sample timing is unknown",
      "Every triazole and formulation has the same requirement for routine TDM",
      "A measured concentration replaces assessment of infection response and toxicity"
    ],
    "rationale": "TDM is useful when variability and the exposure-response relationship make the result clinically actionable. The aspergillosis guideline supports context-specific monitoring and identifies differing evidence among agents and formulations. A drug level still requires interpretable timing and assessment of efficacy, toxicity and interactions; it is not a universal replacement for clinical review."
  },
  "triazole-pharmacology-138": {
    "choices": [
      "Order a correctly timed level for initiation, dose change, failure, toxicity, adherence concern, organ change, or interaction",
      "Order routine concentrations for every triazole initiation without considering agent or formulation",
      "Draw a sample at an undocumented time and apply a trough target",
      "Repeat levels without deciding how the result could change management"
    ],
    "rationale": "For an agent and clinical setting where TDM is indicated, obtain an appropriately timed concentration to address initiation or a relevant change, failure, toxicity, adherence or interaction concern. Establish the dosing and sampling context and a response plan. This is not a blanket instruction to measure a level at every initiation of every triazole or formulation."
  },
  "triazole-pharmacology-139": {
    "choices": [
      "Assess drug, formulation, steady state, trough timing, target, assay, clinical question, and action",
      "Use one target for every triazole regardless of indication or assay",
      "Interpret an untimed sample as a steady-state trough without dose history",
      "Ignore formulation, adherence and interactions once a numeric level is available"
    ],
    "rationale": "Interpret the result with the exact drug and formulation, dose history, sampling time, steady-state context, assay and clinical purpose. Parent-drug and metabolite measurements or assay methods may differ, and targets must match the agent and context. An untimed number or universal class-wide target cannot support a safe response."
  },
  "triazole-pharmacology-140": {
    "choices": [
      "Ordering a concentration with no timing or action plan",
      "Documenting the last dose and planned sample time",
      "Defining the clinical question and an agent-specific response plan",
      "Reviewing formulation, adherence and interacting medicines before interpreting the result"
    ],
    "rationale": "A concentration without an interpretable sampling time or action plan may not guide therapy safely. Documenting dose and sample timing, setting a clinical question, and reviewing delivery and interactions are safeguards. They prevent the stated hazard rather than constitute it."
  },
  "triazole-pharmacology-174": {
    "choices": [
      "Initiation of mold-active therapy with variable PK, a dose or interaction change, failure, or suspected toxicity",
      "A stable patient receiving reliable exposure when no clinical question or management change is identified",
      "An untimed concentration interpreted without a dosing history",
      "Automatic routine testing of every azole solely because it belongs to the class"
    ],
    "rationale": "Variable exposure during appropriately selected mold-active therapy, a relevant dose or interaction change, failure or suspected toxicity can make TDM actionable. Choose the agent-specific sampling strategy and interpret it with dose history and clinical findings. Stable therapy without a question, an uninterpretable sample, or class membership alone is a weaker basis for testing."
  }
};
const sourceReviewedInteractionQuestions = {
  "triazole-pharmacology-113": {
    "choices": [
      "Most systemic triazoles inhibit CYP3A4 to clinically meaningful but agent-specific degrees",
      "Every systemic triazole has identical CYP3A4 inhibition and management instructions",
      "Renal elimination proves that fluconazole cannot inhibit a CYP substrate",
      "Fungal CYP51 selectivity eliminates interactions with human drug-metabolizing enzymes"
    ],
    "rationale": "Clinically meaningful CYP inhibition differs by agent and pathway. Renal clearance of fluconazole does not establish interaction freedom, and selectivity for a fungal target does not eliminate effects on human drug-metabolizing enzymes. Review the exact triazole and each co-medication's current interaction instructions."
  },
  "triazole-pharmacology-114": {
    "choices": [
      "Map every triazole as perpetrator and victim before starting or stopping it",
      "Review only whether the azole raises another drug's concentration",
      "Assume the same interaction plan applies to every triazole and substrate",
      "Keep the co-medication plan unchanged when the azole is discontinued"
    ],
    "rationale": "Evaluate both directions: another medicine can change triazole exposure, and the triazole can change a co-medication's exposure. Review initiation, relevant dose or medication changes, and discontinuation. For example, VFEND labeling requires repeat tacrolimus concentration monitoring and dose reassessment when voriconazole stops."
  },
  "triazole-pharmacology-115": {
    "choices": [
      "Assess tacrolimus, cyclosporine, sirolimus, statins, oncology drugs, benzodiazepines, opioids, and alternatives",
      "Ignore narrow-therapeutic-index medicines if the antifungal dose is standard",
      "Treat every oncology interaction as having the same rule in every disease and dosing phase",
      "Approve all medicines within a named class without checking the exact substrate and product instructions"
    ],
    "rationale": "Review the named medicines and their specific metabolic pathways, therapeutic index and alternatives. VFEND's interaction tables distinguish immunosuppressants, oncology drugs, opioids, benzodiazepines and other substrates, with different avoidance, contraindication or monitoring instructions. An oncology restriction may depend on disease and dosing phase; a class name is not a complete management rule."
  },
  "triazole-pharmacology-116": {
    "choices": [
      "Reviewing interactions only when the azole starts",
      "Checking the interaction plan again when the azole dose changes",
      "Monitoring a previously adjusted substrate after the azole stops",
      "Documenting both antifungal and co-medication exposure risks before initiation"
    ],
    "rationale": "An initiation-only review misses later dose changes and interaction offset. VFEND labeling explicitly calls for monitoring tacrolimus or cyclosporine concentrations after discontinuation and adjusting as necessary. Repeat review at dose changes and discontinuation is a safeguard, not the requested reasoning hazard."
  },
  "triazole-pharmacology-117": {
    "choices": [
      "Rifamycins, selected anticonvulsants, St John's wort, and other strong inducers can substantially reduce mold-active triazole exposure",
      "A standard antifungal dose always overcomes a strong inducer",
      "An inducer that lowers triazole exposure cannot contribute to treatment failure",
      "Every anticonvulsant has the same induction strength and product restriction"
    ],
    "rationale": "Strong induction can substantially reduce exposure to susceptible mold-active triazoles. VFEND labeling distinguishes contraindicated combinations, such as rifampin, carbamazepine and St John's wort, from other product-specific interaction plans. Do not assume a standard dose overcomes induction or that every anticonvulsant has an identical effect."
  },
  "triazole-pharmacology-118": {
    "choices": [
      "Avoid contraindicated combinations or redesign therapy with expert and concentration support",
      "Override a contraindication whenever a drug level can be measured",
      "Make an unmonitored large dose increase to counter the inducer",
      "Use the same dose adjustment for every inducer and triazole"
    ],
    "rationale": "Respect the exact product's contraindications and distinguish them from combinations with specific management instructions. Expert review and appropriate concentration assessment can support an alternative plan, but measuring a level does not waive a contraindication. Dose changes must follow the actual agent, interaction and clinical setting."
  },
  "triazole-pharmacology-119": {
    "choices": [
      "Assess inducer strength, onset, offset, fungal severity, alternatives, and concentration",
      "Consider the inducer name alone without antifungal severity or alternatives",
      "Stop all concentration follow-up immediately when the inducer is discontinued",
      "Assume oral delivery and current exposure are adequate despite a major interacting drug change"
    ],
    "rationale": "Assess the exact interacting medicine and pathway, onset and discontinuation context, fungal disease severity, alternatives and actionable exposure monitoring. A start, dose change or stop can alter the treatment plan. Neither an inducer's name alone nor automatic termination of follow-up establishes adequate antifungal exposure."
  },
  "triazole-pharmacology-120": {
    "choices": [
      "Trying to overcome a contraindicated inducer with an unmonitored dose increase",
      "Choosing an alternative to a contraindicated combination",
      "Checking whether the exact interaction is contraindicated or has a labeled management plan",
      "Reviewing antifungal exposure and response after an interacting medicine changes"
    ],
    "rationale": "Trying to compensate for a contraindicated inducer with an unmonitored dose increase can leave exposure inadequate and ignores the product restriction. Selecting an alternative, checking the actual restriction, and reassessing exposure after medication changes are safeguards against this hazard."
  },
  "triazole-pharmacology-121": {
    "choices": [
      "Several triazoles can prolong QT while isavuconazole shortens it",
      "All triazoles prolong QT to the same extent",
      "QT shortening with isavuconazole removes every electrophysiologic contraindication",
      "A normal pretreatment ECG excludes later risk from electrolyte or medication changes"
    ],
    "rationale": "Several systemic triazoles carry QT-prolongation precautions, while isavuconazole shortens QT and is contraindicated in familial short QT syndrome. The directions are not interchangeable, and QT shortening is not a guarantee of safety. Reassess the patient's physiology, electrolyte abnormalities and combined medication effects."
  },
  "triazole-pharmacology-122": {
    "choices": [
      "Correct potassium, magnesium, and calcium and evaluate the complete electrophysiologic medication burden",
      "Add electrolyte replacement automatically even when laboratory values are normal",
      "Review only the antifungal's QT effect and ignore the other medicines",
      "Use isavuconazole without reviewing familial short QT syndrome because it does not prolong QT"
    ],
    "rationale": "Correct relevant potassium, magnesium and calcium disturbances and review the full medication and cardiac risk context. VFEND and NOXAFIL warnings emphasize electrolyte assessment and correction; this does not mean giving replacement automatically when values are normal. Isavuconazole requires its own short-QT and interaction review."
  },
  "triazole-pharmacology-123": {
    "choices": [
      "Assess QTc, bradycardia, structural disease, congenital syndrome, electrolytes, antiarrhythmics, psychotropics, and antiemetics",
      "Assess only the antifungal ingredient without ECG, electrolytes or co-medications",
      "Ignore bradycardia and structural heart disease when the antifungal dose is usual",
      "Treat all congenital QT syndromes as equivalent when selecting a triazole"
    ],
    "rationale": "Assess QTc and the complete cardiac and medication context, including electrolyte abnormalities, bradycardia, structural disease and congenital syndromes. A usual dose does not remove combined risk. Familial short QT syndrome has a specific isavuconazole contraindication, so congenital syndromes cannot be treated as interchangeable."
  },
  "triazole-pharmacology-124": {
    "choices": [
      "Treating QT risk as a single-drug property",
      "Reviewing QTc together with electrolyte and co-medication changes",
      "Checking the exact triazole's electrophysiologic warnings and contraindications",
      "Considering bradycardia, structural disease and congenital QT syndromes"
    ],
    "rationale": "Treating QT risk as a single-drug property overlooks interacting drugs and patient factors. Reviewing the ECG, electrolytes, cardiac context and exact product instructions helps prevent that error. Those reviews are safeguards rather than the requested reasoning hazard."
  },
  "triazole-pharmacology-125": {
    "choices": [
      "A safe interaction plan includes onset, offset, dose change, monitoring, and a responsible clinician",
      "An interaction plan is complete once an initial dose reduction is written",
      "The same follow-up timing fits every substrate and triazole",
      "Removing the inhibitor guarantees that the previously reduced substrate dose remains adequate"
    ],
    "rationale": "A useful plan follows the interaction through initiation, relevant changes and discontinuation, with monitoring and a named clinician responsible for the response. VFEND's tacrolimus and cyclosporine instructions include post-discontinuation monitoring and dose adjustment as necessary. An initial reduction alone does not complete that plan."
  },
  "triazole-pharmacology-126": {
    "choices": [
      "Document both the azole and victim-drug pathway through initiation, steady state, and discontinuation",
      "Record only the antifungal dose and omit the affected substrate",
      "Leave the substrate's reduced dose permanently fixed without post-discontinuation assessment",
      "Use an automatic return to the prior substrate dose without reviewing current concentrations and physiology"
    ],
    "rationale": "Document both medicines and their exposure pathways, monitoring schedule and reassessment triggers. When inhibition resolves, an earlier substrate reduction may require reassessment; the exact response depends on measured exposure and the clinical context. Neither indefinite fixed reduction nor automatic restoration without assessment is a complete transition plan."
  },
  "triazole-pharmacology-127": {
    "choices": [
      "Assess narrow therapeutic index, level timing, organ function, symptoms, communication, and follow-up",
      "Record a concentration without its sampling time or the responsible reviewer",
      "Ignore organ function and symptoms because a numeric concentration is available",
      "Send the patient between care settings without communicating the dose and monitoring changes"
    ],
    "rationale": "Interpret exposure with sampling context, organ function, symptoms and the therapeutic index, and make responsibility and follow-up explicit. Product-directed concentration monitoring is useful only if someone reviews the result and acts on it. A number without timing or a handoff without the interaction plan does not close the loop."
  },
  "triazole-pharmacology-128": {
    "choices": [
      "Reducing tacrolimus at azole start but not planning azole discontinuation",
      "Planning concentration follow-up after azole discontinuation",
      "Reassessing tacrolimus dosing as voriconazole inhibition resolves",
      "Communicating the interaction plan to the clinician managing tacrolimus"
    ],
    "rationale": "Reducing tacrolimus at voriconazole initiation without planning discontinuation follow-up is the hazard. VFEND labeling directs frequent tacrolimus concentration monitoring when voriconazole stops and dose increases as necessary. Planning monitoring, reassessment and communication prevents this omission."
  },
  "triazole-pharmacology-173": {
    "choices": [
      "Repeat tacrolimus exposure monitoring and dose reassessment as inhibition resolves",
      "Keep the reduced tacrolimus dose indefinitely without concentration follow-up",
      "Restore the previous tacrolimus dose automatically without assessing current exposure",
      "Discontinue tacrolimus permanently solely because voriconazole is stopped"
    ],
    "rationale": "VFEND labeling directs frequent tacrolimus concentration monitoring after voriconazole discontinuation and dose increases as necessary. The next dose depends on exposure and the clinical context, not an automatic permanent reduction or automatic restoration. Stopping voriconazole alone does not justify permanent tacrolimus discontinuation."
  }
};
const sourceReviewedSpectrumIntegrationQuestions = {
  "triazole-pharmacology-017": {
    "choices": [
      "Fluconazole, itraconazole, voriconazole, posaconazole, and isavuconazole do not share one spectrum",
      "A shared azole target guarantees identical activity against every fungus",
      "Every mold-active triazole covers the same organisms and clinical indications",
      "An agent's class name replaces species and susceptibility assessment"
    ],
    "rationale": "The systemic triazoles differ in spectrum and indications despite a shared target class. The book and product labels distinguish yeast, mold and endemic-fungus roles. Select an agent using the actual organism, susceptibility, syndrome and patient context rather than assuming interchangeability."
  },
  "triazole-pharmacology-018": {
    "choices": [
      "Choose the exact agent from organism, site, host, formulation, toxicity, and evidence",
      "Choose from the word azole alone without organism or site evidence",
      "Use in vitro activity as proof of clinical efficacy in every compartment",
      "Ignore formulation and toxicity once an agent has a broad spectrum"
    ],
    "rationale": "Choose the exact agent with organism and syndrome evidence, infected site, host, feasible formulation and toxicity. In vitro susceptibility alone does not establish adequate exposure or clinical evidence at every site. Broad spectrum does not waive administration or safety requirements."
  },
  "triazole-pharmacology-019": {
    "choices": [
      "Assess Candida species, Cryptococcus, Aspergillus, Mucorales, endemic fungi, susceptibility, and compartment",
      "Treat all Candida species as equally susceptible to fluconazole",
      "Assume an Aspergillus-active drug automatically covers every Mucorales infection",
      "Omit the infected compartment because the ingredient has systemic activity"
    ],
    "rationale": "Assess the specific organism group and species, susceptibility and infected compartment. The book distinguishes fluconazole-sensitive yeast contexts from resistant Candida and molds requiring specific agents. A result for one species or mold group does not establish activity for every other fungus or site."
  },
  "triazole-pharmacology-020": {
    "choices": [
      "Selecting a drug from the word azole alone",
      "Checking the organism and susceptibility before choosing an azole",
      "Comparing the agent's clinical indication and site evidence",
      "Reviewing the exact formulation and host safety risks"
    ],
    "rationale": "Selecting solely from the word azole overlooks differences in spectrum, indication, delivery and safety. Checking microbiology, site evidence and the exact product prevents this mistake. Those checks are appropriate safeguards rather than the requested hazard."
  },
  "triazole-pharmacology-021": {
    "choices": [
      "Fluconazole has useful yeast activity but no reliable Aspergillus or Mucorales activity",
      "Fluconazole reliably treats invasive Aspergillus infection because it is an azole",
      "Every yeast isolate is fluconazole susceptible",
      "All agents described as mold active are interchangeable for every mold"
    ],
    "rationale": "Fluconazole has useful activity against selected yeasts but is not a reliable mold-active treatment for Aspergillus or Mucorales disease. The book assigns specific agents to invasive molds, and the aspergillosis guideline describes fluconazole as non-mold-active prophylaxis. Yeast identity alone also does not establish susceptibility."
  },
  "triazole-pharmacology-022": {
    "choices": [
      "Use mold-active triazoles only when their organism and syndrome evidence supports them",
      "Use fluconazole for invasive aspergillosis solely because its oral absorption is reliable",
      "Transfer the indication for one mold-active triazole to all agents in the class",
      "Ignore organism confirmation and clinical syndrome when an agent is called broad spectrum"
    ],
    "rationale": "Use a mold-active triazole only where the exact organism and syndrome evidence supports it. Good oral delivery does not supply missing antifungal activity, and the activity or indication of one agent is not a class-wide authorization. Clinical and mycologic assessment still guide the plan."
  },
  "triazole-pharmacology-023": {
    "choices": [
      "Assess yeast or mold morphology, species, host risk, imaging, culture, galactomannan, and prior prophylaxis",
      "Assign the same triazole from morphology alone without species or host context",
      "Use a galactomannan screening result as a complete diagnosis for every fungal infection",
      "Ignore prior mold-active prophylaxis when interpreting the diagnostic evidence"
    ],
    "rationale": "Combine morphology and species evidence with host risk, imaging, culture and appropriate mycologic tests. Prior prophylaxis can affect both organism probability and diagnostic performance. The aspergillosis guideline notes that serum galactomannan may be negative or low during mold-active exposure; no single screen establishes every fungal diagnosis."
  },
  "triazole-pharmacology-024": {
    "choices": [
      "Using fluconazole for invasive aspergillosis",
      "Selecting an agent with supported Aspergillus activity for the actual syndrome",
      "Seeking organism and site evidence before narrowing treatment",
      "Distinguishing yeast-active prophylaxis from mold-active treatment"
    ],
    "rationale": "Using fluconazole for invasive aspergillosis supplies unreliable Aspergillus activity. Choosing a supported agent and checking organism, site and disease phase are safeguards against this error. They are not the requested reasoning hazard."
  },
  "triazole-pharmacology-025": {
    "choices": [
      "An active triazole must reach the infected compartment and fit the disease phase",
      "In vitro activity proves that every product reaches every infected compartment adequately",
      "An oral prophylaxis regimen automatically supplies treatment exposure",
      "The same azole plan fits induction, consolidation and chronic suppression without syndrome review"
    ],
    "rationale": "An agent must have useful organism activity and clinically appropriate exposure at the infected site and disease phase. The book and guidelines distinguish treatment, prophylaxis and transition roles. Laboratory activity alone or reuse of a prophylaxis plan cannot establish those requirements."
  },
  "triazole-pharmacology-026": {
    "choices": [
      "Separate induction, step-down, consolidation, prophylaxis, and chronic suppression",
      "Use a prophylaxis regimen as treatment without checking the actual indication and exposure",
      "Treat oral step-down as proof that induction requirements never mattered",
      "Use the same duration and delivery plan for every site and disease phase"
    ],
    "rationale": "Separate the purpose and evidence for induction, step-down, consolidation, prophylaxis and chronic suppression. An identical drug name does not make these regimens interchangeable. Reassess the actual syndrome, site, agent and exposure before changing phase."
  },
  "triazole-pharmacology-027": {
    "choices": [
      "Assess CNS, eye, urine, lung, bone, valve, blood, abscess, disease severity, and oral reliability",
      "Choose therapy solely from a blood isolate without assessing the infected site",
      "Assume a susceptible organism guarantees adequate exposure in eye, CNS or urine",
      "Approve oral delivery without assessing swallowing, absorption and illness severity"
    ],
    "rationale": "Assess the involved compartments, severity and delivery requirements. The fluconazole label reports differing fluid and tissue exposure, while guidelines address site-specific treatment and source-control problems. A susceptible isolate or oral dosage form alone does not prove a suitable site-specific plan."
  },
  "triazole-pharmacology-028": {
    "choices": [
      "Using a prophylaxis dose as treatment",
      "Checking the treatment indication and regimen when infection develops during prophylaxis",
      "Distinguishing clinical stability from reliable oral administration",
      "Reviewing the compartment and phase before selecting exposure"
    ],
    "rationale": "Reusing a prophylaxis regimen as treatment without verifying treatment requirements is the hazard. Checking indication, phase, site and delivery readiness helps prevent that mistake. A prophylaxis and treatment regimen may sometimes overlap, but that cannot be assumed from the drug name."
  },
  "triazole-pharmacology-029": {
    "choices": [
      "Oral ketoconazole is not indicated for onychomycosis, cutaneous dermatophyte infection, or Candida infection and is reserved when effective alternatives are unavailable or not tolerated",
      "Oral ketoconazole is a routine first choice for nail fungus when treatment is convenient",
      "Normal pretreatment liver tests remove the oral ketoconazole restriction",
      "Restrictions on oral ketoconazole mean all topical antifungal use has the same systemic risk"
    ],
    "rationale": "The current oral ketoconazole label excludes onychomycosis, cutaneous dermatophyte and Candida infections and reserves its specified systemic indications for patients who fail or cannot tolerate alternatives, with benefits judged to outweigh risks. Serious liver injury and interactions can occur despite a normal baseline. These oral restrictions do not establish identical exposure or risk for topical products."
  },
  "triazole-pharmacology-030": {
    "choices": [
      "Keep topical use separate and require a compelling systemic indication with liver and interaction safeguards",
      "Substitute oral ketoconazole for topical nail treatment without a supported systemic indication",
      "Approve oral therapy from normal baseline liver results without ongoing label-directed surveillance",
      "Ignore contraindicated co-medications because the infection is fungal"
    ],
    "rationale": "Keep topical treatment separate from the restricted systemic use of oral ketoconazole. Verify the actual indication, alternatives, liver status and interaction safeguards. The oral label requires baseline and ongoing hepatic surveillance; neither convenience, a normal baseline nor a fungal diagnosis waives its restrictions."
  },
  "triazole-pharmacology-031": {
    "choices": [
      "Assess indication, alternatives, hepatic risk, QT drugs, adrenal effects, and current label",
      "Assess only fungal morphology and ignore liver disease or alternatives",
      "Review QT risk without checking the full contraindicated medication list",
      "Assume a short course cannot cause serious ketoconazole liver injury"
    ],
    "rationale": "Assess the restricted indication, alternatives, hepatic contraindications, QT interactions, adrenal considerations and the current oral label. The label reports serious liver injury with both short high-dose and longer lower-dose exposure and warns that some affected patients lacked obvious risk factors. A brief course or partial interaction review does not eliminate risk."
  },
  "triazole-pharmacology-032": {
    "choices": [
      "Recommending oral ketoconazole for routine nail fungus",
      "Using the current oral label to exclude routine nail-fungus use",
      "Separating topical treatment from restricted systemic indications",
      "Checking alternatives and liver and interaction safeguards before systemic use"
    ],
    "rationale": "Recommending oral ketoconazole for routine nail fungus contradicts its current label and exposes the patient to serious hepatic and interaction risks. Checking the restricted indication, alternatives and safety plan prevents that error. The safeguards are not the requested hazard."
  },
  "triazole-pharmacology-162": {
    "choices": [
      "Fluconazole does not provide reliable Aspergillus activity",
      "Fluconazole becomes mold active whenever its trough is measurable",
      "Fluconazole reliably treats Aspergillus because all azoles share a target",
      "A susceptible yeast result proves the suspected mold infection is covered"
    ],
    "rationale": "Fluconazole does not provide reliable Aspergillus activity. Adequate delivery or a measured concentration does not add a missing spectrum, and yeast susceptibility does not establish coverage of a suspected mold. Choose an agent supported for the actual organism and syndrome."
  },
  "triazole-pharmacology-145": {
    "choices": [
      "Oral triazole step-down requires stability, source control, susceptible organism, active agent, reliable formulation exposure, and follow-up",
      "Clinical improvement alone establishes reliable oral exposure",
      "A susceptible isolate makes formulation, interactions and follow-up irrelevant",
      "An oral tablet automatically provides adequate exposure at every infected site"
    ],
    "rationale": "A high-risk oral transition combines clinical and microbiologic readiness with the active agent, site and source assessment, reliable delivery and follow-up. In candidemia, IDSA also specifies negative repeat blood cultures for step-down. These syndrome-specific requirements cannot be replaced by improvement, susceptibility or tablet availability alone."
  },
  "triazole-pharmacology-146": {
    "choices": [
      "Verify every transition criterion before stopping parenteral therapy",
      "Stop parenteral therapy as soon as any symptom improves regardless of delivery readiness",
      "Switch without checking the active oral product and susceptibility",
      "Treat formulation, interaction and follow-up review as optional after discharge"
    ],
    "rationale": "Verify the actual syndrome's transition criteria before stopping parenteral therapy. For candidemia, stability, a susceptible isolate and repeat blood-culture clearance are required alongside an appropriate oral plan. Product delivery, interactions and follow-up remain part of that plan."
  },
  "triazole-pharmacology-147": {
    "choices": [
      "Assess cultures, species, MIC, stability, site, source, oral access, interactions, concentration, and adherence",
      "Check a single symptom without culture status, site or source review",
      "Assume any available oral formulation is bioequivalent to the current product",
      "Order a concentration without dose timing or an action plan and treat that as full readiness"
    ],
    "rationale": "Assess microbiology and the specific syndrome, stability, site and source, exact oral product, administration, interactions, adherence and an actionable monitoring plan. Formulations are not universally interchangeable. Concentration assessment is agent- and context-specific and does not by itself prove all transition requirements."
  },
  "triazole-pharmacology-148": {
    "choices": [
      "Equating clinical improvement with oral readiness",
      "Confirming reliable oral administration and absorption before a switch",
      "Applying the syndrome's microbiologic and source-control criteria",
      "Arranging follow-up for interactions and exposure after transition"
    ],
    "rationale": "Clinical improvement alone does not establish oral readiness. Verify the syndrome-specific microbiologic criteria, appropriate oral product, reliable delivery and follow-up. Those checks prevent the requested error rather than constitute it."
  },
  "triazole-pharmacology-149": {
    "choices": [
      "Breakthrough infection can reflect wrong organism, resistance, poor absorption, formulation error, interaction, nonadherence, or inadequate site exposure",
      "Every breakthrough infection proves microbiologic resistance",
      "A normal prior concentration excludes subsequent delivery failure or a different organism",
      "The same diagnosis and regimen can be assumed without checking the current evidence"
    ],
    "rationale": "Breakthrough can arise from exposure and delivery problems, an unsupported organism or site, resistance, or changes in host and disease context. Assess these possibilities alongside prompt clinical and diagnostic review. A prior concentration or prophylaxis label cannot establish the present organism, exposure or mechanism of failure."
  },
  "triazole-pharmacology-150": {
    "choices": [
      "Reopen the complete exposure and diagnostic system before blind escalation",
      "Escalate the same prophylaxis dose blindly while delaying diagnostic review",
      "Assume resistance without reviewing product delivery and exposure",
      "Wait for every audit result before arranging urgent assessment and an appropriate treatment plan"
    ],
    "rationale": "Reopen diagnosis, organism, site, host and product-specific exposure rather than escalating blindly. The aspergillosis guideline calls for prompt diagnostic assessment and individualized treatment reassessment in breakthrough disease. The audit runs alongside necessary clinical management; it is not a reason to delay that management until every result is available."
  },
  "triazole-pharmacology-151": {
    "choices": [
      "Assess prophylaxis drug, dose, formulation, food, pH, level, inducer, organism, site, source, and immune state",
      "Measure a level without reviewing the product, dose history or sample timing",
      "Review food instructions while ignoring diagnostic evidence and immune state",
      "Treat a negative serum screen during mold-active prophylaxis as exclusion of infection"
    ],
    "rationale": "Review the actual prophylaxis agent and product, administration and interactions, appropriately interpreted exposure, microbiology, infected site and host. The conventional posaconazole suspension has delivery vulnerabilities, and mold-active prophylaxis can affect diagnostic tests. Neither an untimed level nor a negative serum screen replaces clinical and mycologic assessment."
  },
  "triazole-pharmacology-152": {
    "choices": [
      "Calling every breakthrough infection resistance",
      "Checking formulation, adherence and interactions as possible exposure failures",
      "Seeking organism evidence and susceptibility where appropriate",
      "Considering a different diagnosis or infected site when prophylaxis fails"
    ],
    "rationale": "Calling every breakthrough infection resistance skips other possible mechanisms. Delivery, adherence, interaction and site problems, a different organism, and host changes require review alongside diagnostics and treatment reassessment. These reviews prevent the hazard rather than constitute it."
  },
  "triazole-pharmacology-153": {
    "choices": [
      "Triazole risk changes with duration, organ function, inflammation, interacting drugs, and cumulative tissue effects",
      "Normal pretreatment laboratory values exclude later toxicity",
      "Every triazole has the same duration-dependent toxicity profile",
      "A stable initial dose makes medication and physiologic changes irrelevant"
    ],
    "rationale": "Risk evolves with agent-specific exposure, duration, organ function, interacting medicines and adverse-effect patterns. The reviewed voriconazole inflammation study is observational and does not establish one inflammation-based dosing rule for all triazoles. Baseline results and an unchanged prescribed dose cannot replace ongoing clinical reassessment."
  },
  "triazole-pharmacology-154": {
    "choices": [
      "Schedule ongoing medication reconciliation, laboratory review, symptom screening, and need reassessment",
      "Use the initial medication list permanently without reconciliation",
      "Stop symptom and laboratory review once a patient tolerates the first week",
      "Continue treatment indefinitely without reassessing indication or alternatives"
    ],
    "rationale": "Repeat relevant medication reconciliation, laboratory and symptom review, and the continuing need for therapy. Product labels describe on-treatment hepatic monitoring and drug-specific longer-term risks. Monitoring should fit the agent and clinical context rather than stop after early tolerance or imply indefinite treatment."
  },
  "triazole-pharmacology-155": {
    "choices": [
      "Assess liver, kidney, QT, skin, vision, bone, heart failure, blood pressure, electrolytes, concentration, and duration",
      "Apply every listed laboratory and specialty assessment at one fixed interval to every triazole patient",
      "Assess only a drug level while ignoring liver, cardiac or symptom findings",
      "Ignore new skin, vision, bone, heart-failure or blood-pressure findings because treatment began months ago"
    ],
    "rationale": "Assess relevant organ, electrolyte, concentration and symptom risks according to the actual drug, formulation, duration and patient. Voriconazole, itraconazole and posaconazole have distinct longer-term safety concerns. This list is a clinical review framework, not a universal mandatory panel or fixed schedule for every agent."
  },
  "triazole-pharmacology-156": {
    "choices": [
      "Using the baseline plan unchanged for months",
      "Revising the monitoring plan after a medication or organ-function change",
      "Reviewing new symptoms during prolonged treatment",
      "Reassessing continuing treatment need and agent-specific risks over time"
    ],
    "rationale": "Using the initial plan unchanged for months overlooks changes in exposure, physiology, medicines and duration-dependent risks. Ongoing symptom review, monitoring adjustments and continuing-need assessment help prevent that error. They are safeguards rather than the requested reasoning hazard."
  },
  "triazole-pharmacology-157": {
    "choices": [
      "General triazole principles do not replace patient-specific infectious diseases, pharmacy, microbiology, and current-guideline decisions",
      "Every educational example is a standing medication order",
      "The class summary replaces current product restrictions and susceptibility data",
      "Educational content removes the need for patient-specific team decisions"
    ],
    "rationale": "The module supports structured reasoning, while actual care requires current product and guideline information, microbiology, local context and patient-specific clinical decisions. A class summary or worked example cannot serve as a standing order or override a product restriction."
  },
  "triazole-pharmacology-158": {
    "choices": [
      "Use the module to structure verification and then apply current individualized evidence",
      "Copy the example regimen directly into an order without patient or product verification",
      "Ignore a newer label because the educational page was previously reviewed",
      "Use the module alone when organism, site or clinical status changes"
    ],
    "rationale": "Use the module to organize verification, then apply current evidence to the actual patient and infection. Recheck agent, product, susceptibility, site, physiology and local context when they change. A prior educational review does not make the page a substitute for individualized clinical assessment."
  },
  "triazole-pharmacology-159": {
    "choices": [
      "Assess indication, host, organism, site, susceptibility, current label, guideline date, local ecology, and ownership",
      "Check the drug name without indication, host, organism or site",
      "Treat a guideline date as proof that all local susceptibility patterns are identical",
      "Omit who will own monitoring and response after the treatment decision"
    ],
    "rationale": "Assess indication, host, organism, site and susceptibility together with current product and guideline information, relevant local data and responsibility for follow-up. A date alone cannot establish local microbiology, and a drug name alone does not define a complete plan."
  },
  "triazole-pharmacology-160": {
    "choices": [
      "Turning a study dose into an unsupervised patient order",
      "Using a worked example to identify questions that still need patient-specific verification",
      "Checking current labels and local microbiology before a clinical decision",
      "Seeking appropriate clinical-team input for a high-risk antifungal plan"
    ],
    "rationale": "Turning a study example into an unsupervised patient order ignores the educational boundary. Using it to identify verification needs, checking current evidence and seeking clinical-team input are safeguards. They prevent the requested hazard rather than constitute it."
  },
  "triazole-pharmacology-175": {
    "choices": [
      "Verify formulation, dose, food, acid suppression, adherence, concentration, organism, resistance, site, and immune status",
      "Assume resistance without checking exposure or organism evidence",
      "Continue the prophylaxis regimen unchanged and omit diagnostic review",
      "Delay necessary clinical management until every concentration and susceptibility result is available"
    ],
    "rationale": "Audit the actual formulation, dose history, administration, acid suppression, adherence and interpretable exposure together with organism, susceptibility, site and immune status. Conventional posaconazole suspension has product-specific meal and delivery requirements. The aspergillosis guideline calls for prompt diagnostic assessment and individualized treatment reassessment in breakthrough disease: this audit runs alongside necessary clinical management. A screening result alone, a composite trial endpoint, or oral Candida resistance observations cannot establish the organism or mold-resistance mechanism in this patient.",
    "question": "Alongside prompt clinical assessment and appropriate treatment review for mold infection during posaconazole suspension prophylaxis, what should be audited?"
  },
  "triazole-pharmacology-176": {
    "choices": [
      "Use it to structure questions, then verify current labels, guidelines, local data, and patient-specific decisions with the clinical team",
      "Use each study example as an automatic standing order",
      "Replace current product restrictions with the general class summary",
      "Avoid patient-specific microbiology and clinical-team review"
    ],
    "rationale": "Educational synthesis supports structured questions and verification. Actual antifungal care still requires current labels, guidelines, local microbiology and patient-specific decisions with the clinical team. A worked example or general class statement cannot replace that process."
  }
};
const sourceReviewedSARQuestions = {
  "triazole-pharmacology-001": {
    "choices": [
      "An azole ring nitrogen coordinates the heme iron of fungal lanosterol 14 alpha demethylase",
      "The azole ring directly binds membrane ergosterol to form pores",
      "The azole ring inhibits beta-1,3-D-glucan synthase as its primary target",
      "The azole ring acts only by inhibiting squalene epoxidase"
    ],
    "rationale": "The binding feature is nitrogen coordination to heme in CYP51, the sterol-demethylation target. The deposited posaconazole-Candida CYP51 structure provides one direct example. This differs from ergosterol-binding polyenes and glucan-synthesis inhibitors; a shared target does not establish identical clinical activity."
  },
  "triazole-pharmacology-002": {
    "choices": [
      "Use agent-specific structure and enzyme-binding evidence rather than the ring name alone to assess binding and selectivity",
      "Rank clinical safety solely by the number of ring nitrogens",
      "Assume the shared azole ring makes all agents equally selective for fungal enzymes",
      "Infer the patient dose directly from a molecular binding diagram"
    ],
    "rationale": "Structure and binding evidence must be interpreted for the actual compound and experimental system. A triazole ring alone does not establish a uniform fungal-to-human selectivity ratio, absence of interactions or a clinical dose."
  },
  "triazole-pharmacology-003": {
    "question": "Which assessment is appropriate when evaluating azole pharmacophore evidence?",
    "choices": [
      "Assess the actual ring and scaffold, heme coordination, fungal enzyme-binding evidence and separately measured host CYP effects",
      "Count ring nitrogens and assume the result proves clinical interaction freedom",
      "Use a fungal CYP51 structure as proof of human CYP3A4 safety",
      "Treat an enzyme-binding measurement as a direct measure of clinical treatment success"
    ],
    "rationale": "Molecular structure and fungal target binding address a different question from inhibition or metabolism by human enzymes. Experimental affinity and a structural model do not, by themselves, establish a patient interaction plan or clinical outcome."
  },
  "triazole-pharmacology-004": {
    "choices": [
      "Calling the azole ring an ergosterol-binding pore former",
      "Distinguishing fungal CYP51 binding from human CYP interaction evidence",
      "Checking the actual compound before drawing a selectivity conclusion",
      "Keeping a molecular binding observation separate from clinical efficacy"
    ],
    "rationale": "Calling the azole ring an ergosterol-binding pore former confuses azole synthesis inhibition with polyene action. The other choices are appropriate safeguards for interpreting pharmacophore evidence."
  },
  "triazole-pharmacology-005": {
    "choices": [
      "CYP51 inhibition depletes ergosterol and accumulates abnormal sterol intermediates",
      "CYP51 inhibition increases normal ergosterol while removing methylated sterol precursors",
      "Azoles extract membrane ergosterol without inhibiting sterol synthesis",
      "The primary azole pathway effect is beta-glucan depletion in the fungal cell wall"
    ],
    "rationale": "Current posaconazole labeling describes reduced ergosterol and accumulated methylated precursors after inhibition of lanosterol 14 alpha demethylase. This alters the fungal membrane; it is not direct ergosterol extraction or primary glucan-synthesis inhibition."
  },
  "triazole-pharmacology-006": {
    "choices": [
      "Use the pathway to predict membrane dysfunction and target-based resistance",
      "Use the shared sterol target to declare reliable coverage of every mold",
      "Treat every clinical failure as proof of a CYP51 mutation",
      "Infer a safe dose escalation solely from stronger enzyme affinity"
    ],
    "rationale": "The sterol pathway explains the membrane effect and helps organize target-related resistance hypotheses. It does not establish every organism's susceptibility, prove the cause of failure or provide a patient dose algorithm."
  },
  "triazole-pharmacology-007": {
    "choices": [
      "Assess CYP51 and ergosterol-pathway effects, relevant target changes such as Candida ERG11 alteration, efflux and the observed susceptibility phenotype",
      "Assess only beta-glucan synthase because azoles primarily inhibit fungal cell-wall synthesis",
      "Assume unchanged target sequence excludes resistance despite target overexpression or efflux",
      "Use the shared CYP51 target as proof that all isolates have the same azole susceptibility"
    ],
    "rationale": "Fluconazole labeling describes Candida ERG11 target alteration or overexpression and MDR/CDR-mediated efflux. The organism, drug and observed phenotype remain essential; a single unchanged sequence or shared target does not settle susceptibility."
  },
  "triazole-pharmacology-008": {
    "choices": [
      "Describing azoles as fungal cell-wall inhibitors",
      "Distinguishing sterol synthesis inhibition from glucan synthesis inhibition",
      "Checking the target and observed phenotype for the actual organism",
      "Recognizing that reduced target access can contribute to resistance"
    ],
    "rationale": "Azoles disrupt membrane sterol synthesis rather than primarily inhibiting the fungal cell wall. The other choices correctly preserve the mechanism and the context needed for resistance interpretation."
  },
  "triazole-pharmacology-009": {
    "choices": [
      "Fungal-to-human enzyme selectivity varies by agent; a triazole ring does not guarantee absence of human CYP interactions",
      "Every triazole has the same fungal-to-human CYP selectivity because each has three ring nitrogens",
      "Adding a ring nitrogen eliminates clinically important human CYP inhibition",
      "Selective fungal CYP51 inhibition proves that the drug cannot be a substrate of human CYP enzymes"
    ],
    "rationale": "Selectivity is specific to the compound, enzyme and experiment. The fluconazole label describes comparatively less sensitive mammalian demethylation while also documenting human CYP inhibition. Neither ring count nor fungal target selectivity proves interaction freedom or determines metabolism."
  },
  "triazole-pharmacology-010": {
    "choices": [
      "Map molecular selectivity separately from clinical interaction burden",
      "Replace medication reconciliation with the assumption that triazoles are fungus-specific",
      "Treat selectivity for fungal CYP51 as proof of no effect on human CYP3A4",
      "Use the number of ring nitrogens as the complete interaction assessment"
    ],
    "rationale": "A fungal target-selectivity observation and the clinical interaction burden answer different questions. Current product-specific CYP inhibition, metabolism, interacting medicines and exposure must still be assessed."
  },
  "triazole-pharmacology-011": {
    "question": "Which assessment addresses host interaction risk when considering triazole selectivity?",
    "choices": [
      "Assess the actual agent's CYP inhibition and metabolism, relevant transporters, co-medication pathways and exposure",
      "Measure fungal CYP51 affinity and assume human CYP effects are excluded",
      "Assess ring nitrogen count alone instead of the actual product interaction data",
      "Assume every triazole has an identical CYP and transporter interaction profile"
    ],
    "rationale": "The actual agent and co-medication pathways determine the interaction assessment. CYP3A4, CYP2C9, CYP2C19 and transporters may be relevant in different combinations; they are not one identical interaction profile for every triazole."
  },
  "triazole-pharmacology-012": {
    "choices": [
      "Assuming triazoles are free of human CYP effects",
      "Checking the exact agent's human CYP interaction information",
      "Separating fungal enzyme affinity from clinical interaction risk",
      "Reviewing interacting medicines despite fungal target selectivity"
    ],
    "rationale": "Assuming triazoles are free of human CYP effects is the hazard. The other choices correctly distinguish molecular target evidence from the actual product's inhibition, metabolism and clinical interactions."
  },
  "triazole-pharmacology-013": {
    "choices": [
      "Target alteration or overexpression and reduced target access, including efflux, can reduce azole susceptibility",
      "A shared CYP51 target makes acquired azole resistance impossible",
      "Efflux necessarily increases the intracellular drug concentration at the target",
      "Unchanged target quantity proves that target alteration or reduced access cannot matter"
    ],
    "rationale": "Fluconazole labeling describes changes in target quality or quantity and reduced access, including MDR/CDR efflux. Voriconazole labeling also describes target changes and reduced access. These are possible mechanisms, not proof of the mechanism in every clinical isolate."
  },
  "triazole-pharmacology-014": {
    "choices": [
      "Combine species, susceptibility interpretation, prior exposure and delivery review alongside necessary diagnostic and treatment reassessment",
      "Declare resistance from breakthrough symptoms without reviewing organism or delivery",
      "Assume an apparently therapeutic concentration excludes every resistance mechanism",
      "Delay necessary treatment until every delivery and susceptibility audit result is available"
    ],
    "rationale": "Clinical failure may reflect resistance, inadequate exposure, an inappropriate organism or site match, or an uncontrolled source. Evaluate these together while providing prompt clinical management when needed; an audit is not a reason to delay necessary care."
  },
  "triazole-pharmacology-015": {
    "choices": [
      "Assess species, susceptibility method, breakpoint, prior azole, concentration, site, source, and response",
      "Use prior azole exposure as definitive proof that the current isolate is resistant",
      "Interpret every reported concentration without sampling or administration context",
      "Assume the same MIC category and outcome apply to every organism and azole"
    ],
    "rationale": "Species, validated susceptibility interpretation, prior drug exposure, actual delivery, infected site, source and response inform the assessment. None of a prior exposure, isolated concentration or unqualified MIC value alone establishes the mechanism or outcome."
  },
  "triazole-pharmacology-016": {
    "choices": [
      "Escalating a dose without checking absorption or interactions",
      "Checking the exact formulation and actual administration before a dose change",
      "Reviewing interacting medicines and interpreting a concentration in context",
      "Assessing organism, site and source alongside prompt treatment review"
    ],
    "rationale": "Escalating a dose without checking absorption or interactions risks toxicity without correcting the reason for failure. The other choices are appropriate safeguards; they do not require delaying necessary clinical management."
  },
  "triazole-pharmacology-161": {
    "rationale": "Systemic azoles inhibit fungal lanosterol 14 alpha demethylase, CYP51, disrupting ergosterol synthesis. The deposited posaconazole-Candida CYP51 structure supports heme coordination for that compound. Beta-glucan synthase is the echinocandin target, squalene epoxidase is a different sterol-pathway target, and dihydrofolate reductase is not the azole target."
  }
};
export const triazoleAntifungalPharmacologyQuestionBank = priorTdmReviewQuestionBank.map((question) => sourceReviewedItraconazoleTdmQuestions[question.id] ? { ...question, ...sourceReviewedItraconazoleTdmQuestions[question.id] } : question).map((question) => sourceReviewedFluconazoleQuestions[question.id] ? { ...question, ...sourceReviewedFluconazoleQuestions[question.id] } : question).map((question) => sourceReviewedVoriconazoleQuestions[question.id] ? { ...question, ...sourceReviewedVoriconazoleQuestions[question.id] } : question).map((question) => sourceReviewedIsavuconazoleQuestions[question.id] ? { ...question, ...sourceReviewedIsavuconazoleQuestions[question.id] } : question).map((question) => sourceReviewedPosaconazoleQuestions[question.id] ? { ...question, ...sourceReviewedPosaconazoleQuestions[question.id] } : question).map((question) => sourceReviewedReproductiveQuestions[question.id] ? { ...question, ...sourceReviewedReproductiveQuestions[question.id] } : question).map((question) => sourceReviewedMonitoringQuestions[question.id] ? { ...question, ...sourceReviewedMonitoringQuestions[question.id] } : question).map((question) => sourceReviewedInteractionQuestions[question.id] ? { ...question, ...sourceReviewedInteractionQuestions[question.id] } : question).map((question) => sourceReviewedSpectrumIntegrationQuestions[question.id] ? { ...question, ...sourceReviewedSpectrumIntegrationQuestions[question.id] } : question).map((question) => sourceReviewedSARQuestions[question.id] ? { ...question, ...sourceReviewedSARQuestions[question.id] } : question);
if(triazoleAntifungalPharmacologyQuestionBank.length<100)throw new Error(`Triazole pharmacology bank must contain at least 100 questions, found ${triazoleAntifungalPharmacologyQuestionBank.length}.`);
