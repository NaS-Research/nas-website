const concepts = [
  ["spectrum", "Alcohol-associated liver disease spans steatosis, steatohepatitis, alcohol-associated hepatitis, fibrosis, cirrhosis, and acute-on-chronic liver failure.", "Name the current syndrome, fibrosis stage, decompensation history, and active alcohol exposure rather than treating ALD as one diagnosis.", "Calling every abnormal liver test alcohol-associated hepatitis can miss alternate disease and distort prognosis."],
  ["metabolism", "Alcohol dehydrogenase and aldehyde dehydrogenase generate acetaldehyde and excess NADH, promoting steatosis, oxidative stress, inflammation, and mitochondrial injury.", "Connect dose pattern, nutrition, sex-related susceptibility, genetics, metabolic disease, and coexisting liver disease to the injury phenotype.", "A single average-drinks estimate cannot capture binge pattern, duration, biology, or competing injury."],
  ["risk", "Progression risk rises with amount and duration of exposure, female sex, obesity, diabetes, smoking, gastric bypass, genetics, and other chronic liver disease.", "Screen for interacting risks and counsel that no safe continuing exposure is established once ALD is present.", "Assuming only daily drinking causes advanced ALD misses high-intensity episodic exposure and host susceptibility."],
  ["screening", "AUDIT-C and AUDIT are validated tools that identify unhealthy alcohol use more reliably than unstructured judgment.", "Ask with neutral language, quantify standard drinks and pattern, assess consequences and control, and evaluate withdrawal risk.", "Using stigmatizing language reduces disclosure and engagement."],
  ["biomarkers", "PEth, urine ethyl glucuronide or ethyl sulfate, and other biomarkers answer different exposure windows and are not moral tests.", "Select a biomarker for the clinical question, explain the window and limitations, and interpret it with history and consent.", "Treating one biomarker as proof of diagnosis, intent, or transplant suitability is an overreach."],
  ["fibrosis", "FIB-4 and transient elastography can identify advanced fibrosis, but inflammation, recent alcohol exposure, and thrombocytopenia can distort estimates.", "Repeat or escalate testing when active injury makes a noninvasive result uncertain and reserve biopsy for unresolved diagnostic questions.", "A low transaminase value does not exclude cirrhosis."],
  ["abstinence", "Sustained alcohol abstinence is the most important disease-modifying intervention across the ALD spectrum.", "Combine motivational care, medication, behavioral treatment, peer or community support, and active management of social barriers.", "A brief instruction to stop drinking without treatment is not an adequate AUD plan."],
  ["recovery-engagement", "Alcohol-use recurrence is clinical information that should prompt renewed assessment and treatment intensification rather than punitive discharge.", "Reassess withdrawal risk, goals, medication fit, behavioral care, stressors, access, safety, and the next reachable contact after recurrence.", "Removing care after recurrence increases isolation while leaving both alcohol use disorder and liver injury untreated."],
  ["withdrawal-risk", "Withdrawal severity depends on prior seizure or delirium, current symptoms, comorbidity, age, concurrent sedatives, laboratory abnormalities, and treatment setting.", "Use a validated assessment within its limits and choose ambulatory or inpatient care from risk, support, monitoring, and medical stability.", "CIWA-Ar can be unreliable in delirium, severe illness, communication barriers, or hepatic encephalopathy."],
  ["benzodiazepines", "Benzodiazepines are first-line for moderate to severe withdrawal because they prevent seizures and delirium.", "Use symptom-triggered treatment when valid, monitor respiratory and mental status, and favor agents with less hepatic oxidation such as lorazepam or oxazepam in significant liver disease.", "Long-acting accumulation in poor liver function can worsen oversedation and encephalopathy."],
  ["phenobarbital-adjuncts", "Phenobarbital can be used by experienced clinicians in closely monitored settings, while alpha-2 agonists and beta blockers are adjuncts rather than seizure prevention.", "Escalate level of care when symptoms remain uncontrolled or sedation risk exceeds monitoring capacity.", "Using clonidine alone can mask autonomic signs while leaving seizures and delirium untreated."],
  ["thiamine", "Thiamine prevents and treats Wernicke encephalopathy, and parenteral delivery is preferred when malnutrition, malabsorption, critical illness, or severe withdrawal is present.", "Give thiamine promptly, assess magnesium and nutrition, and never delay urgent glucose solely to sequence thiamine first.", "The classic triad is insensitive, so waiting for all three findings misses disease."],
  ["acamprosate", "Acamprosate supports abstinence after withdrawal and is not hepatically metabolized, but kidney function and three-times-daily adherence determine use.", "Calculate creatinine clearance, reduce dose for moderate impairment, avoid severe renal impairment, and build an adherence plan.", "Choosing acamprosate without renal assessment can produce unsafe exposure."],
  ["naltrexone", "Naltrexone reduces heavy drinking and reward but blocks opioid receptors and requires liver, opioid, and pain-plan assessment.", "Exclude current opioid use or dependence, plan the opioid-free interval and emergency pain strategy, and use cautiously only in appropriate compensated liver disease.", "Starting naltrexone during opioid dependence can precipitate severe withdrawal."],
  ["baclofen", "Baclofen is an off-label AUD option with the strongest ALD-specific trial experience and is recommended as an option in compensated ALD.", "Start low, titrate carefully, adjust for kidney function, and monitor sedation, falls, cognition, and withdrawal from abrupt discontinuation.", "Treating baclofen as risk-free because it is not primarily hepatotoxic ignores neurologic and renal toxicity."],
  ["gabapentin-topiramate", "Gabapentin and topiramate are off-label AUD options whose renal, cognitive, sedation, and misuse profiles require selection.", "Match the drug to withdrawal history, neuropathic symptoms, migraine, kidney function, cognition, pregnancy potential, and adherence.", "Using either drug without a treatment goal and monitoring plan creates avoidable CNS harm."],
  ["disulfiram", "Disulfiram inhibits aldehyde dehydrogenase and can cause severe hepatotoxicity, so current ACG guidance advises against it across ALD.", "Use safer evidence-based AUD options and document why the older textbook list is no longer an appropriate liver-disease menu.", "Prescribing disulfiram for a patient with ALD can compound liver injury."],
  ["ah-diagnosis", "Alcohol-associated hepatitis is an acute clinical syndrome of recent jaundice after sustained heavy exposure, usually with bilirubin elevation and AST greater than ALT, while alternate causes must be excluded.", "Assess infection, biliary obstruction, viral and drug injury, ischemia, autoimmune disease, decompensation, kidney injury, and exposure timing.", "The AST-to-ALT pattern supports but does not prove the diagnosis."],
  ["diagnostic-uncertainty", "When the exposure history, laboratory pattern, imaging, or competing causes do not form a high-confidence alcohol-associated hepatitis syndrome, diagnostic uncertainty must remain explicit.", "Complete the competing-cause evaluation and use biopsy selectively when resolving uncertainty would change corticosteroid, transplant, or other high-risk decisions.", "Assigning the diagnosis from alcohol history alone can conceal infection, obstruction, drug injury, ischemia, or another treatable liver disease."],
  ["ah-severity", "MELD above 20 identifies severe alcohol-associated hepatitis in current ACG guidance, while Maddrey DF remains historical and complementary.", "Calculate with verified units and current values, then integrate infection, organ failures, trajectory, and transplant candidacy.", "A severity score does not establish the diagnosis or steroid eligibility by itself."],
  ["corticosteroids", "Prednisolone can improve short-term survival in selected severe alcohol-associated hepatitis but increases infection risk and does not provide durable benefit without abstinence.", "Exclude uncontrolled infection, bleeding, severe kidney failure, and other contraindications, then reassess daily rather than committing automatically to 28 days.", "Universal steroid treatment exposes nonresponders to infection without benefit."],
  ["lille", "The Lille score at day 4 or 7 identifies corticosteroid nonresponse, and a score at least 0.45 usually supports stopping therapy.", "Schedule the calculation before the first steroid dose and verify bilirubin trajectory, renal function, and infection status.", "Continuing corticosteroids despite nonresponse increases harm without demonstrated benefit."],
  ["nac", "Current ACG guidance recommends intravenous N-acetylcysteine as an adjunct to corticosteroids in severe alcohol-associated hepatitis.", "Use it as adjunctive short-course therapy within specialist management, not as a substitute for eligibility screening, nutrition, or AUD treatment.", "NAC monotherapy is not established as a complete severe-AH strategy."],
  ["nutrition", "Severe ALD commonly causes protein-calorie malnutrition, sarcopenia, thiamine and micronutrient deficits, and refeeding risk.", "Target adequate energy and about 1.2 to 1.5 g/kg/day protein, minimize fasting, add oral supplements, and use enteral feeding when intake remains inadequate.", "Routine protein restriction worsens muscle loss and outcomes."],
  ["infection-organ-failure", "Infection, AKI, bleeding, encephalopathy, and ACLF are common in severe AH and determine treatment safety and prognosis.", "Culture and image from clinical evidence, perform diagnostic paracentesis when indicated, avoid universal prophylactic antibiotics, and treat documented or strongly suspected infection promptly.", "Starting antibiotics for every hospitalized AH patient without evidence is not recommended."],
  ["cirrhosis-coordination", "Established cirrhosis retains its ascites, SBP, variceal, encephalopathy, kidney, nutrition, and cancer risks even after alcohol exposure stops.", "Run etiologic recovery care and complication-specific cirrhosis care in parallel with surveillance and transplant-aware follow-up.", "Treating abstinence as an immediate substitute for portal-hypertension and decompensation management leaves major risks active."],
  ["cirrhosis-medication-safety", "Decompensated liver disease changes the safety of sedatives, NSAIDs, nephrotoxins, diuretics, beta blockers, supplements, and medicines that alter cognition, pressure, bleeding, sodium, or kidney function.", "Reconcile prescription, nonprescription, and supplemental products at every transition and connect each medicine to a liver, kidney, hemodynamic, or cognitive monitoring endpoint.", "Allowing withdrawal or recovery medicines to accumulate without liver, kidney, and encephalopathy review can create a preventable decompensation."],
  ["transplant", "Early liver transplantation may be considered for highly selected severe AH nonresponders, and candidacy should not depend on a rigid six-month abstinence rule alone.", "Use multidisciplinary psychosocial assessment, relapse-risk evaluation, support, insight, treatment engagement, medical urgency, and center protocol.", "Equating a short abstinence interval with inevitable relapse is not evidence-based selection."],
  ["post-transplant-recovery", "Liver transplantation treats organ failure but does not eliminate alcohol use disorder, psychiatric illness, social stressors, or recurrence risk.", "Continue individualized medication when appropriate, behavioral care, transparent biomarker use, family and social support, and rapid nonpunitive response to recurrence after transplant.", "Ending recovery treatment after transplantation can place the graft and the patient at avoidable risk."],
  ["integrated-care", "ALD outcomes improve when hepatology and addiction care operate as one longitudinal system.", "Assign ownership for withdrawal safety, AUD medication, behavioral care, nutrition, liver complications, biomarkers when appropriate, HCC surveillance, transplant evaluation, and re-entry after recurrence.", "Discharging after detoxification without AUD treatment leaves the disease mechanism untreated."],
  ["transition-ownership", "Hospital discharge, detoxification, rehabilitation, transplant evaluation, incarceration, insurance change, and recurrence can interrupt both liver and recovery treatment.", "At each transition, reconcile withdrawal risk, AUD medication, liver medicines, nutrition, monitoring, surveillance, treatment access, and the named next clinician or program.", "A referral without confirmed access, medication supply, safety instructions, and follow-up ownership creates a predictable care gap."],
];
const reviewLessonByConcept={
  spectrum:"spectrum-mechanism",metabolism:"spectrum-mechanism",risk:"spectrum-mechanism",
  screening:"screening-staging",biomarkers:"screening-staging",fibrosis:"screening-staging",
  abstinence:"recovery-system","recovery-engagement":"recovery-system",
  "withdrawal-risk":"withdrawal",benzodiazepines:"withdrawal","phenobarbital-adjuncts":"withdrawal",
  thiamine:"thiamine-nutrition",nutrition:"thiamine-nutrition",
  acamprosate:"aud-medications",naltrexone:"aud-medications",baclofen:"aud-medications","gabapentin-topiramate":"aud-medications",disulfiram:"aud-medications",
  "ah-diagnosis":"hepatitis-diagnosis","diagnostic-uncertainty":"hepatitis-diagnosis",
  "ah-severity":"steroid-lille",corticosteroids:"steroid-lille",lille:"steroid-lille",
  nac:"nac-support","infection-organ-failure":"nac-support",
  "cirrhosis-coordination":"cirrhosis-complications","cirrhosis-medication-safety":"cirrhosis-complications",
  transplant:"transplant-ethics","post-transplant-recovery":"transplant-ethics",
  "integrated-care":"integrated-case","transition-ownership":"integrated-case",
};
const dimensions = [["principle", "Which statement is most accurate?", 0], ["action", "Which action best applies the evidence?", 1], ["assessment", "Which plan demonstrates the strongest clinical reasoning?", 1], ["hazard", "Which error creates the greatest avoidable risk?", 2]];
const generic = ["Use one laboratory value without confirming the syndrome, exposure history, organ function, or competing causes.", "Treat withdrawal as complete treatment for alcohol use disorder and omit longitudinal recovery care.", "Apply a 2023 textbook statement without checking current guidance, labeling, and patient-specific liver or kidney status."];
export const alcoholAssociatedLiverDiseaseQuestionBank = concepts.flatMap(([slug, principle, action, hazard], conceptIndex) => dimensions.map(([dimension, stem, answerType], dimensionIndex) => {
  const correct = [principle, action, hazard][answerType];
  const choices = dimension === "hazard" ? [hazard, principle, action, generic[(conceptIndex + dimensionIndex) % 3]] : [correct, hazard, generic[(conceptIndex + dimensionIndex) % 3], generic[(conceptIndex + dimensionIndex + 1) % 3]];
  return {id:`alcohol-associated-liver-disease-${String(conceptIndex*4+dimensionIndex+1).padStart(3,"0")}`,question:`${stem} Focus: ${slug.replaceAll("-"," ")}.`,choices,answer:0,rationale:`${principle} ${action}`,reviewHref:`#${reviewLessonByConcept[slug]}`,difficulty:dimensionIndex<2?"foundational":"advanced"};
}));

