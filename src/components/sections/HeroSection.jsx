import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="home-mark-hero" aria-labelledby="home-mark-title">
      <div className="home-mark-hero__atmosphere" aria-hidden="true" />

      <div className="home-mark" aria-hidden="true">
        <div className="home-mark__halo" />
        <Image
          src="/assets/images/NaSLogo-transparent.png"
          alt=""
          width={512}
          height={512}
          priority
          className="home-mark__image home-mark__image--base"
        />
        <Image
          src="/assets/images/NaSLogo-transparent.png"
          alt=""
          width={512}
          height={512}
          priority
          className="home-mark__image home-mark__image--light"
        />
      </div>

      <div className="home-mark-hero__statement">
        <p className="home-mark-hero__eyebrow">Biology asks difficult questions.</p>
        <h1 id="home-mark-title">We build the systems to investigate them.</h1>
      </div>

      <div className="home-mark-hero__actions" aria-label="Explore NaS Research">
        <Link className="home-mark-hero__action--primary" href="/research">
          Read our publications <span aria-hidden="true">↗</span>
        </Link>
        <Link href="/about">Discover our mission <span aria-hidden="true">↗</span></Link>
      </div>

      <a className="home-mark-hero__scroll" href="#next-section">
        See our current work <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
