import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="home-mark-hero" aria-labelledby="home-mark-title">
      <div className="home-mark-hero__atmosphere" aria-hidden="true" />

      <div className="home-mark-hero__identity">
        <p>NaS Research</p>
        <span>Chicago · Life sciences · Intelligent systems</span>
      </div>

      <div className="home-mark" aria-hidden="true">
        <div className="home-mark__halo" />
        <Image
          src="/assets/images/NaSLogo.jpeg"
          alt=""
          width={512}
          height={512}
          priority
          className="home-mark__image home-mark__image--base"
        />
        <Image
          src="/assets/images/NaSLogo.jpeg"
          alt=""
          width={512}
          height={512}
          priority
          className="home-mark__image home-mark__image--light"
        />
      </div>

      <div className="home-mark-hero__statement">
        <p className="home-mark-hero__eyebrow">Independent research for the life sciences</p>
        <h1 id="home-mark-title">Building systems for scientific discovery.</h1>
      </div>

      <div className="home-mark-hero__actions" aria-label="Explore NaS Research">
        <Link href="/research">Explore research <span aria-hidden="true">↗</span></Link>
        <Link href="/about">About NaS <span aria-hidden="true">↗</span></Link>
      </div>

      <a className="home-mark-hero__scroll" href="#next-section">
        <span aria-hidden="true">↓</span> Scroll to explore
      </a>
    </section>
  );
}