// Reconcile complete clinical cases while preserving existing IDs, keys, difficulty and lesson links.
Object.assign(alcoholAssociatedLiverDiseaseQuestionBank.find((question) => question.id === "alcohol-associated-liver-disease-097"), {
  "question": "A patient is hospitalized with severe alcohol-associated hepatitis, without infection, GI bleeding or another antibiotic-prophylaxis indication. Which antibiotic plan is best?",
  "choices": [
    "Avoid universal prophylactic antibiotics solely because severe hepatitis is present; continue clinical surveillance.",
    "Start indefinite broad-spectrum antibiotics for every severe hepatitis admission.",
    "Treat every elevated white-cell count as proof of bacterial infection.",
    "Stop all infection assessment because initial cultures are negative."
  ],
  "rationale": "ACG recommends against universal prophylactic antibiotics for severe alcohol-associated hepatitis. This does not remove the need to look for and treat suspected infection or recognize separate cirrhosis-related indications. A white-cell count alone is not proof of infection, and negative initial cultures do not eliminate later risk."
});
Object.assign(alcoholAssociatedLiverDiseaseQuestionBank.find((question) => question.id === "alcohol-associated-liver-disease-098"), {
  "question": "A patient with alcohol-associated hepatitis and cirrhotic ascites has new abdominal pain and ascitic PMNs of 480 cells/mm³. Which plan is best?",
  "choices": [
    "Treat suspected SBP promptly and assess albumin and secondary-source clues.",
    "Withhold antibiotics because universal hepatitis prophylaxis is discouraged.",
    "Wait for a positive culture before treating the elevated PMN count.",
    "Manage alcohol recovery alone until the abdominal pain resolves."
  ],
  "rationale": "The recommendation against universal hepatitis prophylaxis does not apply to treatment of suspected SBP. PMNs ≥250 cells/mm³ support prompt active antibiotics, with albumin assessment and source evaluation. Recovery care continues alongside complication management."
});
Object.assign(alcoholAssociatedLiverDiseaseQuestionBank.find((question) => question.id === "alcohol-associated-liver-disease-099"), {
  "question": "A patient with severe alcohol-associated hepatitis has an uncontrolled bacterial infection when corticosteroids are considered. Which plan is best?",
  "choices": [
    "Treat and control the infection, then reassess steroid eligibility and other contraindications.",
    "Start corticosteroids immediately because infection never affects eligibility.",
    "Treat the infection as a permanent ban on steroids even after control.",
    "Use steroid therapy as a substitute for active antibiotics."
  ],
  "rationale": "Active infection is a corticosteroid contraindication in ACG guidance, but eligibility may be reconsidered after adequate control. Infection treatment is urgent and distinct from universal prophylaxis. Neither automatic immediate steroids nor an irreversible ban reflects this reassessment process."
});
Object.assign(alcoholAssociatedLiverDiseaseQuestionBank.find((question) => question.id === "alcohol-associated-liver-disease-100"), {
  "question": "Which decision creates the greatest avoidable infection risk in severe alcohol-associated hepatitis with ascites?",
  "choices": [
    "Exclude SBP solely because the patient is afebrile despite new AKI and confusion.",
    "Assess new organ dysfunction for infection and other causes.",
    "Perform prompt diagnostic paracentesis when indicated.",
    "Treat documented or strongly suspected bacterial infection promptly."
  ],
  "rationale": "SBP can present without fever and with AKI or encephalopathy. New deterioration requires assessment, including indicated ascitic sampling, while urgent treatment proceeds as needed. The other plans support timely recognition and treatment rather than universal preventive antibiotics."
});
Object.assign(alcoholAssociatedLiverDiseaseQuestionBank.find((question) => question.id === "alcohol-associated-liver-disease-101"), {
  "question": "A patient with alcohol-associated cirrhosis has stopped alcohol use but still has ascites after a prior SBP episode. Which statement is best?",
  "choices": [
    "Sustained abstinence improves the disease course, but SBP risk and its prevention plan still require assessment.",
    "Stopping alcohol immediately eliminates the prior-SBP prophylaxis indication.",
    "Abstinence proves ascites has resolved without reassessment.",
    "Cirrhosis complications no longer need follow-up once withdrawal ends."
  ],
  "rationale": "Alcohol abstinence is a central disease-modifying goal but does not prove immediate reversal of established cirrhosis or persistent ascites. Prior SBP requires a specialist-directed prevention and monitoring plan, reassessed as the clinical state changes. Withdrawal treatment is only part of recovery care."
});
Object.assign(alcoholAssociatedLiverDiseaseQuestionBank.find((question) => question.id === "alcohol-associated-liver-disease-102"), {
  "question": "A patient with alcohol-associated cirrhosis and recurrent ascites begins sustained recovery treatment. Which follow-up plan is best?",
  "choices": [
    "Coordinate AUD recovery care with ascites, kidney, infection and other cirrhosis care.",
    "Defer all cirrhosis care until a fixed abstinence interval has passed.",
    "Treat every recurrent ascites episode as infection without fluid assessment.",
    "Stop portal-hypertension follow-up solely because alcohol use has stopped."
  ],
  "rationale": "Integrated care addresses both alcohol use disorder and established liver disease. Complication-specific assessment continues while abstinence is supported. Neither a fixed delay nor an assumption that every fluid recurrence is infected is appropriate."
});
Object.assign(alcoholAssociatedLiverDiseaseQuestionBank.find((question) => question.id === "alcohol-associated-liver-disease-103"), {
  "question": "A patient with alcohol-associated cirrhosis needs repeated paracentesis despite ongoing recovery care. Which coordinated plan is best?",
  "choices": [
    "Continue recovery and symptom care while assessing transplant and appropriate advanced options.",
    "Assume each successful tap removes the need for transplant assessment.",
    "Stop AUD care because the patient is being referred for transplant.",
    "Guarantee transplant eligibility solely from a single abstinence report."
  ],
  "rationale": "Recurrent or refractory ascites warrants advanced liver assessment while symptom relief and AUD treatment continue. ACG recommends integrated care and transplant referral when medically indicated. A tap provides relief without proving recovery, and transplant eligibility requires a full evaluation."
});
Object.assign(alcoholAssociatedLiverDiseaseQuestionBank.find((question) => question.id === "alcohol-associated-liver-disease-104"), {
  "question": "Which change creates the greatest avoidable risk after a patient with established cirrhosis stops alcohol use?",
  "choices": [
    "Immediately discontinue all cirrhosis complication care without reassessing persistent disease or risk.",
    "Continue coordinated liver and AUD follow-up.",
    "Reassess prevention regimens as ascites and clinical status change.",
    "Refer for advanced liver evaluation when decompensation warrants it."
  ],
  "rationale": "Abstinence improves long-term outcomes but does not instantly remove established cirrhosis risks. Care and surveillance should be reassessed from the patient’s clinical state, with recovery support and appropriate referral. Automatic discontinuation leaves unresolved disease unmanaged."
});


// Distinct medication-safety cases retain stable IDs, keys and lesson anchors.
const verifiedAldCirrhosisQuestions = {
  "alcohol-associated-liver-disease-105": {
    "question": "An adult with alcohol-associated cirrhosis, ascites and knee pain plans to start oral ibuprofen without review. Which advice best follows cirrhosis guidance?",
    "choices": [
      "Avoid the systemic NSAID and arrange an individualized pain plan, starting with suitable local measures.",
      "Use ibuprofen because over-the-counter status eliminates renal and bleeding risks.",
      "Replace ibuprofen with oral naproxen because systemic NSAIDs cannot worsen ascites.",
      "Assume alcohol abstinence makes any analgesic dose safe."
    ],
    "rationale": "Systemic NSAIDs can cause renal injury, bleeding and worsening ascites in cirrhosis; naproxen shares these risks. Local measures are preferred for localized pain when suitable. Over-the-counter availability and abstinence do not remove the safety problem; the clinician should assess the cause and choose patient-specific therapy."
  },
  "alcohol-associated-liver-disease-106": {
    "question": "A cirrhosis pain plan allows at most 2 g/day of acetaminophen from all products. The patient takes 500 mg four times daily plus two 650 mg doses from a cold medicine. What is the total daily amount?",
    "choices": [
      "3,300 mg, exceeding the stated plan by 1,300 mg.",
      "2,000 mg, because combination-product acetaminophen does not count.",
      "1,300 mg, because only the cold medicine counts.",
      "5,200 mg, exceeding the stated plan by 3,200 mg."
    ],
    "rationale": "The scheduled tablets contribute 500 mg × 4 = 2,000 mg. The cold medicine adds 650 mg × 2 = 1,300 mg, for 3,300 mg total: 1,300 mg above the stated 2,000 mg ceiling. Every product counts. AASLD generally limits acetaminophen to 2 g/day in cirrhosis, with individualized review and lower prescribed limits when appropriate; a calculation does not establish that an excessive exposure is harmless."
  },
  "alcohol-associated-liver-disease-107": {
    "question": "A patient with cirrhotic ascites taking spironolactone and losartan develops new AKI and potassium of 5.8 mEq/L. Which plan is safest?",
    "choices": [
      "Arrange prompt clinical review of potassium, kidney function and the medication plan, including potassium-raising and renal-perfusion risks.",
      "Continue all doses without review because the patient has stopped alcohol use.",
      "Increase spironolactone solely to preserve the previous ascites plan despite the new potassium value.",
      "Diagnose HRS-AKI with certainty from this creatinine change and omit review of volume, infection and other causes."
    ],
    "rationale": "New AKI and hyperkalemia require prompt assessment, a treatment plan and medication review. The spironolactone label directs dose reduction or discontinuation and treatment of hyperkalemia when it occurs. Spironolactone can raise potassium, especially with impaired kidney function; an ARB is inappropriate to continue automatically in cirrhosis with ascites because of renal-perfusion risk. Current physiology governs adjustment. Abstinence does not neutralize toxicity, and AKI has competing or coexisting causes that must be assessed before assigning HRS-AKI."
  },
  "alcohol-associated-liver-disease-108": {
    "question": "A patient with decompensated cirrhosis and prior HE becomes increasingly drowsy after diazepam is newly prescribed for sleep. No active withdrawal indication is identified. Which response is best?",
    "choices": [
      "Promptly assess consciousness, competing precipitants and sedative exposure, and have the treating team reassess the sleep prescription.",
      "Escalate diazepam because increasing drowsiness proves the liver is recovering.",
      "Wait for an elevated ammonia result before evaluating the drowsiness or medication.",
      "Declare that benzodiazepines can never be used for monitored severe alcohol withdrawal in any patient with cirrhosis."
    ],
    "rationale": "Benzodiazepines are generally avoided for sleep in decompensated cirrhosis because of sedation, respiratory, cognitive and fall risks. Worsening drowsiness warrants prompt clinical and medication assessment; severe impairment needs urgent airway care. Ammonia alone is not a gate for evaluation. This sleep-use concern does not prohibit carefully monitored benzodiazepines for severe withdrawal or selected comfort care; dependence and withdrawal risk govern any supervised change."
  }
};
for (const item of alcoholAssociatedLiverDiseaseQuestionBank) {
  if (verifiedAldCirrhosisQuestions[item.id]) Object.assign(item, verifiedAldCirrhosisQuestions[item.id]);
}


