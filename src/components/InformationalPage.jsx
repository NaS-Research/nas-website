import Link from "next/link";
import Footer from "@/components/Footer";

export default function InformationalPage({
  eyebrow,
  title,
  introduction,
  sections,
  closingTitle,
  closingCopy,
  actionLabel = "Contact NaS",
  actionHref = "mailto:dalronj.robertson@gmail.com",
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10 px-6 pb-20 pt-36 sm:px-10 sm:pb-28 sm:pt-44">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#c7a069]">
            {eyebrow}
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-10 max-w-3xl text-lg leading-8 text-neutral-400 sm:text-xl">
            {introduction}
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
          {sections.map((section, index) => (
            <article key={section.title} className="bg-neutral-950 p-8 sm:p-10">
              <span className="text-sm tabular-nums text-neutral-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-8 text-2xl font-medium sm:text-3xl">
                {section.title}
              </h2>
              <p className="mt-4 leading-7 text-neutral-400">{section.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10 sm:pb-32">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-3xl bg-neutral-900 px-8 py-10 sm:px-12 sm:py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-medium sm:text-4xl">{closingTitle}</h2>
            <p className="mt-3 max-w-2xl leading-7 text-neutral-400">{closingCopy}</p>
          </div>
          <Link
            href={actionHref}
            className="shrink-0 rounded-full bg-white px-7 py-3 font-medium text-black transition hover:bg-[#c7a069] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a069] focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-900"
          >
            {actionLabel}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
