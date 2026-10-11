# ClinVar Conflict Atlas: computational replay

This guide accompanies the proposed, unpublished research package. Final source and release manifests must be present before a complete replay is possible. The analysis describes public-record disagreement and does not independently classify variants or provide clinical guidance.

## Inputs and outputs

The source manifest identifies the exact dated VCV and RCV XML releases for September 2025, March 2026, and September 2026; their matched tabular exports; the current-snapshot GRCh38 VCF; the applicable schemas; and preserved definitions and policy references. Internal XML dates define observation dates. A matching filename alone is insufficient: every source must match the frozen byte size and SHA-256.

The public replay regenerates normalized SQLite tables, cohort and sensitivity tables, independent count checks, source and coordinate audits, historical analyses, and static figures. It preserves raw inputs and refuses to replace an existing normalized or analysis directory. Use a fresh replay root. The report and paper carry their own explicit review-status labels.

## External-drive setup

Keep the unpacked research package and the new replay root on an external drive. Set `STUDY_ROOT` to a new directory there. The placeholder below must be replaced with that external location. Run these commands from the unpacked package directory using the recorded Python version (3.12.14 for the current study environment).

```sh
export STUDY_ROOT="/path/on/external-drive/clinvar-conflict-atlas-replay"
mkdir -p "$STUDY_ROOT/tmp"
export TMPDIR="$STUDY_ROOT/tmp"
export SQLITE_TMPDIR="$STUDY_ROOT/tmp"
export MPLCONFIGDIR="$STUDY_ROOT/tmp/matplotlib"
export PIP_CACHE_DIR="$STUDY_ROOT/tmp/pip-cache"
export PYTHONDONTWRITEBYTECODE=1
python3 -m venv "$STUDY_ROOT/environment"
"$STUDY_ROOT/environment/bin/python" -m pip install --no-compile -r code/requirements.txt
"$STUDY_ROOT/environment/bin/python" code/replay.py \
  --root "$STUDY_ROOT" \
  --manifest source_manifest.json \
  --protocol-root portable/protocol \
  --download
```

The requirements file points to the complete pinned dependency lock. The separate initial-extraction environment record, when supplied for provenance, is not a second requirements set to install over that lock. Python, platform, and package versions used for the reviewed run must accompany the release.

A network connection is required when inputs are absent. To use previously acquired sources, place the frozen files at their manifest-relative paths within the new root and omit `--download`. To verify inputs without running normalization and analysis, add `--verify-only`. Verification may create directories and provenance records; it is not a filesystem read-only command.

New retrieval timestamps are recorded separately from the original freeze provenance. If a dated upstream archive has changed, checksum verification stops. Do not edit the manifest to make a changed file pass. Reproduction of the frozen study requires the preserved original bytes; analysis of changed bytes is a new, separately versioned run.

## Execution and evidence

The local `replay_journal.json` records each executed script, its hash, scientific arguments, command, exit status, timing and relative log path. Its command field contains local absolute paths. Keep this machine-specific journal with the local run; the distributed validation receipt summarizes completed scope and hashes without redistributing those private paths. Large XML inputs are schema-validated during streaming extraction. Unique indexes are built after streaming; duplicate identifiers or schema failures prevent finalization. Intermediate `.part` databases are not analysis inputs.

The order is source verification, matched XML normalization, snapshot consistency checks, full SCV identifier reconciliation, raw discrepancy-evidence regeneration and source-completeness sensitivity, cohort construction, independent recomputation, principal and exploratory tables, exported-table denominator reconciliation, vocabulary and matched-tabular checks, current-source case audit, coordinate validation, historical analysis, baseline associations, resolution-associated record changes, and figures. The 53 top-level replay stages use the preserved scientific definitions and dated protocol addenda. The portable protocol folders carry transport integrity manifests created after outcome inspection, original-freeze metadata, and an explicit edit list. These transport hashes verify distribution bytes; they are not new pre-outcome registrations and do not claim identity to every original artifact. The study verification run uses the complete original protocol freezes, while this command uses the portable transport editions. The conservative unresolved-source-counter historical restriction was added after outcome inspection and is disclosed separately in methods and limitations. `source_adjudications.json` binds the known version and presence differences to the exact source-manifest digest. `audit_reconciliation.py` regenerates the relevant XML excerpts from the frozen inputs, verifies their recorded hashes and normalized fields, and recomputes the local supplementation sensitivity. Unknown discrepancies stop replay.

`analysis_validation.json` records exported primary counts against the independent SQL result, tier partitions, distinct-variant exports, all eight principal estimates, stratified denominators, fixed-baseline age-filter totals, and conservation of fractional gene, condition and organization weights. A failed check stops replay. These checks concern reporting consistency; they do not establish clinical validity.

An exit code of zero is evidence of command completion, not a substitute for scientific review. Inspect the validation reports, discrepancy tables, source-case audit, estimator diagnostics, and figure captions. Some representation differences are exported for interpretation rather than automatically rejected. Every material discrepancy must receive a documented disposition before release readiness is asserted.

## Additional review-status interval outputs

The current-snapshot figure stage also calculates its clustered review-status intervals. To regenerate the two earlier snapshots' companion interval tables, run these two supplements after the main replay succeeds:

```sh
"$STUDY_ROOT/environment/bin/python" code/review_status_intervals.py "$STUDY_ROOT" 2025-09
"$STUDY_ROOT/environment/bin/python" code/review_status_intervals.py "$STUDY_ROOT" 2026-03
```

These are two additional commands, rather than top-level entries in the 53-stage replay journal. Retain their command, code hash, timestamps, logs and exit status separately. The final study validation receipt must identify whether all 53 stages and both supplements completed and whether their scientific exports agreed exactly. This guide alone makes no completion claim.

## Review steps after computation

The deterministic source sample requires explicit case-table inspection. Automated extraction comparisons must not be labeled human or expert clinical review. The review record must identify the actual reviewer type, the cases checked, exceptions, and sample shortfalls.

Every final figure and every paper page must be visually inspected. Confirm numerical agreement with the analysis tables, clear denominators, readable labels, accurate review-state wording, and the approved publication palette. Interval-censored survival bounds are conditional on the fitted support masses; they are not confidence intervals. Missing records and loss of eligibility are not resolution. Declared-versus-present source counters do not identify unseen assertions; unresolved numeric differences and proven paired-source absence are separately reported. No additional SCV identity or classification is inferred from a counter.

Independent reanalysis should verify the methods/results, normalized tables, code and software versions, source checksums, case-review records, estimator diagnostics, and agreement between figures and tables. Successful replay does not establish clinical validity or external peer review.