// Distinct neurological and nutrition cases preserve stable IDs and anchors.
const verifiedAldNutritionQuestions = {
  "alcohol-associated-liver-disease-045": {
    "question": "A patient with alcohol dependence, weeks of poor intake and new confusion has an unsteady gait but no documented eye-movement abnormality. Which response is best?",
    "choices": [
      "Urgently assess suspected Wernicke encephalopathy and give protocol-directed parenteral thiamine while evaluating other causes.",
      "Exclude Wernicke encephalopathy because all three classic findings are not present.",
      "Treat presumed HE alone and wait for persistent eye findings before considering thiamine.",
      "Use an oral multivitamin as the sole response to the new neurological findings."
    ],
    "rationale": "Confusion with poor nutrition and ataxia supports urgent Wernicke assessment even without ocular findings. Suspected Wernicke encephalopathy needs parenteral thiamine and clinical review in hospital. The full triad is not required; HE, withdrawal, hypoglycemia and other causes should be evaluated concurrently rather than replacing vitamin treatment with one presumed diagnosis. An oral multivitamin alone is not the neurological treatment regimen."
  },
  "alcohol-associated-liver-disease-046": {
    "question": "A malnourished adult with alcohol dependence has a glucose of 38 mg/dL, sweating and confusion. IV access and glucose are available, but the thiamine dose is being prepared. What is the best sequence?",
    "choices": [
      "Give urgent glucose now and administer thiamine promptly, in either order or concurrently as feasible.",
      "Withhold glucose until thiamine is administered, regardless of the hypoglycemic symptoms.",
      "Give thiamine alone and wait for it to correct the low glucose.",
      "Correct the glucose and permanently omit thiamine because the patient no longer has vitamin-deficiency risk."
    ],
    "rationale": "The symptomatic glucose of 38 mg/dL requires immediate treatment. ASAM permits glucose and thiamine in either order or concurrently, so emergency glucose must not wait. Thiamine should still be given promptly according to risk and purpose; it is not a glucose substitute. Correcting hypoglycemia does not erase malnutrition or Wernicke risk."
  },
  "alcohol-associated-liver-disease-047": {
    "question": "A hospitalized patient was receiving thiamine 100 mg IV daily for withdrawal prophylaxis but now develops confusion and gait ataxia. Which interpretation is best?",
    "choices": [
      "Reassess urgently for Wernicke encephalopathy and move to the hospital’s parenteral treatment pathway if suspected.",
      "The preventive 100 mg daily regimen guarantees adequate treatment of any newly developing Wernicke encephalopathy.",
      "Switch to an oral multivitamin alone because new neurological findings prove parenteral thiamine is unnecessary.",
      "Stop thiamine because prevention and treatment always use an identical regimen."
    ],
    "rationale": "ASAM describes 100 mg IV or IM daily for 3 to 5 days as a typical preventive withdrawal regimen, not a guarantee of adequate neurological treatment. New confusion and ataxia require urgent assessment, competing-cause evaluation and purpose-specific parenteral treatment when Wernicke encephalopathy is suspected. Oral multivitamins alone do not replace that pathway, and prevention and treatment are not interchangeable."
  },
  "alcohol-associated-liver-disease-048": {
    "question": "During parenteral treatment for suspected Wernicke encephalopathy, a patient has documented hypomagnesemia and incomplete early neurological improvement. Which action is most appropriate?",
    "choices": [
      "Continue clinical reassessment and thiamine treatment while correcting low magnesium with renal and electrolyte monitoring.",
      "Declare thiamine ineffective and stop it without reviewing magnesium or competing causes.",
      "Give unrestricted magnesium to every patient regardless of the value or kidney function.",
      "Wait until a fixed thiamine course ends before assessing the documented magnesium deficiency."
    ],
    "rationale": "Magnesium supports conversion of thiamine to its active form, and hypomagnesemia can impair response. Recheck and correct the documented deficiency while continuing appropriate thiamine treatment and reviewing other causes. Replacement must account for kidney function, severity and monitoring; neither unrestricted magnesium nor delaying assessment until a fixed course ends is appropriate."
  },
  "alcohol-associated-liver-disease-093": {
    "question": "For a non-obese patient with alcohol-associated hepatitis, the dietitian selects 70 kg for both calculations and prescribes an eventual goal of 35 kcal/kg/day plus 1.2 to 1.5 g/kg/day protein. Which daily goal matches that prescription?",
    "choices": [
      "2,450 kcal and 84 to 105 g protein.",
      "2,450 kcal and 42 to 52.5 g protein.",
      "3,500 kcal and 84 to 105 g protein.",
      "2,450 kcal and 120 to 150 g protein."
    ],
    "rationale": "Energy is 35 kcal/kg × 70 kg = 2,450 kcal/day. Protein is 1.2 × 70 = 84 g through 1.5 × 70 = 105 g/day. The other options halve protein, use 100 kg for energy or omit the prescribed weight in the protein calculation. These are the eventual goals for the stated individualized prescription; refeeding risk can require a lower initial intake and monitored advancement."
  },
  "alcohol-associated-liver-disease-094": {
    "question": "A patient with cirrhosis and HE has poor intake and muscle loss. Which nutrition plan best follows adult cirrhosis guidance?",
    "choices": [
      "Maintain an individualized protein goal while treating HE, addressing intake barriers and reducing prolonged fasting.",
      "Remove all protein until an ammonia result returns to the reference range.",
      "Use routine severe protein restriction as the primary strategy for restoring muscle.",
      "Ban all animal protein in every patient and replace the full nutrition plan with a vitamin tablet."
    ],
    "rationale": "AASLD recommends adequate individualized protein and no routine protein restriction for HE. Restriction can worsen muscle catabolism; HE treatment and nutritional support should proceed together. Use varied sources, including vegetable and dairy protein, with small frequent meals and a suitable late snack or early breakfast. Ammonia is not a gate for resuming all protein, a universal meat ban is not required, and vitamins cannot replace calories and protein."
  },
  "alcohol-associated-liver-disease-095": {
    "question": "A patient has taken almost no food for 12 days and has low phosphate before feeding. After nutrition starts, phosphate falls further and new weakness develops. Which response is best?",
    "choices": [
      "Promptly assess possible refeeding problems, correct deficiencies and reassess feed advancement under a monitored nutrition protocol.",
      "Immediately increase intake to the full eventual calorie goal without electrolyte review.",
      "Use albumin alone to decide that the feed is safe despite the phosphate trend and weakness.",
      "Exclude refeeding problems because the nutrition is enteral rather than parenteral."
    ],
    "rationale": "More than 10 days of negligible intake and low baseline phosphate identify high refeeding risk in NICE CG32. Falling phosphate and new weakness require prompt clinical and electrolyte assessment, correction and review of feeding advancement. Provide thiamine and monitor other electrolytes, glucose, kidney function and fluid status. Albumin alone cannot establish nutrition safety, and oral or enteral feeding does not eliminate refeeding risk."
  },
  "alcohol-associated-liver-disease-096": {
    "question": "A patient with alcohol-associated hepatitis still cannot meet nutrition needs despite oral supplements. The gastrointestinal tract is usable, and the team has assessed airway safety, stability and access. Which next step best follows ACG guidance?",
    "choices": [
      "Arrange an individualized enteral nutrition plan with the nutrition team.",
      "Use parenteral nutrition automatically because alcohol-associated hepatitis excludes gastrointestinal feeding.",
      "Replace calorie and protein support with larger vitamin doses alone.",
      "Continue the inadequate intake indefinitely because starting oral supplements proves nutrition needs are met."
    ],
    "rationale": "ACG recommends enteral nutrition for alcohol-associated hepatitis when oral intake remains inadequate despite supplements. The route requires individual assessment, including gastrointestinal function, airway safety, stability and access. ALD alone does not require parenteral nutrition; vitamins do not replace macronutrients, and a supplement order must be followed by assessment of actual intake."
  }
};
for (const item of alcoholAssociatedLiverDiseaseQuestionBank) {
  if (verifiedAldNutritionQuestions[item.id]) Object.assign(item, verifiedAldNutritionQuestions[item.id]);
}


// Distinct NAC cases retain stable IDs, keys and lesson anchors.
const verifiedAldNacQuestions = {
  "alcohol-associated-liver-disease-089": {
    "question": "An adult with confirmed severe alcohol-associated hepatitis is eligible for corticosteroids after specialist assessment. Which NAC plan best matches the 2024 ACG guideline?",
    "choices": [
      "Use a verified short course of IV NAC as an adjunct to corticosteroids while nutrition and AUD care continue.",
      "Use NAC alone as a proven cure and omit other disease treatment.",
      "Replace the prescribed IV course with an oral supplement because formulations are interchangeable.",
      "Omit nutrition and infection monitoring once NAC is started."
    ],
    "rationale": "ACG recommends IV NAC as an adjunct to corticosteroids in severe AH and describes a five-day course within specialist care. Eligibility, nutrition, infection management and AUD treatment remain necessary. Neither NAC monotherapy as a cure nor an unreviewed change of formulation follows this evidence."
  },
  "alcohol-associated-liver-disease-090": {
    "question": "A verified severe-AH protocol order specifies NAC 100 mg/kg for day 2 in a 70 kg adult. The injectable concentrate is 200 mg/mL. How much concentrate is required before dilution?",
    "choices": [
      "35 mL.",
      "7 mL.",
      "70 mL.",
      "350 mL."
    ],
    "rationale": "The dose is 70 kg × 100 mg/kg = 7,000 mg. At 200 mg/mL, draw 7,000 mg ÷ 200 mg/mL = 35 mL of concentrate. The 100 mg/kg/day dose on days 2 through 5 was used in the primary AH trial; this case supplies a verified protocol order. The 35 mL is not the final infusion volume: IV NAC must be diluted with the rate, compatible diluent and total fluid plan independently verified."
  },
  "alcohol-associated-liver-disease-091": {
    "question": "During an IV NAC infusion for severe AH, a patient develops urticaria, wheezing and hypotension. Which immediate response is safest?",
    "choices": [
      "Stop the infusion immediately and initiate urgent appropriate treatment for a serious hypersensitivity reaction.",
      "Continue at the same rate because favorable trial safety rules out a serious reaction.",
      "Restart immediately while wheezing and hypotension continue.",
      "Attribute all symptoms to hepatic encephalopathy and defer infusion assessment."
    ],
    "rationale": "The acetylcysteine label warns of serious and potentially life-threatening hypersensitivity, including hypotension and wheezing. Stop the infusion immediately and treat appropriately; unresolved respiratory or circulatory symptoms require urgent care. Favorable average trial safety does not exclude an individual serious reaction. Any later treatment decision requires supervised review after treatment and symptom resolution."
  },
  "alcohol-associated-liver-disease-092": {
    "question": "A learner says the primary Nguyen-Khac trial proves that adding five days of IV NAC to prednisolone improves six-month survival in severe AH. Which correction is most accurate?",
    "choices": [
      "One-month survival improved, but the primary six-month survival outcome was not significantly improved.",
      "The trial established a guaranteed six-month survival benefit for every treated patient.",
      "The trial proved NAC monotherapy is superior to all corticosteroid strategies.",
      "The trial established that nutrition and AUD follow-up can be omitted after NAC."
    ],
    "rationale": "The randomized trial reported a one-month survival benefit for the combination, but did not significantly improve its primary six-month survival outcome. ACG describes divergent adjunctive-study results and supports a qualified adjunctive role. The trial does not establish guaranteed individual benefit, NAC monotherapy superiority or replacement of nutrition and recovery care."
  }
};
for (const item of alcoholAssociatedLiverDiseaseQuestionBank) {
  if (verifiedAldNacQuestions[item.id]) Object.assign(item, verifiedAldNacQuestions[item.id]);
}


