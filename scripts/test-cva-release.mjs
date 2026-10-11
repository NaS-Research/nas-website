import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { cvaRelease } from "../src/data/cvaRelease.mjs";
import { cvaEvidence } from "../src/data/cvaEvidence.mjs";

const read = file => readFileSync(new URL(file, import.meta.url));
const csv = file => {
  const [header, ...rows] = read(file).toString().trim().split(/\r?\n/).map(line => line.split(","));
  return rows.map(row => Object.fromEntries(header.map((key, index) => [key, row[index]])));
};
const principalPath = "../public/research/nas-cva-001/tables/principal-estimates-2026-09.csv";
assert.equal(createHash("sha256").update(read(principalPath)).digest("hex"), cvaEvidence.scientific_source_bindings["analysis/2026-09/tables/principal_estimates.csv"]);
const principal = csv(principalPath);
assert.equal(principal.length, 8);
for (const row of principal) {
  const bound = cvaEvidence.principal.find(item => item.definition === row.definition && item.unit === row.unit);
  assert.ok(bound);
  for (const key of ["numerator", "denominator", "fraction", "ci_lower", "ci_upper"]) assert.equal(bound[key], Number(row[key]), key);
  assert.equal(bound.interval_model, row.interval_model);
}
const age = csv("../public/research/nas-cva-001/tables/age-filter-retention-2026-09.csv")
  .filter(row => row.mode === "recent_2y" && ["1","2","3"].includes(row.baseline_tier));
const totals = Object.create(null);
for (const row of age) totals[row.filtered_state] = (totals[row.filtered_state] || 0) + Number(row.baseline_units);
assert.equal(totals.cross_band_retained, 2296);
assert.equal(totals.insufficient_qualifying_organizations, 29459);
assert.equal(totals.adjacent_only_after_filter + totals.no_derived_disagreement_after_filter, 929);
assert.equal(Object.values(totals).reduce((a,b) => a+b,0),32684);
const history = cvaEvidence.history;
assert.equal(history.observed_first_resolutions,719);
assert.equal(452+267,history.observed_first_resolutions);
assert.equal(719-7,712);
const persistence = cvaRelease.sections.find(section => section.id === "persistence").resultsTable;
assert.equal(persistence.slice(1).reduce((total,row) => total+Number(row[1].replaceAll(",","")),0),history.baseline_cross_band_units);
const ids = cvaRelease.sections.map(section => section.id);
assert.equal(new Set(ids).size,ids.length);
assert.ok(!ids.includes("sources"));
assert.equal(cvaRelease.publicationStatus,"published");
assert.ok(/No independent human, expert, clinical, or journal peer review/.test(cvaRelease.publicationNote));
assert.equal(cvaRelease.sections.flatMap(section => [...(section.figures || []), ...(section.figureGallery || [])]).length,8);
for (const section of cvaRelease.sections) {
  assert.ok(section.paragraphs.length);
  for (const figure of [...(section.figures || []), ...(section.figureGallery || [])]) assert.ok(read("../public"+figure.src).length>0);
  for (const refs of Object.values(section.citationsByParagraph || {})) {
    for (const ref of refs) assert.ok(cvaRelease.sources[ref-1]);
  }
}
console.log("CVA: all eight exact estimates, source hash, age-filter decomposition, persistence totals, and native article references passed.");
