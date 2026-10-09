import Link from "next/link";
import Footer from "@/components/Footer";
import PharmacyAssessment from "@/components/learn/PharmacyAssessment";
import { pharmacyCumulativeReview } from "@/data/pharmacyCumulativeReview";

export const metadata = {
  title: "Knowledge Review: Pharmacy | NaS",
  description: "A 30-question pharmacy review connecting mechanisms, monitoring, counseling, calculations, and clinical cases.",
  alternates: { canonical: "/learn/pharmacy/review" },
    openGraph: { url: "/learn/pharmacy/review", siteName: "NaS Research", type: "website", images: [{ url: "/nas-logo-share-v1.png", width: 1200, height: 630, alt: "NaS Research" }] },
};

export default function PharmacyReviewPage() {
  return (
    <div className="nas-page pharmacy-review-page">
      <header className="pharmacy-review-hero">
        <div className="nas-shell">
          <Link href="/learn/library" className="learning-back">← Learning library</Link>
          <p className="nas-kicker">Cumulative review</p>
          <h1>Bring the systems together.</h1>
          <p>Connect mechanisms, monitoring, patient counseling, calculations, and clinical cases. Each attempt draws 10 questions from a 30-question review bank. Module practice remains available within each topic.</p>
          <div><span>{pharmacyCumulativeReview.length} questions in rotation</span><span>10 per attempt</span><span>Reasoning shown after submission</span></div>
        </div>
      </header>
      <div data-page-main className="nas-shell pharmacy-review-main">
        <PharmacyAssessment questions={pharmacyCumulativeReview} questionCount={10} randomize moduleId="pharmacy-cumulative-review" bankLabel="the combined review bank" />
        <aside className="lesson-disclaimer"><strong>Educational use only</strong><p>This review supports learning and does not replace current prescribing information, institutional policy, clinical guidelines, or professional judgment.</p></aside>
      </div>
      <Footer />
    </div>
  );
}