// Distinct diagnosis cases retain stable IDs, keys and lesson anchors.
const verifiedAldDiagnosisQuestions = {
  "alcohol-associated-liver-disease-069": {
    "question": "A man reports 80 g of alcohol daily for two years, last used two weeks ago. Jaundice began one week ago. Bilirubin is 6 mg/dL, AST 180 U/L and ALT 90 U/L; evaluation identifies no competing acute cause. Which assessment best fits the 2024 ACG criteria?",
    "choices": [
      "Probable AH based on the compatible clinical syndrome, without mandatory routine biopsy.",
      "Definite AH established by the AST:ALT ratio alone.",
      "AH is excluded because cirrhosis has not already been proven.",
      "AH requires bilirubin below 3 mg/dL."
    ],
    "rationale": "The exposure and recent-jaundice timeline, bilirubin above 3 mg/dL, AST 50 to 400 U/L, ratio 180/90 = 2 and absence of a competing cause support probable AH. Histologic confirmation would be needed for the definite category; the ratio alone does not establish it. Established cirrhosis is not a prerequisite, and a bilirubin below 3 mg/dL does not match this probable-AH criterion."
  },
  "alcohol-associated-liver-disease-070": {
    "question": "AST is 180 U/L and ALT 90 U/L, but the jaundice timeline and alcohol exposure history have not been obtained. What can the laboratory ratio establish at this stage?",
    "choices": [
      "The ratio is 2 and can support a compatible pattern, but cannot establish AH by itself.",
      "The ratio is 0.5 and proves AH independently of history.",
      "The ratio is 2 and eliminates the need to assess competing causes.",
      "The ratio is 270 and establishes definite AH without biopsy."
    ],
    "rationale": "Dividing AST by ALT gives 180/90 = 2. A ratio above 1.5 is one component of the ACG probable-AH pattern, interpreted with jaundice, exposure, bilirubin, AST range and the differential. It does not independently establish the clinical syndrome or exclude alternatives. Addition of the enzyme values is not the ratio."
  },
  "alcohol-associated-liver-disease-071": {
    "question": "A patient with heavy alcohol exposure develops jaundice after circulatory shock. AST is 2,500 U/L and ALT 2,200 U/L. What is the best diagnostic approach?",
    "choices": [
      "Evaluate ischemic injury and other competing or additional causes before assigning AH as the explanation.",
      "Diagnose probable AH solely because heavy alcohol exposure is present.",
      "Treat the markedly elevated enzymes as the typical ACG probable-AH pattern.",
      "Exclude all additional causes whenever jaundice follows alcohol exposure."
    ],
    "rationale": "Shock is an important diagnostic confounder, and enzymes in the thousands are outside the ACG probable-AH AST pattern of 50 to 400 U/L. Evaluate ischemic injury and other alternatives rather than attributing the presentation to alcohol history alone. This does not assert that coexisting alcohol-related disease is impossible."
  },
  "alcohol-associated-liver-disease-072": {
    "question": "A jaundiced patient reports heavy alcohol use and recently started a potentially hepatotoxic medicine. The cause remains uncertain. Which next step best protects diagnostic accuracy?",
    "choices": [
      "Review the medication and supplement timeline and investigate drug-related and other competing causes.",
      "Declare definite drug-induced injury solely because a new medicine was started.",
      "Ignore the new exposure because heavy alcohol use proves AH.",
      "Use the AST:ALT ratio to exclude all medication-related injury."
    ],
    "rationale": "A temporally plausible medication exposure can confound an AH diagnosis and warrants a careful timeline and differential. Neither the new medicine alone nor alcohol history alone proves the cause. The AST:ALT ratio does not exclude drug-related injury; further clinical evaluation determines confidence and management."
  },
  "alcohol-associated-liver-disease-073": {
    "question": "A compatible AH clinical syndrome is supported by a liver biopsy interpreted with the exposure history and competing-cause evaluation. Which diagnostic-confidence category applies?",
    "choices": [
      "Definite AH with compatible histologic confirmation.",
      "Possible AH solely because a biopsy was performed.",
      "Probable AH is the only category that permits any histology.",
      "Definite AH requires no compatible clinical syndrome."
    ],
    "rationale": "In the guidance framework, definite AH combines the compatible clinical diagnosis with histologic confirmation. Probable AH is a compatible clinical syndrome without important confounders and without requiring biopsy. Possible AH reflects uncertainty or confounding. Histology still requires clinical correlation; it does not erase the need for the history and differential."
  },
  "alcohol-associated-liver-disease-074": {
    "question": "A patient has new jaundice but an uncertain alcohol exposure history and another plausible cause of hepatitis. The choice of disease-directed treatment depends on the cause after initial evaluation. Which plan is best?",
    "choices": [
      "Discuss selective biopsy with hepatology if confirmation could change management, while continuing urgent complication care.",
      "Automatically give corticosteroids because any jaundice establishes severe AH.",
      "Require biopsy in every classic AH presentation before evaluating infection.",
      "Abandon evaluation of the competing cause because AH is always histologically obvious."
    ],
    "rationale": "Uncertain exposure or a plausible alternative cause fits possible AH. If diagnostic confirmation will affect treatment, guidance supports selective biopsy with the liver team; the ACG algorithm describes the transjugular route. Biopsy is not mandatory for every classic unconfounded presentation, and diagnostic work should proceed alongside urgent supportive and complication care."
  },
  "alcohol-associated-liver-disease-075": {
    "question": "A patient has a compatible AH diagnosis and a correctly calculated original MELD score of 21. Which statement matches the 2024 ACG severity framework?",
    "choices": [
      "The score is above the severe-AH threshold of 20; treatment still requires assessment of eligibility and complications.",
      "A score of 21 is moderate because severe AH requires a score above 32.",
      "The score itself establishes alcohol as the cause of hepatitis.",
      "The score guarantees that corticosteroids are appropriate without further assessment."
    ],
    "rationale": "ACG classifies AH as severe with original MELD greater than 20; a score of 20 or below is moderate in this framework. The historic modified discriminant-function threshold of 32 should not be substituted as a MELD threshold. Severity does not prove etiology or remove the need to assess infection, contraindications and organ function before disease-directed therapy."
  },
  "alcohol-associated-liver-disease-076": {
    "question": "During an AH evaluation, a patient has leukocytosis and tachycardia. Initial cultures are negative. Which interpretation is most appropriate?",
    "choices": [
      "AH can cause systemic inflammation without infection, but infection may coexist and still requires clinical source evaluation.",
      "Leukocytosis proves infection, regardless of the rest of the evaluation.",
      "Negative initial cultures rule out every infection source and end surveillance.",
      "AH excludes infection, so evaluating both is unnecessary."
    ],
    "rationale": "Systemic inflammatory features can occur in AH without infection, and infection may coexist. Leukocytosis and tachycardia are not independently diagnostic of infection; negative initial cultures also do not end the clinical assessment. Continue indicated source evaluation, surveillance and treatment when clinically warranted."
  }
};
for (const item of alcoholAssociatedLiverDiseaseQuestionBank) {
  if (verifiedAldDiagnosisQuestions[item.id]) Object.assign(item, verifiedAldDiagnosisQuestions[item.id]);
}


// Distinct steroid and response cases retain stable IDs, keys and lesson anchors.
const verifiedAldSteroidQuestions = {
  "alcohol-associated-liver-disease-077": {
    "question": "An adult with a compatible severe-AH diagnosis has an original MELD score of 52. A learner assumes that greater severity guarantees greater corticosteroid benefit. Which correction best matches the 2024 ACG guideline?",
    "choices": [
      "MELD above 50 warrants careful specialist risk-benefit assessment; greater severity does not guarantee greater steroid benefit.",
      "Double the usual corticosteroid dose because benefit always increases with MELD.",
      "The score of 52 makes contraindication screening unnecessary.",
      "A MELD of 52 is below the severe-AH threshold."
    ],
    "rationale": "ACG defines severe AH with original MELD greater than 20, identifies the greatest corticosteroid benefit in the 25 to 39 range and urges careful risk-benefit consideration above 50. A score of 52 signals very severe illness, not guaranteed benefit, automatic dose escalation or removal of eligibility assessment."
  },
  "alcohol-associated-liver-disease-078": {
    "question": "For a patient being evaluated for AH, patient PT is 18 seconds, laboratory control PT 12 seconds and total bilirubin 12 mg/dL. Using modified Maddrey DF = 4.6 × (patient PT − control PT) + bilirubin, what is the result?",
    "choices": [
      "39.6.",
      "27.6.",
      "94.8.",
      "18.0."
    ],
    "rationale": "The PT difference is 18 − 12 = 6 seconds. Multiply by 4.6 to obtain 27.6, then add bilirubin 12 mg/dL: mDF = 39.6. Omitting bilirubin gives 27.6; using patient PT without subtracting the control gives 94.8. The result exceeds the historical threshold of at least 32, but does not prove the diagnosis or establish steroid eligibility by itself."
  },
  "alcohol-associated-liver-disease-079": {
    "question": "A proposed mDF calculation uses INR in place of the PT difference because the laboratory control PT is missing. Which response is best?",
    "choices": [
      "Obtain the appropriate laboratory control PT and confirm patient PT in seconds and bilirubin in mg/dL before calculating.",
      "Use INR directly because it is numerically interchangeable with seconds.",
      "Set the missing control PT to zero without checking the laboratory.",
      "Omit bilirubin and label the result a complete mDF."
    ],
    "rationale": "Modified Maddrey DF uses 4.6 × (patient PT − laboratory control PT) + total bilirubin, with PT in seconds and bilirubin in mg/dL. INR cannot be substituted numerically for the PT difference. A missing input should be obtained or clarified rather than invented; leaving out bilirubin produces a different, incomplete calculation."
  },
  "alcohol-associated-liver-disease-080": {
    "question": "An adult with severe AH is eligible for corticosteroids, can take oral medication and has a documented early response-review plan. Which oral regimen is described in the 2024 ACG guidance?",
    "choices": [
      "Prednisolone 40 mg daily with a planned four-week course if response and safety permit.",
      "Prednisolone 40 mg once weekly without interim assessment.",
      "Prednisolone indefinitely after one dose, regardless of response.",
      "Pentoxifylline as the guideline-recommended equivalent substitute."
    ],
    "rationale": "Prednisolone 40 mg/day for four weeks is the commonly studied oral regimen. ACG also describes prednisone 40 mg/day, while generally favoring the more extensively studied prednisolone. Nonresponse or a new contraindication can change the plan, and pentoxifylline is not recommended for severe AH."
  },
  "alcohol-associated-liver-disease-081": {
    "question": "An otherwise eligible adult with severe AH cannot take oral medication. Which alternative drug-dose-route combination does ACG describe?",
    "choices": [
      "Methylprednisolone 32 mg IV daily within the specialist treatment plan.",
      "Methylprednisolone 40 mg IV daily solely by copying the oral prednisolone dose.",
      "Prednisolone 40 mg orally despite inability to use the oral route.",
      "An oral supplement as an interchangeable steroid preparation."
    ],
    "rationale": "ACG describes IV methylprednisolone 32 mg/day for patients unable to take oral medication. The exact drug, route and order must be verified. Copying the oral prednisolone dose into an IV methylprednisolone order without review is not the specified alternative; oral medication or a supplement does not address this route requirement."
  },
  "alcohol-associated-liver-disease-082": {
    "question": "A patient with severe AH has active, untreated hepatitis B infection. What does the ACG corticosteroid eligibility framework require?",
    "choices": [
      "Address the untreated infection and obtain specialist reassessment before starting the AH corticosteroid course.",
      "Start corticosteroids automatically because any high MELD overrides untreated infection.",
      "Ignore hepatitis B because only bacterial infections affect steroid eligibility.",
      "Treat all patients with any past hepatitis B exposure as permanently ineligible, regardless of current status."
    ],
    "rationale": "ACG lists active infection, including untreated hepatitis B infection, among contraindications to corticosteroids in AH. Current infection status and its management require specialist review. Severity does not override the hazard, and this statement is not a permanent exclusion based on any historical exposure alone."
  },
  "alcohol-associated-liver-disease-083": {
    "question": "A patient with severe AH has uncontrolled diabetes and ongoing gastrointestinal bleeding. The proposed steroid plan cites only an elevated mDF. Which action is best?",
    "choices": [
      "Manage the unresolved hazards and reassess corticosteroid eligibility with the liver team.",
      "Start corticosteroids immediately because mDF overrides every contraindication.",
      "Ignore glucose and bleeding once a severity score is available.",
      "Increase steroid exposure to treat the bleeding directly."
    ],
    "rationale": "Uncontrolled diabetes and gastrointestinal bleeding are contraindications in the ACG AH corticosteroid framework. Control or address these problems and reassess the complete clinical state. A severity score alone does not establish eligibility, and steroids do not substitute for urgent bleeding management."
  },
  "alcohol-associated-liver-disease-084": {
    "question": "Before starting an eligible severe-AH corticosteroid course, the team asks when to assess Lille response. Which plan matches ACG guidance?",
    "choices": [
      "Arrange the corresponding Lille assessment at treatment day 4 or day 7 using verified baseline and follow-up data.",
      "Calculate one pretreatment Lille score and omit all follow-up bilirubin measurements.",
      "Wait until day 28 before evaluating treatment response for the first time.",
      "Use any isolated bilirubin result without confirming treatment timing or the other inputs."
    ],
    "rationale": "Lille is a dynamic response assessment after corticosteroids begin. ACG supports assessment at day 4 or day 7. Verify the timing, baseline and follow-up bilirubin, other required inputs and calculator units, and assign someone to act on the result. A pretreatment score or isolated value cannot replace the intended response review."
  },
  "alcohol-associated-liver-disease-085": {
    "question": "An AH patient has a verified day-7 Lille score of 0.58. Which action follows ACG key concept 27?",
    "choices": [
      "Stop the AH corticosteroid course for nonresponse while continuing specialist and supportive care.",
      "Continue automatically to day 28 because every started course must be completed.",
      "Double the steroid dose until the Lille score becomes zero.",
      "End nutrition, infection surveillance and AUD care when steroids stop."
    ],
    "rationale": "A Lille score greater than 0.45 identifies nonresponse in ACG key concept 27 and supports discontinuing corticosteroids. The supplied value 0.58 clearly exceeds that cutoff. Stopping an ineffective course does not end nutrition, infection management, organ support, AUD care or specialist assessment."
  },
  "alcohol-associated-liver-disease-086": {
    "question": "A report displays a Lille score of 0.45 rounded to two decimal places. Guideline materials differ at the exact boundary. Which response is most appropriate?",
    "choices": [
      "Verify the unrounded score, calculation and applicable liver-team protocol before making the boundary decision.",
      "Declare definite response solely because the displayed number is not above 0.45.",
      "Declare definite nonresponse solely from the rounded display without checking its underlying value.",
      "Ignore the score and continue indefinitely without reassessment."
    ],
    "rationale": "ACG key concept 27 and its official highlights use greater than 0.45, while some diagrams and earlier guidance use at least 0.45. A rounded display can obscure which side of the boundary the calculated result occupies. Verify the complete calculation and local specialist protocol rather than forcing a treatment decision from the rounded display alone."
  },
  "alcohol-associated-liver-disease-087": {
    "question": "A patient had a favorable day-4 Lille score of 0.19 but develops new gastrointestinal bleeding during the AH steroid course. What is the best approach?",
    "choices": [
      "Urgently assess and manage the bleeding and reconsider continued corticosteroid eligibility, despite the earlier response.",
      "Continue automatically because the earlier Lille score guarantees steroid safety.",
      "Ignore bleeding until the planned four-week course ends.",
      "Use the favorable Lille score to exclude every new complication."
    ],
    "rationale": "A favorable response score does not remove a new contraindication or guarantee safety. Gastrointestinal bleeding requires urgent assessment and management, with reconsideration of the AH steroid plan. Continue the rest of the appropriate care while the liver team reviews the evolving condition."
  },
  "alcohol-associated-liver-disease-088": {
    "question": "A patient is a corticosteroid nonresponder in severe AH. A handoff proposes pentoxifylline as a proven salvage replacement. Which correction best matches ACG guidance?",
    "choices": [
      "Pentoxifylline is not recommended; continue appropriate support and specialist assessment of further options.",
      "Pentoxifylline is a proven salvage therapy for every steroid nonresponder.",
      "Stop all nutrition and AUD care because no steroid response means no further care is useful.",
      "Guarantee transplant solely from the Lille score without evaluating eligibility."
    ],
    "rationale": "ACG recommends against pentoxifylline for severe AH and describes lack of efficacy as steroid-nonresponse salvage. Ongoing nutrition, AUD treatment, infection management and organ support remain necessary. Specialists may assess appropriate trials and early transplant evaluation for highly selected patients; neither nonresponse nor one score guarantees transplant eligibility."
  }
};
for (const item of alcoholAssociatedLiverDiseaseQuestionBank) {
  if (verifiedAldSteroidQuestions[item.id]) Object.assign(item, verifiedAldSteroidQuestions[item.id]);
}


