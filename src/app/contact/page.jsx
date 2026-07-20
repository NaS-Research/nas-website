import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | NaS Research",
  description: "Contact NaS Research and founder Dalron J. Robertson.",
};

export default function ContactPage() {
  return (
    <div className="nas-page flex min-h-screen flex-col">
      <section className="nas-hero flex-1">
        <div className="nas-shell">
          <p className="nas-kicker">Contact NaS</p>
          <h1 className="nas-title">Let’s talk about what science can become.</h1>
          <div className="nas-hero-summary">
            <p className="nas-introduction">
              For research discussions, partnerships, support, media inquiries, or general questions, contact founder Dalron J. Robertson directly.
            </p>
            <p className="nas-status">Founder-led · Chicago</p>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20">
            <p className="nas-section-label">Direct correspondence</p>
            <Link
              href="mailto:dalronj.robertson@gmail.com"
              className="nas-contact-address"
            >
              dalronj.robertson@gmail.com
            </Link>
            <p className="nas-contact-note">
              Email is the primary contact channel. A clear subject line and a short description of your inquiry are appreciated.
            </p>
          </div>
        </div>
      </section>

      <section className="nas-content-section nas-contact-section">
        <div className="nas-shell">
          <header className="nas-section-heading">
            <p className="nas-section-label">Reasons to write</p>
            <h2 className="nas-section-title">Serious conversations about science and institution-building.</h2>
          </header>
          <div className="nas-card-grid">
            {[
              {
                title: "Research and technical discussion",
                copy: "Questions or thoughtful feedback concerning NaS publications, Nicole, the Cortex architecture, biomedical AI, computational biology, or scientific infrastructure.",
              },
              {
                title: "Collaboration",
                copy: "Proposals from researchers, clinicians, engineers, laboratories, institutions, and independent specialists with a specific area of shared interest.",
              },
              {
                title: "Support and resources",
                copy: "Conversations about computing resources, datasets, laboratory access, technical services, grants, sponsorship, or philanthropic support.",
              },
              {
                title: "Media and general inquiries",
                copy: "Requests for background, commentary, interviews, institutional information, or other questions related to the public work of NaS Research.",
              },
            ].map((item, index) => (
              <article className="nas-card" key={item.title}>
                <span className="nas-card-number">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="nas-card-title">{item.title}</h3>
                <p className="nas-card-copy">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nas-closing">
        <div className="nas-shell nas-contact-guidance">
          <p className="nas-section-label">A useful first message</p>
          <p>
            Please include who you are, why you are reaching out, the topic or publication involved, and any specific next step you are proposing. NaS is currently a small founder-led organization, so focused messages are easiest to review thoughtfully.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
