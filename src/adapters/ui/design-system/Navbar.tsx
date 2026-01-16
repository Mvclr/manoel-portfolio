/**
 * Navbar Component
 * Navigation bar with site branding and section links
 * Molecule - Composite UI Element
 */

import React from 'react';
import { Hexagon } from 'lucide-react';

export const Navbar: React.FC = () => (
  <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
    <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="font-serif text-xl font-bold tracking-widest text-slate-100 flex items-center gap-2">
        <Hexagon size={20} className="text-amber-500" />
        DEV<span className="text-amber-500">.</span>ARCHITECT
      </div>
      <div className="hidden md:flex gap-8 font-mono text-sm text-slate-400">
        {['Profile', 'Stacks', 'Projects', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-400 transition-colors cursor-pointer">
            0x{item.toUpperCase()}
          </a>
        ))}
      </div>
    </div>
  </nav>
);