// Distinct AUD medication cases retain stable IDs, keys and lesson anchors.
const verifiedAldAudQuestions = {
  "alcohol-associated-liver-disease-049": {
    "question": "An abstinent adult with AUD has verified creatinine clearance of 36 mL/min and is otherwise suitable for acamprosate. Which labeled regimen fits this renal function?",
    "choices": [
      "333 mg orally three times daily.",
      "666 mg orally three times daily without reduction.",
      "333 mg orally once weekly.",
      "The usual dose is doubled because clearance is reduced."
    ],
    "rationale": "The label reduces acamprosate to one 333 mg tablet three times daily for moderate renal impairment. A clearance of 36 is above the contraindicated boundary and within the reduced-dose range. Renal impairment does not justify the full usual dose, a weekly schedule or doubling."
  },
  "alcohol-associated-liver-disease-050": {
    "question": "A proposed acamprosate order is for a patient whose verified creatinine clearance is exactly 30 mL/min. What is the correct boundary decision?",
    "choices": [
      "Do not use acamprosate: clearance of 30 mL/min or less is contraindicated.",
      "Use 666 mg three times daily because 30 is above the contraindicated range.",
      "Use the reduced dose because the contraindication applies only below 30.",
      "Ignore the clearance because normal liver tests establish eligibility."
    ],
    "rationale": "The label’s contraindication includes the exact value 30 mL/min. Although its moderate-impairment wording also names 30 to 50, the explicit contraindication at 30 or less takes priority. Liver tests do not establish renal eligibility."
  },
  "alcohol-associated-liver-disease-051": {
    "question": "An acamprosate prescription reads two 333 mg tablets orally three times daily. What are the total tablet count and drug amount per day?",
    "choices": [
      "Six tablets and 1,998 mg.",
      "Three tablets and 999 mg.",
      "Two tablets and 666 mg.",
      "Six tablets and 666 mg."
    ],
    "rationale": "Each administration is two tablets, or 666 mg. Three administrations give six tablets and 666 × 3 = 1,998 mg per day. The other answers omit administrations or confuse the per-dose amount with the daily total."
  },
  "alcohol-associated-liver-disease-052": {
    "question": "A patient develops acute alcohol-withdrawal symptoms. A colleague proposes acamprosate alone to control the withdrawal. What is the best correction?",
    "choices": [
      "Assess and treat withdrawal separately; acamprosate supports maintenance of abstinence after withdrawal has been managed.",
      "Acamprosate reliably stops acute withdrawal seizures as its labeled purpose.",
      "Double acamprosate until withdrawal resolves.",
      "Delay withdrawal assessment until an abstinence medicine takes effect."
    ],
    "rationale": "The acamprosate label states that it does not eliminate or diminish alcohol-withdrawal symptoms. Its indicated role is maintenance of abstinence with psychosocial care. Acute symptoms require a separate assessment and appropriate treatment; dose escalation or delay is not a substitute."
  },
  "alcohol-associated-liver-disease-053": {
    "question": "A patient receiving maintenance buprenorphine asks to start naltrexone for AUD today. Which response is best?",
    "choices": [
      "Do not start naltrexone during current opioid dependence; coordinate specialist review of the AUD and opioid-treatment plans.",
      "Give naltrexone because an AUD indication makes buprenorphine irrelevant.",
      "Administer the injection first and evaluate withdrawal later.",
      "Stop buprenorphine without a transition plan and give naltrexone immediately."
    ],
    "rationale": "Naltrexone is contraindicated in current opioid dependence, including treatment with a partial agonist such as buprenorphine. It can precipitate severe withdrawal. The indication for AUD does not remove the interaction, and a transition needs clinical planning rather than abrupt unsupervised changes."
  },
  "alcohol-associated-liver-disease-054": {
    "question": "An adult previously dependent on a short-acting opioid last used it four days ago. A negative urine screen is offered as proof that naltrexone can start. Which correction is best?",
    "choices": [
      "Four days is shorter than the recommended minimum 7 to 10 days, and a negative test alone does not establish readiness.",
      "A negative urine screen guarantees that no precipitated withdrawal is possible.",
      "The recommended minimum is only one day for every opioid.",
      "The opioid-free precaution applies only when naltrexone treats opioid use disorder."
    ],
    "rationale": "The labels recommend at least 7 to 10 opioid-free days for prior short-acting opioid dependence and warn that no test completely establishes an adequate interval. Four days falls short. These precautions also apply to naltrexone prescribed for alcohol dependence."
  },
  "alcohol-associated-liver-disease-055": {
    "question": "A patient with AUD has decompensated alcohol-associated cirrhosis. Which statement matches the 2024 ACG approach to naltrexone?",
    "choices": [
      "Avoid naltrexone in decompensated cirrhosis and obtain an individualized specialist AUD plan.",
      "Extend the compensated-ALD recommendation automatically to decompensated disease.",
      "Choose the injectable form because it removes all liver concerns.",
      "Normal kidney function alone proves that naltrexone is appropriate."
    ],
    "rationale": "ACG describes consideration in early ALD or compensated cirrhosis and advises avoidance in decompensated cirrhosis or liver failure. Changing formulation does not erase liver assessment. Continue AUD care with a suitable individualized approach."
  },
  "alcohol-associated-liver-disease-056": {
    "question": "An eligible adult is prescribed oral naltrexone for alcohol dependence. Which regimen is recommended for most patients in the oral label?",
    "choices": [
      "50 mg once daily.",
      "50 mg once monthly by mouth.",
      "380 mg orally every four weeks as the injectable equivalent.",
      "50 mg every hour while drinking."
    ],
    "rationale": "The oral label recommends 50 mg once daily for most patients treated for alcohol dependence. The 380 mg monthly dose belongs to a separate extended-release injectable preparation. Product, route and frequency cannot be interchanged by assumption."
  },
  "alcohol-associated-liver-disease-057": {
    "question": "A learner says baclofen is FDA-approved for AUD because ACG recommends it as an option in compensated ALD. What is the best correction?",
    "choices": [
      "Its use for AUD is off label; a guideline recommendation and regulatory indication are distinct.",
      "Every guideline recommendation automatically creates an FDA indication.",
      "Baclofen is only an aversive alcohol-reaction medicine.",
      "Compensated ALD makes every baclofen dose risk-free."
    ],
    "rationale": "The book identifies baclofen among off-label options, and ACG recommends it as an option in compensated ALD. That does not change its regulatory AUD status or remove renal and CNS precautions."
  },
  "alcohol-associated-liver-disease-058": {
    "question": "A patient taking baclofen for AUD develops marked somnolence while kidney function worsens. What is the best approach?",
    "choices": [
      "Promptly reassess the regimen, renal function and other causes or CNS depressants before further dosing decisions.",
      "Escalate automatically because somnolence proves therapeutic benefit.",
      "Ignore renal function because baclofen is used in liver disease.",
      "Assume normal transaminases exclude medication toxicity."
    ],
    "rationale": "Baclofen is largely renally excreted and can cause CNS depression. Worsening renal function and somnolence warrant clinical reassessment, including other causes and coexposures. Neither an ALD indication nor liver tests establish neurologic safety."
  },
  "alcohol-associated-liver-disease-059": {
    "question": "A stable patient without a serious adverse reaction wants to stop regular baclofen abruptly. Which counseling is best?",
    "choices": [
      "Arrange a prescriber-directed gradual discontinuation plan because abrupt withdrawal can cause hallucinations or seizures.",
      "Abrupt discontinuation cannot cause symptoms because baclofen use for AUD is off label.",
      "Double the final dose and then stop all doses without review.",
      "Stop abruptly whenever the liver tests improve, regardless of treatment history."
    ],
    "rationale": "The oral baclofen label warns about hallucinations and seizures with abrupt withdrawal and advises slow reduction except where serious adverse reactions require another approach. The prescribing team should plan discontinuation; off-label use does not cancel the warning."
  },
  "alcohol-associated-liver-disease-060": {
    "question": "Which description matches the baclofen AUD approach in the 2024 ACG text, subject to tolerance and specialist review?",
    "choices": [
      "Begin at 5 mg three times daily and consider gradual increases at three- to five-day intervals, up to 15 mg three times daily.",
      "Begin every patient at 15 mg three times daily without a tolerance review.",
      "Give the entire three-dose daily amount once monthly.",
      "Escalate every few hours without considering kidney function."
    ],
    "rationale": "ACG describes 5 mg three times daily initially, with increases every three to five days based on tolerance, up to 15 mg three times daily. This is a described AUD approach, not a requirement to reach the maximum. Individual renal and CNS risks can alter the plan."
  },
  "alcohol-associated-liver-disease-061": {
    "question": "A patient considered for gabapentin has ongoing opioid analgesic exposure and respiratory impairment. Which issue needs explicit assessment?",
    "choices": [
      "Risk of sedation and respiratory depression from the drug and coexposures.",
      "Gabapentin prevents all opioid-related respiratory depression.",
      "An off-label AUD indication removes CNS-depressant precautions.",
      "Only the bilirubin result matters when combining these medicines."
    ],
    "rationale": "The gabapentin label warns of respiratory depression with CNS depressants, including opioids, and with respiratory impairment. Assess the combination and clinical state deliberately. Neither an AUD indication nor a liver test removes these risks."
  },
  "alcohol-associated-liver-disease-062": {
    "question": "A proposed gabapentin AUD plan copies a normal-renal-function regimen into a patient with impaired kidney function. What is the best correction?",
    "choices": [
      "Review the product, renal function and regimen and adjust dosing deliberately rather than copying it unchanged.",
      "Ignore renal function because gabapentin is being used for AUD.",
      "Use any gabapentin preparation at an identical dose and schedule.",
      "Increase exposure automatically as renal function declines."
    ],
    "rationale": "Gabapentin labeling requires renal dose adjustment. Its labeled regimens and formulations do not create one universal off-label AUD prescription. Verify the actual product and indication, and avoid automatic unchanged dosing or escalation during renal decline."
  },
  "alcohol-associated-liver-disease-063": {
    "question": "A patient taking topiramate for AUD reports new difficulty concentrating and finding words. What is the best interpretation and response?",
    "choices": [
      "Topiramate can cause cognitive adverse effects; assess the regimen and other causes before further titration.",
      "These symptoms prove that topiramate is improving cognition.",
      "Compensated ALD excludes drug-related cognitive effects.",
      "Increase the dose automatically to overcome the symptoms."
    ],
    "rationale": "Topiramate labeling includes concentration, memory and word-finding problems. New symptoms require reassessment of the dose, titration, coexposures and other causes. They are not proof of benefit, and compensated liver status does not exclude an adverse drug effect."
  },
  "alcohol-associated-liver-disease-064": {
    "question": "A topiramate monitoring plan omits serum bicarbonate because there is no current acidosis symptom. Which correction is appropriate?",
    "choices": [
      "Obtain baseline and periodic bicarbonate as recommended, and reassess persistent metabolic acidosis.",
      "Bicarbonate is irrelevant because topiramate cannot cause metabolic acidosis.",
      "Measure bicarbonate only after permanent neurologic injury occurs.",
      "A normal liver test guarantees normal bicarbonate throughout treatment."
    ],
    "rationale": "Topiramate can cause metabolic acidosis, and its label recommends baseline and periodic serum bicarbonate measurement. Persistent abnormalities require a prescribing review. Absence of symptoms or a normal liver test does not remove this monitoring need."
  },
  "alcohol-associated-liver-disease-065": {
    "question": "An adult with compensated ALD and currently normal transaminases asks for disulfiram. Which recommendation fits ACG guidance?",
    "choices": [
      "Avoid disulfiram throughout ALD and select another suitable recovery plan.",
      "Use disulfiram because normal transaminases remove its hepatic risk.",
      "Use disulfiram only because liver disease is compensated.",
      "Treat FDA approval for AUD as proof of suitability for every liver condition."
    ],
    "rationale": "ACG advises against disulfiram across the ALD spectrum. Its label reports severe hepatic injury with or without prior abnormal liver tests. Compensation, a normal test result and regulatory approval do not override the ALD-specific recommendation."
  },
  "alcohol-associated-liver-disease-066": {
    "question": "An adult planning pregnancy is considering topiramate solely for off-label AUD treatment. Which discussion is required?",
    "choices": [
      "Review fetal risks, pregnancy plans and suitable alternatives with the prescriber before treatment selection.",
      "Describe topiramate as free of fetal risk because the AUD use is off label.",
      "Assume a migraine indication removes the need for pregnancy counseling.",
      "Start treatment and defer reproductive-risk discussion until after delivery."
    ],
    "rationale": "Topiramate can cause fetal harm, including oral clefts and small-for-gestational-age birth. The label calls for benefit-risk consideration in people of childbearing potential, especially for conditions without permanent injury or death. The indication does not remove the need for an informed prescribing discussion."
  },
  "alcohol-associated-liver-disease-067": {
    "question": "Which product-dose-route-frequency combination matches VIVITROL labeling for an eligible adult?",
    "choices": [
      "380 mg as a deep intramuscular gluteal injection every four weeks or once a month by a healthcare provider.",
      "380 mg intravenously once a month.",
      "380 mg subcutaneously once a month.",
      "50 mg as a monthly gluteal injection copied from the oral dose."
    ],
    "rationale": "VIVITROL is the extended-release preparation, 380 mg by deep intramuscular gluteal injection every four weeks or monthly. Its label requires healthcare-provider preparation and administration and excludes IV or subcutaneous administration. Oral naltrexone dosing is not the injectable regimen."
  },
  "alcohol-associated-liver-disease-068": {
    "question": "A patient is still actively drinking and plans a first VIVITROL injection today for alcohol dependence. Which statement matches its product label?",
    "choices": [
      "The patient should be able to abstain before initiation and should not be actively drinking at the first injection; reassess readiness and the treatment plan.",
      "The first injection must be given during active drinking to meet the labeled indication.",
      "Any daily oral-naltrexone rule can be copied without checking the injectable label.",
      "The injection replaces psychosocial support and withdrawal assessment."
    ],
    "rationale": "For alcohol dependence, VIVITROL labeling requires the ability to abstain in the outpatient setting before initiation and no active drinking at initial administration. It is part of comprehensive care. Product-specific readiness and opioid precautions need review; the injection does not replace withdrawal or psychosocial care."
  }
};
for (const item of alcoholAssociatedLiverDiseaseQuestionBank) {
  if (verifiedAldAudQuestions[item.id]) Object.assign(item, verifiedAldAudQuestions[item.id]);
}


