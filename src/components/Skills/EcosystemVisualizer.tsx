import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ecosystemNodes, ecosystemEdges } from '../../data/skills';
import { Layers, Atom, Server, Database, Cloud, Code2, Cpu } from 'lucide-react';

interface EcosystemVisualizerProps {
  onSelectSkill?: (skillName: string) => void;
  activeSkillName?: string | null;
}

export const EcosystemVisualizer: React.FC<EcosystemVisualizerProps> = ({
  onSelectSkill,
  activeSkillName,
}) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case 'react': return <Atom className="w-5 h-5 text-cyan-400" />;
      case 'angular': return <Layers className="w-5 h-5 text-red-400" />;
      case 'typescript': return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'node': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'mongodb': return <Database className="w-5 h-5 text-green-400" />;
      case 'aws': return <Cloud className="w-5 h-5 text-amber-400" />;
      default: return <Cpu className="w-4 h-4 text-zinc-400" />;
    }
  };

  // Check if edge is connected to hovered node
  const isEdgeActive = (from: string, to: string) => {
    if (!hoveredNode && !activeSkillName) return true;
    const target = hoveredNode || activeSkillName?.toLowerCase();
    return from === target || to === target;
  };

  return (
    <div className="relative w-full h-[440px] sm:h-[480px] rounded-2xl bg-zinc-950/70 dark:bg-zinc-950/70 light:bg-zinc-100/90 border border-white/10 dark:border-white/10 light:border-zinc-300 p-6 overflow-hidden flex flex-col justify-between">
      {/* Visualizer header & legend */}
      <div className="flex items-center justify-between z-10 select-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
          <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
            MEAN Stack Core Ecosystem Topography
          </span>
        </div>
        <div className="text-[11px] font-mono text-zinc-400">
          Hover node to inspect data bus
        </div>
      </div>

      {/* SVG Connecting Edges */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="edgeGradientActive" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="edgeGradientIdle" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </linearGradient>
        </defs>

        {ecosystemEdges.map((edge, idx) => {
          const fromNode = ecosystemNodes.find(n => n.id === edge.from);
          const toNode = ecosystemNodes.find(n => n.id === edge.to);
          if (!fromNode || !toNode) return null;

          const active = isEdgeActive(edge.from, edge.to);

          return (
            <g key={idx}>
              <line
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                stroke={active ? 'url(#edgeGradientActive)' : 'url(#edgeGradientIdle)'}
                strokeWidth={active ? '2' : '1'}
                strokeDasharray={active ? 'none' : '4 4'}
                className="transition-all duration-300"
              />
              {active && (
                <circle r="3" fill="#00F0FF" opacity="0.9">
                  <animateMotion
                    path={`M ${fromNode.x * 4} ${fromNode.y * 3} L ${toNode.x * 4} ${toNode.y * 3}`}
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* Interactive Ecosystem Nodes */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {ecosystemNodes.map((node) => {
          const isHovered = hoveredNode === node.id;
          const isSelected = activeSkillName?.toLowerCase() === node.id || activeSkillName?.toLowerCase() === node.label.toLowerCase();

          return (
            <div
              key={node.id}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              className="absolute pointer-events-auto"
            >
              <div
                onMouseEnter={() => {
                  setHoveredNode(node.id);
                  if (onSelectSkill) onSelectSkill(node.label);
                }}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => onSelectSkill && onSelectSkill(node.label)}
                className={`group relative flex items-center gap-2.5 px-3 py-2 rounded-xl cursor-pointer transition-all duration-300 ${
                  isHovered || isSelected
                    ? 'bg-zinc-900 border-[#00F0FF] shadow-glow-accent scale-110 z-20'
                    : 'bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-white border-white/10 dark:border-white/10 light:border-zinc-300 shadow-md hover:border-white/30'
                } border`}
              >
                {/* Node Icon */}
                <div className="shrink-0">{getIcon(node.id)}</div>

                {/* Node Label & Role */}
                <div className="text-left">
                  <div className="font-heading font-bold text-xs text-white dark:text-white light:text-zinc-900 group-hover:text-[#00F0FF] transition-colors leading-tight">
                    {node.label}
                  </div>
                  <div className="font-mono text-[10px] text-zinc-400 leading-tight">
                    {node.category}
                  </div>
                </div>

                {/* Floating tooltip with role description */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded bg-black/90 border border-white/20 text-[#00F0FF] font-mono text-[11px] shadow-lg pointer-events-none z-30"
                  >
                    {node.role}
                  </motion.div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom status bar */}
      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 z-10 select-none pt-4 border-t border-white/[0.06]">
        <span>Protocols: HTTP/2 • WebSockets • JSON-RPC</span>
        <span>Topology: Angular ── TypeScript ── Node ── MongoDB ── AWS</span>
      </div>
    </div>
  );
};
