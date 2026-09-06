import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getPost, getPosts } from "@/lib/posts";
export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return (
    <main className="page-enter mx-auto max-w-3xl px-5 pb-24 pt-16 md:px-8 md:pt-24">
      <Link
        href="/blog"
        className="mono text-xs text-[#64706b] hover:text-[#17201d]"
      >
        ← All writing
      </Link>
      <article className="mt-12">
        <div className="border-b rule pb-10">
          <p className="mono text-xs text-[#64706b]">
            {post.date} · {post.readingTime}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-.065em] md:text-6xl">
            {post.title}
          </h1>
          <div className="mt-7 flex gap-3">
            {post.tags.map((tag) => (
              <span className="mono text-xs text-[#64706b]" key={tag}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="prose mt-10">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
