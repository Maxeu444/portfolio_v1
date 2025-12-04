/**
 * French translations
 */

import { Dictionary } from "./en";

export const fr: Dictionary = {
  // Navigation
  nav: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    experience: "Expérience",
    education: "Formation",
    projects: "Projets",
    contact: "Contact",
  },

  // Hero Section
  hero: {
    greeting: "Salut, je suis",
    name: "Max Hochart",
    role: "Développeur Web FullStack",
    punchline:
      "Spécialisé en Next.js, Java Spring Boot et API REST. Je conçois, développe et déploie des applications web performantes, maintenables et prêtes à scaler.",
    viewProjects: "Voir mes projets",
    contactMe: "Me contacter",
  },

  // About Section
  about: {
    title: "À propos de moi",
    description: `
Je m’appelle Max Hochart, et depuis deux ans je conçois et développe des applications web qui répondent à de vrais besoins : outils internes, plateformes web, sites performants et APIs robustes.

Formé au développement backend (Java Spring Boot / PHP) comme aux technologies frontend modernes (Next.js, Nuxt.js), avec une expérience du déploiement sur AWS, j’ai travaillé sur une grande variété de projets en alternance et pendant ma scolarité. Cette diversité m’a appris à comprendre un besoin, l’architecturer et le transformer en une solution fiable et évolutive.

Ce qui me motive : apprendre, comprendre et créer des produits utiles. Aujourd’hui, je souhaite mettre mon expertise fullstack au service d’une équipe qui aime construire des projets solides, bien pensés, et continuer à progresser à leurs côtés.
`,
  },

  // Skills Section
  skills: {
    title: "Compétences & Technologies",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      tools: "Outils & Autres",
    },
  },

  // Experience Section
  experience: {
    title: "Expérience Professionnelle",
    current: "Présent",
  },

  // Education Section
  education: {
    title: "Formation",
  },

  // Projects Section
  projects: {
    title: "Mes Projets",
    filter: {
      all: "Tous",
    },
    viewGithub: "Voir sur GitHub",
  },

  // Contact Section
  contact: {
    title: "Me Contacter",
    description:
      "Je suis actuellement à la recherche de nouvelles opportunités. Que vous soyez recruteur ou que vous souhaitiez simplement échanger, n'hésitez pas à me contacter !",
    linkedin: "Me contacter sur LinkedIn",
    github: "Voir mon GitHub",
  },

  // Footer
  footer: {
    copyright: "© {year} Tous droits réservés.",
    builtWith: "Créé avec Next.js & TypeScript",
  },
};
