import Link from "next/link";
import Footer from "@/components/Footer";
import "./areas.css";
const description = "Explore NaS research in oncology and genomics, and the scientific interests guiding our longer-term direction.";
export const metadata = {title:"Research Areas | NaS Research",description,alternates:{canonical:"/research/areas"},openGraph:{title:"Research areas | NaS Research",description,url:"/research/areas"}};
const areas = [
 {name:"Autoimmune & Inflammatory Disease",description:"Immune regulation, autoimmunity, and the mechanisms of inflammation."},
 {name:"Chronic & Metabolic Disease",description:"Chronic disease and the biology of metabolism."},
 {name:"Genomics & Personalized Medicine",description:"Our RNU4-2 benchmark compares AlphaGenome Atlas variant-impact scores with published experimental measurements, including the limits of that comparison.",href:"/research/alphagenome-atlas-rnu4-2",title:"AlphaGenome Atlas in RNU4-2"},
 {name:"Infectious Disease & Epidemiology",description:"Pathogens, host responses, and patterns of disease across populations."},
 {name:"Neuro & Degenerative Disease",description:"The nervous system and the processes underlying neurodegenerative disease."},
 {name:"Oncology",description:"Our published PAM50 study examines whether repeated measurements from the same reported tumor RNA source produce the same breast-cancer subtype label.",href:"/research/pam50-technical-repeatability",title:"PAM50 technical repeatability"},
 {name:"Regenerative Medicine",description:"Repair, restoration, and tissue biology."},
 {name:"Systems Biology",description:"How biological processes interact, from molecular mechanisms to whole systems."},
].sort((a,b)=>a.name.localeCompare(b.name));
export default function ResearchAreasPage(){return <div className="nas-page areas-page">
 <header className="nas-shell areas-opening"><Link className="areas-back" href="/research">← Research</Link><h1>Research areas.</h1><p>Where our work begins.<br />Where it can grow.</p></header>
 <section className="nas-shell areas-current" aria-labelledby="areas-current-title">
  <div className="areas-section-heading"><h2 id="areas-current-title">Eight areas. A long-term direction.</h2><span>Published work and planned areas</span></div>
  {areas.map((area,index)=><article className="areas-feature" key={area.name}>
   <div className="areas-name"><span>{String(index+1).padStart(2,"0")}</span><h3>{area.name}</h3></div>
   <div><p className={`areas-status${area.href ? " areas-status-published" : ""}`}>{area.href ? "Published work" : "Planned area"}</p><p className="areas-description">{area.description}</p>
    {area.href && <Link className="areas-study" href={area.href}><span><small>Published study</small>{area.title}</span><span aria-hidden="true">↗</span></Link>}
   </div>
  </article>)}
  <div className="areas-outlook"><p>Planned areas describe our longer-term direction. Dedicated research will develop as the people, resources, and questions come together.</p><Link className="areas-vision" href="/about#vision">Explore the wider NaS vision ↗</Link></div>
 </section>
 <Footer />
 </div>}
