import { chronicHeartFailureQuestionBank } from "@/data/questionBanks/chronicHeartFailure";
export const chronicHeartFailureModule={slug:"chronic-heart-failure-pharmacotherapy",number:"42",title:"Chronic Heart Failure Pharmacotherapy",source:"2022 AHA, ACC, and HFSA guidance with 2024 HFrEF and 2026 HFpEF expert consensus",description:"Implement chronic heart failure therapy across ejection-fraction phenotypes with rapid HFrEF sequencing, safe titration, decongestion, residual-risk therapy, comorbidity care, and longitudinal access support.",topics:["HFrEF framework","RAS, neprilysin, and MRA","Beta blockers and rate","SGLT2 and congestion","Additional therapies","HFpEF and implementation"],outcomes:["Establish all four HFrEF pillars early and titrate them according to compensation, blood pressure, heart rate, kidney function, potassium, and access.","Apply ARNI, ACE inhibitor, ARB, and MRA drug-specific initiation, transition, interaction, and monitoring rules.","Use evidence-based beta blockers, ivabradine, and digoxin according to rhythm, compensation, exposure, and treatment goal.","Separate SGLT2 disease modification from loop-diuretic decongestion and prevent ketoacidosis and electrolyte complications.","Use additional drug, iron, device, and specialty options only after defining residual phenotype and expected benefit.","Manage HFmrEF, HFpEF, and HFimpEF using current evidence, comorbidity care, trajectory, adherence, and shared goals."],submodules:[
{slug:"hf-treatment-framework",title:"The Chronic HFrEF Treatment Framework",summary:"The modern HFrEF foundation uses four complementary pillars early, with individualized sequencing and rapid follow-up rather than a rigid one-drug-at-a-time ladder.",concepts:["Four pillars","Rapid sequencing","Compensation","Monitoring and access"],visual:"hf-treatment-pillars",application:"At each visit, list missing pillars, current dose, limiting physiology, reversible barrier, monitoring due, and the next action with a date.",lesson:[{heading:"Build broad protection early",body:"ARNI or another indicated RAS inhibitor, an evidence-based beta blocker, an MRA, and an SGLT2 inhibitor address distinct pathways. Low doses of all tolerated pillars generally provide broader early protection than maximizing only one or two."},{heading:"Sequence by physiology",body:"Congestion, perfusion, blood pressure, pulse, kidney function, potassium, angioedema history, diabetes and fasting risk, and access determine the safest next step. Beta-blocker initiation and escalation wait for compensation, while MRA and SGLT2 therapy often have less pressure effect."},{heading:"Move with purpose",body:"Contemporary care aims to establish and move toward maximally tolerated therapy within about three months when feasible. Hospital and transition visits are opportunities, but every start needs early laboratory and clinical follow-up."},{heading:"Treat implementation as therapy",body:"Cost, prior authorization, transportation, health literacy, cognition, adverse effects, pill burden, language, and trust determine whether a prescription becomes exposure. Pair each plan with a named follow-up owner, laboratory timing, daily symptom and weight review when appropriate, and clear instructions for worsening dyspnea, swelling, dizziness, or rapid weight change."}],keyPoints:["Four pathways work together.","Sequence by physiology.","Follow-up is part of initiation.","Access is a clinical variable."],check:{question:"Which approach best reflects contemporary HFrEF sequencing?",choices:["Establish low doses of all tolerated core pillars early","Maximize one drug for months before considering another","Delay all therapy until symptoms become severe","Use diuretics as the only disease-modifying treatment"],answer:0,rationale:"Early complementary pathway coverage is preferred when safely tolerated.",reviewHref:"#hf-treatment-framework"}},
{
  "slug": "ras-neprilysin-and-mra",
  "title": "ARNI Selection, Dosing and Transitions",
  "summary": "Start and transition sacubitril/valsartan with clear component strengths, washout timing, formulation instructions and safety monitoring.",
  "concepts": [
    "Sacubitril/valsartan components",
    "ACE inhibitor washout",
    "Starting-dose adjustments",
    "Sprinkle administration"
  ],
  "visual": "hf-ras-mra",
  "application": "Document the exact RAS regimen, last ACE dose, pressure, eGFR, potassium, volume, angioedema history, pregnancy risk, duplicate therapy, and follow-up laboratory date.",
  "lesson": [
    {
      "heading": "Connect the mechanism to the treatment role",
      "body": "Valsartan blocks the angiotensin II AT1 receptor; the active sacubitril metabolite inhibits neprilysin, augmenting endogenous vasoactive peptides. The 2022 US guideline recommends ARNI for symptomatic HFrEF, particularly NYHA II-III, to reduce morbidity and mortality. The adult product indication is broader, with benefit most evident below a normal LVEF. A broader label does not establish equal benefit for every HF phenotype."
    },
    {
      "heading": "Use ARNI without unsafe overlap",
      "body": "Sacubitril valsartan combines angiotensin-receptor and neprilysin inhibition. Allow at least 36 hours when switching in either direction between ARNI and an ACE inhibitor. Do not overlap with an ARB. The HF guideline excludes ARNI and ACE inhibitors after any history of angioedema; the ARNI label specifically contraindicates prior ACE/ARB-related angioedema. Stop ARNI promptly if pregnancy is detected."
    },
    {
      "heading": "Distinguish an ARB transition from ACE washout",
      "body": "Stop the separate ARB before beginning sacubitril/valsartan because ARNI already contains valsartan. The book places the first ARNI dose when the next ARB dose would have been due; an ARB transition does not require the ACE-specific 36-hour washout. Reconcile the actual last drug and dose, review clinical stability and avoid overlap. The 36-hour rule still applies in either direction with an ACE inhibitor."
    },
    {
      "heading": "Write both component strengths",
      "body": "For adults, the usual sacubitril/valsartan start is 49/51 mg twice daily, titrated after 2-4 weeks to 97/103 mg twice daily as tolerated. Start 24/26 mg twice daily if ACE/ARB-naive, previously on low doses, eGFR below 30 mL/min/1.73 m², or Child-Pugh B. Severe hepatic impairment is not recommended."
    },
    {
      "heading": "Avoid an ambiguous total dose",
      "body": "The older totals 50, 100, and 200 mg correspond to 24/26, 49/51, and 97/103 mg. Prescribe both components. Do not assume the valsartan component is interchangeable milligram-for-milligram with a separate valsartan tablet."
    },
    {
      "heading": "Match swallowing instructions to formulation",
      "body": "Entresto Sprinkle capsules contain oral pellets: open the prescribed capsules, place their entire contents onto 1-2 teaspoons of soft food and consume immediately. Discard the shell; do not swallow it, crush or chew pellets, or give pellets through feeding tubes. A pharmacist-prepared tablet suspension is a different formulation. The label describes 4 mg/mL combined components, storage for up to 15 days at no more than 25°C without refrigeration, and shaking before use; follow the complete preparation instructions."
    },
    {
      "heading": "Screen additional exclusions",
      "body": "Product hypersensitivity and concurrent aliskiren in diabetes contraindicate ARNI. Review pressure, volume, renal function, potassium, NSAIDs, potassium products, and lithium before initiation and during titration."
    },
    {
      "heading": "Respond proportionally to laboratory change",
      "body": "Confirm an unexpected mild result and assess kidney trajectory, potassium exposures, blood pressure and volume before changing therapy. Review supplements, potassium salt substitutes, NSAIDs and other interactions. Clinically important hyperkalemia or worsening renal function can require dose reduction or interruption. Severe abnormalities need prompt treatment; confirmation of a possible sample problem must not delay urgent care."
    }
  ],
  "keyPoints": [
    "Separate ACE inhibitors and ARNI by at least 36 hours in either direction.",
    "Avoid overlapping ARNI with an ACE inhibitor or ARB.",
    "Write both component strengths and match the formulation.",
    "Follow pressure, renal function and potassium."
  ],
  "check": {
    "question": "What must occur before starting sacubitril valsartan after an ACE inhibitor?",
    "choices": [
      "A washout of at least 36 hours",
      "Immediate overlap",
      "Permanent discontinuation of all HF therapy",
      "A high-potassium supplement"
    ],
    "answer": 0,
    "rationale": "The washout reduces angioedema risk from overlapping bradykinin effects.",
    "reviewHref": "#ras-neprilysin-and-mra"
  }
},
{
  "slug": "ace-arb-selection-and-dosing",
  "title": "ACE Inhibitor and ARB Selection and Dosing",
  "summary": "When ARNI is not feasible, select an alternative RAS regimen using the indication, kidney function, formulation and monitoring requirements.",
  "concepts": [
    "ACE intolerance and ARB eligibility",
    "Guideline targets versus product labeling",
    "Renal and hepatic dose adjustments",
    "Captopril administration and blood counts"
  ],
  "visual": "hf-ace-arb-dosing",
  "application": "Document the indication, exact product, starting dose, titration plan and monitoring. Distinguish guideline-supported off-label dosing from the product’s approved regimen.",
  "lesson": [
    {
      "heading": "Distinguish ACE intolerance from ARB eligibility",
      "body": "The HF guideline permits an ARB for selected symptomatic HFrEF patients with ACE-inhibitor cough or angioedema when ARNI is not feasible. This requires individualized risk assessment and counseling; it does not mean rechallenging a patient with the agent that caused angioedema."
    },
    {
      "heading": "Keep ACE inhibitors and ARBs as alternatives",
      "body": "When ARNI is not feasible, an ACE inhibitor or ARB can preserve RAS-modifying benefit. Choose an ARNI, ACE inhibitor or ARB strategy without overlapping these agents. An indicated MRA is a separate HFrEF pillar and can be added with kidney and potassium safeguards. ACE inhibition reduces angiotensin II formation and bradykinin degradation; an ARB blocks the AT1 receptor. Both require pregnancy, pressure, kidney and potassium assessment. ACE-inhibitor cough and angioedema are related to its bradykinin effects; an ARB still carries angioedema risk."
    },
    {
      "heading": "Prescribe the HF-specific ARB regimen",
      "body": "For the reviewed valsartan tablet label, start 40 mg twice daily and increase to 80 then 160 mg twice daily as tolerated; the latter totals 320 mg/day. Do not import a once-daily hypertension regimen. The reviewed candesartan label starts 4 mg once daily and doubles about every two weeks toward 32 mg once daily. The guideline table lists a 4-8 mg candesartan starting range; patient factors and the selected product govern the order. Reassess pressure, volume, kidney function and potassium with titration."
    },
    {
      "heading": "Distinguish lisinopril starting doses",
      "body": "The systolic-HF label starts lisinopril at 5 mg once daily, or 2.5 mg daily when sodium is below 130 mEq/L. For creatinine clearance 10-30 mL/min, the HF starting dose is also 2.5 mg daily. Increase as tolerated, with a labeled maximum of 40 mg daily. A guideline trial-dose range and a label maximum answer different questions; the higher number is not mandatory."
    },
    {
      "heading": "Keep enalapril frequency and renal precautions explicit",
      "body": "The guideline HF regimen starts enalapril at 2.5 mg twice daily and targets 10-20 mg twice daily as tolerated. The reviewed label starts at 2.5 mg once daily when sodium is below 130 mEq/L or serum creatinine exceeds 1.6 mg/dL, with close supervision and reassessment before increases. Its maximum total is 40 mg/day. Evaluate early hypotension, volume and concomitant therapy before further titration."
    },
    {
      "heading": "Separate captopril targets from label ceilings",
      "body": "The HF guideline table starts captopril at 6.25 mg three times daily and targets 50 mg three times daily. Its label permits broader dosing and describes 6.25-12.5 mg three times daily for patients at risk from diuresis or salt/volume depletion. A larger labeled maximum is not the routine guideline target. Significant renal impairment requires lower initial exposure and slower titration. At 50 mg three times daily, the total is 150 mg/day."
    },
    {
      "heading": "Recognize the other guideline ACE inhibitor ranges",
      "body": "The 2022 US HFrEF table also lists these initial-to-target regimens: fosinopril 5-10 to 40 mg once daily; perindopril 2 to 8-16 mg once daily; quinapril 5 to 20 mg twice daily; ramipril 1.25-2.5 to 10 mg once daily; and trandolapril 1 to 4 mg once daily. These are guideline ranges, not a claim that every agent has the same approved indication, formulation, availability or patient-specific starting dose. Check the selected product and tolerance before prescribing."
    },
    {
      "heading": "Use the ramipril post-MI schedule when that is the indication",
      "body": "For stable patients with HF after MI, the reviewed ramipril label starts at 2.5 mg twice daily and titrates as tolerated toward 5 mg twice daily. Hypotension can require 1.25 mg twice daily. In its renal-impairment pathway, initiation is 1.25 mg once daily, with a maximum of 2.5 mg twice daily according to response. The general guideline table’s once-daily range does not replace this indication-specific schedule. Initiation requires supervised blood-pressure assessment."
    },
    {
      "heading": "Adjust trandolapril for the patient",
      "body": "The post-MI HF or left-ventricular-dysfunction label starts trandolapril at 1 mg daily and targets 4 mg daily as tolerated. Creatinine clearance below 30 mL/min or hepatic cirrhosis changes the initial dose to 0.5 mg daily. Do not choose the starting dose from EF alone; confirm kidney function, liver disease, pressure and volume."
    },
    {
      "heading": "Read the fosinopril HF instructions alongside renal clearance",
      "body": "The usual labeled HF start is fosinopril 10 mg daily; 5 mg is preferred with moderate-to-severe renal failure or vigorous prior diuresis. Increase over several weeks as tolerated, not above 40 mg daily. Its dual renal and hepatobiliary elimination does not remove the lower-start recommendation for these HF patients or the need to monitor potassium, kidney function and pressure."
    },
    {
      "heading": "Apply quinapril’s renal initiation pathway",
      "body": "Quinapril generally starts at 5 mg twice daily for HF and is titrated weekly toward 20-40 mg per day in two doses. With HF and renal impairment, the reviewed label specifies an initial 5 mg dose when creatinine clearance exceeds 30 mL/min, or 2.5 mg at 10-30 mL/min; twice-daily administration can begin the following day if tolerated. Below 10 mL/min, data are insufficient for a dose recommendation. Confirm the available product before implementing an older guideline-table regimen."
    },
    {
      "heading": "Keep perindopril’s indication and renal limit explicit",
      "body": "The reviewed US perindopril erbumine label covers hypertension and stable coronary disease, not HF. It does not recommend use at creatinine clearance below 30 mL/min. With lesser renal impairment, its initial dose is 2 mg daily and maximum is 8 mg daily. Thus the general HFrEF table’s upper dose of 16 mg does not override renal restrictions or establish an approved HF indication."
    },
    {
      "heading": "Separate losartan HF dosing from its US label",
      "body": "The 2022 US HFrEF table starts losartan at 25-50 mg once daily and lists a target range of 50-150 mg once daily. The reviewed US tablet label does not list HF as an indication and limits hypertension dosing to 100 mg daily. Thus an HF prescription for 150 mg daily requires verification of its guideline-supported, off-label purpose and patient tolerance; it should neither be treated as routine hypertension dosing nor rejected solely by applying the hypertension maximum. Assess pressure, potassium, renal function and concomitant medicines."
    },
    {
      "heading": "Build captopril into a workable meal schedule",
      "body": "Take captopril one hour before meals because food reduces absorption. A three-times-daily HF prescription needs an achievable schedule and review of adherence barriers. Do not transfer this food instruction to every ACE inhibitor or change the dosing frequency merely to simplify meals."
    },
    {
      "heading": "Recognize captopril blood-count precautions",
      "body": "Renal impairment, especially with collagen vascular disease or other medicines affecting white cells, increases concern for captopril-associated neutropenia. Its label calls for a baseline white-cell count with differential in renal impairment, then approximately every two weeks for three months and periodically afterward. Fever or sore throat needs prompt assessment and a white-cell count when infection is suspected. Confirmed neutrophils below 1,000/mm³ require withdrawing captopril and following the patient closely."
    },
    {
      "heading": "Measure Epaned using its labeled concentration",
      "body": "Epaned is ready-to-use enalapril maleate oral solution, 1 mg/mL. An ordered 2.5-mg dose is 2.5 mL; keep the prescribed frequency explicit. Store the bottle refrigerated at 2-8°C. The label permits patients to keep it at 20-25°C, but then it must be discarded after 60 days. Keep the container tightly closed and avoid freezing or excessive heat. Do not apply an older powder-reconstitution recipe to this ready-to-use product."
    },
    {
      "heading": "Distinguish Qbrelis storage from Epaned",
      "body": "Qbrelis is ready-to-use lisinopril oral solution, 1 mg/mL. For an ordered 5-mg daily dose, measure 5 mL with an appropriate oral dosing device. Store tightly closed at 20-25°C and protect from freezing or excessive heat. The same numerical concentration does not make lisinopril and enalapril interchangeable. Confirm the drug, prescribed milligrams, frequency and measured milliliters when teaching administration."
    }
  ],
  "keyPoints": [
    "Use ACE inhibitors or ARBs as alternatives when ARNI is not feasible.",
    "A guideline target does not override product-specific renal or hepatic precautions.",
    "Preserve the indication-specific dosing frequency.",
    "Review captopril meal timing and blood-count precautions."
  ],
  "check": {
    "question": "A patient with kidney impairment develops fever and a sore throat during captopril therapy. Which assessment follows the label’s safety precautions?",
    "choices": [
      "Wait until the next routine renal panel",
      "Promptly assess for infection and obtain a white-cell count with differential",
      "Assume the symptoms establish a harmless ACE-inhibitor cough",
      "Increase captopril because fever indicates inadequate RAS inhibition"
    ],
    "answer": 1,
    "rationale": "Captopril-associated neutropenia is a concern, particularly with renal impairment. Suspected infection requires prompt blood-count assessment.",
    "reviewHref": "#ace-arb-selection-and-dosing"
  }
},
{
  "slug": "mra-selection-dosing-and-monitoring",
  "title": "MRA Selection, Formulations, and Monitoring",
  "summary": "Spironolactone and eplerenone share an outcome role but differ in dosing, formulation, interactions, and endocrine effects.",
  "concepts": [
    "Guideline eligibility",
    "Tablet versus suspension",
    "Eplerenone interactions",
    "Potassium follow-up"
  ],
  "visual": "hf-mra-safety",
  "application": "Choose one MRA, write the exact formulation and dose, and arrange laboratory review before dispensing.",
  "lesson": [
    {
      "heading": "Separate the outcome role from loop-diuretic symptom relief",
      "body": "Spironolactone and eplerenone antagonize aldosterone effects involved in sodium retention, fibrosis and remodeling. In eligible symptomatic HFrEF they reduce morbidity and mortality; a small HF dose is not simply a replacement for loop-diuretic decongestion. Combine an indicated MRA with the chosen ARNI, ACE inhibitor or ARB strategy under kidney and potassium safeguards, rather than combining two MRAs."
    },
    {
      "heading": "Establish eligibility before choosing a product",
      "body": "Spironolactone and eplerenone reduce HFrEF events in eligible patients. For symptomatic NYHA II-IV HFrEF, guideline initiation criteria include eGFR above 30 mL/min/1.73 m² and potassium below 5.0 mEq/L. If potassium cannot be maintained below 5.5 mEq/L, discontinue the MRA. Safety depends on early repeat testing and review of supplements, salt substitutes, NSAIDs, trimethoprim, and illness."
    },
    {
      "heading": "Dose spironolactone tablets",
      "body": "For eligible adults with eGFR above 50 mL/min/1.73 m², the Aldactone HF label starts 25 mg daily and allows 50 mg daily if tolerated. At eGFR 30-50 mL/min/1.73 m², consider 25 mg every other day. Apply the guideline requirement of eGFR above 30 and potassium below 5.0 rather than treating a label boundary as automatic eligibility."
    },
    {
      "heading": "Do not substitute suspension milligram for milligram",
      "body": "CaroSpir is a 5-mg/mL spironolactone suspension and is not therapeutically equivalent to Aldactone tablets. Its label starts 20 mg (4 mL) daily when eGFR is above 50 mL/min/1.73 m², with an increase to 37.5 mg (7.5 mL) daily if tolerated. At eGFR 30-50 mL/min/1.73 m², it suggests a 10-mg (2-mL) start. Apply guideline eligibility first and verify the formulation-specific order. Take consistently with respect to food. The label directs use of another formulation for doses above 100 mg."
    },
    {
      "heading": "Place the eplerenone regimen",
      "body": "For labeled post-MI HFrEF, start eplerenone 25 mg daily and aim for 50 mg daily within four weeks if tolerated. Its broader use in symptomatic chronic HFrEF follows guideline evidence; do not confuse the HF regimen with hypertension dosing."
    },
    {
      "heading": "Separate initiation from potassium adjustment",
      "body": "The 2022 US HFrEF guideline initiates spironolactone or eplerenone only when potassium is below 5.0 mEq/L and eGFR exceeds 30 mL/min/1.73 m². The eplerenone label contraindicates initiation above 5.5 mEq/L; this different threshold does not replace guideline eligibility. Its post-MI treatment table leaves an established dose unchanged at potassium 5.0-5.4; at 5.5-5.9, reduce 50 mg daily to 25 mg daily, 25 mg daily to 25 mg every other day, or withhold if already taking 25 mg every other day. At 6.0 or above, withhold and assess/treat promptly. The label permits a clinician-directed restart at 25 mg every other day after potassium falls below 5.5; this is a treatment-adjustment rule, not permission to initiate above the guideline threshold. Discontinue an MRA if potassium cannot be maintained below 5.5 mEq/L."
    },
    {
      "heading": "Screen interactions and exclusions",
      "body": "Eplerenone excludes CrCl at or below 30 and strong CYP3A inhibitors. In post-MI HFrEF with a moderate CYP3A inhibitor, do not exceed 25 mg daily. Spironolactone excludes hyperkalemia, Addison disease, and concurrent eplerenone. Do not combine the two MRAs."
    },
    {
      "heading": "Put laboratory dates in the plan",
      "body": "Check potassium and renal function at baseline. Spironolactone calls for potassium review within one week of initiation or titration and regularly thereafter. Eplerenone specifies potassium before treatment, within the first week and at one month after starting or adjusting, then periodically. Its label also calls for potassium and creatinine within 3-7 days after introducing a moderate CYP3A inhibitor, ACE inhibitor, ARB or NSAID. Renal deterioration, illness or other potassium-raising exposure can require earlier testing."
    },
    {
      "heading": "Counsel without promising zero endocrine effects",
      "body": "Spironolactone can cause gynecomastia and other hormone-related adverse effects. Eplerenone is more receptor-selective, but its label still reports gynecomastia and abnormal vaginal bleeding. Investigate symptoms rather than dismissing them solely because the drug is selective."
    },
    {
      "heading": "Treat the potassium result and its cause together",
      "body": "For an unexpected mild elevation, promptly reassess the sample, repeat potassium when appropriate and review kidney function, volume, supplements, potassium salt substitutes and interacting medicines such as NSAIDs or trimethoprim. Remove avoidable exposures and apply the selected MRA’s dose-reduction or withholding instructions. A hemolysed specimen can mislead, but suspected dangerous hyperkalemia requires urgent assessment and treatment rather than waiting for routine follow-up. Do not stop every beneficial HF medicine reflexively; equally, do not continue an unsafe MRA merely to preserve its outcome role."
    }
  ],
  "keyPoints": [
    "Guideline initiation criteria are stricter than some label exclusions.",
    "Tablet and suspension doses are not interchangeable.",
    "CYP3A interactions matter for eplerenone.",
    "Laboratory monitoring is part of the prescription."
  ],
  "check": {
    "question": "Under the 2022 US HFrEF guideline, a patient has potassium 5.2 mEq/L. Does being below the eplerenone label contraindication threshold establish eligibility to start spironolactone or eplerenone?",
    "choices": [
      "Yes, automatically",
      "No; guideline initiation requires potassium below 5.0 mEq/L",
      "Yes, if both MRAs are combined",
      "Potassium is irrelevant"
    ],
    "answer": 1,
    "rationale": "The 2022 US HFrEF initiation recommendation is distinct from label contraindication thresholds. Address elevated potassium and reassess eligibility.",
    "reviewHref": "#mra-selection-dosing-and-monitoring"
  }
},
{slug:"beta-blockers-and-rate",title:"Beta Blockers and Heart-Rate Strategy",summary:"Evidence-based beta blockade follows compensation, while ivabradine and digoxin occupy narrower roles defined by rhythm, heart rate, kidney exposure, and residual symptoms.",concepts:["Evidence-based beta blockers","Decompensation","Ivabradine","Digoxin"],visual:"hf-beta-rate",application:"State rhythm, resting rate, PR and QRS, perfusion, congestion, blood pressure, ejection fraction, beta-blocker agent and formulation, kidney function, interactions, and the goal of any additional rate drug.",lesson:[{heading:"Use the agents with HFrEF evidence",body:"Carvedilol, metoprolol succinate, and bisoprolol have outcome evidence. Start after compensation and titrate against pulse, pressure, conduction, bronchospasm, fatigue, perfusion, and symptoms."},{heading:"Handle decompensation by hemodynamics",body:"Do not initiate or escalate beta blockade during shock or active low-output decompensation. Established therapy is not automatically stopped during every admission if perfusion remains adequate and no clear intolerance exists."},{heading:"Reserve ivabradine for its phenotype",body:"Ivabradine acts at the sinus-node If current. It requires sinus rhythm, qualifying ejection fraction and resting rate, symptoms despite therapy, and maximally tolerated beta blockade or a documented limit."},{heading:"Use digoxin for a defined goal",body:"Digoxin may reduce hospitalization or help rate control in selected patients but does not establish mortality benefit. When a concentration is needed, collect it at least 6 hours after a dose and preferably 12 hours or more afterward. Interpret a usual heart-failure target of 0.5 to 0.9 ng/mL with kidney function, body size, electrolytes, conduction, symptoms, dose timing, and P-gp interactions."}],keyPoints:["Agent and formulation matter.","Compensation precedes titration.","Ivabradine requires sinus rhythm.","Digoxin has a narrow goal and margin."],check:{question:"Which beta blocker formulation has HFrEF outcome evidence?",choices:["Metoprolol succinate extended release","Metoprolol tartrate assumed equivalent","Any topical beta blocker","A beta agonist"],answer:0,rationale:"Evidence is agent and formulation specific.",reviewHref:"#beta-blockers-and-rate"}},
{slug:"sglt2-and-congestion",title:"SGLT2 Therapy and Congestion Control",summary:"SGLT2 inhibitors modify heart-failure outcomes across diabetes status, while diuretics relieve volume. Safe care separates these goals and monitors fasting, illness, kidney, volume, and electrolytes.",concepts:["SGLT2 benefit","Ketoacidosis prevention","Loop diuretics","Diuretic resistance"],visual:"hf-sglt2-diuresis",application:"For SGLT2 therapy, document kidney, volume, fasting and illness risk. For diuretics, document target weight, response, congestion signs, chemistry, interacting drugs, and the lowest effective maintenance plan.",lesson:[{heading:"Use SGLT2 therapy beyond diabetes",body:"Dapagliflozin and empagliflozin reduce worsening heart-failure events in eligible patients with or without diabetes. Review kidney thresholds, volume, genital infection history, insulin deficiency, acute illness, fasting, and surgery."},{heading:"Teach euglycemic ketoacidosis",body:"Nausea, vomiting, abdominal pain, dyspnea, and anion-gap acidosis require ketone evaluation even when glucose is not severely elevated. Sick-day and perioperative hold instructions belong at initiation."},{heading:"Use loops to achieve euvolemia",body:"Loop diuretics control congestion and are adjusted by weight, symptoms, jugular pressure, edema, urine response, electrolytes, kidney trajectory, adherence, sodium exposure, and NSAIDs. They do not replace the four pillars."},{heading:"Diagnose resistance before stacking",body:"Inadequate dose, poor absorption, gut edema, kidney dysfunction, low perfusion, sodium intake, NSAIDs, nephron adaptation, and a mistaken congestion assessment can all appear as resistance. Sequential blockade requires close electrolyte and volume monitoring."}],keyPoints:["Diabetes is not required.","Ketoacidosis can be euglycemic.","Diuretics control symptoms.","Resistance has multiple causes."],check:{question:"What should occur when an SGLT2-treated patient develops nausea and an anion gap despite glucose of 170 mg/dL?",choices:["Evaluate ketones and possible SGLT2-associated ketoacidosis","Exclude ketoacidosis solely from glucose","Double the drug automatically","Ignore the symptoms"],answer:0,rationale:"SGLT2-associated ketoacidosis may occur without marked hyperglycemia.",reviewHref:"#sglt2-and-congestion"}},
{slug:"additional-hf-therapies",title:"Additional Therapy for Residual Risk",summary:"Additional medications, iron, devices, ablation, and advanced referral follow a defined phenotype and residual goal after foundational therapy is established.",concepts:["Hydralazine and nitrate","Vericiguat","Iron deficiency","Device and specialty escalation"],visual:"hf-additional-therapy",application:"Before adding therapy, state the residual event or symptom, evidence population, foundational-treatment status, expected outcome, drug-specific risk, monitoring plan, and non-drug alternative.",lesson:[{heading:"Use the studied vasodilator combination",body:"Hydralazine plus isosorbide dinitrate is added for selected self-identified Black patients with advanced symptomatic HFrEF on optimal therapy and may be used when RAS therapy is not feasible in selected patients. Headache, pressure, adherence, nitrate interactions, and immune toxicity matter."},{heading:"Place vericiguat after worsening",body:"Vericiguat may be considered for selected high-risk HFrEF after recent worsening despite foundational care. It is not a substitute for the pillars. Blood pressure, anemia, pregnancy risk, and label-defined interactions require review."},{heading:"Find functional iron deficiency",body:"Ferritin and transferrin saturation identify iron deficiency with or without anemia. Inflammation can elevate ferritin, so transferrin saturation adds context. Evidence-based intravenous iron may improve symptoms and events in selected patients while the cause of deficiency is investigated."},{heading:"Escalate beyond another prescription",body:"Persistent symptoms, recurrent admissions, arrhythmia, conduction disease, valve disease, or advanced physiology can require CRT, ICD, revascularization, ablation, valve intervention, transplant, mechanical support, rehabilitation, or palliative care."}],keyPoints:["Use evidence-specific populations.","Residual therapy follows the pillars.","Iron deficiency can occur without anemia.","Not every gap needs another drug."],check:{question:"Why should ferritin be interpreted with transferrin saturation in heart failure?",choices:["Inflammation can elevate ferritin despite limited available iron","Ferritin never reflects iron stores","Transferrin saturation measures ejection fraction","Neither test changes with physiology"],answer:0,rationale:"Ferritin is an acute-phase reactant and can obscure functional deficiency.",reviewHref:"#additional-hf-therapies"}},
{slug:"preserved-and-improved-ef",title:"HFmrEF, HFpEF, HFimpEF, and Implementation",summary:"Across the ejection-fraction spectrum, current therapy combines SGLT2 benefit, decongestion, cardiometabolic and renal care, phenotype-specific options, preserved HFrEF therapy after improvement, and barrier-aware follow-up.",concepts:["HFmrEF","HFpEF","Obesity phenotype","HFimpEF and implementation"],visual:"hf-phenotype-implementation",application:"Document current and prior ejection fraction, objective syndrome evidence, congestion, comorbid phenotype, SGLT2 eligibility, pressure, kidney and potassium, obesity care, prior HFrEF therapy, access, and follow-up.",lesson:[{heading:"Treat HFmrEF as a continuum",body:"SGLT2 inhibition has central evidence in HFmrEF. ARNI, ARB, MRA, and beta-blocker use is individualized, particularly toward the lower ejection-fraction range or after prior HFrEF. Etiology, congestion, and comorbidity still matter."},{heading:"Treat HFpEF as multisystem disease",body:"HFpEF care combines accurate diagnosis, decongestion, SGLT2 therapy, pressure control, and active management of obesity, diabetes, CKD, AF, sleep apnea, coronary disease, exercise limitation, and phenotype-specific cardiomyopathy."},{heading:"Address obesity with medical seriousness",body:"Visceral adiposity, inflammation, volume expansion, metabolic disease, sleep apnea, and reduced reserve can form a treatable HFpEF phenotype. Nutrition, exercise, incretin-based therapy when appropriate, sleep care, and social support belong beside cardiovascular treatment."},{heading:"Protect improvement and solve barriers",body:"HFimpEF is remission rather than cure, so tolerated disease-modifying therapy generally continues. Hypotension and kidney changes require trajectory-based troubleshooting. Cost, literacy, cognition, transport, adverse effects, and pill burden need targeted solutions rather than blame."}],keyPoints:["HFmrEF follows trajectory.","HFpEF is multisystem.","Obesity is a biologic target.","HFimpEF usually continues therapy."],check:{question:"What is the usual medication principle after HFrEF improves above 40 percent?",choices:["Continue tolerated disease-modifying therapy because relapse risk persists","Stop every therapy immediately","Continue only a loop diuretic","Ignore the prior ejection fraction"],answer:0,rationale:"Improved imaging does not prove removal of the underlying susceptibility.",reviewHref:"#preserved-and-improved-ef"}},
],references:[{label:"American College of Cardiology. 2024 HFrEF Expert Consensus",href:"https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2024/03/06/19/22/2024-acc-expert-consensus-hfref"},{label:"American College of Cardiology. 2026 HFpEF Expert Consensus",href:"https://www.acc.org/latest-in-cardiology/journal-scans/2026/07/22/17/25/updated-acc-ecdp-addresses-management-of-hfpef"},{label:"American Heart Association. 2022 Heart Failure Guideline",href:"https://professional.heart.org/en/guidelines-statements/2022-ahaacchfsa-guideline-for-the-management-of-heart-failure-a-report-of-thecir0000000000001063"},{label:"DailyMed. Current Heart Failure Drug Labeling",href:"https://dailymed.nlm.nih.gov/dailymed/"},{"label": "AHA/ACC/HFSA. 2022 heart failure guideline: RAS, MRA and dose recommendations", "href": "https://professional.heart.org/-/media/PHD-Files-2/Science-News/2/2022/2022-Heart-Failure-Guideline-Slide-Set.pdf"},{"label": "DailyMed. Valsartan HF dosing", "href": "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d6e84105-9394-4ef0-928c-20d07d3fbaa9"},{"label": "DailyMed. Candesartan HF dosing", "href": "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4621249c-1f44-4d95-8513-a1a2b1859e41"},{"label": "DailyMed. Lisinopril HF and renal dosing", "href": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b17cd16b-8d0a-4cfa-bd48-2529983fcd12"},{"label": "DailyMed. Enalapril HF dosing", "href": "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=eee8633b-9d9e-453d-8c6b-8b13c94d2f58"},{"label": "DailyMed. Aldactone prescribing information", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0fed2822-3a03-4b64-9857-c682fcd462bc"},{"label": "DailyMed. CaroSpir prescribing information", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=07504afc-f0b6-40f6-8719-cd1c3e67fc35"},{"label": "DailyMed. Inspra prescribing information", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1a52bedc-8e2c-4116-a296-a87770676b4a"},{"label": "DailyMed. Entresto prescribing information", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=000dc81d-ab91-450c-8eae-8eb74e72296f"},{"label": "DailyMed. Losartan potassium tablets, August 2025", "href": "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cafd54e8-42a8-474c-8ea8-49ec74c2b0d3"},{"label": "DailyMed. Captopril tablets: administration and neutropenia precautions", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=65ed6e70-f1ee-437e-965c-d1b1fdadd832"},{"label": "DailyMed. Ramipril capsule labeling", "href": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3806abdc-6aec-4252-bd79-e2c115b849aa"},{"label": "DailyMed. Trandolapril tablet labeling", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8143a6cf-dadc-4ef7-a8db-d16d7150ad34"},{"label": "DailyMed. Fosinopril sodium tablet labeling", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0cef0cd4-e952-40c8-b715-bce4d2f02c51"},{"label": "DailyMed. Quinapril tablet labeling", "href": "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8ded0773-3aec-4e89-9836-d22a5a84abf0"},{"label": "DailyMed. Perindopril erbumine tablet labeling", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=87768fbf-7c63-47da-8925-0316f343d6ef"},{"label": "DailyMed. Epaned ready-to-use oral solution labeling", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e6dbda02-779e-420c-893d-d0fea09432be"},{"label": "DailyMed. Qbrelis oral solution labeling", "href": "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9f6e4e57-a489-4b36-b093-b93865d3717c"}],questionBank:chronicHeartFailureQuestionBank};
