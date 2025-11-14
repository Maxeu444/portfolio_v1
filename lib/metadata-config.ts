/**
 * SEO Metadata configuration for French and English
 */

import type { Metadata } from 'next';

const baseUrl = 'https://max-hochart.dev'; // TODO: remplace par ton domaine réel

export const metadataEn: Metadata = {
  title: 'Max Hochart - Web FullStack Developer in Lille, France',
  description:
    'Portfolio of Max Hochart, a fullstack web developer based near Lille (France), specialized in Next.js, React, Java Spring Boot, TypeScript and modern web technologies.',
  keywords: [
    'fullstack developer',
    'web developer',
    'Next.js',
    'React',
    'TypeScript',
    'Java Spring Boot',
    'developer Lille',
    'web developer Lille',
    'fullstack Lille',
    'Hauts-de-France',
    'France',
    'portfolio developer',
  ],
  authors: [{ name: 'Max Hochart', url: 'https://www.linkedin.com/in/max-hochart/' }],
  openGraph: {
    title: 'Max Hochart - FullStack Web Developer in Lille, France',
    description:
      'Portfolio of a fullstack web developer based near Lille, specialized in modern web technologies.',
    url: `${baseUrl}/en`,
    siteName: 'Max Hochart | FullStack Developer',
    locale: 'en',
    type: 'website',
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'en': `${baseUrl}/en`,
      'fr': `${baseUrl}/fr`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const metadataFr: Metadata = {
  title: 'Max Hochart - Développeur Web FullStack à Lille (Hauts-de-France)',
  description:
    'Portfolio de Max Hochart, développeur web fullstack basé près de Lille (Hauts-de-France), spécialisé en Next.js, React, Java Spring Boot, TypeScript et technologies web modernes.',
  keywords: [
    'développeur web',
    'développeur fullstack',
    'fullstack Lille',
    'développeur web Lille',
    'développeur Next.js Lille',
    'développeur React Lille',
    'développeur Java Lille',
    'Hauts-de-France',
    'Métropole Lilloise',
    'Pévèle',
    'Templeuve-en-Pévèle',
    'portfolio développeur',
    'développeur web France',
  ],
  authors: [{ name: 'Max Hochart', url: 'https://www.linkedin.com/in/max-hochart/' }],
  openGraph: {
    title: 'Max Hochart - Développeur FullStack à Lille (Hauts-de-France)',
    description:
      'Portfolio professionnel de Max Hochart, développeur web fullstack spécialisé en technologies modernes, basé près de Lille.',
    url: `${baseUrl}/fr`,
    siteName: 'Portfolio - Max Hochart',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'en': `${baseUrl}/en`,
      'fr': `${baseUrl}/fr`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export function getMetadata(locale: 'fr' | 'en'): Metadata {
  return locale === 'fr' ? metadataFr : metadataEn;
}
