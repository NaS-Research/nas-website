"use client";
import { useState } from "react";
import Link from "next/link";
const topics = [
  { id:"research", label:"Review a study", category:"Researchers & subject specialists", title:"Take a closer look.", copy:"A careful review can reveal a weak assumption, a missing comparison, or a result that needs a different interpretation.", prompts:["The study you would like to examine", "Your relevant experience", "The question you would investigate"], subject:"Research review", href:"/research", link:"Find a study" },
  { id:"software", label:"Build or improve a tool", category:"Engineers, clinicians & educators", title:"Start with a real problem.", copy:"A specific example of where a research or healthcare workflow breaks down gives us something concrete to work on together.", prompts:["The tool or workflow", "The problem you have observed", "What a useful improvement would look like"], subject:"Tool collaboration", href:"/research/introducing-nas-denials", link:"Explore NaS Denials" },
  { id:"resources", label:"Offer research resources", category:"Computing, data & specialist services", title:"Help a project move forward.", copy:"Computing, storage, specialist services, and appropriately shareable data can support a defined research need.", prompts:["The resource you have in mind", "Any conditions on its use", "The research need it could address"], subject:"Research resources" },
  { id:"general", label:"Something else", category:"Introductions, media & general questions", title:"There is room for a conversation.", copy:"Write with a question about NaS, a media inquiry, or an introduction to someone with a shared research interest.", prompts:["A little about you", "The reason you are reaching out", "What you would like to discuss"], subject:"NaS inquiry" },
];
export default function CollaborationPicker() {
  const [selected, setSelected] = useState("research");
  const item = topics.find(topic => topic.id === selected);
  const body = `Hello Dalron,\n\nI am writing about: ${item.subject.toLowerCase()}.\n\n${item.prompts.map(prompt => `${prompt}:\n`).join("\n")}\n`;
  return <section className="support-desk" aria-label="Choose a conversation topic">
    <fieldset className="support-choices"><legend>What brings you here?</legend>{topics.map((topic,index) => <label key={topic.id} className={selected === topic.id ? "is-selected" : ""}><input type="radio" name="collaboration-topic" value={topic.id} checked={selected === topic.id} onChange={() => setSelected(topic.id)} aria-controls="conversation-detail" /><span className="support-choice-number">0{index+1}</span><span>{topic.label}</span><span aria-hidden="true">↗</span></label>)}</fieldset>
    <div id="conversation-detail" className="support-letter" aria-live="polite" aria-atomic="true"><p className="support-label">{item.category}</p><h2>{item.title}</h2><p>{item.copy}</p><h3>Include in your note</h3><ul>{item.prompts.map(prompt => <li key={prompt}>{prompt}</li>)}</ul><a className="support-email-button" href={`mailto:dalronj.robertson@gmail.com?subject=${encodeURIComponent(item.subject)}&body=${encodeURIComponent(body)}`}>Write to NaS <span aria-hidden="true">↗</span></a><p className="support-mail-note">Opens a draft in your email app.</p>{item.href && <Link className="support-related" href={item.href}>{item.link} ↗</Link>}</div>
    <div className="support-address"><span>Prefer to write directly?</span><a href="mailto:dalronj.robertson@gmail.com">dalronj.robertson@gmail.com ↗</a></div>
  </section>;
}
