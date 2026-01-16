/**
 * Footer Component
 * Site footer with branding and social links
 * Molecule - Composite UI Element
 */

import React from 'react';
import { Mail, Github, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => (
  <footer className="py-8 border-t border-slate-900 bg-slate-950 relative">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-slate-500 font-mono text-xs">
        © 2024 DEV.ARCHITECT
      </div>
      <div className="flex gap-6">
        <Mail size={16} className="text-slate-600 hover:text-amber-500 cursor-pointer transition-colors" />
        <Github size={16} className="text-slate-600 hover:text-amber-500 cursor-pointer transition-colors" />
        <ExternalLink size={16} className="text-slate-600 hover:text-amber-500 cursor-pointer transition-colors" />
      </div>
    </div>
  </footer>
);
