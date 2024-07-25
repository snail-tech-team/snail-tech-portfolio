"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Skill from "@/components/Skill";
import Project from "@/components/Project";

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
    <main className="flex min-h-screen flex-col justify-between mx-auto pt-5 px-5 md:px-20 lg:px-40 container sm:overflow-y-hidden" >
      <section className="w-full mb-36" id="navbar">
        <Navbar />
      </section>
      <section id="hero" className="mb-36">
        <Hero />
      </section>
      <section id="education" className="mb-36">
        <Education />
      </section>
      <section id="experience" className="mb-36">
        <Experience />
      </section>
      <section id="skills" className="mb-36">
        <Skill />
      </section>
      <section id="projects" className="mb-36">
        <Project />
      </section>
      <section id="contact" className="mb-10">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>

      {showButton && (
        <button onClick={scrollToTop} className="fixed bottom-10 right-10 p-3 mb-3 bg-sky-700 text-white rounded-full shadow-lg hover:bg-sky-900 focus:outline-none">
          ↑ To Top
        </button>
      )}
    </main>
  );
}
