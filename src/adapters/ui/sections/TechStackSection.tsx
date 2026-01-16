/**
 * TechStackSection Component
 * Displays technical skills and tech stack categories in card layout
 * Organism - Complex Feature Section
 */

import React from 'react';
import { ArcaneCard, SectionTitle } from '@adapters/ui/design-system';
import { Skill } from '@core/domain/Skill';

interface TechStackSectionProps {
  skills: Skill[];
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({ skills }) => (
  <section className="py-24 px-6 relative" id="stacks">
    <div className="max-w-6xl mx-auto">
      <SectionTitle title="Technical Stack" subtitle="Frameworks & Languages" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <ArcaneCard key={skill.name} highlight={true}>
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 bg-slate-900 rounded border border-slate-800`}>
                <skill.icon className={skill.color} size={24} />
              </div>
              <span className={`font-mono text-xs ${skill.color} border border-slate-800 px-2 py-1 rounded`}>
                {skill.category.toUpperCase()}
              </span>
            </div>
            <h3 className="text-xl font-serif text-slate-200 mb-2">{skill.name}</h3>
            <p className="text-slate-400 text-sm mb-4">{skill.description}</p>
            <ul className="space-y-2 font-mono text-xs text-slate-500">
              {skill.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <div className={`w-1 h-1 rounded-full ${skill.color.replace('text-', 'bg-')}`}></div>
                  {item}
                </li>
              ))}
            </ul>
          </ArcaneCard>
        ))}
      </div>
    </div>
  </section>
);
