/**
 * Dynamic metadata component for SEO
 * Updates meta tags based on current language
 */

'use client';

import { useLanguage } from '@/lib/language-provider';
import { useEffect } from 'react';

export function DynamicMetadata() {
  const { locale } = useLanguage();

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = locale;

    // Update Open Graph locale meta tag
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', locale === 'fr' ? 'fr_FR' : 'en');
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const baseUrl = 'https://maxhochart.fr';
      canonical.setAttribute('href', `${baseUrl}/${locale}`);
    }
  }, [locale]);

  return null;
}
