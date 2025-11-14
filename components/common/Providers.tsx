'use client';

/**
 * Client-side providers wrapper
 * Ensures all client context is properly initialized
 */

import { ThemeProvider } from '@/lib/theme-provider';
import { LanguageProvider } from '@/lib/language-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
