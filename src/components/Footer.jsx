"use client";

import Link from "next/link";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-400 py-6 text-base">
      <div className="mx-auto max-w-6xl px-6 flex flex-wrap items-center justify-center md:justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg sm:text-xl font-semibold hover:underline cursor-pointer"
          >
            NaS
          </button>
          <Link href="/legal/privacy" className="text-sm sm:text-base hover:underline">Privacy</Link>
          <Link href="/legal/terms" className="text-sm sm:text-base hover:underline">Terms</Link>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="https://www.instagram.com/nasresearch/?hl=en" aria-label="Instagram" className="hover:text-white transition-colors">
            <SiInstagram className="w-4 h-4 sm:w-6 sm:h-6" />
          </Link>
          <Link href="https://www.linkedin.com/company/nasresearch/" aria-label="LinkedIn" className="hover:text-white transition-colors">
            <FaLinkedin className="w-4 h-4 sm:w-6 sm:h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
