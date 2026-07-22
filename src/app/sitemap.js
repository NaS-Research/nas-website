import { researchItems } from "@/data/researchLibrary";

const baseUrl = "https://nasresearch.bio";

export default function sitemap() {
  const pages = [
    { path: "", lastModified: "2026-07-22", changeFrequency: "weekly", priority: 1 },
    { path: "/research", lastModified: "2026-07-21", changeFrequency: "weekly", priority: 0.9 },
    { path: "/research/programs", lastModified: "2026-07-20", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about", lastModified: "2026-07-20", changeFrequency: "monthly", priority: 0.7 },
    { path: "/support", lastModified: "2026-07-20", changeFrequency: "monthly", priority: 0.6 },
    { path: "/contact", lastModified: "2026-07-20", changeFrequency: "monthly", priority: 0.6 },
    { path: "/nicole", lastModified: "2026-07-20", changeFrequency: "monthly", priority: 0.6 },
    { path: "/sitemap", lastModified: "2026-07-22", changeFrequency: "monthly", priority: 0.4 },
    { path: "/legal/privacy", lastModified: "2026-07-21", changeFrequency: "yearly", priority: 0.3 },
    { path: "/legal/terms", lastModified: "2026-07-21", changeFrequency: "yearly", priority: 0.3 },
  ];

  const publicationPages = researchItems.map((item) => ({
    url: `${baseUrl}/research/${item.slug}`,
    lastModified: new Date(item.updatedDateISO || item.dateISO),
    changeFrequency: "monthly",
    priority: item.type === "White Paper" ? 0.9 : 0.7,
  }));

  return [
    ...pages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: new Date(page.lastModified),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...publicationPages,
  ];
}
