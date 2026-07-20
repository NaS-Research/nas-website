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
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
