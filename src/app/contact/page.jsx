import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | NaS Research",
  description: "Contact NaS Research and founder Dalron J. Robertson.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <section className="flex flex-1 items-center px-6 pb-24 pt-36 sm:px-10 sm:pt-44">
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#c7a069]">
            Contact NaS
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Let’s talk about what science can become.
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-8 text-neutral-400 sm:text-xl">
            For research discussions, partnerships, support, media inquiries, or general questions, contact founder Dalron J. Robertson directly.
          </p>

          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Email</p>
            <Link
              href="mailto:dalronj.robertson@gmail.com"
              className="mt-3 inline-block break-all text-2xl font-medium transition hover:text-[#c7a069] sm:text-4xl"
            >
              dalronj.robertson@gmail.com
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
