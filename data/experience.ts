/**
 * Professional experience data
 * TODO: Replace with your real experience
 */

export interface Experience {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Co-fondateur et Développeur Web Fullstack',
    company: '4Spel',
    startDate: 'mai 2024',
    endDate: undefined, // Current job
    description: [
      'Développement de sites et d\'outils web avec Next.js',
      'Administration d\'environnements AWS (Lambda, DynamoDB, EC2) pour le déploiement et l\'hébergement des projets'  
    ],
  },
  {
    id: '2',
    role: 'Développeur Fullstack Web et Mobile en alternance',
    company: 'Apresta',
    startDate: '2023',
    endDate: '2025',
    description: [
      'Développement de sites WordPress en intégrant thèmes et plugins pour répondre aux besoins clients et assurer des livraisons opérationnelles',
      'Conception et développement d\'applications mobiles en architecturant le front-end et le back-end',
      'Implémentation d\'APIs pour assurer la communication entre interfaces et bases de données',
      'Gestion et optimisation de bases de données relationnelles pour garantir la cohérence des données',
      'Conception et développement d\'outils internes en Laravel et React',
    ],
  },
];
