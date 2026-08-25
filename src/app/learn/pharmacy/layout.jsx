import Link from "next/link";

export default function PharmacyLayout({ children }) {
  return (
    <>
      {children}
      <details className="pharmacy-tool-menu">
        <summary>
          <span>Pharmacy</span>
          <strong>Open tools</strong>
          <i aria-hidden="true">+</i>
        </summary>
        <nav aria-label="Pharmacy tools">
          <Link href="/learn/pharmacy"><span>01</span>Home</Link>
          <Link href="/learn/pharmacy/atlas"><span>02</span>Visual atlas</Link>
          <Link href="/learn/pharmacy/drugs"><span>03</span>Drug library</Link>
          <Link href="/learn/pharmacy#curriculum"><span>04</span>Curriculum</Link>
          <Link href="/learn/pharmacy#learning-library"><span>05</span>Study guides</Link>
        </nav>
      </details>
    </>
  );
}
