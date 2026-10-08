import { researchTopics } from "../data/researchTopics.mjs";

// Deterministic editorial matching: specific shared topics, then research area.
// New articles without topic metadata still receive category/date fallbacks.
export function getRelatedResearch(item, items, limit = 3) {
  const topicsFor = article => [...new Set(article.topics ?? researchTopics[article.slug] ?? [])];
  const topics = new Set(topicsFor(item));
  const frequency = new Map();
  for (const article of items) {
    for (const topic of topicsFor(article)) frequency.set(topic, (frequency.get(topic) ?? 0) + 1);
  }
  return items.filter(candidate => candidate.slug !== item.slug).map(candidate => ({
    candidate,
    score: topicsFor(candidate).reduce((score, topic) => score + (topics.has(topic) ? 6 / frequency.get(topic) : 0), 0)
      + (candidate.area === item.area ? 2 : 0),
  })).sort((a, b) => b.score - a.score
    || (b.candidate.dateISO ?? "").localeCompare(a.candidate.dateISO ?? "")
    || a.candidate.slug.localeCompare(b.candidate.slug))
    .slice(0, Math.max(0, limit)).map(({ candidate }) => candidate);
}
