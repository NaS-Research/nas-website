import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const releaseRoot = resolve(root, "public/research/nas-brca-002");
const expected = {
  "../papers/nas-brca-002-pam50-repeatability.pdf":
    "59a3df5cdf4a26ded93a6b535c981803e323e074fde9a719dd7ac17811b92029",
  "reproducibility.zip":
    "ccc0110bd6bec1a24c2186f96e9b28e23671904b9eb58bad110bb4898430d5ea",
  "manifest.json":
    "bfd7ff17a569562dc2ece4df2c63a362978d17b495a56aa1d804cfded500bf5c",
};

for (const [relativePath, expectedSha256] of Object.entries(expected)) {
  const bytes = readFileSync(resolve(releaseRoot, relativePath));
  const actualSha256 = createHash("sha256").update(bytes).digest("hex");
  assert.equal(actualSha256, expectedSha256, `${relativePath} hash changed`);
}

const manifest = JSON.parse(readFileSync(resolve(releaseRoot, "manifest.json"), "utf8"));
const receipt = JSON.parse(readFileSync(resolve(releaseRoot, "bundle-receipt.json"), "utf8"));
assert.equal(manifest.study_id, "NAS-BRCA-002");
assert.equal(manifest.artifact_version, "public-report-v1.0.0");
assert.equal(manifest.publication_authorized, true);
assert.equal(manifest.raw_or_controlled_data_included, false);
assert.equal(manifest.outcomes_included, false);
assert.equal(receipt.pdf_sha256, expected["../papers/nas-brca-002-pam50-repeatability.pdf"]);
assert.equal(receipt.zip_sha256, expected["reproducibility.zip"]);
assert.equal(receipt.manifest_sha256, expected["manifest.json"]);

const releaseSource = readFileSync(resolve(root, "src/data/brcaRepeatabilityRelease.js"), "utf8");
for (const requiredText of [
  "131 of 136",
  "83 of 87",
  "5 of 5",
  "13 of 16",
  "not independently reviewed or peer reviewed",
  "not for clinical use",
  "The datasets were not pooled",
]) {
  assert.match(releaseSource.toLowerCase(), new RegExp(requiredText.toLowerCase()));
}

const librarySource = readFileSync(resolve(root, "src/data/researchLibrary.js"), "utf8");
assert.match(librarySource, /export const researchItems = \[\s*brcaRepeatabilityRelease,/);

const projectsSource = readFileSync(resolve(root, "src/data/researchProjects.js"), "utf8");
assert.match(projectsSource, /status: "Public report v1\.0\.0 · Open review"/);
assert.match(projectsSource, /publicationUrl: "\/research\/pam50-technical-repeatability"/);
assert.doesNotMatch(projectsSource, /NAS-BRCA-002 is not a publication/);

console.log("NAS-BRCA-002 website release checks passed.");
