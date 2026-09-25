import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Search, Lock, 
  Code2, ArrowUpRight, Layers, CheckCircle2, Cpu
} from 'lucide-react';
import { githubProfileData, userRepositories } from '../../data/github';
import { GitHubIcon } from '../common/BrandIcons';

export const GitHub: React.FC = () => {
  const [activeSuite, setActiveSuite] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtered repositories based on suite filter and search query
  const filteredRepos = useMemo(() => {
    return userRepositories.filter((repo) => {
      const matchesSuite = activeSuite === 'All' || repo.suite.toLowerCase().includes(activeSuite.toLowerCase());
      const matchesSearch = 
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.architectureTags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesSuite && matchesSearch;
    });
  }, [activeSuite, searchTerm]);

  return (
    <section id="github" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Editorial Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00F0FF] uppercase">
              <GitHubIcon className="w-4 h-4 text-[#00F0FF]" />
              <span>Production Codebases & Architecture</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-zinc-950 uppercase leading-none">
              SOURCE <br />
              <span className="text-zinc-400 dark:text-zinc-400 light:text-zinc-500">CODE &</span> <br />
              <span className="text-[#00F0FF]">SYSTEM MODULES.</span>
            </h2>
          </div>

          <div className="space-y-3 max-w-md">
            <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-sans leading-relaxed">
              Real-world enterprise repositories powering <strong className="text-white dark:text-white light:text-zinc-900 font-semibold">Smart School ERP</strong> and the <strong className="text-[#00F0FF] font-semibold">OrderMe</strong> hotel live operations platform.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Production Architectures
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-zinc-400">
                <Lock className="w-3.5 h-3.5" />
                Enterprise Private
              </span>
            </div>
          </div>
        </div>

        {/* Custom Engineering Profile Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-300 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Developer Identity Details */}
            <div className="lg:col-span-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              {/* Photo with subtle glowing border */}
              <div className="relative group shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#00F0FF]/50 shadow-glow-accent-sm bg-zinc-900">
                  <img
                    src={githubProfileData.avatarUrl}
                    alt={githubProfileData.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80";
                    }}
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#050505] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                </span>
              </div>

              {/* Bio & credentials */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                  <h3 className="font-heading font-extrabold text-2xl text-white dark:text-white light:text-zinc-950">
                    {githubProfileData.name}
                  </h3>
                  <a
                    href={githubProfileData.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#00F0FF] hover:underline"
                  >
                    @{githubProfileData.username}
                  </a>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/20 font-semibold">
                    Lead Full Stack Engineer
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-sans leading-relaxed">
                  {githubProfileData.headline}
                </p>

                {/* Stack Highlight Chips */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 pt-1">
                  {githubProfileData.stackHighlights.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-200 text-zinc-300 dark:text-zinc-300 light:text-zinc-800 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Metrics & CTA */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center lg:items-end justify-center gap-4">
              <div className="flex items-center gap-3 text-center">
                <div className="px-4 py-2.5 rounded-xl bg-black/40 border border-white/5 min-w-[100px]">
                  <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Experience</div>
                  <div className="font-heading font-bold text-base text-[#00F0FF]">5.5+ Years</div>
                </div>
                <div className="px-4 py-2.5 rounded-xl bg-black/40 border border-white/5 min-w-[100px]">
                  <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Platforms</div>
                  <div className="font-heading font-bold text-base text-emerald-400">2 Core Suites</div>
                </div>
              </div>

              <a
                href={githubProfileData.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#00F0FF] text-black font-mono text-xs uppercase font-bold tracking-wider hover:bg-white transition-all duration-200 shadow-glow-accent"
              >
                <GitHubIcon className="w-4 h-4 fill-black" />
                <span>Visit GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>

          </div>
        </div>

        {/* Customized Repository Showcase */}
        <div className="space-y-6">
          
          {/* Controls Bar: Suite Switcher & Instant Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-2">
            {/* Suite Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {[
                { id: 'All', label: 'All Modules (5)' },
                { id: 'Smart School', label: 'Smart School ERP (3)' },
                { id: 'OrderMe', label: 'OrderMe Hotel Platform (2)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSuite(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 whitespace-nowrap ${
                    activeSuite === tab.id
                      ? 'bg-[#00F0FF] text-black font-bold shadow-glow-accent'
                      : 'bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 border border-white/5 dark:border-white/5 light:border-zinc-300 text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-zinc-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Instant Search Filter */}
            <div className="relative min-w-[260px]">
              <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filter repositories or tech..."
                aria-label="Filter repositories"
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-white border border-white/10 dark:border-white/10 light:border-zinc-300 text-xs font-mono text-zinc-200 focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all"
              />
            </div>
          </div>

          {/* Repositories Cards Grid */}
          <div className="grid grid-cols-1 gap-4">
            <AnimatePresence>
              {filteredRepos.map((repo, idx) => {
                return (
                    <motion.div
                    key={repo.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="p-6 sm:p-7 rounded-2xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-50 border border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200 hover:border-[#00F0FF]/40 transition-all duration-300 shadow-xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 group relative overflow-hidden"
                  >
                    {/* Subtle top edge glow on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF]/0 to-transparent group-hover:via-[#00F0FF]/60 transition-all duration-500" />

                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      
                      {/* Left side: Repository info & Architecture Tags */}
                      <div className="space-y-3 flex-1">
                        {/* Badges row */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/25 flex items-center gap-1 transition-transform duration-200 group-hover:scale-105">
                            <Layers className="w-2.5 h-2.5" />
                            {repo.suite}
                          </span>
                          <span className="text-zinc-500 text-xs">•</span>
                          <span className="font-mono text-xs text-zinc-400">
                            {repo.category}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono text-zinc-400 bg-white/5 border border-white/10">
                            <Lock className="w-2.5 h-2.5" />
                            Enterprise Private
                          </span>
                        </div>

                        {/* Title */}
                        <div className="flex items-center gap-3">
                          <a
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-heading font-extrabold text-xl text-white dark:text-white light:text-zinc-950 group-hover:text-[#00F0FF] transition-colors flex items-center gap-2"
                          >
                            <Code2 className="w-5 h-5 text-[#00F0FF] opacity-80" />
                            <span>{repo.name}</span>
                            <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                          </a>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-sans max-w-3xl">
                          {repo.description}
                        </p>

                        {/* Architectural Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {repo.architectureTags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] dark:bg-white/[0.03] light:bg-zinc-200 text-zinc-300 dark:text-zinc-300 light:text-zinc-800 border border-white/[0.06] dark:border-white/[0.06] light:border-zinc-300 transition-all duration-150 hover:-translate-y-0.5 hover:border-white/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right side: Key Metric & Technical Metadata */}
                      <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-4 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/5">
                        {/* Metric Badge */}
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1.5 rounded-xl font-mono text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5" />
                            {repo.metrics}
                          </span>
                        </div>

                        {/* Language & Date */}
                        <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                          <span className="flex items-center gap-1.5">
                            <span
                              className="w-2.5 h-2.5 rounded-full inline-block"
                              style={{ backgroundColor: repo.languageColor }}
                            />
                            <span className="text-zinc-200 dark:text-zinc-200 light:text-zinc-800 font-medium">
                              {repo.language}
                            </span>
                          </span>
                          <span>•</span>
                          <span className="text-zinc-500">{repo.updatedAt}</span>
                        </div>

                        {/* GitHub link button */}
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#00F0FF]/15 border border-white/10 hover:border-[#00F0FF]/30 text-xs font-mono text-zinc-300 hover:text-[#00F0FF] transition-all"
                        >
                          <span>github.com/praveeny5117</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

