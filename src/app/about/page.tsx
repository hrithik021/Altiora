// src/app/about/page.tsx
"use client";

import Header from "../../assets/Header";
import Footer from "../../assets/Footer";

import AboutServices from "../../components/sections/about/Services";
import AboutStaff from "../../components/sections/about/Staff";
import AboutProjects from "../../components/sections/about/Projects";
import AboutTestimonials from "../../components/sections/about/Testimonials";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB]">
      <Header />

      <section className="px-6 pt-20 pb-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-semibold">About Altiora</h1>
          <p className="mt-4 text-white/70 max-w-3xl">
            We build production-grade Web3, blockchain and AI products. Our team blends protocol
            engineering, security, and growth to move from idea to scale—fast.
          </p>
        </div>
      </section>

      <AboutServices />
      <AboutStaff />
      <AboutProjects />
      <AboutTestimonials />
      <Footer />
    </div>
  );
}
