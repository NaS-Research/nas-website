# Private department and activity tree

The admin page retains the normal NaS header, navigation and black/gold palette. Compact cards and elbow branches follow the supplied agent-tree reference. Departments expand inside the tree; both Learn content and Video belong to NaS Institute by the owner's explicit direction. The registry contains no employee or agent roster. Unassigned activity stays unassigned until a verified team/department ID is supplied.

## Authorization and privacy

The existing server session and database admin membership protect both /account/admin and /api/admin/activity. Organization metadata is server-only and returned only after the API's authorization checks. Activity remains in admin-only snapshots, never a public JSON export or client fixture. No credentials, roles or database grants are changed by this update.

## Camera and interaction

Zoom/pan initializes once after the first real layout. Expand/collapse, selection, live refresh and resize do not reset it. There is no Fit control. Pointer dragging pans; Control/Command+wheel zooms at the cursor. Clicking/focusing the canvas also enables ordinary wheel zoom; Escape or leaving focus releases it. Unfocused ordinary wheel events keep normal page scrolling. Keyboard arrows pan and +/- zoom. Limits are 35–250%.

## Reporting and explicit task events

The existing 20-second status reporter and 10-second protected API polling remain. Shared-runner process observations are jobs, not invented agents or employees. Process ancestry is kept separate from organizational membership.

scripts/report-task-event.py can emit a producer's own observed running, waiting, needs_you, done, failed or unknown phase into a private file under the approved external workspace. The reporter's optional --task-events argument merges that file into the existing three-source status stream. It allowlists fields, requires owner-only file permissions, rejects invalid/future observations and never reads conversation internals. A missing/corrupt file retains the last task as unknown. Active task observations older than 90 seconds appear offline even if the reporter itself is healthy; publishing an old file does not renew a worker's observation time. Explicit terminal events are retained. Task events must be updated by their real producer; do not manufacture a heartbeat or completion from process disappearance.

The current implementation task is an explicitly reporting producer. This is not automatic visibility of every Codex/cloud thread. General cloud-thread start/progress/spawn streams still require a documented runtime hook/API or producer integration. No such global stream is configured. Parent IDs, models and company assignments remain unreported unless the producer has genuine evidence. The source categories website/research/video are transport categories, not company departments. In particular, the combined research stream is not assigned wholesale to Institute Learn.

## Paid usage only

Unqualified legacy costUsd fields and subscription allocations are ignored. Optional paidUsage requires:

- kind: actual or estimate; billingType: api or metered.
- Positive finite amountUsd; provider; service; provenance; recordId; asOf timestamp.
- Estimates additionally require a basis.
- scope: exclusive is required for inclusion in aggregate totals. Duplicate provider/kind/recordId receipts are counted once; unconfirmed/inclusive scope is not summed.

Per-card paid estimates are labeled Est. Actual paid totals and paid estimates are separate and show only when records exist. Missing cost is not zero. Model subscription access is not assigned an API-equivalent charge. No provider billing API, ElevenLabs account, paid request or extra credential is connected by this UI change; cost providers must report real usage or a sourced estimate through the approved producer contract.

## Checks

Run scripts/test-department-tree.mjs, test-agent-tree.cjs, test-agent-viewport.cjs, test-agent-paid-usage.mjs, test-admin-activity.cjs, test-activity-console.cjs, test-admin-collector.py and test-task-events.py through the required external runner. The viewport test runs the component's actual handlers/hooks through repeated toggles and refreshes, tests cursor-anchor preservation and ordinary page wheel pass-through. Authorization checks cover no session, ordinary member, trusted membership, editable-profile role rejection and no organization metadata in denied responses. The page itself is checked for anonymous redirect, ordinary-member denial and verified-admin rendering. Polling checks cover initial loading, source failure with retained last report, authorization failure clearing private data, retry recovery and cleanup.

All local review assets are outside app/public routes. Production contains only canonical organization data and reported activity; no example workers.
