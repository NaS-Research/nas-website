const c = (name, lesson, principle, action, hazard, caseStem, caseAnswer, why) => ({ name, lesson, principle, action, hazard, caseStem, caseAnswer, why });

const concepts = [
  c("person-centered contraceptive choice", "selection-framework", "The best contraceptive method is the medically eligible option that fits the patient's priorities, reproductive goals, privacy needs, and tolerance for bleeding changes or daily tasks.", "Present reversible and permanent options without coercion, then let the patient define what matters most.", "Ranking methods only by theoretical efficacy can erase autonomy and practical fit.", "A patient values predictable control and does not want a device.", "Discuss medically eligible user-controlled methods without pressuring device placement.", "Effectiveness matters, but the patient chooses among safe options."),
  c("U.S. MEC categories", "selection-framework", "U.S. MEC category 1 means no restriction, 2 means advantages generally outweigh risk, 3 means risks usually outweigh advantages, and 4 means unacceptable health risk.", "Use the condition and exact method columns before prescribing.", "Treating category 3 as automatically identical to category 4 obscures consultation and alternatives.", "A method is category 4 for a patient's condition.", "Do not use that method and select a safer alternative.", "Category 4 represents unacceptable health risk."),
  c("dual protection", "selection-framework", "Most contraceptive methods do not protect against sexually transmitted infections.", "Offer condoms and appropriate STI prevention, testing, vaccination, or PrEP counseling alongside pregnancy prevention.", "Calling an IUD or implant protection against HIV creates dangerous misinformation.", "A patient chooses an implant and has a new sexual partner.", "Discuss condoms and STI prevention in addition to the implant.", "The implant prevents pregnancy but does not prevent STIs."),
  c("combined hormonal mechanism", "combined-methods", "Combined hormonal contraception suppresses ovulation through estrogen and progestin feedback, while progestin also thickens cervical mucus and alters the endometrium.", "Explain that pills, patches, and rings share core hormonal actions but differ in use and exposure.", "Teaching that contraception works primarily by disrupting an implanted pregnancy is inaccurate.", "A patient asks whether a combined pill ends an established pregnancy.", "Explain that its primary action is prevention of ovulation and fertilization.", "Combined methods act before pregnancy is established."),
  c("pill patch and ring", "combined-methods", "Combined pills, transdermal patches, and vaginal rings deliver estrogen plus progestin through different schedules and pharmacokinetic routes.", "Match the format to adherence, preference, skin or vaginal factors, and product-specific instructions.", "Assuming every patch, ring, or pill has the same schedule can create contraceptive failure.", "A patient forgets daily pills but prefers a user-controlled method.", "Discuss a medically eligible patch or ring with exact product instructions.", "Longer user-action intervals may fit the patient's adherence pattern."),
  c("CHC blood-pressure assessment", "combined-eligibility", "Blood pressure should be assessed before initiating combined hormonal contraception.", "Obtain a reliable current blood pressure and use U.S. MEC thresholds with the full cardiovascular profile.", "Starting estrogen without knowing severe hypertension status can expose a patient to avoidable vascular risk.", "A patient requests a combined pill and has no recent blood pressure measurement.", "Measure blood pressure before initiation.", "Hypertension can change combined-method eligibility."),
  c("smoking after age 35", "combined-eligibility", "Combined hormonal contraception becomes less acceptable with smoking at age 35 or older, reaching category 4 at 15 or more cigarettes per day.", "Quantify smoking and choose a nonestrogen method when risk is unacceptable.", "Using only a generic smoking checkbox misses the age and intensity distinction.", "A 38-year-old smokes one pack daily and requests a combined pill.", "Avoid combined hormonal contraception and offer safer alternatives.", "This pattern is U.S. MEC category 4 because of myocardial infarction and stroke risk."),
  c("migraine with aura", "combined-eligibility", "Migraine with aura is category 4 for combined hormonal contraception because of ischemic stroke risk.", "Clarify whether focal neurologic aura is present and choose a nonestrogen method when it is.", "Calling every headache equivalent can either deny safe care or expose a patient with aura to estrogen risk.", "A patient has visual aura before migraine attacks.", "Avoid combined hormonal contraception.", "Aura changes estrogen eligibility even when headache frequency is low."),
  c("VTE and estrogen", "combined-eligibility", "Current or high-risk venous thromboembolism patterns can make combined hormonal contraception unsafe.", "Review personal thrombosis history, anticoagulation context, thrombophilia, postpartum state, cancer, and interacting risk factors using U.S. MEC.", "Assuming a low estrogen dose eliminates thrombotic risk is unsafe.", "A patient has a prior estrogen-associated pulmonary embolism and is no longer receiving anticoagulation.", "Avoid combined hormonal contraception and select an eligible alternative.", "Prior estrogen-associated VTE without anticoagulation is a higher-recurrence-risk pattern and makes CHC MEC category 4."),
  c("progestin-only pills", "progestin-methods", "Progestin-only pills include norethindrone, norgestrel, and drospirenone products with different missed-pill windows and instructions.", "Teach the exact product schedule and backup rule rather than one class-wide rule.", "Giving drospirenone instructions to a norethindrone user can leave a gap in protection.", "A patient cannot identify which progestin-only pill they use after a late dose.", "Verify the product before giving missed-dose instructions.", "Missed-pill rules differ by formulation."),
  c("DMPA", "progestin-methods", "Depot medroxyprogesterone provides highly effective progestin-only contraception on a repeating injection schedule and can be self-administered subcutaneously.", "Discuss bleeding change, weight concerns, bone health, delayed return to fertility, and timely reinjection.", "Promising immediate fertility return after the last injection can mislead reproductive planning.", "A patient wants pregnancy soon after stopping a method.", "Discuss that ovulation can be delayed after DMPA and compare alternatives.", "DMPA has a longer and less predictable return-to-ovulation interval."),
  c("testosterone is not contraception", "progestin-methods", "Testosterone therapy might reduce menses but does not reliably prevent pregnancy in a person with a uterus and ovaries.", "Offer contraception when pregnancy is possible and not desired.", "Assuming amenorrhea on testosterone proves anovulation can result in unintended pregnancy.", "A transgender patient using testosterone has pregnancy potential and does not desire pregnancy.", "Offer person-centered contraceptive counseling.", "CDC guidance explicitly states that testosterone might not prevent pregnancy."),
  c("LNG IUD", "intrauterine-contraception", "A levonorgestrel IUD provides long-acting contraception and commonly reduces menstrual bleeding and pain over time.", "Counsel about early spotting, placement, expulsion signs, and product-specific duration.", "Calling all post-placement bleeding a device emergency can cause unnecessary removal.", "A patient has light irregular spotting two months after LNG IUD placement without pain or fever.", "Reassure that early bleeding change is common while assessing concerns.", "Irregular bleeding is expected early and often improves."),
  c("copper IUD", "intrauterine-contraception", "The copper IUD is hormone free, long acting, and the most effective emergency contraceptive option, but it can increase bleeding or cramping.", "Assess baseline bleeding burden and explain both ongoing and emergency use.", "Presenting the copper IUD as likely to reduce heavy periods creates the wrong expectation.", "A patient has severe heavy menstrual bleeding and wants a nonhormonal method.", "Discuss that copper may worsen bleeding and compare eligible alternatives.", "Copper can increase menstrual flow and cramps."),
  c("IUD placement and pain", "intrauterine-contraception", "IUD placement pain is individualized and deserves a person-centered plan.", "Discuss pain options, consider lidocaine approaches, and avoid routine misoprostol except selected circumstances such as a recent failed placement.", "Dismissing anticipated pain or using routine misoprostol without indication is not current practice.", "A nulliparous patient is anxious about placement pain.", "Create a shared pain-management plan rather than denying IUD eligibility.", "Nulliparity does not preclude IUD use, and pain planning improves care."),
  c("etonogestrel implant", "implant", "The etonogestrel implant is highly effective long-acting reversible contraception whose most common management issue is unpredictable bleeding.", "Counsel before placement and remove it whenever the patient wants, while offering alternatives if desired.", "Refusing removal until an arbitrary trial is complete violates autonomy.", "A patient wants implant removal because bleeding is unacceptable.", "Remove the implant and discuss another method if requested.", "Patient request is sufficient reason for removal."),
  c("implant bleeding", "implant", "Spotting, light bleeding, amenorrhea, or prolonged bleeding can occur with the implant and are usually not harmful.", "Exclude pregnancy, infection, medication interaction, or pathology when indicated, then offer reassurance or evidence-based management.", "Assuming all bleeding is harmless without assessing a changed pattern can miss another cause.", "A stable implant user develops new heavy bleeding after a long stable interval.", "Evaluate pregnancy and other indicated causes before attributing it to the implant.", "A new pattern deserves clinical assessment even though irregular bleeding is common."),
  c("copper IUD emergency contraception", "emergency-contraception", "A copper IUD can be placed within five days of the first unprotected act, or within five days of estimated ovulation, and then continued for contraception.", "Offer it when medically eligible and acceptable, especially when the most effective emergency option is desired.", "Calling emergency contraception an abortifacient misrepresents its action.", "A patient presents four days after unprotected intercourse and wants the most effective ongoing option.", "Offer a copper IUD if eligible and acceptable.", "The copper IUD is highly effective for emergency and ongoing contraception."),
  c("ulipristal emergency contraception", "emergency-contraception", "Ulipristal acetate 30 mg is used as soon as possible within five days and is generally more effective than levonorgestrel during days three through five.", "Delay hormones at least five days; use barriers or abstain during the delay and for seven days after starting or until menses, whichever comes first.", "Starting a progestin immediately after ulipristal can reduce its effectiveness.", "A patient takes ulipristal today and asks to restart a combined pill.", "Wait at least five days to restart; use barriers or abstain while waiting and for seven days after restarting or until menses, whichever comes first.", "Immediate progestin can oppose ulipristal. EC does not protect later intercourse, so protection is needed during the restart delay."),
  c("levonorgestrel emergency contraception", "emergency-contraception", "Levonorgestrel 1.5 mg should be taken as soon as possible within five days, with effectiveness declining as time passes.", "Start or resume regular contraception immediately and use barriers or abstain for seven days after levonorgestrel emergency contraception.", "Delaying levonorgestrel while waiting for the next menses reduces timely access.", "A patient takes levonorgestrel emergency contraception and wants to restart pills.", "Restart immediately and use barriers or abstain for seven days.", "Unlike ulipristal, levonorgestrel does not require a five-day delay before hormonal contraception."),
  c("quick start", "initiation-adherence", "Most contraceptive methods can be started at any time when the clinician is reasonably certain the patient is not pregnant.", "Use the CDC pregnancy checklist, add a test when clinically useful, and provide method-specific backup.", "Requiring every patient to wait for the next menses creates an unnecessary access barrier.", "A patient meets criteria that reasonably exclude pregnancy but is midcycle.", "Use quick start with the appropriate backup plan.", "Waiting for menses is not routinely necessary."),
  c("missed-dose instructions", "initiation-adherence", "Missed-dose management depends on method, formulation, number of missed doses, timing, and recent intercourse.", "Verify the exact product and follow current CDC or label instructions, including emergency contraception when indicated.", "One universal missed-pill rule is unsafe across combined and progestin-only formulations.", "A patient reports missed pills but does not know the brand or type.", "Identify the product before giving a definitive plan.", "The safe window and backup requirements differ."),
  c("enzyme-inducing interactions", "interactions-follow-up", "Strong enzyme inducers can lower systemic hormonal contraceptive exposure and reduce effectiveness.", "Review antiseizure drugs, rifamycins, antiretrovirals, herbal products, and the exact method using U.S. MEC and interaction resources.", "Assuming every hormonal method is affected equally ignores route and mechanism.", "A patient starts rifampin while using combined oral contraception.", "Select an interaction-resistant strategy and provide backup counseling.", "Rifampin can lower systemic hormone exposure and compromise effectiveness."),
  c("lamotrigine and CHC", "interactions-follow-up", "Estrogen-containing contraception can increase lamotrigine clearance and lower lamotrigine concentrations, with rebound increases during hormone-free intervals.", "Coordinate contraception and seizure or mood management before starting, stopping, or changing the estrogen schedule.", "Abruptly starting or stopping CHC without monitoring can destabilize lamotrigine exposure.", "A stable lamotrigine user wants to start a combined pill.", "Coordinate an eligible method and a lamotrigine monitoring plan.", "The interaction can reduce control during active hormones and increase toxicity when estrogen is withdrawn."),
  c("follow-up and warning symptoms", "interactions-follow-up", "Contraceptive follow-up assesses satisfaction, adherence, bleeding, blood pressure when relevant, new diagnoses or medications, and warning symptoms.", "Invite method change or discontinuation whenever the patient's goals or tolerance changes.", "Treating a contraceptive choice as permanent after consent undermines continuing autonomy.", "A patient is unhappy with a method despite no medical emergency.", "Explore the concern and support switching or stopping if desired.", "Ongoing person-centered care includes the right to change methods."),
  c("contraceptive teach-back", "integrated-care", "Teach-back verifies that the patient can explain the exact start date, schedule, backup interval, missed-use response, expected effects, and urgent warning plan in their own words.", "Ask the patient to walk through the plan, then correct gaps without blame and provide concise written instructions.", "Asking only whether the patient has questions can leave critical misunderstandings hidden.", "A patient says the new regimen is clear but cannot state when backup protection ends.", "Review the exact backup interval and repeat teach-back until the plan is usable.", "Demonstrated understanding is stronger evidence than passive agreement."),
  c("contraceptive method transition", "integrated-care", "A safe method transition preserves autonomy and pregnancy prevention while accounting for the old method, new method, timing, recent intercourse, backup, return to fertility, bleeding, and reproductive goals.", "Use product-specific overlap or backup, evaluate concerning bleeding when indicated, and add preconception care when pregnancy becomes the goal.", "Stopping one method before a complete transition plan can create an unintended gap or delay a desired pregnancy evaluation.", "A patient wants to stop a method today and begin another without losing contraceptive protection.", "Confirm recent use and intercourse, then give the exact overlap or backup plan for both methods.", "Transitions are clinical events that require method-specific timing and a plan aligned with the patient's goal."),
  c("norethindrone missed dose", "initiation-adherence", "The three-hour threshold applies to norethindrone; the drospirenone window must not be substituted.", "Take a pill promptly, continue the schedule and use backup until two days of correct use.", "Skip the pill and wait for tomorrow.", "A norethindrone POP user is five hours late and reports no recent intercourse.", "Take a pill promptly, continue the schedule and use backup until two days of correct use.", "The three-hour threshold applies to norethindrone; the drospirenone window must not be substituted."),
  c("drospirenone single missed dose", "initiation-adherence", "A single active drospirenone pill less than 48 hours overdue differs from two or more missed active pills.", "Take the missed pill promptly and continue the pack; no extra protection is needed under the CDC single-missed-pill rule.", "Apply the norethindrone three-hour rule automatically.", "A drospirenone POP user is 30 hours overdue for one active pill, with otherwise correct use.", "Take the missed pill promptly and continue the pack; no extra protection is needed under the CDC single-missed-pill rule.", "A single active drospirenone pill less than 48 hours overdue differs from two or more missed active pills."),
  c("combined pills final week", "initiation-adherence", "The plan avoids extending the hormone-free interval; older missed tablets are discarded.", "Take the most recent missed pill, continue active pills, omit the hormone-free interval and use seven days of backup.", "Take the scheduled placebo break to reset the cycle.", "Two consecutive active pills were missed in the final active week of a standard combined pill pack.", "Take the most recent missed pill, continue active pills, omit the hormone-free interval and use seven days of backup.", "The plan avoids extending the hormone-free interval; older missed tablets are discarded."),
  c("late DMPA", "progestin-methods", "Sixteen weeks exceeds the CDC 15-week window that permits reinjection without additional protection.", "Assess pregnancy certainty and recent intercourse; if reinjecting, use seven days of backup and consider EC other than ulipristal when appropriate.", "Reinject without asking about pregnancy or intercourse.", "A patient returns 16 weeks after the last DMPA injection.", "Assess pregnancy certainty and recent intercourse; if reinjecting, use seven days of backup and consider EC other than ulipristal when appropriate.", "Sixteen weeks exceeds the CDC 15-week window that permits reinjection without additional protection."),
  c("drospirenone potassium", "progestin-methods", "Absence of estrogen does not remove drospirenone-specific hyperkalemia concerns.", "Choose an alternative because adrenal insufficiency is a labeled contraindication.", "Prescribe it because every POP is suitable in every endocrine condition.", "A patient with adrenal insufficiency requests Slynd.", "Choose an alternative because adrenal insufficiency is a labeled contraindication.", "Absence of estrogen does not remove drospirenone-specific hyperkalemia concerns."),
  c("patch BMI limits", "combined-methods", "Twirla is contraindicated at BMI at least 30; this differs from its reduced-effectiveness warning at BMI 25 to below 30.", "Explain the labeled BMI contraindication and discuss another eligible method.", "Prescribe it because BMI changes effectiveness only, never safety labeling.", "A patient with BMI 31 kg/m2 requests Twirla.", "Explain the labeled BMI contraindication and discuss another eligible method.", "Twirla is contraindicated at BMI at least 30; this differs from its reduced-effectiveness warning at BMI 25 to below 30."),
  c("implant duration", "implant", "The January 2026 label extended the duration; use current labeling rather than the book's three-year limit.", "Explain that the current U.S. label permits up to five years, while honoring earlier removal if desired.", "Require replacement solely because an older table says three years.", "An otherwise eligible Nexplanon user reaches year three in 2026 and wants to continue the same implant.", "Explain that the current U.S. label permits up to five years, while honoring earlier removal if desired.", "The January 2026 label extended the duration; use current labeling rather than the book's three-year limit."),
  c("Phexxi timing", "nonhormonal-methods", "Phexxi requires a new dose for each act even within the same hour.", "Use another applicator before the additional act.", "Rely on the first dose for every act that day.", "A patient used Phexxi before intercourse and plans another act 30 minutes later.", "Use another applicator before the additional act.", "Phexxi requires a new dose for each act even within the same hour."),
  c("Caya removal timing", "nonhormonal-methods", "Early removal can undermine the product's contraceptive use instructions.", "Keep it in for at least six hours after intercourse while staying within the 24-hour total wear limit.", "Remove it immediately because gel acts instantly.", "A Caya user wants to remove the diaphragm two hours after intercourse.", "Keep it in for at least six hours after intercourse while staying within the 24-hour total wear limit.", "Early removal can undermine the product's contraceptive use instructions."),
  c("LAM criteria", "nonhormonal-methods", "Lactational amenorrhea criteria include being less than six months postpartum; absent menses alone is insufficient.", "Recommend another contraceptive method if pregnancy is not desired.", "Assume amenorrhea guarantees contraception at any postpartum age.", "A breastfeeding patient is eight months postpartum and remains amenorrheic.", "Recommend another contraceptive method if pregnancy is not desired.", "Lactational amenorrhea criteria include being less than six months postpartum; absent menses alone is insufficient."),
  c("Annovera cumulative removals", "vaginal-ring-use", "The total is three hours, exceeding Annovera's two-hour cumulative limit.", "Reinsert and use backup until seven consecutive days of use.", "Use no backup because each removal was under two hours.", "An Annovera user removes the system twice during one 21-day interval, for 90 minutes each time.", "Reinsert and use backup until seven consecutive days of use.", "The total is three hours, exceeding Annovera's two-hour cumulative limit."),
  c("ring reuse", "vaginal-ring-use", "The hormones, labeled reuse schedules and storage instructions differ.", "Explain that Annovera is reused for 13 cycles, while each NuvaRing cycle uses a new ring.", "Reuse a single NuvaRing for 13 cycles.", "A patient thinks every contraceptive ring is reusable for a full year.", "Explain that Annovera is reused for 13 cycles, while each NuvaRing cycle uses a new ring.", "The hormones, labeled reuse schedules and storage instructions differ."),
  c("NuvaRing storage", "vaginal-ring-use", "The post-dispensing date cannot exceed either four months or the manufacturer expiration, whichever is earlier.", "Label it for use no later than four months after dispensing and teach room-temperature storage limits.", "Allow room-temperature storage until any later manufacturer expiration.", "An unopened NuvaRing is dispensed with a manufacturer expiration beyond four months.", "Label it for use no later than four months after dispensing and teach room-temperature storage limits.", "The post-dispensing date cannot exceed either four months or the manufacturer expiration, whichever is earlier."),
  c("thrombophilia DMPA", "combined-eligibility", "Avoiding estrogen does not erase method-specific thrombosis risk.", "Explain that DMPA is MEC category 3 for thrombophilia and compare other eligible methods.", "Treat all estrogen-free methods as category 1.", "A patient with antiphospholipid syndrome asks whether every estrogen-free method is equally suitable.", "Explain that DMPA is MEC category 3 for thrombophilia and compare other eligible methods.", "Avoiding estrogen does not erase method-specific thrombosis risk."),
  c("current breast cancer", "combined-eligibility", "The restriction includes progestin methods, while copper IUD classification for this condition is category 1.", "Explain that current breast cancer is MEC category 4 for hormonal methods; assess a copper IUD or other eligible nonhormonal option.", "Switch automatically to a POP because it has no estrogen.", "A patient with current breast cancer asks whether a progestin-only pill avoids the hormonal contraception restriction.", "Explain that current breast cancer is MEC category 4 for hormonal methods; assess a copper IUD or other eligible nonhormonal option.", "The restriction includes progestin methods, while copper IUD classification for this condition is category 1."),
  c("hypertension boundary", "combined-eligibility", "Either systolic at least 160 or diastolic at least 100 reaches this category.", "Do not initiate the combined method; the systolic value meets MEC category 4.", "Prescribe because both numbers must exceed the thresholds.", "Repeated properly measured blood pressure is 160/96 mm Hg before a requested combined pill.", "Do not initiate the combined method; the systolic value meets MEC category 4.", "Either systolic at least 160 or diastolic at least 100 reaches this category."),
  c("tirzepatide escalation", "interactions-follow-up", "The labeling repeats the precaution after every dose escalation, not just the first injection.", "Use a nonoral contraceptive or add a barrier for four weeks after this increase.", "Use backup only after the first-ever tirzepatide dose.", "A patient taking an oral contraceptive increases the tirzepatide dose today.", "Use a nonoral contraceptive or add a barrier for four weeks after this increase.", "The labeling repeats the precaution after every dose escalation, not just the first injection."),
  c("Mavyret ethinyl estradiol", "interactions-follow-up", "The concern is ALT elevation; current U.S. labeling permits 20 mcg or less but does not establish overall contraceptive eligibility.", "Coordinate a suitable alternative because this dose exceeds the current 20 mcg labeling threshold.", "Assume every estrogen dose is permitted with Mavyret.", "An otherwise eligible patient taking a pill with 30 mcg ethinyl estradiol will start Mavyret.", "Coordinate a suitable alternative because this dose exceeds the current 20 mcg labeling threshold.", "The concern is ALT elevation; current U.S. labeling permits 20 mcg or less but does not establish overall contraceptive eligibility."),
  c("mycophenolate contraception", "interactions-follow-up", "CellCept can reduce oral hormone exposure and causes embryo-fetal toxicity; its specified contraception plan continues six weeks after stopping.", "Arrange the label-directed pregnancy-prevention plan, including an added barrier or another acceptable option.", "Assume a pill alone always meets the label plan.", "A patient starting CellCept plans to rely on a combined pill alone.", "Arrange the label-directed pregnancy-prevention plan, including an added barrier or another acceptable option.", "CellCept can reduce oral hormone exposure and causes embryo-fetal toxicity; its specified contraception plan continues six weeks after stopping."),
  c("IUD indication durations", "intrauterine-contraception", "Mirena has different labeled durations for contraception and heavy menstrual bleeding.", "Discuss replacement for the bleeding indication despite the eight-year contraception duration.", "Apply the eight-year duration to every indication.", "A Mirena user reaches five years and wants continued treatment specifically for heavy menstrual bleeding.", "Discuss replacement for the bleeding indication despite the eight-year contraception duration.", "Mirena has different labeled durations for contraception and heavy menstrual bleeding."),
  c("IUD screening timing", "intrauterine-contraception", "A screening need differs from current purulent cervicitis or known gonorrhea/chlamydia, which precludes initiation until managed.", "Screen at placement without routinely delaying the procedure.", "Require a negative result before every IUD placement.", "An asymptomatic, otherwise eligible patient is due for gonorrhea/chlamydia screening at an IUD visit, with no known infection.", "Screen at placement without routinely delaying the procedure.", "A screening need differs from current purulent cervicitis or known gonorrhea/chlamydia, which precludes initiation until managed."),
  c("EC timing sources", "emergency-contraception", "The Plan B 72-hour label is not the window for every EC method; CDC permits EC pills within five days, with UPA more effective late in that interval.", "Explain that options remain, including UPA or an eligible IUD, and arrange prompt access.", "Deny every option because 72 hours passed.", "A patient presents 96 hours after unprotected intercourse and says all emergency options ended at 72 hours.", "Explain that options remain, including UPA or an eligible IUD, and arrange prompt access.", "The Plan B 72-hour label is not the window for every EC method; CDC permits EC pills within five days, with UPA more effective late in that interval."),
  c("EC vomiting CDC", "emergency-contraception", "CDC recommends redosing after vomiting within three hours; the named guidance avoids confusing this with product-specific wording.", "Repeat the EC dose as soon as possible and consider an antiemetic.", "Wait until the next menstrual cycle to repeat it.", "A patient vomits 90 minutes after taking an emergency contraceptive pill. The clinician is applying CDC SPR guidance.", "Repeat the EC dose as soon as possible and consider an antiemetic.", "CDC recommends redosing after vomiting within three hours; the named guidance avoids confusing this with product-specific wording."),
  c("LNG IUD EC scope", "emergency-contraception", "Specialist guidance supports the 52 mg device; this does not establish FDA approval or justify using lower-dose LNG IUDs for EC.", "Explain the evidence-based use and its difference from FDA labeling and CDC 2024 EC scope.", "Describe EC as FDA-approved for every LNG IUD.", "A clinician offers a 52 mg LNG IUD for emergency contraception under Society of Family Planning guidance.", "Explain the evidence-based use and its difference from FDA labeling and CDC 2024 EC scope.", "Specialist guidance supports the 52 mg device; this does not establish FDA approval or justify using lower-dose LNG IUDs for EC."),
  c("Twirla detached label", "combined-methods", "The label uses at least 24 hours for detachment; do not substitute the CDC 48-hour algorithm without identifying that different guidance.", "Apply a new patch, start a new cycle/change day and use seven days of backup.", "Reattach without backup because fewer than 48 hours passed.", "A Twirla patch has been detached for 30 hours. The patient is following the product label.", "Apply a new patch, start a new cycle/change day and use seven days of backup.", "The label uses at least 24 hours for detachment; do not substitute the CDC 48-hour algorithm without identifying that different guidance."),
  c("Twirla application site", "combined-methods", "Application sites differ by product; an arm site from another patch is not automatically valid.", "Use a labeled Twirla site such as abdomen, buttock or upper torso excluding breasts.", "Use the arm because all contraceptive patches share every site.", "A patient transfers instructions from Xulane and plans to place Twirla on the upper outer arm.", "Use a labeled Twirla site such as abdomen, buttock or upper torso excluding breasts.", "Application sites differ by product; an arm site from another patch is not automatically valid."),
  c("latex lubricant", "nonhormonal-methods", "Oil-based products can weaken latex and increase breakage risk.", "Choose a water- or silicone-based lubricant instead.", "Use petroleum jelly because all lubricants preserve latex.", "A patient plans to use petroleum jelly with an external latex condom.", "Choose a water- or silicone-based lubricant instead.", "Oil-based products can weaken latex and increase breakage risk."),
  c("vasectomy confirmation", "nonhormonal-methods", "Time since surgery and ejaculation counts do not establish success; CDC recommends semen analysis at 8 to 16 weeks.", "Continue contraception or abstain until semen analysis confirms procedural success.", "Stop other contraception because twelve weeks guarantees success.", "Twelve weeks after vasectomy, a patient has not submitted the requested semen sample and wants to stop other contraception.", "Continue contraception or abstain until semen analysis confirms procedural success.", "Time since surgery and ejaculation counts do not establish success; CDC recommends semen analysis at 8 to 16 weeks."),
  c("sponge versus diaphragm", "nonhormonal-methods", "The sponge permits intercourse during the first 24 hours and has a different total wear limit from Caya.", "Explain the sponge label: retain at least six hours after last intercourse, with no more than 30 hours total wear.", "Remove it immediately after the last act even if six hours have not passed.", "A Today sponge user applies the Caya diaphragm limit and assumes every vaginal barrier must be removed by 24 hours.", "Explain the sponge label: retain at least six hours after last intercourse, with no more than 30 hours total wear.", "The sponge permits intercourse during the first 24 hours and has a different total wear limit from Caya."),
  c("implant bleeding treatment", "implant", "Treatment choice depends on medical eligibility as well as bleeding goals.", "Consider an eligible non-estrogen treatment rather than automatically prescribing a combined pill.", "Prescribe estrogen because a short course erases every contraindication.", "An implant user with migraine with aura requests treatment for bothersome bleeding after appropriate evaluation.", "Consider an eligible non-estrogen treatment rather than automatically prescribing a combined pill.", "Treatment choice depends on medical eligibility as well as bleeding goals."),
  c("tranexamic acid combination", "implant", "The thrombotic concern means separately listed treatment options are not automatically safe together.", "Reassess the plan because oral tranexamic acid labeling contraindicates use with combined hormonal contraception.", "Combine every option listed by CDC simultaneously.", "An implant user already taking a combined pill for bleeding asks to add oral tranexamic acid.", "Reassess the plan because oral tranexamic acid labeling contraindicates use with combined hormonal contraception.", "The thrombotic concern means separately listed treatment options are not automatically safe together."),
  c("DMPA meningioma warning", "progestin-methods", "The updated label directs discontinuation when meningioma is diagnosed.", "Discontinue Depo-Provera CI and coordinate an alternative contraceptive plan.", "Give the next injection without review.", "A patient using Depo-Provera CI is newly diagnosed with meningioma before the next injection.", "Discontinue Depo-Provera CI and coordinate an alternative contraceptive plan.", "The updated label directs discontinuation when meningioma is diagnosed."),
  c("combined pill prolonged illness", "initiation-adherence", "Prolonged illness requires a recovery-based backup interval and avoidance of an extended hormone-free interval.", "Continue active pills, skip the hormone-free interval and use backup until seven consecutive active-pill days after recovery.", "Take the placebo week as usual and use no backup.", "A combined-pill user has severe diarrhea for three days during the final active week. The patient asks for CDC guidance.", "Continue active pills, skip the hormone-free interval and use backup until seven consecutive active-pill days after recovery.", "Prolonged illness requires a recovery-based backup interval and avoidance of an extended hormone-free interval."),
  c("traditional POP vomiting", "initiation-adherence", "CDC gives traditional POPs a redosing and two-day post-recovery backup plan.", "Take another pill promptly, continue daily pills and use backup until two days after symptoms resolve; assess EC need.", "Use the combined-pill rule and omit redosing and backup.", "A norethindrone POP user vomits one hour after a dose and asks for CDC guidance.", "Take another pill promptly, continue daily pills and use backup until two days after symptoms resolve; assess EC need.", "CDC gives traditional POPs a redosing and two-day post-recovery backup plan."),
  c("drospirenone prolonged illness", "initiation-adherence", "Drospirenone illness lasting more than 24 hours requires seven days of post-recovery backup under CDC guidance.", "Follow redosing and daily-pill instructions, use backup for seven days after recovery and assess EC need.", "Use only two days of backup because all POPs share one rule.", "A drospirenone POP user has vomiting beginning two hours after an active pill and continuing for 30 hours. The patient asks for CDC guidance.", "Follow redosing and daily-pill instructions, use backup for seven days after recovery and assess EC need.", "Drospirenone illness lasting more than 24 hours requires seven days of post-recovery backup under CDC guidance."),
  c("Oriahnn contraception", "therapeutic-uses", "Oriahnn is not a contraceptive.", "Arrange effective nonhormonal contraception during treatment and for 28 days afterward.", "Rely on Oriahnn alone.", "A patient starting Oriahnn for fibroid-related bleeding believes its hormones replace contraception.", "Arrange effective nonhormonal contraception during treatment and for 28 days afterward.", "Oriahnn is not a contraceptive."),
  c("Yaz PMDD indication", "therapeutic-uses", "PMDD is not interchangeable with ordinary PMS, and a product indication is not automatically a class indication.", "Explain the product-specific PMDD indication and the requirement that the patient also choose oral contraception.", "Apply the indication to every hormonal product.", "A patient asks whether every combined pill is FDA-labeled to treat ordinary PMS because Yaz has a mood-related indication.", "Explain the product-specific PMDD indication and the requirement that the patient also choose oral contraception.", "PMDD is not interchangeable with ordinary PMS, and a product indication is not automatically a class indication."),
  c("PCOS treatment goals", "therapeutic-uses", "Withdrawal bleeding during treatment does not prove restoration of spontaneous ovulation.", "Explain that the pill manages symptoms while metabolic and reproductive needs still require care.", "Confirm permanent cure from a single regular bleed.", "An eligible adult with PCOS has more predictable bleeding on a combined pill and asks whether the disorder is cured.", "Explain that the pill manages symptoms while metabolic and reproductive needs still require care.", "Withdrawal bleeding during treatment does not prove restoration of spontaneous ovulation."),
  c("NuvaRing prolonged wear within four weeks", "vaginal-ring-use", "The label retains protection through four weeks of continuous wear.", "Remove it and insert a new ring after a one-week break.", "Confuse continuous wear with a prolonged ring-free interval.", "A patient has kept the same NuvaRing continuously in place for 26 days, with no expulsions or interacting medications. They ask for its labeled plan.", "Remove it and insert a new ring after a one-week break; protection is retained under the label.", "Twenty-six days is more than three weeks but within four weeks. This labeled instruction concerns continuous wear, not time outside the vagina."),
  c("NuvaRing wear beyond four weeks", "vaginal-ring-use", "Wear beyond four weeks requires pregnancy exclusion and backup when restarting under the label.", "Remove it, exclude pregnancy, then restart with seven days of backup.", "Assume the four-week allowance extends indefinitely.", "A patient discovers that the same NuvaRing has remained in place for 33 days and asks for its labeled plan.",
    "Remove it and rule out pregnancy before restarting; use backup until the new ring has been worn continuously for seven days.", "Thirty-three days exceeds four weeks. The label calls for pregnancy exclusion and seven continuous days of new-ring use before stopping backup."),
  c("Miudella duration", "intrauterine-contraception", "Device durations differ.", "Verify the selected system.", "Assume all copper devices last ten years.", "A patient with Miudella is told that every copper IUD has a ten-year labeled duration.", "Correct the plan: Miudella is labeled for up to three years.", "The ten-year Paragard duration cannot be transferred to Miudella."),
  c("Miudella emergency-use restriction", "emergency-contraception", "EC evidence is product specific.", "Select an established EC option.", "Substitute an unvalidated device.", "A clinic proposes substituting Miudella for Paragard in an emergency-contraception protocol solely because both contain copper.", "Do not substitute: Miudella labeling contraindicates emergency use.", "Copper content alone does not establish equivalent emergency-contraception evidence."),
  c("cervical cap timing", "nonhormonal-methods", "Barrier timing depends on the device.", "Use the selected cap instructions.", "Remove before the minimum interval.", "A FemCap user plans to remove the device two hours after intercourse.", "Explain that it must remain for at least six hours after intercourse, without exceeding 48 hours total wear.", "The cap's minimum post-intercourse retention and maximum wear both matter; these are not the diaphragm or sponge limits."),
  c("contraceptive app authorization", "nonhormonal-methods", "Authorization is product specific.", "Verify the contraceptive device and its instructions.", "Treat every tracker as contraception.", "A patient assumes an ordinary period-calendar app prevents pregnancy because Natural Cycles received FDA authorization.", "Explain that authorization of one contraceptive app does not establish efficacy for every cycle tracker.", "Contraceptive software requires a validated product, correct use and protection or abstinence on fertile days."),
  c("continuous CHC bleeding break", "combined-methods", "Bleeding management must preserve contraception.", "Respect the minimum active-use interval.", "Interrupt hormones too early.", "On day 14 of continuous combined-pill use, a patient with light spotting asks to take a four-day hormone break.", "Avoid that break during the first 21 days; assess the bleeding and discuss an appropriate plan.", "CDC limits this bleeding-management option to after the first 21 days and no more than once monthly."),
  c("combined drospirenone potassium", "combined-methods", "Potassium risk persists in combined products.", "Check the product warning.", "Assume estrogen prevents potassium elevation.", "An otherwise eligible patient takes chronic spironolactone and is starting Yaz.", "Arrange potassium monitoring during the first cycle.", "Drospirenone and potassium-raising medicines require a monitoring plan."),
  c("urgent combined-pill symptoms", "combined-methods", "Urgent symptoms need assessment.", "Escalate possible thromboembolism.", "Dismiss symptoms as adjustment.", "A combined-pill user develops sudden breathlessness and chest pain.", "Arrange emergency assessment now.", "These symptoms can signal a serious vascular event."),
  c("Lo Loestrin active sequence", "combined-methods", "Ingredients matter more than position in the pack.", "Identify estrogen-only tablets.", "Call the final four tablets placebo.", "A Lo Loestrin Fe user assumes all four tablets after the 24 combination tablets are inactive.", "Explain that the next two contain estrogen and only the final two are nonhormonal iron tablets.", "The labeled sequence is 24 combined, two estrogen-only and two nonhormonal tablets."),
  c("Seasonique extended sequence", "combined-methods", "Extended packs differ.", "Read the last seven tablets.", "Assume a placebo week.", "A patient describes the last seven Seasonique tablets as hormone-free.", "Explain that they contain ethinyl estradiol and follow 84 combination tablets.", "The 91-day regimen includes seven estrogen-only tablets, not seven placebo tablets."),
  c("Natazia missed day twenty", "initiation-adherence", "Natazia has a product-specific algorithm.", "Use its pack-day instructions.", "Apply standard combined-pill rules.", "A Natazia user missed only the day-20 tablet and is now 14 hours late. The patient asks for the labeled missed-dose plan.", "Discard the current pack, begin day one of a new pack and use nonhormonal backup for nine days.", "For one pill more than 12 hours late on days 18 through 24, the label uses a new pack and nine-day backup."),
  c("cancer association counseling", "therapeutic-uses", "Cancer associations differ by site.", "Discuss benefits and risks.", "Promise universal protection.", "A patient interprets lower ovarian-cancer risk among pill users as proof that oral contraceptives prevent every cancer.", "Explain that associations vary by cancer type and do not erase contraindications.", "Observational benefits for ovarian and endometrial cancer coexist with different breast and cervical risk patterns."),
  c("Orilissa duration", "therapeutic-uses", "Dose changes duration limits.", "Check the labeled limit.", "Apply the lower-dose limit.", "A patient with normal liver function takes Orilissa 200 mg twice daily and expects 24 months of treatment.", "Explain that this dose is limited to six months.", "The longer limit belongs to the 150 mg daily regimen; bone loss limits exposure."),
];

