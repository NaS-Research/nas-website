import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { pharmacyModules } from "../src/data/pharmacyModules.js";
import { pharmacyLessons } from "../src/data/pharmacyLearning.js";
import { pharmacyCumulativeReview } from "../src/data/pharmacyCumulativeReview.js";

// Persist content fingerprints so unchanged entries keep their actual update date across builds.
const root = process.cwd(), output = path.join(root, "src/data/learningCatalogMetadata.json");
const previous = fs.existsSync(output) ? JSON.parse(fs.readFileSync(output, "utf8")) : {};
const sources = new Map();
for (const registry of ["src/data/pharmacyModules.js", "src/data/pharmacyLearning.js"]) {
  const text = fs.readFileSync(path.join(root, registry), "utf8");
  for (const match of text.matchAll(/import\s+\{[^}]+\}\s+from\s+["']([^"']+)["']/g)) {
    const specifier = match[1];
    const source = specifier.startsWith("@/") ? "src/" + specifier.slice(2) + ".js" : path.posix.join(path.posix.dirname(registry), specifier + ".js");
    if (!fs.existsSync(path.join(root, source))) continue;
    const slug = fs.readFileSync(path.join(root, source), "utf8").match(/slug:\s*["']([^"']+)["']/)?.[1];
    if (slug) sources.set(slug, source);
  }
}
const baselineModules = process.env.NAS_CATALOG_BASELINE_SNAPSHOT
  ? new Map(JSON.parse(fs.readFileSync(process.env.NAS_CATALOG_BASELINE_SNAPSHOT, "utf8")).modules.map(item => [item.slug, JSON.stringify(item)])) : null;
const historyRoot = process.env.NAS_CATALOG_HISTORY_REPO || root;
const historyRef = process.env.NAS_CATALOG_HISTORY_REF || "HEAD";
const now = new Date().toISOString(), result = {};
for (const [items, prefix, registry] of [[pharmacyModules, "/learn/pharmacy/modules/", "src/data/pharmacyModules.js"], [pharmacyLessons, "/learn/pharmacy/", "src/data/pharmacyLearning.js"]]) {
  for (const item of items) {
    const href = prefix + item.slug, source = sources.get(item.slug) || registry;
    const inlineModule = source === registry && registry === "src/data/pharmacyModules.js";
    const related = inlineModule ? [] : [source];
    if (source.includes("/modules/")) {
      const stem = path.basename(source, ".js");
      const calculationVisualSources = {
        pharmacyUnitConversions: "PharmacyUnitConversionVisual",
        pharmacyConcentrationsSpecificGravity: "PharmacyConcentrationVisual",
        pharmacyDilutionAlligation: "PharmacyDilutionVisual",
        pharmacyOsmolarityCalculations: "PharmacyOsmolarityVisual",
        pharmacyIsotonicityCalculations: "PharmacyIsotonicityVisual",
        pharmacyMolesMillimoles: "PharmacyMolesMillimolesVisual",
        pharmacyMilliequivalentCalculations: "PharmacyMilliequivalentVisual",
      };
      const visual = calculationVisualSources[stem] || `${stem[0].toUpperCase() + stem.slice(1)}Visual`;
      const files = [`src/data/questionBanks/${stem}.js`, `src/components/learn/${visual}.jsx`];
      if (calculationVisualSources[stem]) files.push("src/components/learn/PharmacyUnitConversionVisual.module.css");
      for (const file of files) if (fs.existsSync(path.join(root, file))) related.push(file);
    }
    const contentHash = createHash("sha256").update(JSON.stringify(item));
    for (const file of related) contentHash.update(fs.readFileSync(path.join(root, file)));
    const fingerprint = contentHash.digest("hex");
    const sameInlineContent = inlineModule && previous[href] && baselineModules?.get(item.slug) === JSON.stringify(item);
    let updatedAt = previous[href]?.fingerprint === fingerprint || sameInlineContent ? previous[href].updatedAt : now;
    if (previous[href]?.fingerprint !== fingerprint && !sameInlineContent) {
      try {
        if (!previous[href] && Object.keys(previous).length) throw new Error("New catalog content starts with this build");
        // Seed existing published entries from history. For later edits, use commit dates only for a clean checkout;
        // uncommitted or archived working candidates receive the time their changed content is built.
        if (previous[href]) {
          if (path.resolve(historyRoot) !== root) throw new Error("Working candidate differs from the history checkout");
          execFileSync("git", ["-C", root, "diff", "--quiet", historyRef, "--", ...related], { stdio: "ignore" });
        }
        updatedAt = execFileSync("git", ["-C", historyRoot, "log", "-1", "--format=%cI", historyRef, "--", ...related], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim() || now;
      } catch { /* Changed working content starts with this build; unchanged fingerprints retain their date. */ }
    }
    let createdAt = previous[href]?.createdAt;
    if (!createdAt && source !== registry) {
      try { createdAt = execFileSync("git", ["-C", historyRoot, "log", "-1", "--diff-filter=A", "--format=%cI", historyRef, "--", source], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim() || now; } catch { createdAt = now; }
    }
    result[href] = { updatedAt, ...(createdAt ? { createdAt } : {}), fingerprint };
  }
}
const reviewHref = "/learn/pharmacy/review";
const reviewFingerprint = createHash("sha256").update(JSON.stringify(pharmacyCumulativeReview))
  .update(fs.readFileSync(path.join(root, "src/app/learn/pharmacy/review/page.jsx")))
  .update(fs.readFileSync(path.join(root, "src/components/learn/PharmacyAssessment.jsx"))).digest("hex");
const reviewNow = new Date().toISOString();
result[reviewHref] = {
  updatedAt: previous[reviewHref]?.fingerprint === reviewFingerprint ? previous[reviewHref].updatedAt : reviewNow,
  createdAt: previous[reviewHref]?.createdAt || reviewNow,
  fingerprint: reviewFingerprint,
};
fs.writeFileSync(output, JSON.stringify(result, null, 2) + "\n");
console.log(`Learning catalog: ${Object.keys(result).length} content update dates retained or refreshed.`);
