import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SystemConsole } from './SystemConsole';
import { developerData } from '../../data/developer';

export const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    // Trigger celebratory particle effect
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#00F0FF', '#3B82F6', '#10B981']
    });

    // Initiate download
    const link = document.createElement('a');
    link.href = developerData.resumeUrl;
    link.download = 'Praveen_Y_Full_Stack_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Engineering Headline & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            {/* Engineer Identity Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-zinc-300 w-fit">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
              </span>
              <span className="text-xs font-mono tracking-wider uppercase text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                Senior Full Stack & MEAN Architect
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white dark:text-white light:text-zinc-950 uppercase leading-[1.05]">
                BUILDING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 dark:from-white dark:via-zinc-200 dark:to-zinc-500 light:from-zinc-900 light:via-zinc-700 light:to-zinc-500">
                  DIGITAL SYSTEMS
                </span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-cyan-300 to-blue-500">
                  THAT SCALE.
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-2xl leading-relaxed font-sans font-normal">
              Full Stack Developer specializing in modern web applications, enterprise workflows, SaaS platforms, and scalable backend systems. Building with high concurrency, clean architecture, and cloud resilience.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white dark:bg-white light:bg-zinc-950 text-black dark:text-black light:text-white font-semibold text-sm hover:bg-[#00F0FF] dark:hover:bg-[#00F0FF] light:hover:bg-zinc-800 transition-all duration-200 shadow-lg hover:shadow-glow-accent hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={handleDownloadResume}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-zinc-300 text-zinc-200 dark:text-zinc-200 light:text-zinc-800 font-semibold text-sm hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-zinc-200 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4 text-[#00F0FF] group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Engineering Highlights / Badges */}
            <div className="pt-6 border-t border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {developerData.heroTags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-zinc-100/80 border border-white/[0.06] dark:border-white/[0.06] light:border-zinc-200 text-xs font-mono"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF] shrink-0" />
                    <span className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-medium truncate">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Interactive Developer System Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient backlight for terminal */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00F0FF]/20 to-blue-600/10 blur-xl opacity-60 -z-10" />
            <SystemConsole />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
