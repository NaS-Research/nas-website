import Link from "next/link";
import Footer from "@/components/Footer";
import "./products.css";

const description = "Products are taking shape at NaS. Follow our work on tools for research and healthcare, with availability announced when they are ready.";
export const metadata = { title: "Products | NaS Research", description, alternates: { canonical: "/products" }, openGraph: { title: "Products | NaS Research", description, url: "/products", type: "website" } };

export default function ProductsPage() {
  return <div className="nas-page products-page">
    <header className="nas-shell products-opening">
      <p className="products-label">Products</p>
      <h1>Taking shape.</h1>
      <div className="products-opening-bottom"><p>Tools for the people<br />doing the work.</p><div><span className="products-status">In development</span><p>We’re building tools for research and healthcare. No products are available to purchase or install yet.</p></div></div>
    </header>
    <section className="nas-shell products-development" aria-labelledby="products-development-title">
      <div className="products-section-label"><span>01 / In development</span><p>From a question<br />to something useful.</p></div>
      <article className="products-project">
        <div className="products-project-heading"><h2 id="products-development-title">NaS Denials</h2><span>Healthcare</span></div>
        <p className="products-project-summary">A clearer path through<br />specialty denials.</p>
        <p className="products-project-description">Software being developed to organize denial cases, supporting evidence, and appeal workflows for specialty practices.</p>
        <p className="products-project-status">Development stage. Not yet available for clinical deployment.</p>
        <Link href="/research/introducing-nas-denials">Read the white paper <span aria-hidden="true">↗</span></Link>
      </article>
    </section>
    <section className="nas-shell products-next" aria-labelledby="products-next-title">
      <p className="products-label">As the work develops</p><h2 id="products-next-title">Details when<br />they’re ready.</h2>
      <div><p>This is where we’ll publish product capabilities, supported integrations, and availability as they are confirmed.</p><Link href="/support">Work with NaS <span aria-hidden="true">↗</span></Link></div>
    </section>
    <Footer />
  </div>;
}
