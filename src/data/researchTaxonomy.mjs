// Publication format and scientific area are separate classifications.
export const researchTypeGroups = {
  Publications: ["Publication", "Research Report", "Technical Report", "White Paper"],
  "Model Cards": ["Model Card"],
  "Research Notes": ["Research Note"],
  Releases: ["Release"],
  Essays: ["Institutional Essay"],
};
export const matchesResearchType = (item, group) =>
  group === "All" || Boolean(researchTypeGroups[group]?.includes(item.type));
// Announcements and essays are web articles, even when they are citable.
// A research format may offer a PDF only when an actual paper is available.
export const getResearchPdfUrl = (item) =>
  ["Publications", "Research Notes", "Model Cards"].some(group => matchesResearchType(item, group))
    ? item.pdfUrl || null
    : null;
export const availableResearchTypes = (items) => [
  "All",
  ...Object.keys(researchTypeGroups).filter(group => items.some(item => matchesResearchType(item, group))),
];
