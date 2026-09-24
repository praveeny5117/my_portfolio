import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { architectureSteps } from '../../data/architecture';
import { 
  CheckCircle2, Terminal, Layers, Server, Database, Cloud, 
  GitBranch, ShieldCheck, ArrowRight, Activity, Cpu, Lock
} from 'lucide-react';

export const Architecture: React.FC = () => {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const activeStep = architectureSteps[activeStepIdx];

  const engineeringDomains = [
    {
      category: "Frontend",
      technologies: ["Angular 18+", "React.js", "TypeScript", "JavaScript", "PrimeNG", "Tailwind CSS"],
      icon: Layers,
      color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
      summary: "Reactive SPAs, component-driven design systems, signals, and responsive client state."
    },
    {
      category: "Backend",
      technologies: ["Node.js 22+", "Express.js", "REST APIs", "Microservices", "Event Architecture"],
      icon: Server,
      color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
      summary: "High-throughput controllers, middleware validation, and asynchronous background queues."
    },
    {
      category: "Database",
      technologies: ["MongoDB", "SQL / MSSQL", "Aggregation Pipelines", "Compound Indexing", "Data Migration"],
      icon: Database,
      color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
      summary: "Relational-style embedded modeling, indexing strategy, and 50% query latency optimization."
    },
    {
      category: "Cloud",
      technologies: ["AWS", "EC2 Compute", "S3 Storage", "Amplify", "CloudWatch"],
      icon: Cloud,
      color: "text-purple-400 border-purple-500/20 bg-purple-500/5",
      summary: "Scalable Linux instances, secure presigned file vaults, and high-availability hosting."
    },
    {
      category: "DevOps",
      technologies: ["Git", "CI/CD Pipelines", "PM2 Process Manager", "Nginx", "SSL / Let's Encrypt"],
      icon: GitBranch,
      color: "text-amber-400 border-amber-500/20 bg-amber-500/5",
      summary: "Zero-downtime rolling reloads, multi-core CPU utilization, and reverse proxy routing."
    },
    {
      category: "Core Engineering",
      technologies: ["JWT Authentication", "RBAC Security", "API Architecture", "Caching", "Database Indexing", "Performance Optimization", "Multi-Tenancy"],
      icon: ShieldCheck,
      color: "text-rose-400 border-rose-500/20 bg-rose-500/5",
      summary: "Tenant-isolated partition boundaries, idempotent payment logic, and defensive security."
    }
  ];

  return (
    <section id="architecture" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00F0FF] uppercase">
              <span className="w-6 h-[1px] bg-[#00F0FF]" />
              <span>Engineering & Systems Design</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white dark:text-white light:text-zinc-950 uppercase">
              HOW I BUILD.
            </h2>
          </div>

          <p className="text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700 max-w-md font-sans leading-relaxed">
            I don't just write code. I design, build, optimize and deploy production-ready systems with robust architecture, defensive validation, and high availability.
          </p>
        </div>

        {/* 1. Engineering Competencies & Stack Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="uppercase tracking-wider">ENGINEERING DOMAIN MATRIX:</span>
            <span className="text-[#00F0FF]">PRODUCTION STACK SPECIFICATION</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {engineeringDomains.map((domain, dIdx) => {
              const Icon = domain.icon;
              return (
                <div
                  key={dIdx}
                  className="p-6 rounded-2xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-50 border border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200 hover:border-[#00F0FF]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl border ${domain.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-heading font-bold text-base text-white dark:text-white light:text-zinc-950 group-hover:text-[#00F0FF] transition-colors">
                          {domain.category}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-sans leading-relaxed">
                      {domain.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {domain.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-200 text-zinc-300 dark:text-zinc-300 light:text-zinc-800 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Interactive SVG & HTML End-to-End System Architecture Diagram */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950/70 dark:bg-zinc-950/70 light:bg-zinc-50 border border-white/10 dark:border-white/10 light:border-zinc-300 shadow-2xl space-y-8 relative overflow-hidden backdrop-blur-xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-mono text-xs text-[#00F0FF]">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>SYSTEM TOPOLOGY BLUEPRINT</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white dark:text-white light:text-zinc-950">
                End-to-End Cloud Application Pipeline
              </h3>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>99.98% High Availability Target</span>
            </div>
          </div>

          {/* Architecture Cascade Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch relative">
            
            {/* Step 1: Frontend */}
            <div className="p-4 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-white border border-white/10 dark:border-white/10 light:border-zinc-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 mb-2">
                  <span>TIER 01</span>
                  <span>CLIENT</span>
                </div>
                <div className="font-heading font-bold text-sm text-white dark:text-white light:text-zinc-900 mb-1">
                  Angular / React
                </div>
                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-sans">
                  TypeScript SPAs with reactive state, PrimeNG UI, role-based views & dynamic routing.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-zinc-500">
                HTTP/2 • WebSockets • JWT
              </div>
            </div>

            {/* Step 2: Gateway */}
            <div className="p-4 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-white border border-cyan-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 mb-2">
                  <span>TIER 02</span>
                  <span>GATEWAY</span>
                </div>
                <div className="font-heading font-bold text-sm text-white dark:text-white light:text-zinc-900 mb-1">
                  Nginx Reverse Proxy
                </div>
                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-sans">
                  TLS 1.3 SSL termination, rate limiting, Gzip/Brotli compression & CORS policy.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-zinc-500">
                Port 443 ⟶ Port 5000 IPC
              </div>
            </div>

            {/* Step 3: Compute */}
            <div className="p-4 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-white border border-blue-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-blue-400 mb-2">
                  <span>TIER 03</span>
                  <span>SERVICES</span>
                </div>
                <div className="font-heading font-bold text-sm text-white dark:text-white light:text-zinc-900 mb-1">
                  Node.js & Express
                </div>
                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-sans">
                  PM2 multi-core cluster, stateless JWT auth, RBAC permissions & business logic.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-zinc-500">
                Multi-Tenant Scoping
              </div>
            </div>

            {/* Step 4: Database */}
            <div className="p-4 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-white border border-emerald-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400 mb-2">
                  <span>TIER 04</span>
                  <span>DATABASE</span>
                </div>
                <div className="font-heading font-bold text-sm text-white dark:text-white light:text-zinc-900 mb-1">
                  MongoDB & SQL
                </div>
                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-sans">
                  Targeted compound indexes, $facet aggregations, and query optimization (-50% latency).
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-zinc-500">
                Replica Sets • Index Tuning
              </div>
            </div>

            {/* Step 5: Cloud */}
            <div className="p-4 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-white border border-purple-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-purple-400 mb-2">
                  <span>TIER 05</span>
                  <span>CLOUD INFRA</span>
                </div>
                <div className="font-heading font-bold text-sm text-white dark:text-white light:text-zinc-900 mb-1">
                  AWS (EC2 & S3)
                </div>
                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-sans">
                  Hardened EC2 compute instances, encrypted S3 vaults, and presigned document delivery.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono text-zinc-500">
                Zero-Downtime Deployments
              </div>
            </div>

          </div>

          {/* SVG Data Flow Flowchart representation */}
          <div className="hidden lg:flex items-center justify-between text-xs font-mono text-zinc-400 px-4 py-2 rounded-xl bg-black/40 border border-white/5">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Client Requests
            </span>
            <ArrowRight className="w-4 h-4 text-zinc-600" />
            <span className="flex items-center gap-1.5 text-cyan-300">
              <Lock className="w-3.5 h-3.5" />
              Nginx TLS 1.3
            </span>
            <ArrowRight className="w-4 h-4 text-zinc-600" />
            <span className="flex items-center gap-1.5 text-blue-300">
              <Cpu className="w-3.5 h-3.5" />
              PM2 Cluster
            </span>
            <ArrowRight className="w-4 h-4 text-zinc-600" />
            <span className="flex items-center gap-1.5 text-emerald-300">
              <Database className="w-3.5 h-3.5" />
              Indexed MongoDB
            </span>
            <ArrowRight className="w-4 h-4 text-zinc-600" />
            <span className="flex items-center gap-1.5 text-purple-300">
              <Cloud className="w-3.5 h-3.5" />
              AWS S3 Vault
            </span>
          </div>
        </div>

        {/* 3. 6-Phase Engineering Lifecycle Stepper */}
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="uppercase tracking-wider">SOFTWARE ENGINEERING LIFECYCLE:</span>
            <span>CLICK TO INSPECT PHASES</span>
          </div>

          {/* Stepper buttons */}
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
                  ✓ Validated against rigorous production uptime & zero-regression CI/CD gates.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
