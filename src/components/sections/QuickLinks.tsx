"use client";

import Link from "next/link";
import Reveal from "../ui/Reveal";

const items = [
  { label: "Staff", href: "/about#staff", desc: "Meet the team" },
  { label: "Projects", href: "/about#projects", desc: "Case studies & work" },
  { label: "Happy Clients", href: "/about#testimonials", desc: "Testimonials" },
];

export default function QuickLinks() {
  return (
    <section className="px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={i}>
              <Link
                href={it.href}
                className="group block rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition
                           h-28 sm:h-32 w-full text-center flex flex-col items-center justify-center
                           focus:outline-none focus:ring-2 focus:ring-[#4BD3A5]"
                aria-label={`${it.label}: ${it.desc}`}
              >
                <span className="text-lg font-medium">{it.label}</span>
                <span className="text-xs text-white/60 group-hover:text-white/80 mt-1">{it.desc}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
