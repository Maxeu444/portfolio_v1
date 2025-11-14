/**
 * Skills data organized by category
 * TODO: Replace with your real skills
 */

export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'JavaScript',
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      'Node.js',
      'Java',
      'Spring Boot',
      'REST API',
      'AWS Lambda',
      'DynamoDB',
      'EC2',
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Others',
    skills: [
      'Git',
      'GitHub',
      'CI/CD',
      'Figma',
      'Postman',
    ],
  },
];
