/**
 * HomePage Component
 * Main page layout composing all sections into a complete home page
 * Page - Full Page Layout
 */

import React from 'react';
import { Navbar, Footer } from '@adapters/ui/design-system';
import {
  HeroSection,
  AboutSection,
  TechStackSection,
  ProjectSection,
  ContactSection
} from '@adapters/ui/sections';
import { Profile } from '@core/domain/Profile';
import { Skill } from '@core/domain/Skill';
import { Project } from '@core/domain/Project';

interface HomePageProps {
  profile: Profile;
  skills: Skill[];
  projects: Project[];
}

export const HomePage: React.FC<HomePageProps> = ({ profile, skills, projects }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-500/30 font-sans relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-amber-900/10 rounded-full blur-[128px] pointer-events-none"></div>

      {/* Structure */}
      <Navbar />
      <HeroSection profile={profile} />
      <AboutSection profile={profile} />
      <TechStackSection skills={skills} />
      <ProjectSection projects={projects} />
      <ContactSection profile={profile} />
      <Footer />
      
    </div>
  );
};
