import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="home-mark-hero" aria-labelledby="home-mark-title">
      <div className="home-mark-hero__atmosphere" aria-hidden="true" />

      <Link className="home-mark-hero__current" href="/research/introducing-nas-cortex">
        <span>Current work</span>
        <strong>The NaS Cortex</strong>
        <small>
          Knowledge architecture for the life sciences <span aria-hidden="true">↗</span>
        </small>
      </Link>

      <div className="home-mark" aria-hidden="true">
        <div className="home-mark__halo" />
        <Image
          src="/assets/images/NaSLogo-transparent-hd.png"
          alt=""
          width={2048}
          height={2048}
          sizes="(max-width: 767px) 88vw, 55vmin"
          priority
          className="home-mark__image home-mark__image--base"
        />
        <Image
          src="/assets/images/NaSLogo-transparent-hd.png"
          alt=""
          width={2048}
          height={2048}
          sizes="(max-width: 767px) 88vw, 55vmin"
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
