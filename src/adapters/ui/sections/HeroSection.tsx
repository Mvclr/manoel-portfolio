/**
 * HeroSection Component
 * Main hero section with welcome message, CTA buttons, and terminal block
 * Organism - Complex Feature Section
 */

import React from 'react';
import { Zap, Github } from 'lucide-react';
import { TerminalBlock } from '@adapters/ui/design-system';
import { Profile } from '@core/domain/Profile';

interface HeroSectionProps {
  profile: Profile;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => (
  <main className="relative z-10 pt-32 pb-20 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 font-mono text-xs">
          <Zap size={12} />
          <span>{profile.role.toUpperCase()}</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif text-slate-100 leading-tight">
          Architecting <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Scalable Solutions</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-md leading-relaxed">
          {profile.tagline}
        </p>
        <div className="flex gap-4 pt-4">
          <a href="#projects" className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold font-mono text-sm tracking-wide rounded transition-all">
            VIEW PROJECTS
          </a>
          <button className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 font-mono text-sm tracking-wide rounded transition-all flex items-center gap-2">
            <Github size={16} /> GITHUB
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full"></div>
        <TerminalBlock />
      </div>
    </div>
  </main>
);
