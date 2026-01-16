/**
 * ==============================================================================
 * APP.TSX - COMPOSITION ROOT
 * ==============================================================================
 * 
 * This is where we wire together the entire application following the
 * Hexagonal Architecture (Ports & Adapters) pattern:
 * 
 * 1. Import domain entities from CORE layer
 * 2. Import mock data from INFRASTRUCTURE adapters
 * 3. Import UI components from UI adapters
 * 4. Compose everything together
 * 
 * The App component acts as a dependency injector, passing data and entities
 * through the application's various layers and components.
 * ==============================================================================
 */

import React from 'react';
import { HomePage } from '@adapters/ui/pages/HomePage';
import { profileData } from '@adapters/infrastructure/data/mockProfile';
import { skillsData } from '@adapters/infrastructure/data/mockSkills';
import { projectsData } from '@adapters/infrastructure/data/mockProjects';

/**
 * Main App Component
 * Serves as the entry point and composition root for the entire application
 */
const App: React.FC = () => {
  // In a real application, you would:
  // 1. Fetch data from APIs or services instead of using mock data
  // 2. Implement error handling and loading states
  // 3. Use state management (Redux, Zustand, etc.) if needed
  // 4. Inject actual service implementations

  return (
    <HomePage 
      profile={profileData}
      skills={skillsData}
      projects={projectsData}
    />
  );
};

export default App;
