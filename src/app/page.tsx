// src/app/page.tsx
"use client";
import { useEffect } from "react";

import Header from "../assets/Header";
import Footer from "../assets/Footer";

import Hero from "../components/sections/Hero";
import LogosMarquee from "../components/sections/LogosMarquee";
import Products from "../components/sections/Products";
import QuickLinks from "../components/sections/QuickLinks";  
import SuccessStoriesSection from "../components/sections/SuccessStories"; 
import Solutions from "../components/sections/Solutions";
import CaseStudies from "../components/sections/CaseStudies";
import Resources from "../components/sections/Resources";
import CTA from "../components/sections/CTA";

export default function Page() {
  // optional: keep this while debugging
  useEffect(() => {
    // Logs once on client; remove after you’re satisfied
    console.log({ Hero, LogosMarquee, Products, Solutions, CaseStudies, Resources, CTA });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB]">
      <Header />
      <Hero />
      <LogosMarquee />
      <Products />
        <QuickLinks /> 
        <SuccessStoriesSection />
      <Solutions />
      <CaseStudies />
      <Resources />
      <CTA />
      <Footer />
    </div>
  );
}
