import InformationalPage from "@/components/InformationalPage";

export const metadata = {
  title: "Support | NaS Research",
  description: "Ways to strengthen NaS Research through expertise, critical review, infrastructure, resources, and focused collaboration.",
};

const sections = [
  {
    title: "Work with us",
    copy: "Researchers, clinicians, engineers, and specialists can contribute through focused technical discussion, evaluation design, data curation, and clearly defined projects. A useful collaboration begins with a specific question and a clear reason to work together.",
  },
  {
    title: "Challenge the work",
    copy: "Serious criticism makes research stronger. Qualified reviewers can examine assumptions, identify missing evidence, test technical claims, and improve the clarity of future publications. Agreement is less valuable than careful judgment.",
  },
  {
    title: "Expand our capabilities",
    copy: "Access to appropriate computing, storage, laboratory resources, software, and technical services can accelerate work that would otherwise remain out of reach. The right infrastructure matters when it is connected to a real scientific need.",
  },
  {
    title: "Share resources responsibly",
    copy: "Useful datasets, research materials, publications, and access to specialized facilities can open new directions. Any resource must be shared with appropriate permission, documentation, privacy protections, and respect for the people or communities represented in the data.",
  },
  {
    title: "Support specific research",
    copy: "Funding, sponsorship, or in-kind support is most useful when attached to a defined research need, such as evaluation, infrastructure, publication, or access to scientific resources. We are open to conversations grounded in the work rather than visibility alone.",
  },
  {
    title: "Connect serious people",
    copy: "A thoughtful introduction to a laboratory, university, hospital, scientific organization, funder, or experienced builder can be valuable when there is a clear point of connection. The aim is not a larger network. It is a more capable one.",
  },
];

export default function SupportPage() {
  return (
    <InformationalPage
      eyebrow="Support NaS"
      title="Help make the work stronger."
      introduction="The most valuable support improves what NaS can investigate, build, test, or publish. We welcome serious contributions of expertise, critical review, infrastructure, resources, and focused collaboration."
      status="Founder-led · Hyde Park, Chicago"
      facts={[
        { label: "Current focus", value: "Build and validate the work" },
        { label: "Most useful now", value: "Expertise, review, and infrastructure" },
        { label: "Working standard", value: "Clear purpose and scientific alignment" },
        { label: "First step", value: "A direct conversation" },
      ]}
      sections={sections}
      sectionLabel="Where support matters"
      sectionTitle="Contribute something the work can use."
      closingTitle="Start with a specific idea."
      closingCopy="NaS does not currently operate a public donation program. If you can contribute expertise, infrastructure, responsible access to resources, funding for a defined need, or a serious introduction, write with a concise proposal and the outcome you believe it could enable."
      actionLabel="Contact NaS"
    />
  );
}
