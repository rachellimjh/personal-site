"use client";
import { useEffect, useState } from "react";

export function CursorTrail() {
  const [point, setPoint] = useState({ x: -100, y: -100 });
  useEffect(() => { const move = (e: MouseEvent) => setPoint({ x:e.clientX, y:e.clientY }); window.addEventListener("pointermove", move); return () => window.removeEventListener("pointermove", move); }, []);
  return <><div aria-hidden className="pointer-events-none fixed z-50 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#1f2a44] bg-[#ffe66d] mix-blend-multiply transition-transform duration-75 md:block" style={{ left:point.x, top:point.y }} /><div aria-hidden className="pointer-events-none fixed z-40 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff9f8a] transition-all duration-300 md:block" style={{ left:point.x, top:point.y }} /></>;
}
