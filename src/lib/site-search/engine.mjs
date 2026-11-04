// Public metadata only. No document bodies, member records, or generated answers.
export const MAX_QUERY_LENGTH = 160;
export const SEARCH_PROMPTS = ["Explore research", "Discover new releases", "Find a product", "Explore biological models", "Find a learning module"];
export const PROMPT_INTERVAL_MS = 2000;
export function normalizeSearch(value) {
  return String(value ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim().replace(/\s+/g, " ");
}
export function publicRecord(record) {
  return record && !record.noindex && !record.private && !record.unlisted && !record.draft && record.published !== false &&
    !/draft|private|unlisted|preview/i.test([record.publicationStatus, record.visibility, record.status].join(" "));
}
export function safeSearchHref(href) {
  return typeof href === "string" && /^\/(?:research(?:\/|$|\?)|learn(?:\/|$|#)|products(?:$|#)|about$|support$)/.test(href) &&
    !/[\\%]|\/\/|\.\.|(?:^|[/?#])(?:preview|studio|admin|account|api|auth|login|drafts?)(?:[/?#]|$)/i.test(href);
}
export function createSearchIndex(records) {
  const seen = new Set();
  return records.filter(record => publicRecord(record) && safeSearchHref(record.href) && record.title && !seen.has(record.href) && seen.add(record.href))
    .map(({href, title, category, description = "", keywords = []}) => ({
      href, title: String(title), category: String(category || "NaS"), description: String(description).slice(0, 360),
      titleText: normalizeSearch(title), categoryText: normalizeSearch(category),
      searchText: normalizeSearch([title, category, description, ...keywords].join(" ")),
    }));
}
const STOP = new Set(["the", "a", "an", "of", "for", "and", "in", "to", "about", "find", "show", "me", "nas"]);
export function searchPublicIndex(index, query, limit = 15) {
  const normalized = normalizeSearch(String(query ?? "").slice(0, MAX_QUERY_LENGTH));
  if (!normalized) return [];
  const tokens = [...new Set(normalized.split(" ").filter(token => !STOP.has(token)))].slice(0, 16);
  if (!tokens.length) return [];
  const matches = index.map(record => {
    const words = record.searchText.split(" ");
    const matched = tokens.filter(token => words.some(word => word === token || (token.length >= 3 && word.startsWith(token))));
    if (matched.length !== tokens.length) return null;
    const score = (record.titleText === normalized ? 1000 : 0) +
      (record.titleText.includes(normalized) ? 200 : 0) +
      tokens.reduce((sum, token) => sum + (record.titleText.split(" ").some(word => word.startsWith(token)) ? 30 : 0) +
        (record.categoryText.includes(token) ? 10 : 0), 0);
    return {record, score};
  }).filter(Boolean).sort((a, b) => b.score - a.score || a.record.title.localeCompare(b.record.title));
  return matches.slice(0, Math.max(1, Math.min(30, limit))).map(({record: {href, title, category, description}}) => ({href, title, category, description}));
}
