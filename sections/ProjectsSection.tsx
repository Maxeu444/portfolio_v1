'use client';

/**
 * Projects Section
 * Display portfolio projects with filtering capabilities
 */

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/language-provider';
import { projects } from '@/data/projects';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function ProjectsSection() {
  const { t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  // Shuffle projects randomly on initial load
  const shuffledProjects = useMemo(() => shuffleArray(projects), []);

  // Extract unique technologies from all projects
  const allTechnologies = Array.from(
    new Set(shuffledProjects.flatMap((project) => project.stack))
  );
  const filters = ['All', ...allTechnologies];

  // Filter projects based on selected technology
  const filteredProjects =
    selectedFilter === 'All'
      ? shuffledProjects
      : shuffledProjects.filter((project) => project.stack.includes(selectedFilter));

  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.projects.title}
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
                className="transition-all"
              >
                {filter === 'All' ? t.projects.filter.all : filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full flex flex-col hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <Badge 
                        variant={project.type === 'pro' ? 'default' : project.type === 'scolaire' ? 'secondary' : 'outline'}
                        className="text-xs shrink-0"
                      >
                        {project.type === 'pro' ? 'Pro' : project.type === 'scolaire' ? 'Scolaire' : 'Perso'}
                      </Badge>
                    </div>
                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* GitHub Link */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          {t.projects.viewGithub}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* No results message */}
          {filteredProjects.length === 0 && (
            <div className="text-center text-muted-foreground py-12">
              No projects found with this technology.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
