import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BentoGridSection from "@/components/BentoGridSection";
import WhatIBuildSection from "@/components/WhatIBuildSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import TechStackSection from "@/components/TechStackSection";
// import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import SectionTransition from "@/components/SectionTransition";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField />
      <Navbar />
      <HeroSection />
      <SectionTransition>
        <BentoGridSection />
      </SectionTransition>
      <SectionTransition>
        <TechStackSection />
      </SectionTransition>
      <SectionTransition>
        <WhatIBuildSection />
      </SectionTransition>
      <SectionTransition>
        <ExperienceSection />
      </SectionTransition>
      <SectionTransition>
        <EducationSection />
      </SectionTransition>
      <SectionTransition>
        <ProjectsSection />
      </SectionTransition>
      <SectionTransition>
        <ArchitectureSection />
      </SectionTransition>
      {/* <SectionTransition>
        <BlogSection />
      </SectionTransition> */}
      <SectionTransition>
        <ContactSection />
      </SectionTransition>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
