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
