import React from 'react';
import {
  Building2, ArrowRight, Stethoscope, UtensilsCrossed, ShieldCheck,
  GraduationCap, CreditCard, Activity, Users, FileText, Check
} from 'lucide-react';

interface ProjectVisualMockupProps {
  projectId: string;
}

export const ProjectVisualMockup: React.FC<ProjectVisualMockupProps> = ({ projectId }) => {
  // Project 01: Smart School ERP (Multi-Tenant SaaS)
  if (projectId === 'smart-school-erp') {
    return (
      <div className="w-full h-full min-h-[350px] rounded-2xl bg-[#09090D] border border-white/10 p-5 flex flex-col justify-between font-mono text-xs select-none overflow-hidden relative group">
        {/* Glow accent */}
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#00F0FF]/10 rounded-full blur-3xl" />

        {/* Dashboard Top bar with Tenant Switcher */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#00F0FF]" />
            <span className="font-bold text-white text-xs">Smart School ERP • Multi-Tenant SaaS</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-cyan-400 bg-[#00F0FF]/10 px-2.5 py-0.5 rounded-full border border-[#00F0FF]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping" />
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
          <span className="text-[#00F0FF]">AWS EC2 + S3 • 99.98% UPTIME</span>
        </div>
      </div>
    );
  }

  // Project 02: Enterprise Workflow Platform
  if (projectId === 'enterprise-workflow-platform') {
    return (
      <div className="w-full h-full min-h-[350px] rounded-2xl bg-[#09090D] border border-white/10 p-5 flex flex-col justify-between font-mono text-xs select-none overflow-hidden relative group">
        {/* Glow accent */}
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-blue-500/10 rounded-full blur-3xl" />

        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-blue-400" />
            <span className="font-bold text-white text-xs">Enterprise Workflow & Automation Engine</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>MongoDB Query Speed: +50% Boost</span>
          </div>
        </div>

        {/* Live metric cards */}
        <div className="grid grid-cols-3 gap-3 my-3">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px]">WORKFLOW TASKS</div>
            <div className="text-lg font-bold text-white font-heading">24,500+</div>
            <div className="text-[10px] text-cyan-400">Automated Routing</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px]">DATA LAYER</div>
            <div className="text-lg font-bold text-emerald-400 font-heading">Modernized</div>
            <div className="text-[10px] text-zinc-400">Zero Business Loss</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-zinc-500 text-[10px]">EXPORT LATENCY</div>
            <div className="text-lg font-bold text-purple-400 font-heading">160ms</div>
            <div className="text-[10px] text-zinc-400">Targeted Index Tuning</div>
          </div>
        </div>

        {/* Workflow State Machine Visualization */}
        <div className="space-y-2 bg-black/40 p-3 rounded-xl border border-white/5">
          <div className="text-[10px] text-zinc-500 flex items-center justify-between">
            <span>DECOUPLED MICROSERVICES PIPELINE</span>
            <span>NODE.JS PM2 CLUSTER</span>
          </div>

          <div className="flex items-center justify-between gap-1 p-2 rounded-lg bg-white/[0.02] border border-white/5 text-[10px]">
            <div className="text-center px-2 py-1 rounded bg-blue-500/10 text-blue-300">
              <div>Stage 01</div>
              <span className="text-[9px] text-zinc-400">Intake API</span>
            </div>
            <ArrowRight className="w-3 h-3 text-zinc-600" />
            <div className="text-center px-2 py-1 rounded bg-cyan-500/10 text-cyan-300">
              <div>Stage 02</div>
              <span className="text-[9px] text-zinc-400">RBAC Validated</span>
            </div>
            <ArrowRight className="w-3 h-3 text-zinc-600" />
            <div className="text-center px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">
              <div>Stage 03</div>
              <span className="text-[9px] text-zinc-400">Indexed Query</span>
            </div>
            <ArrowRight className="w-3 h-3 text-zinc-600" />
            <div className="text-center px-2 py-1 rounded bg-purple-500/10 text-purple-300">
              <div>Stage 04</div>
              <span className="text-[9px] text-zinc-400">S3 Presigned</span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
          <span>ANGULAR • NODE.JS • EXPRESS • MONGODB • REST APIs</span>
          <span className="text-blue-400">AWS EC2 + S3 • NGINX REVERSE PROXY</span>
        </div>
      </div>
    );
  }

  // Project 03: Clinical Care & Hospital Management Platform
  if (projectId === 'hospital-management-system') {
    return (
      <div className="w-full h-full min-h-[350px] rounded-2xl bg-[#09090D] border border-white/10 p-5 flex flex-col justify-between font-mono text-xs select-none overflow-hidden relative group">
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
          <span className="text-emerald-400">AWS S3 DOCUMENT REPOSITORY</span>
        </div>
      </div>
    );
  }

  // Project 04: OrderMe Hotel Operations Platform (Live Order Tracking, Services & Audit Logs)
  return (
    <div className="w-full h-full min-h-[350px] rounded-2xl bg-[#09090D] border border-white/10 p-5 flex flex-col justify-between font-mono text-xs select-none overflow-hidden relative group">
      <div className="absolute -top-10 -left-10 w-44 h-44 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <UtensilsCrossed className="w-4 h-4 text-purple-400" />
          <span className="font-bold text-white text-xs">OrderMe • Room 408 (Executive Suite)</span>
        </div>
        <span className="text-[10px] bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded border border-purple-500/20 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
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
        <span className="text-purple-400">LATENCY: &lt;42ms • ZERO LOST TICKETS</span>
      </div>
    </div>
  );
};
