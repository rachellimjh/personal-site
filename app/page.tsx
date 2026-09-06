import Link from "next/link";
import { site } from "@/data/site";
const links = [
  ["/projects", "Selected projects", "A few things I’ve designed and built."],
  ["/blog", "Writing", "Notes on code, products, and the creative process."],
  ["/about", "About me", "The short version, plus ways to get in touch."],
];
export default function Home() {
  return (
    <main className="page-enter mx-auto max-w-6xl px-5 pb-20 md:px-8">
      <section className="relative grid min-h-[62vh] items-end gap-12 overflow-hidden border-b rule py-16 md:grid-cols-[1.2fr_.8fr] md:py-24">
        <div>
          <p className="mono text-xs uppercase tracking-[.16em] text-[#64706b]">
            AI Engineer · Singapore
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.075em] md:text-8xl">
            I turn curiosity about how things work into things that work.
          </h1>
        </div>
        <div className="relative border-l-0 border-[#d9ddd5] pb-1 md:border-l md:pl-8">
          <p className="max-w-sm text-lg leading-relaxed text-[#4e5954]">
            {site.tagline}
          </p>
          <div className="mt-8 flex items-center gap-3">
            <span className="accent-dot h-2 w-2 rounded-full" />
            <span className="mono text-xs text-[#64706b]">
              {site.currently}
            </span>
          </div>
        </div>
      </section>
      <section className="py-8">
        {links.map(([href, title, description], index) => (
          <Link
            href={href}
            key={href}
            className={`lift group grid gap-4 border-b rule py-7 md:grid-cols-[.2fr_1fr_1fr] md:items-center md:px-4 ${index === 0 ? "hover:bg-[#e2f4e8]" : index === 1 ? "hover:bg-[#f0ffff]" : "hover:bg-[#fffaa0]"}`}
          >
            <span className="mono text-xs text-[#64706b]">0{index + 1}</span>
            <h2 className="text-2xl font-semibold tracking-[-.05em] md:text-3xl">
              {title}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </h2>
            <p className="text-[#64706b]">{description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
