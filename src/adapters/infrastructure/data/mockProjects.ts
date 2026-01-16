/**
 * Mock Projects Data
 * In a real application, this would come from an API or database
 */

import { Project } from '@core/domain/Project';

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Nexus E-Commerce",
    description: "A headless e-commerce architecture designed for high-volume transactions. Utilizes queue-based order processing and real-time inventory tracking.",
    tags: ["Next.js", "Stripe API", "Postgres", "Redis"],
    repoUrl: "#",
    liveUrl: "#",
    category: "fullstack",
    highlightColor: "group-hover:text-amber-100",
    version: "v.2.0.1 RELEASE"
  },
  {
    id: "2",
    title: "Aegis Auth System",
    description: "A centralized authentication microservice supporting OAuth2, JWT rotation, and role-based access control (RBAC) across multiple client applications.",
    tags: ["Docker", "GoLang", "gRPC", "JWT"],
    repoUrl: "#",
    liveUrl: "#",
    category: "backend",
    highlightColor: "group-hover:text-indigo-100",
    version: "AUTHENTICATION SERVICE"
  }
];
