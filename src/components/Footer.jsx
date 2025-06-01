"use client";

import Link from "next/link";
import Image from "next/image";
import {
  SiInstagram,
  SiLinkedin
} from "react-icons/si";
import { HiOutlineArrowCircleUp } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="mx-auto px-6 max-w-6xl grid gap-12 md:grid-cols-4 justify-items-center items-start">
        
        <div className="justify-self-start">
          <Link href="/">
            <Image
              src="/assets/images/NaSLogonbg.png"
              alt="NaS Logo"
              width={64}
              height={64}
              className="object-cover"
              priority
            />
          </Link>
        </div>

        <nav className="space-y-3 text-sm">
          <Link href="/" className="block hover:underline">Home</Link>
          <Link href="/about" className="block hover:underline">About NaS</Link>
          <Link href="/research" className="block hover:underline">Research</Link>
          <Link href="/support" className="block hover:underline">Support</Link>
        </nav>

        <nav className="space-y-3 text-sm">
          <Link href="/privacy" className="block hover:underline">Privacy</Link>
          <Link href="/terms" className="block hover:underline">Terms of Use</Link>
          <Link href="/contact" className="block hover:underline">Contact Us</Link>
          <Link href="/sitemap" className="block hover:underline">Site Map</Link>
        </nav>

        <div className="justify-self-end">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/10"
          >
            <HiOutlineArrowCircleUp size={24} />
          </button>
        </div>
      </div>

      <div className="mt-12 border-t border-neutral-800 pt-8 text-center">
        <p className="mb-6 text-xs">© {new Date().getFullYear()} NaS. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <Link href="https://www.instagram.com/nasresearch/?hl=en" aria-label="Instagram"><SiInstagram size={24} /></Link>
          <Link href="https://www.linkedin.com/company/nas-research" aria-label="LinkedIn"><SiLinkedin size={24} /></Link>
        </div>
      </div>
    </footer>
  );
}