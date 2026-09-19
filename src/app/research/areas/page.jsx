import Link from "next/link";
import Footer from "@/components/Footer";
import "./areas.css";
const description = "Explore NaS research in oncology and genomics, and the scientific interests guiding our longer-term direction.";
export const metadata = {title:"Research Areas | NaS Research",description,alternates:{canonical:"/research/areas"},openGraph:{title:"Research areas | NaS Research",description,url:"/research/areas"}};
const current = [
 {name:"Oncology",number:"01",question:"Understanding the methods behind cancer research.",description:"Our published PAM50 study examines whether repeated measurements from the same reported tumor RNA source produce the same breast-cancer subtype label.",href:"/research/pam50-technical-repeatability",title:"PAM50 technical repeatability"},
 {name:"Genomics",number:"02",question:"Testing how predictions relate to measured biology.",description:"Our RNU4-2 benchmark compares AlphaGenome Atlas variant-impact scores with published experimental measurements, including the limits of that comparison.",href:"/research/alphagenome-atlas-rnu4-2",title:"AlphaGenome Atlas in RNU4-2"},
];
const future = [
 ["Immunology","Autoimmune and inflammatory disease."],
 ["Metabolic disease","Chronic disease and the biology of metabolism."],
 ["Infectious disease","Pathogens, host responses, and epidemiology."],
 ["Neuroscience","The nervous system and neurodegenerative disease."],
 ["Regenerative medicine","Repair, restoration, and tissue biology."],
 ["Systems biology","How biological processes work together."],
];
export default function ResearchAreasPage(){return <div className="nas-page areas-page">
 <header className="nas-shell areas-opening"><Link className="areas-back" href="/research">← Research</Link><h1>Research areas.</h1><p>Where our work begins.<br />Where it can grow.</p></header>
 <section className="nas-shell areas-current" aria-labelledby="areas-current-title"><div className="areas-section-heading"><h2 id="areas-current-title">Current work</h2><span>Areas with published studies</span></div>{current.map(area=><article className="areas-feature" key={area.name}><div className="areas-name"><span>{area.number}</span><h3>{area.name}</h3></div><div><p className="areas-question">{area.question}</p><p className="areas-description">{area.description}</p><Link className="areas-study" href={area.href}><span><small>Published study</small>{area.title}</span><span aria-hidden="true">↗</span></Link></div></article>)}</section>
 <section className="nas-shell areas-future" aria-labelledby="areas-future-title"><div className="areas-future-intro"><div><p className="areas-eyebrow">The longer view</p><h2 id="areas-future-title">Future interests.</h2></div><p>These fields inform our long-term direction. They are not established NaS research programs; dedicated work will depend on the people, resources, and questions we can responsibly pursue.</p></div><div className="areas-future-grid">{future.map(([name,copy])=><div key={name}><h3>{name}</h3><p>{copy}</p></div>)}</div><Link className="areas-vision" href="/about#vision">Explore the wider NaS vision ↗</Link></section>
 <Footer />
 </div>}
