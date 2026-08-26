import Link from "next/link";
import Footer from "@/components/Footer";
import PharmacyAssessment from "@/components/learn/PharmacyAssessment";
import { pharmacyCumulativeReview } from "@/data/pharmacyCumulativeReview";
import { pharmacyModules, pharmacySubmoduleCount } from "@/data/pharmacyModules";

export const metadata = {
  title: "Cumulative Pharmacy Review | NaS Learn",
  description: "A cumulative pharmacy review combining foundational questions with patient cases across the complete NaS Learn sequence.",
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
          <p>This review moves between mechanisms, monitoring, patient counseling, calculations, and clinical cases across all {pharmacyModules.length} modules and {pharmacySubmoduleCount} lessons. New modules join the review automatically.</p>
          <div><span>{pharmacyCumulativeReview.length} questions in rotation</span><span>10 per attempt</span><span>Reasoning shown after submission</span></div>
        </div>
      </header>
      <main className="nas-shell pharmacy-review-main">
        <PharmacyAssessment questions={pharmacyCumulativeReview} questionCount={10} randomize moduleId="pharmacy-cumulative-review" />
        <aside className="lesson-disclaimer"><strong>Educational use only</strong><p>This review supports learning and does not replace current prescribing information, institutional policy, clinical guidelines, or professional judgment.</p></aside>
      </main>
      <Footer />
    </div>
  );
}