// Distinct withdrawal cases retain stable IDs, keys and lesson anchors.
const verifiedAldWithdrawalQuestions = {
  "alcohol-associated-liver-disease-033": {
    "question": "A patient has mild tremor now but a history of withdrawal delirium and repeated withdrawal episodes. Which interpretation is best?",
    "choices": [
      "The history increases risk of complicated withdrawal and must influence preventive treatment, setting and monitoring.",
      "Mild current symptoms rule out later seizures or delirium.",
      "A low current score cancels all risk from prior episodes.",
      "Home treatment is always suitable if the patient is awake."
    ],
    "rationale": "Prior withdrawal delirium and numerous episodes are important risk factors. Present symptoms are only one part of assessment and can worsen. Choose care from the full risk profile and available monitoring, not the current examination alone."
  },
  "alcohol-associated-liver-disease-034": {
    "question": "A patient with sustained heavy alcohol use develops tremor and sweating after markedly reducing intake, but blood alcohol remains detectable. What is the best conclusion?",
    "choices": [
      "Withdrawal remains possible; evaluate the history, examination and competing causes.",
      "Detectable alcohol excludes withdrawal in every patient.",
      "A positive result proves withdrawal without any clinical assessment.",
      "Treatment assessment must wait until alcohol is undetectable."
    ],
    "rationale": "Withdrawal can occur after a substantial reduction in intake while blood alcohol remains positive. The result neither excludes nor establishes the diagnosis. Assess the clinical syndrome and do not delay necessary care for a negative test."
  },
  "alcohol-associated-liver-disease-035": {
    "question": "A hospitalized patient has fever from suspected infection and a high CIWA-Ar score. A colleague treats the score as proof of alcohol withdrawal. Which correction is best?",
    "choices": [
      "CIWA-Ar measures symptoms and can be confounded; establish the diagnosis clinically and assess infection and other causes.",
      "Any high CIWA-Ar score identifies the cause of symptoms with certainty.",
      "Ignore the infection because all fever is caused by withdrawal.",
      "Use the score as the only basis for every medication dose and disposition decision."
    ],
    "rationale": "CIWA-Ar is not a diagnostic tool. Fever and other illnesses can elevate symptom scores, and coexisting conditions need assessment and treatment. The history, examination and course must guide interpretation."
  },
  "alcohol-associated-liver-disease-036": {
    "question": "An intubated patient is delirious and cannot report subjective symptoms. Which monitoring approach is appropriate?",
    "choices": [
      "Use an appropriate objective clinical protocol and structured ICU delirium or sedation assessments; do not direct care from CIWA-Ar self-report items.",
      "Guess the missing CIWA-Ar answers and treat the total as validated.",
      "Use CIWA-Ar because delirium makes its subjective questions more reliable.",
      "Stop monitoring because the patient cannot speak."
    ],
    "rationale": "CIWA-Ar depends on patient-reported symptoms and is not recommended in delirium. Communication barriers require an appropriate objective approach. ICU delirium and sedation tools can support monitoring alongside clinical assessment; inability to speak does not remove the need for care."
  },
  "alcohol-associated-liver-disease-037": {
    "question": "A patient with significant liver dysfunction needs benzodiazepine treatment for withdrawal. Which selection best reflects ACG guidance?",
    "choices": [
      "Consider lorazepam or oxazepam with careful titration and respiratory and mental-status monitoring.",
      "Choose unmonitored chlordiazepoxide because liver function never affects accumulation.",
      "Avoid all treatment during severe withdrawal because every benzodiazepine has identical risk.",
      "Use lorazepam without monitoring because it cannot cause sedation."
    ],
    "rationale": "ACG identifies lorazepam and oxazepam as safer options in poor liver function than longer-acting agents. They still require careful selection, titration and monitoring. Relative safety does not eliminate sedation, respiratory depression or encephalopathy risk."
  },
  "alcohol-associated-liver-disease-038": {
    "question": "After withdrawal medication, a patient becomes excessively somnolent and breathing worsens. What is the best response?",
    "choices": [
      "Promptly assess breathing, sedation, coexposures and the regimen, and ensure an appropriate monitored level of care.",
      "Give extra sedatives automatically because sleepiness proves withdrawal is worsening.",
      "Wait for the next scheduled score before assessing breathing.",
      "Assume a normal bilirubin result excludes medication toxicity."
    ],
    "rationale": "Withdrawal pharmacotherapy requires monitoring for oversedation and respiratory depression. New impairment demands immediate clinical reassessment and adequate observation and treatment resources. A withdrawal score or liver test cannot establish respiratory safety."
  },
  "alcohol-associated-liver-disease-039": {
    "question": "Reliable symptom scoring cannot be obtained during withdrawal treatment. Which alternative plan is defensible?",
    "choices": [
      "Use a clinician-directed scheduled regimen with a taper when appropriate, while continuing clinical monitoring and adjustment.",
      "Copy an anxiety dosing table as a universal withdrawal protocol.",
      "Continue a fixed regimen without checking response or sedation.",
      "Withhold every treatment because symptom-triggered dosing is the only permitted method."
    ],
    "rationale": "ASAM prefers symptom-triggered dosing when usable but permits a scheduled taper when it cannot be used. Fixed dosing still requires assessment and adjustment. An anxiety table is not an acute withdrawal protocol and an unusable scale does not justify absent care."
  },
  "alcohol-associated-liver-disease-040": {
    "question": "A patient has an alcohol-withdrawal seizure and no established underlying seizure disorder. Which immediate pharmacologic approach is preferred?",
    "choices": [
      "A fast-acting benzodiazepine such as lorazepam, with parenteral treatment and close monitoring as appropriate.",
      "Routine phenytoin alone as the standard prevention of recurrent withdrawal seizures.",
      "Clonidine alone because reducing pulse prevents recurrent seizures.",
      "No seizure-preventive treatment once the first seizure ends."
    ],
    "rationale": "ASAM recommends immediate medication to prevent another withdrawal seizure, with benzodiazepines first line and parenteral administration preferred. Phenytoin is not routine treatment for withdrawal seizures; a separate underlying seizure disorder may change its role. Autonomic agents do not replace seizure prevention."
  },
  "alcohol-associated-liver-disease-041": {
    "question": "A proposed IV phenobarbital plan is for an unmonitored setting staffed by clinicians unfamiliar with its use. What must change?",
    "choices": [
      "Use an experienced treatment team and a highly supervised setting with respiratory and sedation monitoring before pursuing parenteral phenobarbital.",
      "Keep the setting because IV phenobarbital has no respiratory risk.",
      "Remove monitoring because the drug is an alternative to benzodiazepines.",
      "Give it unsupervised as a routine home rescue medicine."
    ],
    "rationale": "Phenobarbital has a narrow therapeutic window and can cause oversedation and respiratory depression. ASAM restricts parenteral use to highly supervised settings and stresses clinician experience. Alternative status does not make unmonitored administration safe."
  },
  "alcohol-associated-liver-disease-042": {
    "question": "Clonidine improves pulse and blood pressure during withdrawal. The team proposes using it alone for seizure prevention. Which correction is best?",
    "choices": [
      "Autonomic improvement can mask signs; clonidine is an adjunct and does not replace seizure-preventive withdrawal treatment.",
      "A lower pulse proves seizure and delirium risk are eliminated.",
      "Clonidine alone is first-line prevention of withdrawal seizures.",
      "Stop all assessment once blood pressure improves."
    ],
    "rationale": "Alpha-2 agonists can address persistent autonomic symptoms as adjuncts to benzodiazepines. They do not prevent or treat withdrawal seizures and should not be used alone to control withdrawal. Vital-sign improvement does not demonstrate control of the underlying process."
  },
  "alcohol-associated-liver-disease-043": {
    "question": "A patient with cirrhosis has evidence of both alcohol withdrawal and hepatic encephalopathy. Which plan is best?",
    "choices": [
      "Treat both conditions, carefully titrate withdrawal medication and monitor for worsening cognition and respiratory effects.",
      "Assume hepatic encephalopathy makes alcohol withdrawal impossible.",
      "Withhold all severe-withdrawal treatment without assessing its risks.",
      "Assume every mental-status change is withdrawal and omit encephalopathy care."
    ],
    "rationale": "ACG states that withdrawal and hepatic encephalopathy can coexist and both need treatment. Benzodiazepines may precipitate or worsen encephalopathy, so careful titration and reassessment are essential. Neither diagnosis excludes the other."
  },
  "alcohol-associated-liver-disease-044": {
    "question": "Acute withdrawal has resolved after a prescribed course. Which transition best supports recovery?",
    "choices": [
      "End the acute withdrawal prescription under the plan and arrange ongoing AUD treatment, support and liver follow-up.",
      "Describe completed withdrawal as a cure for AUD and cancel follow-up.",
      "Automatically supply indefinite benzodiazepines for every patient.",
      "Stop an unrelated established dependent benzodiazepine regimen abruptly without review."
    ],
    "rationale": "Withdrawal management should connect to sustained AUD care. The acute benzodiazepine course should end after treatment, while any separate established dependence requires its own safe plan. Symptom resolution is not completion of longitudinal recovery care."
  }
};
for (const item of alcoholAssociatedLiverDiseaseQuestionBank) {
  if (verifiedAldWithdrawalQuestions[item.id]) Object.assign(item, verifiedAldWithdrawalQuestions[item.id]);
}


