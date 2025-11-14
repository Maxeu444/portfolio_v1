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

  // Split description into paragraphs
  const paragraphs = t.about.description.split('\n\n');

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
            <CardContent className="p-8 space-y-6">
              {paragraphs.map((paragraph, index) => (
                <div key={index}>
                  {paragraph.includes('–') || paragraph.includes('—') ? (
                    // If paragraph contains bullet points
                    <div>
                      {paragraph.split('\n').map((line, lineIndex) => {
                        if (lineIndex === 0) {
                          // First line is the intro
                          return (
                            <p key={lineIndex} className="text-lg text-foreground leading-relaxed mb-3">
                              {line}
                            </p>
                          );
                        }
                        // Bullet points
                        return (
                          <p key={lineIndex} className="text-base text-muted-foreground leading-relaxed ml-4 mb-2">
                            {line}
                          </p>
                        );
                      })}
                    </div>
                  ) : (
                    // Regular paragraph
                    <p className="text-lg text-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
