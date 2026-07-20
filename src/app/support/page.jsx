import InformationalPage from "@/components/InformationalPage";

export const metadata = {
  title: "Support | NaS Research",
  description: "Learn how to support and collaborate with NaS Research.",
};

const sections = [
  {
    title: "Collaborate",
    copy: "Researchers, engineers, clinicians, and scientific organizations can help shape projects through technical collaboration and shared expertise.",
  },
  {
    title: "Provide Resources",
    copy: "Compute, laboratory access, datasets, equipment, and professional services can meaningfully accelerate an independent research program.",
  },
  {
    title: "Fund the Work",
    copy: "Future sponsorship and philanthropic support will help NaS develop open tools, conduct experiments, and expand access to scientific infrastructure.",
  },
  {
    title: "Share the Mission",
    copy: "Introducing NaS to aligned researchers, institutions, funders, and builders is a simple way to strengthen the community around the work.",
  },
];

export default function SupportPage() {
  return (
    <InformationalPage
      eyebrow="Support NaS"
      title="Help ambitious scientific work move forward."
      introduction="NaS is currently founder-led and being built deliberately. We welcome thoughtful conversations with people and organizations that believe scientific tools should be more capable and more accessible."
      sections={sections}
      closingTitle="Interested in supporting NaS?"
      closingCopy="Formal support programs are still being developed. For now, reach out directly to start a conversation about collaboration, resources, or funding."
      actionLabel="Start a conversation"
    />
  );
}
