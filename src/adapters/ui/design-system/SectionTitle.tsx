/**
 * SectionTitle Component
 * A reusable title component with decorative dividers and subtitle
 * Atom - Basic UI Element
 */

import React from 'react';
import { Hexagon } from 'lucide-react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-serif text-slate-100 tracking-wider mb-2">{title}</h2>
    <div className="flex items-center justify-center gap-4 text-amber-500/60 mb-4">
      <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-amber-500"></div>
      <Hexagon size={12} className="fill-current" />
      <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-amber-500"></div>
    </div>
    <p className="text-slate-400 font-mono text-sm uppercase tracking-[0.2em]">{subtitle}</p>
  </div>
);
