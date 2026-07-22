import InformationalPage from "@/components/InformationalPage";

export const metadata = {
  title: "About | NaS Research",
  description: "Why NaS exists, what guides the work, and how we are building better foundations for discovery across the life sciences.",
};

const sections = [
  {
    title: "Scientists should have better tools",
    copy: "The people pursuing difficult questions should have access to the strongest instruments we can build. NaS exists to give scientists better foundations for organizing knowledge, testing ideas, and moving from a question toward evidence.",
  },
  {
    title: "The life sciences are the field",
    copy: "Living systems do not divide themselves according to departments, products, or technical disciplines. We work across the life sciences because meaningful questions often cross those boundaries. Knowledge, methods, data, and experimentation should be able to meet where the problem requires them.",
  },
  {
    title: "Tools are not the destination",
    copy: "Models, software, data systems, and laboratory technologies matter only when they help someone understand more, test more carefully, or reach a question that was previously out of range. We build systems in service of scientific work, not technology for its own sake.",
  },
  {
    title: "The standard is evidence",
    copy: "Scientific credibility is earned through the work. We distinguish ideas from results, prototypes from validated systems, and ambition from demonstrated capability. Methods, sources, limitations, and corrections belong beside the claims they support.",
  },
  {
    title: "Hyde Park is home",
    copy: "NaS is being built in Hyde Park on Chicago’s South Side. The neighborhood brings serious inquiry, creativity, beauty, and community into close contact. It also keeps us near people and health challenges that scientific progress too often fails to reach.",
  },
  {
    title: "The long view",
    copy: "The ambition is larger than any single model, paper, or product. We are working toward an environment where researchers have stronger resources, more freedom to explore, and greater capacity to pursue questions that currently appear impossible.",
  },
];

export default function AboutPage() {
  return (
    <InformationalPage
      eyebrow="About NaS"
      title="Scientists should have better tools."
      introduction="NaS exists to give researchers the foundations, resources, and instruments to pursue difficult questions across the life sciences. We organize knowledge, build scientific systems, and create more room for discovery."
      status="Founder-led · Hyde Park, Chicago"
      facts={[
        { label: "Purpose", value: "Equip scientific discovery" },
        { label: "Field", value: "The life sciences" },
        { label: "Home", value: "Hyde Park, Chicago" },
        { label: "Current structure", value: "Founder-led" },
      ]}
      sections={sections}
      sectionLabel="What guides the work"
      sectionTitle="Build what helps serious people discover more."
      closingTitle="The work is the introduction."
      closingCopy="NaS will be defined by what we build, the quality of the evidence behind it, and whether it gives scientists greater freedom to pursue questions that matter."
      actionLabel="Read the research"
      actionHref="/research"
    />
  );
}
