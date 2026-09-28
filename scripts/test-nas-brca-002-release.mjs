import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const releaseRoot = resolve(root, "public/research/nas-brca-002");
const expected = {
  "../papers/nas-brca-002-pam50-repeatability-v1.0.1.pdf":
    "e8b089997bb55a2baa8a56efe3c963d6aa013d8355bdf05a851098e5fa8b33d7",
  "reproducibility-v1.0.1.zip":
    "3251a2b5f509eb23a0d429d9ee819a9410d59e932075b5bdb353ee6966d9ac53",
  "manifest.json":
    "c2fed85a830144d7f270e52d2485df44f56dd241a056beba10986637f4bbe91f",
};

for (const [relativePath, expectedSha256] of Object.entries(expected)) {
  const bytes = readFileSync(resolve(releaseRoot, relativePath));
  const actualSha256 = createHash("sha256").update(bytes).digest("hex");
  assert.equal(actualSha256, expectedSha256, `${relativePath} hash changed`);
}

const manifest = JSON.parse(readFileSync(resolve(releaseRoot, "manifest.json"), "utf8"));
const receipt = JSON.parse(readFileSync(resolve(releaseRoot, "bundle-receipt.json"), "utf8"));
assert.equal(manifest.study_id, "NAS-BRCA-002");
assert.equal(manifest.artifact_version, "public-report-v1.0.1");
assert.equal(manifest.publication_authorized, true);
assert.equal(manifest.raw_or_controlled_data_included, false);
assert.equal(manifest.outcomes_included, false);
assert.equal(receipt.pdf_sha256, expected["../papers/nas-brca-002-pam50-repeatability-v1.0.1.pdf"]);
assert.equal(receipt.zip_sha256, expected["reproducibility-v1.0.1.zip"]);
assert.equal(receipt.manifest_sha256, expected["manifest.json"]);

const releaseSource = readFileSync(resolve(root, "src/data/brcaRepeatabilityRelease.js"), "utf8");
for (const requiredText of [
  "131 of 136",
  "83 of 87",
  "5 of 5",
  "13 of 16",
  "The datasets were not pooled",
]) {
  assert.match(releaseSource.toLowerCase(), new RegExp(requiredText.toLowerCase()));
}
const artworkSource = readFileSync(resolve(root, "src/data/publicationArtwork.js"), "utf8");
assert.match(artworkSource, /src: "\/research\/nas-brca-002\/pam50-method-v2\.webp"/);
assert.match(artworkSource, /heroSrc: "\/research\/nas-brca-002\/pam50-method-v2\.webp"/);

const artworkComponent = readFileSync(resolve(root, "src/components/research/PublicationArtwork.jsx"), "utf8");
assert.match(artworkComponent, /hero \? \(art\.heroSrc \?\? art\.src\) : art\.src/);

for (const filename of ["pam50-cover-v2.webp", "pam50-method-v2.webp"]) {
  const bytes = readFileSync(resolve(releaseRoot, filename));
  assert.ok(bytes.length > 100_000, `${filename} is unexpectedly small`);
}

const artworkProvenance = readFileSync(resolve(releaseRoot, "pam50-artwork-v1.txt"), "utf8");
assert.match(artworkProvenance, /microscopy-informed biological illustrations/);
assert.match(artworkProvenance, /not patient tissue or microscopy data/);

const librarySource = readFileSync(resolve(root, "src/data/researchLibrary.js"), "utf8");
assert.match(librarySource, /export const researchItems = \[[\s\S]*?\bbrcaRepeatabilityRelease,/);

const projectsSource = readFileSync(resolve(root, "src/data/researchProjects.js"), "utf8");
assert.match(projectsSource, /status: "Published"/);
assert.match(projectsSource, /publicationUrl: "\/research\/pam50-technical-repeatability"/);
assert.doesNotMatch(projectsSource, /NAS-BRCA-002 is not a publication/);
for (const publicSource of [releaseSource, projectsSource]) {
  assert.doesNotMatch(publicSource, /AI-assisted|AI assistance|internally reviewed|peer review/i);
  assert.doesNotMatch(publicSource, /open review|public computational report/i);
}

console.log("NAS-BRCA-002 website release checks passed.");
