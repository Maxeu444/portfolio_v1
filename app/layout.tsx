/**
 * Root layout component
 * Sets up theme provider, language provider, and global structure
 */

import type { Metadata } from 'next';
import { Providers } from '@/components/common/Providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Your Name - Web FullStack Developer',
  description: 'Portfolio of a fullstack web developer specializing in Next.js, React, TypeScript, and modern web technologies.',
  keywords: ['fullstack developer', 'web developer', 'Next.js', 'React', 'TypeScript', 'portfolio'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name - Web FullStack Developer',
    description: 'Portfolio of a fullstack web developer',
    type: 'website',
  },
};

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
      </head>
      <body className="font-satoshi antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
