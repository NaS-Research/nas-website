# Herpes Labialis clinical content review

Reviewed 2026-09-26. Status: verified for this module; not independent pharmacist certification.

## Scope and evidence

RxPrep 2023 chapter39 cold-sore section and treatment table, printed549/PDF557, were read as text and a rendered page. All eight NaS lessons, embedded checks, eight diagram definitions and their renderer, and all114 assessment stems, choices, keys and explanations were reviewed. The chronological source and correction record is `herpes-labialis-review.json`. Review of the related HSV/VZV pharmacology module as a whole remains part of the wider audit; its shared cold-sore dose statements were checked for consistency.

## Corrections and expansion

- Corrected the book's cream/ointment conflation: acyclovir cream is for external facial/lip lesions and excludes genital use. Added product-specific ages, schedules, application, allergy and reassessment instructions.
- Reconciled bland-barrier and sunscreen advice with acyclovir cream's restriction on other products over the treated area, including the diagram, embedded check and assessment choices.
- Expanded buccal acyclovir timing, upper-gum placement, orientation, milk-protein allergy and six-hour displacement/replacement instructions. The cited label is older; current product availability is not asserted.
- Added famciclovir as an adult episodic option and its distinct renal table, pediatric limit, allergy and interaction considerations. Added an original renal-selection case.
- Added the valacyclovir adult renal table and pediatric renal evidence boundary. Corrected a diagram that implied two doses for every renal band. Strengthened severe-rash discontinuation guidance.
- Clarified modest treatment benefits, uncertainty of natural-sunlight prevention and lysine evidence, and individualized suppression decisions rather than an arbitrary recurrence threshold.
- Made prodrome-through-complete-healing contact precautions explicit. AAD overview's scab endpoint differs from NHS guidance; WHO supports residual asymptomatic transmission risk.
- Clarified same-day eczema-herpeticum referral and periocular ophthalmology, without requiring fever or awaiting confirmatory testing.
- Replaced ambiguous assessment cases and improved mismatched explanations. Stable existing question IDs retained; two original cases added to the112-item bank.

## Sources

Exact URLs and dated reading scope are in the JSON journal and module references: current product-specific DailyMed labels for docosanol, acyclovir cream, penciclovir, valacyclovir and famciclovir; older Sitavig label/Instructions for Use; AAD treatment, overview and causes; WHO2025 HSV fact sheet; NHS2024 cold-sore guidance; PCDS2024 eczema herpeticum and NICE pediatric recommendations;2015 Cochrane prevention and2016 episodic antiviral systematic-review abstracts. Full systematic reviews are not claimed read. No specific suppressive regimen or quantitative pooled estimate was introduced from abstracts.

## Numerical and application checks

Valacyclovir adult renal bands independently checked: daily totals4g,2g,1g,0.5g, with twelve-hour spacing where two doses apply. Famciclovir single-dose bands checked:1500,750,500,250mg; hemodialysis250mg after dialysis. CrCl45 selects750mg once. Penciclovir approximate5-versus4.5-day result equals0.5day; no cross-trial superiority claim inferred.

Targeted assessment audit passed114 questions without hard errors or source gaps. Production webpack build passed557/557 pages. All eight embedded checks returned expected Correct feedback. A randomized10-question practice attempt with shuffled choices returned expected feedback on every answer, including cream compatibility and pediatric/feeding cases. This interaction sample verifies application behavior, not a substitute for the full clinical item review.

Latest regimen diagram and expanded buccal content inspected in wide and narrow browser views; prior pass inspected famciclovir and supportive care. Narrow DOM reported300 CSS-pixel width despite requested390 override, with no document or figure horizontal overflow. Screenshots are not evidence of an exact390-pixel test. Floating sign-in/tools and mobile navigation overlap some scroll positions; content remains scroll-accessible. This shared layout limitation is not certified resolved by this content commit. Browser error log was empty; viewport override reset.

## Limits and disposition

Source administration images could not be retrieved through web screenshots, image URLs or direct download. The full textual Instructions for Use supports placement/orientation and replacement instructions; no source-image review is claimed. No source-book content or figures are committed. No deployment performed. Module clinical issues addressed in this review are closed; the full curriculum and chapter39 remain incomplete.
