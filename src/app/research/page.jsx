import InformationalPage from "@/components/InformationalPage";

export const metadata = {
  title: "Research | NaS Research",
  description: "Explore the scientific and computational research areas being developed at NaS Research.",
};

const sections = [
  {
    title: "Biomedical AI",
    copy: "We are developing specialized computational systems designed to help researchers interpret complex biomedical information and move from questions to testable ideas faster.",
  },
  {
    title: "Computational Biology",
    copy: "Our work connects biological data, scalable computing, and modern modeling techniques to support discovery across genetics, medicine, and biotechnology.",
  },
  {
    title: "Scientific Infrastructure",
    copy: "NaS is exploring tools that make advanced research workflows more accessible, reproducible, and useful to independent scientists and growing teams.",
  },
  {
    title: "Automated Discovery",
    copy: "Long term, we aim to connect intelligent software with laboratory automation so that scientific ideas can be evaluated with greater speed and rigor.",
  },
];

export default function ResearchPage() {
  return (
    <InformationalPage
      eyebrow="Research at NaS"
      title="Building tools for the next era of life science."
      introduction="NaS Research is an independent research organization working at the intersection of biology, computation, and artificial intelligence. This page is an early view of the programs we are developing."
      sections={sections}
      closingTitle="Research updates are coming."
      closingCopy="Detailed projects, publications, technical notes, and opportunities to collaborate will be added as the work develops."
      actionLabel="Discuss research"
    />
  );
}
