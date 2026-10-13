import assert from "node:assert/strict";
import { completePageMetadata } from "../src/lib/pageMetadata.mjs";
import { researchSummaries } from "../src/lib/researchSummaries.mjs";

const page = completePageMetadata({
  title: "Research project | NaS Research",
  description: "A description of the actual study.",
  alternates: { canonical: "/research/projects/example" },
  openGraph: { type: "article" },
});
assert.equal(page.alternates.canonical, "https://nasresearch.bio/research/projects/example");
assert.equal(page.openGraph.url, page.alternates.canonical);
assert.equal(page.openGraph.description, page.description);
assert.equal(page.openGraph.type, "article");
assert.match(page.openGraph.images[0].url, /^https:\/\/nasresearch\.bio\//);
assert.equal(page.twitter.images[0].url, page.openGraph.images[0].url);

const explicit = completePageMetadata({
  title: "Draft", description: "A draft description.",
  alternates: { canonical: "/research/draft", languages: { en: "/research/draft" } },
  robots: { index: false, follow: false },
  authors: [{ name: "NaS Research" }],
  openGraph: { title: "Original study", images: [{ url: "/study.webp", alt: "Study diagram" }] },
  twitter: { card: "summary", images: ["/twitter.webp"] },
});
assert.deepEqual(explicit.robots, { index: false, follow: false });
assert.deepEqual(explicit.authors, [{ name: "NaS Research" }]);
assert.equal(explicit.alternates.languages.en, "/research/draft");
assert.equal(explicit.openGraph.title, "Original study");
assert.equal(explicit.openGraph.images[0].url, "/study.webp");
assert.equal(explicit.twitter.images[0], "/twitter.webp");
assert.equal(explicit.twitter.card, "summary");

const guide = completePageMetadata({
  title: "Study guide", description: "Guide description.",
  alternates: { canonical: "/learn/pharmacy/example" },
  openGraph: { images: [] }, twitter: { images: [] },
});
assert.ok(guide.openGraph.images.length && guide.twitter.images.length);

const article = Object.freeze({
  slug: "study", title: "Study", abstract: "Summary", area: "Genomics",
  type: "Publications", date: "October 1, 2026", dateISO: "2026-10-01",
  sections: [{ body: "Full article content must remain on the server." }],
  sources: [{ title: "A source" }], methods: "Methods", reviewState: "Review status",
});
const [summary] = researchSummaries([article]);
assert.deepEqual(Object.keys(summary).sort(), ["slug", "title", "abstract", "area", "type", "date", "dateISO"].sort());
for (const key of Object.keys(summary)) assert.equal(summary[key], article[key]);
assert.equal(summary.sections, undefined);
assert.equal(summary.sources, undefined);
assert.ok(article.sections.length);
console.log("PASS: complete social metadata, preserved exclusions/custom previews, and research-card payload contract.");
