import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, MessageSquare, Terminal } from 'lucide-react';
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
    link.download = 'Praveen_Yonas_Full_Stack_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const techBadges = [
    { name: 'Angular', color: 'text-red-400 border-red-500/20 bg-red-500/5' },
    { name: 'React', color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5' },
    { name: 'TypeScript', color: 'text-blue-400 border-blue-500/20 bg-blue-500/5' },
    { name: 'Node.js', color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5' },
    { name: 'MongoDB', color: 'text-green-400 border-green-500/20 bg-green-500/5' },
    { name: 'AWS', color: 'text-amber-400 border-amber-500/20 bg-amber-500/5' }
  ];

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
            {/* Engineer Profile Avatar & Identity */}
            <div className="flex items-center gap-4">
              <div className="relative group shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#00F0FF]/60 shadow-[0_0_20px_rgba(0,240,255,0.22)] bg-zinc-900 transition-all duration-300 group-hover:scale-105 group-hover:border-[#00F0FF]">
                  <img
                    src={developerData.profileImage}
                    alt={developerData.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '50% 25%' }}
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-500 border-2 border-[#050505] flex items-center justify-center translate-x-1 translate-y-1 shadow-md" title="Available for projects">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-zinc-300 w-fit">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
                  </span>
                  <span className="text-xs font-mono font-semibold tracking-wider uppercase text-zinc-200 dark:text-zinc-200 light:text-zinc-800">
                    FULL STACK ENGINEER
                  </span>
                </div>
                <div className="text-xs font-mono text-zinc-400 pl-0.5">
                  <span className="text-white dark:text-white light:text-zinc-900 font-semibold">{developerData.name}</span> • 5+ Years Exp.
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-zinc-950 leading-[1.12]">
                Building Scalable Web Applications & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-cyan-300 to-blue-500">
                  Enterprise Platforms
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-300 dark:text-zinc-300 light:text-zinc-600 max-w-2xl leading-relaxed font-sans">
              Full Stack Engineer specializing in Angular, React, Node.js, MongoDB and AWS. I build production-ready applications, APIs and cloud solutions with a focus on performance, scalability and maintainability.
            </p>

            {/* Technology Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {techBadges.map((badge) => (
                <span
                  key={badge.name}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-medium border ${badge.color}`}
                >
                  {badge.name}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-white light:bg-zinc-950 text-black dark:text-black light:text-white font-semibold text-sm hover:bg-[#00F0FF] dark:hover:bg-[#00F0FF] light:hover:bg-zinc-800 transition-all duration-200 shadow-lg hover:shadow-glow-accent hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={handleDownloadResume}
                className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-zinc-300 text-zinc-200 dark:text-zinc-200 light:text-zinc-800 font-semibold text-sm hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-zinc-200 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4 text-[#00F0FF] group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={scrollToContact}
                className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-300 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-semibold text-sm hover:text-[#00F0FF] hover:border-[#00F0FF]/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-4 h-4 text-[#00F0FF] group-hover:scale-110 transition-transform" />
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Engineering Credential Highlights */}
            <div className="pt-4 border-t border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200 text-xs font-mono text-zinc-400 flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1.5 text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" />
                5+ Years Hands-on Development
              </span>
              <span>•</span>
              <span className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                Multi-Tenant SaaS
              </span>
              <span>•</span>
              <span className="text-emerald-400">
                50% Latency Optimization
              </span>
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
