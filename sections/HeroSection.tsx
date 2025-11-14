'use client';

/**
 * Hero Section
 * Main landing section with introduction and CTA buttons
 */

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-provider';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-muted-foreground mb-2">{t.hero.greeting}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t.hero.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-6">
              {t.hero.role}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t.hero.punchline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={() => scrollToSection('#projects')}
                >
                  {t.hero.viewProjects}
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('#contact')}
                >
                  {t.hero.contactMe}
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full" style={{ backgroundColor: '#FBF8F4' }}>
              {/* TODO: Replace with your actual profile picture */}
              <Image
                src="/profile.png"
                alt={t.hero.name}
                fill
                className="rounded-full object-contain border-4 border-primary shadow-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
