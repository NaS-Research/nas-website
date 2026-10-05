const c=(name,lesson,principle,action,assessment,hazard,why)=>({name,lesson,principle,action,assessment,hazard,why});
const concepts=[
  c("uncomplicated and complicated infection","definitions-triage","Complicated intra-abdominal infection extends beyond the hollow viscus into the peritoneum or another sterile abdominal space with peritonitis or abscess","Classify anatomy before using severity, acquisition, and host risk to guide management","Assess perforation, peritonitis, abscess, organ dysfunction, obstruction, ischemia, and source","Using complicated as a synonym for severe","Anatomic extension and physiologic severity are separate dimensions"),
  c("primary secondary and tertiary peritonitis","definitions-triage","Primary peritonitis lacks a surgically correctable intra-abdominal source, secondary follows disruption, and tertiary persists or recurs after treatment","Distinguish the syndrome before choosing paracentesis, imaging, drainage, surgery, and spectrum","Assess cirrhosis, ascites, perforation, surgery, cultures, abscess, response, and immune state","Treating every peritonitis syndrome with the same source-control plan","The presence and nature of a correctable source determine the pathway"),
  c("severity and failure risk","definitions-triage","Shock, organ dysfunction, delayed source control, advanced age, comorbidity, extensive infection, resistant organisms, and healthcare acquisition raise failure risk","Stabilize sepsis, quantify risk, and accelerate imaging, source control, and active therapy","Assess hemodynamics, lactate, organs, APACHE II or WSES score, age, comorbidity, acquisition, and delay","Letting a score replace bedside reassessment","Risk tools organize prognosis but do not make source-control decisions alone"),
  c("abdominal sepsis resuscitation","definitions-triage","Antibiotics, resuscitation, imaging, and source control must proceed in parallel when cIAI causes sepsis or shock","Obtain actionable cultures rapidly, give active therapy, restore perfusion, and activate procedural teams","Assess airway, perfusion, lactate, urine output, organ dysfunction, source, timing, and goals","Waiting for complete imaging before stabilizing shock","Delay in active treatment or source control worsens outcomes"),

  c("CT for suspected abscess","diagnostic-imaging","Contrast-enhanced CT is the preferred initial study for most nonpregnant adults with suspected intra-abdominal abscess","Use CT to localize collections, define anatomy, and plan a safe drainage or operative path","Assess kidney function, contrast risk, pregnancy, prior anatomy, postoperative timing, Crohn disease, and procedural access","Using a negative plain radiograph to exclude abscess","Cross-sectional imaging is required to define deep collections"),
  c("ultrasound for biliary disease","diagnostic-imaging","Ultrasound is the usual first imaging study for suspected acute cholecystitis or biliary obstruction","Start with ultrasound and escalate to HIDA, MRCP, CT, or endoscopic evaluation according to the unanswered question","Assess stones, wall thickening, pericholecystic fluid, duct dilation, sonographic Murphy sign, liver tests, and sepsis","Using CT as the only first-line test for every biliary syndrome","Ultrasound directly evaluates stones and biliary anatomy without radiation"),
  c("pregnancy imaging","diagnostic-imaging","Ultrasound and MRI avoid ionizing radiation and are preferred when diagnostically appropriate in pregnancy","Select imaging with obstetric and radiology input while not delaying diagnosis of a dangerous source","Assess gestational age, syndrome, ultrasound yield, MRI access, contrast, maternal stability, and procedural need","Avoiding all imaging because the patient is pregnant","Maternal source control and diagnosis protect both patient and fetus"),
  c("repeat imaging for failure","diagnostic-imaging","Persistent or recurrent signs after an adequate initial plan require imaging for an undrained or new source","Use CT or ultrasound to reassess anatomy rather than simply extending or broadening antibiotics","Assess fever, pain, ileus, leukocytosis, organ function, drain output, cultures, procedure, and timing","Calling ongoing inflammation proof that the course is too short","Failure after cIAI treatment often reflects source-control failure"),

  c("intra-abdominal cultures","microbiology","IDSA suggests obtaining intra-abdominal cultures during source-control procedures for complicated infection","Send adequate fluid or tissue for aerobic and anaerobic culture before contamination or prolonged exposure","Assess source, acquisition, prior drugs, specimen quality, volume, transport, Gram stain, and susceptibility","Using superficial drain swabs as equivalent to fresh source specimens","High-quality source cultures enable safe narrowing and resistance detection"),
  c("blood culture selection","microbiology","Blood cultures are most useful with hypotension, tachypnea, delirium, other organ dysfunction, or resistance concern","Collect blood cultures before therapy when they can affect management without delaying urgent treatment","Assess sepsis, immunocompromise, healthcare exposure, prior resistant organisms, cholangitis, and timing","Ordering routine blood cultures for every mild localized infection","Low-yield testing creates contaminants without changing care"),
  c("community and healthcare acquisition","microbiology","Healthcare acquisition and prior colonization or antibiotics increase the probability of resistant gram-negative organisms, enterococci, and Candida","Use local ecology and patient history to decide whether broader empiric coverage is justified","Assess recent hospitalization, antibiotics, procedures, devices, prior cultures, colonization, transplant, and immune state","Using a mnemonic as a substitute for local susceptibility data","Resistance probability is local and patient-specific"),
  c("culture de-escalation","microbiology","Source cultures should narrow therapy when the patient is improving and all relevant pathogens remain covered","Remove unnecessary anti-pseudomonal, enterococcal, MRSA, and antifungal agents as data clarify the syndrome","Assess organism significance, susceptibility, source control, response, acquisition, and remaining gaps","Continuing every empiric drug because the original infection was severe","Severity does not justify avoidable spectrum after reliable data arrive"),

  c("source control principle","source-control","Source control removes infected fluid and tissue, prevents ongoing contamination, and restores anatomy when possible","Use the least invasive definitive intervention that can resolve contamination and organ dysfunction","Assess perforation, ischemia, obstruction, abscess, necrosis, leak, device, drainage path, and operative risk","Treating antibiotics as a substitute for repair of ongoing contamination","Antibiotics cannot sterilize a continually leaking or necrotic source"),
  c("source control timing","source-control","Sepsis, shock, perforation, ischemia, uncontrolled leak, and acute cholangitis can require urgent source control","Activate surgery, interventional radiology, endoscopy, and critical care early while resuscitation and antibiotics proceed","Assess physiology, anatomy, feasibility, delay, transfer, anticoagulation, and goals","Waiting for antibiotic response before decompressing an obstructed infected biliary tree","Delayed source control can sustain shock despite active drugs"),
  c("percutaneous drainage","source-control","Image-guided percutaneous drainage can control accessible abscesses while preserving diagnostic material","Plan catheter route, collect fresh cultures, monitor output, and define removal and failure criteria","Assess size, loculation, path, fistula, viscosity, nearby organs, coagulopathy, and operative need","Placing a drain without a plan for output failure or residual cavity","Drain performance and anatomy must be followed until resolution"),
  c("source control adequacy","source-control","Adequate source control means contamination has stopped and infected material is removed or drained sufficiently for host recovery","Reassess adequacy whenever fever, ileus, pain, leukocytosis, organ dysfunction, or drain abnormalities persist","Assess operative findings, residual collection, leak, necrosis, obstruction, drain position, output, and imaging","Defining adequacy solely by completion of a procedure","A technically completed procedure can leave an active source"),

  c("community acquired spectrum","empiric-spectrum","Community-acquired cIAI usually requires enteric gram-negative and anaerobic coverage, with streptococcal activity","Use a focused regimen such as ceftriaxone plus metronidazole or an appropriate single agent when local susceptibility fits","Assess source level, perforation, severity, allergy, kidney and liver function, QT, prior cultures, and local resistance","Adding routine MRSA, enterococcal, and antifungal coverage to low-risk community disease","Unnecessary spectrum adds toxicity and ecological harm without expected benefit"),
  c("high risk spectrum","empiric-spectrum","High-risk or healthcare-associated cIAI may require anti-pseudomonal gram-negative and anaerobic activity with resistance-directed additions","Use piperacillin-tazobactam, cefepime plus metronidazole, or a carbapenem according to ecology and patient history","Assess shock, prior ESBL or carbapenem resistance, recent antibiotics, source, organ function, allergy, and local antibiogram","Using ertapenem when Pseudomonas coverage is required","Regimen spectrum must match the actual resistance and pathogen threats"),
  c("enterococcal coverage","empiric-spectrum","Routine empiric enterococcal coverage is unnecessary in many community-acquired cases but can matter in healthcare-associated, postoperative, immunocompromised, or prior cephalosporin-exposed disease","Add active enterococcal therapy only when risk, source culture, or clinical context justifies it","Assess acquisition, postoperative status, transplant, immune suppression, prior cephalosporins, valve disease, and cultures","Treating every Enterococcus isolate as either contamination or a mandatory target without context","Host, acquisition, specimen, and response determine clinical significance"),
  c("Candida coverage","empiric-spectrum","Empiric antifungal therapy is reserved for selected critically ill patients with strong intra-abdominal Candida risk or supportive source evidence","Use source cultures and risk factors to choose an echinocandin or other appropriate agent and stop when evidence does not support candidiasis","Assess upper GI leak, recurrent perforation, recent surgery, anastomotic leak, necrotizing pancreatitis, TPN, colonization, shock, and cultures","Adding fluconazole routinely to every bowel perforation","Most cIAI does not benefit from indiscriminate antifungal exposure"),

  c("ceftriaxone metronidazole","regimen-selection","Ceftriaxone plus metronidazole combines common community enteric gram-negative and anaerobic coverage","Use ceftriaxone 2 g daily plus metronidazole 500 mg every 8 to 12 hours when syndrome and local susceptibility fit","Assess biliary source, ESBL risk, allergy, liver function, interactions, source control, and cultures","Assuming ceftriaxone alone covers Bacteroides reliably","The added nitroimidazole supplies dependable anaerobic activity"),
  c("piperacillin tazobactam","regimen-selection","Piperacillin-tazobactam supplies broad gram-negative, anaerobic, streptococcal, and E. faecalis activity but is not reliable for every resistant phenotype","Use optimized dosing when broad empiric coverage is justified and narrow with cultures","Assess kidney function, sodium load, allergy, ESBL context, MIC, infusion strategy, and local susceptibility","Using piperacillin-tazobactam as a universal answer for known difficult ESBL or carbapenemase infection","Resistance mechanism and site exposure determine reliability"),
  c("cefepime metronidazole","regimen-selection","Cefepime requires metronidazole for reliable anaerobic coverage in cIAI","Pair cefepime with metronidazole and adjust cefepime for kidney function and neurotoxicity risk","Assess Pseudomonas risk, ESBL probability, kidney function, mental status, seizures, allergy, and cultures","Using cefepime monotherapy for polymicrobial colonic perforation","Cefepime lacks dependable Bacteroides coverage"),
  c("carbapenem stewardship","regimen-selection","Meropenem supports severe ESBL-risk polymicrobial infection, while ertapenem omits Pseudomonas, Acinetobacter, and enterococcal activity","Reserve the carbapenem whose spectrum matches documented or credible resistance risk and de-escalate promptly","Assess prior ESBL, Pseudomonas, seizure risk, kidney function, acquisition, cultures, and local ecology","Choosing meropenem solely because the patient is hospitalized","Carbapenem overuse accelerates resistance and may exceed the needed spectrum"),

  c("four day duration","duration-response","After adequate source control, no more than four days of antimicrobial therapy is recommended for most cIAI","Set the stop date from source control and reassess only when anatomy, organism, or host creates a defined exception","Assess source-control date and adequacy, clinical trajectory, bacteremia, immune state, residual source, and extra-abdominal infection","Extending to 7 to 14 days solely because the initial infection was severe","Short fixed therapy performs similarly after adequate source control and reduces antibiotic harm"),
  c("duration without adequate control","duration-response","Persistent contamination or an undrainable focus requires individualized therapy linked to a renewed source-control plan","Continue active treatment while urgently reassessing procedural options and response","Assess ongoing leak, necrosis, obstruction, drainability, cultures, organ function, and goals","Calling prolonged antibiotics definitive source control","Duration cannot compensate for ongoing anatomic infection"),
  c("failure after four to seven days","duration-response","Persistent or recurrent evidence after 4 to 7 days requires diagnostic investigation for residual source, new infection, wrong exposure, or noninfectious disease","Obtain repeat CT or ultrasound and revisit cultures, regimen exposure, and source control","Assess pain, ileus, fever, WBC, organ function, drain output, imaging, cultures, line infection, and drug fever","Automatically broadening or extending therapy without imaging","Treatment failure is a diagnostic problem before it is a duration problem"),
  c("oral step down","duration-response","Oral step-down can complete the same short course when absorption, susceptibility, source control, and clinical stability are reliable","Choose an active oral regimen from culture and spectrum rather than treating route as a marker of potency","Assess intake, ileus, absorption, interactions, susceptibility, adherence, QT, allergy, and remaining days","Restarting a full duration when changing from IV to oral","Route change does not reset the treatment clock"),

  c("acute cholecystitis","biliary-infections","Acute cholecystitis is primarily an obstructive inflammatory syndrome whose definitive management is early cholecystectomy when feasible","Use ultrasound, grade severity, give antibiotics when infection or complicated disease warrants them, and arrange definitive gallbladder management","Assess stones, wall, duct, fever, WBC, liver tests, organ dysfunction, perforation, gangrene, and operative risk","Treating antibiotics alone as routine definitive management","The obstructed gallbladder remains the disease source"),
  c("acute cholangitis","biliary-infections","Acute cholangitis combines biliary obstruction with infection and requires prompt antibiotics plus biliary decompression","Stabilize, culture when useful, begin enteric coverage, and arrange urgent ERCP or another drainage route according to severity","Assess fever, jaundice, pain, hypotension, confusion, bilirubin, ducts, stone or stricture, organ dysfunction, and access","Waiting for antibiotics to sterilize an obstructed infected duct","Decompression is the central source-control intervention"),
  c("biliary antimicrobial duration","biliary-infections","Biliary antibiotic duration should follow source control, bacteremia, organism, and clinical response rather than a fixed long course","Use a short post-control course and extend only for a defined complication such as persistent bacteremia or uncontrolled source","Assess drainage timing, cultures, blood clearance, cholecystectomy, obstruction, abscess, and response","Counting days from admission while ignoring drainage","The effective treatment clock depends on control of obstruction and infection"),
  c("biliary culture and narrowing","biliary-infections","Bile and blood cultures can reveal resistant enteric organisms and enterococci in severe or healthcare-associated cholangitis","Collect during decompression when feasible and narrow therapy to meaningful pathogens","Assess acquisition, instrumentation, stent, prior antibiotics, transplant, culture source, and susceptibility","Keeping maximal empiric spectrum after drainage and reliable cultures","Biliary source control and culture data support stewardship"),

  c("SBP diagnosis","spontaneous-bacterial-peritonitis","SBP is infected ascites without a surgically treatable source and is diagnosed by ascitic PMN count at least 250 cells per cubic millimeter","Perform prompt diagnostic paracentesis before antibiotics in hospitalized or symptomatic cirrhosis with ascites","Assess PMN count, culture, symptoms, kidney function, encephalopathy, GI bleeding, shock, and secondary peritonitis clues","Waiting for a positive ascitic culture before treating neutrocytic ascites","Cultures can be negative even when the PMN threshold identifies SBP"),
  c("SBP culture technique","spontaneous-bacterial-peritonitis","Bedside inoculation of ascitic fluid into aerobic and anaerobic blood culture bottles improves organism recovery","Send cell count and differential plus properly inoculated cultures from the initial paracentesis","Assess volume, bedside inoculation, prior antibiotics, monomicrobial or polymicrobial growth, and blood cultures","Sending ascites only in a sterile cup after a long delay","Organism recovery depends on immediate high-yield handling"),
  c("SBP treatment and albumin","spontaneous-bacterial-peritonitis","Community SBP commonly uses a third-generation cephalosporin plus albumin to reduce kidney failure and mortality in appropriate patients","Use cefotaxime or ceftriaxone and albumin 1.5 g/kg on day 1 plus 1 g/kg on day 3 when indicated","Assess acquisition, prior prophylaxis, resistance, creatinine, BUN, bilirubin, volume, allergy, and response","Using albumin as a replacement for active antibiotics","Albumin supports effective arterial volume while antimicrobials treat infection"),
  c("secondary peritonitis clues","spontaneous-bacterial-peritonitis","Polymicrobial culture, very high PMNs, poor response, high protein and LDH, low glucose, free air, or focal abdominal findings suggest secondary peritonitis","Obtain urgent imaging and surgical evaluation rather than repeatedly treating as SBP","Assess pain, rigidity, imaging, PMN trend, protein, glucose, LDH, organisms, and response","Calling every infected ascites episode spontaneous","A perforated or ischemic source requires source control"),
  c("SBP prophylaxis","spontaneous-bacterial-peritonitis","Prophylaxis is reserved for defined high-risk settings such as prior SBP, selected low-protein ascites with advanced disease, and cirrhosis with upper GI bleeding","Use a current local regimen and regularly reassess resistance, adverse effects, C. difficile risk, and ongoing indication","Assess prior SBP, ascitic protein, liver and kidney severity, GI bleeding, QT, interactions, local resistance, and transplant plan","Prescribing indefinite prophylaxis to every patient with ascites","Long exposure carries resistance and toxicity and benefits selected risk groups"),

  c("beta lactam allergy strategy","special-populations-stewardship","A precise allergy history can preserve safer beta-lactam options and avoid toxic or resistance-prone substitutes","Clarify reaction, timing, treatment, tolerance, and testing before selecting aztreonam or fluoroquinolone pathways","Assess anaphylaxis, angioedema, urticaria, severe cutaneous reaction, organ injury, prior cephalosporins, and urgency","Treating nausea or a remote unknown label as proven anaphylaxis","Allergy phenotype changes which beta-lactams can be used safely"),
  c("kidney and liver dosing","special-populations-stewardship","Organ dysfunction alters beta-lactam, fluoroquinolone, metronidazole, aminoglycoside, and antifungal exposure","Use current function, trajectory, dialysis, weight, and hepatic reserve to individualize the full regimen","Assess creatinine trend, urine output, dialysis timing, liver function, encephalopathy, weight, and interacting nephrotoxins","Applying one static renal estimate throughout septic physiology","Rapidly changing clearance can produce underexposure or toxicity"),
  c("pregnancy and pediatrics","special-populations-stewardship","Imaging, dosing, source control, and fetal or developmental safety require coordinated adaptation without accepting delayed maternal treatment","Use pregnancy-appropriate imaging and drugs while preserving urgent source control and weight-based pediatric dosing","Assess gestation, fetal context, age, weight, organ function, syndrome, imaging yield, and procedural timing","Withholding necessary imaging, antibiotics, or source control solely because of pregnancy","Untreated abdominal sepsis threatens both pregnant patient and fetus"),
  c("antimicrobial stewardship closeout","special-populations-stewardship","Every cIAI plan should name spectrum, cultures, source control, stop date, IV-to-oral criteria, and failure pathway","Document the reason for each drug and remove it when its target or indication disappears","Assess daily spectrum, culture, allergy, dose, route, adverse effects, source control, duration, and discharge plan","Leaving broad therapy active because no one owns the stop decision","Explicit ownership converts evidence into shorter safer treatment"),
];
const dimensions=[["principle","Which principle best characterizes"],["action","Which clinical action best applies to"],["assessment","Which assessment is most appropriate for"],["hazard","Which reasoning hazard is most important to prevent with"]];
const distractors=(index,field)=>[8,19,31].map(offset=>concepts[(index+offset)%concepts.length][field]);
const generated=concepts.flatMap((item,index)=>dimensions.map(([field,stem],dimension)=>({id:`intra-abdominal-infections-${String(index*4+dimension+1).padStart(3,"0")}`,lesson:item.lesson,question:`${stem} ${item.name}?`,choices:[item[field],...distractors(index,field)],answer:0,rationale:item.why,reviewHref:`#${item.lesson}`})));
const cases=[
  ["source-control","A patient with perforated colon has ongoing feculent contamination. What is the priority alongside active antibiotics?",["Urgent definitive source control","Fourteen days of antibiotics before intervention","Routine antifungal monotherapy","Observation alone"],"Antibiotics cannot sterilize ongoing leakage and necrotic contamination."],
  ["duration-response","A cIAI has undergone adequate source control and the patient improves. What duration is supported?",["No more than four days after adequate source control for most patients","At least fourteen days because an abscess was present","Continue until every inflammatory marker normalizes","Restart a full course after IV-to-oral transition"],"The 2024 SIS update recommends no more than four days after adequate source control."],
  ["duration-response","Fever and ileus persist after an apparently adequate course. What is the next step?",["Repeat diagnostic evaluation and imaging for residual source or another diagnosis","Automatically add seven more days","Add MRSA coverage without evidence","Ignore drain output"],"Failure is first a diagnostic and source-control problem, not a duration problem."],
  ["regimen-selection","Cefepime is selected for high-risk colonic perforation. What must usually be added for anaerobes?",["Metronidazole","Azithromycin","Daptomycin","Rifampin"],"Cefepime lacks reliable Bacteroides coverage."],
  ["biliary-infections","A patient has septic acute cholangitis with ductal obstruction. What is essential?",["Prompt antibiotics and urgent biliary decompression","Antibiotics alone until the stone dissolves","Dental prophylaxis","No cultures or imaging"],"An infected obstructed biliary system requires decompression."],
  ["spontaneous-bacterial-peritonitis","Ascitic PMNs are 480 cells per cubic millimeter and cultures are pending. What is the response?",["Treat SBP after evaluating for a secondary source","Wait for a positive culture","Use oral prophylaxis only","Schedule elective colonoscopy first"],"An ascitic PMN count at least 250 establishes neutrocytic ascites requiring treatment."],
  ["spontaneous-bacterial-peritonitis","What albumin schedule is used with SBP treatment when indicated?",["1.5 g/kg on day 1 and 1 g/kg on day 3","1 g once after discharge","Daily indefinitely","Albumin is never used"],"This schedule reduces kidney failure and mortality in appropriate SBP patients."],
  ["microbiology","Fresh fluid is obtained during drainage of cIAI. What is the best use?",["Send an adequate fresh specimen for aerobic and anaerobic culture","Swab the old drain tubing","Discard it because cultures never help","Send only a urine culture"],"High-quality source cultures support narrowing and resistance detection."],
].map((item,index)=>({id:`intra-abdominal-infections-${String(generated.length+index+1).padStart(3,"0")}`,lesson:item[0],question:item[1],choices:item[2],answer:0,rationale:item[3],reviewHref:`#${item[0]}`}));
export const intraAbdominalInfectionsQuestionBank=[...generated,...cases];
if(intraAbdominalInfectionsQuestionBank.length<100)throw new Error(`Intra-abdominal infections question bank must contain at least 100 questions, found ${intraAbdominalInfectionsQuestionBank.length}.`);

