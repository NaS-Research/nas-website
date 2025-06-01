"use client";

import { motion } from "framer-motion";

export default function Support() {
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
          <h2 className="text-5xl font-semibold text-left mb-4">Support life-changing science</h2>
          <p className="text-xl text-left mb-6">
            Your support empowers NaS researchers to achieve breakthroughs that have the potential to transform global health.
          </p>
          <button className="bg-[#D3A15C] text-black font-bold px-6 py-3 rounded hover:bg-[#BF8E48] transition">
            GIVE NOW
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-neutral-800 rounded-xl overflow-hidden">
            <div className="h-48 bg-neutral-700"></div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Ways to Give</h3>
              <p className="text-sm text-neutral-300">Explore personalized giving options to directly support groundbreaking research.</p>
              <a href="#" className="mt-4 inline-block text-[#D3A15C] font-semibold">WAYS TO GIVE »</a>
            </div>
          </div>

          <div className="bg-neutral-800 rounded-xl overflow-hidden">
            <div className="h-48 bg-neutral-700"></div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Your Impact</h3>
              <p className="text-sm text-neutral-300">Discover how your support is fueling transformative research and innovation.</p>
              <a href="#" className="mt-4 inline-block text-[#D3A15C] font-semibold">YOUR IMPACT »</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}