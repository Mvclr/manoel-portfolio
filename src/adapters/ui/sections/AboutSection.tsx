/**
 * AboutSection Component
 * Profile information with avatar visual and bio content
 * Organism - Complex Feature Section
 */

import React from 'react';
import { User, MapPin, Briefcase } from 'lucide-react';
import { SectionTitle } from '@adapters/ui/design-system';
import { Profile } from '@core/domain/Profile';

interface AboutSectionProps {
  profile: Profile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => (
  <section id="profile" className="py-24 px-6 relative border-t border-slate-900/50">
    <div className="max-w-5xl mx-auto">
      <SectionTitle title="About Me" subtitle="Professional Profile" />
      <div className="grid md:grid-cols-12 gap-12 items-center">
        {/* Avatar Visual */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-64 h-64 group">
            <div className="absolute inset-[-10px] border border-dashed border-slate-700 rounded-full animate-[spin_10s_linear_infinite] opacity-30"></div>
            <div className="absolute inset-0 bg-slate-900 border-2 border-amber-500/30 rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
            <div className="absolute inset-0 bg-slate-900 border-2 border-indigo-500/30 -rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
            <div className="relative h-full w-full bg-slate-800 flex flex-col items-center justify-center overflow-hidden border border-slate-700">
              <User size={64} className="text-slate-600 mb-2" />
              <span className="text-slate-600 font-mono text-xs uppercase tracking-widest">Avatar.png</span>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent h-full w-full animate-[ping_3s_ease-in-out_infinite] opacity-20 pointer-events-none"></div>
            </div>
          </div>
        </div>
        {/* Bio Content */}
        <div className="md:col-span-7 space-y-6">
          <h3 className="text-2xl font-serif text-slate-200">
            <span className="text-amber-500">Hello, World.</span> I'm a Senior Developer specializing in Modern Web Technologies.
          </h3>
          {profile.bio.map((paragraph, index) => (
            <p key={index} className="text-slate-400 leading-relaxed text-lg">{paragraph}</p>
          ))}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-3 border border-slate-800 bg-slate-900/50 rounded flex items-center gap-3">
              <MapPin className="text-indigo-400" size={18} />
              <span className="text-slate-300 font-mono text-sm">Location: {profile.location}</span>
            </div>
            <div className="p-3 border border-slate-800 bg-slate-900/50 rounded flex items-center gap-3">
              <Briefcase className="text-amber-400" size={18} />
              <span className="text-slate-300 font-mono text-sm">Experience: {profile.experience}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
