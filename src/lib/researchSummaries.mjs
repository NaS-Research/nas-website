// Only send fields used by ResearchLibrary across the server/client boundary.
export function researchSummaries(items) {
  return items.map(({ slug, title, abstract, area, type, date, dateISO }) => ({
    slug, title, abstract, area, type, date, dateISO,
  }));
}
