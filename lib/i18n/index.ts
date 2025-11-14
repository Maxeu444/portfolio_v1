/**
 * i18n utilities for Next.js App Router
 */

import { en } from './dictionaries/en';
import { fr } from './dictionaries/fr';

export type Locale = 'en' | 'fr';

const dictionaries = {
  en,
  fr,
};

export const getDictionary = (locale: Locale) => dictionaries[locale];

export const defaultLocale: Locale = 'fr';
