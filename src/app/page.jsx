import HeroSection from "@/components/sections/HeroSection";
import Featured from "@/components/sections/Featured";
import LatestResearch from "@/components/sections/LatestResearch";
import Support from "@/components/sections/Support";
import Footer from "@/components/Footer";

// Thin white bars on the left & right edges
const EdgeSpacer = () => (
  <div className="relative h-px">
    <div className="absolute inset-y-0 left-0 w-1.5 md:w-3 bg-white pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-1.5 md:w-3 bg-white pointer-events-none" />
  </div>
);

export default function Home() {
  return (
    <>
      <HeroSection />

      <Featured />
      <LatestResearch />
      <Support />

      <EdgeSpacer />
      <Footer />
    </>
  );
}
