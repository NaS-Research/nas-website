"use client";

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
            <h2 className="text-4xl font-semibold text-white">Chicago: Our Permanent Home</h2>
            <p className="text-lg"><span className="text-white">Announcement</span> · <span className="text-neutral-400">May 1, 2025</span></p>
          </div>
        </div>

        {/* Smaller Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="rounded-xl bg-neutral-700 aspect-square"></div>
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-white">Latest White Paper: AI in Protein Folding</h3>
              <p className="text-base"><span className="text-white">Research</span> · <span className="text-neutral-400">May 8, 2025</span></p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl bg-neutral-700 aspect-square"></div>
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-white">Founding of NaS</h3>
              <p className="text-base"><span className="text-white">Company</span> · <span className="text-neutral-400">April 15, 2025</span></p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl bg-neutral-700 aspect-square"></div>
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-white">Join Our Growing Team</h3>
              <p className="text-base"><span className="text-white">Careers</span> · <span className="text-neutral-400">Open Now</span></p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
