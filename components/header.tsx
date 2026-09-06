"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const nav = [
  ["/projects", "Projects"],
  ["/blog", "Writing"],
  ["/about", "About"],
] as const;
export function Header() {
  const path = usePathname();
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between border-b rule px-5 py-5 md:px-8">
      <Link href="/" className="text-lg font-semibold tracking-[-.05em]">
        rachel<span className="text-[#719000]">_</span>lim 🌱☀️
      </Link>
      <nav className="flex gap-5 text-sm text-[#64706b] md:gap-8">
        {nav.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            className={`transition hover:text-[#17201d] ${path === href ? "text-[#17201d]" : ""}`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
