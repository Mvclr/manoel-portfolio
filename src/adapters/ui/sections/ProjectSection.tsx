/**
 * ProjectSection Component
 * Displays featured projects in a grid with repository and demo links
 * Organism - Complex Feature Section
 */

import React from 'react';
import { Shield, Code2, Github, ExternalLink } from 'lucide-react';
import { SectionTitle } from '@adapters/ui/design-system';
import { Project } from '@core/domain/Project';

interface ProjectSectionProps {
  projects: Project[];
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => (
  <section className="py-24 px-6 bg-slate-900/30 border-y border-slate-900" id="projects">
    <div className="max-w-6xl mx-auto">
      <SectionTitle title="Featured Projects" subtitle="Deployed Applications" />
      <div className="grid gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-indigo-900/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative grid md:grid-cols-12 gap-6 items-center p-8 border border-slate-800 bg-slate-950/80 backdrop-blur-sm">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-slate-800 group-hover:bg-amber-500 transition-colors duration-500"></div>
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-amber-500 font-mono text-xs">
                  {project.category === 'backend' ? <Shield size={14} /> : <Code2 size={14} />}
                  <span>{project.version}</span>
                </div>
                <h3 className={`text-3xl font-serif text-slate-100 transition-colors ${project.highlightColor}`}>
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-900 border border-slate-700 text-slate-400 text-xs font-mono rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-5 flex flex-col gap-3 md:items-end justify-center">
                <button className="px-5 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 font-mono text-xs flex items-center gap-2 transition-all">
                  <Github size={14} /> REPOSITORY
                </button>
                <button className="px-5 py-2 bg-amber-600/10 hover:bg-amber-600/20 border border-amber-600/50 text-amber-500 font-mono text-xs flex items-center gap-2 transition-all">
                  <ExternalLink size={14} /> LIVE DEMO
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
