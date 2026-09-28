import Link from "next/link";

export default function WorkWithNas() {
  return (
    <section className="home-work home-work--compact" aria-labelledby="home-work-title">
      <div className="home-work__inner">
        <header className="home-work__header">
          <div><p>Work with NaS</p><h2 id="home-work-title">Bring your perspective.</h2></div>
          <div><p>A question, an idea, or expertise to share.</p><div className="home-work__actions"><Link href="/support" className="home-work__secondary">Start a conversation <span aria-hidden="true">↗</span></Link></div></div>
        </header>
      </div>
    </section>
  );
}
