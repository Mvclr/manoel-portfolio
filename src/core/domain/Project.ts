/**
 * Project Entity
 * Represents a portfolio project with all its metadata
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  liveUrl: string;
  category: 'frontend' | 'backend' | 'fullstack';
  highlightColor: string; // Tailwind color class reference
  version: string;
}
