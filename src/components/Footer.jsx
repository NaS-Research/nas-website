"use client";

import Link from "next/link";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="nas-footer">
      <div className="nas-footer__inner">
        <div className="nas-footer__top"><button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="nas-footer__wordmark">NaS</button><p>Research and tools for the life sciences.</p></div>
        <div className="nas-footer__links"><nav aria-label="Footer navigation"><Link href="/research">Research</Link><Link href="/learn">Learn</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav><nav aria-label="Social links"><Link href="https://www.instagram.com/nasresearch/?hl=en" aria-label="Instagram"><SiInstagram /></Link><Link href="https://www.linkedin.com/company/nasresearch/" aria-label="LinkedIn"><FaLinkedin /></Link></nav></div>
        <div className="nas-footer__legal"><span>NaS Research</span><div><Link href="/legal/privacy">Privacy</Link><Link href="/legal/terms">Terms</Link></div></div>
      </div>
    </footer>
  );
}
