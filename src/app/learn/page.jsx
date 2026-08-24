import InformationalPage from "@/components/InformationalPage";

export const metadata = {
  title: "Learning | NaS Research",
  description:
    "Clear, carefully sourced learning guides across pharmacy and the life sciences from NaS Research.",
  alternates: { canonical: "/learn" },
};

const sections = [
  {
    title: "Pharmacy",
    copy: "The first collection will grow from topics encountered in pharmacy education, including pharmacology, therapeutics, medicinal chemistry, pharmacokinetics, patient care, and the biological foundations behind drug action.",
  },
  {
    title: "Built for understanding",
    copy: "Each guide will begin with the central question, establish the underlying biology, explain mechanisms and clinical relevance, define important terms, and separate foundational knowledge from details that require deeper study.",
  },
  {
    title: "Sources beside the explanation",
    copy: "References, publication dates, and review dates will remain visible. As standards and evidence change, guides can be corrected, expanded, and versioned without hiding what changed.",
  },
  {
    title: "Educational use",
    copy: "Learning guides are created for education and scientific discussion. They are not medical advice, clinical guidelines, or a substitute for current prescribing information, institutional policy, or professional judgment.",
  },
];

export default function LearningPage() {
  return (
    <InformationalPage
      eyebrow="NaS Learning"
      title="Understand the science. Keep building from there."
      introduction="Learning is where NaS will organize clear, carefully sourced guides across pharmacy and the life sciences. The collection will begin with the subjects being studied now and grow one serious topic at a time."
      status="Educational material · Pharmacy and life sciences"
      facts={[
        { label: "First collection", value: "Pharmacy" },
        { label: "Format", value: "Structured learning guides" },
        { label: "Standard", value: "Clear, sourced, and revisable" },
        { label: "Purpose", value: "Education and scientific discussion" },
      ]}
      sections={sections}
      sectionLabel="The learning library"
      sectionTitle="A durable place for what we learn."
      closingTitle="The first guide begins with the next topic."
      closingCopy="Each new subject can become part of a connected learning library instead of disappearing into isolated notes. Over time, the collection should make relationships across drugs, diseases, biological systems, and scientific methods easier to see."
      actionLabel="Explore the research"
      actionHref="/research"
    />
  );
}
