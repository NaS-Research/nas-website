import { researchItems } from "@/data/researchLibrary";
import { researchProjects } from "@/data/researchProjects";
import { pharmacyLessons } from "@/data/pharmacyLearning";
import { featuredDrugs } from "@/data/drugLibrary";

const baseUrl = "https://nasresearch.bio";

export default function sitemap() {
  const pages = [
    { path: "", lastModified: "2026-07-22", changeFrequency: "weekly", priority: 1 },
    { path: "/research", lastModified: "2026-07-21", changeFrequency: "weekly", priority: 0.9 },
    { path: "/research/programs", lastModified: "2026-07-20", changeFrequency: "monthly", priority: 0.8 },
    { path: "/learn", lastModified: "2026-08-24", changeFrequency: "weekly", priority: 0.8 },
    { path: "/learn/pharmacy", lastModified: "2026-08-24", changeFrequency: "weekly", priority: 0.85 },
    { path: "/learn/pharmacy/atlas", lastModified: "2026-08-24", changeFrequency: "weekly", priority: 0.85 },
    { path: "/learn/pharmacy/drugs", lastModified: "2026-08-24", changeFrequency: "weekly", priority: 0.85 },
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

  const projectPages = researchProjects.map((project) => ({
    url: `${baseUrl}/research/projects/${project.slug}`,
    lastModified: new Date(project.updatedDateISO),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const learningPages = pharmacyLessons.map((lesson) => ({
    url: `${baseUrl}/learn/pharmacy/${lesson.slug}`,
    lastModified: new Date(lesson.reviewedDateISO),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const drugPages = featuredDrugs.map((drug) => ({
    url: `${baseUrl}/learn/pharmacy/drugs/${drug.slug}`,
    lastModified: new Date("2026-08-24"),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [
    ...pages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: new Date(page.lastModified),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...projectPages,
    ...publicationPages,
    ...learningPages,
    ...drugPages,
  ];
}
