import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, Atom, Code2, Server, Database, Cloud, 
  CreditCard, Mail, Share2, Shield, RefreshCw, GitBranch, 
  FileCode, Sparkles, Filter, Zap, LayoutGrid, HardDrive, 
  CloudLightning, Network, ShieldCheck, Globe, Radio, Webhook, MessageSquare
} from 'lucide-react';
import { skillCategories } from '../../data/skills';
import type { SkillItem } from '../../data/skills';
import { EcosystemVisualizer } from './EcosystemVisualizer';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  // Map icon keys to Lucide components
  const renderSkillIcon = (key: string) => {
    const props = { className: "w-4 h-4 text-[#00F0FF]" };
    switch (key) {
      case 'Layers': return <Layers {...props} />;
      case 'Atom': return <Atom {...props} />;
      case 'Code2': return <Code2 {...props} />;
      case 'LayoutGrid': return <LayoutGrid {...props} />;
      case 'Palette': return <Sparkles {...props} />;
      case 'FileCode': return <FileCode {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Server': return <Server {...props} />;
      case 'Cpu': return <Zap {...props} />;
      case 'Network': return <Network {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Filter': return <Filter {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Cloud': return <Cloud {...props} />;
      case 'HardDrive': return <HardDrive {...props} />;
      case 'CloudLightning': return <CloudLightning {...props} />;
      case 'Shield': return <Shield {...props} />;
      case 'RefreshCw': return <RefreshCw {...props} />;
      case 'GitBranch': return <GitBranch {...props} />;
      case 'CreditCard': return <CreditCard {...props} />;
      case 'Mail': return <Mail {...props} />;
      case 'Share2': return <Share2 {...props} />;
      case 'Radio': return <Radio {...props} />;
      case 'Webhook': return <Webhook {...props} />;
      case 'MessageSquare': return <MessageSquare {...props} />;
      default: return <Code2 {...props} />;
    }
  };

  const allSkills = skillCategories.flatMap(cat => cat.skills);

  const displayedSkills = selectedCategory === 'all'
    ? allSkills
    : (skillCategories.find(c => c.id === selectedCategory)?.skills || []);

  const categories = [
    { id: 'all', label: 'All Ecosystem' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'integrations', label: 'Integrations' },
  ];

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00F0FF] uppercase">
              <span className="w-6 h-[1px] bg-[#00F0FF]" />
              <span>Technology Ecosystem</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white dark:text-white light:text-zinc-950">
              Battle-tested tools <br />
              <span className="text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-light">
                for high-throughput systems.
              </span>
            </h2>
          </div>

          <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-md font-sans">
            Specialized in the MEAN stack with modern extensions: Angular 17+, React 19, TypeScript, Express, MongoDB aggregations, and AWS infrastructure.
          </p>
        </div>

        {/* Central Visual Topography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <EcosystemVisualizer 
            activeSkillName={hoveredSkill?.name}
            onSelectSkill={(name) => {
              const found = allSkills.find(s => s.name.toLowerCase() === name.toLowerCase());
              if (found) setHoveredSkill(found);
            }}
          />
        </motion.div>

        {/* Interactive Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-white dark:bg-white light:bg-zinc-900 text-black dark:text-black light:text-white shadow-glow-accent'
                  : 'bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 border border-white/5 dark:border-white/5 light:border-zinc-300 text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-zinc-900 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedSkills.map((skill, idx) => {
            const isHovered = hoveredSkill?.name === skill.name;
            const isRelated = hoveredSkill?.related?.includes(skill.name);

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (idx % 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                title={`${skill.name} — ${skill.experience} production experience`}
                className={`group p-5 rounded-2xl transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? 'bg-zinc-900 border-[#00F0FF] shadow-glow-accent -translate-y-1.5'
                    : isRelated
                    ? 'bg-zinc-900/80 border-[#00F0FF]/40 -translate-y-0.5'
                    : 'bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-50 border-white/[0.06] dark:border-white/[0.06] light:border-zinc-200 hover:border-white/25 hover:-translate-y-1 hover:shadow-lg'
                } border`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-200 border border-white/5 transition-transform duration-200 group-hover:scale-105 group-hover:-translate-y-0.5">
                      {renderSkillIcon(skill.iconKey)}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm text-white dark:text-white light:text-zinc-900 group-hover:text-[#00F0FF] transition-colors duration-200">
                        {skill.name}
                      </h3>
                      <span className="font-mono text-[11px] text-zinc-400">
                        {skill.experience} production
                      </span>
                    </div>
                  </div>

                  {skill.highlighted && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/25 transition-transform duration-200 group-hover:scale-105">
                      Core
                    </span>
                  )}
                </div>

                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-sans leading-relaxed line-clamp-2 mb-3">
                  {skill.description}
                </p>

                {/* Related Technologies Tags */}
                {skill.related && skill.related.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/[0.05] dark:border-white/[0.05] light:border-zinc-200">
                    <span className="text-[10px] font-mono text-zinc-500 mr-1">connected:</span>
                    {skill.related.map((rel) => (
                      <span
                        key={rel}
                        className="px-1.5 py-0.5 rounded bg-white/[0.03] dark:bg-white/[0.03] light:bg-zinc-200 text-zinc-400 dark:text-zinc-400 light:text-zinc-700 text-[10px] font-mono transition-all duration-150 hover:text-[#00F0FF] hover:bg-white/10"
                      >
                        {rel}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
