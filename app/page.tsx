/**
 * Main page - One-page portfolio
 * Assembles all sections into a single scrollable page
 */

'use client';

import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { ExperienceSection } from '@/sections/ExperienceSection';
import { EducationSection } from '@/sections/EducationSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { ContactSection } from '@/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
