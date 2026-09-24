import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, AlertTriangle } from 'lucide-react';
import type { Project } from '../../data/projects';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { GitHubIcon } from '../common/BrandIcons';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'features' | 'results'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-[#0C0C10] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Modal Header */}
          <div className="p-6 sm:p-8 bg-[#101016] border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#00F0FF]">
                <span>CASE STUDY</span>
                <span>•</span>
                <span>PROJECT {project.number}</span>
                <span>•</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300">
                  {project.category}
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h2>
            </div>

            {/* Quick Action Links & Close */}
            <div className="flex items-center gap-3 self-end md:self-auto">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors"
                  title="View Repository"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#00F0FF] hover:bg-[#38F8FF] text-black font-semibold text-xs font-mono transition-all"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-400 hover:text-white transition-colors ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 px-6 sm:px-8 py-3 bg-[#0E0E14] border-b border-white/5 overflow-x-auto scrollbar-none text-xs font-mono">
            {[
              { id: 'overview', label: '01. Overview & Problem' },
              { id: 'architecture', label: '02. Architecture & Flow' },
              { id: 'features', label: '03. Key Features' },
              { id: 'results', label: '04. Challenges & Results' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-white/10 text-[#00F0FF] font-semibold border border-[#00F0FF]/30'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Modal Body / Tab Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">Executive Summary</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-sans">{caseStudy.overview}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-rose-500/[0.04] border border-rose-500/20 space-y-2">
                    <div className="flex items-center gap-2 font-mono text-xs text-rose-400 font-semibold uppercase">
                      <AlertTriangle className="w-4 h-4 text-rose-400" />
                      <span>The Core Challenge</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                      {caseStudy.problem}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-emerald-500/[0.04] border border-emerald-500/20 space-y-2">
                    <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold uppercase">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Engineered Solution</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                      {caseStudy.solution}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-heading text-sm font-semibold text-white mb-3">Core Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">Systems Topology & Pipeline</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                    {caseStudy.architectureDescription}
                  </p>
                </div>

                <ArchitectureDiagram
                  nodes={caseStudy.architectureNodes}
                  flowSteps={caseStudy.architectureFlow}
                  accentColor={project.accentColor}
                />
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-bold text-white mb-2">Key Architectural Capabilities</h3>
                <div className="grid grid-cols-1 gap-3">
                  {caseStudy.keyFeatures.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#00F0FF]/30 transition-all"
                    >
                      <h4 className="font-heading font-semibold text-sm text-white mb-1">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'results' && (
              <div className="space-y-8">
                {/* Measurable Results */}
                <div>
                  <h3 className="font-heading text-lg font-bold text-white mb-4">Production Impact & Metrics</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {caseStudy.results.map((res, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-5 rounded-2xl bg-zinc-900 border border-white/10 text-center"
                      >
                        <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#00F0FF] mb-1">
                          {res.metric}
                        </div>
                        <div className="font-mono text-xs text-zinc-400">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges & Technical Solutions */}
                <div className="space-y-4">
                  <h4 className="font-heading text-sm font-semibold text-white">
                    Non-Trivial Engineering Roadblocks Solved
                  </h4>
                  <div className="space-y-3">
                    {caseStudy.challenges.map((c, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2"
                      >
                        <div className="text-xs font-mono font-semibold text-amber-400">
                          Problem: {c.problem}
                        </div>
                        <div className="text-xs text-zinc-300 leading-relaxed pl-3 border-l-2 border-emerald-400">
                          Resolution: {c.resolution}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* My Specific Contributions */}
                <div className="space-y-2">
                  <h4 className="font-heading text-sm font-semibold text-white">My Direct Contributions</h4>
                  <ul className="space-y-1.5">
                    {caseStudy.contribution.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 bg-[#0E0E14] border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Press ESC or click outside to dismiss</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
            >
              Close Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
