import "./home-refinements.css";
import HeroSection from "@/components/sections/HeroSection";
import Featured from "@/components/sections/Featured";
import HomeLearnFeature from "@/components/sections/HomeLearnFeature";
import CurrentResearch from "@/components/sections/CurrentResearch";
import WorkWithNas from "@/components/sections/WorkWithNas";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/*
        The original Nicole prompt hero is preserved in
        components/sections/LegacyChatHero.jsx for a future public release.
      */}
      <HeroSection />

      <Featured />
      <HomeLearnFeature />
      <CurrentResearch />
      <WorkWithNas />

      <Footer />
    </>
  );
}
