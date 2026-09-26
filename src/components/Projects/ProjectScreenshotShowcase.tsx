import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Lock,
  Layers,
  Image as ImageIcon
} from 'lucide-react';
import type { Project, ProjectScreenshot } from '../../data/projects';

interface ProjectScreenshotShowcaseProps {
  project: Project;
  onOpenGallery?: () => void;
  renderBlueprintMockup: () => React.ReactNode;
}

export const ProjectScreenshotShowcase: React.FC<ProjectScreenshotShowcaseProps> = ({
  project,
  onOpenGallery,
  renderBlueprintMockup
}) => {
  const screenshots = project.screenshots || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'screenshots' | 'blueprint'>('screenshots');
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!screenshots || screenshots.length === 0) {
    return <>{renderBlueprintMockup()}</>;
  }

  const currentScreenshot: ProjectScreenshot = screenshots[currentIndex] || screenshots[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImageLoaded(false);
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImageLoaded(false);
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (index !== currentIndex) {
      setImageLoaded(false);
      setCurrentIndex(index);
    }
  };

  const getDomainForProject = (id: string): string => {
    switch (id) {
      case 'hospital-management-system':
        return 'apexcare-hms.health/live-ops';
      case 'orderme-application':
        return 'orderme.restaurant/kitchen-kds';
      case 'smart-school-erp':
        return 'edumanage.school/dashboard';
      default:
        return `${id}.app`;
    }
  };

  return (
    <div className="w-full h-full min-h-[380px] rounded-2xl bg-[#08080C] border border-white/10 flex flex-col justify-between font-sans select-none overflow-hidden relative group shadow-2xl">
      {/* Ambient Accent Glow */}
      <div
        className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl pointer-events-none opacity-20 transition-all duration-700"
        style={{ backgroundColor: project.accentColor }}
      />

      {/* Top Browser Window Header */}
      <div className="p-3 sm:px-4 sm:py-2.5 bg-[#0D0D14] border-b border-white/10 flex items-center justify-between gap-3 z-10">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 border border-[#E0443E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 border border-[#DEA123]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 border border-[#1AAB29]" />
        </div>

        {/* URL Simulation Pill */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-[11px] font-mono text-zinc-400 max-w-xs truncate">
          <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
          <span className="text-zinc-500">https://</span>
          <span className="text-zinc-200 truncate">{getDomainForProject(project.id)}</span>
        </div>

        {/* View Mode Toggle: Screenshots vs System Blueprint */}
        <div className="flex items-center gap-1 p-0.5 rounded-xl bg-white/[0.05] border border-white/10 text-[10px] font-mono">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setViewMode('screenshots');
            }}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all ${
              viewMode === 'screenshots'
                ? 'bg-[#00F0FF] text-black font-bold shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
            title="View Real Application Screenshots"
          >
            <ImageIcon className="w-3 h-3" />
            <span>UI ({screenshots.length})</span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setViewMode('blueprint');
            }}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all ${
              viewMode === 'blueprint'
                ? 'bg-purple-500 text-white font-bold shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
            title="View Architecture & Pipeline Blueprint"
          >
            <Layers className="w-3 h-3" />
            <span>Blueprint</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {viewMode === 'blueprint' ? (
        <div className="flex-1 w-full flex flex-col">{renderBlueprintMockup()}</div>
      ) : (
        <div className="relative flex-1 w-full flex flex-col justify-between overflow-hidden bg-black/60 min-h-[300px]">
          {/* Screenshot Display Frame */}
          <div className="relative flex-1 w-full flex items-center justify-center p-2 sm:p-4 overflow-hidden">
            {/* Background Blur for Mobile or Tall Screenshots */}
            {currentScreenshot.aspectRatio === 'mobile' && (
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-2xl opacity-20 scale-125 pointer-events-none"
                style={{ backgroundImage: `url(${currentScreenshot.url})` }}
              />
            )}

            {/* Loading Placeholder */}
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/60 z-0">
                <div className="flex flex-col items-center gap-2 text-zinc-500 font-mono text-xs">
                  <span className="w-5 h-5 border-2 border-[#00F0FF] border-t-transparent rounded-full animate-spin" />
                  <span>Loading UI Preview...</span>
                </div>
              </div>
            )}

            {/* Active Screenshot with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentScreenshot.url}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: imageLoaded ? 1 : 0.01, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative z-1 max-w-full max-h-full flex items-center justify-center"
              >
                <img
                  src={currentScreenshot.url}
                  alt={currentScreenshot.title}
                  onLoad={() => setImageLoaded(true)}
                  className={`rounded-xl shadow-2xl object-contain transition-transform duration-300 ${
                    currentScreenshot.aspectRatio === 'mobile'
                      ? 'max-h-[260px] sm:max-h-[300px] w-auto border-2 border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
                      : 'w-full max-h-[260px] sm:max-h-[300px] object-cover sm:object-contain border border-white/10'
                  }`}
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>

            {/* Previous Arrow */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/70 hover:bg-[#00F0FF] text-white hover:text-black border border-white/15 transition-all duration-200 backdrop-blur-md opacity-80 sm:opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/70 hover:bg-[#00F0FF] text-white hover:text-black border border-white/15 transition-all duration-200 backdrop-blur-md opacity-80 sm:opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Fullscreen Gallery Trigger Button */}
            {onOpenGallery && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenGallery();
                }}
                className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/75 hover:bg-white text-zinc-300 hover:text-black border border-white/15 transition-all duration-200 text-[11px] font-mono font-medium backdrop-blur-md shadow-md"
                title="Open UI Gallery & Fullscreen Viewer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Gallery ({screenshots.length})</span>
              </button>
            )}
          </div>

          {/* Caption & Navigation Footer */}
          <div className="p-3 sm:px-4 sm:py-2.5 bg-[#0B0B11]/95 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 z-10">
            {/* Title & Category Badge */}
            <div className="flex items-center gap-2 min-w-0">
              <span
                className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider shrink-0"
                style={{
                  backgroundColor: `${project.accentColor}20`,
                  color: project.accentColor,
                  border: `1px solid ${project.accentColor}40`
                }}
              >
                {currentScreenshot.category}
              </span>
              <p className="text-xs font-semibold text-zinc-200 truncate">
                {currentScreenshot.title}
              </p>
            </div>

            {/* Indicators & Counter */}
            <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
              {/* Thumbnail Dots */}
              <div className="flex items-center gap-1.5">
                {screenshots.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => handleThumbnailClick(idx, e)}
                    aria-label={`Go to screenshot ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? 'w-5 bg-[#00F0FF]'
                        : 'w-1.5 bg-white/20 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Counter Indicator */}
              <span className="text-[11px] font-mono text-zinc-400">
                {currentIndex + 1} / {screenshots.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
