import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import "./products.css";

const description = "Tools for research and healthcare. Explore NaS Denials, our approach to connecting specialty denial cases, supporting evidence, and human review.";
export const metadata = { title: "Products | NaS Research", description, alternates: { canonical: "/products" }, openGraph: { title: "Products | NaS Research", description, url: "/products", type: "website" } };

function Arrow() { return <span aria-hidden="true">↗</span>; }

const principles = [
  { number: "01", title: "The case.", text: "A shared record of the claim, denial, policy, and filing deadline. A starting point for understanding what happened." },
  { number: "02", title: "The evidence.", text: "Supporting sources kept with the case. Missing information and contradictions made visible for review." },
  { number: "03", title: "The decision.", text: "Qualified people review the evidence, approve the response, and remain responsible for submission." },
];

export default function ProductsPage() {
  return <div className="nas-page products-page">
    <header className="products-opening nas-shell">
      <p className="products-label">Products</p>
      <h1>Tools for research<br />and healthcare.</h1>
      <div className="products-opening-bottom">
        <p>Connecting evidence to the work it informs.</p>
        <a className="products-text-link" href="#denials">Explore NaS Denials <span aria-hidden="true">↓</span></a>
      </div>
    </header>

    <section className="products-feature" id="denials" aria-labelledby="denials-title">
      <div className="nas-shell products-feature-inner">
        <div className="products-feature-copy">
          <p className="products-label">NaS Denials <span className="products-category">Healthcare operations</span></p>
          <h2 id="denials-title">Every case.<br />Connected.</h2>
          <p className="products-feature-description">An evidence-linked workbench for specialty denial cases. Designed to bring payer policy, supporting records, and human-reviewed appeals into one accountable workflow.</p>
          <Link className="products-button" href="/research/introducing-nas-denials">Explore the approach <Arrow /></Link>
        </div>
        <figure className="products-artwork">
          <Image src="/research/denials/evidence-optics-v2.webp" alt="Layered glass with a gold center against black" width={1536} height={1024} sizes="(max-width: 760px) 100vw, 65vw" />
        </figure>
      </div>
    </section>

    <section className="nas-shell products-record" aria-labelledby="record-title">
      <div className="products-record-intro">
        <p className="products-label">The product approach</p>
        <h2 id="record-title">A clearer view.<br /><span>At every step.</span></h2>
        <p>Denial work spans records, rules, and people. NaS Denials is being developed around a connected case record, so each response can be traced to the evidence behind it.</p>
      </div>
      <div className="products-principles">
        {principles.map(item => <article key={item.number}>
          <span className="products-step">{item.number}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>)}
      </div>
      <div className="products-product-note">
        <p><span>In development.</span> Customer validation and clinical deployment are not yet available. Read the white paper for the software foundation, proposed workflow, and current limitations.</p>
        <Link className="products-text-link" href="/research/introducing-nas-denials">Read the white paper <Arrow /></Link>
      </div>
    </section>

    <section className="nas-shell products-partnership" aria-labelledby="partnership-title">
      <div><p className="products-label">Work with NaS</p><h2 id="partnership-title">Start with<br />your workflow.</h2></div>
      <div className="products-partnership-copy"><p>We’re looking for specialty practices and revenue-cycle teams to help evaluate a focused denial workflow. Start with the problem your team needs to solve.</p><Link className="products-button" href="/support">Discuss a design partnership <Arrow /></Link><p className="products-partnership-note">Initial conversations use workflow descriptions and aggregate information. Please do not send patient records.</p></div>
    </section>
    <Footer />
  </div>;
}
