function normalize(value = "") {
  return String(value).normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}
function nearWord(query, word) {
  if (word === query || (query.length >= 3 && word.startsWith(query))) return true;
  const allowance = query.length >= 7 ? 2 : query.length >= 4 ? 1 : 0;
  if (!allowance || Math.abs(query.length - word.length) > allowance) return false;
  let row = Array.from({ length: word.length + 1 }, (_, i) => i);
  for (let i = 1; i <= query.length; i++) {
    const next = [i];
    for (let j = 1; j <= word.length; j++) next[j] = Math.min(next[j - 1] + 1, row[j] + 1, row[j - 1] + (query[i - 1] === word[j - 1] ? 0 : 1));
    row = next;
  }
  return row[word.length] <= allowance;
}
function relevance(entry, query) {
  const title = normalize(entry.title), topics = normalize((entry.topics || []).join(" "));
  const context = normalize(`${entry.subject || ""} ${entry.description || ""}`);
  const titleWords = title.split(" "), topicWords = topics.split(" "), contextWords = context.split(" "), tokens = query.split(" ");
  const exact = (token, words) => words.some(word => word === token || (token.length >= 3 && word.startsWith(token)));
  if (title === query) return 100000;
  if (title.startsWith(query + " ")) return 90000;
  if (title.includes(query)) return 80000;
  if (tokens.every(token => exact(token, titleWords))) return 75000;
  if (tokens.every(token => exact(token, [...titleWords, ...topicWords]))) return 65000;
  if (tokens.every(token => titleWords.some(word => nearWord(token, word)))) return 55000;
  if (!tokens.every(token => exact(token, [...titleWords, ...topicWords, ...contextWords]) || [...titleWords, ...topicWords].some(word => nearWord(token, word)))) return 0;
  return 40000 + tokens.reduce((score, token) => score + (exact(token, titleWords) ? 100 : exact(token, topicWords) ? 30 : 1), 0);
}
const alphabetically = (a, b) => a.title.localeCompare(b.title, "en", { sensitivity: "base" }) || a.href.localeCompare(b.href);
const timestamp = entry => Date.parse(entry.updatedAt || "") || 0;
export function orderLearningEntries(entries, { query = "", subject = "", type = "" } = {}) {
  const normalizedQuery = normalize(query);
  const filtered = entries.filter(entry => (!subject || entry.subject === subject) && (!type || entry.type === type));
  if (!normalizedQuery) return [...filtered].sort((a, b) => timestamp(b) - timestamp(a) || (Date.parse(b.createdAt || "") || 0) - (Date.parse(a.createdAt || "") || 0) || alphabetically(a, b));
  return filtered.map(entry => ({ entry, score: relevance(entry, normalizedQuery) })).filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score || alphabetically(a.entry, b.entry)).map(result => result.entry);
}
