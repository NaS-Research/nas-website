import Link from "next/link";
import Footer from "@/components/Footer";
import CollaborationPicker from "./CollaborationPicker";
import "./support.css";
const description = "Contact NaS Research about a study, a software collaboration, research resources, or a general inquiry.";
export const metadata = { title: "Work with NaS | NaS Research", description, alternates: { canonical: "/support" }, openGraph: { title: "Work with NaS", description, url: "/support" } };
export default function SupportPage() {
  return <div className="nas-page support-page"><div data-page-main className="nas-shell support-main">
    <header className="support-opening"><div><p className="support-label">Work with NaS</p><h1>Good work starts<br />with a conversation.</h1></div><p>Bring a research question, a technical challenge, or a perspective we are missing. Let’s find a useful place to begin.</p></header>
    <CollaborationPicker />
    <section className="support-notes" aria-label="Before we begin"><div><h2>A focused start</h2><p>We are building toward a broader life sciences institution. Today, a useful starting point is a specific contribution to research, software, or learning.</p><Link className="support-related" href="/about#vision">Read the long-term vision ↗</Link></div><div><h2>Clear expectations</h2><p>We agree on scope, responsibilities, access, and credit before a project begins.</p></div><div><h2>Direct correspondence</h2><p>Your note goes to Dalron J. Robertson, founder of NaS Research. There is no public donation program.</p></div></section>
  </div><Footer /></div>;
}
