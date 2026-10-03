import "./home-refinements.css";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import Featured from "@/components/sections/Featured";
import HomeLearnFeature from "@/components/sections/HomeLearnFeature";
import HomeBillingFeature from "@/components/sections/HomeBillingFeature";
import CurrentResearch from "@/components/sections/CurrentResearch";
import WorkWithNas from "@/components/sections/WorkWithNas";
import Footer from "@/components/Footer";

export const metadata = { alternates: { canonical: "/" }, openGraph: { url: "/", siteName: "NaS Research", type: "website", images: [{ url: "/nas-logo-share-v1.png", width: 1200, height: 630, alt: "NaS Research" }] } };

export default function Home() {
  return (
    <>
      {/*
        The original Nicole prompt hero is preserved in
        components/sections/LegacyChatHero.jsx for a future public release.
      */}
      <HeroSection />

      <section className="nas-shell home-research-identity" aria-labelledby="home-research-identity-title">
        <div><p className="nas-kicker">NaS Research · Chicago</p><h2 id="home-research-identity-title">Research for the<br />life sciences.</h2></div>
        <div><p>NaS Research is a life sciences research institute developing biomedical research, scientific tools, and learning resources. Explore our studies, examine the evidence, and follow the questions that guide our work.</p><Link href="/about">Get to know NaS Research <span aria-hidden="true">↗</span></Link></div>
      </section>
      <Featured />
      <HomeBillingFeature />
      <HomeLearnFeature />
      <CurrentResearch />
      <WorkWithNas />

      <Footer />
    </>
  );
}
