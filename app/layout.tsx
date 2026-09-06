import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
export const metadata: Metadata = {
  title: "Rachel Lim — AI Engineer",
  description: "Projects, notes, and a little about Rachel Lim.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
