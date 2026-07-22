import Link from "next/link";

const opportunities = [
  {
    title: "Contribute something useful",
    copy: "Expert review, research infrastructure, responsible access to resources, a defined collaboration, or a serious introduction can materially strengthen the work.",
    video: "/assets/videos/Coding.mp4",
  },
  {
    title: "Begin with a specific idea",
    copy: "Tell us who you are, what you can contribute, the research it relates to, and what scientific outcome your involvement could help enable.",
    video: "/assets/videos/ChicagoFour.mp4",
  },
];

export default function WorkWithNas() {
  return (
    <section className="bg-black px-5 py-20 text-white sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl border-t border-white/10 pt-6">
        <div className="mb-12 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#c7a069]">
              Work with NaS
            </p>
            <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl">
              Help make the work stronger.
            </h2>
          </div>
          <div>
            <p className="text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7">
              NaS welcomes serious contributions of expertise, criticism, infrastructure, resources, and focused collaboration. We do not currently operate a public donation program.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/support"
                className="rounded-full bg-[#e4cda7] px-5 py-2.5 text-sm font-medium text-[#17120d] transition-colors hover:bg-[#f0dfc1]"
              >
                Ways to contribute <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[#e4cda7]/30 px-5 py-2.5 text-sm text-[#e0d2bb] transition-colors hover:border-[#e4cda7]/70 hover:text-white"
              >
                Contact NaS <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {opportunities.map((opportunity, index) => (
            <article className="overflow-hidden rounded-xl border border-white/10 bg-[#0b0b0b]" key={opportunity.title}>
              <div className="h-52 overflow-hidden bg-neutral-900">
                <video
                  src={opportunity.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-hidden="true"
                  className="h-full w-full object-cover opacity-60 saturate-50"
                />
              </div>
              <div className="p-6 sm:p-8">
                <span className="text-xs tracking-[0.12em] text-[#c7a069]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-medium tracking-[-0.025em] text-white sm:text-2xl">
                  {opportunity.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7">
                  {opportunity.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
