import { projects } from "@/data/site";
export default function ProjectsPage() {
  return (
    <main className="page-enter mx-auto max-w-6xl px-5 pb-24 pt-16 md:px-8 md:pt-24">
      <p className="mono text-xs uppercase tracking-[.16em] text-[#64706b]">
        01 — Projects
      </p>
      <div className="mt-5 flex flex-wrap items-end justify-between gap-6 border-b rule pb-12">
        <h1 className="max-w-2xl text-5xl font-semibold tracking-[-.07em] md:text-7xl">
          Built for the useful, the curious, and the in-between.
        </h1>
        <p className="max-w-xs text-[#64706b]">
          A collection of past projects (both school and personal) I have
          dabbled with.
        </p>
      </div>
      <section className="divide-y rule">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`lift grid gap-7 px-3 py-10 md:grid-cols-[.15fr_1fr_.75fr] md:py-14 ${index === 0 ? "hover:bg-[#e2f4e8]" : index === 1 ? "hover:bg-[#f0ffff]" : "hover:bg-[#fffaa0]"}`}
          >
            <span className="mono text-xs text-[#64706b]">0{index + 1}</span>
            <div>
              <h2 className="text-3xl font-semibold tracking-[-.05em]">
                {project.title}
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#4e5954]">
                {project.description}
              </p>
            </div>
            <div className="flex flex-col justify-between gap-8">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    className="mono border rule bg-[#f7f7f2] px-2 py-1 text-xs text-[#4e5954]"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-5 text-sm font-medium">
                <a
                  className="border-b border-[#17201d] pb-1 hover:text-[#719000]"
                  href={project.repo}
                  target="_blank"
                >
                  Repository ↗
                </a>
                <a
                  className="border-b border-[#17201d] pb-1 hover:text-[#719000]"
                  href={project.live}
                  target="_blank"
                >
                  Live site ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
