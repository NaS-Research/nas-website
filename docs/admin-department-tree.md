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

## Worker activity wording

Worker cards use Active, Idle and Blocked only for corresponding actual observations; completed, failed, waiting and offline states retain their meaning. A fresh transport alone never establishes Active or Idle. Missing worker activity says Activity unavailable instead of a false zero. Department summaries count observed agent/person workers separately from guarded process jobs; an explicitly observed idle or blocked worker can support a zero active-worker count. Worker cards show the current reported task, state and latest update time.

## Serialized event store and bounded retention

The producer writer and collector share `scripts/admin_activity_events.py`. A stable, owner-private advisory lock serializes read/merge/write operations across producers; atomic replacement and directory sync prevent partial JSON reads. Event IDs retain their place in the snapshot. Older or duplicate observations cannot replace newer ones. Corrupt, oversized, symlinked, hard-linked or non-private files fail closed. The publisher holds a separate lifetime lease so a second process cannot compete for the same source rows.

The snapshot allows 100 records and 48 KiB. Unresolved records (including stale/unknown/blocked work) are never evicted to make space. Up to 20 terminal records from the last seven days remain visible; older/excess terminal editions are saved in the sibling owner-private `*.archive/` directory before replacement. The archive has a 16 MiB budget and never deletes earlier editions automatically. At a capacity limit, writing fails without replacing the prior snapshot. A crash between archiving and replacement can leave a duplicate archived edition, but cannot remove the previous snapshot. Review capacity explicitly rather than silently dropping work.

`report-task-event.py --stdin` accepts one bounded allowlisted event object. Optional `kind` is agent, person or job. A model is forwarded only together with `modelProvenance`, such as an actual runtime response field. The same paid-usage contract above is forwarded with its provenance and receipt identity; this validates the supplied record, not an independent provider invoice. Unknown fields, transcript content, command arguments and secrets are not copied. Do not supply a fabricated model or receipt to fill a missing field.

The collector prioritizes explicit observations over fallback runner jobs, deduplicates a job against its own observed runner PID, and publishes omission counts and event-store health. A bounded payload cannot evict explicit observations. A failed read preserves cached observations as unknown without changing their original timestamps.

## Actual process producer and coverage boundary

`scripts/run-reported-job.py` wraps an already authorized subprocess under the approved external runner. It observes the real child start, a live-process poll (10 seconds by default), and the actual exit code. It emits a **job**, not an agent, and reports no model or cost. A process poll establishes only that this process exists. Interruption is unknown rather than successful completion; a killed producer eventually becomes stale. Telemetry failure after launch does not kill the authorized subprocess.

To observe a normal website build, invoke `npm run build:reported` in this repository through the required external runner, with `NAS_ACTIVITY_EVENT_FILE` pointing to the existing owner-private event JSON on the approved volume. This wraps the unchanged `npm run build`, including its storage prehook. It is opt-in: the Netlify build command and ordinary builds are unchanged. Do not point test fixtures at the production event file.

This Mac publisher runs every 20 seconds and the protected admin page polls every 10 seconds. An observation normally becomes visible within about 30 seconds plus request time; live-process elapsed observations can add the producer's 10-second poll interval. This is polling, not an immediate event subscription. It requires the private publisher process and Mac to remain available.

Official Codex hooks document SessionStart, SubagentStart/Stop, tool and stop events with shared model metadata. They require a trusted hook configuration in the runtime that launches the worker. `codex exec --json` and App Server expose streams for runs/connections they own. This delegated cloud task has no configured or accessible callback stream in this checkout. No global hooks, cloud subscription, new credentials or model runs were installed for this change. To add coverage, connect each real coordinator's supported events to the allowlisted writer (with genuine worker/parent/assignment identities), or an approved authenticated publisher in that runtime. A local build observer does not establish company-wide or cloud-worker coverage.

References: [Codex hooks](https://learn.chatgpt.com/docs/hooks), [non-interactive JSON events](https://learn.chatgpt.com/docs/non-interactive-mode), [App Server](https://learn.chatgpt.com/docs/app-server).
