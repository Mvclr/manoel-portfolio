# Portfolio - Hexagonal Architecture

## Overview

This portfolio follows the **Hexagonal Architecture** (also known as **Ports & Adapters** pattern), which cleanly separates business logic from external concerns and makes the application highly testable and maintainable.

## Directory Structure

```
src/
├── core/                           # The Hexagon (Business Logic & Pure Domain)
│   ├── domain/                     # Business Entities (No Framework Dependencies)
│   │   ├── Project.ts              # Project entity interface
│   │   ├── Skill.ts                # Skill/TechStack entity interface
│   │   └── Profile.ts              # Profile entity interface
│   │
│   └── ports/                      # Port Interfaces (Dependency Boundaries)
│       └── [Future Service Ports]
│
├── adapters/                       # Adapters (Interacting with External World)
│   ├── ui/                         # Driving Adapters (React Components)
│   │   ├── design-system/          # Atoms & Molecules (Reusable UI Elements)
│   │   │   ├── ArcaneCard.tsx
│   │   │   ├── SectionTitle.tsx
│   │   │   ├── TerminalBlock.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── sections/               # Organisms (Complex Feature Sections)
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── TechStackSection.tsx
│   │   │   ├── ProjectSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── pages/                  # Full Page Layouts
│   │       └── HomePage.tsx
│   │
│   └── infrastructure/             # Driven Adapters (External Implementations)
│       ├── data/                   # Data Sources (Mock/API Clients)
│       │   ├── mockProfile.ts
│       │   ├── mockSkills.ts
│       │   └── mockProjects.ts
│       │
│       └── services/               # Service Implementations
│           └── [Future Services]
│
├── App.tsx                         # Composition Root (Dependency Injection)
└── main.tsx                        # Application Entry Point

```

## Architecture Principles

### 1. **Core Layer (The Hexagon)**

The inner core contains **pure TypeScript** with zero framework dependencies:

- **Domain Entities**: Simple interfaces/classes representing business concepts
- **Ports**: Interfaces that define how the outside world interacts with the core
- **Business Logic**: Independent of React, API frameworks, etc.

**Files:**
- `src/core/domain/Project.ts` - Project entity
- `src/core/domain/Skill.ts` - Skill entity
- `src/core/domain/Profile.ts` - Profile entity

### 2. **Adapter Layer**

Adapters translate between the core domain and external systems:

#### **UI Adapters** (Driving Adapters)
React components that present the application to users:

- **Design System** (`src/adapters/ui/design-system/`): Reusable atoms and molecules
  - `ArcaneCard` - Decorative card wrapper
  - `SectionTitle` - Section headers with styling
  - `TerminalBlock` - Terminal emulator display
  - `Navbar` - Site navigation
  - `Footer` - Site footer

- **Sections** (`src/adapters/ui/sections/`): Composed organisms (complex features)
  - `HeroSection` - Hero/landing section
  - `AboutSection` - About profile section
  - `TechStackSection` - Skills display
  - `ProjectSection` - Portfolio projects
  - `ContactSection` - Contact information

- **Pages** (`src/adapters/ui/pages/`): Full page layouts
  - `HomePage` - Main page composition

#### **Infrastructure Adapters** (Driven Adapters)
Handle external concerns like data fetching and services:

- **Data** (`src/adapters/infrastructure/data/`): Mock data or API clients
  - `mockProfile.ts` - Profile data
  - `mockSkills.ts` - Skills data
  - `mockProjects.ts` - Projects data

- **Services** (`src/adapters/infrastructure/services/`): External service implementations
  - Future: Email service, API client, etc.

### 3. **Composition Root**

**App.tsx** - Where everything comes together:
1. Imports domain entities from core
2. Imports infrastructure adapters
3. Injects dependencies into UI components
4. Acts as a single point of configuration

## Dependency Flow

```
┌─────────────────────────────────────────┐
│          App.tsx (Composition Root)     │
│  - Wires dependencies                   │
│  - Injects data into components         │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│    HomePage (Page Layout)               │
│  - Receives props from App              │
│  - Composes sections                    │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│   Sections (Organisms)                  │
│  - HeroSection, AboutSection, etc.      │
│  - Consume domain entities              │
│  - Compose design system components     │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│  Design System (Atoms & Molecules)      │
│  - Reusable, presentational components  │
│  - No business logic                    │
└─────────────────────────────────────────┘
```

## Import Aliases

For clean imports, path aliases are configured in `tsconfig.json`:

```typescript
// Instead of:
import { Project } from '../../../core/domain/Project';

// Use:
import { Project } from '@core/domain/Project';
```

**Available aliases:**
- `@core/*` - Core domain and ports
- `@adapters/*` - UI and infrastructure adapters

## Extending the Architecture

### Adding a New Feature

1. **Define the Domain Entity** in `src/core/domain/`
2. **Create the Service Port** in `src/core/ports/`
3. **Implement the Service** in `src/adapters/infrastructure/services/`
4. **Create UI Components**:
   - Atoms/Molecules in `src/adapters/ui/design-system/`
   - Organisms in `src/adapters/ui/sections/`
5. **Wire in App.tsx** as a new dependency

### Example: Adding Email Service

```typescript
// 1. Define port in src/core/ports/IEmailService.ts
export interface IEmailService {
  send(to: string, subject: string, body: string): Promise<void>;
}

// 2. Implement in src/adapters/infrastructure/services/EmailService.ts
export class EmailService implements IEmailService {
  async send(to: string, subject: string, body: string): Promise<void> {
    // Implementation
  }
}

// 3. Inject in App.tsx
const emailService = new EmailService();
<HomePage emailService={emailService} {...otherProps} />
```

## Benefits of This Architecture

✅ **Separation of Concerns** - Business logic, UI, and infrastructure are separate  
✅ **Testability** - Easy to mock and test each layer independently  
✅ **Maintainability** - Clear structure makes code navigation easier  
✅ **Scalability** - Easy to add new features without affecting existing code  
✅ **Framework Independence** - Core logic doesn't depend on React  
✅ **Reusability** - Components can be reused across different pages  

## Next Steps

- Implement real API integration in infrastructure adapters
- Add error handling and loading states
- Create unit tests for domain logic
- Implement state management if needed
- Add form validation and submission handlers
