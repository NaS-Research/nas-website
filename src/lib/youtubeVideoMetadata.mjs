const subjects = new Map([
  ["anatomy", "Anatomy"], ["human anatomy", "Anatomy"],
  ["physiology", "Physiology"], ["pharmacology", "Pharmacology"],
  ["therapeutics", "Therapeutics"], ["life sciences", "Life sciences"],
]);

export function videoSubject(description, title) {
  const explicit = description.match(/^(?:subject|category):\s*([^\r\n]+)/im)?.[1].trim().toLowerCase();
  if (subjects.has(explicit)) return subjects.get(explicit);
  // Title-based fallbacks are broad editorial labels, not YouTube categories.
  if (/\b(pharmacology|agonists?|antagonists?|receptors?|drug action)\b/i.test(title)) return "Pharmacology";
  if (/\b(opioids?|naloxone|treatment|therapeutics|therapy)\b/i.test(title)) return "Therapeutics";
  if (/\b(anatomy|chambers?|valves?|heart|lungs?|organs?|skeleton)\b/i.test(title)) return "Anatomy";
  if (/\b(physiology|homeostasis|blood flow|circulation)\b/i.test(title)) return "Physiology";
  return "Life sciences";
}

export function videoSummary(description) {
  const explicit = description.match(/^summary:\s*([^\r\n]+)/im)?.[1];
  const openingContent = description.replace(/\r\n?/g, "\n").split(/^(?:chapters|sources|references|you will learn)\s*:?$/im)[0];
  const paragraphs = openingContent.split(/\n\s*\n/);
  const opening = explicit || paragraphs.map(paragraph => paragraph.split("\n")
    .filter(line => !/^(?:subject|category):|^https?:\/\/|^#|^\s*\d{1,2}:\d{2}|^(?:chapters|sources|references|you will learn)\s*:?$/i.test(line.trim()))
    .join(" ").trim()).find(Boolean) || "";
  const text = opening.replace(/\s+/g, " ").trim();
  if (text.length <= 220) return text;
  const sentences = [...new Intl.Segmenter("en", { granularity: "sentence" }).segment(text)];
  let result = "";
  for (const { segment } of sentences) {
    const next = (result + segment).trimEnd();
    if (next.length > 220) break;
    result += segment;
  }
  if (result.trim()) return result.trim();
  const cut = text.slice(0, 217);
  return cut.slice(0, cut.lastIndexOf(" ") > 0 ? cut.lastIndexOf(" ") : cut.length).trimEnd() + "…";
}
