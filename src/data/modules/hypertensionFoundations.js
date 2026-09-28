import { hypertensionFoundationsQuestionBank } from "@/data/questionBanks/hypertensionFoundations";

export const hypertensionFoundationsModule = {
  slug: "hypertension-foundations-chronic-therapy",
  number: "21",
  title: "Hypertension Foundations and Chronic Therapy",
  source: "2025 adult blood pressure guidance, standardized measurement, risk-based treatment, and longitudinal control",
  description: "Build chronic hypertension care from accurate measurement, confirmed averages, cardiovascular and kidney risk, active lifestyle treatment, evidence-based first-line medicines, complementary combinations, and monitoring that patients can sustain.",
  topics: ["Measurement and diagnosis", "Risk and targets", "Lifestyle therapy", "First-line medicines", "Beta-blocker product safety", "Central agonist safety", "Direct vasodilators", "Thiazide product safety", "Dihydropyridine product safety", "Non-DHP cardiac safety", "RAAS product safety", "ARB product selection", "Combination and comorbidity", "Mineralocorticoid antagonists", "Monitoring and access"],
  outcomes: [
    "Perform and interpret standardized office and home blood pressure measurement.",
    "Use blood pressure category, cardiovascular disease, CKD, diabetes, and PREVENT risk to guide treatment initiation.",
    "Write measurable lifestyle prescriptions rather than generic advice.",
    "Select and monitor thiazide and thiazide-like diuretics, ACE inhibitors or ARBs, and long-acting calcium-channel blockers.",
    "Apply indication-specific MRA exclusions, formulation rules, and early monitoring.",
    "Use single-pill combination and team-based care to reduce therapeutic inertia and treatment burden.",
  ],
  submodules: [
    {
      slug: "standardized-blood-pressure-measurement",
      title: "Standardized Measurement and Diagnosis",
      summary: "Blood pressure is a variable signal. Preparation, device validation, cuff size, posture, arm position, repetition, and measurement setting determine whether the average is clinically trustworthy.",
      concepts: ["Patient preparation", "Validated upper-arm cuff", "Repeated averages", "White-coat and masked hypertension", "Secondary and medication causes"],
      visual: "htn-measurement",
      application: "Do not diagnose treatment failure until technique, device, cuff size, timing, adherence, and outside-office pattern are verified.",
      lesson: [
        { heading: "Prepare before measuring", body: "For routine measurement, avoid smoking, caffeine, alcohol, and exercise for 30 minutes and empty the bladder. Rest quietly for at least five minutes with back supported, feet flat, legs uncrossed, and the bare arm supported at heart level. Do not talk. Record pain or other circumstances that may affect interpretation." },
        { heading: "Use a validated device and correct cuff", body: "An automated, validated upper-arm device with a cuff bladder appropriate for arm circumference is preferred. A cuff that is too small can overestimate pressure. Wrist devices require careful positioning, and cuffless watches should not be relied on for clinical decisions until accuracy is established." },
        { heading: "Average repeated readings", body: "For routine office classification, average at least two careful readings on at least two occasions. Use home or ambulatory monitoring to confirm suspected hypertension. Record both averages; do not select only the highest or lowest result. An acute emergency follows its own assessment pathway." },
        { heading: "Find white-coat and masked patterns", body: "In untreated adults, white-coat hypertension means high office pressure with outside-office averages below the applicable threshold; merely lower readings are insufficient. Masked hypertension means the reverse. In treated adults, the corresponding terms are white-coat effect and masked uncontrolled hypertension. Interpret home, awake ambulatory, and full-day ambulatory averages using their setting-specific thresholds." },
        { heading: "Match the threshold to the measurement setting", body: "The 2025 guideline gives corresponding averages rather than a fixed correction to subtract from every office reading. Office 140/90 mm Hg corresponds approximately to home or daytime ambulatory 135/85, nighttime ambulatory 120/70, and 24-hour ambulatory 130/80. At office 130/80, the corresponding home and daytime values are also 130/80, while nighttime is 110/65 and 24-hour is 125/75. These observational correspondences guide interpretation; they are not individual conversion formulas or universal treatment targets." },
        { heading: "Establish the baseline before selecting treatment", body: "At diagnosis, obtain a blood count, electrolytes, creatinine with estimated filtration rate, lipids, glucose or A1c, TSH, urinalysis, urine albumin-to-creatinine ratio, and ECG. Use these findings to assess risk, organ involvement, and medication safety. Additional testing follows suspected secondary causes; routine tests do not replace the history and examination." },
        { heading: "Look for a cause that changes the plan", body: "Abrupt onset, severe or resistant pressure, early age, hypokalemia, kidney decline, episodic symptoms, or an unusual treatment response should trigger a focused secondary-cause review. Kidney disease, primary aldosteronism, sleep apnea, renovascular disease, thyroid or adrenal disorders, and pressure-raising medicines or substances require targeted evaluation rather than reflexive dose escalation." },
      ],
      keyPoints: ["Technique is part of diagnosis.", "Correct cuff size is mandatory.", "Use averages rather than isolated values.", "Outside-office data reveal white-coat and masked patterns."],
      check: { question: "Which cuff error most commonly produces a falsely high reading?", choices: ["Using a cuff that is too small for the arm", "Supporting the arm at heart level", "Allowing quiet rest before measurement", "Averaging repeated readings"], answer: 0, rationale: "An undersized cuff requires excessive pressure to occlude the artery and can overestimate blood pressure.", reviewHref: "#standardized-blood-pressure-measurement" },
    },
    {
      slug: "blood-pressure-risk-and-targets",
      title: "Classification, Cardiovascular Risk, and Treatment Targets",
      summary: "The 2025 United States framework retains standard blood pressure categories and adds PREVENT-based risk to primary-prevention medication decisions.",
      concepts: ["Blood pressure categories", "Cardiac output and vascular resistance", "PREVENT risk", "Clinical cardiovascular disease and CKD", "Goal below 130/80 with individual considerations"],
      visual: "htn-risk-goal",
      application: "Use the average pressure and total risk profile together. A threshold starts a decision, while tolerance, frailty, pregnancy, perfusion, and goals shape implementation.",
      lesson: [
        { heading: "Classify from the average", body: "Normal is below 120 systolic and below 80 diastolic. Elevated is 120 to 129 systolic with diastolic below 80. Stage 1 is 130 to 139 systolic or 80 to 89 diastolic. Stage 2 begins at 140 systolic or 90 diastolic. Assign the higher category when the numbers differ: an average of 126/92 is stage 2 because of the diastolic value. These categories describe nonpregnant adults." },
        { heading: "Connect the number to physiology", body: "Arterial pressure reflects cardiac output multiplied by systemic vascular resistance. Stroke volume, heart rate, venous return, vascular tone, sodium balance, kidney signaling, and neurohormonal systems can therefore reach the same measured pressure through different paths. Pulse pressure and an approximate mean arterial pressure add context but do not replace systolic and diastolic assessment." },
        { heading: "Start treatment by pressure and risk", body: "Medication plus lifestyle is recommended when average systolic pressure is at least 140 or diastolic is at least 90 mm Hg. The threshold is systolic at least 130 or diastolic at least 80 with clinical cardiovascular disease, prior stroke, diabetes, CKD, or PREVENT ten-year total cardiovascular risk of at least 7.5%. Either pressure component can qualify; both need not be elevated." },
        { heading: "Use the right risk estimate", body: "For this blood-pressure decision, use PREVENT ten-year total cardiovascular risk, which includes heart failure, rather than substituting an ASCVD-only score. The equations are validated for ages 30 to 79. Do not enter a false age to obtain a score outside that range; use clinical assessment and goals of care. Known CVD, diabetes, or CKD already supplies a treatment indication at the lower pressure threshold." },
        { heading: "Use lifestyle first when lower risk allows", body: "For lower-risk stage 1 hypertension, a three- to six-month lifestyle trial can precede medication when clinically appropriate. If average systolic remains at least 130 or diastolic at least 80 mm Hg after that interval, the 2025 guideline recommends adding medication. Continue lifestyle treatment alongside it." },
        { heading: "Discuss more intensive systolic control", body: "The 2025 guideline supports systolic below 130 mm Hg and encourages below 120 when feasible, with stronger evidence in higher-risk adults. Individualize intensity using reliable averages, tolerance, life expectancy, and preferences. Monitor symptoms, kidney function, and electrolytes; this chronic-care goal must not be transferred to acute stroke or another emergency." },
        { heading: "Treat toward protection and tolerance", body: "The overarching adult goal is below 130 over 80, with additional considerations for institutional care, limited predicted lifespan, pregnancy, orthostasis, and treatment burden. A target is unsafe if it produces syncope, ischemia, kidney hypoperfusion, or unacceptable adverse effects." },
      ],
      keyPoints: ["Category uses either systolic or diastolic threshold.", "PREVENT risk guides stage 1 decisions.", "Stage 2 generally needs prompt medication.", "The goal must remain clinically tolerated."],
      check: { question: "Under the 2025 AHA/ACC guideline, which risk estimate supports medication in an eligible primary-prevention adult with average systolic pressure at least 130 or diastolic pressure at least 80 mm Hg?", choices: ["PREVENT ten-year total cardiovascular risk at least 7.5 percent", "PREVENT thirty-year total cardiovascular risk at least 7.5 percent", "Pooled Cohort Equations ten-year ASCVD risk at least 7.5 percent", "PREVENT ten-year heart-failure risk at least 7.5 percent"], answer: 0, rationale: "This recommendation uses PREVENT ten-year total cardiovascular risk. A different time horizon, endpoint or calculator is not interchangeable. Other clinical indications can support treatment independently of this risk estimate.", reviewHref: "#blood-pressure-risk-and-targets" },
    },
    {
      slug: "lifestyle-blood-pressure-therapy",
      title: "Lifestyle Therapy as a Measurable Prescription",
      summary: "Nutrition, sodium, potassium, activity, weight, alcohol, sleep, stress, and structural access all influence blood pressure and medication response.",
      concepts: ["DASH-like dietary pattern", "Sodium and potassium", "Physical activity and weight", "Alcohol, sleep, stress, and access"],
      visual: "htn-lifestyle",
      application: "Write one behavior, dose, frequency, barrier, support, and follow-up metric rather than telling a patient simply to eat better and exercise.",
      lesson: [
        { heading: "Build a heart-healthy eating pattern", body: "A DASH-like pattern emphasizes vegetables, fruits, whole grains, legumes, nuts, and appropriate low-fat dairy while limiting excess sodium, refined foods, and saturated fat. Adapt the pattern to culture, food access, kidney function, diabetes, and patient preference." },
        { heading: "Reduce sodium and individualize potassium", body: "Lowering excess sodium supports pressure control, especially in salt-sensitive states. Dietary potassium can help many adults but can be dangerous with advanced kidney disease, hyperkalemia, or potassium-raising medicines. Salt substitutes require explicit review." },
        { heading: "Prescribe sustainable activity", body: "Regular aerobic activity, supplemented by resistance work and reduced sedentary time, can lower pressure and total risk. Start from ability and symptoms. Chest pain, syncope, severe uncontrolled pressure, or unstable disease requires clinician assessment before progression." },
        { heading: "Set numerical goals with safety limits", body: "Aim for dietary sodium below 2,300 mg/day, progressing toward below 1,500 when appropriate. Severe symptomatic orthostatic hypotension can change that advice. A dietary potassium goal of 3,500 to 5,000 mg/day requires kidney, potassium, and medication review; it is not a supplement prescription. CKD or potassium-retaining drugs require an individualized plan and monitoring." },
        { heading: "Turn weight and activity goals into a plan", body: "For overweight or obesity, the guideline recommends at least 5% weight reduction. An illustrative 90 kg starting weight makes 5% equal to 4.5 kg; pressure response varies. A prevention-oriented activity goal is at least 150 minutes of moderate activity weekly plus resistance exercise on two or more days, adapted to ability and clinical stability." },
        { heading: "Discuss alcohol and stress directly", body: "For adults who drink, the guideline favors abstinence or reduction to no more than one daily drink for women or two for men. These are ceilings, not a reason to start drinking. Breathing exercises, meditation, or yoga may support pressure management alongside established lifestyle and medication treatment." },
        {"heading": "Separate supplement claims from clinical outcomes", "body": "Garlic and fish-oil supplements may produce small blood-pressure reductions, but that does not establish that every product prevents heart attack or stroke. They do not replace indicated antihypertensives. Coenzyme Q10 is not an established hypertension treatment; NCCIH describes little evidence of meaningful pressure benefit. Review the exact product, purpose and evidence before recommending it."},
        {"heading": "Review supplement harms and interactions", "body": "Garlic supplements can increase bleeding risk, especially with anticoagulants or aspirin and around surgery. Fish-oil counseling depends on the product, dose and antithrombotic regimen; possible platelet effects do not mean every user will have clinically important bleeding. Review warfarin monitoring when supplements change. Coenzyme Q10 can also interact with warfarin."},
        {"heading": "Do not infer benefit from a plausible mechanism", "body": "L-arginine is involved in nitric-oxide synthesis, but this mechanism does not prove cardiovascular protection. In the VINTAGE MI randomized trial after acute myocardial infarction, supplementation did not improve the measured vascular or ventricular outcomes and raised a mortality concern. Do not recommend it following acute myocardial infarction."},
        {"heading": "Review prescribed and over-the-counter contributors", "body": "Ask about NSAIDs, oral decongestants, stimulants, MAO inhibitors, SNRIs, tricyclic antidepressants, systemic corticosteroids and estrogen-containing contraceptives. Also review cyclosporine and cancer therapies such as bevacizumab or selected tyrosine kinase inhibitors. Match starts and dose changes to the pressure trend; a medication list alone does not establish causality."},
        {"heading": "Plan changes with the treating clinician", "body": "Review missed doses as well as new medicines: abrupt clonidine or tizanidine withdrawal can raise pressure. Coordinate tapering or substitution with the prescriber. When an essential medicine remains the best option, treating the hypertension may be safer than stopping that therapy. Include the relevant specialist when changing cancer or transplant treatment."},
        {"heading": "Ask about products that raise pressure", "body": "Include teas, candies, energy or weight-loss products and sexual-performance supplements in the history. Actual licorice containing glycyrrhizin can cause serious cardiovascular harm; licorice flavor alone does not identify the ingredient. Ma huang is ephedra, and ephedrine-alkaloid supplements are banned in the United States because of serious risks. Yohimbe or yohimbine can cause hypertension and tachycardia. Record ingredients and exposure rather than assuming natural products are harmless."},
        { heading: "Address the environment around behavior", body: "Weight, alcohol, sleep apnea, stress, tobacco exposure, medications, work schedules, neighborhood safety, and food access affect pressure. Team care and community resources make lifestyle treatment more realistic than advice detached from context." },
      ],
      keyPoints: ["Lifestyle therapy has a dose and follow-up.", "Potassium advice requires kidney and regimen review.", "Activity should be progressive and sustainable.", "Structural barriers are clinical variables."],
      check: { question: "Which patient requires the most caution before increasing dietary potassium or using a potassium salt substitute?", choices: ["A patient with CKD taking an ACE inhibitor and spironolactone", "A patient with normal kidney function and no medicines", "A patient using a validated blood pressure cuff", "A patient walking three times weekly"], answer: 0, rationale: "CKD plus multiple potassium-raising medicines creates substantial hyperkalemia risk.", reviewHref: "#lifestyle-blood-pressure-therapy" },
    },
    {
      "slug": "first-line-antihypertensive-therapy",
      "title": "First-Line Antihypertensive Medicines",
      "summary": "Thiazide and thiazide-like diuretics, ACE inhibitors or ARBs, and long-acting dihydropyridine calcium-channel blockers form the central first-line pathways, with product and comorbidity-specific selection.",
      "concepts": [
        "Thiazide and thiazide-like diuretics",
        "ACE inhibitors and ARBs",
        "Dihydropyridine CCBs",
        "Class-specific monitoring"
      ],
      "visual": "htn-first-line",
      "application": "Choose a mechanism that fits the patient's comorbidity and baseline labs, then define the first response and safety check before prescribing.",
      "lesson": [
        {
          "heading": "Distinguish the diuretics",
          "body": "Hydrochlorothiazide is a thiazide; chlorthalidone and indapamide are thiazide-like. All inhibit distal NCC. The guideline groups them as thiazide-type, but their duration and potency differ: do not substitute equal milligram doses automatically. Monitor sodium, potassium, magnesium, kidney function, uric acid when relevant, glucose context, volume symptoms, lithium, and NSAID exposure."
        },
        {
          "heading": "Use one RAAS blocker, not dual blockade",
          "body": "ACE inhibitors reduce angiotensin II formation and bradykinin breakdown, while ARBs block AT1 receptors. Both can raise potassium and creatinine and cause hypotension. ACE inhibitors can cause cough and angioedema. Do not combine an ACE inhibitor, ARB, or direct renin inhibitor with another of these classes for hypertension; the harm warning is not limited to CKD."
        },
        {
          "heading": "Use long-acting dihydropyridine calcium-channel blockers",
          "body": "Amlodipine and related agents reduce arteriolar resistance. When edema is attributable to the DHP, it reflects precapillary dilation rather than primary total-body sodium excess and may not respond well to a loop diuretic. Evaluate other causes of swelling before assigning that mechanism. Headache, flushing, gingival overgrowth, and interaction profiles vary by product."
        },
        {
          "heading": "Do not treat beta blockers as universal first line",
          "body": "Beta blockers are appropriate when another indication such as selected coronary disease, heart failure, or rate control is present, but they are not interchangeable and are not the default uncomplicated first-line class. Selection must follow the exact comorbidity and product evidence."
        }
      ],
      "keyPoints": [
        "First-line classes are not interchangeable.",
        "RAAS blockade requires potassium and kidney monitoring.",
        "DHP edema is not simple fluid overload.",
        "Beta blockers need a product-specific indication."
      ],
      "check": {
        "question": "Which regimen uses two complementary first-line pathways without dual RAAS blockade?",
        "choices": [
          "Lisinopril plus losartan",
          "Losartan plus amlodipine",
          "Lisinopril plus aliskiren",
          "Losartan plus aliskiren"
        ],
        "answer": 1,
        "rationale": "An ARB and a long-acting DHP calcium-channel blocker act through different pathways. Combining RAAS blockers adds risk; each component still needs eligibility and safety review.",
        "reviewHref": "#first-line-antihypertensive-therapy"
      }
    },
    {
      "slug": "beta-blocker-product-selection-safety",
      "title": "Beta Blockers: Indication, Formulation and Safety",
      "summary": "Choose the beta blocker for the clinical indication, then verify dose, delivery and cardiac tolerance.",
      "concepts": [
        "Indication-specific selection",
        "Tablet and capsule delivery",
        "Dose conversion",
        "Conduction and withdrawal"
      ],
      "visual": "htn-beta",
      "application": "Confirm the clinical reason for treatment before choosing the formulation and follow-up plan.",
      "lesson": [
        {
          "heading": "Do not treat beta blockers as universal first line",
          "body": "Beta blockers are appropriate when another indication such as selected coronary disease, heart failure, or rate control is present, but they are not interchangeable and are not the default uncomplicated first-line class. Selection must follow the exact comorbidity and product evidence."
        },
        {"heading": "Connect receptor effects to clinical risk", "body": "Metoprolol preferentially blocks beta-1 receptors, slowing sinus rate and AV conduction. Reduced cardiac output and suppression of renin activity are proposed contributors to blood-pressure lowering. Beta-1 selectivity is relative: at higher exposure, beta-2 blockade increases, including in bronchial smooth muscle."},
        {"heading": "Preserve the airway safety boundary", "body": "When beta blockade is necessary in bronchospastic disease, a cardioselective agent may be preferred, but it is not risk-free. Toprol-XL labeling allows cautious use when other antihypertensives fail or are not tolerated, using the lowest possible dose with bronchodilator treatment readily available. New wheezing or breathing difficulty requires assessment. CYP2D6 inhibitors such as fluoxetine or paroxetine can increase metoprolol exposure and reduce selectivity; monitor closely when the combination cannot be avoided."},
        {"heading": "Choose the beta blocker with outcome evidence", "body": "For HFrEF, the guideline identifies bisoprolol, carvedilol and metoprolol succinate as the beta blockers with demonstrated mortality and hospitalization benefit. Agents with intrinsic sympathomimetic activity, including acebutolol and pindolol, are generally avoided in coronary heart disease or heart failure. Partial agonist activity does not substitute for outcome evidence or an appropriate initiation regimen."},
        {
          "heading": "Plan beta blocker safety",
          "body": "For metoprolol succinate extended-release, monitor pulse and conduction, especially with other rate-slowing drugs. Elective discontinuation of chronic therapy generally requires a supervised taper over one to two weeks; abrupt withdrawal can provoke ischemia. Severe bradycardia can require prompt reduction or stopping under clinical care, so a routine taper rule must not delay urgent assessment."
        },
        {"heading": "Plan for low glucose without a fast pulse", "body": "Beta blockers can hide an early warning sign of hypoglycemia, particularly tachycardia, and can increase the risk of severe or prolonged episodes. Risk is especially important with diabetes, in children, and during fasting, vomiting or irregular food intake. A normal pulse does not exclude low glucose. Arrange monitoring and a response plan for the patient or caregiver; severe hypoglycemia requires emergency treatment."},
        {"heading": "Make the Toprol-XL routine explicit", "body": "Take Toprol-XL regularly, preferably with or immediately after a meal. If a dose is missed, take the next scheduled dose without doubling. Do not interrupt chronic treatment without a supervised plan. Learn how the medicine affects alertness before driving, and report difficulty breathing or signs of worsening heart failure such as increasing breathlessness or weight gain."},
        {"heading": "Discuss sexual symptoms without abrupt withdrawal", "body": "Beta blockers, including metoprolol, may contribute to erectile dysfunction. Ask about timing, other medicines and other possible causes. Discuss treatment options with the prescriber; a new sexual symptom does not justify suddenly stopping chronic beta blockade."},
        {
          "heading": "Match Toprol-XL to the prescription",
          "body": "For adult hypertension, Toprol-XL starts at 25 to 100 mg once daily, with adjustment at weekly or longer intervals. Doses above 400 mg/day have not been studied; this is not a routine dose target. Its scored tablets may be halved, but neither halves nor whole tablets should be chewed or crushed. When converting immediate-release metoprolol for hypertension, use the same total daily dose of Toprol-XL and reassess response."
        },
        {"heading": "Keep immediate-release metoprolol distinct", "body": "The reviewed metoprolol tartrate tablet label starts adult hypertension treatment at 100 mg/day in one or divided doses, with weekly or slower adjustment. Its effective range is 100 to 450 mg/day; doses above 450 mg/day have not been studied. Check pressure near the next dose because a once-daily regimen may not last 24 hours. Take with or immediately after meals; after a missed dose, take only the next scheduled dose without doubling. These are hypertension instructions, not an acute-MI regimen."},
        {
          "heading": "Titrate carvedilol for the actual indication",
          "body": "Carvedilol tablets for hypertension start at 6.25 mg twice daily with food. If needed and tolerated, increase to 12.5 mg twice daily, then 25 mg twice daily, allowing 7 to 14 days at each step. Assess trough pressure and standing pressure about one hour after dosing. The hypertension ceiling is 50 mg/day; do not import a higher heart-failure dose or a post-MI titration interval."
        },
        {
          "heading": "Separate stable heart failure from unsafe initiation",
          "body": "A chronic heart-failure indication does not justify starting carvedilol during cardiogenic shock or decompensation requiring IV inotropes. Severe hepatic impairment and bronchial asthma are also labeled contraindications. Review conduction disease, pulse, volume status and the exact product before selecting a beta blocker."
        },
        {
          "heading": "Convert Coreg CR with its table",
          "body": "Coreg CR is taken each morning with food. For hypertension, start at 20 mg daily; titrate to 40 then 80 mg at 7-to-14-day intervals if needed and tolerated. The conversion table maps carvedilol twice-daily doses of 3.125, 6.25, 12.5 and 25 mg to CR doses of 10, 20, 40 and 80 mg daily. Older or hypotension-prone patients may need a lower conversion start; reassess before titration."
        },
        {
          "heading": "Preserve Coreg CR release",
          "body": "Swallow intact or sprinkle all beads onto non-warm applesauce and consume immediately. Do not crush, chew, divide the contents or save the mixture. Other foods were not tested."
        },
        {
          "heading": "Use Kapspargo Sprinkle instructions",
          "body": "Swallow the capsule whole, or sprinkle all contents onto a teaspoonful of applesauce, pudding or yogurt and swallow within 60 minutes. Do not save the mixture. The label supports replacing 25 to 200 mg/day metoprolol succinate extended-release tablets with the same daily capsule dose. This capsule is unsuitable when initial heart-failure therapy requires less than 25 mg/day."
        },
        {
          "heading": "Check feeding-tube delivery",
          "body": "For Kapspargo, place capsule contents in an all-plastic oral-tip syringe with 15 mL water; gently shake about ten seconds. Deliver promptly through a nasogastric tube at least 12 French, rinsing with more water if needed to deliver remaining pellets. Do not transfer this method to other extended-release products."
        },
        {"heading": "Use the acute-care pathway for IV beta blockade", "body": "Esmolol and IV labetalol require indication-specific dosing and monitored response. Esmolol tachycardia and perioperative hypertension have different infusion limits; an oral hypertension range does not define either. See the cardiovascular emergencies and intravenous drug safety lessons in Hypertensive Emergencies. The cited labetalol injection label contraindicates concurrent nondihydropyridine calcium-channel antagonists without limiting that interaction to IV formulations."},
        {"heading": "Do not overinterpret pindolol ISA", "body": "Pindolol is a nonselective beta blocker with partial agonist activity. Less resting pulse reduction does not establish safety in heart failure, heart block or bronchospasm. For hypertension, start at 5 mg twice daily. If response is inadequate after three to four weeks, the label permits increases of 10 mg/day at those intervals, to a maximum total of 60 mg/day. Do not apply a universal weekly titration rule."},
        {"heading": "Use the oral timolol regimen", "body": "Timolol tablets usually start at 10 mg twice daily for hypertension. Usual maintenance totals 20 to 40 mg/day; the maximum is 60 mg/day in two doses, with at least seven days between increases. These are oral instructions, not eye-drop doses. Bronchial asthma or its history, severe COPD, sinus bradycardia and second- or third-degree AV block are among the labeled contraindications."},
        {"heading": "Titrate oral labetalol separately", "body": "Oral labetalol starts at 100 mg twice daily; usual maintenance is 200 to 400 mg twice daily. Standing-pressure tolerance guides increases of 100 mg twice daily every two to three days. Severe hypertension may require 1,200 to 2,400 mg/day; dividing the same daily total into three doses can improve high-dose tolerability. This is not an IV emergency schedule."},
        {"heading": "Recognize labetalol liver injury", "body": "Labetalol can rarely cause severe hepatocellular injury, including fatal cases. Arrange periodic hepatic laboratory assessment and prompt testing for jaundice, dark urine, pruritus or unexplained systemic symptoms. The reviewed label directs stopping and not restarting if laboratory evidence of liver injury or jaundice develops; urgently assess the cause and replacement treatment."},
        {"heading": "Start propranolol with the release form", "body": "Immediate-release propranolol hypertension dosing usually starts at 40 mg twice daily, with a usual maintenance total of 120 to 240 mg/day. The label describes occasional need for 640 mg/day; that is not the usual target. Check pressure near the end of the dosing interval when control fades. A changed dose or three-times-daily schedule requires reassessment, not automatic escalation from a single reading."},
        {"heading": "Distinguish Inderal LA from tablets", "body": "Inderal LA starts at 80 mg once daily for hypertension; usual maintenance is 120 to 160 mg daily, with occasional higher dosing described up to 640 mg/day. The label explicitly rejects simple milligram-for-milligram substitution for immediate-release tablets because exposure differs. Retitration and assessment near the end of the 24-hour interval may be needed."},
        {"heading": "Use the Inderal XL bedtime regimen", "body": "Inderal XL starts at 80 mg once daily at bedtime and may increase to 120 mg. Higher doses do not add blood-pressure benefit. Keep administration consistently with food or consistently fasting; full response usually takes two to three weeks. Its schedule and dose limit cannot be borrowed from Inderal LA or immediate-release propranolol."},
        {"heading": "Extend nadolol intervals when clearance falls", "body": "Nadolol usually starts at 40 mg daily for hypertension; usual maintenance is 40 or 80 mg, although some patients require up to 320 mg/day. Renal adjustment changes the interval: the label lists every 24 hours for creatinine clearance above 50 mL/min/1.73 m2, every 24 to 36 hours at 31 to 50, every 24 to 48 hours at 10 to 30, and every 40 to 60 hours below 10. Confirm the renal estimate and write an explicit schedule rather than retaining daily dosing by default."},
        {"heading": "Use bisoprolol organ-function dosing", "body": "For hypertension, bisoprolol usually starts at 5 mg daily, increasing to 10 then 20 mg if needed. Some patients need 2.5 mg initially. Start at 2.5 mg with cautious titration when creatinine clearance is below 40 mL/min or with hepatitis or cirrhosis. The label does not call for a replacement dose after dialysis. This hypertension schedule must not replace an indication-specific heart-failure initiation plan."},
        {"heading": "Distinguish acebutolol maintenance from initiation", "body": "Acebutolol hypertension treatment starts at 400 mg/day, once daily or divided when needed for full-day control. Usual response occurs at 400 to 800 mg/day, although some patients use 200 mg. Inadequately controlled patients may require 1,200 mg/day divided twice daily or another agent. Avoid more than 800 mg/day in older adults. Renal elimination of the active metabolite matters: reduce the daily dose by 50% below creatinine clearance 50 mL/min, and by 75% below 25 mL/min. A reduction by 75% leaves one-quarter of the original dose; verify a feasible product and schedule."},
        {"heading": "Keep oral betaxolol dosing distinct", "body": "Oral betaxolol usually starts at 10 mg daily, increasing to 20 mg after 7 to 14 days if needed. Higher doses have not shown significant additional pressure reduction and can further slow the pulse. Severe renal impairment or dialysis calls for 5 mg daily initially, increasing by 5 mg at two-week intervals to at most 20 mg/day. Consider a 5 mg start in older adults. Hepatic disease does not routinely require adjustment. These are tablet instructions, not ophthalmic dosing."},
        {"heading": "Adjust atenolol for renal clearance", "body": "Atenolol usually starts at 50 mg daily for hypertension; assess the full response after one to two weeks before increasing to 100 mg. Higher hypertension doses are unlikely to add benefit. Some older or renally impaired patients need a 25 mg start with a trough-pressure check. The label limits daily dosing to 50 mg at creatinine clearance 15 to 35 mL/min/1.73 m2 and 25 mg below 15. Its hemodialysis schedule is 25 or 50 mg after dialysis under hospital supervision because marked hypotension can occur."},
        {"heading": "Lower nebivolol initiation when needed", "body": "Nebivolol usually starts at 5 mg daily, increasing at two-week intervals to at most 40 mg if needed. Start at 2.5 mg daily and titrate slowly with creatinine clearance below 30 mL/min or moderate hepatic impairment. Dialysis has not been studied. Severe hepatic impairment is a contraindication, even though the dosing section uses the weaker phrase not recommended."},
        {"heading": "Monitor carvedilol with digoxin", "body": "Carvedilol can raise digoxin concentrations, while both drugs slow AV conduction. Increase digoxin monitoring when carvedilol is started, adjusted or stopped, and assess pulse and symptoms. A satisfactory blood-pressure response does not rule out excessive digoxin exposure or bradycardia."},
        {"heading": "Coordinate carvedilol with transplant therapy", "body": "Starting carvedilol can increase cyclosporine concentrations. Arrange close levels and individualized adjustment with the transplant team. The average dose reduction reported in a study is not an automatic reduction for every patient; some participants required no adjustment."},
        {"heading": "Check additive and metabolic slowing", "body": "Amiodarone can increase carvedilol exposure and amplify bradycardia or heart block. Follow pulse and conduction when either is added. With verapamil or diltiazem, monitor ECG and blood pressure. CYP2D6 inhibitors may increase carvedilol exposure, whereas rifampin can decrease it; review changes in the full regimen."},
        {"heading": "Review propranolol across metabolic pathways", "body": "Propranolol interactions are not limited to CYP2D6. Its labeling also identifies CYP1A2 and CYP2C19 pathways. Inhibitors such as fluoxetine, ciprofloxacin or fluconazole can increase exposure; rifampin can lower it. Review the specific combination, pulse, pressure and symptoms when another medicine is started or stopped. Digoxin adds bradycardia risk through slowed AV conduction; do not assume that every beta blocker has the same effect on digoxin concentrations."},
        {"heading": "Review nebivolol interactions separately", "body": "CYP2D6 inhibitors increase nebivolol exposure and may require dose reduction. A statement that genetic poor metabolizers need no routine dose adjustment does not waive this interaction warning. Review the actual regimen and follow pressure, pulse and symptoms."}
      ],
      "keyPoints": [
        "Dose conversion depends on the exact product.",
        "Modified-release contents need product-specific handling.",
        "Assess pulse, conduction and clinical stability.",
        "Plan elective withdrawal with the treating clinician."
      ],
      "check": {
        "question": "Why does a formulation switch require reviewing the full prescription?",
        "choices": [
          "All release systems use identical doses",
          "Only the brand name changes",
          "Frequency and handling can change with the formulation",
          "Follow-up becomes unnecessary"
        ],
        "answer": 2,
        "rationale": "A shared ingredient does not establish an identical dose, schedule or delivery method.",
        "reviewHref": "#beta-blocker-product-selection-safety"
      }
    },
    {
      "slug": "raas-product-selection-safety",
      "title": "RAAS Inhibitors: Product Selection and Safety",
      "summary": "Apply the exact ACE inhibitor, ARB or direct renin inhibitor regimen, with attention to kidney function, potassium, angioedema and formulation.",
      "concepts": [
        "RAAS and bradykinin",
        "Renal dose adjustment",
        "Angioedema and washouts",
        "Product administration"
      ],
      "visual": "htn-raas",
      "application": "Confirm eligibility and formulation, calculate the dose, and plan laboratory and symptom follow-up before changing therapy.",
      "lesson": [
        {
          "heading": "Use one RAAS blocker, not dual blockade",
          "body": "ACE inhibitors reduce angiotensin II formation and bradykinin breakdown, while ARBs block AT1 receptors. Both can raise potassium and creatinine and cause hypotension. ACE inhibitors can cause cough and angioedema. Do not combine an ACE inhibitor, ARB, or direct renin inhibitor with another of these classes for hypertension; the harm warning is not limited to CKD."
        },
        {
          "heading": "Individualize lisinopril initiation",
          "body": "For adult hypertension, the cited lisinopril label starts at 10 mg daily, or 5 mg with a diuretic; the usual maintenance range is 20 to 40 mg/day. Kidney impairment changes the initial dose: creatinine clearance 10 to 30 mL/min calls for half the usual starting dose, while clearance below 10 or hemodialysis calls for 2.5 mg. Assess volume, pressure, potassium, and kidney response before titration."
        },
        {
          "heading": "Check ACE inhibitor exclusions",
          "body": "Lisinopril is contraindicated after ACE inhibitor-related angioedema and in hereditary or idiopathic angioedema. Separate it from sacubitril/valsartan by at least 36 hours in either direction. Do not combine it with aliskiren in diabetes. Stop promptly when pregnancy is detected and arrange replacement care; a washout does not remove other contraindications."
        },
        {"heading": "Turn adverse-effect recognition into an action plan", "body": "Explain that persistent troublesome cough warrants review; do not dismiss every new cough as the medicine. Swelling of the lips, tongue or throat, hoarseness, or difficulty swallowing or breathing needs immediate assessment for angioedema. Breathing difficulty or airway swelling is an emergency. Stop the suspected ACE inhibitor and obtain urgent care rather than waiting for the next blood-pressure visit."},
        {
          "heading": "Distinguish ACE inhibitor and ARB angioedema histories",
          "body": "Do not restart an ACE inhibitor after ACE inhibitor-related angioedema. The 2025 hypertension guideline permits consideration of an ARB beginning six weeks after the ACE inhibitor was stopped; it advises against ARBs after ARB-related angioedema. This differs from a blanket ban on every RAAS inhibitor after any such reaction. Review the individual benefit and risk: losartan labeling reports angioedema, including in patients with prior ACE inhibitor reactions. Counsel about recurrence and urgent assessment for tongue or throat swelling or breathing difficulty. The six-week interval does not make the risk zero and is separate from the 36-hour washout between an ACE inhibitor and an ARNI."
        },
        {"heading": "Identify Qbrelis before measuring lisinopril", "body": "Qbrelis is ready-to-use lisinopril solution, 1 mg/mL. Store tightly closed at 20 to 25\u00b0C, protected from freezing and excessive heat. Do not apply another liquid product\u2019s refrigeration, dilution or compounding instructions. Confirm the dispensed concentration and measure the prescribed dose with an oral dosing device."},
        {"heading": "Apply the pediatric lisinopril limits", "body": "For patients at least six years old with GFR above 30 mL/min/1.73 m\u00b2, the Qbrelis label starts at 0.07 mg/kg once daily, capped at 5 mg initially. Titration depends on response, up to 0.61 mg/kg or 40 mg daily, whichever is lower. It is not recommended below age six or with pediatric GFR below 30. For an eligible 30 kg child, the calculated start is 2.1 mg, or 2.1 mL at 1 mg/mL; do not substitute an adult starting dose."},
        {
          "heading": "Use the current Epaned formulation",
          "body": "The reviewed Epaned product is a ready-to-use enalapril maleate solution, 1 mg/mL. Do not reconstitute it using instructions for an older powder product. Adult hypertension starts at 5 mg daily, or 2.5 mg with a diuretic; titrate to at most 40 mg/day. Divided dosing may address an end-of-interval decline in effect."
        },
        {
          "heading": "Adjust and measure enalapril carefully",
          "body": "Epaned starts at 2.5 mg/day when creatinine clearance is 30 mL/min or less; on dialysis days give the dose after hemodialysis. At 1 mg/mL, 2.5 mg equals 2.5 mL. Keep tightly closed and refrigerated at 2 to 8 degrees C. Patients may keep it at 20 to 25 degrees C for up to 60 days before discarding. Avoid freezing and excessive heat."
        },
        {"heading": "Apply pediatric enalapril eligibility", "body": "For children older than one month, Epaned starts at 0.08 mg/kg once daily, capped at 5 mg initially. Adjust to response; pediatric doses above 0.58 mg/kg or 40 mg daily have not been studied. It is not recommended at one month of age or younger, before a preterm infant reaches corrected post-conceptual age 44 weeks, or with pediatric GFR below 30 mL/min/1.73 m². The adult renal starting dose is not a substitute for these pediatric restrictions."},
        {
          "heading": "Schedule captopril before meals",
          "body": "Give captopril one hour before meals. The reviewed hypertension regimen starts at 25 mg twice or three times daily and can increase after one to two weeks to 50 mg twice or three times daily. The usual hypertension dose does not exceed 50 mg three times daily; higher labeled doses require individualized reassessment, and 450 mg/day is the absolute labeled ceiling. Volume depletion or diuretic exposure may call for a smaller initial dose and close supervision."
        },
        {
          "heading": "Recognize captopril blood-count risk",
          "body": "Captopril-associated neutropenia is more concerning with renal impairment or collagen vascular disease. In renal impairment, the label calls for a baseline white-cell count with differential, roughly every two weeks for three months, then periodically. Fever or sore throat warrants prompt assessment and a blood count when infection is suspected. This safety review is additional to potassium and renal monitoring."
        },
        {
          "heading": "Match ramipril to renal function",
          "body": "Without a diuretic, ramipril hypertension treatment starts at 2.5 mg daily; maintenance is 2.5 to 20 mg/day in one or two doses. The reviewed label permits usual regimens above creatinine clearance 40 mL/min. For worse impairment, its hypertension regimen starts at 1.25 mg daily and limits the total to 5 mg/day. Suspected volume depletion also warrants a 1.25 mg start."
        },
        {
          "heading": "Use ramipril capsule contents correctly",
          "body": "Ramipril capsules may be swallowed whole or their contents mixed with about 4 ounces of applesauce, water or apple juice. Consume the whole mixture to deliver the dose. The reviewed label allows storage for up to 24 hours at room temperature or 48 hours refrigerated. Do not transfer this storage permission to extended-release CCB pellets, whose reviewed instructions require immediate use."
        },
        {
          "heading": "Use quinapril-specific titration",
          "body": "Quinapril hypertension monotherapy starts at 10 or 20 mg daily; adjust at intervals of at least two weeks using peak and trough pressure. Common maintenance totals are 20 to 80 mg/day in one or two doses. Continuing a diuretic calls for a 5 mg start with supervision. Renal function can require less: the label lists 2.5 mg as the maximum initial dose for creatinine clearance 10 to 30 mL/min and provides insufficient dosing data below 10. Review its full renal table rather than applying the general starting dose."
        },
        {
          "heading": "Check quinapril excipient interactions",
          "body": "The reviewed quinapril tablet\u2019s magnesium content can reduce tetracycline absorption when taken together. Review the exact antibiotic and dosage form, including its administration instructions, before coadministration. This interaction can arise from an excipient, so an ingredient-only list of antihypertensive effects is insufficient."
        },
        {
          "heading": "Individualize trandolapril initiation",
          "body": "The reviewed label lists initial monotherapy doses of 1 mg daily in non-Black patients and 2 mg in Black patients, followed by response-based titration at intervals of at least one week. Most patients require 2 to 4 mg/day; experience above 8 mg is limited. A continuing diuretic calls for 0.5 mg initially with close supervision. Creatinine clearance below 30 mL/min or hepatic cirrhosis also calls for a 0.5 mg daily start. Apply these patient-specific reductions before extrapolating the general regimen."
        },
        {
          "heading": "Keep enalaprilat conversion route-specific",
          "body": "Enalaprilat injection and oral enalapril are not exchanged milligram for milligram. The injection label gives a usual IV regimen of 1.25 mg every six hours and a usual conversion back to oral enalapril of 5 mg daily; renal impairment and a lower effective IV dose can require a 2.5 mg oral start. IV effects can peak up to four hours after dosing. The Hypertensive Emergencies module covers administration, susceptibility and ACE-inhibitor exclusions. Do not convert the book\u2019s wider IV dose range into routine escalation."
        },
        {
          "heading": "Individualize benazepril",
          "body": "Benazepril usually starts at 10 mg daily, or 5 mg with a diuretic. Usual maintenance is 20 to 40 mg/day in one or two doses; the label describes limited experience at 80 mg. For adults with GFR below 30 mL/min/1.73 m2, its renal dosing section starts at 5 mg daily and caps the total at 40 mg/day. Do not treat the usual range or limited higher-dose experience as interchangeable with the renal regimen."
        },
        {
          "heading": "Distinguish fosinopril renal handling",
          "body": "Fosinopril hypertension treatment starts at 10 mg daily, with usual maintenance of 20 to 40 mg/day; some patients respond further at 80 mg. Assess pressure at peak, about two to six hours after dosing, and at the 24-hour trough. Its combined kidney and hepatobiliary elimination permits usual dosing in renal impairment, but this does not eliminate monitoring for hypotension, hyperkalemia or worsening renal function. Heart-failure dosing has a separate context."
        },
        {
          "heading": "Separate fosinopril from antacids",
          "body": "The reviewed fosinopril label describes reduced absorption with an aluminum hydroxide, magnesium hydroxide and simethicone antacid. Separate administration by two hours when both are needed. Include nonprescription products in the medication history before interpreting an apparent loss of blood-pressure control."
        },
        {
          "heading": "Give moexipril before meals",
          "body": "Without a diuretic, moexipril starts at 7.5 mg once daily, one hour before meals. Its recommended range is 7.5 to 30 mg/day in one or two doses; use trough pressure to assess coverage. If a diuretic must continue, the label starts at 3.75 mg with supervision. For creatinine clearance at or below 40 mL/min/1.73 m2, it starts at 3.75 mg daily and limits treatment to 15 mg/day. A statement that doses above 60 mg were not studied does not make 60 mg the recommended target."
        },
        {
          "heading": "Apply perindopril renal limits",
          "body": "Perindopril erbumine starts at 4 mg daily for uncomplicated hypertension. Usual maintenance is 4 to 8 mg/day in one or two doses, with a 16 mg/day maximum. The reviewed label does not recommend it when creatinine clearance is below 30 mL/min; with less severe renal impairment, start at 2 mg/day and do not exceed 8 mg/day. Experience above 8 mg is limited in older adults, requiring careful titration. Keep its separate coronary-disease regimen distinct."
        },
        {"heading": "Use aliskiren deliberately", "body": "Aliskiren inhibits renin. Adult dosing starts at 150 mg daily and may increase to 300 mg; higher doses add diarrhea without better pressure control. Keep meal timing consistent because fatty meals reduce absorption. The reviewed tablets stay in their original bottle with desiccant, protected from moisture."},
        {"heading": "Screen aliskiren interactions and eligibility", "body": "Avoid cyclosporine or itraconazole with aliskiren. Combining it with an ACE inhibitor or ARB is contraindicated in diabetes and generally avoided otherwise, especially with CrCl below 60 mL/min. Monitor potassium and renal function. Stop for pregnancy or angioedema; never readminister after angioedema. Severe renal impairment lacks established safety and efficacy. Pediatric tablet labeling requires age at least six years and weight at least 50 kg; use below age two is contraindicated."}
      ],
      "keyPoints": [
        "Avoid duplicate RAAS blockade.",
        "Product and renal function determine the starting dose.",
        "Angioedema history changes eligibility.",
        "Verify liquid concentration and administration instructions."
      ],
      "check": {
        "question": "Epaned is labeled 1 mg/mL. What volume supplies a prescribed 2.5 mg dose?",
        "choices": [
          "0.25 mL",
          "1 mL",
          "2.5 mL",
          "5 mL"
        ],
        "answer": 2,
        "rationale": "2.5 mg divided by 1 mg/mL equals 2.5 mL. Use the labeled enalapril maleate concentration.",
        "reviewHref": "#raas-product-selection-safety"
      }
    },
    {
      "slug": "arb-product-selection-safety",
      "title": "ARB Products, Interactions and Follow-up",
      "summary": "Select the exact ARB regimen and recognize differences in delayed adverse effects, administration, packaging and interacting drugs.",
      "concepts": [
        "AT1 blockade",
        "Product-specific titration",
        "Delayed intestinal toxicity",
        "Storage and interactions"
      ],
      "visual": "htn-arb",
      "application": "Pair the dose with a follow-up plan for pressure, potassium, kidney function, symptoms and relevant drug levels.",
      "lesson": [
        {
          "heading": "Review ARB interactions",
          "body": "Losartan can raise lithium concentrations; arrange lithium-level monitoring when combined. NSAIDs can blunt pressure control and worsen kidney function, particularly with volume depletion, CKD, or diuretic use. Review nonprescription analgesics and monitor kidney function. Also account for potassium supplements, salt substitutes, and other potassium-raising medicines."
        },
        {"heading": "Check pediatric losartan dosing", "body": "For eligible patients at least six years old, the usual start is 0.7 mg/kg once daily, up to 50 mg initially. Adjust to response; doses above 1.4 mg/kg or 100 mg daily have not been studied in children. Use is not recommended below age six or with pediatric eGFR below 30 mL/min/1.73 m²."},
        {"heading": "Verify the compounded losartan formulation", "body": "The reviewed tablet label provides a specific 2.5 mg/mL suspension formula using its tablets, purified water, Ora-Plus and Ora-Sweet SF in an amber PET bottle. Follow the complete labeled preparation sequence; do not infer stability for another vehicle or concentration. That preparation is refrigerated at 2 to 8°C for up to four weeks, shaken before each dose, and returned promptly to refrigeration. For an eligible 30 kg child prescribed 0.7 mg/kg, 21 mg divided by 2.5 mg/mL gives 8.4 mL per daily dose."},
        {
          "heading": "Adjust losartan to the patient",
          "body": "The cited adult hypertension regimen starts at 50 mg daily and permits titration to 100 mg daily. Possible intravascular depletion or mild-to-moderate hepatic impairment supports a 25 mg start. Severe hepatic impairment was not studied. These are product-specific starting decisions, not milligram equivalents for another ARB."
        },
        {
          "heading": "Individualize olmesartan dosing",
          "body": "Benicar starts at 20 mg daily in adults without volume contraction. After two weeks, increase to 40 mg if needed. Higher doses offer no apparent added effect, and splitting the same total into twice-daily doses provides no advantage. Consider giving olmesartan at least four hours before colesevelam to reduce its absorption interaction."
        },
        {
          "heading": "Investigate delayed intestinal toxicity",
          "body": "Olmesartan can cause severe persistent diarrhea and substantial weight loss months or years after initiation, sometimes with villous atrophy. Investigate other causes and consider an alternative antihypertensive when no other explanation is found. Long prior tolerance does not exclude this adverse effect."
        },
        {
          "heading": "Preserve Edarbi packaging",
          "body": "Edarbi uses 80 mg once daily; consider 40 mg with high-dose diuretics. Correct volume or salt depletion before treatment or begin at the lower dose. Dispense and store it in its original container to protect against light and moisture. Do not repackage these tablets."
        },
        {
          "heading": "Allow time for telmisartan response",
          "body": "Micardis usually starts at 40 mg daily; its studied pressure response spans 20 to 80 mg. Most benefit appears within two weeks and maximum reduction generally by four weeks. Renal impairment does not require an initial adjustment, but dialysis patients need close pressure monitoring. Hepatic insufficiency or biliary obstruction calls for a low start and slow titration."
        },
        {
          "heading": "Check telmisartan handling and digoxin",
          "body": "Keep Micardis tablets in their blisters until immediately before use because they absorb moisture. Telmisartan can increase digoxin exposure; check digoxin levels when starting, adjusting or stopping it. A storage instruction for the reviewed brand does not establish the packaging instructions for every generic product."
        },
        {"heading": "Account for depletion with irbesartan", "body": "Irbesartan usually starts at 150 mg daily for hypertension, increasing to at most 300 mg daily. Volume or salt depletion, including vigorous diuresis or hemodialysis, supports a 75 mg start. Correct depletion or use the lower starting regimen with clinical review. Its 300 mg diabetic-nephropathy dose is indication-specific, not an automatic starting dose for every hypertensive patient."},
        {"heading": "Match candesartan to the patient", "body": "Atacand hypertension monotherapy usually starts at 16 mg daily when the adult is not volume depleted. The total range is 8 to 32 mg/day, given once or twice daily. Most effect appears by two weeks and maximum reduction generally by four to six weeks. Moderate hepatic insufficiency calls for an 8 mg start; the label cannot provide a dose recommendation for severe hepatic insufficiency. Heart-failure dosing follows a separate regimen."},
        {"heading": "Use the valsartan tablet schedule", "body": "Diovan tablets usually start at 80 or 160 mg once daily for adult hypertension without volume depletion. The daily range is 80 to 320 mg; most effect appears within two weeks and maximum reduction generally by four weeks. Do not transfer a heart-failure, post-MI or liquid-product schedule to the tablet hypertension regimen."},
        {"heading": "Distinguish valsartan solution from tablets", "body": "The reviewed 4 mg/mL valsartan solution is not therapeutically equivalent to Diovan tablets and produces higher peak exposure. Its adult hypertension starting dose is 40 or 80 mg twice daily, with a total daily range of 80 to 320 mg. A prescribed 40 mg dose is 10 mL, so 40 mg twice daily supplies 20 mL per day. Confirm the intended formulation and frequency before calculating volume; equal daily milligrams do not establish equivalent delivery."},
        {"heading": "Check eprosartan dose limits", "body": "The reviewed eprosartan label starts monotherapy at 600 mg daily when the patient is not volume depleted. Its total daily range is 400 to 800 mg in one or two doses, with limited experience above 800 mg. The label limits moderate or severe renal impairment to 600 mg/day. Verify the available product and strengths before prescribing; an accessible label does not establish current supply."}
      ],
      "keyPoints": [
        "ARB doses are not milligram equivalents.",
        "Delayed symptoms can still be drug-related.",
        "Original packaging can protect product stability.",
        "Monitor interacting medicines when an ARB changes."
      ],
      "check": {
        "question": "A patient develops persistent diarrhea and major weight loss after two years on olmesartan. What should be considered?",
        "choices": [
          "The long treatment duration excludes a drug cause",
          "Olmesartan-associated enteropathy alongside other possible causes",
          "An automatic dose increase",
          "A harmless effect requiring no assessment"
        ],
        "answer": 1,
        "rationale": "This adverse effect may appear months to years after initiation. Investigate and reassess therapy.",
        "reviewHref": "#arb-product-selection-safety"
      }
    },
    {
      "slug": "dihydropyridine-product-selection-safety",
      "title": "Dihydropyridine Products and Safe Titration",
      "summary": "Use the exact oral calcium-channel blocker formulation to select a dose, food schedule, and follow-up plan. A shared drug class does not make administration instructions interchangeable.",
      "concepts": [
        "Arteriolar dilation",
        "Product-specific dosing",
        "Food and release systems",
        "Response and adverse effects"
      ],
      "visual": "htn-dhp",
      "application": "Reconcile the product and daily schedule before changing a prescription, then reassess the pressure average and tolerability.",
      "lesson": [
        {
          "heading": "Use long-acting dihydropyridine calcium-channel blockers",
          "body": "Amlodipine and related agents reduce arteriolar resistance. When edema is attributable to the DHP, it reflects precapillary dilation rather than primary total-body sodium excess and may not respond well to a loop diuretic. Evaluate other causes of swelling before assigning that mechanism. Headache, flushing, gingival overgrowth, and interaction profiles vary by product."
        },
        {
          "heading": "Allow time for amlodipine response",
          "body": "For adult hypertension, amlodipine commonly starts at 5 mg daily, with a 10 mg daily maximum. A 2.5 mg start may suit older, small, fragile, or hepatically impaired adults. The label generally allows 7 to 14 days between adjustments; faster titration requires frequent assessment. Severe hepatic impairment warrants slow titration. Reassess edema and symptoms alongside the pressure average."
        },
        {"heading": "Match the liquid to its storage instructions", "body": "Katerzia is a 1 mg/mL amlodipine suspension: shake before use, refrigerate at 2 to 8°C, protect from light, and avoid freezing or excessive heat. The reviewed Norliqva solution is also 1 mg/mL, but its February 2026 label specifies 20 to 25°C storage, with permitted excursions to 15 to 30°C, in a tight, light-resistant container. Recheck the dispensed product rather than copying another liquid’s instructions."},
        {"heading": "Calculate the prescribed amlodipine volume", "body": "At 1 mg/mL, a prescribed 2.5 mg dose requires 2.5 mg ÷ 1 mg/mL = 2.5 mL. Calculate using the labeled amlodipine concentration, rather than the chemical salt mass. Confirm the actual bottle concentration and measure with an appropriate oral dosing device; a tablet-to-liquid change still needs prescription reconciliation."},
        {"heading": "Review amlodipine interactions", "body": "With amlodipine, limit simvastatin to 20 mg/day. CYP3A inhibitors can increase amlodipine exposure: monitor hypotension and edema and consider dose reduction. With CYP3A inducers, follow blood pressure closely. Amlodipine can also increase cyclosporine or tacrolimus exposure; arrange frequent trough-level monitoring and adjust the immunosuppressant when appropriate."},
        {
          "heading": "Read the nifedipine product name",
          "body": "Extended-release nifedipine products have different instructions. Procardia XL begins at 30 or 60 mg once daily, usually titrated over 7 to 14 days; doses above 120 mg/day are not recommended. The reviewed Ingenus extended-release tablet begins at 30 mg once daily on an empty stomach, usually maintains 30 to 60 mg, and does not recommend more than 90 mg/day. Do not transfer a dose ceiling or food instruction between products without checking the label."
        },
        {
          "heading": "Preserve the release system",
          "body": "Swallow the reviewed nifedipine extended-release tablets whole; do not chew, crush, or divide them. Procardia XL can leave an empty shell in stool after drug release, which alone does not mean treatment failed. However, its label also warns of rare gastrointestinal obstruction, particularly with altered anatomy or motility. New obstructive symptoms require assessment rather than reassurance based on the ghost-tablet explanation."
        },
        {
          "heading": "Review nifedipine response and interactions",
          "body": "Avoid grapefruit juice with these nifedipine products and review CYP3A inhibitors or inducers. Follow pressure and symptoms during initiation and dose changes; hepatic impairment can increase exposure. Peripheral edema may reflect vasodilation, but assess for worsening heart failure when appropriate. New or worsening angina after initiation or escalation needs prompt evaluation."
        },
        {
          "heading": "Individualize felodipine extended release",
          "body": "Felodipine ER usually starts at 5 mg daily, with a 2.5 to 10 mg daily range and at least two weeks between adjustments. Hepatic impairment calls for a 2.5 mg start; older adults generally start at the low end. Take it consistently fasting or with a light meal, swallow whole, and avoid grapefruit juice. Recheck pressure, dizziness, and edema before escalating."
        },
        {
          "heading": "Recognize diminishing returns with isradipine",
          "body": "Isradipine capsules start at 2.5 mg twice daily. Allow two to four weeks for maximal response; increases are 5 mg in the total daily dose at two-to-four-week intervals, up to 20 mg/day. Most patients gain no additional response above 10 mg/day while adverse effects increase. The reviewed label ordinarily retains the same starting dose in older adults and those with hepatic or mild renal impairment; individualize monitoring rather than borrowing another drug’s adjustment."
        },
        {
          "heading": "Keep Sular separate from other formulations",
          "body": "The reviewed Sular regimen starts at 17 mg daily, increases by 8.5 mg no more often than weekly, and does not exceed 34 mg/day. For adults over 65 or with hepatic impairment, start no higher than 8.5 mg daily and monitor closely. Take the intact tablet at least one hour before or two hours after a meal; avoid grapefruit products. Do not import the book’s separate older nisoldipine formulation range into this prescription."
        },
        {"heading": "Assess oral nicardipine across the dosing interval", "body": "Nicardipine capsules begin at 20 mg three times daily; studied effective doses are 20 to 40 mg three times daily. Allow at least three days between increases. Measure pressure one to two hours after dosing and at the eight-hour trough because the effect varies substantially during the interval. Capsule dosing is separate from the monitored IV-infusion protocols in the emergency module."},
        {"heading": "Screen nicardipine eligibility and organ function", "body": "Advanced aortic stenosis contraindicates nicardipine. Severe hepatic impairment calls for cautious initiation at 20 mg twice daily, preserving that schedule during individualized titration. Renal impairment requires careful titration; heart failure, worsening angina, or symptomatic hypotension require particular attention."}
      ],
      "keyPoints": [
        "Match instructions to the dispensed formulation.",
        "Allow time to assess response before titration.",
        "A permitted maximum does not guarantee additional benefit.",
        "Evaluate edema and symptoms in clinical context."
      ],
      "check": {
        "question": "Which explanation best fits amlodipine-associated ankle edema?",
        "choices": [
          "Preferential arteriolar dilation raises capillary hydrostatic pressure",
          "The drug always causes heart failure",
          "It irreversibly blocks kidney filtration",
          "It eliminates venous blood flow"
        ],
        "answer": 0,
        "rationale": "Dihydropyridine precapillary dilation promotes fluid movement into dependent tissues without necessarily increasing total-body sodium.",
        "reviewHref": "#dihydropyridine-product-selection-safety"
      }
    },
    {
      "slug": "nondihydropyridine-selection-safety",
      "title": "Non-DHP Calcium-Channel Blockers: Product and Cardiac Safety",
      "summary": "Evaluate diltiazem and verapamil using the treatment indication, conduction status, ventricular function and exact release formulation.",
      "concepts": [
        "Conduction and contractility",
        "Indication-specific dosing",
        "Release-system handling",
        "Cardiac exclusions"
      ],
      "visual": "htn-nondhp",
      "application": "Reconcile the pulse, rhythm history, ventricular function and full medication list before choosing or changing a non-DHP product.",
      "lesson": [
        {
          "heading": "Separate vascular benefit from conduction risk",
          "body": "Diltiazem lowers blood pressure primarily by relaxing vascular smooth muscle and reducing peripheral resistance. Its effects on cardiac calcium handling also slow conduction. Do not explain blood-pressure control solely as reduced heart rate or contractility; follow both the pressure response and cardiac safety."
        },
        {
          "heading": "Screen rhythm and ventricular function",
          "body": "Before using a non-DHP agent, review pulse, conduction history, ventricular function and other rate-slowing medicines. Sick sinus syndrome or second- or third-degree AV block without a functioning ventricular pacemaker excludes the reviewed products. Diltiazem can add conduction suppression to beta blockers or digitalis. Systolic pressure below 90 mm Hg is a contraindication, not simply a reason to titrate slowly."
        },
        {
          "heading": "Use Cardizem LA dosing for its indication",
          "body": "For hypertension, Cardizem LA starts at 180 to 240 mg once daily, although some patients respond to less; the maximum is 540 mg/day. Full pressure response usually develops by about 14 days. Swallow the tablet whole. Its angina regimen has a different maximum of 360 mg/day, so identify the indication before interpreting a dose."
        },
        {
          "heading": "Check the immediate-release indication",
          "body": "The reviewed immediate-release Cardizem tablet label covers chronic stable and coronary-spasm angina. Its presence in a hypertension drug table does not establish a labeled hypertension regimen. That label also excludes acute myocardial infarction with pulmonary congestion. Formulation, indication, contraindications and administration instructions all need review before substitution."
        },
        {"heading": "Identify twice-daily diltiazem ER", "body": "The reviewed 12-hour diltiazem ER capsule starts at 60 to 120 mg twice daily. Its trial-based usual optimum range is 240 to 360 mg total per day, with full antihypertensive response generally assessed after about 14 days. An ER designation alone does not establish once-daily dosing; reconcile formulation, frequency and total daily dose together."},
        {"heading": "Read the Cardizem CD dosing paragraph", "body": "Cardizem CD hypertension monotherapy usually starts at 180 to 240 mg once daily. The usual studied range is 240 to 360 mg/day, and its hypertension instructions describe selected patients receiving up to 480 mg/day. The label separately reports trials studying 540 mg and limited experience above 360 mg. A studied dose is not automatically the product\u2019s recommended escalation endpoint."},
        {"heading": "Individualize Tiazac titration", "body": "Tiazac hypertension monotherapy starts at 120 to 240 mg once daily. Maximum pressure effect generally appears by 14 days; the label permits titration to 540 mg/day but notes limited experience at that dose. Reassess tolerance and concomitant therapy before increasing exposure."},
        {"heading": "Use the Tiazac sprinkle method correctly", "body": "If needed, open Tiazac and place all capsule contents on a spoonful of non-hot applesauce. Swallow immediately without chewing, then drink cool water. Do not save the mixture or divide the contents into smaller doses. This product-specific permission does not authorize opening every diltiazem ER capsule."},
        {"heading": "Use Calan SR with food", "body": "Calan SR starts at 180 mg in the morning with food; 120 mg may suit more sensitive patients. Review efficacy and safety weekly. Its labeled steps include 240 mg each morning, then a total of 360 mg divided morning/evening, and up to 240 mg every 12 hours. Preserve the prescribed schedule rather than transferring Verelan PM bedtime instructions. The manufacturer states that halving Calan SR preserves its release characteristics; verify the exact tablet before applying that statement elsewhere."},
        {"heading": "Distinguish immediate-release verapamil", "body": "For hypertension, the reviewed immediate-release tablet starts at 80 mg three times daily; 40 mg three times daily may suit older or smaller patients. Assess response at the end of the dosing interval. The label limits the total to 480 mg/day but reports no demonstrated added antihypertensive benefit above 360 mg/day. A maximum is not a treatment target."},
        {"heading": "Identify morning sustained-release capsules", "body": "The reviewed Teva sustained-release capsule usually uses 240 mg each morning; 120 mg may suit more sensitive patients. Its escalation sequence from 120 mg is 180, 240, 360 and 480 mg each morning, guided by efficacy and safety near the 24-hour trough. This differs from Verelan PM bedtime dosing. The label permits an immediate-release conversion using the same total daily dose, followed by individualized reassessment; this is not permission to substitute any ER product."},
        {
          "heading": "Recognize the Verelan PM schedule",
          "body": "Verelan PM usually uses 200 mg at bedtime, with response-based steps to 300 and then 400 mg. A 100 mg start may be warranted with greater sensitivity, including older or low-weight patients and renal or hepatic impairment. Assessing pressure just before bedtime measures the trough more closely than a morning office reading."
        },
        {
          "heading": "Preserve Verelan PM pellets",
          "body": "Swallow the capsule whole or place its entire contents on one tablespoon of non-hot applesauce. Swallow immediately without chewing, then drink cool water. Do not store the mixture, crush pellets, or divide the contents for a smaller dose."
        },
        {"heading": "Match the grapefruit advice to the product", "body": "Procardia XL labeling directs patients to avoid grapefruit and grapefruit juice. Verelan PM labeling reports increased verapamil exposure but does not expect clinical consequences from the studied interaction. Do not turn one product\u2019s wording into either a universal class contraindication or reassurance for every patient. Review the exact label, interacting medicines and clinical vulnerability when counseling."},
        {"heading": "Verify therapeutic equivalence before substitution", "body": "Equal ingredient names, strengths and ER abbreviations do not establish therapeutic equivalence. Check the current Orange Book entry for the exact dosage form, route, strength and therapeutic-equivalence code. When numbered AB groups are used, the number matters: AB1 and AB2 do not establish equivalence to each other. FDA uses Adalat CC and Procardia XL as an example. Preserve the verified product\u2019s administration instructions and distinguish a prescriber-directed treatment change from generic substitution."},
        {
          "heading": "Apply verapamil-specific exclusions",
          "body": "Verapamil is contraindicated with severe left ventricular dysfunction, cardiogenic shock, or atrial fibrillation/flutter with an accessory bypass tract. A pacemaker exception for conduction disease does not remove these separate exclusions."
        },
        {"heading": "Include bowel and liver follow-up", "body": "Ask about constipation during verapamil follow-up. The label also reports rare paralytic ileus, so substantial new bowel symptoms need assessment. Periodic liver-function monitoring is prudent. Malaise, fever or right-upper-quadrant pain with liver-test abnormalities warrants evaluation for drug-related injury; a satisfactory blood pressure does not establish overall tolerability."},
        {"heading": "Apply the current heart-failure boundary", "body": "The 2025 hypertension guideline advises against diltiazem or verapamil in heart failure with reduced ejection fraction. Do not interpret a label warning that highlights an ejection fraction below 30% as permission to use these agents in other HFrEF patients. Avoid routine pairing with beta blockers because of bradycardia and heart-block risk. Select treatment around the heart-failure indication as well as the pressure goal."},
        {"heading": "Reconcile the statin label as well as the CCB label", "body": "With diltiazem or verapamil, the reviewed Zocor label limits simvastatin to 10 mg/day; its amlodipine limit is 20 mg/day. The reviewed lovastatin label starts at 10 mg and limits treatment to 20 mg/day with diltiazem or verapamil. Verelan PM labeling lists a higher lovastatin limit, so reconcile both labels and follow the stricter statin restriction rather than treating 40 mg as universally acceptable. Reassess the lipid regimen when an interaction prevents the needed intensity."},
        {"heading": "Plan for verapamil and digoxin together", "body": "Verapamil can increase digoxin exposure as well as compound conduction slowing. Consider reducing digoxin and arrange level monitoring rather than relying on pulse alone. Review symptoms, renal function and the full regimen when interpreting the level. Adding a beta blocker or clonidine creates further bradycardia risk; ophthalmic beta blockers also belong in the medication history."},
        {"heading": "Avoid the ivabradine combination", "body": "The reviewed diltiazem and verapamil labels advise avoiding concurrent ivabradine. Increased ivabradine exposure combines with rate slowing and can worsen bradycardia or conduction disturbances. A normal baseline pulse does not remove this interaction; resolve the regimen before prescribing."},
        {"heading": "Review exposure changes in both directions", "body": "Diltiazem is a substrate and inhibitor of CYP3A4 and P-glycoprotein. Interactions can therefore alter its exposure or that of another medicine. Verapamil exposure can rise with CYP3A4 inhibitors and fall with inducers. Check the exact pair and patient factors instead of applying one dose adjustment to every interacting drug."}
      ],
      "keyPoints": [
        "Pressure response and conduction safety are separate assessments.",
        "Match the dose ceiling to the product and indication.",
        "A release formulation determines administration instructions.",
        "A pacemaker exception does not waive other contraindications."
      ],
      "check": {
        "question": "Which finding excludes the reviewed non-DHP products without a functioning ventricular pacemaker?",
        "choices": [
          "Isolated treated hyperlipidemia",
          "Second-degree AV block",
          "A family history of hypertension",
          "A normal resting heart rate"
        ],
        "answer": 1,
        "rationale": "The conduction contraindication remains relevant even when blood pressure requires treatment.",
        "reviewHref": "#nondihydropyridine-selection-safety"
      }
    },
    {
      "slug": "thiazide-product-selection-safety",
      "title": "Thiazide Products, Doses, and Safety",
      "summary": "Choose the exact diuretic formulation, interpret its indication-specific dose, and anticipate electrolyte, renal, metabolic, and interaction risks.",
      "concepts": [
        "Distal sodium transport",
        "Formulation and dose",
        "Electrolyte and renal monitoring",
        "Drug interactions and counseling"
      ],
      "visual": "htn-thiazides",
      "application": "Before escalating a diuretic, check the pressure average, actual product, volume state, electrolytes, renal trend, and medicines that change efficacy or toxicity.",
      "lesson": [
        {
          "heading": "Distinguish the diuretics",
          "body": "Hydrochlorothiazide is a thiazide; chlorthalidone and indapamide are thiazide-like. All inhibit distal NCC. The guideline groups them as thiazide-type, but their duration and potency differ: do not substitute equal milligram doses automatically. Monitor sodium, potassium, magnesium, kidney function, uric acid when relevant, glucose context, volume symptoms, lithium, and NSAID exposure."
        },
        {
          "heading": "Dose the selected thiazide product",
          "body": "For the cited 12.5 mg hydrochlorothiazide capsule, adult hypertension treatment starts with one capsule daily; that label does not recommend totals above 50 mg/day. Confirm the actual product and indication. A historical class dosing range is not a reason to escalate despite electrolyte depletion, symptoms, or an inadequate response that calls for another mechanism."
        },
        {
          "heading": "Check the chlorthalidone formulation",
          "body": "Thalitone has formulation-specific instructions and cannot be substituted automatically with other chlorthalidone formulations. Its hypertension label starts at 15 mg once daily with food, permits an increase to 25 mg after two weeks, and does not expect additional pressure reduction above 25 mg. Do not apply a different product’s higher dosing range or an edema regimen to this hypertension prescription."
        },
        {
          "heading": "Distinguish the conventional tablet label",
          "body": "The reviewed conventional chlorthalidone tablet label starts hypertension treatment at 25 mg once daily, with possible increases to 50 or 100 mg after assessment. Potassium loss and uric-acid elevation increase with dose. A permitted label ceiling is not a preferred target for every patient, and this schedule must not replace Thalitone’s separate instructions. Reassess whether another mechanism would achieve control with less toxicity."
        },
        {
          "heading": "Titrate indapamide deliberately",
          "body": "For hypertension, the reviewed indapamide label starts at 1.25 mg each morning. If needed, increase to 2.5 mg after four weeks; after another four weeks, 5 mg is allowed, but adding another antihypertensive should be considered. The label reports little additional benefit at 5 mg and higher, with more hypokalemia. The edema starting dose and titration interval differ."
        },
        {
          "heading": "Calculate chlorothiazide suspension carefully",
          "body": "Diuril oral suspension contains 250 mg per 5 mL, or 50 mg/mL. Its adult hypertension label begins with a total of 500 or 1,000 mg per day, given once or divided; only some patients need up to 2,000 mg/day in divided doses. A prescribed 500 mg dose therefore requires 10 mL. Distinguish each dose from the daily total and confirm the concentration; these instructions do not establish an oral-to-intravenous conversion."
        },
        {
          "heading": "Look beyond potassium alone",
          "body": "Thiazide-type treatment can lower sodium and magnesium as well as potassium. Low magnesium can make potassium depletion difficult to correct. Indapamide labeling reports severe hyponatremia with recommended doses, particularly in older women; starting low does not eliminate monitoring. Check symptoms, electrolytes, volume, and renal function before escalation. Reduced urinary calcium loss can raise serum calcium; glucose intolerance and gout also matter to selection."
        },
        {
          "heading": "Avoid an absolute kidney cutoff",
          "body": "Do not assume every thiazide-type drug becomes ineffective below an eGFR of 30 mL/min/1.73 m2. In CLICK, chlorthalidone improved blood pressure over 12 weeks in selected patients with stage 4 CKD and uncontrolled hypertension. Hypokalemia, reversible creatinine increases, dizziness, hyperglycemia, and hyperuricemia were more frequent. This supports carefully monitored selection, not routine substitution for a loop diuretic or proof of long-term kidney protection."
        },
        {
          "heading": "Use metolazone with a defined purpose",
          "body": "For the reviewed metolazone tablets, the labeled hypertension range is 2.5 to 5 mg once daily; edema uses a different range. Formulations equivalent to Zaroxolyn and those equivalent to Mykrox are not interchangeable at equal doses. Check the dispensed formulation rather than treating the ingredient name as proof of equivalence."
        },
        {
          "heading": "Respect combined diuresis",
          "body": "Metolazone can produce diuresis at markedly reduced kidney function, but accumulation and volume depletion still matter. Adding it to furosemide can cause unusually large or prolonged fluid and electrolyte losses. Monitor weight, pressure, symptoms, electrolytes, and renal function closely. Anuria and hepatic coma or precoma are contraindications; worsening azotemia with oliguria in severe renal disease calls for discontinuation and clinical reassessment."
        },
        {
          "heading": "Recognize urgent eye symptoms",
          "body": "New eye pain or rapidly decreased vision after starting HCTZ needs urgent assessment for drug-associated acute angle closure, which can threaten sight. The label calls for prompt HCTZ discontinuation and further eye treatment when needed. Do not advise waiting until a routine pressure visit or simply changing the dosing time."
        },
        {"heading": "Separate HCTZ from binding resins", "body": "Cholestyramine and colestipol can reduce HCTZ absorption. The reviewed Hyzaar label places HCTZ at least four hours before, or four to six hours after, the resin. Check the actual products and build a feasible schedule before interpreting poor pressure control as inadequate dosing. Combination tablets retain their components' interactions."},
        {"heading": "Fit diuresis to the daily routine", "body": "Plan thiazide dosing early in the waking day to reduce sleep disruption from urination, following the prescribed schedule and product instructions. Discuss work, sleep and bathroom access before choosing the time. A fixed afternoon cutoff is a practical convention, not a reason to skip treatment or change a divided regimen without advice."},
        {"heading": "Include metabolic and sexual adverse effects", "body": "Thiazides can raise glucose; patients with diabetes may need closer monitoring and adjustment of diabetes treatment. HCTZ labeling also reports erectile dysfunction. Invite discussion of new sexual symptoms and their timing without assuming the drug is the only cause. Review the regimen and alternatives rather than allowing an unreported adverse effect to lead to missed doses."},
        {
          "heading": "Include sun protection in counseling",
          "body": "HCTZ labeling describes a small increased risk of non-melanoma skin cancer and advises sun protection and regular skin screening. Discuss this without implying that every patient should abruptly stop effective therapy. Review skin history, cumulative exposure, and the treatment plan with the clinician."
        },
        {
          "heading": "Keep the injectable route distinct",
          "body": "Chlorothiazide sodium injection is a separate IV product with labeled edema uses, reserved for patients unable to take oral medicine or emergency situations. It is given by slow IV injection or infusion, never intramuscularly or subcutaneously, and extravasation must be avoided. The reviewed adult dose is 500 mg to 1 g once or twice daily, individualized to response. Its availability does not make it a routine treatment for hypertensive emergencies."
        },
        {
          "heading": "Prepare the specific vial correctly",
          "body": "For the reviewed 500 mg vial, add 18 mL of Sterile Water for Injection, never less; the label states a resulting concentration of approximately 28 mg/mL. Prepare immediately before administration, inspect the solution, and discard the unused portion because the product has no preservative. Dextrose and sodium chloride infusion solutions are compatible; avoid simultaneous administration with whole blood or blood derivatives. Verify the actual manufacturer’s instructions before preparation."
        },
        {
          "heading": "Clarify the allergy history",
          "body": "Record the culprit drug, reaction, timing, severity, and subsequent tolerance when a chart says sulfa allergy. Several thiazide labels retain broad sulfonamide hypersensitivity exclusions, while the 2022 drug-allergy practice parameter finds little concern for cross-reactivity between sulfonamide antibiotics and nonantibiotics, including thiazide-type diuretics. An antibiotic allergy does not establish allergy to every thiazide. Reconcile the specific history and product warning with the clinician; actual hypersensitivity to the selected diuretic still matters."
        },
        {
          "heading": "Check diuretic interactions",
          "body": "Hydrochlorothiazide, including combination tablets, is contraindicated with dofetilide because exposure and QT prolongation increase. A normal potassium value does not make the combination acceptable. Other potassium-depleting diuretics still need electrolyte and interaction review; do not automatically assign every drug the same labeled interaction."
        }
      ],
      "keyPoints": [
        "Formulations and milligram doses are not interchangeable.",
        "A labeled maximum is not a universal treatment target.",
        "Monitor sodium and magnesium as well as potassium.",
        "Eye symptoms and marked depletion need prompt assessment."
      ],
      "check": {
        "question": "A prescription calls for chlorothiazide 500 mg per dose using Diuril 250 mg/5 mL. What volume supplies each dose?",
        "choices": [
          "2 mL",
          "5 mL",
          "10 mL",
          "20 mL"
        ],
        "answer": 2,
        "rationale": "250 mg/5 mL is 50 mg/mL; 500 mg divided by 50 mg/mL equals 10 mL per dose. Confirm the prescribed frequency separately.",
        "reviewHref": "#thiazide-product-selection-safety"
      }
    },
    {
      slug: "combination-and-comorbidity-selection",
      title: "Combination Therapy and Comorbidity Selection",
      summary: "Stage 2 hypertension often benefits from two complementary first-line medicines, preferably in one pill, while albuminuric CKD, coronary disease, heart failure, pregnancy, and arrhythmia change selection.",
      concepts: ["Single-pill combination", "Complementary mechanisms", "Albuminuric CKD", "Cardiac and pregnancy contexts"],
      visual: "htn-combination",
      application: "Use active ingredients, not brand names, to confirm complementary therapy and prevent duplicate RAAS, calcium-channel, or diuretic exposure.",
      lesson: [
        { heading: "Start two agents in stage 2", body: "The 2025 guideline prefers two first-line agents from different classes in a single-pill combination for adults with stage 2 hypertension. Complementary mechanisms reduce therapeutic inertia and pill burden, but baseline pressure, symptoms, frailty, and comorbidity still shape the start." },
        { heading: "Pair mechanisms thoughtfully", body: "An ACE inhibitor or ARB can pair with a dihydropyridine calcium-channel blocker or thiazide-like diuretic. The combination often improves efficacy and can offset selected adverse effects. ACE inhibitor plus ARB or direct renin inhibitor is not complementary safety." },
        {"heading": "Read the combination as separate ingredients", "body": "A single tablet does not create a single safety profile. Write each ingredient, dose and release form before comparing it with the existing regimen. For example, Tribenzor contains olmesartan, amlodipine and hydrochlorothiazide; Edarbyclor contains azilsartan medoxomil and chlorthalidone. The diuretics are different drugs. Reconcile separate component prescriptions when replacing them with a combination so that an old order does not create unintended duplication."},
        {"heading": "Check whether the product permits initial treatment", "body": "Edarbyclor may be used initially when multiple drugs are likely to be needed. Its reviewed label starts 40/12.5 mg once daily and permits an increase to 40/25 mg after 2 to 4 weeks. Correct volume depletion first and keep it in the original container. Tribenzor is not labeled for initial therapy: select its dose from prior treatment, give once daily and increase at two-week intervals if needed, to at most 40/10/25 mg. A guideline preference for combination treatment does not override product-specific instructions."},
        {"heading": "Keep triple-combination dose order explicit", "body": "Exforge HCT lists amlodipine/valsartan/HCTZ, whereas Tribenzor lists olmesartan/amlodipine/HCTZ. Write the drug beside each number; the ARB does not occupy the same position. Exforge HCT is not for initial treatment. It may replace individually titrated components or be used when two of the relevant classes do not adequately control pressure. Give once daily; the reviewed label permits an increase after two weeks to a maximum of amlodipine 10 mg, valsartan 320 mg and HCTZ 25 mg daily. Correct volume depletion and reassess renal function, electrolytes and each component's contraindications."},
        {"heading": "Use Zestoretic after component assessment", "body": "Zestoretic contains lisinopril/HCTZ and is not labeled for initial hypertension therapy. After inadequate monotherapy, the reviewed label selects 10/12.5 or 20/12.5 mg according to the existing dose and response; titrated separate components may also be consolidated. It generally waits 2 to 3 weeks before increasing HCTZ. Review volume status and renal function before the switch. This fixed combination is not recommended with more severe renal impairment; do not turn that product restriction into a claim that every thiazide-like drug is ineffective in advanced CKD."},
        {"heading": "Retain the Hyzaar initial-treatment exception", "body": "Hyzaar contains losartan/HCTZ. Its label excludes initial therapy except when severe hypertension makes prompt control worth the combination-start risk. The usual regimen is 50/12.5 mg once daily, increasing after about three weeks if needed to 100/25 mg daily. Select the starting combination from prior treatment: uncontrolled losartan 100 mg monotherapy instead leads to 100/12.5 mg. Correct volume depletion and do not assume the two ingredients cancel potassium risk."},
        {"heading": "Individualize Diovan HCT consolidation", "body": "Diovan HCT contains valsartan/HCTZ. Its label permits initial treatment when multiple drugs are likely needed, but not with intravascular volume depletion. The usual starting regimen is 160/12.5 mg once daily, with a maximum of 320/25 mg daily. The general titration interval is 1 to 2 weeks; the add-on section calls for reassessment after 3 to 4 weeks before further escalation. Match the relevant treatment pathway and clinical response. Replacement of separately titrated components should preserve both doses."},
        {"heading": "Choose Benicar HCT from the prior regimen", "body": "Benicar HCT contains olmesartan medoxomil/HCTZ and is not labeled for initial hypertension treatment. The reviewed label starts 40/12.5 mg daily after inadequate olmesartan monotherapy, or 20/12.5 mg daily after inadequate HCTZ control or dose-limiting HCTZ effects. Adjust after 2 to 4 weeks as needed, to at most 40/25 mg daily. Preserve both doses when replacing titrated components. Olmesartan enteropathy and colesevelam precautions still apply; adding a diuretic does not remove them."},
        {"heading": "Distinguish Avalide dose from tablet strength", "body": "Avalide contains irbesartan/HCTZ. Its label permits initial treatment when multiple agents are needed, starting 150/12.5 mg once daily and increasing after 1 to 2 weeks if needed to 300/25 mg daily. Avoid initial use with intravascular volume depletion. Maximum effect may take 2 to 4 weeks after a dose change. The reviewed branded label lists 150/12.5 and 300/12.5 mg tablets: confirm how the prescribed total will be supplied rather than assuming a 300/25 mg tablet is available."},
        {"heading": "Titrate candesartan/HCTZ by the existing component", "body": "Candesartan cilexetil/HCTZ is not labeled for initial hypertension treatment. After inadequate control on HCTZ 25 mg daily, the reviewed label uses 16/12.5 mg; after inadequate control on candesartan 32 mg, it adds HCTZ with 32/12.5 mg and then 32/25 mg if needed. Full pressure reduction may take four weeks at a dose. Moderate to severe hepatic impairment can require a candesartan starting dose that this combination cannot supply. Do not substitute a fixed tablet for the needed individualized starting regimen."},
        {"heading": "Calculate the Micardis HCT daily total", "body": "Micardis HCT contains telmisartan/HCTZ and is not labeled for initial hypertension treatment. Its reviewed US label starts 80/12.5 mg daily after specified monotherapy failure and allows a total of 160/25 mg daily after 2 to 4 weeks if needed. Two 80/12.5 mg tablets supply that total; two 80/25 mg tablets would instead supply 160/50 mg. Biliary obstruction or hepatic insufficiency calls for supervised initiation at 40/12.5 mg; severe hepatic impairment is not recommended. Keep the reviewed branded tablets in their blisters until use."},
        {"heading": "Keep benazepril/HCTZ below its own ceiling", "body": "Benazepril/HCTZ, associated with the Lotensin HCT name, is not labeled for initial hypertension therapy. The reviewed generic label usually starts 10/12.5 mg once daily after inadequate control with either component alone, permits increases after 2 to 3 weeks and caps the combination at 20/25 mg daily. That ceiling differs from benazepril monotherapy. When replacing separately titrated medicines, verify that the available combination supplies the intended doses."},
        {"heading": "Preserve captopril/HCTZ timing and risk assessment", "body": "The reviewed captopril/HCTZ label permits initial treatment at 25/15 mg once daily or replacement of titrated components. Take it one hour before meals. Individualized escalation may require separate components or divided dosing; the label generally limits daily totals to captopril 150 mg and HCTZ 50 mg. It describes six-week adjustment intervals unless the clinical situation requires faster change. Assess renal function and neutropenia risk, particularly with collagen vascular disease; patients with renal impairment may need smaller or less frequent doses. Do not extrapolate another ACE combination's schedule."},
        {"heading": "Count both Vaseretic ingredients", "body": "Vaseretic contains enalapril/HCTZ and is not labeled for initial treatment. After inadequate monotherapy, its reviewed branded label uses 10/25 mg and permits no more than two such tablets daily, totaling enalapril 20 mg/HCTZ 50 mg. HCTZ escalation generally waits 2 to 3 weeks. This is a product-specific regimen, not the standalone enalapril ceiling. More severe renal impairment can make the fixed combination unsuitable; check whether separate components are needed."},
        {"heading": "Do not transfer fosinopril renal rules to its combination", "body": "Fosinopril/HCTZ is not labeled for initial therapy. The reviewed product supplies 10/12.5 and 20/12.5 mg tablets for adjustment after inadequate monotherapy. Although fosinopril alone has compensating hepatobiliary elimination, the combination label does not recommend use in severe renal impairment, defined there as creatinine clearance below 30 mL/min/1.73 m2. The HCTZ component changes the assessment. Choose the regimen from the exact product and clinical response, with electrolyte and kidney monitoring."},
        {"heading": "Recognize historical moexipril/HCTZ instructions", "body": "Moexipril/HCTZ was marketed as Uniretic. The reviewed 2012 FDA label directs dosing one hour before a meal and selection after inadequate monotherapy or replacement of titrated components. These historical instructions help interpret an old medication list; they do not establish current supply or authorize a new prescription. Verify the actual product and current instructions before applying its strengths, tablet-splitting or renal recommendations."},
        {"heading": "Match Accuretic to titrated quinapril and HCTZ", "body": "Accuretic contains quinapril/HCTZ. The reviewed manufacturer dosing instructions use 10/12.5 or 20/12.5 mg after inadequate quinapril monotherapy, with HCTZ increases generally separated by 2 to 3 weeks. The 20/25 mg tablet can replace those separately tolerated doses. Renal impairment may make this fixed combination inappropriate even when a smaller standalone quinapril dose is usable. A label describes permitted use; confirm product availability and the actual dispensing instructions rather than assuming an old brand remains obtainable."},
        {"heading": "Check prior therapy before Lotrel", "body": "Lotrel contains amlodipine and benazepril. Its reviewed label calls for prior inadequate monotherapy control, or inability to control pressure with amlodipine without edema; it also permits replacement of titrated components. The labeled starting regimen is amlodipine 2.5 mg/benazepril 10 mg once daily, with a maximum of 10/40 mg daily. Verify the actual available strength rather than assuming every labeled regimen is supplied by the branded product. ACE inhibitor angioedema exclusions and the 36-hour sacubitril/valsartan separation still apply. Lotrel is not recommended in severe renal impairment because the recommended benazepril dose is unavailable in this combination."},
        {"heading": "Distinguish Exforge from Exforge HCT", "body": "Exforge contains amlodipine and valsartan without a diuretic. Unlike Exforge HCT, it permits initial therapy when one agent is unlikely to achieve control. In patients without volume depletion, its usual initial regimen is amlodipine 5 mg/valsartan 160 mg once daily, up to 10/320 mg daily. The label also supports add-on treatment and replacement of separately titrated doses. Reassess response and tolerability before increasing; do not accidentally add HCTZ through a similar brand name."},
        {"heading": "Apply Azor component and initiation limits", "body": "Azor combines amlodipine with olmesartan medoxomil. Its usual starting regimen is 5/20 mg once daily; the reviewed label permits increases after 1 to 2 weeks to 10/40 mg daily. Initial combination treatment is permitted when multiple agents are likely needed, but is not recommended at age 75 or older or with hepatic impairment because the lowest combination contains amlodipine 5 mg. Preserve olmesartan-specific precautions, including evaluation of severe chronic diarrhea and weight loss."},
        {"heading": "Preserve Prestalia salt and renal-dose distinctions", "body": "Prestalia contains perindopril arginine with amlodipine; do not carry over a perindopril erbumine dose solely by matching milligrams. The reviewed US label permits initial therapy when multiple agents are needed, starting 3.5/2.5 mg once daily and allowing titration every 7 to 14 days to 14/10 mg daily. With creatinine clearance 30 to 80 mL/min, do not exceed 7/5 mg; below 30 mL/min, it is not recommended. These are combination-specific limits. After titration above 7/5 mg in adults older than 65, monitor pressure for up to two weeks."},
        {"heading": "Check Twynsta eligibility and packaging", "body": "Twynsta contains telmisartan/amlodipine. Initial therapy may start at 40/5 mg daily, or 80/5 mg when a larger reduction is needed; correct volume or salt depletion first. Increase only after at least two weeks, to at most 80/10 mg once daily. Initial use is not recommended at age 75 or older or with hepatic impairment because a lower amlodipine starting dose is generally needed. For the reviewed branded blister product, leave each tablet sealed until immediately before use. Confirm instructions for the actual dispensed product."},
        {"heading": "Keep the non-DHP combination distinct", "body": "Trandolapril/verapamil ER, associated with the Tarka name, combines an ACE inhibitor with a non-DHP calcium-channel blocker. It is not an amlodipine combination. The reviewed generic label excludes initial hypertension therapy and directs administration with food. Verapamil conduction and ventricular-function concerns and ACE inhibitor angioedema, pregnancy and renal-potassium precautions still apply. Matching a class label alone is insufficient for substitution."},
        {"heading": "Separate labeled initiation from preferred first-line care", "body": "Ziac combines bisoprolol with HCTZ and permits initial hypertension treatment at 2.5/6.25 mg once daily. Its label allows titration every 14 days to 20/12.5 mg daily, supplied by two 10/6.25 mg tablets. That permission does not make a beta-blocker combination the preferred starting regimen for uncomplicated hypertension. Confirm the indication for beta blockade and monitor pulse, electrolytes and kidney function."},
        {"heading": "Read both Tenoretic strengths", "body": "Tenoretic combines atenolol with chlorthalidone and is not labeled for initial hypertension therapy. When the component doses fit the patient, its schedule starts with Tenoretic 50 once daily and can increase to Tenoretic 100. Those tablets contain 50/25 mg and 100/25 mg respectively: only atenolol doubles. Renal impairment may require a lower atenolol dose or longer interval; reassess whether a fixed combination permits the needed adjustment."},
        {"heading": "Titrate before using Lopressor HCT", "body": "Lopressor HCT contains immediate-release metoprolol tartrate and HCTZ. Titrate the separate components before switching; this combination is not labeled for initial treatment. Give with or immediately after meals. Once-daily treatment may not maintain full-day control, especially at lower doses, and divided dosing may be needed. The reviewed label does not recommend more than 50 mg HCTZ per day; increasing tablets changes both ingredients."},
        {"heading": "Recognize extended-release metoprolol combinations", "body": "Dutoprol is the name used for extended-release metoprolol succinate with HCTZ, unlike Lopressor HCT, which contains metoprolol tartrate. The reviewed FDA Dutoprol label is dated 2022 and describes once-daily administration. Recognizing a historical brand does not establish current supply or authorize substitution. Verify the actual product, release system and current instructions before dispensing."},
        {"heading": "Check exposure when consolidating nadolol therapy", "body": "Nadolol/bendroflumethiazide combines a nonselective beta blocker with a thiazide distinct from HCTZ. Its reviewed label excludes initial hypertension therapy and reports greater bendroflumethiazide bioavailability in the combination than in the same nominal standalone dose. Consolidation therefore requires clinical reassessment, not just matching the printed milligrams. Nadolol renal clearance and bronchial-asthma exclusions still matter."},
        {"heading": "Do not escalate every ingredient to reach one target", "body": "Propranolol/HCTZ is another nonselective beta-blocker combination. The historical Inderide label illustrates a fixed-ratio limitation: increasing tablets to obtain more propranolol also increases HCTZ. If one component needs further adjustment, reassess the combination and consider separately titratable medicines. Neither a familiar brand nor a convenient tablet removes the individual drugs' contraindications or establishes current availability."},
        {"heading": "Retain aliskiren restrictions in Tekturna HCT", "body": "Tekturna HCT combines aliskiren with HCTZ. Its reviewed label permits initial treatment in selected patients needing multiple medicines, starting at 150/12.5 mg daily and titrating after 2 to 4 weeks if needed, to at most 300/25 mg daily. Correct volume depletion first and keep meal timing consistent. Adding HCTZ does not remove the contraindication to concurrent ACE inhibitor or ARB use in diabetes, the broader dual-RAAS warning, or fetal toxicity. Labeled use is distinct from guideline-preferred first-line selection."},
        {"heading": "Recognize methyldopa/HCTZ without assuming current supply", "body": "Methyldopa/HCTZ combines central sympathetic suppression with a thiazide. Both components still require safety review, including methyldopa liver and blood-count monitoring and diuretic electrolyte surveillance. MedlinePlus identifies Aldoril as a discontinued brand; this does not establish whether a particular generic is available. Confirm the actual formulation and prescription rather than reconstructing a dose from an old brand name. Methyldopa pregnancy experience does not automatically make its diuretic combination the preferred obstetric treatment."},
        { heading: "Use albuminuria to guide RAAS selection", body: "In CKD with albuminuria, an ACE inhibitor or ARB has a kidney-protective role under current kidney guidance when tolerated. Monitor creatinine and potassium after initiation or titration and during intercurrent illness. Avoid interpreting every modest creatinine rise as automatic treatment failure." },
        { heading: "Plan the RAAS follow-up", body: "KDIGO advises checking pressure, creatinine, and potassium within two to four weeks after starting or increasing an ACE inhibitor or ARB, with timing guided by baseline filtration and potassium. Use the highest approved dose that is tolerated. Symptoms or an unstable clinical situation require earlier assessment; the routine interval is not permission to wait." },
        {"heading": "Keep creatinine and eGFR changes distinct", "body": "KDIGO advises continuing an ACE inhibitor or ARB unless creatinine rises more than 30% within four weeks after initiation or dose increase. Its response algorithm also uses an eGFR fall of at least 30% to trigger investigation. These are different measurements, not interchangeable percentage changes. Creatinine rising from 1.0 to 1.4 mg/dL is a 40% increase: (1.4 - 1.0) / 1.0 \u00d7 100. Assess reversible causes and clinical safety rather than treating either number as a complete diagnosis."},
        { heading: "Interpret kidney changes before stopping therapy", body: "KDIGO advises continuing ACE inhibitor or ARB therapy unless creatinine rises more than 30% within four weeks of initiation or dose increase. Its monitoring algorithm separately uses an eGFR fall of at least 30% to trigger investigation. Assess volume depletion, NSAIDs, other medicines, and renal artery disease. These percentages are not interchangeable. Symptomatic hypotension or hyperkalemia uncontrolled despite treatment can justify reduction or discontinuation; eGFR below 30 alone does not." },
        { heading: "Match the CKD target to measurement", body: "KDIGO suggests systolic below 120 mm Hg when tolerated using standardized office measurement. Applying that target to casual, nonstandardized readings can be hazardous. Frailty, falls, limited life expectancy, and symptomatic postural hypotension may favor less intensive treatment." },
        { heading: "Use pregnancy-specific thresholds and goals", body: "For chronic hypertension in pregnancy, ACOG uses 140/90 mm Hg to initiate or titrate therapy; either elevated component matters. Do not wait for severe-range pressure. SMFM recommends a treatment goal below 140 systolic and below 90 diastolic with pregnancy-compatible medicines. Apply obstetric guidance rather than transferring the nonpregnant adult target or an older textbook threshold." },
        { heading: "Respect disease-specific products and pregnancy", body: "Heart failure, coronary disease, arrhythmia, aortic disease, and pregnancy can make other agents appropriate or contraindicated. RAAS blockers can harm fetal development and should not be used in pregnancy. Pregnancy management follows dedicated obstetric guidance." },
        { heading: "Audit apparent resistant hypertension", body: "Before labeling hypertension resistant, confirm standardized and outside-office pressure, adherence, active ingredients, adequate doses, a long-acting thiazide-like strategy when appropriate, excess sodium, alcohol, and pressure-raising substances. Evaluate secondary causes and treatment access. A mineralocorticoid receptor antagonist is often an effective next step when kidney function and potassium permit, but it does not replace that audit." },
        {"heading": "Consider alpha-1 blockade in its clinical context", "body": "Alpha-1 blockers relax peripheral vessels and can cause orthostatic hypotension, especially with initiation or escalation. They are not routine first-line hypertension therapy. The 2025 guideline allows consideration as a second-line option with symptomatic benign prostatic hyperplasia. Check falls, standing pressure and interacting medicines rather than assuming one drug automatically solves both conditions."},
        {"heading": "Separate doxazosin formulations and indications", "body": "Immediate-release Cardura starts at 1 mg once daily for hypertension and may be titrated to 16 mg daily; its BPH maximum is 8 mg daily. The label calls for pressure monitoring for at least six hours after the initial dose and each increase. Restart the initial regimen after several days off. Cardura XL instead treats BPH, starts at 4 mg with breakfast and is not labeled for hypertension; it is not a milligram-for-milligram substitute."},
        {"heading": "Restart terazosin cautiously", "body": "Begin terazosin at 1 mg at bedtime and titrate slowly. The reviewed hypertension label gives a usual range of 1 to 5 mg daily, with selected patients benefiting up to 20 mg/day. Assess trough control and post-dose symptoms before changing the dose or interval. After several days without treatment, restart the initial regimen because first-dose hypotension can recur."},
        {"heading": "Use the hypertension prazosin regimen", "body": "The reviewed prazosin label starts at 1 mg two or three times daily, with slow titration; usual totals are 6 to 15 mg/day in divided doses. Syncope often occurs within 30 to 90 minutes of the first dose and can also follow rapid increases or addition of another antihypertensive. Avoid driving or hazardous tasks for 24 hours after initiation or an increase. This is hypertension dosing, not a regimen for another indication."},
        {"heading": "Anticipate alpha-blocker interactions and procedural risks", "body": "PDE-5 inhibitors can add symptomatic hypotension to alpha blockade; review the exact products, stability and starting instructions. Tell the cataract surgeon about current or past alpha-blocker exposure because of intraoperative floppy iris risk. Do not assume stopping treatment eliminates that risk. A prolonged erection lasting more than four hours needs immediate medical care."},
      ],
      keyPoints: ["Stage 2 generally starts with two first-line agents.", "Single-pill combinations reduce burden.", "Albuminuria supports ACE inhibitor or ARB use.", "Pregnancy changes medication selection completely."],
      check: { question: "Which combination should generally be avoided in CKD?", choices: ["An ACE inhibitor plus an ARB", "An ARB plus a dihydropyridine CCB", "A thiazide-like agent plus a DHP CCB", "An ACE inhibitor plus a thiazide-like agent"], answer: 0, rationale: "Dual RAAS blockade increases kidney and hyperkalemia harm without the expected clinical benefit.", reviewHref: "#combination-and-comorbidity-selection" },
    },
    {
      "slug": "mineralocorticoid-antagonist-safety",
      "title": "Mineralocorticoid Antagonists: Selection and Safety",
      "summary": "Spironolactone and eplerenone can add useful aldosterone blockade, but their indications, formulation rules, renal exclusions and interactions differ.",
      "concepts": [
        "Aldosterone blockade",
        "Indication-specific eligibility",
        "Tablet versus suspension",
        "Potassium surveillance"
      ],
      "visual": "htn-mra",
      "application": "Before prescribing, name the indication, identify the exact product, check exclusions and interactions, and arrange early laboratory follow-up.",
      "lesson": [
        {"heading": "Distinguish Aldactazide from spironolactone alone", "body": "Aldactazide combines spironolactone and HCTZ in equal milligram amounts. Titrate components individually; its hypertension label describes 50 to 100 mg of each daily in one or divided doses. This is not a routine spironolactone-only starting regimen. The combination adds thiazide harms and excludes hypercalcemia as well as hyperkalemia, Addison's disease and significant renal dysfunction. HCTZ does not eliminate potassium risk; avoid routine potassium supplementation and other potassium-sparing diuretics."},
        {
          "heading": "Connect receptor blockade to monitoring",
          "body": "Aldosterone promotes distal sodium reabsorption and potassium excretion. Spironolactone and eplerenone block its receptor, so sodium retention can fall while potassium accumulates. They act at a different target from ACE inhibitors and ARBs, but combining these pathways still increases potassium risk. A useful mechanistic combination requires surveillance."
        },
        {
          "heading": "Confirm the reason to add an MRA",
          "body": "In resistant hypertension, first confirm true resistance and optimize an ACE inhibitor or ARB, a calcium-channel blocker, and an appropriate thiazide-like diuretic. The 2025 guideline recommends an MRA for persistent uncontrolled pressure on that regimen when eGFR is at least 45 mL/min/1.73 m². This recommendation does not erase product contraindications or potassium risk. Lower kidney function requires a separate individualized strategy rather than automatic extrapolation."
        },
        {
          "heading": "Dose spironolactone for the indication",
          "body": "For essential hypertension, the tablet label gives an initial total of 25 to 100 mg daily in one or divided doses, with adjustments at two-week intervals. More than 100 mg daily usually adds no further pressure reduction. Resistant-hypertension trials commonly used 25 to 50 mg daily; a labeled range is not an instruction to start every patient at its upper end. Heart-failure and primary-aldosteronism regimens follow their own indications and monitoring."
        },
        {
          "heading": "Check spironolactone exclusions",
          "body": "Hyperkalemia, Addison disease, and concurrent eplerenone are contraindications. Kidney impairment, potassium supplements, salt substitutes, and other potassium-raising drugs increase risk. Review these before starting; monitor potassium within one week after initiation or titration and regularly thereafter, with closer checks when risk is high. Also assess volume and kidney function."
        },
        {
          "heading": "Treat suspension as a distinct product",
          "body": "CaroSpir is not therapeutically equivalent to Aldactone tablets. Its hypertension starting range is 20 to 75 mg daily, with two-week titration intervals; doses above 75 mg daily generally add no further pressure reduction. If a dose above 100 mg is required for an applicable indication, the label directs use of another formulation. Take it consistently with respect to food. Its concentration is 25 mg per 5 mL: a prescribed 20 mg dose is 4 mL, not 20 mL. A concentration calculation does not establish tablet-to-suspension equivalence."
        },
        {
          "heading": "Distinguish eplerenone exclusions",
          "body": "For all indications, eplerenone is contraindicated at starting potassium above 5.5 mEq/L, creatinine clearance at or below 30 mL/min, or with strong CYP3A inhibitors. For hypertension, additional exclusions are creatinine clearance below 50, serum creatinine above 2.0 mg/dL in males or 1.8 in females, type 2 diabetes with microalbuminuria, and potassium supplements or potassium-sparing diuretics. Keep creatinine clearance distinct from eGFR."
        },
        {
          "heading": "Adjust eplerenone by indication and interaction",
          "body": "Hypertension dosing begins at 50 mg daily, increasing to 50 mg twice daily if needed; allow up to four weeks for full effect. With a moderate CYP3A inhibitor, start 25 mg daily and do not exceed 25 mg twice daily for hypertension. Strong inhibitors are contraindicated. Post-MI heart-failure dosing differs. Follow the early potassium and interaction-related laboratory schedule in the monitoring lesson."
        },
        {
          "heading": "Avoid absolute side-effect claims",
          "body": "Spironolactone can cause gynecomastia and reproductive effects. Eplerenone is more receptor-selective, but its label still reports gynecomastia and abnormal vaginal bleeding. Do not promise zero endocrine effects; investigate symptoms and reconsider therapy when needed."
        }
      ],
      "keyPoints": [
        "An MRA is an addition after an appropriate resistance assessment.",
        "Product and indication determine dosing and exclusions.",
        "CaroSpir is not automatically interchangeable with tablets.",
        "Early potassium monitoring is part of prescribing."
      ],
      "check": {
        "question": "A patient with creatinine clearance 42 mL/min is being considered for eplerenone solely for hypertension. Which label restriction matters?",
        "choices": [
          "Only clearance at or below 30 is relevant",
          "Hypertension use is contraindicated below 50 mL/min",
          "Normal potassium removes the renal restriction",
          "The restriction applies only to spironolactone"
        ],
        "answer": 1,
        "rationale": "Eplerenone has an additional hypertension-specific creatinine-clearance exclusion below 50 mL/min. A less restrictive cutoff for another indication must not be substituted.",
        "reviewHref": "#mineralocorticoid-antagonist-safety"
      }
    },
    {
      "slug": "potassium-sparing-channel-blockers",
      "title": "Amiloride and Triamterene: Preserve Potassium Safely",
      "summary": "Separate potassium conservation from blood-pressure efficacy, then check the exact product, kidney function, interactions, and follow-up.",
      "concepts": [
        "Distal sodium-channel blockade",
        "Diuretic-associated hypokalemia",
        "Product-specific dosing",
        "Potassium and renal safety"
      ],
      "visual": "htn-enac",
      "application": "When a thiazide-treated patient has low potassium, assess the cause and select a correction strategy. Adding a potassium-sparing drug creates a new monitoring obligation.",
      "lesson": [
        {
          "heading": "Separate channel blockade from receptor blockade",
          "body": "Amiloride and triamterene reduce distal sodium reabsorption and potassium loss without antagonizing aldosterone receptors. Their potassium-conserving role differs from that of an MRA, even though both groups can cause hyperkalemia. Do not assume equal blood-pressure efficacy or interchange them solely because they spare potassium."
        },
        {
          "heading": "Match the product to the problem",
          "body": "Amiloride labeling emphasizes adjunctive treatment of diuretic-associated hypokalemia or prevention when potassium loss would be hazardous. Triamterene/HCTZ similarly addresses hypokalemia on HCTZ or patients who cannot risk it; it is not routine initial treatment for everyone with hypertension. HCTZ supplies most of the combination’s pressure-lowering effect."
        },
        {
          "heading": "Titrate amiloride with a potassium reason",
          "body": "Start the labeled adjunctive regimen at 5 mg daily with food; increase to 10 mg if needed. Escalation to 15 and then 20 mg is reserved in the label for documented persistent hypokalemia at 10 mg, with careful electrolyte monitoring and limited controlled experience. A 5 to 20 mg range alone hides that qualification."
        },
        {
          "heading": "Use the tablet schedule as labeled",
          "body": "For the reviewed triamterene/HCTZ tablets, 37.5/25 mg is given as one or two tablets together daily; 75/50 mg is one tablet daily. Two 37.5/25 mg tablets provide 75 mg triamterene and 50 mg HCTZ. Dividing the smaller tablets across the day has been associated with more electrolyte and renal problems. Confirm the formulation before applying these instructions."
        },
        {"heading": "Identify amiloride/HCTZ as its own regimen", "body": "The reviewed amiloride/HCTZ tablet contains 5/50 mg. Start one tablet daily with food; the label permits two daily if needed, but that also supplies 100 mg HCTZ. Reassess both components before escalation. Initial combination therapy is reserved for patients in whom hypokalemia cannot be risked. Renal insufficiency, diabetic nephropathy and hyperkalemia remain exclusions."},
        {"heading": "Read the triamterene capsule separately", "body": "The reviewed triamterene/HCTZ capsule contains 37.5/25 mg and uses one or two capsules once daily with potassium and clinical monitoring. Verify the dispensed dosage form and its instructions; a shared ingredient pair does not establish automatic interchangeability between products."},
        {
          "heading": "Keep standalone triamterene distinct",
          "body": "Dyrenium capsules are labeled for specified edema conditions, including heart failure, cirrhosis, and nephrotic syndrome. Its usual standalone starting dose is 100 mg twice daily after meals, individualized to response, with a maximum total of 300 mg daily. This is not the dosing schedule for triamterene/HCTZ or a routine hypertension-monotherapy recommendation. The capsule label also contraindicates severe hepatic disease and severe or progressive kidney dysfunction; an edema indication does not override a contraindication."
        },
        {
          "heading": "Reconcile potassium products explicitly",
          "body": "Do not automatically continue potassium when adding a potassium-sparing diuretic. The reviewed triamterene/HCTZ tablet label prohibits supplementation; the capsule label permits a monitored exception for severe hypokalemia. Amiloride labeling permits it only for severe or refractory hypokalemia with careful monitoring. These exceptions require an explicit treatment plan. Avoid potassium-containing salt substitutes and review dietary potassium loading, kidney function and laboratory results."
        },
        {
          "heading": "Screen exclusions before adding treatment",
          "body": "Amiloride is contraindicated with hyperkalemia, anuria, renal insufficiency, or diabetic nephropathy. Triamterene/HCTZ also excludes hyperkalemia and significant renal impairment. Do not combine either with another potassium-sparing diuretic. Review supplements, potassium salt substitutes, and interacting medicines; diabetes increases hyperkalemia risk even without recognized nephropathy."
        },
        {
          "heading": "Follow potassium and kidney function together",
          "body": "Check baseline electrolytes and renal function, then monitor closely at initiation, dose changes, and illness affecting the kidneys. ACE inhibitors and ARBs can increase potassium risk; NSAIDs can complicate renal safety, and diuretics can increase lithium toxicity. A normal ECG does not exclude hyperkalemia. The HCTZ component also means low potassium can persist."
        },
        {
          "heading": "Keep triamterene-specific cautions visible",
          "body": "Review a kidney-stone history because triamterene can occur in stones. Its folate-antagonist effect can contribute to megaloblastic changes when folate stores are depleted. Potassium preservation does not cancel the HCTZ component’s adverse effects or the need to reassess volume and electrolytes."
        }
      ],
      "keyPoints": [
        "Potassium conservation is not proof of strong pressure reduction.",
        "Dose and schedule belong to the exact formulation.",
        "A combination can still cause either low or high potassium."
      ],
      "check": {
        "question": "Two 37.5/25 mg triamterene/HCTZ tablets daily are prescribed using the reviewed tablet label. Which schedule matches that label?",
        "choices": [
          "One tablet every twelve hours",
          "Both tablets as a single daily dose",
          "Alternate one and three tablets daily",
          "Take extra tablets whenever a home reading rises"
        ],
        "answer": 1,
        "rationale": "The label specifies a single daily dose and identifies greater electrolyte and renal risk with divided dosing.",
        "reviewHref": "#potassium-sparing-channel-blockers"
      }
    },
    {
      "slug": "central-alpha-agonist-product-safety",
      "title": "Central Alpha Agonists: Formulation and Withdrawal Safety",
      "summary": "Clonidine, guanfacine and methyldopa require product-specific dosing, toxicity monitoring and deliberate treatment transitions.",
      "concepts": [
        "Sympathetic suppression",
        "Oral and transdermal clonidine",
        "Delayed patch onset",
        "Guanfacine formulation differences",
        "Withdrawal planning"
      ],
      "visual": "htn-central",
      "application": "Before a switch or discontinuation, write the exact product, timing, temporary coverage and follow-up plan.",
      "lesson": [
        {
          "heading": "Connect the mechanism to follow-up",
          "body": "Central alpha-2 stimulation reduces sympathetic output. Check pressure, pulse, alertness, orthostasis and actual medication access. Sedation, dry mouth and bradycardia can undermine continued use. Review other sedating or rate-slowing medicines before adding treatment."
        },
        {
          "heading": "Start oral clonidine from its own label",
          "body": "The reviewed immediate-release tablet starts at 0.1 mg twice daily; older adults or patients with renal impairment may need less. Increase the daily total by 0.1 mg at weekly intervals when needed. Common totals are 0.2 to 0.6 mg/day in divided doses; the rarely used 2.4 mg/day ceiling is not a routine target."
        },
        {
          "heading": "Make withdrawal a prescribing decision",
          "body": "Abrupt clonidine cessation can cause dangerous rebound hypertension. The reviewed tablet label specifies gradual reduction over 2 to 4 days. When both clonidine and a beta blocker are being discontinued, it directs withdrawing the beta blocker several days before tapering clonidine. The prescriber must also respect the beta blocker’s own withdrawal precautions; this is not an instruction to stop it suddenly."
        },
        {"heading": "Ask about tolerability directly", "body": "Clonidine can cause dry mouth, drowsiness and constipation; erectile dysfunction and loss of libido have also been reported. Ask about these symptoms privately and review other possible contributors. A troublesome effect warrants a treatment discussion, but abrupt discontinuation can cause dangerous rebound hypertension."},
        {
          "heading": "Read a patch strength as a delivery rate",
          "body": "Catapres-TTS-1, -2 and -3 deliver 0.1, 0.2 and 0.3 mg per day respectively for seven days. Replace weekly. Initiation uses TTS-1, with response assessed before increases after one or two weeks. These daily delivery rates are not oral-tablet conversion instructions."
        },
        {
          "heading": "Plan the first patch transition",
          "body": "The initial patch may take 2 to 3 days to produce its antihypertensive effect. Arrange a monitored transition with gradual reduction of prior treatment; some or all prior therapy may initially need to continue. Applying a patch does not justify immediately stopping oral clonidine."
        },
        {
          "heading": "Keep patch handling separate from dose selection",
          "body": "Use clean, dry, intact, hairless upper outer arm or chest skin and rotate sites. An adhesive cover contains no medicine: place it over a loosening patch, never use it alone. Replace a significantly loosened or detached system on a fresh site. Remove Catapres-TTS before MRI because its aluminum can cause burns, and arrange continued therapy with the care team."
        },
        {
          "heading": "Distinguish guanfacine immediate release",
          "body": "For hypertension, the reviewed immediate-release label starts at 1 mg at bedtime to reduce somnolence. If response remains inadequate after 3 to 4 weeks, 2 mg may be used. Adverse effects rise substantially above 3 mg/day. Rebound can occur several days after stopping; absence of an immediate pressure rise does not establish safe withdrawal."
        },
        {
          "heading": "Do not share taper schedules across formulations",
          "body": "Guanfacine extended release is labeled for ADHD and is not interchangeable milligram for milligram with immediate release. Its label directs tapering by no more than 1 mg every 3 to 7 days with pressure and heart-rate monitoring. That schedule demonstrates why a universal 2-to-4-day taper for all central agonists is unsafe teaching. Confirm the exact medicine, formulation, indication and supervised discontinuation plan."
        },
        {"heading": "Place central agonists after preferred adult therapies", "body": "The 2025 AHA/ACC guideline generally reserves central agonists for last-line adult treatment because of central nervous system adverse effects, particularly in older adults. A convenient patch does not remove sedation, bradycardia or withdrawal risks. Confirm true resistance and the optimized regimen before selecting this pathway."},
        {"heading": "Distinguish pregnancy experience from preferred treatment", "body": "Methyldopa remains an option in pregnancy, but the 2025 AHA/ACC guideline prefers labetalol or extended-release nifedipine for maintenance treatment. Methyldopa may be less effective, especially against severe hypertension, and sedation, depression and dizziness can limit use. Select treatment with the obstetric team; pregnancy experience alone does not make it the preferred choice for every patient."},
        {"heading": "Individualize methyldopa dosing", "body": "The tablet label starts adults at 250 mg twice or three times daily for 48 hours, adjusting no sooner than every two days. Usual maintenance is 500 mg to 2 g/day in two to four doses, maximum 3 g/day. When adding to a non-thiazide antihypertensive, limit the initial daily total to 500 mg in divided doses. Renal impairment may require less."},
        {"heading": "Interpret Coombs positivity correctly", "body": "A positive direct Coombs test alone neither proves hemolytic anemia nor automatically prohibits methyldopa. Obtain baseline and periodic blood counts and investigate hemolysis when indicated. If methyldopa causes hemolytic anemia, discontinue it and do not restart."},
        {"heading": "Act on methyldopa liver toxicity", "body": "Avoid methyldopa with active liver disease, prior methyldopa-associated liver injury or MAO inhibitors. Obtain baseline and periodic liver tests, particularly during the first 6 to 12 weeks. Unexplained fever needs prompt evaluation; fever, abnormal liver tests or jaundice require stopping therapy. Do not restart after attributable liver injury."},
        {"heading": "Review iron and lithium exposure", "body": "Ferrous sulfate or gluconate can reduce methyldopa absorption; the label advises against coadministration. Concurrent lithium requires monitoring for toxicity. Resolve these interactions before interpreting poor control or neurologic symptoms as a need for more methyldopa."}
      ],
      "keyPoints": [
        "Patch delivery rates are not oral conversion ratios.",
        "Initial patch benefit is delayed.",
        "Never substitute an adhesive cover for a medicated patch.",
        "Withdrawal schedules depend on the product."
      ],
      "check": {
        "question": "Why is immediately stopping oral clonidine when applying the first patch unsafe?",
        "choices": [
          "The patch always delivers more medicine than tablets",
          "The patch acts immediately but lasts only one day",
          "Initial patch benefit can take 2 to 3 days, leaving a withdrawal and pressure-control gap",
          "The adhesive cover supplies a loading dose"
        ],
        "answer": 2,
        "rationale": "The first patch has delayed onset. Prior treatment may need to continue during a prescribed, monitored transition.",
        "reviewHref": "#central-alpha-agonist-product-safety"
      }
    },
    {
      "slug": "direct-vasodilator-selection-monitoring",
      "title": "Direct Vasodilators: Selection and Monitoring",
      "summary": "Hydralazine and oral minoxidil need deliberate patient selection, dose titration and surveillance for compensatory and immune or cardiac toxicity.",
      "concepts": [
        "Arteriolar dilation",
        "Reflex tachycardia and volume",
        "Hydralazine immune toxicity",
        "Minoxidil companion therapy",
        "Pericardial risk"
      ],
      "visual": "htn-vasodilators",
      "application": "Document the indication, companion regimen and response plan before starting a direct vasodilator.",
      "lesson": [
        {
          "heading": "Anticipate the response to arteriolar dilation",
          "body": "Hydralazine and minoxidil lower peripheral resistance, but compensatory tachycardia and salt retention can undermine benefit. Follow pressure, pulse, weight, edema and symptoms. The regimen must address these responses as well as the initial pressure reduction."
        },
        {"heading": "Choose a later-line role deliberately", "body": "For confirmed resistant hypertension when an MRA is contraindicated or not tolerated, the 2025 guideline includes direct vasodilators among possible alternatives. Hydralazine and minoxidil need companion control of reflex tachycardia and fluid retention, generally a beta blocker and loop diuretic in this setting. Confirm eligibility for the entire regimen and arrange specialist input when a companion drug is unsuitable."},
        {
          "heading": "Keep oral hydralazine dosing distinct",
          "body": "The reviewed tablet label begins 10 mg four times daily for 2 to 4 days, then 25 mg four times daily for the rest of week one, followed by 50 mg four times daily when appropriate. Titrate to the lowest effective maintenance dose. Selected resistant cases may require up to 300 mg/day, with greater toxicity at high doses. This oral schedule is not an IV emergency protocol."
        },
        {
          "heading": "Assess hydralazine eligibility and surveillance",
          "body": "The cited tablet label contraindicates coronary artery disease and rheumatic mitral valvular disease. Obtain CBC and ANA before and periodically during prolonged therapy. New arthralgia, fever, chest symptoms or persistent malaise require evaluation for lupus-like illness; blood dyscrasias require discontinuation. A positive ANA alone calls for clinical benefit-risk assessment. New paresthesia or numbness also warrants review for peripheral neuritis."
        },
        {
          "heading": "Reserve oral minoxidil for its treatment setting",
          "body": "The tablet label restricts use to symptomatic hypertension or hypertension with organ damage that remains uncontrolled despite maximum therapeutic doses of a diuretic and two other medicines. It is contraindicated in pheochromocytoma. Topical hair-growth products are not substitutes for an antihypertensive prescription."
        },
        {
          "heading": "Build the minoxidil companion regimen",
          "body": "Minoxidil usually requires a beta blocker or another sympathetic suppressant and an adequate diuretic, almost always a loop diuretic. These limit tachycardia, angina and fluid retention. If beta blockade is unsuitable, specialist selection of an alternative is necessary; do not simply omit protection."
        },
        {
          "heading": "Use a monitored minoxidil titration",
          "body": "For adults, the reviewed label starts 5 mg daily; usual effective totals are 10 to 40 mg/day, with a 100 mg/day maximum. The dose may be divided according to response. Ordinary dose changes are separated by at least three days. Renal failure or dialysis may require lower doses and close supervision."
        },
        {
          "heading": "Look beyond ankle swelling",
          "body": "Minoxidil can cause pericardial effusion and tamponade. New dyspnea, chest symptoms, rapid weight gain or clinical deterioration need prompt assessment, including echocardiography when pericardial disease is suspected. Monitor fluid balance and explain hypertrichosis before treatment. Edema is not proof that every new symptom is harmless fluid retention."
        }
      ],
      "keyPoints": [
        "Oral and emergency regimens are separate.",
        "Monitor compensatory pulse and volume changes.",
        "Interpret ANA alongside the clinical picture.",
        "Minoxidil requires attention to pericardial disease."
      ],
      "check": {
        "question": "Why does oral minoxidil usually require a diuretic and sympathetic suppressant?",
        "choices": [
          "They increase minoxidil absorption",
          "They prevent every adverse effect",
          "They remove the need for follow-up",
          "They address salt retention and reflex cardiac stimulation"
        ],
        "answer": 3,
        "rationale": "Arteriolar dilation can provoke fluid retention and tachycardia. Companion medicines mitigate those responses but do not eliminate cardiac or other toxicity.",
        "reviewHref": "#direct-vasodilator-selection-monitoring"
      }
    },
    {
      slug: "hypertension-monitoring-and-access",
      title: "Home Monitoring, Adherence, and Team-Based Control",
      summary: "Durable control requires accurate home averages, class-specific labs, symptom review, access, simplified regimens, and a team empowered to titrate through a shared protocol.",
      concepts: ["Home blood pressure protocol", "Laboratory follow-up", "Adherence and access", "Pharmacist and team-based care"],
      visual: "htn-monitoring",
      application: "Ask what happened on the days doses were missed and what makes treatment hard. The answer is often more actionable than asking whether the patient is compliant.",
      lesson: [
        { heading: "Use structured home measurement", body: "Use a validated upper-arm device and correct cuff. After quiet rest, take at least two readings one minute apart at consistent times. Record all results and calculate averages according to the care protocol. Do not chase every isolated value with unsupervised extra doses." },
        {"heading": "Set the next clinical review", "body": "After starting or intensifying therapy for uncontrolled hypertension, schedule assessment of adherence and response at monthly intervals until control is achieved. Review the complete home log, symptoms, actual doses and access. This routine interval does not postpone earlier laboratory checks, evaluation of adverse effects or urgent care."},
        {"heading": "Give a home-reading action plan", "body": "For a nonpregnant adult without concerning symptoms, a home pressure above 180 systolic or 120 diastolic should be repeated after at least one minute. If it remains that high, contact the care team as soon as possible. Severe pressure with chest pain, breathlessness, new weakness, speech difficulty or other concerning symptoms requires emergency care; call 911 rather than waiting for an average or spontaneous improvement. Do not self-administer extra doses. Pregnancy has separate, lower severe-pressure thresholds."},
        { heading: "Schedule class-specific safety checks", body: "ACE inhibitors, ARBs, and potassium-sparing medicines require potassium and kidney follow-up. Diuretics require sodium, potassium, magnesium, volume, and kidney review. Rate-slowing therapies require pulse, conduction, and symptom assessment." },
        { heading: "Set the laboratory date", body: "The 2025 hypertension guideline recommends a basic metabolic panel two to four weeks after starting or titrating a diuretic, ACE inhibitor, ARB, or MRA. Drug labeling and patient risk can require earlier checks: spironolactone calls for potassium within one week of initiation or titration; eplerenone calls for potassium before treatment, within the first week, and at one month after initiation or dose adjustment, then periodically. Eplerenone labeling also calls for potassium and creatinine within three to seven days after starting an interacting moderate CYP3A inhibitor, ACE inhibitor, ARB, or NSAID. Arrange the appointment and responsibility for reviewing results; symptoms or acute illness can require earlier assessment." },
        { heading: "Measure orthostatic safety", body: "For an in-person assessment using the CDC STEADI protocol, measure pressure and pulse after five minutes lying down, then at one and three minutes standing. Record associated symptoms and provide support against falls. A sustained decrease of at least 20 mm Hg systolic or 10 mm Hg diastolic within three minutes supports orthostatic hypotension. Dizziness or lightheadedness is clinically important even without that numerical change. Review volume, medicines, pulse response, and measurement quality; do not automatically discontinue every antihypertensive." },
        {"heading": "Explain what feeling well means", "body": "Hypertension often produces no symptoms. Feeling well or seeing an improved reading does not establish that treatment is no longer needed. Continue the agreed regimen and home checks, and arrange review when pressure or symptoms change. Rise slowly if lightheaded and avoid falls; persistent dizziness or fainting requires assessment rather than being accepted as the price of control."},
        { heading: "Treat adherence as a systems problem", body: "Cost, refill synchronization, adverse effects, health beliefs, work, food access, transportation, memory, literacy, language, depression, and regimen complexity all affect use. Simplify schedules, use combinations thoughtfully, and involve the patient in tradeoffs." },
        { heading: "Use multidisciplinary care", body: "Pharmacists, nurses, clinicians, dietitians, community health workers, and others can use standardized protocols, frequent feedback, home readings, and medication access support to improve control. Escalation should remain coordinated and documented." },
      ],
      keyPoints: ["Home monitoring requires a protocol.", "Laboratory timing is class specific.", "Nonadherence is information, not a moral failure.", "Team-based titration improves control."],
      check: { question: "Which approach best identifies a solvable adherence barrier?", choices: ["Ask what makes doses difficult and review refill access without blame", "Label the patient noncompliant and add three medicines", "Assume every missed dose is intentional", "Ignore adverse effects if pressure is high"], answer: 0, rationale: "Open, nonjudgmental assessment reveals cost, side effects, schedule, access, and belief barriers that can be addressed.", reviewHref: "#hypertension-monitoring-and-access" },
    },
  ],
  references: [
    {"label": "Carvedilol: interactions and monitoring, prescribing revision January 2026", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0e98593a-8424-48c8-acc0-671f4b566aee"},
    {"label": "AHA: responding to severe home blood pressure readings", "href": "https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings/when-to-call-911-for-high-blood-pressure"},
    {"label": "Qbrelis: pediatric dosing, concentration and storage", "href": "https://www.dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=9f6e4e57-a489-4b36-b093-b93865d3717c&type=pdf"},
    {"label": "SMFM: chronic hypertension in pregnancy after CHAP", "href": "https://publications.smfm.org/publications/439-society-for-maternal-fetal-medicine-statement-antihypertensive-therapy/"},
    {"label": "ACOG: CHAP treatment threshold advisory", "href": "https://www.acog.org/clinical/clinical-guidance/practice-advisory/articles/2022/04/clinical-guidance-for-the-integration-of-the-findings-of-the-chronic-hypertension-and-pregnancy-chap-study"},
    {"label": "Benazepril/HCTZ: combination-specific ceiling", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=e6527adf-8c74-4d81-9199-d56a7fca895e"},
    {"label": "Captopril/HCTZ: timing, dose and renal assessment", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=0ea90fd4-0da6-4ad2-ab83-6cfbe0ae515e"},
    {"label": "Vaseretic: fixed combination dosing", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=bf3007e2-8fcc-48de-8fd5-55e95033d62f"},
    {"label": "Fosinopril/HCTZ: renal boundary differs from monotherapy", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=35019655-9a30-4305-a262-936ad0e73071"},
    {"label": "Uniretic: historical FDA prescribing information", "href": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2012/020729s026lbl.pdf"},
    {"label": "Accuretic: manufacturer dosing instructions", "href": "https://www.pfizermedical.com/accuretic/dosage-admin"},

    {"label": "Benicar HCT: prior-therapy dosing", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a90915ca-f9d3-4fff-8370-d5dc4cdfc521&type=display"},
    {"label": "Avalide: dosing and available strengths", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=0d91895e-c869-4b33-9b83-d55c1ad6317e"},
    {"label": "Candesartan/HCTZ: component-based selection", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=bd8d318d-167a-4b26-935d-265dde3193de"},
    {"label": "Micardis HCT: daily total, hepatic dosing and blister handling", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=b078dae2-664d-4144-847a-3b9d9b557402"},

    {"label": "Zestoretic: selection after monotherapy and renal restrictions", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=0d3a966f-f937-05a8-a90f-5aa52ebbd613"},
    {"label": "Hyzaar: initial-treatment exception, dosing and resin interactions", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=4116ccde-2e23-45f4-b12f-6337df877744"},
    {"label": "Diovan HCT: initial, add-on and replacement dosing", "href": "https://www.dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=d76a0419-05ee-437e-884c-65807aea9569&type=pdf"},

    {"label": "Lotrel: prior therapy, dosing and contraindications", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=94ae6054-b7ae-4212-a567-4f803af8f2c7"},
    {"label": "Exforge: two-drug initiation and replacement therapy", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=d0caec89-96ec-411d-a933-63eda74a6da7"},
    {"label": "Azor: ingredient order and initial-therapy limitations", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=c5535406-b63b-49aa-88b9-169aaf0ed08e"},
    {"label": "Prestalia: perindopril arginine and renal dosing", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=eaa2bbbc-5fcc-4f15-a51c-c4e1bf320c90"},
    {"label": "Twynsta: initial therapy, dose limits and blister storage", "href": "https://dailymed.nlm.nih.gov/dailymed/downloadpdffile.cfm?setId=627146d8-fa8e-4c8b-b703-29ee080a6d5b"},

    {"label": "Exforge HCT prescribing information: component order and dosing", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=18d7820d-471f-4ee2-9ec6-25d8d27c77de"},
    {"label": "MedlinePlus: methyldopa/HCTZ and historical Aldoril brand", "href": "https://medlineplus.gov/druginfo/meds/a601076.html"},
    {"label": "Tekturna HCT: dosing and retained RAAS restrictions", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=8df0ca6a-58cf-41fc-b890-5c7fa5a3792c"},
    {"label": "Pfizer Aldactazide: combination-specific prescribing information", "href": "https://labeling.pfizer.com/ShowLabeling.aspx?id=519"},
    {"label": "Triamterene/HCTZ capsules: dosing and potassium exception", "href": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=de5e7c85-5bf5-5b5f-e053-2995a90a1fba"},
    {"label": "Amiloride/HCTZ: fixed-dose eligibility and dosing", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=8b2c581a-f955-4a8e-bf85-e768e903fd10"},
    {"label": "FDA Inderide2011: historical fixed-ratio example", "href": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2011/018031s037s038lbl.pdf"},
    {"label": "Nadolol/bendroflumethiazide: eligibility and exposure", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=d2d226ea-1624-47ee-82bf-e9660b75029f"},
    {"label": "FDA Dutoprol2022 label: historical formulation identification", "href": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/021956s011lbl.pdf"},
    {"label": "Lopressor HCT: component titration and administration", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=d8964894-3cd8-41c1-a844-148d2ef38a88"},
    {"label": "Tenoretic: component strengths and eligibility", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=992e66b7-525a-4bf8-bce7-6b29cb120378"},
    {"label": "FDA Ziac labeling2026: combination dosing and safety", "href": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/020186s044lbl.pdf"},
    {"label": "Lopressor 12.5 mg product: reproductive adverse effects and withdrawal precautions", "href": "https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=b5f4fed2-369c-4808-a682-8a5b8cfdbb4f&type=display"},
    {"label": "MedlinePlus: lisinopril adverse-effect counseling", "href": "https://medlineplus.gov/druginfo/meds/a692051.html"},
    {"label": "MedlinePlus: hydrochlorothiazide counseling", "href": "https://medlineplus.gov/druginfo/meds/a682571.html"},
    {"label": "South Tees NHS: practical diuretic timing", "href": "https://www.southtees.nhs.uk/resources/diuretics-water-tablets/"},
    {"label": "HCTZ capsules: metabolic and sexual adverse reactions", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=bd5728a2-6322-42e3-bd1e-e4915750e398&type=display"},
    {"label": "Metoprolol tartrate tablets: hypertension dosing and counseling", "href": "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=22f1b399-83ad-4c2e-bb17-c11967a7471e"},
    {"label": "Toprol-XL: hypoglycemia warning and patient counseling", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=496ddfaa-7c9c-4888-b747-a210249b367a"},
    {"label": "Edarbyclor prescribing information: initial therapy, dose and handling", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=10566939-c8b1-18a1-e063-6294a90a7601"},
    {"label": "Tribenzor prescribing information: ingredients and prior-therapy dosing", "href": "https://dailymed.nlm.nih.gov/dailymed/downloadpdffile.cfm?setId=5562b3f5-8757-11de-8a39-0800200c9a66"},
    {"label": "Trandolapril/verapamil ER prescribing information", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=39bad727-af4c-4d20-933b-7f287e88099a"},

    {"label": "NCCIH: hypertension and complementary approaches", "href": "https://www.nccih.nih.gov/health/hypertension-high-blood-pressure"},
    {"label": "NCCIH: coenzyme Q10 evidence and interactions", "href": "https://www.nccih.nih.gov/health/coenzyme-q10"},
    {"label": "NCCIH: garlic evidence and bleeding precautions", "href": "https://www.nccih.nih.gov/health/garlic"},
    {"label": "NIH ODS: omega-3 fatty acids, safety and interactions", "href": "https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/"},
    {"label": "Schulman et al. VINTAGE MI randomized trial (2006)", "href": "https://jamanetwork.com/journals/jama/fullarticle/202136"},
    {"label": "NCCIH: licorice root safety", "href": "https://www.nccih.nih.gov/health/licorice-root"},
    {"label": "NCCIH: ephedra safety", "href": "https://www.nccih.nih.gov/health/ephedra"},
    {"label": "NCCIH: yohimbe safety", "href": "https://www.nccih.nih.gov/health/yohimbe"},

    {"label": "DailyMed. Cardura immediate-release dosing and safety", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=5e1f5e49-2da1-43ab-9795-228a8bcc5a82"},
    {"label": "DailyMed. Cardura XL indication and product instructions", "href": "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=355bcdce-0481-48ba-8ebd-2009106aaf77"},
    {"label": "DailyMed. Terazosin: initiation, restarting and hypertension dosing", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=2f2db826-182d-4dd1-af97-f874b57b1fb9&type=display"},
    {"label": "DailyMed. Prazosin hypertension dosing and safety", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8606d9b8-4529-4689-8c93-7114c84c2e54"},

    {"label": "DailyMed. Hydralazine tablets: dosing, contraindications and surveillance", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=db7500f3-f8a6-46b1-bb64-9727617a9643"},
    {"label": "DailyMed. Minoxidil tablets: restricted indication, companion therapy and cardiac warnings", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8ccd07ab-07ed-4b42-b182-3d22b98abca7"},

    {"label": "DailyMed. Methyldopa: dosage, hematologic and hepatic warnings, interactions", "href": "https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=e1114a58-9ab5-486e-85ed-360365b06396&type=display"},
    {"label": "DailyMed. Clonidine immediate-release tablets: dosing and withdrawal", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=f65d90dc-11b4-4d63-b4a9-30603bc332ea"},
    {"label": "DailyMed. Catapres-TTS: dosing, transition and patient instructions", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=39e1d35e-533c-4647-8649-8168a6e92dfa"},
    {"label": "DailyMed. Guanfacine immediate-release tablets", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=73d50917-c807-4213-8efe-aea209845936"},
    {"label": "DailyMed. Guanfacine extended release: indication, switching and discontinuation", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=07cda4a1-0eb5-491e-8d16-4e6a6feb93ac&type=display"},

    {"label": "Twice-daily diltiazem ER capsules: dosing frequency", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=f1d09c53-5eb9-0b7c-e977-e2a602e84e5f"},
    {"label": "Cardizem CD: dose instructions and trial experience", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=1042fa13-e6af-46b9-8008-6c941f0978b1"},
    {"label": "Tiazac: dosing and sprinkle administration", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=c567fe7e-887e-4291-a0d1-2dd3f25cbf25"},
    {"label": "Calan SR: manufacturer prescribing information", "href": "https://labeling.pfizer.com/ShowLabeling.aspx?id=534"},

    {"label": "Zocor: dose modifications with calcium-channel blockers", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f55d5de-5a4f-4a39-8c84-c53976dd6af9"},
    {"label": "Lovastatin: dose limits with diltiazem and verapamil", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a4f02fa1-3281-46fa-bd52-323e2644b6f8"},

    {"label": "Cardizem LA: indication-specific dosing and conduction safety", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=3e180dc7-c871-4efc-8755-cae882976c8d"},
    {"label": "Cardizem immediate-release tablets: indications and exclusions", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=f3e7ecef-f360-4987-a4f5-933214130ab2"},
    {"label": "Verelan PM: dosing, pellets and cardiac contraindications", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=fd1b433f-1895-4af0-9d1f-3901c6d34c20"},

    {"label": "Katerzia: suspension handling and amlodipine interactions", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=df673a4d-acb8-444c-a472-c87ab8cbd366"},
    {"label": "Norliqva: solution dosing and storage, February 2026", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=614d974f-51c7-4b18-8171-39eb6e8d4c03"},

    {"label": "Nicardipine capsules: oral dosing and monitoring", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=575c5dab-e832-192a-e063-6294a90a34a1"},
    {"label": "Felodipine ER: dose and administration", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a6560584-e39f-47b3-84db-95da1f90fd40"},
    {"label": "Isradipine capsules: dose-response limits", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=fdb4c50e-6e6f-a43d-e053-6294a90aa24f"},
    {"label": "Sular: formulation-specific dosing", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=589157fa-d129-4de3-be3d-e0e1c22c5873"},

    {"label": "Procardia XL: dosing, release system and gastrointestinal warnings", "href": "https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=8ebcb33c-f43b-4b36-9f94-9774b2a59e06&type=display"},
    {"label": "Ingenus nifedipine extended-release tablets: dosing and food instructions", "href": "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4d02eba2-e964-4fa7-aaae-25949b5f0316"},

    {"label": "Chlorothiazide sodium injection: IV route and preparation", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=de512e9b-444c-4ae4-8c6b-accd87a02021&type=display"},
    {"label": "AAAAI/ACAAI. Drug allergy practice parameter (2022): sulfonamides and Table XIV", "href": "https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/Drug-Allergy-2022.pdf"},

    {"label": "Chlorothiazide oral suspension: adult dosing and concentration", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=bd936e35-1af8-42da-bcc0-f22489d68574"},
    {"label": "Chlorthalidone conventional tablets: dosing and dose-related toxicity", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=15dd224a-87ad-48dc-80b1-e8382a452c4c"},

    {"label": "Metolazone tablets: formulation, dosing and combined-diuretic safety", "href": "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1e566c10-4498-4f79-8874-4cc8c4216213"},
    {"label": "Thalitone: formulation-specific dosing and electrolyte precautions", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=bc5a0299-115b-4e60-bb3f-c75a95c51c15"},
    {"label": "Indapamide: hypertension titration and hyponatremia warnings", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=0687ed93-4761-4f9c-887d-95309c03f60e"},

    {"label": "Dyrenium capsules: edema indications, dosing and contraindications", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=ebb177c0-d45d-4443-a85a-e76bd9931a42"},
    {"label": "Amiloride tablets: dosing, renal exclusions and interactions", "href": "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e0cc2d44-436a-47e8-a890-589882fff4c4"},
    {"label": "Triamterene/HCTZ tablets: formulation-specific dosing and safety", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=5ba2c08b-5ce5-4967-bc3b-2c73df9865af&type=display"},

    { label: "CaroSpir: formulation-specific prescribing information", href: "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c4f70a04-7d89-4b73-8b02-17d43471bf08" },
    { label: "Metoprolol succinate extended-release: prescribing information", href: "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=151079c5-6360-45ed-8118-885543d6a4ad" },
    { label: "Spironolactone tablets: prescribing information, potassium monitoring", href: "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f0291a9-c8a6-4298-a540-23abc01fae09" },
    { label: "Eplerenone tablets: prescribing information, monitoring and contraindications", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e2a51c12-bdc2-4b3b-8e9e-bf363c2817ed" },
    { label: "CDC STEADI: measuring orthostatic blood pressure", href: "https://www.cdc.gov/steadi/media/pdfs/STEADI-Assessment-MeasuringBP-508.pdf" },
    { label: "AHA. Orthostatic hypotension in adults with hypertension (2024): statement summary", href: "https://professional.heart.org/en/science-news/orthostatic-hypotension-in-adults-with-hypertension/top-things-to-know" },
    { label: "Amlodipine prescribing information: adult dosing and hepatic precautions", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2904c6e1-2c51-8035-e063-6294a90aa04b" },
    { label: "Hydrochlorothiazide 12.5 mg capsules: prescribing information", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a3eb7294-f913-434b-896c-da028bfebc73" },
    { label: "Losartan prescribing information: interactions and pregnancy", href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=df4f55f0-fb11-4f6f-a7ed-127b50f955fc" },
    { label: "Lisinopril prescribing information: contraindications and fetal toxicity", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=538429b8-4f10-e825-e063-6294a90a5905" },
    { label: "Dofetilide prescribing information: hydrochlorothiazide interaction", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=26de5f8c-8cec-46f6-a468-69451758a278" },
    { label: "American Heart Association. Home blood pressure measurement instructions (2025)", href: "https://www.heart.org/-/media/Files/Health-Topics/High-Blood-Pressure/How_to_Measure_Your_Blood_Pressure_Letter_Size.pdf" },
    { label: "Agarwal et al. CLICK trial: chlorthalidone in advanced CKD (2021)", href: "https://doi.org/10.1056/NEJMoa2110730" },
    { label: "KDIGO. 2024 CKD guideline: blood pressure and RAS inhibitors, sections 3.4 and 3.6", href: "https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf" },
    { label: "AHA/ACC. 2025 hypertension guideline: classification and diagnostic evaluation, sections 2.1 and 3.1", href: "https://doi.org/10.1161/CIR.0000000000001356" },
    { label: "American Heart Association. 2025 High Blood Pressure Guideline", href: "https://professional.heart.org/en/science-news/2025-high-blood-pressure-guideline/top-things-to-know" },
    { label: "American College of Cardiology. 2025 High Blood Pressure Guideline", href: "https://www.acc.org/Guidelines/Guidelines/2025/08/14/10/42/High-Blood-Pressure-in-Adults-2025" },
    { label: "KDIGO. Blood Pressure in CKD Guideline", href: "https://kdigo.org/guidelines/blood-pressure-in-ckd/" },
    { label: "American Heart Association. PREVENT risk and blood pressure treatment", href: "https://professional.heart.org/en/science-news/use-of-risk-assessment-to-guide-decision-making-for-blood-pressure-management" },
  ],
  questionBank: hypertensionFoundationsQuestionBank,
};
