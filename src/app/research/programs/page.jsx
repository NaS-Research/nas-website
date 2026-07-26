import InformationalPage from "@/components/InformationalPage";

export const metadata = {
  title: "Research Programs | NaS Research",
  description: "Explore NaS Core, the oncology research program, and the governed studies currently being developed at NaS Research.",
};

const sections = [
  {
    title: "NaS Core",
    copy: "NaS Core is the research system through which we turn a scientific question into a governed study. It records the question, protocol, data provenance, code revision, analysis, review, and release state so the path from evidence to claim can be examined and reproduced.",
  },
  {
    title: "Oncology research",
    copy: "Breast cancer research is the first serious proving ground for NaS Core. The oncology program is designed to test the complete research process, from question selection and literature review through data qualification, statistical analysis, external validation, and responsible publication.",
  },
  {
    title: "NAS-BRCA-001: Qualifying the system",
    copy: "Our first study uses public TCGA-BRCA data to reproduce the established association between pathologic stage and overall survival. Its purpose is to test whether NaS Core can enforce analysis gates, preserve provenance, retain failed diagnostics, and produce an honest platform judgment. A governed run has been completed, but its findings remain withheld during pre-publication review.",
  },
  {
    title: "NAS-BRCA-002: PAM50 reliability and abstention",
    copy: "Our proposed discovery study asks whether a fixed, patient-independent PAM50 procedure can identify analysis-ready, unstable, insufficient-data, and abstain states without claiming biological truth or clinical utility. The revised question remains in evidence review and bounded metadata feasibility work. Molecular and outcome analysis have not been authorized.",
  },
  {
    title: "Evidence that survives review",
    copy: "Numerical results come from deterministic executed code, not generated prose. Research plans are versioned before outcome analysis. Data receipts, checksums, diagnostics, failed models, null findings, limitations, and review decisions remain part of the permanent record rather than disappearing when they are inconvenient.",
  },
  {
    title: "The release must be earned",
    copy: "An active study is not a publication. Work remains outside the public research library until its protocol, evidence, analysis, limitations, and approvals are assembled into a frozen release. The web edition, figures, tables, citations, and version of record must all agree before NaS presents a result publicly.",
  },
];

export default function ResearchProgramsPage() {
  return (
    <InformationalPage
      eyebrow="Research programs"
      title="Research should be able to show its work."
      introduction="NaS Core is the system through which we develop research from question to release. It connects scientific reasoning, evidence, data, deterministic analysis, review, and publication without allowing any one layer to hide the others."
      status="Current research · Hyde Park, Chicago"
      facts={[
        { label: "Research system", value: "NaS Core" },
        { label: "Active program", value: "Oncology" },
        { label: "Current studies", value: "NAS-BRCA-001 and NAS-BRCA-002" },
        { label: "Release standard", value: "Reviewed, frozen, and reproducible" },
      ]}
      sections={sections}
      sectionLabel="Current program"
      sectionTitle="A research system tested through real questions."
      closingTitle="Public work begins after the gate."
      closingCopy="The research library contains work that NaS has released publicly. Current studies will enter it only after their evidence, analysis, limitations, and review records support a responsible release."
      actionLabel="Read published research"
      actionHref="/research"
    />
  );
}
