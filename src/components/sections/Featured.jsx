"use client";
import Image from "next/image";
import Link from "next/link";

export default function Featured() {
  return (
    <section id="next-section" className="min-h-screen py-16 px-8 bg-black text-neutral-200">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Main Feature */}
        <Link
          href="/research/chicago-our-chosen-home"
          className="group block space-y-4 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dfc18f] focus-visible:ring-offset-4 focus-visible:ring-offset-black"
          aria-label="Read Chicago: Our Chosen Home"
        >
          <div className="rounded-xl overflow-hidden h-[480px]">
            <video
              src="/assets/videos/ChicagoOne.mp4"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="space-y-3">
            <h2 className="text-[1.9rem] sm:text-4xl font-semibold text-white transition-colors group-hover:text-[#dfc18f]">
              Chicago: Our Chosen Home <span aria-hidden="true" className="inline-block text-[0.62em] transition-transform group-hover:translate-x-1">↗</span>
            </h2>
            <p className="text-base sm:text-lg"><span className="text-white">Release</span> · <span className="text-neutral-400">May 8, 2025</span></p>
          </div>
        </Link>

        {/* Smaller Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Latest White Paper */}
          <Link
            href="/research/introducing-nas-cortex"
            className="group block space-y-4 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dfc18f] focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            aria-label="Read Introducing the NaS Cortex: Life Science’s Digital Brain"
          >
            <div className="overflow-hidden rounded-xl aspect-square bg-white">
              <div className="transform transition-transform duration-300 group-hover:scale-105 w-full h-full">
                <Image
                  src="/assets/images/ArticleOne.png"
                  alt="White paper cover"
                  width={800}
                  height={800}
                  className="object-contain w-full h-full scale-100 translate-y-4"
                  priority={false}
                />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-white transition-colors group-hover:text-[#dfc18f]">
                Introducing the NaS Cortex: Life Science’s Digital Brain <span aria-hidden="true" className="inline-block text-[0.7em] transition-transform group-hover:translate-x-1">↗</span>
              </h3>
              <p className="text-base">
                <span className="text-white">Research</span> ·{" "}
                <span className="text-neutral-400">5&nbsp;min read</span>
              </p>
            </div>
          </Link>

          {/* Community Engagement */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl aspect-square">
              <div className="transform transition-transform duration-300 hover:scale-105 w-full h-full">
                <video
                  src="/assets/videos/ChicagoThree.mp4#t=2"
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-white">
                Investing in Hyde Park and Chicago’s Future
              </h3>
              <p className="text-base">
                <span className="text-white">Community</span> ·{" "}
                <span className="text-neutral-400">3&nbsp;min read</span>
              </p>
            </div>
          </div>

          {/* Institutional origin */}
          <Link
            href="/research/why-nas-exists"
            className="group block space-y-4 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dfc18f] focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            aria-label="Read Why NaS Exists"
          >
            <div className="overflow-hidden rounded-xl aspect-square">
              <div className="transform transition-transform duration-300 group-hover:scale-105 w-full h-full">
                <Image
                  src="/assets/images/NaSLogo.jpeg"
                  alt="NaS logo"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                  priority={false}
                />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-white transition-colors group-hover:text-[#dfc18f]">
                Why NaS Exists <span aria-hidden="true" className="inline-block text-[0.7em] transition-transform group-hover:translate-x-1">↗</span>
              </h3>
              <p className="text-base">
                <span className="text-white">Institutional Essay</span> ·{" "}
                <span className="text-neutral-400">8&nbsp;min read</span>
              </p>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
