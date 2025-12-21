'use client';

import { ThemeProvider } from '@/lib/theme-provider';
import { LanguageProvider } from '@/lib/language-provider';
import { SnowfallEffect } from '@/components/common/SnowfallEffect';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SnowfallEffect />
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
