/**
 * TerminalBlock Component
 * A stylized terminal emulator component displaying system initialization lines
 * Molecule - Composite UI Element
 */

import React, { useState } from 'react';

interface TerminalLine {
  text: string;
  color: string;
}

export const TerminalBlock: React.FC = () => {
  const [lines] = useState<TerminalLine[]>([
    { text: "> initializing core_systems...", color: "text-slate-400" },
    { text: "> load_module: 'System Architecture'", color: "text-amber-400" },
    { text: "> status: ONLINE", color: "text-green-400" },
  ]);

  return (
    <div className="w-full max-w-lg mx-auto font-mono text-sm rounded overflow-hidden shadow-2xl border border-slate-700 bg-[#0a0f1c]">
      <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <span className="ml-2 text-xs text-slate-400">bash — architect@server</span>
      </div>
      <div className="p-6 space-y-2 h-48">
        {lines.map((line, i) => (
          <div key={i} className={`${line.color} animate-pulse`}>{line.text}</div>
        ))}
        <div className="flex items-center gap-2 text-slate-300">
          <span>&gt;</span>
          <span className="w-2 h-4 bg-slate-400 animate-bounce"></span>
        </div>
      </div>
    </div>
  );
};
