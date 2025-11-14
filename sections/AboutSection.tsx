'use client';

/**
 * About Section
 * Brief introduction about yourself
 */

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-provider';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.about.title}
          </h2>

          <Card className="border-2">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
