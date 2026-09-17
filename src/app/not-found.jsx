import Link from "next/link";
import Footer from "@/components/Footer";
export default function NotFound() {
  return <><section className="nas-shell" style={{paddingBlock:"clamp(8rem, 18vw, 14rem)", minHeight:"65vh"}}>
    <p className="nas-kicker">404 · NaS Research</p>
    <h1 style={{fontSize:"clamp(2.5rem, 7vw, 5rem)",letterSpacing:"-.05em",lineHeight:1.1,marginBlock:"1.5rem"}}>This page could not be found.</h1>
    <p style={{color:"#b8b8b8",maxWidth:"36rem",lineHeight:1.7}}>The address may have changed. Explore our published research or return to the homepage.</p>
    <nav aria-label="Page recovery" style={{display:"flex",flexWrap:"wrap",gap:"2rem",marginTop:"2rem"}}><Link href="/">Return home ↗</Link><Link href="/research">Explore research ↗</Link></nav>
  </section><Footer /></>;
}
