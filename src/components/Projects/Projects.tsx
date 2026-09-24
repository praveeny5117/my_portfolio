import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';
import { projectsData } from '../../data/projects';
import type { Project } from '../../data/projects';
import { ProjectVisualMockup } from './ProjectVisualMockup';
import { CaseStudyModal } from '../ProjectDetails/CaseStudyModal';
import { GitHubIcon } from '../common/BrandIcons';

export const Projects: React.FC = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00F0FF] uppercase">
                <span className="w-6 h-[1px] bg-[#00F0FF]" />
                <span>Featured Architectures</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white dark:text-white light:text-zinc-950">
                Selected Enterprise <br />
                <span className="text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-light">
                  Platforms & Case Studies.
                </span>
              </h2>
            </div>

            <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-md font-sans">
              Real-world systems engineered for multi-tenancy, immutable compliance, high concurrency, and automated financial reconciliations.
            </p>
          </div>

          {/* Large Editorial Project Cards */}
          <div className="space-y-20 lg:space-y-28">
            {projectsData.map((project, index) => {
              // Asymmetric alternating layouts:
              // Index 0: Image Left, Content Right
              // Index 1: Content Left, Image Right
              // Index 2: Image Left, Content Right
              const isEven = index % 2 === 1;

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="project-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Mockup / Image Visual Area */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    } relative`}
                  >
                    <div 
                      onClick={() => setActiveCaseStudy(project)}
                      className="cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
                    >
                      <ProjectVisualMockup projectId={project.id} />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    } space-y-6`}
                  >
                    {/* Project Header Number & Category */}
                    <div className="flex items-center gap-3">
                      <span className="font-heading font-extrabold text-3xl sm:text-4xl text-zinc-600 dark:text-zinc-700 light:text-zinc-300">
                        {project.number}
                      </span>
                      <span className="h-4 w-[1px] bg-white/10 dark:bg-white/10 light:bg-zinc-300" />
                      <span className="font-mono text-xs uppercase tracking-wider text-[#00F0FF] dark:text-[#00F0FF] light:text-cyan-700 font-semibold">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-zinc-950 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-zinc-400 mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Short Description */}
                    <p className="text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed font-sans">
                      {project.shortDescription}
                    </p>

                    {/* Problem & Contribution Highlights */}
                    <div className="p-3.5 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-zinc-100 border border-white/5 dark:border-white/5 light:border-zinc-200 space-y-2 text-xs font-sans">
                      <div>
                        <span className="font-mono font-semibold text-zinc-400 uppercase text-[11px] block">Problem Solved:</span>
                        <span className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700 line-clamp-2">{project.caseStudy.problem}</span>
                      </div>
                      <div className="pt-1.5 border-t border-white/5 dark:border-white/5 light:border-zinc-200">
                        <span className="font-mono font-semibold text-[#00F0FF] uppercase text-[11px] block">My Contribution:</span>
                        <span className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700 line-clamp-2">{project.caseStudy.contribution[0]}</span>
                      </div>
                    </div>

                    {/* Key Results / Metrics Row */}
                    <div className="flex flex-wrap items-center gap-3">
                      {project.caseStudy.results.slice(0, 3).map((res, rIdx) => (
                        <div
                          key={rIdx}
                          className="px-3 py-1.5 rounded-lg bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-zinc-200 flex items-baseline gap-1.5 text-xs font-mono"
                        >
                          <span className="font-bold text-[#00F0FF]">{res.metric}</span>
                          <span className="text-zinc-400 text-[11px]">{res.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-200 text-zinc-300 dark:text-zinc-300 light:text-zinc-800 border border-white/[0.06] dark:border-white/[0.06] light:border-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="px-2 py-1 rounded-lg text-xs font-mono text-zinc-500">
                          +{project.technologies.length - 6} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={() => setActiveCaseStudy(project)}
                        className="case-study-trigger inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-white light:bg-zinc-950 text-black dark:text-black light:text-white font-semibold text-xs uppercase font-mono tracking-wider hover:bg-[#00F0FF] dark:hover:bg-[#00F0FF] light:hover:bg-zinc-800 transition-all duration-200 shadow-md hover:shadow-glow-accent hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <BookOpen className="w-4 h-4 text-black dark:text-black light:text-white" />
                        <span>View Deep Case Study</span>
                      </button>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-zinc-100 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-zinc-200 border border-white/10 dark:border-white/10 light:border-zinc-300 text-zinc-300 dark:text-zinc-300 light:text-zinc-800 font-semibold text-xs font-mono transition-colors"
                        >
                          <span>Live System</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                          className="p-2.5 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-zinc-100 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-zinc-200 border border-white/10 dark:border-white/10 light:border-zinc-300 text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors"
                        >
                          <GitHubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

        </div>
      </section>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </>
  );
};
