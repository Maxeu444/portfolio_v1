/**
 * Root layout component
 * Sets up theme provider, language provider, and global structure
 */

import type { Metadata } from 'next';
import { Providers } from '@/components/common/Providers';
import { DynamicMetadata } from '@/components/common/DynamicMetadata';
import { metadataFr } from '@/lib/metadata-config';
import './globals.css';

// Default metadata (French) - will be updated dynamically based on user's language selection
export const metadata: Metadata = metadataFr;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Satoshi Font - TODO: Add actual Satoshi font files to public/fonts/ */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        
        {/* Hreflang tags for multilingual SEO */}
        <link rel="alternate" hrefLang="fr" href="https://maxhochart.fr" />
        <link rel="alternate" hrefLang="en" href="https://maxhochart.fr/en" />
        <link rel="alternate" hrefLang="x-default" href="https://maxhochart.fr" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://maxhochart.fr" />
      </head>
      <body className="font-satoshi antialiased">
        <Providers>
          <DynamicMetadata />
          {children}
        </Providers>
      </body>
    </html>
  );
}
