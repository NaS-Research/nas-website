"use client";

import Link from "next/link";
import "./footer.css";

const groups = [
  { title: "Research", links: [["Publications", "/research"], ["Research programs", "/research/programs"], ["NaS Cortex", "/research/introducing-nas-cortex"], ["NaS Denials", "/research/introducing-nas-denials"]] },
  { title: "Learn", links: [["NaS Learn", "/learn"], ["Pharmacy", "/learn/pharmacy"], ["Visual Atlas", "/learn/pharmacy/atlas"], ["Drug Library", "/learn/pharmacy/drugs"]] },
  { title: "About NaS", links: [["Our purpose", "/about"], ["Work with NaS", "/support"], ["Contact", "/contact"]] },
];

export default function Footer() {
  return (
    <footer className="site-closing" aria-label="Site footer">
      <div className="site-closing__inner">
        <div className="site-closing__social"><span>Follow NaS</span><a href="https://www.instagram.com/nasresearch/">Instagram ↗</a><a href="https://www.linkedin.com/company/nasresearch/">LinkedIn ↗</a></div>
        <div className="site-closing__main">
          <div className="site-closing__identity">
            <Link href="/" className="site-closing__brand" aria-label="NaS Research home">NaS<span>Research</span></Link>
            <p>Research and tools<br />for the life sciences.</p>
            <span className="site-closing__location">Chicago, Illinois</span>
          </div>
          <nav className="site-closing__navigation" aria-label="Footer navigation">
            {groups.map((group) => <div className="site-closing__group" key={group.title}>
              <h2>{group.title}</h2>
              {group.links.map(([label, href]) => <Link key={href} href={href}>{label}{href.startsWith("https:") && <span aria-hidden="true"> ↗</span>}</Link>)}
            </div>)}
          </nav>
        </div>
        <div className="site-closing__base">
          <p>© {new Date().getFullYear()} NaS Research</p>
          <nav aria-label="Legal"><Link href="/legal/privacy">Privacy</Link><Link href="/legal/terms">Terms</Link></nav>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}>Back to top <span aria-hidden="true">↑</span></button>
        </div>
      </div>
    </footer>
  );
}
