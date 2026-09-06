import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");
export type Post = { slug: string; title: string; date: string; excerpt: string; tags: string[]; readingTime: string; content?: string };
export function getPosts(): Post[] { return fs.readdirSync(postsDirectory).filter(file => file.endsWith(".md")).map(file => { const slug = file.replace(/\.md$/, ""); const { data } = matter(fs.readFileSync(path.join(postsDirectory, file), "utf8")); return { slug, title:data.title, date:data.date, excerpt:data.excerpt, tags:data.tags || [], readingTime:data.readingTime || "3 min read" }; }).sort((a,b) => +new Date(b.date) - +new Date(a.date)); }
export function getPost(slug: string): Post | null { const file = path.join(postsDirectory, `${slug}.md`); if (!fs.existsSync(file)) return null; const {data, content} = matter(fs.readFileSync(file, "utf8")); return { slug, title:data.title, date:data.date, excerpt:data.excerpt, tags:data.tags || [], readingTime:data.readingTime || "3 min read", content }; }
