import InformationalPage from "@/components/InformationalPage";

export const metadata = {
  title: "Research Programs | NaS Research",
  description: "Explore the scientific and computational research programs being developed at NaS Research.",
};

const sections = [
  {
    title: "Biomedical intelligence",
    copy: "We are investigating specialized language and reasoning systems for biomedical knowledge work. Nicole is the central initiative: a research platform intended to help organize literature, connect evidence across domains, and support carefully scoped scientific workflows.",
  },
  {
    title: "The NaS Cortex",
    copy: "The Cortex is our proposed knowledge architecture for the life sciences. It organizes expertise into domain-specific gyri that can be updated, evaluated, and selectively coordinated rather than forcing every biological discipline into one undifferentiated system.",
  },
  {
    title: "Computational biology",
    copy: "This program connects biological data, scientific literature, modern modeling, and scalable compute. Areas of interest include genomics, disease biology, systems-level reasoning, and methods that make large bodies of evidence more tractable.",
  },
  {
    title: "Scientific infrastructure",
    copy: "Capable research depends on more than a model. We are exploring retrieval, provenance, evaluation, data pipelines, efficient training, distributed systems, and interfaces that make computational research more reproducible and useful.",
  },
  {
    title: "Automated discovery",
    copy: "Our long-term direction is to connect computational reasoning with simulation, measurement, and laboratory automation. Any such system must preserve traceability, clear authorization boundaries, human oversight, and independent verification.",
  },
  {
    title: "Evaluation and governance",
    copy: "Biomedical systems require unusually high standards. This program focuses on source grounding, uncertainty, privacy, security, misuse prevention, expert review, and the difference between promising internal results and independently validated performance.",
  },
];

export default function ResearchProgramsPage() {
  return (
    <InformationalPage
      eyebrow="Research programs"
      title="Building the computational foundations of life-science discovery."
      introduction="NaS works across knowledge systems, biomedical intelligence, computational biology, and scientific infrastructure. The programs are connected by one objective: make rigorous scientific iteration faster without weakening the standards used to evaluate evidence."
      facts={[
        { label: "Core initiative", value: "Nicole" },
        { label: "Knowledge architecture", value: "The NaS Cortex" },
        { label: "Research mode", value: "Computational and systems-focused" },
        { label: "Development principle", value: "Human oversight and documented limits" },
      ]}
      sections={sections}
      sectionLabel="Programs"
      sectionTitle="From biological questions to dependable scientific systems."
      closingTitle="Explore the research library."
      closingCopy="The public library is the source for NaS publications, model documentation, research notes, and institutional releases. It will grow as work becomes ready for responsible publication."
      actionLabel="View publications"
      actionHref="/research"
    />
  );
}
