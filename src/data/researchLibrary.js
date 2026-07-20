export const researchItems = [
  {
    slug: "nicole-biomedical-language-model",
    title: "Nicole: A Biomedical Language Model for Scientific Discovery",
    shortTitle: "Nicole Model Overview",
    type: "Model Card",
    area: "Biomedical AI",
    status: "In development",
    date: "July 20, 2026",
    dateISO: "2026-07-20",
    version: "0.1",
    authors: ["Dalron J. Robertson"],
    readTime: "9 min read",
    pdfUrl: null,
    abstract:
      "An early overview of Nicole, NaS Research’s biomedical language-model initiative, including its intended scientific role, development principles, and current limitations.",
    summary:
      "Nicole is being developed as a specialized interface for exploring biomedical knowledge and supporting carefully scoped scientific workflows. This document describes the direction of the project; it does not represent a completed or clinically validated system.",
    sections: [
      {
        id: "purpose",
        title: "1. Purpose",
        paragraphs: [
          "NaS Research is exploring how specialized language models can help researchers navigate complex biomedical information, formulate clearer questions, and connect evidence across disciplines. Nicole is the working name for that effort.",
          "The goal is not to replace scientific judgment. The project is intended to investigate how computational systems can support literature exploration, research planning, and communication while keeping human expertise at the center of consequential decisions.",
        ],
      },
      {
        id: "research-context",
        title: "2. Research context",
        paragraphs: [
          "Biomedical research spans rapidly changing literature, heterogeneous datasets, and specialized vocabularies. General-purpose systems can be useful, but scientific work also requires provenance, uncertainty awareness, domain constraints, and clear boundaries between hypothesis and evidence.",
          "Nicole is therefore being approached as a research platform rather than a finished assistant. Its design will be shaped by evaluation, documented limitations, and feedback from qualified domain experts.",
        ],
      },
      {
        id: "intended-capabilities",
        title: "3. Intended capabilities",
        paragraphs: [
          "Initial areas of investigation include biomedical question answering, literature-oriented synthesis, terminology clarification, research-context retrieval, and structured exploration of scientific topics.",
          "Any capability described here is aspirational until supported by published evaluations. Future versions of this document will distinguish demonstrated performance from planned functionality and will link to the relevant evidence.",
        ],
      },
      {
        id: "responsible-development",
        title: "4. Responsible development",
        paragraphs: [
          "Biomedical systems require careful treatment of privacy, safety, bias, source quality, and potential misuse. NaS intends to document evaluations and known limitations alongside any public release of Nicole.",
          "Nicole is not a medical professional and is not intended to diagnose, treat, or replace consultation with qualified clinicians. Research outputs must be independently verified before they inform scientific or clinical decisions.",
        ],
      },
      {
        id: "current-status",
        title: "5. Current status",
        paragraphs: [
          "Nicole remains in active development. The current public interface is an early demonstration, and the surrounding model, retrieval, evaluation, and governance systems will continue to evolve.",
          "This model overview will be versioned as the project matures. Formal architecture details, benchmarks, datasets, and evaluation results will be added only when they are ready for responsible publication.",
        ],
      },
    ],
  },
  {
    slug: "introducing-nas-cortex",
    title: "The NaS Cortex: A Knowledge Architecture for the Life Sciences",
    shortTitle: "The NaS Cortex",
    type: "White Paper",
    area: "Scientific Infrastructure",
    status: "Published",
    date: "May 12, 2025",
    dateISO: "2025-05-12",
    version: "1.0",
    authors: ["NaS"],
    readTime: "35 min read",
    pdfUrl: "/research/papers/nas-cortex-knowledge-architecture.pdf",
    abstract:
      "A knowledge architecture for the life sciences built around eight domain-specific gyri, sparse expert activation, incremental training, and a staged compute roadmap for Nicole.",
    summary:
      "The NaS Cortex proposes an intelligent-systems stack designed to shorten the path from raw life-science data to validated therapies. The architecture organizes knowledge into eight specialized gyri coordinated by Nicole, with selective ingestion, sparse activation, retrieval, adapter-based updates, and staged hardware scaling.",
    publicationNote:
      "This web edition presents the white paper’s principal sections and findings. The original 31-page PDF is the complete version of record, including all subsections, tables, projections, disclaimers, and references.",
    sections: [
      {
        id: "biological-imperative",
        title: "1. Introduction: The Biological Imperative",
        paragraphs: [
          "Life-science discovery faces a tempo gap: experiments generate new hypotheses faster than wet-lab throughput, regulatory processes, and human analysis can resolve them. Genomics, multi-omics, and clinical systems produce data at a scale that cannot be interpreted manually in real time.",
          "The paper positions Nicole as a coordinating agent for literature, in-silico screening, laboratory protocols, and iterative research. Before that orchestration is possible, Nicole requires a structured knowledge brain capable of integrating new scientific findings while preserving specialized expertise.",
        ],
      },
      {
        id: "time-outruns-bench",
        title: "2. When Time Outruns the Bench",
        paragraphs: [
          "Biological investigation behaves like a maze that expands with each answer. Mutations, resistance, environmental consequences, and new experimental variables continually reopen questions that appeared settled. Linear increases in staffing improve throughput, but they do not match the combinatorial growth of the problem space.",
          "The paper argues that machine-scale computation can reduce this gap. GPU clusters, predictive models, autonomous laboratories, large scientific corpora, and high-throughput storage provide acceleration, but they require a common intelligence and knowledge architecture to coordinate their outputs.",
        ],
      },
      {
        id: "nas-brain",
        title: "3. The NaS Brain",
        paragraphs: [
          "The proposed cortex contains eight inaugural digital gyri: Autoimmune and Inflammatory Disease; Chronic and Metabolic Disease; Genomics and Personalized Medicine; Infectious Disease and Epidemiology; Neuro and Degenerative Disease; Oncology; Regenerative Medicine; and Systems Biology.",
          "Each gyrus begins as a focused dense transformer and may mature into a sparse Mixture of Experts. Nicole sits above the constellation as an orchestration layer, selecting relevant gyri, reconciling their outputs, and returning an integrated response. Sparse routing is intended to activate only the experts relevant to a token, conserving compute while retaining specialized capacity.",
          "The training roadmap emphasizes filtered corpora, reversible pruning, retrieval-augmented external memory, LoRA and IA3 adapters, and scheduled evaluation of linguistic fidelity, domain reasoning, and citation grounding. The paper explicitly identifies robust safety, regulatory readiness, security, and clinical governance as future requirements beyond the internal prototype phase.",
        ],
      },
      {
        id: "prototype",
        title: "4. Prototype Experiments and Early Constraints",
        paragraphs: [
          "The initial pilot used a TinyLLaMA-1B life-science gyrus trained on a 16 GB M1 Mac mini. The first full run processed 36,451 JSON-Lines records from two PubMed snapshots, producing approximately 31 million domain tokens. Manual review of 100 queries exposed expected early-stage limitations including abstract repetition, recycled phrases, weak evidence synthesis, and placeholder citations.",
          "The experiments showed that hardware throughput and unified-memory pressure became practical constraints before theoretical parameter capacity. Longer sequences and larger corpora substantially increased training time, motivating tighter data selection, smaller adapter updates, benchmark-driven iteration, and a staged move to more capable hardware.",
          "The paper clearly labels these results as preliminary internal benchmarks rather than comprehensive validation. Standardized comparisons, citation-accuracy testing, and statistical evaluation are identified as necessary future work.",
        ],
      },
      {
        id: "compute-bottleneck",
        title: "5. Compute Bottleneck and the Hardware Fork",
        paragraphs: [
          "The paper evaluates two broad scaling paths: NVIDIA GPU systems optimized for training throughput and Apple Silicon clusters optimized for unified memory, lower power consumption, and quieter operation. NVIDIA offers the more mature CUDA, NCCL, DeepSpeed, and sharding ecosystem, while high-memory Mac Studio systems can keep larger models resident with substantially lower acoustic and power demands.",
          "The proposed interim strategy continues early prototyping on available Apple hardware, evaluates a high-memory Mac Studio path for inference and adapter updates, and preserves a transition to NVIDIA-based training as model size, funding, and validated computational requirements grow. All performance projections are presented as optimistic estimates requiring real-world benchmarking.",
        ],
      },
      {
        id: "distributed-training",
        title: "6. Distributed-Training Gap",
        paragraphs: [
          "A central engineering challenge is the absence of a production-grade Apple equivalent to NVIDIA NCCL for distributed model training. The paper compares experimental MLX distributed tooling, EXO Labs, CPU-based Gloo coordination, a lightweight gRPC fallback, and temporary CUDA cloud capacity.",
          "The plan of record is to benchmark one-, two-, and three-node configurations, measure actual scaling efficiency, retain MLX as a fallback, and avoid blocking core model development on an immature collective layer. Heavy multi-epoch work can move to CUDA while trained weights return to quieter systems for inference and incremental updates.",
        ],
      },
      {
        id: "conclusion",
        title: "7. Conclusion: Where NaS Goes Next",
        paragraphs: [
          "The roadmap is evolutionary: establish the cortical architecture, prioritize quality over raw corpus volume, phase hardware pragmatically, validate distributed systems before scaling them, and publish stronger safety and performance evidence as the work matures.",
          "Immediate milestones in the paper include completing internal audits of the eight foundational gyri, evaluating distributed scaling, and attempting cross-domain expert fusion only after multiple gyri stabilize. Collaboration is invited across data curation, retrieval, efficient training, and scientific evaluation.",
        ],
      },
      {
        id: "references",
        title: "8. References",
        paragraphs: [
          "The complete paper cites work on SARS-CoV-2 ensemble docking, Switch Transformers, LoRA, retrieval-augmented generation, NVIDIA A100 architecture, AlphaFold, and the SAMPLE self-driving laboratory platform. Full bibliographic references appear in the PDF version of record.",
        ],
      },
    ],
  },
  {
    slug: "chicago-our-chosen-home",
    title: "Chicago: Our Chosen Home",
    shortTitle: "Chicago: Our Chosen Home",
    type: "Release",
    area: "Institutional",
    status: "Published",
    date: "May 8, 2025",
    dateISO: "2025-05-08",
    version: "1.0",
    authors: ["NaS Research"],
    readTime: "4 min read",
    pdfUrl: null,
    abstract:
      "Why NaS Research is being built in Chicago and how the city’s scientific, medical, and civic institutions align with its long-term mission.",
    summary:
      "Chicago brings together world-class medicine, universities, engineering, computing, and a tradition of building institutions that serve the public. NaS is proud to call it home.",
    sections: [
      {
        id: "why-chicago",
        title: "1. Why Chicago",
        paragraphs: [
          "Chicago is a city of researchers, clinicians, engineers, educators, and builders. Its universities, hospitals, national laboratories, and biotechnology community make it a natural environment for ambitious life-science work.",
          "NaS is being shaped with that environment in mind: rigorous, practical, collaborative, and connected to the communities around it.",
        ],
      },
      {
        id: "institution-building",
        title: "2. Building an institution",
        paragraphs: [
          "The long-term goal is to build durable scientific capacity rather than a temporary project. Place matters to that ambition. Institutions grow through relationships, trust, and sustained participation in a local ecosystem.",
        ],
      },
      {
        id: "commitment",
        title: "3. Our commitment",
        paragraphs: [
          "As NaS develops, it intends to contribute to Chicago through research, collaboration, education, and the creation of scientific tools that expand what local researchers and builders can do.",
        ],
      },
    ],
  },
  {
    slug: "toward-automated-discovery",
    title: "Toward Automated Discovery: Connecting Models, Data, and Experiments",
    shortTitle: "Toward Automated Discovery",
    type: "Technical Report",
    area: "Laboratory Automation",
    status: "In development",
    date: "July 2026",
    dateISO: "2026-07-01",
    version: "0.1",
    authors: ["Dalron J. Robertson"],
    readTime: "11 min read",
    pdfUrl: null,
    abstract:
      "A preliminary systems view of how computational models, structured data, and laboratory automation could support more iterative scientific workflows.",
    summary:
      "This early technical direction explores the interfaces required to connect computational reasoning with measurable experiments while preserving traceability and human oversight.",
    sections: [
      {
        id: "motivation",
        title: "1. Motivation",
        paragraphs: [
          "Scientific progress depends on cycles of observation, hypothesis, experiment, and revision. Better computational coordination could make parts of that cycle faster without weakening the standards used to evaluate evidence.",
        ],
      },
      {
        id: "system-boundaries",
        title: "2. System boundaries",
        paragraphs: [
          "Any automated workflow must define what a model may propose, what software may execute, which operations require human approval, and how every action is recorded for later review.",
        ],
      },
      {
        id: "proposed-layers",
        title: "3. Proposed layers",
        paragraphs: [
          "The working architecture separates knowledge retrieval, planning, simulation, experiment execution, measurement, and evaluation. This separation supports independent testing and clearer accountability.",
        ],
      },
      {
        id: "open-questions",
        title: "4. Open questions",
        paragraphs: [
          "Future research must address experimental reliability, safety constraints, provenance, uncertainty, access control, and the appropriate role of autonomous systems in consequential scientific environments.",
        ],
      },
    ],
  },
];

export const researchTypes = [
  "All",
  "Publications",
  "Model Cards",
  "Research Notes",
  "Releases",
];

export function getResearchItem(slug) {
  return researchItems.find((item) => item.slug === slug);
}