const caseDistractors = [
  [
    "Require an implant because it has high efficacy.",
    "Withhold contraception unless a device is accepted.",
    "Choose solely by population failure rates."
  ],
  [
    "Use the method without addressing the condition.",
    "Treat category 4 as no restriction.",
    "Assume a lower dose always removes category 4 risk."
  ],
  [
    "Explain that the implant also prevents HIV.",
    "Stop STI prevention because pregnancy protection is strong.",
    "Use pregnancy testing instead of STI assessment."
  ],
  [
    "Explain that the pill terminates an implanted pregnancy.",
    "Describe the pill as permanently destroying ovaries.",
    "Claim it works only after implantation."
  ],
  [
    "Prescribe a patch without checking estrogen eligibility.",
    "Assume every ring has the same reuse schedule.",
    "Require daily pills despite the patient's stated difficulty."
  ],
  [
    "Start without checking blood pressure because age alone determines risk.",
    "Use a pelvic exam as a substitute for blood pressure.",
    "Assume absence of symptoms excludes severe hypertension."
  ],
  [
    "Use a low-estrogen pill because smoking is irrelevant below age 40.",
    "Switch to an estrogen patch to eliminate smoking risk.",
    "Count only cigarettes smoked on clinic days."
  ],
  [
    "Ignore aura if migraine attacks are infrequent.",
    "Use a patch because transdermal estrogen has no stroke concern.",
    "Treat all visual aura as ordinary tension headache."
  ],
  [
    "Continue estrogen without reviewing anticoagulation or recurrence risk.",
    "Assume a lower estrogen dose prevents every clot.",
    "Choose an estrogen ring solely because it is not oral."
  ],
  [
    "Apply the drospirenone rule to every mini-pill.",
    "Assume no POP requires backup after missed pills.",
    "Give a universal seven-day delay before resuming any pill."
  ],
  [
    "Guarantee ovulation the day after the last injection.",
    "Describe DMPA as permanently sterilizing.",
    "Ignore the patient's desired pregnancy timeline."
  ],
  [
    "Use amenorrhea as proof that pregnancy is impossible.",
    "Treat testosterone as approved contraception.",
    "Withhold contraceptive counseling because of gender identity."
  ],
  [
    "Remove the IUD urgently for all spotting.",
    "Promise that bleeding must stop immediately after insertion.",
    "Ignore new pain or fever if it develops."
  ],
  [
    "Promise copper will reduce menstrual blood loss.",
    "Assume all IUDs contain levonorgestrel.",
    "Deny discussion of other methods."
  ],
  [
    "Deny IUDs to all nulliparous patients.",
    "Dismiss expected pain as irrelevant.",
    "Require misoprostol before every placement."
  ],
  [
    "Require a year-long trial before removal.",
    "Refuse removal unless bleeding causes anemia.",
    "Require estrogen treatment before honoring removal."
  ],
  [
    "Attribute all new heavy bleeding to the implant without assessment.",
    "Exclude pregnancy solely because an implant is present.",
    "Assume infection cannot coexist with an implant."
  ],
  [
    "Wait for the next period before discussing emergency options.",
    "Offer only a method that does not address the recent intercourse.",
    "Describe the copper IUD as terminating an established pregnancy."
  ],
  [
    "Restart the combined pill immediately without considering the interaction.",
    "Wait five days and then assume no backup is needed.",
    "Take levonorgestrel together with ulipristal to improve effectiveness."
  ],
  [
    "Wait five days before restarting, as with ulipristal.",
    "Restart without any backup counseling.",
    "Wait until the next menstrual cycle before offering contraception."
  ],
  [
    "Require the next period despite reasonable pregnancy exclusion.",
    "Require an ultrasound for every contraceptive start.",
    "Deny contraception because the patient is midcycle."
  ],
  [
    "Give every pill user the same three-hour rule.",
    "Treat placebo and active-tablet misses identically.",
    "Ignore recent intercourse when assessing a gap."
  ],
  [
    "Assume rifampin cannot affect oral contraceptives.",
    "Apply one interaction rule to all hormonal methods.",
    "Stop rifampin independently without coordinating care."
  ],
  [
    "Assume estrogen cannot change lamotrigine exposure.",
    "Start and stop estrogen without a monitoring plan.",
    "Describe lamotrigine as increasing estrogen clearance in every patient."
  ],
  [
    "Require a serious adverse event before allowing a switch.",
    "Insist consent cannot change after initiation.",
    "Ignore preferences when pregnancy protection is adequate."
  ],
  [
    "Accept agreement as proof that the schedule is understood.",
    "Provide only the brand name.",
    "Wait for a contraceptive failure before clarifying instructions."
  ],
  [
    "Stop the old method without reviewing timing or recent intercourse.",
    "Use one universal transition rule for every method.",
    "Assume every new method works immediately at every cycle point."
  ],
  [
    "Skip the pill and wait for tomorrow.",
    "Use the drospirenone rule and omit backup.",
    "Take a seven-day hormone-free break."
  ],
  [
    "Apply the norethindrone three-hour rule automatically.",
    "Discard the whole pack and wait for menses.",
    "Take all remaining active pills together."
  ],
  [
    "Take the scheduled placebo break to reset the cycle.",
    "Stop all pills until the next period.",
    "Resume without backup because it is late in the pack."
  ],
  [
    "Reinject without asking about pregnancy or intercourse.",
    "Assume protection is guaranteed until 20 weeks.",
    "Permanently deny DMPA after any late visit."
  ],
  [
    "Prescribe it because every POP is suitable in every endocrine condition.",
    "Use a normal potassium today to override the contraindication.",
    "Treat its antimineralocorticoid action as protection from hyperkalemia."
  ],
  [
    "Prescribe it because BMI changes effectiveness only, never safety labeling.",
    "Use two patches to compensate.",
    "Treat a normal blood pressure as canceling the BMI restriction."
  ],
  [
    "Require replacement solely because an older table says three years.",
    "Guarantee indefinite protection after year five.",
    "Refuse removal until five years have passed."
  ],
  [
    "Rely on the first dose for every act that day.",
    "Take Phexxi orally before the second act.",
    "Use it only after intercourse as emergency contraception."
  ],
  [
    "Remove it immediately because gel acts instantly.",
    "Keep it in for a full week.",
    "Assume the time limit depends only on discomfort."
  ],
  [
    "Assume amenorrhea guarantees contraception at any postpartum age.",
    "Use breastfeeding frequency as the only criterion.",
    "Wait for a pregnancy before discussing alternatives."
  ],
  ["Use no backup because each removal was under two hours.", "Apply the NuvaRing three-hour continuous rule.", "Wait seven days before reinserting."],
  ["Reuse a single NuvaRing for 13 cycles.", "Leave Annovera continuously in place for a year.", "Discard Annovera after its first scheduled seven-day break."],
  ["Allow room-temperature storage until any later manufacturer expiration.", "Freeze it after dispensing to extend its dating.", "Use Annovera storage instructions for every ring."],
  ["Treat all estrogen-free methods as category 1.", "Use DMPA automatically because only estrogen can affect thrombosis risk.", "Use an estrogen ring to avoid oral first-pass metabolism."],
  ["Switch automatically to a POP because it has no estrogen.", "Use an LNG IUD because local delivery removes every breast cancer concern.", "Assume only high-dose combined pills are restricted."],
  ["Prescribe because both numbers must exceed the thresholds.", "Prescribe because systolic must be strictly greater than 160.", "Use an estrogen patch because hypertension applies only to pills."],
  ["Use backup only after the first-ever tirzepatide dose.", "Double the contraceptive pill dose for one day.", "Apply the same rule to an IUD because all hormones are absorbed orally."],
  ["Assume every estrogen dose is permitted with Mavyret.", "Treat the interaction as loss of contraceptive efficacy and double the pill.", "State that the current U.S. label prohibits every amount of ethinyl estradiol."],
  ["Assume a pill alone always meets the label plan.", "Stop CellCept without contacting the transplant team.", "Stop pregnancy prevention immediately after the final CellCept dose."],
  ["Apply the eight-year duration to every indication.", "State that all LNG IUDs treat heavy bleeding for eight years.", "State that pregnancy protection always ends at year three."],
  ["Require a negative result before every IUD placement.", "Never screen an IUD candidate for STIs.", "Place an IUD even with known untreated gonorrhea."],
  ["Deny every option because 72 hours passed.", "Recommend waiting for the next period before offering EC.", "Guarantee LNG is equally effective throughout all five days."],
  ["Wait until the next menstrual cycle to repeat it.", "Assume the dose was fully absorbed and no action is needed.", "Replace the EC pill with vaginal Phexxi after intercourse."],
  ["Describe EC as FDA-approved for every LNG IUD.", "Substitute Skyla because every LNG dose has identical evidence.", "Claim CDC 2024 expressly recommends all LNG IUDs for EC."],
  ["Reattach without backup because fewer than 48 hours passed.", "Wait for the next scheduled change day without a patch.", "Tape the old patch down and extend its use for another week."],
  ["Use the arm because all contraceptive patches share every site.", "Place it on the breast for better absorption.", "Cut the patch to fit a smaller site."],
  ["Use petroleum jelly because all lubricants preserve latex.", "Use two latex condoms to offset the oil.", "Replace the condom with spermicide for HIV prevention."],
  ["Stop other contraception because twelve weeks guarantees success.", "Count twenty ejaculations instead of testing.", "Assume absence of pain proves the semen contains no sperm."],
  ["Remove it immediately after the last act even if six hours have not passed.", "Leave the same sponge in place for several days if comfortable.", "Wash and reuse the sponge after removal."],
  ["Prescribe estrogen because a short course erases every contraindication.", "Require removal even though the patient wants to continue.", "Promise that no treatment has contraindications."],
  ["Combine every option listed by CDC simultaneously.", "Ignore the combined pill because the implant is the main contraceptive.", "Double both doses to shorten treatment."],
  ["Give the next injection without review.", "Ignore the diagnosis because the method contains no estrogen.", "Increase the dose to suppress tumor growth."],
  ["Take the placebo week as usual and use no backup.", "Stop active pills until the next menstrual period.", "Apply the traditional POP two-day backup rule."],
  ["Use the combined-pill rule and omit redosing and backup.", "Stop pills for seven days.", "Use backup only until the next scheduled tablet."],
  ["Use only two days of backup because all POPs share one rule.", "Stop backup as soon as vomiting stops.", "Wait for the next placebo interval before resuming pills."],
  ["Rely on Oriahnn alone.", "Stop contraception as soon as bleeding decreases.", "Use no protection after the first dose."],
  ["Apply the indication to every hormonal product.", "Describe PMDD and PMS as identical diagnoses.", "Ignore estrogen contraindications when treating mood symptoms."],
  ["Confirm permanent cure from a single regular bleed.", "Use the combined pill to induce ovulation for pregnancy.", "Stop all metabolic follow-up because cycle control is sufficient."],
  ["Keep the same ring for another month.", "Treat 26 days of continuous wear as 26 days without hormones.", "Remove it and wait two weeks before replacement."],
  ["Take a one-week break and restart without pregnancy assessment or backup.", "Keep using the old ring until bleeding starts.", "Use backup for only two days after replacement."],
  ["Confirm ten years for all copper devices.", "Replace it monthly like a vaginal ring.", "Assume no removal deadline applies without hormones."],
  ["Substitute freely because copper devices are interchangeable.", "Use its three-year duration as proof of emergency efficacy.", "Assume all IUDs share one emergency indication."],
  ["Remove it now because every barrier works only during intercourse.", "Leave it in for a week without cleaning.", "Use the sponge's 30-hour maximum for every cap."],
  ["Confirm that every calendar app has the same authorization.", "Promise that a predicted low-risk day guarantees no pregnancy.", "Ignore fertile-day instructions if the app is downloaded."],
  ["Take four days off immediately whenever spotting occurs.", "Repeat four-day breaks every week.", "Double estrogen without assessing eligibility or other causes."],
  ["Skip monitoring because Yaz contains estrogen.", "Double spironolactone to improve contraception.", "Assume normal baseline potassium removes all follow-up needs."],
  ["Wait three months for adjustment.", "Take an extra pill.", "Reduce estrogen without evaluating the symptoms."],
  ["Skip all four because none contains hormones.", "Treat all four as full-dose combined tablets.", "Use the iron tablets alone for contraception."],
  ["They are all placebo.", "They contain only levonorgestrel.", "The entire pack lasts only 28 days."],
  ["Continue the same pack without backup because less than 48 hours elapsed.", "Stop tablets for seven days before restarting.", "Take three tablets immediately and omit backup."],
  ["Guarantee prevention of every cancer.", "Ignore an existing contraindication because of this association.", "Claim observational studies eliminate all confounding."],
  ["Confirm 24 months for every dose.", "Continue indefinitely if bleeding stops.", "Assume bone loss cannot occur."],
];

export const contraceptivePharmacotherapyQuestionBank = concepts.map((concept, index) => {
  const answer = index % 4;
  const choices = [...caseDistractors[index]];
  choices.splice(answer, 0, concept.caseAnswer);
  return {
    id: `contraception-case-${index + 1}`,
    conceptGroup: concept.name,
    lesson: concept.lesson,
    question: `${concept.caseStem} Which response is best?`,
    choices, answer, explanation: concept.why,
    reviewHref: `#${concept.lesson}`,
    difficulty: "application",
  };
});
