import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, CheckCircle2, TrendingUp } from 'lucide-react';
import { experienceData } from '../../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00F0FF] uppercase">
              <span className="w-6 h-[1px] bg-[#00F0FF]" />
              <span>Career Trajectory</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white dark:text-white light:text-zinc-950">
              5+ years building <br />
              <span className="text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-light">
                high-stakes production software.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-zinc-300 text-xs font-mono text-zinc-300 dark:text-zinc-300 light:text-zinc-700 w-fit">
            <TrendingUp className="w-4 h-4 text-[#00F0FF]" />
            <span>Continuous Delivery & Architectural Leadership</span>
          </div>
        </div>

        {/* Premium Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 md:pl-32 space-y-12 before:absolute before:left-2.5 sm:before:left-4 md:before:left-24 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-[#00F0FF] before:via-blue-500/40 before:to-zinc-800">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Year Stamp on Desktop (Left of line) */}
              <div className="hidden md:block absolute -left-32 top-1 text-right w-24">
                <span className="font-mono text-xs font-bold text-zinc-400 group-hover:text-[#00F0FF] transition-colors">
                  {item.yearRange}
                </span>
              </div>

              {/* Glowing timeline node dot */}
              <div className="absolute -left-6 sm:-left-10 md:-left-8 top-1.5 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#050505] dark:bg-[#050505] light:bg-white border-2 border-[#00F0FF] shadow-glow-accent group-hover:scale-125 transition-transform" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-50 border border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200 group-hover:border-[#00F0FF]/40 transition-all duration-300 shadow-xl">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="md:hidden inline-block px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/5 text-[#00F0FF] mb-2 border border-white/10">
                      {item.yearRange}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white dark:text-white light:text-zinc-950 group-hover:text-[#00F0FF] transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-1 font-sans">
                      <span className="font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#00F0FF]" />
                        {item.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-zinc-500" />
                        {item.companyLocation}
                      </span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-200 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 border border-white/5 w-fit">
                    {item.type}
                  </span>
                </div>

                {/* Role Summary */}
                <p className="text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed font-sans mb-6">
                  {item.summary}
                </p>

                {/* Key Contributions */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-mono uppercase text-zinc-500 tracking-wider">
                    Key Architectural & Engineering Contributions:
                  </div>
                  <ul className="space-y-2">
                    {item.keyContributions.map((contrib, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-sans">
                        <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                        <span>{contrib}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact Metrics & Tech Stack */}
                <div className="pt-5 border-t border-white/[0.06] dark:border-white/[0.06] light:border-zinc-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Metrics */}
                  <div className="flex flex-wrap items-center gap-4">
                    {item.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-baseline gap-1.5">
                        <span className="font-heading font-extrabold text-base sm:text-lg text-white dark:text-white light:text-zinc-900 text-glow">
                          {metric.value}
                        </span>
                        <span className="font-mono text-[11px] text-zinc-500">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-200 text-zinc-300 dark:text-zinc-300 light:text-zinc-800 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
