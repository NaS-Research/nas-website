"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DenialsWorkflowFigure from "@/components/research/DenialsWorkflowFigure";

const slides = [
  {
    id: "brca",
    eyebrow: "New public research report · NAS-BRCA-002",
    title: "PAM50 repeatability. Tested.",
    titleLines: ["PAM50 repeatability.", "Tested."],
    summary: "136 registered technical-repeat pairs. One frozen subtype method. Public data, deterministic analysis, and explicit limits.",
    primary: { href: "/research/pam50-technical-repeatability", label: "Read the research" },
    secondary: { href: "/research/papers/nas-brca-002-pam50-repeatability.pdf", label: "View the report" },
    visual: "brca",
  },
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
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

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

        <div className={`home-carousel__visual home-carousel__visual--${activeSlide.visual}`} aria-hidden={!(["workflow", "brca"].includes(activeSlide.visual))}>
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
          {activeSlide.visual === "brca" && (
            <figure className="home-brca-visual">
              <div className="home-brca-visual__frame">
                <Image
                  src="/research/nas-brca-002/figure-1-agreement.png"
                  alt="Four separate PAM50 technical-repeat agreement estimates with 95 percent Wilson intervals"
                  width={1600}
                  height={900}
                  sizes="(max-width: 767px) 92vw, 48vw"
                  priority
                />
              </div>
              <figcaption>Separate estimates · cohorts not pooled · not for clinical use</figcaption>
            </figure>
          )}
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
