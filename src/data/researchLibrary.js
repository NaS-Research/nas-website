import { cortexPaperSections } from "@/data/cortexPaper";
import { cortexNativeVisualsBySection } from "@/data/cortexNativeVisuals";

export const researchItems = [
  {
    slug: "introducing-nas-cortex",
    title: "The NaS Cortex: A Knowledge Architecture for the Life Sciences",
    shortTitle: "The NaS Cortex",
    type: "White Paper",
    area: "Scientific Infrastructure",
    date: "May 12, 2025",
    dateISO: "2025-05-12",
    version: "1.0",
    authors: ["NaS"],
    readTime: "42 min read",
    pdfUrl: "/research/papers/nas-cortex-knowledge-architecture.pdf",
    heroImage: "/research/cortex/visuals/nicole-digital-cortex-hero.png",
    abstract:
      "A knowledge architecture for the life sciences built around eight domain-specific gyri, sparse expert activation, incremental training, and a staged compute roadmap for Nicole.",
    summary:
      "The NaS Cortex proposes an intelligent-systems stack designed to shorten the path from raw life-science data to validated therapies. The architecture organizes knowledge into eight specialized gyri coordinated by Nicole, with selective ingestion, sparse activation, retrieval, adapter-based updates, and staged hardware scaling.",
    publicationNote:
      "This complete web edition is provided for accessible reading and navigation. The original 31-page PDF remains the fixed version of record.",
    sections: cortexPaperSections,
    visualsBySection: cortexNativeVisualsBySection,
    overviewSections: [
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
    date: "May 8, 2025",
    dateISO: "2025-05-08",
    updatedDate: "July 20, 2026",
    updatedDateISO: "2026-07-20",
    version: "2.0",
    authors: ["NaS Research"],
    readTime: "18 min read",
    pdfUrl: null,
    pdfStatus: "none",
    heroVideo: "/assets/videos/ChicagoThree.mp4#t=2",
    abstract:
      "Why NaS Research chose Chicago: a life-science, medical, manufacturing, educational, and global city with the depth required to build a durable scientific institution.",
    summary:
      "NaS chose Chicago because scientific institutions need more than laboratory space. They need research universities, academic medical centers, pharmaceutical and medical-device companies, manufacturing capability, logistics, global access, skilled people, cultural depth, and communities worth serving. Chicago brings those assets together at continental scale while retaining room for a new institution to help shape what comes next.",
    publicationNote:
      "Originally published May 8, 2025. Substantially expanded and updated July 20, 2026. Statistics and institutional descriptions are sourced below and may change over time.",
    sections: [
      {
        id: "a-place-for-an-institution",
        title: "1. A Place for an Institution",
        paragraphs: [
          "Choosing a home for NaS was not a branding exercise. The place where a research institution is built affects the people it can learn from, the infrastructure it can reach, the problems it encounters, the standards it absorbs, and the community to which it becomes accountable. A durable institution grows through repeated contact: with scientists and clinicians, with students and manufacturers, with patients and neighborhoods, with funders and critics, and with other organizations whose work has survived long enough to become part of a city’s fabric.",
          "Chicago is unusually suited to that kind of institution-building. It is a global city at the center of the continent; a university city, a hospital city, a manufacturing city, a transportation city, and a city of neighborhoods. Its scientific assets are not confined to one campus or one industry. They stretch from Hyde Park to Streeterville, through the Illinois Medical District and Fulton Market, into the pharmaceutical and medical-device corridor of Lake County, and outward to national laboratories, community colleges, production facilities, and logistics networks across northern Illinois.",
          "NaS chose Chicago because our ambitions require that full system. We want to work across biological knowledge, artificial intelligence, advanced computing, drug discovery, and eventually experimental infrastructure. Chicago does not offer a single preassembled answer to that mission. It offers the more valuable thing: a dense set of serious capabilities, connected by geography and civic life, with room for a new research organization to contribute.",
        ],
      },
      {
        id: "life-science-scale",
        title: "2. A Life-Science Economy at Meaningful Scale",
        paragraphs: [
          "Greater Chicago already operates at a scale that matters to the life sciences. World Business Chicago reports more than 90,000 life-science professionals across the region and more than $45 billion in life-science gross regional product. It identifies the metro as a national center for biotechnology, medical technology, health innovation, and medical-device manufacturing. Those numbers matter because scientific ecosystems become more resilient when expertise exists across many employers and disciplines rather than inside a single dominant company.",
          "The region’s geography creates several complementary clusters. Downtown and the Near West Side are adding laboratories, incubators, university-linked programs, and company-building infrastructure. The North Side and northern suburbs connect research hospitals and universities to established pharmaceutical, diagnostics, device, and healthcare companies. Lake County contains one of the country’s largest concentrations of life-science companies and the largest such concentration in the Midwest, according to Illinois’ economic growth plan.",
          "This is not yet Boston-Cambridge or the Bay Area, and pretending otherwise would weaken the argument for Chicago. The region has historically produced more biomedical research than it has converted into locally scaled biotechnology companies. Capital, experienced company-building talent, and dense translational infrastructure remain areas for growth. But that gap is also part of the opportunity. Chicago has the research base, industrial history, workforce, and civic scale to build a stronger translation engine, and new institutions can matter here in ways they might not in an already saturated ecosystem.",
        ],
      },
      {
        id: "universities-and-medicine",
        title: "3. Universities, Medical Schools, and Academic Medicine",
        paragraphs: [
          "Chicago’s strongest scientific advantage is the density of institutions that create, test, and teach biomedical knowledge. Northwestern University, the University of Chicago, and the University of Illinois Chicago form three major research anchors with distinct strengths and patient communities. The Chicago Biomedical Consortium was created around these universities precisely because collaboration across them can move discoveries further than any institution working alone.",
          "Northwestern’s Feinberg School of Medicine sits in downtown Chicago within a major academic medical environment. Feinberg reports $695.4 million in awards for the 2024-2025 academic year and maintains 34 research core facilities across its Chicago and Evanston campuses. Its relationships with Northwestern Medicine, Lurie Children’s research programs, Shirley Ryan AbilityLab, the Jesse Brown VA Medical Center, and other affiliates connect fundamental science, engineering, clinical investigation, rehabilitation, and patient care.",
          "On the South Side, the University of Chicago places the Pritzker School of Medicine, biological and physical sciences, molecular engineering, and UChicago Medicine within one interdisciplinary environment. Pritzker reports $358 million in fiscal-year 2024 NIH awards to the university and affiliated hospitals. Its location on the main university campus makes medicine part of a larger intellectual system that includes computation, engineering, public policy, economics, and the physical sciences. This is the kind of boundary-crossing environment required for modern biological research.",
          "UIC adds the scale and public mission of a major urban research university and academic health enterprise. Its College of Medicine, founded in 1882, is one of the largest medical schools in the United States and operates across Chicago, Peoria, and Rockford. In Chicago, it sits within the Illinois Medical District alongside colleges of pharmacy, nursing, dentistry, applied health sciences, and public health. That concentration matters for work that must connect discovery with clinical practice, public health, implementation, and the realities of caring for a large and diverse population.",
          "The wider region extends the network further: Rosalind Franklin University in North Chicago; Loyola University Chicago and its health sciences campus; Rush University and Rush University Medical Center; the Illinois Institute of Technology; DePaul; and other institutions that educate clinicians, scientists, engineers, data specialists, and operators. Argonne National Laboratory and Fermilab add national-scale computing, physics, materials, and engineering capability. Together, these organizations make Chicago less a collection of isolated campuses than a broad scientific landscape.",
        ],
      },
      {
        id: "pharmacy-and-drug-discovery",
        title: "4. Pharmacy, Drug Discovery, and Translational Science",
        paragraphs: [
          "For an organization interested in medicines and biomedical intelligence, Chicago’s pharmacy tradition is especially important. UIC’s Retzky College of Pharmacy began as the Chicago College of Pharmacy in 1859, making it one of the oldest pharmacy colleges in the United States. The college describes its program as the country’s largest and most comprehensive, with more than 200 clinical faculty and seven college-run ambulatory pharmacies. It is also a major research institution working across drug discovery and development, infectious disease, cancer, women’s health, pharmacoepidemiology, personalized medicine, and community health outcomes.",
          "This combination of pharmaceutical science and clinical practice is exactly what translation requires. Medicinal chemistry, pharmacognosy, drug delivery, molecular biology, health outcomes, pharmacy practice, and patient care sit within one academic health enterprise. UIC’s pharmaceutical-sciences programs are located in the Illinois Medical District, near hospitals, research laboratories, public-health expertise, and a deeply varied patient population.",
          "The city’s medical schools and hospitals add clinical research, trial infrastructure, disease-specific institutes, biobanks, imaging, and real-world care environments. Chicago’s value is not simply the number of institutions; it is the possibility of moving among levels of inquiry: from molecular mechanism to therapeutic design, from model to measurement, and from a statistical signal to the conditions under which care is actually delivered.",
        ],
      },
      {
        id: "industry-and-manufacturing",
        title: "5. An Industry Base That Reaches from Discovery to Manufacturing",
        paragraphs: [
          "Chicago’s life-science economy is not purely academic. Northern Illinois is home to companies whose work spans research, drug development, diagnostics, devices, nutrition, manufacturing, regulatory operations, and global commercialization. AbbVie’s world headquarters and 570-acre North Chicago campus bring together discovery research, development sciences, genomics, clinical work, regulatory functions, manufacturing, and other capabilities across immunology, neuroscience, oncology, aesthetics, and specialty medicine. Abbott, which began in a Chicago pharmacy, is headquartered at Abbott Park and operates globally across diagnostics, medical devices, nutrition, and medicines.",
          "The regional company base also includes Baxter’s long-standing Deerfield presence; Astellas Pharma US in Northbrook; Fresenius Kabi, Lundbeck, CSL Behring, Horizon’s legacy operations, medical-device and diagnostics companies, contract manufacturers, suppliers, and specialized service organizations throughout the suburbs. These companies create an experienced workforce that understands what happens after a promising experiment: process development, quality systems, clinical operations, regulatory strategy, production, distribution, and support at global scale.",
          "Recent investment shows that this base is not merely historical. In 2025 Vantive, the kidney and vital-organ therapy company separated from Baxter, announced a $23 million U.S. headquarters investment in Deerfield. Illinois also announced a $195 million AbbVie expansion in North Chicago to strengthen active-pharmaceutical-ingredient manufacturing. Germany-based Vetter Pharma has been developing a 160,000-square-foot commercial manufacturing site in Des Plaines after establishing its earlier U.S. clinical manufacturing operation in Skokie. These projects reinforce a distinctive regional advantage: Chicago can connect research and company formation to the physical work of making complex healthcare products.",
          "That connection matters to NaS. Scientific software cannot be designed as though discovery ends when a model produces an answer. Medicines and devices must be formulated, produced, tested, documented, shipped, monitored, and improved. A region that understands both computation and production offers a more honest environment for building systems intended to affect the material world.",
        ],
      },
      {
        id: "translation-ecosystem",
        title: "6. A Translation Ecosystem Taking Shape",
        paragraphs: [
          "Chicago is building more of the connective tissue that turns academic work into companies and shared platforms. The Chicago Biomedical Consortium works across Illinois universities to identify promising science, provide milestone-based support, and develop biotechnology companies rooted in the region. MATTER supports healthcare innovation; Portal Innovations and Fulton Labs add company-building and laboratory infrastructure; university technology-transfer offices and hospital innovation programs provide additional routes from research to application.",
          "The Chan Zuckerberg Biohub Chicago represents an important vote of confidence in the city’s collaborative capacity. Built around the University of Chicago, Northwestern, and UIC, the Biohub is focused on new technologies for understanding inflammation and human tissue, with laboratories, meeting space, and a biofoundry intended to support cross-institutional science. Its selection of Chicago demonstrated that the city’s universities can compete together for major scientific platforms rather than only as separate institutions.",
          "The region’s investments in quantum technology are relevant as well. The Illinois Quantum and Microelectronics Park on Chicago’s South Side is designed to connect government, universities, national laboratories, and industry. Quantum computing is not a near-term substitute for today’s biomedical computing, but the park’s cryogenic, microelectronics, networking, and research infrastructure could create long-range capabilities for chemistry, materials, sensing, optimization, and scientific computation.",
          "What makes this moment compelling is not that Chicago’s ecosystem is finished. It is that multiple layers are forming at once: laboratories, incubators, translational funding, venture-building organizations, advanced computing, and public investment. NaS wants to participate in that formation by collaborating where useful, publishing what we learn, and helping create tools that allow more of the region’s science to become durable capability.",
        ],
      },
      {
        id: "continental-infrastructure",
        title: "7. The Infrastructure of a Continental City",
        paragraphs: [
          "Chicago’s central location is often described casually, but for science and manufacturing it is a concrete operational advantage. The metropolitan region is North America’s principal rail interchange: the Chicago Metropolitan Agency for Planning reports that roughly one quarter of U.S. freight trains and half of all intermodal trains pass through the region. Ten interstate highways, six Class I railroads, O’Hare’s air-cargo system, and access to Great Lakes and Mississippi River maritime networks connect the city to suppliers, research partners, production sites, and customers across the continent.",
          "In 2023, nearly 700 million tons of goods valued at more than $1 trillion moved to, from, or within northeastern Illinois. In 2024, the regional freight industry employed more than 210,000 people across more than 14,000 establishments. The scale can create congestion and environmental burdens that require serious planning, but it also means that Chicago possesses logistics knowledge and physical infrastructure few American regions can match.",
          "The same network supports one of the country’s largest industrial markets and a deep manufacturing economy. For biotechnology, diagnostics, laboratory automation, medical devices, and eventually robotic scientific infrastructure, this matters. Components, reagents, instruments, cold-chain shipments, replacement parts, and finished goods do not move through abstractions. They move through airports, rail yards, highways, warehouses, and production floors. Chicago knows how to move physical systems at scale.",
        ],
      },
      {
        id: "global-access",
        title: "8. Access to the Country and the World",
        paragraphs: [
          "O’Hare makes Chicago unusually accessible for a city in the middle of the continent. As of July 2026, the Chicago Department of Aviation listed approximately 1,154 daily direct flights from O’Hare to 197 U.S. cities and 150 daily direct flights to 69 international destinations. That reach makes it practical to maintain relationships with laboratories, universities, companies, conferences, investors, and collaborators across North America, Europe, Asia, and beyond without treating the coasts as the only gateways to the world.",
          "Chicago is also one of the few cities with direct rail service to two major airports. The CTA Blue Line serves O’Hare and the Orange Line serves Midway, while Metra and Amtrak connect downtown to the suburbs and other cities. The regional network is imperfect and must continue improving, but it gives students, employees, visitors, and partners multiple ways to reach the city and move through it.",
          "Central Time offers a quieter but useful advantage. A Chicago team can work with both coasts during the normal day and maintain manageable overlap with Europe. For a research organization intended to collaborate nationally while remaining rooted in one place, Chicago is not peripheral. It is a practical meeting point.",
        ],
      },
      {
        id: "education-and-talent",
        title: "9. Education as a Regional Pipeline",
        paragraphs: [
          "A scientific institution needs a pipeline wider than elite graduate programs. Chicago’s educational system stretches from neighborhood schools and career programs through community colleges, research universities, medical schools, and postgraduate training. Chicago Public Schools offers career and technical education pathways in health sciences, information technology, agricultural science, manufacturing, and pre-engineering, along with dual-credit and early-college options. These programs create opportunities for students to encounter scientific and technical work before deciding that such careers belong to someone else.",
          "City Colleges of Chicago connects accessible education to the region’s economy through programs in healthcare, natural sciences, advanced manufacturing, information technology, and transportation and logistics. Truman College’s biotechnology associate program includes hands-on training in the biomanufacturing of products using bacterial, yeast, algal, and eukaryotic cell systems. That is an unusually direct bridge between community-college education and the technical workforce required by a growing biotechnology sector.",
          "Chicago’s school systems are large, varied, and unequal; they should not be romanticized. Access to excellent education is not distributed evenly across neighborhoods, and any institution claiming the city as home inherits a responsibility to understand that reality. The strength of Chicago is not that every pathway is already fair. It is that the city contains the schools, colleges, universities, employers, civic organizations, and communities from which stronger pathways can be built.",
          "For NaS, education is not separate from research capacity. The future workforce for biomedical computing will need biologists who understand data, engineers who understand experimental constraints, clinicians who can evaluate computational claims, technicians who can operate sophisticated equipment, and leaders capable of communicating across all of them. Chicago can educate that workforce at every level.",
        ],
      },
      {
        id: "diversity-and-culture",
        title: "10. Diversity Is Scientific Infrastructure",
        paragraphs: [
          "Chicago is a city of people, languages, histories, and neighborhoods. Census data for 2020-2024 estimate that 20.9 percent of city residents were born outside the United States and that 35.4 percent of residents age five and older spoke a language other than English at home. Across 77 community areas, the city includes major Black, Latino, Asian, European, Middle Eastern, immigrant, refugee, and multigenerational communities, each with distinct institutions and experiences.",
          "For biomedical research, diversity is not decorative. Disease burden, environmental exposure, access to care, trust in institutions, language, diet, work, housing, and family history all shape health. A city with wide human variation forces scientific systems to confront the limits of narrow datasets and universal claims. It creates opportunities for more representative research, but only when communities are treated as partners and beneficiaries rather than convenient sources of data.",
          "Chicago’s culture also makes it a place where people can build a life, not merely hold a job. Its museums, libraries, architecture, lakefront, parks, food, theater, visual art, comedy, and music traditions are not secondary to institution-building. The city helped create modern improvisation, house music, footwork, gospel, urban blues, and distinctive traditions of jazz and soul. Its neighborhood cultural institutions preserve histories that are local in origin and global in influence.",
          "Scientific work is difficult and long. Institutions retain people when those people can find community, identity, beauty, challenge, and belonging outside the laboratory. Chicago offers that depth without requiring everyone to become the same kind of person or live the same kind of life.",
        ],
      },
      {
        id: "why-it-fits-nas",
        title: "11. Why Chicago Fits NaS",
        paragraphs: [
          "NaS is not being built as a coastal imitation. Chicago’s character is better aligned with the institution we want to become: ambitious without requiring spectacle, technically serious, shaped by industry as well as theory, and conscious that knowledge must eventually survive contact with the physical world. This is a city that designed skyscrapers, reversed a river, organized continental rail, built global companies, trained generations of physicians, and repeatedly turned practical constraints into new forms of engineering and culture.",
          "The city also rewards the long view. Chicago’s most important institutions were not weekend projects. They were built through decades of teaching, care, experimentation, philanthropy, public investment, labor, conflict, and revision. NaS intends to follow that institutional timescale. Models will change. Hardware will change. Individual research programs may succeed, fail, or evolve. The organization must be capable of learning through all of it.",
          "Chicago offers enough scientific density to support serious work, enough industrial depth to keep that work grounded, enough connectivity to remain globally engaged, and enough unfinished possibility for contribution to matter. That combination is rare.",
        ],
      },
      {
        id: "our-commitment",
        title: "12. Our Commitment to Chicago",
        paragraphs: [
          "Choosing Chicago creates an obligation. NaS should not simply use the city as an address while directing all value elsewhere. As the organization develops, we intend to publish research openly where responsible, collaborate across institutions, create tools that expand local scientific capacity, support pathways into technical work, and contribute to a life-science ecosystem that is more connected and more representative of the city around it.",
          "We will begin modestly. NaS is still founder-led and early. We do not yet possess the laboratories, workforce, partnerships, or resources implied by our long-term vision. Our immediate responsibility is to do credible work, describe it honestly, invite serious criticism, and build relationships before making promises on behalf of communities or institutions we have not earned the right to represent.",
          "But the direction is clear. We chose Chicago because it contains the science, medicine, industry, infrastructure, education, culture, and human complexity required to build something durable. We chose it because the city has already given the world consequential institutions. Its next scientific institution should be built here, with care, for the long term.",
        ],
      },
    ],
    sources: [
      { title: "World Business Chicago: Life Sciences", url: "https://worldbusinesschicago.com/lifescience/" },
      { title: "Chicago Biomedical Consortium: Mission and regional collaboration", url: "https://chicagobiomedicalconsortium.org/cbc_mission/" },
      { title: "Northwestern Feinberg School of Medicine: Research facts", url: "https://www.feinberg.northwestern.edu/about/facts/research-facts.html" },
      { title: "University of Chicago Pritzker School of Medicine: Facts and figures", url: "https://pritzker.uchicago.edu/about/pritzker-facts-figures" },
      { title: "University of Illinois Chicago College of Medicine: About", url: "https://medicine.uic.edu/about/" },
      { title: "UIC Retzky College of Pharmacy: About", url: "https://pharmacy.uic.edu/about/" },
      { title: "AbbVie: North Chicago research and development campus", url: "https://www.abbvie.com/science/rd-sites.html" },
      { title: "Abbott: Company overview and Chicago-area headquarters", url: "https://www.abbott.com/en-us/about-abbott" },
      { title: "Astellas: United States regional headquarters", url: "https://www.astellas.com/en/contact-us/global-directory" },
      { title: "Illinois DCEO: Vantive U.S. headquarters investment", url: "https://dceo.illinois.gov/news/press-release.31215.html" },
      { title: "Illinois DCEO: 2025 life-science and manufacturing investments", url: "https://dceo.illinois.gov/media/pressreleases/pressreleases2025.html" },
      { title: "Illinois Investment Guide: Vetter Pharma and the regional life-science ecosystem", url: "https://dceo.illinois.gov/content/dam/soi/en/web/dceo/expandrelocate/foreigndirectinvestment/documents/2025-il-guide.pdf" },
      { title: "Illinois DCEO: Chan Zuckerberg Biohub Chicago", url: "https://dceo.illinois.gov/news/press-release.26126.html" },
      { title: "Illinois EPA: Illinois Quantum and Microelectronics Park", url: "https://epa.illinois.gov/topics/community-relations/sites/iqmp.html" },
      { title: "CMAP: The Freight Landscape", url: "https://cmap.illinois.gov/news-updates/cmap-begins-regional-freight-assessment-with-release-of-the-freight-landscape/" },
      { title: "CMAP: Maintaining Chicago’s status as North America’s freight hub", url: "https://cmap.illinois.gov/regional-plan/goals/recommendation/maintain-the-regions-status-as-north-americas-freight-hub/" },
      { title: "Chicago Department of Aviation: O’Hare nonstop service", url: "https://www.flychicago.com/ohare/myflight/non-stop/Pages/default.aspx" },
      { title: "Chicago Transit Authority: Facts at a glance", url: "https://www.transitchicago.com/facts/" },
      { title: "Chicago Public Schools: Career and Technical Education", url: "https://www.cps.edu/academics/career-and-technical-education/" },
      { title: "City Colleges of Chicago: Biotechnology AAS", url: "https://catalog.ccc.edu/academic-program-requirements/biotechnology-aas/" },
      { title: "U.S. Census Bureau: Chicago QuickFacts", url: "https://www.census.gov/quickfacts/fact/table/chicagocityillinois/RHI725224" },
      { title: "Choose Chicago: Neighborhoods and cultural institutions", url: "https://www.choosechicago.com/neighborhoods/" },
    ],
  },
  {
    slug: "why-nas-exists",
    title: "Why NaS Exists",
    shortTitle: "Why NaS Exists",
    type: "Institutional Essay",
    area: "Institutional",
    date: "July 20, 2026",
    dateISO: "2026-07-20",
    updatedDate: "July 21, 2026",
    updatedDateISO: "2026-07-21",
    version: "1.1",
    authors: ["NaS Research"],
    readTime: "8 min read",
    pdfUrl: null,
    pdfStatus: "none",
    variant: "institutional-origin",
    abstract:
      "Why NaS was created, the technological mismatch that shaped our beginning, and our ambition to place extraordinary tools in the hands of people pursuing extraordinary questions.",
    summary:
      "We began with a mismatch we could not ignore. Modern software had created extraordinary leverage, yet researchers confronting biology’s hardest questions often worked across fragmented information and disconnected tools. NaS exists to build stronger foundations for scientists: knowledge systems, instruments, and environments that expand what they are able to investigate and discover.",
    pullQuote:
      "NaS exists to place extraordinary tools in the hands of people pursuing extraordinary questions.",
    pullQuoteAttribution: "NaS Research",
    publicationNote:
      "This institutional essay describes the origin and long-term purpose of NaS. It was revised on July 21, 2026 to present the story in the voice of the organization.",
    sections: [
      {
        id: "the-mismatch",
        title: "1. A Mismatch We Could Not Ignore",
        paragraphs: [
          "NaS did not begin because the world needed another technology company. We began because modern technology had demonstrated extraordinary capability, and because too little of that capability was reaching the people working on biology’s hardest problems.",
          "Our founder came to software engineering from a background in biology. While working for a Silicon Valley company, he encountered systems that could organize enormous amounts of information, automate complex work, and give small teams capabilities that would have seemed impossible only a few years earlier. He saw sophisticated infrastructure, intelligent software, and an engineering culture capable of turning an idea into a tool used at extraordinary scale.",
          "From there, the contrast was difficult to ignore. Scientists were investigating questions of profound consequence: how disease begins, why treatment fails, how living systems interact, and what might allow a patient to live longer or better. Yet the tools surrounding much of that work often remained fragmented, inaccessible, or generations behind what software had already made possible elsewhere.",
          "Some of the world’s most capable technical systems were being directed toward advertising, attention, and the incremental optimization of commercial metrics. Those may be legitimate business problems. But we could not accept that the reach of our best tools should end there while people pursuing the deepest questions in life science remained comparatively under-equipped.",
        ],
      },
      {
        id: "scientists-deserve-better",
        title: "2. Scientists Deserve Better Tools",
        paragraphs: [
          "The problem was never that scientists lacked intelligence, imagination, or discipline. The problem was that their working environment did not always compound those qualities. Biological knowledge was distributed across papers, databases, specialties, institutions, and formats that were never designed to function as one coherent system. Valuable time was spent finding information, reconciling terminology, moving between incompatible tools, and rebuilding context that should have remained available.",
          "Modern software had already shown what happens when people receive better abstractions and better infrastructure. A well-designed tool does not diminish expertise. It gives expertise reach. It removes unnecessary friction, preserves context, and allows a person to spend more of their attention on the part of the work that only they can do.",
          "We want scientists to have that leverage. Not technology imposed upon them from a distance, and not systems that pretend scientific judgment can be replaced by a prediction. We want foundations built around the realities of scientific work: tools that help researchers ask stronger questions, connect more evidence, design better investigations, and move with greater clarity from an idea toward a discovery.",
        ],
      },
      {
        id: "stopped-waiting",
        title: "3. We Stopped Waiting",
        paragraphs: [
          "For a time, our founder expected someone else to build it. The need seemed too obvious and the opportunity too important. He looked for an institution that would bring the full force of contemporary software engineering to the life sciences without reducing biology to a marketing category or treating researchers as an afterthought.",
          "Eventually, we stopped waiting.",
          "NaS began with a straightforward decision: if the institution we believed should exist could not be found, we would begin building it. That decision did not arrive with a laboratory, a large team, or a finished platform. It began with the willingness to take the first problem seriously, construct what was possible with the resources available, and let credible work earn the right to become something larger.",
          "We are therefore not building technology and searching for somewhere to apply it. We begin with the questions science has not yet been adequately equipped to answer.",
        ],
      },
      {
        id: "shovels-for-discovery",
        title: "4. Shovels for Discovery",
        paragraphs: [
          "The purpose of NaS is to empower scientists. We want to give them the foundations, resources, and instruments required to explore and to build the modern shovels with which new scientific ground can be opened.",
          "A shovel does not decide where to dig. A microscope does not determine which observation matters. A knowledge system does not replace the scientist who understands the experiment, recognizes the anomaly, or sees a possibility that no benchmark anticipated. The instrument matters because of what it allows a capable person to do.",
          "That distinction will remain central to NaS. We are not building systems to make scientists peripheral to science. We are building systems intended to increase their range: to help them navigate evidence, preserve provenance, work across disciplines, test ideas, and approach questions that would otherwise be too large, too fragmented, or too slow to pursue.",
          "The standard is not whether a tool appears impressive in isolation. The standard is whether it helps serious people do more serious work.",
        ],
      },
      {
        id: "the-oasis",
        title: "5. An Oasis for Scientific Work",
        paragraphs: [
          "Our long-term ambition is larger than a single model, application, or publication. We want NaS to become an oasis for scientific work: a place where biologists, researchers, clinicians, engineers, and other life-science people can find the knowledge, tools, infrastructure, and freedom required to pursue difficult questions.",
          "An oasis does not promise that every experiment will succeed. Science advances through uncertainty, failed hypotheses, incomplete evidence, and patient revision. What it can provide is the environment in which ambitious investigation remains possible: the time to think, the instruments to test, the systems to remember, and the company of people who understand why the question is worth pursuing.",
          "We want researchers at NaS to be able to chase what appears impossible. Not because impossibility is a slogan, but because many discoveries begin as questions that existing institutions, incentives, or tools make impractical to ask. Our responsibility is to expand the boundary of the practical.",
        ],
      },
      {
        id: "where-we-begin",
        title: "6. Where We Begin",
        paragraphs: [
          "We begin with the systems we can build now. The NaS Cortex is an early expression of the mission: a knowledge architecture intended to organize life-science information into specialized domains while preserving the relationships needed for scientific reasoning. It is not the final form of NaS. It is the first foundation.",
          "This work starts in software because software can extend the reach of a small, early institution. It allows us to develop architectures, study scientific information, create tools, publish our reasoning, and learn before claiming capabilities we have not yet earned. Over time, those systems can support richer forms of investigation, stronger collaborations, experimental infrastructure, and research programs that move between computation and the physical world.",
          "NaS remains founder-led and early. Our responsibility is to describe that reality honestly, distinguish aspiration from demonstrated capability, and build in the open where doing so is responsible. Ambition becomes credible through accumulated evidence, not through the size of the promise.",
        ],
      },
      {
        id: "the-work-ahead",
        title: "7. The Work Ahead",
        paragraphs: [
          "NaS will be built over a long horizon. Individual technologies will change. Models will be replaced, research directions will evolve, and some experiments will fail. The institution must be more durable than any one implementation. Its purpose is to keep learning how better systems can serve scientific discovery and to turn those lessons into tools researchers can actually use.",
          "We will organize knowledge. We will develop scientific instruments. We will create stronger foundations for discovery. We will work toward an environment in which researchers have more freedom to explore, create, and attempt what presently appears beyond reach.",
          "We began because we had seen what technology could do, and we believed science deserved more of that power. We still do.",
          "That is why NaS exists.",
        ],
      },
    ],
  },
  {
    slug: "why-hyde-park",
    title: "Why Hyde Park",
    shortTitle: "Why Hyde Park",
    type: "Institutional Essay",
    area: "Community",
    date: "July 21, 2026",
    dateISO: "2026-07-21",
    version: "1.0",
    authors: ["NaS Research"],
    readTime: "5 min read",
    pdfUrl: null,
    pdfStatus: "none",
    heroVideo: "/assets/videos/ChicagoThree.mp4#t=2",
    abstract:
      "Why NaS is being built in Hyde Park: a place our founder calls home, a community shaped by inquiry and creativity, and a responsibility to serve Chicago’s South Side.",
    summary:
      "Hyde Park was home to our founder before it became home to NaS. The neighborhood gives serious ideas room to develop through its intellectual culture, creative community, relationship with the University of Chicago, and setting along Lake Michigan. Being rooted on the South Side also creates an obligation. As NaS grows, our presence should produce meaningful value for the community around us.",
    pullQuote:
      "We did not choose Hyde Park from a map. We chose it because it is home.",
    pullQuoteAttribution: "NaS Research",
    publicationNote:
      "This institutional essay describes why NaS chose Hyde Park and the principles that should guide our relationship with the surrounding community.",
    sections: [
      {
        id: "home-before-strategy",
        title: "1. Home Before Strategy",
        paragraphs: [
          "We did not choose Hyde Park through a corporate search for the most advantageous address. Hyde Park was home to our founder before it became home to NaS. It is where the institution’s earliest ideas took shape and where our purpose found a community capable of giving those ideas room to grow.",
          "That personal connection matters. An institution should understand the place in which it intends to build, not simply arrive because the location appears useful. Our roots here give NaS a starting point based on belonging, memory, and responsibility rather than convenience alone.",
        ],
      },
      {
        id: "room-for-ideas",
        title: "2. A Place That Makes Room for Ideas",
        paragraphs: [
          "Hyde Park has a rare intellectual and creative character. Scientists, students, artists, writers, musicians, activists, lifelong residents, and people from many traditions share the neighborhood. Different pursuits coexist here, and unusual ideas are allowed to become serious work.",
          "The University of Chicago strengthens that culture through its commitment to rigorous inquiry, interdisciplinary research, and the testing of difficult ideas. But Hyde Park is larger than the university. Its bookstores, theaters, museums, music, architecture, conversations, and community institutions create an environment where scholarship remains connected to public and creative life.",
        ],
      },
      {
        id: "beauty-and-place",
        title: "3. Beauty Is Part of the Place",
        paragraphs: [
          "Hyde Park sits beside Lake Michigan, surrounded by parks, paths, museums, historic buildings, and streets made for walking and reflection. The lake changes the scale of the neighborhood. It gives people space to think, breathe, gather, and return to their work with a different perspective.",
          "Beauty is not separate from institution-building. Difficult work asks people to remain with a problem for years. Places retain thoughtful and creative people when those people can also find community, movement, culture, and a life worth inhabiting. Hyde Park offers that depth.",
        ],
      },
      {
        id: "the-south-side",
        title: "4. Our Responsibility to the South Side",
        paragraphs: [
          "Hyde Park belongs to Chicago’s South Side. That identity carries pride and responsibility. The South Side has given the world extraordinary science, medicine, literature, music, architecture, political thought, and cultural invention. It has also experienced persistent disinvestment, unequal access to care, food insecurity, and serious health disparities.",
          "UChicago Medicine’s 2024 to 2025 Community Health Needs Assessment gathered input from nearly 1,800 South Side residents. It identified chronic disease, trauma and behavioral health, and social inequities such as access to care, food insecurity, and workforce development as continuing priorities. These are not abstractions. They shape the lives of the communities surrounding us.",
          "NaS cannot claim to solve those conditions simply by being present. Presence alone is not contribution. But where we build determines whom we can listen to, whom we can learn from, and whom our work should ultimately benefit. We believe we can serve our community best by remaining close to it.",
        ],
      },
      {
        id: "worthy-of-home",
        title: "5. Becoming Worthy of Our Home",
        paragraphs: [
          "As NaS grows, our presence should create value beyond the boundaries of the institution. That may eventually include scientific tools, educational pathways, research opportunities, technical employment, and work that strengthens local capacity in the life sciences. We will define those efforts with community partners when we possess the resources and relationships required to do them well.",
          "We are early, so we will not announce commitments before we can honor them. Our responsibility now is to produce credible work, listen carefully, build relationships, and ensure that the future of NaS develops with an awareness of the place that made its beginning possible.",
          "Hyde Park gives us a place to think, create, and grow. This is our home. We intend to become worthy of it.",
        ],
      },
    ],
    sources: [
      { title: "University of Chicago Harris School: Hyde Park neighborhood", url: "https://harris.uchicago.edu/student-life/harris-experience/our-campus/hyde-park" },
      { title: "University of Chicago Office of the Provost: Research and rigorous inquiry", url: "https://provost.uchicago.edu/initiatives/research" },
      { title: "Smart Museum of Art: Hyde Park and the Culture Coast", url: "https://smartmuseum.uchicago.edu/visit/explore-hyde-park/" },
      { title: "UChicago Medicine: 2024 to 2025 Community Health Needs Assessment", url: "https://www.uchicagomedicine.org/forefront/community-articles/chna-2024-2025" },
      { title: "City of Chicago: Reducing disparities between neighborhoods", url: "https://resilient.chicago.gov/challenges" },
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
