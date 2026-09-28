# Seborrheic Dermatitis and Dandruff clinical review

Reviewed 2026-09-26. Verified for this module; not independent pharmacist certification.

## Scope

RxPrep 2023 chapter 39, printed page 550 / PDF page 558, dandruff narrative and shampoo table reviewed as text and rendered page. All nine existing lessons, embedded checks, nine diagram definitions and renderer, and every assessment stem, choice, key and rationale reviewed. The final bank contains 117 original questions. Detailed dated source evidence is in `seborrheic-dermatitis-review.json`. The rest of chapter 39 remains incomplete.

## Corrections and expansion

- Replaced the book's blanket shampoo timing with exact product instructions. Nizoral 1% has no labeled five-minute hold, uses every-three-to-four-day treatment, and requires earlier review for nonresponse. Ciclopirox uses three-minute contact and twice-weekly applications at least three days apart for four weeks. Its adult indication is distinguished from trial enrollment at age 16.
- Distinguished U.S. ketoconazole 2% shampoo's tinea-versicolor indication from clinician-directed off-label scalp seborrheic treatment. Separated ketoconazole cream, foam and gel schedules, age/immune-status limits, dispensing and flammability. Added Xolegel's washing and sunscreen/makeup intervals.
- Distinguished selenium sulfide rinse time for certain hair types from medicated hold time. Added coal tar sunburn and UV-combination warnings and exact OTC references.
- Added scalp-ringworm systemic-treatment and steroid-masking warnings, formulation-specific irritation and eye precautions, calcineurin-inhibitor boxed-warning context and infection/immune/UV precautions.
- Expanded roflumilast indication, mechanism limits, can inversion and upright storage, hepatic contraindications, metabolic interactions, pregnancy/labor/lactation precautions and adverse effects using current June 2026 labeling. All five label IFU illustrations inspected. No quantitative pigment efficacy claim inferred from a small pooled conference analysis.
- Clarified uncomplicated infant cradle-cap care versus referral signs, product exposures versus hairstyle assumptions, and maintenance as recurrence reduction rather than guaranteed prevention.
- Replaced the 112-item generic distractor generator with clinically discriminating explicit cases, retaining IDs and lesson anchors. Added five original formulation/application cases.
- Fixed visual-ID collisions that rendered an unrelated alopecia diagram in the differential lesson and the converse. Namespaced all nine seborrheic visual IDs; preserved lesson URLs.

## Source discrepancies

The book's daily/five-minute blanket advice differs from current product-specific directions. AAD's treatment page says ketoconazole gel twice weekly, while Xolegel prescribing information specifies once daily for two weeks; labeling governs. AAD's ciclopirox age description differs from the cited generic label's adult indication and trial-age wording. The STRATUM pigment conference abstract describes small pooled outcomes across treatment groups; these are not a drug-specific pigment response rate. The CDC ringworm page's unrelated OTC list includes Xolegel, contrary to its prescription seborrheic indication; that list was not adopted.

## Numerical and application validation

Monday/Thursday ciclopirox dosing yields intervals of three and four days. Label amounts 5 mL, up to 10 mL for long hair, checked. Xolegel applied at 7:00 AM permits sunscreen no earlier than 7:20 AM and washing no earlier than 10:00 AM. Roflumilast label's adjusted treatment difference must not be confused with raw percentage subtraction; no efficacy percentages were introduced.

Module assessment audit passed 117 items without hard errors, source gaps or thin lessons. Production webpack build passed 557 pages; whitespace checks passed. All nine embedded checks and a ten-question randomized practice attempt produced the expected keys and rationales, with shuffled practice choices. This UI sample supplements the full clinical item review. Final rebuilt DOM confirms added gel instructions and the 117-item bank.

Desktop review at 1440x1000 confirmed section navigation in both directions, fixed contents rail and correct active highlight. Both seborrheic and alopecia routes show only their nine intended diagrams. Mobile review at 390x844 confirmed no document or figure horizontal overflow and legible heading/body wrapping. No browser error logs on final check; viewport override reset.

## Limits

Floating shared navigation/save/tools can overlap content at some mobile scroll positions; content remains scroll-accessible. This pre-existing shared layout limitation is not certified resolved by this clinical commit. The reciprocal alopecia visual check does not certify its clinical content. No book content, proprietary figure or private source file is included in version control. No deployment performed. No unresolved material clinical issue remains within the reviewed module; the comprehensive curriculum audit continues.
