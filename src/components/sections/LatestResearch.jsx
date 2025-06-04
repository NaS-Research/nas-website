"use client";

import ComingSoonModal from "@/components/sections/ComingSoonModal";
import { useState } from "react";

export default function LatestResearch() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-16 px-8 bg-black text-neutral-200">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-[1.4rem] sm:text-4xl font-semibold text-white">Latest Research</h2>
          <button
            onClick={() => setShowModal(true)}
            className="text-white text-base transition-opacity duration-200 hover:opacity-70 active:scale-95 transform transition-transform duration-100 cursor-pointer"
          >
            View all &rarr;
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="overflow-hidden rounded-xl h-80">
              <div className="transform transition-transform duration-300 hover:scale-105 w-full h-full">
                <video
                  src="/assets/videos/Lab.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <h3 className="text-xl font-medium text-white">Automating our AI Research Pipeline</h3>
            <p className="text-base text-neutral-400">
              <span className="text-white">Upcoming Research</span> · Summer 2025
            </p>
          </div>

          <div className="space-y-2">
            <div className="overflow-hidden rounded-xl bg-white h-80 flex items-center justify-center">
              <div className="transform transition-transform duration-300 hover:scale-105 w-full h-full">
                <img
                  src="/assets/images/ArticleOneCartoon.png"
                  alt="NaS Cortex White Paper"
                  className="object-cover w-full h-full scale-125"
                />
              </div>
            </div>
            <h3 className="text-xl font-medium text-white">The NaS Cortex: A Knowledge Architecture for the Life Sciences</h3>
            <p className="text-base text-neutral-400">
              <span className="text-white">Publication</span> · May 12, 2025
            </p>
          </div>
        </div>
      </div>
      <ComingSoonModal open={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}