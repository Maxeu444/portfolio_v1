'use client';

/**
 * Footer component
 * Simple footer with copyright and social links
 */

import { Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/lib/language-provider';
import { Button } from '@/components/ui/button';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            {t.footer.copyright.replace('{year}', currentYear.toString())}
          </div>

          {/* Built with */}
          <div className="text-sm text-muted-foreground">
            {t.footer.builtWith}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <a
                href="https://github.com/Maxeu444/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/max-hochart/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
