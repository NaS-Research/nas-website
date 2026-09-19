import Link from "next/link";
import Footer from "@/components/Footer";
import "./areas.css";
const description = "Explore NaS research in oncology and genomics, and the scientific interests guiding our longer-term direction.";
export const metadata = {title:"Research Areas | NaS Research",description,alternates:{canonical:"/research/areas"},openGraph:{title:"Research areas | NaS Research",description,url:"/research/areas"}};
const areas = [
 {name:"Autoimmune & Inflammatory Disease",description:"Immune regulation, autoimmunity, and the mechanisms of inflammation."},
 {name:"Chronic & Metabolic Disease",description:"Chronic disease and the biology of metabolism."},
 {name:"Genomics & Personalized Medicine",description:"Genetic variation, its effects on biology, and its relevance to individual health.",href:"/research/alphagenome-atlas-rnu4-2",title:"AlphaGenome Atlas in RNU4-2"},
 {name:"Infectious Disease & Epidemiology",description:"Pathogens, host responses, and patterns of disease across populations."},
 {name:"Neuroscience & Neurodegenerative Disease",description:"The nervous system and the processes underlying neurodegenerative disease."},
 {name:"Oncology",description:"Cancer biology, tumor classification, and the methods used to study them.",href:"/research/pam50-technical-repeatability",title:"PAM50 technical repeatability"},
 {name:"Regenerative Medicine",description:"Repair, restoration, and tissue biology."},
 {name:"Systems Biology",description:"How biological processes interact, from molecular mechanisms to whole systems."},
].sort((a,b)=>a.name.localeCompare(b.name));
export default function ResearchAreasPage(){return <div className="nas-page areas-page">
 <header className="nas-shell areas-opening"><Link className="areas-back" href="/research">← Research</Link><h1 id="research-areas-title">Research areas</h1><p>The fields guiding our research<br />and long-term direction.</p></header>
 <section className="nas-shell areas-current" aria-labelledby="research-areas-title">
  {areas.map(area=><article className="areas-feature" key={area.name}>
   <div className="areas-name"><h2>{area.name}</h2></div>
   <div><p className="areas-description">{area.description}</p>
    {area.href && <Link className="areas-study" href={area.href} aria-label={`Explore research: ${area.title}`}>Explore research <span aria-hidden="true">↗</span></Link>}
   </div>
  </article>)}
  <div className="areas-outlook"><Link className="areas-vision" href="/about#vision">Explore the wider NaS vision ↗</Link></div>
 </section>
 <Footer />
 </div>}