// Distinct spectrum and mechanism cases retain stable IDs, keys and anchors.
const verifiedAldSpectrumQuestions = {
  "alcohol-associated-liver-disease-001": {
    "question": "Imaging shows hepatic fat in a patient with prolonged heavy alcohol use. No fibrosis or decompensation has been established. Which description is most accurate?",
    "choices": [
      "Steatosis is within the ALD spectrum; fibrosis stage and competing causes still require assessment.",
      "Hepatic fat establishes decompensated cirrhosis.",
      "Hepatic fat establishes alcohol-associated hepatitis regardless of the clinical syndrome.",
      "Steatosis excludes any contribution from coexisting metabolic disease."
    ],
    "rationale": "Steatosis is fat accumulation in hepatocytes. It can occur early in ALD and may coexist with other causes of liver injury. Imaging evidence of fat alone does not establish hepatitis, fibrosis stage or decompensation."
  },
  "alcohol-associated-liver-disease-002": {
    "question": "A person with long-term harmful alcohol use feels well and reports no liver symptoms. Which inference is justified?",
    "choices": [
      "Early ALD can be asymptomatic, so the absence of symptoms does not exclude steatosis or fibrosis.",
      "The absence of jaundice excludes all ALD.",
      "Only patients with ascites can have liver fibrosis.",
      "A symptom-free examination establishes normal liver structure."
    ],
    "rationale": "ACG describes early ALD as potentially asymptomatic, including steatosis, steatohepatitis and early fibrosis. Symptoms alone cannot stage or exclude disease; exposure history and liver assessment remain relevant."
  },
  "alcohol-associated-liver-disease-003": {
    "question": "A patient with heavy alcohol use has an elevated AST. A trainee labels this finding alone as alcohol-associated hepatitis. What is the best correction?",
    "choices": [
      "Assess the clinical syndrome, recent jaundice, exposure and competing causes; AST alone does not establish alcohol-associated hepatitis.",
      "Any AST elevation establishes alcohol-associated hepatitis in a person who drinks.",
      "An AST elevation by itself determines whether cirrhosis is decompensated.",
      "An AST elevation excludes simultaneous viral or metabolic liver disease."
    ],
    "rationale": "Alcohol-associated hepatitis is a clinical syndrome, commonly presenting with rapid onset or worsening jaundice in the appropriate exposure context. Aminotransferase elevation alone does not establish it or exclude other causes of injury."
  },
  "alcohol-associated-liver-disease-004": {
    "question": "A patient with alcohol-associated cirrhosis develops esophageal varices. Which mechanism best connects the scarred liver to this complication?",
    "choices": [
      "Scar-related resistance to portal blood flow contributes to portal hypertension and collateral vessels.",
      "Fat accumulation alone proves that portal pressure is normal.",
      "Varices primarily reflect excess acetate in the esophageal lumen.",
      "An isolated increase in NADH directly establishes the presence of varices."
    ],
    "rationale": "Advanced fibrosis disrupts hepatic blood flow. Increased portal pressure can redirect blood into collateral vessels, including esophageal varices. A metabolic change or steatosis alone does not establish this structural complication."
  },
  "alcohol-associated-liver-disease-005": {
    "question": "Which reaction is the main ADH step in ethanol clearance?",
    "choices": [
      "Ethanol to acetaldehyde.",
      "Acetaldehyde to acetate.",
      "Acetate to ethanol.",
      "Ethanol directly to acetate without an aldehyde intermediate."
    ],
    "rationale": "Alcohol dehydrogenase oxidizes ethanol to acetaldehyde while reducing NAD+ to NADH. The subsequent acetaldehyde-to-acetate reaction is carried out by aldehyde dehydrogenase."
  },
  "alcohol-associated-liver-disease-006": {
    "question": "Acetaldehyde has formed during ethanol oxidation. Which enzyme performs the next major clearance step to acetate?",
    "choices": [
      "Aldehyde dehydrogenase.",
      "Alcohol dehydrogenase.",
      "CYP2E1.",
      "Lipoprotein lipase."
    ],
    "rationale": "ALDH oxidizes acetaldehyde to acetate. ADH and CYP2E1 contribute to forming acetaldehyde from ethanol; lipoprotein lipase is not the enzyme for this aldehyde-to-acetate step."
  },
  "alcohol-associated-liver-disease-007": {
    "question": "During the ADH and ALDH reactions, which cofactor change helps explain the metabolic setting that favors hepatic fat accumulation?",
    "choices": [
      "NAD+ is reduced to NADH.",
      "Both reactions oxidize NADH to NAD+.",
      "Both reactions reduce NADP+ to NADPH instead of reducing NAD+.",
      "NAD+ remains unchanged during both oxidative steps."
    ],
    "rationale": "Both oxidative steps generate reduced NADH from NAD+. The redox shift contributes to lipid accumulation, while fibrosis reflects ongoing injury and scar formation rather than direct conversion of the cofactor into collagen."
  },
  "alcohol-associated-liver-disease-008": {
    "question": "A learner assumes that induction of CYP2E1 protects the liver because it helps oxidize alcohol. Which observation challenges that assumption?",
    "choices": [
      "CYP2E1-mediated oxidation can generate reactive oxygen species and contribute to oxidative injury.",
      "CYP2E1 converts acetaldehyde directly to acetate without oxidant generation.",
      "CYP2E1 induction prevents acetaldehyde formation.",
      "CYP2E1 uses the ADH cofactor reaction and generates no oxidants."
    ],
    "rationale": "Alcohol oxidation and tissue protection are different outcomes. CYP2E1 can form acetaldehyde and generate reactive oxygen species, contributing to lipid and mitochondrial injury. Its activity does not guarantee adequate antioxidant defenses or replace the ALDH reaction."
  },
  "alcohol-associated-liver-disease-009": {
    "question": "Two patients report comparable prolonged alcohol intake, but their liver findings differ. Which factor is consistent with known susceptibility differences?",
    "choices": [
      "Female sex can confer greater ALD susceptibility at lower intake.",
      "Comparable reported intake guarantees the same fibrosis stage.",
      "Male sex excludes alcohol-associated liver injury.",
      "Adequate dietary intake eliminates the effect of sex and alcohol exposure."
    ],
    "rationale": "The book and ACG identify greater susceptibility in women. Amount and duration matter, but host factors and coexisting disease modify risk. None of these factors alone determines an individual patient’s fibrosis stage."
  },
  "alcohol-associated-liver-disease-010": {
    "question": "A patient with metabolic liver disease and type 2 diabetes reports harmful alcohol use. Which assessment is most defensible?",
    "choices": [
      "Alcohol and metabolic disease can contribute together; assess both and support abstinence and metabolic care.",
      "Metabolic liver disease rules out an alcohol contribution.",
      "Alcohol-associated injury rules out a diabetes-related contribution.",
      "A change from spirits to wine removes the need to assess liver risk."
    ],
    "rationale": "Alcohol can accelerate liver injury in people with metabolic disease, and diabetes or obesity adds concern. Causes can coexist. Beverage substitution does not replace exposure reduction, assessment or management of coexisting disease."
  },
  "alcohol-associated-liver-disease-011": {
    "question": "A clinician asks whether binge drinking without daily heavy use has been established as an independent cause of advanced ALD. What reflects ACG’s evidence statement?",
    "choices": [
      "Evidence is insufficient for that specific progression claim; assess the full pattern and do not interpret uncertainty as safety.",
      "The independent progression risk is established and identical for every patient.",
      "Insufficient evidence proves that binge drinking cannot cause harm.",
      "Binge intake is irrelevant whenever the weekly average is recorded."
    ],
    "rationale": "ACG distinguishes risk in patients with underlying liver disease from the unresolved question of advanced ALD after binge-only exposure. A complete exposure history and counseling remain appropriate; lack of sufficient evidence is not proof of no harm."
  },
  "alcohol-associated-liver-disease-012": {
    "question": "A susceptibility-associated PNPLA3 variant is reported for a patient at risk of ALD. Which interpretation reflects ACG guidance?",
    "choices": [
      "An association with risk does not yet justify including the variant in routine ALD management algorithms.",
      "The variant determines the patient’s exact fibrosis stage without liver assessment.",
      "The variant requires a specific approved ALD drug regardless of the clinical syndrome.",
      "The absence of the variant would exclude progression from harmful alcohol use."
    ],
    "rationale": "ACG describes genetic associations but finds insufficient evidence for their inclusion in clinical management algorithms. Genotype does not replace assessment of exposure, coexisting disease, fibrosis and complications or dictate a validated genotype-specific treatment."
  }
};
for (const item of alcoholAssociatedLiverDiseaseQuestionBank) {
  if (verifiedAldSpectrumQuestions[item.id]) Object.assign(item, verifiedAldSpectrumQuestions[item.id]);
}


// Distinct screening and staging cases retain stable IDs, keys and anchors.
const verifiedAldScreeningQuestions = {
  "alcohol-associated-liver-disease-013": {
    "question": "An adult screens positive on AUDIT-C at a routine visit. Which response best uses the result?",
    "choices": [
      "Follow with a fuller alcohol-use and risk assessment to determine care.",
      "Use the screen alone to diagnose alcohol-associated hepatitis.",
      "Assign an exact fibrosis stage from the score.",
      "Treat the result as a complete diagnostic assessment of AUD severity."
    ],
    "rationale": "USPSTF recommends follow-up assessment after a positive brief screen. Screening identifies a need for assessment; AUD severity and liver stage require additional evidence."
  },
  "alcohol-associated-liver-disease-014": {
    "question": "Which distinction between AUDIT-C and the full AUDIT is correct?",
    "choices": [
      "AUDIT-C has three consumption questions; the ten-item AUDIT also covers dependence-related features and problems.",
      "AUDIT-C measures liver stiffness; the full AUDIT measures serum alcohol.",
      "Both questionnaires have ten items with identical coverage.",
      "The full AUDIT replaces all clinical assessment after a positive score."
    ],
    "rationale": "AUDIT-C asks about frequency, typical quantity and heavy-use occasions. The full AUDIT adds seven questions on dependence-related signs and alcohol-related problems; neither measures fibrosis or eliminates clinical assessment."
  },
  "alcohol-associated-liver-disease-015": {
    "question": "A patient reports two 16 fl oz cans of beer at 7.5% ABV. Using 0.6 fl oz of alcohol per U.S. standard drink, how many standard drinks is this?",
    "choices": [
      "4 standard drinks.",
      "2 standard drinks.",
      "1.2 standard drinks.",
      "8 standard drinks."
    ],
    "rationale": "Each can contains 16 × 0.075 = 1.2 fl oz of alcohol; 1.2 ÷ 0.6 = 2 standard drinks per can. Two cans contain 4 standard drinks. Container count alone understates exposure in this example."
  },
  "alcohol-associated-liver-disease-016": {
    "question": "A clinic screens only adults whose appearance seems to suggest heavy alcohol use. Which change follows ACG guidance?",
    "choices": [
      "Use standardized, nonbiased screening across clinical encounters rather than appearance-based selection.",
      "Keep appearance-based selection and add a universal liver biopsy requirement.",
      "Replace interview screening with an assumption based on occupation.",
      "Screen only after a patient develops jaundice or ascites."
    ],
    "rationale": "ACG recommends standardized screening at medical encounters and attention to nonbiased practice. Clinical appearance or advanced symptoms should not be the gate for routine alcohol-use screening."
  },
  "alcohol-associated-liver-disease-017": {
    "question": "Which exposure-window comparison matches ACG Table 4?",
    "choices": [
      "Urine EtG/EtS reflect a shorter window of 3-7 days; blood PEth reflects about 30 days, with test limitations.",
      "Urine EtG guarantees detection of every drinking episode during the previous year.",
      "Blood PEth determines the exact hour of the last drink.",
      "All alcohol biomarkers use the same specimen and detection window."
    ],
    "rationale": "ACG lists urine EtG and EtS windows of 3-7 days and blood PEth at 30 days. These are reported windows with variable performance, not guarantees of exact timing or identical detection."
  },
  "alcohol-associated-liver-disease-018": {
    "question": "A negative urine EtG is obtained today. The clinical question concerns alcohol use three weeks earlier. What interpretation is justified?",
    "choices": [
      "The negative short-window test cannot establish abstinence throughout that earlier period.",
      "It proves there was no alcohol use in the entire preceding month.",
      "It establishes that any liver injury has a nonalcohol cause.",
      "It proves that AUD is absent regardless of the history."
    ],
    "rationale": "A urine EtG window of 3-7 days does not cover a use episode three weeks earlier. Select testing for the clinical time window and combine results with the history; a negative result does not independently exclude AUD or ALD."
  },
  "alcohol-associated-liver-disease-019": {
    "question": "A positive PEth result is reviewed without any other assessment. Which conclusion goes beyond what the test establishes?",
    "choices": [
      "It determines the patient’s exact fibrosis stage and AUD severity.",
      "It provides exposure information to interpret with the clinical history.",
      "It can supplement an alcohol-use assessment.",
      "Its meaning depends on the assay and time window."
    ],
    "rationale": "PEth is an exposure biomarker, not a fibrosis-stage or AUD-severity test. The result should be interpreted with history, clinical assessment and its limitations."
  },
  "alcohol-associated-liver-disease-020": {
    "question": "A patient clearly discloses heavy recent drinking. What does ACG say about obtaining a biomarker solely to confirm that disclosed exposure?",
    "choices": [
      "It adds no clinical utility solely for that confirmation; testing should answer a specific clinical question.",
      "It is required before any discussion of alcohol-related care.",
      "It replaces assessment of withdrawal and liver disease.",
      "It provides the exact amount consumed without an exposure history."
    ],
    "rationale": "ACG notes no added clinical utility from biomarkers in patients who disclose heavy recent drinking. Biomarkers may help when interview or exposure information is unavailable or uncertain; they do not replace other care or judge character."
  },
  "alcohol-associated-liver-disease-021": {
    "question": "An asymptomatic patient has suspected ALD. Which pair does ACG identify as useful initial noninvasive fibrosis assessments?",
    "choices": [
      "FIB-4 and hepatic transient elastography.",
      "AUDIT-C and PEth as direct fibrosis-stage measurements.",
      "Urine EtG and EtS as histologic fibrosis measurements.",
      "Alcohol container count and an unstructured impression of liver symptoms."
    ],
    "rationale": "ACG identifies the blood-based FIB-4 score and transient elastography for initial noninvasive fibrosis assessment in ALD. Alcohol screening and exposure biomarkers answer different questions."
  },
  "alcohol-associated-liver-disease-022": {
    "question": "FIB-4 is elevated during active alcohol use with a low platelet count. Which interpretation is strongest?",
    "choices": [
      "Alcohol-related platelet reduction can affect the estimate; integrate other liver-stage evidence.",
      "The score supplies an exact irreversible fibrosis stage regardless of the platelet change.",
      "A low platelet count excludes advanced liver disease.",
      "A positive AUDIT-C can be used to correct the FIB-4 numerically."
    ],
    "rationale": "ACG notes that active alcohol use may reduce platelets and affect FIB-4 accuracy. Context and other staging evidence are needed; neither declaring the estimate exact nor automatically excluding fibrosis is justified."
  },
  "alcohol-associated-liver-disease-023": {
    "question": "Liver stiffness is high during marked inflammatory liver injury with elevated AST and bilirubin. What is the best interpretation?",
    "choices": [
      "Inflammation can overestimate stiffness; interpret it with the clinical context and arrange further assessment if uncertain.",
      "Stiffness always equals an exact fibrosis stage even during acute injury.",
      "Elevated bilirubin proves the stiffness measurement is falsely low.",
      "The result makes evaluation for competing liver disease unnecessary."
    ],
    "rationale": "ACG describes inflammation and steatohepatitis as confounders that can overestimate liver stiffness. Further contextual assessment is appropriate; the possibility of confounding neither proves nor excludes fibrosis."
  },
  "alcohol-associated-liver-disease-024": {
    "question": "Noninvasive assessment leaves unresolved diagnostic uncertainty in suspected ALD. Which statement about biopsy is appropriate?",
    "choices": [
      "Biopsy may help resolve uncertainty or competing diagnoses, although it is not routinely required just to stage fibrosis.",
      "Every patient with harmful alcohol use must undergo biopsy before any counseling.",
      "Biopsy can never be considered when noninvasive tests are inconclusive.",
      "A urine alcohol biomarker provides the same diagnostic information as liver histology."
    ],
    "rationale": "ACG supports noninvasive staging and selective biopsy when diagnostic uncertainty remains. A biopsy requirement should not be applied universally, and exposure biomarkers do not supply liver histology."
  }
};
for (const item of alcoholAssociatedLiverDiseaseQuestionBank) {
  if (verifiedAldScreeningQuestions[item.id]) Object.assign(item, verifiedAldScreeningQuestions[item.id]);
}


