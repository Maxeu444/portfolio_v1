/**
 * Projects data
 * TODO: Replace with your real projects
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  websiteUrl?: string;
  highlighted?: boolean;
  type: 'scolaire' | 'pro' | 'perso';
  teamType: 'solo' | 'equipe';
  date: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Cinefeel',
    description: 'Site de recommandation de films et séries selon l\'humeur de l\'utilisateur.',
    stack: ['Vue.js', 'NuxtJS', 'TypeScript', 'Java', 'Spring Boot'],
    githubUrl: 'https://github.com/Maxeu444/Cinefeel_portfolio',
    type: 'scolaire',
    teamType: 'equipe',
    date: '2023-2025',
  },
  {
    id: '2',
    title: 'Mon portfolio',
    description: 'Mon portfolio personnel, sur lequel vous naviguez actuellement.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Maxeu444/portfolio_v1',
    websiteUrl: 'https://maxhochart.fr',
    type: 'perso',
    teamType: 'solo',
    date: '2025',
  },
  {
    id: '3',
    title: 'Web3 et blockchain',
    description: 'Repository contenant les différents projets d\'apprentissage sur le web3 et la blockchain.',
    stack: ['JavaScript'],
    githubUrl: 'https://github.com/Maxeu444/blockchain',
    type: 'perso',
    teamType: 'solo',
    date: '2025',
  },
  {
    id: '4',
    title: 'Bar\'App',
    description: 'Application de gestion pour un bar, incluant la gestion des stocks, des commandes et des employés.',
    stack: ['VueJS', 'TypeScript', 'CSS', 'Mobile First'],
    githubUrl: 'https://github.com/Maxeu444/bar-app',
    type: 'scolaire',
    teamType: 'solo',
    date: '2024',
  },
  {
    id: '5',
    title: 'Nexus Now',
    description: 'Application mobile de suivi de statistiques pour le jeu vidéo League of Legends, permettant aux utilisateurs de consulter leurs performances et d\'analyser leurs parties en détail.',
    stack: ['Flutter', 'Firebase'],
    githubUrl: 'https://github.com/Maxeu444/nexusnow',
    type: 'scolaire',
    teamType: 'solo',
    date: '2024',
  },
  {
    id: '6',
    title: 'Axens',
    description: 'Axens est un entreprise de test produits, sur des panels de consommateurs. J\'ai participé au développement du tableau de bord "consommateur" ainsi qu\'à l\'interface administrateur.',
    stack: ['Wordpress', 'PHP', 'HTML', 'CSS', 'API', 'Alternance Apresta'],
    websiteUrl: 'https://axens-conseil.com/',
    type: 'pro',
    teamType: 'equipe',
    date: '2023-2025',
  },
  {
    id: '7',
    title: 'Workeez Connect',
    description: 'Plateforme de recrutement par match affinitaire. Projet développé lors de mon alternance chez Apresta.',
    stack: ['PHP', 'API', 'Alternance Apresta'],
    websiteUrl: 'https://connect.workeez.fr/',
    type: 'pro',
    teamType: 'equipe',
    date: '2025',
  }, 
  {
    id: '8',
    title: 'Bcyclet',
    description: 'Site de location de vélos. Projet développé lors de mon alternance chez Apresta.',
    stack: ['PHP', 'Wordpress', 'API', 'Alternance Apresta'],
    websiteUrl: 'https://bcyclet.fr/',
    type: 'pro',
    teamType: 'equipe',
    date: '2024-2025',
  },
  {
    id: '9',
    title: 'Outils Internes Apresta',
    description: 'Développement d\'outils internes pour Apresta.',
    stack: ['Laravel', 'React', 'API', 'Alternance Apresta'],
    type: 'pro',
    teamType: 'equipe',
    date: '2025',
  }
];
