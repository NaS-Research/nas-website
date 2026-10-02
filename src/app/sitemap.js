import { researchItems } from "@/data/researchLibrary";
import { researchProjects } from "@/data/researchProjects";
import { pharmacyLessons } from "@/data/pharmacyLearning";
import { pharmacyModules } from "@/data/pharmacyModules";
import { coreDrugs } from "@/data/drugLibrary";

const baseUrl = "https://nasresearch.bio";

export default function sitemap() {
  const pages = [
    { path: "/workspace", changeFrequency: "monthly", priority: 0.9 },
    { path: "/research/areas", changeFrequency: "monthly", priority: 0.8 },
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/research", changeFrequency: "weekly", priority: 0.9 },
    { path: "/products", changeFrequency: "monthly", priority: 0.8 },
    { path: "/learn/library", changeFrequency: "weekly", priority: 0.85 },
    { path: "/learn", changeFrequency: "weekly", priority: 0.8 },
    { path: "/learn/pharmacy/atlas", changeFrequency: "weekly", priority: 0.85 },
    { path: "/learn/pharmacy/drugs", changeFrequency: "weekly", priority: 0.85 },
    { path: "/learn/pharmacy/review", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/support", changeFrequency: "monthly", priority: 0.6 },
    { path: "/sitemap", changeFrequency: "monthly", priority: 0.4 },
    { path: "/legal/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/legal/terms", changeFrequency: "yearly", priority: 0.3 },
  ];

  const publicationPages = researchItems.filter((item) => !item.noindex).map((item) => ({
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

  const modulePages = pharmacyModules.map((module) => ({
    url: `${baseUrl}/learn/pharmacy/modules/${module.slug}`,
    changeFrequency: "monthly",
    priority: 0.82,
  }));

  const drugPages = coreDrugs.map((drug) => ({
    url: `${baseUrl}/learn/pharmacy/drugs/${drug.slug}`,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [
    ...pages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...projectPages,
    ...publicationPages,
    ...learningPages,
    ...modulePages,
    ...drugPages,
  ];
}
