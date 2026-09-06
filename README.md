# Alex Kim's playful developer site

A Next.js App Router portfolio, blog, and about page with a pastel scrapbook feel. It is ready to deploy on Vercel.

## Run locally

1. Install Node.js 18.18 or newer.
2. Run `npm install`.
3. Run `npm run dev` and open `http://localhost:3000`.

Use `npm run build` to make a production build.

## Make it yours

- Update your name, bio, links, skills, and project cards in `data/site.ts`. Every placeholder is collected there.
- Add a blog post by dropping a `.md` file in `content/posts/`. Copy either example post, give it a URL-friendly filename, and update its frontmatter (`title`, `date`, `excerpt`, `tags`, and optional `readingTime`).
- Markdown posts support normal headings, lists, links, inline code, and fenced code blocks.

## Deploy to Vercel

Push this repository to GitHub, import it at [vercel.com/new](https://vercel.com/new), and accept Vercel's detected Next.js settings. No environment variables are required for the starter.

## Easter egg

The 404 page is intentionally odd. Try visiting a route that does not exist.
