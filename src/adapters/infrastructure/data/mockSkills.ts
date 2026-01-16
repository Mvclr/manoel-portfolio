/**
 * Mock Skills Data
 * In a real application, this would come from an API or database
 */

import { Skill } from '@core/domain/Skill';
import { Server, Layers, Database } from 'lucide-react';

export const skillsData: Skill[] = [
  {
    name: "Backend Infrastructure",
    category: "backend",
    icon: Server,
    description: "Scalable server-side logic and microservices architecture.",
    items: ["Node.js & Express", "Python / Django", "GoLang"],
    color: "text-indigo-400"
  },
  {
    name: "Frontend Development",
    category: "frontend",
    icon: Layers,
    description: "Responsive, accessible, and performant client-side applications.",
    items: ["React.js & Next.js", "TypeScript", "Tailwind CSS"],
    color: "text-amber-400"
  },
  {
    name: "Databases & Storage",
    category: "data",
    icon: Database,
    description: "Optimized data storage, caching strategies, and ORMs.",
    items: ["PostgreSQL", "Redis", "Prisma ORM"],
    color: "text-emerald-400"
  }
];
