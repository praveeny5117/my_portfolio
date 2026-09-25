import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, BookOpen, Building2, Sparkles, Layers, Briefcase } from 'lucide-react';
import { projectsData } from '../../data/projects';
import type { Project, ProjectType } from '../../data/projects';
import { ProjectVisualMockup } from './ProjectVisualMockup';
import { CaseStudyModal } from '../ProjectDetails/CaseStudyModal';
import { GitHubIcon } from '../common/BrandIcons';
import { AnimatedMetric } from '../common/AnimatedMetric';

export const Projects: React.FC = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectType>('all');

  const officialCount = projectsData.filter((p) => p.projectType === 'official').length;
  const clientCount = projectsData.filter((p) => p.projectType === 'client').length;
  const personalCount = projectsData.filter((p) => p.projectType === 'personal').length;

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.projectType === activeFilter;
  });

  return (
    <>
      <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00F0FF] uppercase">
                <span className="w-6 h-[1px] bg-[#00F0FF]" />
                <span>Featured Architectures & Deliverables</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white dark:text-white light:text-zinc-950">
                Selected Enterprise, Client & <br />
                <span className="text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-light">
                  Personal Production Systems.
                </span>
              </h2>
            </div>

            <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-md font-sans">
              Production systems engineered across Adamsbridge, Tango Eye, and Analytic Brains, alongside outsourced client platforms (Bewittch) and independent multi-tenant SaaS architectures.
            </p>
          </div>

          {/* Interactive Classification Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-2 sm:p-2.5 rounded-2xl bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-zinc-300">
            {/* Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {/* All Projects */}
              <button
                onClick={() => setActiveFilter('all')}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 shrink-0 ${
                  activeFilter === 'all'
                    ? 'bg-[#00F0FF] text-black shadow-glow-accent'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>All Projects</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                  activeFilter === 'all' ? 'bg-black/20 text-black' : 'bg-white/10 text-zinc-300'
                }`}>
                  {projectsData.length}
                </span>
              </button>

              {/* Official Projects */}
              <button
                onClick={() => setActiveFilter('official')}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 shrink-0 ${
                  activeFilter === 'official'
                    ? 'bg-emerald-400 text-black shadow-glow-accent'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Official / Company</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                  activeFilter === 'official' ? 'bg-black/20 text-black' : 'bg-white/10 text-zinc-300'
                }`}>
                  {officialCount}
                </span>
              </button>

              {/* Client Outsourcing Projects */}
              <button
                onClick={() => setActiveFilter('client')}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 shrink-0 ${
                  activeFilter === 'client'
                    ? 'bg-pink-400 text-black shadow-glow-accent'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Client / Outsourcing</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                  activeFilter === 'client' ? 'bg-black/20 text-black' : 'bg-white/10 text-zinc-300'
                }`}>
                  {clientCount}
                </span>
              </button>

              {/* Personal Projects */}
              <button
                onClick={() => setActiveFilter('personal')}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 shrink-0 ${
                  activeFilter === 'personal'
                    ? 'bg-purple-400 text-black shadow-glow-accent'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Personal & SaaS</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                  activeFilter === 'personal' ? 'bg-black/20 text-black' : 'bg-white/10 text-zinc-300'
                }`}>
                  {personalCount}
                </span>
              </button>
            </div>

            {/* Scope Summary Description */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-zinc-400 px-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                {activeFilter === 'all' && `${officialCount} Company Platforms • ${clientCount} Client Outsourced • ${personalCount} Independent Products`}
                {activeFilter === 'official' && `Production Systems: Adamsbridge, Tango Eye & Analytic Brains`}
                {activeFilter === 'client' && `Bewittch: 4-Repository Fashion & Modeling Ecosystem via Bitbucket`}
                {activeFilter === 'personal' && `Independent Multi-Tenant SaaS, Hotel & Clinical Architectures`}
              </span>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="space-y-16 lg:space-y-20">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const isEven = index % 2 === 1;

                return (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="project-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 rounded-3xl bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-zinc-50 border border-white/[0.07] dark:border-white/[0.07] light:border-zinc-200 hover:border-[#00F0FF]/35 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
                  >
                    {/* Mockup / Image Visual Area */}
                    <div
                      className={`lg:col-span-7 ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      } relative rounded-2xl overflow-hidden`}
                    >
                      <div 
                        onClick={() => setActiveCaseStudy(project)}
                        className="cursor-pointer transition-transform duration-400 ease-out hover:scale-[1.03] overflow-hidden rounded-2xl"
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
                      {/* Project Header Number & Classification Badge */}
                      <div className="space-y-2.5">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-heading font-extrabold text-3xl sm:text-4xl text-zinc-600 dark:text-zinc-700 light:text-zinc-300">
                            {project.number}
                          </span>
                          <span className="h-4 w-[1px] bg-white/10 dark:bg-white/10 light:bg-zinc-300" />
                          
                          {project.projectType === 'official' && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                              <Building2 className="w-3.5 h-3.5" />
                              <span>OFFICIAL • {project.company}</span>
                            </span>
                          )}

                          {project.projectType === 'client' && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-pink-500/10 text-pink-400 border border-pink-500/30">
                              <Briefcase className="w-3.5 h-3.5" />
                              <span>OUTSOURCING • {project.company}</span>
                            </span>
                          )}

                          {project.projectType === 'personal' && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-purple-500/10 text-purple-300 border border-purple-500/30">
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>PERSONAL & SAAS</span>
                            </span>
                          )}

                          {/* Currently Building indicator for Smart School ERP */}
                          {project.id === 'smart-school-erp' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/25">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
                              <span>Currently Building</span>
                            </span>
                          )}

                          <span className="font-mono text-[11px] uppercase tracking-wider text-[#00F0FF] dark:text-[#00F0FF] light:text-cyan-700 font-semibold ml-auto">
                            {project.category}
                          </span>
                        </div>

                        {/* Role & Period Info */}
                        {project.companyRole && (
                          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                            <span className="text-zinc-300 font-semibold">{project.companyRole}</span>
                            {project.period && (
                              <>
                                <span>•</span>
                                <span className="text-zinc-400">{project.period}</span>
                              </>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-zinc-950 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-zinc-400 mt-1.5">
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
                            <span className="font-bold text-[#00F0FF]">
                              <AnimatedMetric value={res.metric} />
                            </span>
                            <span className="text-zinc-400 text-[11px]">{res.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-200 text-zinc-300 dark:text-zinc-300 light:text-zinc-800 border border-white/[0.06] dark:border-white/[0.06] light:border-zinc-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20"
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
                            className="group inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-zinc-100 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-zinc-200 border border-white/10 dark:border-white/10 light:border-zinc-300 text-zinc-300 dark:text-zinc-300 light:text-zinc-800 font-semibold text-xs font-mono transition-all duration-200 hover:-translate-y-0.5"
                          >
                            <span>Live System</span>
                            <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                            className="p-2.5 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-zinc-100 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-zinc-200 border border-white/10 dark:border-white/10 light:border-zinc-300 text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105"
                          >
                            <GitHubIcon className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
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
