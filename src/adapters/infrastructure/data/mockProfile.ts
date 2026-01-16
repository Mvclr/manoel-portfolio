/**
 * Mock Profile Data
 * In a real application, this would come from an API or database
 */

import { Profile } from '@core/domain/Profile';

export const profileData: Profile = {
  name: "Dev Architect",
  role: "Fullstack Architect",
  tagline: "Architecting Scalable Solutions",
  bio: [
    "With over 5 years of experience working across complex backend systems and modern frontend frameworks, I specialize in building robust, scalable applications.",
    "My philosophy is simple: clean code is the foundation of reliability. When I'm not architecting databases or polishing UI components, you can find me exploring open source repositories or optimizing server clusters."
  ],
  location: "Remote",
  experience: "5+ Years",
  email: "hello@dev-architect.com",
  linkedin: "linkedin.com/in/architect"
};
