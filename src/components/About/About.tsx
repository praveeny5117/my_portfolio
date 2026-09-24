import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Server, Database, Cloud, Zap, Shield, GitMerge, GraduationCap, MapPin, Phone, Mail } from 'lucide-react';
import { developerData } from '../../data/developer';

export const About: React.FC = () => {
  const domains = [
    { 
      title: "Real Estate Sourcing Platforms", 
      desc: "Architecting high-scale sourcing platforms with decoupled microservices, role-based workflows, and real-time property data pipelines.", 
      icon: Layers 
    },
    { 
      title: "Healthcare Data Management", 
      desc: "Secure clinical records management, encrypted data vaults, privacy compliance standards, and resilient audit logging.", 
      icon: Shield 
    },
    { 
      title: "Retail Analytics (AI-Driven)", 
      desc: "Connecting computer vision and real-time event analytics streams to responsive Angular dashboards with sub-second data propagation.", 
      icon: Zap 
    },
    { 
      title: "MongoDB & Indexing Optimization", 
      desc: "Achieved a proven 50% improvement in application response times through aggregation re-architecture and compound index redesign.", 
      icon: Database 
    },
    { 
      title: "MSSQL to MongoDB Migration", 
      desc: "Led complete data layer modernization from legacy .NET / MSSQL stacks to scalable MongoDB architectures with minimal downtime.", 
      icon: Server 
    },
    { 
      title: "AWS Cloud & CI/CD Delivery", 
      desc: "Deploying production workloads on AWS (EC2, S3, Amplify) with PM2 clustering, Nginx reverse proxy, and Git/Bitbucket automated pipelines.", 
      icon: Cloud 
    }
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Editorial Two-Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#00F0FF] uppercase">
              <span className="w-6 h-[1px] bg-[#00F0FF]" />
              <span>Lead Engineer Profile</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white dark:text-white light:text-zinc-950 leading-[1.15]">
              Engineering impact <br />
              <span className="text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-light italic">
                driven by measurable results.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-sans">
              Results-driven Lead Full Stack Engineer with 5.5+ years of experience designing, building, and leading delivery of scalable web applications across Real Estate, Retail Analytics, and Healthcare Data Management.
            </p>

            {/* Quick Contact & Location Badges */}
            <div className="p-4 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 border border-white/[0.08] dark:border-white/[0.08] light:border-zinc-300 space-y-2.5 font-mono text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00F0FF] shrink-0" />
                <span>{developerData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${developerData.phone}`} className="hover:text-[#00F0FF] transition-colors">{developerData.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${developerData.email}`} className="hover:text-[#00F0FF] transition-colors truncate">{developerData.email}</a>
              </div>
            </div>

            {/* Leadership highlight */}
            <div className="p-4 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-white border border-white/5 dark:border-white/5 light:border-zinc-200">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF] font-semibold mb-1">
                <GitMerge className="w-4 h-4" />
                <span>Technical Leadership & Mentorship</span>
              </div>
              <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">
                Experienced people leader who mentors engineers, enforces code quality through structured peer reviews, and translates business requirements into secure, production-grade technical solutions.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Deep Domain Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {domains.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-50 border border-white/[0.06] dark:border-white/[0.06] light:border-zinc-200 hover:border-[#00F0FF]/40 transition-all duration-300 group hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="p-2 rounded-lg bg-white/[0.04] dark:bg-white/[0.04] light:bg-zinc-200 border border-white/5 group-hover:border-[#00F0FF]/30 transition-colors">
                        <Icon className="w-4 h-4 text-[#00F0FF]" />
                      </div>
                      <h3 className="font-heading text-sm font-semibold text-white dark:text-white light:text-zinc-900 group-hover:text-[#00F0FF] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Education Credentials */}
            <div className="p-5 rounded-2xl bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-zinc-100 border border-white/[0.06] dark:border-white/[0.06] light:border-zinc-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF] uppercase tracking-wider font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Education</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {developerData.education.map((edu, eIdx) => (
                  <div key={eIdx} className="p-3.5 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-white border border-white/5 dark:border-white/5 light:border-zinc-200">
                    <div className="font-heading font-semibold text-xs sm:text-sm text-white dark:text-white light:text-zinc-900">
                      {edu.degree}
                    </div>
                    <div className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-0.5 flex items-center justify-between">
                      <span>{edu.institution} ({edu.score})</span>
                      <span className="font-mono text-[11px] text-zinc-500">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Key Measurable Statistics Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-12 border-t border-white/[0.08] dark:border-white/[0.08] light:border-zinc-200"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {developerData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-zinc-900/50 dark:bg-zinc-900/50 light:bg-zinc-50 border border-white/[0.06] dark:border-white/[0.06] light:border-zinc-200 overflow-hidden group hover:border-[#00F0FF]/30 transition-all"
              >
                <div className="text-3xl sm:text-5xl font-extrabold font-heading text-white dark:text-white light:text-zinc-900 tracking-tight mb-2 group-hover:text-[#00F0FF] transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-sans">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
