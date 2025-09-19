"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import { products } from "../../data/site";

export default function Products() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const nudge = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardW = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 320;
    el.scrollBy({ left: (dir === "left" ? -1 : 1) * (cardW + 24), behavior: "smooth" });
  };

  return (
    <section id="products" className="px-6 py-16 border-y border-white/10 bg-[#000614]">
      <div className="max-w-6xl mx-auto">
        {/* Header row like the reference */}
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xs sm:text-sm tracking-[0.12em] uppercase font-semibold text-white/80">
            Other products & services
          </h2>

          <div className="flex items-center gap-2">
            <Link
              href="/products"
              className="text-xs sm:text-sm rounded-full border border-white/20 px-3 py-1.5 hover:bg-white/10"
            >
              Explore products →
            </Link>
            <button
              aria-label="Scroll left"
              onClick={() => nudge("left")}
              className="rounded-full border border-white/20 px-3 py-1.5 text-sm hover:bg-white/10"
            >
              ←
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => nudge("right")}
              className="rounded-full border border-white/20 px-3 py-1.5 text-sm hover:bg-white/10"
            >
              →
            </button>
          </div>
        </div>

        {/* Sub copy (optional) */}
        <p className="mt-2 text-white/60 text-sm">
          A modular stack that plays nicely together. Start anywhere, scale everywhere.
        </p>

        {/* Horizontal scroller */}
        <div
          ref={scrollerRef}
          className="mt-6 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <style jsx>{`div::-webkit-scrollbar{display:none}`}</style>

          {products.map((p, i) => (
            <Reveal
              key={i}
              data-card
              className="snap-start min-w-[300px] sm:min-w-[360px] rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <Link
                href={p.href}
                className="block p-5 focus:outline-none focus:ring-2 focus:ring-[#4BD3A5] rounded-2xl"
              >
                {/* top row: title badge + big icon block (right) */}
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-block text-[10px] uppercase tracking-wide bg-white/10 px-2 py-0.5 rounded">
                    {p.title}
                  </span>
                  <span className="rounded-xl bg-black/30 p-4 border border-white/10">
                    <Image
                      src={p.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="invert opacity-90"
                    />
                  </span>
                </div>

                {/* description strip like the mock */}
                <p className="mt-4 text-sm text-white/80 leading-relaxed">{p.desc}</p>

                <span className="mt-3 inline-block underline text-[#1D5AC9]">
                  Learn more →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
