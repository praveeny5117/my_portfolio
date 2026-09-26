import React from 'react';
import {
  Building2, ArrowRight, Stethoscope, UtensilsCrossed, ShieldCheck,
  GraduationCap, CreditCard, Activity, Users, FileText, Check,
  Camera, Eye, Layers, ShieldAlert, Cpu, Sparkles,
  Calendar, Bell, Star, Send
} from 'lucide-react';
import { projectsData } from '../../data/projects';
import type { Project } from '../../data/projects';
import { ProjectScreenshotShowcase } from './ProjectScreenshotShowcase';

interface ProjectVisualMockupProps {
  projectId: string;
  project?: Project;
  onOpenGallery?: () => void;
}

export const ProjectVisualMockup: React.FC<ProjectVisualMockupProps> = ({
  projectId,
  project,
  onOpenGallery
}) => {
  // ==========================================
  // OFFICIAL PROJECT 01: Adamsbridge Real Estate
  // ==========================================
  if (projectId === 'adamsbridge-real-estate') {
    return (
      <div className="w-full h-full min-h-[360px] rounded-2xl bg-[#09090D] border border-white/10 p-5 flex flex-col justify-between font-mono text-xs select-none overflow-hidden relative group">
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#00F0FF]/10 rounded-full blur-3xl" />

        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#00F0FF]" />
            <span className="font-bold text-white text-xs">Adamsbridge • Real Estate Sourcing & Valuation</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>.NET ➔ MongoDB Migrated (Zero Downtime)</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 my-3">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px] flex items-center gap-1">
              <Activity className="w-3 h-3 text-[#00F0FF]" />
              <span>QUERY SPEED</span>
            </div>
            <div className="text-lg font-bold text-[#00F0FF] font-heading mt-0.5">50% Boost</div>
            <div className="text-[10px] text-zinc-400">P99 Query &lt;190ms</div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px] flex items-center gap-1">
              <Layers className="w-3 h-3 text-cyan-400" />
              <span>MICROSERVICES</span>
            </div>
            <div className="text-lg font-bold text-white font-heading mt-0.5">Decoupled</div>
            <div className="text-[10px] text-emerald-400">Independent Deploy</div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px] flex items-center gap-1">
              <Cpu className="w-3 h-3 text-purple-400" />
              <span>UPTIME</span>
            </div>
            <div className="text-lg font-bold text-purple-400 font-heading mt-0.5">99.98%</div>
            <div className="text-[10px] text-zinc-400">AWS EC2 + PM2</div>
          </div>
        </div>

        {/* Workflow State Machine Pipeline */}
        <div className="space-y-2 bg-black/40 p-3 rounded-xl border border-white/5">
          <div className="text-[10px] text-zinc-500 flex items-center justify-between">
            <span>REAL ESTATE SOURCING PIPELINE</span>
            <span className="text-[#00F0FF]">ROLE: LEAD ENGINEER</span>
          </div>

          <div className="flex items-center justify-between gap-1 p-2 rounded-lg bg-white/[0.02] border border-white/5 text-[10px]">
            <div className="text-center px-2 py-1 rounded bg-[#00F0FF]/10 text-cyan-300">
              <div>Intake</div>
              <span className="text-[9px] text-zinc-400">MLS / Parcel Feeds</span>
            </div>
            <ArrowRight className="w-3 h-3 text-zinc-600" />
            <div className="text-center px-2 py-1 rounded bg-blue-500/10 text-blue-300">
              <div>Valuation</div>
              <span className="text-[9px] text-zinc-400">Underwriting Rules</span>
            </div>
            <ArrowRight className="w-3 h-3 text-zinc-600" />
            <div className="text-center px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">
              <div>Indexed Agg</div>
              <span className="text-[9px] text-zinc-400">MongoDB Pipeline</span>
            </div>
            <ArrowRight className="w-3 h-3 text-zinc-600" />
            <div className="text-center px-2 py-1 rounded bg-purple-500/10 text-purple-300">
              <div>S3 Dossier</div>
              <span className="text-[9px] text-zinc-400">Presigned Deeds</span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
          <span>ANGULAR 18+ • NODE.JS 22+ • MONGODB AGGREGATION</span>
          <span className="text-[#00F0FF]">OFFICIAL • ADAMSBRIDGE</span>
        </div>
      </div>
    );
  }

  // ==========================================
  // OFFICIAL PROJECT 02: Adamsbridge Healthcare
  // ==========================================
  if (projectId === 'adamsbridge-healthcare') {
    return (
      <div className="w-full h-full min-h-[360px] rounded-2xl bg-[#09090D] border border-white/10 p-5 flex flex-col justify-between font-mono text-xs select-none overflow-hidden relative group">
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl" />

        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-white text-xs">Adamsbridge • Healthcare Data & Compliance Platform</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>HIPAA Compliant • Granular RBAC</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 my-3">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px] flex items-center gap-1">
              <ShieldAlert className="w-3 h-3 text-emerald-400" />
              <span>COMPLIANCE</span>
            </div>
            <div className="text-lg font-bold text-emerald-400 font-heading mt-0.5">100%</div>
            <div className="text-[10px] text-zinc-400">Zero PHI Leaks</div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px] flex items-center gap-1">
              <Activity className="w-3 h-3 text-cyan-400" />
              <span>RETRIEVAL P99</span>
            </div>
            <div className="text-lg font-bold text-cyan-400 font-heading mt-0.5">&lt;120ms</div>
            <div className="text-[10px] text-zinc-400">Encrypted Projection</div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px] flex items-center gap-1">
              <Layers className="w-3 h-3 text-purple-400" />
              <span>EXCHANGE</span>
            </div>
            <div className="text-lg font-bold text-white font-heading mt-0.5">REST APIs</div>
            <div className="text-[10px] text-zinc-400">Cross-System Sync</div>
          </div>
        </div>

        {/* Security & Access Projection Log */}
        <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-2">
          <div className="flex items-center justify-between text-[10px] text-zinc-500">
            <span>FIELD PROJECTION & AUDIT WRAPPER STATUS</span>
            <span className="text-emerald-400">STATUS: ENFORCED</span>
          </div>
          <div className="space-y-1.5 text-[11px]">
            <div className="flex items-center justify-between p-1.5 rounded bg-white/[0.02] border border-white/5 text-zinc-300">
              <span className="text-emerald-400 font-semibold">[ACCESS_LOG] Provider Registry Query #PR-9201</span>
              <span className="text-zinc-400">RBAC Verified</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-white/[0.02] border border-white/5 text-zinc-400">
              <span>Patient Medical Dossier (PHI Projection Filter Active)</span>
              <span className="text-purple-300">AWS S3 Signed URL</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
          <span>ANGULAR 18+ • NODE.JS 22+ • RESTFUL APIS • AWS S3</span>
          <span className="text-emerald-400">OFFICIAL • ADAMSBRIDGE</span>
        </div>
      </div>
    );
  }

  // ==========================================
  // OFFICIAL PROJECT 03: Tango Eye Retail Analytics
  // ==========================================
  if (projectId === 'tango-eye-retail') {
    return (
      <div className="w-full h-full min-h-[360px] rounded-2xl bg-[#09090D] border border-white/10 p-5 flex flex-col justify-between font-mono text-xs select-none overflow-hidden relative group">
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-amber-500/10 rounded-full blur-3xl" />

        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-amber-400" />
            <span className="font-bold text-white text-xs">Tango Eye • AI Real-Time Retail Analytics</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Live Camera Telemetry Ingestion</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 my-3">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px] flex items-center gap-1">
              <Eye className="w-3 h-3 text-amber-400" />
              <span>LIVE FOOTFALL</span>
            </div>
            <div className="text-lg font-bold text-amber-400 font-heading mt-0.5">8.4K/sec</div>
            <div className="text-[10px] text-zinc-400">Ingestion In-Memory</div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px] flex items-center gap-1">
              <Activity className="w-3 h-3 text-cyan-400" />
              <span>BROADCAST DELAY</span>
            </div>
            <div className="text-lg font-bold text-cyan-400 font-heading mt-0.5">&lt;150ms</div>
            <div className="text-[10px] text-zinc-400">WebSockets / Streams</div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px] flex items-center gap-1">
              <Users className="w-3 h-3 text-emerald-400" />
              <span>QUEUE TIME</span>
            </div>
            <div className="text-lg font-bold text-emerald-400 font-heading mt-0.5">-35% Wait</div>
            <div className="text-[10px] text-zinc-400">Automated SLA Alert</div>
          </div>
        </div>

        {/* Live Camera Zone Grid */}
        <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-2">
          <div className="flex items-center justify-between text-[10px] text-zinc-500">
            <span>EDGE COMPUTER VISION CHANNELS</span>
            <span className="text-amber-400 font-semibold">140+ STORES DEPLOYED</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
            <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
              <div className="text-zinc-400">CAM-01 Entrance</div>
              <div className="text-amber-400 font-bold mt-0.5">142 Inflow/hr</div>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
              <div className="text-zinc-400">CAM-02 Aisle 4</div>
              <div className="text-cyan-400 font-bold mt-0.5">4.2m Dwell Time</div>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
              <div className="text-zinc-400">CAM-03 Checkout</div>
              <div className="text-emerald-400 font-bold mt-0.5">Queue SLA: OK</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
          <span>ANGULAR • NODE.JS • RESTFUL APIS • MONGODB • GIT</span>
          <span className="text-amber-400">OFFICIAL • TANGO EYE</span>
        </div>
      </div>
    );
  }

  // ==========================================
  // OFFICIAL PROJECT 04: Analytic Brains Customer 360
  // ==========================================
  if (projectId === 'analytic-brains-customer360') {
    return (
      <div className="w-full h-full min-h-[360px] rounded-2xl bg-[#09090D] border border-white/10 p-5 flex flex-col justify-between font-mono text-xs select-none overflow-hidden relative group">
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-purple-500/10 rounded-full blur-3xl" />

        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="font-bold text-white text-xs">Analytic Brains • Customer 360 & Valurite Suite</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>3 Enterprise Platforms Shipped</span>
          </div>
        </div>

        {/* Tri-Platform Highlights */}
        <div className="grid grid-cols-3 gap-2.5 my-3">
          <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center">
            <div className="text-[10px] text-purple-300 font-bold">CUSTOMER 360</div>
            <div className="text-xs text-white font-semibold mt-1">Unified Profile</div>
            <div className="text-[9px] text-zinc-400 mt-0.5">Omnichannel History</div>
          </div>

          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-center">
            <div className="text-[10px] text-cyan-300 font-bold">VALURITE</div>
            <div className="text-xs text-white font-semibold mt-1">Asset Valuation</div>
            <div className="text-[9px] text-zinc-400 mt-0.5">Financial Modeling</div>
          </div>

          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
            <div className="text-[10px] text-emerald-300 font-bold">DEGRADER</div>
            <div className="text-xs text-white font-semibold mt-1">Data Quality</div>
            <div className="text-[9px] text-zinc-400 mt-0.5">Anomaly Scoring</div>
          </div>
        </div>

        {/* SDLC Exposure & Code Quality */}
        <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
          <div className="flex items-center justify-between text-[10px] text-zinc-500">
            <span>CORE DELIVERABLES & SDLC FOUNDATION</span>
            <span className="text-purple-400">CHENNAI, INDIA</span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-zinc-300">
            <span>● RESTful API endpoints & SQL/MongoDB normalization</span>
            <span className="text-emerald-400">100% Tested</span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-zinc-400">
            <span>● Clean, maintainable code following corporate standards</span>
            <span className="text-cyan-400">Peer Reviewed</span>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
          <span>JAVASCRIPT • TYPESCRIPT • NODE.JS • SQL / MONGODB</span>
          <span className="text-purple-400">OFFICIAL • ANALYTIC BRAINS</span>
        </div>
      </div>
    );
  }

  // ==========================================
  // CLIENT / OUTSOURCING: Bewittch Fashion Platform
  // ==========================================
  if (projectId === 'bewittch-fashion-platform') {
    return (
      <div className="w-full h-full min-h-[360px] rounded-2xl bg-[#09090D] border border-white/10 p-5 flex flex-col justify-between font-mono text-xs select-none overflow-hidden relative group">
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-pink-500/10 rounded-full blur-3xl" />

        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="font-bold text-white text-xs">Bewittch • Fashion Talent & Event Ecosystem</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-pink-400 bg-pink-500/10 px-2.5 py-0.5 rounded-full border border-pink-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            <span>React.js + Socket.io Live Sync (&lt;25ms)</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 my-3">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px] flex items-center gap-1">
              <Layers className="w-3 h-3 text-pink-400" />
              <span>4 REPOSITORIES</span>
            </div>
            <div className="text-lg font-bold text-pink-400 font-heading mt-0.5">React + Node</div>
            <div className="text-[10px] text-zinc-400">BE • FE • Admin • Web</div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px] flex items-center gap-1">
              <Bell className="w-3 h-3 text-cyan-400" />
              <span>EVENING REMINDER</span>
            </div>
            <div className="text-lg font-bold text-cyan-400 font-heading mt-0.5">18:00 Cron</div>
            <div className="text-[10px] text-emerald-400">SMS + Email Dispatched</div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px] flex items-center gap-1">
              <Star className="w-3 h-3 text-amber-400" />
              <span>FEEDBACK SCORE</span>
            </div>
            <div className="text-lg font-bold text-amber-400 font-heading mt-0.5">4.9 / 5.0</div>
            <div className="text-[10px] text-zinc-400">Verified Reviews</div>
          </div>
        </div>

        {/* Live Booking & Reminder Queue */}
        <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-2">
          <div className="flex items-center justify-between text-[10px] text-zinc-500">
            <span>SOCKET.IO REAL-TIME EVENT STREAM #BW-9410</span>
            <span className="text-pink-400">SLOT LOCKED VIA SOCKET.IO</span>
          </div>
          
          <div className="space-y-1.5 text-[11px]">
            <div className="flex items-center justify-between p-1.5 rounded bg-white/[0.02] border border-white/5 text-zinc-300">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-pink-400" />
                <span>Shoot: Studio Vogue • Designer: Maison Chloe • Model: Zara K.</span>
              </span>
              <span className="text-emerald-400 font-semibold">Socket Broadcast: OK</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-white/[0.02] border border-white/5 text-zinc-400 text-[10px]">
              <span className="flex items-center gap-1.5">
                <Send className="w-3 h-3 text-cyan-400" />
                <span>[18:00 CRON] Call-Time SMS & Email Sent with Wardrobe Checklist</span>
              </span>
              <span className="text-cyan-400">Delivered</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
          <span>REACT.JS • NODE.JS • SOCKET.IO • MONGODB • TWILIO SMS</span>
          <span className="text-pink-400">CLIENT OUTSOURCING • BEWITTCH</span>
        </div>
      </div>
    );
  }

  // ==========================================
  // PERSONAL PROJECT 01: Smart School ERP (Multi-Tenant SaaS)
  // ==========================================
  if (projectId === 'smart-school-erp') {
    const proj = project || projectsData.find((p) => p.id === 'smart-school-erp');
    const blueprintMockup = (
      <div className="w-full h-full min-h-[360px] rounded-2xl bg-[#09090D] border border-white/10 p-5 flex flex-col justify-between font-mono text-xs select-none overflow-hidden relative group">
        {/* Glow accent */}
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#00F0FF]/10 rounded-full blur-3xl" />

        {/* Dashboard Top bar with Tenant Switcher */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#00F0FF]" />
            <span className="font-bold text-white text-xs">Smart School ERP • Multi-Tenant SaaS</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-cyan-400 bg-[#00F0FF]/10 px-2.5 py-0.5 rounded-full border border-[#00F0FF]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
            <span>Tenant: Greenfield Academy (ID: #TEN-084)</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 my-3">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px] flex items-center gap-1">
              <Users className="w-3 h-3 text-[#00F0FF]" />
              <span>STUDENTS ACTIVE</span>
            </div>
            <div className="text-lg font-bold text-white font-heading mt-0.5">14,850</div>
            <div className="text-[10px] text-emerald-400">Isolated DB Partition</div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px] flex items-center gap-1">
              <CreditCard className="w-3 h-3 text-emerald-400" />
              <span>FEE RECONCILIATION</span>
            </div>
            <div className="text-lg font-bold text-emerald-400 font-heading mt-0.5">₹42.8L</div>
            <div className="text-[10px] text-zinc-400">Razorpay Webhook: 100%</div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px] flex items-center gap-1">
              <Activity className="w-3 h-3 text-cyan-400" />
              <span>REPORT SPEED</span>
            </div>
            <div className="text-lg font-bold text-cyan-400 font-heading mt-0.5">1.8s</div>
            <div className="text-[10px] text-zinc-400">Optimized $facet Pipeline</div>
          </div>
        </div>

        {/* Live Multi-Module Pipeline */}
        <div className="space-y-2 bg-black/40 p-3 rounded-xl border border-white/5">
          <div className="text-[10px] text-zinc-500 flex items-center justify-between">
            <span>OPERATIONAL MODULES STATUS</span>
            <span className="text-[#00F0FF]">ROLE: SUPER_ADMIN</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>Online Fee Collections</span>
              </span>
              <span className="text-emerald-400 font-semibold">Auto-Reconciled</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>Parent WhatsApp Alerts</span>
              </span>
              <span className="text-cyan-400 font-semibold">Delivered</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>Transport & Hostel Roster</span>
              </span>
              <span className="text-zinc-400 font-semibold">Synced</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <FileText className="w-3 h-3 text-[#00F0FF]" />
                <span>AWS S3 Document Vault</span>
              </span>
              <span className="text-purple-300 font-semibold">Signed URLs</span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
          <span>ANGULAR 18 • NODE.JS • EXPRESS • MONGODB</span>
          <span className="text-[#00F0FF]">PERSONAL SAAS • AWS EC2 + S3</span>
        </div>
      </div>
    );

    if (proj && proj.screenshots && proj.screenshots.length > 0) {
      return (
        <ProjectScreenshotShowcase
          project={proj}
          onOpenGallery={onOpenGallery}
          renderBlueprintMockup={() => blueprintMockup}
        />
      );
    }

    return blueprintMockup;
  }

  // ==========================================
  // PERSONAL PROJECT 02: Hospital Management System
  // ==========================================
  if (projectId === 'hospital-management-system') {
    const proj = project || projectsData.find((p) => p.id === 'hospital-management-system');
    const blueprintMockup = (
      <div className="w-full h-full min-h-[360px] rounded-2xl bg-[#09090D] border border-white/10 p-5 flex flex-col justify-between font-mono text-xs select-none overflow-hidden relative group">
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl" />

        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-white text-xs">Hospital Clinical Care • Outpatient & Inpatient</span>
          </div>
          <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
            HIPAA & RBAC Projections
          </span>
        </div>

        {/* Clinical Flow Pipeline */}
        <div className="my-3 space-y-2">
          <div className="text-[10px] text-zinc-500 uppercase flex items-center justify-between">
            <span>Clinical Encounter Lifecycle</span>
            <span className="text-emerald-400">Token #TK-204 (Active)</span>
          </div>
          <div className="flex items-center justify-between gap-1 p-2 rounded-xl bg-white/[0.03] border border-white/5 text-[10px]">
            <div className="text-center px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">
              <div>Reception</div>
              <span className="text-[9px] text-zinc-400">Token Issued</span>
            </div>
            <ArrowRight className="w-3 h-3 text-zinc-600" />
            <div className="text-center px-2 py-1 rounded bg-cyan-500/10 text-cyan-300">
              <div>Doctor Desk</div>
              <span className="text-[9px] text-zinc-400">Digital Rx</span>
            </div>
            <ArrowRight className="w-3 h-3 text-zinc-600" />
            <div className="text-center px-2 py-1 rounded bg-amber-500/10 text-amber-300">
              <div>Pharmacy</div>
              <span className="text-[9px] text-zinc-400">Atomic Stock</span>
            </div>
            <ArrowRight className="w-3 h-3 text-zinc-600" />
            <div className="text-center px-2 py-1 rounded bg-purple-500/10 text-purple-300">
              <div>Cashier</div>
              <span className="text-[9px] text-zinc-400">Unified Bill</span>
            </div>
          </div>
        </div>

        {/* Security & Pharmacy Status */}
        <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-2">
          <div className="flex items-center justify-between text-[10px] text-zinc-500">
            <span>ATOMIC INVENTORY & DATA SANITIZATION</span>
            <span className="text-emerald-400">&lt;80MS ENCOUNTER SYNC</span>
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="flex items-center justify-between text-zinc-300">
              <span>Doctor Rx: Amoxicillin 500mg (Batch #BX-904)</span>
              <span className="text-cyan-300 font-bold">Atomic Deduction: OK</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span>Cashier Billing Ledger (Diagnosis Fields Sanitized)</span>
              <span className="text-emerald-400 font-bold">Consolidated Invoice</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
          <span>ANGULAR • REACT • NODE.JS • MONGODB</span>
          <span className="text-emerald-400">PERSONAL CLINICAL PROTOTYPE</span>
        </div>
      </div>
    );

    if (proj && proj.screenshots && proj.screenshots.length > 0) {
      return (
        <ProjectScreenshotShowcase
          project={proj}
          onOpenGallery={onOpenGallery}
          renderBlueprintMockup={() => blueprintMockup}
        />
      );
    }

    return blueprintMockup;
  }

  // ==========================================
  // PERSONAL PROJECT 03: OrderMe Hotel Operations
  // ==========================================
  const proj = project || projectsData.find((p) => p.id === 'orderme-application');
  const blueprintMockup = (
    <div className="w-full h-full min-h-[360px] rounded-2xl bg-[#09090D] border border-white/10 p-5 flex flex-col justify-between font-mono text-xs select-none overflow-hidden relative group">
      <div className="absolute -top-10 -left-10 w-44 h-44 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <UtensilsCrossed className="w-4 h-4 text-purple-400" />
          <span className="font-bold text-white text-xs">OrderMe • Room 408 (Executive Suite)</span>
        </div>
        <span className="text-[10px] bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded border border-purple-500/20 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          Live WebSockets KDS Active
        </span>
      </div>

      {/* Live Order Tracking Pipeline */}
      <div className="space-y-2 my-3">
        <div className="flex items-center justify-between text-[10px] text-zinc-500 uppercase">
          <span>Order #OM-4291 Live Tracking</span>
          <span className="text-cyan-300 font-semibold">ETA: 6 Mins</span>
        </div>
        <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
          <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <div className="font-bold">01 PLACED</div>
            <div className="text-[9px] text-zinc-400">19:04 (QR Scan)</div>
          </div>
          <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <div className="font-bold">02 KITCHEN</div>
            <div className="text-[9px] text-zinc-400">Prep Finished</div>
          </div>
          <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-400 text-purple-300 animate-pulse">
            <div className="font-bold">03 EN ROUTE</div>
            <div className="text-[9px] text-white">Staff #ST-88</div>
          </div>
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-500">
            <div className="font-bold">04 DELIVERED</div>
            <div className="text-[9px] text-zinc-600">Pending NFC</div>
          </div>
        </div>
      </div>

      {/* Service Requests & Immutable Audit Log */}
      <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-2">
        <div className="flex items-center justify-between text-[10px] text-zinc-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
            HOTEL SERVICE AUDIT LOG (IMMUTABLE SHA-256)
          </span>
          <span className="text-emerald-400">VERIFIED</span>
        </div>
        <div className="space-y-1 text-[11px] text-zinc-300">
          <div className="truncate">
            <span className="text-zinc-500">[19:08:45]</span> Food Order: Grilled Atlantic Salmon dispatched by Kitchen
          </div>
          <div className="truncate text-zinc-400">
            <span className="text-zinc-500">[19:09:12]</span> Housekeeping Service: Extra Bath Linens acknowledged by Floor Team
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
        <span>ANGULAR 18+ • NODE 22+ • WEBSOCKETS</span>
        <span className="text-purple-400">PERSONAL HOSPITALITY PLATFORM</span>
      </div>
    </div>
  );

  if (proj && proj.screenshots && proj.screenshots.length > 0) {
    return (
      <ProjectScreenshotShowcase
        project={proj}
        onOpenGallery={onOpenGallery}
        renderBlueprintMockup={() => blueprintMockup}
      />
    );
  }

  return blueprintMockup;
};
