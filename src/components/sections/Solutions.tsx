"use client";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import { solutions } from "../../data/site";

export default function Solutions() {
  return (
    <section className="px-6 py-16 bg-[#000614] border-y border-white/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold">Solutions</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <Reveal key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="text-xs uppercase tracking-wide text-[#4BD3A5]">{s.tag}</span>
              <div className="mt-2 text-lg font-medium">{s.title}</div>
              <p className="text-sm text-white/70 mt-2">{s.copy}</p>
              <Link href={s.href} className="mt-4 inline-block underline">Explore →</Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
