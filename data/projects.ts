/**
 * Projects data
 * TODO: Replace with your real projects
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  highlighted?: boolean;
  type: 'scolaire' | 'pro' | 'perso';
  date: string;
}

export const projects: Project[] = [
  {
    id: '2',
    title: 'Mon portfolio',
    description: 'Mon portfolio personnel, sur lequel vous naviguez actuellement.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Maxeu444/portfolio_v1',
    type: 'perso',
    date: '2025',
  },
  {
    id: '3',
    title: 'Web3 et blockchain',
    description: 'Repository contenant les différents projets d\'apprentissage sur le web3 et la blockchain.',
    stack: ['JavaScript'],
    githubUrl: 'https://github.com/Maxeu444/blockchain',
    type: 'perso',
    date: '2025',
  },
  {
    id: '4',
    title: 'Bar\'App',
    description: 'Application de gestion pour un bar, incluant la gestion des stocks, des commandes et des employés.',
    stack: ['VueJS', 'TypeScript', 'CSS', 'Mobile First'],
    githubUrl: 'https://github.com/Maxeu444/bar-app',
    type: 'scolaire',
    date: '2024',
  },
  {
    id: '5',
    title: 'Nexus Now',
    description: 'Application mobile de suivi de statistiques pour le jeu vidéo League of Legends, permettant aux utilisateurs de consulter leurs performances et d\'analyser leurs parties en détail.',
    stack: ['Flutter', 'Firebase'],
    githubUrl: 'https://github.com/Maxeu444/nexusnow',
    type: 'scolaire',
    date: '2024',
  },
  {
    id: '6',
    title: 'Projet Travel',
    description: 'Site de reservation de voyages permettant aux utilisateurs de rechercher, réserver et gérer leurs voyages facilement. Développé dans le cadre de mon Titre Professionnel Développeur Web et Web Mobile.',
    stack: ['Symfony', 'JavaScript', 'Twig', 'CSS'],
    githubUrl: 'https://github.com/Maxeu444/ProjetTravel_FilRouge',
    type: 'scolaire',
    date: '2023',
  },
];
