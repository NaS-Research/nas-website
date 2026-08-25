"use client";

import Image from "next/image";
import Link from "next/link";

const features = [
  { href: "/research/introducing-nas-cortex", label: "Research", detail: "5 min read", title: "Introducing the NaS Cortex: Life Science’s Digital Brain", image: "/assets/images/ArticleOne.png", imageAlt: "The NaS Cortex white paper cover", paper: true },
  { href: "/research/why-hyde-park", label: "Community", detail: "5 min read", title: "Why Hyde Park", video: "/assets/videos/ChicagoThree.mp4#t=2" },
  { href: "/research/why-nas-exists", label: "Institutional essay", detail: "8 min read", title: "Why NaS Exists", image: "/assets/images/NaSLogo.jpeg", imageAlt: "NaS mark" },
];

export default function Featured() {
  return (
    <section id="next-section" className="home-featured">
      <div className="home-featured__inner">
        <header className="home-editorial-heading"><p>Selected work</p><h2>Research begins with where we choose to stand.</h2></header>
        <Link href="/research/chicago-our-chosen-home" className="home-featured__lead">
          <div className="home-featured__lead-media"><video src="/assets/videos/ChicagoOne.mp4" autoPlay loop muted playsInline /></div>
          <div className="home-featured__lead-copy"><div><span>Release</span><span>May 8, 2025</span></div><h3>Chicago: Our Chosen Home</h3><span className="home-arrow" aria-hidden="true">↗</span></div>
        </Link>
        <div className="home-featured__grid">
          {features.map((feature) => (
            <Link href={feature.href} className="home-featured__item" key={feature.href}>
              <div className={`home-featured__item-media ${feature.paper ? "home-featured__item-media--paper" : ""}`}>
                {feature.video ? <video src={feature.video} muted autoPlay loop playsInline /> : <Image src={feature.image} alt={feature.imageAlt} width={900} height={650} />}
              </div>
              <div className="home-featured__item-copy"><p><span>{feature.label}</span><span>{feature.detail}</span></p><h3>{feature.title}</h3><span className="home-arrow" aria-hidden="true">↗</span></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
