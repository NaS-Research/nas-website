"use client";
import Image from "next/image";

export default function Featured() {
  return (
    <section id="next-section" className="min-h-screen py-16 px-8 bg-black text-neutral-200">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Main Feature */}
        <div className="space-y-4">
          <div className="rounded-xl overflow-hidden h-[480px]">
            <video
              src="/assets/videos/ChicagoOne.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="space-y-3">
            <h2 className="text-4xl font-semibold text-white">Chicago is Home</h2>
            <p className="text-lg"><span className="text-white">Announcement</span> · <span className="text-neutral-400">May 8, 2025</span></p>
          </div>
        </div>

        {/* Smaller Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Latest White Paper */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl aspect-square bg-white">
              <div className="transform transition-transform duration-300 hover:scale-105 w-full h-full">
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
              <h3 className="text-xl font-medium text-white">
                Introducing the NaS Cortex: Life Science’s Digital Brain
              </h3>
              <p className="text-base">
                <span className="text-white">Research</span> ·{" "}
                <span className="text-neutral-400">5&nbsp;min read</span>
              </p>
            </div>
          </div>

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

          {/* Founding of NaS */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl aspect-square">
              <div className="transform transition-transform duration-300 hover:scale-105 w-full h-full">
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
              <h3 className="text-xl font-medium text-white">The Birth of NaS</h3>
              <p className="text-base">
                <span className="text-white">Release</span> ·{" "}
                <span className="text-neutral-400">3&nbsp;min read</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
