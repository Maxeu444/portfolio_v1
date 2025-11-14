'use client';

/**
 * Projects Section
 * Display portfolio projects with filtering capabilities
 */

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-provider';
import { projects, Project } from '@/data/projects';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const PROJECTS_PER_PAGE = 6;

export function ProjectsSection() {
  const { t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [typeFilter, setTypeFilter] = useState<string>('All');
  const [teamFilter, setTeamFilter] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Shuffle projects randomly on initial load
  const shuffledProjects = useMemo(() => shuffleArray(projects), []);

  // Extract unique technologies from all projects
  const allTechnologies = Array.from(
    new Set(shuffledProjects.flatMap((project) => project.stack))
  );
  const filters = ['All', ...allTechnologies];

  // Filter projects based on selected filters
  const filteredProjects = shuffledProjects.filter((project) => {
    const techMatch = selectedFilter === 'All' || project.stack.includes(selectedFilter);
    const typeMatch = typeFilter === 'All' || project.type === typeFilter;
    const teamMatch = teamFilter === 'All' || project.teamType === teamFilter;
    return techMatch && typeMatch && teamMatch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // Reset to page 1 when any filter changes
  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setCurrentPage(1);
  };

  const handleTypeFilterChange = (type: string) => {
    setTypeFilter(type);
    setCurrentPage(1);
  };

  const handleTeamFilterChange = (team: string) => {
    setTeamFilter(team);
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

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

          {/* Type and Team Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex gap-2">
              <span className="text-sm font-medium self-center text-muted-foreground">Type:</span>
              {['All', 'pro', 'scolaire', 'perso'].map((type) => (
                <Button
                  key={type}
                  variant={typeFilter === type ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleTypeFilterChange(type)}
                >
                  {type === 'All' ? 'Tous' : type === 'pro' ? 'Pro' : type === 'scolaire' ? 'Scolaire' : 'Perso'}
                </Button>
              ))}
            </div>
            <div className="flex gap-2">
              <span className="text-sm font-medium self-center text-muted-foreground">Équipe:</span>
              {['All', 'solo', 'equipe'].map((team) => (
                <Button
                  key={team}
                  variant={teamFilter === team ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleTeamFilterChange(team)}
                >
                  {team === 'All' ? 'Tous' : team === 'solo' ? 'Solo' : 'Équipe'}
                </Button>
              ))}
            </div>
          </div>

          {/* Technology Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleFilterChange(filter)}
                className="transition-all"
              >
                {filter === 'All' ? t.projects.filter.all : filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentProjects.map((project, index) => (
              <Dialog key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <DialogTrigger asChild>
                    <Card className="h-full flex flex-col hover:shadow-xl transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="flex justify-between items-start gap-2 mb-1">
                          <CardTitle className="text-lg">{project.title}</CardTitle>
                          <div className="flex gap-1">
                            <Badge 
                              variant={project.type === 'pro' ? 'default' : project.type === 'scolaire' ? 'secondary' : 'outline'}
                              className="text-xs shrink-0"
                            >
                              {project.type === 'pro' ? 'Pro' : project.type === 'scolaire' ? 'Scolaire' : 'Perso'}
                            </Badge>
                            <Badge 
                              variant="outline"
                              className="text-xs shrink-0"
                            >
                              {project.teamType === 'solo' ? 'Solo' : 'Équipe'}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3 font-semibold">
                          {project.date}
                        </p>
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

                        {/* Links */}
                        <div className="flex gap-2">
                          {project.githubUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              className={project.websiteUrl ? "flex-1" : "w-full"}
                              asChild
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-4 w-4 mr-2" />
                                GitHub
                              </a>
                            </Button>
                          )}
                          {project.websiteUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              className={project.githubUrl ? "flex-1" : "w-full"}
                              asChild
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a
                                href={project.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Site
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                </motion.div>

                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <div className="flex items-start justify-between gap-4 mb-2 pr-8">
                      <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                      <div className="flex gap-1">
                        <Badge 
                          variant={project.type === 'pro' ? 'default' : project.type === 'scolaire' ? 'secondary' : 'outline'}
                          className="text-xs"
                        >
                          {project.type === 'pro' ? 'Pro' : project.type === 'scolaire' ? 'Scolaire' : 'Perso'}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {project.teamType === 'solo' ? 'Solo' : 'Équipe'}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground font-semibold">{project.date}</p>
                  </DialogHeader>

                  <div className="space-y-4">
                    <DialogDescription className="text-base leading-relaxed">
                      {project.description}
                    </DialogDescription>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold mb-2">Technologies utilisées</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4">
                      {project.githubUrl && (
                        <Button variant="default" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Voir sur GitHub
                          </a>
                        </Button>
                      )}
                      {project.websiteUrl && (
                        <Button variant="outline" asChild>
                          <a
                            href={project.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visiter le site
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* No results message */}
          {filteredProjects.length === 0 && (
            <div className="text-center text-muted-foreground py-12">
              No projects found with this technology.
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Précédent
              </Button>
              
              <span className="text-sm text-muted-foreground">
                Page {currentPage} sur {totalPages}
              </span>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Suivant
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
