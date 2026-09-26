import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Image as ImageIcon,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import type { Project } from '../../data/projects';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { GitHubIcon } from '../common/BrandIcons';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  initialTab?: 'overview' | 'gallery' | 'architecture' | 'features' | 'results';
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  initialTab = 'overview'
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'gallery' | 'architecture' | 'features' | 'results'>(initialTab);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Sync initialTab when project or initialTab changes
  useEffect(() => {
    if (project) {
      if (initialTab === 'gallery' && (!project.screenshots || project.screenshots.length === 0)) {
        setActiveTab('overview');
      } else {
        setActiveTab(initialTab);
      }
      setActiveCategory('All');
      setLightboxIndex(null);
    }
  }, [project, initialTab]);

  // Handle ESC and Arrow keys for modal & lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === 'Escape') {
          e.stopPropagation();
          setLightboxIndex(null);
        } else if (e.key === 'ArrowLeft') {
          e.stopPropagation();
          if (project?.screenshots) {
            setLightboxIndex((prev) =>
              prev === null || prev === 0 ? project.screenshots!.length - 1 : prev - 1
            );
          }
        } else if (e.key === 'ArrowRight') {
          e.stopPropagation();
          if (project?.screenshots) {
            setLightboxIndex((prev) =>
              prev === null || prev === project.screenshots!.length - 1 ? 0 : prev + 1
            );
          }
        }
      } else {
        if (e.key === 'Escape') onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, lightboxIndex]);

  if (!project) return null;

  const { caseStudy } = project;
  const screenshots = project.screenshots || [];
  const hasScreenshots = screenshots.length > 0;

  // Extract unique categories for gallery filter
  const categories = ['All', ...Array.from(new Set(screenshots.map((s) => s.category)))];

  const filteredScreenshots =
    activeCategory === 'All'
      ? screenshots
      : screenshots.filter((s) => s.category === activeCategory);

  // Tabs configuration
  const tabs = [
    { id: 'overview', label: '01. Overview & Problem' },
    ...(hasScreenshots
      ? [{ id: 'gallery', label: `02. UI Gallery (${screenshots.length})` }]
      : []),
    { id: 'architecture', label: hasScreenshots ? '03. Architecture & Flow' : '02. Architecture & Flow' },
    { id: 'features', label: hasScreenshots ? '04. Key Features' : '03. Key Features' },
    { id: 'results', label: hasScreenshots ? '05. Challenges & Results' : '04. Challenges & Results' },
  ];

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
          className="relative w-full max-w-5xl max-h-[92vh] bg-[#0C0C10] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Modal Header */}
          <div className="p-6 sm:p-8 bg-[#101016] border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#00F0FF] flex-wrap">
                <span>CASE STUDY</span>
                <span>•</span>
                <span>PROJECT {project.number}</span>
                <span>•</span>
                {project.projectType === 'official' && (
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 font-semibold">
                    OFFICIAL • {project.company} ({project.companyRole})
                  </span>
                )}
                {project.projectType === 'client' && (
                  <span className="px-2 py-0.5 rounded bg-pink-500/10 text-pink-400 border border-pink-500/25 font-semibold">
                    CLIENT OUTSOURCING • {project.company} ({project.companyRole})
                  </span>
                )}
                {project.projectType === 'personal' && (
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/25 font-semibold">
                    PERSONAL SAAS • {project.companyRole || 'Independent Product'}
                  </span>
                )}
                <span>•</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300">
                  {project.category}
                </span>

                {hasScreenshots && (
                  <span className="px-2 py-0.5 rounded bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30 font-semibold flex items-center gap-1">
                    <ImageIcon className="w-3 h-3" />
                    <span>{screenshots.length} Real UI Screens</span>
                  </span>
                )}
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
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? 'bg-white/10 text-[#00F0FF] font-semibold border border-[#00F0FF]/30 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tab.id === 'gallery' && <ImageIcon className="w-3.5 h-3.5" />}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Modal Body / Tab Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            {/* TAB 1: OVERVIEW & PROBLEM */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Live Screenshots Ribbon Preview (If Screenshots Available) */}
                {hasScreenshots && (
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-zinc-900/90 to-zinc-950 border border-white/10 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 font-mono text-xs text-[#00F0FF] uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Live Application UI Preview</span>
                        </div>
                        <h4 className="font-heading text-base font-bold text-white mt-1">
                          Production Screens & Operational Workflows
                        </h4>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveTab('gallery')}
                        className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#00F0FF]/10 hover:bg-[#00F0FF]/25 text-[#00F0FF] border border-[#00F0FF]/30 font-mono text-xs font-semibold transition-all"
                      >
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>Explore All {screenshots.length} Screenshots →</span>
                      </button>
                    </div>

                    {/* Preview Thumbnail Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                      {screenshots.slice(0, 4).map((shot, sIdx) => (
                        <div
                          key={sIdx}
                          onClick={() => {
                            setActiveTab('gallery');
                            setLightboxIndex(sIdx);
                          }}
                          className="group/thumb relative rounded-xl overflow-hidden border border-white/10 hover:border-[#00F0FF]/50 cursor-pointer bg-black/40 transition-all hover:scale-[1.02]"
                        >
                          <div className="aspect-video w-full overflow-hidden bg-black/60 flex items-center justify-center">
                            <img
                              src={shot.url}
                              alt={shot.title}
                              className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                          <div className="p-2 bg-[#0E0E14] text-[11px] truncate">
                            <span className="text-zinc-300 font-semibold block truncate">
                              {shot.title}
                            </span>
                            <span className="text-[10px] text-zinc-500 font-mono block">
                              {shot.category}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Executive Summary */}
                <div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">Executive Summary</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-sans">{caseStudy.overview}</p>
                </div>

                {/* Challenge & Solution Grid */}
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

                {/* Core Technology Stack */}
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

            {/* TAB 2: UI GALLERY (IF APPLICABLE) */}
            {activeTab === 'gallery' && hasScreenshots && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-white/5">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">
                      Application Interface & Screenshots Gallery
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 mt-1">
                      Showing {filteredScreenshots.length} of {screenshots.length} captured production screens • Click any screen to view in full resolution
                    </p>
                  </div>

                  {/* Category Filter Pills */}
                  {categories.length > 2 && (
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs font-mono">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                            activeCategory === cat
                              ? 'bg-[#00F0FF] text-black font-bold'
                              : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Screenshots Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredScreenshots.map((shot, idx) => {
                    const globalIdx = screenshots.findIndex((s) => s.url === shot.url);

                    return (
                      <div
                        key={shot.url}
                        onClick={() => setLightboxIndex(globalIdx !== -1 ? globalIdx : idx)}
                        className="group/card relative rounded-2xl bg-[#09090E] border border-white/10 hover:border-[#00F0FF]/50 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
                      >
                        {/* Image Frame */}
                        <div className="relative aspect-video w-full bg-black/60 overflow-hidden flex items-center justify-center p-2">
                          {shot.aspectRatio === 'mobile' && (
                            <div
                              className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-20"
                              style={{ backgroundImage: `url(${shot.url})` }}
                            />
                          )}

                          <img
                            src={shot.url}
                            alt={shot.title}
                            className={`max-h-full object-contain rounded-lg transition-transform duration-300 group-hover/card:scale-[1.02] ${
                              shot.aspectRatio === 'mobile' ? 'max-h-[220px]' : 'w-full'
                            }`}
                            loading="lazy"
                          />

                          {/* Hover Zoom Overlay */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <span className="p-2.5 rounded-full bg-black/80 text-[#00F0FF] border border-[#00F0FF]/40 shadow-lg">
                              <Maximize2 className="w-4 h-4" />
                            </span>
                            <span className="text-xs font-mono font-semibold text-white bg-black/80 px-2.5 py-1 rounded-lg border border-white/20">
                              View Full Size
                            </span>
                          </div>

                          {/* Top Badges */}
                          <div className="absolute top-3 left-3 flex items-center gap-2">
                            <span
                              className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md"
                              style={{
                                backgroundColor: `${project.accentColor}30`,
                                color: project.accentColor,
                                border: `1px solid ${project.accentColor}50`
                              }}
                            >
                              {shot.category}
                            </span>

                            {shot.aspectRatio && (
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-black/60 text-zinc-400 border border-white/10 backdrop-blur-md">
                                {shot.aspectRatio.toUpperCase()}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Caption Area */}
                        <div className="p-4 bg-[#0D0D14] border-t border-white/5 space-y-1.5 flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="font-heading text-sm font-bold text-white group-hover/card:text-[#00F0FF] transition-colors">
                              {shot.title}
                            </h4>
                            <p className="text-xs text-zinc-400 font-sans leading-relaxed mt-1">
                              {shot.caption}
                            </p>
                          </div>

                          <div className="pt-2 text-[10px] font-mono text-zinc-500 flex items-center justify-between">
                            <span>SCREENSHOT #{globalIdx + 1}</span>
                            <span className="text-[#00F0FF] font-semibold">CLICK TO EXPAND ➔</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB: ARCHITECTURE & FLOW */}
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

            {/* TAB: KEY FEATURES */}
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

            {/* TAB: CHALLENGES & RESULTS */}
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

        {/* FULLSCREEN LIGHTBOX MODAL (Z-60) */}
        {lightboxIndex !== null && screenshots[lightboxIndex] && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-6 bg-black/95 backdrop-blur-2xl">
            {/* Close Lightbox */}
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close lightbox"
              className="absolute top-4 right-4 z-30 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Lightbox Arrow */}
            <button
              type="button"
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev === null || prev === 0 ? screenshots.length - 1 : prev - 1
                )
              }
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-[#00F0FF] text-white hover:text-black transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Lightbox Arrow */}
            <button
              type="button"
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev === null || prev === screenshots.length - 1 ? 0 : prev + 1
                )
              }
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-[#00F0FF] text-white hover:text-black transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <div className="relative max-w-6xl w-full max-h-[95vh] flex flex-col items-center justify-between p-2 sm:p-4 space-y-4">
              {/* Image */}
              <div className="flex-1 w-full flex items-center justify-center overflow-hidden">
                <img
                  src={screenshots[lightboxIndex].url}
                  alt={screenshots[lightboxIndex].title}
                  className="max-h-[72vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/15"
                />
              </div>

              {/* Caption and Info Bar */}
              <div className="w-full max-w-3xl bg-zinc-900/90 border border-white/15 p-4 rounded-2xl text-center space-y-1.5 backdrop-blur-xl">
                <div className="flex items-center justify-center gap-2 font-mono text-xs">
                  <span
                    className="px-2 py-0.5 rounded uppercase font-bold"
                    style={{
                      backgroundColor: `${project.accentColor}30`,
                      color: project.accentColor
                    }}
                  >
                    {screenshots[lightboxIndex].category}
                  </span>
                  <span className="text-zinc-400">
                    Screen {lightboxIndex + 1} of {screenshots.length}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-white">
                  {screenshots[lightboxIndex].title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 font-sans max-w-2xl mx-auto">
                  {screenshots[lightboxIndex].caption}
                </p>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex items-center gap-2 overflow-x-auto max-w-xl py-1 px-2 scrollbar-none">
                {screenshots.map((shot, sIdx) => (
                  <button
                    key={shot.url}
                    type="button"
                    onClick={() => setLightboxIndex(sIdx)}
                    className={`relative w-14 h-10 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      sIdx === lightboxIndex
                        ? 'border-[#00F0FF] scale-110 shadow-glow-accent'
                        : 'border-white/20 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={shot.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};
