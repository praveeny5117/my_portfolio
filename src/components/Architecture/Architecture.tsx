import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { architectureSteps } from '../../data/architecture';
import { CheckCircle2, Terminal } from 'lucide-react';

export const Architecture: React.FC = () => {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const activeStep = architectureSteps[activeStepIdx];

  return (
    <section id="architecture" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00F0FF] uppercase">
              <span className="w-6 h-[1px] bg-[#00F0FF]" />
              <span>Engineering Methodology</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white dark:text-white light:text-zinc-950 uppercase">
              HOW I BUILD.
            </h2>
          </div>

          <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-md font-sans">
            A disciplined, production-proven lifecycle transforming fuzzy business requirements into resilient, test-covered, and monitored cloud software.
          </p>
        </div>

        {/* 6-Step Interactive Stepper Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {architectureSteps.map((step, idx) => {
            const isActive = activeStepIdx === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIdx(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-200 ${
                  isActive
                    ? 'bg-zinc-900 border-[#00F0FF] shadow-glow-accent-sm'
                    : 'bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-100 border-white/[0.06] dark:border-white/[0.06] light:border-zinc-200 hover:border-white/20'
                } border`}
              >
                <div className="font-mono text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-500 mb-1">
                  {step.step}
                </div>
                <div className="font-heading font-bold text-sm text-white dark:text-white light:text-zinc-900 flex items-center justify-between">
                  <span>{step.number} {step.title.split(' ')[0]}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Card for Active Step */}
        <motion.div
          key={activeStep.number}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-10 rounded-3xl bg-zinc-900/50 dark:bg-zinc-900/50 light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-300 shadow-2xl space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200">
            <div>
              <div className="font-mono text-xs text-[#00F0FF] mb-1">
                {activeStep.step} • STAGE {activeStep.number} OF 06
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-zinc-950">
                {activeStep.title}
              </h3>
            </div>
            <div className="text-sm font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600 italic">
              "{activeStep.tagline}"
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-base text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed font-sans">
                {activeStep.description}
              </p>

              <div className="space-y-3">
                <div className="font-mono text-xs uppercase text-zinc-400 tracking-wider">
                  Guiding Principles & Architecture Pillars:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStep.corePrinciples.map((pillar, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-2 p-3 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-white border border-white/5 dark:border-white/5 light:border-zinc-200 text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF] shrink-0 mt-0.5" />
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#09090D] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                <Terminal className="w-4 h-4 text-[#00F0FF]" />
                <span>PRIMARY TOOLING & RUNTIMES</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeStep.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-400 leading-relaxed">
                ✓ Guaranteed zero regressions with CI/CD gates before production push.
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
