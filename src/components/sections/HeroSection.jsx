"use client";

import { FiArrowUpRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HeroSection() {
  const prompts = [
    "Explain CRISPR gene editing",
    "New targets for antibiotics",
    "Predict protein structures",
    "Latest cancer research breakthroughs",
    "How do vaccines work?",
    "Drug discovery for Alzheimer's",
    "Explore genomics trends",
    "What causes autoimmune disorders?"
  ];
  const [currentPrompt, setCurrentPrompt] = useState(prompts[0]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    if (userInput.trim() === "") {
      const interval = setInterval(() => {
        setCurrentPrompt((prev) => {
          const nextIndex = (prompts.indexOf(prev) + 1) % prompts.length;
          return prompts[nextIndex];
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [userInput]);
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center px-4 -translate-y-[5%]">
      {/* Greeting headline */}
      <h1 className="text-2xl md:text-4xl font-semibold text-white text-center mb-10">
        What can I help you discover?
      </h1>

      {/* Prompt input container */}
      <div className="w-full max-w-4xl">
        <form className="flex items-center bg-neutral-800/80 rounded-3xl ring-1 ring-neutral-700 backdrop-blur">
          <div className="relative flex-1 overflow-hidden px-14 py-12">
            <AnimatePresence mode="wait">
              <motion.textarea
                key={currentPrompt}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.3 }}
                placeholder={currentPrompt}
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="absolute top-2 bottom-4 left-4 right-1 resize-none overflow-auto bg-transparent text-neutral-200 placeholder-neutral-500 outline-none pl-4 pr-0 py-2 text-xl"
              />
            </AnimatePresence>
          </div>
          <button
            type="submit"
            aria-label="Submit prompt"
            className="p-4 pr-5 text-neutral-400 hover:text-white transition flex-shrink-0"
          >
            <FiArrowUpRight size={20} />
          </button>
        </form>
      </div>

      {/* Scroll hint */}
      <p className="absolute bottom-10 text-sm text-neutral-500">
        ↓ Scroll to explore
      </p>
    </section>
  );
}