// Distinct recovery-care cases retain stable IDs, keys and anchors.
const verifiedAldRecoveryQuestions = {
  "alcohol-associated-liver-disease-025": {
    "question": "Which goal is central to improving outcomes in alcohol-associated liver disease?",
    "choices": [
      "Sustained alcohol abstinence with treatment support.",
      "Continuing the same alcohol exposure while monitoring ALT alone.",
      "Using a support group as a substitute for all liver care.",
      "Treating a resolved withdrawal episode as permanent recovery."
    ],
    "rationale": "The book identifies alcohol cessation and maintenance of abstinence as central to ALD treatment. Medication, rehabilitation, and support can help sustain that goal; monitoring alone does not remove the exposure."
  },
  "alcohol-associated-liver-disease-026": {
    "question": "A patient is unsure about changing alcohol use. Which brief-intervention approach is appropriate?",
    "choices": [
      "Explore goals and readiness collaboratively, offer a chosen next step, and arrange follow-up.",
      "Confront the patient until they agree with the clinician’s goal.",
      "End the conversation unless the patient immediately promises abstinence.",
      "Give risk information but exclude the patient from planning."
    ],
    "rationale": "ACG supports empathetic motivational intervention that respects autonomy and includes assistance and follow-up. Confrontation or excluding the patient from planning undermines that approach."
  },
  "alcohol-associated-liver-disease-027": {
    "question": "Withdrawal symptoms have resolved after supervised treatment. Which conclusion is justified?",
    "choices": [
      "The acute episode is stabilized; ongoing AUD treatment still needs to be arranged.",
      "AUD has been cured because acute symptoms ended.",
      "Behavioral treatment is now contraindicated.",
      "Further care is useful only if withdrawal recurs."
    ],
    "rationale": "Withdrawal management and ongoing AUD treatment address different needs. Resolution of acute symptoms does not replace continuing treatment to support recovery."
  },
  "alcohol-associated-liver-disease-028": {
    "question": "A discharge plan lists addiction clinics, but the patient cannot obtain the prescribed medication or reach the next visit. What best closes this gap?",
    "choices": [
      "Confirm a receiving service, reachable follow-up, and medication and transport access.",
      "Count the list as a completed handoff regardless of access.",
      "Delay all liver follow-up until the patient independently solves the barriers.",
      "Stop treatment planning because the patient lacks transportation."
    ],
    "rationale": "A transition must address immediate treatment and access needs. A list alone does not establish that follow-up or medication can actually be reached."
  },
  "alcohol-associated-liver-disease-029": {
    "question": "A patient declines one twelve-step group but wants treatment. Which response is appropriate?",
    "choices": [
      "Offer other support options and continue individualized professional treatment.",
      "Require that group before considering any AUD medication.",
      "Exclude secular groups because they cannot support recovery.",
      "Cancel liver follow-up until the patient joins the declined group."
    ],
    "rationale": "Mutual-support groups vary in approach and can complement professional care. Declining one group does not remove other treatment choices."
  },
  "alcohol-associated-liver-disease-030": {
    "question": "Which description correctly distinguishes two behavioral approaches for AUD?",
    "choices": [
      "CBT teaches coping with drinking triggers; motivational enhancement builds motivation and a change plan.",
      "CBT measures liver stiffness; motivational enhancement measures blood alcohol.",
      "Both approaches require medication to be stopped before counseling.",
      "Both approaches replace all clinical evaluation for withdrawal."
    ],
    "rationale": "NIAAA describes CBT as skills and trigger-focused care and motivational enhancement as building motivation and planning change. Neither is a liver test or a replacement for withdrawal assessment."
  },
  "alcohol-associated-liver-disease-031": {
    "question": "A patient returns to drinking after a stressful event while receiving AUD care. What is the best response?",
    "choices": [
      "Review triggers, safety, treatment response, and support needs, then adjust the plan with the patient.",
      "Assume every available treatment has failed permanently.",
      "Continue the identical plan without assessing what changed.",
      "Require the patient to solve the stressor before offering further treatment."
    ],
    "rationale": "Recurrence can identify unmet needs and an opportunity to revise treatment. Continued assessment and follow-up are preferable to declaring recovery impossible or withholding help."
  },
  "alcohol-associated-liver-disease-032": {
    "question": "Which policy conflicts with appropriate recovery care when a patient reports renewed drinking?",
    "choices": [
      "Automatically terminate AUD care solely because drinking recurred, without reassessment or transition planning.",
      "Review immediate safety and whether the current setting can meet care needs.",
      "Arrange another care setting when safety requires it and address medication continuity.",
      "Invite a patient who disengaged to return and discuss access barriers."
    ],
    "rationale": "ASAM discourages punitive discharge for return to use. Safety concerns can require a different setting, but reassessment, continuity, and re-engagement remain priorities."
  }
};
for (const item of alcoholAssociatedLiverDiseaseQuestionBank) {
  if (verifiedAldRecoveryQuestions[item.id]) Object.assign(item, verifiedAldRecoveryQuestions[item.id]);
}


// Distinct transplant cases retain stable IDs, keys and anchors.
const verifiedAldTransplantQuestions = {
  "alcohol-associated-liver-disease-109": {
    "question": "A patient with decompensated ALD meets indications for transplant evaluation but has only a short period of abstinence. Which action is appropriate?",
    "choices": [
      "Refer for early transplant evaluation and addiction treatment planning.",
      "Delay referral solely until six months of abstinence have elapsed.",
      "List the patient immediately without a psychosocial evaluation.",
      "End liver care because abstinence has been brief."
    ],
    "rationale": "Early referral gives the team time to assess medical and psychosocial needs and begin addiction treatment. A fixed abstinence interval should not be an exclusion rule, and referral does not guarantee listing."
  },
  "alcohol-associated-liver-disease-110": {
    "question": "Severe AH has not responded to medical management and the patient has a high risk of death. What does ACG recommend considering?",
    "choices": [
      "Early liver transplantation for highly selected patients under regional and institutional protocols.",
      "Automatic transplantation for every patient with severe AH.",
      "Using a failed treatment course as the only transplant-selection criterion.",
      "Withholding transplant evaluation in every case of recent alcohol use."
    ],
    "rationale": "ACG conditionally supports early transplantation in carefully selected severe-AH nonresponders with high mortality risk. The recommendation has low-quality evidence and requires protocol-based selection rather than automatic eligibility."
  },
  "alcohol-associated-liver-disease-111": {
    "question": "A psychosocial alcohol-recurrence score is elevated during transplant evaluation. Which interpretation is most appropriate?",
    "choices": [
      "Use it as an adjunct to the team assessment and address identified treatment needs.",
      "Treat it as proof that alcohol recurrence is inevitable.",
      "Let the score replace the clinical interview and collateral history.",
      "Use the score alone to determine transplant eligibility."
    ],
    "rationale": "Structured tools help organize information. Many recurrence scores are better at identifying low risk than confirming future recurrence, so an elevated score does not establish certainty or independently decide candidacy."
  },
  "alcohol-associated-liver-disease-112": {
    "question": "A transplant candidate has a treated psychiatric disorder with stable symptoms. Which evaluation policy is inappropriate?",
    "choices": [
      "Exclude the patient automatically solely because of the psychiatric diagnosis.",
      "Assess current mental health stability and ability to follow the care plan.",
      "Arrange continued mental health treatment when needed.",
      "Review treatment response and practical postoperative support."
    ],
    "rationale": "AASLD/AST states that a psychiatric diagnosis alone is not an absolute contraindication. Individual evaluation considers control, treatment response, adherence, and support; the diagnosis is not an automatic exclusion."
  },
  "alcohol-associated-liver-disease-113": {
    "question": "A patient says that successful liver transplantation means AUD treatment is no longer needed. Which response is accurate?",
    "choices": [
      "Transplant treats liver failure; AUD still requires ongoing treatment and follow-up.",
      "A functioning graft permanently removes the risk of recurrent alcohol use.",
      "Alcohol biomarkers are no longer relevant after transplantation.",
      "Behavioral care must stop once the graft is functioning."
    ],
    "rationale": "Transplantation does not cure AUD. Integrated addiction and liver care with monitoring supports sustained abstinence and detection of recurrent use."
  },
  "alcohol-associated-liver-disease-114": {
    "question": "Which post-transplant alcohol-monitoring plan is most appropriate?",
    "choices": [
      "Explain the use of self-report and biomarkers, then offer timely intervention when alcohol use is detected.",
      "Use testing secretly without explaining its purpose to the patient.",
      "Ignore reported drinking whenever a single biomarker result is negative.",
      "Wait for advanced graft injury before offering addiction care."
    ],
    "rationale": "ACG supports monitoring to detect alcohol use early and provide intervention. Transparent use of biomarkers supplements clinical inquiry; one result does not replace the wider assessment."
  },
  "alcohol-associated-liver-disease-115": {
    "question": "An AUD medication is effective in general treatment populations. What follows for a liver-transplant recipient?",
    "choices": [
      "Consider it individually with specialist review; general AUD evidence does not establish transplant-specific benefit.",
      "Assume identical benefit and safety in all transplant recipients.",
      "Prescribe it without considering kidney function or other medications.",
      "Use it as a substitute for all behavioral care and transplant follow-up."
    ],
    "rationale": "The ACG 2024 guideline identifies limited transplant-specific medication evidence. Treatment requires an individual review of organ function and interactions alongside ongoing addiction and transplant care."
  },
  "alcohol-associated-liver-disease-116": {
    "question": "A candidate lacks a traditional family caregiver and has transport and medication-management barriers. What best supports an equitable evaluation?",
    "choices": [
      "Assess the actual postoperative care needs and work with the patient to develop feasible assistance.",
      "Deny evaluation solely because the patient is unmarried.",
      "Assume the absence of relatives proves future nonadherence.",
      "Ignore essential postoperative care needs because equity requires no assessment."
    ],
    "rationale": "AASLD/AST requires practical caregiver support and efforts to mitigate social and financial barriers. OPTN ethical guidance cautions against relationship status alone determining access. Address functional care needs rather than using a family label as a proxy."
  }
};
for (const item of alcoholAssociatedLiverDiseaseQuestionBank) {
  if (verifiedAldTransplantQuestions[item.id]) Object.assign(item, verifiedAldTransplantQuestions[item.id]);
}
