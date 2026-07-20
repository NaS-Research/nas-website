import InformationalPage from "@/components/InformationalPage";

export const metadata = {
  title: "About | NaS Research",
  description: "Learn about the mission and long-term vision of NaS Research.",
};

const sections = [
  {
    title: "The mission",
    copy: "NaS exists to shorten the distance between a scientific question and a useful answer. We are building computational tools and research systems that can help people investigate biology, medicine, and biotechnology with greater speed, depth, and independence.",
  },
  {
    title: "Computation as infrastructure",
    copy: "Modern biology produces more information than any individual can reasonably follow. Our work explores how specialized models, structured knowledge, retrieval systems, scalable compute, and eventually laboratory automation can operate as one scientific infrastructure layer.",
  },
  {
    title: "Independent by design",
    copy: "NaS is currently led and operated by founder Dalron J. Robertson. This early structure keeps the research direction focused, allows ideas to be tested without unnecessary bureaucracy, and makes it possible to build deliberately before expanding the institution.",
  },
  {
    title: "Evidence before claims",
    copy: "Scientific credibility has to be earned. We intend to distinguish prototypes from validated systems, publish limitations alongside capabilities, preserve sources and citations, and update public research as stronger evidence becomes available.",
  },
  {
    title: "Built in Chicago",
    copy: "NaS is being built in Chicago, a city shaped by medicine, universities, engineering, national laboratories, and institution-building. We see the city as a serious home for long-term scientific and technological work.",
  },
  {
    title: "The long view",
    copy: "The ambition is larger than a single model or product. NaS is working toward a durable research institution that connects advanced computing, scientific knowledge, and experimental systems in service of meaningful discovery.",
  },
];

export default function AboutPage() {
  return (
    <InformationalPage
      eyebrow="About NaS"
      title="An independent research institution for the life sciences."
      introduction="NaS Research explores what becomes possible when biological knowledge, artificial intelligence, advanced computing, and scientific experimentation are developed as parts of one connected system."
      facts={[
        { label: "Focus", value: "Life sciences + intelligent systems" },
        { label: "Operating model", value: "Independent and founder-led" },
        { label: "Home", value: "Chicago, Illinois" },
        { label: "Public commitment", value: "Research, methods, and limitations" },
      ]}
      sections={sections}
      sectionLabel="How we are building"
      sectionTitle="A focused foundation for long-term scientific work."
      closingTitle="The institution is still taking shape."
      closingCopy="NaS is at an early stage. Its research programs, technical systems, collaborations, and public resources will grow carefully as the underlying work earns that growth."
      actionLabel="Contact the founder"
    />
  );
}
