export function getArticleCitation(item) {
  const year = item.dateISO?.slice(0, 4) || item.date?.slice(-4);
  return `${item.authors.join(", ")}${year ? ` (${year})` : ""}. ${item.title}. NaS Research. ${item.version ? `Version ${item.version}. ` : ""}${item.publicationStatus === "draft" ? "Draft. " : ""}https://nasresearch.bio/research/${item.slug}`;
}

export function getArticleReadTime(item) {
  if (item.readTime) return item.readTime;
  const introduction = item.introParagraphs || [item.summary || item.abstract || ""];
  const sections = (item.sections || []).flatMap(section => [
    section.title,
    ...(section.blocks || section.paragraphs || []),
  ]);
  const words = [...introduction, ...sections].join(" ").trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}
