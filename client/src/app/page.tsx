"use client";

import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import QuickAction from "@/components/QuickAction";
import Skill from "@/components/Skill";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <main className="flex min-h-screen flex-col justify-between mx-auto pt-5 px-5 md:px-20 lg:px-40 container">
        <section className="w-full mb-20" id="navbar">
          <Navbar />
        </section>

        <section id="hero" className="mb-32">
          <Hero />
        </section>

        {/* <section id="education" className="mb-32">
          <Education />
        </section> */}

        {/* <section id="experience" className="mb-32">
          <Experience />
        </section> */}

        <section id="skills" className="mb-32">
          <Skill />
        </section>

        <section id="quick-action" className="mb-32">
          <QuickAction />
        </section>

        <section id="projects" className="mb-32">
          <Project />
        </section>

        <section id="contact" className="mb-20">
          <Contact />
        </section>

        <section id="footer">
          <Footer />
        </section>

        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-2xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none transform hover:scale-110 transition-all duration-300 z-50 group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
      </main>
    </div>
  );
}
