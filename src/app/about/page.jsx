import InformationalPage from "@/components/InformationalPage";

export const metadata = {
  title: "About | NaS Research",
  description: "Learn about the mission and long-term vision of NaS Research.",
};

const sections = [
  {
    title: "Our Mission",
    copy: "Build computational tools and scientific systems that help people investigate biology, medicine, and biotechnology with greater speed, depth, and independence.",
  },
  {
    title: "Our Approach",
    copy: "NaS combines focused research, practical software development, and a long-term view of scientific infrastructure. We begin with useful tools and build toward larger research capabilities.",
  },
  {
    title: "Independent by Design",
    copy: "NaS is currently led and operated by founder Dalron J. Robertson. Its early structure allows the research direction to remain focused, experimental, and responsive to new evidence.",
  },
  {
    title: "The Long View",
    copy: "Our ambition is to grow NaS into a durable research institution that connects advanced computing, automation, and the life sciences in service of meaningful discovery.",
  },
];

export default function AboutPage() {
  return (
    <InformationalPage
      eyebrow="About NaS"
      title="An independent home for ambitious life-science research."
      introduction="NaS Research was created to explore what becomes possible when modern computation, artificial intelligence, and scientific experimentation are developed as one connected system."
      sections={sections}
      closingTitle="We are at the beginning."
      closingCopy="The organization, its research programs, and its public resources will continue to take shape as the work progresses."
      actionLabel="Contact the founder"
    />
  );
}
