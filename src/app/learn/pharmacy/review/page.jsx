import Link from "next/link";
import Footer from "@/components/Footer";
import PharmacyAssessment from "@/components/learn/PharmacyAssessment";
import { pharmacyCumulativeReview } from "@/data/pharmacyCumulativeReview";

export const metadata = {
  title: "Cumulative Pharmacy Review | NaS Learn",
  description: "A 50-question pharmacy review covering calculations, clinical reasoning, medicines, monitoring, and patient counseling.",
  alternates: { canonical: "/learn/pharmacy/review" },
};

export default function PharmacyReviewPage() {
  return (
    <div className="nas-page pharmacy-review-page">
      <header className="pharmacy-review-hero">
        <div className="nas-shell">
          <Link href="/learn/pharmacy#curriculum" className="learning-back">← Pharmacy curriculum</Link>
          <p className="nas-kicker">Cumulative review</p>
          <h1>Bring the systems together.</h1>
          <p>Practice calculations, clinical reasoning, medicine safety, monitoring, and patient counseling. Each attempt draws 10 questions from this focused bank of 50.</p>
          <div><span>{pharmacyCumulativeReview.length} questions in rotation</span><span>10 per attempt</span><span>Reasoning shown after submission</span></div>
        </div>
      </header>
      <main className="nas-shell pharmacy-review-main">
        <PharmacyAssessment questions={pharmacyCumulativeReview} questionCount={10} randomize moduleId="pharmacy-cumulative-review" bankLabel="this combined bank" startLabel="Begin review" />
        <aside className="lesson-disclaimer"><strong>Educational use only</strong><p>This review supports learning and does not replace current prescribing information, institutional policy, clinical guidelines, or professional judgment.</p></aside>
      </main>
      <Footer />
    </div>
  );
}
