import Link from "next/link";
import Footer from "@/components/Footer";
import WatchCollection from "@/components/learn/WatchCollection";
import { learningChannelUrl } from "@/data/learningVideos";

export const metadata = {
  title: "Watch | NaS Learn",
  description: "Explore films from NaS Research on life sciences, pharmacology, and therapeutics. Find a topic and watch on YouTube.",
  alternates: { canonical: "/learn/watch" },
  openGraph: { title: "Watch | NaS Learn", description: "Scientific ideas, brought into focus. Films from NaS Research.", url: "/learn/watch", siteName: "NaS Research", type: "website", images: [{ url: "/nas-logo-share-v1.png", width: 1200, height: 630, alt: "NaS Research" }] },
};

export default function WatchPage() {
  return (
    <div className="nas-page learning-index-page">
      <header className="learning-index-hero">
        <div className="nas-shell"><Link href="/learn" className="learning-back-link">← Learn</Link></div>
        <div className="nas-shell learning-index-hero__inner">
          <div><p className="nas-kicker">Watch</p><h1>See the idea.<br />Understand the science.</h1></div>
          <div className="learning-index-hero__intro"><p>Films on living systems, medicines, and the mechanisms that connect them.</p><a href={learningChannelUrl} target="_blank" rel="noopener noreferrer">Visit our YouTube channel ↗</a></div>
        </div>
      </header>
      <div data-page-main><WatchCollection /></div>
      <Footer />
    </div>
  );
}
