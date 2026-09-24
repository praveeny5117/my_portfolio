import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../../data/services';
import { Layers, Boxes, Network, Database, Cloud, Zap, Check } from 'lucide-react';

export const Services: React.FC = () => {
  const getIcon = (key: string) => {
    const props = { className: "w-5 h-5 text-[#00F0FF]" };
    switch (key) {
      case 'Layers': return <Layers {...props} />;
      case 'Boxes': return <Boxes {...props} />;
      case 'Network': return <Network {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Cloud': return <Cloud {...props} />;
      case 'Zap': return <Zap {...props} />;
      default: return <Layers {...props} />;
    }
  };

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00F0FF] uppercase">
              <span className="w-6 h-[1px] bg-[#00F0FF]" />
              <span>Capabilities & Solutions</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white dark:text-white light:text-zinc-950 uppercase">
              WHAT I CAN BUILD.
            </h2>
          </div>

          <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-md font-sans">
            Tailored engineering capabilities spanning initial architecture design to high-load scaling, database fine-tuning, and cloud operations.
          </p>
        </div>

        {/* 6 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((svc, idx) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group p-8 rounded-3xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-50 border border-white/[0.06] dark:border-white/[0.06] light:border-zinc-200 hover:border-[#00F0FF]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xl hover:shadow-glow-accent"
            >
              <div className="space-y-6">
                {/* Top header row */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-200 border border-white/5 group-hover:border-[#00F0FF]/30 transition-colors">
                    {getIcon(svc.iconKey)}
                  </div>
                  <span className="font-heading font-extrabold text-2xl text-zinc-600 dark:text-zinc-700 light:text-zinc-300">
                    {svc.number}
                  </span>
                </div>

                {/* Service title & tagline */}
                <div>
                  <h3 className="font-heading text-xl font-bold text-white dark:text-white light:text-zinc-950 group-hover:text-[#00F0FF] transition-colors mb-1.5">
                    {svc.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-300/90 dark:text-cyan-400/90 light:text-cyan-700">
                    {svc.tagline}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-sans">
                  {svc.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 pt-2 border-t border-white/5 dark:border-white/5 light:border-zinc-200">
                  <div className="text-[11px] font-mono uppercase text-zinc-500">
                    Deliverables:
                  </div>
                  <ul className="space-y-1.5">
                    {svc.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                        <Check className="w-3.5 h-3.5 text-[#00F0FF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies footer */}
              <div className="mt-8 pt-4 border-t border-white/[0.06] dark:border-white/[0.06] light:border-zinc-200 flex flex-wrap gap-1.5">
                {svc.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] dark:bg-white/[0.03] light:bg-zinc-200 text-zinc-400 dark:text-zinc-400 light:text-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
