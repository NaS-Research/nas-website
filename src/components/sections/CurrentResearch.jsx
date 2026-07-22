import Link from "next/link";

const studies = [
  {
    id: "NAS-BRCA-002",
    title: "Molecular Discordance in Breast Cancer",
    status: "Novelty and feasibility audit",
    description:
      "NaS is investigating when clinically HR-positive and HER2-negative breast cancers reflect stable molecular differences and when their PAM50 subtype classification is uncertain. Independent validation is required before any scientific claim.",
    video: "/assets/videos/Lab.mp4",
  },
  {
    id: "NAS-BRCA-001",
    title: "Qualifying the NaS Cortex for Cancer Research",
    status: "Methods and statistical remediation",
    description:
      "A governed TCGA-BRCA survival study is being used to test whether the Cortex can preserve provenance, enforce analysis gates, reproduce established evidence, and retain limitations without hiding failed diagnostics.",
    video: "/assets/videos/Coding.mp4",
  },
];

export default function CurrentResearch() {
  return (
    <section className="bg-black px-5 py-20 text-neutral-200 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 grid gap-6 border-t border-white/10 pt-6 md:grid-cols-[1fr_1.25fr] md:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#c7a069]">
              Inside NaS Core
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
              Current Research
            </h2>
          </div>
          <div className="md:justify-self-end md:max-w-xl">
            <p className="text-sm leading-6 text-neutral-400 sm:text-base">
              Work now underway inside the NaS research system. These studies remain outside the publication library until their review and release gates are complete.
            </p>
            <Link
              href="/research"
              className="mt-4 inline-block border-b border-[#c7a069]/50 pb-1 text-sm text-[#dfc18f] transition-colors hover:border-[#dfc18f] hover:text-white"
            >
              Read published research <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {studies.map((study) => (
            <article className="group" key={study.id}>
              <div className="h-72 overflow-hidden rounded-xl border border-white/10 bg-neutral-950 sm:h-80">
                <video
                  src={study.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-hidden="true"
                  className="h-full w-full object-cover opacity-65 saturate-50 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-80"
                />
              </div>
              <div className="grid gap-3 border-b border-white/10 py-5">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.12em]">
                  <span className="text-[#c7a069]">{study.id}</span>
                  <span className="text-neutral-600">{study.status}</span>
                </div>
                <h3 className="max-w-xl text-xl font-medium tracking-[-0.025em] text-white sm:text-2xl">
                  {study.title}
                </h3>
                <p className="max-w-xl text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7">
                  {study.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
