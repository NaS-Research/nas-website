"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DenialsWorkflowFigure from "@/components/research/DenialsWorkflowFigure";
import { publicationArtwork } from "@/data/publicationArtwork";

const bbbArtwork = publicationArtwork["blood-brain-barrier-prediction-audit"];

const pam50Artwork = publicationArtwork["pam50-technical-repeatability"];

const slides = [
  {
    id: "bbb",
    eyebrow: "NAS-BBB-001 · Drug discovery",
    title: "Testing the limits of blood-brain barrier prediction",
    titleLines: ["Testing the limits of", "blood-brain barrier", "prediction"],
    summary: "How well do predictions hold up when the chemistry changes?",
    primary: { href: "/research/blood-brain-barrier-prediction-audit", label: "Read the research" },
    secondary: { href: "/research/papers/nas-bbb-prediction-audit-v1.pdf", label: "View the paper" },
    visual: "bbb",
  },
  {
    id: "brca",
    eyebrow: "NAS-BRCA-002 · Oncology",
    title: "PAM50 repeatability. Tested.",
    titleLines: ["PAM50 repeatability.", "Tested."],
    summary: "136 technical-repeat pairs. One frozen subtype method.",
    primary: { href: "/research/pam50-technical-repeatability", label: "Read the research" },
    secondary: { href: "/research/papers/nas-brca-002-pam50-repeatability.pdf", label: "View the paper" },
    visual: "brca",
  },
  {
    id: "denials",
    eyebrow: "New design partner release",
    title: "Introducing NaS Denials",
    summary: "Software for specialty denial prevention and human-reviewed appeals.",
    primary: { href: "/research/introducing-nas-denials", label: "Read the release" },
    secondary: { href: "/research/papers/introducing-nas-denials.pdf", label: "View the paper" },
    visual: "workflow",
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

        <div className={`home-carousel__visual home-carousel__visual--${activeSlide.visual}`} aria-hidden={!(["workflow", "brca", "bbb"].includes(activeSlide.visual))}>
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
          {["brca", "bbb"].includes(activeSlide.visual) && (
            <figure className="home-brca-visual">
              <div className="home-brca-visual__frame">
                <Image
                  src={activeSlide.visual === "bbb" ? bbbArtwork.src : (pam50Artwork.heroSrc ?? pam50Artwork.src)}
                  alt={activeSlide.visual === "bbb" ? bbbArtwork.alt : (pam50Artwork.heroAlt ?? pam50Artwork.alt)}
                  width={1600}
                  height={activeSlide.visual === "bbb" ? 1067 : 900}
                  sizes="(max-width: 767px) 92vw, 48vw"
                  priority
                />
              </div>
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

      <a className="home-mark-hero__scroll" href="#next-section">
        Discover NaS <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
