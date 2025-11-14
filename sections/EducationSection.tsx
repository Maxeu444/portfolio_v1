'use client';

/**
 * Education Section
 * Academic background and certifications
 */

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '@/lib/language-provider';
import { education } from '@/data/education';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function EducationSection() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.education.title}
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                        <CardDescription className="text-base">
                          {edu.school}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground mt-1">
                          {edu.startDate} - {edu.endDate}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
