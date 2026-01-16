/**
 * Skill Entity
 * Represents a technical skill or tech stack category
 */

import React from 'react';

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'data';
  icon: React.ElementType;
  description: string;
  items: string[];
  color: string;
}
