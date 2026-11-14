import "./home-refinements.css";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import HomeComputingFeature from "@/components/sections/HomeComputingFeature";
import Featured from "@/components/sections/Featured";
import HomeLearnFeature from "@/components/sections/HomeLearnFeature";
import CurrentResearch from "@/components/sections/CurrentResearch";
import WorkWithNas from "@/components/sections/WorkWithNas";
import Footer from "@/components/Footer";

// Keep social-card branding concise without replacing the inherited SEO title.
export const metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "NaS Research",
    url: "/", siteName: "NaS Research", type: "website",
    images: [{ url: "/nas-logo-share-v1.png", width: 1200, height: 630, alt: "NaS Research" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NaS Research",
    images: ["/nas-logo-share-v1.png"],
  },
};

export default function Home() {
  return (
    <>
      {/*
        The original Nicole prompt hero is preserved in
        components/sections/LegacyChatHero.jsx for a future public release.
      */}
      <HeroSection />

      <section className="nas-shell home-research-identity" aria-labelledby="home-research-identity-title">
        <div><p className="nas-kicker">NaS Research · Chicago</p><h2 id="home-research-identity-title">Science, built for what’s next.</h2></div>
        <div><p>NaS brings research, scientific tools, and learning together to explore questions that matter.</p><Link href="/about">Discover NaS <span aria-hidden="true">↗</span></Link></div>
      </section>
      <HomeComputingFeature />
      <HomeLearnFeature />
      <Featured />
      <CurrentResearch />
      <WorkWithNas />

      <Footer />
    </>
  );
}
