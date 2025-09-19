// src/components/ui/Reveal.tsx
"use client";
import { useEffect, useRef } from "react";
import gsap from "../../lib/gsap"; // relative from this file

export default function Reveal({ children, className = "" }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let st: any;
    let isMounted = true;

    (async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const el = ref.current;
      if (!isMounted || !el) return;

      gsap.set(el, { opacity: 0, y: 24 });
      st = ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }),
      });
    })();

    return () => { isMounted = false; if (st) st.kill(); };
  }, []);

  return <div ref={ref} className={className}>{children}</div>;
}
