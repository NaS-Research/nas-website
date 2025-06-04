"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ComingSoonModal from "@/components/sections/ComingSoonModal";

export default function Support() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-[1.8rem] leading-tight sm:text-5xl sm:leading-snug font-semibold text-left mb-4">Help us push science forward.</h2>
          <p className="text-[1rem] sm:text-xl text-left mb-6">
            Your support equips us with the advanced tools and technology essential for breakthroughs in science and AI.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#D3A15C] text-black font-bold px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded hover:bg-[#BF8E48] transition transform active:scale-95 cursor-pointer"
          >
            GIVE NOW
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-neutral-800 rounded-xl overflow-hidden">
            <div className="h-48 overflow-hidden bg-neutral-700">
              <video
                src="/assets/videos/Coding.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Be part of the breakthrough.</h3>
              <p className="text-sm text-neutral-300">Support our research directly or partner with us to build the future of scientific innovation.</p>
              <button
                onClick={() => setShowModal(true)}
                className="mt-4 inline-block text-[0.95rem] sm:text-base text-[#D3A15C] font-semibold cursor-pointer transition-opacity duration-200 hover:opacity-70 active:scale-95 transform"
              >
                WAYS TO GIVE »
              </button>
            </div>
          </div>

          <div className="bg-neutral-800 rounded-xl overflow-hidden">
            <div className="h-48 overflow-hidden bg-neutral-700">
              <video
                src="/assets/videos/ChicagoFour.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">See your impact.</h3>
              <p className="text-sm text-neutral-300">See exactly how your contribution provides the technology and resources needed for groundbreaking discoveries.</p>
              <button
                onClick={() => setShowModal(true)}
                className="mt-4 inline-block text-[0.95rem] sm:text-base text-[#D3A15C] font-semibold cursor-pointer transition-opacity duration-200 hover:opacity-70 active:scale-95 transform"
              >
                YOUR IMPACT »
              </button>
            </div>
          </div>
        </div>
      </div>
      <ComingSoonModal open={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}