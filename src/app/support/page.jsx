import InformationalPage from "@/components/InformationalPage";

export const metadata = {
  title: "Support | NaS Research",
  description: "Learn how to support and collaborate with NaS Research.",
};

const sections = [
  {
    title: "Scientific collaboration",
    copy: "Researchers, clinicians, engineers, and domain specialists can contribute through technical discussion, research critique, evaluation design, data curation, and carefully defined collaborative projects.",
  },
  {
    title: "Independent review",
    copy: "Thoughtful criticism strengthens early work. Qualified reviewers can help examine assumptions, identify missing evidence, challenge technical claims, and improve the clarity and rigor of future publications.",
  },
  {
    title: "Compute and infrastructure",
    copy: "Access to appropriate compute, storage, datasets, software, laboratory resources, and technical services can materially accelerate the development and evaluation of independent scientific systems.",
  },
  {
    title: "Funding the work",
    copy: "Future sponsorship, research grants, and philanthropic support can help fund model evaluation, computing infrastructure, public research resources, and the careful expansion of the organization.",
  },
  {
    title: "Institutional introductions",
    copy: "Introductions to aligned laboratories, universities, hospitals, scientific organizations, funders, and experienced builders can help NaS develop the relationships required for durable research programs.",
  },
  {
    title: "Share the research",
    copy: "Reading, discussing, and sharing NaS publications helps the work reach people who can evaluate it, improve it, or contribute relevant expertise. Serious engagement is more valuable than attention alone.",
  },
];

export default function SupportPage() {
  return (
    <InformationalPage
      eyebrow="Support NaS"
      title="Help build durable capacity for independent science."
      introduction="NaS is founder-led and being built deliberately. We welcome thoughtful conversations with people and organizations that can strengthen the research through expertise, critical review, infrastructure, funding, or aligned institutional relationships."
      facts={[
        { label: "Current stage", value: "Early and founder-led" },
        { label: "Most useful now", value: "Expertise, review, and infrastructure" },
        { label: "Partnership standard", value: "Mission and scientific alignment" },
        { label: "First step", value: "A direct conversation" },
      ]}
      sections={sections}
      sectionLabel="Ways to contribute"
      sectionTitle="Contributions that make the research stronger."
      closingTitle="Interested in supporting NaS?"
      closingCopy="Formal sponsorship and support programs are still being developed. For now, contact the founder directly with a concise description of your interests, relevant expertise or resources, and the kind of involvement you have in mind."
      actionLabel="Start a conversation"
    />
  );
}
