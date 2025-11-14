'use client';

/**
 * Contact Section
 * Encourage visitors to reach out via LinkedIn and GitHub
 */

import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
import { useLanguage } from '@/lib/language-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            {t.contact.title}
          </h2>

          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {t.contact.description}
          </p>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* LinkedIn Button */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/max-hochart/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 mr-2" />
                      {t.contact.linkedin}
                    </a>
                  </Button>
                </motion.div>

                {/* GitHub Button */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto"
                    asChild
                  >
                    <a
                      href="https://github.com/Maxeu444"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      {t.contact.github}
                    </a>
                  </Button>
                </motion.div>
              </div>

              {/* TODO: Replace with your actual LinkedIn and GitHub URLs */}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
