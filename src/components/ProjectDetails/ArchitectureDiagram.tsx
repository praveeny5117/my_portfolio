import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { ArchitectureNode } from '../../data/projects';
import { Monitor, Shield, Server, Database, HardDrive, CreditCard, Activity } from 'lucide-react';

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
  flowSteps: string[];
  accentColor?: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  nodes,
  flowSteps,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getNodeIcon = (type: ArchitectureNode['type']) => {
    const props = { className: "w-4 h-4 text-[#00F0FF]" };
    switch (type) {
      case 'client': return <Monitor {...props} />;
      case 'gateway': return <Shield {...props} />;
      case 'service': return <Server {...props} />;
      case 'database': return <Database {...props} />;
      case 'storage': return <HardDrive {...props} />;
      case 'thirdparty': return <CreditCard {...props} />;
      default: return <Server {...props} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Visual Flow Topology Box */}
      <div className="p-6 rounded-2xl bg-[#09090D] border border-white/10 relative overflow-hidden">
        {/* Animated background data particles */}
        <div className="absolute top-0 right-0 p-4 flex items-center gap-2 text-xs font-mono text-zinc-500">
          <Activity className="w-3.5 h-3.5 text-[#00F0FF] animate-pulse" />
          <span>LIVE ARCHITECTURE BUS</span>
        </div>

        {/* Diagram Tier Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 pb-2">
          {nodes.map((node, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#00F0FF]/40 transition-all group"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
                  {getNodeIcon(node.type)}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-400">
                    {node.type}
                  </span>
                  <h4 className="font-heading font-semibold text-sm text-white group-hover:text-[#00F0FF] transition-colors">
                    {node.name}
                  </h4>
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                {node.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Connecting Data Highway Visual with requested Tiered Cascade */}
        <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
          <div className="text-[11px] font-mono uppercase text-zinc-500 tracking-wider text-center">
            END-TO-END EXECUTION CASCADE
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white font-semibold flex items-center gap-1.5">
              <span>Frontend</span>
              <span className="text-[10px] text-zinc-400">(Angular / React)</span>
            </span>
            <span className="text-[#00F0FF] font-bold">↓</span>
            <span className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-semibold flex items-center gap-1.5">
              <span>API Layer</span>
              <span className="text-[10px] text-zinc-400">(Nginx / SSL Gateway)</span>
            </span>
            <span className="text-[#00F0FF] font-bold">↓</span>
            <span className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold flex items-center gap-1.5">
              <span>Node.js / Express</span>
              <span className="text-[10px] text-zinc-400">(PM2 Cluster)</span>
            </span>
            <span className="text-[#00F0FF] font-bold">↓</span>
            <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-semibold flex items-center gap-1.5">
              <span>MongoDB</span>
              <span className="text-[10px] text-zinc-400">(Indexed Cluster)</span>
            </span>
            <span className="text-[#00F0FF] font-bold">↓</span>
            <span className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 font-semibold flex items-center gap-1.5">
              <span>AWS</span>
              <span className="text-[10px] text-zinc-400">(EC2, S3, Amplify)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Step-by-Step Execution Sequence */}
      <div className="space-y-3">
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
          Execution Lifecycle & Data Flow Sequence:
        </div>

        <div className="space-y-2">
          {flowSteps.map((step, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 text-xs sm:text-sm ${
                activeStep === idx
                  ? 'bg-zinc-900 border-[#00F0FF] text-white shadow-glow-accent-sm'
                  : 'bg-zinc-900/40 border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:border-white/20'
              }`}
            >
              <span className="font-mono text-xs font-bold text-[#00F0FF] px-2 py-0.5 rounded bg-white/5 shrink-0">
                0{idx + 1}
              </span>
              <span className="leading-relaxed font-sans">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
