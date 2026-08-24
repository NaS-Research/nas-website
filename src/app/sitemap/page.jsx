import Footer from "@/components/Footer";
import Link from "next/link";
import { researchItems } from "@/data/researchLibrary";
import { researchProjects } from "@/data/researchProjects";
import { pharmacyLessons } from "@/data/pharmacyLearning";

export const metadata = {
  title: "Sitemap | NaS Research",
  description: "A complete directory of NaS Research pages, programs, publications, and legal information.",
  alternates: { canonical: "/sitemap" },
};

const groups = [
  {
    title: "NaS",
    links: [
      { label: "Home", href: "/", detail: "The work and current publications" },
      { label: "About NaS", href: "/about", detail: "Mission, direction, and long-term vision" },
      { label: "Work with NaS", href: "/support", detail: "Ways to strengthen the research" },
      { label: "Contact", href: "/contact", detail: "Direct correspondence with NaS" },
    ],
  },
  {
    title: "Research",
    links: [
      { label: "Research Library", href: "/research", detail: "All public research and institutional writing" },
      { label: "Research Programs", href: "/research/programs", detail: "Current areas of scientific work" },
      ...researchProjects.map((project) => ({
        label: `${project.id}: ${project.shortTitle}`,
        href: `/research/projects/${project.slug}`,
        detail: `${project.role} · ${project.status}`,
      })),
      { label: "Nicole", href: "/nicole", detail: "Biomedical research interface" },
    ],
  },
  {
    title: "Learning",
    links: [
      { label: "NaS Learn", href: "/learn", detail: "Connected educational guides across pharmacy and the life sciences" },
      { label: "Pharmacy", href: "/learn/pharmacy", detail: "The Pharmacy curriculum and learning library" },
      ...pharmacyLessons.map((lesson) => ({
        label: lesson.title,
        href: `/learn/pharmacy/${lesson.slug}`,
        detail: `${lesson.collection} · ${lesson.readTime}`,
      })),
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy", detail: "How information is handled" },
      { label: "Terms of Use", href: "/legal/terms", detail: "Rules for using the website and research tools" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="nas-page sitemap-page">
      <header className="sitemap-hero">
        <div className="nas-shell">
          <p className="nas-kicker">NaS Research</p>
          <h1>Sitemap</h1>
          <p>
            Every public page, program, and publication from NaS, organized in one place.
          </p>
        </div>
      </header>

      <main className="nas-shell sitemap-directory">
        {groups.map((group, groupIndex) => (
          <section className="sitemap-group" key={group.title}>
            <header>
              <span>{String(groupIndex + 1).padStart(2, "0")}</span>
              <h2>{group.title}</h2>
            </header>
            <div className="sitemap-links">
              {group.links.map((item) => (
                <Link href={item.href} key={item.href}>
                  <span>
                    <strong>{item.label}</strong>
                    <small>{item.detail}</small>
                  </span>
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="sitemap-group sitemap-publications">
          <header>
            <span>05</span>
            <h2>Publications</h2>
          </header>
          <div className="sitemap-links">
            {researchItems.map((item) => (
              <Link href={`/research/${item.slug}`} key={item.slug}>
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.type} · {item.date}</small>
                </span>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
