"use client";

import { useEffect } from "react";
import Link from "next/link";
import gsap from "../../lib/gsap";
import Stat from "../ui/Stat";
import Reveal from "../ui/Reveal";
import { stats } from "../../data/site";

export default function Hero() {
  useEffect(() => {
    let isMounted = true;
    const killers: Array<() => void> = [];

    // subtle load-in for headline
    const h = document.querySelector<HTMLElement>("[data-hero]");
    if (h) {
      gsap.from(h, { opacity: 0, y: 24, duration: 0.6, ease: "power2.out" });
    }

    // parallax blobs
    (async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!isMounted) return;

      const els = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
      els.forEach((el, i) => {
        const tween = gsap.to(el, {
          yPercent: i % 2 === 0 ? -10 : -18,
          ease: "none",
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        // store cleanup
        killers.push(() => tween.scrollTrigger?.kill());
      });
    })();

    return () => {
      isMounted = false;
      killers.forEach((fn) => fn());
    };
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden px-6 pt-28 pb-16">
      {/* Background + parallax blobs (decorative) */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          data-parallax
          className="pointer-events-none absolute w-[560px] h-[560px] bg-[#3490f3] opacity-25 blur-[160px] top-[-120px] right-[-120px] rotate-12"
        />
        <div
          data-parallax
          className="pointer-events-none absolute w-[420px] h-[420px] bg-[#4BD3A5] opacity-20 blur-[140px] bottom-[-120px] left-[-100px] rotate-[30deg]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_-10%,rgba(52,144,243,0.12),transparent)]" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 data-hero className="text-5xl sm:text-6xl font-semibold leading-tight tracking-tight">
          Build bold Web3, AI, and blockchain products
        </h1>

        <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
          Altiora Infotech unites engineering, security, and growth to take you from idea to scale.
          One team, one roadmap, measurable outcomes.
        </p>

        <Reveal className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/products"
            className="px-6 py-3 rounded-full bg-[#4BD3A5] text-[#010c22] font-medium hover:opacity-90 transition"
          >
            Explore products
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full border border-white/15 hover:bg-white/5"
          >
            Talk to us
          </Link>
        </Reveal>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <Stat key={i} value={s.k as number} prefix={(s as any).prefix} suffix={(s as any).suffix} label={s.v} />
          ))}
        </div>
      </div>
    </section>
  );
}
