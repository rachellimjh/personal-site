import { site } from "@/data/site";
export default function AboutPage() {
  return (
    <main className="page-enter mx-auto max-w-6xl px-5 pb-24 pt-16 md:px-8 md:pt-24">
      <p className="mono text-xs uppercase tracking-[.16em] text-[#64706b]">
        03 — About
      </p>
      <section className="relative mt-5 grid gap-14 overflow-hidden border-b rule pb-16 md:grid-cols-[1.2fr_.8fr]">
        <h1 className="text-5xl font-semibold tracking-[-.07em] md:text-7xl">
          An AI engineer who cares about the systems people don't see.
        </h1>
        <p className="relative self-end text-xl leading-relaxed text-[#4e5954]">
          {site.bio}
        </p>
      </section>
      <section className="grid gap-12 py-16 md:grid-cols-[.75fr_1.25fr]">
        <p className="mono text-xs uppercase tracking-[.16em] text-[#64706b]">
          Tools I reach for
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          {site.skills.map((skill) => (
            <span className="text-lg" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>
      <section className="grid gap-12 border-t rule py-16 md:grid-cols-[.75fr_1.25fr]">
        <p className="mono text-xs uppercase tracking-[.16em] text-[#64706b]">
          Elsewhere
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-4 text-2xl font-semibold tracking-[-.05em]">
          <a className="hover:text-[#719000]" href={`mailto:${site.email}`}>
            Email ↗
          </a>
          <a
            className="hover:text-[#719000]"
            href={site.links.github}
            target="_blank"
          >
            GitHub ↗
          </a>
          <a
            className="hover:text-[#719000]"
            href={site.links.linkedin}
            target="_blank"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>
    </main>
  );
}
