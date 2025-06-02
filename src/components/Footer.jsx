"use client";

import Link from "next/link";
import Image from "next/image";
import {
  SiInstagram,
  SiLinkedin
} from "react-icons/si";
import { HiOutlineArrowCircleUp } from "react-icons/hi";
import { useState } from "react";
import ComingSoonModal from "@/components/sections/ComingSoonModal";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="bg-black text-neutral-400 py-6 text-base">
      <div className="mx-auto max-w-6xl px-6 flex flex-wrap items-center justify-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-semibold hover:underline cursor-pointer"
          >
            NaS
          </button>
          <button onClick={() => setShowModal(true)} className="hover:underline cursor-pointer">Privacy</button>
          <button onClick={() => setShowModal(true)} className="hover:underline cursor-pointer">Terms</button>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://www.instagram.com/nasresearch/?hl=en" aria-label="Instagram" className="hover:text-white transition-colors">
            <SiInstagram className="w-6 h-6" />
          </Link>
          <Link href="https://www.linkedin.com/company/nas-research" aria-label="LinkedIn" className="hover:text-white transition-colors">
            <SiLinkedin className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <ComingSoonModal open={showModal} onClose={() => setShowModal(false)} />
    </footer>
  );
}