"use client";

export default function LatestResearch() {
  return (
    <section className="py-16 px-8 bg-black text-neutral-200">
      <div className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-4xl font-semibold text-white">Latest Research</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="h-80 bg-neutral-800 rounded-xl"></div>
            <h3 className="text-xl font-medium text-white">Research Article Title 1</h3>
            <p className="text-base text-neutral-400">Brief summary of research highlights.</p>
          </div>

          <div className="space-y-2">
            <div className="h-80 bg-neutral-800 rounded-xl"></div>
            <h3 className="text-xl font-medium text-white">Research Article Title 2</h3>
            <p className="text-base text-neutral-400">Brief summary of research highlights.</p>
          </div>
        </div>
      </div>
    </section>
  );
}