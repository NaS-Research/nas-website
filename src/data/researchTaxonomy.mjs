// The public library uses four formats and a reviewed subject vocabulary.
export const researchTypeGroups = {
  Publications: ["Publication", "Research Report", "Technical Report", "White Paper", "Model Card", "Model Cards"],
  "Research Notes": ["Research Note"],
  Releases: ["Release"],
  Essays: ["Institutional Essay"],
};
export const researchAreas = ["Drug Discovery", "Genomics", "Healthcare Operations", "Institutional", "Oncology", "Scientific Infrastructure"];
// Preserve links shared before the editorial taxonomy update.
export const researchTypeGroup = type => Object.keys(researchTypeGroups).find(group => group === type || researchTypeGroups[group].includes(type)) || type;
export const researchAreaGroup = area => area === "Community" ? "Institutional" : area;
export const matchesResearchType = (item, group) => group === "All" || researchTypeGroup(item.type) === researchTypeGroup(group);
export const getResearchPdfUrl = item => ["Publications", "Research Notes"].includes(researchTypeGroup(item.type)) ? item.pdfUrl || null : null;
export const availableResearchTypes = items => ["All", ...Object.keys(researchTypeGroups).filter(group => items.some(item => matchesResearchType(item, group)))];
export function validateResearchTaxonomy(items) {
  for (const item of items) {
    if (!Object.hasOwn(researchTypeGroups, item.type) || !researchAreas.includes(item.area)) throw new Error(`Unreviewed research classification: ${item.slug} (${item.type}, ${item.area})`);
  }
}

// Scientific publication formats use abstracts; essays and releases retain summaries.
export const getResearchOpeningLabel = item => item.summaryLabel ?? (["Publications", "Research Notes"].some(group => matchesResearchType(item, group)) ? "Abstract" : "Summary");
