import {researchItems} from "../../data/researchLibrary.js";
import {pharmacyModules} from "../../data/pharmacyModules.js";
import {coreDrugs} from "../../data/drugLibrary.js";
import {pharmacyLessons} from "../../data/pharmacyLearning.js";
import {createSearchIndex, publicRecord} from "./engine.mjs";

// These landing pages are already linked in public navigation or the public sitemap.
// Never discover routes by crawling the filesystem: previews and Studio stay unlisted.
const pages = [
  {href:"/research",title:"Research library",category:"Research",description:"Explore NaS publications, research notes, releases, and essays.",keywords:["genomics","drug discovery","scientific infrastructure"]},
  {href:"/research/areas",title:"Research areas",category:"Research",description:"Explore the scientific areas studied at NaS."},
  {href:"/products",title:"Products",category:"Products",description:"Tools for research and healthcare, including NaS Denials."},
  {href:"/products#denials",title:"NaS Denials",category:"Products",description:"An evidence-linked workbench in development for specialty denial cases and human-reviewed appeals.",keywords:["hospital billing","insurance","healthcare operations"]},
  {href:"/learn",title:"Learn",category:"Learning",description:"Lessons, models, and references for understanding living systems.",keywords:["biology","life sciences"]},
  {href:"/learn/library",title:"Learning Library",category:"Learning",description:"Find focused modules and study guides across mechanisms, medicines, and care.",keywords:["learning modules","pharmacy"]},
  {href:"/learn/anatomy",title:"Anatomy Studio",category:"Models",description:"Explore organ models and selected anatomical landmarks in an interactive viewer.",keywords:["anatomy","biobank","organs","biological models","heart","brain"]},
  {href:"/learn/pharmacy/atlas",title:"Human Atlas",category:"Models",description:"Explore the human body in three dimensions.",keywords:["anatomy","organs","heart","brain","biological models"]},
  {href:"/learn#interactive-library",title:"Interactive Library",category:"Learning",description:"Preview visual learning experiences in cardiac conduction, receptor action, and DNA.",keywords:["interactive modules","agonist antagonist","activate block","electrical system","models"]},
  {href:"/learn/pharmacy/drugs",title:"Drug Library",category:"Learning",description:"Explore medicines, mechanisms, uses, and safety.",keywords:["pharmacology","receptors"]},
  {href:"/learn/pharmacy/review",title:"Pharmacy Knowledge Review",category:"Learning",description:"Practice mechanisms, clinical reasoning, calculations, and counseling."},
  {href:"/learn/watch",title:"Films from NaS Research",category:"Learning",description:"Watch science films and lectures from NaS.",keywords:["videos","youtube"]},
  {href:"/about",title:"About NaS Research",category:"NaS",description:"Our purpose and approach to work in the life sciences."},
  {href:"/support",title:"Work with NaS",category:"NaS",description:"Bring a question, an idea, or expertise to share."},
];
const slug = value => typeof value === "string" && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
// Only the public arrays used by /research and /learn/library enter the index.
// Explicit status guards additionally exclude any later draft/private entries.
export const publicSearchIndex = createSearchIndex([
  ...pages,
  ...researchItems.filter(item => publicRecord(item) && slug(item.slug)).map(item => ({
    href:"/research/"+item.slug,title:item.title,category:item.type,description:item.abstract || "",
    keywords:[item.area,"research"],
  })),
  ...pharmacyModules.filter(item => publicRecord(item) && slug(item.slug)).map(item => ({
    href:"/learn/pharmacy/modules/"+item.slug,title:item.title,category:"Learning modules",description:item.description,
    keywords:[item.area,...(item.topics || [])],
  })),
  ...coreDrugs.filter(item => publicRecord(item) && slug(item.slug)).map(item => ({
    href:"/learn/pharmacy/drugs/"+item.slug,title:item.generic,category:"Drug Library",
    description:item.therapeuticClass || item.className || item.category,
    keywords:[item.brand,item.category,item.therapeuticClass],
  })),
  ...pharmacyLessons.filter(item => publicRecord(item) && slug(item.slug)).map(item => ({
    href:"/learn/pharmacy/"+item.slug,title:item.title,category:"Study guides",description:item.description,keywords:[item.collection],
  })),
]);
