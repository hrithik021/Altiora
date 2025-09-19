"use client";
import { useEffect, useRef } from "react";
import gsap from "../../lib/gsap";

type Props = { children: React.ReactNode; className?: string };

export default function Reveal({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let st: import("gsap/ScrollTrigger").ScrollTrigger | null = null;
    let mounted = true;

    (async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const el = ref.current;
      if (!mounted || !el) return;

      gsap.set(el, { opacity: 0, y: 24 });
      st = ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }),
      });
    })();

    return () => { mounted = false; st?.kill(); };
  }, []);

  return <div ref={ref} className={className}>{children}</div>;
}
