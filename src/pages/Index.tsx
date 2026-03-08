import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIBuildSection from "@/components/WhatIBuildSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import TechStackSection from "@/components/TechStackSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField />
      <Navbar />
      <HeroSection />
      <WhatIBuildSection />
      <ExperienceSection />
      <ProjectsSection />
      <ArchitectureSection />
      <TechStackSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
