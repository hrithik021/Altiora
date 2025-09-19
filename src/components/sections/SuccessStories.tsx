"use client";

import Reveal from "../ui/Reveal";
import StoryCard, { Story } from "./success/StoryCard";
import { featured, stories } from "../../data/stories";

export default function SuccessStoriesSection() {
  const [hero, ...rest] = featured as Story[];

  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">Success Stories</h2>
        <p className="mt-3 text-white/70 text-center">
          Press, launches, and case studies from teams we’ve partnered with.
        </p>
      </div>

      {/* Featured row (1 big + 2 side tiles) */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Reveal className="lg:col-span-2">
          <StoryCard story={hero} variant="hero" />
        </Reveal>

        <div className="grid grid-cols-1 gap-6">
          {rest.slice(0, 2).map((s, i) => (
            <Reveal key={i}>
              <StoryCard story={s} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* More stories grid */}
      <div className="max-w-6xl mx-auto mt-10 border-t border-white/10 pt-8 bg-transparent">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <Reveal key={i}>
              <StoryCard story={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
