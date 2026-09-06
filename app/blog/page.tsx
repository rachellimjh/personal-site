import Link from "next/link";
import { getPosts } from "@/lib/posts";
export default function BlogPage() {
  const posts = getPosts();
  return (
    <main className="page-enter mx-auto max-w-5xl px-5 pb-24 pt-16 md:px-8 md:pt-24">
      <p className="mono text-xs uppercase tracking-[.16em] text-[#64706b]">
        02 — Writing
      </p>
      <h1 className="mt-5 max-w-2xl text-5xl font-semibold tracking-[-.07em] md:text-7xl">
        Stuff I think about too much.
      </h1>
      <section className="mt-16 border-t rule">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className={`lift group grid gap-5 border-b rule py-8 md:grid-cols-[.25fr_1fr_.35fr] md:px-4 ${post.tags.includes("tutorial") ? "hover:bg-[#e2f4e8]" : "hover:bg-[#f0ffff]"}`}
          >
            <div className="mono text-xs text-[#64706b]">{post.date}</div>
            <div>
              <h2 className="text-2xl font-semibold tracking-[-.045em]">
                {post.title}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </h2>
              <p className="mt-3 leading-relaxed text-[#64706b]">
                {post.excerpt}
              </p>
            </div>
            <div className="flex flex-wrap content-start gap-2 md:justify-end">
              {post.tags.map((tag) => (
                <span className="mono text-xs text-[#64706b]" key={tag}>
                  #{tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
