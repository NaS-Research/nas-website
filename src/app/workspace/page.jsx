import Link from "next/link";
import Footer from "@/components/Footer";
import WorkspaceAtmosphere from "./WorkspaceAtmosphere";
import { AnatomyPreview, MechanismPreview, ResearchPreview, NicolePreview } from "./WorkspacePreviews";
import { brcaRepeatabilityRelease as study } from "@/data/brcaRepeatabilityRelease";
import { getDrugAtlasLesson } from "@/data/drugAtlas";
import "./workspace.css";

const description = "A place for scientific work. Tools, knowledge, and room to pursue your next question. Explore the NaS workspace for researchers, clinicians, and students.";
export const metadata = { title: "Workspace | NaS Research", description, alternates: { canonical: "/workspace" }, openGraph: { title: "Workspace | NaS Research", description, url: "/workspace" } };
function Arrow() { return <span aria-hidden="true">↗</span>; }
const paths = [
  { name: "Investigate", text: "Follow a question through evidence, methods, and published research.", href: "/research", link: "Explore the research" },
  { name: "Learn", text: "Build understanding. Connect what you study to what happens in the body.", href: "/learn", link: "Find a place to learn" },
  { name: "Build", text: "Explore the systems we’re developing and help shape what comes next.", href: "/products", link: "See what we’re building" },
];
export default function WorkspacePage() {
  const medicine = getDrugAtlasLesson("albuterol");
  const primary = study.sections.find(s => s.id === "results").resultsTable[1];
  return <div className="nas-page workspace-page"><WorkspaceAtmosphere /><div data-page-main>
    <header className="workspace-opening" id="workspace-top">
      <div className="workspace-width"><div className="workspace-opening-copy">
        <p className="workspace-label">The NaS workspace</p>
        <h1>A place for<br />scientific<br /><span>work.</span></h1>
        <p className="workspace-opening-description">Tools, knowledge, and room<br />to pursue your next question.</p>
        <div className="workspace-actions"><a className="workspace-light-button" href="#overview">Explore the workspace <span aria-hidden="true">↓</span></a><a className="workspace-text-link" href="#nicole">Meet Nicole <Arrow /></a></div>
      </div></div>
      <p className="workspace-opening-footnote">For researchers, clinicians, and the people learning alongside them.</p>
    </header>
    <div className="workspace-opening-breath" aria-hidden="true" />

    <section className="workspace-purpose workspace-width" id="overview" aria-labelledby="purpose-title">
      <p className="workspace-label">Room for the whole pursuit.</p>
      <h2 id="purpose-title">From understanding something<br /><span>to doing something with it.</span></h2>
      <p className="workspace-purpose-intro">Scientific work takes more than one tool. NaS brings together places to explore, study, and develop your ideas.</p>
      <div className="workspace-paths">{paths.map(p => <Link className="workspace-path" key={p.name} href={p.href}><h3>{p.name}<Arrow /></h3><p>{p.text}</p><span>{p.link} <Arrow /></span></Link>)}</div>
    </section>

    <section className="workspace-demonstrations workspace-width" id="tools" aria-labelledby="tools-title">
      <div className="workspace-section-intro"><p className="workspace-label">Inside the workspace</p><h2 id="tools-title">See what you can do.</h2><p>Start with something you can explore right now.</p></div>
      <article className="workspace-demo">
        <div className="workspace-demo-copy"><p className="workspace-label">Visual Atlas</p><h3>Change your<br />perspective.</h3><p>Turn a structure in your hands. See how its parts fit together. Explore the body beyond the flat page.</p><Link className="workspace-text-link" href="/learn/pharmacy/atlas">Open the Visual Atlas <Arrow /></Link></div>
        <AnatomyPreview />
      </article>
      <article className="workspace-demo workspace-demo-reverse">
        <div className="workspace-demo-copy"><p className="workspace-label">Medicine & mechanisms</p><h3>Follow the<br />connection.</h3><p>Go from the name of a medicine to the signals it changes. Work through a mechanism, then keep exploring.</p><Link className="workspace-text-link" href="/learn/pharmacy/atlas?drug=albuterol">Explore the mechanism <Arrow /></Link></div>
        <MechanismPreview steps={medicine.mechanism} source={medicine.source} />
      </article>
      <article className="workspace-demo">
        <div className="workspace-demo-copy"><p className="workspace-label">Published research</p><h3>A question.<br />A method.<br />A record.</h3><p>Look beyond a headline. Read the question, examine the evidence, and follow the work back to its methods.</p><Link className="workspace-text-link" href={`/research/${study.slug}`}>Read the study <Arrow /></Link></div>
        <ResearchPreview title={study.shortTitle} question={study.sections[0].paragraphs[0]} primary={primary} pdfUrl={study.pdfUrl} reproducibilityUrl={study.reproducibilityUrl} />
      </article>
    </section>

    <section className="workspace-nicole workspace-width" id="nicole" aria-labelledby="nicole-title">
      <div className="workspace-section-intro"><p className="workspace-label">Meet Nicole <span className="workspace-status">In development</span></p><h2 id="nicole-title">Keep the thread<br /><span>of your work.</span></h2><p>We’re developing Nicole to connect your questions, sources, tools, and ongoing projects. A place to pick up where you left off.</p></div>
      <NicolePreview />
      <Link className="workspace-text-link" href="/research/introducing-nas-cortex">Read the thinking behind Nicole <Arrow /></Link>
    </section>

    <section className="workspace-start workspace-width" id="start" aria-labelledby="start-title">
      <p className="workspace-label">A place to begin</p><h2 id="start-title">What are you<br /><span>working on?</span></h2>
      <div className="workspace-start-links"><Link href="/learn/pharmacy/atlas"><span>Explore a tool</span><Arrow /></Link><Link href="/learn"><span>Find something to learn</span><Arrow /></Link><Link href="/research"><span>Follow the research</span><Arrow /></Link></div>
      <p>Have something else in mind? <Link href="/support">Build with NaS <Arrow /></Link></p>
    </section>
  </div><Footer /></div>;
}
