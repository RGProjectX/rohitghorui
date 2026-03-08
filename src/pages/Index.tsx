import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIBuildSection from "@/components/WhatIBuildSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";

import TechStackSection from "@/components/TechStackSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const sections = sectionsRef.current?.querySelectorAll("[data-animate]");
    sections?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionsRef} className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div data-animate className="opacity-0"><WhatIBuildSection /></div>
      <div data-animate className="opacity-0"><ExperienceSection /></div>
      <div data-animate className="opacity-0"><ProjectsSection /></div>
      
      <div data-animate className="opacity-0"><TechStackSection /></div>
      <div data-animate className="opacity-0"><BlogSection /></div>
      <div data-animate className="opacity-0"><ContactSection /></div>
      <Footer />
    </div>
  );
};

export default Index;
