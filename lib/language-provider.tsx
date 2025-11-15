'use client';

/**
 * Language provider for i18n
 * Manages language state and switching
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, defaultLocale, getDictionary } from './i18n';
import { Dictionary } from './i18n/dictionaries/en';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return defaultLocale;
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    return (savedLocale && (savedLocale === 'en' || savedLocale === 'fr')) ? savedLocale : defaultLocale;
  });
  const [t, setT] = useState<Dictionary>(() => {
    if (typeof window === 'undefined') return getDictionary(defaultLocale);
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    const initialLocale = (savedLocale && (savedLocale === 'en' || savedLocale === 'fr')) ? savedLocale : defaultLocale;
    return getDictionary(initialLocale);
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    setT(getDictionary(newLocale));
    localStorage.setItem('locale', newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
