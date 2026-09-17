import Link from "next/link";
import Footer from "@/components/Footer";
import ResearchLibrary from "@/components/research/ResearchLibrary";
import { researchItems, researchTypes } from "@/data/researchLibrary";

export const metadata = {
  alternates: { canonical: "/research" },
  title: "Research Library | NaS Research",
  description: "Browse research reports, white papers, research notes, releases, and essays from NaS Research.",
};

export default function ResearchPage() {
  return (
    <div className="nas-page research-index-page">
      <header className="research-index-header">
        <div className="nas-shell">
          <div className="research-index-heading">
            <div>
              <p className="nas-kicker">Publications & documentation</p>
              <h1>Research</h1>
            </div>
            <div className="research-index-intro">
              <p>Research reports, white papers, research notes, releases, and essays from NaS.</p>
              <Link href="/research/programs">Explore research programs <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </header>

      <div data-page-main className="nas-shell research-index-main">
        <ResearchLibrary items={researchItems} types={researchTypes} />
      </div>
      <Footer />
    </div>
  );
}
