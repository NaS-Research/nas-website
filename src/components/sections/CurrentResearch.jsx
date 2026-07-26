import Link from "next/link";
import { researchProjects } from "@/data/researchProjects";

export default function CurrentResearch() {
  return (
    <section id="current-research" className="scroll-mt-20 bg-black px-5 py-20 text-neutral-200 sm:px-8 sm:py-24">
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
          {researchProjects.map((study) => (
            <article className="group" key={study.id}>
              <Link
                href={`/research/projects/${study.slug}`}
                className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7a069]"
                aria-label={`Read the ${study.id} project brief`}
              >
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
                <span className="mt-1 text-sm text-[#dfc18f]">
                  Read project brief <span aria-hidden="true">↗</span>
                </span>
              </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
