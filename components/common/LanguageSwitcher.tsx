'use client';

/**
 * Language switcher component
 * Toggles between French and English
 */

import { useLanguage } from '@/lib/language-provider';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const toggleLanguage = () => {
    setLocale(locale === 'fr' ? 'en' : 'fr');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      aria-label="Switch language"
    >
      {locale === 'fr' ? 'EN' : 'FR'}
    </Button>
  );
}
