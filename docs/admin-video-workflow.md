# Private video hierarchy and workflow

The admin API returns the owner-requested plan from the server-only organization module. No roster or plan is imported into public client bundles. Existing page/API membership checks remain authoritative.

The department canvas retains organization containment and all unrelated departments. Its video roles use the updated names, and the two visual artists are nested below the Visual Production Supervisor. The expandable **Video hierarchy & workflow** view displays the explicit reporting chain across department boundaries: NaS Research Director → Institute Lead → Video Director, followed by the seven production responsibilities and the two visual creators. `reportsToId` is an organizational relation; `parentId` on an execution observation remains its source-reported runtime launch relation.

All twelve plan profiles request `gpt-6.1-sol`. Direction, supervision, Research and Final QA request high reasoning. Script, both visual creators, Narration, Editing and Publishing request medium. `plannedProfile.effective` is always false. Existing registry configuration, actual model evidence, and task observations remain separate. The library artist's 24/7 schedule is requested but not activated.

The workflow expresses dependencies, not completed gates: Research science brief → Script → Visual Production and Narration → Editing → Final QA → owner-authorized Publishing. Technical fixtures and operator operations remain task jobs, never extra staff or role definitions. Historical records are retained.

## Library production cadence

The agreed library cadence is one environment per day. The Scene Animation Artist works one day behind the environment creator, using an explicitly reviewed, version-pinned environment. Library preparation is a separate workstream from the per-video Script dependency above. Elapsed time or the next calendar day never promotes an unfinished or unreviewed environment; animation waits until the required reviewed version is available. This documents the workflow only and installs no schedule or automatic gate transition.

An observed environment-creation task belongs only to the Asset and Scene Library Artist assignment. It does not establish activity for any other role or activate 24/7 transport. Continuous dashboard reporting requires the owner's sanitized, timestamped execution observations; this documentation is not a heartbeat. The existing environment owner remains its sole writer.

## Existing task-event integration

No new adapter is required for the current observation shape. `scripts/report-task-event.py --event-file <approved-private-store> --stdin` already preserves an explicitly supplied `observedAt`, `roleId`, `executionId`, source state and provenance. The existing collector's `--task-events` input forwards that record to the existing private backend interface. This command describes the existing interface, not authorization to write a live store. Do not use the CLI's convenience flags for a dated third-party observation: that mode stamps the time of invocation.

Use one stable `task:` identity with `source: video`, `roleId: role:video:asset-library`, the actual turn in `executionId`, and source-derived `observedAt`. Include only verified parent, epoch, heartbeat or origin-event identities; absence is preferable to invention. An observer's description of the work may be used for `task`, but must not be represented as a verified native task title. Selected creation settings belong in `requestedModel` with provenance and the corresponding execution identity; they do not justify `runtimeModel`. An admitted/actual model needs independent execution-bound evidence. Do not duplicate the task across supervisor or other role cards.

The bounded `scripts/test-video-task-integration.cjs` acceptance exercises the actual stdin CLI, private isolated event store, collector and tree projection. It verifies a single directly assigned execution, unchanged unrelated website records, idempotent replay with the original timestamp, expiry after 90 seconds despite fresh publisher receipts, transport interruption, unknown state on input failure, and synthetic terminal transitions. Stale active counts remain unavailable, not a claim of zero workers. Optional explicit sanitized fixtures are tested in isolated stores only; real task records are kept outside the repository and public bundles. No network request, live backend write, scheduler or ongoing observation producer is installed by the test.

## Activation boundary

Deploying this website change requires separate owner authorization. The display needs no database migration, publisher restart, secret, permission, service or library access. Retain the existing private backend and publisher freshness rules.

Running the requested organization is a separate runtime-owner task. The two new display identities are `role:video:asset-library` and `role:video:scene-animation`; they are not assertions of admitted Core registry identities. Preserve legacy mappings for existing observations until the runtime owner reconciles exact registry IDs. A real producer must provide task/execution identity, role assignment, source runtime, own observation/heartbeat timestamps, state and provenance. Effective model/effort requires evidence tied to that execution. Never renew producer timestamps merely because the publisher polls. Use `kind:job` for fixtures and stage tasks; do not create employee or model-instance rows from stage names.

No scheduler, always-on host, automatic restart, new producer read access or asset-directory reader is installed here. The existing static video lifecycle contract remains unchanged and cannot describe a new paused/rendering state without an owner-reviewed contract update. Missing coverage stays unavailable or stale.

## Concurrent event-store acceptance

The store intentionally fails lock acquisition after two seconds. Under twelve simultaneous durable writers, a busy response is backpressure, not an acknowledged write or evidence of corruption. The concurrency acceptance caller retries only that exact error within a forty-second overall fixture budget, using the same observation and timestamp. Validation, capacity and I/O errors still fail immediately; exhausted retry budgets fail. Each writer reports its outcome explicitly, all children are reaped, and the test requires all 72 exact records plus valid concurrent snapshots. The separate held-lock/publisher-lease negative test still requires timeout while another owner holds the lock.

This corrects the test's former assumption that every concurrent call succeeds immediately. Production event-store code, two-second lock acquisition deadline, file checks, fsync/atomic replacement and publisher lease are unchanged. Real callers still receive a failure if a write is rejected and must handle it explicitly; this test-only change does not add production retry or claim guaranteed delivery.
