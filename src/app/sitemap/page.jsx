import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Sitemap | NaS Research",
  description: "Explore the pages available on the NaS Research website.",
};

const links = [
  ["Home", "/"],
  ["Research", "/research"],
  ["Support", "/support"],
  ["About NaS", "/about"],
  ["Contact", "/contact"],
  ["Nicole", "/nicole"],
  ["Privacy Policy", "/legal/privacy"],
  ["Terms of Service", "/legal/terms"],
];

export default function SitemapPage() {
  return (
    <main className="min-h-screen flex flex-col bg-black text-white">
      <section className="flex-grow max-w-4xl mx-auto px-6 py-20">
        <h1
          className="text-5xl font-extrabold mb-10 tracking-tight py-12"
          style={{ color: "#FFFFFF" }}
        >
          Sitemap
        </h1>

        <ul className="text-neutral-400 list-disc pl-8 space-y-4 text-lg leading-relaxed">
          {links.map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="hover:underline hover:text-white transition-colors duration-200">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </main>
  );
}
