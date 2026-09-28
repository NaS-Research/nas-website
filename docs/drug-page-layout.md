# Drug-page organization

All 300 library routes use the shared detail template. The 13 authored guides
have an overview/mechanism, safety, practice, and sources reading order.
The other 287 routes use grouped, collapsible official-label text. Boxed warnings
open by default; all other safety topics remain directly accessible. No clinical
study-guide statements were rewritten for this layout change.

The API preserves paragraph boundaries rather than collapsing all whitespace.
The reader inserts additional reading breaks at sentence boundaries for flat API
records; it does not summarize or remove label wording. Product identity, date,
and the exact source set ID accompany the selected label, with other DailyMed
records beneath it. Dosage and administration is now included when supplied.
Uncategorized drugs point readers to their product label rather than displaying
“Miscellaneous agents” as a therapeutic classification.

Validation: every generated drug route checked for its corresponding shared
layout; drug-data field coverage and source-text preservation tests; representative
browser checks for authored and API-loaded pages. A successful static build does
not guarantee that an external source will return a label for every generic name.
