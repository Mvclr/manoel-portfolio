/**
 * ContactSection Component
 * Contact information cards and contact form
 * Organism - Complex Feature Section
 */

import React from 'react';
import { Mail, Linkedin, Send } from 'lucide-react';
import { SectionTitle } from '@adapters/ui/design-system';
import { Profile } from '@core/domain/Profile';

interface ContactSectionProps {
  profile: Profile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => (
  <section id="contact" className="py-24 px-6 relative">
    <div className="max-w-4xl mx-auto">
      <SectionTitle title="Contact Me" subtitle="Let's Work Together" />
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h3 className="text-xl font-serif text-slate-200 mb-6">Contact Information</h3>
          <a href={`mailto:${profile.email}`} className="block group p-4 border border-slate-800 bg-slate-900/50 hover:border-amber-500/50 transition-colors flex items-center gap-4">
            <div className="p-3 bg-amber-500/10 rounded-full group-hover:bg-amber-500/20 transition-colors">
              <Mail className="text-amber-500" size={20} />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-500 uppercase">Email</div>
              <div className="text-slate-300">{profile.email}</div>
            </div>
          </a>
          <a href="#" className="block group p-4 border border-slate-800 bg-slate-900/50 hover:border-indigo-500/50 transition-colors flex items-center gap-4">
            <div className="p-3 bg-indigo-500/10 rounded-full group-hover:bg-indigo-500/20 transition-colors">
              <Linkedin className="text-indigo-500" size={20} />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-500 uppercase">LinkedIn</div>
              <div className="text-slate-300">{profile.linkedin}</div>
            </div>
          </a>
        </div>
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-indigo-500/20 blur opacity-20"></div>
          <form className="relative bg-slate-950 border border-slate-800 p-6 space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-mono text-slate-500 uppercase">Name</label>
              <input type="text" placeholder="Your Name" className="w-full bg-slate-900 border border-slate-800 text-slate-300 p-3 focus:outline-none focus:border-amber-500/50 transition-colors text-sm" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-mono text-slate-500 uppercase">Email Address</label>
              <input type="email" placeholder="you@domain.com" className="w-full bg-slate-900 border border-slate-800 text-slate-300 p-3 focus:outline-none focus:border-amber-500/50 transition-colors text-sm" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-mono text-slate-500 uppercase">Message</label>
              <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-slate-900 border border-slate-800 text-slate-300 p-3 focus:outline-none focus:border-amber-500/50 transition-colors text-sm resize-none"></textarea>
            </div>
            <button type="button" className="w-full py-3 bg-slate-800 hover:bg-amber-600 hover:text-slate-950 text-amber-500 font-mono text-sm tracking-widest border border-slate-700 hover:border-amber-500 transition-all flex items-center justify-center gap-2">
              <Send size={14} /> SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