// Reconcile complete clinical cases while preserving existing IDs, keys, difficulty and lesson links.
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-129"), {
  "question": "Ascitic PMNs are 280 cells/mm³ and culture is pending, without an apparent secondary source. Which action is best?",
  "choices": [
    "Begin active empiric antibiotics for suspected SBP promptly.",
    "Wait for a positive culture.",
    "Use only an oral prophylaxis dose.",
    "Exclude infection because serum neutrophils are normal."
  ],
  "rationale": "Ascitic PMNs ≥250 cells/mm³ support prompt empiric treatment of suspected SBP. Culture guides later narrowing; a serum count or preventive oral dose does not replace treatment. Evaluate other explanations and secondary sources as appropriate."
});
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-130"), {
  "question": "An afebrile patient with cirrhosis and ascites is admitted urgently for new encephalopathy. Which test should be part of the prompt infection evaluation?",
  "choices": [
    "Diagnostic paracentesis with ascitic cell count, differential and culture.",
    "Therapeutic drainage only if visible ascites causes severe pressure.",
    "No ascitic testing because fever is absent.",
    "Ascitic culture only after an entire antibiotic course."
  ],
  "rationale": "An urgent admission or otherwise unexplained encephalopathy can reveal occult SBP. Prompt diagnostic paracentesis is appropriate despite absent fever. Obtain actionable samples before antibiotics when feasible; do not delay urgent treatment in instability."
});
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-131"), {
  "question": "Ascitic fluid has 600 white cells/mm³ and 50% neutrophils. What is the absolute PMN count?",
  "choices": [
    "300 cells/mm³.",
    "50 cells/mm³.",
    "600 cells/mm³.",
    "1,200 cells/mm³."
  ],
  "rationale": "Absolute PMNs = total white cells × neutrophil fraction = 600 × 0.50 = 300 cells/mm³. This meets the ≥250 treatment threshold in suspected SBP. Percentage alone and total white cells alone are not the absolute PMN count."
});
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-132"), {
  "question": "A traumatic ascitic tap has 25,000 red cells/mm³ and 400 measured PMNs/mm³. Using one PMN subtracted per 250 red cells, what is the corrected PMN count?",
  "choices": [
    "300 cells/mm³.",
    "100 cells/mm³.",
    "400 cells/mm³.",
    "500 cells/mm³."
  ],
  "rationale": "Subtract 25,000 ÷ 250 = 100 PMNs from 400, leaving 300 cells/mm³. The corrected value remains ≥250 and supports treatment in the appropriate clinical context. The correction is subtraction, not addition, and must not override urgent clinical findings."
});
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-133"), {
  "question": "Before SBP antibiotics, which collection approach best supports ascitic culture yield?",
  "choices": [
    "Inoculate blood-culture bottles with ascitic fluid immediately at the bedside.",
    "Leave fluid in a syringe for delayed inoculation after transport.",
    "Collect only a superficial abdominal skin swab.",
    "Wait until antibiotics have finished before collecting ascitic fluid."
  ],
  "rationale": "Immediate bedside inoculation improves recovery from low-organism-density ascitic fluid. Use the laboratory’s bottle and volume instructions, with a separate cell-count specimen and blood cultures. Sampling is valuable before antibiotics but must not delay urgent therapy."
});
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-134"), {
  "question": "During diagnostic paracentesis for suspected SBP, which specimen plan is best?",
  "choices": [
    "Send separate ascitic cell count and differential, bedside-inoculated cultures and blood cultures.",
    "Send only a culture and omit the cell count.",
    "Send only a cell count and discard all culture material.",
    "Replace ascitic testing with a urine culture alone."
  ],
  "rationale": "Cell count and differential provide the immediate PMN result; ascitic and blood cultures help identify organisms and narrow therapy. Each answers a different question. A urine culture can investigate another source but cannot replace ascitic evaluation."
});
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-135"), {
  "question": "Ascitic cultures remain negative but PMNs are 450 cells/mm³ and no alternative source is identified. Which conclusion is best?",
  "choices": [
    "Culture-negative neutrocytic ascites still warrants an appropriate antibiotic course.",
    "Negative culture proves antibiotics are unnecessary.",
    "A blood culture must be positive before treatment can continue.",
    "The PMN count cannot be interpreted until culture grows."
  ],
  "rationale": "A negative culture does not exclude SBP. Neutrocytic ascites meeting the threshold is treated similarly when other explanations are excluded. Follow the clinical course and source assessment; culture positivity is not required for interpreting the count."
});
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-136"), {
  "question": "A clinically stable, asymptomatic patient has one ascitic organism recovered and PMNs of 100 cells/mm³. Which plan is best?",
  "choices": [
    "Repeat paracentesis promptly and reassess for progression or symptoms.",
    "Ignore the culture permanently because PMNs are below 250.",
    "Diagnose a perforation solely because one organism grew.",
    "Give indefinite IV broad-spectrum therapy without reassessment."
  ],
  "rationale": "Asymptomatic monomicrobial bacterascites may be transient and does not automatically require immediate antibiotics. It needs repeat sampling and clinical reassessment. New symptoms or deterioration change the treatment decision; a single organism does not prove a surgical source."
});
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-137"), {
  "question": "Which ceftriaxone order is a common academic-guidance treatment regimen for community-acquired SBP without major resistance risk?",
  "choices": [
    "2 g IV every 24 hours, with duration and narrowing guided by response and cultures.",
    "1 g IV every 24 hours indefinitely because this is the GI-bleeding prevention dose.",
    "Ciprofloxacin 500 mg orally daily as the sole treatment.",
    "One IV dose followed only by albumin regardless of response."
  ],
  "rationale": "Ceftriaxone 2 g IV every 24 hours is one accepted community-acquired treatment regimen, usually for 5 to 7 days as clinically appropriate. The 1 g daily short-course bleeding regimen is prophylaxis; oral preventive dosing is not active SBP treatment, and albumin is adjunctive."
});
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-138"), {
  "question": "An 80 kg patient needs the established SBP albumin schedule. Which regimen uses the stated dosing weight correctly?",
  "choices": [
    "120 g on day 1 and 80 g on day 3.",
    "80 g on day 1 and 120 g on day 3.",
    "8 g per day because SBP uses the paracentesis per-liter rule.",
    "120 g every day indefinitely."
  ],
  "rationale": "The regimen is 1.5 g/kg on day 1 and 1 g/kg on day 3: 80 × 1.5 = 120 g and 80 × 1 = 80 g. Confirm dosing weight and protocol and monitor volume status. SBP dosing is not based on liters drained."
});
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-139"), {
  "question": "A patient has hospital-acquired SBP after recent antibiotics and remains hypotensive. Which treatment assessment is best?",
  "choices": [
    "Review resistance, prior isolates and exposure, organ function and local guidance while giving active therapy.",
    "Use the community regimen automatically regardless of acquisition or prior isolates.",
    "Wait for culture certainty before any antibiotics.",
    "Use the long-term oral prophylaxis dose to treat shock."
  ],
  "rationale": "Hospital acquisition, critical illness and antimicrobial exposure raise concern for resistant organisms. Initial coverage must be active in the local context and later narrowed when possible. Organ function and allergy also affect selection; shock requires urgent therapy rather than preventive dosing or culture delay."
});
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-140"), {
  "question": "Which proposed SBP treatment creates the greatest avoidable risk?",
  "choices": [
    "Use albumin alone while withholding active antibiotics.",
    "Give active antibiotics and assess adjunctive albumin.",
    "Follow kidney function and blood pressure during treatment.",
    "Narrow antibiotics when reliable susceptibility results permit."
  ],
  "rationale": "Albumin supports circulation and kidney protection but does not eradicate bacterial infection. Withholding active antibiotics in suspected SBP is hazardous. Adjunctive albumin, organ monitoring and appropriate culture-directed narrowing are compatible with treatment."
});
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-141"), {
  "question": "An ascitic culture grows several organisms, pain is focal and the patient worsens on SBP treatment. Which concern is most important?",
  "choices": [
    "Secondary peritonitis from a potentially correctable intra-abdominal source.",
    "Recovery established by the culture result.",
    "Uncomplicated SBP proved solely by an elevated PMN count.",
    "A need for prophylaxis without further diagnostic evaluation."
  ],
  "rationale": "Polymicrobial growth, focal findings and poor response should trigger urgent evaluation for secondary peritonitis. An elevated PMN count does not establish that the infection is spontaneous. Imaging and source-control assessment proceed with stabilization and active antibiotics."
});
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-142"), {
  "question": "CT shows free air and a suspected bowel perforation in a patient initially treated for infected ascites. Which plan is best?",
  "choices": [
    "Urgent surgical/source-control evaluation with stabilization and antibiotics including appropriate anaerobic coverage.",
    "Repeat the same SBP-only regimen and defer procedural assessment until next week.",
    "Treat the perforation with albumin alone.",
    "Stop antibiotics because the infection is no longer called spontaneous."
  ],
  "rationale": "A perforation can require urgent definitive source control. Continue active antimicrobial therapy and stabilization, including appropriate anaerobic coverage, while activating procedural care. Renaming the syndrome does not remove the need for antibiotics or justify delay."
});
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-143"), {
  "question": "Ascitic protein is 1.4 g/dL, glucose is 35 mg/dL and LDH exceeds the serum upper limit. How should these results be used?",
  "choices": [
    "They are supporting secondary-peritonitis clues that warrant urgent source evaluation in context.",
    "They prove a perforation without imaging or clinical assessment.",
    "They exclude a secondary source because protein is below 1.5 g/dL.",
    "They determine the antibiotic stop date independently of the clinical course."
  ],
  "rationale": "Protein >1 g/dL, glucose <50 mg/dL and high LDH are secondary-source clues; at least two raise concern. They do not definitively establish a perforation. The 1.5 g/dL primary-prophylaxis protein threshold serves a different purpose and does not exclude secondary infection."
});
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-144"), {
  "question": "After 48 hours, SBP PMNs fall from 1,000 to 850 cells/mm³ and pain persists. Which plan is best?",
  "choices": [
    "Reassess resistant infection and a secondary source because the decline is only 15%.",
    "Declare adequate response because any decrease is sufficient.",
    "Stop antibiotics because the count is now below 1,000.",
    "Use the count to exclude a perforation without further evaluation."
  ],
  "rationale": "The decline is 150 ÷ 1,000 = 15%, below the expected 25% decline used to assess response. Persistent illness calls for renewed coverage and source evaluation. Neither a small decline nor a lower absolute count excludes a surgically treatable cause."
});
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-145"), {
  "question": "Which patient most clearly has a secondary SBP prophylaxis indication?",
  "choices": [
    "A patient who has recovered from SBP and still has ascites.",
    "A patient with ascites alone and no prior SBP or other high-risk indication.",
    "A patient with active SBP needing immediate treatment instead of prophylaxis alone.",
    "A patient without cirrhosis or ascites after uncomplicated cystitis."
  ],
  "rationale": "Prior SBP defines secondary prevention, with a daily regimen selected and reassessed by the clinical team. Ascites alone does not automatically justify prophylaxis. Active SBP requires treatment first; an unrelated resolved infection is not an SBP indication."
});
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-146"), {
  "question": "A patient is discharged after SBP recovery on ciprofloxacin prevention. Which common US regimen should be distinguished from active treatment?",
  "choices": [
    "500 mg orally daily, individualized and monitored as long-term secondary prophylaxis.",
    "Ciprofloxacin 750 mg orally once weekly as the preferred regimen for every patient.",
    "A single dose followed by no reassessment of persistent ascites.",
    "1 g IV daily indefinitely solely because GI bleeding occurred once."
  ],
  "rationale": "Ciprofloxacin 500 mg orally daily is a common secondary-prophylaxis option. Select and monitor it for patient and local risks. Daily prophylaxis is generally preferred to intermittent dosing; the other orders confuse the regimen or the separate short-course bleeding indication; prevention is not the regimen for active SBP."
});
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-147"), {
  "question": "A patient on spironolactone is considered for trimethoprim-sulfamethoxazole SBP prevention. Which review is especially relevant?",
  "choices": [
    "Kidney function, potassium and interacting medications before selection and during follow-up.",
    "Only the ascites volume because preventive antibiotics have no electrolyte effects.",
    "Blood pressure alone because preventive dosing eliminates potassium risk.",
    "No follow-up laboratory testing because the dose is preventive."
  ],
  "rationale": "Trimethoprim-sulfamethoxazole can cause hyperkalemia and requires renal and interaction review; concurrent spironolactone adds potassium risk. Prophylaxis does not eliminate adverse effects. Confirm regimen and indication and arrange monitoring."
});
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-148"), {
  "question": "Which plan creates the greatest avoidable risk when considering SBP prophylaxis?",
  "choices": [
    "Prescribe indefinite antibiotics to every patient with ascites without a defined indication or reassessment.",
    "Review a prior SBP episode before selecting secondary prevention.",
    "Assess renal and liver severity before considering primary prevention in low-protein ascites.",
    "Use a time-limited ceftriaxone course for cirrhosis with acute upper GI bleeding."
  ],
  "rationale": "Prophylaxis is indication-specific and carries resistance, C. difficile and drug risks. Ascites alone does not justify indefinite exposure. Prior SBP, selected low-protein/high-risk ascites and acute upper GI bleeding are separate clinical contexts that require appropriate regimen and duration review."
});
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-170"), {
  "question": "Ascitic PMNs are 480 cells/mm³ and cultures are pending. A secondary source has not yet been fully assessed. Which response is best?",
  "choices": [
    "Begin active empiric antibiotics promptly while evaluating secondary-source clues in parallel.",
    "Wait for complete imaging and a positive culture before antibiotics.",
    "Use only oral prophylaxis because the culture is pending.",
    "Schedule elective colonoscopy before treating the suspected infection."
  ],
  "rationale": "The PMN threshold is met, so treatment should not wait for culture or a completed secondary-source evaluation. Stabilization, active antibiotics and source assessment proceed in parallel. A correctable source can change coverage and require procedural care."
});
Object.assign(intraAbdominalInfectionsQuestionBank.find((question) => question.id === "intra-abdominal-infections-171"), {
  "question": "What is the established albumin schedule used alongside SBP antibiotics when prescribed?",
  "choices": [
    "1.5 g/kg on day 1 and 1 g/kg on day 3.",
    "1 g once after discharge.",
    "1.5 g/kg daily indefinitely.",
    "6 to 8 g per liter drained as the SBP schedule regardless of weight."
  ],
  "rationale": "SBP albumin uses a weight-based day 1/day 3 regimen as an adjunct to antibiotics. The per-liter replacement regimen belongs to large-volume paracentesis. Confirm the dosing weight and protocol and monitor volume and respiratory status."
});
