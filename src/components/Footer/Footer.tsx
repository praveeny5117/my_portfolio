import React from 'react';
import { motion } from 'framer-motion';
import { developerData } from '../../data/developer';
import { socialLinks } from '../../data/social';
import { Terminal, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#030304] dark:bg-[#030304] light:bg-zinc-100 border-t border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06] dark:border-white/[0.06] light:border-zinc-300">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-heading font-bold text-white dark:text-white light:text-zinc-900 text-lg">
              <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center transition-transform duration-200 hover:scale-105">
                <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" />
              </div>
              <span>PRAVEEN YONAS</span>
            </div>
            <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-sm font-sans">
              Full Stack Engineer specializing in Angular, React, Node.js, MongoDB and AWS. Building scalable web applications, enterprise platforms & multi-tenant SaaS products.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-[#00F0FF] transition-all duration-200 hover:-translate-y-0.5 inline-block"
              >
                {s.name}
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              title="Return to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            <span>Designed & Built by </span>
            <span className="text-zinc-300 dark:text-zinc-300 light:text-zinc-800 font-semibold">{developerData.name}</span>
            <span className="mx-2">•</span>
            <span>Angular • React • Node.js • MongoDB • AWS</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-cyan-400/90 font-medium">Production Ready ⚡</span>
            <span>© 2026 {developerData.name}. All rights reserved.</span>
          </div>
        </div>

      </div>
    </motion.footer>
  );
};
