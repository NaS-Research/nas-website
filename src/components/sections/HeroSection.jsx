"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DenialsWorkflowFigure from "@/components/research/DenialsWorkflowFigure";
import AtlasBenchmarkVisual from "@/components/research/AtlasBenchmarkVisual";

const slides = [
  {
    id: "denials",
    eyebrow: "New design partner release",
    title: "Introducing NaS Denials",
    summary: "A software foundation for specialty denial prevention, human-reviewed appeals, and payment-outcome reconciliation.",
    primary: { href: "/research/introducing-nas-denials", label: "Read the release" },
    secondary: { href: "/research/papers/introducing-nas-denials.pdf", label: "View the paper" },
    visual: "workflow",
  },
  {
    id: "mission",
    eyebrow: "NaS Research",
    title: "We build systems to investigate difficult questions.",
    summary: "Independent research and software across biology, medicine, and the systems that support them.",
    primary: { href: "/research", label: "Read our publications" },
    secondary: { href: "/about", label: "Discover our mission" },
    visual: "mark",
  },
  {
    id: "atlas",
    eyebrow: "New research note · NAS-AGA-001",
    title: "AlphaGenome Atlas. A closer look.",
    titleLines: ["AlphaGenome Atlas.", "A closer look."],
    summary: "435 variants. One focused benchmark of predicted variant impact against experimental cell-fitness effects in RNU4-2.",
    primary: { href: "/research/alphagenome-atlas-rnu4-2", label: "Read the research" },
    secondary: { href: "/research/papers/alphagenome-atlas-rnu4-2.pdf", label: "View the paper" },
    visual: "atlas",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer;
    const schedule = () => {
      window.clearTimeout(timer);
      if (!document.hidden && !preference.matches) {
        timer = window.setTimeout(() => {
          setActiveIndex((current) => (current + 1) % slides.length);
        }, 4000);
      }
    };
    schedule();
    document.addEventListener("visibilitychange", schedule);
    preference.addEventListener("change", schedule);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", schedule);
      preference.removeEventListener("change", schedule);
    };
  }, [activeIndex]);

  const activeSlide = slides[activeIndex];

  function scrollToCurrentWork(event) {
    const target = document.querySelector("#next-section");

    if (!target) return;

    event.preventDefault();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      target.scrollIntoView();
      return;
    }

    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + startY;
    const distance = targetY - startY;
    const duration = Math.min(1650, Math.max(1100, Math.abs(distance) * 0.7));
    const startedAt = performance.now();

    const easeInOutCubic = (progress) =>
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    function animateScroll(now) {
      const progress = Math.min((now - startedAt) / duration, 1);
      window.scrollTo(0, startY + distance * easeInOutCubic(progress));

      if (progress < 1) requestAnimationFrame(animateScroll);
    }

    requestAnimationFrame(animateScroll);
  }

  return (
    <section
      className={`home-mark-hero home-carousel home-carousel--${activeSlide.id}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured NaS Research"

    >
      <div className="home-mark-hero__atmosphere" aria-hidden="true" />

      <div className="home-carousel__slide" key={activeSlide.id} aria-live="off">
        <div className="home-carousel__copy">
          <p className="home-mark-hero__eyebrow">{activeSlide.eyebrow}</p>
          <h1 id="home-mark-title">{activeSlide.titleLines ? activeSlide.titleLines.map((line, index) => <span key={line}>{index > 0 ? " " : ""}{line}</span>) : activeSlide.title}</h1>
          <p className="home-carousel__summary">{activeSlide.summary}</p>
          <div className="home-mark-hero__actions" aria-label={`Explore ${activeSlide.title}`}>
            <Link className="home-mark-hero__action--primary" href={activeSlide.primary.href}>
              {activeSlide.primary.label} <span aria-hidden="true">↗</span>
            </Link>
            <Link href={activeSlide.secondary.href}>
              {activeSlide.secondary.label} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className={`home-carousel__visual home-carousel__visual--${activeSlide.visual}`} aria-hidden={activeSlide.visual !== "workflow" && activeSlide.visual !== "atlas"}>
          {activeSlide.visual === "workflow" && <DenialsWorkflowFigure compact theme="dark" />}
          {activeSlide.visual === "mark" && (
            <div className="home-mark">
              <div className="home-mark__halo" />
              <Image
                src="/assets/images/NaSLogo-transparent-hd.png"
                alt=""
                width={2048}
                height={2048}
                sizes="(max-width: 767px) 76vw, 42vmin"
                priority
                className="home-mark__image home-mark__image--base"
              />
              <Image
                src="/assets/images/NaSLogo-transparent-hd.png"
                alt=""
                width={2048}
                height={2048}
                sizes="(max-width: 767px) 76vw, 42vmin"
                priority
                className="home-mark__image home-mark__image--light"
              />
            </div>
          )}
          {activeSlide.visual === "atlas" && <AtlasBenchmarkVisual />}
        </div>
      </div>

      <div className="home-carousel__controls" aria-label="Choose featured slide">
        {slides.map((slide, index) => (
          <button
            type="button"
            className={`home-carousel__dot ${index === activeIndex ? "home-carousel__dot--active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show slide ${index + 1}: ${slide.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
            key={slide.id}
          />
        ))}
      </div>

      <a className="home-mark-hero__scroll" href="#next-section" onClick={scrollToCurrentWork}>
        See our current work <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
