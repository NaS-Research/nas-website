import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ArtworkFilm from "@/components/research/ArtworkFilm";
import "./about.css";

const description = "Explore NaS today and its long-term vision: a life sciences institution connecting research, education, robotics, biological collections, and computing in Chicago.";
export const metadata = { title: "About | NaS Research", description, alternates: { canonical: "/about" }, openGraph: { title: "About NaS Research", description, url: "/about", type: "website" } };

export default function AboutPage() {
  return <div className="nas-page about-nas"><main>
    <header className="nas-shell about-opening">
      <p className="about-label">About NaS Research <span>Hyde Park, Chicago</span></p>
      <h1>A home for<br /><span>the life sciences.</span></h1>
      <div className="about-opening-bottom"><Image src="/assets/images/NaSLogo-transparent-hd.png" alt="NaS gold emblem" width={160} height={160} preload /><p>Our ambition is to give people the tools, space, and support to turn scientific questions into useful work.</p><a href="#purpose" aria-label="Read about our purpose">↓</a></div>
    </header>
    <section id="purpose" className="nas-shell about-purpose">
      <p className="about-label">01 / Our purpose</p>
      <div><h2>From the first question<br />to practical use.</h2><p>NaS aims to bring research, education, laboratories, computing, and production together in one life sciences institution. Our interests span biology, genetics, medicine, agriculture, and the environment.</p><p>Today, we are founder-led, working on computational studies, research software, and learning resources. That is our starting point for a much larger ambition.</p><div className="about-purpose-links"><Link className="about-link" href="/research/programs">Explore our current research ↗</Link><a className="about-link" href="#vision">Where we are headed ↓</a></div></div>
    </section>
    <section id="vision" className="about-vision"><div className="nas-shell">
      <div className="about-vision-heading"><p className="about-label">02 / The long-term vision</p><h2>One institution.<br />More possibilities.</h2><p>Four proposed divisions, supported by shared computing. This is the organization we intend to build as the work, people, and resources grow.</p></div>
      <div className="about-divisions">
        {[
          ["Research & Development", "Ask. Test. Develop.", "Research across the life sciences, supported by chemistry, physics, materials science, and engineering. The aim is to carry a question through careful experiments into methods, tools, and technologies that can be tested in practice."],
          ["NaS Institute", "Learn. Investigate. Build.", "Fellowships, advanced training, mentorship, and shared laboratories. A proposed venture studio would help researchers assess whether a discovery could become a useful product or an independent company."],
          ["Robotics & Manufacturing", "Extend what people can do.", "Robotic laboratories, precision production, and services for handling, storing, and distributing scientific materials. Trained people would remain responsible for the quality, reliability, and safe operation of these systems."],
          ["BioBank & Insights", "Preserve what makes research possible.", "Biological collections and scientific data, with their origins, quality, and permitted uses documented. Analytical tools would help researchers study those resources while respecting consent and access conditions."],
        ].map(([title, subtitle, copy], index) => <details className="about-division" key={title}><summary><span className="about-division-number">0{index + 1}</span><span><h3>{title}</h3><small>{subtitle}</small></span><span className="about-division-toggle" aria-hidden="true">+</span></summary><p>{copy}</p></details>)}
      </div>
      <div className="about-zeta"><p className="about-label">Across all four divisions</p><h3>Zeta / Scientific computing</h3><p>Proposed off-site computing for simulation, data analysis, model development, and research software. A shared resource for all four divisions, with capacity added as research needs grow.</p></div>
    </div></section>
    <section className="nas-shell about-campus"><p className="about-label">03 / Nicole Park</p><div><h2>A place to build<br />a life in science.</h2><p>Nicole Park is our long-term campus concept: research facilities, teaching spaces, shared laboratories, and places to develop new companies within one scientific community.</p><p>We want NaS to become an exceptional place to spend a career. That means strong compensation, continued education, health and family support, and time to do difficult work well.</p><p className="about-planning-note">Campus development and employment programs are future plans. Their scale and timing would depend on funding, suitable sites, approvals, and operating capacity.</p></div></section>
    <section className="nas-shell about-place"><div className="about-place-image"><ArtworkFilm src="/assets/videos/ChicagoThree.mp4" poster="/research/covers/hyde-park.webp" alt="Aerial video of Chicago, home to NaS Research" showControl /><span>Chicago, Illinois</span></div><div className="about-place-copy"><p className="about-label">04 / People & place</p><h2>Built here.<br />Looking further.</h2><p>NaS is led by Dalron J. Robertson, whose background in biology and software engineering shaped its purpose.</p><p>Our ambition begins in Hyde Park and extends across the South Side and Chicago. As NaS grows, we want to invest in local careers, schools, businesses, and places that make daily life better. Residents and community partners should help shape that work.</p><Link className="about-link" href="/research/why-hyde-park">Why Hyde Park ↗</Link></div></section>
    <section className="about-responsibility"><div className="nas-shell"><p className="about-label">05 / What should guide us</p><h2>Ambition carries<br />responsibility.</h2><div className="about-values">
      <article><h3>Scientific integrity</h3><p>Claims must follow evidence. Methods must be open to scrutiny. People remain accountable for decisions, supported by qualified scientific and ethics review as the institution develops.</p></article>
      <article><h3>Care & stewardship</h3><p>Protect the people, specimens, and information entrusted to us. Build the safeguards each activity requires before that work begins, and keep testing whether they are effective.</p></article>
    </div></div></section>
    <section className="nas-shell about-principles"><p className="about-label">The work starts now</p><h2>Build from<br />what we can show.</h2><div><p>Read a study, explore a tool, or bring a question to the work. The institution we want to become begins with what we do today.</p><div className="about-purpose-links"><Link className="about-link" href="/research">Research library ↗</Link><Link className="about-link" href="/learn">NaS Learn ↗</Link><Link className="about-link" href="/support">Work with NaS ↗</Link></div></div></section>
  </main><Footer /></div>;
}
