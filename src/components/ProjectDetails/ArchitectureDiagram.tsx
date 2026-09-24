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

        {/* Connecting Data Highway Visual */}
        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-center gap-2 text-xs font-mono text-zinc-400">
          <span className="px-2 py-0.5 rounded bg-white/5 text-zinc-300">Client Tier</span>
          <span>⟶</span>
          <span className="px-2 py-0.5 rounded bg-white/5 text-cyan-300">Gateway (SSL/Nginx)</span>
          <span>⟶</span>
          <span className="px-2 py-0.5 rounded bg-white/5 text-blue-300">Node/PM2 Cluster</span>
          <span>⟶</span>
          <span className="px-2 py-0.5 rounded bg-white/5 text-emerald-300">MongoDB & AWS S3</span>
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
