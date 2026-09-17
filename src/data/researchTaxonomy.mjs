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
export const availableResearchTypes = (items) => [
  "All",
  ...Object.keys(researchTypeGroups).filter(group => items.some(item => matchesResearchType(item, group))),
];
