/**
 * ArcaneCard Component
 * A reusable card component with decorative corner flourishes and hover effects
 * Atom - Basic UI Element
 */

import React from 'react';

interface ArcaneCardProps {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}

export const ArcaneCard: React.FC<ArcaneCardProps> = ({ 
  children, 
  className = "", 
  highlight = false 
}) => (
  <div className={`relative group p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 transition-all duration-500 hover:border-amber-500/30 hover:bg-slate-900/80 ${className}`}>
    {/* Corner Flourishes */}
    <div className={`absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l transition-colors duration-300 ${highlight ? 'border-amber-400' : 'border-slate-600 group-hover:border-amber-500'}`} />
    <div className={`absolute -top-[1px] -right-[1px] w-4 h-4 border-t border-r transition-colors duration-300 ${highlight ? 'border-amber-400' : 'border-slate-600 group-hover:border-amber-500'}`} />
    <div className={`absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b border-l transition-colors duration-300 ${highlight ? 'border-amber-400' : 'border-slate-600 group-hover:border-amber-500'}`} />
    <div className={`absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r transition-colors duration-300 ${highlight ? 'border-amber-400' : 'border-slate-600 group-hover:border-amber-500'}`} />
    
    <div className="relative z-10">{children}</div>
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-500/5 to-amber-500/5 pointer-events-none transition-opacity duration-500" />
  </div>
);
